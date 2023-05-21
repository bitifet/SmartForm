// types/list.type.js
// ==================

// TODO:
// =====
//
// 👉 Keep first item in place:
//    -------------------------
//     
//    For lists allowing 0 items, make first element disabled and not visible
//    instead of completely removing from DOM.
//
//    This would avoid lots of visual layout issues.
//


import {SmartComponent} from "../lib/component.js";
import {makeRoom} from "../lib/helpers.js";
import {foldable} from "../decorators/foldable.deco.js";
import {action} from "./action.type.js";
import {mutex} from "../decorators/mutex.deco.js";


@foldable
export class list extends SmartComponent {
    render () {//{{{
        const me = this;
        me.originalDisplayProp = me.target.style.display;

        me.min_items = Math.max(0,
            typeof me.options.min_items == "number" ? me.options.min_items
            : 1
        );
        me.max_items = Math.max(me.min_items,
            typeof me.options.max_items == "number" ? me.options.max_items
            : Infinity
        );
        me.children = [];
        const numChilds = me.target.children.length;
        if (numChilds != 1) throw me.renderError(
            'LIST_WRONG_NUM_CHILDREN'
            , `List components must contain exactly 1 direct children, but ${numChilds} given`
        );
        me.itemTpl = me.target.children[0];
        if (
            me.itemTpl.querySelector("[id]") !== null // Contains IDs
        ) throw me.renderError(
            'LIST_CONTAINS_ID'
            , `List components are not allowed to contain elements with 'id' attribute`
        );
        const tplOptions = me.getNodeOptions(
            me.itemTpl
            , {
                type: me.options.of || "form", // Use form as default.
            }
        );
        if (
            me.options.of
            && tplOptions.type != me.options.of
        ) throw me.renderError(
            'LIST_ITEM_TYPE_MISSMATCH'
            , `List item type missmatch`
        );
        me.itemTpl.remove();
        // onRendered tweaks:
        me.root.onRendered(async ()=>{
            for(let i=0; i<me.min_items; i++) await me.addItem();
            if (me.min_items == 0) {
                // Update "count" actions in case of not already updated by
                // me.addItem:
                me.getActions("count").forEach(
                    acc=>acc.target.innerText = String(me.children.length)
                );
            };
        });
        return;
    };//}}}
    @mutex("list_mutating")
    async export() {//{{{
        const me = this;
        const list = [];
        const stripEmpties = ! me.inherittedOption("exportEmpties", false);
        for (const child of me.children) {
            if (stripEmpties && await child.isEmpty()) continue;
            list.push(await child.export())
        };
        return list;
    };//}}}
    async import(data = []) {//{{{
        const me = this;
        // Auto-update in case of scalar to array template upgrade:
        if (! data instanceof Array) data = [data];
        // Load data:
        for (
            let i = 0;
            i < Math.min(data.length, me.max_items); // Limit to allowed items
            i++
        ) {
            if (me.children.length <= i) await me.addItem(); // Make room on demand
            await me.children[i].import(data[i]);
        };
        // Remove extra items if possible (over min_items):
        for (
            let i = Math.max(data.length, me.min_items);
            i < me.children.length;
        ) await me.removeItem();
        // Report if data doesn't fit:
        if (data.length > me.max_items) {
            console.error(`Max of ${me.max_items} items exceeded by ${data.length - me.max_items} while data loadig`);
            // FIXME: Improve handling of this situation having it implies
            // data loss.
        };
        return; // await me.export();
    };//}}}
    @action
    @mutex("list_mutating")
    async addItem(options = {}) {//{{{
        const me = this;
        // Parameters checking and resolution:{{{
        let {
            action,
            origin = null, // (Internal call)
            context = me,  // (Internal call)
            target,
            position = "after",
            autoscroll,   // "self" / "parent" / (falsy)
        } = options;
        if (position != "after" && position != "before") throw me.renderError(
            'LIST_WRONG_ADDITEM_POSITION'
            , `Invalid value for addItem() position property: ${position}`
        );
        if (me.children.length >= me.max_items) {
            me.emit("error", {
                code: 'LIST_MAX_ITEMS_REACHED',
                message: `Cannot add items over max_items boundary`,
                options,
            });
            return;
        };
        if (me.children.length && ! target) target = (
            position == "before" ?  me.children[0] // Insert at the beginning
            : me.children[me.children.length - 1]  // Append at the end
        );
        //}}}
        // DOM element creation:{{{
        const newItem = me.itemTpl.cloneNode(true);
        //}}}
        // addItem event emitting:{{{
        const onRenderedCbks = [];
            // Allow for handy callback instead of two separate event handlers
        await me.emit("addItem", {
                action,
                origin,
                context,
                target,  // <--- Effective target.
                position,
                newItem,
                options, // <- Original options (including target)
                onRendered: cbk => onRenderedCbks.push(cbk),
        });
        //}}}
        // Child component creation and insertion:{{{
        let newChild;
        if (! me.children.length) {
            me.target.appendChild(newItem);
            newChild = await me.enhance(newItem, {type: "form", name: 0});
            await newChild.rendered;
            me.children.push(newChild);
            newChild.name = 0;
            newChild.updateId();
        } else {
            me.children = (await Promise.all(
                me.children.map(async (child, i)=>{
                    if (! child.target.isSameNode(target.target)) return child;
                    if (position == "after") {
                        child.target.after(newItem);
                        newChild = await me.enhance(newItem, {type: "form"});
                        await newChild.rendered;
                        return [child, newChild]; // Right order, flatted later...
                    } else {
                        child.target.before(newItem);
                        newChild = await me.enhance(newItem, {type: "form"});
                        await newChild.rendered;
                        return [newChild, child]; // Right order, flatted later...
                    };
                })
            ))
                .flat()
                .map((c,i)=>{
                    c.name = i;
                    c.updateId();
                    return c;
                })
            ;
        };
        //}}}
        // Autoscroll handling:{{{
        if (autoscroll == "elegant" && !! newChild) {
            makeRoom(newChild.target, - newChild.offsetHeight);
        } else {
            const moveTarget = (
                ! newChild ? null
                : autoscroll == "self" ? newChild
                : autoscroll == "parent" ? newChild.parent
                : null
            );
            if (moveTarget) moveTarget.moveTo();
        };
        //}}}
        // Execute "onRendered" callbacks:{{{
        onRenderedCbks.forEach(cbk=>cbk(newChild));
        //}}}
        me.getActions("count").forEach(
            acc=>acc.target.innerText = String(me.children.length)
        );
    };//}}}
    @action
    @mutex("list_mutating")
    async removeItem(options = {}) {//{{{
        const me = this;
        let {
            action,
            origin = null, // (Internal call)
            context = me,  // (Internal call)
            target,
            position = "after",
            autoscroll,   // "self" / "parent" / (falsy)
            keep_non_empty,
            failback,
        } = options;
        if (! target) {
            if (keep_non_empty) for (
                const t of [...me.children]
                .reverse() // Pick last first
            ) if (await t.isEmpty()) {
                target = t;
                break;
            };
            if (! target) {
                target = me.children[me.children.length - 1];
                keep_non_empty = false;
                // Allow non empty removal as last chance if no target
                // specified.
            };
        };
        const targets = (
            target instanceof Array ? target
            : [target]
        );
        for (const currentTarget of [...targets].reverse()) {
            if (me.children.length <= me.min_items) {
                switch (failback) {
                    case "none":
                        break;
                    case "clear":
                        await currentTarget.empty();
                        return;
                    case "throw":
                    default:
                        me.emit("error", {
                            code: 'LIST_MIN_ITEMS_REACHED',
                            message: `Cannot remove items under min_items boundary`,
                            options,
                        });
                        return;
                };
            };
            if (keep_non_empty && ! await currentTarget.isEmpty()) continue;
            let oldChild = null;
            const newChildren = me.children
                .filter(child=>{
                    if (child.target.isSameNode(currentTarget.target)) {
                        if (autoscroll == "elegant") {
                            makeRoom(child.target, child.target.offsetHeight);
                        } else {
                            const moveTarget = (
                                autoscroll == "self" ? child
                                : autoscroll == "parent" ? child.parent
                                : null
                            );
                            if (moveTarget) moveTarget.moveTo();
                        };

                        oldChild = child;
                        return false;
                    };
                    return true;
                })
                .map((c,i)=>{
                    c.name = i;
                    c.updateId();
                    return c;
                })
            ;
            // removeItem event emitting:{{{
            const onRemovedCbks = [];
                // Allow for handy callback instead of two separate event handlers
            await me.emit("removeItem", {
                action,
                origin,
                context,
                target: currentTarget,  // <--- Effective target.
                position,
                oldChild,                 // Child going to be removed.
                oldItem: oldChild.target, // Its target (analogous to addItem event).
                options,
                onRemoved: cbk => onRemovedCbks.push(cbk),
            });
            //}}}

            oldChild.target.remove();
            me.children = newChildren;

            me.getActions("count").forEach(
                acc=>acc.target.innerText = String(me.children.length)
            );

            // Execute "onRendered" callbacks:{{{
            onRemovedCbks.forEach(cbk=>cbk());
            //}}}

        };

    };//}}}
    async isEmpty() {//{{{
        const me = this;
        for (
            const child of me.children
        ) if (
            ! await child.isEmpty()
        ) return false;
        return true;
    };//}}}
    @action
    async empty() {//{{{
        const me = this;
        return await me.import([]);
    };//}}}
    @action
    count() {
        // Return number of children.
        // But also it's sole existence allow reinjecting contents to it.
        const me = this;
        return me.children.length;
    };
};

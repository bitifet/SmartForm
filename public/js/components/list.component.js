// components/list.component.js
// ============================

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


import {SmartComponent} from "../lib/component.js";
export class list extends SmartComponent {
    render () {//{{{
        const me = this;
        me.children = [];
        const numChilds = me.target.children.length;
        if (numChilds != 1) throw me.Error(
            `List components must contain exactly 1 direct children, but ${numChilds} given.`
        );
        me.itemTpl = me.target.children[0];
        if (
            me.itemTpl.querySelector("[id]") !== null // Contains IDs
        ) throw me.Error(
            `List components are not allowed to contain elements with 'id' attribute.`
        );
        const tplOptions = me.getNodeOptions(
            me.itemTpl
            , {type: me.options.of}
        );
        if (tplOptions.type != me.options.of) throw me.Error(
            `List item type missmatch.`
        );
        if (! tplOptions.type) tplOptions.type = "form"; // Use form as default.
        me.setNodeOptions(me.itemTpl, tplOptions);
        me.itemTpl.remove();
        return;
    };//}}}
    export() {//{{{
        const me = this;
        return me.children.map(ch=>ch.export());
    };//}}}
    addItem() {//{{{
        const me = this;
        const newItem = me.itemTpl.cloneNode(true);
        me.target.appendChild(newItem);
        const newChild = me.enhance(newItem, {type: "form", name: me.children.length});
        me.children.push(newChild);
    };//}}}
    removeItem({//{{{
        target,
        ...options
    }) {
        const me = this;
        if (target instanceof Array) return target.map(t=>me.removeItem({target: t, ...options}));
        if (options.keep_non_empty && ! target.isEmpty()) return;
        me.children = me.children
            .filter(child=>{
                if (child.target.isSameNode(target.target)) {
                    child.target.remove();
                    return false;
                };
                return true;
            })
            .map((c,i)=>(c.name = i, c))
        ;
    };//}}}
    isEmpty() {//{{{
        const me = this;
        return (
            0 > me.children.findIndex(
                child=>!child.isEmpty()
            )
        );
    };//}}}
};

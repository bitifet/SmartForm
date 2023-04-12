// components/list.component.js
// ============================
import {SmartComponent} from "../lib/component.js";
export class list extends SmartComponent {
    render () {
        const me = this;
        me.childs = [];
        const numChilds = me.target.children.length;
        if (numChilds != 1) throw me.Error(
            `List components must contain exactly 1 direct childs, but ${numChilds} given.`
        );
        me.itemTpl = me.target.children[0];
        if (
            me.itemTpl.querySelector("[id]") !== null // Contains IDs
        ) throw me.Error(
            `List components are not allowed to contain elements with 'id' attribute.`
        );
        const tplOptions = {
            type: me.options.of,
            ...me.getNodeOptions(me.itemTpl),
        };
        if (tplOptions.type != me.options.of) throw me.Error(
            `List item type missmatch.`
        );
        if (! tplOptions.type) tplOptions.type = "form"; // Use form as default.
        me.setNodeOptions(me.itemTpl, tplOptions);


        me.itemTpl.remove();

        console.log("New list!!!!", {
            target: me.target,
            parent: me.parent,
            options: me.options,
            path: me.path,
        });

        return;
    };
    addItem() {
        const me = this;
        const newItem = me.itemTpl.cloneNode(true);
        me.target.appendChild(newItem);
        const newChild = me.enhance(newItem, {type: "form"});
        me.childs.push(newChild);
    };
    removeItem() {
        const me = this;
        const lastChild = me.childs.pop();
        lastChild.target.remove();
    };
};

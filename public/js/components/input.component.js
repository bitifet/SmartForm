// components/input.component.js
// =============================
import {SmartComponent} from "../lib/component.js";
export class input extends SmartComponent {
    render() {//{{{
        const me = this;
        // console.log("New input!!!!", {
        //     target: me.target,
        //     parent: me.parent,
        //     options: me.options,
        //     inputField: me.inputField,
        // });
        return;
    };//}}}
    export() {//{{{
        const me = this;
        return me.target.value;
    };//}}}
    import(value) {
        const me = this;
        me.target.value = value;
        // me.target.dispatchEvent(
        //     new customEvent("change", {})
        // );
    };
    isEmpty() {//{{{
        const me = this;
        const value = me.export();
        switch (typeof value) {
            case "string": return ! value.trim().length;
            case "number": return ! value;
            default: return false;
        };
    };//}}}
};

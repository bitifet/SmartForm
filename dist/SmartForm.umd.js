!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).SmartForm={})}(this,(function(t){"use strict";const e=Symbol("Events");class n{constructor(){this[e]=new Set}on(t,n){const r=this;r[e].has(t)||r[e].set(t,[]),r[e].get(t).push(n.bind(r))}emit(t,n){const r=this;if(r[e].has(t))for(const o of r[e].get(t))o(n);else console.error("".concat(r.constructor.name," has no handler for ").concat(t," action"))}}const r={},o=Symbol("smart_component"),i=/^[a-z0-9_]+$/i,s=/[\*\?]/,a=class extends Error{constructor(t,e,n){super("RenderError(".concat(n,"): ").concat(e)),this.code=t,this.path=n,this.stack=this.stack.split("\n").slice(2).join("\n")}},c=class extends Error{constructor(t,e,n){super("RuleError(".concat(n,"): ").concat(e)),this.code=t,this.path=n,this.stack=this.stack.split("\n").slice(2).join("\n")}};class l extends n{constructor(t){let{property_name:e="smart",...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;super();const s=this;if(s.validName=function(){let t=0;return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];for(let t of n)if("string"==typeof t&&(t=t.trim(),t.length))return t;return"UNNAMED"+ ++t}}(),s.property_name=e,s.selector="[data-".concat(s.property_name,"]"),s.typeName=s.constructor.name,s.components=r,s.target=t,s.options=n,s.setNodeOptions(s.target,s.options),s.parent=i,!s.parent instanceof l)throw s.renderError("INVALID_PARENT","Smart Components must have valid Smart Component parent.");s.root=null===s.parent?s:s.parent,s.parents={},s.parents[Symbol.iterator]=function*(){let t=s;for(;t;)yield t,t=t.parent},s.onRenderedTasks=[],s.children={},s.target[o]=s,s.render(),s.onRenderedTasks.forEach((t=>t())),s.onRenderedTasks=null}onRendered(t){const e=this;e.onRenderedTasks?e.onRenderedTasks.push(t):t()}getNodeOptions(t,e){const n=(t.dataset[this.property_name]||"").trim()||null,r={...e,...(()=>{try{const t=JSON.parse(n);if("object"!=typeof t)throw new Error("NO_OBJECT");return t}catch(t){return n.match(i)?{type:n}:{}}})()};return r.action||r.type||(r.type="input"),this.setNodeOptions(t,r),r}setNodeOptions(t,e){t.dataset[this.property_name]=JSON.stringify(e)}enhance(t,e){const n=this;let r=n.getNodeOptions(t,e);if(r.action){if(r.type||(r.type="action"),"action"!=r.type)throw n.renderError("WRONG_ACTION_TYPE",'Actions must be of type "action" but "'.concat(r.type,'" given.'));delete r.name}else if("string"!=typeof r.type)throw n.renderError("NO_TYPE_PROVIDED","Invalid SmartFom item: type is mandatory for non action elements.");const o=n.components[r.type];if(!o)throw n.renderError("UNKNOWN_TYPE","Unimplemented SmartForm component controller: ".concat(r.type));return new o(t,r,n)}getComponent(t){return t[o]||t.parentElement.closest(this.selector)[o]||null}getPath(){return[...this.parents].map((t=>t.name)).reverse().join("/")||"/"}find(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this;if("/"==t[0])for(;e.parent;)e=e.parent;const n=t.split("/").filter((t=>t)),r=n.findIndex((t=>t.match(s)));if(r>=0){const t=(o=n[r],new RegExp("^"+o.replace(/\*+/g,".*").replace(/\?/g,".")+"$")),i=n.slice(0,r).join("/"),s=n.slice(r+1).join("/"),a=e.find(i);return Object.entries(a.children).filter((e=>{let[n,r]=e;return r&&n.match(t)})).map((t=>{let[,e]=t;return e.find(s)})).flat(1/0)}var o;return n.reduce(((t,e)=>void 0===t?null:".."==e?t.parent:t.children[e]),e)}inherittedOption(t,e){const n=this;for(const e of n.parents)if(void 0!==e.options[t])return e.options[t];return e}moveTo(){const t=this;t.target.id||(t.target.id=t.getPath()),document.location.hash=t.target.id}getActions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const e=this,n=[];for(const r of[...e.root.target.querySelectorAll(e.selector)].map((t=>t[o]))){const o=r.getActionArgs();o&&(Object.is(o.context,e)&&(!t||1+[t].flat().findIndex((t=>t==o.action)))&&n.push(r))}return n}getActionArgs(){}renderError(t,e){return new a(t,e,this.getPath())}ruleError(t,e){return new c(t,e,this.getPath())}}function d(t,e){if(void 0!==r[t])throw new Error("Duplicate component type definition: ".concat(t));if(!(e.prototype instanceof l))throw new Error("Bad component type implementation for: ".concat(t));r[t]=e}function p(t,e){return function(n){(function(t,e){if(t.v)throw new Error("attempted to call "+e+" after decoration was finished")})(e,"addInitializer"),u(n,"An initializer"),t.push(n)}}function f(t,e){if(!t(e))throw new TypeError("Attempted to access private element on non-instance")}function h(t,e,n,r,o,i,s,a,c){var l;switch(o){case 1:l="accessor";break;case 2:l="method";break;case 3:l="getter";break;case 4:l="setter";break;default:l="field"}var d,h,u={kind:l,name:s?"#"+e:e,static:i,private:s},m={v:!1};if(0!==o&&(u.addInitializer=p(r,m)),s||0!==o&&2!==o)if(2===o)d=function(t){return f(c,t),n.value};else{var g=0===o||1===o;(g||3===o)&&(d=s?function(t){return f(c,t),n.get.call(t)}:function(t){return n.get.call(t)}),(g||4===o)&&(h=s?function(t,e){f(c,t),n.set.call(t,e)}:function(t,e){n.set.call(t,e)})}else d=function(t){return t[e]},0===o&&(h=function(t,n){t[e]=n});var y=s?c.bind():function(t){return e in t};u.access=d&&h?{get:d,set:h,has:y}:d?{get:d,has:y}:{set:h,has:y};try{return t(a,u)}finally{m.v=!0}}function u(t,e){if("function"!=typeof t)throw new TypeError(e+" must be a function")}function m(t,e){var n=typeof e;if(1===t){if("object"!==n||null===e)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==e.get&&u(e.get,"accessor.get"),void 0!==e.set&&u(e.set,"accessor.set"),void 0!==e.init&&u(e.init,"accessor.init")}else if("function"!==n){throw new TypeError((0===t?"field":10===t?"class":"method")+" decorators must return a function or void 0")}}function g(t){return function(e){t(this,e)}}function y(t,e,n,r,o,i,s,a,c){var l,d,p,f,u,y,v,E=n[0];if(s?l=0===o||1===o?{get:(v=n[3],function(){return v(this)}),set:g(n[4])}:3===o?{get:n[3]}:4===o?{set:n[3]}:{value:n[3]}:0!==o&&(l=Object.getOwnPropertyDescriptor(e,r)),1===o?p={get:l.get,set:l.set}:2===o?p=l.value:3===o?p=l.get:4===o&&(p=l.set),"function"==typeof E)void 0!==(f=h(E,r,l,a,o,i,s,p,c))&&(m(o,f),0===o?d=f:1===o?(d=f.init,u=f.get||p.get,y=f.set||p.set,p={get:u,set:y}):p=f);else for(var b=E.length-1;b>=0;b--){var _;void 0!==(f=h(E[b],r,l,a,o,i,s,p,c))&&(m(o,f),0===o?_=f:1===o?(_=f.init,u=f.get||p.get,y=f.set||p.set,p={get:u,set:y}):p=f,void 0!==_&&(void 0===d?d=_:"function"==typeof d?d=[d,_]:d.push(_)))}if(0===o||1===o){if(void 0===d)d=function(t,e){return e};else if("function"!=typeof d){var x=d;d=function(t,e){for(var n=e,r=0;r<x.length;r++)n=x[r].call(t,n);return n}}else{var w=d;d=function(t,e){return w.call(t,e)}}t.push(d)}0!==o&&(1===o?(l.get=p.get,l.set=p.set):2===o?l.value=p:3===o?l.get=p:4===o&&(l.set=p),s?1===o?(t.push((function(t,e){return p.get.call(t,e)})),t.push((function(t,e){return p.set.call(t,e)}))):2===o?t.push(p):t.push((function(t,e){return p.call(t,e)})):Object.defineProperty(e,r,l))}function v(t,e,n){for(var r,o,i,s=[],a=new Map,c=new Map,l=0;l<e.length;l++){var d=e[l];if(Array.isArray(d)){var p,f,h=d[1],u=d[2],m=d.length>3,g=h>=5,v=n;if(g?(p=t,0!=(h-=5)&&(f=o=o||[]),m&&!i&&(i=function(e){return _(e)===t}),v=i):(p=t.prototype,0!==h&&(f=r=r||[])),0!==h&&!m){var b=g?c:a,x=b.get(u)||0;if(!0===x||3===x&&4!==h||4===x&&3!==h)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+u);!x&&h>2?b.set(u,h):b.set(u,!0)}y(s,p,d,u,h,g,m,f,v)}}return E(s,r),E(s,o),s}function E(t,e){e&&t.push((function(t){for(var n=0;n<e.length;n++)e[n].call(t);return t}))}function b(t,e,n,r){return{e:v(t,e,r),get c(){return function(t,e){if(e.length>0){for(var n=[],r=t,o=t.name,i=e.length-1;i>=0;i--){var s={v:!1};try{var a=e[i](r,{kind:"class",name:o,addInitializer:p(n,s)})}finally{s.v=!0}void 0!==a&&(m(10,a),r=a)}return[r,function(){for(var t=0;t<n.length;t++)n[t].call(r)}]}}(t,n)}}}function _(t){if(Object(t)!==t)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==t?typeof t:"null"));return t}function x(t,e){let{kind:n,...r}=e;if("class"==n)return class extends t{render(){const t=super.render(...arguments),e=this;return e.root.onRendered((()=>{e.fold({operation:e.options.folded?"fold":"unfold"})})),t}fold(){let{operation:t="toggle"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this,n="none"==e.target.style.display,r="fold"==t||"unfold"!=t&&!n;e.target.style.display=r?"none":e.originalDisplayProp,e.getActions("fold").forEach((t=>{const{foldedClass:e,unfoldedClass:n}=t.options;e&&t.target.classList[r?"add":"remove"](e),n&&t.target.classList[r?"remove":"add"](n)})),e.getActions(["addItem","removeItem"]).map(r?t=>t.disable():t=>t.enable())}}}var w;let T;[T,w]=b(class extends l{render(){const t=this;t.originalDisplayProp=t.target.style.display;for(const e of function(t,e){const n=null===t.parentNode?t=>null===t:e=>null===e||e.isSameNode(t);return[...t.querySelectorAll(e)].filter((t=>n(t.parentNode.closest(e))))}(t.target,t.selector)){const n=t.enhance(e);"action"!=n.options.type&&(n.name=t.validName(n.options.name,e.getAttribute("name")),t.children[n.name]=n)}}export(){return Object.fromEntries(Object.entries(this.children).map((t=>{let[e,n]=t;return[e,n.export()]})))}import(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=Object(t).constructor;if(e!=={}.constructor)throw this.renderError("FORM_NOT_PLAIN_OBJECT","Expected plain object for form import, ".concat(e.name," given."));return Object.fromEntries(Object.entries(this.children).map((e=>{let[n,r]=e;return[n,r.import(t[n])]})))}isEmpty(){return 0>Object.values(this.children).findIndex((t=>!t.isEmpty()))}empty(){return this.import({})}},[],[x]).c,w();class N extends T{render(){super.render();const t=Object.keys(this.children).length;if(1!=t)throw this.renderError("NOT_A_SINGLETON","Singleton forms are only allowed to contain exactly one"+" data field but ".concat(t," found."))}export(){return Object.values(super.export())[0]}import(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return super.import(Object.fromEntries([[Object.keys(this.children)[0],t]]))}empty(){this.import("")}}var O;let I;[I,O]=b(class extends l{render(){const t=this;t.originalDisplayProp=t.target.style.display,t.min_items=Math.max(0,"number"==typeof t.options.min_items?t.options.min_items:1),t.max_items=Math.max(t.min_items,"number"==typeof t.options.max_items?t.options.max_items:1/0),t.children=[];const e=t.target.children.length;if(1!=e)throw t.renderError("LIST_WRONG_NUM_CHILDREN","List components must contain exactly 1 direct children, but ".concat(e," given"));if(t.itemTpl=t.target.children[0],null!==t.itemTpl.querySelector("[id]"))throw t.renderError("LIST_CONTAINS_ID","List components are not allowed to contain elements with 'id' attribute");const n=t.getNodeOptions(t.itemTpl,{type:t.options.of||"form"});if(t.options.of&&n.type!=t.options.of)throw t.renderError("LIST_ITEM_TYPE_MISSMATCH","List item type missmatch");t.itemTpl.remove(),t.root.onRendered((()=>{for(let e=0;e<t.min_items;e++)t.addItem();0==t.min_items&&t.getActions("count").forEach((e=>e.target.innerText=String(t.children.length)))}))}export(){const t=this;return(t.inherittedOption("exportEmpties",!1)?t.children:t.children.filter((t=>!t.isEmpty()))).map((t=>t.export()))}import(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const e=this;!t instanceof Array&&(t=[t]);for(let n=0;n<Math.min(t.length,e.max_items);n++)e.children.length<=n&&e.addItem(),e.children[n].import(t[n]);for(let n=Math.max(t.length,e.min_items);n<e.children.length;)e.removeItem();for(let t=e.children.length;t<e.min_items;t++)e.chldren[t].empty();return t.length>e.max_items&&console.error("Max of ".concat(e.max_items," items exceeded by ").concat(t.length-e.max_items," while data loadig")),e.export()}addItem(){let{target:t,position:e="after",autoscroll:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this;if("after"!=e&&"before"!=e)throw r.renderError("LIST_WRONG_ADDITEM_POSITION","Invalid value for addItem() position property: ".concat(e));if(r.children.length>=r.max_items)throw r.ruleError("LIST_MAX_ITEMS_REACHED","Cannot add items over max_items boundary");const o=r.itemTpl.cloneNode(!0);let i;r.children.length?(t||(t="before"==e?r.children[0]:r.children[r.children.length-1]),r.children=r.children.map(((n,s)=>n.target.isSameNode(t.target)?"after"==e?(n.target.after(o),i=r.enhance(o,{type:"form"}),[n,i]):(n.target.before(o),i=r.enhance(o,{type:"form"}),[i,n]):n)).flat().map(((t,e)=>(t.name=e,t)))):(r.target.appendChild(o),i=r.enhance(o,{type:"form",name:0}),r.children.push(i)),r.getActions("count").forEach((t=>t.target.innerText=String(r.children.length)));const s=i?"self"==n?i:"parent"==n?i.parent:null:null;s&&s.moveTo()}removeItem(){let{target:t,...e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=this;let{keep_non_empty:r}=e;if(t||(t=[...n.children].reverse().find(((t,e)=>!r||t.isEmpty())),t||(t=n.children[n.children.length-1],r=!1)),t instanceof Array)return t.map((t=>n.removeItem({target:t,...e})));if(n.children.length<=n.min_items)switch(e.failback){case"none":break;case"clear":return void t.empty();default:throw n.ruleError("LIST_MIN_ITEMS_REACHED","Cannot remove items under min_items boundary")}r&&!t.isEmpty()||(n.children=n.children.filter((e=>!e.target.isSameNode(t.target)||(e.target.remove(),!1))).map(((t,e)=>(t.name=e,t))),n.getActions("count").forEach((t=>t.target.innerText=String(n.children.length))))}isEmpty(){return 0>this.children.findIndex((t=>!t.isEmpty()))}empty(){return this.import([])}count(){}},[],[x]).c,O();class A extends l{render(){}export(){return this.target.value}import(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.target.value=t,this.target.value}isEmpty(){return!this.export().trim().length}empty(){this.import("")}}class S extends l{render(){}disable(){this.target.disabled=!0}enable(){this.target.disabled=!1}getActionArgs(){const t=this,e=[...t.parents],{action:n,for:r,to:o}=t.options;if(!n)return;let[i,s]=n.split(":").reverse();const a=r?t.parent.find(r):e.find((t=>(!s||t.typeName==s)&&"function"==typeof t[i])),c=o?a.find(o):r?null:e.find((t=>t.parent.target.isSameNode(a.target)));if("function"!=typeof a[i])throw t.renderError("UNKNOWN_ACTION","Unimplemented action ".concat(n)+(a?" for ".concat(a.options.type):""));return{action:i,origin:t,context:a,target:c,...t.options}}}function j(t){const e=this.getComponent(t.target).getActionArgs();if(!e)return;const{context:n,action:r}=e;n[r](e)}for(const[t,e]of Object.entries({form:T,singleton:N,action:S,list:I,input:A}))d(t,e);t.SmartForm=class extends T{constructor(t,e){const n={...e,name:"",type:"form"};super(t,n,null);const r=this;r.target.dataset[r.property_name]=n,r.target.addEventListener("click",j.bind(r),!0)}},t.createComponent=d,Object.defineProperty(t,"__esModule",{value:!0})}));
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).SmarkForm=e()}(this,(function(){"use strict";function t(t){if(Object(t)!==t)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==t?typeof t:"null"));return t}function e(t,e,r){"symbol"==typeof e&&(e=(e=e.description)?"["+e+"]":"");try{Object.defineProperty(t,"name",{configurable:!0,value:r?r+" "+e:e})}catch(t){}return t}function r(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function n(t){var e=r(t,"string");return"symbol"==typeof e?e:e+""}function o(){function r(t,e){return function(r){!function(t,e){if(t.v)throw Error("attempted to call addInitializer after decoration was finished")}(e),s(r,"An initializer"),t.push(r)}}function o(t,e){if(!t(e))throw new TypeError("Attempted to access private element on non-instance")}function i(t,e,i,s,a,c,l,d,u){var f;switch(a){case 1:f="accessor";break;case 2:f="method";break;case 3:f="getter";break;case 4:f="setter";break;default:f="field"}var p,g,m={kind:f,name:l?"#"+e:n(e),static:c,private:l},h={v:!1};if(0!==a&&(m.addInitializer=r(s,h)),l||0!==a&&2!==a)if(2===a)p=function(t){return o(u,t),i.value};else{var y=0===a||1===a;(y||3===a)&&(p=l?function(t){return o(u,t),i.get.call(t)}:function(t){return i.get.call(t)}),(y||4===a)&&(g=l?function(t,e){o(u,t),i.set.call(t,e)}:function(t,e){i.set.call(t,e)})}else p=function(t){return t[e]},0===a&&(g=function(t,r){t[e]=r});var N=l?u.bind():function(t){return e in t};m.access=p&&g?{get:p,set:g,has:N}:p?{get:p,has:N}:{set:g,has:N};try{return t(d,m)}finally{h.v=!0}}function s(t,e){if("function"!=typeof t)throw new TypeError(e+" must be a function")}function a(t,e){var r=typeof e;if(1===t){if("object"!==r||null===e)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==e.get&&s(e.get,"accessor.get"),void 0!==e.set&&s(e.set,"accessor.set"),void 0!==e.init&&s(e.init,"accessor.init")}else if("function"!==r)throw new TypeError((0===t?"field":10===t?"class":"method")+" decorators must return a function or void 0")}function c(t){return function(e){t(this,e)}}function l(t,r,n,o,s,l,d,u,f){var p,g,m,h,y,N,v,b,w=n[0];if(d?(0===s||1===s?(p={get:(y=n[3],function(){return y(this)}),set:c(n[4])},m="get"):3===s?(p={get:n[3]},m="get"):4===s?(p={set:n[3]},m="set"):p={value:n[3]},0!==s&&(1===s&&e(p.set,"#"+o,"set"),e(p[m||"value"],"#"+o,m))):0!==s&&(p=Object.getOwnPropertyDescriptor(r,o)),1===s?h={get:p.get,set:p.set}:2===s?h=p.value:3===s?h=p.get:4===s&&(h=p.set),"function"==typeof w)void 0!==(N=i(w,o,p,u,s,l,d,h,f))&&(a(s,N),0===s?g=N:1===s?(g=N.init,v=N.get||h.get,b=N.set||h.set,h={get:v,set:b}):h=N);else for(var E=w.length-1;E>=0;E--){var _;void 0!==(N=i(w[E],o,p,u,s,l,d,h,f))&&(a(s,N),0===s?_=N:1===s?(_=N.init,v=N.get||h.get,b=N.set||h.set,h={get:v,set:b}):h=N,void 0!==_&&(void 0===g?g=_:"function"==typeof g?g=[g,_]:g.push(_)))}if(0===s||1===s){if(void 0===g)g=function(t,e){return e};else if("function"!=typeof g){var T=g;g=function(t,e){for(var r=e,n=0;n<T.length;n++)r=T[n].call(t,r);return r}}else{var x=g;g=function(t,e){return x.call(t,e)}}t.push(g)}0!==s&&(1===s?(p.get=h.get,p.set=h.set):2===s?p.value=h:3===s?p.get=h:4===s&&(p.set=h),d?1===s?(t.push((function(t,e){return h.get.call(t,e)})),t.push((function(t,e){return h.set.call(t,e)}))):2===s?t.push(h):t.push((function(t,e){return h.call(t,e)})):Object.defineProperty(r,o,p))}function d(e,r,n){for(var o,i,s,a=[],c=new Map,d=new Map,f=0;f<r.length;f++){var p=r[f];if(Array.isArray(p)){var g,m,h=p[1],y=p[2],N=p.length>3,v=h>=5,b=n;if(v?(g=e,0!=(h-=5)&&(m=i=i||[]),N&&!s&&(s=function(r){return t(r)===e}),b=s):(g=e.prototype,0!==h&&(m=o=o||[])),0!==h&&!N){var w=v?d:c,E=w.get(y)||0;if(!0===E||3===E&&4!==h||4===E&&3!==h)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+y);!E&&h>2?w.set(y,h):w.set(y,!0)}l(a,g,p,y,h,v,N,m,b)}}return u(a,o),u(a,i),a}function u(t,e){e&&t.push((function(t){for(var r=0;r<e.length;r++)e[r].call(t);return t}))}return function(t,e,n,o){return{e:d(t,e,o),get c(){return function(t,e){if(e.length>0){for(var n=[],o=t,i=t.name,s=e.length-1;s>=0;s--){var c={v:!1};try{var l=e[s](o,{kind:"class",name:i,addInitializer:r(n,c)})}finally{c.v=!0}void 0!==l&&(a(10,l),o=l)}return[o,function(){for(var t=0;t<n.length;t++)n[t].call(o)}]}}(t,n)}}}}function i(t,e,r,n){return(i=o())(t,e,r,n)}const s=Symbol("Events"),a=Symbol("allEvents"),c=/^on(?:Before|After)Action_/,l=/^onLocal_/,d=/^onAll_/;function u(t,e,r){const n=this;return t.has(e)||t.set(e,[]),t.get(e).push(r.bind(n)),n}const f=function t(e,r){let{kind:n}=r;if("class"==n)return class t extends e{constructor(t,e){const r={},n=[];for(const[t,o]of Object.entries(e))t.match(c)?n.push([t.substring(2),o,"onLocal"]):t.match(l)?n.push([t.substring(8),o,"onLocal"]):t.match(d)?n.push([t.substring(6),o,"onAll"]):r[t]=o;for(var o=arguments.length,i=new Array(o>2?o-2:0),f=2;f<o;f++)i[f-2]=arguments[f];super(t,r,...i);const p=this,g=Object.is(p,p.root);p[s]=new Map,g&&(p.root[a]=new Map),p.onLocal=u.bind(p,p[s]),p.onAll=u.bind(p.root,p.root[a]),p.on=p.onLocal;for(const[t,e,r]of n)p[r](t,e)}async emit(t,e){const r=this,n=[...r[s].get(t)||[],...r.root[a].get(t)||[]];let o=!1;if(n.length){let t=!1;e.preventDefault=()=>o=!0,e.stopPropagation=()=>t=!0;for(const r of n){if(t)break;await r(e)}}return!o}}};var p={disEnhance(t){t.targetNode.tagName.toLowerCase()&&t.targetNode.addEventListener("submit",(function(t){t.preventDefault()}))}};let g;const m={},h=Symbol("smart_component"),y=/^[a-z0-9_]+$/i,N=/[\*\?]/,v=t=>new RegExp("^"+t.replace(/\*+/g,".*").replace(/\?/g,".")+"$"),b=class t extends Error{constructor(t,e,r){super(`RenderError(${r}): ${e}`),this.code=t,this.path=r,this.stack=this.stack.split("\n").slice(2).join("\n")}};function w(t,e){switch(t.tagName.toLowerCase()){case"ul":case"ol":case"table":case"thead":case"tbody":case"tfoot":return"list";case"input":const e=String(t.getAttribute("type")||"").toLowerCase();switch(e){case"number":case"date":case"radio":return e}case"textarea":case"select":return"input";case"label":return"label";default:return"form"}}let E;class _{static#t=(()=>[E,g]=i(this,[],[f]).c)();constructor(t){let{property_name:e="smark",...r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const o=this;if(o.validName=function t(){let e=0;return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];for(let t of r)if("string"==typeof t&&(t=t.trim(),t.length))return t;return"UNNAMED"+ ++e}}(),o.actions={},o.property_name=e,o.selector=`[data-${o.property_name}]`,o.types=m,o.targetNode=t,o.options=r,o.setNodeOptions(o.targetNode,o.options),o.parent=n,!o.parent instanceof E)throw o.renderError("INVALID_PARENT","Smark Components must have valid Smark Component parent.");o.root=null===o.parent?o:o.parent.root,o.parents={},o.parents[Symbol.iterator]=function*(){let t=o;for(;t;)yield t,t=t.parent};const i=o.inherittedOption("autoId",!1);let s;o.genId=!1!==i&&(!0===i?t=>t.replace(/\//g,"_"):"string"==typeof i?t=>i+t.replace(/\//g,"_"):"function"==typeof i&&i),o.onRenderedTasks=[],o.renderedSync=!1,o.rendered=new Promise((t=>s=t)),o.children={},o.targetNode[h]=o,(async()=>{await o.render();for(const t of o.onRenderedTasks)await t();o.onRenderedTasks=null,s(!0),setTimeout((()=>o.renderedSync=!0),1)})(),o.options.onRendered&&o.onRendered(o.options.onRendered)}onRendered(t){const e=this;e.onRenderedTasks?e.onRenderedTasks.push(t.bind(e)):t.bind(e)()}getNodeOptions(t,e){const r=this,n=(t.dataset[r.property_name]||"").trim()||null,o={...e,...(()=>{try{const t=JSON.parse(n);if("object"!=typeof t)throw new Error("NO_OBJECT");return t}catch(t){return n.match(y)?{type:n}:{}}})()};return o.action||o.type||(o.type=w(t)),r.setNodeOptions(t,o),o}setNodeOptions(t,e){const r=this;t.dataset[r.property_name]=JSON.stringify(e)}async enhance(t,e){const r=this;let n=r.getNodeOptions(t,e);if(p.disEnhance(r),n.action){if(n.type||(n.type="trigger"),"trigger"!=n.type)throw r.renderError("ACTION_IN_NON_TRIGGER",`"action" property is only allowed for "trigger" components but "${n.type}" type specified.`)}else if("string"!=typeof n.type)throw r.renderError("NO_TYPE_PROVIDED","Invalid SmarkForm item: type is mandatory for non trigger components.");const o=r.types[n.type];if(!o)throw r.renderError("UNKNOWN_TYPE",`Unimplemented SmarkForm component controller: ${n.type}`);return new o(t,n,r)}getComponent(t){const e=this;return t[h]||t.parentElement?.closest(e.selector)[h]||null}getPath(){const t=undefined;return[...this.parents].map((t=>t.name)).reverse().join("/")||"/"}find(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this;if("/"==t[0])for(;e.parent;)e=e.parent;const r=t.split("/").filter((t=>t)),n=r.findIndex((t=>t.match(N)));if(n>=0){const t=v(r[n]),o=r.slice(0,n).join("/"),i=r.slice(n+1).join("/"),s=e.find(o),a=undefined;return Object.entries(s.children).filter((e=>{let[r,n]=e;return n&&r.match(t)})).map((t=>{let[,e]=t;return e.find(i)})).flat(1/0)}return r.reduce(((t,e)=>void 0===t?null:".."==e?t.parent:t.children[e]),e)}inherittedOption(t,e){const r=this;for(const e of r.parents)if(void 0!==e.options[t])return e.options[t];return e}moveTo(){const t=this;t.targetNode.id||(t.targetNode.id=t.getPath()),document.location.hash=t.targetNode.id,window.history.pushState({},void 0,window.location.pathname)}getTriggers(){let t;const e=this,r=[],n=new Set([arguments.length>0&&void 0!==arguments[0]?arguments[0]:""].flat().map(String).filter((t=>t))),o=n.has("*");for(const t of[...e.root.targetNode.querySelectorAll(e.selector)].map((t=>t[h])).filter((t=>t))){const i=t.getTriggerArgs();i&&(Object.is(i.context,e)&&(o||n.has(i.action))&&r.push(t))}return r}updateId(){const t=this;if(!1===t.genId)return;const e=t.genId(t.getPath());if(t.targetNode.id!=e){t.targetNode.id=e;for(const e of Object.values(t.children))e.updateId()}return t.targetNode.id}focus(){const t=this;for(const e in t.children)return t.children[e].focus();t.targetFieldNode&&t.targetFieldNode.focus()}getTriggerArgs(){}renderError(t,e){const r=undefined;return new b(t,e,this.getPath())}static#e=(()=>g())()}class T extends E{constructor(){super(...arguments),this._isField=!0,Object.is(this,this.root)||(this.name=this.validName(this.options.name,this.targetNode.getAttribute("name")))}}function x(t,e){if(void 0!==m[t])throw new Error(`Duplicate component type definition: ${t}`);if(!(e.prototype instanceof E))throw new Error(`Bad component type implementation for: ${t}`);m[t]=e}class A{constructor(t){const e=this;e.form=t,e.revealed=null,e.form.targetNode.addEventListener("keydown",e.onKeydown.bind(e),!0),e.form.targetNode.addEventListener("keyup",e.onKeyup.bind(e),!0),e.form.targetNode.addEventListener("focusout",e.onFocusout.bind(e),!0),e.form.targetNode.addEventListener("focusin",e.onFocusin.bind(e),!0)}onKeydown(t){const e=this;if("Control"==t.key)e.reveal(t.target);else if(t.ctrlKey){const r=e.revealed.find((e=>e.options.hotkey==t.key));r&&(t.preventDefault(),t.stopPropagation(),r.targetNode.click())}}onKeyup(t){const e=this;"Control"==t.key&&e.reveal(!1)}onFocusout(t){const e=this;null!==e.revealed&&e.reveal()}onFocusin(t){const e=this;null!==e.revealed&&e.reveal(t.target)}reveal(t){const e=this;if(null!==e.revealed){for(const t of e.revealed)t.targetNode.removeAttribute("data-hotkey");e.revealed.length=0}if(!1===t&&(e.revealed=null),t){const r=e.form.getComponent(t),n=[r,...r.parents],o=new Set(n),i=n.map(((t,e)=>t.getTriggers("*").map((t=>({tg:t,lv:e,args:t.getTriggerArgs()||{},hotkey:String(t.options.hotkey||"")}))))).flat().filter((t=>{let{args:e,hotkey:r}=t;return r.length&&o.has(e.context)})).sort(((t,e)=>o.has(e.args.target)-o.has(t.args.target)-e.lv+t.lv)),s=new Set;e.revealed=[];for(const t of i)s.has(t.hotkey)||(t.tg.targetNode.disabled||t.tg.targetNode.setAttribute("data-hotkey",t.hotkey),s.add(t.hotkey),e.revealed.push(t.tg))}}}const I=Symbol("beforeEventName"),k=Symbol("afterEventName"),O=function t(e,r){let{kind:n,name:o,addInitializer:i}=r;"method"==n&&i((function t(){this.actions[o]=e.bind(this),this.actions[o][I]=`BeforeAction_${o}`,this.actions[o][k]=`AfterAction_${o}`}))};class S extends E{constructor(t,e){delete e.name;for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return super(t,e,...n)}render(){const t=this;t.parent.onRendered((()=>{const e=t.getTriggerArgs();"function"==typeof e.context?.onTriggerRender&&e.context.onTriggerRender(e)}))}disable(){const t=undefined;this.targetNode.disabled=!0}enable(){const t=undefined;this.targetNode.disabled=!1}getTriggerArgs(){const t=this,e=[...t.parents],{action:r,context:n,target:o,...i}=t.options;if(!r)return;let[s,a]=r.split(":").reverse();const c=n?t.parent.find(n):e.find((t=>(!a||t.options.type==a)&&"function"==typeof t.actions[s])),l=o?c.find(o):n?null:e.find((t=>t.parent?.targetNode.isSameNode(c?.targetNode)));return{action:s,origin:t,context:c,target:l,...i}}}async function L(t){const e=this,r=undefined,n=e.getComponent(t.target).getTriggerArgs();if(!n)return;const{context:o,action:i}=n,s=o?.actions[i];if("function"!=typeof s)throw e.renderError("UNKNOWN_ACTION",`Unknown action ${i}`+(o?` for ${o.options.type}`:""));if(await e.emit(s[I],n)){const t=await s(n);e.emit(s[k],{...n,data:t})}}function P(t,e){const r=undefined,n=null===t.parentNode?t=>null===t:e=>null===e||e.isSameNode(t);return[...t.querySelectorAll(e)].filter((t=>n(t.parentNode.closest(e))))}function j(t,e){let r=t.parentNode;const n=e>=0?1:-1;for(;r;){if(r.scrollHeight>r.clientHeight*n){var o=r.scrollHeight-r.clientHeight*n;if(e<=o*n)return void(r.scrollTop+=e);r.scrollTop=o,e-=o}r=r.parentNode}}function C(){return Math.random().toString(36).substring(2)}function R(t){try{return JSON.parse(t)}catch(t){}}class D extends E{constructor(t,e){delete e.name;for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return super(t,e,...n)}render(){const t=this;t.parent.onRendered((()=>{const e=t.getLabelArgs(),{targetFieldNode:r}=e.target||{};r&&(r.id||(r.id=C()),t.targetNode.setAttribute("for",r.id))}))}getLabelArgs(){const t=this;let e,r;t.parents;const{context:n,target:o,...i}=t.options;if(n||o)e=n?t.parent.find(n):t.parent,r=o?e.find(o):e;else{e=t.parent;const n=e.targetNode.querySelectorAll(t.selector);let o=!1;for(const e in n)if(o){let o=t.getComponent(n[e]);if(o?._isField){r=o;break}}else Object.is(n[e],t.targetNode)&&(o=!0)}return{origin:t,context:e,target:r,...i}}}const F=function t(e,r){let{kind:n}=r;if("class"==n){let t;return class r extends e{static#t=(()=>[t]=i(this,[[O,2,"fold"]],[]).e)();constructor(){super(...arguments),t(this)}render(){const t=super.render(...arguments),e=this;return e.root.onRendered((()=>{e.fold({operation:e.options.folded?"fold":"unfold"})})),t}fold(){let{operation:t="toggle"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this,r="none"==e.targetNode.style.display,n="fold"==t||"unfold"!=t&&!r;e.targetNode.style.display=n?"none":e.originalDisplayProp,e.getTriggers("fold").forEach((t=>{const{foldedClass:e,unfoldedClass:r}=t.options;e&&t.targetNode.classList[n?"add":"remove"](e),r&&t.targetNode.classList[n?"remove":"add"](r)})),e.getTriggers(["addItem","removeItem"]).map(n?t=>t.disable():t=>t.enable())}}}};let M,$,U;class B extends T{static#t=(()=>({e:[M],c:[U,$]}=i(this,[[O,2,"export"],[O,2,"import"],[O,2,"empty"]],[F])))();constructor(){super(...arguments),M(this)}async render(){const t=this;t.originalDisplayProp=t.targetNode.style.display;for(const e of P(t.targetNode,t.selector)){const r=await t.enhance(e);if(r?._isField){if(void 0!==t.children[r.name])throw t.renderError("REPEATED_FIELD_NAME",`Field name '${r.name}' used more than once in this form level.`);t.children[r.name]=r,r.updateId()}}}async export(){const t=this;return Object.fromEntries(await Promise.all(Object.entries(t.children).map((async t=>{let[e,r]=t;return[e,await r.export()]}))))}async import(t){let{data:e={},focus:r=!0}=t;const n=this,o=Object(e).constructor;if(o!=={}.constructor)throw n.renderError("FORM_NOT_PLAIN_OBJECT",`Expected plain object for form import, ${o.name} given.`);const i=Object.fromEntries(await Promise.all(Object.entries(n.children).map((async t=>{let[n,o]=t;const i=undefined;return[n,await o.import({data:e[n],focus:r})]}))));return r&&n.focus(),i}async isEmpty(){const t=this;for(const e of Object.values(t.children))if(!await e.isEmpty())return!1;return!0}async empty(t){let{focus:e}=t;const r=this;return await r.import({data:{},focus:e})}static#e=(()=>$())()}const H=Symbol("smart_mutex");class q{constructor(){this.mtx=Promise.resolve()}lock(){let t;const e=new Promise((e=>{t=()=>e()})),r=this.mtx;return this.mtx=e,r.then((function e(){return t}))}}const K=function t(e){return function t(r,n){let{kind:o}=n;if("method"==o)return async function t(){const n=this;n[H]||(n[H]={}),n[H][e]||(n[H][e]=new q);const o=await n[H][e].lock();let i,s;try{for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];s=await r.call(n,...c)}catch(t){i=t}if(o(),i)throw i;return s}}},z=function t(e,r){let{kind:n}=r;if("class"==n){let t,r;return class n extends e{static#t=(()=>[t]=i(this,[[r,2,"move"]],[]).e)();constructor(){super(...arguments),t(this)}async[(r=K("list_mutating"),"render")](){const t=await super.render(...arguments),e=this;if(e.sortable=!!e.options.sortable,e.templates.item.setAttribute("draggable",e.sortable),e.children.forEach((t=>t.targetNode.setAttribute("dragable",e.sortable))),e.sortable){let t=null,r=null;e.targetNode.addEventListener("dragstart",(e=>{null===t?(t=e.target,e.stopPropagation()):e.preventDefault()})),e.targetNode.addEventListener("dragover",(t=>t.preventDefault())),e.targetNode.addEventListener("drop",(e=>{if(!t)return;let n=e.target;for(;n.parentElement&&n.parentElement!=t.parentElement;)n=n.parentElement;r=n})),e.targetNode.addEventListener("dragend",(async()=>{r&&await e.move({from:e.getComponent(t),to:e.getComponent(r)}),t=null,r=null}))}return t}async move(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{from:r,to:n}=t;if(null===n||null===r)return;const o=Number(r?.name),i=Number(n?.name);if(o==i)return;if(o<i){const t=[...e.children.slice(o+1,i+1),e.children[o]];e.children.splice(o,i-o+1,...t)}else if(o>i){const t=[e.children[o],...e.children.slice(i,o)];e.children.splice(i,o-i+1,...t)}const s=undefined,a=(o<i?1:-1)>0?"after":"before";n.targetNode[a](r.targetNode),e.renum()}}}};async function J(t){await t.rendered;for(const e of t.getTriggers(["removeItem","addItem"]))e.targetNode.disabled="removeItem"==e.options.action?t.children.length<=t.min_items&&"clear"!=e.options.failback:t.children.length>=t.max_items}const G=function t(e,r){let{kind:n}=r;return"class"==n?class t extends e{async render(){const t=await super.render(...arguments),e=this;return setTimeout((()=>J(e)),1),t}}:"method"==n?async function t(){const r=this;for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];const s=await e.call(r,...o);return J(r),s}:void 0};let W,V,Y,X,Q,Z,tt,et,rt;function nt(t){null===t.getAttribute("tabindex")&&t.setAttribute("tabindex","-1")}class ot extends T{static#t=(()=>({e:[W],c:[Z,V]}=i(this,[[Y,2,"export"],[O,2,"import"],[X,2,"addItem"],[Q,2,"removeItem"],[O,2,"empty"],[O,2,"count"],[O,2,"position"]],[F,z,G])))();constructor(){super(...arguments),W(this)}async[(Y=[K("list_mutating"),O],X=[O,K("list_mutating"),G],Q=[O,K("list_mutating"),G],"render")](){const t=this;t.originalDisplayProp=t.targetNode.style.display,t.min_items=Math.max(0,"number"==typeof t.options.min_items?t.options.min_items:1),t.max_items=Math.max(t.min_items,"number"==typeof t.options.max_items?t.options.max_items:1/0),t.children=[],t.templates={};for(const e of[...t.targetNode.children]){const{role:r="item"}=R(e.getAttribute("data-smark"))||{};switch(r){case"item":case"empty_list":if(void 0!==t.templates[r])throw t.renderError("LIST_DUPLICATE TEMPLATE",`Repated list template role ${r}`);t.templates[r]=e,t.templates[r].remove()}}if(null!==t.templates.item.querySelector("[id]"))throw t.renderError("LIST_CONTAINS_ID","List components are not allowed to contain elements with 'id' attribute");const e=t.getNodeOptions(t.templates.item,{type:t.options.of});if(t.options.of&&e.type!=t.options.of)throw t.renderError("LIST_ITEM_TYPE_MISSMATCH","List item type missmatch");t.root.onRendered((async()=>{for(let e=0;e<t.min_items;e++)await t.addItem();0==t.min_items&&(t.renum(),t.templates.empty_list&&t.targetNode.appendChild(t.templates.empty_list)),t.targetNode.setAttribute("aria-live","polite"),t.targetNode.setAttribute("aria-atomic","true")}))}onTriggerRender(t){let{action:e,origin:r,context:n,...o}=t;switch(e){case"addItem":case"removeItem":1+[...r.parents].findIndex((t=>Object.is(t,n)))&&r.options.hotkey&&nt(r.targetNode)}}async export(){const t=this,e=[],r=[],n=!t.inherittedOption("exportEmpties",!1);for(const o of t.children)n&&await o.isEmpty()?e.length<t.min_items&&r.push(o):e.push(await o.export());for(let n=0;e.length<t.min_items;n++)e.push(await r[n].export());return e}async import(t,e){let{data:r=[]}=t;const n=this;r instanceof Array||(r=[r]);for(let t=0;t<Math.min(r.length,n.max_items);t++)n.children.length<=t&&await n.addItem(),await n.children[t].import({data:r[t],focus:e});for(let t=Math.max(r.length,n.min_items);t<n.children.length;)await n.removeItem();r.length>n.max_items&&n.emit("error",{code:"LIST_IMPORT_OVERFLOW",message:"Trying to import array greater than list's max_items. Data beyond max_items ignored.",context:n,data:r,options:n.options});for(let t=r.length;t<n.children.length;t++)n.children[t].empty();e&&n.focus()}async addItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{action:r,origin:n=null,context:o=e,target:i,position:s="after",autoscroll:a,failback:c}=t;if("after"!=s&&"before"!=s)throw e.renderError("LIST_WRONG_ADDITEM_POSITION",`Invalid value for addItem() position property: ${s}`);if(e.children.length>=e.max_items){if("none"===c);else e.emit("error",{code:"LIST_MAX_ITEMS_REACHED",message:"Cannot add items over max_items boundary",options:t});return}e.children.length&&!i&&(i="before"==s?e.children[0]:e.children[e.children.length-1]);const l=e.templates.item.cloneNode(!0),d=[];let u;if(await e.emit("addItem",{action:r,origin:n,context:o,target:i,position:s,newItemTarget:l,options:t,onRendered:t=>d.push(t)}),e.children.length?e.children=(await Promise.all(e.children.map((async(t,r)=>t.targetNode.isSameNode(i.targetNode)?"after"==s?(t.targetNode.after(l),u=await e.enhance(l,{type:"form"}),await u.rendered,[t,u]):(t.targetNode.before(l),u=await e.enhance(l,{type:"form"}),await u.rendered,[u,t]):t)))).flat():(e.templates.empty_list&&e.templates.empty_list.remove(),e.targetNode.appendChild(l),u=await e.enhance(l,{type:"form",name:0}),await u.rendered,e.children.push(u),u.name=0),e.renum(),"elegant"==a&&u)j(u.targetNode,-u.offsetHeight);else{const t=u?"self"==a?u:"parent"==a?u.parent:null:null;t&&t.moveTo()}d.forEach((t=>t(u))),e.renderedSync&&u.focus()}async removeItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{action:r,origin:n=null,context:o=e,target:i,autoscroll:s,keep_non_empty:a,failback:c}=t;if(!i){if(a)for(const t of[...e.children].reverse())if(await t.isEmpty()){i=t;break}i||(i=e.children[e.children.length-1],a=!1)}const l=i instanceof Array?i:[i];for(const i of[...l].reverse()){if(e.children.length<=e.min_items)switch(c){case"none":break;case"clear":return void await i.empty();default:return void e.emit("error",{code:"LIST_MIN_ITEMS_REACHED",message:"Cannot remove items under min_items boundary",options:t})}if(a&&!await i.isEmpty())continue;let l=null,d=null;const u=e.children.filter(((t,e,r)=>{if(t.targetNode.isSameNode(i.targetNode)){if("elegant"==s)j(t.targetNode,t.targetNode.offsetHeight);else{const e="self"==s?t:"parent"==s?t.parent:null;e&&e.moveTo()}return l=t,d=r.length-e>1?d=e:0==e?null:e-1,!1}return!0})),f=[];await e.emit("removeItem",{action:r,origin:n,context:o,target:i,oldItem:l,oldItemTarget:l.targetNode,options:t,onRemoved:t=>f.push(t)}),e.templates.empty_list&&!u.length&&e.targetNode.appendChild(e.templates.empty_list),l.targetNode.remove(),e.children=u,e.renum(),f.forEach((t=>t())),null!==d&&e.children[d].focus()}}async isEmpty(){const t=this;for(const e of t.children)if(!await e.isEmpty())return!1;return!0}async empty(t){let{focus:e}=t;const r=this;return await r.import({data:[],focus:e})}count(){let{delta:t=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=undefined;return this.children.length+Number(t)}position(){let{target:t,offset:e=1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Number(t?.name)+Number(e)}renum(){const t=this;for(const e in t.children)t.children[e].name=e,t.children[e].updateId();t.getTriggers("position").forEach((t=>{const e=this,r=t.getTriggerArgs();t.targetNode.innerText=e.position(r)})),t.getTriggers("count").forEach((t=>{const e=this,r=t.getTriggerArgs();t.targetNode.innerText=e.count(r)}))}static#e=(()=>V())()}class it extends U{static#t=(()=>[tt]=i(this,[[O,2,"export"],[O,2,"import"],[O,2,"empty"]],[]).e)();constructor(){super(...arguments),tt(this)}async render(){const t=this;if(t.isSingleton=!("INPUT"===t.targetNode.tagName||"SELECT"===t.targetNode.tagName||"TEXTAREA"===t.targetNode.tagName),t.isCheckbox=!t.isSingleton&&"checkbox"==String(t.targetNode.type).toLowerCase(),t.isSingleton){await super.render();const e=Object.keys(t.children).length;if(1!=e)throw t.renderError("NOT_A_SINGLETON",`Singleton forms are only allowed to contain exactly one data field but ${e} found.`)}t.targetFieldNode=t.isSingleton?Object.values(t.children)[0].targetNode:t.targetNode}async export(){const t=this;return t.isSingleton?Object.values(await super.export())[0]:t.isCheckbox?!!t.targetNode.checked:t.targetNode.value}async import(t){let{data:e="",focus:r=!0}=t;const n=this;return n.isSingleton?await super.import({data:Object.fromEntries([[Object.keys(n.children)[0],e]]),focus:r}):(n.isCheckbox?n.targetNode.checked=!!e:n.targetNode.value=e,r&&n.focus(),n.targetNode.value)}async isEmpty(){const t=this,e=undefined;return!(t.isCheckbox?"":await t.export()).trim().length}async empty(t){const e=this;await e.import({data:"",focus:focus})}}class st extends it{static#t=(()=>[et]=i(this,[[O,2,"export"],[O,2,"import"]],[]).e)();constructor(){super(...arguments),et(this)}async render(){await super.render();const t=this,e=t.targetFieldNode.tagName,r=t.targetFieldNode.getAttribute("type");if("INPUT"!=e||"number"!=(r||"number").toLowerCase())throw t.renderError("NOT_A_NUMBER_FIELD",'Number inputs require an INPUT tag of type "number".');r||(t.targetFieldNode.type="number")}async export(){const t=await super.export();return t.length&&!isNaN(t)?Number(t):null}async import(t){let{data:e=null,focus:r=!0}=t;const n=this,o=typeof e,i=await super.import({data:"number"==o?e:"string"==o&&e.length&&!isNaN(e)?Number(e):null,focus:r});return r&&n.focus(),i}async isEmpty(){const t=this,e=undefined;return null===await t.export()}}const at=/T.*/;function ct(t){return 8==t.length?new Date([t.substring(0,4),t.substring(4,6),t.substring(6,8)].join("-")):10==t.length&&"-"==t[4]&&"-"==t[7]?new Date(t):NaN}function lt(t){return t.toISOString().replace(at,"")}class dt extends it{static#t=(()=>[rt]=i(this,[[O,2,"export"],[O,2,"import"]],[]).e)();constructor(){super(...arguments),rt(this)}async render(){await super.render();const t=this,e=t.targetFieldNode.tagName,r=t.targetFieldNode.getAttribute("type");if("INPUT"!=e||"date"!=(r||"date").toLowerCase())throw t.renderError("NOT_A_DATE_FIELD",'Date inputs require an INPUT tag of type "date".');r||(t.targetFieldNode.type="date")}async export(){const t=await super.export();if(!t.length)return null;const e=ct(t);return isNaN(e)?null:lt(e)}async import(t){let{data:e=null,focus:r=!0}=t;const n=this,o=e instanceof Date?e:"number"==typeof e?new Date(e):e&&"string"==typeof e?ct(e):NaN,i=await super.import({data:isNaN(o)?null:lt(o),focus:r});return r&&n.focus(),i}async isEmpty(){const t=this,e=undefined;return null===await t.export()}}let ut;class ft extends it{static#t=(()=>[ut]=i(this,[[O,2,"export"],[O,2,"import"]],[]).e)();constructor(){ut(super(...arguments));const t=this,e=t.parent.children[t.name];return e?(t.targetNode.setAttribute("name",e.sharedNodeName),e.radioButtons.push(t.targetNode),{}):(t.sharedNodeName=C(),t.targetNode.setAttribute("name",t.sharedNodeName),t.radioButtons=[t.targetNode],t)}async render(){await super.render();const t=this,e=t.targetFieldNode.tagName,r=t.targetFieldNode.getAttribute("type");if("INPUT"!=e||"radio"!=(r||"radio").toLowerCase())throw t.renderError("NOT_A_RADIO_FIELD",'Radio inputs require an INPUT tag of type "radio".');r||(t.targetFieldNode.type="radio")}async export(){return this.radioButtons.find((t=>t.checked))?.value}async import(t){let{data:e=null,focus:r=!0}=t;const n=this.radioButtons.find((t=>t.value===e));n&&(n.checked=!0),r&&this.focus()}async isEmpty(){return!(1+this.radioButtons.findIndex((t=>t.checked)))}}for(const[t,e]of Object.entries({trigger:S,label:D,form:U,list:Z,input:it,number:st,date:dt,radio:ft}))x(t,e);class pt extends U{constructor(t){let{customActions:e={},...r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n={...r,name:"",type:"form"};super(t,n,null);const o=this;o.setNodeOptions(o.targetNode,n),o.actions={...o.actions,...Object.fromEntries(Object.entries(e).map((t=>{let[e,r]=t;return[e,r.bind(o)]})))},o.targetNode.addEventListener("click",L.bind(o),!0),new A(o)}async render(){const t=this;t.targetNode.setAttribute("aria-busy","true"),await super.render(),t.targetNode.setAttribute("aria-busy","false")}}return pt.createType=x,pt}));//# sourceMappingURL=SmarkForm.umd.js.map

function t(t){if(Object(t)!==t)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==t?typeof t:"null"));return t}function e(t,e,r){"symbol"==typeof e&&(e=(e=e.description)?"["+e+"]":"");try{Object.defineProperty(t,"name",{configurable:!0,value:r?r+" "+e:e})}catch(t){}return t}function r(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function n(t){var e=r(t,"string");return"symbol"==typeof e?e:e+""}function o(){function r(t,e){return function(r){!function(t,e){if(t.v)throw Error("attempted to call addInitializer after decoration was finished")}(e),a(r,"An initializer"),t.push(r)}}function o(t,e){if(!t(e))throw new TypeError("Attempted to access private element on non-instance")}function i(t,e,i,a,s,c,l,d,u){var p;switch(s){case 1:p="accessor";break;case 2:p="method";break;case 3:p="getter";break;case 4:p="setter";break;default:p="field"}var g,f,h={kind:p,name:l?"#"+e:n(e),static:c,private:l},m={v:!1};if(0!==s&&(h.addInitializer=r(a,m)),l||0!==s&&2!==s)if(2===s)g=function(t){return o(u,t),i.value};else{var y=0===s||1===s;(y||3===s)&&(g=l?function(t){return o(u,t),i.get.call(t)}:function(t){return i.get.call(t)}),(y||4===s)&&(f=l?function(t,e){o(u,t),i.set.call(t,e)}:function(t,e){i.set.call(t,e)})}else g=function(t){return t[e]},0===s&&(f=function(t,r){t[e]=r});var b=l?u.bind():function(t){return e in t};h.access=g&&f?{get:g,set:f,has:b}:g?{get:g,has:b}:{set:f,has:b};try{return t(d,h)}finally{m.v=!0}}function a(t,e){if("function"!=typeof t)throw new TypeError(e+" must be a function")}function s(t,e){var r=typeof e;if(1===t){if("object"!==r||null===e)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==e.get&&a(e.get,"accessor.get"),void 0!==e.set&&a(e.set,"accessor.set"),void 0!==e.init&&a(e.init,"accessor.init")}else if("function"!==r)throw new TypeError((0===t?"field":10===t?"class":"method")+" decorators must return a function or void 0")}function c(t){return function(e){t(this,e)}}function l(t,r,n,o,a,l,d,u,p){var g,f,h,m,y,b,v,w,E=n[0];if(d?(0===a||1===a?(g={get:(y=n[3],function(){return y(this)}),set:c(n[4])},h="get"):3===a?(g={get:n[3]},h="get"):4===a?(g={set:n[3]},h="set"):g={value:n[3]},0!==a&&(1===a&&e(g.set,"#"+o,"set"),e(g[h||"value"],"#"+o,h))):0!==a&&(g=Object.getOwnPropertyDescriptor(r,o)),1===a?m={get:g.get,set:g.set}:2===a?m=g.value:3===a?m=g.get:4===a&&(m=g.set),"function"==typeof E)void 0!==(b=i(E,o,g,u,a,l,d,m,p))&&(s(a,b),0===a?f=b:1===a?(f=b.init,v=b.get||m.get,w=b.set||m.set,m={get:v,set:w}):m=b);else for(var _=E.length-1;_>=0;_--){var T;void 0!==(b=i(E[_],o,g,u,a,l,d,m,p))&&(s(a,b),0===a?T=b:1===a?(T=b.init,v=b.get||m.get,w=b.set||m.set,m={get:v,set:w}):m=b,void 0!==T&&(void 0===f?f=T:"function"==typeof f?f=[f,T]:f.push(T)))}if(0===a||1===a){if(void 0===f)f=function(t,e){return e};else if("function"!=typeof f){var N=f;f=function(t,e){for(var r=e,n=0;n<N.length;n++)r=N[n].call(t,r);return r}}else{var x=f;f=function(t,e){return x.call(t,e)}}t.push(f)}0!==a&&(1===a?(g.get=m.get,g.set=m.set):2===a?g.value=m:3===a?g.get=m:4===a&&(g.set=m),d?1===a?(t.push((function(t,e){return m.get.call(t,e)})),t.push((function(t,e){return m.set.call(t,e)}))):2===a?t.push(m):t.push((function(t,e){return m.call(t,e)})):Object.defineProperty(r,o,g))}function d(e,r,n){for(var o,i,a,s=[],c=new Map,d=new Map,p=0;p<r.length;p++){var g=r[p];if(Array.isArray(g)){var f,h,m=g[1],y=g[2],b=g.length>3,v=m>=5,w=n;if(v?(f=e,0!=(m-=5)&&(h=i=i||[]),b&&!a&&(a=function(r){return t(r)===e}),w=a):(f=e.prototype,0!==m&&(h=o=o||[])),0!==m&&!b){var E=v?d:c,_=E.get(y)||0;if(!0===_||3===_&&4!==m||4===_&&3!==m)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+y);!_&&m>2?E.set(y,m):E.set(y,!0)}l(s,f,g,y,m,v,b,h,w)}}return u(s,o),u(s,i),s}function u(t,e){e&&t.push((function(t){for(var r=0;r<e.length;r++)e[r].call(t);return t}))}return function(t,e,n,o){return{e:d(t,e,o),get c(){return function(t,e){if(e.length>0){for(var n=[],o=t,i=t.name,a=e.length-1;a>=0;a--){var c={v:!1};try{var l=e[a](o,{kind:"class",name:i,addInitializer:r(n,c)})}finally{c.v=!0}void 0!==l&&(s(10,l),o=l)}return[o,function(){for(var t=0;t<n.length;t++)n[t].call(o)}]}}(t,n)}}}}function i(t,e,r,n){return(i=o())(t,e,r,n)}const a=Symbol("Events"),s=Symbol("allEvents"),c=/^on(?:Before|After)Action_/,l=/^onLocal_/,d=/^onAll_/;function u(t,e,r){const n=this;return t.has(e)||t.set(e,[]),t.get(e).push(r.bind(n)),n}const p=function t(e,r){let{kind:n}=r;if("class"==n)return class t extends e{constructor(t,e){const r={},n=[];for(const[t,o]of Object.entries(e))t.match(c)?n.push([t.substring(2),o,"onLocal"]):t.match(l)?n.push([t.substring(8),o,"onLocal"]):t.match(d)?n.push([t.substring(6),o,"onAll"]):r[t]=o;for(var o=arguments.length,i=new Array(o>2?o-2:0),p=2;p<o;p++)i[p-2]=arguments[p];super(t,r,...i);const g=this,f=Object.is(g,g.root);g[a]=new Map,f&&(g.root[s]=new Map),g.onLocal=u.bind(g,g[a]),g.onAll=u.bind(g.root,g.root[s]),g.on=g.onLocal;for(const[t,e,r]of n)g[r](t,e)}async emit(t,e){const r=this,n=[...r[a].get(t)||[],...r.root[s].get(t)||[]];let o=!1;if(n.length){let t=!1;e.preventDefault=()=>o=!0,e.stopPropagation=()=>t=!0;for(const r of n){if(t)break;await r(e)}}return!o}}};var g={disEnhance(t){t.target.tagName.toLowerCase()&&t.target.addEventListener("submit",(function(t){t.preventDefault()}))}};let f;const h={},m=Symbol("smart_component"),y=/^[a-z0-9_]+$/i,b=/[\*\?]/,v=t=>new RegExp("^"+t.replace(/\*+/g,".*").replace(/\?/g,".")+"$"),w=class t extends Error{constructor(t,e,r){super(`RenderError(${r}): ${e}`),this.code=t,this.path=r,this.stack=this.stack.split("\n").slice(2).join("\n")}};function E(t,e){switch(t.tagName.toLowerCase()){case"ul":case"ol":case"table":case"thead":case"tbody":case"tfoot":return"list";case"input":const e=String(t.getAttribute("type")||"").toLowerCase();switch(e){case"number":case"date":return e}case"textarea":case"select":return"input";case"label":return"label";default:return"form"}}let _;class T{static#t=[_,f]=i(this,[],[p]).c;constructor(t){let{property_name:e="smark",...r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const o=this;if(o.validName=function t(){let e=0;return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];for(let t of r)if("string"==typeof t&&(t=t.trim(),t.length))return t;return"UNNAMED"+ ++e}}(),o.actions={},o.property_name=e,o.selector=`[data-${o.property_name}]`,o.types=h,o.target=t,o.options=r,o.setNodeOptions(o.target,o.options),o.parent=n,!o.parent instanceof _)throw o.renderError("INVALID_PARENT","Smark Components must have valid Smark Component parent.");o.root=null===o.parent?o:o.parent.root,o.parents={},o.parents[Symbol.iterator]=function*(){let t=o;for(;t;)yield t,t=t.parent};const i=o.inherittedOption("autoId",!1);let a;o.genId=!1!==i&&(!0===i?t=>t.replace(/\//g,"_"):"string"==typeof i?t=>i+t.replace(/\//g,"_"):"function"==typeof i&&i),o.onRenderedTasks=[],o.rendered=new Promise((t=>a=t)),o.children={},o.target[m]=o,(async()=>{await o.render();for(const t of o.onRenderedTasks)await t();o.onRenderedTasks=null,a(!0)})(),o.options.onRendered&&o.onRendered(o.options.onRendered)}onRendered(t){const e=this;e.onRenderedTasks?e.onRenderedTasks.push(t.bind(e)):t.bind(e)()}getNodeOptions(t,e){const r=this,n=(t.dataset[r.property_name]||"").trim()||null,o={...e,...(()=>{try{const t=JSON.parse(n);if("object"!=typeof t)throw new Error("NO_OBJECT");return t}catch(t){return n.match(y)?{type:n}:{}}})()};return o.action||o.type||(o.type=E(t)),r.setNodeOptions(t,o),o}setNodeOptions(t,e){const r=this;t.dataset[r.property_name]=JSON.stringify(e)}async enhance(t,e){const r=this;let n=r.getNodeOptions(t,e);if(g.disEnhance(r),n.action){if(n.type||(n.type="trigger"),"trigger"!=n.type)throw r.renderError("ACTION_IN_NON_TRIGGER",`"action" property is only allowed for "trigger" components but "${n.type}" type specified.`)}else if("string"!=typeof n.type)throw r.renderError("NO_TYPE_PROVIDED","Invalid SmarkForm item: type is mandatory for non trigger components.");const o=r.types[n.type];if(!o)throw r.renderError("UNKNOWN_TYPE",`Unimplemented SmarkForm component controller: ${n.type}`);return new o(t,n,r)}getComponent(t){const e=this;return t[m]||t.parentElement?.closest(e.selector)[m]||null}getPath(){const t=undefined;return[...this.parents].map((t=>t.name)).reverse().join("/")||"/"}find(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this;if("/"==t[0])for(;e.parent;)e=e.parent;const r=t.split("/").filter((t=>t)),n=r.findIndex((t=>t.match(b)));if(n>=0){const t=v(r[n]),o=r.slice(0,n).join("/"),i=r.slice(n+1).join("/"),a=e.find(o),s=undefined;return Object.entries(a.children).filter((e=>{let[r,n]=e;return n&&r.match(t)})).map((t=>{let[,e]=t;return e.find(i)})).flat(1/0)}return r.reduce(((t,e)=>void 0===t?null:".."==e?t.parent:t.children[e]),e)}inherittedOption(t,e){const r=this;for(const e of r.parents)if(void 0!==e.options[t])return e.options[t];return e}moveTo(){const t=this;t.target.id||(t.target.id=t.getPath()),document.location.hash=t.target.id,window.history.pushState({},void 0,window.location.pathname)}getTriggers(){let t;const e=this,r=[],n=new Set([arguments.length>0&&void 0!==arguments[0]?arguments[0]:""].flat().map(String).filter((t=>t))),o=n.has("*");for(const t of[...e.root.target.querySelectorAll(e.selector)].map((t=>t[m])).filter((t=>t))){const i=t.getTriggerArgs();i&&(Object.is(i.context,e)&&(o||n.has(i.action))&&r.push(t))}return r}updateId(){const t=this;if(!1===t.genId)return;const e=t.genId(t.getPath());if(t.target.id!=e){t.target.id=e;for(const e of Object.values(t.children))e.updateId()}return t.target.id}focus(){const t=this;for(const e in t.children)return t.children[e].focus();t.targetField.focus()}getTriggerArgs(){}renderError(t,e){const r=undefined;return new w(t,e,this.getPath())}static#e=f()}class N extends _{constructor(){super(...arguments),this._isField=!0}}function x(t,e){if(void 0!==h[t])throw new Error(`Duplicate component type definition: ${t}`);if(!(e.prototype instanceof _))throw new Error(`Bad component type implementation for: ${t}`);h[t]=e}const I=Symbol("beforeEventName"),A=Symbol("afterEventName"),O=function t(e,r){let{kind:n,name:o,addInitializer:i}=r;"method"==n&&i((function t(){this.actions[o]=e.bind(this),this.actions[o][I]=`BeforeAction_${o}`,this.actions[o][A]=`AfterAction_${o}`}))};class S extends _{constructor(t,e){delete e.name;for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return super(t,e,...n)}render(){const t=this;t.parent.onRendered((()=>{const e=t.getTriggerArgs();"function"==typeof e.context?.onTriggerRender&&e.context.onTriggerRender(e)}))}disable(){const t=undefined;this.target.disabled=!0}enable(){const t=undefined;this.target.disabled=!1}getTriggerArgs(){const t=this,e=[...t.parents],{action:r,context:n,target:o,...i}=t.options;if(!r)return;let[a,s]=r.split(":").reverse();const c=n?t.parent.find(n):e.find((t=>(!s||t.options.type==s)&&"function"==typeof t.actions[a])),l=o?c.find(o):n?null:e.find((t=>t.parent?.target.isSameNode(c?.target)));return{action:a,origin:t,context:c,target:l,...i}}}async function k(t){const e=this,r=undefined,n=e.getComponent(t.target).getTriggerArgs();if(!n)return;const{context:o,action:i}=n,a=o?.actions[i];if("function"!=typeof a)throw e.renderError("UNKNOWN_ACTION",`Unknown action ${i}`+(o?` for ${o.options.type}`:""));if(await e.emit(a[I],n)){const t=await a(n);e.emit(a[A],{...n,data:t})}}class L extends _{constructor(t,e){delete e.name;for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return super(t,e,...n)}render(){const t=this;t.parent.onRendered((()=>{const e=t.getLabelArgs(),{targetField:r}=e.target||{};r&&(r.id||(r.id=Math.random().toString(36).substring(2)),t.target.setAttribute("for",r.id))}))}getLabelArgs(){const t=this;let e,r;t.parents;const{context:n,target:o,...i}=t.options;if(n||o)e=n?t.parent.find(n):t.parent,r=o?e.find(o):e;else{e=t.parent;const n=e.target.querySelectorAll(t.selector);let o=!1;for(const e in n)if(o){let o=t.getComponent(n[e]);if(o?._isField){r=o;break}}else Object.is(n[e],t.target)&&(o=!0)}return{origin:t,context:e,target:r,...i}}}function j(t,e){const r=undefined,n=null===t.parentNode?t=>null===t:e=>null===e||e.isSameNode(t);return[...t.querySelectorAll(e)].filter((t=>n(t.parentNode.closest(e))))}function C(t,e){let r=t.parentNode;const n=e>=0?1:-1;for(;r;){if(r.scrollHeight>r.clientHeight*n){var o=r.scrollHeight-r.clientHeight*n;if(e<=o*n)return void(r.scrollTop+=e);r.scrollTop=o,e-=o}r=r.parentNode}}const P=function t(e,r){let{kind:n}=r;if("class"==n){let t;return class r extends e{static#t=[t]=i(this,[[O,2,"fold"]],[]).e;constructor(){super(...arguments),t(this)}render(){const t=super.render(...arguments),e=this;return e.root.onRendered((()=>{e.fold({operation:e.options.folded?"fold":"unfold"})})),t}fold(){let{operation:t="toggle"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this,r="none"==e.target.style.display,n="fold"==t||"unfold"!=t&&!r;e.target.style.display=n?"none":e.originalDisplayProp,e.getTriggers("fold").forEach((t=>{const{foldedClass:e,unfoldedClass:r}=t.options;e&&t.target.classList[n?"add":"remove"](e),r&&t.target.classList[n?"remove":"add"](r)})),e.getTriggers(["addItem","removeItem"]).map(n?t=>t.disable():t=>t.enable())}}}};let R,D,M;class F extends N{static#t=({e:[R],c:[M,D]}=i(this,[[O,2,"export"],[O,2,"import"],[O,2,"empty"]],[P]));constructor(){super(...arguments),R(this)}async render(){const t=this;t.originalDisplayProp=t.target.style.display;for(const e of j(t.target,t.selector)){const r=await t.enhance(e);r._isField&&(r.name=t.validName(r.options.name,e.getAttribute("name")),t.children[r.name]=r,r.updateId())}}async export(){const t=this;return Object.fromEntries(await Promise.all(Object.entries(t.children).map((async t=>{let[e,r]=t;return[e,await r.export()]}))))}async import(t){let{data:e={}}=t;const r=this,n=Object(e).constructor;if(n!=={}.constructor)throw r.renderError("FORM_NOT_PLAIN_OBJECT",`Expected plain object for form import, ${n.name} given.`);return Object.fromEntries(await Promise.all(Object.entries(r.children).map((async t=>{let[r,n]=t;const o=undefined;return[r,await n.import({data:e[r]})]}))))}async isEmpty(){const t=this;for(const e of Object.values(t.children))if(!await e.isEmpty())return!1;return!0}async empty(){const t=this;return await t.import({data:{}})}static#e=D()}const $=Symbol("smart_mutex");class U{constructor(){this.mtx=Promise.resolve()}lock(){let t;const e=new Promise((e=>{t=()=>e()})),r=this.mtx;return this.mtx=e,r.then((function e(){return t}))}}const H=function t(e){return function t(r,n){let{kind:o}=n;if("method"==o)return async function t(){const n=this;n[$]||(n[$]={}),n[$][e]||(n[$][e]=new U);const o=await n[$][e].lock();let i,a;try{for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];a=await r.call(n,...c)}catch(t){i=t}if(o(),i)throw i;return a}}},q=function t(e,r){let{kind:n}=r;if("class"==n){let t,r;return class n extends e{static#t=[t]=i(this,[[r,2,"move"]],[]).e;constructor(){super(...arguments),t(this)}[(r=H("list_mutating"),"render")](){const t=super.render(...arguments),e=this;if(e.sortable=!!e.options.sortable,e.itemTpl.setAttribute("draggable",e.sortable),e.children.forEach((t=>t.target.setAttribute("dragable",e.sortable))),e.sortable){let t=null,r=null;e.target.addEventListener("dragstart",(e=>{null===t?(t=e.target,e.stopPropagation()):e.preventDefault()})),e.target.addEventListener("dragover",(t=>t.preventDefault())),e.target.addEventListener("drop",(e=>{if(!t)return;let n=e.target;for(;n.parentElement&&n.parentElement!=t.parentElement;)n=n.parentElement;r=n})),e.target.addEventListener("dragend",(async()=>{r&&await e.move({from:e.getComponent(t),to:e.getComponent(r)}),t=null,r=null}))}return t}async move(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{from:r,to:n}=t;if(null===n||null===r)return;const o=Number(r?.name),i=Number(n?.name);if(o==i)return;if(o<i){const t=[...e.children.slice(o+1,i+1),e.children[o]].map(((t,e)=>(t.name=e+o,t.updateId(),t)));e.children.splice(o,i-o+1,...t)}else if(o>i){const t=[e.children[o],...e.children.slice(i,o)].map(((t,e)=>(t.name=e+i,t.updateId(),t)));e.children.splice(i,o-i+1,...t)}const a=undefined,s=(o<i?1:-1)>0?"after":"before";n.target[s](r.target)}}}};let z,B,G,W,J,K,V,Y,X;function Q(t){null===t.getAttribute("tabindex")&&t.setAttribute("tabindex","-1")}class Z extends N{static#t=({e:[z],c:[K,B]}=i(this,[[G,2,"export"],[O,2,"import"],[W,2,"addItem"],[J,2,"removeItem"],[O,2,"empty"],[O,2,"count"]],[P,q]));constructor(){super(...arguments),z(this)}[(G=[H("list_mutating"),O],W=[O,H("list_mutating")],J=[O,H("list_mutating")],"render")](){const t=this;t.originalDisplayProp=t.target.style.display,t.min_items=Math.max(0,"number"==typeof t.options.min_items?t.options.min_items:1),t.max_items=Math.max(t.min_items,"number"==typeof t.options.max_items?t.options.max_items:1/0),t.children=[];const e=t.target.children.length;if(1!=e)throw t.renderError("LIST_WRONG_NUM_CHILDREN",`List components must contain exactly 1 direct children, but ${e} given`);if(t.itemTpl=t.target.children[0],null!==t.itemTpl.querySelector("[id]"))throw t.renderError("LIST_CONTAINS_ID","List components are not allowed to contain elements with 'id' attribute");const r=t.getNodeOptions(t.itemTpl,{type:t.options.of});if(t.options.of&&r.type!=t.options.of)throw t.renderError("LIST_ITEM_TYPE_MISSMATCH","List item type missmatch");t.root.onRendered((async()=>{for(let e=0;e<t.min_items;e++)await t.addItem();0==t.min_items&&t.getTriggers("count").forEach((e=>e.target.innerText=String(t.children.length))),t.target.setAttribute("aria-live","polite"),t.target.setAttribute("aria-atomic","true")})),t.itemTpl.remove()}onTriggerRender(t){let{action:e,origin:r}=t;switch(e){case"addItem":case"removeItem":Q(r.target)}}async export(){const t=this,e=[],r=!t.inherittedOption("exportEmpties",!1);for(const n of t.children)r&&await n.isEmpty()||e.push(await n.export());return e}async import(t){let{data:e=[]}=t;const r=this;!e instanceof Array&&(e=[e]);for(let t=0;t<Math.min(e.length,r.max_items);t++)r.children.length<=t&&await r.addItem(),await r.children[t].import({data:e[t]});for(let t=Math.max(e.length,r.min_items);t<r.children.length;)await r.removeItem();e.length>r.max_items&&r.emit("error",{code:"LIST_IMPORT_OVERFLOW",message:"Trying to import array greater than list's max_items. Data beyond max_items ignored.",context:r,data:e,options:r.options});for(let t=e.length;t<r.children.length;t++)r.children[t].empty()}async addItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{action:r,origin:n=null,context:o=e,target:i,position:a="after",autoscroll:s}=t;if("after"!=a&&"before"!=a)throw e.renderError("LIST_WRONG_ADDITEM_POSITION",`Invalid value for addItem() position property: ${a}`);if(e.children.length>=e.max_items)return void e.emit("error",{code:"LIST_MAX_ITEMS_REACHED",message:"Cannot add items over max_items boundary",options:t});e.children.length&&!i&&(i="before"==a?e.children[0]:e.children[e.children.length-1]);const c=e.itemTpl.cloneNode(!0),l=[];let d;if(await e.emit("addItem",{action:r,origin:n,context:o,target:i,position:a,newItemTarget:c,options:t,onRendered:t=>l.push(t)}),e.children.length?e.children=(await Promise.all(e.children.map((async(t,r)=>t.target.isSameNode(i.target)?"after"==a?(t.target.after(c),d=await e.enhance(c,{type:"form"}),await d.rendered,[t,d]):(t.target.before(c),d=await e.enhance(c,{type:"form"}),await d.rendered,[d,t]):t)))).flat().map(((t,e)=>(t.name=e,t.updateId(),t))):(e.target.appendChild(c),d=await e.enhance(c,{type:"form",name:0}),await d.rendered,e.children.push(d),d.name=0,d.updateId()),"elegant"==s&&d)C(d.target,-d.offsetHeight);else{const t=d?"self"==s?d:"parent"==s?d.parent:null:null;t&&t.moveTo()}l.forEach((t=>t(d))),e.getTriggers("count").forEach((t=>t.target.innerText=String(e.children.length))),d.focus()}async removeItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{action:r,origin:n=null,context:o=e,target:i,autoscroll:a,keep_non_empty:s,failback:c}=t;if(!i){if(s)for(const t of[...e.children].reverse())if(await t.isEmpty()){i=t;break}i||(i=e.children[e.children.length-1],s=!1)}const l=i instanceof Array?i:[i];for(const i of[...l].reverse()){if(e.children.length<=e.min_items)switch(c){case"none":break;case"clear":return void await i.empty();default:return void e.emit("error",{code:"LIST_MIN_ITEMS_REACHED",message:"Cannot remove items under min_items boundary",options:t})}if(s&&!await i.isEmpty())continue;let l=null,d=null;const u=e.children.filter(((t,e,r)=>{if(t.target.isSameNode(i.target)){if("elegant"==a)C(t.target,t.target.offsetHeight);else{const e="self"==a?t:"parent"==a?t.parent:null;e&&e.moveTo()}return l=t,d=r.length-e>1?d=e:0==e?null:e-1,!1}return!0})).map(((t,e)=>(t.name=e,t.updateId(),t))),p=[];await e.emit("removeItem",{action:r,origin:n,context:o,target:i,oldItem:l,oldItemTarget:l.target,options:t,onRemoved:t=>p.push(t)}),l.target.remove(),e.children=u,e.getTriggers("count").forEach((t=>t.target.innerText=String(e.children.length))),p.forEach((t=>t())),null!==d&&e.children[d].focus()}}async isEmpty(){const t=this;for(const e of t.children)if(!await e.isEmpty())return!1;return!0}async empty(){const t=this;return await t.import({data:[]})}count(){const t=undefined;return this.children.length}static#e=B()}class tt extends M{static#t=[V]=i(this,[[O,2,"export"],[O,2,"import"],[O,2,"empty"]],[]).e;constructor(){super(...arguments),V(this)}async render(){const t=this;if(t.isSingleton=!("INPUT"===t.target.tagName||"SELECT"===t.target.tagName||"TEXTAREA"===t.target.tagName),t.isCheckbox=!t.isSingleton&&"checkbox"==String(t.target.type).toLowerCase(),t.isSingleton){await super.render();const e=Object.keys(t.children).length;if(1!=e)throw t.renderError("NOT_A_SINGLETON",`Singleton forms are only allowed to contain exactly one data field but ${e} found.`)}t.targetField=t.isSingleton?Object.values(t.children)[0].target:t.target}async export(){const t=this;return t.isSingleton?Object.values(await super.export())[0]:t.isCheckbox?!!t.target.checked:t.target.value}async import(t){let{data:e=""}=t;const r=this;return r.isSingleton?await super.import({data:Object.fromEntries([[Object.keys(r.children)[0],e]])}):(r.isCheckbox?r.target.checked=!!e:r.target.value=e,r.target.value)}async isEmpty(){const t=this,e=undefined;return!(t.isCheckbox?"":await t.export()).trim().length}async empty(){const t=this;await t.import({data:""})}}class et extends tt{static#t=[Y]=i(this,[[O,2,"export"],[O,2,"import"]],[]).e;constructor(){super(...arguments),Y(this)}async render(){await super.render();const t=this,e=t.targetField.tagName,r=t.targetField.getAttribute("type");if("INPUT"!=e||"number"!=(r||"number").toLowerCase())throw t.renderError("NOT_A_NUMBER_FIELD",'Number inputs require an INPUT tag of type "number".');r||(t.targetField.type="number")}async export(){const t=await super.export();return t.length&&!isNaN(t)?Number(t):null}async import(t){let{data:e=null}=t;const r=typeof e;return await super.import({data:"number"==r?e:"string"==r&&e.length&&!isNaN(e)?Number(e):null})}async isEmpty(){const t=this,e=undefined;return null===await t.export()}}const rt=/T.*/;function nt(t){return 8==t.length?new Date([t.substring(0,4),t.substring(4,6),t.substring(6,8)].join("-")):10==t.length&&"-"==t[4]&&"-"==t[7]?new Date(t):NaN}function ot(t){return t.toISOString().replace(rt,"")}class it extends tt{static#t=[X]=i(this,[[O,2,"export"],[O,2,"import"]],[]).e;constructor(){super(...arguments),X(this)}async render(){await super.render();const t=this,e=t.targetField.tagName,r=t.targetField.getAttribute("type");if("INPUT"!=e||"date"!=(r||"date").toLowerCase())throw t.renderError("NOT_A_DATE_FIELD",'Date inputs require an INPUT tag of type "date".');r||(t.targetField.type="date")}async export(){const t=await super.export();if(!t.length)return null;const e=nt(t);return isNaN(e)?null:ot(e)}async import(t){let{data:e=null}=t;const r=e instanceof Date?e:"number"==typeof e?new Date(e):e&&"string"==typeof e?nt(e):NaN;return await super.import({data:isNaN(r)?null:ot(r)})}async isEmpty(){const t=this,e=undefined;return null===await t.export()}}for(const[t,e]of Object.entries({trigger:S,label:L,form:M,list:K,input:tt,number:et,date:it}))x(t,e);function at(t){const e=this;if("Control"==t.key){const r=e.getComponent(t.target),n=r.parent.isSingleton?r.parent:r;e.revealedTriggers=[r,...r.parents].flatMap((t=>t.getTriggers("*"))).filter((t=>Object.is(t.getTriggerArgs()?.target?.target,n.target)));for(const t of e.revealedTriggers){const{hotkey:e}=t.options;e&&t.target.setAttribute("data-hotkey",e)}}else if(t.ctrlKey){const r=e.revealedTriggers.find((e=>e.options.hotkey==t.key));r&&(t.preventDefault(),t.stopPropagation(),r.target.click())}}function st(t){const e=this;if("focusout"==t.type||"Control"==t.key){for(let t of e.revealedTriggers)t.target.removeAttribute("data-hotkey");e.revealedTriggers=[]}}class ct extends M{revealedTriggers=[];constructor(t){let{customActions:e={},...r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n={...r,name:"",type:"form"};super(t,n,null);const o=this;o.setNodeOptions(o.target,n),o.actions={...o.actions,...Object.fromEntries(Object.entries(e).map((t=>{let[e,r]=t;return[e,r.bind(o)]})))},o.target.addEventListener("click",k.bind(o),!0),o.target.addEventListener("keydown",at.bind(o),!0),o.target.addEventListener("keyup",st.bind(o),!0),o.target.addEventListener("focusout",st.bind(o),!0)}async render(){const t=this;t.target.setAttribute("aria-busy","true"),await super.render(),t.target.setAttribute("aria-busy","false")}}ct.createType=x;export{ct as default};//# sourceMappingURL=SmarkForm.esm.js.map

function t(t){if(Object(t)!==t)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==t?typeof t:"null"));return t}function e(t,e,n){"symbol"==typeof e&&(e=(e=e.description)?"["+e+"]":"");try{Object.defineProperty(t,"name",{configurable:!0,value:n?n+" "+e:e})}catch(t){}return t}function n(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function r(t){var e=n(t,"string");return"symbol"==typeof e?e:e+""}function o(){function n(t,e){return function(n){!function(t,e){if(t.v)throw Error("attempted to call addInitializer after decoration was finished")}(e),a(n,"An initializer"),t.push(n)}}function o(t,e){if(!t(e))throw new TypeError("Attempted to access private element on non-instance")}function i(t,e,i,a,s,c,l,d,u){var p;switch(s){case 1:p="accessor";break;case 2:p="method";break;case 3:p="getter";break;case 4:p="setter";break;default:p="field"}var f,g,h={kind:p,name:l?"#"+e:r(e),static:c,private:l},m={v:!1};if(0!==s&&(h.addInitializer=n(a,m)),l||0!==s&&2!==s)if(2===s)f=function(t){return o(u,t),i.value};else{var y=0===s||1===s;(y||3===s)&&(f=l?function(t){return o(u,t),i.get.call(t)}:function(t){return i.get.call(t)}),(y||4===s)&&(g=l?function(t,e){o(u,t),i.set.call(t,e)}:function(t,e){i.set.call(t,e)})}else f=function(t){return t[e]},0===s&&(g=function(t,n){t[e]=n});var v=l?u.bind():function(t){return e in t};h.access=f&&g?{get:f,set:g,has:v}:f?{get:f,has:v}:{set:g,has:v};try{return t(d,h)}finally{m.v=!0}}function a(t,e){if("function"!=typeof t)throw new TypeError(e+" must be a function")}function s(t,e){var n=typeof e;if(1===t){if("object"!==n||null===e)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==e.get&&a(e.get,"accessor.get"),void 0!==e.set&&a(e.set,"accessor.set"),void 0!==e.init&&a(e.init,"accessor.init")}else if("function"!==n)throw new TypeError((0===t?"field":10===t?"class":"method")+" decorators must return a function or void 0")}function c(t){return function(e){t(this,e)}}function l(t,n,r,o,a,l,d,u,p){var f,g,h,m,y,v,N,b,w=r[0];if(d?(0===a||1===a?(f={get:(y=r[3],function(){return y(this)}),set:c(r[4])},h="get"):3===a?(f={get:r[3]},h="get"):4===a?(f={set:r[3]},h="set"):f={value:r[3]},0!==a&&(1===a&&e(f.set,"#"+o,"set"),e(f[h||"value"],"#"+o,h))):0!==a&&(f=Object.getOwnPropertyDescriptor(n,o)),1===a?m={get:f.get,set:f.set}:2===a?m=f.value:3===a?m=f.get:4===a&&(m=f.set),"function"==typeof w)void 0!==(v=i(w,o,f,u,a,l,d,m,p))&&(s(a,v),0===a?g=v:1===a?(g=v.init,N=v.get||m.get,b=v.set||m.set,m={get:N,set:b}):m=v);else for(var E=w.length-1;E>=0;E--){var _;void 0!==(v=i(w[E],o,f,u,a,l,d,m,p))&&(s(a,v),0===a?_=v:1===a?(_=v.init,N=v.get||m.get,b=v.set||m.set,m={get:N,set:b}):m=v,void 0!==_&&(void 0===g?g=_:"function"==typeof g?g=[g,_]:g.push(_)))}if(0===a||1===a){if(void 0===g)g=function(t,e){return e};else if("function"!=typeof g){var T=g;g=function(t,e){for(var n=e,r=0;r<T.length;r++)n=T[r].call(t,n);return n}}else{var x=g;g=function(t,e){return x.call(t,e)}}t.push(g)}0!==a&&(1===a?(f.get=m.get,f.set=m.set):2===a?f.value=m:3===a?f.get=m:4===a&&(f.set=m),d?1===a?(t.push((function(t,e){return m.get.call(t,e)})),t.push((function(t,e){return m.set.call(t,e)}))):2===a?t.push(m):t.push((function(t,e){return m.call(t,e)})):Object.defineProperty(n,o,f))}function d(e,n,r){for(var o,i,a,s=[],c=new Map,d=new Map,p=0;p<n.length;p++){var f=n[p];if(Array.isArray(f)){var g,h,m=f[1],y=f[2],v=f.length>3,N=m>=5,b=r;if(N?(g=e,0!=(m-=5)&&(h=i=i||[]),v&&!a&&(a=function(n){return t(n)===e}),b=a):(g=e.prototype,0!==m&&(h=o=o||[])),0!==m&&!v){var w=N?d:c,E=w.get(y)||0;if(!0===E||3===E&&4!==m||4===E&&3!==m)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+y);!E&&m>2?w.set(y,m):w.set(y,!0)}l(s,g,f,y,m,N,v,h,b)}}return u(s,o),u(s,i),s}function u(t,e){e&&t.push((function(t){for(var n=0;n<e.length;n++)e[n].call(t);return t}))}return function(t,e,r,o){return{e:d(t,e,o),get c(){return function(t,e){if(e.length>0){for(var r=[],o=t,i=t.name,a=e.length-1;a>=0;a--){var c={v:!1};try{var l=e[a](o,{kind:"class",name:i,addInitializer:n(r,c)})}finally{c.v=!0}void 0!==l&&(s(10,l),o=l)}return[o,function(){for(var t=0;t<r.length;t++)r[t].call(o)}]}}(t,r)}}}}function i(t,e,n,r){return(i=o())(t,e,n,r)}const a=Symbol("Events"),s=Symbol("allEvents"),c=/^on(?:Before|After)Action_/,l=/^onLocal_/,d=/^onAll_/;function u(t,e,n){const r=this;return t.has(e)||t.set(e,[]),t.get(e).push(n.bind(r)),r}const p=function t(e,n){let{kind:r}=n;if("class"==r)return class t extends e{constructor(t,e){const n={},r=[];for(const[t,o]of Object.entries(e))t.match(c)?r.push([t.substring(2),o,"onLocal"]):t.match(l)?r.push([t.substring(8),o,"onLocal"]):t.match(d)?r.push([t.substring(6),o,"onAll"]):n[t]=o;for(var o=arguments.length,i=new Array(o>2?o-2:0),p=2;p<o;p++)i[p-2]=arguments[p];super(t,n,...i);const f=this,g=Object.is(f,f.root);f[a]=new Map,g&&(f.root[s]=new Map),f.onLocal=u.bind(f,f[a]),f.onAll=u.bind(f.root,f.root[s]),f.on=f.onLocal;for(const[t,e,n]of r)f[n](t,e)}async emit(t,e){const n=this,r=[...n[a].get(t)||[],...n.root[s].get(t)||[]];let o=!1;if(r.length){let t=!1;e.preventDefault=()=>o=!0,e.stopPropagation=()=>t=!0;for(const n of r){if(t)break;await n(e)}}return!o}}};var f={disEnhance(t){t.targetNode.tagName.toLowerCase()&&t.targetNode.addEventListener("submit",(function(t){t.preventDefault()}))}};let g;const h={},m=Symbol("smart_component"),y=/^[a-z0-9_]+$/i,v=/[\*\?]/,N=t=>new RegExp("^"+t.replace(/\*+/g,".*").replace(/\?/g,".")+"$"),b=class t extends Error{constructor(t,e,n){super(`RenderError(${n}): ${e}`),this.code=t,this.path=n,this.stack=this.stack.split("\n").slice(2).join("\n")}};function w(t,e){switch(t.tagName.toLowerCase()){case"ul":case"ol":case"table":case"thead":case"tbody":case"tfoot":return"list";case"input":const e=String(t.getAttribute("type")||"").toLowerCase();switch(e){case"number":case"date":return e}case"textarea":case"select":return"input";case"label":return"label";default:return"form"}}let E;class _{static#t=(()=>[E,g]=i(this,[],[p]).c)();constructor(t){let{property_name:e="smark",...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;const o=this;if(o.validName=function t(){let e=0;return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(let t of n)if("string"==typeof t&&(t=t.trim(),t.length))return t;return"UNNAMED"+ ++e}}(),o.actions={},o.property_name=e,o.selector=`[data-${o.property_name}]`,o.types=h,o.targetNode=t,o.options=n,o.setNodeOptions(o.targetNode,o.options),o.parent=r,!o.parent instanceof E)throw o.renderError("INVALID_PARENT","Smark Components must have valid Smark Component parent.");o.root=null===o.parent?o:o.parent.root,o.parents={},o.parents[Symbol.iterator]=function*(){let t=o;for(;t;)yield t,t=t.parent};const i=o.inherittedOption("autoId",!1);let a;o.genId=!1!==i&&(!0===i?t=>t.replace(/\//g,"_"):"string"==typeof i?t=>i+t.replace(/\//g,"_"):"function"==typeof i&&i),o.onRenderedTasks=[],o.renderedSync=!1,o.rendered=new Promise((t=>a=t)),o.children={},o.targetNode[m]=o,(async()=>{await o.render();for(const t of o.onRenderedTasks)await t();o.onRenderedTasks=null,a(!0),setTimeout((()=>o.renderedSync=!0),1)})(),o.options.onRendered&&o.onRendered(o.options.onRendered)}onRendered(t){const e=this;e.onRenderedTasks?e.onRenderedTasks.push(t.bind(e)):t.bind(e)()}getNodeOptions(t,e){const n=this,r=(t.dataset[n.property_name]||"").trim()||null,o={...e,...(()=>{try{const t=JSON.parse(r);if("object"!=typeof t)throw new Error("NO_OBJECT");return t}catch(t){return r.match(y)?{type:r}:{}}})()};return o.action||o.type||(o.type=w(t)),n.setNodeOptions(t,o),o}setNodeOptions(t,e){const n=this;t.dataset[n.property_name]=JSON.stringify(e)}async enhance(t,e){const n=this;let r=n.getNodeOptions(t,e);if(f.disEnhance(n),r.action){if(r.type||(r.type="trigger"),"trigger"!=r.type)throw n.renderError("ACTION_IN_NON_TRIGGER",`"action" property is only allowed for "trigger" components but "${r.type}" type specified.`)}else if("string"!=typeof r.type)throw n.renderError("NO_TYPE_PROVIDED","Invalid SmarkForm item: type is mandatory for non trigger components.");const o=n.types[r.type];if(!o)throw n.renderError("UNKNOWN_TYPE",`Unimplemented SmarkForm component controller: ${r.type}`);return new o(t,r,n)}getComponent(t){const e=this;return t[m]||t.parentElement?.closest(e.selector)[m]||null}getPath(){const t=undefined;return[...this.parents].map((t=>t.name)).reverse().join("/")||"/"}find(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this;if("/"==t[0])for(;e.parent;)e=e.parent;const n=t.split("/").filter((t=>t)),r=n.findIndex((t=>t.match(v)));if(r>=0){const t=N(n[r]),o=n.slice(0,r).join("/"),i=n.slice(r+1).join("/"),a=e.find(o),s=undefined;return Object.entries(a.children).filter((e=>{let[n,r]=e;return r&&n.match(t)})).map((t=>{let[,e]=t;return e.find(i)})).flat(1/0)}return n.reduce(((t,e)=>void 0===t?null:".."==e?t.parent:t.children[e]),e)}inherittedOption(t,e){const n=this;for(const e of n.parents)if(void 0!==e.options[t])return e.options[t];return e}moveTo(){const t=this;t.targetNode.id||(t.targetNode.id=t.getPath()),document.location.hash=t.targetNode.id,window.history.pushState({},void 0,window.location.pathname)}getTriggers(){let t;const e=this,n=[],r=new Set([arguments.length>0&&void 0!==arguments[0]?arguments[0]:""].flat().map(String).filter((t=>t))),o=r.has("*");for(const t of[...e.root.targetNode.querySelectorAll(e.selector)].map((t=>t[m])).filter((t=>t))){const i=t.getTriggerArgs();i&&(Object.is(i.context,e)&&(o||r.has(i.action))&&n.push(t))}return n}updateId(){const t=this;if(!1===t.genId)return;const e=t.genId(t.getPath());if(t.targetNode.id!=e){t.targetNode.id=e;for(const e of Object.values(t.children))e.updateId()}return t.targetNode.id}focus(){const t=this;for(const e in t.children)return t.children[e].focus();t.targetField.focus()}getTriggerArgs(){}renderError(t,e){const n=undefined;return new b(t,e,this.getPath())}static#e=(()=>g())()}class T extends E{constructor(){super(...arguments),this._isField=!0}}function x(t,e){if(void 0!==h[t])throw new Error(`Duplicate component type definition: ${t}`);if(!(e.prototype instanceof E))throw new Error(`Bad component type implementation for: ${t}`);h[t]=e}class I{constructor(t){const e=this;e.form=t,e.revealed=null,e.form.targetNode.addEventListener("keydown",e.onKeydown.bind(e),!0),e.form.targetNode.addEventListener("keyup",e.onKeyup.bind(e),!0),e.form.targetNode.addEventListener("focusout",e.onFocusout.bind(e),!0),e.form.targetNode.addEventListener("focusin",e.onFocusin.bind(e),!0)}onKeydown(t){const e=this;if("Control"==t.key)e.reveal(t.target);else if(t.ctrlKey){const n=e.revealed.find((e=>e.options.hotkey==t.key));n&&(t.preventDefault(),t.stopPropagation(),n.targetNode.click())}}onKeyup(t){const e=this;"Control"==t.key&&e.reveal(!1)}onFocusout(t){const e=this;null!==e.revealed&&e.reveal()}onFocusin(t){const e=this;null!==e.revealed&&e.reveal(t.target)}reveal(t){const e=this;if(null!==e.revealed){for(const t of e.revealed)t.targetNode.removeAttribute("data-hotkey");e.revealed.length=0}if(!1===t&&(e.revealed=null),t){const n=e.form.getComponent(t),r=[n,...n.parents],o=new Set(r),i=r.map(((t,e)=>t.getTriggers("*").map((t=>({tg:t,lv:e,args:t.getTriggerArgs()||{},hotkey:String(t.options.hotkey||"")}))))).flat().filter((t=>{let{args:e,hotkey:n}=t;return n.length&&o.has(e.context)})).sort(((t,e)=>o.has(e.args.target)-o.has(t.args.target)-e.lv+t.lv)),a=new Set;e.revealed=[];for(const t of i)a.has(t.hotkey)||(t.tg.targetNode.disabled||t.tg.targetNode.setAttribute("data-hotkey",t.hotkey),a.add(t.hotkey),e.revealed.push(t.tg))}}}const A=Symbol("beforeEventName"),O=Symbol("afterEventName"),S=function t(e,n){let{kind:r,name:o,addInitializer:i}=n;"method"==r&&i((function t(){this.actions[o]=e.bind(this),this.actions[o][A]=`BeforeAction_${o}`,this.actions[o][O]=`AfterAction_${o}`}))};class k extends E{constructor(t,e){delete e.name;for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return super(t,e,...r)}render(){const t=this;t.parent.onRendered((()=>{const e=t.getTriggerArgs();"function"==typeof e.context?.onTriggerRender&&e.context.onTriggerRender(e)}))}disable(){const t=undefined;this.targetNode.disabled=!0}enable(){const t=undefined;this.targetNode.disabled=!1}getTriggerArgs(){const t=this,e=[...t.parents],{action:n,context:r,target:o,...i}=t.options;if(!n)return;let[a,s]=n.split(":").reverse();const c=r?t.parent.find(r):e.find((t=>(!s||t.options.type==s)&&"function"==typeof t.actions[a])),l=o?c.find(o):r?null:e.find((t=>t.parent?.targetNode.isSameNode(c?.targetNode)));return{action:a,origin:t,context:c,target:l,...i}}}async function L(t){const e=this,n=undefined,r=e.getComponent(t.target).getTriggerArgs();if(!r)return;const{context:o,action:i}=r,a=o?.actions[i];if("function"!=typeof a)throw e.renderError("UNKNOWN_ACTION",`Unknown action ${i}`+(o?` for ${o.options.type}`:""));if(await e.emit(a[A],r)){const t=await a(r);e.emit(a[O],{...r,data:t})}}class j extends E{constructor(t,e){delete e.name;for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return super(t,e,...r)}render(){const t=this;t.parent.onRendered((()=>{const e=t.getLabelArgs(),{targetField:n}=e.target||{};n&&(n.id||(n.id=Math.random().toString(36).substring(2)),t.targetNode.setAttribute("for",n.id))}))}getLabelArgs(){const t=this;let e,n;t.parents;const{context:r,target:o,...i}=t.options;if(r||o)e=r?t.parent.find(r):t.parent,n=o?e.find(o):e;else{e=t.parent;const r=e.targetNode.querySelectorAll(t.selector);let o=!1;for(const e in r)if(o){let o=t.getComponent(r[e]);if(o?._isField){n=o;break}}else Object.is(r[e],t.targetNode)&&(o=!0)}return{origin:t,context:e,target:n,...i}}}function C(t,e){const n=undefined,r=null===t.parentNode?t=>null===t:e=>null===e||e.isSameNode(t);return[...t.querySelectorAll(e)].filter((t=>r(t.parentNode.closest(e))))}function P(t,e){let n=t.parentNode;const r=e>=0?1:-1;for(;n;){if(n.scrollHeight>n.clientHeight*r){var o=n.scrollHeight-n.clientHeight*r;if(e<=o*r)return void(n.scrollTop+=e);n.scrollTop=o,e-=o}n=n.parentNode}}const R=function t(e,n){let{kind:r}=n;if("class"==r){let t;return class n extends e{static#t=(()=>[t]=i(this,[[S,2,"fold"]],[]).e)();constructor(){super(...arguments),t(this)}render(){const t=super.render(...arguments),e=this;return e.root.onRendered((()=>{e.fold({operation:e.options.folded?"fold":"unfold"})})),t}fold(){let{operation:t="toggle"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this,n="none"==e.targetNode.style.display,r="fold"==t||"unfold"!=t&&!n;e.targetNode.style.display=r?"none":e.originalDisplayProp,e.getTriggers("fold").forEach((t=>{const{foldedClass:e,unfoldedClass:n}=t.options;e&&t.targetNode.classList[r?"add":"remove"](e),n&&t.targetNode.classList[r?"remove":"add"](n)})),e.getTriggers(["addItem","removeItem"]).map(r?t=>t.disable():t=>t.enable())}}}};let D,F,M;class $ extends T{static#t=(()=>({e:[D],c:[M,F]}=i(this,[[S,2,"export"],[S,2,"import"],[S,2,"empty"]],[R])))();constructor(){super(...arguments),D(this)}async render(){const t=this;t.originalDisplayProp=t.targetNode.style.display;for(const e of C(t.targetNode,t.selector)){const n=await t.enhance(e);n._isField&&(n.name=t.validName(n.options.name,e.getAttribute("name")),t.children[n.name]=n,n.updateId())}}async export(){const t=this;return Object.fromEntries(await Promise.all(Object.entries(t.children).map((async t=>{let[e,n]=t;return[e,await n.export()]}))))}async import(t){let{data:e={}}=t;const n=this,r=Object(e).constructor;if(r!=={}.constructor)throw n.renderError("FORM_NOT_PLAIN_OBJECT",`Expected plain object for form import, ${r.name} given.`);return Object.fromEntries(await Promise.all(Object.entries(n.children).map((async t=>{let[n,r]=t;const o=undefined;return[n,await r.import({data:e[n]})]}))))}async isEmpty(){const t=this;for(const e of Object.values(t.children))if(!await e.isEmpty())return!1;return!0}async empty(){const t=this;return await t.import({data:{}})}static#e=(()=>F())()}const U=Symbol("smart_mutex");class H{constructor(){this.mtx=Promise.resolve()}lock(){let t;const e=new Promise((e=>{t=()=>e()})),n=this.mtx;return this.mtx=e,n.then((function e(){return t}))}}const K=function t(e){return function t(n,r){let{kind:o}=r;if("method"==o)return async function t(){const r=this;r[U]||(r[U]={}),r[U][e]||(r[U][e]=new H);const o=await r[U][e].lock();let i,a;try{for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];a=await n.call(r,...c)}catch(t){i=t}if(o(),i)throw i;return a}}},q=function t(e,n){let{kind:r}=n;if("class"==r){let t,n;return class r extends e{static#t=(()=>[t]=i(this,[[n,2,"move"]],[]).e)();constructor(){super(...arguments),t(this)}async[(n=K("list_mutating"),"render")](){const t=await super.render(...arguments),e=this;if(e.sortable=!!e.options.sortable,e.itemTpl.setAttribute("draggable",e.sortable),e.children.forEach((t=>t.targetNode.setAttribute("dragable",e.sortable))),e.sortable){let t=null,n=null;e.targetNode.addEventListener("dragstart",(e=>{null===t?(t=e.target,e.stopPropagation()):e.preventDefault()})),e.targetNode.addEventListener("dragover",(t=>t.preventDefault())),e.targetNode.addEventListener("drop",(e=>{if(!t)return;let r=e.target;for(;r.parentElement&&r.parentElement!=t.parentElement;)r=r.parentElement;n=r})),e.targetNode.addEventListener("dragend",(async()=>{n&&await e.move({from:e.getComponent(t),to:e.getComponent(n)}),t=null,n=null}))}return t}async move(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{from:n,to:r}=t;if(null===r||null===n)return;const o=Number(n?.name),i=Number(r?.name);if(o==i)return;if(o<i){const t=[...e.children.slice(o+1,i+1),e.children[o]].map(((t,e)=>(t.name=e+o,t.updateId(),t)));e.children.splice(o,i-o+1,...t)}else if(o>i){const t=[e.children[o],...e.children.slice(i,o)].map(((t,e)=>(t.name=e+i,t.updateId(),t)));e.children.splice(i,o-i+1,...t)}const a=undefined,s=(o<i?1:-1)>0?"after":"before";r.targetNode[s](n.targetNode)}}}};async function z(t){await t.rendered;for(const e of t.getTriggers(["removeItem","addItem"]))e.targetNode.disabled="removeItem"==e.options.action?t.children.length<=t.min_items&&"clear"!=e.options.failback:t.children.length>=t.max_items}const B=function t(e,n){let{kind:r}=n;return"class"==r?class t extends e{async render(){const t=await super.render(...arguments),e=this;return setTimeout((()=>z(e)),1),t}}:"method"==r?async function t(){const n=this;for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];const a=await e.call(n,...o);return z(n),a}:void 0};let G,W,J,V,Y,X,Q,Z,tt;function et(t){null===t.getAttribute("tabindex")&&t.setAttribute("tabindex","-1")}class nt extends T{static#t=(()=>({e:[G],c:[X,W]}=i(this,[[J,2,"export"],[S,2,"import"],[V,2,"addItem"],[Y,2,"removeItem"],[S,2,"empty"],[S,2,"count"]],[R,q,B])))();constructor(){super(...arguments),G(this)}async[(J=[K("list_mutating"),S],V=[S,K("list_mutating"),B],Y=[S,K("list_mutating"),B],"render")](){const t=this;t.originalDisplayProp=t.targetNode.style.display,t.min_items=Math.max(0,"number"==typeof t.options.min_items?t.options.min_items:1),t.max_items=Math.max(t.min_items,"number"==typeof t.options.max_items?t.options.max_items:1/0),t.children=[];const e=t.targetNode.children.length;if(1!=e)throw t.renderError("LIST_WRONG_NUM_CHILDREN",`List components must contain exactly 1 direct children, but ${e} given`);if(t.itemTpl=t.targetNode.children[0],null!==t.itemTpl.querySelector("[id]"))throw t.renderError("LIST_CONTAINS_ID","List components are not allowed to contain elements with 'id' attribute");const n=t.getNodeOptions(t.itemTpl,{type:t.options.of});if(t.options.of&&n.type!=t.options.of)throw t.renderError("LIST_ITEM_TYPE_MISSMATCH","List item type missmatch");t.root.onRendered((async()=>{for(let e=0;e<t.min_items;e++)await t.addItem();0==t.min_items&&t.getTriggers("count").forEach((e=>e.targetNode.innerText=String(t.children.length))),t.targetNode.setAttribute("aria-live","polite"),t.targetNode.setAttribute("aria-atomic","true")})),t.itemTpl.remove()}onTriggerRender(t){let{action:e,origin:n,context:r,...o}=t;switch(e){case"addItem":case"removeItem":1+[...n.parents].findIndex((t=>Object.is(t,r)))&&n.options.hotkey&&et(n.targetNode)}}async export(){const t=this,e=[],n=!t.inherittedOption("exportEmpties",!1);for(const r of t.children)n&&await r.isEmpty()||e.push(await r.export());return e}async import(t){let{data:e=[]}=t;const n=this;!e instanceof Array&&(e=[e]);for(let t=0;t<Math.min(e.length,n.max_items);t++)n.children.length<=t&&await n.addItem(),await n.children[t].import({data:e[t]});for(let t=Math.max(e.length,n.min_items);t<n.children.length;)await n.removeItem();e.length>n.max_items&&n.emit("error",{code:"LIST_IMPORT_OVERFLOW",message:"Trying to import array greater than list's max_items. Data beyond max_items ignored.",context:n,data:e,options:n.options});for(let t=e.length;t<n.children.length;t++)n.children[t].empty()}async addItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{action:n,origin:r=null,context:o=e,target:i,position:a="after",autoscroll:s}=t;if("after"!=a&&"before"!=a)throw e.renderError("LIST_WRONG_ADDITEM_POSITION",`Invalid value for addItem() position property: ${a}`);if(e.children.length>=e.max_items)return void e.emit("error",{code:"LIST_MAX_ITEMS_REACHED",message:"Cannot add items over max_items boundary",options:t});e.children.length&&!i&&(i="before"==a?e.children[0]:e.children[e.children.length-1]);const c=e.itemTpl.cloneNode(!0),l=[];let d;if(await e.emit("addItem",{action:n,origin:r,context:o,target:i,position:a,newItemTarget:c,options:t,onRendered:t=>l.push(t)}),e.children.length?e.children=(await Promise.all(e.children.map((async(t,n)=>t.targetNode.isSameNode(i.targetNode)?"after"==a?(t.targetNode.after(c),d=await e.enhance(c,{type:"form"}),await d.rendered,[t,d]):(t.targetNode.before(c),d=await e.enhance(c,{type:"form"}),await d.rendered,[d,t]):t)))).flat().map(((t,e)=>(t.name=e,t.updateId(),t))):(e.targetNode.appendChild(c),d=await e.enhance(c,{type:"form",name:0}),await d.rendered,e.children.push(d),d.name=0,d.updateId()),"elegant"==s&&d)P(d.targetNode,-d.offsetHeight);else{const t=d?"self"==s?d:"parent"==s?d.parent:null:null;t&&t.moveTo()}l.forEach((t=>t(d))),e.getTriggers("count").forEach((t=>t.targetNode.innerText=String(e.children.length))),e.renderedSync&&d.focus()}async removeItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{action:n,origin:r=null,context:o=e,target:i,autoscroll:a,keep_non_empty:s,failback:c}=t;if(!i){if(s)for(const t of[...e.children].reverse())if(await t.isEmpty()){i=t;break}i||(i=e.children[e.children.length-1],s=!1)}const l=i instanceof Array?i:[i];for(const i of[...l].reverse()){if(e.children.length<=e.min_items)switch(c){case"none":break;case"clear":return void await i.empty();default:return void e.emit("error",{code:"LIST_MIN_ITEMS_REACHED",message:"Cannot remove items under min_items boundary",options:t})}if(s&&!await i.isEmpty())continue;let l=null,d=null;const u=e.children.filter(((t,e,n)=>{if(t.targetNode.isSameNode(i.targetNode)){if("elegant"==a)P(t.targetNode,t.targetNode.offsetHeight);else{const e="self"==a?t:"parent"==a?t.parent:null;e&&e.moveTo()}return l=t,d=n.length-e>1?d=e:0==e?null:e-1,!1}return!0})).map(((t,e)=>(t.name=e,t.updateId(),t))),p=[];await e.emit("removeItem",{action:n,origin:r,context:o,target:i,oldItem:l,oldItemTarget:l.targetNode,options:t,onRemoved:t=>p.push(t)}),l.targetNode.remove(),e.children=u,e.getTriggers("count").forEach((t=>t.targetNode.innerText=String(e.children.length))),p.forEach((t=>t())),null!==d&&e.children[d].focus()}}async isEmpty(){const t=this;for(const e of t.children)if(!await e.isEmpty())return!1;return!0}async empty(){const t=this;return await t.import({data:[]})}count(){const t=undefined;return this.children.length}static#e=(()=>W())()}class rt extends M{static#t=(()=>[Q]=i(this,[[S,2,"export"],[S,2,"import"],[S,2,"empty"]],[]).e)();constructor(){super(...arguments),Q(this)}async render(){const t=this;if(t.isSingleton=!("INPUT"===t.targetNode.tagName||"SELECT"===t.targetNode.tagName||"TEXTAREA"===t.targetNode.tagName),t.isCheckbox=!t.isSingleton&&"checkbox"==String(t.targetNode.type).toLowerCase(),t.isSingleton){await super.render();const e=Object.keys(t.children).length;if(1!=e)throw t.renderError("NOT_A_SINGLETON",`Singleton forms are only allowed to contain exactly one data field but ${e} found.`)}t.targetField=t.isSingleton?Object.values(t.children)[0].targetNode:t.targetNode}async export(){const t=this;return t.isSingleton?Object.values(await super.export())[0]:t.isCheckbox?!!t.targetNode.checked:t.targetNode.value}async import(t){let{data:e=""}=t;const n=this;return n.isSingleton?await super.import({data:Object.fromEntries([[Object.keys(n.children)[0],e]])}):(n.isCheckbox?n.targetNode.checked=!!e:n.targetNode.value=e,n.targetNode.value)}async isEmpty(){const t=this,e=undefined;return!(t.isCheckbox?"":await t.export()).trim().length}async empty(){const t=this;await t.import({data:""})}}class ot extends rt{static#t=(()=>[Z]=i(this,[[S,2,"export"],[S,2,"import"]],[]).e)();constructor(){super(...arguments),Z(this)}async render(){await super.render();const t=this,e=t.targetField.tagName,n=t.targetField.getAttribute("type");if("INPUT"!=e||"number"!=(n||"number").toLowerCase())throw t.renderError("NOT_A_NUMBER_FIELD",'Number inputs require an INPUT tag of type "number".');n||(t.targetField.type="number")}async export(){const t=await super.export();return t.length&&!isNaN(t)?Number(t):null}async import(t){let{data:e=null}=t;const n=typeof e;return await super.import({data:"number"==n?e:"string"==n&&e.length&&!isNaN(e)?Number(e):null})}async isEmpty(){const t=this,e=undefined;return null===await t.export()}}const it=/T.*/;function at(t){return 8==t.length?new Date([t.substring(0,4),t.substring(4,6),t.substring(6,8)].join("-")):10==t.length&&"-"==t[4]&&"-"==t[7]?new Date(t):NaN}function st(t){return t.toISOString().replace(it,"")}class ct extends rt{static#t=(()=>[tt]=i(this,[[S,2,"export"],[S,2,"import"]],[]).e)();constructor(){super(...arguments),tt(this)}async render(){await super.render();const t=this,e=t.targetField.tagName,n=t.targetField.getAttribute("type");if("INPUT"!=e||"date"!=(n||"date").toLowerCase())throw t.renderError("NOT_A_DATE_FIELD",'Date inputs require an INPUT tag of type "date".');n||(t.targetField.type="date")}async export(){const t=await super.export();if(!t.length)return null;const e=at(t);return isNaN(e)?null:st(e)}async import(t){let{data:e=null}=t;const n=e instanceof Date?e:"number"==typeof e?new Date(e):e&&"string"==typeof e?at(e):NaN;return await super.import({data:isNaN(n)?null:st(n)})}async isEmpty(){const t=this,e=undefined;return null===await t.export()}}for(const[t,e]of Object.entries({trigger:k,label:j,form:M,list:X,input:rt,number:ot,date:ct}))x(t,e);class lt extends M{constructor(t){let{customActions:e={},...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r={...n,name:"",type:"form"};super(t,r,null);const o=this;o.setNodeOptions(o.targetNode,r),o.actions={...o.actions,...Object.fromEntries(Object.entries(e).map((t=>{let[e,n]=t;return[e,n.bind(o)]})))},o.targetNode.addEventListener("click",L.bind(o),!0),new I(o)}async render(){const t=this;t.targetNode.setAttribute("aria-busy","true"),await super.render(),t.targetNode.setAttribute("aria-busy","false")}}lt.createType=x;export{lt as default};//# sourceMappingURL=SmarkForm.esm.js.map

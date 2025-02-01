function t(t){if(Object(t)!==t)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==t?typeof t:"null"));return t}function e(t,e,r){return(e=c(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,o=i(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function i(t,e){if(null==t)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.includes(n))continue;r[n]=t[n]}return r}function a(t,e,r){"symbol"==typeof e&&(e=(e=e.description)?"["+e+"]":"");try{Object.defineProperty(t,"name",{configurable:!0,value:r?r+" "+e:e})}catch(t){}return t}function s(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function c(t){var e=s(t,"string");return"symbol"==typeof e?e:e+""}function l(){function e(t,e){return function(r){!function(t,e){if(t.v)throw Error("attempted to call addInitializer after decoration was finished")}(e),o(r,"An initializer"),t.push(r)}}function r(t,e){if(!t(e))throw new TypeError("Attempted to access private element on non-instance")}function n(t,n,o,i,a,s,l,d,u){var p;switch(a){case 1:p="accessor";break;case 2:p="method";break;case 3:p="getter";break;case 4:p="setter";break;default:p="field"}var f,g,h={kind:p,name:l?"#"+n:c(n),static:s,private:l},m={v:!1};if(0!==a&&(h.addInitializer=e(i,m)),l||0!==a&&2!==a)if(2===a)f=function(t){return r(u,t),o.value};else{var y=0===a||1===a;(y||3===a)&&(f=l?function(t){return r(u,t),o.get.call(t)}:function(t){return o.get.call(t)}),(y||4===a)&&(g=l?function(t,e){r(u,t),o.set.call(t,e)}:function(t,e){o.set.call(t,e)})}else f=function(t){return t[n]},0===a&&(g=function(t,e){t[n]=e});var v=l?u.bind():function(t){return n in t};h.access=f&&g?{get:f,set:g,has:v}:f?{get:f,has:v}:{set:g,has:v};try{return t(d,h)}finally{m.v=!0}}function o(t,e){if("function"!=typeof t)throw new TypeError(e+" must be a function")}function i(t,e){var r=typeof e;if(1===t){if("object"!==r||null===e)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==e.get&&o(e.get,"accessor.get"),void 0!==e.set&&o(e.set,"accessor.set"),void 0!==e.init&&o(e.init,"accessor.init")}else if("function"!==r)throw new TypeError((0===t?"field":10===t?"class":"method")+" decorators must return a function or void 0")}function s(t){return function(e){t(this,e)}}function l(t,e,r,o,c,l,d,u,p){var f,g,h,m,y,v,N,b,w=r[0];if(d?(0===c||1===c?(f={get:(y=r[3],function(){return y(this)}),set:s(r[4])},h="get"):3===c?(f={get:r[3]},h="get"):4===c?(f={set:r[3]},h="set"):f={value:r[3]},0!==c&&(1===c&&a(f.set,"#"+o,"set"),a(f[h||"value"],"#"+o,h))):0!==c&&(f=Object.getOwnPropertyDescriptor(e,o)),1===c?m={get:f.get,set:f.set}:2===c?m=f.value:3===c?m=f.get:4===c&&(m=f.set),"function"==typeof w)void 0!==(v=n(w,o,f,u,c,l,d,m,p))&&(i(c,v),0===c?g=v:1===c?(g=v.init,N=v.get||m.get,b=v.set||m.set,m={get:N,set:b}):m=v);else for(var E=w.length-1;E>=0;E--){var _;void 0!==(v=n(w[E],o,f,u,c,l,d,m,p))&&(i(c,v),0===c?_=v:1===c?(_=v.init,N=v.get||m.get,b=v.set||m.set,m={get:N,set:b}):m=v,void 0!==_&&(void 0===g?g=_:"function"==typeof g?g=[g,_]:g.push(_)))}if(0===c||1===c){if(void 0===g)g=function(t,e){return e};else if("function"!=typeof g){var A=g;g=function(t,e){for(var r=e,n=0;n<A.length;n++)r=A[n].call(t,r);return r}}else{var T=g;g=function(t,e){return T.call(t,e)}}t.push(g)}0!==c&&(1===c?(f.get=m.get,f.set=m.set):2===c?f.value=m:3===c?f.get=m:4===c&&(f.set=m),d?1===c?(t.push((function(t,e){return m.get.call(t,e)})),t.push((function(t,e){return m.set.call(t,e)}))):2===c?t.push(m):t.push((function(t,e){return m.call(t,e)})):Object.defineProperty(e,o,f))}function d(e,r,n){for(var o,i,a,s=[],c=new Map,d=new Map,p=0;p<r.length;p++){var f=r[p];if(Array.isArray(f)){var g,h,m=f[1],y=f[2],v=f.length>3,N=m>=5,b=n;if(N?(g=e,0!=(m-=5)&&(h=i=i||[]),v&&!a&&(a=function(r){return t(r)===e}),b=a):(g=e.prototype,0!==m&&(h=o=o||[])),0!==m&&!v){var w=N?d:c,E=w.get(y)||0;if(!0===E||3===E&&4!==m||4===E&&3!==m)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+y);!E&&m>2?w.set(y,m):w.set(y,!0)}l(s,g,f,y,m,N,v,h,b)}}return u(s,o),u(s,i),s}function u(t,e){e&&t.push((function(t){for(var r=0;r<e.length;r++)e[r].call(t);return t}))}return function(t,r,n,o){return{e:d(t,r,o),get c(){return function(t,r){if(r.length>0){for(var n=[],o=t,a=t.name,s=r.length-1;s>=0;s--){var c={v:!1};try{var l=r[s](o,{kind:"class",name:a,addInitializer:e(n,c)})}finally{c.v=!0}void 0!==l&&(i(10,l),o=l)}return[o,function(){for(var t=0;t<n.length;t++)n[t].call(o)}]}}(t,n)}}}}function d(t,e,r,n){return(d=l())(t,e,r,n)}const u=Symbol("Events"),p=Symbol("allEvents"),f=/^on(?:Before|After)Action_/,g=/^onLocal_/,h=/^onAll_/;function m(t,e,r){const n=this;return t.has(e)||t.set(e,[]),t.get(e).push(r.bind(n)),n}const y=function t(e,r){let{kind:n}=r;if("class"==n)return class t extends e{constructor(t,e){const r={},n=[];for(const[t,o]of Object.entries(e))t.match(f)?n.push([t.substring(2),o,"onLocal"]):t.match(g)?n.push([t.substring(8),o,"onLocal"]):t.match(h)?n.push([t.substring(6),o,"onAll"]):r[t]=o;for(var o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];super(t,r,...i);const s=this,c=Object.is(s,s.root);s[u]=new Map,c&&(s.root[p]=new Map),s.onLocal=m.bind(s,s[u]),s.onAll=m.bind(s.root,s.root[p]),s.on=s.onLocal;for(const[t,e,r]of n)s[r](t,e)}async emit(t,e){const r=this,n=[...r[u].get(t)||[],...r.root[p].get(t)||[]];let o=!1;if(n.length){let t=!1;e.preventDefault=()=>o=!0,e.stopPropagation=()=>t=!0;for(const r of n){if(t)break;await r(e)}}return!o}}};var v={disEnhance(t){t.targetNode.tagName.toLowerCase()&&t.targetNode.addEventListener("submit",(function(t){t.preventDefault()}))}};const N=["property_name"];var b;let w;const E={},_=Symbol("smart_component"),A=/^[a-z0-9_]+$/i,T=/[\*\?]/,x=t=>new RegExp("^"+t.replace(/\*+/g,".*").replace(/\?/g,".")+"$"),O=class t extends Error{constructor(t,e,r){super("RenderError(".concat(r,"): ").concat(e)),this.code=t,this.path=r,this.stack=this.stack.split("\n").slice(2).join("\n")}};function I(t,e){switch(t.tagName.toLowerCase()){case"ul":case"ol":case"table":case"thead":case"tbody":case"tfoot":return"list";case"input":const r=String(t.getAttribute("type")||"").toLowerCase();if(e.isSingleton)return e.options.type;switch(r){case"number":case"date":case"radio":case"color":return r}case"textarea":case"select":return"input";case"label":return"label";default:return"form"}}let S;class k{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{property_name:r="smark"}=e,n=o(e,N),i=arguments.length>2?arguments[2]:void 0;const a=this;if(a.validName=function t(){let e=0;return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];for(let t of r)if("string"==typeof t&&(t=t.trim(),t.length))return t;return"UNNAMED"+ ++e}}(),a.actions={},a.property_name=r,a.selector="[data-".concat(a.property_name,"]"),a.types=E,a.targetNode=t,a.options=n,a.setNodeOptions(a.targetNode,a.options),a.parent=i,!a.parent instanceof S)throw a.renderError("INVALID_PARENT","Smark Components must have valid Smark Component parent.");a.root=null===a.parent?a:a.parent.root,a.parents={},a.parents[Symbol.iterator]=function*(){let t=a;for(;t;)yield t,t=t.parent};const s=a.inherittedOption("autoId",!1);let c;a.genId=!1!==s&&(!0===s?t=>t.replace(/\//g,"_"):"string"==typeof s?t=>s+t.replace(/\//g,"_"):"function"==typeof s&&s),a.onRenderedTasks=[],a.renderedSync=!1,a.rendered=new Promise((t=>c=t)),a.children={},a.targetNode[_]=a,(async()=>{await a.render();for(const t of a.onRenderedTasks)await t();a.onRenderedTasks=null,c(!0),setTimeout((()=>a.renderedSync=!0),1)})(),a.options.onRendered&&a.onRendered(a.options.onRendered)}onRendered(t){const e=this;e.onRenderedTasks?e.onRenderedTasks.push(t.bind(e)):t.bind(e)()}getNodeOptions(t,e){const r=this,o=(t.dataset[r.property_name]||"").trim()||null,i=n(n({},e),(()=>{try{const t=JSON.parse(o);if("object"!=typeof t)throw new Error("NO_OBJECT");return t}catch(t){return o.match(A)?{type:o}:{}}})());return i.action||i.type||(i.type=I(t,r)),r.setNodeOptions(t,i),i}setNodeOptions(t,e){const r=this;t.dataset[r.property_name]=JSON.stringify(e)}async enhance(t,e){const r=this;let n=r.getNodeOptions(t,e);if(v.disEnhance(r),n.action){if(n.type||(n.type="trigger"),"trigger"!=n.type)throw r.renderError("ACTION_IN_NON_TRIGGER",'"action" property is only allowed for "trigger" components but "'.concat(n.type,'" type specified.'))}else if("string"!=typeof n.type)throw r.renderError("NO_TYPE_PROVIDED","Invalid SmarkForm item: type is mandatory for non trigger components.");const o=r.types[n.type];if(!o)throw r.renderError("UNKNOWN_TYPE","Unimplemented SmarkForm component controller: ".concat(n.type));return new o(t,n,r)}getComponent(t){var e;const r=this;return t[_]||(null===(e=t.parentElement)||void 0===e?void 0:e.closest(r.selector)[_])||null}getPath(){const t=undefined;return[...this.parents].map((t=>t.name)).reverse().join("/")||"/"}find(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this;if("/"==t[0])for(;e.parent;)e=e.parent;const r=t.split("/").filter((t=>t)),n=r.findIndex((t=>t.match(T)));if(n>=0){const t=x(r[n]),o=r.slice(0,n).join("/"),i=r.slice(n+1).join("/"),a=e.find(o),s=undefined;return Object.entries(a.children).filter((e=>{let[r,n]=e;return n&&r.match(t)})).map((t=>{let[,e]=t;return e.find(i)})).flat(1/0)}return r.reduce(((t,e)=>void 0===t?null:".."==e?t.parent:t.children[e]),e)}inherittedOption(t,e){const r=this;for(const e of r.parents)if(void 0!==e.options[t])return e.options[t];return e}moveTo(){const t=this;t.targetNode.id||(t.targetNode.id=t.getPath()),document.location.hash=t.targetNode.id,window.history.pushState({},void 0,window.location.pathname)}getTriggers(){let t;const e=this,r=[],n=new Set([arguments.length>0&&void 0!==arguments[0]?arguments[0]:""].flat().map(String).filter((t=>t))),o=n.has("*");for(const t of[...e.root.targetNode.querySelectorAll(e.selector)].map((t=>t[_])).filter((t=>t))){const i=t.getTriggerArgs();i&&(Object.is(i.context,e)&&(o||n.has(i.action))&&r.push(t))}return r}updateId(){const t=this;if(!1===t.genId)return;const e=t.genId(t.getPath());if(t.targetNode.id!=e){t.targetNode.id=e;for(const e of Object.values(t.children))e.updateId()}return t.targetNode.id}focus(){const t=this;for(const e in t.children)return t.children[e].focus();t.targetFieldNode&&t.targetFieldNode.focus()}getTriggerArgs(){}renderError(t,e){const r=undefined;return new O(t,e,this.getPath())}}b=k,[S,w]=d(b,[],[y]).c,w();class L extends S{constructor(){if(super(...arguments),this._isField=!0,!Object.is(this,this.root)&&(this.name=this.validName(this.options.name,this.targetNode.getAttribute("name")),this.options.hasOwnProperty("value"))){if(null!==this.targetNode.getAttribute("value"))throw me.renderError("VALUE_CONFLICT",'Initial value specied both as "value" option and HTML "value" attribute.');this.targetNode.setAttribute("value",this.options.value)}}}function P(t,e){if(void 0!==E[t])throw new Error("Duplicate component type definition: ".concat(t));if(!(e.prototype instanceof S))throw new Error("Bad component type implementation for: ".concat(t));E[t]=e}class j{constructor(t){const e=this;e.form=t,e.revealed=null,e.form.targetNode.addEventListener("keydown",e.onKeydown.bind(e),!0),e.form.targetNode.addEventListener("keyup",e.onKeyup.bind(e),!0),e.form.targetNode.addEventListener("focusout",e.onFocusout.bind(e),!0),e.form.targetNode.addEventListener("focusin",e.onFocusin.bind(e),!0)}onKeydown(t){const e=this;if("Control"==t.key)e.reveal(t.target);else if(t.ctrlKey){const r=e.revealed.find((e=>e.options.hotkey==t.key));r&&(t.preventDefault(),t.stopPropagation(),r.targetNode.click())}}onKeyup(t){const e=this;"Control"==t.key&&e.reveal(!1)}onFocusout(t){const e=this;null!==e.revealed&&e.reveal()}onFocusin(t){const e=this;null!==e.revealed&&e.reveal(t.target)}reveal(t){const e=this;if(null!==e.revealed){for(const t of e.revealed)t.targetNode.removeAttribute("data-hotkey");e.revealed.length=0}if(!1===t&&(e.revealed=null),t){const r=e.form.getComponent(t),n=[r,...r.parents],o=new Set(n),i=n.map(((t,e)=>t.getTriggers("*").map((t=>({tg:t,lv:e,args:t.getTriggerArgs()||{},hotkey:String(t.options.hotkey||"")}))))).flat().filter((t=>{let{args:e,hotkey:r}=t;return r.length&&o.has(e.context)})).sort(((t,e)=>o.has(e.args.target)-o.has(t.args.target)-e.lv+t.lv)),a=new Set;e.revealed=[];for(const t of i)a.has(t.hotkey)||(t.tg.targetNode.disabled||t.tg.targetNode.setAttribute("data-hotkey",t.hotkey),a.add(t.hotkey),e.revealed.push(t.tg))}}}const C=["action","context","target"],D=Symbol("beforeEventName"),F=Symbol("afterEventName"),R=function t(e,r){let{kind:n,name:o,addInitializer:i}=r;"method"==n&&i((function t(){this.actions[o]=e.bind(this),this.actions[o][D]="BeforeAction_".concat(o),this.actions[o][F]="AfterAction_".concat(o)}))};class M extends S{constructor(t,e){delete e.name;for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return super(t,e,...n)}render(){const t=this;t.parent.onRendered((()=>{var e;const r=t.getTriggerArgs();"function"==typeof(null===(e=r.context)||void 0===e?void 0:e.onTriggerRender)&&r.context.onTriggerRender(r)}))}disable(){const t=undefined;this.targetNode.disabled=!0}enable(){const t=undefined;this.targetNode.disabled=!1}getTriggerArgs(){const t=this,e=[...t.parents],r=t.options,{action:i,context:a,target:s}=r,c=o(r,C);if(!i)return;let[l,d]=i.split(":").reverse();const u=a?t.parent.find(a):e.find((t=>(!d||t.options.type==d)&&"function"==typeof t.actions[l])),p=s?u.find(s):a?null:e.find((t=>{var e;return null===(e=t.parent)||void 0===e?void 0:e.targetNode.isSameNode(null==u?void 0:u.targetNode)}));return n({action:l,origin:t,context:u,target:p},c)}}async function U(t){const e=this,r=undefined,o=e.getComponent(t.target).getTriggerArgs();if(!o)return;const{context:i,action:a}=o,s=null==i?void 0:i.actions[a];if("function"!=typeof s)throw e.renderError("UNKNOWN_ACTION","Unknown action ".concat(a)+(i?" for ".concat(i.options.type):""));if(await e.emit(s[D],o)){const t=await s(o);e.emit(s[F],n(n({},o),{},{data:t}))}}function B(t,e){const r=undefined,n=null===t.parentNode?t=>null===t:e=>null===e||e.isSameNode(t);return[...t.querySelectorAll(e)].filter((t=>n(t.parentNode.closest(e))))}function H(t,e){let r=t.parentNode;const n=e>=0?1:-1;for(;r;){if(r.scrollHeight>r.clientHeight*n){var o=r.scrollHeight-r.clientHeight*n;if(e<=o*n)return void(r.scrollTop+=e);r.scrollTop=o,e-=o}r=r.parentNode}}function q(){return Math.random().toString(36).substring(2)}function J(t){try{return JSON.parse(t)}catch(t){}}const K=["allow_select"],z=["context","target"];class G extends S{constructor(t,e){let{allow_select:r=!1}=e,i=o(e,K);delete i.name;for(var a=arguments.length,s=new Array(a>2?a-2:0),c=2;c<a;c++)s[c-2]=arguments[c];return super(t,n({allow_select:r},i),...s)}render(){const t=this;t.parent.onRendered((()=>{const e=t.getLabelArgs(),{targetFieldNode:r}=e.target||{};r&&(r.id||(r.id=q()),t.targetNode.setAttribute("for",r.id)),t.options.allow_select||(t.targetNode.style["user-select"]="none")}))}getLabelArgs(){const t=this;let e,r;t.parents;const i=t.options,{context:a,target:s}=i,c=o(i,z);if(a||s)e=a?t.parent.find(a):t.parent,r=s?e.find(s):e;else{e=t.parent;const n=e.targetNode.querySelectorAll(t.selector);let o=!1;for(const e in n)if(o){let o=t.getComponent(n[e]);if(null!=o&&o._isField){r=o;break}}else Object.is(n[e],t.targetNode)&&(o=!0)}return n({origin:t,context:e,target:r},c)}}const W=function t(e,r){let{kind:n}=r;if("class"==n){var o;let t;return o=class r extends e{constructor(){super(...arguments),t(this)}render(){const t=super.render(...arguments),e=this;return e.root.onRendered((()=>{e.fold({operation:e.options.folded?"fold":"unfold"})})),t}fold(){let{operation:t="toggle"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this,r="none"==e.targetNode.style.display,n="fold"==t||"unfold"!=t&&!r;e.targetNode.style.display=n?"none":e.originalDisplayProp,e.getTriggers("fold").forEach((t=>{const{foldedClass:e,unfoldedClass:r}=t.options;e&&t.targetNode.classList[n?"add":"remove"](e),r&&t.targetNode.classList[n?"remove":"add"](r)})),e.getTriggers(["addItem","removeItem"]).map(n?t=>t.disable():t=>t.enable())}},[t]=d(o,[[R,2,"fold"]],[]).e,o}},V=["target"],Y=function t(e,r){let{kind:n}=r;if("method"==n)return async function t(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{target:n}=r,i=o(r,V);const a=this,s=await e.call(a,i);try{await n.import({data:s})}catch(t){}return s}},X=["target","data"],$=function t(e,r){let{kind:i}=r;if("method"==i)return async function t(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{target:i,data:a}=r,s=o(r,X);const c=this;try{a=await i.export()}catch(t){}return await e.call(c,n({data:a},s))}};var Q;let Z,tt,et;class rt extends L{constructor(){super(...arguments),Z(this)}async render(){const t=this;t.originalDisplayProp=t.targetNode.style.display;for(const e of B(t.targetNode,t.selector)){const r=await t.enhance(e);if(null!=r&&r._isField){if(void 0!==t.children[r.name])throw t.renderError("REPEATED_FIELD_NAME","Field name '".concat(r.name,"' used more than once in this form level."));t.children[r.name]=r,r.updateId()}}}async export(){const t=this;return Object.fromEntries(await Promise.all(Object.entries(t.children).map((async t=>{let[e,r]=t;return[e,await r.export()]}))))}async import(){let{data:t={},focus:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this,n=Object(t).constructor;if(n!=={}.constructor&&!(t=J(t)))throw r.renderError("FORM_NOT_PLAIN_OBJECT","Expected plain object or vailid JSON for form import, ".concat(n.name," given."));const o=Object.fromEntries(await Promise.all(Object.entries(r.children).map((async r=>{let[n,o]=r;const i=undefined;return[n,await o.import({data:t[n],focus:e})]}))));return e&&r.focus(),o}async isEmpty(){const t=this;for(const e of Object.values(t.children))if(!await e.isEmpty())return!1;return!0}async clear(){let{focus:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;return await e.import({data:{},focus:t})}}async function nt(t){await t.rendered;for(const e of t.getTriggers(["removeItem","addItem"]))e.targetNode.disabled="removeItem"==e.options.action?t.children.length<=t.min_items&&"clear"!=e.options.failback:t.children.length>=t.max_items}Q=rt,({e:[Z],c:[et,tt]}=d(Q,[[[R,Y],2,"export"],[[R,$],2,"import"],[R,2,"clear"]],[W])),tt();const ot=function t(e,r){let{kind:n}=r;return"class"==n?class t extends e{async render(){const t=await super.render(...arguments),e=this;return setTimeout((()=>nt(e)),1),t}}:"method"==n?async function t(){const r=this;for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];const a=await e.call(r,...o);return nt(r),a}:void 0},it=Symbol("smart_mutex");class at{constructor(){this.mtx=Promise.resolve()}lock(){let t;const e=new Promise((e=>{t=()=>e()})),r=this.mtx;return this.mtx=e,r.then((function e(){return t}))}}const st=function t(e){return function t(r,n){let{kind:o}=n;if("method"==o)return async function t(){const n=this;n[it]||(n[it]={}),n[it][e]||(n[it][e]=new at);const o=await n[it][e].lock();let i,a;try{for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];a=await r.call(n,...c)}catch(t){i=t}if(o(),i)throw i;return a}}},ct=function t(e,r){let{kind:n}=r;if("class"==n){var o;let t,r,n;return r=st("list_mutating"),n="render",o=class r extends e{constructor(){super(...arguments),t(this)}async[n](){const t=await super.render(...arguments),e=this;if(e.sortable=!!e.options.sortable,e.templates.item.setAttribute("draggable",e.sortable),e.children.forEach((t=>t.targetNode.setAttribute("dragable",e.sortable))),e.sortable){let t=null,r=null;e.targetNode.addEventListener("dragstart",(e=>{null===t?(t=e.target,e.stopPropagation()):e.preventDefault()})),e.targetNode.addEventListener("dragover",(t=>t.preventDefault())),e.targetNode.addEventListener("drop",(e=>{if(!t)return;let n=e.target;for(;n.parentElement&&n.parentElement!=t.parentElement;)n=n.parentElement;r=n})),e.targetNode.addEventListener("dragend",(async()=>{r&&await e.move({from:e.getComponent(t),to:e.getComponent(r)}),t=null,r=null}))}return t}async move(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{from:r,to:n}=t;if(null===n||null===r)return;const o=Number(null==r?void 0:r.name),i=Number(null==n?void 0:n.name);if(o==i)return;if(o<i){const t=[...e.children.slice(o+1,i+1),e.children[o]];e.children.splice(o,i-o+1,...t)}else if(o>i){const t=[e.children[o],...e.children.slice(i,o)];e.children.splice(i,o-i+1,...t)}const a=undefined,s=(o<i?1:-1)>0?"after":"before";n.targetNode[s](r.targetNode),e.renum()}},[t]=d(o,[[r,2,"move"]],[]).e,o}},lt=["action","origin","context"];var dt;let ut,pt,ft,gt,ht,mt,yt;function vt(t){null===t.getAttribute("tabindex")&&t.setAttribute("tabindex","-1")}ft=[st("list_mutating"),R,Y],gt=[R,st("list_mutating"),ot],ht=[R,st("list_mutating"),ot],mt="render";class Nt extends L{constructor(){super(...arguments),ut(this)}async[mt](){const t=this;t.originalDisplayProp=t.targetNode.style.display,t.min_items=Math.max(0,"number"==typeof t.options.min_items?t.options.min_items:1),t.max_items=Math.max(t.min_items,"number"==typeof t.options.max_items?t.options.max_items:1/0),t.children=[],t.templates={};for(const e of[...t.targetNode.children]){const{role:r="item"}=J(e.getAttribute("data-smark"))||{};switch(r){case"empty_list":case"separator":case"last_separator":e.setAttribute("data-role",r);case"item":if(void 0!==t.templates[r])throw t.renderError("LIST_DUPLICATE_TEMPLATE","Repated list template role ".concat(r));t.templates[r]=e,t.templates[r].remove()}}if(t.templates.last_separator||(t.templates.last_separator=t.templates.separator),t.targetNode.children.length){const{role:e="item"}=J(t.targetNode.children[0].getAttribute("data-smark"))||{};throw t.renderError("LIST_UNKNOWN_TEMPLATE_ROLE","Unknown list template role ".concat(e))}if(null!==t.templates.item.querySelector("[id]"))throw t.renderError("LIST_CONTAINS_ID","List components are not allowed to contain elements with 'id' attribute");const e=t.getNodeOptions(t.templates.item,{type:t.options.of});if(t.options.of&&e.type!=t.options.of)throw t.renderError("LIST_ITEM_TYPE_MISSMATCH","List item type missmatch");t.root.onRendered((async()=>{for(let e=0;e<t.min_items;e++)await t.addItem();0==t.min_items&&t.renum(),t.targetNode.setAttribute("aria-live","polite"),t.targetNode.setAttribute("aria-atomic","true")}))}onTriggerRender(t){let{action:e,origin:r,context:n}=t;switch(o(t,lt),e){case"addItem":case"removeItem":1+[...r.parents].findIndex((t=>Object.is(t,n)))&&r.options.hotkey&&vt(r.targetNode)}}async export(){const t=this,e=[],r=[],n=!t.inherittedOption("exportEmpties",!1);for(const o of t.children)n&&await o.isEmpty()?e.length<t.min_items&&r.push(o):e.push(await o.export());for(let n=0;e.length<t.min_items;n++)e.push(await r[n].export());return e}async import(){let{data:t=[],focus:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this;t instanceof Array||(t=[t]);for(let n=0;n<Math.min(t.length,r.max_items);n++)r.children.length<=n&&await r.addItem(),await r.children[n].import({data:t[n],focus:e});for(let e=Math.max(t.length,r.min_items);e<r.children.length;)await r.removeItem();t.length>r.max_items&&r.emit("error",{code:"LIST_IMPORT_OVERFLOW",message:"Trying to import array greater than list's max_items. Data beyond max_items ignored.",context:r,data:t,options:r.options});for(let e=t.length;e<r.children.length;e++)r.children[e].clear();e&&r.focus()}async addItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{action:r,origin:n=null,context:o=e,target:i,position:a="after",autoscroll:s,failback:c}=t;if("after"!=a&&"before"!=a)throw e.renderError("LIST_WRONG_ADDITEM_POSITION","Invalid value for addItem() position property: ".concat(a));if(e.children.length>=e.max_items){if("none"===c);else e.emit("error",{code:"LIST_MAX_ITEMS_REACHED",message:"Cannot add items over max_items boundary",options:t});return}e.children.length&&!i&&(i="before"==a?e.children[0]:e.children[e.children.length-1]);const l=e.templates.item.cloneNode(!0),d=[];let u;if(await e.emit("addItem",{action:r,origin:n,context:o,target:i,position:a,newItemTarget:l,options:t,onRendered:t=>d.push(t)}),e.children.length?e.children=(await Promise.all(e.children.map((async(t,r)=>t.targetNode.isSameNode(i.targetNode)?"after"==a?(t.targetNode.after(l),u=await e.enhance(l,{type:"form"}),await u.rendered,[t,u]):(t.targetNode.before(l),u=await e.enhance(l,{type:"form"}),await u.rendered,[u,t]):t)))).flat():(e.targetNode.appendChild(l),u=await e.enhance(l,{type:"form",name:0}),await u.rendered,e.children.push(u),u.name=0),e.renum(),"elegant"==s&&u)H(u.targetNode,-u.offsetHeight);else{const t=u?"self"==s?u:"parent"==s?u.parent:null:null;t&&t.moveTo()}d.forEach((t=>t(u))),e.renderedSync&&u.focus()}async removeItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{action:r,origin:n=null,context:o=e,target:i,autoscroll:a,keep_non_empty:s,failback:c}=t;if(!i){if(s)for(const t of[...e.children].reverse())if(await t.isEmpty()){i=t;break}i||(i=e.children[e.children.length-1],s=!1)}const l=i instanceof Array?i:[i];for(const i of[...l].reverse()){if(e.children.length<=e.min_items)switch(c){case"none":break;case"clear":return void await i.clear();default:return void e.emit("error",{code:"LIST_MIN_ITEMS_REACHED",message:"Cannot remove items under min_items boundary",options:t})}if(s&&!await i.isEmpty())continue;let l=null,d=null;const u=e.children.filter(((t,e,r)=>{if(t.targetNode.isSameNode(i.targetNode)){if("elegant"==a)H(t.targetNode,t.targetNode.offsetHeight);else{const e="self"==a?t:"parent"==a?t.parent:null;e&&e.moveTo()}return l=t,d=r.length-e>1?d=e:0==e?null:e-1,!1}return!0})),p=[];await e.emit("removeItem",{action:r,origin:n,context:o,target:i,oldItem:l,oldItemTarget:l.targetNode,options:t,onRemoved:t=>p.push(t)}),l.targetNode.remove(),e.children=u,e.renum(),p.forEach((t=>t())),null!==d&&e.children[d].focus()}}async isEmpty(){const t=this;for(const e of t.children)if(!await e.isEmpty())return!1;return!0}async clear(){let{focus:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;return await e.import({data:[],focus:t})}count(){let{delta:t=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=undefined;return this.children.length+Number(t)}position(){let{target:t,offset:e=1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Number(null==t?void 0:t.name)+Number(e)}renum(){const t=this;for(const e in t.children)t.children[e].name=e,t.children[e].updateId();if(t.templates.separator||t.templates.last_separator)for(const e in t.children){const r=e>=t.children.length-1,n=e<=0?null:r?"last_separator":"separator",o=t.children[e].targetNode,i=o.previousElementSibling,a=i&&i.getAttribute("data-role");if(a!==n){a&&i.remove();const e=t.templates[n];n&&e&&o.parentElement.insertBefore(e.cloneNode(!0),o)}if(r){const t=o.nextElementSibling;t&&t.remove()}}t.templates.empty_list&&(t.children.length?t.templates.empty_list.remove():t.targetNode.appendChild(t.templates.empty_list)),t.getTriggers("position").forEach((t=>{const e=this,r=t.getTriggerArgs();t.targetNode.innerText=e.position(r)})),t.getTriggers("count").forEach((t=>{const e=this,r=t.getTriggerArgs();t.targetNode.innerText=e.count(r)}))}}var bt;let wt;dt=Nt,({e:[ut],c:[yt,pt]}=d(dt,[[ft,2,"export"],[[R,$],2,"import"],[gt,2,"addItem"],[ht,2,"removeItem"],[R,2,"clear"],[R,2,"count"],[R,2,"position"]],[W,ct,ot])),pt();class Et extends et{constructor(){super(...arguments),wt(this)}async render(){const t=this;if(t.isSingleton=!("INPUT"===t.targetNode.tagName||"SELECT"===t.targetNode.tagName||"TEXTAREA"===t.targetNode.tagName),t.isCheckbox=!t.isSingleton&&"checkbox"==String(t.targetNode.type).toLowerCase(),t.isSingleton){await super.render();const e=Object.values(t.children);if(1!=e.length)throw t.renderError("NOT_A_SINGLETON","Singleton forms are only allowed to contain exactly one"+" data field but ".concat(e.length," found."));const r=e[0];if(t.options.type!==r.options.type)throw t.renderError("SINGLETON_TYPE_MISMATCH","Singleton type (".concat(t.options.type,")")+" does not match child field type (".concat(r.options.type,")."));t.targetFieldNode=r.targetNode}else t.targetFieldNode=t.targetNode}async export(){const t=this;return t.isSingleton?Object.values(await super.export())[0]:t.isCheckbox?!!t.targetNode.checked:t.targetNode.value}async import(){let{data:t="",focus:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this;if("object"==typeof t&&"input"===r.options.type){const e=undefined;t="TEXTAREA"===r.targetFieldNode.tagName.toUpperCase()?JSON.stringify(t,null,4):JSON.stringify(t)}return r.isSingleton?await super.import({data:Object.fromEntries([[Object.keys(r.children)[0],t]]),focus:e}):(r.isCheckbox?r.targetNode.checked=!!t:r.targetNode.value=t,e&&r.focus(),r.targetNode.value)}async isEmpty(){const t=this,e=undefined;return!(t.isCheckbox?"":await t.export()).trim().length}async clear(){let{focus:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;await e.import({focus:t})}}var _t;let At;bt=Et,[wt]=d(bt,[[[R,Y],2,"export"],[[R,$],2,"import"],[R,2,"clear"]],[]).e;class Tt extends Et{constructor(){super(...arguments),At(this)}async render(){await super.render();const t=this,e=t.targetFieldNode.tagName,r=t.targetFieldNode.getAttribute("type");if("INPUT"!=e||"number"!=(r||"number").toLowerCase())throw t.renderError("NOT_A_NUMBER_FIELD",'Number inputs require an INPUT tag of type "number".');r||(t.targetFieldNode.type="number")}async export(){const t=this,e=await super.export(...arguments);return t.isSingleton?e:e.length&&!isNaN(e)?Number(e):null}async import(){let{data:t=null,focus:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=undefined,n=typeof t;if(this.isSingleton)return await super.import({data:t,focus:e});const o=undefined;return await super.import({data:"number"==n?t:"string"==n&&t.length&&!isNaN(t)?Number(t):null,focus:e})}async isEmpty(){const t=this,e=undefined;return null===await t.export()}}var xt;let Ot;_t=Tt,[At]=d(_t,[[R,2,"export"],[R,2,"import"]],[]).e;const It=/T.*/;function St(t){return 8==t.length?new Date([t.substring(0,4),t.substring(4,6),t.substring(6,8)].join("-")):10==t.length&&"-"==t[4]&&"-"==t[7]?new Date(t):NaN}function kt(t){return t.toISOString().replace(It,"")}class Lt extends Et{constructor(){super(...arguments),Ot(this)}async render(){await super.render();const t=this,e=t.targetFieldNode.tagName,r=t.targetFieldNode.getAttribute("type");if("INPUT"!=e||"date"!=(r||"date").toLowerCase())throw t.renderError("NOT_A_DATE_FIELD",'Date inputs require an INPUT tag of type "date".');r||(t.targetFieldNode.type="date")}async export(){const t=this,e=await super.export(...arguments);if(t.isSingleton)return e;if(!e.length)return null;const r=St(e);return isNaN(r)?null:kt(r)}async import(){let{data:t=null,focus:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=undefined;if(this.isSingleton)return await super.import({data:t,focus:e});const n=t instanceof Date?t:"number"==typeof t?new Date(t):t&&"string"==typeof t?St(t):NaN,o=undefined;return await super.import({data:isNaN(n)?null:kt(n),focus:e})}async isEmpty(){const t=this,e=undefined;return null===await t.export()}}var Pt;let jt;xt=Lt,[Ot]=d(xt,[[R,2,"export"],[R,2,"import"]],[]).e;class Ct extends Et{constructor(){jt(super(...arguments));const t=this,e=t.parent.children[t.name];return e?(t.targetNode.setAttribute("name",e.sharedNodeName),e.radioButtons.push(t.targetNode),{}):(t.sharedNodeName=q(),t.targetNode.setAttribute("name",t.sharedNodeName),t.radioButtons=[t.targetNode],t)}async render(){await super.render();const t=this,e=t.targetFieldNode.tagName,r=t.targetFieldNode.getAttribute("type");if("INPUT"!=e||"radio"!=(r||"radio").toLowerCase())throw t.renderError("NOT_A_RADIO_FIELD",'Radio inputs require an INPUT tag of type "radio".');r||(t.targetFieldNode.type="radio")}async export(){var t;return(null===(t=this.radioButtons.find((t=>t.checked)))||void 0===t?void 0:t.value)||null}async import(){let{data:t=null,focus:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.radioButtons.find((e=>e.value===t));r&&(r.checked=!0),e&&this.focus()}async isEmpty(){return!(1+this.radioButtons.findIndex((t=>t.checked)))}}var Dt;let Ft;Pt=Ct,[jt]=d(Pt,[[[R,Y],2,"export"],[[R,$],2,"import"]],[]).e;const Rt=/^#([a-f0-9]{3}){1,2}$/i,Mt="\n    opacity: .5;\n    background: repeating-linear-gradient(\n            45deg,\n            black,\n            black 10px,\n            white 10px,\n            white 20px\n        ),\n        black;\n    background-blend-mode: difference;\n";class Ut extends Et{constructor(){super(...arguments),Ft(this)}async render(){await super.render();const t=this;if(t.isSingleton)return;const e=t.targetFieldNode.tagName,r=t.targetFieldNode.getAttribute("type");if("INPUT"!=e||"color"!=(r||"color").toLowerCase())throw t.renderError("NOT_A_COLOR_FIELD",'Color inputs require an INPUT tag of type "color".');r||(t.targetFieldNode.type="color");const n=t.targetFieldNode.getAttribute("value");t.isDefined=null!==n&&""!==n.trim(),t.defaultStyleAttr=t.targetFieldNode.getAttribute("style")+";",t.isDefined||t.targetFieldNode.setAttribute("style",t.defaultStyleAttr+Mt);const o=e=>{"Enter"!==e.code&&"Space"!==e.Code&&void 0!==e.code||(t.isDefined=!0,t.targetFieldNode.setAttribute("style",t.defaultStyleAttr))};t.targetFieldNode.addEventListener("keydown",o),t.targetFieldNode.addEventListener("click",o),t.targetFieldNode.addEventListener("change",o)}async export(){const t=this;let e=await super.export(...arguments);return t.isSingleton||(e=t.isDefined&&e.match(Rt)?e.toLowerCase():null),e}async import(){let{data:t=null,focus:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this;r.isSingleton||(null!==t&&t.match(Rt)?(r.isDefined=!0,r.targetFieldNode.setAttribute("style",r.defaultStyleAttr)):(r.isDefined=!1,r.targetFieldNode.setAttribute("style",r.defaultStyleAttr+Mt)));const n=await super.import({data:t,focus:e});return r.isDefined?n:null}async isEmpty(){const t=this,e=undefined;return null===await t.export()}}Dt=Ut,[Ft]=d(Dt,[[R,2,"export"],[R,2,"import"]],[]).e;const Bt=["customActions"];for(const[t,e]of Object.entries({trigger:M,label:G,form:et,list:yt,input:Et,number:Tt,date:Lt,radio:Ct,color:Ut}))P(t,e);class Ht extends et{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{customActions:r={}}=e,i;const a=n(n({},o(e,Bt)),{},{name:"",type:"form"});super(t,a,null);const s=this;s.setNodeOptions(s.targetNode,a),s.actions=n(n({},s.actions),Object.fromEntries(Object.entries(r).map((t=>{let[e,r]=t;return[e,r.bind(s)]})))),s.targetNode.addEventListener("click",U.bind(s),!0),new j(s)}async render(){const t=this;t.targetNode.setAttribute("aria-busy","true"),await super.render(),t.targetNode.setAttribute("aria-busy","false")}}Ht.createType=P;export{Ht as default};//# sourceMappingURL=SmarkForm.esm.js.map

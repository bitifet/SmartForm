!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).SmarkForm=e()}(this,(function(){"use strict";function t(n,r,o,i){return(t=function(){function t(t,e){return function(n){!function(t,e){if(t.v)throw new Error("attempted to call addInitializer after decoration was finished")}(e),o(n,"An initializer"),t.push(n)}}function n(t,e){if(!t(e))throw new TypeError("Attempted to access private element on non-instance")}function r(e,r,o,i,a,s,c,l,d){var u;switch(a){case 1:u="accessor";break;case 2:u="method";break;case 3:u="getter";break;case 4:u="setter";break;default:u="field"}var p,f,m={kind:u,name:c?"#"+r:r,static:s,private:c},h={v:!1};if(0!==a&&(m.addInitializer=t(i,h)),c||0!==a&&2!==a)if(2===a)p=function(t){return n(d,t),o.value};else{var g=0===a||1===a;(g||3===a)&&(p=c?function(t){return n(d,t),o.get.call(t)}:function(t){return o.get.call(t)}),(g||4===a)&&(f=c?function(t,e){n(d,t),o.set.call(t,e)}:function(t,e){o.set.call(t,e)})}else p=function(t){return t[r]},0===a&&(f=function(t,e){t[r]=e});var y=c?d.bind():function(t){return r in t};m.access=p&&f?{get:p,set:f,has:y}:p?{get:p,has:y}:{set:f,has:y};try{return e(l,m)}finally{h.v=!0}}function o(t,e){if("function"!=typeof t)throw new TypeError(e+" must be a function")}function i(t,e){var n=typeof e;if(1===t){if("object"!==n||null===e)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==e.get&&o(e.get,"accessor.get"),void 0!==e.set&&o(e.set,"accessor.set"),void 0!==e.init&&o(e.init,"accessor.init")}else if("function"!==n)throw new TypeError((0===t?"field":10===t?"class":"method")+" decorators must return a function or void 0")}function a(t){return function(e){t(this,e)}}function s(t,e,n,o,s,c,l,d,u){var p,f,m,h,g,y,v,w=n[0];if(l?p=0===s||1===s?{get:(h=n[3],function(){return h(this)}),set:a(n[4])}:3===s?{get:n[3]}:4===s?{set:n[3]}:{value:n[3]}:0!==s&&(p=Object.getOwnPropertyDescriptor(e,o)),1===s?m={get:p.get,set:p.set}:2===s?m=p.value:3===s?m=p.get:4===s&&(m=p.set),"function"==typeof w)void 0!==(g=r(w,o,p,d,s,c,l,m,u))&&(i(s,g),0===s?f=g:1===s?(f=g.init,y=g.get||m.get,v=g.set||m.set,m={get:y,set:v}):m=g);else for(var b=w.length-1;b>=0;b--){var E;void 0!==(g=r(w[b],o,p,d,s,c,l,m,u))&&(i(s,g),0===s?E=g:1===s?(E=g.init,y=g.get||m.get,v=g.set||m.set,m={get:y,set:v}):m=g,void 0!==E&&(void 0===f?f=E:"function"==typeof f?f=[f,E]:f.push(E)))}if(0===s||1===s){if(void 0===f)f=function(t,e){return e};else if("function"!=typeof f){var _=f;f=function(t,e){for(var n=e,r=0;r<_.length;r++)n=_[r].call(t,n);return n}}else{var N=f;f=function(t,e){return N.call(t,e)}}t.push(f)}0!==s&&(1===s?(p.get=m.get,p.set=m.set):2===s?p.value=m:3===s?p.get=m:4===s&&(p.set=m),l?1===s?(t.push((function(t,e){return m.get.call(t,e)})),t.push((function(t,e){return m.set.call(t,e)}))):2===s?t.push(m):t.push((function(t,e){return m.call(t,e)})):Object.defineProperty(e,o,p))}function c(t,n,r){for(var o,i,a,c=[],d=new Map,u=new Map,p=0;p<n.length;p++){var f=n[p];if(Array.isArray(f)){var m,h,g=f[1],y=f[2],v=f.length>3,w=g>=5,b=r;if(w?(m=t,0!=(g-=5)&&(h=i=i||[]),v&&!a&&(a=function(n){return e(n)===t}),b=a):(m=t.prototype,0!==g&&(h=o=o||[])),0!==g&&!v){var E=w?u:d,_=E.get(y)||0;if(!0===_||3===_&&4!==g||4===_&&3!==g)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+y);!_&&g>2?E.set(y,g):E.set(y,!0)}s(c,m,f,y,g,w,v,h,b)}}return l(c,o),l(c,i),c}function l(t,e){e&&t.push((function(t){for(var n=0;n<e.length;n++)e[n].call(t);return t}))}return function(e,n,r,o){return{e:c(e,n,o),get c(){return function(e,n){if(n.length>0){for(var r=[],o=e,a=e.name,s=n.length-1;s>=0;s--){var c={v:!1};try{var l=n[s](o,{kind:"class",name:a,addInitializer:t(r,c)})}finally{c.v=!0}void 0!==l&&(i(10,l),o=l)}return[o,function(){for(var t=0;t<r.length;t++)r[t].call(o)}]}}(e,r)}}}}())(n,r,o,i)}function e(t){if(Object(t)!==t)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==t?typeof t:"null"));return t}const n=Symbol("Events"),r=Symbol("allEvents"),o=/^on(?:Before|After)Action_/,i=/^onLocal_/,a=/^onAll_/;function s(t,e,n){return t.has(e)||t.set(e,[]),t.get(e).push(n.bind(this)),this}var c,l={disEnhance(t){t.target.tagName.toLowerCase()&&t.target.addEventListener("submit",(function(t){t.preventDefault()}))}};const d={},u=Symbol("smart_component"),p=/^[a-z0-9_]+$/i,f=/[\*\?]/,m=class extends Error{constructor(t,e,n){super("RenderError(".concat(n,"): ").concat(e)),this.code=t,this.path=n,this.stack=this.stack.split("\n").slice(2).join("\n")}};let h;function g(t,e){if(void 0!==d[t])throw new Error("Duplicate component type definition: ".concat(t));if(!(e.prototype instanceof h))throw new Error("Bad component type implementation for: ".concat(t));d[t]=e}[h,c]=t(class{constructor(t){let{property_name:e="smark",...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;const o=this;if(o.validName=function(){let t=0;return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];for(let t of n)if("string"==typeof t&&(t=t.trim(),t.length))return t;return"UNNAMED"+ ++t}}(),o.actions={},o.property_name=e,o.selector="[data-".concat(o.property_name,"]"),o.types=d,o.target=t,o.options=n,o.setNodeOptions(o.target,o.options),o.parent=r,!o.parent instanceof h)throw o.renderError("INVALID_PARENT","Smark Components must have valid Smark Component parent.");o.root=null===o.parent?o:o.parent.root,o.parents={},o.parents[Symbol.iterator]=function*(){let t=o;for(;t;)yield t,t=t.parent};const i=o.inherittedOption("autoId",!1);let a;o.genId=!1!==i&&(!0===i?t=>t.replace(/\//g,"_"):"string"==typeof i?t=>i+t.replace(/\//g,"_"):"function"==typeof i&&i),o.onRenderedTasks=[],o.rendered=new Promise((t=>a=t)),o.children={},o.target[u]=o,(async()=>{await o.render();for(const t of o.onRenderedTasks)await t();o.onRenderedTasks=null,a(!0)})(),o.options.onRendered&&o.onRendered(o.options.onRendered)}onRendered(t){const e=this;e.onRenderedTasks?e.onRenderedTasks.push(t.bind(e)):t.bind(e)()}getNodeOptions(t,e){const n=(t.dataset[this.property_name]||"").trim()||null,r={...e,...(()=>{try{const t=JSON.parse(n);if("object"!=typeof t)throw new Error("NO_OBJECT");return t}catch(t){return n.match(p)?{type:n}:{}}})()};return r.action||r.type||(r.type=function(t,e){switch(t.tagName.toLowerCase()){case"ul":case"ol":case"table":case"thead":case"tbody":case"tfoot":return"list";case"input":case"textarea":case"select":return"input";default:return"form"}}(t)),this.setNodeOptions(t,r),r}setNodeOptions(t,e){t.dataset[this.property_name]=JSON.stringify(e)}async enhance(t,e){const n=this;let r=n.getNodeOptions(t,e);if(l.disEnhance(n),r.action){if(r.type||(r.type="trigger"),"trigger"!=r.type)throw n.renderError("ACTION_IN_NON_TRIGGER",'"action" property is only allowed for "trigger" components but "'.concat(r.type,'" type specified.'));delete r.name}else if("string"!=typeof r.type)throw n.renderError("NO_TYPE_PROVIDED","Invalid SmarkForm item: type is mandatory for non trigger components.");const o=n.types[r.type];if(!o)throw n.renderError("UNKNOWN_TYPE","Unimplemented SmarkForm component controller: ".concat(r.type));return new o(t,r,n)}getComponent(t){return t[u]||t.parentElement.closest(this.selector)[u]||null}getPath(){return[...this.parents].map((t=>t.name)).reverse().join("/")||"/"}find(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this;if("/"==t[0])for(;e.parent;)e=e.parent;const n=t.split("/").filter((t=>t)),r=n.findIndex((t=>t.match(f)));if(r>=0){const t=(o=n[r],new RegExp("^"+o.replace(/\*+/g,".*").replace(/\?/g,".")+"$")),i=n.slice(0,r).join("/"),a=n.slice(r+1).join("/"),s=e.find(i);return Object.entries(s.children).filter((e=>{let[n,r]=e;return r&&n.match(t)})).map((t=>{let[,e]=t;return e.find(a)})).flat(1/0)}var o;return n.reduce(((t,e)=>void 0===t?null:".."==e?t.parent:t.children[e]),e)}inherittedOption(t,e){const n=this;for(const e of n.parents)if(void 0!==e.options[t])return e.options[t];return e}moveTo(){const t=this;t.target.id||(t.target.id=t.getPath()),document.location.hash=t.target.id,window.history.pushState({},void 0,window.location.pathname)}getActions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const e=this,n=[];for(const r of[...e.root.target.querySelectorAll(e.selector)].map((t=>t[u])).filter((t=>t))){const o=r.getActionArgs();o&&(Object.is(o.context,e)&&(!t||1+[t].flat().findIndex((t=>t==o.action)))&&n.push(r))}return n}updateId(){const t=this;if(!1===t.genId)return;const e=t.genId(t.getPath());if(t.target.id!=e){t.target.id=e;for(const e of Object.values(t.children))e.updateId()}return t.target.id}getActionArgs(){}renderError(t,e){return new m(t,e,this.getPath())}},[],[function(t,e){let{kind:c}=e;if("class"==c)return class extends t{constructor(t,e){const c={},l=[];for(const[t,n]of Object.entries(e))t.match(o)?l.push([t.substring(2),n,"onLocal"]):t.match(i)?l.push([t.substring(8),n,"onLocal"]):t.match(a)?l.push([t.substring(6),n,"onAll"]):c[t]=n;for(var d=arguments.length,u=new Array(d>2?d-2:0),p=2;p<d;p++)u[p-2]=arguments[p];super(t,c,...u);const f=this,m=Object.is(f,f.root);f[n]=new Map,m&&(f.root[r]=new Map),f.onLocal=s.bind(f,f[n]),f.onAll=s.bind(f.root,f.root[r]),f.on=f.onLocal;for(const[t,e,n]of l)f[n](t,e)}async emit(t,e){const o=[...this[n].get(t)||[],...this.root[r].get(t)||[]];let i=!1;if(o.length){let t=!1;e.preventDefault=()=>i=!0,e.stopPropagation=()=>t=!0;for(const n of o){if(t)break;await n(e)}}return!i}}}]).c,c();const y=Symbol("beforeEventName"),v=Symbol("afterEventName"),w=function(t,e){let{kind:n,name:r,addInitializer:o}=e;"method"==n&&o((function(){this.actions[r]=t.bind(this),this.actions[r][y]="BeforeAction_".concat(r),this.actions[r][v]="AfterAction_".concat(r)}))};class b extends h{render(){const t=this;t.parent.onRendered((()=>{var e;const n=t.getTriggerArgs();"function"==typeof(null===(e=n.context)||void 0===e?void 0:e.onTriggerRender)&&n.context.onTriggerRender(n)}))}disable(){this.target.disabled=!0}enable(){this.target.disabled=!1}getTriggerArgs(){const t=this,e=[...t.parents],{action:n,for:r,to:o}=t.options;if(!n)return;let[i,a]=n.split(":").reverse();const s=r?t.parent.find(r):e.find((t=>(!a||t.options.type==a)&&"function"==typeof t.actions[i])),c=o?s.find(o):r?null:e.find((t=>{var e;return null===(e=t.parent)||void 0===e?void 0:e.target.isSameNode(null==s?void 0:s.target)}));return{action:i,origin:t,context:s,target:c,...t.options}}}async function E(t){const e=this,n=e.getComponent(t.target).getTriggerArgs();if(!n)return;const{context:r,action:o}=n,i=null==r?void 0:r.actions[o];if("function"!=typeof i)throw e.renderError("UNKNOWN_ACTION","Unknown action ".concat(o)+(r?" for ".concat(r.options.type):""));if(await e.emit(i[y],n)){const t=await i(n);e.emit(i[v],{...n,data:t})}}function _(t,e){let n=t.parentNode;const r=e>=0?1:-1;for(;n;){if(n.scrollHeight>n.clientHeight*r){var o=n.scrollHeight-n.clientHeight*r;if(e<=o*r)return void(n.scrollTop+=e);n.scrollTop=o,e-=o}n=n.parentNode}}const N=function(e,n){let{kind:r}=n;var o,i;if("class"==r)return i=class extends e{constructor(){super(...arguments),o(this)}render(){const t=super.render(...arguments),e=this;return e.root.onRendered((()=>{e.fold({operation:e.options.folded?"fold":"unfold"})})),t}fold(){let{operation:t="toggle"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this,n="none"==e.target.style.display,r="fold"==t||"unfold"!=t&&!n;e.target.style.display=r?"none":e.originalDisplayProp,e.getActions("fold").forEach((t=>{const{foldedClass:e,unfoldedClass:n}=t.options;e&&t.target.classList[r?"add":"remove"](e),n&&t.target.classList[r?"remove":"add"](n)})),e.getActions(["addItem","removeItem"]).map(r?t=>t.disable():t=>t.enable())}},[o]=t(i,[[w,2,"fold"]],[]).e,i};var x,T;let I;({e:[T],c:[I,x]}=t(class extends h{constructor(){super(...arguments),T(this)}async render(){const t=this;t.originalDisplayProp=t.target.style.display;for(const e of function(t,e){const n=null===t.parentNode?t=>null===t:e=>null===e||e.isSameNode(t);return[...t.querySelectorAll(e)].filter((t=>n(t.parentNode.closest(e))))}(t.target,t.selector)){const n=await t.enhance(e);"trigger"!=n.options.type&&(n.name=t.validName(n.options.name,e.getAttribute("name")),t.children[n.name]=n,n.updateId())}}async export(){return Object.fromEntries(await Promise.all(Object.entries(this.children).map((async t=>{let[e,n]=t;return[e,await n.export()]}))))}async import(t){let{data:e={}}=t;const n=Object(e).constructor;if(n!=={}.constructor)throw this.renderError("FORM_NOT_PLAIN_OBJECT","Expected plain object for form import, ".concat(n.name," given."));return Object.fromEntries(await Promise.all(Object.entries(this.children).map((async t=>{let[n,r]=t;return[n,await r.import({data:e[n]})]}))))}async isEmpty(){const t=this;for(const e of Object.values(t.children))if(!await e.isEmpty())return!1;return!0}async empty(){return await this.import({data:{}})}},[[w,2,"export"],[w,2,"import"],[w,2,"empty"]],[N])),x();const O=Symbol("smart_mutex");class A{constructor(){this.mtx=Promise.resolve()}lock(){let t;const e=new Promise((e=>{t=()=>e()})),n=this.mtx;return this.mtx=e,n.then((function(){return t}))}}const S=function(t){return function(e,n){let{kind:r}=n;if("method"==r)return async function(){const n=this;n[O]||(n[O]={}),n[O][t]||(n[O][t]=new A);const r=await n[O][t].lock();let o,i;try{for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];i=await e.call(n,...s)}catch(t){o=t}if(r(),o)throw o;return i}}};var k,R,j,L,P;let C;R=S("list_mutating"),j=S("list_mutating"),L=S("list_mutating");var M,D;({e:[P],c:[C,k]}=t(class extends h{constructor(){super(...arguments),P(this)}render(){const t=this;t.originalDisplayProp=t.target.style.display,t.min_items=Math.max(0,"number"==typeof t.options.min_items?t.options.min_items:1),t.max_items=Math.max(t.min_items,"number"==typeof t.options.max_items?t.options.max_items:1/0),t.children=[];const e=t.target.children.length;if(1!=e)throw t.renderError("LIST_WRONG_NUM_CHILDREN","List components must contain exactly 1 direct children, but ".concat(e," given"));if(t.itemTpl=t.target.children[0],null!==t.itemTpl.querySelector("[id]"))throw t.renderError("LIST_CONTAINS_ID","List components are not allowed to contain elements with 'id' attribute");const n=t.getNodeOptions(t.itemTpl,{type:t.options.of});if(t.options.of&&n.type!=t.options.of)throw t.renderError("LIST_ITEM_TYPE_MISSMATCH","List item type missmatch");t.itemTpl.remove(),t.root.onRendered((async()=>{for(let e=0;e<t.min_items;e++)await t.addItem();0==t.min_items&&t.getActions("count").forEach((e=>e.target.innerText=String(t.children.length)))}))}onActionRender(t){let{action:e,origin:n}=t;switch(e){case"addItem":case"removeItem":null===(r=n.target).getAttribute("tabindex")&&r.setAttribute("tabindex","-1")}var r}async export(){const t=this,e=[],n=!t.inherittedOption("exportEmpties",!1);for(const r of t.children)n&&await r.isEmpty()||e.push(await r.export());return e}async import(t){let{data:e=[]}=t;const n=this;!e instanceof Array&&(e=[e]);for(let t=0;t<Math.min(e.length,n.max_items);t++)n.children.length<=t&&await n.addItem(),await n.children[t].import({data:e[t]});for(let t=Math.max(e.length,n.min_items);t<n.children.length;)await n.removeItem();e.length>n.max_items&&n.emit("error",{code:"LIST_IMPORT_OVERFLOW",message:"Trying to import array greater than list's max_items. Data beyond max_items ignored.",context:n,data:e,options:n.options});for(let t=e.length;t<n.children.length;t++)n.children[t].empty()}async addItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{action:n,origin:r=null,context:o=e,target:i,position:a="after",autoscroll:s}=t;if("after"!=a&&"before"!=a)throw e.renderError("LIST_WRONG_ADDITEM_POSITION","Invalid value for addItem() position property: ".concat(a));if(e.children.length>=e.max_items)return void e.emit("error",{code:"LIST_MAX_ITEMS_REACHED",message:"Cannot add items over max_items boundary",options:t});e.children.length&&!i&&(i="before"==a?e.children[0]:e.children[e.children.length-1]);const c=e.itemTpl.cloneNode(!0),l=[];let d;if(await e.emit("addItem",{action:n,origin:r,context:o,target:i,position:a,newItemTarget:c,options:t,onRendered:t=>l.push(t)}),e.children.length?e.children=(await Promise.all(e.children.map((async(t,n)=>t.target.isSameNode(i.target)?"after"==a?(t.target.after(c),d=await e.enhance(c,{type:"form"}),await d.rendered,[t,d]):(t.target.before(c),d=await e.enhance(c,{type:"form"}),await d.rendered,[d,t]):t)))).flat().map(((t,e)=>(t.name=e,t.updateId(),t))):(e.target.appendChild(c),d=await e.enhance(c,{type:"form",name:0}),await d.rendered,e.children.push(d),d.name=0,d.updateId()),"elegant"==s&&d)_(d.target,-d.offsetHeight);else{const t=d?"self"==s?d:"parent"==s?d.parent:null:null;t&&t.moveTo()}l.forEach((t=>t(d))),e.getActions("count").forEach((t=>t.target.innerText=String(e.children.length)))}async removeItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{action:n,origin:r=null,context:o=e,target:i,autoscroll:a,keep_non_empty:s,failback:c}=t;if(!i){if(s)for(const t of[...e.children].reverse())if(await t.isEmpty()){i=t;break}i||(i=e.children[e.children.length-1],s=!1)}const l=i instanceof Array?i:[i];for(const i of[...l].reverse()){if(e.children.length<=e.min_items)switch(c){case"none":break;case"clear":return void await i.empty();default:return void e.emit("error",{code:"LIST_MIN_ITEMS_REACHED",message:"Cannot remove items under min_items boundary",options:t})}if(s&&!await i.isEmpty())continue;let l=null;const d=e.children.filter((t=>{if(t.target.isSameNode(i.target)){if("elegant"==a)_(t.target,t.target.offsetHeight);else{const e="self"==a?t:"parent"==a?t.parent:null;e&&e.moveTo()}return l=t,!1}return!0})).map(((t,e)=>(t.name=e,t.updateId(),t))),u=[];await e.emit("removeItem",{action:n,origin:r,context:o,target:i,oldItem:l,oldItemTarget:l.target,options:t,onRemoved:t=>u.push(t)}),l.target.remove(),e.children=d,e.getActions("count").forEach((t=>t.target.innerText=String(e.children.length))),u.forEach((t=>t()))}}async isEmpty(){const t=this;for(const e of t.children)if(!await e.isEmpty())return!1;return!0}async empty(){return await this.import({data:[]})}count(){return this.children.length}},[[[R,w],2,"export"],[w,2,"import"],[[w,j],2,"addItem"],[[w,L],2,"removeItem"],[w,2,"empty"],[w,2,"count"]],[N])),k();class F extends I{constructor(){super(...arguments),M(this)}async render(){const t=this;if(t.isSingleton=!("INPUT"===t.target.tagName||"SELECT"===t.target.tagName||"TEXTAREA"===t.target.tagName),t.isCheckbox=!t.isSingleton&&"checkbox"==String(t.target.type).toLowerCase(),t.isSingleton){await super.render();const e=Object.keys(t.children).length;if(1!=e)throw t.renderError("NOT_A_SINGLETON","Singleton forms are only allowed to contain exactly one"+" data field but ".concat(e," found."))}t.targetField=t.isSingleton?t.children[0]:t.target}async export(){const t=this;return t.isSingleton?Object.values(await super.export())[0]:t.isCheckbox?!!t.target.checked:t.target.value}async import(t){let{data:e=""}=t;const n=this;return n.isSingleton?await super.import({data:Object.fromEntries([[Object.keys(n.children)[0],e]])}):(n.isCheckbox?n.target.checked=!!e:n.target.value=e,n.target.value)}async isEmpty(){return!(this.isCheckbox?"":await this.export()).trim().length}async empty(){await this.import({data:""})}}[M]=t(F,[[w,2,"export"],[w,2,"import"],[w,2,"empty"]],[]).e;class H extends F{constructor(){super(...arguments),D(this)}async render(){await super.render();const t=this,e=t.targetField.tagName,n=t.targetField.getAttribute("type");if("INPUT"!=e||"number"!=(n||"number").toLowerCase())throw t.renderError("NOT_A_NUMBER_FIELD",'Number inputs require an INPUT tag of type "number".');n||(t.targetField.type="number"),console.log(t)}async export(){const t=await super.export();return t.length&&!isNaN(t)?Number(t):null}async import(t){let{data:e=null}=t;console.log("Importing:",e);const n=typeof e;return await super.import({data:"number"==n?e:"string"==n&&e.length&&!isNaN(e)?Number(e):null})}async isEmpty(){return null===await this.export()}}[D]=t(H,[[w,2,"export"],[w,2,"import"]],[]).e;for(const[t,e]of Object.entries({trigger:b,form:I,list:C,input:F,number:H}))g(t,e);class U extends I{constructor(t){let{customActions:e={},...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r={...n,name:"",type:"form"};super(t,r,null);const o=this;o.setNodeOptions(o.target,r),o.actions={...o.actions,...Object.fromEntries(Object.entries(e).map((t=>{let[e,n]=t;return[e,n.bind(o)]})))},o.target.addEventListener("click",E.bind(o),!0)}}return U.createType=g,U}));
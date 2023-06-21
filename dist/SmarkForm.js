var SmarkForm=function(){"use strict";function t(t,e){return function(n){(function(t,e){if(t.v)throw new Error("attempted to call "+e+" after decoration was finished")})(e,"addInitializer"),r(n,"An initializer"),t.push(n)}}function e(t,e){if(!t(e))throw new TypeError("Attempted to access private element on non-instance")}function n(n,r,o,i,a,s,c,l,d){var p;switch(a){case 1:p="accessor";break;case 2:p="method";break;case 3:p="getter";break;case 4:p="setter";break;default:p="field"}var u,f,h={kind:p,name:c?"#"+r:r,static:s,private:c},m={v:!1};if(0!==a&&(h.addInitializer=t(i,m)),c||0!==a&&2!==a)if(2===a)u=function(t){return e(d,t),o.value};else{var g=0===a||1===a;(g||3===a)&&(u=c?function(t){return e(d,t),o.get.call(t)}:function(t){return o.get.call(t)}),(g||4===a)&&(f=c?function(t,n){e(d,t),o.set.call(t,n)}:function(t,e){o.set.call(t,e)})}else u=function(t){return t[r]},0===a&&(f=function(t,e){t[r]=e});var y=c?d.bind():function(t){return r in t};h.access=u&&f?{get:u,set:f,has:y}:u?{get:u,has:y}:{set:f,has:y};try{return n(l,h)}finally{m.v=!0}}function r(t,e){if("function"!=typeof t)throw new TypeError(e+" must be a function")}function o(t,e){var n=typeof e;if(1===t){if("object"!==n||null===e)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==e.get&&r(e.get,"accessor.get"),void 0!==e.set&&r(e.set,"accessor.set"),void 0!==e.init&&r(e.init,"accessor.init")}else if("function"!==n){throw new TypeError((0===t?"field":10===t?"class":"method")+" decorators must return a function or void 0")}}function i(t){return function(e){t(this,e)}}function a(t,e,r,a,s,c,l,d,p){var u,f,h,m,g,y,v,w=r[0];if(l?u=0===s||1===s?{get:(v=r[3],function(){return v(this)}),set:i(r[4])}:3===s?{get:r[3]}:4===s?{set:r[3]}:{value:r[3]}:0!==s&&(u=Object.getOwnPropertyDescriptor(e,a)),1===s?h={get:u.get,set:u.set}:2===s?h=u.value:3===s?h=u.get:4===s&&(h=u.set),"function"==typeof w)void 0!==(m=n(w,a,u,d,s,c,l,h,p))&&(o(s,m),0===s?f=m:1===s?(f=m.init,g=m.get||h.get,y=m.set||h.set,h={get:g,set:y}):h=m);else for(var b=w.length-1;b>=0;b--){var E;void 0!==(m=n(w[b],a,u,d,s,c,l,h,p))&&(o(s,m),0===s?E=m:1===s?(E=m.init,g=m.get||h.get,y=m.set||h.set,h={get:g,set:y}):h=m,void 0!==E&&(void 0===f?f=E:"function"==typeof f?f=[f,E]:f.push(E)))}if(0===s||1===s){if(void 0===f)f=function(t,e){return e};else if("function"!=typeof f){var _=f;f=function(t,e){for(var n=e,r=0;r<_.length;r++)n=_[r].call(t,n);return n}}else{var I=f;f=function(t,e){return I.call(t,e)}}t.push(f)}0!==s&&(1===s?(u.get=h.get,u.set=h.set):2===s?u.value=h:3===s?u.get=h:4===s&&(u.set=h),l?1===s?(t.push((function(t,e){return h.get.call(t,e)})),t.push((function(t,e){return h.set.call(t,e)}))):2===s?t.push(h):t.push((function(t,e){return h.call(t,e)})):Object.defineProperty(e,a,u))}function s(t,e,n){for(var r,o,i,s=[],l=new Map,p=new Map,u=0;u<e.length;u++){var f=e[u];if(Array.isArray(f)){var h,m,g=f[1],y=f[2],v=f.length>3,w=g>=5,b=n;if(w?(h=t,0!=(g-=5)&&(m=o=o||[]),v&&!i&&(i=function(e){return d(e)===t}),b=i):(h=t.prototype,0!==g&&(m=r=r||[])),0!==g&&!v){var E=w?p:l,_=E.get(y)||0;if(!0===_||3===_&&4!==g||4===_&&3!==g)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+y);!_&&g>2?E.set(y,g):E.set(y,!0)}a(s,h,f,y,g,w,v,m,b)}}return c(s,r),c(s,o),s}function c(t,e){e&&t.push((function(t){for(var n=0;n<e.length;n++)e[n].call(t);return t}))}function l(e,n,r,i){return{e:s(e,n,i),get c(){return function(e,n){if(n.length>0){for(var r=[],i=e,a=e.name,s=n.length-1;s>=0;s--){var c={v:!1};try{var l=n[s](i,{kind:"class",name:a,addInitializer:t(r,c)})}finally{c.v=!0}void 0!==l&&(o(10,l),i=l)}return[i,function(){for(var t=0;t<r.length;t++)r[t].call(i)}]}}(e,r)}}}function d(t){if(Object(t)!==t)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==t?typeof t:"null"));return t}const p=Symbol("Events"),u=Symbol("allEvents"),f=/^on(?:Before|After)Action_/,h=/^onLocal_/,m=/^onAll_/;function g(t,e,n){return t.has(e)||t.set(e,[]),t.get(e).push(n.bind(this)),this}var y;const v={},w=Symbol("smart_component"),b=/^[a-z0-9_]+$/i,E=/[\*\?]/,_=class extends Error{constructor(t,e,n){super("RenderError(".concat(n,"): ").concat(e)),this.code=t,this.path=n,this.stack=this.stack.split("\n").slice(2).join("\n")}};let I;function x(t,e){if(void 0!==v[t])throw new Error("Duplicate component type definition: ".concat(t));if(!(e.prototype instanceof I))throw new Error("Bad component type implementation for: ".concat(t));v[t]=e}[I,y]=l(class{constructor(t){let{property_name:e="smark",...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;const o=this;if(o.validName=function(){let t=0;return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];for(let t of n)if("string"==typeof t&&(t=t.trim(),t.length))return t;return"UNNAMED"+ ++t}}(),o.actions={},o.property_name=e,o.selector="[data-".concat(o.property_name,"]"),o.types=v,o.target=t,o.options=n,o.setNodeOptions(o.target,o.options),o.parent=r,!o.parent instanceof I)throw o.renderError("INVALID_PARENT","Smark Components must have valid Smark Component parent.");o.root=null===o.parent?o:o.parent.root,o.parents={},o.parents[Symbol.iterator]=function*(){let t=o;for(;t;)yield t,t=t.parent};const i=o.inherittedOption("autoId",!1);let a;o.genId=!1!==i&&(!0===i?t=>t.replace(/\//g,"_"):"string"==typeof i?t=>i+t.replace(/\//g,"_"):"function"==typeof i&&i),o.onRenderedTasks=[],o.rendered=new Promise((t=>a=t)),o.children={},o.target[w]=o,(async()=>{await o.render();for(const t of o.onRenderedTasks)await t();o.onRenderedTasks=null,a(!0)})()}onRendered(t){const e=this;e.onRenderedTasks?e.onRenderedTasks.push(t):t()}getNodeOptions(t,e){const n=(t.dataset[this.property_name]||"").trim()||null,r={...e,...(()=>{try{const t=JSON.parse(n);if("object"!=typeof t)throw new Error("NO_OBJECT");return t}catch(t){return n.match(b)?{type:n}:{}}})()};return r.action||r.type||(r.type=function(t,e){switch(t.tagName.toLowerCase()){case"ul":case"ol":case"table":case"thead":case"tbody":case"tfoot":return"list";case"input":case"textarea":case"select":return"input";default:return"form"}}(t)),this.setNodeOptions(t,r),r}setNodeOptions(t,e){t.dataset[this.property_name]=JSON.stringify(e)}async enhance(t,e){const n=this;let r=n.getNodeOptions(t,e);if(r.action){if(r.type||(r.type="action"),"action"!=r.type)throw n.renderError("WRONG_ACTION_TYPE",'Actions must be of type "action" but "'.concat(r.type,'" given.'));delete r.name}else if("string"!=typeof r.type)throw n.renderError("NO_TYPE_PROVIDED","Invalid SmarkForm item: type is mandatory for non action elements.");const o=n.types[r.type];if(!o)throw n.renderError("UNKNOWN_TYPE","Unimplemented SmarkForm component controller: ".concat(r.type));return new o(t,r,n)}getComponent(t){return t[w]||t.parentElement.closest(this.selector)[w]||null}getPath(){return[...this.parents].map((t=>t.name)).reverse().join("/")||"/"}find(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this;if("/"==t[0])for(;e.parent;)e=e.parent;const n=t.split("/").filter((t=>t)),r=n.findIndex((t=>t.match(E)));if(r>=0){const t=(o=n[r],new RegExp("^"+o.replace(/\*+/g,".*").replace(/\?/g,".")+"$")),i=n.slice(0,r).join("/"),a=n.slice(r+1).join("/"),s=e.find(i);return Object.entries(s.children).filter((e=>{let[n,r]=e;return r&&n.match(t)})).map((t=>{let[,e]=t;return e.find(a)})).flat(1/0)}var o;return n.reduce(((t,e)=>void 0===t?null:".."==e?t.parent:t.children[e]),e)}inherittedOption(t,e){const n=this;for(const e of n.parents)if(void 0!==e.options[t])return e.options[t];return e}moveTo(){const t=this;t.target.id||(t.target.id=t.getPath()),document.location.hash=t.target.id,window.history.pushState({},void 0,window.location.pathname)}getActions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const e=this,n=[];for(const r of[...e.root.target.querySelectorAll(e.selector)].map((t=>t[w])).filter((t=>t))){const o=r.getActionArgs();o&&(Object.is(o.context,e)&&(!t||1+[t].flat().findIndex((t=>t==o.action)))&&n.push(r))}return n}updateId(){const t=this;if(!1===t.genId)return;const e=t.genId(t.getPath());if(t.target.id!=e){t.target.id=e;for(const e of Object.values(t.children))e.updateId()}return t.target.id}getActionArgs(){}renderError(t,e){return new _(t,e,this.getPath())}},[],[function(t,e){let{kind:n}=e;if("class"==n)return class extends t{constructor(t,e){const n={},r=[];for(const[t,o]of Object.entries(e))t.match(f)?r.push([t.substring(2),o,"onLocal"]):t.match(h)?r.push([t.substring(8),o,"onLocal"]):t.match(m)?r.push([t.substring(6),o,"onAll"]):n[t]=o;for(var o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];super(t,n,...i);const s=this,c=Object.is(s,s.root);s[p]=new Map,c&&(s.root[u]=new Map),s.onLocal=g.bind(s,s[p]),s.onAll=g.bind(s.root,s.root[u]),s.on=s.onLocal;for(const[t,e,n]of r)s[n](t,e)}async emit(t,e){const n=[...this[p].get(t)||[],...this.root[u].get(t)||[]];let r=!1;if(n.length){let t=!1;e.preventDefault=()=>r=!0,e.stopPropagation=()=>t=!0;for(const r of n){if(t)break;await r(e)}}return!r}}}]).c,y();const O=Symbol("beforeEventName"),T=Symbol("afterEventName"),A=function(t,e){let{kind:n,name:r,addInitializer:o}=e;"method"==n&&o((function(){this.actions[r]=t.bind(this),this.actions[r][O]="BeforeAction_".concat(r),this.actions[r][T]="AfterAction_".concat(r)}))};class N extends I{render(){}disable(){this.target.disabled=!0}enable(){this.target.disabled=!1}getActionArgs(){const t=this,e=[...t.parents],{action:n,for:r,to:o}=t.options;if(!n)return;let[i,a]=n.split(":").reverse();const s=r?t.parent.find(r):e.find((t=>(!a||t.options.type==a)&&"function"==typeof t.actions[i])),c=o?s.find(o):r?null:e.find((t=>{var e;return null===(e=t.parent)||void 0===e?void 0:e.target.isSameNode(null==s?void 0:s.target)}));return{action:i,origin:t,context:s,target:c,...t.options}}}async function S(t){const e=this,n=e.getComponent(t.target).getActionArgs();if(!n)return;const{context:r,action:o}=n,i=null==r?void 0:r.actions[o];if("function"!=typeof i)throw e.renderError("UNKNOWN_ACTION","Unknown action ".concat(o)+(r?" for ".concat(r.options.type):""));if(await e.emit(i[O],n)){const t=await i(n);e.emit(i[T],{...n,data:t})}}function k(t,e){let n=t.parentNode;const r=e>=0?1:-1;for(;n;){if(n.scrollHeight>n.clientHeight*r){var o=n.scrollHeight-n.clientHeight*r;if(e<=o*r)return void(n.scrollTop+=e);n.scrollTop=o,e-=o}n=n.parentNode}}const j=function(t,e){let{kind:n}=e;var r,o;if("class"==n)return o=class extends t{constructor(){super(...arguments),r(this)}render(){const t=super.render(...arguments),e=this;return e.root.onRendered((()=>{e.fold({operation:e.options.folded?"fold":"unfold"})})),t}fold(){let{operation:t="toggle"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this,n="none"==e.target.style.display,r="fold"==t||"unfold"!=t&&!n;e.target.style.display=r?"none":e.originalDisplayProp,e.getActions("fold").forEach((t=>{const{foldedClass:e,unfoldedClass:n}=t.options;e&&t.target.classList[r?"add":"remove"](e),n&&t.target.classList[r?"remove":"add"](n)})),e.getActions(["addItem","removeItem"]).map(r?t=>t.disable():t=>t.enable())}},[r]=l(o,[[A,2,"fold"]],[]).e,o};var P,L;let R;({e:[L],c:[R,P]}=l(class extends I{constructor(){super(...arguments),L(this)}async render(){const t=this;t.originalDisplayProp=t.target.style.display;for(const e of function(t,e){const n=null===t.parentNode?t=>null===t:e=>null===e||e.isSameNode(t);return[...t.querySelectorAll(e)].filter((t=>n(t.parentNode.closest(e))))}(t.target,t.selector)){const n=await t.enhance(e);"action"!=n.options.type&&(n.name=t.validName(n.options.name,e.getAttribute("name")),t.children[n.name]=n,n.updateId())}}async export(){return Object.fromEntries(await Promise.all(Object.entries(this.children).map((async t=>{let[e,n]=t;return[e,await n.export()]}))))}async import(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=Object(t).constructor;if(e!=={}.constructor)throw this.renderError("FORM_NOT_PLAIN_OBJECT","Expected plain object for form import, ".concat(e.name," given."));return Object.fromEntries(await Promise.all(Object.entries(this.children).map((async e=>{let[n,r]=e;return[n,await r.import(t[n])]}))))}async isEmpty(){const t=this;for(const e of Object.values(t.children))if(!await e.isEmpty())return!1;return!0}async empty(){return await this.import({})}},[[A,2,"export"],[A,2,"import"],[A,2,"empty"]],[j])),P();const M=Symbol("smart_mutex");class C{constructor(){this.mtx=Promise.resolve()}lock(){let t;const e=new Promise((e=>{t=()=>e()})),n=this.mtx;return this.mtx=e,n.then((function(){return t}))}}const D=function(t){return function(e,n){let{kind:r}=n;if("method"==r)return async function(){const n=this;n[M]||(n[M]={}),n[M][t]||(n[M][t]=new C);const r=await n[M][t].lock();let o,i;try{for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];i=await e.call(n,...s)}catch(t){o=t}if(r(),o)throw o;return i}}};var H,z,U,W,B;let F;z=D("list_mutating"),U=D("list_mutating"),W=D("list_mutating");var G,J;({e:[B],c:[F,H]}=l(class extends I{constructor(){super(...arguments),B(this)}render(){const t=this;t.originalDisplayProp=t.target.style.display,t.min_items=Math.max(0,"number"==typeof t.options.min_items?t.options.min_items:1),t.max_items=Math.max(t.min_items,"number"==typeof t.options.max_items?t.options.max_items:1/0),t.children=[];const e=t.target.children.length;if(1!=e)throw t.renderError("LIST_WRONG_NUM_CHILDREN","List components must contain exactly 1 direct children, but ".concat(e," given"));if(t.itemTpl=t.target.children[0],null!==t.itemTpl.querySelector("[id]"))throw t.renderError("LIST_CONTAINS_ID","List components are not allowed to contain elements with 'id' attribute");const n=t.getNodeOptions(t.itemTpl,{type:t.options.of});if(t.options.of&&n.type!=t.options.of)throw t.renderError("LIST_ITEM_TYPE_MISSMATCH","List item type missmatch");t.itemTpl.remove(),t.root.onRendered((async()=>{for(let e=0;e<t.min_items;e++)await t.addItem();0==t.min_items&&t.getActions("count").forEach((e=>e.target.innerText=String(t.children.length)))}))}async export(){const t=this,e=[],n=!t.inherittedOption("exportEmpties",!1);for(const r of t.children)n&&await r.isEmpty()||e.push(await r.export());return e}async import(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const e=this;!t instanceof Array&&(t=[t]);for(let n=0;n<Math.min(t.length,e.max_items);n++)e.children.length<=n&&await e.addItem(),await e.children[n].import(t[n]);for(let n=Math.max(t.length,e.min_items);n<e.children.length;)await e.removeItem();t.length>e.max_items&&e.emit("error",{code:"LIST_IMPORT_OVERFLOW",message:"Trying to import array greater than list's max_items. Data beyond max_items ignored.",context:e,data:t,options:e.options});for(let n=t.length;n<e.children.length;n++)e.children[n].empty()}async addItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{action:n,origin:r=null,context:o=e,target:i,position:a="after",autoscroll:s}=t;if("after"!=a&&"before"!=a)throw e.renderError("LIST_WRONG_ADDITEM_POSITION","Invalid value for addItem() position property: ".concat(a));if(e.children.length>=e.max_items)return void e.emit("error",{code:"LIST_MAX_ITEMS_REACHED",message:"Cannot add items over max_items boundary",options:t});e.children.length&&!i&&(i="before"==a?e.children[0]:e.children[e.children.length-1]);const c=e.itemTpl.cloneNode(!0),l=[];let d;if(await e.emit("addItem",{action:n,origin:r,context:o,target:i,position:a,newItemTarget:c,options:t,onRendered:t=>l.push(t)}),e.children.length?e.children=(await Promise.all(e.children.map((async(t,n)=>t.target.isSameNode(i.target)?"after"==a?(t.target.after(c),d=await e.enhance(c,{type:"form"}),await d.rendered,[t,d]):(t.target.before(c),d=await e.enhance(c,{type:"form"}),await d.rendered,[d,t]):t)))).flat().map(((t,e)=>(t.name=e,t.updateId(),t))):(e.target.appendChild(c),d=await e.enhance(c,{type:"form",name:0}),await d.rendered,e.children.push(d),d.name=0,d.updateId()),"elegant"==s&&d)k(d.target,-d.offsetHeight);else{const t=d?"self"==s?d:"parent"==s?d.parent:null:null;t&&t.moveTo()}l.forEach((t=>t(d))),e.getActions("count").forEach((t=>t.target.innerText=String(e.children.length)))}async removeItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{action:n,origin:r=null,context:o=e,target:i,autoscroll:a,keep_non_empty:s,failback:c}=t;if(!i){if(s)for(const t of[...e.children].reverse())if(await t.isEmpty()){i=t;break}i||(i=e.children[e.children.length-1],s=!1)}const l=i instanceof Array?i:[i];for(const i of[...l].reverse()){if(e.children.length<=e.min_items)switch(c){case"none":break;case"clear":return void await i.empty();default:return void e.emit("error",{code:"LIST_MIN_ITEMS_REACHED",message:"Cannot remove items under min_items boundary",options:t})}if(s&&!await i.isEmpty())continue;let l=null;const d=e.children.filter((t=>{if(t.target.isSameNode(i.target)){if("elegant"==a)k(t.target,t.target.offsetHeight);else{const e="self"==a?t:"parent"==a?t.parent:null;e&&e.moveTo()}return l=t,!1}return!0})).map(((t,e)=>(t.name=e,t.updateId(),t))),p=[];await e.emit("removeItem",{action:n,origin:r,context:o,target:i,oldItem:l,oldItemTarget:l.target,options:t,onRemoved:t=>p.push(t)}),l.target.remove(),e.children=d,e.getActions("count").forEach((t=>t.target.innerText=String(e.children.length))),p.forEach((t=>t()))}}async isEmpty(){const t=this;for(const e of t.children)if(!await e.isEmpty())return!1;return!0}async empty(){return await this.import([])}count(){return this.children.length}},[[[z,A],2,"export"],[A,2,"import"],[[A,U],2,"addItem"],[[A,W],2,"removeItem"],[A,2,"empty"],[A,2,"count"]],[j])),H();class Y extends R{constructor(){super(...arguments),G(this)}async render(){await super.render();const t=Object.keys(this.children).length;if(1!=t)throw this.renderError("NOT_A_SINGLETON","Singleton forms are only allowed to contain exactly one"+" data field but ".concat(t," found."))}async export(){return Object.values(await super.export())[0]}async import(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return await super.import(Object.fromEntries([[Object.keys(this.children)[0],t]]))}async empty(){await this.import("")}}[G]=l(Y,[[A,2,"export"],[A,2,"import"],[A,2,"empty"]],[]).e;class q extends I{constructor(){super(...arguments),J(this)}render(){}async export(){return this.target.value}async import(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.target.value=t,this.target.value}async isEmpty(){return!(await this.export()).trim().length}async empty(){await this.import("")}}[J]=l(q,[[A,2,"export"],[A,2,"import"],[A,2,"empty"]],[]).e;for(const[t,e]of Object.entries({action:N,form:R,list:F,singleton:Y,input:q}))x(t,e);class V extends R{constructor(t){let{customActions:e={},...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r={...n,name:"",type:"form"};super(t,r,null);const o=this;o.target.dataset[o.property_name]=r,o.actions={...o.actions,...Object.fromEntries(Object.entries(e).map((t=>{let[e,n]=t;return[e,n.bind(o)]})))},o.target.addEventListener("click",S.bind(o),!0)}}return V.createType=x,V}();

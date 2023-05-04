function t(t,e){return function(n){(function(t,e){if(t.v)throw new Error("attempted to call "+e+" after decoration was finished")})(e,"addInitializer"),r(n,"An initializer"),t.push(n)}}function e(t,e){if(!t(e))throw new TypeError("Attempted to access private element on non-instance")}function n(n,r,o,i,s,a,c,l,d){var p;switch(s){case 1:p="accessor";break;case 2:p="method";break;case 3:p="getter";break;case 4:p="setter";break;default:p="field"}var u,h,f={kind:p,name:c?"#"+r:r,static:a,private:c},m={v:!1};if(0!==s&&(f.addInitializer=t(i,m)),c||0!==s&&2!==s)if(2===s)u=function(t){return e(d,t),o.value};else{var g=0===s||1===s;(g||3===s)&&(u=c?function(t){return e(d,t),o.get.call(t)}:function(t){return o.get.call(t)}),(g||4===s)&&(h=c?function(t,n){e(d,t),o.set.call(t,n)}:function(t,e){o.set.call(t,e)})}else u=function(t){return t[r]},0===s&&(h=function(t,e){t[r]=e});var y=c?d.bind():function(t){return r in t};f.access=u&&h?{get:u,set:h,has:y}:u?{get:u,has:y}:{set:h,has:y};try{return n(l,f)}finally{m.v=!0}}function r(t,e){if("function"!=typeof t)throw new TypeError(e+" must be a function")}function o(t,e){var n=typeof e;if(1===t){if("object"!==n||null===e)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==e.get&&r(e.get,"accessor.get"),void 0!==e.set&&r(e.set,"accessor.set"),void 0!==e.init&&r(e.init,"accessor.init")}else if("function"!==n){throw new TypeError((0===t?"field":10===t?"class":"method")+" decorators must return a function or void 0")}}function i(t){return function(e){t(this,e)}}function s(t,e,r,s,a,c,l,d,p){var u,h,f,m,g,y,v,E=r[0];if(l?u=0===a||1===a?{get:(v=r[3],function(){return v(this)}),set:i(r[4])}:3===a?{get:r[3]}:4===a?{set:r[3]}:{value:r[3]}:0!==a&&(u=Object.getOwnPropertyDescriptor(e,s)),1===a?f={get:u.get,set:u.set}:2===a?f=u.value:3===a?f=u.get:4===a&&(f=u.set),"function"==typeof E)void 0!==(m=n(E,s,u,d,a,c,l,f,p))&&(o(a,m),0===a?h=m:1===a?(h=m.init,g=m.get||f.get,y=m.set||f.set,f={get:g,set:y}):f=m);else for(var w=E.length-1;w>=0;w--){var b;void 0!==(m=n(E[w],s,u,d,a,c,l,f,p))&&(o(a,m),0===a?b=m:1===a?(b=m.init,g=m.get||f.get,y=m.set||f.set,f={get:g,set:y}):f=m,void 0!==b&&(void 0===h?h=b:"function"==typeof h?h=[h,b]:h.push(b)))}if(0===a||1===a){if(void 0===h)h=function(t,e){return e};else if("function"!=typeof h){var _=h;h=function(t,e){for(var n=e,r=0;r<_.length;r++)n=_[r].call(t,n);return n}}else{var x=h;h=function(t,e){return x.call(t,e)}}t.push(h)}0!==a&&(1===a?(u.get=f.get,u.set=f.set):2===a?u.value=f:3===a?u.get=f:4===a&&(u.set=f),l?1===a?(t.push((function(t,e){return f.get.call(t,e)})),t.push((function(t,e){return f.set.call(t,e)}))):2===a?t.push(f):t.push((function(t,e){return f.call(t,e)})):Object.defineProperty(e,s,u))}function a(t,e,n){for(var r,o,i,a=[],l=new Map,p=new Map,u=0;u<e.length;u++){var h=e[u];if(Array.isArray(h)){var f,m,g=h[1],y=h[2],v=h.length>3,E=g>=5,w=n;if(E?(f=t,0!=(g-=5)&&(m=o=o||[]),v&&!i&&(i=function(e){return d(e)===t}),w=i):(f=t.prototype,0!==g&&(m=r=r||[])),0!==g&&!v){var b=E?p:l,_=b.get(y)||0;if(!0===_||3===_&&4!==g||4===_&&3!==g)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+y);!_&&g>2?b.set(y,g):b.set(y,!0)}s(a,f,h,y,g,E,v,m,w)}}return c(a,r),c(a,o),a}function c(t,e){e&&t.push((function(t){for(var n=0;n<e.length;n++)e[n].call(t);return t}))}function l(e,n,r,i){return{e:a(e,n,i),get c(){return function(e,n){if(n.length>0){for(var r=[],i=e,s=e.name,a=n.length-1;a>=0;a--){var c={v:!1};try{var l=n[a](i,{kind:"class",name:s,addInitializer:t(r,c)})}finally{c.v=!0}void 0!==l&&(o(10,l),i=l)}return[i,function(){for(var t=0;t<r.length;t++)r[t].call(i)}]}}(e,r)}}}function d(t){if(Object(t)!==t)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==t?typeof t:"null"));return t}const p=Symbol("Events"),u=Symbol("allEvents");function h(t,e,n){t.has(e)||t.set(e,[]),t.get(e).push(n.bind(this))}var f;const m={},g=Symbol("smart_component"),y=/^[a-z0-9_]+$/i,v=/[\*\?]/,E=class extends Error{constructor(t,e,n){super("RenderError(".concat(n,"): ").concat(e)),this.code=t,this.path=n,this.stack=this.stack.split("\n").slice(2).join("\n")}},w=class extends Error{constructor(t,e,n){super("RuleError(".concat(n,"): ").concat(e)),this.code=t,this.path=n,this.stack=this.stack.split("\n").slice(2).join("\n")}};let b;function _(t,e){if(void 0!==m[t])throw new Error("Duplicate component type definition: ".concat(t));if(!(e.prototype instanceof b))throw new Error("Bad component type implementation for: ".concat(t));m[t]=e}[b,f]=l(class{constructor(t){let{property_name:e="smart",...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;const o=this;if(o.validName=function(){let t=0;return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];for(let t of n)if("string"==typeof t&&(t=t.trim(),t.length))return t;return"UNNAMED"+ ++t}}(),o.actions={},o.property_name=e,o.selector="[data-".concat(o.property_name,"]"),o.typeName=o.constructor.name,o.types=m,o.target=t,o.options=n,o.setNodeOptions(o.target,o.options),o.parent=r,!o.parent instanceof b)throw o.renderError("INVALID_PARENT","Smart Components must have valid Smart Component parent.");o.root=null===o.parent?o:o.parent.root,o.parents={},o.parents[Symbol.iterator]=function*(){let t=o;for(;t;)yield t,t=t.parent},o.onRenderedTasks=[],o.children={},o.target[g]=o,setTimeout((()=>{o.render(),o.onRenderedTasks.forEach((t=>t())),o.onRenderedTasks=null}),0)}onRendered(t){const e=this;e.onRenderedTasks?e.onRenderedTasks.push(t):t()}getNodeOptions(t,e){const n=(t.dataset[this.property_name]||"").trim()||null,r={...e,...(()=>{try{const t=JSON.parse(n);if("object"!=typeof t)throw new Error("NO_OBJECT");return t}catch(t){return n.match(y)?{type:n}:{}}})()};return r.action||r.type||(r.type="input"),this.setNodeOptions(t,r),r}setNodeOptions(t,e){t.dataset[this.property_name]=JSON.stringify(e)}enhance(t,e){const n=this;let r=n.getNodeOptions(t,e);if(r.action){if(r.type||(r.type="action"),"action"!=r.type)throw n.renderError("WRONG_ACTION_TYPE",'Actions must be of type "action" but "'.concat(r.type,'" given.'));delete r.name}else if("string"!=typeof r.type)throw n.renderError("NO_TYPE_PROVIDED","Invalid SmartFom item: type is mandatory for non action elements.");const o=n.types[r.type];if(!o)throw n.renderError("UNKNOWN_TYPE","Unimplemented SmartForm component controller: ".concat(r.type));return new o(t,r,n)}getComponent(t){return t[g]||t.parentElement.closest(this.selector)[g]||null}getPath(){return[...this.parents].map((t=>t.name)).reverse().join("/")||"/"}find(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this;if("/"==t[0])for(;e.parent;)e=e.parent;const n=t.split("/").filter((t=>t)),r=n.findIndex((t=>t.match(v)));if(r>=0){const t=(o=n[r],new RegExp("^"+o.replace(/\*+/g,".*").replace(/\?/g,".")+"$")),i=n.slice(0,r).join("/"),s=n.slice(r+1).join("/"),a=e.find(i);return Object.entries(a.children).filter((e=>{let[n,r]=e;return r&&n.match(t)})).map((t=>{let[,e]=t;return e.find(s)})).flat(1/0)}var o;return n.reduce(((t,e)=>void 0===t?null:".."==e?t.parent:t.children[e]),e)}inherittedOption(t,e){const n=this;for(const e of n.parents)if(void 0!==e.options[t])return e.options[t];return e}moveTo(){const t=this;t.target.id||(t.target.id=t.getPath()),document.location.hash=t.target.id,window.history.pushState({},void 0,window.location.pathname)}getActions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const e=this,n=[];for(const r of[...e.root.target.querySelectorAll(e.selector)].map((t=>t[g])).filter((t=>t))){const o=r.getActionArgs();o&&(Object.is(o.context,e)&&(!t||1+[t].flat().findIndex((t=>t==o.action)))&&n.push(r))}return n}getActionArgs(){}renderError(t,e){return new E(t,e,this.getPath())}ruleError(t,e){return new w(t,e,this.getPath())}},[],[function(t,e){let{kind:n}=e;if("class"==n)return class extends t{constructor(){super(...arguments);const t=this,e=Object.is(t,t.root);t[p]=new Map,e&&(t.root[u]=new Map),t.onLocal=h.bind(t,t[p]),t.onAll=h.bind(t.root,t.root[u]),t.on=e?t.onAll:t.onLocal}async emit(t,e){const n=[...this[p].get(t)||[],...this.root[u].get(t)||[]];if(n.length){function r(t){throw new Error("Default prevented".concat(t?": "+t:"","."))}for(const o of n)await o({...e,preventDefault:r})}}}}]).c,f();const x=function(t,e){let{kind:n,name:r,addInitializer:o}=e;"method"==n&&o((function(){this.actions[r]=t.bind(this)}))};class T extends b{render(){}disable(){this.target.disabled=!0}enable(){this.target.disabled=!1}getActionArgs(){const t=this,e=[...t.parents],{action:n,for:r,to:o}=t.options;if(!n)return;let[i,s]=n.split(":").reverse();const a=r?t.parent.find(r):e.find((t=>(!s||t.typeName==s)&&"function"==typeof t.actions[i])),c=o?a.find(o):r?null:e.find((t=>{var e;return null===(e=t.parent)||void 0===e?void 0:e.target.isSameNode(null==a?void 0:a.target)}));return{action:i,origin:t,context:a,target:c,...t.options}}}function N(t){const e=this.getComponent(t.target).getActionArgs();if(!e)return;const{context:n,action:r}=e,o=null==n?void 0:n.actions[r];if("function"!=typeof o)throw this.renderError("UNKNOWN_ACTION","Unknown action ".concat(r)+(n?" for ".concat(n.options.type):""));o(e)}function O(t,e){let n=t.parentNode;const r=e>=0?1:-1;for(;n;){if(n.scrollHeight>n.clientHeight*r){var o=n.scrollHeight-n.clientHeight*r;if(e<=o*r)return void(n.scrollTop+=e);n.scrollTop=o,e-=o}n=n.parentNode}}const I=function(t,e){let{kind:n}=e;var r,o;if("class"==n)return o=class extends t{constructor(){super(...arguments),r(this)}render(){const t=super.render(...arguments),e=this;return e.root.onRendered((()=>{e.fold({operation:e.options.folded?"fold":"unfold"})})),t}fold(){let{operation:t="toggle"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this,n="none"==e.target.style.display,r="fold"==t||"unfold"!=t&&!n;e.target.style.display=r?"none":e.originalDisplayProp,e.getActions("fold").forEach((t=>{const{foldedClass:e,unfoldedClass:n}=t.options;e&&t.target.classList[r?"add":"remove"](e),n&&t.target.classList[r?"remove":"add"](n)})),e.getActions(["addItem","removeItem"]).map(r?t=>t.disable():t=>t.enable())}},[r]=l(o,[[x,2,"fold"]],[]).e,o};var A,S;let j;({e:[S],c:[j,A]}=l(class extends b{constructor(){super(...arguments),S(this)}render(){const t=this;t.originalDisplayProp=t.target.style.display;for(const e of function(t,e){const n=null===t.parentNode?t=>null===t:e=>null===e||e.isSameNode(t);return[...t.querySelectorAll(e)].filter((t=>n(t.parentNode.closest(e))))}(t.target,t.selector)){const n=t.enhance(e);"action"!=n.options.type&&(n.name=t.validName(n.options.name,e.getAttribute("name")),t.children[n.name]=n)}}export(){return Object.fromEntries(Object.entries(this.children).map((t=>{let[e,n]=t;return[e,n.export()]})))}import(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=Object(t).constructor;if(e!=={}.constructor)throw this.renderError("FORM_NOT_PLAIN_OBJECT","Expected plain object for form import, ".concat(e.name," given."));return Object.fromEntries(Object.entries(this.children).map((e=>{let[n,r]=e;return[n,r.import(t[n])]})))}isEmpty(){return 0>Object.values(this.children).findIndex((t=>!t.isEmpty()))}empty(){return this.import({})}},[[x,2,"empty"]],[I])),A();const k=Symbol("smart_mutex");class R{constructor(){this.mtx=Promise.resolve()}lock(){let t;const e=new Promise((e=>{t=()=>e()})),n=this.mtx;return this.mtx=e,n.then((function(){return t}))}}const M=function(t){return function(e,n){let{kind:r}=n;if("method"==r)return async function(){const n=this;n[k]||(n[k]={}),n[k][t]||(n[k][t]=new R);const r=await n[k][t].lock();let o,i;try{for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];i=await e.call(n,...a)}catch(t){o=t}if(r(),o)throw o;return i}}};var P,C,L,D;let H;C=M("add_or_remove_item"),L=M("add_or_remove_item");var z,U;({e:[D],c:[H,P]}=l(class extends b{constructor(){super(...arguments),D(this)}render(){const t=this;t.originalDisplayProp=t.target.style.display,t.min_items=Math.max(0,"number"==typeof t.options.min_items?t.options.min_items:1),t.max_items=Math.max(t.min_items,"number"==typeof t.options.max_items?t.options.max_items:1/0),t.children=[];const e=t.target.children.length;if(1!=e)throw t.renderError("LIST_WRONG_NUM_CHILDREN","List components must contain exactly 1 direct children, but ".concat(e," given"));if(t.itemTpl=t.target.children[0],null!==t.itemTpl.querySelector("[id]"))throw t.renderError("LIST_CONTAINS_ID","List components are not allowed to contain elements with 'id' attribute");const n=t.getNodeOptions(t.itemTpl,{type:t.options.of||"form"});if(t.options.of&&n.type!=t.options.of)throw t.renderError("LIST_ITEM_TYPE_MISSMATCH","List item type missmatch");t.itemTpl.remove(),t.root.onRendered((()=>{for(let e=0;e<t.min_items;e++)t.addItem();0==t.min_items&&t.getActions("count").forEach((e=>e.target.innerText=String(t.children.length)))}))}export(){const t=this;return(t.inherittedOption("exportEmpties",!1)?t.children:t.children.filter((t=>!t.isEmpty()))).map((t=>t.export()))}async import(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const e=this;!t instanceof Array&&(t=[t]);for(let n=0;n<Math.min(t.length,e.max_items);n++)e.children.length<=n&&await e.addItem(),e.children[n].import(t[n]);for(let n=Math.max(t.length,e.min_items);n<e.children.length;)await e.removeItem();for(let t=e.children.length;t<e.min_items;t++)e.chldren[t].empty();return t.length>e.max_items&&console.error("Max of ".concat(e.max_items," items exceeded by ").concat(t.length-e.max_items," while data loadig")),e.export()}async addItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{action:n,origin:r=null,context:o=e,target:i,position:s="after",autoscroll:a}=t;if("after"!=s&&"before"!=s)throw e.renderError("LIST_WRONG_ADDITEM_POSITION","Invalid value for addItem() position property: ".concat(s));if(e.children.length>=e.max_items)throw e.ruleError("LIST_MAX_ITEMS_REACHED","Cannot add items over max_items boundary");e.children.length&&!i&&(i="before"==s?e.children[0]:e.children[e.children.length-1]);const c=e.itemTpl.cloneNode(!0),l=[];let d;if(await e.emit("addItem",{action:n,origin:r,context:o,target:i,position:s,newItem:c,options:t,onRendered:t=>l.push(t)}),e.children.length?e.children=e.children.map(((t,n)=>t.target.isSameNode(i.target)?"after"==s?(t.target.after(c),d=e.enhance(c,{type:"form"}),[t,d]):(t.target.before(c),d=e.enhance(c,{type:"form"}),[d,t]):t)).flat().map(((t,e)=>(t.name=e,t))):(e.target.appendChild(c),d=e.enhance(c,{type:"form",name:0}),e.children.push(d)),e.getActions("count").forEach((t=>t.target.innerText=String(e.children.length))),"elegant"==a&&d)O(d.target,-d.offsetHeight);else{const t=d?"self"==a?d:"parent"==a?d.parent:null:null;t&&t.moveTo()}l.forEach((t=>t(d)))}async removeItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this;let{action:n,origin:r=null,context:o=e,target:i,position:s="after",autoscroll:a,keep_non_empty:c,failback:l}=t;i||(i=[...e.children].reverse().find(((t,e)=>!c||t.isEmpty())),i||(i=e.children[e.children.length-1],c=!1));const d=i instanceof Array?i:[i];for(const i of[...d].reverse()){if(e.children.length<=e.min_items)switch(l){case"none":break;case"clear":return void i.empty();default:throw e.ruleError("LIST_MIN_ITEMS_REACHED","Cannot remove items under min_items boundary")}if(c&&!i.isEmpty())continue;let d=null;const p=e.children.filter((t=>{if(t.target.isSameNode(i.target)){if("elegant"==a)O(t.target,t.target.offsetHeight);else{const e="self"==a?t:"parent"==a?t.parent:null;e&&e.moveTo()}return d=t,!1}return!0})).map(((t,e)=>(t.name=e,t))),u=[];await e.emit("removeItem",{action:n,origin:r,context:o,target:i,position:s,oldChild:d,oldItem:d.target,options:t,onRemoved:t=>u.push(t)}),d.target.remove(),e.children=p,e.getActions("count").forEach((t=>t.target.innerText=String(e.children.length))),u.forEach((t=>t()))}}isEmpty(){return 0>this.children.findIndex((t=>!t.isEmpty()))}empty(){return this.import([])}count(){}},[[[x,C],2,"addItem"],[[x,L],2,"removeItem"],[x,2,"empty"],[x,2,"count"]],[I])),P();class W extends j{constructor(){super(...arguments),z(this)}render(){super.render();const t=Object.keys(this.children).length;if(1!=t)throw this.renderError("NOT_A_SINGLETON","Singleton forms are only allowed to contain exactly one"+" data field but ".concat(t," found."))}export(){return Object.values(super.export())[0]}import(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return super.import(Object.fromEntries([[Object.keys(this.children)[0],t]]))}empty(){this.import("")}}[z]=l(W,[[x,2,"empty"]],[]).e;class G extends b{constructor(){super(...arguments),U(this)}render(){}export(){return this.target.value}import(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.target.value=t,this.target.value}isEmpty(){return!this.export().trim().length}empty(){this.import("")}}[U]=l(G,[[x,2,"empty"]],[]).e;for(const[t,e]of Object.entries({action:T,form:j,list:H,singleton:W,input:G}))_(t,e);class J extends j{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n={...arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},name:"",type:"form"};super(t,n,null);const r=this;r.target.dataset[r.property_name]=n,r.actions={...r.actions,...Object.fromEntries(Object.entries(e).map((t=>{let[e,n]=t;return[e,n.bind(r)]})))},r.target.addEventListener("click",N.bind(r),!0)}}export{J as SmartForm,_ as createType};
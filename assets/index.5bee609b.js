(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function S(){}function K(e,t){for(const n in t)e[n]=t[n];return e}function Zt(e){return e()}function Ut(){return Object.create(null)}function Q(e){e.forEach(Zt)}function Et(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let lt;function ut(e,t){return lt||(lt=document.createElement("a")),lt.href=t,e===lt.href}function ce(e){return Object.keys(e).length===0}function te(e,...t){if(e==null)return S;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function z(e,t,n){e.$$.on_destroy.push(te(t,n))}function St(e,t,n,r){if(e){const s=ee(e,t,n,r);return e[0](s)}}function ee(e,t,n,r){return e[1]&&r?K(n.ctx.slice(),e[1](r(t))):n.ctx}function At(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(t.dirty===void 0)return s;if(typeof s=="object"){const o=[],c=Math.max(t.dirty.length,s.length);for(let i=0;i<c;i+=1)o[i]=t.dirty[i]|s[i];return o}return t.dirty|s}return t.dirty}function Mt(e,t,n,r,s,o){if(s){const c=ee(t,n,r,o);e.p(c,s)}}function Lt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function vt(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function Yt(e,t){const n={};t=new Set(t);for(const r in e)!t.has(r)&&r[0]!=="$"&&(n[r]=e[r]);return n}function h(e,t){e.appendChild(t)}function C(e,t,n){e.insertBefore(t,n||null)}function M(e){e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function ne(e){return document.createTextNode(e)}function L(){return ne(" ")}function Ct(){return ne("")}function ue(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function zt(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)t[r]==null?e.removeAttribute(r):r==="style"?e.style.cssText=t[r]:r==="__value"?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:y(e,r,t[r])}function ae(e){return Array.from(e.childNodes)}function tt(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function fe(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,r,t),s}function Kt(e,t){return new e(t)}let rt;function et(e){rt=e}function ot(){if(!rt)throw new Error("Function called outside component initialization");return rt}function de(e){ot().$$.on_mount.push(e)}function pe(e){ot().$$.on_destroy.push(e)}function me(){const e=ot();return(t,n,{cancelable:r=!1}={})=>{const s=e.$$.callbacks[t];if(s){const o=fe(t,n,{cancelable:r});return s.slice().forEach(c=>{c.call(e,o)}),!o.defaultPrevented}return!0}}function qt(e,t){return ot().$$.context.set(e,t),t}function W(e){return ot().$$.context.get(e)}const J=[],Bt=[],at=[],Gt=[],he=Promise.resolve();let kt=!1;function _e(){kt||(kt=!0,he.then(re))}function wt(e){at.push(e)}const _t=new Set;let ct=0;function re(){const e=rt;do{for(;ct<J.length;){const t=J[ct];ct++,et(t),ge(t.$$)}for(et(null),J.length=0,ct=0;Bt.length;)Bt.pop()();for(let t=0;t<at.length;t+=1){const n=at[t];_t.has(n)||(_t.add(n),n())}at.length=0}while(J.length);for(;Gt.length;)Gt.pop()();kt=!1,_t.clear(),et(e)}function ge(e){if(e.fragment!==null){e.update(),Q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(wt)}}const ft=new Set;let Y;function Tt(){Y={r:0,c:[],p:Y}}function Ot(){Y.r||Q(Y.c),Y=Y.p}function x(e,t){e&&e.i&&(ft.delete(e),e.i(t))}function E(e,t,n,r){if(e&&e.o){if(ft.has(e))return;ft.add(e),Y.c.push(()=>{ft.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function se(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const c=e[o],i=t[o];if(i){for(const u in c)u in i||(r[u]=1);for(const u in i)s[u]||(n[u]=i[u],s[u]=1);e[o]=i}else for(const u in c)s[u]=1}for(const c in r)c in n||(n[c]=void 0);return n}function Vt(e){return typeof e=="object"&&e!==null?e:{}}function N(e){e&&e.c()}function O(e,t,n,r){const{fragment:s,after_update:o}=e.$$;s&&s.m(t,n),r||wt(()=>{const c=e.$$.on_mount.map(Zt).filter(Et);e.$$.on_destroy?e.$$.on_destroy.push(...c):Q(c),e.$$.on_mount=[]}),o.forEach(wt)}function R(e,t){const n=e.$$;n.fragment!==null&&(Q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function be(e,t){e.$$.dirty[0]===-1&&(J.push(e),_e(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function q(e,t,n,r,s,o,c,i=[-1]){const u=rt;et(e);const l=e.$$={fragment:null,ctx:[],props:o,update:S,not_equal:s,bound:Ut(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Ut(),dirty:i,skip_bound:!1,root:t.target||u.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(e,t.props||{},(v,p,...m)=>{const w=m.length?m[0]:p;return l.ctx&&s(l.ctx[v],l.ctx[v]=w)&&(!l.skip_bound&&l.bound[v]&&l.bound[v](w),f&&be(e,v)),p}):[],l.update(),f=!0,Q(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const v=ae(t.target);l.fragment&&l.fragment.l(v),v.forEach(M)}else l.fragment&&l.fragment.c();t.intro&&x(e.$$.fragment),O(e,t.target,t.anchor,t.customElement),re()}et(u)}class B{$destroy(){R(this,1),this.$destroy=S}$on(t,n){if(!Et(n))return S;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const V=[];function $e(e,t){return{subscribe:Z(e,t).subscribe}}function Z(e,t=S){let n;const r=new Set;function s(i){if(D(e,i)&&(e=i,n)){const u=!V.length;for(const l of r)l[1](),V.push(l,e);if(u){for(let l=0;l<V.length;l+=2)V[l][0](V[l+1]);V.length=0}}}function o(i){s(i(e))}function c(i,u=S){const l=[i,u];return r.add(l),r.size===1&&(n=t(s)||S),i(e),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:s,update:o,subscribe:c}}function ye(e,t,n){const r=!Array.isArray(e),s=r?[e]:e,o=t.length<2;return $e(n,c=>{let i=!1;const u=[];let l=0,f=S;const v=()=>{if(l)return;f();const m=t(r?u[0]:u,c);o?c(m):f=Et(m)?m:S},p=s.map((m,w)=>te(m,b=>{u[w]=b,l&=~(1<<w),i&&v()},()=>{l|=1<<w}));return i=!0,v(),function(){Q(p),f()}})}const dt={},pt={};function gt(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}function ve(e,t){const n=[];let r=gt(e);return{get location(){return r},listen(s){n.push(s);const o=()=>{r=gt(e),s({location:r,action:"POP"})};return e.addEventListener("popstate",o),()=>{e.removeEventListener("popstate",o);const c=n.indexOf(s);n.splice(c,1)}},navigate(s,{state:o,replace:c=!1}={}){o={...o,key:Date.now()+""};try{c?e.history.replaceState(o,null,s):e.history.pushState(o,null,s)}catch{e.location[c?"replace":"assign"](s)}r=gt(e),n.forEach(i=>i({location:r,action:"PUSH"}))}}}function ke(e="/"){let t=0;const n=[{pathname:e,search:""}],r=[];return{get location(){return n[t]},addEventListener(s,o){},removeEventListener(s,o){},history:{get entries(){return n},get index(){return t},get state(){return r[t]},pushState(s,o,c){const[i,u=""]=c.split("?");t++,n.push({pathname:i,search:u}),r.push(s)},replaceState(s,o,c){const[i,u=""]=c.split("?");n[t]={pathname:i,search:u},r[t]=s}}}}const we=Boolean(typeof window<"u"&&window.document&&window.document.createElement),xt=ve(we?window:ke()),{navigate:xe}=xt,oe=/^:(.+)/,Wt=4,Pe=3,Ee=2,Se=1,Ae=1;function Pt(e,t){return e.substr(0,t.length)===t}function Me(e){return e===""}function Le(e){return oe.test(e)}function ie(e){return e[0]==="*"}function st(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function bt(e){return e.replace(/(^\/+|\/+$)/g,"")}function Ce(e,t){const n=e.default?0:st(e.path).reduce((r,s)=>(r+=Wt,Me(s)?r+=Ae:Le(s)?r+=Ee:ie(s)?r-=Wt+Se:r+=Pe,r),0);return{route:e,score:n,index:t}}function Te(e){return e.map(Ce).sort((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index)}function le(e,t){let n,r;const[s]=t.split("?"),o=st(s),c=o[0]==="",i=Te(e);for(let u=0,l=i.length;u<l;u++){const f=i[u].route;let v=!1;if(f.default){r={route:f,params:{},uri:t};continue}const p=st(f.path),m={},w=Math.max(o.length,p.length);let b=0;for(;b<w;b++){const $=p[b],k=o[b];if($!==void 0&&ie($)){const d=$==="*"?"*":$.slice(1);m[d]=o.slice(b).map(decodeURIComponent).join("/");break}if(k===void 0){v=!0;break}let A=oe.exec($);if(A&&!c){const d=decodeURIComponent(k);m[A[1]]=d}else if($!==k){v=!0;break}}if(!v){n={route:f,params:m,uri:"/"+o.slice(0,b).join("/")};break}}return n||r||null}function Oe(e,t){return le([e],t)}function $t(e,t){return e+(t?`?${t}`:"")}function Re(e,t){if(Pt(e,"/"))return e;const[n,r]=e.split("?"),[s]=t.split("?"),o=st(n),c=st(s);if(o[0]==="")return $t(s,r);if(!Pt(o[0],".")){const l=c.concat(o).join("/");return $t((s==="/"?"":"/")+l,r)}const i=c.concat(o),u=[];return i.forEach(l=>{l===".."?u.pop():l!=="."&&u.push(l)}),$t("/"+u.join("/"),r)}function Qt(e,t){return`${bt(t==="/"?e:`${bt(e)}/${bt(t)}`)}/`}function Ne(e){return!e.defaultPrevented&&e.button===0&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ie(e){let t;const n=e[9].default,r=St(n,e,e[8],null);return{c(){r&&r.c()},m(s,o){r&&r.m(s,o),t=!0},p(s,[o]){r&&r.p&&(!t||o&256)&&Mt(r,n,s,s[8],t?At(n,s[8],o,null):Lt(s[8]),null)},i(s){t||(x(r,s),t=!0)},o(s){E(r,s),t=!1},d(s){r&&r.d(s)}}}function Fe(e,t,n){let r,s,o,{$$slots:c={},$$scope:i}=t,{basepath:u="/"}=t,{url:l=null}=t;const f=W(dt),v=W(pt),p=Z([]);z(e,p,a=>n(6,s=a));const m=Z(null);let w=!1;const b=f||Z(l?{pathname:l}:xt.location);z(e,b,a=>n(5,r=a));const $=v?v.routerBase:Z({path:u,uri:u});z(e,$,a=>n(7,o=a));const k=ye([$,m],([a,P])=>{if(P===null)return a;const{path:_}=a,{route:T,uri:H}=P;return{path:T.default?_:T.path.replace(/\*.*$/,""),uri:H}});function A(a){const{path:P}=o;let{path:_}=a;if(a._path=_,a.path=Qt(P,_),typeof window>"u"){if(w)return;const T=Oe(a,r.pathname);T&&(m.set(T),w=!0)}else p.update(T=>(T.push(a),T))}function d(a){p.update(P=>{const _=P.indexOf(a);return P.splice(_,1),P})}return f||(de(()=>xt.listen(P=>{b.set(P.location)})),qt(dt,b)),qt(pt,{activeRoute:m,base:$,routerBase:k,registerRoute:A,unregisterRoute:d}),e.$$set=a=>{"basepath"in a&&n(3,u=a.basepath),"url"in a&&n(4,l=a.url),"$$scope"in a&&n(8,i=a.$$scope)},e.$$.update=()=>{if(e.$$.dirty&128){const{path:a}=o;p.update(P=>(P.forEach(_=>_.path=Qt(a,_._path)),P))}if(e.$$.dirty&96){const a=le(s,r.pathname);m.set(a)}},[p,b,$,u,l,r,s,o,i,c]}class He extends B{constructor(t){super(),q(this,t,Fe,Ie,D,{basepath:3,url:4})}}const je=e=>({params:e&4,location:e&16}),Xt=e=>({params:e[2],location:e[4]});function Jt(e){let t,n,r,s;const o=[Ue,De],c=[];function i(u,l){return u[0]!==null?0:1}return t=i(e),n=c[t]=o[t](e),{c(){n.c(),r=Ct()},m(u,l){c[t].m(u,l),C(u,r,l),s=!0},p(u,l){let f=t;t=i(u),t===f?c[t].p(u,l):(Tt(),E(c[f],1,1,()=>{c[f]=null}),Ot(),n=c[t],n?n.p(u,l):(n=c[t]=o[t](u),n.c()),x(n,1),n.m(r.parentNode,r))},i(u){s||(x(n),s=!0)},o(u){E(n),s=!1},d(u){c[t].d(u),u&&M(r)}}}function De(e){let t;const n=e[10].default,r=St(n,e,e[9],Xt);return{c(){r&&r.c()},m(s,o){r&&r.m(s,o),t=!0},p(s,o){r&&r.p&&(!t||o&532)&&Mt(r,n,s,s[9],t?At(n,s[9],o,je):Lt(s[9]),Xt)},i(s){t||(x(r,s),t=!0)},o(s){E(r,s),t=!1},d(s){r&&r.d(s)}}}function Ue(e){let t,n,r;const s=[{location:e[4]},e[2],e[3]];var o=e[0];function c(i){let u={};for(let l=0;l<s.length;l+=1)u=K(u,s[l]);return{props:u}}return o&&(t=Kt(o,c())),{c(){t&&N(t.$$.fragment),n=Ct()},m(i,u){t&&O(t,i,u),C(i,n,u),r=!0},p(i,u){const l=u&28?se(s,[u&16&&{location:i[4]},u&4&&Vt(i[2]),u&8&&Vt(i[3])]):{};if(o!==(o=i[0])){if(t){Tt();const f=t;E(f.$$.fragment,1,0,()=>{R(f,1)}),Ot()}o?(t=Kt(o,c()),N(t.$$.fragment),x(t.$$.fragment,1),O(t,n.parentNode,n)):t=null}else o&&t.$set(l)},i(i){r||(t&&x(t.$$.fragment,i),r=!0)},o(i){t&&E(t.$$.fragment,i),r=!1},d(i){i&&M(n),t&&R(t,i)}}}function Ye(e){let t,n,r=e[1]!==null&&e[1].route===e[7]&&Jt(e);return{c(){r&&r.c(),t=Ct()},m(s,o){r&&r.m(s,o),C(s,t,o),n=!0},p(s,[o]){s[1]!==null&&s[1].route===s[7]?r?(r.p(s,o),o&2&&x(r,1)):(r=Jt(s),r.c(),x(r,1),r.m(t.parentNode,t)):r&&(Tt(),E(r,1,1,()=>{r=null}),Ot())},i(s){n||(x(r),n=!0)},o(s){E(r),n=!1},d(s){r&&r.d(s),s&&M(t)}}}function ze(e,t,n){let r,s,{$$slots:o={},$$scope:c}=t,{path:i=""}=t,{component:u=null}=t;const{registerRoute:l,unregisterRoute:f,activeRoute:v}=W(pt);z(e,v,$=>n(1,r=$));const p=W(dt);z(e,p,$=>n(4,s=$));const m={path:i,default:i===""};let w={},b={};return l(m),typeof window<"u"&&pe(()=>{f(m)}),e.$$set=$=>{n(13,t=K(K({},t),vt($))),"path"in $&&n(8,i=$.path),"component"in $&&n(0,u=$.component),"$$scope"in $&&n(9,c=$.$$scope)},e.$$.update=()=>{e.$$.dirty&2&&r&&r.route===m&&n(2,w=r.params);{const{path:$,component:k,...A}=t;n(3,b=A)}},t=vt(t),[u,r,w,b,s,v,p,m,i,c,o]}class yt extends B{constructor(t){super(),q(this,t,ze,Ye,D,{path:8,component:0})}}function Ke(e){let t,n,r,s;const o=e[16].default,c=St(o,e,e[15],null);let i=[{href:e[0]},{"aria-current":e[2]},e[1],e[6]],u={};for(let l=0;l<i.length;l+=1)u=K(u,i[l]);return{c(){t=g("a"),c&&c.c(),zt(t,u)},m(l,f){C(l,t,f),c&&c.m(t,null),n=!0,r||(s=ue(t,"click",e[5]),r=!0)},p(l,[f]){c&&c.p&&(!n||f&32768)&&Mt(c,o,l,l[15],n?At(o,l[15],f,null):Lt(l[15]),null),zt(t,u=se(i,[(!n||f&1)&&{href:l[0]},(!n||f&4)&&{"aria-current":l[2]},f&2&&l[1],f&64&&l[6]]))},i(l){n||(x(c,l),n=!0)},o(l){E(c,l),n=!1},d(l){l&&M(t),c&&c.d(l),r=!1,s()}}}function qe(e,t,n){let r;const s=["to","replace","state","getProps"];let o=Yt(t,s),c,i,{$$slots:u={},$$scope:l}=t,{to:f="#"}=t,{replace:v=!1}=t,{state:p={}}=t,{getProps:m=()=>({})}=t;const{base:w}=W(pt);z(e,w,_=>n(14,i=_));const b=W(dt);z(e,b,_=>n(13,c=_));const $=me();let k,A,d,a;function P(_){if($("click",_),Ne(_)){_.preventDefault();const T=c.pathname===k||v;xe(k,{state:p,replace:T})}}return e.$$set=_=>{t=K(K({},t),vt(_)),n(6,o=Yt(t,s)),"to"in _&&n(7,f=_.to),"replace"in _&&n(8,v=_.replace),"state"in _&&n(9,p=_.state),"getProps"in _&&n(10,m=_.getProps),"$$scope"in _&&n(15,l=_.$$scope)},e.$$.update=()=>{e.$$.dirty&16512&&n(0,k=f==="/"?i.uri:Re(f,i.uri)),e.$$.dirty&8193&&n(11,A=Pt(c.pathname,k)),e.$$.dirty&8193&&n(12,d=k===c.pathname),e.$$.dirty&4096&&n(2,r=d?"page":void 0),e.$$.dirty&15361&&n(1,a=m({location:c,href:k,isPartiallyCurrent:A,isCurrent:d}))},[k,a,r,w,b,P,o,f,v,p,m,A,d,c,i,l,u]}class nt extends B{constructor(t){super(),q(this,t,qe,Ke,D,{to:7,replace:8,state:9,getProps:10})}}const Be="/assets/Fluxus_N8qYfLrYAx.940087af.png",Ge="/assets/aui.1eda498a.png",Ve="/assets/faviconbutpng.e3767602.png";function We(e){let t,n;return{c(){t=g("span"),t.textContent="Download now",n=g("span"),n.textContent="arrow_forward_ios",y(t,"class","text"),y(n,"class","material-symbols-outlined icon")},m(r,s){C(r,t,s),C(r,n,s)},p:S,d(r){r&&M(t),r&&M(n)}}}function Qe(e){let t,n;return{c(){t=g("span"),t.textContent="Get Fluxus Android",n=g("span"),n.textContent="arrow_forward_ios",y(t,"class","text"),y(n,"class","material-symbols-outlined icon")},m(r,s){C(r,t,s),C(r,n,s)},p:S,d(r){r&&M(t),r&&M(n)}}}function Xe(e){let t,n,r,s,o,c,i,u,l,f,v,p,m,w,b,$,k,A,d,a,P,_,T,H,j,X,Rt,I,mt,Nt,ht,It,Ft,Ht,U,it;return p=new nt({props:{to:"dl",class:"active",$$slots:{default:[We]},$$scope:{ctx:e}}}),U=new nt({props:{to:"android",class:"active",$$slots:{default:[Qe]},$$scope:{ctx:e}}}),{c(){t=g("main"),n=g("div"),r=g("div"),s=g("img"),c=L(),i=g("div"),u=g("h1"),u.innerHTML='<span class="c">A Fresh<br/>Execution Experience.</span>',l=L(),f=g("p"),f.innerHTML="Unrivaled Power, Unbeatable Pricepoint<br/>\u200B",v=L(),N(p.$$.fragment),m=L(),w=g("div"),b=g("div"),$=g("div"),k=g("img"),d=L(),a=g("div"),a.innerHTML=`<h1>A Minimalistic UI</h1> 
        <p>Useless features shouldn&#39;t take up your entire screen.<br/>
          Only the most essential features are on the main UI - anything extra is
          just one more click away.</p>`,P=L(),_=g("div"),_.innerHTML=`<div><h1>99% of scripts simply<br/>work.</h1> 
      <p>With Fluxus, there&#39;s no need to look through dozens of pages of scripts
        to find one that supports your executor.<br/>
        Our powerful execution core supports most scripts out-of-the-box.</p></div>`,T=L(),H=g("div"),j=g("img"),Rt=L(),I=g("div"),mt=g("h1"),mt.innerHTML='<underline style="text-decoration: underline; text-decoration-color: #705d8f">The</underline> executor for mobile.',Nt=L(),ht=g("p"),ht.innerHTML=`Fluxus Android brings the Premium Executor<br/>Experience to your
        pocket. For free.`,It=L(),Ft=g("br"),Ht=L(),N(U.$$.fragment),ut(s.src,o=Ve)||y(s,"src",o),y(s,"alt","Icon"),y(u,"class","rev"),y(f,"class","\u{1F44C}\u{1F44C}\u{1F44C} \u{1F44C}"),y(i,"class","content"),y(r,"class","container"),y(n,"class","page1"),ut(k.src,A=Be)||y(k,"src",A),y(k,"alt","Fuuuuuuuuuuuuuuuuuuux \u{1F92F} UI"),y($,"class","ui"),y(a,"class","centerme"),y(b,"class","inner"),y(w,"class","page2"),y(_,"class","page3"),ut(j.src,X=Ge)||y(j,"src",X),y(j,"alt",""),y(I,"class","ok"),tt(I,"position","relative"),tt(I,"z-index","50"),y(H,"class","page4"),y(t,"class","index")},m(F,G){C(F,t,G),h(t,n),h(n,r),h(r,s),h(r,c),h(r,i),h(i,u),h(i,l),h(i,f),h(i,v),O(p,i,null),h(t,m),h(t,w),h(w,b),h(b,$),h($,k),h(b,d),h(b,a),h(t,P),h(t,_),h(t,T),h(t,H),h(H,j),h(H,Rt),h(H,I),h(I,mt),h(I,Nt),h(I,ht),h(I,It),h(I,Ft),h(I,Ht),O(U,I,null),it=!0},p(F,[G]){const jt={};G&1&&(jt.$$scope={dirty:G,ctx:F}),p.$set(jt);const Dt={};G&1&&(Dt.$$scope={dirty:G,ctx:F}),U.$set(Dt)},i(F){it||(x(p.$$.fragment,F),x(U.$$.fragment,F),it=!0)},o(F){E(p.$$.fragment,F),E(U.$$.fragment,F),it=!1},d(F){F&&M(t),R(p),R(U)}}}class Je extends B{constructor(t){super(),q(this,t,null,Xe,D,{})}}const Ze="/assets/logo.7f3bfbd3.png";function tn(e){let t;return{c(){t=g("main"),t.innerHTML=`<div class="p1 svelte-1e1drta"><div><h1 class="svelte-1e1drta">A Unique Mobile Experience.</h1> 
      <p class="svelte-1e1drta">Crafted by industry leaders, Fluxus Android is the ultimate android
        experience.</p></div></div> 
  <div class="p2 svelte-1e1drta"><div><h1 class="svelte-1e1drta">Instructions</h1> 
      <p class="svelte-1e1drta">Below, you can find a video with instructions on downloading Fluxus
        Android.</p> 
      
      <video src="https://cdn.discordapp.com/attachments/1037510861369118841/1037515767429726268/2022-11-02_19-55-01.mp4" controls="" style="/*border-radius: 16px;*/" class="svelte-1e1drta"></video></div></div> 
  <div class="p3 svelte-1e1drta"><div><h1 class="svelte-1e1drta">Resources</h1> 
      <a href="https://cdn.discordapp.com/attachments/1036294505646796891/1037543606967345162/MT_Manager.apk" target="_blank" rel="noopener noreferrer" class="svelte-1e1drta">MT Manager</a><br/><br/> 
      <a href="https://cdn.discordapp.com/attachments/1026465307683987537/1037911047362842694/libFluxusAndroid.so" target="_blank" rel="noopener noreferrer" class="svelte-1e1drta">libFluxusAndroid.so</a><br/><br/> 
      <a href="https://apkcombo.com/roblox/com.roblox.client/download/apk" target="_blank" rel="noopener noreferrer" class="svelte-1e1drta">Roblox APK - APK Combo</a> 
      <p class="svelte-1e1drta">Smali Code:</p> 
      
      <iframe src="https://yieldingfluxus.github.io/smalipage" style="border:none; width: 512px; max-width: 95vw;" frameborder="0"></iframe> 
      <br/> 
      <p class="svelte-1e1drta">P.S. You can buy premium <a href="https://discord.gg/sMjjsX4P" target="_blank" rel="noopener noreferrer" class="svelte-1e1drta">in our discord</a> to skip the key system.</p></div></div>`},m(n,r){C(n,t,r)},p:S,i:S,o:S,d(n){n&&M(t)}}}class en extends B{constructor(t){super(),q(this,t,null,tn,D,{})}}function nn(e){let t;return{c(){t=g("main"),t.innerHTML=`<div class="p1 svelte-ayn7kr"><div><h1 class="svelte-ayn7kr">Download Fluxus Windows/Linux</h1> 
      <a href="https://linkvertise.com/152666/FluxusV7Installer/1" target="_blank" rel="noreferrer" class="svelte-ayn7kr">LV Installer</a> 
      <a href="https://linkvertise.com/152666/FluxusD/1" target="_blank" rel="noreferrer" class="svelte-ayn7kr">LV</a> 
      <p class="svelte-ayn7kr">Note: The above contain advertisements. Please be aware of these before
        you continue.</p></div></div>`},m(n,r){C(n,t,r)},p:S,i:S,o:S,d(n){n&&M(t)}}}class rn extends B{constructor(t){super(),q(this,t,null,nn,D,{})}}function sn(e){let t,n,r;return{c(){t=g("span"),n=g("img"),ut(n.src,r=Ze)||y(n,"src",r),y(n,"alt","Fluxus"),tt(n,"height","1.4em"),tt(n,"transform","scale(1.5)"),tt(n,"padding-top","1px"),y(t,"class","cont")},m(s,o){C(s,t,o),h(t,n)},p:S,d(s){s&&M(t)}}}function on(e){let t;return{c(){t=g("span"),t.textContent="Download",y(t,"class","cont")},m(n,r){C(n,t,r)},p:S,d(n){n&&M(t)}}}function ln(e){let t;return{c(){t=g("span"),t.textContent="Android",y(t,"class","cont")},m(n,r){C(n,t,r)},p:S,d(n){n&&M(t)}}}function cn(e){let t,n;return t=new Je({}),{c(){N(t.$$.fragment)},m(r,s){O(t,r,s),n=!0},i(r){n||(x(t.$$.fragment,r),n=!0)},o(r){E(t.$$.fragment,r),n=!1},d(r){R(t,r)}}}function un(e){let t,n;return t=new rn({}),{c(){N(t.$$.fragment)},m(r,s){O(t,r,s),n=!0},i(r){n||(x(t.$$.fragment,r),n=!0)},o(r){E(t.$$.fragment,r),n=!1},d(r){R(t,r)}}}function an(e){let t,n;return t=new en({}),{c(){N(t.$$.fragment)},m(r,s){O(t,r,s),n=!0},i(r){n||(x(t.$$.fragment,r),n=!0)},o(r){E(t.$$.fragment,r),n=!1},d(r){R(t,r)}}}function fn(e){let t,n,r,s,o,c,i,u,l,f,v,p,m,w,b,$,k,A;return r=new nt({props:{to:"/",$$slots:{default:[sn]},$$scope:{ctx:e}}}),o=new nt({props:{to:"dl",$$slots:{default:[on]},$$scope:{ctx:e}}}),i=new nt({props:{to:"android",$$slots:{default:[ln]},$$scope:{ctx:e}}}),m=new yt({props:{path:"/",$$slots:{default:[cn]},$$scope:{ctx:e}}}),b=new yt({props:{path:"/dl",$$slots:{default:[un]},$$scope:{ctx:e}}}),k=new yt({props:{path:"/android",$$slots:{default:[an]},$$scope:{ctx:e}}}),{c(){t=g("div"),n=g("nav"),N(r.$$.fragment),s=L(),N(o.$$.fragment),c=L(),N(i.$$.fragment),u=L(),l=g("a"),f=g("span"),f.textContent="Discord",v=L(),p=g("div"),N(m.$$.fragment),w=L(),N(b.$$.fragment),$=L(),N(k.$$.fragment),y(f,"class","cont"),y(l,"href",e[1]),y(t,"class","navContainer"),y(p,"class","page")},m(d,a){C(d,t,a),h(t,n),O(r,n,null),h(n,s),O(o,n,null),h(n,c),O(i,n,null),h(n,u),h(n,l),h(l,f),C(d,v,a),C(d,p,a),O(m,p,null),h(p,w),O(b,p,null),h(p,$),O(k,p,null),A=!0},p(d,a){const P={};a&16&&(P.$$scope={dirty:a,ctx:d}),r.$set(P);const _={};a&16&&(_.$$scope={dirty:a,ctx:d}),o.$set(_);const T={};a&16&&(T.$$scope={dirty:a,ctx:d}),i.$set(T),(!A||a&2)&&y(l,"href",d[1]);const H={};a&16&&(H.$$scope={dirty:a,ctx:d}),m.$set(H);const j={};a&16&&(j.$$scope={dirty:a,ctx:d}),b.$set(j);const X={};a&16&&(X.$$scope={dirty:a,ctx:d}),k.$set(X)},i(d){A||(x(r.$$.fragment,d),x(o.$$.fragment,d),x(i.$$.fragment,d),x(m.$$.fragment,d),x(b.$$.fragment,d),x(k.$$.fragment,d),A=!0)},o(d){E(r.$$.fragment,d),E(o.$$.fragment,d),E(i.$$.fragment,d),E(m.$$.fragment,d),E(b.$$.fragment,d),E(k.$$.fragment,d),A=!1},d(d){d&&M(t),R(r),R(o),R(i),d&&M(v),d&&M(p),R(m),R(b),R(k)}}}function dn(e){let t,n;return t=new He({props:{url:e[0],$$slots:{default:[fn]},$$scope:{ctx:e}}}),{c(){N(t.$$.fragment)},m(r,s){O(t,r,s),n=!0},p(r,[s]){const o={};s&1&&(o.url=r[0]),s&18&&(o.$$scope={dirty:s,ctx:r}),t.$set(o)},i(r){n||(x(t.$$.fragment,r),n=!0)},o(r){E(t.$$.fragment,r),n=!1},d(r){R(t,r)}}}function pn(e,t,n){let r;setInterval(()=>{r=Math.min(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)},500);const s=()=>{(!r||Math.floor(r)===0)&&(r=window.screenY),document.body.setAttribute("data-z",window.scrollY===0?"true":"false"),document.body.setAttribute("data-n",Math.floor((window.scrollY+64)/r).toString()),document.body.setAttribute("data-nb",Math.floor((window.scrollY+r)/r).toString())};window.addEventListener("scroll",s),s();let{url:o=""}=t,c="https://discord.gg/GNHbGPbah2";return fetch("https://fluxteam.net/external-files/discord.php").then(i=>i.text()).then(i=>n(1,c=`https://discord.gg/${i}`)),e.$$set=i=>{"url"in i&&n(0,o=i.url)},[o,c]}class mn extends B{constructor(t){super(),q(this,t,pn,dn,D,{url:0})}}new mn({target:document.getElementById("app")});

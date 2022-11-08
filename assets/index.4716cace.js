(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function S(){}function K(t,e){for(const n in e)t[n]=e[n];return t}function Ze(t){return t()}function Ue(){return Object.create(null)}function Q(t){t.forEach(Ze)}function Ee(t){return typeof t=="function"}function D(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let le;function ue(t,e){return le||(le=document.createElement("a")),le.href=e,t===le.href}function ct(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return S;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Y(t,e,n){t.$$.on_destroy.push(et(e,n))}function Se(t,e,n,r){if(t){const s=tt(t,e,n,r);return t[0](s)}}function tt(t,e,n,r){return t[1]&&r?K(n.ctx.slice(),t[1](r(e))):n.ctx}function Ae(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],c=Math.max(e.dirty.length,s.length);for(let i=0;i<c;i+=1)o[i]=e.dirty[i]|s[i];return o}return e.dirty|s}return e.dirty}function Me(t,e,n,r,s,o){if(s){const c=tt(e,n,r,o);t.p(c,s)}}function Le(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function $e(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function je(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function h(t,e){t.appendChild(e)}function C(t,e,n){t.insertBefore(e,n||null)}function M(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function nt(t){return document.createTextNode(t)}function L(){return nt(" ")}function Ce(){return nt("")}function ut(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ye(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:g(t,r,e[r])}function at(t){return Array.from(t.childNodes)}function ee(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function ft(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}function Ke(t,e){return new t(e)}let re;function te(t){re=t}function oe(){if(!re)throw new Error("Function called outside component initialization");return re}function dt(t){oe().$$.on_mount.push(t)}function pt(t){oe().$$.on_destroy.push(t)}function mt(){const t=oe();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=ft(e,n,{cancelable:r});return s.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function qe(t,e){return oe().$$.context.set(t,e),e}function W(t){return oe().$$.context.get(t)}const J=[],Be=[],ae=[],Ge=[],ht=Promise.resolve();let ke=!1;function _t(){ke||(ke=!0,ht.then(rt))}function we(t){ae.push(t)}const _e=new Set;let ce=0;function rt(){const t=re;do{for(;ce<J.length;){const e=J[ce];ce++,te(e),gt(e.$$)}for(te(null),J.length=0,ce=0;Be.length;)Be.pop()();for(let e=0;e<ae.length;e+=1){const n=ae[e];_e.has(n)||(_e.add(n),n())}ae.length=0}while(J.length);for(;Ge.length;)Ge.pop()();ke=!1,_e.clear(),te(t)}function gt(t){if(t.fragment!==null){t.update(),Q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(we)}}const fe=new Set;let j;function Te(){j={r:0,c:[],p:j}}function Oe(){j.r||Q(j.c),j=j.p}function x(t,e){t&&t.i&&(fe.delete(t),t.i(e))}function E(t,e,n,r){if(t&&t.o){if(fe.has(t))return;fe.add(t),j.c.push(()=>{fe.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function st(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const c=t[o],i=e[o];if(i){for(const u in c)u in i||(r[u]=1);for(const u in i)s[u]||(n[u]=i[u],s[u]=1);t[o]=i}else for(const u in c)s[u]=1}for(const c in r)c in n||(n[c]=void 0);return n}function Ve(t){return typeof t=="object"&&t!==null?t:{}}function I(t){t&&t.c()}function O(t,e,n,r){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),r||we(()=>{const c=t.$$.on_mount.map(Ze).filter(Ee);t.$$.on_destroy?t.$$.on_destroy.push(...c):Q(c),t.$$.on_mount=[]}),o.forEach(we)}function R(t,e){const n=t.$$;n.fragment!==null&&(Q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(J.push(t),_t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(t,e,n,r,s,o,c,i=[-1]){const u=re;te(t);const l=t.$$={fragment:null,ctx:[],props:o,update:S,not_equal:s,bound:Ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Ue(),dirty:i,skip_bound:!1,root:e.target||u.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},($,p,...m)=>{const w=m.length?m[0]:p;return l.ctx&&s(l.ctx[$],l.ctx[$]=w)&&(!l.skip_bound&&l.bound[$]&&l.bound[$](w),f&&bt(t,$)),p}):[],l.update(),f=!0,Q(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const $=at(e.target);l.fragment&&l.fragment.l($),$.forEach(M)}else l.fragment&&l.fragment.c();e.intro&&x(t.$$.fragment),O(t,e.target,e.anchor,e.customElement),rt()}te(u)}class B{$destroy(){R(this,1),this.$destroy=S}$on(e,n){if(!Ee(n))return S;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const V=[];function vt(t,e){return{subscribe:Z(t,e).subscribe}}function Z(t,e=S){let n;const r=new Set;function s(i){if(D(t,i)&&(t=i,n)){const u=!V.length;for(const l of r)l[1](),V.push(l,t);if(u){for(let l=0;l<V.length;l+=2)V[l][0](V[l+1]);V.length=0}}}function o(i){s(i(t))}function c(i,u=S){const l=[i,u];return r.add(l),r.size===1&&(n=e(s)||S),i(t),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:s,update:o,subscribe:c}}function yt(t,e,n){const r=!Array.isArray(t),s=r?[t]:t,o=e.length<2;return vt(n,c=>{let i=!1;const u=[];let l=0,f=S;const $=()=>{if(l)return;f();const m=e(r?u[0]:u,c);o?c(m):f=Ee(m)?m:S},p=s.map((m,w)=>et(m,v=>{u[w]=v,l&=~(1<<w),i&&$()},()=>{l|=1<<w}));return i=!0,$(),function(){Q(p),f()}})}const de={},pe={};function ge(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}function $t(t,e){const n=[];let r=ge(t);return{get location(){return r},listen(s){n.push(s);const o=()=>{r=ge(t),s({location:r,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const c=n.indexOf(s);n.splice(c,1)}},navigate(s,{state:o,replace:c=!1}={}){o={...o,key:Date.now()+""};try{c?t.history.replaceState(o,null,s):t.history.pushState(o,null,s)}catch{t.location[c?"replace":"assign"](s)}r=ge(t),n.forEach(i=>i({location:r,action:"PUSH"}))}}}function kt(t="/"){let e=0;const n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener(s,o){},removeEventListener(s,o){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState(s,o,c){const[i,u=""]=c.split("?");e++,n.push({pathname:i,search:u}),r.push(s)},replaceState(s,o,c){const[i,u=""]=c.split("?");n[e]={pathname:i,search:u},r[e]=s}}}}const wt=Boolean(typeof window<"u"&&window.document&&window.document.createElement),xe=$t(wt?window:kt()),{navigate:xt}=xe,ot=/^:(.+)/,We=4,Pt=3,Et=2,St=1,At=1;function Pe(t,e){return t.substr(0,e.length)===e}function Mt(t){return t===""}function Lt(t){return ot.test(t)}function it(t){return t[0]==="*"}function se(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function be(t){return t.replace(/(^\/+|\/+$)/g,"")}function Ct(t,e){const n=t.default?0:se(t.path).reduce((r,s)=>(r+=We,Mt(s)?r+=At:Lt(s)?r+=Et:it(s)?r-=We+St:r+=Pt,r),0);return{route:t,score:n,index:e}}function Tt(t){return t.map(Ct).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function lt(t,e){let n,r;const[s]=e.split("?"),o=se(s),c=o[0]==="",i=Tt(t);for(let u=0,l=i.length;u<l;u++){const f=i[u].route;let $=!1;if(f.default){r={route:f,params:{},uri:e};continue}const p=se(f.path),m={},w=Math.max(o.length,p.length);let v=0;for(;v<w;v++){const y=p[v],k=o[v];if(y!==void 0&&it(y)){const d=y==="*"?"*":y.slice(1);m[d]=o.slice(v).map(decodeURIComponent).join("/");break}if(k===void 0){$=!0;break}let A=ot.exec(y);if(A&&!c){const d=decodeURIComponent(k);m[A[1]]=d}else if(y!==k){$=!0;break}}if(!$){n={route:f,params:m,uri:"/"+o.slice(0,v).join("/")};break}}return n||r||null}function Ot(t,e){return lt([t],e)}function ve(t,e){return t+(e?`?${e}`:"")}function Rt(t,e){if(Pe(t,"/"))return t;const[n,r]=t.split("?"),[s]=e.split("?"),o=se(n),c=se(s);if(o[0]==="")return ve(s,r);if(!Pe(o[0],".")){const l=c.concat(o).join("/");return ve((s==="/"?"":"/")+l,r)}const i=c.concat(o),u=[];return i.forEach(l=>{l===".."?u.pop():l!=="."&&u.push(l)}),ve("/"+u.join("/"),r)}function Qe(t,e){return`${be(e==="/"?t:`${be(t)}/${be(e)}`)}/`}function It(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function zt(t){let e;const n=t[9].default,r=Se(n,t,t[8],null);return{c(){r&&r.c()},m(s,o){r&&r.m(s,o),e=!0},p(s,[o]){r&&r.p&&(!e||o&256)&&Me(r,n,s,s[8],e?Ae(n,s[8],o,null):Le(s[8]),null)},i(s){e||(x(r,s),e=!0)},o(s){E(r,s),e=!1},d(s){r&&r.d(s)}}}function Nt(t,e,n){let r,s,o,{$$slots:c={},$$scope:i}=e,{basepath:u="/"}=e,{url:l=null}=e;const f=W(de),$=W(pe),p=Z([]);Y(t,p,a=>n(6,s=a));const m=Z(null);let w=!1;const v=f||Z(l?{pathname:l}:xe.location);Y(t,v,a=>n(5,r=a));const y=$?$.routerBase:Z({path:u,uri:u});Y(t,y,a=>n(7,o=a));const k=yt([y,m],([a,P])=>{if(P===null)return a;const{path:_}=a,{route:T,uri:F}=P;return{path:T.default?_:T.path.replace(/\*.*$/,""),uri:F}});function A(a){const{path:P}=o;let{path:_}=a;if(a._path=_,a.path=Qe(P,_),typeof window>"u"){if(w)return;const T=Ot(a,r.pathname);T&&(m.set(T),w=!0)}else p.update(T=>(T.push(a),T))}function d(a){p.update(P=>{const _=P.indexOf(a);return P.splice(_,1),P})}return f||(dt(()=>xe.listen(P=>{v.set(P.location)})),qe(de,v)),qe(pe,{activeRoute:m,base:y,routerBase:k,registerRoute:A,unregisterRoute:d}),t.$$set=a=>{"basepath"in a&&n(3,u=a.basepath),"url"in a&&n(4,l=a.url),"$$scope"in a&&n(8,i=a.$$scope)},t.$$.update=()=>{if(t.$$.dirty&128){const{path:a}=o;p.update(P=>(P.forEach(_=>_.path=Qe(a,_._path)),P))}if(t.$$.dirty&96){const a=lt(s,r.pathname);m.set(a)}},[p,v,y,u,l,r,s,o,i,c]}class Ft extends B{constructor(e){super(),q(this,e,Nt,zt,D,{basepath:3,url:4})}}const Ht=t=>({params:t&4,location:t&16}),Xe=t=>({params:t[2],location:t[4]});function Je(t){let e,n,r,s;const o=[Ut,Dt],c=[];function i(u,l){return u[0]!==null?0:1}return e=i(t),n=c[e]=o[e](t),{c(){n.c(),r=Ce()},m(u,l){c[e].m(u,l),C(u,r,l),s=!0},p(u,l){let f=e;e=i(u),e===f?c[e].p(u,l):(Te(),E(c[f],1,1,()=>{c[f]=null}),Oe(),n=c[e],n?n.p(u,l):(n=c[e]=o[e](u),n.c()),x(n,1),n.m(r.parentNode,r))},i(u){s||(x(n),s=!0)},o(u){E(n),s=!1},d(u){c[e].d(u),u&&M(r)}}}function Dt(t){let e;const n=t[10].default,r=Se(n,t,t[9],Xe);return{c(){r&&r.c()},m(s,o){r&&r.m(s,o),e=!0},p(s,o){r&&r.p&&(!e||o&532)&&Me(r,n,s,s[9],e?Ae(n,s[9],o,Ht):Le(s[9]),Xe)},i(s){e||(x(r,s),e=!0)},o(s){E(r,s),e=!1},d(s){r&&r.d(s)}}}function Ut(t){let e,n,r;const s=[{location:t[4]},t[2],t[3]];var o=t[0];function c(i){let u={};for(let l=0;l<s.length;l+=1)u=K(u,s[l]);return{props:u}}return o&&(e=Ke(o,c())),{c(){e&&I(e.$$.fragment),n=Ce()},m(i,u){e&&O(e,i,u),C(i,n,u),r=!0},p(i,u){const l=u&28?st(s,[u&16&&{location:i[4]},u&4&&Ve(i[2]),u&8&&Ve(i[3])]):{};if(o!==(o=i[0])){if(e){Te();const f=e;E(f.$$.fragment,1,0,()=>{R(f,1)}),Oe()}o?(e=Ke(o,c()),I(e.$$.fragment),x(e.$$.fragment,1),O(e,n.parentNode,n)):e=null}else o&&e.$set(l)},i(i){r||(e&&x(e.$$.fragment,i),r=!0)},o(i){e&&E(e.$$.fragment,i),r=!1},d(i){i&&M(n),e&&R(e,i)}}}function jt(t){let e,n,r=t[1]!==null&&t[1].route===t[7]&&Je(t);return{c(){r&&r.c(),e=Ce()},m(s,o){r&&r.m(s,o),C(s,e,o),n=!0},p(s,[o]){s[1]!==null&&s[1].route===s[7]?r?(r.p(s,o),o&2&&x(r,1)):(r=Je(s),r.c(),x(r,1),r.m(e.parentNode,e)):r&&(Te(),E(r,1,1,()=>{r=null}),Oe())},i(s){n||(x(r),n=!0)},o(s){E(r),n=!1},d(s){r&&r.d(s),s&&M(e)}}}function Yt(t,e,n){let r,s,{$$slots:o={},$$scope:c}=e,{path:i=""}=e,{component:u=null}=e;const{registerRoute:l,unregisterRoute:f,activeRoute:$}=W(pe);Y(t,$,y=>n(1,r=y));const p=W(de);Y(t,p,y=>n(4,s=y));const m={path:i,default:i===""};let w={},v={};return l(m),typeof window<"u"&&pt(()=>{f(m)}),t.$$set=y=>{n(13,e=K(K({},e),$e(y))),"path"in y&&n(8,i=y.path),"component"in y&&n(0,u=y.component),"$$scope"in y&&n(9,c=y.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&r&&r.route===m&&n(2,w=r.params);{const{path:y,component:k,...A}=e;n(3,v=A)}},e=$e(e),[u,r,w,v,s,$,p,m,i,c,o]}class ye extends B{constructor(e){super(),q(this,e,Yt,jt,D,{path:8,component:0})}}function Kt(t){let e,n,r,s;const o=t[16].default,c=Se(o,t,t[15],null);let i=[{href:t[0]},{"aria-current":t[2]},t[1],t[6]],u={};for(let l=0;l<i.length;l+=1)u=K(u,i[l]);return{c(){e=b("a"),c&&c.c(),Ye(e,u)},m(l,f){C(l,e,f),c&&c.m(e,null),n=!0,r||(s=ut(e,"click",t[5]),r=!0)},p(l,[f]){c&&c.p&&(!n||f&32768)&&Me(c,o,l,l[15],n?Ae(o,l[15],f,null):Le(l[15]),null),Ye(e,u=st(i,[(!n||f&1)&&{href:l[0]},(!n||f&4)&&{"aria-current":l[2]},f&2&&l[1],f&64&&l[6]]))},i(l){n||(x(c,l),n=!0)},o(l){E(c,l),n=!1},d(l){l&&M(e),c&&c.d(l),r=!1,s()}}}function qt(t,e,n){let r;const s=["to","replace","state","getProps"];let o=je(e,s),c,i,{$$slots:u={},$$scope:l}=e,{to:f="#"}=e,{replace:$=!1}=e,{state:p={}}=e,{getProps:m=()=>({})}=e;const{base:w}=W(pe);Y(t,w,_=>n(14,i=_));const v=W(de);Y(t,v,_=>n(13,c=_));const y=mt();let k,A,d,a;function P(_){if(y("click",_),It(_)){_.preventDefault();const T=c.pathname===k||$;xt(k,{state:p,replace:T})}}return t.$$set=_=>{e=K(K({},e),$e(_)),n(6,o=je(e,s)),"to"in _&&n(7,f=_.to),"replace"in _&&n(8,$=_.replace),"state"in _&&n(9,p=_.state),"getProps"in _&&n(10,m=_.getProps),"$$scope"in _&&n(15,l=_.$$scope)},t.$$.update=()=>{t.$$.dirty&16512&&n(0,k=f==="/"?i.uri:Rt(f,i.uri)),t.$$.dirty&8193&&n(11,A=Pe(c.pathname,k)),t.$$.dirty&8193&&n(12,d=k===c.pathname),t.$$.dirty&4096&&n(2,r=d?"page":void 0),t.$$.dirty&15361&&n(1,a=m({location:c,href:k,isPartiallyCurrent:A,isCurrent:d}))},[k,a,r,w,v,P,o,f,$,p,m,A,d,c,i,l,u]}class ne extends B{constructor(e){super(),q(this,e,qt,Kt,D,{to:7,replace:8,state:9,getProps:10})}}const Bt="/assets/Fluxus_N8qYfLrYAx.940087af.png",Gt="/assets/aui.1eda498a.png",Vt="/assets/faviconbutpng.e3767602.png";function Wt(t){let e,n;return{c(){e=b("span"),e.textContent="Download now",n=b("span"),n.textContent="arrow_forward_ios",g(e,"class","text"),g(n,"class","material-symbols-outlined icon")},m(r,s){C(r,e,s),C(r,n,s)},p:S,d(r){r&&M(e),r&&M(n)}}}function Qt(t){let e,n;return{c(){e=b("span"),e.innerHTML=`<span class="text">Get Fluxus Android</span> 
        `,n=b("span"),n.textContent="arrow_forward_ios",g(e,"class","nomobile"),g(n,"class","material-symbols-outlined icon")},m(r,s){C(r,e,s),C(r,n,s)},p:S,d(r){r&&M(e),r&&M(n)}}}function Xt(t){let e,n,r,s,o,c,i,u,l,f,$,p,m,w,v,y,k,A,d,a,P,_,T,F,H,X,Re,z,me,Ie,he,ze,Ne,Fe,U,ie;return p=new ne({props:{to:"dl",class:"active",$$slots:{default:[Wt]},$$scope:{ctx:t}}}),U=new ne({props:{to:"android",class:"active",$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){e=b("main"),n=b("div"),r=b("div"),s=b("img"),c=L(),i=b("div"),u=b("h1"),u.innerHTML='<span class="c">A Fresh<br/>Execution Experience.</span>',l=L(),f=b("p"),f.innerHTML="Unrivaled Power, Unbeatable Pricepoint<br/>\u200B",$=L(),I(p.$$.fragment),m=L(),w=b("div"),v=b("div"),y=b("div"),k=b("img"),d=L(),a=b("div"),a.innerHTML=`<h1>A Minimalistic UI</h1> 
        <p>Useless features shouldn&#39;t take up your entire screen.<br/>
          Only the most essential features are on the main UI - anything extra is
          just one more click away.</p>`,P=L(),_=b("div"),_.innerHTML=`<div><h1>99% of scripts simply<br/>work.</h1> 
      <p>With Fluxus, there&#39;s no need to look through dozens of pages of scripts
        to find one that supports your executor.<br/>
        Our powerful execution core supports most scripts out-of-the-box.</p></div>`,T=L(),F=b("div"),H=b("img"),Re=L(),z=b("div"),me=b("h1"),me.innerHTML='<underline style="text-decoration: underline; text-decoration-color: #705d8f">The</underline> executor for mobile.',Ie=L(),he=b("p"),he.innerHTML=`Fluxus Android brings the Premium Executor<br/>Experience to your
        pocket. For free.`,ze=L(),Ne=b("br"),Fe=L(),I(U.$$.fragment),ue(s.src,o=Vt)||g(s,"src",o),g(s,"alt","Icon"),g(u,"class","rev"),g(f,"class","\u{1F44C}\u{1F44C}\u{1F44C} \u{1F44C}"),g(i,"class","content"),g(r,"class","container"),g(n,"class","page1"),ue(k.src,A=Bt)||g(k,"src",A),g(k,"alt","Fuuuuuuuuuuuuuuuuuuux \u{1F92F} UI"),g(k,"style",t[0]?"display:none":""),g(y,"class","ui"),g(a,"class","centerme"),g(v,"class","inner"),g(w,"class","page2"),g(_,"class","page3"),ue(H.src,X=Gt)||g(H,"src",X),g(H,"alt",""),g(H,"style",t[0]?"display:none":""),g(z,"class","ok"),ee(z,"position","relative"),ee(z,"z-index","50"),g(F,"class","page4"),g(e,"class","index")},m(N,G){C(N,e,G),h(e,n),h(n,r),h(r,s),h(r,c),h(r,i),h(i,u),h(i,l),h(i,f),h(i,$),O(p,i,null),h(e,m),h(e,w),h(w,v),h(v,y),h(y,k),h(v,d),h(v,a),h(e,P),h(e,_),h(e,T),h(e,F),h(F,H),h(F,Re),h(F,z),h(z,me),h(z,Ie),h(z,he),h(z,ze),h(z,Ne),h(z,Fe),O(U,z,null),ie=!0},p(N,[G]){const He={};G&2&&(He.$$scope={dirty:G,ctx:N}),p.$set(He);const De={};G&2&&(De.$$scope={dirty:G,ctx:N}),U.$set(De)},i(N){ie||(x(p.$$.fragment,N),x(U.$$.fragment,N),ie=!0)},o(N){E(p.$$.fragment,N),E(U.$$.fragment,N),ie=!1},d(N){N&&M(e),R(p),R(U)}}}function Jt(t){return[navigator.userAgent.includes("Safari")||navigator.userAgent.includes("iPhone")]}class Zt extends B{constructor(e){super(),q(this,e,Jt,Xt,D,{})}}const en="/assets/logo.7f3bfbd3.png";function tn(t){let e;return{c(){e=b("main"),e.innerHTML=`<div class="p1 svelte-ecmvkz"><div><h1 class="svelte-ecmvkz">A Unique Mobile Experience.</h1> 
      <p class="svelte-ecmvkz">Crafted by industry leaders, Fluxus Android is the ultimate android
        experience.</p></div></div> 
  <div class="p2 svelte-ecmvkz"><div><h1 class="svelte-ecmvkz">Instructions</h1> 
      <p class="svelte-ecmvkz">Below, you can find a video with instructions on downloading Fluxus
        Android.</p> 
      
      <video src="https://cdn.discordapp.com/attachments/1037510861369118841/1037515767429726268/2022-11-02_19-55-01.mp4" controls="" style="/*border-radius: 16px;*/" class="svelte-ecmvkz"></video></div></div> 
  <div class="p3 svelte-ecmvkz"><div><h1 class="svelte-ecmvkz">Resources</h1> 
      <a href="https://cdn.discordapp.com/attachments/1036294505646796891/1037543606967345162/MT_Manager.apk" target="_blank" rel="noopener noreferrer" class="svelte-ecmvkz">MT Manager</a><br/><br/> 
      <a href="https://cdn.discordapp.com/attachments/1026465307683987537/1037911047362842694/libFluxusAndroid.so" target="_blank" rel="noopener noreferrer" class="svelte-ecmvkz">libFluxusAndroid.so</a><br/><br/> 
      <a href="https://apkcombo.com/roblox/com.roblox.client/download/apk" target="_blank" rel="noopener noreferrer" class="svelte-ecmvkz">Roblox APK - APK Combo</a> 
      <p class="svelte-ecmvkz">Smali Code:</p> 
      
      <iframe src="https://yieldingfluxus.github.io/smalipage" style="border:none; width: 512px; max-width: 95vw;" frameborder="0"></iframe> 
      <br/> 
      <p class="svelte-ecmvkz">P.S. You can buy premium <a href="https://discord.gg/sMjjsX4P" target="_blank" rel="noopener noreferrer" class="nobtn svelte-ecmvkz">in our discord</a> to skip the key system.</p></div></div>`},m(n,r){C(n,e,r)},p:S,i:S,o:S,d(n){n&&M(e)}}}class nn extends B{constructor(e){super(),q(this,e,null,tn,D,{})}}function rn(t){let e;return{c(){e=b("main"),e.innerHTML=`<div class="p1 svelte-ayn7kr"><div><h1 class="svelte-ayn7kr">Download Fluxus Windows/Linux</h1> 
      <a href="https://linkvertise.com/152666/FluxusV7Installer/1" target="_blank" rel="noreferrer" class="svelte-ayn7kr">LV Installer</a> 
      <a href="https://linkvertise.com/152666/FluxusD/1" target="_blank" rel="noreferrer" class="svelte-ayn7kr">LV</a> 
      <p class="svelte-ayn7kr">Note: The above contain advertisements. Please be aware of these before
        you continue.</p></div></div>`},m(n,r){C(n,e,r)},p:S,i:S,o:S,d(n){n&&M(e)}}}class sn extends B{constructor(e){super(),q(this,e,null,rn,D,{})}}function on(t){let e,n,r;return{c(){e=b("span"),n=b("img"),ue(n.src,r=en)||g(n,"src",r),g(n,"alt","Fluxus"),ee(n,"height","1.4em"),ee(n,"transform","scale(1.5)"),ee(n,"padding-top","1px"),g(e,"class","cont")},m(s,o){C(s,e,o),h(e,n)},p:S,d(s){s&&M(e)}}}function ln(t){let e;return{c(){e=b("span"),e.textContent="Download",g(e,"class","cont")},m(n,r){C(n,e,r)},p:S,d(n){n&&M(e)}}}function cn(t){let e;return{c(){e=b("span"),e.textContent="Android",g(e,"class","cont")},m(n,r){C(n,e,r)},p:S,d(n){n&&M(e)}}}function un(t){let e,n;return e=new Zt({}),{c(){I(e.$$.fragment)},m(r,s){O(e,r,s),n=!0},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){E(e.$$.fragment,r),n=!1},d(r){R(e,r)}}}function an(t){let e,n;return e=new sn({}),{c(){I(e.$$.fragment)},m(r,s){O(e,r,s),n=!0},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){E(e.$$.fragment,r),n=!1},d(r){R(e,r)}}}function fn(t){let e,n;return e=new nn({}),{c(){I(e.$$.fragment)},m(r,s){O(e,r,s),n=!0},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){E(e.$$.fragment,r),n=!1},d(r){R(e,r)}}}function dn(t){let e,n,r,s,o,c,i,u,l,f,$,p,m,w,v,y,k,A;return r=new ne({props:{to:"/",$$slots:{default:[on]},$$scope:{ctx:t}}}),o=new ne({props:{to:"dl",class:"nomobile",$$slots:{default:[ln]},$$scope:{ctx:t}}}),i=new ne({props:{to:"android",$$slots:{default:[cn]},$$scope:{ctx:t}}}),m=new ye({props:{path:"/",$$slots:{default:[un]},$$scope:{ctx:t}}}),v=new ye({props:{path:"/dl",$$slots:{default:[an]},$$scope:{ctx:t}}}),k=new ye({props:{path:"/android",$$slots:{default:[fn]},$$scope:{ctx:t}}}),{c(){e=b("div"),n=b("nav"),I(r.$$.fragment),s=L(),I(o.$$.fragment),c=L(),I(i.$$.fragment),u=L(),l=b("a"),f=b("span"),f.textContent="Discord",$=L(),p=b("div"),I(m.$$.fragment),w=L(),I(v.$$.fragment),y=L(),I(k.$$.fragment),g(f,"class","cont"),g(l,"href",t[1]),g(l,"class","nomobile"),g(e,"class","navContainer"),g(p,"class","page")},m(d,a){C(d,e,a),h(e,n),O(r,n,null),h(n,s),O(o,n,null),h(n,c),O(i,n,null),h(n,u),h(n,l),h(l,f),C(d,$,a),C(d,p,a),O(m,p,null),h(p,w),O(v,p,null),h(p,y),O(k,p,null),A=!0},p(d,a){const P={};a&16&&(P.$$scope={dirty:a,ctx:d}),r.$set(P);const _={};a&16&&(_.$$scope={dirty:a,ctx:d}),o.$set(_);const T={};a&16&&(T.$$scope={dirty:a,ctx:d}),i.$set(T),(!A||a&2)&&g(l,"href",d[1]);const F={};a&16&&(F.$$scope={dirty:a,ctx:d}),m.$set(F);const H={};a&16&&(H.$$scope={dirty:a,ctx:d}),v.$set(H);const X={};a&16&&(X.$$scope={dirty:a,ctx:d}),k.$set(X)},i(d){A||(x(r.$$.fragment,d),x(o.$$.fragment,d),x(i.$$.fragment,d),x(m.$$.fragment,d),x(v.$$.fragment,d),x(k.$$.fragment,d),A=!0)},o(d){E(r.$$.fragment,d),E(o.$$.fragment,d),E(i.$$.fragment,d),E(m.$$.fragment,d),E(v.$$.fragment,d),E(k.$$.fragment,d),A=!1},d(d){d&&M(e),R(r),R(o),R(i),d&&M($),d&&M(p),R(m),R(v),R(k)}}}function pn(t){let e,n;return e=new Ft({props:{url:t[0],$$slots:{default:[dn]},$$scope:{ctx:t}}}),{c(){I(e.$$.fragment)},m(r,s){O(e,r,s),n=!0},p(r,[s]){const o={};s&1&&(o.url=r[0]),s&18&&(o.$$scope={dirty:s,ctx:r}),e.$set(o)},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){E(e.$$.fragment,r),n=!1},d(r){R(e,r)}}}function mn(t,e,n){let r;setInterval(()=>{r=Math.min(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)},500);const s=()=>{(!r||Math.floor(r)===0)&&(r=window.screenY),document.body.setAttribute("data-z",window.scrollY===0?"true":"false"),document.body.setAttribute("data-n",Math.floor((window.scrollY+64)/r).toString()),document.body.setAttribute("data-nb",Math.floor((window.scrollY+r)/r).toString())};window.addEventListener("scroll",s),s();let{url:o=""}=e,c="https://discord.gg/GNHbGPbah2";return fetch("https://fluxteam.net/external-files/discord.php").then(i=>i.text()).then(i=>n(1,c=`https://discord.gg/${i}`)),t.$$set=i=>{"url"in i&&n(0,o=i.url)},[o,c]}class hn extends B{constructor(e){super(),q(this,e,mn,pn,D,{url:0})}}new hn({target:document.getElementById("app")});
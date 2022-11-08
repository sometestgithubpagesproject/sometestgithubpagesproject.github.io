(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function S(){}function V(t,e){for(const n in e)t[n]=e[n];return t}function nt(t){return t()}function je(){return Object.create(null)}function J(t){t.forEach(nt)}function Se(t){return typeof t=="function"}function M(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ue;function he(t,e){return ue||(ue=document.createElement("a")),ue.href=e,t===ue.href}function ut(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null)return S;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function G(t,e,n){t.$$.on_destroy.push(ot(e,n))}function Ae(t,e,n,o){if(t){const r=rt(t,e,n,o);return t[0](r)}}function rt(t,e,n,o){return t[1]&&o?V(n.ctx.slice(),t[1](o(e))):n.ctx}function $e(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],l=Math.max(e.dirty.length,r.length);for(let s=0;s<l;s+=1)i[s]=e.dirty[s]|r[s];return i}return e.dirty|r}return e.dirty}function Le(t,e,n,o,r,i){if(r){const l=rt(e,n,o,i);t.p(l,r)}}function Ce(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let o=0;o<n;o++)e[o]=-1;return e}return-1}function ke(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Be(t,e){const n={};e=new Set(e);for(const o in t)!e.has(o)&&o[0]!=="$"&&(n[o]=t[o]);return n}function f(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function xe(t){return document.createTextNode(t)}function O(){return xe(" ")}function He(){return xe("")}function ft(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ge(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)e[o]==null?t.removeAttribute(o):o==="style"?t.style.cssText=e[o]:o==="__value"?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:m(t,o,e[o])}function dt(t){return Array.from(t.childNodes)}function re(t,e,n,o){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function ht(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}function Ve(t,e){return new t(e)}let se;function ie(t){se=t}function le(){if(!se)throw new Error("Function called outside component initialization");return se}function pt(t){le().$$.on_mount.push(t)}function mt(t){le().$$.on_destroy.push(t)}function bt(){const t=le();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=ht(e,n,{cancelable:o});return r.slice().forEach(l=>{l.call(t,i)}),!i.defaultPrevented}return!0}}function Ke(t,e){return le().$$.context.set(t,e),e}function Q(t){return le().$$.context.get(t)}const ne=[],ze=[],pe=[],Ze=[],gt=Promise.resolve();let Ie=!1;function yt(){Ie||(Ie=!0,gt.then(it))}function Oe(t){pe.push(t)}const ve=new Set;let fe=0;function it(){const t=se;do{for(;fe<ne.length;){const e=ne[fe];fe++,ie(e),wt(e.$$)}for(ie(null),ne.length=0,fe=0;ze.length;)ze.pop()();for(let e=0;e<pe.length;e+=1){const n=pe[e];ve.has(n)||(ve.add(n),n())}pe.length=0}while(ne.length);for(;Ze.length;)Ze.pop()();Ie=!1,ve.clear(),ie(t)}function wt(t){if(t.fragment!==null){t.update(),J(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Oe)}}const me=new Set;let B;function We(){B={r:0,c:[],p:B}}function De(){B.r||J(B.c),B=B.p}function I(t,e){t&&t.i&&(me.delete(t),t.i(e))}function R(t,e,n,o){if(t&&t.o){if(me.has(t))return;me.add(t),B.c.push(()=>{me.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}function st(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const l=t[i],s=e[i];if(s){for(const c in l)c in s||(o[c]=1);for(const c in s)r[c]||(n[c]=s[c],r[c]=1);t[i]=s}else for(const c in l)r[c]=1}for(const l in o)l in n||(n[l]=void 0);return n}function Xe(t){return typeof t=="object"&&t!==null?t:{}}function x(t){t&&t.c()}function L(t,e,n,o){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),o||Oe(()=>{const l=t.$$.on_mount.map(nt).filter(Se);t.$$.on_destroy?t.$$.on_destroy.push(...l):J(l),t.$$.on_mount=[]}),i.forEach(Oe)}function C(t,e){const n=t.$$;n.fragment!==null&&(J(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){t.$$.dirty[0]===-1&&(ne.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(t,e,n,o,r,i,l,s=[-1]){const c=se;ie(t);const a=t.$$={fragment:null,ctx:[],props:i,update:S,not_equal:r,bound:je(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:je(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};l&&l(a.root);let h=!1;if(a.ctx=n?n(t,e.props||{},(v,g,...y)=>{const E=y.length?y[0]:g;return a.ctx&&r(a.ctx[v],a.ctx[v]=E)&&(!a.skip_bound&&a.bound[v]&&a.bound[v](E),h&&vt(t,v)),g}):[],a.update(),h=!0,J(a.before_update),a.fragment=o?o(a.ctx):!1,e.target){if(e.hydrate){const v=dt(e.target);a.fragment&&a.fragment.l(v),v.forEach(A)}else a.fragment&&a.fragment.c();e.intro&&I(t.$$.fragment),L(t,e.target,e.anchor,e.customElement),it()}ie(c)}class U{$destroy(){C(this,1),this.$destroy=S}$on(e,n){if(!Se(n))return S;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Z=[];function _t(t,e){return{subscribe:oe(t,e).subscribe}}function oe(t,e=S){let n;const o=new Set;function r(s){if(M(t,s)&&(t=s,n)){const c=!Z.length;for(const a of o)a[1](),Z.push(a,t);if(c){for(let a=0;a<Z.length;a+=2)Z[a][0](Z[a+1]);Z.length=0}}}function i(s){r(s(t))}function l(s,c=S){const a=[s,c];return o.add(a),o.size===1&&(n=e(r)||S),s(t),()=>{o.delete(a),o.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:l}}function Tt(t,e,n){const o=!Array.isArray(t),r=o?[t]:t,i=e.length<2;return _t(n,l=>{let s=!1;const c=[];let a=0,h=S;const v=()=>{if(a)return;h();const y=e(o?c[0]:c,l);i?l(y):h=Se(y)?y:S},g=r.map((y,E)=>ot(y,_=>{c[E]=_,a&=~(1<<E),s&&v()},()=>{a|=1<<E}));return s=!0,v(),function(){J(g),h()}})}const be={},ge={};function _e(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}function Et(t,e){const n=[];let o=_e(t);return{get location(){return o},listen(r){n.push(r);const i=()=>{o=_e(t),r({location:o,action:"POP"})};return t.addEventListener("popstate",i),()=>{t.removeEventListener("popstate",i);const l=n.indexOf(r);n.splice(l,1)}},navigate(r,{state:i,replace:l=!1}={}){i={...i,key:Date.now()+""};try{l?t.history.replaceState(i,null,r):t.history.pushState(i,null,r)}catch{t.location[l?"replace":"assign"](r)}o=_e(t),n.forEach(s=>s({location:o,action:"PUSH"}))}}}function kt(t="/"){let e=0;const n=[{pathname:t,search:""}],o=[];return{get location(){return n[e]},addEventListener(r,i){},removeEventListener(r,i){},history:{get entries(){return n},get index(){return e},get state(){return o[e]},pushState(r,i,l){const[s,c=""]=l.split("?");e++,n.push({pathname:s,search:c}),o.push(r)},replaceState(r,i,l){const[s,c=""]=l.split("?");n[e]={pathname:s,search:c},o[e]=r}}}}const It=Boolean(typeof window<"u"&&window.document&&window.document.createElement),Re=Et(It?window:kt()),{navigate:Ot}=Re,at=/^:(.+)/,Qe=4,Rt=3,Nt=2,St=1,At=1;function Ne(t,e){return t.substr(0,e.length)===e}function $t(t){return t===""}function Lt(t){return at.test(t)}function lt(t){return t[0]==="*"}function ae(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function Te(t){return t.replace(/(^\/+|\/+$)/g,"")}function Ct(t,e){const n=t.default?0:ae(t.path).reduce((o,r)=>(o+=Qe,$t(r)?o+=At:Lt(r)?o+=Nt:lt(r)?o-=Qe+St:o+=Rt,o),0);return{route:t,score:n,index:e}}function xt(t){return t.map(Ct).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function ct(t,e){let n,o;const[r]=e.split("?"),i=ae(r),l=i[0]==="",s=xt(t);for(let c=0,a=s.length;c<a;c++){const h=s[c].route;let v=!1;if(h.default){o={route:h,params:{},uri:e};continue}const g=ae(h.path),y={},E=Math.max(i.length,g.length);let _=0;for(;_<E;_++){const w=g[_],T=i[_];if(w!==void 0&&lt(w)){const k=w==="*"?"*":w.slice(1);y[k]=i.slice(_).map(decodeURIComponent).join("/");break}if(T===void 0){v=!0;break}let N=at.exec(w);if(N&&!l){const k=decodeURIComponent(T);y[N[1]]=k}else if(w!==T){v=!0;break}}if(!v){n={route:h,params:y,uri:"/"+i.slice(0,_).join("/")};break}}return n||o||null}function Ht(t,e){return ct([t],e)}function Ee(t,e){return t+(e?`?${e}`:"")}function Wt(t,e){if(Ne(t,"/"))return t;const[n,o]=t.split("?"),[r]=e.split("?"),i=ae(n),l=ae(r);if(i[0]==="")return Ee(r,o);if(!Ne(i[0],".")){const a=l.concat(i).join("/");return Ee((r==="/"?"":"/")+a,o)}const s=l.concat(i),c=[];return s.forEach(a=>{a===".."?c.pop():a!=="."&&c.push(a)}),Ee("/"+c.join("/"),o)}function Je(t,e){return`${Te(e==="/"?t:`${Te(t)}/${Te(e)}`)}/`}function Dt(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Pt(t){let e;const n=t[9].default,o=Ae(n,t,t[8],null);return{c(){o&&o.c()},m(r,i){o&&o.m(r,i),e=!0},p(r,[i]){o&&o.p&&(!e||i&256)&&Le(o,n,r,r[8],e?$e(n,r[8],i,null):Ce(r[8]),null)},i(r){e||(I(o,r),e=!0)},o(r){R(o,r),e=!1},d(r){o&&o.d(r)}}}function Ft(t,e,n){let o,r,i,{$$slots:l={},$$scope:s}=e,{basepath:c="/"}=e,{url:a=null}=e;const h=Q(be),v=Q(ge),g=oe([]);G(t,g,p=>n(6,r=p));const y=oe(null);let E=!1;const _=h||oe(a?{pathname:a}:Re.location);G(t,_,p=>n(5,o=p));const w=v?v.routerBase:oe({path:c,uri:c});G(t,w,p=>n(7,i=p));const T=Tt([w,y],([p,d])=>{if(d===null)return p;const{path:u}=p,{route:H,uri:P}=d;return{path:H.default?u:H.path.replace(/\*.*$/,""),uri:P}});function N(p){const{path:d}=i;let{path:u}=p;if(p._path=u,p.path=Je(d,u),typeof window>"u"){if(E)return;const H=Ht(p,o.pathname);H&&(y.set(H),E=!0)}else g.update(H=>(H.push(p),H))}function k(p){g.update(d=>{const u=d.indexOf(p);return d.splice(u,1),d})}return h||(pt(()=>Re.listen(d=>{_.set(d.location)})),Ke(be,_)),Ke(ge,{activeRoute:y,base:w,routerBase:T,registerRoute:N,unregisterRoute:k}),t.$$set=p=>{"basepath"in p&&n(3,c=p.basepath),"url"in p&&n(4,a=p.url),"$$scope"in p&&n(8,s=p.$$scope)},t.$$.update=()=>{if(t.$$.dirty&128){const{path:p}=i;g.update(d=>(d.forEach(u=>u.path=Je(p,u._path)),d))}if(t.$$.dirty&96){const p=ct(r,o.pathname);y.set(p)}},[g,_,w,c,a,o,r,i,s,l]}class Yt extends U{constructor(e){super(),q(this,e,Ft,Pt,M,{basepath:3,url:4})}}const Mt=t=>({params:t&4,location:t&16}),et=t=>({params:t[2],location:t[4]});function tt(t){let e,n,o,r;const i=[Ut,qt],l=[];function s(c,a){return c[0]!==null?0:1}return e=s(t),n=l[e]=i[e](t),{c(){n.c(),o=He()},m(c,a){l[e].m(c,a),$(c,o,a),r=!0},p(c,a){let h=e;e=s(c),e===h?l[e].p(c,a):(We(),R(l[h],1,1,()=>{l[h]=null}),De(),n=l[e],n?n.p(c,a):(n=l[e]=i[e](c),n.c()),I(n,1),n.m(o.parentNode,o))},i(c){r||(I(n),r=!0)},o(c){R(n),r=!1},d(c){l[e].d(c),c&&A(o)}}}function qt(t){let e;const n=t[10].default,o=Ae(n,t,t[9],et);return{c(){o&&o.c()},m(r,i){o&&o.m(r,i),e=!0},p(r,i){o&&o.p&&(!e||i&532)&&Le(o,n,r,r[9],e?$e(n,r[9],i,Mt):Ce(r[9]),et)},i(r){e||(I(o,r),e=!0)},o(r){R(o,r),e=!1},d(r){o&&o.d(r)}}}function Ut(t){let e,n,o;const r=[{location:t[4]},t[2],t[3]];var i=t[0];function l(s){let c={};for(let a=0;a<r.length;a+=1)c=V(c,r[a]);return{props:c}}return i&&(e=Ve(i,l())),{c(){e&&x(e.$$.fragment),n=He()},m(s,c){e&&L(e,s,c),$(s,n,c),o=!0},p(s,c){const a=c&28?st(r,[c&16&&{location:s[4]},c&4&&Xe(s[2]),c&8&&Xe(s[3])]):{};if(i!==(i=s[0])){if(e){We();const h=e;R(h.$$.fragment,1,0,()=>{C(h,1)}),De()}i?(e=Ve(i,l()),x(e.$$.fragment),I(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else i&&e.$set(a)},i(s){o||(e&&I(e.$$.fragment,s),o=!0)},o(s){e&&R(e.$$.fragment,s),o=!1},d(s){s&&A(n),e&&C(e,s)}}}function jt(t){let e,n,o=t[1]!==null&&t[1].route===t[7]&&tt(t);return{c(){o&&o.c(),e=He()},m(r,i){o&&o.m(r,i),$(r,e,i),n=!0},p(r,[i]){r[1]!==null&&r[1].route===r[7]?o?(o.p(r,i),i&2&&I(o,1)):(o=tt(r),o.c(),I(o,1),o.m(e.parentNode,e)):o&&(We(),R(o,1,1,()=>{o=null}),De())},i(r){n||(I(o),n=!0)},o(r){R(o),n=!1},d(r){o&&o.d(r),r&&A(e)}}}function Bt(t,e,n){let o,r,{$$slots:i={},$$scope:l}=e,{path:s=""}=e,{component:c=null}=e;const{registerRoute:a,unregisterRoute:h,activeRoute:v}=Q(ge);G(t,v,w=>n(1,o=w));const g=Q(be);G(t,g,w=>n(4,r=w));const y={path:s,default:s===""};let E={},_={};return a(y),typeof window<"u"&&mt(()=>{h(y)}),t.$$set=w=>{n(13,e=V(V({},e),ke(w))),"path"in w&&n(8,s=w.path),"component"in w&&n(0,c=w.component),"$$scope"in w&&n(9,l=w.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&o&&o.route===y&&n(2,E=o.params);{const{path:w,component:T,...N}=e;n(3,_=N)}},e=ke(e),[c,o,E,_,r,v,g,y,s,l,i]}class de extends U{constructor(e){super(),q(this,e,Bt,jt,M,{path:8,component:0})}}function Gt(t){let e,n,o,r;const i=t[16].default,l=Ae(i,t,t[15],null);let s=[{href:t[0]},{"aria-current":t[2]},t[1],t[6]],c={};for(let a=0;a<s.length;a+=1)c=V(c,s[a]);return{c(){e=b("a"),l&&l.c(),Ge(e,c)},m(a,h){$(a,e,h),l&&l.m(e,null),n=!0,o||(r=ft(e,"click",t[5]),o=!0)},p(a,[h]){l&&l.p&&(!n||h&32768)&&Le(l,i,a,a[15],n?$e(i,a[15],h,null):Ce(a[15]),null),Ge(e,c=st(s,[(!n||h&1)&&{href:a[0]},(!n||h&4)&&{"aria-current":a[2]},h&2&&a[1],h&64&&a[6]]))},i(a){n||(I(l,a),n=!0)},o(a){R(l,a),n=!1},d(a){a&&A(e),l&&l.d(a),o=!1,r()}}}function Vt(t,e,n){let o;const r=["to","replace","state","getProps"];let i=Be(e,r),l,s,{$$slots:c={},$$scope:a}=e,{to:h="#"}=e,{replace:v=!1}=e,{state:g={}}=e,{getProps:y=()=>({})}=e;const{base:E}=Q(ge);G(t,E,u=>n(14,s=u));const _=Q(be);G(t,_,u=>n(13,l=u));const w=bt();let T,N,k,p;function d(u){if(w("click",u),Dt(u)){u.preventDefault();const H=l.pathname===T||v;Ot(T,{state:g,replace:H})}}return t.$$set=u=>{e=V(V({},e),ke(u)),n(6,i=Be(e,r)),"to"in u&&n(7,h=u.to),"replace"in u&&n(8,v=u.replace),"state"in u&&n(9,g=u.state),"getProps"in u&&n(10,y=u.getProps),"$$scope"in u&&n(15,a=u.$$scope)},t.$$.update=()=>{t.$$.dirty&16512&&n(0,T=h==="/"?s.uri:Wt(h,s.uri)),t.$$.dirty&8193&&n(11,N=Ne(l.pathname,T)),t.$$.dirty&8193&&n(12,k=T===l.pathname),t.$$.dirty&4096&&n(2,o=k?"page":void 0),t.$$.dirty&15361&&n(1,p=y({location:l,href:T,isPartiallyCurrent:N,isCurrent:k}))},[T,p,o,E,_,d,i,h,v,g,y,N,k,l,s,a,c]}class X extends U{constructor(e){super(),q(this,e,Vt,Gt,M,{to:7,replace:8,state:9,getProps:10})}}const Kt="/assets/Fluxus_N8qYfLrYAx.940087af.png",zt="/assets/aui.1eda498a.png",Zt="/assets/faviconbutpng.e3767602.png";function Xt(t){let e,n;return{c(){e=b("span"),e.textContent="Download now",n=b("span"),n.textContent="arrow_forward_ios",m(e,"class","text"),m(n,"class","material-symbols-outlined icon")},m(o,r){$(o,e,r),$(o,n,r)},p:S,d(o){o&&A(e),o&&A(n)}}}function Qt(t){let e,n;return{c(){e=b("span"),e.innerHTML=`<span class="text">Get Fluxus Android</span> 
        `,n=b("span"),n.textContent="arrow_forward_ios",m(e,"class","nomobile"),m(n,"class","material-symbols-outlined icon")},m(o,r){$(o,e,r),$(o,n,r)},p:S,d(o){o&&A(e),o&&A(n)}}}function Jt(t){let e,n,o,r,i,l,s,c,a,h,v,g,y,E,_,w,T,N,k,p,d,u,H,P,K,F,Y,ee,te,W,ye,Pe,we,Fe,Ye,Me,j,ce;return g=new X({props:{to:"dl",class:"active",$$slots:{default:[Xt]},$$scope:{ctx:t}}}),j=new X({props:{to:"android",class:"active",$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){e=b("main"),n=b("div"),o=b("div"),r=b("img"),l=O(),s=b("div"),c=b("h1"),c.innerHTML='<span class="c">A Fresh<br/>Execution Experience.</span>',a=O(),h=b("p"),h.innerHTML="Unrivaled Power, Unbeatable Pricepoint<br/>\u200B",v=O(),x(g.$$.fragment),y=O(),E=b("div"),E.innerHTML=`<p style="margin-bottom: -0.4em">Scroll down for more</p> 
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#ddddddaa"><path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"></path></svg>`,_=O(),w=b("div"),T=b("div"),N=b("div"),k=b("img"),d=O(),u=b("div"),u.innerHTML=`<h1>A Minimalistic UI</h1> 
        <p>Useless features shouldn&#39;t take up your entire screen.<br/>
          Only the most essential features are on the main UI - anything extra is
          just one more click away.</p>`,H=O(),P=b("div"),P.innerHTML=`<div><h1>99% of scripts simply<br/>work.</h1> 
      <p>With Fluxus, there&#39;s no need to look through dozens of pages of scripts
        to find one that supports your executor.<br/>
        Our powerful execution core supports most scripts out-of-the-box.</p></div>`,K=O(),F=b("div"),Y=b("img"),te=O(),W=b("div"),ye=b("h1"),ye.innerHTML='<underline style="text-decoration: underline; text-decoration-color: #705d8f">The</underline> executor for mobile.',Pe=O(),we=b("p"),we.innerHTML=`Fluxus Android brings the Premium Executor<br/>Experience to your
        pocket. For free.`,Fe=O(),Ye=b("br"),Me=O(),x(j.$$.fragment),he(r.src,i=Zt)||m(r,"src",i),m(r,"alt","Icon"),m(c,"class","rev"),m(h,"class","\u{1F44C}\u{1F44C}\u{1F44C} \u{1F44C}"),m(s,"class","content"),m(o,"class","container"),m(E,"class","putmeonthebottom svelte-ojupbh"),m(n,"class","page1"),he(k.src,p=Kt)||m(k,"src",p),m(k,"alt","Fuuuuuuuuuuuuuuuuuuux \u{1F92F} UI"),m(k,"style",t[0]?"display:none":""),m(N,"class","ui"),m(u,"class","centerme"),m(T,"class","inner"),m(w,"class","page2"),m(P,"class","page3"),he(Y.src,ee=zt)||m(Y,"src",ee),m(Y,"alt",""),m(Y,"style",t[0]?"display:none":""),m(W,"class","ok"),re(W,"position","relative"),re(W,"z-index","50"),m(F,"class","page4"),m(e,"class","index")},m(D,z){$(D,e,z),f(e,n),f(n,o),f(o,r),f(o,l),f(o,s),f(s,c),f(s,a),f(s,h),f(s,v),L(g,s,null),f(n,y),f(n,E),f(e,_),f(e,w),f(w,T),f(T,N),f(N,k),f(T,d),f(T,u),f(e,H),f(e,P),f(e,K),f(e,F),f(F,Y),f(F,te),f(F,W),f(W,ye),f(W,Pe),f(W,we),f(W,Fe),f(W,Ye),f(W,Me),L(j,W,null),ce=!0},p(D,[z]){const qe={};z&2&&(qe.$$scope={dirty:z,ctx:D}),g.$set(qe);const Ue={};z&2&&(Ue.$$scope={dirty:z,ctx:D}),j.$set(Ue)},i(D){ce||(I(g.$$.fragment,D),I(j.$$.fragment,D),ce=!0)},o(D){R(g.$$.fragment,D),R(j.$$.fragment,D),ce=!1},d(D){D&&A(e),C(g),C(j)}}}function en(t){return[navigator.userAgent.includes("Safari")||navigator.userAgent.includes("iPhone")]}class tn extends U{constructor(e){super(),q(this,e,en,Jt,M,{})}}const nn="/assets/logo.7f3bfbd3.png";function on(t){let e;return{c(){e=b("main"),e.innerHTML=`<div class="p1 svelte-hw0ek6"><div><h1 class="svelte-hw0ek6">A Unique Mobile Experience.</h1> 
      <p class="svelte-hw0ek6">Crafted by industry leaders, Fluxus Android is the ultimate android
        experience.</p></div> 
    <div class="putmeonthebottom svelte-hw0ek6"><p style="margin-bottom: -0.4em" class="svelte-hw0ek6">Installation</p> 
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#ddddddaa"><path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"></path></svg></div></div> 
  <div class="p2 svelte-hw0ek6"><div><h1 class="svelte-hw0ek6">Instructions</h1> 
      <p class="svelte-hw0ek6">Below, you can find a video with instructions on downloading Fluxus
        Android.</p> 
      
      <video src="https://cdn.discordapp.com/attachments/1037510861369118841/1037515767429726268/2022-11-02_19-55-01.mp4" controls="" style="/*border-radius: 16px;*/" class="svelte-hw0ek6"></video></div> 
    <div class="putmeonthebottom svelte-hw0ek6"><p style="margin-bottom: -0.4em" class="svelte-hw0ek6">Resources</p> 
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#ddddddaa"><path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"></path></svg></div></div> 
  <div class="p3 svelte-hw0ek6"><div><h1 class="svelte-hw0ek6">Resources</h1> 
      <a href="https://cdn.discordapp.com/attachments/1036294505646796891/1037543606967345162/MT_Manager.apk" target="_blank" rel="noopener noreferrer" class="svelte-hw0ek6">MT Manager</a><br/><br/> 
      <a href="https://cdn.discordapp.com/attachments/1026465307683987537/1037911047362842694/libFluxusAndroid.so" target="_blank" rel="noopener noreferrer" class="svelte-hw0ek6">libFluxusAndroid.so</a><br/><br/> 
      <a href="https://apkcombo.com/roblox/com.roblox.client/download/apk" target="_blank" rel="noopener noreferrer" class="svelte-hw0ek6">Roblox APK - APK Combo</a> 
      <p class="svelte-hw0ek6">Smali Code:</p> 
      
      <iframe src="https://yieldingfluxus.github.io/smalipage" style="border:none; width: 512px; max-width: 95vw;" frameborder="0"></iframe> 
      <br/> 
      <p class="svelte-hw0ek6">P.S. You can buy premium <a href="https://discord.gg/V7axDCK3q8" target="_blank" rel="noopener noreferrer" class="nobtn svelte-hw0ek6">in our discord</a> to skip the key system.</p></div></div>`},m(n,o){$(n,e,o)},p:S,i:S,o:S,d(n){n&&A(e)}}}class rn extends U{constructor(e){super(),q(this,e,null,on,M,{})}}function sn(t){let e;return{c(){e=b("main"),e.innerHTML=`<div class="p1 svelte-ayn7kr"><div><h1 class="svelte-ayn7kr">Download Fluxus Windows/Linux</h1> 
      <a href="https://linkvertise.com/152666/FluxusV7Installer/1" target="_blank" rel="noreferrer" class="svelte-ayn7kr">LV Installer</a> 
      <a href="https://linkvertise.com/152666/FluxusD/1" target="_blank" rel="noreferrer" class="svelte-ayn7kr">LV</a> 
      <p class="svelte-ayn7kr">Note: The above contain advertisements. Please be aware of these before
        you continue.</p></div></div>`},m(n,o){$(n,e,o)},p:S,i:S,o:S,d(n){n&&A(e)}}}class an extends U{constructor(e){super(),q(this,e,null,sn,M,{})}}function ln(t){let e;return{c(){e=xe("Fluxus Website")},m(n,o){$(n,e,o)},d(n){n&&A(e)}}}function cn(t){let e,n,o,r,i,l,s,c,a,h,v,g,y,E,_,w,T,N,k;return c=new X({props:{to:"/",$$slots:{default:[ln]},$$scope:{ctx:t}}}),{c(){e=b("main"),n=b("div"),n.innerHTML=`<div><h1 class="svelte-1wglut6">Acknowledgements</h1> 
      <p class="svelte-1wglut6">The Fluxus Website (<a href="https://github.com/YieldingFluxus/fluxuswebsite">Source</a>) was made with the help of the following open-source projects:</p></div> 
    <div class="putmeonthebottom svelte-1wglut6"><p style="margin-bottom: -0.4em" class="svelte-1wglut6">Acknowledgements</p> 
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#ddddddaa"><path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"></path></svg></div>`,o=O(),r=b("div"),i=b("div"),l=b("div"),s=b("h2"),x(c.$$.fragment),a=O(),h=b("p"),h.innerHTML=`Copyright (c) 2022 YieldingExploiter<br/> 
          <br/>
          Permission is hereby granted, free of charge, to any person obtaining a
          copy<br/>
          of this software and associated documentation files (the &quot;Software&quot;), to
          deal<br/>
          in the Software without restriction, including without limitation the rights<br/>
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br/>
          copies of the Software, and to permit persons to whom the Software is<br/>
          furnished to do so, subject to the following conditions:<br/> 
          <br/>
          The above copyright notice and this permission notice shall be included
          in all<br/>
          copies or substantial portions of the Software.<br/> 
          <br/>
          THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS
          OR<br/>
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br/>
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
          THE<br/>
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br/>
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
          FROM,<br/>
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
          IN THE<br/>
          SOFTWARE.`,v=O(),g=b("div"),g.innerHTML=`<h2 class="svelte-1wglut6"><a href="https://github.com/YieldingExploiter/no-more-dark-reader" class="svelte-1wglut6">No More Dark Reader</a></h2> 
        <p class="svelte-1wglut6">&quot;THE BEER-WARE LICENSE&quot; (Revision 42):<br/>
          &lt;pleasego@nuke.africa&gt; wrote this file. As long as you retain this
          notice you<br/>
          can do whatever you want with this stuff. If we meet some day, and you
          think<br/>
          this stuff is worth it, you can buy me a beer in return | YieldingExploiter<br/></p>`,y=O(),E=b("div"),E.innerHTML=`<h2 class="svelte-1wglut6"><a href="https://github.com/sveltejs/svelte" class="svelte-1wglut6">Svelte</a></h2> 
        <p class="svelte-1wglut6">Copyright (c) 2016-22 <a href="https://github.com/sveltejs/svelte/graphs/contributors">these people</a><br/> 
          <br/>
          Permission is hereby granted, free of charge, to any person obtaining a
          copy<br/>
          of this software and associated documentation files (the &quot;Software&quot;), to
          deal<br/>
          in the Software without restriction, including without limitation the rights<br/>
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br/>
          copies of the Software, and to permit persons to whom the Software is<br/>
          furnished to do so, subject to the following conditions:<br/> 
          <br/>
          The above copyright notice and this permission notice shall be included
          in all<br/>
          copies or substantial portions of the Software.<br/> 
          <br/>
          THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS
          OR<br/>
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br/>
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
          THE<br/>
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br/>
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
          FROM,<br/>
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
          IN THE<br/>
          SOFTWARE.</p>`,_=O(),w=b("div"),w.innerHTML=`<h2 class="svelte-1wglut6"><a href="https://github.com/microsoft/typescript" class="svelte-1wglut6">Typescript</a></h2> 
        <p class="svelte-1wglut6">Apache License
          <br/>
          Version 2.0, January 2004<br/> 
          <br/>
          http://www.apache.org/licenses/ <br/> 
          <br/>
          TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION<br/> 
          <br/>
          1. Definitions.<br/> 
          <br/>
          &quot;License&quot; shall mean the terms and conditions for use, reproduction, and
          distribution as defined by Sections 1 through 9 of this document.<br/> 
          <br/>
          &quot;Licensor&quot; shall mean the copyright owner or entity authorized by the copyright
          owner that is granting the License.<br/> 
          <br/>
          &quot;Legal Entity&quot; shall mean the union of the acting entity and all other
          entities that control, are controlled by, or are under common control with
          that entity. For the purposes of this definition, &quot;control&quot; means (i) the
          power, direct or indirect, to cause the direction or management of such
          entity, whether by contract or otherwise, or (ii) ownership of fifty percent
          (50%) or more of the outstanding shares, or (iii) beneficial ownership
          of such entity.<br/> 
          <br/>
          &quot;You&quot; (or &quot;Your&quot;) shall mean an individual or Legal Entity exercising permissions
          granted by this License.<br/> 
          <br/>
          &quot;Source&quot; form shall mean the preferred form for making modifications, including
          but not limited to software source code, documentation source, and configuration
          files.<br/> 
          <br/>
          &quot;Object&quot; form shall mean any form resulting from mechanical transformation
          or translation of a Source form, including but not limited to compiled
          object code, generated documentation, and conversions to other media types.<br/> 
          <br/>
          &quot;Work&quot; shall mean the work of authorship, whether in Source or Object form,
          made available under the License, as indicated by a copyright notice that
          is included in or attached to the work (an example is provided in the Appendix
          below).<br/> 
          <br/>
          &quot;Derivative Works&quot; shall mean any work, whether in Source or Object form,
          that is based on (or derived from) the Work and for which the editorial
          revisions, annotations, elaborations, or other modifications represent,
          as a whole, an original work of authorship. For the purposes of this License,
          Derivative Works shall not include works that remain separable from, or
          merely link (or bind by name) to the interfaces of, the Work and Derivative
          Works thereof.<br/> 
          <br/>
          &quot;Contribution&quot; shall mean any work of authorship, including the original
          version of the Work and any modifications or additions to that Work or
          Derivative Works thereof, that is intentionally submitted to Licensor for
          inclusion in the Work by the copyright owner or by an individual or Legal
          Entity authorized to submit on behalf of the copyright owner. For the purposes
          of this definition, &quot;submitted&quot; means any form of electronic, verbal, or
          written communication sent to the Licensor or its representatives, including
          but not limited to communication on electronic mailing lists, source code
          control systems, and issue tracking systems that are managed by, or on
          behalf of, the Licensor for the purpose of discussing and improving the
          Work, but excluding communication that is conspicuously marked or otherwise
          designated in writing by the copyright owner as &quot;Not a Contribution.&quot;<br/><br/> 
          <br/>
          &quot;Contributor&quot; shall mean Licensor and any individual or Legal Entity on
          behalf of whom a Contribution has been received by Licensor and subsequently
          incorporated within the Work.<br/> 
          <br/>
          2. Grant of Copyright License. Subject to the terms and conditions of this
          License, each Contributor hereby grants to You a perpetual, worldwide,
          non-exclusive, no-charge, royalty-free, irrevocable copyright license to
          reproduce, prepare Derivative Works of, publicly display, publicly perform,
          sublicense, and distribute the Work and such Derivative Works in Source
          or Object form.<br/> 
          <br/>
          3. Grant of Patent License. Subject to the terms and conditions of this
          License, each Contributor hereby grants to You a perpetual, worldwide,
          non-exclusive, no-charge, royalty-free, irrevocable (except as stated in
          this section) patent license to make, have made, use, offer to sell, sell,
          import, and otherwise transfer the Work, where such license applies only
          to those patent claims licensable by such Contributor that are necessarily
          infringed by their Contribution(s) alone or by combination of their Contribution(s)
          with the Work to which such Contribution(s) was submitted. If You institute
          patent litigation against any entity (including a cross-claim or counterclaim
          in a lawsuit) alleging that the Work or a Contribution incorporated within
          the Work constitutes direct or contributory patent infringement, then any
          patent licenses granted to You under this License for that Work shall terminate
          as of the date such litigation is filed.<br/><br/> 
          <br/>
          4. Redistribution. You may reproduce and distribute copies of the Work
          or Derivative Works thereof in any medium, with or without modifications,
          and in Source or Object form, provided that You meet the following conditions:<br/> 
          <br/>
          You must give any other recipients of the Work or Derivative Works a copy
          of this License; and<br/> 
          <br/>
          You must cause any modified files to carry prominent notices stating that
          You changed the files; and<br/> 
          <br/>
          You must retain, in the Source form of any Derivative Works that You distribute,
          all copyright, patent, trademark, and attribution notices from the Source
          form of the Work, excluding those notices that do not pertain to any part
          of the Derivative Works; and<br/> 
          <br/>
          If the Work includes a &quot;NOTICE&quot; text file as part of its distribution,
          then any Derivative Works that You distribute must include a readable copy
          of the attribution notices contained within such NOTICE file, excluding
          those notices that do not pertain to any part of the Derivative Works,
          in at least one of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or documentation,
          if provided along with the Derivative Works; or, within a display generated
          by the Derivative Works, if and wherever such third-party notices normally
          appear. The contents of the NOTICE file are for informational purposes
          only and do not modify the License. You may add Your own attribution notices
          within Derivative Works that You distribute, alongside or as an addendum
          to the NOTICE text from the Work, provided that such additional attribution
          notices cannot be construed as modifying the License. You may add Your
          own copyright statement to Your modifications and may provide additional
          or different license terms and conditions for use, reproduction, or distribution
          of Your modifications, or for any such Derivative Works as a whole, provided
          Your use, reproduction, and distribution of the Work otherwise complies
          with the conditions stated in this License.<br/><br/> 
          <br/>
          5. Submission of Contributions. Unless You explicitly state otherwise,
          any Contribution intentionally submitted for inclusion in the Work by You
          to the Licensor shall be under the terms and conditions of this License,
          without any additional terms or conditions. Notwithstanding the above,
          nothing herein shall supersede or modify the terms of any separate license
          agreement you may have executed with Licensor regarding such Contributions.<br/> 
          <br/>
          6. Trademarks. This License does not grant permission to use the trade
          names, trademarks, service marks, or product names of the Licensor, except
          as required for reasonable and customary use in describing the origin of
          the Work and reproducing the content of the NOTICE file.<br/> 
          <br/>
          7. Disclaimer of Warranty. Unless required by applicable law or agreed
          to in writing, Licensor provides the Work (and each Contributor provides
          its Contributions) on an &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS
          OF ANY KIND, either express or implied, including, without limitation,
          any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY,
          or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining
          the appropriateness of using or redistributing the Work and assume any
          risks associated with Your exercise of permissions under this License.<br/> 
          <br/>
          8. Limitation of Liability. In no event and under no legal theory, whether
          in tort (including negligence), contract, or otherwise, unless required
          by applicable law (such as deliberate and grossly negligent acts) or agreed
          to in writing, shall any Contributor be liable to You for damages, including
          any direct, indirect, special, incidental, or consequential damages of
          any character arising as a result of this License or out of the use or
          inability to use the Work (including but not limited to damages for loss
          of goodwill, work stoppage, computer failure or malfunction, or any and
          all other commercial damages or losses), even if such Contributor has been
          advised of the possibility of such damages.<br/> 
          <br/>
          9. Accepting Warranty or Additional Liability. While redistributing the
          Work or Derivative Works thereof, You may choose to offer, and charge a
          fee for, acceptance of support, warranty, indemnity, or other liability
          obligations and/or rights consistent with this License. However, in accepting
          such obligations, You may act only on Your own behalf and on Your sole
          responsibility, not on behalf of any other Contributor, and only if You
          agree to indemnify, defend, and hold each Contributor harmless for any
          liability incurred by, or claims asserted against, such Contributor by
          reason of your accepting any such warranty or additional liability.<br/> 
          <br/>
          END OF TERMS AND CONDITIONS</p>`,T=O(),N=b("div"),N.innerHTML=`<h2 class="svelte-1wglut6"><a href="https://github.com/vitejs/vite" class="svelte-1wglut6">Vite</a></h2> 
        <p class="svelte-1wglut6">MIT License<br/> 
          <br/>
          Copyright (c) 2019-present, Yuxi (Evan) You and Vite contributors<br/> 
          <br/>
          Permission is hereby granted, free of charge, to any person obtaining a
          copy<br/>
          of this software and associated documentation files (the &quot;Software&quot;), to
          deal<br/>
          in the Software without restriction, including without limitation the rights<br/>
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br/>
          copies of the Software, and to permit persons to whom the Software is<br/>
          furnished to do so, subject to the following conditions:<br/> 
          <br/>
          The above copyright notice and this permission notice shall be included
          in all<br/>
          copies or substantial portions of the Software.<br/> 
          <br/>
          THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS
          OR<br/>
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br/>
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
          THE<br/>
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br/>
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
          FROM,<br/>
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
          IN THE<br/>
          SOFTWARE.</p>`,m(n,"class","p1 svelte-1wglut6"),m(s,"class","svelte-1wglut6"),m(h,"class","svelte-1wglut6"),m(l,"class","license"),m(g,"class","license"),m(E,"class","license"),m(w,"class","license"),m(N,"class","license"),m(i,"class","licenses svelte-1wglut6"),m(r,"class","p2 svelte-1wglut6")},m(p,d){$(p,e,d),f(e,n),f(e,o),f(e,r),f(r,i),f(i,l),f(l,s),L(c,s,null),f(l,a),f(l,h),f(i,v),f(i,g),f(i,y),f(i,E),f(i,_),f(i,w),f(i,T),f(i,N),k=!0},p(p,[d]){const u={};d&1&&(u.$$scope={dirty:d,ctx:p}),c.$set(u)},i(p){k||(I(c.$$.fragment,p),k=!0)},o(p){R(c.$$.fragment,p),k=!1},d(p){p&&A(e),C(c)}}}class un extends U{constructor(e){super(),q(this,e,null,cn,M,{})}}function fn(t){let e,n,o;return{c(){e=b("span"),n=b("img"),he(n.src,o=nn)||m(n,"src",o),m(n,"alt","Fluxus"),re(n,"height","1.4em"),re(n,"transform","scale(1.5)"),re(n,"padding-top","1px"),m(e,"class","cont")},m(r,i){$(r,e,i),f(e,n)},p:S,d(r){r&&A(e)}}}function dn(t){let e;return{c(){e=b("span"),e.textContent="Download",m(e,"class","cont")},m(n,o){$(n,e,o)},p:S,d(n){n&&A(e)}}}function hn(t){let e;return{c(){e=b("span"),e.textContent="Android",m(e,"class","cont")},m(n,o){$(n,e,o)},p:S,d(n){n&&A(e)}}}function pn(t){let e,n;return e=new tn({}),{c(){x(e.$$.fragment)},m(o,r){L(e,o,r),n=!0},i(o){n||(I(e.$$.fragment,o),n=!0)},o(o){R(e.$$.fragment,o),n=!1},d(o){C(e,o)}}}function mn(t){let e,n;return e=new an({}),{c(){x(e.$$.fragment)},m(o,r){L(e,o,r),n=!0},i(o){n||(I(e.$$.fragment,o),n=!0)},o(o){R(e.$$.fragment,o),n=!1},d(o){C(e,o)}}}function bn(t){let e,n;return e=new rn({}),{c(){x(e.$$.fragment)},m(o,r){L(e,o,r),n=!0},i(o){n||(I(e.$$.fragment,o),n=!0)},o(o){R(e.$$.fragment,o),n=!1},d(o){C(e,o)}}}function gn(t){let e,n;return e=new un({}),{c(){x(e.$$.fragment)},m(o,r){L(e,o,r),n=!0},i(o){n||(I(e.$$.fragment,o),n=!0)},o(o){R(e.$$.fragment,o),n=!1},d(o){C(e,o)}}}function yn(t){let e,n,o,r,i,l,s,c,a,h,v,g,y,E,_,w,T,N,k,p;return o=new X({props:{to:"/",$$slots:{default:[fn]},$$scope:{ctx:t}}}),i=new X({props:{to:"dl",class:"nomobile",$$slots:{default:[dn]},$$scope:{ctx:t}}}),s=new X({props:{to:"android",$$slots:{default:[hn]},$$scope:{ctx:t}}}),y=new de({props:{path:"/",$$slots:{default:[pn]},$$scope:{ctx:t}}}),_=new de({props:{path:"/dl",$$slots:{default:[mn]},$$scope:{ctx:t}}}),T=new de({props:{path:"/android",$$slots:{default:[bn]},$$scope:{ctx:t}}}),k=new de({props:{path:"/acknowledgements",$$slots:{default:[gn]},$$scope:{ctx:t}}}),{c(){e=b("div"),n=b("nav"),x(o.$$.fragment),r=O(),x(i.$$.fragment),l=O(),x(s.$$.fragment),c=O(),a=b("a"),h=b("span"),h.textContent="Discord",v=O(),g=b("div"),x(y.$$.fragment),E=O(),x(_.$$.fragment),w=O(),x(T.$$.fragment),N=O(),x(k.$$.fragment),m(h,"class","cont"),m(a,"href",t[1]),m(a,"class","nomobile"),m(e,"class","navContainer"),m(g,"class","page")},m(d,u){$(d,e,u),f(e,n),L(o,n,null),f(n,r),L(i,n,null),f(n,l),L(s,n,null),f(n,c),f(n,a),f(a,h),$(d,v,u),$(d,g,u),L(y,g,null),f(g,E),L(_,g,null),f(g,w),L(T,g,null),f(g,N),L(k,g,null),p=!0},p(d,u){const H={};u&16&&(H.$$scope={dirty:u,ctx:d}),o.$set(H);const P={};u&16&&(P.$$scope={dirty:u,ctx:d}),i.$set(P);const K={};u&16&&(K.$$scope={dirty:u,ctx:d}),s.$set(K),(!p||u&2)&&m(a,"href",d[1]);const F={};u&16&&(F.$$scope={dirty:u,ctx:d}),y.$set(F);const Y={};u&16&&(Y.$$scope={dirty:u,ctx:d}),_.$set(Y);const ee={};u&16&&(ee.$$scope={dirty:u,ctx:d}),T.$set(ee);const te={};u&16&&(te.$$scope={dirty:u,ctx:d}),k.$set(te)},i(d){p||(I(o.$$.fragment,d),I(i.$$.fragment,d),I(s.$$.fragment,d),I(y.$$.fragment,d),I(_.$$.fragment,d),I(T.$$.fragment,d),I(k.$$.fragment,d),p=!0)},o(d){R(o.$$.fragment,d),R(i.$$.fragment,d),R(s.$$.fragment,d),R(y.$$.fragment,d),R(_.$$.fragment,d),R(T.$$.fragment,d),R(k.$$.fragment,d),p=!1},d(d){d&&A(e),C(o),C(i),C(s),d&&A(v),d&&A(g),C(y),C(_),C(T),C(k)}}}function wn(t){let e,n;return e=new Yt({props:{url:t[0],$$slots:{default:[yn]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},m(o,r){L(e,o,r),n=!0},p(o,[r]){const i={};r&1&&(i.url=o[0]),r&18&&(i.$$scope={dirty:r,ctx:o}),e.$set(i)},i(o){n||(I(e.$$.fragment,o),n=!0)},o(o){R(e.$$.fragment,o),n=!1},d(o){C(e,o)}}}function vn(t,e,n){let o;setInterval(()=>{o=Math.min(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)},500);const r=()=>{(!o||Math.floor(o)===0)&&(o=window.screenY),document.body.setAttribute("data-z",window.scrollY===0?"true":"false"),document.body.setAttribute("data-n",Math.floor((window.scrollY+64)/o).toString()),document.body.setAttribute("data-nb",Math.floor((window.scrollY+o)/o).toString())};window.addEventListener("scroll",r),r();let{url:i=""}=e,l="https://discord.gg/GNHbGPbah2";return fetch("https://fluxteam.net/external-files/discord.php").then(s=>s.text()).then(s=>n(1,l=`https://discord.gg/${s}`)),t.$$set=s=>{"url"in s&&n(0,i=s.url)},[i,l]}class _n extends U{constructor(e){super(),q(this,e,vn,wn,M,{url:0})}}new _n({target:document.getElementById("app")});

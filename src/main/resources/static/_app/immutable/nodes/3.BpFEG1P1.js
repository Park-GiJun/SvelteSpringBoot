import{n as A,x as N,y as z,s as D,r as R,b as F}from"../chunks/scheduler.BCVBOh_d.js";import{S as G,i as H,e as y,s as O,c as w,b as I,d as u,a as v,g,n as J,f as d,o as j}from"../chunks/index.DTdc6F5z.js";import{w as K}from"../chunks/index.GezKuID8.js";const U=typeof window<"u";let L=U?()=>window.performance.now():()=>Date.now(),q=U?t=>requestAnimationFrame(t):A;const x=new Set;function $(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&q($)}function M(t){let e;return x.size===0&&q($),{promise:new Promise(l=>{x.add(e={c:t,f:l})}),abort(){x.delete(e)}}}function P(t){return Object.prototype.toString.call(t)==="[object Date]"}function Q(t){const e=t-1;return e*e*e+1}function S(t,e){if(t===e||t!==t)return()=>t;const l=typeof t;if(l!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const s=e.map((r,i)=>S(t[i],r));return r=>s.map(i=>i(r))}if(l==="object"){if(!t||!e)throw new Error("Object cannot be null");if(P(t)&&P(e)){t=t.getTime(),e=e.getTime();const i=e-t;return o=>new Date(t+o*i)}const s=Object.keys(e),r={};return s.forEach(i=>{r[i]=S(t[i],e[i])}),i=>{const o={};return s.forEach(m=>{o[m]=r[m](i)}),o}}if(l==="number"){const s=e-t;return r=>t+r*s}throw new Error(`Cannot interpolate ${l} values`)}function V(t,e={}){const l=K(t);let s,r=t;function i(o,m){if(t==null)return l.set(t=o),Promise.resolve();r=o;let a=s,f=!1,{delay:k=0,duration:p=400,easing:h=z,interpolate:E=S}=N(N({},e),m);if(p===0)return a&&(a.abort(),a=null),l.set(t=r),Promise.resolve();const b=L()+k;let _;return s=M(T=>{if(T<b)return!0;f||(_=E(t,o),typeof p=="function"&&(p=p(t,o)),f=!0),a&&(a.abort(),a=null);const C=T-b;return C>p?(l.set(t=o),!1):(l.set(t=_(h(C/p))),!0)}),s.promise}return{set:i,update:(o,m)=>i(o(r,t),m),subscribe:l.subscribe}}function W(t){let e,l,s,r="0%",i,o,m="25%",a,f,k="50%",p,h,E="75%",b,_,T="100%",C,B;return{c(){e=y("progress"),l=O(),s=y("button"),s.textContent=r,i=O(),o=y("button"),o.textContent=m,a=O(),f=y("button"),f.textContent=k,p=O(),h=y("button"),h.textContent=E,b=O(),_=y("button"),_.textContent=T,this.h()},l(n){e=w(n,"PROGRESS",{class:!0}),I(e).forEach(u),l=v(n),s=w(n,"BUTTON",{"data-svelte-h":!0}),g(s)!=="svelte-1qe5w7f"&&(s.textContent=r),i=v(n),o=w(n,"BUTTON",{"data-svelte-h":!0}),g(o)!=="svelte-12jl1ff"&&(o.textContent=m),a=v(n),f=w(n,"BUTTON",{"data-svelte-h":!0}),g(f)!=="svelte-1j98abj"&&(f.textContent=k),p=v(n),h=w(n,"BUTTON",{"data-svelte-h":!0}),g(h)!=="svelte-1h1h5gp"&&(h.textContent=E),b=v(n),_=w(n,"BUTTON",{"data-svelte-h":!0}),g(_)!=="svelte-1r2qk23"&&(_.textContent=T),this.h()},h(){e.value=t[0],J(e,"class","svelte-1iolzgv")},m(n,c){d(n,e,c),d(n,l,c),d(n,s,c),d(n,i,c),d(n,o,c),d(n,a,c),d(n,f,c),d(n,p,c),d(n,h,c),d(n,b,c),d(n,_,c),C||(B=[j(s,"click",t[2]),j(o,"click",t[3]),j(f,"click",t[4]),j(h,"click",t[5]),j(_,"click",t[6])],C=!0)},p(n,[c]){c&1&&(e.value=n[0])},i:A,o:A,d(n){n&&(u(e),u(l),u(s),u(i),u(o),u(a),u(f),u(p),u(h),u(b),u(_)),C=!1,R(B)}}}function X(t,e,l){let s;const r=V(0,{duration:400,easing:Q});return F(t,r,k=>l(0,s=k)),[s,r,()=>r.set(0),()=>r.set(.25),()=>r.set(.5),()=>r.set(.75),()=>r.set(1)]}class et extends G{constructor(e){super(),H(this,e,X,W,D,{})}}export{et as component};

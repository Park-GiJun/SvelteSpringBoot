import{s as M,n as p,r as S}from"../chunks/scheduler.LC6wQ9wn.js";import{S as q,i as D,e as w,s as y,c as k,b as R,d as _,a as C,g as E,j as x,f as d,l as T,q as G,o as F}from"../chunks/index.OgIxAEEQ.js";import{e as A}from"../chunks/each.D6YF6ztN.js";function L(i,n,s){const l=i.slice();return l[10]=n[s],l}function I(i,n,s){const l=i.slice();return l[13]=n[s],l}function N(i){let n;return{c(){n=w("td"),this.h()},l(s){n=k(s,"TD",{class:!0}),R(n).forEach(_),this.h()},h(){x(n,"class","svelte-1xevxos")},m(s,l){d(s,n,l)},p,d(s){s&&_(n)}}}function j(i){let n,s,l=A(i[0]),a=[];for(let r=0;r<l.length;r+=1)a[r]=N(I(i,l,r));return{c(){n=w("tr");for(let r=0;r<a.length;r+=1)a[r].c();s=y(),this.h()},l(r){n=k(r,"TR",{class:!0});var o=R(n);for(let h=0;h<a.length;h+=1)a[h].l(o);s=C(o),o.forEach(_),this.h()},h(){x(n,"class","svelte-1xevxos")},m(r,o){d(r,n,o);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(n,null);F(n,s)},p,d(r){r&&_(n),G(a,r)}}}function O(i){let n,s,l,a="Reset",r,o,h="Start",b,g,f=A(i[1]),e=[];for(let t=0;t<f.length;t+=1)e[t]=j(L(i,f,t));return{c(){n=w("table");for(let t=0;t<e.length;t+=1)e[t].c();s=y(),l=w("button"),l.textContent=a,r=y(),o=w("button"),o.textContent=h,this.h()},l(t){n=k(t,"TABLE",{class:!0,id:!0});var u=R(n);for(let c=0;c<e.length;c+=1)e[c].l(u);u.forEach(_),s=C(t),l=k(t,"BUTTON",{"data-svelte-h":!0}),E(l)!=="svelte-jn3jzs"&&(l.textContent=a),r=C(t),o=k(t,"BUTTON",{"data-svelte-h":!0}),E(o)!=="svelte-nrluse"&&(o.textContent=h),this.h()},h(){x(n,"class","table svelte-1xevxos"),x(n,"id","table")},m(t,u){d(t,n,u);for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(n,null);d(t,s,u),d(t,l,u),d(t,r,u),d(t,o,u),b||(g=[T(l,"click",i[2]),T(o,"click",i[3])],b=!0)},p(t,[u]){if(u&1){f=A(t[1]);let c;for(c=0;c<f.length;c+=1){const B=L(t,f,c);e[c]?e[c].p(B,u):(e[c]=j(B),e[c].c(),e[c].m(n,null))}for(;c<e.length;c+=1)e[c].d(1);e.length=f.length}},i:p,o:p,d(t){t&&(_(n),_(s),_(l),_(r),_(o)),G(e,t),b=!1,S(g)}}}let v=19;function m(i,n,s){const l=document.getElementById("table");l.rows[i].cells[n].style.backgroundColor=s}function U(i){let n=Array.from({length:9},(f,e)=>e),s=Array.from({length:20},(f,e)=>e),l=0,a=4,r=!0;const o=new Array(20).fill(0).map(()=>new Array(9).fill(0));function h(){document.getElementById("table"),console.log("reset"),l=0,a=4;for(let f=0;f<s.length;f++)for(let e=0;e<n.length;e++)m(f,e,"black"),o[f][e]=0;console.table(o)}function b(){r=!0,l=0,a=4,o[l][a]=1,o[l][a]===1?m(l,a,"white"):m(l,a,"black")}function g(){if(o[v].every(e=>e===3)){for(let e=v;e>0;e--)for(let t=0;t<n.length;t++)o[e][t]=o[e-1][t],m(e,t,o[e][t]===3?"Gray":"black");o[0].fill(0);for(let e=0;e<n.length;e++)m(0,e,"black")}}return document.addEventListener("keydown",function(f){if(!r)return;let e=l,t=a;switch(f.key){case"ArrowLeft":t=Math.max(a-1,0);break;case"ArrowRight":t=Math.min(a+1,n.length-1);break;case"ArrowDown":if(l<v&&o[l+1][a]===3){r=!1,m(l,a,"Gray"),o[l][a]=3,g();break}e=Math.min(l+1,s.length-1);break}r&&(o[l][a]=0,(e<s.length-1||e===s.length-1&&o[e][t]!==3)&&(o[e][t]=1),o[e][t]===1&&(m(l,a,"black"),l=e,a=t,m(l,a,"white"))),e===v&&e===s.length-1&&o[e][t]!==3&&(r=!1,m(l,a,"Gray"),o[l][a]=3,g()),r||b(),console.table(o)}),[n,s,h,b]}class H extends q{constructor(n){super(),D(this,n,U,O,M,{})}}export{H as component};

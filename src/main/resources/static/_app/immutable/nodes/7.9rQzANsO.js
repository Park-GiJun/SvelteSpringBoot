import{s as M,n as O,b as F,o as J}from"../chunks/scheduler.LC6wQ9wn.js";import{S as K,i as Q,e as b,s as y,m as B,c as C,g as I,a as E,b as D,n as R,d as u,j,f as k,o as v,l as L,p as V,q as S,r as W}from"../chunks/index.DkeaYaFh.js";import{e as U}from"../chunks/each.D6YF6ztN.js";import{n as x}from"../chunks/NickName.C9v6VMUE.js";import{g as X}from"../chunks/entry.BwyNxW0p.js";function A(s,t,a){const l=s.slice();return l[6]=t[a],l}function Y(s){let t,a="정보가 없습니다.";return{c(){t=b("p"),t.textContent=a},l(l){t=C(l,"P",{"data-svelte-h":!0}),I(t)!=="svelte-68re3e"&&(t.textContent=a)},m(l,n){k(l,t,n)},p:O,d(l){l&&u(t)}}}function Z(s){let t,a=U(s[0]),l=[];for(let n=0;n<a.length;n+=1)l[n]=G(A(s,a,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();t=S()},l(n){for(let r=0;r<l.length;r+=1)l[r].l(n);t=S()},m(n,r){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(n,r);k(n,t,r)},p(n,r){if(r&5){a=U(n[0]);let o;for(o=0;o<a.length;o+=1){const h=A(n,a,o);l[o]?l[o].p(h,r):(l[o]=G(h),l[o].c(),l[o].m(t.parentNode,t))}for(;o<l.length;o+=1)l[o].d(1);l.length=a.length}},d(n){n&&u(t),W(l,n)}}}function G(s){let t,a,l=s[6].whitePlayer+"",n,r,o,h=s[6].blackPlayer+"",_,i,p,m=s[6].id+"",P,d,N,w,g,q;function T(){return s[4](s[6])}return{c(){t=b("div"),a=b("p"),n=B(l),r=y(),o=b("p"),_=B(h),i=y(),p=b("button"),P=B(m),d=B("입장"),N=y(),this.h()},l(f){t=C(f,"DIV",{id:!0,class:!0});var e=D(t);a=C(e,"P",{});var c=D(a);n=R(c,l),c.forEach(u),r=E(e),o=C(e,"P",{});var H=D(o);_=R(H,h),H.forEach(u),i=E(e),p=C(e,"BUTTON",{class:!0});var z=D(p);P=R(z,m),d=R(z,"입장"),z.forEach(u),N=E(e),e.forEach(u),this.h()},h(){j(p,"class","svelte-ua1lvf"),j(t,"id",w=s[6].id),j(t,"class","roomDiv svelte-ua1lvf")},m(f,e){k(f,t,e),v(t,a),v(a,n),v(t,r),v(t,o),v(o,_),v(t,i),v(t,p),v(p,P),v(p,d),v(t,N),g||(q=L(p,"click",T),g=!0)},p(f,e){s=f,e&1&&l!==(l=s[6].whitePlayer+"")&&V(n,l),e&1&&h!==(h=s[6].blackPlayer+"")&&V(_,h),e&1&&m!==(m=s[6].id+"")&&V(P,m),e&1&&w!==(w=s[6].id)&&j(t,"id",w)},d(f){f&&u(t),g=!1,q()}}}function $(s){let t,a="Room",l,n,r,o,h,_,i="체스",p,m,P,d,N="방 만들기",w,g;function q(e,c){return e[0].length>0?Z:Y}let T=q(s),f=T(s);return{c(){t=b("h2"),t.textContent=a,l=y(),n=b("p"),r=B("Hello, "),o=B(s[1]),h=y(),_=b("a"),_.textContent=i,p=y(),m=b("div"),f.c(),P=y(),d=b("button"),d.textContent=N,this.h()},l(e){t=C(e,"H2",{"data-svelte-h":!0}),I(t)!=="svelte-7z6azt"&&(t.textContent=a),l=E(e),n=C(e,"P",{});var c=D(n);r=R(c,"Hello, "),o=R(c,s[1]),c.forEach(u),h=E(e),_=C(e,"A",{href:!0,"data-svelte-h":!0}),I(_)!=="svelte-d7n86b"&&(_.textContent=i),p=E(e),m=C(e,"DIV",{class:!0});var H=D(m);f.l(H),H.forEach(u),P=E(e),d=C(e,"BUTTON",{"data-svelte-h":!0}),I(d)!=="svelte-12n90lq"&&(d.textContent=N),this.h()},h(){j(_,"href","/ChessBoard"),j(m,"class","roomsDiv svelte-ua1lvf")},m(e,c){k(e,t,c),k(e,l,c),k(e,n,c),v(n,r),v(n,o),k(e,h,c),k(e,_,c),k(e,p,c),k(e,m,c),f.m(m,null),k(e,P,c),k(e,d,c),w||(g=L(d,"click",s[3]),w=!0)},p(e,[c]){c&2&&V(o,e[1]),T===(T=q(e))&&f?f.p(e,c):(f.d(1),f=T(e),f&&(f.c(),f.m(m,null)))},i:O,o:O,d(e){e&&(u(t),u(l),u(n),u(h),u(_),u(p),u(m),u(P),u(d)),f.d(),w=!1,g()}}}function ee(s,t,a){let l;F(s,x,i=>a(1,l=i));let n=[],r;x.subscribe(i=>r=i),J(async()=>{const i=await fetch("/api/roomLists");a(0,n=[]),a(0,n=await i.json())});function o(i){X(`/ChessBoard?roomId=${i}`)}function h(){fetch(`/api/createRoom?nickName=${r}`,{method:"GET"}).then(i=>{if(!i.ok)throw new Error("Network response was not ok.");return i.json()}).then(i=>{a(0,n=i)})}return[n,l,o,h,i=>o(i.id)]}class ae extends K{constructor(t){super(),Q(this,t,ee,$,M,{})}}export{ae as component};
import{s as k,n as u,b as y}from"../chunks/scheduler.LC6wQ9wn.js";import{S as z,i as N,e as h,s as x,m as C,c as _,g as v,a as b,b as P,n as H,d as l,j as S,f as r,o as $,p as j}from"../chunks/index.OgIxAEEQ.js";import{n as q}from"../chunks/NickName.C9v6VMUE.js";function A(i){let a,m="Room",o,s,f,p,c,n,d="체스";return{c(){a=h("h2"),a.textContent=m,o=x(),s=h("p"),f=C("Hello, "),p=C(i[0]),c=x(),n=h("a"),n.textContent=d,this.h()},l(t){a=_(t,"H2",{"data-svelte-h":!0}),v(a)!=="svelte-7z6azt"&&(a.textContent=m),o=b(t),s=_(t,"P",{});var e=P(s);f=H(e,"Hello, "),p=H(e,i[0]),e.forEach(l),c=b(t),n=_(t,"A",{href:!0,"data-svelte-h":!0}),v(n)!=="svelte-d7n86b"&&(n.textContent=d),this.h()},h(){S(n,"href","/ChessBoard")},m(t,e){r(t,a,e),r(t,o,e),r(t,s,e),$(s,f),$(s,p),r(t,c,e),r(t,n,e)},p(t,[e]){e&1&&j(p,t[0])},i:u,o:u,d(t){t&&(l(a),l(o),l(s),l(c),l(n))}}}function B(i,a,m){let o;return y(i,q,s=>m(0,o=s)),[o]}class w extends z{constructor(a){super(),N(this,a,B,A,k,{})}}export{w as component};
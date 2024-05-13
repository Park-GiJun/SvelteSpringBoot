var J=Object.defineProperty;var Z=(h,t,e)=>t in h?J(h,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):h[t]=e;var X=(h,t,e)=>(Z(h,typeof t!="symbol"?t+"":t,e),e);import{s as O,n as V,b as t1,o as e1}from"../chunks/scheduler.LC6wQ9wn.js";import{S as q,i as G,e as z,m as A,s as W,c as j,b as B,n as R,d as u,a as U,g as o1,j as i1,f as $,o as g,p as Y,y as s1,z as r1,A as l1,t as n1,h as a1,B as f1}from"../chunks/index.DkeaYaFh.js";import{n as h1}from"../chunks/NickName.C9v6VMUE.js";class r{constructor(t,e,s,i,n){X(this,"deadUnits",null);this.side=t,this.color=e,this.grade=s,this.svg=i,this.position=n}getSvgBlob(){return new Blob([this.svg],{type:"image/svg+xml;charset=utf-8"})}getMovablePositions(t){switch(this.grade){case"Queen":return this.getMovablePositionsForQueen(t);case"King":return this.getMovablePositionsForKing(t);case"Bishop":return this.getMovablePositionsForBishop(t);case"Rook":return this.getMovablePositionsForRook(t);case"Knight":return this.getMovablePositionsForKnight(t);case"Pawn":return this.getMovablePositionsForPawn(t);default:return[]}}getKillablePositions(t,e){let s=[];if(this.getMovablePositions(t).forEach(i=>{e.some(n=>n.position.x===i.x&&n.position.y===i.y)&&s.push(i)}),this.grade==="Pawn"){let i=this.color==="Black"?1:-1;[{x:this.position.x+1,y:this.position.y+i},{x:this.position.x-1,y:this.position.y+i}].forEach(a=>{e.some(k=>k.position.x===a.x&&k.position.y===a.y)&&s.push(a)})}return s}getMovablePositionsForQueen(t){return this.getMovablePositionsInDirections(t,this.directionsForQueenAndKing())}getMovablePositionsForKing(t){return this.getMovablePositionsInDirections(t,this.directionsForQueenAndKing(),1)}getMovablePositionsForBishop(t){return this.getMovablePositionsInDirections(t,this.directionsForBishop())}getMovablePositionsForRook(t){return this.getMovablePositionsInDirections(t,this.directionsForRook())}getMovablePositionsForKnight(t){return this.getMovablePositionsInDirections(t,this.directionsForKnight(),1)}getMovablePositionsForPawn(t){let e=[],s=this.color==="Black"?1:-1,i=this.color==="Black"?1:6,n={x:this.position.x,y:this.position.y+s};if(this.isPositionValidAndUnoccupied(n.x,n.y,t)&&(e.push(n),this.position.y===i)){let a={x:this.position.x,y:this.position.y+2*s};this.isPositionValidAndUnoccupied(a.x,a.y,t)&&e.push(a)}return e}getMovablePositionsInDirections(t,e,s=8){let i=[];return e.forEach(n=>{for(let a=1;a<=s;a++){let k=this.position.x+n.dx*a,w=this.position.y+n.dy*a;if(!this.isPositionValidAndUnoccupied(k,w,t))break;i.push({x:k,y:w})}}),i}isPositionValidAndUnoccupied(t,e,s){return t>=0&&t<8&&e>=0&&e<8&&!s.some(i=>i.position.x===t&&i.position.y===e)}directionsForQueenAndKing(){return[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:1},{dx:1,dy:-1},{dx:-1,dy:1},{dx:-1,dy:-1}]}directionsForBishop(){return[{dx:1,dy:1},{dx:1,dy:-1},{dx:-1,dy:1},{dx:-1,dy:-1}]}directionsForRook(){return[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}]}directionsForKnight(){return[{dx:1,dy:2},{dx:-1,dy:2},{dx:1,dy:-2},{dx:-1,dy:-2},{dx:-2,dy:1},{dx:-2,dy:-1},{dx:2,dy:1},{dx:2,dy:-1}]}}function c1(h){let t,e,s,i,n,a,k,w=h[0]?"white":"black",_,I,m,C,L=h[2].id+"",y,v,l,o=h[2].whitePlayer+"",E,F,b,K=h[2].blackPlayer+"",P,x,M,p='<canvas height="700" id="chessboard" width="700" class="svelte-kv6fzl"></canvas> <canvas height="700" id="chessUnits" width="700" class="svelte-kv6fzl"></canvas>';return{c(){t=z("div"),e=z("p"),s=A("안녕, "),i=A(h[1]),n=W(),a=z("p"),k=A("turn : "),_=A(w),I=W(),m=z("div"),C=z("p"),y=A(L),v=W(),l=z("p"),E=A(o),F=W(),b=z("p"),P=A(K),x=W(),M=z("div"),M.innerHTML=p,this.h()},l(f){t=j(f,"DIV",{});var c=B(t);e=j(c,"P",{});var d=B(e);s=R(d,"안녕, "),i=R(d,h[1]),d.forEach(u),n=U(c),a=j(c,"P",{});var D=B(a);k=R(D,"turn : "),_=R(D,w),D.forEach(u),c.forEach(u),I=U(f),m=j(f,"DIV",{});var H=B(m);C=j(H,"P",{});var Q=B(C);y=R(Q,L),Q.forEach(u),v=U(H),l=j(H,"P",{});var S=B(l);E=R(S,o),S.forEach(u),F=U(H),b=j(H,"P",{});var T=B(b);P=R(T,K),T.forEach(u),H.forEach(u),x=U(f),M=j(f,"DIV",{class:!0,"data-svelte-h":!0}),o1(M)!=="svelte-pyi36w"&&(M.innerHTML=p),this.h()},h(){i1(M,"class","canvas-container svelte-kv6fzl")},m(f,c){$(f,t,c),g(t,e),g(e,s),g(e,i),g(t,n),g(t,a),g(a,k),g(a,_),$(f,I,c),$(f,m,c),g(m,C),g(C,y),g(m,v),g(m,l),g(l,E),g(m,F),g(m,b),g(b,P),$(f,x,c),$(f,M,c)},p(f,[c]){c&2&&Y(i,f[1]),c&1&&w!==(w=f[0]?"white":"black")&&Y(_,w)},i:V,o:V,d(f){f&&(u(t),u(I),u(m),u(x),u(M))}}}function N(){const h=document.getElementById("chessboard");if(h.getContext){const t=h.getContext("2d");let s=h.width/8;for(let i=0;i<8;i++)for(let n=0;n<8;n++)t.fillStyle=(i+n)%2===0?"WHITE":"skyblue",t.fillRect(n*s,i*s,s,s)}}async function d1(h){const e=await(await fetch("/api/roomInfo")).json();console.log(e)}function p1(h,t,e){let s;t1(h,h1,C=>e(1,s=C));let i=[new r("Center","Black","King",`
<svg xmlns="http://www.w3.org/2000/svg"  width="45" height="45">
  <g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
    <path d="M 22.5,11.63 L 22.5,6" style="fill:none; stroke:#000000; stroke-linejoin:miter;" id="path6570"/>
    <path d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25" style="fill:#000000;fill-opacity:1; stroke-linecap:butt; stroke-linejoin:miter;"/>
    <path d="M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37" style="fill:#000000; stroke:#000000;"/>
    <path d="M 20,8 L 25,8" style="fill:none; stroke:#000000; stroke-linejoin:miter;"/>
    <path d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.5,26.6 L 22.5,24.5 C 20,18 10.85,14 6.97,19.85 C 4.5,25.5 13,29.5 13,29.5" style="fill:none; stroke:#ffffff;"/>
    <path d="M 12.5,30 C 18,27 27,27 32.5,30 M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5 M 12.5,37 C 18,34 27,34 32.5,37" style="fill:none; stroke:#ffffff;"/>
  </g>
</svg>`,{x:4,y:0}),new r("Center","Black","Queen",`
<svg xmlns="http://www.w3.org/2000/svg"  width="45" height="45">
  <g style="fill:#000000;stroke:#000000;stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round">
    <path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z" style="stroke-linecap:butt;fill:#000000"/>
    <path d="m 9,26 c 0,2 1.5,2 2.5,4 1,1.5 1,1 0.5,3.5 -1.5,1 -1,2.5 -1,2.5 -1.5,1.5 0,2.5 0,2.5 6.5,1 16.5,1 23,0 0,0 1.5,-1 0,-2.5 0,0 0.5,-1.5 -1,-2.5 -0.5,-2.5 -0.5,-2 0.5,-3.5 1,-2 2.5,-2 2.5,-4 -8.5,-1.5 -18.5,-1.5 -27,0 z"/>
    <path d="M 11.5,30 C 15,29 30,29 33.5,30"/>
    <path d="m 12,33.5 c 6,-1 15,-1 21,0"/>
    <circle cx="6" cy="12" r="2"/>
    <circle cx="14" cy="9" r="2"/>
    <circle cx="22.5" cy="8" r="2"/>
    <circle cx="31" cy="9" r="2"/>
    <circle cx="39" cy="12" r="2"/>
    <path d="M 11,38.5 A 35,35 1 0 0 34,38.5" style="fill:none; stroke:#000000;stroke-linecap:butt;"/>
    <g style="fill:none; stroke:#ffffff;">
      <path d="M 11,29 A 35,35 1 0 1 34,29"/>
      <path d="M 12.5,31.5 L 32.5,31.5"/>
      <path d="M 11.5,34.5 A 35,35 1 0 0 33.5,34.5"/>
      <path d="M 10.5,37.5 A 35,35 1 0 0 34.5,37.5"/>
    </g>
  </g>
</svg>`,{x:3,y:0}),new r("Right","Black","Bishop",`
<svg xmlns="http://www.w3.org/2000/svg"  width="45" height="45">
  <g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.6)">
    <g style="fill:#000000; stroke:#000000; stroke-linecap:butt;">
      <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"/>
      <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"/>
      <path d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"/>
    </g>
    <path d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18" style="fill:none; stroke:#ffffff; stroke-linejoin:miter;"/>
  </g>
</svg>`,{x:5,y:0}),new r("Left","Black","Bishop",`
<svg xmlns="http://www.w3.org/2000/svg"  width="45" height="45">
  <g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.6)">
    <g style="fill:#000000; stroke:#000000; stroke-linecap:butt;">
      <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"/>
      <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"/>
      <path d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"/>
    </g>
    <path d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18" style="fill:none; stroke:#ffffff; stroke-linejoin:miter;"/>
  </g>
</svg>`,{x:2,y:0}),new r("Left","Black","Rook",`
<svg xmlns="http://www.w3.org/2000/svg"  width="45" height="45">
  <g style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.3)">
    <path d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z " style="stroke-linecap:butt;"/>
    <path d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z " style="stroke-linecap:butt;"/>
    <path d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z " style="stroke-linecap:butt;"/>
    <path d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z " style="stroke-linecap:butt;stroke-linejoin:miter;"/>
    <path d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z " style="stroke-linecap:butt;"/>
    <path d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z " style="stroke-linecap:butt;"/>
    <path d="M 12,35.5 L 33,35.5 L 33,35.5" style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;"/>
    <path d="M 13,31.5 L 32,31.5" style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;"/>
    <path d="M 14,29.5 L 31,29.5" style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;"/>
    <path d="M 14,16.5 L 31,16.5" style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;"/>
    <path d="M 11,14 L 34,14" style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;"/>
  </g>
</svg>`,{x:0,y:0}),new r("Right","Black","Rook",`
<svg xmlns="http://www.w3.org/2000/svg"  width="45" height="45">
  <g style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.3)">
    <path d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z " style="stroke-linecap:butt;"/>
    <path d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z " style="stroke-linecap:butt;"/>
    <path d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z " style="stroke-linecap:butt;"/>
    <path d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z " style="stroke-linecap:butt;stroke-linejoin:miter;"/>
    <path d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z " style="stroke-linecap:butt;"/>
    <path d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z " style="stroke-linecap:butt;"/>
    <path d="M 12,35.5 L 33,35.5 L 33,35.5" style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;"/>
    <path d="M 13,31.5 L 32,31.5" style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;"/>
    <path d="M 14,29.5 L 31,29.5" style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;"/>
    <path d="M 14,16.5 L 31,16.5" style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;"/>
    <path d="M 11,14 L 34,14" style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;"/>
  </g>
</svg>`,{x:7,y:0}),new r("Right","Black","Knight",`
<svg xmlns="http://www.w3.org/2000/svg"  width="45" height="45">
  <g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.3)">
    <path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" style="fill:#000000; stroke:#000000;"/>
    <path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10" style="fill:#000000; stroke:#000000;"/>
    <path d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z" style="fill:#ffffff; stroke:#ffffff;"/>
    <path d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z" transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)" style="fill:#ffffff; stroke:#ffffff;"/>
    <path d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z " style="fill:#ffffff; stroke:none;"/>
  </g>
</svg>`,{x:6,y:0}),new r("Left","Black","Knight",`
<svg xmlns="http://www.w3.org/2000/svg"  width="45" height="45">
  <g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.3)">
    <path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" style="fill:#000000; stroke:#000000;"/>
    <path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10" style="fill:#000000; stroke:#000000;"/>
    <path d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z" style="fill:#ffffff; stroke:#ffffff;"/>
    <path d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z" transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)" style="fill:#ffffff; stroke:#ffffff;"/>
    <path d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z " style="fill:#ffffff; stroke:none;"/>
  </g>
</svg>`,{x:1,y:0}),new r("Left","Black","Pawn",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`,{x:0,y:1}),new r("Left","Black","Pawn",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`,{x:1,y:1}),new r("Left","Black","Pawn",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`,{x:2,y:1}),new r("Left","Black","Pawn",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`,{x:3,y:1}),new r("Left","Black","Pawn",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`,{x:4,y:1}),new r("Left","Black","Pawn",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`,{x:5,y:1}),new r("Left","Black","Pawn",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`,{x:6,y:1}),new r("Left","Black","Pawn",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`,{x:7,y:1})],n=[new r("Center","White","King",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <path stroke-linejoin="miter" d="M22.5 11.63V6M20 8h5"/>
    <path fill="#fff" stroke-linecap="butt" stroke-linejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/>
    <path fill="#fff" d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"/>
    <path d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"/>
  </g>
</svg>`,{x:3,y:7}),new r("Center","White","Queen",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <g style="fill:#ffffff;stroke:#000000;stroke-width:1.5;stroke-linejoin:round">
    <path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"/>
    <path d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 11,36 11,36 C 9.5,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"/>
    <path d="M 11.5,30 C 15,29 30,29 33.5,30" style="fill:none"/>
    <path d="M 12,33.5 C 18,32.5 27,32.5 33,33.5" style="fill:none"/>
    <circle cx="6" cy="12" r="2"/>
    <circle cx="14" cy="9" r="2"/>
    <circle cx="22.5" cy="8" r="2"/>
    <circle cx="31" cy="9" r="2"/>
    <circle cx="39" cy="12" r="2"/>
  </g>
</svg>`,{x:4,y:7}),new r("Right","White","Rook",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.3)">
    <path d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z " style="stroke-linecap:butt;"/>
    <path d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z " style="stroke-linecap:butt;"/>
    <path d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14" style="stroke-linecap:butt;"/>
    <path d="M 34,14 L 31,17 L 14,17 L 11,14"/>
    <path d="M 31,17 L 31,29.5 L 14,29.5 L 14,17" style="stroke-linecap:butt; stroke-linejoin:miter;"/>
    <path d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5"/>
    <path d="M 11,14 L 34,14" style="fill:none; stroke:#000000; stroke-linejoin:miter;"/>
  </g>
</svg>`,{x:7,y:7}),new r("Left","White","Rook",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.3)">
    <path d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z " style="stroke-linecap:butt;"/>
    <path d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z " style="stroke-linecap:butt;"/>
    <path d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14" style="stroke-linecap:butt;"/>
    <path d="M 34,14 L 31,17 L 14,17 L 11,14"/>
    <path d="M 31,17 L 31,29.5 L 14,29.5 L 14,17" style="stroke-linecap:butt; stroke-linejoin:miter;"/>
    <path d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5"/>
    <path d="M 11,14 L 34,14" style="fill:none; stroke:#000000; stroke-linejoin:miter;"/>
  </g>
</svg>`,{x:0,y:7}),new r("Right","White","Bishop",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.6)">
    <g style="fill:#ffffff; stroke:#000000; stroke-linecap:butt;">
      <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"/>
      <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"/>
      <path d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"/>
    </g>
    <path d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18" style="fill:none; stroke:#000000; stroke-linejoin:miter;"/>
  </g>
</svg>`,{x:5,y:7}),new r("Left","White","Bishop",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.6)">
    <g style="fill:#ffffff; stroke:#000000; stroke-linecap:butt;">
      <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"/>
      <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"/>
      <path d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"/>
    </g>
    <path d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18" style="fill:none; stroke:#000000; stroke-linejoin:miter;"/>
  </g>
</svg>`,{x:2,y:7}),new r("Left","White","Knight",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.3)">
    <path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" style="fill:#ffffff; stroke:#000000;"/>
    <path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10" style="fill:#ffffff; stroke:#000000;"/>
    <path d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z" style="fill:#000000; stroke:#000000;"/>
    <path d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z" transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)" style="fill:#000000; stroke:#000000;"/>
  </g>
</svg>`,{x:1,y:7}),new r("Right","White","Knight",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.3)">
    <path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" style="fill:#ffffff; stroke:#000000;"/>
    <path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10" style="fill:#ffffff; stroke:#000000;"/>
    <path d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z" style="fill:#000000; stroke:#000000;"/>
    <path d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z" transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)" style="fill:#000000; stroke:#000000;"/>
  </g>
</svg>`,{x:6,y:7}),new r("Right","White","Pawn",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`,{x:0,y:6}),new r("Right","White","Pawn",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`,{x:1,y:6}),new r("Right","White","Pawn",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`,{x:2,y:6}),new r("Right","White","Pawn",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`,{x:3,y:6}),new r("Right","White","Pawn",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`,{x:4,y:6}),new r("Right","White","Pawn",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`,{x:5,y:6}),new r("Right","White","Pawn",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`,{x:6,y:6}),new r("Right","White","Pawn",`
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
  <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`,{x:7,y:6})],a=[],k=null,w=!1,_=[];function I(C,L){a.forEach(y=>{C.fillStyle=(y.x+y.y)%2===0?"WHITE":"skyblue",C.fillRect(y.x*L,y.y*L,L,L)}),a=[]}function m(C,L){[...i,...n].forEach(y=>{const v=URL.createObjectURL(y.getSvgBlob()),l=new Image;l.onload=function(){C.drawImage(l,y.position.x*L,y.position.y*L,L,L),URL.revokeObjectURL(v)},l.src=v})}return e1(()=>{const L=new URL(location.href).searchParams.get("roomId");console.log(L),d1(),N();const y=document.getElementById("chessboard"),v=document.getElementById("chessUnits");y.getContext("2d");const l=v.getContext("2d");let o=y.width/8;m(l,o),v.addEventListener("click",function(E){const F=v.getBoundingClientRect(),b=E.clientX-F.left,K=E.clientY-F.top,P=Math.floor(b/o),x=Math.floor(K/o),M=a.some(p=>{const f=p.x*o+o/2,c=p.y*o+o/2;return Math.pow(b-f,2)+Math.pow(K-c,2)<=Math.pow(o/4,2)});if(I(l,o),m(l,o),w?n.forEach(p=>{if(p.position.x===P&&p.position.y===x){k=p;const f=p.getMovablePositions([...i,...n]),c=p.getKillablePositions(n,i);f.forEach(d=>{l.beginPath(),l.arc(d.x*o+o/2,d.y*o+o/2,o/4,0,Math.PI*2),l.fillStyle="gray",l.fill(),a.push(d)}),c.forEach(d=>{l.beginPath(),l.arc(d.x*o+o/2,d.y*o+o/2,o/4,0,Math.PI*2),l.fillStyle="red",l.fill(),a.push(d)})}}):i.forEach(p=>{if(p.position.x===P&&p.position.y===x){k=p;const f=p.getMovablePositions([...i,...n]),c=p.getKillablePositions(i,n);f.forEach(d=>{l.beginPath(),l.arc(d.x*o+o/2,d.y*o+o/2,o/4,0,Math.PI*2),l.fillStyle="gray",l.fill(),a.push(d)}),c.forEach(d=>{console.log(d.x+" "+d.y),l.beginPath(),l.arc(d.x*o+o/2,d.y*o+o/2,o/4,0,Math.PI*2),l.fillStyle="red",l.fill(),a.push(d)})}}),M){const p=w?i:n,f=p.findIndex(c=>c.position.x===P&&c.position.y===x);f!==-1&&p.splice(f,1),l.clearRect(k.position.x*o,k.position.y*o,o,o),k.position.x=P,k.position.y=x,N(),m(l,o),e(0,w=!w)}})}),[w,s,_]}class k1 extends q{constructor(t){super(),G(this,t,p1,c1,O,{})}}function y1(h){let t,e;return t=new k1({}),{c(){s1(t.$$.fragment)},l(s){r1(t.$$.fragment,s)},m(s,i){l1(t,s,i),e=!0},p:V,i(s){e||(n1(t.$$.fragment,s),e=!0)},o(s){a1(t.$$.fragment,s),e=!1},d(s){f1(t,s)}}}class C1 extends q{constructor(t){super(),G(this,t,null,y1,O,{})}}export{C1 as component};

var Ae=Object.defineProperty;var Pe=(n,t,e)=>t in n?Ae(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var G=(n,t,e)=>(Pe(n,typeof t!="symbol"?t+"":t,e),e);import{s as Me,n as we,r as Ie,o as ke,f as Ne,e as Ve}from"../chunks/scheduler.LC6wQ9wn.js";import{S as je,i as Ue,e as _,s as I,j as V,q as Ee,c as b,b as T,d as g,a as D,k as j,g as ce,n as w,f as oe,l as a,o as re,m as se,p as ze,B as Se}from"../chunks/index.DBde2Jor.js";import{e as Le}from"../chunks/each.D6YF6ztN.js";import{w as De}from"../chunks/index.3rQHIXWG.js";const He=11,Te=25;class Ce{constructor(t){G(this,"x");G(this,"y");G(this,"color");G(this,"shape");G(this,"ctx");G(this,"BLOCKS",[[[0,0,2,0],[0,0,2,0],[0,0,2,0],[0,0,2,0]],[[0,2,0],[2,2,2],[0,0,0]],[[0,2,0],[0,2,0],[0,2,2]],[[0,2,0],[0,2,0],[2,2,0]],[[2,2],[2,2]],[[2,2,0],[0,2,2],[0,0,0]],[[0,2,2],[2,2,0],[0,0,0]]]);G(this,"COLORS",["cyan","blue","orange","yellow","green","purple","red"]);this.ctx=t,this.spawn()}randomizeType(t){return Math.floor(Math.random()*t)}spawn(){const t=this.randomizeType(this.COLORS.length);this.color=this.COLORS[t],this.shape=this.BLOCKS[t],this.x=4,this.y=0}draw(){this.ctx.fillStyle=this.color,this.shape.forEach((t,e)=>{t.forEach((o,f)=>{if(o>0){this.ctx.fillRect(this.x+f,this.y+e,1,1),this.ctx.strokeStyle="BLACK",this.ctx.lineWidth=.009,this.ctx.zIndex=10;for(let r=0;r<1;r+=1)for(let l=0;l<1;l+=1)this.ctx.strokeRect(this.x+f+r,this.y+e+l,1,1)}})})}collision(t){for(let e=0;e<this.shape.length;e++)for(let o=0;o<this.shape[e].length;o++)if(this.shape[e][o]>0){let f=this.x+o,r=this.y+e;if(f<0||f>=He||r>=Te)return!0;if(r<Te){let l=t.grid[r][f];if(l!==0&&(typeof l=="object"?l.value:l)>0)return!0}}return!1}moveLeft(t){this.x--,this.collision(t)&&this.x++}moveRight(t){this.x++,this.collision(t)&&this.x--}moveDown(t){return this.y++,this.collision(t)?(this.y--,!0):!1}moveBottom(t){for(;!this.collision(t);)this.y++;return this.y--,!0}rotate(t){let e=this.shape.map(l=>[...l]),o=e.length;for(let l=0;l<o;l++)for(let s=0;s<l;s++)[e[s][l],e[l][s]]=[e[l][s],e[s][l]];e.forEach(l=>l.reverse());let f=this.x,r=this.y;if(this.shape=e,this.collision(t)){let l=!1;for(let s=-1;s<=1;s++){if(this.x+=s,!this.collision(t)){l=!0;break}this.x=f}if(!l){this.shape=this.shape.map(s=>[...s]).reverse().map(s=>s.reverse());for(let s=0;s<o;s++)for(let h=0;h<o/2;h++)[this.shape[s][h],this.shape[s][o-1-h]]=[this.shape[s][o-1-h],this.shape[s][h]];this.x=f,this.y=r}}}reverseRotate(t){let e=this.shape.map(l=>[...l]),o=e.length;e.forEach(l=>l.reverse());for(let l=0;l<o;l++)for(let s=0;s<l;s++)[e[s][l],e[l][s]]=[e[l][s],e[s][l]];let f=this.x,r=this.y;if(this.shape=e,this.collision(t)){let l=!1;for(let s=-1;s<=1;s++){if(this.x+=s,!this.collision(t)){l=!0;break}this.x=f}if(!l){this.shape.forEach(s=>s.reverse());for(let s=0;s<o;s++)for(let h=0;h<s;h++)[this.shape[h][s],this.shape[s][h]]=[this.shape[s][h],this.shape[h][s]];this.shape.forEach(s=>s.reverse()),this.x=f,this.y=r}}}lock(t){this.shape.forEach((e,o)=>{e.forEach((f,r)=>{f>0&&(t.grid[this.y+o][this.x+r]={value:f,color:this.color})})})}}let ie=De(0),te=De(1);function Oe(n,t,e){const o=n.slice();return o[7]=t[e].nickname,o[21]=t[e].score,o[23]=e,o}function Re(n){let t,e,o=n[23]+1+"",f,r,l,s=n[7]+"",h,p,d,C=n[21]+"",y,k;return{c(){t=_("tr"),e=_("td"),f=V(o),r=I(),l=_("td"),h=V(s),p=I(),d=_("td"),y=V(C),k=I(),this.h()},l(x){t=b(x,"TR",{class:!0});var L=T(t);e=b(L,"TD",{class:!0});var W=T(e);f=j(W,o),W.forEach(g),r=D(L),l=b(L,"TD",{class:!0});var u=T(l);h=j(u,s),u.forEach(g),p=D(L),d=b(L,"TD",{class:!0});var z=T(d);y=j(z,C),z.forEach(g),k=D(L),L.forEach(g),this.h()},h(){w(e,"class","svelte-14xdmoh"),w(l,"class","svelte-14xdmoh"),w(d,"class","svelte-14xdmoh"),w(t,"class","svelte-14xdmoh")},m(x,L){oe(x,t,L),a(t,e),a(e,f),a(t,r),a(t,l),a(l,h),a(t,p),a(t,d),a(d,y),a(t,k)},p(x,L){L&16&&s!==(s=x[7]+"")&&se(h,s),L&16&&C!==(C=x[21]+"")&&se(y,C)},d(x){x&&g(t)}}}function Be(n){let t,e,o,f,r,l="점수 제출",s,h,p="취소",d,C;return{c(){t=_("div"),e=_("div"),o=_("input"),f=I(),r=_("button"),r.textContent=l,s=I(),h=_("button"),h.textContent=p,this.h()},l(y){t=b(y,"DIV",{class:!0});var k=T(t);e=b(k,"DIV",{class:!0});var x=T(e);o=b(x,"INPUT",{placeholder:!0}),f=D(x),r=b(x,"BUTTON",{class:!0,"data-svelte-h":!0}),ce(r)!=="svelte-bny16c"&&(r.textContent=l),s=D(x),h=b(x,"BUTTON",{class:!0,"data-svelte-h":!0}),ce(h)!=="svelte-1xig66l"&&(h.textContent=p),x.forEach(g),k.forEach(g),this.h()},h(){w(o,"placeholder","닉네임 입력"),w(r,"class","svelte-14xdmoh"),w(h,"class","svelte-14xdmoh"),w(e,"class","modal svelte-14xdmoh"),w(t,"class","overlay svelte-14xdmoh")},m(y,k){oe(y,t,k),a(t,e),a(e,o),Se(o,n[7]),a(e,f),a(e,r),a(e,s),a(e,h),d||(C=[re(o,"input",n[12]),re(r,"click",n[9]),re(h,"click",me)],d=!0)},p(y,k){k&128&&o.value!==y[7]&&Se(o,y[7])},d(y){y&&g(t),d=!1,Ie(C)}}}function Ke(n){let t,e,o,f,r,l,s=n[6]?"Reset":"Start",h,p,d,C,y,k,x,L,W,u,z,Z,q,H,le,F=n[3]+(n[2]-1)*10+"",i,v,A,P=`← → : 좌우 이동
			<br/>
			↑ : 시계 회전
			<br/>
			X : 반시계 회전
			<br/>
			Z : 떨어뜨리기`,K,M,m,N,J='<tr class="svelte-14xdmoh"><th class="svelte-14xdmoh">순위</th> <th class="svelte-14xdmoh">닉네임</th> <th class="svelte-14xdmoh">점수</th></tr>',Q,U,X,$,fe,ge,ee=Le(n[4]),O=[];for(let c=0;c<ee.length;c+=1)O[c]=Re(Oe(n,ee,c));let R=n[5]&&Be(n);return{c(){t=_("div"),e=_("div"),o=_("canvas"),f=I(),r=_("div"),l=_("button"),h=V(s),p=I(),d=_("button"),C=V("Stop"),y=I(),k=_("p"),x=V("점수: "),L=V(n[1]),W=I(),u=_("p"),z=V("레벨: "),Z=V(n[2]),q=I(),H=_("p"),le=V("제거한 줄 : "),i=V(F),v=I(),A=_("p"),A.innerHTML=P,K=I(),M=_("div"),m=_("table"),N=_("thead"),N.innerHTML=J,Q=I(),U=_("tbody");for(let c=0;c<O.length;c+=1)O[c].c();X=I(),R&&R.c(),$=Ee(),this.h()},l(c){t=b(c,"DIV",{class:!0});var E=T(t);e=b(E,"DIV",{class:!0});var S=T(e);o=b(S,"CANVAS",{class:!0}),T(o).forEach(g),S.forEach(g),f=D(E),r=b(E,"DIV",{class:!0});var B=T(r);l=b(B,"BUTTON",{class:!0});var _e=T(l);h=j(_e,s),_e.forEach(g),p=D(B),d=b(B,"BUTTON",{class:!0});var be=T(d);C=j(be,"Stop"),be.forEach(g),y=D(B),k=b(B,"P",{class:!0});var de=T(k);x=j(de,"점수: "),L=j(de,n[1]),de.forEach(g),W=D(B),u=b(B,"P",{class:!0});var ue=T(u);z=j(ue,"레벨: "),Z=j(ue,n[2]),ue.forEach(g),q=D(B),H=b(B,"P",{class:!0});var ve=T(H);le=j(ve,"제거한 줄 : "),i=j(ve,F),ve.forEach(g),v=D(B),A=b(B,"P",{class:!0,"data-svelte-h":!0}),ce(A)!=="svelte-12plnba"&&(A.innerHTML=P),B.forEach(g),K=D(E),M=b(E,"DIV",{class:!0});var ye=T(M);m=b(ye,"TABLE",{class:!0});var ae=T(m);N=b(ae,"THEAD",{"data-svelte-h":!0}),ce(N)!=="svelte-e1zn3c"&&(N.innerHTML=J),Q=D(ae),U=b(ae,"TBODY",{});var xe=T(U);for(let pe=0;pe<O.length;pe+=1)O[pe].l(xe);xe.forEach(g),ae.forEach(g),ye.forEach(g),E.forEach(g),X=D(c),R&&R.l(c),$=Ee(),this.h()},h(){w(o,"class","play-board svelte-14xdmoh"),w(e,"class","play-division svelte-14xdmoh"),w(l,"class","svelte-14xdmoh"),d.disabled=n[5],w(d,"class","svelte-14xdmoh"),w(k,"class","svelte-14xdmoh"),w(u,"class","svelte-14xdmoh"),w(H,"class","svelte-14xdmoh"),w(A,"class","svelte-14xdmoh"),w(r,"class","right-division svelte-14xdmoh"),w(m,"class","leaderboard svelte-14xdmoh"),w(M,"class","leaderboard-container"),w(t,"class","board svelte-14xdmoh")},m(c,E){oe(c,t,E),a(t,e),a(e,o),n[11](o),a(t,f),a(t,r),a(r,l),a(l,h),a(r,p),a(r,d),a(d,C),a(r,y),a(r,k),a(k,x),a(k,L),a(r,W),a(r,u),a(u,z),a(u,Z),a(r,q),a(r,H),a(H,le),a(H,i),a(r,v),a(r,A),a(t,K),a(t,M),a(M,m),a(m,N),a(m,Q),a(m,U);for(let S=0;S<O.length;S+=1)O[S]&&O[S].m(U,null);oe(c,X,E),R&&R.m(c,E),oe(c,$,E),fe||(ge=[re(l,"click",n[8]),re(d,"click",n[10])],fe=!0)},p(c,[E]){if(E&64&&s!==(s=c[6]?"Reset":"Start")&&se(h,s),E&32&&(d.disabled=c[5]),E&2&&se(L,c[1]),E&4&&se(Z,c[2]),E&12&&F!==(F=c[3]+(c[2]-1)*10+"")&&se(i,F),E&16){ee=Le(c[4]);let S;for(S=0;S<ee.length;S+=1){const B=Oe(c,ee,S);O[S]?O[S].p(B,E):(O[S]=Re(B),O[S].c(),O[S].m(U,null))}for(;S<O.length;S+=1)O[S].d(1);O.length=ee.length}c[5]?R?R.p(c,E):(R=Be(c),R.c(),R.m($.parentNode,$)):R&&(R.d(1),R=null)},i:we,o:we,d(c){c&&(g(t),g(X),g($)),n[11](null),ze(O,c),R&&R.d(c),fe=!1,Ie(ge)}}}const ne=11,he=25,Y=30;function me(){window.location.reload()}function Ge(){window.location.reload()}function We(n,t){fetch("/api/score",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nickname:n,score:t})}).then(e=>{if(!e.ok)throw new Error("점수 제출 실패");return e.json()}).then(e=>{console.log("점수 제출 성공:",e),Ge(),window.location.href="./TetrisCanvas"})}function Xe(n,t,e){let o;ke(()=>{const i=o.getContext("2d");i.canvas.width=ne*Y,i.canvas.height=he*Y,i.scale(Y,Y)});let f,r,l=1e3,s=0,h=[],p,d="",C=!1;ie.subscribe(i=>e(1,f=i)),te.subscribe(i=>e(2,r=i));let y=!1;function k(){y?q():H()}function x(i){ie.update(v=>v+i)}function L(){te.update(i=>i+1)}class W{constructor(){G(this,"grid");this.reset()}reset(){this.grid=this.getEmptyBoard()}removeLines(){let v=[];for(let P=0;P<he;P++)this.grid[P].every(M=>M.value>0)&&v.push(P);v.forEach(P=>{this.grid.splice(P,1),this.grid.unshift(Array(ne).fill(0))});let A=v.length;return e(3,s+=A),s>=10&&(console.log("clearLine >= 10"),e(3,s-=10),L()),console.log(r+" "+s),v.length*v.length*100*r}getEmptyBoard(){return Array.from({length:he},()=>Array(ne).fill(0))}}let u=new W;function z(){clearInterval(p),e(5,C=!0)}function Z(){if(!d.trim()){alert("닉네임을 입력해야 점수를 제출할 수 있습니다.");return}We(d,f),e(5,C=!1),e(7,d=""),me()}function q(){if(e(6,y=!1),!o){console.error("Canvas 엘리먼트가 초기화되지 않았습니다.");return}const i=o.getContext("2d");i.clearRect(0,0,o.width,o.height),i.beginPath(),u.reset(),p&&(clearInterval(p),p=null),e(3,s=0),ie.set(0),te.set(1),me()}function H(){e(6,y=!0),p&&clearInterval(p),u.reset(),e(3,s=0),ie.set(0),te.set(1);const i=o.getContext("2d");i.canvas.width=ne*Y,i.canvas.height=he*Y,i.scale(Y,Y);let v=new Ce(i);if(v.collision(u)){z();return}v.draw();function A(){i.clearRect(0,0,i.canvas.width,i.canvas.height),i.beginPath(),v.draw(),P();for(let m=0;m<10;m++)u.grid[0][m]===2&&alert("게임오버")}function P(){u.grid.forEach((m,N)=>{m.forEach((J,Q)=>{if(typeof J=="object"&&J.value>0){i.fillStyle=J.color,i.fillRect(Q,N,1,1),i.strokeStyle="BLACK",i.lineWidth=.01;for(let U=0;U<1;U+=1)for(let X=0;X<1;X+=1)i.strokeRect(Q+U,N+X,1,1)}})})}function K(){if(v.moveDown(u)){if(v.lock(u),console.table(u.grid),u.grid[0].some(N=>N!==0)){z();return}v=new Ce(i)}const m=u.removeLines();x(m),A(),M()}function M(){te.subscribe(m=>{e(2,r=m),l=Math.max(200,1100-r*100),p&&clearInterval(p),p=setInterval(K,l)})}te.subscribe(m=>{e(2,r=m),M()}),document.addEventListener("keydown",function(m){if(!C){switch(console.log(m.key),m.key){case"ArrowLeft":v.moveLeft(u);break;case"ArrowRight":v.moveRight(u);break;case"ArrowDown":K();break;case"ArrowUp":v.rotate(u);break;case"z":v.moveBottom(u),K();break;case"x":v.reverseRotate(u);break}A()}}),p&&clearInterval(p),p=setInterval(K,l)}ke(async()=>{try{const v=await(await fetch("/api/leaderBoard",{method:"POST"})).json();e(4,h=v),console.log("리더보드 호출 성공:",v)}catch(i){console.error("리더보드 호출 중 오류 발생:",i)}}),Ne(()=>{q()});function le(i){Ve[i?"unshift":"push"](()=>{o=i,e(0,o)})}function F(){d=this.value,e(7,d)}return[o,f,r,s,h,C,y,d,k,Z,q,le,F]}class Qe extends je{constructor(t){super(),Ue(this,t,Xe,Ke,Me,{})}}export{Qe as component};

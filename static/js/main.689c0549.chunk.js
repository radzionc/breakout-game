(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r,i=n(0),a=n.n(i),c=n(6),o=n.n(c),u=n(3),s=n(2),l=n(1),h=n(4),d=function(e){return Object(h.a)(Array(e).keys())},f=function(e,t){return window.addEventListener(e,t),function(){return window.removeEventListener(e,t)}},v=function(){return Math.floor(3*Math.random())},m=function(e,t){return d(t).map(function(){return d(e).map(v)})},w=[{lives:5,paddleWidth:4,speed:1,blocks:m(8,4)},{lives:4,paddleWidth:3,speed:1.4,blocks:m(8,5)},{lives:3,paddleWidth:2.5,speed:1.8,blocks:m(9,5)},{lives:3,paddleWidth:2,speed:2.2,blocks:m(10,5)}],p=n(7),y=n(8),b=function(){function e(t,n){Object(p.a)(this,e),this.x=t,this.y=n}return Object(y.a)(e,[{key:"add",value:function(t){var n=t.x,r=t.y;return new e(this.x+n,this.y+r)}},{key:"subtract",value:function(t){var n=t.x,r=t.y;return new e(this.x-n,this.y-r)}},{key:"scaleBy",value:function(t){return new e(this.x*t,this.y*t)}},{key:"length",value:function(){return Math.hypot(this.x,this.y)}},{key:"normalize",value:function(){return this.scaleBy(1/this.length())}},{key:"dotProduct",value:function(e){var t=e.x,n=e.y;return this.x*t+this.y*n}},{key:"projectOn",value:function(t){var n=this.dotProduct(t)/t.length();return new e(n*t.x,n*t.y)}},{key:"reflect",value:function(e){return this.subtract(this.projectOn(e).scaleBy(2))}},{key:"rotate",value:function(t){var n=function(e){return e*Math.PI/180}(t),r=Math.cos(n),i=Math.sin(n);return new e(this.x*r-this.y*i,this.x*i+this.y*r)}},{key:"crossProduct",value:function(e){var t=e.x,n=e.y;return this.x*n-t*this.y}},{key:"angleBetween",value:function(e){return 180*Math.atan2(this.crossProduct(e),this.dotProduct(e))/Math.PI}}]),e}(),g="LEFT",j="RIGHT",O=new b(-1,0),k=new b(1,0),x=new b(0,1),E=new b(0,-1),z=O.add(E).normalize(),I=k.add(E).normalize(),T=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t[Math.floor(Math.random()*t.length)]},M=function(e,t,n){var r=t-1/3;return{paddle:{position:new b((e-n)/2,r),width:n,height:1/3},ball:{center:new b(t/2,r-.4),radius:.2,direction:T(z,I)}}},B=function(e,t,n,r){return e>=n&&e<=r||t>=n&&t<=r},N=function(e,t,n){var r=e.size,i=e.speed,a=e.lives,c=.005*n*i,o=function(e,t,n,r){if(!r)return e;var i=r===g?O:k,a=e.position.add(i.scaleBy(n)).x,c=function(t){return Object(l.a)({},e,{position:new b(t,e.position.y)})};return a<0?c(0):a+e.width>t.width?c(t.width-e.width):c(a)}(e.paddle,r,c,t),u=e.ball.radius,s=e.ball.direction,h=e.ball.center.add(s.scaleBy(c)),d=h.y+u;if(d>r.height)return Object(l.a)({},e,M(r.width,r.height,o.width),{lives:a-1});var f=function(t){return Object(l.a)({},e,{paddle:o,ball:Object(l.a)({},e.ball,t)})},v=function(e){var t=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,r=e.angleBetween(t),i=90-n;if(r<0){if(r>-n)return e.rotate(-n);if(r<-i)return e.rotate(-i)}else{if(r<n)return e.rotate(n);if(r>i)return e.rotate(i)}return t}(e,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3,n=function(){return Math.random()*t-t/2},r=new b(n(),n());return e.add(r).normalize()}(s.reflect(e)));return f({direction:t})},m=h.x-u,w=h.x+u,p=h.y-u,y=o.position.x,j=y+o.width,z=o.position.y;if(Math.abs(E.angleBetween(s))>90&&d>=z&&w>=y&&m<=j)return v(E);if(p<=0)return v(x);if(m<=0)return v(k);if(w>=r.width)return v(O);var I,T,N=e.blocks.find(function(e){var t=e.position,n=e.width,r=e.height;return B(p,d,t.y,t.y+r)&&B(m,w,t.x,t.x+n)});if(N){var W=N.density-1,D=Object(l.a)({},N,{density:W}),P=W<0?(I=e.blocks,T=N,I.filter(function(e){return e!==T})):function(e,t,n){return e.map(function(e){return e===t?n:e})}(e.blocks,N,D);return Object(l.a)({},v(function(){var e=N.position.y,t=e+N.height,n=N.position.x;if(p>e-u&&d<t+u){if(m<n)return O;if(w>n+N.width)return k}return p>e?x:p<=e?E:void 0}()),{blocks:P})}return f({center:h})},W=["#f1c40f","#9b59b6","#95a5a6"],D=function(e){var t=e.x,n=e.y,r=e.width,i=e.height,c=e.density;return a.a.createElement("rect",{className:"block",fill:W[c],x:t,y:n,width:r,height:i})},P=function(e){var t=e.x,n=e.y,r=e.width,i=e.height;return a.a.createElement("rect",{className:"paddle",x:t,y:n,width:r,height:i})},S=function(e){var t=e.x,n=e.y,r=e.radius;return a.a.createElement("circle",{className:"ball",cx:t,cy:n,r:r})},L=function(e){var t=e.level,n=e.unit;return a.a.createElement("text",{x:n,y:2*n,fontSize:n,className:"level"},"LEVEL: ",t)},R=function(e){var t=e.lives,n=e.containerWidth,r=e.unit,i=2*r;return d(t).map(function(e){return a.a.createElement("rect",{className:"life",rx:r/4,height:r,width:i,y:r,x:n-r-i*(e+1)-r/2*e,key:e})})},V={LEFT:[65,37],RIGHT:[68,39]},A=function(e,t){var n=e.width/t.width,r=e.height/t.height,i=Math.min(n,r);return{projectDistance:function(e){return e*i},projectVector:function(e){return e.scaleBy(i)}}},C=w.map(function(e){var t,n=e.lives,r=e.paddleWidth,i=e.speed,a=e.blocks,c=a[0].length,o=c,u=(o-o*(1/3)-a.length*(1/3))/2,s=a.map(function(e,t){return e.map(function(e,n){return{density:e,position:new b(n,u+t*(1/3)),width:1,height:1/3}})}),d={width:c,height:o};return Object(l.a)({size:d,blocks:(t=s,t.reduce(function(e,t){return[].concat(Object(h.a)(e),Object(h.a)(t))},[]))},M(c,o,r),{lives:n,speed:i})}),G="CONTAINER_SIZE_CHANGE",H="KEY_DOWN",_="KEY_UP",F="TICK",K=(r={},Object(s.a)(r,G,function(e,t){return Object(l.a)({},e,{containerSize:t},A(t,e.game.size))}),Object(s.a)(r,H,function(e,t){return V.LEFT.includes(t)?Object(l.a)({},e,{movement:g}):V.RIGHT.includes(t)?Object(l.a)({},e,{movement:j}):e}),Object(s.a)(r,_,function(e,t){var n=Object(l.a)({},e,{movement:void 0});return 32===t?e.stopTime?Object(l.a)({},n,{stopTime:void 0,time:e.time+Date.now()-e.stopTime}):Object(l.a)({},n,{stopTime:Date.now()}):n}),Object(s.a)(r,F,function(e){if(e.stopTime)return e;var t=Date.now(),n=N(e.game,e.movement,t-e.time),r=Object(l.a)({},e,{time:t});if(n.lives<1)return Object(l.a)({},r,{game:C[e.level]});if(n.blocks.length<1){var i=e.level===C.length?e.level:e.level+1;localStorage.setItem("level",i);var a=C[i];return Object(l.a)({},r,{level:i,game:a},A(e.containerSize,a.size))}return Object(l.a)({},r,{game:n})}),r),J=function(e,t){var n=t.type,r=t.payload,i=K[n];return i?i(e,r):e},Y=function(e){var t=function(){var e=localStorage.getItem("level");return e?parseInt(e,10):0}(),n=C[t],r=A(e,n.size);return{level:t,game:n,containerSize:e,projectDistance:r.projectDistance,projectVector:r.projectVector,time:Date.now(),stopTime:void 0,movement:void 0}},U=function(e){var t=Object(i.useReducer)(J,e,Y),n=Object(u.a)(t,2),r=n[0],c=n[1],o=function(e,t){return c({type:e,payload:t})},s=r.projectDistance,l=r.projectVector,h=r.level,d=r.game,v=d.blocks,m=d.paddle,w=d.ball,p=d.size,y=p.width,b=p.height,g=d.lives;Object(i.useEffect)(function(){return o(G,e)},[e]),Object(i.useEffect)(function(){var e=setInterval(function(){return o(F)},1e3/60),t=f("keydown",function(e){var t=e.which;return o(H,t)}),n=f("keyup",function(e){var t=e.which;return o(_,t)});return function(){clearInterval(e),t(),n()}},[]);var j=s(y),O=s(w.radius);return a.a.createElement("svg",{width:j,height:s(b),className:"scene"},a.a.createElement(L,{unit:O,level:h+1}),a.a.createElement(R,{lives:g,containerWidth:j,unit:O}),v.map(function(e){var t=e.density,n=e.position,r=e.width,i=e.height;return a.a.createElement(D,Object.assign({density:t,key:"".concat(n.x,"-").concat(n.y),width:s(r),height:s(i)},l(n)))}),a.a.createElement(P,Object.assign({width:s(m.width),height:s(m.height)},l(m.position))),a.a.createElement(S,Object.assign({},l(w.center),{radius:O})))},Z=function(){var e=Object(i.useRef)(),t=Object(i.useState)(),n=Object(u.a)(t,2),r=n[0],c=n[1],o=function(){var t=e.current.getBoundingClientRect(),n=t.width,r=t.height;c({width:n,height:r})};return Object(i.useEffect)(function(){var e=f("resize",o);return o(),e},[]),a.a.createElement("div",{className:"page"},a.a.createElement("div",{className:"scene-container",ref:e},r&&a.a.createElement(U,{width:r.width,height:r.height})))};n(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.689c0549.chunk.js.map
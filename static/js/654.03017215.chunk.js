"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[654],{6654:function(n,r,e){e.r(r),e.d(r,{default:function(){return k}});var t,a,i,o,c,s,u=e(885),p=e(2791),l=e(7689),d=e(5130),h=e(6731),f=e(168),x=e(921),v=x.Z.div(t||(t=(0,f.Z)(["\n  display: flex;\n  background-color: #f69e11;\n"]))),m=x.Z.img(a||(a=(0,f.Z)(["\n  width: 200px;\n"]))),g=x.Z.div(i||(i=(0,f.Z)(["\n  padding: 20px;\n\n"]))),b=x.Z.div(o||(o=(0,f.Z)(["\n  padding: 20px;\n\n"]))),w=x.Z.button(c||(c=(0,f.Z)(["\n  margin: 15px;\n  padding: 10px;\n  border: none;\n  background-color: #3f51b5;\n  color: #fff;\n  font-weight: 600;\n  border-radius: 5px;\n  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);\n\n  /* width:100%; */\n  transition-timing-function: cubic-bezier();\n  transition-duration: 500ms;\n  outline: none;\n  :active {\n    /* border: 0; */\n    box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.8);\n\n    /* background-color: #526456; */\n    /* color: #535353; */\n  }\n"]))),j=((0,x.Z)(h.rU)(s||(s=(0,f.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),e(184)),k=function(){var n=(0,p.useState)(0),r=(0,u.Z)(n,2),e=r[0],t=r[1],a=(0,l.UO)().idSelectFilm,i=(0,l.TH)(),o=(0,l.s0)();if((0,p.useEffect)((function(){(0,d.ts)(a).then(t)}),[a]),!e)return(0,j.jsx)("p",{children:"Not Find details"});var c=e.data,s=c.poster_path,f=c.popularity,x=c.overview,k=c.title,y=c.name,Z=c.genres;console.log("\ud83d\ude80 ~ data",e.data);return console.log("\ud83d\ude80 ~ file: FilmDetails.jsx ~ line 37 ~ FilmDetails ~ location",i),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{onClick:function(){var n,r,e=null!==(n=null===(r=i.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/";o(e)},children:"Go Back"}),(0,j.jsxs)(v,{children:[(0,j.jsx)(m,{src:s?"https://image.tmdb.org/t/p/w500/".concat(s):"https://klpmotors.ru/tpl/palitra/images/nophoto.jpg"}),(0,j.jsxs)(g,{children:[(0,j.jsx)("h3",{children:k||y}),(0,j.jsxs)("p",{children:["User score : ",(0,j.jsxs)("b",{children:[f?Math.round(f):"--","%"]})]}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:x||"------"}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:Z?Z.map((function(n){return n.name})).join(", "):"---"})]})]}),(0,j.jsxs)(b,{children:[(0,j.jsx)("h3",{children:"Additional information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(h.rU,{to:"cast",children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(h.rU,{to:"reiwers",children:"Reiwers"})})]}),(0,j.jsx)(l.j3,{})]})]})}},5130:function(n,r,e){e.d(r,{Gy:function(){return f},HA:function(){return g},Hg:function(){return p},fI:function(){return v},ts:function(){return d}});var t=e(2982),a=e(5861),i=e(4687),o=e.n(i),c=e(4569),s="f2c538717486cd7dc01f7314dfb697ab",u=e.n(c)().create({baseURL:"https://api.themoviedb.org/3/"});function p(n){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)(o().mark((function n(r){var e,a,i,c,p,l,d;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.genres,a=void 0===e?"all":e,i=r.window,c=void 0===i?"day":i,p="/trending/".concat(a,"/").concat(c),l={api_key:s},n.prev=3,n.next=6,u.get(p,{params:l});case 6:return d=n.sent,n.abrupt("return",(0,t.Z)(d.data.results));case 10:n.prev=10,n.t0=n.catch(3),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[3,10]])})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(o().mark((function n(r){var e,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(r),t={api_key:s},n.prev=2,n.next=5,u.get(e,{params:t});case 5:return a=n.sent,n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(2),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))).apply(this,arguments)}function f(n){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(o().mark((function n(r){var e,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(r,"/credits"),t={api_key:s},n.prev=2,n.next=5,u.get(e,{params:t});case 5:return a=n.sent,n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(2),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(o().mark((function n(r){var e,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(r,"/reviews"),t={api_key:s},n.prev=2,n.next=5,u.get(e,{params:t});case 5:return a=n.sent,n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(2),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))).apply(this,arguments)}function g(n){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)(o().mark((function n(r){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/search/movie",e={api_key:s,query:r},n.prev=2,n.next=5,u.get("/search/movie",{params:e});case 5:return t=n.sent,n.abrupt("return",t);case 9:n.prev=9,n.t0=n.catch(2),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=654.03017215.chunk.js.map
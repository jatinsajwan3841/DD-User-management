(this["webpackJsonpdd-ctc"]=this["webpackJsonpdd-ctc"]||[]).push([[3],{30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),i=n.n(r),s=(n(30),n(3)),d=n(13),o=[{path:"/DD-User-management/",exact:!0,name:"Home",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(9)]).then(n.bind(null,909))}))},{path:"/DD-User-management/admin",exact:!0,name:"Admin",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(8),n.e(6)]).then(n.bind(null,952))}))},{path:"/DD-User-management/user",exact:!0,name:"User",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,946))}))}],l=(n(31),n(1)),u=function(){return Object(l.jsxs)("div",{className:"lds-default",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})},j=(n(33),o.map((function(e,t){return Object(l.jsx)(s.b,{path:e.path,exact:e.exact,component:e.component},t)}))),m=function(){return Object(l.jsx)(a.Suspense,{fallback:Object(l.jsx)(u,{}),children:Object(l.jsxs)(s.d,{children:[j,Object(l.jsxs)(s.b,{children:[Object(l.jsx)("button",{children:Object(l.jsx)(d.b,{to:"/DD-User-management/",children:"Go back to homepage"})}),Object(l.jsx)("img",{src:"https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg",alt:"404",style:{maxWidth:"100%",height:"auto"}})]})]})})},b=n(21),h=n(14),p=n(12),O=[{id:0,chart_label:"check",chart_type:"radar",data_source:"REST",data:[13,15,51,53]},{id:1,chart_label:"check1",chart_type:"bar",data_source:"REST",data:[13,15,51,53]}],f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addData":return[].concat(Object(p.a)(e),[t.payload]);case"editData":var n=e.findIndex((function(e){return e.id===t.payload.id}));return e[n]=t.payload,e;case"deleteData":return e.filter((function(e){return e.id!==t.payload}));default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login":return e=t.payload;case"logout":return null;default:return e}},g=[{id:0,name:"admin",role:"admin",isAdmin:!0,permissions:"All"},{id:1,name:"Ram",role:"account manager",isAdmin:!0,permissions:"All"},{id:2,name:"Nyal",role:"client",isAdmin:!1,permissions:"Read"},{id:3,name:"Myal",role:"blocked",isAdmin:!1,permissions:"None"}],v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addUser":return[].concat(Object(p.a)(e),[t.payload]);case"editUser":var n=e.findIndex((function(e){return e.id===t.payload.id}));return e[n]=t.payload,e;case"deleteUser":return e.filter((function(e){return e.id!==t.payload}));default:return e}},y=Object(h.a)({users:v,logstate:x,data:f}),_=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),D=Object(h.b)(y,_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());D.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}}({logstate:D.getState().logstate,data:D.getState().data,users:D.getState().users})}));var S=D,U=function(e){e&&e instanceof Function&&n.e(10).then(n.bind(null,947)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b.a,{store:S,children:Object(l.jsx)(d.a,{children:Object(l.jsx)(m,{})})})}),document.getElementById("root")),U()}},[[42,4,5]]]);
//# sourceMappingURL=main.27244898.chunk.js.map
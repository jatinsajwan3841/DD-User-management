(this["webpackJsonpdd-ctc"]=this["webpackJsonpdd-ctc"]||[]).push([[7],{148:function(t,e,n){},160:function(t,e,n){"use strict";n.d(e,"a",(function(){return G}));var a=n(60),r=n(17),c=n(20),i=n(0),o=n.n(i),s=n(48),u=n(921),l=n(88),d=n(957),j=n(923),b=n(924),f=n(919),p=n(922),h=n(926),O=n(931),x=n(925),g=n(235),m=n.n(g),y=n(238),w=n.n(y),v=n(237),k=n.n(v),C=n(239),S=n.n(C),_=n(240),D=n.n(_),N=n(928),E=n(932),B=n(933),F=n(236),A=n.n(F),J=n(927),P=n(882),z=n(79),M=n(21),U=n(3),I=n(1),H=240,L=Object(u.a)((function(t){return{root:{display:"flex",marginBottom:"64px"},appBar:{zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},appBarShift:{marginLeft:H,width:"calc(100% - ".concat(H,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:H,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:H,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},drawerClose:Object(c.a)({transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),overflowX:"hidden",width:t.spacing(7)+1},t.breakpoints.up("sm"),{width:t.spacing(9)+1}),toolbar:Object(r.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1)},t.mixins.toolbar),content:{flexGrow:1,padding:t.spacing(3)}}}));function G(t){var e,n,r=t.setPresentPage,i=L(),u=Object(l.a)(),g=o.a.useState(!1),y=Object(a.a)(g,2),v=y[0],C=y[1],_=o.a.useState(null),F=Object(a.a)(_,2),H=F[0],G=F[1],R=Boolean(H),T=Object(M.b)(),X=Object(M.c)((function(t){return t.logstate})),W=function(){G(null)};return Object(I.jsx)(I.Fragment,{children:null!==X?Object(I.jsxs)("div",{className:i.root,children:[Object(I.jsx)(p.a,{}),Object(I.jsx)(j.a,{position:"fixed",color:"secondary",className:Object(s.a)(i.appBar,Object(c.a)({},i.appBarShift,v)),children:Object(I.jsxs)(b.a,{children:[X.isAdmin&&Object(I.jsx)(x.a,{color:"inherit","aria-label":"open drawer",onClick:function(){C(!0)},edge:"start",className:Object(s.a)(i.menuButton,Object(c.a)({},i.hide,v)),children:Object(I.jsx)(m.a,{})}),Object(I.jsxs)(h.a,{variant:"h6",style:{flexGrow:"1"},children:["Hello ",X.name]}),Object(I.jsxs)("div",{children:[Object(I.jsx)(x.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(t){G(t.currentTarget)},color:"inherit",children:Object(I.jsx)(A.a,{})}),Object(I.jsxs)(P.a,{id:"menu-appbar",anchorEl:H,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:R,onClose:W,children:[Object(I.jsx)(J.a,{onClick:W,children:"Profile"}),Object(I.jsx)(J.a,{onClick:function(){return T(Object(z.h)())},children:"Logout"})]})]})]})}),X.isAdmin&&Object(I.jsxs)(d.a,{variant:"permanent",className:Object(s.a)(i.drawer,(e={},Object(c.a)(e,i.drawerOpen,v),Object(c.a)(e,i.drawerClose,!v),e)),classes:{paper:Object(s.a)((n={},Object(c.a)(n,i.drawerOpen,v),Object(c.a)(n,i.drawerClose,!v),n))},children:[Object(I.jsx)("div",{className:i.toolbar,children:Object(I.jsx)(x.a,{onClick:function(){C(!1)},children:"rtl"===u.direction?Object(I.jsx)(k.a,{}):Object(I.jsx)(w.a,{})})}),Object(I.jsx)(O.a,{}),Object(I.jsx)(f.a,{children:["Home","User Management"].map((function(t,e){return Object(I.jsxs)(N.a,{button:!0,onClick:function(){return r(e%2===0?"Home":"uManage")},children:[Object(I.jsx)(E.a,{children:0===e?Object(I.jsx)(S.a,{}):Object(I.jsx)(D.a,{})}),Object(I.jsx)(B.a,{primary:t})]},t)}))}),Object(I.jsx)(O.a,{})]})]}):Object(I.jsx)(U.a,{to:"/DD-User-management/"})})}},162:function(t,e,n){"use strict";n(0);var a=n(241),r=n.n(a),c=n(21),i=n(1),o=r.a.ExcelFile,s=r.a.ExcelFile.ExcelSheet,u=r.a.ExcelFile.ExcelColumn;e.a=function(){var t=Object(c.c)((function(t){return t.data}));return Object(i.jsx)(o,{element:Object(i.jsx)("button",{style:{margin:"15px"},children:"Export to Xlsx"}),children:Object(i.jsxs)(s,{data:t,name:"Data",children:[Object(i.jsx)(u,{label:"id",value:"id"}),Object(i.jsx)(u,{label:"chart_label",value:"chart_label"}),Object(i.jsx)(u,{label:"chart_type",value:"chart_type"}),Object(i.jsx)(u,{label:"data_source",value:"data_source"}),Object(i.jsx)(u,{label:"data",value:function(t){return JSON.stringify(t.data)}})]})})}},192:function(t,e){},193:function(t,e,n){"use strict";var a=n(60),r=n(329),c=n(21),i=n(1);e.a=function(){var t=Object(c.c)((function(t){return t.data})),e=Object(i.jsx)(r.Document,{children:Object(i.jsx)(r.Page,{size:"A4",wrap:!0,children:Object(i.jsx)(r.Text,{render:function(e){e.pageNumber,e.totalPages;return"".concat(t.map((function(t){return"ID : ".concat(t.id,", chart_label : ").concat(t.chart_label,", chart_type : ").concat(t.chart_type,", data_source : ").concat(t.data_source,", data : ").concat(JSON.stringify(t.data))})))},style:{color:"black",margin:30},wrap:!0})})}),n=Object(r.usePDF)({document:e}),o=Object(a.a)(n,1)[0];return o.loading?Object(i.jsx)("div",{children:"Loading ..."}):o.error?Object(i.jsxs)("div",{children:["Something went wrong: ",o.error]}):Object(i.jsx)("a",{href:o.url,download:"test.pdf",children:Object(i.jsx)("button",{children:"Export to PDF"})})}},260:function(t,e){},261:function(t,e){},270:function(t,e){},271:function(t,e){},291:function(t,e){},293:function(t,e){},294:function(t,e){},297:function(t,e){},298:function(t,e){},303:function(t,e){},304:function(t,e){},312:function(t,e){},318:function(t,e){},321:function(t,e){},325:function(t,e){},326:function(t,e){},334:function(t,e){},335:function(t,e){},79:function(t,e,n){"use strict";n.d(e,"g",(function(){return a})),n.d(e,"h",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"c",(function(){return l}));var a=function(t){return{type:"login",payload:t}},r=function(){return{type:"logout"}},c=function(t){return{type:"addUser",payload:t}},i=function(t){return{type:"editUser",payload:t}},o=function(t){return{type:"deleteUser",payload:t}},s=function(t){return{type:"addData",payload:t}},u=function(t){return{type:"editData",payload:t}},l=function(t){return{type:"deleteData",payload:t}}},946:function(t,e,n){"use strict";n.r(e);var a=n(64),r=n.n(a),c=n(161),i=n(0),o=n.n(i),s=n(160),u=n(910),l=n(21),d=n(435),j=n(162),b=n(193),f=(n(148),n(1));e.default=function(){var t=Object(l.c)((function(t){return t.data})),e=o.a.useRef([]),n=function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:new d.a(e.current[n.id].getContext("2d"),{type:n.chart_type,data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:n.chart_label,data:n.data,backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return o.a.useEffect((function(){t.forEach((function(t){n(t)}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(s.a,{}),Object(f.jsxs)(u.a,{children:[Object(f.jsx)("div",{className:"content",children:t.map((function(t,n){return Object(f.jsx)("div",{className:"chart-holder",children:Object(f.jsx)("canvas",{ref:function(n){return e.current[t.id]=n}})},n)}))}),Object(f.jsx)(j.a,{}),Object(f.jsx)(b.a,{})]})]})}}}]);
//# sourceMappingURL=7.1cbaa39b.chunk.js.map
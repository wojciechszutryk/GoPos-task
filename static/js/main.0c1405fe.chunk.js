(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{154:function(e,t,n){},195:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(36),i=n.n(r),o=(n(154),n(132)),s=n(26),u=n(245),j=n(235),l=n(248),d=(n(155),n(17)),b=n(11),h=n(256),O=n(257),f=n(258),p=n(259),x=n(260),m=n(261),g=n(262),v=n(263),y=n(264),C=n(247),w=n(234),S=Object(C.a)((function(){return Object(w.a)({center:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"70vh"}})})),k=n(35),_=n.n(k),N=n(64),L=function(){var e=Object(N.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://newdemostock.gopos.pl/ajax/219","/products?include=category&include="),{headers:{"Content-Type":"application/json",Authorization:"".concat("fd9ba9e1-0788-4e8f-ac46-a43df43e205e")}});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(N.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://newdemostock.gopos.pl/ajax/219","/product_categories"),{headers:{"Content-Type":"application/json",Authorization:"".concat("fd9ba9e1-0788-4e8f-ac46-a43df43e205e")}});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(N.a)(_.a.mark((function e(t){var n,c,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,c=t.name,e.next=3,fetch("".concat("https://newdemostock.gopos.pl/ajax/219","/product_categories/").concat(n),{method:"PUT",body:JSON.stringify({id:n,name:c}),headers:{"Content-Type":"application/json",Authorization:"".concat("fd9ba9e1-0788-4e8f-ac46-a43df43e205e")}});case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(N.a)(_.a.mark((function e(t){var n,c,a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,c=t.name,a=t.category_id,e.next=3,fetch("".concat("https://newdemostock.gopos.pl/ajax/219","/products/").concat(n),{method:"PUT",body:JSON.stringify({name:c,category_id:a,type:"BASIC",tax_id:1,status:"ENABLED",measure_type:"ITEM"}),headers:{"Content-Type":"application/json",Authorization:"".concat("fd9ba9e1-0788-4e8f-ac46-a43df43e205e")}});case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(N.a)(_.a.mark((function e(t){var n,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,e.next=3,fetch("".concat("https://newdemostock.gopos.pl/ajax/219","/product_categories"),{method:"POST",body:JSON.stringify({name:n}),headers:{"Content-Type":"application/json",Authorization:"".concat("fd9ba9e1-0788-4e8f-ac46-a43df43e205e")}});case 3:return c=e.sent,e.next=6,c.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(N.a)(_.a.mark((function e(t){var n,c,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,c=t.category_id,console.log(n,c),e.next=4,fetch("".concat("https://newdemostock.gopos.pl/ajax/219","/products/"),{method:"POST",body:JSON.stringify({name:n,category_id:c,type:"BASIC",measure_type:"ITEM",status:"ENABLED",tax_id:1}),headers:{"Content-Type":"application/json",Authorization:"".concat("fd9ba9e1-0788-4e8f-ac46-a43df43e205e")}});case 4:return a=e.sent,e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=n(27),Q=n(45),z=n(1),B=function(){var e=S(),t=a.a.useState([]),n=Object(b.a)(t,2),r=n[0],i=n[1],o=Object(P.useQuery)("categoriesList",E,{onSuccess:function(e){i([]),e.data.forEach((function(e){i((function(t){return[].concat(Object(d.a)(t),[e.name])}))}))}}),s=o.isLoading,u=o.error,l=Object(c.useMemo)((function(){var e=[];return e.push("category"),e}),[]),C=Object(c.useMemo)((function(){return r.map((function(e){return{name:e}}))}),[r]);return s?Object(z.jsx)(j.a,{className:e.center,children:Object(z.jsx)(Q.ClipLoader,{size:150})}):u?Object(z.jsx)(h.a,{children:"An error has occurred"}):Object(z.jsxs)(j.a,{className:e.center,children:[Object(z.jsx)(O.a,{variant:"h2",align:"center",children:"Categories list:"}),Object(z.jsx)(f.a,{component:p.a,elevation:0,children:Object(z.jsxs)(x.a,{"aria-label":"products table",children:[Object(z.jsx)(m.a,{children:Object(z.jsx)(g.a,{children:l.map((function(e,t){return Object(z.jsx)(v.a,{children:Object(z.jsx)(O.a,{variant:"h4",children:e})},t)}))})}),Object(z.jsx)(y.a,{children:C.map((function(e,t){return Object(z.jsx)(g.a,{children:Object.values(e).map((function(e,t){return Object(z.jsx)(v.a,{children:e},t)}))},t)}))})]})})]})},D=n(251),H=n(267),J=Object(C.a)((function(){return Object(w.a)({center:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"70vh"}})})),F=function(){var e=J(),t=Object(P.useQueryClient)(),n=a.a.useState([]),r=Object(b.a)(n,2),i=r[0],o=r[1],s=a.a.useState([]),u=Object(b.a)(s,2),l=u[0],C=u[1],w=Object(P.useQuery)("categoriesEdit",E,{onSuccess:function(e){C([]),o((function(e){return[].concat(Object(d.a)(e),[""])})),e.data.forEach((function(e){C((function(t){return[].concat(Object(d.a)(t),[{name:e.name,id:e.id}])}))}))}}),S=w.isLoading,k=w.error,_=Object(P.useMutation)(A,{onSuccess:function(){o(Array(l.length).fill("")),t.invalidateQueries("categoriesEdit"),alert("success")},onError:function(){alert("error")}}),N=Object(c.useMemo)((function(){var e=[];return e.push("name"),e.push("new name"),e.push("edit"),e}),[]),L=a.a.useCallback((function(e,t){var n=t.target.value,c=Object(d.a)(i);c[e]=n,o(c)}),[i]),I=Object(c.useMemo)((function(){return l.map((function(e,t){return{name:Object(z.jsx)(O.a,{children:e.name}),newName:Object(z.jsx)(D.a,{multiline:!0,placeholder:e.name,value:i[t],onChange:function(e){return L(t,e)}}),save:Object(z.jsx)(H.a,{onClick:function(){return _.mutate({id:e.id,name:i[t]})},children:S?Object(z.jsx)(Q.ClipLoader,{}):Object(z.jsx)(O.a,{children:"Save"})})}}))}),[l,_,L,S,i]);return S?Object(z.jsx)(j.a,{className:e.center,children:Object(z.jsx)(Q.ClipLoader,{size:150})}):k?Object(z.jsx)(h.a,{children:"An error has occurred"}):Object(z.jsxs)(j.a,{className:e.center,children:[Object(z.jsx)(O.a,{variant:"h2",align:"center",children:"Categories list:"}),Object(z.jsx)(f.a,{component:p.a,elevation:0,children:Object(z.jsxs)(x.a,{"aria-label":"products table",children:[Object(z.jsx)(m.a,{children:Object(z.jsx)(g.a,{children:N.map((function(e,t){return Object(z.jsx)(v.a,{children:Object(z.jsx)(O.a,{variant:"h4",children:e})},t)}))})}),Object(z.jsx)(y.a,{children:I.map((function(e,t){return Object(z.jsx)(g.a,{children:Object.values(e).map((function(e,t){return Object(z.jsx)(v.a,{children:e},t)}))},t)}))})]})})]})},U=n(252),q=n(253),G=n(246),K=n(250),R=Object(C.a)((function(){return Object(w.a)({center:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"70vh"}})})),V=function(){var e=R(),t=Object(P.useQueryClient)(),n=a.a.useState([]),r=Object(b.a)(n,2),i=r[0],o=r[1],s=a.a.useState([]),u=Object(b.a)(s,2),l=u[0],C=u[1],w=a.a.useState([]),S=Object(b.a)(w,2),k=S[0],_=S[1],N=Object(P.useQuery)("productsEdit",L,{onSuccess:function(e){C([]),o([]),e.data.forEach((function(e){C((function(t){return[].concat(Object(d.a)(t),[{name:e.name,category:e.category.name,id:e.id}])})),o((function(t){return[].concat(Object(d.a)(t),[{category_id:"",name:"",id:e.id}])}))}))}}),A=N.isLoading,M=N.error,T=Object(P.useQuery)("categoriesSelect",E,{onSuccess:function(e){_([]),e.data.forEach((function(e){_((function(t){return[].concat(Object(d.a)(t),[{name:e.name,id:e.id}])}))}))}}),B=T.isLoading,J=T.error,F=Object(P.useMutation)(I,{onSuccess:function(){o(Array(i.length).fill({category_id:"",name:"",id:""})),t.invalidateQueries("productsEdit"),alert("success")},onError:function(){alert("error")}}),V=Object(c.useMemo)((function(){var e=[];return e.push("name"),e.push("category"),e.push("new name"),e.push("new category"),e.push("edit"),e}),[]),W=a.a.useCallback((function(e,t){var n=t.target.value,c=Object(d.a)(i);c[e].name=n,o(c)}),[i]),X=a.a.useCallback((function(e,t){var n=t.target.value,c=Object(d.a)(i);c[e].category_id=n.toString(),o(c)}),[i]),Y=Object(c.useMemo)((function(){return l.map((function(e,t){var n,c,a,r,o=e.name,s=e.category;e.id;return{name:Object(z.jsx)(O.a,{children:o}),category:Object(z.jsx)(O.a,{children:s}),newName:Object(z.jsx)(D.a,{multiline:!0,placeholder:o,value:null!==(n=null===(c=i[t])||void 0===c?void 0:c.name)&&void 0!==n?n:null,onChange:function(e){return W(t,e)}}),newCategory:Object(z.jsxs)(U.a,{children:[Object(z.jsx)(q.a,{id:"new_category",children:"new Category"}),Object(z.jsx)(G.a,{sx:{width:300},labelId:"new_category_label",id:"new_category_select",value:null!==(a=null===(r=i[t])||void 0===r?void 0:r.category_id)&&void 0!==a?a:null,label:"new category",onChange:function(e){return X(t,e)},children:k.map((function(e){return Object(z.jsx)(K.a,{value:e.id,children:e.name},e.id)}))})]}),save:Object(z.jsx)(H.a,{onClick:function(){return F.mutate({id:i[t].id,name:i[t].name,category_id:i[t].category_id})},children:A?Object(z.jsx)(Q.ClipLoader,{}):Object(z.jsx)(O.a,{children:"Save"})})}}))}),[k,A,i,l,W,F,X]);return A||B?Object(z.jsx)(j.a,{className:e.center,children:Object(z.jsx)(Q.ClipLoader,{size:150})}):M||J?Object(z.jsx)(h.a,{children:"An error has occurred"}):Object(z.jsxs)(j.a,{className:e.center,children:[Object(z.jsx)(O.a,{variant:"h2",align:"center",children:"Products list:"}),Object(z.jsx)(f.a,{component:p.a,elevation:0,children:Object(z.jsxs)(x.a,{"aria-label":"products table",children:[Object(z.jsx)(m.a,{children:Object(z.jsx)(g.a,{children:V.map((function(e,t){return Object(z.jsx)(v.a,{children:Object(z.jsx)(O.a,{variant:"h4",children:e})},t)}))})}),Object(z.jsx)(y.a,{children:Y.map((function(e,t){return Object(z.jsx)(g.a,{children:Object.values(e).map((function(e,t){return Object(z.jsx)(v.a,{children:e},t)}))},t)}))})]})})]})},W=Object(C.a)((function(){return Object(w.a)({center:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"70vh"}})})),X=function(){var e=W();return Object(z.jsx)(j.a,{className:e.center,children:Object(z.jsx)(O.a,{variant:"body1",align:"center",children:"Home"})})},Y=Object(C.a)((function(){return Object(w.a)({center:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"40vh"}})})),Z=function(){var e=Y(),t=Object(c.useState)(""),n=Object(b.a)(t,2),r=n[0],i=n[1],o=Object(P.useMutation)(M,{onSuccess:function(){i(""),alert("success")},onError:function(){alert("error")}}),s=a.a.useCallback((function(e){var t=e.target.value;i(t)}),[]);return Object(z.jsxs)(h.a,{className:e.center,children:[Object(z.jsx)(O.a,{variant:"body1",align:"center",gutterBottom:!0,children:"New Category"}),Object(z.jsx)(D.a,{multiline:!0,placeholder:"name",value:r,onChange:function(e){return s(e)}}),Object(z.jsx)(H.a,{onClick:function(){return o.mutate({name:r})},children:Object(z.jsx)(O.a,{children:"Save"})})]})},$=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),o=Object(b.a)(i,2),s=o[0],u=o[1],l=Y(),f=Object(c.useState)([]),p=Object(b.a)(f,2),x=p[0],m=p[1],g=Object(P.useQuery)("categoriesSelect",E,{onSuccess:function(e){m([]),e.data.forEach((function(e){m((function(t){return[].concat(Object(d.a)(t),[{name:e.name,id:e.id}])}))}))}}),v=g.isLoading,y=g.error,C=Object(P.useMutation)(T,{onSuccess:function(){r(""),u(""),alert("success")},onError:function(){alert("error")}}),w=a.a.useCallback((function(e){var t=e.target.value;u(t)}),[]),S=a.a.useCallback((function(e){var t=e.target.value;r(t)}),[]);return v?Object(z.jsx)(j.a,{className:l.center,children:Object(z.jsx)(Q.ClipLoader,{size:150})}):y?Object(z.jsx)(h.a,{children:"An error has occurred"}):Object(z.jsxs)(h.a,{className:l.center,children:[Object(z.jsx)(O.a,{variant:"body1",align:"center",gutterBottom:!0,children:"New Product"}),Object(z.jsx)(D.a,{sx:{marginBottom:1},multiline:!0,placeholder:"name",value:n,onChange:function(e){return S(e)}}),Object(z.jsxs)(U.a,{children:[Object(z.jsx)(q.a,{id:"new_category",children:"new Category"}),Object(z.jsx)(G.a,{sx:{width:300,marginBottom:2},labelId:"new_category_label",id:"new_category_select",value:s,label:"new category",onChange:function(e){return w(e)},children:x.map((function(e){return Object(z.jsx)(K.a,{value:e.id,children:e.name},e.id)}))})]}),Object(z.jsx)(H.a,{onClick:function(){return C.mutate({name:n,category_id:s})},children:Object(z.jsx)(O.a,{children:"Save"})})]})},ee=function(){var e=Y();return Object(z.jsxs)(j.a,{className:e.center,children:[Object(z.jsx)(Z,{}),Object(z.jsx)($,{})]})},te=Object(C.a)((function(){return Object(w.a)({center:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"70vh"}})})),ne=function(){var e=te(),t=a.a.useState([]),n=Object(b.a)(t,2),r=n[0],i=n[1],o=Object(P.useQuery)("products",L,{onSuccess:function(e){i([]),e.data.forEach((function(e){var t={name:e.name,categoryId:e.category.id,categoryName:e.category.name};i((function(e){return[].concat(Object(d.a)(e),[t])}))}))}}),s=o.isLoading,u=o.error,l=Object(c.useMemo)((function(){var e=[];return e.push("name"),e.push("category"),e}),[]),C=Object(c.useMemo)((function(){return r.map((function(e,t){return{name:e.name,category:e.categoryName}}))}),[r]);return s?Object(z.jsx)(j.a,{className:e.center,children:Object(z.jsx)(Q.ClipLoader,{size:150})}):u?Object(z.jsx)(h.a,{children:"An error has occurred"}):Object(z.jsxs)(j.a,{className:e.center,children:[Object(z.jsx)(O.a,{variant:"h2",align:"center",children:"Products list:"}),Object(z.jsx)(f.a,{component:p.a,elevation:0,children:Object(z.jsxs)(x.a,{"aria-label":"products table",children:[Object(z.jsx)(m.a,{children:Object(z.jsx)(g.a,{children:l.map((function(e,t){return Object(z.jsx)(v.a,{children:Object(z.jsx)(O.a,{variant:"h4",children:e})},t)}))})}),Object(z.jsx)(y.a,{children:C.map((function(e,t){return Object(z.jsx)(g.a,{children:Object.values(e).map((function(e,t){return Object(z.jsx)(v.a,{children:e},t)}))},t)}))})]})})]})};var ce=function(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(u.a,{bg:"light",expand:"lg",children:Object(z.jsxs)(j.a,{children:[Object(z.jsx)(u.a.Brand,{href:"#home",children:"Lorem..."}),Object(z.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(z.jsx)(u.a.Collapse,{id:"basic-navbar-nav",children:Object(z.jsxs)(l.a,{className:"me-auto",children:[Object(z.jsx)(l.a.Link,{href:"#home",children:"Home"}),Object(z.jsx)(l.a.Link,{href:"#products",children:"Products"}),Object(z.jsx)(l.a.Link,{href:"#categories",children:"Categories"}),Object(z.jsx)(l.a.Link,{href:"#products/edit",children:"Edit Products"}),Object(z.jsx)(l.a.Link,{href:"#categories/edit",children:"Edit Categories"}),Object(z.jsx)(l.a.Link,{href:"#new",children:"Create new"})]})})]})}),Object(z.jsx)(o.a,{children:Object(z.jsxs)(s.c,{children:[Object(z.jsx)(s.a,{exact:!0,path:"/products",component:ne}),Object(z.jsx)(s.a,{exact:!0,path:"/categories",component:B}),Object(z.jsx)(s.a,{exact:!0,path:"/products/edit",component:V}),Object(z.jsx)(s.a,{exact:!0,path:"/categories/edit",component:F}),Object(z.jsx)(s.a,{exact:!0,path:"/new",component:ee}),Object(z.jsx)(s.a,{path:"/",component:X})]})})]})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,269)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},re=new P.QueryClient;i.a.render(Object(z.jsx)(P.QueryClientProvider,{client:re,children:Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(ce,{})})}),document.getElementById("root")),ae()}},[[195,1,2]]]);
//# sourceMappingURL=main.0c1405fe.chunk.js.map
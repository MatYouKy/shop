(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{183:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(64),a=n.n(r),i=n(6),o=n(3),l=(n(74),n(0)),u=function(){return Object(l.jsx)("div",{className:"shadow"})},j=(n(76),function(){var e=Object(o.f)();return Object(l.jsxs)("article",{id:"home-section",className:"home-section",children:[Object(l.jsx)(u,{}),Object(l.jsx)("div",{className:"blur"}),Object(l.jsxs)("div",{className:"home-text",children:[Object(l.jsx)("h1",{className:"home-text__header",children:"welcome to the world!"}),Object(l.jsx)("p",{children:"in the best store of electronics"}),Object(l.jsx)("button",{className:"home-text__button",type:"button",onClick:function(){return e("products")},children:"check it"})]})]})}),d=n(2),m=n(65),b=n(5),O=n.n(b),p=n(10),h=n(4),f=n(7),x=function(){return window.innerWidth>=992},g=Object(c.createContext)(),_=function(e){var t=e.children,n="".concat("/shop","/products.json"),s=Object(c.useState)([]),r=Object(d.a)(s,2),a=r[0],i=r[1],o=Object(c.useState)(x()),u=Object(d.a)(o,2),j=u[0],m=u[1],b=Object(c.useState)(!1),_=Object(d.a)(b,2),N=_[0],v=_[1],w=Object(c.useState)([]),C=Object(d.a)(w,2),y=C[0],P=C[1];return Object(c.useEffect)((function(){var e=function(){return m(x())};return window.addEventListener("resize",e),function(){return window.removeEventListener("rezise",e)}}),[j]),Object(c.useEffect)((function(){j&&v(!1)}),[j]),Object(c.useEffect)((function(){var e=function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.json()})).then((function(e){return i(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(n)}),[]),Object(l.jsx)(g.Provider,{value:{menu:j,toggle:N,products:a,URL:n,cartItems:y,handleToggle:function(e){return v(e)},addOneProduct:function(e){var t=y.find((function(t){return t.id===e.id}));P(t?y.map((function(n){return n.id===e.id?Object(f.a)(Object(f.a)({},t),{},{pcs:t.pcs+1}):n})):[].concat(Object(h.a)(y),[Object(f.a)(Object(f.a)({},e),{},{pcs:1})]))},removeOneProduct:function(e){var t=y.find((function(t){return t.id===e.id}));1===t.pcs?P(y.filter((function(t){return t.id!==e.id}))):P(y.map((function(n){return n.id===e.id?Object(f.a)(Object(f.a)({},t),{},{pcs:t.pcs-1}):n})))},setCartItems:P},children:t})},N=(n(78),function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("".concat("/shop","/products.json")).then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(e){return console.log("Error in get users",e)}))}),[]),{products:n}}),v=function(){var e=N().products,t=Object(c.useContext)(g).addOneProduct,n=Object(c.useState)([]),s=Object(d.a)(n,2),r=s[0],a=s[1],o=Object(c.useState)(!0),j=Object(d.a)(o,2),b=j[0],O=j[1],p=Object(c.useState)(7),h=Object(d.a)(p,2),f=h[0],x=h[1],_=r.map((function(e){var n=e.description.slice(0,100);return Object(l.jsxs)("li",{className:"products-list__item",children:[Object(l.jsx)(i.b,{to:"/products/".concat(e.id),children:Object(l.jsx)("img",{src:"img/".concat(e.img),alt:e.name,className:"products-list__item-img"})}),Object(l.jsxs)("div",{className:"products-description",children:[Object(l.jsx)(i.b,{className:"products-description__title text",to:"/products/".concat(e.id),children:e.name}),Object(l.jsxs)("p",{className:"products-description__describe text",children:[" ","".concat(n,"....")]}),Object(l.jsxs)("div",{className:"products-description__bottom-section",children:[Object(l.jsxs)("h4",{className:"text",children:[" ",e.price,"z\u0142"]}),Object(l.jsx)("button",{className:"products-description__bottom-section--button",id:e.id,type:"button",onClick:function(){return t(e)},onKeyPress:function(){return t(e)},children:"add to basket"})]})]})]},e.id)}));return Object(c.useEffect)((function(){e&&a(e.slice(0,7))}),[e]),Object(l.jsx)("article",{className:"products-section",children:Object(l.jsxs)("div",{className:"products__container",children:[Object(l.jsx)(u,{}),Object(l.jsx)(m.a,{className:"products-list",dataLength:f,next:function(){f>=e.length?O(!1):setTimeout((function(){var t;t=f+4,a(e.slice(0,t)),x(f+4)}),1e3)},hasMore:b,loader:Object(l.jsx)("div",{className:"products-list__info",children:Object(l.jsx)("p",{className:"products-list__info",children:"Loading..."})}),endMessage:Object(l.jsx)("div",{className:"products-list__end",children:Object(l.jsx)("p",{className:"products-list__info",children:"That's all"})}),children:_})]})})},w=(n(79),function(){var e=Object(o.f)(),t=Object(c.useContext)(g),n=t.cartItems,s=t.addOneProduct,r=t.removeOneProduct,a=n.reduce((function(e,t){return e+t.price*t.pcs}),0);return Object(l.jsxs)("article",{id:"shopping-cart",className:"shopping-cart",children:[Object(l.jsx)(u,{}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"title",children:"order summary"}),n.length<=0?Object(l.jsx)("h3",{children:"Cart is Empty "}):Object(l.jsxs)("div",{className:"list-wrapper",children:[Object(l.jsx)("ul",{className:"shopping-list",children:n.map((function(e){return Object(l.jsxs)("li",{className:"list",children:[Object(l.jsxs)("figure",{className:"photo",children:[Object(l.jsx)("img",{src:"img/".concat(e.img),alt:e.name,className:"photo__img"}),Object(l.jsxs)("figcaption",{className:"photo__caption",children:[e.name," "]})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"quantity",children:[Object(l.jsx)("button",{className:"quantity__button",onClick:function(){return s(e)},onKeyPress:function(){return s(e)},type:"button",children:"+"}),Object(l.jsx)("button",{className:"quantity__button decrement",onClick:function(){return r(e)},onKeyPress:function(){return r(e)},type:"button",children:"-"}),Object(l.jsxs)("p",{className:"quantity__value",children:[e.pcs,Object(l.jsx)("span",{children:" x "}),e.price.toFixed(2),"$"]})]})})]},e.id)}))}),Object(l.jsxs)("div",{className:"summary",children:[Object(l.jsxs)("h2",{className:"summary__value",children:["Total: ",a.toFixed(2),"$"]}),Object(l.jsx)("button",{type:"button",className:"summary__button",onClick:function(){console.log("I order"),e("/shopping-cart/order",{state:{cartItems:n,price:a}})},children:"buy it"})]})]})]})]})}),C=(n(80),function(e){var t=e.id,n=e.name,c=e.img,s=e.description,r=e.price,a=e.addOneProduct,i=e.product,u=Object(o.f)();return Object(l.jsxs)("section",{className:"product-focus",children:[Object(l.jsxs)("div",{className:"focus-main",children:[Object(l.jsx)("img",{className:"focus-main__img",src:"../img/".concat(c),alt:n}),Object(l.jsxs)("div",{className:"focus-main__interaction",children:[Object(l.jsxs)("h5",{className:"focus-main__price",children:[r,"$"]}),Object(l.jsx)("button",{className:"focus-main__button",id:t,onClick:function(){a(i),u(-1)},type:"button",children:"add to basket"})]})]}),Object(l.jsx)("h5",{children:"describe:"}),Object(l.jsx)("p",{className:"focus-main__describe",children:s}),Object(l.jsx)("button",{type:"button",className:"focus-main__back",onClick:function(){return u(-1)},children:"\u2190"})]})}),y=(n(81),function(){var e=N().products,t=Object(c.useContext)(g).addOneProduct,n=Object(o.g)().id,s=Object(c.useState)({id:null,name:"",description:"",img:"",price:0,click:function(){}}),r=Object(d.a)(s,2),a=r[0],i=r[1];return Object(c.useEffect)((function(){!function(){if(e){var t=parseInt(n,10);(e.length<=parseInt(n,10)||"0"===n)&&(t=1);var c=e.findIndex((function(e){return e.id===t}));i(e[c])}}()}),[e]),Object(l.jsxs)("article",{className:"product-page",children:[Object(l.jsx)(u,{}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"container__title",children:a.name}),Object(l.jsx)(C,{id:a.id,name:a.name,description:a.description,img:a.img,price:a.price,addOneProduct:t,product:a})]})]})}),P=n(24),k=n.n(P),S=Object(c.createContext)(),E=function(e){var t=e.children,n=Object(c.useState)(!1),s=Object(d.a)(n,2),r=s[0],a=s[1],i=Object(c.useState)({name:"",email:""}),o=Object(d.a)(i,2),u=o[0],j=o[1];return Object(l.jsx)(S.Provider,{value:{currentUser:u,isLogged:r,setCurrentUser:j,setIsLogged:a},children:t})},I=function(e){var t=Object(o.f)(),n=function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("".concat("/shop","/users.json")).then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(e){return console.log("Error in get users",e)}))}),[]),{users:n}}(),s=n.users,r=Object(c.useContext)(S),a=r.setIsLogged,i=r.setCurrentUser,l={name:"admin",email:"admin@admin.pl",password:"admin123"};Object(c.useEffect)((function(){if(e.email===l.email&&e.password===l.password)a(!0),i(l),setTimeout((function(){t(-1)}),1e3);else if(s){var n=s.find((function(t){return t.email===e.email&&t.password===e.password}));n?(a(!0),i(n),setTimeout((function(){t(-1)}),1e3)):(a(!1),i({name:"",email:""}))}}),[e])};I.default={userValidate:{name:"",email:"",password:""}},I.propTypes={userValidate:k.a.shape({name:k.a.string,email:k.a.string,password:k.a.string})};n(41);var L=function(){var e=Object(c.useState)({name:"",email:"",password:""}),t=Object(d.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)({name:"",email:"",password:""}),a=Object(d.a)(r,2),o=a[0],u=a[1],j=Object(c.useState)(""),m=Object(d.a)(j,2),b=m[0],O=m[1];I(o);return Object(l.jsxs)("form",{className:"form-inner",onSubmit:function(e){e.preventDefault(),function(e){u(e),s({name:"",email:"",password:""}),O("details do not Match")}(n)},children:[Object(l.jsx)("h2",{className:"form-inner__header-text",children:"Login"}),Object(l.jsx)("p",{className:"error",children:b}),Object(l.jsxs)("div",{className:"form-inner__group",children:[Object(l.jsx)("label",{htmlFor:"userEmail",className:"form-inner__group--label",children:"User e-mail"}),Object(l.jsx)("input",{type:"email",id:"userEmail",name:"email",className:"form-inner__group--input",onChange:function(e){return s(Object(f.a)(Object(f.a)({},n),{},{email:e.target.value}))},onClick:function(){return O("")},value:n.email})]}),Object(l.jsxs)("div",{className:"form-inner__group",children:[Object(l.jsx)("label",{htmlFor:"userPassword",className:"form-inner__group--label",children:"password"}),Object(l.jsx)("input",{type:"password",id:"userPassword",className:"form-inner__group--input",onChange:function(e){return s(Object(f.a)(Object(f.a)({},n),{},{password:e.target.value}))},onClick:function(){return O("")},value:n.password})]}),Object(l.jsx)("button",{type:"submit",className:"form-inner__buttons--button",children:"Login"}),Object(l.jsxs)("p",{className:"form-info",children:["Don't have an account yet?",Object(l.jsx)(i.b,{to:"/login/signup",className:"form-inner__buttons--link",children:"Sing up!"})]})]})},U=n(15),T=n(69),F=n(18),q=F.a().shape({userName:F.c().min(3).required(),userEmail:F.c().email().required(),userPassword:F.c().min(8).max(20).required(""),userConfirmPassword:F.c().oneOf([F.b("userPassword"),null])}),K=function(){var e,t,n,c=Object(U.d)({resolver:Object(T.a)(q)}),s=c.register,r=c.handleSubmit,a=c.formState.errors;return Object(l.jsxs)("form",{className:"form-inner",onSubmit:r((function(e){console.log(e)})),children:[Object(l.jsx)("h2",{className:"form-inner__header-text",children:"sign up"}),Object(l.jsxs)("div",{className:"form-inner__group",children:[Object(l.jsx)("label",{htmlFor:"userName",className:"form-inner__group--label",children:"User Name"}),Object(l.jsx)("input",Object(f.a)(Object(f.a)({},s("userName")),{},{placeholder:"username",id:"userName",type:"text",name:"userName",className:"form-inner__group--input"})),Object(l.jsx)("p",{className:"input-error",children:null===(e=a.userName)||void 0===e?void 0:e.message})]}),Object(l.jsxs)("div",{className:"form-inner__group",children:[Object(l.jsx)("label",{htmlFor:"userEmail",className:"form-inner__group--label",children:"User e-mail"}),Object(l.jsx)("input",Object(f.a)(Object(f.a)({},s("userEmail")),{},{placeholder:"e-mail",type:"email",name:"userEmail",className:"form-inner__group--input"})),Object(l.jsx)("p",{className:"input-error",children:null===(t=a.userEmail)||void 0===t?void 0:t.message})]}),Object(l.jsxs)("div",{className:"form-inner__group",children:[Object(l.jsx)("label",{htmlFor:"userPassword",className:"form-inner__group--label",children:"password"}),Object(l.jsx)("input",Object(f.a)(Object(f.a)({},s("userPassword")),{},{placeholder:"password",type:"password",name:"userPassword",id:"userPassword",className:"form-inner__group--input"})),Object(l.jsx)("p",{className:"input-error",children:null===(n=a.userPassword)||void 0===n?void 0:n.message})]}),Object(l.jsxs)("div",{className:"form-inner__group",children:[Object(l.jsx)("label",{htmlFor:"userConfirmPassword",className:"form-inner__group--label",children:"confirm password"}),Object(l.jsx)("input",Object(f.a)(Object(f.a)({},s("userConfirmPassword")),{},{placeholder:"repeat password",type:"password",id:"userConfirmPassword",name:"userConfirmPassword",className:"form-inner__group--input"})),Object(l.jsx)("p",{className:"input-error",children:a.userConfirmPassword&&"Password Should Match!"})]}),Object(l.jsx)("button",{type:"submit",className:"form-inner__buttons--button",children:"sign up"}),Object(l.jsxs)("p",{className:"form-info",children:["Do you have an account? ",Object(l.jsx)(i.b,{to:"/login/signin",className:"form-inner__buttons--link",children:"Sing in!"})]})]})},M=(n(183),function(){var e=Object(o.g)().action,t=Object(c.useContext)(S).currentUser;return Object(l.jsxs)("article",{id:"login",className:"login",children:[Object(l.jsx)(u,{}),""!==t.email?Object(l.jsx)("div",{className:"login__welcome",children:Object(l.jsxs)("h1",{children:["Hello, ",Object(l.jsx)("span",{children:t.name?t.name:"User"}),"!"]})}):Object(l.jsx)("section",{className:"login__form",children:"signup"===e?Object(l.jsx)(K,{}):Object(l.jsx)(L,{})})]})}),z=(n(184),function(){var e=Object(o.e)().state,t=Object(o.f)(),n=Object(c.useState)(!1),s=Object(d.a)(n,2),r=s[0],a=s[1],i=Object(c.useContext)(g),u=i.cartItems,j=i.setCartItems,m=Object(c.useContext)(S).isLogged;return console.log(e.cartItems),console.log(u),Object(c.useEffect)((function(){m&&a(!0)}),[m]),Object(l.jsxs)("article",{className:"order",children:[r?Object(l.jsx)("div",{children:"Gotowy do zakupu"}):Object(l.jsx)("div",{children:"Musisz poda\u0107 adres email"}),Object(l.jsx)("button",{type:"button",onClick:function(){j([]),t(-1)},children:"Kup"})]})}),D=[Object(l.jsx)(o.a,{path:"/*",element:Object(l.jsx)(j,{})},"/"),Object(l.jsx)(o.a,{path:"/products/*",element:Object(l.jsx)(v,{})},"/products/*"),Object(l.jsx)(o.a,{path:"/products/:id",element:Object(l.jsx)(y,{})},"/products/:id"),Object(l.jsx)(o.a,{path:"/shopping-cart",element:Object(l.jsx)(w,{})},"/shopping-cart"),Object(l.jsx)(o.a,{path:"/login/:action",element:Object(l.jsx)(M,{})},"/login/:action"),Object(l.jsx)(o.a,{path:"/shopping-cart/:order",element:Object(l.jsx)(z,{})},"/shopping-cart/order")],$=(n(185),function(){var e=Object(c.useContext)(g),t=e.toggle,n=e.menu,s=e.handleToggle;return Object(l.jsx)(l.Fragment,{children:!n&&Object(l.jsx)("div",{className:"menu-btn ".concat(t?"open":""),onClick:function(){return s(!t)},onKeyPress:function(){return s(!t)},role:"button",tabIndex:"0",children:Object(l.jsx)("div",{className:"menu-btn__burger"})})})}),J=(n(186),function(){var e=Object(c.useContext)(g),t=e.toggle,n=e.handleToggle,s=e.cartItems,r=Object(c.useContext)(S),a=r.isLogged,o=r.setIsLogged,u=r.currentUser,j=r.setCurrentUser;return Object(l.jsx)("nav",{className:"nav-menu ".concat(t?"open":""),onClick:function(){return n(!1)},onKeyPress:function(){return n(!1)},role:"none",children:Object(l.jsxs)("ul",{className:"menu",children:[Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)(i.c,{className:"menu-item__link",to:"/",children:"home"})}),Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)(i.c,{className:"menu-item__link",to:"/products",children:"products"})}),Object(l.jsxs)("li",{className:"menu-item",children:[Object(l.jsx)(i.c,{className:"menu-item__link",to:"/shopping-cart",children:"shopping cart"}),!!s.length&&Object(l.jsx)("span",{className:"menu-item__counter",children:s.length})]}),Object(l.jsx)("li",{className:"menu-item",children:a?Object(l.jsxs)(i.b,{className:"menu-item__link",to:"/",onClick:function(){o(!1),j({name:"",email:""})},children:["Logout ",u.name]}):Object(l.jsx)(i.c,{className:"menu-item__link",to:"/login/signin",children:"Login"})})]})})}),V=(n(187),function(){var e=Object(c.useContext)(g),t=e.toggle,n=e.handleToggle;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("div",{className:"header__shadow"}),Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"header-main",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)(i.b,{to:"/",children:"Shop"})}),Object(l.jsx)($,{}),t&&Object(l.jsx)("div",{className:"menu-overlay",onClick:function(){return n(!1)},onKeyPress:function(){return n(!1)},role:"none"}),Object(l.jsx)(J,{})]})})})]})}),B=(n(188),function(){return Object(l.jsxs)(i.a,{basename:"/shop",children:[Object(l.jsx)(V,{}),Object(l.jsx)(o.c,{children:D})]})});a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(_,{children:Object(l.jsx)(E,{children:Object(l.jsx)(B,{})})})}),document.getElementById("root"))},41:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){}},[[189,1,2]]]);
//# sourceMappingURL=main.df908752.chunk.js.map
(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[4],{38:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return u}));var c=r(11),a=r(0),n=r(40),s=r.n(n),o=r(1),i=Object(a.forwardRef)((function(e,t){var r=e.input,a=e.label,n=e.hasError,i=e.textError,u=e.extraClassName;return Object(o.jsxs)("div",{className:"".concat(s.a.input," ").concat(u||u),children:[Object(o.jsx)("label",{htmlFor:r.id,children:a}),Object(o.jsx)("input",Object(c.a)({ref:t},r)),n&&Object(o.jsx)("p",{className:s.a["error-text"],children:i})]})})),u=Object(a.forwardRef)((function(e,t){var r=e.id,c=e.label,a=e.hasError,n=e.textError,i=e.extraClassName;return Object(o.jsxs)("div",{className:"".concat(s.a.input," ").concat(i||i),children:[Object(o.jsx)("label",{htmlFor:r,children:c}),Object(o.jsx)("textarea",{ref:t,id:r}),a&&Object(o.jsx)("p",{className:s.a["error-text"],children:n})]})}));i.defaultProps={hasError:!1,textError:"",extraClassName:""},u.defaultProps={hasError:!1,textError:"",extraClassName:""}},40:function(e,t,r){e.exports={input:"Input_input__ftuL7","error-text":"Input_error-text__1FjL1"}},44:function(e,t,r){"use strict";var c=r(47),a=r.n(c),n=r(1);t.a=function(e){var t=e.children;return Object(n.jsx)("div",{className:a.a.card,children:t})}},46:function(e,t,r){e.exports={product:"ProductItem_product__38iUH","product-image":"ProductItem_product-image__eFiOH",details:"ProductItem_details__Th81l",title:"ProductItem_title__5tsDT",description:"ProductItem_description__1fl_X",arrow:"ProductItem_arrow__17bi3","arrow-rotate":"ProductItem_arrow-rotate__29GKJ",form:"ProductItem_form__3ozCG",input:"ProductItem_input__1U10u",price:"ProductItem_price__2p5bH",button:"ProductItem_button__52fZK"}},47:function(e,t,r){e.exports={card:"Card_card__NzkPu"}},58:function(e,t,r){e.exports={scroll:"Scroll_scroll__JajmE","products-appear":"Scroll_products-appear__3ZVRZ","scroll-end":"Scroll_scroll-end__8OUIh"}},59:function(e,t,r){e.exports={products:"Products_products__2dFwd",container:"Products_container__1UN1m",info:"Products_info__2PLvq","products-appear":"Products_products-appear__3gadR"}},70:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return k}));var c=r(4),a=r(0),n=r(36),s=r.n(n),o=r(11),i=r(37),u=r(5),d=r(38),l=r(20),j=r(46),p=r.n(j),b=r(1),m=function(e){var t=e.id,r=e.price,n=e.onAddToProduct,s=Object(a.useState)(!0),o=Object(c.a)(s,2),i=o[0],u=o[1],j=Object(a.useRef)(null);return Object(b.jsxs)("form",{className:p.a.form,onSubmit:function(e){e.preventDefault();var t=j.current.value,r=+t;0===t.trim().length||r<1||r>5?u(!1):n(r)},children:[Object(b.jsx)("div",{className:p.a.price,children:r}),Object(b.jsx)(d.a,{ref:j,extraClassName:p.a.input,label:"Amount",input:{id:"amount-".concat(t),type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(b.jsx)(l.a,{name:"Add",type:"Submit",extraClassName:p.a.button}),!i&&Object(b.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},f=Object(a.memo)(m),x=function(e){var t=e.style,r=e.className,c=e.descriptionToggler;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("svg",Object(o.a)(Object(o.a)({onClick:c,viewBox:"0 0 26 26",className:r},t),{},{children:[Object(b.jsx)("path",{d:"M.046 2.582 2.13.498l10.837 10.836L23.803.498l2.084 2.084-12.92 12.92z"}),Object(b.jsx)("path",{d:"m.046 13.582 2.084-2.084 10.837 10.836 10.836-10.836 2.084 2.084-12.92 12.92z"})]}))})},O=function(e){var t=e.description,r=e.title,n=Object(a.useState)(!1),s=Object(c.a)(n,2),o=s[0],i=s[1],u=t.slice(0,150),d=o?t:u;Object(a.useEffect)((function(){t.length>150?i(!1):i(!0)}),[t]);var l=o?"".concat(p.a.arrow," ").concat(p.a["arrow-rotate"]):"".concat(p.a.arrow);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{className:p.a.title,role:"presentation",children:r}),Object(b.jsx)("p",{className:p.a.description,children:d}),t.length>150&&Object(b.jsx)(x,{descriptionToggler:function(){return i((function(e){return!e}))},className:l,style:{}})]})},h=Object(a.memo)(O),_=function(e){var t=e.name,r=e.description,c=e.price,n=e.id,s=e.img,o="".concat(c.toFixed(2)," z\u0142"),i=Object(a.useContext)(u.b).addProduct;return Object(b.jsxs)("li",{className:p.a.product,children:[Object(b.jsx)("img",{className:p.a["product-image"],role:"presentation",src:s,alt:t}),Object(b.jsxs)("div",{className:p.a.details,children:[Object(b.jsx)(h,{description:r,title:t}),Object(b.jsx)(f,{id:n,price:o,onAddToProduct:function(e){i({name:t,description:r,price:c,id:n,img:s,amount:e})}})]})]})},v=Object(a.memo)(_),N=r(57),g=r(21),P=r(58),w=r.n(P),I=function(e){var t=e.index,r=e.hasMore,c=e.productsRender,a=e.next;return Object(b.jsx)(N.a,{className:w.a.scroll,dataLength:t,hasMore:r,scrollThreshold:.5,next:a,loader:Object(b.jsx)(g.a,{}),endMessage:Object(b.jsx)("p",{className:w.a["scroll-end"],children:"That's all"}),children:c})},E=r(59),S=r.n(E),C=r(44);function k(){var e=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),r=t[0],n=t[1],u=Object(a.useState)(null),d=Object(c.a)(u,2),l=d[0],j=d[1],p=Object(a.useCallback)(function(){var e=Object(i.a)(s.a.mark((function e(t){var r,c,a,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(null),e.prev=1,e.next=4,fetch("".concat("https://products-shop-dd6fc-default-rtdb.europe-west1.firebasedatabase.app").concat(t));case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("Something went wrong!");case 7:return e.next=9,r.json();case 9:for(i in c=e.sent,a=[],c)a.push(c[i]=Object(o.a)(Object(o.a)({},c[i]),{},{id:i}));n(a),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(1),u=e.t0.message,j(u);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{fetchProductHandler:p,products:r,error:l}}(),t=e.products,r=e.error,n=e.fetchProductHandler,u=Object(a.useState)(t.length),d=Object(c.a)(u,2),l=d[0],j=d[1],p=Object(a.useState)(!0),m=Object(c.a)(p,2),f=m[0],x=m[1],O=Object(a.useState)([]),h=Object(c.a)(O,2),_=h[0],N=h[1],g=_.map((function(e){return Object(b.jsx)(v,{name:e.name,description:e.description,price:e.price,id:"".concat(e.id),img:e.img},e.id)}));return Object(a.useEffect)((function(){N(t.slice(0,7)),j(7)}),[t]),Object(a.useEffect)((function(){n("/products.json")}),[]),Object(b.jsx)("article",{className:S.a.products,children:Object(b.jsxs)(C.a,{children:[t.length>0&&Object(b.jsx)(I,{index:l,hasMore:f,productsRender:g,next:function(){l>=t.length?x(!1):setTimeout((function(){var e;e=11,N(t.slice(0,e)),j(l+4)}),1e3)}}),!t&&Object(b.jsx)("p",{className:S.a.info,children:"No found products."}),r&&Object(b.jsx)("p",{className:S.a.info,children:r})]})})}}}]);
//# sourceMappingURL=4.52da5d7d.chunk.js.map
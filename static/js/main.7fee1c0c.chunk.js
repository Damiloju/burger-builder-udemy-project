(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"n",function(){return a}),n.d(t,"p",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"k",function(){return c}),n.d(t,"l",function(){return u}),n.d(t,"j",function(){return l}),n.d(t,"m",function(){return s}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return p}),n.d(t,"g",function(){return m}),n.d(t,"d",function(){return h}),n.d(t,"e",function(){return f}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return b}),n.d(t,"o",function(){return _});var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",m="FETCH_ORDERS_FAIL",h="AUTH_START",f="AUTH_SUCCESS",g="AUTH_FAIL",b="AUTH_LOGOUT",_="SET_AUTH_REDIRECT_PATH"},,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,,function(e,t,n){"use strict";var r=n(1),a=n(19),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://react-my-burger-634e6.firebaseio.com/ingredients.json").then(function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))}).catch(function(t){e({type:r.f})})}},u=n(2),l=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then(function(t){var a,o;n((a=t.data.name,o=e,{type:r.l,orderId:a,orderData:o}))}).catch(function(e){var t;console.log(e),n((t=e,{type:r.j,error:t}))})}},s=function(){return{type:r.m}},d=function(e,t){return function(n){n({type:r.h});var o="?auth=".concat(e,'&orderBy="userId"&equalTo="').concat(t,'"');a.a.get("/orders.json"+o).then(function(e){var t,a=[];for(var o in e.data)a.push(Object(u.a)({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))}).catch(function(e){var t;console.log(e),n((t=e,{type:r.g,error:t}))})}},p=n(31),m=n.n(p),h=function(e){return{type:r.e,token:e.idToken,id:e.localId}},f=function(){return O(),{type:r.c}},g=function(e){return function(t){setTimeout(function(){t(f())},1e3*e)}},b=function(e,t){return function(n){n({type:r.d});var a="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBTBt_Plx-HsTDs5twRne_feOqhm7jhUBc",o={email:e.email,password:e.password,returnSecureToken:!0};t||(a="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBTBt_Plx-HsTDs5twRne_feOqhm7jhUBc"),m.a.post(a,o).then(function(e){v(e),n(h(e.data)),n(g(e.data.expiresIn))}).catch(function(e){var t;n((t=e,{type:r.b,error:t}))})}},_=function(e){return{type:r.o,path:e}},E=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate")),r=localStorage.getItem("userId");if(n<=new Date)e(f());else e(h({idToken:t,localId:r})),e(g((n.getTime()-(new Date).getTime())/1e3))}else e(f())}},v=function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("userId",e.data.localId),localStorage.setItem("expirationDate",t)},O=function(){localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId")};n.d(t,"a",function(){return o}),n.d(t,"i",function(){return i}),n.d(t,"d",function(){return c}),n.d(t,"g",function(){return l}),n.d(t,"h",function(){return s}),n.d(t,"e",function(){return d}),n.d(t,"b",function(){return b}),n.d(t,"f",function(){return f}),n.d(t,"j",function(){return _}),n.d(t,"c",function(){return E})},,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__1uwnr",BreadTop:"BurgerIngredient_BreadTop__3mrIZ",Seeds1:"BurgerIngredient_Seeds1__1tBHz",Seeds2:"BurgerIngredient_Seeds2__HE9La",Meat:"BurgerIngredient_Meat__1G0hX",Cheese:"BurgerIngredient_Cheese__O3cja",Salad:"BurgerIngredient_Salad__2j0ZU",Bacon:"BurgerIngredient_Bacon__3M8Xg"}},,function(e,t,n){"use strict";var r=n(31),a=n.n(r).a.create({baseURL:"https://react-my-burger-634e6.firebaseio.com/"});t.a=a},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3MVTI",Open:"SideDrawer_Open__2LFz5",Close:"SideDrawer_Close__38PoH",Logo:"SideDrawer_Logo__3Tofg"}},,,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__3Qmpp",Label:"BuildControl_Label__2AMLH",Less:"BuildControl_Less__120So",More:"BuildControl_More__19kw-"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(63),i=n.n(o);t.a=function(e){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(60),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(62),i=n.n(o),c=n(9),u=n(32);t.a=a.a.memo(function(e){return a.a.createElement(c.a,null,a.a.createElement(u.a,{show:e.show,clicked:e.modalClosed}),a.a.createElement("div",{className:i.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))})},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2AWMH",Logo:"Toolbar_Logo__3GgxC",DesktopOnly:"Toolbar_DesktopOnly__9d7lo"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(42),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__37rHC",active:"NavigationItem_active__39bos"}},,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__3OUlf",OrderButton:"BuildControls_OrderButton__1meKa",enable:"BuildControls_enable__3juLC"}},function(e,t,n){e.exports={Button:"Button_Button__4gjhe",Success:"Button_Success__pN8Lv",Danger:"Button_Danger__1pUIs"}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(33),d=n(9);t.a=function(e,t){return function(n){function u(e){var n;return Object(r.a)(this,u),(n=Object(o.a)(this,Object(i.a)(u).call(this,e))).state={error:null},n.errorConfirmedHandler=function(){n.setState({error:null})},n.reqInterceptor=t.interceptors.request.use(function(e){return n.setState({error:null}),e}),n.resInterceptor=t.interceptors.response.use(function(e){return e},function(e){n.setState({error:e})}),n}return Object(c.a)(u,n),Object(a.a)(u,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.request.eject(this.resInterceptor)}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(s.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},"Something didn't work!",l.a.createElement("p",null,this.state.error?this.state.error.message:null)),l.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,,function(e,t,n){"use strict";var r=n(64),a=n(0),o=n.n(a),i=n(20),c=n(61),u=n.n(c),l=n(4),s=n(5),d=n(7),p=n(6),m=n(8),h=n(17),f=n.n(h),g=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:f.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:f.a.BreadTop},o.a.createElement("div",{className:f.a.Seeds1}),o.a.createElement("div",{className:f.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:f.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:f.a.Cheese});break;case"salad":e=o.a.createElement("div",{className:f.a.Salad});break;case"bacon":e=o.a.createElement("div",{className:f.a.Bacon});break;default:e=null}return e}}]),t}(a.Component);t.a=Object(i.f)(function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(r.a)(Array(e.ingredients[t])).map(function(e,n){return o.a.createElement(g,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return o.a.createElement("div",{className:u.a.Burger},o.a.createElement(g,{type:"bread-top"}),0===t.length?o.a.createElement("p",null,"Please start adding ingredients"):t,o.a.createElement(g,{type:"bread-bottom"}))})},,,function(e,t,n){e.exports={Content:"Layout_Content__2zG2s"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__azm_U"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1PcmJ"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__12Ipn"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2xkad"}},function(e,t,n){e.exports={Burger:"Burger_Burger__1gamH"}},function(e,t,n){e.exports={Modal:"Modal_Modal__2CJm4"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__3UBS5",load1:"Spinner_load1__xFa6w"}},,function(e,t,n){e.exports=n(99)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(29),i=n.n(o),c=n(18),u=n(14),l=n(21),s=n(53),d=(n(74),n(4)),p=n(5),m=n(7),h=n(6),f=n(8),g=n(20),b=n(9),_=n(54),E=n.n(_),v=n(34),O=n.n(v),j=n(55),y=n.n(j),k=n(56),I=n.n(k),S=function(e){return a.a.createElement("div",{className:I.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:y.a,alt:"Burger-Logo"}))},C=n(57),w=n.n(C),B=n(39),T=n.n(B),N=function(e){return a.a.createElement("li",{className:T.a.NavigationItem},a.a.createElement(c.b,{to:e.link,exact:e.exact,activeClassName:T.a.active},e.children))},D=function(e){return a.a.createElement("ul",{className:w.a.NavigationItems},a.a.createElement(N,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(N,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(N,{link:"/logout"},"Logout"):a.a.createElement(N,{link:"/auth"},"Authentication"))},A=n(59),L=n.n(A),R=function(e){return a.a.createElement("div",{className:L.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},H=function(e){return a.a.createElement("header",{className:O.a.Toolbar},a.a.createElement(R,{clicked:e.drawerToggled}),a.a.createElement("div",{className:O.a.Logo},a.a.createElement(S,null)),a.a.createElement("nav",{className:O.a.DesktopOnly},a.a.createElement(D,{isAuthenticated:e.isAuthenticated})))},x=n(23),U=n.n(x),P=n(32),M=function(e){var t=[U.a.SideDrawer,U.a.Close];return e.open&&(t=[U.a.SideDrawer,U.a.open]),a.a.createElement(b.a,null,a.a.createElement(P.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" ")},a.a.createElement("div",{className:U.a.Logo},a.a.createElement(S,null)),a.a.createElement("nav",null,a.a.createElement(D,{isAuthenticated:e.isAuthenticated}))))},F=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(b.a,null,a.a.createElement(H,{isAuthenticated:this.props.isAuthenticated,drawerToggled:this.sideDrawerToggleHandler}),a.a.createElement(M,{isAuthenticated:this.props.isAuthenticated,closed:this.sideDrawerClosedHandler,open:this.state.showSideDrawer}),a.a.createElement("main",{className:E.a.Content},this.props.children))}}]),t}(r.Component),G=Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}})(F),z=n(2),q=n(51),W=n(41),J=n.n(W),Y=n(27),V=n.n(Y),X=function(e){return a.a.createElement("div",{className:V.a.BuildControl},a.a.createElement("div",{className:V.a.Label},e.label),a.a.createElement("button",{className:V.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:V.a.More,onClick:e.added},"More"))},Z=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],K=function(e){return a.a.createElement("div",{className:J.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))," "),Z.map(function(t){return a.a.createElement(X,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),a.a.createElement("button",{className:J.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuthenticated?"ORDER NOW":"SIGN UP TO ORDER"))},Q=n(33),$=n(35),ee=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}}," ",t," ")," : ",e.props.ingredients[t])});return a.a.createElement(b.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement($.a,{btnType:"Danger",clicked:this.props.purchaseCanceled},"Cancel"),a.a.createElement($.a,{btnType:"Success",clicked:this.props.purchaseContinue},"CONTINUE"))}}]),t}(r.Component),te=n(28),ne=n(43),re=n(19),ae=n(15),oe=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0)>0}},{key:"render",value:function(){var e=Object(z.a)({},this.props.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients Can't be loaded!"):a.a.createElement(te.a,null);return this.props.ingredients&&(r=a.a.createElement(b.a,null,a.a.createElement(q.a,{ingredients:this.props.ingredients}),a.a.createElement(K,{isAuthenticated:this.props.isAuthenticated,ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ingredients),price:this.props.price,ordered:this.purchaseHandler})),n=a.a.createElement(ee,{purchaseCanceled:this.purchaseCancelHandler,purchaseContinue:this.purchaseContinueHandler,price:this.props.price,ingredients:this.props.ingredients})),a.a.createElement(b.a,null,a.a.createElement(Q.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),t}(r.Component),ie=Object(u.b)(function(e){return{ingredients:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}},function(e){return{onIngredientAdded:function(t){return e(ae.a(t))},onIngredientRemoved:function(t){return e(ae.i(t))},onInitIngredients:function(){return e(ae.d())},onInitPurchase:function(){return e(ae.h())},onSetAuthRedirectPath:function(t){return e(ae.j(t))}}})(Object(ne.a)(oe,re.a)),ce=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(g.a,{to:"/"})}}]),t}(r.Component),ue=Object(u.b)(null,function(e){return{onLogout:function(){return e(ae.f())}}})(ce),le=Object(r.lazy)(function(){return n.e(4).then(n.bind(null,106))}),se=Object(r.lazy)(function(){return n.e(3).then(n.bind(null,107))}),de=Object(r.lazy)(function(){return n.e(5).then(n.bind(null,108))}),pe=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.checkIfUserIsLoggedIn()}},{key:"render",value:function(){var e=a.a.createElement(g.d,null,a.a.createElement(g.b,{path:"/auth",component:le}),a.a.createElement(g.b,{path:"/",component:ie}),a.a.createElement(g.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(g.d,null,a.a.createElement(g.b,{path:"/checkout",component:se}),a.a.createElement(g.b,{path:"/orders",component:de}),a.a.createElement(g.b,{path:"/logout",component:ue}),a.a.createElement(g.b,{path:"/auth",component:le}),a.a.createElement(g.b,{path:"/",component:ie}),a.a.createElement(g.a,{to:"/"}))),a.a.createElement("div",{className:"App"},a.a.createElement(G,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(te.a,null)},e)))}}]),t}(r.Component),me=Object(g.f)(Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}},function(e){return{checkIfUserIsLoggedIn:function(){return e(ae.c())}}})(pe));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=n(25),fe=n(1),ge={ingredients:null,totalPrice:4,error:!1,building:!1},be={salad:.5,cheese:.4,meat:1.3,bacon:.7},_e=function(e,t){return Object(z.a)({},e,{building:!0,ingredients:Object(z.a)({},e.ingredients,Object(he.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+be[t.ingredientName]})},Ee=function(e,t){return Object(z.a)({},e,{building:!0,ingredients:Object(z.a)({},e.ingredients,Object(he.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-be[t.ingredientName]})},ve=function(e,t){return Object(z.a)({},e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},error:!1,totalPrice:4,building:!1})},Oe=function(e){return Object(z.a)({},e,{error:!0})},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.a:return _e(e,t);case fe.n:return Ee(e,t);case fe.p:return ve(e,t);case fe.f:return Oe(e);default:return e}},ye={orders:[],fetchedOrders:[],loading:!1,purchased:!1,error:!1},ke=function(e){return Object(z.a)({},e,{loading:!0})},Ie=function(e,t){var n=Object(z.a)({},t.orderData,{id:t.orderId});return Object(z.a)({},e,{loading:!1,orders:e.orders.concat(n),purchased:!0})},Se=function(e){return Object(z.a)({},e,{loading:!1})},Ce=function(e){return Object(z.a)({},e,{purchased:!1})},we=function(e){return Object(z.a)({},e,{loading:!0})},Be=function(e){return Object(z.a)({},e,{loading:!1,error:!0})},Te=function(e,t){return Object(z.a)({},e,{loading:!1,fetchedOrders:t.orders,error:!1})},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.k:return ke(e);case fe.l:return Ie(e,t);case fe.j:return Se(e);case fe.m:return Ce(e);case fe.h:return we(e);case fe.i:return Te(e,t);case fe.g:return Be(e);default:return e}},De={token:null,userId:null,loading:!1,error:!1,redirectPath:"/"},Ae=function(e){return Object(z.a)({},e,{loading:!0})},Le=function(e,t){return Object(z.a)({},e,{loading:!1,error:null,token:t.token,userId:t.id})},Re=function(e,t){return Object(z.a)({},e,{loading:!1,error:t.error})},He=function(e){return Object(z.a)({},e,{token:null,userId:null})},xe=function(e,t){return Object(z.a)({},e,{redirectPath:t.path})},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.d:return Ae(e);case fe.e:return Le(e,t);case fe.b:return Re(e,t);case fe.c:return He(e);case fe.o:return xe(e,t);default:return e}},Pe=l.d,Me=Object(l.c)({burgerBuilder:je,order:Ne,auth:Ue}),Fe=Object(l.e)(Me,Pe(Object(l.a)(s.a))),Ge=a.a.createElement(u.a,{store:Fe},a.a.createElement(c.a,null,a.a.createElement(me,null)));i.a.render(Ge,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[65,1,2]]]);
//# sourceMappingURL=main.7fee1c0c.chunk.js.map
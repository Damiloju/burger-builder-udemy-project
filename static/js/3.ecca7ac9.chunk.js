(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(101),l=a.n(i);t.a=function(e){var t=null,a=[l.a.InputElement],n=!1;switch(e.invalid&&e.shouldValidate&&e.touched&&(a.push(l.a.Invalid),n=r.a.createElement("p",{className:l.a.ValidationError},"Please enter a valid value!")),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:l.a.Input},r.a.createElement("label",{htmlFor:e.elementType,className:l.a.Label},e.label),t,n)}},101:function(e,t,a){e.exports={Input:"Input_Input__36-IQ",Label:"Input_Label__X32XB",InputElement:"Input_InputElement__2LJ1k",Invalid:"Input_Invalid__1ugdA",ValidationError:"Input_ValidationError__2MX_d"}},103:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__t-t1g"}},104:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__1E9mt"}},107:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(5),i=a(7),l=a(6),o=a(8),c=a(0),u=a.n(c),d=a(20),s=a(14),p=a(51),m=a(35),h=a(103),v=a.n(h),g=function(e){return u.a.createElement("div",{className:v.a.CheckoutSummary},u.a.createElement("h1",null,"We hope it tastes well!"),u.a.createElement("div",{style:{width:"100%",margin:"auto"}},u.a.createElement(p.a,{ingredients:e.ingredients})),u.a.createElement(m.a,{btnType:"Danger",clicked:e.checkoutCancelled},"Cancel"),u.a.createElement(m.a,{btnType:"Success",clicked:e.checkoutContinued},"Continue"))},f=a(2),y=a(19),C=a(104),b=a.n(C),E=a(28),k=a(100),I=a(43),j=a(15),O=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP CODE"},value:"",validation:{required:!0,minLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},a.orderHandler=function(e){e.preventDefault();var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var r={ingredients:a.props.ingredients,price:a.props.price,orderData:t,userId:a.props.userId};a.props.onOrderBurger(r,a.props.token)},a.inputFormHandler=function(e,t){var n=Object(f.a)({},a.state.orderForm),r=Object(f.a)({},n[t]);r.value=e.target.value,r.valid=a.checkValidity(r.value,r.validation),r.touched=!0;var i=!0;for(var l in n)i=n[l].valid&&i;n[t]=r,a.setState({orderForm:n,formIsValid:i})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"checkValidity",value:function(e,t){var a=!0;return t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),a}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=u.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return u.a.createElement(k.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputFormHandler(a,t.id)}})}),u.a.createElement(m.a,{disabled:!this.state.formIsValid,btnType:"Success"},"Order"));return this.props.loading&&(n=u.a.createElement(E.a,null)),u.a.createElement("div",{className:b.a.ContactData},u.a.createElement("h4",null,"Enter yout Contact Data"),n)}}]),t}(c.Component),_=Object(s.b)(function(e){return{ingredients:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onOrderBurger:function(t,a){return e(j.g(t,a))}}})(Object(I.a)(O,y.a)),T=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).checkoutCancelledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=u.a.createElement(d.a,{to:"/"});if(this.props.ingredients){var t=this.props.purchased?u.a.createElement(d.a,{to:"/"}):null;e=u.a.createElement("div",null,t,u.a.createElement(g,{ingredients:this.props.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),u.a.createElement(d.b,{path:this.props.match.path+"/contact-data",component:_}))}return e}}]),t}(c.Component);t.default=Object(s.b)(function(e){return{ingredients:e.burgerBuilder.ingredients,purchased:e.order.purchased}})(T)}}]);
//# sourceMappingURL=3.ecca7ac9.chunk.js.map
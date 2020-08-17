(this["webpackJsonpvirtual-keypad"]=this["webpackJsonpvirtual-keypad"]||[]).push([[0],{255:function(e,t,n){e.exports=n(571)},567:function(e,t,n){},568:function(e,t,n){},569:function(e,t,n){},570:function(e,t,n){},571:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(64),i=n.n(o),l=n(7),u=n(12),s="ACCEPT_PAYMENT",d="ACCEPT_SIGNATURE",m="DISCONNECT",p="IDENTIFY",v="INVOKE_INPUT_OPTION",f="REJECT_PAYMENT",b="REJECT_SIGNATURE",y="RESET",E="SHOW_WELCOME",h="TRANSACTION",O="CLOUD_PAY_DISPLAY",j=Object(u.a)({},O,"Cloud Pay Display"),g=Object.fromEntries(Object.entries(j).map((function(e){return e.reverse()}))),N="SALE",k=n(23),w=n(249),C=n(3),T=n(69),S=[],I={cloverDomain:"",merchantId:"",accessToken:"",friendlyId:""},D=n(13),R=n.n(D),x={connector:null,connected:!1},A={list:[],selected:""},_={message:null,stack:null},P={id:"",externalId:"",orderId:"",amount:0,tipAmount:0,card:{type:"",first6:"",last4:"",name:""}},F={width:0,height:0,strokes:[]},M={amount:0,type:""},L=n(4),U=n.n(L),V=n(6),B=function(e){var t=e.cloverDomain,n=e.merchantId,a=e.deviceId,r=e.accessToken;return fetch(new URL("/v2/merchant/".concat(n,"/device/").concat(a,"/current_apps?access_token=").concat(r),t).toString(),{method:"GET",headers:{accept:"application/json","content-type":"application/json"}}).then((function(e){return e.json()}))},Y=function(e){var t=e.cloverDomain,n=e.merchantId,a=e.accessToken;return fetch(new URL("/v3/merchants/".concat(n,"/devices?access_token=").concat(a),t).toString(),{method:"GET",headers:{accept:"application/json","content-type":"application/json"}}).then((function(e){return e.json()}))},q=function(e,t){var n=g[t.appName];return n?Object(C.a)(Object(C.a)({},e),{},Object(u.a)({},n,!0)):e},K=function(){var e=Object(V.a)(U.a.mark((function e(t){var n,a,r,c,o,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.cloverDomain,a=t.merchantId,r=t.accessToken,e.next=3,Y({cloverDomain:n,merchantId:a,accessToken:r});case 3:return c=e.sent,o=c.elements,e.next=7,Promise.all(o.map((function(e){var t=e.id;return B({cloverDomain:n,merchantId:a,accessToken:r,deviceId:t})})));case 7:return i=e.sent,e.abrupt("return",o.map((function(e,t){return Object(C.a)(Object(C.a)({},e),{},{apps:i[t].applications.reduce(q,{})})})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e){var t=+e;return!isNaN(t)&&t>=0?(t/100).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""},W=Object(k.c)({actions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ACTIONS_APPEND":var r=e.some((function(e){var t,n;return e.type===a.type&&(null===(t=e.payload)||void 0===t?void 0:t.description)===(null===(n=a.payload)||void 0===n?void 0:n.description)}));return r?e:[].concat(Object(T.a)(e),[a]);case"ACTIONS_SET":return a||[];case"@@connector/onDeviceReady":case"@@connector/onResetDeviceResponse":return[{type:p},{type:y},{type:h}];case"@@connector/onDeviceActivityStart":return a.inputOptions.map((function(e){return{type:v,payload:e}}));case"@@connector/onSaleResponse":return[{type:p},{type:y},{type:h}];case"@@connector/onConfirmPaymentRequest":return[{type:s,payload:Object(C.a)({description:"Accept"},a)},{type:f,payload:Object(C.a)({description:"Reject"},a)}];case"@@connector/onVerifySignatureRequest":return[{type:d,payload:Object(C.a)({description:"Accept"},a)},{type:b,payload:Object(C.a)({description:"Reject"},a)}];default:return e}},buffer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"BUFFER_RESET":return"";case"BUFFER_APPEND":return(e+a).replace(/^0+/,"").slice(0,7);case"BUFFER_SET":return a;case"BUFFER_UNDO":return e.length?e.slice(0,e.length-1):"";default:return e}},configuration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"CONFIGURATION_SET":return{cloverDomain:a.cloverDomain||"",merchantId:a.merchantId||"",accessToken:a.accessToken||"",friendlyId:a.friendlyId||""};default:return e}},connection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"CONNECTION_SET_CONNECTOR":try{(null===e||void 0===e?void 0:e.connector)&&e.connector.dispose()}catch(c){}return Object(C.a)(Object(C.a)({},e),{},{connector:a,connected:!1});case"@@connector/onDeviceDisconnected":return Object(C.a)(Object(C.a)({},e),{},{connected:!1});case"@@connector/onDeviceReady":var r=new R.a.remotepay.RetrieveDeviceStatusRequest;return r.setSendLastMessage(!0),e.connector.retrieveDeviceStatus(r),Object(C.a)(Object(C.a)({},e),{},{connected:!0});default:return e}},devices:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"DEVICES_SET_SELECTED":return Object(C.a)(Object(C.a)({},e),{},{selected:a||""});case"DEVICES_SET_LIST":return Object(C.a)(Object(C.a)({},e),{},{list:a||[]});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ERROR_SET":return Object(C.a)(Object(C.a)({},e),{},{message:a.message,stack:a.stack});case"@@connector/onDeviceError":return Object(C.a)(Object(C.a)({},e),{},{message:"Device Error ".concat(a.message),stack:null});default:return e}},payment:function(){var e,t,n,a,r,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,o=arguments.length>1?arguments[1]:void 0,i=o.type,l=o.payload;switch(i){case"PAYMENT_SET":return{id:(null===l||void 0===l?void 0:l.id)||"",externalId:(null===l||void 0===l?void 0:l.externalPaymentId)||"",orderId:(null===l||void 0===l||null===(e=l.order)||void 0===e?void 0:e.id)||"",amount:(null===l||void 0===l?void 0:l.amount)||0,tipAmount:(null===l||void 0===l?void 0:l.tipAmount)||0,card:{type:(null===l||void 0===l||null===(t=l.cardTransaction)||void 0===t?void 0:t.cardType)||"",first6:(null===l||void 0===l||null===(n=l.cardTransaction)||void 0===n?void 0:n.first6)||"",last4:(null===l||void 0===l||null===(a=l.cardTransaction)||void 0===a?void 0:a.last4)||"",name:(null===l||void 0===l||null===(r=l.cardTransaction)||void 0===r?void 0:r.cardholderName)||""}};case"@@connector/onSaleResponse":var u,s,d,m,p,v,f,b,y,E,h,O,j,g;return l.success?{id:(null===l||void 0===l||null===(u=l.payment)||void 0===u?void 0:u.id)||"",externalId:(null===l||void 0===l||null===(s=l.payment)||void 0===s?void 0:s.externalPaymentId)||"",orderId:(null===l||void 0===l||null===(d=l.payment)||void 0===d||null===(m=d.order)||void 0===m?void 0:m.id)||"",amount:(null===l||void 0===l||null===(p=l.payment)||void 0===p?void 0:p.amount)||0,tipAmount:(null===l||void 0===l||null===(v=l.payment)||void 0===v?void 0:v.tipAmount)||0,card:{type:(null===l||void 0===l||null===(f=l.payment)||void 0===f||null===(b=f.cardTransaction)||void 0===b?void 0:b.cardType)||"",first6:(null===l||void 0===l||null===(y=l.payment)||void 0===y||null===(E=y.cardTransaction)||void 0===E?void 0:E.first6)||"",last4:(null===l||void 0===l||null===(h=l.payment)||void 0===h||null===(O=h.cardTransaction)||void 0===O?void 0:O.last4)||"",name:(null===l||void 0===l||null===(j=l.payment)||void 0===j||null===(g=j.cardTransaction)||void 0===g?void 0:g.cardholderName)||""}}:P;case"@@connector/onResetDeviceResponse":return P;default:return c}},signature:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SIGNATURE_SET":return{width:(null===a||void 0===a?void 0:a.width)||0,height:(null===a||void 0===a?void 0:a.height)||0,strokes:(null===a||void 0===a?void 0:a.strokes)||[]};case"@@connector/onVerifySignatureRequest":return{width:a.signature.width,height:a.signature.height,strokes:a.signature.strokes};default:return e}},status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"STATUS_SET":return a||"";case"@@connector/onDeviceReady":case"@@connector/onResetDeviceResponse":return"Ready";case"@@connector/onDeviceActivityStart":return a.message;case"@@connector/onSaleResponse":return"Ready";case"@@connector/onConfirmPaymentRequest":return a.challenges[0].message;case"@@connector/onVerifySignatureRequest":return"Verify Signature";default:return e}},transaction:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"TRANSACTION_ADD_AMOUNT":return Object(C.a)(Object(C.a)({},e),{},{amount:e.amount+a});case"TRANSACTION_SET_AMOUNT":return Object(C.a)(Object(C.a)({},e),{},{amount:a});case"TRANSACTION_SET_TYPE":return Object(C.a)(Object(C.a)({},e),{},{type:a});case"TRANSACTION_RESET":return M;case"@@connector/onTipAdded":return Object(C.a)(Object(C.a)({},e),{},{amount:e.amount+a.tipAmount});case"@@connector/onSaleResponse":case"@@connector/onResetDeviceResponse":case"@@action/".concat(h):return M;default:return e}}});try{a=JSON.parse(localStorage.getItem("clover/virtual-keypad"))}catch(it){console.warn("Failed to initialize state from storage",it)}finally{a=a||void 0}var X,z=function(e){var t=Object(k.a)(w.a),n=window.__REDUX_DEVTOOLS_EXTENSION__,a=n?n():function(e){return e};return Object(k.e)(W,e,Object(k.d)(t,a))}(a),J=function(e){return{type:"ACTIONS_SET",payload:e}},Z=n(9),$=function(e){return e.actions},H=Object(Z.a)($,(function(e){return e.find((function(e){return e.type===h}))})),Q=Object(Z.a)($,(function(e){return e.filter((function(e){return e.type!==h}))})),ee=function(e){return{type:"BUFFER_APPEND",payload:e}},te=function(e){return e.buffer},ne=function(e){return{type:"CONFIGURATION_SET",payload:{cloverDomain:e.cloverDomain,merchantId:e.merchantId,accessToken:e.accessToken,friendlyId:e.friendlyId}}},ae=function(e){return e.configuration},re=Object(Z.a)(ae,(function(e){return e.friendlyId||"Virtual Keypad"})),ce=function(e){return{type:"CONNECTION_SET_CONNECTOR",payload:e}},oe=function(e){return e.connection},ie=Object(Z.a)(oe,(function(e){return e.connector})),le=(Object(Z.a)(oe,(function(e){return e.connected})),function(e){return{type:"DEVICES_SET_LIST",payload:e}}),ue=function(e){return{type:"DEVICES_SET_SELECTED",payload:e}},se=function(e){return e.devices},de=Object(Z.a)(se,(function(e){return e.selected})),me=Object(Z.a)(se,de,(function(e,t){var n=e.list;return Object(T.a)(n).sort((function(e,n){return e.id===t?-1:n.id===t?1:0}))})),pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.message,n=e.stack;return{type:"ERROR_SET",payload:{message:t,stack:n}}},ve=function(e){return e.error},fe=function(e){return e.payment},be=(Object(Z.a)(fe,(function(e){return!!e.id})),Object(Z.a)(fe,(function(e){var t=e.card,n=t.first6,a=t.last4;return n&&a?[n,"*".repeat(6),a].join("").replace(/.{4}/g," $&").trim():""})),function(e){return{type:"SIGNATURE_SET",payload:e}}),ye=function(e){return e.signature},Ee=Object(Z.a)(ye,(function(e){var t=e.strokes.map((function(e){return e.points})).flat().reduce((function(e,t){var n=e.x,a=e.X,r=e.y,c=e.Y;return{x:Math.min(n,t.x),X:Math.max(a,t.x),y:Math.min(r,t.y),Y:Math.max(c,t.y)}}),{x:1/0,X:-1/0,y:1/0,Y:-1/0});return[t.x,t.y,t.X-t.x,t.Y-t.y].join(" ")})),he=Object(Z.a)(ye,(function(e){return e.strokes.map((function(e){return e.points.map((function(e){var t=e.x,n=e.y;return"".concat(t,",").concat(n)})).join(" ")}))})),Oe=function(e){return{type:"STATUS_SET",payload:e}},je=function(e){return e.status},ge=function(e){var t=e.configuration,n=e.devices;return localStorage.setItem("clover/virtual-keypad",JSON.stringify({configuration:t,devices:Object(C.a)(Object(C.a)({},A),{},{selected:n.selected})}))},Ne=function(e){var t=e.cloverDomain,n=e.merchantId,a=e.accessToken,r=e.friendlyId;return function(){var e=Object(V.a)(U.a.mark((function e(c,o){var i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(ne({cloverDomain:t,merchantId:n,accessToken:a,friendlyId:r}));case 3:return ge(o()),e.next=6,K({cloverDomain:t,merchantId:n,accessToken:a});case 6:return i=e.sent,e.next=9,c(le(i));case 9:if(i.length){e.next=11;break}throw new Error("Merchant has no devices.");case 11:if(i.some((function(e){return e.apps[O]}))){e.next=13;break}throw new Error("Merchant has no devices with Cloud Pay Display installed.");case 13:e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(0),e.next=19,c(pe(e.t0));case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n){return e.apply(this,arguments)}}()},ke=n(250),we=n(66),Ce=n(253),Te=n(252),Se=function(e){return function(){var t=Object(V.a)(U.a.mark((function t(n,a){var r,c,o,i,l,s,d,m,p,v,f;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e){return setTimeout(e,1e3)}));case 3:return t.next=5,n(ue(e));case 5:if(r=a(),ge(r),c=ae(r),o=c.cloverDomain,i=c.merchantId,l=c.accessToken,s=c.friendlyId,d=me(r).find((function(t){return t.id===e}))){t.next=11;break}throw new Error("Device not found.");case 11:if(d.apps[O]){t.next=13;break}throw new Error("Device does not have Cloud Pay Display installed.");case 13:m=R.a.CloverConnectorFactoryBuilder.createICloverConnectorFactory(Object(u.a)({},R.a.CloverConnectorFactoryBuilder.FACTORY_VERSION,R.a.CloverConnectorFactoryBuilder.VERSION_12)),p=m.createICloverConnector(new R.a.WebSocketCloudCloverDeviceConfigurationBuilder("virtual-keypad",e,i,l).setCloverServer(o).setFriendlyId(s).build()),v=function(e){Object(Ce.a)(a,e);var t=Object(Te.a)(a);function a(){var e;return Object(ke.a)(this,a),e=t.call(this),Object.keys(Object.getPrototypeOf(Object.getPrototypeOf(Object(we.a)(e)))).forEach((function(t){e[t]=function(e){return n({type:"@@connector/".concat(t),payload:e})}})),e}return a}(R.a.remotepay.ICloverConnectorListener),f=new v,p.addCloverConnectorListener(f),n(ce(p)),n(Oe("Connecting...")),p.initializeConnection(),t.next=26;break;case 23:t.prev=23,t.t0=t.catch(0),n(pe(t.t0));case 26:case"end":return t.stop()}}),t,null,[[0,23]])})));return function(e,n){return t.apply(this,arguments)}}()},Ie=function(e){return{type:"TRANSACTION_SET_AMOUNT",payload:e}},De=function(){return function(){var e=Object(V.a)(U.a.mark((function e(t,n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{ie(n()).dispose(),t(ce()),t(le()),t({type:"TRANSACTION_RESET"})}catch(it){t(pe(it))}case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},Re=function(e){return function(){var t=Object(V.a)(U.a.mark((function t(n,a){var r,c,o,i,l;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n(Object(C.a)(Object(C.a)({},e),{},{type:"@@action/".concat(h)})),r=a(),c=te(r),o=ie(r),n(J()),n(Oe("Processing...")),n({type:"BUFFER_RESET"}),i=+c){t.next=11;break}throw new Error("Amount is required");case 11:if(!isNaN(i)){t.next=13;break}throw new Error("Amount is invalid");case 13:if(!(i<0||i>9999999)){t.next=15;break}throw new Error("Amount must between 0.00 and 99,999.99");case 15:n({type:"TRANSACTION_SET_TYPE",payload:N}),n(Ie(i)),(l=new R.a.remotepay.SaleRequest).setAmount(i),l.setExternalId(R.a.CloverID.getNewId()),l.setCardEntryMethods(R.a.CardEntryMethods.DEFAULT),o.sale(l),t.next=28;break;case 24:t.prev=24,t.t0=t.catch(0),n(pe(t.t0)),n({type:"@@connector/onDeviceReady"});case 28:case"end":return t.stop()}}),t,null,[[0,24]])})));return function(e,n){return t.apply(this,arguments)}}()},xe=function(e){return e.transaction},Ae=Object(Z.a)(xe,(function(e){return e.amount||0})),_e=Object(Z.a)(xe,(function(e){return e.type})),Pe=n(16),Fe=n(122),Me=n.n(Fe),Le=Object(Z.a)(ie,me,(function(e,t){return!e&&!t.length})),Ue=function(e){var t=e.size,n=void 0===t?28:t;return c.a.createElement("svg",{className:"Logo",id:"clover-logo-svg",xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 33.15 33.15","aria-labelledby":"svg-logo-title",role:"image"},c.a.createElement("title",{id:"svg-logo-title"},"Clover"),c.a.createElement("g",{id:"clover-symbol-2","data-name":"clover-symbol"},c.a.createElement("path",{d:"M191.45,85.64A7.5,7.5,0,1,0,184,93.09h7.49V85.64Z",transform:"translate(-176.46 -77.01)"}),c.a.createElement("path",{d:"M193.61,85.64a7.5,7.5,0,1,1,7.49,7.45h-7.49V85.64Z",transform:"translate(-176.46 -77.01)"}),c.a.createElement("path",{d:"M193.61,102.7a7.5,7.5,0,1,0,7.49-7.45h-7.49v7.45Z",transform:"translate(-176.46 -77.01)"}),c.a.createElement("path",{d:"M191.46,102.7A7.5,7.5,0,1,1,184,95.25h7.49v7.45Zm-7.5,5.35a5.38,5.38,0,0,0,5.4-5.35V97.36H184a5.35,5.35,0,1,0,0,10.7h0Z",transform:"translate(-176.46 -77.01)"})))},Ve=function(e){var t=e.fill,n=e.size,a=void 0===n?20:n;return c.a.createElement("svg",{className:"Power",xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 501.672 501.672"},c.a.createElement("path",{d:"M476.836,275.667c0,124.608-101.381,226.005-225.995,226.005c-124.617,0-226.005-101.396-226.005-226.005 c0-92.843,58.241-177.615,144.907-210.942c14.446-5.538,30.657,1.646,36.212,16.093c5.551,14.443-1.655,30.653-16.093,36.208 C124.665,142.094,80.87,205.851,80.87,275.674c0,93.717,76.245,169.959,169.971,169.959c93.724,0,169.962-76.242,169.962-169.959 c0-68.086-40.482-129.433-103.095-156.268c-14.227-6.09-20.824-22.559-14.718-36.781c6.084-14.22,22.543-20.814,36.771-14.718 C423.024,103.576,476.836,185.128,476.836,275.667z M253.445,254.935c15.475,0,28.017-12.54,28.017-28.017V28.016 C281.462,12.542,268.92,0,253.445,0c-15.468,0-28.016,12.542-28.016,28.016v198.902 C225.429,242.396,237.982,254.935,253.445,254.935z",style:{fill:t}}))},Be=function(){var e=Object(l.b)(),t=Object(l.c)(ae),n=Object(l.c)(Le),a=Me.a.parse(window.location.search),o=Me.a.parse(window.location.hash),i=Object(r.useState)(t.cloverDomain||"https://www.clover.com"),u=Object(Pe.a)(i,2),s=u[0],d=u[1],m=Object(r.useState)(a.merchant_id||t.merchantId),p=Object(Pe.a)(m,2),v=p[0],f=p[1],b=Object(r.useState)(o.access_token||t.accessToken),y=Object(Pe.a)(b,2),E=y[0],h=y[1],O=Object(r.useState)(t.friendlyId||"Virtual Keypad"),j=Object(Pe.a)(O,2),g=j[0],N=j[1],k=Object(r.useState)(),w=Object(Pe.a)(k,2),C=w[0],T=w[1],S=Object(r.useCallback)(function(){var t=Object(V.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.preventDefault(),T(!0),t.next=5,e(Ne({cloverDomain:s,merchantId:v,accessToken:E,friendlyId:g}));case 5:return t.prev=5,T(!1),t.finish(5);case 8:case"end":return t.stop()}}),t,null,[[0,,5,8]])})));return function(e){return t.apply(this,arguments)}}(),[e,s,v,E,g]),I=Object(r.useCallback)((function(e){e.preventDefault(),d(t.cloverDomain),f(t.merchantId),h(t.accessToken),N(t.friendlyId)}),[t,d,f,h,N]);return n?c.a.createElement("form",{onSubmit:S,onReset:I},c.a.createElement("div",{className:"Configuration card"},c.a.createElement("div",{className:"card-header"},c.a.createElement(Ue,null),c.a.createElement("h3",null,"Virtual Keypad")),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Clover Domain:"),c.a.createElement("input",{type:"text",className:"form-control",value:s,onChange:function(e){return d(e.target.value)},disabled:C})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Merchant ID:"),c.a.createElement("input",{type:"text",className:"form-control",value:v,onChange:function(e){return f(e.target.value)},disabled:C})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Access Token:"),c.a.createElement("input",{type:"text",className:"form-control",value:E,onChange:function(e){return h(e.target.value)},disabled:C})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Friendly ID:"),c.a.createElement("input",{type:"text",className:"form-control",value:g,onChange:function(e){return N(e.target.value)},disabled:C}))),c.a.createElement("div",{className:"card-footer"},c.a.createElement("button",{type:"submit",className:"btn btn-success",disabled:C},"Submit"),c.a.createElement("button",{type:"reset",className:"btn btn-secondary ml-2",disabled:C},"Reset")))):null},Ye=Object(Z.a)(ie,me,(function(e,t){return!e&&!!t.length})),qe=n(33),Ke=n.n(qe),Ge=function(e){var t=e.device,n=e.active,a=e.disabled,r=e.onClick,o=t.apps[O],i=o?"Cloud Pay Display is installed":"Cloud Pay Display is NOT installed";return c.a.createElement("button",{key:t.id,type:"button",className:Ke()("list-group-item d-flex justify-content-between align-items-center list-group-item-action p-1",{disabled:a,"list-group-item-primary":n}),onClick:r},c.a.createElement("div",{className:"p-1"},t.name&&c.a.createElement("div",{className:"font-weight-bold"},t.name),t.productName," ",t.serial),c.a.createElement("span",{className:Ke()("badge p-1",{"badge-success":o,"badge-warning":!o}),role:"img","aria-label":i,title:i},"\u2601\ufe0f"))},We=function(){var e=Object(l.b)(),t=Object(l.c)(me),n=Object(l.c)(de),a=Object(l.c)(Ye),o=Object(r.useState)(),i=Object(Pe.a)(o,2),u=i[0],s=i[1],d=Object(r.useCallback)((function(t){return function(){var n=Object(V.a)(U.a.mark((function n(a){return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a.preventDefault(),s(!0),n.next=5,e(Se(t));case 5:return n.prev=5,s(!1),n.finish(5);case 8:case"end":return n.stop()}}),n,null,[[0,,5,8]])})));return function(e){return n.apply(this,arguments)}}()}),[e]);return a?c.a.createElement("div",{className:"Devices card"},c.a.createElement("div",{className:"card-header"},c.a.createElement(Ue,null),c.a.createElement("h3",null,"Virtual Keypad")),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Select Device:"),c.a.createElement("div",{className:"list-group"},t.map((function(e){return c.a.createElement(Ge,{key:e.id,device:e,disabled:u,active:e.id===n,onClick:d(e.id)})}))))),c.a.createElement("div",{className:"card-footer"},c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e(le())}},"Cancel"))):null},Xe=Object(Z.a)(ve,(function(e){return!!e.message})),ze=(n(567),function(){var e=Object(l.b)(),t=Object(l.c)(ve),n=Object(l.c)(Xe),a=Object(r.useState)(!1),o=Object(Pe.a)(a,2),i=o[0],u=o[1],s=Object(r.useCallback)((function(){return e(pe())}),[e]);return n?c.a.createElement("div",{className:"Error alert alert-danger"},c.a.createElement("button",{type:"button",className:"close",onClick:s},"\xd7"),c.a.createElement("h3",{className:"alert-heading"},t.message),!!t.stack&&!i&&c.a.createElement("button",{type:"button",className:"btn btn-link btn-sm text-danger",onClick:function(){return u(!0)}},"Show details\u2026"),!!t.stack&&i&&c.a.createElement("pre",null,c.a.createElement("code",null,null===t||void 0===t?void 0:t.stack))):null}),Je=Object(Z.a)(ie,(function(e){return!!e})),Ze=n(572),$e=n(70),He=function(e){var t=e.width,n=void 0===t?250:t,a=Object($e.a)(e,["width"]),r=Object(l.c)(Ee),o=Object(l.c)(he);return o.length?c.a.createElement("div",{className:"Signature"},c.a.createElement("svg",Object.assign({viewBox:r,width:n},a),o.map((function(e,t){return c.a.createElement("polyline",{key:t,points:e,fill:"none",stroke:"black"})})))):null},Qe=function(){var e=Object(l.c)(je),t=Object(l.c)(te),n=Object(l.c)(_e),a=Object(l.c)(Ae);return c.a.createElement("div",{className:"Screen alert alert-secondary"},!!a&&c.a.createElement("div",{className:"Transaction d-flex justify-content-between bg-white rounded-top border-bottom border-secondary"},c.a.createElement("div",{className:"font-italic"},Object(Ze.a)(n)),c.a.createElement("div",{className:"font-weight-bold"},G(a))),!t&&c.a.createElement("div",null,e),c.a.createElement(He,null),t&&c.a.createElement("div",{className:"text-muted"},t),t&&c.a.createElement("h3",{className:"text-right"},G(t)))},et=n(251),tt=Object(r.forwardRef)((function(e,t){var n,a=e.action,o=e.height,i=e.color,l=e.keyCodes,u=e.disabled,s=e.onClick,d=e.moreActions,m=e.onMoreClick,p=e.children,v=Object($e.a)(e,["action","height","color","keyCodes","disabled","onClick","moreActions","onMoreClick","children"]),f=Object(r.useState)(!1),b=Object(Pe.a)(f,2),y=b[0],E=b[1];Object(r.useEffect)((function(){if(y){var e=function(){return E(!1)};return document.addEventListener("click",e),document.addEventListener("touch",e),document.addEventListener("keydown",e),function(){document.removeEventListener("click",e),document.removeEventListener("touch",e),document.removeEventListener("keydown",e)}}}),[y]),Object(r.useEffect)((function(){if(!u){var e=function(e){return!l.includes(e.code)||(e.preventDefault(),s(),!1)};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}}),[u,l,s]);var h=a?Object(Ze.a)((null===(n=a.payload)||void 0===n?void 0:n.description)||(null===a||void 0===a?void 0:a.type)||""):p;return(null===d||void 0===d?void 0:d.length)?c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",Object.assign({type:"button",className:"btn btn-dark action rounded-left",onClick:s,disabled:u},v,{title:"Shortcut keys: ".concat(l.join(", "))}),h||c.a.createElement("span",null,"\xa0")),c.a.createElement("button",{type:"button",className:"btn btn-dark action dropdown-toggle",onClick:function(){return E(!y)},disabled:u}),c.a.createElement("div",{className:Ke()("dropdown-menu bg-dark",{show:y})},d.map((function(e,t){var n;return c.a.createElement("button",{key:t,className:"dropdown-item bg-dark text-light",onClick:function(){return m(e)}},(null===(n=e.payload)||void 0===n?void 0:n.description)||e.type)})))):c.a.createElement("button",Object.assign({ref:t,type:"button",style:{height:o},className:Ke()("btn","text-".concat(i||"light"),{action:a,"btn-dark":a,"btn-outline-dark":!a}),disabled:u,onClick:s,title:"Shortcut keys: ".concat(l.join(", "))},v),h)})),nt=(X={},Object(u.a)(X,s,(function(e){return function(){var t=Object(V.a)(U.a.mark((function t(n,a){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n(Object(C.a)(Object(C.a)({},e),{},{type:"@@action/".concat(s)})),n(Oe("Accepting payment...")),n(J()),ie(a()).acceptPayment(e.payload.payment)}catch(it){n(pe(it))}case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()})),Object(u.a)(X,d,(function(e){return function(){var t=Object(V.a)(U.a.mark((function t(n,a){var r,c;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n(Object(C.a)(Object(C.a)({},e),{},{type:"@@action/".concat(d)})),n(Oe("Accepting signature...")),n(J()),n(be()),r=ie(a()),(c=new R.a.remotepay.VerifySignatureRequest).setPayment(e.payload.payment),r.acceptSignature(c)}catch(it){n(pe(it))}case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()})),Object(u.a)(X,m,De),Object(u.a)(X,p,(function(e){return function(){var t=Object(V.a)(U.a.mark((function t(n,a){var r,c,o;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n(Object(C.a)(Object(C.a)({},e),{},{type:"@@action/".concat(p)})),n(Oe("Identifying...")),n(J([{type:E,payload:{description:"OK"}},{type:m,payload:{description:"Cancel"}}])),r=a(),c=ie(r),o=re(r),c.showMessage("".concat(o," connected"))}catch(it){n(pe(it))}case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()})),Object(u.a)(X,v,(function(e){return function(){var t=Object(V.a)(U.a.mark((function t(n,a){var r,c;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n(Object(C.a)(Object(C.a)({},e),{},{type:"@@action/".concat(v)})),r=ie(a()),(c=new R.a.remotepay.InputOption).setDescription(e.payload.description),c.setKeyPress(e.payload.keyPress),r.invokeInputOption(c)}catch(it){n(pe(it))}case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()})),Object(u.a)(X,f,(function(e){return function(){var t=Object(V.a)(U.a.mark((function t(n,a){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n(Object(C.a)(Object(C.a)({},e),{},{type:"@@action/".concat(f)})),n(Oe("Rejecting payment...")),n(J()),ie(a()).rejectPayment(e.payload.payment,e.payload.challenges[0])}catch(it){n(pe(it))}case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()})),Object(u.a)(X,b,(function(e){return function(){var t=Object(V.a)(U.a.mark((function t(n,a){var r,c;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n(Object(C.a)(Object(C.a)({},e),{},{type:"@@action/".concat(b)})),n(Oe("Rejecting signature...")),n(J()),n(be()),r=ie(a()),(c=new R.a.remotepay.VerifySignatureRequest).setPayment(e.payload.payment),r.rejectSignature(c)}catch(it){n(pe(it))}case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()})),Object(u.a)(X,y,(function(e){return function(){var t=Object(V.a)(U.a.mark((function t(n,a){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n(Object(C.a)(Object(C.a)({},e),{},{type:"@@action/".concat(y)})),n(Oe("Resetting...")),n(J()),ie(a()).resetDevice()}catch(it){n(pe(it))}case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()})),Object(u.a)(X,E,(function(e){return function(){var t=Object(V.a)(U.a.mark((function t(n,a){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n(Object(C.a)(Object(C.a)({},e),{},{type:"@@action/".concat(E)})),n(Oe("Ready")),n(J([{type:p},{type:y},{type:h}])),ie(a()).showWelcomeScreen()}catch(it){n(pe(it))}case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()})),Object(u.a)(X,h,Re),X),at=function(){var e=Object(l.b)(),t=Object(l.c)(Q),n=Object(l.c)(H),a=Object(r.useState)(!1),o=Object(Pe.a)(a,2),i=o[0],u=o[1],s=Object(r.useMemo)((function(){return!n||i}),[n,i]),d=Object(r.useCallback)(function(){var t=Object(V.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),n.type===v&&setTimeout((function(){return u(!1)}),250),t.next=4,e(nt[n.type](n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e,u]),m=function(e){return Object(V.a)(U.a.mark((function t(){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d(e));case 1:case"end":return t.stop()}}),t)})))};Object(r.useEffect)((function(){t.length&&u(!1)}),[u,t]);var p=Object(r.useRef)(),f=Object(r.useState)(),b=Object(Pe.a)(f,2),y=b[0],E=b[1];Object(r.useEffect)((function(){p.current&&E(p.current.offsetWidth)}),[p,E]);var h=Object(et.a)(t),O=h[0],j=h[1],g=h.slice(2);return c.a.createElement("div",{className:"Keys"},c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("div",{className:"col-6 p-1"},c.a.createElement(tt,{action:O||{},disabled:!O||i,keyCodes:["F1","NumpadDivide"],onClick:m(O)})),c.a.createElement("div",{className:"col-6 p-1"},c.a.createElement(tt,{action:j||{},disabled:!j||i,keyCodes:["F2","NumpadMultiply"],onClick:m(j),moreActions:g,onMoreClick:function(e){return d(e)}}))),c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("div",{className:"col-3 p-1"},c.a.createElement(tt,{ref:p,height:y,disabled:s,keyCodes:["Numpad7","Digit7"],onClick:function(){return e(ee("7"))}},"7")),c.a.createElement("div",{className:"col-3 p-1"},c.a.createElement(tt,{disabled:s,keyCodes:["Numpad8","Digit8"],onClick:function(){return e(ee("8"))}},"8")),c.a.createElement("div",{className:"col-3 p-1"},c.a.createElement(tt,{disabled:s,keyCodes:["Numpad9","Digit9"],onClick:function(){return e(ee("9"))}},"9")),c.a.createElement("div",{className:"col-3 p-1"},c.a.createElement(tt,{color:"danger",disabled:s,keyCodes:["NumpadSubtract","Escape"],onClick:function(){return e({type:"BUFFER_RESET"})}},"X"))),c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("div",{className:"col-3 p-1"},c.a.createElement(tt,{height:y,disabled:s,keyCodes:["Numpad4","Digit4"],onClick:function(){return e(ee("4"))}},"4")),c.a.createElement("div",{className:"col-3 p-1"},c.a.createElement(tt,{disabled:s,keyCodes:["Numpad5","Digit5"],onClick:function(){return e(ee("5"))}},"5")),c.a.createElement("div",{className:"col-3 p-1"},c.a.createElement(tt,{disabled:s,keyCodes:["Numpad6","Digit6"],onClick:function(){return e(ee("6"))}},"6")),c.a.createElement("div",{className:"col-3 p-1"},c.a.createElement(tt,{color:"warning",disabled:s,keyCodes:["NumpadAdd","Backspace","Delete"],onClick:function(){return e({type:"BUFFER_UNDO"})}},"<"))),c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("div",{className:"col-4 p-1"},c.a.createElement(tt,{height:y,disabled:s,keyCodes:["Numpad1","Digit1"],onClick:function(){return e(ee("1"))}},"1")),c.a.createElement("div",{className:"col-4 p-1"},c.a.createElement(tt,{disabled:s,keyCodes:["Numpad2","Digit2"],onClick:function(){return e(ee("2"))}},"2")),c.a.createElement("div",{className:"col-4 p-1"},c.a.createElement(tt,{disabled:s,keyCodes:["Numpad3","Digit3"],onClick:function(){return e(ee("3"))}},"3"))),c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("div",{className:"col-8 p-1"},c.a.createElement(tt,{height:y,disabled:s,keyCodes:["Numpad0","Digit0"],onClick:function(){return e(ee("0"))}},"0")),c.a.createElement("div",{className:"col-4 p-1"},c.a.createElement(tt,{disabled:s,keyCodes:["NumpadDecimal","Period"],onClick:function(){return e(ee("00"))}},"00")))),c.a.createElement("div",{className:"col-3 p-1"},c.a.createElement(tt,{color:"success",disabled:s,keyCodes:["NumpadEnter","Enter"],onClick:function(){return e(Re())}},"O"))))},rt=(n(568),function(){var e=Object(l.b)(),t=Object(l.c)(Je),n=Object(r.useCallback)((function(){return e(De())}),[e]);return t?c.a.createElement("div",{className:"Keypad card"},c.a.createElement("div",{className:"card-header"},c.a.createElement(Ue,null),c.a.createElement("h3",null,"Virtual Keypad"),c.a.createElement("button",{className:"btn btn-sm btn-outline-dark",onClick:n,title:"Disconnect"},c.a.createElement(Ve,null))),c.a.createElement("div",{className:"card-body"},c.a.createElement(Qe,null),c.a.createElement(at,null))):null}),ct=(n(569),function(){var e=Object(l.b)(),t=Object(l.c)(fe),n=Object(r.useCallback)((function(){return e(function(e){return{type:"PAYMENT_SET",payload:e}}())}),[e]);return t.id?c.a.createElement("div",{className:"Payment alert alert-success"},c.a.createElement("button",{type:"button",className:"close",onClick:n},"\xd7"),c.a.createElement("h4",{className:"alert-heading"},"Payment Details"),c.a.createElement("table",{className:"table table-sm small mb-0"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Payment ID:"),c.a.createElement("td",null,t.id)),c.a.createElement("tr",null,c.a.createElement("th",null,"External ID:"),c.a.createElement("td",null,t.externalId)),c.a.createElement("tr",null,c.a.createElement("th",null,"Order ID:"),c.a.createElement("td",null,t.orderId)),!!t.tipAmount&&c.a.createElement("tr",null,c.a.createElement("th",null,"Total:"),c.a.createElement("td",null,G(t.amount+t.tipAmount))),c.a.createElement("tr",null,c.a.createElement("th",null,"Amount:"),c.a.createElement("td",null,G(t.amount))),!!t.tipAmount&&c.a.createElement("tr",null,c.a.createElement("th",null,"Tip:"),c.a.createElement("td",null,G(t.tipAmount))),c.a.createElement("tr",null,c.a.createElement("th",null,"Card:"),c.a.createElement("td",null,c.a.createElement("div",null,t.cardType),c.a.createElement("div",null,function(e){var t=e.first6,n=e.last4;return[t,"*".repeat(6),n].join("").replace(/.{4}/g," $&").trim()}(t.card)),t.card.name&&c.a.createElement("div",null,t.card.name)))))):null}),ot=(n(570),function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ms,n=void 0===t?500:t;Object(r.useEffect)((function(){var e=0,t=function(t){if(1===t.touches.length){var a=Date.now();1===t.touches.length&&a>e&&(t.preventDefault(),t.target.click()),e=a+n}};return document.body.addEventListener("touchstart",t,{passive:!1}),function(){return document.body.removeEventListener("touchstart",t,{passive:!1})}}),[n])}(),c.a.createElement("div",{className:"App container"},c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("div",{className:"col-12 col-md-6"},c.a.createElement("div",{className:"maxwidth mx-auto"},c.a.createElement(ze,null),c.a.createElement(Be,null),c.a.createElement(We,null),c.a.createElement(rt,null))),c.a.createElement("div",{className:"col-12 col-md-6 order-first order-md-last"},c.a.createElement("div",{className:"maxwidth mx-auto ml-md-2"},c.a.createElement(ct,null)))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,{store:z},c.a.createElement(ot,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[255,1,2]]]);
//# sourceMappingURL=main.b3b904f4.chunk.js.map
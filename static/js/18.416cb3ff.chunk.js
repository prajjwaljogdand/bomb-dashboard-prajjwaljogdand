(this["webpackJsonpbomb-frontend"]=this["webpackJsonpbomb-frontend"]||[]).push([[18],{1152:function(e,n,t){e.exports=t.p+"static/media/dashboard-bg.2cc6be34.png"},1602:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return L}));var a,r,c,o,i,u,l=t(1),s=t.n(l),d=t(40),m=t(2),b=t.n(m),f=t(12),p=t(1152),O=t.n(p),h=t(32),x=t(1596),v=t(1570),j=t(243),g=t(769),E=t(57),k=t(774),B=t(837),N=t(908),w=t(759),y=t(909),D=t(21),P=t(910),C=t(33),T=t(1574),M=t(784),A=t(989),S=t(770),R=t(911),z=h.d.div(a||(a=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ","px;\n  width: 100%;\n"])),(function(e){return e.theme.spacing[3]})),I=function(e){var n=e.action,t=e.fromToken,a=e.fromTokenName,r=(e.toToken,e.toTokenName,e.priceDesc),c=e.onExchange,o=e.disabled,i=void 0!==o&&o,u=e.disabledDescription,l=Object(R.a)(),d=Object(j.a)().contracts.Treasury,m=Object(S.b)(t,d.address),b=Object(C.a)(m,2),f=b[0],p=b[1],O=Object(g.a)(t),h=Object(M.a)(s.a.createElement(A.a,{title:n,description:r,max:O,onConfirm:function(e){c(e),k()},action:n,tokenName:a})),x=Object(C.a)(h,2),E=x[0],k=x[1];return s.a.createElement(v.a,{item:!0,md:6},s.a.createElement(z,null,f===S.a.APPROVED||i?s.a.createElement(T.a,{className:i?"newShinyButtonDisabled":"newShinyButton",onClick:E,disabled:i},u||n):s.a.createElement(T.a,{className:"newShinyButton",disabled:f===S.a.PENDING||f===S.a.UNKNOWN,onClick:function(){return l(p(),"Unable to approve ".concat(a))}},"".concat(n))))},U=h.d.div(r||(r=Object(d.a)(["\n  display: flex;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]))),V=h.d.div(c||(c=Object(d.a)(["\n  width: 100%;\n  display: flex;\n  background: rgba(35, 40, 75, 0.75);\n  border: 1px solid #728cdf;\n  box-sizing: border-box;\n  backdrop-filter: blur(10px);\n  border-radius: 10px;\n  color: white;\n  padding: 20px;\n"]))),F=h.d.div(o||(o=Object(d.a)(["\n  font-family: 'Nunito', sans-serif;\n  color: white;\n  font-weight: 700;\n  font-size: 22px;\n  line-height: 30px;\n"]))),W=h.d.div(i||(i=Object(d.a)(["\n  font-family: 'Nunito', sans-serif;\n  color: white;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n"]))),_=Object(h.c)(u||(u=Object(d.a)(["\n  body {\n    background: url(",") repeat !important;\n    background-size: cover !important;\n    background-color: #0C1125 !important;\n    padding : 0 !important;\n    margin : 0 !important;\n    background-position: center !important;\n    width : 100%;\n  }\n"])),O.a),G=function(){var e=Object(E.b)().account,n=Object(j.a)(),t=Object(w.b)(),a=Object(B.a)(),r=Object(N.a)(),c=Object(y.a)(),o=Object(g.a)(null===n||void 0===n?void 0:n.BBOND),i=Object(l.useCallback)(function(){var e=Object(f.a)(b.a.mark((function e(a){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.buyBonds(a);case 2:r=e.sent,t(r,{summary:"Buy ".concat(Number(a).toFixed(2)," BBOND with ").concat(a," BOMB")});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[n,t]),u=Object(l.useCallback)(function(){var e=Object(f.a)(b.a.mark((function e(a){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.redeemBonds(a);case 2:r=e.sent,t(r,{summary:"Redeem ".concat(a," BBOND")});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[n,t]),d=Object(l.useMemo)((function(){return r.gt(P.b)}),[r]),m=Object(l.useMemo)((function(){return Number(null===a||void 0===a?void 0:a.tokenInFtm)<1.01}),[a]),p=Number(null===a||void 0===a?void 0:a.tokenInFtm).toFixed(8)/1e4||"-";return s.a.createElement("div",null,s.a.createElement(_,null),e?s.a.createElement(U,null,s.a.createElement(x.a,{sx:{flexGrow:1}},s.a.createElement(V,null,s.a.createElement(v.a,{container:!0,spacing:2},s.a.createElement(v.a,{item:!0,md:7,container:!0,spacing:2},s.a.createElement(v.a,{item:!0,md:12},s.a.createElement(F,null,"Bonds"),s.a.createElement(W,null,"BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1")),s.a.createElement(v.a,{item:!0,md:6},s.a.createElement(W,null,"Current Price: (Bomb)^2"),s.a.createElement(F,null,"BBOND = ".concat(p," BTC"))),s.a.createElement(v.a,{item:!0,md:6},s.a.createElement(W,null,"Available to redeem:"),s.a.createElement(F,null,Object(D.a)(o)))),s.a.createElement(v.a,{pt:4,item:!0,md:5,container:!0,spacing:2},s.a.createElement(v.a,{item:!0,container:!0,md:12,spacing:2},s.a.createElement(v.a,{item:!0,md:6},s.a.createElement(W,null,"Purchase BBond ",s.a.createElement("br",null),"Bomb is over peg")),s.a.createElement(I,{action:"Purchase",fromToken:n.BOMB,fromTokenName:"BOMB",toToken:n.BBOND,toTokenName:"BBOND",priceDesc:m?Object(D.a)(c,18,4)+" BBOND available for purchase":"BOMB is over peg",onExchange:i,disabled:!a||d})),s.a.createElement(v.a,{item:!0,container:!0,md:12,spacing:2},s.a.createElement(v.a,{item:!0,md:6},s.a.createElement(W,null,"Redeem Bomb")),s.a.createElement(I,{action:"Redeem",fromToken:n.BBOND,fromTokenName:"BBOND",toToken:n.BOMB,toTokenName:"BOMB",priceDesc:"".concat(Object(D.a)(o)," BBOND Available in wallet"),onExchange:u,disabled:!1,disabledDescription:d?null:"Enabled when 10,000 BOMB > ".concat(P.a,"BTC")}))))))):s.a.createElement(k.a,null))},K=t(814),J=t(38),L=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(J.c,null,s.a.createElement(K.a,null,s.a.createElement(G,null))))}},770:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a,r=t(2),c=t.n(r),o=t(12),i=t(96),u=t(23),l=t(1),s=t(759),d=t(789),m=i.a.constants.MaxUint256,b=u.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={})),n.b=function(e,n){var t=Object(s.a)(e.address,n),r=Object(d.a)(e,n,t),i=Object(l.useMemo)((function(){return r?r.lt(b)?t?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[r,t]),u=Object(s.b)(),f=Object(l.useCallback)(Object(o.a)(c.a.mark((function t(){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i===a.NOT_APPROVED){t.next=3;break}return console.error("approve was called unnecessarily"),t.abrupt("return");case 3:return t.next=5,e.approve(n,m);case 5:r=t.sent,u(r,{summary:"Approve ".concat(e.symbol),approval:{tokenAddress:e.address,spender:n}});case 7:case"end":return t.stop()}}),t)}))),[i,e,n,u]);return[i,f]}},774:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(1),r=t.n(a),c=t(1596),o=t(815),i=function(){return r.a.createElement(c.a,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement(o.a,null))}},837:function(e,n,t){"use strict";var a=t(2),r=t.n(a),c=t(12),o=t(33),i=t(1),u=t(243),l=t(748);n.a=function(){var e=Object(i.useState)(),n=Object(o.a)(e,2),t=n[0],a=n[1],s=Object(l.a)().slowRefresh,d=Object(u.a)();return Object(i.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,d.getBondStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,d,s]),t}},908:function(e,n,t){"use strict";var a=t(2),r=t.n(a),c=t(12),o=t(33),i=t(1),u=t(243),l=t(34),s=t(23);n.a=function(){var e=Object(i.useState)(s.a.from(0)),n=Object(o.a)(e,2),t=n[0],a=n[1],d=Object(u.a)(),m=Object(i.useCallback)(Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,d.getBombPriceInLastTWAP();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[d]);return Object(i.useEffect)((function(){m().catch((function(e){return console.error("Failed to fetch BOMB price: ".concat(e.stack))}));var e=setInterval(m,l.b.refreshInterval);return function(){return clearInterval(e)}}),[a,d,m]),t}},909:function(e,n,t){"use strict";var a=t(2),r=t.n(a),c=t(12),o=t(33),i=t(1),u=t(23),l=t(243);n.a=function(){var e=Object(i.useState)(u.a.from(0)),n=Object(o.a)(e,2),t=n[0],a=n[1],s=Object(l.a)();return Object(i.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,s.getBondsPurchasable();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,s]),t}},910:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return c}));var a=t(23).a.from(10).pow(14),r=1.01,c=a.mul(101).div(100)},911:function(e,n,t){"use strict";var a=t(1),r=t(100);n.a=function(){var e=Object(r.b)();return Object(a.useCallback)((function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Unexpected error is occurred.";n.catch((function(n){n.message.includes("User denied")||(console.error("Uncaught exception: ".concat(n.stack)),e({error:{message:t,stack:n.stack}}))}))}),[e])}},989:function(e,n,t){"use strict";var a,r,c,o=t(33),i=t(1),u=t.n(i),l=t(40),s=t(32),d=t(246),m=s.d.button(a||(a=Object(l.a)(["\n  align-items: center;\n  background-color: ",";\n  border: 0;\n  border-radius: 12px;\n  box-shadow: ",";\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-size: ","px;\n  font-weight: 700;\n  height: ","px;\n  justify-content: center;\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n  pointer-events: ",";\n  width: 100%;\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.color.grey[900]}),(function(e){return e.boxShadow}),(function(e){return e.disabled?"".concat(e.color,"55"):e.color}),(function(e){return e.fontSize}),(function(e){return e.size}),(function(e){return e.padding}),(function(e){return e.padding}),(function(e){return e.disabled?"none":void 0}),(function(e){return e.color}),(function(e){return e.theme.color.grey[900]})),b=Object(s.d)(d.b)(r||(r=Object(l.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),f=s.d.a(c||(c=Object(l.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),p=function(e){var n,t,a,r,c=e.children,o=e.disabled,l=e.href,d=e.onClick,p=e.size,O=e.text,h=e.to,x=e.variant,v=Object(i.useContext)(s.a),j=v.color,g=v.spacing;switch(x){case"secondary":n=j.teal[200];break;case"default":default:n=j.primary.main}switch(p){case"sm":a=g[3],t=36,r=14;break;case"lg":a=g[4],t=72,r=16;break;case"md":default:a=g[4],t=56,r=16}var E=Object(i.useMemo)((function(){return h?u.a.createElement(b,{to:h},O):l?u.a.createElement(f,{href:l,target:"__blank"},O):O}),[l,O,h]);return u.a.createElement(m,{boxShadow:void 0,color:n,disabled:o,fontSize:r,onClick:d,padding:a,size:t},c,E)},O=t(767),h=t(775),x=t(768),v=t(772),j=t(21),g=t(779);n.a=function(e){var n=e.max,t=e.title,a=e.description,r=e.onConfirm,c=e.onDismiss,l=e.action,s=e.tokenName,d=Object(i.useState)(""),m=Object(o.a)(d,2),b=m[0],f=m[1],E=Object(i.useMemo)((function(){return Object(j.b)(n)}),[n]),k=Object(i.useCallback)((function(e){return f(e.currentTarget.value)}),[f]),B=Object(i.useCallback)((function(){f(E)}),[E,f]);return u.a.createElement(O.a,null,u.a.createElement(x.a,{text:t}),u.a.createElement(v.a,{value:b,onSelectMax:B,onChange:k,max:E,symbol:s}),u.a.createElement(g.a,{text:a}),u.a.createElement(h.a,null,u.a.createElement(p,{text:"Cancel",onClick:c}),u.a.createElement(p,{text:l,onClick:function(){return r(b)}})))}}}]);
//# sourceMappingURL=18.416cb3ff.chunk.js.map
(this["webpackJsonpbomb-frontend"]=this["webpackJsonpbomb-frontend"]||[]).push([[11],{1153:function(e,t,n){"use strict";var a=n(865),r=n(866);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(1)),o=(0,a(n(868)).default)(c.createElement("path",{d:"M7 2v11h3v9l7-12h-4l4-8z"}),"FlashOn");t.default=o},1594:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Xe}));var a,r,c,o,l,i,u,s,m,d,f,b,p,v=n(33),E=n(40),O=n(1),g=n.n(O),j=n(57),h=n(38),k=n(98),x=n(32),N=n(1568),y=n(1596),w=n(1570),B=n(1583),T=n(907),P=n(733),C=n(1574),S=n(991),I=n(816),A=n(774),R=n(773),D=n(783),M=n(2),F=n.n(M),U=n(12),z=n(23),V=n(243),H=n(34),W=function(e,t,n){var a=Object(O.useState)(z.a.from(0)),r=Object(v.a)(a,2),c=r[0],o=r[1],l=Object(V.a)(),i=null===l||void 0===l?void 0:l.isUnlocked,u=Object(O.useCallback)(Object(U.a)(F.a.mark((function a(){var r;return F.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.earnedFromBank(e,t,n,l.myAccount);case 2:r=a.sent,o(r);case 4:case"end":return a.stop()}}),a)}))),[e,t,n,l]);return Object(O.useEffect)((function(){if(i){u().catch((function(e){return console.error(e.stack)}));var e=setInterval(u,H.b.refreshInterval);return function(){return clearInterval(e)}}}),[i,e,l,u]),c},L=n(752),G=function(e){var t=Object(V.a)(),n=Object(L.a)();return{onReward:Object(O.useCallback)((function(){n(t.harvest(e.contract,e.poolId),"Claim ".concat(e.earnTokenName," from ").concat(e.contract))}),[e,t,n])}},_=n(21),K=n(778),Z=n(818),q=n(900),$=x.d.div(a||(a=Object(E.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),J=x.d.div(r||(r=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ","px;\n  width: 100%;\n"])),(function(e){return e.theme.spacing[6]})),Y=x.d.div(c||(c=Object(E.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),Q=function(e){var t=e.bank,n=W(t.contract,t.earnTokenName,t.poolId),a=G(t).onReward,r=Object(Z.a)(),c=Object(q.a)(),o="BSHARE"===t.earnTokenName?"BSHARE":"BOMB",l="BSHARE"===t.earnTokenName?c:r,i=Object(O.useMemo)((function(){return l?Number(l.priceInDollars).toFixed(2):null}),[l]),u=(Number(i)*Number(Object(_.a)(n))).toFixed(2);return g.a.createElement(B.a,null,g.a.createElement(T.a,null,g.a.createElement(Y,null,g.a.createElement($,null,g.a.createElement(R.a,null,g.a.createElement(K.a,{symbol:t.earnToken.symbol})),g.a.createElement(D.a,{value:Object(_.a)(n)}),g.a.createElement(P.a,{style:{textTransform:"uppercase",color:"#fffff"}},"\u2248 $".concat(u)),g.a.createElement(P.a,{style:{textTransform:"uppercase",color:"#f9d749"}},"".concat(o," Earned"))),g.a.createElement(J,null,g.a.createElement(C.a,{onClick:a,disabled:n.eq(0),className:n.eq(0)?"shinyButtonDisabled":"shinyButton"},"Claim")))))},X=n(794),ee=n(1153),te=n.n(ee),ne=n(795),ae=n(770),re=n(784),ce=n(45),oe=function(e){var t=Object(V.a)(),n=Object(L.a)();return{onStake:Object(O.useCallback)((function(a){var r=Object(ce.parseUnits)(a,e.depositToken.decimal);n(t.stake(e.contract,e.poolId,r),"Stake ".concat(a," ").concat(e.depositTokenName," to ").concat(e.contract))}),[e,t,n])}},le=n(906),ie=function(e,t){var n=Object(O.useState)(z.a.from(0)),a=Object(v.a)(n,2),r=a[0],c=a[1],o=Object(V.a)(),l=null===o||void 0===o?void 0:o.isUnlocked,i=Object(O.useCallback)(Object(U.a)(F.a.mark((function n(){var a;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.stakedBalanceOnBank(e,t,o.myAccount);case 2:a=n.sent,c(a);case 4:case"end":return n.stop()}}),n)}))),[e,t,o]);return Object(O.useEffect)((function(){if(l){i().catch((function(e){return console.error(e.stack)}));var e=setInterval(i,H.b.refreshInterval);return function(){return clearInterval(e)}}}),[l,e,c,o,i]),r},ue=n(912),se=n(769),me=function(e){var t=Object(V.a)(),n=Object(L.a)();return{onWithdraw:Object(O.useCallback)((function(a){var r=Object(ce.parseUnits)(a,e.depositToken.decimal);n(t.unstake(e.contract,e.poolId,r),"Withdraw ".concat(a," ").concat(e.depositTokenName," from ").concat(e.contract))}),[e,t,n])}},de=n(767),fe=n(775),be=n(768),pe=n(772),ve=function(e){var t=e.max,n=e.decimals,a=e.onConfirm,r=(e.onDismiss,e.tokenName),c=void 0===r?"":r,o=Object(O.useState)(""),l=Object(v.a)(o,2),i=l[0],u=l[1],s=Object(O.useMemo)((function(){return Object(_.b)(t,n,!1)}),[t,n]),m=Object(O.useCallback)((function(e){u(e.currentTarget.value)}),[u]),d=Object(O.useCallback)((function(){u(s)}),[s,u]);return g.a.createElement(de.a,null,g.a.createElement(be.a,{text:"Deposit ".concat(c)}),g.a.createElement(pe.a,{value:i,onSelectMax:d,onChange:m,max:s,symbol:c}),g.a.createElement(fe.a,null,g.a.createElement(C.a,{className:"shinyButtonSecondary",onClick:function(){return a(i)}},"Confirm")))},Ee=function(e){var t=e.onConfirm,n=(e.onDismiss,e.max),a=e.tokenName,r=void 0===a?"":a,c=e.decimals,o=void 0===c?18:c,l=Object(O.useState)(""),i=Object(v.a)(l,2),u=i[0],s=i[1],m=Object(O.useMemo)((function(){return Object(_.b)(n,o,!1)}),[n,o]),d=Object(O.useCallback)((function(e){s(e.currentTarget.value)}),[s]),f=Object(O.useCallback)((function(){s(m)}),[m,s]);return g.a.createElement(de.a,null,g.a.createElement(be.a,{text:"Withdraw ".concat(r)}),g.a.createElement(pe.a,{onSelectMax:f,onChange:d,value:u,max:m,symbol:r}),g.a.createElement(fe.a,null,g.a.createElement(C.a,{className:"shinyButtonSecondary",onClick:function(){return t(u)}},"Confirm")))},Oe=n(990),ge=x.d.div(o||(o=Object(E.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),je=x.d.div(l||(l=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n  width: 100%;\n"]))),he=x.d.div(i||(i=Object(E.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),ke=x.d.div(u||(u=Object(E.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),xe=function(e){var t=e.bank,n=Object(ae.b)(t.depositToken,t.address),a=Object(v.a)(n,2),r=a[0],c=a[1],o=Object(O.useContext)(x.a).color,l=Object(se.a)(t.depositToken),i=ie(t.contract,t.poolId),u=Object(ue.a)(t.depositTokenName,t.depositToken),s=Object(O.useMemo)((function(){return u||null}),[u]),m=(Number(s)*Number(Object(_.a)(i,t.depositToken.decimal))).toFixed(2),d=oe(t).onStake,f=Object(le.a)(t).onZap,b=me(t).onWithdraw,p=Object(re.a)(g.a.createElement(ve,{max:l,decimals:t.depositToken.decimal,onConfirm:function(e){Number(e)<=0||isNaN(Number(e))||(d(e),h())},tokenName:t.depositTokenName})),E=Object(v.a)(p,2),j=E[0],h=E[1],k=Object(re.a)(g.a.createElement(Oe.a,{decimals:t.depositToken.decimal,onConfirm:function(e,t,n){Number(n)<=0||isNaN(Number(n))||(f(e,t,n),w())},tokenName:t.depositTokenName})),N=Object(v.a)(k,2),y=N[0],w=N[1],S=Object(re.a)(g.a.createElement(Ee,{max:i,decimals:t.depositToken.decimal,onConfirm:function(e){Number(e)<=0||isNaN(Number(e))||(b(e),M())},tokenName:t.depositTokenName})),I=Object(v.a)(S,2),A=I[0],M=I[1];return g.a.createElement(B.a,null,g.a.createElement(T.a,null,g.a.createElement(ke,null,g.a.createElement(ge,null,g.a.createElement(R.a,null,g.a.createElement(K.a,{symbol:t.depositToken.symbol,size:54})),g.a.createElement(D.a,{value:Object(_.a)(i,t.depositToken.decimal)}),g.a.createElement(P.a,{style:{textTransform:"uppercase",color:"#fffff"}},"\u2248 $".concat(m)),g.a.createElement(P.a,{style:{textTransform:"uppercase",color:"#f9d749"}},"".concat(t.depositTokenName," Staked"))),g.a.createElement(je,null,r!==ae.a.APPROVED?g.a.createElement(C.a,{disabled:t.closedForStaking||r===ae.a.PENDING||r===ae.a.UNKNOWN,onClick:c,className:t.closedForStaking||r===ae.a.PENDING||r===ae.a.UNKNOWN?"shinyButtonDisabled":"shinyButton",style:{marginTop:"20px"}},"Approve ".concat(t.depositTokenName)):g.a.createElement(g.a.Fragment,null,g.a.createElement(ne.a,{onClick:A},g.a.createElement(X.b,null)),g.a.createElement(he,null),g.a.createElement(ne.a,{disabled:t.closedForStaking||"BOMB-BSHARE-LP"===t.depositTokenName||"BOMB-BTCB-LP"===t.depositTokenName,onClick:function(){return t.closedForStaking?null:y()}},g.a.createElement(te.a,{style:{color:o.grey[400]}})),g.a.createElement(he,null),g.a.createElement(ne.a,{disabled:t.closedForStaking,onClick:function(){return t.closedForStaking?null:j()}},g.a.createElement(X.a,null)))))))},Ne=n(260),ye=function(e){return Object(O.useContext)(Ne.a).banks.find((function(t){return t.contract===e}))},we=function(e){var t=Object(V.a)(),n=Object(O.useState)(),a=Object(v.a)(n,2),r=a[0],c=a[1],o=Object(O.useCallback)(Object(U.a)(F.a.mark((function n(){return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=c,n.next=3,t.getPoolAPRs(e);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)}))),[t,e]);return Object(O.useEffect)((function(){o().catch((function(e){return console.error("Failed to fetch APR info: ".concat(e.stack))}));var e=setInterval(o,H.b.refreshInterval);return function(){return clearInterval(e)}}),[c,t,o]),r},Be=function(e){var t=Object(V.a)(),n=Object(L.a)();return{onRedeem:Object(O.useCallback)((function(){n(t.exit(e.contract,e.poolId),"Redeem ".concat(e.contract))}),[e,t,n])}},Te=n(985),Pe=Object(N.a)((function(e){return{gridItem:Object(k.a)({height:"100%"},e.breakpoints.up("md"),{height:"90px"})}})),Ce=function(e){var t,n,a=e.bank,r=Object(V.a)(),c=r.BOMB.address,o=r.BSHARE.address;return a.depositTokenName.includes("BOMB-BTCB")?(t="BOMB-BTCB pair",n="https://pancakeswap.finance/add/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/"+c):a.depositTokenName.includes("BOMB-BSHARE")?(t="BOMB-BSHARE pair",n="https://pancakeswap.finance/add/"+c+"/"+o):(t="BSHARE-BNB pair",n="https://pancakeswap.finance/add/BNB/"+o),g.a.createElement(B.a,null,g.a.createElement(T.a,null,g.a.createElement(Ae,{href:n,target:"_blank"},"Provide liquidity for ".concat(t," now on PancakeSwap"))))},Se=function(){return g.a.createElement(Me,null,g.a.createElement(S.a,{icon:"\ud83c\udfda",title:"Not Found",subtitle:"You've hit a bank just robbed by unicorns."}))},Ie=x.d.div(s||(s=Object(E.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),Ae=x.d.a(m||(m=Object(E.a)(["\n  font-weight: 700;\n  text-decoration: none;\n  color: ",";\n"])),(function(e){return e.theme.color.primary.main})),Re=x.d.div(d||(d=Object(E.a)(["\n  display: flex;\n  width: 600px;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]))),De=x.d.div(f||(f=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]))),Me=x.d.div(b||(b=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n"]))),Fe=function(){Object(O.useEffect)((function(){return window.scrollTo(0,0)}));var e,t=Pe(),n=Object(h.f)().bankId,a=ye(n),r=Object(j.b)().account,c=Be(a).onRedeem,o=we(a);return e=a.depositTokenName.includes("BOMB-BTCB")?"https://www.bomb.farm/#/bsc/vault/bomb-bomb-btcb":a.depositTokenName.includes("BOMB-BSHARE")?"https://www.bomb.farm/#/bsc/":"https://www.bomb.farm/#/bsc/vault/bomb-bshare-wbnb",r&&a?g.a.createElement(g.a.Fragment,null,g.a.createElement(S.a,{icon:"\ud83d\udca3",title:null===a||void 0===a?void 0:a.name}),g.a.createElement(y.a,{mt:5},g.a.createElement(w.a,{container:!0,justify:"center",spacing:3,style:{marginBottom:"30px"}},g.a.createElement(Te.a,{variant:"filled",severity:"info"},g.a.createElement("h3",null,"Our autocompounding vaults are live!"),g.a.createElement("br",null),"We support zapping tokens, and auto-compound every 2 hours!",g.a.createElement("br",null),"Check it out here: ",g.a.createElement("a",{href:e},e)))),g.a.createElement(y.a,null,g.a.createElement(w.a,{container:!0,justify:"center",spacing:3,style:{marginBottom:"50px"}},g.a.createElement(w.a,{item:!0,xs:12,md:2,lg:2,className:t.gridItem},g.a.createElement(B.a,{className:t.gridItem},g.a.createElement(T.a,{style:{textAlign:"center"}},g.a.createElement(P.a,null,"APR"),g.a.createElement(P.a,null,a.closedForStaking?"0.00":null===o||void 0===o?void 0:o.yearlyAPR,"%")))),g.a.createElement(w.a,{item:!0,xs:12,md:2,lg:2,className:t.gridItem},g.a.createElement(B.a,{className:t.gridItem},g.a.createElement(T.a,{style:{textAlign:"center"}},g.a.createElement(P.a,null,"Daily APR"),g.a.createElement(P.a,null,a.closedForStaking?"0.00":null===o||void 0===o?void 0:o.dailyAPR,"%")))),g.a.createElement(w.a,{item:!0,xs:12,md:2,lg:2,className:t.gridItem},g.a.createElement(B.a,{className:t.gridItem},g.a.createElement(T.a,{style:{textAlign:"center"}},g.a.createElement(P.a,null,"TVL"),g.a.createElement(P.a,null,"$",null===o||void 0===o?void 0:o.TVL)))))),g.a.createElement(y.a,{mt:5},g.a.createElement(Ie,null,g.a.createElement(Re,null,g.a.createElement(De,null,g.a.createElement(Q,{bank:a})),g.a.createElement(I.a,null),g.a.createElement(De,null,g.a.createElement(xe,{bank:a}))),g.a.createElement(I.a,{size:"lg"}),a.depositTokenName.includes("LP")&&g.a.createElement(Ce,{bank:a}),g.a.createElement(I.a,{size:"lg"}),g.a.createElement("div",null,g.a.createElement(C.a,{onClick:c,className:"shinyButtonSecondary"},"Claim & Withdraw")),g.a.createElement(I.a,{size:"lg"})))):a?g.a.createElement(A.a,null):g.a.createElement(Se,null)},Ue=n(1569),ze=n(814),Ve=n(246),He=n(9),We=n(41),Le=n(244),Ge=n(245),_e=O.forwardRef((function(e,t){var n=e.disableSpacing,a=void 0!==n&&n,r=e.classes,c=e.className,o=Object(We.a)(e,["disableSpacing","classes","className"]);return O.createElement("div",Object(He.a)({className:Object(Le.default)(r.root,c,!a&&r.spacing),ref:t},o))})),Ke=Object(Ge.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(_e),Ze=function(e){var t=e.bank;return g.a.createElement(w.a,{item:!0,xs:12,md:4,lg:4},g.a.createElement(B.a,{variant:"outlined"},g.a.createElement(T.a,null,g.a.createElement(y.a,{style:{position:"relative"}},g.a.createElement(y.a,{style:{position:"absolute",right:"0px",top:"-5px",height:"48px",width:"48px",borderRadius:"40px",backgroundColor:"#363746",alignItems:"center",display:"flex",justifyContent:"center"}},g.a.createElement(K.a,{size:32,symbol:t.depositTokenName})),g.a.createElement(P.a,{variant:"h5",component:"h2"},t.depositTokenName),g.a.createElement(P.a,{color:"textSecondary"},"Deposit ",t.depositTokenName.toUpperCase()," Earn "," ".concat(t.earnTokenName)))),g.a.createElement(Ke,{style:{justifyContent:"flex-end"}},g.a.createElement(C.a,{className:"shinyButtonSecondary",component:Ve.b,to:"/farm/".concat(t.contract)},"View"))))},qe=function(){return[Object(O.useContext)(Ne.a).banks]},$e=n(820),Je=n(776),Ye=n.n(Je),Qe=Object(x.c)(p||(p=Object(E.a)(["\n  body {\n    background: url(",") repeat !important;\n    background-size: cover !important;\n    background-color: #171923;\n  }\n"])),Ye.a),Xe=function(){var e=qe(),t=Object(v.a)(e,1)[0],n=Object(h.g)().path,a=Object(j.b)().account,r=t.filter((function(e){return!e.finished}));return g.a.createElement(h.c,null,g.a.createElement(ze.a,null,g.a.createElement(h.a,{exact:!0,path:n},g.a.createElement(Qe,null),g.a.createElement($e.a,null,g.a.createElement("title",null,"bomb.money | Farms")),a?g.a.createElement(Ue.a,{maxWidth:"lg"},g.a.createElement(y.a,{mt:5},g.a.createElement("div",{hidden:0===r.filter((function(e){return 2===e.sectionInUI})).length},g.a.createElement(P.a,{color:"textYellow",align:"center",variant:"h4",gutterBottom:!0},"Earn BSHARE by staking PancakeSwap LP"),g.a.createElement(w.a,{container:!0,spacing:3,style:{marginTop:"20px"}},r.filter((function(e){return 2===e.sectionInUI})).map((function(e){return g.a.createElement(g.a.Fragment,{key:e.name},g.a.createElement(Ze,{bank:e}))})))),g.a.createElement("div",{hidden:0===r.filter((function(e){return 1===e.sectionInUI})).length},g.a.createElement(P.a,{color:"textPrimary",variant:"h4",gutterBottom:!0,style:{marginTop:"20px"}},"Inactive ApeSwap Farms"),g.a.createElement(Te.a,{variant:"filled",severity:"warning"},"Please remove funds from all farms which are not active."),g.a.createElement(w.a,{container:!0,spacing:3,style:{marginTop:"20px",display:"flex",alignItems:"center"}},r.filter((function(e){return 1===e.sectionInUI})).map((function(e){return g.a.createElement(g.a.Fragment,{key:e.name},g.a.createElement(Ze,{bank:e}))})))),g.a.createElement("div",{hidden:0===r.filter((function(e){return 0===e.sectionInUI})).length},g.a.createElement(P.a,{color:"textPrimary",variant:"h4",gutterBottom:!0,style:{marginTop:"20px"}},"Genesis Pools"),g.a.createElement(Te.a,{variant:"filled",severity:"warning"},"Genesis pools have ended. Please claim all rewards and remove funds from Genesis pools."),g.a.createElement(w.a,{container:!0,spacing:3,style:{marginTop:"20px"}},r.filter((function(e){return 0===e.sectionInUI})).map((function(e){return g.a.createElement(g.a.Fragment,{key:e.name},g.a.createElement(Ze,{bank:e}))})))))):g.a.createElement(A.a,null)),g.a.createElement(h.a,{path:"".concat(n,"/:bankId")},g.a.createElement(Qe,null),g.a.createElement(Fe,null))))}},752:function(e,t,n){"use strict";var a=n(1),r=n(759),c=n(100);t.a=function(){var e=Object(r.b)(),t=Object(c.b)();return Object(a.useCallback)((function(n,a){n.then((function(t){return e(t,{summary:a})})).catch((function(e){if(!e.message.includes("User denied")){var n="Unable to ".concat(a[0].toLowerCase()).concat(a.slice(1));console.error("".concat(n,": ").concat(e.message||e.stack)),t({error:{message:n,stack:e.message||e.stack}})}}))}),[t,e])}},770:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a,r=n(2),c=n.n(r),o=n(12),l=n(96),i=n(23),u=n(1),s=n(759),m=n(789),d=l.a.constants.MaxUint256,f=i.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={})),t.b=function(e,t){var n=Object(s.a)(e.address,t),r=Object(m.a)(e,t,n),l=Object(u.useMemo)((function(){return r?r.lt(f)?n?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[r,n]),i=Object(s.b)(),b=Object(u.useCallback)(Object(o.a)(c.a.mark((function n(){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(l===a.NOT_APPROVED){n.next=3;break}return console.error("approve was called unnecessarily"),n.abrupt("return");case 3:return n.next=5,e.approve(t,d);case 5:r=n.sent,i(r,{summary:"Approve ".concat(e.symbol),approval:{tokenAddress:e.address,spender:t}});case 7:case"end":return n.stop()}}),n)}))),[l,e,t,i]);return[l,b]}},773:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a,r=n(40),c=n(1),o=n.n(c),l=n(32).d.div(a||(a=Object(r.a)(["\n  background-color: #363746;\n  font-size: 36px;\n  height: 95px;\n  width: 95px;\n  border-radius: 95px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 0 auto ","px;\n"])),(function(e){return e.theme.spacing[3]})),i=function(e){var t=e.children;return o.a.createElement(l,null,t)}},774:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(1),r=n.n(a),c=n(1596),o=n(815),l=function(){return r.a.createElement(c.a,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement(o.a,null))}},776:function(e,t,n){e.exports=n.p+"static/media/background.3761c6a5.jpg"},783:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a,r=n(40),c=n(1),o=n.n(c),l=n(32).d.div(a||(a=Object(r.a)(["\n  font-size: 36px;\n  font-weight: 700;\n"]))),i=function(e){var t=e.value;return o.a.createElement(l,null,t)}},794:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a,r=n(1),c=n.n(r),o=n(32),l=n(40),i=o.d.div(a||(a=Object(l.a)([""]))),u=function(e){var t=e.children;return c.a.createElement(i,null,t)},s=function(e){var t=e.color,n=Object(r.useContext)(o.a).color;return c.a.createElement(u,null,c.a.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:t||n.grey[400]})))},m=function(e){var t=e.color,n=Object(r.useContext)(o.a).color;return c.a.createElement(u,null,c.a.createElement("svg",{viewBox:"0 0 24 24",fill:t||n.grey[400],width:"18px",height:"18px"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M19 13H5v-2h14v2z"})))}},795:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a,r,c=n(40),o=n(1),l=n.n(o),i=n(32),u=n(246),s=i.d.button(a||(a=Object(c.a)(["\n  align-items: center;\n  border: 2px solid;\n  border-radius: 28px;\n  background-color: #171923;\n  box-shadow: ",";\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-weight: 700;\n  height: 56px;\n  justify-content: center;\n  letter-spacing: 1px;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: ",";\n  text-transform: uppercase;\n  width: 56px;\n\n  &:hover {\n    background-color: #f9d749;\n    color: #171923;\n  }\n"])),(function(e){return"rgba(251,221,76,1)"}),(function(e){return e.disabled?"grey":"#f9d749"}),(function(e){return e.disabled?"none":void 0})),m=Object(i.d)(u.b)(r||(r=Object(c.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),d=function(e){var t=e.children,n=e.disabled,a=e.onClick,r=e.to;return l.a.createElement(s,{disabled:n,onClick:a},r?l.a.createElement(m,{to:r},t):t)}},816:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a,r=n(40),c=n(1),o=n.n(c),l=n(32),i=l.d.div(a||(a=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),u=function(e){var t,n=e.size,a=void 0===n?"md":n,r=Object(c.useContext)(l.a).spacing;switch(a){case"lg":t=r[6];break;case"sm":t=r[2];break;case"md":default:t=r[4]}return o.a.createElement(i,{size:t})}},869:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(12),o=n(33),l=n(1),i=n(243),u=n(748);t.a=function(e){var t=Object(l.useState)(),n=Object(o.a)(t,2),a=n[0],s=n[1],m=Object(u.a)().slowRefresh,d=Object(i.a)();return Object(l.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=s,t.next=4,d.getLPStat(e);case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=11;break;case 8:t.prev=8,t.t2=t.catch(0),console.error(t.t2);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[s,d,m,e]),a}},906:function(e,t,n){"use strict";var a=n(1),r=n(243),c=n(752);t.a=function(e){var t=Object(r.a)(),n=Object(c.a)();return{onZap:Object(a.useCallback)((function(a,r,c){n(t.zapIn(a,r,c),"Zap ".concat(c," in ").concat(e.depositTokenName,"."))}),[e,t,n])}}},912:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(12),o=n(33),l=n(1),i=n(243),u=n(34);t.a=function(e,t){var n=Object(l.useState)("0"),a=Object(o.a)(n,2),s=a[0],m=a[1],d=Object(i.a)(),f=null===d||void 0===d?void 0:d.isUnlocked,b=Object(l.useCallback)(Object(c.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.getDepositTokenPriceInDollars(e,t);case 2:a=n.sent,m(a);case 4:case"end":return n.stop()}}),n)}))),[t,e,d]);return Object(l.useEffect)((function(){if(f){b().catch((function(e){return console.error(e.stack)}));var e=setInterval(b,u.b.refreshInterval);return function(){return clearInterval(e)}}}),[f,m,d,b]),s}},990:function(e,t,n){"use strict";var a,r=n(40),c=n(2),o=n.n(c),l=n(12),i=n(33),u=n(1),s=n.n(u),m=n(1605),d=n(1595),f=n(1574),b=n(245),p=n(1582),v=n(767),E=n(775),O=n(768),g=n(772),j=n(32),h=n(21),k=n(779),x=n(869),N=n(769),y=n(243),w=n(57),B=n(96),T=n(23),P=n(759),C=n(789),S=n(81),I=B.a.constants.MaxUint256,A=T.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={}));var R,D,M=function(e){var t,n=Object(y.a)();e===S.a?t=n.BNB:e===S.b?t=n.BOMB:e===S.c?t=n.BSHARE:e===S.d&&(t=n.externalTokens[S.d]);var r=Object(P.a)(t.address,S.f),c=Object(C.a)(t,S.f,r),i=Object(u.useMemo)((function(){return t===n.BNB?a.APPROVED:c?c.lt(A)?r?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[c,r,t,n]),s=Object(P.b)(),m=Object(u.useCallback)(Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i===a.NOT_APPROVED){e.next=3;break}return console.error("approve was called unnecessarily"),e.abrupt("return");case 3:return e.next=5,t.approve(S.f,I);case 5:n=e.sent,s(n,{summary:"Approve ".concat(t.symbol),approval:{tokenAddress:t.address,spender:S.f}});case 7:case"end":return e.stop()}}),e)}))),[i,t,s]);return[i,m]},F=n(985),U=j.d.div(R||(R=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),z=j.d.div(D||(D=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 22px;\n  justify-content: flex-start;\n"])),(function(e){return e.theme.color.grey[400]})),V=Object(b.a)({root:{backgroundColor:"white",color:"#2c2560","&:hover":{backgroundColor:"grey",color:"#2c2560"},selected:{backgroundColor:"black"}}})(p.a);t.a=function(e){var t=e.onConfirm,n=(e.onDismiss,e.tokenName),r=void 0===n?"":n,c=e.decimals,b=void 0===c?18:c,p=Object(y.a)(),j=Object(w.b)().balance,B=(Number(j)/1e18).toFixed(4).toString(),T=Object(N.a)(p.BOMB),P=Object(N.a)(p.BSHARE),C=Object(N.a)(p.BTC),I=Object(u.useState)(""),A=Object(i.a)(I,2),R=A[0],D=A[1],H=Object(u.useState)(S.a),W=Object(i.a)(H,2),L=W[0],G=W[1],_=Object(u.useState)(B),K=Object(i.a)(_,2),Z=K[0],q=K[1],$=Object(u.useState)({token0:"0",token1:"0"}),J=Object(i.a)($,2),Y=J[0],Q=J[1],X=M(L),ee=Object(i.a)(X,2),te=ee[0],ne=ee[1],ae=Object(x.a)("BOMB-BTCB-LP"),re=Object(x.a)("BSHARE-BNB-LP"),ce=Object(u.useMemo)((function(){return ae||null}),[ae]),oe=Object(u.useMemo)((function(){return re||null}),[re]),le=r.startsWith(S.b)?null===ce||void 0===ce?void 0:ce.ftmAmount:null===oe||void 0===oe?void 0:oe.ftmAmount;var ie=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.currentTarget.value&&0!==t.currentTarget.value||(D(t.currentTarget.value),Q({token0:"0",token1:"0"})),a=t.currentTarget.value,!isNaN(parseFloat(a))&&isFinite(a)){e.next=3;break}return e.abrupt("return");case 3:return D(t.currentTarget.value),e.next=6,p.estimateZapIn(L,r,String(t.currentTarget.value));case 6:n=e.sent,Q({token0:n[0].toString(),token1:n[1].toString()});case 8:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(Z),e.next=3,p.estimateZapIn(L,r,String(Z));case 3:t=e.sent,Q({token0:t[0].toString(),token1:t[1].toString()});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(v.a,null,s.a.createElement(O.a,{text:"Zap in ".concat(r)}),s.a.createElement(U,null),s.a.createElement(m.a,{style:{color:"#2c2560"},id:"label"},"Select asset to zap with"),s.a.createElement(d.a,{onChange:function(e){var t=e.target.value;G(t),q(B),e.target.value===S.c&&q(Object(h.a)(P,b)),e.target.value===S.b&&q(Object(h.a)(T,b)),e.target.value===S.d&&q(Object(h.a)(C,b))},style:{color:"#2c2560"},labelId:"label",id:"select",value:L},s.a.createElement(V,{value:S.a},"BNB"),s.a.createElement(V,{value:S.c},"BSHARE")),s.a.createElement(g.a,{onSelectMax:ue,onChange:ie,value:R,max:Z,symbol:L}),s.a.createElement(k.a,{text:"Zap Estimations"}),s.a.createElement(z,null," ",r,": ",Number(Y.token0)/Number(le)),s.a.createElement(z,null," ","(",Number(Y.token0)," ",r.startsWith(S.c)?S.c:S.a," /"," ",Number(Y.token1)," ",r.startsWith(S.c)?S.a:S.c,")"," "),s.a.createElement(E.a,null,s.a.createElement(f.a,{color:"primary",variant:"contained",onClick:function(){return te!==a.APPROVED?ne():t(L,r,R)}},te!==a.APPROVED?"Approve":"Let's go")),s.a.createElement(U,null),s.a.createElement(F.a,{variant:"filled",severity:"info"},"New feature. Use at your own risk!"))}},991:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a,r,c,o=n(40),l=n(1),i=n.n(l),u=n(32),s=u.d.div(a||(a=Object(o.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: ","px;\n  padding-top: ","px;\n  max-width: 512px;\n  width: 100%;\n  margin: 0 auto;\n"])),(function(e){return e.theme.spacing[6]}),(function(e){return e.theme.spacing[6]})),m=u.d.h1(r||(r=Object(o.a)(["\n  color: '#f9d749';\n  font-size: 36px;\n  font-weight: 700;\n  margin: 0;\n  padding: 0;\n"]))),d=u.d.h3(c||(c=Object(o.a)(["\n  color: ",";\n  font-size: 18px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n"])),(function(e){return e.theme.color.grey[400]})),f=function(e){e.icon;var t=e.subtitle,n=e.title;return i.a.createElement(s,null,i.a.createElement(m,null,n),i.a.createElement(d,null,t))}}}]);
//# sourceMappingURL=11.7eb9d6c8.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[49,13],{"0zqC":function(Fn,cn,e){"use strict";e.r(cn);var K=e("tJVT"),t=e("q1tI"),y=e.n(t),M=e("wx14"),le=e("rePB"),V=e("ODXe"),sn=e("U8pU"),Ce=e("Ff2n"),de=e("VTBJ"),ze=e("TSYQ"),Oe=e.n(ze),mn=e("Zm9Q"),In=e("5Z9U"),On=e("6cGi"),on=e("KQm4"),xe=e("wgJM"),Bn=e("t23M");function Nn(o){var d=Object(t.useRef)(),v=Object(t.useRef)(!1);function R(){for(var E=arguments.length,C=new Array(E),P=0;P<E;P++)C[P]=arguments[P];v.current||(xe.a.cancel(d.current),d.current=Object(xe.a)(function(){o.apply(void 0,C)}))}return Object(t.useEffect)(function(){return function(){v.current=!0,xe.a.cancel(d.current)}},[]),R}function Sn(o){var d=Object(t.useRef)([]),v=Object(t.useState)({}),R=Object(V.a)(v,2),E=R[1],C=Object(t.useRef)(typeof o=="function"?o():o),P=Nn(function(){var B=C.current;d.current.forEach(function(W){B=W(B)}),d.current=[],C.current=B,E({})});function A(B){d.current.push(B),P()}return[C.current,A]}var Te=e("4IlW");function nt(o,d){var v,R=o.prefixCls,E=o.id,C=o.active,P=o.rtl,A=o.tab,B=A.key,W=A.tab,x=A.disabled,U=A.closeIcon,z=o.tabBarGutter,re=o.tabPosition,G=o.closable,Y=o.renderWrapper,se=o.removeAriaLabel,J=o.editable,q=o.onClick,ne=o.onRemove,Q=o.onFocus,ae="".concat(R,"-tab");t.useEffect(function(){return ne},[]);var k={};re==="top"||re==="bottom"?k[P?"marginLeft":"marginRight"]=z:k.marginBottom=z;var pe=J&&G!==!1&&!x;function _(te){x||q(te)}function oe(te){te.preventDefault(),te.stopPropagation(),J.onEdit("remove",{key:B,event:te})}var ue=t.createElement("div",{key:B,ref:d,className:Oe()(ae,(v={},Object(le.a)(v,"".concat(ae,"-with-remove"),pe),Object(le.a)(v,"".concat(ae,"-active"),C),Object(le.a)(v,"".concat(ae,"-disabled"),x),v)),style:k,onClick:_},t.createElement("div",{role:"tab","aria-selected":C,id:E&&"".concat(E,"-tab-").concat(B),className:"".concat(ae,"-btn"),"aria-controls":E&&"".concat(E,"-panel-").concat(B),"aria-disabled":x,tabIndex:x?null:0,onClick:function(H){H.stopPropagation(),_(H)},onKeyDown:function(H){[Te.a.SPACE,Te.a.ENTER].includes(H.which)&&(H.preventDefault(),_(H))},onFocus:Q},W),pe&&t.createElement("button",{type:"button","aria-label":se||"remove",tabIndex:0,className:"".concat(ae,"-remove"),onClick:function(H){H.stopPropagation(),oe(H)}},U||J.removeIcon||"\xD7"));return Y&&(ue=Y(ue)),ue}var Kn=t.forwardRef(nt),tt={width:0,height:0,left:0,top:0};function ct(o,d,v){return Object(t.useMemo)(function(){for(var R,E=new Map,C=d.get((R=o[0])===null||R===void 0?void 0:R.key)||tt,P=C.left+C.width,A=0;A<o.length;A+=1){var B=o[A].key,W=d.get(B);if(!W){var x;W=d.get((x=o[A-1])===null||x===void 0?void 0:x.key)||tt}var U=E.get(B)||Object(de.a)({},W);U.right=P-U.left-U.width,E.set(B,U)}return E},[o.map(function(R){return R.key}).join("_"),d,v])}var rt={width:0,height:0,left:0,top:0,right:0};function mt(o,d,v,R,E){var C=E.tabs,P=E.tabPosition,A=E.rtl,B,W,x;["top","bottom"].includes(P)?(B="width",W=A?"right":"left",x=Math.abs(d.left)):(B="height",W="top",x=-d.top);var U=d[B],z=v[B],re=R[B],G=U;return z+re>U&&(G=U-re),Object(t.useMemo)(function(){if(!C.length)return[0,0];for(var Y=C.length,se=Y,J=0;J<Y;J+=1){var q=o.get(C[J].key)||rt;if(q[W]+q[B]>x+G){se=J-1;break}}for(var ne=0,Q=Y-1;Q>=0;Q-=1){var ae=o.get(C[Q].key)||rt;if(ae[W]<x){ne=Q+1;break}}return[ne,se]},[o,x,G,P,C.map(function(Y){return Y.key}).join("_"),A])}var Wn=e("Gytx"),at=e.n(Wn),zn=e("Kwbf");function ft(o,d){var v=o.prefixCls,R=o.invalidate,E=o.item,C=o.renderItem,P=o.responsive,A=o.registerSize,B=o.itemKey,W=o.className,x=o.style,U=o.children,z=o.display,re=o.order,G=o.component,Y=G===void 0?"div":G,se=Object(Ce.a)(o,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),J=P&&!z;function q(pe){A(B,pe)}t.useEffect(function(){return function(){q(null)}},[]);var ne=C&&E!==void 0?C(E):U,Q;R||(Q={opacity:J?0:1,height:J?0:void 0,overflowY:J?"hidden":void 0,order:P?re:void 0,pointerEvents:J?"none":void 0});var ae={};J&&(ae["aria-hidden"]=!0);var k=t.createElement(Y,Object(M.a)({className:Oe()(!R&&v,W),style:Object(de.a)(Object(de.a)({},Q),x)},ae,se,{ref:d}),ne);return P&&(k=t.createElement(Bn.default,{onResize:function(_){var oe=_.offsetWidth;q(oe)}},k)),k}var Ln=t.forwardRef(ft);Ln.displayName="Item";var xn=Ln;function Un(){var o=Object(t.useState)({}),d=Object(V.a)(o,2),v=d[1],R=Object(t.useRef)([]),E=Object(t.useRef)(!1),C=0,P=0;Object(t.useEffect)(function(){return function(){E.current=!0}},[]);function A(B){var W=C;C+=1,R.current.length<W+1&&(R.current[W]=B);var x=R.current[W];function U(z){R.current[W]=typeof z=="function"?z(R.current[W]):z,xe.a.cancel(P),P=Object(xe.a)(function(){E.current||v({})})}return[x,U]}return A}var st=function(d,v){var R=t.useContext(ln);if(!R){var E=d.component,C=E===void 0?"div":E,P=Object(Ce.a)(d,["component"]);return t.createElement(C,Object(M.a)({},P,{ref:v}))}var A=R.className,B=Object(Ce.a)(R,["className"]),W=d.className,x=Object(Ce.a)(d,["className"]);return t.createElement(ln.Provider,{value:null},t.createElement(xn,Object(M.a)({ref:v,className:Oe()(A,W)},B,x)))},$n=t.forwardRef(st);$n.displayName="RawItem";var it=$n,ln=t.createContext(null),Hn="responsive",ot="invalidate";function fn(o){return"+ ".concat(o.length," ...")}function T(o,d){var v=o.prefixCls,R=v===void 0?"rc-overflow":v,E=o.data,C=E===void 0?[]:E,P=o.renderItem,A=o.renderRawItem,B=o.itemKey,W=o.itemWidth,x=W===void 0?10:W,U=o.ssr,z=o.style,re=o.className,G=o.maxCount,Y=o.renderRest,se=o.renderRawRest,J=o.suffix,q=o.component,ne=q===void 0?"div":q,Q=o.itemComponent,ae=o.onVisibleChange,k=Object(Ce.a)(o,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),pe=Un(),_=U==="full",oe=pe(null),ue=Object(V.a)(oe,2),te=ue[0],H=ue[1],ie=te||0,fe=pe(new Map),me=Object(V.a)(fe,2),ye=me[0],Fe=me[1],he=pe(0),ge=Object(V.a)(he,2),De=ge[0],je=ge[1],Re=pe(0),Se=Object(V.a)(Re,2),Ne=Se[0],Ue=Se[1],Ae=pe(0),we=Object(V.a)(Ae,2),Le=we[0],Ie=we[1],Cn=Object(t.useState)(null),Xe=Object(V.a)(Cn,2),$e=Xe[0],en=Xe[1],vn=Object(t.useState)(null),gn=Object(V.a)(vn,2),Ee=gn[0],Be=gn[1],He=t.useMemo(function(){return Ee===null&&_?Number.MAX_SAFE_INTEGER:Ee||0},[Ee,te]),Ve=Object(t.useState)(!1),wn=Object(V.a)(Ve,2),Gn=wn[0],Mn=wn[1],Qe="".concat(R,"-item"),Rn=Math.max(De,Ne),nn=C.length&&G===Hn,En=G===ot,Ge=nn||typeof G=="number"&&C.length>G,Ze=Object(t.useMemo)(function(){var ce=C;return nn?te===null&&_?ce=C:ce=C.slice(0,Math.min(C.length,ie/x)):typeof G=="number"&&(ce=C.slice(0,G)),ce},[C,x,te,G,nn]),jn=Object(t.useMemo)(function(){return nn?C.slice(He+1):C.slice(Ze.length)},[C,Ze,nn,He]),rn=Object(t.useCallback)(function(ce,be){var Pe;return typeof B=="function"?B(ce):(Pe=B&&(ce==null?void 0:ce[B]))!==null&&Pe!==void 0?Pe:be},[B]),Je=Object(t.useCallback)(P||function(ce){return ce},[P]);function Ke(ce,be){Be(ce),be||(Mn(ce<C.length-1),ae==null||ae(ce))}function Yn(ce,be){H(be.clientWidth)}function Xn(ce,be){Fe(function(Pe){var Ye=new Map(Pe);return be===null?Ye.delete(ce):Ye.set(ce,be),Ye})}function lt(ce,be){Ue(be),je(Ne)}function yn(ce,be){Ie(be)}function dn(ce){return ye.get(rn(Ze[ce],ce))}t.useLayoutEffect(function(){if(ie&&Rn&&Ze){var ce=Le,be=Ze.length,Pe=be-1;if(!be){Ke(0),en(null);return}for(var Ye=0;Ye<be;Ye+=1){var qn=dn(Ye);if(qn===void 0){Ke(Ye-1,!0);break}if(ce+=qn,Ye===Pe-1&&ce+dn(Pe)<=ie){Ke(Pe),en(null);break}else if(ce+Rn>ie){Ke(Ye-1),en(ce-qn-Le+Ne);break}else if(Ye===Pe){Ke(Pe),en(ce-Le);break}}J&&dn(0)+Le>ie&&en(null)}},[ie,ye,Ne,Le,rn,Ze]);var Qn=Gn&&!!jn.length,bn={};$e!==null&&nn&&(bn={position:"absolute",left:$e,top:0});var an={prefixCls:Qe,responsive:nn,component:Q,invalidate:En},Zn=A?function(ce,be){var Pe=rn(ce,be);return t.createElement(ln.Provider,{key:Pe,value:Object(de.a)(Object(de.a)({},an),{},{order:be,item:ce,itemKey:Pe,registerSize:Xn,display:be<=He})},A(ce,be))}:function(ce,be){var Pe=rn(ce,be);return t.createElement(xn,Object(M.a)({},an,{order:be,key:Pe,item:ce,renderItem:Je,itemKey:Pe,registerSize:Xn,display:be<=He}))},Dn,kn={order:Qn?He:Number.MAX_SAFE_INTEGER,className:"".concat(Qe,"-rest"),registerSize:lt,display:Qn};if(se)se&&(Dn=t.createElement(ln.Provider,{value:Object(de.a)(Object(de.a)({},an),kn)},se(jn)));else{var tn=Y||fn;Dn=t.createElement(xn,Object(M.a)({},an,kn),typeof tn=="function"?tn(jn):tn)}var Pn=t.createElement(ne,Object(M.a)({className:Oe()(!En&&R,re),style:z,ref:d},k),Ze.map(Zn),Ge?Dn:null,J&&t.createElement(xn,Object(M.a)({},an,{order:He,className:"".concat(Qe,"-suffix"),registerSize:yn,display:!0,style:bn}),J));return nn&&(Pn=t.createElement(Bn.default,{onResize:Yn},Pn)),Pn}var D=t.forwardRef(T);D.displayName="Overflow",D.Item=it,D.RESPONSIVE=Hn,D.INVALIDATE=ot;var F=D,f=F,i=e("1OyB"),h=e("vuIU"),b=e("Ji7U"),S=e("LK+K"),l=e("bT9E"),p=e("YrtM"),u=t.createContext(null);function I(o,d){var v=Object(de.a)({},o);return Object.keys(d).forEach(function(R){var E=d[R];E!==void 0&&(v[R]=E)}),v}function w(o){var d=o.children,v=o.locked,R=Object(Ce.a)(o,["children","locked"]),E=t.useContext(u),C=Object(p.a)(function(){return I(E,R)},[E,R],function(P,A){return!v&&(P[0]!==A[0]||!at()(P[1],A[1]))});return t.createElement(u.Provider,{value:C},d)}function j(o,d,v,R){var E=t.useContext(u),C=E.activeKey,P=E.onActive,A=E.onInactive,B={active:C===o};return d||(B.onMouseEnter=function(W){v==null||v({key:o,domEvent:W}),P(o)},B.onMouseLeave=function(W){R==null||R({key:o,domEvent:W}),A(o)}),B}function m(o){var d=o.item,v=Object(Ce.a)(o,["item"]);return Object.defineProperty(v,"item",{get:function(){return Object(zn.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),d}}),v}function r(o){var d=o.icon,v=o.props,R=o.children,E;return typeof d=="function"?E=t.createElement(d,Object(de.a)({},v)):E=d,E||R||null}function a(o){var d=t.useContext(u),v=d.mode,R=d.rtl,E=d.inlineIndent;if(v!=="inline")return null;var C=o;return R?{paddingRight:C*E}:{paddingLeft:C*E}}var n=[],c=t.createContext(null);function s(){return t.useContext(c)}var g=t.createContext(n);function O(o){var d=t.useContext(g);return t.useMemo(function(){return o!==void 0?[].concat(Object(on.a)(d),[o]):d},[d,o])}var N=t.createContext(null),$=t.createContext(null);function L(o,d){return o===void 0?null:"".concat(o,"-").concat(d)}function X(o){var d=t.useContext($);return L(d,o)}var We=function(o){Object(b.a)(v,o);var d=Object(S.a)(v);function v(){return Object(i.a)(this,v),d.apply(this,arguments)}return Object(h.a)(v,[{key:"render",value:function(){var E=this.props,C=E.title,P=E.attribute,A=E.elementRef,B=Object(Ce.a)(E,["title","attribute","elementRef"]),W=Object(l.a)(B,["eventKey"]);return Object(zn.a)(!P,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(f.Item,Object(M.a)({},P,{title:typeof C=="string"?C:void 0},W,{ref:A}))}}]),v}(t.Component),qe=function(d){var v,R=d.style,E=d.className,C=d.eventKey,P=d.disabled,A=d.itemIcon,B=d.children,W=d.role,x=d.onMouseEnter,U=d.onMouseLeave,z=d.onClick,re=d.onKeyDown,G=d.onFocus,Y=Object(Ce.a)(d,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),se=X(C),J=t.useContext(u),q=J.prefixCls,ne=J.onItemClick,Q=J.disabled,ae=J.overflowDisabled,k=J.itemIcon,pe=J.selectedKeys,_=J.onActive,oe="".concat(q,"-item"),ue=t.useRef(),te=t.useRef(),H=Q||P,ie=O(C),fe=function(Ae){return{key:C,keyPath:ie,item:ue.current,domEvent:Ae}},me=A||k,ye=j(C,H,x,U),Fe=ye.active,he=Object(Ce.a)(ye,["active"]),ge=pe.includes(C),De=a(ie.length),je=function(Ae){if(!H){var we=fe(Ae);z==null||z(m(we)),ne(we)}},Re=function(Ae){if(re==null||re(Ae),Ae.which===Te.a.ENTER){var we=fe(Ae);z==null||z(m(we)),ne(we)}},Se=function(Ae){_(C),G==null||G(Ae)},Ne={};return d.role==="option"&&(Ne["aria-selected"]=ge),t.createElement(We,Object(M.a)({ref:ue,elementRef:te,role:W===null?"none":W||"menuitem",tabIndex:P?null:-1,"data-menu-id":ae&&se?null:se},Y,he,Ne,{component:"li","aria-disabled":P,style:Object(de.a)(Object(de.a)({},De),R),className:Oe()(oe,(v={},Object(le.a)(v,"".concat(oe,"-active"),Fe),Object(le.a)(v,"".concat(oe,"-selected"),ge),Object(le.a)(v,"".concat(oe,"-disabled"),H),v),E),onClick:je,onKeyDown:Re,onFocus:Se}),B,t.createElement(r,{props:Object(de.a)(Object(de.a)({},d),{},{isSelected:ge}),icon:me}))};function pn(o){var d=o.eventKey,v=s(),R=O(d);return t.useEffect(function(){if(v)return v.registerPath(d,R),function(){v.unregisterPath(d,R)}},[R]),v?null:t.createElement(qe,o)}var hn=pn;function An(o,d){return Object(mn.a)(o).map(function(v,R){if(t.isValidElement(v)){var E=v.key;return E==null&&(E="tmp_key-".concat([].concat(Object(on.a)(d),[R]).join("-"))),t.cloneElement(v,{key:E,eventKey:E})}return v})}function _e(o){var d=t.useRef(o);d.current=o;var v=t.useCallback(function(){for(var R,E=arguments.length,C=new Array(E),P=0;P<E;P++)C[P]=arguments[P];return(R=d.current)===null||R===void 0?void 0:R.call.apply(R,[d].concat(C))},[]);return o?v:void 0}var pt=function(d,v){var R=d.className,E=d.children,C=Object(Ce.a)(d,["className","children"]),P=t.useContext(u),A=P.prefixCls,B=P.mode;return t.createElement("ul",Object(M.a)({className:Oe()(A,"".concat(A,"-sub"),"".concat(A,"-").concat(B==="inline"?"inline":"vertical"),R)},C,{"data-menu-list":!0,ref:v}),E)},Qt=t.forwardRef(pt);Qt.displayName="SubMenuList";var Zt=Qt,Rr=e("uciX"),Vn={adjustX:1,adjustY:1},kt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Er={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fa=kt;function qt(o,d,v){if(d)return d;if(v)return v[o]||v.other}var jr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(o){var d=o.prefixCls,v=o.visible,R=o.children,E=o.popup,C=o.popupClassName,P=o.popupOffset,A=o.disabled,B=o.mode,W=o.onVisibleChange,x=t.useContext(u),U=x.getPopupContainer,z=x.rtl,re=x.subMenuOpenDelay,G=x.subMenuCloseDelay,Y=x.builtinPlacements,se=x.triggerSubMenuAction,J=x.forceSubMenuRender,q=x.motion,ne=x.defaultMotions,Q=t.useState(!1),ae=Object(V.a)(Q,2),k=ae[0],pe=ae[1],_=z?Object(de.a)(Object(de.a)({},Er),Y):Object(de.a)(Object(de.a)({},kt),Y),oe=jr[B],ue=qt(B,q,ne),te=Object(de.a)(Object(de.a)({},ue),{},{leavedClassName:"".concat(d,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=t.useRef();return t.useEffect(function(){return H.current=Object(xe.a)(function(){pe(v)}),function(){xe.a.cancel(H.current)}},[v]),t.createElement(Rr.a,{prefixCls:d,popupClassName:Oe()("".concat(d,"-popup"),Object(le.a)({},"".concat(d,"-rtl"),z),C),stretch:B==="horizontal"?"minWidth":null,getPopupContainer:U,builtinPlacements:_,popupPlacement:oe,popupVisible:k,popup:E,popupAlign:P&&{offset:P},action:A?[]:[se],mouseEnterDelay:re,mouseLeaveDelay:G,onPopupVisibleChange:W,forceRender:J,popupMotion:te},R)}var Pr=e("8XRh");function Tr(o){var d=o.id,v=o.open,R=o.keyPath,E=o.children,C="inline",P=t.useContext(u),A=P.prefixCls,B=P.forceSubMenuRender,W=P.motion,x=P.defaultMotions,U=P.mode,z=t.useRef(!1);z.current=U===C;var re=t.useState(!z.current),G=Object(V.a)(re,2),Y=G[0],se=G[1],J=z.current?v:!1;t.useEffect(function(){z.current&&se(!1)},[U]);var q=Object(de.a)({},qt(C,W,x));R.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!z.current&&!Q&&se(!0),ne==null?void 0:ne(Q)},Y?null:t.createElement(w,{mode:C,locked:!z.current},t.createElement(Pr.default,Object(M.a)({visible:J},q,{forceRender:B,removeOnLeave:!1,leavedClassName:"".concat(A,"-hidden")}),function(Q){var ae=Q.className,k=Q.style;return t.createElement(Zt,{id:d,className:ae,style:k},E)}))}var Fr=function(d){var v,R=d.style,E=d.className,C=d.title,P=d.eventKey,A=d.disabled,B=d.internalPopupClose,W=d.children,x=d.itemIcon,U=d.expandIcon,z=d.popupClassName,re=d.popupOffset,G=d.onClick,Y=d.onMouseEnter,se=d.onMouseLeave,J=d.onTitleClick,q=d.onTitleMouseEnter,ne=d.onTitleMouseLeave,Q=Object(Ce.a)(d,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ae=X(P),k=t.useContext(u),pe=k.prefixCls,_=k.mode,oe=k.openKeys,ue=k.disabled,te=k.overflowDisabled,H=k.activeKey,ie=k.selectedKeys,fe=k.itemIcon,me=k.expandIcon,ye=k.onItemClick,Fe=k.onOpenChange,he=k.onActive,ge=t.useContext(N),De=ge.isSubPathKey,je=O(),Re="".concat(pe,"-submenu"),Se=ue||A,Ne=t.useRef(),Ue=t.useRef(),Ae=x||fe,we=U||me,Le=oe.includes(P),Ie=!te&&Le,Cn=De(ie,P),Xe=j(P,Se,q,ne),$e=Xe.active,en=Object(Ce.a)(Xe,["active"]),vn=t.useState(!1),gn=Object(V.a)(vn,2),Ee=gn[0],Be=gn[1],He=function(Ke){Se||Be(Ke)},Ve=function(Ke){He(!0),Y==null||Y({key:P,domEvent:Ke})},wn=function(Ke){He(!1),se==null||se({key:P,domEvent:Ke})},Gn=t.useMemo(function(){return $e||(_!=="inline"?Ee||De([H],P):!1)},[_,$e,H,Ee,P,De]),Mn=a(je.length),Qe=function(Ke){Se||(J==null||J({key:P,domEvent:Ke}),_==="inline"&&Fe(P,!Le))},Rn=_e(function(Je){G==null||G(m(Je)),ye(Je)}),nn=function(Ke){_!=="inline"&&Fe(P,Ke)},En=function(){he(P)},Ge=ae&&"".concat(ae,"-popup"),Ze=t.createElement("div",Object(M.a)({role:"menuitem",style:Mn,className:"".concat(Re,"-title"),tabIndex:Se?null:-1,ref:Ne,title:typeof C=="string"?C:null,"data-menu-id":te&&ae?null:ae,"aria-expanded":Ie,"aria-haspopup":!0,"aria-controls":Ge,"aria-disabled":Se,onClick:Qe,onFocus:En},en),C,t.createElement(r,{icon:_!=="horizontal"?we:null,props:Object(de.a)(Object(de.a)({},d),{},{isOpen:Ie,isSubMenu:!0})},t.createElement("i",{className:"".concat(Re,"-arrow")}))),jn=t.useRef(_);if(_!=="inline"&&(jn.current=je.length>1?"vertical":_),!te){var rn=jn.current;Ze=t.createElement(Dr,{mode:rn,prefixCls:Re,visible:!B&&Ie&&_!=="inline",popupClassName:z,popupOffset:re,popup:t.createElement(w,{mode:rn},t.createElement(Zt,{id:Ge,ref:Ue},W)),disabled:Se,onVisibleChange:nn},Ze)}return t.createElement(w,{onItemClick:Rn,mode:_==="horizontal"?"vertical":_,itemIcon:Ae,expandIcon:we},t.createElement(f.Item,Object(M.a)({role:"none"},Q,{component:"li",style:R,className:Oe()(Re,"".concat(Re,"-").concat(_),E,(v={},Object(le.a)(v,"".concat(Re,"-open"),Ie),Object(le.a)(v,"".concat(Re,"-active"),Gn),Object(le.a)(v,"".concat(Re,"-selected"),Cn),Object(le.a)(v,"".concat(Re,"-disabled"),Se),v)),onMouseEnter:Ve,onMouseLeave:wn}),Ze,!te&&t.createElement(Tr,{id:Ge,open:Ie,keyPath:je},W)))};function _t(o){var d=o.eventKey,v=o.children,R=O(d),E=An(v,R),C=s();t.useEffect(function(){if(C)return C.registerPath(d,R),function(){C.unregisterPath(d,R)}},[R]);var P;return C?P=E:P=t.createElement(Fr,o,E),t.createElement(g.Provider,{value:R},P)}var Ir=e("x/xZ");function er(o){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ir.a)(o)){var v=o.nodeName.toLowerCase(),R=["input","select","textarea","button"].includes(v)||o.isContentEditable||v==="a"&&!!o.getAttribute("href"),E=o.getAttribute("tabindex"),C=Number(E),P=null;return E&&!Number.isNaN(C)?P=C:R&&P===null&&(P=0),R&&o.disabled&&(P=null),P!==null&&(P>=0||d&&P<0)}return!1}function nr(o){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,v=Object(on.a)(o.querySelectorAll("*")).filter(function(R){return er(R,d)});return er(o,d)&&v.unshift(o),v}var St=null;function pa(){St=document.activeElement}function ha(){St=null}function va(){if(St)try{St.focus()}catch(o){}}function ga(o,d){if(d.keyCode===9){var v=nr(o),R=v[d.shiftKey?0:v.length-1],E=R===document.activeElement||o===document.activeElement;if(E){var C=v[d.shiftKey?v.length-1:0];C.focus(),d.preventDefault()}}}var Bt=Te.a.LEFT,Kt=Te.a.RIGHT,Wt=Te.a.UP,Ct=Te.a.DOWN,Rt=Te.a.ENTER,tr=Te.a.ESC,rr=[Wt,Ct,Bt,Kt];function Nr(o,d,v,R){var E,C,P,A,B="prev",W="next",x="children",U="parent";if(o==="inline"&&R===Rt)return{inlineTrigger:!0};var z=(E={},Object(le.a)(E,Wt,B),Object(le.a)(E,Ct,W),E),re=(C={},Object(le.a)(C,Bt,v?W:B),Object(le.a)(C,Kt,v?B:W),Object(le.a)(C,Ct,x),Object(le.a)(C,Rt,x),C),G=(P={},Object(le.a)(P,Wt,B),Object(le.a)(P,Ct,W),Object(le.a)(P,Rt,x),Object(le.a)(P,tr,U),Object(le.a)(P,Bt,v?x:U),Object(le.a)(P,Kt,v?U:x),P),Y={inline:z,horizontal:re,vertical:G,inlineSub:z,horizontalSub:G,verticalSub:G},se=(A=Y["".concat(o).concat(d?"":"Sub")])===null||A===void 0?void 0:A[R];switch(se){case B:return{offset:-1,sibling:!0};case W:return{offset:1,sibling:!0};case U:return{offset:-1,sibling:!1};case x:return{offset:1,sibling:!1};default:return null}}function Ar(o){for(var d=o;d;){if(d.getAttribute("data-menu-list"))return d;d=d.parentElement}return null}function wr(o,d){for(var v=o||document.activeElement;v;){if(d.has(v))return v;v=v.parentElement}return null}function Mr(o,d){var v=nr(o,!0);return v.filter(function(R){return d.has(R)})}function ar(o,d,v){var R=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!o)return null;var E=Mr(o,d),C=E.length,P=E.findIndex(function(A){return v===A});return R<0?P===-1?P=C-1:P-=1:R>0&&(P+=1),P=(P+C)%C,E[P]}function Br(o,d,v,R,E,C,P,A,B,W){var x=t.useRef(),U=t.useRef();U.current=d;var z=function(){xe.a.cancel(x.current)};return t.useEffect(function(){return function(){z()}},[]),function(re){var G=re.which;if([].concat(rr,[Rt,tr]).includes(G)){var Y,se,J,q=function(){Y=new Set,se=new Map,J=new Map;var fe=C();return fe.forEach(function(me){var ye=document.querySelector("[data-menu-id='".concat(L(R,me),"']"));ye&&(Y.add(ye),J.set(ye,me),se.set(me,ye))}),Y};q();var ne=se.get(d),Q=wr(ne,Y),ae=J.get(Q),k=Nr(o,P(ae,!0).length===1,v,G);if(!k)return;rr.includes(G)&&re.preventDefault();var pe=function(fe){if(fe){var me=fe,ye=fe.querySelector("a");(ye==null?void 0:ye.getAttribute("href"))&&(me=ye);var Fe=J.get(fe);A(Fe),z(),x.current=Object(xe.a)(function(){U.current===Fe&&me.focus()})}};if(k.sibling||!Q){var _;!Q||o==="inline"?_=E.current:_=Ar(Q);var oe=ar(_,Y,Q,k.offset);pe(oe)}else if(k.inlineTrigger)B(ae);else if(k.offset>0)B(ae,!0),z(),x.current=Object(xe.a)(function(){q();var ie=Q.getAttribute("aria-controls"),fe=document.getElementById(ie),me=ar(fe,Y);pe(me)},5);else if(k.offset<0){var ue=P(ae,!0),te=ue[ue.length-2],H=se.get(te);B(te,!1),pe(H)}}W==null||W(re)}}var Kr=Math.random().toFixed(5).toString().slice(2),sr=0;function Wr(o){var d=Object(On.a)(o,{value:o}),v=Object(V.a)(d,2),R=v[0],E=v[1];return t.useEffect(function(){sr+=1;var C="".concat(Kr,"-").concat(sr);E("rc-menu-uuid-".concat(C))},[]),R}var ya=e("p8sG");function Lr(o){Promise.resolve().then(o)}var Lt="__RC_UTIL_PATH_SPLIT__",ir=function(d){return d.join(Lt)},xr=function(d){return d.split(Lt)},xt="rc-menu-more";function $r(){var o=t.useState({}),d=Object(V.a)(o,2),v=d[1],R=Object(t.useRef)(new Map),E=Object(t.useRef)(new Map),C=t.useState([]),P=Object(V.a)(C,2),A=P[0],B=P[1],W=Object(t.useRef)(0),x=Object(t.useCallback)(function(J,q){var ne=ir(q);E.current.set(ne,J),R.current.set(J,ne),W.current+=1;var Q=W.current;Lr(function(){Q===W.current&&v({})})},[]),U=Object(t.useCallback)(function(J,q){var ne=ir(q);E.current.delete(ne),R.current.delete(J)},[]),z=Object(t.useCallback)(function(J){B(J)},[]),re=Object(t.useCallback)(function(J,q){var ne=R.current.get(J)||"",Q=xr(ne);return q&&A.includes(Q[0])&&Q.unshift(xt),Q},[A]),G=Object(t.useCallback)(function(J,q){return J.some(function(ne){var Q=re(ne,!0);return Q.includes(q)})},[re]),Y=function(){var q=Object(on.a)(R.current.keys());return A.length&&q.push(xt),q},se=Object(t.useCallback)(function(J){var q="".concat(R.current.get(J)).concat(Lt),ne=new Set;return Object(on.a)(E.current.keys()).forEach(function(Q){Q.startsWith(q)&&ne.add(E.current.get(Q))}),ne},[]);return{registerPath:x,unregisterPath:U,refreshOverflowKeys:z,isSubPathKey:G,getKeyPath:re,getKeys:Y,getSubPathKeys:se}}var Et=[],Vr=function(d){var v,R,E=d.prefixCls,C=E===void 0?"rc-menu":E,P=d.style,A=d.className,B=d.tabIndex,W=B===void 0?0:B,x=d.children,U=d.direction,z=d.id,re=d.mode,G=re===void 0?"vertical":re,Y=d.inlineCollapsed,se=d.disabled,J=d.disabledOverflow,q=d.subMenuOpenDelay,ne=q===void 0?.1:q,Q=d.subMenuCloseDelay,ae=Q===void 0?.1:Q,k=d.forceSubMenuRender,pe=d.defaultOpenKeys,_=d.openKeys,oe=d.activeKey,ue=d.defaultActiveFirst,te=d.selectable,H=te===void 0?!0:te,ie=d.multiple,fe=ie===void 0?!1:ie,me=d.defaultSelectedKeys,ye=d.selectedKeys,Fe=d.onSelect,he=d.onDeselect,ge=d.inlineIndent,De=ge===void 0?24:ge,je=d.motion,Re=d.defaultMotions,Se=d.triggerSubMenuAction,Ne=Se===void 0?"hover":Se,Ue=d.builtinPlacements,Ae=d.itemIcon,we=d.expandIcon,Le=d.overflowedIndicator,Ie=Le===void 0?"...":Le,Cn=d.getPopupContainer,Xe=d.onClick,$e=d.onOpenChange,en=d.onKeyDown,vn=d.openAnimation,gn=d.openTransitionName,Ee=Object(Ce.a)(d,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Be=An(x,Et),He=t.useState(!1),Ve=Object(V.a)(He,2),wn=Ve[0],Gn=Ve[1],Mn=t.useRef(),Qe=Wr(z),Rn=U==="rtl",nn=t.useMemo(function(){return G==="inline"&&Y?["vertical",Y]:[G,!1]},[G,Y]),En=Object(V.a)(nn,2),Ge=En[0],Ze=En[1],jn=t.useState(0),rn=Object(V.a)(jn,2),Je=rn[0],Ke=rn[1],Yn=Je>=Be.length-1||Ge!=="horizontal"||J,Xn=Object(On.a)(pe,{value:_,postState:function(Z){return Z||Et}}),lt=Object(V.a)(Xn,2),yn=lt[0],dn=lt[1],Qn=t.useState(yn),bn=Object(V.a)(Qn,2),an=bn[0],Zn=bn[1],Dn=Ge==="inline",kn=t.useRef(!1);t.useEffect(function(){Dn&&Zn(yn)},[yn]),t.useEffect(function(){if(!kn.current){kn.current=!0;return}if(Dn)dn(an);else{var ee=[];dn(ee),$e==null||$e(ee)}},[Dn]);var tn=$r(),Pn=tn.registerPath,ce=tn.unregisterPath,be=tn.refreshOverflowKeys,Pe=tn.isSubPathKey,Ye=tn.getKeyPath,qn=tn.getKeys,Dt=tn.getSubPathKeys,zt=t.useMemo(function(){return{registerPath:Pn,unregisterPath:ce}},[Pn,ce]),Ut=t.useMemo(function(){return{isSubPathKey:Pe}},[Pe]);t.useEffect(function(){be(Yn?Et:Be.slice(Je+1).map(function(ee){return ee.key}))},[Je,Yn]);var Ht=Object(On.a)(oe||ue&&((v=Be[0])===null||v===void 0?void 0:v.key),{value:oe}),ut=Object(V.a)(Ht,2),Pt=ut[0],vt=ut[1],Tt=_e(function(ee){vt(ee)}),Gt=_e(function(){vt(void 0)}),Ft=Object(On.a)(me||[],{value:ye,postState:function(Z){return Array.isArray(Z)?Z:Z==null?Et:[Z]}}),It=Object(V.a)(Ft,2),dt=It[0],Tn=It[1],Nt=function(Z){if(!!H){var ve=Z.key,Me=dt.includes(ve),ke;Me?ke=dt.filter(function(et){return et!==ve}):fe?ke=[].concat(Object(on.a)(dt),[ve]):ke=[ve],Tn(ke);var Jn=Object(de.a)(Object(de.a)({},Z),{},{selectedKeys:ke});Me?he==null||he(Jn):Fe==null||Fe(Jn)}},At=_e(function(ee){Xe==null||Xe(m(ee)),Nt(ee)}),gt=_e(function(ee,Z){var ve=yn.filter(function(ke){return ke!==ee});if(Z)ve.push(ee);else if(Ge!=="inline"){var Me=Dt(ee);ve=ve.filter(function(ke){return!Me.has(ke)})}at()(yn,ve)||(dn(ve),$e==null||$e(ve))}),_n=_e(Cn),yt=function(Z,ve){var Me=ve!=null?ve:!yn.includes(Z);gt(Z,Me)},bt=Br(Ge,Pt,Rn,Qe,Mn,qn,Ye,vt,yt,en);t.useEffect(function(){Gn(!0)},[]);var wt=Ge!=="horizontal"||J?Be:Be.map(function(ee,Z){return t.createElement(w,{key:ee.key,overflowDisabled:Z>Je},ee)}),Mt=t.createElement(f,Object(M.a)({id:z,ref:Mn,prefixCls:"".concat(C,"-overflow"),component:"ul",itemComponent:hn,className:Oe()(C,"".concat(C,"-root"),"".concat(C,"-").concat(Ge),A,(R={},Object(le.a)(R,"".concat(C,"-inline-collapsed"),Ze),Object(le.a)(R,"".concat(C,"-rtl"),Rn),R)),dir:U,style:P,role:"menu",tabIndex:W,data:wt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var ve=Z.length,Me=ve?Be.slice(-ve):null;return t.createElement(_t,{eventKey:xt,title:Ie,disabled:Yn,internalPopupClose:ve===0},Me)},maxCount:Ge!=="horizontal"||J?f.INVALIDATE:f.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){Ke(Z)},onKeyDown:bt},Ee));return t.createElement($.Provider,{value:Qe},t.createElement(w,{prefixCls:C,mode:Ge,openKeys:yn,rtl:Rn,disabled:se,motion:wn?je:null,defaultMotions:wn?Re:null,activeKey:Pt,onActive:Tt,onInactive:Gt,selectedKeys:dt,inlineIndent:De,subMenuOpenDelay:ne,subMenuCloseDelay:ae,forceSubMenuRender:k,builtinPlacements:Ue,triggerSubMenuAction:Ne,getPopupContainer:_n,itemIcon:Ae,expandIcon:we,onItemClick:At,onOpenChange:gt},t.createElement(N.Provider,{value:Ut},Mt),t.createElement(c.Provider,{value:zt},Be)))},Jr=Vr,zr=function(d){var v=d.className,R=d.title,E=d.eventKey,C=d.children,P=Object(Ce.a)(d,["className","title","eventKey","children"]),A=t.useContext(u),B=A.prefixCls,W="".concat(B,"-item-group");return t.createElement("li",Object(M.a)({},P,{onClick:function(U){return U.stopPropagation()},className:Oe()(W,v)}),t.createElement("div",{className:"".concat(W,"-title"),title:typeof R=="string"?R:void 0},R),t.createElement("ul",{className:"".concat(W,"-list")},C))};function Ur(o){var d=o.children,v=Object(Ce.a)(o,["children"]),R=O(v.eventKey),E=An(d,R),C=s();return C?E:t.createElement(zr,v,E)}function Hr(o){var d=o.className,v=o.style,R=t.useContext(u),E=R.prefixCls,C=s();return C?null:t.createElement("li",{className:Oe()("".concat(E,"-item-divider"),d),style:v})}var ht=Jr;ht.Item=hn,ht.SubMenu=_t,ht.ItemGroup=Ur,ht.Divider=Hr;var Gr=ht,Yr=e("eDIo");function Xr(o,d){var v=o.prefixCls,R=o.editable,E=o.locale,C=o.style;return!R||R.showAdd===!1?null:t.createElement("button",{ref:d,type:"button",className:"".concat(v,"-nav-add"),style:C,"aria-label":(E==null?void 0:E.addAriaLabel)||"Add tab",onClick:function(A){R.onEdit("add",{event:A})}},R.addIcon||"+")}var or=t.forwardRef(Xr);function Qr(o,d){var v=o.prefixCls,R=o.id,E=o.tabs,C=o.locale,P=o.mobile,A=o.moreIcon,B=A===void 0?"More":A,W=o.moreTransitionName,x=o.style,U=o.className,z=o.editable,re=o.tabBarGutter,G=o.rtl,Y=o.onTabClick,se=Object(t.useState)(!1),J=Object(V.a)(se,2),q=J[0],ne=J[1],Q=Object(t.useState)(null),ae=Object(V.a)(Q,2),k=ae[0],pe=ae[1],_="".concat(R,"-more-popup"),oe="".concat(v,"-dropdown"),ue=k!==null?"".concat(_,"-").concat(k):null,te=C==null?void 0:C.dropdownAriaLabel,H=t.createElement(Gr,{onClick:function(ge){var De=ge.key,je=ge.domEvent;Y(De,je),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":ue,selectedKeys:[k],"aria-label":te!==void 0?te:"expanded dropdown"},E.map(function(he){return t.createElement(hn,{key:he.key,id:"".concat(_,"-").concat(he.key),role:"option","aria-controls":R&&"".concat(R,"-panel-").concat(he.key),disabled:he.disabled},he.tab)}));function ie(he){for(var ge=E.filter(function(Ne){return!Ne.disabled}),De=ge.findIndex(function(Ne){return Ne.key===k})||0,je=ge.length,Re=0;Re<je;Re+=1){De=(De+he+je)%je;var Se=ge[De];if(!Se.disabled){pe(Se.key);return}}}function fe(he){var ge=he.which;if(!q){[Te.a.DOWN,Te.a.SPACE,Te.a.ENTER].includes(ge)&&(ne(!0),he.preventDefault());return}switch(ge){case Te.a.UP:ie(-1),he.preventDefault();break;case Te.a.DOWN:ie(1),he.preventDefault();break;case Te.a.ESC:ne(!1);break;case Te.a.SPACE:case Te.a.ENTER:k!==null&&Y(k,he);break}}Object(t.useEffect)(function(){var he=document.getElementById(ue);he&&he.scrollIntoView&&he.scrollIntoView(!1)},[k]),Object(t.useEffect)(function(){q||pe(null)},[q]);var me=Object(le.a)({},G?"marginLeft":"marginRight",re);E.length||(me.visibility="hidden",me.order=1);var ye=Oe()(Object(le.a)({},"".concat(oe,"-rtl"),G)),Fe=P?null:t.createElement(Yr.default,{prefixCls:oe,overlay:H,trigger:["hover"],visible:q,transitionName:W,onVisibleChange:ne,overlayClassName:ye,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(v,"-nav-more"),style:me,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(R,"-more"),"aria-expanded":q,onKeyDown:fe},B));return t.createElement("div",{className:Oe()("".concat(v,"-nav-operations"),U),style:x,ref:d},Fe,t.createElement(or,{prefixCls:v,locale:C,editable:z}))}var Zr=t.forwardRef(Qr),$t=Object(t.createContext)(null),kr=.1,lr=.01,jt=20,ur=Math.pow(.995,jt);function qr(o,d){var v=Object(t.useState)(),R=Object(V.a)(v,2),E=R[0],C=R[1],P=Object(t.useState)(0),A=Object(V.a)(P,2),B=A[0],W=A[1],x=Object(t.useState)(0),U=Object(V.a)(x,2),z=U[0],re=U[1],G=Object(t.useState)(),Y=Object(V.a)(G,2),se=Y[0],J=Y[1],q=Object(t.useRef)();function ne(oe){var ue=oe.touches[0],te=ue.screenX,H=ue.screenY;C({x:te,y:H}),window.clearInterval(q.current)}function Q(oe){if(!!E){oe.preventDefault();var ue=oe.touches[0],te=ue.screenX,H=ue.screenY;C({x:te,y:H});var ie=te-E.x,fe=H-E.y;d(ie,fe);var me=Date.now();W(me),re(me-B),J({x:ie,y:fe})}}function ae(){if(!!E&&(C(null),J(null),se)){var oe=se.x/z,ue=se.y/z,te=Math.abs(oe),H=Math.abs(ue);if(Math.max(te,H)<kr)return;var ie=oe,fe=ue;q.current=window.setInterval(function(){if(Math.abs(ie)<lr&&Math.abs(fe)<lr){window.clearInterval(q.current);return}ie*=ur,fe*=ur,d(ie*jt,fe*jt)},jt)}}var k=Object(t.useRef)();function pe(oe){var ue=oe.deltaX,te=oe.deltaY,H=0,ie=Math.abs(ue),fe=Math.abs(te);ie===fe?H=k.current==="x"?ue:te:ie>fe?(H=ue,k.current="x"):(H=te,k.current="y"),d(-H,-H)&&oe.preventDefault()}var _=Object(t.useRef)(null);_.current={onTouchStart:ne,onTouchMove:Q,onTouchEnd:ae,onWheel:pe},t.useEffect(function(){function oe(ie){_.current.onTouchStart(ie)}function ue(ie){_.current.onTouchMove(ie)}function te(ie){_.current.onTouchEnd(ie)}function H(ie){_.current.onWheel(ie)}return document.addEventListener("touchmove",ue,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),o.current.addEventListener("touchstart",oe,{passive:!1}),o.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",ue),document.removeEventListener("touchend",te)}},[])}function _r(){var o=Object(t.useRef)(new Map);function d(R){return o.current.has(R)||o.current.set(R,t.createRef()),o.current.get(R)}function v(R){o.current.delete(R)}return[d,v]}function dr(o,d){var v=t.useRef(o),R=t.useState({}),E=Object(V.a)(R,2),C=E[1];function P(A){var B=typeof A=="function"?A(v.current):A;B!==v.current&&d(B,v.current),v.current=B,C({})}return[v.current,P]}var cr=function(d){var v=d.position,R=d.prefixCls,E=d.extra;if(!E)return null;var C,P=E;return v==="right"&&(C=P.right||!P.left&&P||null),v==="left"&&(C=P.left||null),C?t.createElement("div",{className:"".concat(R,"-extra-content")},C):null};function ea(o,d){var v,R=t.useContext($t),E=R.prefixCls,C=R.tabs,P=o.className,A=o.style,B=o.id,W=o.animated,x=o.activeKey,U=o.rtl,z=o.extra,re=o.editable,G=o.locale,Y=o.tabPosition,se=o.tabBarGutter,J=o.children,q=o.onTabClick,ne=o.onTabScroll,Q=Object(t.useRef)(),ae=Object(t.useRef)(),k=Object(t.useRef)(),pe=Object(t.useRef)(),_=_r(),oe=Object(V.a)(_,2),ue=oe[0],te=oe[1],H=Y==="top"||Y==="bottom",ie=dr(0,function(ee,Z){H&&ne&&ne({direction:ee>Z?"left":"right"})}),fe=Object(V.a)(ie,2),me=fe[0],ye=fe[1],Fe=dr(0,function(ee,Z){!H&&ne&&ne({direction:ee>Z?"top":"bottom"})}),he=Object(V.a)(Fe,2),ge=he[0],De=he[1],je=Object(t.useState)(0),Re=Object(V.a)(je,2),Se=Re[0],Ne=Re[1],Ue=Object(t.useState)(0),Ae=Object(V.a)(Ue,2),we=Ae[0],Le=Ae[1],Ie=Object(t.useState)(0),Cn=Object(V.a)(Ie,2),Xe=Cn[0],$e=Cn[1],en=Object(t.useState)(0),vn=Object(V.a)(en,2),gn=vn[0],Ee=vn[1],Be=Object(t.useState)(null),He=Object(V.a)(Be,2),Ve=He[0],wn=He[1],Gn=Object(t.useState)(null),Mn=Object(V.a)(Gn,2),Qe=Mn[0],Rn=Mn[1],nn=Object(t.useState)(0),En=Object(V.a)(nn,2),Ge=En[0],Ze=En[1],jn=Object(t.useState)(0),rn=Object(V.a)(jn,2),Je=rn[0],Ke=rn[1],Yn=Sn(new Map),Xn=Object(V.a)(Yn,2),lt=Xn[0],yn=Xn[1],dn=ct(C,lt,Se),Qn="".concat(E,"-nav-operations-hidden"),bn=0,an=0;H?U?(bn=0,an=Math.max(0,Se-Ve)):(bn=Math.min(0,Ve-Se),an=0):(bn=Math.min(0,Qe-we),an=0);function Zn(ee){return ee<bn?bn:ee>an?an:ee}var Dn=Object(t.useRef)(),kn=Object(t.useState)(),tn=Object(V.a)(kn,2),Pn=tn[0],ce=tn[1];function be(){ce(Date.now())}function Pe(){window.clearTimeout(Dn.current)}qr(Q,function(ee,Z){function ve(Me,ke){Me(function(Jn){var et=Zn(Jn+ke);return et})}if(H){if(Ve>=Se)return!1;ve(ye,ee)}else{if(Qe>=we)return!1;ve(De,Z)}return Pe(),be(),!0}),Object(t.useEffect)(function(){return Pe(),Pn&&(Dn.current=window.setTimeout(function(){ce(0)},100)),Pe},[Pn]);function Ye(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x,Z=dn.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(H){var ve=me;U?Z.right<me?ve=Z.right:Z.right+Z.width>me+Ve&&(ve=Z.right+Z.width-Ve):Z.left<-me?ve=-Z.left:Z.left+Z.width>-me+Ve&&(ve=-(Z.left+Z.width-Ve)),De(0),ye(Zn(ve))}else{var Me=ge;Z.top<-ge?Me=-Z.top:Z.top+Z.height>-ge+Qe&&(Me=-(Z.top+Z.height-Qe)),ye(0),De(Zn(Me))}}var qn=mt(dn,{width:Ve,height:Qe,left:me,top:ge},{width:Xe,height:gn},{width:Ge,height:Je},Object(de.a)(Object(de.a)({},o),{},{tabs:C})),Dt=Object(V.a)(qn,2),zt=Dt[0],Ut=Dt[1],Ht=C.map(function(ee){var Z=ee.key;return t.createElement(Kn,{id:B,prefixCls:E,key:Z,rtl:U,tab:ee,closable:ee.closable,editable:re,active:Z===x,tabPosition:Y,tabBarGutter:se,renderWrapper:J,removeAriaLabel:G==null?void 0:G.removeAriaLabel,ref:ue(Z),onClick:function(Me){q(Z,Me)},onRemove:function(){te(Z)},onFocus:function(){Ye(Z),be(),U||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),ut=Nn(function(){var ee,Z,ve,Me,ke,Jn,et,Yt,Xt,la=((ee=Q.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,ua=((Z=Q.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,vr=((ve=pe.current)===null||ve===void 0?void 0:ve.offsetWidth)||0,gr=((Me=pe.current)===null||Me===void 0?void 0:Me.offsetHeight)||0,da=((ke=k.current)===null||ke===void 0?void 0:ke.offsetWidth)||0,ca=((Jn=k.current)===null||Jn===void 0?void 0:Jn.offsetHeight)||0;wn(la),Rn(ua),Ze(vr),Ke(gr);var yr=(((et=ae.current)===null||et===void 0?void 0:et.offsetWidth)||0)-vr,br=(((Yt=ae.current)===null||Yt===void 0?void 0:Yt.offsetHeight)||0)-gr;Ne(yr),Le(br);var Or=(Xt=k.current)===null||Xt===void 0?void 0:Xt.className.includes(Qn);$e(yr-(Or?0:da)),Ee(br-(Or?0:ca)),yn(function(){var Sr=new Map;return C.forEach(function(ma){var Cr=ma.key,Ot=ue(Cr).current;Ot&&Sr.set(Cr,{width:Ot.offsetWidth,height:Ot.offsetHeight,left:Ot.offsetLeft,top:Ot.offsetTop})}),Sr})}),Pt=C.slice(0,zt),vt=C.slice(Ut+1),Tt=[].concat(Object(on.a)(Pt),Object(on.a)(vt)),Gt=Object(t.useState)(),Ft=Object(V.a)(Gt,2),It=Ft[0],dt=Ft[1],Tn=dn.get(x),Nt=Object(t.useRef)();function At(){xe.a.cancel(Nt.current)}Object(t.useEffect)(function(){var ee={};return Tn&&(H?(U?ee.right=Tn.right:ee.left=Tn.left,ee.width=Tn.width):(ee.top=Tn.top,ee.height=Tn.height)),At(),Nt.current=Object(xe.a)(function(){dt(ee)}),At},[Tn,H,U]),Object(t.useEffect)(function(){Ye()},[x,Tn,dn,H]),Object(t.useEffect)(function(){ut()},[U,se,x,C.map(function(ee){return ee.key}).join("_")]);var gt=!!Tt.length,_n="".concat(E,"-nav-wrap"),yt,bt,wt,Mt;return H?U?(bt=me>0,yt=me+Ve<Se):(yt=me<0,bt=-me+Ve<Se):(wt=ge<0,Mt=-ge+Qe<we),t.createElement("div",{ref:d,role:"tablist",className:Oe()("".concat(E,"-nav"),P),style:A,onKeyDown:function(){be()}},t.createElement(cr,{position:"left",extra:z,prefixCls:E}),t.createElement(Bn.default,{onResize:ut},t.createElement("div",{className:Oe()(_n,(v={},Object(le.a)(v,"".concat(_n,"-ping-left"),yt),Object(le.a)(v,"".concat(_n,"-ping-right"),bt),Object(le.a)(v,"".concat(_n,"-ping-top"),wt),Object(le.a)(v,"".concat(_n,"-ping-bottom"),Mt),v)),ref:Q},t.createElement(Bn.default,{onResize:ut},t.createElement("div",{ref:ae,className:"".concat(E,"-nav-list"),style:{transform:"translate(".concat(me,"px, ").concat(ge,"px)"),transition:Pn?"none":void 0}},Ht,t.createElement(or,{ref:pe,prefixCls:E,locale:G,editable:re,style:{visibility:gt?"hidden":null}}),t.createElement("div",{className:Oe()("".concat(E,"-ink-bar"),Object(le.a)({},"".concat(E,"-ink-bar-animated"),W.inkBar)),style:It}))))),t.createElement(Zr,Object(M.a)({},o,{ref:k,prefixCls:E,tabs:Tt,className:!gt&&Qn})),t.createElement(cr,{position:"right",extra:z,prefixCls:E}))}var mr=t.forwardRef(ea);function na(o){var d=o.id,v=o.activeKey,R=o.animated,E=o.tabPosition,C=o.rtl,P=o.destroyInactiveTabPane,A=t.useContext($t),B=A.prefixCls,W=A.tabs,x=R.tabPane,U=W.findIndex(function(z){return z.key===v});return t.createElement("div",{className:Oe()("".concat(B,"-content-holder"))},t.createElement("div",{className:Oe()("".concat(B,"-content"),"".concat(B,"-content-").concat(E),Object(le.a)({},"".concat(B,"-content-animated"),x)),style:U&&x?Object(le.a)({},C?"marginRight":"marginLeft","-".concat(U,"00%")):null},W.map(function(z){return t.cloneElement(z.node,{key:z.key,prefixCls:B,tabKey:z.key,id:d,animated:x,active:z.key===v,destroyInactiveTabPane:P})})))}function fr(o){var d=o.prefixCls,v=o.forceRender,R=o.className,E=o.style,C=o.id,P=o.active,A=o.animated,B=o.destroyInactiveTabPane,W=o.tabKey,x=o.children,U=t.useState(v),z=Object(V.a)(U,2),re=z[0],G=z[1];t.useEffect(function(){P?G(!0):B&&G(!1)},[P,B]);var Y={};return P||(A?(Y.visibility="hidden",Y.height=0,Y.overflowY="hidden"):Y.display="none"),t.createElement("div",{id:C&&"".concat(C,"-panel-").concat(W),role:"tabpanel",tabIndex:P?0:-1,"aria-labelledby":C&&"".concat(C,"-tab-").concat(W),"aria-hidden":!P,style:Object(de.a)(Object(de.a)({},Y),E),className:Oe()("".concat(d,"-tabpane"),P&&"".concat(d,"-tabpane-active"),R)},(P||re||v)&&x)}var pr=0;function ta(o){return Object(mn.a)(o).map(function(d){if(t.isValidElement(d)){var v=d.key!==void 0?String(d.key):void 0;return Object(de.a)(Object(de.a)({key:v},d.props),{},{node:d})}return null}).filter(function(d){return d})}function ra(o,d){var v,R=o.id,E=o.prefixCls,C=E===void 0?"rc-tabs":E,P=o.className,A=o.children,B=o.direction,W=o.activeKey,x=o.defaultActiveKey,U=o.editable,z=o.animated,re=z===void 0?{inkBar:!0,tabPane:!1}:z,G=o.tabPosition,Y=G===void 0?"top":G,se=o.tabBarGutter,J=o.tabBarStyle,q=o.tabBarExtraContent,ne=o.locale,Q=o.moreIcon,ae=o.moreTransitionName,k=o.destroyInactiveTabPane,pe=o.renderTabBar,_=o.onChange,oe=o.onTabClick,ue=o.onTabScroll,te=Object(Ce.a)(o,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(A),ie=B==="rtl",fe;re===!1?fe={inkBar:!1,tabPane:!1}:re===!0?fe={inkBar:!0,tabPane:!0}:fe=Object(de.a)({inkBar:!0,tabPane:!1},Object(sn.a)(re)==="object"?re:{});var me=Object(t.useState)(!1),ye=Object(V.a)(me,2),Fe=ye[0],he=ye[1];Object(t.useEffect)(function(){he(Object(In.a)())},[]);var ge=Object(On.a)(function(){var Ee;return(Ee=H[0])===null||Ee===void 0?void 0:Ee.key},{value:W,defaultValue:x}),De=Object(V.a)(ge,2),je=De[0],Re=De[1],Se=Object(t.useState)(function(){return H.findIndex(function(Ee){return Ee.key===je})}),Ne=Object(V.a)(Se,2),Ue=Ne[0],Ae=Ne[1];Object(t.useEffect)(function(){var Ee=H.findIndex(function(He){return He.key===je});if(Ee===-1){var Be;Ee=Math.max(0,Math.min(Ue,H.length-1)),Re((Be=H[Ee])===null||Be===void 0?void 0:Be.key)}Ae(Ee)},[H.map(function(Ee){return Ee.key}).join("_"),je,Ue]);var we=Object(On.a)(null,{value:R}),Le=Object(V.a)(we,2),Ie=Le[0],Cn=Le[1],Xe=Y;Fe&&!["left","right"].includes(Y)&&(Xe="top"),Object(t.useEffect)(function(){R||(Cn("rc-tabs-".concat(pr)),pr+=1)},[]);function $e(Ee,Be){oe==null||oe(Ee,Be),Re(Ee),_==null||_(Ee)}var en={id:Ie,activeKey:je,animated:fe,tabPosition:Xe,rtl:ie,mobile:Fe},vn,gn=Object(de.a)(Object(de.a)({},en),{},{editable:U,locale:ne,moreIcon:Q,moreTransitionName:ae,tabBarGutter:se,onTabClick:$e,onTabScroll:ue,extra:q,style:J,panes:A});return pe?vn=pe(gn,mr):vn=t.createElement(mr,gn),t.createElement($t.Provider,{value:{tabs:H,prefixCls:C}},t.createElement("div",Object(M.a)({ref:d,id:R,className:Oe()(C,"".concat(C,"-").concat(Xe),(v={},Object(le.a)(v,"".concat(C,"-mobile"),Fe),Object(le.a)(v,"".concat(C,"-editable"),U),Object(le.a)(v,"".concat(C,"-rtl"),ie),v),P)},te),vn,t.createElement(na,Object(M.a)({destroyInactiveTabPane:k},en,{animated:fe}))))}var hr=t.forwardRef(ra);hr.TabPane=fr;var aa=hr,sa=aa,Vt=e("MZF8"),un=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function Jt(o,d){var v,R=(v=o.match(/\.(\w+)$/))===null||v===void 0?void 0:v[1];return R||(R=d.tsx?"tsx":"jsx"),R}var oa=o=>{var d,v,R,E=Object(t.useRef)(),C=Object(t.useContext)(un.context),P=C.locale,A=Object(un.useLocaleProps)(P,o),B=Object(un.useDemoUrl)(A.identifier),W=A.demoUrl||B,x=(Vt.a===null||Vt.a===void 0?void 0:Vt.a.location.hash)==="#".concat(A.identifier),U=Object.keys(A.sources).length===1,z=Object(un.useCodeSandbox)((d=A.hideActions)!==null&&d!==void 0&&d.includes("CSB")?null:A),re=Object(un.useRiddle)((v=A.hideActions)!==null&&v!==void 0&&v.includes("RIDDLE")?null:A),G=Object(un.useMotions)(A.motions||[],E.current),Y=Object(K.default)(G,2),se=Y[0],J=Y[1],q=Object(un.useCopy)(),ne=Object(K.default)(q,2),Q=ne[0],ae=ne[1],k=Object(t.useState)("_"),pe=Object(K.default)(k,2),_=pe[0],oe=pe[1],ue=Object(t.useState)(Jt(_,A.sources[_])),te=Object(K.default)(ue,2),H=te[0],ie=te[1],fe=Object(t.useState)(Boolean(A.defaultShowCode)),me=Object(K.default)(fe,2),ye=me[0],Fe=me[1],he=Object(t.useState)(Math.random()),ge=Object(K.default)(he,2),De=ge[0],je=ge[1],Re=A.sources[_][H]||A.sources[_].content,Se=Object(un.useTSPlaygroundUrl)(P,Re),Ne=Object(t.useRef)(),Ue=Object(un.usePrefersColor)(),Ae=Object(K.default)(Ue,1),we=Ae[0];Object(t.useEffect)(()=>{je(Math.random())},[we]);function Le(Ie){oe(Ie),ie(Jt(Ie,A.sources[Ie]))}return y.a.createElement("div",{style:A.style,className:[A.className,"__dumi-default-previewer",x?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:A.identifier,"data-debug":A.debug||void 0,"data-iframe":A.iframe||void 0},A.iframe&&y.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),y.a.createElement("div",{ref:E,className:"__dumi-default-previewer-demo",style:{transform:A.transform?"translate(0, 0)":void 0,padding:A.compact||A.iframe&&A.compact!==!1?"0":void 0,background:A.background}},A.iframe?y.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(A.iframe).replace(/(\d)$/,"$1px")},key:De,src:W,ref:Ne}):A.children),y.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":A.title},A.title&&y.a.createElement(un.AnchorLink,{to:"#".concat(A.identifier)},A.title),A.description&&y.a.createElement("div",{dangerouslySetInnerHTML:{__html:A.description}})),y.a.createElement("div",{className:"__dumi-default-previewer-actions"},z&&y.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:z}),re&&y.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:re}),A.motions&&y.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:J,onClick:()=>se()}),A.iframe&&y.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>je(Math.random())}),!((R=A.hideActions)!==null&&R!==void 0&&R.includes("EXTERNAL"))&&y.a.createElement(un.Link,{target:"_blank",to:W},y.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),y.a.createElement("span",null),y.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ae,onClick:()=>Q(Re)}),H==="tsx"&&ye&&y.a.createElement(un.Link,{target:"_blank",to:Se},y.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),y.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(ye?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Fe(!ye)})),ye&&y.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!U&&y.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:Le},Object.keys(A.sources).map(Ie=>y.a.createElement(fr,{tab:Ie==="_"?"index.".concat(Jt(Ie,A.sources[Ie])):Ie,key:Ie}))),y.a.createElement("div",{className:"__dumi-default-previewer-source"},y.a.createElement(ia.a,{code:Re,lang:H,showCopy:!1}))))},Oa=cn.default=oa},"80pN":function(Fn,cn,e){"use strict";(function(K){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var t=e("MgzW"),y=e("q1tI"),M=e("i8i4"),le=e("QCnb");function V(r){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+r,n=1;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+r+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sn=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;sn.hasOwnProperty("ReactCurrentDispatcher")||(sn.ReactCurrentDispatcher={current:null}),sn.hasOwnProperty("ReactCurrentBatchConfig")||(sn.ReactCurrentBatchConfig={suspense:null});function Ce(r){var a=r,n=r;if(r.alternate)for(;a.return;)a=a.return;else{r=a;do a=r,(a.effectTag&1026)!=0&&(n=a.return),r=a.return;while(r)}return a.tag===3?n:null}function de(r){if(Ce(r)!==r)throw Error(V(188))}function ze(r){var a=r.alternate;if(!a){if(a=Ce(r),a===null)throw Error(V(188));return a!==r?null:r}for(var n=r,c=a;;){var s=n.return;if(s===null)break;var g=s.alternate;if(g===null){if(c=s.return,c!==null){n=c;continue}break}if(s.child===g.child){for(g=s.child;g;){if(g===n)return de(s),r;if(g===c)return de(s),a;g=g.sibling}throw Error(V(188))}if(n.return!==c.return)n=s,c=g;else{for(var O=!1,N=s.child;N;){if(N===n){O=!0,n=s,c=g;break}if(N===c){O=!0,c=s,n=g;break}N=N.sibling}if(!O){for(N=g.child;N;){if(N===n){O=!0,n=g,c=s;break}if(N===c){O=!0,c=g,n=s;break}N=N.sibling}if(!O)throw Error(V(189))}}if(n.alternate!==c)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?r:a}function Oe(){return!0}function mn(){return!1}function In(r,a,n,c){this.dispatchConfig=r,this._targetInst=a,this.nativeEvent=n,r=this.constructor.Interface;for(var s in r)r.hasOwnProperty(s)&&((a=r[s])?this[s]=a(n):s==="target"?this.target=c:this[s]=n[s]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Oe:mn,this.isPropagationStopped=mn,this}t(In.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Oe)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Oe)},persist:function(){this.isPersistent=Oe},isPersistent:mn,destructor:function(){var r=this.constructor.Interface,a;for(a in r)this[a]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=mn,this._dispatchInstances=this._dispatchListeners=null}}),In.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},In.extend=function(r){function a(){}function n(){return c.apply(this,arguments)}var c=this;a.prototype=c.prototype;var s=new a;return t(s,n.prototype),n.prototype=s,n.prototype.constructor=n,n.Interface=t({},c.Interface,r),n.extend=c.extend,xe(n),n},xe(In);function On(r,a,n,c){if(this.eventPool.length){var s=this.eventPool.pop();return this.call(s,r,a,n,c),s}return new this(r,a,n,c)}function on(r){if(!(r instanceof this))throw Error(V(279));r.destructor(),10>this.eventPool.length&&this.eventPool.push(r)}function xe(r){r.eventPool=[],r.getPooled=On,r.release=on}var Bn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Nn(r,a){var n={};return n[r.toLowerCase()]=a.toLowerCase(),n["Webkit"+r]="webkit"+a,n["Moz"+r]="moz"+a,n}var Sn={animationend:Nn("Animation","AnimationEnd"),animationiteration:Nn("Animation","AnimationIteration"),animationstart:Nn("Animation","AnimationStart"),transitionend:Nn("Transition","TransitionEnd")},Te={},nt={};Bn&&(nt=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Kn(r){if(Te[r])return Te[r];if(!Sn[r])return r;var a=Sn[r],n;for(n in a)if(a.hasOwnProperty(n)&&n in nt)return Te[r]=a[n];return r}var tt=Kn("animationend"),ct=Kn("animationiteration"),rt=Kn("animationstart"),mt=Kn("transitionend"),Wn=null;function at(r){if(Wn===null)try{var a=("require"+Math.random()).slice(0,7);Wn=(K&&K[a])("timers").setImmediate}catch(n){Wn=function(c){var s=new MessageChannel;s.port1.onmessage=c,s.port2.postMessage(void 0)}}return Wn(r)}var zn=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,ft=zn[11],Ln=zn[12],xn=M.unstable_batchedUpdates,Un=sn.IsSomeRendererActing,st=typeof le.unstable_flushAllWithoutAsserting=="function",$n=le.unstable_flushAllWithoutAsserting||function(){for(var r=!1;ft();)r=!0;return r};function it(r){try{$n(),at(function(){$n()?it(r):r()})}catch(a){r(a)}}var ln=0,Hn=!1,ot=M.findDOMNode,fn=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,T=fn[0],D=fn[4],F=fn[5],f=fn[6],i=fn[7],h=fn[8],b=fn[9],S=fn[10];function l(){}function p(r,a){if(!r)return[];if(r=ze(r),!r)return[];for(var n=r,c=[];;){if(n.tag===5||n.tag===6||n.tag===1||n.tag===0){var s=n.stateNode;a(s)&&c.push(s)}if(n.child)n.child.return=n,n=n.child;else{if(n===r)return c;for(;!n.sibling;){if(!n.return||n.return===r)return c;n=n.return}n.sibling.return=n.return,n=n.sibling}}}function u(r,a){if(r&&!r._reactInternalFiber){var n=""+r;throw r=Array.isArray(r)?"an array":r&&r.nodeType===1&&r.tagName?"a DOM node":n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n,Error(V(286,a,r))}}var I={renderIntoDocument:function(r){var a=document.createElement("div");return M.render(r,a)},isElement:function(r){return y.isValidElement(r)},isElementOfType:function(r,a){return y.isValidElement(r)&&r.type===a},isDOMComponent:function(r){return!(!r||r.nodeType!==1||!r.tagName)},isDOMComponentElement:function(r){return!!(r&&y.isValidElement(r)&&r.tagName)},isCompositeComponent:function(r){return I.isDOMComponent(r)?!1:r!=null&&typeof r.render=="function"&&typeof r.setState=="function"},isCompositeComponentWithType:function(r,a){return I.isCompositeComponent(r)?r._reactInternalFiber.type===a:!1},findAllInRenderedTree:function(r,a){return u(r,"findAllInRenderedTree"),r?p(r._reactInternalFiber,a):[]},scryRenderedDOMComponentsWithClass:function(r,a){return u(r,"scryRenderedDOMComponentsWithClass"),I.findAllInRenderedTree(r,function(n){if(I.isDOMComponent(n)){var c=n.className;typeof c!="string"&&(c=n.getAttribute("class")||"");var s=c.split(/\s+/);if(!Array.isArray(a)){if(a===void 0)throw Error(V(11));a=a.split(/\s+/)}return a.every(function(g){return s.indexOf(g)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(r,a){if(u(r,"findRenderedDOMComponentWithClass"),r=I.scryRenderedDOMComponentsWithClass(r,a),r.length!==1)throw Error("Did not find exactly one match (found: "+r.length+") for class:"+a);return r[0]},scryRenderedDOMComponentsWithTag:function(r,a){return u(r,"scryRenderedDOMComponentsWithTag"),I.findAllInRenderedTree(r,function(n){return I.isDOMComponent(n)&&n.tagName.toUpperCase()===a.toUpperCase()})},findRenderedDOMComponentWithTag:function(r,a){if(u(r,"findRenderedDOMComponentWithTag"),r=I.scryRenderedDOMComponentsWithTag(r,a),r.length!==1)throw Error("Did not find exactly one match (found: "+r.length+") for tag:"+a);return r[0]},scryRenderedComponentsWithType:function(r,a){return u(r,"scryRenderedComponentsWithType"),I.findAllInRenderedTree(r,function(n){return I.isCompositeComponentWithType(n,a)})},findRenderedComponentWithType:function(r,a){if(u(r,"findRenderedComponentWithType"),r=I.scryRenderedComponentsWithType(r,a),r.length!==1)throw Error("Did not find exactly one match (found: "+r.length+") for componentType:"+a);return r[0]},mockComponent:function(r,a){return a=a||r.mockTagName||"div",r.prototype.render.mockImplementation(function(){return y.createElement(a,null,this.props.children)}),this},nativeTouchData:function(r,a){return{touches:[{pageX:r,pageY:a}]}},Simulate:null,SimulateNative:{},act:function(r){function a(){ln--,Un.current=n,Ln.current=c}Hn===!1&&(Hn=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),ln++;var n=Un.current,c=Ln.current;Un.current=!0,Ln.current=!0;try{var s=xn(r)}catch(g){throw a(),g}if(s!==null&&typeof s=="object"&&typeof s.then=="function")return{then:function(g,O){s.then(function(){1<ln||st===!0&&n===!0?(a(),g()):it(function(N){a(),N?O(N):g()})},function(N){a(),O(N)})}};try{ln!==1||st!==!1&&n!==!1||$n(),a()}catch(g){throw a(),g}return{then:function(g){g()}}}};function w(r){return function(a,n){if(y.isValidElement(a))throw Error(V(228));if(I.isCompositeComponent(a))throw Error(V(229));var c=D[r],s=new l;s.target=a,s.type=r.toLowerCase();var g=T(a),O=new In(c,g,s,a);O.persist(),t(O,n),c.phasedRegistrationNames?F(O):f(O),M.unstable_batchedUpdates(function(){i(a),S(O)}),h()}}I.Simulate={};for(var j in D)I.Simulate[j]=w(j);function m(r,a){return function(n,c){var s=new l(r);t(s,c),I.isDOMComponent(n)?(n=ot(n),s.target=n,b(a,1,document,s)):n.tagName&&(s.target=n,b(a,1,document,s))}}[["abort","abort"],[tt,"animationEnd"],[ct,"animationIteration"],[rt,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[mt,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(r){var a=r[1];I.SimulateNative[a]=m(a,r[0])}),K.exports=I.default||I}).call(this,e("hOG+")(Fn))},JjdP:function(Fn,cn,e){"use strict";e.r(cn);var K=e("9og8"),t=e("WmNS"),y=e.n(t),M=e("LtsZ"),le=`import React, { useRef } from 'react';
import { CardList, Search, TableContainer, useTable } from 'card-render';
import {
  PlusOutlined,
  EllipsisOutlined,
  SettingOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import request from 'umi-request';

// \u53EF\u4EE5\u4F7F\u7528schema\u7F16\u8F91\u5668\u914D\u7F6E https://form-render.github.io/schema-generator/
const schema = {
  type: 'object',
  properties: {
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u72B6\u6001',
    dataIndex: 'state',
    enum: {
      open: '\u672A\u89E3\u51B3',
      closed: '\u5DF2\u89E3\u51B3',
    },
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: row => (
      <a
        href="https://x-render.gitee.io/form-render/"
        target="_blank"
        rel="noopener noreferrer"
      >
        \u67E5\u770B
      </a>
    ),
  },
];

const searchApi = params => {
  params.pageSize = 2;
  return request
    .get(
      'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/getCardList',
      { params }
    )
    .then(res => {
      console.log('response:', res);
      if (res && res.data) {
        return {
          rows: res.data,
          total: res.data.length,
          pageSize: res.data.pageSize || 2,
        }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
      }
    })
    .catch(e => console.log('Oops, error', e));
};

const searchArr = [
  {
    name: '\u6211\u7684\u6570\u636E',
    api: searchApi,
  },
  {
    name: '\u5168\u90E8\u6570\u636E',
    api: searchApi,
  },
];

// const cardRenderOptions = {
//   type: 'default',
//   header: {
//     title: 'title',
//     extra: (card, index) => (
//       <a
//         onClick={e => {
//           e.stopPropagation();
//         }}
//       >
//         action
//       </a>
//     ),
//   },
//   content: {
//     description: 'description',
//     list: ['creator', 'createTime'],
//     remark: 'remark',
//   },
// };

const cardRenderOptions = {
  type: 'image',
  cover: 'imgUrl',
  // cover: {
  //   dataIndex: 'imgUrl',
  //   width: 100,
  //   height: 100
  // },
  header: {
    title: (card, index) => card.title,
  },
  content: {
    description: (card, index) => card.description,
    // list: ['creator', 'createTime'],
    list: [
      {
        title: '\u521B\u5EFA\u4EBA',
        render: card => card.creator,
      },
      {
        title: '\u521B\u5EFA\u65F6\u95F4',
        dataIndex: 'createTime',
      },
    ],
    remark: 'remark',
  },
  footer: (card, idx) => [
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
  ],
};

const Demo = () => {
  const tableRef = useRef();
  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <TableContainer ref={tableRef} searchApi={searchArr}>
        <Search schema={schema} />
        <CardList
          // onCardClick={(item, idx) => alert(JSON.stringify(item))}
          cardRender={cardRenderOptions}
          paginationOptions={{ size: 'small' }}
          toolbarRender={() => [
            <Button
              key="primary"
              type="primary"
              onClick={() => alert('table-render\uFF01')}
            >
              <PlusOutlined />
              \u521B\u5EFA
            </Button>,
          ]}
          toolbarAction
        />
      </TableContainer>
    </div>
  );
};

export default Demo;`,V=`import { get, set, cloneDeep } from 'lodash-es';

// window.log1 = value => {
//   console.log('%ccommon:', 'color: #00A7F7; font-weight: 500;', value);
// };

// window.log2 = value => {
//   console.log('%cwarning:', 'color: #f50; font-weight: 500;', value);
// };

// window.log3 = value => {
//   console.log('%csuccess:', 'color: #87d068; font-weight: 500;', value);
// };

// window.log4 = value => {
//   console.log('%cspecial:', 'color: #722ed1; font-weight: 500;', value);
// };

export function isUrl(string) {
  const protocolRE = /^(?:\\w+:)?\\/\\/(\\S+)$/;
  // const domainRE = /^[^\\s\\.]+\\.\\S{2,}$/;
  if (typeof string !== 'string') return false;
  return protocolRE.test(string);
}

export function isCheckBoxType(schema, readOnly) {
  if (readOnly) return false;
  if (schema.widget === 'checkbox') return true;
  if (schema && schema.type === 'boolean') {
    if (schema.enum) return false;
    if (schema.widget === undefined) return true;
    return false;
  }
}

// a[].b.c => a.b.c
function removeBrackets(string) {
  if (typeof string === 'string') {
    return string.replace(/\\[\\]/g, '');
  } else {
    return string;
  }
}

export function getParentPath(path) {
  if (typeof path === 'string') {
    const pathArr = path.split('.');
    if (pathArr.length === 1) {
      return '#';
    }
    pathArr.pop();
    return pathArr.join('.');
  }
  return '#';
}

export function getValueByPath(formData, path) {
  if (path === '#' || !path) {
    return formData || {};
  } else if (typeof path === 'string') {
    return get(formData, path);
  } else {
    console.error('path has to be a string');
  }
}

//  path: 'a.b[1].c[0]' => { id: 'a.b[].c[]'  dataIndex: [1,0] }
export function destructDataPath(path) {
  let id;
  let dataIndex;
  if (path === '#') {
    return { id: '#', dataIndex: [] };
  }
  if (typeof path !== 'string') {
    throw Error(\`path \${path} is not a string!!! Something wrong here\`);
  }
  const pattern = /\\[[0-9]+\\]/g;
  const matchList = path.match(pattern);
  if (!matchList) {
    id = path;
  } else {
    id = path.replace(pattern, '[]');
    // \u8FD9\u4E2A\u662Fmatch\u4E0B\u6765\u7684\u7ED3\u679C\uFF0C\u53EF\u5B89\u5168\u5904\u7406
    dataIndex = matchList.map(item =>
      Number(item.substring(1, item.length - 1))
    );
  }
  return { id, dataIndex };
}

// id: 'a.b[].c[]'  dataIndex: [1,0] =>  'a.b[1].c[0]'
export function getDataPath(id, dataIndex) {
  if (id === '#') {
    return id;
  }
  if (typeof id !== 'string') {
    throw Error(\`id \${id} is not a string!!! Something wrong here\`);
  }
  let _id = id;
  if (Array.isArray(dataIndex)) {
    // const matches = id.match(/\\[\\]/g) || [];
    // const count = matches.length;
    dataIndex.forEach(item => {
      _id = _id.replace(/\\[\\]/, \`[\${item}]\`);
    });
  }
  return removeBrackets(_id);
}

export function isObjType(schema) {
  return (
    schema && schema.type === 'object' && schema.properties && !schema.widget
  );
}

// TODO: to support case that item is not an object
export function isListType(schema) {
  return (
    schema &&
    schema.type === 'array' &&
    isObjType(schema.items) &&
    schema.enum === undefined
  );
}

// TODO: more tests to make sure weird & wrong schema won't crush
export function flattenSchema(_schema = {}, name = '#', parent, result = {}) {
  const schema = clone(_schema);
  let _name = name;
  if (!schema.$id) {
    schema.$id = _name; // path as $id, for easy access to path in schema
  }
  const children = [];
  if (isObjType(schema)) {
    Object.entries(schema.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    schema.properties = {};
  }
  if (isListType(schema)) {
    Object.entries(schema.items.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    schema.items.properties = {};
  }

  if (schema.type) {
    result[_name] = { parent, schema, children };
  }
  return result;
}

export function getSchemaFromFlatten(flatten, path = '#') {
  let schema = {};
  const item = clone(flatten[path]);
  if (item) {
    schema = item.schema;
    // schema.$id && delete schema.$id;
    if (item.children.length > 0) {
      item.children.forEach(child => {
        if (!flatten[child]) return;
        const key = getKeyFromPath(child);
        if (isObjType(schema)) {
          schema.properties[key] = getSchemaFromFlatten(flatten, child);
        }
        if (isListType(schema)) {
          schema.items.properties[key] = getSchemaFromFlatten(flatten, child);
        }
      });
    }
  }
  return schema;
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

export const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

export const clone = cloneDeep;

// '3' => true, 3 => true, undefined => false
export function isLooselyNumber(num) {
  if (typeof num === 'number') return true;
  if (typeof num === 'string') {
    return !Number.isNaN(Number(num));
  }
  return false;
}

export function isCssLength(str) {
  if (typeof str !== 'string') return false;
  return str.match(/^([0-9])*(%|px|rem|em)$/i);
}

export function isDeepEqual(param1, param2) {
  if (param1 === undefined && param2 === undefined) return true;
  else if (param1 === undefined || param2 === undefined) return false;
  if (param1 === null && param2 === null) return true;
  else if (param1 === null || param2 === null) return false;
  else if (param1.constructor !== param2.constructor) return false;

  if (param1.constructor === Array) {
    if (param1.length !== param2.length) return false;
    for (let i = 0; i < param1.length; i++) {
      if (param1[i].constructor === Array || param1[i].constructor === Object) {
        if (!isDeepEqual(param1[i], param2[i])) return false;
      } else if (param1[i] !== param2[i]) return false;
    }
  } else if (param1.constructor === Object) {
    if (Object.keys(param1).length !== Object.keys(param2).length) return false;
    for (let i = 0; i < Object.keys(param1).length; i++) {
      const key = Object.keys(param1)[i];
      if (
        param1[key] &&
        typeof param1[key] !== 'number' &&
        (param1[key].constructor === Array ||
          param1[key].constructor === Object)
      ) {
        if (!isDeepEqual(param1[key], param2[key])) return false;
      } else if (param1[key] !== param2[key]) return false;
    }
  } else if (param1.constructor === String || param1.constructor === Number) {
    return param1 === param2;
  }
  return true;
}

export function getFormat(format) {
  let dateFormat;
  switch (format) {
    case 'date':
      dateFormat = 'YYYY-MM-DD';
      break;
    case 'time':
      dateFormat = 'HH:mm:ss';
      break;
    case 'dateTime':
      dateFormat = 'YYYY-MM-DD HH:mm:ss';
      break;
    case 'week':
      dateFormat = 'YYYY-w';
      break;
    case 'year':
      dateFormat = 'YYYY';
      break;
    case 'quarter':
      dateFormat = 'YYYY-Q';
      break;
    case 'month':
      dateFormat = 'YYYY-MM';
      break;
    default:
      // dateTime
      if (typeof format === 'string') {
        dateFormat = format;
      } else {
        dateFormat = 'YYYY-MM-DD';
      }
  }
  return dateFormat;
}

export function hasRepeat(list) {
  return list.find(
    (x, i, self) =>
      i !== self.findIndex(y => JSON.stringify(x) === JSON.stringify(y))
  );
}

export function combineSchema(propsSchema = {}, uiSchema = {}) {
  const propList = getChildren(propsSchema);
  const newList = propList.map(p => {
    const { name } = p;
    const { type, enum: options, properties, items } = p.schema;
    const isObj = type === 'object' && properties;
    const isArr = type === 'array' && items && !options; // enum + array \u4EE3\u8868\u7684\u591A\u9009\u6846\uFF0C\u6CA1\u6709sub
    const ui = name && uiSchema[p.name];
    if (!ui) {
      return p;
    }
    // \u5982\u679C\u662Flist\uFF0C\u9012\u5F52\u5408\u5E76items
    if (isArr) {
      const newItems = combineSchema(items, ui.items || {});
      return { ...p, schema: { ...p.schema, ...ui, items: newItems } };
    }
    // object\u9012\u5F52\u5408\u5E76\u6574\u4E2Aschema
    if (isObj) {
      const newSchema = combineSchema(p.schema, ui);
      return { ...p, schema: newSchema };
    }
    return { ...p, schema: { ...p.schema, ...ui } };
  });

  const newObj = {};
  newList.forEach(s => {
    newObj[s.name] = s.schema;
  });

  const topLevelUi = {};
  Object.keys(uiSchema).forEach(key => {
    if (typeof key === 'string' && key.substring(0, 3) === 'ui:') {
      topLevelUi[key] = uiSchema[key];
    }
  });
  if (isEmpty(newObj)) {
    return { ...propsSchema, ...topLevelUi };
  }
  return { ...propsSchema, ...topLevelUi, properties: newObj };
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function getChildren(schema) {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

export const parseString = string =>
  Function('"use strict";return (' + string + ')')();

export const evaluateString = (string, formData, rootValue) =>
  Function(\`"use strict";
    const rootValue = \${JSON.stringify(rootValue)};
    const formData = \${JSON.stringify(formData)};
    return (\${string})\`)();

export function isExpression(func) {
  // if (typeof func === 'function') {
  //   const funcString = func.toString();
  //   return (
  //     funcString.indexOf('formData') > -1 ||
  //     funcString.indexOf('rootValue') > -1
  //   );
  // }
  if (typeof func !== 'string') return false;
  const pattern = /^{{(.+)}}$/;
  const reg1 = /^{{function\\(.+}}$/;
  // const reg2 = /^{{(.+=>.+)}}$/;
  if (typeof func === 'string' && func.match(pattern) && !func.match(reg1)) {
    return true;
  }
  return false;
}

export const parseRootValueInSchema = (schema, rootValue) => {
  const result = clone(schema);
  if (isObject(schema)) {
    Object.keys(schema).forEach(key => {
      const item = schema[key];
      if (isObject(item)) {
        result[key] = parseRootValueInSchema(item, rootValue);
      } else if (typeof item === 'string') {
        result[key] = parseSingleRootValue(item, rootValue);
      }
    });
  } else {
    console.error('schema is not an object:', schema);
  }
  return result;
};

// handle rootValue inside List
export const parseSingleRootValue = (expression, rootValue = {}) => {
  if (typeof expression === 'string' && expression.indexOf('rootValue') > 0) {
    const funcBody = expression.substring(2, expression.length - 2);
    const str = \`
    return \${funcBody.replace(/rootValue/g, JSON.stringify(rootValue))}\`;

    try {
      return Function(str)();
    } catch (error) {
      console.error(error, 'expression:', expression, 'rootValue:', rootValue);
      return null; // \u5982\u679C\u8BA1\u7B97\u6709\u9519\u8BEF\uFF0Creturn null \u6700\u5408\u9002
    }
  } else {
    return expression;
  }
};

export function parseSingleExpression(func, formData = {}, dataPath) {
  const parentPath = getParentPath(dataPath);
  const parent = getValueByPath(formData, parentPath) || {};
  if (typeof func === 'string') {
    const funcBody = func.substring(2, func.length - 2);
    const str = \`
    return \${funcBody
      .replace(/formData/g, JSON.stringify(formData))
      .replace(/rootValue/g, JSON.stringify(parent))}\`;

    try {
      return Function(str)();
    } catch (error) {
      console.log(error, func, dataPath);
      return null; // \u5982\u679C\u8BA1\u7B97\u6709\u9519\u8BEF\uFF0Creturn null \u6700\u5408\u9002
    }
    // const funcBody = func.substring(2, func.length - 2);
    // //TODO: \u8FD9\u6837\u6709\u95EE\u9898\uFF0C\u4F8B\u5982 a.b.indexOf(), \u4F1A\u628A a.b.indexOf \u5F53\u505A\u503C
    // const match1 = /formData.([a-zA-Z0-9.$_\\[\\]]+)/g;
    // const match2 = /rootValue.([a-zA-Z0-9.$_\\[\\]]+)/g;
    // const str = \`
    // return (\${funcBody
    //   .replaceAll(match1, (v, m1) =>
    //     JSON.stringify(getValueByPath(formData, m1))
    //   )
    //   .replaceAll(match2, (v, m1) =>
    //     JSON.stringify(getValueByPath(parent, m1))
    //   )})\`;
    // try {
    //   return Function(str)();
    // } catch (error) {
    //   console.log(error);
    //   return func;
    // }
  } else return func;
}

export const schemaContainsExpression = schema => {
  if (isObject(schema)) {
    return Object.keys(schema).some(key => {
      const value = schema[key];
      if (typeof value === 'string') {
        return isExpression(value);
      } else if (isObject(value)) {
        return schemaContainsExpression(value);
      } else {
        return false;
      }
    });
  }
  return false;
};

export const parseAllExpression = (_schema, formData, dataPath) => {
  const schema = clone(_schema);
  Object.keys(schema).forEach(key => {
    const value = schema[key];
    if (isObject(value)) {
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseSingleExpression(value, formData, dataPath);
    } else if (
      typeof key === 'string' &&
      key.toLowerCase().indexOf('props') > -1
    ) {
      // \u6709\u53EF\u80FD\u53EB xxxProps
      const propsObj = schema[key];
      if (isObject(propsObj)) {
        Object.keys(propsObj).forEach(k => {
          schema[key][k] = parseSingleExpression(
            propsObj[k],
            formData,
            dataPath
          );
        });
      }
    }
  });
  return schema;
};

export function isFunctionSchema(schema) {
  return Object.keys(schema).some(key => {
    if (typeof schema[key] === 'function') {
      return true;
    } else if (typeof schema[key] === 'string') {
      return isExpression(schema[key]);
    } else if (typeof schema[key] === 'object') {
      return isFunctionSchema(schema[key]);
    } else {
      return false;
    }
  });
}

export const getParentProps = (propName, id, flatten) => {
  try {
    const item = flatten[id];
    if (item.schema[propName] !== undefined) return item.schema[propName];
    if (item && item.parent) {
      const parentSchema = flatten[item.parent].schema;
      if (parentSchema[propName] !== undefined) {
        return parentSchema[propName];
      } else {
        return getParentProps(propName, item.parent, flatten);
      }
    }
  } catch (error) {
    return undefined;
  }
};

export const getSaveNumber = () => {
  const searchStr = localStorage.getItem('SAVES');
  if (searchStr) {
    try {
      const saves = JSON.parse(searchStr);
      const length = saves.length;
      if (length) return length + 1;
    } catch (error) {
      return 1;
    }
  } else {
    return 1;
  }
};

export function looseJsonParse(obj) {
  return Function('"use strict";return (' + obj + ')')();
}

export const isFunctionString = fString => {
  return typeof fString === 'string' && fString.indexOf('function(') === 0;
};

export function parseFunction(fString) {
  if (isFunctionString(fString)) {
    return Function('return ' + fString)();
  }
  return fString;
}

// \u83B7\u5F97propsSchema\u7684children
// function getChildren2(schema) {
//   if (!schema) return [];
//   const {
//     // object
//     properties,
//     // array
//     items,
//     type,
//   } = schema;
//   if (!properties && !items) {
//     return [];
//   }
//   let schemaSubs = {};
//   if (type === 'object') {
//     schemaSubs = properties;
//   }
//   if (type === 'array') {
//     schemaSubs = items.properties;
//   }
//   return Object.keys(schemaSubs).map(name => ({
//     schema: schemaSubs[name],
//     name,
//   }));
// }

export const oldSchemaToNew = schema => {
  if (schema && schema.propsSchema) {
    const { propsSchema, ...rest } = schema;
    return { schema: propsSchema, ...rest };
  }
  return schema;
};

export const newSchemaToOld = setting => {
  if (setting && setting.schema) {
    const { schema, ...rest } = setting;
    return { propsSchema: schema, ...rest };
  }
  return setting;
};

// from FR

export const getEnum = schema => {
  if (!schema) return undefined;
  const itemEnum = schema && schema.items && schema.items.enum;
  const schemaEnum = schema && schema.enum;
  return itemEnum ? itemEnum : schemaEnum;
};

export const getArray = (arr, defaultValue = []) => {
  if (Array.isArray(arr)) return arr;
  return defaultValue;
};

export const isEmail = value => {
  const regex = '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$';
  if (value && new RegExp(regex).test(value)) {
    return true;
  }
  return false;
};

export function defaultGetValueFromEvent(valuePropName, ...args) {
  const event = args[0];
  if (event && event.target && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}

export const getKeyFromPath = (path = '#') => {
  try {
    const arr = path.split('.');
    const last = arr.slice(-1)[0];
    const result = last.replace('[]', '');
    return result;
  } catch (error) {
    console.error(error, 'getKeyFromPath');
    return '';
  }
};

// \u66F4\u591A\u7684\u503C\u83B7\u53D6
export const getDisplayValue = (value, schema) => {
  if (typeof value === 'boolean') {
    return value ? 'yes' : 'no';
  }
  if (isObjType(schema) || isListType(schema)) {
    return '-';
  }
  if (Array.isArray(schema.enum) && Array.isArray(schema.enumNames)) {
    try {
      return schema.enumNames[schema.enum.indexOf(value)];
    } catch (error) {
      return value;
    }
  }
  return value;
};

// \u53BB\u6389\u6570\u7EC4\u91CC\u7684\u7A7A\u5143\u7D20 {a: [null, {x:1}]} => {a: [{x:1}]}
export const removeEmptyItemFromList = formData => {
  let result = {};
  if (isObject(formData)) {
    Object.keys(formData).forEach(key => {
      result[key] = removeEmptyItemFromList(formData[key]);
    });
  } else if (Array.isArray(formData)) {
    result = formData.filter(item => {
      if ([false, 0, ''].indexOf(item) > -1) return true;
      if (item && JSON.stringify(item) !== '{}') {
        return true;
      }
      return false;
    });
  } else {
    result = formData;
  }
  return result;
};

export const getDescriptorFromSchema = ({ schema, isRequired = true }) => {
  let result = {};
  let singleResult = {};
  if (schema.hidden === true) return { validator: () => true };
  if (isObjType(schema)) {
    result.type = 'object';
    if (isRequired && schema.required === true) {
      result.required = true;
    }
    result.fields = {};
    Object.keys(schema.properties).forEach(key => {
      const item = schema.properties[key];
      // \u517C\u5BB9\u65E7\u7684\uFF01
      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }
      result.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired,
      });
    });
  } else if (isListType(schema)) {
    result.type = 'array';
    if (isRequired && schema.required === true) {
      result.required = true;
    }
    if (typeof schema.min === 'number') {
      result.min = schema.min;
    }
    if (typeof schema.max === 'number') {
      result.max = schema.max;
    }
    result.defaultField = { type: 'object', fields: {} }; // \u76EE\u524D\u5C31\u9ED8\u8BA4\u53EA\u6709object\u7C7B\u578B\u7684 TODO:
    Object.keys(schema.items.properties).forEach(key => {
      const item = schema.items.properties[key];
      // \u517C\u5BB9\u65E7\u7684\uFF01
      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }
      result.defaultField.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired,
      });
    });
  } else {
    // \u5355\u4E2A\u7684\u903B\u8F91
    const processRule = item => {
      if (schema.type) return { ...item, type: schema.type };
      if (item.pattern && typeof item.pattern === 'string') {
        return { ...item, pattern: new RegExp(item.pattern) };
      }
      return item;
    };
    const { required, ...rest } = schema;

    ['type', 'pattern', 'min', 'max', 'len'].forEach(key => {
      if (Object.keys(rest).indexOf(key) > -1) {
        singleResult[key] = rest[key];
      }
    });

    switch (schema.type) {
      case 'range':
        // \u6682\u65F6\u5148\u53BB\u6389\uFF0C\u5E94\u8BE5\u6CA1\u4E8B\u4E86\uFF0C\u5728range\u7EC4\u4EF6\u7684\u6E90\u5934\u4E0A\u628A\u5947\u602A\u7684case\u5E72\u6389\u4E86
        // const rangeValidator = {
        //   validator: (rule, value) => {
        //     const rangeRequired = schema.required === true && isRequired;
        //     // range\u7EC4\u4EF6\u70B9\u51FBclear\uFF0C\u4F1A\u53D8\u6210 ['','']
        //     // range\u7EC4\u4EF6\u5BF9\u5E94\u7684\u503Cbind\u7684\u65F6\u5019\uFF0C\u4F1A\u53D8\u6210 [undefined,undefined]
        //     const notValid1 = value[0] === '' && value[1] === '';
        //     const notValid2 = value[0] === undefined && value[1] === undefined;
        //     if (rangeRequired) {
        //       if (!value) return false;
        //       if (Array.isArray(value)) {
        //         if (notValid1 || notValid2) {
        //           return false;
        //         }
        //         return true;
        //       }
        //       return true;
        //     } else {
        //       return true;
        //     }
        //   },
        //   type: 'array',
        //   message: '\${title}\u5FC5\u586B',
        // };
        // singleResult = rangeValidator;
        singleResult.type = 'array';
        break;
      case 'html':
        singleResult.type = 'string';
        break;
      default:
        break;
    }
    switch (schema.format) {
      case 'email':
      case 'url':
        singleResult.type = schema.format;
        break;
      default:
        break;
    }

    let requiredRule;
    if (isRequired && schema.required === true) {
      requiredRule = { required: true, type: singleResult.type || 'string' };
    }

    if (schema.rules) {
      if (Array.isArray(schema.rules)) {
        const _rules = [];
        schema.rules.forEach(item => {
          if (item.required === true) {
            if (isRequired) {
              requiredRule = item;
            }
          } else {
            _rules.push(processRule(item));
          }
        });
        result = [singleResult, ..._rules];
      } else if (isObject(schema.rules)) {
        // TODO: \u89C4\u8303\u4E0A\u4E0D\u5141\u8BB8rules\u662Fobject\uFF0C\u7701\u4E00\u70B9\u4E8B\u513F
        result = [singleResult, processRule(schema.rules)];
      } else {
        result = singleResult;
      }
    } else {
      result = singleResult;
    }

    if (requiredRule) {
      if (Array.isArray(result)) {
        result.push(requiredRule);
      } else if (isObject(result)) {
        result = [result, requiredRule];
      }
    }

    if (schema.format === 'image') {
      const imgValidator = {
        validator: (rule, value) => {
          const pattern = /([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;
          if (!value) return true; // \u8FD9\u91CC\u5224\u65AD\u5BBD\u4E00\u70B9\uFF0Cundefined\u3001null\u3001'' \u90FD\u5F53\u505A\u6CA1\u6709\u586B\u5199
          return !!pattern.exec(value) || isUrl(value);
        },
        message: '\${title}\u7684\u7C7B\u578B\u4E0D\u662Fimage',
      };
      if (Array.isArray(result)) {
        result.push(imgValidator);
      } else if (isObject(result)) {
        result = [result, imgValidator];
      }
    }
  }
  return result;
};

// async-validator \u4EA7\u51FA\u7684path\u6CA1\u6CD5\u7528\uFF0C\u8F6C\u4E00\u4E0B
// "list.1.userName" => "list[1].userName"
export const formatPathFromValidator = err => {
  const errArr = err.split('.');
  return errArr
    .map(item => {
      if (isNaN(Number(item))) {
        return item;
      } else {
        return \`[\${item}]\`;
      }
    })
    .reduce((a, b) => {
      if (b[0] === '[' || a === '') {
        return a + b;
      } else {
        return a + '.' + b;
      }
    }, '');
};

// schema = {
//   type: 'object',
//   properties: {
//     x: {
//       type: 'object',
//       properties: {
//         y: {
//           type: 'string',
//           required: true,
//         },
//       },
//     },
//   },
// };
// path = 'x.y'
// return {required: true, message?: 'xxxx'}
export const isPathRequired = (path, schema) => {
  let pathArr = path.split('.');
  while (pathArr.length > 0) {
    let [_path, ...rest] = pathArr;
    _path = _path.split('[')[0];
    let childSchema;
    if (isObjType(schema)) {
      childSchema = schema.properties[_path];
    } else if (isListType(schema)) {
      childSchema = schema.items.properties[_path];
    }
    pathArr = rest;
    if (childSchema) {
      return isPathRequired(rest.join('.'), childSchema);
    }

    // \u5355\u4E2A\u7684\u903B\u8F91
    let result = { required: false };
    if (schema.required === true) {
      result.required = true;
    }
    if (schema.rules) {
      const requiredItem = schema.rules.find(item => item.required);
      if (requiredItem) {
        result = requiredItem;
      }
    }
    return result;
  }
};

// _path \u53EA\u4F9B\u5185\u90E8\u9012\u5F52\u4F7F\u7528
export const generateDataSkeleton = (schema, formData) => {
  let _formData = clone(formData);
  let result = _formData;
  if (isObjType(schema)) {
    if (_formData === undefined || typeof _formData !== 'object') {
      _formData = {};
      result = {};
    }
    Object.keys(schema.properties).forEach(key => {
      const childSchema = schema.properties[key];
      const childData = _formData[key];
      const childResult = generateDataSkeleton(childSchema, childData);
      result[key] = childResult;
    });
  } else if (_formData !== undefined) {
    // result = _formData;
  } else {
    if (schema.default !== undefined) {
      result = clone(schema.default);
    } else if (schema.type === 'boolean' && !schema.widget) {
      // result = false;
      result = undefined;
    } else {
      result = undefined;
    }
  }
  return result;
};

export const translateMessage = (msg, schema) => {
  if (typeof msg !== 'string') {
    return '';
  }
  if (!schema) return msg;
  msg = msg.replace('\${title}', schema.title);
  msg = msg.replace('\${type}', schema.format || schema.type);
  // \u517C\u5BB9\u4EE3\u7801
  if (typeof schema.min === 'number') {
    msg = msg.replace('\${min}', schema.min);
  }
  if (typeof schema.max === 'number') {
    msg = msg.replace('\${max}', schema.max);
  }
  if (schema.rules) {
    const minRule = schema.rules.find(r => r.min !== undefined);
    if (minRule) {
      msg = msg.replace('\${min}', minRule.min);
    }
    const maxRule = schema.rules.find(r => r.max !== undefined);
    if (maxRule) {
      msg = msg.replace('\${max}', maxRule.max);
    }
    const lenRule = schema.rules.find(r => r.len !== undefined);
    if (lenRule) {
      msg = msg.replace('\${len}', lenRule.len);
    }
    const patternRule = schema.rules.find(r => r.pattern !== undefined);
    if (patternRule) {
      msg = msg.replace('\${pattern}', patternRule.pattern);
    }
  }
  return msg;
};

// "objectName": {
//   "title": "\u5BF9\u8C61",
//   "description": "\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",
//   "type": "object",
//   "properties": {

//   }
// }

// "listName": {
//   "title": "\u5BF9\u8C61\u6570\u7EC4",
//   "description": "\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",
//   "type": "array",
//   "items": {
//     "type": "object",
//     "properties": {

//     }
//   }
// }

const changeSchema = (_schema, singleChange) => {
  let schema = clone(_schema);
  schema = singleChange(schema);
  if (isObjType(schema)) {
    let requiredKeys = [];
    if (Array.isArray(schema.required)) {
      requiredKeys = schema.required;
      delete schema.required;
    }
    Object.keys(schema.properties).forEach(key => {
      const item = schema.properties[key];
      if (requiredKeys.indexOf(key) > -1) {
        item.required = true;
      }
      schema.properties[key] = changeSchema(item, singleChange);
    });
  } else if (isListType(schema)) {
    Object.keys(schema.items.properties).forEach(key => {
      const item = schema.items.properties[key];
      schema.items.properties[key] = changeSchema(item, singleChange);
    });
  }
  return schema;
};

export const updateSchemaToNewVersion = schema => {
  return changeSchema(schema, updateSingleSchema);
};

const updateSingleSchema = schema => {
  try {
    schema.rules = schema.rules || [];
    schema.props = schema.props || {};
    if (schema['ui:options']) {
      schema.props = schema['ui:options'];
      delete schema['ui:options'];
    }
    if (schema.pattern) {
      const validItem = { pattern: schema.pattern };
      if (schema.message && schema.message.pattern) {
        validItem.message = schema.message.pattern;
      }
      schema.rules.push(validItem);
      delete schema.pattern;
      delete schema.message;
    }
    // min / max
    if (schema.minLength) {
      schema.min = schema.minLength;
      delete schema.minLength;
    }
    if (schema.maxLength) {
      schema.max = schema.maxLength;
      delete schema.maxLength;
    }
    if (schema.minItems) {
      schema.min = schema.minItems;
      delete schema.minItems;
    }
    if (schema.maxItems) {
      schema.max = schema.maxItems;
      delete schema.maxItems;
    }
    if (schema.step) {
      schema.props.step = schema.step;
      delete schema.step;
    }
    // ui:xxx
    if (schema['ui:className']) {
      schema.className = schema['ui:className'];
      delete schema['ui:className'];
    }
    if (schema['ui:hidden']) {
      schema.hidden = schema['ui:hidden'];
      delete schema['ui:hidden'];
    }
    if (schema['ui:readonly']) {
      schema.readOnly = schema['ui:readonly']; // \u6539\u6210\u9A7C\u5CF0\u4E86
      delete schema['ui:readonly'];
    }
    if (schema['ui:disabled']) {
      schema.disabled = schema['ui:disabled'];
      delete schema['ui:disabled'];
    }
    if (schema['ui:width']) {
      schema.width = schema['ui:width'];
      delete schema['ui:width'];
    }
    if (schema['ui:displayType']) {
      schema.displayType = schema['ui:displayType'];
      delete schema['ui:displayType'];
    }
    if (schema['ui:column']) {
      schema.column = schema['ui:column'];
      delete schema['ui:column'];
    }
    if (schema['ui:widget']) {
      schema.widget = schema['ui:widget'];
      delete schema['ui:widget'];
    }
    if (schema['ui:labelWidth']) {
      schema.labelWidth = schema['ui:labelWidth'];
      delete schema['ui:labelWidth'];
    }
    if (schema.rules && schema.rules.length === 0) {
      delete schema.rules;
    }
    if (
      typeof schema.props === 'function' ||
      (isObject(schema.props) && Object.keys(schema.props).length > 0)
    ) {
    } else {
      delete schema.props;
    }
    return schema;
  } catch (error) {
    console.error('schema\u8F6C\u6362\u5931\u8D25\uFF01', error);
    return schema;
  }
};

// \u68C0\u9A8C\u4E00\u4E2Astring\u662F function\uFF08\u4F20\u7EDF\u6D3B\u7BAD\u5934\u51FD\u6570\uFF09
export const parseFunctionString = string => {
  if (typeof string !== 'string') return false;
  const reg1 = /^{{(function.+)}}$/;
  const reg2 = /^{{(.+=>.+)}}$/;
  if (string.match(reg1)) {
    return string.match(reg1)[1];
  }
  if (string.match(reg2)) {
    return string.match(reg2)[1];
  }
  return false;
};

export const completeSchemaWithTheme = (schema = {}, theme = {}) => {
  let result = {};
  if (isObject(schema)) {
    if (schema.theme && theme[schema.theme]) {
      result = { ...schema, ...theme[schema.theme] };
    }
    Object.keys(schema).forEach(key => {
      result[key] = completeSchemaWithTheme(schema[key], theme);
    });
  } else {
    result = schema;
  }
  return result;
};

export const cleanEmpty = obj => {
  if (Array.isArray(obj)) {
    return obj
      .map(v => (v && isObject(v) ? cleanEmpty(v) : v))
      .filter(v => !(v == undefined));
  } else if (isObject(obj)) {
    return Object.entries(obj)
      .map(([k, v]) => [k, v && isObject(v) ? cleanEmpty(v) : v])
      .reduce((a, [k, v]) => (v == undefined ? a : ((a[k] = v), a)), {});
  } else {
    return obj;
  }
};

export const removeHiddenFromResult = (data, flatten) => {
  Object.keys(flatten).forEach(key => {
    const hidden = flatten[key].schema && flatten[key].schema.hidden === true; // Remark: \u6709\u8868\u8FBE\u5F0F\u7684\u60C5\u51B5, \u6682\u65F6\u4E0D\u53BB\u6389\u4E86\uFF08\u6709\u4E1A\u52A1\u53CD\u800C\u662F\u5E0C\u671B\u7559\u4E0B\u7684\uFF09\uFF0C\u5C31\u53BB\u6389 hidden = true \u7684
    if (get(data, key) !== undefined && hidden) {
      set(data, key, undefined);
    }
  });
  return data;
};

export function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return hours + ':' + minutes + ':' + seconds;
}

export function yymmdd(timeStamp) {
  const date_ob = new Date(Number(timeStamp));
  const adjustZero = num => ('0' + num).slice(-2);
  let day = adjustZero(date_ob.getDate());
  let month = adjustZero(date_ob.getMonth());
  let year = date_ob.getFullYear();
  let hours = adjustZero(date_ob.getHours());
  let minutes = adjustZero(date_ob.getMinutes());
  let seconds = adjustZero(date_ob.getSeconds());
  return \`\${year}-\${month}-\${day} \${hours}:\${minutes}:\${seconds}\`;
}`,sn=`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './advanced/utils';
import RichTextEditor from '../../widgets/RichText/src';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  const test = {
    // displayType: 'row',
    type: 'object',
    properties: {
      myList: {
        title: '\u5BF9\u8C61\u6570\u7EC4',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            select1: {
              title: '\u9690\u85CF',
              type: 'boolean',
            },
            input1: {
              title: '\u8F93\u5165\u6846',
              type: 'string',
              dependencies: ['myList[].select1'],
              hidden: '{{rootValue.select1 === true}}',
            },
            input2: {
              title: '\u8F93\u5165\u6846',
              type: 'string',
              width: '50%',
            },
            input3: {
              title: '\u8F93\u5165\u6846',
              type: 'string',
              width: '50%',
            },
            StayTime: {
              title: '\u505C\u7559\u65F6\u95F4\u6BB5',
              type: 'range',
              format: 'date',
              // required: true,
            },
          },
        },
      },
    },
  };

  useEffect(() => {
    setSchema(test);
  }, []);

  const onMount = () => {
    form.setValues({ a: 1 });
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  return (
    <div>
      <FormRender
        className="new-form"
        id="personal-finance"
        form={form}
        schema={schema}
        widgets={{
          richText: RichTextEditor,
        }}
        debug
        onMount={onMount}
        onFinish={onFinish}
      />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`,Ce=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,de=`import React, { useState, useEffect } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

const { createEditorState } = BraftEditor;

const RichTextEditor = ({ name, onChange, value, ...rest }) => {
  const [editor, set] = useState(null);

  useEffect(() => {
    if (value !== undefined) {
      set(createEditorState(value));
    }
  }, [value]);

  const handleChange = editor => {
    set(editor);
    // const htmlContent = editor.toHTML();
    // onChange(name, htmlContent);
  };

  const onSave = () => {
    // Pressing ctrl + s when the editor has focus will execute this method
    // Before the editor content is submitted to the server, you can directly call editorState.toHTML () to get the HTML content
    const htmlContent = editor.toHTML();
    if (name) {
      onChange(name, htmlContent);
    } else {
      onChange(htmlContent);
    }
  };

  return (
    <div style={{ border: '1px solid rgba(0,0,0,0.2)' }}>
      <BraftEditor
        contentStyle={{ minHeight: 100, height: 'auto', maxHeight: 500 }}
        value={editor}
        onChange={handleChange}
        onSave={onSave}
        onBlur={onSave}
      />
    </div>
  );
};

export default RichTextEditor;`,ze=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Oe=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,mn=`export const basic = {
  labelWidth: 130,
  type: 'object',
  properties: {
    url: {
      title: 'url\u8F93\u5165\u6846',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },
    email: {
      title: 'email\u8F93\u5165\u6846',
      type: 'string',
      format: 'email',
    },
    string: {
      title: '\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32',
      description: 'a-z',
      type: 'string',
      hidden: false,
      disabled: true,
    },
  },
};

export const expression = {
  type: 'object',
  properties: {
    input: {
      title: '{{formData.config.title || "\u8F93\u5165\u6846"}}',
      type: 'string',
      placeholder: '{{formData.config.placeholder}}',
      props: {
        size: '{{formData.config.size}}',
      },
      hidden: '{{formData.config.hidden === true}}',
      readOnly: '{{formData.config.readOnly === true}}',
      disabled: '{{formData.config.disabled === true}}',
    },
    rate: {
      title: 'rate',
      type: 'number',
      widget: 'rate',
    },
    config: {
      title: '\u914D\u7F6E',
      type: 'object',
      properties: {
        title: {
          title: 'title',
          type: 'string',
        },
        placeholder: {
          title: 'placeholder',
          type: 'string',
        },
        size: {
          title: 'input\u5927\u5C0F',
          type: 'string',
          enum: ['large', 'middle', 'small'],
          enumNames: ['\u5927', '\u4E2D', '\u5C0F'],
          widget: 'radio',
        },
        hidden: {
          title: '\u662F\u5426\u9690\u85CF',
          type: 'boolean',
        },
        readOnly: {
          title: '\u662F\u5426\u53EA\u8BFB',
          type: 'boolean',
        },
        disabled: {
          title: '\u662F\u5426\u7F6E\u7070',
          type: 'boolean',
        },
      },
    },
  },
  required: [],
};

export const titleTrick = {
  displayType: 'row',
  type: 'object',
  properties: {
    inputName1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      width: '50%',
    },
    desc: {
      type: 'html',
      bind: false,
      default: "\u8865\u5145\u8BF4\u660E <span style='color:red'>hello<span>",
      width: '50%',
    },
  },
};`,In=`import React from 'react';
import { Button, message, Input } from 'antd';
import FormRender, { useForm } from 'form-render';

const { TextArea } = Input;

const Demo = () => {
  const form = useForm();

  const schema = {
    type: 'object',
    properties: {
      useSelect: {
        title: '\u8F93\u5165\u6846\u9AD8\u5EA6',
        type: 'number',
      },
      select2: {
        title: '\u8F93\u5165\u6846',
        type: 'string',
        dependencies: ['useSelect'],
        widget: 'MyTextEditor',
      },
    },
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.success('\u63D0\u4EA4\u6210\u529F\uFF1A' + JSON.stringify(data));
    }
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        widgets={{ MyTextEditor }}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

const MyTextEditor = props => {
  const { addons } = props;
  console.log(addons.dependValues);
  let rows;
  if (addons && addons.dependValues) {
    rows = addons.dependValues[0] || 2;
  }
  return <TextArea rows={rows} />;
};

export default Demo;`,On=`import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import FormRender, { useForm } from 'form-render';

const Test = ({ value, onChange, addons }) => {
  const { dependValues, hideSelf, dataPath } = addons;

  useEffect(() => {
    if (dependValues[0] !== 'a') {
      hideSelf();
    } else {
      hideSelf(false);
    }
  }, [JSON.stringify(dependValues)]);

  return <Input addonAfter="\u4E07" value={value} onChange={onChange} />;
};

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const test = {
    type: 'object',
    properties: {
      select1: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b'],
        enumNames: ['\u5C55\u793A', '\u9690\u85CF'],
      },
      input1: {
        title: '\u8F93\u5165\u6846',
        type: 'string',
        widget: 'Test',
        dependencies: ['select1'],
      },
    },
  };

  useEffect(() => {
    setSchema(test);
  }, []);

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        widgets={{ Test }}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,on=`import React, { Component } from 'react';
// import GithubCorner from 'react-github-corner';
import Demo from './main';
import { Radio, Select, Switch, Slider } from 'antd';
import './index.css';

const Option = Select.Option;
class Root extends Component {
  state = {
    schemaName: 'simplest',
    column: 1,
    displayType: 'column',
    readOnly: false,
    labelWidth: 110,
  };

  onColumnNumberChange = value => {
    this.setState({ column: value });
  };

  onDisplayChange = value => {
    this.setState({
      displayType: value,
      showDescIcon: value === 'row',
    });
  };

  onReadOnlyChange = value => this.setState({ readOnly: value });

  onSchemaChange = e => {
    this.setState({ schemaName: e.target.value });
  };

  onLabelWidthChange = value => {
    this.setState({ labelWidth: value });
  };

  render() {
    const { showDescIcon, readOnly, labelWidth } = this.state;
    return (
      <div className="fr-playground">
        {/* <GithubCorner
          href="https://github.com/alibaba/form-render"
          bannerColor="#F6C14F"
          className="absolute top-0 right-0 z-999"
        /> */}
        {/* <a href="/" className="f6 absolute top-1 right-1 z-999">
          \u56DE\u4E3B\u9875
        </a> */}
        <div className="w-100 flex setting-container">
          <Radio.Group
            name="schemaName"
            defaultValue="simplest"
            className="w-50 flex items-center flex-wrap z-999"
            onChange={this.onSchemaChange}
          >
            <Radio value="simplest">\u6700\u7B80\u6837\u4F8B</Radio>
            <Radio value="basic">\u57FA\u7840\u63A7\u4EF6</Radio>
            <Radio value="format">\u6821\u9A8C</Radio>
            <Radio value="new-feature">\u65B0\u529F\u80FD</Radio>
            <Radio value="function">\u590D\u6742\u8054\u52A8</Radio>
            <Radio value="input">\u4E2A\u6027\u8F93\u5165\u6846</Radio>
            <Radio value="select">\u4E2A\u6027\u9009\u62E9\u6846</Radio>
            <Radio value="demo">\u5B8C\u6574\u4F8B\u5B50</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <Select
              style={{ marginRight: 8, marginLeft: 24 }}
              onChange={this.onColumnNumberChange}
              defaultValue="1"
            >
              <Option value="1">\u4E00\u884C\u4E00\u5217</Option>
              <Option value="2">\u4E00\u884C\u4E8C\u5217</Option>
              <Option value="3">\u4E00\u884C\u4E09\u5217</Option>
            </Select>
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onDisplayChange}
              defaultValue="column"
            >
              <Option value="column">\u4E0A\u4E0B\u6392\u5217</Option>
              <Option value="row">\u5DE6\u53F3\u6392\u5217</Option>
            </Select>
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u7F16\u8F91"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="\u53EA\u8BFB"
              checked={readOnly}
            />
            <div style={{ width: 70 }}>\u6807\u7B7E\u5BBD\u5EA6\uFF1A</div>
            <Slider
              style={{ width: 80 }}
              max={200}
              min={20}
              value={labelWidth}
              onChange={this.onLabelWidthChange}
            />
          </div>
        </div>
        <Demo {...this.state} />
      </div>
    );
  }
}

export default Root;`,xe=`import React, { useState, useEffect } from 'react';
import deepEqual from 'deep-equal';
import parseJson from 'json-parse-better-errors';
import FormRender, { useForm } from 'form-render';
import DefaultSchema from './json/simplest.json';
import { Tabs } from 'antd';
import AsyncSelect from './customized/AsyncSelect';
import CodeBlock from './monaco';
const { TabPane } = Tabs;

// help functions
const schema2str = obj => JSON.stringify(obj, null, 2) || '';

const Demo = ({ schemaName, theme, ...formProps }) => {
  const [schemaStr, set1] = useState(() => schema2str(DefaultSchema.schema));
  const [error, set2] = useState('');

  useEffect(() => {
    const schema = require(\`./json/\${schemaName}.json\`);
    set1(schema2str(schema.schema));
  }, [schemaName]);

  const tryParse = schemaStr => {
    let schema = {};
    try {
      schema = parseJson(schemaStr);
      if (typeof schema !== 'object') {
        set2('schema\u975E\u6B63\u786Ejson');
        return;
      }
      set2('');
      return schema;
    } catch (error) {
      set2(String(error));
    }
  };

  const handleCodeChange = schemaStr => {
    set1(schemaStr);
    tryParse(schemaStr);
  };

  let schema = {};
  try {
    schema = parseJson(schemaStr);
  } catch (error) {
    console.log(error);
  }

  const form = useForm();

  return (
    <div className="flex-auto flex">
      <div className="w-50 h-100 pl2 flex flex-column">
        <Tabs
          defaultActiveKey="1"
          onChange={() => {}}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <CodeBlock value={schemaStr} onChange={handleCodeChange} />
          </TabPane>
          <TabPane tab="Data" key="2">
            <CodeBlock value={schema2str(form.getValues())} readOnly />
          </TabPane>
        </Tabs>
      </div>
      <div className="w-50 h-100 flex flex-column pa2">
        <div
          className="h-100 overflow-auto pa3 pt4 flex-auto"
          style={{ borderLeft: '1px solid #ddd' }}
        >
          {error ? (
            <div>{error}</div>
          ) : (
            <FormRender
              form={form}
              schema={schema}
              {...formProps}
              widgets={{ asyncSelect: AsyncSelect }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;`,Bn=`{
  "schema": {
    "type": "object",
    "properties": {
      "string": {
        "title": "\u5B57\u7B26\u4E32",
        "type": "string",
        "required": true
      },
      "select": {
        "title": "\u5355\u9009",
        "type": "string",
        "enum": ["a", "b", "c"],
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"],
        "widget": "radio"
      }
    }
  }
}`,Nn=`import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const { value, ...rest } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...rest}
        style={{ width: '100%' }}
        showSearch
        value={value || undefined}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;`,Sn=`import React from 'react';
import Editor from 'react-simple-code-editor';
import { languages, highlight } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './theme.css';

const Demo = ({ value, onChange }) => {
  return (
    <Editor
      value={value}
      onValueChange={onChange}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
      }}
    />
  );
};

export default Demo;`,Te=`/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+graphql+jsx+regex */
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*='language-'],
pre[class*='language-'] {
  color: black;
  background: none;
  text-shadow: 0 1px white;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*='language-']::-moz-selection,
pre[class*='language-'] ::-moz-selection,
code[class*='language-']::-moz-selection,
code[class*='language-'] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}

@media print {
  code[class*='language-'],
  pre[class*='language-'] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*='language-'] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #999;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #9a6e3a;
  background: hsla(0, 0%, 100%, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}

.token.function,
.token.class-name {
  color: #dd4a68;
}

.token.regex,
.token.important,
.token.variable {
  color: #e90;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}`,nt=`.debug * {
  outline: 1px solid gold;
}

.markdown p {
  color: #454d64 !important;
  font-size: 15px !important;
  line-height: 1.60625 !important;
}

.markdown ol,
.markdown ul {
  list-style: initial !important;
}

.hidden {
  display: none;
}

.npm__react-simple-code-editor__textarea {
  outline: none;
}

.b {
  font-weight: bold;
}

.pa0 {
  padding: 0;
}
.pa1 {
  padding: 0.25rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.pa4 {
  padding: 2rem;
}
.pa5 {
  padding: 4rem;
}
.pl0 {
  padding-left: 0;
}
.pt1 {
  padding-top: 0.25rem;
}
.pt2 {
  padding-top: 0.5rem;
}
.pt3 {
  padding-top: 1rem;
}
.pt4 {
  padding-top: 2rem;
}
.pt5 {
  padding-top: 4rem;
}
.pl2 {
  padding-left: 0.5rem;
}
.pb2 {
  padding-bottom: 0.5rem;
}
.overflow-auto {
  overflow: auto;
}
.h-100 {
  height: 100%;
}
.vh-100 {
  height: 100vh;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.w-50 {
  width: 50%;
}
.w-100 {
  width: 100%;
}
.flex {
  display: flex;
}
.flex-auto {
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
}
.flex-column {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.z-999 {
  z-index: 999;
}

.fr-playground {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  height: 100vh;
}

.fr-playground .setting-container {
  border-bottom: 1px solid #ccc;
  padding: 0 12px 12px;
}

.__dumi-default-previewer-demo {
  padding: 24px;
}`,Kn=`import React, { Component } from 'react';
// import GithubCorner from 'react-github-corner';
import Demo from './main';
import { Radio, Select, Switch, Slider } from 'antd';
import './index.css';

const Option = Select.Option;
class Root extends Component {
  state = {
    schemaName: 'simplest',
    column: 1,
    displayType: 'column',
    readOnly: false,
    labelWidth: 110,
  };

  onColumnNumberChange = value => {
    this.setState({ column: value });
  };

  onDisplayChange = value => {
    this.setState({
      displayType: value,
      showDescIcon: value === 'row',
    });
  };

  onReadOnlyChange = value => this.setState({ readOnly: value });

  onSchemaChange = e => {
    this.setState({ schemaName: e.target.value });
  };

  onLabelWidthChange = value => {
    this.setState({ labelWidth: value });
  };

  render() {
    const { showDescIcon, readOnly, labelWidth } = this.state;
    return (
      <div className="fr-playground">
        {/* <GithubCorner
          href="https://github.com/alibaba/form-render"
          bannerColor="#F6C14F"
          className="absolute top-0 right-0 z-999"
        /> */}
        {/* <a href="/" className="f6 absolute top-1 right-1 z-999">
          \u56DE\u4E3B\u9875
        </a> */}
        <div className="w-100 flex setting-container">
          <Radio.Group
            name="schemaName"
            defaultValue="simplest"
            className="w-50 flex items-center flex-wrap z-999"
            onChange={this.onSchemaChange}
          >
            <Radio value="simplest">\u6700\u7B80\u6837\u4F8B</Radio>
            <Radio value="basic">\u57FA\u7840\u63A7\u4EF6</Radio>
            <Radio value="format">\u6821\u9A8C</Radio>
            <Radio value="new-feature">\u65B0\u529F\u80FD</Radio>
            <Radio value="function">\u590D\u6742\u8054\u52A8</Radio>
            <Radio value="input">\u4E2A\u6027\u8F93\u5165\u6846</Radio>
            <Radio value="select">\u4E2A\u6027\u9009\u62E9\u6846</Radio>
            <Radio value="demo">\u5B8C\u6574\u4F8B\u5B50</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <Select
              style={{ marginRight: 8, marginLeft: 24 }}
              onChange={this.onColumnNumberChange}
              defaultValue="1"
            >
              <Option value="1">\u4E00\u884C\u4E00\u5217</Option>
              <Option value="2">\u4E00\u884C\u4E8C\u5217</Option>
              <Option value="3">\u4E00\u884C\u4E09\u5217</Option>
            </Select>
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onDisplayChange}
              defaultValue="column"
            >
              <Option value="column">\u4E0A\u4E0B\u6392\u5217</Option>
              <Option value="row">\u5DE6\u53F3\u6392\u5217</Option>
            </Select>
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u7F16\u8F91"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="\u53EA\u8BFB"
              checked={readOnly}
            />
            <div style={{ width: 70 }}>\u6807\u7B7E\u5BBD\u5EA6\uFF1A</div>
            <Slider
              style={{ width: 80 }}
              max={200}
              min={20}
              value={labelWidth}
              onChange={this.onLabelWidthChange}
            />
          </div>
        </div>
        <Demo {...this.state} />
      </div>
    );
  }
}

export default Root;`,tt=`import React, { useState, useEffect } from 'react';
import parseJson from 'json-parse-better-errors';
import FormRender, { useForm } from 'form-render';
import DefaultSchema from './json/simplest.json';
import { Tabs } from 'antd';
import AsyncSelect from './customized/AsyncSelect';
import MonacoEditor from './monaco';
const { TabPane } = Tabs;

// help functions
const schema2str = obj => JSON.stringify(obj, null, 2) || '';

const Demo = ({ schemaName, theme, ...formProps }) => {
  const [schemaStr, set1] = useState(() => schema2str(DefaultSchema.schema));
  const [error, set2] = useState('');

  useEffect(() => {
    const schema = require(\`./json/\${schemaName}.json\`);
    set1(schema2str(schema.schema));
  }, [schemaName]);

  const tryParse = schemaStr => {
    let schema = {};
    try {
      schema = parseJson(schemaStr);
      if (typeof schema !== 'object') {
        set2('schema\u975E\u6B63\u786Ejson');
        return;
      }
      set2('');
      return schema;
    } catch (error) {
      set2(String(error));
    }
  };

  const handleCodeChange = schemaStr => {
    set1(schemaStr);
    tryParse(schemaStr);
  };

  let schema = {};
  try {
    schema = parseJson(schemaStr);
  } catch (error) {
    console.log(error);
  }

  const form = useForm();

  return (
    <div className="flex-auto flex">
      <div className="w-50 h-100 pl2 flex flex-column">
        <Tabs
          defaultActiveKey="1"
          onChange={() => { }}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <MonacoEditor
              value={schemaStr}
              onChange={handleCodeChange}
            />
          </TabPane>
          <TabPane tab="Data" key="2">
            <MonacoEditor
              value={schema2str(form.getValues())}
              options={{ readOnly: true }}
            />
          </TabPane>
        </Tabs>
      </div>
      <div className="w-50 h-100 flex flex-column pa2">
        <div
          className="h-100 overflow-auto pa3 pt4 flex-auto"
          style={{ borderLeft: '1px solid #ddd' }}
        >
          {error ? (
            <div>{error}</div>
          ) : (
            <FormRender
              form={form}
              schema={schema}
              {...formProps}
              widgets={{ asyncSelect: AsyncSelect }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;`,ct=`{
  "schema": {
    "type": "object",
    "properties": {
      "string": {
        "title": "\u5B57\u7B26\u4E32",
        "type": "string",
        "required": true
      },
      "select": {
        "title": "\u5355\u9009",
        "type": "string",
        "enum": ["a", "b", "c"],
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"],
        "widget": "radio"
      }
    }
  }
}`,rt=`import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    const { onChange, name } = this.props;
    onChange(name, value);
  };

  render() {
    const { value, options: uiOptions } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...uiOptions}
        style={{ width: '100%' }}
        showSearch
        value={value || undefined}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;`,mt=`import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { valueMap, keySuggestions } from './suggestionsMap';

const Demo = ({ value, onChange, options }) => {

  const editorWillMount = (monaco) => {
    monaco.languages.registerCompletionItemProvider('json', {
      provideCompletionItems: (model, position) => {

        // \u5F97\u5230\u5192\u53F7\u4E4B\u524D\u7684\u6587\u672C
        var textUntilPosition = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column
        });

        const word = model.getWordUntilPosition(position);
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn
        };

        let propKey = '';
        const match = textUntilPosition.match(/[a-z]+(?=["][:])/)
        if (match && match.length) {
          propKey = match[0];
        }

        const suggestions = propKey ? (valueMap(range)[propKey] || []) : keySuggestions(range)

        return { suggestions }

      },
      triggerCharacters: ['"']
    });
  }

  return (
    <MonacoEditor
      height="800px"
      language="json"
      value={value}
      onChange={onChange}
      editorWillMount={editorWillMount}
      options={options}
    />
  );
};

export default Demo;`,Wn=`import { monaco } from 'react-monaco-editor';

const valueMap = range => {
  return {
    widget: [
      {
        label: 'input',
        insertText: 'input',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u8F93\u5165\u6846',
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u591A\u884C\u8F93\u5165\u6846',
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u7EC4\u4EF6',
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u7EC4\u4EF6',
      },
      {
        label: 'dateRange',
        insertText: 'dateRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u8303\u56F4',
      },
      {
        label: 'timeRange',
        insertText: 'timeRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u8303\u56F4',
      },
      {
        label: 'checkbox',
        insertText: 'checkbox',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u662F\u5426\u9009\u62E9',
      },
      {
        label: 'select',
        insertText: 'select',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u5355\u9009',
      },
      {
        label: 'radio',
        insertText: 'radio',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u5355\u9009',
      },
      {
        label: 'multiSelect',
        insertText: 'multiSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u591A\u9009\u6846',
      },
      {
        label: 'checkboxes',
        insertText: 'checkboxes',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u591A\u9009\u6846',
      },
      {
        label: 'treeSelect',
        insertText: 'treeSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6811\u5F62\u9009\u62E9',
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u989C\u8272\u9009\u62E9',
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0A\u4F20\u7EC4\u4EF6',
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6587\u672C\uFF08\u53EA\u8BFB\u5C55\u793A\uFF09',
      },
      {
        label: 'slider',
        insertText: 'slider',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6ED1\u52A8\u8F93\u5165\u6761',
      },
      {
        label: 'rate',
        insertText: 'rate',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E94\u661F\u8BC4\u5206',
      },
      {
        label: 'map',
        insertText: 'map',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5BF9\u8C61',
      },
      {
        label: 'cardList',
        insertText: 'cardList',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u590D\u6742\u7ED3\u6784\uFF0C\u4F46item\u6570\u91CF\u4E0D\u5927)',
      },
      {
        label: 'simpleList',
        insertText: 'simpleList',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67091-2\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)',
      },
      {
        label: 'tableList',
        insertText: 'tableList',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67093-5\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)',
      },
      {
        label: 'drawerList',
        insertText: 'drawerList',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u6570\u636E\u91CF\u5927\uFF0C\u6216\u8005\u7ED3\u6784\u590D\u6742)',
      },
    ],
    type: [
      {
        label: 'string',
        insertText: 'string',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'string',
      },
      {
        label: 'number',
        insertText: 'number',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'number',
      },
      {
        label: 'boolean',
        insertText: 'boolean',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'boolean',
      },
      {
        label: 'array',
        insertText: 'array',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'array',
      },
      {
        label: 'object',
        insertText: 'object',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'object',
      },
      {
        label: 'range',
        insertText: 'range',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'range',
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'html',
      },
    ],
    format: [
      {
        label: 'image',
        insertText: 'image',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'image',
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'textarea',
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'color',
      },
      {
        label: 'email',
        insertText: 'email',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'email',
      },
      {
        label: 'url',
        insertText: 'url',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'url',
      },
      {
        label: 'dateTime',
        insertText: 'dateTime',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'dateTime',
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'date',
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'time',
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'upload',
      },
    ],
    displayType: [
      {
        label: 'row',
        insertText: 'row',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5E76\u6392\u5C55\u793A',
      },
      {
        label: 'column',
        insertText: 'column',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E24\u6392\u5C55\u793A',
      },
    ],
  };
};

const keySuggestions = range => [
  {
    label: 'title',
    insertText: 'title',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F',
  },
  {
    label: 'description',
    insertText: 'description',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F',
  },
  {
    label: 'type',
    insertText: 'type',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u503C\u7684\u6570\u636E\u7C7B\u578B',
  },
  {
    label: 'format',
    insertText: 'format',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8F93\u5165\u6846\u7684\u683C\u5F0F',
  },
  {
    label: 'default',
    insertText: 'default',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C',
  },
  {
    label: 'required',
    insertText: 'required',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u5FC5\u586B',
  },
  {
    label: 'placeholder',
    insertText: 'placeholder',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'placeholder',
  },
  {
    label: 'bind',
    insertText: 'bind',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'bind',
  },
  {
    label: 'min',
    insertText: 'min',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5C0F\u503C',
  },
  {
    label: 'max',
    insertText: 'max',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5927\u503C',
  },
  {
    label: 'disabled',
    insertText: 'disabled',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u7981\u7528',
  },
  {
    label: 'readOnly',
    insertText: 'readOnly',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u53EA\u8BFB',
  },
  {
    label: 'hidden',
    insertText: 'hidden',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u9690\u85CF',
  },
  {
    label: 'displayType',
    insertText: 'displayType',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u5E03\u5C40',
  },
  {
    label: 'width',
    insertText: 'width',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6',
  },
  {
    label: 'labelWidth',
    insertText: 'labelWidth',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'label \u7684\u5BBD\u5EA6',
  },
  {
    label: 'className',
    insertText: 'className',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'className',
  },
  {
    label: 'widget',
    insertText: 'widget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6E32\u67D3',
  },
  {
    label: 'readOnlyWidget',
    insertText: 'readOnlyWidget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3',
  },
  {
    label: 'extra',
    insertText: 'extra',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5C55\u793A\u66F4\u591A\u8BF4\u660E\u4FE1\u606F',
  },
  {
    label: 'properties',
    insertText: 'properties',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027(\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\u4E2D\u4F7F\u7528)',
  },
  {
    label: 'items',
    insertText: 'items',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u5217\u8868\u4E2D\u6BCF\u4E2Aitem\u7684\u7ED3\u6784(\u53EA\u5728\u5217\u8868\u4E2D\u4F7F\u7528)',
  },
  {
    label: 'enum',
    insertText: 'enum',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C',
  },
  {
    label: 'enumNames',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u6587\u6848',
  },
  {
    label: 'rules',
    insertText: 'rules',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6821\u9A8Crules',
  },
  {
    label: 'props',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u989D\u5916\u7EC4\u4EF6\u5C5E\u6027',
  },
];

export { valueMap, keySuggestions };`,at=`.markdown p {
  color: #454d64 !important;
  font-size: 15px !important;
  line-height: 1.60625 !important;
}

.markdown ol,
.markdown ul {
  list-style: initial !important;
}

.hidden {
  display: none;
}

.npm__react-simple-code-editor__textarea {
  outline: none;
}

.b {
  font-weight: bold;
}

.pa0 {
  padding: 0;
}
.pa1 {
  padding: 0.25rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.pa4 {
  padding: 2rem;
}
.pa5 {
  padding: 4rem;
}
.pl0 {
  padding-left: 0;
}
.pt1 {
  padding-top: 0.25rem;
}
.pt2 {
  padding-top: 0.5rem;
}
.pt3 {
  padding-top: 1rem;
}
.pt4 {
  padding-top: 2rem;
}
.pt5 {
  padding-top: 4rem;
}
.pl2 {
  padding-left: 0.5rem;
}
.pb2 {
  padding-bottom: 0.5rem;
}
.overflow-auto {
  overflow: auto;
}
.h-100 {
  height: 100%;
}
.vh-100 {
  height: 100vh;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.w-50 {
  width: 50%;
}
.w-100 {
  width: 100%;
}
.flex {
  display: flex;
}
.flex-auto {
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
}
.flex-column {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.z-999 {
  z-index: 999;
}

.fr-playground {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  height: 100vh;
}

.fr-playground .setting-container {
  border-bottom: 1px solid #ccc;
  padding: 0 12px 12px;
}

.__dumi-default-previewer-demo {
  padding: 24px;
}`,zn=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, Menu, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  const { refresh, tableState }: any = useTable();

  const searchApi = (params, sorter) => {
    console.group(sorter);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  const searchApi2 = (params, sorter) => {
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data.slice(1),
            total: res.data.length - 1,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      sorter: true,
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={() => message.success('\u590D\u5236\u6210\u529F\uFF01')}>\u590D\u5236</div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={() => message.warning('\u786E\u5B9A\u5220\u9664\u5417\uFF1F')}>\u5220\u9664</div>
      </Menu.Item>
    </Menu>
  );

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        schema={schema}
        displayType="row"
        api={[
          {
            name: '\u5168\u90E8\u6570\u636E',
            api: searchApi,
          },
          {
            name: '\u6211\u7684\u6570\u636E',
            api: searchApi2,
          },
        ]}
      />
      <Table
        // size="small"
        pagination={{ pageSize: 4 }}
        columns={columns}
        // headerTitle="\u9AD8\u7EA7\u8868\u5355"
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default withTable(Demo);`,ft=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  const { refresh, tableState }: any = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table
        debug
        columns={columns}
        headerTitle="\u9AD8\u7EA7\u8868\u5355"
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default withTable(Demo);`,Ln=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  const { refresh, tableState }: any = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default withTable(Demo);`,xn=`import React, { useEffect } from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';
import { history } from 'umi';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  const { refresh, tableState, form }: any = useTable();
  useEffect(() => {
    // \u5B9E\u9645\u4F7F\u7528\u65F6queryParam\u4E3Aurl\u4E0A\u53D6\u4E0B\u6765\u7684\u6709\u6548\u53C2\u6570
    // const queryParam = { state: 'open' };
    const queryParam = history.location.query;
    if (queryParam) {
      // form\u5177\u4F53api\u53C2\u8003form-render\u6587\u6863
      form.setValues(queryParam);
    }
  }, []);

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const showData = () => {
    refresh(null, { extra: 1 });
  };
  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };
  const onSearch = search => {
    console.log('onSearch', search);
  };
  const afterSearch = params => {
    const formData = form.getValues();
    history.replace({
      pathname: '/table-render/demo',
      query: formData,
    });
  };
  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        schema={schema}
        displayType="row"
        onSearch={onSearch}
        afterSearch={afterSearch}
        api={searchApi}
      />
      <Table
        columns={columns}
        headerTitle="url\u5E26\u53C2\u67E5\u8BE2"
        rowKey="id"
        toolbarRender={() => [
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default withTable(Demo);`,Un=`import React from 'react';
import { Table, Search, withTable } from 'table-render';

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: \`\u6807\u9898\${i + 1}\`,
    created_at: new Date().getTime(),
  });
}

// \u8BE6\u7EC6\u53EF\u89C1 form-render \u7684\u4F7F\u7528
const schema = {
  type: 'object',
  properties: {
    title: {
      title: '\u6807\u9898',
      type: 'string',
      width: '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '30%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20 antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => <a onClick={() => alert(row.title)}>\u7F16\u8F91</a>,
  },
];

const App = () => {
  const searchApi = () => {
    return Promise.resolve({
      rows: dataSource,
      total: dataSource.length,
    });
  };
  return (
    <>
      <Search debug schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </>
  );
};

export default withTable(App);`,st=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const templates = [
  {
    text: '\u6A21\u677F1',
    name: 'something',
    schema: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        inputName: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
        },
        selectName: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
        dateName: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
        },
      },
    },
  },
];

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator ref={genRef} defaultValue={schema} templates={templates} />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,$n=`import React from 'react';
import Generator, {
  defaultSettings,
  defaultCommonSettings,
  defaultGlobalSettings,
} from 'fr-generator';

const NewWidget = ({ value = 0, onChange }) => (
  <button onClick={() => onChange(value + 1)}>{value}</button>
);

const Demo = () => {
  console.log(defaultSettings, defaultCommonSettings, defaultGlobalSettings);

  return (
    <div style={{ height: '50vh' }}>
      <Generator
        widgets={{ NewWidget }}
        settings={[
          {
            title: '\u4E2A\u4EBA\u4FE1\u606F',
            widgets: [
              {
                text: '\u8BA1\u6570\u5668',
                name: 'asyncSelect',
                schema: {
                  title: '\u8BA1\u6570\u5668',
                  type: 'number',
                  widget: 'NewWidget',
                },
                setting: {
                  api: { title: 'api', type: 'string' },
                },
              },
              {
                text: '\u59D3\u540D',
                name: 'name',
                schema: {
                  title: '\u8F93\u5165\u6846',
                  type: 'string',
                },
                setting: {
                  maxLength: { title: '\u6700\u957F\u5B57\u6570', type: 'number' },
                },
              },
              {
                text: 'object',
                name: 'object',
                schema: {
                  title: '\u5BF9\u8C61',
                  type: 'object',
                  properties: {},
                },
                setting: {},
              },
              {
                text: 'array',
                name: 'array',
                schema: {
                  title: '\u6570\u7EC4',
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {},
                  },
                },
                setting: {},
              },
            ],
          },
        ]}
        commonSettings={{
          description: {
            title: '\u81EA\u5B9A\u4E49\u5171\u901A\u7528\u7684\u5165\u53C2',
            type: 'string',
          },
        }}
      />
    </div>
  );
};

export default Demo;`,it=`import React from 'react';
import Generator from 'fr-generator';
import './index.less';

const {
  Provider,
  Sidebar,
  Canvas,
  Settings,
} = Generator;

const Demo = () => {
  return (
    <div className="fr-generator-playground" style={{ height: '40vh' }}>
      <Provider
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      >
        <div className="fr-generator-container">
          <Settings />
          <Canvas />
          <Sidebar fixedName />
        </div>
      </Provider>
    </div>
  );
};

export default Demo;`,ln=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,Hn=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    array: {
      key: 'array',
      type: 'array',
      name: 'array',
      title: 'Name',
      'x-component': 'arraytable',
      items: {
        type: 'object',
        properties: {
          aa: {
            key: 'aa',
            type: 'string',
            name: 'aa',
            title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
            enum: [
              {
                label: '\u663E\u793A',
                value: true,
              },
              {
                label: '\u9690\u85CF',
                value: false,
              },
            ],
            'x-component': 'input',
          },
          bb: {
            key: 'bb',
            type: 'string',
            name: 'bb',
            title: 'BB',
            'x-component': 'input',
          },
        },
      },
    },
    cc: {
      key: 'cc',
      type: 'string',
      name: 'cc',
      title: 'CC',
      'x-component': 'input',
      'x-component-props': { min: 1 },
    },
  },
};

const stringContains = (str, text) => {
  return str.indexOf(text) > -1;
}

const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

// \u83B7\u5F97 propsSchema \u7684 children
const getChildren2 = (schema) => {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items.properties;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

// formily Schema => FRG schema
const transformFrom = (mySchema, parent = null) => {
  const isObj = mySchema.type === 'object' && mySchema.properties;
  const isList =
    mySchema.type === 'array' && mySchema.items && mySchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (mySchema.enum && Array.isArray(mySchema.enum)) {
      const list = mySchema.enum;
      if (
        isObject(list[0]) &&
        list[0].label !== undefined &&
        list[0].value !== undefined
      ) {
        const _enumNames = list.map(i => i.label);
        const _enum = list.map(i => i.value);
        mySchema.enum = _enum;
        mySchema.enumNames = _enumNames;
      }
    }
  } else {
    const childrenList = getChildren2(mySchema);
    childrenList.map(item => {
      if (isObj) {
        mySchema.properties[item.name] = transformFrom(item.schema, mySchema);
      }
      if (isList) {
        mySchema.items.properties[item.name] = transformFrom(
          item.schema,
          mySchema
        );
      }
    });
  }
  if (mySchema['x-component']) {
    mySchema['widget'] = mySchema['x-component'];
  }
  if (mySchema['x-component-props']) {
    mySchema['props'] = mySchema['x-component-props'];
  }
  if (parent && mySchema.required) {
    if (parent.required && Array.isArray(parent.required)) {
      parent.required.push(mySchema.name);
    } else {
      parent.required = [mySchema.name];
    }
  }
  delete mySchema.key;
  delete mySchema.name;
  delete mySchema.required;
  delete mySchema['x-component'];
  delete mySchema['x-component-props'];
  return mySchema;
};

// FRG schema => formily Schema
const transformTo = (frSchema, parent = null, key = null) => {
  const isObj = frSchema.type === 'object' && frSchema.properties;
  const isList =
    frSchema.type === 'array' && frSchema.items && frSchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (
      frSchema.enum &&
      Array.isArray(frSchema.enum) &&
      frSchema.enumNames &&
      Array.isArray(frSchema.enumNames)
    ) {
      const list = frSchema.enum.map((item, idx) => ({
        value: item,
        label: frSchema.enumNames[idx],
      }));
      frSchema.enum = list;
    }
  } else {
    const childrenList = getChildren2(frSchema);
    childrenList.map(item => {
      if (isObj) {
        frSchema.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
      if (isList) {
        frSchema.items.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
    });
  }
  if (frSchema['widget']) {
    frSchema['x-component'] = frSchema['widget'];
  }
  if (frSchema['props']) {
    frSchema['x-component-props'] = frSchema['props'];
  }
  delete frSchema['widget'];
  delete frSchema['props'];
  delete frSchema['enumNames'];
  if (key) {
    frSchema.name = key;
    frSchema.key = key;
  }
  if (parent && key && parent.required && Array.isArray(parent.required)) {
    if (parent.required.indexOf(key) > -1) {
      frSchema.required = true;
    }
  }
  return frSchema;
};

const fromFormily = schema =>  transformFrom(schema);
const toFormily = schema => transformTo(schema);

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator
          ref={genRef}
          defaultValue={schema}
          transformer={{
            from: fromFormily,
            to: toFormily,
          }}
        />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,ot=`import React, { useState, useRef } from 'react';
import { useHistory } from 'umi';
import Generator from 'fr-generator';
import './index.less';

const Demo = () => {
  const ref = useRef();

  const goToFrPlayground = () => {
    ref.current.copyValue();
    window.open('/playground');
  };

  return (
    <div className="fr-generator-playground" style={{ height: '80vh' }}>
      <Generator
        ref={ref}
        extraButtons={[{ text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground }]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,fn=cn.default={"guide-card":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"oLxE"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:le}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p;return y.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return l=function(j,m){if(!m&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var r=S(m);if(r&&r.has(j))return r.get(j);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in j)if(c!=="default"&&Object.prototype.hasOwnProperty.call(j,c)){var s=n?Object.getOwnPropertyDescriptor(j,c):null;s&&(s.get||s.set)?Object.defineProperty(a,c,s):a[c]=j[c]}return a.default=j,r&&r.set(j,a),a},S=function(j){if(typeof WeakMap!="function")return null;var m=new WeakMap,r=new WeakMap;return(S=function(n){return n?r:m})(j)},f=e("K+nK"),I.t0=f,I.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return I.t1=I.sent,i=(0,I.t0)(I.t1),I.t2=l,I.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return I.t3=I.sent,h=(0,I.t2)(I.t3),I.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=I.sent,p=function(){var j=(0,h.useState)("Line"),m=(0,i.default)(j,2),r=m[0],a=m[1],n={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[r];return h.default.createElement("div",null,h.default.createElement("div",{style:{marginBottom:10}},h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return a("Line")}},"\u6298\u7EBF\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return a("Column")}},"\u67F1\u72B6\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return a("PivotTable")}},"\u4EA4\u53C9\u8868")),h.default.createElement(n,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},I.abrupt("return",p);case 18:case"end":return I.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Line, Column, PivotTable } from 'chart-render';

export default () => {
  const [component, setComponent] = useState('Line');
  const ChartRender = { Line, Column, PivotTable }[component];

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Line')}
        >
          \u6298\u7EBF\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Column')}
        >
          \u67F1\u72B6\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('PivotTable')}
        >
          \u4EA4\u53C9\u8868
        </button>
      </div>

      <ChartRender
        meta={[
          { id: 'date', name: '\u65E5\u671F', isDim: true },
          { id: 'pv', name: '\u8BBF\u95EE\u91CF', isDim: false },
          { id: 'uv', name: '\u8BBF\u5BA2\u6570', isDim: false },
        ]}
        data={[
          { date: '20200101', pv: 100, uv: 50 },
          { date: '20200102', pv: 120, uv: 60 },
          { date: '20200103', pv: 140, uv: 70 },
          { date: '20200104', pv: 160, uv: 80 },
        ]}
      />
    </div>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    inverted
    label={{
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    }}
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20, pv: 120 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120, pv: 1120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21, pv: 121 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121, pv: 1121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15, pv: 115 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115, pv: 1115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40, pv: 140 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140, pv: 1140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31, pv: 131 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131, pv: 1131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32, pv: 132 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132, pv: 1132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30, pv: 130 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130, pv: 1130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    withArea // \u5F00\u542F\u9762\u79EF\u56FE
    isStack // \u5806\u53E0\u5C55\u793A
    isPercent // \u767E\u5206\u6BD4\u9762\u79EF\u56FE
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(I,w,j){return i.default.createElement("div",null,i.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),i.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(w).length]}},I),i.default.createElement("p",null,JSON.stringify(w)),i.default.createElement("p",null,JSON.stringify(j)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    cellRender={(val, dimRecord, indId) => (
      <div>
        <p>\u53C2\u6570\u8868\uFF1A</p>
        <p
          style={{
            color: ['red', 'orange', 'yellow', 'green', 'blue'][
              Object.keys(dimRecord).length
            ],
          }}
        >
          {val}
        </p>
        <p>{JSON.stringify(dimRecord)}</p>
        <p>{JSON.stringify(indId)}</p>
      </div>
    )}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p;return y.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return l=function(j,m){if(!m&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var r=S(m);if(r&&r.has(j))return r.get(j);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in j)if(c!=="default"&&Object.prototype.hasOwnProperty.call(j,c)){var s=n?Object.getOwnPropertyDescriptor(j,c):null;s&&(s.get||s.set)?Object.defineProperty(a,c,s):a[c]=j[c]}return a.default=j,r&&r.set(j,a),a},S=function(j){if(typeof WeakMap!="function")return null;var m=new WeakMap,r=new WeakMap;return(S=function(n){return n?r:m})(j)},f=e("K+nK"),I.t0=f,I.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return I.t1=I.sent,i=(0,I.t0)(I.t1),I.t2=l,I.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return I.t3=I.sent,h=(0,I.t2)(I.t3),I.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=I.sent,p=function(){var j=(0,h.useState)(!1),m=(0,i.default)(j,2),r=m[0],a=m[1];return h.default.createElement(h.default.Fragment,null,h.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",h.default.createElement("input",{type:"checkbox",value:r,onChange:function(){return a(!r)}})),h.default.createElement(b.PivotTable,{leftExpandable:r,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},I.abrupt("return",p);case 18:case"end":return I.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { PivotTable } from 'chart-render';

export default () => {
  const [expandable, setExpandable] = useState(false);

  return (
    <>
      <label>
        \u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A
        <input
          type="checkbox"
          value={expandable}
          onChange={() => setExpandable(!expandable)}
        />
      </label>
      <PivotTable
        leftExpandable={expandable}
        showSubtotal={false}
        meta={[
          { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
          { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
          { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
          { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
          { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
          { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
        ]}
        data={[
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 782,
            valueB: 0.566,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 856,
            valueB: 0.403,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 886,
            valueB: 0.555,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 555,
            valueB: 0.444,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 444,
            valueB: 0.333,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 922,
            valueB: 0.778,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 888,
            valueB: 0.887,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 879,
            valueB: 0.87,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 800,
            valueB: 0.723,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 813,
            valueB: 0.789,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 500,
            valueB: 0.463,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 833,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 821,
            valueB: 0.442,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 834,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 803,
            valueB: 0.7,
          },
        ]}
      />
    </>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u,I,w,j,m,r;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return I=function(s,g){if(!g&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var O=u(g);if(O&&O.has(s))return O.get(s);var N={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var L in s)if(L!=="default"&&Object.prototype.hasOwnProperty.call(s,L)){var X=$?Object.getOwnPropertyDescriptor(s,L):null;X&&(X.get||X.set)?Object.defineProperty(N,L,X):N[L]=s[L]}return N.default=s,O&&O.set(s,N),N},u=function(s){if(typeof WeakMap!="function")return null;var g=new WeakMap,O=new WeakMap;return(u=function($){return $?O:g})(s)},f=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=f,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=f,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=f,n.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=I,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return l=n.sent,n.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=n.sent,w=b.default.TextArea,j={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},m=function(){var s=(0,S.useState)(JSON.stringify(j)),g=(0,h.default)(s,2),O=g[0],N=g[1],$=(0,S.useState)({}),L=(0,h.default)($,2),X=L[0],We=L[1],qe=function(){try{var _e=(0,p.updateSchemaToNewVersion)(JSON.parse(O));We(_e)}catch(pt){console.log(pt)}},pn=function(_e){N(_e.target.value)},hn=function(){N(JSON.stringify(JSON.parse(O),null,2))};return S.default.createElement("div",null,S.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),S.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:O,onChange:pn}),S.default.createElement(i.default,{style:{marginRight:12},onClick:hn},"\u683C\u5F0F\u5316\u65E7schema"),S.default.createElement(i.default,{type:"primary",onClick:qe},"\u751F\u6210\u65B0\u7248schema"),S.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify(X,null,2)}))},r=m,n.abrupt("return",r);case 38:case"end":return n.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from '../../packages/form-render/src/utils.js';
const TextArea = Input.TextArea;

const old = {
  type: 'object',
  properties: {
    number: {
      title: '\u6570\u5B57\u8F93\u5165\u6846',
      type: 'number',
      'ui:disabled': true,
    },
    checkbox: {
      title: '\u662F\u5426\u9009\u62E9',
      type: 'boolean',
      'ui:widget': 'switch',
    },
  },
  required: ['number'],
};

const Translator = () => {
  const [oldSchema, setOld] = useState(JSON.stringify(old));
  const [newSchema, setNew] = useState({});

  const handleClick = () => {
    try {
      const _newSchema = updateSchemaToNewVersion(JSON.parse(oldSchema));
      setNew(_newSchema);
    } catch (err) {
      console.log(err);
    }
  };

  const onOldChange = e => {
    setOld(e.target.value);
  };

  const formatOld = () => {
    setOld(JSON.stringify(JSON.parse(oldSchema), null, 2));
  };

  return (
    <div>
      <div>\u586B\u5165\u65E7\u7248schema\uFF1A</div>
      <TextArea
        style={{ minHeight: 400, marginTop: 12, marginBottom: 12 }}
        value={oldSchema}
        onChange={onOldChange}
      />
      <Button style={{ marginRight: 12 }} onClick={formatOld}>
        \u683C\u5F0F\u5316\u65E7schema
      </Button>
      <Button type="primary" onClick={handleClick}>
        \u751F\u6210\u65B0\u7248schema
      </Button>
      <TextArea
        style={{ minHeight: 400, marginTop: 12 }}
        value={JSON.stringify(newSchema, null, 2)}
      />
    </div>
  );
};

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:V}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u,I,w;return y.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return p=function(a,n){if(!n&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var c=l(n);if(c&&c.has(a))return c.get(a);var s={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var O in a)if(O!=="default"&&Object.prototype.hasOwnProperty.call(a,O)){var N=g?Object.getOwnPropertyDescriptor(a,O):null;N&&(N.get||N.set)?Object.defineProperty(s,O,N):s[O]=a[O]}return s.default=a,c&&c.set(a,s),s},l=function(a){if(typeof WeakMap!="function")return null;var n=new WeakMap,c=new WeakMap;return(l=function(g){return g?c:n})(a)},f=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=f,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,i=(0,m.t0)(m.t1),m.t2=f,m.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return m.t3=m.sent,h=(0,m.t2)(m.t3),m.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=m.sent,m.t4=p,m.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return m.t5=m.sent,S=(0,m.t4)(m.t5),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},I=function(){var a=(0,S.useForm)(),n=function(s,g){console.log("formData:",s,"errors",g)};return h.default.createElement("div",null,h.default.createElement(S.default,{form:a,schema:u,onFinish:n}),h.default.createElement(i.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4"))},w=I,m.abrupt("return",w);case 27:case"end":return m.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };
  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u,I,w,j,m,r,a;return y.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return j=function(g,O){if(!O&&g&&g.__esModule)return g;if(g===null||typeof g!="object"&&typeof g!="function")return{default:g};var N=w(O);if(N&&N.has(g))return N.get(g);var $={},L=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var X in g)if(X!=="default"&&Object.prototype.hasOwnProperty.call(g,X)){var We=L?Object.getOwnPropertyDescriptor(g,X):null;We&&(We.get||We.set)?Object.defineProperty($,X,We):$[X]=g[X]}return $.default=g,N&&N.set(g,$),$},w=function(g){if(typeof WeakMap!="function")return null;var O=new WeakMap,N=new WeakMap;return(w=function(L){return L?N:O})(g)},f=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=f,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=f,c.next=13,e.e(87).then(e.bind(null,"fWQN"));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.t4=f,c.next=18,e.e(88).then(e.bind(null,"mtLc"));case 18:return c.t5=c.sent,b=(0,c.t4)(c.t5),c.t6=f,c.next=23,e.e(79).then(e.bind(null,"yKVA"));case 23:return c.t7=c.sent,S=(0,c.t6)(c.t7),c.t8=f,c.next=28,e.e(78).then(e.bind(null,"879j"));case 28:return c.t9=c.sent,l=(0,c.t8)(c.t9),c.t10=f,c.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return c.t11=c.sent,p=(0,c.t10)(c.t11),c.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 37:return u=c.sent,c.t12=j,c.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return c.t13=c.sent,I=(0,c.t12)(c.t13),m={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},r=function(s){(0,S.default)(O,s);var g=(0,l.default)(O);function O(){var N;(0,h.default)(this,O);for(var $=arguments.length,L=new Array($),X=0;X<$;X++)L[X]=arguments[X];return N=g.call.apply(g,[this].concat(L)),N.onFinish=function(We,qe){console.log("formData:",We,"errors",qe)},N}return(0,b.default)(O,[{key:"render",value:function(){var $=this.props.form;return p.default.createElement("div",null,p.default.createElement(I.default,{form:$,schema:m,onFinish:this.onFinish}),p.default.createElement(i.default,{type:"primary",onClick:$.submit},"\u63D0\u4EA4"))}}]),O}(p.default.Component),a=(0,I.connectForm)(r),c.abrupt("return",a);case 47:case"end":return c.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';
// import 'antd/dist/antd.css';    \u5982\u679C\u9879\u76EE\u6CA1\u6709\u5BF9antd\u3001less\u505A\u4EFB\u4F55\u914D\u7F6E\u7684\u8BDD\uFF0C\u9700\u8981\u52A0\u4E0A

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

class Demo extends React.Component {
  onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };

  render() {
    const { form } = this.props;
    return (
      <div>
        <FormRender form={form} schema={schema} onFinish={this.onFinish} />
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u,I,w;return y.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return p=function(a,n){if(!n&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var c=l(n);if(c&&c.has(a))return c.get(a);var s={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var O in a)if(O!=="default"&&Object.prototype.hasOwnProperty.call(a,O)){var N=g?Object.getOwnPropertyDescriptor(a,O):null;N&&(N.get||N.set)?Object.defineProperty(s,O,N):s[O]=a[O]}return s.default=a,c&&c.set(a,s),s},l=function(a){if(typeof WeakMap!="function")return null;var n=new WeakMap,c=new WeakMap;return(l=function(g){return g?c:n})(a)},f=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=f,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,i=(0,m.t0)(m.t1),m.t2=f,m.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return m.t3=m.sent,h=(0,m.t2)(m.t3),m.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=m.sent,m.t4=p,m.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return m.t5=m.sent,S=(0,m.t4)(m.t5),u={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},showSetting:{title:"\u662F\u5426\u5C55\u793A\u7F51\u5740",type:"boolean"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",hidden:"{{formData.showSetting !== true}}",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},I=function(){var a=(0,S.useForm)(),n=function(s,g){g.length>0?alert("errors:"+JSON.stringify(g)):alert("formData:"+JSON.stringify(s,null,2))};return h.default.createElement("div",null,h.default.createElement(S.default,{form:a,schema:u,onFinish:n}),h.default.createElement(i.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4"))},w=I,m.abrupt("return",w);case 27:case"end":return m.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  displayType: 'row',
  labelWidth: 60,
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    showSetting: {
      title: '\u662F\u5426\u5C55\u793A\u7F51\u5740',
      type: 'boolean',
    },
    siteUrl: {
      title: '\u7F51\u5740',
      type: 'string',
      placeholder: '\u6B64\u5904\u5FC5\u586B',
      hidden: '{{formData.showSetting !== true}}',
      required: true,
      props: {
        addonBefore: 'https://',
        addonAfter: '.com',
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    if (errors.length > 0) {
      alert('errors:' + JSON.stringify(errors));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"form-render-tester":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"9Yrf"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:sn},"advanced/utils/index.js":{import:"./advanced/utils",content:Ce},"widgets/RichText/src/index.js":{import:"../../widgets/RichText/src",content:de}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:"^15.0.2|| ^16.0.0-rc || ^16.0.0"},"form-render":{version:"1.6.13"},"react-dom":{version:"^15.0.2|| ^16.0.0-rc || ^16.0.0"},"braft-editor":{version:"2.3.9",css:"braft-editor/dist/index.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-tester"}},"display-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b=function(I){return{type:"object",displayType:I,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return i.default.createElement("div",null,i.default.createElement("h2",null,"display: row"),i.default.createElement(h.default,{schema:b("row")}),i.default.createElement("h2",null,"display: column"),i.default.createElement(h.default,{schema:b("column")}))},p.abrupt("return",S);case 14:case"end":return p.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = displayType => ({
  type: 'object',
  displayType: displayType,
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    objectName: {
      title: '\u5BF9\u8C61',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
  },
});

export default () => (
  <div>
    <h2>display: row</h2>
    <Form schema={schema('row')} />
    <h2>display: column</h2>
    <Form schema={schema('column')} />
  </div>
);`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return i.default.createElement(h.default,{readOnly:!0,schema:b})},p.abrupt("return",S);case 14:case"end":return p.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return i.default.createElement(h.default,{labelWidth:"200",schema:b})},p.abrupt("return",S);case 14:case"end":return p.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
          width: '50%',
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
          width: '50%',
          labelWidth: 6,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return i.default.createElement(h.default,{schema:b})},l=S,u.abrupt("return",l);case 15:case"end":return u.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'cardList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return i.default.createElement(h.default,{schema:b})},l=S,u.abrupt("return",l);case 15:case"end":return u.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'simpleList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tableList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return i.default.createElement(h.default,{schema:b})},l=S,u.abrupt("return",l);case 15:case"end":return u.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'tableList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"drawerList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return i.default.createElement(h.default,{schema:b})},l=S,u.abrupt("return",l);case 15:case"end":return u.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'drawerList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'simpleList',
            props: {
              hideMove: true,
            },
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u,I,w,j,m,r;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return j=function(s,g){if(!g&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var O=w(g);if(O&&O.has(s))return O.get(s);var N={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var L in s)if(L!=="default"&&Object.prototype.hasOwnProperty.call(s,L)){var X=$?Object.getOwnPropertyDescriptor(s,L):null;X&&(X.get||X.set)?Object.defineProperty(N,L,X):N[L]=s[L]}return N.default=s,O&&O.set(s,N),N},w=function(s){if(typeof WeakMap!="function")return null;var g=new WeakMap,O=new WeakMap;return(w=function($){return $?O:g})(s)},f=e("K+nK"),n.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=f,n.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=f,n.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=f,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=f,n.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.t8=j,n.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return n.t9=n.sent,l=(0,n.t8)(n.t9),n.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 36:return p=n.sent,n.t10=j,n.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return n.t11=n.sent,u=(0,n.t10)(n.t11),n.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return I=n.sent,m=function(){var s=(0,u.useForm)(),g=(0,l.useState)({}),O=(0,S.default)(g,2),N=O[0],$=O[1],L=function(){(0,I.fakeApi)("xxx/getForm").then(function(qe){s.setValues({input1:"hello world",select1:"c"})})};(0,l.useEffect)(function(){(0,I.delay)(1e3).then(function(We){$({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var X=function(qe,pn){pn.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(pn.map(function(hn){return hn.name}))):(0,I.fakeApi)("xxx/submit",qe).then(function(hn){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return l.default.createElement("div",{style:{width:"400px"}},l.default.createElement(u.default,{form:s,schema:N,onFinish:X}),l.default.createElement(i.default,null,l.default.createElement(h.default,{onClick:L},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),l.default.createElement(h.default,{type:"primary",onClick:s.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},r=m,n.abrupt("return",r);case 48:case"end":return n.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './utils';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  useEffect(() => {
    // \u5F02\u6B65\u52A0\u8F7D\u8868\u5355
    delay(1000).then(_ => {
      setSchema({
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      });
    });
  }, []);

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u,I,w,j,m,r;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(s,g){if(!g&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var O=I(g);if(O&&O.has(s))return O.get(s);var N={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var L in s)if(L!=="default"&&Object.prototype.hasOwnProperty.call(s,L)){var X=$?Object.getOwnPropertyDescriptor(s,L):null;X&&(X.get||X.set)?Object.defineProperty(N,L,X):N[L]=s[L]}return N.default=s,O&&O.set(s,N),N},I=function(s){if(typeof WeakMap!="function")return null;var g=new WeakMap,O=new WeakMap;return(I=function($){return $?O:g})(s)},f=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=f,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=f,n.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return n.t4=f,n.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=f,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return l=n.sent,n.t8=w,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,p=(0,n.t8)(n.t9),n.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return u=n.sent,j={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},m=function(){var s=(0,p.useForm)(),g=function($,L){L.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(L.map(function(X){return X.name}))):(0,u.fakeApi)("xxx/submit",$).then(function(X){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},O=function($){var L=$.data,X=$.errors,We=$.schema,qe=(0,h.default)($,["data","errors","schema"]);return(0,u.fakeApi)("xxx/validation").then(function(pn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(p.default,{form:s,schema:j,beforeFinish:O,onFinish:g}),S.default.createElement(i.default,{type:"primary",onClick:s.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},r=m,n.abrupt("return",r);case 42:case"end":return n.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  // \u670D\u52A1\u7AEF\u6821\u9A8C\u5728\u8FD9\u91CC\u505A
  const beforeFinish = ({ data, errors, schema, ...rest }) => {
    return fakeApi('xxx/validation').then(_ => {
      return { name: 'select1', error: ['\u5916\u90E8\u6821\u9A8C\u9519\u8BEF'] };
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        beforeFinish={beforeFinish}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u,I,w,j,m,r;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(s,g){if(!g&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var O=I(g);if(O&&O.has(s))return O.get(s);var N={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var L in s)if(L!=="default"&&Object.prototype.hasOwnProperty.call(s,L)){var X=$?Object.getOwnPropertyDescriptor(s,L):null;X&&(X.get||X.set)?Object.defineProperty(N,L,X):N[L]=s[L]}return N.default=s,O&&O.set(s,N),N},I=function(s){if(typeof WeakMap!="function")return null;var g=new WeakMap,O=new WeakMap;return(I=function($){return $?O:g})(s)},f=e("K+nK"),n.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=f,n.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=f,n.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=f,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=f,n.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 31:return l=n.sent,n.t8=w,n.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return n.t9=n.sent,p=(0,n.t8)(n.t9),n.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return u=n.sent,j={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},m=function(){var s=(0,p.useForm)(),g=function($,L){L.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(L.map(function(X){return X.name}))):(0,u.fakeApi)("xxx/submit",$).then(function(X){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},O=function(){(0,u.fakeApi)("xxx/getForm").then(function($){s.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(p.default,{form:s,schema:j,onFinish:g}),S.default.createElement(i.default,null,S.default.createElement(h.default,{onClick:O},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),S.default.createElement(h.default,{type:"primary",onClick:s.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},r=m,n.abrupt("return",r);case 44:case"end":return n.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message, Space } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F\u8303\u56F4',
      type: 'range',
      format: 'date',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ startDate: '2020-04-04', endDate: '2020-04-24' });
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u,I,w,j,m;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return I=function(c,s){if(!s&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var g=u(s);if(g&&g.has(c))return g.get(c);var O={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var $ in c)if($!=="default"&&Object.prototype.hasOwnProperty.call(c,$)){var L=N?Object.getOwnPropertyDescriptor(c,$):null;L&&(L.get||L.set)?Object.defineProperty(O,$,L):O[$]=c[$]}return O.default=c,g&&g.set(c,O),O},u=function(c){if(typeof WeakMap!="function")return null;var s=new WeakMap,g=new WeakMap;return(u=function(N){return N?g:s})(c)},f=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,i=(0,a.t0)(a.t1),a.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return a.t2=f,a.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return a.t3=a.sent,h=(0,a.t2)(a.t3),a.t4=I,a.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return S=a.sent,a.t6=I,a.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return a.t7=a.sent,l=(0,a.t6)(a.t7),a.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return p=a.sent,w={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},j=function(){var c=(0,l.useForm)(),s=function(){c.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},g=function(N,$){$.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify($.map(function(L){return L.name}))):h.default.info(JSON.stringify(N))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(l.default,{form:c,schema:w,onMount:s,onFinish:g}),b.default.createElement(i.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},m=j,a.abrupt("return",m);case 37:case"end":return a.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          widget: 'select',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setSchemaByPath('obj1.select1', {
      enum: ['east', 'south', 'west', 'north'],
      enumNames: ['\u4E1C', '\u5357', '\u897F', '\u5317'],
    });
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.info(JSON.stringify(data));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        onMount={onMount}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u;return y.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return S=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var a=b(r);if(a&&a.has(m))return a.get(m);var n={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in m)if(s!=="default"&&Object.prototype.hasOwnProperty.call(m,s)){var g=c?Object.getOwnPropertyDescriptor(m,s):null;g&&(g.get||g.set)?Object.defineProperty(n,s,g):n[s]=m[s]}return n.default=m,a&&a.set(m,n),n},b=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,a=new WeakMap;return(b=function(c){return c?a:r})(m)},f=e("K+nK"),w.t0=f,w.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=S,w.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return w.t3=w.sent,h=(0,w.t2)(w.t3),l={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},p=function(){var m=(0,h.useForm)();return i.default.createElement(h.default,{form:m,schema:l})},u=p,w.abrupt("return",u);case 17:case"end":return w.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    checkbox1: {
      title: '\u5C55\u793A\u66F4\u591A\u5185\u5BB9',
      type: 'boolean',
    },
    select1: {
      title: '\u8BF7\u5047\u539F\u56E0',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u75C5\u5047', '\u6709\u4E8B', '\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)'],
      hidden: '{{formData.checkbox1 !== true}}',
      widget: 'radio',
    },
    input1: {
      title: '\u5177\u4F53\u539F\u56E0',
      type: 'string',
      format: 'textarea',
      hidden: '{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}',
    },
  },
};

const Demo1 = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,S=function(){return i.default.createElement(h.default,{schema:b.expression})},p.abrupt("return",S);case 16:case"end":return p.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Oe},"json/schema.js":{import:"../json/schema",content:mn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u,I;return y.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return S=function(r,a){if(!a&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var n=b(a);if(n&&n.has(r))return n.get(r);var c={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in r)if(g!=="default"&&Object.prototype.hasOwnProperty.call(r,g)){var O=s?Object.getOwnPropertyDescriptor(r,g):null;O&&(O.get||O.set)?Object.defineProperty(c,g,O):c[g]=r[g]}return c.default=r,n&&n.set(r,c),c},b=function(r){if(typeof WeakMap!="function")return null;var a=new WeakMap,n=new WeakMap;return(b=function(s){return s?n:a})(r)},j.t0=S,j.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return j.t1=j.sent,f=(0,j.t0)(j.t1),j.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return i=j.sent,j.t2=S,j.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return j.t3=j.sent,h=(0,j.t2)(j.t3),l=function(r){return new Promise(function(a){return setTimeout(a,r)})},p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},u=function(){var r=(0,h.useForm)(),a=function(){r.setValues({input1:"hello world"}),l(3e3).then(function(c){r.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(h.default,{form:r,schema:p,onMount:a})},I=u,j.abrupt("return",I);case 20:case"end":return j.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const delay = ms => new Promise(res => setTimeout(res, ms));

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u9009\u62E9\u6846',
      description: '\u52A0\u8F7D\u4E2D...',
      type: 'string',
      enum: [],
      widget: 'radio',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setValues({ input1: 'hello world' });

    delay(3000).then(_ => {
      form.setSchemaByPath('select1', {
        description: '',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
      });
    });
  };

  return <FormRender form={form} schema={schema} onMount={onMount} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.13"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return i.default.createElement(h.default,{schema:b})},l=S,u.abrupt("return",l);case 15:case"end":return u.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'cardList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return i.default.createElement(h.default,{schema:b})},l=S,u.abrupt("return",l);case 15:case"end":return u.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'simpleList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tableList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return i.default.createElement(h.default,{schema:b})},l=S,u.abrupt("return",l);case 15:case"end":return u.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'tableList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"drawerList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return i.default.createElement(h.default,{schema:b})},l=S,u.abrupt("return",l);case 15:case"end":return u.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'drawerList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'simpleList',
            props: {
              hideMove: true,
            },
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),window.hello=function(I){var w=I.value;console.log(w)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"virtualList",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return i.default.createElement(h.default,{schema:b})},l=S,u.abrupt("return",l);case 16:case"end":return u.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

window.hello = ({ value }) => {
  console.log(value);
};

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'virtualList',
      itemProps: {
        buttons: [
          {
            callback: 'hello',
            text: '\u590D\u5236',
          },
        ],
      },
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"mapping-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u,I,w,j;return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return p=function(n,c){if(!c&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var s=l(c);if(s&&s.has(n))return s.get(n);var g={},O=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in n)if(N!=="default"&&Object.prototype.hasOwnProperty.call(n,N)){var $=O?Object.getOwnPropertyDescriptor(n,N):null;$&&($.get||$.set)?Object.defineProperty(g,N,$):g[N]=n[N]}return g.default=n,s&&s.set(n,g),g},l=function(n){if(typeof WeakMap!="function")return null;var c=new WeakMap,s=new WeakMap;return(l=function(O){return O?s:c})(n)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,i=(0,r.t0)(r.t1),r.t2=f,r.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return r.t3=r.sent,h=(0,r.t2)(r.t3),r.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=r.sent,r.t4=p,r.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return r.t5=r.sent,S=(0,r.t4)(r.t5),u=function(n){var c=n.schema;return c.$id==="#"?h.default.createElement("div",null,n.children):h.default.createElement("div",null,"my custom object:",n.children)},I={type:"object",properties:{object2:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",type:"string"}}}},labelWidth:120,displayType:"row"},w=function(){var n=(0,S.useForm)(),c=function(g,O){console.log("formData:",g,"errors",O)};return h.default.createElement("div",null,h.default.createElement(S.default,{form:n,schema:I,onFinish:c,mapping:{object:"CustomComA"},widgets:{CustomComA:u}}),h.default.createElement(i.default,{type:"primary",onClick:n.submit},"\u63D0\u4EA4"))},j=w,r.abrupt("return",j);case 28:case"end":return r.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const CustomComA = props => {
  const { schema } = props;
  if (schema.$id === '#') {
    return <div>{props.children}</div>;
  }
  return (
    <div>
      my custom object:
      {props.children}
    </div>
  );
};

const schema = {
  type: 'object',
  properties: {
    object2: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u8F93\u5165\u6846',
          type: 'string',
        },
      },
    },
  },
  labelWidth: 120,
  displayType: 'row',
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };
  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        mapping={{ object: 'CustomComA' }}
        widgets={{ CustomComA }}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},"react-dom":{version:">=16.8.0"}},identifier:"mapping-demo"}},"watch-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u;return y.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return S=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var a=b(r);if(a&&a.has(m))return a.get(m);var n={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in m)if(s!=="default"&&Object.prototype.hasOwnProperty.call(m,s)){var g=c?Object.getOwnPropertyDescriptor(m,s):null;g&&(g.get||g.set)?Object.defineProperty(n,s,g):n[s]=m[s]}return n.default=m,a&&a.set(m,n),n},b=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,a=new WeakMap;return(b=function(c){return c?a:r})(m)},w.t0=S,w.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return w.t1=w.sent,f=(0,w.t0)(w.t1),w.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return i=w.sent,w.t2=S,w.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return w.t3=w.sent,h=(0,w.t2)(w.t3),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},p=function(){var m=(0,h.useForm)(),r={"#":function(n){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",n)},input1:function(n){m.setValueByPath("input2",n)}};return f.default.createElement(h.default,{form:m,schema:l,watch:r})},u=p,w.abrupt("return",u);case 19:case"end":return w.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const watch = {
    // # \u4E3A\u5168\u5C40
    '#': val => {
      console.log('\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A', val);
    },
    input1: val => {
      form.setValueByPath('input2', val);
    },
  };

  return <FormRender form={form} schema={schema} watch={watch} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.13"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u,I,w;return y.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return p=function(a,n){if(!n&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var c=l(n);if(c&&c.has(a))return c.get(a);var s={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var O in a)if(O!=="default"&&Object.prototype.hasOwnProperty.call(a,O)){var N=g?Object.getOwnPropertyDescriptor(a,O):null;N&&(N.get||N.set)?Object.defineProperty(s,O,N):s[O]=a[O]}return s.default=a,c&&c.set(a,s),s},l=function(a){if(typeof WeakMap!="function")return null;var n=new WeakMap,c=new WeakMap;return(l=function(g){return g?c:n})(a)},f=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=f,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,i=(0,m.t0)(m.t1),m.t2=p,m.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return m.t3=m.sent,h=(0,m.t2)(m.t3),m.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=m.sent,m.t4=p,m.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return m.t5=m.sent,S=(0,m.t4)(m.t5),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},I=function(){var a=(0,S.useForm)(),n=function(g,O){O.length>0?alert("errorFields:"+JSON.stringify(O)):alert("formData:"+JSON.stringify(g,null,2))},c={input1:function(g){g&&g.length>2?a.setSchemaByPath("obj1.select",function(O){var N=O.enumNames;return{enumNames:N.map(function($){return $+"a"})}}):a.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return h.default.createElement("div",null,h.default.createElement(S.default,{form:a,schema:u,onFinish:n,watch:c}),h.default.createElement(i.default,{type:"",style:{marginRight:8},onClick:function(){return a.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),h.default.createElement(i.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4"))},w=I,m.abrupt("return",w);case 27:case"end":return m.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          widget: 'radio',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errorFields) => {
    if (errorFields.length > 0) {
      alert('errorFields:' + JSON.stringify(errorFields));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  const watch = {
    input1: val => {
      if (val && val.length > 2) {
        form.setSchemaByPath('obj1.select', ({ enumNames }) => {
          return {
            enumNames: enumNames.map(item => item + 'a'),
          };
        });
      } else {
        form.setSchemaByPath('obj1.select', { enumNames: ['\u65E9', '\u4E2D', '\u665A'] });
      }
    },
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        watch={watch}
      />
      <Button
        type=""
        style={{ marginRight: 8 }}
        onClick={() =>
          form.setSchemaByPath('input2', {
            title: '\u7F16\u8F91\u6846',
            format: 'textarea',
          })
        }
      >
        \u5C06 input \u6539\u4E3A textarea
      </Button>
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u,I,w,j,m,r;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return I=function(s,g){if(!g&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var O=u(g);if(O&&O.has(s))return O.get(s);var N={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var L in s)if(L!=="default"&&Object.prototype.hasOwnProperty.call(s,L)){var X=$?Object.getOwnPropertyDescriptor(s,L):null;X&&(X.get||X.set)?Object.defineProperty(N,L,X):N[L]=s[L]}return N.default=s,O&&O.set(s,N),N},u=function(s){if(typeof WeakMap!="function")return null;var g=new WeakMap,O=new WeakMap;return(u=function($){return $?O:g})(s)},f=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=f,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return n.t2=f,n.next=15,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 15:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.t4=f,n.next=20,e.e(89).then(e.bind(null,"0Owb"));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=f,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return l=n.sent,n.t8=I,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,p=(0,n.t8)(n.t9),w={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},j=function(s){return console.log("widget props:",s),S.default.createElement(h.default,(0,b.default)({addonBefore:"https://",addonAfter:".com"},s))},m=function(){var s=(0,p.useForm)();return S.default.createElement("div",null,S.default.createElement(p.default,{form:s,schema:w,widgets:{site:j},onFinish:function(O){return alert(JSON.stringify(O,null,2))}}),S.default.createElement(i.default,{type:"primary",onClick:s.submit},"\u63D0\u4EA4"))},r=m,n.abrupt("return",r);case 40:case"end":return n.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Input, Button } from 'antd';
import Form, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    select: {
      title: '\u5355\u9009',
      type: 'number',
      enum: [1, 2, 3],
      enumNames: ['\u9009\u98791', '\u9009\u98792', '\u9009\u98793'],
    },
  },
};

const SiteInput = props => {
  console.log('widget props:', props);
  return <Input addonBefore="https://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  return (
    <div>
      <Form
        form={form}
        schema={schema}
        widgets={{ site: SiteInput }}
        onFinish={formData => alert(JSON.stringify(formData, null, 2))}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"form-render-dependencies":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"ODQR"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:In}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-dependencies"}},"form-render-hideself":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"qCe5"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:On}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-hideself"}},"measure-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u,I,w;return y.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return u=function(a,n){if(!n&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var c=p(n);if(c&&c.has(a))return c.get(a);var s={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var O in a)if(O!=="default"&&Object.prototype.hasOwnProperty.call(a,O)){var N=g?Object.getOwnPropertyDescriptor(a,O):null;N&&(N.get||N.set)?Object.defineProperty(s,O,N):s[O]=a[O]}return s.default=a,c&&c.set(a,s),s},p=function(a){if(typeof WeakMap!="function")return null;var n=new WeakMap,c=new WeakMap;return(p=function(g){return g?c:n})(a)},f=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=f,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,i=(0,m.t0)(m.t1),m.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=f,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,h=(0,m.t2)(m.t3),m.t4=u,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,b=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return S=m.sent,m.t6=u,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,l=(0,m.t6)(m.t7),I=function(){var a=(0,l.useForm)({logOnMount:function(g){console.log("onMount",g)},logOnSubmit:function(g){console.log("onSubmit",g)}}),n={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},c=function(g,O){O.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(O.map(function(N){return N.name}))):h.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return b.default.createElement("div",null,b.default.createElement(l.default,{id:"my-demo-form",form:a,schema:n,onFinish:c}),b.default.createElement(i.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},w=I,m.abrupt("return",w);case 33:case"end":return m.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm({
    logOnMount: info => {
      console.log('onMount', info);
    },
    logOnSubmit: info => {
      console.log('onSubmit', info);
    },
  });

  const schema = {
    type: 'object',
    properties: {
      input1: {
        title: '\u8F93\u5165\u6846',
        required: true,
        type: 'string',
      },
      select1: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u5DE6', '\u4E2D', '\u53F3'],
        widget: 'radio',
      },
    },
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.success('\u63D0\u4EA4\u6210\u529F\uFF01');
    }
  };

  return (
    <div>
      <FormRender
        id="my-demo-form"
        form={form}
        schema={schema}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u;return y.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return p=function(){var m=(0,h.useForm)(),r=function(n,c){c.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(c))):alert(JSON.stringify(n))};return i.default.createElement("div",null,i.default.createElement(h.default,{form:m,schema:l,onFinish:r}),i.default.createElement("button",{onClick:m.submit},"\u63D0\u4EA4"))},S=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var a=b(r);if(a&&a.has(m))return a.get(m);var n={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in m)if(s!=="default"&&Object.prototype.hasOwnProperty.call(m,s)){var g=c?Object.getOwnPropertyDescriptor(m,s):null;g&&(g.get||g.set)?Object.defineProperty(n,s,g):n[s]=m[s]}return n.default=m,a&&a.set(m,n),n},b=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,a=new WeakMap;return(b=function(c){return c?a:r})(m)},f=e("K+nK"),w.t0=f,w.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=S,w.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return w.t3=w.sent,h=(0,w.t2)(w.t3),l={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},u=p,w.abrupt("return",u);case 17:case"end":return w.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const form = useForm(); // 2. \u83B7\u53D6 form \u5B9E\u4F8B\uFF0C\u73B0\u5728\u6240\u6709\u8868\u5355\u65B9\u6CD5\u90FD\u6302\u5728\u4E0A\u9762
  // 3 onSubmit \u7684\u5165\u53C2
  const onSubmit = (formData, valid) => {
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };
  return (
    <div>
      <FormRender
        form={form} // 4 \u8865\u4E0A
        schema={schema}
        onFinish={onSubmit} // 5. \u8865\u4E0A
        // formData={formData} // 6. \u5E72\u6389
        // onChange={setData}
        // onValidate={setValid}
      />
      <button onClick={form.submit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u,I,w,j,m,r;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return I=function(s,g){if(!g&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var O=u(g);if(O&&O.has(s))return O.get(s);var N={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var L in s)if(L!=="default"&&Object.prototype.hasOwnProperty.call(s,L)){var X=$?Object.getOwnPropertyDescriptor(s,L):null;X&&(X.get||X.set)?Object.defineProperty(N,L,X):N[L]=s[L]}return N.default=s,O&&O.set(s,N),N},u=function(s){if(typeof WeakMap!="function")return null;var g=new WeakMap,O=new WeakMap;return(u=function($){return $?O:g})(s)},f=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=f,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=f,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=f,n.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=I,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return l=n.sent,n.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=n.sent,w=b.default.TextArea,j={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},m=function(){var s=(0,S.useState)(JSON.stringify(j)),g=(0,h.default)(s,2),O=g[0],N=g[1],$=(0,S.useState)({}),L=(0,h.default)($,2),X=L[0],We=L[1],qe=function(){try{var _e=(0,p.updateSchemaToNewVersion)(JSON.parse(O));We(_e)}catch(pt){console.log(pt)}},pn=function(_e){N(_e.target.value)},hn=function(){N(JSON.stringify(JSON.parse(O),null,2))};return S.default.createElement("div",null,S.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),S.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:O,onChange:pn}),S.default.createElement(i.default,{style:{marginRight:12},onClick:hn},"\u683C\u5F0F\u5316\u65E7schema"),S.default.createElement(i.default,{type:"primary",onClick:qe},"\u751F\u6210\u65B0\u7248schema"),S.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify(X,null,2)}))},r=m,n.abrupt("return",r);case 38:case"end":return n.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from '../../../packages/form-render/src/utils.js';
const TextArea = Input.TextArea;

const old = {
  type: 'object',
  properties: {
    number: {
      title: '\u6570\u5B57\u8F93\u5165\u6846',
      type: 'number',
      'ui:disabled': true,
    },
    checkbox: {
      title: '\u662F\u5426\u9009\u62E9',
      type: 'boolean',
      'ui:widget': 'switch',
    },
  },
  required: ['number'],
};

const Translator = () => {
  const [oldSchema, setOld] = useState(JSON.stringify(old));
  const [newSchema, setNew] = useState({});

  const handleClick = () => {
    try {
      const _newSchema = updateSchemaToNewVersion(JSON.parse(oldSchema));
      setNew(_newSchema);
    } catch (err) {
      console.log(err);
    }
  };

  const onOldChange = e => {
    setOld(e.target.value);
  };

  const formatOld = () => {
    setOld(JSON.stringify(JSON.parse(oldSchema), null, 2));
  };

  return (
    <div>
      <div>\u586B\u5165\u65E7\u7248schema\uFF1A</div>
      <TextArea
        style={{ minHeight: 400, marginTop: 12, marginBottom: 12 }}
        value={oldSchema}
        onChange={onOldChange}
      />
      <Button style={{ marginRight: 12 }} onClick={formatOld}>
        \u683C\u5F0F\u5316\u65E7schema
      </Button>
      <Button type="primary" onClick={handleClick}>
        \u751F\u6210\u65B0\u7248schema
      </Button>
      <TextArea
        style={{ minHeight: 400, marginTop: 12 }}
        value={JSON.stringify(newSchema, null, 2)}
      />
    </div>
  );
};

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:V}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u,I;return y.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return u=function(){var r=(0,h.useState)({}),a=(0,i.default)(r,2),n=a[0],c=a[1],s=(0,h.useState)([]),g=(0,i.default)(s,2),O=g[0],N=g[1],$=(0,h.useState)(!1),L=(0,i.default)($,2),X=L[0],We=L[1],qe=(0,b.useForm)({formData:n,onChange:c,onValidate:N,showValidate:X});(0,h.useEffect)(function(){qe.init()},[]);var pn=function(){We(!0),O.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(O))):alert(JSON.stringify(n))};return h.default.createElement("div",null,h.default.createElement(b.default,{form:qe,schema:p}),h.default.createElement("button",{onClick:pn},"\u63D0\u4EA4"))},l=function(r,a){if(!a&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var n=S(a);if(n&&n.has(r))return n.get(r);var c={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in r)if(g!=="default"&&Object.prototype.hasOwnProperty.call(r,g)){var O=s?Object.getOwnPropertyDescriptor(r,g):null;O&&(O.get||O.set)?Object.defineProperty(c,g,O):c[g]=r[g]}return c.default=r,n&&n.set(r,c),c},S=function(r){if(typeof WeakMap!="function")return null;var a=new WeakMap,n=new WeakMap;return(S=function(s){return s?n:a})(r)},f=e("K+nK"),j.t0=f,j.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return j.t1=j.sent,i=(0,j.t0)(j.t1),j.t2=l,j.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return j.t3=j.sent,h=(0,j.t2)(j.t3),j.t4=l,j.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return j.t5=j.sent,b=(0,j.t4)(j.t5),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},I=u,j.abrupt("return",I);case 22:case"end":return j.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const [formData, setData] = useState({});
  const [valid, setValid] = useState([]);
  const [showValidate, setShowValidate] = useState(false);

  const form = useForm({
    formData,
    onChange: setData,
    onValidate: setValid,
    showValidate,
  }); // 1. formData\u3001onChange \u548C onValidate \u4F5C\u4E3A useForm \u7684\u5165\u53C2\u4F20\u5165

  useEffect(() => {
    form.init();
  }, []);

  const onSubmit = () => {
    setShowValidate(true);
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };

  return (
    <div>
      <FormRender
        form={form} // 3. \u8865\u4E0A
        schema={schema}
        // formData={formData} // 4. \u5168\u653E\u5230 useForm \u91CC\u4E86
        // onChange={setData}
        // onValidate={setValid}
        // showValidate={showValidate}
      />
      <button onClick={onSubmit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,S=function(){return i.default.createElement(h.default,{schema:b.basic})},p.abrupt("return",S);case 16:case"end":return p.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Oe},"json/schema.js":{import:"../json/schema",content:mn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,S=function(){return i.default.createElement(h.default,{schema:b.titleTrick})},p.abrupt("return",S);case 16:case"end":return p.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Oe},"json/schema.js":{import:"../json/schema",content:mn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.13"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"BASV"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:on},"main.js":{import:"./main",content:xe},"json/simplest.json":{import:"./json/simplest.json",content:Bn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Nn},"monaco/index.js":{import:"./monaco",content:Sn},"theme.css":{import:"./theme.css",content:Te},"index.css":{import:"./index.css",content:nt}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.13"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"Wrpt"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Kn},"main.js":{import:"./main",content:tt},"json/simplest.json":{import:"./json/simplest.json",content:ct},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:rt},"monaco/index.js":{import:"./monaco",content:mt},"suggestionsMap.js":{import:"./suggestionsMap",content:Wn},"index.css":{import:"./index.css",content:at}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.13"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"7ZP+"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:zn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"CfUQ"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:ft}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"/usH"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"48jF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:xn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l,p,u,I;return y.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return f=e("K+nK"),j.t0=f,j.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return j.t1=j.sent,i=(0,j.t0)(j.t1),j.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(74)]).then(e.bind(null,"P2DI"));case 8:for(h=j.sent,b=[],S=0;S<6;S++)b.push({id:S.toString(),title:"\u6807\u9898".concat(S+1),created_at:new Date().getTime()});return l={type:"object",properties:{title:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},p=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(r,a){return i.default.createElement("a",{onClick:function(){return alert(r.title)}},"\u7F16\u8F91")}}],u=function(){var r=function(){return{rows:b,total:b.length}};return i.default.createElement(i.default.Fragment,null,i.default.createElement(h.Search,{schema:l,api:r}),i.default.createElement(h.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:p,rowKey:"id"}))},I=(0,h.withTable)(u),j.abrupt("return",I);case 16:case"end":return j.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Table, Search, withTable } from 'table-render';

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: \`\u6807\u9898\${i + 1}\`,
    created_at: new Date().getTime(),
  });
}

// \u8BE6\u7EC6\u53EF\u89C1 form-render \u7684\u4F7F\u7528
const schema = {
  type: 'object',
  properties: {
    title: {
      title: '\u6807\u9898',
      type: 'string',
      width: '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '30%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20 antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => <a onClick={() => alert(row.title)}>\u7F16\u8F91</a>,
  },
];

const Wrapper = () => {
  const searchApi = () => {
    return {
      rows: dataSource,
      total: dataSource.length,
    };
  };
  return (
    <>
      <Search schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </>
  );
};

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"table-render-test1":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"aMwh"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Un}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},identifier:"table-render-test1"}},"generator-demo":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){var f,i,h,b,S,l;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(73)]).then(e.bind(null,"nYSz"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},S=function(){return i.default.createElement("div",{style:{height:"80vh"}},i.default.createElement(h.default,{defaultValue:b}))},l=S,u.abrupt("return",l);case 15:case"end":return u.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const Demo = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator defaultValue={defaultValue} />
    </div>
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"PPgD"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:st}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.5.8"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"M63W"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:$n}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"SOdT"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:it},"index.less":{import:"./index.less",content:ln}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"jktF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Hn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.5.8"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(M.dynamic)({loader:function(){var T=Object(K.a)(y.a.mark(function F(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"TYW4"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},F)}));function D(){return T.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:ot},"index.less":{import:"./index.less",content:ln}},dependencies:{react:{version:">=16.14.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-playground"}}}},TIsu:function(Fn,cn,e){},Zs1V:function(Fn){Fn.exports=JSON.parse("{}")},p8sG:function(Fn,cn,e){"use strict";Fn.exports=e("80pN")},ymTJ:function(Fn,cn,e){"use strict";e.r(cn);var K=e("q1tI"),t=e.n(K),y=e("dEAq"),M=e.n(y),le=e("0zqC"),V=e("ZpkN"),sn=e("JjdP"),Ce=t.a.memo(sn.default["measure-demo"].component);cn.default=de=>(t.a.useEffect(()=>{de!=null&&de.location.hash&&y.AnchorLink.scrollToAnchor(decodeURIComponent(de.location.hash.slice(1)))},[]),t.a.createElement(t.a.Fragment,null,t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u8868\u5355\u5065\u5EB7\u5EA6--\u63D0\u6548"},t.a.createElement(y.AnchorLink,{to:"#\u8868\u5355\u5065\u5EB7\u5EA6--\u63D0\u6548","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u8868\u5355\u5065\u5EB7\u5EA6 & \u63D0\u6548"),t.a.createElement("p",null,`\u4E1A\u754C\u6709\u53E5\u8BDD\u53EB "You can't improve what you can't measure"\u3002\u5373\u662F\u8BF4\uFF0C\u5982\u679C\u65E0\u6CD5\u5EA6\u91CF\u4E00\u4EF6\u4E8B\uFF0C\u90A3\u6539\u5584\u4E5F\u65E0\u4ECE\u8C08\u8D77\u3002 FormRender \u4F5C\u4E3A\u8868\u5355\u63D0\u6548\u7684\u65B9\u6848\uFF0C\u63D0\u6548\u7684\u540C\u65F6\u4E5F\u9700\u8981\u7ED9\u51FA\u5408\u7406\u7684\u5EA6\u91CF\u6570\u636E\uFF0C\u5E2E\u52A9\u4F7F\u7528\u8005\u66F4\u597D\u5730\u8BA4\u77E5\u548C\u53D1\u73B0\u95EE\u9898\u3002`),t.a.createElement("p",null,"\u76EE\u524D FormRender \u63D0\u4F9B\u4E86\u4E24\u4E2A\u89E6\u53D1\u65F6\u673A\u4EE5\u53CA\u4E00\u7CFB\u5217\u76F8\u5173\u6570\u636E\u4F5C\u4E3A\u5BF9\u5916\u5F00\u653E\u63A5\u53E3\uFF0C\u63A8\u8350\u7528\u6237\u7528\u4E8E\u63A5\u5165\u9002\u5408\u81EA\u5DF1\u9879\u76EE\u7684\u57CB\u70B9 & \u6570\u636E\u76D1\u63A7\u65B9\u6848\u3002"),t.a.createElement("h2",{id:"roadmap"},t.a.createElement(y.AnchorLink,{to:"#roadmap","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"RoadMap"),t.a.createElement("p",null,"\u6570\u636E"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u4E00\u671F\u6211\u4EEC\u7684\u5EA6\u91CF\u4F1A\u662F\u66F4\u4E3A\u6574\u4F53\u7684\u6570\u636E\uFF1A\u4F8B\u5982\u8868\u5355\u7684\u62A5\u9519\u548C\u63D0\u4EA4\u662F\u5426\u6210\u529F\uFF0C\u6574\u4F53\u8868\u5355\u63D0\u4EA4\u65F6\u957F\u7B49\u3002"),t.a.createElement("li",null,"\u4E8C\u671F\u6211\u4EEC\u4F1A\u63D0\u4F9B\u66F4\u4E3A\u7EC6\u81F4\u7684\u6570\u636E\u8FDB\u4E00\u6B65\u627E\u5BFB\u5230\u5982\u679C\u4E00\u4E2A\u8868\u5355\u7684\u7528\u6237\u586B\u5199\u6548\u7387\u4F4E\u4E0B\uFF0C\u662F\u54EA\u4E2A\u8868\u5355\u539F\u4EF6\u548C\u64CD\u4F5C\u9020\u6210\u4E86\u7F13\u6162\uFF0C\u66F4\u8FDB\u4E00\u6B65\u4EE5\u6570\u636E\u7ED9\u51FA\u4F18\u5316\u7684\u6307\u5F15")),t.a.createElement("p",null,"\u65B9\u6848"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u4E00\u671F\u6211\u4EEC\u5BF9\u5916\u63D0\u4F9B\u4E86\u89E6\u53D1\u94A9\u5B50\u4EE5\u53CA\u6570\u636E\uFF0C\u8BA9\u7528\u6237\u81EA\u884C\u9009\u62E9\u76D1\u63A7\u548C\u6570\u636E\u57CB\u70B9\u65B9\u6848"),t.a.createElement("li",null,"\u4E8C\u671F\u6211\u4EEC\u4F1A\u7ED9\u51FA\u5168\u5957\u7684\u670D\u52A1\uFF0C\u53EA\u9700\u8981\u7B80\u5355\u6CE8\u518C\u5373\u53EF\u83B7\u53D6\u8868\u5355\u5065\u5EB7\u4FE1\u606F")),t.a.createElement("h2",{id:"\u4F7F\u7528"},t.a.createElement(y.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528"),t.a.createElement("p",null,"\u63D0\u4F9B\u4E86 ",t.a.createElement("code",null,"logOnMount")," \u548C ",t.a.createElement("code",null,"logOnSubmit")," \u4E24\u4E2A\u94A9\u5B50\u3002\u5728\u4F7F\u7528 ",t.a.createElement("code",null,"useForm")," \u65F6\u6CE8\u5165\uFF1A"),t.a.createElement(V.a,{code:`const form = useForm({
  logOnMount: info => {
    console.log('onMount', info);
  },
  logOnSubmit: info => {
    console.log('onSubmit', info);
  },
});`,lang:"js"}),t.a.createElement("p",null,"\u6700\u7B80\u4F7F\u7528\u6837\u4F8B\u5982\u4E0B\uFF0C\u6548\u679C\u89C1 console")),t.a.createElement(le.default,sn.default["measure-demo"].previewerProps,t.a.createElement(Ce,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("h3",{id:"logonmount"},t.a.createElement(y.AnchorLink,{to:"#logonmount","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"logOnMount"),t.a.createElement("p",null,"\u4F1A\u5728\u8868\u5355\u9996\u6B21\u52A0\u8F7D\u65F6\u89E6\u53D1\uFF0C\u4E00\u822C\u4E5F\u5C31\u662F\u9875\u9762\u9996\u6B21\u52A0\u8F7D\u65F6\u3002\u6837\u4F8B\u7684\u5165\u53C2\u503C\u5982\u4E0B"),t.a.createElement("table",null,t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"\u53C2\u6570"),t.a.createElement("th",null,"\u63CF\u8FF0"))),t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"id")),t.a.createElement("td",null,"\u8868\u5355 id\uFF0C\u53EA\u5F53\u7528\u6237\u6CE8\u660E id \u65F6\u624D\u4F1A log")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"formData")),t.a.createElement("td",null,"\u8868\u5355\u503C")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"schema")),t.a.createElement("td",null,"\u8868\u5355\u534F\u8BAE")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"url")),t.a.createElement("td",null,"\u8868\u5355\u52A0\u8F7D\u7684\u9875\u9762\u5730\u5740")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"formMount")),t.a.createElement("td",null,"\u8868\u5355\u52A0\u8F7D\u7684\u65F6\u95F4\u70B9")))),t.a.createElement(V.a,{code:`{
  id: "my-demo-form",
  schema: "{type: 'object',properties: {input1: {title: '\u8F93\u5165\u6846',required: true,type: 'string'},select1:{title: '\u5355\u9009',... }",
  url: 'https://x-render.gitee.io/form-render/measure',
  formData: '{}',
  formMount: '2021-07-02 16:03:42',
};`,lang:"js"}),t.a.createElement("h3",{id:"logonsubmit"},t.a.createElement(y.AnchorLink,{to:"#logonsubmit","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"logOnSubmit"),t.a.createElement("p",null,"\u4F1A\u5728\u8868\u5355\u6BCF\u6B21\u63D0\u4EA4\u65F6\u89E6\u53D1\u3002\u6837\u4F8B\u7684\u5165\u53C2\u503C\u5982\u4E0B"),t.a.createElement("table",null,t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"\u53C2\u6570"),t.a.createElement("th",null,"\u63CF\u8FF0"))),t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"duration")),t.a.createElement("td",null,"\u8868\u5355\u586B\u5199\u65F6\u957F")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"ms")),t.a.createElement("td",null,"duration \u7684\u65F6\u95F4\u6233\u5F62\u5F0F")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"numberOfSubmits")),t.a.createElement("td",null,"\u4ECE\u9996\u6B21\u52A0\u8F7D\u5F00\u59CB\u63D0\u4EA4\u4E86\u51E0\u6B21")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"failedAttempts")),t.a.createElement("td",null,"\u4ECE\u9996\u6B21\u52A0\u8F7D\u5F00\u59CB\u63D0\u4EA4\u5931\u8D25\u4E86\u51E0\u6B21")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"errors")),t.a.createElement("td",null,"\u63D0\u4EA4\u5931\u8D25\u7684\u6821\u9A8C\u4FE1\u606F")))),t.a.createElement(V.a,{code:`{
  id: "my-demo-form", // \u5982\u679C\u6CE8\u660E\u8868\u5355id\uFF0C\u4F1A\u5728\u6B64\u5904\u5C55\u793A
  formMount: '2021-07-02 16:27:28', // \u8868\u5355\u9996\u6B21\u52A0\u8F7D\u7684\u65F6\u95F4\u70B9
  ms: 35598, // duration\u7684\u65F6\u95F4\u6233\u5F62\u5F0F
  duration: '00:00:35', // \u4ECE\u8868\u5355\u52A0\u8F7D/\u4E0A\u6B21\u63D0\u4EA4\u5B8C\u6210\u5F00\u59CB\u8BA1\u65F6\uFF0C\u5230\u672C\u6B21\u63D0\u4EA4\u4F7F\u7528\u7684\u65F6\u95F4
  numberOfSubmits: 1, // \u63D0\u4EA4\u7684\u6B21\u6570\uFF08\u5931\u8D25\u4E0E\u5426\uFF09
  failedAttempts: 0, // \u63D0\u4EA4\u5931\u8D25\u7684\u6B21\u6570\uFF08\u5373\u6709\u6821\u9A8C\u672A\u901A\u8FC7\uFF09
  url: 'https://x-render.gitee.io/form-render/measure', // \u8868\u5355\u5BF9\u5E94\u9875\u9762\u7684url
  formData: "{input1: '3123',select1: 'c'}",
  schema: "{ ... }", // \u8868\u5355\u534F\u8BAE
  errors: "[]", // \u6821\u9A8C\u672A\u901A\u8FC7\u65F6\uFF0C\u5C55\u793A\u62A5\u9519\u6821\u9A8C\u4FE1\u606F
};`,lang:"js"})))))}}]);
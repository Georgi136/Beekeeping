var xp=Object.defineProperty;var wp=(i,s,u)=>s in i?xp(i,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[s]=u;var je=(i,s,u)=>wp(i,typeof s!="symbol"?s+"":s,u);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))d(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function u(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(f){if(f.ep)return;f.ep=!0;const h=u(f);fetch(f.href,h)}})();var Sa={exports:{}},eo={},ja={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc;function kp(){if(zc)return ae;zc=1;var i=Symbol.for("react.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),v=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),N=Symbol.iterator;function R(S){return S===null||typeof S!="object"?null:(S=N&&S[N]||S["@@iterator"],typeof S=="function"?S:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,F={};function I(S,_,X){this.props=S,this.context=_,this.refs=F,this.updater=X||B}I.prototype.isReactComponent={},I.prototype.setState=function(S,_){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,_,"setState")},I.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function $(){}$.prototype=I.prototype;function G(S,_,X){this.props=S,this.context=_,this.refs=F,this.updater=X||B}var Z=G.prototype=new $;Z.constructor=G,M(Z,I.prototype),Z.isPureReactComponent=!0;var W=Array.isArray,ne=Object.prototype.hasOwnProperty,de={current:null},ve={key:!0,ref:!0,__self:!0,__source:!0};function le(S,_,X){var ee,fe={},pe=null,ie=null;if(_!=null)for(ee in _.ref!==void 0&&(ie=_.ref),_.key!==void 0&&(pe=""+_.key),_)ne.call(_,ee)&&!ve.hasOwnProperty(ee)&&(fe[ee]=_[ee]);var ce=arguments.length-2;if(ce===1)fe.children=X;else if(1<ce){for(var ye=Array(ce),Ye=0;Ye<ce;Ye++)ye[Ye]=arguments[Ye+2];fe.children=ye}if(S&&S.defaultProps)for(ee in ce=S.defaultProps,ce)fe[ee]===void 0&&(fe[ee]=ce[ee]);return{$$typeof:i,type:S,key:pe,ref:ie,props:fe,_owner:de.current}}function Oe(S,_){return{$$typeof:i,type:S.type,key:_,ref:S.ref,props:S.props,_owner:S._owner}}function Be(S){return typeof S=="object"&&S!==null&&S.$$typeof===i}function it(S){var _={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(X){return _[X]})}var Pe=/\/+/g;function Ie(S,_){return typeof S=="object"&&S!==null&&S.key!=null?it(""+S.key):_.toString(36)}function _e(S,_,X,ee,fe){var pe=typeof S;(pe==="undefined"||pe==="boolean")&&(S=null);var ie=!1;if(S===null)ie=!0;else switch(pe){case"string":case"number":ie=!0;break;case"object":switch(S.$$typeof){case i:case s:ie=!0}}if(ie)return ie=S,fe=fe(ie),S=ee===""?"."+Ie(ie,0):ee,W(fe)?(X="",S!=null&&(X=S.replace(Pe,"$&/")+"/"),_e(fe,_,X,"",function(Ye){return Ye})):fe!=null&&(Be(fe)&&(fe=Oe(fe,X+(!fe.key||ie&&ie.key===fe.key?"":(""+fe.key).replace(Pe,"$&/")+"/")+S)),_.push(fe)),1;if(ie=0,ee=ee===""?".":ee+":",W(S))for(var ce=0;ce<S.length;ce++){pe=S[ce];var ye=ee+Ie(pe,ce);ie+=_e(pe,_,X,ye,fe)}else if(ye=R(S),typeof ye=="function")for(S=ye.call(S),ce=0;!(pe=S.next()).done;)pe=pe.value,ye=ee+Ie(pe,ce++),ie+=_e(pe,_,X,ye,fe);else if(pe==="object")throw _=String(S),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.");return ie}function Re(S,_,X){if(S==null)return S;var ee=[],fe=0;return _e(S,ee,"","",function(pe){return _.call(X,pe,fe++)}),ee}function oe(S){if(S._status===-1){var _=S._result;_=_(),_.then(function(X){(S._status===0||S._status===-1)&&(S._status=1,S._result=X)},function(X){(S._status===0||S._status===-1)&&(S._status=2,S._result=X)}),S._status===-1&&(S._status=0,S._result=_)}if(S._status===1)return S._result.default;throw S._result}var se={current:null},D={transition:null},K={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:D,ReactCurrentOwner:de};function A(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:Re,forEach:function(S,_,X){Re(S,function(){_.apply(this,arguments)},X)},count:function(S){var _=0;return Re(S,function(){_++}),_},toArray:function(S){return Re(S,function(_){return _})||[]},only:function(S){if(!Be(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},ae.Component=I,ae.Fragment=u,ae.Profiler=f,ae.PureComponent=G,ae.StrictMode=d,ae.Suspense=x,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,ae.act=A,ae.cloneElement=function(S,_,X){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ee=M({},S.props),fe=S.key,pe=S.ref,ie=S._owner;if(_!=null){if(_.ref!==void 0&&(pe=_.ref,ie=de.current),_.key!==void 0&&(fe=""+_.key),S.type&&S.type.defaultProps)var ce=S.type.defaultProps;for(ye in _)ne.call(_,ye)&&!ve.hasOwnProperty(ye)&&(ee[ye]=_[ye]===void 0&&ce!==void 0?ce[ye]:_[ye])}var ye=arguments.length-2;if(ye===1)ee.children=X;else if(1<ye){ce=Array(ye);for(var Ye=0;Ye<ye;Ye++)ce[Ye]=arguments[Ye+2];ee.children=ce}return{$$typeof:i,type:S.type,key:fe,ref:pe,props:ee,_owner:ie}},ae.createContext=function(S){return S={$$typeof:v,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:h,_context:S},S.Consumer=S},ae.createElement=le,ae.createFactory=function(S){var _=le.bind(null,S);return _.type=S,_},ae.createRef=function(){return{current:null}},ae.forwardRef=function(S){return{$$typeof:j,render:S}},ae.isValidElement=Be,ae.lazy=function(S){return{$$typeof:P,_payload:{_status:-1,_result:S},_init:oe}},ae.memo=function(S,_){return{$$typeof:k,type:S,compare:_===void 0?null:_}},ae.startTransition=function(S){var _=D.transition;D.transition={};try{S()}finally{D.transition=_}},ae.unstable_act=A,ae.useCallback=function(S,_){return se.current.useCallback(S,_)},ae.useContext=function(S){return se.current.useContext(S)},ae.useDebugValue=function(){},ae.useDeferredValue=function(S){return se.current.useDeferredValue(S)},ae.useEffect=function(S,_){return se.current.useEffect(S,_)},ae.useId=function(){return se.current.useId()},ae.useImperativeHandle=function(S,_,X){return se.current.useImperativeHandle(S,_,X)},ae.useInsertionEffect=function(S,_){return se.current.useInsertionEffect(S,_)},ae.useLayoutEffect=function(S,_){return se.current.useLayoutEffect(S,_)},ae.useMemo=function(S,_){return se.current.useMemo(S,_)},ae.useReducer=function(S,_,X){return se.current.useReducer(S,_,X)},ae.useRef=function(S){return se.current.useRef(S)},ae.useState=function(S){return se.current.useState(S)},ae.useSyncExternalStore=function(S,_,X){return se.current.useSyncExternalStore(S,_,X)},ae.useTransition=function(){return se.current.useTransition()},ae.version="18.3.1",ae}var Ic;function Oa(){return Ic||(Ic=1,ja.exports=kp()),ja.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc;function Sp(){if(Dc)return eo;Dc=1;var i=Oa(),s=Symbol.for("react.element"),u=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,f=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function v(j,x,k){var P,N={},R=null,B=null;k!==void 0&&(R=""+k),x.key!==void 0&&(R=""+x.key),x.ref!==void 0&&(B=x.ref);for(P in x)d.call(x,P)&&!h.hasOwnProperty(P)&&(N[P]=x[P]);if(j&&j.defaultProps)for(P in x=j.defaultProps,x)N[P]===void 0&&(N[P]=x[P]);return{$$typeof:s,type:j,key:R,ref:B,props:N,_owner:f.current}}return eo.Fragment=u,eo.jsx=v,eo.jsxs=v,eo}var Oc;function jp(){return Oc||(Oc=1,Sa.exports=Sp()),Sa.exports}var l=jp(),w=Oa(),xi={},Ea={exports:{}},ot={},Ca={exports:{}},Na={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc;function Ep(){return Fc||(Fc=1,(function(i){function s(D,K){var A=D.length;D.push(K);e:for(;0<A;){var S=A-1>>>1,_=D[S];if(0<f(_,K))D[S]=K,D[A]=_,A=S;else break e}}function u(D){return D.length===0?null:D[0]}function d(D){if(D.length===0)return null;var K=D[0],A=D.pop();if(A!==K){D[0]=A;e:for(var S=0,_=D.length,X=_>>>1;S<X;){var ee=2*(S+1)-1,fe=D[ee],pe=ee+1,ie=D[pe];if(0>f(fe,A))pe<_&&0>f(ie,fe)?(D[S]=ie,D[pe]=A,S=pe):(D[S]=fe,D[ee]=A,S=ee);else if(pe<_&&0>f(ie,A))D[S]=ie,D[pe]=A,S=pe;else break e}}return K}function f(D,K){var A=D.sortIndex-K.sortIndex;return A!==0?A:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var v=Date,j=v.now();i.unstable_now=function(){return v.now()-j}}var x=[],k=[],P=1,N=null,R=3,B=!1,M=!1,F=!1,I=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(D){for(var K=u(k);K!==null;){if(K.callback===null)d(k);else if(K.startTime<=D)d(k),K.sortIndex=K.expirationTime,s(x,K);else break;K=u(k)}}function W(D){if(F=!1,Z(D),!M)if(u(x)!==null)M=!0,oe(ne);else{var K=u(k);K!==null&&se(W,K.startTime-D)}}function ne(D,K){M=!1,F&&(F=!1,$(le),le=-1),B=!0;var A=R;try{for(Z(K),N=u(x);N!==null&&(!(N.expirationTime>K)||D&&!it());){var S=N.callback;if(typeof S=="function"){N.callback=null,R=N.priorityLevel;var _=S(N.expirationTime<=K);K=i.unstable_now(),typeof _=="function"?N.callback=_:N===u(x)&&d(x),Z(K)}else d(x);N=u(x)}if(N!==null)var X=!0;else{var ee=u(k);ee!==null&&se(W,ee.startTime-K),X=!1}return X}finally{N=null,R=A,B=!1}}var de=!1,ve=null,le=-1,Oe=5,Be=-1;function it(){return!(i.unstable_now()-Be<Oe)}function Pe(){if(ve!==null){var D=i.unstable_now();Be=D;var K=!0;try{K=ve(!0,D)}finally{K?Ie():(de=!1,ve=null)}}else de=!1}var Ie;if(typeof G=="function")Ie=function(){G(Pe)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Re=_e.port2;_e.port1.onmessage=Pe,Ie=function(){Re.postMessage(null)}}else Ie=function(){I(Pe,0)};function oe(D){ve=D,de||(de=!0,Ie())}function se(D,K){le=I(function(){D(i.unstable_now())},K)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(D){D.callback=null},i.unstable_continueExecution=function(){M||B||(M=!0,oe(ne))},i.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<D?Math.floor(1e3/D):5},i.unstable_getCurrentPriorityLevel=function(){return R},i.unstable_getFirstCallbackNode=function(){return u(x)},i.unstable_next=function(D){switch(R){case 1:case 2:case 3:var K=3;break;default:K=R}var A=R;R=K;try{return D()}finally{R=A}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var A=R;R=D;try{return K()}finally{R=A}},i.unstable_scheduleCallback=function(D,K,A){var S=i.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?S+A:S):A=S,D){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=A+_,D={id:P++,callback:K,priorityLevel:D,startTime:A,expirationTime:_,sortIndex:-1},A>S?(D.sortIndex=A,s(k,D),u(x)===null&&D===u(k)&&(F?($(le),le=-1):F=!0,se(W,A-S))):(D.sortIndex=_,s(x,D),M||B||(M=!0,oe(ne))),D},i.unstable_shouldYield=it,i.unstable_wrapCallback=function(D){var K=R;return function(){var A=R;R=K;try{return D.apply(this,arguments)}finally{R=A}}}})(Na)),Na}var Mc;function Cp(){return Mc||(Mc=1,Ca.exports=Ep()),Ca.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac;function Np(){if(Ac)return ot;Ac=1;var i=Oa(),s=Cp();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,f={};function h(e,t){v(e,t),v(e+"Capture",t)}function v(e,t){for(f[e]=t,e=0;e<t.length;e++)d.add(t[e])}var j=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,k=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},N={};function R(e){return x.call(N,e)?!0:x.call(P,e)?!1:k.test(e)?N[e]=!0:(P[e]=!0,!1)}function B(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M(e,t,r,n){if(t===null||typeof t>"u"||B(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function F(e,t,r,n,o,a,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=c}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new F(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new F(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new F(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new F(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new F(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new F(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new F(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new F(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new F(e,5,!1,e.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function G(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($,G);I[t]=new F(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($,G);I[t]=new F(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($,G);I[t]=new F(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new F(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new F(e,1,!1,e.toLowerCase(),null,!0,!0)});function Z(e,t,r,n){var o=I.hasOwnProperty(t)?I[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M(t,r,o,n)&&(r=null),n||o===null?R(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var W=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),de=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),Oe=Symbol.for("react.profiler"),Be=Symbol.for("react.provider"),it=Symbol.for("react.context"),Pe=Symbol.for("react.forward_ref"),Ie=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),D=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,S;function _(e){if(S===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);S=t&&t[1]||""}return`
`+S+e}var X=!1;function ee(e,t){if(!e||X)return"";X=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(b){var n=b}Reflect.construct(e,[],t)}else{try{t.call()}catch(b){n=b}e.call(t.prototype)}else{try{throw Error()}catch(b){n=b}e()}}catch(b){if(b&&n&&typeof b.stack=="string"){for(var o=b.stack.split(`
`),a=n.stack.split(`
`),c=o.length-1,m=a.length-1;1<=c&&0<=m&&o[c]!==a[m];)m--;for(;1<=c&&0<=m;c--,m--)if(o[c]!==a[m]){if(c!==1||m!==1)do if(c--,m--,0>m||o[c]!==a[m]){var g=`
`+o[c].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=c&&0<=m);break}}}finally{X=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?_(e):""}function fe(e){switch(e.tag){case 5:return _(e.type);case 16:return _("Lazy");case 13:return _("Suspense");case 19:return _("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ve:return"Fragment";case de:return"Portal";case Oe:return"Profiler";case le:return"StrictMode";case Ie:return"Suspense";case _e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case it:return(e.displayName||"Context")+".Consumer";case Be:return(e._context.displayName||"Context")+".Provider";case Pe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Re:return t=e.displayName||null,t!==null?t:pe(e.type)||"Memo";case oe:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}function ie(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(t);case 8:return t===le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ye(e){var t=ye(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(c){n=""+c,a.call(this,c)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dr(e){e._valueTracker||(e._valueTracker=Ye(e))}function ao(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ye(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hn(e,t){var r=t.checked;return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function so(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=ce(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fr(e,t){t=t.checked,t!=null&&Z(e,"checked",t,!1)}function hr(e,t){Fr(e,t);var r=ce(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mr(e,t.type,r):t.hasOwnProperty("defaultValue")&&Mr(e,t.type,ce(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qt(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Mr(e,t,r){(t!=="number"||Or(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var qt=Array.isArray;function Kt(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ce(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function p(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return A({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function te(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(u(92));if(qt(r)){if(1<r.length)throw Error(u(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ce(r)}}function Ve(e,t){var r=ce(t.value),n=ce(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function dt(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var co,qa=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=co.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sd=["Webkit","ms","Moz","O"];Object.keys(vn).forEach(function(e){Sd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vn[t]=vn[e]})});function Ka(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||vn.hasOwnProperty(e)&&vn[e]?(""+t).trim():t+"px"}function Ga(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=Ka(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var jd=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ii(e,t){if(t){if(jd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function Di(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function Fi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mi=null,Ar=null,$r=null;function Ya(e){if(e=An(e)){if(typeof Mi!="function")throw Error(u(280));var t=e.stateNode;t&&(t=Io(t),Mi(e.stateNode,e.type,t))}}function Ja(e){Ar?$r?$r.push(e):$r=[e]:Ar=e}function Xa(){if(Ar){var e=Ar,t=$r;if($r=Ar=null,Ya(e),t)for(e=0;e<t.length;e++)Ya(t[e])}}function Za(e,t){return e(t)}function es(){}var Ai=!1;function ts(e,t,r){if(Ai)return e(t,r);Ai=!0;try{return Za(e,t,r)}finally{Ai=!1,(Ar!==null||$r!==null)&&(es(),Xa())}}function yn(e,t){var r=e.stateNode;if(r===null)return null;var n=Io(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(u(231,t,typeof r));return r}var $i=!1;if(j)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){$i=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{$i=!1}function Ed(e,t,r,n,o,a,c,m,g){var b=Array.prototype.slice.call(arguments,3);try{t.apply(r,b)}catch(L){this.onError(L)}}var wn=!1,fo=null,po=!1,Ui=null,Cd={onError:function(e){wn=!0,fo=e}};function Nd(e,t,r,n,o,a,c,m,g){wn=!1,fo=null,Ed.apply(Cd,arguments)}function bd(e,t,r,n,o,a,c,m,g){if(Nd.apply(this,arguments),wn){if(wn){var b=fo;wn=!1,fo=null}else throw Error(u(198));po||(po=!0,Ui=b)}}function gr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function rs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ns(e){if(gr(e)!==e)throw Error(u(188))}function Pd(e){var t=e.alternate;if(!t){if(t=gr(e),t===null)throw Error(u(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var a=o.alternate;if(a===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===r)return ns(o),e;if(a===n)return ns(o),t;a=a.sibling}throw Error(u(188))}if(r.return!==n.return)r=o,n=a;else{for(var c=!1,m=o.child;m;){if(m===r){c=!0,r=o,n=a;break}if(m===n){c=!0,n=o,r=a;break}m=m.sibling}if(!c){for(m=a.child;m;){if(m===r){c=!0,r=a,n=o;break}if(m===n){c=!0,n=a,r=o;break}m=m.sibling}if(!c)throw Error(u(189))}}if(r.alternate!==n)throw Error(u(190))}if(r.tag!==3)throw Error(u(188));return r.stateNode.current===r?e:t}function os(e){return e=Pd(e),e!==null?is(e):null}function is(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=is(e);if(t!==null)return t;e=e.sibling}return null}var ls=s.unstable_scheduleCallback,as=s.unstable_cancelCallback,_d=s.unstable_shouldYield,Rd=s.unstable_requestPaint,Te=s.unstable_now,Td=s.unstable_getCurrentPriorityLevel,Bi=s.unstable_ImmediatePriority,ss=s.unstable_UserBlockingPriority,mo=s.unstable_NormalPriority,Ld=s.unstable_LowPriority,us=s.unstable_IdlePriority,ho=null,_t=null;function zd(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ho,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:Od,Id=Math.log,Dd=Math.LN2;function Od(e){return e>>>=0,e===0?32:31-(Id(e)/Dd|0)|0}var go=64,vo=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yo(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,a=e.pingedLanes,c=r&268435455;if(c!==0){var m=c&~o;m!==0?n=kn(m):(a&=c,a!==0&&(n=kn(a)))}else c=r&~o,c!==0?n=kn(c):a!==0&&(n=kn(a));if(n===0)return 0;if(t!==0&&t!==n&&(t&o)===0&&(o=n&-n,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-wt(t),o=1<<r,n|=e[r],t&=~o;return n}function Fd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Md(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var c=31-wt(a),m=1<<c,g=o[c];g===-1?((m&r)===0||(m&n)!==0)&&(o[c]=Fd(m,t)):g<=t&&(e.expiredLanes|=m),a&=~m}}function Hi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cs(){var e=go;return go<<=1,(go&4194240)===0&&(go=64),e}function Wi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Sn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=r}function Ad(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-wt(r),a=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~a}}function Vi(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-wt(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var ge=0;function ds(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var fs,Qi,ps,ms,hs,qi=!1,xo=[],Gt=null,Yt=null,Jt=null,jn=new Map,En=new Map,Xt=[],$d="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gs(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(t.pointerId)}}function Cn(e,t,r,n,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[o]},t!==null&&(t=An(t),t!==null&&Qi(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ud(e,t,r,n,o){switch(t){case"focusin":return Gt=Cn(Gt,e,t,r,n,o),!0;case"dragenter":return Yt=Cn(Yt,e,t,r,n,o),!0;case"mouseover":return Jt=Cn(Jt,e,t,r,n,o),!0;case"pointerover":var a=o.pointerId;return jn.set(a,Cn(jn.get(a)||null,e,t,r,n,o)),!0;case"gotpointercapture":return a=o.pointerId,En.set(a,Cn(En.get(a)||null,e,t,r,n,o)),!0}return!1}function vs(e){var t=vr(e.target);if(t!==null){var r=gr(t);if(r!==null){if(t=r.tag,t===13){if(t=rs(r),t!==null){e.blockedOn=t,hs(e.priority,function(){ps(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Gi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Oi=n,r.target.dispatchEvent(n),Oi=null}else return t=An(r),t!==null&&Qi(t),e.blockedOn=r,!1;t.shift()}return!0}function ys(e,t,r){wo(e)&&r.delete(t)}function Bd(){qi=!1,Gt!==null&&wo(Gt)&&(Gt=null),Yt!==null&&wo(Yt)&&(Yt=null),Jt!==null&&wo(Jt)&&(Jt=null),jn.forEach(ys),En.forEach(ys)}function Nn(e,t){e.blockedOn===t&&(e.blockedOn=null,qi||(qi=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Bd)))}function bn(e){function t(o){return Nn(o,e)}if(0<xo.length){Nn(xo[0],e);for(var r=1;r<xo.length;r++){var n=xo[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Gt!==null&&Nn(Gt,e),Yt!==null&&Nn(Yt,e),Jt!==null&&Nn(Jt,e),jn.forEach(t),En.forEach(t),r=0;r<Xt.length;r++)n=Xt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Xt.length&&(r=Xt[0],r.blockedOn===null);)vs(r),r.blockedOn===null&&Xt.shift()}var Ur=W.ReactCurrentBatchConfig,ko=!0;function Hd(e,t,r,n){var o=ge,a=Ur.transition;Ur.transition=null;try{ge=1,Ki(e,t,r,n)}finally{ge=o,Ur.transition=a}}function Wd(e,t,r,n){var o=ge,a=Ur.transition;Ur.transition=null;try{ge=4,Ki(e,t,r,n)}finally{ge=o,Ur.transition=a}}function Ki(e,t,r,n){if(ko){var o=Gi(e,t,r,n);if(o===null)fl(e,t,n,So,r),gs(e,n);else if(Ud(o,e,t,r,n))n.stopPropagation();else if(gs(e,n),t&4&&-1<$d.indexOf(e)){for(;o!==null;){var a=An(o);if(a!==null&&fs(a),a=Gi(e,t,r,n),a===null&&fl(e,t,n,So,r),a===o)break;o=a}o!==null&&n.stopPropagation()}else fl(e,t,n,null,r)}}var So=null;function Gi(e,t,r,n){if(So=null,e=Fi(n),e=vr(e),e!==null)if(t=gr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=rs(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return So=e,null}function xs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Td()){case Bi:return 1;case ss:return 4;case mo:case Ld:return 16;case us:return 536870912;default:return 16}default:return 16}}var Zt=null,Yi=null,jo=null;function ws(){if(jo)return jo;var e,t=Yi,r=t.length,n,o="value"in Zt?Zt.value:Zt.textContent,a=o.length;for(e=0;e<r&&t[e]===o[e];e++);var c=r-e;for(n=1;n<=c&&t[r-n]===o[a-n];n++);return jo=o.slice(e,1<n?1-n:void 0)}function Eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Co(){return!0}function ks(){return!1}function lt(e){function t(r,n,o,a,c){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(r=e[m],this[m]=r?r(a):a[m]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Co:ks,this.isPropagationStopped=ks,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),t}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=lt(Br),Pn=A({},Br,{view:0,detail:0}),Vd=lt(Pn),Xi,Zi,_n,No=A({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(Xi=e.screenX-_n.screenX,Zi=e.screenY-_n.screenY):Zi=Xi=0,_n=e),Xi)},movementY:function(e){return"movementY"in e?e.movementY:Zi}}),Ss=lt(No),Qd=A({},No,{dataTransfer:0}),qd=lt(Qd),Kd=A({},Pn,{relatedTarget:0}),el=lt(Kd),Gd=A({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),Yd=lt(Gd),Jd=A({},Br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xd=lt(Jd),Zd=A({},Br,{data:0}),js=lt(Zd),ef={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rf[e])?!!t[e]:!1}function tl(){return nf}var of=A({},Pn,{key:function(e){if(e.key){var t=ef[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tl,charCode:function(e){return e.type==="keypress"?Eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lf=lt(of),af=A({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Es=lt(af),sf=A({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tl}),uf=lt(sf),cf=A({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),df=lt(cf),ff=A({},No,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pf=lt(ff),mf=[9,13,27,32],rl=j&&"CompositionEvent"in window,Rn=null;j&&"documentMode"in document&&(Rn=document.documentMode);var hf=j&&"TextEvent"in window&&!Rn,Cs=j&&(!rl||Rn&&8<Rn&&11>=Rn),Ns=" ",bs=!1;function Ps(e,t){switch(e){case"keyup":return mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _s(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function gf(e,t){switch(e){case"compositionend":return _s(t);case"keypress":return t.which!==32?null:(bs=!0,Ns);case"textInput":return e=t.data,e===Ns&&bs?null:e;default:return null}}function vf(e,t){if(Hr)return e==="compositionend"||!rl&&Ps(e,t)?(e=ws(),jo=Yi=Zt=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cs&&t.locale!=="ko"?null:t.data;default:return null}}var yf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yf[e.type]:t==="textarea"}function Ts(e,t,r,n){Ja(n),t=To(t,"onChange"),0<t.length&&(r=new Ji("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Tn=null,Ln=null;function xf(e){Gs(e,0)}function bo(e){var t=Kr(e);if(ao(t))return e}function wf(e,t){if(e==="change")return t}var Ls=!1;if(j){var nl;if(j){var ol="oninput"in document;if(!ol){var zs=document.createElement("div");zs.setAttribute("oninput","return;"),ol=typeof zs.oninput=="function"}nl=ol}else nl=!1;Ls=nl&&(!document.documentMode||9<document.documentMode)}function Is(){Tn&&(Tn.detachEvent("onpropertychange",Ds),Ln=Tn=null)}function Ds(e){if(e.propertyName==="value"&&bo(Ln)){var t=[];Ts(t,Ln,e,Fi(e)),ts(xf,t)}}function kf(e,t,r){e==="focusin"?(Is(),Tn=t,Ln=r,Tn.attachEvent("onpropertychange",Ds)):e==="focusout"&&Is()}function Sf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bo(Ln)}function jf(e,t){if(e==="click")return bo(t)}function Ef(e,t){if(e==="input"||e==="change")return bo(t)}function Cf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:Cf;function zn(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!x.call(t,o)||!kt(e[o],t[o]))return!1}return!0}function Os(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fs(e,t){var r=Os(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Os(r)}}function Ms(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ms(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function As(){for(var e=window,t=Or();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Or(e.document)}return t}function il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nf(e){var t=As(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ms(r.ownerDocument.documentElement,r)){if(n!==null&&il(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,a=Math.min(n.start,o);n=n.end===void 0?a:Math.min(n.end,o),!e.extend&&a>n&&(o=n,n=a,a=o),o=Fs(r,a);var c=Fs(r,n);o&&c&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bf=j&&"documentMode"in document&&11>=document.documentMode,Wr=null,ll=null,In=null,al=!1;function $s(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;al||Wr==null||Wr!==Or(n)||(n=Wr,"selectionStart"in n&&il(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),In&&zn(In,n)||(In=n,n=To(ll,"onSelect"),0<n.length&&(t=new Ji("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Wr)))}function Po(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Vr={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},sl={},Us={};j&&(Us=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function _o(e){if(sl[e])return sl[e];if(!Vr[e])return e;var t=Vr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Us)return sl[e]=t[r];return e}var Bs=_o("animationend"),Hs=_o("animationiteration"),Ws=_o("animationstart"),Vs=_o("transitionend"),Qs=new Map,qs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(e,t){Qs.set(e,t),h(t,[e])}for(var ul=0;ul<qs.length;ul++){var cl=qs[ul],Pf=cl.toLowerCase(),_f=cl[0].toUpperCase()+cl.slice(1);er(Pf,"on"+_f)}er(Bs,"onAnimationEnd"),er(Hs,"onAnimationIteration"),er(Ws,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(Vs,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));function Ks(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,bd(n,t,void 0,e),e.currentTarget=null}function Gs(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var c=n.length-1;0<=c;c--){var m=n[c],g=m.instance,b=m.currentTarget;if(m=m.listener,g!==a&&o.isPropagationStopped())break e;Ks(o,m,b),a=g}else for(c=0;c<n.length;c++){if(m=n[c],g=m.instance,b=m.currentTarget,m=m.listener,g!==a&&o.isPropagationStopped())break e;Ks(o,m,b),a=g}}}if(po)throw e=Ui,po=!1,Ui=null,e}function we(e,t){var r=t[yl];r===void 0&&(r=t[yl]=new Set);var n=e+"__bubble";r.has(n)||(Ys(t,e,2,!1),r.add(n))}function dl(e,t,r){var n=0;t&&(n|=4),Ys(r,e,n,t)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function On(e){if(!e[Ro]){e[Ro]=!0,d.forEach(function(r){r!=="selectionchange"&&(Rf.has(r)||dl(r,!1,e),dl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ro]||(t[Ro]=!0,dl("selectionchange",!1,t))}}function Ys(e,t,r,n){switch(xs(t)){case 1:var o=Hd;break;case 4:o=Wd;break;default:o=Ki}r=o.bind(null,t,r,e),o=void 0,!$i||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function fl(e,t,r,n,o){var a=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var m=n.stateNode.containerInfo;if(m===o||m.nodeType===8&&m.parentNode===o)break;if(c===4)for(c=n.return;c!==null;){var g=c.tag;if((g===3||g===4)&&(g=c.stateNode.containerInfo,g===o||g.nodeType===8&&g.parentNode===o))return;c=c.return}for(;m!==null;){if(c=vr(m),c===null)return;if(g=c.tag,g===5||g===6){n=a=c;continue e}m=m.parentNode}}n=n.return}ts(function(){var b=a,L=Fi(r),z=[];e:{var T=Qs.get(e);if(T!==void 0){var U=Ji,V=e;switch(e){case"keypress":if(Eo(r)===0)break e;case"keydown":case"keyup":U=lf;break;case"focusin":V="focus",U=el;break;case"focusout":V="blur",U=el;break;case"beforeblur":case"afterblur":U=el;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Ss;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=uf;break;case Bs:case Hs:case Ws:U=Yd;break;case Vs:U=df;break;case"scroll":U=Vd;break;case"wheel":U=pf;break;case"copy":case"cut":case"paste":U=Xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Es}var Q=(t&4)!==0,Le=!Q&&e==="scroll",E=Q?T!==null?T+"Capture":null:T;Q=[];for(var y=b,C;y!==null;){C=y;var O=C.stateNode;if(C.tag===5&&O!==null&&(C=O,E!==null&&(O=yn(y,E),O!=null&&Q.push(Fn(y,O,C)))),Le)break;y=y.return}0<Q.length&&(T=new U(T,V,null,r,L),z.push({event:T,listeners:Q}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",T&&r!==Oi&&(V=r.relatedTarget||r.fromElement)&&(vr(V)||V[Ot]))break e;if((U||T)&&(T=L.window===L?L:(T=L.ownerDocument)?T.defaultView||T.parentWindow:window,U?(V=r.relatedTarget||r.toElement,U=b,V=V?vr(V):null,V!==null&&(Le=gr(V),V!==Le||V.tag!==5&&V.tag!==6)&&(V=null)):(U=null,V=b),U!==V)){if(Q=Ss,O="onMouseLeave",E="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(Q=Es,O="onPointerLeave",E="onPointerEnter",y="pointer"),Le=U==null?T:Kr(U),C=V==null?T:Kr(V),T=new Q(O,y+"leave",U,r,L),T.target=Le,T.relatedTarget=C,O=null,vr(L)===b&&(Q=new Q(E,y+"enter",V,r,L),Q.target=C,Q.relatedTarget=Le,O=Q),Le=O,U&&V)t:{for(Q=U,E=V,y=0,C=Q;C;C=Qr(C))y++;for(C=0,O=E;O;O=Qr(O))C++;for(;0<y-C;)Q=Qr(Q),y--;for(;0<C-y;)E=Qr(E),C--;for(;y--;){if(Q===E||E!==null&&Q===E.alternate)break t;Q=Qr(Q),E=Qr(E)}Q=null}else Q=null;U!==null&&Js(z,T,U,Q,!1),V!==null&&Le!==null&&Js(z,Le,V,Q,!0)}}e:{if(T=b?Kr(b):window,U=T.nodeName&&T.nodeName.toLowerCase(),U==="select"||U==="input"&&T.type==="file")var q=wf;else if(Rs(T))if(Ls)q=Ef;else{q=Sf;var Y=kf}else(U=T.nodeName)&&U.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(q=jf);if(q&&(q=q(e,b))){Ts(z,q,r,L);break e}Y&&Y(e,T,b),e==="focusout"&&(Y=T._wrapperState)&&Y.controlled&&T.type==="number"&&Mr(T,"number",T.value)}switch(Y=b?Kr(b):window,e){case"focusin":(Rs(Y)||Y.contentEditable==="true")&&(Wr=Y,ll=b,In=null);break;case"focusout":In=ll=Wr=null;break;case"mousedown":al=!0;break;case"contextmenu":case"mouseup":case"dragend":al=!1,$s(z,r,L);break;case"selectionchange":if(bf)break;case"keydown":case"keyup":$s(z,r,L)}var J;if(rl)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Hr?Ps(e,r)&&(re="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(re="onCompositionStart");re&&(Cs&&r.locale!=="ko"&&(Hr||re!=="onCompositionStart"?re==="onCompositionEnd"&&Hr&&(J=ws()):(Zt=L,Yi="value"in Zt?Zt.value:Zt.textContent,Hr=!0)),Y=To(b,re),0<Y.length&&(re=new js(re,e,null,r,L),z.push({event:re,listeners:Y}),J?re.data=J:(J=_s(r),J!==null&&(re.data=J)))),(J=hf?gf(e,r):vf(e,r))&&(b=To(b,"onBeforeInput"),0<b.length&&(L=new js("onBeforeInput","beforeinput",null,r,L),z.push({event:L,listeners:b}),L.data=J))}Gs(z,t)})}function Fn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function To(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=yn(e,r),a!=null&&n.unshift(Fn(e,a,o)),a=yn(e,t),a!=null&&n.push(Fn(e,a,o))),e=e.return}return n}function Qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Js(e,t,r,n,o){for(var a=t._reactName,c=[];r!==null&&r!==n;){var m=r,g=m.alternate,b=m.stateNode;if(g!==null&&g===n)break;m.tag===5&&b!==null&&(m=b,o?(g=yn(r,a),g!=null&&c.unshift(Fn(r,g,m))):o||(g=yn(r,a),g!=null&&c.push(Fn(r,g,m)))),r=r.return}c.length!==0&&e.push({event:t,listeners:c})}var Tf=/\r\n?/g,Lf=/\u0000|\uFFFD/g;function Xs(e){return(typeof e=="string"?e:""+e).replace(Tf,`
`).replace(Lf,"")}function Lo(e,t,r){if(t=Xs(t),Xs(e)!==t&&r)throw Error(u(425))}function zo(){}var pl=null,ml=null;function hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gl=typeof setTimeout=="function"?setTimeout:void 0,zf=typeof clearTimeout=="function"?clearTimeout:void 0,Zs=typeof Promise=="function"?Promise:void 0,If=typeof queueMicrotask=="function"?queueMicrotask:typeof Zs<"u"?function(e){return Zs.resolve(null).then(e).catch(Df)}:gl;function Df(e){setTimeout(function(){throw e})}function vl(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),bn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);bn(t)}function tr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function eu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),Rt="__reactFiber$"+qr,Mn="__reactProps$"+qr,Ot="__reactContainer$"+qr,yl="__reactEvents$"+qr,Of="__reactListeners$"+qr,Ff="__reactHandles$"+qr;function vr(e){var t=e[Rt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ot]||r[Rt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=eu(e);e!==null;){if(r=e[Rt])return r;e=eu(e)}return t}e=r,r=e.parentNode}return null}function An(e){return e=e[Rt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function Io(e){return e[Mn]||null}var xl=[],Gr=-1;function rr(e){return{current:e}}function ke(e){0>Gr||(e.current=xl[Gr],xl[Gr]=null,Gr--)}function xe(e,t){Gr++,xl[Gr]=e.current,e.current=t}var nr={},Qe=rr(nr),Ze=rr(!1),yr=nr;function Yr(e,t){var r=e.type.contextTypes;if(!r)return nr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in r)o[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function et(e){return e=e.childContextTypes,e!=null}function Do(){ke(Ze),ke(Qe)}function tu(e,t,r){if(Qe.current!==nr)throw Error(u(168));xe(Qe,t),xe(Ze,r)}function ru(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(u(108,ie(e)||"Unknown",o));return A({},r,n)}function Oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nr,yr=Qe.current,xe(Qe,e),xe(Ze,Ze.current),!0}function nu(e,t,r){var n=e.stateNode;if(!n)throw Error(u(169));r?(e=ru(e,t,yr),n.__reactInternalMemoizedMergedChildContext=e,ke(Ze),ke(Qe),xe(Qe,e)):ke(Ze),xe(Ze,r)}var Ft=null,Fo=!1,wl=!1;function ou(e){Ft===null?Ft=[e]:Ft.push(e)}function Mf(e){Fo=!0,ou(e)}function or(){if(!wl&&Ft!==null){wl=!0;var e=0,t=ge;try{var r=Ft;for(ge=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ft=null,Fo=!1}catch(o){throw Ft!==null&&(Ft=Ft.slice(e+1)),ls(Bi,or),o}finally{ge=t,wl=!1}}return null}var Jr=[],Xr=0,Mo=null,Ao=0,ft=[],pt=0,xr=null,Mt=1,At="";function wr(e,t){Jr[Xr++]=Ao,Jr[Xr++]=Mo,Mo=e,Ao=t}function iu(e,t,r){ft[pt++]=Mt,ft[pt++]=At,ft[pt++]=xr,xr=e;var n=Mt;e=At;var o=32-wt(n)-1;n&=~(1<<o),r+=1;var a=32-wt(t)+o;if(30<a){var c=o-o%5;a=(n&(1<<c)-1).toString(32),n>>=c,o-=c,Mt=1<<32-wt(t)+o|r<<o|n,At=a+e}else Mt=1<<a|r<<o|n,At=e}function kl(e){e.return!==null&&(wr(e,1),iu(e,1,0))}function Sl(e){for(;e===Mo;)Mo=Jr[--Xr],Jr[Xr]=null,Ao=Jr[--Xr],Jr[Xr]=null;for(;e===xr;)xr=ft[--pt],ft[pt]=null,At=ft[--pt],ft[pt]=null,Mt=ft[--pt],ft[pt]=null}var at=null,st=null,Se=!1,St=null;function lu(e,t){var r=vt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function au(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,st=tr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=xr!==null?{id:Mt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=vt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,at=e,st=null,!0):!1;default:return!1}}function jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function El(e){if(Se){var t=st;if(t){var r=t;if(!au(e,t)){if(jl(e))throw Error(u(418));t=tr(r.nextSibling);var n=at;t&&au(e,t)?lu(n,r):(e.flags=e.flags&-4097|2,Se=!1,at=e)}}else{if(jl(e))throw Error(u(418));e.flags=e.flags&-4097|2,Se=!1,at=e}}}function su(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function $o(e){if(e!==at)return!1;if(!Se)return su(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hl(e.type,e.memoizedProps)),t&&(t=st)){if(jl(e))throw uu(),Error(u(418));for(;t;)lu(e,t),t=tr(t.nextSibling)}if(su(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){st=tr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}st=null}}else st=at?tr(e.stateNode.nextSibling):null;return!0}function uu(){for(var e=st;e;)e=tr(e.nextSibling)}function Zr(){st=at=null,Se=!1}function Cl(e){St===null?St=[e]:St.push(e)}var Af=W.ReactCurrentBatchConfig;function $n(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(u(309));var n=r.stateNode}if(!n)throw Error(u(147,e));var o=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(c){var m=o.refs;c===null?delete m[a]:m[a]=c},t._stringRef=a,t)}if(typeof e!="string")throw Error(u(284));if(!r._owner)throw Error(u(290,e))}return e}function Uo(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cu(e){var t=e._init;return t(e._payload)}function du(e){function t(E,y){if(e){var C=E.deletions;C===null?(E.deletions=[y],E.flags|=16):C.push(y)}}function r(E,y){if(!e)return null;for(;y!==null;)t(E,y),y=y.sibling;return null}function n(E,y){for(E=new Map;y!==null;)y.key!==null?E.set(y.key,y):E.set(y.index,y),y=y.sibling;return E}function o(E,y){return E=fr(E,y),E.index=0,E.sibling=null,E}function a(E,y,C){return E.index=C,e?(C=E.alternate,C!==null?(C=C.index,C<y?(E.flags|=2,y):C):(E.flags|=2,y)):(E.flags|=1048576,y)}function c(E){return e&&E.alternate===null&&(E.flags|=2),E}function m(E,y,C,O){return y===null||y.tag!==6?(y=ga(C,E.mode,O),y.return=E,y):(y=o(y,C),y.return=E,y)}function g(E,y,C,O){var q=C.type;return q===ve?L(E,y,C.props.children,O,C.key):y!==null&&(y.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===oe&&cu(q)===y.type)?(O=o(y,C.props),O.ref=$n(E,y,C),O.return=E,O):(O=di(C.type,C.key,C.props,null,E.mode,O),O.ref=$n(E,y,C),O.return=E,O)}function b(E,y,C,O){return y===null||y.tag!==4||y.stateNode.containerInfo!==C.containerInfo||y.stateNode.implementation!==C.implementation?(y=va(C,E.mode,O),y.return=E,y):(y=o(y,C.children||[]),y.return=E,y)}function L(E,y,C,O,q){return y===null||y.tag!==7?(y=Pr(C,E.mode,O,q),y.return=E,y):(y=o(y,C),y.return=E,y)}function z(E,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return y=ga(""+y,E.mode,C),y.return=E,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ne:return C=di(y.type,y.key,y.props,null,E.mode,C),C.ref=$n(E,null,y),C.return=E,C;case de:return y=va(y,E.mode,C),y.return=E,y;case oe:var O=y._init;return z(E,O(y._payload),C)}if(qt(y)||K(y))return y=Pr(y,E.mode,C,null),y.return=E,y;Uo(E,y)}return null}function T(E,y,C,O){var q=y!==null?y.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return q!==null?null:m(E,y,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ne:return C.key===q?g(E,y,C,O):null;case de:return C.key===q?b(E,y,C,O):null;case oe:return q=C._init,T(E,y,q(C._payload),O)}if(qt(C)||K(C))return q!==null?null:L(E,y,C,O,null);Uo(E,C)}return null}function U(E,y,C,O,q){if(typeof O=="string"&&O!==""||typeof O=="number")return E=E.get(C)||null,m(y,E,""+O,q);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ne:return E=E.get(O.key===null?C:O.key)||null,g(y,E,O,q);case de:return E=E.get(O.key===null?C:O.key)||null,b(y,E,O,q);case oe:var Y=O._init;return U(E,y,C,Y(O._payload),q)}if(qt(O)||K(O))return E=E.get(C)||null,L(y,E,O,q,null);Uo(y,O)}return null}function V(E,y,C,O){for(var q=null,Y=null,J=y,re=y=0,Ue=null;J!==null&&re<C.length;re++){J.index>re?(Ue=J,J=null):Ue=J.sibling;var he=T(E,J,C[re],O);if(he===null){J===null&&(J=Ue);break}e&&J&&he.alternate===null&&t(E,J),y=a(he,y,re),Y===null?q=he:Y.sibling=he,Y=he,J=Ue}if(re===C.length)return r(E,J),Se&&wr(E,re),q;if(J===null){for(;re<C.length;re++)J=z(E,C[re],O),J!==null&&(y=a(J,y,re),Y===null?q=J:Y.sibling=J,Y=J);return Se&&wr(E,re),q}for(J=n(E,J);re<C.length;re++)Ue=U(J,E,re,C[re],O),Ue!==null&&(e&&Ue.alternate!==null&&J.delete(Ue.key===null?re:Ue.key),y=a(Ue,y,re),Y===null?q=Ue:Y.sibling=Ue,Y=Ue);return e&&J.forEach(function(pr){return t(E,pr)}),Se&&wr(E,re),q}function Q(E,y,C,O){var q=K(C);if(typeof q!="function")throw Error(u(150));if(C=q.call(C),C==null)throw Error(u(151));for(var Y=q=null,J=y,re=y=0,Ue=null,he=C.next();J!==null&&!he.done;re++,he=C.next()){J.index>re?(Ue=J,J=null):Ue=J.sibling;var pr=T(E,J,he.value,O);if(pr===null){J===null&&(J=Ue);break}e&&J&&pr.alternate===null&&t(E,J),y=a(pr,y,re),Y===null?q=pr:Y.sibling=pr,Y=pr,J=Ue}if(he.done)return r(E,J),Se&&wr(E,re),q;if(J===null){for(;!he.done;re++,he=C.next())he=z(E,he.value,O),he!==null&&(y=a(he,y,re),Y===null?q=he:Y.sibling=he,Y=he);return Se&&wr(E,re),q}for(J=n(E,J);!he.done;re++,he=C.next())he=U(J,E,re,he.value,O),he!==null&&(e&&he.alternate!==null&&J.delete(he.key===null?re:he.key),y=a(he,y,re),Y===null?q=he:Y.sibling=he,Y=he);return e&&J.forEach(function(yp){return t(E,yp)}),Se&&wr(E,re),q}function Le(E,y,C,O){if(typeof C=="object"&&C!==null&&C.type===ve&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case ne:e:{for(var q=C.key,Y=y;Y!==null;){if(Y.key===q){if(q=C.type,q===ve){if(Y.tag===7){r(E,Y.sibling),y=o(Y,C.props.children),y.return=E,E=y;break e}}else if(Y.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===oe&&cu(q)===Y.type){r(E,Y.sibling),y=o(Y,C.props),y.ref=$n(E,Y,C),y.return=E,E=y;break e}r(E,Y);break}else t(E,Y);Y=Y.sibling}C.type===ve?(y=Pr(C.props.children,E.mode,O,C.key),y.return=E,E=y):(O=di(C.type,C.key,C.props,null,E.mode,O),O.ref=$n(E,y,C),O.return=E,E=O)}return c(E);case de:e:{for(Y=C.key;y!==null;){if(y.key===Y)if(y.tag===4&&y.stateNode.containerInfo===C.containerInfo&&y.stateNode.implementation===C.implementation){r(E,y.sibling),y=o(y,C.children||[]),y.return=E,E=y;break e}else{r(E,y);break}else t(E,y);y=y.sibling}y=va(C,E.mode,O),y.return=E,E=y}return c(E);case oe:return Y=C._init,Le(E,y,Y(C._payload),O)}if(qt(C))return V(E,y,C,O);if(K(C))return Q(E,y,C,O);Uo(E,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,y!==null&&y.tag===6?(r(E,y.sibling),y=o(y,C),y.return=E,E=y):(r(E,y),y=ga(C,E.mode,O),y.return=E,E=y),c(E)):r(E,y)}return Le}var en=du(!0),fu=du(!1),Bo=rr(null),Ho=null,tn=null,Nl=null;function bl(){Nl=tn=Ho=null}function Pl(e){var t=Bo.current;ke(Bo),e._currentValue=t}function _l(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function rn(e,t){Ho=e,Nl=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(tt=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(Nl!==e)if(e={context:e,memoizedValue:t,next:null},tn===null){if(Ho===null)throw Error(u(308));tn=e,Ho.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return t}var kr=null;function Rl(e){kr===null?kr=[e]:kr.push(e)}function pu(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,Rl(t)):(r.next=o.next,o.next=r),t.interleaved=r,$t(e,n)}function $t(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ir=!1;function Tl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(me&2)!==0){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,$t(e,r)}return o=n.interleaved,o===null?(t.next=t,Rl(n)):(t.next=o.next,o.next=t),n.interleaved=t,$t(e,r)}function Wo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Vi(e,r)}}function hu(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var c={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?o=a=c:a=a.next=c,r=r.next}while(r!==null);a===null?o=a=t:a=a.next=t}else o=a=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Vo(e,t,r,n){var o=e.updateQueue;ir=!1;var a=o.firstBaseUpdate,c=o.lastBaseUpdate,m=o.shared.pending;if(m!==null){o.shared.pending=null;var g=m,b=g.next;g.next=null,c===null?a=b:c.next=b,c=g;var L=e.alternate;L!==null&&(L=L.updateQueue,m=L.lastBaseUpdate,m!==c&&(m===null?L.firstBaseUpdate=b:m.next=b,L.lastBaseUpdate=g))}if(a!==null){var z=o.baseState;c=0,L=b=g=null,m=a;do{var T=m.lane,U=m.eventTime;if((n&T)===T){L!==null&&(L=L.next={eventTime:U,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var V=e,Q=m;switch(T=t,U=r,Q.tag){case 1:if(V=Q.payload,typeof V=="function"){z=V.call(U,z,T);break e}z=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=Q.payload,T=typeof V=="function"?V.call(U,z,T):V,T==null)break e;z=A({},z,T);break e;case 2:ir=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,T=o.effects,T===null?o.effects=[m]:T.push(m))}else U={eventTime:U,lane:T,tag:m.tag,payload:m.payload,callback:m.callback,next:null},L===null?(b=L=U,g=z):L=L.next=U,c|=T;if(m=m.next,m===null){if(m=o.shared.pending,m===null)break;T=m,m=T.next,T.next=null,o.lastBaseUpdate=T,o.shared.pending=null}}while(!0);if(L===null&&(g=z),o.baseState=g,o.firstBaseUpdate=b,o.lastBaseUpdate=L,t=o.shared.interleaved,t!==null){o=t;do c|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Er|=c,e.lanes=c,e.memoizedState=z}}function gu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(u(191,o));o.call(n)}}}var Un={},Tt=rr(Un),Bn=rr(Un),Hn=rr(Un);function Sr(e){if(e===Un)throw Error(u(174));return e}function Ll(e,t){switch(xe(Hn,t),xe(Bn,e),xe(Tt,Un),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zi(t,e)}ke(Tt),xe(Tt,t)}function nn(){ke(Tt),ke(Bn),ke(Hn)}function vu(e){Sr(Hn.current);var t=Sr(Tt.current),r=zi(t,e.type);t!==r&&(xe(Bn,e),xe(Tt,r))}function zl(e){Bn.current===e&&(ke(Tt),ke(Bn))}var Ee=rr(0);function Qo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Il=[];function Dl(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var qo=W.ReactCurrentDispatcher,Ol=W.ReactCurrentBatchConfig,jr=0,Ce=null,Fe=null,Ae=null,Ko=!1,Wn=!1,Vn=0,$f=0;function qe(){throw Error(u(321))}function Fl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!kt(e[r],t[r]))return!1;return!0}function Ml(e,t,r,n,o,a){if(jr=a,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qo.current=e===null||e.memoizedState===null?Wf:Vf,e=r(n,o),Wn){a=0;do{if(Wn=!1,Vn=0,25<=a)throw Error(u(301));a+=1,Ae=Fe=null,t.updateQueue=null,qo.current=Qf,e=r(n,o)}while(Wn)}if(qo.current=Jo,t=Fe!==null&&Fe.next!==null,jr=0,Ae=Fe=Ce=null,Ko=!1,t)throw Error(u(300));return e}function Al(){var e=Vn!==0;return Vn=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?Ce.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function ht(){if(Fe===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=Ae===null?Ce.memoizedState:Ae.next;if(t!==null)Ae=t,Fe=e;else{if(e===null)throw Error(u(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ae===null?Ce.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function Qn(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=ht(),r=t.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=e;var n=Fe,o=n.baseQueue,a=r.pending;if(a!==null){if(o!==null){var c=o.next;o.next=a.next,a.next=c}n.baseQueue=o=a,r.pending=null}if(o!==null){a=o.next,n=n.baseState;var m=c=null,g=null,b=a;do{var L=b.lane;if((jr&L)===L)g!==null&&(g=g.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),n=b.hasEagerState?b.eagerState:e(n,b.action);else{var z={lane:L,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};g===null?(m=g=z,c=n):g=g.next=z,Ce.lanes|=L,Er|=L}b=b.next}while(b!==null&&b!==a);g===null?c=n:g.next=m,kt(n,t.memoizedState)||(tt=!0),t.memoizedState=n,t.baseState=c,t.baseQueue=g,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do a=o.lane,Ce.lanes|=a,Er|=a,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ul(e){var t=ht(),r=t.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,a=t.memoizedState;if(o!==null){r.pending=null;var c=o=o.next;do a=e(a,c.action),c=c.next;while(c!==o);kt(a,t.memoizedState)||(tt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function yu(){}function xu(e,t){var r=Ce,n=ht(),o=t(),a=!kt(n.memoizedState,o);if(a&&(n.memoizedState=o,tt=!0),n=n.queue,Bl(Su.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||Ae!==null&&Ae.memoizedState.tag&1){if(r.flags|=2048,qn(9,ku.bind(null,r,n,o,t),void 0,null),$e===null)throw Error(u(349));(jr&30)!==0||wu(r,t,o)}return o}function wu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ku(e,t,r,n){t.value=r,t.getSnapshot=n,ju(t)&&Eu(e)}function Su(e,t,r){return r(function(){ju(t)&&Eu(e)})}function ju(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!kt(e,r)}catch{return!0}}function Eu(e){var t=$t(e,1);t!==null&&Nt(t,e,1,-1)}function Cu(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=Hf.bind(null,Ce,e),[t.memoizedState,e]}function qn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Nu(){return ht().memoizedState}function Go(e,t,r,n){var o=Lt();Ce.flags|=e,o.memoizedState=qn(1|t,r,void 0,n===void 0?null:n)}function Yo(e,t,r,n){var o=ht();n=n===void 0?null:n;var a=void 0;if(Fe!==null){var c=Fe.memoizedState;if(a=c.destroy,n!==null&&Fl(n,c.deps)){o.memoizedState=qn(t,r,a,n);return}}Ce.flags|=e,o.memoizedState=qn(1|t,r,a,n)}function bu(e,t){return Go(8390656,8,e,t)}function Bl(e,t){return Yo(2048,8,e,t)}function Pu(e,t){return Yo(4,2,e,t)}function _u(e,t){return Yo(4,4,e,t)}function Ru(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tu(e,t,r){return r=r!=null?r.concat([e]):null,Yo(4,4,Ru.bind(null,t,e),r)}function Hl(){}function Lu(e,t){var r=ht();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Fl(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function zu(e,t){var r=ht();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Fl(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Iu(e,t,r){return(jr&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=r):(kt(r,t)||(r=cs(),Ce.lanes|=r,Er|=r,e.baseState=!0),t)}function Uf(e,t){var r=ge;ge=r!==0&&4>r?r:4,e(!0);var n=Ol.transition;Ol.transition={};try{e(!1),t()}finally{ge=r,Ol.transition=n}}function Du(){return ht().memoizedState}function Bf(e,t,r){var n=cr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Ou(e))Fu(t,r);else if(r=pu(e,t,r,n),r!==null){var o=Xe();Nt(r,e,n,o),Mu(r,t,n)}}function Hf(e,t,r){var n=cr(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ou(e))Fu(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var c=t.lastRenderedState,m=a(c,r);if(o.hasEagerState=!0,o.eagerState=m,kt(m,c)){var g=t.interleaved;g===null?(o.next=o,Rl(t)):(o.next=g.next,g.next=o),t.interleaved=o;return}}catch{}finally{}r=pu(e,t,o,n),r!==null&&(o=Xe(),Nt(r,e,n,o),Mu(r,t,n))}}function Ou(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function Fu(e,t){Wn=Ko=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Mu(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Vi(e,r)}}var Jo={readContext:mt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Wf={readContext:mt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:bu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Go(4194308,4,Ru.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Go(4194308,4,e,t)},useInsertionEffect:function(e,t){return Go(4,2,e,t)},useMemo:function(e,t){var r=Lt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Lt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Bf.bind(null,Ce,e),[n.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:Cu,useDebugValue:Hl,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=Cu(!1),t=e[0];return e=Uf.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Ce,o=Lt();if(Se){if(r===void 0)throw Error(u(407));r=r()}else{if(r=t(),$e===null)throw Error(u(349));(jr&30)!==0||wu(n,t,r)}o.memoizedState=r;var a={value:r,getSnapshot:t};return o.queue=a,bu(Su.bind(null,n,a,e),[e]),n.flags|=2048,qn(9,ku.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=Lt(),t=$e.identifierPrefix;if(Se){var r=At,n=Mt;r=(n&~(1<<32-wt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Vn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=$f++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vf={readContext:mt,useCallback:Lu,useContext:mt,useEffect:Bl,useImperativeHandle:Tu,useInsertionEffect:Pu,useLayoutEffect:_u,useMemo:zu,useReducer:$l,useRef:Nu,useState:function(){return $l(Qn)},useDebugValue:Hl,useDeferredValue:function(e){var t=ht();return Iu(t,Fe.memoizedState,e)},useTransition:function(){var e=$l(Qn)[0],t=ht().memoizedState;return[e,t]},useMutableSource:yu,useSyncExternalStore:xu,useId:Du,unstable_isNewReconciler:!1},Qf={readContext:mt,useCallback:Lu,useContext:mt,useEffect:Bl,useImperativeHandle:Tu,useInsertionEffect:Pu,useLayoutEffect:_u,useMemo:zu,useReducer:Ul,useRef:Nu,useState:function(){return Ul(Qn)},useDebugValue:Hl,useDeferredValue:function(e){var t=ht();return Fe===null?t.memoizedState=e:Iu(t,Fe.memoizedState,e)},useTransition:function(){var e=Ul(Qn)[0],t=ht().memoizedState;return[e,t]},useMutableSource:yu,useSyncExternalStore:xu,useId:Du,unstable_isNewReconciler:!1};function jt(e,t){if(e&&e.defaultProps){t=A({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Wl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:A({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Xo={isMounted:function(e){return(e=e._reactInternals)?gr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Xe(),o=cr(e),a=Ut(n,o);a.payload=t,r!=null&&(a.callback=r),t=lr(e,a,o),t!==null&&(Nt(t,e,o,n),Wo(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Xe(),o=cr(e),a=Ut(n,o);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=lr(e,a,o),t!==null&&(Nt(t,e,o,n),Wo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Xe(),n=cr(e),o=Ut(r,n);o.tag=2,t!=null&&(o.callback=t),t=lr(e,o,n),t!==null&&(Nt(t,e,n,r),Wo(t,e,n))}};function Au(e,t,r,n,o,a,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,c):t.prototype&&t.prototype.isPureReactComponent?!zn(r,n)||!zn(o,a):!0}function $u(e,t,r){var n=!1,o=nr,a=t.contextType;return typeof a=="object"&&a!==null?a=mt(a):(o=et(t)?yr:Qe.current,n=t.contextTypes,a=(n=n!=null)?Yr(e,o):nr),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xo,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Uu(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Xo.enqueueReplaceState(t,t.state,null)}function Vl(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},Tl(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=mt(a):(a=et(t)?yr:Qe.current,o.context=Yr(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Wl(e,t,a,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Xo.enqueueReplaceState(o,o.state,null),Vo(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function on(e,t){try{var r="",n=t;do r+=fe(n),n=n.return;while(n);var o=r}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Ql(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ql(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var qf=typeof WeakMap=="function"?WeakMap:Map;function Bu(e,t,r){r=Ut(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ii||(ii=!0,sa=n),ql(e,t)},r}function Hu(e,t,r){r=Ut(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){ql(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){ql(e,t),typeof n!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),r}function Wu(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new qf;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=ap.bind(null,e,t,r),t.then(e,e))}function Vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qu(e,t,r,n,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ut(-1,1),t.tag=2,lr(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Kf=W.ReactCurrentOwner,tt=!1;function Je(e,t,r,n){t.child=e===null?fu(t,null,r,n):en(t,e.child,r,n)}function qu(e,t,r,n,o){r=r.render;var a=t.ref;return rn(t,o),n=Ml(e,t,r,n,a,o),r=Al(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bt(e,t,o)):(Se&&r&&kl(t),t.flags|=1,Je(e,t,n,o),t.child)}function Ku(e,t,r,n,o){if(e===null){var a=r.type;return typeof a=="function"&&!ha(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Gu(e,t,a,n,o)):(e=di(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var c=a.memoizedProps;if(r=r.compare,r=r!==null?r:zn,r(c,n)&&e.ref===t.ref)return Bt(e,t,o)}return t.flags|=1,e=fr(a,n),e.ref=t.ref,e.return=t,t.child=e}function Gu(e,t,r,n,o){if(e!==null){var a=e.memoizedProps;if(zn(a,n)&&e.ref===t.ref)if(tt=!1,t.pendingProps=n=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Bt(e,t,o)}return Kl(e,t,r,n,o)}function Yu(e,t,r){var n=t.pendingProps,o=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(an,ut),ut|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(an,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,xe(an,ut),ut|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,xe(an,ut),ut|=n;return Je(e,t,o,r),t.child}function Ju(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Kl(e,t,r,n,o){var a=et(r)?yr:Qe.current;return a=Yr(t,a),rn(t,o),r=Ml(e,t,r,n,a,o),n=Al(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bt(e,t,o)):(Se&&n&&kl(t),t.flags|=1,Je(e,t,r,o),t.child)}function Xu(e,t,r,n,o){if(et(r)){var a=!0;Oo(t)}else a=!1;if(rn(t,o),t.stateNode===null)ei(e,t),$u(t,r,n),Vl(t,r,n,o),n=!0;else if(e===null){var c=t.stateNode,m=t.memoizedProps;c.props=m;var g=c.context,b=r.contextType;typeof b=="object"&&b!==null?b=mt(b):(b=et(r)?yr:Qe.current,b=Yr(t,b));var L=r.getDerivedStateFromProps,z=typeof L=="function"||typeof c.getSnapshotBeforeUpdate=="function";z||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==n||g!==b)&&Uu(t,c,n,b),ir=!1;var T=t.memoizedState;c.state=T,Vo(t,n,c,o),g=t.memoizedState,m!==n||T!==g||Ze.current||ir?(typeof L=="function"&&(Wl(t,r,L,n),g=t.memoizedState),(m=ir||Au(t,r,m,n,T,g,b))?(z||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=g),c.props=n,c.state=g,c.context=b,n=m):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{c=t.stateNode,mu(e,t),m=t.memoizedProps,b=t.type===t.elementType?m:jt(t.type,m),c.props=b,z=t.pendingProps,T=c.context,g=r.contextType,typeof g=="object"&&g!==null?g=mt(g):(g=et(r)?yr:Qe.current,g=Yr(t,g));var U=r.getDerivedStateFromProps;(L=typeof U=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==z||T!==g)&&Uu(t,c,n,g),ir=!1,T=t.memoizedState,c.state=T,Vo(t,n,c,o);var V=t.memoizedState;m!==z||T!==V||Ze.current||ir?(typeof U=="function"&&(Wl(t,r,U,n),V=t.memoizedState),(b=ir||Au(t,r,b,n,T,V,g)||!1)?(L||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(n,V,g),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(n,V,g)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=V),c.props=n,c.state=V,c.context=g,n=b):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),n=!1)}return Gl(e,t,r,n,a,o)}function Gl(e,t,r,n,o,a){Ju(e,t);var c=(t.flags&128)!==0;if(!n&&!c)return o&&nu(t,r,!1),Bt(e,t,a);n=t.stateNode,Kf.current=t;var m=c&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&c?(t.child=en(t,e.child,null,a),t.child=en(t,null,m,a)):Je(e,t,m,a),t.memoizedState=n.state,o&&nu(t,r,!0),t.child}function Zu(e){var t=e.stateNode;t.pendingContext?tu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tu(e,t.context,!1),Ll(e,t.containerInfo)}function ec(e,t,r,n,o){return Zr(),Cl(o),t.flags|=256,Je(e,t,r,n),t.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function Jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function tc(e,t,r){var n=t.pendingProps,o=Ee.current,a=!1,c=(t.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(o&2)!==0),m?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),xe(Ee,o&1),e===null)return El(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=n.children,e=n.fallback,a?(n=t.mode,a=t.child,c={mode:"hidden",children:c},(n&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=c):a=fi(c,n,0,null),e=Pr(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Jl(r),t.memoizedState=Yl,e):Xl(t,c));if(o=e.memoizedState,o!==null&&(m=o.dehydrated,m!==null))return Gf(e,t,c,n,m,o,r);if(a){a=n.fallback,c=t.mode,o=e.child,m=o.sibling;var g={mode:"hidden",children:n.children};return(c&1)===0&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=g,t.deletions=null):(n=fr(o,g),n.subtreeFlags=o.subtreeFlags&14680064),m!==null?a=fr(m,a):(a=Pr(a,c,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,c=e.child.memoizedState,c=c===null?Jl(r):{baseLanes:c.baseLanes|r,cachePool:null,transitions:c.transitions},a.memoizedState=c,a.childLanes=e.childLanes&~r,t.memoizedState=Yl,n}return a=e.child,e=a.sibling,n=fr(a,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Xl(e,t){return t=fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zo(e,t,r,n){return n!==null&&Cl(n),en(t,e.child,null,r),e=Xl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gf(e,t,r,n,o,a,c){if(r)return t.flags&256?(t.flags&=-257,n=Ql(Error(u(422))),Zo(e,t,c,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,o=t.mode,n=fi({mode:"visible",children:n.children},o,0,null),a=Pr(a,o,c,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,(t.mode&1)!==0&&en(t,e.child,null,c),t.child.memoizedState=Jl(c),t.memoizedState=Yl,a);if((t.mode&1)===0)return Zo(e,t,c,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var m=n.dgst;return n=m,a=Error(u(419)),n=Ql(a,n,void 0),Zo(e,t,c,n)}if(m=(c&e.childLanes)!==0,tt||m){if(n=$e,n!==null){switch(c&-c){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(n.suspendedLanes|c))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,$t(e,o),Nt(n,e,o,-1))}return ma(),n=Ql(Error(u(421))),Zo(e,t,c,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=sp.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,st=tr(o.nextSibling),at=t,Se=!0,St=null,e!==null&&(ft[pt++]=Mt,ft[pt++]=At,ft[pt++]=xr,Mt=e.id,At=e.overflow,xr=t),t=Xl(t,n.children),t.flags|=4096,t)}function rc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),_l(e.return,t,r)}function Zl(e,t,r,n,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=o)}function nc(e,t,r){var n=t.pendingProps,o=n.revealOrder,a=n.tail;if(Je(e,t,n.children,r),n=Ee.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rc(e,r,t);else if(e.tag===19)rc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(xe(Ee,n),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&Qo(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Zl(t,!1,o,r,a);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Qo(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Zl(t,!0,r,null,a);break;case"together":Zl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ei(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Er|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,r=fr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=fr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Yf(e,t,r){switch(t.tag){case 3:Zu(t),Zr();break;case 5:vu(t);break;case 1:et(t.type)&&Oo(t);break;case 4:Ll(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;xe(Bo,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(xe(Ee,Ee.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?tc(e,t,r):(xe(Ee,Ee.current&1),e=Bt(e,t,r),e!==null?e.sibling:null);xe(Ee,Ee.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return nc(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),xe(Ee,Ee.current),n)break;return null;case 22:case 23:return t.lanes=0,Yu(e,t,r)}return Bt(e,t,r)}var oc,ea,ic,lc;oc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},ea=function(){},ic=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Sr(Tt.current);var a=null;switch(r){case"input":o=hn(e,o),n=hn(e,n),a=[];break;case"select":o=A({},o,{value:void 0}),n=A({},n,{value:void 0}),a=[];break;case"textarea":o=p(e,o),n=p(e,n),a=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=zo)}Ii(r,n);var c;r=null;for(b in o)if(!n.hasOwnProperty(b)&&o.hasOwnProperty(b)&&o[b]!=null)if(b==="style"){var m=o[b];for(c in m)m.hasOwnProperty(c)&&(r||(r={}),r[c]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(f.hasOwnProperty(b)?a||(a=[]):(a=a||[]).push(b,null));for(b in n){var g=n[b];if(m=o!=null?o[b]:void 0,n.hasOwnProperty(b)&&g!==m&&(g!=null||m!=null))if(b==="style")if(m){for(c in m)!m.hasOwnProperty(c)||g&&g.hasOwnProperty(c)||(r||(r={}),r[c]="");for(c in g)g.hasOwnProperty(c)&&m[c]!==g[c]&&(r||(r={}),r[c]=g[c])}else r||(a||(a=[]),a.push(b,r)),r=g;else b==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,m=m?m.__html:void 0,g!=null&&m!==g&&(a=a||[]).push(b,g)):b==="children"?typeof g!="string"&&typeof g!="number"||(a=a||[]).push(b,""+g):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(f.hasOwnProperty(b)?(g!=null&&b==="onScroll"&&we("scroll",e),a||m===g||(a=[])):(a=a||[]).push(b,g))}r&&(a=a||[]).push("style",r);var b=a;(t.updateQueue=b)&&(t.flags|=4)}},lc=function(e,t,r,n){r!==n&&(t.flags|=4)};function Kn(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Jf(e,t,r){var n=t.pendingProps;switch(Sl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return et(t.type)&&Do(),Ke(t),null;case 3:return n=t.stateNode,nn(),ke(Ze),ke(Qe),Dl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&($o(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,St!==null&&(da(St),St=null))),ea(e,t),Ke(t),null;case 5:zl(t);var o=Sr(Hn.current);if(r=t.type,e!==null&&t.stateNode!=null)ic(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Ke(t),null}if(e=Sr(Tt.current),$o(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[Rt]=t,n[Mn]=a,e=(t.mode&1)!==0,r){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(o=0;o<Dn.length;o++)we(Dn[o],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":so(n,a),we("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},we("invalid",n);break;case"textarea":te(n,a),we("invalid",n)}Ii(r,a),o=null;for(var c in a)if(a.hasOwnProperty(c)){var m=a[c];c==="children"?typeof m=="string"?n.textContent!==m&&(a.suppressHydrationWarning!==!0&&Lo(n.textContent,m,e),o=["children",m]):typeof m=="number"&&n.textContent!==""+m&&(a.suppressHydrationWarning!==!0&&Lo(n.textContent,m,e),o=["children",""+m]):f.hasOwnProperty(c)&&m!=null&&c==="onScroll"&&we("scroll",n)}switch(r){case"input":Dr(n),Qt(n,a,!0);break;case"textarea":Dr(n),dt(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=zo)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uo(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=c.createElement(r,{is:n.is}):(e=c.createElement(r),r==="select"&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,r),e[Rt]=t,e[Mn]=n,oc(e,t,!1,!1),t.stateNode=e;e:{switch(c=Di(r,n),r){case"dialog":we("cancel",e),we("close",e),o=n;break;case"iframe":case"object":case"embed":we("load",e),o=n;break;case"video":case"audio":for(o=0;o<Dn.length;o++)we(Dn[o],e);o=n;break;case"source":we("error",e),o=n;break;case"img":case"image":case"link":we("error",e),we("load",e),o=n;break;case"details":we("toggle",e),o=n;break;case"input":so(e,n),o=hn(e,n),we("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=A({},n,{value:void 0}),we("invalid",e);break;case"textarea":te(e,n),o=p(e,n),we("invalid",e);break;default:o=n}Ii(r,o),m=o;for(a in m)if(m.hasOwnProperty(a)){var g=m[a];a==="style"?Ga(e,g):a==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&qa(e,g)):a==="children"?typeof g=="string"?(r!=="textarea"||g!=="")&&gn(e,g):typeof g=="number"&&gn(e,""+g):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(f.hasOwnProperty(a)?g!=null&&a==="onScroll"&&we("scroll",e):g!=null&&Z(e,a,g,c))}switch(r){case"input":Dr(e),Qt(e,n,!1);break;case"textarea":Dr(e),dt(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ce(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?Kt(e,!!n.multiple,a,!1):n.defaultValue!=null&&Kt(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=zo)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)lc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(r=Sr(Hn.current),Sr(Tt.current),$o(t)){if(n=t.stateNode,r=t.memoizedProps,n[Rt]=t,(a=n.nodeValue!==r)&&(e=at,e!==null))switch(e.tag){case 3:Lo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lo(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Rt]=t,t.stateNode=n}return Ke(t),null;case 13:if(ke(Ee),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&st!==null&&(t.mode&1)!==0&&(t.flags&128)===0)uu(),Zr(),t.flags|=98560,a=!1;else if(a=$o(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(u(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(317));a[Rt]=t}else Zr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),a=!1}else St!==null&&(da(St),St=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ee.current&1)!==0?Me===0&&(Me=3):ma())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return nn(),ea(e,t),e===null&&On(t.stateNode.containerInfo),Ke(t),null;case 10:return Pl(t.type._context),Ke(t),null;case 17:return et(t.type)&&Do(),Ke(t),null;case 19:if(ke(Ee),a=t.memoizedState,a===null)return Ke(t),null;if(n=(t.flags&128)!==0,c=a.rendering,c===null)if(n)Kn(a,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Qo(e),c!==null){for(t.flags|=128,Kn(a,!1),n=c.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,c=a.alternate,c===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,e=c.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return xe(Ee,Ee.current&1|2),t.child}e=e.sibling}a.tail!==null&&Te()>sn&&(t.flags|=128,n=!0,Kn(a,!1),t.lanes=4194304)}else{if(!n)if(e=Qo(c),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Kn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!Se)return Ke(t),null}else 2*Te()-a.renderingStartTime>sn&&r!==1073741824&&(t.flags|=128,n=!0,Kn(a,!1),t.lanes=4194304);a.isBackwards?(c.sibling=t.child,t.child=c):(r=a.last,r!==null?r.sibling=c:t.child=c,a.last=c)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Te(),t.sibling=null,r=Ee.current,xe(Ee,n?r&1|2:r&1),t):(Ke(t),null);case 22:case 23:return pa(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(ut&1073741824)!==0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function Xf(e,t){switch(Sl(t),t.tag){case 1:return et(t.type)&&Do(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),ke(Ze),ke(Qe),Dl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return zl(t),null;case 13:if(ke(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(Ee),null;case 4:return nn(),null;case 10:return Pl(t.type._context),null;case 22:case 23:return pa(),null;case 24:return null;default:return null}}var ti=!1,Ge=!1,Zf=typeof WeakSet=="function"?WeakSet:Set,H=null;function ln(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){be(e,t,n)}else r.current=null}function ta(e,t,r){try{r()}catch(n){be(e,t,n)}}var ac=!1;function ep(e,t){if(pl=ko,e=As(),il(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var c=0,m=-1,g=-1,b=0,L=0,z=e,T=null;t:for(;;){for(var U;z!==r||o!==0&&z.nodeType!==3||(m=c+o),z!==a||n!==0&&z.nodeType!==3||(g=c+n),z.nodeType===3&&(c+=z.nodeValue.length),(U=z.firstChild)!==null;)T=z,z=U;for(;;){if(z===e)break t;if(T===r&&++b===o&&(m=c),T===a&&++L===n&&(g=c),(U=z.nextSibling)!==null)break;z=T,T=z.parentNode}z=U}r=m===-1||g===-1?null:{start:m,end:g}}else r=null}r=r||{start:0,end:0}}else r=null;for(ml={focusedElem:e,selectionRange:r},ko=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var V=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var Q=V.memoizedProps,Le=V.memoizedState,E=t.stateNode,y=E.getSnapshotBeforeUpdate(t.elementType===t.type?Q:jt(t.type,Q),Le);E.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(O){be(t,t.return,O)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return V=ac,ac=!1,V}function Gn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&ta(t,r,a)}o=o.next}while(o!==n)}}function ri(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ra(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function sc(e){var t=e.alternate;t!==null&&(e.alternate=null,sc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Mn],delete t[yl],delete t[Of],delete t[Ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uc(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function na(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=zo));else if(n!==4&&(e=e.child,e!==null))for(na(e,t,r),e=e.sibling;e!==null;)na(e,t,r),e=e.sibling}function oa(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(oa(e,t,r),e=e.sibling;e!==null;)oa(e,t,r),e=e.sibling}var He=null,Et=!1;function ar(e,t,r){for(r=r.child;r!==null;)dc(e,t,r),r=r.sibling}function dc(e,t,r){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ho,r)}catch{}switch(r.tag){case 5:Ge||ln(r,t);case 6:var n=He,o=Et;He=null,ar(e,t,r),He=n,Et=o,He!==null&&(Et?(e=He,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):He.removeChild(r.stateNode));break;case 18:He!==null&&(Et?(e=He,r=r.stateNode,e.nodeType===8?vl(e.parentNode,r):e.nodeType===1&&vl(e,r),bn(e)):vl(He,r.stateNode));break;case 4:n=He,o=Et,He=r.stateNode.containerInfo,Et=!0,ar(e,t,r),He=n,Et=o;break;case 0:case 11:case 14:case 15:if(!Ge&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var a=o,c=a.destroy;a=a.tag,c!==void 0&&((a&2)!==0||(a&4)!==0)&&ta(r,t,c),o=o.next}while(o!==n)}ar(e,t,r);break;case 1:if(!Ge&&(ln(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(m){be(r,t,m)}ar(e,t,r);break;case 21:ar(e,t,r);break;case 22:r.mode&1?(Ge=(n=Ge)||r.memoizedState!==null,ar(e,t,r),Ge=n):ar(e,t,r);break;default:ar(e,t,r)}}function fc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Zf),t.forEach(function(n){var o=up.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function Ct(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var a=e,c=t,m=c;e:for(;m!==null;){switch(m.tag){case 5:He=m.stateNode,Et=!1;break e;case 3:He=m.stateNode.containerInfo,Et=!0;break e;case 4:He=m.stateNode.containerInfo,Et=!0;break e}m=m.return}if(He===null)throw Error(u(160));dc(a,c,o),He=null,Et=!1;var g=o.alternate;g!==null&&(g.return=null),o.return=null}catch(b){be(o,t,b)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pc(t,e),t=t.sibling}function pc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),zt(e),n&4){try{Gn(3,e,e.return),ri(3,e)}catch(Q){be(e,e.return,Q)}try{Gn(5,e,e.return)}catch(Q){be(e,e.return,Q)}}break;case 1:Ct(t,e),zt(e),n&512&&r!==null&&ln(r,r.return);break;case 5:if(Ct(t,e),zt(e),n&512&&r!==null&&ln(r,r.return),e.flags&32){var o=e.stateNode;try{gn(o,"")}catch(Q){be(e,e.return,Q)}}if(n&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,c=r!==null?r.memoizedProps:a,m=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{m==="input"&&a.type==="radio"&&a.name!=null&&Fr(o,a),Di(m,c);var b=Di(m,a);for(c=0;c<g.length;c+=2){var L=g[c],z=g[c+1];L==="style"?Ga(o,z):L==="dangerouslySetInnerHTML"?qa(o,z):L==="children"?gn(o,z):Z(o,L,z,b)}switch(m){case"input":hr(o,a);break;case"textarea":Ve(o,a);break;case"select":var T=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var U=a.value;U!=null?Kt(o,!!a.multiple,U,!1):T!==!!a.multiple&&(a.defaultValue!=null?Kt(o,!!a.multiple,a.defaultValue,!0):Kt(o,!!a.multiple,a.multiple?[]:"",!1))}o[Mn]=a}catch(Q){be(e,e.return,Q)}}break;case 6:if(Ct(t,e),zt(e),n&4){if(e.stateNode===null)throw Error(u(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(Q){be(e,e.return,Q)}}break;case 3:if(Ct(t,e),zt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{bn(t.containerInfo)}catch(Q){be(e,e.return,Q)}break;case 4:Ct(t,e),zt(e);break;case 13:Ct(t,e),zt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(aa=Te())),n&4&&fc(e);break;case 22:if(L=r!==null&&r.memoizedState!==null,e.mode&1?(Ge=(b=Ge)||L,Ct(t,e),Ge=b):Ct(t,e),zt(e),n&8192){if(b=e.memoizedState!==null,(e.stateNode.isHidden=b)&&!L&&(e.mode&1)!==0)for(H=e,L=e.child;L!==null;){for(z=H=L;H!==null;){switch(T=H,U=T.child,T.tag){case 0:case 11:case 14:case 15:Gn(4,T,T.return);break;case 1:ln(T,T.return);var V=T.stateNode;if(typeof V.componentWillUnmount=="function"){n=T,r=T.return;try{t=n,V.props=t.memoizedProps,V.state=t.memoizedState,V.componentWillUnmount()}catch(Q){be(n,r,Q)}}break;case 5:ln(T,T.return);break;case 22:if(T.memoizedState!==null){gc(z);continue}}U!==null?(U.return=T,H=U):gc(z)}L=L.sibling}e:for(L=null,z=e;;){if(z.tag===5){if(L===null){L=z;try{o=z.stateNode,b?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(m=z.stateNode,g=z.memoizedProps.style,c=g!=null&&g.hasOwnProperty("display")?g.display:null,m.style.display=Ka("display",c))}catch(Q){be(e,e.return,Q)}}}else if(z.tag===6){if(L===null)try{z.stateNode.nodeValue=b?"":z.memoizedProps}catch(Q){be(e,e.return,Q)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;L===z&&(L=null),z=z.return}L===z&&(L=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:Ct(t,e),zt(e),n&4&&fc(e);break;case 21:break;default:Ct(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(uc(r)){var n=r;break e}r=r.return}throw Error(u(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(gn(o,""),n.flags&=-33);var a=cc(e);oa(e,a,o);break;case 3:case 4:var c=n.stateNode.containerInfo,m=cc(e);na(e,m,c);break;default:throw Error(u(161))}}catch(g){be(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tp(e,t,r){H=e,mc(e)}function mc(e,t,r){for(var n=(e.mode&1)!==0;H!==null;){var o=H,a=o.child;if(o.tag===22&&n){var c=o.memoizedState!==null||ti;if(!c){var m=o.alternate,g=m!==null&&m.memoizedState!==null||Ge;m=ti;var b=Ge;if(ti=c,(Ge=g)&&!b)for(H=o;H!==null;)c=H,g=c.child,c.tag===22&&c.memoizedState!==null?vc(o):g!==null?(g.return=c,H=g):vc(o);for(;a!==null;)H=a,mc(a),a=a.sibling;H=o,ti=m,Ge=b}hc(e)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,H=a):hc(e)}}function hc(e){for(;H!==null;){var t=H;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||ri(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ge)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:jt(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&gu(t,a,n);break;case 3:var c=t.updateQueue;if(c!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}gu(t,c,r)}break;case 5:var m=t.stateNode;if(r===null&&t.flags&4){r=m;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&r.focus();break;case"img":g.src&&(r.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var b=t.alternate;if(b!==null){var L=b.memoizedState;if(L!==null){var z=L.dehydrated;z!==null&&bn(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Ge||t.flags&512&&ra(t)}catch(T){be(t,t.return,T)}}if(t===e){H=null;break}if(r=t.sibling,r!==null){r.return=t.return,H=r;break}H=t.return}}function gc(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var r=t.sibling;if(r!==null){r.return=t.return,H=r;break}H=t.return}}function vc(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ri(4,t)}catch(g){be(t,r,g)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(g){be(t,o,g)}}var a=t.return;try{ra(t)}catch(g){be(t,a,g)}break;case 5:var c=t.return;try{ra(t)}catch(g){be(t,c,g)}}}catch(g){be(t,t.return,g)}if(t===e){H=null;break}var m=t.sibling;if(m!==null){m.return=t.return,H=m;break}H=t.return}}var rp=Math.ceil,ni=W.ReactCurrentDispatcher,ia=W.ReactCurrentOwner,gt=W.ReactCurrentBatchConfig,me=0,$e=null,De=null,We=0,ut=0,an=rr(0),Me=0,Yn=null,Er=0,oi=0,la=0,Jn=null,rt=null,aa=0,sn=1/0,Ht=null,ii=!1,sa=null,sr=null,li=!1,ur=null,ai=0,Xn=0,ua=null,si=-1,ui=0;function Xe(){return(me&6)!==0?Te():si!==-1?si:si=Te()}function cr(e){return(e.mode&1)===0?1:(me&2)!==0&&We!==0?We&-We:Af.transition!==null?(ui===0&&(ui=cs()),ui):(e=ge,e!==0||(e=window.event,e=e===void 0?16:xs(e.type)),e)}function Nt(e,t,r,n){if(50<Xn)throw Xn=0,ua=null,Error(u(185));Sn(e,r,n),((me&2)===0||e!==$e)&&(e===$e&&((me&2)===0&&(oi|=r),Me===4&&dr(e,We)),nt(e,n),r===1&&me===0&&(t.mode&1)===0&&(sn=Te()+500,Fo&&or()))}function nt(e,t){var r=e.callbackNode;Md(e,t);var n=yo(e,e===$e?We:0);if(n===0)r!==null&&as(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&as(r),t===1)e.tag===0?Mf(xc.bind(null,e)):ou(xc.bind(null,e)),If(function(){(me&6)===0&&or()}),r=null;else{switch(ds(n)){case 1:r=Bi;break;case 4:r=ss;break;case 16:r=mo;break;case 536870912:r=us;break;default:r=mo}r=bc(r,yc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function yc(e,t){if(si=-1,ui=0,(me&6)!==0)throw Error(u(327));var r=e.callbackNode;if(un()&&e.callbackNode!==r)return null;var n=yo(e,e===$e?We:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=ci(e,n);else{t=n;var o=me;me|=2;var a=kc();($e!==e||We!==t)&&(Ht=null,sn=Te()+500,Nr(e,t));do try{ip();break}catch(m){wc(e,m)}while(!0);bl(),ni.current=a,me=o,De!==null?t=0:($e=null,We=0,t=Me)}if(t!==0){if(t===2&&(o=Hi(e),o!==0&&(n=o,t=ca(e,o))),t===1)throw r=Yn,Nr(e,0),dr(e,n),nt(e,Te()),r;if(t===6)dr(e,n);else{if(o=e.current.alternate,(n&30)===0&&!np(o)&&(t=ci(e,n),t===2&&(a=Hi(e),a!==0&&(n=a,t=ca(e,a))),t===1))throw r=Yn,Nr(e,0),dr(e,n),nt(e,Te()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(u(345));case 2:br(e,rt,Ht);break;case 3:if(dr(e,n),(n&130023424)===n&&(t=aa+500-Te(),10<t)){if(yo(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=gl(br.bind(null,e,rt,Ht),t);break}br(e,rt,Ht);break;case 4:if(dr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var c=31-wt(n);a=1<<c,c=t[c],c>o&&(o=c),n&=~a}if(n=o,n=Te()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*rp(n/1960))-n,10<n){e.timeoutHandle=gl(br.bind(null,e,rt,Ht),n);break}br(e,rt,Ht);break;case 5:br(e,rt,Ht);break;default:throw Error(u(329))}}}return nt(e,Te()),e.callbackNode===r?yc.bind(null,e):null}function ca(e,t){var r=Jn;return e.current.memoizedState.isDehydrated&&(Nr(e,t).flags|=256),e=ci(e,t),e!==2&&(t=rt,rt=r,t!==null&&da(t)),e}function da(e){rt===null?rt=e:rt.push.apply(rt,e)}function np(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],a=o.getSnapshot;o=o.value;try{if(!kt(a(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dr(e,t){for(t&=~la,t&=~oi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-wt(t),n=1<<r;e[r]=-1,t&=~n}}function xc(e){if((me&6)!==0)throw Error(u(327));un();var t=yo(e,0);if((t&1)===0)return nt(e,Te()),null;var r=ci(e,t);if(e.tag!==0&&r===2){var n=Hi(e);n!==0&&(t=n,r=ca(e,n))}if(r===1)throw r=Yn,Nr(e,0),dr(e,t),nt(e,Te()),r;if(r===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,br(e,rt,Ht),nt(e,Te()),null}function fa(e,t){var r=me;me|=1;try{return e(t)}finally{me=r,me===0&&(sn=Te()+500,Fo&&or())}}function Cr(e){ur!==null&&ur.tag===0&&(me&6)===0&&un();var t=me;me|=1;var r=gt.transition,n=ge;try{if(gt.transition=null,ge=1,e)return e()}finally{ge=n,gt.transition=r,me=t,(me&6)===0&&or()}}function pa(){ut=an.current,ke(an)}function Nr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,zf(r)),De!==null)for(r=De.return;r!==null;){var n=r;switch(Sl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Do();break;case 3:nn(),ke(Ze),ke(Qe),Dl();break;case 5:zl(n);break;case 4:nn();break;case 13:ke(Ee);break;case 19:ke(Ee);break;case 10:Pl(n.type._context);break;case 22:case 23:pa()}r=r.return}if($e=e,De=e=fr(e.current,null),We=ut=t,Me=0,Yn=null,la=oi=Er=0,rt=Jn=null,kr!==null){for(t=0;t<kr.length;t++)if(r=kr[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,a=r.pending;if(a!==null){var c=a.next;a.next=o,n.next=c}r.pending=n}kr=null}return e}function wc(e,t){do{var r=De;try{if(bl(),qo.current=Jo,Ko){for(var n=Ce.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}Ko=!1}if(jr=0,Ae=Fe=Ce=null,Wn=!1,Vn=0,ia.current=null,r===null||r.return===null){Me=1,Yn=t,De=null;break}e:{var a=e,c=r.return,m=r,g=t;if(t=We,m.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var b=g,L=m,z=L.tag;if((L.mode&1)===0&&(z===0||z===11||z===15)){var T=L.alternate;T?(L.updateQueue=T.updateQueue,L.memoizedState=T.memoizedState,L.lanes=T.lanes):(L.updateQueue=null,L.memoizedState=null)}var U=Vu(c);if(U!==null){U.flags&=-257,Qu(U,c,m,a,t),U.mode&1&&Wu(a,b,t),t=U,g=b;var V=t.updateQueue;if(V===null){var Q=new Set;Q.add(g),t.updateQueue=Q}else V.add(g);break e}else{if((t&1)===0){Wu(a,b,t),ma();break e}g=Error(u(426))}}else if(Se&&m.mode&1){var Le=Vu(c);if(Le!==null){(Le.flags&65536)===0&&(Le.flags|=256),Qu(Le,c,m,a,t),Cl(on(g,m));break e}}a=g=on(g,m),Me!==4&&(Me=2),Jn===null?Jn=[a]:Jn.push(a),a=c;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var E=Bu(a,g,t);hu(a,E);break e;case 1:m=g;var y=a.type,C=a.stateNode;if((a.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(sr===null||!sr.has(C)))){a.flags|=65536,t&=-t,a.lanes|=t;var O=Hu(a,m,t);hu(a,O);break e}}a=a.return}while(a!==null)}jc(r)}catch(q){t=q,De===r&&r!==null&&(De=r=r.return);continue}break}while(!0)}function kc(){var e=ni.current;return ni.current=Jo,e===null?Jo:e}function ma(){(Me===0||Me===3||Me===2)&&(Me=4),$e===null||(Er&268435455)===0&&(oi&268435455)===0||dr($e,We)}function ci(e,t){var r=me;me|=2;var n=kc();($e!==e||We!==t)&&(Ht=null,Nr(e,t));do try{op();break}catch(o){wc(e,o)}while(!0);if(bl(),me=r,ni.current=n,De!==null)throw Error(u(261));return $e=null,We=0,Me}function op(){for(;De!==null;)Sc(De)}function ip(){for(;De!==null&&!_d();)Sc(De)}function Sc(e){var t=Nc(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?jc(e):De=t,ia.current=null}function jc(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Jf(r,t,ut),r!==null){De=r;return}}else{if(r=Xf(r,t),r!==null){r.flags&=32767,De=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Me===0&&(Me=5)}function br(e,t,r){var n=ge,o=gt.transition;try{gt.transition=null,ge=1,lp(e,t,r,n)}finally{gt.transition=o,ge=n}return null}function lp(e,t,r,n){do un();while(ur!==null);if((me&6)!==0)throw Error(u(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Ad(e,a),e===$e&&(De=$e=null,We=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||li||(li=!0,bc(mo,function(){return un(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=gt.transition,gt.transition=null;var c=ge;ge=1;var m=me;me|=4,ia.current=null,ep(e,r),pc(r,e),Nf(ml),ko=!!pl,ml=pl=null,e.current=r,tp(r),Rd(),me=m,ge=c,gt.transition=a}else e.current=r;if(li&&(li=!1,ur=e,ai=o),a=e.pendingLanes,a===0&&(sr=null),zd(r.stateNode),nt(e,Te()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(ii)throw ii=!1,e=sa,sa=null,e;return(ai&1)!==0&&e.tag!==0&&un(),a=e.pendingLanes,(a&1)!==0?e===ua?Xn++:(Xn=0,ua=e):Xn=0,or(),null}function un(){if(ur!==null){var e=ds(ai),t=gt.transition,r=ge;try{if(gt.transition=null,ge=16>e?16:e,ur===null)var n=!1;else{if(e=ur,ur=null,ai=0,(me&6)!==0)throw Error(u(331));var o=me;for(me|=4,H=e.current;H!==null;){var a=H,c=a.child;if((H.flags&16)!==0){var m=a.deletions;if(m!==null){for(var g=0;g<m.length;g++){var b=m[g];for(H=b;H!==null;){var L=H;switch(L.tag){case 0:case 11:case 15:Gn(8,L,a)}var z=L.child;if(z!==null)z.return=L,H=z;else for(;H!==null;){L=H;var T=L.sibling,U=L.return;if(sc(L),L===b){H=null;break}if(T!==null){T.return=U,H=T;break}H=U}}}var V=a.alternate;if(V!==null){var Q=V.child;if(Q!==null){V.child=null;do{var Le=Q.sibling;Q.sibling=null,Q=Le}while(Q!==null)}}H=a}}if((a.subtreeFlags&2064)!==0&&c!==null)c.return=a,H=c;else e:for(;H!==null;){if(a=H,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Gn(9,a,a.return)}var E=a.sibling;if(E!==null){E.return=a.return,H=E;break e}H=a.return}}var y=e.current;for(H=y;H!==null;){c=H;var C=c.child;if((c.subtreeFlags&2064)!==0&&C!==null)C.return=c,H=C;else e:for(c=y;H!==null;){if(m=H,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:ri(9,m)}}catch(q){be(m,m.return,q)}if(m===c){H=null;break e}var O=m.sibling;if(O!==null){O.return=m.return,H=O;break e}H=m.return}}if(me=o,or(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ho,e)}catch{}n=!0}return n}finally{ge=r,gt.transition=t}}return!1}function Ec(e,t,r){t=on(r,t),t=Bu(e,t,1),e=lr(e,t,1),t=Xe(),e!==null&&(Sn(e,1,t),nt(e,t))}function be(e,t,r){if(e.tag===3)Ec(e,e,r);else for(;t!==null;){if(t.tag===3){Ec(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(sr===null||!sr.has(n))){e=on(r,e),e=Hu(t,e,1),t=lr(t,e,1),e=Xe(),t!==null&&(Sn(t,1,e),nt(t,e));break}}t=t.return}}function ap(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&r,$e===e&&(We&r)===r&&(Me===4||Me===3&&(We&130023424)===We&&500>Te()-aa?Nr(e,0):la|=r),nt(e,t)}function Cc(e,t){t===0&&((e.mode&1)===0?t=1:(t=vo,vo<<=1,(vo&130023424)===0&&(vo=4194304)));var r=Xe();e=$t(e,t),e!==null&&(Sn(e,t,r),nt(e,r))}function sp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Cc(e,r)}function up(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(u(314))}n!==null&&n.delete(t),Cc(e,r)}var Nc;Nc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)tt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return tt=!1,Yf(e,t,r);tt=(e.flags&131072)!==0}else tt=!1,Se&&(t.flags&1048576)!==0&&iu(t,Ao,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ei(e,t),e=t.pendingProps;var o=Yr(t,Qe.current);rn(t,r),o=Ml(null,t,n,e,o,r);var a=Al();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(n)?(a=!0,Oo(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Tl(t),o.updater=Xo,t.stateNode=o,o._reactInternals=t,Vl(t,n,e,r),t=Gl(null,t,n,!0,a,r)):(t.tag=0,Se&&a&&kl(t),Je(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ei(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=dp(n),e=jt(n,e),o){case 0:t=Kl(null,t,n,e,r);break e;case 1:t=Xu(null,t,n,e,r);break e;case 11:t=qu(null,t,n,e,r);break e;case 14:t=Ku(null,t,n,jt(n.type,e),r);break e}throw Error(u(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:jt(n,o),Kl(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:jt(n,o),Xu(e,t,n,o,r);case 3:e:{if(Zu(t),e===null)throw Error(u(387));n=t.pendingProps,a=t.memoizedState,o=a.element,mu(e,t),Vo(t,n,null,r);var c=t.memoizedState;if(n=c.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=on(Error(u(423)),t),t=ec(e,t,n,r,o);break e}else if(n!==o){o=on(Error(u(424)),t),t=ec(e,t,n,r,o);break e}else for(st=tr(t.stateNode.containerInfo.firstChild),at=t,Se=!0,St=null,r=fu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Zr(),n===o){t=Bt(e,t,r);break e}Je(e,t,n,r)}t=t.child}return t;case 5:return vu(t),e===null&&El(t),n=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,c=o.children,hl(n,o)?c=null:a!==null&&hl(n,a)&&(t.flags|=32),Ju(e,t),Je(e,t,c,r),t.child;case 6:return e===null&&El(t),null;case 13:return tc(e,t,r);case 4:return Ll(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=en(t,null,n,r):Je(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:jt(n,o),qu(e,t,n,o,r);case 7:return Je(e,t,t.pendingProps,r),t.child;case 8:return Je(e,t,t.pendingProps.children,r),t.child;case 12:return Je(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,a=t.memoizedProps,c=o.value,xe(Bo,n._currentValue),n._currentValue=c,a!==null)if(kt(a.value,c)){if(a.children===o.children&&!Ze.current){t=Bt(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var m=a.dependencies;if(m!==null){c=a.child;for(var g=m.firstContext;g!==null;){if(g.context===n){if(a.tag===1){g=Ut(-1,r&-r),g.tag=2;var b=a.updateQueue;if(b!==null){b=b.shared;var L=b.pending;L===null?g.next=g:(g.next=L.next,L.next=g),b.pending=g}}a.lanes|=r,g=a.alternate,g!==null&&(g.lanes|=r),_l(a.return,r,t),m.lanes|=r;break}g=g.next}}else if(a.tag===10)c=a.type===t.type?null:a.child;else if(a.tag===18){if(c=a.return,c===null)throw Error(u(341));c.lanes|=r,m=c.alternate,m!==null&&(m.lanes|=r),_l(c,r,t),c=a.sibling}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===t){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}Je(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,rn(t,r),o=mt(o),n=n(o),t.flags|=1,Je(e,t,n,r),t.child;case 14:return n=t.type,o=jt(n,t.pendingProps),o=jt(n.type,o),Ku(e,t,n,o,r);case 15:return Gu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:jt(n,o),ei(e,t),t.tag=1,et(n)?(e=!0,Oo(t)):e=!1,rn(t,r),$u(t,n,o),Vl(t,n,o,r),Gl(null,t,n,!0,e,r);case 19:return nc(e,t,r);case 22:return Yu(e,t,r)}throw Error(u(156,t.tag))};function bc(e,t){return ls(e,t)}function cp(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,r,n){return new cp(e,t,r,n)}function ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dp(e){if(typeof e=="function")return ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pe)return 11;if(e===Re)return 14}return 2}function fr(e,t){var r=e.alternate;return r===null?(r=vt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function di(e,t,r,n,o,a){var c=2;if(n=e,typeof e=="function")ha(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case ve:return Pr(r.children,o,a,t);case le:c=8,o|=8;break;case Oe:return e=vt(12,r,t,o|2),e.elementType=Oe,e.lanes=a,e;case Ie:return e=vt(13,r,t,o),e.elementType=Ie,e.lanes=a,e;case _e:return e=vt(19,r,t,o),e.elementType=_e,e.lanes=a,e;case se:return fi(r,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Be:c=10;break e;case it:c=9;break e;case Pe:c=11;break e;case Re:c=14;break e;case oe:c=16,n=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=vt(c,r,t,o),t.elementType=e,t.type=n,t.lanes=a,t}function Pr(e,t,r,n){return e=vt(7,e,n,t),e.lanes=r,e}function fi(e,t,r,n){return e=vt(22,e,n,t),e.elementType=se,e.lanes=r,e.stateNode={isHidden:!1},e}function ga(e,t,r){return e=vt(6,e,null,t),e.lanes=r,e}function va(e,t,r){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fp(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wi(0),this.expirationTimes=Wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ya(e,t,r,n,o,a,c,m,g){return e=new fp(e,t,r,m,g),t===1?(t=1,a===!0&&(t|=8)):t=0,a=vt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tl(a),e}function pp(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Pc(e){if(!e)return nr;e=e._reactInternals;e:{if(gr(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var r=e.type;if(et(r))return ru(e,r,t)}return t}function _c(e,t,r,n,o,a,c,m,g){return e=ya(r,n,!0,e,o,a,c,m,g),e.context=Pc(null),r=e.current,n=Xe(),o=cr(r),a=Ut(n,o),a.callback=t??null,lr(r,a,o),e.current.lanes=o,Sn(e,o,n),nt(e,n),e}function pi(e,t,r,n){var o=t.current,a=Xe(),c=cr(o);return r=Pc(r),t.context===null?t.context=r:t.pendingContext=r,t=Ut(a,c),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=lr(o,t,c),e!==null&&(Nt(e,o,c,a),Wo(e,o,c)),c}function mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function xa(e,t){Rc(e,t),(e=e.alternate)&&Rc(e,t)}function mp(){return null}var Tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function wa(e){this._internalRoot=e}hi.prototype.render=wa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));pi(e,t,null,null)},hi.prototype.unmount=wa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cr(function(){pi(null,e,null,null)}),t[Ot]=null}};function hi(e){this._internalRoot=e}hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=ms();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Xt.length&&t!==0&&t<Xt[r].priority;r++);Xt.splice(r,0,e),r===0&&vs(e)}};function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lc(){}function hp(e,t,r,n,o){if(o){if(typeof n=="function"){var a=n;n=function(){var b=mi(c);a.call(b)}}var c=_c(t,n,e,0,null,!1,!1,"",Lc);return e._reactRootContainer=c,e[Ot]=c.current,On(e.nodeType===8?e.parentNode:e),Cr(),c}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var m=n;n=function(){var b=mi(g);m.call(b)}}var g=ya(e,0,!1,null,null,!1,!1,"",Lc);return e._reactRootContainer=g,e[Ot]=g.current,On(e.nodeType===8?e.parentNode:e),Cr(function(){pi(t,g,r,n)}),g}function vi(e,t,r,n,o){var a=r._reactRootContainer;if(a){var c=a;if(typeof o=="function"){var m=o;o=function(){var g=mi(c);m.call(g)}}pi(t,c,e,o)}else c=hp(r,t,e,o,n);return mi(c)}fs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=kn(t.pendingLanes);r!==0&&(Vi(t,r|1),nt(t,Te()),(me&6)===0&&(sn=Te()+500,or()))}break;case 13:Cr(function(){var n=$t(e,1);if(n!==null){var o=Xe();Nt(n,e,1,o)}}),xa(e,1)}},Qi=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var r=Xe();Nt(t,e,134217728,r)}xa(e,134217728)}},ps=function(e){if(e.tag===13){var t=cr(e),r=$t(e,t);if(r!==null){var n=Xe();Nt(r,e,t,n)}xa(e,t)}},ms=function(){return ge},hs=function(e,t){var r=ge;try{return ge=e,t()}finally{ge=r}},Mi=function(e,t,r){switch(t){case"input":if(hr(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Io(n);if(!o)throw Error(u(90));ao(n),hr(n,o)}}}break;case"textarea":Ve(e,r);break;case"select":t=r.value,t!=null&&Kt(e,!!r.multiple,t,!1)}},Za=fa,es=Cr;var gp={usingClientEntryPoint:!1,Events:[An,Kr,Io,Ja,Xa,fa]},Zn={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vp={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=os(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yi.isDisabled&&yi.supportsFiber)try{ho=yi.inject(vp),_t=yi}catch{}}return ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gp,ot.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ka(t))throw Error(u(200));return pp(e,t,null,r)},ot.createRoot=function(e,t){if(!ka(e))throw Error(u(299));var r=!1,n="",o=Tc;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ya(e,1,!1,null,null,r,!1,n,o),e[Ot]=t.current,On(e.nodeType===8?e.parentNode:e),new wa(t)},ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=os(t),e=e===null?null:e.stateNode,e},ot.flushSync=function(e){return Cr(e)},ot.hydrate=function(e,t,r){if(!gi(t))throw Error(u(200));return vi(null,e,t,!0,r)},ot.hydrateRoot=function(e,t,r){if(!ka(e))throw Error(u(405));var n=r!=null&&r.hydratedSources||null,o=!1,a="",c=Tc;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),t=_c(t,null,e,1,r??null,o,!1,a,c),e[Ot]=t.current,On(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new hi(t)},ot.render=function(e,t,r){if(!gi(t))throw Error(u(200));return vi(null,e,t,!1,r)},ot.unmountComponentAtNode=function(e){if(!gi(e))throw Error(u(40));return e._reactRootContainer?(Cr(function(){vi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1},ot.unstable_batchedUpdates=fa,ot.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!gi(r))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return vi(e,t,r,!1,n)},ot.version="18.3.1-next-f1338f8080-20240426",ot}var $c;function bp(){if($c)return Ea.exports;$c=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Ea.exports=Np(),Ea.exports}var Uc;function Pp(){if(Uc)return xi;Uc=1;var i=bp();return xi.createRoot=i.createRoot,xi.hydrateRoot=i.hydrateRoot,xi}var _p=Pp();/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Bc="popstate";function Hc(i){return typeof i=="object"&&i!=null&&"pathname"in i&&"search"in i&&"hash"in i&&"state"in i&&"key"in i}function Rp(i={}){function s(d,f){var k;let h=(k=f.state)==null?void 0:k.masked,{pathname:v,search:j,hash:x}=h||d.location;return za("",{pathname:v,search:j,hash:x},f.state&&f.state.usr||null,f.state&&f.state.key||"default",h?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function u(d,f){return typeof f=="string"?f:no(f)}return Lp(s,u,null,i)}function Ne(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function Pt(i,s){if(!i){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Tp(){return Math.random().toString(36).substring(2,10)}function Wc(i,s){return{usr:i.state,key:i.key,idx:s,masked:i.unstable_mask?{pathname:i.pathname,search:i.search,hash:i.hash}:void 0}}function za(i,s,u=null,d,f){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof s=="string"?pn(s):s,state:u,key:s&&s.key||d||Tp(),unstable_mask:f}}function no({pathname:i="/",search:s="",hash:u=""}){return s&&s!=="?"&&(i+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function pn(i){let s={};if(i){let u=i.indexOf("#");u>=0&&(s.hash=i.substring(u),i=i.substring(0,u));let d=i.indexOf("?");d>=0&&(s.search=i.substring(d),i=i.substring(0,d)),i&&(s.pathname=i)}return s}function Lp(i,s,u,d={}){let{window:f=document.defaultView,v5Compat:h=!1}=d,v=f.history,j="POP",x=null,k=P();k==null&&(k=0,v.replaceState({...v.state,idx:k},""));function P(){return(v.state||{idx:null}).idx}function N(){j="POP";let I=P(),$=I==null?null:I-k;k=I,x&&x({action:j,location:F.location,delta:$})}function R(I,$){j="PUSH";let G=Hc(I)?I:za(F.location,I,$);k=P()+1;let Z=Wc(G,k),W=F.createHref(G.unstable_mask||G);try{v.pushState(Z,"",W)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;f.location.assign(W)}h&&x&&x({action:j,location:F.location,delta:1})}function B(I,$){j="REPLACE";let G=Hc(I)?I:za(F.location,I,$);k=P();let Z=Wc(G,k),W=F.createHref(G.unstable_mask||G);v.replaceState(Z,"",W),h&&x&&x({action:j,location:F.location,delta:0})}function M(I){return zp(I)}let F={get action(){return j},get location(){return i(f,v)},listen(I){if(x)throw new Error("A history only accepts one active listener");return f.addEventListener(Bc,N),x=I,()=>{f.removeEventListener(Bc,N),x=null}},createHref(I){return s(f,I)},createURL:M,encodeLocation(I){let $=M(I);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:R,replace:B,go(I){return v.go(I)}};return F}function zp(i,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(u,"No window.location.(origin|href) available to create URL");let d=typeof i=="string"?i:no(i);return d=d.replace(/ $/,"%20"),!s&&d.startsWith("//")&&(d=u+d),new URL(d,u)}function Xc(i,s,u="/"){return Ip(i,s,u,!1)}function Ip(i,s,u,d){let f=typeof s=="string"?pn(s):s,h=Vt(f.pathname||"/",u);if(h==null)return null;let v=Zc(i);Dp(v);let j=null;for(let x=0;j==null&&x<v.length;++x){let k=Qp(h);j=Wp(v[x],k,d)}return j}function Zc(i,s=[],u=[],d="",f=!1){let h=(v,j,x=f,k)=>{let P={relativePath:k===void 0?v.path||"":k,caseSensitive:v.caseSensitive===!0,childrenIndex:j,route:v};if(P.relativePath.startsWith("/")){if(!P.relativePath.startsWith(d)&&x)return;Ne(P.relativePath.startsWith(d),`Absolute route path "${P.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),P.relativePath=P.relativePath.slice(d.length)}let N=bt([d,P.relativePath]),R=u.concat(P);v.children&&v.children.length>0&&(Ne(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),Zc(v.children,s,R,N,x)),!(v.path==null&&!v.index)&&s.push({path:N,score:Bp(N,v.index),routesMeta:R})};return i.forEach((v,j)=>{var x;if(v.path===""||!((x=v.path)!=null&&x.includes("?")))h(v,j);else for(let k of ed(v.path))h(v,j,!0,k)}),s}function ed(i){let s=i.split("/");if(s.length===0)return[];let[u,...d]=s,f=u.endsWith("?"),h=u.replace(/\?$/,"");if(d.length===0)return f?[h,""]:[h];let v=ed(d.join("/")),j=[];return j.push(...v.map(x=>x===""?h:[h,x].join("/"))),f&&j.push(...v),j.map(x=>i.startsWith("/")&&x===""?"/":x)}function Dp(i){i.sort((s,u)=>s.score!==u.score?u.score-s.score:Hp(s.routesMeta.map(d=>d.childrenIndex),u.routesMeta.map(d=>d.childrenIndex)))}var Op=/^:[\w-]+$/,Fp=3,Mp=2,Ap=1,$p=10,Up=-2,Vc=i=>i==="*";function Bp(i,s){let u=i.split("/"),d=u.length;return u.some(Vc)&&(d+=Up),s&&(d+=Mp),u.filter(f=>!Vc(f)).reduce((f,h)=>f+(Op.test(h)?Fp:h===""?Ap:$p),d)}function Hp(i,s){return i.length===s.length&&i.slice(0,-1).every((d,f)=>d===s[f])?i[i.length-1]-s[s.length-1]:0}function Wp(i,s,u=!1){let{routesMeta:d}=i,f={},h="/",v=[];for(let j=0;j<d.length;++j){let x=d[j],k=j===d.length-1,P=h==="/"?s:s.slice(h.length)||"/",N=Ni({path:x.relativePath,caseSensitive:x.caseSensitive,end:k},P),R=x.route;if(!N&&k&&u&&!d[d.length-1].route.index&&(N=Ni({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},P)),!N)return null;Object.assign(f,N.params),v.push({params:f,pathname:bt([h,N.pathname]),pathnameBase:Yp(bt([h,N.pathnameBase])),route:R}),N.pathnameBase!=="/"&&(h=bt([h,N.pathnameBase]))}return v}function Ni(i,s){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,d]=Vp(i.path,i.caseSensitive,i.end),f=s.match(u);if(!f)return null;let h=f[0],v=h.replace(/(.)\/+$/,"$1"),j=f.slice(1);return{params:d.reduce((k,{paramName:P,isOptional:N},R)=>{if(P==="*"){let M=j[R]||"";v=h.slice(0,h.length-M.length).replace(/(.)\/+$/,"$1")}const B=j[R];return N&&!B?k[P]=void 0:k[P]=(B||"").replace(/%2F/g,"/"),k},{}),pathname:h,pathnameBase:v,pattern:i}}function Vp(i,s=!1,u=!0){Pt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let d=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,j,x,k,P)=>{if(d.push({paramName:j,isOptional:x!=null}),x){let N=P.charAt(k+v.length);return N&&N!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(d.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),d]}function Qp(i){try{return i.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Pt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),i}}function Vt(i,s){if(s==="/")return i;if(!i.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,d=i.charAt(u);return d&&d!=="/"?null:i.slice(u)||"/"}var qp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Kp(i,s="/"){let{pathname:u,search:d="",hash:f=""}=typeof i=="string"?pn(i):i,h;return u?(u=rd(u),u.startsWith("/")?h=Qc(u.substring(1),"/"):h=Qc(u,s)):h=s,{pathname:h,search:Jp(d),hash:Xp(f)}}function Qc(i,s){let u=bi(s).split("/");return i.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function ba(i,s,u,d){return`Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Gp(i){return i.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function td(i){let s=Gp(i);return s.map((u,d)=>d===s.length-1?u.pathname:u.pathnameBase)}function Fa(i,s,u,d=!1){let f;typeof i=="string"?f=pn(i):(f={...i},Ne(!f.pathname||!f.pathname.includes("?"),ba("?","pathname","search",f)),Ne(!f.pathname||!f.pathname.includes("#"),ba("#","pathname","hash",f)),Ne(!f.search||!f.search.includes("#"),ba("#","search","hash",f)));let h=i===""||f.pathname==="",v=h?"/":f.pathname,j;if(v==null)j=u;else{let N=s.length-1;if(!d&&v.startsWith("..")){let R=v.split("/");for(;R[0]==="..";)R.shift(),N-=1;f.pathname=R.join("/")}j=N>=0?s[N]:"/"}let x=Kp(f,j),k=v&&v!=="/"&&v.endsWith("/"),P=(h||v===".")&&u.endsWith("/");return!x.pathname.endsWith("/")&&(k||P)&&(x.pathname+="/"),x}var rd=i=>i.replace(/\/\/+/g,"/"),bt=i=>rd(i.join("/")),bi=i=>i.replace(/\/+$/,""),Yp=i=>bi(i).replace(/^\/*/,"/"),Jp=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Xp=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Zp=class{constructor(i,s,u,d=!1){this.status=i,this.statusText=s||"",this.internal=d,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function em(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function tm(i){let s=i.map(u=>u.route.path).filter(Boolean);return bt(s)||"/"}var nd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function od(i,s){let u=i;if(typeof u!="string"||!qp.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let d=u,f=!1;if(nd)try{let h=new URL(window.location.href),v=u.startsWith("//")?new URL(h.protocol+u):new URL(u),j=Vt(v.pathname,s);v.origin===h.origin&&j!=null?u=j+v.search+v.hash:f=!0}catch{Pt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:f,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var id=["POST","PUT","PATCH","DELETE"];new Set(id);var rm=["GET",...id];new Set(rm);var mn=w.createContext(null);mn.displayName="DataRouter";var Ri=w.createContext(null);Ri.displayName="DataRouterState";var ld=w.createContext(!1);function nm(){return w.useContext(ld)}var ad=w.createContext({isTransitioning:!1});ad.displayName="ViewTransition";var om=w.createContext(new Map);om.displayName="Fetchers";var im=w.createContext(null);im.displayName="Await";var yt=w.createContext(null);yt.displayName="Navigation";var oo=w.createContext(null);oo.displayName="Location";var Dt=w.createContext({outlet:null,matches:[],isDataRoute:!1});Dt.displayName="Route";var Ma=w.createContext(null);Ma.displayName="RouteError";var sd="REACT_ROUTER_ERROR",lm="REDIRECT",am="ROUTE_ERROR_RESPONSE";function sm(i){if(i.startsWith(`${sd}:${lm}:{`))try{let s=JSON.parse(i.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function um(i){if(i.startsWith(`${sd}:${am}:{`))try{let s=JSON.parse(i.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new Zp(s.status,s.statusText,s.data)}catch{}}function cm(i,{relative:s}={}){Ne(io(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:d}=w.useContext(yt),{hash:f,pathname:h,search:v}=lo(i,{relative:s}),j=h;return u!=="/"&&(j=h==="/"?u:bt([u,h])),d.createHref({pathname:j,search:v,hash:f})}function io(){return w.useContext(oo)!=null}function xt(){return Ne(io(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(oo).location}var ud="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function cd(i){w.useContext(yt).static||w.useLayoutEffect(i)}function Lr(){let{isDataRoute:i}=w.useContext(Dt);return i?jm():dm()}function dm(){Ne(io(),"useNavigate() may be used only in the context of a <Router> component.");let i=w.useContext(mn),{basename:s,navigator:u}=w.useContext(yt),{matches:d}=w.useContext(Dt),{pathname:f}=xt(),h=JSON.stringify(td(d)),v=w.useRef(!1);return cd(()=>{v.current=!0}),w.useCallback((x,k={})=>{if(Pt(v.current,ud),!v.current)return;if(typeof x=="number"){u.go(x);return}let P=Fa(x,JSON.parse(h),f,k.relative==="path");i==null&&s!=="/"&&(P.pathname=P.pathname==="/"?s:bt([s,P.pathname])),(k.replace?u.replace:u.push)(P,k.state,k)},[s,u,h,f,i])}w.createContext(null);function dd(){let{matches:i}=w.useContext(Dt),s=i[i.length-1];return(s==null?void 0:s.params)??{}}function lo(i,{relative:s}={}){let{matches:u}=w.useContext(Dt),{pathname:d}=xt(),f=JSON.stringify(td(u));return w.useMemo(()=>Fa(i,JSON.parse(f),d,s==="path"),[i,f,d,s])}function fm(i,s){return fd(i,s)}function fd(i,s,u){var I;Ne(io(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=w.useContext(yt),{matches:f}=w.useContext(Dt),h=f[f.length-1],v=h?h.params:{},j=h?h.pathname:"/",x=h?h.pathnameBase:"/",k=h&&h.route;{let $=k&&k.path||"";md(j,!k||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${j}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let P=xt(),N;if(s){let $=typeof s=="string"?pn(s):s;Ne(x==="/"||((I=$.pathname)==null?void 0:I.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${$.pathname}" was given in the \`location\` prop.`),N=$}else N=P;let R=N.pathname||"/",B=R;if(x!=="/"){let $=x.replace(/^\//,"").split("/");B="/"+R.replace(/^\//,"").split("/").slice($.length).join("/")}let M=Xc(i,{pathname:B});Pt(k||M!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Pt(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let F=vm(M&&M.map($=>Object.assign({},$,{params:Object.assign({},v,$.params),pathname:bt([x,d.encodeLocation?d.encodeLocation($.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?x:bt([x,d.encodeLocation?d.encodeLocation($.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:$.pathnameBase])})),f,u);return s&&F?w.createElement(oo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...N},navigationType:"POP"}},F):F}function pm(){let i=Sm(),s=em(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,d="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:d},h={padding:"2px 4px",backgroundColor:d},v=null;return console.error("Error handled by React Router default ErrorBoundary:",i),v=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:h},"ErrorBoundary")," or"," ",w.createElement("code",{style:h},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},s),u?w.createElement("pre",{style:f},u):null,v)}var mm=w.createElement(pm,null),pd=class extends w.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,s){return s.location!==i.location||s.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:s.error,location:s.location,revalidation:i.revalidation||s.revalidation}}componentDidCatch(i,s){this.props.onError?this.props.onError(i,s):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const u=um(i.digest);u&&(i=u)}let s=i!==void 0?w.createElement(Dt.Provider,{value:this.props.routeContext},w.createElement(Ma.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?w.createElement(hm,{error:i},s):s}};pd.contextType=ld;var Pa=new WeakMap;function hm({children:i,error:s}){let{basename:u}=w.useContext(yt);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let d=sm(s.digest);if(d){let f=Pa.get(s);if(f)throw f;let h=od(d.location,u);if(nd&&!Pa.get(s))if(h.isExternal||d.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:d.replace}));throw Pa.set(s,v),v}return w.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return i}function gm({routeContext:i,match:s,children:u}){let d=w.useContext(mn);return d&&d.static&&d.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=s.route.id),w.createElement(Dt.Provider,{value:i},u)}function vm(i,s=[],u){let d=u==null?void 0:u.state;if(i==null){if(!d)return null;if(d.errors)i=d.matches;else if(s.length===0&&!d.initialized&&d.matches.length>0)i=d.matches;else return null}let f=i,h=d==null?void 0:d.errors;if(h!=null){let P=f.findIndex(N=>N.route.id&&(h==null?void 0:h[N.route.id])!==void 0);Ne(P>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,P+1))}let v=!1,j=-1;if(u&&d){v=d.renderFallback;for(let P=0;P<f.length;P++){let N=f[P];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(j=P),N.route.id){let{loaderData:R,errors:B}=d,M=N.route.loader&&!R.hasOwnProperty(N.route.id)&&(!B||B[N.route.id]===void 0);if(N.route.lazy||M){u.isStatic&&(v=!0),j>=0?f=f.slice(0,j+1):f=[f[0]];break}}}}let x=u==null?void 0:u.onError,k=d&&x?(P,N)=>{var R,B;x(P,{location:d.location,params:((B=(R=d.matches)==null?void 0:R[0])==null?void 0:B.params)??{},unstable_pattern:tm(d.matches),errorInfo:N})}:void 0;return f.reduceRight((P,N,R)=>{let B,M=!1,F=null,I=null;d&&(B=h&&N.route.id?h[N.route.id]:void 0,F=N.route.errorElement||mm,v&&(j<0&&R===0?(md("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,I=null):j===R&&(M=!0,I=N.route.hydrateFallbackElement||null)));let $=s.concat(f.slice(0,R+1)),G=()=>{let Z;return B?Z=F:M?Z=I:N.route.Component?Z=w.createElement(N.route.Component,null):N.route.element?Z=N.route.element:Z=P,w.createElement(gm,{match:N,routeContext:{outlet:P,matches:$,isDataRoute:d!=null},children:Z})};return d&&(N.route.ErrorBoundary||N.route.errorElement||R===0)?w.createElement(pd,{location:d.location,revalidation:d.revalidation,component:F,error:B,children:G(),routeContext:{outlet:null,matches:$,isDataRoute:!0},onError:k}):G()},null)}function Aa(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ym(i){let s=w.useContext(mn);return Ne(s,Aa(i)),s}function xm(i){let s=w.useContext(Ri);return Ne(s,Aa(i)),s}function wm(i){let s=w.useContext(Dt);return Ne(s,Aa(i)),s}function $a(i){let s=wm(i),u=s.matches[s.matches.length-1];return Ne(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function km(){return $a("useRouteId")}function Sm(){var d;let i=w.useContext(Ma),s=xm("useRouteError"),u=$a("useRouteError");return i!==void 0?i:(d=s.errors)==null?void 0:d[u]}function jm(){let{router:i}=ym("useNavigate"),s=$a("useNavigate"),u=w.useRef(!1);return cd(()=>{u.current=!0}),w.useCallback(async(f,h={})=>{Pt(u.current,ud),u.current&&(typeof f=="number"?await i.navigate(f):await i.navigate(f,{fromRouteId:s,...h}))},[i,s])}var qc={};function md(i,s,u){!s&&!qc[i]&&(qc[i]=!0,Pt(!1,u))}w.memo(Em);function Em({routes:i,future:s,state:u,isStatic:d,onError:f}){return fd(i,void 0,{state:u,isStatic:d,onError:f})}function mr(i){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Cm({basename:i="/",children:s=null,location:u,navigationType:d="POP",navigator:f,static:h=!1,unstable_useTransitions:v}){Ne(!io(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=i.replace(/^\/*/,"/"),x=w.useMemo(()=>({basename:j,navigator:f,static:h,unstable_useTransitions:v,future:{}}),[j,f,h,v]);typeof u=="string"&&(u=pn(u));let{pathname:k="/",search:P="",hash:N="",state:R=null,key:B="default",unstable_mask:M}=u,F=w.useMemo(()=>{let I=Vt(k,j);return I==null?null:{location:{pathname:I,search:P,hash:N,state:R,key:B,unstable_mask:M},navigationType:d}},[j,k,P,N,R,B,d,M]);return Pt(F!=null,`<Router basename="${j}"> is not able to match the URL "${k}${P}${N}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:w.createElement(yt.Provider,{value:x},w.createElement(oo.Provider,{children:s,value:F}))}function Nm({children:i,location:s}){return fm(Ia(i),s)}function Ia(i,s=[]){let u=[];return w.Children.forEach(i,(d,f)=>{if(!w.isValidElement(d))return;let h=[...s,f];if(d.type===w.Fragment){u.push.apply(u,Ia(d.props.children,h));return}Ne(d.type===mr,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!d.props.index||!d.props.children,"An index route cannot have child routes.");let v={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(v.children=Ia(d.props.children,h)),u.push(v)}),u}var ji="get",Ei="application/x-www-form-urlencoded";function Ti(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function bm(i){return Ti(i)&&i.tagName.toLowerCase()==="button"}function Pm(i){return Ti(i)&&i.tagName.toLowerCase()==="form"}function _m(i){return Ti(i)&&i.tagName.toLowerCase()==="input"}function Rm(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Tm(i,s){return i.button===0&&(!s||s==="_self")&&!Rm(i)}function Da(i=""){return new URLSearchParams(typeof i=="string"||Array.isArray(i)||i instanceof URLSearchParams?i:Object.keys(i).reduce((s,u)=>{let d=i[u];return s.concat(Array.isArray(d)?d.map(f=>[u,f]):[[u,d]])},[]))}function Lm(i,s){let u=Da(i);return s&&s.forEach((d,f)=>{u.has(f)||s.getAll(f).forEach(h=>{u.append(f,h)})}),u}var wi=null;function zm(){if(wi===null)try{new FormData(document.createElement("form"),0),wi=!1}catch{wi=!0}return wi}var Im=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _a(i){return i!=null&&!Im.has(i)?(Pt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ei}"`),null):i}function Dm(i,s){let u,d,f,h,v;if(Pm(i)){let j=i.getAttribute("action");d=j?Vt(j,s):null,u=i.getAttribute("method")||ji,f=_a(i.getAttribute("enctype"))||Ei,h=new FormData(i)}else if(bm(i)||_m(i)&&(i.type==="submit"||i.type==="image")){let j=i.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=i.getAttribute("formaction")||j.getAttribute("action");if(d=x?Vt(x,s):null,u=i.getAttribute("formmethod")||j.getAttribute("method")||ji,f=_a(i.getAttribute("formenctype"))||_a(j.getAttribute("enctype"))||Ei,h=new FormData(j,i),!zm()){let{name:k,type:P,value:N}=i;if(P==="image"){let R=k?`${k}.`:"";h.append(`${R}x`,"0"),h.append(`${R}y`,"0")}else k&&h.append(k,N)}}else{if(Ti(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=ji,d=null,f=Ei,v=i}return h&&f==="text/plain"&&(v=h,h=void 0),{action:d,method:u.toLowerCase(),encType:f,formData:h,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ua(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function hd(i,s,u,d){let f=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return u?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${d}`:f.pathname=`${f.pathname}.${d}`:f.pathname==="/"?f.pathname=`_root.${d}`:s&&Vt(f.pathname,s)==="/"?f.pathname=`${bi(s)}/_root.${d}`:f.pathname=`${bi(f.pathname)}.${d}`,f}async function Om(i,s){if(i.id in s)return s[i.id];try{let u=await import(i.module);return s[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Fm(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Mm(i,s,u){let d=await Promise.all(i.map(async f=>{let h=s.routes[f.route.id];if(h){let v=await Om(h,u);return v.links?v.links():[]}return[]}));return Bm(d.flat(1).filter(Fm).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Kc(i,s,u,d,f,h){let v=(x,k)=>u[k]?x.route.id!==u[k].route.id:!0,j=(x,k)=>{var P;return u[k].pathname!==x.pathname||((P=u[k].route.path)==null?void 0:P.endsWith("*"))&&u[k].params["*"]!==x.params["*"]};return h==="assets"?s.filter((x,k)=>v(x,k)||j(x,k)):h==="data"?s.filter((x,k)=>{var N;let P=d.routes[x.route.id];if(!P||!P.hasLoader)return!1;if(v(x,k)||j(x,k))return!0;if(x.route.shouldRevalidate){let R=x.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((N=u[0])==null?void 0:N.params)||{},nextUrl:new URL(i,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function Am(i,s,{includeHydrateFallback:u}={}){return $m(i.map(d=>{let f=s.routes[d.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function $m(i){return[...new Set(i)]}function Um(i){let s={},u=Object.keys(i).sort();for(let d of u)s[d]=i[d];return s}function Bm(i,s){let u=new Set;return new Set(s),i.reduce((d,f)=>{let h=JSON.stringify(Um(f));return u.has(h)||(u.add(h),d.push({key:h,link:f})),d},[])}function Ba(){let i=w.useContext(mn);return Ua(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Hm(){let i=w.useContext(Ri);return Ua(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Ha=w.createContext(void 0);Ha.displayName="FrameworkContext";function Wa(){let i=w.useContext(Ha);return Ua(i,"You must render this element inside a <HydratedRouter> element"),i}function Wm(i,s){let u=w.useContext(Ha),[d,f]=w.useState(!1),[h,v]=w.useState(!1),{onFocus:j,onBlur:x,onMouseEnter:k,onMouseLeave:P,onTouchStart:N}=s,R=w.useRef(null);w.useEffect(()=>{if(i==="render"&&v(!0),i==="viewport"){let F=$=>{$.forEach(G=>{v(G.isIntersecting)})},I=new IntersectionObserver(F,{threshold:.5});return R.current&&I.observe(R.current),()=>{I.disconnect()}}},[i]),w.useEffect(()=>{if(d){let F=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(F)}}},[d]);let B=()=>{f(!0)},M=()=>{f(!1),v(!1)};return u?i!=="intent"?[h,R,{}]:[h,R,{onFocus:to(j,B),onBlur:to(x,M),onMouseEnter:to(k,B),onMouseLeave:to(P,M),onTouchStart:to(N,B)}]:[!1,R,{}]}function to(i,s){return u=>{i&&i(u),u.defaultPrevented||s(u)}}function Vm({page:i,...s}){let u=nm(),{router:d}=Ba(),f=w.useMemo(()=>Xc(d.routes,i,d.basename),[d.routes,i,d.basename]);return f?u?w.createElement(qm,{page:i,matches:f,...s}):w.createElement(Km,{page:i,matches:f,...s}):null}function Qm(i){let{manifest:s,routeModules:u}=Wa(),[d,f]=w.useState([]);return w.useEffect(()=>{let h=!1;return Mm(i,s,u).then(v=>{h||f(v)}),()=>{h=!0}},[i,s,u]),d}function qm({page:i,matches:s,...u}){let d=xt(),{future:f}=Wa(),{basename:h}=Ba(),v=w.useMemo(()=>{if(i===d.pathname+d.search+d.hash)return[];let j=hd(i,h,f.unstable_trailingSlashAwareDataRequests,"rsc"),x=!1,k=[];for(let P of s)typeof P.route.shouldRevalidate=="function"?x=!0:k.push(P.route.id);return x&&k.length>0&&j.searchParams.set("_routes",k.join(",")),[j.pathname+j.search]},[h,f.unstable_trailingSlashAwareDataRequests,i,d,s]);return w.createElement(w.Fragment,null,v.map(j=>w.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...u})))}function Km({page:i,matches:s,...u}){let d=xt(),{future:f,manifest:h,routeModules:v}=Wa(),{basename:j}=Ba(),{loaderData:x,matches:k}=Hm(),P=w.useMemo(()=>Kc(i,s,k,h,d,"data"),[i,s,k,h,d]),N=w.useMemo(()=>Kc(i,s,k,h,d,"assets"),[i,s,k,h,d]),R=w.useMemo(()=>{if(i===d.pathname+d.search+d.hash)return[];let F=new Set,I=!1;if(s.forEach(G=>{var W;let Z=h.routes[G.route.id];!Z||!Z.hasLoader||(!P.some(ne=>ne.route.id===G.route.id)&&G.route.id in x&&((W=v[G.route.id])!=null&&W.shouldRevalidate)||Z.hasClientLoader?I=!0:F.add(G.route.id))}),F.size===0)return[];let $=hd(i,j,f.unstable_trailingSlashAwareDataRequests,"data");return I&&F.size>0&&$.searchParams.set("_routes",s.filter(G=>F.has(G.route.id)).map(G=>G.route.id).join(",")),[$.pathname+$.search]},[j,f.unstable_trailingSlashAwareDataRequests,x,d,h,P,s,i,v]),B=w.useMemo(()=>Am(N,h),[N,h]),M=Qm(N);return w.createElement(w.Fragment,null,R.map(F=>w.createElement("link",{key:F,rel:"prefetch",as:"fetch",href:F,...u})),B.map(F=>w.createElement("link",{key:F,rel:"modulepreload",href:F,...u})),M.map(({key:F,link:I})=>w.createElement("link",{key:F,nonce:u.nonce,...I,crossOrigin:I.crossOrigin??u.crossOrigin})))}function Gm(...i){return s=>{i.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var Ym=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ym&&(window.__reactRouterVersion="7.14.2")}catch{}function Jm({basename:i,children:s,unstable_useTransitions:u,window:d}){let f=w.useRef();f.current==null&&(f.current=Rp({window:d,v5Compat:!0}));let h=f.current,[v,j]=w.useState({action:h.action,location:h.location}),x=w.useCallback(k=>{u===!1?j(k):w.startTransition(()=>j(k))},[u]);return w.useLayoutEffect(()=>h.listen(x),[h,x]),w.createElement(Cm,{basename:i,children:s,location:v.location,navigationType:v.action,navigator:h,unstable_useTransitions:u})}var gd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,It=w.forwardRef(function({onClick:s,discover:u="render",prefetch:d="none",relative:f,reloadDocument:h,replace:v,unstable_mask:j,state:x,target:k,to:P,preventScrollReset:N,viewTransition:R,unstable_defaultShouldRevalidate:B,...M},F){let{basename:I,navigator:$,unstable_useTransitions:G}=w.useContext(yt),Z=typeof P=="string"&&gd.test(P),W=od(P,I);P=W.to;let ne=cm(P,{relative:f}),de=xt(),ve=null;if(j){let Re=Fa(j,[],de.unstable_mask?de.unstable_mask.pathname:"/",!0);I!=="/"&&(Re.pathname=Re.pathname==="/"?I:bt([I,Re.pathname])),ve=$.createHref(Re)}let[le,Oe,Be]=Wm(d,M),it=th(P,{replace:v,unstable_mask:j,state:x,target:k,preventScrollReset:N,relative:f,viewTransition:R,unstable_defaultShouldRevalidate:B,unstable_useTransitions:G});function Pe(Re){s&&s(Re),Re.defaultPrevented||it(Re)}let Ie=!(W.isExternal||h),_e=w.createElement("a",{...M,...Be,href:(Ie?ve:void 0)||W.absoluteURL||ne,onClick:Ie?Pe:s,ref:Gm(F,Oe),target:k,"data-discover":!Z&&u==="render"?"true":void 0});return le&&!Z?w.createElement(w.Fragment,null,_e,w.createElement(Vm,{page:ne})):_e});It.displayName="Link";var Xm=w.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:d="",end:f=!1,style:h,to:v,viewTransition:j,children:x,...k},P){let N=lo(v,{relative:k.relative}),R=xt(),B=w.useContext(Ri),{navigator:M,basename:F}=w.useContext(yt),I=B!=null&&ah(N)&&j===!0,$=M.encodeLocation?M.encodeLocation(N).pathname:N.pathname,G=R.pathname,Z=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;u||(G=G.toLowerCase(),Z=Z?Z.toLowerCase():null,$=$.toLowerCase()),Z&&F&&(Z=Vt(Z,F)||Z);const W=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let ne=G===$||!f&&G.startsWith($)&&G.charAt(W)==="/",de=Z!=null&&(Z===$||!f&&Z.startsWith($)&&Z.charAt($.length)==="/"),ve={isActive:ne,isPending:de,isTransitioning:I},le=ne?s:void 0,Oe;typeof d=="function"?Oe=d(ve):Oe=[d,ne?"active":null,de?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let Be=typeof h=="function"?h(ve):h;return w.createElement(It,{...k,"aria-current":le,className:Oe,ref:P,style:Be,to:v,viewTransition:j},typeof x=="function"?x(ve):x)});Xm.displayName="NavLink";var Zm=w.forwardRef(({discover:i="render",fetcherKey:s,navigate:u,reloadDocument:d,replace:f,state:h,method:v=ji,action:j,onSubmit:x,relative:k,preventScrollReset:P,viewTransition:N,unstable_defaultShouldRevalidate:R,...B},M)=>{let{unstable_useTransitions:F}=w.useContext(yt),I=ih(),$=lh(j,{relative:k}),G=v.toLowerCase()==="get"?"get":"post",Z=typeof j=="string"&&gd.test(j),W=ne=>{if(x&&x(ne),ne.defaultPrevented)return;ne.preventDefault();let de=ne.nativeEvent.submitter,ve=(de==null?void 0:de.getAttribute("formmethod"))||v,le=()=>I(de||ne.currentTarget,{fetcherKey:s,method:ve,navigate:u,replace:f,state:h,relative:k,preventScrollReset:P,viewTransition:N,unstable_defaultShouldRevalidate:R});F&&u!==!1?w.startTransition(()=>le()):le()};return w.createElement("form",{ref:M,method:G,action:$,onSubmit:d?x:W,...B,"data-discover":!Z&&i==="render"?"true":void 0})});Zm.displayName="Form";function eh(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vd(i){let s=w.useContext(mn);return Ne(s,eh(i)),s}function th(i,{target:s,replace:u,unstable_mask:d,state:f,preventScrollReset:h,relative:v,viewTransition:j,unstable_defaultShouldRevalidate:x,unstable_useTransitions:k}={}){let P=Lr(),N=xt(),R=lo(i,{relative:v});return w.useCallback(B=>{if(Tm(B,s)){B.preventDefault();let M=u!==void 0?u:no(N)===no(R),F=()=>P(i,{replace:M,unstable_mask:d,state:f,preventScrollReset:h,relative:v,viewTransition:j,unstable_defaultShouldRevalidate:x});k?w.startTransition(()=>F()):F()}},[N,P,R,u,d,f,s,i,h,v,j,x,k])}function rh(i){Pt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=w.useRef(Da(i)),u=w.useRef(!1),d=xt(),f=w.useMemo(()=>Lm(d.search,u.current?null:s.current),[d.search]),h=Lr(),v=w.useCallback((j,x)=>{const k=Da(typeof j=="function"?j(new URLSearchParams(f)):j);u.current=!0,h("?"+k,x)},[h,f]);return[f,v]}var nh=0,oh=()=>`__${String(++nh)}__`;function ih(){let{router:i}=vd("useSubmit"),{basename:s}=w.useContext(yt),u=km(),d=i.fetch,f=i.navigate;return w.useCallback(async(h,v={})=>{let{action:j,method:x,encType:k,formData:P,body:N}=Dm(h,s);if(v.navigate===!1){let R=v.fetcherKey||oh();await d(R,u,v.action||j,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:P,body:N,formMethod:v.method||x,formEncType:v.encType||k,flushSync:v.flushSync})}else await f(v.action||j,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:P,body:N,formMethod:v.method||x,formEncType:v.encType||k,replace:v.replace,state:v.state,fromRouteId:u,flushSync:v.flushSync,viewTransition:v.viewTransition})},[d,f,s,u])}function lh(i,{relative:s}={}){let{basename:u}=w.useContext(yt),d=w.useContext(Dt);Ne(d,"useFormAction must be used inside a RouteContext");let[f]=d.matches.slice(-1),h={...lo(i||".",{relative:s})},v=xt();if(i==null){h.search=v.search;let j=new URLSearchParams(h.search),x=j.getAll("index");if(x.some(P=>P==="")){j.delete("index"),x.filter(N=>N).forEach(N=>j.append("index",N));let P=j.toString();h.search=P?`?${P}`:""}}return(!i||i===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(h.pathname=h.pathname==="/"?u:bt([u,h.pathname])),no(h)}function ah(i,{relative:s}={}){let u=w.useContext(ad);Ne(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=vd("useViewTransitionState"),f=lo(i,{relative:s});if(!u.isTransitioning)return!1;let h=Vt(u.currentLocation.pathname,d)||u.currentLocation.pathname,v=Vt(u.nextLocation.pathname,d)||u.nextLocation.pathname;return Ni(f.pathname,v)!=null||Ni(f.pathname,h)!=null}const yd=w.createContext(void 0),Gc="saki_bee_cart";function sh({children:i}){const[s,u]=w.useState([]);w.useEffect(()=>{const k=localStorage.getItem(Gc);if(k)try{u(JSON.parse(k))}catch(P){console.error("Failed to parse cart from localStorage:",P)}},[]),w.useEffect(()=>{localStorage.setItem(Gc,JSON.stringify(s))},[s]);const d=(k,P)=>{const N=k.salePrice??k.price;u(R=>R.find(M=>M.productId===k.id)?R.map(M=>M.productId===k.id?{...M,quantity:M.quantity+P}:M):[...R,{productId:k.id,slug:k.slug,name:k.name,price:N,quantity:P,image:k.image}])},f=k=>{u(P=>P.filter(N=>N.productId!==k))},h=(k,P)=>{if(P<=0){f(k);return}u(N=>N.map(R=>R.productId===k?{...R,quantity:P}:R))},v=()=>{u([])},j=()=>s.reduce((k,P)=>k+P.price*P.quantity,0),x=()=>s.reduce((k,P)=>k+P.quantity,0);return l.jsx(yd.Provider,{value:{cart:s,addToCart:d,removeFromCart:f,updateQuantity:h,clearCart:v,getTotalPrice:j,getTotalItems:x},children:i})}function zr(){const i=w.useContext(yd);if(i===void 0)throw new Error("useCart must be used within CartProvider");return i}const uh={bg:{navAbout:"За нас",navProducts:"Продукти",navContact:"Контакти",heroTitle:"Пчеларски магазин САКИ",heroSubtitle:"Натурален мед от собствени пчелини в Долистово и Коркина, пчеларски инвентар и практични съвети от семейство с над 20 години опит.",heroCtaProducts:"Разгледайте продуктите",heroCtaContact:"Свържете се с нас",heroCtaHoney:"Пчелни продукти",heroCtaEquipment:"Всичко за пчеларя",aboutTitle:"За нас",aboutSubtitle:"Семейна фирма с над 20 години опит в пчеларството, натуралния мед и пчелните продукти",storyTitle:"Нашата история",storyText1:"САКИ е семейна фирма, създадена с любов към пчеларството и чистия, натурален мед. Повече от 20 години се грижим за пчелите си и учим от природата. Натрупаният опит и внимание личат във всеки продукт, който предлагаме.",storyText2:"Започнахме скромно, но останахме верни на най-важното: качество, честност и грижа към природата. За нас пчеларството не е просто работа, а начин на живот.",apiariesTitle:"Нашите пчелини",apiariesText1:"Пчелините ни се намират в селата Долистово и Коркина – места с чиста природа и богато разнообразие от растения. Това създава отлични условия за здрави пчелни семейства и качествен мед.",apiariesText2:"Грижим се за всяко пчелно семейство с внимание и отговорност, за да ви предложим чист мед – без добавки и компромиси.",certificationTitle:"Сертификация и качество",certificationText1:"Медът ни е сертифициран от БАБХ (Българска агенция по безопасност на храните) и се произвежда с постоянен контрол върху качеството.",certificationText2:"При нас ще намерите пчелни продукти, на които можете да разчитате - чисти, полезни и направени с грижа.",cardExperience:"20+ години опит",cardExperienceText:"Практически опит в пчеларството и производството на натурален мед.",cardApiaries:"Собствени пчелини",cardApiariesText:"Разполагаме с пчелини в Долистово и Коркина – сред чиста и богата природа.",cardCertification:"Сертифицирано качество",cardCertificationText:"Медът ни е сертифициран от БАБХ и отговаря на изискванията за безопасност.",cardShop:"Магазин в Дупница",cardShopText:"Ще ни намерите на Кооперативния пазар, павилион 5 – за директни покупки и съвети.",cardProducts:"Богат асортимент",cardProductsText:"Предлагаме мед, кошери, инвентар, центрофуги и пчелни продукти.",cardDelivery:"Бърза доставка",cardDeliveryText:"Доставяме бързо и сигурно в цялата страна.",whyChooseTitle:"Защо да изберете САКИ?",whyChoose1:"Над 20 години опит в пчеларството",whyChoose2:"Собствени пчелини с натурален мед",whyChoose3:"Сертифицирано качество от БАБХ",whyChoose4:"Семейна фирма с честно отношение",whyChoose5:"Богат избор от продукти и оборудване",whyChoose6:"Консултации и помощ за пчелари",productsTitle:"Нашите продукти",productsSubtitle:"Мед, пчелни продукти, кошери, рамки, центрофуги и инвентар за ежедневната работа в пчелина",productInquiry:"Запитване →",productsCta:"Търсите нещо конкретно?",productsCtaButton:"Пишете ни",contactTitle:"Свържете се с нас",contactSubtitle:"Имате въпрос за мед, оборудване или доставка? Пишете ни - ще ви отговорим възможно най-скоро.",address:"Адрес",addressValue:"Кооперативен пазар, павилион 5, гр. Дупница",phone:"Телефон",phoneValue:"089 551 7056",email:"Имейл",emailValue:"info@sakimed.com",website:"Уебсайт",websiteValue:"www.sakimed.com",facebook:"Facebook",facebookValue:"facebook.com/Saki2008",workingHours:"Работно време",workingHoursWeekday:"Понеделник – Петък: 09:00 – 18:00",workingHoursSaturday:"Събота: 09:00 – 14:00",formName:"Име *",formNamePlaceholder:"Вашето име",formEmail:"Имейл *",formEmailPlaceholder:"your@email.com",formPhone:"Телефон",formPhonePlaceholder:"+359 88 123 4567",formMessage:"Съобщение *",formMessagePlaceholder:"Напишете какво ви интересува...",formSubmit:"Изпрати",formSubmitting:"Изпращане...",formSuccess:"Съобщението е изпратено успешно! Ще се свържем с вас скоро.",formError:"Възникна грешка. Опитайте отново.",footerTagline:"Вашият надежден партньор в пчеларството",footerRights:"Всички права запазени."},en:{navAbout:"About",navProducts:"Products",navContact:"Contact",heroTitle:"SAKI Beekeeping Shop",heroSubtitle:"Natural honey from our own apiaries in Dolistovo and Korkina, beekeeping equipment, and practical advice from a family with over 20 years of experience.",heroCtaProducts:"Browse Products",heroCtaContact:"Contact Us",heroCtaHoney:"Bee Products",heroCtaEquipment:"For Beekeepers",aboutTitle:"About Us",aboutSubtitle:"A family business with over 20 years of experience in beekeeping and natural honey production",storyTitle:"Our Story",storyText1:"SAKI is a family-run business built on a genuine love for beekeeping and pure, natural honey. For over 20 years, we have cared for our bees and learned from nature itself. That experience shows in every product we offer.",storyText2:"We started small, but stayed true to what matters most – quality, honesty, and respect for nature. For us, beekeeping is not just a job, but a way of life.",apiariesTitle:"Our Apiaries",apiariesText1:"Our apiaries are located in Dolistovo and Korkina – areas with clean nature and rich plant diversity, ideal for healthy bee colonies.",apiariesText2:"We care for every colony with attention and responsibility to deliver pure honey – with no additives and no compromises.",certificationTitle:"Certification & Quality",certificationText1:"Our honey is certified by BABH (Bulgarian Food Safety Agency) and produced with consistent quality control.",certificationText2:"With us, you’ll find products you can trust – natural, beneficial, and made with care.",cardExperience:"20+ Years Experience",cardExperienceText:"Extensive experience in beekeeping and natural honey production.",cardApiaries:"Own Apiaries",cardApiariesText:"We operate our own apiaries in clean and rich natural environments.",cardCertification:"Certified Quality",cardCertificationText:"Our honey meets all safety and quality standards.",cardShop:"Shop in Dupnitsa",cardShopText:"Visit us at the Cooperative Market, Pavilion 5 for direct purchases and advice.",cardProducts:"Wide Selection",cardProductsText:"Honey, hives, equipment, extractors, and bee products.",cardDelivery:"Fast Delivery",cardDeliveryText:"We deliver quickly and reliably across the country.",whyChooseTitle:"Why Choose SAKI?",whyChoose1:"Over 20 years of beekeeping experience",whyChoose2:"Own apiaries with natural honey",whyChoose3:"Certified quality by BABH",whyChoose4:"Family business built on trust",whyChoose5:"Wide range of products and equipment",whyChoose6:"Support and advice for beekeepers",productsTitle:"Our Products",productsSubtitle:"Honey, bee products, hives, frames, extractors, and tools for everyday apiary work",productInquiry:"Inquiry →",productsCta:"Looking for something specific?",productsCtaButton:"Contact Us",contactTitle:"Contact Us",contactSubtitle:"Have a question about honey, equipment, or delivery? Send us a message and we’ll reply as soon as possible.",address:"Address",addressValue:"Cooperative Market, Pavilion 5, Dupnitsa",phone:"Phone",phoneValue:"089 551 7056",email:"Email",emailValue:"info@sakimed.com",website:"Website",websiteValue:"www.sakimed.com",facebook:"Facebook",facebookValue:"facebook.com/Saki2008",workingHours:"Working Hours",workingHoursWeekday:"Monday – Friday: 09:00 – 18:00",workingHoursSaturday:"Saturday: 09:00 – 14:00",formName:"Name *",formNamePlaceholder:"Your name",formEmail:"Email *",formEmailPlaceholder:"your@email.com",formPhone:"Phone",formPhonePlaceholder:"+359 88 123 4567",formMessage:"Message *",formMessagePlaceholder:"Tell us what you need...",formSubmit:"Send",formSubmitting:"Sending...",formSuccess:"Message sent successfully! We’ll get back to you soon.",formError:"Something went wrong. Please try again.",footerTagline:"Your trusted partner in beekeeping",footerRights:"All rights reserved."}},xd=w.createContext(void 0);function ch({children:i}){const[s,u]=w.useState(()=>{if(typeof window<"u"){const f=localStorage.getItem("language");if(f)return f}return"bg"});w.useEffect(()=>{localStorage.setItem("language",s),document.documentElement.lang=s},[s]);const d=f=>uh[s][f]||f;return l.jsx(xd.Provider,{value:{language:s,setLanguage:u,t:d},children:i})}function Ir(){const i=w.useContext(xd);if(!i)throw new Error("useLanguage must be used within a LanguageProvider");return i}function dh(){return l.jsxs("div",{className:"uk-flag",children:[l.jsx("div",{className:"bg"}),l.jsx("div",{className:"diag white d1"}),l.jsx("div",{className:"diag white d2"}),l.jsx("div",{className:"diag red d1"}),l.jsx("div",{className:"diag red d2"}),l.jsx("div",{className:"cross white horizontal"}),l.jsx("div",{className:"cross white vertical"}),l.jsx("div",{className:"cross red horizontal"}),l.jsx("div",{className:"cross red vertical"}),l.jsx("style",{children:`
        .uk-flag {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #012169;
        }

        .bg {
          position: absolute;
          inset: 0;
          background: #012169;
        }

        /* Diagonals */
        .diag {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 140%;
          transform-origin: center;
        }

        .diag.white {
          height: 28%;
          background: #fff;
          z-index: 1;
        }

        .diag.red {
          height: 14%;
          background: #C8102E;
          z-index: 2;
        }

        .diag.d1 {
          transform: translate(-50%, -50%) rotate(26deg);
        }

        .diag.d2 {
          transform: translate(-50%, -50%) rotate(-26deg);
        }

        /* Cross */
        .cross {
          position: absolute;
          z-index: 3;
        }

        .cross.horizontal {
          top: 50%;
          left: 0;
          width: 100%;
          transform: translateY(-50%);
        }

        .cross.vertical {
          left: 50%;
          top: 0;
          height: 100%;
          transform: translateX(-50%);
        }

        /* White cross */
        .cross.white.horizontal {
          height: 30%;
          background: #fff;
        }

        .cross.white.vertical {
          width: 30%;
          background: #fff;
        }

        /* Red cross */
        .cross.red.horizontal {
          height: 18%;
          background: #C8102E;
        }

        .cross.red.vertical {
          width: 18%;
          background: #C8102E;
        }
      `})]})}function fh(){const{language:i,setLanguage:s}=Ir();return l.jsxs("div",{className:"language-switcher",children:[l.jsx("button",{className:`lang-btn ${i==="en"?"active":""}`,onClick:()=>s("en"),"aria-label":"English",title:"English",children:l.jsx(dh,{})}),l.jsx("button",{className:`lang-btn ${i==="bg"?"active":""}`,onClick:()=>s("bg"),"aria-label":"Български",title:"Български",children:l.jsxs("div",{className:"flag-bg",children:[l.jsx("div",{className:"bg-stripe white"}),l.jsx("div",{className:"bg-stripe green"}),l.jsx("div",{className:"bg-stripe red"})]})}),l.jsx("style",{children:`
        .language-switcher {
          display: flex;
          gap: 0.5rem;
        }

        .lang-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 24px;
          border: 1px solid var(--color-border, #e5e7eb);
          border-radius: 3px;
          background: var(--color-white, #fff);
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
          overflow: hidden;
        }

        .lang-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }

        .lang-btn.active {
          border-color: var(--color-primary, #f59e0b);
          box-shadow: 0 0 0 2px var(--color-primary, #f59e0b);
        }

        /* Bulgarian Flag */
        .flag-bg {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .bg-stripe {
          flex: 1;
          width: 100%;
        }

        .bg-stripe.white {
          background: #fff;
        }

        .bg-stripe.green {
          background: #009e49;
        }

        .bg-stripe.red {
          background: #d21034;
        }

        @media (max-width: 768px) {
          .lang-btn {
            width: 28px;
            height: 20px;
          }
        }
      `})]})}function ph(){const[i,s]=w.useState(!1),{t:u,language:d}=Ir(),{getTotalItems:f}=zr(),h=Lr(),v=xt(),j=x=>{if(s(!1),v.pathname==="/"){const k=document.getElementById(x);k&&k.scrollIntoView({behavior:"smooth"})}else h("/"),setTimeout(()=>{const k=document.getElementById(x);k&&k.scrollIntoView({behavior:"smooth"})},100)};return l.jsxs("header",{className:"header",children:[l.jsxs("div",{className:"container header-container",children:[l.jsx(It,{to:"/",className:"logo",onClick:x=>{s(!1),v.pathname==="/"&&(x.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))},children:l.jsx("img",{src:"/bee-logo.jpg",alt:d==="bg"?"Лого на пчеларски магазин САКИ":"SAKI beekeeping shop logo",className:"logo-img"})}),l.jsxs("nav",{className:`nav ${i?"nav-open":""}`,children:[l.jsx("button",{className:"nav-link",onClick:()=>j("about"),style:{background:"none",border:"none",cursor:"pointer"},children:u("navAbout")}),l.jsx(It,{to:"/products",className:"nav-link",onClick:()=>s(!1),children:u("navProducts")}),l.jsx("button",{className:"nav-link",onClick:()=>j("contact"),style:{background:"none",border:"none",cursor:"pointer"},children:u("navContact")}),l.jsxs(It,{to:"/cart",className:"nav-link cart-link",onClick:()=>s(!1),children:["🛒 ",d==="bg"?"Количка":"Cart",f()>0&&l.jsx("span",{className:"cart-badge",children:f()})]}),l.jsx("div",{className:"nav-lang-switcher",children:l.jsx(fh,{})})]}),l.jsx("button",{className:"menu-toggle",onClick:()=>s(!i),"aria-label":d==="bg"?"Отвори менюто":"Toggle menu",children:l.jsx("span",{className:`hamburger ${i?"open":""}`})})]}),l.jsx("style",{children:`
        .header {
          background-color: var(--color-white);
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 4rem;
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--color-secondary);
        }

        .logo-img {
          height: 50px;
          width: auto;
          max-width: 150px;
          object-fit: contain;
          transition: transform 0.2s ease;
        }

        .logo-img:hover {
          transform: scale(1.05);
        }

        .header-right {
          display: none;
        }

        .logo-icon {
          font-size: 2rem;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          text-decoration: none;
          color: var(--color-text);
          font-weight: 500;
          transition: color 0.3s ease;
          display: inline-block;
          white-space: nowrap;
          position: relative;
        }

        .nav-link:hover {
          color: var(--color-primary);
        }

        .cart-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-primary);
        }

        .cart-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--color-primary);
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          font-size: 0.75rem;
          font-weight: 700;
          margin-left: 0.25rem;
        }

        .nav-lang-switcher {
          margin-left: 1rem;
          padding-left: 1rem;
          border-left: 1px solid var(--color-border, #e5e7eb);
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .hamburger {
          display: block;
          width: 24px;
          height: 2px;
          background-color: var(--color-secondary);
          position: relative;
          transition: background-color 0.3s ease;
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background-color: var(--color-secondary);
          transition: transform 0.3s ease;
        }

        .hamburger::before {
          top: -8px;
        }

        .hamburger::after {
          top: 8px;
        }

        .hamburger.open {
          background-color: transparent;
        }

        .hamburger.open::before {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger.open::after {
          transform: translateY(-8px) rotate(-45deg);
        }

        @media (max-width: 768px) {
          .logo-img {
            height: 40px;
            max-width: 120px;
          }

          .menu-toggle {
            display: block;
          }

          .nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--color-white);
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
            box-shadow: var(--shadow-md);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
        }
      `})]})}function mh(){const{t:i,language:s}=Ir();return l.jsxs("footer",{className:"footer",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"footer-grid",children:[l.jsxs("div",{className:"footer-brand",children:[l.jsx("div",{className:"footer-logo",children:l.jsx("img",{src:"/bee-logo.jpg",alt:s==="bg"?"Лого на САКИ":"SAKI logo",style:{height:"40px",width:"40px",objectFit:"contain"}})}),l.jsx("p",{children:s==="bg"?"Семеен пчеларски магазин в Дупница с натурален мед, пчелни продукти и оборудване за пчелари.":"A family beekeeping shop in Dupnitsa with natural honey, bee products, and equipment for beekeepers."})]}),l.jsxs("div",{className:"footer-links",children:[l.jsx("h4",{children:s==="bg"?"Бързи връзки":"Quick Links"}),l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("a",{href:"#about",children:i("navAbout")})}),l.jsx("li",{children:l.jsx("a",{href:"#products",children:i("navProducts")})}),l.jsx("li",{children:l.jsx("a",{href:"#contact",children:i("navContact")})}),l.jsx("li",{children:l.jsx(It,{to:"/admin",rel:"nofollow",style:{color:"rgba(255, 255, 255, 0.3)",fontSize:"0.8rem"},children:s==="bg"?"Админ":"Admin"})})]})]}),l.jsxs("div",{className:"footer-contact",children:[l.jsx("h4",{children:s==="bg"?"Контакти":"Contact"}),l.jsxs("ul",{children:[l.jsxs("li",{children:["📍 ",s==="bg"?"Кооперативен пазар, павилион 5, Дупница":"Cooperative Market, Pavilion 5, Dupnitsa"]}),l.jsx("li",{children:"📞 089 551 7056"}),l.jsx("li",{children:"✉️ info@sakimed.com"}),l.jsx("li",{children:"🌐 www.sakimed.com"}),l.jsxs("li",{children:["📘 ",l.jsx("a",{href:"https://facebook.com/Saki2008",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})]})]})]})]}),l.jsx("div",{className:"footer-bottom",children:l.jsxs("p",{children:["© ",new Date().getFullYear()," САКИ - ",s==="bg"?"Дупница":"Dupnitsa",". ",i("footerRights")]})})]}),l.jsx("style",{children:`
        .footer {
          background-color: var(--color-secondary);
          color: var(--color-white);
          padding: 4rem 0 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .footer-logo .logo-icon {
          font-size: 2rem;
        }

        .footer-logo .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .footer-brand p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .footer-links h4,
        .footer-contact h4 {
          font-size: 1.125rem;
          margin-bottom: 1rem;
          color: var(--color-white);
        }

        .footer-links ul,
        .footer-contact ul {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.5rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--color-primary);
        }

        .footer-contact li {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .footer-bottom p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `})]})}function hh(){const{t:i,language:s}=Ir();return l.jsxs("section",{id:"hero",className:"hero",children:[l.jsxs("div",{className:"hero-background",children:[l.jsx("img",{src:"https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:s==="bg"?"Пчеларски магазин САКИ в Дупница - натурален мед и пчеларски инвентар":"SAKI Beekeeping Shop in Dupnitsa - natural honey and beekeeping equipment",className:"hero-image"}),l.jsx("div",{className:"hero-overlay"}),l.jsx("div",{className:"hero-pattern"})]}),l.jsxs("div",{className:"container hero-content",children:[l.jsxs("div",{className:"hero-text",children:[l.jsx("h1",{className:"hero-title",children:i("heroTitle")}),l.jsx("p",{className:"hero-subtitle",children:i("heroSubtitle")}),l.jsxs("div",{className:"hero-cta",children:[l.jsx(It,{to:"/products?category=pchelni-produkti",className:"btn btn-primary",children:i("heroCtaHoney")}),l.jsx(It,{to:"/products?category=pchelarstvo",className:"btn btn-secondary",children:i("heroCtaEquipment")})]})]}),l.jsx("div",{className:"hero-visual",children:l.jsx("img",{src:"/big-bee.png",alt:s==="bg"?"Пчела":"Bee",className:"bee-icon"})})]}),l.jsx("style",{children:`
        .hero {
          position: relative;
          padding: 6rem 0;
          overflow: hidden;
          background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 1);
        }

        .hero-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.15;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: var(--color-secondary);
          margin-bottom: 1.5rem;
        }

        .hero-title .highlight {
          color: var(--color-primary);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-light);
          margin-bottom: 2rem;
          max-width: 500px;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn {
          text-decoration: none;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .bee-icon {
          max-width: 300px;
          width: 100%;
          height: auto;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 4rem 0;
          }

          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-cta {
            justify-content: center;
          }

          .bee-icon {
            max-width: 200px;
          }
        }
      `})]})}function gh(){const{t:i,language:s}=Ir();return l.jsxs("section",{id:"about",className:"section about",children:[l.jsxs("div",{className:"container",children:[l.jsx("h2",{className:"section-title",children:i("aboutTitle")}),l.jsx("p",{className:"section-subtitle",children:i("aboutSubtitle")}),l.jsx("div",{className:"about-hero-image",children:l.jsx("img",{src:"https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:s==="bg"?"Семейна пчелна ферма САКИ в Долистово и Коркина - натурален пчелен мед":"SAKI family bee farm in Dolistovo and Korkina - natural honey"})}),l.jsxs("div",{className:"about-story",children:[l.jsxs("div",{className:"story-section",children:[l.jsx("h3",{children:i("storyTitle")}),l.jsx("p",{children:i("storyText1")}),l.jsx("p",{children:i("storyText2")})]}),l.jsxs("div",{className:"story-section",children:[l.jsx("h3",{children:i("apiariesTitle")}),l.jsx("p",{children:i("apiariesText1")}),l.jsx("p",{children:i("apiariesText2")})]}),l.jsxs("div",{className:"story-section",children:[l.jsx("h3",{children:i("certificationTitle")}),l.jsx("p",{children:i("certificationText1")}),l.jsx("p",{children:i("certificationText2")})]})]}),l.jsxs("div",{className:"about-grid",children:[l.jsxs("div",{className:"about-card",children:[l.jsx("div",{className:"about-icon",children:"🐝"}),l.jsx("h3",{children:i("cardExperience")}),l.jsx("p",{children:i("cardExperienceText")})]}),l.jsxs("div",{className:"about-card",children:[l.jsx("div",{className:"about-icon",children:"🏡"}),l.jsx("h3",{children:i("cardApiaries")}),l.jsx("p",{children:i("cardApiariesText")})]}),l.jsxs("div",{className:"about-card",children:[l.jsx("div",{className:"about-icon",children:"✅"}),l.jsx("h3",{children:i("cardCertification")}),l.jsx("p",{children:i("cardCertificationText")})]}),l.jsxs("div",{className:"about-card",children:[l.jsx("div",{className:"about-icon",children:"🏪"}),l.jsx("h3",{children:i("cardShop")}),l.jsx("p",{children:i("cardShopText")})]}),l.jsxs("div",{className:"about-card",children:[l.jsx("div",{className:"about-icon",children:"📦"}),l.jsx("h3",{children:i("cardProducts")}),l.jsx("p",{children:i("cardProductsText")})]}),l.jsxs("div",{className:"about-card",children:[l.jsx("div",{className:"about-icon",children:"🚚"}),l.jsx("h3",{children:i("cardDelivery")}),l.jsx("p",{children:i("cardDeliveryText")})]})]}),l.jsx("div",{className:"about-info",children:l.jsxs("div",{className:"about-info-content",children:[l.jsx("h3",{children:i("whyChooseTitle")}),l.jsxs("ul",{className:"about-list",children:[l.jsx("li",{children:i("whyChoose1")}),l.jsx("li",{children:i("whyChoose2")}),l.jsx("li",{children:i("whyChoose3")}),l.jsx("li",{children:i("whyChoose4")}),l.jsx("li",{children:i("whyChoose5")}),l.jsx("li",{children:i("whyChoose6")})]})]})})]}),l.jsx("style",{children:`
        .about {
          background-color: var(--color-white);
        }

        .about-hero-image {
          width: 100%;
          height: 400px;
          margin-bottom: 4rem;
          border-radius: 1rem;
          overflow: hidden;
        }

        .about-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .about-hero-image {
            height: 250px;
          }
        }

        .about-story {
          background: var(--color-background);
          padding: 3rem;
          border-radius: 1rem;
          margin-bottom: 4rem;
          border-left: 5px solid var(--color-primary);
        }

        .story-section {
          margin-bottom: 2.5rem;
        }

        .story-section:last-child {
          margin-bottom: 0;
        }

        .story-section h3 {
          font-size: 1.5rem;
          color: var(--color-secondary);
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .story-section p {
          color: var(--color-text);
          line-height: 1.8;
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .story-section p strong {
          color: var(--color-secondary);
          font-weight: 600;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .about-card {
          background: var(--color-background);
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .about-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .about-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .about-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--color-secondary);
        }

        .about-card p {
          color: var(--color-text-light);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .about-info {
          background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 100%);
          border-radius: 1rem;
          padding: 3rem;
        }

        .about-info-content h3 {
          color: var(--color-white);
          font-size: 1.75rem;
          margin-bottom: 1.5rem;
        }

        .about-list {
          list-style: none;
          display: grid;
          gap: 1rem;
        }

        .about-list li {
          color: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          line-height: 1.6;
        }

        .about-list li::before {
          content: '✓';
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: var(--color-primary);
          color: var(--color-secondary);
          border-radius: 50%;
          font-weight: bold;
          font-size: 0.875rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (max-width: 768px) {
          .about-info {
            padding: 2rem;
          }

          .about-story {
            padding: 2rem;
          }

          .story-section h3 {
            font-size: 1.25rem;
          }

          .about-list li {
            font-size: 0.95rem;
          }
        }
      `})]})}const cn="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 420 280%22%3E%3Crect width=%22420%22 height=%22280%22 fill=%22%23f8fafc%22/%3E%3Ctext x=%22210%22 y=%22140%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%2390a4ae%22%3EПродукт%3C/text%3E%3C/svg%3E",vh=[{id:1,name:"Кошери и рамки",description:"Кошери Дадан-Блат и Лангстрот, рамки, восъчни основи и части за поддръжка на пчелина",icon:"🏠",image:cn},{id:2,name:"Защитно облекло",description:"Пчеларски костюми, ръкавици, було и практични средства за спокойна работа",icon:"👕",image:cn},{id:3,name:"Центрофуги",description:"Ръчни и електрически центрофуги за внимателно и удобно вадене на мед",icon:"🍯",image:cn},{id:4,name:"Инвентар и инструменти",description:"Пчеларски ножове, вилици, дималки и основни инструменти за всекидневна работа",icon:"🔧",image:cn},{id:5,name:"Подхранване за пчели",description:"Подхранващи сиропи и добавки за силни и добре поддържани пчелни семейства",icon:"🫗",image:cn},{id:6,name:"Прополисов мехлем",description:"Натурален прополисов мехлем за локална грижа за кожата",icon:"🧴",image:cn}];function yh(){const{t:i}=Ir();return l.jsxs("section",{id:"products",className:"section products",children:[l.jsxs("div",{className:"container",children:[l.jsx("h2",{className:"section-title",children:i("productsTitle")}),l.jsx("p",{className:"section-subtitle",children:i("productsSubtitle")}),l.jsx("div",{className:"products-grid",children:vh.map(s=>l.jsxs("div",{className:"product-card",children:[l.jsx("div",{className:"product-image",children:l.jsx("img",{src:s.image,alt:s.name})}),l.jsx("div",{className:"product-icon",children:s.icon}),l.jsx("h3",{className:"product-name",children:s.name}),l.jsx("p",{className:"product-description",children:s.description}),l.jsx("a",{href:"#contact",className:"product-link",children:i("productInquiry")})]},s.id))}),l.jsxs("div",{className:"products-cta",children:[l.jsx("p",{children:i("productsCta")}),l.jsx("a",{href:"#contact",className:"btn btn-primary",children:i("productsCtaButton")})]})]}),l.jsx("style",{children:`
        .products {
          background-color: var(--color-background);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .product-card {
          background: var(--color-white);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .product-image {
          width: 100%;
          height: 180px;
          margin-bottom: 1rem;
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-image img {
          transform: scale(1.05);
        }

        .product-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .product-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-secondary);
          margin-bottom: 0.75rem;
        }

        .product-description {
          color: var(--color-text-light);
          font-size: 0.95rem;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .product-link {
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .product-link:hover {
          color: var(--color-primary-dark);
        }

        .products-cta {
          text-align: center;
          padding: 2rem;
          background: var(--color-white);
          border-radius: 1rem;
          box-shadow: var(--shadow-sm);
        }

        .products-cta p {
          color: var(--color-text-light);
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }
      `})]})}const Ci="",xh="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 240%22%3E%3Crect width=%22320%22 height=%22240%22 fill=%22%23f6f8fb%22/%3E%3Ctext x=%22160%22 y=%22120%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%23999%22%3EБез изображение%3C/text%3E%3C/svg%3E";function Pi(i){if(!i)return xh;const s=i.trim();return s.startsWith("/uploads/")?`${Ci}${s}`:s.startsWith("uploads/")?`${Ci}/${s}`:(s.startsWith(`${Ci}/uploads/`)||/^https?:\/\//.test(s),s)}function Wt(i){return`${Ci}${i.startsWith("/")?i:`/${i}`}`}function wh(){const{t:i}=Ir(),[s,u]=w.useState({name:"",email:"",phone:"",message:""}),[d,f]=w.useState({type:null,message:""}),[h,v]=w.useState(!1),j=async k=>{k.preventDefault(),v(!0),f({type:null,message:""});try{const P=await fetch(Wt("/api/contact"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),N=await P.json();P.ok?(f({type:"success",message:i("formSuccess")}),u({name:"",email:"",phone:"",message:""})):f({type:"error",message:N.message||i("formError")})}catch{f({type:"error",message:i("formError")})}finally{v(!1)}},x=k=>{const{name:P,value:N}=k.target;u(R=>({...R,[P]:N}))};return l.jsxs("section",{id:"contact",className:"section contact",children:[l.jsxs("div",{className:"container",children:[l.jsx("h2",{className:"section-title",children:i("contactTitle")}),l.jsx("p",{className:"section-subtitle",children:i("contactSubtitle")}),l.jsxs("div",{className:"contact-grid",children:[l.jsxs("div",{className:"contact-info",children:[l.jsxs("div",{className:"contact-item",children:[l.jsx("div",{className:"contact-icon",children:"📍"}),l.jsxs("div",{children:[l.jsx("h3",{children:i("address")}),l.jsx("p",{children:i("addressValue")})]})]}),l.jsxs("div",{className:"contact-item",children:[l.jsx("div",{className:"contact-icon",children:"📞"}),l.jsxs("div",{children:[l.jsx("h3",{children:i("phone")}),l.jsx("p",{children:i("phoneValue")})]})]}),l.jsxs("div",{className:"contact-item",children:[l.jsx("div",{className:"contact-icon",children:"✉️"}),l.jsxs("div",{children:[l.jsx("h3",{children:i("email")}),l.jsx("p",{children:i("emailValue")})]})]}),l.jsxs("div",{className:"contact-item",children:[l.jsx("div",{className:"contact-icon",children:"🌐"}),l.jsxs("div",{children:[l.jsx("h3",{children:i("website")}),l.jsx("p",{children:i("websiteValue")})]})]}),l.jsxs("div",{className:"contact-item",children:[l.jsx("div",{className:"contact-icon",children:"📘"}),l.jsxs("div",{children:[l.jsx("h3",{children:i("facebook")}),l.jsx("p",{children:l.jsx("a",{href:"https://facebook.com/Saki2008",target:"_blank",rel:"noopener noreferrer",children:i("facebookValue")})})]})]}),l.jsxs("div",{className:"contact-item",children:[l.jsx("div",{className:"contact-icon",children:"🕐"}),l.jsxs("div",{children:[l.jsx("h3",{children:i("workingHours")}),l.jsx("p",{children:i("workingHoursWeekday")}),l.jsx("p",{children:i("workingHoursSaturday")})]})]})]}),l.jsxs("form",{className:"contact-form",onSubmit:j,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"name",children:i("formName")}),l.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:x,required:!0,placeholder:i("formNamePlaceholder")})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"email",children:i("formEmail")}),l.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:x,required:!0,placeholder:i("formEmailPlaceholder")})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"phone",children:i("formPhone")}),l.jsx("input",{type:"tel",id:"phone",name:"phone",value:s.phone,onChange:x,placeholder:i("formPhonePlaceholder")})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"message",children:i("formMessage")}),l.jsx("textarea",{id:"message",name:"message",value:s.message,onChange:x,required:!0,placeholder:i("formMessagePlaceholder"),rows:5})]}),l.jsx("button",{type:"submit",className:"btn btn-primary",disabled:h,children:i(h?"formSubmitting":"formSubmit")}),d.type&&l.jsx("div",{className:`form-status form-status-${d.type}`,children:d.message})]})]})]}),l.jsx("style",{children:`
        .contact {
          background-color: var(--color-white);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .contact-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .contact-item h3 {
          font-size: 1.125rem;
          color: var(--color-secondary);
          margin-bottom: 0.25rem;
        }

        .contact-item p {
          color: var(--color-text-light);
          font-size: 0.95rem;
        }

        .contact-form {
          background: var(--color-background);
          padding: 2rem;
          border-radius: 1rem;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--color-secondary);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact-form .btn {
          width: 100%;
        }

        .contact-form .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form-status {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
          text-align: center;
        }

        .form-status-success {
          background-color: #d1fae5;
          color: #065f46;
        }

        .form-status-error {
          background-color: #fee2e2;
          color: #991b1b;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}const Li="https://www.sakimed.com",Va="САКИ - пчеларски магазин в Дупница",Qa=`${Li}/bee-logo.jpg`,wd="САКИ е семеен пчеларски магазин в Дупница. Предлагаме натурален мед от собствени пчелини, прополис, кошери, центрофуги и пчеларски инвентар.";function _i(i="/"){return/^https?:\/\//.test(i)?i:i.startsWith("data:")?Qa:`${Li}${i.startsWith("/")?i:`/${i}`}`}function kh(){return{"@context":"https://schema.org","@type":"Store",name:"САКИ - пчеларски магазин",alternateName:"SAKI Beekeeping Shop",description:wd,url:Li,telephone:"+359895517056",email:"info@sakimed.com",image:Qa,priceRange:"$$",foundingDate:"2006",address:{"@type":"PostalAddress",streetAddress:"Кооперативен пазар, павилион 5",addressLocality:"Дупница",postalCode:"2600",addressCountry:"BG"},openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"09:00",closes:"18:00"},{"@type":"OpeningHoursSpecification",dayOfWeek:"Saturday",opens:"09:00",closes:"14:00"}],sameAs:["https://facebook.com/Saki2008"],areaServed:{"@type":"Country",name:"Bulgaria"},makesOffer:[{"@type":"Offer",itemOffered:{"@type":"Product",name:"Натурален пчелен мед"}},{"@type":"Offer",itemOffered:{"@type":"Product",name:"Пчеларски инвентар"}},{"@type":"Offer",itemOffered:{"@type":"Product",name:"Кошери и рамки"}}]}}function Sh(){return{"@context":"https://schema.org","@type":"WebSite",name:Va,url:Li,inLanguage:"bg-BG",publisher:{"@type":"Organization",name:"САКИ"}}}function _r(i,s){let u=document.querySelector(`meta[name="${i}"]`);u||(u=document.createElement("meta"),u.name=i,document.head.appendChild(u)),u.content=s}function Rr(i,s){let u=document.querySelector(`meta[property="${i}"]`);u||(u=document.createElement("meta"),u.setAttribute("property",i),document.head.appendChild(u)),u.content=s}function jh(i){let s=document.querySelector('link[rel="canonical"]');s||(s=document.createElement("link"),s.rel="canonical",document.head.appendChild(s)),s.href=i}function Eh(i){let s=document.querySelector('script[data-page-json-ld="true"]');if(!i){s==null||s.remove();return}s||(s=document.createElement("script"),s.type="application/ld+json",s.dataset.pageJsonLd="true",document.head.appendChild(s)),s.textContent=i}function ct({title:i,description:s,path:u,image:d=Qa,type:f="website",noindex:h=!1,jsonLd:v}){const j=xt(),x=_i(u??j.pathname),k=_i(d),P=v?JSON.stringify(v):"";return w.useEffect(()=>{document.title=i,jh(x),_r("description",s),_r("robots",h?"noindex, nofollow":"index, follow"),_r("theme-color","#f59e0b"),Rr("og:site_name",Va),Rr("og:type",f==="product"?"product":f),Rr("og:title",i),Rr("og:description",s),Rr("og:url",x),Rr("og:image",k),Rr("og:locale","bg_BG"),_r("twitter:card","summary_large_image"),_r("twitter:title",i),_r("twitter:description",s),_r("twitter:image",k),Eh(P)},[x,s,k,P,h,i,f]),null}const Ch=(...i)=>{typeof window<"u"&&(typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),window.gtag(...i))},Nh=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function bh(i){return i.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(s,u,d)=>u>0&&u+s.length!==d.length&&s.search(Nh)>-1&&d.charAt(u-2)!==":"&&(d.charAt(u+s.length)!=="-"||d.charAt(u-1)==="-")&&d.charAt(u-1).search(/[^\s-]/)<0?s.toLowerCase():s.substr(1).search(/[A-Z]|\../)>-1?s:s.charAt(0).toUpperCase()+s.substr(1))}function Ph(i){return typeof i=="string"&&i.indexOf("@")!==-1}const _h="REDACTED (Potential Email Address)";function Rh(i){return Ph(i)?(console.warn("This arg looks like an email address, redacting."),_h):i}function Ra(i="",s=!0,u=!0){let d=i||"";return s&&(d=bh(i)),u&&(d=Rh(d)),d}var Th=class{constructor(){je(this,"isInitialized");je(this,"_testMode");je(this,"_currentMeasurementId");je(this,"_hasLoadedGA");je(this,"_isQueuing");je(this,"_queueGtag");je(this,"reset",()=>{this.isInitialized=!1,this._testMode=!1,this._currentMeasurementId="",this._hasLoadedGA=!1,this._isQueuing=!1,this._queueGtag=[]});je(this,"_gtag",(...i)=>{this._testMode?this._queueGtag.push(i):this._isQueuing?this._queueGtag.push(i):Ch(...i)});je(this,"_loadGA",(i,s,u="https://www.googletagmanager.com/gtag/js")=>{if(!(typeof window>"u"||typeof document>"u")&&!this._hasLoadedGA){const d=document.createElement("script");d.async=!0,d.src=`${u}?id=${i}`,s&&d.setAttribute("nonce",s),document.body.appendChild(d),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},this._hasLoadedGA=!0}});je(this,"_toGtagOptions",i=>{if(!i)return;const s={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"};return Object.entries(i).reduce((u,[d,f])=>(s[d]?u[s[d]]=f:u[d]=f,u),{})});je(this,"initialize",(i,s={})=>{if(!i)throw new Error("Require GA_MEASUREMENT_ID");const u=typeof i=="string"?[{trackingId:i}]:i;this._currentMeasurementId=u[0].trackingId;const{gaOptions:d,gtagOptions:f,nonce:h,testMode:v=!1,gtagUrl:j}=s;if(this._testMode=v,v||this._loadGA(this._currentMeasurementId,h,j),this.isInitialized||(this._gtag("js",new Date),u.forEach(x=>{const k={...this._toGtagOptions({...d,...x.gaOptions}),...f,...x.gtagOptions};Object.keys(k).length?this._gtag("config",x.trackingId,k):this._gtag("config",x.trackingId)})),this.isInitialized=!0,!v){const x=[...this._queueGtag];for(this._queueGtag=[],this._isQueuing=!1;x.length;){const k=x.shift();this._gtag(...k),k[0]==="get"&&(this._isQueuing=!0)}}});je(this,"set",i=>{if(!i){console.warn("`fieldsObject` is required in .set()");return}if(typeof i!="object"){console.warn("Expected `fieldsObject` arg to be an Object");return}Object.keys(i).length===0&&console.warn("empty `fieldsObject` given to .set()"),this._gaCommand("set",i)});je(this,"_gaCommandSendEvent",(i,s,u,d,f)=>{this._gtag("event",s,{event_category:i,event_label:u,value:d,...f&&{non_interaction:f.nonInteraction},...this._toGtagOptions(f)})});je(this,"_gaCommandSendEventParameters",(...i)=>{if(typeof i[0]=="string")this._gaCommandSendEvent(...i.slice(1));else{const{eventCategory:s,eventAction:u,eventLabel:d,eventValue:f,hitType:h,...v}=i[0];this._gaCommandSendEvent(s,u,d,f,v)}});je(this,"_gaCommandSendTiming",(i,s,u,d)=>{this._gtag("event","timing_complete",{name:s,value:u,event_category:i,event_label:d})});je(this,"_gaCommandSendPageview",(i,s)=>{if(s&&Object.keys(s).length){const{title:u,location:d,...f}=this._toGtagOptions(s)||{};this._gtag("event","page_view",{...i&&{page_path:i},...u&&{page_title:u},...d&&{page_location:d},...f})}else i?this._gtag("event","page_view",{page_path:i}):this._gtag("event","page_view")});je(this,"_gaCommandSendPageviewParameters",(...i)=>{if(typeof i[0]=="string")this._gaCommandSendPageview(...i.slice(1));else{const{page:s,hitType:u,...d}=i[0];this._gaCommandSendPageview(s,d)}});je(this,"_gaCommandSend",(...i)=>{const s=typeof i[0]=="string"?i[0]:i[0].hitType;switch(s){case"event":this._gaCommandSendEventParameters(...i);break;case"pageview":this._gaCommandSendPageviewParameters(...i);break;case"timing":this._gaCommandSendTiming(...i.slice(1));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn(`Unsupported send command: ${s}`);break;default:console.warn(`Send command doesn't exist: ${s}`)}});je(this,"_gaCommandSet",(...i)=>{typeof i[0]=="string"&&(i[0]={[i[0]]:i[1]}),this._gtag("set",this._toGtagOptions(i[0]))});je(this,"_gaCommand",(i,...s)=>{switch(i){case"send":this._gaCommandSend(...s);break;case"set":this._gaCommandSet(...s);break;default:console.warn(`Command doesn't exist: ${i}`)}});je(this,"ga",(...i)=>{if(typeof i[0]=="string")this._gaCommand(...i);else{const[s]=i;this._gtag("get",this._currentMeasurementId,"client_id",u=>{this._isQueuing=!1;const d=this._queueGtag;for(s({get:f=>f==="clientId"?u:f==="trackingId"?this._currentMeasurementId:f==="apiVersion"?"1":void 0});d.length;){const f=d.shift();this._gtag(...f)}}),this._isQueuing=!0}return this.ga});je(this,"event",(i,s)=>{if(typeof i=="string")this._gtag("event",i,this._toGtagOptions(s));else{const{action:u,category:d,label:f,value:h,nonInteraction:v,transport:j}=i;if(!d||!u){console.warn("args.category AND args.action are required in event()");return}const x={hitType:"event",eventCategory:Ra(d),eventAction:Ra(u)};f&&(x.eventLabel=Ra(f)),typeof h<"u"&&(typeof h!="number"?console.warn("Expected `args.value` arg to be a Number."):x.eventValue=h),typeof v<"u"&&(typeof v!="boolean"?console.warn("`args.nonInteraction` must be a boolean."):x.nonInteraction=v),typeof j<"u"&&(typeof j!="string"?console.warn("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(j)===-1&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),x.transport=j)),this._gaCommand("send",x)}});je(this,"send",i=>{this._gaCommand("send",i)});this.reset()}gtag(...i){this._gtag(...i)}},Lh=new Th,kd=Lh;function zh(){return w.useEffect(()=>{kd.send({hitType:"pageview",page:window.location.pathname+window.location.search})},[]),l.jsxs(l.Fragment,{children:[l.jsx(ct,{title:"САКИ - пчеларски магазин в Дупница | Натурален мед и пчеларски инвентар",description:wd,path:"/",jsonLd:[kh(),Sh()]}),l.jsx(hh,{}),l.jsx(gh,{}),l.jsx(yh,{}),l.jsx(wh,{})]})}function Ih({id:i,slug:s,name:u,price:d,salePrice:f,image:h,onViewDetails:v}){const{addToCart:j}=zr(),x=f??d,k=N=>{N.stopPropagation(),j({id:i,slug:s,name:u,price:d,salePrice:f,image:h},1)},P=()=>{v&&v(s||i)};return l.jsxs("div",{className:"product-card-shopping",onClick:P,children:[l.jsx("div",{className:"product-image-container",children:l.jsx("img",{src:h,alt:u,className:"product-image"})}),l.jsxs("div",{className:"product-card-content",children:[l.jsx("h3",{className:"product-card-name",children:u}),l.jsxs("div",{className:"product-card-price",children:[f&&l.jsxs("span",{className:"old-price",children:[d," лв."]}),l.jsxs("span",{children:[x," лв."]})]}),l.jsxs("div",{className:"product-card-actions",children:[v&&l.jsx("button",{className:"btn btn-link",onClick:N=>{N.stopPropagation(),v(s||i)},children:"Детайли"}),l.jsx("button",{className:"btn btn-primary",onClick:k,children:"Добави в количката"})]})]}),l.jsx("style",{children:`
        .product-card-shopping {
          background: white;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
          cursor: pointer;
        }

        .product-card-shopping:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }

        .product-image-container {
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: #f5f5f5;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .product-card-shopping:hover .product-image {
          transform: scale(1.05);
        }

        .product-card-content {
          padding: 1.25rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .product-card-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-secondary);
          margin: 0 0 0.75rem 0;
        }

        .product-card-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 1rem;
          display: flex;
          gap: 0.5rem;
          align-items: baseline;
          flex-wrap: wrap;
        }

        .old-price {
          color: #9ca3af;
          text-decoration: line-through;
          font-size: 1rem;
          font-weight: 500;
        }

        .product-card-actions {
          display: flex;
          gap: 0.5rem;
          margin-top: auto;
        }

        .btn-link {
          flex: 0 0 auto;
          padding: 0.5rem 1rem;
          background: white;
          color: var(--color-primary);
          border: 1px solid var(--color-primary);
          border-radius: 0.375rem;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-link:hover {
          background: var(--color-primary);
          color: white;
        }
      `})]})}function Dh(){var Z;const i=Lr(),[s]=rh(),[u,d]=w.useState([]),[f,h]=w.useState([]),[v,j]=w.useState([]),[x,k]=w.useState(!0),[P,N]=w.useState(""),[R,B]=w.useState("all");w.useEffect(()=>{const W=s.get("category");W==="honey"?B("pchelni-produkti"):W==="equipment"?B("pchelarstvo"):W&&B(W)},[s]),w.useEffect(()=>{(async()=>{try{const[ne,de,ve]=await Promise.all([fetch(Wt("/api/products")),fetch(Wt("/api/categories")),fetch(Wt("/api/promotions"))]);if(!ne.ok||!de.ok)throw new Error("Не успяхме да заредим продуктите.");const le=await ne.json(),Oe=await de.json(),Be=ve.ok?await ve.json():[],it=le.map(Pe=>({...Pe,image:Pi(Pe.image)}));d(it),h(Oe),j(Be)}catch(ne){N(ne instanceof Error?ne.message:"Възникна грешка при зареждането.")}finally{k(!1)}})()},[]);const M=R==="all"?u:u.filter(W=>W.category===R),F=R==="pchelni-produkti"?"Пчелни продукти от САКИ | Натурален мед и прополис":R==="pchelarstvo"?"Пчеларски инвентар и оборудване | САКИ Дупница":"Продукти | Мед и пчеларски инвентар от САКИ",I=(Z=f.find(W=>W.slug===R))==null?void 0:Z.name,$=v.find(W=>W.active&&W.bannerText),G=R==="pchelni-produkti"?"Разгледайте пчелните продукти на САКИ - натурален мед от собствени пчелини и прополис с гарантирано качество.":R==="pchelarstvo"?"Кошери, рамки, центрофуги, защитно облекло и практичен пчеларски инвентар за начинаещи и опитни пчелари.":"Мед, пчелни продукти, кошери, центрофуги и пчеларски инвентар от семеен магазин САКИ в Дупница.";return l.jsxs(l.Fragment,{children:[l.jsx(ct,{title:F,description:G,path:"/products"}),l.jsxs("div",{className:"products-page",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"products-header",children:[l.jsx("h1",{children:I||"Нашите продукти"}),l.jsx("p",{children:"Натурален мед, пчелни продукти и оборудване за работа в пчелина"})]}),$&&l.jsxs("div",{className:"promotion-banner",children:[l.jsx("strong",{children:$.title}),l.jsx("span",{children:$.bannerText})]}),P&&l.jsx("div",{className:"error-message",children:P}),x?l.jsx("div",{className:"loading",children:"Зареждане..."}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"category-filters",children:[l.jsx("button",{className:`filter-btn ${R==="all"?"active":""}`,onClick:()=>B("all"),children:"Всички продукти"}),f.map(W=>l.jsx("button",{className:`filter-btn ${R===W.slug?"active":""}`,onClick:()=>B(W.slug),children:W.name},W.id))]}),M.length===0?l.jsx("div",{className:"no-products",children:"В тази категория все още няма продукти."}):l.jsx("div",{className:"products-grid",children:M.map(W=>l.jsx(Ih,{id:W.id,slug:W.slug,name:W.name,price:W.price,salePrice:W.salePrice,image:W.image,onViewDetails:ne=>i(`/products/${ne}`)},W.id))})]})]}),l.jsx("style",{children:`
        .products-page {
          min-height: 100vh;
          padding: 3rem 0;
          background: #f9f9f9;
        }

        .products-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .products-header h1 {
          font-size: 2.5rem;
          color: var(--color-secondary);
          margin: 0 0 1rem 0;
        }

        .products-header p {
          font-size: 1.125rem;
          color: var(--color-text-light);
          max-width: 600px;
          margin: 0 auto;
        }

        .error-message {
          background: #fee;
          color: #c33;
          padding: 1rem;
          border-radius: 0.375rem;
          margin-bottom: 2rem;
          border-left: 4px solid #c33;
        }

        .promotion-banner {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          align-items: center;
          background: #fff7ed;
          color: #7c2d12;
          border: 1px solid #fed7aa;
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .loading {
          text-align: center;
          padding: 3rem;
          font-size: 1.1rem;
          color: var(--color-text-light);
        }

        .category-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid var(--color-primary);
          background: white;
          color: var(--color-primary);
          border-radius: 0.375rem;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s;
          font-weight: 500;
        }

        .filter-btn:hover {
          background: var(--color-primary);
          color: white;
        }

        .filter-btn.active {
          background: var(--color-primary);
          color: white;
        }

        .no-products {
          text-align: center;
          padding: 3rem;
          color: var(--color-text-light);
          font-size: 1.1rem;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .products-header h1 {
            font-size: 2rem;
          }

          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1.5rem;
          }
        }
      `})]})]})}function Oh(){const{id:i}=dd(),s=Lr(),{addToCart:u}=zr(),[d,f]=w.useState(null),[h,v]=w.useState(!0),[j,x]=w.useState(""),[k,P]=w.useState(1),[N,R]=w.useState(!1);w.useEffect(()=>{(async()=>{try{const ne=await fetch(Wt(`/api/products/${i}`));if(!ne.ok)throw new Error("Продуктът не е намерен.");const de=await ne.json();de.image=Pi(de.image),f(de)}catch(ne){x(ne instanceof Error?ne.message:"Възникна грешка при зареждането.")}finally{v(!1)}})()},[i]);const B=()=>{d&&(u(d,k),R(!0),setTimeout(()=>R(!1),2e3))};if(h)return l.jsxs(l.Fragment,{children:[l.jsx(ct,{title:"Продукт | САКИ",description:"Продукт от пчеларски магазин САКИ в Дупница.",path:`/products/${i??""}`}),l.jsx("div",{className:"product-detail-page",children:l.jsx("div",{className:"container",children:l.jsx("div",{className:"loading",children:"Зареждане..."})})})]});if(j||!d)return l.jsxs(l.Fragment,{children:[l.jsx(ct,{title:"Продуктът не е намерен | САКИ",description:"Този продукт не е наличен в каталога на САКИ.",path:`/products/${i??""}`,noindex:!0}),l.jsx("div",{className:"product-detail-page",children:l.jsxs("div",{className:"container",children:[l.jsx("div",{className:"error-message",children:j||"Продуктът не е намерен."}),l.jsx("button",{className:"btn btn-primary",onClick:()=>s("/products"),children:"Назад към продуктите"})]})})]});const M=d.categoryName||(d.category==="pchelni-produkti"?"Пчелни продукти":"За пчелари"),F=d.stock>0,I=`${d.name} | ${Va}`,$=d.salePrice??d.price,G=`${d.description} Цена: ${$} лв. ${F?"В наличност.":"Временно изчерпан."}`,Z={"@context":"https://schema.org","@type":"Product",name:d.name,description:d.description,image:_i(d.image),brand:{"@type":"Brand",name:"САКИ"},offers:{"@type":"Offer",url:_i(`/products/${d.slug}`),priceCurrency:"BGN",price:$,availability:F?"https://schema.org/InStock":"https://schema.org/OutOfStock"}};return l.jsxs("div",{className:"product-detail-page",children:[l.jsx(ct,{title:I,description:G,path:`/products/${d.slug}`,image:d.image,type:"product",jsonLd:Z}),l.jsxs("div",{className:"container",children:[l.jsx("button",{className:"back-btn",onClick:()=>s("/products"),children:"← Назад"}),l.jsxs("div",{className:"product-detail-container",children:[l.jsx("div",{className:"product-detail-image",children:l.jsx("img",{src:d.image,alt:d.name})}),l.jsxs("div",{className:"product-detail-content",children:[l.jsx("div",{className:"breadcrumb",children:l.jsx("span",{className:"category-badge",children:M})}),l.jsx("h1",{className:"product-detail-name",children:d.name}),l.jsxs("div",{className:"product-detail-price",children:[d.salePrice&&l.jsxs("span",{className:"old-price",children:[d.price," лв."]}),l.jsx("span",{className:"price-amount",children:$}),l.jsx("span",{className:"price-currency",children:"лв."})]}),l.jsxs("div",{className:"product-detail-description",children:[l.jsx("h3",{children:"Описание"}),l.jsx("p",{children:d.description})]}),!F&&l.jsx("div",{className:"stock-warning",children:"В момента няма наличност."}),l.jsxs("div",{className:"product-detail-actions",children:[l.jsxs("div",{className:"quantity-selector",children:[l.jsx("label",{htmlFor:"quantity",children:"Количество:"}),l.jsxs("div",{className:"quantity-controls",children:[l.jsx("button",{className:"qty-btn",onClick:()=>P(Math.max(1,k-1)),disabled:k===1,children:"−"}),l.jsx("input",{id:"quantity",type:"number",min:"1",value:k,onChange:W=>P(parseInt(W.target.value,10)||1),className:"qty-input"}),l.jsx("button",{className:"qty-btn",onClick:()=>P(k+1),children:"+"})]})]}),l.jsx("button",{className:"btn btn-primary btn-large",onClick:B,disabled:!F,children:"Добави в количката"}),N&&l.jsx("div",{className:"added-message",children:"✓ Добавено в количката."})]}),l.jsxs("div",{className:"product-info",children:[l.jsxs("div",{className:"info-item",children:[l.jsx("span",{className:"info-label",children:"Наличност:"}),l.jsx("span",{className:"info-value",children:F?`${d.stock} бр.`:"Временно изчерпан"})]}),l.jsxs("div",{className:"info-item",children:[l.jsx("span",{className:"info-label",children:"Категория:"}),l.jsx("span",{className:"info-value",children:M})]})]})]})]})]}),l.jsx("style",{children:`
        .product-detail-page {
          min-height: 100vh;
          padding: 2rem 0;
          background: #f9f9f9;
        }

        .back-btn {
          background: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          cursor: pointer;
          color: var(--color-primary);
          font-size: 1rem;
          margin-bottom: 2rem;
          transition: all 0.2s;
        }

        .back-btn:hover {
          background: var(--color-primary);
          color: white;
        }

        .product-detail-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          background: white;
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .product-detail-image {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 0.5rem;
          overflow: hidden;
          background: #f5f5f5;
        }

        .product-detail-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-detail-content {
          display: flex;
          flex-direction: column;
        }

        .breadcrumb {
          margin-bottom: 1rem;
        }

        .category-badge {
          display: inline-block;
          background: var(--color-primary);
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .product-detail-name {
          font-size: 2rem;
          color: var(--color-secondary);
          margin: 1rem 0 1.5rem 0;
        }

        .product-detail-price {
          font-size: 2.5rem;
          color: var(--color-primary);
          font-weight: 700;
          margin-bottom: 2rem;
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .old-price {
          color: #9ca3af;
          text-decoration: line-through;
          font-size: 1.3rem;
          font-weight: 500;
        }

        .price-amount {
          margin-right: 0.25rem;
        }

        .price-currency {
          font-size: 1.5rem;
        }

        .product-detail-description {
          margin-bottom: 2rem;
        }

        .product-detail-description h3 {
          color: var(--color-secondary);
          margin: 0 0 0.75rem 0;
          font-size: 1.1rem;
        }

        .product-detail-description p {
          color: var(--color-text-light);
          line-height: 1.6;
          margin: 0;
        }

        .stock-warning {
          background: #fff3cd;
          color: #856404;
          padding: 1rem;
          border-radius: 0.375rem;
          margin-bottom: 1.5rem;
          border-left: 4px solid #ffc107;
        }

        .product-detail-actions {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .quantity-selector {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .quantity-selector label {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-secondary);
        }

        .quantity-controls {
          display: flex;
          border: 1px solid #ddd;
          border-radius: 0.375rem;
          overflow: hidden;
        }

        .qty-btn {
          width: 40px;
          height: 40px;
          border: none;
          background: white;
          cursor: pointer;
          font-size: 1.2rem;
          color: var(--color-primary);
          transition: background 0.2s;
        }

        .qty-btn:hover:not(:disabled) {
          background: #f5f5f5;
        }

        .qty-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .qty-input {
          width: 50px;
          border: none;
          text-align: center;
          font-size: 1rem;
          background: white;
        }

        .qty-input::-webkit-outer-spin-button,
        .qty-input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .btn-large {
          padding: 0.75rem 2rem;
          font-size: 1rem;
          min-width: 250px;
        }

        .added-message {
          color: #155724;
          background: #d4edda;
          padding: 0.75rem 1rem;
          border-radius: 0.375rem;
          font-weight: 500;
          width: 100%;
          text-align: center;
        }

        .product-info {
          padding-top: 1.5rem;
          border-top: 1px solid #eee;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          font-size: 0.95rem;
        }

        .info-label {
          font-weight: 500;
          color: var(--color-secondary);
        }

        .info-value {
          color: var(--color-text-light);
        }

        @media (max-width: 768px) {
          .product-detail-container {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 1rem;
          }

          .product-detail-name {
            font-size: 1.5rem;
          }

          .product-detail-price {
            font-size: 2rem;
          }

          .product-detail-actions {
            flex-direction: column;
          }

          .btn-large {
            min-width: 100%;
          }
        }
      `})]})}function Fh({item:i}){const{updateQuantity:s,removeFromCart:u}=zr();return l.jsxs("div",{className:"cart-item",children:[l.jsx("div",{className:"cart-item-image",children:l.jsx("img",{src:i.image,alt:i.name})}),l.jsxs("div",{className:"cart-item-details",children:[l.jsx("h3",{className:"cart-item-name",children:i.name}),l.jsxs("p",{className:"cart-item-price",children:[i.price," лв."]})]}),l.jsxs("div",{className:"cart-item-quantity",children:[l.jsx("button",{className:"qty-btn",onClick:()=>s(i.productId,i.quantity-1),children:"−"}),l.jsx("input",{type:"number",min:"1",value:i.quantity,onChange:d=>s(i.productId,parseInt(d.target.value,10)||1),className:"qty-input"}),l.jsx("button",{className:"qty-btn",onClick:()=>s(i.productId,i.quantity+1),children:"+"})]}),l.jsxs("div",{className:"cart-item-subtotal",children:[(i.price*i.quantity).toFixed(2)," лв."]}),l.jsx("button",{className:"cart-item-remove",onClick:()=>u(i.productId),children:"×"}),l.jsx("style",{children:`
        .cart-item {
          display: grid;
          grid-template-columns: 80px 1fr 120px 120px 40px;
          gap: 1rem;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid #eee;
          background: white;
        }

        .cart-item:hover {
          background: #f9f9f9;
        }

        .cart-item-image {
          width: 80px;
          height: 80px;
          border-radius: 0.375rem;
          overflow: hidden;
        }

        .cart-item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cart-item-details {
          min-width: 0;
        }

        .cart-item-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-secondary);
          margin: 0 0 0.25rem 0;
        }

        .cart-item-price {
          font-size: 0.875rem;
          color: var(--color-text-light);
          margin: 0;
        }

        .cart-item-quantity {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          border-radius: 0.375rem;
          background: white;
        }

        .qty-btn {
          width: 32px;
          height: 32px;
          border: none;
          background: white;
          cursor: pointer;
          font-size: 1.2rem;
          color: var(--color-primary);
          transition: background 0.2s;
        }

        .qty-btn:hover {
          background: #f5f5f5;
        }

        .qty-input {
          width: 50px;
          border: none;
          text-align: center;
          font-size: 1rem;
          background: white;
        }

        .qty-input::-webkit-outer-spin-button,
        .qty-input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .cart-item-subtotal {
          text-align: right;
          font-weight: 600;
          color: var(--color-secondary);
        }

        .cart-item-remove {
          width: 40px;
          height: 40px;
          border: none;
          background: #fee;
          color: #c33;
          border-radius: 0.375rem;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .cart-item-remove:hover {
          background: #fdd;
          color: #a00;
        }

        @media (max-width: 768px) {
          .cart-item {
            grid-template-columns: 60px 1fr 30px;
            gap: 0.5rem;
          }

          .cart-item-quantity {
            display: none;
          }

          .cart-item-subtotal {
            display: none;
          }
        }
      `})]})}function Mh(){const i=Lr(),{cart:s,getTotalPrice:u,clearCart:d}=zr();return s.length===0?l.jsxs("div",{className:"cart-page",children:[l.jsx(ct,{title:"Количка | САКИ",description:"Вашата количка в онлайн магазина на САКИ.",path:"/cart",noindex:!0}),l.jsxs("div",{className:"container",children:[l.jsx("h1",{children:"Вашата количка"}),l.jsxs("div",{className:"empty-cart",children:[l.jsx("div",{className:"empty-icon",children:"🛒"}),l.jsx("p",{children:"Вашата количка е празна"}),l.jsx("button",{className:"btn btn-primary",onClick:()=>i("/products"),children:"Продължи с пазаруване"})]})]}),l.jsx("style",{children:`
          .empty-cart {
            text-align: center;
            padding: 4rem 2rem;
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }

          .empty-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
          }

          .empty-cart p {
            color: var(--color-text-light);
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }
        `})]}):l.jsxs("div",{className:"cart-page",children:[l.jsx(ct,{title:"Количка | САКИ",description:"Прегледайте продуктите в количката си преди поръчка.",path:"/cart",noindex:!0}),l.jsxs("div",{className:"container",children:[l.jsx("h1",{children:"Вашата количка"}),l.jsxs("div",{className:"cart-layout",children:[l.jsxs("div",{className:"cart-items-section",children:[l.jsxs("div",{className:"cart-items-header",children:[l.jsxs("span",{children:[s.length," продукт",s.length!==1?"и":""]}),l.jsx("button",{className:"link-btn",onClick:d,children:"Изчисти количката"})]}),l.jsx("div",{className:"cart-items",children:s.map(f=>l.jsx(Fh,{item:f},f.productId))})]}),l.jsx("div",{className:"cart-summary",children:l.jsxs("div",{className:"summary-card",children:[l.jsx("h3",{children:"Резюме на поръчката"}),l.jsxs("div",{className:"summary-row",children:[l.jsx("span",{children:"Междинна сума:"}),l.jsxs("span",{children:[u().toFixed(2)," лв."]})]}),l.jsxs("div",{className:"summary-row",children:[l.jsx("span",{children:"Доставка:"}),l.jsx("span",{className:"delivery-note",children:"Зависи от адреса"})]}),l.jsx("div",{className:"summary-divider"}),l.jsxs("div",{className:"summary-row total",children:[l.jsx("span",{children:"Общо:"}),l.jsxs("span",{children:[u().toFixed(2)," лв."]})]}),l.jsx("button",{className:"btn btn-primary btn-block",onClick:()=>i("/checkout"),children:"Към поръчката"}),l.jsx("button",{className:"btn btn-secondary btn-block",onClick:()=>i("/products"),children:"Продължи с пазаруване"}),l.jsx("div",{className:"secure-badge",children:"🔒 Сигурна поръчка"})]})})]})]}),l.jsx("style",{children:`
        .cart-page {
          min-height: 100vh;
          padding: 2rem 0;
          background: #f9f9f9;
        }

        .cart-page h1 {
          font-size: 2rem;
          color: var(--color-secondary);
          margin-bottom: 2rem;
        }

        .cart-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 2rem;
        }

        .cart-items-section {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .cart-items-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid #eee;
          font-weight: 500;
        }

        .link-btn {
          background: none;
          border: none;
          color: var(--color-primary);
          cursor: pointer;
          font-size: 0.875rem;
          text-decoration: underline;
          transition: color 0.2s;
        }

        .link-btn:hover {
          color: var(--color-secondary);
        }

        .cart-items {
          display: flex;
          flex-direction: column;
        }

        .summary-card {
          background: white;
          border-radius: 0.5rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 2rem;
        }

        .summary-card h3 {
          color: var(--color-secondary);
          margin: 0 0 1.5rem 0;
          font-size: 1.1rem;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          font-size: 0.95rem;
          color: var(--color-text-light);
        }

        .summary-row.total {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--color-secondary);
          padding: 1rem 0;
        }

        .delivery-note {
          font-size: 0.85rem;
          color: #999;
        }

        .summary-divider {
          height: 1px;
          background: #eee;
          margin: 1rem 0;
        }

        .btn-block {
          width: 100%;
          margin-top: 1rem;
          padding: 0.875rem;
        }

        .btn-secondary {
          background: white;
          color: var(--color-primary);
          border: 1px solid var(--color-primary);
        }

        .btn-secondary:hover {
          background: var(--color-primary);
          color: white;
        }

        .secure-badge {
          text-align: center;
          margin-top: 1rem;
          padding: 0.75rem;
          font-size: 0.85rem;
          color: #666;
          border-top: 1px solid #eee;
        }

        @media (max-width: 768px) {
          .cart-layout {
            grid-template-columns: 1fr;
          }

          .summary-card {
            position: static;
          }
        }
      `})]})}function Ah({onOrderSuccess:i}){const{cart:s,clearCart:u}=zr(),[d,f]=w.useState(!1),[h,v]=w.useState(""),[j,x]=w.useState(!1),[k,P]=w.useState({customerName:"",email:"",phone:"",address:"",notes:""}),N=B=>{const{name:M,value:F}=B.target;P(I=>({...I,[M]:F}))},R=async B=>{B.preventDefault(),v(""),f(!0);try{const M=await fetch(Wt("/api/orders"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerName:k.customerName,email:k.email,phone:k.phone,address:k.address,notes:k.notes,items:s.map(I=>({productId:I.productId,quantity:I.quantity}))})});if(!M.ok){const I=await M.json();throw new Error(I.error||"Failed to create order")}const F=await M.json();x(!0),u(),i&&i(F.order.id),P({customerName:"",email:"",phone:"",address:"",notes:""})}catch(M){v(M instanceof Error?M.message:"Възникна грешка. Моля, опитайте отново.")}finally{f(!1)}};return j?l.jsxs("div",{className:"checkout-success",children:[l.jsx("div",{className:"success-icon",children:"✓"}),l.jsx("h2",{children:"Поръчката е приета!"}),l.jsx("p",{children:"Благодарим ви за поръчката. Ще се свържем с вас за потвърждение."}),l.jsx("p",{className:"success-note",children:"Ако имате въпрос, можете да ни потърсите и по телефона."})]}):l.jsxs("form",{onSubmit:R,className:"checkout-form",children:[l.jsx("h2",{children:"Данни за поръчката"}),h&&l.jsx("div",{className:"form-error",children:h}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"customerName",children:"Име и фамилия *"}),l.jsx("input",{type:"text",id:"customerName",name:"customerName",value:k.customerName,onChange:N,required:!0,placeholder:"Иван Петров"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"phone",children:"Телефон *"}),l.jsx("input",{type:"tel",id:"phone",name:"phone",value:k.phone,onChange:N,required:!0,placeholder:"+359 87 123 4567"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"email",children:"Имейл"}),l.jsx("input",{type:"email",id:"email",name:"email",value:k.email,onChange:N,placeholder:"you@example.com"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"address",children:"Адрес за доставка *"}),l.jsx("textarea",{id:"address",name:"address",value:k.address,onChange:N,required:!0,placeholder:"ул. Пример 123, гр. Дупница",rows:3})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"notes",children:"Бележка към поръчката"}),l.jsx("textarea",{id:"notes",name:"notes",value:k.notes,onChange:N,placeholder:"Уточнения за доставка или продуктите",rows:3})]}),l.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:d||s.length===0,children:d?"Изпращане...":"Изпрати поръчката"}),l.jsx("style",{children:`
        .checkout-form {
          background: white;
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .checkout-form h2 {
          color: var(--color-secondary);
          margin: 0 0 1.5rem 0;
          font-size: 1.5rem;
        }

        .form-error {
          background: #fee;
          color: #c33;
          padding: 1rem;
          border-radius: 0.375rem;
          margin-bottom: 1rem;
          border-left: 4px solid #c33;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--color-secondary);
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 0.375rem;
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
        }

        .btn-lg {
          width: 100%;
          padding: 1rem;
          font-size: 1.1rem;
          margin-top: 1rem;
        }

        .btn-lg:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .checkout-success {
          background: white;
          padding: 3rem 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: #d4edda;
          color: #155724;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          margin: 0 auto 1.5rem;
        }

        .checkout-success h2 {
          color: var(--color-secondary);
          margin: 1rem 0;
          font-size: 1.75rem;
        }

        .checkout-success p {
          color: var(--color-text-light);
          margin: 0.5rem 0;
        }

        .success-note {
          color: #6c757d;
          font-size: 0.95rem;
          font-style: italic;
        }
      `})]})}function $h(){const i=Lr(),{cart:s,getTotalPrice:u}=zr();return s.length===0?l.jsxs("div",{className:"checkout-page",children:[l.jsx(ct,{title:"Поръчка | САКИ",description:"Завършване на поръчка в онлайн магазина на САКИ.",path:"/checkout",noindex:!0}),l.jsx("div",{className:"container",children:l.jsxs("div",{className:"empty-state",children:[l.jsx("p",{children:"Няма продукти в количката"}),l.jsx("button",{className:"btn btn-primary",onClick:()=>i("/products"),children:"Назад към продуктите"})]})})]}):l.jsxs("div",{className:"checkout-page",children:[l.jsx(ct,{title:"Завършване на поръчката | САКИ",description:"Попълнете данните за доставка и изпратете поръчката си към САКИ.",path:"/checkout",noindex:!0}),l.jsxs("div",{className:"container",children:[l.jsx("h1",{children:"Завършване на поръчката"}),l.jsxs("div",{className:"checkout-layout",children:[l.jsx("div",{className:"checkout-form-section",children:l.jsx(Ah,{onOrderSuccess:()=>setTimeout(()=>i("/"),3e3)})}),l.jsx("div",{className:"checkout-summary",children:l.jsxs("div",{className:"summary-card",children:[l.jsx("h3",{children:"Преглед на поръчката"}),l.jsx("div",{className:"order-items",children:s.map(d=>l.jsxs("div",{className:"order-item",children:[l.jsx("span",{className:"item-name",children:d.name}),l.jsxs("span",{className:"item-qty",children:["x",d.quantity]}),l.jsxs("span",{className:"item-price",children:[(d.price*d.quantity).toFixed(2)," лв."]})]},d.productId))}),l.jsx("div",{className:"summary-divider"}),l.jsxs("div",{className:"total-row",children:[l.jsx("span",{children:"Общо:"}),l.jsxs("span",{className:"total-price",children:[u().toFixed(2)," лв."]})]}),l.jsxs("div",{className:"info-box",children:[l.jsx("p",{children:"Важно:"}),l.jsxs("ul",{children:[l.jsx("li",{children:"Проверете внимателно адреса"}),l.jsx("li",{children:"Ще се свържем с вас за потвърждение"}),l.jsx("li",{children:"Срокът за доставка зависи от адреса и наличността"})]})]})]})})]})]}),l.jsx("style",{children:`
        .checkout-page {
          min-height: 100vh;
          padding: 2rem 0;
          background: #f9f9f9;
        }

        .checkout-page h1 {
          font-size: 2rem;
          color: var(--color-secondary);
          margin-bottom: 2rem;
        }

        .empty-state {
          text-align: center;
          padding: 3rem;
          background: white;
          border-radius: 0.5rem;
        }

        .checkout-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 2rem;
        }

        .summary-card {
          background: white;
          border-radius: 0.5rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 2rem;
        }

        .summary-card h3 {
          color: var(--color-secondary);
          margin: 0 0 1.5rem 0;
          font-size: 1.1rem;
        }

        .order-items {
          margin-bottom: 1rem;
        }

        .order-item {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 0.5rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid #f0f0f0;
          font-size: 0.95rem;
        }

        .item-name {
          color: var(--color-secondary);
          font-weight: 500;
        }

        .item-qty {
          color: var(--color-text-light);
        }

        .item-price {
          text-align: right;
          font-weight: 600;
          color: var(--color-secondary);
        }

        .summary-divider {
          height: 1px;
          background: #eee;
          margin: 1rem 0;
        }

        .total-row {
          display: flex;
          justify-content: space-between;
          padding: 1rem 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-secondary);
        }

        .total-price {
          color: var(--color-primary);
          font-size: 1.3rem;
        }

        .info-box {
          margin-top: 1.5rem;
          padding: 1rem;
          background: #f9f9f9;
          border-radius: 0.375rem;
          font-size: 0.85rem;
        }

        .info-box p {
          margin: 0 0 0.5rem 0;
          font-weight: 500;
          color: var(--color-secondary);
        }

        .info-box ul {
          margin: 0;
          padding-left: 1.25rem;
          color: var(--color-text-light);
        }

        .info-box li {
          margin: 0.25rem 0;
        }

        @media (max-width: 768px) {
          .checkout-layout {
            grid-template-columns: 1fr;
          }

          .summary-card {
            position: static;
          }
        }
      `})]})}const ki={HONEY:"Мед",BEE_PRODUCTS:"Пчелни продукти",BEEKEEPING_EQUIPMENT:"Пчеларски инвентар",WAX_FOUNDATIONS:"Восъчни основи",PACKAGING:"Опаковки",OTHER:"Други"},Si={PCS:"бр.",KG:"кг",G:"г",LITER:"литър",PACKAGE:"пакет"},Yc={CASH:"в брой",CARD:"карта",BANK:"банка",OTHER:"друго"},Ta={RENT:"Наем",ELECTRICITY:"Ток",FUEL:"Гориво",MATERIALS:"Материали",SALARIES:"Заплати",DELIVERY:"Доставка",ADVERTISING:"Реклама",OTHER:"Други"},La={sku:"",name:"",category:"HONEY",unit:"PCS",sellPriceEur:"",costPriceEur:"",stockQuantity:"0",minStockQuantity:"0",totalSoldQuantity:"0",active:!0,notes:""};function Tr(){return new Date().toISOString().slice(0,10)}function ue(i){return`${Number(i||0).toFixed(2)} EUR`}function ze(i){return`${(Number(i||0)*1.95583).toFixed(2)} лв.`}function Uh(){const[i,s]=w.useState(()=>localStorage.getItem("admin_token")||""),[u,d]=w.useState(!1),[f,h]=w.useState({email:"",password:""}),[v,j]=w.useState("dashboard"),[x,k]=w.useState(""),[P,N]=w.useState(!1),[R,B]=w.useState(null),[M,F]=w.useState([]),[I,$]=w.useState(""),[G,Z]=w.useState("ALL"),[W,ne]=w.useState("ALL"),[de,ve]=w.useState([]),[le,Oe]=w.useState(null),[Be,it]=w.useState([]),[Pe,Ie]=w.useState(null),[_e,Re]=w.useState("monthly"),[oe,se]=w.useState(La),[D,K]=w.useState({saleDate:Tr(),productId:"",quantity:"1",unitPriceEur:"",paymentMethod:"CASH",notes:""}),[A,S]=w.useState({expenseDate:Tr(),category:"MATERIALS",amountEur:"",paymentMethod:"CASH",supplier:"",notes:""}),[_,X]=w.useState({transactionDate:Tr(),customerName:"",customerPhone:"",waxReceivedKg:"0",waxPricePerKgEur:"5",foundationGivenKg:"0",foundationPricePerKgEur:"15",extraPaymentEur:"0",foundationProductId:"",notes:""}),[ee,fe]=w.useState({from:Tr().slice(0,8)+"01",to:Tr()}),pe=w.useMemo(()=>({...i?{Authorization:`Bearer ${i}`}:{}}),[i]);async function ie(p,te={}){const Ve=await fetch(Wt(p),{...te,credentials:"include",headers:{"Content-Type":"application/json",...pe,...te.headers||{}}});if(!Ve.ok){const dt=await Ve.json().catch(()=>({error:"Заявката не беше успешна."}));throw new Error(dt.error||"Заявката не беше успешна.")}return Ve.status===204?null:Ve.json()}async function ce(){const[p,te,Ve,dt,uo]=await Promise.all([ie("/api/admin/erp/dashboard"),ie("/api/admin/erp/products"),ie("/api/admin/erp/sales"),ie(`/api/admin/erp/reports?from=${ee.from}&to=${ee.to}`),ie("/api/admin/erp/wax-transactions")]);B(p),F(te),ve(Ve),Oe(dt),it(uo)}w.useEffect(()=>{i&&ie("/api/auth/me").then(()=>(d(!0),ce())).catch(()=>{s(""),localStorage.removeItem("admin_token")})},[]),w.useEffect(()=>{u&&ie(`/api/admin/erp/reports?from=${ee.from}&to=${ee.to}`).then(Oe).catch(()=>{})},[ee.from,ee.to]);async function ye(p){p.preventDefault(),N(!0),k("");try{const te=await ie("/api/auth/login",{method:"POST",body:JSON.stringify(f)});s(te.token),localStorage.setItem("admin_token",te.token),d(!0),await ce()}catch(te){k(te instanceof Error?te.message:"Неуспешен вход.")}finally{N(!1)}}async function Ye(){await ie("/api/auth/logout",{method:"POST"}).catch(()=>{}),s(""),localStorage.removeItem("admin_token"),d(!1)}function Dr(p){Ie(p.id),se({sku:p.sku||"",name:p.name,category:p.category,unit:p.unit,sellPriceEur:String(p.sellPriceEur),costPriceEur:String(p.costPriceEur),stockQuantity:String(p.stockQuantity),minStockQuantity:String(p.minStockQuantity),totalSoldQuantity:String(p.totalSoldQuantity||0),active:p.active,notes:p.notes||""})}async function ao(p){p.preventDefault(),N(!0);try{await ie(Pe?`/api/admin/erp/products/${Pe}`:"/api/admin/erp/products",{method:Pe?"PUT":"POST",body:JSON.stringify({...oe,sku:oe.sku||null,sellPriceEur:Number(oe.sellPriceEur),costPriceEur:Number(oe.costPriceEur),stockQuantity:Number(oe.stockQuantity),minStockQuantity:Number(oe.minStockQuantity),totalSoldQuantity:Number(oe.totalSoldQuantity)})}),se(La),Ie(null),await ce(),k("Продуктът е запазен.")}catch(te){k(te instanceof Error?te.message:"Грешка при запис.")}finally{N(!1)}}async function Or(p){p.preventDefault(),N(!0);try{await ie("/api/admin/erp/sales",{method:"POST",body:JSON.stringify({...D,productId:Number(D.productId),quantity:Number(D.quantity),unitPriceEur:D.unitPriceEur?Number(D.unitPriceEur):void 0})}),K({saleDate:Tr(),productId:"",quantity:"1",unitPriceEur:"",paymentMethod:"CASH",notes:""}),await ce(),k("Продажбата е добавена и складът е намален.")}catch(te){k(te instanceof Error?te.message:"Грешка при продажба.")}finally{N(!1)}}async function hn(p){p.preventDefault(),await ie("/api/admin/erp/expenses",{method:"POST",body:JSON.stringify({...A,amountEur:Number(A.amountEur)})}),S({expenseDate:Tr(),category:"MATERIALS",amountEur:"",paymentMethod:"CASH",supplier:"",notes:""}),await ce(),k("Разходът е записан.")}async function so(p){p.preventDefault(),await ie("/api/admin/erp/wax-transactions",{method:"POST",body:JSON.stringify({..._,waxReceivedKg:Number(_.waxReceivedKg),waxPricePerKgEur:Number(_.waxPricePerKgEur),foundationGivenKg:Number(_.foundationGivenKg),foundationPricePerKgEur:Number(_.foundationPricePerKgEur),extraPaymentEur:Number(_.extraPaymentEur),foundationProductId:_.foundationProductId?Number(_.foundationProductId):null})}),X({..._,customerName:"",customerPhone:"",waxReceivedKg:"0",foundationGivenKg:"0",extraPaymentEur:"0",notes:""}),await ce(),k("Восъчната сделка е записана.")}const Fr=M.find(p=>String(p.id)===D.productId),hr=M.filter(p=>{const te=[p.sku,p.name,p.notes].join(" ").toLowerCase().includes(I.toLowerCase()),Ve=G==="ALL"||p.category===G,dt=W==="ALL"||(W==="LOW"?p.stockStatus==="LOW":p.active);return te&&Ve&&dt}),Qt=hr.reduce((p,te)=>({stockValue:p.stockValue+Number(te.inventoryValueEur||0),sellValue:p.sellValue+Number(te.inventorySellValueEur||0),low:p.low+(te.stockStatus==="LOW"?1:0)}),{stockValue:0,sellValue:0,low:0}),Mr=Number(_.waxReceivedKg||0)*Number(_.waxPricePerKgEur||0),qt=Number(_.foundationGivenKg||0)*Number(_.foundationPricePerKgEur||0),Kt=Mr-qt-Number(_.extraPaymentEur||0);return u?l.jsxs("div",{className:"erp-shell",children:[l.jsx(ct,{title:"SakiMed ERP | Админ",description:"Частен back-office ERP панел за SakiMed.",path:"/admin",noindex:!0}),l.jsxs("div",{className:"erp-wrap",children:[l.jsxs("header",{className:"erp-header",children:[l.jsxs("div",{children:[l.jsx("h1",{children:"SakiMed ERP"}),l.jsx("p",{children:"Оборот, склад, разходи и восък"})]}),l.jsx("button",{className:"erp-btn ghost",onClick:Ye,children:"Изход"})]}),x&&l.jsx("p",{className:"status",children:x}),l.jsx("nav",{className:"erp-tabs",children:[["dashboard","Табло"],["sales","Продажби"],["products","Склад"],["reports","Справки"],["expenses","Разходи"],["wax","Восък"]].map(([p,te])=>l.jsx("button",{className:v===p?"active":"",onClick:()=>j(p),children:te},p))}),v==="dashboard"&&R&&l.jsxs(l.Fragment,{children:[l.jsxs("section",{className:"metric-grid",children:[l.jsxs("div",{children:[l.jsx("span",{children:"Днес оборот"}),l.jsx("strong",{children:ue(R.todayTurnoverEur)}),l.jsx("small",{children:ze(R.todayTurnoverEur)})]}),l.jsxs("div",{children:[l.jsx("span",{children:"Днес печалба"}),l.jsx("strong",{children:ue(R.todayProfitEur)}),l.jsx("small",{children:ze(R.todayProfitEur)})]}),l.jsxs("div",{children:[l.jsx("span",{children:"Месец оборот"}),l.jsx("strong",{children:ue(R.monthlyTurnoverEur)}),l.jsx("small",{children:ze(R.monthlyTurnoverEur)})]}),l.jsxs("div",{children:[l.jsx("span",{children:"Месец печалба"}),l.jsx("strong",{children:ue(R.monthlyProfitEur)}),l.jsx("small",{children:ze(R.monthlyProfitEur)})]})]}),l.jsxs("section",{className:"erp-columns",children:[l.jsx(dn,{title:"Ниска наличност",children:R.lowStockProducts.map(p=>l.jsx(fn,{title:p.name,meta:`${p.stockQuantity} ${Si[p.unit]} минимум ${p.minStockQuantity}`},p.id))}),l.jsx(dn,{title:"Последни продажби",children:R.latestSales.map(p=>l.jsx(fn,{title:p.product.name,meta:`${p.quantity} x ${ue(p.unitPriceEur)} = ${ue(p.totalEur)}`},p.id))}),l.jsx(dn,{title:"Последни сделки с восък",children:R.latestWaxTransactions.map(p=>l.jsx(fn,{title:p.customerName,meta:`Баланс ${ue(p.balanceEur)} | восък ${p.waxReceivedKg} кг`},p.id))})]})]}),v==="sales"&&l.jsxs("section",{className:"erp-grid",children:[l.jsxs("form",{className:"erp-card",onSubmit:Or,children:[l.jsx("h2",{children:"Бърза продажба"}),l.jsx("label",{children:"Дата"}),l.jsx("input",{type:"date",value:D.saleDate,onChange:p=>K({...D,saleDate:p.target.value})}),l.jsx("label",{children:"Продукт"}),l.jsxs("select",{value:D.productId,onChange:p=>{const te=M.find(Ve=>String(Ve.id)===p.target.value);K({...D,productId:p.target.value,unitPriceEur:te?String(te.sellPriceEur):""})},required:!0,children:[l.jsx("option",{value:"",children:"Изберете продукт"}),M.filter(p=>p.active).map(p=>l.jsx("option",{value:p.id,children:p.name},p.id))]}),l.jsxs("div",{className:"two",children:[l.jsxs("label",{children:["Количество",l.jsx("input",{type:"number",step:"0.001",min:"0.001",value:D.quantity,onChange:p=>K({...D,quantity:p.target.value}),required:!0})]}),l.jsxs("label",{children:["Цена EUR",l.jsx("input",{type:"number",step:"0.01",min:"0",value:D.unitPriceEur,onChange:p=>K({...D,unitPriceEur:p.target.value})})]})]}),l.jsx("label",{children:"Плащане"}),l.jsx("select",{value:D.paymentMethod,onChange:p=>K({...D,paymentMethod:p.target.value}),children:Object.entries(Yc).map(([p,te])=>l.jsx("option",{value:p,children:te},p))}),l.jsx("textarea",{placeholder:"Бележка",value:D.notes,onChange:p=>K({...D,notes:p.target.value})}),l.jsxs("div",{className:"form-total",children:["Общо: ",ue(Number(D.quantity||0)*Number(D.unitPriceEur||(Fr==null?void 0:Fr.sellPriceEur)||0))]}),l.jsx("button",{className:"erp-btn primary",disabled:P,children:"Добави продажба"})]}),l.jsx(dn,{title:"Последни продажби",children:de.map(p=>l.jsx(fn,{title:p.product.name,meta:`${new Date(p.saleDate).toLocaleDateString("bg-BG")} | ${p.quantity} | ${ue(p.totalEur)} | печалба ${ue(p.profitEur)}`},p.id))})]}),v==="products"&&l.jsxs("section",{className:"storage-layout",children:[l.jsxs("form",{className:"erp-card",onSubmit:ao,children:[l.jsx("h2",{children:Pe?"Редакция":"Нов продукт"}),l.jsx("input",{placeholder:"ИД / код от склада",value:oe.sku,onChange:p=>se({...oe,sku:p.target.value})}),l.jsx("input",{placeholder:"Име",value:oe.name,onChange:p=>se({...oe,name:p.target.value}),required:!0}),l.jsxs("div",{className:"two",children:[l.jsx("select",{value:oe.category,onChange:p=>se({...oe,category:p.target.value}),children:Object.entries(ki).map(([p,te])=>l.jsx("option",{value:p,children:te},p))}),l.jsx("select",{value:oe.unit,onChange:p=>se({...oe,unit:p.target.value}),children:Object.entries(Si).map(([p,te])=>l.jsx("option",{value:p,children:te},p))})]}),l.jsxs("div",{className:"two",children:[l.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Продажна EUR",value:oe.sellPriceEur,onChange:p=>se({...oe,sellPriceEur:p.target.value}),required:!0}),l.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Доставна EUR",value:oe.costPriceEur,onChange:p=>se({...oe,costPriceEur:p.target.value}),required:!0})]}),l.jsxs("div",{className:"two",children:[l.jsx("input",{type:"number",step:"0.001",min:"0",placeholder:"Наличност",value:oe.stockQuantity,onChange:p=>se({...oe,stockQuantity:p.target.value})}),l.jsx("input",{type:"number",step:"0.001",min:"0",placeholder:"Минимум",value:oe.minStockQuantity,onChange:p=>se({...oe,minStockQuantity:p.target.value})})]}),l.jsx("input",{type:"number",step:"0.001",min:"0",placeholder:"Общо продадени",value:oe.totalSoldQuantity,onChange:p=>se({...oe,totalSoldQuantity:p.target.value})}),l.jsxs("label",{className:"check",children:[l.jsx("input",{type:"checkbox",checked:oe.active,onChange:p=>se({...oe,active:p.target.checked})})," Активен"]}),l.jsx("textarea",{placeholder:"Бележки",value:oe.notes,onChange:p=>se({...oe,notes:p.target.value})}),l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"erp-btn primary",disabled:P,children:"Запази"}),Pe&&l.jsx("button",{type:"button",className:"erp-btn ghost",onClick:()=>{Ie(null),se(La)},children:"Отказ"})]})]}),l.jsxs("section",{className:"storage-main",children:[l.jsxs("div",{className:"storage-toolbar",children:[l.jsx("input",{placeholder:"Търсене по име, ИД или бележка",value:I,onChange:p=>$(p.target.value)}),l.jsxs("select",{value:G,onChange:p=>Z(p.target.value),children:[l.jsx("option",{value:"ALL",children:"Всички категории"}),Object.entries(ki).map(([p,te])=>l.jsx("option",{value:p,children:te},p))]}),l.jsxs("select",{value:W,onChange:p=>ne(p.target.value),children:[l.jsx("option",{value:"ALL",children:"Всички"}),l.jsx("option",{value:"LOW",children:"Ниска наличност"}),l.jsx("option",{value:"ACTIVE",children:"Активни"})]})]}),l.jsxs("section",{className:"metric-grid compact",children:[l.jsxs("div",{children:[l.jsx("span",{children:"Артикули"}),l.jsx("strong",{children:hr.length}),l.jsx("small",{children:"показани"})]}),l.jsxs("div",{children:[l.jsx("span",{children:"Ниска наличност"}),l.jsx("strong",{children:Qt.low}),l.jsx("small",{children:"за проверка"})]}),l.jsxs("div",{children:[l.jsx("span",{children:"Стойност склад"}),l.jsx("strong",{children:ue(Qt.stockValue)}),l.jsx("small",{children:ze(Qt.stockValue)})]}),l.jsxs("div",{children:[l.jsx("span",{children:"Продажна стойност"}),l.jsx("strong",{children:ue(Qt.sellValue)}),l.jsx("small",{children:ze(Qt.sellValue)})]})]}),l.jsx("div",{className:"storage-table-wrap",children:l.jsxs("table",{className:"storage-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"ИД"}),l.jsx("th",{children:"Продукт"}),l.jsx("th",{children:"Категория"}),l.jsx("th",{children:"Наличност"}),l.jsx("th",{children:"Дост."}),l.jsx("th",{children:"Прод."}),l.jsx("th",{children:"Печалба"}),l.jsx("th",{children:"Продадени"}),l.jsx("th",{children:"Стойност"})]})}),l.jsx("tbody",{children:hr.map(p=>l.jsxs("tr",{onClick:()=>Dr(p),className:p.stockStatus==="LOW"?"low":"",children:[l.jsx("td",{"data-label":"ИД",children:p.sku||p.id}),l.jsxs("td",{"data-label":"Продукт",children:[l.jsx("strong",{children:p.name}),l.jsx("small",{children:p.active?"Активен":"Спрян"})]}),l.jsx("td",{"data-label":"Категория",children:ki[p.category]}),l.jsxs("td",{"data-label":"Наличност",children:[p.stockQuantity," ",Si[p.unit],l.jsxs("small",{children:["мин. ",p.minStockQuantity]})]}),l.jsx("td",{"data-label":"Дост.",children:ue(p.costPriceEur)}),l.jsxs("td",{"data-label":"Прод.",children:[ue(p.sellPriceEur),l.jsx("small",{children:ze(p.sellPriceEur)})]}),l.jsx("td",{"data-label":"Печалба",children:ue(p.unitProfitEur)}),l.jsx("td",{"data-label":"Продадени",children:p.totalSoldQuantity||0}),l.jsxs("td",{"data-label":"Стойност",children:[ue(p.inventoryValueEur),l.jsx("small",{children:ze(p.inventoryValueEur)})]})]},p.id))})]})})]})]}),v==="reports"&&le&&l.jsxs("section",{className:"report-stack",children:[l.jsxs("div",{className:"filters",children:[l.jsx("input",{type:"date",value:ee.from,onChange:p=>fe({...ee,from:p.target.value})}),l.jsx("input",{type:"date",value:ee.to,onChange:p=>fe({...ee,to:p.target.value})}),l.jsx("a",{className:"erp-btn primary",href:Wt(`/api/admin/erp/reports.csv?from=${ee.from}&to=${ee.to}`),children:"CSV export"})]}),l.jsxs("section",{className:"metric-grid",children:[l.jsxs("div",{children:[l.jsx("span",{children:"Оборот"}),l.jsx("strong",{children:ue(le.totals.turnoverEur)}),l.jsx("small",{children:ze(le.totals.turnoverEur)})]}),l.jsxs("div",{children:[l.jsx("span",{children:"Брутна печалба"}),l.jsx("strong",{children:ue(le.totals.grossProfitEur)}),l.jsx("small",{children:ze(le.totals.grossProfitEur)})]}),l.jsxs("div",{children:[l.jsx("span",{children:"Разходи"}),l.jsx("strong",{children:ue(le.totals.expensesEur)}),l.jsx("small",{children:ze(le.totals.expensesEur)})]}),l.jsxs("div",{children:[l.jsx("span",{children:"Нетна печалба"}),l.jsx("strong",{children:ue(le.totals.netProfitEur)}),l.jsx("small",{children:ze(le.totals.netProfitEur)})]})]}),l.jsx("nav",{className:"report-tabs",children:[["monthly","Месечни"],["daily","Дневни"],["products","Продадени продукти"],["expenses","Разходи"],["low-stock","Ниска наличност"]].map(([p,te])=>l.jsx("button",{className:_e===p?"active":"",onClick:()=>Re(p),children:te},p))}),_e==="monthly"&&l.jsx(ro,{headers:["Месец","Оборот","Печалба","Разходи","Нетна печалба","Продадени","Редове"],rows:le.monthly.map(p=>[new Date(p.month).toLocaleDateString("bg-BG",{month:"long",year:"numeric"}),`${ue(p.turnover_eur)} / ${ze(p.turnover_eur)}`,`${ue(p.profit_eur)} / ${ze(p.profit_eur)}`,`${ue(p.expenses_eur)} / ${ze(p.expenses_eur)}`,`${ue(Number(p.profit_eur||0)-Number(p.expenses_eur||0))}`,String(p.sold_quantity||0),String(p.sold_lines||0)])}),_e==="daily"&&l.jsx(ro,{headers:["Дата","Оборот","Каса","Печалба","Разходи","Остатък","Продадени"],rows:le.daily.map(p=>{const te=Number(p.turnover_eur||0),Ve=Number(p.profit_eur||0),dt=Number(p.expenses_eur||0);return[new Date(p.day).toLocaleDateString("bg-BG"),`${ue(te)} / ${ze(te)}`,ze(te),`${ue(Ve)} / ${ze(Ve)}`,`${ue(dt)} / ${ze(dt)}`,ze(Math.max(te-dt,0)),String(p.sold_quantity||0)]})}),_e==="products"&&l.jsx(ro,{headers:["Продукт","Количество","Оборот","Печалба","Средна цена"],rows:le.salesByProduct.map(p=>[p.product_name,String(p.quantity),ue(p.turnover_eur),ue(p.profit_eur),ue(Number(p.turnover_eur||0)/Math.max(Number(p.quantity||0),1))])}),_e==="expenses"&&l.jsx(ro,{headers:["Категория","Разход EUR","Разход BGN"],rows:le.expensesByCategory.map(p=>[Ta[p.category],ue(p._sum.amountEur||0),ze(p._sum.amountEur||0)])}),_e==="low-stock"&&l.jsx("div",{className:"scroll-panel",children:l.jsx(ro,{headers:["Продукт","Категория","Наличност","Минимум","Стойност"],rows:le.lowStockProducts.map(p=>[p.name,ki[p.category],`${p.stockQuantity} ${Si[p.unit]}`,String(p.minStockQuantity),ue(p.inventoryValueEur||p.stockQuantity*p.costPriceEur)])})})]}),v==="expenses"&&l.jsxs("section",{className:"erp-grid",children:[l.jsxs("form",{className:"erp-card",onSubmit:hn,children:[l.jsx("h2",{children:"Нов разход"}),l.jsx("input",{type:"date",value:A.expenseDate,onChange:p=>S({...A,expenseDate:p.target.value})}),l.jsx("select",{value:A.category,onChange:p=>S({...A,category:p.target.value}),children:Object.entries(Ta).map(([p,te])=>l.jsx("option",{value:p,children:te},p))}),l.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Сума EUR",value:A.amountEur,onChange:p=>S({...A,amountEur:p.target.value}),required:!0}),l.jsx("select",{value:A.paymentMethod,onChange:p=>S({...A,paymentMethod:p.target.value}),children:Object.entries(Yc).map(([p,te])=>l.jsx("option",{value:p,children:te},p))}),l.jsx("input",{placeholder:"Доставчик",value:A.supplier,onChange:p=>S({...A,supplier:p.target.value})}),l.jsx("textarea",{placeholder:"Бележка",value:A.notes,onChange:p=>S({...A,notes:p.target.value})}),l.jsx("button",{className:"erp-btn primary",children:"Запази разход"})]}),l.jsx(dn,{title:"Справка разходи",children:le==null?void 0:le.expensesByCategory.map(p=>l.jsx(fn,{title:Ta[p.category],meta:ue(p._sum.amountEur||0)},p.category))})]}),v==="wax"&&l.jsxs("section",{className:"erp-grid",children:[l.jsxs("form",{className:"erp-card",onSubmit:so,children:[l.jsx("h2",{children:"Обмен / изкупуване на восък"}),l.jsx("input",{type:"date",value:_.transactionDate,onChange:p=>X({..._,transactionDate:p.target.value})}),l.jsx("input",{placeholder:"Име на клиент",value:_.customerName,onChange:p=>X({..._,customerName:p.target.value}),required:!0}),l.jsx("input",{placeholder:"Телефон",value:_.customerPhone,onChange:p=>X({..._,customerPhone:p.target.value})}),l.jsxs("div",{className:"two",children:[l.jsx("input",{type:"number",step:"0.001",min:"0",placeholder:"Приет восък кг",value:_.waxReceivedKg,onChange:p=>X({..._,waxReceivedKg:p.target.value})}),l.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Цена восък EUR/кг",value:_.waxPricePerKgEur,onChange:p=>X({..._,waxPricePerKgEur:p.target.value})})]}),l.jsxs("select",{value:_.foundationProductId,onChange:p=>X({..._,foundationProductId:p.target.value}),children:[l.jsx("option",{value:"",children:"Восъчни основи от склада"}),M.filter(p=>p.category==="WAX_FOUNDATIONS").map(p=>l.jsx("option",{value:p.id,children:p.name},p.id))]}),l.jsxs("div",{className:"two",children:[l.jsx("input",{type:"number",step:"0.001",min:"0",placeholder:"Дадени основи кг",value:_.foundationGivenKg,onChange:p=>X({..._,foundationGivenKg:p.target.value})}),l.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Цена основи EUR/кг",value:_.foundationPricePerKgEur,onChange:p=>X({..._,foundationPricePerKgEur:p.target.value})})]}),l.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Доплащане EUR",value:_.extraPaymentEur,onChange:p=>X({..._,extraPaymentEur:p.target.value})}),l.jsx("textarea",{placeholder:"Бележка",value:_.notes,onChange:p=>X({..._,notes:p.target.value})}),l.jsxs("div",{className:"form-total",children:["Стойност восък ",ue(Mr)," | Основи ",ue(qt)," | Баланс ",ue(Kt)]}),l.jsx("button",{className:"erp-btn primary",children:"Запази сделка"})]}),l.jsx(dn,{title:"Последни сделки",children:Be.map(p=>l.jsx(fn,{title:p.customerName,meta:`${new Date(p.transactionDate).toLocaleDateString("bg-BG")} | баланс ${ue(p.balanceEur)} | восък ${p.waxReceivedKg} кг`},p.id))})]})]}),l.jsx("style",{children:Jc})]}):l.jsxs("div",{className:"erp-login",children:[l.jsx(ct,{title:"ERP вход | SakiMed",description:"Вход в частната ERP система на SakiMed.",path:"/admin",noindex:!0}),l.jsxs("form",{className:"login-box",onSubmit:ye,children:[l.jsx("h1",{children:"SakiMed ERP"}),l.jsx("label",{children:"Имейл"}),l.jsx("input",{type:"email",value:f.email,onChange:p=>h({...f,email:p.target.value}),required:!0}),l.jsx("label",{children:"Парола"}),l.jsx("input",{type:"password",value:f.password,onChange:p=>h({...f,password:p.target.value}),required:!0}),x&&l.jsx("p",{className:"status error",children:x}),l.jsx("button",{className:"erp-btn primary",disabled:P,children:P?"Влизане...":"Вход"})]}),l.jsx("style",{children:Jc})]})}function dn({title:i,children:s}){return l.jsxs("section",{className:"erp-panel",children:[l.jsx("h2",{children:i}),l.jsx("div",{className:"panel-list",children:s})]})}function fn({title:i,meta:s}){return l.jsxs("div",{className:"erp-row",children:[l.jsx("strong",{children:i}),l.jsx("span",{children:s})]})}function ro({headers:i,rows:s}){return l.jsx("div",{className:"report-table-wrap",children:l.jsxs("table",{className:"report-table",children:[l.jsx("thead",{children:l.jsx("tr",{children:i.map(u=>l.jsx("th",{children:u},u))})}),l.jsxs("tbody",{children:[s.length===0&&l.jsx("tr",{children:l.jsx("td",{colSpan:i.length,children:"Няма данни за избрания период."})}),s.map((u,d)=>l.jsx("tr",{children:u.map((f,h)=>l.jsx("td",{"data-label":i[h],children:f},`${d}-${h}`))},d))]})]})})}const Jc=`
  .erp-login,
  .erp-shell {
    min-height: 100vh;
    background: #f4f6f3;
    color: #172018;
    padding: 28px 0 44px;
  }

  .erp-login {
    display: grid;
    place-items: center;
  }

  .erp-wrap {
    width: min(1180px, calc(100% - 28px));
    margin: 0 auto;
  }

  .login-box,
  .erp-card,
  .erp-panel,
  .metric-grid > div {
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(26, 42, 28, 0.06);
  }

  .login-box,
  .erp-card {
    display: grid;
    gap: 12px;
    padding: 20px;
  }

  .login-box {
    width: min(420px, calc(100% - 28px));
  }

  .erp-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  .erp-header h1,
  .login-box h1,
  .erp-card h2,
  .erp-panel h2 {
    margin: 0;
    color: #1f3822;
  }

  .erp-header p {
    margin: 4px 0 0;
    color: #687366;
  }

  .erp-tabs,
  .actions,
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .erp-tabs {
    margin: 0 0 16px;
  }

  .erp-tabs button,
  .erp-btn {
    min-height: 42px;
    border-radius: 6px;
    border: 1px solid #cfd9ca;
    background: #fff;
    color: #1f3822;
    padding: 0 14px;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .erp-tabs button.active,
  .erp-btn.primary {
    background: #2f6b3a;
    border-color: #2f6b3a;
    color: #fff;
  }

  .erp-btn.ghost {
    background: #eef3ea;
  }

  .metric-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
    margin-bottom: 16px;
  }

  .metric-grid > div {
    padding: 16px;
    display: grid;
    gap: 4px;
  }

  .metric-grid span,
  .metric-grid small,
  .erp-row span,
  .product-row small {
    color: #687366;
  }

  .metric-grid strong {
    font-size: 1.45rem;
    color: #203423;
  }

  .erp-columns {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .erp-grid {
    display: grid;
    grid-template-columns: minmax(320px, 410px) 1fr;
    gap: 14px;
    align-items: start;
  }

  .storage-layout {
    display: grid;
    grid-template-columns: minmax(300px, 360px) 1fr;
    gap: 14px;
    align-items: start;
  }

  .storage-main {
    display: grid;
    gap: 12px;
  }

  .storage-toolbar {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) 180px 160px;
    gap: 8px;
  }

  .metric-grid.compact {
    margin-bottom: 0;
  }

  .metric-grid.compact strong {
    font-size: 1.15rem;
  }

  .storage-table-wrap {
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 8px;
    overflow: auto;
    box-shadow: 0 8px 24px rgba(26, 42, 28, 0.06);
  }

  .storage-table {
    width: 100%;
    min-width: 980px;
    border-collapse: collapse;
    font-size: 0.92rem;
  }

  .storage-table th,
  .storage-table td {
    padding: 10px;
    border-bottom: 1px solid #edf0eb;
    text-align: left;
    vertical-align: top;
  }

  .storage-table th {
    position: sticky;
    top: 0;
    background: #eef3ea;
    color: #1f3822;
    z-index: 1;
  }

  .storage-table tr {
    cursor: pointer;
  }

  .storage-table tr:hover {
    background: #f8faf6;
  }

  .storage-table tr.low {
    background: #fff7d6;
  }

  .storage-table td small {
    display: block;
    color: #687366;
    margin-top: 2px;
  }

  .erp-panel {
    padding: 16px;
  }

  .panel-list {
    display: grid;
    gap: 8px;
    margin-top: 12px;
  }

  .erp-row,
  .product-row {
    display: grid;
    gap: 3px;
    padding: 10px 0;
    border-bottom: 1px solid #edf0eb;
    text-align: left;
  }

  .product-row {
    width: 100%;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    background: transparent;
    cursor: pointer;
    color: inherit;
  }

  label {
    display: grid;
    gap: 6px;
    font-weight: 700;
    color: #344238;
  }

  input,
  textarea,
  select {
    width: 100%;
    min-height: 42px;
    border: 1px solid #cfd9ca;
    border-radius: 6px;
    padding: 9px 10px;
    font: inherit;
    background: #fff;
    color: #172018;
  }

  textarea {
    resize: vertical;
    min-height: 84px;
  }

  .two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .check {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .check input {
    width: auto;
    min-height: auto;
  }

  .form-total,
  .status {
    border-radius: 6px;
    padding: 10px 12px;
    background: #fff7d6;
    border: 1px solid #f1df92;
    color: #6d5200;
    font-weight: 700;
  }

  .status.error {
    background: #fee2e2;
    border-color: #fecaca;
    color: #991b1b;
  }

  .report-stack {
    display: grid;
    gap: 16px;
  }

  .report-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .report-tabs button {
    min-height: 40px;
    border-radius: 6px;
    border: 1px solid #cfd9ca;
    background: #fff;
    color: #1f3822;
    padding: 0 12px;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
  }

  .report-tabs button.active {
    background: #2f6b3a;
    border-color: #2f6b3a;
    color: #fff;
  }

  .scroll-panel,
  .report-table-wrap {
    max-height: min(62vh, 620px);
    overflow: auto;
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(26, 42, 28, 0.06);
  }

  .scroll-panel .report-table-wrap {
    max-height: none;
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }

  .report-table {
    width: 100%;
    min-width: 760px;
    border-collapse: collapse;
  }

  .report-table th,
  .report-table td {
    padding: 11px 12px;
    border-bottom: 1px solid #edf0eb;
    text-align: left;
  }

  .report-table th {
    position: sticky;
    top: 0;
    background: #eef3ea;
    color: #1f3822;
    z-index: 1;
  }

  @media (max-width: 980px) {
    .metric-grid,
    .erp-columns,
    .erp-grid,
    .storage-layout {
      grid-template-columns: 1fr;
    }

    .storage-toolbar {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 620px) {
    .erp-header {
      align-items: stretch;
      flex-direction: column;
    }

    .erp-tabs {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .report-tabs {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .two {
      grid-template-columns: 1fr;
    }

    .storage-table {
      min-width: 0;
      display: block;
    }

    .report-table {
      min-width: 0;
      display: block;
    }

    .storage-table thead,
    .report-table thead {
      display: none;
    }

    .storage-table tbody,
    .storage-table tr,
    .storage-table td,
    .report-table tbody,
    .report-table tr,
    .report-table td {
      display: block;
      width: 100%;
    }

    .storage-table tr,
    .report-table tr {
      padding: 10px;
      border-bottom: 1px solid #dfe5dc;
    }

    .storage-table td,
    .report-table td {
      border: 0;
      padding: 6px 0;
      display: grid;
      grid-template-columns: 110px 1fr;
      gap: 8px;
    }

    .storage-table td::before,
    .report-table td::before {
      content: attr(data-label);
      color: #687366;
      font-weight: 700;
    }
  }
`;function Bh(){const{slug:i}=dd(),[s,u]=w.useState(null),[d,f]=w.useState(!0),[h,v]=w.useState("");return w.useEffect(()=>{async function j(){try{const x=await fetch(Wt(`/api/landing-pages/${i}`));if(!x.ok)throw new Error("Страницата не е намерена.");u(await x.json())}catch(x){v(x instanceof Error?x.message:"Възникна грешка.")}finally{f(!1)}}j()},[i]),d?l.jsx("div",{className:"container",style:{padding:"3rem 0"},children:"Зареждане..."}):h||!s?l.jsxs("div",{className:"container",style:{padding:"3rem 0"},children:[l.jsx(ct,{title:"Страницата не е намерена | САКИ",description:"Тази специална страница не е налична.",path:`/special/${i??""}`,noindex:!0}),l.jsx("p",{children:h||"Страницата не е намерена."}),l.jsx(It,{to:"/products",className:"btn btn-primary",children:"Към продуктите"})]}):l.jsxs("div",{className:"special-page",children:[l.jsx(ct,{title:s.seoTitle||`${s.title} | САКИ`,description:s.seoDescription||s.heroSubtitle||"Специална страница от пчеларски магазин САКИ.",path:`/special/${s.slug}`,image:s.heroImage||void 0}),l.jsxs("section",{className:"special-hero",children:[s.heroImage&&l.jsx("img",{src:Pi(s.heroImage),alt:s.heroTitle}),l.jsxs("div",{className:"container special-hero-content",children:[l.jsx("h1",{children:s.heroTitle}),s.heroSubtitle&&l.jsx("p",{children:s.heroSubtitle}),s.ctaText&&s.ctaLink&&l.jsx(It,{to:s.ctaLink,className:"btn btn-primary",children:s.ctaText})]})]}),l.jsx("section",{className:"container special-sections",children:s.sections.map((j,x)=>l.jsxs("article",{className:"special-section",children:[j.image&&l.jsx("img",{src:Pi(j.image),alt:j.title||s.title}),l.jsxs("div",{children:[j.title&&l.jsx("h2",{children:j.title}),j.body&&l.jsx("p",{children:j.body})]})]},`${j.title}-${x}`))}),l.jsx("style",{children:`
        .special-page {
          background: #f9f9f9;
          min-height: 100vh;
        }

        .special-hero {
          position: relative;
          min-height: 360px;
          display: flex;
          align-items: center;
          background: #fff7ed;
          overflow: hidden;
        }

        .special-hero > img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.22;
        }

        .special-hero-content {
          position: relative;
          z-index: 1;
          padding: 4rem 0;
        }

        .special-hero h1 {
          max-width: 760px;
          font-size: 3rem;
          color: var(--color-secondary);
          margin: 0 0 1rem;
        }

        .special-hero p {
          max-width: 640px;
          font-size: 1.2rem;
          color: var(--color-text-light);
          margin-bottom: 1.5rem;
        }

        .special-sections {
          padding-top: 3rem;
          padding-bottom: 3rem;
          display: grid;
          gap: 1.5rem;
        }

        .special-section {
          background: white;
          border-radius: 0.5rem;
          padding: 1.5rem;
          display: grid;
          grid-template-columns: minmax(0, 240px) 1fr;
          gap: 1.5rem;
          align-items: center;
        }

        .special-section img {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border-radius: 0.375rem;
        }

        .special-section h2 {
          margin: 0 0 0.5rem;
          color: var(--color-secondary);
        }

        .special-section p {
          color: var(--color-text-light);
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .special-hero h1 {
            font-size: 2.2rem;
          }

          .special-section {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Hh(){return l.jsx(ch,{children:l.jsx(sh,{children:l.jsxs(Jm,{children:[l.jsx(ph,{}),l.jsx("main",{children:l.jsxs(Nm,{children:[l.jsx(mr,{path:"/",element:l.jsx(zh,{})}),l.jsx(mr,{path:"/products",element:l.jsx(Dh,{})}),l.jsx(mr,{path:"/products/:id",element:l.jsx(Oh,{})}),l.jsx(mr,{path:"/special/:slug",element:l.jsx(Bh,{})}),l.jsx(mr,{path:"/cart",element:l.jsx(Mh,{})}),l.jsx(mr,{path:"/checkout",element:l.jsx($h,{})}),l.jsx(mr,{path:"/admin",element:l.jsx(Uh,{})})]})}),l.jsx(mh,{})]})})})}kd.initialize("G-D9FP0ZFK1S");_p.createRoot(document.getElementById("root")).render(l.jsx(w.StrictMode,{children:l.jsx(Hh,{})}));

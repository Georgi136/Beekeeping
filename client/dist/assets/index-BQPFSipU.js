var Np=Object.defineProperty;var bp=(o,s,u)=>s in o?Np(o,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[s]=u;var Ce=(o,s,u)=>bp(o,typeof s!="symbol"?s+"":s,u);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))d(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function u(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(f){if(f.ep)return;f.ep=!0;const m=u(f);fetch(f.href,m)}})();var Jl={exports:{}},Mo={},Zl={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qc;function Pp(){if(Qc)return ae;Qc=1;var o=Symbol.for("react.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),g=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),C=Symbol.iterator;function R(v){return v===null||typeof v!="object"?null:(v=C&&v[C]||v["@@iterator"],typeof v=="function"?v:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,F={};function I(v,_,oe){this.props=v,this.context=_,this.refs=F,this.updater=oe||O}I.prototype.isReactComponent={},I.prototype.setState=function(v,_){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,_,"setState")},I.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function M(){}M.prototype=I.prototype;function te(v,_,oe){this.props=v,this.context=_,this.refs=F,this.updater=oe||O}var G=te.prototype=new M;G.constructor=te,A(G,I.prototype),G.isPureReactComponent=!0;var H=Array.isArray,ne=Object.prototype.hasOwnProperty,le={current:null},ue={key:!0,ref:!0,__self:!0,__source:!0};function Ne(v,_,oe){var ie,ce={},se=null,ye=null;if(_!=null)for(ie in _.ref!==void 0&&(ye=_.ref),_.key!==void 0&&(se=""+_.key),_)ne.call(_,ie)&&!ue.hasOwnProperty(ie)&&(ce[ie]=_[ie]);var fe=arguments.length-2;if(fe===1)ce.children=oe;else if(1<fe){for(var pe=Array(fe),Ke=0;Ke<fe;Ke++)pe[Ke]=arguments[Ke+2];ce.children=pe}if(v&&v.defaultProps)for(ie in fe=v.defaultProps,fe)ce[ie]===void 0&&(ce[ie]=fe[ie]);return{$$typeof:o,type:v,key:se,ref:ye,props:ce,_owner:le.current}}function Oe(v,_){return{$$typeof:o,type:v.type,key:_,ref:v.ref,props:v.props,_owner:v._owner}}function Ve(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function ot(v){var _={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(oe){return _[oe]})}var He=/\/+/g;function Fe(v,_){return typeof v=="object"&&v!==null&&v.key!=null?ot(""+v.key):_.toString(36)}function Ge(v,_,oe,ie,ce){var se=typeof v;(se==="undefined"||se==="boolean")&&(v=null);var ye=!1;if(v===null)ye=!0;else switch(se){case"string":case"number":ye=!0;break;case"object":switch(v.$$typeof){case o:case s:ye=!0}}if(ye)return ye=v,ce=ce(ye),v=ie===""?"."+Fe(ye,0):ie,H(ce)?(oe="",v!=null&&(oe=v.replace(He,"$&/")+"/"),Ge(ce,_,oe,"",function(Ke){return Ke})):ce!=null&&(Ve(ce)&&(ce=Oe(ce,oe+(!ce.key||ye&&ye.key===ce.key?"":(""+ce.key).replace(He,"$&/")+"/")+v)),_.push(ce)),1;if(ye=0,ie=ie===""?".":ie+":",H(v))for(var fe=0;fe<v.length;fe++){se=v[fe];var pe=ie+Fe(se,fe);ye+=Ge(se,_,oe,pe,ce)}else if(pe=R(v),typeof pe=="function")for(v=pe.call(v),fe=0;!(se=v.next()).done;)se=se.value,pe=ie+Fe(se,fe++),ye+=Ge(se,_,oe,pe,ce);else if(se==="object")throw _=String(v),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.");return ye}function be(v,_,oe){if(v==null)return v;var ie=[],ce=0;return Ge(v,ie,"","",function(se){return _.call(oe,se,ce++)}),ie}function Ye(v){if(v._status===-1){var _=v._result;_=_(),_.then(function(oe){(v._status===0||v._status===-1)&&(v._status=1,v._result=oe)},function(oe){(v._status===0||v._status===-1)&&(v._status=2,v._result=oe)}),v._status===-1&&(v._status=0,v._result=_)}if(v._status===1)return v._result.default;throw v._result}var we={current:null},U={transition:null},Z={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:U,ReactCurrentOwner:le};function B(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:be,forEach:function(v,_,oe){be(v,function(){_.apply(this,arguments)},oe)},count:function(v){var _=0;return be(v,function(){_++}),_},toArray:function(v){return be(v,function(_){return _})||[]},only:function(v){if(!Ve(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ae.Component=I,ae.Fragment=u,ae.Profiler=f,ae.PureComponent=te,ae.StrictMode=d,ae.Suspense=S,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ae.act=B,ae.cloneElement=function(v,_,oe){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var ie=A({},v.props),ce=v.key,se=v.ref,ye=v._owner;if(_!=null){if(_.ref!==void 0&&(se=_.ref,ye=le.current),_.key!==void 0&&(ce=""+_.key),v.type&&v.type.defaultProps)var fe=v.type.defaultProps;for(pe in _)ne.call(_,pe)&&!ue.hasOwnProperty(pe)&&(ie[pe]=_[pe]===void 0&&fe!==void 0?fe[pe]:_[pe])}var pe=arguments.length-2;if(pe===1)ie.children=oe;else if(1<pe){fe=Array(pe);for(var Ke=0;Ke<pe;Ke++)fe[Ke]=arguments[Ke+2];ie.children=fe}return{$$typeof:o,type:v.type,key:ce,ref:se,props:ie,_owner:ye}},ae.createContext=function(v){return v={$$typeof:g,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:m,_context:v},v.Consumer=v},ae.createElement=Ne,ae.createFactory=function(v){var _=Ne.bind(null,v);return _.type=v,_},ae.createRef=function(){return{current:null}},ae.forwardRef=function(v){return{$$typeof:j,render:v}},ae.isValidElement=Ve,ae.lazy=function(v){return{$$typeof:b,_payload:{_status:-1,_result:v},_init:Ye}},ae.memo=function(v,_){return{$$typeof:w,type:v,compare:_===void 0?null:_}},ae.startTransition=function(v){var _=U.transition;U.transition={};try{v()}finally{U.transition=_}},ae.unstable_act=B,ae.useCallback=function(v,_){return we.current.useCallback(v,_)},ae.useContext=function(v){return we.current.useContext(v)},ae.useDebugValue=function(){},ae.useDeferredValue=function(v){return we.current.useDeferredValue(v)},ae.useEffect=function(v,_){return we.current.useEffect(v,_)},ae.useId=function(){return we.current.useId()},ae.useImperativeHandle=function(v,_,oe){return we.current.useImperativeHandle(v,_,oe)},ae.useInsertionEffect=function(v,_){return we.current.useInsertionEffect(v,_)},ae.useLayoutEffect=function(v,_){return we.current.useLayoutEffect(v,_)},ae.useMemo=function(v,_){return we.current.useMemo(v,_)},ae.useReducer=function(v,_,oe){return we.current.useReducer(v,_,oe)},ae.useRef=function(v){return we.current.useRef(v)},ae.useState=function(v){return we.current.useState(v)},ae.useSyncExternalStore=function(v,_,oe){return we.current.useSyncExternalStore(v,_,oe)},ae.useTransition=function(){return we.current.useTransition()},ae.version="18.3.1",ae}var Gc;function ps(){return Gc||(Gc=1,Zl.exports=Pp()),Zl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yc;function _p(){if(Yc)return Mo;Yc=1;var o=ps(),s=Symbol.for("react.element"),u=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,f=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function g(j,S,w){var b,C={},R=null,O=null;w!==void 0&&(R=""+w),S.key!==void 0&&(R=""+S.key),S.ref!==void 0&&(O=S.ref);for(b in S)d.call(S,b)&&!m.hasOwnProperty(b)&&(C[b]=S[b]);if(j&&j.defaultProps)for(b in S=j.defaultProps,S)C[b]===void 0&&(C[b]=S[b]);return{$$typeof:s,type:j,key:R,ref:O,props:C,_owner:f.current}}return Mo.Fragment=u,Mo.jsx=g,Mo.jsxs=g,Mo}var Xc;function Rp(){return Xc||(Xc=1,Jl.exports=_p()),Jl.exports}var i=Rp(),x=ps(),ia={},es={exports:{}},pt={},ts={exports:{}},ns={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jc;function Tp(){return Jc||(Jc=1,(function(o){function s(U,Z){var B=U.length;U.push(Z);e:for(;0<B;){var v=B-1>>>1,_=U[v];if(0<f(_,Z))U[v]=Z,U[B]=_,B=v;else break e}}function u(U){return U.length===0?null:U[0]}function d(U){if(U.length===0)return null;var Z=U[0],B=U.pop();if(B!==Z){U[0]=B;e:for(var v=0,_=U.length,oe=_>>>1;v<oe;){var ie=2*(v+1)-1,ce=U[ie],se=ie+1,ye=U[se];if(0>f(ce,B))se<_&&0>f(ye,ce)?(U[v]=ye,U[se]=B,v=se):(U[v]=ce,U[ie]=B,v=ie);else if(se<_&&0>f(ye,B))U[v]=ye,U[se]=B,v=se;else break e}}return Z}function f(U,Z){var B=U.sortIndex-Z.sortIndex;return B!==0?B:U.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var g=Date,j=g.now();o.unstable_now=function(){return g.now()-j}}var S=[],w=[],b=1,C=null,R=3,O=!1,A=!1,F=!1,I=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(U){for(var Z=u(w);Z!==null;){if(Z.callback===null)d(w);else if(Z.startTime<=U)d(w),Z.sortIndex=Z.expirationTime,s(S,Z);else break;Z=u(w)}}function H(U){if(F=!1,G(U),!A)if(u(S)!==null)A=!0,Ye(ne);else{var Z=u(w);Z!==null&&we(H,Z.startTime-U)}}function ne(U,Z){A=!1,F&&(F=!1,M(Ne),Ne=-1),O=!0;var B=R;try{for(G(Z),C=u(S);C!==null&&(!(C.expirationTime>Z)||U&&!ot());){var v=C.callback;if(typeof v=="function"){C.callback=null,R=C.priorityLevel;var _=v(C.expirationTime<=Z);Z=o.unstable_now(),typeof _=="function"?C.callback=_:C===u(S)&&d(S),G(Z)}else d(S);C=u(S)}if(C!==null)var oe=!0;else{var ie=u(w);ie!==null&&we(H,ie.startTime-Z),oe=!1}return oe}finally{C=null,R=B,O=!1}}var le=!1,ue=null,Ne=-1,Oe=5,Ve=-1;function ot(){return!(o.unstable_now()-Ve<Oe)}function He(){if(ue!==null){var U=o.unstable_now();Ve=U;var Z=!0;try{Z=ue(!0,U)}finally{Z?Fe():(le=!1,ue=null)}}else le=!1}var Fe;if(typeof te=="function")Fe=function(){te(He)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,be=Ge.port2;Ge.port1.onmessage=He,Fe=function(){be.postMessage(null)}}else Fe=function(){I(He,0)};function Ye(U){ue=U,le||(le=!0,Fe())}function we(U,Z){Ne=I(function(){U(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_continueExecution=function(){A||O||(A=!0,Ye(ne))},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return R},o.unstable_getFirstCallbackNode=function(){return u(S)},o.unstable_next=function(U){switch(R){case 1:case 2:case 3:var Z=3;break;default:Z=R}var B=R;R=Z;try{return U()}finally{R=B}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(U,Z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var B=R;R=U;try{return Z()}finally{R=B}},o.unstable_scheduleCallback=function(U,Z,B){var v=o.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?v+B:v):B=v,U){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=B+_,U={id:b++,callback:Z,priorityLevel:U,startTime:B,expirationTime:_,sortIndex:-1},B>v?(U.sortIndex=B,s(w,U),u(S)===null&&U===u(w)&&(F?(M(Ne),Ne=-1):F=!0,we(H,B-v))):(U.sortIndex=_,s(S,U),A||O||(A=!0,Ye(ne))),U},o.unstable_shouldYield=ot,o.unstable_wrapCallback=function(U){var Z=R;return function(){var B=R;R=Z;try{return U.apply(this,arguments)}finally{R=B}}}})(ns)),ns}var Zc;function Lp(){return Zc||(Zc=1,ts.exports=Tp()),ts.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function zp(){if(ed)return pt;ed=1;var o=ps(),s=Lp();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,f={};function m(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(f[e]=t,e=0;e<t.length;e++)d.add(t[e])}var j=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},C={};function R(e){return S.call(C,e)?!0:S.call(b,e)?!1:w.test(e)?C[e]=!0:(b[e]=!0,!1)}function O(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function A(e,t,n,r){if(t===null||typeof t>"u"||O(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function F(e,t,n,r,a,l,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=c}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new F(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new F(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new F(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new F(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new F(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new F(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new F(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new F(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new F(e,5,!1,e.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function te(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M,te);I[t]=new F(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M,te);I[t]=new F(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M,te);I[t]=new F(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new F(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new F(e,1,!1,e.toLowerCase(),null,!0,!0)});function G(e,t,n,r){var a=I.hasOwnProperty(t)?I[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(A(t,n,a,r)&&(n=null),r||a===null?R(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var H=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),le=Symbol.for("react.portal"),ue=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),Oe=Symbol.for("react.profiler"),Ve=Symbol.for("react.provider"),ot=Symbol.for("react.context"),He=Symbol.for("react.forward_ref"),Fe=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),be=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),U=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,v;function _(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var oe=!1;function ie(e,t){if(!e||oe)return"";oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(P){var r=P}Reflect.construct(e,[],t)}else{try{t.call()}catch(P){r=P}e.call(t.prototype)}else{try{throw Error()}catch(P){r=P}e()}}catch(P){if(P&&r&&typeof P.stack=="string"){for(var a=P.stack.split(`
`),l=r.stack.split(`
`),c=a.length-1,h=l.length-1;1<=c&&0<=h&&a[c]!==l[h];)h--;for(;1<=c&&0<=h;c--,h--)if(a[c]!==l[h]){if(c!==1||h!==1)do if(c--,h--,0>h||a[c]!==l[h]){var y=`
`+a[c].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=c&&0<=h);break}}}finally{oe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_(e):""}function ce(e){switch(e.tag){case 5:return _(e.type);case 16:return _("Lazy");case 13:return _("Suspense");case 19:return _("SuspenseList");case 0:case 2:case 15:return e=ie(e.type,!1),e;case 11:return e=ie(e.type.render,!1),e;case 1:return e=ie(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ue:return"Fragment";case le:return"Portal";case Oe:return"Profiler";case Ne:return"StrictMode";case Fe:return"Suspense";case Ge:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ot:return(e.displayName||"Context")+".Consumer";case Ve:return(e._context.displayName||"Context")+".Provider";case He:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case be:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(t);case 8:return t===Ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ke(e){var t=pe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(c){r=""+c,l.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fn(e){e._valueTracker||(e._valueTracker=Ke(e))}function Dn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function On(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wr(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mn(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fe(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qo(e,t){t=t.checked,t!=null&&G(e,"checked",t,!1)}function xe(e,t){qo(e,t);var n=fe(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ue(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ue(e,t.type,fe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mt(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ue(e,t,n){(t!=="number"||On(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ht=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fe(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Vr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function At(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(ht(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fe(n)}}function Qo(e,t){var n=fe(t.value),r=fe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ut(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var An,dr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(An=An||document.createElement("div"),An.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=An.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xe=["Webkit","ms","Moz","O"];Object.keys(ee).forEach(function(e){Xe.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ee[t]=ee[e]})});function Kr(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ee.hasOwnProperty(e)&&ee[e]?(""+t).trim():t+"px"}function ze(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Kr(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Go=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(e,t){if(t){if(Go[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function qr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qr=null;function Gr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yr=null,cn=null,dn=null;function Yo(e){if(e=jo(e)){if(typeof Yr!="function")throw Error(u(280));var t=e.stateNode;t&&(t=wi(t),Yr(e.stateNode,e.type,t))}}function Xr(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Jr(){if(cn){var e=cn,t=dn;if(dn=cn=null,Yo(e),t)for(e=0;e<t.length;e++)Yo(t[e])}}function Xo(e,t){return e(t)}function Jo(){}var fr=!1;function Zr(e,t,n){if(fr)return e(t,n);fr=!0;try{return Xo(e,t,n)}finally{fr=!1,(cn!==null||dn!==null)&&(Jo(),Jr())}}function Un(e,t){var n=e.stateNode;if(n===null)return null;var r=wi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var eo=!1;if(j)try{var $n={};Object.defineProperty($n,"passive",{get:function(){eo=!0}}),window.addEventListener("test",$n,$n),window.removeEventListener("test",$n,$n)}catch{eo=!1}function Xt(e,t,n,r,a,l,c,h,y){var P=Array.prototype.slice.call(arguments,3);try{t.apply(n,P)}catch(L){this.onError(L)}}var fn=!1,pn=null,Bt=!1,Bn=null,at={onError:function(e){fn=!0,pn=e}};function Zo(e,t,n,r,a,l,c,h,y){fn=!1,pn=null,Xt.apply(at,arguments)}function ya(e,t,n,r,a,l,c,h,y){if(Zo.apply(this,arguments),fn){if(fn){var P=pn;fn=!1,pn=null}else throw Error(u(198));Bt||(Bt=!0,Bn=P)}}function lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pr(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ei(e){if(lt(e)!==e)throw Error(u(188))}function to(e){var t=e.alternate;if(!t){if(t=lt(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return ei(a),e;if(l===r)return ei(a),t;l=l.sibling}throw Error(u(188))}if(n.return!==r.return)n=a,r=l;else{for(var c=!1,h=a.child;h;){if(h===n){c=!0,n=a,r=l;break}if(h===r){c=!0,r=a,n=l;break}h=h.sibling}if(!c){for(h=l.child;h;){if(h===n){c=!0,n=l,r=a;break}if(h===r){c=!0,r=l,n=a;break}h=h.sibling}if(!c)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function no(e){return e=to(e),e!==null?Wn(e):null}function Wn(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wn(e);if(t!==null)return t;e=e.sibling}return null}var ti=s.unstable_scheduleCallback,p=s.unstable_cancelCallback,$=s.unstable_shouldYield,Te=s.unstable_requestPaint,me=s.unstable_now,mr=s.unstable_getCurrentPriorityLevel,hr=s.unstable_ImmediatePriority,ro=s.unstable_UserBlockingPriority,Vn=s.unstable_NormalPriority,Hn=s.unstable_LowPriority,mn=s.unstable_IdlePriority,gr=null,Wt=null;function Ud(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(gr,e,void 0,(e.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:Wd,$d=Math.log,Bd=Math.LN2;function Wd(e){return e>>>=0,e===0?32:31-($d(e)/Bd|0)|0}var ni=64,ri=4194304;function oo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function oi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,c=n&268435455;if(c!==0){var h=c&~a;h!==0?r=oo(h):(l&=c,l!==0&&(r=oo(l)))}else c=n&~a,c!==0?r=oo(c):l!==0&&(r=oo(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rt(t),a=1<<n,r|=e[n],t&=~a;return r}function Vd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var c=31-Rt(l),h=1<<c,y=a[c];y===-1?((h&n)===0||(h&r)!==0)&&(a[c]=Vd(h,t)):y<=t&&(e.expiredLanes|=h),l&=~h}}function xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cs(){var e=ni;return ni<<=1,(ni&4194240)===0&&(ni=64),e}function wa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function io(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=n}function Kd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Rt(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function ka(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var ve=0;function Ns(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var bs,Sa,Ps,_s,Rs,ja=!1,ii=[],hn=null,gn=null,vn=null,ao=new Map,lo=new Map,yn=[],qd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ts(e,t){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":ao.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(t.pointerId)}}function so(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=jo(t),t!==null&&Sa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Qd(e,t,n,r,a){switch(t){case"focusin":return hn=so(hn,e,t,n,r,a),!0;case"dragenter":return gn=so(gn,e,t,n,r,a),!0;case"mouseover":return vn=so(vn,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return ao.set(l,so(ao.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,lo.set(l,so(lo.get(l)||null,e,t,n,r,a)),!0}return!1}function Ls(e){var t=Kn(e.target);if(t!==null){var n=lt(t);if(n!==null){if(t=n.tag,t===13){if(t=pr(n),t!==null){e.blockedOn=t,Rs(e.priority,function(){Ps(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qr=r,n.target.dispatchEvent(r),Qr=null}else return t=jo(n),t!==null&&Sa(t),e.blockedOn=n,!1;t.shift()}return!0}function zs(e,t,n){ai(e)&&n.delete(t)}function Gd(){ja=!1,hn!==null&&ai(hn)&&(hn=null),gn!==null&&ai(gn)&&(gn=null),vn!==null&&ai(vn)&&(vn=null),ao.forEach(zs),lo.forEach(zs)}function uo(e,t){e.blockedOn===t&&(e.blockedOn=null,ja||(ja=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Gd)))}function co(e){function t(a){return uo(a,e)}if(0<ii.length){uo(ii[0],e);for(var n=1;n<ii.length;n++){var r=ii[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hn!==null&&uo(hn,e),gn!==null&&uo(gn,e),vn!==null&&uo(vn,e),ao.forEach(t),lo.forEach(t),n=0;n<yn.length;n++)r=yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)Ls(n),n.blockedOn===null&&yn.shift()}var vr=H.ReactCurrentBatchConfig,li=!0;function Yd(e,t,n,r){var a=ve,l=vr.transition;vr.transition=null;try{ve=1,Ea(e,t,n,r)}finally{ve=a,vr.transition=l}}function Xd(e,t,n,r){var a=ve,l=vr.transition;vr.transition=null;try{ve=4,Ea(e,t,n,r)}finally{ve=a,vr.transition=l}}function Ea(e,t,n,r){if(li){var a=Ca(e,t,n,r);if(a===null)Ba(e,t,r,si,n),Ts(e,r);else if(Qd(a,e,t,n,r))r.stopPropagation();else if(Ts(e,r),t&4&&-1<qd.indexOf(e)){for(;a!==null;){var l=jo(a);if(l!==null&&bs(l),l=Ca(e,t,n,r),l===null&&Ba(e,t,r,si,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else Ba(e,t,r,null,n)}}var si=null;function Ca(e,t,n,r){if(si=null,e=Gr(r),e=Kn(e),e!==null)if(t=lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pr(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return si=e,null}function Is(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mr()){case hr:return 1;case ro:return 4;case Vn:case Hn:return 16;case mn:return 536870912;default:return 16}default:return 16}}var xn=null,Na=null,ui=null;function Fs(){if(ui)return ui;var e,t=Na,n=t.length,r,a="value"in xn?xn.value:xn.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var c=n-e;for(r=1;r<=c&&t[n-r]===a[l-r];r++);return ui=a.slice(e,1<r?1-r:void 0)}function ci(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function Ds(){return!1}function gt(e){function t(n,r,a,l,c){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(l):l[h]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?di:Ds,this.isPropagationStopped=Ds,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),t}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ba=gt(yr),fo=B({},yr,{view:0,detail:0}),Jd=gt(fo),Pa,_a,po,fi=B({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==po&&(po&&e.type==="mousemove"?(Pa=e.screenX-po.screenX,_a=e.screenY-po.screenY):_a=Pa=0,po=e),Pa)},movementY:function(e){return"movementY"in e?e.movementY:_a}}),Os=gt(fi),Zd=B({},fi,{dataTransfer:0}),ef=gt(Zd),tf=B({},fo,{relatedTarget:0}),Ra=gt(tf),nf=B({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),rf=gt(nf),of=B({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),af=gt(of),lf=B({},yr,{data:0}),Ms=gt(lf),sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function df(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cf[e])?!!t[e]:!1}function Ta(){return df}var ff=B({},fo,{key:function(e){if(e.key){var t=sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ta,charCode:function(e){return e.type==="keypress"?ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pf=gt(ff),mf=B({},fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),As=gt(mf),hf=B({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ta}),gf=gt(hf),vf=B({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),yf=gt(vf),xf=B({},fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wf=gt(xf),kf=[9,13,27,32],La=j&&"CompositionEvent"in window,mo=null;j&&"documentMode"in document&&(mo=document.documentMode);var Sf=j&&"TextEvent"in window&&!mo,Us=j&&(!La||mo&&8<mo&&11>=mo),$s=" ",Bs=!1;function Ws(e,t){switch(e){case"keyup":return kf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function jf(e,t){switch(e){case"compositionend":return Vs(t);case"keypress":return t.which!==32?null:(Bs=!0,$s);case"textInput":return e=t.data,e===$s&&Bs?null:e;default:return null}}function Ef(e,t){if(xr)return e==="compositionend"||!La&&Ws(e,t)?(e=Fs(),ui=Na=xn=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Us&&t.locale!=="ko"?null:t.data;default:return null}}var Cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cf[e.type]:t==="textarea"}function Ks(e,t,n,r){Xr(r),t=vi(t,"onChange"),0<t.length&&(n=new ba("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ho=null,go=null;function Nf(e){cu(e,0)}function pi(e){var t=Er(e);if(Dn(t))return e}function bf(e,t){if(e==="change")return t}var qs=!1;if(j){var za;if(j){var Ia="oninput"in document;if(!Ia){var Qs=document.createElement("div");Qs.setAttribute("oninput","return;"),Ia=typeof Qs.oninput=="function"}za=Ia}else za=!1;qs=za&&(!document.documentMode||9<document.documentMode)}function Gs(){ho&&(ho.detachEvent("onpropertychange",Ys),go=ho=null)}function Ys(e){if(e.propertyName==="value"&&pi(go)){var t=[];Ks(t,go,e,Gr(e)),Zr(Nf,t)}}function Pf(e,t,n){e==="focusin"?(Gs(),ho=t,go=n,ho.attachEvent("onpropertychange",Ys)):e==="focusout"&&Gs()}function _f(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pi(go)}function Rf(e,t){if(e==="click")return pi(t)}function Tf(e,t){if(e==="input"||e==="change")return pi(t)}function Lf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:Lf;function vo(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!S.call(t,a)||!Tt(e[a],t[a]))return!1}return!0}function Xs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Js(e,t){var n=Xs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xs(n)}}function Zs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function eu(){for(var e=window,t=On();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=On(e.document)}return t}function Fa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zf(e){var t=eu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zs(n.ownerDocument.documentElement,n)){if(r!==null&&Fa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=Js(n,l);var c=Js(n,r);a&&c&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var If=j&&"documentMode"in document&&11>=document.documentMode,wr=null,Da=null,yo=null,Oa=!1;function tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oa||wr==null||wr!==On(r)||(r=wr,"selectionStart"in r&&Fa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yo&&vo(yo,r)||(yo=r,r=vi(Da,"onSelect"),0<r.length&&(t=new ba("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wr)))}function mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionend:mi("Transition","TransitionEnd")},Ma={},nu={};j&&(nu=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function hi(e){if(Ma[e])return Ma[e];if(!kr[e])return e;var t=kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nu)return Ma[e]=t[n];return e}var ru=hi("animationend"),ou=hi("animationiteration"),iu=hi("animationstart"),au=hi("transitionend"),lu=new Map,su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){lu.set(e,t),m(t,[e])}for(var Aa=0;Aa<su.length;Aa++){var Ua=su[Aa],Ff=Ua.toLowerCase(),Df=Ua[0].toUpperCase()+Ua.slice(1);wn(Ff,"on"+Df)}wn(ru,"onAnimationEnd"),wn(ou,"onAnimationIteration"),wn(iu,"onAnimationStart"),wn("dblclick","onDoubleClick"),wn("focusin","onFocus"),wn("focusout","onBlur"),wn(au,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Of=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function uu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ya(r,t,void 0,e),e.currentTarget=null}function cu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var c=r.length-1;0<=c;c--){var h=r[c],y=h.instance,P=h.currentTarget;if(h=h.listener,y!==l&&a.isPropagationStopped())break e;uu(a,h,P),l=y}else for(c=0;c<r.length;c++){if(h=r[c],y=h.instance,P=h.currentTarget,h=h.listener,y!==l&&a.isPropagationStopped())break e;uu(a,h,P),l=y}}}if(Bt)throw e=Bn,Bt=!1,Bn=null,e}function Se(e,t){var n=t[Qa];n===void 0&&(n=t[Qa]=new Set);var r=e+"__bubble";n.has(r)||(du(t,e,2,!1),n.add(r))}function $a(e,t,n){var r=0;t&&(r|=4),du(n,e,r,t)}var gi="_reactListening"+Math.random().toString(36).slice(2);function wo(e){if(!e[gi]){e[gi]=!0,d.forEach(function(n){n!=="selectionchange"&&(Of.has(n)||$a(n,!1,e),$a(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gi]||(t[gi]=!0,$a("selectionchange",!1,t))}}function du(e,t,n,r){switch(Is(t)){case 1:var a=Yd;break;case 4:a=Xd;break;default:a=Ea}n=a.bind(null,t,n,e),a=void 0,!eo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ba(e,t,n,r,a){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var h=r.stateNode.containerInfo;if(h===a||h.nodeType===8&&h.parentNode===a)break;if(c===4)for(c=r.return;c!==null;){var y=c.tag;if((y===3||y===4)&&(y=c.stateNode.containerInfo,y===a||y.nodeType===8&&y.parentNode===a))return;c=c.return}for(;h!==null;){if(c=Kn(h),c===null)return;if(y=c.tag,y===5||y===6){r=l=c;continue e}h=h.parentNode}}r=r.return}Zr(function(){var P=l,L=Gr(n),z=[];e:{var T=lu.get(e);if(T!==void 0){var W=ba,K=e;switch(e){case"keypress":if(ci(n)===0)break e;case"keydown":case"keyup":W=pf;break;case"focusin":K="focus",W=Ra;break;case"focusout":K="blur",W=Ra;break;case"beforeblur":case"afterblur":W=Ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=Os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=gf;break;case ru:case ou:case iu:W=rf;break;case au:W=yf;break;case"scroll":W=Jd;break;case"wheel":W=wf;break;case"copy":case"cut":case"paste":W=af;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=As}var q=(t&4)!==0,Ie=!q&&e==="scroll",E=q?T!==null?T+"Capture":null:T;q=[];for(var k=P,N;k!==null;){N=k;var D=N.stateNode;if(N.tag===5&&D!==null&&(N=D,E!==null&&(D=Un(k,E),D!=null&&q.push(ko(k,D,N)))),Ie)break;k=k.return}0<q.length&&(T=new W(T,K,null,n,L),z.push({event:T,listeners:q}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",T&&n!==Qr&&(K=n.relatedTarget||n.fromElement)&&(Kn(K)||K[Jt]))break e;if((W||T)&&(T=L.window===L?L:(T=L.ownerDocument)?T.defaultView||T.parentWindow:window,W?(K=n.relatedTarget||n.toElement,W=P,K=K?Kn(K):null,K!==null&&(Ie=lt(K),K!==Ie||K.tag!==5&&K.tag!==6)&&(K=null)):(W=null,K=P),W!==K)){if(q=Os,D="onMouseLeave",E="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(q=As,D="onPointerLeave",E="onPointerEnter",k="pointer"),Ie=W==null?T:Er(W),N=K==null?T:Er(K),T=new q(D,k+"leave",W,n,L),T.target=Ie,T.relatedTarget=N,D=null,Kn(L)===P&&(q=new q(E,k+"enter",K,n,L),q.target=N,q.relatedTarget=Ie,D=q),Ie=D,W&&K)t:{for(q=W,E=K,k=0,N=q;N;N=Sr(N))k++;for(N=0,D=E;D;D=Sr(D))N++;for(;0<k-N;)q=Sr(q),k--;for(;0<N-k;)E=Sr(E),N--;for(;k--;){if(q===E||E!==null&&q===E.alternate)break t;q=Sr(q),E=Sr(E)}q=null}else q=null;W!==null&&fu(z,T,W,q,!1),K!==null&&Ie!==null&&fu(z,Ie,K,q,!0)}}e:{if(T=P?Er(P):window,W=T.nodeName&&T.nodeName.toLowerCase(),W==="select"||W==="input"&&T.type==="file")var Q=bf;else if(Hs(T))if(qs)Q=Tf;else{Q=_f;var Y=Pf}else(W=T.nodeName)&&W.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(Q=Rf);if(Q&&(Q=Q(e,P))){Ks(z,Q,n,L);break e}Y&&Y(e,T,P),e==="focusout"&&(Y=T._wrapperState)&&Y.controlled&&T.type==="number"&&Ue(T,"number",T.value)}switch(Y=P?Er(P):window,e){case"focusin":(Hs(Y)||Y.contentEditable==="true")&&(wr=Y,Da=P,yo=null);break;case"focusout":yo=Da=wr=null;break;case"mousedown":Oa=!0;break;case"contextmenu":case"mouseup":case"dragend":Oa=!1,tu(z,n,L);break;case"selectionchange":if(If)break;case"keydown":case"keyup":tu(z,n,L)}var X;if(La)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else xr?Ws(e,n)&&(re="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(re="onCompositionStart");re&&(Us&&n.locale!=="ko"&&(xr||re!=="onCompositionStart"?re==="onCompositionEnd"&&xr&&(X=Fs()):(xn=L,Na="value"in xn?xn.value:xn.textContent,xr=!0)),Y=vi(P,re),0<Y.length&&(re=new Ms(re,e,null,n,L),z.push({event:re,listeners:Y}),X?re.data=X:(X=Vs(n),X!==null&&(re.data=X)))),(X=Sf?jf(e,n):Ef(e,n))&&(P=vi(P,"onBeforeInput"),0<P.length&&(L=new Ms("onBeforeInput","beforeinput",null,n,L),z.push({event:L,listeners:P}),L.data=X))}cu(z,t)})}function ko(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vi(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Un(e,n),l!=null&&r.unshift(ko(e,l,a)),l=Un(e,t),l!=null&&r.push(ko(e,l,a))),e=e.return}return r}function Sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fu(e,t,n,r,a){for(var l=t._reactName,c=[];n!==null&&n!==r;){var h=n,y=h.alternate,P=h.stateNode;if(y!==null&&y===r)break;h.tag===5&&P!==null&&(h=P,a?(y=Un(n,l),y!=null&&c.unshift(ko(n,y,h))):a||(y=Un(n,l),y!=null&&c.push(ko(n,y,h)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var Mf=/\r\n?/g,Af=/\u0000|\uFFFD/g;function pu(e){return(typeof e=="string"?e:""+e).replace(Mf,`
`).replace(Af,"")}function yi(e,t,n){if(t=pu(t),pu(e)!==t&&n)throw Error(u(425))}function xi(){}var Wa=null,Va=null;function Ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ka=typeof setTimeout=="function"?setTimeout:void 0,Uf=typeof clearTimeout=="function"?clearTimeout:void 0,mu=typeof Promise=="function"?Promise:void 0,$f=typeof queueMicrotask=="function"?queueMicrotask:typeof mu<"u"?function(e){return mu.resolve(null).then(e).catch(Bf)}:Ka;function Bf(e){setTimeout(function(){throw e})}function qa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),co(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);co(t)}function kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),Vt="__reactFiber$"+jr,So="__reactProps$"+jr,Jt="__reactContainer$"+jr,Qa="__reactEvents$"+jr,Wf="__reactListeners$"+jr,Vf="__reactHandles$"+jr;function Kn(e){var t=e[Vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[Vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hu(e);e!==null;){if(n=e[Vt])return n;e=hu(e)}return t}e=n,n=e.parentNode}return null}function jo(e){return e=e[Vt]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function wi(e){return e[So]||null}var Ga=[],Cr=-1;function Sn(e){return{current:e}}function je(e){0>Cr||(e.current=Ga[Cr],Ga[Cr]=null,Cr--)}function ke(e,t){Cr++,Ga[Cr]=e.current,e.current=t}var jn={},Je=Sn(jn),st=Sn(!1),qn=jn;function Nr(e,t){var n=e.type.contextTypes;if(!n)return jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function ut(e){return e=e.childContextTypes,e!=null}function ki(){je(st),je(Je)}function gu(e,t,n){if(Je.current!==jn)throw Error(u(168));ke(Je,t),ke(st,n)}function vu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(u(108,ye(e)||"Unknown",a));return B({},n,r)}function Si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,qn=Je.current,ke(Je,e),ke(st,st.current),!0}function yu(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=vu(e,t,qn),r.__reactInternalMemoizedMergedChildContext=e,je(st),je(Je),ke(Je,e)):je(st),ke(st,n)}var Zt=null,ji=!1,Ya=!1;function xu(e){Zt===null?Zt=[e]:Zt.push(e)}function Hf(e){ji=!0,xu(e)}function En(){if(!Ya&&Zt!==null){Ya=!0;var e=0,t=ve;try{var n=Zt;for(ve=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Zt=null,ji=!1}catch(a){throw Zt!==null&&(Zt=Zt.slice(e+1)),ti(hr,En),a}finally{ve=t,Ya=!1}}return null}var br=[],Pr=0,Ei=null,Ci=0,kt=[],St=0,Qn=null,en=1,tn="";function Gn(e,t){br[Pr++]=Ci,br[Pr++]=Ei,Ei=e,Ci=t}function wu(e,t,n){kt[St++]=en,kt[St++]=tn,kt[St++]=Qn,Qn=e;var r=en;e=tn;var a=32-Rt(r)-1;r&=~(1<<a),n+=1;var l=32-Rt(t)+a;if(30<l){var c=a-a%5;l=(r&(1<<c)-1).toString(32),r>>=c,a-=c,en=1<<32-Rt(t)+a|n<<a|r,tn=l+e}else en=1<<l|n<<a|r,tn=e}function Xa(e){e.return!==null&&(Gn(e,1),wu(e,1,0))}function Ja(e){for(;e===Ei;)Ei=br[--Pr],br[Pr]=null,Ci=br[--Pr],br[Pr]=null;for(;e===Qn;)Qn=kt[--St],kt[St]=null,tn=kt[--St],kt[St]=null,en=kt[--St],kt[St]=null}var vt=null,yt=null,Ee=!1,Lt=null;function ku(e,t){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Su(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,yt=kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qn!==null?{id:en,overflow:tn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,vt=e,yt=null,!0):!1;default:return!1}}function Za(e){return(e.mode&1)!==0&&(e.flags&128)===0}function el(e){if(Ee){var t=yt;if(t){var n=t;if(!Su(e,t)){if(Za(e))throw Error(u(418));t=kn(n.nextSibling);var r=vt;t&&Su(e,t)?ku(r,n):(e.flags=e.flags&-4097|2,Ee=!1,vt=e)}}else{if(Za(e))throw Error(u(418));e.flags=e.flags&-4097|2,Ee=!1,vt=e}}}function ju(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function Ni(e){if(e!==vt)return!1;if(!Ee)return ju(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ha(e.type,e.memoizedProps)),t&&(t=yt)){if(Za(e))throw Eu(),Error(u(418));for(;t;)ku(e,t),t=kn(t.nextSibling)}if(ju(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=kn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=vt?kn(e.stateNode.nextSibling):null;return!0}function Eu(){for(var e=yt;e;)e=kn(e.nextSibling)}function _r(){yt=vt=null,Ee=!1}function tl(e){Lt===null?Lt=[e]:Lt.push(e)}var Kf=H.ReactCurrentBatchConfig;function Eo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(c){var h=a.refs;c===null?delete h[l]:h[l]=c},t._stringRef=l,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function bi(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cu(e){var t=e._init;return t(e._payload)}function Nu(e){function t(E,k){if(e){var N=E.deletions;N===null?(E.deletions=[k],E.flags|=16):N.push(k)}}function n(E,k){if(!e)return null;for(;k!==null;)t(E,k),k=k.sibling;return null}function r(E,k){for(E=new Map;k!==null;)k.key!==null?E.set(k.key,k):E.set(k.index,k),k=k.sibling;return E}function a(E,k){return E=Ln(E,k),E.index=0,E.sibling=null,E}function l(E,k,N){return E.index=N,e?(N=E.alternate,N!==null?(N=N.index,N<k?(E.flags|=2,k):N):(E.flags|=2,k)):(E.flags|=1048576,k)}function c(E){return e&&E.alternate===null&&(E.flags|=2),E}function h(E,k,N,D){return k===null||k.tag!==6?(k=Kl(N,E.mode,D),k.return=E,k):(k=a(k,N),k.return=E,k)}function y(E,k,N,D){var Q=N.type;return Q===ue?L(E,k,N.props.children,D,N.key):k!==null&&(k.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ye&&Cu(Q)===k.type)?(D=a(k,N.props),D.ref=Eo(E,k,N),D.return=E,D):(D=Xi(N.type,N.key,N.props,null,E.mode,D),D.ref=Eo(E,k,N),D.return=E,D)}function P(E,k,N,D){return k===null||k.tag!==4||k.stateNode.containerInfo!==N.containerInfo||k.stateNode.implementation!==N.implementation?(k=ql(N,E.mode,D),k.return=E,k):(k=a(k,N.children||[]),k.return=E,k)}function L(E,k,N,D,Q){return k===null||k.tag!==7?(k=rr(N,E.mode,D,Q),k.return=E,k):(k=a(k,N),k.return=E,k)}function z(E,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Kl(""+k,E.mode,N),k.return=E,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ne:return N=Xi(k.type,k.key,k.props,null,E.mode,N),N.ref=Eo(E,null,k),N.return=E,N;case le:return k=ql(k,E.mode,N),k.return=E,k;case Ye:var D=k._init;return z(E,D(k._payload),N)}if(ht(k)||Z(k))return k=rr(k,E.mode,N,null),k.return=E,k;bi(E,k)}return null}function T(E,k,N,D){var Q=k!==null?k.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return Q!==null?null:h(E,k,""+N,D);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ne:return N.key===Q?y(E,k,N,D):null;case le:return N.key===Q?P(E,k,N,D):null;case Ye:return Q=N._init,T(E,k,Q(N._payload),D)}if(ht(N)||Z(N))return Q!==null?null:L(E,k,N,D,null);bi(E,N)}return null}function W(E,k,N,D,Q){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(N)||null,h(k,E,""+D,Q);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ne:return E=E.get(D.key===null?N:D.key)||null,y(k,E,D,Q);case le:return E=E.get(D.key===null?N:D.key)||null,P(k,E,D,Q);case Ye:var Y=D._init;return W(E,k,N,Y(D._payload),Q)}if(ht(D)||Z(D))return E=E.get(N)||null,L(k,E,D,Q,null);bi(k,D)}return null}function K(E,k,N,D){for(var Q=null,Y=null,X=k,re=k=0,We=null;X!==null&&re<N.length;re++){X.index>re?(We=X,X=null):We=X.sibling;var he=T(E,X,N[re],D);if(he===null){X===null&&(X=We);break}e&&X&&he.alternate===null&&t(E,X),k=l(he,k,re),Y===null?Q=he:Y.sibling=he,Y=he,X=We}if(re===N.length)return n(E,X),Ee&&Gn(E,re),Q;if(X===null){for(;re<N.length;re++)X=z(E,N[re],D),X!==null&&(k=l(X,k,re),Y===null?Q=X:Y.sibling=X,Y=X);return Ee&&Gn(E,re),Q}for(X=r(E,X);re<N.length;re++)We=W(X,E,re,N[re],D),We!==null&&(e&&We.alternate!==null&&X.delete(We.key===null?re:We.key),k=l(We,k,re),Y===null?Q=We:Y.sibling=We,Y=We);return e&&X.forEach(function(zn){return t(E,zn)}),Ee&&Gn(E,re),Q}function q(E,k,N,D){var Q=Z(N);if(typeof Q!="function")throw Error(u(150));if(N=Q.call(N),N==null)throw Error(u(151));for(var Y=Q=null,X=k,re=k=0,We=null,he=N.next();X!==null&&!he.done;re++,he=N.next()){X.index>re?(We=X,X=null):We=X.sibling;var zn=T(E,X,he.value,D);if(zn===null){X===null&&(X=We);break}e&&X&&zn.alternate===null&&t(E,X),k=l(zn,k,re),Y===null?Q=zn:Y.sibling=zn,Y=zn,X=We}if(he.done)return n(E,X),Ee&&Gn(E,re),Q;if(X===null){for(;!he.done;re++,he=N.next())he=z(E,he.value,D),he!==null&&(k=l(he,k,re),Y===null?Q=he:Y.sibling=he,Y=he);return Ee&&Gn(E,re),Q}for(X=r(E,X);!he.done;re++,he=N.next())he=W(X,E,re,he.value,D),he!==null&&(e&&he.alternate!==null&&X.delete(he.key===null?re:he.key),k=l(he,k,re),Y===null?Q=he:Y.sibling=he,Y=he);return e&&X.forEach(function(Cp){return t(E,Cp)}),Ee&&Gn(E,re),Q}function Ie(E,k,N,D){if(typeof N=="object"&&N!==null&&N.type===ue&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case ne:e:{for(var Q=N.key,Y=k;Y!==null;){if(Y.key===Q){if(Q=N.type,Q===ue){if(Y.tag===7){n(E,Y.sibling),k=a(Y,N.props.children),k.return=E,E=k;break e}}else if(Y.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ye&&Cu(Q)===Y.type){n(E,Y.sibling),k=a(Y,N.props),k.ref=Eo(E,Y,N),k.return=E,E=k;break e}n(E,Y);break}else t(E,Y);Y=Y.sibling}N.type===ue?(k=rr(N.props.children,E.mode,D,N.key),k.return=E,E=k):(D=Xi(N.type,N.key,N.props,null,E.mode,D),D.ref=Eo(E,k,N),D.return=E,E=D)}return c(E);case le:e:{for(Y=N.key;k!==null;){if(k.key===Y)if(k.tag===4&&k.stateNode.containerInfo===N.containerInfo&&k.stateNode.implementation===N.implementation){n(E,k.sibling),k=a(k,N.children||[]),k.return=E,E=k;break e}else{n(E,k);break}else t(E,k);k=k.sibling}k=ql(N,E.mode,D),k.return=E,E=k}return c(E);case Ye:return Y=N._init,Ie(E,k,Y(N._payload),D)}if(ht(N))return K(E,k,N,D);if(Z(N))return q(E,k,N,D);bi(E,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,k!==null&&k.tag===6?(n(E,k.sibling),k=a(k,N),k.return=E,E=k):(n(E,k),k=Kl(N,E.mode,D),k.return=E,E=k),c(E)):n(E,k)}return Ie}var Rr=Nu(!0),bu=Nu(!1),Pi=Sn(null),_i=null,Tr=null,nl=null;function rl(){nl=Tr=_i=null}function ol(e){var t=Pi.current;je(Pi),e._currentValue=t}function il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Lr(e,t){_i=e,nl=Tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ct=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(nl!==e)if(e={context:e,memoizedValue:t,next:null},Tr===null){if(_i===null)throw Error(u(308));Tr=e,_i.dependencies={lanes:0,firstContext:e}}else Tr=Tr.next=e;return t}var Yn=null;function al(e){Yn===null?Yn=[e]:Yn.push(e)}function Pu(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,al(t)):(n.next=a.next,a.next=n),t.interleaved=n,nn(e,r)}function nn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Cn=!1;function ll(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _u(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,nn(e,n)}return a=r.interleaved,a===null?(t.next=t,al(r)):(t.next=a.next,a.next=t),r.interleaved=t,nn(e,n)}function Ri(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ka(e,n)}}function Ru(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=c:l=l.next=c,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ti(e,t,n,r){var a=e.updateQueue;Cn=!1;var l=a.firstBaseUpdate,c=a.lastBaseUpdate,h=a.shared.pending;if(h!==null){a.shared.pending=null;var y=h,P=y.next;y.next=null,c===null?l=P:c.next=P,c=y;var L=e.alternate;L!==null&&(L=L.updateQueue,h=L.lastBaseUpdate,h!==c&&(h===null?L.firstBaseUpdate=P:h.next=P,L.lastBaseUpdate=y))}if(l!==null){var z=a.baseState;c=0,L=P=y=null,h=l;do{var T=h.lane,W=h.eventTime;if((r&T)===T){L!==null&&(L=L.next={eventTime:W,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var K=e,q=h;switch(T=t,W=n,q.tag){case 1:if(K=q.payload,typeof K=="function"){z=K.call(W,z,T);break e}z=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=q.payload,T=typeof K=="function"?K.call(W,z,T):K,T==null)break e;z=B({},z,T);break e;case 2:Cn=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,T=a.effects,T===null?a.effects=[h]:T.push(h))}else W={eventTime:W,lane:T,tag:h.tag,payload:h.payload,callback:h.callback,next:null},L===null?(P=L=W,y=z):L=L.next=W,c|=T;if(h=h.next,h===null){if(h=a.shared.pending,h===null)break;T=h,h=T.next,T.next=null,a.lastBaseUpdate=T,a.shared.pending=null}}while(!0);if(L===null&&(y=z),a.baseState=y,a.firstBaseUpdate=P,a.lastBaseUpdate=L,t=a.shared.interleaved,t!==null){a=t;do c|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);Zn|=c,e.lanes=c,e.memoizedState=z}}function Tu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(u(191,a));a.call(r)}}}var Co={},Ht=Sn(Co),No=Sn(Co),bo=Sn(Co);function Xn(e){if(e===Co)throw Error(u(174));return e}function sl(e,t){switch(ke(bo,t),ke(No,e),ke(Ht,Co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cr(t,e)}je(Ht),ke(Ht,t)}function zr(){je(Ht),je(No),je(bo)}function Lu(e){Xn(bo.current);var t=Xn(Ht.current),n=cr(t,e.type);t!==n&&(ke(No,e),ke(Ht,n))}function ul(e){No.current===e&&(je(Ht),je(No))}var Pe=Sn(0);function Li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cl=[];function dl(){for(var e=0;e<cl.length;e++)cl[e]._workInProgressVersionPrimary=null;cl.length=0}var zi=H.ReactCurrentDispatcher,fl=H.ReactCurrentBatchConfig,Jn=0,_e=null,Me=null,$e=null,Ii=!1,Po=!1,_o=0,qf=0;function Ze(){throw Error(u(321))}function pl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function ml(e,t,n,r,a,l){if(Jn=l,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zi.current=e===null||e.memoizedState===null?Xf:Jf,e=n(r,a),Po){l=0;do{if(Po=!1,_o=0,25<=l)throw Error(u(301));l+=1,$e=Me=null,t.updateQueue=null,zi.current=Zf,e=n(r,a)}while(Po)}if(zi.current=Oi,t=Me!==null&&Me.next!==null,Jn=0,$e=Me=_e=null,Ii=!1,t)throw Error(u(300));return e}function hl(){var e=_o!==0;return _o=0,e}function Kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?_e.memoizedState=$e=e:$e=$e.next=e,$e}function Et(){if(Me===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=$e===null?_e.memoizedState:$e.next;if(t!==null)$e=t,Me=e;else{if(e===null)throw Error(u(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},$e===null?_e.memoizedState=$e=e:$e=$e.next=e}return $e}function Ro(e,t){return typeof t=="function"?t(e):t}function gl(e){var t=Et(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=Me,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var c=a.next;a.next=l.next,l.next=c}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var h=c=null,y=null,P=l;do{var L=P.lane;if((Jn&L)===L)y!==null&&(y=y.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),r=P.hasEagerState?P.eagerState:e(r,P.action);else{var z={lane:L,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};y===null?(h=y=z,c=r):y=y.next=z,_e.lanes|=L,Zn|=L}P=P.next}while(P!==null&&P!==l);y===null?c=r:y.next=h,Tt(r,t.memoizedState)||(ct=!0),t.memoizedState=r,t.baseState=c,t.baseQueue=y,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,_e.lanes|=l,Zn|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vl(e){var t=Et(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var c=a=a.next;do l=e(l,c.action),c=c.next;while(c!==a);Tt(l,t.memoizedState)||(ct=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function zu(){}function Iu(e,t){var n=_e,r=Et(),a=t(),l=!Tt(r.memoizedState,a);if(l&&(r.memoizedState=a,ct=!0),r=r.queue,yl(Ou.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,To(9,Du.bind(null,n,r,a,t),void 0,null),Be===null)throw Error(u(349));(Jn&30)!==0||Fu(n,t,a)}return a}function Fu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Du(e,t,n,r){t.value=n,t.getSnapshot=r,Mu(t)&&Au(e)}function Ou(e,t,n){return n(function(){Mu(t)&&Au(e)})}function Mu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Au(e){var t=nn(e,1);t!==null&&Dt(t,e,1,-1)}function Uu(e){var t=Kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t.queue=e,e=e.dispatch=Yf.bind(null,_e,e),[t.memoizedState,e]}function To(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $u(){return Et().memoizedState}function Fi(e,t,n,r){var a=Kt();_e.flags|=e,a.memoizedState=To(1|t,n,void 0,r===void 0?null:r)}function Di(e,t,n,r){var a=Et();r=r===void 0?null:r;var l=void 0;if(Me!==null){var c=Me.memoizedState;if(l=c.destroy,r!==null&&pl(r,c.deps)){a.memoizedState=To(t,n,l,r);return}}_e.flags|=e,a.memoizedState=To(1|t,n,l,r)}function Bu(e,t){return Fi(8390656,8,e,t)}function yl(e,t){return Di(2048,8,e,t)}function Wu(e,t){return Di(4,2,e,t)}function Vu(e,t){return Di(4,4,e,t)}function Hu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ku(e,t,n){return n=n!=null?n.concat([e]):null,Di(4,4,Hu.bind(null,t,e),n)}function xl(){}function qu(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qu(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gu(e,t,n){return(Jn&21)===0?(e.baseState&&(e.baseState=!1,ct=!0),e.memoizedState=n):(Tt(n,t)||(n=Cs(),_e.lanes|=n,Zn|=n,e.baseState=!0),t)}function Qf(e,t){var n=ve;ve=n!==0&&4>n?n:4,e(!0);var r=fl.transition;fl.transition={};try{e(!1),t()}finally{ve=n,fl.transition=r}}function Yu(){return Et().memoizedState}function Gf(e,t,n){var r=Rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xu(e))Ju(t,n);else if(n=Pu(e,t,n,r),n!==null){var a=rt();Dt(n,e,r,a),Zu(n,t,r)}}function Yf(e,t,n){var r=Rn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xu(e))Ju(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var c=t.lastRenderedState,h=l(c,n);if(a.hasEagerState=!0,a.eagerState=h,Tt(h,c)){var y=t.interleaved;y===null?(a.next=a,al(t)):(a.next=y.next,y.next=a),t.interleaved=a;return}}catch{}finally{}n=Pu(e,t,a,r),n!==null&&(a=rt(),Dt(n,e,r,a),Zu(n,t,r))}}function Xu(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function Ju(e,t){Po=Ii=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ka(e,n)}}var Oi={readContext:jt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},Xf={readContext:jt,useCallback:function(e,t){return Kt().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:Bu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fi(4194308,4,Hu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fi(4,2,e,t)},useMemo:function(e,t){var n=Kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gf.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=Kt();return e={current:e},t.memoizedState=e},useState:Uu,useDebugValue:xl,useDeferredValue:function(e){return Kt().memoizedState=e},useTransition:function(){var e=Uu(!1),t=e[0];return e=Qf.bind(null,e[1]),Kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,a=Kt();if(Ee){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Be===null)throw Error(u(349));(Jn&30)!==0||Fu(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,Bu(Ou.bind(null,r,l,e),[e]),r.flags|=2048,To(9,Du.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Kt(),t=Be.identifierPrefix;if(Ee){var n=tn,r=en;n=(r&~(1<<32-Rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_o++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jf={readContext:jt,useCallback:qu,useContext:jt,useEffect:yl,useImperativeHandle:Ku,useInsertionEffect:Wu,useLayoutEffect:Vu,useMemo:Qu,useReducer:gl,useRef:$u,useState:function(){return gl(Ro)},useDebugValue:xl,useDeferredValue:function(e){var t=Et();return Gu(t,Me.memoizedState,e)},useTransition:function(){var e=gl(Ro)[0],t=Et().memoizedState;return[e,t]},useMutableSource:zu,useSyncExternalStore:Iu,useId:Yu,unstable_isNewReconciler:!1},Zf={readContext:jt,useCallback:qu,useContext:jt,useEffect:yl,useImperativeHandle:Ku,useInsertionEffect:Wu,useLayoutEffect:Vu,useMemo:Qu,useReducer:vl,useRef:$u,useState:function(){return vl(Ro)},useDebugValue:xl,useDeferredValue:function(e){var t=Et();return Me===null?t.memoizedState=e:Gu(t,Me.memoizedState,e)},useTransition:function(){var e=vl(Ro)[0],t=Et().memoizedState;return[e,t]},useMutableSource:zu,useSyncExternalStore:Iu,useId:Yu,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function wl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mi={isMounted:function(e){return(e=e._reactInternals)?lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=rt(),a=Rn(e),l=rn(r,a);l.payload=t,n!=null&&(l.callback=n),t=Nn(e,l,a),t!==null&&(Dt(t,e,a,r),Ri(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=rt(),a=Rn(e),l=rn(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Nn(e,l,a),t!==null&&(Dt(t,e,a,r),Ri(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),r=Rn(e),a=rn(n,r);a.tag=2,t!=null&&(a.callback=t),t=Nn(e,a,r),t!==null&&(Dt(t,e,r,n),Ri(t,e,r))}};function ec(e,t,n,r,a,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,c):t.prototype&&t.prototype.isPureReactComponent?!vo(n,r)||!vo(a,l):!0}function tc(e,t,n){var r=!1,a=jn,l=t.contextType;return typeof l=="object"&&l!==null?l=jt(l):(a=ut(t)?qn:Je.current,r=t.contextTypes,l=(r=r!=null)?Nr(e,a):jn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function nc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mi.enqueueReplaceState(t,t.state,null)}function kl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},ll(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=jt(l):(l=ut(t)?qn:Je.current,a.context=Nr(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(wl(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Mi.enqueueReplaceState(a,a.state,null),Ti(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,t){try{var n="",r=t;do n+=ce(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function Sl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ep=typeof WeakMap=="function"?WeakMap:Map;function rc(e,t,n){n=rn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hi||(Hi=!0,Ml=r),jl(e,t)},n}function oc(e,t,n){n=rn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){jl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){jl(e,t),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function ic(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ep;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=mp.bind(null,e,t,n),t.then(e,e))}function ac(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lc(e,t,n,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=rn(-1,1),t.tag=2,Nn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var tp=H.ReactCurrentOwner,ct=!1;function nt(e,t,n,r){t.child=e===null?bu(t,null,n,r):Rr(t,e.child,n,r)}function sc(e,t,n,r,a){n=n.render;var l=t.ref;return Lr(t,a),r=ml(e,t,n,r,l,a),n=hl(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,on(e,t,a)):(Ee&&n&&Xa(t),t.flags|=1,nt(e,t,r,a),t.child)}function uc(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!Hl(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,cc(e,t,l,r,a)):(e=Xi(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&a)===0){var c=l.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(c,r)&&e.ref===t.ref)return on(e,t,a)}return t.flags|=1,e=Ln(l,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if(vo(l,r)&&e.ref===t.ref)if(ct=!1,t.pendingProps=r=l,(e.lanes&a)!==0)(e.flags&131072)!==0&&(ct=!0);else return t.lanes=e.lanes,on(e,t,a)}return El(e,t,n,r,a)}function dc(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Dr,xt),xt|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(Dr,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ke(Dr,xt),xt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ke(Dr,xt),xt|=r;return nt(e,t,a,n),t.child}function fc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,n,r,a){var l=ut(n)?qn:Je.current;return l=Nr(t,l),Lr(t,a),n=ml(e,t,n,r,l,a),r=hl(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,on(e,t,a)):(Ee&&r&&Xa(t),t.flags|=1,nt(e,t,n,a),t.child)}function pc(e,t,n,r,a){if(ut(n)){var l=!0;Si(t)}else l=!1;if(Lr(t,a),t.stateNode===null)Ui(e,t),tc(t,n,r),kl(t,n,r,a),r=!0;else if(e===null){var c=t.stateNode,h=t.memoizedProps;c.props=h;var y=c.context,P=n.contextType;typeof P=="object"&&P!==null?P=jt(P):(P=ut(n)?qn:Je.current,P=Nr(t,P));var L=n.getDerivedStateFromProps,z=typeof L=="function"||typeof c.getSnapshotBeforeUpdate=="function";z||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==r||y!==P)&&nc(t,c,r,P),Cn=!1;var T=t.memoizedState;c.state=T,Ti(t,r,c,a),y=t.memoizedState,h!==r||T!==y||st.current||Cn?(typeof L=="function"&&(wl(t,n,L,r),y=t.memoizedState),(h=Cn||ec(t,n,h,r,T,y,P))?(z||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=y),c.props=r,c.state=y,c.context=P,r=h):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,_u(e,t),h=t.memoizedProps,P=t.type===t.elementType?h:zt(t.type,h),c.props=P,z=t.pendingProps,T=c.context,y=n.contextType,typeof y=="object"&&y!==null?y=jt(y):(y=ut(n)?qn:Je.current,y=Nr(t,y));var W=n.getDerivedStateFromProps;(L=typeof W=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==z||T!==y)&&nc(t,c,r,y),Cn=!1,T=t.memoizedState,c.state=T,Ti(t,r,c,a);var K=t.memoizedState;h!==z||T!==K||st.current||Cn?(typeof W=="function"&&(wl(t,n,W,r),K=t.memoizedState),(P=Cn||ec(t,n,P,r,T,K,y)||!1)?(L||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,K,y),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,K,y)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=K),c.props=r,c.state=K,c.context=y,r=P):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),r=!1)}return Cl(e,t,n,r,l,a)}function Cl(e,t,n,r,a,l){fc(e,t);var c=(t.flags&128)!==0;if(!r&&!c)return a&&yu(t,n,!1),on(e,t,l);r=t.stateNode,tp.current=t;var h=c&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&c?(t.child=Rr(t,e.child,null,l),t.child=Rr(t,null,h,l)):nt(e,t,h,l),t.memoizedState=r.state,a&&yu(t,n,!0),t.child}function mc(e){var t=e.stateNode;t.pendingContext?gu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gu(e,t.context,!1),sl(e,t.containerInfo)}function hc(e,t,n,r,a){return _r(),tl(a),t.flags|=256,nt(e,t,n,r),t.child}var Nl={dehydrated:null,treeContext:null,retryLane:0};function bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function gc(e,t,n){var r=t.pendingProps,a=Pe.current,l=!1,c=(t.flags&128)!==0,h;if((h=c)||(h=e!==null&&e.memoizedState===null?!1:(a&2)!==0),h?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ke(Pe,a&1),e===null)return el(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=r.children,e=r.fallback,l?(r=t.mode,l=t.child,c={mode:"hidden",children:c},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=c):l=Ji(c,r,0,null),e=rr(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=bl(n),t.memoizedState=Nl,e):Pl(t,c));if(a=e.memoizedState,a!==null&&(h=a.dehydrated,h!==null))return np(e,t,c,r,h,a,n);if(l){l=r.fallback,c=t.mode,a=e.child,h=a.sibling;var y={mode:"hidden",children:r.children};return(c&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=y,t.deletions=null):(r=Ln(a,y),r.subtreeFlags=a.subtreeFlags&14680064),h!==null?l=Ln(h,l):(l=rr(l,c,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,c=e.child.memoizedState,c=c===null?bl(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=e.childLanes&~n,t.memoizedState=Nl,r}return l=e.child,e=l.sibling,r=Ln(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pl(e,t){return t=Ji({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ai(e,t,n,r){return r!==null&&tl(r),Rr(t,e.child,null,n),e=Pl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function np(e,t,n,r,a,l,c){if(n)return t.flags&256?(t.flags&=-257,r=Sl(Error(u(422))),Ai(e,t,c,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=Ji({mode:"visible",children:r.children},a,0,null),l=rr(l,a,c,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Rr(t,e.child,null,c),t.child.memoizedState=bl(c),t.memoizedState=Nl,l);if((t.mode&1)===0)return Ai(e,t,c,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var h=r.dgst;return r=h,l=Error(u(419)),r=Sl(l,r,void 0),Ai(e,t,c,r)}if(h=(c&e.childLanes)!==0,ct||h){if(r=Be,r!==null){switch(c&-c){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|c))!==0?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,nn(e,a),Dt(r,e,a,-1))}return Vl(),r=Sl(Error(u(421))),Ai(e,t,c,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=hp.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,yt=kn(a.nextSibling),vt=t,Ee=!0,Lt=null,e!==null&&(kt[St++]=en,kt[St++]=tn,kt[St++]=Qn,en=e.id,tn=e.overflow,Qn=t),t=Pl(t,r.children),t.flags|=4096,t)}function vc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),il(e.return,t,n)}function _l(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function yc(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(nt(e,t,r.children,n),r=Pe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vc(e,n,t);else if(e.tag===19)vc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ke(Pe,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Li(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),_l(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Li(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}_l(t,!0,n,null,l);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ui(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rp(e,t,n){switch(t.tag){case 3:mc(t),_r();break;case 5:Lu(t);break;case 1:ut(t.type)&&Si(t);break;case 4:sl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ke(Pi,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ke(Pe,Pe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?gc(e,t,n):(ke(Pe,Pe.current&1),e=on(e,t,n),e!==null?e.sibling:null);ke(Pe,Pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return yc(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ke(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,dc(e,t,n)}return on(e,t,n)}var xc,Rl,wc,kc;xc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Rl=function(){},wc=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Xn(Ht.current);var l=null;switch(n){case"input":a=Wr(e,a),r=Wr(e,r),l=[];break;case"select":a=B({},a,{value:void 0}),r=B({},r,{value:void 0}),l=[];break;case"textarea":a=Vr(e,a),r=Vr(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xi)}it(n,r);var c;n=null;for(P in a)if(!r.hasOwnProperty(P)&&a.hasOwnProperty(P)&&a[P]!=null)if(P==="style"){var h=a[P];for(c in h)h.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(f.hasOwnProperty(P)?l||(l=[]):(l=l||[]).push(P,null));for(P in r){var y=r[P];if(h=a!=null?a[P]:void 0,r.hasOwnProperty(P)&&y!==h&&(y!=null||h!=null))if(P==="style")if(h){for(c in h)!h.hasOwnProperty(c)||y&&y.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in y)y.hasOwnProperty(c)&&h[c]!==y[c]&&(n||(n={}),n[c]=y[c])}else n||(l||(l=[]),l.push(P,n)),n=y;else P==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,h=h?h.__html:void 0,y!=null&&h!==y&&(l=l||[]).push(P,y)):P==="children"?typeof y!="string"&&typeof y!="number"||(l=l||[]).push(P,""+y):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(f.hasOwnProperty(P)?(y!=null&&P==="onScroll"&&Se("scroll",e),l||h===y||(l=[])):(l=l||[]).push(P,y))}n&&(l=l||[]).push("style",n);var P=l;(t.updateQueue=P)&&(t.flags|=4)}},kc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Lo(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function op(e,t,n){var r=t.pendingProps;switch(Ja(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return ut(t.type)&&ki(),et(t),null;case 3:return r=t.stateNode,zr(),je(st),je(Je),dl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ni(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lt!==null&&($l(Lt),Lt=null))),Rl(e,t),et(t),null;case 5:ul(t);var a=Xn(bo.current);if(n=t.type,e!==null&&t.stateNode!=null)wc(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return et(t),null}if(e=Xn(Ht.current),Ni(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Vt]=t,r[So]=l,e=(t.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(a=0;a<xo.length;a++)Se(xo[a],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":Mn(r,l),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Se("invalid",r);break;case"textarea":At(r,l),Se("invalid",r)}it(n,l),a=null;for(var c in l)if(l.hasOwnProperty(c)){var h=l[c];c==="children"?typeof h=="string"?r.textContent!==h&&(l.suppressHydrationWarning!==!0&&yi(r.textContent,h,e),a=["children",h]):typeof h=="number"&&r.textContent!==""+h&&(l.suppressHydrationWarning!==!0&&yi(r.textContent,h,e),a=["children",""+h]):f.hasOwnProperty(c)&&h!=null&&c==="onScroll"&&Se("scroll",r)}switch(n){case"input":Fn(r),mt(r,l,!0);break;case"textarea":Fn(r),Ut(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=xi)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{c=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hr(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),n==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[Vt]=t,e[So]=r,xc(e,t,!1,!1),t.stateNode=e;e:{switch(c=qr(n,r),n){case"dialog":Se("cancel",e),Se("close",e),a=r;break;case"iframe":case"object":case"embed":Se("load",e),a=r;break;case"video":case"audio":for(a=0;a<xo.length;a++)Se(xo[a],e);a=r;break;case"source":Se("error",e),a=r;break;case"img":case"image":case"link":Se("error",e),Se("load",e),a=r;break;case"details":Se("toggle",e),a=r;break;case"input":Mn(e,r),a=Wr(e,r),Se("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=B({},r,{value:void 0}),Se("invalid",e);break;case"textarea":At(e,r),a=Vr(e,r),Se("invalid",e);break;default:a=r}it(n,a),h=a;for(l in h)if(h.hasOwnProperty(l)){var y=h[l];l==="style"?ze(e,y):l==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&dr(e,y)):l==="children"?typeof y=="string"?(n!=="textarea"||y!=="")&&$t(e,y):typeof y=="number"&&$t(e,""+y):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(f.hasOwnProperty(l)?y!=null&&l==="onScroll"&&Se("scroll",e):y!=null&&G(e,l,y,c))}switch(n){case"input":Fn(e),mt(e,r,!1);break;case"textarea":Fn(e),Ut(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fe(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?un(e,!!r.multiple,l,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=xi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)kc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=Xn(bo.current),Xn(Ht.current),Ni(t)){if(r=t.stateNode,n=t.memoizedProps,r[Vt]=t,(l=r.nodeValue!==n)&&(e=vt,e!==null))switch(e.tag){case 3:yi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yi(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=t,t.stateNode=r}return et(t),null;case 13:if(je(Pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&yt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Eu(),_r(),t.flags|=98560,l=!1;else if(l=Ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[Vt]=t}else _r(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),l=!1}else Lt!==null&&($l(Lt),Lt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Pe.current&1)!==0?Ae===0&&(Ae=3):Vl())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return zr(),Rl(e,t),e===null&&wo(t.stateNode.containerInfo),et(t),null;case 10:return ol(t.type._context),et(t),null;case 17:return ut(t.type)&&ki(),et(t),null;case 19:if(je(Pe),l=t.memoizedState,l===null)return et(t),null;if(r=(t.flags&128)!==0,c=l.rendering,c===null)if(r)Lo(l,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Li(e),c!==null){for(t.flags|=128,Lo(l,!1),r=c.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Pe,Pe.current&1|2),t.child}e=e.sibling}l.tail!==null&&me()>Or&&(t.flags|=128,r=!0,Lo(l,!1),t.lanes=4194304)}else{if(!r)if(e=Li(c),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!Ee)return et(t),null}else 2*me()-l.renderingStartTime>Or&&n!==1073741824&&(t.flags|=128,r=!0,Lo(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(n=l.last,n!==null?n.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=me(),t.sibling=null,n=Pe.current,ke(Pe,r?n&1|2:n&1),t):(et(t),null);case 22:case 23:return Wl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(xt&1073741824)!==0&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function ip(e,t){switch(Ja(t),t.tag){case 1:return ut(t.type)&&ki(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),je(st),je(Je),dl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ul(t),null;case 13:if(je(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Pe),null;case 4:return zr(),null;case 10:return ol(t.type._context),null;case 22:case 23:return Wl(),null;case 24:return null;default:return null}}var $i=!1,tt=!1,ap=typeof WeakSet=="function"?WeakSet:Set,V=null;function Fr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(e,t,r)}else n.current=null}function Tl(e,t,n){try{n()}catch(r){Le(e,t,r)}}var Sc=!1;function lp(e,t){if(Wa=li,e=eu(),Fa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var c=0,h=-1,y=-1,P=0,L=0,z=e,T=null;t:for(;;){for(var W;z!==n||a!==0&&z.nodeType!==3||(h=c+a),z!==l||r!==0&&z.nodeType!==3||(y=c+r),z.nodeType===3&&(c+=z.nodeValue.length),(W=z.firstChild)!==null;)T=z,z=W;for(;;){if(z===e)break t;if(T===n&&++P===a&&(h=c),T===l&&++L===r&&(y=c),(W=z.nextSibling)!==null)break;z=T,T=z.parentNode}z=W}n=h===-1||y===-1?null:{start:h,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(Va={focusedElem:e,selectionRange:n},li=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var K=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var q=K.memoizedProps,Ie=K.memoizedState,E=t.stateNode,k=E.getSnapshotBeforeUpdate(t.elementType===t.type?q:zt(t.type,q),Ie);E.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var N=t.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(D){Le(t,t.return,D)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return K=Sc,Sc=!1,K}function zo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Tl(t,n,l)}a=a.next}while(a!==r)}}function Bi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ll(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function jc(e){var t=e.alternate;t!==null&&(e.alternate=null,jc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Vt],delete t[So],delete t[Qa],delete t[Wf],delete t[Vf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function Cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xi));else if(r!==4&&(e=e.child,e!==null))for(zl(e,t,n),e=e.sibling;e!==null;)zl(e,t,n),e=e.sibling}function Il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Il(e,t,n),e=e.sibling;e!==null;)Il(e,t,n),e=e.sibling}var qe=null,It=!1;function bn(e,t,n){for(n=n.child;n!==null;)Nc(e,t,n),n=n.sibling}function Nc(e,t,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(gr,n)}catch{}switch(n.tag){case 5:tt||Fr(n,t);case 6:var r=qe,a=It;qe=null,bn(e,t,n),qe=r,It=a,qe!==null&&(It?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(It?(e=qe,n=n.stateNode,e.nodeType===8?qa(e.parentNode,n):e.nodeType===1&&qa(e,n),co(e)):qa(qe,n.stateNode));break;case 4:r=qe,a=It,qe=n.stateNode.containerInfo,It=!0,bn(e,t,n),qe=r,It=a;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,c=l.destroy;l=l.tag,c!==void 0&&((l&2)!==0||(l&4)!==0)&&Tl(n,t,c),a=a.next}while(a!==r)}bn(e,t,n);break;case 1:if(!tt&&(Fr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(h){Le(n,t,h)}bn(e,t,n);break;case 21:bn(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,bn(e,t,n),tt=r):bn(e,t,n);break;default:bn(e,t,n)}}function bc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ap),t.forEach(function(r){var a=gp.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,c=t,h=c;e:for(;h!==null;){switch(h.tag){case 5:qe=h.stateNode,It=!1;break e;case 3:qe=h.stateNode.containerInfo,It=!0;break e;case 4:qe=h.stateNode.containerInfo,It=!0;break e}h=h.return}if(qe===null)throw Error(u(160));Nc(l,c,a),qe=null,It=!1;var y=a.alternate;y!==null&&(y.return=null),a.return=null}catch(P){Le(a,t,P)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pc(t,e),t=t.sibling}function Pc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(t,e),qt(e),r&4){try{zo(3,e,e.return),Bi(3,e)}catch(q){Le(e,e.return,q)}try{zo(5,e,e.return)}catch(q){Le(e,e.return,q)}}break;case 1:Ft(t,e),qt(e),r&512&&n!==null&&Fr(n,n.return);break;case 5:if(Ft(t,e),qt(e),r&512&&n!==null&&Fr(n,n.return),e.flags&32){var a=e.stateNode;try{$t(a,"")}catch(q){Le(e,e.return,q)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,c=n!==null?n.memoizedProps:l,h=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{h==="input"&&l.type==="radio"&&l.name!=null&&qo(a,l),qr(h,c);var P=qr(h,l);for(c=0;c<y.length;c+=2){var L=y[c],z=y[c+1];L==="style"?ze(a,z):L==="dangerouslySetInnerHTML"?dr(a,z):L==="children"?$t(a,z):G(a,L,z,P)}switch(h){case"input":xe(a,l);break;case"textarea":Qo(a,l);break;case"select":var T=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var W=l.value;W!=null?un(a,!!l.multiple,W,!1):T!==!!l.multiple&&(l.defaultValue!=null?un(a,!!l.multiple,l.defaultValue,!0):un(a,!!l.multiple,l.multiple?[]:"",!1))}a[So]=l}catch(q){Le(e,e.return,q)}}break;case 6:if(Ft(t,e),qt(e),r&4){if(e.stateNode===null)throw Error(u(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(q){Le(e,e.return,q)}}break;case 3:if(Ft(t,e),qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{co(t.containerInfo)}catch(q){Le(e,e.return,q)}break;case 4:Ft(t,e),qt(e);break;case 13:Ft(t,e),qt(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Ol=me())),r&4&&bc(e);break;case 22:if(L=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(P=tt)||L,Ft(t,e),tt=P):Ft(t,e),qt(e),r&8192){if(P=e.memoizedState!==null,(e.stateNode.isHidden=P)&&!L&&(e.mode&1)!==0)for(V=e,L=e.child;L!==null;){for(z=V=L;V!==null;){switch(T=V,W=T.child,T.tag){case 0:case 11:case 14:case 15:zo(4,T,T.return);break;case 1:Fr(T,T.return);var K=T.stateNode;if(typeof K.componentWillUnmount=="function"){r=T,n=T.return;try{t=r,K.props=t.memoizedProps,K.state=t.memoizedState,K.componentWillUnmount()}catch(q){Le(r,n,q)}}break;case 5:Fr(T,T.return);break;case 22:if(T.memoizedState!==null){Tc(z);continue}}W!==null?(W.return=T,V=W):Tc(z)}L=L.sibling}e:for(L=null,z=e;;){if(z.tag===5){if(L===null){L=z;try{a=z.stateNode,P?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(h=z.stateNode,y=z.memoizedProps.style,c=y!=null&&y.hasOwnProperty("display")?y.display:null,h.style.display=Kr("display",c))}catch(q){Le(e,e.return,q)}}}else if(z.tag===6){if(L===null)try{z.stateNode.nodeValue=P?"":z.memoizedProps}catch(q){Le(e,e.return,q)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;L===z&&(L=null),z=z.return}L===z&&(L=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:Ft(t,e),qt(e),r&4&&bc(e);break;case 21:break;default:Ft(t,e),qt(e)}}function qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ec(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&($t(a,""),r.flags&=-33);var l=Cc(e);Il(e,l,a);break;case 3:case 4:var c=r.stateNode.containerInfo,h=Cc(e);zl(e,h,c);break;default:throw Error(u(161))}}catch(y){Le(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sp(e,t,n){V=e,_c(e)}function _c(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var a=V,l=a.child;if(a.tag===22&&r){var c=a.memoizedState!==null||$i;if(!c){var h=a.alternate,y=h!==null&&h.memoizedState!==null||tt;h=$i;var P=tt;if($i=c,(tt=y)&&!P)for(V=a;V!==null;)c=V,y=c.child,c.tag===22&&c.memoizedState!==null?Lc(a):y!==null?(y.return=c,V=y):Lc(a);for(;l!==null;)V=l,_c(l),l=l.sibling;V=a,$i=h,tt=P}Rc(e)}else(a.subtreeFlags&8772)!==0&&l!==null?(l.return=a,V=l):Rc(e)}}function Rc(e){for(;V!==null;){var t=V;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:tt||Bi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:zt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Tu(t,l,r);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tu(t,c,n)}break;case 5:var h=t.stateNode;if(n===null&&t.flags&4){n=h;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&n.focus();break;case"img":y.src&&(n.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var P=t.alternate;if(P!==null){var L=P.memoizedState;if(L!==null){var z=L.dehydrated;z!==null&&co(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}tt||t.flags&512&&Ll(t)}catch(T){Le(t,t.return,T)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function Tc(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function Lc(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bi(4,t)}catch(y){Le(t,n,y)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(y){Le(t,a,y)}}var l=t.return;try{Ll(t)}catch(y){Le(t,l,y)}break;case 5:var c=t.return;try{Ll(t)}catch(y){Le(t,c,y)}}}catch(y){Le(t,t.return,y)}if(t===e){V=null;break}var h=t.sibling;if(h!==null){h.return=t.return,V=h;break}V=t.return}}var up=Math.ceil,Wi=H.ReactCurrentDispatcher,Fl=H.ReactCurrentOwner,Ct=H.ReactCurrentBatchConfig,de=0,Be=null,De=null,Qe=0,xt=0,Dr=Sn(0),Ae=0,Io=null,Zn=0,Vi=0,Dl=0,Fo=null,dt=null,Ol=0,Or=1/0,an=null,Hi=!1,Ml=null,Pn=null,Ki=!1,_n=null,qi=0,Do=0,Al=null,Qi=-1,Gi=0;function rt(){return(de&6)!==0?me():Qi!==-1?Qi:Qi=me()}function Rn(e){return(e.mode&1)===0?1:(de&2)!==0&&Qe!==0?Qe&-Qe:Kf.transition!==null?(Gi===0&&(Gi=Cs()),Gi):(e=ve,e!==0||(e=window.event,e=e===void 0?16:Is(e.type)),e)}function Dt(e,t,n,r){if(50<Do)throw Do=0,Al=null,Error(u(185));io(e,n,r),((de&2)===0||e!==Be)&&(e===Be&&((de&2)===0&&(Vi|=n),Ae===4&&Tn(e,Qe)),ft(e,r),n===1&&de===0&&(t.mode&1)===0&&(Or=me()+500,ji&&En()))}function ft(e,t){var n=e.callbackNode;Hd(e,t);var r=oi(e,e===Be?Qe:0);if(r===0)n!==null&&p(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&p(n),t===1)e.tag===0?Hf(Ic.bind(null,e)):xu(Ic.bind(null,e)),$f(function(){(de&6)===0&&En()}),n=null;else{switch(Ns(r)){case 1:n=hr;break;case 4:n=ro;break;case 16:n=Vn;break;case 536870912:n=mn;break;default:n=Vn}n=Bc(n,zc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zc(e,t){if(Qi=-1,Gi=0,(de&6)!==0)throw Error(u(327));var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var r=oi(e,e===Be?Qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Yi(e,r);else{t=r;var a=de;de|=2;var l=Dc();(Be!==e||Qe!==t)&&(an=null,Or=me()+500,tr(e,t));do try{fp();break}catch(h){Fc(e,h)}while(!0);rl(),Wi.current=l,de=a,De!==null?t=0:(Be=null,Qe=0,t=Ae)}if(t!==0){if(t===2&&(a=xa(e),a!==0&&(r=a,t=Ul(e,a))),t===1)throw n=Io,tr(e,0),Tn(e,r),ft(e,me()),n;if(t===6)Tn(e,r);else{if(a=e.current.alternate,(r&30)===0&&!cp(a)&&(t=Yi(e,r),t===2&&(l=xa(e),l!==0&&(r=l,t=Ul(e,l))),t===1))throw n=Io,tr(e,0),Tn(e,r),ft(e,me()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:nr(e,dt,an);break;case 3:if(Tn(e,r),(r&130023424)===r&&(t=Ol+500-me(),10<t)){if(oi(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){rt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ka(nr.bind(null,e,dt,an),t);break}nr(e,dt,an);break;case 4:if(Tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var c=31-Rt(r);l=1<<c,c=t[c],c>a&&(a=c),r&=~l}if(r=a,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*up(r/1960))-r,10<r){e.timeoutHandle=Ka(nr.bind(null,e,dt,an),r);break}nr(e,dt,an);break;case 5:nr(e,dt,an);break;default:throw Error(u(329))}}}return ft(e,me()),e.callbackNode===n?zc.bind(null,e):null}function Ul(e,t){var n=Fo;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=Yi(e,t),e!==2&&(t=dt,dt=n,t!==null&&$l(t)),e}function $l(e){dt===null?dt=e:dt.push.apply(dt,e)}function cp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!Tt(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tn(e,t){for(t&=~Dl,t&=~Vi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rt(t),r=1<<n;e[n]=-1,t&=~r}}function Ic(e){if((de&6)!==0)throw Error(u(327));Mr();var t=oi(e,0);if((t&1)===0)return ft(e,me()),null;var n=Yi(e,t);if(e.tag!==0&&n===2){var r=xa(e);r!==0&&(t=r,n=Ul(e,r))}if(n===1)throw n=Io,tr(e,0),Tn(e,t),ft(e,me()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nr(e,dt,an),ft(e,me()),null}function Bl(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(Or=me()+500,ji&&En())}}function er(e){_n!==null&&_n.tag===0&&(de&6)===0&&Mr();var t=de;de|=1;var n=Ct.transition,r=ve;try{if(Ct.transition=null,ve=1,e)return e()}finally{ve=r,Ct.transition=n,de=t,(de&6)===0&&En()}}function Wl(){xt=Dr.current,je(Dr)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Uf(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Ja(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ki();break;case 3:zr(),je(st),je(Je),dl();break;case 5:ul(r);break;case 4:zr();break;case 13:je(Pe);break;case 19:je(Pe);break;case 10:ol(r.type._context);break;case 22:case 23:Wl()}n=n.return}if(Be=e,De=e=Ln(e.current,null),Qe=xt=t,Ae=0,Io=null,Dl=Vi=Zn=0,dt=Fo=null,Yn!==null){for(t=0;t<Yn.length;t++)if(n=Yn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var c=l.next;l.next=a,r.next=c}n.pending=r}Yn=null}return e}function Fc(e,t){do{var n=De;try{if(rl(),zi.current=Oi,Ii){for(var r=_e.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Ii=!1}if(Jn=0,$e=Me=_e=null,Po=!1,_o=0,Fl.current=null,n===null||n.return===null){Ae=1,Io=t,De=null;break}e:{var l=e,c=n.return,h=n,y=t;if(t=Qe,h.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var P=y,L=h,z=L.tag;if((L.mode&1)===0&&(z===0||z===11||z===15)){var T=L.alternate;T?(L.updateQueue=T.updateQueue,L.memoizedState=T.memoizedState,L.lanes=T.lanes):(L.updateQueue=null,L.memoizedState=null)}var W=ac(c);if(W!==null){W.flags&=-257,lc(W,c,h,l,t),W.mode&1&&ic(l,P,t),t=W,y=P;var K=t.updateQueue;if(K===null){var q=new Set;q.add(y),t.updateQueue=q}else K.add(y);break e}else{if((t&1)===0){ic(l,P,t),Vl();break e}y=Error(u(426))}}else if(Ee&&h.mode&1){var Ie=ac(c);if(Ie!==null){(Ie.flags&65536)===0&&(Ie.flags|=256),lc(Ie,c,h,l,t),tl(Ir(y,h));break e}}l=y=Ir(y,h),Ae!==4&&(Ae=2),Fo===null?Fo=[l]:Fo.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var E=rc(l,y,t);Ru(l,E);break e;case 1:h=y;var k=l.type,N=l.stateNode;if((l.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(Pn===null||!Pn.has(N)))){l.flags|=65536,t&=-t,l.lanes|=t;var D=oc(l,h,t);Ru(l,D);break e}}l=l.return}while(l!==null)}Mc(n)}catch(Q){t=Q,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function Dc(){var e=Wi.current;return Wi.current=Oi,e===null?Oi:e}function Vl(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Be===null||(Zn&268435455)===0&&(Vi&268435455)===0||Tn(Be,Qe)}function Yi(e,t){var n=de;de|=2;var r=Dc();(Be!==e||Qe!==t)&&(an=null,tr(e,t));do try{dp();break}catch(a){Fc(e,a)}while(!0);if(rl(),de=n,Wi.current=r,De!==null)throw Error(u(261));return Be=null,Qe=0,Ae}function dp(){for(;De!==null;)Oc(De)}function fp(){for(;De!==null&&!$();)Oc(De)}function Oc(e){var t=$c(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?Mc(e):De=t,Fl.current=null}function Mc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=op(n,t,xt),n!==null){De=n;return}}else{if(n=ip(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Ae===0&&(Ae=5)}function nr(e,t,n){var r=ve,a=Ct.transition;try{Ct.transition=null,ve=1,pp(e,t,n,r)}finally{Ct.transition=a,ve=r}return null}function pp(e,t,n,r){do Mr();while(_n!==null);if((de&6)!==0)throw Error(u(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Kd(e,l),e===Be&&(De=Be=null,Qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ki||(Ki=!0,Bc(Vn,function(){return Mr(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=Ct.transition,Ct.transition=null;var c=ve;ve=1;var h=de;de|=4,Fl.current=null,lp(e,n),Pc(n,e),zf(Va),li=!!Wa,Va=Wa=null,e.current=n,sp(n),Te(),de=h,ve=c,Ct.transition=l}else e.current=n;if(Ki&&(Ki=!1,_n=e,qi=a),l=e.pendingLanes,l===0&&(Pn=null),Ud(n.stateNode),ft(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Hi)throw Hi=!1,e=Ml,Ml=null,e;return(qi&1)!==0&&e.tag!==0&&Mr(),l=e.pendingLanes,(l&1)!==0?e===Al?Do++:(Do=0,Al=e):Do=0,En(),null}function Mr(){if(_n!==null){var e=Ns(qi),t=Ct.transition,n=ve;try{if(Ct.transition=null,ve=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,qi=0,(de&6)!==0)throw Error(u(331));var a=de;for(de|=4,V=e.current;V!==null;){var l=V,c=l.child;if((V.flags&16)!==0){var h=l.deletions;if(h!==null){for(var y=0;y<h.length;y++){var P=h[y];for(V=P;V!==null;){var L=V;switch(L.tag){case 0:case 11:case 15:zo(8,L,l)}var z=L.child;if(z!==null)z.return=L,V=z;else for(;V!==null;){L=V;var T=L.sibling,W=L.return;if(jc(L),L===P){V=null;break}if(T!==null){T.return=W,V=T;break}V=W}}}var K=l.alternate;if(K!==null){var q=K.child;if(q!==null){K.child=null;do{var Ie=q.sibling;q.sibling=null,q=Ie}while(q!==null)}}V=l}}if((l.subtreeFlags&2064)!==0&&c!==null)c.return=l,V=c;else e:for(;V!==null;){if(l=V,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:zo(9,l,l.return)}var E=l.sibling;if(E!==null){E.return=l.return,V=E;break e}V=l.return}}var k=e.current;for(V=k;V!==null;){c=V;var N=c.child;if((c.subtreeFlags&2064)!==0&&N!==null)N.return=c,V=N;else e:for(c=k;V!==null;){if(h=V,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:Bi(9,h)}}catch(Q){Le(h,h.return,Q)}if(h===c){V=null;break e}var D=h.sibling;if(D!==null){D.return=h.return,V=D;break e}V=h.return}}if(de=a,En(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(gr,e)}catch{}r=!0}return r}finally{ve=n,Ct.transition=t}}return!1}function Ac(e,t,n){t=Ir(n,t),t=rc(e,t,1),e=Nn(e,t,1),t=rt(),e!==null&&(io(e,1,t),ft(e,t))}function Le(e,t,n){if(e.tag===3)Ac(e,e,n);else for(;t!==null;){if(t.tag===3){Ac(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){e=Ir(n,e),e=oc(t,e,1),t=Nn(t,e,1),e=rt(),t!==null&&(io(t,1,e),ft(t,e));break}}t=t.return}}function mp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(Qe&n)===n&&(Ae===4||Ae===3&&(Qe&130023424)===Qe&&500>me()-Ol?tr(e,0):Dl|=n),ft(e,t)}function Uc(e,t){t===0&&((e.mode&1)===0?t=1:(t=ri,ri<<=1,(ri&130023424)===0&&(ri=4194304)));var n=rt();e=nn(e,t),e!==null&&(io(e,t,n),ft(e,n))}function hp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Uc(e,n)}function gp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Uc(e,n)}var $c;$c=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)ct=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ct=!1,rp(e,t,n);ct=(e.flags&131072)!==0}else ct=!1,Ee&&(t.flags&1048576)!==0&&wu(t,Ci,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ui(e,t),e=t.pendingProps;var a=Nr(t,Je.current);Lr(t,n),a=ml(null,t,r,e,a,n);var l=hl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(r)?(l=!0,Si(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ll(t),a.updater=Mi,t.stateNode=a,a._reactInternals=t,kl(t,r,e,n),t=Cl(null,t,r,!0,l,n)):(t.tag=0,Ee&&l&&Xa(t),nt(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ui(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=yp(r),e=zt(r,e),a){case 0:t=El(null,t,r,e,n);break e;case 1:t=pc(null,t,r,e,n);break e;case 11:t=sc(null,t,r,e,n);break e;case 14:t=uc(null,t,r,zt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:zt(r,a),El(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:zt(r,a),pc(e,t,r,a,n);case 3:e:{if(mc(t),e===null)throw Error(u(387));r=t.pendingProps,l=t.memoizedState,a=l.element,_u(e,t),Ti(t,r,null,n);var c=t.memoizedState;if(r=c.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=Ir(Error(u(423)),t),t=hc(e,t,r,n,a);break e}else if(r!==a){a=Ir(Error(u(424)),t),t=hc(e,t,r,n,a);break e}else for(yt=kn(t.stateNode.containerInfo.firstChild),vt=t,Ee=!0,Lt=null,n=bu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_r(),r===a){t=on(e,t,n);break e}nt(e,t,r,n)}t=t.child}return t;case 5:return Lu(t),e===null&&el(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,c=a.children,Ha(r,a)?c=null:l!==null&&Ha(r,l)&&(t.flags|=32),fc(e,t),nt(e,t,c,n),t.child;case 6:return e===null&&el(t),null;case 13:return gc(e,t,n);case 4:return sl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rr(t,null,r,n):nt(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:zt(r,a),sc(e,t,r,a,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,c=a.value,ke(Pi,r._currentValue),r._currentValue=c,l!==null)if(Tt(l.value,c)){if(l.children===a.children&&!st.current){t=on(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var h=l.dependencies;if(h!==null){c=l.child;for(var y=h.firstContext;y!==null;){if(y.context===r){if(l.tag===1){y=rn(-1,n&-n),y.tag=2;var P=l.updateQueue;if(P!==null){P=P.shared;var L=P.pending;L===null?y.next=y:(y.next=L.next,L.next=y),P.pending=y}}l.lanes|=n,y=l.alternate,y!==null&&(y.lanes|=n),il(l.return,n,t),h.lanes|=n;break}y=y.next}}else if(l.tag===10)c=l.type===t.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(u(341));c.lanes|=n,h=c.alternate,h!==null&&(h.lanes|=n),il(c,n,t),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===t){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}nt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Lr(t,n),a=jt(a),r=r(a),t.flags|=1,nt(e,t,r,n),t.child;case 14:return r=t.type,a=zt(r,t.pendingProps),a=zt(r.type,a),uc(e,t,r,a,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:zt(r,a),Ui(e,t),t.tag=1,ut(r)?(e=!0,Si(t)):e=!1,Lr(t,n),tc(t,r,a),kl(t,r,a,n),Cl(null,t,r,!0,e,n);case 19:return yc(e,t,n);case 22:return dc(e,t,n)}throw Error(u(156,t.tag))};function Bc(e,t){return ti(e,t)}function vp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,n,r){return new vp(e,t,n,r)}function Hl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yp(e){if(typeof e=="function")return Hl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===He)return 11;if(e===be)return 14}return 2}function Ln(e,t){var n=e.alternate;return n===null?(n=Nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xi(e,t,n,r,a,l){var c=2;if(r=e,typeof e=="function")Hl(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case ue:return rr(n.children,a,l,t);case Ne:c=8,a|=8;break;case Oe:return e=Nt(12,n,t,a|2),e.elementType=Oe,e.lanes=l,e;case Fe:return e=Nt(13,n,t,a),e.elementType=Fe,e.lanes=l,e;case Ge:return e=Nt(19,n,t,a),e.elementType=Ge,e.lanes=l,e;case we:return Ji(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ve:c=10;break e;case ot:c=9;break e;case He:c=11;break e;case be:c=14;break e;case Ye:c=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=Nt(c,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function rr(e,t,n,r){return e=Nt(7,e,r,t),e.lanes=n,e}function Ji(e,t,n,r){return e=Nt(22,e,r,t),e.elementType=we,e.lanes=n,e.stateNode={isHidden:!1},e}function Kl(e,t,n){return e=Nt(6,e,null,t),e.lanes=n,e}function ql(e,t,n){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xp(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wa(0),this.expirationTimes=wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wa(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ql(e,t,n,r,a,l,c,h,y){return e=new xp(e,t,n,h,y),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Nt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ll(l),e}function wp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:le,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wc(e){if(!e)return jn;e=e._reactInternals;e:{if(lt(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(ut(n))return vu(e,n,t)}return t}function Vc(e,t,n,r,a,l,c,h,y){return e=Ql(n,r,!0,e,a,l,c,h,y),e.context=Wc(null),n=e.current,r=rt(),a=Rn(n),l=rn(r,a),l.callback=t??null,Nn(n,l,a),e.current.lanes=a,io(e,a,r),ft(e,r),e}function Zi(e,t,n,r){var a=t.current,l=rt(),c=Rn(a);return n=Wc(n),t.context===null?t.context=n:t.pendingContext=n,t=rn(l,c),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nn(a,t,c),e!==null&&(Dt(e,a,c,l),Ri(e,a,c)),c}function ea(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gl(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}function kp(){return null}var Kc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yl(e){this._internalRoot=e}ta.prototype.render=Yl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Zi(e,t,null,null)},ta.prototype.unmount=Yl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;er(function(){Zi(null,e,null,null)}),t[Jt]=null}};function ta(e){this._internalRoot=e}ta.prototype.unstable_scheduleHydration=function(e){if(e){var t=_s();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&Ls(e)}};function Xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qc(){}function Sp(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var P=ea(c);l.call(P)}}var c=Vc(t,r,e,0,null,!1,!1,"",qc);return e._reactRootContainer=c,e[Jt]=c.current,wo(e.nodeType===8?e.parentNode:e),er(),c}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var h=r;r=function(){var P=ea(y);h.call(P)}}var y=Ql(e,0,!1,null,null,!1,!1,"",qc);return e._reactRootContainer=y,e[Jt]=y.current,wo(e.nodeType===8?e.parentNode:e),er(function(){Zi(t,y,n,r)}),y}function ra(e,t,n,r,a){var l=n._reactRootContainer;if(l){var c=l;if(typeof a=="function"){var h=a;a=function(){var y=ea(c);h.call(y)}}Zi(t,c,e,a)}else c=Sp(n,t,e,a,r);return ea(c)}bs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=oo(t.pendingLanes);n!==0&&(ka(t,n|1),ft(t,me()),(de&6)===0&&(Or=me()+500,En()))}break;case 13:er(function(){var r=nn(e,1);if(r!==null){var a=rt();Dt(r,e,1,a)}}),Gl(e,1)}},Sa=function(e){if(e.tag===13){var t=nn(e,134217728);if(t!==null){var n=rt();Dt(t,e,134217728,n)}Gl(e,134217728)}},Ps=function(e){if(e.tag===13){var t=Rn(e),n=nn(e,t);if(n!==null){var r=rt();Dt(n,e,t,r)}Gl(e,t)}},_s=function(){return ve},Rs=function(e,t){var n=ve;try{return ve=e,t()}finally{ve=n}},Yr=function(e,t,n){switch(t){case"input":if(xe(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wi(r);if(!a)throw Error(u(90));Dn(r),xe(r,a)}}}break;case"textarea":Qo(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},Xo=Bl,Jo=er;var jp={usingClientEntryPoint:!1,Events:[jo,Er,wi,Xr,Jr,Bl]},Oo={findFiberByHostInstance:Kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ep={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:H.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=no(e),e===null?null:e.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||kp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oa.isDisabled&&oa.supportsFiber)try{gr=oa.inject(Ep),Wt=oa}catch{}}return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jp,pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xl(t))throw Error(u(200));return wp(e,t,null,n)},pt.createRoot=function(e,t){if(!Xl(e))throw Error(u(299));var n=!1,r="",a=Kc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ql(e,1,!1,null,null,n,!1,r,a),e[Jt]=t.current,wo(e.nodeType===8?e.parentNode:e),new Yl(t)},pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=no(t),e=e===null?null:e.stateNode,e},pt.flushSync=function(e){return er(e)},pt.hydrate=function(e,t,n){if(!na(t))throw Error(u(200));return ra(null,e,t,!0,n)},pt.hydrateRoot=function(e,t,n){if(!Xl(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",c=Kc;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=Vc(t,null,e,1,n??null,a,!1,l,c),e[Jt]=t.current,wo(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ta(t)},pt.render=function(e,t,n){if(!na(t))throw Error(u(200));return ra(null,e,t,!1,n)},pt.unmountComponentAtNode=function(e){if(!na(e))throw Error(u(40));return e._reactRootContainer?(er(function(){ra(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1},pt.unstable_batchedUpdates=Bl,pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!na(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return ra(e,t,n,!1,r)},pt.version="18.3.1-next-f1338f8080-20240426",pt}var td;function Ip(){if(td)return es.exports;td=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),es.exports=zp(),es.exports}var nd;function Fp(){if(nd)return ia;nd=1;var o=Ip();return ia.createRoot=o.createRoot,ia.hydrateRoot=o.hydrateRoot,ia}var Dp=Fp();/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var rd="popstate";function od(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function Op(o={}){function s(d,f){var w;let m=(w=f.state)==null?void 0:w.masked,{pathname:g,search:j,hash:S}=m||d.location;return us("",{pathname:g,search:j,hash:S},f.state&&f.state.usr||null,f.state&&f.state.key||"default",m?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function u(d,f){return typeof f=="string"?f:Wo(f)}return Ap(s,u,null,o)}function Re(o,s){if(o===!1||o===null||typeof o>"u")throw new Error(s)}function Mt(o,s){if(!o){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Mp(){return Math.random().toString(36).substring(2,10)}function id(o,s){return{usr:o.state,key:o.key,idx:s,masked:o.unstable_mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function us(o,s,u=null,d,f){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof s=="string"?$r(s):s,state:u,key:s&&s.key||d||Mp(),unstable_mask:f}}function Wo({pathname:o="/",search:s="",hash:u=""}){return s&&s!=="?"&&(o+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(o+=u.charAt(0)==="#"?u:"#"+u),o}function $r(o){let s={};if(o){let u=o.indexOf("#");u>=0&&(s.hash=o.substring(u),o=o.substring(0,u));let d=o.indexOf("?");d>=0&&(s.search=o.substring(d),o=o.substring(0,d)),o&&(s.pathname=o)}return s}function Ap(o,s,u,d={}){let{window:f=document.defaultView,v5Compat:m=!1}=d,g=f.history,j="POP",S=null,w=b();w==null&&(w=0,g.replaceState({...g.state,idx:w},""));function b(){return(g.state||{idx:null}).idx}function C(){j="POP";let I=b(),M=I==null?null:I-w;w=I,S&&S({action:j,location:F.location,delta:M})}function R(I,M){j="PUSH";let te=od(I)?I:us(F.location,I,M);w=b()+1;let G=id(te,w),H=F.createHref(te.unstable_mask||te);try{g.pushState(G,"",H)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;f.location.assign(H)}m&&S&&S({action:j,location:F.location,delta:1})}function O(I,M){j="REPLACE";let te=od(I)?I:us(F.location,I,M);w=b();let G=id(te,w),H=F.createHref(te.unstable_mask||te);g.replaceState(G,"",H),m&&S&&S({action:j,location:F.location,delta:0})}function A(I){return Up(I)}let F={get action(){return j},get location(){return o(f,g)},listen(I){if(S)throw new Error("A history only accepts one active listener");return f.addEventListener(rd,C),S=I,()=>{f.removeEventListener(rd,C),S=null}},createHref(I){return s(f,I)},createURL:A,encodeLocation(I){let M=A(I);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:R,replace:O,go(I){return g.go(I)}};return F}function Up(o,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Re(u,"No window.location.(origin|href) available to create URL");let d=typeof o=="string"?o:Wo(o);return d=d.replace(/ $/,"%20"),!s&&d.startsWith("//")&&(d=u+d),new URL(d,u)}function gd(o,s,u="/"){return $p(o,s,u,!1)}function $p(o,s,u,d){let f=typeof s=="string"?$r(s):s,m=sn(f.pathname||"/",u);if(m==null)return null;let g=vd(o);Bp(g);let j=null;for(let S=0;j==null&&S<g.length;++S){let w=Zp(m);j=Xp(g[S],w,d)}return j}function vd(o,s=[],u=[],d="",f=!1){let m=(g,j,S=f,w)=>{let b={relativePath:w===void 0?g.path||"":w,caseSensitive:g.caseSensitive===!0,childrenIndex:j,route:g};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(d)&&S)return;Re(b.relativePath.startsWith(d),`Absolute route path "${b.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(d.length)}let C=Ot([d,b.relativePath]),R=u.concat(b);g.children&&g.children.length>0&&(Re(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${C}".`),vd(g.children,s,R,C,S)),!(g.path==null&&!g.index)&&s.push({path:C,score:Gp(C,g.index),routesMeta:R})};return o.forEach((g,j)=>{var S;if(g.path===""||!((S=g.path)!=null&&S.includes("?")))m(g,j);else for(let w of yd(g.path))m(g,j,!0,w)}),s}function yd(o){let s=o.split("/");if(s.length===0)return[];let[u,...d]=s,f=u.endsWith("?"),m=u.replace(/\?$/,"");if(d.length===0)return f?[m,""]:[m];let g=yd(d.join("/")),j=[];return j.push(...g.map(S=>S===""?m:[m,S].join("/"))),f&&j.push(...g),j.map(S=>o.startsWith("/")&&S===""?"/":S)}function Bp(o){o.sort((s,u)=>s.score!==u.score?u.score-s.score:Yp(s.routesMeta.map(d=>d.childrenIndex),u.routesMeta.map(d=>d.childrenIndex)))}var Wp=/^:[\w-]+$/,Vp=3,Hp=2,Kp=1,qp=10,Qp=-2,ad=o=>o==="*";function Gp(o,s){let u=o.split("/"),d=u.length;return u.some(ad)&&(d+=Qp),s&&(d+=Hp),u.filter(f=>!ad(f)).reduce((f,m)=>f+(Wp.test(m)?Vp:m===""?Kp:qp),d)}function Yp(o,s){return o.length===s.length&&o.slice(0,-1).every((d,f)=>d===s[f])?o[o.length-1]-s[s.length-1]:0}function Xp(o,s,u=!1){let{routesMeta:d}=o,f={},m="/",g=[];for(let j=0;j<d.length;++j){let S=d[j],w=j===d.length-1,b=m==="/"?s:s.slice(m.length)||"/",C=da({path:S.relativePath,caseSensitive:S.caseSensitive,end:w},b),R=S.route;if(!C&&w&&u&&!d[d.length-1].route.index&&(C=da({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},b)),!C)return null;Object.assign(f,C.params),g.push({params:f,pathname:Ot([m,C.pathname]),pathnameBase:rm(Ot([m,C.pathnameBase])),route:R}),C.pathnameBase!=="/"&&(m=Ot([m,C.pathnameBase]))}return g}function da(o,s){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[u,d]=Jp(o.path,o.caseSensitive,o.end),f=s.match(u);if(!f)return null;let m=f[0],g=m.replace(/(.)\/+$/,"$1"),j=f.slice(1);return{params:d.reduce((w,{paramName:b,isOptional:C},R)=>{if(b==="*"){let A=j[R]||"";g=m.slice(0,m.length-A.length).replace(/(.)\/+$/,"$1")}const O=j[R];return C&&!O?w[b]=void 0:w[b]=(O||"").replace(/%2F/g,"/"),w},{}),pathname:m,pathnameBase:g,pattern:o}}function Jp(o,s=!1,u=!0){Mt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let d=[],f="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,j,S,w,b)=>{if(d.push({paramName:j,isOptional:S!=null}),S){let C=b.charAt(w+g.length);return C&&C!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(d.push({paramName:"*"}),f+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":o!==""&&o!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),d]}function Zp(o){try{return o.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Mt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),o}}function sn(o,s){if(s==="/")return o;if(!o.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,d=o.charAt(u);return d&&d!=="/"?null:o.slice(u)||"/"}var em=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function tm(o,s="/"){let{pathname:u,search:d="",hash:f=""}=typeof o=="string"?$r(o):o,m;return u?(u=wd(u),u.startsWith("/")?m=ld(u.substring(1),"/"):m=ld(u,s)):m=s,{pathname:m,search:om(d),hash:im(f)}}function ld(o,s){let u=fa(s).split("/");return o.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function rs(o,s,u,d){return`Cannot include a '${o}' character in a manually specified \`to.${s}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nm(o){return o.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function xd(o){let s=nm(o);return s.map((u,d)=>d===s.length-1?u.pathname:u.pathnameBase)}function ms(o,s,u,d=!1){let f;typeof o=="string"?f=$r(o):(f={...o},Re(!f.pathname||!f.pathname.includes("?"),rs("?","pathname","search",f)),Re(!f.pathname||!f.pathname.includes("#"),rs("#","pathname","hash",f)),Re(!f.search||!f.search.includes("#"),rs("#","search","hash",f)));let m=o===""||f.pathname==="",g=m?"/":f.pathname,j;if(g==null)j=u;else{let C=s.length-1;if(!d&&g.startsWith("..")){let R=g.split("/");for(;R[0]==="..";)R.shift(),C-=1;f.pathname=R.join("/")}j=C>=0?s[C]:"/"}let S=tm(f,j),w=g&&g!=="/"&&g.endsWith("/"),b=(m||g===".")&&u.endsWith("/");return!S.pathname.endsWith("/")&&(w||b)&&(S.pathname+="/"),S}var wd=o=>o.replace(/\/\/+/g,"/"),Ot=o=>wd(o.join("/")),fa=o=>o.replace(/\/+$/,""),rm=o=>fa(o).replace(/^\/*/,"/"),om=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,im=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,am=class{constructor(o,s,u,d=!1){this.status=o,this.statusText=s||"",this.internal=d,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function lm(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function sm(o){let s=o.map(u=>u.route.path).filter(Boolean);return Ot(s)||"/"}var kd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Sd(o,s){let u=o;if(typeof u!="string"||!em.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let d=u,f=!1;if(kd)try{let m=new URL(window.location.href),g=u.startsWith("//")?new URL(m.protocol+u):new URL(u),j=sn(g.pathname,s);g.origin===m.origin&&j!=null?u=j+g.search+g.hash:f=!0}catch{Mt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:f,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var jd=["POST","PUT","PATCH","DELETE"];new Set(jd);var um=["GET",...jd];new Set(um);var Br=x.createContext(null);Br.displayName="DataRouter";var ha=x.createContext(null);ha.displayName="DataRouterState";var Ed=x.createContext(!1);function cm(){return x.useContext(Ed)}var Cd=x.createContext({isTransitioning:!1});Cd.displayName="ViewTransition";var dm=x.createContext(new Map);dm.displayName="Fetchers";var fm=x.createContext(null);fm.displayName="Await";var Pt=x.createContext(null);Pt.displayName="Navigation";var Vo=x.createContext(null);Vo.displayName="Location";var Yt=x.createContext({outlet:null,matches:[],isDataRoute:!1});Yt.displayName="Route";var hs=x.createContext(null);hs.displayName="RouteError";var Nd="REACT_ROUTER_ERROR",pm="REDIRECT",mm="ROUTE_ERROR_RESPONSE";function hm(o){if(o.startsWith(`${Nd}:${pm}:{`))try{let s=JSON.parse(o.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function gm(o){if(o.startsWith(`${Nd}:${mm}:{`))try{let s=JSON.parse(o.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new am(s.status,s.statusText,s.data)}catch{}}function vm(o,{relative:s}={}){Re(Ho(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:d}=x.useContext(Pt),{hash:f,pathname:m,search:g}=Ko(o,{relative:s}),j=m;return u!=="/"&&(j=m==="/"?u:Ot([u,m])),d.createHref({pathname:j,search:g,hash:f})}function Ho(){return x.useContext(Vo)!=null}function _t(){return Re(Ho(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Vo).location}var bd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Pd(o){x.useContext(Pt).static||x.useLayoutEffect(o)}function lr(){let{isDataRoute:o}=x.useContext(Yt);return o?Rm():ym()}function ym(){Re(Ho(),"useNavigate() may be used only in the context of a <Router> component.");let o=x.useContext(Br),{basename:s,navigator:u}=x.useContext(Pt),{matches:d}=x.useContext(Yt),{pathname:f}=_t(),m=JSON.stringify(xd(d)),g=x.useRef(!1);return Pd(()=>{g.current=!0}),x.useCallback((S,w={})=>{if(Mt(g.current,bd),!g.current)return;if(typeof S=="number"){u.go(S);return}let b=ms(S,JSON.parse(m),f,w.relative==="path");o==null&&s!=="/"&&(b.pathname=b.pathname==="/"?s:Ot([s,b.pathname])),(w.replace?u.replace:u.push)(b,w.state,w)},[s,u,m,f,o])}x.createContext(null);function _d(){let{matches:o}=x.useContext(Yt),s=o[o.length-1];return(s==null?void 0:s.params)??{}}function Ko(o,{relative:s}={}){let{matches:u}=x.useContext(Yt),{pathname:d}=_t(),f=JSON.stringify(xd(u));return x.useMemo(()=>ms(o,JSON.parse(f),d,s==="path"),[o,f,d,s])}function xm(o,s){return Rd(o,s)}function Rd(o,s,u){var I;Re(Ho(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=x.useContext(Pt),{matches:f}=x.useContext(Yt),m=f[f.length-1],g=m?m.params:{},j=m?m.pathname:"/",S=m?m.pathnameBase:"/",w=m&&m.route;{let M=w&&w.path||"";Ld(j,!w||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${j}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let b=_t(),C;if(s){let M=typeof s=="string"?$r(s):s;Re(S==="/"||((I=M.pathname)==null?void 0:I.startsWith(S)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${M.pathname}" was given in the \`location\` prop.`),C=M}else C=b;let R=C.pathname||"/",O=R;if(S!=="/"){let M=S.replace(/^\//,"").split("/");O="/"+R.replace(/^\//,"").split("/").slice(M.length).join("/")}let A=gd(o,{pathname:O});Mt(w||A!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),Mt(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let F=Em(A&&A.map(M=>Object.assign({},M,{params:Object.assign({},g,M.params),pathname:Ot([S,d.encodeLocation?d.encodeLocation(M.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?S:Ot([S,d.encodeLocation?d.encodeLocation(M.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),f,u);return s&&F?x.createElement(Vo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...C},navigationType:"POP"}},F):F}function wm(){let o=_m(),s=lm(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),u=o instanceof Error?o.stack:null,d="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:d},m={padding:"2px 4px",backgroundColor:d},g=null;return console.error("Error handled by React Router default ErrorBoundary:",o),g=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:m},"ErrorBoundary")," or"," ",x.createElement("code",{style:m},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},s),u?x.createElement("pre",{style:f},u):null,g)}var km=x.createElement(wm,null),Td=class extends x.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,s){return s.location!==o.location||s.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:s.error,location:s.location,revalidation:o.revalidation||s.revalidation}}componentDidCatch(o,s){this.props.onError?this.props.onError(o,s):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const u=gm(o.digest);u&&(o=u)}let s=o!==void 0?x.createElement(Yt.Provider,{value:this.props.routeContext},x.createElement(hs.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?x.createElement(Sm,{error:o},s):s}};Td.contextType=Ed;var os=new WeakMap;function Sm({children:o,error:s}){let{basename:u}=x.useContext(Pt);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let d=hm(s.digest);if(d){let f=os.get(s);if(f)throw f;let m=Sd(d.location,u);if(kd&&!os.get(s))if(m.isExternal||d.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:d.replace}));throw os.set(s,g),g}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return o}function jm({routeContext:o,match:s,children:u}){let d=x.useContext(Br);return d&&d.static&&d.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=s.route.id),x.createElement(Yt.Provider,{value:o},u)}function Em(o,s=[],u){let d=u==null?void 0:u.state;if(o==null){if(!d)return null;if(d.errors)o=d.matches;else if(s.length===0&&!d.initialized&&d.matches.length>0)o=d.matches;else return null}let f=o,m=d==null?void 0:d.errors;if(m!=null){let b=f.findIndex(C=>C.route.id&&(m==null?void 0:m[C.route.id])!==void 0);Re(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,b+1))}let g=!1,j=-1;if(u&&d){g=d.renderFallback;for(let b=0;b<f.length;b++){let C=f[b];if((C.route.HydrateFallback||C.route.hydrateFallbackElement)&&(j=b),C.route.id){let{loaderData:R,errors:O}=d,A=C.route.loader&&!R.hasOwnProperty(C.route.id)&&(!O||O[C.route.id]===void 0);if(C.route.lazy||A){u.isStatic&&(g=!0),j>=0?f=f.slice(0,j+1):f=[f[0]];break}}}}let S=u==null?void 0:u.onError,w=d&&S?(b,C)=>{var R,O;S(b,{location:d.location,params:((O=(R=d.matches)==null?void 0:R[0])==null?void 0:O.params)??{},unstable_pattern:sm(d.matches),errorInfo:C})}:void 0;return f.reduceRight((b,C,R)=>{let O,A=!1,F=null,I=null;d&&(O=m&&C.route.id?m[C.route.id]:void 0,F=C.route.errorElement||km,g&&(j<0&&R===0?(Ld("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,I=null):j===R&&(A=!0,I=C.route.hydrateFallbackElement||null)));let M=s.concat(f.slice(0,R+1)),te=()=>{let G;return O?G=F:A?G=I:C.route.Component?G=x.createElement(C.route.Component,null):C.route.element?G=C.route.element:G=b,x.createElement(jm,{match:C,routeContext:{outlet:b,matches:M,isDataRoute:d!=null},children:G})};return d&&(C.route.ErrorBoundary||C.route.errorElement||R===0)?x.createElement(Td,{location:d.location,revalidation:d.revalidation,component:F,error:O,children:te(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:w}):te()},null)}function gs(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cm(o){let s=x.useContext(Br);return Re(s,gs(o)),s}function Nm(o){let s=x.useContext(ha);return Re(s,gs(o)),s}function bm(o){let s=x.useContext(Yt);return Re(s,gs(o)),s}function vs(o){let s=bm(o),u=s.matches[s.matches.length-1];return Re(u.route.id,`${o} can only be used on routes that contain a unique "id"`),u.route.id}function Pm(){return vs("useRouteId")}function _m(){var d;let o=x.useContext(hs),s=Nm("useRouteError"),u=vs("useRouteError");return o!==void 0?o:(d=s.errors)==null?void 0:d[u]}function Rm(){let{router:o}=Cm("useNavigate"),s=vs("useNavigate"),u=x.useRef(!1);return Pd(()=>{u.current=!0}),x.useCallback(async(f,m={})=>{Mt(u.current,bd),u.current&&(typeof f=="number"?await o.navigate(f):await o.navigate(f,{fromRouteId:s,...m}))},[o,s])}var sd={};function Ld(o,s,u){!s&&!sd[o]&&(sd[o]=!0,Mt(!1,u))}x.memo(Tm);function Tm({routes:o,future:s,state:u,isStatic:d,onError:f}){return Rd(o,void 0,{state:u,isStatic:d,onError:f})}function In(o){Re(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Lm({basename:o="/",children:s=null,location:u,navigationType:d="POP",navigator:f,static:m=!1,unstable_useTransitions:g}){Re(!Ho(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=o.replace(/^\/*/,"/"),S=x.useMemo(()=>({basename:j,navigator:f,static:m,unstable_useTransitions:g,future:{}}),[j,f,m,g]);typeof u=="string"&&(u=$r(u));let{pathname:w="/",search:b="",hash:C="",state:R=null,key:O="default",unstable_mask:A}=u,F=x.useMemo(()=>{let I=sn(w,j);return I==null?null:{location:{pathname:I,search:b,hash:C,state:R,key:O,unstable_mask:A},navigationType:d}},[j,w,b,C,R,O,d,A]);return Mt(F!=null,`<Router basename="${j}"> is not able to match the URL "${w}${b}${C}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:x.createElement(Pt.Provider,{value:S},x.createElement(Vo.Provider,{children:s,value:F}))}function zm({children:o,location:s}){return xm(cs(o),s)}function cs(o,s=[]){let u=[];return x.Children.forEach(o,(d,f)=>{if(!x.isValidElement(d))return;let m=[...s,f];if(d.type===x.Fragment){u.push.apply(u,cs(d.props.children,m));return}Re(d.type===In,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Re(!d.props.index||!d.props.children,"An index route cannot have child routes.");let g={id:d.props.id||m.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(g.children=cs(d.props.children,m)),u.push(g)}),u}var la="get",sa="application/x-www-form-urlencoded";function ga(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function Im(o){return ga(o)&&o.tagName.toLowerCase()==="button"}function Fm(o){return ga(o)&&o.tagName.toLowerCase()==="form"}function Dm(o){return ga(o)&&o.tagName.toLowerCase()==="input"}function Om(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Mm(o,s){return o.button===0&&(!s||s==="_self")&&!Om(o)}function ds(o=""){return new URLSearchParams(typeof o=="string"||Array.isArray(o)||o instanceof URLSearchParams?o:Object.keys(o).reduce((s,u)=>{let d=o[u];return s.concat(Array.isArray(d)?d.map(f=>[u,f]):[[u,d]])},[]))}function Am(o,s){let u=ds(o);return s&&s.forEach((d,f)=>{u.has(f)||s.getAll(f).forEach(m=>{u.append(f,m)})}),u}var aa=null;function Um(){if(aa===null)try{new FormData(document.createElement("form"),0),aa=!1}catch{aa=!0}return aa}var $m=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function is(o){return o!=null&&!$m.has(o)?(Mt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sa}"`),null):o}function Bm(o,s){let u,d,f,m,g;if(Fm(o)){let j=o.getAttribute("action");d=j?sn(j,s):null,u=o.getAttribute("method")||la,f=is(o.getAttribute("enctype"))||sa,m=new FormData(o)}else if(Im(o)||Dm(o)&&(o.type==="submit"||o.type==="image")){let j=o.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=o.getAttribute("formaction")||j.getAttribute("action");if(d=S?sn(S,s):null,u=o.getAttribute("formmethod")||j.getAttribute("method")||la,f=is(o.getAttribute("formenctype"))||is(j.getAttribute("enctype"))||sa,m=new FormData(j,o),!Um()){let{name:w,type:b,value:C}=o;if(b==="image"){let R=w?`${w}.`:"";m.append(`${R}x`,"0"),m.append(`${R}y`,"0")}else w&&m.append(w,C)}}else{if(ga(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=la,d=null,f=sa,g=o}return m&&f==="text/plain"&&(g=m,m=void 0),{action:d,method:u.toLowerCase(),encType:f,formData:m,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ys(o,s){if(o===!1||o===null||typeof o>"u")throw new Error(s)}function zd(o,s,u,d){let f=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return u?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${d}`:f.pathname=`${f.pathname}.${d}`:f.pathname==="/"?f.pathname=`_root.${d}`:s&&sn(f.pathname,s)==="/"?f.pathname=`${fa(s)}/_root.${d}`:f.pathname=`${fa(f.pathname)}.${d}`,f}async function Wm(o,s){if(o.id in s)return s[o.id];try{let u=await import(o.module);return s[o.id]=u,u}catch(u){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Vm(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function Hm(o,s,u){let d=await Promise.all(o.map(async f=>{let m=s.routes[f.route.id];if(m){let g=await Wm(m,u);return g.links?g.links():[]}return[]}));return Gm(d.flat(1).filter(Vm).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function ud(o,s,u,d,f,m){let g=(S,w)=>u[w]?S.route.id!==u[w].route.id:!0,j=(S,w)=>{var b;return u[w].pathname!==S.pathname||((b=u[w].route.path)==null?void 0:b.endsWith("*"))&&u[w].params["*"]!==S.params["*"]};return m==="assets"?s.filter((S,w)=>g(S,w)||j(S,w)):m==="data"?s.filter((S,w)=>{var C;let b=d.routes[S.route.id];if(!b||!b.hasLoader)return!1;if(g(S,w)||j(S,w))return!0;if(S.route.shouldRevalidate){let R=S.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((C=u[0])==null?void 0:C.params)||{},nextUrl:new URL(o,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function Km(o,s,{includeHydrateFallback:u}={}){return qm(o.map(d=>{let f=s.routes[d.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function qm(o){return[...new Set(o)]}function Qm(o){let s={},u=Object.keys(o).sort();for(let d of u)s[d]=o[d];return s}function Gm(o,s){let u=new Set;return new Set(s),o.reduce((d,f)=>{let m=JSON.stringify(Qm(f));return u.has(m)||(u.add(m),d.push({key:m,link:f})),d},[])}function xs(){let o=x.useContext(Br);return ys(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Ym(){let o=x.useContext(ha);return ys(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var ws=x.createContext(void 0);ws.displayName="FrameworkContext";function ks(){let o=x.useContext(ws);return ys(o,"You must render this element inside a <HydratedRouter> element"),o}function Xm(o,s){let u=x.useContext(ws),[d,f]=x.useState(!1),[m,g]=x.useState(!1),{onFocus:j,onBlur:S,onMouseEnter:w,onMouseLeave:b,onTouchStart:C}=s,R=x.useRef(null);x.useEffect(()=>{if(o==="render"&&g(!0),o==="viewport"){let F=M=>{M.forEach(te=>{g(te.isIntersecting)})},I=new IntersectionObserver(F,{threshold:.5});return R.current&&I.observe(R.current),()=>{I.disconnect()}}},[o]),x.useEffect(()=>{if(d){let F=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(F)}}},[d]);let O=()=>{f(!0)},A=()=>{f(!1),g(!1)};return u?o!=="intent"?[m,R,{}]:[m,R,{onFocus:Ao(j,O),onBlur:Ao(S,A),onMouseEnter:Ao(w,O),onMouseLeave:Ao(b,A),onTouchStart:Ao(C,O)}]:[!1,R,{}]}function Ao(o,s){return u=>{o&&o(u),u.defaultPrevented||s(u)}}function Jm({page:o,...s}){let u=cm(),{router:d}=xs(),f=x.useMemo(()=>gd(d.routes,o,d.basename),[d.routes,o,d.basename]);return f?u?x.createElement(eh,{page:o,matches:f,...s}):x.createElement(th,{page:o,matches:f,...s}):null}function Zm(o){let{manifest:s,routeModules:u}=ks(),[d,f]=x.useState([]);return x.useEffect(()=>{let m=!1;return Hm(o,s,u).then(g=>{m||f(g)}),()=>{m=!0}},[o,s,u]),d}function eh({page:o,matches:s,...u}){let d=_t(),{future:f}=ks(),{basename:m}=xs(),g=x.useMemo(()=>{if(o===d.pathname+d.search+d.hash)return[];let j=zd(o,m,f.unstable_trailingSlashAwareDataRequests,"rsc"),S=!1,w=[];for(let b of s)typeof b.route.shouldRevalidate=="function"?S=!0:w.push(b.route.id);return S&&w.length>0&&j.searchParams.set("_routes",w.join(",")),[j.pathname+j.search]},[m,f.unstable_trailingSlashAwareDataRequests,o,d,s]);return x.createElement(x.Fragment,null,g.map(j=>x.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...u})))}function th({page:o,matches:s,...u}){let d=_t(),{future:f,manifest:m,routeModules:g}=ks(),{basename:j}=xs(),{loaderData:S,matches:w}=Ym(),b=x.useMemo(()=>ud(o,s,w,m,d,"data"),[o,s,w,m,d]),C=x.useMemo(()=>ud(o,s,w,m,d,"assets"),[o,s,w,m,d]),R=x.useMemo(()=>{if(o===d.pathname+d.search+d.hash)return[];let F=new Set,I=!1;if(s.forEach(te=>{var H;let G=m.routes[te.route.id];!G||!G.hasLoader||(!b.some(ne=>ne.route.id===te.route.id)&&te.route.id in S&&((H=g[te.route.id])!=null&&H.shouldRevalidate)||G.hasClientLoader?I=!0:F.add(te.route.id))}),F.size===0)return[];let M=zd(o,j,f.unstable_trailingSlashAwareDataRequests,"data");return I&&F.size>0&&M.searchParams.set("_routes",s.filter(te=>F.has(te.route.id)).map(te=>te.route.id).join(",")),[M.pathname+M.search]},[j,f.unstable_trailingSlashAwareDataRequests,S,d,m,b,s,o,g]),O=x.useMemo(()=>Km(C,m),[C,m]),A=Zm(C);return x.createElement(x.Fragment,null,R.map(F=>x.createElement("link",{key:F,rel:"prefetch",as:"fetch",href:F,...u})),O.map(F=>x.createElement("link",{key:F,rel:"modulepreload",href:F,...u})),A.map(({key:F,link:I})=>x.createElement("link",{key:F,nonce:u.nonce,...I,crossOrigin:I.crossOrigin??u.crossOrigin})))}function nh(...o){return s=>{o.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var rh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{rh&&(window.__reactRouterVersion="7.14.2")}catch{}function oh({basename:o,children:s,unstable_useTransitions:u,window:d}){let f=x.useRef();f.current==null&&(f.current=Op({window:d,v5Compat:!0}));let m=f.current,[g,j]=x.useState({action:m.action,location:m.location}),S=x.useCallback(w=>{u===!1?j(w):x.startTransition(()=>j(w))},[u]);return x.useLayoutEffect(()=>m.listen(S),[m,S]),x.createElement(Lm,{basename:o,children:s,location:g.location,navigationType:g.action,navigator:m,unstable_useTransitions:u})}var Id=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qt=x.forwardRef(function({onClick:s,discover:u="render",prefetch:d="none",relative:f,reloadDocument:m,replace:g,unstable_mask:j,state:S,target:w,to:b,preventScrollReset:C,viewTransition:R,unstable_defaultShouldRevalidate:O,...A},F){let{basename:I,navigator:M,unstable_useTransitions:te}=x.useContext(Pt),G=typeof b=="string"&&Id.test(b),H=Sd(b,I);b=H.to;let ne=vm(b,{relative:f}),le=_t(),ue=null;if(j){let be=ms(j,[],le.unstable_mask?le.unstable_mask.pathname:"/",!0);I!=="/"&&(be.pathname=be.pathname==="/"?I:Ot([I,be.pathname])),ue=M.createHref(be)}let[Ne,Oe,Ve]=Xm(d,A),ot=sh(b,{replace:g,unstable_mask:j,state:S,target:w,preventScrollReset:C,relative:f,viewTransition:R,unstable_defaultShouldRevalidate:O,unstable_useTransitions:te});function He(be){s&&s(be),be.defaultPrevented||ot(be)}let Fe=!(H.isExternal||m),Ge=x.createElement("a",{...A,...Ve,href:(Fe?ue:void 0)||H.absoluteURL||ne,onClick:Fe?He:s,ref:nh(F,Oe),target:w,"data-discover":!G&&u==="render"?"true":void 0});return Ne&&!G?x.createElement(x.Fragment,null,Ge,x.createElement(Jm,{page:ne})):Ge});Qt.displayName="Link";var ih=x.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:d="",end:f=!1,style:m,to:g,viewTransition:j,children:S,...w},b){let C=Ko(g,{relative:w.relative}),R=_t(),O=x.useContext(ha),{navigator:A,basename:F}=x.useContext(Pt),I=O!=null&&mh(C)&&j===!0,M=A.encodeLocation?A.encodeLocation(C).pathname:C.pathname,te=R.pathname,G=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;u||(te=te.toLowerCase(),G=G?G.toLowerCase():null,M=M.toLowerCase()),G&&F&&(G=sn(G,F)||G);const H=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let ne=te===M||!f&&te.startsWith(M)&&te.charAt(H)==="/",le=G!=null&&(G===M||!f&&G.startsWith(M)&&G.charAt(M.length)==="/"),ue={isActive:ne,isPending:le,isTransitioning:I},Ne=ne?s:void 0,Oe;typeof d=="function"?Oe=d(ue):Oe=[d,ne?"active":null,le?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let Ve=typeof m=="function"?m(ue):m;return x.createElement(Qt,{...w,"aria-current":Ne,className:Oe,ref:b,style:Ve,to:g,viewTransition:j},typeof S=="function"?S(ue):S)});ih.displayName="NavLink";var ah=x.forwardRef(({discover:o="render",fetcherKey:s,navigate:u,reloadDocument:d,replace:f,state:m,method:g=la,action:j,onSubmit:S,relative:w,preventScrollReset:b,viewTransition:C,unstable_defaultShouldRevalidate:R,...O},A)=>{let{unstable_useTransitions:F}=x.useContext(Pt),I=fh(),M=ph(j,{relative:w}),te=g.toLowerCase()==="get"?"get":"post",G=typeof j=="string"&&Id.test(j),H=ne=>{if(S&&S(ne),ne.defaultPrevented)return;ne.preventDefault();let le=ne.nativeEvent.submitter,ue=(le==null?void 0:le.getAttribute("formmethod"))||g,Ne=()=>I(le||ne.currentTarget,{fetcherKey:s,method:ue,navigate:u,replace:f,state:m,relative:w,preventScrollReset:b,viewTransition:C,unstable_defaultShouldRevalidate:R});F&&u!==!1?x.startTransition(()=>Ne()):Ne()};return x.createElement("form",{ref:A,method:te,action:M,onSubmit:d?S:H,...O,"data-discover":!G&&o==="render"?"true":void 0})});ah.displayName="Form";function lh(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fd(o){let s=x.useContext(Br);return Re(s,lh(o)),s}function sh(o,{target:s,replace:u,unstable_mask:d,state:f,preventScrollReset:m,relative:g,viewTransition:j,unstable_defaultShouldRevalidate:S,unstable_useTransitions:w}={}){let b=lr(),C=_t(),R=Ko(o,{relative:g});return x.useCallback(O=>{if(Mm(O,s)){O.preventDefault();let A=u!==void 0?u:Wo(C)===Wo(R),F=()=>b(o,{replace:A,unstable_mask:d,state:f,preventScrollReset:m,relative:g,viewTransition:j,unstable_defaultShouldRevalidate:S});w?x.startTransition(()=>F()):F()}},[C,b,R,u,d,f,s,o,m,g,j,S,w])}function uh(o){Mt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=x.useRef(ds(o)),u=x.useRef(!1),d=_t(),f=x.useMemo(()=>Am(d.search,u.current?null:s.current),[d.search]),m=lr(),g=x.useCallback((j,S)=>{const w=ds(typeof j=="function"?j(new URLSearchParams(f)):j);u.current=!0,m("?"+w,S)},[m,f]);return[f,g]}var ch=0,dh=()=>`__${String(++ch)}__`;function fh(){let{router:o}=Fd("useSubmit"),{basename:s}=x.useContext(Pt),u=Pm(),d=o.fetch,f=o.navigate;return x.useCallback(async(m,g={})=>{let{action:j,method:S,encType:w,formData:b,body:C}=Bm(m,s);if(g.navigate===!1){let R=g.fetcherKey||dh();await d(R,u,g.action||j,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:b,body:C,formMethod:g.method||S,formEncType:g.encType||w,flushSync:g.flushSync})}else await f(g.action||j,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:b,body:C,formMethod:g.method||S,formEncType:g.encType||w,replace:g.replace,state:g.state,fromRouteId:u,flushSync:g.flushSync,viewTransition:g.viewTransition})},[d,f,s,u])}function ph(o,{relative:s}={}){let{basename:u}=x.useContext(Pt),d=x.useContext(Yt);Re(d,"useFormAction must be used inside a RouteContext");let[f]=d.matches.slice(-1),m={...Ko(o||".",{relative:s})},g=_t();if(o==null){m.search=g.search;let j=new URLSearchParams(m.search),S=j.getAll("index");if(S.some(b=>b==="")){j.delete("index"),S.filter(C=>C).forEach(C=>j.append("index",C));let b=j.toString();m.search=b?`?${b}`:""}}return(!o||o===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:Ot([u,m.pathname])),Wo(m)}function mh(o,{relative:s}={}){let u=x.useContext(Cd);Re(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=Fd("useViewTransitionState"),f=Ko(o,{relative:s});if(!u.isTransitioning)return!1;let m=sn(u.currentLocation.pathname,d)||u.currentLocation.pathname,g=sn(u.nextLocation.pathname,d)||u.nextLocation.pathname;return da(f.pathname,g)!=null||da(f.pathname,m)!=null}const Dd=x.createContext(void 0),cd="saki_bee_cart";function hh({children:o}){const[s,u]=x.useState([]);x.useEffect(()=>{const w=localStorage.getItem(cd);if(w)try{u(JSON.parse(w))}catch(b){console.error("Failed to parse cart from localStorage:",b)}},[]),x.useEffect(()=>{localStorage.setItem(cd,JSON.stringify(s))},[s]);const d=(w,b)=>{const C=w.salePrice??w.price;u(R=>R.find(A=>A.productId===w.id)?R.map(A=>A.productId===w.id?{...A,quantity:A.quantity+b}:A):[...R,{productId:w.id,slug:w.slug,name:w.name,price:C,quantity:b,image:w.image}])},f=w=>{u(b=>b.filter(C=>C.productId!==w))},m=(w,b)=>{if(b<=0){f(w);return}u(C=>C.map(R=>R.productId===w?{...R,quantity:b}:R))},g=()=>{u([])},j=()=>s.reduce((w,b)=>w+b.price*b.quantity,0),S=()=>s.reduce((w,b)=>w+b.quantity,0);return i.jsx(Dd.Provider,{value:{cart:s,addToCart:d,removeFromCart:f,updateQuantity:m,clearCart:g,getTotalPrice:j,getTotalItems:S},children:o})}function sr(){const o=x.useContext(Dd);if(o===void 0)throw new Error("useCart must be used within CartProvider");return o}const gh={bg:{navAbout:"За нас",navProducts:"Продукти",navContact:"Контакти",heroTitle:"Пчеларски магазин САКИ",heroSubtitle:"Натурален мед от собствени пчелини в Долистово и Коркина, пчеларски инвентар и практични съвети от семейство с над 20 години опит.",heroCtaProducts:"Разгледайте продуктите",heroCtaContact:"Свържете се с нас",heroCtaHoney:"Пчелни продукти",heroCtaEquipment:"Всичко за пчеларя",aboutTitle:"За нас",aboutSubtitle:"Семейна фирма с над 20 години опит в пчеларството, натуралния мед и пчелните продукти",storyTitle:"Нашата история",storyText1:"САКИ е семейна фирма, създадена с любов към пчеларството и чистия, натурален мед. Повече от 20 години се грижим за пчелите си и учим от природата. Натрупаният опит и внимание личат във всеки продукт, който предлагаме.",storyText2:"Започнахме скромно, но останахме верни на най-важното: качество, честност и грижа към природата. За нас пчеларството не е просто работа, а начин на живот.",apiariesTitle:"Нашите пчелини",apiariesText1:"Пчелините ни се намират в селата Долистово и Коркина – места с чиста природа и богато разнообразие от растения. Това създава отлични условия за здрави пчелни семейства и качествен мед.",apiariesText2:"Грижим се за всяко пчелно семейство с внимание и отговорност, за да ви предложим чист мед – без добавки и компромиси.",certificationTitle:"Сертификация и качество",certificationText1:"Медът ни е сертифициран от БАБХ (Българска агенция по безопасност на храните) и се произвежда с постоянен контрол върху качеството.",certificationText2:"При нас ще намерите пчелни продукти, на които можете да разчитате - чисти, полезни и направени с грижа.",cardExperience:"20+ години опит",cardExperienceText:"Практически опит в пчеларството и производството на натурален мед.",cardApiaries:"Собствени пчелини",cardApiariesText:"Разполагаме с пчелини в Долистово и Коркина – сред чиста и богата природа.",cardCertification:"Сертифицирано качество",cardCertificationText:"Медът ни е сертифициран от БАБХ и отговаря на изискванията за безопасност.",cardShop:"Магазин в Дупница",cardShopText:"Ще ни намерите на Кооперативния пазар, павилион 5 – за директни покупки и съвети.",cardProducts:"Богат асортимент",cardProductsText:"Предлагаме мед, кошери, инвентар, центрофуги и пчелни продукти.",cardDelivery:"Бърза доставка",cardDeliveryText:"Доставяме бързо и сигурно в цялата страна.",whyChooseTitle:"Защо да изберете САКИ?",whyChoose1:"Над 20 години опит в пчеларството",whyChoose2:"Собствени пчелини с натурален мед",whyChoose3:"Сертифицирано качество от БАБХ",whyChoose4:"Семейна фирма с честно отношение",whyChoose5:"Богат избор от продукти и оборудване",whyChoose6:"Консултации и помощ за пчелари",productsTitle:"Нашите продукти",productsSubtitle:"Мед, пчелни продукти, кошери, рамки, центрофуги и инвентар за ежедневната работа в пчелина",productInquiry:"Запитване →",productsCta:"Търсите нещо конкретно?",productsCtaButton:"Пишете ни",contactTitle:"Свържете се с нас",contactSubtitle:"Имате въпрос за мед, оборудване или доставка? Пишете ни - ще ви отговорим възможно най-скоро.",address:"Адрес",addressValue:"Кооперативен пазар, павилион 5, гр. Дупница",phone:"Телефон",phoneValue:"089 551 7056",email:"Имейл",emailValue:"info@sakimed.com",website:"Уебсайт",websiteValue:"www.sakimed.com",facebook:"Facebook",facebookValue:"facebook.com/Saki2008",workingHours:"Работно време",workingHoursWeekday:"Понеделник – Петък: 09:00 – 18:00",workingHoursSaturday:"Събота: 09:00 – 14:00",formName:"Име *",formNamePlaceholder:"Вашето име",formEmail:"Имейл *",formEmailPlaceholder:"your@email.com",formPhone:"Телефон",formPhonePlaceholder:"+359 88 123 4567",formMessage:"Съобщение *",formMessagePlaceholder:"Напишете какво ви интересува...",formSubmit:"Изпрати",formSubmitting:"Изпращане...",formSuccess:"Съобщението е изпратено успешно! Ще се свържем с вас скоро.",formError:"Възникна грешка. Опитайте отново.",footerTagline:"Вашият надежден партньор в пчеларството",footerRights:"Всички права запазени."},en:{navAbout:"About",navProducts:"Products",navContact:"Contact",heroTitle:"SAKI Beekeeping Shop",heroSubtitle:"Natural honey from our own apiaries in Dolistovo and Korkina, beekeeping equipment, and practical advice from a family with over 20 years of experience.",heroCtaProducts:"Browse Products",heroCtaContact:"Contact Us",heroCtaHoney:"Bee Products",heroCtaEquipment:"For Beekeepers",aboutTitle:"About Us",aboutSubtitle:"A family business with over 20 years of experience in beekeeping and natural honey production",storyTitle:"Our Story",storyText1:"SAKI is a family-run business built on a genuine love for beekeeping and pure, natural honey. For over 20 years, we have cared for our bees and learned from nature itself. That experience shows in every product we offer.",storyText2:"We started small, but stayed true to what matters most – quality, honesty, and respect for nature. For us, beekeeping is not just a job, but a way of life.",apiariesTitle:"Our Apiaries",apiariesText1:"Our apiaries are located in Dolistovo and Korkina – areas with clean nature and rich plant diversity, ideal for healthy bee colonies.",apiariesText2:"We care for every colony with attention and responsibility to deliver pure honey – with no additives and no compromises.",certificationTitle:"Certification & Quality",certificationText1:"Our honey is certified by BABH (Bulgarian Food Safety Agency) and produced with consistent quality control.",certificationText2:"With us, you’ll find products you can trust – natural, beneficial, and made with care.",cardExperience:"20+ Years Experience",cardExperienceText:"Extensive experience in beekeeping and natural honey production.",cardApiaries:"Own Apiaries",cardApiariesText:"We operate our own apiaries in clean and rich natural environments.",cardCertification:"Certified Quality",cardCertificationText:"Our honey meets all safety and quality standards.",cardShop:"Shop in Dupnitsa",cardShopText:"Visit us at the Cooperative Market, Pavilion 5 for direct purchases and advice.",cardProducts:"Wide Selection",cardProductsText:"Honey, hives, equipment, extractors, and bee products.",cardDelivery:"Fast Delivery",cardDeliveryText:"We deliver quickly and reliably across the country.",whyChooseTitle:"Why Choose SAKI?",whyChoose1:"Over 20 years of beekeeping experience",whyChoose2:"Own apiaries with natural honey",whyChoose3:"Certified quality by BABH",whyChoose4:"Family business built on trust",whyChoose5:"Wide range of products and equipment",whyChoose6:"Support and advice for beekeepers",productsTitle:"Our Products",productsSubtitle:"Honey, bee products, hives, frames, extractors, and tools for everyday apiary work",productInquiry:"Inquiry →",productsCta:"Looking for something specific?",productsCtaButton:"Contact Us",contactTitle:"Contact Us",contactSubtitle:"Have a question about honey, equipment, or delivery? Send us a message and we’ll reply as soon as possible.",address:"Address",addressValue:"Cooperative Market, Pavilion 5, Dupnitsa",phone:"Phone",phoneValue:"089 551 7056",email:"Email",emailValue:"info@sakimed.com",website:"Website",websiteValue:"www.sakimed.com",facebook:"Facebook",facebookValue:"facebook.com/Saki2008",workingHours:"Working Hours",workingHoursWeekday:"Monday – Friday: 09:00 – 18:00",workingHoursSaturday:"Saturday: 09:00 – 14:00",formName:"Name *",formNamePlaceholder:"Your name",formEmail:"Email *",formEmailPlaceholder:"your@email.com",formPhone:"Phone",formPhonePlaceholder:"+359 88 123 4567",formMessage:"Message *",formMessagePlaceholder:"Tell us what you need...",formSubmit:"Send",formSubmitting:"Sending...",formSuccess:"Message sent successfully! We’ll get back to you soon.",formError:"Something went wrong. Please try again.",footerTagline:"Your trusted partner in beekeeping",footerRights:"All rights reserved."}},Od=x.createContext(void 0);function vh({children:o}){const[s,u]=x.useState(()=>{if(typeof window<"u"){const f=localStorage.getItem("language");if(f)return f}return"bg"});x.useEffect(()=>{localStorage.setItem("language",s),document.documentElement.lang=s},[s]);const d=f=>gh[s][f]||f;return i.jsx(Od.Provider,{value:{language:s,setLanguage:u,t:d},children:o})}function ur(){const o=x.useContext(Od);if(!o)throw new Error("useLanguage must be used within a LanguageProvider");return o}function yh(){return i.jsxs("div",{className:"uk-flag",children:[i.jsx("div",{className:"bg"}),i.jsx("div",{className:"diag white d1"}),i.jsx("div",{className:"diag white d2"}),i.jsx("div",{className:"diag red d1"}),i.jsx("div",{className:"diag red d2"}),i.jsx("div",{className:"cross white horizontal"}),i.jsx("div",{className:"cross white vertical"}),i.jsx("div",{className:"cross red horizontal"}),i.jsx("div",{className:"cross red vertical"}),i.jsx("style",{children:`
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
      `})]})}function xh(){const{language:o,setLanguage:s}=ur();return i.jsxs("div",{className:"language-switcher",children:[i.jsx("button",{className:`lang-btn ${o==="en"?"active":""}`,onClick:()=>s("en"),"aria-label":"English",title:"English",children:i.jsx(yh,{})}),i.jsx("button",{className:`lang-btn ${o==="bg"?"active":""}`,onClick:()=>s("bg"),"aria-label":"Български",title:"Български",children:i.jsxs("div",{className:"flag-bg",children:[i.jsx("div",{className:"bg-stripe white"}),i.jsx("div",{className:"bg-stripe green"}),i.jsx("div",{className:"bg-stripe red"})]})}),i.jsx("style",{children:`
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
      `})]})}function wh(){const[o,s]=x.useState(!1),{t:u,language:d}=ur(),{getTotalItems:f}=sr(),m=lr(),g=_t(),j=S=>{if(s(!1),g.pathname==="/"){const w=document.getElementById(S);w&&w.scrollIntoView({behavior:"smooth"})}else m("/"),setTimeout(()=>{const w=document.getElementById(S);w&&w.scrollIntoView({behavior:"smooth"})},100)};return i.jsxs("header",{className:"header",children:[i.jsxs("div",{className:"container header-container",children:[i.jsx(Qt,{to:"/",className:"logo",onClick:S=>{s(!1),g.pathname==="/"&&(S.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))},children:i.jsx("img",{src:"/bee-logo.jpg",alt:d==="bg"?"Лого на пчеларски магазин САКИ":"SAKI beekeeping shop logo",className:"logo-img"})}),i.jsxs("nav",{className:`nav ${o?"nav-open":""}`,children:[i.jsx("button",{className:"nav-link",onClick:()=>j("about"),style:{background:"none",border:"none",cursor:"pointer"},children:u("navAbout")}),i.jsx(Qt,{to:"/products",className:"nav-link",onClick:()=>s(!1),children:u("navProducts")}),i.jsx("button",{className:"nav-link",onClick:()=>j("contact"),style:{background:"none",border:"none",cursor:"pointer"},children:u("navContact")}),i.jsxs(Qt,{to:"/cart",className:"nav-link cart-link",onClick:()=>s(!1),children:["🛒 ",d==="bg"?"Количка":"Cart",f()>0&&i.jsx("span",{className:"cart-badge",children:f()})]}),i.jsx("div",{className:"nav-lang-switcher",children:i.jsx(xh,{})})]}),i.jsx("button",{className:"menu-toggle",onClick:()=>s(!o),"aria-label":d==="bg"?"Отвори менюто":"Toggle menu",children:i.jsx("span",{className:`hamburger ${o?"open":""}`})})]}),i.jsx("style",{children:`
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
      `})]})}function kh(){const{t:o,language:s}=ur();return i.jsxs("footer",{className:"footer",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"footer-grid",children:[i.jsxs("div",{className:"footer-brand",children:[i.jsx("div",{className:"footer-logo",children:i.jsx("img",{src:"/bee-logo.jpg",alt:s==="bg"?"Лого на САКИ":"SAKI logo",style:{height:"40px",width:"40px",objectFit:"contain"}})}),i.jsx("p",{children:s==="bg"?"Семеен пчеларски магазин в Дупница с натурален мед, пчелни продукти и оборудване за пчелари.":"A family beekeeping shop in Dupnitsa with natural honey, bee products, and equipment for beekeepers."})]}),i.jsxs("div",{className:"footer-links",children:[i.jsx("h4",{children:s==="bg"?"Бързи връзки":"Quick Links"}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("a",{href:"#about",children:o("navAbout")})}),i.jsx("li",{children:i.jsx("a",{href:"#products",children:o("navProducts")})}),i.jsx("li",{children:i.jsx("a",{href:"#contact",children:o("navContact")})}),i.jsx("li",{children:i.jsx(Qt,{to:"/admin",rel:"nofollow",style:{color:"rgba(255, 255, 255, 0.3)",fontSize:"0.8rem"},children:s==="bg"?"Админ":"Admin"})})]})]}),i.jsxs("div",{className:"footer-contact",children:[i.jsx("h4",{children:s==="bg"?"Контакти":"Contact"}),i.jsxs("ul",{children:[i.jsxs("li",{children:["📍 ",s==="bg"?"Кооперативен пазар, павилион 5, Дупница":"Cooperative Market, Pavilion 5, Dupnitsa"]}),i.jsx("li",{children:"📞 089 551 7056"}),i.jsx("li",{children:"✉️ info@sakimed.com"}),i.jsx("li",{children:"🌐 www.sakimed.com"}),i.jsxs("li",{children:["📘 ",i.jsx("a",{href:"https://facebook.com/Saki2008",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})]})]})]})]}),i.jsx("div",{className:"footer-bottom",children:i.jsxs("p",{children:["© ",new Date().getFullYear()," САКИ - ",s==="bg"?"Дупница":"Dupnitsa",". ",o("footerRights")]})})]}),i.jsx("style",{children:`
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
      `})]})}function Sh(){const{t:o,language:s}=ur();return i.jsxs("section",{id:"hero",className:"hero",children:[i.jsxs("div",{className:"hero-background",children:[i.jsx("img",{src:"https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:s==="bg"?"Пчеларски магазин САКИ в Дупница - натурален мед и пчеларски инвентар":"SAKI Beekeeping Shop in Dupnitsa - natural honey and beekeeping equipment",className:"hero-image"}),i.jsx("div",{className:"hero-overlay"}),i.jsx("div",{className:"hero-pattern"})]}),i.jsxs("div",{className:"container hero-content",children:[i.jsxs("div",{className:"hero-text",children:[i.jsx("h1",{className:"hero-title",children:o("heroTitle")}),i.jsx("p",{className:"hero-subtitle",children:o("heroSubtitle")}),i.jsxs("div",{className:"hero-cta",children:[i.jsx(Qt,{to:"/products?category=pchelni-produkti",className:"btn btn-primary",children:o("heroCtaHoney")}),i.jsx(Qt,{to:"/products?category=pchelarstvo",className:"btn btn-secondary",children:o("heroCtaEquipment")})]})]}),i.jsx("div",{className:"hero-visual",children:i.jsx("img",{src:"/big-bee.png",alt:s==="bg"?"Пчела":"Bee",className:"bee-icon"})})]}),i.jsx("style",{children:`
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
      `})]})}function jh(){const{t:o,language:s}=ur();return i.jsxs("section",{id:"about",className:"section about",children:[i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:o("aboutTitle")}),i.jsx("p",{className:"section-subtitle",children:o("aboutSubtitle")}),i.jsx("div",{className:"about-hero-image",children:i.jsx("img",{src:"https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:s==="bg"?"Семейна пчелна ферма САКИ в Долистово и Коркина - натурален пчелен мед":"SAKI family bee farm in Dolistovo and Korkina - natural honey"})}),i.jsxs("div",{className:"about-story",children:[i.jsxs("div",{className:"story-section",children:[i.jsx("h3",{children:o("storyTitle")}),i.jsx("p",{children:o("storyText1")}),i.jsx("p",{children:o("storyText2")})]}),i.jsxs("div",{className:"story-section",children:[i.jsx("h3",{children:o("apiariesTitle")}),i.jsx("p",{children:o("apiariesText1")}),i.jsx("p",{children:o("apiariesText2")})]}),i.jsxs("div",{className:"story-section",children:[i.jsx("h3",{children:o("certificationTitle")}),i.jsx("p",{children:o("certificationText1")}),i.jsx("p",{children:o("certificationText2")})]})]}),i.jsxs("div",{className:"about-grid",children:[i.jsxs("div",{className:"about-card",children:[i.jsx("div",{className:"about-icon",children:"🐝"}),i.jsx("h3",{children:o("cardExperience")}),i.jsx("p",{children:o("cardExperienceText")})]}),i.jsxs("div",{className:"about-card",children:[i.jsx("div",{className:"about-icon",children:"🏡"}),i.jsx("h3",{children:o("cardApiaries")}),i.jsx("p",{children:o("cardApiariesText")})]}),i.jsxs("div",{className:"about-card",children:[i.jsx("div",{className:"about-icon",children:"✅"}),i.jsx("h3",{children:o("cardCertification")}),i.jsx("p",{children:o("cardCertificationText")})]}),i.jsxs("div",{className:"about-card",children:[i.jsx("div",{className:"about-icon",children:"🏪"}),i.jsx("h3",{children:o("cardShop")}),i.jsx("p",{children:o("cardShopText")})]}),i.jsxs("div",{className:"about-card",children:[i.jsx("div",{className:"about-icon",children:"📦"}),i.jsx("h3",{children:o("cardProducts")}),i.jsx("p",{children:o("cardProductsText")})]}),i.jsxs("div",{className:"about-card",children:[i.jsx("div",{className:"about-icon",children:"🚚"}),i.jsx("h3",{children:o("cardDelivery")}),i.jsx("p",{children:o("cardDeliveryText")})]})]}),i.jsx("div",{className:"about-info",children:i.jsxs("div",{className:"about-info-content",children:[i.jsx("h3",{children:o("whyChooseTitle")}),i.jsxs("ul",{className:"about-list",children:[i.jsx("li",{children:o("whyChoose1")}),i.jsx("li",{children:o("whyChoose2")}),i.jsx("li",{children:o("whyChoose3")}),i.jsx("li",{children:o("whyChoose4")}),i.jsx("li",{children:o("whyChoose5")}),i.jsx("li",{children:o("whyChoose6")})]})]})})]}),i.jsx("style",{children:`
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
      `})]})}const Ar="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 420 280%22%3E%3Crect width=%22420%22 height=%22280%22 fill=%22%23f8fafc%22/%3E%3Ctext x=%22210%22 y=%22140%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%2390a4ae%22%3EПродукт%3C/text%3E%3C/svg%3E",Eh=[{id:1,name:"Кошери и рамки",description:"Кошери Дадан-Блат и Лангстрот, рамки, восъчни основи и части за поддръжка на пчелина",icon:"🏠",image:Ar},{id:2,name:"Защитно облекло",description:"Пчеларски костюми, ръкавици, було и практични средства за спокойна работа",icon:"👕",image:Ar},{id:3,name:"Центрофуги",description:"Ръчни и електрически центрофуги за внимателно и удобно вадене на мед",icon:"🍯",image:Ar},{id:4,name:"Инвентар и инструменти",description:"Пчеларски ножове, вилици, дималки и основни инструменти за всекидневна работа",icon:"🔧",image:Ar},{id:5,name:"Подхранване за пчели",description:"Подхранващи сиропи и добавки за силни и добре поддържани пчелни семейства",icon:"🫗",image:Ar},{id:6,name:"Прополисов мехлем",description:"Натурален прополисов мехлем за локална грижа за кожата",icon:"🧴",image:Ar}];function Ch(){const{t:o}=ur();return i.jsxs("section",{id:"products",className:"section products",children:[i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:o("productsTitle")}),i.jsx("p",{className:"section-subtitle",children:o("productsSubtitle")}),i.jsx("div",{className:"products-grid",children:Eh.map(s=>i.jsxs("div",{className:"product-card",children:[i.jsx("div",{className:"product-image",children:i.jsx("img",{src:s.image,alt:s.name})}),i.jsx("div",{className:"product-icon",children:s.icon}),i.jsx("h3",{className:"product-name",children:s.name}),i.jsx("p",{className:"product-description",children:s.description}),i.jsx("a",{href:"#contact",className:"product-link",children:o("productInquiry")})]},s.id))}),i.jsxs("div",{className:"products-cta",children:[i.jsx("p",{children:o("productsCta")}),i.jsx("a",{href:"#contact",className:"btn btn-primary",children:o("productsCtaButton")})]})]}),i.jsx("style",{children:`
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
      `})]})}const ua="",Nh="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 240%22%3E%3Crect width=%22320%22 height=%22240%22 fill=%22%23f6f8fb%22/%3E%3Ctext x=%22160%22 y=%22120%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%23999%22%3EБез изображение%3C/text%3E%3C/svg%3E";function pa(o){if(!o)return Nh;const s=o.trim();return s.startsWith("/uploads/")?`${ua}${s}`:s.startsWith("uploads/")?`${ua}/${s}`:(s.startsWith(`${ua}/uploads/`)||/^https?:\/\//.test(s),s)}function Gt(o){return`${ua}${o.startsWith("/")?o:`/${o}`}`}function bh(){const{t:o}=ur(),[s,u]=x.useState({name:"",email:"",phone:"",message:""}),[d,f]=x.useState({type:null,message:""}),[m,g]=x.useState(!1),j=async w=>{w.preventDefault(),g(!0),f({type:null,message:""});try{const b=await fetch(Gt("/api/contact"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),C=await b.json();b.ok?(f({type:"success",message:o("formSuccess")}),u({name:"",email:"",phone:"",message:""})):f({type:"error",message:C.message||o("formError")})}catch{f({type:"error",message:o("formError")})}finally{g(!1)}},S=w=>{const{name:b,value:C}=w.target;u(R=>({...R,[b]:C}))};return i.jsxs("section",{id:"contact",className:"section contact",children:[i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:o("contactTitle")}),i.jsx("p",{className:"section-subtitle",children:o("contactSubtitle")}),i.jsxs("div",{className:"contact-grid",children:[i.jsxs("div",{className:"contact-info",children:[i.jsxs("div",{className:"contact-item",children:[i.jsx("div",{className:"contact-icon",children:"📍"}),i.jsxs("div",{children:[i.jsx("h3",{children:o("address")}),i.jsx("p",{children:o("addressValue")})]})]}),i.jsxs("div",{className:"contact-item",children:[i.jsx("div",{className:"contact-icon",children:"📞"}),i.jsxs("div",{children:[i.jsx("h3",{children:o("phone")}),i.jsx("p",{children:o("phoneValue")})]})]}),i.jsxs("div",{className:"contact-item",children:[i.jsx("div",{className:"contact-icon",children:"✉️"}),i.jsxs("div",{children:[i.jsx("h3",{children:o("email")}),i.jsx("p",{children:o("emailValue")})]})]}),i.jsxs("div",{className:"contact-item",children:[i.jsx("div",{className:"contact-icon",children:"🌐"}),i.jsxs("div",{children:[i.jsx("h3",{children:o("website")}),i.jsx("p",{children:o("websiteValue")})]})]}),i.jsxs("div",{className:"contact-item",children:[i.jsx("div",{className:"contact-icon",children:"📘"}),i.jsxs("div",{children:[i.jsx("h3",{children:o("facebook")}),i.jsx("p",{children:i.jsx("a",{href:"https://facebook.com/Saki2008",target:"_blank",rel:"noopener noreferrer",children:o("facebookValue")})})]})]}),i.jsxs("div",{className:"contact-item",children:[i.jsx("div",{className:"contact-icon",children:"🕐"}),i.jsxs("div",{children:[i.jsx("h3",{children:o("workingHours")}),i.jsx("p",{children:o("workingHoursWeekday")}),i.jsx("p",{children:o("workingHoursSaturday")})]})]})]}),i.jsxs("form",{className:"contact-form",onSubmit:j,children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"name",children:o("formName")}),i.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:S,required:!0,placeholder:o("formNamePlaceholder")})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"email",children:o("formEmail")}),i.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:S,required:!0,placeholder:o("formEmailPlaceholder")})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"phone",children:o("formPhone")}),i.jsx("input",{type:"tel",id:"phone",name:"phone",value:s.phone,onChange:S,placeholder:o("formPhonePlaceholder")})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"message",children:o("formMessage")}),i.jsx("textarea",{id:"message",name:"message",value:s.message,onChange:S,required:!0,placeholder:o("formMessagePlaceholder"),rows:5})]}),i.jsx("button",{type:"submit",className:"btn btn-primary",disabled:m,children:o(m?"formSubmitting":"formSubmit")}),d.type&&i.jsx("div",{className:`form-status form-status-${d.type}`,children:d.message})]})]})]}),i.jsx("style",{children:`
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
      `})]})}const va="https://www.sakimed.com",Ss="САКИ - пчеларски магазин в Дупница",js=`${va}/bee-logo.jpg`,Md="САКИ е семеен пчеларски магазин в Дупница. Предлагаме натурален мед от собствени пчелини, прополис, кошери, центрофуги и пчеларски инвентар.";function ma(o="/"){return/^https?:\/\//.test(o)?o:o.startsWith("data:")?js:`${va}${o.startsWith("/")?o:`/${o}`}`}function Ph(){return{"@context":"https://schema.org","@type":"Store",name:"САКИ - пчеларски магазин",alternateName:"SAKI Beekeeping Shop",description:Md,url:va,telephone:"+359895517056",email:"info@sakimed.com",image:js,priceRange:"$$",foundingDate:"2006",address:{"@type":"PostalAddress",streetAddress:"Кооперативен пазар, павилион 5",addressLocality:"Дупница",postalCode:"2600",addressCountry:"BG"},openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"09:00",closes:"18:00"},{"@type":"OpeningHoursSpecification",dayOfWeek:"Saturday",opens:"09:00",closes:"14:00"}],sameAs:["https://facebook.com/Saki2008"],areaServed:{"@type":"Country",name:"Bulgaria"},makesOffer:[{"@type":"Offer",itemOffered:{"@type":"Product",name:"Натурален пчелен мед"}},{"@type":"Offer",itemOffered:{"@type":"Product",name:"Пчеларски инвентар"}},{"@type":"Offer",itemOffered:{"@type":"Product",name:"Кошери и рамки"}}]}}function _h(){return{"@context":"https://schema.org","@type":"WebSite",name:Ss,url:va,inLanguage:"bg-BG",publisher:{"@type":"Organization",name:"САКИ"}}}function or(o,s){let u=document.querySelector(`meta[name="${o}"]`);u||(u=document.createElement("meta"),u.name=o,document.head.appendChild(u)),u.content=s}function ir(o,s){let u=document.querySelector(`meta[property="${o}"]`);u||(u=document.createElement("meta"),u.setAttribute("property",o),document.head.appendChild(u)),u.content=s}function Rh(o){let s=document.querySelector('link[rel="canonical"]');s||(s=document.createElement("link"),s.rel="canonical",document.head.appendChild(s)),s.href=o}function Th(o){let s=document.querySelector('script[data-page-json-ld="true"]');if(!o){s==null||s.remove();return}s||(s=document.createElement("script"),s.type="application/ld+json",s.dataset.pageJsonLd="true",document.head.appendChild(s)),s.textContent=o}function wt({title:o,description:s,path:u,image:d=js,type:f="website",noindex:m=!1,jsonLd:g}){const j=_t(),S=ma(u??j.pathname),w=ma(d),b=g?JSON.stringify(g):"";return x.useEffect(()=>{document.title=o,Rh(S),or("description",s),or("robots",m?"noindex, nofollow":"index, follow"),or("theme-color","#f59e0b"),ir("og:site_name",Ss),ir("og:type",f==="product"?"product":f),ir("og:title",o),ir("og:description",s),ir("og:url",S),ir("og:image",w),ir("og:locale","bg_BG"),or("twitter:card","summary_large_image"),or("twitter:title",o),or("twitter:description",s),or("twitter:image",w),Th(b)},[S,s,w,b,m,o,f]),null}const Lh=(...o)=>{typeof window<"u"&&(typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),window.gtag(...o))},zh=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function Ih(o){return o.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(s,u,d)=>u>0&&u+s.length!==d.length&&s.search(zh)>-1&&d.charAt(u-2)!==":"&&(d.charAt(u+s.length)!=="-"||d.charAt(u-1)==="-")&&d.charAt(u-1).search(/[^\s-]/)<0?s.toLowerCase():s.substr(1).search(/[A-Z]|\../)>-1?s:s.charAt(0).toUpperCase()+s.substr(1))}function Fh(o){return typeof o=="string"&&o.indexOf("@")!==-1}const Dh="REDACTED (Potential Email Address)";function Oh(o){return Fh(o)?(console.warn("This arg looks like an email address, redacting."),Dh):o}function as(o="",s=!0,u=!0){let d=o||"";return s&&(d=Ih(o)),u&&(d=Oh(d)),d}var Mh=class{constructor(){Ce(this,"isInitialized");Ce(this,"_testMode");Ce(this,"_currentMeasurementId");Ce(this,"_hasLoadedGA");Ce(this,"_isQueuing");Ce(this,"_queueGtag");Ce(this,"reset",()=>{this.isInitialized=!1,this._testMode=!1,this._currentMeasurementId="",this._hasLoadedGA=!1,this._isQueuing=!1,this._queueGtag=[]});Ce(this,"_gtag",(...o)=>{this._testMode?this._queueGtag.push(o):this._isQueuing?this._queueGtag.push(o):Lh(...o)});Ce(this,"_loadGA",(o,s,u="https://www.googletagmanager.com/gtag/js")=>{if(!(typeof window>"u"||typeof document>"u")&&!this._hasLoadedGA){const d=document.createElement("script");d.async=!0,d.src=`${u}?id=${o}`,s&&d.setAttribute("nonce",s),document.body.appendChild(d),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},this._hasLoadedGA=!0}});Ce(this,"_toGtagOptions",o=>{if(!o)return;const s={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"};return Object.entries(o).reduce((u,[d,f])=>(s[d]?u[s[d]]=f:u[d]=f,u),{})});Ce(this,"initialize",(o,s={})=>{if(!o)throw new Error("Require GA_MEASUREMENT_ID");const u=typeof o=="string"?[{trackingId:o}]:o;this._currentMeasurementId=u[0].trackingId;const{gaOptions:d,gtagOptions:f,nonce:m,testMode:g=!1,gtagUrl:j}=s;if(this._testMode=g,g||this._loadGA(this._currentMeasurementId,m,j),this.isInitialized||(this._gtag("js",new Date),u.forEach(S=>{const w={...this._toGtagOptions({...d,...S.gaOptions}),...f,...S.gtagOptions};Object.keys(w).length?this._gtag("config",S.trackingId,w):this._gtag("config",S.trackingId)})),this.isInitialized=!0,!g){const S=[...this._queueGtag];for(this._queueGtag=[],this._isQueuing=!1;S.length;){const w=S.shift();this._gtag(...w),w[0]==="get"&&(this._isQueuing=!0)}}});Ce(this,"set",o=>{if(!o){console.warn("`fieldsObject` is required in .set()");return}if(typeof o!="object"){console.warn("Expected `fieldsObject` arg to be an Object");return}Object.keys(o).length===0&&console.warn("empty `fieldsObject` given to .set()"),this._gaCommand("set",o)});Ce(this,"_gaCommandSendEvent",(o,s,u,d,f)=>{this._gtag("event",s,{event_category:o,event_label:u,value:d,...f&&{non_interaction:f.nonInteraction},...this._toGtagOptions(f)})});Ce(this,"_gaCommandSendEventParameters",(...o)=>{if(typeof o[0]=="string")this._gaCommandSendEvent(...o.slice(1));else{const{eventCategory:s,eventAction:u,eventLabel:d,eventValue:f,hitType:m,...g}=o[0];this._gaCommandSendEvent(s,u,d,f,g)}});Ce(this,"_gaCommandSendTiming",(o,s,u,d)=>{this._gtag("event","timing_complete",{name:s,value:u,event_category:o,event_label:d})});Ce(this,"_gaCommandSendPageview",(o,s)=>{if(s&&Object.keys(s).length){const{title:u,location:d,...f}=this._toGtagOptions(s)||{};this._gtag("event","page_view",{...o&&{page_path:o},...u&&{page_title:u},...d&&{page_location:d},...f})}else o?this._gtag("event","page_view",{page_path:o}):this._gtag("event","page_view")});Ce(this,"_gaCommandSendPageviewParameters",(...o)=>{if(typeof o[0]=="string")this._gaCommandSendPageview(...o.slice(1));else{const{page:s,hitType:u,...d}=o[0];this._gaCommandSendPageview(s,d)}});Ce(this,"_gaCommandSend",(...o)=>{const s=typeof o[0]=="string"?o[0]:o[0].hitType;switch(s){case"event":this._gaCommandSendEventParameters(...o);break;case"pageview":this._gaCommandSendPageviewParameters(...o);break;case"timing":this._gaCommandSendTiming(...o.slice(1));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn(`Unsupported send command: ${s}`);break;default:console.warn(`Send command doesn't exist: ${s}`)}});Ce(this,"_gaCommandSet",(...o)=>{typeof o[0]=="string"&&(o[0]={[o[0]]:o[1]}),this._gtag("set",this._toGtagOptions(o[0]))});Ce(this,"_gaCommand",(o,...s)=>{switch(o){case"send":this._gaCommandSend(...s);break;case"set":this._gaCommandSet(...s);break;default:console.warn(`Command doesn't exist: ${o}`)}});Ce(this,"ga",(...o)=>{if(typeof o[0]=="string")this._gaCommand(...o);else{const[s]=o;this._gtag("get",this._currentMeasurementId,"client_id",u=>{this._isQueuing=!1;const d=this._queueGtag;for(s({get:f=>f==="clientId"?u:f==="trackingId"?this._currentMeasurementId:f==="apiVersion"?"1":void 0});d.length;){const f=d.shift();this._gtag(...f)}}),this._isQueuing=!0}return this.ga});Ce(this,"event",(o,s)=>{if(typeof o=="string")this._gtag("event",o,this._toGtagOptions(s));else{const{action:u,category:d,label:f,value:m,nonInteraction:g,transport:j}=o;if(!d||!u){console.warn("args.category AND args.action are required in event()");return}const S={hitType:"event",eventCategory:as(d),eventAction:as(u)};f&&(S.eventLabel=as(f)),typeof m<"u"&&(typeof m!="number"?console.warn("Expected `args.value` arg to be a Number."):S.eventValue=m),typeof g<"u"&&(typeof g!="boolean"?console.warn("`args.nonInteraction` must be a boolean."):S.nonInteraction=g),typeof j<"u"&&(typeof j!="string"?console.warn("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(j)===-1&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),S.transport=j)),this._gaCommand("send",S)}});Ce(this,"send",o=>{this._gaCommand("send",o)});this.reset()}gtag(...o){this._gtag(...o)}},Ah=new Mh,Ad=Ah;function Uh(){return x.useEffect(()=>{Ad.send({hitType:"pageview",page:window.location.pathname+window.location.search})},[]),i.jsxs(i.Fragment,{children:[i.jsx(wt,{title:"САКИ - пчеларски магазин в Дупница | Натурален мед и пчеларски инвентар",description:Md,path:"/",jsonLd:[Ph(),_h()]}),i.jsx(Sh,{}),i.jsx(jh,{}),i.jsx(Ch,{}),i.jsx(bh,{})]})}function $h({id:o,slug:s,name:u,price:d,salePrice:f,image:m,onViewDetails:g}){const{addToCart:j}=sr(),S=f??d,w=C=>{C.stopPropagation(),j({id:o,slug:s,name:u,price:d,salePrice:f,image:m},1)},b=()=>{g&&g(s||o)};return i.jsxs("div",{className:"product-card-shopping",onClick:b,children:[i.jsx("div",{className:"product-image-container",children:i.jsx("img",{src:m,alt:u,className:"product-image"})}),i.jsxs("div",{className:"product-card-content",children:[i.jsx("h3",{className:"product-card-name",children:u}),i.jsxs("div",{className:"product-card-price",children:[f&&i.jsxs("span",{className:"old-price",children:[d," лв."]}),i.jsxs("span",{children:[S," лв."]})]}),i.jsxs("div",{className:"product-card-actions",children:[g&&i.jsx("button",{className:"btn btn-link",onClick:C=>{C.stopPropagation(),g(s||o)},children:"Детайли"}),i.jsx("button",{className:"btn btn-primary",onClick:w,children:"Добави в количката"})]})]}),i.jsx("style",{children:`
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
      `})]})}function Bh(){var G;const o=lr(),[s]=uh(),[u,d]=x.useState([]),[f,m]=x.useState([]),[g,j]=x.useState([]),[S,w]=x.useState(!0),[b,C]=x.useState(""),[R,O]=x.useState("all");x.useEffect(()=>{const H=s.get("category");H==="honey"?O("pchelni-produkti"):H==="equipment"?O("pchelarstvo"):H&&O(H)},[s]),x.useEffect(()=>{(async()=>{try{const[ne,le,ue]=await Promise.all([fetch(Gt("/api/products")),fetch(Gt("/api/categories")),fetch(Gt("/api/promotions"))]);if(!ne.ok||!le.ok)throw new Error("Не успяхме да заредим продуктите.");const Ne=await ne.json(),Oe=await le.json(),Ve=ue.ok?await ue.json():[],ot=Ne.map(He=>({...He,image:pa(He.image)}));d(ot),m(Oe),j(Ve)}catch(ne){C(ne instanceof Error?ne.message:"Възникна грешка при зареждането.")}finally{w(!1)}})()},[]);const A=R==="all"?u:u.filter(H=>H.category===R),F=R==="pchelni-produkti"?"Пчелни продукти от САКИ | Натурален мед и прополис":R==="pchelarstvo"?"Пчеларски инвентар и оборудване | САКИ Дупница":"Продукти | Мед и пчеларски инвентар от САКИ",I=(G=f.find(H=>H.slug===R))==null?void 0:G.name,M=g.find(H=>H.active&&H.bannerText),te=R==="pchelni-produkti"?"Разгледайте пчелните продукти на САКИ - натурален мед от собствени пчелини и прополис с гарантирано качество.":R==="pchelarstvo"?"Кошери, рамки, центрофуги, защитно облекло и практичен пчеларски инвентар за начинаещи и опитни пчелари.":"Мед, пчелни продукти, кошери, центрофуги и пчеларски инвентар от семеен магазин САКИ в Дупница.";return i.jsxs(i.Fragment,{children:[i.jsx(wt,{title:F,description:te,path:"/products"}),i.jsxs("div",{className:"products-page",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"products-header",children:[i.jsx("h1",{children:I||"Нашите продукти"}),i.jsx("p",{children:"Натурален мед, пчелни продукти и оборудване за работа в пчелина"})]}),M&&i.jsxs("div",{className:"promotion-banner",children:[i.jsx("strong",{children:M.title}),i.jsx("span",{children:M.bannerText})]}),b&&i.jsx("div",{className:"error-message",children:b}),S?i.jsx("div",{className:"loading",children:"Зареждане..."}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"category-filters",children:[i.jsx("button",{className:`filter-btn ${R==="all"?"active":""}`,onClick:()=>O("all"),children:"Всички продукти"}),f.map(H=>i.jsx("button",{className:`filter-btn ${R===H.slug?"active":""}`,onClick:()=>O(H.slug),children:H.name},H.id))]}),A.length===0?i.jsx("div",{className:"no-products",children:"В тази категория все още няма продукти."}):i.jsx("div",{className:"products-grid",children:A.map(H=>i.jsx($h,{id:H.id,slug:H.slug,name:H.name,price:H.price,salePrice:H.salePrice,image:H.image,onViewDetails:ne=>o(`/products/${ne}`)},H.id))})]})]}),i.jsx("style",{children:`
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
      `})]})]})}function Wh(){const{id:o}=_d(),s=lr(),{addToCart:u}=sr(),[d,f]=x.useState(null),[m,g]=x.useState(!0),[j,S]=x.useState(""),[w,b]=x.useState(1),[C,R]=x.useState(!1);x.useEffect(()=>{(async()=>{try{const ne=await fetch(Gt(`/api/products/${o}`));if(!ne.ok)throw new Error("Продуктът не е намерен.");const le=await ne.json();le.image=pa(le.image),f(le)}catch(ne){S(ne instanceof Error?ne.message:"Възникна грешка при зареждането.")}finally{g(!1)}})()},[o]);const O=()=>{d&&(u(d,w),R(!0),setTimeout(()=>R(!1),2e3))};if(m)return i.jsxs(i.Fragment,{children:[i.jsx(wt,{title:"Продукт | САКИ",description:"Продукт от пчеларски магазин САКИ в Дупница.",path:`/products/${o??""}`}),i.jsx("div",{className:"product-detail-page",children:i.jsx("div",{className:"container",children:i.jsx("div",{className:"loading",children:"Зареждане..."})})})]});if(j||!d)return i.jsxs(i.Fragment,{children:[i.jsx(wt,{title:"Продуктът не е намерен | САКИ",description:"Този продукт не е наличен в каталога на САКИ.",path:`/products/${o??""}`,noindex:!0}),i.jsx("div",{className:"product-detail-page",children:i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"error-message",children:j||"Продуктът не е намерен."}),i.jsx("button",{className:"btn btn-primary",onClick:()=>s("/products"),children:"Назад към продуктите"})]})})]});const A=d.categoryName||(d.category==="pchelni-produkti"?"Пчелни продукти":"За пчелари"),F=d.stock>0,I=`${d.name} | ${Ss}`,M=d.salePrice??d.price,te=`${d.description} Цена: ${M} лв. ${F?"В наличност.":"Временно изчерпан."}`,G={"@context":"https://schema.org","@type":"Product",name:d.name,description:d.description,image:ma(d.image),brand:{"@type":"Brand",name:"САКИ"},offers:{"@type":"Offer",url:ma(`/products/${d.slug}`),priceCurrency:"BGN",price:M,availability:F?"https://schema.org/InStock":"https://schema.org/OutOfStock"}};return i.jsxs("div",{className:"product-detail-page",children:[i.jsx(wt,{title:I,description:te,path:`/products/${d.slug}`,image:d.image,type:"product",jsonLd:G}),i.jsxs("div",{className:"container",children:[i.jsx("button",{className:"back-btn",onClick:()=>s("/products"),children:"← Назад"}),i.jsxs("div",{className:"product-detail-container",children:[i.jsx("div",{className:"product-detail-image",children:i.jsx("img",{src:d.image,alt:d.name})}),i.jsxs("div",{className:"product-detail-content",children:[i.jsx("div",{className:"breadcrumb",children:i.jsx("span",{className:"category-badge",children:A})}),i.jsx("h1",{className:"product-detail-name",children:d.name}),i.jsxs("div",{className:"product-detail-price",children:[d.salePrice&&i.jsxs("span",{className:"old-price",children:[d.price," лв."]}),i.jsx("span",{className:"price-amount",children:M}),i.jsx("span",{className:"price-currency",children:"лв."})]}),i.jsxs("div",{className:"product-detail-description",children:[i.jsx("h3",{children:"Описание"}),i.jsx("p",{children:d.description})]}),!F&&i.jsx("div",{className:"stock-warning",children:"В момента няма наличност."}),i.jsxs("div",{className:"product-detail-actions",children:[i.jsxs("div",{className:"quantity-selector",children:[i.jsx("label",{htmlFor:"quantity",children:"Количество:"}),i.jsxs("div",{className:"quantity-controls",children:[i.jsx("button",{className:"qty-btn",onClick:()=>b(Math.max(1,w-1)),disabled:w===1,children:"−"}),i.jsx("input",{id:"quantity",type:"number",min:"1",value:w,onChange:H=>b(parseInt(H.target.value,10)||1),className:"qty-input"}),i.jsx("button",{className:"qty-btn",onClick:()=>b(w+1),children:"+"})]})]}),i.jsx("button",{className:"btn btn-primary btn-large",onClick:O,disabled:!F,children:"Добави в количката"}),C&&i.jsx("div",{className:"added-message",children:"✓ Добавено в количката."})]}),i.jsxs("div",{className:"product-info",children:[i.jsxs("div",{className:"info-item",children:[i.jsx("span",{className:"info-label",children:"Наличност:"}),i.jsx("span",{className:"info-value",children:F?`${d.stock} бр.`:"Временно изчерпан"})]}),i.jsxs("div",{className:"info-item",children:[i.jsx("span",{className:"info-label",children:"Категория:"}),i.jsx("span",{className:"info-value",children:A})]})]})]})]})]}),i.jsx("style",{children:`
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
      `})]})}function Vh({item:o}){const{updateQuantity:s,removeFromCart:u}=sr();return i.jsxs("div",{className:"cart-item",children:[i.jsx("div",{className:"cart-item-image",children:i.jsx("img",{src:o.image,alt:o.name})}),i.jsxs("div",{className:"cart-item-details",children:[i.jsx("h3",{className:"cart-item-name",children:o.name}),i.jsxs("p",{className:"cart-item-price",children:[o.price," лв."]})]}),i.jsxs("div",{className:"cart-item-quantity",children:[i.jsx("button",{className:"qty-btn",onClick:()=>s(o.productId,o.quantity-1),children:"−"}),i.jsx("input",{type:"number",min:"1",value:o.quantity,onChange:d=>s(o.productId,parseInt(d.target.value,10)||1),className:"qty-input"}),i.jsx("button",{className:"qty-btn",onClick:()=>s(o.productId,o.quantity+1),children:"+"})]}),i.jsxs("div",{className:"cart-item-subtotal",children:[(o.price*o.quantity).toFixed(2)," лв."]}),i.jsx("button",{className:"cart-item-remove",onClick:()=>u(o.productId),children:"×"}),i.jsx("style",{children:`
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
      `})]})}function Hh(){const o=lr(),{cart:s,getTotalPrice:u,clearCart:d}=sr();return s.length===0?i.jsxs("div",{className:"cart-page",children:[i.jsx(wt,{title:"Количка | САКИ",description:"Вашата количка в онлайн магазина на САКИ.",path:"/cart",noindex:!0}),i.jsxs("div",{className:"container",children:[i.jsx("h1",{children:"Вашата количка"}),i.jsxs("div",{className:"empty-cart",children:[i.jsx("div",{className:"empty-icon",children:"🛒"}),i.jsx("p",{children:"Вашата количка е празна"}),i.jsx("button",{className:"btn btn-primary",onClick:()=>o("/products"),children:"Продължи с пазаруване"})]})]}),i.jsx("style",{children:`
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
        `})]}):i.jsxs("div",{className:"cart-page",children:[i.jsx(wt,{title:"Количка | САКИ",description:"Прегледайте продуктите в количката си преди поръчка.",path:"/cart",noindex:!0}),i.jsxs("div",{className:"container",children:[i.jsx("h1",{children:"Вашата количка"}),i.jsxs("div",{className:"cart-layout",children:[i.jsxs("div",{className:"cart-items-section",children:[i.jsxs("div",{className:"cart-items-header",children:[i.jsxs("span",{children:[s.length," продукт",s.length!==1?"и":""]}),i.jsx("button",{className:"link-btn",onClick:d,children:"Изчисти количката"})]}),i.jsx("div",{className:"cart-items",children:s.map(f=>i.jsx(Vh,{item:f},f.productId))})]}),i.jsx("div",{className:"cart-summary",children:i.jsxs("div",{className:"summary-card",children:[i.jsx("h3",{children:"Резюме на поръчката"}),i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Междинна сума:"}),i.jsxs("span",{children:[u().toFixed(2)," лв."]})]}),i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Доставка:"}),i.jsx("span",{className:"delivery-note",children:"Зависи от адреса"})]}),i.jsx("div",{className:"summary-divider"}),i.jsxs("div",{className:"summary-row total",children:[i.jsx("span",{children:"Общо:"}),i.jsxs("span",{children:[u().toFixed(2)," лв."]})]}),i.jsx("button",{className:"btn btn-primary btn-block",onClick:()=>o("/checkout"),children:"Към поръчката"}),i.jsx("button",{className:"btn btn-secondary btn-block",onClick:()=>o("/products"),children:"Продължи с пазаруване"}),i.jsx("div",{className:"secure-badge",children:"🔒 Сигурна поръчка"})]})})]})]}),i.jsx("style",{children:`
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
      `})]})}function Kh({onOrderSuccess:o}){const{cart:s,clearCart:u}=sr(),[d,f]=x.useState(!1),[m,g]=x.useState(""),[j,S]=x.useState(!1),[w,b]=x.useState({customerName:"",email:"",phone:"",address:"",notes:""}),C=O=>{const{name:A,value:F}=O.target;b(I=>({...I,[A]:F}))},R=async O=>{O.preventDefault(),g(""),f(!0);try{const A=await fetch(Gt("/api/orders"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerName:w.customerName,email:w.email,phone:w.phone,address:w.address,notes:w.notes,items:s.map(I=>({productId:I.productId,quantity:I.quantity}))})});if(!A.ok){const I=await A.json();throw new Error(I.error||"Failed to create order")}const F=await A.json();S(!0),u(),o&&o(F.order.id),b({customerName:"",email:"",phone:"",address:"",notes:""})}catch(A){g(A instanceof Error?A.message:"Възникна грешка. Моля, опитайте отново.")}finally{f(!1)}};return j?i.jsxs("div",{className:"checkout-success",children:[i.jsx("div",{className:"success-icon",children:"✓"}),i.jsx("h2",{children:"Поръчката е приета!"}),i.jsx("p",{children:"Благодарим ви за поръчката. Ще се свържем с вас за потвърждение."}),i.jsx("p",{className:"success-note",children:"Ако имате въпрос, можете да ни потърсите и по телефона."})]}):i.jsxs("form",{onSubmit:R,className:"checkout-form",children:[i.jsx("h2",{children:"Данни за поръчката"}),m&&i.jsx("div",{className:"form-error",children:m}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"customerName",children:"Име и фамилия *"}),i.jsx("input",{type:"text",id:"customerName",name:"customerName",value:w.customerName,onChange:C,required:!0,placeholder:"Иван Петров"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"phone",children:"Телефон *"}),i.jsx("input",{type:"tel",id:"phone",name:"phone",value:w.phone,onChange:C,required:!0,placeholder:"+359 87 123 4567"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"email",children:"Имейл"}),i.jsx("input",{type:"email",id:"email",name:"email",value:w.email,onChange:C,placeholder:"you@example.com"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"address",children:"Адрес за доставка *"}),i.jsx("textarea",{id:"address",name:"address",value:w.address,onChange:C,required:!0,placeholder:"ул. Пример 123, гр. Дупница",rows:3})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"notes",children:"Бележка към поръчката"}),i.jsx("textarea",{id:"notes",name:"notes",value:w.notes,onChange:C,placeholder:"Уточнения за доставка или продуктите",rows:3})]}),i.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:d||s.length===0,children:d?"Изпращане...":"Изпрати поръчката"}),i.jsx("style",{children:`
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
      `})]})}function qh(){const o=lr(),{cart:s,getTotalPrice:u}=sr();return s.length===0?i.jsxs("div",{className:"checkout-page",children:[i.jsx(wt,{title:"Поръчка | САКИ",description:"Завършване на поръчка в онлайн магазина на САКИ.",path:"/checkout",noindex:!0}),i.jsx("div",{className:"container",children:i.jsxs("div",{className:"empty-state",children:[i.jsx("p",{children:"Няма продукти в количката"}),i.jsx("button",{className:"btn btn-primary",onClick:()=>o("/products"),children:"Назад към продуктите"})]})})]}):i.jsxs("div",{className:"checkout-page",children:[i.jsx(wt,{title:"Завършване на поръчката | САКИ",description:"Попълнете данните за доставка и изпратете поръчката си към САКИ.",path:"/checkout",noindex:!0}),i.jsxs("div",{className:"container",children:[i.jsx("h1",{children:"Завършване на поръчката"}),i.jsxs("div",{className:"checkout-layout",children:[i.jsx("div",{className:"checkout-form-section",children:i.jsx(Kh,{onOrderSuccess:()=>setTimeout(()=>o("/"),3e3)})}),i.jsx("div",{className:"checkout-summary",children:i.jsxs("div",{className:"summary-card",children:[i.jsx("h3",{children:"Преглед на поръчката"}),i.jsx("div",{className:"order-items",children:s.map(d=>i.jsxs("div",{className:"order-item",children:[i.jsx("span",{className:"item-name",children:d.name}),i.jsxs("span",{className:"item-qty",children:["x",d.quantity]}),i.jsxs("span",{className:"item-price",children:[(d.price*d.quantity).toFixed(2)," лв."]})]},d.productId))}),i.jsx("div",{className:"summary-divider"}),i.jsxs("div",{className:"total-row",children:[i.jsx("span",{children:"Общо:"}),i.jsxs("span",{className:"total-price",children:[u().toFixed(2)," лв."]})]}),i.jsxs("div",{className:"info-box",children:[i.jsx("p",{children:"Важно:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Проверете внимателно адреса"}),i.jsx("li",{children:"Ще се свържем с вас за потвърждение"}),i.jsx("li",{children:"Срокът за доставка зависи от адреса и наличността"})]})]})]})})]})]}),i.jsx("style",{children:`
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
      `})]})}const $o={HONEY:"Мед",BEE_PRODUCTS:"Пчелни продукти",BEEKEEPING_EQUIPMENT:"Пчеларско оборудване",WAX_FOUNDATIONS:"Восъчни основи",PACKAGING:"Опаковки",OTHER:"Друго"},Ur={PCS:"бр.",KG:"кг",G:"г",LITER:"литър",PACKAGE:"пакет"},ls={CASH:"В брой",CARD:"Карта",BANK:"Банка",OTHER:"Друго"},fs={RENT:"Наем",ELECTRICITY:"Ток",FUEL:"Гориво",MATERIALS:"Материали",SALARIES:"Заплати",DELIVERY:"Доставка",ADVERTISING:"Реклама",OTHER:"Друго"},Qh=[["dashboard","Табло"],["sales","Продажби"],["products","Склад"],["reports","Справки"],["expenses","Разходи"],["wax","Восък"],["wax-ledger","Восъчен отчет"],["settings","Настройки"]],ge={requestFailed:"Заявката не беше успешна.",operationFailed:"Операцията не беше успешна.",fileFailed:"Файлът не беше обработен.",noRows:"Няма данни за избрания период.",edit:"Редакция",cancel:"Отказ",save:"Запази",delete:"Откажи",date:"Дата",product:"Продукт",quantity:"Количество",price:"Цена",total:"Общо",profit:"Печалба",payment:"Плащане",actions:"Действия"},dd=`
  .erp-login,
  .erp-shell {
    min-height: 100vh;
    background: #eef2ec;
    color: #172018;
    padding: 18px 0 36px;
  }

  .erp-login { display: grid; place-items: center; }
  .erp-wrap { width: min(1240px, calc(100% - 24px)); margin: 0 auto; }

  .login-box,
  .erp-card,
  .erp-panel,
  .metric-grid > div {
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 6px;
    box-shadow: 0 1px 2px rgba(26, 42, 28, 0.06);
  }

  .login-box,
  .erp-card { display: grid; gap: 12px; padding: 20px; }
  .login-box { width: min(420px, calc(100% - 28px)); }

  .erp-header {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
    padding: 24px 14px;
    margin-bottom: 14px;
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 6px;
  }

  .erp-header h1,
  .erp-card h2,
  .erp-panel h2 { margin: 0; color: #0d3020; }
  .erp-header p { margin: 8px 0 0; color: #56634f; font-weight: 700; }

  .erp-tabs,
  .report-tabs,
  .mode-switch,
  .payment-pills,
  .actions,
  .mini-actions,
  .import-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
  }

  .erp-tabs {
    padding: 8px;
    margin-bottom: 14px;
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 6px;
  }

  button,
  .erp-btn,
  .erp-tabs button,
  .report-tabs button,
  .mode-switch button,
  .payment-pills button,
  .mini-btn,
  .inline-action {
    border: 1px solid #cfd9c9;
    border-radius: 6px;
    background: #f8faf6;
    color: #12301f;
    font-weight: 800;
    padding: 10px 14px;
    cursor: pointer;
  }

  button:disabled { opacity: 0.55; cursor: not-allowed; }
  .erp-tabs button.active,
  .report-tabs button.active,
  .mode-switch button.active,
  .payment-pills button.active,
  .erp-btn.primary {
    background: #12612e;
    color: #fff;
    border-color: #0e5126;
  }
  .erp-btn.ghost { background: #eef5ea; }
  .mini-btn { padding: 7px 10px; font-size: 0.82rem; }
  .mini-btn.danger { background: #ffeaea; color: #9e1f1f; border-color: #ffc7c7; }
  .inline-action { margin-bottom: 8px; }

  .status {
    padding: 10px 12px;
    border-radius: 6px;
    background: #fff8db;
    color: #654f00;
    font-weight: 800;
  }
  .status.error { background: #ffeaea; color: #9e1f1f; }

  label { display: grid; gap: 6px; font-size: 0.9rem; color: #43513f; font-weight: 800; }
  input,
  select,
  textarea {
    width: 100%;
    border: 1px solid #cfd9c9;
    border-radius: 6px;
    padding: 10px;
    font: inherit;
    color: #172018;
    background: #fff;
    box-sizing: border-box;
  }
  textarea { min-height: 84px; resize: vertical; }

  .metric-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 12px;
    margin-bottom: 14px;
  }
  .metric-grid > div { padding: 18px 14px; display: grid; gap: 8px; }
  .metric-grid span { color: #62705c; font-weight: 900; }
  .metric-grid strong { font-size: 1.35rem; color: #082818; }
  .metric-grid small { color: #687366; }

  .erp-columns,
  .erp-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 12px;
  }

  .erp-panel { padding: 18px; min-width: 0; }
  .panel-list { display: grid; gap: 10px; margin-top: 12px; }
  .erp-row { display: grid; gap: 6px; padding: 10px 0; border-bottom: 1px solid #edf1e9; }
  .erp-row span { color: #52604d; }
  .row-with-action { display: grid; grid-template-columns: 1fr auto; gap: 12px; align-items: center; border-bottom: 1px solid #edf1e9; }
  .row-with-action .erp-row { border-bottom: 0; }

  .sales-layout,
  .storage-layout,
  .report-stack,
  .wax-page,
  .settings-page { display: grid; gap: 12px; }
  .sales-layout { grid-template-columns: minmax(320px, 420px) 1fr; align-items: start; }
  .sales-main { display: grid; gap: 10px; min-height: 0; overflow: auto; }
  .sales-section { border: 1px solid #dfe5dc; border-radius: 6px; background: #fff; overflow: hidden; }
  .sales-section-head { width: 100%; display: flex; justify-content: space-between; border: 0; border-radius: 0; }
  .sales-section-body { padding: 12px; display: grid; gap: 10px; }

  .quick-search,
  .sale-input-grid,
  .two,
  .editor-grid,
  .settings-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
  .quick-products { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
  .quick-products button { text-align: left; display: grid; gap: 4px; min-height: 72px; }
  .quick-products button.selected { border-color: #12612e; background: #eef8ef; }
  .field-group { display: grid; gap: 8px; }
  .field-title { font-weight: 900; color: #43513f; }
  .sale-total-bar,
  .form-total {
    display: grid;
    gap: 4px;
    padding: 12px;
    border-radius: 6px;
    background: #f3f7ef;
    font-weight: 900;
  }
  .sale-total-bar strong { font-size: 1.4rem; color: #0d3020; }

  .storage-toolbar,
  .filters {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) 180px 160px auto;
    gap: 8px;
    padding: 12px;
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 6px;
  }
  .storage-editor { background: #fff; border: 1px solid #dfe5dc; border-radius: 6px; padding: 18px; display: grid; gap: 12px; }
  .storage-editor-head { display: flex; justify-content: space-between; gap: 12px; align-items: center; }
  .wide-field { grid-column: 1 / -1; }
  .check { display: flex; align-items: center; gap: 8px; }
  .check input { width: auto; }
  .storage-hint { color: #687366; font-weight: 800; }

  .import-card { margin: 0; }
  .import-controls { align-items: end; }
  .import-preview { display: grid; gap: 8px; }
  .import-row { border: 1px solid #eadfc8; border-radius: 6px; padding: 10px; display: grid; gap: 4px; }
  .import-row.invalid { background: #fff4f2; border-color: #d96b6b; }

  .report-table-wrap,
  .storage-table-wrap {
    overflow: auto;
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 6px;
  }
  table { width: 100%; border-collapse: collapse; }
  th,
  td { padding: 10px 12px; border-bottom: 1px solid #edf1e9; text-align: left; vertical-align: top; }
  th { background: #f6f8f3; color: #43513f; font-size: 0.82rem; text-transform: uppercase; }
  td small { display: block; color: #687366; margin-top: 4px; }
  tr.low { background: #fff9ea; }

  .wax-ledger-summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; }

  @media (max-width: 980px) {
    .sales-layout,
    .storage-toolbar,
    .filters,
    .quick-search,
    .sale-input-grid,
    .two,
    .editor-grid,
    .settings-grid {
      grid-template-columns: 1fr;
    }
    .sales-main { height: auto !important; }
  }
`,ss={sku:"",name:"",category:"HONEY",unit:"PCS",sellPriceEur:"",costPriceEur:"",stockQuantity:"0",minStockQuantity:"0",totalSoldQuantity:"0",active:!0,waxExchangeEnabled:!1,foundationUnitsPerWaxKg:"",exchangeRoundingMode:"FLOOR",notes:""},fd={todayTurnoverEur:0,todayProfitEur:0,monthlyTurnoverEur:0,monthlyProfitEur:0,lowStockProducts:[],latestSales:[],latestWaxTransactions:[],waxStockKg:0,waxInventoryValueEur:0},pd={defaultBuyPriceEur:5,waxStockKg:0,waxInventoryValueEur:0,totalWaxBoughtValueEur:0,totalFoundationGivenKg:0,totalFoundationGivenValueEur:0,totalExtraPaymentEur:0,balanceEur:0,transactionCount:0};function ln(){return new Date().toISOString().slice(0,10)}function J(o){return`${Number(o||0).toFixed(2)} EUR`}function bt(o){return`${(Number(o||0)*1.95583).toFixed(2)} лв.`}function md(o){return Array.isArray(o)?o:Array.isArray(o==null?void 0:o.items)?o.items:[]}function Gh(o,s){return Number.isFinite(o)?s==="ROUND"?Math.round(o):s==="CEIL"?Math.ceil(o):s==="NONE"?Number(o.toFixed(3)):Math.floor(o):0}function Yh(){const[o,s]=x.useState(()=>localStorage.getItem("admin_token")||""),[u,d]=x.useState(!1),[f,m]=x.useState({email:"",password:""}),[g,j]=x.useState("dashboard"),[S,w]=x.useState(""),[b,C]=x.useState(!1),R=x.useRef(null),[O,A]=x.useState(null),[F,I]=x.useState([]),[M,te]=x.useState([]),[G,H]=x.useState(null),[ne,le]=x.useState([]),[ue,Ne]=x.useState(pd),[Oe,Ve]=x.useState({defaultBuyPriceEur:5}),[ot,He]=x.useState(""),[Fe,Ge]=x.useState("ALL"),[be,Ye]=x.useState("ALL"),[we,U]=x.useState(null),[Z,B]=x.useState(!1),[v,_]=x.useState(ss),[oe,ie]=x.useState(null),[ce,se]=x.useState([]),[ye,fe]=x.useState({totalRows:0,validRows:0,invalidRows:0}),[pe,Ke]=x.useState(null),[Fn,Dn]=x.useState({latest:!0,all:!1}),[On,Wr]=x.useState(null),[Mn,qo]=x.useState(""),[xe,mt]=x.useState({saleDate:ln(),productId:"",quantity:"1",unitPriceEur:"",paymentMethod:"CASH",notes:""}),[Ue,ht]=x.useState({expenseDate:ln(),category:"MATERIALS",amountEur:"",paymentMethod:"CASH",supplier:"",notes:""}),[un,Vr]=x.useState("monthly"),[At,Qo]=x.useState({from:ln().slice(0,8)+"01",to:ln()}),[Ut,Hr]=x.useState(null),[cr,An]=x.useState({defaultBuyPriceEur:"5"}),[dr,$t]=x.useState(!1),[ee,Xe]=x.useState({transactionType:"BUY",transactionDate:ln(),waxReceivedKg:"0",waxPricePerKgEur:"5",foundationGivenKg:"0",foundationPricePerKgEur:"15",extraPaymentEur:"0",foundationProductId:"",createExpense:!1,notes:""}),Kr=x.useMemo(()=>({...o?{Authorization:`Bearer ${o}`}:{}}),[o]);async function ze(p,$={}){const Te=await fetch(Gt(p),{...$,credentials:"include",headers:{"Content-Type":"application/json",...Kr,...$.headers||{}}});if(!Te.ok){const me=await Te.json().catch(()=>({error:ge.requestFailed}));throw new Error(me.error||ge.requestFailed)}return Te.status===204?null:Te.json()}async function Go(p,$){const Te=new FormData;Te.append("file",$);const me=await fetch(Gt(p),{method:"POST",credentials:"include",headers:Kr,body:Te});if(!me.ok){const mr=await me.json().catch(()=>({error:ge.fileFailed}));throw new Error(mr.error||ge.fileFailed)}return me.json()}async function it(){const p=await Promise.allSettled([ze("/api/admin/erp/dashboard"),ze("/api/admin/erp/products"),ze("/api/admin/erp/sales"),ze(`/api/admin/erp/reports?from=${At.from}&to=${At.to}`),ze("/api/admin/erp/wax-transactions"),ze("/api/admin/erp/wax-summary"),ze("/api/admin/erp/wax-settings")]),[$,Te,me,mr,hr,ro,Vn]=p;if(A($.status==="fulfilled"?{...fd,...$.value}:fd),Te.status==="fulfilled"&&I(Array.isArray(Te.value)?Te.value:[]),me.status==="fulfilled"&&te(md(me.value)),mr.status==="fulfilled"&&H(mr.value),hr.status==="fulfilled"&&le(md(hr.value)),ro.status==="fulfilled"&&Ne({...pd,...ro.value}),Vn.status==="fulfilled"){const mn={defaultBuyPriceEur:Number(Vn.value.defaultBuyPriceEur||5)};Ve(mn),An({defaultBuyPriceEur:String(mn.defaultBuyPriceEur)}),Ut||Xe(gr=>({...gr,waxPricePerKgEur:String(mn.defaultBuyPriceEur)}))}const Hn=p.find(mn=>mn.status==="rejected");(Hn==null?void 0:Hn.status)==="rejected"&&w(Hn.reason instanceof Error?Hn.reason.message:"ERP данните не се заредиха напълно.")}x.useEffect(()=>{o&&ze("/api/auth/me").then(()=>(d(!0),it())).catch(()=>{s(""),localStorage.removeItem("admin_token")})},[]),x.useEffect(()=>{u&&ze(`/api/admin/erp/reports?from=${At.from}&to=${At.to}`).then(H).catch(()=>{})},[At.from,At.to]);async function qr(p){p.preventDefault(),C(!0),w("");try{const $=await ze("/api/auth/login",{method:"POST",body:JSON.stringify(f)});s($.token),localStorage.setItem("admin_token",$.token),d(!0),await it()}catch($){w($ instanceof Error?$.message:ge.operationFailed)}finally{C(!1)}}async function Qr(){await ze("/api/auth/logout",{method:"POST"}).catch(()=>{}),s(""),localStorage.removeItem("admin_token"),d(!1)}function Gr(p){U(p.id),B(!0),_({sku:p.sku||"",name:p.name,category:p.category,unit:p.unit,sellPriceEur:String(p.sellPriceEur),costPriceEur:String(p.costPriceEur),stockQuantity:String(p.stockQuantity),minStockQuantity:String(p.minStockQuantity),totalSoldQuantity:String(p.totalSoldQuantity||0),active:p.active,waxExchangeEnabled:!!p.waxExchangeEnabled,foundationUnitsPerWaxKg:p.foundationUnitsPerWaxKg?String(p.foundationUnitsPerWaxKg):"",exchangeRoundingMode:p.exchangeRoundingMode||"FLOOR",notes:p.notes||""})}async function Yr(p){p.preventDefault(),C(!0);try{await ze(we?`/api/admin/erp/products/${we}`:"/api/admin/erp/products",{method:we?"PUT":"POST",body:JSON.stringify({...v,sku:v.sku||null,sellPriceEur:Number(v.sellPriceEur),costPriceEur:Number(v.costPriceEur),stockQuantity:Number(v.stockQuantity),minStockQuantity:Number(v.minStockQuantity),totalSoldQuantity:Number(v.totalSoldQuantity),waxExchangeEnabled:v.category==="WAX_FOUNDATIONS"?v.waxExchangeEnabled:!1,foundationUnitsPerWaxKg:v.category==="WAX_FOUNDATIONS"&&v.foundationUnitsPerWaxKg?Number(v.foundationUnitsPerWaxKg):null,exchangeRoundingMode:v.exchangeRoundingMode})}),_(ss),U(null),B(!1),await it(),w("Продуктът е запазен.")}catch($){w($ instanceof Error?$.message:ge.operationFailed)}finally{C(!1)}}async function cn(){if(!oe){w("Изберете CSV или Excel файл.");return}C(!0);try{const p=await Go("/api/admin/erp/products/import-preview",oe);se(p.rows||[]),fe({totalRows:Number(p.totalRows||0),validRows:Number(p.validRows||0),invalidRows:Number(p.invalidRows||0)}),w("Прегледът на файла е готов.")}catch(p){w(p instanceof Error?p.message:ge.operationFailed)}finally{C(!1)}}async function dn(){if(!oe){w("Изберете CSV или Excel файл.");return}C(!0);try{const p=await Go("/api/admin/erp/products/import",oe);se([]),fe({totalRows:0,validRows:0,invalidRows:0}),ie(null),await it(),w(`Импортът е готов: ${p.created||0} нови, ${p.updated||0} обновени.`)}catch(p){w(p instanceof Error?p.message:ge.operationFailed)}finally{C(!1)}}async function Yo(p){p.preventDefault(),C(!0);try{await ze(pe?`/api/admin/erp/sales/${pe}`:"/api/admin/erp/sales",{method:pe?"PUT":"POST",body:JSON.stringify({...xe,productId:Number(xe.productId),quantity:Number(xe.quantity),unitPriceEur:xe.unitPriceEur?Number(xe.unitPriceEur):void 0})}),Ke(null),mt({saleDate:ln(),productId:"",quantity:"1",unitPriceEur:"",paymentMethod:"CASH",notes:""}),await it(),w("Продажбата е запазена.")}catch($){w($ instanceof Error?$.message:ge.operationFailed)}finally{C(!1)}}function Xr(p){Ke(p.id),j("sales"),Dn({latest:!1,all:!0}),mt({saleDate:p.saleDate.slice(0,10),productId:String(p.product.id),quantity:String(p.quantity),unitPriceEur:String(p.unitPriceEur),paymentMethod:p.paymentMethod,notes:p.notes||""})}async function Jr(p){if(window.confirm(`Да откажа ли продажбата за "${p.product.name}"? Количеството ще бъде върнато в склада.`)){C(!0);try{await ze(`/api/admin/erp/sales/${p.id}`,{method:"DELETE"}),await it(),w("Продажбата е отказана.")}catch($){w($ instanceof Error?$.message:ge.operationFailed)}finally{C(!1)}}}async function Xo(p){p.preventDefault(),C(!0);try{await ze("/api/admin/erp/expenses",{method:"POST",body:JSON.stringify({...Ue,amountEur:Number(Ue.amountEur)})}),ht({expenseDate:ln(),category:"MATERIALS",amountEur:"",paymentMethod:"CASH",supplier:"",notes:""}),await it(),w("Разходът е запазен.")}catch($){w($ instanceof Error?$.message:ge.operationFailed)}finally{C(!1)}}async function Jo(p){p.preventDefault(),C(!0);try{await ze("/api/admin/erp/wax-settings",{method:"PUT",body:JSON.stringify({defaultBuyPriceEur:Number(cr.defaultBuyPriceEur)})}),await it(),w("Настройките за восък са запазени.")}catch($){w($ instanceof Error?$.message:ge.operationFailed)}finally{C(!1)}}function fr(p=Oe.defaultBuyPriceEur){Hr(null),$t(!1),Xe({transactionType:"BUY",transactionDate:ln(),waxReceivedKg:"0",waxPricePerKgEur:String(p),foundationGivenKg:"0",foundationPricePerKgEur:"0",extraPaymentEur:"0",foundationProductId:"",createExpense:!1,notes:""})}function Zr(p){$t(!1),Xe($=>({...$,transactionType:p,foundationGivenKg:p==="BUY"?"0":$.foundationGivenKg,foundationPricePerKgEur:p==="BUY"?"0":$.foundationPricePerKgEur,foundationProductId:p==="BUY"?"":$.foundationProductId,extraPaymentEur:p==="BUY"?"0":$.extraPaymentEur}))}async function Un(p){p.preventDefault(),C(!0);try{await ze(Ut?`/api/admin/erp/wax-transactions/${Ut}`:"/api/admin/erp/wax-transactions",{method:Ut?"PATCH":"POST",body:JSON.stringify({...ee,customerName:null,customerPhone:null,waxReceivedKg:Number(ee.waxReceivedKg),waxPricePerKgEur:Number(ee.waxPricePerKgEur),foundationGivenKg:ee.transactionType==="SWAP"?Number(ee.foundationGivenKg):0,foundationPricePerKgEur:ee.transactionType==="SWAP"?Number(ee.foundationPricePerKgEur):0,extraPaymentEur:ee.transactionType==="SWAP"?Number(ee.extraPaymentEur):0,foundationProductId:ee.transactionType==="SWAP"&&ee.foundationProductId?Number(ee.foundationProductId):null})}),fr(),await it(),w("Восъчната сделка е запазена.")}catch($){w($ instanceof Error?$.message:ge.operationFailed)}finally{C(!1)}}function eo(p){const $=p.transactionType||(Number(p.foundationGivenKg||0)>0?"SWAP":"BUY");Hr(p.id),$t(!1),j("wax"),Xe({transactionType:$,transactionDate:p.transactionDate.slice(0,10),waxReceivedKg:String(p.waxReceivedKg),waxPricePerKgEur:String(p.waxPricePerKgEur),foundationGivenKg:String(p.foundationGivenKg),foundationPricePerKgEur:String(p.foundationPricePerKgEur),extraPaymentEur:String(p.extraPaymentEur),foundationProductId:p.foundationProductId?String(p.foundationProductId):"",createExpense:!1,notes:p.notes||""})}async function $n(p){if(window.confirm("Да откажа ли восъчната сделка? Историята ще бъде запазена.")){C(!0);try{await ze(`/api/admin/erp/wax-transactions/${p.id}`,{method:"DELETE"}),await it(),w("Восъчната сделка е отказана.")}catch($){w($ instanceof Error?$.message:ge.operationFailed)}finally{C(!1)}}}const Xt=F.find(p=>String(p.id)===xe.productId),fn=F.filter(p=>p.active).filter(p=>p.name.toLowerCase().includes(Mn.toLowerCase())||String(p.sku||"").includes(Mn)).slice(0,Mn?12:8),pn=F.filter(p=>{const $=[p.sku,p.name,p.notes].join(" ").toLowerCase().includes(ot.toLowerCase()),Te=Fe==="ALL"||p.category===Fe,me=be==="ALL"||(be==="LOW"?p.stockStatus==="LOW":p.active);return $&&Te&&me}),Bt=pn.reduce((p,$)=>({stockValue:p.stockValue+Number($.inventoryValueEur||0),sellValue:p.sellValue+Number($.inventorySellValueEur||0),low:p.low+($.stockStatus==="LOW"?1:0)}),{stockValue:0,sellValue:0,low:0}),Bn=F.filter(p=>p.category==="WAX_FOUNDATIONS"&&p.active&&p.waxExchangeEnabled&&p.foundationUnitsPerWaxKg!==null&&p.foundationUnitsPerWaxKg!==void 0),at=Bn.find(p=>String(p.id)===ee.foundationProductId),Zo="бр.",ya="1",lt=ee.transactionType==="SWAP",pr=Number(ee.waxReceivedKg||0)*Number(ee.waxPricePerKgEur||0),ei=lt&&(at!=null&&at.foundationUnitsPerWaxKg)?Number(ee.waxReceivedKg||0)*Number(at.foundationUnitsPerWaxKg):0,to=at?Gh(ei,at.exchangeRoundingMode):0,no=lt?Number(ee.foundationGivenKg||0)*Number(ee.foundationPricePerKgEur||0):0,Wn=pr+(lt?Number(ee.extraPaymentEur||0):0)-no,ti=ee.transactionType==="BUY"?`За плащане ${J(pr)}`:Wn>0?`Дължите на клиента ${J(Wn)}`:Wn<0?`Клиентът доплаща ${J(Math.abs(Wn))}`:"Балансът е изравнен";return x.useEffect(()=>{!lt||!at||dr||Xe(p=>({...p,foundationGivenKg:String(to)}))},[lt,at==null?void 0:at.id,ee.waxReceivedKg,to,dr]),x.useLayoutEffect(()=>{if(g!=="sales"||!R.current)return;const p=R.current,$=()=>Wr(Math.ceil(p.getBoundingClientRect().height));$();const Te=new ResizeObserver($);return Te.observe(p),window.addEventListener("resize",$),()=>{Te.disconnect(),window.removeEventListener("resize",$)}},[g,Xt,fn.length,pe,b]),u?i.jsxs("div",{className:"erp-shell",children:[i.jsx(wt,{title:"SakiMed ERP | Табло",description:"Административен ERP панел на SakiMed.",path:"/admin",noindex:!0}),i.jsxs("div",{className:"erp-wrap",children:[i.jsxs("header",{className:"erp-header",children:[i.jsxs("div",{children:[i.jsx("h1",{children:"SakiMed ERP"}),i.jsx("p",{children:"Продажби, склад, восък, разходи и справки"})]}),i.jsx("button",{className:"erp-btn ghost",onClick:Qr,children:"Изход"})]}),S&&i.jsx("p",{className:"status",children:S}),i.jsx("nav",{className:"erp-tabs",children:Qh.map(([p,$])=>i.jsx("button",{className:g===p?"active":"",onClick:()=>j(p),children:$},p))}),g==="dashboard"&&O&&i.jsxs(i.Fragment,{children:[i.jsx(Bo,{items:[["Дневен оборот",J(O.todayTurnoverEur),bt(O.todayTurnoverEur)],["Дневна печалба",J(O.todayProfitEur),bt(O.todayProfitEur)],["Месечен оборот",J(O.monthlyTurnoverEur),bt(O.monthlyTurnoverEur)],["Месечна печалба",J(O.monthlyProfitEur),bt(O.monthlyProfitEur)],["Наличен восък",`${Number(O.waxStockKg||0).toFixed(3)} кг`,J(O.waxInventoryValueEur||0)]]}),i.jsxs("section",{className:"erp-columns",children:[i.jsx(Uo,{title:"Ниска наличност",children:O.lowStockProducts.map(p=>i.jsx(ca,{title:p.name,meta:`${p.stockQuantity} ${Ur[p.unit]} | минимум ${p.minStockQuantity}`},p.id))}),i.jsxs(Uo,{title:"Последни продажби",children:[i.jsx("button",{className:"inline-action",onClick:()=>{j("sales"),Dn({latest:!1,all:!0})},children:"Всички продажби"}),O.latestSales.map(p=>i.jsxs(Es,{title:p.product.name,meta:`${p.quantity} x ${J(p.unitPriceEur)} = ${J(p.totalEur)}`,children:[i.jsx("button",{className:"mini-btn",onClick:()=>Xr(p),children:ge.edit}),i.jsx("button",{className:"mini-btn danger",onClick:()=>Jr(p),children:ge.delete})]},p.id))]}),i.jsx(Uo,{title:"Последни сделки с восък",children:O.latestWaxTransactions.map(p=>i.jsx(ca,{title:`${p.transactionType==="SWAP"?"Смяна":"Покупка"} #${p.id}`,meta:`Баланс ${J(p.balanceEur)} | восък ${p.waxReceivedKg} кг`},p.id))})]})]}),g==="sales"&&i.jsxs("section",{className:"sales-layout",children:[i.jsxs("form",{className:"erp-card sale-card",ref:R,onSubmit:Yo,children:[i.jsx("h2",{children:pe?"Редакция на продажба":"Бърза продажба"}),i.jsxs("label",{children:["Дата",i.jsx("input",{type:"date",value:xe.saleDate,onChange:p=>mt({...xe,saleDate:p.target.value})})]}),i.jsxs("div",{className:"quick-search",children:[i.jsxs("label",{children:["Търсене",i.jsx("input",{placeholder:"Търси продукт или код",value:Mn,onChange:p=>qo(p.target.value)})]}),i.jsxs("label",{children:["Продукт",i.jsxs("select",{value:xe.productId,onChange:p=>{const $=F.find(Te=>String(Te.id)===p.target.value);mt({...xe,productId:p.target.value,unitPriceEur:$?String($.sellPriceEur):""})},required:!0,children:[i.jsx("option",{value:"",children:"Избери продукт"}),F.filter(p=>p.active).map(p=>i.jsx("option",{value:p.id,children:p.name},p.id))]})]})]}),i.jsx("div",{className:"quick-products",children:fn.map(p=>i.jsxs("button",{type:"button",className:xe.productId===String(p.id)?"selected":"",onClick:()=>mt({...xe,productId:String(p.id),unitPriceEur:String(p.sellPriceEur)}),children:[i.jsx("strong",{children:p.name}),i.jsxs("span",{children:[J(p.sellPriceEur)," | ",p.stockQuantity," ",Ur[p.unit]]})]},p.id))}),i.jsxs("div",{className:"sale-input-grid",children:[i.jsxs("label",{children:["Количество",i.jsx("input",{inputMode:"decimal",type:"number",step:"0.001",min:"0.001",value:xe.quantity,onChange:p=>mt({...xe,quantity:p.target.value}),required:!0})]}),i.jsxs("label",{children:["Цена EUR",i.jsx("input",{inputMode:"decimal",type:"number",step:"0.01",min:"0",value:xe.unitPriceEur,onChange:p=>mt({...xe,unitPriceEur:p.target.value})})]})]}),i.jsx(Zh,{value:xe.paymentMethod,labels:ls,onChange:p=>mt({...xe,paymentMethod:p})}),i.jsxs("label",{children:["Бележка",i.jsx("textarea",{value:xe.notes,onChange:p=>mt({...xe,notes:p.target.value})})]}),i.jsxs("div",{className:"sale-total-bar",children:[i.jsx("span",{children:"Общо"}),i.jsx("strong",{children:J(Number(xe.quantity||0)*Number(xe.unitPriceEur||(Xt==null?void 0:Xt.sellPriceEur)||0))}),i.jsx("small",{children:bt(Number(xe.quantity||0)*Number(xe.unitPriceEur||(Xt==null?void 0:Xt.sellPriceEur)||0))})]}),i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"erp-btn primary",disabled:b,children:pe?"Запази продажба":"Продай"}),pe&&i.jsx("button",{type:"button",className:"erp-btn ghost",onClick:()=>{Ke(null),mt({saleDate:ln(),productId:"",quantity:"1",unitPriceEur:"",paymentMethod:"CASH",notes:""})},children:ge.cancel})]})]}),i.jsxs("section",{className:"sales-main",style:On?{height:On}:void 0,children:[i.jsx(hd,{title:"Последни продажби",count:M.slice(0,12).length,expanded:Fn.latest,onToggle:()=>Dn(p=>({...p,latest:!p.latest})),children:M.slice(0,12).map(p=>i.jsx(Xh,{sale:p,onEdit:Xr,onCancel:Jr},p.id))}),i.jsx(hd,{title:"Всички продажби",count:M.length,expanded:Fn.all,onToggle:()=>Dn(p=>({...p,all:!p.all})),children:i.jsx(ar,{headers:[ge.date,ge.product,ge.quantity,ge.price,ge.total,ge.profit,ge.payment,ge.actions],rows:M.map(p=>[new Date(p.saleDate).toLocaleDateString("bg-BG"),p.product.name,String(p.quantity),J(p.unitPriceEur),J(p.totalEur),J(p.profitEur),ls[p.paymentMethod],""])})})]})]}),g==="products"&&i.jsxs("section",{className:"storage-layout",children:[i.jsxs("div",{className:"storage-toolbar",children:[i.jsxs("label",{children:["Търсене",i.jsx("input",{placeholder:"Име, код или бележка",value:ot,onChange:p=>He(p.target.value)})]}),i.jsxs("label",{children:["Категория",i.jsxs("select",{value:Fe,onChange:p=>Ge(p.target.value),children:[i.jsx("option",{value:"ALL",children:"Всички"}),Object.entries($o).map(([p,$])=>i.jsx("option",{value:p,children:$},p))]})]}),i.jsxs("label",{children:["Статус",i.jsxs("select",{value:be,onChange:p=>Ye(p.target.value),children:[i.jsx("option",{value:"ALL",children:"Всички"}),i.jsx("option",{value:"LOW",children:"Ниска наличност"}),i.jsx("option",{value:"ACTIVE",children:"Активни"})]})]}),i.jsx("button",{className:"erp-btn primary",onClick:()=>{U(null),_(ss),B(!0)},children:"Нов продукт"})]}),i.jsx(eg,{file:oe,rows:ce,summary:ye,onFile:ie,onPreview:cn,onImport:dn,loading:b}),Z&&i.jsxs("form",{className:"storage-editor",onSubmit:Yr,children:[i.jsxs("div",{className:"storage-editor-head",children:[i.jsx("h2",{children:we?"Редакция на продукт":"Нов продукт"}),i.jsx("button",{type:"button",className:"mini-btn",onClick:()=>B(!1),children:"Затвори"})]}),i.jsxs("div",{className:"editor-grid",children:[i.jsxs("label",{children:["Код",i.jsx("input",{value:v.sku,onChange:p=>_({...v,sku:p.target.value})})]}),i.jsxs("label",{children:["Име",i.jsx("input",{value:v.name,onChange:p=>_({...v,name:p.target.value}),required:!0})]}),i.jsxs("label",{children:["Категория",i.jsx("select",{value:v.category,onChange:p=>_({...v,category:p.target.value}),children:Object.entries($o).map(([p,$])=>i.jsx("option",{value:p,children:$},p))})]}),i.jsxs("label",{children:["Мярка",i.jsx("select",{value:v.unit,onChange:p=>_({...v,unit:p.target.value}),children:Object.entries(Ur).map(([p,$])=>i.jsx("option",{value:p,children:$},p))})]}),i.jsxs("label",{children:["Продажна цена EUR",i.jsx("input",{type:"number",step:"0.01",min:"0",value:v.sellPriceEur,onChange:p=>_({...v,sellPriceEur:p.target.value}),required:!0})]}),i.jsxs("label",{children:["Доставна цена EUR",i.jsx("input",{type:"number",step:"0.01",min:"0",value:v.costPriceEur,onChange:p=>_({...v,costPriceEur:p.target.value}),required:!0})]}),i.jsxs("label",{children:["Наличност",i.jsx("input",{type:"number",step:"0.001",min:"0",value:v.stockQuantity,onChange:p=>_({...v,stockQuantity:p.target.value})})]}),i.jsxs("label",{children:["Минимум",i.jsx("input",{type:"number",step:"0.001",min:"0",value:v.minStockQuantity,onChange:p=>_({...v,minStockQuantity:p.target.value})})]}),i.jsxs("label",{className:"check",children:[i.jsx("input",{type:"checkbox",checked:v.active,onChange:p=>_({...v,active:p.target.checked})})," Активен"]}),v.category==="WAX_FOUNDATIONS"&&i.jsxs("section",{className:"wide-field erp-card",children:[i.jsx("h2",{children:"Настройки за размяна на восък"}),i.jsxs("label",{className:"check",children:[i.jsx("input",{type:"checkbox",checked:v.waxExchangeEnabled,onChange:p=>_({...v,waxExchangeEnabled:p.target.checked})})," Участва в размяна на восък"]}),i.jsxs("div",{className:"two",children:[i.jsxs("label",{children:["Брой основи за 1 кг восък",i.jsx("input",{type:"number",step:"0.001",min:"0",value:v.foundationUnitsPerWaxKg,onChange:p=>_({...v,foundationUnitsPerWaxKg:p.target.value})})]}),i.jsxs("label",{children:["Закръгляне",i.jsxs("select",{value:v.exchangeRoundingMode,onChange:p=>_({...v,exchangeRoundingMode:p.target.value}),children:[i.jsx("option",{value:"FLOOR",children:"надолу"}),i.jsx("option",{value:"ROUND",children:"нормално"}),i.jsx("option",{value:"CEIL",children:"нагоре"}),i.jsx("option",{value:"NONE",children:"без закръгляне"})]})]})]}),i.jsx("div",{className:"storage-hint",children:"Пример: ако за 1 кг восък се дават 12 основи, въведете 12."})]}),"                  ",i.jsxs("label",{className:"wide-field",children:["Бележки",i.jsx("textarea",{value:v.notes,onChange:p=>_({...v,notes:p.target.value})})]}),i.jsx("button",{className:"erp-btn primary",disabled:b,children:ge.save})]})]}),i.jsx(Bo,{items:[["Артикули",String(pn.length),"показани"],["Ниска наличност",String(Bt.low),"за проверка"],["Стойност склад",J(Bt.stockValue),bt(Bt.stockValue)],["Продажна стойност",J(Bt.sellValue),bt(Bt.sellValue)]]}),i.jsx("div",{className:"storage-table-wrap",children:i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Код"}),i.jsx("th",{children:"Продукт"}),i.jsx("th",{children:"Категория"}),i.jsx("th",{children:"Наличност"}),i.jsx("th",{children:"Дост."}),i.jsx("th",{children:"Прод."}),i.jsx("th",{children:"Стойност"})]})}),i.jsx("tbody",{children:pn.map(p=>i.jsxs("tr",{className:p.stockStatus==="LOW"?"low":"",onClick:()=>Gr(p),children:[i.jsx("td",{children:p.sku||p.id}),i.jsxs("td",{children:[i.jsx("strong",{children:p.name}),i.jsx("small",{children:p.active?"Активен":"Спрян"})]}),i.jsx("td",{children:$o[p.category]}),i.jsxs("td",{children:[p.stockQuantity," ",Ur[p.unit],i.jsxs("small",{children:["мин. ",p.minStockQuantity]})]}),i.jsx("td",{children:J(p.costPriceEur)}),i.jsx("td",{children:J(p.sellPriceEur)}),i.jsx("td",{children:J(p.inventoryValueEur||0)})]},p.id))})]})})]}),g==="reports"&&G&&i.jsx(tg,{reports:G,reportTab:un,setReportTab:Vr,reportRange:At,setReportRange:Qo}),g==="expenses"&&i.jsxs("section",{className:"erp-grid",children:[i.jsxs("form",{className:"erp-card",onSubmit:Xo,children:[i.jsx("h2",{children:"Нов разход"}),i.jsxs("label",{children:["Дата",i.jsx("input",{type:"date",value:Ue.expenseDate,onChange:p=>ht({...Ue,expenseDate:p.target.value})})]}),i.jsxs("label",{children:["Категория",i.jsx("select",{value:Ue.category,onChange:p=>ht({...Ue,category:p.target.value}),children:Object.entries(fs).map(([p,$])=>i.jsx("option",{value:p,children:$},p))})]}),i.jsxs("label",{children:["Сума EUR",i.jsx("input",{type:"number",step:"0.01",min:"0",value:Ue.amountEur,onChange:p=>ht({...Ue,amountEur:p.target.value}),required:!0})]}),i.jsxs("label",{children:["Плащане",i.jsx("select",{value:Ue.paymentMethod,onChange:p=>ht({...Ue,paymentMethod:p.target.value}),children:Object.entries(ls).map(([p,$])=>i.jsx("option",{value:p,children:$},p))})]}),i.jsxs("label",{children:["Доставчик",i.jsx("input",{value:Ue.supplier,onChange:p=>ht({...Ue,supplier:p.target.value})})]}),i.jsxs("label",{children:["Бележка",i.jsx("textarea",{value:Ue.notes,onChange:p=>ht({...Ue,notes:p.target.value})})]}),i.jsx("button",{className:"erp-btn primary",disabled:b,children:"Запази разход"})]}),i.jsx(Uo,{title:"Справка разходи",children:G==null?void 0:G.expensesByCategory.map(p=>i.jsx(ca,{title:fs[p.category],meta:J(p._sum.amountEur||0)},p.category))})]}),g==="wax"&&i.jsxs("section",{className:"wax-page",children:[i.jsx(Bo,{items:[["Наличен восък",`${Number(ue.waxStockKg||0).toFixed(3)} кг`,"текущ склад"],["Стойност във восък",J(ue.waxInventoryValueEur),`по ${J(Oe.defaultBuyPriceEur)} / кг`],["Дадени основи",`${Number(ue.totalFoundationGivenKg||0).toFixed(0)} бр.`,J(ue.totalFoundationGivenValueEur)],["Баланс сделки",J(ue.balanceEur),`${ue.transactionCount} сделки`]]}),i.jsxs("section",{className:"erp-grid",children:[i.jsx("div",{className:"wax-form-stack",children:i.jsxs("form",{className:"erp-card",onSubmit:Un,children:[i.jsx("h2",{children:Ut?"Редакция на восъчна сделка":"Нова восъчна сделка"}),i.jsxs("div",{className:"mode-switch",children:[i.jsx("button",{type:"button",className:ee.transactionType==="BUY"?"active":"",onClick:()=>Zr("BUY"),children:"Купувам восък"}),i.jsx("button",{type:"button",className:ee.transactionType==="SWAP"?"active":"",onClick:()=>Zr("SWAP"),children:"Смяна основи за восък"})]}),i.jsxs("label",{children:["Дата",i.jsx("input",{type:"date",value:ee.transactionDate,onChange:p=>Xe({...ee,transactionDate:p.target.value})})]}),i.jsxs("div",{className:"two",children:[i.jsxs("label",{children:["Приет восък кг",i.jsx("input",{type:"number",step:"0.001",min:"0",value:ee.waxReceivedKg,onChange:p=>Xe({...ee,waxReceivedKg:p.target.value})})]}),i.jsxs("label",{children:["Цена восък EUR/кг",i.jsx("input",{type:"number",step:"0.01",min:"0",value:ee.waxPricePerKgEur,onChange:p=>Xe({...ee,waxPricePerKgEur:p.target.value})})]})]}),lt&&i.jsxs(i.Fragment,{children:[i.jsxs("label",{children:["Тип основи от склада",i.jsxs("select",{value:ee.foundationProductId,onChange:p=>{const $=Bn.find(Te=>String(Te.id)===p.target.value);Xe({...ee,foundationProductId:p.target.value,foundationPricePerKgEur:$?String($.sellPriceEur):ee.foundationPricePerKgEur})},required:!0,children:[i.jsx("option",{value:"",children:"Избери основи"}),Bn.map(p=>i.jsxs("option",{value:p.id,children:[p.name," | ",Number(p.stockQuantity).toFixed(0)," бр. | ",J(p.sellPriceEur)]},p.id))]})]}),i.jsxs("div",{className:"two",children:[i.jsxs("label",{children:["Дадени основи ",Zo,i.jsx("input",{type:"number",step:ya,min:"0",value:ee.foundationGivenKg,onChange:p=>{$t(!0),Xe({...ee,foundationGivenKg:p.target.value})}})]}),i.jsxs("label",{children:["Цена основи EUR/",Zo,i.jsx("input",{type:"number",step:"0.01",min:"0",value:ee.foundationPricePerKgEur,onChange:p=>Xe({...ee,foundationPricePerKgEur:p.target.value})})]})]}),i.jsxs("label",{children:["Доплатено от клиента EUR",i.jsx("input",{type:"number",step:"0.01",min:"0",value:ee.extraPaymentEur,onChange:p=>Xe({...ee,extraPaymentEur:p.target.value})})]}),at&&i.jsxs("div",{className:"storage-hint",children:[Number(ee.waxReceivedKg||0)," кг восък × ",at.foundationUnitsPerWaxKg," осн./кг = ",to," основи",dr&&i.jsxs(i.Fragment,{children:[i.jsx("br",{}),"Количеството е променено ръчно."]})]})]}),ee.transactionType==="BUY"&&i.jsxs("label",{className:"check",children:[i.jsx("input",{type:"checkbox",checked:ee.createExpense,onChange:p=>Xe({...ee,createExpense:p.target.checked})})," Създай разход за покупката на восък"]}),i.jsxs("label",{children:["Бележка",i.jsx("textarea",{value:ee.notes,onChange:p=>Xe({...ee,notes:p.target.value})})]}),i.jsxs("div",{className:"form-total",children:["Стойност восък ",J(pr)," | Основи ",J(no)," | ",ti]}),i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"erp-btn primary",disabled:b,children:Ut?"Запази промени":"Запази сделка"}),Ut&&i.jsx("button",{type:"button",className:"erp-btn ghost",onClick:()=>fr(),children:ge.cancel})]})]})}),i.jsx(Uo,{title:"Восъчни сделки",children:ne.map(p=>i.jsx(Jh,{item:p,onEdit:eo,onCancel:$n},p.id))})]})]}),g==="wax-ledger"&&i.jsx(ng,{waxSummary:ue,waxTransactions:ne}),g==="settings"&&i.jsx(rg,{waxSettingsForm:cr,setWaxSettingsForm:An,submitWaxSettings:Jo,loading:b})]}),i.jsx("style",{children:dd})]}):i.jsxs("div",{className:"erp-login",children:[i.jsx(wt,{title:"ERP вход | SakiMed",description:"Вход в административната ERP система на SakiMed.",path:"/admin",noindex:!0}),i.jsxs("form",{className:"login-box",onSubmit:qr,children:[i.jsx("h1",{children:"SakiMed ERP"}),i.jsxs("label",{children:["Имейл",i.jsx("input",{type:"email",value:f.email,onChange:p=>m({...f,email:p.target.value}),required:!0})]}),i.jsxs("label",{children:["Парола",i.jsx("input",{type:"password",value:f.password,onChange:p=>m({...f,password:p.target.value}),required:!0})]}),S&&i.jsx("p",{className:"status error",children:S}),i.jsx("button",{className:"erp-btn primary",disabled:b,children:b?"Влизане...":"Вход"})]}),i.jsx("style",{children:dd})]})}function Bo({items:o}){return i.jsx("section",{className:"metric-grid",children:o.map(([s,u,d])=>i.jsxs("div",{children:[i.jsx("span",{children:s}),i.jsx("strong",{children:u}),i.jsx("small",{children:d})]},s))})}function Uo({title:o,children:s}){return i.jsxs("section",{className:"erp-panel",children:[i.jsx("h2",{children:o}),i.jsx("div",{className:"panel-list",children:s})]})}function ca({title:o,meta:s}){return i.jsxs("div",{className:"erp-row",children:[i.jsx("strong",{children:o}),i.jsx("span",{children:s})]})}function Es({title:o,meta:s,children:u}){return i.jsxs("div",{className:"row-with-action",children:[i.jsx(ca,{title:o,meta:s}),i.jsx("div",{className:"mini-actions",children:u})]})}function hd({title:o,count:s,expanded:u,onToggle:d,children:f}){return i.jsxs("section",{className:`sales-section ${u?"expanded":""}`,children:[i.jsxs("button",{type:"button",className:"sales-section-head",onClick:d,children:[i.jsx("span",{children:o}),i.jsx("small",{children:s})]}),u&&i.jsx("div",{className:"sales-section-body",children:f})]})}function Xh({sale:o,onEdit:s,onCancel:u}){return i.jsxs(Es,{title:o.product.name,meta:`${new Date(o.saleDate).toLocaleDateString("bg-BG")} | ${o.quantity} | ${J(o.totalEur)} | печалба ${J(o.profitEur)}`,children:[i.jsx("button",{className:"mini-btn",onClick:()=>s(o),children:ge.edit}),i.jsx("button",{className:"mini-btn danger",onClick:()=>u(o),children:ge.delete})]})}function Jh({item:o,onEdit:s,onCancel:u}){const f=Number(o.foundationGivenKg).toFixed(0);return i.jsxs(Es,{title:`${o.transactionType==="SWAP"?"Смяна":"Покупка"} #${o.id} | ${new Date(o.transactionDate).toLocaleDateString("bg-BG")}`,meta:`восък ${o.waxReceivedKg} кг | основи ${f} бр. | баланс ${J(o.balanceEur)}`,children:[i.jsx("button",{className:"mini-btn",onClick:()=>s(o),children:ge.edit}),i.jsx("button",{className:"mini-btn danger",onClick:()=>u(o),children:ge.delete})]})}function Zh({value:o,labels:s,onChange:u}){return i.jsxs("div",{className:"field-group",children:[i.jsx("span",{className:"field-title",children:"Плащане"}),i.jsx("div",{className:"payment-pills",children:Object.entries(s).map(([d,f])=>i.jsx("button",{type:"button",className:o===d?"active":"",onClick:()=>u(d),children:f},d))})]})}function eg({file:o,rows:s,summary:u,onFile:d,onPreview:f,onImport:m,loading:g}){return i.jsxs("section",{className:"erp-card import-card",children:[i.jsx("h2",{children:"Импорт на продукти"}),i.jsxs("div",{className:"import-controls",children:[i.jsxs("label",{children:["CSV или Excel файл",i.jsx("input",{type:"file",accept:".csv,.xlsx,.xls",onChange:j=>{var S;return d(((S=j.target.files)==null?void 0:S[0])||null)}})]}),i.jsx("button",{type:"button",className:"erp-btn ghost",disabled:!o||g,onClick:f,children:"Преглед"}),i.jsx("button",{type:"button",className:"erp-btn primary",disabled:!o||g||u.invalidRows>0,onClick:m,children:"Импорт / обновяване"})]}),u.totalRows>0&&i.jsxs("div",{className:"storage-hint",children:["Редове: ",u.totalRows," | валидни: ",u.validRows," | грешки: ",u.invalidRows]}),s.length>0&&i.jsx("div",{className:"import-preview",children:s.slice(0,8).map(j=>i.jsxs("div",{className:j.errors.length?"import-row invalid":"import-row",children:[i.jsxs("strong",{children:[j.rowNumber,". ",j.name||"Без име"]}),i.jsxs("span",{children:[j.sku||"-"," | ",$o[j.category]||j.category," | ",j.stockQuantity," ",Ur[j.unit]||j.unit]}),j.errors.length>0&&i.jsx("small",{children:j.errors.join(" ")})]},j.rowNumber))})]})}function tg({reports:o,reportTab:s,setReportTab:u,reportRange:d,setReportRange:f}){return i.jsxs("section",{className:"report-stack",children:[i.jsxs("div",{className:"filters",children:[i.jsxs("label",{children:["От дата",i.jsx("input",{type:"date",value:d.from,onChange:m=>f({...d,from:m.target.value})})]}),i.jsxs("label",{children:["До дата",i.jsx("input",{type:"date",value:d.to,onChange:m=>f({...d,to:m.target.value})})]}),i.jsx("a",{className:"erp-btn primary",href:Gt(`/api/admin/erp/reports.csv?from=${d.from}&to=${d.to}`),children:"CSV export"})]}),i.jsx(Bo,{items:[["Оборот",J(o.totals.turnoverEur),bt(o.totals.turnoverEur)],["Брутна печалба",J(o.totals.grossProfitEur),bt(o.totals.grossProfitEur)],["Разходи",J(o.totals.expensesEur),bt(o.totals.expensesEur)],["Нетна печалба",J(o.totals.netProfitEur),bt(o.totals.netProfitEur)]]}),i.jsx("nav",{className:"report-tabs",children:[["monthly","Месечни"],["daily","Дневни"],["products","Продадени продукти"],["expenses","Разходи"],["low-stock","Ниска наличност"]].map(([m,g])=>i.jsx("button",{className:s===m?"active":"",onClick:()=>u(m),children:g},m))}),s==="monthly"&&i.jsx(ar,{headers:["Месец","Оборот","Печалба","Разходи","Нетна печалба","Количество","Продажби"],rows:o.monthly.map(m=>[new Date(m.month).toLocaleDateString("bg-BG",{month:"long",year:"numeric"}),J(m.turnover_eur),J(m.profit_eur),J(m.expenses_eur),J(Number(m.profit_eur||0)-Number(m.expenses_eur||0)),String(m.sold_quantity||0),String(m.sold_lines||0)])}),s==="daily"&&i.jsx(ar,{headers:["Дата","Оборот","Печалба","Разходи","Количество"],rows:o.daily.map(m=>[new Date(m.day).toLocaleDateString("bg-BG"),J(m.turnover_eur),J(m.profit_eur),J(m.expenses_eur),String(m.sold_quantity||0)])}),s==="products"&&i.jsx(ar,{headers:["Продукт","Количество","Оборот","Печалба"],rows:o.salesByProduct.map(m=>[m.product_name,String(m.quantity),J(m.turnover_eur),J(m.profit_eur)])}),s==="expenses"&&i.jsx(ar,{headers:["Категория","Сума EUR","Сума BGN"],rows:o.expensesByCategory.map(m=>[fs[m.category],J(m._sum.amountEur||0),bt(m._sum.amountEur||0)])}),s==="low-stock"&&i.jsx(ar,{headers:["Продукт","Категория","Наличност","Минимум"],rows:o.lowStockProducts.map(m=>[m.name,$o[m.category],`${m.stockQuantity} ${Ur[m.unit]}`,String(m.minStockQuantity)])})]})}function ng({waxSummary:o,waxTransactions:s}){return i.jsxs("section",{className:"report-stack",children:[i.jsx("h2",{children:"Восъчен отчет"}),i.jsx(Bo,{items:[["Наличен восък",`${Number(o.waxStockKg||0).toFixed(3)} кг`,J(o.waxInventoryValueEur)],["Купен восък",J(o.totalWaxBoughtValueEur),"стойност сделки"],["Дадени основи",`${Number(o.totalFoundationGivenKg||0).toFixed(0)} бр.`,J(o.totalFoundationGivenValueEur)],["Баланс",J(o.balanceEur),`${o.transactionCount} сделки`]]}),i.jsx(ar,{headers:["Дата","Тип","Номер","Восък кг","Основи","Стойност восък","Баланс"],rows:s.map(u=>{const f=Number(u.foundationGivenKg).toFixed(0);return[new Date(u.transactionDate).toLocaleDateString("bg-BG"),u.transactionType==="SWAP"?"Смяна":"Покупка",`#${u.id}`,String(u.waxReceivedKg),`${f} бр.`,J(u.waxValueEur),J(u.balanceEur)]})})]})}function rg({waxSettingsForm:o,setWaxSettingsForm:s,submitWaxSettings:u,loading:d}){return i.jsx("section",{className:"settings-page",children:i.jsxs("form",{className:"erp-card",onSubmit:u,children:[i.jsx("h2",{children:"Общи настройки"}),i.jsx("div",{className:"settings-grid",children:i.jsxs("label",{children:["Цена изкупуване восък EUR/кг",i.jsx("input",{type:"number",step:"0.01",min:"0",value:o.defaultBuyPriceEur,onChange:f=>s({defaultBuyPriceEur:f.target.value})})]})}),i.jsx("button",{className:"erp-btn primary",disabled:d,children:"Запази настройки"})]})})}function ar({headers:o,rows:s}){return i.jsx("div",{className:"report-table-wrap",children:i.jsxs("table",{children:[i.jsx("thead",{children:i.jsx("tr",{children:o.map(u=>i.jsx("th",{children:u},u))})}),i.jsxs("tbody",{children:[s.length===0&&i.jsx("tr",{children:i.jsx("td",{colSpan:o.length,children:ge.noRows})}),s.map((u,d)=>i.jsx("tr",{children:u.map((f,m)=>i.jsx("td",{"data-label":o[m],children:f},`${d}-${m}`))},d))]})]})})}function og(){const{slug:o}=_d(),[s,u]=x.useState(null),[d,f]=x.useState(!0),[m,g]=x.useState("");return x.useEffect(()=>{async function j(){try{const S=await fetch(Gt(`/api/landing-pages/${o}`));if(!S.ok)throw new Error("Страницата не е намерена.");u(await S.json())}catch(S){g(S instanceof Error?S.message:"Възникна грешка.")}finally{f(!1)}}j()},[o]),d?i.jsx("div",{className:"container",style:{padding:"3rem 0"},children:"Зареждане..."}):m||!s?i.jsxs("div",{className:"container",style:{padding:"3rem 0"},children:[i.jsx(wt,{title:"Страницата не е намерена | САКИ",description:"Тази специална страница не е налична.",path:`/special/${o??""}`,noindex:!0}),i.jsx("p",{children:m||"Страницата не е намерена."}),i.jsx(Qt,{to:"/products",className:"btn btn-primary",children:"Към продуктите"})]}):i.jsxs("div",{className:"special-page",children:[i.jsx(wt,{title:s.seoTitle||`${s.title} | САКИ`,description:s.seoDescription||s.heroSubtitle||"Специална страница от пчеларски магазин САКИ.",path:`/special/${s.slug}`,image:s.heroImage||void 0}),i.jsxs("section",{className:"special-hero",children:[s.heroImage&&i.jsx("img",{src:pa(s.heroImage),alt:s.heroTitle}),i.jsxs("div",{className:"container special-hero-content",children:[i.jsx("h1",{children:s.heroTitle}),s.heroSubtitle&&i.jsx("p",{children:s.heroSubtitle}),s.ctaText&&s.ctaLink&&i.jsx(Qt,{to:s.ctaLink,className:"btn btn-primary",children:s.ctaText})]})]}),i.jsx("section",{className:"container special-sections",children:s.sections.map((j,S)=>i.jsxs("article",{className:"special-section",children:[j.image&&i.jsx("img",{src:pa(j.image),alt:j.title||s.title}),i.jsxs("div",{children:[j.title&&i.jsx("h2",{children:j.title}),j.body&&i.jsx("p",{children:j.body})]})]},`${j.title}-${S}`))}),i.jsx("style",{children:`
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
      `})]})}function ig(){return i.jsx(vh,{children:i.jsx(hh,{children:i.jsxs(oh,{children:[i.jsx(wh,{}),i.jsx("main",{children:i.jsxs(zm,{children:[i.jsx(In,{path:"/",element:i.jsx(Uh,{})}),i.jsx(In,{path:"/products",element:i.jsx(Bh,{})}),i.jsx(In,{path:"/products/:id",element:i.jsx(Wh,{})}),i.jsx(In,{path:"/special/:slug",element:i.jsx(og,{})}),i.jsx(In,{path:"/cart",element:i.jsx(Hh,{})}),i.jsx(In,{path:"/checkout",element:i.jsx(qh,{})}),i.jsx(In,{path:"/admin",element:i.jsx(Yh,{})})]})}),i.jsx(kh,{})]})})})}Ad.initialize("G-D9FP0ZFK1S");Dp.createRoot(document.getElementById("root")).render(i.jsx(x.StrictMode,{children:i.jsx(ig,{})}));

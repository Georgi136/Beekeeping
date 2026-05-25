var kp=Object.defineProperty;var jp=(a,s,u)=>s in a?kp(a,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):a[s]=u;var Ce=(a,s,u)=>jp(a,typeof s!="symbol"?s+"":s,u);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function u(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(p){if(p.ep)return;p.ep=!0;const h=u(p);fetch(p.href,h)}})();var Vl={exports:{}},_o={},Hl={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc;function Sp(){if(Uc)return se;Uc=1;var a=Symbol.for("react.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),v=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),C=Symbol.iterator;function _(j){return j===null||typeof j!="object"?null:(j=C&&j[C]||j["@@iterator"],typeof j=="function"?j:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,O={};function I(j,R,ie){this.props=j,this.context=R,this.refs=O,this.updater=ie||W}I.prototype.isReactComponent={},I.prototype.setState=function(j,R){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,R,"setState")},I.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function M(){}M.prototype=I.prototype;function Y(j,R,ie){this.props=j,this.context=R,this.refs=O,this.updater=ie||W}var Z=Y.prototype=new M;Z.constructor=Y,F(Z,I.prototype),Z.isPureReactComponent=!0;var H=Array.isArray,re=Object.prototype.hasOwnProperty,de={current:null},ve={key:!0,ref:!0,__self:!0,__source:!0};function le(j,R,ie){var ae,ue={},ce=null,he=null;if(R!=null)for(ae in R.ref!==void 0&&(he=R.ref),R.key!==void 0&&(ce=""+R.key),R)re.call(R,ae)&&!ve.hasOwnProperty(ae)&&(ue[ae]=R[ae]);var fe=arguments.length-2;if(fe===1)ue.children=ie;else if(1<fe){for(var ke=Array(fe),oe=0;oe<fe;oe++)ke[oe]=arguments[oe+2];ue.children=ke}if(j&&j.defaultProps)for(ae in fe=j.defaultProps,fe)ue[ae]===void 0&&(ue[ae]=fe[ae]);return{$$typeof:a,type:j,key:ce,ref:he,props:ue,_owner:de.current}}function $e(j,R){return{$$typeof:a,type:j.type,key:R,ref:j.ref,props:j.props,_owner:j._owner}}function Ye(j){return typeof j=="object"&&j!==null&&j.$$typeof===a}function mt(j){var R={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(ie){return R[ie]})}var Te=/\/+/g;function We(j,R){return typeof j=="object"&&j!==null&&j.key!=null?mt(""+j.key):R.toString(36)}function Je(j,R,ie,ae,ue){var ce=typeof j;(ce==="undefined"||ce==="boolean")&&(j=null);var he=!1;if(j===null)he=!0;else switch(ce){case"string":case"number":he=!0;break;case"object":switch(j.$$typeof){case a:case s:he=!0}}if(he)return he=j,ue=ue(he),j=ae===""?"."+We(he,0):ae,H(ue)?(ie="",j!=null&&(ie=j.replace(Te,"$&/")+"/"),Je(ue,R,ie,"",function(oe){return oe})):ue!=null&&(Ye(ue)&&(ue=$e(ue,ie+(!ue.key||he&&he.key===ue.key?"":(""+ue.key).replace(Te,"$&/")+"/")+j)),R.push(ue)),1;if(he=0,ae=ae===""?".":ae+":",H(j))for(var fe=0;fe<j.length;fe++){ce=j[fe];var ke=ae+We(ce,fe);he+=Je(ce,R,ie,ke,ue)}else if(ke=_(j),typeof ke=="function")for(j=ke.call(j),fe=0;!(ce=j.next()).done;)ce=ce.value,ke=ae+We(ce,fe++),he+=Je(ce,R,ie,ke,ue);else if(ce==="object")throw R=String(j),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return he}function ze(j,R,ie){if(j==null)return j;var ae=[],ue=0;return Je(j,ae,"","",function(ce){return R.call(ie,ce,ue++)}),ae}function Me(j){if(j._status===-1){var R=j._result;R=R(),R.then(function(ie){(j._status===0||j._status===-1)&&(j._status=1,j._result=ie)},function(ie){(j._status===0||j._status===-1)&&(j._status=2,j._result=ie)}),j._status===-1&&(j._status=0,j._result=R)}if(j._status===1)return j._result.default;throw j._result}var ye={current:null},A={transition:null},G={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:A,ReactCurrentOwner:de};function $(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:ze,forEach:function(j,R,ie){ze(j,function(){R.apply(this,arguments)},ie)},count:function(j){var R=0;return ze(j,function(){R++}),R},toArray:function(j){return ze(j,function(R){return R})||[]},only:function(j){if(!Ye(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},se.Component=I,se.Fragment=u,se.Profiler=p,se.PureComponent=Y,se.StrictMode=d,se.Suspense=k,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,se.act=$,se.cloneElement=function(j,R,ie){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var ae=F({},j.props),ue=j.key,ce=j.ref,he=j._owner;if(R!=null){if(R.ref!==void 0&&(ce=R.ref,he=de.current),R.key!==void 0&&(ue=""+R.key),j.type&&j.type.defaultProps)var fe=j.type.defaultProps;for(ke in R)re.call(R,ke)&&!ve.hasOwnProperty(ke)&&(ae[ke]=R[ke]===void 0&&fe!==void 0?fe[ke]:R[ke])}var ke=arguments.length-2;if(ke===1)ae.children=ie;else if(1<ke){fe=Array(ke);for(var oe=0;oe<ke;oe++)fe[oe]=arguments[oe+2];ae.children=fe}return{$$typeof:a,type:j.type,key:ue,ref:ce,props:ae,_owner:he}},se.createContext=function(j){return j={$$typeof:v,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:h,_context:j},j.Consumer=j},se.createElement=le,se.createFactory=function(j){var R=le.bind(null,j);return R.type=j,R},se.createRef=function(){return{current:null}},se.forwardRef=function(j){return{$$typeof:S,render:j}},se.isValidElement=Ye,se.lazy=function(j){return{$$typeof:P,_payload:{_status:-1,_result:j},_init:Me}},se.memo=function(j,R){return{$$typeof:w,type:j,compare:R===void 0?null:R}},se.startTransition=function(j){var R=A.transition;A.transition={};try{j()}finally{A.transition=R}},se.unstable_act=$,se.useCallback=function(j,R){return ye.current.useCallback(j,R)},se.useContext=function(j){return ye.current.useContext(j)},se.useDebugValue=function(){},se.useDeferredValue=function(j){return ye.current.useDeferredValue(j)},se.useEffect=function(j,R){return ye.current.useEffect(j,R)},se.useId=function(){return ye.current.useId()},se.useImperativeHandle=function(j,R,ie){return ye.current.useImperativeHandle(j,R,ie)},se.useInsertionEffect=function(j,R){return ye.current.useInsertionEffect(j,R)},se.useLayoutEffect=function(j,R){return ye.current.useLayoutEffect(j,R)},se.useMemo=function(j,R){return ye.current.useMemo(j,R)},se.useReducer=function(j,R,ie){return ye.current.useReducer(j,R,ie)},se.useRef=function(j){return ye.current.useRef(j)},se.useState=function(j){return ye.current.useState(j)},se.useSyncExternalStore=function(j,R,ie){return ye.current.useSyncExternalStore(j,R,ie)},se.useTransition=function(){return ye.current.useTransition()},se.version="18.3.1",se}var Bc;function os(){return Bc||(Bc=1,Hl.exports=Sp()),Hl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc;function Ep(){if(Wc)return _o;Wc=1;var a=os(),s=Symbol.for("react.element"),u=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,p=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function v(S,k,w){var P,C={},_=null,W=null;w!==void 0&&(_=""+w),k.key!==void 0&&(_=""+k.key),k.ref!==void 0&&(W=k.ref);for(P in k)d.call(k,P)&&!h.hasOwnProperty(P)&&(C[P]=k[P]);if(S&&S.defaultProps)for(P in k=S.defaultProps,k)C[P]===void 0&&(C[P]=k[P]);return{$$typeof:s,type:S,key:_,ref:W,props:C,_owner:p.current}}return _o.Fragment=u,_o.jsx=v,_o.jsxs=v,_o}var Vc;function bp(){return Vc||(Vc=1,Vl.exports=Ep()),Vl.exports}var o=bp(),y=os(),Yi={},ql={exports:{}},pt={},Kl={exports:{}},Ql={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc;function Cp(){return Hc||(Hc=1,(function(a){function s(A,G){var $=A.length;A.push(G);e:for(;0<$;){var j=$-1>>>1,R=A[j];if(0<p(R,G))A[j]=G,A[$]=R,$=j;else break e}}function u(A){return A.length===0?null:A[0]}function d(A){if(A.length===0)return null;var G=A[0],$=A.pop();if($!==G){A[0]=$;e:for(var j=0,R=A.length,ie=R>>>1;j<ie;){var ae=2*(j+1)-1,ue=A[ae],ce=ae+1,he=A[ce];if(0>p(ue,$))ce<R&&0>p(he,ue)?(A[j]=he,A[ce]=$,j=ce):(A[j]=ue,A[ae]=$,j=ae);else if(ce<R&&0>p(he,$))A[j]=he,A[ce]=$,j=ce;else break e}}return G}function p(A,G){var $=A.sortIndex-G.sortIndex;return $!==0?$:A.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var v=Date,S=v.now();a.unstable_now=function(){return v.now()-S}}var k=[],w=[],P=1,C=null,_=3,W=!1,F=!1,O=!1,I=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(A){for(var G=u(w);G!==null;){if(G.callback===null)d(w);else if(G.startTime<=A)d(w),G.sortIndex=G.expirationTime,s(k,G);else break;G=u(w)}}function H(A){if(O=!1,Z(A),!F)if(u(k)!==null)F=!0,Me(re);else{var G=u(w);G!==null&&ye(H,G.startTime-A)}}function re(A,G){F=!1,O&&(O=!1,M(le),le=-1),W=!0;var $=_;try{for(Z(G),C=u(k);C!==null&&(!(C.expirationTime>G)||A&&!mt());){var j=C.callback;if(typeof j=="function"){C.callback=null,_=C.priorityLevel;var R=j(C.expirationTime<=G);G=a.unstable_now(),typeof R=="function"?C.callback=R:C===u(k)&&d(k),Z(G)}else d(k);C=u(k)}if(C!==null)var ie=!0;else{var ae=u(w);ae!==null&&ye(H,ae.startTime-G),ie=!1}return ie}finally{C=null,_=$,W=!1}}var de=!1,ve=null,le=-1,$e=5,Ye=-1;function mt(){return!(a.unstable_now()-Ye<$e)}function Te(){if(ve!==null){var A=a.unstable_now();Ye=A;var G=!0;try{G=ve(!0,A)}finally{G?We():(de=!1,ve=null)}}else de=!1}var We;if(typeof Y=="function")We=function(){Y(Te)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,ze=Je.port2;Je.port1.onmessage=Te,We=function(){ze.postMessage(null)}}else We=function(){I(Te,0)};function Me(A){ve=A,de||(de=!0,We())}function ye(A,G){le=I(function(){A(a.unstable_now())},G)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(A){A.callback=null},a.unstable_continueExecution=function(){F||W||(F=!0,Me(re))},a.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$e=0<A?Math.floor(1e3/A):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_getFirstCallbackNode=function(){return u(k)},a.unstable_next=function(A){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var $=_;_=G;try{return A()}finally{_=$}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(A,G){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var $=_;_=A;try{return G()}finally{_=$}},a.unstable_scheduleCallback=function(A,G,$){var j=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?j+$:j):$=j,A){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=$+R,A={id:P++,callback:G,priorityLevel:A,startTime:$,expirationTime:R,sortIndex:-1},$>j?(A.sortIndex=$,s(w,A),u(k)===null&&A===u(w)&&(O?(M(le),le=-1):O=!0,ye(H,$-j))):(A.sortIndex=R,s(k,A),F||W||(F=!0,Me(re))),A},a.unstable_shouldYield=mt,a.unstable_wrapCallback=function(A){var G=_;return function(){var $=_;_=G;try{return A.apply(this,arguments)}finally{_=$}}}})(Ql)),Ql}var qc;function Np(){return qc||(qc=1,Kl.exports=Cp()),Kl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc;function Pp(){if(Kc)return pt;Kc=1;var a=os(),s=Np();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,p={};function h(e,t){v(e,t),v(e+"Capture",t)}function v(e,t){for(p[e]=t,e=0;e<t.length;e++)d.add(t[e])}var S=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},C={};function _(e){return k.call(C,e)?!0:k.call(P,e)?!1:w.test(e)?C[e]=!0:(P[e]=!0,!1)}function W(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F(e,t,r,n){if(t===null||typeof t>"u"||W(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,r,n,i,l,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=c}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new O(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function Y(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M,Y);I[t]=new O(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M,Y);I[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M,Y);I[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function Z(e,t,r,n){var i=I.hasOwnProperty(t)?I[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(F(t,r,i,n)&&(r=null),n||i===null?_(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var H=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),de=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),$e=Symbol.for("react.profiler"),Ye=Symbol.for("react.provider"),mt=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),We=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),ze=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),A=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=A&&e[A]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,j;function R(e){if(j===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);j=t&&t[1]||""}return`
`+j+e}var ie=!1;function ae(e,t){if(!e||ie)return"";ie=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(N){var n=N}Reflect.construct(e,[],t)}else{try{t.call()}catch(N){n=N}e.call(t.prototype)}else{try{throw Error()}catch(N){n=N}e()}}catch(N){if(N&&n&&typeof N.stack=="string"){for(var i=N.stack.split(`
`),l=n.stack.split(`
`),c=i.length-1,m=l.length-1;1<=c&&0<=m&&i[c]!==l[m];)m--;for(;1<=c&&0<=m;c--,m--)if(i[c]!==l[m]){if(c!==1||m!==1)do if(c--,m--,0>m||i[c]!==l[m]){var g=`
`+i[c].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=c&&0<=m);break}}}finally{ie=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?R(e):""}function ue(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=ae(e.type,!1),e;case 11:return e=ae(e.type.render,!1),e;case 1:return e=ae(e.type,!0),e;default:return""}}function ce(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ve:return"Fragment";case de:return"Portal";case $e:return"Profiler";case le:return"StrictMode";case We:return"Suspense";case Je:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mt:return(e.displayName||"Context")+".Consumer";case Ye:return(e._context.displayName||"Context")+".Provider";case Te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ze:return t=e.displayName||null,t!==null?t:ce(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}function he(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(t);case 8:return t===le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function oe(e){var t=ke(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){n=""+c,l.call(this,c)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ie(e){e._valueTracker||(e._valueTracker=oe(e))}function xe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ke(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function et(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ve(e,t){var r=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function At(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=fe(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ne(e,t){t=t.checked,t!=null&&Z(e,"checked",t,!1)}function He(e,t){ne(e,t);var r=fe(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?tn(e,t.type,r):t.hasOwnProperty("defaultValue")&&tn(e,t.type,fe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $n(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function tn(e,t,r){(t!=="number"||et(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var qe=Array.isArray;function Gt(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+fe(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Un(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function De(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(u(92));if(qe(r)){if(1<r.length)throw Error(u(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:fe(r)}}function kt(e,t){var r=fe(t.value),n=fe(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Fo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var rn,Ao=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(rn=rn||document.createElement("div"),rn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=rn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Yt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$o=["Webkit","ms","Moz","O"];Object.keys(Yt).forEach(function(e){$o.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yt[t]=Yt[e]})});function Wn(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Yt.hasOwnProperty(e)&&Yt[e]?(""+t).trim():t+"px"}function nn(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Wn(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var ua=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vn(e,t){if(t){if(ua[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function Ir(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var on=null;function Hn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qn=null,lr=null,it=null;function Uo(e){if(e=mo(e)){if(typeof qn!="function")throw Error(u(280));var t=e.stateNode;t&&(t=di(t),qn(e.stateNode,e.type,t))}}function an(e){lr?it?it.push(e):it=[e]:lr=e}function sr(){if(lr){var e=lr,t=it;if(it=lr=null,Uo(e),t)for(e=0;e<t.length;e++)Uo(t[e])}}function ln(e,t){return e(t)}function Kn(){}var Dr=!1;function sn(e,t,r){if(Dr)return e(t,r);Dr=!0;try{return ln(e,t,r)}finally{Dr=!1,(lr!==null||it!==null)&&(Kn(),sr())}}function ur(e,t){var r=e.stateNode;if(r===null)return null;var n=di(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(u(231,t,typeof r));return r}var cr=!1;if(S)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){cr=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{cr=!1}function Bo(e,t,r,n,i,l,c,m,g){var N=Array.prototype.slice.call(arguments,3);try{t.apply(r,N)}catch(L){this.onError(L)}}var Fr=!1,un=null,cn=!1,f=null,B={onError:function(e){Fr=!0,un=e}};function we(e,t,r,n,i,l,c,m,g){Fr=!1,un=null,Bo.apply(B,arguments)}function ht(e,t,r,n,i,l,c,m,g){if(we.apply(this,arguments),Fr){if(Fr){var N=un;Fr=!1,un=null}else throw Error(u(198));cn||(cn=!0,f=N)}}function $t(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function dn(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qn(e){if($t(e)!==e)throw Error(u(188))}function Wo(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(u(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===r)return Qn(i),e;if(l===n)return Qn(i),t;l=l.sibling}throw Error(u(188))}if(r.return!==n.return)r=i,n=l;else{for(var c=!1,m=i.child;m;){if(m===r){c=!0,r=i,n=l;break}if(m===n){c=!0,n=i,r=l;break}m=m.sibling}if(!c){for(m=l.child;m;){if(m===r){c=!0,r=l,n=i;break}if(m===n){c=!0,n=l,r=i;break}m=m.sibling}if(!c)throw Error(u(189))}}if(r.alternate!==n)throw Error(u(190))}if(r.tag!==3)throw Error(u(188));return r.stateNode.current===r?e:t}function dr(e){return e=Wo(e),e!==null?fr(e):null}function fr(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fr(e);if(t!==null)return t;e=e.sibling}return null}var Vo=s.unstable_scheduleCallback,hs=s.unstable_cancelCallback,Td=s.unstable_shouldYield,Ld=s.unstable_requestPaint,Oe=s.unstable_now,zd=s.unstable_getCurrentPriorityLevel,ca=s.unstable_ImmediatePriority,gs=s.unstable_UserBlockingPriority,Ho=s.unstable_NormalPriority,Id=s.unstable_LowPriority,vs=s.unstable_IdlePriority,qo=null,Ut=null;function Dd(e){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(qo,e,void 0,(e.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:Md,Od=Math.log,Fd=Math.LN2;function Md(e){return e>>>=0,e===0?32:31-(Od(e)/Fd|0)|0}var Ko=64,Qo=4194304;function Gn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Go(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,l=e.pingedLanes,c=r&268435455;if(c!==0){var m=c&~i;m!==0?n=Gn(m):(l&=c,l!==0&&(n=Gn(l)))}else c=r&~i,c!==0?n=Gn(c):l!==0&&(n=Gn(l));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Rt(t),i=1<<r,n|=e[r],t&=~i;return n}function Ad(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $d(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var c=31-Rt(l),m=1<<c,g=i[c];g===-1?((m&r)===0||(m&n)!==0)&&(i[c]=Ad(m,t)):g<=t&&(e.expiredLanes|=m),l&=~m}}function da(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ys(){var e=Ko;return Ko<<=1,(Ko&4194240)===0&&(Ko=64),e}function fa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Yn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=r}function Ud(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Rt(r),l=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~l}}function pa(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Rt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var ge=0;function xs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ws,ma,ks,js,Ss,ha=!1,Yo=[],pr=null,mr=null,hr=null,Jn=new Map,Xn=new Map,gr=[],Bd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Es(e,t){switch(e){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function Zn(e,t,r,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},t!==null&&(t=mo(t),t!==null&&ma(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Wd(e,t,r,n,i){switch(t){case"focusin":return pr=Zn(pr,e,t,r,n,i),!0;case"dragenter":return mr=Zn(mr,e,t,r,n,i),!0;case"mouseover":return hr=Zn(hr,e,t,r,n,i),!0;case"pointerover":var l=i.pointerId;return Jn.set(l,Zn(Jn.get(l)||null,e,t,r,n,i)),!0;case"gotpointercapture":return l=i.pointerId,Xn.set(l,Zn(Xn.get(l)||null,e,t,r,n,i)),!0}return!1}function bs(e){var t=Mr(e.target);if(t!==null){var r=$t(t);if(r!==null){if(t=r.tag,t===13){if(t=dn(r),t!==null){e.blockedOn=t,Ss(e.priority,function(){ks(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=va(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);on=n,r.target.dispatchEvent(n),on=null}else return t=mo(r),t!==null&&ma(t),e.blockedOn=r,!1;t.shift()}return!0}function Cs(e,t,r){Jo(e)&&r.delete(t)}function Vd(){ha=!1,pr!==null&&Jo(pr)&&(pr=null),mr!==null&&Jo(mr)&&(mr=null),hr!==null&&Jo(hr)&&(hr=null),Jn.forEach(Cs),Xn.forEach(Cs)}function eo(e,t){e.blockedOn===t&&(e.blockedOn=null,ha||(ha=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Vd)))}function to(e){function t(i){return eo(i,e)}if(0<Yo.length){eo(Yo[0],e);for(var r=1;r<Yo.length;r++){var n=Yo[r];n.blockedOn===e&&(n.blockedOn=null)}}for(pr!==null&&eo(pr,e),mr!==null&&eo(mr,e),hr!==null&&eo(hr,e),Jn.forEach(t),Xn.forEach(t),r=0;r<gr.length;r++)n=gr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<gr.length&&(r=gr[0],r.blockedOn===null);)bs(r),r.blockedOn===null&&gr.shift()}var fn=H.ReactCurrentBatchConfig,Xo=!0;function Hd(e,t,r,n){var i=ge,l=fn.transition;fn.transition=null;try{ge=1,ga(e,t,r,n)}finally{ge=i,fn.transition=l}}function qd(e,t,r,n){var i=ge,l=fn.transition;fn.transition=null;try{ge=4,ga(e,t,r,n)}finally{ge=i,fn.transition=l}}function ga(e,t,r,n){if(Xo){var i=va(e,t,r,n);if(i===null)Ia(e,t,n,Zo,r),Es(e,n);else if(Wd(i,e,t,r,n))n.stopPropagation();else if(Es(e,n),t&4&&-1<Bd.indexOf(e)){for(;i!==null;){var l=mo(i);if(l!==null&&ws(l),l=va(e,t,r,n),l===null&&Ia(e,t,n,Zo,r),l===i)break;i=l}i!==null&&n.stopPropagation()}else Ia(e,t,n,null,r)}}var Zo=null;function va(e,t,r,n){if(Zo=null,e=Hn(n),e=Mr(e),e!==null)if(t=$t(e),t===null)e=null;else if(r=t.tag,r===13){if(e=dn(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zo=e,null}function Ns(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zd()){case ca:return 1;case gs:return 4;case Ho:case Id:return 16;case vs:return 536870912;default:return 16}default:return 16}}var vr=null,ya=null,ei=null;function Ps(){if(ei)return ei;var e,t=ya,r=t.length,n,i="value"in vr?vr.value:vr.textContent,l=i.length;for(e=0;e<r&&t[e]===i[e];e++);var c=r-e;for(n=1;n<=c&&t[r-n]===i[l-n];n++);return ei=i.slice(e,1<n?1-n:void 0)}function ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ri(){return!0}function _s(){return!1}function gt(e){function t(r,n,i,l,c){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(r=e[m],this[m]=r?r(l):l[m]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ri:_s,this.isPropagationStopped=_s,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xa=gt(pn),ro=$({},pn,{view:0,detail:0}),Kd=gt(ro),wa,ka,no,ni=$({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(wa=e.screenX-no.screenX,ka=e.screenY-no.screenY):ka=wa=0,no=e),wa)},movementY:function(e){return"movementY"in e?e.movementY:ka}}),Rs=gt(ni),Qd=$({},ni,{dataTransfer:0}),Gd=gt(Qd),Yd=$({},ro,{relatedTarget:0}),ja=gt(Yd),Jd=$({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xd=gt(Jd),Zd=$({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ef=gt(Zd),tf=$({},pn,{data:0}),Ts=gt(tf),rf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function af(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=of[e])?!!t[e]:!1}function Sa(){return af}var lf=$({},ro,{key:function(e){if(e.key){var t=rf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sa,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sf=gt(lf),uf=$({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ls=gt(uf),cf=$({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sa}),df=gt(cf),ff=$({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),pf=gt(ff),mf=$({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hf=gt(mf),gf=[9,13,27,32],Ea=S&&"CompositionEvent"in window,oo=null;S&&"documentMode"in document&&(oo=document.documentMode);var vf=S&&"TextEvent"in window&&!oo,zs=S&&(!Ea||oo&&8<oo&&11>=oo),Is=" ",Ds=!1;function Os(e,t){switch(e){case"keyup":return gf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function yf(e,t){switch(e){case"compositionend":return Fs(t);case"keypress":return t.which!==32?null:(Ds=!0,Is);case"textInput":return e=t.data,e===Is&&Ds?null:e;default:return null}}function xf(e,t){if(mn)return e==="compositionend"||!Ea&&Os(e,t)?(e=Ps(),ei=ya=vr=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zs&&t.locale!=="ko"?null:t.data;default:return null}}var wf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wf[e.type]:t==="textarea"}function As(e,t,r,n){an(n),t=si(t,"onChange"),0<t.length&&(r=new xa("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var io=null,ao=null;function kf(e){nu(e,0)}function oi(e){var t=xn(e);if(xe(t))return e}function jf(e,t){if(e==="change")return t}var $s=!1;if(S){var ba;if(S){var Ca="oninput"in document;if(!Ca){var Us=document.createElement("div");Us.setAttribute("oninput","return;"),Ca=typeof Us.oninput=="function"}ba=Ca}else ba=!1;$s=ba&&(!document.documentMode||9<document.documentMode)}function Bs(){io&&(io.detachEvent("onpropertychange",Ws),ao=io=null)}function Ws(e){if(e.propertyName==="value"&&oi(ao)){var t=[];As(t,ao,e,Hn(e)),sn(kf,t)}}function Sf(e,t,r){e==="focusin"?(Bs(),io=t,ao=r,io.attachEvent("onpropertychange",Ws)):e==="focusout"&&Bs()}function Ef(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oi(ao)}function bf(e,t){if(e==="click")return oi(t)}function Cf(e,t){if(e==="input"||e==="change")return oi(t)}function Nf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:Nf;function lo(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!k.call(t,i)||!Tt(e[i],t[i]))return!1}return!0}function Vs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hs(e,t){var r=Vs(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Vs(r)}}function qs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ks(){for(var e=window,t=et();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=et(e.document)}return t}function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pf(e){var t=Ks(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&qs(r.ownerDocument.documentElement,r)){if(n!==null&&Na(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,l=Math.min(n.start,i);n=n.end===void 0?l:Math.min(n.end,i),!e.extend&&l>n&&(i=n,n=l,l=i),i=Hs(r,l);var c=Hs(r,n);i&&c&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>n?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _f=S&&"documentMode"in document&&11>=document.documentMode,hn=null,Pa=null,so=null,_a=!1;function Qs(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;_a||hn==null||hn!==et(n)||(n=hn,"selectionStart"in n&&Na(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),so&&lo(so,n)||(so=n,n=si(Pa,"onSelect"),0<n.length&&(t=new xa("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=hn)))}function ii(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var gn={animationend:ii("Animation","AnimationEnd"),animationiteration:ii("Animation","AnimationIteration"),animationstart:ii("Animation","AnimationStart"),transitionend:ii("Transition","TransitionEnd")},Ra={},Gs={};S&&(Gs=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function ai(e){if(Ra[e])return Ra[e];if(!gn[e])return e;var t=gn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Gs)return Ra[e]=t[r];return e}var Ys=ai("animationend"),Js=ai("animationiteration"),Xs=ai("animationstart"),Zs=ai("transitionend"),eu=new Map,tu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(e,t){eu.set(e,t),h(t,[e])}for(var Ta=0;Ta<tu.length;Ta++){var La=tu[Ta],Rf=La.toLowerCase(),Tf=La[0].toUpperCase()+La.slice(1);yr(Rf,"on"+Tf)}yr(Ys,"onAnimationEnd"),yr(Js,"onAnimationIteration"),yr(Xs,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(Zs,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lf=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function ru(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,ht(n,t,void 0,e),e.currentTarget=null}function nu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var c=n.length-1;0<=c;c--){var m=n[c],g=m.instance,N=m.currentTarget;if(m=m.listener,g!==l&&i.isPropagationStopped())break e;ru(i,m,N),l=g}else for(c=0;c<n.length;c++){if(m=n[c],g=m.instance,N=m.currentTarget,m=m.listener,g!==l&&i.isPropagationStopped())break e;ru(i,m,N),l=g}}}if(cn)throw e=f,cn=!1,f=null,e}function Se(e,t){var r=t[$a];r===void 0&&(r=t[$a]=new Set);var n=e+"__bubble";r.has(n)||(ou(t,e,2,!1),r.add(n))}function za(e,t,r){var n=0;t&&(n|=4),ou(r,e,n,t)}var li="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[li]){e[li]=!0,d.forEach(function(r){r!=="selectionchange"&&(Lf.has(r)||za(r,!1,e),za(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[li]||(t[li]=!0,za("selectionchange",!1,t))}}function ou(e,t,r,n){switch(Ns(t)){case 1:var i=Hd;break;case 4:i=qd;break;default:i=ga}r=i.bind(null,t,r,e),i=void 0,!cr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ia(e,t,r,n,i){var l=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var m=n.stateNode.containerInfo;if(m===i||m.nodeType===8&&m.parentNode===i)break;if(c===4)for(c=n.return;c!==null;){var g=c.tag;if((g===3||g===4)&&(g=c.stateNode.containerInfo,g===i||g.nodeType===8&&g.parentNode===i))return;c=c.return}for(;m!==null;){if(c=Mr(m),c===null)return;if(g=c.tag,g===5||g===6){n=l=c;continue e}m=m.parentNode}}n=n.return}sn(function(){var N=l,L=Hn(r),z=[];e:{var T=eu.get(e);if(T!==void 0){var U=xa,q=e;switch(e){case"keypress":if(ti(r)===0)break e;case"keydown":case"keyup":U=sf;break;case"focusin":q="focus",U=ja;break;case"focusout":q="blur",U=ja;break;case"beforeblur":case"afterblur":U=ja;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=df;break;case Ys:case Js:case Xs:U=Xd;break;case Zs:U=pf;break;case"scroll":U=Kd;break;case"wheel":U=hf;break;case"copy":case"cut":case"paste":U=ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Ls}var K=(t&4)!==0,Fe=!K&&e==="scroll",E=K?T!==null?T+"Capture":null:T;K=[];for(var x=N,b;x!==null;){b=x;var D=b.stateNode;if(b.tag===5&&D!==null&&(b=D,E!==null&&(D=ur(x,E),D!=null&&K.push(fo(x,D,b)))),Fe)break;x=x.return}0<K.length&&(T=new U(T,q,null,r,L),z.push({event:T,listeners:K}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",T&&r!==on&&(q=r.relatedTarget||r.fromElement)&&(Mr(q)||q[Jt]))break e;if((U||T)&&(T=L.window===L?L:(T=L.ownerDocument)?T.defaultView||T.parentWindow:window,U?(q=r.relatedTarget||r.toElement,U=N,q=q?Mr(q):null,q!==null&&(Fe=$t(q),q!==Fe||q.tag!==5&&q.tag!==6)&&(q=null)):(U=null,q=N),U!==q)){if(K=Rs,D="onMouseLeave",E="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(K=Ls,D="onPointerLeave",E="onPointerEnter",x="pointer"),Fe=U==null?T:xn(U),b=q==null?T:xn(q),T=new K(D,x+"leave",U,r,L),T.target=Fe,T.relatedTarget=b,D=null,Mr(L)===N&&(K=new K(E,x+"enter",q,r,L),K.target=b,K.relatedTarget=Fe,D=K),Fe=D,U&&q)t:{for(K=U,E=q,x=0,b=K;b;b=vn(b))x++;for(b=0,D=E;D;D=vn(D))b++;for(;0<x-b;)K=vn(K),x--;for(;0<b-x;)E=vn(E),b--;for(;x--;){if(K===E||E!==null&&K===E.alternate)break t;K=vn(K),E=vn(E)}K=null}else K=null;U!==null&&iu(z,T,U,K,!1),q!==null&&Fe!==null&&iu(z,Fe,q,K,!0)}}e:{if(T=N?xn(N):window,U=T.nodeName&&T.nodeName.toLowerCase(),U==="select"||U==="input"&&T.type==="file")var Q=jf;else if(Ms(T))if($s)Q=Cf;else{Q=Ef;var J=Sf}else(U=T.nodeName)&&U.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(Q=bf);if(Q&&(Q=Q(e,N))){As(z,Q,r,L);break e}J&&J(e,T,N),e==="focusout"&&(J=T._wrapperState)&&J.controlled&&T.type==="number"&&tn(T,"number",T.value)}switch(J=N?xn(N):window,e){case"focusin":(Ms(J)||J.contentEditable==="true")&&(hn=J,Pa=N,so=null);break;case"focusout":so=Pa=hn=null;break;case"mousedown":_a=!0;break;case"contextmenu":case"mouseup":case"dragend":_a=!1,Qs(z,r,L);break;case"selectionchange":if(_f)break;case"keydown":case"keyup":Qs(z,r,L)}var X;if(Ea)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else mn?Os(e,r)&&(te="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(te="onCompositionStart");te&&(zs&&r.locale!=="ko"&&(mn||te!=="onCompositionStart"?te==="onCompositionEnd"&&mn&&(X=Ps()):(vr=L,ya="value"in vr?vr.value:vr.textContent,mn=!0)),J=si(N,te),0<J.length&&(te=new Ts(te,e,null,r,L),z.push({event:te,listeners:J}),X?te.data=X:(X=Fs(r),X!==null&&(te.data=X)))),(X=vf?yf(e,r):xf(e,r))&&(N=si(N,"onBeforeInput"),0<N.length&&(L=new Ts("onBeforeInput","beforeinput",null,r,L),z.push({event:L,listeners:N}),L.data=X))}nu(z,t)})}function fo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function si(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=ur(e,r),l!=null&&n.unshift(fo(e,l,i)),l=ur(e,t),l!=null&&n.push(fo(e,l,i))),e=e.return}return n}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function iu(e,t,r,n,i){for(var l=t._reactName,c=[];r!==null&&r!==n;){var m=r,g=m.alternate,N=m.stateNode;if(g!==null&&g===n)break;m.tag===5&&N!==null&&(m=N,i?(g=ur(r,l),g!=null&&c.unshift(fo(r,g,m))):i||(g=ur(r,l),g!=null&&c.push(fo(r,g,m)))),r=r.return}c.length!==0&&e.push({event:t,listeners:c})}var zf=/\r\n?/g,If=/\u0000|\uFFFD/g;function au(e){return(typeof e=="string"?e:""+e).replace(zf,`
`).replace(If,"")}function ui(e,t,r){if(t=au(t),au(e)!==t&&r)throw Error(u(425))}function ci(){}var Da=null,Oa=null;function Fa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ma=typeof setTimeout=="function"?setTimeout:void 0,Df=typeof clearTimeout=="function"?clearTimeout:void 0,lu=typeof Promise=="function"?Promise:void 0,Of=typeof queueMicrotask=="function"?queueMicrotask:typeof lu<"u"?function(e){return lu.resolve(null).then(e).catch(Ff)}:Ma;function Ff(e){setTimeout(function(){throw e})}function Aa(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),to(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);to(t)}function xr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),Bt="__reactFiber$"+yn,po="__reactProps$"+yn,Jt="__reactContainer$"+yn,$a="__reactEvents$"+yn,Mf="__reactListeners$"+yn,Af="__reactHandles$"+yn;function Mr(e){var t=e[Bt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Jt]||r[Bt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=su(e);e!==null;){if(r=e[Bt])return r;e=su(e)}return t}e=r,r=e.parentNode}return null}function mo(e){return e=e[Bt]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function di(e){return e[po]||null}var Ua=[],wn=-1;function wr(e){return{current:e}}function Ee(e){0>wn||(e.current=Ua[wn],Ua[wn]=null,wn--)}function je(e,t){wn++,Ua[wn]=e.current,e.current=t}var kr={},tt=wr(kr),st=wr(!1),Ar=kr;function kn(e,t){var r=e.type.contextTypes;if(!r)return kr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in r)i[l]=t[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ut(e){return e=e.childContextTypes,e!=null}function fi(){Ee(st),Ee(tt)}function uu(e,t,r){if(tt.current!==kr)throw Error(u(168));je(tt,t),je(st,r)}function cu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(u(108,he(e)||"Unknown",i));return $({},r,n)}function pi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kr,Ar=tt.current,je(tt,e),je(st,st.current),!0}function du(e,t,r){var n=e.stateNode;if(!n)throw Error(u(169));r?(e=cu(e,t,Ar),n.__reactInternalMemoizedMergedChildContext=e,Ee(st),Ee(tt),je(tt,e)):Ee(st),je(st,r)}var Xt=null,mi=!1,Ba=!1;function fu(e){Xt===null?Xt=[e]:Xt.push(e)}function $f(e){mi=!0,fu(e)}function jr(){if(!Ba&&Xt!==null){Ba=!0;var e=0,t=ge;try{var r=Xt;for(ge=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Xt=null,mi=!1}catch(i){throw Xt!==null&&(Xt=Xt.slice(e+1)),Vo(ca,jr),i}finally{ge=t,Ba=!1}}return null}var jn=[],Sn=0,hi=null,gi=0,jt=[],St=0,$r=null,Zt=1,er="";function Ur(e,t){jn[Sn++]=gi,jn[Sn++]=hi,hi=e,gi=t}function pu(e,t,r){jt[St++]=Zt,jt[St++]=er,jt[St++]=$r,$r=e;var n=Zt;e=er;var i=32-Rt(n)-1;n&=~(1<<i),r+=1;var l=32-Rt(t)+i;if(30<l){var c=i-i%5;l=(n&(1<<c)-1).toString(32),n>>=c,i-=c,Zt=1<<32-Rt(t)+i|r<<i|n,er=l+e}else Zt=1<<l|r<<i|n,er=e}function Wa(e){e.return!==null&&(Ur(e,1),pu(e,1,0))}function Va(e){for(;e===hi;)hi=jn[--Sn],jn[Sn]=null,gi=jn[--Sn],jn[Sn]=null;for(;e===$r;)$r=jt[--St],jt[St]=null,er=jt[--St],jt[St]=null,Zt=jt[--St],jt[St]=null}var vt=null,yt=null,be=!1,Lt=null;function mu(e,t){var r=Nt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function hu(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,yt=xr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=$r!==null?{id:Zt,overflow:er}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Nt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,vt=e,yt=null,!0):!1;default:return!1}}function Ha(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qa(e){if(be){var t=yt;if(t){var r=t;if(!hu(e,t)){if(Ha(e))throw Error(u(418));t=xr(r.nextSibling);var n=vt;t&&hu(e,t)?mu(n,r):(e.flags=e.flags&-4097|2,be=!1,vt=e)}}else{if(Ha(e))throw Error(u(418));e.flags=e.flags&-4097|2,be=!1,vt=e}}}function gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function vi(e){if(e!==vt)return!1;if(!be)return gu(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fa(e.type,e.memoizedProps)),t&&(t=yt)){if(Ha(e))throw vu(),Error(u(418));for(;t;)mu(e,t),t=xr(t.nextSibling)}if(gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){yt=xr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=vt?xr(e.stateNode.nextSibling):null;return!0}function vu(){for(var e=yt;e;)e=xr(e.nextSibling)}function En(){yt=vt=null,be=!1}function Ka(e){Lt===null?Lt=[e]:Lt.push(e)}var Uf=H.ReactCurrentBatchConfig;function ho(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(u(309));var n=r.stateNode}if(!n)throw Error(u(147,e));var i=n,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(c){var m=i.refs;c===null?delete m[l]:m[l]=c},t._stringRef=l,t)}if(typeof e!="string")throw Error(u(284));if(!r._owner)throw Error(u(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yu(e){var t=e._init;return t(e._payload)}function xu(e){function t(E,x){if(e){var b=E.deletions;b===null?(E.deletions=[x],E.flags|=16):b.push(x)}}function r(E,x){if(!e)return null;for(;x!==null;)t(E,x),x=x.sibling;return null}function n(E,x){for(E=new Map;x!==null;)x.key!==null?E.set(x.key,x):E.set(x.index,x),x=x.sibling;return E}function i(E,x){return E=Rr(E,x),E.index=0,E.sibling=null,E}function l(E,x,b){return E.index=b,e?(b=E.alternate,b!==null?(b=b.index,b<x?(E.flags|=2,x):b):(E.flags|=2,x)):(E.flags|=1048576,x)}function c(E){return e&&E.alternate===null&&(E.flags|=2),E}function m(E,x,b,D){return x===null||x.tag!==6?(x=Ml(b,E.mode,D),x.return=E,x):(x=i(x,b),x.return=E,x)}function g(E,x,b,D){var Q=b.type;return Q===ve?L(E,x,b.props.children,D,b.key):x!==null&&(x.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Me&&yu(Q)===x.type)?(D=i(x,b.props),D.ref=ho(E,x,b),D.return=E,D):(D=Bi(b.type,b.key,b.props,null,E.mode,D),D.ref=ho(E,x,b),D.return=E,D)}function N(E,x,b,D){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=Al(b,E.mode,D),x.return=E,x):(x=i(x,b.children||[]),x.return=E,x)}function L(E,x,b,D,Q){return x===null||x.tag!==7?(x=Gr(b,E.mode,D,Q),x.return=E,x):(x=i(x,b),x.return=E,x)}function z(E,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ml(""+x,E.mode,b),x.return=E,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case re:return b=Bi(x.type,x.key,x.props,null,E.mode,b),b.ref=ho(E,null,x),b.return=E,b;case de:return x=Al(x,E.mode,b),x.return=E,x;case Me:var D=x._init;return z(E,D(x._payload),b)}if(qe(x)||G(x))return x=Gr(x,E.mode,b,null),x.return=E,x;yi(E,x)}return null}function T(E,x,b,D){var Q=x!==null?x.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return Q!==null?null:m(E,x,""+b,D);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case re:return b.key===Q?g(E,x,b,D):null;case de:return b.key===Q?N(E,x,b,D):null;case Me:return Q=b._init,T(E,x,Q(b._payload),D)}if(qe(b)||G(b))return Q!==null?null:L(E,x,b,D,null);yi(E,b)}return null}function U(E,x,b,D,Q){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(b)||null,m(x,E,""+D,Q);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case re:return E=E.get(D.key===null?b:D.key)||null,g(x,E,D,Q);case de:return E=E.get(D.key===null?b:D.key)||null,N(x,E,D,Q);case Me:var J=D._init;return U(E,x,b,J(D._payload),Q)}if(qe(D)||G(D))return E=E.get(b)||null,L(x,E,D,Q,null);yi(x,D)}return null}function q(E,x,b,D){for(var Q=null,J=null,X=x,te=x=0,Ge=null;X!==null&&te<b.length;te++){X.index>te?(Ge=X,X=null):Ge=X.sibling;var me=T(E,X,b[te],D);if(me===null){X===null&&(X=Ge);break}e&&X&&me.alternate===null&&t(E,X),x=l(me,x,te),J===null?Q=me:J.sibling=me,J=me,X=Ge}if(te===b.length)return r(E,X),be&&Ur(E,te),Q;if(X===null){for(;te<b.length;te++)X=z(E,b[te],D),X!==null&&(x=l(X,x,te),J===null?Q=X:J.sibling=X,J=X);return be&&Ur(E,te),Q}for(X=n(E,X);te<b.length;te++)Ge=U(X,E,te,b[te],D),Ge!==null&&(e&&Ge.alternate!==null&&X.delete(Ge.key===null?te:Ge.key),x=l(Ge,x,te),J===null?Q=Ge:J.sibling=Ge,J=Ge);return e&&X.forEach(function(Tr){return t(E,Tr)}),be&&Ur(E,te),Q}function K(E,x,b,D){var Q=G(b);if(typeof Q!="function")throw Error(u(150));if(b=Q.call(b),b==null)throw Error(u(151));for(var J=Q=null,X=x,te=x=0,Ge=null,me=b.next();X!==null&&!me.done;te++,me=b.next()){X.index>te?(Ge=X,X=null):Ge=X.sibling;var Tr=T(E,X,me.value,D);if(Tr===null){X===null&&(X=Ge);break}e&&X&&Tr.alternate===null&&t(E,X),x=l(Tr,x,te),J===null?Q=Tr:J.sibling=Tr,J=Tr,X=Ge}if(me.done)return r(E,X),be&&Ur(E,te),Q;if(X===null){for(;!me.done;te++,me=b.next())me=z(E,me.value,D),me!==null&&(x=l(me,x,te),J===null?Q=me:J.sibling=me,J=me);return be&&Ur(E,te),Q}for(X=n(E,X);!me.done;te++,me=b.next())me=U(X,E,te,me.value,D),me!==null&&(e&&me.alternate!==null&&X.delete(me.key===null?te:me.key),x=l(me,x,te),J===null?Q=me:J.sibling=me,J=me);return e&&X.forEach(function(wp){return t(E,wp)}),be&&Ur(E,te),Q}function Fe(E,x,b,D){if(typeof b=="object"&&b!==null&&b.type===ve&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case re:e:{for(var Q=b.key,J=x;J!==null;){if(J.key===Q){if(Q=b.type,Q===ve){if(J.tag===7){r(E,J.sibling),x=i(J,b.props.children),x.return=E,E=x;break e}}else if(J.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Me&&yu(Q)===J.type){r(E,J.sibling),x=i(J,b.props),x.ref=ho(E,J,b),x.return=E,E=x;break e}r(E,J);break}else t(E,J);J=J.sibling}b.type===ve?(x=Gr(b.props.children,E.mode,D,b.key),x.return=E,E=x):(D=Bi(b.type,b.key,b.props,null,E.mode,D),D.ref=ho(E,x,b),D.return=E,E=D)}return c(E);case de:e:{for(J=b.key;x!==null;){if(x.key===J)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){r(E,x.sibling),x=i(x,b.children||[]),x.return=E,E=x;break e}else{r(E,x);break}else t(E,x);x=x.sibling}x=Al(b,E.mode,D),x.return=E,E=x}return c(E);case Me:return J=b._init,Fe(E,x,J(b._payload),D)}if(qe(b))return q(E,x,b,D);if(G(b))return K(E,x,b,D);yi(E,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,x!==null&&x.tag===6?(r(E,x.sibling),x=i(x,b),x.return=E,E=x):(r(E,x),x=Ml(b,E.mode,D),x.return=E,E=x),c(E)):r(E,x)}return Fe}var bn=xu(!0),wu=xu(!1),xi=wr(null),wi=null,Cn=null,Qa=null;function Ga(){Qa=Cn=wi=null}function Ya(e){var t=xi.current;Ee(xi),e._currentValue=t}function Ja(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Nn(e,t){wi=e,Qa=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ct=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(Qa!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(wi===null)throw Error(u(308));Cn=e,wi.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var Br=null;function Xa(e){Br===null?Br=[e]:Br.push(e)}function ku(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Xa(t)):(r.next=i.next,i.next=r),t.interleaved=r,tr(e,n)}function tr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Sr=!1;function Za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ju(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Er(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(pe&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,tr(e,r)}return i=n.interleaved,i===null?(t.next=t,Xa(n)):(t.next=i.next,i.next=t),n.interleaved=t,tr(e,r)}function ki(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,pa(e,r)}}function Su(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var c={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?i=l=c:l=l.next=c,r=r.next}while(r!==null);l===null?i=l=t:l=l.next=t}else i=l=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ji(e,t,r,n){var i=e.updateQueue;Sr=!1;var l=i.firstBaseUpdate,c=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var g=m,N=g.next;g.next=null,c===null?l=N:c.next=N,c=g;var L=e.alternate;L!==null&&(L=L.updateQueue,m=L.lastBaseUpdate,m!==c&&(m===null?L.firstBaseUpdate=N:m.next=N,L.lastBaseUpdate=g))}if(l!==null){var z=i.baseState;c=0,L=N=g=null,m=l;do{var T=m.lane,U=m.eventTime;if((n&T)===T){L!==null&&(L=L.next={eventTime:U,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var q=e,K=m;switch(T=t,U=r,K.tag){case 1:if(q=K.payload,typeof q=="function"){z=q.call(U,z,T);break e}z=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=K.payload,T=typeof q=="function"?q.call(U,z,T):q,T==null)break e;z=$({},z,T);break e;case 2:Sr=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,T=i.effects,T===null?i.effects=[m]:T.push(m))}else U={eventTime:U,lane:T,tag:m.tag,payload:m.payload,callback:m.callback,next:null},L===null?(N=L=U,g=z):L=L.next=U,c|=T;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;T=m,m=T.next,T.next=null,i.lastBaseUpdate=T,i.shared.pending=null}}while(!0);if(L===null&&(g=z),i.baseState=g,i.firstBaseUpdate=N,i.lastBaseUpdate=L,t=i.shared.interleaved,t!==null){i=t;do c|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Hr|=c,e.lanes=c,e.memoizedState=z}}function Eu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(u(191,i));i.call(n)}}}var go={},Wt=wr(go),vo=wr(go),yo=wr(go);function Wr(e){if(e===go)throw Error(u(174));return e}function el(e,t){switch(je(yo,t),je(vo,e),je(Wt,go),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bn(t,e)}Ee(Wt),je(Wt,t)}function Pn(){Ee(Wt),Ee(vo),Ee(yo)}function bu(e){Wr(yo.current);var t=Wr(Wt.current),r=Bn(t,e.type);t!==r&&(je(vo,e),je(Wt,r))}function tl(e){vo.current===e&&(Ee(Wt),Ee(vo))}var Ne=wr(0);function Si(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rl=[];function nl(){for(var e=0;e<rl.length;e++)rl[e]._workInProgressVersionPrimary=null;rl.length=0}var Ei=H.ReactCurrentDispatcher,ol=H.ReactCurrentBatchConfig,Vr=0,Pe=null,Ue=null,Ke=null,bi=!1,xo=!1,wo=0,Bf=0;function rt(){throw Error(u(321))}function il(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Tt(e[r],t[r]))return!1;return!0}function al(e,t,r,n,i,l){if(Vr=l,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ei.current=e===null||e.memoizedState===null?qf:Kf,e=r(n,i),xo){l=0;do{if(xo=!1,wo=0,25<=l)throw Error(u(301));l+=1,Ke=Ue=null,t.updateQueue=null,Ei.current=Qf,e=r(n,i)}while(xo)}if(Ei.current=Pi,t=Ue!==null&&Ue.next!==null,Vr=0,Ke=Ue=Pe=null,bi=!1,t)throw Error(u(300));return e}function ll(){var e=wo!==0;return wo=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Pe.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function bt(){if(Ue===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=Ke===null?Pe.memoizedState:Ke.next;if(t!==null)Ke=t,Ue=e;else{if(e===null)throw Error(u(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ke===null?Pe.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function ko(e,t){return typeof t=="function"?t(e):t}function sl(e){var t=bt(),r=t.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=e;var n=Ue,i=n.baseQueue,l=r.pending;if(l!==null){if(i!==null){var c=i.next;i.next=l.next,l.next=c}n.baseQueue=i=l,r.pending=null}if(i!==null){l=i.next,n=n.baseState;var m=c=null,g=null,N=l;do{var L=N.lane;if((Vr&L)===L)g!==null&&(g=g.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),n=N.hasEagerState?N.eagerState:e(n,N.action);else{var z={lane:L,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};g===null?(m=g=z,c=n):g=g.next=z,Pe.lanes|=L,Hr|=L}N=N.next}while(N!==null&&N!==l);g===null?c=n:g.next=m,Tt(n,t.memoizedState)||(ct=!0),t.memoizedState=n,t.baseState=c,t.baseQueue=g,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do l=i.lane,Pe.lanes|=l,Hr|=l,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ul(e){var t=bt(),r=t.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,l=t.memoizedState;if(i!==null){r.pending=null;var c=i=i.next;do l=e(l,c.action),c=c.next;while(c!==i);Tt(l,t.memoizedState)||(ct=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,n]}function Cu(){}function Nu(e,t){var r=Pe,n=bt(),i=t(),l=!Tt(n.memoizedState,i);if(l&&(n.memoizedState=i,ct=!0),n=n.queue,cl(Ru.bind(null,r,n,e),[e]),n.getSnapshot!==t||l||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,jo(9,_u.bind(null,r,n,i,t),void 0,null),Qe===null)throw Error(u(349));(Vr&30)!==0||Pu(r,t,i)}return i}function Pu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function _u(e,t,r,n){t.value=r,t.getSnapshot=n,Tu(t)&&Lu(e)}function Ru(e,t,r){return r(function(){Tu(t)&&Lu(e)})}function Tu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Tt(e,r)}catch{return!0}}function Lu(e){var t=tr(e,1);t!==null&&Ot(t,e,1,-1)}function zu(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},t.queue=e,e=e.dispatch=Hf.bind(null,Pe,e),[t.memoizedState,e]}function jo(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Iu(){return bt().memoizedState}function Ci(e,t,r,n){var i=Vt();Pe.flags|=e,i.memoizedState=jo(1|t,r,void 0,n===void 0?null:n)}function Ni(e,t,r,n){var i=bt();n=n===void 0?null:n;var l=void 0;if(Ue!==null){var c=Ue.memoizedState;if(l=c.destroy,n!==null&&il(n,c.deps)){i.memoizedState=jo(t,r,l,n);return}}Pe.flags|=e,i.memoizedState=jo(1|t,r,l,n)}function Du(e,t){return Ci(8390656,8,e,t)}function cl(e,t){return Ni(2048,8,e,t)}function Ou(e,t){return Ni(4,2,e,t)}function Fu(e,t){return Ni(4,4,e,t)}function Mu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Au(e,t,r){return r=r!=null?r.concat([e]):null,Ni(4,4,Mu.bind(null,t,e),r)}function dl(){}function $u(e,t){var r=bt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&il(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Uu(e,t){var r=bt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&il(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Bu(e,t,r){return(Vr&21)===0?(e.baseState&&(e.baseState=!1,ct=!0),e.memoizedState=r):(Tt(r,t)||(r=ys(),Pe.lanes|=r,Hr|=r,e.baseState=!0),t)}function Wf(e,t){var r=ge;ge=r!==0&&4>r?r:4,e(!0);var n=ol.transition;ol.transition={};try{e(!1),t()}finally{ge=r,ol.transition=n}}function Wu(){return bt().memoizedState}function Vf(e,t,r){var n=Pr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Vu(e))Hu(t,r);else if(r=ku(e,t,r,n),r!==null){var i=lt();Ot(r,e,n,i),qu(r,t,n)}}function Hf(e,t,r){var n=Pr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Vu(e))Hu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var c=t.lastRenderedState,m=l(c,r);if(i.hasEagerState=!0,i.eagerState=m,Tt(m,c)){var g=t.interleaved;g===null?(i.next=i,Xa(t)):(i.next=g.next,g.next=i),t.interleaved=i;return}}catch{}finally{}r=ku(e,t,i,n),r!==null&&(i=lt(),Ot(r,e,n,i),qu(r,t,n))}}function Vu(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function Hu(e,t){xo=bi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function qu(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,pa(e,r)}}var Pi={readContext:Et,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},qf={readContext:Et,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Du,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ci(4194308,4,Mu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ci(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ci(4,2,e,t)},useMemo:function(e,t){var r=Vt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Vt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Vf.bind(null,Pe,e),[n.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:zu,useDebugValue:dl,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=zu(!1),t=e[0];return e=Wf.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Pe,i=Vt();if(be){if(r===void 0)throw Error(u(407));r=r()}else{if(r=t(),Qe===null)throw Error(u(349));(Vr&30)!==0||Pu(n,t,r)}i.memoizedState=r;var l={value:r,getSnapshot:t};return i.queue=l,Du(Ru.bind(null,n,l,e),[e]),n.flags|=2048,jo(9,_u.bind(null,n,l,r,t),void 0,null),r},useId:function(){var e=Vt(),t=Qe.identifierPrefix;if(be){var r=er,n=Zt;r=(n&~(1<<32-Rt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=wo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Bf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Kf={readContext:Et,useCallback:$u,useContext:Et,useEffect:cl,useImperativeHandle:Au,useInsertionEffect:Ou,useLayoutEffect:Fu,useMemo:Uu,useReducer:sl,useRef:Iu,useState:function(){return sl(ko)},useDebugValue:dl,useDeferredValue:function(e){var t=bt();return Bu(t,Ue.memoizedState,e)},useTransition:function(){var e=sl(ko)[0],t=bt().memoizedState;return[e,t]},useMutableSource:Cu,useSyncExternalStore:Nu,useId:Wu,unstable_isNewReconciler:!1},Qf={readContext:Et,useCallback:$u,useContext:Et,useEffect:cl,useImperativeHandle:Au,useInsertionEffect:Ou,useLayoutEffect:Fu,useMemo:Uu,useReducer:ul,useRef:Iu,useState:function(){return ul(ko)},useDebugValue:dl,useDeferredValue:function(e){var t=bt();return Ue===null?t.memoizedState=e:Bu(t,Ue.memoizedState,e)},useTransition:function(){var e=ul(ko)[0],t=bt().memoizedState;return[e,t]},useMutableSource:Cu,useSyncExternalStore:Nu,useId:Wu,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function fl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:$({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var _i={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=lt(),i=Pr(e),l=rr(n,i);l.payload=t,r!=null&&(l.callback=r),t=Er(e,l,i),t!==null&&(Ot(t,e,i,n),ki(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=lt(),i=Pr(e),l=rr(n,i);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=Er(e,l,i),t!==null&&(Ot(t,e,i,n),ki(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=lt(),n=Pr(e),i=rr(r,n);i.tag=2,t!=null&&(i.callback=t),t=Er(e,i,n),t!==null&&(Ot(t,e,n,r),ki(t,e,n))}};function Ku(e,t,r,n,i,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,c):t.prototype&&t.prototype.isPureReactComponent?!lo(r,n)||!lo(i,l):!0}function Qu(e,t,r){var n=!1,i=kr,l=t.contextType;return typeof l=="object"&&l!==null?l=Et(l):(i=ut(t)?Ar:tt.current,n=t.contextTypes,l=(n=n!=null)?kn(e,i):kr),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_i,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Gu(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&_i.enqueueReplaceState(t,t.state,null)}function pl(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Za(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Et(l):(l=ut(t)?Ar:tt.current,i.context=kn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(fl(e,t,l,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_i.enqueueReplaceState(i,i.state,null),ji(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _n(e,t){try{var r="",n=t;do r+=ue(n),n=n.return;while(n);var i=r}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function ml(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function hl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Gf=typeof WeakMap=="function"?WeakMap:Map;function Yu(e,t,r){r=rr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Oi||(Oi=!0,Rl=n),hl(e,t)},r}function Ju(e,t,r){r=rr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){hl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){hl(e,t),typeof n!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),r}function Xu(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Gf;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=up.bind(null,e,t,r),t.then(e,e))}function Zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ec(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=rr(-1,1),t.tag=2,Er(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Yf=H.ReactCurrentOwner,ct=!1;function at(e,t,r,n){t.child=e===null?wu(t,null,r,n):bn(t,e.child,r,n)}function tc(e,t,r,n,i){r=r.render;var l=t.ref;return Nn(t,i),n=al(e,t,r,n,l,i),r=ll(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nr(e,t,i)):(be&&r&&Wa(t),t.flags|=1,at(e,t,n,i),t.child)}function rc(e,t,r,n,i){if(e===null){var l=r.type;return typeof l=="function"&&!Fl(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,nc(e,t,l,n,i)):(e=Bi(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var c=l.memoizedProps;if(r=r.compare,r=r!==null?r:lo,r(c,n)&&e.ref===t.ref)return nr(e,t,i)}return t.flags|=1,e=Rr(l,n),e.ref=t.ref,e.return=t,t.child=e}function nc(e,t,r,n,i){if(e!==null){var l=e.memoizedProps;if(lo(l,n)&&e.ref===t.ref)if(ct=!1,t.pendingProps=n=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ct=!0);else return t.lanes=e.lanes,nr(e,t,i)}return gl(e,t,r,n,i)}function oc(e,t,r){var n=t.pendingProps,i=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(Tn,xt),xt|=r;else{if((r&1073741824)===0)return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(Tn,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:r,je(Tn,xt),xt|=n}else l!==null?(n=l.baseLanes|r,t.memoizedState=null):n=r,je(Tn,xt),xt|=n;return at(e,t,i,r),t.child}function ic(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function gl(e,t,r,n,i){var l=ut(r)?Ar:tt.current;return l=kn(t,l),Nn(t,i),r=al(e,t,r,n,l,i),n=ll(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nr(e,t,i)):(be&&n&&Wa(t),t.flags|=1,at(e,t,r,i),t.child)}function ac(e,t,r,n,i){if(ut(r)){var l=!0;pi(t)}else l=!1;if(Nn(t,i),t.stateNode===null)Ti(e,t),Qu(t,r,n),pl(t,r,n,i),n=!0;else if(e===null){var c=t.stateNode,m=t.memoizedProps;c.props=m;var g=c.context,N=r.contextType;typeof N=="object"&&N!==null?N=Et(N):(N=ut(r)?Ar:tt.current,N=kn(t,N));var L=r.getDerivedStateFromProps,z=typeof L=="function"||typeof c.getSnapshotBeforeUpdate=="function";z||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==n||g!==N)&&Gu(t,c,n,N),Sr=!1;var T=t.memoizedState;c.state=T,ji(t,n,c,i),g=t.memoizedState,m!==n||T!==g||st.current||Sr?(typeof L=="function"&&(fl(t,r,L,n),g=t.memoizedState),(m=Sr||Ku(t,r,m,n,T,g,N))?(z||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=g),c.props=n,c.state=g,c.context=N,n=m):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{c=t.stateNode,ju(e,t),m=t.memoizedProps,N=t.type===t.elementType?m:zt(t.type,m),c.props=N,z=t.pendingProps,T=c.context,g=r.contextType,typeof g=="object"&&g!==null?g=Et(g):(g=ut(r)?Ar:tt.current,g=kn(t,g));var U=r.getDerivedStateFromProps;(L=typeof U=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==z||T!==g)&&Gu(t,c,n,g),Sr=!1,T=t.memoizedState,c.state=T,ji(t,n,c,i);var q=t.memoizedState;m!==z||T!==q||st.current||Sr?(typeof U=="function"&&(fl(t,r,U,n),q=t.memoizedState),(N=Sr||Ku(t,r,N,n,T,q,g)||!1)?(L||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(n,q,g),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(n,q,g)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=q),c.props=n,c.state=q,c.context=g,n=N):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),n=!1)}return vl(e,t,r,n,l,i)}function vl(e,t,r,n,i,l){ic(e,t);var c=(t.flags&128)!==0;if(!n&&!c)return i&&du(t,r,!1),nr(e,t,l);n=t.stateNode,Yf.current=t;var m=c&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&c?(t.child=bn(t,e.child,null,l),t.child=bn(t,null,m,l)):at(e,t,m,l),t.memoizedState=n.state,i&&du(t,r,!0),t.child}function lc(e){var t=e.stateNode;t.pendingContext?uu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uu(e,t.context,!1),el(e,t.containerInfo)}function sc(e,t,r,n,i){return En(),Ka(i),t.flags|=256,at(e,t,r,n),t.child}var yl={dehydrated:null,treeContext:null,retryLane:0};function xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function uc(e,t,r){var n=t.pendingProps,i=Ne.current,l=!1,c=(t.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(i&2)!==0),m?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),je(Ne,i&1),e===null)return qa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=n.children,e=n.fallback,l?(n=t.mode,l=t.child,c={mode:"hidden",children:c},(n&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=c):l=Wi(c,n,0,null),e=Gr(e,n,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=xl(r),t.memoizedState=yl,e):wl(t,c));if(i=e.memoizedState,i!==null&&(m=i.dehydrated,m!==null))return Jf(e,t,c,n,m,i,r);if(l){l=n.fallback,c=t.mode,i=e.child,m=i.sibling;var g={mode:"hidden",children:n.children};return(c&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=g,t.deletions=null):(n=Rr(i,g),n.subtreeFlags=i.subtreeFlags&14680064),m!==null?l=Rr(m,l):(l=Gr(l,c,r,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,c=e.child.memoizedState,c=c===null?xl(r):{baseLanes:c.baseLanes|r,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=e.childLanes&~r,t.memoizedState=yl,n}return l=e.child,e=l.sibling,n=Rr(l,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function wl(e,t){return t=Wi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ri(e,t,r,n){return n!==null&&Ka(n),bn(t,e.child,null,r),e=wl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jf(e,t,r,n,i,l,c){if(r)return t.flags&256?(t.flags&=-257,n=ml(Error(u(422))),Ri(e,t,c,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=n.fallback,i=t.mode,n=Wi({mode:"visible",children:n.children},i,0,null),l=Gr(l,i,c,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,(t.mode&1)!==0&&bn(t,e.child,null,c),t.child.memoizedState=xl(c),t.memoizedState=yl,l);if((t.mode&1)===0)return Ri(e,t,c,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var m=n.dgst;return n=m,l=Error(u(419)),n=ml(l,n,void 0),Ri(e,t,c,n)}if(m=(c&e.childLanes)!==0,ct||m){if(n=Qe,n!==null){switch(c&-c){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|c))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,tr(e,i),Ot(n,e,i,-1))}return Ol(),n=ml(Error(u(421))),Ri(e,t,c,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=cp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,yt=xr(i.nextSibling),vt=t,be=!0,Lt=null,e!==null&&(jt[St++]=Zt,jt[St++]=er,jt[St++]=$r,Zt=e.id,er=e.overflow,$r=t),t=wl(t,n.children),t.flags|=4096,t)}function cc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ja(e.return,t,r)}function kl(e,t,r,n,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=r,l.tailMode=i)}function dc(e,t,r){var n=t.pendingProps,i=n.revealOrder,l=n.tail;if(at(e,t,n.children,r),n=Ne.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cc(e,r,t);else if(e.tag===19)cc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(je(Ne,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Si(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),kl(t,!1,i,r,l);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Si(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}kl(t,!0,r,null,l);break;case"together":kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ti(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Hr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,r=Rr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Rr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Xf(e,t,r){switch(t.tag){case 3:lc(t),En();break;case 5:bu(t);break;case 1:ut(t.type)&&pi(t);break;case 4:el(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;je(xi,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(je(Ne,Ne.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?uc(e,t,r):(je(Ne,Ne.current&1),e=nr(e,t,r),e!==null?e.sibling:null);je(Ne,Ne.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return dc(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(Ne,Ne.current),n)break;return null;case 22:case 23:return t.lanes=0,oc(e,t,r)}return nr(e,t,r)}var fc,jl,pc,mc;fc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},jl=function(){},pc=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Wr(Wt.current);var l=null;switch(r){case"input":i=Ve(e,i),n=Ve(e,n),l=[];break;case"select":i=$({},i,{value:void 0}),n=$({},n,{value:void 0}),l=[];break;case"textarea":i=Un(e,i),n=Un(e,n),l=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ci)}Vn(r,n);var c;r=null;for(N in i)if(!n.hasOwnProperty(N)&&i.hasOwnProperty(N)&&i[N]!=null)if(N==="style"){var m=i[N];for(c in m)m.hasOwnProperty(c)&&(r||(r={}),r[c]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(p.hasOwnProperty(N)?l||(l=[]):(l=l||[]).push(N,null));for(N in n){var g=n[N];if(m=i!=null?i[N]:void 0,n.hasOwnProperty(N)&&g!==m&&(g!=null||m!=null))if(N==="style")if(m){for(c in m)!m.hasOwnProperty(c)||g&&g.hasOwnProperty(c)||(r||(r={}),r[c]="");for(c in g)g.hasOwnProperty(c)&&m[c]!==g[c]&&(r||(r={}),r[c]=g[c])}else r||(l||(l=[]),l.push(N,r)),r=g;else N==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,m=m?m.__html:void 0,g!=null&&m!==g&&(l=l||[]).push(N,g)):N==="children"?typeof g!="string"&&typeof g!="number"||(l=l||[]).push(N,""+g):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(p.hasOwnProperty(N)?(g!=null&&N==="onScroll"&&Se("scroll",e),l||m===g||(l=[])):(l=l||[]).push(N,g))}r&&(l=l||[]).push("style",r);var N=l;(t.updateQueue=N)&&(t.flags|=4)}},mc=function(e,t,r,n){r!==n&&(t.flags|=4)};function So(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Zf(e,t,r){var n=t.pendingProps;switch(Va(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return ut(t.type)&&fi(),nt(t),null;case 3:return n=t.stateNode,Pn(),Ee(st),Ee(tt),nl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lt!==null&&(zl(Lt),Lt=null))),jl(e,t),nt(t),null;case 5:tl(t);var i=Wr(yo.current);if(r=t.type,e!==null&&t.stateNode!=null)pc(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(u(166));return nt(t),null}if(e=Wr(Wt.current),vi(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[Bt]=t,n[po]=l,e=(t.mode&1)!==0,r){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(i=0;i<uo.length;i++)Se(uo[i],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":At(n,l),Se("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},Se("invalid",n);break;case"textarea":De(n,l),Se("invalid",n)}Vn(r,l),i=null;for(var c in l)if(l.hasOwnProperty(c)){var m=l[c];c==="children"?typeof m=="string"?n.textContent!==m&&(l.suppressHydrationWarning!==!0&&ui(n.textContent,m,e),i=["children",m]):typeof m=="number"&&n.textContent!==""+m&&(l.suppressHydrationWarning!==!0&&ui(n.textContent,m,e),i=["children",""+m]):p.hasOwnProperty(c)&&m!=null&&c==="onScroll"&&Se("scroll",n)}switch(r){case"input":Ie(n),$n(n,l,!0);break;case"textarea":Ie(n),Fo(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=ci)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{c=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mo(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=c.createElement(r,{is:n.is}):(e=c.createElement(r),r==="select"&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,r),e[Bt]=t,e[po]=n,fc(e,t,!1,!1),t.stateNode=e;e:{switch(c=Ir(r,n),r){case"dialog":Se("cancel",e),Se("close",e),i=n;break;case"iframe":case"object":case"embed":Se("load",e),i=n;break;case"video":case"audio":for(i=0;i<uo.length;i++)Se(uo[i],e);i=n;break;case"source":Se("error",e),i=n;break;case"img":case"image":case"link":Se("error",e),Se("load",e),i=n;break;case"details":Se("toggle",e),i=n;break;case"input":At(e,n),i=Ve(e,n),Se("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=$({},n,{value:void 0}),Se("invalid",e);break;case"textarea":De(e,n),i=Un(e,n),Se("invalid",e);break;default:i=n}Vn(r,i),m=i;for(l in m)if(m.hasOwnProperty(l)){var g=m[l];l==="style"?nn(e,g):l==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&Ao(e,g)):l==="children"?typeof g=="string"?(r!=="textarea"||g!=="")&&zr(e,g):typeof g=="number"&&zr(e,""+g):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(p.hasOwnProperty(l)?g!=null&&l==="onScroll"&&Se("scroll",e):g!=null&&Z(e,l,g,c))}switch(r){case"input":Ie(e),$n(e,n,!1);break;case"textarea":Ie(e),Fo(e);break;case"option":n.value!=null&&e.setAttribute("value",""+fe(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?Gt(e,!!n.multiple,l,!1):n.defaultValue!=null&&Gt(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ci)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)mc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(r=Wr(yo.current),Wr(Wt.current),vi(t)){if(n=t.stateNode,r=t.memoizedProps,n[Bt]=t,(l=n.nodeValue!==r)&&(e=vt,e!==null))switch(e.tag){case 3:ui(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ui(n.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Bt]=t,t.stateNode=n}return nt(t),null;case 13:if(Ee(Ne),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&yt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)vu(),En(),t.flags|=98560,l=!1;else if(l=vi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[Bt]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),l=!1}else Lt!==null&&(zl(Lt),Lt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ne.current&1)!==0?Be===0&&(Be=3):Ol())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return Pn(),jl(e,t),e===null&&co(t.stateNode.containerInfo),nt(t),null;case 10:return Ya(t.type._context),nt(t),null;case 17:return ut(t.type)&&fi(),nt(t),null;case 19:if(Ee(Ne),l=t.memoizedState,l===null)return nt(t),null;if(n=(t.flags&128)!==0,c=l.rendering,c===null)if(n)So(l,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Si(e),c!==null){for(t.flags|=128,So(l,!1),n=c.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)l=r,e=n,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return je(Ne,Ne.current&1|2),t.child}e=e.sibling}l.tail!==null&&Oe()>Ln&&(t.flags|=128,n=!0,So(l,!1),t.lanes=4194304)}else{if(!n)if(e=Si(c),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),So(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!be)return nt(t),null}else 2*Oe()-l.renderingStartTime>Ln&&r!==1073741824&&(t.flags|=128,n=!0,So(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(r=l.last,r!==null?r.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Oe(),t.sibling=null,r=Ne.current,je(Ne,n?r&1|2:r&1),t):(nt(t),null);case 22:case 23:return Dl(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(xt&1073741824)!==0&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function ep(e,t){switch(Va(t),t.tag){case 1:return ut(t.type)&&fi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(),Ee(st),Ee(tt),nl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return tl(t),null;case 13:if(Ee(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Ne),null;case 4:return Pn(),null;case 10:return Ya(t.type._context),null;case 22:case 23:return Dl(),null;case 24:return null;default:return null}}var Li=!1,ot=!1,tp=typeof WeakSet=="function"?WeakSet:Set,V=null;function Rn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Le(e,t,n)}else r.current=null}function Sl(e,t,r){try{r()}catch(n){Le(e,t,n)}}var hc=!1;function rp(e,t){if(Da=Xo,e=Ks(),Na(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var c=0,m=-1,g=-1,N=0,L=0,z=e,T=null;t:for(;;){for(var U;z!==r||i!==0&&z.nodeType!==3||(m=c+i),z!==l||n!==0&&z.nodeType!==3||(g=c+n),z.nodeType===3&&(c+=z.nodeValue.length),(U=z.firstChild)!==null;)T=z,z=U;for(;;){if(z===e)break t;if(T===r&&++N===i&&(m=c),T===l&&++L===n&&(g=c),(U=z.nextSibling)!==null)break;z=T,T=z.parentNode}z=U}r=m===-1||g===-1?null:{start:m,end:g}}else r=null}r=r||{start:0,end:0}}else r=null;for(Oa={focusedElem:e,selectionRange:r},Xo=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var K=q.memoizedProps,Fe=q.memoizedState,E=t.stateNode,x=E.getSnapshotBeforeUpdate(t.elementType===t.type?K:zt(t.type,K),Fe);E.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(D){Le(t,t.return,D)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return q=hc,hc=!1,q}function Eo(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Sl(t,r,l)}i=i.next}while(i!==n)}}function zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function El(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function gc(e){var t=e.alternate;t!==null&&(e.alternate=null,gc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bt],delete t[po],delete t[$a],delete t[Mf],delete t[Af])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vc(e){return e.tag===5||e.tag===3||e.tag===4}function yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ci));else if(n!==4&&(e=e.child,e!==null))for(bl(e,t,r),e=e.sibling;e!==null;)bl(e,t,r),e=e.sibling}function Cl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Cl(e,t,r),e=e.sibling;e!==null;)Cl(e,t,r),e=e.sibling}var Xe=null,It=!1;function br(e,t,r){for(r=r.child;r!==null;)xc(e,t,r),r=r.sibling}function xc(e,t,r){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(qo,r)}catch{}switch(r.tag){case 5:ot||Rn(r,t);case 6:var n=Xe,i=It;Xe=null,br(e,t,r),Xe=n,It=i,Xe!==null&&(It?(e=Xe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Xe.removeChild(r.stateNode));break;case 18:Xe!==null&&(It?(e=Xe,r=r.stateNode,e.nodeType===8?Aa(e.parentNode,r):e.nodeType===1&&Aa(e,r),to(e)):Aa(Xe,r.stateNode));break;case 4:n=Xe,i=It,Xe=r.stateNode.containerInfo,It=!0,br(e,t,r),Xe=n,It=i;break;case 0:case 11:case 14:case 15:if(!ot&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var l=i,c=l.destroy;l=l.tag,c!==void 0&&((l&2)!==0||(l&4)!==0)&&Sl(r,t,c),i=i.next}while(i!==n)}br(e,t,r);break;case 1:if(!ot&&(Rn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(m){Le(r,t,m)}br(e,t,r);break;case 21:br(e,t,r);break;case 22:r.mode&1?(ot=(n=ot)||r.memoizedState!==null,br(e,t,r),ot=n):br(e,t,r);break;default:br(e,t,r)}}function wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new tp),t.forEach(function(n){var i=dp.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Dt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var l=e,c=t,m=c;e:for(;m!==null;){switch(m.tag){case 5:Xe=m.stateNode,It=!1;break e;case 3:Xe=m.stateNode.containerInfo,It=!0;break e;case 4:Xe=m.stateNode.containerInfo,It=!0;break e}m=m.return}if(Xe===null)throw Error(u(160));xc(l,c,i),Xe=null,It=!1;var g=i.alternate;g!==null&&(g.return=null),i.return=null}catch(N){Le(i,t,N)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kc(t,e),t=t.sibling}function kc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Dt(t,e),Ht(e),n&4){try{Eo(3,e,e.return),zi(3,e)}catch(K){Le(e,e.return,K)}try{Eo(5,e,e.return)}catch(K){Le(e,e.return,K)}}break;case 1:Dt(t,e),Ht(e),n&512&&r!==null&&Rn(r,r.return);break;case 5:if(Dt(t,e),Ht(e),n&512&&r!==null&&Rn(r,r.return),e.flags&32){var i=e.stateNode;try{zr(i,"")}catch(K){Le(e,e.return,K)}}if(n&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,c=r!==null?r.memoizedProps:l,m=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{m==="input"&&l.type==="radio"&&l.name!=null&&ne(i,l),Ir(m,c);var N=Ir(m,l);for(c=0;c<g.length;c+=2){var L=g[c],z=g[c+1];L==="style"?nn(i,z):L==="dangerouslySetInnerHTML"?Ao(i,z):L==="children"?zr(i,z):Z(i,L,z,N)}switch(m){case"input":He(i,l);break;case"textarea":kt(i,l);break;case"select":var T=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var U=l.value;U!=null?Gt(i,!!l.multiple,U,!1):T!==!!l.multiple&&(l.defaultValue!=null?Gt(i,!!l.multiple,l.defaultValue,!0):Gt(i,!!l.multiple,l.multiple?[]:"",!1))}i[po]=l}catch(K){Le(e,e.return,K)}}break;case 6:if(Dt(t,e),Ht(e),n&4){if(e.stateNode===null)throw Error(u(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(K){Le(e,e.return,K)}}break;case 3:if(Dt(t,e),Ht(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{to(t.containerInfo)}catch(K){Le(e,e.return,K)}break;case 4:Dt(t,e),Ht(e);break;case 13:Dt(t,e),Ht(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(_l=Oe())),n&4&&wc(e);break;case 22:if(L=r!==null&&r.memoizedState!==null,e.mode&1?(ot=(N=ot)||L,Dt(t,e),ot=N):Dt(t,e),Ht(e),n&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!L&&(e.mode&1)!==0)for(V=e,L=e.child;L!==null;){for(z=V=L;V!==null;){switch(T=V,U=T.child,T.tag){case 0:case 11:case 14:case 15:Eo(4,T,T.return);break;case 1:Rn(T,T.return);var q=T.stateNode;if(typeof q.componentWillUnmount=="function"){n=T,r=T.return;try{t=n,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(K){Le(n,r,K)}}break;case 5:Rn(T,T.return);break;case 22:if(T.memoizedState!==null){Ec(z);continue}}U!==null?(U.return=T,V=U):Ec(z)}L=L.sibling}e:for(L=null,z=e;;){if(z.tag===5){if(L===null){L=z;try{i=z.stateNode,N?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(m=z.stateNode,g=z.memoizedProps.style,c=g!=null&&g.hasOwnProperty("display")?g.display:null,m.style.display=Wn("display",c))}catch(K){Le(e,e.return,K)}}}else if(z.tag===6){if(L===null)try{z.stateNode.nodeValue=N?"":z.memoizedProps}catch(K){Le(e,e.return,K)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;L===z&&(L=null),z=z.return}L===z&&(L=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:Dt(t,e),Ht(e),n&4&&wc(e);break;case 21:break;default:Dt(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(vc(r)){var n=r;break e}r=r.return}throw Error(u(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(zr(i,""),n.flags&=-33);var l=yc(e);Cl(e,l,i);break;case 3:case 4:var c=n.stateNode.containerInfo,m=yc(e);bl(e,m,c);break;default:throw Error(u(161))}}catch(g){Le(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function np(e,t,r){V=e,jc(e)}function jc(e,t,r){for(var n=(e.mode&1)!==0;V!==null;){var i=V,l=i.child;if(i.tag===22&&n){var c=i.memoizedState!==null||Li;if(!c){var m=i.alternate,g=m!==null&&m.memoizedState!==null||ot;m=Li;var N=ot;if(Li=c,(ot=g)&&!N)for(V=i;V!==null;)c=V,g=c.child,c.tag===22&&c.memoizedState!==null?bc(i):g!==null?(g.return=c,V=g):bc(i);for(;l!==null;)V=l,jc(l),l=l.sibling;V=i,Li=m,ot=N}Sc(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,V=l):Sc(e)}}function Sc(e){for(;V!==null;){var t=V;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ot||zi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ot)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:zt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Eu(t,l,n);break;case 3:var c=t.updateQueue;if(c!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Eu(t,c,r)}break;case 5:var m=t.stateNode;if(r===null&&t.flags&4){r=m;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&r.focus();break;case"img":g.src&&(r.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var N=t.alternate;if(N!==null){var L=N.memoizedState;if(L!==null){var z=L.dehydrated;z!==null&&to(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}ot||t.flags&512&&El(t)}catch(T){Le(t,t.return,T)}}if(t===e){V=null;break}if(r=t.sibling,r!==null){r.return=t.return,V=r;break}V=t.return}}function Ec(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var r=t.sibling;if(r!==null){r.return=t.return,V=r;break}V=t.return}}function bc(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{zi(4,t)}catch(g){Le(t,r,g)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(g){Le(t,i,g)}}var l=t.return;try{El(t)}catch(g){Le(t,l,g)}break;case 5:var c=t.return;try{El(t)}catch(g){Le(t,c,g)}}}catch(g){Le(t,t.return,g)}if(t===e){V=null;break}var m=t.sibling;if(m!==null){m.return=t.return,V=m;break}V=t.return}}var op=Math.ceil,Ii=H.ReactCurrentDispatcher,Nl=H.ReactCurrentOwner,Ct=H.ReactCurrentBatchConfig,pe=0,Qe=null,Ae=null,Ze=0,xt=0,Tn=wr(0),Be=0,bo=null,Hr=0,Di=0,Pl=0,Co=null,dt=null,_l=0,Ln=1/0,or=null,Oi=!1,Rl=null,Cr=null,Fi=!1,Nr=null,Mi=0,No=0,Tl=null,Ai=-1,$i=0;function lt(){return(pe&6)!==0?Oe():Ai!==-1?Ai:Ai=Oe()}function Pr(e){return(e.mode&1)===0?1:(pe&2)!==0&&Ze!==0?Ze&-Ze:Uf.transition!==null?($i===0&&($i=ys()),$i):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Ns(e.type)),e)}function Ot(e,t,r,n){if(50<No)throw No=0,Tl=null,Error(u(185));Yn(e,r,n),((pe&2)===0||e!==Qe)&&(e===Qe&&((pe&2)===0&&(Di|=r),Be===4&&_r(e,Ze)),ft(e,n),r===1&&pe===0&&(t.mode&1)===0&&(Ln=Oe()+500,mi&&jr()))}function ft(e,t){var r=e.callbackNode;$d(e,t);var n=Go(e,e===Qe?Ze:0);if(n===0)r!==null&&hs(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&hs(r),t===1)e.tag===0?$f(Nc.bind(null,e)):fu(Nc.bind(null,e)),Of(function(){(pe&6)===0&&jr()}),r=null;else{switch(xs(n)){case 1:r=ca;break;case 4:r=gs;break;case 16:r=Ho;break;case 536870912:r=vs;break;default:r=Ho}r=Dc(r,Cc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Cc(e,t){if(Ai=-1,$i=0,(pe&6)!==0)throw Error(u(327));var r=e.callbackNode;if(zn()&&e.callbackNode!==r)return null;var n=Go(e,e===Qe?Ze:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=Ui(e,n);else{t=n;var i=pe;pe|=2;var l=_c();(Qe!==e||Ze!==t)&&(or=null,Ln=Oe()+500,Kr(e,t));do try{lp();break}catch(m){Pc(e,m)}while(!0);Ga(),Ii.current=l,pe=i,Ae!==null?t=0:(Qe=null,Ze=0,t=Be)}if(t!==0){if(t===2&&(i=da(e),i!==0&&(n=i,t=Ll(e,i))),t===1)throw r=bo,Kr(e,0),_r(e,n),ft(e,Oe()),r;if(t===6)_r(e,n);else{if(i=e.current.alternate,(n&30)===0&&!ip(i)&&(t=Ui(e,n),t===2&&(l=da(e),l!==0&&(n=l,t=Ll(e,l))),t===1))throw r=bo,Kr(e,0),_r(e,n),ft(e,Oe()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(u(345));case 2:Qr(e,dt,or);break;case 3:if(_r(e,n),(n&130023424)===n&&(t=_l+500-Oe(),10<t)){if(Go(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){lt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ma(Qr.bind(null,e,dt,or),t);break}Qr(e,dt,or);break;case 4:if(_r(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var c=31-Rt(n);l=1<<c,c=t[c],c>i&&(i=c),n&=~l}if(n=i,n=Oe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*op(n/1960))-n,10<n){e.timeoutHandle=Ma(Qr.bind(null,e,dt,or),n);break}Qr(e,dt,or);break;case 5:Qr(e,dt,or);break;default:throw Error(u(329))}}}return ft(e,Oe()),e.callbackNode===r?Cc.bind(null,e):null}function Ll(e,t){var r=Co;return e.current.memoizedState.isDehydrated&&(Kr(e,t).flags|=256),e=Ui(e,t),e!==2&&(t=dt,dt=r,t!==null&&zl(t)),e}function zl(e){dt===null?dt=e:dt.push.apply(dt,e)}function ip(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],l=i.getSnapshot;i=i.value;try{if(!Tt(l(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _r(e,t){for(t&=~Pl,t&=~Di,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Rt(t),n=1<<r;e[r]=-1,t&=~n}}function Nc(e){if((pe&6)!==0)throw Error(u(327));zn();var t=Go(e,0);if((t&1)===0)return ft(e,Oe()),null;var r=Ui(e,t);if(e.tag!==0&&r===2){var n=da(e);n!==0&&(t=n,r=Ll(e,n))}if(r===1)throw r=bo,Kr(e,0),_r(e,t),ft(e,Oe()),r;if(r===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qr(e,dt,or),ft(e,Oe()),null}function Il(e,t){var r=pe;pe|=1;try{return e(t)}finally{pe=r,pe===0&&(Ln=Oe()+500,mi&&jr())}}function qr(e){Nr!==null&&Nr.tag===0&&(pe&6)===0&&zn();var t=pe;pe|=1;var r=Ct.transition,n=ge;try{if(Ct.transition=null,ge=1,e)return e()}finally{ge=n,Ct.transition=r,pe=t,(pe&6)===0&&jr()}}function Dl(){xt=Tn.current,Ee(Tn)}function Kr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Df(r)),Ae!==null)for(r=Ae.return;r!==null;){var n=r;switch(Va(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&fi();break;case 3:Pn(),Ee(st),Ee(tt),nl();break;case 5:tl(n);break;case 4:Pn();break;case 13:Ee(Ne);break;case 19:Ee(Ne);break;case 10:Ya(n.type._context);break;case 22:case 23:Dl()}r=r.return}if(Qe=e,Ae=e=Rr(e.current,null),Ze=xt=t,Be=0,bo=null,Pl=Di=Hr=0,dt=Co=null,Br!==null){for(t=0;t<Br.length;t++)if(r=Br[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,l=r.pending;if(l!==null){var c=l.next;l.next=i,n.next=c}r.pending=n}Br=null}return e}function Pc(e,t){do{var r=Ae;try{if(Ga(),Ei.current=Pi,bi){for(var n=Pe.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}bi=!1}if(Vr=0,Ke=Ue=Pe=null,xo=!1,wo=0,Nl.current=null,r===null||r.return===null){Be=1,bo=t,Ae=null;break}e:{var l=e,c=r.return,m=r,g=t;if(t=Ze,m.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var N=g,L=m,z=L.tag;if((L.mode&1)===0&&(z===0||z===11||z===15)){var T=L.alternate;T?(L.updateQueue=T.updateQueue,L.memoizedState=T.memoizedState,L.lanes=T.lanes):(L.updateQueue=null,L.memoizedState=null)}var U=Zu(c);if(U!==null){U.flags&=-257,ec(U,c,m,l,t),U.mode&1&&Xu(l,N,t),t=U,g=N;var q=t.updateQueue;if(q===null){var K=new Set;K.add(g),t.updateQueue=K}else q.add(g);break e}else{if((t&1)===0){Xu(l,N,t),Ol();break e}g=Error(u(426))}}else if(be&&m.mode&1){var Fe=Zu(c);if(Fe!==null){(Fe.flags&65536)===0&&(Fe.flags|=256),ec(Fe,c,m,l,t),Ka(_n(g,m));break e}}l=g=_n(g,m),Be!==4&&(Be=2),Co===null?Co=[l]:Co.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var E=Yu(l,g,t);Su(l,E);break e;case 1:m=g;var x=l.type,b=l.stateNode;if((l.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Cr===null||!Cr.has(b)))){l.flags|=65536,t&=-t,l.lanes|=t;var D=Ju(l,m,t);Su(l,D);break e}}l=l.return}while(l!==null)}Tc(r)}catch(Q){t=Q,Ae===r&&r!==null&&(Ae=r=r.return);continue}break}while(!0)}function _c(){var e=Ii.current;return Ii.current=Pi,e===null?Pi:e}function Ol(){(Be===0||Be===3||Be===2)&&(Be=4),Qe===null||(Hr&268435455)===0&&(Di&268435455)===0||_r(Qe,Ze)}function Ui(e,t){var r=pe;pe|=2;var n=_c();(Qe!==e||Ze!==t)&&(or=null,Kr(e,t));do try{ap();break}catch(i){Pc(e,i)}while(!0);if(Ga(),pe=r,Ii.current=n,Ae!==null)throw Error(u(261));return Qe=null,Ze=0,Be}function ap(){for(;Ae!==null;)Rc(Ae)}function lp(){for(;Ae!==null&&!Td();)Rc(Ae)}function Rc(e){var t=Ic(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?Tc(e):Ae=t,Nl.current=null}function Tc(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Zf(r,t,xt),r!==null){Ae=r;return}}else{if(r=ep(r,t),r!==null){r.flags&=32767,Ae=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Ae=null;return}}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Be===0&&(Be=5)}function Qr(e,t,r){var n=ge,i=Ct.transition;try{Ct.transition=null,ge=1,sp(e,t,r,n)}finally{Ct.transition=i,ge=n}return null}function sp(e,t,r,n){do zn();while(Nr!==null);if((pe&6)!==0)throw Error(u(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(Ud(e,l),e===Qe&&(Ae=Qe=null,Ze=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Fi||(Fi=!0,Dc(Ho,function(){return zn(),null})),l=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||l){l=Ct.transition,Ct.transition=null;var c=ge;ge=1;var m=pe;pe|=4,Nl.current=null,rp(e,r),kc(r,e),Pf(Oa),Xo=!!Da,Oa=Da=null,e.current=r,np(r),Ld(),pe=m,ge=c,Ct.transition=l}else e.current=r;if(Fi&&(Fi=!1,Nr=e,Mi=i),l=e.pendingLanes,l===0&&(Cr=null),Dd(r.stateNode),ft(e,Oe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Oi)throw Oi=!1,e=Rl,Rl=null,e;return(Mi&1)!==0&&e.tag!==0&&zn(),l=e.pendingLanes,(l&1)!==0?e===Tl?No++:(No=0,Tl=e):No=0,jr(),null}function zn(){if(Nr!==null){var e=xs(Mi),t=Ct.transition,r=ge;try{if(Ct.transition=null,ge=16>e?16:e,Nr===null)var n=!1;else{if(e=Nr,Nr=null,Mi=0,(pe&6)!==0)throw Error(u(331));var i=pe;for(pe|=4,V=e.current;V!==null;){var l=V,c=l.child;if((V.flags&16)!==0){var m=l.deletions;if(m!==null){for(var g=0;g<m.length;g++){var N=m[g];for(V=N;V!==null;){var L=V;switch(L.tag){case 0:case 11:case 15:Eo(8,L,l)}var z=L.child;if(z!==null)z.return=L,V=z;else for(;V!==null;){L=V;var T=L.sibling,U=L.return;if(gc(L),L===N){V=null;break}if(T!==null){T.return=U,V=T;break}V=U}}}var q=l.alternate;if(q!==null){var K=q.child;if(K!==null){q.child=null;do{var Fe=K.sibling;K.sibling=null,K=Fe}while(K!==null)}}V=l}}if((l.subtreeFlags&2064)!==0&&c!==null)c.return=l,V=c;else e:for(;V!==null;){if(l=V,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Eo(9,l,l.return)}var E=l.sibling;if(E!==null){E.return=l.return,V=E;break e}V=l.return}}var x=e.current;for(V=x;V!==null;){c=V;var b=c.child;if((c.subtreeFlags&2064)!==0&&b!==null)b.return=c,V=b;else e:for(c=x;V!==null;){if(m=V,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:zi(9,m)}}catch(Q){Le(m,m.return,Q)}if(m===c){V=null;break e}var D=m.sibling;if(D!==null){D.return=m.return,V=D;break e}V=m.return}}if(pe=i,jr(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(qo,e)}catch{}n=!0}return n}finally{ge=r,Ct.transition=t}}return!1}function Lc(e,t,r){t=_n(r,t),t=Yu(e,t,1),e=Er(e,t,1),t=lt(),e!==null&&(Yn(e,1,t),ft(e,t))}function Le(e,t,r){if(e.tag===3)Lc(e,e,r);else for(;t!==null;){if(t.tag===3){Lc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Cr===null||!Cr.has(n))){e=_n(r,e),e=Ju(t,e,1),t=Er(t,e,1),e=lt(),t!==null&&(Yn(t,1,e),ft(t,e));break}}t=t.return}}function up(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&r,Qe===e&&(Ze&r)===r&&(Be===4||Be===3&&(Ze&130023424)===Ze&&500>Oe()-_l?Kr(e,0):Pl|=r),ft(e,t)}function zc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Qo,Qo<<=1,(Qo&130023424)===0&&(Qo=4194304)));var r=lt();e=tr(e,t),e!==null&&(Yn(e,t,r),ft(e,r))}function cp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),zc(e,r)}function dp(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(u(314))}n!==null&&n.delete(t),zc(e,r)}var Ic;Ic=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)ct=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return ct=!1,Xf(e,t,r);ct=(e.flags&131072)!==0}else ct=!1,be&&(t.flags&1048576)!==0&&pu(t,gi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ti(e,t),e=t.pendingProps;var i=kn(t,tt.current);Nn(t,r),i=al(null,t,n,e,i,r);var l=ll();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(n)?(l=!0,pi(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Za(t),i.updater=_i,t.stateNode=i,i._reactInternals=t,pl(t,n,e,r),t=vl(null,t,n,!0,l,r)):(t.tag=0,be&&l&&Wa(t),at(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ti(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=pp(n),e=zt(n,e),i){case 0:t=gl(null,t,n,e,r);break e;case 1:t=ac(null,t,n,e,r);break e;case 11:t=tc(null,t,n,e,r);break e;case 14:t=rc(null,t,n,zt(n.type,e),r);break e}throw Error(u(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:zt(n,i),gl(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:zt(n,i),ac(e,t,n,i,r);case 3:e:{if(lc(t),e===null)throw Error(u(387));n=t.pendingProps,l=t.memoizedState,i=l.element,ju(e,t),ji(t,n,null,r);var c=t.memoizedState;if(n=c.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=_n(Error(u(423)),t),t=sc(e,t,n,r,i);break e}else if(n!==i){i=_n(Error(u(424)),t),t=sc(e,t,n,r,i);break e}else for(yt=xr(t.stateNode.containerInfo.firstChild),vt=t,be=!0,Lt=null,r=wu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(En(),n===i){t=nr(e,t,r);break e}at(e,t,n,r)}t=t.child}return t;case 5:return bu(t),e===null&&qa(t),n=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,c=i.children,Fa(n,i)?c=null:l!==null&&Fa(n,l)&&(t.flags|=32),ic(e,t),at(e,t,c,r),t.child;case 6:return e===null&&qa(t),null;case 13:return uc(e,t,r);case 4:return el(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=bn(t,null,n,r):at(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:zt(n,i),tc(e,t,n,i,r);case 7:return at(e,t,t.pendingProps,r),t.child;case 8:return at(e,t,t.pendingProps.children,r),t.child;case 12:return at(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,l=t.memoizedProps,c=i.value,je(xi,n._currentValue),n._currentValue=c,l!==null)if(Tt(l.value,c)){if(l.children===i.children&&!st.current){t=nr(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var m=l.dependencies;if(m!==null){c=l.child;for(var g=m.firstContext;g!==null;){if(g.context===n){if(l.tag===1){g=rr(-1,r&-r),g.tag=2;var N=l.updateQueue;if(N!==null){N=N.shared;var L=N.pending;L===null?g.next=g:(g.next=L.next,L.next=g),N.pending=g}}l.lanes|=r,g=l.alternate,g!==null&&(g.lanes|=r),Ja(l.return,r,t),m.lanes|=r;break}g=g.next}}else if(l.tag===10)c=l.type===t.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(u(341));c.lanes|=r,m=c.alternate,m!==null&&(m.lanes|=r),Ja(c,r,t),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===t){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}at(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Nn(t,r),i=Et(i),n=n(i),t.flags|=1,at(e,t,n,r),t.child;case 14:return n=t.type,i=zt(n,t.pendingProps),i=zt(n.type,i),rc(e,t,n,i,r);case 15:return nc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:zt(n,i),Ti(e,t),t.tag=1,ut(n)?(e=!0,pi(t)):e=!1,Nn(t,r),Qu(t,n,i),pl(t,n,i,r),vl(null,t,n,!0,e,r);case 19:return dc(e,t,r);case 22:return oc(e,t,r)}throw Error(u(156,t.tag))};function Dc(e,t){return Vo(e,t)}function fp(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,r,n){return new fp(e,t,r,n)}function Fl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pp(e){if(typeof e=="function")return Fl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Te)return 11;if(e===ze)return 14}return 2}function Rr(e,t){var r=e.alternate;return r===null?(r=Nt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Bi(e,t,r,n,i,l){var c=2;if(n=e,typeof e=="function")Fl(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case ve:return Gr(r.children,i,l,t);case le:c=8,i|=8;break;case $e:return e=Nt(12,r,t,i|2),e.elementType=$e,e.lanes=l,e;case We:return e=Nt(13,r,t,i),e.elementType=We,e.lanes=l,e;case Je:return e=Nt(19,r,t,i),e.elementType=Je,e.lanes=l,e;case ye:return Wi(r,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ye:c=10;break e;case mt:c=9;break e;case Te:c=11;break e;case ze:c=14;break e;case Me:c=16,n=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=Nt(c,r,t,i),t.elementType=e,t.type=n,t.lanes=l,t}function Gr(e,t,r,n){return e=Nt(7,e,n,t),e.lanes=r,e}function Wi(e,t,r,n){return e=Nt(22,e,n,t),e.elementType=ye,e.lanes=r,e.stateNode={isHidden:!1},e}function Ml(e,t,r){return e=Nt(6,e,null,t),e.lanes=r,e}function Al(e,t,r){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mp(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fa(0),this.expirationTimes=fa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fa(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $l(e,t,r,n,i,l,c,m,g){return e=new mp(e,t,r,m,g),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Nt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Za(l),e}function hp(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Oc(e){if(!e)return kr;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var r=e.type;if(ut(r))return cu(e,r,t)}return t}function Fc(e,t,r,n,i,l,c,m,g){return e=$l(r,n,!0,e,i,l,c,m,g),e.context=Oc(null),r=e.current,n=lt(),i=Pr(r),l=rr(n,i),l.callback=t??null,Er(r,l,i),e.current.lanes=i,Yn(e,i,n),ft(e,n),e}function Vi(e,t,r,n){var i=t.current,l=lt(),c=Pr(i);return r=Oc(r),t.context===null?t.context=r:t.pendingContext=r,t=rr(l,c),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Er(i,t,c),e!==null&&(Ot(e,i,c,l),ki(e,i,c)),c}function Hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ul(e,t){Mc(e,t),(e=e.alternate)&&Mc(e,t)}function gp(){return null}var Ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bl(e){this._internalRoot=e}qi.prototype.render=Bl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Vi(e,t,null,null)},qi.prototype.unmount=Bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qr(function(){Vi(null,e,null,null)}),t[Jt]=null}};function qi(e){this._internalRoot=e}qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=js();e={blockedOn:null,target:e,priority:t};for(var r=0;r<gr.length&&t!==0&&t<gr[r].priority;r++);gr.splice(r,0,e),r===0&&bs(e)}};function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ki(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $c(){}function vp(e,t,r,n,i){if(i){if(typeof n=="function"){var l=n;n=function(){var N=Hi(c);l.call(N)}}var c=Fc(t,n,e,0,null,!1,!1,"",$c);return e._reactRootContainer=c,e[Jt]=c.current,co(e.nodeType===8?e.parentNode:e),qr(),c}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var m=n;n=function(){var N=Hi(g);m.call(N)}}var g=$l(e,0,!1,null,null,!1,!1,"",$c);return e._reactRootContainer=g,e[Jt]=g.current,co(e.nodeType===8?e.parentNode:e),qr(function(){Vi(t,g,r,n)}),g}function Qi(e,t,r,n,i){var l=r._reactRootContainer;if(l){var c=l;if(typeof i=="function"){var m=i;i=function(){var g=Hi(c);m.call(g)}}Vi(t,c,e,i)}else c=vp(r,t,e,i,n);return Hi(c)}ws=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Gn(t.pendingLanes);r!==0&&(pa(t,r|1),ft(t,Oe()),(pe&6)===0&&(Ln=Oe()+500,jr()))}break;case 13:qr(function(){var n=tr(e,1);if(n!==null){var i=lt();Ot(n,e,1,i)}}),Ul(e,1)}},ma=function(e){if(e.tag===13){var t=tr(e,134217728);if(t!==null){var r=lt();Ot(t,e,134217728,r)}Ul(e,134217728)}},ks=function(e){if(e.tag===13){var t=Pr(e),r=tr(e,t);if(r!==null){var n=lt();Ot(r,e,t,n)}Ul(e,t)}},js=function(){return ge},Ss=function(e,t){var r=ge;try{return ge=e,t()}finally{ge=r}},qn=function(e,t,r){switch(t){case"input":if(He(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=di(n);if(!i)throw Error(u(90));xe(n),He(n,i)}}}break;case"textarea":kt(e,r);break;case"select":t=r.value,t!=null&&Gt(e,!!r.multiple,t,!1)}},ln=Il,Kn=qr;var yp={usingClientEntryPoint:!1,Events:[mo,xn,di,an,sr,Il]},Po={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xp={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:H.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dr(e),e===null?null:e.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||gp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{qo=Gi.inject(xp),Ut=Gi}catch{}}return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yp,pt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wl(t))throw Error(u(200));return hp(e,t,null,r)},pt.createRoot=function(e,t){if(!Wl(e))throw Error(u(299));var r=!1,n="",i=Ac;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$l(e,1,!1,null,null,r,!1,n,i),e[Jt]=t.current,co(e.nodeType===8?e.parentNode:e),new Bl(t)},pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=dr(t),e=e===null?null:e.stateNode,e},pt.flushSync=function(e){return qr(e)},pt.hydrate=function(e,t,r){if(!Ki(t))throw Error(u(200));return Qi(null,e,t,!0,r)},pt.hydrateRoot=function(e,t,r){if(!Wl(e))throw Error(u(405));var n=r!=null&&r.hydratedSources||null,i=!1,l="",c=Ac;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),t=Fc(t,null,e,1,r??null,i,!1,l,c),e[Jt]=t.current,co(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new qi(t)},pt.render=function(e,t,r){if(!Ki(t))throw Error(u(200));return Qi(null,e,t,!1,r)},pt.unmountComponentAtNode=function(e){if(!Ki(e))throw Error(u(40));return e._reactRootContainer?(qr(function(){Qi(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1},pt.unstable_batchedUpdates=Il,pt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ki(r))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Qi(e,t,r,!1,n)},pt.version="18.3.1-next-f1338f8080-20240426",pt}var Qc;function _p(){if(Qc)return ql.exports;Qc=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),ql.exports=Pp(),ql.exports}var Gc;function Rp(){if(Gc)return Yi;Gc=1;var a=_p();return Yi.createRoot=a.createRoot,Yi.hydrateRoot=a.hydrateRoot,Yi}var Tp=Rp();/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Yc="popstate";function Jc(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function Lp(a={}){function s(d,p){var w;let h=(w=p.state)==null?void 0:w.masked,{pathname:v,search:S,hash:k}=h||d.location;return ts("",{pathname:v,search:S,hash:k},p.state&&p.state.usr||null,p.state&&p.state.key||"default",h?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function u(d,p){return typeof p=="string"?p:zo(p)}return Ip(s,u,null,a)}function Re(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function Mt(a,s){if(!a){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function zp(){return Math.random().toString(36).substring(2,10)}function Xc(a,s){return{usr:a.state,key:a.key,idx:s,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function ts(a,s,u=null,d,p){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof s=="string"?Mn(s):s,state:u,key:s&&s.key||d||zp(),unstable_mask:p}}function zo({pathname:a="/",search:s="",hash:u=""}){return s&&s!=="?"&&(a+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function Mn(a){let s={};if(a){let u=a.indexOf("#");u>=0&&(s.hash=a.substring(u),a=a.substring(0,u));let d=a.indexOf("?");d>=0&&(s.search=a.substring(d),a=a.substring(0,d)),a&&(s.pathname=a)}return s}function Ip(a,s,u,d={}){let{window:p=document.defaultView,v5Compat:h=!1}=d,v=p.history,S="POP",k=null,w=P();w==null&&(w=0,v.replaceState({...v.state,idx:w},""));function P(){return(v.state||{idx:null}).idx}function C(){S="POP";let I=P(),M=I==null?null:I-w;w=I,k&&k({action:S,location:O.location,delta:M})}function _(I,M){S="PUSH";let Y=Jc(I)?I:ts(O.location,I,M);w=P()+1;let Z=Xc(Y,w),H=O.createHref(Y.unstable_mask||Y);try{v.pushState(Z,"",H)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;p.location.assign(H)}h&&k&&k({action:S,location:O.location,delta:1})}function W(I,M){S="REPLACE";let Y=Jc(I)?I:ts(O.location,I,M);w=P();let Z=Xc(Y,w),H=O.createHref(Y.unstable_mask||Y);v.replaceState(Z,"",H),h&&k&&k({action:S,location:O.location,delta:0})}function F(I){return Dp(I)}let O={get action(){return S},get location(){return a(p,v)},listen(I){if(k)throw new Error("A history only accepts one active listener");return p.addEventListener(Yc,C),k=I,()=>{p.removeEventListener(Yc,C),k=null}},createHref(I){return s(p,I)},createURL:F,encodeLocation(I){let M=F(I);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:_,replace:W,go(I){return v.go(I)}};return O}function Dp(a,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Re(u,"No window.location.(origin|href) available to create URL");let d=typeof a=="string"?a:zo(a);return d=d.replace(/ $/,"%20"),!s&&d.startsWith("//")&&(d=u+d),new URL(d,u)}function ld(a,s,u="/"){return Op(a,s,u,!1)}function Op(a,s,u,d){let p=typeof s=="string"?Mn(s):s,h=ar(p.pathname||"/",u);if(h==null)return null;let v=sd(a);Fp(v);let S=null;for(let k=0;S==null&&k<v.length;++k){let w=Qp(h);S=qp(v[k],w,d)}return S}function sd(a,s=[],u=[],d="",p=!1){let h=(v,S,k=p,w)=>{let P={relativePath:w===void 0?v.path||"":w,caseSensitive:v.caseSensitive===!0,childrenIndex:S,route:v};if(P.relativePath.startsWith("/")){if(!P.relativePath.startsWith(d)&&k)return;Re(P.relativePath.startsWith(d),`Absolute route path "${P.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),P.relativePath=P.relativePath.slice(d.length)}let C=Ft([d,P.relativePath]),_=u.concat(P);v.children&&v.children.length>0&&(Re(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${C}".`),sd(v.children,s,_,C,k)),!(v.path==null&&!v.index)&&s.push({path:C,score:Vp(C,v.index),routesMeta:_})};return a.forEach((v,S)=>{var k;if(v.path===""||!((k=v.path)!=null&&k.includes("?")))h(v,S);else for(let w of ud(v.path))h(v,S,!0,w)}),s}function ud(a){let s=a.split("/");if(s.length===0)return[];let[u,...d]=s,p=u.endsWith("?"),h=u.replace(/\?$/,"");if(d.length===0)return p?[h,""]:[h];let v=ud(d.join("/")),S=[];return S.push(...v.map(k=>k===""?h:[h,k].join("/"))),p&&S.push(...v),S.map(k=>a.startsWith("/")&&k===""?"/":k)}function Fp(a){a.sort((s,u)=>s.score!==u.score?u.score-s.score:Hp(s.routesMeta.map(d=>d.childrenIndex),u.routesMeta.map(d=>d.childrenIndex)))}var Mp=/^:[\w-]+$/,Ap=3,$p=2,Up=1,Bp=10,Wp=-2,Zc=a=>a==="*";function Vp(a,s){let u=a.split("/"),d=u.length;return u.some(Zc)&&(d+=Wp),s&&(d+=$p),u.filter(p=>!Zc(p)).reduce((p,h)=>p+(Mp.test(h)?Ap:h===""?Up:Bp),d)}function Hp(a,s){return a.length===s.length&&a.slice(0,-1).every((d,p)=>d===s[p])?a[a.length-1]-s[s.length-1]:0}function qp(a,s,u=!1){let{routesMeta:d}=a,p={},h="/",v=[];for(let S=0;S<d.length;++S){let k=d[S],w=S===d.length-1,P=h==="/"?s:s.slice(h.length)||"/",C=ra({path:k.relativePath,caseSensitive:k.caseSensitive,end:w},P),_=k.route;if(!C&&w&&u&&!d[d.length-1].route.index&&(C=ra({path:k.relativePath,caseSensitive:k.caseSensitive,end:!1},P)),!C)return null;Object.assign(p,C.params),v.push({params:p,pathname:Ft([h,C.pathname]),pathnameBase:Xp(Ft([h,C.pathnameBase])),route:_}),C.pathnameBase!=="/"&&(h=Ft([h,C.pathnameBase]))}return v}function ra(a,s){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,d]=Kp(a.path,a.caseSensitive,a.end),p=s.match(u);if(!p)return null;let h=p[0],v=h.replace(/(.)\/+$/,"$1"),S=p.slice(1);return{params:d.reduce((w,{paramName:P,isOptional:C},_)=>{if(P==="*"){let F=S[_]||"";v=h.slice(0,h.length-F.length).replace(/(.)\/+$/,"$1")}const W=S[_];return C&&!W?w[P]=void 0:w[P]=(W||"").replace(/%2F/g,"/"),w},{}),pathname:h,pathnameBase:v,pattern:a}}function Kp(a,s=!1,u=!0){Mt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let d=[],p="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,S,k,w,P)=>{if(d.push({paramName:S,isOptional:k!=null}),k){let C=P.charAt(w+v.length);return C&&C!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(d.push({paramName:"*"}),p+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?p+="\\/*$":a!==""&&a!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,s?void 0:"i"),d]}function Qp(a){try{return a.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Mt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),a}}function ar(a,s){if(s==="/")return a;if(!a.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,d=a.charAt(u);return d&&d!=="/"?null:a.slice(u)||"/"}var Gp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Yp(a,s="/"){let{pathname:u,search:d="",hash:p=""}=typeof a=="string"?Mn(a):a,h;return u?(u=dd(u),u.startsWith("/")?h=ed(u.substring(1),"/"):h=ed(u,s)):h=s,{pathname:h,search:Zp(d),hash:em(p)}}function ed(a,s){let u=na(s).split("/");return a.split("/").forEach(p=>{p===".."?u.length>1&&u.pop():p!=="."&&u.push(p)}),u.length>1?u.join("/"):"/"}function Gl(a,s,u,d){return`Cannot include a '${a}' character in a manually specified \`to.${s}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Jp(a){return a.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function cd(a){let s=Jp(a);return s.map((u,d)=>d===s.length-1?u.pathname:u.pathnameBase)}function is(a,s,u,d=!1){let p;typeof a=="string"?p=Mn(a):(p={...a},Re(!p.pathname||!p.pathname.includes("?"),Gl("?","pathname","search",p)),Re(!p.pathname||!p.pathname.includes("#"),Gl("#","pathname","hash",p)),Re(!p.search||!p.search.includes("#"),Gl("#","search","hash",p)));let h=a===""||p.pathname==="",v=h?"/":p.pathname,S;if(v==null)S=u;else{let C=s.length-1;if(!d&&v.startsWith("..")){let _=v.split("/");for(;_[0]==="..";)_.shift(),C-=1;p.pathname=_.join("/")}S=C>=0?s[C]:"/"}let k=Yp(p,S),w=v&&v!=="/"&&v.endsWith("/"),P=(h||v===".")&&u.endsWith("/");return!k.pathname.endsWith("/")&&(w||P)&&(k.pathname+="/"),k}var dd=a=>a.replace(/\/\/+/g,"/"),Ft=a=>dd(a.join("/")),na=a=>a.replace(/\/+$/,""),Xp=a=>na(a).replace(/^\/*/,"/"),Zp=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,em=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,tm=class{constructor(a,s,u,d=!1){this.status=a,this.statusText=s||"",this.internal=d,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function rm(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function nm(a){let s=a.map(u=>u.route.path).filter(Boolean);return Ft(s)||"/"}var fd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function pd(a,s){let u=a;if(typeof u!="string"||!Gp.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let d=u,p=!1;if(fd)try{let h=new URL(window.location.href),v=u.startsWith("//")?new URL(h.protocol+u):new URL(u),S=ar(v.pathname,s);v.origin===h.origin&&S!=null?u=S+v.search+v.hash:p=!0}catch{Mt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:p,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var md=["POST","PUT","PATCH","DELETE"];new Set(md);var om=["GET",...md];new Set(om);var An=y.createContext(null);An.displayName="DataRouter";var aa=y.createContext(null);aa.displayName="DataRouterState";var hd=y.createContext(!1);function im(){return y.useContext(hd)}var gd=y.createContext({isTransitioning:!1});gd.displayName="ViewTransition";var am=y.createContext(new Map);am.displayName="Fetchers";var lm=y.createContext(null);lm.displayName="Await";var Pt=y.createContext(null);Pt.displayName="Navigation";var Io=y.createContext(null);Io.displayName="Location";var Qt=y.createContext({outlet:null,matches:[],isDataRoute:!1});Qt.displayName="Route";var as=y.createContext(null);as.displayName="RouteError";var vd="REACT_ROUTER_ERROR",sm="REDIRECT",um="ROUTE_ERROR_RESPONSE";function cm(a){if(a.startsWith(`${vd}:${sm}:{`))try{let s=JSON.parse(a.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function dm(a){if(a.startsWith(`${vd}:${um}:{`))try{let s=JSON.parse(a.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new tm(s.status,s.statusText,s.data)}catch{}}function fm(a,{relative:s}={}){Re(Do(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:d}=y.useContext(Pt),{hash:p,pathname:h,search:v}=Oo(a,{relative:s}),S=h;return u!=="/"&&(S=h==="/"?u:Ft([u,h])),d.createHref({pathname:S,search:v,hash:p})}function Do(){return y.useContext(Io)!=null}function _t(){return Re(Do(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(Io).location}var yd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xd(a){y.useContext(Pt).static||y.useLayoutEffect(a)}function Xr(){let{isDataRoute:a}=y.useContext(Qt);return a?bm():pm()}function pm(){Re(Do(),"useNavigate() may be used only in the context of a <Router> component.");let a=y.useContext(An),{basename:s,navigator:u}=y.useContext(Pt),{matches:d}=y.useContext(Qt),{pathname:p}=_t(),h=JSON.stringify(cd(d)),v=y.useRef(!1);return xd(()=>{v.current=!0}),y.useCallback((k,w={})=>{if(Mt(v.current,yd),!v.current)return;if(typeof k=="number"){u.go(k);return}let P=is(k,JSON.parse(h),p,w.relative==="path");a==null&&s!=="/"&&(P.pathname=P.pathname==="/"?s:Ft([s,P.pathname])),(w.replace?u.replace:u.push)(P,w.state,w)},[s,u,h,p,a])}y.createContext(null);function wd(){let{matches:a}=y.useContext(Qt),s=a[a.length-1];return(s==null?void 0:s.params)??{}}function Oo(a,{relative:s}={}){let{matches:u}=y.useContext(Qt),{pathname:d}=_t(),p=JSON.stringify(cd(u));return y.useMemo(()=>is(a,JSON.parse(p),d,s==="path"),[a,p,d,s])}function mm(a,s){return kd(a,s)}function kd(a,s,u){var I;Re(Do(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=y.useContext(Pt),{matches:p}=y.useContext(Qt),h=p[p.length-1],v=h?h.params:{},S=h?h.pathname:"/",k=h?h.pathnameBase:"/",w=h&&h.route;{let M=w&&w.path||"";Sd(S,!w||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${S}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let P=_t(),C;if(s){let M=typeof s=="string"?Mn(s):s;Re(k==="/"||((I=M.pathname)==null?void 0:I.startsWith(k)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${M.pathname}" was given in the \`location\` prop.`),C=M}else C=P;let _=C.pathname||"/",W=_;if(k!=="/"){let M=k.replace(/^\//,"").split("/");W="/"+_.replace(/^\//,"").split("/").slice(M.length).join("/")}let F=ld(a,{pathname:W});Mt(w||F!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),Mt(F==null||F[F.length-1].route.element!==void 0||F[F.length-1].route.Component!==void 0||F[F.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=xm(F&&F.map(M=>Object.assign({},M,{params:Object.assign({},v,M.params),pathname:Ft([k,d.encodeLocation?d.encodeLocation(M.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?k:Ft([k,d.encodeLocation?d.encodeLocation(M.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),p,u);return s&&O?y.createElement(Io.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...C},navigationType:"POP"}},O):O}function hm(){let a=Em(),s=rm(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,d="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:d},h={padding:"2px 4px",backgroundColor:d},v=null;return console.error("Error handled by React Router default ErrorBoundary:",a),v=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:h},"ErrorBoundary")," or"," ",y.createElement("code",{style:h},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},s),u?y.createElement("pre",{style:p},u):null,v)}var gm=y.createElement(hm,null),jd=class extends y.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,s){return s.location!==a.location||s.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:s.error,location:s.location,revalidation:a.revalidation||s.revalidation}}componentDidCatch(a,s){this.props.onError?this.props.onError(a,s):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const u=dm(a.digest);u&&(a=u)}let s=a!==void 0?y.createElement(Qt.Provider,{value:this.props.routeContext},y.createElement(as.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?y.createElement(vm,{error:a},s):s}};jd.contextType=hd;var Yl=new WeakMap;function vm({children:a,error:s}){let{basename:u}=y.useContext(Pt);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let d=cm(s.digest);if(d){let p=Yl.get(s);if(p)throw p;let h=pd(d.location,u);if(fd&&!Yl.get(s))if(h.isExternal||d.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:d.replace}));throw Yl.set(s,v),v}return y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return a}function ym({routeContext:a,match:s,children:u}){let d=y.useContext(An);return d&&d.static&&d.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=s.route.id),y.createElement(Qt.Provider,{value:a},u)}function xm(a,s=[],u){let d=u==null?void 0:u.state;if(a==null){if(!d)return null;if(d.errors)a=d.matches;else if(s.length===0&&!d.initialized&&d.matches.length>0)a=d.matches;else return null}let p=a,h=d==null?void 0:d.errors;if(h!=null){let P=p.findIndex(C=>C.route.id&&(h==null?void 0:h[C.route.id])!==void 0);Re(P>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),p=p.slice(0,Math.min(p.length,P+1))}let v=!1,S=-1;if(u&&d){v=d.renderFallback;for(let P=0;P<p.length;P++){let C=p[P];if((C.route.HydrateFallback||C.route.hydrateFallbackElement)&&(S=P),C.route.id){let{loaderData:_,errors:W}=d,F=C.route.loader&&!_.hasOwnProperty(C.route.id)&&(!W||W[C.route.id]===void 0);if(C.route.lazy||F){u.isStatic&&(v=!0),S>=0?p=p.slice(0,S+1):p=[p[0]];break}}}}let k=u==null?void 0:u.onError,w=d&&k?(P,C)=>{var _,W;k(P,{location:d.location,params:((W=(_=d.matches)==null?void 0:_[0])==null?void 0:W.params)??{},unstable_pattern:nm(d.matches),errorInfo:C})}:void 0;return p.reduceRight((P,C,_)=>{let W,F=!1,O=null,I=null;d&&(W=h&&C.route.id?h[C.route.id]:void 0,O=C.route.errorElement||gm,v&&(S<0&&_===0?(Sd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),F=!0,I=null):S===_&&(F=!0,I=C.route.hydrateFallbackElement||null)));let M=s.concat(p.slice(0,_+1)),Y=()=>{let Z;return W?Z=O:F?Z=I:C.route.Component?Z=y.createElement(C.route.Component,null):C.route.element?Z=C.route.element:Z=P,y.createElement(ym,{match:C,routeContext:{outlet:P,matches:M,isDataRoute:d!=null},children:Z})};return d&&(C.route.ErrorBoundary||C.route.errorElement||_===0)?y.createElement(jd,{location:d.location,revalidation:d.revalidation,component:O,error:W,children:Y(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:w}):Y()},null)}function ls(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wm(a){let s=y.useContext(An);return Re(s,ls(a)),s}function km(a){let s=y.useContext(aa);return Re(s,ls(a)),s}function jm(a){let s=y.useContext(Qt);return Re(s,ls(a)),s}function ss(a){let s=jm(a),u=s.matches[s.matches.length-1];return Re(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function Sm(){return ss("useRouteId")}function Em(){var d;let a=y.useContext(as),s=km("useRouteError"),u=ss("useRouteError");return a!==void 0?a:(d=s.errors)==null?void 0:d[u]}function bm(){let{router:a}=wm("useNavigate"),s=ss("useNavigate"),u=y.useRef(!1);return xd(()=>{u.current=!0}),y.useCallback(async(p,h={})=>{Mt(u.current,yd),u.current&&(typeof p=="number"?await a.navigate(p):await a.navigate(p,{fromRouteId:s,...h}))},[a,s])}var td={};function Sd(a,s,u){!s&&!td[a]&&(td[a]=!0,Mt(!1,u))}y.memo(Cm);function Cm({routes:a,future:s,state:u,isStatic:d,onError:p}){return kd(a,void 0,{state:u,isStatic:d,onError:p})}function Lr(a){Re(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Nm({basename:a="/",children:s=null,location:u,navigationType:d="POP",navigator:p,static:h=!1,unstable_useTransitions:v}){Re(!Do(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let S=a.replace(/^\/*/,"/"),k=y.useMemo(()=>({basename:S,navigator:p,static:h,unstable_useTransitions:v,future:{}}),[S,p,h,v]);typeof u=="string"&&(u=Mn(u));let{pathname:w="/",search:P="",hash:C="",state:_=null,key:W="default",unstable_mask:F}=u,O=y.useMemo(()=>{let I=ar(w,S);return I==null?null:{location:{pathname:I,search:P,hash:C,state:_,key:W,unstable_mask:F},navigationType:d}},[S,w,P,C,_,W,d,F]);return Mt(O!=null,`<Router basename="${S}"> is not able to match the URL "${w}${P}${C}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:y.createElement(Pt.Provider,{value:k},y.createElement(Io.Provider,{children:s,value:O}))}function Pm({children:a,location:s}){return mm(rs(a),s)}function rs(a,s=[]){let u=[];return y.Children.forEach(a,(d,p)=>{if(!y.isValidElement(d))return;let h=[...s,p];if(d.type===y.Fragment){u.push.apply(u,rs(d.props.children,h));return}Re(d.type===Lr,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Re(!d.props.index||!d.props.children,"An index route cannot have child routes.");let v={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(v.children=rs(d.props.children,h)),u.push(v)}),u}var Zi="get",ea="application/x-www-form-urlencoded";function la(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function _m(a){return la(a)&&a.tagName.toLowerCase()==="button"}function Rm(a){return la(a)&&a.tagName.toLowerCase()==="form"}function Tm(a){return la(a)&&a.tagName.toLowerCase()==="input"}function Lm(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function zm(a,s){return a.button===0&&(!s||s==="_self")&&!Lm(a)}function ns(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((s,u)=>{let d=a[u];return s.concat(Array.isArray(d)?d.map(p=>[u,p]):[[u,d]])},[]))}function Im(a,s){let u=ns(a);return s&&s.forEach((d,p)=>{u.has(p)||s.getAll(p).forEach(h=>{u.append(p,h)})}),u}var Ji=null;function Dm(){if(Ji===null)try{new FormData(document.createElement("form"),0),Ji=!1}catch{Ji=!0}return Ji}var Om=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jl(a){return a!=null&&!Om.has(a)?(Mt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ea}"`),null):a}function Fm(a,s){let u,d,p,h,v;if(Rm(a)){let S=a.getAttribute("action");d=S?ar(S,s):null,u=a.getAttribute("method")||Zi,p=Jl(a.getAttribute("enctype"))||ea,h=new FormData(a)}else if(_m(a)||Tm(a)&&(a.type==="submit"||a.type==="image")){let S=a.form;if(S==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let k=a.getAttribute("formaction")||S.getAttribute("action");if(d=k?ar(k,s):null,u=a.getAttribute("formmethod")||S.getAttribute("method")||Zi,p=Jl(a.getAttribute("formenctype"))||Jl(S.getAttribute("enctype"))||ea,h=new FormData(S,a),!Dm()){let{name:w,type:P,value:C}=a;if(P==="image"){let _=w?`${w}.`:"";h.append(`${_}x`,"0"),h.append(`${_}y`,"0")}else w&&h.append(w,C)}}else{if(la(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Zi,d=null,p=ea,v=a}return h&&p==="text/plain"&&(v=h,h=void 0),{action:d,method:u.toLowerCase(),encType:p,formData:h,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function us(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function Ed(a,s,u,d){let p=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return u?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${d}`:p.pathname=`${p.pathname}.${d}`:p.pathname==="/"?p.pathname=`_root.${d}`:s&&ar(p.pathname,s)==="/"?p.pathname=`${na(s)}/_root.${d}`:p.pathname=`${na(p.pathname)}.${d}`,p}async function Mm(a,s){if(a.id in s)return s[a.id];try{let u=await import(a.module);return s[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Am(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function $m(a,s,u){let d=await Promise.all(a.map(async p=>{let h=s.routes[p.route.id];if(h){let v=await Mm(h,u);return v.links?v.links():[]}return[]}));return Vm(d.flat(1).filter(Am).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function rd(a,s,u,d,p,h){let v=(k,w)=>u[w]?k.route.id!==u[w].route.id:!0,S=(k,w)=>{var P;return u[w].pathname!==k.pathname||((P=u[w].route.path)==null?void 0:P.endsWith("*"))&&u[w].params["*"]!==k.params["*"]};return h==="assets"?s.filter((k,w)=>v(k,w)||S(k,w)):h==="data"?s.filter((k,w)=>{var C;let P=d.routes[k.route.id];if(!P||!P.hasLoader)return!1;if(v(k,w)||S(k,w))return!0;if(k.route.shouldRevalidate){let _=k.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:((C=u[0])==null?void 0:C.params)||{},nextUrl:new URL(a,window.origin),nextParams:k.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function Um(a,s,{includeHydrateFallback:u}={}){return Bm(a.map(d=>{let p=s.routes[d.route.id];if(!p)return[];let h=[p.module];return p.clientActionModule&&(h=h.concat(p.clientActionModule)),p.clientLoaderModule&&(h=h.concat(p.clientLoaderModule)),u&&p.hydrateFallbackModule&&(h=h.concat(p.hydrateFallbackModule)),p.imports&&(h=h.concat(p.imports)),h}).flat(1))}function Bm(a){return[...new Set(a)]}function Wm(a){let s={},u=Object.keys(a).sort();for(let d of u)s[d]=a[d];return s}function Vm(a,s){let u=new Set;return new Set(s),a.reduce((d,p)=>{let h=JSON.stringify(Wm(p));return u.has(h)||(u.add(h),d.push({key:h,link:p})),d},[])}function cs(){let a=y.useContext(An);return us(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Hm(){let a=y.useContext(aa);return us(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var ds=y.createContext(void 0);ds.displayName="FrameworkContext";function fs(){let a=y.useContext(ds);return us(a,"You must render this element inside a <HydratedRouter> element"),a}function qm(a,s){let u=y.useContext(ds),[d,p]=y.useState(!1),[h,v]=y.useState(!1),{onFocus:S,onBlur:k,onMouseEnter:w,onMouseLeave:P,onTouchStart:C}=s,_=y.useRef(null);y.useEffect(()=>{if(a==="render"&&v(!0),a==="viewport"){let O=M=>{M.forEach(Y=>{v(Y.isIntersecting)})},I=new IntersectionObserver(O,{threshold:.5});return _.current&&I.observe(_.current),()=>{I.disconnect()}}},[a]),y.useEffect(()=>{if(d){let O=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(O)}}},[d]);let W=()=>{p(!0)},F=()=>{p(!1),v(!1)};return u?a!=="intent"?[h,_,{}]:[h,_,{onFocus:Ro(S,W),onBlur:Ro(k,F),onMouseEnter:Ro(w,W),onMouseLeave:Ro(P,F),onTouchStart:Ro(C,W)}]:[!1,_,{}]}function Ro(a,s){return u=>{a&&a(u),u.defaultPrevented||s(u)}}function Km({page:a,...s}){let u=im(),{router:d}=cs(),p=y.useMemo(()=>ld(d.routes,a,d.basename),[d.routes,a,d.basename]);return p?u?y.createElement(Gm,{page:a,matches:p,...s}):y.createElement(Ym,{page:a,matches:p,...s}):null}function Qm(a){let{manifest:s,routeModules:u}=fs(),[d,p]=y.useState([]);return y.useEffect(()=>{let h=!1;return $m(a,s,u).then(v=>{h||p(v)}),()=>{h=!0}},[a,s,u]),d}function Gm({page:a,matches:s,...u}){let d=_t(),{future:p}=fs(),{basename:h}=cs(),v=y.useMemo(()=>{if(a===d.pathname+d.search+d.hash)return[];let S=Ed(a,h,p.unstable_trailingSlashAwareDataRequests,"rsc"),k=!1,w=[];for(let P of s)typeof P.route.shouldRevalidate=="function"?k=!0:w.push(P.route.id);return k&&w.length>0&&S.searchParams.set("_routes",w.join(",")),[S.pathname+S.search]},[h,p.unstable_trailingSlashAwareDataRequests,a,d,s]);return y.createElement(y.Fragment,null,v.map(S=>y.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...u})))}function Ym({page:a,matches:s,...u}){let d=_t(),{future:p,manifest:h,routeModules:v}=fs(),{basename:S}=cs(),{loaderData:k,matches:w}=Hm(),P=y.useMemo(()=>rd(a,s,w,h,d,"data"),[a,s,w,h,d]),C=y.useMemo(()=>rd(a,s,w,h,d,"assets"),[a,s,w,h,d]),_=y.useMemo(()=>{if(a===d.pathname+d.search+d.hash)return[];let O=new Set,I=!1;if(s.forEach(Y=>{var H;let Z=h.routes[Y.route.id];!Z||!Z.hasLoader||(!P.some(re=>re.route.id===Y.route.id)&&Y.route.id in k&&((H=v[Y.route.id])!=null&&H.shouldRevalidate)||Z.hasClientLoader?I=!0:O.add(Y.route.id))}),O.size===0)return[];let M=Ed(a,S,p.unstable_trailingSlashAwareDataRequests,"data");return I&&O.size>0&&M.searchParams.set("_routes",s.filter(Y=>O.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[M.pathname+M.search]},[S,p.unstable_trailingSlashAwareDataRequests,k,d,h,P,s,a,v]),W=y.useMemo(()=>Um(C,h),[C,h]),F=Qm(C);return y.createElement(y.Fragment,null,_.map(O=>y.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...u})),W.map(O=>y.createElement("link",{key:O,rel:"modulepreload",href:O,...u})),F.map(({key:O,link:I})=>y.createElement("link",{key:O,nonce:u.nonce,...I,crossOrigin:I.crossOrigin??u.crossOrigin})))}function Jm(...a){return s=>{a.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var Xm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Xm&&(window.__reactRouterVersion="7.14.2")}catch{}function Zm({basename:a,children:s,unstable_useTransitions:u,window:d}){let p=y.useRef();p.current==null&&(p.current=Lp({window:d,v5Compat:!0}));let h=p.current,[v,S]=y.useState({action:h.action,location:h.location}),k=y.useCallback(w=>{u===!1?S(w):y.startTransition(()=>S(w))},[u]);return y.useLayoutEffect(()=>h.listen(k),[h,k]),y.createElement(Nm,{basename:a,children:s,location:v.location,navigationType:v.action,navigator:h,unstable_useTransitions:u})}var bd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kt=y.forwardRef(function({onClick:s,discover:u="render",prefetch:d="none",relative:p,reloadDocument:h,replace:v,unstable_mask:S,state:k,target:w,to:P,preventScrollReset:C,viewTransition:_,unstable_defaultShouldRevalidate:W,...F},O){let{basename:I,navigator:M,unstable_useTransitions:Y}=y.useContext(Pt),Z=typeof P=="string"&&bd.test(P),H=pd(P,I);P=H.to;let re=fm(P,{relative:p}),de=_t(),ve=null;if(S){let ze=is(S,[],de.unstable_mask?de.unstable_mask.pathname:"/",!0);I!=="/"&&(ze.pathname=ze.pathname==="/"?I:Ft([I,ze.pathname])),ve=M.createHref(ze)}let[le,$e,Ye]=qm(d,F),mt=nh(P,{replace:v,unstable_mask:S,state:k,target:w,preventScrollReset:C,relative:p,viewTransition:_,unstable_defaultShouldRevalidate:W,unstable_useTransitions:Y});function Te(ze){s&&s(ze),ze.defaultPrevented||mt(ze)}let We=!(H.isExternal||h),Je=y.createElement("a",{...F,...Ye,href:(We?ve:void 0)||H.absoluteURL||re,onClick:We?Te:s,ref:Jm(O,$e),target:w,"data-discover":!Z&&u==="render"?"true":void 0});return le&&!Z?y.createElement(y.Fragment,null,Je,y.createElement(Km,{page:re})):Je});Kt.displayName="Link";var eh=y.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:d="",end:p=!1,style:h,to:v,viewTransition:S,children:k,...w},P){let C=Oo(v,{relative:w.relative}),_=_t(),W=y.useContext(aa),{navigator:F,basename:O}=y.useContext(Pt),I=W!=null&&uh(C)&&S===!0,M=F.encodeLocation?F.encodeLocation(C).pathname:C.pathname,Y=_.pathname,Z=W&&W.navigation&&W.navigation.location?W.navigation.location.pathname:null;u||(Y=Y.toLowerCase(),Z=Z?Z.toLowerCase():null,M=M.toLowerCase()),Z&&O&&(Z=ar(Z,O)||Z);const H=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let re=Y===M||!p&&Y.startsWith(M)&&Y.charAt(H)==="/",de=Z!=null&&(Z===M||!p&&Z.startsWith(M)&&Z.charAt(M.length)==="/"),ve={isActive:re,isPending:de,isTransitioning:I},le=re?s:void 0,$e;typeof d=="function"?$e=d(ve):$e=[d,re?"active":null,de?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let Ye=typeof h=="function"?h(ve):h;return y.createElement(Kt,{...w,"aria-current":le,className:$e,ref:P,style:Ye,to:v,viewTransition:S},typeof k=="function"?k(ve):k)});eh.displayName="NavLink";var th=y.forwardRef(({discover:a="render",fetcherKey:s,navigate:u,reloadDocument:d,replace:p,state:h,method:v=Zi,action:S,onSubmit:k,relative:w,preventScrollReset:P,viewTransition:C,unstable_defaultShouldRevalidate:_,...W},F)=>{let{unstable_useTransitions:O}=y.useContext(Pt),I=lh(),M=sh(S,{relative:w}),Y=v.toLowerCase()==="get"?"get":"post",Z=typeof S=="string"&&bd.test(S),H=re=>{if(k&&k(re),re.defaultPrevented)return;re.preventDefault();let de=re.nativeEvent.submitter,ve=(de==null?void 0:de.getAttribute("formmethod"))||v,le=()=>I(de||re.currentTarget,{fetcherKey:s,method:ve,navigate:u,replace:p,state:h,relative:w,preventScrollReset:P,viewTransition:C,unstable_defaultShouldRevalidate:_});O&&u!==!1?y.startTransition(()=>le()):le()};return y.createElement("form",{ref:F,method:Y,action:M,onSubmit:d?k:H,...W,"data-discover":!Z&&a==="render"?"true":void 0})});th.displayName="Form";function rh(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cd(a){let s=y.useContext(An);return Re(s,rh(a)),s}function nh(a,{target:s,replace:u,unstable_mask:d,state:p,preventScrollReset:h,relative:v,viewTransition:S,unstable_defaultShouldRevalidate:k,unstable_useTransitions:w}={}){let P=Xr(),C=_t(),_=Oo(a,{relative:v});return y.useCallback(W=>{if(zm(W,s)){W.preventDefault();let F=u!==void 0?u:zo(C)===zo(_),O=()=>P(a,{replace:F,unstable_mask:d,state:p,preventScrollReset:h,relative:v,viewTransition:S,unstable_defaultShouldRevalidate:k});w?y.startTransition(()=>O()):O()}},[C,P,_,u,d,p,s,a,h,v,S,k,w])}function oh(a){Mt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=y.useRef(ns(a)),u=y.useRef(!1),d=_t(),p=y.useMemo(()=>Im(d.search,u.current?null:s.current),[d.search]),h=Xr(),v=y.useCallback((S,k)=>{const w=ns(typeof S=="function"?S(new URLSearchParams(p)):S);u.current=!0,h("?"+w,k)},[h,p]);return[p,v]}var ih=0,ah=()=>`__${String(++ih)}__`;function lh(){let{router:a}=Cd("useSubmit"),{basename:s}=y.useContext(Pt),u=Sm(),d=a.fetch,p=a.navigate;return y.useCallback(async(h,v={})=>{let{action:S,method:k,encType:w,formData:P,body:C}=Fm(h,s);if(v.navigate===!1){let _=v.fetcherKey||ah();await d(_,u,v.action||S,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:P,body:C,formMethod:v.method||k,formEncType:v.encType||w,flushSync:v.flushSync})}else await p(v.action||S,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:P,body:C,formMethod:v.method||k,formEncType:v.encType||w,replace:v.replace,state:v.state,fromRouteId:u,flushSync:v.flushSync,viewTransition:v.viewTransition})},[d,p,s,u])}function sh(a,{relative:s}={}){let{basename:u}=y.useContext(Pt),d=y.useContext(Qt);Re(d,"useFormAction must be used inside a RouteContext");let[p]=d.matches.slice(-1),h={...Oo(a||".",{relative:s})},v=_t();if(a==null){h.search=v.search;let S=new URLSearchParams(h.search),k=S.getAll("index");if(k.some(P=>P==="")){S.delete("index"),k.filter(C=>C).forEach(C=>S.append("index",C));let P=S.toString();h.search=P?`?${P}`:""}}return(!a||a===".")&&p.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(h.pathname=h.pathname==="/"?u:Ft([u,h.pathname])),zo(h)}function uh(a,{relative:s}={}){let u=y.useContext(gd);Re(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=Cd("useViewTransitionState"),p=Oo(a,{relative:s});if(!u.isTransitioning)return!1;let h=ar(u.currentLocation.pathname,d)||u.currentLocation.pathname,v=ar(u.nextLocation.pathname,d)||u.nextLocation.pathname;return ra(p.pathname,v)!=null||ra(p.pathname,h)!=null}const Nd=y.createContext(void 0),nd="saki_bee_cart";function ch({children:a}){const[s,u]=y.useState([]);y.useEffect(()=>{const w=localStorage.getItem(nd);if(w)try{u(JSON.parse(w))}catch(P){console.error("Failed to parse cart from localStorage:",P)}},[]),y.useEffect(()=>{localStorage.setItem(nd,JSON.stringify(s))},[s]);const d=(w,P)=>{const C=w.salePrice??w.price;u(_=>_.find(F=>F.productId===w.id)?_.map(F=>F.productId===w.id?{...F,quantity:F.quantity+P}:F):[..._,{productId:w.id,slug:w.slug,name:w.name,price:C,quantity:P,image:w.image}])},p=w=>{u(P=>P.filter(C=>C.productId!==w))},h=(w,P)=>{if(P<=0){p(w);return}u(C=>C.map(_=>_.productId===w?{..._,quantity:P}:_))},v=()=>{u([])},S=()=>s.reduce((w,P)=>w+P.price*P.quantity,0),k=()=>s.reduce((w,P)=>w+P.quantity,0);return o.jsx(Nd.Provider,{value:{cart:s,addToCart:d,removeFromCart:p,updateQuantity:h,clearCart:v,getTotalPrice:S,getTotalItems:k},children:a})}function Zr(){const a=y.useContext(Nd);if(a===void 0)throw new Error("useCart must be used within CartProvider");return a}const dh={bg:{navAbout:"За нас",navProducts:"Продукти",navContact:"Контакти",heroTitle:"Пчеларски магазин САКИ",heroSubtitle:"Натурален мед от собствени пчелини в Долистово и Коркина, пчеларски инвентар и практични съвети от семейство с над 20 години опит.",heroCtaProducts:"Разгледайте продуктите",heroCtaContact:"Свържете се с нас",heroCtaHoney:"Пчелни продукти",heroCtaEquipment:"Всичко за пчеларя",aboutTitle:"За нас",aboutSubtitle:"Семейна фирма с над 20 години опит в пчеларството, натуралния мед и пчелните продукти",storyTitle:"Нашата история",storyText1:"САКИ е семейна фирма, създадена с любов към пчеларството и чистия, натурален мед. Повече от 20 години се грижим за пчелите си и учим от природата. Натрупаният опит и внимание личат във всеки продукт, който предлагаме.",storyText2:"Започнахме скромно, но останахме верни на най-важното: качество, честност и грижа към природата. За нас пчеларството не е просто работа, а начин на живот.",apiariesTitle:"Нашите пчелини",apiariesText1:"Пчелините ни се намират в селата Долистово и Коркина – места с чиста природа и богато разнообразие от растения. Това създава отлични условия за здрави пчелни семейства и качествен мед.",apiariesText2:"Грижим се за всяко пчелно семейство с внимание и отговорност, за да ви предложим чист мед – без добавки и компромиси.",certificationTitle:"Сертификация и качество",certificationText1:"Медът ни е сертифициран от БАБХ (Българска агенция по безопасност на храните) и се произвежда с постоянен контрол върху качеството.",certificationText2:"При нас ще намерите пчелни продукти, на които можете да разчитате - чисти, полезни и направени с грижа.",cardExperience:"20+ години опит",cardExperienceText:"Практически опит в пчеларството и производството на натурален мед.",cardApiaries:"Собствени пчелини",cardApiariesText:"Разполагаме с пчелини в Долистово и Коркина – сред чиста и богата природа.",cardCertification:"Сертифицирано качество",cardCertificationText:"Медът ни е сертифициран от БАБХ и отговаря на изискванията за безопасност.",cardShop:"Магазин в Дупница",cardShopText:"Ще ни намерите на Кооперативния пазар, павилион 5 – за директни покупки и съвети.",cardProducts:"Богат асортимент",cardProductsText:"Предлагаме мед, кошери, инвентар, центрофуги и пчелни продукти.",cardDelivery:"Бърза доставка",cardDeliveryText:"Доставяме бързо и сигурно в цялата страна.",whyChooseTitle:"Защо да изберете САКИ?",whyChoose1:"Над 20 години опит в пчеларството",whyChoose2:"Собствени пчелини с натурален мед",whyChoose3:"Сертифицирано качество от БАБХ",whyChoose4:"Семейна фирма с честно отношение",whyChoose5:"Богат избор от продукти и оборудване",whyChoose6:"Консултации и помощ за пчелари",productsTitle:"Нашите продукти",productsSubtitle:"Мед, пчелни продукти, кошери, рамки, центрофуги и инвентар за ежедневната работа в пчелина",productInquiry:"Запитване →",productsCta:"Търсите нещо конкретно?",productsCtaButton:"Пишете ни",contactTitle:"Свържете се с нас",contactSubtitle:"Имате въпрос за мед, оборудване или доставка? Пишете ни - ще ви отговорим възможно най-скоро.",address:"Адрес",addressValue:"Кооперативен пазар, павилион 5, гр. Дупница",phone:"Телефон",phoneValue:"089 551 7056",email:"Имейл",emailValue:"info@sakimed.com",website:"Уебсайт",websiteValue:"www.sakimed.com",facebook:"Facebook",facebookValue:"facebook.com/Saki2008",workingHours:"Работно време",workingHoursWeekday:"Понеделник – Петък: 09:00 – 18:00",workingHoursSaturday:"Събота: 09:00 – 14:00",formName:"Име *",formNamePlaceholder:"Вашето име",formEmail:"Имейл *",formEmailPlaceholder:"your@email.com",formPhone:"Телефон",formPhonePlaceholder:"+359 88 123 4567",formMessage:"Съобщение *",formMessagePlaceholder:"Напишете какво ви интересува...",formSubmit:"Изпрати",formSubmitting:"Изпращане...",formSuccess:"Съобщението е изпратено успешно! Ще се свържем с вас скоро.",formError:"Възникна грешка. Опитайте отново.",footerTagline:"Вашият надежден партньор в пчеларството",footerRights:"Всички права запазени."},en:{navAbout:"About",navProducts:"Products",navContact:"Contact",heroTitle:"SAKI Beekeeping Shop",heroSubtitle:"Natural honey from our own apiaries in Dolistovo and Korkina, beekeeping equipment, and practical advice from a family with over 20 years of experience.",heroCtaProducts:"Browse Products",heroCtaContact:"Contact Us",heroCtaHoney:"Bee Products",heroCtaEquipment:"For Beekeepers",aboutTitle:"About Us",aboutSubtitle:"A family business with over 20 years of experience in beekeeping and natural honey production",storyTitle:"Our Story",storyText1:"SAKI is a family-run business built on a genuine love for beekeeping and pure, natural honey. For over 20 years, we have cared for our bees and learned from nature itself. That experience shows in every product we offer.",storyText2:"We started small, but stayed true to what matters most – quality, honesty, and respect for nature. For us, beekeeping is not just a job, but a way of life.",apiariesTitle:"Our Apiaries",apiariesText1:"Our apiaries are located in Dolistovo and Korkina – areas with clean nature and rich plant diversity, ideal for healthy bee colonies.",apiariesText2:"We care for every colony with attention and responsibility to deliver pure honey – with no additives and no compromises.",certificationTitle:"Certification & Quality",certificationText1:"Our honey is certified by BABH (Bulgarian Food Safety Agency) and produced with consistent quality control.",certificationText2:"With us, you’ll find products you can trust – natural, beneficial, and made with care.",cardExperience:"20+ Years Experience",cardExperienceText:"Extensive experience in beekeeping and natural honey production.",cardApiaries:"Own Apiaries",cardApiariesText:"We operate our own apiaries in clean and rich natural environments.",cardCertification:"Certified Quality",cardCertificationText:"Our honey meets all safety and quality standards.",cardShop:"Shop in Dupnitsa",cardShopText:"Visit us at the Cooperative Market, Pavilion 5 for direct purchases and advice.",cardProducts:"Wide Selection",cardProductsText:"Honey, hives, equipment, extractors, and bee products.",cardDelivery:"Fast Delivery",cardDeliveryText:"We deliver quickly and reliably across the country.",whyChooseTitle:"Why Choose SAKI?",whyChoose1:"Over 20 years of beekeeping experience",whyChoose2:"Own apiaries with natural honey",whyChoose3:"Certified quality by BABH",whyChoose4:"Family business built on trust",whyChoose5:"Wide range of products and equipment",whyChoose6:"Support and advice for beekeepers",productsTitle:"Our Products",productsSubtitle:"Honey, bee products, hives, frames, extractors, and tools for everyday apiary work",productInquiry:"Inquiry →",productsCta:"Looking for something specific?",productsCtaButton:"Contact Us",contactTitle:"Contact Us",contactSubtitle:"Have a question about honey, equipment, or delivery? Send us a message and we’ll reply as soon as possible.",address:"Address",addressValue:"Cooperative Market, Pavilion 5, Dupnitsa",phone:"Phone",phoneValue:"089 551 7056",email:"Email",emailValue:"info@sakimed.com",website:"Website",websiteValue:"www.sakimed.com",facebook:"Facebook",facebookValue:"facebook.com/Saki2008",workingHours:"Working Hours",workingHoursWeekday:"Monday – Friday: 09:00 – 18:00",workingHoursSaturday:"Saturday: 09:00 – 14:00",formName:"Name *",formNamePlaceholder:"Your name",formEmail:"Email *",formEmailPlaceholder:"your@email.com",formPhone:"Phone",formPhonePlaceholder:"+359 88 123 4567",formMessage:"Message *",formMessagePlaceholder:"Tell us what you need...",formSubmit:"Send",formSubmitting:"Sending...",formSuccess:"Message sent successfully! We’ll get back to you soon.",formError:"Something went wrong. Please try again.",footerTagline:"Your trusted partner in beekeeping",footerRights:"All rights reserved."}},Pd=y.createContext(void 0);function fh({children:a}){const[s,u]=y.useState(()=>{if(typeof window<"u"){const p=localStorage.getItem("language");if(p)return p}return"bg"});y.useEffect(()=>{localStorage.setItem("language",s),document.documentElement.lang=s},[s]);const d=p=>dh[s][p]||p;return o.jsx(Pd.Provider,{value:{language:s,setLanguage:u,t:d},children:a})}function en(){const a=y.useContext(Pd);if(!a)throw new Error("useLanguage must be used within a LanguageProvider");return a}function ph(){return o.jsxs("div",{className:"uk-flag",children:[o.jsx("div",{className:"bg"}),o.jsx("div",{className:"diag white d1"}),o.jsx("div",{className:"diag white d2"}),o.jsx("div",{className:"diag red d1"}),o.jsx("div",{className:"diag red d2"}),o.jsx("div",{className:"cross white horizontal"}),o.jsx("div",{className:"cross white vertical"}),o.jsx("div",{className:"cross red horizontal"}),o.jsx("div",{className:"cross red vertical"}),o.jsx("style",{children:`
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
      `})]})}function mh(){const{language:a,setLanguage:s}=en();return o.jsxs("div",{className:"language-switcher",children:[o.jsx("button",{className:`lang-btn ${a==="en"?"active":""}`,onClick:()=>s("en"),"aria-label":"English",title:"English",children:o.jsx(ph,{})}),o.jsx("button",{className:`lang-btn ${a==="bg"?"active":""}`,onClick:()=>s("bg"),"aria-label":"Български",title:"Български",children:o.jsxs("div",{className:"flag-bg",children:[o.jsx("div",{className:"bg-stripe white"}),o.jsx("div",{className:"bg-stripe green"}),o.jsx("div",{className:"bg-stripe red"})]})}),o.jsx("style",{children:`
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
      `})]})}function hh(){const[a,s]=y.useState(!1),{t:u,language:d}=en(),{getTotalItems:p}=Zr(),h=Xr(),v=_t(),S=k=>{if(s(!1),v.pathname==="/"){const w=document.getElementById(k);w&&w.scrollIntoView({behavior:"smooth"})}else h("/"),setTimeout(()=>{const w=document.getElementById(k);w&&w.scrollIntoView({behavior:"smooth"})},100)};return o.jsxs("header",{className:"header",children:[o.jsxs("div",{className:"container header-container",children:[o.jsx(Kt,{to:"/",className:"logo",onClick:k=>{s(!1),v.pathname==="/"&&(k.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))},children:o.jsx("img",{src:"/bee-logo.jpg",alt:d==="bg"?"Лого на пчеларски магазин САКИ":"SAKI beekeeping shop logo",className:"logo-img"})}),o.jsxs("nav",{className:`nav ${a?"nav-open":""}`,children:[o.jsx("button",{className:"nav-link",onClick:()=>S("about"),style:{background:"none",border:"none",cursor:"pointer"},children:u("navAbout")}),o.jsx(Kt,{to:"/products",className:"nav-link",onClick:()=>s(!1),children:u("navProducts")}),o.jsx("button",{className:"nav-link",onClick:()=>S("contact"),style:{background:"none",border:"none",cursor:"pointer"},children:u("navContact")}),o.jsxs(Kt,{to:"/cart",className:"nav-link cart-link",onClick:()=>s(!1),children:["🛒 ",d==="bg"?"Количка":"Cart",p()>0&&o.jsx("span",{className:"cart-badge",children:p()})]}),o.jsx("div",{className:"nav-lang-switcher",children:o.jsx(mh,{})})]}),o.jsx("button",{className:"menu-toggle",onClick:()=>s(!a),"aria-label":d==="bg"?"Отвори менюто":"Toggle menu",children:o.jsx("span",{className:`hamburger ${a?"open":""}`})})]}),o.jsx("style",{children:`
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
      `})]})}function gh(){const{t:a,language:s}=en();return o.jsxs("footer",{className:"footer",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"footer-grid",children:[o.jsxs("div",{className:"footer-brand",children:[o.jsx("div",{className:"footer-logo",children:o.jsx("img",{src:"/bee-logo.jpg",alt:s==="bg"?"Лого на САКИ":"SAKI logo",style:{height:"40px",width:"40px",objectFit:"contain"}})}),o.jsx("p",{children:s==="bg"?"Семеен пчеларски магазин в Дупница с натурален мед, пчелни продукти и оборудване за пчелари.":"A family beekeeping shop in Dupnitsa with natural honey, bee products, and equipment for beekeepers."})]}),o.jsxs("div",{className:"footer-links",children:[o.jsx("h4",{children:s==="bg"?"Бързи връзки":"Quick Links"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx("a",{href:"#about",children:a("navAbout")})}),o.jsx("li",{children:o.jsx("a",{href:"#products",children:a("navProducts")})}),o.jsx("li",{children:o.jsx("a",{href:"#contact",children:a("navContact")})}),o.jsx("li",{children:o.jsx(Kt,{to:"/admin",rel:"nofollow",style:{color:"rgba(255, 255, 255, 0.3)",fontSize:"0.8rem"},children:s==="bg"?"Админ":"Admin"})})]})]}),o.jsxs("div",{className:"footer-contact",children:[o.jsx("h4",{children:s==="bg"?"Контакти":"Contact"}),o.jsxs("ul",{children:[o.jsxs("li",{children:["📍 ",s==="bg"?"Кооперативен пазар, павилион 5, Дупница":"Cooperative Market, Pavilion 5, Dupnitsa"]}),o.jsx("li",{children:"📞 089 551 7056"}),o.jsx("li",{children:"✉️ info@sakimed.com"}),o.jsx("li",{children:"🌐 www.sakimed.com"}),o.jsxs("li",{children:["📘 ",o.jsx("a",{href:"https://facebook.com/Saki2008",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})]})]})]})]}),o.jsx("div",{className:"footer-bottom",children:o.jsxs("p",{children:["© ",new Date().getFullYear()," САКИ - ",s==="bg"?"Дупница":"Dupnitsa",". ",a("footerRights")]})})]}),o.jsx("style",{children:`
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
      `})]})}function vh(){const{t:a,language:s}=en();return o.jsxs("section",{id:"hero",className:"hero",children:[o.jsxs("div",{className:"hero-background",children:[o.jsx("img",{src:"https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:s==="bg"?"Пчеларски магазин САКИ в Дупница - натурален мед и пчеларски инвентар":"SAKI Beekeeping Shop in Dupnitsa - natural honey and beekeeping equipment",className:"hero-image"}),o.jsx("div",{className:"hero-overlay"}),o.jsx("div",{className:"hero-pattern"})]}),o.jsxs("div",{className:"container hero-content",children:[o.jsxs("div",{className:"hero-text",children:[o.jsx("h1",{className:"hero-title",children:a("heroTitle")}),o.jsx("p",{className:"hero-subtitle",children:a("heroSubtitle")}),o.jsxs("div",{className:"hero-cta",children:[o.jsx(Kt,{to:"/products?category=pchelni-produkti",className:"btn btn-primary",children:a("heroCtaHoney")}),o.jsx(Kt,{to:"/products?category=pchelarstvo",className:"btn btn-secondary",children:a("heroCtaEquipment")})]})]}),o.jsx("div",{className:"hero-visual",children:o.jsx("img",{src:"/big-bee.png",alt:s==="bg"?"Пчела":"Bee",className:"bee-icon"})})]}),o.jsx("style",{children:`
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
      `})]})}function yh(){const{t:a,language:s}=en();return o.jsxs("section",{id:"about",className:"section about",children:[o.jsxs("div",{className:"container",children:[o.jsx("h2",{className:"section-title",children:a("aboutTitle")}),o.jsx("p",{className:"section-subtitle",children:a("aboutSubtitle")}),o.jsx("div",{className:"about-hero-image",children:o.jsx("img",{src:"https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:s==="bg"?"Семейна пчелна ферма САКИ в Долистово и Коркина - натурален пчелен мед":"SAKI family bee farm in Dolistovo and Korkina - natural honey"})}),o.jsxs("div",{className:"about-story",children:[o.jsxs("div",{className:"story-section",children:[o.jsx("h3",{children:a("storyTitle")}),o.jsx("p",{children:a("storyText1")}),o.jsx("p",{children:a("storyText2")})]}),o.jsxs("div",{className:"story-section",children:[o.jsx("h3",{children:a("apiariesTitle")}),o.jsx("p",{children:a("apiariesText1")}),o.jsx("p",{children:a("apiariesText2")})]}),o.jsxs("div",{className:"story-section",children:[o.jsx("h3",{children:a("certificationTitle")}),o.jsx("p",{children:a("certificationText1")}),o.jsx("p",{children:a("certificationText2")})]})]}),o.jsxs("div",{className:"about-grid",children:[o.jsxs("div",{className:"about-card",children:[o.jsx("div",{className:"about-icon",children:"🐝"}),o.jsx("h3",{children:a("cardExperience")}),o.jsx("p",{children:a("cardExperienceText")})]}),o.jsxs("div",{className:"about-card",children:[o.jsx("div",{className:"about-icon",children:"🏡"}),o.jsx("h3",{children:a("cardApiaries")}),o.jsx("p",{children:a("cardApiariesText")})]}),o.jsxs("div",{className:"about-card",children:[o.jsx("div",{className:"about-icon",children:"✅"}),o.jsx("h3",{children:a("cardCertification")}),o.jsx("p",{children:a("cardCertificationText")})]}),o.jsxs("div",{className:"about-card",children:[o.jsx("div",{className:"about-icon",children:"🏪"}),o.jsx("h3",{children:a("cardShop")}),o.jsx("p",{children:a("cardShopText")})]}),o.jsxs("div",{className:"about-card",children:[o.jsx("div",{className:"about-icon",children:"📦"}),o.jsx("h3",{children:a("cardProducts")}),o.jsx("p",{children:a("cardProductsText")})]}),o.jsxs("div",{className:"about-card",children:[o.jsx("div",{className:"about-icon",children:"🚚"}),o.jsx("h3",{children:a("cardDelivery")}),o.jsx("p",{children:a("cardDeliveryText")})]})]}),o.jsx("div",{className:"about-info",children:o.jsxs("div",{className:"about-info-content",children:[o.jsx("h3",{children:a("whyChooseTitle")}),o.jsxs("ul",{className:"about-list",children:[o.jsx("li",{children:a("whyChoose1")}),o.jsx("li",{children:a("whyChoose2")}),o.jsx("li",{children:a("whyChoose3")}),o.jsx("li",{children:a("whyChoose4")}),o.jsx("li",{children:a("whyChoose5")}),o.jsx("li",{children:a("whyChoose6")})]})]})})]}),o.jsx("style",{children:`
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
      `})]})}const In="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 420 280%22%3E%3Crect width=%22420%22 height=%22280%22 fill=%22%23f8fafc%22/%3E%3Ctext x=%22210%22 y=%22140%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%2390a4ae%22%3EПродукт%3C/text%3E%3C/svg%3E",xh=[{id:1,name:"Кошери и рамки",description:"Кошери Дадан-Блат и Лангстрот, рамки, восъчни основи и части за поддръжка на пчелина",icon:"🏠",image:In},{id:2,name:"Защитно облекло",description:"Пчеларски костюми, ръкавици, було и практични средства за спокойна работа",icon:"👕",image:In},{id:3,name:"Центрофуги",description:"Ръчни и електрически центрофуги за внимателно и удобно вадене на мед",icon:"🍯",image:In},{id:4,name:"Инвентар и инструменти",description:"Пчеларски ножове, вилици, дималки и основни инструменти за всекидневна работа",icon:"🔧",image:In},{id:5,name:"Подхранване за пчели",description:"Подхранващи сиропи и добавки за силни и добре поддържани пчелни семейства",icon:"🫗",image:In},{id:6,name:"Прополисов мехлем",description:"Натурален прополисов мехлем за локална грижа за кожата",icon:"🧴",image:In}];function wh(){const{t:a}=en();return o.jsxs("section",{id:"products",className:"section products",children:[o.jsxs("div",{className:"container",children:[o.jsx("h2",{className:"section-title",children:a("productsTitle")}),o.jsx("p",{className:"section-subtitle",children:a("productsSubtitle")}),o.jsx("div",{className:"products-grid",children:xh.map(s=>o.jsxs("div",{className:"product-card",children:[o.jsx("div",{className:"product-image",children:o.jsx("img",{src:s.image,alt:s.name})}),o.jsx("div",{className:"product-icon",children:s.icon}),o.jsx("h3",{className:"product-name",children:s.name}),o.jsx("p",{className:"product-description",children:s.description}),o.jsx("a",{href:"#contact",className:"product-link",children:a("productInquiry")})]},s.id))}),o.jsxs("div",{className:"products-cta",children:[o.jsx("p",{children:a("productsCta")}),o.jsx("a",{href:"#contact",className:"btn btn-primary",children:a("productsCtaButton")})]})]}),o.jsx("style",{children:`
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
      `})]})}const ta="",kh="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 240%22%3E%3Crect width=%22320%22 height=%22240%22 fill=%22%23f6f8fb%22/%3E%3Ctext x=%22160%22 y=%22120%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%23999%22%3EБез изображение%3C/text%3E%3C/svg%3E";function oa(a){if(!a)return kh;const s=a.trim();return s.startsWith("/uploads/")?`${ta}${s}`:s.startsWith("uploads/")?`${ta}/${s}`:(s.startsWith(`${ta}/uploads/`)||/^https?:\/\//.test(s),s)}function ir(a){return`${ta}${a.startsWith("/")?a:`/${a}`}`}function jh(){const{t:a}=en(),[s,u]=y.useState({name:"",email:"",phone:"",message:""}),[d,p]=y.useState({type:null,message:""}),[h,v]=y.useState(!1),S=async w=>{w.preventDefault(),v(!0),p({type:null,message:""});try{const P=await fetch(ir("/api/contact"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),C=await P.json();P.ok?(p({type:"success",message:a("formSuccess")}),u({name:"",email:"",phone:"",message:""})):p({type:"error",message:C.message||a("formError")})}catch{p({type:"error",message:a("formError")})}finally{v(!1)}},k=w=>{const{name:P,value:C}=w.target;u(_=>({..._,[P]:C}))};return o.jsxs("section",{id:"contact",className:"section contact",children:[o.jsxs("div",{className:"container",children:[o.jsx("h2",{className:"section-title",children:a("contactTitle")}),o.jsx("p",{className:"section-subtitle",children:a("contactSubtitle")}),o.jsxs("div",{className:"contact-grid",children:[o.jsxs("div",{className:"contact-info",children:[o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:"📍"}),o.jsxs("div",{children:[o.jsx("h3",{children:a("address")}),o.jsx("p",{children:a("addressValue")})]})]}),o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:"📞"}),o.jsxs("div",{children:[o.jsx("h3",{children:a("phone")}),o.jsx("p",{children:a("phoneValue")})]})]}),o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:"✉️"}),o.jsxs("div",{children:[o.jsx("h3",{children:a("email")}),o.jsx("p",{children:a("emailValue")})]})]}),o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:"🌐"}),o.jsxs("div",{children:[o.jsx("h3",{children:a("website")}),o.jsx("p",{children:a("websiteValue")})]})]}),o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:"📘"}),o.jsxs("div",{children:[o.jsx("h3",{children:a("facebook")}),o.jsx("p",{children:o.jsx("a",{href:"https://facebook.com/Saki2008",target:"_blank",rel:"noopener noreferrer",children:a("facebookValue")})})]})]}),o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:"🕐"}),o.jsxs("div",{children:[o.jsx("h3",{children:a("workingHours")}),o.jsx("p",{children:a("workingHoursWeekday")}),o.jsx("p",{children:a("workingHoursSaturday")})]})]})]}),o.jsxs("form",{className:"contact-form",onSubmit:S,children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"name",children:a("formName")}),o.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:k,required:!0,placeholder:a("formNamePlaceholder")})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"email",children:a("formEmail")}),o.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:k,required:!0,placeholder:a("formEmailPlaceholder")})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"phone",children:a("formPhone")}),o.jsx("input",{type:"tel",id:"phone",name:"phone",value:s.phone,onChange:k,placeholder:a("formPhonePlaceholder")})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"message",children:a("formMessage")}),o.jsx("textarea",{id:"message",name:"message",value:s.message,onChange:k,required:!0,placeholder:a("formMessagePlaceholder"),rows:5})]}),o.jsx("button",{type:"submit",className:"btn btn-primary",disabled:h,children:a(h?"formSubmitting":"formSubmit")}),d.type&&o.jsx("div",{className:`form-status form-status-${d.type}`,children:d.message})]})]})]}),o.jsx("style",{children:`
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
      `})]})}const sa="https://www.sakimed.com",ps="САКИ - пчеларски магазин в Дупница",ms=`${sa}/bee-logo.jpg`,_d="САКИ е семеен пчеларски магазин в Дупница. Предлагаме натурален мед от собствени пчелини, прополис, кошери, центрофуги и пчеларски инвентар.";function ia(a="/"){return/^https?:\/\//.test(a)?a:a.startsWith("data:")?ms:`${sa}${a.startsWith("/")?a:`/${a}`}`}function Sh(){return{"@context":"https://schema.org","@type":"Store",name:"САКИ - пчеларски магазин",alternateName:"SAKI Beekeeping Shop",description:_d,url:sa,telephone:"+359895517056",email:"info@sakimed.com",image:ms,priceRange:"$$",foundingDate:"2006",address:{"@type":"PostalAddress",streetAddress:"Кооперативен пазар, павилион 5",addressLocality:"Дупница",postalCode:"2600",addressCountry:"BG"},openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"09:00",closes:"18:00"},{"@type":"OpeningHoursSpecification",dayOfWeek:"Saturday",opens:"09:00",closes:"14:00"}],sameAs:["https://facebook.com/Saki2008"],areaServed:{"@type":"Country",name:"Bulgaria"},makesOffer:[{"@type":"Offer",itemOffered:{"@type":"Product",name:"Натурален пчелен мед"}},{"@type":"Offer",itemOffered:{"@type":"Product",name:"Пчеларски инвентар"}},{"@type":"Offer",itemOffered:{"@type":"Product",name:"Кошери и рамки"}}]}}function Eh(){return{"@context":"https://schema.org","@type":"WebSite",name:ps,url:sa,inLanguage:"bg-BG",publisher:{"@type":"Organization",name:"САКИ"}}}function Yr(a,s){let u=document.querySelector(`meta[name="${a}"]`);u||(u=document.createElement("meta"),u.name=a,document.head.appendChild(u)),u.content=s}function Jr(a,s){let u=document.querySelector(`meta[property="${a}"]`);u||(u=document.createElement("meta"),u.setAttribute("property",a),document.head.appendChild(u)),u.content=s}function bh(a){let s=document.querySelector('link[rel="canonical"]');s||(s=document.createElement("link"),s.rel="canonical",document.head.appendChild(s)),s.href=a}function Ch(a){let s=document.querySelector('script[data-page-json-ld="true"]');if(!a){s==null||s.remove();return}s||(s=document.createElement("script"),s.type="application/ld+json",s.dataset.pageJsonLd="true",document.head.appendChild(s)),s.textContent=a}function wt({title:a,description:s,path:u,image:d=ms,type:p="website",noindex:h=!1,jsonLd:v}){const S=_t(),k=ia(u??S.pathname),w=ia(d),P=v?JSON.stringify(v):"";return y.useEffect(()=>{document.title=a,bh(k),Yr("description",s),Yr("robots",h?"noindex, nofollow":"index, follow"),Yr("theme-color","#f59e0b"),Jr("og:site_name",ps),Jr("og:type",p==="product"?"product":p),Jr("og:title",a),Jr("og:description",s),Jr("og:url",k),Jr("og:image",w),Jr("og:locale","bg_BG"),Yr("twitter:card","summary_large_image"),Yr("twitter:title",a),Yr("twitter:description",s),Yr("twitter:image",w),Ch(P)},[k,s,w,P,h,a,p]),null}const Nh=(...a)=>{typeof window<"u"&&(typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),window.gtag(...a))},Ph=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function _h(a){return a.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(s,u,d)=>u>0&&u+s.length!==d.length&&s.search(Ph)>-1&&d.charAt(u-2)!==":"&&(d.charAt(u+s.length)!=="-"||d.charAt(u-1)==="-")&&d.charAt(u-1).search(/[^\s-]/)<0?s.toLowerCase():s.substr(1).search(/[A-Z]|\../)>-1?s:s.charAt(0).toUpperCase()+s.substr(1))}function Rh(a){return typeof a=="string"&&a.indexOf("@")!==-1}const Th="REDACTED (Potential Email Address)";function Lh(a){return Rh(a)?(console.warn("This arg looks like an email address, redacting."),Th):a}function Xl(a="",s=!0,u=!0){let d=a||"";return s&&(d=_h(a)),u&&(d=Lh(d)),d}var zh=class{constructor(){Ce(this,"isInitialized");Ce(this,"_testMode");Ce(this,"_currentMeasurementId");Ce(this,"_hasLoadedGA");Ce(this,"_isQueuing");Ce(this,"_queueGtag");Ce(this,"reset",()=>{this.isInitialized=!1,this._testMode=!1,this._currentMeasurementId="",this._hasLoadedGA=!1,this._isQueuing=!1,this._queueGtag=[]});Ce(this,"_gtag",(...a)=>{this._testMode?this._queueGtag.push(a):this._isQueuing?this._queueGtag.push(a):Nh(...a)});Ce(this,"_loadGA",(a,s,u="https://www.googletagmanager.com/gtag/js")=>{if(!(typeof window>"u"||typeof document>"u")&&!this._hasLoadedGA){const d=document.createElement("script");d.async=!0,d.src=`${u}?id=${a}`,s&&d.setAttribute("nonce",s),document.body.appendChild(d),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},this._hasLoadedGA=!0}});Ce(this,"_toGtagOptions",a=>{if(!a)return;const s={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"};return Object.entries(a).reduce((u,[d,p])=>(s[d]?u[s[d]]=p:u[d]=p,u),{})});Ce(this,"initialize",(a,s={})=>{if(!a)throw new Error("Require GA_MEASUREMENT_ID");const u=typeof a=="string"?[{trackingId:a}]:a;this._currentMeasurementId=u[0].trackingId;const{gaOptions:d,gtagOptions:p,nonce:h,testMode:v=!1,gtagUrl:S}=s;if(this._testMode=v,v||this._loadGA(this._currentMeasurementId,h,S),this.isInitialized||(this._gtag("js",new Date),u.forEach(k=>{const w={...this._toGtagOptions({...d,...k.gaOptions}),...p,...k.gtagOptions};Object.keys(w).length?this._gtag("config",k.trackingId,w):this._gtag("config",k.trackingId)})),this.isInitialized=!0,!v){const k=[...this._queueGtag];for(this._queueGtag=[],this._isQueuing=!1;k.length;){const w=k.shift();this._gtag(...w),w[0]==="get"&&(this._isQueuing=!0)}}});Ce(this,"set",a=>{if(!a){console.warn("`fieldsObject` is required in .set()");return}if(typeof a!="object"){console.warn("Expected `fieldsObject` arg to be an Object");return}Object.keys(a).length===0&&console.warn("empty `fieldsObject` given to .set()"),this._gaCommand("set",a)});Ce(this,"_gaCommandSendEvent",(a,s,u,d,p)=>{this._gtag("event",s,{event_category:a,event_label:u,value:d,...p&&{non_interaction:p.nonInteraction},...this._toGtagOptions(p)})});Ce(this,"_gaCommandSendEventParameters",(...a)=>{if(typeof a[0]=="string")this._gaCommandSendEvent(...a.slice(1));else{const{eventCategory:s,eventAction:u,eventLabel:d,eventValue:p,hitType:h,...v}=a[0];this._gaCommandSendEvent(s,u,d,p,v)}});Ce(this,"_gaCommandSendTiming",(a,s,u,d)=>{this._gtag("event","timing_complete",{name:s,value:u,event_category:a,event_label:d})});Ce(this,"_gaCommandSendPageview",(a,s)=>{if(s&&Object.keys(s).length){const{title:u,location:d,...p}=this._toGtagOptions(s)||{};this._gtag("event","page_view",{...a&&{page_path:a},...u&&{page_title:u},...d&&{page_location:d},...p})}else a?this._gtag("event","page_view",{page_path:a}):this._gtag("event","page_view")});Ce(this,"_gaCommandSendPageviewParameters",(...a)=>{if(typeof a[0]=="string")this._gaCommandSendPageview(...a.slice(1));else{const{page:s,hitType:u,...d}=a[0];this._gaCommandSendPageview(s,d)}});Ce(this,"_gaCommandSend",(...a)=>{const s=typeof a[0]=="string"?a[0]:a[0].hitType;switch(s){case"event":this._gaCommandSendEventParameters(...a);break;case"pageview":this._gaCommandSendPageviewParameters(...a);break;case"timing":this._gaCommandSendTiming(...a.slice(1));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn(`Unsupported send command: ${s}`);break;default:console.warn(`Send command doesn't exist: ${s}`)}});Ce(this,"_gaCommandSet",(...a)=>{typeof a[0]=="string"&&(a[0]={[a[0]]:a[1]}),this._gtag("set",this._toGtagOptions(a[0]))});Ce(this,"_gaCommand",(a,...s)=>{switch(a){case"send":this._gaCommandSend(...s);break;case"set":this._gaCommandSet(...s);break;default:console.warn(`Command doesn't exist: ${a}`)}});Ce(this,"ga",(...a)=>{if(typeof a[0]=="string")this._gaCommand(...a);else{const[s]=a;this._gtag("get",this._currentMeasurementId,"client_id",u=>{this._isQueuing=!1;const d=this._queueGtag;for(s({get:p=>p==="clientId"?u:p==="trackingId"?this._currentMeasurementId:p==="apiVersion"?"1":void 0});d.length;){const p=d.shift();this._gtag(...p)}}),this._isQueuing=!0}return this.ga});Ce(this,"event",(a,s)=>{if(typeof a=="string")this._gtag("event",a,this._toGtagOptions(s));else{const{action:u,category:d,label:p,value:h,nonInteraction:v,transport:S}=a;if(!d||!u){console.warn("args.category AND args.action are required in event()");return}const k={hitType:"event",eventCategory:Xl(d),eventAction:Xl(u)};p&&(k.eventLabel=Xl(p)),typeof h<"u"&&(typeof h!="number"?console.warn("Expected `args.value` arg to be a Number."):k.eventValue=h),typeof v<"u"&&(typeof v!="boolean"?console.warn("`args.nonInteraction` must be a boolean."):k.nonInteraction=v),typeof S<"u"&&(typeof S!="string"?console.warn("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(S)===-1&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),k.transport=S)),this._gaCommand("send",k)}});Ce(this,"send",a=>{this._gaCommand("send",a)});this.reset()}gtag(...a){this._gtag(...a)}},Ih=new zh,Rd=Ih;function Dh(){return y.useEffect(()=>{Rd.send({hitType:"pageview",page:window.location.pathname+window.location.search})},[]),o.jsxs(o.Fragment,{children:[o.jsx(wt,{title:"САКИ - пчеларски магазин в Дупница | Натурален мед и пчеларски инвентар",description:_d,path:"/",jsonLd:[Sh(),Eh()]}),o.jsx(vh,{}),o.jsx(yh,{}),o.jsx(wh,{}),o.jsx(jh,{})]})}function Oh({id:a,slug:s,name:u,price:d,salePrice:p,image:h,onViewDetails:v}){const{addToCart:S}=Zr(),k=p??d,w=C=>{C.stopPropagation(),S({id:a,slug:s,name:u,price:d,salePrice:p,image:h},1)},P=()=>{v&&v(s||a)};return o.jsxs("div",{className:"product-card-shopping",onClick:P,children:[o.jsx("div",{className:"product-image-container",children:o.jsx("img",{src:h,alt:u,className:"product-image"})}),o.jsxs("div",{className:"product-card-content",children:[o.jsx("h3",{className:"product-card-name",children:u}),o.jsxs("div",{className:"product-card-price",children:[p&&o.jsxs("span",{className:"old-price",children:[d," лв."]}),o.jsxs("span",{children:[k," лв."]})]}),o.jsxs("div",{className:"product-card-actions",children:[v&&o.jsx("button",{className:"btn btn-link",onClick:C=>{C.stopPropagation(),v(s||a)},children:"Детайли"}),o.jsx("button",{className:"btn btn-primary",onClick:w,children:"Добави в количката"})]})]}),o.jsx("style",{children:`
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
      `})]})}function Fh(){var Z;const a=Xr(),[s]=oh(),[u,d]=y.useState([]),[p,h]=y.useState([]),[v,S]=y.useState([]),[k,w]=y.useState(!0),[P,C]=y.useState(""),[_,W]=y.useState("all");y.useEffect(()=>{const H=s.get("category");H==="honey"?W("pchelni-produkti"):H==="equipment"?W("pchelarstvo"):H&&W(H)},[s]),y.useEffect(()=>{(async()=>{try{const[re,de,ve]=await Promise.all([fetch(ir("/api/products")),fetch(ir("/api/categories")),fetch(ir("/api/promotions"))]);if(!re.ok||!de.ok)throw new Error("Не успяхме да заредим продуктите.");const le=await re.json(),$e=await de.json(),Ye=ve.ok?await ve.json():[],mt=le.map(Te=>({...Te,image:oa(Te.image)}));d(mt),h($e),S(Ye)}catch(re){C(re instanceof Error?re.message:"Възникна грешка при зареждането.")}finally{w(!1)}})()},[]);const F=_==="all"?u:u.filter(H=>H.category===_),O=_==="pchelni-produkti"?"Пчелни продукти от САКИ | Натурален мед и прополис":_==="pchelarstvo"?"Пчеларски инвентар и оборудване | САКИ Дупница":"Продукти | Мед и пчеларски инвентар от САКИ",I=(Z=p.find(H=>H.slug===_))==null?void 0:Z.name,M=v.find(H=>H.active&&H.bannerText),Y=_==="pchelni-produkti"?"Разгледайте пчелните продукти на САКИ - натурален мед от собствени пчелини и прополис с гарантирано качество.":_==="pchelarstvo"?"Кошери, рамки, центрофуги, защитно облекло и практичен пчеларски инвентар за начинаещи и опитни пчелари.":"Мед, пчелни продукти, кошери, центрофуги и пчеларски инвентар от семеен магазин САКИ в Дупница.";return o.jsxs(o.Fragment,{children:[o.jsx(wt,{title:O,description:Y,path:"/products"}),o.jsxs("div",{className:"products-page",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"products-header",children:[o.jsx("h1",{children:I||"Нашите продукти"}),o.jsx("p",{children:"Натурален мед, пчелни продукти и оборудване за работа в пчелина"})]}),M&&o.jsxs("div",{className:"promotion-banner",children:[o.jsx("strong",{children:M.title}),o.jsx("span",{children:M.bannerText})]}),P&&o.jsx("div",{className:"error-message",children:P}),k?o.jsx("div",{className:"loading",children:"Зареждане..."}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"category-filters",children:[o.jsx("button",{className:`filter-btn ${_==="all"?"active":""}`,onClick:()=>W("all"),children:"Всички продукти"}),p.map(H=>o.jsx("button",{className:`filter-btn ${_===H.slug?"active":""}`,onClick:()=>W(H.slug),children:H.name},H.id))]}),F.length===0?o.jsx("div",{className:"no-products",children:"В тази категория все още няма продукти."}):o.jsx("div",{className:"products-grid",children:F.map(H=>o.jsx(Oh,{id:H.id,slug:H.slug,name:H.name,price:H.price,salePrice:H.salePrice,image:H.image,onViewDetails:re=>a(`/products/${re}`)},H.id))})]})]}),o.jsx("style",{children:`
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
      `})]})]})}function Mh(){const{id:a}=wd(),s=Xr(),{addToCart:u}=Zr(),[d,p]=y.useState(null),[h,v]=y.useState(!0),[S,k]=y.useState(""),[w,P]=y.useState(1),[C,_]=y.useState(!1);y.useEffect(()=>{(async()=>{try{const re=await fetch(ir(`/api/products/${a}`));if(!re.ok)throw new Error("Продуктът не е намерен.");const de=await re.json();de.image=oa(de.image),p(de)}catch(re){k(re instanceof Error?re.message:"Възникна грешка при зареждането.")}finally{v(!1)}})()},[a]);const W=()=>{d&&(u(d,w),_(!0),setTimeout(()=>_(!1),2e3))};if(h)return o.jsxs(o.Fragment,{children:[o.jsx(wt,{title:"Продукт | САКИ",description:"Продукт от пчеларски магазин САКИ в Дупница.",path:`/products/${a??""}`}),o.jsx("div",{className:"product-detail-page",children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"loading",children:"Зареждане..."})})})]});if(S||!d)return o.jsxs(o.Fragment,{children:[o.jsx(wt,{title:"Продуктът не е намерен | САКИ",description:"Този продукт не е наличен в каталога на САКИ.",path:`/products/${a??""}`,noindex:!0}),o.jsx("div",{className:"product-detail-page",children:o.jsxs("div",{className:"container",children:[o.jsx("div",{className:"error-message",children:S||"Продуктът не е намерен."}),o.jsx("button",{className:"btn btn-primary",onClick:()=>s("/products"),children:"Назад към продуктите"})]})})]});const F=d.categoryName||(d.category==="pchelni-produkti"?"Пчелни продукти":"За пчелари"),O=d.stock>0,I=`${d.name} | ${ps}`,M=d.salePrice??d.price,Y=`${d.description} Цена: ${M} лв. ${O?"В наличност.":"Временно изчерпан."}`,Z={"@context":"https://schema.org","@type":"Product",name:d.name,description:d.description,image:ia(d.image),brand:{"@type":"Brand",name:"САКИ"},offers:{"@type":"Offer",url:ia(`/products/${d.slug}`),priceCurrency:"BGN",price:M,availability:O?"https://schema.org/InStock":"https://schema.org/OutOfStock"}};return o.jsxs("div",{className:"product-detail-page",children:[o.jsx(wt,{title:I,description:Y,path:`/products/${d.slug}`,image:d.image,type:"product",jsonLd:Z}),o.jsxs("div",{className:"container",children:[o.jsx("button",{className:"back-btn",onClick:()=>s("/products"),children:"← Назад"}),o.jsxs("div",{className:"product-detail-container",children:[o.jsx("div",{className:"product-detail-image",children:o.jsx("img",{src:d.image,alt:d.name})}),o.jsxs("div",{className:"product-detail-content",children:[o.jsx("div",{className:"breadcrumb",children:o.jsx("span",{className:"category-badge",children:F})}),o.jsx("h1",{className:"product-detail-name",children:d.name}),o.jsxs("div",{className:"product-detail-price",children:[d.salePrice&&o.jsxs("span",{className:"old-price",children:[d.price," лв."]}),o.jsx("span",{className:"price-amount",children:M}),o.jsx("span",{className:"price-currency",children:"лв."})]}),o.jsxs("div",{className:"product-detail-description",children:[o.jsx("h3",{children:"Описание"}),o.jsx("p",{children:d.description})]}),!O&&o.jsx("div",{className:"stock-warning",children:"В момента няма наличност."}),o.jsxs("div",{className:"product-detail-actions",children:[o.jsxs("div",{className:"quantity-selector",children:[o.jsx("label",{htmlFor:"quantity",children:"Количество:"}),o.jsxs("div",{className:"quantity-controls",children:[o.jsx("button",{className:"qty-btn",onClick:()=>P(Math.max(1,w-1)),disabled:w===1,children:"−"}),o.jsx("input",{id:"quantity",type:"number",min:"1",value:w,onChange:H=>P(parseInt(H.target.value,10)||1),className:"qty-input"}),o.jsx("button",{className:"qty-btn",onClick:()=>P(w+1),children:"+"})]})]}),o.jsx("button",{className:"btn btn-primary btn-large",onClick:W,disabled:!O,children:"Добави в количката"}),C&&o.jsx("div",{className:"added-message",children:"✓ Добавено в количката."})]}),o.jsxs("div",{className:"product-info",children:[o.jsxs("div",{className:"info-item",children:[o.jsx("span",{className:"info-label",children:"Наличност:"}),o.jsx("span",{className:"info-value",children:O?`${d.stock} бр.`:"Временно изчерпан"})]}),o.jsxs("div",{className:"info-item",children:[o.jsx("span",{className:"info-label",children:"Категория:"}),o.jsx("span",{className:"info-value",children:F})]})]})]})]})]}),o.jsx("style",{children:`
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
      `})]})}function Ah({item:a}){const{updateQuantity:s,removeFromCart:u}=Zr();return o.jsxs("div",{className:"cart-item",children:[o.jsx("div",{className:"cart-item-image",children:o.jsx("img",{src:a.image,alt:a.name})}),o.jsxs("div",{className:"cart-item-details",children:[o.jsx("h3",{className:"cart-item-name",children:a.name}),o.jsxs("p",{className:"cart-item-price",children:[a.price," лв."]})]}),o.jsxs("div",{className:"cart-item-quantity",children:[o.jsx("button",{className:"qty-btn",onClick:()=>s(a.productId,a.quantity-1),children:"−"}),o.jsx("input",{type:"number",min:"1",value:a.quantity,onChange:d=>s(a.productId,parseInt(d.target.value,10)||1),className:"qty-input"}),o.jsx("button",{className:"qty-btn",onClick:()=>s(a.productId,a.quantity+1),children:"+"})]}),o.jsxs("div",{className:"cart-item-subtotal",children:[(a.price*a.quantity).toFixed(2)," лв."]}),o.jsx("button",{className:"cart-item-remove",onClick:()=>u(a.productId),children:"×"}),o.jsx("style",{children:`
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
      `})]})}function $h(){const a=Xr(),{cart:s,getTotalPrice:u,clearCart:d}=Zr();return s.length===0?o.jsxs("div",{className:"cart-page",children:[o.jsx(wt,{title:"Количка | САКИ",description:"Вашата количка в онлайн магазина на САКИ.",path:"/cart",noindex:!0}),o.jsxs("div",{className:"container",children:[o.jsx("h1",{children:"Вашата количка"}),o.jsxs("div",{className:"empty-cart",children:[o.jsx("div",{className:"empty-icon",children:"🛒"}),o.jsx("p",{children:"Вашата количка е празна"}),o.jsx("button",{className:"btn btn-primary",onClick:()=>a("/products"),children:"Продължи с пазаруване"})]})]}),o.jsx("style",{children:`
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
        `})]}):o.jsxs("div",{className:"cart-page",children:[o.jsx(wt,{title:"Количка | САКИ",description:"Прегледайте продуктите в количката си преди поръчка.",path:"/cart",noindex:!0}),o.jsxs("div",{className:"container",children:[o.jsx("h1",{children:"Вашата количка"}),o.jsxs("div",{className:"cart-layout",children:[o.jsxs("div",{className:"cart-items-section",children:[o.jsxs("div",{className:"cart-items-header",children:[o.jsxs("span",{children:[s.length," продукт",s.length!==1?"и":""]}),o.jsx("button",{className:"link-btn",onClick:d,children:"Изчисти количката"})]}),o.jsx("div",{className:"cart-items",children:s.map(p=>o.jsx(Ah,{item:p},p.productId))})]}),o.jsx("div",{className:"cart-summary",children:o.jsxs("div",{className:"summary-card",children:[o.jsx("h3",{children:"Резюме на поръчката"}),o.jsxs("div",{className:"summary-row",children:[o.jsx("span",{children:"Междинна сума:"}),o.jsxs("span",{children:[u().toFixed(2)," лв."]})]}),o.jsxs("div",{className:"summary-row",children:[o.jsx("span",{children:"Доставка:"}),o.jsx("span",{className:"delivery-note",children:"Зависи от адреса"})]}),o.jsx("div",{className:"summary-divider"}),o.jsxs("div",{className:"summary-row total",children:[o.jsx("span",{children:"Общо:"}),o.jsxs("span",{children:[u().toFixed(2)," лв."]})]}),o.jsx("button",{className:"btn btn-primary btn-block",onClick:()=>a("/checkout"),children:"Към поръчката"}),o.jsx("button",{className:"btn btn-secondary btn-block",onClick:()=>a("/products"),children:"Продължи с пазаруване"}),o.jsx("div",{className:"secure-badge",children:"🔒 Сигурна поръчка"})]})})]})]}),o.jsx("style",{children:`
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
      `})]})}function Uh({onOrderSuccess:a}){const{cart:s,clearCart:u}=Zr(),[d,p]=y.useState(!1),[h,v]=y.useState(""),[S,k]=y.useState(!1),[w,P]=y.useState({customerName:"",email:"",phone:"",address:"",notes:""}),C=W=>{const{name:F,value:O}=W.target;P(I=>({...I,[F]:O}))},_=async W=>{W.preventDefault(),v(""),p(!0);try{const F=await fetch(ir("/api/orders"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerName:w.customerName,email:w.email,phone:w.phone,address:w.address,notes:w.notes,items:s.map(I=>({productId:I.productId,quantity:I.quantity}))})});if(!F.ok){const I=await F.json();throw new Error(I.error||"Failed to create order")}const O=await F.json();k(!0),u(),a&&a(O.order.id),P({customerName:"",email:"",phone:"",address:"",notes:""})}catch(F){v(F instanceof Error?F.message:"Възникна грешка. Моля, опитайте отново.")}finally{p(!1)}};return S?o.jsxs("div",{className:"checkout-success",children:[o.jsx("div",{className:"success-icon",children:"✓"}),o.jsx("h2",{children:"Поръчката е приета!"}),o.jsx("p",{children:"Благодарим ви за поръчката. Ще се свържем с вас за потвърждение."}),o.jsx("p",{className:"success-note",children:"Ако имате въпрос, можете да ни потърсите и по телефона."})]}):o.jsxs("form",{onSubmit:_,className:"checkout-form",children:[o.jsx("h2",{children:"Данни за поръчката"}),h&&o.jsx("div",{className:"form-error",children:h}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"customerName",children:"Име и фамилия *"}),o.jsx("input",{type:"text",id:"customerName",name:"customerName",value:w.customerName,onChange:C,required:!0,placeholder:"Иван Петров"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"phone",children:"Телефон *"}),o.jsx("input",{type:"tel",id:"phone",name:"phone",value:w.phone,onChange:C,required:!0,placeholder:"+359 87 123 4567"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"email",children:"Имейл"}),o.jsx("input",{type:"email",id:"email",name:"email",value:w.email,onChange:C,placeholder:"you@example.com"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"address",children:"Адрес за доставка *"}),o.jsx("textarea",{id:"address",name:"address",value:w.address,onChange:C,required:!0,placeholder:"ул. Пример 123, гр. Дупница",rows:3})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"notes",children:"Бележка към поръчката"}),o.jsx("textarea",{id:"notes",name:"notes",value:w.notes,onChange:C,placeholder:"Уточнения за доставка или продуктите",rows:3})]}),o.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:d||s.length===0,children:d?"Изпращане...":"Изпрати поръчката"}),o.jsx("style",{children:`
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
      `})]})}function Bh(){const a=Xr(),{cart:s,getTotalPrice:u}=Zr();return s.length===0?o.jsxs("div",{className:"checkout-page",children:[o.jsx(wt,{title:"Поръчка | САКИ",description:"Завършване на поръчка в онлайн магазина на САКИ.",path:"/checkout",noindex:!0}),o.jsx("div",{className:"container",children:o.jsxs("div",{className:"empty-state",children:[o.jsx("p",{children:"Няма продукти в количката"}),o.jsx("button",{className:"btn btn-primary",onClick:()=>a("/products"),children:"Назад към продуктите"})]})})]}):o.jsxs("div",{className:"checkout-page",children:[o.jsx(wt,{title:"Завършване на поръчката | САКИ",description:"Попълнете данните за доставка и изпратете поръчката си към САКИ.",path:"/checkout",noindex:!0}),o.jsxs("div",{className:"container",children:[o.jsx("h1",{children:"Завършване на поръчката"}),o.jsxs("div",{className:"checkout-layout",children:[o.jsx("div",{className:"checkout-form-section",children:o.jsx(Uh,{onOrderSuccess:()=>setTimeout(()=>a("/"),3e3)})}),o.jsx("div",{className:"checkout-summary",children:o.jsxs("div",{className:"summary-card",children:[o.jsx("h3",{children:"Преглед на поръчката"}),o.jsx("div",{className:"order-items",children:s.map(d=>o.jsxs("div",{className:"order-item",children:[o.jsx("span",{className:"item-name",children:d.name}),o.jsxs("span",{className:"item-qty",children:["x",d.quantity]}),o.jsxs("span",{className:"item-price",children:[(d.price*d.quantity).toFixed(2)," лв."]})]},d.productId))}),o.jsx("div",{className:"summary-divider"}),o.jsxs("div",{className:"total-row",children:[o.jsx("span",{children:"Общо:"}),o.jsxs("span",{className:"total-price",children:[u().toFixed(2)," лв."]})]}),o.jsxs("div",{className:"info-box",children:[o.jsx("p",{children:"Важно:"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Проверете внимателно адреса"}),o.jsx("li",{children:"Ще се свържем с вас за потвърждение"}),o.jsx("li",{children:"Срокът за доставка зависи от адреса и наличността"})]})]})]})})]})]}),o.jsx("style",{children:`
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
      `})]})}const Xi={HONEY:"Мед",BEE_PRODUCTS:"Пчелни продукти",BEEKEEPING_EQUIPMENT:"Пчеларски инвентар",WAX_FOUNDATIONS:"Восъчни основи",PACKAGING:"Опаковки",OTHER:"Други"},Dn={PCS:"бр.",KG:"кг",G:"г",LITER:"литър",PACKAGE:"пакет"},Zl={CASH:"в брой",CARD:"карта",BANK:"банка",OTHER:"друго"},es={RENT:"Наем",ELECTRICITY:"Ток",FUEL:"Гориво",MATERIALS:"Материали",SALARIES:"Заплати",DELIVERY:"Доставка",ADVERTISING:"Реклама",OTHER:"Други"},To={sku:"",name:"",category:"HONEY",unit:"PCS",sellPriceEur:"",costPriceEur:"",stockQuantity:"0",minStockQuantity:"0",totalSoldQuantity:"0",active:!0,notes:""},od={todayTurnoverEur:0,todayProfitEur:0,monthlyTurnoverEur:0,monthlyProfitEur:0,lowStockProducts:[],latestSales:[],latestWaxTransactions:[],waxStockKg:0,waxInventoryValueEur:0},id={defaultBuyPriceEur:5,waxStockKg:0,waxInventoryValueEur:0,totalWaxBoughtValueEur:0,totalFoundationGivenKg:0,totalFoundationGivenValueEur:0,totalExtraPaymentEur:0,balanceEur:0,transactionCount:0};function qt(){return new Date().toISOString().slice(0,10)}function ee(a){return`${Number(a||0).toFixed(2)} EUR`}function _e(a){return`${(Number(a||0)*1.95583).toFixed(2)} лв.`}function Wh(){const[a,s]=y.useState(()=>localStorage.getItem("admin_token")||""),[u,d]=y.useState(!1),[p,h]=y.useState({email:"",password:""}),[v,S]=y.useState("dashboard"),[k,w]=y.useState(""),[P,C]=y.useState(!1),[_,W]=y.useState(null),[F,O]=y.useState([]),[I,M]=y.useState(""),[Y,Z]=y.useState("ALL"),[H,re]=y.useState("ALL"),[de,ve]=y.useState([]),[le,$e]=y.useState(null),[Ye,mt]=y.useState([]),[Te,We]=y.useState(id),[Je,ze]=y.useState({defaultBuyPriceEur:5}),[Me,ye]=y.useState(null),[A,G]=y.useState(!1),[$,j]=y.useState(null),[R,ie]=y.useState(null),[ae,ue]=y.useState("quick"),[ce,he]=y.useState(""),[fe,ke]=y.useState("monthly"),[oe,Ie]=y.useState(To),[xe,et]=y.useState({saleDate:qt(),productId:"",quantity:"1",unitPriceEur:"",paymentMethod:"CASH",notes:""}),[Ve,At]=y.useState({expenseDate:qt(),category:"MATERIALS",amountEur:"",paymentMethod:"CASH",supplier:"",notes:""}),[ne,He]=y.useState({transactionType:"BUY",transactionDate:qt(),customerName:"",customerPhone:"",waxReceivedKg:"0",waxPricePerKgEur:"5",foundationGivenKg:"0",foundationPricePerKgEur:"15",extraPaymentEur:"0",foundationProductId:"",notes:""}),[$n,tn]=y.useState({defaultBuyPriceEur:"5"}),[qe,Gt]=y.useState({from:qt().slice(0,8)+"01",to:qt()}),Un=y.useMemo(()=>({...a?{Authorization:`Bearer ${a}`}:{}}),[a]);async function De(f,B={}){const we=await fetch(ir(f),{...B,credentials:"include",headers:{"Content-Type":"application/json",...Un,...B.headers||{}}});if(!we.ok){const ht=await we.json().catch(()=>({error:"Заявката не беше успешна."}));throw new Error(ht.error||"Заявката не беше успешна.")}return we.status===204?null:we.json()}async function kt(){const f=await Promise.allSettled([De("/api/admin/erp/dashboard"),De("/api/admin/erp/products"),De("/api/admin/erp/sales"),De(`/api/admin/erp/reports?from=${qe.from}&to=${qe.to}`),De("/api/admin/erp/wax-transactions"),De("/api/admin/erp/wax-summary"),De("/api/admin/erp/wax-settings")]),[B,we,ht,$t,dn,Qn,Wo]=f;if(W(B.status==="fulfilled"?{...od,...B.value}:od),we.status==="fulfilled"&&O(Array.isArray(we.value)?we.value:[]),ht.status==="fulfilled"&&ve(Array.isArray(ht.value)?ht.value:[]),$t.status==="fulfilled"&&$e($t.value),dn.status==="fulfilled"&&mt(Array.isArray(dn.value)?dn.value:[]),Qn.status==="fulfilled"&&We({...id,...Qn.value}),Wo.status==="fulfilled"){const fr={defaultBuyPriceEur:Number(Wo.value.defaultBuyPriceEur||5)};ze(fr),tn({defaultBuyPriceEur:String(fr.defaultBuyPriceEur)}),R||He(Vo=>({...Vo,waxPricePerKgEur:String(fr.defaultBuyPriceEur)}))}const dr=f.find(fr=>fr.status==="rejected");(dr==null?void 0:dr.status)==="rejected"&&w(dr.reason instanceof Error?dr.reason.message:"ERP данните не се заредиха напълно.")}y.useEffect(()=>{a&&De("/api/auth/me").then(()=>(d(!0),kt())).catch(()=>{s(""),localStorage.removeItem("admin_token")})},[]),y.useEffect(()=>{u&&De(`/api/admin/erp/reports?from=${qe.from}&to=${qe.to}`).then($e).catch(()=>{})},[qe.from,qe.to]);async function Fo(f){f.preventDefault(),C(!0),w("");try{const B=await De("/api/auth/login",{method:"POST",body:JSON.stringify(p)});s(B.token),localStorage.setItem("admin_token",B.token),d(!0),await kt()}catch(B){w(B instanceof Error?B.message:"Неуспешен вход.")}finally{C(!1)}}async function Mo(){await De("/api/auth/logout",{method:"POST"}).catch(()=>{}),s(""),localStorage.removeItem("admin_token"),d(!1)}function Bn(f){ye(f.id),G(!0),Ie({sku:f.sku||"",name:f.name,category:f.category,unit:f.unit,sellPriceEur:String(f.sellPriceEur),costPriceEur:String(f.costPriceEur),stockQuantity:String(f.stockQuantity),minStockQuantity:String(f.minStockQuantity),totalSoldQuantity:String(f.totalSoldQuantity||0),active:f.active,notes:f.notes||""}),setTimeout(()=>{var B;(B=document.querySelector(".erp-card"))==null||B.scrollIntoView({behavior:"smooth",block:"start"})},0)}async function rn(f){f.preventDefault(),C(!0);try{await De(Me?`/api/admin/erp/products/${Me}`:"/api/admin/erp/products",{method:Me?"PUT":"POST",body:JSON.stringify({...oe,sku:oe.sku||null,sellPriceEur:Number(oe.sellPriceEur),costPriceEur:Number(oe.costPriceEur),stockQuantity:Number(oe.stockQuantity),minStockQuantity:Number(oe.minStockQuantity),totalSoldQuantity:Number(oe.totalSoldQuantity)})}),Ie(To),ye(null),G(!1),await kt(),w("Продуктът е запазен.")}catch(B){w(B instanceof Error?B.message:"Грешка при запис.")}finally{C(!1)}}function Ao(){ye(null),Ie(To),G(!0),setTimeout(()=>{var f;(f=document.querySelector(".storage-editor"))==null||f.scrollIntoView({behavior:"smooth",block:"start"})},0)}async function zr(f){f.preventDefault(),C(!0);try{await De($?`/api/admin/erp/sales/${$}`:"/api/admin/erp/sales",{method:$?"PUT":"POST",body:JSON.stringify({...xe,productId:Number(xe.productId),quantity:Number(xe.quantity),unitPriceEur:xe.unitPriceEur?Number(xe.unitPriceEur):void 0})}),j(null),et({saleDate:qt(),productId:"",quantity:"1",unitPriceEur:"",paymentMethod:"CASH",notes:""}),await kt(),w($?"Продажбата е редактирана и складът е коригиран.":"Продажбата е добавена и складът е намален.")}catch(B){w(B instanceof Error?B.message:"Грешка при продажба.")}finally{C(!1)}}function Yt(f){j(f.id),S("sales"),ue("all"),et({saleDate:f.saleDate.slice(0,10),productId:String(f.product.id),quantity:String(f.quantity),unitPriceEur:String(f.unitPriceEur),paymentMethod:f.paymentMethod,notes:f.notes||""}),window.scrollTo({top:0,behavior:"smooth"})}function $o(){S("sales"),ue("all")}function Wn(f){et({...xe,productId:String(f.id),unitPriceEur:String(f.sellPriceEur)}),he("")}async function nn(f){if(window.confirm(`Да изтрия ли продажбата за "${f.product.name}"? Количеството ще бъде върнато в склада.`)){C(!0);try{await De(`/api/admin/erp/sales/${f.id}`,{method:"DELETE"}),$===f.id&&(j(null),et({saleDate:qt(),productId:"",quantity:"1",unitPriceEur:"",paymentMethod:"CASH",notes:""})),await kt(),w("Продажбата е изтрита и количеството е върнато в склада.")}catch(we){w(we instanceof Error?we.message:"Грешка при изтриване.")}finally{C(!1)}}}async function ua(f){f.preventDefault(),await De("/api/admin/erp/expenses",{method:"POST",body:JSON.stringify({...Ve,amountEur:Number(Ve.amountEur)})}),At({expenseDate:qt(),category:"MATERIALS",amountEur:"",paymentMethod:"CASH",supplier:"",notes:""}),await kt(),w("Разходът е записан.")}async function Vn(f){f.preventDefault(),await De("/api/admin/erp/wax-settings",{method:"PUT",body:JSON.stringify({defaultBuyPriceEur:Number($n.defaultBuyPriceEur)})}),await kt(),w("Настройките за восък са запазени.")}function Ir(f=Je.defaultBuyPriceEur){ie(null),He({transactionType:"BUY",transactionDate:qt(),customerName:"",customerPhone:"",waxReceivedKg:"0",waxPricePerKgEur:String(f),foundationGivenKg:"0",foundationPricePerKgEur:"0",extraPaymentEur:"0",foundationProductId:"",notes:""})}function on(f){He(B=>({...B,transactionType:f,foundationGivenKg:f==="BUY"?"0":B.foundationGivenKg,foundationPricePerKgEur:f==="BUY"?"0":B.foundationPricePerKgEur,foundationProductId:f==="BUY"?"":B.foundationProductId,extraPaymentEur:f==="BUY"?"0":B.extraPaymentEur}))}async function Hn(f){f.preventDefault();const B=R?"PATCH":"POST",we=R?`/api/admin/erp/wax-transactions/${R}`:"/api/admin/erp/wax-transactions";await De(we,{method:B,body:JSON.stringify({...ne,waxReceivedKg:Number(ne.waxReceivedKg),waxPricePerKgEur:Number(ne.waxPricePerKgEur),foundationGivenKg:ne.transactionType==="SWAP"?Number(ne.foundationGivenKg):0,foundationPricePerKgEur:ne.transactionType==="SWAP"?Number(ne.foundationPricePerKgEur):0,extraPaymentEur:ne.transactionType==="SWAP"?Number(ne.extraPaymentEur):0,foundationProductId:ne.transactionType==="SWAP"&&ne.foundationProductId?Number(ne.foundationProductId):null})}),Ir(),await kt(),w(R?"Восъчната сделка е редактирана.":"Восъчната сделка е записана.")}function qn(f){ie(f.id),S("wax");const B=f.transactionType||(Number(f.foundationGivenKg||0)>0?"SWAP":"BUY");He({transactionType:B,transactionDate:f.transactionDate.slice(0,10),customerName:f.customerName||"",customerPhone:f.customerPhone||"",waxReceivedKg:String(f.waxReceivedKg),waxPricePerKgEur:String(f.waxPricePerKgEur),foundationGivenKg:String(f.foundationGivenKg),foundationPricePerKgEur:String(f.foundationPricePerKgEur),extraPaymentEur:String(f.extraPaymentEur),foundationProductId:f.foundationProductId?String(f.foundationProductId):"",notes:f.notes||""}),window.scrollTo({top:0,behavior:"smooth"})}async function lr(f){if(window.confirm("Да изтрия ли восъчната сделка? Наличността ще бъде коригирана.")){C(!0);try{await De(`/api/admin/erp/wax-transactions/${f.id}`,{method:"DELETE"}),R===f.id&&Ir(),await kt(),w("Восъчната сделка е изтрита.")}catch(we){w(we instanceof Error?we.message:"Грешка при изтриване.")}finally{C(!1)}}}const it=F.find(f=>String(f.id)===xe.productId),Uo=F.filter(f=>f.active).filter(f=>f.name.toLowerCase().includes(ce.toLowerCase())||String(f.sku||"").includes(ce)).slice(0,ce?12:8),an=F.filter(f=>{const B=[f.sku,f.name,f.notes].join(" ").toLowerCase().includes(I.toLowerCase()),we=Y==="ALL"||f.category===Y,ht=H==="ALL"||(H==="LOW"?f.stockStatus==="LOW":f.active);return B&&we&&ht}),sr=an.reduce((f,B)=>({stockValue:f.stockValue+Number(B.inventoryValueEur||0),sellValue:f.sellValue+Number(B.inventorySellValueEur||0),low:f.low+(B.stockStatus==="LOW"?1:0)}),{stockValue:0,sellValue:0,low:0}),ln=F.filter(f=>f.category==="WAX_FOUNDATIONS"),Kn=ln.find(f=>String(f.id)===ne.foundationProductId),Dr=ne.transactionType==="SWAP",sn=Number(ne.waxReceivedKg||0)*Number(ne.waxPricePerKgEur||0),ur=Dr?Number(ne.foundationGivenKg||0)*Number(ne.foundationPricePerKgEur||0):0,cr=sn+(Dr?Number(ne.extraPaymentEur||0):0)-ur,Or=ne.transactionType==="BUY"?`За плащане ${ee(sn)}`:cr>0?`Дължите на клиента ${ee(cr)}`:cr<0?`Клиентът доплаща ${ee(Math.abs(cr))}`:"Сделката е изравнена",Bo=Number((_==null?void 0:_.waxStockKg)||0),Fr=(_==null?void 0:_.lowStockProducts)||[],un=(_==null?void 0:_.latestSales)||[],cn=(_==null?void 0:_.latestWaxTransactions)||[];return u?o.jsxs("div",{className:"erp-shell",children:[o.jsx(wt,{title:"SakiMed ERP | Админ",description:"Частен back-office ERP панел за SakiMed.",path:"/admin",noindex:!0}),o.jsxs("div",{className:"erp-wrap",children:[o.jsxs("header",{className:"erp-header",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"SakiMed ERP"}),o.jsx("p",{children:"Оборот, склад, разходи и восък"})]}),o.jsx("button",{className:"erp-btn ghost",onClick:Mo,children:"Изход"})]}),k&&o.jsx("p",{className:"status",children:k}),o.jsx("nav",{className:"erp-tabs",children:[["dashboard","Табло"],["sales","Продажби"],["products","Склад"],["reports","Справки"],["expenses","Разходи"],["wax","Восък"]].map(([f,B])=>o.jsx("button",{className:v===f?"active":"",onClick:()=>S(f),children:B},f))}),v==="dashboard"&&_&&o.jsxs(o.Fragment,{children:[o.jsxs("section",{className:"metric-grid",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Днес оборот"}),o.jsx("strong",{children:ee(_.todayTurnoverEur)}),o.jsx("small",{children:_e(_.todayTurnoverEur)})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Днес печалба"}),o.jsx("strong",{children:ee(_.todayProfitEur)}),o.jsx("small",{children:_e(_.todayProfitEur)})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Месец оборот"}),o.jsx("strong",{children:ee(_.monthlyTurnoverEur)}),o.jsx("small",{children:_e(_.monthlyTurnoverEur)})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Месец печалба"}),o.jsx("strong",{children:ee(_.monthlyProfitEur)}),o.jsx("small",{children:_e(_.monthlyProfitEur)})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Наличен восък"}),o.jsxs("strong",{children:[Bo.toFixed(3)," кг"]}),o.jsxs("small",{children:[Bo.toFixed(3)," кг"]})]})]}),o.jsxs("section",{className:"erp-columns",children:[o.jsx(On,{title:"Ниска наличност",children:Fr.map(f=>o.jsx(Fn,{title:f.name,meta:`${f.stockQuantity} ${Dn[f.unit]} минимум ${f.minStockQuantity}`},f.id))}),o.jsxs(On,{title:"Последни продажби",children:[o.jsx("button",{className:"inline-action",onClick:$o,children:"Виж всички продажби"}),un.map(f=>o.jsxs("div",{className:"row-with-action",children:[o.jsx(Fn,{title:f.product.name,meta:`${f.quantity} x ${ee(f.unitPriceEur)} = ${ee(f.totalEur)}`}),o.jsxs("div",{className:"mini-actions",children:[o.jsx("button",{className:"mini-btn",onClick:()=>Yt(f),children:"Редакция"}),o.jsx("button",{className:"mini-btn danger",onClick:()=>nn(f),children:"Изтрий"})]})]},f.id))]}),o.jsx(On,{title:"Последни сделки с восък",children:cn.map(f=>o.jsx(Fn,{title:f.customerName||`#${f.id}`,meta:`Баланс ${ee(f.balanceEur)} | восък ${f.waxReceivedKg} кг`},f.id))})]})]}),v==="sales"&&o.jsxs("section",{className:"sales-layout",children:[o.jsxs("form",{className:"erp-card sale-card",onSubmit:zr,children:[o.jsxs("div",{className:"sale-card-head",children:[o.jsxs("div",{children:[o.jsx("h2",{children:$?"Редакция на продажба":"Бърза продажба"}),o.jsx("p",{children:it?it.name:"Изберете продукт и въведете количество"})]}),o.jsxs("label",{children:["Дата",o.jsx("input",{type:"date",value:xe.saleDate,onChange:f=>et({...xe,saleDate:f.target.value})})]})]}),o.jsxs("div",{className:"quick-search",children:[o.jsxs("label",{children:["Търсене",o.jsx("input",{placeholder:"Търси продукт или ИД",value:ce,onChange:f=>he(f.target.value)})]}),o.jsxs("label",{children:["Продукт",o.jsxs("select",{value:xe.productId,onChange:f=>{const B=F.find(we=>String(we.id)===f.target.value);B?Wn(B):et({...xe,productId:"",unitPriceEur:""})},required:!0,children:[o.jsx("option",{value:"",children:"Всички продукти"}),F.filter(f=>f.active).map(f=>o.jsx("option",{value:f.id,children:f.name},f.id))]})]})]}),o.jsx("div",{className:"quick-products",children:Uo.map(f=>o.jsxs("button",{type:"button",className:xe.productId===String(f.id)?"selected":"",onClick:()=>Wn(f),children:[o.jsx("strong",{children:f.name}),o.jsxs("span",{children:[ee(f.sellPriceEur)," · ",f.stockQuantity," ",Dn[f.unit]]})]},f.id))}),o.jsxs("div",{className:"sale-input-grid",children:[o.jsxs("label",{children:["Количество",o.jsx("input",{inputMode:"decimal",type:"number",step:"0.001",min:"0.001",value:xe.quantity,onChange:f=>et({...xe,quantity:f.target.value}),required:!0})]}),o.jsxs("label",{children:["Цена EUR",o.jsx("input",{inputMode:"decimal",type:"number",step:"0.01",min:"0",value:xe.unitPriceEur,onChange:f=>et({...xe,unitPriceEur:f.target.value})})]})]}),o.jsxs("div",{className:"field-group",children:[o.jsx("span",{className:"field-title",children:"Плащане"}),o.jsx("div",{className:"payment-pills",children:Object.entries(Zl).map(([f,B])=>o.jsx("button",{type:"button",className:xe.paymentMethod===f?"active":"",onClick:()=>et({...xe,paymentMethod:f}),children:B},f))})]}),o.jsxs("label",{children:["Бележка",o.jsx("textarea",{className:"sale-note",placeholder:"Бележка",value:xe.notes,onChange:f=>et({...xe,notes:f.target.value})})]}),o.jsxs("div",{className:"sale-total-bar",children:[o.jsx("span",{children:"Общо"}),o.jsx("strong",{children:ee(Number(xe.quantity||0)*Number(xe.unitPriceEur||(it==null?void 0:it.sellPriceEur)||0))}),o.jsx("small",{children:_e(Number(xe.quantity||0)*Number(xe.unitPriceEur||(it==null?void 0:it.sellPriceEur)||0))})]}),o.jsxs("div",{className:"actions sale-actions",children:[o.jsx("button",{className:"erp-btn primary",disabled:P,children:$?"Запази продажба":"Продай"}),$&&o.jsx("button",{type:"button",className:"erp-btn ghost",onClick:()=>{j(null),et({saleDate:qt(),productId:"",quantity:"1",unitPriceEur:"",paymentMethod:"CASH",notes:""})},children:"Отказ"})]})]}),o.jsxs("section",{className:"sales-main",children:[o.jsxs("nav",{className:"report-tabs",children:[o.jsx("button",{className:ae==="quick"?"active":"",onClick:()=>ue("quick"),children:"Последни"}),o.jsx("button",{className:ae==="all"?"active":"",onClick:()=>ue("all"),children:"Всички продажби"})]}),ae==="quick"&&o.jsxs(On,{title:"Последни продажби",children:[o.jsx("button",{className:"inline-action",onClick:$o,children:"Виж всички продажби"}),de.slice(0,12).map(f=>o.jsxs("div",{className:"row-with-action",children:[o.jsx(Fn,{title:f.product.name,meta:`${new Date(f.saleDate).toLocaleDateString("bg-BG")} | ${f.quantity} | ${ee(f.totalEur)} | печалба ${ee(f.profitEur)}`}),o.jsxs("div",{className:"mini-actions",children:[o.jsx("button",{className:"mini-btn",onClick:()=>Yt(f),children:"Редакция"}),o.jsx("button",{className:"mini-btn danger",onClick:()=>nn(f),children:"Изтрий"})]})]},f.id))]}),ae==="all"&&o.jsx("div",{className:"report-table-wrap",children:o.jsxs("table",{className:"report-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Дата"}),o.jsx("th",{children:"Продукт"}),o.jsx("th",{children:"Количество"}),o.jsx("th",{children:"Цена"}),o.jsx("th",{children:"Оборот"}),o.jsx("th",{children:"Печалба"}),o.jsx("th",{children:"Плащане"}),o.jsx("th",{children:"Действия"})]})}),o.jsx("tbody",{children:de.map(f=>o.jsxs("tr",{children:[o.jsx("td",{"data-label":"Дата",children:new Date(f.saleDate).toLocaleDateString("bg-BG")}),o.jsx("td",{"data-label":"Продукт",children:f.product.name}),o.jsx("td",{"data-label":"Количество",children:f.quantity}),o.jsx("td",{"data-label":"Цена",children:ee(f.unitPriceEur)}),o.jsxs("td",{"data-label":"Оборот",children:[ee(f.totalEur),o.jsx("small",{children:_e(f.totalEur)})]}),o.jsx("td",{"data-label":"Печалба",children:ee(f.profitEur)}),o.jsx("td",{"data-label":"Плащане",children:Zl[f.paymentMethod]}),o.jsx("td",{"data-label":"Действия",children:o.jsxs("div",{className:"mini-actions",children:[o.jsx("button",{className:"mini-btn",onClick:()=>Yt(f),children:"Редакция"}),o.jsx("button",{className:"mini-btn danger",onClick:()=>nn(f),children:"Изтрий"})]})})]},f.id))})]})})]})]}),v==="products"&&o.jsx("section",{className:"storage-layout",children:o.jsxs("section",{className:"storage-main",children:[o.jsxs("div",{className:"storage-toolbar",children:[o.jsxs("label",{children:["Търсене",o.jsx("input",{placeholder:"Търсене по име, ИД или бележка",value:I,onChange:f=>M(f.target.value)})]}),o.jsxs("label",{children:["Категория",o.jsxs("select",{value:Y,onChange:f=>Z(f.target.value),children:[o.jsx("option",{value:"ALL",children:"Всички категории"}),Object.entries(Xi).map(([f,B])=>o.jsx("option",{value:f,children:B},f))]})]}),o.jsxs("label",{children:["Статус",o.jsxs("select",{value:H,onChange:f=>re(f.target.value),children:[o.jsx("option",{value:"ALL",children:"Всички"}),o.jsx("option",{value:"LOW",children:"Ниска наличност"}),o.jsx("option",{value:"ACTIVE",children:"Активни"})]})]}),o.jsx("button",{className:"erp-btn primary",onClick:Ao,children:"Нов продукт"})]}),A&&o.jsxs("form",{className:"storage-editor",onSubmit:rn,children:[o.jsxs("div",{className:"storage-editor-head",children:[o.jsx("h2",{children:Me?"Редакция на продукт":"Нов продукт"}),o.jsx("button",{type:"button",className:"mini-btn",onClick:()=>{G(!1),ye(null),Ie(To)},children:"Затвори"})]}),o.jsxs("div",{className:"editor-grid",children:[o.jsxs("label",{children:["ИД / код",o.jsx("input",{placeholder:"ИД / код от склада",value:oe.sku,onChange:f=>Ie({...oe,sku:f.target.value})})]}),o.jsxs("label",{children:["Име",o.jsx("input",{placeholder:"Име",value:oe.name,onChange:f=>Ie({...oe,name:f.target.value}),required:!0})]}),o.jsxs("label",{children:["Категория",o.jsx("select",{value:oe.category,onChange:f=>Ie({...oe,category:f.target.value}),children:Object.entries(Xi).map(([f,B])=>o.jsx("option",{value:f,children:B},f))})]}),o.jsxs("label",{children:["Мерна единица",o.jsx("select",{value:oe.unit,onChange:f=>Ie({...oe,unit:f.target.value}),children:Object.entries(Dn).map(([f,B])=>o.jsx("option",{value:f,children:B},f))})]}),o.jsxs("label",{children:["Продажна цена EUR",o.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Продажна EUR",value:oe.sellPriceEur,onChange:f=>Ie({...oe,sellPriceEur:f.target.value}),required:!0})]}),o.jsxs("label",{children:["Доставна цена EUR",o.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Доставна EUR",value:oe.costPriceEur,onChange:f=>Ie({...oe,costPriceEur:f.target.value}),required:!0})]}),o.jsxs("label",{children:["Наличност",o.jsx("input",{type:"number",step:"0.001",min:"0",placeholder:"Наличност",value:oe.stockQuantity,onChange:f=>Ie({...oe,stockQuantity:f.target.value})})]}),o.jsxs("label",{children:["Минимум",o.jsx("input",{type:"number",step:"0.001",min:"0",placeholder:"Минимум",value:oe.minStockQuantity,onChange:f=>Ie({...oe,minStockQuantity:f.target.value})})]}),o.jsxs("label",{children:["Общо продадени",o.jsx("input",{type:"number",step:"0.001",min:"0",placeholder:"Общо продадени",value:oe.totalSoldQuantity,onChange:f=>Ie({...oe,totalSoldQuantity:f.target.value})})]}),o.jsxs("label",{className:"check",children:[o.jsx("input",{type:"checkbox",checked:oe.active,onChange:f=>Ie({...oe,active:f.target.checked})})," Активен"]}),o.jsxs("label",{className:"wide-field",children:["Бележки",o.jsx("textarea",{placeholder:"Бележки",value:oe.notes,onChange:f=>Ie({...oe,notes:f.target.value})})]}),o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"erp-btn primary",disabled:P,children:"Запази"}),Me&&o.jsx("button",{type:"button",className:"erp-btn ghost",onClick:()=>{ye(null),Ie(To),G(!1)},children:"Отказ"})]})]})]}),o.jsxs("section",{className:"metric-grid compact",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Артикули"}),o.jsx("strong",{children:an.length}),o.jsx("small",{children:"показани"})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Ниска наличност"}),o.jsx("strong",{children:sr.low}),o.jsx("small",{children:"за проверка"})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Стойност склад"}),o.jsx("strong",{children:ee(sr.stockValue)}),o.jsx("small",{children:_e(sr.stockValue)})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Продажна стойност"}),o.jsx("strong",{children:ee(sr.sellValue)}),o.jsx("small",{children:_e(sr.sellValue)})]})]}),o.jsx("div",{className:"storage-hint",children:"Таблицата се скролира вертикално и хоризонтално."}),o.jsx("div",{className:"storage-table-wrap",children:o.jsxs("table",{className:"storage-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"ИД"}),o.jsx("th",{children:"Продукт"}),o.jsx("th",{children:"Категория"}),o.jsx("th",{children:"Наличност"}),o.jsx("th",{children:"Дост."}),o.jsx("th",{children:"Прод."}),o.jsx("th",{children:"Печалба"}),o.jsx("th",{children:"Продадени"}),o.jsx("th",{children:"Стойност"})]})}),o.jsx("tbody",{children:an.map(f=>o.jsxs("tr",{onClick:()=>Bn(f),className:f.stockStatus==="LOW"?"low":"",children:[o.jsx("td",{"data-label":"ИД",children:f.sku||f.id}),o.jsxs("td",{"data-label":"Продукт",children:[o.jsx("strong",{children:f.name}),o.jsx("small",{children:f.active?"Активен":"Спрян"})]}),o.jsx("td",{"data-label":"Категория",children:Xi[f.category]}),o.jsxs("td",{"data-label":"Наличност",children:[f.stockQuantity," ",Dn[f.unit],o.jsxs("small",{children:["мин. ",f.minStockQuantity]})]}),o.jsx("td",{"data-label":"Дост.",children:ee(f.costPriceEur)}),o.jsxs("td",{"data-label":"Прод.",children:[ee(f.sellPriceEur),o.jsx("small",{children:_e(f.sellPriceEur)})]}),o.jsx("td",{"data-label":"Печалба",children:ee(f.unitProfitEur)}),o.jsx("td",{"data-label":"Продадени",children:f.totalSoldQuantity||0}),o.jsxs("td",{"data-label":"Стойност",children:[ee(f.inventoryValueEur),o.jsx("small",{children:_e(f.inventoryValueEur)})]})]},f.id))})]})})]})}),v==="reports"&&le&&o.jsxs("section",{className:"report-stack",children:[o.jsxs("div",{className:"filters",children:[o.jsxs("label",{children:["От дата",o.jsx("input",{type:"date",value:qe.from,onChange:f=>Gt({...qe,from:f.target.value})})]}),o.jsxs("label",{children:["До дата",o.jsx("input",{type:"date",value:qe.to,onChange:f=>Gt({...qe,to:f.target.value})})]}),o.jsx("a",{className:"erp-btn primary",href:ir(`/api/admin/erp/reports.csv?from=${qe.from}&to=${qe.to}`),children:"CSV export"})]}),o.jsxs("section",{className:"metric-grid",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Оборот"}),o.jsx("strong",{children:ee(le.totals.turnoverEur)}),o.jsx("small",{children:_e(le.totals.turnoverEur)})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Брутна печалба"}),o.jsx("strong",{children:ee(le.totals.grossProfitEur)}),o.jsx("small",{children:_e(le.totals.grossProfitEur)})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Разходи"}),o.jsx("strong",{children:ee(le.totals.expensesEur)}),o.jsx("small",{children:_e(le.totals.expensesEur)})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Нетна печалба"}),o.jsx("strong",{children:ee(le.totals.netProfitEur)}),o.jsx("small",{children:_e(le.totals.netProfitEur)})]})]}),o.jsx("nav",{className:"report-tabs",children:[["monthly","Месечни"],["daily","Дневни"],["products","Продадени продукти"],["expenses","Разходи"],["low-stock","Ниска наличност"]].map(([f,B])=>o.jsx("button",{className:fe===f?"active":"",onClick:()=>ke(f),children:B},f))}),fe==="monthly"&&o.jsx(Lo,{headers:["Месец","Оборот","Печалба","Разходи","Нетна печалба","Продадени","Редове"],rows:le.monthly.map(f=>[new Date(f.month).toLocaleDateString("bg-BG",{month:"long",year:"numeric"}),`${ee(f.turnover_eur)} / ${_e(f.turnover_eur)}`,`${ee(f.profit_eur)} / ${_e(f.profit_eur)}`,`${ee(f.expenses_eur)} / ${_e(f.expenses_eur)}`,`${ee(Number(f.profit_eur||0)-Number(f.expenses_eur||0))}`,String(f.sold_quantity||0),String(f.sold_lines||0)])}),fe==="daily"&&o.jsx(Lo,{headers:["Дата","Оборот","Каса","Печалба","Разходи","Остатък","Продадени"],rows:le.daily.map(f=>{const B=Number(f.turnover_eur||0),we=Number(f.profit_eur||0),ht=Number(f.expenses_eur||0);return[new Date(f.day).toLocaleDateString("bg-BG"),`${ee(B)} / ${_e(B)}`,_e(B),`${ee(we)} / ${_e(we)}`,`${ee(ht)} / ${_e(ht)}`,_e(Math.max(B-ht,0)),String(f.sold_quantity||0)]})}),fe==="products"&&o.jsx(Lo,{headers:["Продукт","Количество","Оборот","Печалба","Средна цена"],rows:le.salesByProduct.map(f=>[f.product_name,String(f.quantity),ee(f.turnover_eur),ee(f.profit_eur),ee(Number(f.turnover_eur||0)/Math.max(Number(f.quantity||0),1))])}),fe==="expenses"&&o.jsx(Lo,{headers:["Категория","Разход EUR","Разход BGN"],rows:le.expensesByCategory.map(f=>[es[f.category],ee(f._sum.amountEur||0),_e(f._sum.amountEur||0)])}),fe==="low-stock"&&o.jsx("div",{className:"scroll-panel",children:o.jsx(Lo,{headers:["Продукт","Категория","Наличност","Минимум","Стойност"],rows:le.lowStockProducts.map(f=>[f.name,Xi[f.category],`${f.stockQuantity} ${Dn[f.unit]}`,String(f.minStockQuantity),ee(f.inventoryValueEur||f.stockQuantity*f.costPriceEur)])})})]}),v==="expenses"&&o.jsxs("section",{className:"erp-grid",children:[o.jsxs("form",{className:"erp-card",onSubmit:ua,children:[o.jsx("h2",{children:"Нов разход"}),o.jsxs("label",{children:["Дата",o.jsx("input",{type:"date",value:Ve.expenseDate,onChange:f=>At({...Ve,expenseDate:f.target.value})})]}),o.jsxs("label",{children:["Категория",o.jsx("select",{value:Ve.category,onChange:f=>At({...Ve,category:f.target.value}),children:Object.entries(es).map(([f,B])=>o.jsx("option",{value:f,children:B},f))})]}),o.jsxs("label",{children:["Сума EUR",o.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Сума EUR",value:Ve.amountEur,onChange:f=>At({...Ve,amountEur:f.target.value}),required:!0})]}),o.jsxs("label",{children:["Плащане",o.jsx("select",{value:Ve.paymentMethod,onChange:f=>At({...Ve,paymentMethod:f.target.value}),children:Object.entries(Zl).map(([f,B])=>o.jsx("option",{value:f,children:B},f))})]}),o.jsxs("label",{children:["Доставчик",o.jsx("input",{placeholder:"Доставчик",value:Ve.supplier,onChange:f=>At({...Ve,supplier:f.target.value})})]}),o.jsxs("label",{children:["Бележка",o.jsx("textarea",{placeholder:"Бележка",value:Ve.notes,onChange:f=>At({...Ve,notes:f.target.value})})]}),o.jsx("button",{className:"erp-btn primary",children:"Запази разход"})]}),o.jsx(On,{title:"Справка разходи",children:le==null?void 0:le.expensesByCategory.map(f=>o.jsx(Fn,{title:es[f.category],meta:ee(f._sum.amountEur||0)},f.category))})]}),v==="wax"&&o.jsxs("section",{className:"wax-page",children:[o.jsxs("section",{className:"metric-grid compact",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Наличен восък"}),o.jsxs("strong",{children:[Number(Te.waxStockKg||0).toFixed(3)," кг"]}),o.jsx("small",{children:"текущ склад"})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Стойност във восък"}),o.jsx("strong",{children:ee(Te.waxInventoryValueEur)}),o.jsxs("small",{children:["по ",ee(Je.defaultBuyPriceEur)," / кг"]})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Дадени основи"}),o.jsxs("strong",{children:[Number(Te.totalFoundationGivenKg||0).toFixed(3)," кг"]}),o.jsx("small",{children:ee(Te.totalFoundationGivenValueEur)})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Баланс сделки"}),o.jsx("strong",{children:ee(Te.balanceEur)}),o.jsxs("small",{children:[Te.transactionCount," сделки"]})]})]}),o.jsxs("section",{className:"erp-grid",children:[o.jsxs("div",{className:"wax-form-stack",children:[o.jsxs("form",{className:"erp-card",onSubmit:Vn,children:[o.jsx("h2",{children:"Настройки восък"}),o.jsxs("label",{children:["Цена изкупуване EUR/кг",o.jsx("input",{type:"number",step:"0.01",min:"0",value:$n.defaultBuyPriceEur,onChange:f=>tn({defaultBuyPriceEur:f.target.value})})]}),o.jsx("button",{className:"erp-btn primary",children:"Запази цена"})]}),o.jsxs("form",{className:"erp-card",onSubmit:Hn,children:[o.jsx("h2",{children:R?"Редакция на восъчна сделка":"Нова восъчна сделка"}),o.jsxs("div",{className:"mode-switch",children:[o.jsx("button",{type:"button",className:ne.transactionType==="BUY"?"active":"",onClick:()=>on("BUY"),children:"Купувам восък"}),o.jsx("button",{type:"button",className:ne.transactionType==="SWAP"?"active":"",onClick:()=>on("SWAP"),children:"Смяна основи за восък"})]}),o.jsxs("label",{children:["Дата",o.jsx("input",{type:"date",value:ne.transactionDate,onChange:f=>He({...ne,transactionDate:f.target.value})})]}),o.jsxs("label",{children:["Име на клиент",o.jsx("input",{placeholder:"Име на клиент",value:ne.customerName,onChange:f=>He({...ne,customerName:f.target.value}),required:!0})]}),o.jsxs("label",{children:["Телефон",o.jsx("input",{placeholder:"Телефон",value:ne.customerPhone,onChange:f=>He({...ne,customerPhone:f.target.value})})]}),o.jsxs("div",{className:"two",children:[o.jsxs("label",{children:["Приет восък кг",o.jsx("input",{type:"number",step:"0.001",min:"0",placeholder:"Приет восък кг",value:ne.waxReceivedKg,onChange:f=>He({...ne,waxReceivedKg:f.target.value})})]}),o.jsxs("label",{children:["Цена восък EUR/кг",o.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Цена восък EUR/кг",value:ne.waxPricePerKgEur,onChange:f=>He({...ne,waxPricePerKgEur:f.target.value})})]})]}),Dr&&o.jsxs(o.Fragment,{children:[o.jsxs("label",{children:["Тип основи от склада",o.jsxs("select",{value:ne.foundationProductId,onChange:f=>{const B=ln.find(we=>String(we.id)===f.target.value);He({...ne,foundationProductId:f.target.value,foundationPricePerKgEur:B?String(B.sellPriceEur):ne.foundationPricePerKgEur})},required:!0,children:[o.jsx("option",{value:"",children:"Избери основи"}),ln.map(f=>o.jsxs("option",{value:f.id,children:[f.name," | ",f.stockQuantity," ",Dn[f.unit]," | ",ee(f.sellPriceEur)]},f.id))]})]}),o.jsxs("div",{className:"two",children:[o.jsxs("label",{children:["Дадени основи кг",o.jsx("input",{type:"number",step:"0.001",min:"0",placeholder:"Дадени основи кг",value:ne.foundationGivenKg,onChange:f=>He({...ne,foundationGivenKg:f.target.value})})]}),o.jsxs("label",{children:["Цена основи EUR/кг",o.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Цена основи EUR/кг",value:ne.foundationPricePerKgEur,onChange:f=>He({...ne,foundationPricePerKgEur:f.target.value})})]})]}),o.jsxs("label",{children:["Доплатено от клиента EUR",o.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Доплатено от клиента EUR",value:ne.extraPaymentEur,onChange:f=>He({...ne,extraPaymentEur:f.target.value})})]}),Kn&&o.jsxs("div",{className:"storage-hint",children:["Ще се приспадне от склада: ",Kn.name]})]}),o.jsxs("label",{children:["Бележка",o.jsx("textarea",{placeholder:"Бележка",value:ne.notes,onChange:f=>He({...ne,notes:f.target.value})})]}),o.jsxs("div",{className:"form-total",children:["Стойност восък ",ee(sn)," | Основи ",ee(ur)," | ",Or]}),o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"erp-btn primary",children:R?"Запази промени":"Запази сделка"}),R&&o.jsx("button",{type:"button",className:"erp-btn ghost",onClick:()=>Ir(),children:"Отказ"})]})]})]}),o.jsx(On,{title:"Восъчни сделки",children:Ye.map(f=>o.jsxs("div",{className:"row-with-action",children:[o.jsx(Fn,{title:`${f.transactionType==="SWAP"?"Смяна":"Покупка"} | ${f.customerName||`#${f.id}`} | ${new Date(f.transactionDate).toLocaleDateString("bg-BG")}`,meta:`восък ${f.waxReceivedKg} кг | основи ${f.foundationGivenKg} кг | баланс ${ee(f.balanceEur)}`}),o.jsxs("div",{className:"mini-actions",children:[o.jsx("button",{type:"button",className:"mini-btn",onClick:()=>qn(f),children:"Редакция"}),o.jsx("button",{type:"button",className:"mini-btn danger",onClick:()=>lr(f),children:"Изтрий"})]})]},f.id))})]})]})]}),o.jsx("style",{children:ad})]}):o.jsxs("div",{className:"erp-login",children:[o.jsx(wt,{title:"ERP вход | SakiMed",description:"Вход в частната ERP система на SakiMed.",path:"/admin",noindex:!0}),o.jsxs("form",{className:"login-box",onSubmit:Fo,children:[o.jsx("h1",{children:"SakiMed ERP"}),o.jsx("label",{children:"Имейл"}),o.jsx("input",{type:"email",value:p.email,onChange:f=>h({...p,email:f.target.value}),required:!0}),o.jsx("label",{children:"Парола"}),o.jsx("input",{type:"password",value:p.password,onChange:f=>h({...p,password:f.target.value}),required:!0}),k&&o.jsx("p",{className:"status error",children:k}),o.jsx("button",{className:"erp-btn primary",disabled:P,children:P?"Влизане...":"Вход"})]}),o.jsx("style",{children:ad})]})}function On({title:a,children:s}){return o.jsxs("section",{className:"erp-panel",children:[o.jsx("h2",{children:a}),o.jsx("div",{className:"panel-list",children:s})]})}function Fn({title:a,meta:s}){return o.jsxs("div",{className:"erp-row",children:[o.jsx("strong",{children:a}),o.jsx("span",{children:s})]})}function Lo({headers:a,rows:s}){return o.jsx("div",{className:"report-table-wrap",children:o.jsxs("table",{className:"report-table",children:[o.jsx("thead",{children:o.jsx("tr",{children:a.map(u=>o.jsx("th",{children:u},u))})}),o.jsxs("tbody",{children:[s.length===0&&o.jsx("tr",{children:o.jsx("td",{colSpan:a.length,children:"Няма данни за избрания период."})}),s.map((u,d)=>o.jsx("tr",{children:u.map((p,h)=>o.jsx("td",{"data-label":a[h],children:p},`${d}-${h}`))},d))]})]})})}const ad=`
  .erp-login,
  .erp-shell {
    min-height: 100vh;
    background: #eef2ec;
    color: #172018;
    padding: 18px 0 36px;
  }

  .erp-login {
    display: grid;
    place-items: center;
  }

  .erp-wrap {
    width: min(1240px, calc(100% - 24px));
    margin: 0 auto;
  }

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
    margin-bottom: 14px;
    padding: 12px 14px;
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 6px;
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

	  .filters {
	    align-items: end;
	  }

  .erp-tabs {
    margin: 0 0 14px;
    padding: 6px;
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 6px;
  }

  .erp-tabs button,
  .erp-btn {
    min-height: 42px;
    border-radius: 5px;
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
    background: #225c32;
    border-color: #225c32;
    color: #fff;
  }

  .erp-btn.ghost {
    background: #eef3ea;
  }

  .metric-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
    margin-bottom: 14px;
  }

  .metric-grid > div {
    padding: 14px;
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

	  .wax-page,
	  .wax-form-stack {
	    display: grid;
	    gap: 14px;
	  }

  .sales-layout {
    display: grid;
    grid-template-columns: minmax(330px, 470px) minmax(0, 1fr);
    gap: 14px;
    align-items: start;
  }

  .sales-main {
    display: grid;
    gap: 12px;
    min-width: 0;
  }

  .sale-card {
    position: sticky;
    top: 12px;
    gap: 14px;
    border-color: #cfd9ca;
  }

  .sale-card-head {
    display: grid;
    grid-template-columns: 1fr 150px;
    gap: 10px;
    align-items: start;
  }

  .sale-card-head p {
    margin: 4px 0 0;
    color: #687366;
    font-weight: 700;
  }

  .quick-search,
  .sale-input-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .quick-products {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    max-height: 250px;
    overflow: auto;
    padding-right: 2px;
  }

  .quick-products button {
    display: grid;
    gap: 4px;
    min-height: 68px;
    border: 1px solid #d5ded0;
    border-radius: 6px;
    background: #fbfcfa;
    color: #172018;
    padding: 10px;
    text-align: left;
    cursor: pointer;
  }

  .quick-products button.selected {
    border-color: #225c32;
    background: #eaf3e6;
    box-shadow: inset 0 0 0 1px #225c32;
  }

  .quick-products span {
    color: #687366;
    font-size: 0.86rem;
  }

	  .payment-pills {
	    display: grid;
	    grid-template-columns: repeat(4, minmax(0, 1fr));
	    gap: 8px;
	  }

	  .field-group {
	    display: grid;
	    gap: 6px;
	  }

	  .field-title {
	    color: #344238;
	    font-weight: 700;
	  }

  .payment-pills button {
    min-height: 44px;
    border: 1px solid #cfd9ca;
    border-radius: 6px;
    background: #fff;
    color: #1f3822;
    font: inherit;
    font-weight: 800;
    cursor: pointer;
  }

	  .payment-pills button.active {
	    background: #225c32;
	    border-color: #225c32;
	    color: #fff;
	  }

	  .mode-switch {
	    display: grid;
	    grid-template-columns: 1fr 1fr;
	    gap: 8px;
	  }

	  .mode-switch button {
	    min-height: 44px;
	    border: 1px solid #cfd9ca;
	    border-radius: 6px;
	    background: #fff;
	    color: #1f3822;
	    font: inherit;
	    font-weight: 800;
	    cursor: pointer;
	  }

	  .mode-switch button.active {
	    background: #225c32;
	    border-color: #225c32;
	    color: #fff;
	  }

  .sale-note {
    min-height: 58px;
  }

  .sale-total-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 4px 12px;
    align-items: end;
    padding: 14px;
    border: 1px solid #d7dfd3;
    border-radius: 6px;
    background: #f8faf6;
  }

  .sale-total-bar span {
    color: #687366;
    font-weight: 800;
  }

  .sale-total-bar strong {
    font-size: 1.65rem;
    color: #172018;
  }

  .sale-total-bar small {
    grid-column: 2;
    color: #687366;
    font-weight: 800;
  }

  .sale-actions .erp-btn.primary {
    min-height: 50px;
    flex: 1;
    font-size: 1.05rem;
  }
  }

  .storage-layout {
    display: block;
  }

  .storage-main {
    display: grid;
    gap: 12px;
    min-width: 0;
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(26, 42, 28, 0.06);
    overflow: hidden;
  }

  .storage-main .metric-grid {
    padding: 0 12px;
  }

  .storage-hint {
    padding: 0 12px;
    color: #687366;
    font-size: 0.86rem;
    font-weight: 700;
  }

	  .storage-toolbar {
	    display: grid;
	    grid-template-columns: minmax(260px, 1fr) 190px 170px 140px;
	    gap: 8px;
	    padding: 12px;
    background: #f8faf6;
	    border-bottom: 1px solid #dfe5dc;
	    position: sticky;
	    top: 0;
	    z-index: 2;
	    align-items: end;
	  }

  .storage-editor {
    margin: 12px;
    padding: 14px;
    border: 1px solid #d5ded0;
    border-radius: 6px;
    background: #fbfcfa;
  }

  .storage-editor-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .storage-editor-head h2 {
    margin: 0;
    color: #1f3822;
  }

  .editor-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
    align-items: start;
  }

	  .editor-grid textarea {
	    grid-column: span 2;
	    min-height: 48px;
	  }

	  .editor-grid .wide-field {
	    grid-column: span 2;
	  }

  .metric-grid.compact {
    margin-bottom: 0;
  }

  .metric-grid.compact strong {
    font-size: 1.15rem;
  }

  .storage-table-wrap {
    max-height: min(66vh, 720px);
    background: #fff;
    border-top: 1px solid #dfe5dc;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
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

  .storage-table tbody tr:nth-child(even):not(.low) {
    background: #fbfcfa;
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

  .row-with-action {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    align-items: center;
    border-bottom: 1px solid #edf0eb;
  }

  .row-with-action .erp-row {
    border-bottom: 0;
  }

  .inline-action,
  .mini-btn {
    min-height: 34px;
    border-radius: 6px;
    border: 1px solid #cfd9ca;
    background: #eef3ea;
    color: #1f3822;
    padding: 0 10px;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
  }

  .inline-action {
    justify-self: start;
  }

  .mini-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .mini-btn.danger {
    background: #fee2e2;
    border-color: #fecaca;
    color: #991b1b;
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
    .sales-layout,
    .storage-layout {
      grid-template-columns: 1fr;
    }

    .sale-card {
      position: static;
    }

    .storage-toolbar {
      grid-template-columns: 1fr 1fr;
      position: static;
    }

    .storage-toolbar input {
      grid-column: 1 / -1;
    }

    .editor-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 620px) {
    .erp-shell {
      padding-top: 8px;
    }

    .erp-wrap {
      width: min(100% - 16px, 1240px);
    }

    .erp-header {
      align-items: stretch;
      flex-direction: column;
      padding: 10px;
    }

    .erp-tabs {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .report-tabs {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .storage-table-wrap {
      max-width: calc(100vw - 28px);
      max-height: 62vh;
    }

    .storage-toolbar {
      grid-template-columns: 1fr;
    }

    .storage-toolbar input {
      grid-column: auto;
    }

    .editor-grid {
      grid-template-columns: 1fr;
    }

    .editor-grid textarea {
      grid-column: auto;
    }

    .two {
      grid-template-columns: 1fr;
    }

    .sale-card {
      padding: 12px;
      margin-inline: -2px;
    }

    .sale-card-head,
    .quick-search,
    .sale-input-grid {
      grid-template-columns: 1fr;
    }

    .quick-products {
      grid-template-columns: 1fr 1fr;
      max-height: 230px;
    }

    .quick-products button {
      min-height: 76px;
      padding: 9px;
    }

    .payment-pills {
      grid-template-columns: 1fr 1fr;
    }

    .payment-pills button,
    input,
    textarea,
    select {
      min-height: 48px;
    }

    .sale-total-bar {
      position: sticky;
      bottom: 0;
      z-index: 3;
      margin-inline: -12px;
      border-left: 0;
      border-right: 0;
      border-radius: 0;
      box-shadow: 0 -8px 18px rgba(23, 32, 24, 0.08);
    }

    .sale-actions {
      position: sticky;
      bottom: 0;
      z-index: 4;
      background: #fff;
      padding-top: 8px;
      margin-bottom: -4px;
    }

    .sale-actions .erp-btn {
      width: 100%;
    }

    .report-table {
      min-width: 0;
      display: block;
    }

    .report-table thead {
      display: none;
    }

    .report-table tbody,
    .report-table tr,
    .report-table td {
      display: block;
      width: 100%;
    }

    .report-table tr {
      padding: 10px;
      border-bottom: 1px solid #dfe5dc;
    }

    .report-table td {
      border: 0;
      padding: 6px 0;
      display: grid;
      grid-template-columns: 110px 1fr;
      gap: 8px;
    }

    .row-with-action {
      grid-template-columns: 1fr;
      padding-bottom: 10px;
    }

    .mini-btn {
      justify-self: start;
    }

    .report-table td::before {
      content: attr(data-label);
      color: #687366;
      font-weight: 700;
    }
  }
`;function Vh(){const{slug:a}=wd(),[s,u]=y.useState(null),[d,p]=y.useState(!0),[h,v]=y.useState("");return y.useEffect(()=>{async function S(){try{const k=await fetch(ir(`/api/landing-pages/${a}`));if(!k.ok)throw new Error("Страницата не е намерена.");u(await k.json())}catch(k){v(k instanceof Error?k.message:"Възникна грешка.")}finally{p(!1)}}S()},[a]),d?o.jsx("div",{className:"container",style:{padding:"3rem 0"},children:"Зареждане..."}):h||!s?o.jsxs("div",{className:"container",style:{padding:"3rem 0"},children:[o.jsx(wt,{title:"Страницата не е намерена | САКИ",description:"Тази специална страница не е налична.",path:`/special/${a??""}`,noindex:!0}),o.jsx("p",{children:h||"Страницата не е намерена."}),o.jsx(Kt,{to:"/products",className:"btn btn-primary",children:"Към продуктите"})]}):o.jsxs("div",{className:"special-page",children:[o.jsx(wt,{title:s.seoTitle||`${s.title} | САКИ`,description:s.seoDescription||s.heroSubtitle||"Специална страница от пчеларски магазин САКИ.",path:`/special/${s.slug}`,image:s.heroImage||void 0}),o.jsxs("section",{className:"special-hero",children:[s.heroImage&&o.jsx("img",{src:oa(s.heroImage),alt:s.heroTitle}),o.jsxs("div",{className:"container special-hero-content",children:[o.jsx("h1",{children:s.heroTitle}),s.heroSubtitle&&o.jsx("p",{children:s.heroSubtitle}),s.ctaText&&s.ctaLink&&o.jsx(Kt,{to:s.ctaLink,className:"btn btn-primary",children:s.ctaText})]})]}),o.jsx("section",{className:"container special-sections",children:s.sections.map((S,k)=>o.jsxs("article",{className:"special-section",children:[S.image&&o.jsx("img",{src:oa(S.image),alt:S.title||s.title}),o.jsxs("div",{children:[S.title&&o.jsx("h2",{children:S.title}),S.body&&o.jsx("p",{children:S.body})]})]},`${S.title}-${k}`))}),o.jsx("style",{children:`
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
      `})]})}function Hh(){return o.jsx(fh,{children:o.jsx(ch,{children:o.jsxs(Zm,{children:[o.jsx(hh,{}),o.jsx("main",{children:o.jsxs(Pm,{children:[o.jsx(Lr,{path:"/",element:o.jsx(Dh,{})}),o.jsx(Lr,{path:"/products",element:o.jsx(Fh,{})}),o.jsx(Lr,{path:"/products/:id",element:o.jsx(Mh,{})}),o.jsx(Lr,{path:"/special/:slug",element:o.jsx(Vh,{})}),o.jsx(Lr,{path:"/cart",element:o.jsx($h,{})}),o.jsx(Lr,{path:"/checkout",element:o.jsx(Bh,{})}),o.jsx(Lr,{path:"/admin",element:o.jsx(Wh,{})})]})}),o.jsx(gh,{})]})})})}Rd.initialize("G-D9FP0ZFK1S");Tp.createRoot(document.getElementById("root")).render(o.jsx(y.StrictMode,{children:o.jsx(Hh,{})}));

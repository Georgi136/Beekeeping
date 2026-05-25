var xp=Object.defineProperty;var wp=(a,s,u)=>s in a?xp(a,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):a[s]=u;var Ee=(a,s,u)=>wp(a,typeof s!="symbol"?s+"":s,u);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))d(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function u(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(f){if(f.ep)return;f.ep=!0;const h=u(f);fetch(f.href,h)}})();var Pl={exports:{}},mo={},_l={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc;function kp(){if(Oc)return de;Oc=1;var a=Symbol.for("react.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),v=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),b=Symbol.iterator;function _(j){return j===null||typeof j!="object"?null:(j=b&&j[b]||j["@@iterator"],typeof j=="function"?j:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,O={};function I(j,R,le){this.props=j,this.context=R,this.refs=O,this.updater=le||B}I.prototype.isReactComponent={},I.prototype.setState=function(j,R){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,R,"setState")},I.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function A(){}A.prototype=I.prototype;function X(j,R,le){this.props=j,this.context=R,this.refs=O,this.updater=le||B}var te=X.prototype=new A;te.constructor=X,F(te,I.prototype),te.isPureReactComponent=!0;var V=Array.isArray,ie=Object.prototype.hasOwnProperty,fe={current:null},ve={key:!0,ref:!0,__self:!0,__source:!0};function ue(j,R,le){var H,re={},G=null,ce=null;if(R!=null)for(H in R.ref!==void 0&&(ce=R.ref),R.key!==void 0&&(G=""+R.key),R)ie.call(R,H)&&!ve.hasOwnProperty(H)&&(re[H]=R[H]);var ae=arguments.length-2;if(ae===1)re.children=le;else if(1<ae){for(var me=Array(ae),ne=0;ne<ae;ne++)me[ne]=arguments[ne+2];re.children=me}if(j&&j.defaultProps)for(H in ae=j.defaultProps,ae)re[H]===void 0&&(re[H]=ae[H]);return{$$typeof:a,type:j,key:G,ref:ce,props:re,_owner:fe.current}}function Fe(j,R){return{$$typeof:a,type:j.type,key:R,ref:j.ref,props:j.props,_owner:j._owner}}function He(j){return typeof j=="object"&&j!==null&&j.$$typeof===a}function st(j){var R={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(le){return R[le]})}var Le=/\/+/g;function Re(j,R){return typeof j=="object"&&j!==null&&j.key!=null?st(""+j.key):R.toString(36)}function Qe(j,R,le,H,re){var G=typeof j;(G==="undefined"||G==="boolean")&&(j=null);var ce=!1;if(j===null)ce=!0;else switch(G){case"string":case"number":ce=!0;break;case"object":switch(j.$$typeof){case a:case s:ce=!0}}if(ce)return ce=j,re=re(ce),j=H===""?"."+Re(ce,0):H,V(re)?(le="",j!=null&&(le=j.replace(Le,"$&/")+"/"),Qe(re,R,le,"",function(ne){return ne})):re!=null&&(He(re)&&(re=Fe(re,le+(!re.key||ce&&ce.key===re.key?"":(""+re.key).replace(Le,"$&/")+"/")+j)),R.push(re)),1;if(ce=0,H=H===""?".":H+":",V(j))for(var ae=0;ae<j.length;ae++){G=j[ae];var me=H+Re(G,ae);ce+=Qe(G,R,le,me,re)}else if(me=_(j),typeof me=="function")for(j=me.call(j),ae=0;!(G=j.next()).done;)G=G.value,me=H+Re(G,ae++),ce+=Qe(G,R,le,me,re);else if(G==="object")throw R=String(j),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return ce}function we(j,R,le){if(j==null)return j;var H=[],re=0;return Qe(j,H,"","",function(G){return R.call(le,G,re++)}),H}function Ce(j){if(j._status===-1){var R=j._result;R=R(),R.then(function(le){(j._status===0||j._status===-1)&&(j._status=1,j._result=le)},function(le){(j._status===0||j._status===-1)&&(j._status=2,j._result=le)}),j._status===-1&&(j._status=0,j._result=R)}if(j._status===1)return j._result.default;throw j._result}var ye={current:null},M={transition:null},J={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:M,ReactCurrentOwner:fe};function $(){throw Error("act(...) is not supported in production builds of React.")}return de.Children={map:we,forEach:function(j,R,le){we(j,function(){R.apply(this,arguments)},le)},count:function(j){var R=0;return we(j,function(){R++}),R},toArray:function(j){return we(j,function(R){return R})||[]},only:function(j){if(!He(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},de.Component=I,de.Fragment=u,de.Profiler=f,de.PureComponent=X,de.StrictMode=d,de.Suspense=w,de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,de.act=$,de.cloneElement=function(j,R,le){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var H=F({},j.props),re=j.key,G=j.ref,ce=j._owner;if(R!=null){if(R.ref!==void 0&&(G=R.ref,ce=fe.current),R.key!==void 0&&(re=""+R.key),j.type&&j.type.defaultProps)var ae=j.type.defaultProps;for(me in R)ie.call(R,me)&&!ve.hasOwnProperty(me)&&(H[me]=R[me]===void 0&&ae!==void 0?ae[me]:R[me])}var me=arguments.length-2;if(me===1)H.children=le;else if(1<me){ae=Array(me);for(var ne=0;ne<me;ne++)ae[ne]=arguments[ne+2];H.children=ae}return{$$typeof:a,type:j.type,key:re,ref:G,props:H,_owner:ce}},de.createContext=function(j){return j={$$typeof:v,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:h,_context:j},j.Consumer=j},de.createElement=ue,de.createFactory=function(j){var R=ue.bind(null,j);return R.type=j,R},de.createRef=function(){return{current:null}},de.forwardRef=function(j){return{$$typeof:S,render:j}},de.isValidElement=He,de.lazy=function(j){return{$$typeof:P,_payload:{_status:-1,_result:j},_init:Ce}},de.memo=function(j,R){return{$$typeof:k,type:j,compare:R===void 0?null:R}},de.startTransition=function(j){var R=M.transition;M.transition={};try{j()}finally{M.transition=R}},de.unstable_act=$,de.useCallback=function(j,R){return ye.current.useCallback(j,R)},de.useContext=function(j){return ye.current.useContext(j)},de.useDebugValue=function(){},de.useDeferredValue=function(j){return ye.current.useDeferredValue(j)},de.useEffect=function(j,R){return ye.current.useEffect(j,R)},de.useId=function(){return ye.current.useId()},de.useImperativeHandle=function(j,R,le){return ye.current.useImperativeHandle(j,R,le)},de.useInsertionEffect=function(j,R){return ye.current.useInsertionEffect(j,R)},de.useLayoutEffect=function(j,R){return ye.current.useLayoutEffect(j,R)},de.useMemo=function(j,R){return ye.current.useMemo(j,R)},de.useReducer=function(j,R,le){return ye.current.useReducer(j,R,le)},de.useRef=function(j){return ye.current.useRef(j)},de.useState=function(j){return ye.current.useState(j)},de.useSyncExternalStore=function(j,R,le){return ye.current.useSyncExternalStore(j,R,le)},de.useTransition=function(){return ye.current.useTransition()},de.version="18.3.1",de}var Fc;function Bl(){return Fc||(Fc=1,_l.exports=kp()),_l.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc;function jp(){if(Mc)return mo;Mc=1;var a=Bl(),s=Symbol.for("react.element"),u=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,f=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function v(S,w,k){var P,b={},_=null,B=null;k!==void 0&&(_=""+k),w.key!==void 0&&(_=""+w.key),w.ref!==void 0&&(B=w.ref);for(P in w)d.call(w,P)&&!h.hasOwnProperty(P)&&(b[P]=w[P]);if(S&&S.defaultProps)for(P in w=S.defaultProps,w)b[P]===void 0&&(b[P]=w[P]);return{$$typeof:s,type:S,key:_,ref:B,props:b,_owner:f.current}}return mo.Fragment=u,mo.jsx=v,mo.jsxs=v,mo}var Ac;function Sp(){return Ac||(Ac=1,Pl.exports=jp()),Pl.exports}var o=Sp(),x=Bl(),Ti={},Rl={exports:{}},lt={},Tl={exports:{}},Ll={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c;function Ep(){return $c||($c=1,(function(a){function s(M,J){var $=M.length;M.push(J);e:for(;0<$;){var j=$-1>>>1,R=M[j];if(0<f(R,J))M[j]=J,M[$]=R,$=j;else break e}}function u(M){return M.length===0?null:M[0]}function d(M){if(M.length===0)return null;var J=M[0],$=M.pop();if($!==J){M[0]=$;e:for(var j=0,R=M.length,le=R>>>1;j<le;){var H=2*(j+1)-1,re=M[H],G=H+1,ce=M[G];if(0>f(re,$))G<R&&0>f(ce,re)?(M[j]=ce,M[G]=$,j=G):(M[j]=re,M[H]=$,j=H);else if(G<R&&0>f(ce,$))M[j]=ce,M[G]=$,j=G;else break e}}return J}function f(M,J){var $=M.sortIndex-J.sortIndex;return $!==0?$:M.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var v=Date,S=v.now();a.unstable_now=function(){return v.now()-S}}var w=[],k=[],P=1,b=null,_=3,B=!1,F=!1,O=!1,I=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(M){for(var J=u(k);J!==null;){if(J.callback===null)d(k);else if(J.startTime<=M)d(k),J.sortIndex=J.expirationTime,s(w,J);else break;J=u(k)}}function V(M){if(O=!1,te(M),!F)if(u(w)!==null)F=!0,Ce(ie);else{var J=u(k);J!==null&&ye(V,J.startTime-M)}}function ie(M,J){F=!1,O&&(O=!1,A(ue),ue=-1),B=!0;var $=_;try{for(te(J),b=u(w);b!==null&&(!(b.expirationTime>J)||M&&!st());){var j=b.callback;if(typeof j=="function"){b.callback=null,_=b.priorityLevel;var R=j(b.expirationTime<=J);J=a.unstable_now(),typeof R=="function"?b.callback=R:b===u(w)&&d(w),te(J)}else d(w);b=u(w)}if(b!==null)var le=!0;else{var H=u(k);H!==null&&ye(V,H.startTime-J),le=!1}return le}finally{b=null,_=$,B=!1}}var fe=!1,ve=null,ue=-1,Fe=5,He=-1;function st(){return!(a.unstable_now()-He<Fe)}function Le(){if(ve!==null){var M=a.unstable_now();He=M;var J=!0;try{J=ve(!0,M)}finally{J?Re():(fe=!1,ve=null)}}else fe=!1}var Re;if(typeof X=="function")Re=function(){X(Le)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,we=Qe.port2;Qe.port1.onmessage=Le,Re=function(){we.postMessage(null)}}else Re=function(){I(Le,0)};function Ce(M){ve=M,fe||(fe=!0,Re())}function ye(M,J){ue=I(function(){M(a.unstable_now())},J)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(M){M.callback=null},a.unstable_continueExecution=function(){F||B||(F=!0,Ce(ie))},a.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fe=0<M?Math.floor(1e3/M):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_getFirstCallbackNode=function(){return u(w)},a.unstable_next=function(M){switch(_){case 1:case 2:case 3:var J=3;break;default:J=_}var $=_;_=J;try{return M()}finally{_=$}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(M,J){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=_;_=M;try{return J()}finally{_=$}},a.unstable_scheduleCallback=function(M,J,$){var j=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?j+$:j):$=j,M){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=$+R,M={id:P++,callback:J,priorityLevel:M,startTime:$,expirationTime:R,sortIndex:-1},$>j?(M.sortIndex=$,s(k,M),u(w)===null&&M===u(k)&&(O?(A(ue),ue=-1):O=!0,ye(V,$-j))):(M.sortIndex=R,s(w,M),F||B||(F=!0,Ce(ie))),M},a.unstable_shouldYield=st,a.unstable_wrapCallback=function(M){var J=_;return function(){var $=_;_=J;try{return M.apply(this,arguments)}finally{_=$}}}})(Ll)),Ll}var Uc;function Cp(){return Uc||(Uc=1,Tl.exports=Ep()),Tl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc;function bp(){if(Bc)return lt;Bc=1;var a=Bl(),s=Cp();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,f={};function h(e,t){v(e,t),v(e+"Capture",t)}function v(e,t){for(f[e]=t,e=0;e<t.length;e++)d.add(t[e])}var S=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),w=Object.prototype.hasOwnProperty,k=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},b={};function _(e){return w.call(b,e)?!0:w.call(P,e)?!1:k.test(e)?b[e]=!0:(P[e]=!0,!1)}function B(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F(e,t,r,n){if(t===null||typeof t>"u"||B(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,r,n,i,l,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=c}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new O(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var A=/[\-:]([a-z])/g;function X(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(A,X);I[t]=new O(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(A,X);I[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(A,X);I[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function te(e,t,r,n){var i=I.hasOwnProperty(t)?I[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(F(t,r,i,n)&&(r=null),n||i===null?_(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var V=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ie=Symbol.for("react.element"),fe=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),ue=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),He=Symbol.for("react.provider"),st=Symbol.for("react.context"),Le=Symbol.for("react.forward_ref"),Re=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),M=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,j;function R(e){if(j===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);j=t&&t[1]||""}return`
`+j+e}var le=!1;function H(e,t){if(!e||le)return"";le=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(N){var n=N}Reflect.construct(e,[],t)}else{try{t.call()}catch(N){n=N}e.call(t.prototype)}else{try{throw Error()}catch(N){n=N}e()}}catch(N){if(N&&n&&typeof N.stack=="string"){for(var i=N.stack.split(`
`),l=n.stack.split(`
`),c=i.length-1,m=l.length-1;1<=c&&0<=m&&i[c]!==l[m];)m--;for(;1<=c&&0<=m;c--,m--)if(i[c]!==l[m]){if(c!==1||m!==1)do if(c--,m--,0>m||i[c]!==l[m]){var g=`
`+i[c].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=c&&0<=m);break}}}finally{le=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?R(e):""}function re(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=H(e.type,!1),e;case 11:return e=H(e.type.render,!1),e;case 1:return e=H(e.type,!0),e;default:return""}}function G(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ve:return"Fragment";case fe:return"Portal";case Fe:return"Profiler";case ue:return"StrictMode";case Re:return"Suspense";case Qe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case st:return(e.displayName||"Context")+".Consumer";case He:return(e._context.displayName||"Context")+".Provider";case Le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case we:return t=e.displayName||null,t!==null?t:G(e.type)||"Memo";case Ce:t=e._payload,e=e._init;try{return G(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return G(t);case 8:return t===ue?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ne(e){var t=me(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){n=""+c,l.call(this,c)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ke(e){e._valueTracker||(e._valueTracker=ne(e))}function Ze(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=me(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kn(e,t){var r=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function We(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=ae(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zt(e,t){t=t.checked,t!=null&&te(e,"checked",t,!1)}function jn(e,t){zt(e,t);var r=ae(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sn(e,t.type,r):t.hasOwnProperty("defaultValue")&&Sn(e,t.type,ae(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function So(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Sn(e,t,r){(t!=="number"||wr(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var kr=Array.isArray;function Zt(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ae(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function En(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Br(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(u(92));if(kr(r)){if(1<r.length)throw Error(u(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ae(r)}}function Cn(e,t){var r=ae(t.value),n=ae(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function bn(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wr,St=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wr=Wr||document.createElement("div"),Wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sr=["Webkit","ms","Moz","O"];Object.keys(Ut).forEach(function(e){Sr.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ut[t]=Ut[e]})});function Pn(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ut.hasOwnProperty(e)&&Ut[e]?(""+t).trim():t+"px"}function _n(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Pn(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Wi=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function p(e,t){if(t){if(Wi[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function Y(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var De=null;function ut(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rn=null,Vr=null,qr=null;function Zl(e){if(e=Xn(e)){if(typeof Rn!="function")throw Error(u(280));var t=e.stateNode;t&&(t=qo(t),Rn(e.stateNode,e.type,t))}}function es(e){Vr?qr?qr.push(e):qr=[e]:Vr=e}function ts(){if(Vr){var e=Vr,t=qr;if(qr=Vr=null,Zl(e),t)for(e=0;e<t.length;e++)Zl(t[e])}}function rs(e,t){return e(t)}function ns(){}var Vi=!1;function os(e,t,r){if(Vi)return e(t,r);Vi=!0;try{return rs(e,t,r)}finally{Vi=!1,(Vr!==null||qr!==null)&&(ns(),ts())}}function Tn(e,t){var r=e.stateNode;if(r===null)return null;var n=qo(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(u(231,t,typeof r));return r}var qi=!1;if(S)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){qi=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{qi=!1}function Ed(e,t,r,n,i,l,c,m,g){var N=Array.prototype.slice.call(arguments,3);try{t.apply(r,N)}catch(L){this.onError(L)}}var zn=!1,Eo=null,Co=!1,Qi=null,Cd={onError:function(e){zn=!0,Eo=e}};function bd(e,t,r,n,i,l,c,m,g){zn=!1,Eo=null,Ed.apply(Cd,arguments)}function Nd(e,t,r,n,i,l,c,m,g){if(bd.apply(this,arguments),zn){if(zn){var N=Eo;zn=!1,Eo=null}else throw Error(u(198));Co||(Co=!0,Qi=N)}}function Er(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function is(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function as(e){if(Er(e)!==e)throw Error(u(188))}function Pd(e){var t=e.alternate;if(!t){if(t=Er(e),t===null)throw Error(u(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===r)return as(i),e;if(l===n)return as(i),t;l=l.sibling}throw Error(u(188))}if(r.return!==n.return)r=i,n=l;else{for(var c=!1,m=i.child;m;){if(m===r){c=!0,r=i,n=l;break}if(m===n){c=!0,n=i,r=l;break}m=m.sibling}if(!c){for(m=l.child;m;){if(m===r){c=!0,r=l,n=i;break}if(m===n){c=!0,n=l,r=i;break}m=m.sibling}if(!c)throw Error(u(189))}}if(r.alternate!==n)throw Error(u(190))}if(r.tag!==3)throw Error(u(188));return r.stateNode.current===r?e:t}function ls(e){return e=Pd(e),e!==null?ss(e):null}function ss(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ss(e);if(t!==null)return t;e=e.sibling}return null}var us=s.unstable_scheduleCallback,cs=s.unstable_cancelCallback,_d=s.unstable_shouldYield,Rd=s.unstable_requestPaint,ze=s.unstable_now,Td=s.unstable_getCurrentPriorityLevel,Ki=s.unstable_ImmediatePriority,ds=s.unstable_UserBlockingPriority,bo=s.unstable_NormalPriority,Ld=s.unstable_LowPriority,fs=s.unstable_IdlePriority,No=null,It=null;function zd(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(No,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Od,Id=Math.log,Dd=Math.LN2;function Od(e){return e>>>=0,e===0?32:31-(Id(e)/Dd|0)|0}var Po=64,_o=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ro(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,l=e.pingedLanes,c=r&268435455;if(c!==0){var m=c&~i;m!==0?n=In(m):(l&=c,l!==0&&(n=In(l)))}else c=r&~i,c!==0?n=In(c):l!==0&&(n=In(l));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Et(t),i=1<<r,n|=e[r],t&=~i;return n}function Fd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Md(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var c=31-Et(l),m=1<<c,g=i[c];g===-1?((m&r)===0||(m&n)!==0)&&(i[c]=Fd(m,t)):g<=t&&(e.expiredLanes|=m),l&=~m}}function Gi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ps(){var e=Po;return Po<<=1,(Po&4194240)===0&&(Po=64),e}function Yi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Dn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=r}function Ad(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Et(r),l=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~l}}function Ji(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Et(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var ge=0;function ms(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var hs,Xi,gs,vs,ys,Zi=!1,To=[],er=null,tr=null,rr=null,On=new Map,Fn=new Map,nr=[],$d="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xs(e,t){switch(e){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function Mn(e,t,r,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Xn(t),t!==null&&Xi(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ud(e,t,r,n,i){switch(t){case"focusin":return er=Mn(er,e,t,r,n,i),!0;case"dragenter":return tr=Mn(tr,e,t,r,n,i),!0;case"mouseover":return rr=Mn(rr,e,t,r,n,i),!0;case"pointerover":var l=i.pointerId;return On.set(l,Mn(On.get(l)||null,e,t,r,n,i)),!0;case"gotpointercapture":return l=i.pointerId,Fn.set(l,Mn(Fn.get(l)||null,e,t,r,n,i)),!0}return!1}function ws(e){var t=Cr(e.target);if(t!==null){var r=Er(t);if(r!==null){if(t=r.tag,t===13){if(t=is(r),t!==null){e.blockedOn=t,ys(e.priority,function(){gs(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ta(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);De=n,r.target.dispatchEvent(n),De=null}else return t=Xn(r),t!==null&&Xi(t),e.blockedOn=r,!1;t.shift()}return!0}function ks(e,t,r){Lo(e)&&r.delete(t)}function Bd(){Zi=!1,er!==null&&Lo(er)&&(er=null),tr!==null&&Lo(tr)&&(tr=null),rr!==null&&Lo(rr)&&(rr=null),On.forEach(ks),Fn.forEach(ks)}function An(e,t){e.blockedOn===t&&(e.blockedOn=null,Zi||(Zi=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Bd)))}function $n(e){function t(i){return An(i,e)}if(0<To.length){An(To[0],e);for(var r=1;r<To.length;r++){var n=To[r];n.blockedOn===e&&(n.blockedOn=null)}}for(er!==null&&An(er,e),tr!==null&&An(tr,e),rr!==null&&An(rr,e),On.forEach(t),Fn.forEach(t),r=0;r<nr.length;r++)n=nr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<nr.length&&(r=nr[0],r.blockedOn===null);)ws(r),r.blockedOn===null&&nr.shift()}var Qr=V.ReactCurrentBatchConfig,zo=!0;function Hd(e,t,r,n){var i=ge,l=Qr.transition;Qr.transition=null;try{ge=1,ea(e,t,r,n)}finally{ge=i,Qr.transition=l}}function Wd(e,t,r,n){var i=ge,l=Qr.transition;Qr.transition=null;try{ge=4,ea(e,t,r,n)}finally{ge=i,Qr.transition=l}}function ea(e,t,r,n){if(zo){var i=ta(e,t,r,n);if(i===null)ya(e,t,n,Io,r),xs(e,n);else if(Ud(i,e,t,r,n))n.stopPropagation();else if(xs(e,n),t&4&&-1<$d.indexOf(e)){for(;i!==null;){var l=Xn(i);if(l!==null&&hs(l),l=ta(e,t,r,n),l===null&&ya(e,t,n,Io,r),l===i)break;i=l}i!==null&&n.stopPropagation()}else ya(e,t,n,null,r)}}var Io=null;function ta(e,t,r,n){if(Io=null,e=ut(n),e=Cr(e),e!==null)if(t=Er(e),t===null)e=null;else if(r=t.tag,r===13){if(e=is(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Io=e,null}function js(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Td()){case Ki:return 1;case ds:return 4;case bo:case Ld:return 16;case fs:return 536870912;default:return 16}default:return 16}}var or=null,ra=null,Do=null;function Ss(){if(Do)return Do;var e,t=ra,r=t.length,n,i="value"in or?or.value:or.textContent,l=i.length;for(e=0;e<r&&t[e]===i[e];e++);var c=r-e;for(n=1;n<=c&&t[r-n]===i[l-n];n++);return Do=i.slice(e,1<n?1-n:void 0)}function Oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fo(){return!0}function Es(){return!1}function ct(e){function t(r,n,i,l,c){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(r=e[m],this[m]=r?r(l):l[m]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Fo:Es,this.isPropagationStopped=Es,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),t}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=ct(Kr),Un=$({},Kr,{view:0,detail:0}),Vd=ct(Un),oa,ia,Bn,Mo=$({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:la,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(oa=e.screenX-Bn.screenX,ia=e.screenY-Bn.screenY):ia=oa=0,Bn=e),oa)},movementY:function(e){return"movementY"in e?e.movementY:ia}}),Cs=ct(Mo),qd=$({},Mo,{dataTransfer:0}),Qd=ct(qd),Kd=$({},Un,{relatedTarget:0}),aa=ct(Kd),Gd=$({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yd=ct(Gd),Jd=$({},Kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xd=ct(Jd),Zd=$({},Kr,{data:0}),bs=ct(Zd),ef={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rf[e])?!!t[e]:!1}function la(){return nf}var of=$({},Un,{key:function(e){if(e.key){var t=ef[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:la,charCode:function(e){return e.type==="keypress"?Oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),af=ct(of),lf=$({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ns=ct(lf),sf=$({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:la}),uf=ct(sf),cf=$({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),df=ct(cf),ff=$({},Mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pf=ct(ff),mf=[9,13,27,32],sa=S&&"CompositionEvent"in window,Hn=null;S&&"documentMode"in document&&(Hn=document.documentMode);var hf=S&&"TextEvent"in window&&!Hn,Ps=S&&(!sa||Hn&&8<Hn&&11>=Hn),_s=" ",Rs=!1;function Ts(e,t){switch(e){case"keyup":return mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ls(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gr=!1;function gf(e,t){switch(e){case"compositionend":return Ls(t);case"keypress":return t.which!==32?null:(Rs=!0,_s);case"textInput":return e=t.data,e===_s&&Rs?null:e;default:return null}}function vf(e,t){if(Gr)return e==="compositionend"||!sa&&Ts(e,t)?(e=Ss(),Do=ra=or=null,Gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ps&&t.locale!=="ko"?null:t.data;default:return null}}var yf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yf[e.type]:t==="textarea"}function Is(e,t,r,n){es(n),t=Ho(t,"onChange"),0<t.length&&(r=new na("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Wn=null,Vn=null;function xf(e){Xs(e,0)}function Ao(e){var t=en(e);if(Ze(t))return e}function wf(e,t){if(e==="change")return t}var Ds=!1;if(S){var ua;if(S){var ca="oninput"in document;if(!ca){var Os=document.createElement("div");Os.setAttribute("oninput","return;"),ca=typeof Os.oninput=="function"}ua=ca}else ua=!1;Ds=ua&&(!document.documentMode||9<document.documentMode)}function Fs(){Wn&&(Wn.detachEvent("onpropertychange",Ms),Vn=Wn=null)}function Ms(e){if(e.propertyName==="value"&&Ao(Vn)){var t=[];Is(t,Vn,e,ut(e)),os(xf,t)}}function kf(e,t,r){e==="focusin"?(Fs(),Wn=t,Vn=r,Wn.attachEvent("onpropertychange",Ms)):e==="focusout"&&Fs()}function jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ao(Vn)}function Sf(e,t){if(e==="click")return Ao(t)}function Ef(e,t){if(e==="input"||e==="change")return Ao(t)}function Cf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Cf;function qn(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!w.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function As(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $s(e,t){var r=As(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=As(r)}}function Us(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Us(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bs(){for(var e=window,t=wr();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=wr(e.document)}return t}function da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bf(e){var t=Bs(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Us(r.ownerDocument.documentElement,r)){if(n!==null&&da(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,l=Math.min(n.start,i);n=n.end===void 0?l:Math.min(n.end,i),!e.extend&&l>n&&(i=n,n=l,l=i),i=$s(r,l);var c=$s(r,n);i&&c&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>n?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nf=S&&"documentMode"in document&&11>=document.documentMode,Yr=null,fa=null,Qn=null,pa=!1;function Hs(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;pa||Yr==null||Yr!==wr(n)||(n=Yr,"selectionStart"in n&&da(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Qn&&qn(Qn,n)||(Qn=n,n=Ho(fa,"onSelect"),0<n.length&&(t=new na("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Yr)))}function $o(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Jr={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},ma={},Ws={};S&&(Ws=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function Uo(e){if(ma[e])return ma[e];if(!Jr[e])return e;var t=Jr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Ws)return ma[e]=t[r];return e}var Vs=Uo("animationend"),qs=Uo("animationiteration"),Qs=Uo("animationstart"),Ks=Uo("transitionend"),Gs=new Map,Ys="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(e,t){Gs.set(e,t),h(t,[e])}for(var ha=0;ha<Ys.length;ha++){var ga=Ys[ha],Pf=ga.toLowerCase(),_f=ga[0].toUpperCase()+ga.slice(1);ir(Pf,"on"+_f)}ir(Vs,"onAnimationEnd"),ir(qs,"onAnimationIteration"),ir(Qs,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(Ks,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));function Js(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Nd(n,t,void 0,e),e.currentTarget=null}function Xs(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var c=n.length-1;0<=c;c--){var m=n[c],g=m.instance,N=m.currentTarget;if(m=m.listener,g!==l&&i.isPropagationStopped())break e;Js(i,m,N),l=g}else for(c=0;c<n.length;c++){if(m=n[c],g=m.instance,N=m.currentTarget,m=m.listener,g!==l&&i.isPropagationStopped())break e;Js(i,m,N),l=g}}}if(Co)throw e=Qi,Co=!1,Qi=null,e}function ke(e,t){var r=t[Ea];r===void 0&&(r=t[Ea]=new Set);var n=e+"__bubble";r.has(n)||(Zs(t,e,2,!1),r.add(n))}function va(e,t,r){var n=0;t&&(n|=4),Zs(r,e,n,t)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function Gn(e){if(!e[Bo]){e[Bo]=!0,d.forEach(function(r){r!=="selectionchange"&&(Rf.has(r)||va(r,!1,e),va(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bo]||(t[Bo]=!0,va("selectionchange",!1,t))}}function Zs(e,t,r,n){switch(js(t)){case 1:var i=Hd;break;case 4:i=Wd;break;default:i=ea}r=i.bind(null,t,r,e),i=void 0,!qi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function ya(e,t,r,n,i){var l=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var m=n.stateNode.containerInfo;if(m===i||m.nodeType===8&&m.parentNode===i)break;if(c===4)for(c=n.return;c!==null;){var g=c.tag;if((g===3||g===4)&&(g=c.stateNode.containerInfo,g===i||g.nodeType===8&&g.parentNode===i))return;c=c.return}for(;m!==null;){if(c=Cr(m),c===null)return;if(g=c.tag,g===5||g===6){n=l=c;continue e}m=m.parentNode}}n=n.return}os(function(){var N=l,L=ut(r),z=[];e:{var T=Gs.get(e);if(T!==void 0){var U=na,q=e;switch(e){case"keypress":if(Oo(r)===0)break e;case"keydown":case"keyup":U=af;break;case"focusin":q="focus",U=aa;break;case"focusout":q="blur",U=aa;break;case"beforeblur":case"afterblur":U=aa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Cs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=uf;break;case Vs:case qs:case Qs:U=Yd;break;case Ks:U=df;break;case"scroll":U=Vd;break;case"wheel":U=pf;break;case"copy":case"cut":case"paste":U=Xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Ns}var Q=(t&4)!==0,Ie=!Q&&e==="scroll",E=Q?T!==null?T+"Capture":null:T;Q=[];for(var y=N,C;y!==null;){C=y;var D=C.stateNode;if(C.tag===5&&D!==null&&(C=D,E!==null&&(D=Tn(y,E),D!=null&&Q.push(Yn(y,D,C)))),Ie)break;y=y.return}0<Q.length&&(T=new U(T,q,null,r,L),z.push({event:T,listeners:Q}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",T&&r!==De&&(q=r.relatedTarget||r.fromElement)&&(Cr(q)||q[Bt]))break e;if((U||T)&&(T=L.window===L?L:(T=L.ownerDocument)?T.defaultView||T.parentWindow:window,U?(q=r.relatedTarget||r.toElement,U=N,q=q?Cr(q):null,q!==null&&(Ie=Er(q),q!==Ie||q.tag!==5&&q.tag!==6)&&(q=null)):(U=null,q=N),U!==q)){if(Q=Cs,D="onMouseLeave",E="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(Q=Ns,D="onPointerLeave",E="onPointerEnter",y="pointer"),Ie=U==null?T:en(U),C=q==null?T:en(q),T=new Q(D,y+"leave",U,r,L),T.target=Ie,T.relatedTarget=C,D=null,Cr(L)===N&&(Q=new Q(E,y+"enter",q,r,L),Q.target=C,Q.relatedTarget=Ie,D=Q),Ie=D,U&&q)t:{for(Q=U,E=q,y=0,C=Q;C;C=Xr(C))y++;for(C=0,D=E;D;D=Xr(D))C++;for(;0<y-C;)Q=Xr(Q),y--;for(;0<C-y;)E=Xr(E),C--;for(;y--;){if(Q===E||E!==null&&Q===E.alternate)break t;Q=Xr(Q),E=Xr(E)}Q=null}else Q=null;U!==null&&eu(z,T,U,Q,!1),q!==null&&Ie!==null&&eu(z,Ie,q,Q,!0)}}e:{if(T=N?en(N):window,U=T.nodeName&&T.nodeName.toLowerCase(),U==="select"||U==="input"&&T.type==="file")var K=wf;else if(zs(T))if(Ds)K=Ef;else{K=jf;var Z=kf}else(U=T.nodeName)&&U.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(K=Sf);if(K&&(K=K(e,N))){Is(z,K,r,L);break e}Z&&Z(e,T,N),e==="focusout"&&(Z=T._wrapperState)&&Z.controlled&&T.type==="number"&&Sn(T,"number",T.value)}switch(Z=N?en(N):window,e){case"focusin":(zs(Z)||Z.contentEditable==="true")&&(Yr=Z,fa=N,Qn=null);break;case"focusout":Qn=fa=Yr=null;break;case"mousedown":pa=!0;break;case"contextmenu":case"mouseup":case"dragend":pa=!1,Hs(z,r,L);break;case"selectionchange":if(Nf)break;case"keydown":case"keyup":Hs(z,r,L)}var ee;if(sa)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else Gr?Ts(e,r)&&(oe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(oe="onCompositionStart");oe&&(Ps&&r.locale!=="ko"&&(Gr||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&Gr&&(ee=Ss()):(or=L,ra="value"in or?or.value:or.textContent,Gr=!0)),Z=Ho(N,oe),0<Z.length&&(oe=new bs(oe,e,null,r,L),z.push({event:oe,listeners:Z}),ee?oe.data=ee:(ee=Ls(r),ee!==null&&(oe.data=ee)))),(ee=hf?gf(e,r):vf(e,r))&&(N=Ho(N,"onBeforeInput"),0<N.length&&(L=new bs("onBeforeInput","beforeinput",null,r,L),z.push({event:L,listeners:N}),L.data=ee))}Xs(z,t)})}function Yn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ho(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Tn(e,r),l!=null&&n.unshift(Yn(e,l,i)),l=Tn(e,t),l!=null&&n.push(Yn(e,l,i))),e=e.return}return n}function Xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eu(e,t,r,n,i){for(var l=t._reactName,c=[];r!==null&&r!==n;){var m=r,g=m.alternate,N=m.stateNode;if(g!==null&&g===n)break;m.tag===5&&N!==null&&(m=N,i?(g=Tn(r,l),g!=null&&c.unshift(Yn(r,g,m))):i||(g=Tn(r,l),g!=null&&c.push(Yn(r,g,m)))),r=r.return}c.length!==0&&e.push({event:t,listeners:c})}var Tf=/\r\n?/g,Lf=/\u0000|\uFFFD/g;function tu(e){return(typeof e=="string"?e:""+e).replace(Tf,`
`).replace(Lf,"")}function Wo(e,t,r){if(t=tu(t),tu(e)!==t&&r)throw Error(u(425))}function Vo(){}var xa=null,wa=null;function ka(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ja=typeof setTimeout=="function"?setTimeout:void 0,zf=typeof clearTimeout=="function"?clearTimeout:void 0,ru=typeof Promise=="function"?Promise:void 0,If=typeof queueMicrotask=="function"?queueMicrotask:typeof ru<"u"?function(e){return ru.resolve(null).then(e).catch(Df)}:ja;function Df(e){setTimeout(function(){throw e})}function Sa(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),$n(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);$n(t)}function ar(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Zr,Jn="__reactProps$"+Zr,Bt="__reactContainer$"+Zr,Ea="__reactEvents$"+Zr,Of="__reactListeners$"+Zr,Ff="__reactHandles$"+Zr;function Cr(e){var t=e[Dt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Bt]||r[Dt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=nu(e);e!==null;){if(r=e[Dt])return r;e=nu(e)}return t}e=r,r=e.parentNode}return null}function Xn(e){return e=e[Dt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function qo(e){return e[Jn]||null}var Ca=[],tn=-1;function lr(e){return{current:e}}function je(e){0>tn||(e.current=Ca[tn],Ca[tn]=null,tn--)}function xe(e,t){tn++,Ca[tn]=e.current,e.current=t}var sr={},Ge=lr(sr),rt=lr(!1),br=sr;function rn(e,t){var r=e.type.contextTypes;if(!r)return sr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in r)i[l]=t[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function nt(e){return e=e.childContextTypes,e!=null}function Qo(){je(rt),je(Ge)}function ou(e,t,r){if(Ge.current!==sr)throw Error(u(168));xe(Ge,t),xe(rt,r)}function iu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(u(108,ce(e)||"Unknown",i));return $({},r,n)}function Ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sr,br=Ge.current,xe(Ge,e),xe(rt,rt.current),!0}function au(e,t,r){var n=e.stateNode;if(!n)throw Error(u(169));r?(e=iu(e,t,br),n.__reactInternalMemoizedMergedChildContext=e,je(rt),je(Ge),xe(Ge,e)):je(rt),xe(rt,r)}var Ht=null,Go=!1,ba=!1;function lu(e){Ht===null?Ht=[e]:Ht.push(e)}function Mf(e){Go=!0,lu(e)}function ur(){if(!ba&&Ht!==null){ba=!0;var e=0,t=ge;try{var r=Ht;for(ge=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ht=null,Go=!1}catch(i){throw Ht!==null&&(Ht=Ht.slice(e+1)),us(Ki,ur),i}finally{ge=t,ba=!1}}return null}var nn=[],on=0,Yo=null,Jo=0,ht=[],gt=0,Nr=null,Wt=1,Vt="";function Pr(e,t){nn[on++]=Jo,nn[on++]=Yo,Yo=e,Jo=t}function su(e,t,r){ht[gt++]=Wt,ht[gt++]=Vt,ht[gt++]=Nr,Nr=e;var n=Wt;e=Vt;var i=32-Et(n)-1;n&=~(1<<i),r+=1;var l=32-Et(t)+i;if(30<l){var c=i-i%5;l=(n&(1<<c)-1).toString(32),n>>=c,i-=c,Wt=1<<32-Et(t)+i|r<<i|n,Vt=l+e}else Wt=1<<l|r<<i|n,Vt=e}function Na(e){e.return!==null&&(Pr(e,1),su(e,1,0))}function Pa(e){for(;e===Yo;)Yo=nn[--on],nn[on]=null,Jo=nn[--on],nn[on]=null;for(;e===Nr;)Nr=ht[--gt],ht[gt]=null,Vt=ht[--gt],ht[gt]=null,Wt=ht[--gt],ht[gt]=null}var dt=null,ft=null,Se=!1,bt=null;function uu(e,t){var r=wt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function cu(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ft=ar(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Nr!==null?{id:Wt,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=wt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,dt=e,ft=null,!0):!1;default:return!1}}function _a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ra(e){if(Se){var t=ft;if(t){var r=t;if(!cu(e,t)){if(_a(e))throw Error(u(418));t=ar(r.nextSibling);var n=dt;t&&cu(e,t)?uu(n,r):(e.flags=e.flags&-4097|2,Se=!1,dt=e)}}else{if(_a(e))throw Error(u(418));e.flags=e.flags&-4097|2,Se=!1,dt=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Xo(e){if(e!==dt)return!1;if(!Se)return du(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ka(e.type,e.memoizedProps)),t&&(t=ft)){if(_a(e))throw fu(),Error(u(418));for(;t;)uu(e,t),t=ar(t.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ft=ar(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=dt?ar(e.stateNode.nextSibling):null;return!0}function fu(){for(var e=ft;e;)e=ar(e.nextSibling)}function an(){ft=dt=null,Se=!1}function Ta(e){bt===null?bt=[e]:bt.push(e)}var Af=V.ReactCurrentBatchConfig;function Zn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(u(309));var n=r.stateNode}if(!n)throw Error(u(147,e));var i=n,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(c){var m=i.refs;c===null?delete m[l]:m[l]=c},t._stringRef=l,t)}if(typeof e!="string")throw Error(u(284));if(!r._owner)throw Error(u(290,e))}return e}function Zo(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pu(e){var t=e._init;return t(e._payload)}function mu(e){function t(E,y){if(e){var C=E.deletions;C===null?(E.deletions=[y],E.flags|=16):C.push(y)}}function r(E,y){if(!e)return null;for(;y!==null;)t(E,y),y=y.sibling;return null}function n(E,y){for(E=new Map;y!==null;)y.key!==null?E.set(y.key,y):E.set(y.index,y),y=y.sibling;return E}function i(E,y){return E=vr(E,y),E.index=0,E.sibling=null,E}function l(E,y,C){return E.index=C,e?(C=E.alternate,C!==null?(C=C.index,C<y?(E.flags|=2,y):C):(E.flags|=2,y)):(E.flags|=1048576,y)}function c(E){return e&&E.alternate===null&&(E.flags|=2),E}function m(E,y,C,D){return y===null||y.tag!==6?(y=jl(C,E.mode,D),y.return=E,y):(y=i(y,C),y.return=E,y)}function g(E,y,C,D){var K=C.type;return K===ve?L(E,y,C.props.children,D,C.key):y!==null&&(y.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ce&&pu(K)===y.type)?(D=i(y,C.props),D.ref=Zn(E,y,C),D.return=E,D):(D=Si(C.type,C.key,C.props,null,E.mode,D),D.ref=Zn(E,y,C),D.return=E,D)}function N(E,y,C,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==C.containerInfo||y.stateNode.implementation!==C.implementation?(y=Sl(C,E.mode,D),y.return=E,y):(y=i(y,C.children||[]),y.return=E,y)}function L(E,y,C,D,K){return y===null||y.tag!==7?(y=Or(C,E.mode,D,K),y.return=E,y):(y=i(y,C),y.return=E,y)}function z(E,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return y=jl(""+y,E.mode,C),y.return=E,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ie:return C=Si(y.type,y.key,y.props,null,E.mode,C),C.ref=Zn(E,null,y),C.return=E,C;case fe:return y=Sl(y,E.mode,C),y.return=E,y;case Ce:var D=y._init;return z(E,D(y._payload),C)}if(kr(y)||J(y))return y=Or(y,E.mode,C,null),y.return=E,y;Zo(E,y)}return null}function T(E,y,C,D){var K=y!==null?y.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return K!==null?null:m(E,y,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ie:return C.key===K?g(E,y,C,D):null;case fe:return C.key===K?N(E,y,C,D):null;case Ce:return K=C._init,T(E,y,K(C._payload),D)}if(kr(C)||J(C))return K!==null?null:L(E,y,C,D,null);Zo(E,C)}return null}function U(E,y,C,D,K){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(C)||null,m(y,E,""+D,K);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ie:return E=E.get(D.key===null?C:D.key)||null,g(y,E,D,K);case fe:return E=E.get(D.key===null?C:D.key)||null,N(y,E,D,K);case Ce:var Z=D._init;return U(E,y,C,Z(D._payload),K)}if(kr(D)||J(D))return E=E.get(C)||null,L(y,E,D,K,null);Zo(y,D)}return null}function q(E,y,C,D){for(var K=null,Z=null,ee=y,oe=y=0,Be=null;ee!==null&&oe<C.length;oe++){ee.index>oe?(Be=ee,ee=null):Be=ee.sibling;var he=T(E,ee,C[oe],D);if(he===null){ee===null&&(ee=Be);break}e&&ee&&he.alternate===null&&t(E,ee),y=l(he,y,oe),Z===null?K=he:Z.sibling=he,Z=he,ee=Be}if(oe===C.length)return r(E,ee),Se&&Pr(E,oe),K;if(ee===null){for(;oe<C.length;oe++)ee=z(E,C[oe],D),ee!==null&&(y=l(ee,y,oe),Z===null?K=ee:Z.sibling=ee,Z=ee);return Se&&Pr(E,oe),K}for(ee=n(E,ee);oe<C.length;oe++)Be=U(ee,E,oe,C[oe],D),Be!==null&&(e&&Be.alternate!==null&&ee.delete(Be.key===null?oe:Be.key),y=l(Be,y,oe),Z===null?K=Be:Z.sibling=Be,Z=Be);return e&&ee.forEach(function(yr){return t(E,yr)}),Se&&Pr(E,oe),K}function Q(E,y,C,D){var K=J(C);if(typeof K!="function")throw Error(u(150));if(C=K.call(C),C==null)throw Error(u(151));for(var Z=K=null,ee=y,oe=y=0,Be=null,he=C.next();ee!==null&&!he.done;oe++,he=C.next()){ee.index>oe?(Be=ee,ee=null):Be=ee.sibling;var yr=T(E,ee,he.value,D);if(yr===null){ee===null&&(ee=Be);break}e&&ee&&yr.alternate===null&&t(E,ee),y=l(yr,y,oe),Z===null?K=yr:Z.sibling=yr,Z=yr,ee=Be}if(he.done)return r(E,ee),Se&&Pr(E,oe),K;if(ee===null){for(;!he.done;oe++,he=C.next())he=z(E,he.value,D),he!==null&&(y=l(he,y,oe),Z===null?K=he:Z.sibling=he,Z=he);return Se&&Pr(E,oe),K}for(ee=n(E,ee);!he.done;oe++,he=C.next())he=U(ee,E,oe,he.value,D),he!==null&&(e&&he.alternate!==null&&ee.delete(he.key===null?oe:he.key),y=l(he,y,oe),Z===null?K=he:Z.sibling=he,Z=he);return e&&ee.forEach(function(yp){return t(E,yp)}),Se&&Pr(E,oe),K}function Ie(E,y,C,D){if(typeof C=="object"&&C!==null&&C.type===ve&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case ie:e:{for(var K=C.key,Z=y;Z!==null;){if(Z.key===K){if(K=C.type,K===ve){if(Z.tag===7){r(E,Z.sibling),y=i(Z,C.props.children),y.return=E,E=y;break e}}else if(Z.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ce&&pu(K)===Z.type){r(E,Z.sibling),y=i(Z,C.props),y.ref=Zn(E,Z,C),y.return=E,E=y;break e}r(E,Z);break}else t(E,Z);Z=Z.sibling}C.type===ve?(y=Or(C.props.children,E.mode,D,C.key),y.return=E,E=y):(D=Si(C.type,C.key,C.props,null,E.mode,D),D.ref=Zn(E,y,C),D.return=E,E=D)}return c(E);case fe:e:{for(Z=C.key;y!==null;){if(y.key===Z)if(y.tag===4&&y.stateNode.containerInfo===C.containerInfo&&y.stateNode.implementation===C.implementation){r(E,y.sibling),y=i(y,C.children||[]),y.return=E,E=y;break e}else{r(E,y);break}else t(E,y);y=y.sibling}y=Sl(C,E.mode,D),y.return=E,E=y}return c(E);case Ce:return Z=C._init,Ie(E,y,Z(C._payload),D)}if(kr(C))return q(E,y,C,D);if(J(C))return Q(E,y,C,D);Zo(E,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,y!==null&&y.tag===6?(r(E,y.sibling),y=i(y,C),y.return=E,E=y):(r(E,y),y=jl(C,E.mode,D),y.return=E,E=y),c(E)):r(E,y)}return Ie}var ln=mu(!0),hu=mu(!1),ei=lr(null),ti=null,sn=null,La=null;function za(){La=sn=ti=null}function Ia(e){var t=ei.current;je(ei),e._currentValue=t}function Da(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function un(e,t){ti=e,La=sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(La!==e)if(e={context:e,memoizedValue:t,next:null},sn===null){if(ti===null)throw Error(u(308));sn=e,ti.dependencies={lanes:0,firstContext:e}}else sn=sn.next=e;return t}var _r=null;function Oa(e){_r===null?_r=[e]:_r.push(e)}function gu(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Oa(t)):(r.next=i.next,i.next=r),t.interleaved=r,qt(e,n)}function qt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var cr=!1;function Fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(pe&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,qt(e,r)}return i=n.interleaved,i===null?(t.next=t,Oa(n)):(t.next=i.next,i.next=t),n.interleaved=t,qt(e,r)}function ri(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ji(e,r)}}function yu(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var c={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?i=l=c:l=l.next=c,r=r.next}while(r!==null);l===null?i=l=t:l=l.next=t}else i=l=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ni(e,t,r,n){var i=e.updateQueue;cr=!1;var l=i.firstBaseUpdate,c=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var g=m,N=g.next;g.next=null,c===null?l=N:c.next=N,c=g;var L=e.alternate;L!==null&&(L=L.updateQueue,m=L.lastBaseUpdate,m!==c&&(m===null?L.firstBaseUpdate=N:m.next=N,L.lastBaseUpdate=g))}if(l!==null){var z=i.baseState;c=0,L=N=g=null,m=l;do{var T=m.lane,U=m.eventTime;if((n&T)===T){L!==null&&(L=L.next={eventTime:U,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var q=e,Q=m;switch(T=t,U=r,Q.tag){case 1:if(q=Q.payload,typeof q=="function"){z=q.call(U,z,T);break e}z=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=Q.payload,T=typeof q=="function"?q.call(U,z,T):q,T==null)break e;z=$({},z,T);break e;case 2:cr=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,T=i.effects,T===null?i.effects=[m]:T.push(m))}else U={eventTime:U,lane:T,tag:m.tag,payload:m.payload,callback:m.callback,next:null},L===null?(N=L=U,g=z):L=L.next=U,c|=T;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;T=m,m=T.next,T.next=null,i.lastBaseUpdate=T,i.shared.pending=null}}while(!0);if(L===null&&(g=z),i.baseState=g,i.firstBaseUpdate=N,i.lastBaseUpdate=L,t=i.shared.interleaved,t!==null){i=t;do c|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Lr|=c,e.lanes=c,e.memoizedState=z}}function xu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(u(191,i));i.call(n)}}}var eo={},Ot=lr(eo),to=lr(eo),ro=lr(eo);function Rr(e){if(e===eo)throw Error(u(174));return e}function Ma(e,t){switch(xe(ro,t),xe(to,e),xe(Ot,eo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nn(t,e)}je(Ot),xe(Ot,t)}function cn(){je(Ot),je(to),je(ro)}function wu(e){Rr(ro.current);var t=Rr(Ot.current),r=Nn(t,e.type);t!==r&&(xe(to,e),xe(Ot,r))}function Aa(e){to.current===e&&(je(Ot),je(to))}var be=lr(0);function oi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $a=[];function Ua(){for(var e=0;e<$a.length;e++)$a[e]._workInProgressVersionPrimary=null;$a.length=0}var ii=V.ReactCurrentDispatcher,Ba=V.ReactCurrentBatchConfig,Tr=0,Ne=null,Me=null,$e=null,ai=!1,no=!1,oo=0,$f=0;function Ye(){throw Error(u(321))}function Ha(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ct(e[r],t[r]))return!1;return!0}function Wa(e,t,r,n,i,l){if(Tr=l,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ii.current=e===null||e.memoizedState===null?Wf:Vf,e=r(n,i),no){l=0;do{if(no=!1,oo=0,25<=l)throw Error(u(301));l+=1,$e=Me=null,t.updateQueue=null,ii.current=qf,e=r(n,i)}while(no)}if(ii.current=ui,t=Me!==null&&Me.next!==null,Tr=0,$e=Me=Ne=null,ai=!1,t)throw Error(u(300));return e}function Va(){var e=oo!==0;return oo=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ne.memoizedState=$e=e:$e=$e.next=e,$e}function yt(){if(Me===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=$e===null?Ne.memoizedState:$e.next;if(t!==null)$e=t,Me=e;else{if(e===null)throw Error(u(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},$e===null?Ne.memoizedState=$e=e:$e=$e.next=e}return $e}function io(e,t){return typeof t=="function"?t(e):t}function qa(e){var t=yt(),r=t.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=e;var n=Me,i=n.baseQueue,l=r.pending;if(l!==null){if(i!==null){var c=i.next;i.next=l.next,l.next=c}n.baseQueue=i=l,r.pending=null}if(i!==null){l=i.next,n=n.baseState;var m=c=null,g=null,N=l;do{var L=N.lane;if((Tr&L)===L)g!==null&&(g=g.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),n=N.hasEagerState?N.eagerState:e(n,N.action);else{var z={lane:L,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};g===null?(m=g=z,c=n):g=g.next=z,Ne.lanes|=L,Lr|=L}N=N.next}while(N!==null&&N!==l);g===null?c=n:g.next=m,Ct(n,t.memoizedState)||(ot=!0),t.memoizedState=n,t.baseState=c,t.baseQueue=g,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do l=i.lane,Ne.lanes|=l,Lr|=l,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Qa(e){var t=yt(),r=t.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,l=t.memoizedState;if(i!==null){r.pending=null;var c=i=i.next;do l=e(l,c.action),c=c.next;while(c!==i);Ct(l,t.memoizedState)||(ot=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,n]}function ku(){}function ju(e,t){var r=Ne,n=yt(),i=t(),l=!Ct(n.memoizedState,i);if(l&&(n.memoizedState=i,ot=!0),n=n.queue,Ka(Cu.bind(null,r,n,e),[e]),n.getSnapshot!==t||l||$e!==null&&$e.memoizedState.tag&1){if(r.flags|=2048,ao(9,Eu.bind(null,r,n,i,t),void 0,null),Ue===null)throw Error(u(349));(Tr&30)!==0||Su(r,t,i)}return i}function Su(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Eu(e,t,r,n){t.value=r,t.getSnapshot=n,bu(t)&&Nu(e)}function Cu(e,t,r){return r(function(){bu(t)&&Nu(e)})}function bu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ct(e,r)}catch{return!0}}function Nu(e){var t=qt(e,1);t!==null&&Rt(t,e,1,-1)}function Pu(e){var t=Ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:e},t.queue=e,e=e.dispatch=Hf.bind(null,Ne,e),[t.memoizedState,e]}function ao(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function _u(){return yt().memoizedState}function li(e,t,r,n){var i=Ft();Ne.flags|=e,i.memoizedState=ao(1|t,r,void 0,n===void 0?null:n)}function si(e,t,r,n){var i=yt();n=n===void 0?null:n;var l=void 0;if(Me!==null){var c=Me.memoizedState;if(l=c.destroy,n!==null&&Ha(n,c.deps)){i.memoizedState=ao(t,r,l,n);return}}Ne.flags|=e,i.memoizedState=ao(1|t,r,l,n)}function Ru(e,t){return li(8390656,8,e,t)}function Ka(e,t){return si(2048,8,e,t)}function Tu(e,t){return si(4,2,e,t)}function Lu(e,t){return si(4,4,e,t)}function zu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Iu(e,t,r){return r=r!=null?r.concat([e]):null,si(4,4,zu.bind(null,t,e),r)}function Ga(){}function Du(e,t){var r=yt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ha(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Ou(e,t){var r=yt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ha(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Fu(e,t,r){return(Tr&21)===0?(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=r):(Ct(r,t)||(r=ps(),Ne.lanes|=r,Lr|=r,e.baseState=!0),t)}function Uf(e,t){var r=ge;ge=r!==0&&4>r?r:4,e(!0);var n=Ba.transition;Ba.transition={};try{e(!1),t()}finally{ge=r,Ba.transition=n}}function Mu(){return yt().memoizedState}function Bf(e,t,r){var n=hr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Au(e))$u(t,r);else if(r=gu(e,t,r,n),r!==null){var i=tt();Rt(r,e,n,i),Uu(r,t,n)}}function Hf(e,t,r){var n=hr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Au(e))$u(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var c=t.lastRenderedState,m=l(c,r);if(i.hasEagerState=!0,i.eagerState=m,Ct(m,c)){var g=t.interleaved;g===null?(i.next=i,Oa(t)):(i.next=g.next,g.next=i),t.interleaved=i;return}}catch{}finally{}r=gu(e,t,i,n),r!==null&&(i=tt(),Rt(r,e,n,i),Uu(r,t,n))}}function Au(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function $u(e,t){no=ai=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Uu(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ji(e,r)}}var ui={readContext:vt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},Wf={readContext:vt,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:Ru,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,li(4194308,4,zu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return li(4194308,4,e,t)},useInsertionEffect:function(e,t){return li(4,2,e,t)},useMemo:function(e,t){var r=Ft();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ft();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Bf.bind(null,Ne,e),[n.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:Pu,useDebugValue:Ga,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=Pu(!1),t=e[0];return e=Uf.bind(null,e[1]),Ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Ne,i=Ft();if(Se){if(r===void 0)throw Error(u(407));r=r()}else{if(r=t(),Ue===null)throw Error(u(349));(Tr&30)!==0||Su(n,t,r)}i.memoizedState=r;var l={value:r,getSnapshot:t};return i.queue=l,Ru(Cu.bind(null,n,l,e),[e]),n.flags|=2048,ao(9,Eu.bind(null,n,l,r,t),void 0,null),r},useId:function(){var e=Ft(),t=Ue.identifierPrefix;if(Se){var r=Vt,n=Wt;r=(n&~(1<<32-Et(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=oo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=$f++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vf={readContext:vt,useCallback:Du,useContext:vt,useEffect:Ka,useImperativeHandle:Iu,useInsertionEffect:Tu,useLayoutEffect:Lu,useMemo:Ou,useReducer:qa,useRef:_u,useState:function(){return qa(io)},useDebugValue:Ga,useDeferredValue:function(e){var t=yt();return Fu(t,Me.memoizedState,e)},useTransition:function(){var e=qa(io)[0],t=yt().memoizedState;return[e,t]},useMutableSource:ku,useSyncExternalStore:ju,useId:Mu,unstable_isNewReconciler:!1},qf={readContext:vt,useCallback:Du,useContext:vt,useEffect:Ka,useImperativeHandle:Iu,useInsertionEffect:Tu,useLayoutEffect:Lu,useMemo:Ou,useReducer:Qa,useRef:_u,useState:function(){return Qa(io)},useDebugValue:Ga,useDeferredValue:function(e){var t=yt();return Me===null?t.memoizedState=e:Fu(t,Me.memoizedState,e)},useTransition:function(){var e=Qa(io)[0],t=yt().memoizedState;return[e,t]},useMutableSource:ku,useSyncExternalStore:ju,useId:Mu,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ya(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:$({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ci={isMounted:function(e){return(e=e._reactInternals)?Er(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=tt(),i=hr(e),l=Qt(n,i);l.payload=t,r!=null&&(l.callback=r),t=dr(e,l,i),t!==null&&(Rt(t,e,i,n),ri(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=tt(),i=hr(e),l=Qt(n,i);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=dr(e,l,i),t!==null&&(Rt(t,e,i,n),ri(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=tt(),n=hr(e),i=Qt(r,n);i.tag=2,t!=null&&(i.callback=t),t=dr(e,i,n),t!==null&&(Rt(t,e,n,r),ri(t,e,n))}};function Bu(e,t,r,n,i,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,c):t.prototype&&t.prototype.isPureReactComponent?!qn(r,n)||!qn(i,l):!0}function Hu(e,t,r){var n=!1,i=sr,l=t.contextType;return typeof l=="object"&&l!==null?l=vt(l):(i=nt(t)?br:Ge.current,n=t.contextTypes,l=(n=n!=null)?rn(e,i):sr),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Wu(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function Ja(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Fa(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=vt(l):(l=nt(t)?br:Ge.current,i.context=rn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ya(e,t,l,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ci.enqueueReplaceState(i,i.state,null),ni(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var r="",n=t;do r+=re(n),n=n.return;while(n);var i=r}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Xa(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Za(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Qf=typeof WeakMap=="function"?WeakMap:Map;function Vu(e,t,r){r=Qt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){vi||(vi=!0,ml=n),Za(e,t)},r}function qu(e,t,r){r=Qt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Za(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){Za(e,t),typeof n!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),r}function Qu(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Qf;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=lp.bind(null,e,t,r),t.then(e,e))}function Ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gu(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Qt(-1,1),t.tag=2,dr(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Kf=V.ReactCurrentOwner,ot=!1;function et(e,t,r,n){t.child=e===null?hu(t,null,r,n):ln(t,e.child,r,n)}function Yu(e,t,r,n,i){r=r.render;var l=t.ref;return un(t,i),n=Wa(e,t,r,n,l,i),r=Va(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(Se&&r&&Na(t),t.flags|=1,et(e,t,n,i),t.child)}function Ju(e,t,r,n,i){if(e===null){var l=r.type;return typeof l=="function"&&!kl(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,Xu(e,t,l,n,i)):(e=Si(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var c=l.memoizedProps;if(r=r.compare,r=r!==null?r:qn,r(c,n)&&e.ref===t.ref)return Kt(e,t,i)}return t.flags|=1,e=vr(l,n),e.ref=t.ref,e.return=t,t.child=e}function Xu(e,t,r,n,i){if(e!==null){var l=e.memoizedProps;if(qn(l,n)&&e.ref===t.ref)if(ot=!1,t.pendingProps=n=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,Kt(e,t,i)}return el(e,t,r,n,i)}function Zu(e,t,r){var n=t.pendingProps,i=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(pn,pt),pt|=r;else{if((r&1073741824)===0)return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(pn,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:r,xe(pn,pt),pt|=n}else l!==null?(n=l.baseLanes|r,t.memoizedState=null):n=r,xe(pn,pt),pt|=n;return et(e,t,i,r),t.child}function ec(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function el(e,t,r,n,i){var l=nt(r)?br:Ge.current;return l=rn(t,l),un(t,i),r=Wa(e,t,r,n,l,i),n=Va(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(Se&&n&&Na(t),t.flags|=1,et(e,t,r,i),t.child)}function tc(e,t,r,n,i){if(nt(r)){var l=!0;Ko(t)}else l=!1;if(un(t,i),t.stateNode===null)fi(e,t),Hu(t,r,n),Ja(t,r,n,i),n=!0;else if(e===null){var c=t.stateNode,m=t.memoizedProps;c.props=m;var g=c.context,N=r.contextType;typeof N=="object"&&N!==null?N=vt(N):(N=nt(r)?br:Ge.current,N=rn(t,N));var L=r.getDerivedStateFromProps,z=typeof L=="function"||typeof c.getSnapshotBeforeUpdate=="function";z||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==n||g!==N)&&Wu(t,c,n,N),cr=!1;var T=t.memoizedState;c.state=T,ni(t,n,c,i),g=t.memoizedState,m!==n||T!==g||rt.current||cr?(typeof L=="function"&&(Ya(t,r,L,n),g=t.memoizedState),(m=cr||Bu(t,r,m,n,T,g,N))?(z||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=g),c.props=n,c.state=g,c.context=N,n=m):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{c=t.stateNode,vu(e,t),m=t.memoizedProps,N=t.type===t.elementType?m:Nt(t.type,m),c.props=N,z=t.pendingProps,T=c.context,g=r.contextType,typeof g=="object"&&g!==null?g=vt(g):(g=nt(r)?br:Ge.current,g=rn(t,g));var U=r.getDerivedStateFromProps;(L=typeof U=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==z||T!==g)&&Wu(t,c,n,g),cr=!1,T=t.memoizedState,c.state=T,ni(t,n,c,i);var q=t.memoizedState;m!==z||T!==q||rt.current||cr?(typeof U=="function"&&(Ya(t,r,U,n),q=t.memoizedState),(N=cr||Bu(t,r,N,n,T,q,g)||!1)?(L||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(n,q,g),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(n,q,g)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=q),c.props=n,c.state=q,c.context=g,n=N):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),n=!1)}return tl(e,t,r,n,l,i)}function tl(e,t,r,n,i,l){ec(e,t);var c=(t.flags&128)!==0;if(!n&&!c)return i&&au(t,r,!1),Kt(e,t,l);n=t.stateNode,Kf.current=t;var m=c&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&c?(t.child=ln(t,e.child,null,l),t.child=ln(t,null,m,l)):et(e,t,m,l),t.memoizedState=n.state,i&&au(t,r,!0),t.child}function rc(e){var t=e.stateNode;t.pendingContext?ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ou(e,t.context,!1),Ma(e,t.containerInfo)}function nc(e,t,r,n,i){return an(),Ta(i),t.flags|=256,et(e,t,r,n),t.child}var rl={dehydrated:null,treeContext:null,retryLane:0};function nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function oc(e,t,r){var n=t.pendingProps,i=be.current,l=!1,c=(t.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(i&2)!==0),m?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),xe(be,i&1),e===null)return Ra(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=n.children,e=n.fallback,l?(n=t.mode,l=t.child,c={mode:"hidden",children:c},(n&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=c):l=Ei(c,n,0,null),e=Or(e,n,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=nl(r),t.memoizedState=rl,e):ol(t,c));if(i=e.memoizedState,i!==null&&(m=i.dehydrated,m!==null))return Gf(e,t,c,n,m,i,r);if(l){l=n.fallback,c=t.mode,i=e.child,m=i.sibling;var g={mode:"hidden",children:n.children};return(c&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=g,t.deletions=null):(n=vr(i,g),n.subtreeFlags=i.subtreeFlags&14680064),m!==null?l=vr(m,l):(l=Or(l,c,r,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,c=e.child.memoizedState,c=c===null?nl(r):{baseLanes:c.baseLanes|r,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=e.childLanes&~r,t.memoizedState=rl,n}return l=e.child,e=l.sibling,n=vr(l,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ol(e,t){return t=Ei({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function di(e,t,r,n){return n!==null&&Ta(n),ln(t,e.child,null,r),e=ol(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gf(e,t,r,n,i,l,c){if(r)return t.flags&256?(t.flags&=-257,n=Xa(Error(u(422))),di(e,t,c,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=n.fallback,i=t.mode,n=Ei({mode:"visible",children:n.children},i,0,null),l=Or(l,i,c,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,(t.mode&1)!==0&&ln(t,e.child,null,c),t.child.memoizedState=nl(c),t.memoizedState=rl,l);if((t.mode&1)===0)return di(e,t,c,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var m=n.dgst;return n=m,l=Error(u(419)),n=Xa(l,n,void 0),di(e,t,c,n)}if(m=(c&e.childLanes)!==0,ot||m){if(n=Ue,n!==null){switch(c&-c){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|c))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,qt(e,i),Rt(n,e,i,-1))}return wl(),n=Xa(Error(u(421))),di(e,t,c,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=sp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ft=ar(i.nextSibling),dt=t,Se=!0,bt=null,e!==null&&(ht[gt++]=Wt,ht[gt++]=Vt,ht[gt++]=Nr,Wt=e.id,Vt=e.overflow,Nr=t),t=ol(t,n.children),t.flags|=4096,t)}function ic(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Da(e.return,t,r)}function il(e,t,r,n,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=r,l.tailMode=i)}function ac(e,t,r){var n=t.pendingProps,i=n.revealOrder,l=n.tail;if(et(e,t,n.children,r),n=be.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ic(e,r,t);else if(e.tag===19)ic(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(xe(be,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&oi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),il(t,!1,i,r,l);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}il(t,!0,r,null,l);break;case"together":il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Lr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,r=vr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=vr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Yf(e,t,r){switch(t.tag){case 3:rc(t),an();break;case 5:wu(t);break;case 1:nt(t.type)&&Ko(t);break;case 4:Ma(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;xe(ei,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(xe(be,be.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?oc(e,t,r):(xe(be,be.current&1),e=Kt(e,t,r),e!==null?e.sibling:null);xe(be,be.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return ac(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(be,be.current),n)break;return null;case 22:case 23:return t.lanes=0,Zu(e,t,r)}return Kt(e,t,r)}var lc,al,sc,uc;lc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},al=function(){},sc=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Rr(Ot.current);var l=null;switch(r){case"input":i=kn(e,i),n=kn(e,n),l=[];break;case"select":i=$({},i,{value:void 0}),n=$({},n,{value:void 0}),l=[];break;case"textarea":i=En(e,i),n=En(e,n),l=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Vo)}p(r,n);var c;r=null;for(N in i)if(!n.hasOwnProperty(N)&&i.hasOwnProperty(N)&&i[N]!=null)if(N==="style"){var m=i[N];for(c in m)m.hasOwnProperty(c)&&(r||(r={}),r[c]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(f.hasOwnProperty(N)?l||(l=[]):(l=l||[]).push(N,null));for(N in n){var g=n[N];if(m=i!=null?i[N]:void 0,n.hasOwnProperty(N)&&g!==m&&(g!=null||m!=null))if(N==="style")if(m){for(c in m)!m.hasOwnProperty(c)||g&&g.hasOwnProperty(c)||(r||(r={}),r[c]="");for(c in g)g.hasOwnProperty(c)&&m[c]!==g[c]&&(r||(r={}),r[c]=g[c])}else r||(l||(l=[]),l.push(N,r)),r=g;else N==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,m=m?m.__html:void 0,g!=null&&m!==g&&(l=l||[]).push(N,g)):N==="children"?typeof g!="string"&&typeof g!="number"||(l=l||[]).push(N,""+g):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(f.hasOwnProperty(N)?(g!=null&&N==="onScroll"&&ke("scroll",e),l||m===g||(l=[])):(l=l||[]).push(N,g))}r&&(l=l||[]).push("style",r);var N=l;(t.updateQueue=N)&&(t.flags|=4)}},uc=function(e,t,r,n){r!==n&&(t.flags|=4)};function lo(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Jf(e,t,r){var n=t.pendingProps;switch(Pa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return nt(t.type)&&Qo(),Je(t),null;case 3:return n=t.stateNode,cn(),je(rt),je(Ge),Ua(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bt!==null&&(vl(bt),bt=null))),al(e,t),Je(t),null;case 5:Aa(t);var i=Rr(ro.current);if(r=t.type,e!==null&&t.stateNode!=null)sc(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Je(t),null}if(e=Rr(Ot.current),Xo(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[Dt]=t,n[Jn]=l,e=(t.mode&1)!==0,r){case"dialog":ke("cancel",n),ke("close",n);break;case"iframe":case"object":case"embed":ke("load",n);break;case"video":case"audio":for(i=0;i<Kn.length;i++)ke(Kn[i],n);break;case"source":ke("error",n);break;case"img":case"image":case"link":ke("error",n),ke("load",n);break;case"details":ke("toggle",n);break;case"input":We(n,l),ke("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},ke("invalid",n);break;case"textarea":Br(n,l),ke("invalid",n)}p(r,l),i=null;for(var c in l)if(l.hasOwnProperty(c)){var m=l[c];c==="children"?typeof m=="string"?n.textContent!==m&&(l.suppressHydrationWarning!==!0&&Wo(n.textContent,m,e),i=["children",m]):typeof m=="number"&&n.textContent!==""+m&&(l.suppressHydrationWarning!==!0&&Wo(n.textContent,m,e),i=["children",""+m]):f.hasOwnProperty(c)&&m!=null&&c==="onScroll"&&ke("scroll",n)}switch(r){case"input":Ke(n),So(n,l,!0);break;case"textarea":Ke(n),bn(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=Vo)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{c=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hr(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=c.createElement(r,{is:n.is}):(e=c.createElement(r),r==="select"&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,r),e[Dt]=t,e[Jn]=n,lc(e,t,!1,!1),t.stateNode=e;e:{switch(c=Y(r,n),r){case"dialog":ke("cancel",e),ke("close",e),i=n;break;case"iframe":case"object":case"embed":ke("load",e),i=n;break;case"video":case"audio":for(i=0;i<Kn.length;i++)ke(Kn[i],e);i=n;break;case"source":ke("error",e),i=n;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=n;break;case"details":ke("toggle",e),i=n;break;case"input":We(e,n),i=kn(e,n),ke("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=$({},n,{value:void 0}),ke("invalid",e);break;case"textarea":Br(e,n),i=En(e,n),ke("invalid",e);break;default:i=n}p(r,i),m=i;for(l in m)if(m.hasOwnProperty(l)){var g=m[l];l==="style"?_n(e,g):l==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&St(e,g)):l==="children"?typeof g=="string"?(r!=="textarea"||g!=="")&&jr(e,g):typeof g=="number"&&jr(e,""+g):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(f.hasOwnProperty(l)?g!=null&&l==="onScroll"&&ke("scroll",e):g!=null&&te(e,l,g,c))}switch(r){case"input":Ke(e),So(e,n,!1);break;case"textarea":Ke(e),bn(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ae(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?Zt(e,!!n.multiple,l,!1):n.defaultValue!=null&&Zt(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vo)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)uc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(r=Rr(ro.current),Rr(Ot.current),Xo(t)){if(n=t.stateNode,r=t.memoizedProps,n[Dt]=t,(l=n.nodeValue!==r)&&(e=dt,e!==null))switch(e.tag){case 3:Wo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wo(n.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Dt]=t,t.stateNode=n}return Je(t),null;case 13:if(je(be),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&ft!==null&&(t.mode&1)!==0&&(t.flags&128)===0)fu(),an(),t.flags|=98560,l=!1;else if(l=Xo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[Dt]=t}else an(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),l=!1}else bt!==null&&(vl(bt),bt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(be.current&1)!==0?Ae===0&&(Ae=3):wl())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return cn(),al(e,t),e===null&&Gn(t.stateNode.containerInfo),Je(t),null;case 10:return Ia(t.type._context),Je(t),null;case 17:return nt(t.type)&&Qo(),Je(t),null;case 19:if(je(be),l=t.memoizedState,l===null)return Je(t),null;if(n=(t.flags&128)!==0,c=l.rendering,c===null)if(n)lo(l,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=oi(e),c!==null){for(t.flags|=128,lo(l,!1),n=c.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)l=r,e=n,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return xe(be,be.current&1|2),t.child}e=e.sibling}l.tail!==null&&ze()>mn&&(t.flags|=128,n=!0,lo(l,!1),t.lanes=4194304)}else{if(!n)if(e=oi(c),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),lo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!Se)return Je(t),null}else 2*ze()-l.renderingStartTime>mn&&r!==1073741824&&(t.flags|=128,n=!0,lo(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(r=l.last,r!==null?r.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ze(),t.sibling=null,r=be.current,xe(be,n?r&1|2:r&1),t):(Je(t),null);case 22:case 23:return xl(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(pt&1073741824)!==0&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function Xf(e,t){switch(Pa(t),t.tag){case 1:return nt(t.type)&&Qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cn(),je(rt),je(Ge),Ua(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Aa(t),null;case 13:if(je(be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));an()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(be),null;case 4:return cn(),null;case 10:return Ia(t.type._context),null;case 22:case 23:return xl(),null;case 24:return null;default:return null}}var pi=!1,Xe=!1,Zf=typeof WeakSet=="function"?WeakSet:Set,W=null;function fn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Te(e,t,n)}else r.current=null}function ll(e,t,r){try{r()}catch(n){Te(e,t,n)}}var cc=!1;function ep(e,t){if(xa=zo,e=Bs(),da(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var c=0,m=-1,g=-1,N=0,L=0,z=e,T=null;t:for(;;){for(var U;z!==r||i!==0&&z.nodeType!==3||(m=c+i),z!==l||n!==0&&z.nodeType!==3||(g=c+n),z.nodeType===3&&(c+=z.nodeValue.length),(U=z.firstChild)!==null;)T=z,z=U;for(;;){if(z===e)break t;if(T===r&&++N===i&&(m=c),T===l&&++L===n&&(g=c),(U=z.nextSibling)!==null)break;z=T,T=z.parentNode}z=U}r=m===-1||g===-1?null:{start:m,end:g}}else r=null}r=r||{start:0,end:0}}else r=null;for(wa={focusedElem:e,selectionRange:r},zo=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var Q=q.memoizedProps,Ie=q.memoizedState,E=t.stateNode,y=E.getSnapshotBeforeUpdate(t.elementType===t.type?Q:Nt(t.type,Q),Ie);E.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(D){Te(t,t.return,D)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return q=cc,cc=!1,q}function so(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ll(t,r,l)}i=i.next}while(i!==n)}}function mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function sl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function dc(e){var t=e.alternate;t!==null&&(e.alternate=null,dc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[Jn],delete t[Ea],delete t[Of],delete t[Ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fc(e){return e.tag===5||e.tag===3||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ul(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Vo));else if(n!==4&&(e=e.child,e!==null))for(ul(e,t,r),e=e.sibling;e!==null;)ul(e,t,r),e=e.sibling}function cl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(cl(e,t,r),e=e.sibling;e!==null;)cl(e,t,r),e=e.sibling}var Ve=null,Pt=!1;function fr(e,t,r){for(r=r.child;r!==null;)mc(e,t,r),r=r.sibling}function mc(e,t,r){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(No,r)}catch{}switch(r.tag){case 5:Xe||fn(r,t);case 6:var n=Ve,i=Pt;Ve=null,fr(e,t,r),Ve=n,Pt=i,Ve!==null&&(Pt?(e=Ve,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ve.removeChild(r.stateNode));break;case 18:Ve!==null&&(Pt?(e=Ve,r=r.stateNode,e.nodeType===8?Sa(e.parentNode,r):e.nodeType===1&&Sa(e,r),$n(e)):Sa(Ve,r.stateNode));break;case 4:n=Ve,i=Pt,Ve=r.stateNode.containerInfo,Pt=!0,fr(e,t,r),Ve=n,Pt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var l=i,c=l.destroy;l=l.tag,c!==void 0&&((l&2)!==0||(l&4)!==0)&&ll(r,t,c),i=i.next}while(i!==n)}fr(e,t,r);break;case 1:if(!Xe&&(fn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(m){Te(r,t,m)}fr(e,t,r);break;case 21:fr(e,t,r);break;case 22:r.mode&1?(Xe=(n=Xe)||r.memoizedState!==null,fr(e,t,r),Xe=n):fr(e,t,r);break;default:fr(e,t,r)}}function hc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Zf),t.forEach(function(n){var i=up.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function _t(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var l=e,c=t,m=c;e:for(;m!==null;){switch(m.tag){case 5:Ve=m.stateNode,Pt=!1;break e;case 3:Ve=m.stateNode.containerInfo,Pt=!0;break e;case 4:Ve=m.stateNode.containerInfo,Pt=!0;break e}m=m.return}if(Ve===null)throw Error(u(160));mc(l,c,i),Ve=null,Pt=!1;var g=i.alternate;g!==null&&(g.return=null),i.return=null}catch(N){Te(i,t,N)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gc(t,e),t=t.sibling}function gc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),Mt(e),n&4){try{so(3,e,e.return),mi(3,e)}catch(Q){Te(e,e.return,Q)}try{so(5,e,e.return)}catch(Q){Te(e,e.return,Q)}}break;case 1:_t(t,e),Mt(e),n&512&&r!==null&&fn(r,r.return);break;case 5:if(_t(t,e),Mt(e),n&512&&r!==null&&fn(r,r.return),e.flags&32){var i=e.stateNode;try{jr(i,"")}catch(Q){Te(e,e.return,Q)}}if(n&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,c=r!==null?r.memoizedProps:l,m=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{m==="input"&&l.type==="radio"&&l.name!=null&&zt(i,l),Y(m,c);var N=Y(m,l);for(c=0;c<g.length;c+=2){var L=g[c],z=g[c+1];L==="style"?_n(i,z):L==="dangerouslySetInnerHTML"?St(i,z):L==="children"?jr(i,z):te(i,L,z,N)}switch(m){case"input":jn(i,l);break;case"textarea":Cn(i,l);break;case"select":var T=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var U=l.value;U!=null?Zt(i,!!l.multiple,U,!1):T!==!!l.multiple&&(l.defaultValue!=null?Zt(i,!!l.multiple,l.defaultValue,!0):Zt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Jn]=l}catch(Q){Te(e,e.return,Q)}}break;case 6:if(_t(t,e),Mt(e),n&4){if(e.stateNode===null)throw Error(u(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(Q){Te(e,e.return,Q)}}break;case 3:if(_t(t,e),Mt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(Q){Te(e,e.return,Q)}break;case 4:_t(t,e),Mt(e);break;case 13:_t(t,e),Mt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(pl=ze())),n&4&&hc(e);break;case 22:if(L=r!==null&&r.memoizedState!==null,e.mode&1?(Xe=(N=Xe)||L,_t(t,e),Xe=N):_t(t,e),Mt(e),n&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!L&&(e.mode&1)!==0)for(W=e,L=e.child;L!==null;){for(z=W=L;W!==null;){switch(T=W,U=T.child,T.tag){case 0:case 11:case 14:case 15:so(4,T,T.return);break;case 1:fn(T,T.return);var q=T.stateNode;if(typeof q.componentWillUnmount=="function"){n=T,r=T.return;try{t=n,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(Q){Te(n,r,Q)}}break;case 5:fn(T,T.return);break;case 22:if(T.memoizedState!==null){xc(z);continue}}U!==null?(U.return=T,W=U):xc(z)}L=L.sibling}e:for(L=null,z=e;;){if(z.tag===5){if(L===null){L=z;try{i=z.stateNode,N?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(m=z.stateNode,g=z.memoizedProps.style,c=g!=null&&g.hasOwnProperty("display")?g.display:null,m.style.display=Pn("display",c))}catch(Q){Te(e,e.return,Q)}}}else if(z.tag===6){if(L===null)try{z.stateNode.nodeValue=N?"":z.memoizedProps}catch(Q){Te(e,e.return,Q)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;L===z&&(L=null),z=z.return}L===z&&(L=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:_t(t,e),Mt(e),n&4&&hc(e);break;case 21:break;default:_t(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(fc(r)){var n=r;break e}r=r.return}throw Error(u(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(jr(i,""),n.flags&=-33);var l=pc(e);cl(e,l,i);break;case 3:case 4:var c=n.stateNode.containerInfo,m=pc(e);ul(e,m,c);break;default:throw Error(u(161))}}catch(g){Te(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tp(e,t,r){W=e,vc(e)}function vc(e,t,r){for(var n=(e.mode&1)!==0;W!==null;){var i=W,l=i.child;if(i.tag===22&&n){var c=i.memoizedState!==null||pi;if(!c){var m=i.alternate,g=m!==null&&m.memoizedState!==null||Xe;m=pi;var N=Xe;if(pi=c,(Xe=g)&&!N)for(W=i;W!==null;)c=W,g=c.child,c.tag===22&&c.memoizedState!==null?wc(i):g!==null?(g.return=c,W=g):wc(i);for(;l!==null;)W=l,vc(l),l=l.sibling;W=i,pi=m,Xe=N}yc(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,W=l):yc(e)}}function yc(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Xe||mi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Xe)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Nt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&xu(t,l,n);break;case 3:var c=t.updateQueue;if(c!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}xu(t,c,r)}break;case 5:var m=t.stateNode;if(r===null&&t.flags&4){r=m;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&r.focus();break;case"img":g.src&&(r.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var N=t.alternate;if(N!==null){var L=N.memoizedState;if(L!==null){var z=L.dehydrated;z!==null&&$n(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Xe||t.flags&512&&sl(t)}catch(T){Te(t,t.return,T)}}if(t===e){W=null;break}if(r=t.sibling,r!==null){r.return=t.return,W=r;break}W=t.return}}function xc(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var r=t.sibling;if(r!==null){r.return=t.return,W=r;break}W=t.return}}function wc(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{mi(4,t)}catch(g){Te(t,r,g)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(g){Te(t,i,g)}}var l=t.return;try{sl(t)}catch(g){Te(t,l,g)}break;case 5:var c=t.return;try{sl(t)}catch(g){Te(t,c,g)}}}catch(g){Te(t,t.return,g)}if(t===e){W=null;break}var m=t.sibling;if(m!==null){m.return=t.return,W=m;break}W=t.return}}var rp=Math.ceil,hi=V.ReactCurrentDispatcher,dl=V.ReactCurrentOwner,xt=V.ReactCurrentBatchConfig,pe=0,Ue=null,Oe=null,qe=0,pt=0,pn=lr(0),Ae=0,uo=null,Lr=0,gi=0,fl=0,co=null,it=null,pl=0,mn=1/0,Gt=null,vi=!1,ml=null,pr=null,yi=!1,mr=null,xi=0,fo=0,hl=null,wi=-1,ki=0;function tt(){return(pe&6)!==0?ze():wi!==-1?wi:wi=ze()}function hr(e){return(e.mode&1)===0?1:(pe&2)!==0&&qe!==0?qe&-qe:Af.transition!==null?(ki===0&&(ki=ps()),ki):(e=ge,e!==0||(e=window.event,e=e===void 0?16:js(e.type)),e)}function Rt(e,t,r,n){if(50<fo)throw fo=0,hl=null,Error(u(185));Dn(e,r,n),((pe&2)===0||e!==Ue)&&(e===Ue&&((pe&2)===0&&(gi|=r),Ae===4&&gr(e,qe)),at(e,n),r===1&&pe===0&&(t.mode&1)===0&&(mn=ze()+500,Go&&ur()))}function at(e,t){var r=e.callbackNode;Md(e,t);var n=Ro(e,e===Ue?qe:0);if(n===0)r!==null&&cs(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&cs(r),t===1)e.tag===0?Mf(jc.bind(null,e)):lu(jc.bind(null,e)),If(function(){(pe&6)===0&&ur()}),r=null;else{switch(ms(n)){case 1:r=Ki;break;case 4:r=ds;break;case 16:r=bo;break;case 536870912:r=fs;break;default:r=bo}r=Rc(r,kc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function kc(e,t){if(wi=-1,ki=0,(pe&6)!==0)throw Error(u(327));var r=e.callbackNode;if(hn()&&e.callbackNode!==r)return null;var n=Ro(e,e===Ue?qe:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=ji(e,n);else{t=n;var i=pe;pe|=2;var l=Ec();(Ue!==e||qe!==t)&&(Gt=null,mn=ze()+500,Ir(e,t));do try{ip();break}catch(m){Sc(e,m)}while(!0);za(),hi.current=l,pe=i,Oe!==null?t=0:(Ue=null,qe=0,t=Ae)}if(t!==0){if(t===2&&(i=Gi(e),i!==0&&(n=i,t=gl(e,i))),t===1)throw r=uo,Ir(e,0),gr(e,n),at(e,ze()),r;if(t===6)gr(e,n);else{if(i=e.current.alternate,(n&30)===0&&!np(i)&&(t=ji(e,n),t===2&&(l=Gi(e),l!==0&&(n=l,t=gl(e,l))),t===1))throw r=uo,Ir(e,0),gr(e,n),at(e,ze()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(u(345));case 2:Dr(e,it,Gt);break;case 3:if(gr(e,n),(n&130023424)===n&&(t=pl+500-ze(),10<t)){if(Ro(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){tt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ja(Dr.bind(null,e,it,Gt),t);break}Dr(e,it,Gt);break;case 4:if(gr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var c=31-Et(n);l=1<<c,c=t[c],c>i&&(i=c),n&=~l}if(n=i,n=ze()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*rp(n/1960))-n,10<n){e.timeoutHandle=ja(Dr.bind(null,e,it,Gt),n);break}Dr(e,it,Gt);break;case 5:Dr(e,it,Gt);break;default:throw Error(u(329))}}}return at(e,ze()),e.callbackNode===r?kc.bind(null,e):null}function gl(e,t){var r=co;return e.current.memoizedState.isDehydrated&&(Ir(e,t).flags|=256),e=ji(e,t),e!==2&&(t=it,it=r,t!==null&&vl(t)),e}function vl(e){it===null?it=e:it.push.apply(it,e)}function np(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],l=i.getSnapshot;i=i.value;try{if(!Ct(l(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gr(e,t){for(t&=~fl,t&=~gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Et(t),n=1<<r;e[r]=-1,t&=~n}}function jc(e){if((pe&6)!==0)throw Error(u(327));hn();var t=Ro(e,0);if((t&1)===0)return at(e,ze()),null;var r=ji(e,t);if(e.tag!==0&&r===2){var n=Gi(e);n!==0&&(t=n,r=gl(e,n))}if(r===1)throw r=uo,Ir(e,0),gr(e,t),at(e,ze()),r;if(r===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dr(e,it,Gt),at(e,ze()),null}function yl(e,t){var r=pe;pe|=1;try{return e(t)}finally{pe=r,pe===0&&(mn=ze()+500,Go&&ur())}}function zr(e){mr!==null&&mr.tag===0&&(pe&6)===0&&hn();var t=pe;pe|=1;var r=xt.transition,n=ge;try{if(xt.transition=null,ge=1,e)return e()}finally{ge=n,xt.transition=r,pe=t,(pe&6)===0&&ur()}}function xl(){pt=pn.current,je(pn)}function Ir(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,zf(r)),Oe!==null)for(r=Oe.return;r!==null;){var n=r;switch(Pa(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Qo();break;case 3:cn(),je(rt),je(Ge),Ua();break;case 5:Aa(n);break;case 4:cn();break;case 13:je(be);break;case 19:je(be);break;case 10:Ia(n.type._context);break;case 22:case 23:xl()}r=r.return}if(Ue=e,Oe=e=vr(e.current,null),qe=pt=t,Ae=0,uo=null,fl=gi=Lr=0,it=co=null,_r!==null){for(t=0;t<_r.length;t++)if(r=_r[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,l=r.pending;if(l!==null){var c=l.next;l.next=i,n.next=c}r.pending=n}_r=null}return e}function Sc(e,t){do{var r=Oe;try{if(za(),ii.current=ui,ai){for(var n=Ne.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ai=!1}if(Tr=0,$e=Me=Ne=null,no=!1,oo=0,dl.current=null,r===null||r.return===null){Ae=1,uo=t,Oe=null;break}e:{var l=e,c=r.return,m=r,g=t;if(t=qe,m.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var N=g,L=m,z=L.tag;if((L.mode&1)===0&&(z===0||z===11||z===15)){var T=L.alternate;T?(L.updateQueue=T.updateQueue,L.memoizedState=T.memoizedState,L.lanes=T.lanes):(L.updateQueue=null,L.memoizedState=null)}var U=Ku(c);if(U!==null){U.flags&=-257,Gu(U,c,m,l,t),U.mode&1&&Qu(l,N,t),t=U,g=N;var q=t.updateQueue;if(q===null){var Q=new Set;Q.add(g),t.updateQueue=Q}else q.add(g);break e}else{if((t&1)===0){Qu(l,N,t),wl();break e}g=Error(u(426))}}else if(Se&&m.mode&1){var Ie=Ku(c);if(Ie!==null){(Ie.flags&65536)===0&&(Ie.flags|=256),Gu(Ie,c,m,l,t),Ta(dn(g,m));break e}}l=g=dn(g,m),Ae!==4&&(Ae=2),co===null?co=[l]:co.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var E=Vu(l,g,t);yu(l,E);break e;case 1:m=g;var y=l.type,C=l.stateNode;if((l.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(pr===null||!pr.has(C)))){l.flags|=65536,t&=-t,l.lanes|=t;var D=qu(l,m,t);yu(l,D);break e}}l=l.return}while(l!==null)}bc(r)}catch(K){t=K,Oe===r&&r!==null&&(Oe=r=r.return);continue}break}while(!0)}function Ec(){var e=hi.current;return hi.current=ui,e===null?ui:e}function wl(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Ue===null||(Lr&268435455)===0&&(gi&268435455)===0||gr(Ue,qe)}function ji(e,t){var r=pe;pe|=2;var n=Ec();(Ue!==e||qe!==t)&&(Gt=null,Ir(e,t));do try{op();break}catch(i){Sc(e,i)}while(!0);if(za(),pe=r,hi.current=n,Oe!==null)throw Error(u(261));return Ue=null,qe=0,Ae}function op(){for(;Oe!==null;)Cc(Oe)}function ip(){for(;Oe!==null&&!_d();)Cc(Oe)}function Cc(e){var t=_c(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?bc(e):Oe=t,dl.current=null}function bc(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Jf(r,t,pt),r!==null){Oe=r;return}}else{if(r=Xf(r,t),r!==null){r.flags&=32767,Oe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Oe=null;return}}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);Ae===0&&(Ae=5)}function Dr(e,t,r){var n=ge,i=xt.transition;try{xt.transition=null,ge=1,ap(e,t,r,n)}finally{xt.transition=i,ge=n}return null}function ap(e,t,r,n){do hn();while(mr!==null);if((pe&6)!==0)throw Error(u(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(Ad(e,l),e===Ue&&(Oe=Ue=null,qe=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||yi||(yi=!0,Rc(bo,function(){return hn(),null})),l=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||l){l=xt.transition,xt.transition=null;var c=ge;ge=1;var m=pe;pe|=4,dl.current=null,ep(e,r),gc(r,e),bf(wa),zo=!!xa,wa=xa=null,e.current=r,tp(r),Rd(),pe=m,ge=c,xt.transition=l}else e.current=r;if(yi&&(yi=!1,mr=e,xi=i),l=e.pendingLanes,l===0&&(pr=null),zd(r.stateNode),at(e,ze()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(vi)throw vi=!1,e=ml,ml=null,e;return(xi&1)!==0&&e.tag!==0&&hn(),l=e.pendingLanes,(l&1)!==0?e===hl?fo++:(fo=0,hl=e):fo=0,ur(),null}function hn(){if(mr!==null){var e=ms(xi),t=xt.transition,r=ge;try{if(xt.transition=null,ge=16>e?16:e,mr===null)var n=!1;else{if(e=mr,mr=null,xi=0,(pe&6)!==0)throw Error(u(331));var i=pe;for(pe|=4,W=e.current;W!==null;){var l=W,c=l.child;if((W.flags&16)!==0){var m=l.deletions;if(m!==null){for(var g=0;g<m.length;g++){var N=m[g];for(W=N;W!==null;){var L=W;switch(L.tag){case 0:case 11:case 15:so(8,L,l)}var z=L.child;if(z!==null)z.return=L,W=z;else for(;W!==null;){L=W;var T=L.sibling,U=L.return;if(dc(L),L===N){W=null;break}if(T!==null){T.return=U,W=T;break}W=U}}}var q=l.alternate;if(q!==null){var Q=q.child;if(Q!==null){q.child=null;do{var Ie=Q.sibling;Q.sibling=null,Q=Ie}while(Q!==null)}}W=l}}if((l.subtreeFlags&2064)!==0&&c!==null)c.return=l,W=c;else e:for(;W!==null;){if(l=W,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:so(9,l,l.return)}var E=l.sibling;if(E!==null){E.return=l.return,W=E;break e}W=l.return}}var y=e.current;for(W=y;W!==null;){c=W;var C=c.child;if((c.subtreeFlags&2064)!==0&&C!==null)C.return=c,W=C;else e:for(c=y;W!==null;){if(m=W,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:mi(9,m)}}catch(K){Te(m,m.return,K)}if(m===c){W=null;break e}var D=m.sibling;if(D!==null){D.return=m.return,W=D;break e}W=m.return}}if(pe=i,ur(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(No,e)}catch{}n=!0}return n}finally{ge=r,xt.transition=t}}return!1}function Nc(e,t,r){t=dn(r,t),t=Vu(e,t,1),e=dr(e,t,1),t=tt(),e!==null&&(Dn(e,1,t),at(e,t))}function Te(e,t,r){if(e.tag===3)Nc(e,e,r);else for(;t!==null;){if(t.tag===3){Nc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(pr===null||!pr.has(n))){e=dn(r,e),e=qu(t,e,1),t=dr(t,e,1),e=tt(),t!==null&&(Dn(t,1,e),at(t,e));break}}t=t.return}}function lp(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&r,Ue===e&&(qe&r)===r&&(Ae===4||Ae===3&&(qe&130023424)===qe&&500>ze()-pl?Ir(e,0):fl|=r),at(e,t)}function Pc(e,t){t===0&&((e.mode&1)===0?t=1:(t=_o,_o<<=1,(_o&130023424)===0&&(_o=4194304)));var r=tt();e=qt(e,t),e!==null&&(Dn(e,t,r),at(e,r))}function sp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Pc(e,r)}function up(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(u(314))}n!==null&&n.delete(t),Pc(e,r)}var _c;_c=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)ot=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return ot=!1,Yf(e,t,r);ot=(e.flags&131072)!==0}else ot=!1,Se&&(t.flags&1048576)!==0&&su(t,Jo,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;fi(e,t),e=t.pendingProps;var i=rn(t,Ge.current);un(t,r),i=Wa(null,t,n,e,i,r);var l=Va();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(n)?(l=!0,Ko(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fa(t),i.updater=ci,t.stateNode=i,i._reactInternals=t,Ja(t,n,e,r),t=tl(null,t,n,!0,l,r)):(t.tag=0,Se&&l&&Na(t),et(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(fi(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=dp(n),e=Nt(n,e),i){case 0:t=el(null,t,n,e,r);break e;case 1:t=tc(null,t,n,e,r);break e;case 11:t=Yu(null,t,n,e,r);break e;case 14:t=Ju(null,t,n,Nt(n.type,e),r);break e}throw Error(u(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),el(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),tc(e,t,n,i,r);case 3:e:{if(rc(t),e===null)throw Error(u(387));n=t.pendingProps,l=t.memoizedState,i=l.element,vu(e,t),ni(t,n,null,r);var c=t.memoizedState;if(n=c.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=dn(Error(u(423)),t),t=nc(e,t,n,r,i);break e}else if(n!==i){i=dn(Error(u(424)),t),t=nc(e,t,n,r,i);break e}else for(ft=ar(t.stateNode.containerInfo.firstChild),dt=t,Se=!0,bt=null,r=hu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(an(),n===i){t=Kt(e,t,r);break e}et(e,t,n,r)}t=t.child}return t;case 5:return wu(t),e===null&&Ra(t),n=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,c=i.children,ka(n,i)?c=null:l!==null&&ka(n,l)&&(t.flags|=32),ec(e,t),et(e,t,c,r),t.child;case 6:return e===null&&Ra(t),null;case 13:return oc(e,t,r);case 4:return Ma(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ln(t,null,n,r):et(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),Yu(e,t,n,i,r);case 7:return et(e,t,t.pendingProps,r),t.child;case 8:return et(e,t,t.pendingProps.children,r),t.child;case 12:return et(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,l=t.memoizedProps,c=i.value,xe(ei,n._currentValue),n._currentValue=c,l!==null)if(Ct(l.value,c)){if(l.children===i.children&&!rt.current){t=Kt(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var m=l.dependencies;if(m!==null){c=l.child;for(var g=m.firstContext;g!==null;){if(g.context===n){if(l.tag===1){g=Qt(-1,r&-r),g.tag=2;var N=l.updateQueue;if(N!==null){N=N.shared;var L=N.pending;L===null?g.next=g:(g.next=L.next,L.next=g),N.pending=g}}l.lanes|=r,g=l.alternate,g!==null&&(g.lanes|=r),Da(l.return,r,t),m.lanes|=r;break}g=g.next}}else if(l.tag===10)c=l.type===t.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(u(341));c.lanes|=r,m=c.alternate,m!==null&&(m.lanes|=r),Da(c,r,t),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===t){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}et(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,un(t,r),i=vt(i),n=n(i),t.flags|=1,et(e,t,n,r),t.child;case 14:return n=t.type,i=Nt(n,t.pendingProps),i=Nt(n.type,i),Ju(e,t,n,i,r);case 15:return Xu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),fi(e,t),t.tag=1,nt(n)?(e=!0,Ko(t)):e=!1,un(t,r),Hu(t,n,i),Ja(t,n,i,r),tl(null,t,n,!0,e,r);case 19:return ac(e,t,r);case 22:return Zu(e,t,r)}throw Error(u(156,t.tag))};function Rc(e,t){return us(e,t)}function cp(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,r,n){return new cp(e,t,r,n)}function kl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dp(e){if(typeof e=="function")return kl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Le)return 11;if(e===we)return 14}return 2}function vr(e,t){var r=e.alternate;return r===null?(r=wt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Si(e,t,r,n,i,l){var c=2;if(n=e,typeof e=="function")kl(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case ve:return Or(r.children,i,l,t);case ue:c=8,i|=8;break;case Fe:return e=wt(12,r,t,i|2),e.elementType=Fe,e.lanes=l,e;case Re:return e=wt(13,r,t,i),e.elementType=Re,e.lanes=l,e;case Qe:return e=wt(19,r,t,i),e.elementType=Qe,e.lanes=l,e;case ye:return Ei(r,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case He:c=10;break e;case st:c=9;break e;case Le:c=11;break e;case we:c=14;break e;case Ce:c=16,n=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=wt(c,r,t,i),t.elementType=e,t.type=n,t.lanes=l,t}function Or(e,t,r,n){return e=wt(7,e,n,t),e.lanes=r,e}function Ei(e,t,r,n){return e=wt(22,e,n,t),e.elementType=ye,e.lanes=r,e.stateNode={isHidden:!1},e}function jl(e,t,r){return e=wt(6,e,null,t),e.lanes=r,e}function Sl(e,t,r){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fp(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yi(0),this.expirationTimes=Yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yi(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function El(e,t,r,n,i,l,c,m,g){return e=new fp(e,t,r,m,g),t===1?(t=1,l===!0&&(t|=8)):t=0,l=wt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fa(l),e}function pp(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fe,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Tc(e){if(!e)return sr;e=e._reactInternals;e:{if(Er(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var r=e.type;if(nt(r))return iu(e,r,t)}return t}function Lc(e,t,r,n,i,l,c,m,g){return e=El(r,n,!0,e,i,l,c,m,g),e.context=Tc(null),r=e.current,n=tt(),i=hr(r),l=Qt(n,i),l.callback=t??null,dr(r,l,i),e.current.lanes=i,Dn(e,i,n),at(e,n),e}function Ci(e,t,r,n){var i=t.current,l=tt(),c=hr(i);return r=Tc(r),t.context===null?t.context=r:t.pendingContext=r,t=Qt(l,c),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=dr(i,t,c),e!==null&&(Rt(e,i,c,l),ri(e,i,c)),c}function bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Cl(e,t){zc(e,t),(e=e.alternate)&&zc(e,t)}function mp(){return null}var Ic=typeof reportError=="function"?reportError:function(e){console.error(e)};function bl(e){this._internalRoot=e}Ni.prototype.render=bl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Ci(e,t,null,null)},Ni.prototype.unmount=bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zr(function(){Ci(null,e,null,null)}),t[Bt]=null}};function Ni(e){this._internalRoot=e}Ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=vs();e={blockedOn:null,target:e,priority:t};for(var r=0;r<nr.length&&t!==0&&t<nr[r].priority;r++);nr.splice(r,0,e),r===0&&ws(e)}};function Nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dc(){}function hp(e,t,r,n,i){if(i){if(typeof n=="function"){var l=n;n=function(){var N=bi(c);l.call(N)}}var c=Lc(t,n,e,0,null,!1,!1,"",Dc);return e._reactRootContainer=c,e[Bt]=c.current,Gn(e.nodeType===8?e.parentNode:e),zr(),c}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var m=n;n=function(){var N=bi(g);m.call(N)}}var g=El(e,0,!1,null,null,!1,!1,"",Dc);return e._reactRootContainer=g,e[Bt]=g.current,Gn(e.nodeType===8?e.parentNode:e),zr(function(){Ci(t,g,r,n)}),g}function _i(e,t,r,n,i){var l=r._reactRootContainer;if(l){var c=l;if(typeof i=="function"){var m=i;i=function(){var g=bi(c);m.call(g)}}Ci(t,c,e,i)}else c=hp(r,t,e,i,n);return bi(c)}hs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=In(t.pendingLanes);r!==0&&(Ji(t,r|1),at(t,ze()),(pe&6)===0&&(mn=ze()+500,ur()))}break;case 13:zr(function(){var n=qt(e,1);if(n!==null){var i=tt();Rt(n,e,1,i)}}),Cl(e,1)}},Xi=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var r=tt();Rt(t,e,134217728,r)}Cl(e,134217728)}},gs=function(e){if(e.tag===13){var t=hr(e),r=qt(e,t);if(r!==null){var n=tt();Rt(r,e,t,n)}Cl(e,t)}},vs=function(){return ge},ys=function(e,t){var r=ge;try{return ge=e,t()}finally{ge=r}},Rn=function(e,t,r){switch(t){case"input":if(jn(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=qo(n);if(!i)throw Error(u(90));Ze(n),jn(n,i)}}}break;case"textarea":Cn(e,r);break;case"select":t=r.value,t!=null&&Zt(e,!!r.multiple,t,!1)}},rs=yl,ns=zr;var gp={usingClientEntryPoint:!1,Events:[Xn,en,qo,es,ts,yl]},po={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vp={bundleType:po.bundleType,version:po.version,rendererPackageName:po.rendererPackageName,rendererConfig:po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:V.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ls(e),e===null?null:e.stateNode},findFiberByHostInstance:po.findFiberByHostInstance||mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ri.isDisabled&&Ri.supportsFiber)try{No=Ri.inject(vp),It=Ri}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gp,lt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nl(t))throw Error(u(200));return pp(e,t,null,r)},lt.createRoot=function(e,t){if(!Nl(e))throw Error(u(299));var r=!1,n="",i=Ic;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=El(e,1,!1,null,null,r,!1,n,i),e[Bt]=t.current,Gn(e.nodeType===8?e.parentNode:e),new bl(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=ls(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return zr(e)},lt.hydrate=function(e,t,r){if(!Pi(t))throw Error(u(200));return _i(null,e,t,!0,r)},lt.hydrateRoot=function(e,t,r){if(!Nl(e))throw Error(u(405));var n=r!=null&&r.hydratedSources||null,i=!1,l="",c=Ic;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),t=Lc(t,null,e,1,r??null,i,!1,l,c),e[Bt]=t.current,Gn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Ni(t)},lt.render=function(e,t,r){if(!Pi(t))throw Error(u(200));return _i(null,e,t,!1,r)},lt.unmountComponentAtNode=function(e){if(!Pi(e))throw Error(u(40));return e._reactRootContainer?(zr(function(){_i(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1},lt.unstable_batchedUpdates=yl,lt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Pi(r))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return _i(e,t,r,!1,n)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var Hc;function Np(){if(Hc)return Rl.exports;Hc=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),Rl.exports=bp(),Rl.exports}var Wc;function Pp(){if(Wc)return Ti;Wc=1;var a=Np();return Ti.createRoot=a.createRoot,Ti.hydrateRoot=a.hydrateRoot,Ti}var _p=Pp();/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Vc="popstate";function qc(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function Rp(a={}){function s(d,f){var k;let h=(k=f.state)==null?void 0:k.masked,{pathname:v,search:S,hash:w}=h||d.location;return Al("",{pathname:v,search:S,hash:w},f.state&&f.state.usr||null,f.state&&f.state.key||"default",h?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function u(d,f){return typeof f=="string"?f:xo(f)}return Lp(s,u,null,a)}function _e(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function Lt(a,s){if(!a){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Tp(){return Math.random().toString(36).substring(2,10)}function Qc(a,s){return{usr:a.state,key:a.key,idx:s,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function Al(a,s,u=null,d,f){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof s=="string"?xn(s):s,state:u,key:s&&s.key||d||Tp(),unstable_mask:f}}function xo({pathname:a="/",search:s="",hash:u=""}){return s&&s!=="?"&&(a+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function xn(a){let s={};if(a){let u=a.indexOf("#");u>=0&&(s.hash=a.substring(u),a=a.substring(0,u));let d=a.indexOf("?");d>=0&&(s.search=a.substring(d),a=a.substring(0,d)),a&&(s.pathname=a)}return s}function Lp(a,s,u,d={}){let{window:f=document.defaultView,v5Compat:h=!1}=d,v=f.history,S="POP",w=null,k=P();k==null&&(k=0,v.replaceState({...v.state,idx:k},""));function P(){return(v.state||{idx:null}).idx}function b(){S="POP";let I=P(),A=I==null?null:I-k;k=I,w&&w({action:S,location:O.location,delta:A})}function _(I,A){S="PUSH";let X=qc(I)?I:Al(O.location,I,A);k=P()+1;let te=Qc(X,k),V=O.createHref(X.unstable_mask||X);try{v.pushState(te,"",V)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;f.location.assign(V)}h&&w&&w({action:S,location:O.location,delta:1})}function B(I,A){S="REPLACE";let X=qc(I)?I:Al(O.location,I,A);k=P();let te=Qc(X,k),V=O.createHref(X.unstable_mask||X);v.replaceState(te,"",V),h&&w&&w({action:S,location:O.location,delta:0})}function F(I){return zp(I)}let O={get action(){return S},get location(){return a(f,v)},listen(I){if(w)throw new Error("A history only accepts one active listener");return f.addEventListener(Vc,b),w=I,()=>{f.removeEventListener(Vc,b),w=null}},createHref(I){return s(f,I)},createURL:F,encodeLocation(I){let A=F(I);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:_,replace:B,go(I){return v.go(I)}};return O}function zp(a,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),_e(u,"No window.location.(origin|href) available to create URL");let d=typeof a=="string"?a:xo(a);return d=d.replace(/ $/,"%20"),!s&&d.startsWith("//")&&(d=u+d),new URL(d,u)}function ed(a,s,u="/"){return Ip(a,s,u,!1)}function Ip(a,s,u,d){let f=typeof s=="string"?xn(s):s,h=Xt(f.pathname||"/",u);if(h==null)return null;let v=td(a);Dp(v);let S=null;for(let w=0;S==null&&w<v.length;++w){let k=qp(h);S=Wp(v[w],k,d)}return S}function td(a,s=[],u=[],d="",f=!1){let h=(v,S,w=f,k)=>{let P={relativePath:k===void 0?v.path||"":k,caseSensitive:v.caseSensitive===!0,childrenIndex:S,route:v};if(P.relativePath.startsWith("/")){if(!P.relativePath.startsWith(d)&&w)return;_e(P.relativePath.startsWith(d),`Absolute route path "${P.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),P.relativePath=P.relativePath.slice(d.length)}let b=Tt([d,P.relativePath]),_=u.concat(P);v.children&&v.children.length>0&&(_e(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),td(v.children,s,_,b,w)),!(v.path==null&&!v.index)&&s.push({path:b,score:Bp(b,v.index),routesMeta:_})};return a.forEach((v,S)=>{var w;if(v.path===""||!((w=v.path)!=null&&w.includes("?")))h(v,S);else for(let k of rd(v.path))h(v,S,!0,k)}),s}function rd(a){let s=a.split("/");if(s.length===0)return[];let[u,...d]=s,f=u.endsWith("?"),h=u.replace(/\?$/,"");if(d.length===0)return f?[h,""]:[h];let v=rd(d.join("/")),S=[];return S.push(...v.map(w=>w===""?h:[h,w].join("/"))),f&&S.push(...v),S.map(w=>a.startsWith("/")&&w===""?"/":w)}function Dp(a){a.sort((s,u)=>s.score!==u.score?u.score-s.score:Hp(s.routesMeta.map(d=>d.childrenIndex),u.routesMeta.map(d=>d.childrenIndex)))}var Op=/^:[\w-]+$/,Fp=3,Mp=2,Ap=1,$p=10,Up=-2,Kc=a=>a==="*";function Bp(a,s){let u=a.split("/"),d=u.length;return u.some(Kc)&&(d+=Up),s&&(d+=Mp),u.filter(f=>!Kc(f)).reduce((f,h)=>f+(Op.test(h)?Fp:h===""?Ap:$p),d)}function Hp(a,s){return a.length===s.length&&a.slice(0,-1).every((d,f)=>d===s[f])?a[a.length-1]-s[s.length-1]:0}function Wp(a,s,u=!1){let{routesMeta:d}=a,f={},h="/",v=[];for(let S=0;S<d.length;++S){let w=d[S],k=S===d.length-1,P=h==="/"?s:s.slice(h.length)||"/",b=Fi({path:w.relativePath,caseSensitive:w.caseSensitive,end:k},P),_=w.route;if(!b&&k&&u&&!d[d.length-1].route.index&&(b=Fi({path:w.relativePath,caseSensitive:w.caseSensitive,end:!1},P)),!b)return null;Object.assign(f,b.params),v.push({params:f,pathname:Tt([h,b.pathname]),pathnameBase:Yp(Tt([h,b.pathnameBase])),route:_}),b.pathnameBase!=="/"&&(h=Tt([h,b.pathnameBase]))}return v}function Fi(a,s){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,d]=Vp(a.path,a.caseSensitive,a.end),f=s.match(u);if(!f)return null;let h=f[0],v=h.replace(/(.)\/+$/,"$1"),S=f.slice(1);return{params:d.reduce((k,{paramName:P,isOptional:b},_)=>{if(P==="*"){let F=S[_]||"";v=h.slice(0,h.length-F.length).replace(/(.)\/+$/,"$1")}const B=S[_];return b&&!B?k[P]=void 0:k[P]=(B||"").replace(/%2F/g,"/"),k},{}),pathname:h,pathnameBase:v,pattern:a}}function Vp(a,s=!1,u=!0){Lt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let d=[],f="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,S,w,k,P)=>{if(d.push({paramName:S,isOptional:w!=null}),w){let b=P.charAt(k+v.length);return b&&b!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(d.push({paramName:"*"}),f+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":a!==""&&a!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),d]}function qp(a){try{return a.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Lt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),a}}function Xt(a,s){if(s==="/")return a;if(!a.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,d=a.charAt(u);return d&&d!=="/"?null:a.slice(u)||"/"}var Qp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Kp(a,s="/"){let{pathname:u,search:d="",hash:f=""}=typeof a=="string"?xn(a):a,h;return u?(u=od(u),u.startsWith("/")?h=Gc(u.substring(1),"/"):h=Gc(u,s)):h=s,{pathname:h,search:Jp(d),hash:Xp(f)}}function Gc(a,s){let u=Mi(s).split("/");return a.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function zl(a,s,u,d){return`Cannot include a '${a}' character in a manually specified \`to.${s}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Gp(a){return a.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function nd(a){let s=Gp(a);return s.map((u,d)=>d===s.length-1?u.pathname:u.pathnameBase)}function Hl(a,s,u,d=!1){let f;typeof a=="string"?f=xn(a):(f={...a},_e(!f.pathname||!f.pathname.includes("?"),zl("?","pathname","search",f)),_e(!f.pathname||!f.pathname.includes("#"),zl("#","pathname","hash",f)),_e(!f.search||!f.search.includes("#"),zl("#","search","hash",f)));let h=a===""||f.pathname==="",v=h?"/":f.pathname,S;if(v==null)S=u;else{let b=s.length-1;if(!d&&v.startsWith("..")){let _=v.split("/");for(;_[0]==="..";)_.shift(),b-=1;f.pathname=_.join("/")}S=b>=0?s[b]:"/"}let w=Kp(f,S),k=v&&v!=="/"&&v.endsWith("/"),P=(h||v===".")&&u.endsWith("/");return!w.pathname.endsWith("/")&&(k||P)&&(w.pathname+="/"),w}var od=a=>a.replace(/\/\/+/g,"/"),Tt=a=>od(a.join("/")),Mi=a=>a.replace(/\/+$/,""),Yp=a=>Mi(a).replace(/^\/*/,"/"),Jp=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Xp=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,Zp=class{constructor(a,s,u,d=!1){this.status=a,this.statusText=s||"",this.internal=d,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function em(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function tm(a){let s=a.map(u=>u.route.path).filter(Boolean);return Tt(s)||"/"}var id=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ad(a,s){let u=a;if(typeof u!="string"||!Qp.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let d=u,f=!1;if(id)try{let h=new URL(window.location.href),v=u.startsWith("//")?new URL(h.protocol+u):new URL(u),S=Xt(v.pathname,s);v.origin===h.origin&&S!=null?u=S+v.search+v.hash:f=!0}catch{Lt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:f,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ld=["POST","PUT","PATCH","DELETE"];new Set(ld);var rm=["GET",...ld];new Set(rm);var wn=x.createContext(null);wn.displayName="DataRouter";var Ui=x.createContext(null);Ui.displayName="DataRouterState";var sd=x.createContext(!1);function nm(){return x.useContext(sd)}var ud=x.createContext({isTransitioning:!1});ud.displayName="ViewTransition";var om=x.createContext(new Map);om.displayName="Fetchers";var im=x.createContext(null);im.displayName="Await";var kt=x.createContext(null);kt.displayName="Navigation";var wo=x.createContext(null);wo.displayName="Location";var $t=x.createContext({outlet:null,matches:[],isDataRoute:!1});$t.displayName="Route";var Wl=x.createContext(null);Wl.displayName="RouteError";var cd="REACT_ROUTER_ERROR",am="REDIRECT",lm="ROUTE_ERROR_RESPONSE";function sm(a){if(a.startsWith(`${cd}:${am}:{`))try{let s=JSON.parse(a.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function um(a){if(a.startsWith(`${cd}:${lm}:{`))try{let s=JSON.parse(a.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new Zp(s.status,s.statusText,s.data)}catch{}}function cm(a,{relative:s}={}){_e(ko(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:d}=x.useContext(kt),{hash:f,pathname:h,search:v}=jo(a,{relative:s}),S=h;return u!=="/"&&(S=h==="/"?u:Tt([u,h])),d.createHref({pathname:S,search:v,hash:f})}function ko(){return x.useContext(wo)!=null}function jt(){return _e(ko(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(wo).location}var dd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fd(a){x.useContext(kt).static||x.useLayoutEffect(a)}function Ar(){let{isDataRoute:a}=x.useContext($t);return a?Sm():dm()}function dm(){_e(ko(),"useNavigate() may be used only in the context of a <Router> component.");let a=x.useContext(wn),{basename:s,navigator:u}=x.useContext(kt),{matches:d}=x.useContext($t),{pathname:f}=jt(),h=JSON.stringify(nd(d)),v=x.useRef(!1);return fd(()=>{v.current=!0}),x.useCallback((w,k={})=>{if(Lt(v.current,dd),!v.current)return;if(typeof w=="number"){u.go(w);return}let P=Hl(w,JSON.parse(h),f,k.relative==="path");a==null&&s!=="/"&&(P.pathname=P.pathname==="/"?s:Tt([s,P.pathname])),(k.replace?u.replace:u.push)(P,k.state,k)},[s,u,h,f,a])}x.createContext(null);function pd(){let{matches:a}=x.useContext($t),s=a[a.length-1];return(s==null?void 0:s.params)??{}}function jo(a,{relative:s}={}){let{matches:u}=x.useContext($t),{pathname:d}=jt(),f=JSON.stringify(nd(u));return x.useMemo(()=>Hl(a,JSON.parse(f),d,s==="path"),[a,f,d,s])}function fm(a,s){return md(a,s)}function md(a,s,u){var I;_e(ko(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=x.useContext(kt),{matches:f}=x.useContext($t),h=f[f.length-1],v=h?h.params:{},S=h?h.pathname:"/",w=h?h.pathnameBase:"/",k=h&&h.route;{let A=k&&k.path||"";gd(S,!k||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${S}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let P=jt(),b;if(s){let A=typeof s=="string"?xn(s):s;_e(w==="/"||((I=A.pathname)==null?void 0:I.startsWith(w)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${A.pathname}" was given in the \`location\` prop.`),b=A}else b=P;let _=b.pathname||"/",B=_;if(w!=="/"){let A=w.replace(/^\//,"").split("/");B="/"+_.replace(/^\//,"").split("/").slice(A.length).join("/")}let F=ed(a,{pathname:B});Lt(k||F!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Lt(F==null||F[F.length-1].route.element!==void 0||F[F.length-1].route.Component!==void 0||F[F.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=vm(F&&F.map(A=>Object.assign({},A,{params:Object.assign({},v,A.params),pathname:Tt([w,d.encodeLocation?d.encodeLocation(A.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?w:Tt([w,d.encodeLocation?d.encodeLocation(A.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathnameBase])})),f,u);return s&&O?x.createElement(wo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...b},navigationType:"POP"}},O):O}function pm(){let a=jm(),s=em(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,d="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:d},h={padding:"2px 4px",backgroundColor:d},v=null;return console.error("Error handled by React Router default ErrorBoundary:",a),v=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:h},"ErrorBoundary")," or"," ",x.createElement("code",{style:h},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},s),u?x.createElement("pre",{style:f},u):null,v)}var mm=x.createElement(pm,null),hd=class extends x.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,s){return s.location!==a.location||s.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:s.error,location:s.location,revalidation:a.revalidation||s.revalidation}}componentDidCatch(a,s){this.props.onError?this.props.onError(a,s):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const u=um(a.digest);u&&(a=u)}let s=a!==void 0?x.createElement($t.Provider,{value:this.props.routeContext},x.createElement(Wl.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?x.createElement(hm,{error:a},s):s}};hd.contextType=sd;var Il=new WeakMap;function hm({children:a,error:s}){let{basename:u}=x.useContext(kt);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let d=sm(s.digest);if(d){let f=Il.get(s);if(f)throw f;let h=ad(d.location,u);if(id&&!Il.get(s))if(h.isExternal||d.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:d.replace}));throw Il.set(s,v),v}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return a}function gm({routeContext:a,match:s,children:u}){let d=x.useContext(wn);return d&&d.static&&d.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=s.route.id),x.createElement($t.Provider,{value:a},u)}function vm(a,s=[],u){let d=u==null?void 0:u.state;if(a==null){if(!d)return null;if(d.errors)a=d.matches;else if(s.length===0&&!d.initialized&&d.matches.length>0)a=d.matches;else return null}let f=a,h=d==null?void 0:d.errors;if(h!=null){let P=f.findIndex(b=>b.route.id&&(h==null?void 0:h[b.route.id])!==void 0);_e(P>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,P+1))}let v=!1,S=-1;if(u&&d){v=d.renderFallback;for(let P=0;P<f.length;P++){let b=f[P];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(S=P),b.route.id){let{loaderData:_,errors:B}=d,F=b.route.loader&&!_.hasOwnProperty(b.route.id)&&(!B||B[b.route.id]===void 0);if(b.route.lazy||F){u.isStatic&&(v=!0),S>=0?f=f.slice(0,S+1):f=[f[0]];break}}}}let w=u==null?void 0:u.onError,k=d&&w?(P,b)=>{var _,B;w(P,{location:d.location,params:((B=(_=d.matches)==null?void 0:_[0])==null?void 0:B.params)??{},unstable_pattern:tm(d.matches),errorInfo:b})}:void 0;return f.reduceRight((P,b,_)=>{let B,F=!1,O=null,I=null;d&&(B=h&&b.route.id?h[b.route.id]:void 0,O=b.route.errorElement||mm,v&&(S<0&&_===0?(gd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),F=!0,I=null):S===_&&(F=!0,I=b.route.hydrateFallbackElement||null)));let A=s.concat(f.slice(0,_+1)),X=()=>{let te;return B?te=O:F?te=I:b.route.Component?te=x.createElement(b.route.Component,null):b.route.element?te=b.route.element:te=P,x.createElement(gm,{match:b,routeContext:{outlet:P,matches:A,isDataRoute:d!=null},children:te})};return d&&(b.route.ErrorBoundary||b.route.errorElement||_===0)?x.createElement(hd,{location:d.location,revalidation:d.revalidation,component:O,error:B,children:X(),routeContext:{outlet:null,matches:A,isDataRoute:!0},onError:k}):X()},null)}function Vl(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ym(a){let s=x.useContext(wn);return _e(s,Vl(a)),s}function xm(a){let s=x.useContext(Ui);return _e(s,Vl(a)),s}function wm(a){let s=x.useContext($t);return _e(s,Vl(a)),s}function ql(a){let s=wm(a),u=s.matches[s.matches.length-1];return _e(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function km(){return ql("useRouteId")}function jm(){var d;let a=x.useContext(Wl),s=xm("useRouteError"),u=ql("useRouteError");return a!==void 0?a:(d=s.errors)==null?void 0:d[u]}function Sm(){let{router:a}=ym("useNavigate"),s=ql("useNavigate"),u=x.useRef(!1);return fd(()=>{u.current=!0}),x.useCallback(async(f,h={})=>{Lt(u.current,dd),u.current&&(typeof f=="number"?await a.navigate(f):await a.navigate(f,{fromRouteId:s,...h}))},[a,s])}var Yc={};function gd(a,s,u){!s&&!Yc[a]&&(Yc[a]=!0,Lt(!1,u))}x.memo(Em);function Em({routes:a,future:s,state:u,isStatic:d,onError:f}){return md(a,void 0,{state:u,isStatic:d,onError:f})}function xr(a){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Cm({basename:a="/",children:s=null,location:u,navigationType:d="POP",navigator:f,static:h=!1,unstable_useTransitions:v}){_e(!ko(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let S=a.replace(/^\/*/,"/"),w=x.useMemo(()=>({basename:S,navigator:f,static:h,unstable_useTransitions:v,future:{}}),[S,f,h,v]);typeof u=="string"&&(u=xn(u));let{pathname:k="/",search:P="",hash:b="",state:_=null,key:B="default",unstable_mask:F}=u,O=x.useMemo(()=>{let I=Xt(k,S);return I==null?null:{location:{pathname:I,search:P,hash:b,state:_,key:B,unstable_mask:F},navigationType:d}},[S,k,P,b,_,B,d,F]);return Lt(O!=null,`<Router basename="${S}"> is not able to match the URL "${k}${P}${b}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:x.createElement(kt.Provider,{value:w},x.createElement(wo.Provider,{children:s,value:O}))}function bm({children:a,location:s}){return fm($l(a),s)}function $l(a,s=[]){let u=[];return x.Children.forEach(a,(d,f)=>{if(!x.isValidElement(d))return;let h=[...s,f];if(d.type===x.Fragment){u.push.apply(u,$l(d.props.children,h));return}_e(d.type===xr,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!d.props.index||!d.props.children,"An index route cannot have child routes.");let v={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(v.children=$l(d.props.children,h)),u.push(v)}),u}var Ii="get",Di="application/x-www-form-urlencoded";function Bi(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function Nm(a){return Bi(a)&&a.tagName.toLowerCase()==="button"}function Pm(a){return Bi(a)&&a.tagName.toLowerCase()==="form"}function _m(a){return Bi(a)&&a.tagName.toLowerCase()==="input"}function Rm(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Tm(a,s){return a.button===0&&(!s||s==="_self")&&!Rm(a)}function Ul(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((s,u)=>{let d=a[u];return s.concat(Array.isArray(d)?d.map(f=>[u,f]):[[u,d]])},[]))}function Lm(a,s){let u=Ul(a);return s&&s.forEach((d,f)=>{u.has(f)||s.getAll(f).forEach(h=>{u.append(f,h)})}),u}var Li=null;function zm(){if(Li===null)try{new FormData(document.createElement("form"),0),Li=!1}catch{Li=!0}return Li}var Im=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dl(a){return a!=null&&!Im.has(a)?(Lt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Di}"`),null):a}function Dm(a,s){let u,d,f,h,v;if(Pm(a)){let S=a.getAttribute("action");d=S?Xt(S,s):null,u=a.getAttribute("method")||Ii,f=Dl(a.getAttribute("enctype"))||Di,h=new FormData(a)}else if(Nm(a)||_m(a)&&(a.type==="submit"||a.type==="image")){let S=a.form;if(S==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let w=a.getAttribute("formaction")||S.getAttribute("action");if(d=w?Xt(w,s):null,u=a.getAttribute("formmethod")||S.getAttribute("method")||Ii,f=Dl(a.getAttribute("formenctype"))||Dl(S.getAttribute("enctype"))||Di,h=new FormData(S,a),!zm()){let{name:k,type:P,value:b}=a;if(P==="image"){let _=k?`${k}.`:"";h.append(`${_}x`,"0"),h.append(`${_}y`,"0")}else k&&h.append(k,b)}}else{if(Bi(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Ii,d=null,f=Di,v=a}return h&&f==="text/plain"&&(v=h,h=void 0),{action:d,method:u.toLowerCase(),encType:f,formData:h,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ql(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function vd(a,s,u,d){let f=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return u?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${d}`:f.pathname=`${f.pathname}.${d}`:f.pathname==="/"?f.pathname=`_root.${d}`:s&&Xt(f.pathname,s)==="/"?f.pathname=`${Mi(s)}/_root.${d}`:f.pathname=`${Mi(f.pathname)}.${d}`,f}async function Om(a,s){if(a.id in s)return s[a.id];try{let u=await import(a.module);return s[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Fm(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Mm(a,s,u){let d=await Promise.all(a.map(async f=>{let h=s.routes[f.route.id];if(h){let v=await Om(h,u);return v.links?v.links():[]}return[]}));return Bm(d.flat(1).filter(Fm).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Jc(a,s,u,d,f,h){let v=(w,k)=>u[k]?w.route.id!==u[k].route.id:!0,S=(w,k)=>{var P;return u[k].pathname!==w.pathname||((P=u[k].route.path)==null?void 0:P.endsWith("*"))&&u[k].params["*"]!==w.params["*"]};return h==="assets"?s.filter((w,k)=>v(w,k)||S(w,k)):h==="data"?s.filter((w,k)=>{var b;let P=d.routes[w.route.id];if(!P||!P.hasLoader)return!1;if(v(w,k)||S(w,k))return!0;if(w.route.shouldRevalidate){let _=w.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((b=u[0])==null?void 0:b.params)||{},nextUrl:new URL(a,window.origin),nextParams:w.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function Am(a,s,{includeHydrateFallback:u}={}){return $m(a.map(d=>{let f=s.routes[d.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function $m(a){return[...new Set(a)]}function Um(a){let s={},u=Object.keys(a).sort();for(let d of u)s[d]=a[d];return s}function Bm(a,s){let u=new Set;return new Set(s),a.reduce((d,f)=>{let h=JSON.stringify(Um(f));return u.has(h)||(u.add(h),d.push({key:h,link:f})),d},[])}function Kl(){let a=x.useContext(wn);return Ql(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Hm(){let a=x.useContext(Ui);return Ql(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Gl=x.createContext(void 0);Gl.displayName="FrameworkContext";function Yl(){let a=x.useContext(Gl);return Ql(a,"You must render this element inside a <HydratedRouter> element"),a}function Wm(a,s){let u=x.useContext(Gl),[d,f]=x.useState(!1),[h,v]=x.useState(!1),{onFocus:S,onBlur:w,onMouseEnter:k,onMouseLeave:P,onTouchStart:b}=s,_=x.useRef(null);x.useEffect(()=>{if(a==="render"&&v(!0),a==="viewport"){let O=A=>{A.forEach(X=>{v(X.isIntersecting)})},I=new IntersectionObserver(O,{threshold:.5});return _.current&&I.observe(_.current),()=>{I.disconnect()}}},[a]),x.useEffect(()=>{if(d){let O=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(O)}}},[d]);let B=()=>{f(!0)},F=()=>{f(!1),v(!1)};return u?a!=="intent"?[h,_,{}]:[h,_,{onFocus:ho(S,B),onBlur:ho(w,F),onMouseEnter:ho(k,B),onMouseLeave:ho(P,F),onTouchStart:ho(b,B)}]:[!1,_,{}]}function ho(a,s){return u=>{a&&a(u),u.defaultPrevented||s(u)}}function Vm({page:a,...s}){let u=nm(),{router:d}=Kl(),f=x.useMemo(()=>ed(d.routes,a,d.basename),[d.routes,a,d.basename]);return f?u?x.createElement(Qm,{page:a,matches:f,...s}):x.createElement(Km,{page:a,matches:f,...s}):null}function qm(a){let{manifest:s,routeModules:u}=Yl(),[d,f]=x.useState([]);return x.useEffect(()=>{let h=!1;return Mm(a,s,u).then(v=>{h||f(v)}),()=>{h=!0}},[a,s,u]),d}function Qm({page:a,matches:s,...u}){let d=jt(),{future:f}=Yl(),{basename:h}=Kl(),v=x.useMemo(()=>{if(a===d.pathname+d.search+d.hash)return[];let S=vd(a,h,f.unstable_trailingSlashAwareDataRequests,"rsc"),w=!1,k=[];for(let P of s)typeof P.route.shouldRevalidate=="function"?w=!0:k.push(P.route.id);return w&&k.length>0&&S.searchParams.set("_routes",k.join(",")),[S.pathname+S.search]},[h,f.unstable_trailingSlashAwareDataRequests,a,d,s]);return x.createElement(x.Fragment,null,v.map(S=>x.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...u})))}function Km({page:a,matches:s,...u}){let d=jt(),{future:f,manifest:h,routeModules:v}=Yl(),{basename:S}=Kl(),{loaderData:w,matches:k}=Hm(),P=x.useMemo(()=>Jc(a,s,k,h,d,"data"),[a,s,k,h,d]),b=x.useMemo(()=>Jc(a,s,k,h,d,"assets"),[a,s,k,h,d]),_=x.useMemo(()=>{if(a===d.pathname+d.search+d.hash)return[];let O=new Set,I=!1;if(s.forEach(X=>{var V;let te=h.routes[X.route.id];!te||!te.hasLoader||(!P.some(ie=>ie.route.id===X.route.id)&&X.route.id in w&&((V=v[X.route.id])!=null&&V.shouldRevalidate)||te.hasClientLoader?I=!0:O.add(X.route.id))}),O.size===0)return[];let A=vd(a,S,f.unstable_trailingSlashAwareDataRequests,"data");return I&&O.size>0&&A.searchParams.set("_routes",s.filter(X=>O.has(X.route.id)).map(X=>X.route.id).join(",")),[A.pathname+A.search]},[S,f.unstable_trailingSlashAwareDataRequests,w,d,h,P,s,a,v]),B=x.useMemo(()=>Am(b,h),[b,h]),F=qm(b);return x.createElement(x.Fragment,null,_.map(O=>x.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...u})),B.map(O=>x.createElement("link",{key:O,rel:"modulepreload",href:O,...u})),F.map(({key:O,link:I})=>x.createElement("link",{key:O,nonce:u.nonce,...I,crossOrigin:I.crossOrigin??u.crossOrigin})))}function Gm(...a){return s=>{a.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var Ym=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ym&&(window.__reactRouterVersion="7.14.2")}catch{}function Jm({basename:a,children:s,unstable_useTransitions:u,window:d}){let f=x.useRef();f.current==null&&(f.current=Rp({window:d,v5Compat:!0}));let h=f.current,[v,S]=x.useState({action:h.action,location:h.location}),w=x.useCallback(k=>{u===!1?S(k):x.startTransition(()=>S(k))},[u]);return x.useLayoutEffect(()=>h.listen(w),[h,w]),x.createElement(Cm,{basename:a,children:s,location:v.location,navigationType:v.action,navigator:h,unstable_useTransitions:u})}var yd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,At=x.forwardRef(function({onClick:s,discover:u="render",prefetch:d="none",relative:f,reloadDocument:h,replace:v,unstable_mask:S,state:w,target:k,to:P,preventScrollReset:b,viewTransition:_,unstable_defaultShouldRevalidate:B,...F},O){let{basename:I,navigator:A,unstable_useTransitions:X}=x.useContext(kt),te=typeof P=="string"&&yd.test(P),V=ad(P,I);P=V.to;let ie=cm(P,{relative:f}),fe=jt(),ve=null;if(S){let we=Hl(S,[],fe.unstable_mask?fe.unstable_mask.pathname:"/",!0);I!=="/"&&(we.pathname=we.pathname==="/"?I:Tt([I,we.pathname])),ve=A.createHref(we)}let[ue,Fe,He]=Wm(d,F),st=th(P,{replace:v,unstable_mask:S,state:w,target:k,preventScrollReset:b,relative:f,viewTransition:_,unstable_defaultShouldRevalidate:B,unstable_useTransitions:X});function Le(we){s&&s(we),we.defaultPrevented||st(we)}let Re=!(V.isExternal||h),Qe=x.createElement("a",{...F,...He,href:(Re?ve:void 0)||V.absoluteURL||ie,onClick:Re?Le:s,ref:Gm(O,Fe),target:k,"data-discover":!te&&u==="render"?"true":void 0});return ue&&!te?x.createElement(x.Fragment,null,Qe,x.createElement(Vm,{page:ie})):Qe});At.displayName="Link";var Xm=x.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:d="",end:f=!1,style:h,to:v,viewTransition:S,children:w,...k},P){let b=jo(v,{relative:k.relative}),_=jt(),B=x.useContext(Ui),{navigator:F,basename:O}=x.useContext(kt),I=B!=null&&lh(b)&&S===!0,A=F.encodeLocation?F.encodeLocation(b).pathname:b.pathname,X=_.pathname,te=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;u||(X=X.toLowerCase(),te=te?te.toLowerCase():null,A=A.toLowerCase()),te&&O&&(te=Xt(te,O)||te);const V=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let ie=X===A||!f&&X.startsWith(A)&&X.charAt(V)==="/",fe=te!=null&&(te===A||!f&&te.startsWith(A)&&te.charAt(A.length)==="/"),ve={isActive:ie,isPending:fe,isTransitioning:I},ue=ie?s:void 0,Fe;typeof d=="function"?Fe=d(ve):Fe=[d,ie?"active":null,fe?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let He=typeof h=="function"?h(ve):h;return x.createElement(At,{...k,"aria-current":ue,className:Fe,ref:P,style:He,to:v,viewTransition:S},typeof w=="function"?w(ve):w)});Xm.displayName="NavLink";var Zm=x.forwardRef(({discover:a="render",fetcherKey:s,navigate:u,reloadDocument:d,replace:f,state:h,method:v=Ii,action:S,onSubmit:w,relative:k,preventScrollReset:P,viewTransition:b,unstable_defaultShouldRevalidate:_,...B},F)=>{let{unstable_useTransitions:O}=x.useContext(kt),I=ih(),A=ah(S,{relative:k}),X=v.toLowerCase()==="get"?"get":"post",te=typeof S=="string"&&yd.test(S),V=ie=>{if(w&&w(ie),ie.defaultPrevented)return;ie.preventDefault();let fe=ie.nativeEvent.submitter,ve=(fe==null?void 0:fe.getAttribute("formmethod"))||v,ue=()=>I(fe||ie.currentTarget,{fetcherKey:s,method:ve,navigate:u,replace:f,state:h,relative:k,preventScrollReset:P,viewTransition:b,unstable_defaultShouldRevalidate:_});O&&u!==!1?x.startTransition(()=>ue()):ue()};return x.createElement("form",{ref:F,method:X,action:A,onSubmit:d?w:V,...B,"data-discover":!te&&a==="render"?"true":void 0})});Zm.displayName="Form";function eh(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xd(a){let s=x.useContext(wn);return _e(s,eh(a)),s}function th(a,{target:s,replace:u,unstable_mask:d,state:f,preventScrollReset:h,relative:v,viewTransition:S,unstable_defaultShouldRevalidate:w,unstable_useTransitions:k}={}){let P=Ar(),b=jt(),_=jo(a,{relative:v});return x.useCallback(B=>{if(Tm(B,s)){B.preventDefault();let F=u!==void 0?u:xo(b)===xo(_),O=()=>P(a,{replace:F,unstable_mask:d,state:f,preventScrollReset:h,relative:v,viewTransition:S,unstable_defaultShouldRevalidate:w});k?x.startTransition(()=>O()):O()}},[b,P,_,u,d,f,s,a,h,v,S,w,k])}function rh(a){Lt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=x.useRef(Ul(a)),u=x.useRef(!1),d=jt(),f=x.useMemo(()=>Lm(d.search,u.current?null:s.current),[d.search]),h=Ar(),v=x.useCallback((S,w)=>{const k=Ul(typeof S=="function"?S(new URLSearchParams(f)):S);u.current=!0,h("?"+k,w)},[h,f]);return[f,v]}var nh=0,oh=()=>`__${String(++nh)}__`;function ih(){let{router:a}=xd("useSubmit"),{basename:s}=x.useContext(kt),u=km(),d=a.fetch,f=a.navigate;return x.useCallback(async(h,v={})=>{let{action:S,method:w,encType:k,formData:P,body:b}=Dm(h,s);if(v.navigate===!1){let _=v.fetcherKey||oh();await d(_,u,v.action||S,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:P,body:b,formMethod:v.method||w,formEncType:v.encType||k,flushSync:v.flushSync})}else await f(v.action||S,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:P,body:b,formMethod:v.method||w,formEncType:v.encType||k,replace:v.replace,state:v.state,fromRouteId:u,flushSync:v.flushSync,viewTransition:v.viewTransition})},[d,f,s,u])}function ah(a,{relative:s}={}){let{basename:u}=x.useContext(kt),d=x.useContext($t);_e(d,"useFormAction must be used inside a RouteContext");let[f]=d.matches.slice(-1),h={...jo(a||".",{relative:s})},v=jt();if(a==null){h.search=v.search;let S=new URLSearchParams(h.search),w=S.getAll("index");if(w.some(P=>P==="")){S.delete("index"),w.filter(b=>b).forEach(b=>S.append("index",b));let P=S.toString();h.search=P?`?${P}`:""}}return(!a||a===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(h.pathname=h.pathname==="/"?u:Tt([u,h.pathname])),xo(h)}function lh(a,{relative:s}={}){let u=x.useContext(ud);_e(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=xd("useViewTransitionState"),f=jo(a,{relative:s});if(!u.isTransitioning)return!1;let h=Xt(u.currentLocation.pathname,d)||u.currentLocation.pathname,v=Xt(u.nextLocation.pathname,d)||u.nextLocation.pathname;return Fi(f.pathname,v)!=null||Fi(f.pathname,h)!=null}const wd=x.createContext(void 0),Xc="saki_bee_cart";function sh({children:a}){const[s,u]=x.useState([]);x.useEffect(()=>{const k=localStorage.getItem(Xc);if(k)try{u(JSON.parse(k))}catch(P){console.error("Failed to parse cart from localStorage:",P)}},[]),x.useEffect(()=>{localStorage.setItem(Xc,JSON.stringify(s))},[s]);const d=(k,P)=>{const b=k.salePrice??k.price;u(_=>_.find(F=>F.productId===k.id)?_.map(F=>F.productId===k.id?{...F,quantity:F.quantity+P}:F):[..._,{productId:k.id,slug:k.slug,name:k.name,price:b,quantity:P,image:k.image}])},f=k=>{u(P=>P.filter(b=>b.productId!==k))},h=(k,P)=>{if(P<=0){f(k);return}u(b=>b.map(_=>_.productId===k?{..._,quantity:P}:_))},v=()=>{u([])},S=()=>s.reduce((k,P)=>k+P.price*P.quantity,0),w=()=>s.reduce((k,P)=>k+P.quantity,0);return o.jsx(wd.Provider,{value:{cart:s,addToCart:d,removeFromCart:f,updateQuantity:h,clearCart:v,getTotalPrice:S,getTotalItems:w},children:a})}function $r(){const a=x.useContext(wd);if(a===void 0)throw new Error("useCart must be used within CartProvider");return a}const uh={bg:{navAbout:"За нас",navProducts:"Продукти",navContact:"Контакти",heroTitle:"Пчеларски магазин САКИ",heroSubtitle:"Натурален мед от собствени пчелини в Долистово и Коркина, пчеларски инвентар и практични съвети от семейство с над 20 години опит.",heroCtaProducts:"Разгледайте продуктите",heroCtaContact:"Свържете се с нас",heroCtaHoney:"Пчелни продукти",heroCtaEquipment:"Всичко за пчеларя",aboutTitle:"За нас",aboutSubtitle:"Семейна фирма с над 20 години опит в пчеларството, натуралния мед и пчелните продукти",storyTitle:"Нашата история",storyText1:"САКИ е семейна фирма, създадена с любов към пчеларството и чистия, натурален мед. Повече от 20 години се грижим за пчелите си и учим от природата. Натрупаният опит и внимание личат във всеки продукт, който предлагаме.",storyText2:"Започнахме скромно, но останахме верни на най-важното: качество, честност и грижа към природата. За нас пчеларството не е просто работа, а начин на живот.",apiariesTitle:"Нашите пчелини",apiariesText1:"Пчелините ни се намират в селата Долистово и Коркина – места с чиста природа и богато разнообразие от растения. Това създава отлични условия за здрави пчелни семейства и качествен мед.",apiariesText2:"Грижим се за всяко пчелно семейство с внимание и отговорност, за да ви предложим чист мед – без добавки и компромиси.",certificationTitle:"Сертификация и качество",certificationText1:"Медът ни е сертифициран от БАБХ (Българска агенция по безопасност на храните) и се произвежда с постоянен контрол върху качеството.",certificationText2:"При нас ще намерите пчелни продукти, на които можете да разчитате - чисти, полезни и направени с грижа.",cardExperience:"20+ години опит",cardExperienceText:"Практически опит в пчеларството и производството на натурален мед.",cardApiaries:"Собствени пчелини",cardApiariesText:"Разполагаме с пчелини в Долистово и Коркина – сред чиста и богата природа.",cardCertification:"Сертифицирано качество",cardCertificationText:"Медът ни е сертифициран от БАБХ и отговаря на изискванията за безопасност.",cardShop:"Магазин в Дупница",cardShopText:"Ще ни намерите на Кооперативния пазар, павилион 5 – за директни покупки и съвети.",cardProducts:"Богат асортимент",cardProductsText:"Предлагаме мед, кошери, инвентар, центрофуги и пчелни продукти.",cardDelivery:"Бърза доставка",cardDeliveryText:"Доставяме бързо и сигурно в цялата страна.",whyChooseTitle:"Защо да изберете САКИ?",whyChoose1:"Над 20 години опит в пчеларството",whyChoose2:"Собствени пчелини с натурален мед",whyChoose3:"Сертифицирано качество от БАБХ",whyChoose4:"Семейна фирма с честно отношение",whyChoose5:"Богат избор от продукти и оборудване",whyChoose6:"Консултации и помощ за пчелари",productsTitle:"Нашите продукти",productsSubtitle:"Мед, пчелни продукти, кошери, рамки, центрофуги и инвентар за ежедневната работа в пчелина",productInquiry:"Запитване →",productsCta:"Търсите нещо конкретно?",productsCtaButton:"Пишете ни",contactTitle:"Свържете се с нас",contactSubtitle:"Имате въпрос за мед, оборудване или доставка? Пишете ни - ще ви отговорим възможно най-скоро.",address:"Адрес",addressValue:"Кооперативен пазар, павилион 5, гр. Дупница",phone:"Телефон",phoneValue:"089 551 7056",email:"Имейл",emailValue:"info@sakimed.com",website:"Уебсайт",websiteValue:"www.sakimed.com",facebook:"Facebook",facebookValue:"facebook.com/Saki2008",workingHours:"Работно време",workingHoursWeekday:"Понеделник – Петък: 09:00 – 18:00",workingHoursSaturday:"Събота: 09:00 – 14:00",formName:"Име *",formNamePlaceholder:"Вашето име",formEmail:"Имейл *",formEmailPlaceholder:"your@email.com",formPhone:"Телефон",formPhonePlaceholder:"+359 88 123 4567",formMessage:"Съобщение *",formMessagePlaceholder:"Напишете какво ви интересува...",formSubmit:"Изпрати",formSubmitting:"Изпращане...",formSuccess:"Съобщението е изпратено успешно! Ще се свържем с вас скоро.",formError:"Възникна грешка. Опитайте отново.",footerTagline:"Вашият надежден партньор в пчеларството",footerRights:"Всички права запазени."},en:{navAbout:"About",navProducts:"Products",navContact:"Contact",heroTitle:"SAKI Beekeeping Shop",heroSubtitle:"Natural honey from our own apiaries in Dolistovo and Korkina, beekeeping equipment, and practical advice from a family with over 20 years of experience.",heroCtaProducts:"Browse Products",heroCtaContact:"Contact Us",heroCtaHoney:"Bee Products",heroCtaEquipment:"For Beekeepers",aboutTitle:"About Us",aboutSubtitle:"A family business with over 20 years of experience in beekeeping and natural honey production",storyTitle:"Our Story",storyText1:"SAKI is a family-run business built on a genuine love for beekeeping and pure, natural honey. For over 20 years, we have cared for our bees and learned from nature itself. That experience shows in every product we offer.",storyText2:"We started small, but stayed true to what matters most – quality, honesty, and respect for nature. For us, beekeeping is not just a job, but a way of life.",apiariesTitle:"Our Apiaries",apiariesText1:"Our apiaries are located in Dolistovo and Korkina – areas with clean nature and rich plant diversity, ideal for healthy bee colonies.",apiariesText2:"We care for every colony with attention and responsibility to deliver pure honey – with no additives and no compromises.",certificationTitle:"Certification & Quality",certificationText1:"Our honey is certified by BABH (Bulgarian Food Safety Agency) and produced with consistent quality control.",certificationText2:"With us, you’ll find products you can trust – natural, beneficial, and made with care.",cardExperience:"20+ Years Experience",cardExperienceText:"Extensive experience in beekeeping and natural honey production.",cardApiaries:"Own Apiaries",cardApiariesText:"We operate our own apiaries in clean and rich natural environments.",cardCertification:"Certified Quality",cardCertificationText:"Our honey meets all safety and quality standards.",cardShop:"Shop in Dupnitsa",cardShopText:"Visit us at the Cooperative Market, Pavilion 5 for direct purchases and advice.",cardProducts:"Wide Selection",cardProductsText:"Honey, hives, equipment, extractors, and bee products.",cardDelivery:"Fast Delivery",cardDeliveryText:"We deliver quickly and reliably across the country.",whyChooseTitle:"Why Choose SAKI?",whyChoose1:"Over 20 years of beekeeping experience",whyChoose2:"Own apiaries with natural honey",whyChoose3:"Certified quality by BABH",whyChoose4:"Family business built on trust",whyChoose5:"Wide range of products and equipment",whyChoose6:"Support and advice for beekeepers",productsTitle:"Our Products",productsSubtitle:"Honey, bee products, hives, frames, extractors, and tools for everyday apiary work",productInquiry:"Inquiry →",productsCta:"Looking for something specific?",productsCtaButton:"Contact Us",contactTitle:"Contact Us",contactSubtitle:"Have a question about honey, equipment, or delivery? Send us a message and we’ll reply as soon as possible.",address:"Address",addressValue:"Cooperative Market, Pavilion 5, Dupnitsa",phone:"Phone",phoneValue:"089 551 7056",email:"Email",emailValue:"info@sakimed.com",website:"Website",websiteValue:"www.sakimed.com",facebook:"Facebook",facebookValue:"facebook.com/Saki2008",workingHours:"Working Hours",workingHoursWeekday:"Monday – Friday: 09:00 – 18:00",workingHoursSaturday:"Saturday: 09:00 – 14:00",formName:"Name *",formNamePlaceholder:"Your name",formEmail:"Email *",formEmailPlaceholder:"your@email.com",formPhone:"Phone",formPhonePlaceholder:"+359 88 123 4567",formMessage:"Message *",formMessagePlaceholder:"Tell us what you need...",formSubmit:"Send",formSubmitting:"Sending...",formSuccess:"Message sent successfully! We’ll get back to you soon.",formError:"Something went wrong. Please try again.",footerTagline:"Your trusted partner in beekeeping",footerRights:"All rights reserved."}},kd=x.createContext(void 0);function ch({children:a}){const[s,u]=x.useState(()=>{if(typeof window<"u"){const f=localStorage.getItem("language");if(f)return f}return"bg"});x.useEffect(()=>{localStorage.setItem("language",s),document.documentElement.lang=s},[s]);const d=f=>uh[s][f]||f;return o.jsx(kd.Provider,{value:{language:s,setLanguage:u,t:d},children:a})}function Ur(){const a=x.useContext(kd);if(!a)throw new Error("useLanguage must be used within a LanguageProvider");return a}function dh(){return o.jsxs("div",{className:"uk-flag",children:[o.jsx("div",{className:"bg"}),o.jsx("div",{className:"diag white d1"}),o.jsx("div",{className:"diag white d2"}),o.jsx("div",{className:"diag red d1"}),o.jsx("div",{className:"diag red d2"}),o.jsx("div",{className:"cross white horizontal"}),o.jsx("div",{className:"cross white vertical"}),o.jsx("div",{className:"cross red horizontal"}),o.jsx("div",{className:"cross red vertical"}),o.jsx("style",{children:`
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
      `})]})}function fh(){const{language:a,setLanguage:s}=Ur();return o.jsxs("div",{className:"language-switcher",children:[o.jsx("button",{className:`lang-btn ${a==="en"?"active":""}`,onClick:()=>s("en"),"aria-label":"English",title:"English",children:o.jsx(dh,{})}),o.jsx("button",{className:`lang-btn ${a==="bg"?"active":""}`,onClick:()=>s("bg"),"aria-label":"Български",title:"Български",children:o.jsxs("div",{className:"flag-bg",children:[o.jsx("div",{className:"bg-stripe white"}),o.jsx("div",{className:"bg-stripe green"}),o.jsx("div",{className:"bg-stripe red"})]})}),o.jsx("style",{children:`
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
      `})]})}function ph(){const[a,s]=x.useState(!1),{t:u,language:d}=Ur(),{getTotalItems:f}=$r(),h=Ar(),v=jt(),S=w=>{if(s(!1),v.pathname==="/"){const k=document.getElementById(w);k&&k.scrollIntoView({behavior:"smooth"})}else h("/"),setTimeout(()=>{const k=document.getElementById(w);k&&k.scrollIntoView({behavior:"smooth"})},100)};return o.jsxs("header",{className:"header",children:[o.jsxs("div",{className:"container header-container",children:[o.jsx(At,{to:"/",className:"logo",onClick:w=>{s(!1),v.pathname==="/"&&(w.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))},children:o.jsx("img",{src:"/bee-logo.jpg",alt:d==="bg"?"Лого на пчеларски магазин САКИ":"SAKI beekeeping shop logo",className:"logo-img"})}),o.jsxs("nav",{className:`nav ${a?"nav-open":""}`,children:[o.jsx("button",{className:"nav-link",onClick:()=>S("about"),style:{background:"none",border:"none",cursor:"pointer"},children:u("navAbout")}),o.jsx(At,{to:"/products",className:"nav-link",onClick:()=>s(!1),children:u("navProducts")}),o.jsx("button",{className:"nav-link",onClick:()=>S("contact"),style:{background:"none",border:"none",cursor:"pointer"},children:u("navContact")}),o.jsxs(At,{to:"/cart",className:"nav-link cart-link",onClick:()=>s(!1),children:["🛒 ",d==="bg"?"Количка":"Cart",f()>0&&o.jsx("span",{className:"cart-badge",children:f()})]}),o.jsx("div",{className:"nav-lang-switcher",children:o.jsx(fh,{})})]}),o.jsx("button",{className:"menu-toggle",onClick:()=>s(!a),"aria-label":d==="bg"?"Отвори менюто":"Toggle menu",children:o.jsx("span",{className:`hamburger ${a?"open":""}`})})]}),o.jsx("style",{children:`
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
      `})]})}function mh(){const{t:a,language:s}=Ur();return o.jsxs("footer",{className:"footer",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"footer-grid",children:[o.jsxs("div",{className:"footer-brand",children:[o.jsx("div",{className:"footer-logo",children:o.jsx("img",{src:"/bee-logo.jpg",alt:s==="bg"?"Лого на САКИ":"SAKI logo",style:{height:"40px",width:"40px",objectFit:"contain"}})}),o.jsx("p",{children:s==="bg"?"Семеен пчеларски магазин в Дупница с натурален мед, пчелни продукти и оборудване за пчелари.":"A family beekeeping shop in Dupnitsa with natural honey, bee products, and equipment for beekeepers."})]}),o.jsxs("div",{className:"footer-links",children:[o.jsx("h4",{children:s==="bg"?"Бързи връзки":"Quick Links"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx("a",{href:"#about",children:a("navAbout")})}),o.jsx("li",{children:o.jsx("a",{href:"#products",children:a("navProducts")})}),o.jsx("li",{children:o.jsx("a",{href:"#contact",children:a("navContact")})}),o.jsx("li",{children:o.jsx(At,{to:"/admin",rel:"nofollow",style:{color:"rgba(255, 255, 255, 0.3)",fontSize:"0.8rem"},children:s==="bg"?"Админ":"Admin"})})]})]}),o.jsxs("div",{className:"footer-contact",children:[o.jsx("h4",{children:s==="bg"?"Контакти":"Contact"}),o.jsxs("ul",{children:[o.jsxs("li",{children:["📍 ",s==="bg"?"Кооперативен пазар, павилион 5, Дупница":"Cooperative Market, Pavilion 5, Dupnitsa"]}),o.jsx("li",{children:"📞 089 551 7056"}),o.jsx("li",{children:"✉️ info@sakimed.com"}),o.jsx("li",{children:"🌐 www.sakimed.com"}),o.jsxs("li",{children:["📘 ",o.jsx("a",{href:"https://facebook.com/Saki2008",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})]})]})]})]}),o.jsx("div",{className:"footer-bottom",children:o.jsxs("p",{children:["© ",new Date().getFullYear()," САКИ - ",s==="bg"?"Дупница":"Dupnitsa",". ",a("footerRights")]})})]}),o.jsx("style",{children:`
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
      `})]})}function hh(){const{t:a,language:s}=Ur();return o.jsxs("section",{id:"hero",className:"hero",children:[o.jsxs("div",{className:"hero-background",children:[o.jsx("img",{src:"https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:s==="bg"?"Пчеларски магазин САКИ в Дупница - натурален мед и пчеларски инвентар":"SAKI Beekeeping Shop in Dupnitsa - natural honey and beekeeping equipment",className:"hero-image"}),o.jsx("div",{className:"hero-overlay"}),o.jsx("div",{className:"hero-pattern"})]}),o.jsxs("div",{className:"container hero-content",children:[o.jsxs("div",{className:"hero-text",children:[o.jsx("h1",{className:"hero-title",children:a("heroTitle")}),o.jsx("p",{className:"hero-subtitle",children:a("heroSubtitle")}),o.jsxs("div",{className:"hero-cta",children:[o.jsx(At,{to:"/products?category=pchelni-produkti",className:"btn btn-primary",children:a("heroCtaHoney")}),o.jsx(At,{to:"/products?category=pchelarstvo",className:"btn btn-secondary",children:a("heroCtaEquipment")})]})]}),o.jsx("div",{className:"hero-visual",children:o.jsx("img",{src:"/big-bee.png",alt:s==="bg"?"Пчела":"Bee",className:"bee-icon"})})]}),o.jsx("style",{children:`
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
      `})]})}function gh(){const{t:a,language:s}=Ur();return o.jsxs("section",{id:"about",className:"section about",children:[o.jsxs("div",{className:"container",children:[o.jsx("h2",{className:"section-title",children:a("aboutTitle")}),o.jsx("p",{className:"section-subtitle",children:a("aboutSubtitle")}),o.jsx("div",{className:"about-hero-image",children:o.jsx("img",{src:"https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:s==="bg"?"Семейна пчелна ферма САКИ в Долистово и Коркина - натурален пчелен мед":"SAKI family bee farm in Dolistovo and Korkina - natural honey"})}),o.jsxs("div",{className:"about-story",children:[o.jsxs("div",{className:"story-section",children:[o.jsx("h3",{children:a("storyTitle")}),o.jsx("p",{children:a("storyText1")}),o.jsx("p",{children:a("storyText2")})]}),o.jsxs("div",{className:"story-section",children:[o.jsx("h3",{children:a("apiariesTitle")}),o.jsx("p",{children:a("apiariesText1")}),o.jsx("p",{children:a("apiariesText2")})]}),o.jsxs("div",{className:"story-section",children:[o.jsx("h3",{children:a("certificationTitle")}),o.jsx("p",{children:a("certificationText1")}),o.jsx("p",{children:a("certificationText2")})]})]}),o.jsxs("div",{className:"about-grid",children:[o.jsxs("div",{className:"about-card",children:[o.jsx("div",{className:"about-icon",children:"🐝"}),o.jsx("h3",{children:a("cardExperience")}),o.jsx("p",{children:a("cardExperienceText")})]}),o.jsxs("div",{className:"about-card",children:[o.jsx("div",{className:"about-icon",children:"🏡"}),o.jsx("h3",{children:a("cardApiaries")}),o.jsx("p",{children:a("cardApiariesText")})]}),o.jsxs("div",{className:"about-card",children:[o.jsx("div",{className:"about-icon",children:"✅"}),o.jsx("h3",{children:a("cardCertification")}),o.jsx("p",{children:a("cardCertificationText")})]}),o.jsxs("div",{className:"about-card",children:[o.jsx("div",{className:"about-icon",children:"🏪"}),o.jsx("h3",{children:a("cardShop")}),o.jsx("p",{children:a("cardShopText")})]}),o.jsxs("div",{className:"about-card",children:[o.jsx("div",{className:"about-icon",children:"📦"}),o.jsx("h3",{children:a("cardProducts")}),o.jsx("p",{children:a("cardProductsText")})]}),o.jsxs("div",{className:"about-card",children:[o.jsx("div",{className:"about-icon",children:"🚚"}),o.jsx("h3",{children:a("cardDelivery")}),o.jsx("p",{children:a("cardDeliveryText")})]})]}),o.jsx("div",{className:"about-info",children:o.jsxs("div",{className:"about-info-content",children:[o.jsx("h3",{children:a("whyChooseTitle")}),o.jsxs("ul",{className:"about-list",children:[o.jsx("li",{children:a("whyChoose1")}),o.jsx("li",{children:a("whyChoose2")}),o.jsx("li",{children:a("whyChoose3")}),o.jsx("li",{children:a("whyChoose4")}),o.jsx("li",{children:a("whyChoose5")}),o.jsx("li",{children:a("whyChoose6")})]})]})})]}),o.jsx("style",{children:`
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
      `})]})}const gn="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 420 280%22%3E%3Crect width=%22420%22 height=%22280%22 fill=%22%23f8fafc%22/%3E%3Ctext x=%22210%22 y=%22140%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%2390a4ae%22%3EПродукт%3C/text%3E%3C/svg%3E",vh=[{id:1,name:"Кошери и рамки",description:"Кошери Дадан-Блат и Лангстрот, рамки, восъчни основи и части за поддръжка на пчелина",icon:"🏠",image:gn},{id:2,name:"Защитно облекло",description:"Пчеларски костюми, ръкавици, було и практични средства за спокойна работа",icon:"👕",image:gn},{id:3,name:"Центрофуги",description:"Ръчни и електрически центрофуги за внимателно и удобно вадене на мед",icon:"🍯",image:gn},{id:4,name:"Инвентар и инструменти",description:"Пчеларски ножове, вилици, дималки и основни инструменти за всекидневна работа",icon:"🔧",image:gn},{id:5,name:"Подхранване за пчели",description:"Подхранващи сиропи и добавки за силни и добре поддържани пчелни семейства",icon:"🫗",image:gn},{id:6,name:"Прополисов мехлем",description:"Натурален прополисов мехлем за локална грижа за кожата",icon:"🧴",image:gn}];function yh(){const{t:a}=Ur();return o.jsxs("section",{id:"products",className:"section products",children:[o.jsxs("div",{className:"container",children:[o.jsx("h2",{className:"section-title",children:a("productsTitle")}),o.jsx("p",{className:"section-subtitle",children:a("productsSubtitle")}),o.jsx("div",{className:"products-grid",children:vh.map(s=>o.jsxs("div",{className:"product-card",children:[o.jsx("div",{className:"product-image",children:o.jsx("img",{src:s.image,alt:s.name})}),o.jsx("div",{className:"product-icon",children:s.icon}),o.jsx("h3",{className:"product-name",children:s.name}),o.jsx("p",{className:"product-description",children:s.description}),o.jsx("a",{href:"#contact",className:"product-link",children:a("productInquiry")})]},s.id))}),o.jsxs("div",{className:"products-cta",children:[o.jsx("p",{children:a("productsCta")}),o.jsx("a",{href:"#contact",className:"btn btn-primary",children:a("productsCtaButton")})]})]}),o.jsx("style",{children:`
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
      `})]})}const Oi="",xh="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 240%22%3E%3Crect width=%22320%22 height=%22240%22 fill=%22%23f6f8fb%22/%3E%3Ctext x=%22160%22 y=%22120%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%23999%22%3EБез изображение%3C/text%3E%3C/svg%3E";function Ai(a){if(!a)return xh;const s=a.trim();return s.startsWith("/uploads/")?`${Oi}${s}`:s.startsWith("uploads/")?`${Oi}/${s}`:(s.startsWith(`${Oi}/uploads/`)||/^https?:\/\//.test(s),s)}function Jt(a){return`${Oi}${a.startsWith("/")?a:`/${a}`}`}function wh(){const{t:a}=Ur(),[s,u]=x.useState({name:"",email:"",phone:"",message:""}),[d,f]=x.useState({type:null,message:""}),[h,v]=x.useState(!1),S=async k=>{k.preventDefault(),v(!0),f({type:null,message:""});try{const P=await fetch(Jt("/api/contact"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),b=await P.json();P.ok?(f({type:"success",message:a("formSuccess")}),u({name:"",email:"",phone:"",message:""})):f({type:"error",message:b.message||a("formError")})}catch{f({type:"error",message:a("formError")})}finally{v(!1)}},w=k=>{const{name:P,value:b}=k.target;u(_=>({..._,[P]:b}))};return o.jsxs("section",{id:"contact",className:"section contact",children:[o.jsxs("div",{className:"container",children:[o.jsx("h2",{className:"section-title",children:a("contactTitle")}),o.jsx("p",{className:"section-subtitle",children:a("contactSubtitle")}),o.jsxs("div",{className:"contact-grid",children:[o.jsxs("div",{className:"contact-info",children:[o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:"📍"}),o.jsxs("div",{children:[o.jsx("h3",{children:a("address")}),o.jsx("p",{children:a("addressValue")})]})]}),o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:"📞"}),o.jsxs("div",{children:[o.jsx("h3",{children:a("phone")}),o.jsx("p",{children:a("phoneValue")})]})]}),o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:"✉️"}),o.jsxs("div",{children:[o.jsx("h3",{children:a("email")}),o.jsx("p",{children:a("emailValue")})]})]}),o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:"🌐"}),o.jsxs("div",{children:[o.jsx("h3",{children:a("website")}),o.jsx("p",{children:a("websiteValue")})]})]}),o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:"📘"}),o.jsxs("div",{children:[o.jsx("h3",{children:a("facebook")}),o.jsx("p",{children:o.jsx("a",{href:"https://facebook.com/Saki2008",target:"_blank",rel:"noopener noreferrer",children:a("facebookValue")})})]})]}),o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:"🕐"}),o.jsxs("div",{children:[o.jsx("h3",{children:a("workingHours")}),o.jsx("p",{children:a("workingHoursWeekday")}),o.jsx("p",{children:a("workingHoursSaturday")})]})]})]}),o.jsxs("form",{className:"contact-form",onSubmit:S,children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"name",children:a("formName")}),o.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:w,required:!0,placeholder:a("formNamePlaceholder")})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"email",children:a("formEmail")}),o.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:w,required:!0,placeholder:a("formEmailPlaceholder")})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"phone",children:a("formPhone")}),o.jsx("input",{type:"tel",id:"phone",name:"phone",value:s.phone,onChange:w,placeholder:a("formPhonePlaceholder")})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"message",children:a("formMessage")}),o.jsx("textarea",{id:"message",name:"message",value:s.message,onChange:w,required:!0,placeholder:a("formMessagePlaceholder"),rows:5})]}),o.jsx("button",{type:"submit",className:"btn btn-primary",disabled:h,children:a(h?"formSubmitting":"formSubmit")}),d.type&&o.jsx("div",{className:`form-status form-status-${d.type}`,children:d.message})]})]})]}),o.jsx("style",{children:`
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
      `})]})}const Hi="https://www.sakimed.com",Jl="САКИ - пчеларски магазин в Дупница",Xl=`${Hi}/bee-logo.jpg`,jd="САКИ е семеен пчеларски магазин в Дупница. Предлагаме натурален мед от собствени пчелини, прополис, кошери, центрофуги и пчеларски инвентар.";function $i(a="/"){return/^https?:\/\//.test(a)?a:a.startsWith("data:")?Xl:`${Hi}${a.startsWith("/")?a:`/${a}`}`}function kh(){return{"@context":"https://schema.org","@type":"Store",name:"САКИ - пчеларски магазин",alternateName:"SAKI Beekeeping Shop",description:jd,url:Hi,telephone:"+359895517056",email:"info@sakimed.com",image:Xl,priceRange:"$$",foundingDate:"2006",address:{"@type":"PostalAddress",streetAddress:"Кооперативен пазар, павилион 5",addressLocality:"Дупница",postalCode:"2600",addressCountry:"BG"},openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"09:00",closes:"18:00"},{"@type":"OpeningHoursSpecification",dayOfWeek:"Saturday",opens:"09:00",closes:"14:00"}],sameAs:["https://facebook.com/Saki2008"],areaServed:{"@type":"Country",name:"Bulgaria"},makesOffer:[{"@type":"Offer",itemOffered:{"@type":"Product",name:"Натурален пчелен мед"}},{"@type":"Offer",itemOffered:{"@type":"Product",name:"Пчеларски инвентар"}},{"@type":"Offer",itemOffered:{"@type":"Product",name:"Кошери и рамки"}}]}}function jh(){return{"@context":"https://schema.org","@type":"WebSite",name:Jl,url:Hi,inLanguage:"bg-BG",publisher:{"@type":"Organization",name:"САКИ"}}}function Fr(a,s){let u=document.querySelector(`meta[name="${a}"]`);u||(u=document.createElement("meta"),u.name=a,document.head.appendChild(u)),u.content=s}function Mr(a,s){let u=document.querySelector(`meta[property="${a}"]`);u||(u=document.createElement("meta"),u.setAttribute("property",a),document.head.appendChild(u)),u.content=s}function Sh(a){let s=document.querySelector('link[rel="canonical"]');s||(s=document.createElement("link"),s.rel="canonical",document.head.appendChild(s)),s.href=a}function Eh(a){let s=document.querySelector('script[data-page-json-ld="true"]');if(!a){s==null||s.remove();return}s||(s=document.createElement("script"),s.type="application/ld+json",s.dataset.pageJsonLd="true",document.head.appendChild(s)),s.textContent=a}function mt({title:a,description:s,path:u,image:d=Xl,type:f="website",noindex:h=!1,jsonLd:v}){const S=jt(),w=$i(u??S.pathname),k=$i(d),P=v?JSON.stringify(v):"";return x.useEffect(()=>{document.title=a,Sh(w),Fr("description",s),Fr("robots",h?"noindex, nofollow":"index, follow"),Fr("theme-color","#f59e0b"),Mr("og:site_name",Jl),Mr("og:type",f==="product"?"product":f),Mr("og:title",a),Mr("og:description",s),Mr("og:url",w),Mr("og:image",k),Mr("og:locale","bg_BG"),Fr("twitter:card","summary_large_image"),Fr("twitter:title",a),Fr("twitter:description",s),Fr("twitter:image",k),Eh(P)},[w,s,k,P,h,a,f]),null}const Ch=(...a)=>{typeof window<"u"&&(typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),window.gtag(...a))},bh=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function Nh(a){return a.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(s,u,d)=>u>0&&u+s.length!==d.length&&s.search(bh)>-1&&d.charAt(u-2)!==":"&&(d.charAt(u+s.length)!=="-"||d.charAt(u-1)==="-")&&d.charAt(u-1).search(/[^\s-]/)<0?s.toLowerCase():s.substr(1).search(/[A-Z]|\../)>-1?s:s.charAt(0).toUpperCase()+s.substr(1))}function Ph(a){return typeof a=="string"&&a.indexOf("@")!==-1}const _h="REDACTED (Potential Email Address)";function Rh(a){return Ph(a)?(console.warn("This arg looks like an email address, redacting."),_h):a}function Ol(a="",s=!0,u=!0){let d=a||"";return s&&(d=Nh(a)),u&&(d=Rh(d)),d}var Th=class{constructor(){Ee(this,"isInitialized");Ee(this,"_testMode");Ee(this,"_currentMeasurementId");Ee(this,"_hasLoadedGA");Ee(this,"_isQueuing");Ee(this,"_queueGtag");Ee(this,"reset",()=>{this.isInitialized=!1,this._testMode=!1,this._currentMeasurementId="",this._hasLoadedGA=!1,this._isQueuing=!1,this._queueGtag=[]});Ee(this,"_gtag",(...a)=>{this._testMode?this._queueGtag.push(a):this._isQueuing?this._queueGtag.push(a):Ch(...a)});Ee(this,"_loadGA",(a,s,u="https://www.googletagmanager.com/gtag/js")=>{if(!(typeof window>"u"||typeof document>"u")&&!this._hasLoadedGA){const d=document.createElement("script");d.async=!0,d.src=`${u}?id=${a}`,s&&d.setAttribute("nonce",s),document.body.appendChild(d),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},this._hasLoadedGA=!0}});Ee(this,"_toGtagOptions",a=>{if(!a)return;const s={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"};return Object.entries(a).reduce((u,[d,f])=>(s[d]?u[s[d]]=f:u[d]=f,u),{})});Ee(this,"initialize",(a,s={})=>{if(!a)throw new Error("Require GA_MEASUREMENT_ID");const u=typeof a=="string"?[{trackingId:a}]:a;this._currentMeasurementId=u[0].trackingId;const{gaOptions:d,gtagOptions:f,nonce:h,testMode:v=!1,gtagUrl:S}=s;if(this._testMode=v,v||this._loadGA(this._currentMeasurementId,h,S),this.isInitialized||(this._gtag("js",new Date),u.forEach(w=>{const k={...this._toGtagOptions({...d,...w.gaOptions}),...f,...w.gtagOptions};Object.keys(k).length?this._gtag("config",w.trackingId,k):this._gtag("config",w.trackingId)})),this.isInitialized=!0,!v){const w=[...this._queueGtag];for(this._queueGtag=[],this._isQueuing=!1;w.length;){const k=w.shift();this._gtag(...k),k[0]==="get"&&(this._isQueuing=!0)}}});Ee(this,"set",a=>{if(!a){console.warn("`fieldsObject` is required in .set()");return}if(typeof a!="object"){console.warn("Expected `fieldsObject` arg to be an Object");return}Object.keys(a).length===0&&console.warn("empty `fieldsObject` given to .set()"),this._gaCommand("set",a)});Ee(this,"_gaCommandSendEvent",(a,s,u,d,f)=>{this._gtag("event",s,{event_category:a,event_label:u,value:d,...f&&{non_interaction:f.nonInteraction},...this._toGtagOptions(f)})});Ee(this,"_gaCommandSendEventParameters",(...a)=>{if(typeof a[0]=="string")this._gaCommandSendEvent(...a.slice(1));else{const{eventCategory:s,eventAction:u,eventLabel:d,eventValue:f,hitType:h,...v}=a[0];this._gaCommandSendEvent(s,u,d,f,v)}});Ee(this,"_gaCommandSendTiming",(a,s,u,d)=>{this._gtag("event","timing_complete",{name:s,value:u,event_category:a,event_label:d})});Ee(this,"_gaCommandSendPageview",(a,s)=>{if(s&&Object.keys(s).length){const{title:u,location:d,...f}=this._toGtagOptions(s)||{};this._gtag("event","page_view",{...a&&{page_path:a},...u&&{page_title:u},...d&&{page_location:d},...f})}else a?this._gtag("event","page_view",{page_path:a}):this._gtag("event","page_view")});Ee(this,"_gaCommandSendPageviewParameters",(...a)=>{if(typeof a[0]=="string")this._gaCommandSendPageview(...a.slice(1));else{const{page:s,hitType:u,...d}=a[0];this._gaCommandSendPageview(s,d)}});Ee(this,"_gaCommandSend",(...a)=>{const s=typeof a[0]=="string"?a[0]:a[0].hitType;switch(s){case"event":this._gaCommandSendEventParameters(...a);break;case"pageview":this._gaCommandSendPageviewParameters(...a);break;case"timing":this._gaCommandSendTiming(...a.slice(1));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn(`Unsupported send command: ${s}`);break;default:console.warn(`Send command doesn't exist: ${s}`)}});Ee(this,"_gaCommandSet",(...a)=>{typeof a[0]=="string"&&(a[0]={[a[0]]:a[1]}),this._gtag("set",this._toGtagOptions(a[0]))});Ee(this,"_gaCommand",(a,...s)=>{switch(a){case"send":this._gaCommandSend(...s);break;case"set":this._gaCommandSet(...s);break;default:console.warn(`Command doesn't exist: ${a}`)}});Ee(this,"ga",(...a)=>{if(typeof a[0]=="string")this._gaCommand(...a);else{const[s]=a;this._gtag("get",this._currentMeasurementId,"client_id",u=>{this._isQueuing=!1;const d=this._queueGtag;for(s({get:f=>f==="clientId"?u:f==="trackingId"?this._currentMeasurementId:f==="apiVersion"?"1":void 0});d.length;){const f=d.shift();this._gtag(...f)}}),this._isQueuing=!0}return this.ga});Ee(this,"event",(a,s)=>{if(typeof a=="string")this._gtag("event",a,this._toGtagOptions(s));else{const{action:u,category:d,label:f,value:h,nonInteraction:v,transport:S}=a;if(!d||!u){console.warn("args.category AND args.action are required in event()");return}const w={hitType:"event",eventCategory:Ol(d),eventAction:Ol(u)};f&&(w.eventLabel=Ol(f)),typeof h<"u"&&(typeof h!="number"?console.warn("Expected `args.value` arg to be a Number."):w.eventValue=h),typeof v<"u"&&(typeof v!="boolean"?console.warn("`args.nonInteraction` must be a boolean."):w.nonInteraction=v),typeof S<"u"&&(typeof S!="string"?console.warn("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(S)===-1&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),w.transport=S)),this._gaCommand("send",w)}});Ee(this,"send",a=>{this._gaCommand("send",a)});this.reset()}gtag(...a){this._gtag(...a)}},Lh=new Th,Sd=Lh;function zh(){return x.useEffect(()=>{Sd.send({hitType:"pageview",page:window.location.pathname+window.location.search})},[]),o.jsxs(o.Fragment,{children:[o.jsx(mt,{title:"САКИ - пчеларски магазин в Дупница | Натурален мед и пчеларски инвентар",description:jd,path:"/",jsonLd:[kh(),jh()]}),o.jsx(hh,{}),o.jsx(gh,{}),o.jsx(yh,{}),o.jsx(wh,{})]})}function Ih({id:a,slug:s,name:u,price:d,salePrice:f,image:h,onViewDetails:v}){const{addToCart:S}=$r(),w=f??d,k=b=>{b.stopPropagation(),S({id:a,slug:s,name:u,price:d,salePrice:f,image:h},1)},P=()=>{v&&v(s||a)};return o.jsxs("div",{className:"product-card-shopping",onClick:P,children:[o.jsx("div",{className:"product-image-container",children:o.jsx("img",{src:h,alt:u,className:"product-image"})}),o.jsxs("div",{className:"product-card-content",children:[o.jsx("h3",{className:"product-card-name",children:u}),o.jsxs("div",{className:"product-card-price",children:[f&&o.jsxs("span",{className:"old-price",children:[d," лв."]}),o.jsxs("span",{children:[w," лв."]})]}),o.jsxs("div",{className:"product-card-actions",children:[v&&o.jsx("button",{className:"btn btn-link",onClick:b=>{b.stopPropagation(),v(s||a)},children:"Детайли"}),o.jsx("button",{className:"btn btn-primary",onClick:k,children:"Добави в количката"})]})]}),o.jsx("style",{children:`
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
      `})]})}function Dh(){var te;const a=Ar(),[s]=rh(),[u,d]=x.useState([]),[f,h]=x.useState([]),[v,S]=x.useState([]),[w,k]=x.useState(!0),[P,b]=x.useState(""),[_,B]=x.useState("all");x.useEffect(()=>{const V=s.get("category");V==="honey"?B("pchelni-produkti"):V==="equipment"?B("pchelarstvo"):V&&B(V)},[s]),x.useEffect(()=>{(async()=>{try{const[ie,fe,ve]=await Promise.all([fetch(Jt("/api/products")),fetch(Jt("/api/categories")),fetch(Jt("/api/promotions"))]);if(!ie.ok||!fe.ok)throw new Error("Не успяхме да заредим продуктите.");const ue=await ie.json(),Fe=await fe.json(),He=ve.ok?await ve.json():[],st=ue.map(Le=>({...Le,image:Ai(Le.image)}));d(st),h(Fe),S(He)}catch(ie){b(ie instanceof Error?ie.message:"Възникна грешка при зареждането.")}finally{k(!1)}})()},[]);const F=_==="all"?u:u.filter(V=>V.category===_),O=_==="pchelni-produkti"?"Пчелни продукти от САКИ | Натурален мед и прополис":_==="pchelarstvo"?"Пчеларски инвентар и оборудване | САКИ Дупница":"Продукти | Мед и пчеларски инвентар от САКИ",I=(te=f.find(V=>V.slug===_))==null?void 0:te.name,A=v.find(V=>V.active&&V.bannerText),X=_==="pchelni-produkti"?"Разгледайте пчелните продукти на САКИ - натурален мед от собствени пчелини и прополис с гарантирано качество.":_==="pchelarstvo"?"Кошери, рамки, центрофуги, защитно облекло и практичен пчеларски инвентар за начинаещи и опитни пчелари.":"Мед, пчелни продукти, кошери, центрофуги и пчеларски инвентар от семеен магазин САКИ в Дупница.";return o.jsxs(o.Fragment,{children:[o.jsx(mt,{title:O,description:X,path:"/products"}),o.jsxs("div",{className:"products-page",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"products-header",children:[o.jsx("h1",{children:I||"Нашите продукти"}),o.jsx("p",{children:"Натурален мед, пчелни продукти и оборудване за работа в пчелина"})]}),A&&o.jsxs("div",{className:"promotion-banner",children:[o.jsx("strong",{children:A.title}),o.jsx("span",{children:A.bannerText})]}),P&&o.jsx("div",{className:"error-message",children:P}),w?o.jsx("div",{className:"loading",children:"Зареждане..."}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"category-filters",children:[o.jsx("button",{className:`filter-btn ${_==="all"?"active":""}`,onClick:()=>B("all"),children:"Всички продукти"}),f.map(V=>o.jsx("button",{className:`filter-btn ${_===V.slug?"active":""}`,onClick:()=>B(V.slug),children:V.name},V.id))]}),F.length===0?o.jsx("div",{className:"no-products",children:"В тази категория все още няма продукти."}):o.jsx("div",{className:"products-grid",children:F.map(V=>o.jsx(Ih,{id:V.id,slug:V.slug,name:V.name,price:V.price,salePrice:V.salePrice,image:V.image,onViewDetails:ie=>a(`/products/${ie}`)},V.id))})]})]}),o.jsx("style",{children:`
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
      `})]})]})}function Oh(){const{id:a}=pd(),s=Ar(),{addToCart:u}=$r(),[d,f]=x.useState(null),[h,v]=x.useState(!0),[S,w]=x.useState(""),[k,P]=x.useState(1),[b,_]=x.useState(!1);x.useEffect(()=>{(async()=>{try{const ie=await fetch(Jt(`/api/products/${a}`));if(!ie.ok)throw new Error("Продуктът не е намерен.");const fe=await ie.json();fe.image=Ai(fe.image),f(fe)}catch(ie){w(ie instanceof Error?ie.message:"Възникна грешка при зареждането.")}finally{v(!1)}})()},[a]);const B=()=>{d&&(u(d,k),_(!0),setTimeout(()=>_(!1),2e3))};if(h)return o.jsxs(o.Fragment,{children:[o.jsx(mt,{title:"Продукт | САКИ",description:"Продукт от пчеларски магазин САКИ в Дупница.",path:`/products/${a??""}`}),o.jsx("div",{className:"product-detail-page",children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"loading",children:"Зареждане..."})})})]});if(S||!d)return o.jsxs(o.Fragment,{children:[o.jsx(mt,{title:"Продуктът не е намерен | САКИ",description:"Този продукт не е наличен в каталога на САКИ.",path:`/products/${a??""}`,noindex:!0}),o.jsx("div",{className:"product-detail-page",children:o.jsxs("div",{className:"container",children:[o.jsx("div",{className:"error-message",children:S||"Продуктът не е намерен."}),o.jsx("button",{className:"btn btn-primary",onClick:()=>s("/products"),children:"Назад към продуктите"})]})})]});const F=d.categoryName||(d.category==="pchelni-produkti"?"Пчелни продукти":"За пчелари"),O=d.stock>0,I=`${d.name} | ${Jl}`,A=d.salePrice??d.price,X=`${d.description} Цена: ${A} лв. ${O?"В наличност.":"Временно изчерпан."}`,te={"@context":"https://schema.org","@type":"Product",name:d.name,description:d.description,image:$i(d.image),brand:{"@type":"Brand",name:"САКИ"},offers:{"@type":"Offer",url:$i(`/products/${d.slug}`),priceCurrency:"BGN",price:A,availability:O?"https://schema.org/InStock":"https://schema.org/OutOfStock"}};return o.jsxs("div",{className:"product-detail-page",children:[o.jsx(mt,{title:I,description:X,path:`/products/${d.slug}`,image:d.image,type:"product",jsonLd:te}),o.jsxs("div",{className:"container",children:[o.jsx("button",{className:"back-btn",onClick:()=>s("/products"),children:"← Назад"}),o.jsxs("div",{className:"product-detail-container",children:[o.jsx("div",{className:"product-detail-image",children:o.jsx("img",{src:d.image,alt:d.name})}),o.jsxs("div",{className:"product-detail-content",children:[o.jsx("div",{className:"breadcrumb",children:o.jsx("span",{className:"category-badge",children:F})}),o.jsx("h1",{className:"product-detail-name",children:d.name}),o.jsxs("div",{className:"product-detail-price",children:[d.salePrice&&o.jsxs("span",{className:"old-price",children:[d.price," лв."]}),o.jsx("span",{className:"price-amount",children:A}),o.jsx("span",{className:"price-currency",children:"лв."})]}),o.jsxs("div",{className:"product-detail-description",children:[o.jsx("h3",{children:"Описание"}),o.jsx("p",{children:d.description})]}),!O&&o.jsx("div",{className:"stock-warning",children:"В момента няма наличност."}),o.jsxs("div",{className:"product-detail-actions",children:[o.jsxs("div",{className:"quantity-selector",children:[o.jsx("label",{htmlFor:"quantity",children:"Количество:"}),o.jsxs("div",{className:"quantity-controls",children:[o.jsx("button",{className:"qty-btn",onClick:()=>P(Math.max(1,k-1)),disabled:k===1,children:"−"}),o.jsx("input",{id:"quantity",type:"number",min:"1",value:k,onChange:V=>P(parseInt(V.target.value,10)||1),className:"qty-input"}),o.jsx("button",{className:"qty-btn",onClick:()=>P(k+1),children:"+"})]})]}),o.jsx("button",{className:"btn btn-primary btn-large",onClick:B,disabled:!O,children:"Добави в количката"}),b&&o.jsx("div",{className:"added-message",children:"✓ Добавено в количката."})]}),o.jsxs("div",{className:"product-info",children:[o.jsxs("div",{className:"info-item",children:[o.jsx("span",{className:"info-label",children:"Наличност:"}),o.jsx("span",{className:"info-value",children:O?`${d.stock} бр.`:"Временно изчерпан"})]}),o.jsxs("div",{className:"info-item",children:[o.jsx("span",{className:"info-label",children:"Категория:"}),o.jsx("span",{className:"info-value",children:F})]})]})]})]})]}),o.jsx("style",{children:`
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
      `})]})}function Fh({item:a}){const{updateQuantity:s,removeFromCart:u}=$r();return o.jsxs("div",{className:"cart-item",children:[o.jsx("div",{className:"cart-item-image",children:o.jsx("img",{src:a.image,alt:a.name})}),o.jsxs("div",{className:"cart-item-details",children:[o.jsx("h3",{className:"cart-item-name",children:a.name}),o.jsxs("p",{className:"cart-item-price",children:[a.price," лв."]})]}),o.jsxs("div",{className:"cart-item-quantity",children:[o.jsx("button",{className:"qty-btn",onClick:()=>s(a.productId,a.quantity-1),children:"−"}),o.jsx("input",{type:"number",min:"1",value:a.quantity,onChange:d=>s(a.productId,parseInt(d.target.value,10)||1),className:"qty-input"}),o.jsx("button",{className:"qty-btn",onClick:()=>s(a.productId,a.quantity+1),children:"+"})]}),o.jsxs("div",{className:"cart-item-subtotal",children:[(a.price*a.quantity).toFixed(2)," лв."]}),o.jsx("button",{className:"cart-item-remove",onClick:()=>u(a.productId),children:"×"}),o.jsx("style",{children:`
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
      `})]})}function Mh(){const a=Ar(),{cart:s,getTotalPrice:u,clearCart:d}=$r();return s.length===0?o.jsxs("div",{className:"cart-page",children:[o.jsx(mt,{title:"Количка | САКИ",description:"Вашата количка в онлайн магазина на САКИ.",path:"/cart",noindex:!0}),o.jsxs("div",{className:"container",children:[o.jsx("h1",{children:"Вашата количка"}),o.jsxs("div",{className:"empty-cart",children:[o.jsx("div",{className:"empty-icon",children:"🛒"}),o.jsx("p",{children:"Вашата количка е празна"}),o.jsx("button",{className:"btn btn-primary",onClick:()=>a("/products"),children:"Продължи с пазаруване"})]})]}),o.jsx("style",{children:`
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
        `})]}):o.jsxs("div",{className:"cart-page",children:[o.jsx(mt,{title:"Количка | САКИ",description:"Прегледайте продуктите в количката си преди поръчка.",path:"/cart",noindex:!0}),o.jsxs("div",{className:"container",children:[o.jsx("h1",{children:"Вашата количка"}),o.jsxs("div",{className:"cart-layout",children:[o.jsxs("div",{className:"cart-items-section",children:[o.jsxs("div",{className:"cart-items-header",children:[o.jsxs("span",{children:[s.length," продукт",s.length!==1?"и":""]}),o.jsx("button",{className:"link-btn",onClick:d,children:"Изчисти количката"})]}),o.jsx("div",{className:"cart-items",children:s.map(f=>o.jsx(Fh,{item:f},f.productId))})]}),o.jsx("div",{className:"cart-summary",children:o.jsxs("div",{className:"summary-card",children:[o.jsx("h3",{children:"Резюме на поръчката"}),o.jsxs("div",{className:"summary-row",children:[o.jsx("span",{children:"Междинна сума:"}),o.jsxs("span",{children:[u().toFixed(2)," лв."]})]}),o.jsxs("div",{className:"summary-row",children:[o.jsx("span",{children:"Доставка:"}),o.jsx("span",{className:"delivery-note",children:"Зависи от адреса"})]}),o.jsx("div",{className:"summary-divider"}),o.jsxs("div",{className:"summary-row total",children:[o.jsx("span",{children:"Общо:"}),o.jsxs("span",{children:[u().toFixed(2)," лв."]})]}),o.jsx("button",{className:"btn btn-primary btn-block",onClick:()=>a("/checkout"),children:"Към поръчката"}),o.jsx("button",{className:"btn btn-secondary btn-block",onClick:()=>a("/products"),children:"Продължи с пазаруване"}),o.jsx("div",{className:"secure-badge",children:"🔒 Сигурна поръчка"})]})})]})]}),o.jsx("style",{children:`
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
      `})]})}function Ah({onOrderSuccess:a}){const{cart:s,clearCart:u}=$r(),[d,f]=x.useState(!1),[h,v]=x.useState(""),[S,w]=x.useState(!1),[k,P]=x.useState({customerName:"",email:"",phone:"",address:"",notes:""}),b=B=>{const{name:F,value:O}=B.target;P(I=>({...I,[F]:O}))},_=async B=>{B.preventDefault(),v(""),f(!0);try{const F=await fetch(Jt("/api/orders"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerName:k.customerName,email:k.email,phone:k.phone,address:k.address,notes:k.notes,items:s.map(I=>({productId:I.productId,quantity:I.quantity}))})});if(!F.ok){const I=await F.json();throw new Error(I.error||"Failed to create order")}const O=await F.json();w(!0),u(),a&&a(O.order.id),P({customerName:"",email:"",phone:"",address:"",notes:""})}catch(F){v(F instanceof Error?F.message:"Възникна грешка. Моля, опитайте отново.")}finally{f(!1)}};return S?o.jsxs("div",{className:"checkout-success",children:[o.jsx("div",{className:"success-icon",children:"✓"}),o.jsx("h2",{children:"Поръчката е приета!"}),o.jsx("p",{children:"Благодарим ви за поръчката. Ще се свържем с вас за потвърждение."}),o.jsx("p",{className:"success-note",children:"Ако имате въпрос, можете да ни потърсите и по телефона."})]}):o.jsxs("form",{onSubmit:_,className:"checkout-form",children:[o.jsx("h2",{children:"Данни за поръчката"}),h&&o.jsx("div",{className:"form-error",children:h}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"customerName",children:"Име и фамилия *"}),o.jsx("input",{type:"text",id:"customerName",name:"customerName",value:k.customerName,onChange:b,required:!0,placeholder:"Иван Петров"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"phone",children:"Телефон *"}),o.jsx("input",{type:"tel",id:"phone",name:"phone",value:k.phone,onChange:b,required:!0,placeholder:"+359 87 123 4567"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"email",children:"Имейл"}),o.jsx("input",{type:"email",id:"email",name:"email",value:k.email,onChange:b,placeholder:"you@example.com"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"address",children:"Адрес за доставка *"}),o.jsx("textarea",{id:"address",name:"address",value:k.address,onChange:b,required:!0,placeholder:"ул. Пример 123, гр. Дупница",rows:3})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"notes",children:"Бележка към поръчката"}),o.jsx("textarea",{id:"notes",name:"notes",value:k.notes,onChange:b,placeholder:"Уточнения за доставка или продуктите",rows:3})]}),o.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:d||s.length===0,children:d?"Изпращане...":"Изпрати поръчката"}),o.jsx("style",{children:`
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
      `})]})}function $h(){const a=Ar(),{cart:s,getTotalPrice:u}=$r();return s.length===0?o.jsxs("div",{className:"checkout-page",children:[o.jsx(mt,{title:"Поръчка | САКИ",description:"Завършване на поръчка в онлайн магазина на САКИ.",path:"/checkout",noindex:!0}),o.jsx("div",{className:"container",children:o.jsxs("div",{className:"empty-state",children:[o.jsx("p",{children:"Няма продукти в количката"}),o.jsx("button",{className:"btn btn-primary",onClick:()=>a("/products"),children:"Назад към продуктите"})]})})]}):o.jsxs("div",{className:"checkout-page",children:[o.jsx(mt,{title:"Завършване на поръчката | САКИ",description:"Попълнете данните за доставка и изпратете поръчката си към САКИ.",path:"/checkout",noindex:!0}),o.jsxs("div",{className:"container",children:[o.jsx("h1",{children:"Завършване на поръчката"}),o.jsxs("div",{className:"checkout-layout",children:[o.jsx("div",{className:"checkout-form-section",children:o.jsx(Ah,{onOrderSuccess:()=>setTimeout(()=>a("/"),3e3)})}),o.jsx("div",{className:"checkout-summary",children:o.jsxs("div",{className:"summary-card",children:[o.jsx("h3",{children:"Преглед на поръчката"}),o.jsx("div",{className:"order-items",children:s.map(d=>o.jsxs("div",{className:"order-item",children:[o.jsx("span",{className:"item-name",children:d.name}),o.jsxs("span",{className:"item-qty",children:["x",d.quantity]}),o.jsxs("span",{className:"item-price",children:[(d.price*d.quantity).toFixed(2)," лв."]})]},d.productId))}),o.jsx("div",{className:"summary-divider"}),o.jsxs("div",{className:"total-row",children:[o.jsx("span",{children:"Общо:"}),o.jsxs("span",{className:"total-price",children:[u().toFixed(2)," лв."]})]}),o.jsxs("div",{className:"info-box",children:[o.jsx("p",{children:"Важно:"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Проверете внимателно адреса"}),o.jsx("li",{children:"Ще се свържем с вас за потвърждение"}),o.jsx("li",{children:"Срокът за доставка зависи от адреса и наличността"})]})]})]})})]})]}),o.jsx("style",{children:`
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
      `})]})}const zi={HONEY:"Мед",BEE_PRODUCTS:"Пчелни продукти",BEEKEEPING_EQUIPMENT:"Пчеларски инвентар",WAX_FOUNDATIONS:"Восъчни основи",PACKAGING:"Опаковки",OTHER:"Други"},go={PCS:"бр.",KG:"кг",G:"г",LITER:"литър",PACKAGE:"пакет"},Fl={CASH:"в брой",CARD:"карта",BANK:"банка",OTHER:"друго"},Ml={RENT:"Наем",ELECTRICITY:"Ток",FUEL:"Гориво",MATERIALS:"Материали",SALARIES:"Заплати",DELIVERY:"Доставка",ADVERTISING:"Реклама",OTHER:"Други"},vo={sku:"",name:"",category:"HONEY",unit:"PCS",sellPriceEur:"",costPriceEur:"",stockQuantity:"0",minStockQuantity:"0",totalSoldQuantity:"0",active:!0,notes:""};function Yt(){return new Date().toISOString().slice(0,10)}function se(a){return`${Number(a||0).toFixed(2)} EUR`}function Pe(a){return`${(Number(a||0)*1.95583).toFixed(2)} лв.`}function Uh(){const[a,s]=x.useState(()=>localStorage.getItem("admin_token")||""),[u,d]=x.useState(!1),[f,h]=x.useState({email:"",password:""}),[v,S]=x.useState("dashboard"),[w,k]=x.useState(""),[P,b]=x.useState(!1),[_,B]=x.useState(null),[F,O]=x.useState([]),[I,A]=x.useState(""),[X,te]=x.useState("ALL"),[V,ie]=x.useState("ALL"),[fe,ve]=x.useState([]),[ue,Fe]=x.useState(null),[He,st]=x.useState([]),[Le,Re]=x.useState(null),[Qe,we]=x.useState(!1),[Ce,ye]=x.useState(null),[M,J]=x.useState("quick"),[$,j]=x.useState(""),[R,le]=x.useState("monthly"),[H,re]=x.useState(vo),[G,ce]=x.useState({saleDate:Yt(),productId:"",quantity:"1",unitPriceEur:"",paymentMethod:"CASH",notes:""}),[ae,me]=x.useState({expenseDate:Yt(),category:"MATERIALS",amountEur:"",paymentMethod:"CASH",supplier:"",notes:""}),[ne,Ke]=x.useState({transactionDate:Yt(),customerName:"",customerPhone:"",waxReceivedKg:"0",waxPricePerKgEur:"5",foundationGivenKg:"0",foundationPricePerKgEur:"15",extraPaymentEur:"0",foundationProductId:"",notes:""}),[Ze,wr]=x.useState({from:Yt().slice(0,8)+"01",to:Yt()}),kn=x.useMemo(()=>({...a?{Authorization:`Bearer ${a}`}:{}}),[a]);async function We(p,Y={}){const De=await fetch(Jt(p),{...Y,credentials:"include",headers:{"Content-Type":"application/json",...kn,...Y.headers||{}}});if(!De.ok){const ut=await De.json().catch(()=>({error:"Заявката не беше успешна."}));throw new Error(ut.error||"Заявката не беше успешна.")}return De.status===204?null:De.json()}async function zt(){const[p,Y,De,ut,Rn]=await Promise.all([We("/api/admin/erp/dashboard"),We("/api/admin/erp/products"),We("/api/admin/erp/sales"),We(`/api/admin/erp/reports?from=${Ze.from}&to=${Ze.to}`),We("/api/admin/erp/wax-transactions")]);B(p),O(Y),ve(De),Fe(ut),st(Rn)}x.useEffect(()=>{a&&We("/api/auth/me").then(()=>(d(!0),zt())).catch(()=>{s(""),localStorage.removeItem("admin_token")})},[]),x.useEffect(()=>{u&&We(`/api/admin/erp/reports?from=${Ze.from}&to=${Ze.to}`).then(Fe).catch(()=>{})},[Ze.from,Ze.to]);async function jn(p){p.preventDefault(),b(!0),k("");try{const Y=await We("/api/auth/login",{method:"POST",body:JSON.stringify(f)});s(Y.token),localStorage.setItem("admin_token",Y.token),d(!0),await zt()}catch(Y){k(Y instanceof Error?Y.message:"Неуспешен вход.")}finally{b(!1)}}async function So(){await We("/api/auth/logout",{method:"POST"}).catch(()=>{}),s(""),localStorage.removeItem("admin_token"),d(!1)}function Sn(p){Re(p.id),we(!0),re({sku:p.sku||"",name:p.name,category:p.category,unit:p.unit,sellPriceEur:String(p.sellPriceEur),costPriceEur:String(p.costPriceEur),stockQuantity:String(p.stockQuantity),minStockQuantity:String(p.minStockQuantity),totalSoldQuantity:String(p.totalSoldQuantity||0),active:p.active,notes:p.notes||""}),setTimeout(()=>{var Y;(Y=document.querySelector(".erp-card"))==null||Y.scrollIntoView({behavior:"smooth",block:"start"})},0)}async function kr(p){p.preventDefault(),b(!0);try{await We(Le?`/api/admin/erp/products/${Le}`:"/api/admin/erp/products",{method:Le?"PUT":"POST",body:JSON.stringify({...H,sku:H.sku||null,sellPriceEur:Number(H.sellPriceEur),costPriceEur:Number(H.costPriceEur),stockQuantity:Number(H.stockQuantity),minStockQuantity:Number(H.minStockQuantity),totalSoldQuantity:Number(H.totalSoldQuantity)})}),re(vo),Re(null),we(!1),await zt(),k("Продуктът е запазен.")}catch(Y){k(Y instanceof Error?Y.message:"Грешка при запис.")}finally{b(!1)}}function Zt(){Re(null),re(vo),we(!0),setTimeout(()=>{var p;(p=document.querySelector(".storage-editor"))==null||p.scrollIntoView({behavior:"smooth",block:"start"})},0)}async function En(p){p.preventDefault(),b(!0);try{await We(Ce?`/api/admin/erp/sales/${Ce}`:"/api/admin/erp/sales",{method:Ce?"PUT":"POST",body:JSON.stringify({...G,productId:Number(G.productId),quantity:Number(G.quantity),unitPriceEur:G.unitPriceEur?Number(G.unitPriceEur):void 0})}),ye(null),ce({saleDate:Yt(),productId:"",quantity:"1",unitPriceEur:"",paymentMethod:"CASH",notes:""}),await zt(),k(Ce?"Продажбата е редактирана и складът е коригиран.":"Продажбата е добавена и складът е намален.")}catch(Y){k(Y instanceof Error?Y.message:"Грешка при продажба.")}finally{b(!1)}}function Br(p){ye(p.id),S("sales"),J("all"),ce({saleDate:p.saleDate.slice(0,10),productId:String(p.product.id),quantity:String(p.quantity),unitPriceEur:String(p.unitPriceEur),paymentMethod:p.paymentMethod,notes:p.notes||""}),window.scrollTo({top:0,behavior:"smooth"})}function Cn(){S("sales"),J("all")}function bn(p){ce({...G,productId:String(p.id),unitPriceEur:String(p.sellPriceEur)}),j("")}async function Hr(p){if(window.confirm(`Да изтрия ли продажбата за "${p.product.name}"? Количеството ще бъде върнато в склада.`)){b(!0);try{await We(`/api/admin/erp/sales/${p.id}`,{method:"DELETE"}),Ce===p.id&&(ye(null),ce({saleDate:Yt(),productId:"",quantity:"1",unitPriceEur:"",paymentMethod:"CASH",notes:""})),await zt(),k("Продажбата е изтрита и количеството е върнато в склада.")}catch(De){k(De instanceof Error?De.message:"Грешка при изтриване.")}finally{b(!1)}}}async function Nn(p){p.preventDefault(),await We("/api/admin/erp/expenses",{method:"POST",body:JSON.stringify({...ae,amountEur:Number(ae.amountEur)})}),me({expenseDate:Yt(),category:"MATERIALS",amountEur:"",paymentMethod:"CASH",supplier:"",notes:""}),await zt(),k("Разходът е записан.")}async function Wr(p){p.preventDefault(),await We("/api/admin/erp/wax-transactions",{method:"POST",body:JSON.stringify({...ne,waxReceivedKg:Number(ne.waxReceivedKg),waxPricePerKgEur:Number(ne.waxPricePerKgEur),foundationGivenKg:Number(ne.foundationGivenKg),foundationPricePerKgEur:Number(ne.foundationPricePerKgEur),extraPaymentEur:Number(ne.extraPaymentEur),foundationProductId:ne.foundationProductId?Number(ne.foundationProductId):null})}),Ke({...ne,customerName:"",customerPhone:"",waxReceivedKg:"0",foundationGivenKg:"0",extraPaymentEur:"0",notes:""}),await zt(),k("Восъчната сделка е записана.")}const St=F.find(p=>String(p.id)===G.productId),jr=F.filter(p=>p.active).filter(p=>p.name.toLowerCase().includes($.toLowerCase())||String(p.sku||"").includes($)).slice(0,$?12:8),Ut=F.filter(p=>{const Y=[p.sku,p.name,p.notes].join(" ").toLowerCase().includes(I.toLowerCase()),De=X==="ALL"||p.category===X,ut=V==="ALL"||(V==="LOW"?p.stockStatus==="LOW":p.active);return Y&&De&&ut}),Sr=Ut.reduce((p,Y)=>({stockValue:p.stockValue+Number(Y.inventoryValueEur||0),sellValue:p.sellValue+Number(Y.inventorySellValueEur||0),low:p.low+(Y.stockStatus==="LOW"?1:0)}),{stockValue:0,sellValue:0,low:0}),Pn=Number(ne.waxReceivedKg||0)*Number(ne.waxPricePerKgEur||0),_n=Number(ne.foundationGivenKg||0)*Number(ne.foundationPricePerKgEur||0),Wi=Pn-_n-Number(ne.extraPaymentEur||0);return u?o.jsxs("div",{className:"erp-shell",children:[o.jsx(mt,{title:"SakiMed ERP | Админ",description:"Частен back-office ERP панел за SakiMed.",path:"/admin",noindex:!0}),o.jsxs("div",{className:"erp-wrap",children:[o.jsxs("header",{className:"erp-header",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"SakiMed ERP"}),o.jsx("p",{children:"Оборот, склад, разходи и восък"})]}),o.jsx("button",{className:"erp-btn ghost",onClick:So,children:"Изход"})]}),w&&o.jsx("p",{className:"status",children:w}),o.jsx("nav",{className:"erp-tabs",children:[["dashboard","Табло"],["sales","Продажби"],["products","Склад"],["reports","Справки"],["expenses","Разходи"],["wax","Восък"]].map(([p,Y])=>o.jsx("button",{className:v===p?"active":"",onClick:()=>S(p),children:Y},p))}),v==="dashboard"&&_&&o.jsxs(o.Fragment,{children:[o.jsxs("section",{className:"metric-grid",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Днес оборот"}),o.jsx("strong",{children:se(_.todayTurnoverEur)}),o.jsx("small",{children:Pe(_.todayTurnoverEur)})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Днес печалба"}),o.jsx("strong",{children:se(_.todayProfitEur)}),o.jsx("small",{children:Pe(_.todayProfitEur)})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Месец оборот"}),o.jsx("strong",{children:se(_.monthlyTurnoverEur)}),o.jsx("small",{children:Pe(_.monthlyTurnoverEur)})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Месец печалба"}),o.jsx("strong",{children:se(_.monthlyProfitEur)}),o.jsx("small",{children:Pe(_.monthlyProfitEur)})]})]}),o.jsxs("section",{className:"erp-columns",children:[o.jsx(vn,{title:"Ниска наличност",children:_.lowStockProducts.map(p=>o.jsx(yn,{title:p.name,meta:`${p.stockQuantity} ${go[p.unit]} минимум ${p.minStockQuantity}`},p.id))}),o.jsxs(vn,{title:"Последни продажби",children:[o.jsx("button",{className:"inline-action",onClick:Cn,children:"Виж всички продажби"}),_.latestSales.map(p=>o.jsxs("div",{className:"row-with-action",children:[o.jsx(yn,{title:p.product.name,meta:`${p.quantity} x ${se(p.unitPriceEur)} = ${se(p.totalEur)}`}),o.jsxs("div",{className:"mini-actions",children:[o.jsx("button",{className:"mini-btn",onClick:()=>Br(p),children:"Редакция"}),o.jsx("button",{className:"mini-btn danger",onClick:()=>Hr(p),children:"Изтрий"})]})]},p.id))]}),o.jsx(vn,{title:"Последни сделки с восък",children:_.latestWaxTransactions.map(p=>o.jsx(yn,{title:p.customerName,meta:`Баланс ${se(p.balanceEur)} | восък ${p.waxReceivedKg} кг`},p.id))})]})]}),v==="sales"&&o.jsxs("section",{className:"sales-layout",children:[o.jsxs("form",{className:"erp-card sale-card",onSubmit:En,children:[o.jsxs("div",{className:"sale-card-head",children:[o.jsxs("div",{children:[o.jsx("h2",{children:Ce?"Редакция на продажба":"Бърза продажба"}),o.jsx("p",{children:St?St.name:"Изберете продукт и въведете количество"})]}),o.jsx("input",{type:"date",value:G.saleDate,onChange:p=>ce({...G,saleDate:p.target.value})})]}),o.jsxs("div",{className:"quick-search",children:[o.jsx("input",{placeholder:"Търси продукт или ИД",value:$,onChange:p=>j(p.target.value)}),o.jsxs("select",{value:G.productId,onChange:p=>{const Y=F.find(De=>String(De.id)===p.target.value);Y?bn(Y):ce({...G,productId:"",unitPriceEur:""})},required:!0,children:[o.jsx("option",{value:"",children:"Всички продукти"}),F.filter(p=>p.active).map(p=>o.jsx("option",{value:p.id,children:p.name},p.id))]})]}),o.jsx("div",{className:"quick-products",children:jr.map(p=>o.jsxs("button",{type:"button",className:G.productId===String(p.id)?"selected":"",onClick:()=>bn(p),children:[o.jsx("strong",{children:p.name}),o.jsxs("span",{children:[se(p.sellPriceEur)," · ",p.stockQuantity," ",go[p.unit]]})]},p.id))}),o.jsxs("div",{className:"sale-input-grid",children:[o.jsxs("label",{children:["Количество",o.jsx("input",{inputMode:"decimal",type:"number",step:"0.001",min:"0.001",value:G.quantity,onChange:p=>ce({...G,quantity:p.target.value}),required:!0})]}),o.jsxs("label",{children:["Цена EUR",o.jsx("input",{inputMode:"decimal",type:"number",step:"0.01",min:"0",value:G.unitPriceEur,onChange:p=>ce({...G,unitPriceEur:p.target.value})})]})]}),o.jsx("div",{className:"payment-pills",children:Object.entries(Fl).map(([p,Y])=>o.jsx("button",{type:"button",className:G.paymentMethod===p?"active":"",onClick:()=>ce({...G,paymentMethod:p}),children:Y},p))}),o.jsx("textarea",{className:"sale-note",placeholder:"Бележка",value:G.notes,onChange:p=>ce({...G,notes:p.target.value})}),o.jsxs("div",{className:"sale-total-bar",children:[o.jsx("span",{children:"Общо"}),o.jsx("strong",{children:se(Number(G.quantity||0)*Number(G.unitPriceEur||(St==null?void 0:St.sellPriceEur)||0))}),o.jsx("small",{children:Pe(Number(G.quantity||0)*Number(G.unitPriceEur||(St==null?void 0:St.sellPriceEur)||0))})]}),o.jsxs("div",{className:"actions sale-actions",children:[o.jsx("button",{className:"erp-btn primary",disabled:P,children:Ce?"Запази продажба":"Продай"}),Ce&&o.jsx("button",{type:"button",className:"erp-btn ghost",onClick:()=>{ye(null),ce({saleDate:Yt(),productId:"",quantity:"1",unitPriceEur:"",paymentMethod:"CASH",notes:""})},children:"Отказ"})]})]}),o.jsxs("section",{className:"sales-main",children:[o.jsxs("nav",{className:"report-tabs",children:[o.jsx("button",{className:M==="quick"?"active":"",onClick:()=>J("quick"),children:"Последни"}),o.jsx("button",{className:M==="all"?"active":"",onClick:()=>J("all"),children:"Всички продажби"})]}),M==="quick"&&o.jsxs(vn,{title:"Последни продажби",children:[o.jsx("button",{className:"inline-action",onClick:Cn,children:"Виж всички продажби"}),fe.slice(0,12).map(p=>o.jsxs("div",{className:"row-with-action",children:[o.jsx(yn,{title:p.product.name,meta:`${new Date(p.saleDate).toLocaleDateString("bg-BG")} | ${p.quantity} | ${se(p.totalEur)} | печалба ${se(p.profitEur)}`}),o.jsxs("div",{className:"mini-actions",children:[o.jsx("button",{className:"mini-btn",onClick:()=>Br(p),children:"Редакция"}),o.jsx("button",{className:"mini-btn danger",onClick:()=>Hr(p),children:"Изтрий"})]})]},p.id))]}),M==="all"&&o.jsx("div",{className:"report-table-wrap",children:o.jsxs("table",{className:"report-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Дата"}),o.jsx("th",{children:"Продукт"}),o.jsx("th",{children:"Количество"}),o.jsx("th",{children:"Цена"}),o.jsx("th",{children:"Оборот"}),o.jsx("th",{children:"Печалба"}),o.jsx("th",{children:"Плащане"}),o.jsx("th",{children:"Действия"})]})}),o.jsx("tbody",{children:fe.map(p=>o.jsxs("tr",{children:[o.jsx("td",{"data-label":"Дата",children:new Date(p.saleDate).toLocaleDateString("bg-BG")}),o.jsx("td",{"data-label":"Продукт",children:p.product.name}),o.jsx("td",{"data-label":"Количество",children:p.quantity}),o.jsx("td",{"data-label":"Цена",children:se(p.unitPriceEur)}),o.jsxs("td",{"data-label":"Оборот",children:[se(p.totalEur),o.jsx("small",{children:Pe(p.totalEur)})]}),o.jsx("td",{"data-label":"Печалба",children:se(p.profitEur)}),o.jsx("td",{"data-label":"Плащане",children:Fl[p.paymentMethod]}),o.jsx("td",{"data-label":"Действия",children:o.jsxs("div",{className:"mini-actions",children:[o.jsx("button",{className:"mini-btn",onClick:()=>Br(p),children:"Редакция"}),o.jsx("button",{className:"mini-btn danger",onClick:()=>Hr(p),children:"Изтрий"})]})})]},p.id))})]})})]})]}),v==="products"&&o.jsx("section",{className:"storage-layout",children:o.jsxs("section",{className:"storage-main",children:[o.jsxs("div",{className:"storage-toolbar",children:[o.jsx("input",{placeholder:"Търсене по име, ИД или бележка",value:I,onChange:p=>A(p.target.value)}),o.jsxs("select",{value:X,onChange:p=>te(p.target.value),children:[o.jsx("option",{value:"ALL",children:"Всички категории"}),Object.entries(zi).map(([p,Y])=>o.jsx("option",{value:p,children:Y},p))]}),o.jsxs("select",{value:V,onChange:p=>ie(p.target.value),children:[o.jsx("option",{value:"ALL",children:"Всички"}),o.jsx("option",{value:"LOW",children:"Ниска наличност"}),o.jsx("option",{value:"ACTIVE",children:"Активни"})]}),o.jsx("button",{className:"erp-btn primary",onClick:Zt,children:"Нов продукт"})]}),Qe&&o.jsxs("form",{className:"storage-editor",onSubmit:kr,children:[o.jsxs("div",{className:"storage-editor-head",children:[o.jsx("h2",{children:Le?"Редакция на продукт":"Нов продукт"}),o.jsx("button",{type:"button",className:"mini-btn",onClick:()=>{we(!1),Re(null),re(vo)},children:"Затвори"})]}),o.jsxs("div",{className:"editor-grid",children:[o.jsx("input",{placeholder:"ИД / код от склада",value:H.sku,onChange:p=>re({...H,sku:p.target.value})}),o.jsx("input",{placeholder:"Име",value:H.name,onChange:p=>re({...H,name:p.target.value}),required:!0}),o.jsx("select",{value:H.category,onChange:p=>re({...H,category:p.target.value}),children:Object.entries(zi).map(([p,Y])=>o.jsx("option",{value:p,children:Y},p))}),o.jsx("select",{value:H.unit,onChange:p=>re({...H,unit:p.target.value}),children:Object.entries(go).map(([p,Y])=>o.jsx("option",{value:p,children:Y},p))}),o.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Продажна EUR",value:H.sellPriceEur,onChange:p=>re({...H,sellPriceEur:p.target.value}),required:!0}),o.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Доставна EUR",value:H.costPriceEur,onChange:p=>re({...H,costPriceEur:p.target.value}),required:!0}),o.jsx("input",{type:"number",step:"0.001",min:"0",placeholder:"Наличност",value:H.stockQuantity,onChange:p=>re({...H,stockQuantity:p.target.value})}),o.jsx("input",{type:"number",step:"0.001",min:"0",placeholder:"Минимум",value:H.minStockQuantity,onChange:p=>re({...H,minStockQuantity:p.target.value})}),o.jsx("input",{type:"number",step:"0.001",min:"0",placeholder:"Общо продадени",value:H.totalSoldQuantity,onChange:p=>re({...H,totalSoldQuantity:p.target.value})}),o.jsxs("label",{className:"check",children:[o.jsx("input",{type:"checkbox",checked:H.active,onChange:p=>re({...H,active:p.target.checked})})," Активен"]}),o.jsx("textarea",{placeholder:"Бележки",value:H.notes,onChange:p=>re({...H,notes:p.target.value})}),o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"erp-btn primary",disabled:P,children:"Запази"}),Le&&o.jsx("button",{type:"button",className:"erp-btn ghost",onClick:()=>{Re(null),re(vo),we(!1)},children:"Отказ"})]})]})]}),o.jsxs("section",{className:"metric-grid compact",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Артикули"}),o.jsx("strong",{children:Ut.length}),o.jsx("small",{children:"показани"})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Ниска наличност"}),o.jsx("strong",{children:Sr.low}),o.jsx("small",{children:"за проверка"})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Стойност склад"}),o.jsx("strong",{children:se(Sr.stockValue)}),o.jsx("small",{children:Pe(Sr.stockValue)})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Продажна стойност"}),o.jsx("strong",{children:se(Sr.sellValue)}),o.jsx("small",{children:Pe(Sr.sellValue)})]})]}),o.jsx("div",{className:"storage-hint",children:"Таблицата се скролира вертикално и хоризонтално."}),o.jsx("div",{className:"storage-table-wrap",children:o.jsxs("table",{className:"storage-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"ИД"}),o.jsx("th",{children:"Продукт"}),o.jsx("th",{children:"Категория"}),o.jsx("th",{children:"Наличност"}),o.jsx("th",{children:"Дост."}),o.jsx("th",{children:"Прод."}),o.jsx("th",{children:"Печалба"}),o.jsx("th",{children:"Продадени"}),o.jsx("th",{children:"Стойност"})]})}),o.jsx("tbody",{children:Ut.map(p=>o.jsxs("tr",{onClick:()=>Sn(p),className:p.stockStatus==="LOW"?"low":"",children:[o.jsx("td",{"data-label":"ИД",children:p.sku||p.id}),o.jsxs("td",{"data-label":"Продукт",children:[o.jsx("strong",{children:p.name}),o.jsx("small",{children:p.active?"Активен":"Спрян"})]}),o.jsx("td",{"data-label":"Категория",children:zi[p.category]}),o.jsxs("td",{"data-label":"Наличност",children:[p.stockQuantity," ",go[p.unit],o.jsxs("small",{children:["мин. ",p.minStockQuantity]})]}),o.jsx("td",{"data-label":"Дост.",children:se(p.costPriceEur)}),o.jsxs("td",{"data-label":"Прод.",children:[se(p.sellPriceEur),o.jsx("small",{children:Pe(p.sellPriceEur)})]}),o.jsx("td",{"data-label":"Печалба",children:se(p.unitProfitEur)}),o.jsx("td",{"data-label":"Продадени",children:p.totalSoldQuantity||0}),o.jsxs("td",{"data-label":"Стойност",children:[se(p.inventoryValueEur),o.jsx("small",{children:Pe(p.inventoryValueEur)})]})]},p.id))})]})})]})}),v==="reports"&&ue&&o.jsxs("section",{className:"report-stack",children:[o.jsxs("div",{className:"filters",children:[o.jsx("input",{type:"date",value:Ze.from,onChange:p=>wr({...Ze,from:p.target.value})}),o.jsx("input",{type:"date",value:Ze.to,onChange:p=>wr({...Ze,to:p.target.value})}),o.jsx("a",{className:"erp-btn primary",href:Jt(`/api/admin/erp/reports.csv?from=${Ze.from}&to=${Ze.to}`),children:"CSV export"})]}),o.jsxs("section",{className:"metric-grid",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Оборот"}),o.jsx("strong",{children:se(ue.totals.turnoverEur)}),o.jsx("small",{children:Pe(ue.totals.turnoverEur)})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Брутна печалба"}),o.jsx("strong",{children:se(ue.totals.grossProfitEur)}),o.jsx("small",{children:Pe(ue.totals.grossProfitEur)})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Разходи"}),o.jsx("strong",{children:se(ue.totals.expensesEur)}),o.jsx("small",{children:Pe(ue.totals.expensesEur)})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Нетна печалба"}),o.jsx("strong",{children:se(ue.totals.netProfitEur)}),o.jsx("small",{children:Pe(ue.totals.netProfitEur)})]})]}),o.jsx("nav",{className:"report-tabs",children:[["monthly","Месечни"],["daily","Дневни"],["products","Продадени продукти"],["expenses","Разходи"],["low-stock","Ниска наличност"]].map(([p,Y])=>o.jsx("button",{className:R===p?"active":"",onClick:()=>le(p),children:Y},p))}),R==="monthly"&&o.jsx(yo,{headers:["Месец","Оборот","Печалба","Разходи","Нетна печалба","Продадени","Редове"],rows:ue.monthly.map(p=>[new Date(p.month).toLocaleDateString("bg-BG",{month:"long",year:"numeric"}),`${se(p.turnover_eur)} / ${Pe(p.turnover_eur)}`,`${se(p.profit_eur)} / ${Pe(p.profit_eur)}`,`${se(p.expenses_eur)} / ${Pe(p.expenses_eur)}`,`${se(Number(p.profit_eur||0)-Number(p.expenses_eur||0))}`,String(p.sold_quantity||0),String(p.sold_lines||0)])}),R==="daily"&&o.jsx(yo,{headers:["Дата","Оборот","Каса","Печалба","Разходи","Остатък","Продадени"],rows:ue.daily.map(p=>{const Y=Number(p.turnover_eur||0),De=Number(p.profit_eur||0),ut=Number(p.expenses_eur||0);return[new Date(p.day).toLocaleDateString("bg-BG"),`${se(Y)} / ${Pe(Y)}`,Pe(Y),`${se(De)} / ${Pe(De)}`,`${se(ut)} / ${Pe(ut)}`,Pe(Math.max(Y-ut,0)),String(p.sold_quantity||0)]})}),R==="products"&&o.jsx(yo,{headers:["Продукт","Количество","Оборот","Печалба","Средна цена"],rows:ue.salesByProduct.map(p=>[p.product_name,String(p.quantity),se(p.turnover_eur),se(p.profit_eur),se(Number(p.turnover_eur||0)/Math.max(Number(p.quantity||0),1))])}),R==="expenses"&&o.jsx(yo,{headers:["Категория","Разход EUR","Разход BGN"],rows:ue.expensesByCategory.map(p=>[Ml[p.category],se(p._sum.amountEur||0),Pe(p._sum.amountEur||0)])}),R==="low-stock"&&o.jsx("div",{className:"scroll-panel",children:o.jsx(yo,{headers:["Продукт","Категория","Наличност","Минимум","Стойност"],rows:ue.lowStockProducts.map(p=>[p.name,zi[p.category],`${p.stockQuantity} ${go[p.unit]}`,String(p.minStockQuantity),se(p.inventoryValueEur||p.stockQuantity*p.costPriceEur)])})})]}),v==="expenses"&&o.jsxs("section",{className:"erp-grid",children:[o.jsxs("form",{className:"erp-card",onSubmit:Nn,children:[o.jsx("h2",{children:"Нов разход"}),o.jsx("input",{type:"date",value:ae.expenseDate,onChange:p=>me({...ae,expenseDate:p.target.value})}),o.jsx("select",{value:ae.category,onChange:p=>me({...ae,category:p.target.value}),children:Object.entries(Ml).map(([p,Y])=>o.jsx("option",{value:p,children:Y},p))}),o.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Сума EUR",value:ae.amountEur,onChange:p=>me({...ae,amountEur:p.target.value}),required:!0}),o.jsx("select",{value:ae.paymentMethod,onChange:p=>me({...ae,paymentMethod:p.target.value}),children:Object.entries(Fl).map(([p,Y])=>o.jsx("option",{value:p,children:Y},p))}),o.jsx("input",{placeholder:"Доставчик",value:ae.supplier,onChange:p=>me({...ae,supplier:p.target.value})}),o.jsx("textarea",{placeholder:"Бележка",value:ae.notes,onChange:p=>me({...ae,notes:p.target.value})}),o.jsx("button",{className:"erp-btn primary",children:"Запази разход"})]}),o.jsx(vn,{title:"Справка разходи",children:ue==null?void 0:ue.expensesByCategory.map(p=>o.jsx(yn,{title:Ml[p.category],meta:se(p._sum.amountEur||0)},p.category))})]}),v==="wax"&&o.jsxs("section",{className:"erp-grid",children:[o.jsxs("form",{className:"erp-card",onSubmit:Wr,children:[o.jsx("h2",{children:"Обмен / изкупуване на восък"}),o.jsx("input",{type:"date",value:ne.transactionDate,onChange:p=>Ke({...ne,transactionDate:p.target.value})}),o.jsx("input",{placeholder:"Име на клиент",value:ne.customerName,onChange:p=>Ke({...ne,customerName:p.target.value}),required:!0}),o.jsx("input",{placeholder:"Телефон",value:ne.customerPhone,onChange:p=>Ke({...ne,customerPhone:p.target.value})}),o.jsxs("div",{className:"two",children:[o.jsx("input",{type:"number",step:"0.001",min:"0",placeholder:"Приет восък кг",value:ne.waxReceivedKg,onChange:p=>Ke({...ne,waxReceivedKg:p.target.value})}),o.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Цена восък EUR/кг",value:ne.waxPricePerKgEur,onChange:p=>Ke({...ne,waxPricePerKgEur:p.target.value})})]}),o.jsxs("select",{value:ne.foundationProductId,onChange:p=>Ke({...ne,foundationProductId:p.target.value}),children:[o.jsx("option",{value:"",children:"Восъчни основи от склада"}),F.filter(p=>p.category==="WAX_FOUNDATIONS").map(p=>o.jsx("option",{value:p.id,children:p.name},p.id))]}),o.jsxs("div",{className:"two",children:[o.jsx("input",{type:"number",step:"0.001",min:"0",placeholder:"Дадени основи кг",value:ne.foundationGivenKg,onChange:p=>Ke({...ne,foundationGivenKg:p.target.value})}),o.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Цена основи EUR/кг",value:ne.foundationPricePerKgEur,onChange:p=>Ke({...ne,foundationPricePerKgEur:p.target.value})})]}),o.jsx("input",{type:"number",step:"0.01",min:"0",placeholder:"Доплащане EUR",value:ne.extraPaymentEur,onChange:p=>Ke({...ne,extraPaymentEur:p.target.value})}),o.jsx("textarea",{placeholder:"Бележка",value:ne.notes,onChange:p=>Ke({...ne,notes:p.target.value})}),o.jsxs("div",{className:"form-total",children:["Стойност восък ",se(Pn)," | Основи ",se(_n)," | Баланс ",se(Wi)]}),o.jsx("button",{className:"erp-btn primary",children:"Запази сделка"})]}),o.jsx(vn,{title:"Последни сделки",children:He.map(p=>o.jsx(yn,{title:p.customerName,meta:`${new Date(p.transactionDate).toLocaleDateString("bg-BG")} | баланс ${se(p.balanceEur)} | восък ${p.waxReceivedKg} кг`},p.id))})]})]}),o.jsx("style",{children:Zc})]}):o.jsxs("div",{className:"erp-login",children:[o.jsx(mt,{title:"ERP вход | SakiMed",description:"Вход в частната ERP система на SakiMed.",path:"/admin",noindex:!0}),o.jsxs("form",{className:"login-box",onSubmit:jn,children:[o.jsx("h1",{children:"SakiMed ERP"}),o.jsx("label",{children:"Имейл"}),o.jsx("input",{type:"email",value:f.email,onChange:p=>h({...f,email:p.target.value}),required:!0}),o.jsx("label",{children:"Парола"}),o.jsx("input",{type:"password",value:f.password,onChange:p=>h({...f,password:p.target.value}),required:!0}),w&&o.jsx("p",{className:"status error",children:w}),o.jsx("button",{className:"erp-btn primary",disabled:P,children:P?"Влизане...":"Вход"})]}),o.jsx("style",{children:Zc})]})}function vn({title:a,children:s}){return o.jsxs("section",{className:"erp-panel",children:[o.jsx("h2",{children:a}),o.jsx("div",{className:"panel-list",children:s})]})}function yn({title:a,meta:s}){return o.jsxs("div",{className:"erp-row",children:[o.jsx("strong",{children:a}),o.jsx("span",{children:s})]})}function yo({headers:a,rows:s}){return o.jsx("div",{className:"report-table-wrap",children:o.jsxs("table",{className:"report-table",children:[o.jsx("thead",{children:o.jsx("tr",{children:a.map(u=>o.jsx("th",{children:u},u))})}),o.jsxs("tbody",{children:[s.length===0&&o.jsx("tr",{children:o.jsx("td",{colSpan:a.length,children:"Няма данни за избрания период."})}),s.map((u,d)=>o.jsx("tr",{children:u.map((f,h)=>o.jsx("td",{"data-label":a[h],children:f},`${d}-${h}`))},d))]})]})})}const Zc=`
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
`;function Bh(){const{slug:a}=pd(),[s,u]=x.useState(null),[d,f]=x.useState(!0),[h,v]=x.useState("");return x.useEffect(()=>{async function S(){try{const w=await fetch(Jt(`/api/landing-pages/${a}`));if(!w.ok)throw new Error("Страницата не е намерена.");u(await w.json())}catch(w){v(w instanceof Error?w.message:"Възникна грешка.")}finally{f(!1)}}S()},[a]),d?o.jsx("div",{className:"container",style:{padding:"3rem 0"},children:"Зареждане..."}):h||!s?o.jsxs("div",{className:"container",style:{padding:"3rem 0"},children:[o.jsx(mt,{title:"Страницата не е намерена | САКИ",description:"Тази специална страница не е налична.",path:`/special/${a??""}`,noindex:!0}),o.jsx("p",{children:h||"Страницата не е намерена."}),o.jsx(At,{to:"/products",className:"btn btn-primary",children:"Към продуктите"})]}):o.jsxs("div",{className:"special-page",children:[o.jsx(mt,{title:s.seoTitle||`${s.title} | САКИ`,description:s.seoDescription||s.heroSubtitle||"Специална страница от пчеларски магазин САКИ.",path:`/special/${s.slug}`,image:s.heroImage||void 0}),o.jsxs("section",{className:"special-hero",children:[s.heroImage&&o.jsx("img",{src:Ai(s.heroImage),alt:s.heroTitle}),o.jsxs("div",{className:"container special-hero-content",children:[o.jsx("h1",{children:s.heroTitle}),s.heroSubtitle&&o.jsx("p",{children:s.heroSubtitle}),s.ctaText&&s.ctaLink&&o.jsx(At,{to:s.ctaLink,className:"btn btn-primary",children:s.ctaText})]})]}),o.jsx("section",{className:"container special-sections",children:s.sections.map((S,w)=>o.jsxs("article",{className:"special-section",children:[S.image&&o.jsx("img",{src:Ai(S.image),alt:S.title||s.title}),o.jsxs("div",{children:[S.title&&o.jsx("h2",{children:S.title}),S.body&&o.jsx("p",{children:S.body})]})]},`${S.title}-${w}`))}),o.jsx("style",{children:`
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
      `})]})}function Hh(){return o.jsx(ch,{children:o.jsx(sh,{children:o.jsxs(Jm,{children:[o.jsx(ph,{}),o.jsx("main",{children:o.jsxs(bm,{children:[o.jsx(xr,{path:"/",element:o.jsx(zh,{})}),o.jsx(xr,{path:"/products",element:o.jsx(Dh,{})}),o.jsx(xr,{path:"/products/:id",element:o.jsx(Oh,{})}),o.jsx(xr,{path:"/special/:slug",element:o.jsx(Bh,{})}),o.jsx(xr,{path:"/cart",element:o.jsx(Mh,{})}),o.jsx(xr,{path:"/checkout",element:o.jsx($h,{})}),o.jsx(xr,{path:"/admin",element:o.jsx(Uh,{})})]})}),o.jsx(mh,{})]})})})}Sd.initialize("G-D9FP0ZFK1S");_p.createRoot(document.getElementById("root")).render(o.jsx(x.StrictMode,{children:o.jsx(Hh,{})}));

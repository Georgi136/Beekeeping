var dp=Object.defineProperty;var fp=(i,s,u)=>s in i?dp(i,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[s]=u;var Ee=(i,s,u)=>fp(i,typeof s!="symbol"?s+"":s,u);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))d(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function u(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(f){if(f.ep)return;f.ep=!0;const m=u(f);fetch(f.href,m)}})();var ca={exports:{}},Vr={},da={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc;function pp(){if(Cc)return ae;Cc=1;var i=Symbol.for("react.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),v=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),N=Symbol.iterator;function T(w){return w===null||typeof w!="object"?null:(w=N&&w[N]||w["@@iterator"],typeof w=="function"?w:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,F={};function D(w,b,oe){this.props=w,this.context=b,this.refs=F,this.updater=oe||$}D.prototype.isReactComponent={},D.prototype.setState=function(w,b){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,b,"setState")},D.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function M(){}M.prototype=D.prototype;function Z(w,b,oe){this.props=w,this.context=b,this.refs=F,this.updater=oe||$}var ee=Z.prototype=new M;ee.constructor=Z,A(ee,D.prototype),ee.isPureReactComponent=!0;var V=Array.isArray,ne=Object.prototype.hasOwnProperty,ie={current:null},he={key:!0,ref:!0,__self:!0,__source:!0};function K(w,b,oe){var le,ce={},de=null,ve=null;if(b!=null)for(le in b.ref!==void 0&&(ve=b.ref),b.key!==void 0&&(de=""+b.key),b)ne.call(b,le)&&!he.hasOwnProperty(le)&&(ce[le]=b[le]);var me=arguments.length-2;if(me===1)ce.children=oe;else if(1<me){for(var xe=Array(me),Ke=0;Ke<me;Ke++)xe[Ke]=arguments[Ke+2];ce.children=xe}if(w&&w.defaultProps)for(le in me=w.defaultProps,me)ce[le]===void 0&&(ce[le]=me[le]);return{$$typeof:i,type:w,key:de,ref:ve,props:ce,_owner:ie.current}}function ue(w,b){return{$$typeof:i,type:w.type,key:b,ref:w.ref,props:w.props,_owner:w._owner}}function ye(w){return typeof w=="object"&&w!==null&&w.$$typeof===i}function Be(w){var b={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(oe){return b[oe]})}var Te=/\/+/g;function De(w,b){return typeof w=="object"&&w!==null&&w.key!=null?Be(""+w.key):b.toString(36)}function X(w,b,oe,le,ce){var de=typeof w;(de==="undefined"||de==="boolean")&&(w=null);var ve=!1;if(w===null)ve=!0;else switch(de){case"string":case"number":ve=!0;break;case"object":switch(w.$$typeof){case i:case s:ve=!0}}if(ve)return ve=w,ce=ce(ve),w=le===""?"."+De(ve,0):le,V(ce)?(oe="",w!=null&&(oe=w.replace(Te,"$&/")+"/"),X(ce,b,oe,"",function(Ke){return Ke})):ce!=null&&(ye(ce)&&(ce=ue(ce,oe+(!ce.key||ve&&ve.key===ce.key?"":(""+ce.key).replace(Te,"$&/")+"/")+w)),b.push(ce)),1;if(ve=0,le=le===""?".":le+":",V(w))for(var me=0;me<w.length;me++){de=w[me];var xe=le+De(de,me);ve+=X(de,b,oe,xe,ce)}else if(xe=T(w),typeof xe=="function")for(w=xe.call(w),me=0;!(de=w.next()).done;)de=de.value,xe=le+De(de,me++),ve+=X(de,b,oe,xe,ce);else if(de==="object")throw b=String(w),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return ve}function se(w,b,oe){if(w==null)return w;var le=[],ce=0;return X(w,le,"","",function(de){return b.call(oe,de,ce++)}),le}function ze(w){if(w._status===-1){var b=w._result;b=b(),b.then(function(oe){(w._status===0||w._status===-1)&&(w._status=1,w._result=oe)},function(oe){(w._status===0||w._status===-1)&&(w._status=2,w._result=oe)}),w._status===-1&&(w._status=0,w._result=b)}if(w._status===1)return w._result.default;throw w._result}var ke={current:null},z={transition:null},q={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:z,ReactCurrentOwner:ie};function B(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:se,forEach:function(w,b,oe){se(w,function(){b.apply(this,arguments)},oe)},count:function(w){var b=0;return se(w,function(){b++}),b},toArray:function(w){return se(w,function(b){return b})||[]},only:function(w){if(!ye(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},ae.Component=D,ae.Fragment=u,ae.Profiler=f,ae.PureComponent=Z,ae.StrictMode=d,ae.Suspense=x,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,ae.act=B,ae.cloneElement=function(w,b,oe){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var le=A({},w.props),ce=w.key,de=w.ref,ve=w._owner;if(b!=null){if(b.ref!==void 0&&(de=b.ref,ve=ie.current),b.key!==void 0&&(ce=""+b.key),w.type&&w.type.defaultProps)var me=w.type.defaultProps;for(xe in b)ne.call(b,xe)&&!he.hasOwnProperty(xe)&&(le[xe]=b[xe]===void 0&&me!==void 0?me[xe]:b[xe])}var xe=arguments.length-2;if(xe===1)le.children=oe;else if(1<xe){me=Array(xe);for(var Ke=0;Ke<xe;Ke++)me[Ke]=arguments[Ke+2];le.children=me}return{$$typeof:i,type:w.type,key:ce,ref:de,props:le,_owner:ve}},ae.createContext=function(w){return w={$$typeof:v,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:m,_context:w},w.Consumer=w},ae.createElement=K,ae.createFactory=function(w){var b=K.bind(null,w);return b.type=w,b},ae.createRef=function(){return{current:null}},ae.forwardRef=function(w){return{$$typeof:j,render:w}},ae.isValidElement=ye,ae.lazy=function(w){return{$$typeof:_,_payload:{_status:-1,_result:w},_init:ze}},ae.memo=function(w,b){return{$$typeof:S,type:w,compare:b===void 0?null:b}},ae.startTransition=function(w){var b=z.transition;z.transition={};try{w()}finally{z.transition=b}},ae.unstable_act=B,ae.useCallback=function(w,b){return ke.current.useCallback(w,b)},ae.useContext=function(w){return ke.current.useContext(w)},ae.useDebugValue=function(){},ae.useDeferredValue=function(w){return ke.current.useDeferredValue(w)},ae.useEffect=function(w,b){return ke.current.useEffect(w,b)},ae.useId=function(){return ke.current.useId()},ae.useImperativeHandle=function(w,b,oe){return ke.current.useImperativeHandle(w,b,oe)},ae.useInsertionEffect=function(w,b){return ke.current.useInsertionEffect(w,b)},ae.useLayoutEffect=function(w,b){return ke.current.useLayoutEffect(w,b)},ae.useMemo=function(w,b){return ke.current.useMemo(w,b)},ae.useReducer=function(w,b,oe){return ke.current.useReducer(w,b,oe)},ae.useRef=function(w){return ke.current.useRef(w)},ae.useState=function(w){return ke.current.useState(w)},ae.useSyncExternalStore=function(w,b,oe){return ke.current.useSyncExternalStore(w,b,oe)},ae.useTransition=function(){return ke.current.useTransition()},ae.version="18.3.1",ae}var Ec;function ja(){return Ec||(Ec=1,da.exports=pp()),da.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc;function mp(){if(Nc)return Vr;Nc=1;var i=ja(),s=Symbol.for("react.element"),u=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,f=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(j,x,S){var _,N={},T=null,$=null;S!==void 0&&(T=""+S),x.key!==void 0&&(T=""+x.key),x.ref!==void 0&&($=x.ref);for(_ in x)d.call(x,_)&&!m.hasOwnProperty(_)&&(N[_]=x[_]);if(j&&j.defaultProps)for(_ in x=j.defaultProps,x)N[_]===void 0&&(N[_]=x[_]);return{$$typeof:s,type:j,key:T,ref:$,props:N,_owner:f.current}}return Vr.Fragment=u,Vr.jsx=v,Vr.jsxs=v,Vr}var Pc;function hp(){return Pc||(Pc=1,ca.exports=mp()),ca.exports}var a=hp(),k=ja(),si={},fa={exports:{}},ot={},pa={exports:{}},ma={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c;function gp(){return _c||(_c=1,(function(i){function s(z,q){var B=z.length;z.push(q);e:for(;0<B;){var w=B-1>>>1,b=z[w];if(0<f(b,q))z[w]=q,z[B]=b,B=w;else break e}}function u(z){return z.length===0?null:z[0]}function d(z){if(z.length===0)return null;var q=z[0],B=z.pop();if(B!==q){z[0]=B;e:for(var w=0,b=z.length,oe=b>>>1;w<oe;){var le=2*(w+1)-1,ce=z[le],de=le+1,ve=z[de];if(0>f(ce,B))de<b&&0>f(ve,ce)?(z[w]=ve,z[de]=B,w=de):(z[w]=ce,z[le]=B,w=le);else if(de<b&&0>f(ve,B))z[w]=ve,z[de]=B,w=de;else break e}}return q}function f(z,q){var B=z.sortIndex-q.sortIndex;return B!==0?B:z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var v=Date,j=v.now();i.unstable_now=function(){return v.now()-j}}var x=[],S=[],_=1,N=null,T=3,$=!1,A=!1,F=!1,D=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(z){for(var q=u(S);q!==null;){if(q.callback===null)d(S);else if(q.startTime<=z)d(S),q.sortIndex=q.expirationTime,s(x,q);else break;q=u(S)}}function V(z){if(F=!1,ee(z),!A)if(u(x)!==null)A=!0,ze(ne);else{var q=u(S);q!==null&&ke(V,q.startTime-z)}}function ne(z,q){A=!1,F&&(F=!1,M(K),K=-1),$=!0;var B=T;try{for(ee(q),N=u(x);N!==null&&(!(N.expirationTime>q)||z&&!Be());){var w=N.callback;if(typeof w=="function"){N.callback=null,T=N.priorityLevel;var b=w(N.expirationTime<=q);q=i.unstable_now(),typeof b=="function"?N.callback=b:N===u(x)&&d(x),ee(q)}else d(x);N=u(x)}if(N!==null)var oe=!0;else{var le=u(S);le!==null&&ke(V,le.startTime-q),oe=!1}return oe}finally{N=null,T=B,$=!1}}var ie=!1,he=null,K=-1,ue=5,ye=-1;function Be(){return!(i.unstable_now()-ye<ue)}function Te(){if(he!==null){var z=i.unstable_now();ye=z;var q=!0;try{q=he(!0,z)}finally{q?De():(ie=!1,he=null)}}else ie=!1}var De;if(typeof Z=="function")De=function(){Z(Te)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,se=X.port2;X.port1.onmessage=Te,De=function(){se.postMessage(null)}}else De=function(){D(Te,0)};function ze(z){he=z,ie||(ie=!0,De())}function ke(z,q){K=D(function(){z(i.unstable_now())},q)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(z){z.callback=null},i.unstable_continueExecution=function(){A||$||(A=!0,ze(ne))},i.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<z?Math.floor(1e3/z):5},i.unstable_getCurrentPriorityLevel=function(){return T},i.unstable_getFirstCallbackNode=function(){return u(x)},i.unstable_next=function(z){switch(T){case 1:case 2:case 3:var q=3;break;default:q=T}var B=T;T=q;try{return z()}finally{T=B}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var B=T;T=z;try{return q()}finally{T=B}},i.unstable_scheduleCallback=function(z,q,B){var w=i.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?w+B:w):B=w,z){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=B+b,z={id:_++,callback:q,priorityLevel:z,startTime:B,expirationTime:b,sortIndex:-1},B>w?(z.sortIndex=B,s(S,z),u(x)===null&&z===u(S)&&(F?(M(K),K=-1):F=!0,ke(V,B-w))):(z.sortIndex=b,s(x,z),A||$||(A=!0,ze(ne))),z},i.unstable_shouldYield=Be,i.unstable_wrapCallback=function(z){var q=T;return function(){var B=T;T=q;try{return z.apply(this,arguments)}finally{T=B}}}})(ma)),ma}var bc;function vp(){return bc||(bc=1,pa.exports=gp()),pa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc;function yp(){if(Tc)return ot;Tc=1;var i=ja(),s=vp();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,f={};function m(e,t){v(e,t),v(e+"Capture",t)}function v(e,t){for(f[e]=t,e=0;e<t.length;e++)d.add(t[e])}var j=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},N={};function T(e){return x.call(N,e)?!0:x.call(_,e)?!1:S.test(e)?N[e]=!0:(_[e]=!0,!1)}function $(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function A(e,t,n,r){if(t===null||typeof t>"u"||$(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function F(e,t,n,r,o,l,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=c}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new F(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new F(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new F(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new F(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new F(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new F(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new F(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new F(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new F(e,5,!1,e.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function Z(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M,Z);D[t]=new F(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M,Z);D[t]=new F(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M,Z);D[t]=new F(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new F(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new F(e,1,!1,e.toLowerCase(),null,!0,!0)});function ee(e,t,n,r){var o=D.hasOwnProperty(t)?D[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(A(t,n,o,r)&&(n=null),r||o===null?T(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var V=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),ie=Symbol.for("react.portal"),he=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),Be=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),De=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),z=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,w;function b(e){if(w===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var oe=!1;function le(e,t){if(!e||oe)return"";oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(P){var r=P}Reflect.construct(e,[],t)}else{try{t.call()}catch(P){r=P}e.call(t.prototype)}else{try{throw Error()}catch(P){r=P}e()}}catch(P){if(P&&r&&typeof P.stack=="string"){for(var o=P.stack.split(`
`),l=r.stack.split(`
`),c=o.length-1,p=l.length-1;1<=c&&0<=p&&o[c]!==l[p];)p--;for(;1<=c&&0<=p;c--,p--)if(o[c]!==l[p]){if(c!==1||p!==1)do if(c--,p--,0>p||o[c]!==l[p]){var g=`
`+o[c].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=c&&0<=p);break}}}finally{oe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?b(e):""}function ce(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case he:return"Fragment";case ie:return"Portal";case ue:return"Profiler";case K:return"StrictMode";case De:return"Suspense";case X:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Be:return(e.displayName||"Context")+".Consumer";case ye:return(e._context.displayName||"Context")+".Provider";case Te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case se:return t=e.displayName||null,t!==null?t:de(e.type)||"Memo";case ze:t=e._payload,e=e._init;try{return de(e(t))}catch{}}return null}function ve(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(t);case 8:return t===K?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ke(e){var t=xe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(c){r=""+c,l.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bn(e){e._valueTracker||(e._valueTracker=Ke(e))}function Xr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function h(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function re(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=me(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Oe(e,t){t=t.checked,t!=null&&ee(e,"checked",t,!1)}function Xe(e,t){Oe(e,t);var n=me(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xi(e,t.type,n):t.hasOwnProperty("defaultValue")&&xi(e,t.type,me(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Rn(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xi(e,t,n){(t!=="number"||Tn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var lr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+me(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function wi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ia(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(lr(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:me(n)}}function Da(e,t){var n=me(t.value),r=me(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Oa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ki(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,Aa=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},md=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){md.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sr[t]=sr[e]})});function Ma(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sr.hasOwnProperty(e)&&sr[e]?(""+t).trim():t+"px"}function Ua(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ma(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var hd=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Si(e,t){if(t){if(hd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function ji(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ci=null;function Ei(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ni=null,zn=null,In=null;function $a(e){if(e=Tr(e)){if(typeof Ni!="function")throw Error(u(280));var t=e.stateNode;t&&(t=jo(t),Ni(e.stateNode,e.type,t))}}function Ba(e){zn?In?In.push(e):In=[e]:zn=e}function Ha(){if(zn){var e=zn,t=In;if(In=zn=null,$a(e),t)for(e=0;e<t.length;e++)$a(t[e])}}function Wa(e,t){return e(t)}function Va(){}var Pi=!1;function qa(e,t,n){if(Pi)return e(t,n);Pi=!0;try{return Wa(e,t,n)}finally{Pi=!1,(zn!==null||In!==null)&&(Va(),Ha())}}function ur(e,t){var n=e.stateNode;if(n===null)return null;var r=jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var _i=!1;if(j)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){_i=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{_i=!1}function gd(e,t,n,r,o,l,c,p,g){var P=Array.prototype.slice.call(arguments,3);try{t.apply(n,P)}catch(L){this.onError(L)}}var dr=!1,eo=null,to=!1,bi=null,vd={onError:function(e){dr=!0,eo=e}};function yd(e,t,n,r,o,l,c,p,g){dr=!1,eo=null,gd.apply(vd,arguments)}function xd(e,t,n,r,o,l,c,p,g){if(yd.apply(this,arguments),dr){if(dr){var P=eo;dr=!1,eo=null}else throw Error(u(198));to||(to=!0,bi=P)}}function dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ga(e){if(dn(e)!==e)throw Error(u(188))}function wd(e){var t=e.alternate;if(!t){if(t=dn(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Ga(o),e;if(l===r)return Ga(o),t;l=l.sibling}throw Error(u(188))}if(n.return!==r.return)n=o,r=l;else{for(var c=!1,p=o.child;p;){if(p===n){c=!0,n=o,r=l;break}if(p===r){c=!0,r=o,n=l;break}p=p.sibling}if(!c){for(p=l.child;p;){if(p===n){c=!0,n=l,r=o;break}if(p===r){c=!0,r=l,n=o;break}p=p.sibling}if(!c)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function Ka(e){return e=wd(e),e!==null?Ya(e):null}function Ya(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ya(e);if(t!==null)return t;e=e.sibling}return null}var Ja=s.unstable_scheduleCallback,Xa=s.unstable_cancelCallback,kd=s.unstable_shouldYield,Sd=s.unstable_requestPaint,Re=s.unstable_now,jd=s.unstable_getCurrentPriorityLevel,Ti=s.unstable_ImmediatePriority,Za=s.unstable_UserBlockingPriority,no=s.unstable_NormalPriority,Cd=s.unstable_LowPriority,es=s.unstable_IdlePriority,ro=null,Pt=null;function Ed(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(ro,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:_d,Nd=Math.log,Pd=Math.LN2;function _d(e){return e>>>=0,e===0?32:31-(Nd(e)/Pd|0)|0}var oo=64,io=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function lo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,c=n&268435455;if(c!==0){var p=c&~o;p!==0?r=fr(p):(l&=c,l!==0&&(r=fr(l)))}else c=n&~o,c!==0?r=fr(c):l!==0&&(r=fr(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),o=1<<n,r|=e[n],t&=~o;return r}function bd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Td(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var c=31-yt(l),p=1<<c,g=o[c];g===-1?((p&n)===0||(p&r)!==0)&&(o[c]=bd(p,t)):g<=t&&(e.expiredLanes|=p),l&=~p}}function Ri(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ts(){var e=oo;return oo<<=1,(oo&4194240)===0&&(oo=64),e}function Li(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function Rd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-yt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ge=0;function ns(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var rs,Ii,os,is,ls,Di=!1,ao=[],Ht=null,Wt=null,Vt=null,mr=new Map,hr=new Map,qt=[],Ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function as(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(t.pointerId)}}function gr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Tr(t),t!==null&&Ii(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function zd(e,t,n,r,o){switch(t){case"focusin":return Ht=gr(Ht,e,t,n,r,o),!0;case"dragenter":return Wt=gr(Wt,e,t,n,r,o),!0;case"mouseover":return Vt=gr(Vt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return mr.set(l,gr(mr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,hr.set(l,gr(hr.get(l)||null,e,t,n,r,o)),!0}return!1}function ss(e){var t=fn(e.target);if(t!==null){var n=dn(t);if(n!==null){if(t=n.tag,t===13){if(t=Qa(n),t!==null){e.blockedOn=t,ls(e.priority,function(){os(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function so(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ci=r,n.target.dispatchEvent(r),Ci=null}else return t=Tr(n),t!==null&&Ii(t),e.blockedOn=n,!1;t.shift()}return!0}function us(e,t,n){so(e)&&n.delete(t)}function Id(){Di=!1,Ht!==null&&so(Ht)&&(Ht=null),Wt!==null&&so(Wt)&&(Wt=null),Vt!==null&&so(Vt)&&(Vt=null),mr.forEach(us),hr.forEach(us)}function vr(e,t){e.blockedOn===t&&(e.blockedOn=null,Di||(Di=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Id)))}function yr(e){function t(o){return vr(o,e)}if(0<ao.length){vr(ao[0],e);for(var n=1;n<ao.length;n++){var r=ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&vr(Ht,e),Wt!==null&&vr(Wt,e),Vt!==null&&vr(Vt,e),mr.forEach(t),hr.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)ss(n),n.blockedOn===null&&qt.shift()}var Dn=V.ReactCurrentBatchConfig,uo=!0;function Dd(e,t,n,r){var o=ge,l=Dn.transition;Dn.transition=null;try{ge=1,Oi(e,t,n,r)}finally{ge=o,Dn.transition=l}}function Od(e,t,n,r){var o=ge,l=Dn.transition;Dn.transition=null;try{ge=4,Oi(e,t,n,r)}finally{ge=o,Dn.transition=l}}function Oi(e,t,n,r){if(uo){var o=Fi(e,t,n,r);if(o===null)el(e,t,r,co,n),as(e,r);else if(zd(o,e,t,n,r))r.stopPropagation();else if(as(e,r),t&4&&-1<Ld.indexOf(e)){for(;o!==null;){var l=Tr(o);if(l!==null&&rs(l),l=Fi(e,t,n,r),l===null&&el(e,t,r,co,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else el(e,t,r,null,n)}}var co=null;function Fi(e,t,n,r){if(co=null,e=Ei(r),e=fn(e),e!==null)if(t=dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return co=e,null}function cs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jd()){case Ti:return 1;case Za:return 4;case no:case Cd:return 16;case es:return 536870912;default:return 16}default:return 16}}var Qt=null,Ai=null,fo=null;function ds(){if(fo)return fo;var e,t=Ai,n=t.length,r,o="value"in Qt?Qt.value:Qt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var c=n-e;for(r=1;r<=c&&t[n-r]===o[l-r];r++);return fo=o.slice(e,1<r?1-r:void 0)}function po(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mo(){return!0}function fs(){return!1}function it(e){function t(n,r,o,l,c){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(l):l[p]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?mo:fs,this.isPropagationStopped=fs,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mi=it(On),xr=B({},On,{view:0,detail:0}),Fd=it(xr),Ui,$i,wr,ho=B({},xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(Ui=e.screenX-wr.screenX,$i=e.screenY-wr.screenY):$i=Ui=0,wr=e),Ui)},movementY:function(e){return"movementY"in e?e.movementY:$i}}),ps=it(ho),Ad=B({},ho,{dataTransfer:0}),Md=it(Ad),Ud=B({},xr,{relatedTarget:0}),Bi=it(Ud),$d=B({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Bd=it($d),Hd=B({},On,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wd=it(Hd),Vd=B({},On,{data:0}),ms=it(Vd),qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gd[e])?!!t[e]:!1}function Hi(){return Kd}var Yd=B({},xr,{key:function(e){if(e.key){var t=qd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hi,charCode:function(e){return e.type==="keypress"?po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jd=it(Yd),Xd=B({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hs=it(Xd),Zd=B({},xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hi}),ef=it(Zd),tf=B({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),nf=it(tf),rf=B({},ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),of=it(rf),lf=[9,13,27,32],Wi=j&&"CompositionEvent"in window,kr=null;j&&"documentMode"in document&&(kr=document.documentMode);var af=j&&"TextEvent"in window&&!kr,gs=j&&(!Wi||kr&&8<kr&&11>=kr),vs=" ",ys=!1;function xs(e,t){switch(e){case"keyup":return lf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ws(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function sf(e,t){switch(e){case"compositionend":return ws(t);case"keypress":return t.which!==32?null:(ys=!0,vs);case"textInput":return e=t.data,e===vs&&ys?null:e;default:return null}}function uf(e,t){if(Fn)return e==="compositionend"||!Wi&&xs(e,t)?(e=ds(),fo=Ai=Qt=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gs&&t.locale!=="ko"?null:t.data;default:return null}}var cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cf[e.type]:t==="textarea"}function Ss(e,t,n,r){Ba(r),t=wo(t,"onChange"),0<t.length&&(n=new Mi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Sr=null,jr=null;function df(e){Us(e,0)}function go(e){var t=Bn(e);if(Xr(t))return e}function ff(e,t){if(e==="change")return t}var js=!1;if(j){var Vi;if(j){var qi="oninput"in document;if(!qi){var Cs=document.createElement("div");Cs.setAttribute("oninput","return;"),qi=typeof Cs.oninput=="function"}Vi=qi}else Vi=!1;js=Vi&&(!document.documentMode||9<document.documentMode)}function Es(){Sr&&(Sr.detachEvent("onpropertychange",Ns),jr=Sr=null)}function Ns(e){if(e.propertyName==="value"&&go(jr)){var t=[];Ss(t,jr,e,Ei(e)),qa(df,t)}}function pf(e,t,n){e==="focusin"?(Es(),Sr=t,jr=n,Sr.attachEvent("onpropertychange",Ns)):e==="focusout"&&Es()}function mf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return go(jr)}function hf(e,t){if(e==="click")return go(t)}function gf(e,t){if(e==="input"||e==="change")return go(t)}function vf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:vf;function Cr(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!x.call(t,o)||!xt(e[o],t[o]))return!1}return!0}function Ps(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _s(e,t){var n=Ps(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ps(n)}}function bs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ts(){for(var e=window,t=Tn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tn(e.document)}return t}function Qi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yf(e){var t=Ts(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bs(n.ownerDocument.documentElement,n)){if(r!==null&&Qi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=_s(n,l);var c=_s(n,r);o&&c&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xf=j&&"documentMode"in document&&11>=document.documentMode,An=null,Gi=null,Er=null,Ki=!1;function Rs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ki||An==null||An!==Tn(r)||(r=An,"selectionStart"in r&&Qi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Cr(Er,r)||(Er=r,r=wo(Gi,"onSelect"),0<r.length&&(t=new Mi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=An)))}function vo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},Yi={},Ls={};j&&(Ls=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function yo(e){if(Yi[e])return Yi[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ls)return Yi[e]=t[n];return e}var zs=yo("animationend"),Is=yo("animationiteration"),Ds=yo("animationstart"),Os=yo("transitionend"),Fs=new Map,As="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){Fs.set(e,t),m(t,[e])}for(var Ji=0;Ji<As.length;Ji++){var Xi=As[Ji],wf=Xi.toLowerCase(),kf=Xi[0].toUpperCase()+Xi.slice(1);Gt(wf,"on"+kf)}Gt(zs,"onAnimationEnd"),Gt(Is,"onAnimationIteration"),Gt(Ds,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt(Os,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function Ms(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xd(r,t,void 0,e),e.currentTarget=null}function Us(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var c=r.length-1;0<=c;c--){var p=r[c],g=p.instance,P=p.currentTarget;if(p=p.listener,g!==l&&o.isPropagationStopped())break e;Ms(o,p,P),l=g}else for(c=0;c<r.length;c++){if(p=r[c],g=p.instance,P=p.currentTarget,p=p.listener,g!==l&&o.isPropagationStopped())break e;Ms(o,p,P),l=g}}}if(to)throw e=bi,to=!1,bi=null,e}function Se(e,t){var n=t[ll];n===void 0&&(n=t[ll]=new Set);var r=e+"__bubble";n.has(r)||($s(t,e,2,!1),n.add(r))}function Zi(e,t,n){var r=0;t&&(r|=4),$s(n,e,r,t)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[xo]){e[xo]=!0,d.forEach(function(n){n!=="selectionchange"&&(Sf.has(n)||Zi(n,!1,e),Zi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xo]||(t[xo]=!0,Zi("selectionchange",!1,t))}}function $s(e,t,n,r){switch(cs(t)){case 1:var o=Dd;break;case 4:o=Od;break;default:o=Oi}n=o.bind(null,t,n,e),o=void 0,!_i||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function el(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var p=r.stateNode.containerInfo;if(p===o||p.nodeType===8&&p.parentNode===o)break;if(c===4)for(c=r.return;c!==null;){var g=c.tag;if((g===3||g===4)&&(g=c.stateNode.containerInfo,g===o||g.nodeType===8&&g.parentNode===o))return;c=c.return}for(;p!==null;){if(c=fn(p),c===null)return;if(g=c.tag,g===5||g===6){r=l=c;continue e}p=p.parentNode}}r=r.return}qa(function(){var P=l,L=Ei(n),I=[];e:{var R=Fs.get(e);if(R!==void 0){var U=Mi,W=e;switch(e){case"keypress":if(po(n)===0)break e;case"keydown":case"keyup":U=Jd;break;case"focusin":W="focus",U=Bi;break;case"focusout":W="blur",U=Bi;break;case"beforeblur":case"afterblur":U=Bi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=ef;break;case zs:case Is:case Ds:U=Bd;break;case Os:U=nf;break;case"scroll":U=Fd;break;case"wheel":U=of;break;case"copy":case"cut":case"paste":U=Wd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=hs}var Q=(t&4)!==0,Le=!Q&&e==="scroll",C=Q?R!==null?R+"Capture":null:R;Q=[];for(var y=P,E;y!==null;){E=y;var O=E.stateNode;if(E.tag===5&&O!==null&&(E=O,C!==null&&(O=ur(y,C),O!=null&&Q.push(_r(y,O,E)))),Le)break;y=y.return}0<Q.length&&(R=new U(R,W,null,n,L),I.push({event:R,listeners:Q}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",R&&n!==Ci&&(W=n.relatedTarget||n.fromElement)&&(fn(W)||W[It]))break e;if((U||R)&&(R=L.window===L?L:(R=L.ownerDocument)?R.defaultView||R.parentWindow:window,U?(W=n.relatedTarget||n.toElement,U=P,W=W?fn(W):null,W!==null&&(Le=dn(W),W!==Le||W.tag!==5&&W.tag!==6)&&(W=null)):(U=null,W=P),U!==W)){if(Q=ps,O="onMouseLeave",C="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(Q=hs,O="onPointerLeave",C="onPointerEnter",y="pointer"),Le=U==null?R:Bn(U),E=W==null?R:Bn(W),R=new Q(O,y+"leave",U,n,L),R.target=Le,R.relatedTarget=E,O=null,fn(L)===P&&(Q=new Q(C,y+"enter",W,n,L),Q.target=E,Q.relatedTarget=Le,O=Q),Le=O,U&&W)t:{for(Q=U,C=W,y=0,E=Q;E;E=Un(E))y++;for(E=0,O=C;O;O=Un(O))E++;for(;0<y-E;)Q=Un(Q),y--;for(;0<E-y;)C=Un(C),E--;for(;y--;){if(Q===C||C!==null&&Q===C.alternate)break t;Q=Un(Q),C=Un(C)}Q=null}else Q=null;U!==null&&Bs(I,R,U,Q,!1),W!==null&&Le!==null&&Bs(I,Le,W,Q,!0)}}e:{if(R=P?Bn(P):window,U=R.nodeName&&R.nodeName.toLowerCase(),U==="select"||U==="input"&&R.type==="file")var G=ff;else if(ks(R))if(js)G=gf;else{G=mf;var Y=pf}else(U=R.nodeName)&&U.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(G=hf);if(G&&(G=G(e,P))){Ss(I,G,n,L);break e}Y&&Y(e,R,P),e==="focusout"&&(Y=R._wrapperState)&&Y.controlled&&R.type==="number"&&xi(R,"number",R.value)}switch(Y=P?Bn(P):window,e){case"focusin":(ks(Y)||Y.contentEditable==="true")&&(An=Y,Gi=P,Er=null);break;case"focusout":Er=Gi=An=null;break;case"mousedown":Ki=!0;break;case"contextmenu":case"mouseup":case"dragend":Ki=!1,Rs(I,n,L);break;case"selectionchange":if(xf)break;case"keydown":case"keyup":Rs(I,n,L)}var J;if(Wi)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Fn?xs(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(gs&&n.locale!=="ko"&&(Fn||te!=="onCompositionStart"?te==="onCompositionEnd"&&Fn&&(J=ds()):(Qt=L,Ai="value"in Qt?Qt.value:Qt.textContent,Fn=!0)),Y=wo(P,te),0<Y.length&&(te=new ms(te,e,null,n,L),I.push({event:te,listeners:Y}),J?te.data=J:(J=ws(n),J!==null&&(te.data=J)))),(J=af?sf(e,n):uf(e,n))&&(P=wo(P,"onBeforeInput"),0<P.length&&(L=new ms("onBeforeInput","beforeinput",null,n,L),I.push({event:L,listeners:P}),L.data=J))}Us(I,t)})}function _r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=ur(e,n),l!=null&&r.unshift(_r(e,l,o)),l=ur(e,t),l!=null&&r.push(_r(e,l,o))),e=e.return}return r}function Un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bs(e,t,n,r,o){for(var l=t._reactName,c=[];n!==null&&n!==r;){var p=n,g=p.alternate,P=p.stateNode;if(g!==null&&g===r)break;p.tag===5&&P!==null&&(p=P,o?(g=ur(n,l),g!=null&&c.unshift(_r(n,g,p))):o||(g=ur(n,l),g!=null&&c.push(_r(n,g,p)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var jf=/\r\n?/g,Cf=/\u0000|\uFFFD/g;function Hs(e){return(typeof e=="string"?e:""+e).replace(jf,`
`).replace(Cf,"")}function ko(e,t,n){if(t=Hs(t),Hs(e)!==t&&n)throw Error(u(425))}function So(){}var tl=null,nl=null;function rl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ol=typeof setTimeout=="function"?setTimeout:void 0,Ef=typeof clearTimeout=="function"?clearTimeout:void 0,Ws=typeof Promise=="function"?Promise:void 0,Nf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ws<"u"?function(e){return Ws.resolve(null).then(e).catch(Pf)}:ol;function Pf(e){setTimeout(function(){throw e})}function il(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);yr(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $n=Math.random().toString(36).slice(2),_t="__reactFiber$"+$n,br="__reactProps$"+$n,It="__reactContainer$"+$n,ll="__reactEvents$"+$n,_f="__reactListeners$"+$n,bf="__reactHandles$"+$n;function fn(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[It]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vs(e);e!==null;){if(n=e[_t])return n;e=Vs(e)}return t}e=n,n=e.parentNode}return null}function Tr(e){return e=e[_t]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function jo(e){return e[br]||null}var al=[],Hn=-1;function Yt(e){return{current:e}}function je(e){0>Hn||(e.current=al[Hn],al[Hn]=null,Hn--)}function we(e,t){Hn++,al[Hn]=e.current,e.current=t}var Jt={},Ve=Yt(Jt),Ze=Yt(!1),pn=Jt;function Wn(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function et(e){return e=e.childContextTypes,e!=null}function Co(){je(Ze),je(Ve)}function qs(e,t,n){if(Ve.current!==Jt)throw Error(u(168));we(Ve,t),we(Ze,n)}function Qs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(u(108,ve(e)||"Unknown",o));return B({},n,r)}function Eo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,pn=Ve.current,we(Ve,e),we(Ze,Ze.current),!0}function Gs(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=Qs(e,t,pn),r.__reactInternalMemoizedMergedChildContext=e,je(Ze),je(Ve),we(Ve,e)):je(Ze),we(Ze,n)}var Dt=null,No=!1,sl=!1;function Ks(e){Dt===null?Dt=[e]:Dt.push(e)}function Tf(e){No=!0,Ks(e)}function Xt(){if(!sl&&Dt!==null){sl=!0;var e=0,t=ge;try{var n=Dt;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,No=!1}catch(o){throw Dt!==null&&(Dt=Dt.slice(e+1)),Ja(Ti,Xt),o}finally{ge=t,sl=!1}}return null}var Vn=[],qn=0,Po=null,_o=0,ct=[],dt=0,mn=null,Ot=1,Ft="";function hn(e,t){Vn[qn++]=_o,Vn[qn++]=Po,Po=e,_o=t}function Ys(e,t,n){ct[dt++]=Ot,ct[dt++]=Ft,ct[dt++]=mn,mn=e;var r=Ot;e=Ft;var o=32-yt(r)-1;r&=~(1<<o),n+=1;var l=32-yt(t)+o;if(30<l){var c=o-o%5;l=(r&(1<<c)-1).toString(32),r>>=c,o-=c,Ot=1<<32-yt(t)+o|n<<o|r,Ft=l+e}else Ot=1<<l|n<<o|r,Ft=e}function ul(e){e.return!==null&&(hn(e,1),Ys(e,1,0))}function cl(e){for(;e===Po;)Po=Vn[--qn],Vn[qn]=null,_o=Vn[--qn],Vn[qn]=null;for(;e===mn;)mn=ct[--dt],ct[dt]=null,Ft=ct[--dt],ct[dt]=null,Ot=ct[--dt],ct[dt]=null}var lt=null,at=null,Ce=!1,wt=null;function Js(e,t){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,lt=e,at=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,lt=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:Ot,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,lt=e,at=null,!0):!1;default:return!1}}function dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fl(e){if(Ce){var t=at;if(t){var n=t;if(!Xs(e,t)){if(dl(e))throw Error(u(418));t=Kt(n.nextSibling);var r=lt;t&&Xs(e,t)?Js(r,n):(e.flags=e.flags&-4097|2,Ce=!1,lt=e)}}else{if(dl(e))throw Error(u(418));e.flags=e.flags&-4097|2,Ce=!1,lt=e}}}function Zs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lt=e}function bo(e){if(e!==lt)return!1;if(!Ce)return Zs(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!rl(e.type,e.memoizedProps)),t&&(t=at)){if(dl(e))throw eu(),Error(u(418));for(;t;)Js(e,t),t=Kt(t.nextSibling)}if(Zs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){at=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}at=null}}else at=lt?Kt(e.stateNode.nextSibling):null;return!0}function eu(){for(var e=at;e;)e=Kt(e.nextSibling)}function Qn(){at=lt=null,Ce=!1}function pl(e){wt===null?wt=[e]:wt.push(e)}var Rf=V.ReactCurrentBatchConfig;function Rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(c){var p=o.refs;c===null?delete p[l]:p[l]=c},t._stringRef=l,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function To(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function tu(e){var t=e._init;return t(e._payload)}function nu(e){function t(C,y){if(e){var E=C.deletions;E===null?(C.deletions=[y],C.flags|=16):E.push(y)}}function n(C,y){if(!e)return null;for(;y!==null;)t(C,y),y=y.sibling;return null}function r(C,y){for(C=new Map;y!==null;)y.key!==null?C.set(y.key,y):C.set(y.index,y),y=y.sibling;return C}function o(C,y){return C=an(C,y),C.index=0,C.sibling=null,C}function l(C,y,E){return C.index=E,e?(E=C.alternate,E!==null?(E=E.index,E<y?(C.flags|=2,y):E):(C.flags|=2,y)):(C.flags|=1048576,y)}function c(C){return e&&C.alternate===null&&(C.flags|=2),C}function p(C,y,E,O){return y===null||y.tag!==6?(y=oa(E,C.mode,O),y.return=C,y):(y=o(y,E),y.return=C,y)}function g(C,y,E,O){var G=E.type;return G===he?L(C,y,E.props.children,O,E.key):y!==null&&(y.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===ze&&tu(G)===y.type)?(O=o(y,E.props),O.ref=Rr(C,y,E),O.return=C,O):(O=ei(E.type,E.key,E.props,null,C.mode,O),O.ref=Rr(C,y,E),O.return=C,O)}function P(C,y,E,O){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=ia(E,C.mode,O),y.return=C,y):(y=o(y,E.children||[]),y.return=C,y)}function L(C,y,E,O,G){return y===null||y.tag!==7?(y=jn(E,C.mode,O,G),y.return=C,y):(y=o(y,E),y.return=C,y)}function I(C,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return y=oa(""+y,C.mode,E),y.return=C,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ne:return E=ei(y.type,y.key,y.props,null,C.mode,E),E.ref=Rr(C,null,y),E.return=C,E;case ie:return y=ia(y,C.mode,E),y.return=C,y;case ze:var O=y._init;return I(C,O(y._payload),E)}if(lr(y)||q(y))return y=jn(y,C.mode,E,null),y.return=C,y;To(C,y)}return null}function R(C,y,E,O){var G=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return G!==null?null:p(C,y,""+E,O);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ne:return E.key===G?g(C,y,E,O):null;case ie:return E.key===G?P(C,y,E,O):null;case ze:return G=E._init,R(C,y,G(E._payload),O)}if(lr(E)||q(E))return G!==null?null:L(C,y,E,O,null);To(C,E)}return null}function U(C,y,E,O,G){if(typeof O=="string"&&O!==""||typeof O=="number")return C=C.get(E)||null,p(y,C,""+O,G);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ne:return C=C.get(O.key===null?E:O.key)||null,g(y,C,O,G);case ie:return C=C.get(O.key===null?E:O.key)||null,P(y,C,O,G);case ze:var Y=O._init;return U(C,y,E,Y(O._payload),G)}if(lr(O)||q(O))return C=C.get(E)||null,L(y,C,O,G,null);To(y,O)}return null}function W(C,y,E,O){for(var G=null,Y=null,J=y,te=y=0,$e=null;J!==null&&te<E.length;te++){J.index>te?($e=J,J=null):$e=J.sibling;var pe=R(C,J,E[te],O);if(pe===null){J===null&&(J=$e);break}e&&J&&pe.alternate===null&&t(C,J),y=l(pe,y,te),Y===null?G=pe:Y.sibling=pe,Y=pe,J=$e}if(te===E.length)return n(C,J),Ce&&hn(C,te),G;if(J===null){for(;te<E.length;te++)J=I(C,E[te],O),J!==null&&(y=l(J,y,te),Y===null?G=J:Y.sibling=J,Y=J);return Ce&&hn(C,te),G}for(J=r(C,J);te<E.length;te++)$e=U(J,C,te,E[te],O),$e!==null&&(e&&$e.alternate!==null&&J.delete($e.key===null?te:$e.key),y=l($e,y,te),Y===null?G=$e:Y.sibling=$e,Y=$e);return e&&J.forEach(function(sn){return t(C,sn)}),Ce&&hn(C,te),G}function Q(C,y,E,O){var G=q(E);if(typeof G!="function")throw Error(u(150));if(E=G.call(E),E==null)throw Error(u(151));for(var Y=G=null,J=y,te=y=0,$e=null,pe=E.next();J!==null&&!pe.done;te++,pe=E.next()){J.index>te?($e=J,J=null):$e=J.sibling;var sn=R(C,J,pe.value,O);if(sn===null){J===null&&(J=$e);break}e&&J&&sn.alternate===null&&t(C,J),y=l(sn,y,te),Y===null?G=sn:Y.sibling=sn,Y=sn,J=$e}if(pe.done)return n(C,J),Ce&&hn(C,te),G;if(J===null){for(;!pe.done;te++,pe=E.next())pe=I(C,pe.value,O),pe!==null&&(y=l(pe,y,te),Y===null?G=pe:Y.sibling=pe,Y=pe);return Ce&&hn(C,te),G}for(J=r(C,J);!pe.done;te++,pe=E.next())pe=U(J,C,te,pe.value,O),pe!==null&&(e&&pe.alternate!==null&&J.delete(pe.key===null?te:pe.key),y=l(pe,y,te),Y===null?G=pe:Y.sibling=pe,Y=pe);return e&&J.forEach(function(cp){return t(C,cp)}),Ce&&hn(C,te),G}function Le(C,y,E,O){if(typeof E=="object"&&E!==null&&E.type===he&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ne:e:{for(var G=E.key,Y=y;Y!==null;){if(Y.key===G){if(G=E.type,G===he){if(Y.tag===7){n(C,Y.sibling),y=o(Y,E.props.children),y.return=C,C=y;break e}}else if(Y.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===ze&&tu(G)===Y.type){n(C,Y.sibling),y=o(Y,E.props),y.ref=Rr(C,Y,E),y.return=C,C=y;break e}n(C,Y);break}else t(C,Y);Y=Y.sibling}E.type===he?(y=jn(E.props.children,C.mode,O,E.key),y.return=C,C=y):(O=ei(E.type,E.key,E.props,null,C.mode,O),O.ref=Rr(C,y,E),O.return=C,C=O)}return c(C);case ie:e:{for(Y=E.key;y!==null;){if(y.key===Y)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){n(C,y.sibling),y=o(y,E.children||[]),y.return=C,C=y;break e}else{n(C,y);break}else t(C,y);y=y.sibling}y=ia(E,C.mode,O),y.return=C,C=y}return c(C);case ze:return Y=E._init,Le(C,y,Y(E._payload),O)}if(lr(E))return W(C,y,E,O);if(q(E))return Q(C,y,E,O);To(C,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,y!==null&&y.tag===6?(n(C,y.sibling),y=o(y,E),y.return=C,C=y):(n(C,y),y=oa(E,C.mode,O),y.return=C,C=y),c(C)):n(C,y)}return Le}var Gn=nu(!0),ru=nu(!1),Ro=Yt(null),Lo=null,Kn=null,ml=null;function hl(){ml=Kn=Lo=null}function gl(e){var t=Ro.current;je(Ro),e._currentValue=t}function vl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){Lo=e,ml=Kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(tt=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(ml!==e)if(e={context:e,memoizedValue:t,next:null},Kn===null){if(Lo===null)throw Error(u(308));Kn=e,Lo.dependencies={lanes:0,firstContext:e}}else Kn=Kn.next=e;return t}var gn=null;function yl(e){gn===null?gn=[e]:gn.push(e)}function ou(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,yl(t)):(n.next=o.next,o.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(fe&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,At(e,n)}return o=r.interleaved,o===null?(t.next=t,yl(r)):(t.next=o.next,o.next=t),r.interleaved=t,At(e,n)}function zo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zi(e,n)}}function lu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=c:l=l.next=c,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Io(e,t,n,r){var o=e.updateQueue;Zt=!1;var l=o.firstBaseUpdate,c=o.lastBaseUpdate,p=o.shared.pending;if(p!==null){o.shared.pending=null;var g=p,P=g.next;g.next=null,c===null?l=P:c.next=P,c=g;var L=e.alternate;L!==null&&(L=L.updateQueue,p=L.lastBaseUpdate,p!==c&&(p===null?L.firstBaseUpdate=P:p.next=P,L.lastBaseUpdate=g))}if(l!==null){var I=o.baseState;c=0,L=P=g=null,p=l;do{var R=p.lane,U=p.eventTime;if((r&R)===R){L!==null&&(L=L.next={eventTime:U,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var W=e,Q=p;switch(R=t,U=n,Q.tag){case 1:if(W=Q.payload,typeof W=="function"){I=W.call(U,I,R);break e}I=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=Q.payload,R=typeof W=="function"?W.call(U,I,R):W,R==null)break e;I=B({},I,R);break e;case 2:Zt=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,R=o.effects,R===null?o.effects=[p]:R.push(p))}else U={eventTime:U,lane:R,tag:p.tag,payload:p.payload,callback:p.callback,next:null},L===null?(P=L=U,g=I):L=L.next=U,c|=R;if(p=p.next,p===null){if(p=o.shared.pending,p===null)break;R=p,p=R.next,R.next=null,o.lastBaseUpdate=R,o.shared.pending=null}}while(!0);if(L===null&&(g=I),o.baseState=g,o.firstBaseUpdate=P,o.lastBaseUpdate=L,t=o.shared.interleaved,t!==null){o=t;do c|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);xn|=c,e.lanes=c,e.memoizedState=I}}function au(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(u(191,o));o.call(r)}}}var Lr={},bt=Yt(Lr),zr=Yt(Lr),Ir=Yt(Lr);function vn(e){if(e===Lr)throw Error(u(174));return e}function wl(e,t){switch(we(Ir,t),we(zr,e),we(bt,Lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ki(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ki(t,e)}je(bt),we(bt,t)}function Jn(){je(bt),je(zr),je(Ir)}function su(e){vn(Ir.current);var t=vn(bt.current),n=ki(t,e.type);t!==n&&(we(zr,e),we(bt,n))}function kl(e){zr.current===e&&(je(bt),je(zr))}var Ne=Yt(0);function Do(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sl=[];function jl(){for(var e=0;e<Sl.length;e++)Sl[e]._workInProgressVersionPrimary=null;Sl.length=0}var Oo=V.ReactCurrentDispatcher,Cl=V.ReactCurrentBatchConfig,yn=0,Pe=null,Fe=null,Me=null,Fo=!1,Dr=!1,Or=0,Lf=0;function qe(){throw Error(u(321))}function El(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function Nl(e,t,n,r,o,l){if(yn=l,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oo.current=e===null||e.memoizedState===null?Of:Ff,e=n(r,o),Dr){l=0;do{if(Dr=!1,Or=0,25<=l)throw Error(u(301));l+=1,Me=Fe=null,t.updateQueue=null,Oo.current=Af,e=n(r,o)}while(Dr)}if(Oo.current=Uo,t=Fe!==null&&Fe.next!==null,yn=0,Me=Fe=Pe=null,Fo=!1,t)throw Error(u(300));return e}function Pl(){var e=Or!==0;return Or=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Pe.memoizedState=Me=e:Me=Me.next=e,Me}function pt(){if(Fe===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=Me===null?Pe.memoizedState:Me.next;if(t!==null)Me=t,Fe=e;else{if(e===null)throw Error(u(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Me===null?Pe.memoizedState=Me=e:Me=Me.next=e}return Me}function Fr(e,t){return typeof t=="function"?t(e):t}function _l(e){var t=pt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=Fe,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var c=o.next;o.next=l.next,l.next=c}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var p=c=null,g=null,P=l;do{var L=P.lane;if((yn&L)===L)g!==null&&(g=g.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),r=P.hasEagerState?P.eagerState:e(r,P.action);else{var I={lane:L,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};g===null?(p=g=I,c=r):g=g.next=I,Pe.lanes|=L,xn|=L}P=P.next}while(P!==null&&P!==l);g===null?c=r:g.next=p,xt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=c,t.baseQueue=g,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Pe.lanes|=l,xn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bl(e){var t=pt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var c=o=o.next;do l=e(l,c.action),c=c.next;while(c!==o);xt(l,t.memoizedState)||(tt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function uu(){}function cu(e,t){var n=Pe,r=pt(),o=t(),l=!xt(r.memoizedState,o);if(l&&(r.memoizedState=o,tt=!0),r=r.queue,Tl(pu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Ar(9,fu.bind(null,n,r,o,t),void 0,null),Ue===null)throw Error(u(349));(yn&30)!==0||du(n,t,o)}return o}function du(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fu(e,t,n,r){t.value=n,t.getSnapshot=r,mu(t)&&hu(e)}function pu(e,t,n){return n(function(){mu(t)&&hu(e)})}function mu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function hu(e){var t=At(e,1);t!==null&&Ct(t,e,1,-1)}function gu(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:e},t.queue=e,e=e.dispatch=Df.bind(null,Pe,e),[t.memoizedState,e]}function Ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vu(){return pt().memoizedState}function Ao(e,t,n,r){var o=Tt();Pe.flags|=e,o.memoizedState=Ar(1|t,n,void 0,r===void 0?null:r)}function Mo(e,t,n,r){var o=pt();r=r===void 0?null:r;var l=void 0;if(Fe!==null){var c=Fe.memoizedState;if(l=c.destroy,r!==null&&El(r,c.deps)){o.memoizedState=Ar(t,n,l,r);return}}Pe.flags|=e,o.memoizedState=Ar(1|t,n,l,r)}function yu(e,t){return Ao(8390656,8,e,t)}function Tl(e,t){return Mo(2048,8,e,t)}function xu(e,t){return Mo(4,2,e,t)}function wu(e,t){return Mo(4,4,e,t)}function ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Su(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4,4,ku.bind(null,t,e),n)}function Rl(){}function ju(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&El(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cu(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&El(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Eu(e,t,n){return(yn&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n):(xt(n,t)||(n=ts(),Pe.lanes|=n,xn|=n,e.baseState=!0),t)}function zf(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=Cl.transition;Cl.transition={};try{e(!1),t()}finally{ge=n,Cl.transition=r}}function Nu(){return pt().memoizedState}function If(e,t,n){var r=on(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pu(e))_u(t,n);else if(n=ou(e,t,n,r),n!==null){var o=Je();Ct(n,e,r,o),bu(n,t,r)}}function Df(e,t,n){var r=on(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pu(e))_u(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var c=t.lastRenderedState,p=l(c,n);if(o.hasEagerState=!0,o.eagerState=p,xt(p,c)){var g=t.interleaved;g===null?(o.next=o,yl(t)):(o.next=g.next,g.next=o),t.interleaved=o;return}}catch{}finally{}n=ou(e,t,o,r),n!==null&&(o=Je(),Ct(n,e,r,o),bu(n,t,r))}}function Pu(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function _u(e,t){Dr=Fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zi(e,n)}}var Uo={readContext:ft,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Of={readContext:ft,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:yu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4194308,4,ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ao(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=If.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:gu,useDebugValue:Rl,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=gu(!1),t=e[0];return e=zf.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,o=Tt();if(Ce){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Ue===null)throw Error(u(349));(yn&30)!==0||du(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,yu(pu.bind(null,r,l,e),[e]),r.flags|=2048,Ar(9,fu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Tt(),t=Ue.identifierPrefix;if(Ce){var n=Ft,r=Ot;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ff={readContext:ft,useCallback:ju,useContext:ft,useEffect:Tl,useImperativeHandle:Su,useInsertionEffect:xu,useLayoutEffect:wu,useMemo:Cu,useReducer:_l,useRef:vu,useState:function(){return _l(Fr)},useDebugValue:Rl,useDeferredValue:function(e){var t=pt();return Eu(t,Fe.memoizedState,e)},useTransition:function(){var e=_l(Fr)[0],t=pt().memoizedState;return[e,t]},useMutableSource:uu,useSyncExternalStore:cu,useId:Nu,unstable_isNewReconciler:!1},Af={readContext:ft,useCallback:ju,useContext:ft,useEffect:Tl,useImperativeHandle:Su,useInsertionEffect:xu,useLayoutEffect:wu,useMemo:Cu,useReducer:bl,useRef:vu,useState:function(){return bl(Fr)},useDebugValue:Rl,useDeferredValue:function(e){var t=pt();return Fe===null?t.memoizedState=e:Eu(t,Fe.memoizedState,e)},useTransition:function(){var e=bl(Fr)[0],t=pt().memoizedState;return[e,t]},useMutableSource:uu,useSyncExternalStore:cu,useId:Nu,unstable_isNewReconciler:!1};function kt(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ll(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $o={isMounted:function(e){return(e=e._reactInternals)?dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),o=on(e),l=Mt(r,o);l.payload=t,n!=null&&(l.callback=n),t=en(e,l,o),t!==null&&(Ct(t,e,o,r),zo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),o=on(e),l=Mt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=en(e,l,o),t!==null&&(Ct(t,e,o,r),zo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=on(e),o=Mt(n,r);o.tag=2,t!=null&&(o.callback=t),t=en(e,o,r),t!==null&&(Ct(t,e,r,n),zo(t,e,r))}};function Tu(e,t,n,r,o,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,c):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(o,l):!0}function Ru(e,t,n){var r=!1,o=Jt,l=t.contextType;return typeof l=="object"&&l!==null?l=ft(l):(o=et(t)?pn:Ve.current,r=t.contextTypes,l=(r=r!=null)?Wn(e,o):Jt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Lu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$o.enqueueReplaceState(t,t.state,null)}function zl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},xl(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=ft(l):(l=et(t)?pn:Ve.current,o.context=Wn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ll(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&$o.enqueueReplaceState(o,o.state,null),Io(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t){try{var n="",r=t;do n+=ce(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Dl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mf=typeof WeakMap=="function"?WeakMap:Map;function zu(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Go||(Go=!0,Yl=r),Dl(e,t)},n}function Iu(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Dl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Dl(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function Du(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Zf.bind(null,e,t,n),t.then(e,e))}function Ou(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Uf=V.ReactCurrentOwner,tt=!1;function Ye(e,t,n,r){t.child=e===null?ru(t,null,n,r):Gn(t,e.child,n,r)}function Au(e,t,n,r,o){n=n.render;var l=t.ref;return Yn(t,o),r=Nl(e,t,n,r,l,o),n=Pl(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ut(e,t,o)):(Ce&&n&&ul(t),t.flags|=1,Ye(e,t,r,o),t.child)}function Mu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!ra(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Uu(e,t,l,r,o)):(e=ei(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var c=l.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(c,r)&&e.ref===t.ref)return Ut(e,t,o)}return t.flags|=1,e=an(l,r),e.ref=t.ref,e.return=t,t.child=e}function Uu(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Cr(l,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Ut(e,t,o)}return Ol(e,t,n,r,o)}function $u(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(er,st),st|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(er,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,we(er,st),st|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,we(er,st),st|=r;return Ye(e,t,o,n),t.child}function Bu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ol(e,t,n,r,o){var l=et(n)?pn:Ve.current;return l=Wn(t,l),Yn(t,o),n=Nl(e,t,n,r,l,o),r=Pl(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ut(e,t,o)):(Ce&&r&&ul(t),t.flags|=1,Ye(e,t,n,o),t.child)}function Hu(e,t,n,r,o){if(et(n)){var l=!0;Eo(t)}else l=!1;if(Yn(t,o),t.stateNode===null)Ho(e,t),Ru(t,n,r),zl(t,n,r,o),r=!0;else if(e===null){var c=t.stateNode,p=t.memoizedProps;c.props=p;var g=c.context,P=n.contextType;typeof P=="object"&&P!==null?P=ft(P):(P=et(n)?pn:Ve.current,P=Wn(t,P));var L=n.getDerivedStateFromProps,I=typeof L=="function"||typeof c.getSnapshotBeforeUpdate=="function";I||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==r||g!==P)&&Lu(t,c,r,P),Zt=!1;var R=t.memoizedState;c.state=R,Io(t,r,c,o),g=t.memoizedState,p!==r||R!==g||Ze.current||Zt?(typeof L=="function"&&(Ll(t,n,L,r),g=t.memoizedState),(p=Zt||Tu(t,n,p,r,R,g,P))?(I||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=g),c.props=r,c.state=g,c.context=P,r=p):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,iu(e,t),p=t.memoizedProps,P=t.type===t.elementType?p:kt(t.type,p),c.props=P,I=t.pendingProps,R=c.context,g=n.contextType,typeof g=="object"&&g!==null?g=ft(g):(g=et(n)?pn:Ve.current,g=Wn(t,g));var U=n.getDerivedStateFromProps;(L=typeof U=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==I||R!==g)&&Lu(t,c,r,g),Zt=!1,R=t.memoizedState,c.state=R,Io(t,r,c,o);var W=t.memoizedState;p!==I||R!==W||Ze.current||Zt?(typeof U=="function"&&(Ll(t,n,U,r),W=t.memoizedState),(P=Zt||Tu(t,n,P,r,R,W,g)||!1)?(L||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,W,g),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,W,g)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=W),c.props=r,c.state=W,c.context=g,r=P):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),r=!1)}return Fl(e,t,n,r,l,o)}function Fl(e,t,n,r,o,l){Bu(e,t);var c=(t.flags&128)!==0;if(!r&&!c)return o&&Gs(t,n,!1),Ut(e,t,l);r=t.stateNode,Uf.current=t;var p=c&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&c?(t.child=Gn(t,e.child,null,l),t.child=Gn(t,null,p,l)):Ye(e,t,p,l),t.memoizedState=r.state,o&&Gs(t,n,!0),t.child}function Wu(e){var t=e.stateNode;t.pendingContext?qs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qs(e,t.context,!1),wl(e,t.containerInfo)}function Vu(e,t,n,r,o){return Qn(),pl(o),t.flags|=256,Ye(e,t,n,r),t.child}var Al={dehydrated:null,treeContext:null,retryLane:0};function Ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function qu(e,t,n){var r=t.pendingProps,o=Ne.current,l=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(o&2)!==0),p?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),we(Ne,o&1),e===null)return fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=r.children,e=r.fallback,l?(r=t.mode,l=t.child,c={mode:"hidden",children:c},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=c):l=ti(c,r,0,null),e=jn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ml(n),t.memoizedState=Al,e):Ul(t,c));if(o=e.memoizedState,o!==null&&(p=o.dehydrated,p!==null))return $f(e,t,c,r,p,o,n);if(l){l=r.fallback,c=t.mode,o=e.child,p=o.sibling;var g={mode:"hidden",children:r.children};return(c&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=g,t.deletions=null):(r=an(o,g),r.subtreeFlags=o.subtreeFlags&14680064),p!==null?l=an(p,l):(l=jn(l,c,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,c=e.child.memoizedState,c=c===null?Ml(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=e.childLanes&~n,t.memoizedState=Al,r}return l=e.child,e=l.sibling,r=an(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ul(e,t){return t=ti({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bo(e,t,n,r){return r!==null&&pl(r),Gn(t,e.child,null,n),e=Ul(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $f(e,t,n,r,o,l,c){if(n)return t.flags&256?(t.flags&=-257,r=Il(Error(u(422))),Bo(e,t,c,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=ti({mode:"visible",children:r.children},o,0,null),l=jn(l,o,c,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Gn(t,e.child,null,c),t.child.memoizedState=Ml(c),t.memoizedState=Al,l);if((t.mode&1)===0)return Bo(e,t,c,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var p=r.dgst;return r=p,l=Error(u(419)),r=Il(l,r,void 0),Bo(e,t,c,r)}if(p=(c&e.childLanes)!==0,tt||p){if(r=Ue,r!==null){switch(c&-c){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|c))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,At(e,o),Ct(r,e,o,-1))}return na(),r=Il(Error(u(421))),Bo(e,t,c,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ep.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,at=Kt(o.nextSibling),lt=t,Ce=!0,wt=null,e!==null&&(ct[dt++]=Ot,ct[dt++]=Ft,ct[dt++]=mn,Ot=e.id,Ft=e.overflow,mn=t),t=Ul(t,r.children),t.flags|=4096,t)}function Qu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),vl(e.return,t,n)}function $l(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Gu(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Ye(e,t,r.children,n),r=Ne.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qu(e,n,t);else if(e.tag===19)Qu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(we(Ne,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Do(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),$l(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Do(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}$l(t,!0,n,null,l);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ho(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bf(e,t,n){switch(t.tag){case 3:Wu(t),Qn();break;case 5:su(t);break;case 1:et(t.type)&&Eo(t);break;case 4:wl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;we(Ro,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(we(Ne,Ne.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?qu(e,t,n):(we(Ne,Ne.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);we(Ne,Ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Gu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),we(Ne,Ne.current),r)break;return null;case 22:case 23:return t.lanes=0,$u(e,t,n)}return Ut(e,t,n)}var Ku,Bl,Yu,Ju;Ku=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Bl=function(){},Yu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,vn(bt.current);var l=null;switch(n){case"input":o=h(e,o),r=h(e,r),l=[];break;case"select":o=B({},o,{value:void 0}),r=B({},r,{value:void 0}),l=[];break;case"textarea":o=wi(e,o),r=wi(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=So)}Si(n,r);var c;n=null;for(P in o)if(!r.hasOwnProperty(P)&&o.hasOwnProperty(P)&&o[P]!=null)if(P==="style"){var p=o[P];for(c in p)p.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(f.hasOwnProperty(P)?l||(l=[]):(l=l||[]).push(P,null));for(P in r){var g=r[P];if(p=o!=null?o[P]:void 0,r.hasOwnProperty(P)&&g!==p&&(g!=null||p!=null))if(P==="style")if(p){for(c in p)!p.hasOwnProperty(c)||g&&g.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in g)g.hasOwnProperty(c)&&p[c]!==g[c]&&(n||(n={}),n[c]=g[c])}else n||(l||(l=[]),l.push(P,n)),n=g;else P==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,p=p?p.__html:void 0,g!=null&&p!==g&&(l=l||[]).push(P,g)):P==="children"?typeof g!="string"&&typeof g!="number"||(l=l||[]).push(P,""+g):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(f.hasOwnProperty(P)?(g!=null&&P==="onScroll"&&Se("scroll",e),l||p===g||(l=[])):(l=l||[]).push(P,g))}n&&(l=l||[]).push("style",n);var P=l;(t.updateQueue=P)&&(t.flags|=4)}},Ju=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mr(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hf(e,t,n){var r=t.pendingProps;switch(cl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return et(t.type)&&Co(),Qe(t),null;case 3:return r=t.stateNode,Jn(),je(Ze),je(Ve),jl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wt!==null&&(Zl(wt),wt=null))),Bl(e,t),Qe(t),null;case 5:kl(t);var o=vn(Ir.current);if(n=t.type,e!==null&&t.stateNode!=null)Yu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Qe(t),null}if(e=vn(bt.current),bo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[_t]=t,r[br]=l,e=(t.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(o=0;o<Nr.length;o++)Se(Nr[o],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":re(r,l),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Se("invalid",r);break;case"textarea":Ia(r,l),Se("invalid",r)}Si(n,l),o=null;for(var c in l)if(l.hasOwnProperty(c)){var p=l[c];c==="children"?typeof p=="string"?r.textContent!==p&&(l.suppressHydrationWarning!==!0&&ko(r.textContent,p,e),o=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(l.suppressHydrationWarning!==!0&&ko(r.textContent,p,e),o=["children",""+p]):f.hasOwnProperty(c)&&p!=null&&c==="onScroll"&&Se("scroll",r)}switch(n){case"input":bn(r),Rn(r,l,!0);break;case"textarea":bn(r),Oa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=So)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),n==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[_t]=t,e[br]=r,Ku(e,t,!1,!1),t.stateNode=e;e:{switch(c=ji(n,r),n){case"dialog":Se("cancel",e),Se("close",e),o=r;break;case"iframe":case"object":case"embed":Se("load",e),o=r;break;case"video":case"audio":for(o=0;o<Nr.length;o++)Se(Nr[o],e);o=r;break;case"source":Se("error",e),o=r;break;case"img":case"image":case"link":Se("error",e),Se("load",e),o=r;break;case"details":Se("toggle",e),o=r;break;case"input":re(e,r),o=h(e,r),Se("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=B({},r,{value:void 0}),Se("invalid",e);break;case"textarea":Ia(e,r),o=wi(e,r),Se("invalid",e);break;default:o=r}Si(n,o),p=o;for(l in p)if(p.hasOwnProperty(l)){var g=p[l];l==="style"?Ua(e,g):l==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&Aa(e,g)):l==="children"?typeof g=="string"?(n!=="textarea"||g!=="")&&ar(e,g):typeof g=="number"&&ar(e,""+g):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(f.hasOwnProperty(l)?g!=null&&l==="onScroll"&&Se("scroll",e):g!=null&&ee(e,l,g,c))}switch(n){case"input":bn(e),Rn(e,r,!1);break;case"textarea":bn(e),Oa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+me(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Ln(e,!!r.multiple,l,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=So)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)Ju(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=vn(Ir.current),vn(bt.current),bo(t)){if(r=t.stateNode,n=t.memoizedProps,r[_t]=t,(l=r.nodeValue!==n)&&(e=lt,e!==null))switch(e.tag){case 3:ko(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ko(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=t,t.stateNode=r}return Qe(t),null;case 13:if(je(Ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&at!==null&&(t.mode&1)!==0&&(t.flags&128)===0)eu(),Qn(),t.flags|=98560,l=!1;else if(l=bo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[_t]=t}else Qn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Qe(t),l=!1}else wt!==null&&(Zl(wt),wt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ne.current&1)!==0?Ae===0&&(Ae=3):na())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return Jn(),Bl(e,t),e===null&&Pr(t.stateNode.containerInfo),Qe(t),null;case 10:return gl(t.type._context),Qe(t),null;case 17:return et(t.type)&&Co(),Qe(t),null;case 19:if(je(Ne),l=t.memoizedState,l===null)return Qe(t),null;if(r=(t.flags&128)!==0,c=l.rendering,c===null)if(r)Mr(l,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Do(e),c!==null){for(t.flags|=128,Mr(l,!1),r=c.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return we(Ne,Ne.current&1|2),t.child}e=e.sibling}l.tail!==null&&Re()>tr&&(t.flags|=128,r=!0,Mr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Do(c),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!Ce)return Qe(t),null}else 2*Re()-l.renderingStartTime>tr&&n!==1073741824&&(t.flags|=128,r=!0,Mr(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(n=l.last,n!==null?n.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Re(),t.sibling=null,n=Ne.current,we(Ne,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return ta(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(st&1073741824)!==0&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function Wf(e,t){switch(cl(t),t.tag){case 1:return et(t.type)&&Co(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jn(),je(Ze),je(Ve),jl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return kl(t),null;case 13:if(je(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Ne),null;case 4:return Jn(),null;case 10:return gl(t.type._context),null;case 22:case 23:return ta(),null;case 24:return null;default:return null}}var Wo=!1,Ge=!1,Vf=typeof WeakSet=="function"?WeakSet:Set,H=null;function Zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(e,t,r)}else n.current=null}function Hl(e,t,n){try{n()}catch(r){be(e,t,r)}}var Xu=!1;function qf(e,t){if(tl=uo,e=Ts(),Qi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var c=0,p=-1,g=-1,P=0,L=0,I=e,R=null;t:for(;;){for(var U;I!==n||o!==0&&I.nodeType!==3||(p=c+o),I!==l||r!==0&&I.nodeType!==3||(g=c+r),I.nodeType===3&&(c+=I.nodeValue.length),(U=I.firstChild)!==null;)R=I,I=U;for(;;){if(I===e)break t;if(R===n&&++P===o&&(p=c),R===l&&++L===r&&(g=c),(U=I.nextSibling)!==null)break;I=R,R=I.parentNode}I=U}n=p===-1||g===-1?null:{start:p,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(nl={focusedElem:e,selectionRange:n},uo=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var W=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(W!==null){var Q=W.memoizedProps,Le=W.memoizedState,C=t.stateNode,y=C.getSnapshotBeforeUpdate(t.elementType===t.type?Q:kt(t.type,Q),Le);C.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(O){be(t,t.return,O)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return W=Xu,Xu=!1,W}function Ur(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Hl(t,n,l)}o=o.next}while(o!==r)}}function Vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zu(e){var t=e.alternate;t!==null&&(e.alternate=null,Zu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[br],delete t[ll],delete t[_f],delete t[bf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ec(e){return e.tag===5||e.tag===3||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=So));else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}function ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}var He=null,St=!1;function tn(e,t,n){for(n=n.child;n!==null;)nc(e,t,n),n=n.sibling}function nc(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(ro,n)}catch{}switch(n.tag){case 5:Ge||Zn(n,t);case 6:var r=He,o=St;He=null,tn(e,t,n),He=r,St=o,He!==null&&(St?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(St?(e=He,n=n.stateNode,e.nodeType===8?il(e.parentNode,n):e.nodeType===1&&il(e,n),yr(e)):il(He,n.stateNode));break;case 4:r=He,o=St,He=n.stateNode.containerInfo,St=!0,tn(e,t,n),He=r,St=o;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,c=l.destroy;l=l.tag,c!==void 0&&((l&2)!==0||(l&4)!==0)&&Hl(n,t,c),o=o.next}while(o!==r)}tn(e,t,n);break;case 1:if(!Ge&&(Zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(p){be(n,t,p)}tn(e,t,n);break;case 21:tn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,tn(e,t,n),Ge=r):tn(e,t,n);break;default:tn(e,t,n)}}function rc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vf),t.forEach(function(r){var o=tp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,c=t,p=c;e:for(;p!==null;){switch(p.tag){case 5:He=p.stateNode,St=!1;break e;case 3:He=p.stateNode.containerInfo,St=!0;break e;case 4:He=p.stateNode.containerInfo,St=!0;break e}p=p.return}if(He===null)throw Error(u(160));nc(l,c,o),He=null,St=!1;var g=o.alternate;g!==null&&(g.return=null),o.return=null}catch(P){be(o,t,P)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)oc(t,e),t=t.sibling}function oc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),Rt(e),r&4){try{Ur(3,e,e.return),Vo(3,e)}catch(Q){be(e,e.return,Q)}try{Ur(5,e,e.return)}catch(Q){be(e,e.return,Q)}}break;case 1:jt(t,e),Rt(e),r&512&&n!==null&&Zn(n,n.return);break;case 5:if(jt(t,e),Rt(e),r&512&&n!==null&&Zn(n,n.return),e.flags&32){var o=e.stateNode;try{ar(o,"")}catch(Q){be(e,e.return,Q)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,c=n!==null?n.memoizedProps:l,p=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{p==="input"&&l.type==="radio"&&l.name!=null&&Oe(o,l),ji(p,c);var P=ji(p,l);for(c=0;c<g.length;c+=2){var L=g[c],I=g[c+1];L==="style"?Ua(o,I):L==="dangerouslySetInnerHTML"?Aa(o,I):L==="children"?ar(o,I):ee(o,L,I,P)}switch(p){case"input":Xe(o,l);break;case"textarea":Da(o,l);break;case"select":var R=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var U=l.value;U!=null?Ln(o,!!l.multiple,U,!1):R!==!!l.multiple&&(l.defaultValue!=null?Ln(o,!!l.multiple,l.defaultValue,!0):Ln(o,!!l.multiple,l.multiple?[]:"",!1))}o[br]=l}catch(Q){be(e,e.return,Q)}}break;case 6:if(jt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(u(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(Q){be(e,e.return,Q)}}break;case 3:if(jt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yr(t.containerInfo)}catch(Q){be(e,e.return,Q)}break;case 4:jt(t,e),Rt(e);break;case 13:jt(t,e),Rt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Kl=Re())),r&4&&rc(e);break;case 22:if(L=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(P=Ge)||L,jt(t,e),Ge=P):jt(t,e),Rt(e),r&8192){if(P=e.memoizedState!==null,(e.stateNode.isHidden=P)&&!L&&(e.mode&1)!==0)for(H=e,L=e.child;L!==null;){for(I=H=L;H!==null;){switch(R=H,U=R.child,R.tag){case 0:case 11:case 14:case 15:Ur(4,R,R.return);break;case 1:Zn(R,R.return);var W=R.stateNode;if(typeof W.componentWillUnmount=="function"){r=R,n=R.return;try{t=r,W.props=t.memoizedProps,W.state=t.memoizedState,W.componentWillUnmount()}catch(Q){be(r,n,Q)}}break;case 5:Zn(R,R.return);break;case 22:if(R.memoizedState!==null){ac(I);continue}}U!==null?(U.return=R,H=U):ac(I)}L=L.sibling}e:for(L=null,I=e;;){if(I.tag===5){if(L===null){L=I;try{o=I.stateNode,P?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(p=I.stateNode,g=I.memoizedProps.style,c=g!=null&&g.hasOwnProperty("display")?g.display:null,p.style.display=Ma("display",c))}catch(Q){be(e,e.return,Q)}}}else if(I.tag===6){if(L===null)try{I.stateNode.nodeValue=P?"":I.memoizedProps}catch(Q){be(e,e.return,Q)}}else if((I.tag!==22&&I.tag!==23||I.memoizedState===null||I===e)&&I.child!==null){I.child.return=I,I=I.child;continue}if(I===e)break e;for(;I.sibling===null;){if(I.return===null||I.return===e)break e;L===I&&(L=null),I=I.return}L===I&&(L=null),I.sibling.return=I.return,I=I.sibling}}break;case 19:jt(t,e),Rt(e),r&4&&rc(e);break;case 21:break;default:jt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ec(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ar(o,""),r.flags&=-33);var l=tc(e);ql(e,l,o);break;case 3:case 4:var c=r.stateNode.containerInfo,p=tc(e);Vl(e,p,c);break;default:throw Error(u(161))}}catch(g){be(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qf(e,t,n){H=e,ic(e)}function ic(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var o=H,l=o.child;if(o.tag===22&&r){var c=o.memoizedState!==null||Wo;if(!c){var p=o.alternate,g=p!==null&&p.memoizedState!==null||Ge;p=Wo;var P=Ge;if(Wo=c,(Ge=g)&&!P)for(H=o;H!==null;)c=H,g=c.child,c.tag===22&&c.memoizedState!==null?sc(o):g!==null?(g.return=c,H=g):sc(o);for(;l!==null;)H=l,ic(l),l=l.sibling;H=o,Wo=p,Ge=P}lc(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,H=l):lc(e)}}function lc(e){for(;H!==null;){var t=H;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||Vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&au(t,l,r);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}au(t,c,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&n.focus();break;case"img":g.src&&(n.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var P=t.alternate;if(P!==null){var L=P.memoizedState;if(L!==null){var I=L.dehydrated;I!==null&&yr(I)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Ge||t.flags&512&&Wl(t)}catch(R){be(t,t.return,R)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function ac(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function sc(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vo(4,t)}catch(g){be(t,n,g)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(g){be(t,o,g)}}var l=t.return;try{Wl(t)}catch(g){be(t,l,g)}break;case 5:var c=t.return;try{Wl(t)}catch(g){be(t,c,g)}}}catch(g){be(t,t.return,g)}if(t===e){H=null;break}var p=t.sibling;if(p!==null){p.return=t.return,H=p;break}H=t.return}}var Gf=Math.ceil,qo=V.ReactCurrentDispatcher,Ql=V.ReactCurrentOwner,mt=V.ReactCurrentBatchConfig,fe=0,Ue=null,Ie=null,We=0,st=0,er=Yt(0),Ae=0,$r=null,xn=0,Qo=0,Gl=0,Br=null,nt=null,Kl=0,tr=1/0,$t=null,Go=!1,Yl=null,nn=null,Ko=!1,rn=null,Yo=0,Hr=0,Jl=null,Jo=-1,Xo=0;function Je(){return(fe&6)!==0?Re():Jo!==-1?Jo:Jo=Re()}function on(e){return(e.mode&1)===0?1:(fe&2)!==0&&We!==0?We&-We:Rf.transition!==null?(Xo===0&&(Xo=ts()),Xo):(e=ge,e!==0||(e=window.event,e=e===void 0?16:cs(e.type)),e)}function Ct(e,t,n,r){if(50<Hr)throw Hr=0,Jl=null,Error(u(185));pr(e,n,r),((fe&2)===0||e!==Ue)&&(e===Ue&&((fe&2)===0&&(Qo|=n),Ae===4&&ln(e,We)),rt(e,r),n===1&&fe===0&&(t.mode&1)===0&&(tr=Re()+500,No&&Xt()))}function rt(e,t){var n=e.callbackNode;Td(e,t);var r=lo(e,e===Ue?We:0);if(r===0)n!==null&&Xa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xa(n),t===1)e.tag===0?Tf(cc.bind(null,e)):Ks(cc.bind(null,e)),Nf(function(){(fe&6)===0&&Xt()}),n=null;else{switch(ns(r)){case 1:n=Ti;break;case 4:n=Za;break;case 16:n=no;break;case 536870912:n=es;break;default:n=no}n=yc(n,uc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function uc(e,t){if(Jo=-1,Xo=0,(fe&6)!==0)throw Error(u(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=lo(e,e===Ue?We:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Zo(e,r);else{t=r;var o=fe;fe|=2;var l=fc();(Ue!==e||We!==t)&&($t=null,tr=Re()+500,kn(e,t));do try{Jf();break}catch(p){dc(e,p)}while(!0);hl(),qo.current=l,fe=o,Ie!==null?t=0:(Ue=null,We=0,t=Ae)}if(t!==0){if(t===2&&(o=Ri(e),o!==0&&(r=o,t=Xl(e,o))),t===1)throw n=$r,kn(e,0),ln(e,r),rt(e,Re()),n;if(t===6)ln(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Kf(o)&&(t=Zo(e,r),t===2&&(l=Ri(e),l!==0&&(r=l,t=Xl(e,l))),t===1))throw n=$r,kn(e,0),ln(e,r),rt(e,Re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:Sn(e,nt,$t);break;case 3:if(ln(e,r),(r&130023424)===r&&(t=Kl+500-Re(),10<t)){if(lo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ol(Sn.bind(null,e,nt,$t),t);break}Sn(e,nt,$t);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var c=31-yt(r);l=1<<c,c=t[c],c>o&&(o=c),r&=~l}if(r=o,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gf(r/1960))-r,10<r){e.timeoutHandle=ol(Sn.bind(null,e,nt,$t),r);break}Sn(e,nt,$t);break;case 5:Sn(e,nt,$t);break;default:throw Error(u(329))}}}return rt(e,Re()),e.callbackNode===n?uc.bind(null,e):null}function Xl(e,t){var n=Br;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=Zo(e,t),e!==2&&(t=nt,nt=n,t!==null&&Zl(t)),e}function Zl(e){nt===null?nt=e:nt.push.apply(nt,e)}function Kf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!xt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~Gl,t&=~Qo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function cc(e){if((fe&6)!==0)throw Error(u(327));nr();var t=lo(e,0);if((t&1)===0)return rt(e,Re()),null;var n=Zo(e,t);if(e.tag!==0&&n===2){var r=Ri(e);r!==0&&(t=r,n=Xl(e,r))}if(n===1)throw n=$r,kn(e,0),ln(e,t),rt(e,Re()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sn(e,nt,$t),rt(e,Re()),null}function ea(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(tr=Re()+500,No&&Xt())}}function wn(e){rn!==null&&rn.tag===0&&(fe&6)===0&&nr();var t=fe;fe|=1;var n=mt.transition,r=ge;try{if(mt.transition=null,ge=1,e)return e()}finally{ge=r,mt.transition=n,fe=t,(fe&6)===0&&Xt()}}function ta(){st=er.current,je(er)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ef(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(cl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Co();break;case 3:Jn(),je(Ze),je(Ve),jl();break;case 5:kl(r);break;case 4:Jn();break;case 13:je(Ne);break;case 19:je(Ne);break;case 10:gl(r.type._context);break;case 22:case 23:ta()}n=n.return}if(Ue=e,Ie=e=an(e.current,null),We=st=t,Ae=0,$r=null,Gl=Qo=xn=0,nt=Br=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var c=l.next;l.next=o,r.next=c}n.pending=r}gn=null}return e}function dc(e,t){do{var n=Ie;try{if(hl(),Oo.current=Uo,Fo){for(var r=Pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Fo=!1}if(yn=0,Me=Fe=Pe=null,Dr=!1,Or=0,Ql.current=null,n===null||n.return===null){Ae=1,$r=t,Ie=null;break}e:{var l=e,c=n.return,p=n,g=t;if(t=We,p.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var P=g,L=p,I=L.tag;if((L.mode&1)===0&&(I===0||I===11||I===15)){var R=L.alternate;R?(L.updateQueue=R.updateQueue,L.memoizedState=R.memoizedState,L.lanes=R.lanes):(L.updateQueue=null,L.memoizedState=null)}var U=Ou(c);if(U!==null){U.flags&=-257,Fu(U,c,p,l,t),U.mode&1&&Du(l,P,t),t=U,g=P;var W=t.updateQueue;if(W===null){var Q=new Set;Q.add(g),t.updateQueue=Q}else W.add(g);break e}else{if((t&1)===0){Du(l,P,t),na();break e}g=Error(u(426))}}else if(Ce&&p.mode&1){var Le=Ou(c);if(Le!==null){(Le.flags&65536)===0&&(Le.flags|=256),Fu(Le,c,p,l,t),pl(Xn(g,p));break e}}l=g=Xn(g,p),Ae!==4&&(Ae=2),Br===null?Br=[l]:Br.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var C=zu(l,g,t);lu(l,C);break e;case 1:p=g;var y=l.type,E=l.stateNode;if((l.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(nn===null||!nn.has(E)))){l.flags|=65536,t&=-t,l.lanes|=t;var O=Iu(l,p,t);lu(l,O);break e}}l=l.return}while(l!==null)}mc(n)}catch(G){t=G,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function fc(){var e=qo.current;return qo.current=Uo,e===null?Uo:e}function na(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Ue===null||(xn&268435455)===0&&(Qo&268435455)===0||ln(Ue,We)}function Zo(e,t){var n=fe;fe|=2;var r=fc();(Ue!==e||We!==t)&&($t=null,kn(e,t));do try{Yf();break}catch(o){dc(e,o)}while(!0);if(hl(),fe=n,qo.current=r,Ie!==null)throw Error(u(261));return Ue=null,We=0,Ae}function Yf(){for(;Ie!==null;)pc(Ie)}function Jf(){for(;Ie!==null&&!kd();)pc(Ie)}function pc(e){var t=vc(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?mc(e):Ie=t,Ql.current=null}function mc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Hf(n,t,st),n!==null){Ie=n;return}}else{if(n=Wf(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Ie=null;return}}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Ae===0&&(Ae=5)}function Sn(e,t,n){var r=ge,o=mt.transition;try{mt.transition=null,ge=1,Xf(e,t,n,r)}finally{mt.transition=o,ge=r}return null}function Xf(e,t,n,r){do nr();while(rn!==null);if((fe&6)!==0)throw Error(u(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Rd(e,l),e===Ue&&(Ie=Ue=null,We=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ko||(Ko=!0,yc(no,function(){return nr(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=mt.transition,mt.transition=null;var c=ge;ge=1;var p=fe;fe|=4,Ql.current=null,qf(e,n),oc(n,e),yf(nl),uo=!!tl,nl=tl=null,e.current=n,Qf(n),Sd(),fe=p,ge=c,mt.transition=l}else e.current=n;if(Ko&&(Ko=!1,rn=e,Yo=o),l=e.pendingLanes,l===0&&(nn=null),Ed(n.stateNode),rt(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Go)throw Go=!1,e=Yl,Yl=null,e;return(Yo&1)!==0&&e.tag!==0&&nr(),l=e.pendingLanes,(l&1)!==0?e===Jl?Hr++:(Hr=0,Jl=e):Hr=0,Xt(),null}function nr(){if(rn!==null){var e=ns(Yo),t=mt.transition,n=ge;try{if(mt.transition=null,ge=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,Yo=0,(fe&6)!==0)throw Error(u(331));var o=fe;for(fe|=4,H=e.current;H!==null;){var l=H,c=l.child;if((H.flags&16)!==0){var p=l.deletions;if(p!==null){for(var g=0;g<p.length;g++){var P=p[g];for(H=P;H!==null;){var L=H;switch(L.tag){case 0:case 11:case 15:Ur(8,L,l)}var I=L.child;if(I!==null)I.return=L,H=I;else for(;H!==null;){L=H;var R=L.sibling,U=L.return;if(Zu(L),L===P){H=null;break}if(R!==null){R.return=U,H=R;break}H=U}}}var W=l.alternate;if(W!==null){var Q=W.child;if(Q!==null){W.child=null;do{var Le=Q.sibling;Q.sibling=null,Q=Le}while(Q!==null)}}H=l}}if((l.subtreeFlags&2064)!==0&&c!==null)c.return=l,H=c;else e:for(;H!==null;){if(l=H,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Ur(9,l,l.return)}var C=l.sibling;if(C!==null){C.return=l.return,H=C;break e}H=l.return}}var y=e.current;for(H=y;H!==null;){c=H;var E=c.child;if((c.subtreeFlags&2064)!==0&&E!==null)E.return=c,H=E;else e:for(c=y;H!==null;){if(p=H,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Vo(9,p)}}catch(G){be(p,p.return,G)}if(p===c){H=null;break e}var O=p.sibling;if(O!==null){O.return=p.return,H=O;break e}H=p.return}}if(fe=o,Xt(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(ro,e)}catch{}r=!0}return r}finally{ge=n,mt.transition=t}}return!1}function hc(e,t,n){t=Xn(n,t),t=zu(e,t,1),e=en(e,t,1),t=Je(),e!==null&&(pr(e,1,t),rt(e,t))}function be(e,t,n){if(e.tag===3)hc(e,e,n);else for(;t!==null;){if(t.tag===3){hc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=Xn(n,e),e=Iu(t,e,1),t=en(t,e,1),e=Je(),t!==null&&(pr(t,1,e),rt(t,e));break}}t=t.return}}function Zf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,Ue===e&&(We&n)===n&&(Ae===4||Ae===3&&(We&130023424)===We&&500>Re()-Kl?kn(e,0):Gl|=n),rt(e,t)}function gc(e,t){t===0&&((e.mode&1)===0?t=1:(t=io,io<<=1,(io&130023424)===0&&(io=4194304)));var n=Je();e=At(e,t),e!==null&&(pr(e,t,n),rt(e,n))}function ep(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gc(e,n)}function tp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),gc(e,n)}var vc;vc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return tt=!1,Bf(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,Ce&&(t.flags&1048576)!==0&&Ys(t,_o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ho(e,t),e=t.pendingProps;var o=Wn(t,Ve.current);Yn(t,n),o=Nl(null,t,r,e,o,n);var l=Pl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(l=!0,Eo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,xl(t),o.updater=$o,t.stateNode=o,o._reactInternals=t,zl(t,r,e,n),t=Fl(null,t,r,!0,l,n)):(t.tag=0,Ce&&l&&ul(t),Ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ho(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=rp(r),e=kt(r,e),o){case 0:t=Ol(null,t,r,e,n);break e;case 1:t=Hu(null,t,r,e,n);break e;case 11:t=Au(null,t,r,e,n);break e;case 14:t=Mu(null,t,r,kt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Ol(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Hu(e,t,r,o,n);case 3:e:{if(Wu(t),e===null)throw Error(u(387));r=t.pendingProps,l=t.memoizedState,o=l.element,iu(e,t),Io(t,r,null,n);var c=t.memoizedState;if(r=c.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Xn(Error(u(423)),t),t=Vu(e,t,r,n,o);break e}else if(r!==o){o=Xn(Error(u(424)),t),t=Vu(e,t,r,n,o);break e}else for(at=Kt(t.stateNode.containerInfo.firstChild),lt=t,Ce=!0,wt=null,n=ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qn(),r===o){t=Ut(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return su(t),e===null&&fl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,c=o.children,rl(r,o)?c=null:l!==null&&rl(r,l)&&(t.flags|=32),Bu(e,t),Ye(e,t,c,n),t.child;case 6:return e===null&&fl(t),null;case 13:return qu(e,t,n);case 4:return wl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Au(e,t,r,o,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,c=o.value,we(Ro,r._currentValue),r._currentValue=c,l!==null)if(xt(l.value,c)){if(l.children===o.children&&!Ze.current){t=Ut(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var p=l.dependencies;if(p!==null){c=l.child;for(var g=p.firstContext;g!==null;){if(g.context===r){if(l.tag===1){g=Mt(-1,n&-n),g.tag=2;var P=l.updateQueue;if(P!==null){P=P.shared;var L=P.pending;L===null?g.next=g:(g.next=L.next,L.next=g),P.pending=g}}l.lanes|=n,g=l.alternate,g!==null&&(g.lanes|=n),vl(l.return,n,t),p.lanes|=n;break}g=g.next}}else if(l.tag===10)c=l.type===t.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(u(341));c.lanes|=n,p=c.alternate,p!==null&&(p.lanes|=n),vl(c,n,t),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===t){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}Ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Yn(t,n),o=ft(o),r=r(o),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,o=kt(r,t.pendingProps),o=kt(r.type,o),Mu(e,t,r,o,n);case 15:return Uu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Ho(e,t),t.tag=1,et(r)?(e=!0,Eo(t)):e=!1,Yn(t,n),Ru(t,r,o),zl(t,r,o,n),Fl(null,t,r,!0,e,n);case 19:return Gu(e,t,n);case 22:return $u(e,t,n)}throw Error(u(156,t.tag))};function yc(e,t){return Ja(e,t)}function np(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,r){return new np(e,t,n,r)}function ra(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rp(e){if(typeof e=="function")return ra(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Te)return 11;if(e===se)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ei(e,t,n,r,o,l){var c=2;if(r=e,typeof e=="function")ra(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case he:return jn(n.children,o,l,t);case K:c=8,o|=8;break;case ue:return e=ht(12,n,t,o|2),e.elementType=ue,e.lanes=l,e;case De:return e=ht(13,n,t,o),e.elementType=De,e.lanes=l,e;case X:return e=ht(19,n,t,o),e.elementType=X,e.lanes=l,e;case ke:return ti(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:c=10;break e;case Be:c=9;break e;case Te:c=11;break e;case se:c=14;break e;case ze:c=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=ht(c,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function jn(e,t,n,r){return e=ht(7,e,r,t),e.lanes=n,e}function ti(e,t,n,r){return e=ht(22,e,r,t),e.elementType=ke,e.lanes=n,e.stateNode={isHidden:!1},e}function oa(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function ia(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function op(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Li(0),this.expirationTimes=Li(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Li(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function la(e,t,n,r,o,l,c,p,g){return e=new op(e,t,n,p,g),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ht(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xl(l),e}function ip(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xc(e){if(!e)return Jt;e=e._reactInternals;e:{if(dn(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(et(n))return Qs(e,n,t)}return t}function wc(e,t,n,r,o,l,c,p,g){return e=la(n,r,!0,e,o,l,c,p,g),e.context=xc(null),n=e.current,r=Je(),o=on(n),l=Mt(r,o),l.callback=t??null,en(n,l,o),e.current.lanes=o,pr(e,o,r),rt(e,r),e}function ni(e,t,n,r){var o=t.current,l=Je(),c=on(o);return n=xc(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(l,c),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(o,t,c),e!==null&&(Ct(e,o,c,l),zo(e,o,c)),c}function ri(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function aa(e,t){kc(e,t),(e=e.alternate)&&kc(e,t)}function lp(){return null}var Sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function sa(e){this._internalRoot=e}oi.prototype.render=sa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));ni(e,t,null,null)},oi.prototype.unmount=sa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){ni(null,e,null,null)}),t[It]=null}};function oi(e){this._internalRoot=e}oi.prototype.unstable_scheduleHydration=function(e){if(e){var t=is();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&ss(e)}};function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jc(){}function ap(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var P=ri(c);l.call(P)}}var c=wc(t,r,e,0,null,!1,!1,"",jc);return e._reactRootContainer=c,e[It]=c.current,Pr(e.nodeType===8?e.parentNode:e),wn(),c}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var p=r;r=function(){var P=ri(g);p.call(P)}}var g=la(e,0,!1,null,null,!1,!1,"",jc);return e._reactRootContainer=g,e[It]=g.current,Pr(e.nodeType===8?e.parentNode:e),wn(function(){ni(t,g,n,r)}),g}function li(e,t,n,r,o){var l=n._reactRootContainer;if(l){var c=l;if(typeof o=="function"){var p=o;o=function(){var g=ri(c);p.call(g)}}ni(t,c,e,o)}else c=ap(n,t,e,o,r);return ri(c)}rs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(zi(t,n|1),rt(t,Re()),(fe&6)===0&&(tr=Re()+500,Xt()))}break;case 13:wn(function(){var r=At(e,1);if(r!==null){var o=Je();Ct(r,e,1,o)}}),aa(e,1)}},Ii=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Je();Ct(t,e,134217728,n)}aa(e,134217728)}},os=function(e){if(e.tag===13){var t=on(e),n=At(e,t);if(n!==null){var r=Je();Ct(n,e,t,r)}aa(e,t)}},is=function(){return ge},ls=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}},Ni=function(e,t,n){switch(t){case"input":if(Xe(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=jo(r);if(!o)throw Error(u(90));Xr(r),Xe(r,o)}}}break;case"textarea":Da(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}},Wa=ea,Va=wn;var sp={usingClientEntryPoint:!1,Events:[Tr,Bn,jo,Ba,Ha,ea]},Wr={findFiberByHostInstance:fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},up={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:V.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ka(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||lp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ai.isDisabled&&ai.supportsFiber)try{ro=ai.inject(up),Pt=ai}catch{}}return ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sp,ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ua(t))throw Error(u(200));return ip(e,t,null,n)},ot.createRoot=function(e,t){if(!ua(e))throw Error(u(299));var n=!1,r="",o=Sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=la(e,1,!1,null,null,n,!1,r,o),e[It]=t.current,Pr(e.nodeType===8?e.parentNode:e),new sa(t)},ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=Ka(t),e=e===null?null:e.stateNode,e},ot.flushSync=function(e){return wn(e)},ot.hydrate=function(e,t,n){if(!ii(t))throw Error(u(200));return li(null,e,t,!0,n)},ot.hydrateRoot=function(e,t,n){if(!ua(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",c=Sc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=wc(t,null,e,1,n??null,o,!1,l,c),e[It]=t.current,Pr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new oi(t)},ot.render=function(e,t,n){if(!ii(t))throw Error(u(200));return li(null,e,t,!1,n)},ot.unmountComponentAtNode=function(e){if(!ii(e))throw Error(u(40));return e._reactRootContainer?(wn(function(){li(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1},ot.unstable_batchedUpdates=ea,ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ii(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return li(e,t,n,!1,r)},ot.version="18.3.1-next-f1338f8080-20240426",ot}var Rc;function xp(){if(Rc)return fa.exports;Rc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),fa.exports=yp(),fa.exports}var Lc;function wp(){if(Lc)return si;Lc=1;var i=xp();return si.createRoot=i.createRoot,si.hydrateRoot=i.hydrateRoot,si}var kp=wp();/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var zc="popstate";function Ic(i){return typeof i=="object"&&i!=null&&"pathname"in i&&"search"in i&&"hash"in i&&"state"in i&&"key"in i}function Sp(i={}){function s(d,f){var S;let m=(S=f.state)==null?void 0:S.masked,{pathname:v,search:j,hash:x}=m||d.location;return wa("",{pathname:v,search:j,hash:x},f.state&&f.state.usr||null,f.state&&f.state.key||"default",m?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function u(d,f){return typeof f=="string"?f:Qr(f)}return Cp(s,u,null,i)}function _e(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function Nt(i,s){if(!i){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function jp(){return Math.random().toString(36).substring(2,10)}function Dc(i,s){return{usr:i.state,key:i.key,idx:s,masked:i.unstable_mask?{pathname:i.pathname,search:i.search,hash:i.hash}:void 0}}function wa(i,s,u=null,d,f){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof s=="string"?or(s):s,state:u,key:s&&s.key||d||jp(),unstable_mask:f}}function Qr({pathname:i="/",search:s="",hash:u=""}){return s&&s!=="?"&&(i+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function or(i){let s={};if(i){let u=i.indexOf("#");u>=0&&(s.hash=i.substring(u),i=i.substring(0,u));let d=i.indexOf("?");d>=0&&(s.search=i.substring(d),i=i.substring(0,d)),i&&(s.pathname=i)}return s}function Cp(i,s,u,d={}){let{window:f=document.defaultView,v5Compat:m=!1}=d,v=f.history,j="POP",x=null,S=_();S==null&&(S=0,v.replaceState({...v.state,idx:S},""));function _(){return(v.state||{idx:null}).idx}function N(){j="POP";let D=_(),M=D==null?null:D-S;S=D,x&&x({action:j,location:F.location,delta:M})}function T(D,M){j="PUSH";let Z=Ic(D)?D:wa(F.location,D,M);S=_()+1;let ee=Dc(Z,S),V=F.createHref(Z.unstable_mask||Z);try{v.pushState(ee,"",V)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;f.location.assign(V)}m&&x&&x({action:j,location:F.location,delta:1})}function $(D,M){j="REPLACE";let Z=Ic(D)?D:wa(F.location,D,M);S=_();let ee=Dc(Z,S),V=F.createHref(Z.unstable_mask||Z);v.replaceState(ee,"",V),m&&x&&x({action:j,location:F.location,delta:0})}function A(D){return Ep(D)}let F={get action(){return j},get location(){return i(f,v)},listen(D){if(x)throw new Error("A history only accepts one active listener");return f.addEventListener(zc,N),x=D,()=>{f.removeEventListener(zc,N),x=null}},createHref(D){return s(f,D)},createURL:A,encodeLocation(D){let M=A(D);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:T,replace:$,go(D){return v.go(D)}};return F}function Ep(i,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),_e(u,"No window.location.(origin|href) available to create URL");let d=typeof i=="string"?i:Qr(i);return d=d.replace(/ $/,"%20"),!s&&d.startsWith("//")&&(d=u+d),new URL(d,u)}function Wc(i,s,u="/"){return Np(i,s,u,!1)}function Np(i,s,u,d){let f=typeof s=="string"?or(s):s,m=Bt(f.pathname||"/",u);if(m==null)return null;let v=Vc(i);Pp(v);let j=null;for(let x=0;j==null&&x<v.length;++x){let S=Ap(m);j=Op(v[x],S,d)}return j}function Vc(i,s=[],u=[],d="",f=!1){let m=(v,j,x=f,S)=>{let _={relativePath:S===void 0?v.path||"":S,caseSensitive:v.caseSensitive===!0,childrenIndex:j,route:v};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(d)&&x)return;_e(_.relativePath.startsWith(d),`Absolute route path "${_.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(d.length)}let N=Et([d,_.relativePath]),T=u.concat(_);v.children&&v.children.length>0&&(_e(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),Vc(v.children,s,T,N,x)),!(v.path==null&&!v.index)&&s.push({path:N,score:Ip(N,v.index),routesMeta:T})};return i.forEach((v,j)=>{var x;if(v.path===""||!((x=v.path)!=null&&x.includes("?")))m(v,j);else for(let S of qc(v.path))m(v,j,!0,S)}),s}function qc(i){let s=i.split("/");if(s.length===0)return[];let[u,...d]=s,f=u.endsWith("?"),m=u.replace(/\?$/,"");if(d.length===0)return f?[m,""]:[m];let v=qc(d.join("/")),j=[];return j.push(...v.map(x=>x===""?m:[m,x].join("/"))),f&&j.push(...v),j.map(x=>i.startsWith("/")&&x===""?"/":x)}function Pp(i){i.sort((s,u)=>s.score!==u.score?u.score-s.score:Dp(s.routesMeta.map(d=>d.childrenIndex),u.routesMeta.map(d=>d.childrenIndex)))}var _p=/^:[\w-]+$/,bp=3,Tp=2,Rp=1,Lp=10,zp=-2,Oc=i=>i==="*";function Ip(i,s){let u=i.split("/"),d=u.length;return u.some(Oc)&&(d+=zp),s&&(d+=Tp),u.filter(f=>!Oc(f)).reduce((f,m)=>f+(_p.test(m)?bp:m===""?Rp:Lp),d)}function Dp(i,s){return i.length===s.length&&i.slice(0,-1).every((d,f)=>d===s[f])?i[i.length-1]-s[s.length-1]:0}function Op(i,s,u=!1){let{routesMeta:d}=i,f={},m="/",v=[];for(let j=0;j<d.length;++j){let x=d[j],S=j===d.length-1,_=m==="/"?s:s.slice(m.length)||"/",N=pi({path:x.relativePath,caseSensitive:x.caseSensitive,end:S},_),T=x.route;if(!N&&S&&u&&!d[d.length-1].route.index&&(N=pi({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},_)),!N)return null;Object.assign(f,N.params),v.push({params:f,pathname:Et([m,N.pathname]),pathnameBase:Bp(Et([m,N.pathnameBase])),route:T}),N.pathnameBase!=="/"&&(m=Et([m,N.pathnameBase]))}return v}function pi(i,s){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,d]=Fp(i.path,i.caseSensitive,i.end),f=s.match(u);if(!f)return null;let m=f[0],v=m.replace(/(.)\/+$/,"$1"),j=f.slice(1);return{params:d.reduce((S,{paramName:_,isOptional:N},T)=>{if(_==="*"){let A=j[T]||"";v=m.slice(0,m.length-A.length).replace(/(.)\/+$/,"$1")}const $=j[T];return N&&!$?S[_]=void 0:S[_]=($||"").replace(/%2F/g,"/"),S},{}),pathname:m,pathnameBase:v,pattern:i}}function Fp(i,s=!1,u=!0){Nt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let d=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,j,x,S,_)=>{if(d.push({paramName:j,isOptional:x!=null}),x){let N=_.charAt(S+v.length);return N&&N!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(d.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),d]}function Ap(i){try{return i.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Nt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),i}}function Bt(i,s){if(s==="/")return i;if(!i.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,d=i.charAt(u);return d&&d!=="/"?null:i.slice(u)||"/"}var Mp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Up(i,s="/"){let{pathname:u,search:d="",hash:f=""}=typeof i=="string"?or(i):i,m;return u?(u=Gc(u),u.startsWith("/")?m=Fc(u.substring(1),"/"):m=Fc(u,s)):m=s,{pathname:m,search:Hp(d),hash:Wp(f)}}function Fc(i,s){let u=mi(s).split("/");return i.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function ha(i,s,u,d){return`Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $p(i){return i.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function Qc(i){let s=$p(i);return s.map((u,d)=>d===s.length-1?u.pathname:u.pathnameBase)}function Ca(i,s,u,d=!1){let f;typeof i=="string"?f=or(i):(f={...i},_e(!f.pathname||!f.pathname.includes("?"),ha("?","pathname","search",f)),_e(!f.pathname||!f.pathname.includes("#"),ha("#","pathname","hash",f)),_e(!f.search||!f.search.includes("#"),ha("#","search","hash",f)));let m=i===""||f.pathname==="",v=m?"/":f.pathname,j;if(v==null)j=u;else{let N=s.length-1;if(!d&&v.startsWith("..")){let T=v.split("/");for(;T[0]==="..";)T.shift(),N-=1;f.pathname=T.join("/")}j=N>=0?s[N]:"/"}let x=Up(f,j),S=v&&v!=="/"&&v.endsWith("/"),_=(m||v===".")&&u.endsWith("/");return!x.pathname.endsWith("/")&&(S||_)&&(x.pathname+="/"),x}var Gc=i=>i.replace(/\/\/+/g,"/"),Et=i=>Gc(i.join("/")),mi=i=>i.replace(/\/+$/,""),Bp=i=>mi(i).replace(/^\/*/,"/"),Hp=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Wp=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Vp=class{constructor(i,s,u,d=!1){this.status=i,this.statusText=s||"",this.internal=d,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function qp(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function Qp(i){let s=i.map(u=>u.route.path).filter(Boolean);return Et(s)||"/"}var Kc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Yc(i,s){let u=i;if(typeof u!="string"||!Mp.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let d=u,f=!1;if(Kc)try{let m=new URL(window.location.href),v=u.startsWith("//")?new URL(m.protocol+u):new URL(u),j=Bt(v.pathname,s);v.origin===m.origin&&j!=null?u=j+v.search+v.hash:f=!0}catch{Nt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:f,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Jc=["POST","PUT","PATCH","DELETE"];new Set(Jc);var Gp=["GET",...Jc];new Set(Gp);var ir=k.createContext(null);ir.displayName="DataRouter";var gi=k.createContext(null);gi.displayName="DataRouterState";var Xc=k.createContext(!1);function Kp(){return k.useContext(Xc)}var Zc=k.createContext({isTransitioning:!1});Zc.displayName="ViewTransition";var Yp=k.createContext(new Map);Yp.displayName="Fetchers";var Jp=k.createContext(null);Jp.displayName="Await";var gt=k.createContext(null);gt.displayName="Navigation";var Kr=k.createContext(null);Kr.displayName="Location";var zt=k.createContext({outlet:null,matches:[],isDataRoute:!1});zt.displayName="Route";var Ea=k.createContext(null);Ea.displayName="RouteError";var ed="REACT_ROUTER_ERROR",Xp="REDIRECT",Zp="ROUTE_ERROR_RESPONSE";function em(i){if(i.startsWith(`${ed}:${Xp}:{`))try{let s=JSON.parse(i.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function tm(i){if(i.startsWith(`${ed}:${Zp}:{`))try{let s=JSON.parse(i.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new Vp(s.status,s.statusText,s.data)}catch{}}function nm(i,{relative:s}={}){_e(Yr(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:d}=k.useContext(gt),{hash:f,pathname:m,search:v}=Jr(i,{relative:s}),j=m;return u!=="/"&&(j=m==="/"?u:Et([u,m])),d.createHref({pathname:j,search:v,hash:f})}function Yr(){return k.useContext(Kr)!=null}function vt(){return _e(Yr(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Kr).location}var td="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function nd(i){k.useContext(gt).static||k.useLayoutEffect(i)}function Nn(){let{isDataRoute:i}=k.useContext(zt);return i?hm():rm()}function rm(){_e(Yr(),"useNavigate() may be used only in the context of a <Router> component.");let i=k.useContext(ir),{basename:s,navigator:u}=k.useContext(gt),{matches:d}=k.useContext(zt),{pathname:f}=vt(),m=JSON.stringify(Qc(d)),v=k.useRef(!1);return nd(()=>{v.current=!0}),k.useCallback((x,S={})=>{if(Nt(v.current,td),!v.current)return;if(typeof x=="number"){u.go(x);return}let _=Ca(x,JSON.parse(m),f,S.relative==="path");i==null&&s!=="/"&&(_.pathname=_.pathname==="/"?s:Et([s,_.pathname])),(S.replace?u.replace:u.push)(_,S.state,S)},[s,u,m,f,i])}k.createContext(null);function rd(){let{matches:i}=k.useContext(zt),s=i[i.length-1];return(s==null?void 0:s.params)??{}}function Jr(i,{relative:s}={}){let{matches:u}=k.useContext(zt),{pathname:d}=vt(),f=JSON.stringify(Qc(u));return k.useMemo(()=>Ca(i,JSON.parse(f),d,s==="path"),[i,f,d,s])}function om(i,s){return od(i,s)}function od(i,s,u){var D;_e(Yr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=k.useContext(gt),{matches:f}=k.useContext(zt),m=f[f.length-1],v=m?m.params:{},j=m?m.pathname:"/",x=m?m.pathnameBase:"/",S=m&&m.route;{let M=S&&S.path||"";ld(j,!S||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${j}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let _=vt(),N;if(s){let M=typeof s=="string"?or(s):s;_e(x==="/"||((D=M.pathname)==null?void 0:D.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${M.pathname}" was given in the \`location\` prop.`),N=M}else N=_;let T=N.pathname||"/",$=T;if(x!=="/"){let M=x.replace(/^\//,"").split("/");$="/"+T.replace(/^\//,"").split("/").slice(M.length).join("/")}let A=Wc(i,{pathname:$});Nt(S||A!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Nt(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let F=um(A&&A.map(M=>Object.assign({},M,{params:Object.assign({},v,M.params),pathname:Et([x,d.encodeLocation?d.encodeLocation(M.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?x:Et([x,d.encodeLocation?d.encodeLocation(M.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),f,u);return s&&F?k.createElement(Kr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...N},navigationType:"POP"}},F):F}function im(){let i=mm(),s=qp(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,d="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:d},m={padding:"2px 4px",backgroundColor:d},v=null;return console.error("Error handled by React Router default ErrorBoundary:",i),v=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:m},"ErrorBoundary")," or"," ",k.createElement("code",{style:m},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},s),u?k.createElement("pre",{style:f},u):null,v)}var lm=k.createElement(im,null),id=class extends k.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,s){return s.location!==i.location||s.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:s.error,location:s.location,revalidation:i.revalidation||s.revalidation}}componentDidCatch(i,s){this.props.onError?this.props.onError(i,s):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const u=tm(i.digest);u&&(i=u)}let s=i!==void 0?k.createElement(zt.Provider,{value:this.props.routeContext},k.createElement(Ea.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?k.createElement(am,{error:i},s):s}};id.contextType=Xc;var ga=new WeakMap;function am({children:i,error:s}){let{basename:u}=k.useContext(gt);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let d=em(s.digest);if(d){let f=ga.get(s);if(f)throw f;let m=Yc(d.location,u);if(Kc&&!ga.get(s))if(m.isExternal||d.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:d.replace}));throw ga.set(s,v),v}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return i}function sm({routeContext:i,match:s,children:u}){let d=k.useContext(ir);return d&&d.static&&d.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=s.route.id),k.createElement(zt.Provider,{value:i},u)}function um(i,s=[],u){let d=u==null?void 0:u.state;if(i==null){if(!d)return null;if(d.errors)i=d.matches;else if(s.length===0&&!d.initialized&&d.matches.length>0)i=d.matches;else return null}let f=i,m=d==null?void 0:d.errors;if(m!=null){let _=f.findIndex(N=>N.route.id&&(m==null?void 0:m[N.route.id])!==void 0);_e(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,_+1))}let v=!1,j=-1;if(u&&d){v=d.renderFallback;for(let _=0;_<f.length;_++){let N=f[_];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(j=_),N.route.id){let{loaderData:T,errors:$}=d,A=N.route.loader&&!T.hasOwnProperty(N.route.id)&&(!$||$[N.route.id]===void 0);if(N.route.lazy||A){u.isStatic&&(v=!0),j>=0?f=f.slice(0,j+1):f=[f[0]];break}}}}let x=u==null?void 0:u.onError,S=d&&x?(_,N)=>{var T,$;x(_,{location:d.location,params:(($=(T=d.matches)==null?void 0:T[0])==null?void 0:$.params)??{},unstable_pattern:Qp(d.matches),errorInfo:N})}:void 0;return f.reduceRight((_,N,T)=>{let $,A=!1,F=null,D=null;d&&($=m&&N.route.id?m[N.route.id]:void 0,F=N.route.errorElement||lm,v&&(j<0&&T===0?(ld("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,D=null):j===T&&(A=!0,D=N.route.hydrateFallbackElement||null)));let M=s.concat(f.slice(0,T+1)),Z=()=>{let ee;return $?ee=F:A?ee=D:N.route.Component?ee=k.createElement(N.route.Component,null):N.route.element?ee=N.route.element:ee=_,k.createElement(sm,{match:N,routeContext:{outlet:_,matches:M,isDataRoute:d!=null},children:ee})};return d&&(N.route.ErrorBoundary||N.route.errorElement||T===0)?k.createElement(id,{location:d.location,revalidation:d.revalidation,component:F,error:$,children:Z(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:S}):Z()},null)}function Na(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cm(i){let s=k.useContext(ir);return _e(s,Na(i)),s}function dm(i){let s=k.useContext(gi);return _e(s,Na(i)),s}function fm(i){let s=k.useContext(zt);return _e(s,Na(i)),s}function Pa(i){let s=fm(i),u=s.matches[s.matches.length-1];return _e(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function pm(){return Pa("useRouteId")}function mm(){var d;let i=k.useContext(Ea),s=dm("useRouteError"),u=Pa("useRouteError");return i!==void 0?i:(d=s.errors)==null?void 0:d[u]}function hm(){let{router:i}=cm("useNavigate"),s=Pa("useNavigate"),u=k.useRef(!1);return nd(()=>{u.current=!0}),k.useCallback(async(f,m={})=>{Nt(u.current,td),u.current&&(typeof f=="number"?await i.navigate(f):await i.navigate(f,{fromRouteId:s,...m}))},[i,s])}var Ac={};function ld(i,s,u){!s&&!Ac[i]&&(Ac[i]=!0,Nt(!1,u))}k.memo(gm);function gm({routes:i,future:s,state:u,isStatic:d,onError:f}){return od(i,void 0,{state:u,isStatic:d,onError:f})}function un(i){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vm({basename:i="/",children:s=null,location:u,navigationType:d="POP",navigator:f,static:m=!1,unstable_useTransitions:v}){_e(!Yr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=i.replace(/^\/*/,"/"),x=k.useMemo(()=>({basename:j,navigator:f,static:m,unstable_useTransitions:v,future:{}}),[j,f,m,v]);typeof u=="string"&&(u=or(u));let{pathname:S="/",search:_="",hash:N="",state:T=null,key:$="default",unstable_mask:A}=u,F=k.useMemo(()=>{let D=Bt(S,j);return D==null?null:{location:{pathname:D,search:_,hash:N,state:T,key:$,unstable_mask:A},navigationType:d}},[j,S,_,N,T,$,d,A]);return Nt(F!=null,`<Router basename="${j}"> is not able to match the URL "${S}${_}${N}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:k.createElement(gt.Provider,{value:x},k.createElement(Kr.Provider,{children:s,value:F}))}function ym({children:i,location:s}){return om(ka(i),s)}function ka(i,s=[]){let u=[];return k.Children.forEach(i,(d,f)=>{if(!k.isValidElement(d))return;let m=[...s,f];if(d.type===k.Fragment){u.push.apply(u,ka(d.props.children,m));return}_e(d.type===un,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!d.props.index||!d.props.children,"An index route cannot have child routes.");let v={id:d.props.id||m.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(v.children=ka(d.props.children,m)),u.push(v)}),u}var ci="get",di="application/x-www-form-urlencoded";function vi(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function xm(i){return vi(i)&&i.tagName.toLowerCase()==="button"}function wm(i){return vi(i)&&i.tagName.toLowerCase()==="form"}function km(i){return vi(i)&&i.tagName.toLowerCase()==="input"}function Sm(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function jm(i,s){return i.button===0&&(!s||s==="_self")&&!Sm(i)}function Sa(i=""){return new URLSearchParams(typeof i=="string"||Array.isArray(i)||i instanceof URLSearchParams?i:Object.keys(i).reduce((s,u)=>{let d=i[u];return s.concat(Array.isArray(d)?d.map(f=>[u,f]):[[u,d]])},[]))}function Cm(i,s){let u=Sa(i);return s&&s.forEach((d,f)=>{u.has(f)||s.getAll(f).forEach(m=>{u.append(f,m)})}),u}var ui=null;function Em(){if(ui===null)try{new FormData(document.createElement("form"),0),ui=!1}catch{ui=!0}return ui}var Nm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function va(i){return i!=null&&!Nm.has(i)?(Nt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${di}"`),null):i}function Pm(i,s){let u,d,f,m,v;if(wm(i)){let j=i.getAttribute("action");d=j?Bt(j,s):null,u=i.getAttribute("method")||ci,f=va(i.getAttribute("enctype"))||di,m=new FormData(i)}else if(xm(i)||km(i)&&(i.type==="submit"||i.type==="image")){let j=i.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=i.getAttribute("formaction")||j.getAttribute("action");if(d=x?Bt(x,s):null,u=i.getAttribute("formmethod")||j.getAttribute("method")||ci,f=va(i.getAttribute("formenctype"))||va(j.getAttribute("enctype"))||di,m=new FormData(j,i),!Em()){let{name:S,type:_,value:N}=i;if(_==="image"){let T=S?`${S}.`:"";m.append(`${T}x`,"0"),m.append(`${T}y`,"0")}else S&&m.append(S,N)}}else{if(vi(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=ci,d=null,f=di,v=i}return m&&f==="text/plain"&&(v=m,m=void 0),{action:d,method:u.toLowerCase(),encType:f,formData:m,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _a(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function ad(i,s,u,d){let f=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return u?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${d}`:f.pathname=`${f.pathname}.${d}`:f.pathname==="/"?f.pathname=`_root.${d}`:s&&Bt(f.pathname,s)==="/"?f.pathname=`${mi(s)}/_root.${d}`:f.pathname=`${mi(f.pathname)}.${d}`,f}async function _m(i,s){if(i.id in s)return s[i.id];try{let u=await import(i.module);return s[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function bm(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Tm(i,s,u){let d=await Promise.all(i.map(async f=>{let m=s.routes[f.route.id];if(m){let v=await _m(m,u);return v.links?v.links():[]}return[]}));return Im(d.flat(1).filter(bm).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Mc(i,s,u,d,f,m){let v=(x,S)=>u[S]?x.route.id!==u[S].route.id:!0,j=(x,S)=>{var _;return u[S].pathname!==x.pathname||((_=u[S].route.path)==null?void 0:_.endsWith("*"))&&u[S].params["*"]!==x.params["*"]};return m==="assets"?s.filter((x,S)=>v(x,S)||j(x,S)):m==="data"?s.filter((x,S)=>{var N;let _=d.routes[x.route.id];if(!_||!_.hasLoader)return!1;if(v(x,S)||j(x,S))return!0;if(x.route.shouldRevalidate){let T=x.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((N=u[0])==null?void 0:N.params)||{},nextUrl:new URL(i,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function Rm(i,s,{includeHydrateFallback:u}={}){return Lm(i.map(d=>{let f=s.routes[d.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function Lm(i){return[...new Set(i)]}function zm(i){let s={},u=Object.keys(i).sort();for(let d of u)s[d]=i[d];return s}function Im(i,s){let u=new Set;return new Set(s),i.reduce((d,f)=>{let m=JSON.stringify(zm(f));return u.has(m)||(u.add(m),d.push({key:m,link:f})),d},[])}function ba(){let i=k.useContext(ir);return _a(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Dm(){let i=k.useContext(gi);return _a(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Ta=k.createContext(void 0);Ta.displayName="FrameworkContext";function Ra(){let i=k.useContext(Ta);return _a(i,"You must render this element inside a <HydratedRouter> element"),i}function Om(i,s){let u=k.useContext(Ta),[d,f]=k.useState(!1),[m,v]=k.useState(!1),{onFocus:j,onBlur:x,onMouseEnter:S,onMouseLeave:_,onTouchStart:N}=s,T=k.useRef(null);k.useEffect(()=>{if(i==="render"&&v(!0),i==="viewport"){let F=M=>{M.forEach(Z=>{v(Z.isIntersecting)})},D=new IntersectionObserver(F,{threshold:.5});return T.current&&D.observe(T.current),()=>{D.disconnect()}}},[i]),k.useEffect(()=>{if(d){let F=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(F)}}},[d]);let $=()=>{f(!0)},A=()=>{f(!1),v(!1)};return u?i!=="intent"?[m,T,{}]:[m,T,{onFocus:qr(j,$),onBlur:qr(x,A),onMouseEnter:qr(S,$),onMouseLeave:qr(_,A),onTouchStart:qr(N,$)}]:[!1,T,{}]}function qr(i,s){return u=>{i&&i(u),u.defaultPrevented||s(u)}}function Fm({page:i,...s}){let u=Kp(),{router:d}=ba(),f=k.useMemo(()=>Wc(d.routes,i,d.basename),[d.routes,i,d.basename]);return f?u?k.createElement(Mm,{page:i,matches:f,...s}):k.createElement(Um,{page:i,matches:f,...s}):null}function Am(i){let{manifest:s,routeModules:u}=Ra(),[d,f]=k.useState([]);return k.useEffect(()=>{let m=!1;return Tm(i,s,u).then(v=>{m||f(v)}),()=>{m=!0}},[i,s,u]),d}function Mm({page:i,matches:s,...u}){let d=vt(),{future:f}=Ra(),{basename:m}=ba(),v=k.useMemo(()=>{if(i===d.pathname+d.search+d.hash)return[];let j=ad(i,m,f.unstable_trailingSlashAwareDataRequests,"rsc"),x=!1,S=[];for(let _ of s)typeof _.route.shouldRevalidate=="function"?x=!0:S.push(_.route.id);return x&&S.length>0&&j.searchParams.set("_routes",S.join(",")),[j.pathname+j.search]},[m,f.unstable_trailingSlashAwareDataRequests,i,d,s]);return k.createElement(k.Fragment,null,v.map(j=>k.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...u})))}function Um({page:i,matches:s,...u}){let d=vt(),{future:f,manifest:m,routeModules:v}=Ra(),{basename:j}=ba(),{loaderData:x,matches:S}=Dm(),_=k.useMemo(()=>Mc(i,s,S,m,d,"data"),[i,s,S,m,d]),N=k.useMemo(()=>Mc(i,s,S,m,d,"assets"),[i,s,S,m,d]),T=k.useMemo(()=>{if(i===d.pathname+d.search+d.hash)return[];let F=new Set,D=!1;if(s.forEach(Z=>{var V;let ee=m.routes[Z.route.id];!ee||!ee.hasLoader||(!_.some(ne=>ne.route.id===Z.route.id)&&Z.route.id in x&&((V=v[Z.route.id])!=null&&V.shouldRevalidate)||ee.hasClientLoader?D=!0:F.add(Z.route.id))}),F.size===0)return[];let M=ad(i,j,f.unstable_trailingSlashAwareDataRequests,"data");return D&&F.size>0&&M.searchParams.set("_routes",s.filter(Z=>F.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[M.pathname+M.search]},[j,f.unstable_trailingSlashAwareDataRequests,x,d,m,_,s,i,v]),$=k.useMemo(()=>Rm(N,m),[N,m]),A=Am(N);return k.createElement(k.Fragment,null,T.map(F=>k.createElement("link",{key:F,rel:"prefetch",as:"fetch",href:F,...u})),$.map(F=>k.createElement("link",{key:F,rel:"modulepreload",href:F,...u})),A.map(({key:F,link:D})=>k.createElement("link",{key:F,nonce:u.nonce,...D,crossOrigin:D.crossOrigin??u.crossOrigin})))}function $m(...i){return s=>{i.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var Bm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Bm&&(window.__reactRouterVersion="7.14.2")}catch{}function Hm({basename:i,children:s,unstable_useTransitions:u,window:d}){let f=k.useRef();f.current==null&&(f.current=Sp({window:d,v5Compat:!0}));let m=f.current,[v,j]=k.useState({action:m.action,location:m.location}),x=k.useCallback(S=>{u===!1?j(S):k.startTransition(()=>j(S))},[u]);return k.useLayoutEffect(()=>m.listen(x),[m,x]),k.createElement(vm,{basename:i,children:s,location:v.location,navigationType:v.action,navigator:m,unstable_useTransitions:u})}var sd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lt=k.forwardRef(function({onClick:s,discover:u="render",prefetch:d="none",relative:f,reloadDocument:m,replace:v,unstable_mask:j,state:x,target:S,to:_,preventScrollReset:N,viewTransition:T,unstable_defaultShouldRevalidate:$,...A},F){let{basename:D,navigator:M,unstable_useTransitions:Z}=k.useContext(gt),ee=typeof _=="string"&&sd.test(_),V=Yc(_,D);_=V.to;let ne=nm(_,{relative:f}),ie=vt(),he=null;if(j){let se=Ca(j,[],ie.unstable_mask?ie.unstable_mask.pathname:"/",!0);D!=="/"&&(se.pathname=se.pathname==="/"?D:Et([D,se.pathname])),he=M.createHref(se)}let[K,ue,ye]=Om(d,A),Be=Qm(_,{replace:v,unstable_mask:j,state:x,target:S,preventScrollReset:N,relative:f,viewTransition:T,unstable_defaultShouldRevalidate:$,unstable_useTransitions:Z});function Te(se){s&&s(se),se.defaultPrevented||Be(se)}let De=!(V.isExternal||m),X=k.createElement("a",{...A,...ye,href:(De?he:void 0)||V.absoluteURL||ne,onClick:De?Te:s,ref:$m(F,ue),target:S,"data-discover":!ee&&u==="render"?"true":void 0});return K&&!ee?k.createElement(k.Fragment,null,X,k.createElement(Fm,{page:ne})):X});Lt.displayName="Link";var Wm=k.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:d="",end:f=!1,style:m,to:v,viewTransition:j,children:x,...S},_){let N=Jr(v,{relative:S.relative}),T=vt(),$=k.useContext(gi),{navigator:A,basename:F}=k.useContext(gt),D=$!=null&&Zm(N)&&j===!0,M=A.encodeLocation?A.encodeLocation(N).pathname:N.pathname,Z=T.pathname,ee=$&&$.navigation&&$.navigation.location?$.navigation.location.pathname:null;u||(Z=Z.toLowerCase(),ee=ee?ee.toLowerCase():null,M=M.toLowerCase()),ee&&F&&(ee=Bt(ee,F)||ee);const V=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let ne=Z===M||!f&&Z.startsWith(M)&&Z.charAt(V)==="/",ie=ee!=null&&(ee===M||!f&&ee.startsWith(M)&&ee.charAt(M.length)==="/"),he={isActive:ne,isPending:ie,isTransitioning:D},K=ne?s:void 0,ue;typeof d=="function"?ue=d(he):ue=[d,ne?"active":null,ie?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let ye=typeof m=="function"?m(he):m;return k.createElement(Lt,{...S,"aria-current":K,className:ue,ref:_,style:ye,to:v,viewTransition:j},typeof x=="function"?x(he):x)});Wm.displayName="NavLink";var Vm=k.forwardRef(({discover:i="render",fetcherKey:s,navigate:u,reloadDocument:d,replace:f,state:m,method:v=ci,action:j,onSubmit:x,relative:S,preventScrollReset:_,viewTransition:N,unstable_defaultShouldRevalidate:T,...$},A)=>{let{unstable_useTransitions:F}=k.useContext(gt),D=Jm(),M=Xm(j,{relative:S}),Z=v.toLowerCase()==="get"?"get":"post",ee=typeof j=="string"&&sd.test(j),V=ne=>{if(x&&x(ne),ne.defaultPrevented)return;ne.preventDefault();let ie=ne.nativeEvent.submitter,he=(ie==null?void 0:ie.getAttribute("formmethod"))||v,K=()=>D(ie||ne.currentTarget,{fetcherKey:s,method:he,navigate:u,replace:f,state:m,relative:S,preventScrollReset:_,viewTransition:N,unstable_defaultShouldRevalidate:T});F&&u!==!1?k.startTransition(()=>K()):K()};return k.createElement("form",{ref:A,method:Z,action:M,onSubmit:d?x:V,...$,"data-discover":!ee&&i==="render"?"true":void 0})});Vm.displayName="Form";function qm(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ud(i){let s=k.useContext(ir);return _e(s,qm(i)),s}function Qm(i,{target:s,replace:u,unstable_mask:d,state:f,preventScrollReset:m,relative:v,viewTransition:j,unstable_defaultShouldRevalidate:x,unstable_useTransitions:S}={}){let _=Nn(),N=vt(),T=Jr(i,{relative:v});return k.useCallback($=>{if(jm($,s)){$.preventDefault();let A=u!==void 0?u:Qr(N)===Qr(T),F=()=>_(i,{replace:A,unstable_mask:d,state:f,preventScrollReset:m,relative:v,viewTransition:j,unstable_defaultShouldRevalidate:x});S?k.startTransition(()=>F()):F()}},[N,_,T,u,d,f,s,i,m,v,j,x,S])}function Gm(i){Nt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=k.useRef(Sa(i)),u=k.useRef(!1),d=vt(),f=k.useMemo(()=>Cm(d.search,u.current?null:s.current),[d.search]),m=Nn(),v=k.useCallback((j,x)=>{const S=Sa(typeof j=="function"?j(new URLSearchParams(f)):j);u.current=!0,m("?"+S,x)},[m,f]);return[f,v]}var Km=0,Ym=()=>`__${String(++Km)}__`;function Jm(){let{router:i}=ud("useSubmit"),{basename:s}=k.useContext(gt),u=pm(),d=i.fetch,f=i.navigate;return k.useCallback(async(m,v={})=>{let{action:j,method:x,encType:S,formData:_,body:N}=Pm(m,s);if(v.navigate===!1){let T=v.fetcherKey||Ym();await d(T,u,v.action||j,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:_,body:N,formMethod:v.method||x,formEncType:v.encType||S,flushSync:v.flushSync})}else await f(v.action||j,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:_,body:N,formMethod:v.method||x,formEncType:v.encType||S,replace:v.replace,state:v.state,fromRouteId:u,flushSync:v.flushSync,viewTransition:v.viewTransition})},[d,f,s,u])}function Xm(i,{relative:s}={}){let{basename:u}=k.useContext(gt),d=k.useContext(zt);_e(d,"useFormAction must be used inside a RouteContext");let[f]=d.matches.slice(-1),m={...Jr(i||".",{relative:s})},v=vt();if(i==null){m.search=v.search;let j=new URLSearchParams(m.search),x=j.getAll("index");if(x.some(_=>_==="")){j.delete("index"),x.filter(N=>N).forEach(N=>j.append("index",N));let _=j.toString();m.search=_?`?${_}`:""}}return(!i||i===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:Et([u,m.pathname])),Qr(m)}function Zm(i,{relative:s}={}){let u=k.useContext(Zc);_e(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=ud("useViewTransitionState"),f=Jr(i,{relative:s});if(!u.isTransitioning)return!1;let m=Bt(u.currentLocation.pathname,d)||u.currentLocation.pathname,v=Bt(u.nextLocation.pathname,d)||u.nextLocation.pathname;return pi(f.pathname,v)!=null||pi(f.pathname,m)!=null}const cd=k.createContext(void 0),Uc="saki_bee_cart";function eh({children:i}){const[s,u]=k.useState([]);k.useEffect(()=>{const S=localStorage.getItem(Uc);if(S)try{u(JSON.parse(S))}catch(_){console.error("Failed to parse cart from localStorage:",_)}},[]),k.useEffect(()=>{localStorage.setItem(Uc,JSON.stringify(s))},[s]);const d=(S,_)=>{const N=S.salePrice??S.price;u(T=>T.find(A=>A.productId===S.id)?T.map(A=>A.productId===S.id?{...A,quantity:A.quantity+_}:A):[...T,{productId:S.id,slug:S.slug,name:S.name,price:N,quantity:_,image:S.image}])},f=S=>{u(_=>_.filter(N=>N.productId!==S))},m=(S,_)=>{if(_<=0){f(S);return}u(N=>N.map(T=>T.productId===S?{...T,quantity:_}:T))},v=()=>{u([])},j=()=>s.reduce((S,_)=>S+_.price*_.quantity,0),x=()=>s.reduce((S,_)=>S+_.quantity,0);return a.jsx(cd.Provider,{value:{cart:s,addToCart:d,removeFromCart:f,updateQuantity:m,clearCart:v,getTotalPrice:j,getTotalItems:x},children:i})}function Pn(){const i=k.useContext(cd);if(i===void 0)throw new Error("useCart must be used within CartProvider");return i}const th={bg:{navAbout:"За нас",navProducts:"Продукти",navContact:"Контакти",heroTitle:"Пчеларски магазин САКИ",heroSubtitle:"Натурален мед от собствени пчелини в Долистово и Коркина, пчеларски инвентар и практични съвети от семейство с над 20 години опит.",heroCtaProducts:"Разгледайте продуктите",heroCtaContact:"Свържете се с нас",heroCtaHoney:"Пчелни продукти",heroCtaEquipment:"Всичко за пчеларя",aboutTitle:"За нас",aboutSubtitle:"Семейна фирма с над 20 години опит в пчеларството, натуралния мед и пчелните продукти",storyTitle:"Нашата история",storyText1:"САКИ е семейна фирма, създадена с любов към пчеларството и чистия, натурален мед. Повече от 20 години се грижим за пчелите си и учим от природата. Натрупаният опит и внимание личат във всеки продукт, който предлагаме.",storyText2:"Започнахме скромно, но останахме верни на най-важното: качество, честност и грижа към природата. За нас пчеларството не е просто работа, а начин на живот.",apiariesTitle:"Нашите пчелини",apiariesText1:"Пчелините ни се намират в селата Долистово и Коркина – места с чиста природа и богато разнообразие от растения. Това създава отлични условия за здрави пчелни семейства и качествен мед.",apiariesText2:"Грижим се за всяко пчелно семейство с внимание и отговорност, за да ви предложим чист мед – без добавки и компромиси.",certificationTitle:"Сертификация и качество",certificationText1:"Медът ни е сертифициран от БАБХ (Българска агенция по безопасност на храните) и се произвежда с постоянен контрол върху качеството.",certificationText2:"При нас ще намерите пчелни продукти, на които можете да разчитате - чисти, полезни и направени с грижа.",cardExperience:"20+ години опит",cardExperienceText:"Практически опит в пчеларството и производството на натурален мед.",cardApiaries:"Собствени пчелини",cardApiariesText:"Разполагаме с пчелини в Долистово и Коркина – сред чиста и богата природа.",cardCertification:"Сертифицирано качество",cardCertificationText:"Медът ни е сертифициран от БАБХ и отговаря на изискванията за безопасност.",cardShop:"Магазин в Дупница",cardShopText:"Ще ни намерите на Кооперативния пазар, павилион 5 – за директни покупки и съвети.",cardProducts:"Богат асортимент",cardProductsText:"Предлагаме мед, кошери, инвентар, центрофуги и пчелни продукти.",cardDelivery:"Бърза доставка",cardDeliveryText:"Доставяме бързо и сигурно в цялата страна.",whyChooseTitle:"Защо да изберете САКИ?",whyChoose1:"Над 20 години опит в пчеларството",whyChoose2:"Собствени пчелини с натурален мед",whyChoose3:"Сертифицирано качество от БАБХ",whyChoose4:"Семейна фирма с честно отношение",whyChoose5:"Богат избор от продукти и оборудване",whyChoose6:"Консултации и помощ за пчелари",productsTitle:"Нашите продукти",productsSubtitle:"Мед, пчелни продукти, кошери, рамки, центрофуги и инвентар за ежедневната работа в пчелина",productInquiry:"Запитване →",productsCta:"Търсите нещо конкретно?",productsCtaButton:"Пишете ни",contactTitle:"Свържете се с нас",contactSubtitle:"Имате въпрос за мед, оборудване или доставка? Пишете ни - ще ви отговорим възможно най-скоро.",address:"Адрес",addressValue:"Кооперативен пазар, павилион 5, гр. Дупница",phone:"Телефон",phoneValue:"089 551 7056",email:"Имейл",emailValue:"info@sakimed.com",website:"Уебсайт",websiteValue:"www.sakimed.com",facebook:"Facebook",facebookValue:"facebook.com/Saki2008",workingHours:"Работно време",workingHoursWeekday:"Понеделник – Петък: 09:00 – 18:00",workingHoursSaturday:"Събота: 09:00 – 14:00",formName:"Име *",formNamePlaceholder:"Вашето име",formEmail:"Имейл *",formEmailPlaceholder:"your@email.com",formPhone:"Телефон",formPhonePlaceholder:"+359 88 123 4567",formMessage:"Съобщение *",formMessagePlaceholder:"Напишете какво ви интересува...",formSubmit:"Изпрати",formSubmitting:"Изпращане...",formSuccess:"Съобщението е изпратено успешно! Ще се свържем с вас скоро.",formError:"Възникна грешка. Опитайте отново.",footerTagline:"Вашият надежден партньор в пчеларството",footerRights:"Всички права запазени."},en:{navAbout:"About",navProducts:"Products",navContact:"Contact",heroTitle:"SAKI Beekeeping Shop",heroSubtitle:"Natural honey from our own apiaries in Dolistovo and Korkina, beekeeping equipment, and practical advice from a family with over 20 years of experience.",heroCtaProducts:"Browse Products",heroCtaContact:"Contact Us",heroCtaHoney:"Bee Products",heroCtaEquipment:"For Beekeepers",aboutTitle:"About Us",aboutSubtitle:"A family business with over 20 years of experience in beekeeping and natural honey production",storyTitle:"Our Story",storyText1:"SAKI is a family-run business built on a genuine love for beekeeping and pure, natural honey. For over 20 years, we have cared for our bees and learned from nature itself. That experience shows in every product we offer.",storyText2:"We started small, but stayed true to what matters most – quality, honesty, and respect for nature. For us, beekeeping is not just a job, but a way of life.",apiariesTitle:"Our Apiaries",apiariesText1:"Our apiaries are located in Dolistovo and Korkina – areas with clean nature and rich plant diversity, ideal for healthy bee colonies.",apiariesText2:"We care for every colony with attention and responsibility to deliver pure honey – with no additives and no compromises.",certificationTitle:"Certification & Quality",certificationText1:"Our honey is certified by BABH (Bulgarian Food Safety Agency) and produced with consistent quality control.",certificationText2:"With us, you’ll find products you can trust – natural, beneficial, and made with care.",cardExperience:"20+ Years Experience",cardExperienceText:"Extensive experience in beekeeping and natural honey production.",cardApiaries:"Own Apiaries",cardApiariesText:"We operate our own apiaries in clean and rich natural environments.",cardCertification:"Certified Quality",cardCertificationText:"Our honey meets all safety and quality standards.",cardShop:"Shop in Dupnitsa",cardShopText:"Visit us at the Cooperative Market, Pavilion 5 for direct purchases and advice.",cardProducts:"Wide Selection",cardProductsText:"Honey, hives, equipment, extractors, and bee products.",cardDelivery:"Fast Delivery",cardDeliveryText:"We deliver quickly and reliably across the country.",whyChooseTitle:"Why Choose SAKI?",whyChoose1:"Over 20 years of beekeeping experience",whyChoose2:"Own apiaries with natural honey",whyChoose3:"Certified quality by BABH",whyChoose4:"Family business built on trust",whyChoose5:"Wide range of products and equipment",whyChoose6:"Support and advice for beekeepers",productsTitle:"Our Products",productsSubtitle:"Honey, bee products, hives, frames, extractors, and tools for everyday apiary work",productInquiry:"Inquiry →",productsCta:"Looking for something specific?",productsCtaButton:"Contact Us",contactTitle:"Contact Us",contactSubtitle:"Have a question about honey, equipment, or delivery? Send us a message and we’ll reply as soon as possible.",address:"Address",addressValue:"Cooperative Market, Pavilion 5, Dupnitsa",phone:"Phone",phoneValue:"089 551 7056",email:"Email",emailValue:"info@sakimed.com",website:"Website",websiteValue:"www.sakimed.com",facebook:"Facebook",facebookValue:"facebook.com/Saki2008",workingHours:"Working Hours",workingHoursWeekday:"Monday – Friday: 09:00 – 18:00",workingHoursSaturday:"Saturday: 09:00 – 14:00",formName:"Name *",formNamePlaceholder:"Your name",formEmail:"Email *",formEmailPlaceholder:"your@email.com",formPhone:"Phone",formPhonePlaceholder:"+359 88 123 4567",formMessage:"Message *",formMessagePlaceholder:"Tell us what you need...",formSubmit:"Send",formSubmitting:"Sending...",formSuccess:"Message sent successfully! We’ll get back to you soon.",formError:"Something went wrong. Please try again.",footerTagline:"Your trusted partner in beekeeping",footerRights:"All rights reserved."}},dd=k.createContext(void 0);function nh({children:i}){const[s,u]=k.useState(()=>{if(typeof window<"u"){const f=localStorage.getItem("language");if(f)return f}return"bg"});k.useEffect(()=>{localStorage.setItem("language",s),document.documentElement.lang=s},[s]);const d=f=>th[s][f]||f;return a.jsx(dd.Provider,{value:{language:s,setLanguage:u,t:d},children:i})}function _n(){const i=k.useContext(dd);if(!i)throw new Error("useLanguage must be used within a LanguageProvider");return i}function rh(){return a.jsxs("div",{className:"uk-flag",children:[a.jsx("div",{className:"bg"}),a.jsx("div",{className:"diag white d1"}),a.jsx("div",{className:"diag white d2"}),a.jsx("div",{className:"diag red d1"}),a.jsx("div",{className:"diag red d2"}),a.jsx("div",{className:"cross white horizontal"}),a.jsx("div",{className:"cross white vertical"}),a.jsx("div",{className:"cross red horizontal"}),a.jsx("div",{className:"cross red vertical"}),a.jsx("style",{children:`
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
      `})]})}function oh(){const{language:i,setLanguage:s}=_n();return a.jsxs("div",{className:"language-switcher",children:[a.jsx("button",{className:`lang-btn ${i==="en"?"active":""}`,onClick:()=>s("en"),"aria-label":"English",title:"English",children:a.jsx(rh,{})}),a.jsx("button",{className:`lang-btn ${i==="bg"?"active":""}`,onClick:()=>s("bg"),"aria-label":"Български",title:"Български",children:a.jsxs("div",{className:"flag-bg",children:[a.jsx("div",{className:"bg-stripe white"}),a.jsx("div",{className:"bg-stripe green"}),a.jsx("div",{className:"bg-stripe red"})]})}),a.jsx("style",{children:`
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
      `})]})}function ih(){const[i,s]=k.useState(!1),{t:u,language:d}=_n(),{getTotalItems:f}=Pn(),m=Nn(),v=vt(),j=x=>{if(s(!1),v.pathname==="/"){const S=document.getElementById(x);S&&S.scrollIntoView({behavior:"smooth"})}else m("/"),setTimeout(()=>{const S=document.getElementById(x);S&&S.scrollIntoView({behavior:"smooth"})},100)};return a.jsxs("header",{className:"header",children:[a.jsxs("div",{className:"container header-container",children:[a.jsx(Lt,{to:"/",className:"logo",onClick:x=>{s(!1),v.pathname==="/"&&(x.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))},children:a.jsx("img",{src:"/bee-logo.jpg",alt:d==="bg"?"Лого на пчеларски магазин САКИ":"SAKI beekeeping shop logo",className:"logo-img"})}),a.jsxs("nav",{className:`nav ${i?"nav-open":""}`,children:[a.jsx("button",{className:"nav-link",onClick:()=>j("about"),style:{background:"none",border:"none",cursor:"pointer"},children:u("navAbout")}),a.jsx(Lt,{to:"/products",className:"nav-link",onClick:()=>s(!1),children:u("navProducts")}),a.jsx("button",{className:"nav-link",onClick:()=>j("contact"),style:{background:"none",border:"none",cursor:"pointer"},children:u("navContact")}),a.jsxs(Lt,{to:"/cart",className:"nav-link cart-link",onClick:()=>s(!1),children:["🛒 ",d==="bg"?"Количка":"Cart",f()>0&&a.jsx("span",{className:"cart-badge",children:f()})]}),a.jsx("div",{className:"nav-lang-switcher",children:a.jsx(oh,{})})]}),a.jsx("button",{className:"menu-toggle",onClick:()=>s(!i),"aria-label":d==="bg"?"Отвори менюто":"Toggle menu",children:a.jsx("span",{className:`hamburger ${i?"open":""}`})})]}),a.jsx("style",{children:`
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
      `})]})}function lh(){const{t:i,language:s}=_n();return a.jsxs("footer",{className:"footer",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"footer-grid",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx("div",{className:"footer-logo",children:a.jsx("img",{src:"/bee-logo.jpg",alt:s==="bg"?"Лого на САКИ":"SAKI logo",style:{height:"40px",width:"40px",objectFit:"contain"}})}),a.jsx("p",{children:s==="bg"?"Семеен пчеларски магазин в Дупница с натурален мед, пчелни продукти и оборудване за пчелари.":"A family beekeeping shop in Dupnitsa with natural honey, bee products, and equipment for beekeepers."})]}),a.jsxs("div",{className:"footer-links",children:[a.jsx("h4",{children:s==="bg"?"Бързи връзки":"Quick Links"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#about",children:i("navAbout")})}),a.jsx("li",{children:a.jsx("a",{href:"#products",children:i("navProducts")})}),a.jsx("li",{children:a.jsx("a",{href:"#contact",children:i("navContact")})}),a.jsx("li",{children:a.jsx(Lt,{to:"/admin",rel:"nofollow",style:{color:"rgba(255, 255, 255, 0.3)",fontSize:"0.8rem"},children:s==="bg"?"Админ":"Admin"})})]})]}),a.jsxs("div",{className:"footer-contact",children:[a.jsx("h4",{children:s==="bg"?"Контакти":"Contact"}),a.jsxs("ul",{children:[a.jsxs("li",{children:["📍 ",s==="bg"?"Кооперативен пазар, павилион 5, Дупница":"Cooperative Market, Pavilion 5, Dupnitsa"]}),a.jsx("li",{children:"📞 089 551 7056"}),a.jsx("li",{children:"✉️ info@sakimed.com"}),a.jsx("li",{children:"🌐 www.sakimed.com"}),a.jsxs("li",{children:["📘 ",a.jsx("a",{href:"https://facebook.com/Saki2008",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})]})]})]})]}),a.jsx("div",{className:"footer-bottom",children:a.jsxs("p",{children:["© ",new Date().getFullYear()," САКИ - ",s==="bg"?"Дупница":"Dupnitsa",". ",i("footerRights")]})})]}),a.jsx("style",{children:`
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
      `})]})}function ah(){const{t:i,language:s}=_n();return a.jsxs("section",{id:"hero",className:"hero",children:[a.jsxs("div",{className:"hero-background",children:[a.jsx("img",{src:"https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:s==="bg"?"Пчеларски магазин САКИ в Дупница - натурален мед и пчеларски инвентар":"SAKI Beekeeping Shop in Dupnitsa - natural honey and beekeeping equipment",className:"hero-image"}),a.jsx("div",{className:"hero-overlay"}),a.jsx("div",{className:"hero-pattern"})]}),a.jsxs("div",{className:"container hero-content",children:[a.jsxs("div",{className:"hero-text",children:[a.jsx("h1",{className:"hero-title",children:i("heroTitle")}),a.jsx("p",{className:"hero-subtitle",children:i("heroSubtitle")}),a.jsxs("div",{className:"hero-cta",children:[a.jsx(Lt,{to:"/products?category=pchelni-produkti",className:"btn btn-primary",children:i("heroCtaHoney")}),a.jsx(Lt,{to:"/products?category=pchelarstvo",className:"btn btn-secondary",children:i("heroCtaEquipment")})]})]}),a.jsx("div",{className:"hero-visual",children:a.jsx("img",{src:"/big-bee.png",alt:s==="bg"?"Пчела":"Bee",className:"bee-icon"})})]}),a.jsx("style",{children:`
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
      `})]})}function sh(){const{t:i,language:s}=_n();return a.jsxs("section",{id:"about",className:"section about",children:[a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:i("aboutTitle")}),a.jsx("p",{className:"section-subtitle",children:i("aboutSubtitle")}),a.jsx("div",{className:"about-hero-image",children:a.jsx("img",{src:"https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:s==="bg"?"Семейна пчелна ферма САКИ в Долистово и Коркина - натурален пчелен мед":"SAKI family bee farm in Dolistovo and Korkina - natural honey"})}),a.jsxs("div",{className:"about-story",children:[a.jsxs("div",{className:"story-section",children:[a.jsx("h3",{children:i("storyTitle")}),a.jsx("p",{children:i("storyText1")}),a.jsx("p",{children:i("storyText2")})]}),a.jsxs("div",{className:"story-section",children:[a.jsx("h3",{children:i("apiariesTitle")}),a.jsx("p",{children:i("apiariesText1")}),a.jsx("p",{children:i("apiariesText2")})]}),a.jsxs("div",{className:"story-section",children:[a.jsx("h3",{children:i("certificationTitle")}),a.jsx("p",{children:i("certificationText1")}),a.jsx("p",{children:i("certificationText2")})]})]}),a.jsxs("div",{className:"about-grid",children:[a.jsxs("div",{className:"about-card",children:[a.jsx("div",{className:"about-icon",children:"🐝"}),a.jsx("h3",{children:i("cardExperience")}),a.jsx("p",{children:i("cardExperienceText")})]}),a.jsxs("div",{className:"about-card",children:[a.jsx("div",{className:"about-icon",children:"🏡"}),a.jsx("h3",{children:i("cardApiaries")}),a.jsx("p",{children:i("cardApiariesText")})]}),a.jsxs("div",{className:"about-card",children:[a.jsx("div",{className:"about-icon",children:"✅"}),a.jsx("h3",{children:i("cardCertification")}),a.jsx("p",{children:i("cardCertificationText")})]}),a.jsxs("div",{className:"about-card",children:[a.jsx("div",{className:"about-icon",children:"🏪"}),a.jsx("h3",{children:i("cardShop")}),a.jsx("p",{children:i("cardShopText")})]}),a.jsxs("div",{className:"about-card",children:[a.jsx("div",{className:"about-icon",children:"📦"}),a.jsx("h3",{children:i("cardProducts")}),a.jsx("p",{children:i("cardProductsText")})]}),a.jsxs("div",{className:"about-card",children:[a.jsx("div",{className:"about-icon",children:"🚚"}),a.jsx("h3",{children:i("cardDelivery")}),a.jsx("p",{children:i("cardDeliveryText")})]})]}),a.jsx("div",{className:"about-info",children:a.jsxs("div",{className:"about-info-content",children:[a.jsx("h3",{children:i("whyChooseTitle")}),a.jsxs("ul",{className:"about-list",children:[a.jsx("li",{children:i("whyChoose1")}),a.jsx("li",{children:i("whyChoose2")}),a.jsx("li",{children:i("whyChoose3")}),a.jsx("li",{children:i("whyChoose4")}),a.jsx("li",{children:i("whyChoose5")}),a.jsx("li",{children:i("whyChoose6")})]})]})})]}),a.jsx("style",{children:`
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
      `})]})}const rr="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 420 280%22%3E%3Crect width=%22420%22 height=%22280%22 fill=%22%23f8fafc%22/%3E%3Ctext x=%22210%22 y=%22140%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%2390a4ae%22%3EПродукт%3C/text%3E%3C/svg%3E",uh=[{id:1,name:"Кошери и рамки",description:"Кошери Дадан-Блат и Лангстрот, рамки, восъчни основи и части за поддръжка на пчелина",icon:"🏠",image:rr},{id:2,name:"Защитно облекло",description:"Пчеларски костюми, ръкавици, було и практични средства за спокойна работа",icon:"👕",image:rr},{id:3,name:"Центрофуги",description:"Ръчни и електрически центрофуги за внимателно и удобно вадене на мед",icon:"🍯",image:rr},{id:4,name:"Инвентар и инструменти",description:"Пчеларски ножове, вилици, дималки и основни инструменти за всекидневна работа",icon:"🔧",image:rr},{id:5,name:"Подхранване за пчели",description:"Подхранващи сиропи и добавки за силни и добре поддържани пчелни семейства",icon:"🫗",image:rr},{id:6,name:"Прополисов мехлем",description:"Натурален прополисов мехлем за локална грижа за кожата",icon:"🧴",image:rr}];function ch(){const{t:i}=_n();return a.jsxs("section",{id:"products",className:"section products",children:[a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:i("productsTitle")}),a.jsx("p",{className:"section-subtitle",children:i("productsSubtitle")}),a.jsx("div",{className:"products-grid",children:uh.map(s=>a.jsxs("div",{className:"product-card",children:[a.jsx("div",{className:"product-image",children:a.jsx("img",{src:s.image,alt:s.name})}),a.jsx("div",{className:"product-icon",children:s.icon}),a.jsx("h3",{className:"product-name",children:s.name}),a.jsx("p",{className:"product-description",children:s.description}),a.jsx("a",{href:"#contact",className:"product-link",children:i("productInquiry")})]},s.id))}),a.jsxs("div",{className:"products-cta",children:[a.jsx("p",{children:i("productsCta")}),a.jsx("a",{href:"#contact",className:"btn btn-primary",children:i("productsCtaButton")})]})]}),a.jsx("style",{children:`
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
      `})]})}const fi="",dh="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 240%22%3E%3Crect width=%22320%22 height=%22240%22 fill=%22%23f6f8fb%22/%3E%3Ctext x=%22160%22 y=%22120%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%23999%22%3EБез изображение%3C/text%3E%3C/svg%3E";function Gr(i){if(!i)return dh;const s=i.trim();return s.startsWith("/uploads/")?`${fi}${s}`:s.startsWith("uploads/")?`${fi}/${s}`:(s.startsWith(`${fi}/uploads/`)||/^https?:\/\//.test(s),s)}function cn(i){return`${fi}${i.startsWith("/")?i:`/${i}`}`}function fh(){const{t:i}=_n(),[s,u]=k.useState({name:"",email:"",phone:"",message:""}),[d,f]=k.useState({type:null,message:""}),[m,v]=k.useState(!1),j=async S=>{S.preventDefault(),v(!0),f({type:null,message:""});try{const _=await fetch(cn("/api/contact"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),N=await _.json();_.ok?(f({type:"success",message:i("formSuccess")}),u({name:"",email:"",phone:"",message:""})):f({type:"error",message:N.message||i("formError")})}catch{f({type:"error",message:i("formError")})}finally{v(!1)}},x=S=>{const{name:_,value:N}=S.target;u(T=>({...T,[_]:N}))};return a.jsxs("section",{id:"contact",className:"section contact",children:[a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:i("contactTitle")}),a.jsx("p",{className:"section-subtitle",children:i("contactSubtitle")}),a.jsxs("div",{className:"contact-grid",children:[a.jsxs("div",{className:"contact-info",children:[a.jsxs("div",{className:"contact-item",children:[a.jsx("div",{className:"contact-icon",children:"📍"}),a.jsxs("div",{children:[a.jsx("h3",{children:i("address")}),a.jsx("p",{children:i("addressValue")})]})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx("div",{className:"contact-icon",children:"📞"}),a.jsxs("div",{children:[a.jsx("h3",{children:i("phone")}),a.jsx("p",{children:i("phoneValue")})]})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx("div",{className:"contact-icon",children:"✉️"}),a.jsxs("div",{children:[a.jsx("h3",{children:i("email")}),a.jsx("p",{children:i("emailValue")})]})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx("div",{className:"contact-icon",children:"🌐"}),a.jsxs("div",{children:[a.jsx("h3",{children:i("website")}),a.jsx("p",{children:i("websiteValue")})]})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx("div",{className:"contact-icon",children:"📘"}),a.jsxs("div",{children:[a.jsx("h3",{children:i("facebook")}),a.jsx("p",{children:a.jsx("a",{href:"https://facebook.com/Saki2008",target:"_blank",rel:"noopener noreferrer",children:i("facebookValue")})})]})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx("div",{className:"contact-icon",children:"🕐"}),a.jsxs("div",{children:[a.jsx("h3",{children:i("workingHours")}),a.jsx("p",{children:i("workingHoursWeekday")}),a.jsx("p",{children:i("workingHoursSaturday")})]})]})]}),a.jsxs("form",{className:"contact-form",onSubmit:j,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"name",children:i("formName")}),a.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:x,required:!0,placeholder:i("formNamePlaceholder")})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:i("formEmail")}),a.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:x,required:!0,placeholder:i("formEmailPlaceholder")})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"phone",children:i("formPhone")}),a.jsx("input",{type:"tel",id:"phone",name:"phone",value:s.phone,onChange:x,placeholder:i("formPhonePlaceholder")})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"message",children:i("formMessage")}),a.jsx("textarea",{id:"message",name:"message",value:s.message,onChange:x,required:!0,placeholder:i("formMessagePlaceholder"),rows:5})]}),a.jsx("button",{type:"submit",className:"btn btn-primary",disabled:m,children:i(m?"formSubmitting":"formSubmit")}),d.type&&a.jsx("div",{className:`form-status form-status-${d.type}`,children:d.message})]})]})]}),a.jsx("style",{children:`
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
      `})]})}const yi="https://www.sakimed.com",La="САКИ - пчеларски магазин в Дупница",za=`${yi}/bee-logo.jpg`,fd="САКИ е семеен пчеларски магазин в Дупница. Предлагаме натурален мед от собствени пчелини, прополис, кошери, центрофуги и пчеларски инвентар.";function hi(i="/"){return/^https?:\/\//.test(i)?i:i.startsWith("data:")?za:`${yi}${i.startsWith("/")?i:`/${i}`}`}function ph(){return{"@context":"https://schema.org","@type":"Store",name:"САКИ - пчеларски магазин",alternateName:"SAKI Beekeeping Shop",description:fd,url:yi,telephone:"+359895517056",email:"info@sakimed.com",image:za,priceRange:"$$",foundingDate:"2006",address:{"@type":"PostalAddress",streetAddress:"Кооперативен пазар, павилион 5",addressLocality:"Дупница",postalCode:"2600",addressCountry:"BG"},openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"09:00",closes:"18:00"},{"@type":"OpeningHoursSpecification",dayOfWeek:"Saturday",opens:"09:00",closes:"14:00"}],sameAs:["https://facebook.com/Saki2008"],areaServed:{"@type":"Country",name:"Bulgaria"},makesOffer:[{"@type":"Offer",itemOffered:{"@type":"Product",name:"Натурален пчелен мед"}},{"@type":"Offer",itemOffered:{"@type":"Product",name:"Пчеларски инвентар"}},{"@type":"Offer",itemOffered:{"@type":"Product",name:"Кошери и рамки"}}]}}function mh(){return{"@context":"https://schema.org","@type":"WebSite",name:La,url:yi,inLanguage:"bg-BG",publisher:{"@type":"Organization",name:"САКИ"}}}function Cn(i,s){let u=document.querySelector(`meta[name="${i}"]`);u||(u=document.createElement("meta"),u.name=i,document.head.appendChild(u)),u.content=s}function En(i,s){let u=document.querySelector(`meta[property="${i}"]`);u||(u=document.createElement("meta"),u.setAttribute("property",i),document.head.appendChild(u)),u.content=s}function hh(i){let s=document.querySelector('link[rel="canonical"]');s||(s=document.createElement("link"),s.rel="canonical",document.head.appendChild(s)),s.href=i}function gh(i){let s=document.querySelector('script[data-page-json-ld="true"]');if(!i){s==null||s.remove();return}s||(s=document.createElement("script"),s.type="application/ld+json",s.dataset.pageJsonLd="true",document.head.appendChild(s)),s.textContent=i}function ut({title:i,description:s,path:u,image:d=za,type:f="website",noindex:m=!1,jsonLd:v}){const j=vt(),x=hi(u??j.pathname),S=hi(d),_=v?JSON.stringify(v):"";return k.useEffect(()=>{document.title=i,hh(x),Cn("description",s),Cn("robots",m?"noindex, nofollow":"index, follow"),Cn("theme-color","#f59e0b"),En("og:site_name",La),En("og:type",f==="product"?"product":f),En("og:title",i),En("og:description",s),En("og:url",x),En("og:image",S),En("og:locale","bg_BG"),Cn("twitter:card","summary_large_image"),Cn("twitter:title",i),Cn("twitter:description",s),Cn("twitter:image",S),gh(_)},[x,s,S,_,m,i,f]),null}const vh=(...i)=>{typeof window<"u"&&(typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),window.gtag(...i))},yh=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function xh(i){return i.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(s,u,d)=>u>0&&u+s.length!==d.length&&s.search(yh)>-1&&d.charAt(u-2)!==":"&&(d.charAt(u+s.length)!=="-"||d.charAt(u-1)==="-")&&d.charAt(u-1).search(/[^\s-]/)<0?s.toLowerCase():s.substr(1).search(/[A-Z]|\../)>-1?s:s.charAt(0).toUpperCase()+s.substr(1))}function wh(i){return typeof i=="string"&&i.indexOf("@")!==-1}const kh="REDACTED (Potential Email Address)";function Sh(i){return wh(i)?(console.warn("This arg looks like an email address, redacting."),kh):i}function ya(i="",s=!0,u=!0){let d=i||"";return s&&(d=xh(i)),u&&(d=Sh(d)),d}var jh=class{constructor(){Ee(this,"isInitialized");Ee(this,"_testMode");Ee(this,"_currentMeasurementId");Ee(this,"_hasLoadedGA");Ee(this,"_isQueuing");Ee(this,"_queueGtag");Ee(this,"reset",()=>{this.isInitialized=!1,this._testMode=!1,this._currentMeasurementId="",this._hasLoadedGA=!1,this._isQueuing=!1,this._queueGtag=[]});Ee(this,"_gtag",(...i)=>{this._testMode?this._queueGtag.push(i):this._isQueuing?this._queueGtag.push(i):vh(...i)});Ee(this,"_loadGA",(i,s,u="https://www.googletagmanager.com/gtag/js")=>{if(!(typeof window>"u"||typeof document>"u")&&!this._hasLoadedGA){const d=document.createElement("script");d.async=!0,d.src=`${u}?id=${i}`,s&&d.setAttribute("nonce",s),document.body.appendChild(d),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},this._hasLoadedGA=!0}});Ee(this,"_toGtagOptions",i=>{if(!i)return;const s={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"};return Object.entries(i).reduce((u,[d,f])=>(s[d]?u[s[d]]=f:u[d]=f,u),{})});Ee(this,"initialize",(i,s={})=>{if(!i)throw new Error("Require GA_MEASUREMENT_ID");const u=typeof i=="string"?[{trackingId:i}]:i;this._currentMeasurementId=u[0].trackingId;const{gaOptions:d,gtagOptions:f,nonce:m,testMode:v=!1,gtagUrl:j}=s;if(this._testMode=v,v||this._loadGA(this._currentMeasurementId,m,j),this.isInitialized||(this._gtag("js",new Date),u.forEach(x=>{const S={...this._toGtagOptions({...d,...x.gaOptions}),...f,...x.gtagOptions};Object.keys(S).length?this._gtag("config",x.trackingId,S):this._gtag("config",x.trackingId)})),this.isInitialized=!0,!v){const x=[...this._queueGtag];for(this._queueGtag=[],this._isQueuing=!1;x.length;){const S=x.shift();this._gtag(...S),S[0]==="get"&&(this._isQueuing=!0)}}});Ee(this,"set",i=>{if(!i){console.warn("`fieldsObject` is required in .set()");return}if(typeof i!="object"){console.warn("Expected `fieldsObject` arg to be an Object");return}Object.keys(i).length===0&&console.warn("empty `fieldsObject` given to .set()"),this._gaCommand("set",i)});Ee(this,"_gaCommandSendEvent",(i,s,u,d,f)=>{this._gtag("event",s,{event_category:i,event_label:u,value:d,...f&&{non_interaction:f.nonInteraction},...this._toGtagOptions(f)})});Ee(this,"_gaCommandSendEventParameters",(...i)=>{if(typeof i[0]=="string")this._gaCommandSendEvent(...i.slice(1));else{const{eventCategory:s,eventAction:u,eventLabel:d,eventValue:f,hitType:m,...v}=i[0];this._gaCommandSendEvent(s,u,d,f,v)}});Ee(this,"_gaCommandSendTiming",(i,s,u,d)=>{this._gtag("event","timing_complete",{name:s,value:u,event_category:i,event_label:d})});Ee(this,"_gaCommandSendPageview",(i,s)=>{if(s&&Object.keys(s).length){const{title:u,location:d,...f}=this._toGtagOptions(s)||{};this._gtag("event","page_view",{...i&&{page_path:i},...u&&{page_title:u},...d&&{page_location:d},...f})}else i?this._gtag("event","page_view",{page_path:i}):this._gtag("event","page_view")});Ee(this,"_gaCommandSendPageviewParameters",(...i)=>{if(typeof i[0]=="string")this._gaCommandSendPageview(...i.slice(1));else{const{page:s,hitType:u,...d}=i[0];this._gaCommandSendPageview(s,d)}});Ee(this,"_gaCommandSend",(...i)=>{const s=typeof i[0]=="string"?i[0]:i[0].hitType;switch(s){case"event":this._gaCommandSendEventParameters(...i);break;case"pageview":this._gaCommandSendPageviewParameters(...i);break;case"timing":this._gaCommandSendTiming(...i.slice(1));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn(`Unsupported send command: ${s}`);break;default:console.warn(`Send command doesn't exist: ${s}`)}});Ee(this,"_gaCommandSet",(...i)=>{typeof i[0]=="string"&&(i[0]={[i[0]]:i[1]}),this._gtag("set",this._toGtagOptions(i[0]))});Ee(this,"_gaCommand",(i,...s)=>{switch(i){case"send":this._gaCommandSend(...s);break;case"set":this._gaCommandSet(...s);break;default:console.warn(`Command doesn't exist: ${i}`)}});Ee(this,"ga",(...i)=>{if(typeof i[0]=="string")this._gaCommand(...i);else{const[s]=i;this._gtag("get",this._currentMeasurementId,"client_id",u=>{this._isQueuing=!1;const d=this._queueGtag;for(s({get:f=>f==="clientId"?u:f==="trackingId"?this._currentMeasurementId:f==="apiVersion"?"1":void 0});d.length;){const f=d.shift();this._gtag(...f)}}),this._isQueuing=!0}return this.ga});Ee(this,"event",(i,s)=>{if(typeof i=="string")this._gtag("event",i,this._toGtagOptions(s));else{const{action:u,category:d,label:f,value:m,nonInteraction:v,transport:j}=i;if(!d||!u){console.warn("args.category AND args.action are required in event()");return}const x={hitType:"event",eventCategory:ya(d),eventAction:ya(u)};f&&(x.eventLabel=ya(f)),typeof m<"u"&&(typeof m!="number"?console.warn("Expected `args.value` arg to be a Number."):x.eventValue=m),typeof v<"u"&&(typeof v!="boolean"?console.warn("`args.nonInteraction` must be a boolean."):x.nonInteraction=v),typeof j<"u"&&(typeof j!="string"?console.warn("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(j)===-1&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),x.transport=j)),this._gaCommand("send",x)}});Ee(this,"send",i=>{this._gaCommand("send",i)});this.reset()}gtag(...i){this._gtag(...i)}},Ch=new jh,pd=Ch;function Eh(){return k.useEffect(()=>{pd.send({hitType:"pageview",page:window.location.pathname+window.location.search})},[]),a.jsxs(a.Fragment,{children:[a.jsx(ut,{title:"САКИ - пчеларски магазин в Дупница | Натурален мед и пчеларски инвентар",description:fd,path:"/",jsonLd:[ph(),mh()]}),a.jsx(ah,{}),a.jsx(sh,{}),a.jsx(ch,{}),a.jsx(fh,{})]})}function Nh({id:i,slug:s,name:u,price:d,salePrice:f,image:m,onViewDetails:v}){const{addToCart:j}=Pn(),x=f??d,S=N=>{N.stopPropagation(),j({id:i,slug:s,name:u,price:d,salePrice:f,image:m},1)},_=()=>{v&&v(s||i)};return a.jsxs("div",{className:"product-card-shopping",onClick:_,children:[a.jsx("div",{className:"product-image-container",children:a.jsx("img",{src:m,alt:u,className:"product-image"})}),a.jsxs("div",{className:"product-card-content",children:[a.jsx("h3",{className:"product-card-name",children:u}),a.jsxs("div",{className:"product-card-price",children:[f&&a.jsxs("span",{className:"old-price",children:[d," лв."]}),a.jsxs("span",{children:[x," лв."]})]}),a.jsxs("div",{className:"product-card-actions",children:[v&&a.jsx("button",{className:"btn btn-link",onClick:N=>{N.stopPropagation(),v(s||i)},children:"Детайли"}),a.jsx("button",{className:"btn btn-primary",onClick:S,children:"Добави в количката"})]})]}),a.jsx("style",{children:`
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
      `})]})}function Ph(){var ee;const i=Nn(),[s]=Gm(),[u,d]=k.useState([]),[f,m]=k.useState([]),[v,j]=k.useState([]),[x,S]=k.useState(!0),[_,N]=k.useState(""),[T,$]=k.useState("all");k.useEffect(()=>{const V=s.get("category");V==="honey"?$("pchelni-produkti"):V==="equipment"?$("pchelarstvo"):V&&$(V)},[s]),k.useEffect(()=>{(async()=>{try{const[ne,ie,he]=await Promise.all([fetch(cn("/api/products")),fetch(cn("/api/categories")),fetch(cn("/api/promotions"))]);if(!ne.ok||!ie.ok)throw new Error("Не успяхме да заредим продуктите.");const K=await ne.json(),ue=await ie.json(),ye=he.ok?await he.json():[],Be=K.map(Te=>({...Te,image:Gr(Te.image)}));d(Be),m(ue),j(ye)}catch(ne){N(ne instanceof Error?ne.message:"Възникна грешка при зареждането.")}finally{S(!1)}})()},[]);const A=T==="all"?u:u.filter(V=>V.category===T),F=T==="pchelni-produkti"?"Пчелни продукти от САКИ | Натурален мед и прополис":T==="pchelarstvo"?"Пчеларски инвентар и оборудване | САКИ Дупница":"Продукти | Мед и пчеларски инвентар от САКИ",D=(ee=f.find(V=>V.slug===T))==null?void 0:ee.name,M=v.find(V=>V.active&&V.bannerText),Z=T==="pchelni-produkti"?"Разгледайте пчелните продукти на САКИ - натурален мед от собствени пчелини и прополис с гарантирано качество.":T==="pchelarstvo"?"Кошери, рамки, центрофуги, защитно облекло и практичен пчеларски инвентар за начинаещи и опитни пчелари.":"Мед, пчелни продукти, кошери, центрофуги и пчеларски инвентар от семеен магазин САКИ в Дупница.";return a.jsxs(a.Fragment,{children:[a.jsx(ut,{title:F,description:Z,path:"/products"}),a.jsxs("div",{className:"products-page",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"products-header",children:[a.jsx("h1",{children:D||"Нашите продукти"}),a.jsx("p",{children:"Натурален мед, пчелни продукти и оборудване за работа в пчелина"})]}),M&&a.jsxs("div",{className:"promotion-banner",children:[a.jsx("strong",{children:M.title}),a.jsx("span",{children:M.bannerText})]}),_&&a.jsx("div",{className:"error-message",children:_}),x?a.jsx("div",{className:"loading",children:"Зареждане..."}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"category-filters",children:[a.jsx("button",{className:`filter-btn ${T==="all"?"active":""}`,onClick:()=>$("all"),children:"Всички продукти"}),f.map(V=>a.jsx("button",{className:`filter-btn ${T===V.slug?"active":""}`,onClick:()=>$(V.slug),children:V.name},V.id))]}),A.length===0?a.jsx("div",{className:"no-products",children:"В тази категория все още няма продукти."}):a.jsx("div",{className:"products-grid",children:A.map(V=>a.jsx(Nh,{id:V.id,slug:V.slug,name:V.name,price:V.price,salePrice:V.salePrice,image:V.image,onViewDetails:ne=>i(`/products/${ne}`)},V.id))})]})]}),a.jsx("style",{children:`
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
      `})]})]})}function _h(){const{id:i}=rd(),s=Nn(),{addToCart:u}=Pn(),[d,f]=k.useState(null),[m,v]=k.useState(!0),[j,x]=k.useState(""),[S,_]=k.useState(1),[N,T]=k.useState(!1);k.useEffect(()=>{(async()=>{try{const ne=await fetch(cn(`/api/products/${i}`));if(!ne.ok)throw new Error("Продуктът не е намерен.");const ie=await ne.json();ie.image=Gr(ie.image),f(ie)}catch(ne){x(ne instanceof Error?ne.message:"Възникна грешка при зареждането.")}finally{v(!1)}})()},[i]);const $=()=>{d&&(u(d,S),T(!0),setTimeout(()=>T(!1),2e3))};if(m)return a.jsxs(a.Fragment,{children:[a.jsx(ut,{title:"Продукт | САКИ",description:"Продукт от пчеларски магазин САКИ в Дупница.",path:`/products/${i??""}`}),a.jsx("div",{className:"product-detail-page",children:a.jsx("div",{className:"container",children:a.jsx("div",{className:"loading",children:"Зареждане..."})})})]});if(j||!d)return a.jsxs(a.Fragment,{children:[a.jsx(ut,{title:"Продуктът не е намерен | САКИ",description:"Този продукт не е наличен в каталога на САКИ.",path:`/products/${i??""}`,noindex:!0}),a.jsx("div",{className:"product-detail-page",children:a.jsxs("div",{className:"container",children:[a.jsx("div",{className:"error-message",children:j||"Продуктът не е намерен."}),a.jsx("button",{className:"btn btn-primary",onClick:()=>s("/products"),children:"Назад към продуктите"})]})})]});const A=d.categoryName||(d.category==="pchelni-produkti"?"Пчелни продукти":"За пчелари"),F=d.stock>0,D=`${d.name} | ${La}`,M=d.salePrice??d.price,Z=`${d.description} Цена: ${M} лв. ${F?"В наличност.":"Временно изчерпан."}`,ee={"@context":"https://schema.org","@type":"Product",name:d.name,description:d.description,image:hi(d.image),brand:{"@type":"Brand",name:"САКИ"},offers:{"@type":"Offer",url:hi(`/products/${d.slug}`),priceCurrency:"BGN",price:M,availability:F?"https://schema.org/InStock":"https://schema.org/OutOfStock"}};return a.jsxs("div",{className:"product-detail-page",children:[a.jsx(ut,{title:D,description:Z,path:`/products/${d.slug}`,image:d.image,type:"product",jsonLd:ee}),a.jsxs("div",{className:"container",children:[a.jsx("button",{className:"back-btn",onClick:()=>s("/products"),children:"← Назад"}),a.jsxs("div",{className:"product-detail-container",children:[a.jsx("div",{className:"product-detail-image",children:a.jsx("img",{src:d.image,alt:d.name})}),a.jsxs("div",{className:"product-detail-content",children:[a.jsx("div",{className:"breadcrumb",children:a.jsx("span",{className:"category-badge",children:A})}),a.jsx("h1",{className:"product-detail-name",children:d.name}),a.jsxs("div",{className:"product-detail-price",children:[d.salePrice&&a.jsxs("span",{className:"old-price",children:[d.price," лв."]}),a.jsx("span",{className:"price-amount",children:M}),a.jsx("span",{className:"price-currency",children:"лв."})]}),a.jsxs("div",{className:"product-detail-description",children:[a.jsx("h3",{children:"Описание"}),a.jsx("p",{children:d.description})]}),!F&&a.jsx("div",{className:"stock-warning",children:"В момента няма наличност."}),a.jsxs("div",{className:"product-detail-actions",children:[a.jsxs("div",{className:"quantity-selector",children:[a.jsx("label",{htmlFor:"quantity",children:"Количество:"}),a.jsxs("div",{className:"quantity-controls",children:[a.jsx("button",{className:"qty-btn",onClick:()=>_(Math.max(1,S-1)),disabled:S===1,children:"−"}),a.jsx("input",{id:"quantity",type:"number",min:"1",value:S,onChange:V=>_(parseInt(V.target.value,10)||1),className:"qty-input"}),a.jsx("button",{className:"qty-btn",onClick:()=>_(S+1),children:"+"})]})]}),a.jsx("button",{className:"btn btn-primary btn-large",onClick:$,disabled:!F,children:"Добави в количката"}),N&&a.jsx("div",{className:"added-message",children:"✓ Добавено в количката."})]}),a.jsxs("div",{className:"product-info",children:[a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"info-label",children:"Наличност:"}),a.jsx("span",{className:"info-value",children:F?`${d.stock} бр.`:"Временно изчерпан"})]}),a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"info-label",children:"Категория:"}),a.jsx("span",{className:"info-value",children:A})]})]})]})]})]}),a.jsx("style",{children:`
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
      `})]})}function bh({item:i}){const{updateQuantity:s,removeFromCart:u}=Pn();return a.jsxs("div",{className:"cart-item",children:[a.jsx("div",{className:"cart-item-image",children:a.jsx("img",{src:i.image,alt:i.name})}),a.jsxs("div",{className:"cart-item-details",children:[a.jsx("h3",{className:"cart-item-name",children:i.name}),a.jsxs("p",{className:"cart-item-price",children:[i.price," лв."]})]}),a.jsxs("div",{className:"cart-item-quantity",children:[a.jsx("button",{className:"qty-btn",onClick:()=>s(i.productId,i.quantity-1),children:"−"}),a.jsx("input",{type:"number",min:"1",value:i.quantity,onChange:d=>s(i.productId,parseInt(d.target.value,10)||1),className:"qty-input"}),a.jsx("button",{className:"qty-btn",onClick:()=>s(i.productId,i.quantity+1),children:"+"})]}),a.jsxs("div",{className:"cart-item-subtotal",children:[(i.price*i.quantity).toFixed(2)," лв."]}),a.jsx("button",{className:"cart-item-remove",onClick:()=>u(i.productId),children:"×"}),a.jsx("style",{children:`
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
      `})]})}function Th(){const i=Nn(),{cart:s,getTotalPrice:u,clearCart:d}=Pn();return s.length===0?a.jsxs("div",{className:"cart-page",children:[a.jsx(ut,{title:"Количка | САКИ",description:"Вашата количка в онлайн магазина на САКИ.",path:"/cart",noindex:!0}),a.jsxs("div",{className:"container",children:[a.jsx("h1",{children:"Вашата количка"}),a.jsxs("div",{className:"empty-cart",children:[a.jsx("div",{className:"empty-icon",children:"🛒"}),a.jsx("p",{children:"Вашата количка е празна"}),a.jsx("button",{className:"btn btn-primary",onClick:()=>i("/products"),children:"Продължи с пазаруване"})]})]}),a.jsx("style",{children:`
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
        `})]}):a.jsxs("div",{className:"cart-page",children:[a.jsx(ut,{title:"Количка | САКИ",description:"Прегледайте продуктите в количката си преди поръчка.",path:"/cart",noindex:!0}),a.jsxs("div",{className:"container",children:[a.jsx("h1",{children:"Вашата количка"}),a.jsxs("div",{className:"cart-layout",children:[a.jsxs("div",{className:"cart-items-section",children:[a.jsxs("div",{className:"cart-items-header",children:[a.jsxs("span",{children:[s.length," продукт",s.length!==1?"и":""]}),a.jsx("button",{className:"link-btn",onClick:d,children:"Изчисти количката"})]}),a.jsx("div",{className:"cart-items",children:s.map(f=>a.jsx(bh,{item:f},f.productId))})]}),a.jsx("div",{className:"cart-summary",children:a.jsxs("div",{className:"summary-card",children:[a.jsx("h3",{children:"Резюме на поръчката"}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Междинна сума:"}),a.jsxs("span",{children:[u().toFixed(2)," лв."]})]}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Доставка:"}),a.jsx("span",{className:"delivery-note",children:"Зависи от адреса"})]}),a.jsx("div",{className:"summary-divider"}),a.jsxs("div",{className:"summary-row total",children:[a.jsx("span",{children:"Общо:"}),a.jsxs("span",{children:[u().toFixed(2)," лв."]})]}),a.jsx("button",{className:"btn btn-primary btn-block",onClick:()=>i("/checkout"),children:"Към поръчката"}),a.jsx("button",{className:"btn btn-secondary btn-block",onClick:()=>i("/products"),children:"Продължи с пазаруване"}),a.jsx("div",{className:"secure-badge",children:"🔒 Сигурна поръчка"})]})})]})]}),a.jsx("style",{children:`
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
      `})]})}function Rh({onOrderSuccess:i}){const{cart:s,clearCart:u}=Pn(),[d,f]=k.useState(!1),[m,v]=k.useState(""),[j,x]=k.useState(!1),[S,_]=k.useState({customerName:"",email:"",phone:"",address:"",notes:""}),N=$=>{const{name:A,value:F}=$.target;_(D=>({...D,[A]:F}))},T=async $=>{$.preventDefault(),v(""),f(!0);try{const A=await fetch(cn("/api/orders"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerName:S.customerName,email:S.email,phone:S.phone,address:S.address,notes:S.notes,items:s.map(D=>({productId:D.productId,quantity:D.quantity}))})});if(!A.ok){const D=await A.json();throw new Error(D.error||"Failed to create order")}const F=await A.json();x(!0),u(),i&&i(F.order.id),_({customerName:"",email:"",phone:"",address:"",notes:""})}catch(A){v(A instanceof Error?A.message:"Възникна грешка. Моля, опитайте отново.")}finally{f(!1)}};return j?a.jsxs("div",{className:"checkout-success",children:[a.jsx("div",{className:"success-icon",children:"✓"}),a.jsx("h2",{children:"Поръчката е приета!"}),a.jsx("p",{children:"Благодарим ви за поръчката. Ще се свържем с вас за потвърждение."}),a.jsx("p",{className:"success-note",children:"Ако имате въпрос, можете да ни потърсите и по телефона."})]}):a.jsxs("form",{onSubmit:T,className:"checkout-form",children:[a.jsx("h2",{children:"Данни за поръчката"}),m&&a.jsx("div",{className:"form-error",children:m}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"customerName",children:"Име и фамилия *"}),a.jsx("input",{type:"text",id:"customerName",name:"customerName",value:S.customerName,onChange:N,required:!0,placeholder:"Иван Петров"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"phone",children:"Телефон *"}),a.jsx("input",{type:"tel",id:"phone",name:"phone",value:S.phone,onChange:N,required:!0,placeholder:"+359 87 123 4567"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Имейл"}),a.jsx("input",{type:"email",id:"email",name:"email",value:S.email,onChange:N,placeholder:"you@example.com"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"address",children:"Адрес за доставка *"}),a.jsx("textarea",{id:"address",name:"address",value:S.address,onChange:N,required:!0,placeholder:"ул. Пример 123, гр. Дупница",rows:3})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"notes",children:"Бележка към поръчката"}),a.jsx("textarea",{id:"notes",name:"notes",value:S.notes,onChange:N,placeholder:"Уточнения за доставка или продуктите",rows:3})]}),a.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:d||s.length===0,children:d?"Изпращане...":"Изпрати поръчката"}),a.jsx("style",{children:`
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
      `})]})}function Lh(){const i=Nn(),{cart:s,getTotalPrice:u}=Pn();return s.length===0?a.jsxs("div",{className:"checkout-page",children:[a.jsx(ut,{title:"Поръчка | САКИ",description:"Завършване на поръчка в онлайн магазина на САКИ.",path:"/checkout",noindex:!0}),a.jsx("div",{className:"container",children:a.jsxs("div",{className:"empty-state",children:[a.jsx("p",{children:"Няма продукти в количката"}),a.jsx("button",{className:"btn btn-primary",onClick:()=>i("/products"),children:"Назад към продуктите"})]})})]}):a.jsxs("div",{className:"checkout-page",children:[a.jsx(ut,{title:"Завършване на поръчката | САКИ",description:"Попълнете данните за доставка и изпратете поръчката си към САКИ.",path:"/checkout",noindex:!0}),a.jsxs("div",{className:"container",children:[a.jsx("h1",{children:"Завършване на поръчката"}),a.jsxs("div",{className:"checkout-layout",children:[a.jsx("div",{className:"checkout-form-section",children:a.jsx(Rh,{onOrderSuccess:()=>setTimeout(()=>i("/"),3e3)})}),a.jsx("div",{className:"checkout-summary",children:a.jsxs("div",{className:"summary-card",children:[a.jsx("h3",{children:"Преглед на поръчката"}),a.jsx("div",{className:"order-items",children:s.map(d=>a.jsxs("div",{className:"order-item",children:[a.jsx("span",{className:"item-name",children:d.name}),a.jsxs("span",{className:"item-qty",children:["x",d.quantity]}),a.jsxs("span",{className:"item-price",children:[(d.price*d.quantity).toFixed(2)," лв."]})]},d.productId))}),a.jsx("div",{className:"summary-divider"}),a.jsxs("div",{className:"total-row",children:[a.jsx("span",{children:"Общо:"}),a.jsxs("span",{className:"total-price",children:[u().toFixed(2)," лв."]})]}),a.jsxs("div",{className:"info-box",children:[a.jsx("p",{children:"Важно:"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Проверете внимателно адреса"}),a.jsx("li",{children:"Ще се свържем с вас за потвърждение"}),a.jsx("li",{children:"Срокът за доставка зависи от адреса и наличността"})]})]})]})})]})]}),a.jsx("style",{children:`
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
      `})]})}const xa={name:"",slug:"",categoryId:"",price:"",salePrice:"",stock:"0",status:"ACTIVE",featured:!1,shortDescription:"",description:"",seoTitle:"",seoDescription:"",imagesText:""},$c={title:"",slug:"",description:"",discountType:"PERCENTAGE",discountValue:"0",startsAt:"",endsAt:"",active:!1,bannerText:"",productId:"",categoryId:"",seoTitle:"",seoDescription:""},Bc={title:"",slug:"",heroTitle:"",heroSubtitle:"",heroImage:"",ctaText:"",ctaLink:"",status:"DRAFT",seoTitle:"",seoDescription:"",sectionsText:`[
  {
    "type": "text",
    "title": "Заглавие на секцията",
    "body": "Текст за специалния продукт или кампания."
  }
]`};function zh(){const[i,s]=k.useState(()=>localStorage.getItem("admin_token")||""),[u,d]=k.useState(!1),[f,m]=k.useState({email:"",password:""}),[v,j]=k.useState("products"),[x,S]=k.useState(""),[_,N]=k.useState(!1),[T,$]=k.useState([]),[A,F]=k.useState([]),[D,M]=k.useState([]),[Z,ee]=k.useState([]),[V,ne]=k.useState([]),[ie,he]=k.useState(null),[K,ue]=k.useState(xa),[ye,Be]=k.useState({name:"",slug:"",description:"",sortOrder:"0"}),[Te,De]=k.useState(null),[X,se]=k.useState($c),[ze,ke]=k.useState(null),[z,q]=k.useState(Bc),B=k.useMemo(()=>({...i?{Authorization:`Bearer ${i}`}:{}}),[i]);async function w(h,re={}){const Oe=await fetch(cn(h),{...re,credentials:"include",headers:{...re.body instanceof FormData?{}:{"Content-Type":"application/json"},...B,...re.headers||{}}});if(!Oe.ok){const Xe=await Oe.json().catch(()=>({error:"Заявката не беше успешна."}));throw new Error(Xe.error||"Заявката не беше успешна.")}return Oe.status===204?null:Oe.json()}async function b(){const[h,re,Oe,Xe,Rn]=await Promise.all([w("/api/admin/categories"),w("/api/admin/products"),w("/api/admin/promotions"),w("/api/admin/landing-pages"),w("/api/admin/orders")]);$(h),F(re),M(Oe),ee(Xe),ne(Rn.orders||[])}k.useEffect(()=>{i&&w("/api/auth/me").then(()=>(d(!0),b())).catch(()=>{s(""),localStorage.removeItem("admin_token")})},[]);async function oe(h){h.preventDefault(),N(!0),S("");try{const re=await w("/api/auth/login",{method:"POST",body:JSON.stringify(f)});s(re.token),localStorage.setItem("admin_token",re.token),d(!0),await b()}catch(re){S(re instanceof Error?re.message:"Неуспешен вход.")}finally{N(!1)}}async function le(){await w("/api/auth/logout",{method:"POST"}).catch(()=>{}),s(""),localStorage.removeItem("admin_token"),d(!1)}function ce(h){he(h.id),ue({name:h.name,slug:h.slug,categoryId:String(h.categoryId),price:String(h.price),salePrice:h.salePrice?String(h.salePrice):"",stock:String(h.stock),status:h.status,featured:h.featured,shortDescription:h.shortDescription||"",description:h.description,seoTitle:h.seoTitle||"",seoDescription:h.seoDescription||"",imagesText:h.images.map(re=>re.url).join(`
`)}),window.scrollTo({top:0,behavior:"smooth"})}async function de(h){var re;h.preventDefault(),N(!0);try{const Oe={...K,categoryId:Number(K.categoryId||((re=T[0])==null?void 0:re.id)),price:Number(K.price),salePrice:K.salePrice?Number(K.salePrice):null,stock:Number(K.stock),images:K.imagesText.split(`
`).map(Xe=>Xe.trim()).filter(Boolean).map((Xe,Rn)=>({url:Xe,alt:K.name,sortOrder:Rn}))};await w(ie?`/api/admin/products/${ie}`:"/api/admin/products",{method:ie?"PUT":"POST",body:JSON.stringify(Oe)}),ue(xa),he(null),await b(),S("Продуктът е запазен.")}catch(Oe){S(Oe instanceof Error?Oe.message:"Грешка при запазване.")}finally{N(!1)}}async function ve(h){const re=new FormData;re.append("file",h),re.append("alt",K.name||"Продукт САКИ");const Oe=await w("/api/admin/media",{method:"POST",body:re});ue(Xe=>({...Xe,imagesText:[Xe.imagesText,Oe.url].filter(Boolean).join(`
`)}))}async function me(h){h.preventDefault(),await w("/api/admin/categories",{method:"POST",body:JSON.stringify({...ye,sortOrder:Number(ye.sortOrder)})}),Be({name:"",slug:"",description:"",sortOrder:"0"}),await b()}function xe(h){var re,Oe;De(h.id),se({title:h.title,slug:h.slug,description:h.description||"",discountType:h.discountType,discountValue:String(h.discountValue),startsAt:((re=h.startsAt)==null?void 0:re.slice(0,16))||"",endsAt:((Oe=h.endsAt)==null?void 0:Oe.slice(0,16))||"",active:h.active,bannerText:h.bannerText||"",productId:h.productId?String(h.productId):"",categoryId:h.categoryId?String(h.categoryId):"",seoTitle:h.seoTitle||"",seoDescription:h.seoDescription||""})}async function Ke(h){h.preventDefault();const re={...X,discountValue:Number(X.discountValue),productId:X.productId?Number(X.productId):null,categoryId:X.categoryId?Number(X.categoryId):null,startsAt:X.startsAt?new Date(X.startsAt).toISOString():null,endsAt:X.endsAt?new Date(X.endsAt).toISOString():null};await w(Te?`/api/admin/promotions/${Te}`:"/api/admin/promotions",{method:Te?"PUT":"POST",body:JSON.stringify(re)}),se($c),De(null),await b()}function bn(h){ke(h.id),q({title:h.title,slug:h.slug,heroTitle:h.heroTitle,heroSubtitle:h.heroSubtitle||"",heroImage:h.heroImage||"",ctaText:h.ctaText||"",ctaLink:h.ctaLink||"",status:h.status,seoTitle:h.seoTitle||"",seoDescription:h.seoDescription||"",sectionsText:JSON.stringify(h.sections||[],null,2)})}async function Xr(h){h.preventDefault();let re;try{re=JSON.parse(z.sectionsText||"[]")}catch{S("Секциите трябва да са валиден JSON.");return}await w(ze?`/api/admin/landing-pages/${ze}`:"/api/admin/landing-pages",{method:ze?"PUT":"POST",body:JSON.stringify({...z,sections:re})}),q(Bc),ke(null),await b()}async function Tn(h,re){await w(`/api/admin/orders/${h}/status`,{method:"PUT",body:JSON.stringify({status:re})}),await b()}return u?a.jsxs("div",{className:"admin-container",children:[a.jsx(ut,{title:"Управление на магазина | САКИ",description:"Административен панел за САКИ.",path:"/admin",noindex:!0}),a.jsxs("div",{className:"container",children:[a.jsxs("header",{className:"admin-header",children:[a.jsxs("div",{children:[a.jsx("h1",{children:"Управление на магазина"}),a.jsx("p",{children:"Продукти, промоции, специални страници и поръчки."})]}),a.jsx("button",{className:"btn btn-secondary",onClick:le,children:"Изход"})]}),x&&a.jsx("p",{className:"status",children:x}),a.jsx("nav",{className:"admin-tabs",children:[["products","Продукти"],["categories","Категории"],["promotions","Промоции"],["landing-pages","Специални страници"],["orders","Поръчки"]].map(([h,re])=>a.jsx("button",{className:v===h?"active":"",onClick:()=>j(h),children:re},h))}),v==="products"&&a.jsxs("section",{className:"admin-grid",children:[a.jsxs("form",{className:"admin-card",onSubmit:de,children:[a.jsx("h2",{children:ie?"Редактиране на продукт":"Нов продукт"}),a.jsx("input",{placeholder:"Име",value:K.name,onChange:h=>ue({...K,name:h.target.value}),required:!0}),a.jsx("input",{placeholder:"slug-za-produkta",value:K.slug,onChange:h=>ue({...K,slug:h.target.value})}),a.jsxs("select",{value:K.categoryId,onChange:h=>ue({...K,categoryId:h.target.value}),required:!0,children:[a.jsx("option",{value:"",children:"Изберете категория"}),T.map(h=>a.jsx("option",{value:h.id,children:h.name},h.id))]}),a.jsxs("div",{className:"two-col",children:[a.jsx("input",{type:"number",step:"0.01",placeholder:"Цена",value:K.price,onChange:h=>ue({...K,price:h.target.value}),required:!0}),a.jsx("input",{type:"number",step:"0.01",placeholder:"Промо цена",value:K.salePrice,onChange:h=>ue({...K,salePrice:h.target.value})})]}),a.jsxs("div",{className:"two-col",children:[a.jsx("input",{type:"number",placeholder:"Наличност",value:K.stock,onChange:h=>ue({...K,stock:h.target.value})}),a.jsxs("select",{value:K.status,onChange:h=>ue({...K,status:h.target.value}),children:[a.jsx("option",{value:"ACTIVE",children:"Публикуван"}),a.jsx("option",{value:"DRAFT",children:"Чернова"}),a.jsx("option",{value:"ARCHIVED",children:"Архивиран"})]})]}),a.jsxs("label",{className:"checkbox",children:[a.jsx("input",{type:"checkbox",checked:K.featured,onChange:h=>ue({...K,featured:h.target.checked})})," Препоръчан продукт"]}),a.jsx("textarea",{placeholder:"Кратко описание",value:K.shortDescription,onChange:h=>ue({...K,shortDescription:h.target.value})}),a.jsx("textarea",{placeholder:"Пълно описание",rows:5,value:K.description,onChange:h=>ue({...K,description:h.target.value}),required:!0}),a.jsx("input",{placeholder:"SEO заглавие",value:K.seoTitle,onChange:h=>ue({...K,seoTitle:h.target.value})}),a.jsx("textarea",{placeholder:"SEO описание",value:K.seoDescription,onChange:h=>ue({...K,seoDescription:h.target.value})}),a.jsx("textarea",{placeholder:"Изображения - по един URL на ред",rows:4,value:K.imagesText,onChange:h=>ue({...K,imagesText:h.target.value})}),a.jsx("input",{type:"file",accept:"image/*",onChange:h=>{var re;return((re=h.target.files)==null?void 0:re[0])&&ve(h.target.files[0])}}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"btn btn-primary",disabled:_,children:ie?"Запази":"Добави"}),ie&&a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{he(null),ue(xa)},children:"Отказ"})]})]}),a.jsx("div",{className:"admin-list",children:A.map(h=>a.jsxs("article",{className:"admin-row",children:[a.jsx("img",{src:Gr(h.image),alt:h.name}),a.jsxs("div",{children:[a.jsx("h3",{children:h.name}),a.jsxs("p",{children:[h.categoryName," | ",h.price," лв. | ",h.stock," бр. | ",h.status]})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"btn btn-secondary",onClick:()=>ce(h),children:"Редактирай"}),a.jsx("button",{className:"btn btn-danger",onClick:()=>w(`/api/admin/products/${h.id}`,{method:"DELETE"}).then(b),children:"Архивирай"})]})]},h.id))})]}),v==="categories"&&a.jsxs("section",{className:"admin-grid",children:[a.jsxs("form",{className:"admin-card",onSubmit:me,children:[a.jsx("h2",{children:"Нова категория"}),a.jsx("input",{placeholder:"Име",value:ye.name,onChange:h=>Be({...ye,name:h.target.value}),required:!0}),a.jsx("input",{placeholder:"slug",value:ye.slug,onChange:h=>Be({...ye,slug:h.target.value})}),a.jsx("textarea",{placeholder:"Описание",value:ye.description,onChange:h=>Be({...ye,description:h.target.value})}),a.jsx("input",{type:"number",placeholder:"Подредба",value:ye.sortOrder,onChange:h=>Be({...ye,sortOrder:h.target.value})}),a.jsx("button",{className:"btn btn-primary",children:"Добави категория"})]}),a.jsx("div",{className:"admin-list",children:T.map(h=>a.jsx("article",{className:"admin-row text-only",children:a.jsxs("div",{children:[a.jsx("h3",{children:h.name}),a.jsxs("p",{children:["/",h.slug]})]})},h.id))})]}),v==="promotions"&&a.jsxs("section",{className:"admin-grid",children:[a.jsxs("form",{className:"admin-card",onSubmit:Ke,children:[a.jsx("h2",{children:Te?"Редактиране на промоция":"Нова промоция"}),a.jsx("input",{placeholder:"Заглавие",value:X.title,onChange:h=>se({...X,title:h.target.value}),required:!0}),a.jsx("input",{placeholder:"slug",value:X.slug,onChange:h=>se({...X,slug:h.target.value})}),a.jsx("textarea",{placeholder:"Описание",value:X.description,onChange:h=>se({...X,description:h.target.value})}),a.jsxs("div",{className:"two-col",children:[a.jsxs("select",{value:X.discountType,onChange:h=>se({...X,discountType:h.target.value}),children:[a.jsx("option",{value:"PERCENTAGE",children:"Процент"}),a.jsx("option",{value:"FIXED",children:"Фиксирана сума"})]}),a.jsx("input",{type:"number",step:"0.01",placeholder:"Отстъпка",value:X.discountValue,onChange:h=>se({...X,discountValue:h.target.value})})]}),a.jsxs("div",{className:"two-col",children:[a.jsx("input",{type:"datetime-local",value:X.startsAt,onChange:h=>se({...X,startsAt:h.target.value})}),a.jsx("input",{type:"datetime-local",value:X.endsAt,onChange:h=>se({...X,endsAt:h.target.value})})]}),a.jsx("input",{placeholder:"Текст за банер",value:X.bannerText,onChange:h=>se({...X,bannerText:h.target.value})}),a.jsxs("select",{value:X.productId,onChange:h=>se({...X,productId:h.target.value}),children:[a.jsx("option",{value:"",children:"За всички/категория"}),A.map(h=>a.jsx("option",{value:h.id,children:h.name},h.id))]}),a.jsxs("select",{value:X.categoryId,onChange:h=>se({...X,categoryId:h.target.value}),children:[a.jsx("option",{value:"",children:"Без категория"}),T.map(h=>a.jsx("option",{value:h.id,children:h.name},h.id))]}),a.jsxs("label",{className:"checkbox",children:[a.jsx("input",{type:"checkbox",checked:X.active,onChange:h=>se({...X,active:h.target.checked})})," Активна промоция"]}),a.jsx("input",{placeholder:"SEO заглавие",value:X.seoTitle,onChange:h=>se({...X,seoTitle:h.target.value})}),a.jsx("textarea",{placeholder:"SEO описание",value:X.seoDescription,onChange:h=>se({...X,seoDescription:h.target.value})}),a.jsx("button",{className:"btn btn-primary",children:Te?"Запази":"Добави промоция"})]}),a.jsx("div",{className:"admin-list",children:D.map(h=>a.jsxs("article",{className:"admin-row text-only",children:[a.jsxs("div",{children:[a.jsx("h3",{children:h.title}),a.jsxs("p",{children:[h.active?"Активна":"Неактивна"," | ",h.discountValue," ",h.discountType==="PERCENTAGE"?"%":"лв."]})]}),a.jsx("button",{className:"btn btn-secondary",onClick:()=>xe(h),children:"Редактирай"})]},h.id))})]}),v==="landing-pages"&&a.jsxs("section",{className:"admin-grid",children:[a.jsxs("form",{className:"admin-card",onSubmit:Xr,children:[a.jsx("h2",{children:ze?"Редактиране на страница":"Нова специална страница"}),a.jsx("input",{placeholder:"Заглавие",value:z.title,onChange:h=>q({...z,title:h.target.value}),required:!0}),a.jsx("input",{placeholder:"slug",value:z.slug,onChange:h=>q({...z,slug:h.target.value})}),a.jsx("input",{placeholder:"Hero заглавие",value:z.heroTitle,onChange:h=>q({...z,heroTitle:h.target.value}),required:!0}),a.jsx("textarea",{placeholder:"Hero подзаглавие",value:z.heroSubtitle,onChange:h=>q({...z,heroSubtitle:h.target.value})}),a.jsx("input",{placeholder:"Hero изображение URL",value:z.heroImage,onChange:h=>q({...z,heroImage:h.target.value})}),a.jsxs("div",{className:"two-col",children:[a.jsx("input",{placeholder:"CTA текст",value:z.ctaText,onChange:h=>q({...z,ctaText:h.target.value})}),a.jsx("input",{placeholder:"CTA линк",value:z.ctaLink,onChange:h=>q({...z,ctaLink:h.target.value})})]}),a.jsxs("select",{value:z.status,onChange:h=>q({...z,status:h.target.value}),children:[a.jsx("option",{value:"DRAFT",children:"Чернова"}),a.jsx("option",{value:"PUBLISHED",children:"Публикувана"}),a.jsx("option",{value:"ARCHIVED",children:"Архивирана"})]}),a.jsx("textarea",{rows:8,value:z.sectionsText,onChange:h=>q({...z,sectionsText:h.target.value})}),a.jsx("input",{placeholder:"SEO заглавие",value:z.seoTitle,onChange:h=>q({...z,seoTitle:h.target.value})}),a.jsx("textarea",{placeholder:"SEO описание",value:z.seoDescription,onChange:h=>q({...z,seoDescription:h.target.value})}),a.jsx("button",{className:"btn btn-primary",children:ze?"Запази":"Добави страница"})]}),a.jsx("div",{className:"admin-list",children:Z.map(h=>a.jsxs("article",{className:"admin-row text-only",children:[a.jsxs("div",{children:[a.jsx("h3",{children:h.title}),a.jsxs("p",{children:["/special/",h.slug," | ",h.status]})]}),a.jsx("button",{className:"btn btn-secondary",onClick:()=>bn(h),children:"Редактирай"})]},h.id))})]}),v==="orders"&&a.jsx("section",{className:"admin-list",children:V.map(h=>a.jsxs("article",{className:"admin-row text-only",children:[a.jsxs("div",{children:[a.jsxs("h3",{children:[h.customerName," | ",h.totalPrice," лв."]}),a.jsxs("p",{children:[h.phone," ",h.email?`| ${h.email}`:""]}),a.jsx("p",{children:h.address}),a.jsx("p",{children:h.items.map(re=>`${re.name} x${re.quantity}`).join(", ")})]}),a.jsxs("select",{value:h.status,onChange:re=>Tn(h.id,re.target.value),children:[a.jsx("option",{value:"PENDING",children:"Нова"}),a.jsx("option",{value:"CONFIRMED",children:"Потвърдена"}),a.jsx("option",{value:"SHIPPED",children:"Изпратена"}),a.jsx("option",{value:"COMPLETED",children:"Завършена"}),a.jsx("option",{value:"CANCELLED",children:"Отказана"})]})]},h.id))})]}),a.jsx("style",{children:Hc})]}):a.jsxs("div",{className:"admin-login-wrapper",children:[a.jsx(ut,{title:"Админ панел | САКИ",description:"Вход за управление на магазина САКИ.",path:"/admin",noindex:!0}),a.jsxs("form",{className:"login-box",onSubmit:oe,children:[a.jsx("h1",{children:"Админ панел"}),a.jsx("label",{children:"Имейл"}),a.jsx("input",{type:"email",value:f.email,onChange:h=>m({...f,email:h.target.value}),required:!0}),a.jsx("label",{children:"Парола"}),a.jsx("input",{type:"password",value:f.password,onChange:h=>m({...f,password:h.target.value}),required:!0}),x&&a.jsx("p",{className:"status error",children:x}),a.jsx("button",{className:"btn btn-primary",disabled:_,children:_?"Влизане...":"Влез"})]}),a.jsx("style",{children:Hc})]})}const Hc=`
  .admin-login-wrapper,
  .admin-container {
    min-height: 100vh;
    background: #f8f9fa;
    padding: 3rem 0;
  }

  .admin-login-wrapper {
    display: grid;
    place-items: center;
  }

  .login-box,
  .admin-card,
  .admin-row {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  }

  .login-box {
    width: min(420px, calc(100% - 2rem));
    padding: 2rem;
    display: grid;
    gap: 0.8rem;
  }

  .admin-header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .admin-header h1,
  .login-box h1 {
    margin: 0;
    color: var(--color-secondary);
  }

  .admin-header p {
    margin: 0.25rem 0 0;
    color: var(--color-text-light);
  }

  .admin-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .admin-tabs button {
    border: 1px solid #e5e7eb;
    background: white;
    color: var(--color-secondary);
    border-radius: 0.375rem;
    padding: 0.7rem 1rem;
    cursor: pointer;
  }

  .admin-tabs button.active {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: white;
  }

  .admin-grid {
    display: grid;
    grid-template-columns: minmax(320px, 420px) 1fr;
    gap: 1.5rem;
    align-items: start;
  }

  .admin-card {
    padding: 1.25rem;
    display: grid;
    gap: 0.75rem;
    position: sticky;
    top: 5rem;
  }

  .admin-card h2 {
    margin: 0 0 0.5rem;
    color: var(--color-secondary);
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.7rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font: inherit;
  }

  textarea {
    resize: vertical;
  }

  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  .checkbox {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: var(--color-secondary);
  }

  .checkbox input {
    width: auto;
  }

  .admin-list {
    display: grid;
    gap: 0.75rem;
  }

  .admin-row {
    padding: 1rem;
    display: grid;
    grid-template-columns: 72px 1fr auto;
    gap: 1rem;
    align-items: center;
  }

  .admin-row.text-only {
    grid-template-columns: 1fr auto;
  }

  .admin-row img {
    width: 72px;
    height: 72px;
    object-fit: cover;
    border-radius: 0.375rem;
    background: #f3f4f6;
  }

  .admin-row h3 {
    margin: 0 0 0.25rem;
    color: var(--color-secondary);
  }

  .admin-row p {
    margin: 0.15rem 0;
    color: var(--color-text-light);
    font-size: 0.9rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .btn-danger {
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #fecaca;
  }

  .status {
    background: #fffbeb;
    color: #92400e;
    border: 1px solid #fde68a;
    border-radius: 0.375rem;
    padding: 0.75rem;
    margin-bottom: 1rem;
  }

  .status.error {
    background: #fee2e2;
    color: #991b1b;
    border-color: #fecaca;
  }

  @media (max-width: 960px) {
    .admin-grid {
      grid-template-columns: 1fr;
    }

    .admin-card {
      position: static;
    }
  }

  @media (max-width: 680px) {
    .admin-row,
    .admin-row.text-only {
      grid-template-columns: 1fr;
    }

    .two-col {
      grid-template-columns: 1fr;
    }
  }
`;function Ih(){const{slug:i}=rd(),[s,u]=k.useState(null),[d,f]=k.useState(!0),[m,v]=k.useState("");return k.useEffect(()=>{async function j(){try{const x=await fetch(cn(`/api/landing-pages/${i}`));if(!x.ok)throw new Error("Страницата не е намерена.");u(await x.json())}catch(x){v(x instanceof Error?x.message:"Възникна грешка.")}finally{f(!1)}}j()},[i]),d?a.jsx("div",{className:"container",style:{padding:"3rem 0"},children:"Зареждане..."}):m||!s?a.jsxs("div",{className:"container",style:{padding:"3rem 0"},children:[a.jsx(ut,{title:"Страницата не е намерена | САКИ",description:"Тази специална страница не е налична.",path:`/special/${i??""}`,noindex:!0}),a.jsx("p",{children:m||"Страницата не е намерена."}),a.jsx(Lt,{to:"/products",className:"btn btn-primary",children:"Към продуктите"})]}):a.jsxs("div",{className:"special-page",children:[a.jsx(ut,{title:s.seoTitle||`${s.title} | САКИ`,description:s.seoDescription||s.heroSubtitle||"Специална страница от пчеларски магазин САКИ.",path:`/special/${s.slug}`,image:s.heroImage||void 0}),a.jsxs("section",{className:"special-hero",children:[s.heroImage&&a.jsx("img",{src:Gr(s.heroImage),alt:s.heroTitle}),a.jsxs("div",{className:"container special-hero-content",children:[a.jsx("h1",{children:s.heroTitle}),s.heroSubtitle&&a.jsx("p",{children:s.heroSubtitle}),s.ctaText&&s.ctaLink&&a.jsx(Lt,{to:s.ctaLink,className:"btn btn-primary",children:s.ctaText})]})]}),a.jsx("section",{className:"container special-sections",children:s.sections.map((j,x)=>a.jsxs("article",{className:"special-section",children:[j.image&&a.jsx("img",{src:Gr(j.image),alt:j.title||s.title}),a.jsxs("div",{children:[j.title&&a.jsx("h2",{children:j.title}),j.body&&a.jsx("p",{children:j.body})]})]},`${j.title}-${x}`))}),a.jsx("style",{children:`
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
      `})]})}function Dh(){return a.jsx(nh,{children:a.jsx(eh,{children:a.jsxs(Hm,{children:[a.jsx(ih,{}),a.jsx("main",{children:a.jsxs(ym,{children:[a.jsx(un,{path:"/",element:a.jsx(Eh,{})}),a.jsx(un,{path:"/products",element:a.jsx(Ph,{})}),a.jsx(un,{path:"/products/:id",element:a.jsx(_h,{})}),a.jsx(un,{path:"/special/:slug",element:a.jsx(Ih,{})}),a.jsx(un,{path:"/cart",element:a.jsx(Th,{})}),a.jsx(un,{path:"/checkout",element:a.jsx(Lh,{})}),a.jsx(un,{path:"/admin",element:a.jsx(zh,{})})]})}),a.jsx(lh,{})]})})})}pd.initialize("G-D9FP0ZFK1S");kp.createRoot(document.getElementById("root")).render(a.jsx(k.StrictMode,{children:a.jsx(Dh,{})}));

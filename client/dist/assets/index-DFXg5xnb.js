var Xf=Object.defineProperty;var Jf=(i,s,u)=>s in i?Xf(i,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[s]=u;var we=(i,s,u)=>Jf(i,typeof s!="symbol"?s+"":s,u);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))d(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function u(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(f){if(f.ep)return;f.ep=!0;const m=u(f);fetch(f.href,m)}})();var Zl={exports:{}},Fr={},ea={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc;function Zf(){if(hc)return ee;hc=1;var i=Symbol.for("react.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),g=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.iterator;function P(x){return x===null||typeof x!="object"?null:(x=E&&x[E]||x["@@iterator"],typeof x=="function"?x:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,I={};function z(x,b,Z){this.props=x,this.context=b,this.refs=I,this.updater=Z||A}z.prototype.isReactComponent={},z.prototype.setState=function(x,b){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,b,"setState")},z.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function D(){}D.prototype=z.prototype;function q(x,b,Z){this.props=x,this.context=b,this.refs=I,this.updater=Z||A}var X=q.prototype=new D;X.constructor=q,B(X,z.prototype),X.isPureReactComponent=!0;var re=Array.isArray,oe=Object.prototype.hasOwnProperty,le={current:null},me={key:!0,ref:!0,__self:!0,__source:!0};function _e(x,b,Z){var ne,ae={},se=null,fe=null;if(b!=null)for(ne in b.ref!==void 0&&(fe=b.ref),b.key!==void 0&&(se=""+b.key),b)oe.call(b,ne)&&!me.hasOwnProperty(ne)&&(ae[ne]=b[ne]);var ce=arguments.length-2;if(ce===1)ae.children=Z;else if(1<ce){for(var ye=Array(ce),Ze=0;Ze<ce;Ze++)ye[Ze]=arguments[Ze+2];ae.children=ye}if(x&&x.defaultProps)for(ne in ce=x.defaultProps,ce)ae[ne]===void 0&&(ae[ne]=ce[ne]);return{$$typeof:i,type:x,key:se,ref:fe,props:ae,_owner:le.current}}function Ue(x,b){return{$$typeof:i,type:x.type,key:b,ref:x.ref,props:x.props,_owner:x._owner}}function Te(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function dt(x){var b={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Z){return b[Z]})}var Q=/\/+/g;function te(x,b){return typeof x=="object"&&x!==null&&x.key!=null?dt(""+x.key):b.toString(36)}function Ce(x,b,Z,ne,ae){var se=typeof x;(se==="undefined"||se==="boolean")&&(x=null);var fe=!1;if(x===null)fe=!0;else switch(se){case"string":case"number":fe=!0;break;case"object":switch(x.$$typeof){case i:case s:fe=!0}}if(fe)return fe=x,ae=ae(fe),x=ne===""?"."+te(fe,0):ne,re(ae)?(Z="",x!=null&&(Z=x.replace(Q,"$&/")+"/"),Ce(ae,b,Z,"",function(Ze){return Ze})):ae!=null&&(Te(ae)&&(ae=Ue(ae,Z+(!ae.key||fe&&fe.key===ae.key?"":(""+ae.key).replace(Q,"$&/")+"/")+x)),b.push(ae)),1;if(fe=0,ne=ne===""?".":ne+":",re(x))for(var ce=0;ce<x.length;ce++){se=x[ce];var ye=ne+te(se,ce);fe+=Ce(se,b,Z,ye,ae)}else if(ye=P(x),typeof ye=="function")for(x=ye.call(x),ce=0;!(se=x.next()).done;)se=se.value,ye=ne+te(se,ce++),fe+=Ce(se,b,Z,ye,ae);else if(se==="object")throw b=String(x),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return fe}function Ee(x,b,Z){if(x==null)return x;var ne=[],ae=0;return Ce(x,ne,"","",function(se){return b.call(Z,se,ae++)}),ne}function Oe(x){if(x._status===-1){var b=x._result;b=b(),b.then(function(Z){(x._status===0||x._status===-1)&&(x._status=1,x._result=Z)},function(Z){(x._status===0||x._status===-1)&&(x._status=2,x._result=Z)}),x._status===-1&&(x._status=0,x._result=b)}if(x._status===1)return x._result.default;throw x._result}var ve={current:null},O={transition:null},Y={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:O,ReactCurrentOwner:le};function $(){throw Error("act(...) is not supported in production builds of React.")}return ee.Children={map:Ee,forEach:function(x,b,Z){Ee(x,function(){b.apply(this,arguments)},Z)},count:function(x){var b=0;return Ee(x,function(){b++}),b},toArray:function(x){return Ee(x,function(b){return b})||[]},only:function(x){if(!Te(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ee.Component=z,ee.Fragment=u,ee.Profiler=f,ee.PureComponent=q,ee.StrictMode=d,ee.Suspense=y,ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,ee.act=$,ee.cloneElement=function(x,b,Z){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var ne=B({},x.props),ae=x.key,se=x.ref,fe=x._owner;if(b!=null){if(b.ref!==void 0&&(se=b.ref,fe=le.current),b.key!==void 0&&(ae=""+b.key),x.type&&x.type.defaultProps)var ce=x.type.defaultProps;for(ye in b)oe.call(b,ye)&&!me.hasOwnProperty(ye)&&(ne[ye]=b[ye]===void 0&&ce!==void 0?ce[ye]:b[ye])}var ye=arguments.length-2;if(ye===1)ne.children=Z;else if(1<ye){ce=Array(ye);for(var Ze=0;Ze<ye;Ze++)ce[Ze]=arguments[Ze+2];ne.children=ce}return{$$typeof:i,type:x.type,key:ae,ref:se,props:ne,_owner:fe}},ee.createContext=function(x){return x={$$typeof:g,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:m,_context:x},x.Consumer=x},ee.createElement=_e,ee.createFactory=function(x){var b=_e.bind(null,x);return b.type=x,b},ee.createRef=function(){return{current:null}},ee.forwardRef=function(x){return{$$typeof:S,render:x}},ee.isValidElement=Te,ee.lazy=function(x){return{$$typeof:_,_payload:{_status:-1,_result:x},_init:Oe}},ee.memo=function(x,b){return{$$typeof:j,type:x,compare:b===void 0?null:b}},ee.startTransition=function(x){var b=O.transition;O.transition={};try{x()}finally{O.transition=b}},ee.unstable_act=$,ee.useCallback=function(x,b){return ve.current.useCallback(x,b)},ee.useContext=function(x){return ve.current.useContext(x)},ee.useDebugValue=function(){},ee.useDeferredValue=function(x){return ve.current.useDeferredValue(x)},ee.useEffect=function(x,b){return ve.current.useEffect(x,b)},ee.useId=function(){return ve.current.useId()},ee.useImperativeHandle=function(x,b,Z){return ve.current.useImperativeHandle(x,b,Z)},ee.useInsertionEffect=function(x,b){return ve.current.useInsertionEffect(x,b)},ee.useLayoutEffect=function(x,b){return ve.current.useLayoutEffect(x,b)},ee.useMemo=function(x,b){return ve.current.useMemo(x,b)},ee.useReducer=function(x,b,Z){return ve.current.useReducer(x,b,Z)},ee.useRef=function(x){return ve.current.useRef(x)},ee.useState=function(x){return ve.current.useState(x)},ee.useSyncExternalStore=function(x,b,Z){return ve.current.useSyncExternalStore(x,b,Z)},ee.useTransition=function(){return ve.current.useTransition()},ee.version="18.3.1",ee}var gc;function da(){return gc||(gc=1,ea.exports=Zf()),ea.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vc;function ep(){if(vc)return Fr;vc=1;var i=da(),s=Symbol.for("react.element"),u=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,f=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function g(S,y,j){var _,E={},P=null,A=null;j!==void 0&&(P=""+j),y.key!==void 0&&(P=""+y.key),y.ref!==void 0&&(A=y.ref);for(_ in y)d.call(y,_)&&!m.hasOwnProperty(_)&&(E[_]=y[_]);if(S&&S.defaultProps)for(_ in y=S.defaultProps,y)E[_]===void 0&&(E[_]=y[_]);return{$$typeof:s,type:S,key:P,ref:A,props:E,_owner:f.current}}return Fr.Fragment=u,Fr.jsx=g,Fr.jsxs=g,Fr}var yc;function tp(){return yc||(yc=1,Zl.exports=ep()),Zl.exports}var a=tp(),w=da(),Jo={},ta={exports:{}},Je={},na={exports:{}},ra={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc;function np(){return xc||(xc=1,(function(i){function s(O,Y){var $=O.length;O.push(Y);e:for(;0<$;){var x=$-1>>>1,b=O[x];if(0<f(b,Y))O[x]=Y,O[$]=b,$=x;else break e}}function u(O){return O.length===0?null:O[0]}function d(O){if(O.length===0)return null;var Y=O[0],$=O.pop();if($!==Y){O[0]=$;e:for(var x=0,b=O.length,Z=b>>>1;x<Z;){var ne=2*(x+1)-1,ae=O[ne],se=ne+1,fe=O[se];if(0>f(ae,$))se<b&&0>f(fe,ae)?(O[x]=fe,O[se]=$,x=se):(O[x]=ae,O[ne]=$,x=ne);else if(se<b&&0>f(fe,$))O[x]=fe,O[se]=$,x=se;else break e}}return Y}function f(O,Y){var $=O.sortIndex-Y.sortIndex;return $!==0?$:O.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var g=Date,S=g.now();i.unstable_now=function(){return g.now()-S}}var y=[],j=[],_=1,E=null,P=3,A=!1,B=!1,I=!1,z=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(O){for(var Y=u(j);Y!==null;){if(Y.callback===null)d(j);else if(Y.startTime<=O)d(j),Y.sortIndex=Y.expirationTime,s(y,Y);else break;Y=u(j)}}function re(O){if(I=!1,X(O),!B)if(u(y)!==null)B=!0,Oe(oe);else{var Y=u(j);Y!==null&&ve(re,Y.startTime-O)}}function oe(O,Y){B=!1,I&&(I=!1,D(_e),_e=-1),A=!0;var $=P;try{for(X(Y),E=u(y);E!==null&&(!(E.expirationTime>Y)||O&&!dt());){var x=E.callback;if(typeof x=="function"){E.callback=null,P=E.priorityLevel;var b=x(E.expirationTime<=Y);Y=i.unstable_now(),typeof b=="function"?E.callback=b:E===u(y)&&d(y),X(Y)}else d(y);E=u(y)}if(E!==null)var Z=!0;else{var ne=u(j);ne!==null&&ve(re,ne.startTime-Y),Z=!1}return Z}finally{E=null,P=$,A=!1}}var le=!1,me=null,_e=-1,Ue=5,Te=-1;function dt(){return!(i.unstable_now()-Te<Ue)}function Q(){if(me!==null){var O=i.unstable_now();Te=O;var Y=!0;try{Y=me(!0,O)}finally{Y?te():(le=!1,me=null)}}else le=!1}var te;if(typeof q=="function")te=function(){q(Q)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,Ee=Ce.port2;Ce.port1.onmessage=Q,te=function(){Ee.postMessage(null)}}else te=function(){z(Q,0)};function Oe(O){me=O,le||(le=!0,te())}function ve(O,Y){_e=z(function(){O(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(O){O.callback=null},i.unstable_continueExecution=function(){B||A||(B=!0,Oe(oe))},i.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<O?Math.floor(1e3/O):5},i.unstable_getCurrentPriorityLevel=function(){return P},i.unstable_getFirstCallbackNode=function(){return u(y)},i.unstable_next=function(O){switch(P){case 1:case 2:case 3:var Y=3;break;default:Y=P}var $=P;P=Y;try{return O()}finally{P=$}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=P;P=O;try{return Y()}finally{P=$}},i.unstable_scheduleCallback=function(O,Y,$){var x=i.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?x+$:x):$=x,O){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=$+b,O={id:_++,callback:Y,priorityLevel:O,startTime:$,expirationTime:b,sortIndex:-1},$>x?(O.sortIndex=$,s(j,O),u(y)===null&&O===u(j)&&(I?(D(_e),_e=-1):I=!0,ve(re,$-x))):(O.sortIndex=b,s(y,O),B||A||(B=!0,Oe(oe))),O},i.unstable_shouldYield=dt,i.unstable_wrapCallback=function(O){var Y=P;return function(){var $=P;P=Y;try{return O.apply(this,arguments)}finally{P=$}}}})(ra)),ra}var wc;function rp(){return wc||(wc=1,na.exports=np()),na.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc;function op(){if(kc)return Je;kc=1;var i=da(),s=rp();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,f={};function m(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(f[e]=t,e=0;e<t.length;e++)d.add(t[e])}var S=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},E={};function P(e){return y.call(E,e)?!0:y.call(_,e)?!1:j.test(e)?E[e]=!0:(_[e]=!0,!1)}function A(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B(e,t,n,r){if(t===null||typeof t>"u"||A(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function I(e,t,n,r,o,l,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=c}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];z[t]=new I(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){z[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){z[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){z[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){z[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(D,q);z[t]=new I(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(D,q);z[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(D,q);z[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){z[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),z.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){z[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,t,n,r){var o=z.hasOwnProperty(t)?z[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B(t,n,o,r)&&(n=null),r||o===null?P(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var re=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),le=Symbol.for("react.portal"),me=Symbol.for("react.fragment"),_e=Symbol.for("react.strict_mode"),Ue=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),dt=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),Ee=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),O=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,x;function b(e){if(x===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var Z=!1;function ne(e,t){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(N){var r=N}Reflect.construct(e,[],t)}else{try{t.call()}catch(N){r=N}e.call(t.prototype)}else{try{throw Error()}catch(N){r=N}e()}}catch(N){if(N&&r&&typeof N.stack=="string"){for(var o=N.stack.split(`
`),l=r.stack.split(`
`),c=o.length-1,p=l.length-1;1<=c&&0<=p&&o[c]!==l[p];)p--;for(;1<=c&&0<=p;c--,p--)if(o[c]!==l[p]){if(c!==1||p!==1)do if(c--,p--,0>p||o[c]!==l[p]){var h=`
`+o[c].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=c&&0<=p);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?b(e):""}function ae(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=ne(e.type,!1),e;case 11:return e=ne(e.type.render,!1),e;case 1:return e=ne(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case me:return"Fragment";case le:return"Portal";case Ue:return"Profiler";case _e:return"StrictMode";case te:return"Suspense";case Ce:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dt:return(e.displayName||"Context")+".Consumer";case Te:return(e._context.displayName||"Context")+".Provider";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ee:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function fe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(t);case 8:return t===_e?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ze(e){var t=ye(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(c){r=""+c,l.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $r(e){e._valueTracker||(e._valueTracker=Ze(e))}function ka(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ye(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function li(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ce(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ja(e,t){t=t.checked,t!=null&&X(e,"checked",t,!1)}function ai(e,t){ja(e,t);var n=ce(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?si(e,t.type,n):t.hasOwnProperty("defaultValue")&&si(e,t.type,ce(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ca(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function si(e,t,n){(t!=="number"||Br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yn=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ce(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ui(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ea(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(Yn(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ce(n)}}function Na(e,t){var n=ce(t.value),r=ce(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _a(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ci(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hr,Ra=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hr=Hr||document.createElement("div"),Hr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ed=["Webkit","ms","Moz","O"];Object.keys(Jn).forEach(function(e){ed.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jn[t]=Jn[e]})});function ba(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jn.hasOwnProperty(e)&&Jn[e]?(""+t).trim():t+"px"}function Ta(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ba(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var td=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function di(e,t){if(t){if(td[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function fi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=null;function mi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,jn=null,Cn=null;function za(e){if(e=wr(e)){if(typeof hi!="function")throw Error(u(280));var t=e.stateNode;t&&(t=po(t),hi(e.stateNode,e.type,t))}}function La(e){jn?Cn?Cn.push(e):Cn=[e]:jn=e}function Ia(){if(jn){var e=jn,t=Cn;if(Cn=jn=null,za(e),t)for(e=0;e<t.length;e++)za(t[e])}}function Fa(e,t){return e(t)}function Da(){}var gi=!1;function Oa(e,t,n){if(gi)return e(t,n);gi=!0;try{return Fa(e,t,n)}finally{gi=!1,(jn!==null||Cn!==null)&&(Da(),Ia())}}function Zn(e,t){var n=e.stateNode;if(n===null)return null;var r=po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var vi=!1;if(S)try{var er={};Object.defineProperty(er,"passive",{get:function(){vi=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{vi=!1}function nd(e,t,n,r,o,l,c,p,h){var N=Array.prototype.slice.call(arguments,3);try{t.apply(n,N)}catch(T){this.onError(T)}}var tr=!1,Wr=null,Vr=!1,yi=null,rd={onError:function(e){tr=!0,Wr=e}};function od(e,t,n,r,o,l,c,p,h){tr=!1,Wr=null,nd.apply(rd,arguments)}function id(e,t,n,r,o,l,c,p,h){if(od.apply(this,arguments),tr){if(tr){var N=Wr;tr=!1,Wr=null}else throw Error(u(198));Vr||(Vr=!0,yi=N)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ma(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Aa(e){if(on(e)!==e)throw Error(u(188))}function ld(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Aa(o),e;if(l===r)return Aa(o),t;l=l.sibling}throw Error(u(188))}if(n.return!==r.return)n=o,r=l;else{for(var c=!1,p=o.child;p;){if(p===n){c=!0,n=o,r=l;break}if(p===r){c=!0,r=o,n=l;break}p=p.sibling}if(!c){for(p=l.child;p;){if(p===n){c=!0,n=l,r=o;break}if(p===r){c=!0,r=l,n=o;break}p=p.sibling}if(!c)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function Ua(e){return e=ld(e),e!==null?$a(e):null}function $a(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$a(e);if(t!==null)return t;e=e.sibling}return null}var Ba=s.unstable_scheduleCallback,Ha=s.unstable_cancelCallback,ad=s.unstable_shouldYield,sd=s.unstable_requestPaint,Pe=s.unstable_now,ud=s.unstable_getCurrentPriorityLevel,xi=s.unstable_ImmediatePriority,Wa=s.unstable_UserBlockingPriority,qr=s.unstable_NormalPriority,cd=s.unstable_LowPriority,Va=s.unstable_IdlePriority,Qr=null,jt=null;function dd(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Qr,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:md,fd=Math.log,pd=Math.LN2;function md(e){return e>>>=0,e===0?32:31-(fd(e)/pd|0)|0}var Kr=64,Gr=4194304;function nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,c=n&268435455;if(c!==0){var p=c&~o;p!==0?r=nr(p):(l&=c,l!==0&&(r=nr(l)))}else c=n&~o,c!==0?r=nr(c):l!==0&&(r=nr(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),o=1<<n,r|=e[n],t&=~o;return r}function hd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var c=31-ft(l),p=1<<c,h=o[c];h===-1?((p&n)===0||(p&r)!==0)&&(o[c]=hd(p,t)):h<=t&&(e.expiredLanes|=p),l&=~p}}function wi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qa(){var e=Kr;return Kr<<=1,(Kr&4194240)===0&&(Kr=64),e}function ki(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function vd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ft(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Si(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var de=0;function Qa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ka,ji,Ga,Ya,Xa,Ci=!1,Xr=[],At=null,Ut=null,$t=null,or=new Map,ir=new Map,Bt=[],yd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ja(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ir.delete(t.pointerId)}}function lr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=wr(t),t!==null&&ji(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function xd(e,t,n,r,o){switch(t){case"focusin":return At=lr(At,e,t,n,r,o),!0;case"dragenter":return Ut=lr(Ut,e,t,n,r,o),!0;case"mouseover":return $t=lr($t,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return or.set(l,lr(or.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,ir.set(l,lr(ir.get(l)||null,e,t,n,r,o)),!0}return!1}function Za(e){var t=ln(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=Ma(n),t!==null){e.blockedOn=t,Xa(e.priority,function(){Ga(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ni(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pi=r,n.target.dispatchEvent(r),pi=null}else return t=wr(n),t!==null&&ji(t),e.blockedOn=n,!1;t.shift()}return!0}function es(e,t,n){Jr(e)&&n.delete(t)}function wd(){Ci=!1,At!==null&&Jr(At)&&(At=null),Ut!==null&&Jr(Ut)&&(Ut=null),$t!==null&&Jr($t)&&($t=null),or.forEach(es),ir.forEach(es)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,Ci||(Ci=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,wd)))}function sr(e){function t(o){return ar(o,e)}if(0<Xr.length){ar(Xr[0],e);for(var n=1;n<Xr.length;n++){var r=Xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&ar(At,e),Ut!==null&&ar(Ut,e),$t!==null&&ar($t,e),or.forEach(t),ir.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)Za(n),n.blockedOn===null&&Bt.shift()}var En=re.ReactCurrentBatchConfig,Zr=!0;function kd(e,t,n,r){var o=de,l=En.transition;En.transition=null;try{de=1,Ei(e,t,n,r)}finally{de=o,En.transition=l}}function Sd(e,t,n,r){var o=de,l=En.transition;En.transition=null;try{de=4,Ei(e,t,n,r)}finally{de=o,En.transition=l}}function Ei(e,t,n,r){if(Zr){var o=Ni(e,t,n,r);if(o===null)Hi(e,t,r,eo,n),Ja(e,r);else if(xd(o,e,t,n,r))r.stopPropagation();else if(Ja(e,r),t&4&&-1<yd.indexOf(e)){for(;o!==null;){var l=wr(o);if(l!==null&&Ka(l),l=Ni(e,t,n,r),l===null&&Hi(e,t,r,eo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Hi(e,t,r,null,n)}}var eo=null;function Ni(e,t,n,r){if(eo=null,e=mi(r),e=ln(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ma(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return eo=e,null}function ts(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ud()){case xi:return 1;case Wa:return 4;case qr:case cd:return 16;case Va:return 536870912;default:return 16}default:return 16}}var Ht=null,_i=null,to=null;function ns(){if(to)return to;var e,t=_i,n=t.length,r,o="value"in Ht?Ht.value:Ht.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var c=n-e;for(r=1;r<=c&&t[n-r]===o[l-r];r++);return to=o.slice(e,1<r?1-r:void 0)}function no(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ro(){return!0}function rs(){return!1}function et(e){function t(n,r,o,l,c){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(l):l[p]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ro:rs,this.isPropagationStopped=rs,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pi=et(Nn),ur=$({},Nn,{view:0,detail:0}),jd=et(ur),Ri,bi,cr,oo=$({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(Ri=e.screenX-cr.screenX,bi=e.screenY-cr.screenY):bi=Ri=0,cr=e),Ri)},movementY:function(e){return"movementY"in e?e.movementY:bi}}),os=et(oo),Cd=$({},oo,{dataTransfer:0}),Ed=et(Cd),Nd=$({},ur,{relatedTarget:0}),Ti=et(Nd),_d=$({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),Pd=et(_d),Rd=$({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bd=et(Rd),Td=$({},Nn,{data:0}),is=et(Td),zd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ld={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Id={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Id[e])?!!t[e]:!1}function zi(){return Fd}var Dd=$({},ur,{key:function(e){if(e.key){var t=zd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=no(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ld[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zi,charCode:function(e){return e.type==="keypress"?no(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?no(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Od=et(Dd),Md=$({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ls=et(Md),Ad=$({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zi}),Ud=et(Ad),$d=$({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bd=et($d),Hd=$({},oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wd=et(Hd),Vd=[9,13,27,32],Li=S&&"CompositionEvent"in window,dr=null;S&&"documentMode"in document&&(dr=document.documentMode);var qd=S&&"TextEvent"in window&&!dr,as=S&&(!Li||dr&&8<dr&&11>=dr),ss=" ",us=!1;function cs(e,t){switch(e){case"keyup":return Vd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ds(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function Qd(e,t){switch(e){case"compositionend":return ds(t);case"keypress":return t.which!==32?null:(us=!0,ss);case"textInput":return e=t.data,e===ss&&us?null:e;default:return null}}function Kd(e,t){if(_n)return e==="compositionend"||!Li&&cs(e,t)?(e=ns(),to=_i=Ht=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return as&&t.locale!=="ko"?null:t.data;default:return null}}var Gd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gd[e.type]:t==="textarea"}function ps(e,t,n,r){La(r),t=uo(t,"onChange"),0<t.length&&(n=new Pi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function Yd(e){Ts(e,0)}function io(e){var t=zn(e);if(ka(t))return e}function Xd(e,t){if(e==="change")return t}var ms=!1;if(S){var Ii;if(S){var Fi="oninput"in document;if(!Fi){var hs=document.createElement("div");hs.setAttribute("oninput","return;"),Fi=typeof hs.oninput=="function"}Ii=Fi}else Ii=!1;ms=Ii&&(!document.documentMode||9<document.documentMode)}function gs(){fr&&(fr.detachEvent("onpropertychange",vs),pr=fr=null)}function vs(e){if(e.propertyName==="value"&&io(pr)){var t=[];ps(t,pr,e,mi(e)),Oa(Yd,t)}}function Jd(e,t,n){e==="focusin"?(gs(),fr=t,pr=n,fr.attachEvent("onpropertychange",vs)):e==="focusout"&&gs()}function Zd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return io(pr)}function ef(e,t){if(e==="click")return io(t)}function tf(e,t){if(e==="input"||e==="change")return io(t)}function nf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:nf;function mr(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!y.call(t,o)||!pt(e[o],t[o]))return!1}return!0}function ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xs(e,t){var n=ys(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ys(n)}}function ws(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ws(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ks(){for(var e=window,t=Br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function Di(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rf(e){var t=ks(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ws(n.ownerDocument.documentElement,n)){if(r!==null&&Di(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=xs(n,l);var c=xs(n,r);o&&c&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var of=S&&"documentMode"in document&&11>=document.documentMode,Pn=null,Oi=null,hr=null,Mi=!1;function Ss(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mi||Pn==null||Pn!==Br(r)||(r=Pn,"selectionStart"in r&&Di(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hr&&mr(hr,r)||(hr=r,r=uo(Oi,"onSelect"),0<r.length&&(t=new Pi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rn={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Ai={},js={};S&&(js=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function ao(e){if(Ai[e])return Ai[e];if(!Rn[e])return e;var t=Rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in js)return Ai[e]=t[n];return e}var Cs=ao("animationend"),Es=ao("animationiteration"),Ns=ao("animationstart"),_s=ao("transitionend"),Ps=new Map,Rs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){Ps.set(e,t),m(t,[e])}for(var Ui=0;Ui<Rs.length;Ui++){var $i=Rs[Ui],lf=$i.toLowerCase(),af=$i[0].toUpperCase()+$i.slice(1);Wt(lf,"on"+af)}Wt(Cs,"onAnimationEnd"),Wt(Es,"onAnimationIteration"),Wt(Ns,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(_s,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function bs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,id(r,t,void 0,e),e.currentTarget=null}function Ts(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var c=r.length-1;0<=c;c--){var p=r[c],h=p.instance,N=p.currentTarget;if(p=p.listener,h!==l&&o.isPropagationStopped())break e;bs(o,p,N),l=h}else for(c=0;c<r.length;c++){if(p=r[c],h=p.instance,N=p.currentTarget,p=p.listener,h!==l&&o.isPropagationStopped())break e;bs(o,p,N),l=h}}}if(Vr)throw e=yi,Vr=!1,yi=null,e}function he(e,t){var n=t[Gi];n===void 0&&(n=t[Gi]=new Set);var r=e+"__bubble";n.has(r)||(zs(t,e,2,!1),n.add(r))}function Bi(e,t,n){var r=0;t&&(r|=4),zs(n,e,r,t)}var so="_reactListening"+Math.random().toString(36).slice(2);function vr(e){if(!e[so]){e[so]=!0,d.forEach(function(n){n!=="selectionchange"&&(sf.has(n)||Bi(n,!1,e),Bi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[so]||(t[so]=!0,Bi("selectionchange",!1,t))}}function zs(e,t,n,r){switch(ts(t)){case 1:var o=kd;break;case 4:o=Sd;break;default:o=Ei}n=o.bind(null,t,n,e),o=void 0,!vi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Hi(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var p=r.stateNode.containerInfo;if(p===o||p.nodeType===8&&p.parentNode===o)break;if(c===4)for(c=r.return;c!==null;){var h=c.tag;if((h===3||h===4)&&(h=c.stateNode.containerInfo,h===o||h.nodeType===8&&h.parentNode===o))return;c=c.return}for(;p!==null;){if(c=ln(p),c===null)return;if(h=c.tag,h===5||h===6){r=l=c;continue e}p=p.parentNode}}r=r.return}Oa(function(){var N=l,T=mi(n),L=[];e:{var R=Ps.get(e);if(R!==void 0){var M=Pi,H=e;switch(e){case"keypress":if(no(n)===0)break e;case"keydown":case"keyup":M=Od;break;case"focusin":H="focus",M=Ti;break;case"focusout":H="blur",M=Ti;break;case"beforeblur":case"afterblur":M=Ti;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Ed;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Ud;break;case Cs:case Es:case Ns:M=Pd;break;case _s:M=Bd;break;case"scroll":M=jd;break;case"wheel":M=Wd;break;case"copy":case"cut":case"paste":M=bd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=ls}var W=(t&4)!==0,Re=!W&&e==="scroll",k=W?R!==null?R+"Capture":null:R;W=[];for(var v=N,C;v!==null;){C=v;var F=C.stateNode;if(C.tag===5&&F!==null&&(C=F,k!==null&&(F=Zn(v,k),F!=null&&W.push(yr(v,F,C)))),Re)break;v=v.return}0<W.length&&(R=new M(R,H,null,n,T),L.push({event:R,listeners:W}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",R&&n!==pi&&(H=n.relatedTarget||n.fromElement)&&(ln(H)||H[Rt]))break e;if((M||R)&&(R=T.window===T?T:(R=T.ownerDocument)?R.defaultView||R.parentWindow:window,M?(H=n.relatedTarget||n.toElement,M=N,H=H?ln(H):null,H!==null&&(Re=on(H),H!==Re||H.tag!==5&&H.tag!==6)&&(H=null)):(M=null,H=N),M!==H)){if(W=os,F="onMouseLeave",k="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(W=ls,F="onPointerLeave",k="onPointerEnter",v="pointer"),Re=M==null?R:zn(M),C=H==null?R:zn(H),R=new W(F,v+"leave",M,n,T),R.target=Re,R.relatedTarget=C,F=null,ln(T)===N&&(W=new W(k,v+"enter",H,n,T),W.target=C,W.relatedTarget=Re,F=W),Re=F,M&&H)t:{for(W=M,k=H,v=0,C=W;C;C=bn(C))v++;for(C=0,F=k;F;F=bn(F))C++;for(;0<v-C;)W=bn(W),v--;for(;0<C-v;)k=bn(k),C--;for(;v--;){if(W===k||k!==null&&W===k.alternate)break t;W=bn(W),k=bn(k)}W=null}else W=null;M!==null&&Ls(L,R,M,W,!1),H!==null&&Re!==null&&Ls(L,Re,H,W,!0)}}e:{if(R=N?zn(N):window,M=R.nodeName&&R.nodeName.toLowerCase(),M==="select"||M==="input"&&R.type==="file")var V=Xd;else if(fs(R))if(ms)V=tf;else{V=Zd;var K=Jd}else(M=R.nodeName)&&M.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(V=ef);if(V&&(V=V(e,N))){ps(L,V,n,T);break e}K&&K(e,R,N),e==="focusout"&&(K=R._wrapperState)&&K.controlled&&R.type==="number"&&si(R,"number",R.value)}switch(K=N?zn(N):window,e){case"focusin":(fs(K)||K.contentEditable==="true")&&(Pn=K,Oi=N,hr=null);break;case"focusout":hr=Oi=Pn=null;break;case"mousedown":Mi=!0;break;case"contextmenu":case"mouseup":case"dragend":Mi=!1,Ss(L,n,T);break;case"selectionchange":if(of)break;case"keydown":case"keyup":Ss(L,n,T)}var G;if(Li)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else _n?cs(e,n)&&(J="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(J="onCompositionStart");J&&(as&&n.locale!=="ko"&&(_n||J!=="onCompositionStart"?J==="onCompositionEnd"&&_n&&(G=ns()):(Ht=T,_i="value"in Ht?Ht.value:Ht.textContent,_n=!0)),K=uo(N,J),0<K.length&&(J=new is(J,e,null,n,T),L.push({event:J,listeners:K}),G?J.data=G:(G=ds(n),G!==null&&(J.data=G)))),(G=qd?Qd(e,n):Kd(e,n))&&(N=uo(N,"onBeforeInput"),0<N.length&&(T=new is("onBeforeInput","beforeinput",null,n,T),L.push({event:T,listeners:N}),T.data=G))}Ts(L,t)})}function yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function uo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Zn(e,n),l!=null&&r.unshift(yr(e,l,o)),l=Zn(e,t),l!=null&&r.push(yr(e,l,o))),e=e.return}return r}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ls(e,t,n,r,o){for(var l=t._reactName,c=[];n!==null&&n!==r;){var p=n,h=p.alternate,N=p.stateNode;if(h!==null&&h===r)break;p.tag===5&&N!==null&&(p=N,o?(h=Zn(n,l),h!=null&&c.unshift(yr(n,h,p))):o||(h=Zn(n,l),h!=null&&c.push(yr(n,h,p)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var uf=/\r\n?/g,cf=/\u0000|\uFFFD/g;function Is(e){return(typeof e=="string"?e:""+e).replace(uf,`
`).replace(cf,"")}function co(e,t,n){if(t=Is(t),Is(e)!==t&&n)throw Error(u(425))}function fo(){}var Wi=null,Vi=null;function qi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qi=typeof setTimeout=="function"?setTimeout:void 0,df=typeof clearTimeout=="function"?clearTimeout:void 0,Fs=typeof Promise=="function"?Promise:void 0,ff=typeof queueMicrotask=="function"?queueMicrotask:typeof Fs<"u"?function(e){return Fs.resolve(null).then(e).catch(pf)}:Qi;function pf(e){setTimeout(function(){throw e})}function Ki(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);sr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ds(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tn=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Tn,xr="__reactProps$"+Tn,Rt="__reactContainer$"+Tn,Gi="__reactEvents$"+Tn,mf="__reactListeners$"+Tn,hf="__reactHandles$"+Tn;function ln(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ds(e);e!==null;){if(n=e[Ct])return n;e=Ds(e)}return t}e=n,n=e.parentNode}return null}function wr(e){return e=e[Ct]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function po(e){return e[xr]||null}var Yi=[],Ln=-1;function qt(e){return{current:e}}function ge(e){0>Ln||(e.current=Yi[Ln],Yi[Ln]=null,Ln--)}function pe(e,t){Ln++,Yi[Ln]=e.current,e.current=t}var Qt={},$e=qt(Qt),Qe=qt(!1),an=Qt;function In(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ke(e){return e=e.childContextTypes,e!=null}function mo(){ge(Qe),ge($e)}function Os(e,t,n){if($e.current!==Qt)throw Error(u(168));pe($e,t),pe(Qe,n)}function Ms(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(u(108,fe(e)||"Unknown",o));return $({},n,r)}function ho(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,an=$e.current,pe($e,e),pe(Qe,Qe.current),!0}function As(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=Ms(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,ge(Qe),ge($e),pe($e,e)):ge(Qe),pe(Qe,n)}var bt=null,go=!1,Xi=!1;function Us(e){bt===null?bt=[e]:bt.push(e)}function gf(e){go=!0,Us(e)}function Kt(){if(!Xi&&bt!==null){Xi=!0;var e=0,t=de;try{var n=bt;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,go=!1}catch(o){throw bt!==null&&(bt=bt.slice(e+1)),Ba(xi,Kt),o}finally{de=t,Xi=!1}}return null}var Fn=[],Dn=0,vo=null,yo=0,ot=[],it=0,sn=null,Tt=1,zt="";function un(e,t){Fn[Dn++]=yo,Fn[Dn++]=vo,vo=e,yo=t}function $s(e,t,n){ot[it++]=Tt,ot[it++]=zt,ot[it++]=sn,sn=e;var r=Tt;e=zt;var o=32-ft(r)-1;r&=~(1<<o),n+=1;var l=32-ft(t)+o;if(30<l){var c=o-o%5;l=(r&(1<<c)-1).toString(32),r>>=c,o-=c,Tt=1<<32-ft(t)+o|n<<o|r,zt=l+e}else Tt=1<<l|n<<o|r,zt=e}function Ji(e){e.return!==null&&(un(e,1),$s(e,1,0))}function Zi(e){for(;e===vo;)vo=Fn[--Dn],Fn[Dn]=null,yo=Fn[--Dn],Fn[Dn]=null;for(;e===sn;)sn=ot[--it],ot[it]=null,zt=ot[--it],ot[it]=null,Tt=ot[--it],ot[it]=null}var tt=null,nt=null,xe=!1,mt=null;function Bs(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,nt=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sn!==null?{id:Tt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,nt=null,!0):!1;default:return!1}}function el(e){return(e.mode&1)!==0&&(e.flags&128)===0}function tl(e){if(xe){var t=nt;if(t){var n=t;if(!Hs(e,t)){if(el(e))throw Error(u(418));t=Vt(n.nextSibling);var r=tt;t&&Hs(e,t)?Bs(r,n):(e.flags=e.flags&-4097|2,xe=!1,tt=e)}}else{if(el(e))throw Error(u(418));e.flags=e.flags&-4097|2,xe=!1,tt=e}}}function Ws(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function xo(e){if(e!==tt)return!1;if(!xe)return Ws(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qi(e.type,e.memoizedProps)),t&&(t=nt)){if(el(e))throw Vs(),Error(u(418));for(;t;)Bs(e,t),t=Vt(t.nextSibling)}if(Ws(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=tt?Vt(e.stateNode.nextSibling):null;return!0}function Vs(){for(var e=nt;e;)e=Vt(e.nextSibling)}function On(){nt=tt=null,xe=!1}function nl(e){mt===null?mt=[e]:mt.push(e)}var vf=re.ReactCurrentBatchConfig;function kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(c){var p=o.refs;c===null?delete p[l]:p[l]=c},t._stringRef=l,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function wo(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qs(e){var t=e._init;return t(e._payload)}function Qs(e){function t(k,v){if(e){var C=k.deletions;C===null?(k.deletions=[v],k.flags|=16):C.push(v)}}function n(k,v){if(!e)return null;for(;v!==null;)t(k,v),v=v.sibling;return null}function r(k,v){for(k=new Map;v!==null;)v.key!==null?k.set(v.key,v):k.set(v.index,v),v=v.sibling;return k}function o(k,v){return k=nn(k,v),k.index=0,k.sibling=null,k}function l(k,v,C){return k.index=C,e?(C=k.alternate,C!==null?(C=C.index,C<v?(k.flags|=2,v):C):(k.flags|=2,v)):(k.flags|=1048576,v)}function c(k){return e&&k.alternate===null&&(k.flags|=2),k}function p(k,v,C,F){return v===null||v.tag!==6?(v=Ql(C,k.mode,F),v.return=k,v):(v=o(v,C),v.return=k,v)}function h(k,v,C,F){var V=C.type;return V===me?T(k,v,C.props.children,F,C.key):v!==null&&(v.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Oe&&qs(V)===v.type)?(F=o(v,C.props),F.ref=kr(k,v,C),F.return=k,F):(F=Wo(C.type,C.key,C.props,null,k.mode,F),F.ref=kr(k,v,C),F.return=k,F)}function N(k,v,C,F){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=Kl(C,k.mode,F),v.return=k,v):(v=o(v,C.children||[]),v.return=k,v)}function T(k,v,C,F,V){return v===null||v.tag!==7?(v=vn(C,k.mode,F,V),v.return=k,v):(v=o(v,C),v.return=k,v)}function L(k,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ql(""+v,k.mode,C),v.return=k,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oe:return C=Wo(v.type,v.key,v.props,null,k.mode,C),C.ref=kr(k,null,v),C.return=k,C;case le:return v=Kl(v,k.mode,C),v.return=k,v;case Oe:var F=v._init;return L(k,F(v._payload),C)}if(Yn(v)||Y(v))return v=vn(v,k.mode,C,null),v.return=k,v;wo(k,v)}return null}function R(k,v,C,F){var V=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return V!==null?null:p(k,v,""+C,F);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case oe:return C.key===V?h(k,v,C,F):null;case le:return C.key===V?N(k,v,C,F):null;case Oe:return V=C._init,R(k,v,V(C._payload),F)}if(Yn(C)||Y(C))return V!==null?null:T(k,v,C,F,null);wo(k,C)}return null}function M(k,v,C,F,V){if(typeof F=="string"&&F!==""||typeof F=="number")return k=k.get(C)||null,p(v,k,""+F,V);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case oe:return k=k.get(F.key===null?C:F.key)||null,h(v,k,F,V);case le:return k=k.get(F.key===null?C:F.key)||null,N(v,k,F,V);case Oe:var K=F._init;return M(k,v,C,K(F._payload),V)}if(Yn(F)||Y(F))return k=k.get(C)||null,T(v,k,F,V,null);wo(v,F)}return null}function H(k,v,C,F){for(var V=null,K=null,G=v,J=v=0,De=null;G!==null&&J<C.length;J++){G.index>J?(De=G,G=null):De=G.sibling;var ue=R(k,G,C[J],F);if(ue===null){G===null&&(G=De);break}e&&G&&ue.alternate===null&&t(k,G),v=l(ue,v,J),K===null?V=ue:K.sibling=ue,K=ue,G=De}if(J===C.length)return n(k,G),xe&&un(k,J),V;if(G===null){for(;J<C.length;J++)G=L(k,C[J],F),G!==null&&(v=l(G,v,J),K===null?V=G:K.sibling=G,K=G);return xe&&un(k,J),V}for(G=r(k,G);J<C.length;J++)De=M(G,k,J,C[J],F),De!==null&&(e&&De.alternate!==null&&G.delete(De.key===null?J:De.key),v=l(De,v,J),K===null?V=De:K.sibling=De,K=De);return e&&G.forEach(function(rn){return t(k,rn)}),xe&&un(k,J),V}function W(k,v,C,F){var V=Y(C);if(typeof V!="function")throw Error(u(150));if(C=V.call(C),C==null)throw Error(u(151));for(var K=V=null,G=v,J=v=0,De=null,ue=C.next();G!==null&&!ue.done;J++,ue=C.next()){G.index>J?(De=G,G=null):De=G.sibling;var rn=R(k,G,ue.value,F);if(rn===null){G===null&&(G=De);break}e&&G&&rn.alternate===null&&t(k,G),v=l(rn,v,J),K===null?V=rn:K.sibling=rn,K=rn,G=De}if(ue.done)return n(k,G),xe&&un(k,J),V;if(G===null){for(;!ue.done;J++,ue=C.next())ue=L(k,ue.value,F),ue!==null&&(v=l(ue,v,J),K===null?V=ue:K.sibling=ue,K=ue);return xe&&un(k,J),V}for(G=r(k,G);!ue.done;J++,ue=C.next())ue=M(G,k,J,ue.value,F),ue!==null&&(e&&ue.alternate!==null&&G.delete(ue.key===null?J:ue.key),v=l(ue,v,J),K===null?V=ue:K.sibling=ue,K=ue);return e&&G.forEach(function(Yf){return t(k,Yf)}),xe&&un(k,J),V}function Re(k,v,C,F){if(typeof C=="object"&&C!==null&&C.type===me&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case oe:e:{for(var V=C.key,K=v;K!==null;){if(K.key===V){if(V=C.type,V===me){if(K.tag===7){n(k,K.sibling),v=o(K,C.props.children),v.return=k,k=v;break e}}else if(K.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Oe&&qs(V)===K.type){n(k,K.sibling),v=o(K,C.props),v.ref=kr(k,K,C),v.return=k,k=v;break e}n(k,K);break}else t(k,K);K=K.sibling}C.type===me?(v=vn(C.props.children,k.mode,F,C.key),v.return=k,k=v):(F=Wo(C.type,C.key,C.props,null,k.mode,F),F.ref=kr(k,v,C),F.return=k,k=F)}return c(k);case le:e:{for(K=C.key;v!==null;){if(v.key===K)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){n(k,v.sibling),v=o(v,C.children||[]),v.return=k,k=v;break e}else{n(k,v);break}else t(k,v);v=v.sibling}v=Kl(C,k.mode,F),v.return=k,k=v}return c(k);case Oe:return K=C._init,Re(k,v,K(C._payload),F)}if(Yn(C))return H(k,v,C,F);if(Y(C))return W(k,v,C,F);wo(k,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,v!==null&&v.tag===6?(n(k,v.sibling),v=o(v,C),v.return=k,k=v):(n(k,v),v=Ql(C,k.mode,F),v.return=k,k=v),c(k)):n(k,v)}return Re}var Mn=Qs(!0),Ks=Qs(!1),ko=qt(null),So=null,An=null,rl=null;function ol(){rl=An=So=null}function il(e){var t=ko.current;ge(ko),e._currentValue=t}function ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){So=e,rl=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ge=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(rl!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(So===null)throw Error(u(308));An=e,So.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var cn=null;function al(e){cn===null?cn=[e]:cn.push(e)}function Gs(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,al(t)):(n.next=o.next,o.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function sl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ys(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ie&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Lt(e,n)}return o=r.interleaved,o===null?(t.next=t,al(r)):(t.next=o.next,o.next=t),r.interleaved=t,Lt(e,n)}function jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Si(e,n)}}function Xs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=c:l=l.next=c,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Co(e,t,n,r){var o=e.updateQueue;Gt=!1;var l=o.firstBaseUpdate,c=o.lastBaseUpdate,p=o.shared.pending;if(p!==null){o.shared.pending=null;var h=p,N=h.next;h.next=null,c===null?l=N:c.next=N,c=h;var T=e.alternate;T!==null&&(T=T.updateQueue,p=T.lastBaseUpdate,p!==c&&(p===null?T.firstBaseUpdate=N:p.next=N,T.lastBaseUpdate=h))}if(l!==null){var L=o.baseState;c=0,T=N=h=null,p=l;do{var R=p.lane,M=p.eventTime;if((r&R)===R){T!==null&&(T=T.next={eventTime:M,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var H=e,W=p;switch(R=t,M=n,W.tag){case 1:if(H=W.payload,typeof H=="function"){L=H.call(M,L,R);break e}L=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=W.payload,R=typeof H=="function"?H.call(M,L,R):H,R==null)break e;L=$({},L,R);break e;case 2:Gt=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,R=o.effects,R===null?o.effects=[p]:R.push(p))}else M={eventTime:M,lane:R,tag:p.tag,payload:p.payload,callback:p.callback,next:null},T===null?(N=T=M,h=L):T=T.next=M,c|=R;if(p=p.next,p===null){if(p=o.shared.pending,p===null)break;R=p,p=R.next,R.next=null,o.lastBaseUpdate=R,o.shared.pending=null}}while(!0);if(T===null&&(h=L),o.baseState=h,o.firstBaseUpdate=N,o.lastBaseUpdate=T,t=o.shared.interleaved,t!==null){o=t;do c|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);pn|=c,e.lanes=c,e.memoizedState=L}}function Js(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(u(191,o));o.call(r)}}}var Sr={},Et=qt(Sr),jr=qt(Sr),Cr=qt(Sr);function dn(e){if(e===Sr)throw Error(u(174));return e}function ul(e,t){switch(pe(Cr,t),pe(jr,e),pe(Et,Sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ci(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ci(t,e)}ge(Et),pe(Et,t)}function $n(){ge(Et),ge(jr),ge(Cr)}function Zs(e){dn(Cr.current);var t=dn(Et.current),n=ci(t,e.type);t!==n&&(pe(jr,e),pe(Et,n))}function cl(e){jr.current===e&&(ge(Et),ge(jr))}var ke=qt(0);function Eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dl=[];function fl(){for(var e=0;e<dl.length;e++)dl[e]._workInProgressVersionPrimary=null;dl.length=0}var No=re.ReactCurrentDispatcher,pl=re.ReactCurrentBatchConfig,fn=0,Se=null,ze=null,Ie=null,_o=!1,Er=!1,Nr=0,yf=0;function Be(){throw Error(u(321))}function ml(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function hl(e,t,n,r,o,l){if(fn=l,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,No.current=e===null||e.memoizedState===null?Sf:jf,e=n(r,o),Er){l=0;do{if(Er=!1,Nr=0,25<=l)throw Error(u(301));l+=1,Ie=ze=null,t.updateQueue=null,No.current=Cf,e=n(r,o)}while(Er)}if(No.current=bo,t=ze!==null&&ze.next!==null,fn=0,Ie=ze=Se=null,_o=!1,t)throw Error(u(300));return e}function gl(){var e=Nr!==0;return Nr=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?Se.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function at(){if(ze===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Ie===null?Se.memoizedState:Ie.next;if(t!==null)Ie=t,ze=e;else{if(e===null)throw Error(u(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ie===null?Se.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function _r(e,t){return typeof t=="function"?t(e):t}function vl(e){var t=at(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=ze,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var c=o.next;o.next=l.next,l.next=c}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var p=c=null,h=null,N=l;do{var T=N.lane;if((fn&T)===T)h!==null&&(h=h.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),r=N.hasEagerState?N.eagerState:e(r,N.action);else{var L={lane:T,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};h===null?(p=h=L,c=r):h=h.next=L,Se.lanes|=T,pn|=T}N=N.next}while(N!==null&&N!==l);h===null?c=r:h.next=p,pt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=c,t.baseQueue=h,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Se.lanes|=l,pn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yl(e){var t=at(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var c=o=o.next;do l=e(l,c.action),c=c.next;while(c!==o);pt(l,t.memoizedState)||(Ge=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function eu(){}function tu(e,t){var n=Se,r=at(),o=t(),l=!pt(r.memoizedState,o);if(l&&(r.memoizedState=o,Ge=!0),r=r.queue,xl(ou.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,Pr(9,ru.bind(null,n,r,o,t),void 0,null),Fe===null)throw Error(u(349));(fn&30)!==0||nu(n,t,o)}return o}function nu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ru(e,t,n,r){t.value=n,t.getSnapshot=r,iu(t)&&lu(e)}function ou(e,t,n){return n(function(){iu(t)&&lu(e)})}function iu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function lu(e){var t=Lt(e,1);t!==null&&yt(t,e,1,-1)}function au(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:e},t.queue=e,e=e.dispatch=kf.bind(null,Se,e),[t.memoizedState,e]}function Pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function su(){return at().memoizedState}function Po(e,t,n,r){var o=Nt();Se.flags|=e,o.memoizedState=Pr(1|t,n,void 0,r===void 0?null:r)}function Ro(e,t,n,r){var o=at();r=r===void 0?null:r;var l=void 0;if(ze!==null){var c=ze.memoizedState;if(l=c.destroy,r!==null&&ml(r,c.deps)){o.memoizedState=Pr(t,n,l,r);return}}Se.flags|=e,o.memoizedState=Pr(1|t,n,l,r)}function uu(e,t){return Po(8390656,8,e,t)}function xl(e,t){return Ro(2048,8,e,t)}function cu(e,t){return Ro(4,2,e,t)}function du(e,t){return Ro(4,4,e,t)}function fu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pu(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4,4,fu.bind(null,t,e),n)}function wl(){}function mu(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ml(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hu(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ml(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gu(e,t,n){return(fn&21)===0?(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n):(pt(n,t)||(n=qa(),Se.lanes|=n,pn|=n,e.baseState=!0),t)}function xf(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=pl.transition;pl.transition={};try{e(!1),t()}finally{de=n,pl.transition=r}}function vu(){return at().memoizedState}function wf(e,t,n){var r=en(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yu(e))xu(t,n);else if(n=Gs(e,t,n,r),n!==null){var o=qe();yt(n,e,r,o),wu(n,t,r)}}function kf(e,t,n){var r=en(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yu(e))xu(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var c=t.lastRenderedState,p=l(c,n);if(o.hasEagerState=!0,o.eagerState=p,pt(p,c)){var h=t.interleaved;h===null?(o.next=o,al(t)):(o.next=h.next,h.next=o),t.interleaved=o;return}}catch{}finally{}n=Gs(e,t,o,r),n!==null&&(o=qe(),yt(n,e,r,o),wu(n,t,r))}}function yu(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function xu(e,t){Er=_o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Si(e,n)}}var bo={readContext:lt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},Sf={readContext:lt,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:uu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Po(4194308,4,fu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Po(4194308,4,e,t)},useInsertionEffect:function(e,t){return Po(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wf.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:au,useDebugValue:wl,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=au(!1),t=e[0];return e=xf.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Se,o=Nt();if(xe){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Fe===null)throw Error(u(349));(fn&30)!==0||nu(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,uu(ou.bind(null,r,l,e),[e]),r.flags|=2048,Pr(9,ru.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Nt(),t=Fe.identifierPrefix;if(xe){var n=zt,r=Tt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jf={readContext:lt,useCallback:mu,useContext:lt,useEffect:xl,useImperativeHandle:pu,useInsertionEffect:cu,useLayoutEffect:du,useMemo:hu,useReducer:vl,useRef:su,useState:function(){return vl(_r)},useDebugValue:wl,useDeferredValue:function(e){var t=at();return gu(t,ze.memoizedState,e)},useTransition:function(){var e=vl(_r)[0],t=at().memoizedState;return[e,t]},useMutableSource:eu,useSyncExternalStore:tu,useId:vu,unstable_isNewReconciler:!1},Cf={readContext:lt,useCallback:mu,useContext:lt,useEffect:xl,useImperativeHandle:pu,useInsertionEffect:cu,useLayoutEffect:du,useMemo:hu,useReducer:yl,useRef:su,useState:function(){return yl(_r)},useDebugValue:wl,useDeferredValue:function(e){var t=at();return ze===null?t.memoizedState=e:gu(t,ze.memoizedState,e)},useTransition:function(){var e=yl(_r)[0],t=at().memoizedState;return[e,t]},useMutableSource:eu,useSyncExternalStore:tu,useId:vu,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function kl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var To={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),o=en(e),l=It(r,o);l.payload=t,n!=null&&(l.callback=n),t=Yt(e,l,o),t!==null&&(yt(t,e,o,r),jo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),o=en(e),l=It(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Yt(e,l,o),t!==null&&(yt(t,e,o,r),jo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=en(e),o=It(n,r);o.tag=2,t!=null&&(o.callback=t),t=Yt(e,o,r),t!==null&&(yt(t,e,r,n),jo(t,e,r))}};function ku(e,t,n,r,o,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,c):t.prototype&&t.prototype.isPureReactComponent?!mr(n,r)||!mr(o,l):!0}function Su(e,t,n){var r=!1,o=Qt,l=t.contextType;return typeof l=="object"&&l!==null?l=lt(l):(o=Ke(t)?an:$e.current,r=t.contextTypes,l=(r=r!=null)?In(e,o):Qt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=To,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function Sl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},sl(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=lt(l):(l=Ke(t)?an:$e.current,o.context=In(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(kl(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&To.enqueueReplaceState(o,o.state,null),Co(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Bn(e,t){try{var n="",r=t;do n+=ae(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Cl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ef=typeof WeakMap=="function"?WeakMap:Map;function Cu(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Mo||(Mo=!0,Al=r),Cl(e,t)},n}function Eu(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Cl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Cl(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function Nu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ef;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Af.bind(null,e,t,n),t.then(e,e))}function _u(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,Yt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Nf=re.ReactCurrentOwner,Ge=!1;function Ve(e,t,n,r){t.child=e===null?Ks(t,null,n,r):Mn(t,e.child,n,r)}function Ru(e,t,n,r,o){n=n.render;var l=t.ref;return Un(t,o),r=hl(e,t,n,r,l,o),n=gl(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(xe&&n&&Ji(t),t.flags|=1,Ve(e,t,r,o),t.child)}function bu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!ql(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Tu(e,t,l,r,o)):(e=Wo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var c=l.memoizedProps;if(n=n.compare,n=n!==null?n:mr,n(c,r)&&e.ref===t.ref)return Ft(e,t,o)}return t.flags|=1,e=nn(l,r),e.ref=t.ref,e.return=t,t.child=e}function Tu(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(mr(l,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,Ft(e,t,o)}return El(e,t,n,r,o)}function zu(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Wn,rt),rt|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(Wn,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,pe(Wn,rt),rt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,pe(Wn,rt),rt|=r;return Ve(e,t,o,n),t.child}function Lu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,n,r,o){var l=Ke(n)?an:$e.current;return l=In(t,l),Un(t,o),n=hl(e,t,n,r,l,o),r=gl(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(xe&&r&&Ji(t),t.flags|=1,Ve(e,t,n,o),t.child)}function Iu(e,t,n,r,o){if(Ke(n)){var l=!0;ho(t)}else l=!1;if(Un(t,o),t.stateNode===null)Lo(e,t),Su(t,n,r),Sl(t,n,r,o),r=!0;else if(e===null){var c=t.stateNode,p=t.memoizedProps;c.props=p;var h=c.context,N=n.contextType;typeof N=="object"&&N!==null?N=lt(N):(N=Ke(n)?an:$e.current,N=In(t,N));var T=n.getDerivedStateFromProps,L=typeof T=="function"||typeof c.getSnapshotBeforeUpdate=="function";L||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==r||h!==N)&&ju(t,c,r,N),Gt=!1;var R=t.memoizedState;c.state=R,Co(t,r,c,o),h=t.memoizedState,p!==r||R!==h||Qe.current||Gt?(typeof T=="function"&&(kl(t,n,T,r),h=t.memoizedState),(p=Gt||ku(t,n,p,r,R,h,N))?(L||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=h),c.props=r,c.state=h,c.context=N,r=p):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,Ys(e,t),p=t.memoizedProps,N=t.type===t.elementType?p:ht(t.type,p),c.props=N,L=t.pendingProps,R=c.context,h=n.contextType,typeof h=="object"&&h!==null?h=lt(h):(h=Ke(n)?an:$e.current,h=In(t,h));var M=n.getDerivedStateFromProps;(T=typeof M=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==L||R!==h)&&ju(t,c,r,h),Gt=!1,R=t.memoizedState,c.state=R,Co(t,r,c,o);var H=t.memoizedState;p!==L||R!==H||Qe.current||Gt?(typeof M=="function"&&(kl(t,n,M,r),H=t.memoizedState),(N=Gt||ku(t,n,N,r,R,H,h)||!1)?(T||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,H,h),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,H,h)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=H),c.props=r,c.state=H,c.context=h,r=N):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),r=!1)}return Nl(e,t,n,r,l,o)}function Nl(e,t,n,r,o,l){Lu(e,t);var c=(t.flags&128)!==0;if(!r&&!c)return o&&As(t,n,!1),Ft(e,t,l);r=t.stateNode,Nf.current=t;var p=c&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&c?(t.child=Mn(t,e.child,null,l),t.child=Mn(t,null,p,l)):Ve(e,t,p,l),t.memoizedState=r.state,o&&As(t,n,!0),t.child}function Fu(e){var t=e.stateNode;t.pendingContext?Os(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Os(e,t.context,!1),ul(e,t.containerInfo)}function Du(e,t,n,r,o){return On(),nl(o),t.flags|=256,Ve(e,t,n,r),t.child}var _l={dehydrated:null,treeContext:null,retryLane:0};function Pl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ou(e,t,n){var r=t.pendingProps,o=ke.current,l=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(o&2)!==0),p?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),pe(ke,o&1),e===null)return tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=r.children,e=r.fallback,l?(r=t.mode,l=t.child,c={mode:"hidden",children:c},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=c):l=Vo(c,r,0,null),e=vn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Pl(n),t.memoizedState=_l,e):Rl(t,c));if(o=e.memoizedState,o!==null&&(p=o.dehydrated,p!==null))return _f(e,t,c,r,p,o,n);if(l){l=r.fallback,c=t.mode,o=e.child,p=o.sibling;var h={mode:"hidden",children:r.children};return(c&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=h,t.deletions=null):(r=nn(o,h),r.subtreeFlags=o.subtreeFlags&14680064),p!==null?l=nn(p,l):(l=vn(l,c,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,c=e.child.memoizedState,c=c===null?Pl(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=e.childLanes&~n,t.memoizedState=_l,r}return l=e.child,e=l.sibling,r=nn(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rl(e,t){return t=Vo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zo(e,t,n,r){return r!==null&&nl(r),Mn(t,e.child,null,n),e=Rl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _f(e,t,n,r,o,l,c){if(n)return t.flags&256?(t.flags&=-257,r=jl(Error(u(422))),zo(e,t,c,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Vo({mode:"visible",children:r.children},o,0,null),l=vn(l,o,c,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Mn(t,e.child,null,c),t.child.memoizedState=Pl(c),t.memoizedState=_l,l);if((t.mode&1)===0)return zo(e,t,c,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var p=r.dgst;return r=p,l=Error(u(419)),r=jl(l,r,void 0),zo(e,t,c,r)}if(p=(c&e.childLanes)!==0,Ge||p){if(r=Fe,r!==null){switch(c&-c){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|c))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Lt(e,o),yt(r,e,o,-1))}return Vl(),r=jl(Error(u(421))),zo(e,t,c,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Uf.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,nt=Vt(o.nextSibling),tt=t,xe=!0,mt=null,e!==null&&(ot[it++]=Tt,ot[it++]=zt,ot[it++]=sn,Tt=e.id,zt=e.overflow,sn=t),t=Rl(t,r.children),t.flags|=4096,t)}function Mu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ll(e.return,t,n)}function bl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Au(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Ve(e,t,r.children,n),r=ke.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,n,t);else if(e.tag===19)Mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(ke,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Eo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),bl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Eo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}bl(t,!0,n,null,l);break;case"together":bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pf(e,t,n){switch(t.tag){case 3:Fu(t),On();break;case 5:Zs(t);break;case 1:Ke(t.type)&&ho(t);break;case 4:ul(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;pe(ko,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(ke,ke.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ou(e,t,n):(pe(ke,ke.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);pe(ke,ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Au(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),pe(ke,ke.current),r)break;return null;case 22:case 23:return t.lanes=0,zu(e,t,n)}return Ft(e,t,n)}var Uu,Tl,$u,Bu;Uu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Tl=function(){},$u=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,dn(Et.current);var l=null;switch(n){case"input":o=li(e,o),r=li(e,r),l=[];break;case"select":o=$({},o,{value:void 0}),r=$({},r,{value:void 0}),l=[];break;case"textarea":o=ui(e,o),r=ui(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fo)}di(n,r);var c;n=null;for(N in o)if(!r.hasOwnProperty(N)&&o.hasOwnProperty(N)&&o[N]!=null)if(N==="style"){var p=o[N];for(c in p)p.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(f.hasOwnProperty(N)?l||(l=[]):(l=l||[]).push(N,null));for(N in r){var h=r[N];if(p=o!=null?o[N]:void 0,r.hasOwnProperty(N)&&h!==p&&(h!=null||p!=null))if(N==="style")if(p){for(c in p)!p.hasOwnProperty(c)||h&&h.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in h)h.hasOwnProperty(c)&&p[c]!==h[c]&&(n||(n={}),n[c]=h[c])}else n||(l||(l=[]),l.push(N,n)),n=h;else N==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,p=p?p.__html:void 0,h!=null&&p!==h&&(l=l||[]).push(N,h)):N==="children"?typeof h!="string"&&typeof h!="number"||(l=l||[]).push(N,""+h):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(f.hasOwnProperty(N)?(h!=null&&N==="onScroll"&&he("scroll",e),l||p===h||(l=[])):(l=l||[]).push(N,h))}n&&(l=l||[]).push("style",n);var N=l;(t.updateQueue=N)&&(t.flags|=4)}},Bu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rr(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rf(e,t,n){var r=t.pendingProps;switch(Zi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return Ke(t.type)&&mo(),He(t),null;case 3:return r=t.stateNode,$n(),ge(Qe),ge($e),fl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mt!==null&&(Bl(mt),mt=null))),Tl(e,t),He(t),null;case 5:cl(t);var o=dn(Cr.current);if(n=t.type,e!==null&&t.stateNode!=null)$u(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return He(t),null}if(e=dn(Et.current),xo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ct]=t,r[xr]=l,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(o=0;o<gr.length;o++)he(gr[o],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Sa(r,l),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},he("invalid",r);break;case"textarea":Ea(r,l),he("invalid",r)}di(n,l),o=null;for(var c in l)if(l.hasOwnProperty(c)){var p=l[c];c==="children"?typeof p=="string"?r.textContent!==p&&(l.suppressHydrationWarning!==!0&&co(r.textContent,p,e),o=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(l.suppressHydrationWarning!==!0&&co(r.textContent,p,e),o=["children",""+p]):f.hasOwnProperty(c)&&p!=null&&c==="onScroll"&&he("scroll",r)}switch(n){case"input":$r(r),Ca(r,l,!0);break;case"textarea":$r(r),_a(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=fo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),n==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[Ct]=t,e[xr]=r,Uu(e,t,!1,!1),t.stateNode=e;e:{switch(c=fi(n,r),n){case"dialog":he("cancel",e),he("close",e),o=r;break;case"iframe":case"object":case"embed":he("load",e),o=r;break;case"video":case"audio":for(o=0;o<gr.length;o++)he(gr[o],e);o=r;break;case"source":he("error",e),o=r;break;case"img":case"image":case"link":he("error",e),he("load",e),o=r;break;case"details":he("toggle",e),o=r;break;case"input":Sa(e,r),o=li(e,r),he("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=$({},r,{value:void 0}),he("invalid",e);break;case"textarea":Ea(e,r),o=ui(e,r),he("invalid",e);break;default:o=r}di(n,o),p=o;for(l in p)if(p.hasOwnProperty(l)){var h=p[l];l==="style"?Ta(e,h):l==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Ra(e,h)):l==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&Xn(e,h):typeof h=="number"&&Xn(e,""+h):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(f.hasOwnProperty(l)?h!=null&&l==="onScroll"&&he("scroll",e):h!=null&&X(e,l,h,c))}switch(n){case"input":$r(e),Ca(e,r,!1);break;case"textarea":$r(e),_a(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ce(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Sn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)Bu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=dn(Cr.current),dn(Et.current),xo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(l=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:co(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&co(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return He(t),null;case 13:if(ge(ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&nt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Vs(),On(),t.flags|=98560,l=!1;else if(l=xo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[Ct]=t}else On(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),l=!1}else mt!==null&&(Bl(mt),mt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ke.current&1)!==0?Le===0&&(Le=3):Vl())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return $n(),Tl(e,t),e===null&&vr(t.stateNode.containerInfo),He(t),null;case 10:return il(t.type._context),He(t),null;case 17:return Ke(t.type)&&mo(),He(t),null;case 19:if(ge(ke),l=t.memoizedState,l===null)return He(t),null;if(r=(t.flags&128)!==0,c=l.rendering,c===null)if(r)Rr(l,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Eo(e),c!==null){for(t.flags|=128,Rr(l,!1),r=c.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(ke,ke.current&1|2),t.child}e=e.sibling}l.tail!==null&&Pe()>Vn&&(t.flags|=128,r=!0,Rr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Eo(c),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!xe)return He(t),null}else 2*Pe()-l.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,Rr(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(n=l.last,n!==null?n.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Pe(),t.sibling=null,n=ke.current,pe(ke,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Wl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(rt&1073741824)!==0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function bf(e,t){switch(Zi(t),t.tag){case 1:return Ke(t.type)&&mo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),ge(Qe),ge($e),fl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return cl(t),null;case 13:if(ge(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));On()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(ke),null;case 4:return $n(),null;case 10:return il(t.type._context),null;case 22:case 23:return Wl(),null;case 24:return null;default:return null}}var Io=!1,We=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,U=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(e,t,r)}else n.current=null}function zl(e,t,n){try{n()}catch(r){Ne(e,t,r)}}var Hu=!1;function zf(e,t){if(Wi=Zr,e=ks(),Di(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var c=0,p=-1,h=-1,N=0,T=0,L=e,R=null;t:for(;;){for(var M;L!==n||o!==0&&L.nodeType!==3||(p=c+o),L!==l||r!==0&&L.nodeType!==3||(h=c+r),L.nodeType===3&&(c+=L.nodeValue.length),(M=L.firstChild)!==null;)R=L,L=M;for(;;){if(L===e)break t;if(R===n&&++N===o&&(p=c),R===l&&++T===r&&(h=c),(M=L.nextSibling)!==null)break;L=R,R=L.parentNode}L=M}n=p===-1||h===-1?null:{start:p,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vi={focusedElem:e,selectionRange:n},Zr=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var H=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var W=H.memoizedProps,Re=H.memoizedState,k=t.stateNode,v=k.getSnapshotBeforeUpdate(t.elementType===t.type?W:ht(t.type,W),Re);k.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(F){Ne(t,t.return,F)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return H=Hu,Hu=!1,H}function br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&zl(t,n,l)}o=o.next}while(o!==r)}}function Fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ll(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wu(e){var t=e.alternate;t!==null&&(e.alternate=null,Wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[xr],delete t[Gi],delete t[mf],delete t[hf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vu(e){return e.tag===5||e.tag===3||e.tag===4}function qu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fo));else if(r!==4&&(e=e.child,e!==null))for(Il(e,t,n),e=e.sibling;e!==null;)Il(e,t,n),e=e.sibling}function Fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fl(e,t,n),e=e.sibling;e!==null;)Fl(e,t,n),e=e.sibling}var Me=null,gt=!1;function Xt(e,t,n){for(n=n.child;n!==null;)Qu(e,t,n),n=n.sibling}function Qu(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Qr,n)}catch{}switch(n.tag){case 5:We||Hn(n,t);case 6:var r=Me,o=gt;Me=null,Xt(e,t,n),Me=r,gt=o,Me!==null&&(gt?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(gt?(e=Me,n=n.stateNode,e.nodeType===8?Ki(e.parentNode,n):e.nodeType===1&&Ki(e,n),sr(e)):Ki(Me,n.stateNode));break;case 4:r=Me,o=gt,Me=n.stateNode.containerInfo,gt=!0,Xt(e,t,n),Me=r,gt=o;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,c=l.destroy;l=l.tag,c!==void 0&&((l&2)!==0||(l&4)!==0)&&zl(n,t,c),o=o.next}while(o!==r)}Xt(e,t,n);break;case 1:if(!We&&(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(p){Ne(n,t,p)}Xt(e,t,n);break;case 21:Xt(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,Xt(e,t,n),We=r):Xt(e,t,n);break;default:Xt(e,t,n)}}function Ku(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Tf),t.forEach(function(r){var o=$f.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,c=t,p=c;e:for(;p!==null;){switch(p.tag){case 5:Me=p.stateNode,gt=!1;break e;case 3:Me=p.stateNode.containerInfo,gt=!0;break e;case 4:Me=p.stateNode.containerInfo,gt=!0;break e}p=p.return}if(Me===null)throw Error(u(160));Qu(l,c,o),Me=null,gt=!1;var h=o.alternate;h!==null&&(h.return=null),o.return=null}catch(N){Ne(o,t,N)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gu(t,e),t=t.sibling}function Gu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(t,e),_t(e),r&4){try{br(3,e,e.return),Fo(3,e)}catch(W){Ne(e,e.return,W)}try{br(5,e,e.return)}catch(W){Ne(e,e.return,W)}}break;case 1:vt(t,e),_t(e),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(vt(t,e),_t(e),r&512&&n!==null&&Hn(n,n.return),e.flags&32){var o=e.stateNode;try{Xn(o,"")}catch(W){Ne(e,e.return,W)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,c=n!==null?n.memoizedProps:l,p=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{p==="input"&&l.type==="radio"&&l.name!=null&&ja(o,l),fi(p,c);var N=fi(p,l);for(c=0;c<h.length;c+=2){var T=h[c],L=h[c+1];T==="style"?Ta(o,L):T==="dangerouslySetInnerHTML"?Ra(o,L):T==="children"?Xn(o,L):X(o,T,L,N)}switch(p){case"input":ai(o,l);break;case"textarea":Na(o,l);break;case"select":var R=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var M=l.value;M!=null?Sn(o,!!l.multiple,M,!1):R!==!!l.multiple&&(l.defaultValue!=null?Sn(o,!!l.multiple,l.defaultValue,!0):Sn(o,!!l.multiple,l.multiple?[]:"",!1))}o[xr]=l}catch(W){Ne(e,e.return,W)}}break;case 6:if(vt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(u(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(W){Ne(e,e.return,W)}}break;case 3:if(vt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sr(t.containerInfo)}catch(W){Ne(e,e.return,W)}break;case 4:vt(t,e),_t(e);break;case 13:vt(t,e),_t(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Ml=Pe())),r&4&&Ku(e);break;case 22:if(T=n!==null&&n.memoizedState!==null,e.mode&1?(We=(N=We)||T,vt(t,e),We=N):vt(t,e),_t(e),r&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!T&&(e.mode&1)!==0)for(U=e,T=e.child;T!==null;){for(L=U=T;U!==null;){switch(R=U,M=R.child,R.tag){case 0:case 11:case 14:case 15:br(4,R,R.return);break;case 1:Hn(R,R.return);var H=R.stateNode;if(typeof H.componentWillUnmount=="function"){r=R,n=R.return;try{t=r,H.props=t.memoizedProps,H.state=t.memoizedState,H.componentWillUnmount()}catch(W){Ne(r,n,W)}}break;case 5:Hn(R,R.return);break;case 22:if(R.memoizedState!==null){Ju(L);continue}}M!==null?(M.return=R,U=M):Ju(L)}T=T.sibling}e:for(T=null,L=e;;){if(L.tag===5){if(T===null){T=L;try{o=L.stateNode,N?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(p=L.stateNode,h=L.memoizedProps.style,c=h!=null&&h.hasOwnProperty("display")?h.display:null,p.style.display=ba("display",c))}catch(W){Ne(e,e.return,W)}}}else if(L.tag===6){if(T===null)try{L.stateNode.nodeValue=N?"":L.memoizedProps}catch(W){Ne(e,e.return,W)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===e)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===e)break e;for(;L.sibling===null;){if(L.return===null||L.return===e)break e;T===L&&(T=null),L=L.return}T===L&&(T=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:vt(t,e),_t(e),r&4&&Ku(e);break;case 21:break;default:vt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vu(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Xn(o,""),r.flags&=-33);var l=qu(e);Fl(e,l,o);break;case 3:case 4:var c=r.stateNode.containerInfo,p=qu(e);Il(e,p,c);break;default:throw Error(u(161))}}catch(h){Ne(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lf(e,t,n){U=e,Yu(e)}function Yu(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var o=U,l=o.child;if(o.tag===22&&r){var c=o.memoizedState!==null||Io;if(!c){var p=o.alternate,h=p!==null&&p.memoizedState!==null||We;p=Io;var N=We;if(Io=c,(We=h)&&!N)for(U=o;U!==null;)c=U,h=c.child,c.tag===22&&c.memoizedState!==null?Zu(o):h!==null?(h.return=c,U=h):Zu(o);for(;l!==null;)U=l,Yu(l),l=l.sibling;U=o,Io=p,We=N}Xu(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,U=l):Xu(e)}}function Xu(e){for(;U!==null;){var t=U;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:We||Fo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Js(t,l,r);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Js(t,c,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var N=t.alternate;if(N!==null){var T=N.memoizedState;if(T!==null){var L=T.dehydrated;L!==null&&sr(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}We||t.flags&512&&Ll(t)}catch(R){Ne(t,t.return,R)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Ju(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Zu(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fo(4,t)}catch(h){Ne(t,n,h)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(h){Ne(t,o,h)}}var l=t.return;try{Ll(t)}catch(h){Ne(t,l,h)}break;case 5:var c=t.return;try{Ll(t)}catch(h){Ne(t,c,h)}}}catch(h){Ne(t,t.return,h)}if(t===e){U=null;break}var p=t.sibling;if(p!==null){p.return=t.return,U=p;break}U=t.return}}var If=Math.ceil,Do=re.ReactCurrentDispatcher,Dl=re.ReactCurrentOwner,st=re.ReactCurrentBatchConfig,ie=0,Fe=null,be=null,Ae=0,rt=0,Wn=qt(0),Le=0,Tr=null,pn=0,Oo=0,Ol=0,zr=null,Ye=null,Ml=0,Vn=1/0,Dt=null,Mo=!1,Al=null,Jt=null,Ao=!1,Zt=null,Uo=0,Lr=0,Ul=null,$o=-1,Bo=0;function qe(){return(ie&6)!==0?Pe():$o!==-1?$o:$o=Pe()}function en(e){return(e.mode&1)===0?1:(ie&2)!==0&&Ae!==0?Ae&-Ae:vf.transition!==null?(Bo===0&&(Bo=qa()),Bo):(e=de,e!==0||(e=window.event,e=e===void 0?16:ts(e.type)),e)}function yt(e,t,n,r){if(50<Lr)throw Lr=0,Ul=null,Error(u(185));rr(e,n,r),((ie&2)===0||e!==Fe)&&(e===Fe&&((ie&2)===0&&(Oo|=n),Le===4&&tn(e,Ae)),Xe(e,r),n===1&&ie===0&&(t.mode&1)===0&&(Vn=Pe()+500,go&&Kt()))}function Xe(e,t){var n=e.callbackNode;gd(e,t);var r=Yr(e,e===Fe?Ae:0);if(r===0)n!==null&&Ha(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ha(n),t===1)e.tag===0?gf(tc.bind(null,e)):Us(tc.bind(null,e)),ff(function(){(ie&6)===0&&Kt()}),n=null;else{switch(Qa(r)){case 1:n=xi;break;case 4:n=Wa;break;case 16:n=qr;break;case 536870912:n=Va;break;default:n=qr}n=uc(n,ec.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ec(e,t){if($o=-1,Bo=0,(ie&6)!==0)throw Error(u(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=Yr(e,e===Fe?Ae:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ho(e,r);else{t=r;var o=ie;ie|=2;var l=rc();(Fe!==e||Ae!==t)&&(Dt=null,Vn=Pe()+500,hn(e,t));do try{Of();break}catch(p){nc(e,p)}while(!0);ol(),Do.current=l,ie=o,be!==null?t=0:(Fe=null,Ae=0,t=Le)}if(t!==0){if(t===2&&(o=wi(e),o!==0&&(r=o,t=$l(e,o))),t===1)throw n=Tr,hn(e,0),tn(e,r),Xe(e,Pe()),n;if(t===6)tn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Ff(o)&&(t=Ho(e,r),t===2&&(l=wi(e),l!==0&&(r=l,t=$l(e,l))),t===1))throw n=Tr,hn(e,0),tn(e,r),Xe(e,Pe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:gn(e,Ye,Dt);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=Ml+500-Pe(),10<t)){if(Yr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Qi(gn.bind(null,e,Ye,Dt),t);break}gn(e,Ye,Dt);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var c=31-ft(r);l=1<<c,c=t[c],c>o&&(o=c),r&=~l}if(r=o,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*If(r/1960))-r,10<r){e.timeoutHandle=Qi(gn.bind(null,e,Ye,Dt),r);break}gn(e,Ye,Dt);break;case 5:gn(e,Ye,Dt);break;default:throw Error(u(329))}}}return Xe(e,Pe()),e.callbackNode===n?ec.bind(null,e):null}function $l(e,t){var n=zr;return e.current.memoizedState.isDehydrated&&(hn(e,t).flags|=256),e=Ho(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&Bl(t)),e}function Bl(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function Ff(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!pt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~Ol,t&=~Oo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function tc(e){if((ie&6)!==0)throw Error(u(327));qn();var t=Yr(e,0);if((t&1)===0)return Xe(e,Pe()),null;var n=Ho(e,t);if(e.tag!==0&&n===2){var r=wi(e);r!==0&&(t=r,n=$l(e,r))}if(n===1)throw n=Tr,hn(e,0),tn(e,t),Xe(e,Pe()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,Ye,Dt),Xe(e,Pe()),null}function Hl(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(Vn=Pe()+500,go&&Kt())}}function mn(e){Zt!==null&&Zt.tag===0&&(ie&6)===0&&qn();var t=ie;ie|=1;var n=st.transition,r=de;try{if(st.transition=null,de=1,e)return e()}finally{de=r,st.transition=n,ie=t,(ie&6)===0&&Kt()}}function Wl(){rt=Wn.current,ge(Wn)}function hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,df(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Zi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mo();break;case 3:$n(),ge(Qe),ge($e),fl();break;case 5:cl(r);break;case 4:$n();break;case 13:ge(ke);break;case 19:ge(ke);break;case 10:il(r.type._context);break;case 22:case 23:Wl()}n=n.return}if(Fe=e,be=e=nn(e.current,null),Ae=rt=t,Le=0,Tr=null,Ol=Oo=pn=0,Ye=zr=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var c=l.next;l.next=o,r.next=c}n.pending=r}cn=null}return e}function nc(e,t){do{var n=be;try{if(ol(),No.current=bo,_o){for(var r=Se.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}_o=!1}if(fn=0,Ie=ze=Se=null,Er=!1,Nr=0,Dl.current=null,n===null||n.return===null){Le=1,Tr=t,be=null;break}e:{var l=e,c=n.return,p=n,h=t;if(t=Ae,p.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var N=h,T=p,L=T.tag;if((T.mode&1)===0&&(L===0||L===11||L===15)){var R=T.alternate;R?(T.updateQueue=R.updateQueue,T.memoizedState=R.memoizedState,T.lanes=R.lanes):(T.updateQueue=null,T.memoizedState=null)}var M=_u(c);if(M!==null){M.flags&=-257,Pu(M,c,p,l,t),M.mode&1&&Nu(l,N,t),t=M,h=N;var H=t.updateQueue;if(H===null){var W=new Set;W.add(h),t.updateQueue=W}else H.add(h);break e}else{if((t&1)===0){Nu(l,N,t),Vl();break e}h=Error(u(426))}}else if(xe&&p.mode&1){var Re=_u(c);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),Pu(Re,c,p,l,t),nl(Bn(h,p));break e}}l=h=Bn(h,p),Le!==4&&(Le=2),zr===null?zr=[l]:zr.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var k=Cu(l,h,t);Xs(l,k);break e;case 1:p=h;var v=l.type,C=l.stateNode;if((l.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Jt===null||!Jt.has(C)))){l.flags|=65536,t&=-t,l.lanes|=t;var F=Eu(l,p,t);Xs(l,F);break e}}l=l.return}while(l!==null)}ic(n)}catch(V){t=V,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function rc(){var e=Do.current;return Do.current=bo,e===null?bo:e}function Vl(){(Le===0||Le===3||Le===2)&&(Le=4),Fe===null||(pn&268435455)===0&&(Oo&268435455)===0||tn(Fe,Ae)}function Ho(e,t){var n=ie;ie|=2;var r=rc();(Fe!==e||Ae!==t)&&(Dt=null,hn(e,t));do try{Df();break}catch(o){nc(e,o)}while(!0);if(ol(),ie=n,Do.current=r,be!==null)throw Error(u(261));return Fe=null,Ae=0,Le}function Df(){for(;be!==null;)oc(be)}function Of(){for(;be!==null&&!ad();)oc(be)}function oc(e){var t=sc(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?ic(e):be=t,Dl.current=null}function ic(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Rf(n,t,rt),n!==null){be=n;return}}else{if(n=bf(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,be=null;return}}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Le===0&&(Le=5)}function gn(e,t,n){var r=de,o=st.transition;try{st.transition=null,de=1,Mf(e,t,n,r)}finally{st.transition=o,de=r}return null}function Mf(e,t,n,r){do qn();while(Zt!==null);if((ie&6)!==0)throw Error(u(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(vd(e,l),e===Fe&&(be=Fe=null,Ae=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ao||(Ao=!0,uc(qr,function(){return qn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=st.transition,st.transition=null;var c=de;de=1;var p=ie;ie|=4,Dl.current=null,zf(e,n),Gu(n,e),rf(Vi),Zr=!!Wi,Vi=Wi=null,e.current=n,Lf(n),sd(),ie=p,de=c,st.transition=l}else e.current=n;if(Ao&&(Ao=!1,Zt=e,Uo=o),l=e.pendingLanes,l===0&&(Jt=null),dd(n.stateNode),Xe(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Mo)throw Mo=!1,e=Al,Al=null,e;return(Uo&1)!==0&&e.tag!==0&&qn(),l=e.pendingLanes,(l&1)!==0?e===Ul?Lr++:(Lr=0,Ul=e):Lr=0,Kt(),null}function qn(){if(Zt!==null){var e=Qa(Uo),t=st.transition,n=de;try{if(st.transition=null,de=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,Uo=0,(ie&6)!==0)throw Error(u(331));var o=ie;for(ie|=4,U=e.current;U!==null;){var l=U,c=l.child;if((U.flags&16)!==0){var p=l.deletions;if(p!==null){for(var h=0;h<p.length;h++){var N=p[h];for(U=N;U!==null;){var T=U;switch(T.tag){case 0:case 11:case 15:br(8,T,l)}var L=T.child;if(L!==null)L.return=T,U=L;else for(;U!==null;){T=U;var R=T.sibling,M=T.return;if(Wu(T),T===N){U=null;break}if(R!==null){R.return=M,U=R;break}U=M}}}var H=l.alternate;if(H!==null){var W=H.child;if(W!==null){H.child=null;do{var Re=W.sibling;W.sibling=null,W=Re}while(W!==null)}}U=l}}if((l.subtreeFlags&2064)!==0&&c!==null)c.return=l,U=c;else e:for(;U!==null;){if(l=U,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:br(9,l,l.return)}var k=l.sibling;if(k!==null){k.return=l.return,U=k;break e}U=l.return}}var v=e.current;for(U=v;U!==null;){c=U;var C=c.child;if((c.subtreeFlags&2064)!==0&&C!==null)C.return=c,U=C;else e:for(c=v;U!==null;){if(p=U,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Fo(9,p)}}catch(V){Ne(p,p.return,V)}if(p===c){U=null;break e}var F=p.sibling;if(F!==null){F.return=p.return,U=F;break e}U=p.return}}if(ie=o,Kt(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Qr,e)}catch{}r=!0}return r}finally{de=n,st.transition=t}}return!1}function lc(e,t,n){t=Bn(n,t),t=Cu(e,t,1),e=Yt(e,t,1),t=qe(),e!==null&&(rr(e,1,t),Xe(e,t))}function Ne(e,t,n){if(e.tag===3)lc(e,e,n);else for(;t!==null;){if(t.tag===3){lc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=Bn(n,e),e=Eu(t,e,1),t=Yt(t,e,1),e=qe(),t!==null&&(rr(t,1,e),Xe(t,e));break}}t=t.return}}function Af(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(Ae&n)===n&&(Le===4||Le===3&&(Ae&130023424)===Ae&&500>Pe()-Ml?hn(e,0):Ol|=n),Xe(e,t)}function ac(e,t){t===0&&((e.mode&1)===0?t=1:(t=Gr,Gr<<=1,(Gr&130023424)===0&&(Gr=4194304)));var n=qe();e=Lt(e,t),e!==null&&(rr(e,t,n),Xe(e,n))}function Uf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ac(e,n)}function $f(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),ac(e,n)}var sc;sc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)Ge=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ge=!1,Pf(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,xe&&(t.flags&1048576)!==0&&$s(t,yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lo(e,t),e=t.pendingProps;var o=In(t,$e.current);Un(t,n),o=hl(null,t,r,e,o,n);var l=gl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(l=!0,ho(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,sl(t),o.updater=To,t.stateNode=o,o._reactInternals=t,Sl(t,r,e,n),t=Nl(null,t,r,!0,l,n)):(t.tag=0,xe&&l&&Ji(t),Ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Hf(r),e=ht(r,e),o){case 0:t=El(null,t,r,e,n);break e;case 1:t=Iu(null,t,r,e,n);break e;case 11:t=Ru(null,t,r,e,n);break e;case 14:t=bu(null,t,r,ht(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),El(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),Iu(e,t,r,o,n);case 3:e:{if(Fu(t),e===null)throw Error(u(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Ys(e,t),Co(t,r,null,n);var c=t.memoizedState;if(r=c.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Bn(Error(u(423)),t),t=Du(e,t,r,n,o);break e}else if(r!==o){o=Bn(Error(u(424)),t),t=Du(e,t,r,n,o);break e}else for(nt=Vt(t.stateNode.containerInfo.firstChild),tt=t,xe=!0,mt=null,n=Ks(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(On(),r===o){t=Ft(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return Zs(t),e===null&&tl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,c=o.children,qi(r,o)?c=null:l!==null&&qi(r,l)&&(t.flags|=32),Lu(e,t),Ve(e,t,c,n),t.child;case 6:return e===null&&tl(t),null;case 13:return Ou(e,t,n);case 4:return ul(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mn(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),Ru(e,t,r,o,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,c=o.value,pe(ko,r._currentValue),r._currentValue=c,l!==null)if(pt(l.value,c)){if(l.children===o.children&&!Qe.current){t=Ft(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var p=l.dependencies;if(p!==null){c=l.child;for(var h=p.firstContext;h!==null;){if(h.context===r){if(l.tag===1){h=It(-1,n&-n),h.tag=2;var N=l.updateQueue;if(N!==null){N=N.shared;var T=N.pending;T===null?h.next=h:(h.next=T.next,T.next=h),N.pending=h}}l.lanes|=n,h=l.alternate,h!==null&&(h.lanes|=n),ll(l.return,n,t),p.lanes|=n;break}h=h.next}}else if(l.tag===10)c=l.type===t.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(u(341));c.lanes|=n,p=c.alternate,p!==null&&(p.lanes|=n),ll(c,n,t),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===t){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}Ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Un(t,n),o=lt(o),r=r(o),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,o=ht(r,t.pendingProps),o=ht(r.type,o),bu(e,t,r,o,n);case 15:return Tu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),Lo(e,t),t.tag=1,Ke(r)?(e=!0,ho(t)):e=!1,Un(t,n),Su(t,r,o),Sl(t,r,o,n),Nl(null,t,r,!0,e,n);case 19:return Au(e,t,n);case 22:return zu(e,t,n)}throw Error(u(156,t.tag))};function uc(e,t){return Ba(e,t)}function Bf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new Bf(e,t,n,r)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hf(e){if(typeof e=="function")return ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Q)return 11;if(e===Ee)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wo(e,t,n,r,o,l){var c=2;if(r=e,typeof e=="function")ql(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case me:return vn(n.children,o,l,t);case _e:c=8,o|=8;break;case Ue:return e=ut(12,n,t,o|2),e.elementType=Ue,e.lanes=l,e;case te:return e=ut(13,n,t,o),e.elementType=te,e.lanes=l,e;case Ce:return e=ut(19,n,t,o),e.elementType=Ce,e.lanes=l,e;case ve:return Vo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Te:c=10;break e;case dt:c=9;break e;case Q:c=11;break e;case Ee:c=14;break e;case Oe:c=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=ut(c,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function vn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function Vo(e,t,n,r){return e=ut(22,e,r,t),e.elementType=ve,e.lanes=n,e.stateNode={isHidden:!1},e}function Ql(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function Kl(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ki(0),this.expirationTimes=ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Gl(e,t,n,r,o,l,c,p,h){return e=new Wf(e,t,n,p,h),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ut(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sl(l),e}function Vf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:le,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cc(e){if(!e)return Qt;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(Ke(n))return Ms(e,n,t)}return t}function dc(e,t,n,r,o,l,c,p,h){return e=Gl(n,r,!0,e,o,l,c,p,h),e.context=cc(null),n=e.current,r=qe(),o=en(n),l=It(r,o),l.callback=t??null,Yt(n,l,o),e.current.lanes=o,rr(e,o,r),Xe(e,r),e}function qo(e,t,n,r){var o=t.current,l=qe(),c=en(o);return n=cc(n),t.context===null?t.context=n:t.pendingContext=n,t=It(l,c),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yt(o,t,c),e!==null&&(yt(e,o,c,l),jo(e,o,c)),c}function Qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yl(e,t){fc(e,t),(e=e.alternate)&&fc(e,t)}function qf(){return null}var pc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xl(e){this._internalRoot=e}Ko.prototype.render=Xl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));qo(e,t,null,null)},Ko.prototype.unmount=Xl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mn(function(){qo(null,e,null,null)}),t[Rt]=null}};function Ko(e){this._internalRoot=e}Ko.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ya();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&Za(e)}};function Jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mc(){}function Qf(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var N=Qo(c);l.call(N)}}var c=dc(t,r,e,0,null,!1,!1,"",mc);return e._reactRootContainer=c,e[Rt]=c.current,vr(e.nodeType===8?e.parentNode:e),mn(),c}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var p=r;r=function(){var N=Qo(h);p.call(N)}}var h=Gl(e,0,!1,null,null,!1,!1,"",mc);return e._reactRootContainer=h,e[Rt]=h.current,vr(e.nodeType===8?e.parentNode:e),mn(function(){qo(t,h,n,r)}),h}function Yo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var c=l;if(typeof o=="function"){var p=o;o=function(){var h=Qo(c);p.call(h)}}qo(t,c,e,o)}else c=Qf(n,t,e,o,r);return Qo(c)}Ka=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=nr(t.pendingLanes);n!==0&&(Si(t,n|1),Xe(t,Pe()),(ie&6)===0&&(Vn=Pe()+500,Kt()))}break;case 13:mn(function(){var r=Lt(e,1);if(r!==null){var o=qe();yt(r,e,1,o)}}),Yl(e,1)}},ji=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=qe();yt(t,e,134217728,n)}Yl(e,134217728)}},Ga=function(e){if(e.tag===13){var t=en(e),n=Lt(e,t);if(n!==null){var r=qe();yt(n,e,t,r)}Yl(e,t)}},Ya=function(){return de},Xa=function(e,t){var n=de;try{return de=e,t()}finally{de=n}},hi=function(e,t,n){switch(t){case"input":if(ai(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=po(r);if(!o)throw Error(u(90));ka(r),ai(r,o)}}}break;case"textarea":Na(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}},Fa=Hl,Da=mn;var Kf={usingClientEntryPoint:!1,Events:[wr,zn,po,La,Ia,Hl]},Ir={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gf={bundleType:Ir.bundleType,version:Ir.version,rendererPackageName:Ir.rendererPackageName,rendererConfig:Ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ua(e),e===null?null:e.stateNode},findFiberByHostInstance:Ir.findFiberByHostInstance||qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{Qr=Xo.inject(Gf),jt=Xo}catch{}}return Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kf,Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jl(t))throw Error(u(200));return Vf(e,t,null,n)},Je.createRoot=function(e,t){if(!Jl(e))throw Error(u(299));var n=!1,r="",o=pc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Gl(e,1,!1,null,null,n,!1,r,o),e[Rt]=t.current,vr(e.nodeType===8?e.parentNode:e),new Xl(t)},Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=Ua(t),e=e===null?null:e.stateNode,e},Je.flushSync=function(e){return mn(e)},Je.hydrate=function(e,t,n){if(!Go(t))throw Error(u(200));return Yo(null,e,t,!0,n)},Je.hydrateRoot=function(e,t,n){if(!Jl(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",c=pc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=dc(t,null,e,1,n??null,o,!1,l,c),e[Rt]=t.current,vr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ko(t)},Je.render=function(e,t,n){if(!Go(t))throw Error(u(200));return Yo(null,e,t,!1,n)},Je.unmountComponentAtNode=function(e){if(!Go(e))throw Error(u(40));return e._reactRootContainer?(mn(function(){Yo(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1},Je.unstable_batchedUpdates=Hl,Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Go(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Yo(e,t,n,!1,r)},Je.version="18.3.1-next-f1338f8080-20240426",Je}var Sc;function ip(){if(Sc)return ta.exports;Sc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),ta.exports=op(),ta.exports}var jc;function lp(){if(jc)return Jo;jc=1;var i=ip();return Jo.createRoot=i.createRoot,Jo.hydrateRoot=i.hydrateRoot,Jo}var ap=lp();/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Cc="popstate";function Ec(i){return typeof i=="object"&&i!=null&&"pathname"in i&&"search"in i&&"hash"in i&&"state"in i&&"key"in i}function sp(i={}){function s(d,f){var j;let m=(j=f.state)==null?void 0:j.masked,{pathname:g,search:S,hash:y}=m||d.location;return sa("",{pathname:g,search:S,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default",m?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function u(d,f){return typeof f=="string"?f:Or(f)}return cp(s,u,null,i)}function je(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function kt(i,s){if(!i){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function up(){return Math.random().toString(36).substring(2,10)}function Nc(i,s){return{usr:i.state,key:i.key,idx:s,masked:i.unstable_mask?{pathname:i.pathname,search:i.search,hash:i.hash}:void 0}}function sa(i,s,u=null,d,f){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof s=="string"?Kn(s):s,state:u,key:s&&s.key||d||up(),unstable_mask:f}}function Or({pathname:i="/",search:s="",hash:u=""}){return s&&s!=="?"&&(i+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function Kn(i){let s={};if(i){let u=i.indexOf("#");u>=0&&(s.hash=i.substring(u),i=i.substring(0,u));let d=i.indexOf("?");d>=0&&(s.search=i.substring(d),i=i.substring(0,d)),i&&(s.pathname=i)}return s}function cp(i,s,u,d={}){let{window:f=document.defaultView,v5Compat:m=!1}=d,g=f.history,S="POP",y=null,j=_();j==null&&(j=0,g.replaceState({...g.state,idx:j},""));function _(){return(g.state||{idx:null}).idx}function E(){S="POP";let z=_(),D=z==null?null:z-j;j=z,y&&y({action:S,location:I.location,delta:D})}function P(z,D){S="PUSH";let q=Ec(z)?z:sa(I.location,z,D);j=_()+1;let X=Nc(q,j),re=I.createHref(q.unstable_mask||q);try{g.pushState(X,"",re)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;f.location.assign(re)}m&&y&&y({action:S,location:I.location,delta:1})}function A(z,D){S="REPLACE";let q=Ec(z)?z:sa(I.location,z,D);j=_();let X=Nc(q,j),re=I.createHref(q.unstable_mask||q);g.replaceState(X,"",re),m&&y&&y({action:S,location:I.location,delta:0})}function B(z){return dp(z)}let I={get action(){return S},get location(){return i(f,g)},listen(z){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(Cc,E),y=z,()=>{f.removeEventListener(Cc,E),y=null}},createHref(z){return s(f,z)},createURL:B,encodeLocation(z){let D=B(z);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:P,replace:A,go(z){return g.go(z)}};return I}function dp(i,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),je(u,"No window.location.(origin|href) available to create URL");let d=typeof i=="string"?i:Or(i);return d=d.replace(/ $/,"%20"),!s&&d.startsWith("//")&&(d=u+d),new URL(d,u)}function zc(i,s,u="/"){return fp(i,s,u,!1)}function fp(i,s,u,d){let f=typeof s=="string"?Kn(s):s,m=Mt(f.pathname||"/",u);if(m==null)return null;let g=Lc(i);pp(g);let S=null;for(let y=0;S==null&&y<g.length;++y){let j=Cp(m);S=Sp(g[y],j,d)}return S}function Lc(i,s=[],u=[],d="",f=!1){let m=(g,S,y=f,j)=>{let _={relativePath:j===void 0?g.path||"":j,caseSensitive:g.caseSensitive===!0,childrenIndex:S,route:g};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(d)&&y)return;je(_.relativePath.startsWith(d),`Absolute route path "${_.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(d.length)}let E=wt([d,_.relativePath]),P=u.concat(_);g.children&&g.children.length>0&&(je(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Lc(g.children,s,P,E,y)),!(g.path==null&&!g.index)&&s.push({path:E,score:wp(E,g.index),routesMeta:P})};return i.forEach((g,S)=>{var y;if(g.path===""||!((y=g.path)!=null&&y.includes("?")))m(g,S);else for(let j of Ic(g.path))m(g,S,!0,j)}),s}function Ic(i){let s=i.split("/");if(s.length===0)return[];let[u,...d]=s,f=u.endsWith("?"),m=u.replace(/\?$/,"");if(d.length===0)return f?[m,""]:[m];let g=Ic(d.join("/")),S=[];return S.push(...g.map(y=>y===""?m:[m,y].join("/"))),f&&S.push(...g),S.map(y=>i.startsWith("/")&&y===""?"/":y)}function pp(i){i.sort((s,u)=>s.score!==u.score?u.score-s.score:kp(s.routesMeta.map(d=>d.childrenIndex),u.routesMeta.map(d=>d.childrenIndex)))}var mp=/^:[\w-]+$/,hp=3,gp=2,vp=1,yp=10,xp=-2,_c=i=>i==="*";function wp(i,s){let u=i.split("/"),d=u.length;return u.some(_c)&&(d+=xp),s&&(d+=gp),u.filter(f=>!_c(f)).reduce((f,m)=>f+(mp.test(m)?hp:m===""?vp:yp),d)}function kp(i,s){return i.length===s.length&&i.slice(0,-1).every((d,f)=>d===s[f])?i[i.length-1]-s[s.length-1]:0}function Sp(i,s,u=!1){let{routesMeta:d}=i,f={},m="/",g=[];for(let S=0;S<d.length;++S){let y=d[S],j=S===d.length-1,_=m==="/"?s:s.slice(m.length)||"/",E=ni({path:y.relativePath,caseSensitive:y.caseSensitive,end:j},_),P=y.route;if(!E&&j&&u&&!d[d.length-1].route.index&&(E=ni({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},_)),!E)return null;Object.assign(f,E.params),g.push({params:f,pathname:wt([m,E.pathname]),pathnameBase:Pp(wt([m,E.pathnameBase])),route:P}),E.pathnameBase!=="/"&&(m=wt([m,E.pathnameBase]))}return g}function ni(i,s){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,d]=jp(i.path,i.caseSensitive,i.end),f=s.match(u);if(!f)return null;let m=f[0],g=m.replace(/(.)\/+$/,"$1"),S=f.slice(1);return{params:d.reduce((j,{paramName:_,isOptional:E},P)=>{if(_==="*"){let B=S[P]||"";g=m.slice(0,m.length-B.length).replace(/(.)\/+$/,"$1")}const A=S[P];return E&&!A?j[_]=void 0:j[_]=(A||"").replace(/%2F/g,"/"),j},{}),pathname:m,pathnameBase:g,pattern:i}}function jp(i,s=!1,u=!0){kt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let d=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,S,y,j,_)=>{if(d.push({paramName:S,isOptional:y!=null}),y){let E=_.charAt(j+g.length);return E&&E!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(d.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),d]}function Cp(i){try{return i.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return kt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),i}}function Mt(i,s){if(s==="/")return i;if(!i.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,d=i.charAt(u);return d&&d!=="/"?null:i.slice(u)||"/"}var Ep=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Np(i,s="/"){let{pathname:u,search:d="",hash:f=""}=typeof i=="string"?Kn(i):i,m;return u?(u=Dc(u),u.startsWith("/")?m=Pc(u.substring(1),"/"):m=Pc(u,s)):m=s,{pathname:m,search:Rp(d),hash:bp(f)}}function Pc(i,s){let u=ri(s).split("/");return i.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function oa(i,s,u,d){return`Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _p(i){return i.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function Fc(i){let s=_p(i);return s.map((u,d)=>d===s.length-1?u.pathname:u.pathnameBase)}function fa(i,s,u,d=!1){let f;typeof i=="string"?f=Kn(i):(f={...i},je(!f.pathname||!f.pathname.includes("?"),oa("?","pathname","search",f)),je(!f.pathname||!f.pathname.includes("#"),oa("#","pathname","hash",f)),je(!f.search||!f.search.includes("#"),oa("#","search","hash",f)));let m=i===""||f.pathname==="",g=m?"/":f.pathname,S;if(g==null)S=u;else{let E=s.length-1;if(!d&&g.startsWith("..")){let P=g.split("/");for(;P[0]==="..";)P.shift(),E-=1;f.pathname=P.join("/")}S=E>=0?s[E]:"/"}let y=Np(f,S),j=g&&g!=="/"&&g.endsWith("/"),_=(m||g===".")&&u.endsWith("/");return!y.pathname.endsWith("/")&&(j||_)&&(y.pathname+="/"),y}var Dc=i=>i.replace(/\/\/+/g,"/"),wt=i=>Dc(i.join("/")),ri=i=>i.replace(/\/+$/,""),Pp=i=>ri(i).replace(/^\/*/,"/"),Rp=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,bp=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Tp=class{constructor(i,s,u,d=!1){this.status=i,this.statusText=s||"",this.internal=d,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function zp(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function Lp(i){let s=i.map(u=>u.route.path).filter(Boolean);return wt(s)||"/"}var Oc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Mc(i,s){let u=i;if(typeof u!="string"||!Ep.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let d=u,f=!1;if(Oc)try{let m=new URL(window.location.href),g=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=Mt(g.pathname,s);g.origin===m.origin&&S!=null?u=S+g.search+g.hash:f=!0}catch{kt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:f,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ac=["POST","PUT","PATCH","DELETE"];new Set(Ac);var Ip=["GET",...Ac];new Set(Ip);var Gn=w.createContext(null);Gn.displayName="DataRouter";var oi=w.createContext(null);oi.displayName="DataRouterState";var Uc=w.createContext(!1);function Fp(){return w.useContext(Uc)}var $c=w.createContext({isTransitioning:!1});$c.displayName="ViewTransition";var Dp=w.createContext(new Map);Dp.displayName="Fetchers";var Op=w.createContext(null);Op.displayName="Await";var ct=w.createContext(null);ct.displayName="Navigation";var Mr=w.createContext(null);Mr.displayName="Location";var Pt=w.createContext({outlet:null,matches:[],isDataRoute:!1});Pt.displayName="Route";var pa=w.createContext(null);pa.displayName="RouteError";var Bc="REACT_ROUTER_ERROR",Mp="REDIRECT",Ap="ROUTE_ERROR_RESPONSE";function Up(i){if(i.startsWith(`${Bc}:${Mp}:{`))try{let s=JSON.parse(i.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function $p(i){if(i.startsWith(`${Bc}:${Ap}:{`))try{let s=JSON.parse(i.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new Tp(s.status,s.statusText,s.data)}catch{}}function Bp(i,{relative:s}={}){je(Ar(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:d}=w.useContext(ct),{hash:f,pathname:m,search:g}=Ur(i,{relative:s}),S=m;return u!=="/"&&(S=m==="/"?u:wt([u,m])),d.createHref({pathname:S,search:g,hash:f})}function Ar(){return w.useContext(Mr)!=null}function St(){return je(Ar(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Mr).location}var Hc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Wc(i){w.useContext(ct).static||w.useLayoutEffect(i)}function xn(){let{isDataRoute:i}=w.useContext(Pt);return i?nm():Hp()}function Hp(){je(Ar(),"useNavigate() may be used only in the context of a <Router> component.");let i=w.useContext(Gn),{basename:s,navigator:u}=w.useContext(ct),{matches:d}=w.useContext(Pt),{pathname:f}=St(),m=JSON.stringify(Fc(d)),g=w.useRef(!1);return Wc(()=>{g.current=!0}),w.useCallback((y,j={})=>{if(kt(g.current,Hc),!g.current)return;if(typeof y=="number"){u.go(y);return}let _=fa(y,JSON.parse(m),f,j.relative==="path");i==null&&s!=="/"&&(_.pathname=_.pathname==="/"?s:wt([s,_.pathname])),(j.replace?u.replace:u.push)(_,j.state,j)},[s,u,m,f,i])}w.createContext(null);function Wp(){let{matches:i}=w.useContext(Pt),s=i[i.length-1];return(s==null?void 0:s.params)??{}}function Ur(i,{relative:s}={}){let{matches:u}=w.useContext(Pt),{pathname:d}=St(),f=JSON.stringify(Fc(u));return w.useMemo(()=>fa(i,JSON.parse(f),d,s==="path"),[i,f,d,s])}function Vp(i,s){return Vc(i,s)}function Vc(i,s,u){var z;je(Ar(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=w.useContext(ct),{matches:f}=w.useContext(Pt),m=f[f.length-1],g=m?m.params:{},S=m?m.pathname:"/",y=m?m.pathnameBase:"/",j=m&&m.route;{let D=j&&j.path||"";Qc(S,!j||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${S}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let _=St(),E;if(s){let D=typeof s=="string"?Kn(s):s;je(y==="/"||((z=D.pathname)==null?void 0:z.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${D.pathname}" was given in the \`location\` prop.`),E=D}else E=_;let P=E.pathname||"/",A=P;if(y!=="/"){let D=y.replace(/^\//,"").split("/");A="/"+P.replace(/^\//,"").split("/").slice(D.length).join("/")}let B=zc(i,{pathname:A});kt(j||B!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),kt(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let I=Yp(B&&B.map(D=>Object.assign({},D,{params:Object.assign({},g,D.params),pathname:wt([y,d.encodeLocation?d.encodeLocation(D.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?y:wt([y,d.encodeLocation?d.encodeLocation(D.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),f,u);return s&&I?w.createElement(Mr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...E},navigationType:"POP"}},I):I}function qp(){let i=tm(),s=zp(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,d="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:d},m={padding:"2px 4px",backgroundColor:d},g=null;return console.error("Error handled by React Router default ErrorBoundary:",i),g=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:m},"ErrorBoundary")," or"," ",w.createElement("code",{style:m},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},s),u?w.createElement("pre",{style:f},u):null,g)}var Qp=w.createElement(qp,null),qc=class extends w.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,s){return s.location!==i.location||s.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:s.error,location:s.location,revalidation:i.revalidation||s.revalidation}}componentDidCatch(i,s){this.props.onError?this.props.onError(i,s):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const u=$p(i.digest);u&&(i=u)}let s=i!==void 0?w.createElement(Pt.Provider,{value:this.props.routeContext},w.createElement(pa.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?w.createElement(Kp,{error:i},s):s}};qc.contextType=Uc;var ia=new WeakMap;function Kp({children:i,error:s}){let{basename:u}=w.useContext(ct);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let d=Up(s.digest);if(d){let f=ia.get(s);if(f)throw f;let m=Mc(d.location,u);if(Oc&&!ia.get(s))if(m.isExternal||d.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:d.replace}));throw ia.set(s,g),g}return w.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return i}function Gp({routeContext:i,match:s,children:u}){let d=w.useContext(Gn);return d&&d.static&&d.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=s.route.id),w.createElement(Pt.Provider,{value:i},u)}function Yp(i,s=[],u){let d=u==null?void 0:u.state;if(i==null){if(!d)return null;if(d.errors)i=d.matches;else if(s.length===0&&!d.initialized&&d.matches.length>0)i=d.matches;else return null}let f=i,m=d==null?void 0:d.errors;if(m!=null){let _=f.findIndex(E=>E.route.id&&(m==null?void 0:m[E.route.id])!==void 0);je(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,_+1))}let g=!1,S=-1;if(u&&d){g=d.renderFallback;for(let _=0;_<f.length;_++){let E=f[_];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(S=_),E.route.id){let{loaderData:P,errors:A}=d,B=E.route.loader&&!P.hasOwnProperty(E.route.id)&&(!A||A[E.route.id]===void 0);if(E.route.lazy||B){u.isStatic&&(g=!0),S>=0?f=f.slice(0,S+1):f=[f[0]];break}}}}let y=u==null?void 0:u.onError,j=d&&y?(_,E)=>{var P,A;y(_,{location:d.location,params:((A=(P=d.matches)==null?void 0:P[0])==null?void 0:A.params)??{},unstable_pattern:Lp(d.matches),errorInfo:E})}:void 0;return f.reduceRight((_,E,P)=>{let A,B=!1,I=null,z=null;d&&(A=m&&E.route.id?m[E.route.id]:void 0,I=E.route.errorElement||Qp,g&&(S<0&&P===0?(Qc("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,z=null):S===P&&(B=!0,z=E.route.hydrateFallbackElement||null)));let D=s.concat(f.slice(0,P+1)),q=()=>{let X;return A?X=I:B?X=z:E.route.Component?X=w.createElement(E.route.Component,null):E.route.element?X=E.route.element:X=_,w.createElement(Gp,{match:E,routeContext:{outlet:_,matches:D,isDataRoute:d!=null},children:X})};return d&&(E.route.ErrorBoundary||E.route.errorElement||P===0)?w.createElement(qc,{location:d.location,revalidation:d.revalidation,component:I,error:A,children:q(),routeContext:{outlet:null,matches:D,isDataRoute:!0},onError:j}):q()},null)}function ma(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xp(i){let s=w.useContext(Gn);return je(s,ma(i)),s}function Jp(i){let s=w.useContext(oi);return je(s,ma(i)),s}function Zp(i){let s=w.useContext(Pt);return je(s,ma(i)),s}function ha(i){let s=Zp(i),u=s.matches[s.matches.length-1];return je(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function em(){return ha("useRouteId")}function tm(){var d;let i=w.useContext(pa),s=Jp("useRouteError"),u=ha("useRouteError");return i!==void 0?i:(d=s.errors)==null?void 0:d[u]}function nm(){let{router:i}=Xp("useNavigate"),s=ha("useNavigate"),u=w.useRef(!1);return Wc(()=>{u.current=!0}),w.useCallback(async(f,m={})=>{kt(u.current,Hc),u.current&&(typeof f=="number"?await i.navigate(f):await i.navigate(f,{fromRouteId:s,...m}))},[i,s])}var Rc={};function Qc(i,s,u){!s&&!Rc[i]&&(Rc[i]=!0,kt(!1,u))}w.memo(rm);function rm({routes:i,future:s,state:u,isStatic:d,onError:f}){return Vc(i,void 0,{state:u,isStatic:d,onError:f})}function yn(i){je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function om({basename:i="/",children:s=null,location:u,navigationType:d="POP",navigator:f,static:m=!1,unstable_useTransitions:g}){je(!Ar(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let S=i.replace(/^\/*/,"/"),y=w.useMemo(()=>({basename:S,navigator:f,static:m,unstable_useTransitions:g,future:{}}),[S,f,m,g]);typeof u=="string"&&(u=Kn(u));let{pathname:j="/",search:_="",hash:E="",state:P=null,key:A="default",unstable_mask:B}=u,I=w.useMemo(()=>{let z=Mt(j,S);return z==null?null:{location:{pathname:z,search:_,hash:E,state:P,key:A,unstable_mask:B},navigationType:d}},[S,j,_,E,P,A,d,B]);return kt(I!=null,`<Router basename="${S}"> is not able to match the URL "${j}${_}${E}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:w.createElement(ct.Provider,{value:y},w.createElement(Mr.Provider,{children:s,value:I}))}function im({children:i,location:s}){return Vp(ua(i),s)}function ua(i,s=[]){let u=[];return w.Children.forEach(i,(d,f)=>{if(!w.isValidElement(d))return;let m=[...s,f];if(d.type===w.Fragment){u.push.apply(u,ua(d.props.children,m));return}je(d.type===yn,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),je(!d.props.index||!d.props.children,"An index route cannot have child routes.");let g={id:d.props.id||m.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(g.children=ua(d.props.children,m)),u.push(g)}),u}var ei="get",ti="application/x-www-form-urlencoded";function ii(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function lm(i){return ii(i)&&i.tagName.toLowerCase()==="button"}function am(i){return ii(i)&&i.tagName.toLowerCase()==="form"}function sm(i){return ii(i)&&i.tagName.toLowerCase()==="input"}function um(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function cm(i,s){return i.button===0&&(!s||s==="_self")&&!um(i)}function ca(i=""){return new URLSearchParams(typeof i=="string"||Array.isArray(i)||i instanceof URLSearchParams?i:Object.keys(i).reduce((s,u)=>{let d=i[u];return s.concat(Array.isArray(d)?d.map(f=>[u,f]):[[u,d]])},[]))}function dm(i,s){let u=ca(i);return s&&s.forEach((d,f)=>{u.has(f)||s.getAll(f).forEach(m=>{u.append(f,m)})}),u}var Zo=null;function fm(){if(Zo===null)try{new FormData(document.createElement("form"),0),Zo=!1}catch{Zo=!0}return Zo}var pm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function la(i){return i!=null&&!pm.has(i)?(kt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ti}"`),null):i}function mm(i,s){let u,d,f,m,g;if(am(i)){let S=i.getAttribute("action");d=S?Mt(S,s):null,u=i.getAttribute("method")||ei,f=la(i.getAttribute("enctype"))||ti,m=new FormData(i)}else if(lm(i)||sm(i)&&(i.type==="submit"||i.type==="image")){let S=i.form;if(S==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=i.getAttribute("formaction")||S.getAttribute("action");if(d=y?Mt(y,s):null,u=i.getAttribute("formmethod")||S.getAttribute("method")||ei,f=la(i.getAttribute("formenctype"))||la(S.getAttribute("enctype"))||ti,m=new FormData(S,i),!fm()){let{name:j,type:_,value:E}=i;if(_==="image"){let P=j?`${j}.`:"";m.append(`${P}x`,"0"),m.append(`${P}y`,"0")}else j&&m.append(j,E)}}else{if(ii(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=ei,d=null,f=ti,g=i}return m&&f==="text/plain"&&(g=m,m=void 0),{action:d,method:u.toLowerCase(),encType:f,formData:m,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ga(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function Kc(i,s,u,d){let f=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return u?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${d}`:f.pathname=`${f.pathname}.${d}`:f.pathname==="/"?f.pathname=`_root.${d}`:s&&Mt(f.pathname,s)==="/"?f.pathname=`${ri(s)}/_root.${d}`:f.pathname=`${ri(f.pathname)}.${d}`,f}async function hm(i,s){if(i.id in s)return s[i.id];try{let u=await import(i.module);return s[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function gm(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function vm(i,s,u){let d=await Promise.all(i.map(async f=>{let m=s.routes[f.route.id];if(m){let g=await hm(m,u);return g.links?g.links():[]}return[]}));return km(d.flat(1).filter(gm).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function bc(i,s,u,d,f,m){let g=(y,j)=>u[j]?y.route.id!==u[j].route.id:!0,S=(y,j)=>{var _;return u[j].pathname!==y.pathname||((_=u[j].route.path)==null?void 0:_.endsWith("*"))&&u[j].params["*"]!==y.params["*"]};return m==="assets"?s.filter((y,j)=>g(y,j)||S(y,j)):m==="data"?s.filter((y,j)=>{var E;let _=d.routes[y.route.id];if(!_||!_.hasLoader)return!1;if(g(y,j)||S(y,j))return!0;if(y.route.shouldRevalidate){let P=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((E=u[0])==null?void 0:E.params)||{},nextUrl:new URL(i,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof P=="boolean")return P}return!0}):[]}function ym(i,s,{includeHydrateFallback:u}={}){return xm(i.map(d=>{let f=s.routes[d.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function xm(i){return[...new Set(i)]}function wm(i){let s={},u=Object.keys(i).sort();for(let d of u)s[d]=i[d];return s}function km(i,s){let u=new Set;return new Set(s),i.reduce((d,f)=>{let m=JSON.stringify(wm(f));return u.has(m)||(u.add(m),d.push({key:m,link:f})),d},[])}function va(){let i=w.useContext(Gn);return ga(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Sm(){let i=w.useContext(oi);return ga(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var ya=w.createContext(void 0);ya.displayName="FrameworkContext";function xa(){let i=w.useContext(ya);return ga(i,"You must render this element inside a <HydratedRouter> element"),i}function jm(i,s){let u=w.useContext(ya),[d,f]=w.useState(!1),[m,g]=w.useState(!1),{onFocus:S,onBlur:y,onMouseEnter:j,onMouseLeave:_,onTouchStart:E}=s,P=w.useRef(null);w.useEffect(()=>{if(i==="render"&&g(!0),i==="viewport"){let I=D=>{D.forEach(q=>{g(q.isIntersecting)})},z=new IntersectionObserver(I,{threshold:.5});return P.current&&z.observe(P.current),()=>{z.disconnect()}}},[i]),w.useEffect(()=>{if(d){let I=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(I)}}},[d]);let A=()=>{f(!0)},B=()=>{f(!1),g(!1)};return u?i!=="intent"?[m,P,{}]:[m,P,{onFocus:Dr(S,A),onBlur:Dr(y,B),onMouseEnter:Dr(j,A),onMouseLeave:Dr(_,B),onTouchStart:Dr(E,A)}]:[!1,P,{}]}function Dr(i,s){return u=>{i&&i(u),u.defaultPrevented||s(u)}}function Cm({page:i,...s}){let u=Fp(),{router:d}=va(),f=w.useMemo(()=>zc(d.routes,i,d.basename),[d.routes,i,d.basename]);return f?u?w.createElement(Nm,{page:i,matches:f,...s}):w.createElement(_m,{page:i,matches:f,...s}):null}function Em(i){let{manifest:s,routeModules:u}=xa(),[d,f]=w.useState([]);return w.useEffect(()=>{let m=!1;return vm(i,s,u).then(g=>{m||f(g)}),()=>{m=!0}},[i,s,u]),d}function Nm({page:i,matches:s,...u}){let d=St(),{future:f}=xa(),{basename:m}=va(),g=w.useMemo(()=>{if(i===d.pathname+d.search+d.hash)return[];let S=Kc(i,m,f.unstable_trailingSlashAwareDataRequests,"rsc"),y=!1,j=[];for(let _ of s)typeof _.route.shouldRevalidate=="function"?y=!0:j.push(_.route.id);return y&&j.length>0&&S.searchParams.set("_routes",j.join(",")),[S.pathname+S.search]},[m,f.unstable_trailingSlashAwareDataRequests,i,d,s]);return w.createElement(w.Fragment,null,g.map(S=>w.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...u})))}function _m({page:i,matches:s,...u}){let d=St(),{future:f,manifest:m,routeModules:g}=xa(),{basename:S}=va(),{loaderData:y,matches:j}=Sm(),_=w.useMemo(()=>bc(i,s,j,m,d,"data"),[i,s,j,m,d]),E=w.useMemo(()=>bc(i,s,j,m,d,"assets"),[i,s,j,m,d]),P=w.useMemo(()=>{if(i===d.pathname+d.search+d.hash)return[];let I=new Set,z=!1;if(s.forEach(q=>{var re;let X=m.routes[q.route.id];!X||!X.hasLoader||(!_.some(oe=>oe.route.id===q.route.id)&&q.route.id in y&&((re=g[q.route.id])!=null&&re.shouldRevalidate)||X.hasClientLoader?z=!0:I.add(q.route.id))}),I.size===0)return[];let D=Kc(i,S,f.unstable_trailingSlashAwareDataRequests,"data");return z&&I.size>0&&D.searchParams.set("_routes",s.filter(q=>I.has(q.route.id)).map(q=>q.route.id).join(",")),[D.pathname+D.search]},[S,f.unstable_trailingSlashAwareDataRequests,y,d,m,_,s,i,g]),A=w.useMemo(()=>ym(E,m),[E,m]),B=Em(E);return w.createElement(w.Fragment,null,P.map(I=>w.createElement("link",{key:I,rel:"prefetch",as:"fetch",href:I,...u})),A.map(I=>w.createElement("link",{key:I,rel:"modulepreload",href:I,...u})),B.map(({key:I,link:z})=>w.createElement("link",{key:I,nonce:u.nonce,...z,crossOrigin:z.crossOrigin??u.crossOrigin})))}function Pm(...i){return s=>{i.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var Rm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Rm&&(window.__reactRouterVersion="7.14.2")}catch{}function bm({basename:i,children:s,unstable_useTransitions:u,window:d}){let f=w.useRef();f.current==null&&(f.current=sp({window:d,v5Compat:!0}));let m=f.current,[g,S]=w.useState({action:m.action,location:m.location}),y=w.useCallback(j=>{u===!1?S(j):w.startTransition(()=>S(j))},[u]);return w.useLayoutEffect(()=>m.listen(y),[m,y]),w.createElement(om,{basename:i,children:s,location:g.location,navigationType:g.action,navigator:m,unstable_useTransitions:u})}var Gc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ot=w.forwardRef(function({onClick:s,discover:u="render",prefetch:d="none",relative:f,reloadDocument:m,replace:g,unstable_mask:S,state:y,target:j,to:_,preventScrollReset:E,viewTransition:P,unstable_defaultShouldRevalidate:A,...B},I){let{basename:z,navigator:D,unstable_useTransitions:q}=w.useContext(ct),X=typeof _=="string"&&Gc.test(_),re=Mc(_,z);_=re.to;let oe=Bp(_,{relative:f}),le=St(),me=null;if(S){let Ee=fa(S,[],le.unstable_mask?le.unstable_mask.pathname:"/",!0);z!=="/"&&(Ee.pathname=Ee.pathname==="/"?z:wt([z,Ee.pathname])),me=D.createHref(Ee)}let[_e,Ue,Te]=jm(d,B),dt=Im(_,{replace:g,unstable_mask:S,state:y,target:j,preventScrollReset:E,relative:f,viewTransition:P,unstable_defaultShouldRevalidate:A,unstable_useTransitions:q});function Q(Ee){s&&s(Ee),Ee.defaultPrevented||dt(Ee)}let te=!(re.isExternal||m),Ce=w.createElement("a",{...B,...Te,href:(te?me:void 0)||re.absoluteURL||oe,onClick:te?Q:s,ref:Pm(I,Ue),target:j,"data-discover":!X&&u==="render"?"true":void 0});return _e&&!X?w.createElement(w.Fragment,null,Ce,w.createElement(Cm,{page:oe})):Ce});Ot.displayName="Link";var Tm=w.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:d="",end:f=!1,style:m,to:g,viewTransition:S,children:y,...j},_){let E=Ur(g,{relative:j.relative}),P=St(),A=w.useContext(oi),{navigator:B,basename:I}=w.useContext(ct),z=A!=null&&Um(E)&&S===!0,D=B.encodeLocation?B.encodeLocation(E).pathname:E.pathname,q=P.pathname,X=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;u||(q=q.toLowerCase(),X=X?X.toLowerCase():null,D=D.toLowerCase()),X&&I&&(X=Mt(X,I)||X);const re=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let oe=q===D||!f&&q.startsWith(D)&&q.charAt(re)==="/",le=X!=null&&(X===D||!f&&X.startsWith(D)&&X.charAt(D.length)==="/"),me={isActive:oe,isPending:le,isTransitioning:z},_e=oe?s:void 0,Ue;typeof d=="function"?Ue=d(me):Ue=[d,oe?"active":null,le?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let Te=typeof m=="function"?m(me):m;return w.createElement(Ot,{...j,"aria-current":_e,className:Ue,ref:_,style:Te,to:g,viewTransition:S},typeof y=="function"?y(me):y)});Tm.displayName="NavLink";var zm=w.forwardRef(({discover:i="render",fetcherKey:s,navigate:u,reloadDocument:d,replace:f,state:m,method:g=ei,action:S,onSubmit:y,relative:j,preventScrollReset:_,viewTransition:E,unstable_defaultShouldRevalidate:P,...A},B)=>{let{unstable_useTransitions:I}=w.useContext(ct),z=Mm(),D=Am(S,{relative:j}),q=g.toLowerCase()==="get"?"get":"post",X=typeof S=="string"&&Gc.test(S),re=oe=>{if(y&&y(oe),oe.defaultPrevented)return;oe.preventDefault();let le=oe.nativeEvent.submitter,me=(le==null?void 0:le.getAttribute("formmethod"))||g,_e=()=>z(le||oe.currentTarget,{fetcherKey:s,method:me,navigate:u,replace:f,state:m,relative:j,preventScrollReset:_,viewTransition:E,unstable_defaultShouldRevalidate:P});I&&u!==!1?w.startTransition(()=>_e()):_e()};return w.createElement("form",{ref:B,method:q,action:D,onSubmit:d?y:re,...A,"data-discover":!X&&i==="render"?"true":void 0})});zm.displayName="Form";function Lm(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yc(i){let s=w.useContext(Gn);return je(s,Lm(i)),s}function Im(i,{target:s,replace:u,unstable_mask:d,state:f,preventScrollReset:m,relative:g,viewTransition:S,unstable_defaultShouldRevalidate:y,unstable_useTransitions:j}={}){let _=xn(),E=St(),P=Ur(i,{relative:g});return w.useCallback(A=>{if(cm(A,s)){A.preventDefault();let B=u!==void 0?u:Or(E)===Or(P),I=()=>_(i,{replace:B,unstable_mask:d,state:f,preventScrollReset:m,relative:g,viewTransition:S,unstable_defaultShouldRevalidate:y});j?w.startTransition(()=>I()):I()}},[E,_,P,u,d,f,s,i,m,g,S,y,j])}function Fm(i){kt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=w.useRef(ca(i)),u=w.useRef(!1),d=St(),f=w.useMemo(()=>dm(d.search,u.current?null:s.current),[d.search]),m=xn(),g=w.useCallback((S,y)=>{const j=ca(typeof S=="function"?S(new URLSearchParams(f)):S);u.current=!0,m("?"+j,y)},[m,f]);return[f,g]}var Dm=0,Om=()=>`__${String(++Dm)}__`;function Mm(){let{router:i}=Yc("useSubmit"),{basename:s}=w.useContext(ct),u=em(),d=i.fetch,f=i.navigate;return w.useCallback(async(m,g={})=>{let{action:S,method:y,encType:j,formData:_,body:E}=mm(m,s);if(g.navigate===!1){let P=g.fetcherKey||Om();await d(P,u,g.action||S,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:_,body:E,formMethod:g.method||y,formEncType:g.encType||j,flushSync:g.flushSync})}else await f(g.action||S,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:_,body:E,formMethod:g.method||y,formEncType:g.encType||j,replace:g.replace,state:g.state,fromRouteId:u,flushSync:g.flushSync,viewTransition:g.viewTransition})},[d,f,s,u])}function Am(i,{relative:s}={}){let{basename:u}=w.useContext(ct),d=w.useContext(Pt);je(d,"useFormAction must be used inside a RouteContext");let[f]=d.matches.slice(-1),m={...Ur(i||".",{relative:s})},g=St();if(i==null){m.search=g.search;let S=new URLSearchParams(m.search),y=S.getAll("index");if(y.some(_=>_==="")){S.delete("index"),y.filter(E=>E).forEach(E=>S.append("index",E));let _=S.toString();m.search=_?`?${_}`:""}}return(!i||i===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:wt([u,m.pathname])),Or(m)}function Um(i,{relative:s}={}){let u=w.useContext($c);je(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=Yc("useViewTransitionState"),f=Ur(i,{relative:s});if(!u.isTransitioning)return!1;let m=Mt(u.currentLocation.pathname,d)||u.currentLocation.pathname,g=Mt(u.nextLocation.pathname,d)||u.nextLocation.pathname;return ni(f.pathname,g)!=null||ni(f.pathname,m)!=null}const Xc=w.createContext(void 0),Tc="saki_bee_cart";function $m({children:i}){const[s,u]=w.useState([]);w.useEffect(()=>{const j=localStorage.getItem(Tc);if(j)try{u(JSON.parse(j))}catch(_){console.error("Failed to parse cart from localStorage:",_)}},[]),w.useEffect(()=>{localStorage.setItem(Tc,JSON.stringify(s))},[s]);const d=(j,_)=>{u(E=>E.find(A=>A.productId===j.id)?E.map(A=>A.productId===j.id?{...A,quantity:A.quantity+_}:A):[...E,{productId:j.id,name:j.name,price:j.price,quantity:_,image:j.image}])},f=j=>{u(_=>_.filter(E=>E.productId!==j))},m=(j,_)=>{if(_<=0){f(j);return}u(E=>E.map(P=>P.productId===j?{...P,quantity:_}:P))},g=()=>{u([])},S=()=>s.reduce((j,_)=>j+_.price*_.quantity,0),y=()=>s.reduce((j,_)=>j+_.quantity,0);return a.jsx(Xc.Provider,{value:{cart:s,addToCart:d,removeFromCart:f,updateQuantity:m,clearCart:g,getTotalPrice:S,getTotalItems:y},children:i})}function wn(){const i=w.useContext(Xc);if(i===void 0)throw new Error("useCart must be used within CartProvider");return i}const Bm={bg:{navAbout:"За нас",navProducts:"Продукти",navContact:"Контакти",heroTitle:"Пчеларски магазин САКИ",heroSubtitle:"Над 20 години опит в пчеларството. Натурален мед от собствени пчелини в Долистово и Коркина, сертифициран от БАБХ. Кошери, центрофуги и пчеларски инвентар.",heroCtaProducts:"Разгледай продуктите",heroCtaContact:"Свържи се с нас",aboutTitle:"За нас",aboutSubtitle:"Семейна фирма с над 20 години опит в пчеларството и производството на натурален мед и пчелни продукти",storyTitle:"Нашата история",storyText1:"САКИ е семейна фирма, създадена с любов към пчеларството и чистия, натурален мед. Повече от 20 години се грижим за пчелите си и учим от природата. Натрупаният опит и внимание личат във всеки продукт, който предлагаме.",storyText2:"Започнахме скромно, но останахме верни на най-важното – качество, честност и грижа към природата. За нас пчеларството не е просто работа, а начин на живот.",apiariesTitle:"Нашите пчелини",apiariesText1:"Пчелините ни се намират в селата Долистово и Коркина – места с чиста природа и богато разнообразие от растения. Това създава отлични условия за здрави пчелни семейства и качествен мед.",apiariesText2:"Грижим се за всяко пчелно семейство с внимание и отговорност, за да ви предложим чист мед – без добавки и компромиси.",certificationTitle:"Сертификация и качество",certificationText1:"Нашият мед е сертифициран от БАБХ (Българска агенция по безопасност на храните), което гарантира неговото качество и чистота.",certificationText2:"При нас ще намерите продукти, на които можете да се доверите – натурални, полезни и направени с грижа.",cardExperience:"20+ години опит",cardExperienceText:"Дългогодишен опит в пчеларството и производството на натурален мед.",cardApiaries:"Собствени пчелини",cardApiariesText:"Разполагаме с пчелини в Долистово и Коркина – сред чиста и богата природа.",cardCertification:"Сертифицирано качество",cardCertificationText:"Медът ни е сертифициран от БАБХ и отговаря на всички стандарти за безопасност.",cardShop:"Магазин в Дупница",cardShopText:"Ще ни намерите на Кооперативния пазар, павилион 5 – за директни покупки и съвети.",cardProducts:"Богат асортимент",cardProductsText:"Предлагаме мед, кошери, инвентар, центрофуги и пчелни продукти.",cardDelivery:"Бърза доставка",cardDeliveryText:"Доставяме бързо и сигурно в цялата страна.",whyChooseTitle:"Защо да изберете САКИ?",whyChoose1:"Над 20 години опит в пчеларството",whyChoose2:"Собствени пчелини с натурален мед",whyChoose3:"Сертифицирано качество от БАБХ",whyChoose4:"Семейна фирма с честно отношение",whyChoose5:"Богат избор от продукти и оборудване",whyChoose6:"Консултации и помощ за пчелари",productsTitle:"Нашите продукти",productsSubtitle:"Разгледайте нашия асортимент от пчеларско оборудване и продукти",productInquiry:"Запитване →",productsCta:"Не намирате това, което търсите?",productsCtaButton:"Свържете се с нас",contactTitle:"Свържете се с нас",contactSubtitle:"Имате въпроси? Пишете ни – ще отговорим възможно най-скоро.",address:"Адрес",addressValue:"Кооперативен пазар, павилион 5, гр. Дупница",phone:"Телефон",phoneValue:"089 551 7056",email:"Имейл",emailValue:"info@sakimed.com",website:"Уебсайт",websiteValue:"www.sakimed.com",facebook:"Facebook",facebookValue:"facebook.com/Saki2008",workingHours:"Работно време",workingHoursWeekday:"Понеделник – Петък: 09:00 – 18:00",workingHoursSaturday:"Събота: 09:00 – 14:00",formName:"Име *",formNamePlaceholder:"Вашето име",formEmail:"Имейл *",formEmailPlaceholder:"your@email.com",formPhone:"Телефон",formPhonePlaceholder:"+359 88 123 4567",formMessage:"Съобщение *",formMessagePlaceholder:"Вашето съобщение...",formSubmit:"Изпрати",formSubmitting:"Изпращане...",formSuccess:"Съобщението е изпратено успешно! Ще се свържем с вас скоро.",formError:"Възникна грешка. Опитайте отново.",footerTagline:"Вашият партньор в пчеларството",footerRights:"© 2026 САКИ. Всички права запазени."},en:{navAbout:"About",navProducts:"Products",navContact:"Contact",heroTitle:"SAKI Beekeeping Shop",heroSubtitle:"Over 20 years of beekeeping experience. Natural honey from our own apiaries in Dolistovo and Korkina, certified by BABH. Hives, extractors, and beekeeping equipment.",heroCtaProducts:"Browse Products",heroCtaContact:"Contact Us",aboutTitle:"About Us",aboutSubtitle:"A family business with over 20 years of experience in beekeeping and natural honey production",storyTitle:"Our Story",storyText1:"SAKI is a family-run business built on a genuine love for beekeeping and pure, natural honey. For over 20 years, we have cared for our bees and learned from nature itself. That experience shows in every product we offer.",storyText2:"We started small, but stayed true to what matters most – quality, honesty, and respect for nature. For us, beekeeping is not just a job, but a way of life.",apiariesTitle:"Our Apiaries",apiariesText1:"Our apiaries are located in Dolistovo and Korkina – areas with clean nature and rich plant diversity, ideal for healthy bee colonies.",apiariesText2:"We care for every colony with attention and responsibility to deliver pure honey – with no additives and no compromises.",certificationTitle:"Certification & Quality",certificationText1:"Our honey is certified by BABH (Bulgarian Food Safety Agency), guaranteeing its quality and purity.",certificationText2:"With us, you’ll find products you can trust – natural, beneficial, and made with care.",cardExperience:"20+ Years Experience",cardExperienceText:"Extensive experience in beekeeping and natural honey production.",cardApiaries:"Own Apiaries",cardApiariesText:"We operate our own apiaries in clean and rich natural environments.",cardCertification:"Certified Quality",cardCertificationText:"Our honey meets all safety and quality standards.",cardShop:"Shop in Dupnitsa",cardShopText:"Visit us at the Cooperative Market, Pavilion 5 for direct purchases and advice.",cardProducts:"Wide Selection",cardProductsText:"Honey, hives, equipment, extractors, and bee products.",cardDelivery:"Fast Delivery",cardDeliveryText:"We deliver quickly and reliably across the country.",whyChooseTitle:"Why Choose SAKI?",whyChoose1:"Over 20 years of beekeeping experience",whyChoose2:"Own apiaries with natural honey",whyChoose3:"Certified quality by BABH",whyChoose4:"Family business built on trust",whyChoose5:"Wide range of products and equipment",whyChoose6:"Support and advice for beekeepers",productsTitle:"Our Products",productsSubtitle:"Explore our range of beekeeping equipment and products",productInquiry:"Inquiry →",productsCta:"Can’t find what you need?",productsCtaButton:"Contact Us",contactTitle:"Contact Us",contactSubtitle:"Have questions? Get in touch and we’ll reply as soon as possible.",address:"Address",addressValue:"Cooperative Market, Pavilion 5, Dupnitsa",phone:"Phone",phoneValue:"089 551 7056",email:"Email",emailValue:"info@sakimed.com",website:"Website",websiteValue:"www.sakimed.com",facebook:"Facebook",facebookValue:"facebook.com/Saki2008",workingHours:"Working Hours",workingHoursWeekday:"Monday – Friday: 09:00 – 18:00",workingHoursSaturday:"Saturday: 09:00 – 14:00",formName:"Name *",formNamePlaceholder:"Your name",formEmail:"Email *",formEmailPlaceholder:"your@email.com",formPhone:"Phone",formPhonePlaceholder:"+359 88 123 4567",formMessage:"Message *",formMessagePlaceholder:"Your message...",formSubmit:"Send",formSubmitting:"Sending...",formSuccess:"Message sent successfully! We’ll get back to you soon.",formError:"Something went wrong. Please try again.",footerTagline:"Your trusted partner in beekeeping",footerRights:"© 2026 SAKI. All rights reserved."}},Jc=w.createContext(void 0);function Hm({children:i}){const[s,u]=w.useState(()=>{if(typeof window<"u"){const f=localStorage.getItem("language");return f||(navigator.language.split("-")[0]==="bg"?"bg":"en")}return"bg"});w.useEffect(()=>{localStorage.setItem("language",s),document.documentElement.lang=s},[s]);const d=f=>Bm[s][f]||f;return a.jsx(Jc.Provider,{value:{language:s,setLanguage:u,t:d},children:i})}function kn(){const i=w.useContext(Jc);if(!i)throw new Error("useLanguage must be used within a LanguageProvider");return i}function Wm(){return a.jsxs("div",{className:"uk-flag",children:[a.jsx("div",{className:"bg"}),a.jsx("div",{className:"diag white d1"}),a.jsx("div",{className:"diag white d2"}),a.jsx("div",{className:"diag red d1"}),a.jsx("div",{className:"diag red d2"}),a.jsx("div",{className:"cross white horizontal"}),a.jsx("div",{className:"cross white vertical"}),a.jsx("div",{className:"cross red horizontal"}),a.jsx("div",{className:"cross red vertical"}),a.jsx("style",{children:`
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
      `})]})}function Vm(){const{language:i,setLanguage:s}=kn();return a.jsxs("div",{className:"language-switcher",children:[a.jsx("button",{className:`lang-btn ${i==="en"?"active":""}`,onClick:()=>s("en"),"aria-label":"English",title:"English",children:a.jsx(Wm,{})}),a.jsx("button",{className:`lang-btn ${i==="bg"?"active":""}`,onClick:()=>s("bg"),"aria-label":"Български",title:"Български",children:a.jsxs("div",{className:"flag-bg",children:[a.jsx("div",{className:"bg-stripe white"}),a.jsx("div",{className:"bg-stripe green"}),a.jsx("div",{className:"bg-stripe red"})]})}),a.jsx("style",{children:`
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
      `})]})}function qm(){const[i,s]=w.useState(!1),{t:u}=kn(),{getTotalItems:d}=wn(),f=xn(),m=St(),g=S=>{if(s(!1),m.pathname==="/"){const y=document.getElementById(S);y&&y.scrollIntoView({behavior:"smooth"})}else f("/"),setTimeout(()=>{const y=document.getElementById(S);y&&y.scrollIntoView({behavior:"smooth"})},100)};return a.jsxs("header",{className:"header",children:[a.jsxs("div",{className:"container header-container",children:[a.jsx(Ot,{to:"/#Hero",className:"logo",onClick:S=>{s(!1),m.pathname==="/"&&(S.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))},children:a.jsx("img",{src:"/bee-logo.jpg",alt:"САКИ Лого",className:"logo-img"})}),a.jsxs("nav",{className:`nav ${i?"nav-open":""}`,children:[a.jsx("button",{className:"nav-link",onClick:()=>g("about"),style:{background:"none",border:"none",cursor:"pointer"},children:u("navAbout")}),a.jsx(Ot,{to:"/products",className:"nav-link",onClick:()=>s(!1),children:u("navProducts")}),a.jsx("button",{className:"nav-link",onClick:()=>g("contact"),style:{background:"none",border:"none",cursor:"pointer"},children:u("navContact")}),a.jsxs(Ot,{to:"/cart",className:"nav-link cart-link",onClick:()=>s(!1),children:["🛒 Количка",d()>0&&a.jsx("span",{className:"cart-badge",children:d()})]}),a.jsx("div",{className:"nav-lang-switcher",children:a.jsx(Vm,{})})]}),a.jsx("button",{className:"menu-toggle",onClick:()=>s(!i),"aria-label":"Toggle menu",children:a.jsx("span",{className:`hamburger ${i?"open":""}`})})]}),a.jsx("style",{children:`
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
          whitespace: nowrap;
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
      `})]})}function Qm(){const{t:i,language:s}=kn();return a.jsxs("footer",{className:"footer",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"footer-grid",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx("div",{className:"footer-logo",children:a.jsx("img",{src:"/bee-logo.jpg",alt:"САКИ Лого",style:{height:"40px",width:"40px",objectFit:"contain"}})}),a.jsx("p",{children:s==="bg"?"Професионален пчеларски магазин в Дупница. Оборудване и консумативи за всякакви пчеларски нужди.":"Professional beekeeping shop in Dupnitsa. Equipment and supplies for all beekeeping needs."})]}),a.jsxs("div",{className:"footer-links",children:[a.jsx("h4",{children:s==="bg"?"Бързи връзки":"Quick Links"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#about",children:i("navAbout")})}),a.jsx("li",{children:a.jsx("a",{href:"#products",children:i("navProducts")})}),a.jsx("li",{children:a.jsx("a",{href:"#contact",children:i("navContact")})}),a.jsx("li",{children:a.jsx(Ot,{to:"/admin",style:{color:"rgba(255, 255, 255, 0.3)",fontSize:"0.8rem"},children:"Админ"})})]})]}),a.jsxs("div",{className:"footer-contact",children:[a.jsx("h4",{children:s==="bg"?"Контакти":"Contact"}),a.jsxs("ul",{children:[a.jsxs("li",{children:["📍 ",s==="bg"?"Ж.к. Дупница, Кооперативен пазар":"Dupnitsa, Cooperative Market"]}),a.jsx("li",{children:"📞 089 551 7056"}),a.jsx("li",{children:"✉️ Info@sakimed.com"}),a.jsx("li",{children:"🌐 www.sakimed.com"}),a.jsxs("li",{children:["📘 ",a.jsx("a",{href:"https://facebook.com/Saki2008",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})]})]})]})]}),a.jsx("div",{className:"footer-bottom",children:a.jsxs("p",{children:["© ",new Date().getFullYear()," SAKI - ",s==="bg"?"Дупница":"Dupnitsa",". ",i("footerRights")]})})]}),a.jsx("style",{children:`
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
      `})]})}function Km(){const{t:i,language:s}=kn();return a.jsxs("section",{className:"hero",children:[a.jsxs("div",{className:"hero-background",children:[a.jsx("img",{src:"https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:s==="bg"?"Пчеларски магазин САКИ - Натурален пчелен мед и пчеларски инвентар - Дупница":"SAKI Beekeeping Shop - Natural honey and beekeeping equipment - Dupnitsa",className:"hero-image"}),a.jsx("div",{className:"hero-overlay"}),a.jsx("div",{className:"hero-pattern"})]}),a.jsxs("div",{className:"container hero-content",children:[a.jsxs("div",{className:"hero-text",children:[a.jsx("h1",{className:"hero-title",children:i("heroTitle")}),a.jsx("p",{className:"hero-subtitle",children:i("heroSubtitle")}),a.jsxs("div",{className:"hero-cta",children:[a.jsx(Ot,{to:"/products?category=honey",className:"btn btn-primary",children:"Пчелните ни продукти"}),a.jsx(Ot,{to:"/products?category=equipment",className:"btn btn-secondary",children:"Всичко за пчеларя"})]})]}),a.jsx("div",{className:"hero-visual",children:a.jsx("img",{src:"/big-bee.png",alt:s==="bg"?"Пчела":"Bee",className:"bee-icon"})})]}),a.jsx("style",{children:`
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
      `})]})}function Gm(){const{t:i,language:s}=kn();return a.jsxs("section",{id:"about",className:"section about",children:[a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:i("aboutTitle")}),a.jsx("p",{className:"section-subtitle",children:i("aboutSubtitle")}),a.jsx("div",{className:"about-hero-image",children:a.jsx("img",{src:"https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:s==="bg"?"Семейна пчелна ферма САКИ в Долистово и Коркина - натурален пчелен мед":"SAKI family bee farm in Dolistovo and Korkina - natural honey"})}),a.jsxs("div",{className:"about-story",children:[a.jsxs("div",{className:"story-section",children:[a.jsx("h3",{children:i("storyTitle")}),a.jsx("p",{children:i("storyText1")}),a.jsx("p",{children:i("storyText2")})]}),a.jsxs("div",{className:"story-section",children:[a.jsx("h3",{children:i("apiariesTitle")}),a.jsxs("p",{children:[s==="bg"?"Пчелините ни са разположени в селата":"Our apiaries are located in the villages of"," ",a.jsx("strong",{children:s==="bg"?"Долистово и Коркина":"Dolistovo and Korkina"}),", ",s==="bg"?"където природата предоставя перфектни условия за развитие на здравите пчелни семейства. Тези региони са известни с разнообразието на цветя и чистотата на окръжаващата среда, което гарантира нашия":"where nature provides perfect conditions for developing healthy bee colonies. These regions are known for their flower diversity and clean environment, which guarantees our"," ",a.jsx("strong",{children:s==="bg"?"натурален пчелен мед":"natural honey"})," ",s==="bg"?"от най-висока категория.":"of the highest quality."]}),a.jsx("p",{children:s==="bg"?"Всяка пчелна колония се грижи с внимание и опит, осигурявайки оптимални условия за производство на чист мед без химикали и добавки.":"Each bee colony is cared for with attention and experience, ensuring optimal conditions for producing pure honey without chemicals or additives."})]}),a.jsxs("div",{className:"story-section",children:[a.jsx("h3",{children:i("certificationTitle")}),a.jsxs("p",{children:[s==="bg"?"Нашия":"Our"," ",a.jsx("strong",{children:s==="bg"?"пчелен мед е сертифициран от БАБХ":"honey is certified by BABH"})," ",s==="bg"?"(Българска агенция по безопасност на храните), което гарантира качеството, чистотата и съответствието с всички международни стандарти. Сертификацията от БАБХ е доказателство за нашия ангажимент към здравето и доверието на нашите клиенти.":"(Bulgarian Food Safety Agency), which guarantees quality, purity, and compliance with all international standards. BABH certification is proof of our commitment to the health and trust of our customers."]}),a.jsx("p",{children:s==="bg"?"Предлагаме пчелни продукти, които можете да консумирате с пълна уверност в тяхната чистота и полезност.":"We offer bee products that you can consume with complete confidence in their purity and benefits."})]})]}),a.jsxs("div",{className:"about-grid",children:[a.jsxs("div",{className:"about-card",children:[a.jsx("div",{className:"about-icon",children:"🐝"}),a.jsx("h3",{children:i("cardExperience")}),a.jsx("p",{children:i("cardExperienceText")})]}),a.jsxs("div",{className:"about-card",children:[a.jsx("div",{className:"about-icon",children:"🏡"}),a.jsx("h3",{children:i("cardApiaries")}),a.jsx("p",{children:i("cardApiariesText")})]}),a.jsxs("div",{className:"about-card",children:[a.jsx("div",{className:"about-icon",children:"✅"}),a.jsx("h3",{children:i("cardCertification")}),a.jsx("p",{children:i("cardCertificationText")})]}),a.jsxs("div",{className:"about-card",children:[a.jsx("div",{className:"about-icon",children:"🏪"}),a.jsx("h3",{children:i("cardShop")}),a.jsx("p",{children:i("cardShopText")})]}),a.jsxs("div",{className:"about-card",children:[a.jsx("div",{className:"about-icon",children:"📦"}),a.jsx("h3",{children:i("cardProducts")}),a.jsx("p",{children:i("cardProductsText")})]}),a.jsxs("div",{className:"about-card",children:[a.jsx("div",{className:"about-icon",children:"🚚"}),a.jsx("h3",{children:i("cardDelivery")}),a.jsx("p",{children:i("cardDeliveryText")})]})]}),a.jsx("div",{className:"about-info",children:a.jsxs("div",{className:"about-info-content",children:[a.jsx("h3",{children:i("whyChooseTitle")}),a.jsxs("ul",{className:"about-list",children:[a.jsx("li",{children:i("whyChoose1")}),a.jsx("li",{children:i("whyChoose2")}),a.jsx("li",{children:i("whyChoose3")}),a.jsx("li",{children:i("whyChoose4")}),a.jsx("li",{children:i("whyChoose5")}),a.jsx("li",{children:i("whyChoose6")})]})]})})]}),a.jsx("style",{children:`
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
      `})]})}const Qn="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 420 280%22%3E%3Crect width=%22420%22 height=%22280%22 fill=%22%23f8fafc%22/%3E%3Ctext x=%22210%22 y=%22140%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%2390a4ae%22%3EПродукт%3C/text%3E%3C/svg%3E",Ym=[{id:1,name:"Кошери и рамки",description:"Различни типове кошери - Дадан, Лангстрот, Uniwersalni рамки и восъчни листове",icon:"🏠",image:Qn},{id:2,name:"Защитно облекло",description:"Пчеларски костюми, ръкавици, мрежи и други средства за защита",icon:"👕",image:Qn},{id:3,name:"Центрофуги",description:"Ръчни и електрически центрофуги за ефективно извличане на мед",icon:"🍯",image:Qn},{id:4,name:"Инвентар и инструменти",description:"Пчеларски ножове, вилици, димници и друг специализиран инвентар",icon:"🔧",image:Qn},{id:5,name:"Подхранващи сиропи",description:"Качествени подхранващи сиропи и добавки за пчелите",icon:"🫗",image:Qn},{id:6,name:"Прополисов мехлем",description:"Природен прополисов мехлем за локална грижа и регенерация",icon:"🧴",image:Qn}];function Xm(){const{t:i}=kn();return a.jsxs("section",{id:"products",className:"section products",children:[a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:i("productsTitle")}),a.jsx("p",{className:"section-subtitle",children:i("productsSubtitle")}),a.jsx("div",{className:"products-grid",children:Ym.map(s=>a.jsxs("div",{className:"product-card",children:[a.jsx("div",{className:"product-image",children:a.jsx("img",{src:s.image,alt:s.name})}),a.jsx("div",{className:"product-icon",children:s.icon}),a.jsx("h3",{className:"product-name",children:s.name}),a.jsx("p",{className:"product-description",children:s.description}),a.jsx("a",{href:"#contact",className:"product-link",children:i("productInquiry")})]},s.id))}),a.jsxs("div",{className:"products-cta",children:[a.jsx("p",{children:i("productsCta")}),a.jsx(Ot,{to:"/products",className:"btn btn-primary",children:i("productsCtaButton")})]})]}),a.jsx("style",{children:`
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
      `})]})}function Jm(){const{t:i}=kn(),[s,u]=w.useState({name:"",email:"",phone:"",message:""}),[d,f]=w.useState({type:null,message:""}),[m,g]=w.useState(!1),S=async j=>{j.preventDefault(),g(!0),f({type:null,message:""});try{const _=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),E=await _.json();_.ok?(f({type:"success",message:i("formSuccess")}),u({name:"",email:"",phone:"",message:""})):f({type:"error",message:E.message||i("formError")})}catch{f({type:"error",message:i("formError")})}finally{g(!1)}},y=j=>{const{name:_,value:E}=j.target;u(P=>({...P,[_]:E}))};return a.jsxs("section",{id:"contact",className:"section contact",children:[a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:i("contactTitle")}),a.jsx("p",{className:"section-subtitle",children:i("contactSubtitle")}),a.jsxs("div",{className:"contact-grid",children:[a.jsxs("div",{className:"contact-info",children:[a.jsxs("div",{className:"contact-item",children:[a.jsx("div",{className:"contact-icon",children:"📍"}),a.jsxs("div",{children:[a.jsx("h3",{children:i("address")}),a.jsx("p",{children:i("addressValue")})]})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx("div",{className:"contact-icon",children:"📞"}),a.jsxs("div",{children:[a.jsx("h3",{children:i("phone")}),a.jsx("p",{children:i("phoneValue")})]})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx("div",{className:"contact-icon",children:"✉️"}),a.jsxs("div",{children:[a.jsx("h3",{children:i("email")}),a.jsx("p",{children:i("emailValue")})]})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx("div",{className:"contact-icon",children:"🌐"}),a.jsxs("div",{children:[a.jsx("h3",{children:i("website")}),a.jsx("p",{children:i("websiteValue")})]})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx("div",{className:"contact-icon",children:"📘"}),a.jsxs("div",{children:[a.jsx("h3",{children:i("facebook")}),a.jsx("p",{children:a.jsx("a",{href:"https://facebook.com/Saki2008",target:"_blank",rel:"noopener noreferrer",children:i("facebookValue")})})]})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx("div",{className:"contact-icon",children:"🕐"}),a.jsxs("div",{children:[a.jsx("h3",{children:i("workingHours")}),a.jsx("p",{children:i("workingHoursWeekday")}),a.jsx("p",{children:i("workingHoursSaturday")})]})]})]}),a.jsxs("form",{className:"contact-form",onSubmit:S,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"name",children:i("formName")}),a.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:y,required:!0,placeholder:i("formNamePlaceholder")})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:i("formEmail")}),a.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:y,required:!0,placeholder:i("formEmailPlaceholder")})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"phone",children:i("formPhone")}),a.jsx("input",{type:"tel",id:"phone",name:"phone",value:s.phone,onChange:y,placeholder:i("formPhonePlaceholder")})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"message",children:i("formMessage")}),a.jsx("textarea",{id:"message",name:"message",value:s.message,onChange:y,required:!0,placeholder:i("formMessagePlaceholder"),rows:5})]}),a.jsx("button",{type:"submit",className:"btn btn-primary",disabled:m,children:i(m?"formSubmitting":"formSubmit")}),d.type&&a.jsx("div",{className:`form-status form-status-${d.type}`,children:d.message})]})]})]}),a.jsx("style",{children:`
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
      `})]})}const Zm=(...i)=>{typeof window<"u"&&(typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),window.gtag(...i))},eh=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function th(i){return i.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(s,u,d)=>u>0&&u+s.length!==d.length&&s.search(eh)>-1&&d.charAt(u-2)!==":"&&(d.charAt(u+s.length)!=="-"||d.charAt(u-1)==="-")&&d.charAt(u-1).search(/[^\s-]/)<0?s.toLowerCase():s.substr(1).search(/[A-Z]|\../)>-1?s:s.charAt(0).toUpperCase()+s.substr(1))}function nh(i){return typeof i=="string"&&i.indexOf("@")!==-1}const rh="REDACTED (Potential Email Address)";function oh(i){return nh(i)?(console.warn("This arg looks like an email address, redacting."),rh):i}function aa(i="",s=!0,u=!0){let d=i||"";return s&&(d=th(i)),u&&(d=oh(d)),d}var ih=class{constructor(){we(this,"isInitialized");we(this,"_testMode");we(this,"_currentMeasurementId");we(this,"_hasLoadedGA");we(this,"_isQueuing");we(this,"_queueGtag");we(this,"reset",()=>{this.isInitialized=!1,this._testMode=!1,this._currentMeasurementId="",this._hasLoadedGA=!1,this._isQueuing=!1,this._queueGtag=[]});we(this,"_gtag",(...i)=>{this._testMode?this._queueGtag.push(i):this._isQueuing?this._queueGtag.push(i):Zm(...i)});we(this,"_loadGA",(i,s,u="https://www.googletagmanager.com/gtag/js")=>{if(!(typeof window>"u"||typeof document>"u")&&!this._hasLoadedGA){const d=document.createElement("script");d.async=!0,d.src=`${u}?id=${i}`,s&&d.setAttribute("nonce",s),document.body.appendChild(d),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},this._hasLoadedGA=!0}});we(this,"_toGtagOptions",i=>{if(!i)return;const s={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"};return Object.entries(i).reduce((u,[d,f])=>(s[d]?u[s[d]]=f:u[d]=f,u),{})});we(this,"initialize",(i,s={})=>{if(!i)throw new Error("Require GA_MEASUREMENT_ID");const u=typeof i=="string"?[{trackingId:i}]:i;this._currentMeasurementId=u[0].trackingId;const{gaOptions:d,gtagOptions:f,nonce:m,testMode:g=!1,gtagUrl:S}=s;if(this._testMode=g,g||this._loadGA(this._currentMeasurementId,m,S),this.isInitialized||(this._gtag("js",new Date),u.forEach(y=>{const j={...this._toGtagOptions({...d,...y.gaOptions}),...f,...y.gtagOptions};Object.keys(j).length?this._gtag("config",y.trackingId,j):this._gtag("config",y.trackingId)})),this.isInitialized=!0,!g){const y=[...this._queueGtag];for(this._queueGtag=[],this._isQueuing=!1;y.length;){const j=y.shift();this._gtag(...j),j[0]==="get"&&(this._isQueuing=!0)}}});we(this,"set",i=>{if(!i){console.warn("`fieldsObject` is required in .set()");return}if(typeof i!="object"){console.warn("Expected `fieldsObject` arg to be an Object");return}Object.keys(i).length===0&&console.warn("empty `fieldsObject` given to .set()"),this._gaCommand("set",i)});we(this,"_gaCommandSendEvent",(i,s,u,d,f)=>{this._gtag("event",s,{event_category:i,event_label:u,value:d,...f&&{non_interaction:f.nonInteraction},...this._toGtagOptions(f)})});we(this,"_gaCommandSendEventParameters",(...i)=>{if(typeof i[0]=="string")this._gaCommandSendEvent(...i.slice(1));else{const{eventCategory:s,eventAction:u,eventLabel:d,eventValue:f,hitType:m,...g}=i[0];this._gaCommandSendEvent(s,u,d,f,g)}});we(this,"_gaCommandSendTiming",(i,s,u,d)=>{this._gtag("event","timing_complete",{name:s,value:u,event_category:i,event_label:d})});we(this,"_gaCommandSendPageview",(i,s)=>{if(s&&Object.keys(s).length){const{title:u,location:d,...f}=this._toGtagOptions(s)||{};this._gtag("event","page_view",{...i&&{page_path:i},...u&&{page_title:u},...d&&{page_location:d},...f})}else i?this._gtag("event","page_view",{page_path:i}):this._gtag("event","page_view")});we(this,"_gaCommandSendPageviewParameters",(...i)=>{if(typeof i[0]=="string")this._gaCommandSendPageview(...i.slice(1));else{const{page:s,hitType:u,...d}=i[0];this._gaCommandSendPageview(s,d)}});we(this,"_gaCommandSend",(...i)=>{const s=typeof i[0]=="string"?i[0]:i[0].hitType;switch(s){case"event":this._gaCommandSendEventParameters(...i);break;case"pageview":this._gaCommandSendPageviewParameters(...i);break;case"timing":this._gaCommandSendTiming(...i.slice(1));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn(`Unsupported send command: ${s}`);break;default:console.warn(`Send command doesn't exist: ${s}`)}});we(this,"_gaCommandSet",(...i)=>{typeof i[0]=="string"&&(i[0]={[i[0]]:i[1]}),this._gtag("set",this._toGtagOptions(i[0]))});we(this,"_gaCommand",(i,...s)=>{switch(i){case"send":this._gaCommandSend(...s);break;case"set":this._gaCommandSet(...s);break;default:console.warn(`Command doesn't exist: ${i}`)}});we(this,"ga",(...i)=>{if(typeof i[0]=="string")this._gaCommand(...i);else{const[s]=i;this._gtag("get",this._currentMeasurementId,"client_id",u=>{this._isQueuing=!1;const d=this._queueGtag;for(s({get:f=>f==="clientId"?u:f==="trackingId"?this._currentMeasurementId:f==="apiVersion"?"1":void 0});d.length;){const f=d.shift();this._gtag(...f)}}),this._isQueuing=!0}return this.ga});we(this,"event",(i,s)=>{if(typeof i=="string")this._gtag("event",i,this._toGtagOptions(s));else{const{action:u,category:d,label:f,value:m,nonInteraction:g,transport:S}=i;if(!d||!u){console.warn("args.category AND args.action are required in event()");return}const y={hitType:"event",eventCategory:aa(d),eventAction:aa(u)};f&&(y.eventLabel=aa(f)),typeof m<"u"&&(typeof m!="number"?console.warn("Expected `args.value` arg to be a Number."):y.eventValue=m),typeof g<"u"&&(typeof g!="boolean"?console.warn("`args.nonInteraction` must be a boolean."):y.nonInteraction=g),typeof S<"u"&&(typeof S!="string"?console.warn("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(S)===-1&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),y.transport=S)),this._gaCommand("send",y)}});we(this,"send",i=>{this._gaCommand("send",i)});this.reset()}gtag(...i){this._gtag(...i)}},lh=new ih,Zc=lh;function ah(){return w.useEffect(()=>{Zc.send({hitType:"pageview",page:window.location.pathname+window.location.search})},[]),a.jsxs(a.Fragment,{children:[a.jsx(Km,{}),a.jsx(Gm,{}),a.jsx(Xm,{}),a.jsx(Jm,{})]})}function sh({id:i,name:s,price:u,image:d,onViewDetails:f}){const{addToCart:m}=wn(),g=y=>{y.stopPropagation(),m({id:i,name:s,price:u,image:d},1)},S=()=>{f&&f(i)};return a.jsxs("div",{className:"product-card-shopping",onClick:S,children:[a.jsx("div",{className:"product-image-container",children:a.jsx("img",{src:d,alt:s,className:"product-image"})}),a.jsxs("div",{className:"product-card-content",children:[a.jsx("h3",{className:"product-card-name",children:s}),a.jsxs("div",{className:"product-card-price",children:[u," лв"]}),a.jsxs("div",{className:"product-card-actions",children:[f&&a.jsx("button",{className:"btn btn-link",onClick:y=>{y.stopPropagation(),f(i)},children:"Детаили"}),a.jsx("button",{className:"btn btn-primary",onClick:g,children:"Добави в количката"})]})]}),a.jsx("style",{children:`
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
      `})]})}const xt="http://localhost:3001",uh="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 240%22%3E%3Crect width=%22320%22 height=%22240%22 fill=%22%23f6f8fb%22/%3E%3Ctext x=%22160%22 y=%22120%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%23999%22%3EБез изображение%3C/text%3E%3C/svg%3E";function wa(i){if(!i)return uh;const s=i.trim();return s.startsWith("/uploads/")?`${xt}${s}`:s.startsWith("uploads/")?`${xt}/${s}`:(s.startsWith(`${xt}/uploads/`)||/^https?:\/\//.test(s),s)}function ch(i){return i?i.startsWith(xt)?i.substring(xt.length):i:""}function dh(){const i=xn(),[s]=Fm(),[u,d]=w.useState([]),[f,m]=w.useState(!0),[g,S]=w.useState(""),[y,j]=w.useState("all");w.useEffect(()=>{const E=s.get("category");(E==="honey"||E==="equipment")&&j(E)},[s]),w.useEffect(()=>{(async()=>{try{const P=await fetch(`${xt}/api/products`);if(!P.ok)throw new Error("Failed to fetch products");const B=(await P.json()).map(I=>({...I,image:wa(I.image)}));d(B)}catch(P){S(P instanceof Error?P.message:"An error occurred")}finally{m(!1)}})()},[]);const _=y==="all"?u:u.filter(E=>E.category===y);return a.jsxs("div",{className:"products-page",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"products-header",children:[a.jsx("h1",{children:"Наши продукти"}),a.jsx("p",{children:"Най-качествено оборудване и мед от нашата пасека"})]}),g&&a.jsx("div",{className:"error-message",children:g}),f?a.jsx("div",{className:"loading",children:"Зареждане..."}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"category-filters",children:[a.jsx("button",{className:`filter-btn ${y==="all"?"active":""}`,onClick:()=>j("all"),children:"Всички продукти"}),a.jsx("button",{className:`filter-btn ${y==="honey"?"active":""}`,onClick:()=>j("honey"),children:"🍯 Пчелни продукти"}),a.jsx("button",{className:`filter-btn ${y==="equipment"?"active":""}`,onClick:()=>j("equipment"),children:"🔧 За пчелари"})]}),_.length===0?a.jsx("div",{className:"no-products",children:"Няма намерени продукти в тази категория"}):a.jsx("div",{className:"products-grid",children:_.map(E=>a.jsx(sh,{id:E.id,name:E.name,price:E.price,image:E.image,onViewDetails:P=>i(`/products/${P}`)},E.id))})]})]}),a.jsx("style",{children:`
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
      `})]})}function fh(){const{id:i}=Wp(),s=xn(),{addToCart:u}=wn(),[d,f]=w.useState(null),[m,g]=w.useState(!0),[S,y]=w.useState(""),[j,_]=w.useState(1),[E,P]=w.useState(!1);w.useEffect(()=>{(async()=>{try{const D=await fetch(`${xt}/api/products/${i}`);if(!D.ok)throw new Error("Product not found");const q=await D.json();q.image=wa(q.image),f(q)}catch(D){y(D instanceof Error?D.message:"An error occurred")}finally{g(!1)}})()},[i]);const A=()=>{d&&(u(d,j),P(!0),setTimeout(()=>P(!1),2e3))};if(m)return a.jsx("div",{className:"product-detail-page",children:a.jsx("div",{className:"container",children:a.jsx("div",{className:"loading",children:"Зареждане..."})})});if(S||!d)return a.jsx("div",{className:"product-detail-page",children:a.jsxs("div",{className:"container",children:[a.jsx("div",{className:"error-message",children:S||"Product not found"}),a.jsx("button",{className:"btn btn-primary",onClick:()=>s("/products"),children:"Назад към продукти"})]})});const B=d.category==="honey"?"🍯 Пчелни продукти":"🔧 За пчелари",I=d.stock>0;return a.jsxs("div",{className:"product-detail-page",children:[a.jsxs("div",{className:"container",children:[a.jsx("button",{className:"back-btn",onClick:()=>s("/products"),children:"← Назад"}),a.jsxs("div",{className:"product-detail-container",children:[a.jsx("div",{className:"product-detail-image",children:a.jsx("img",{src:d.image,alt:d.name})}),a.jsxs("div",{className:"product-detail-content",children:[a.jsx("div",{className:"breadcrumb",children:a.jsx("span",{className:"category-badge",children:B})}),a.jsx("h1",{className:"product-detail-name",children:d.name}),a.jsxs("div",{className:"product-detail-price",children:[a.jsx("span",{className:"price-amount",children:d.price}),a.jsx("span",{className:"price-currency",children:"лв"})]}),a.jsxs("div",{className:"product-detail-description",children:[a.jsx("h3",{children:"Описание"}),a.jsx("p",{children:d.description})]}),!I&&a.jsx("div",{className:"stock-warning",children:"Няма наличност - скоро ще е достъпно"}),a.jsxs("div",{className:"product-detail-actions",children:[a.jsxs("div",{className:"quantity-selector",children:[a.jsx("label",{htmlFor:"quantity",children:"Количество:"}),a.jsxs("div",{className:"quantity-controls",children:[a.jsx("button",{className:"qty-btn",onClick:()=>_(Math.max(1,j-1)),disabled:j===1,children:"−"}),a.jsx("input",{id:"quantity",type:"number",min:"1",value:j,onChange:z=>_(parseInt(z.target.value,10)||1),className:"qty-input"}),a.jsx("button",{className:"qty-btn",onClick:()=>_(j+1),children:"+"})]})]}),a.jsx("button",{className:"btn btn-primary btn-large",onClick:A,disabled:!I,children:"Добави в количката"}),E&&a.jsx("div",{className:"added-message",children:"✓ Добавено успешно!"})]}),a.jsxs("div",{className:"product-info",children:[a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"info-label",children:"Наличност:"}),a.jsx("span",{className:"info-value",children:I?`${d.stock} бр.`:"Временно нямаме"})]}),a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"info-label",children:"Категория:"}),a.jsx("span",{className:"info-value",children:B})]})]})]})]})]}),a.jsx("style",{children:`
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
      `})]})}function ph({item:i}){const{updateQuantity:s,removeFromCart:u}=wn();return a.jsxs("div",{className:"cart-item",children:[a.jsx("div",{className:"cart-item-image",children:a.jsx("img",{src:i.image,alt:i.name})}),a.jsxs("div",{className:"cart-item-details",children:[a.jsx("h3",{className:"cart-item-name",children:i.name}),a.jsxs("p",{className:"cart-item-price",children:[i.price," лв"]})]}),a.jsxs("div",{className:"cart-item-quantity",children:[a.jsx("button",{className:"qty-btn",onClick:()=>s(i.productId,i.quantity-1),children:"−"}),a.jsx("input",{type:"number",min:"1",value:i.quantity,onChange:d=>s(i.productId,parseInt(d.target.value,10)||1),className:"qty-input"}),a.jsx("button",{className:"qty-btn",onClick:()=>s(i.productId,i.quantity+1),children:"+"})]}),a.jsxs("div",{className:"cart-item-subtotal",children:[(i.price*i.quantity).toFixed(2)," лв"]}),a.jsx("button",{className:"cart-item-remove",onClick:()=>u(i.productId),children:"×"}),a.jsx("style",{children:`
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
      `})]})}function mh(){const i=xn(),{cart:s,getTotalPrice:u,clearCart:d}=wn();return s.length===0?a.jsxs("div",{className:"cart-page",children:[a.jsxs("div",{className:"container",children:[a.jsx("h1",{children:"Вашата количка"}),a.jsxs("div",{className:"empty-cart",children:[a.jsx("div",{className:"empty-icon",children:"🛒"}),a.jsx("p",{children:"Вашата количка е празна"}),a.jsx("button",{className:"btn btn-primary",onClick:()=>i("/products"),children:"Продължи с пазаруване"})]})]}),a.jsx("style",{children:`
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
        `})]}):a.jsxs("div",{className:"cart-page",children:[a.jsxs("div",{className:"container",children:[a.jsx("h1",{children:"Вашата количка"}),a.jsxs("div",{className:"cart-layout",children:[a.jsxs("div",{className:"cart-items-section",children:[a.jsxs("div",{className:"cart-items-header",children:[a.jsxs("span",{children:[s.length," продукт",s.length!==1?"и":""]}),a.jsx("button",{className:"link-btn",onClick:d,children:"Изчисти количката"})]}),a.jsx("div",{className:"cart-items",children:s.map(f=>a.jsx(ph,{item:f},f.productId))})]}),a.jsx("div",{className:"cart-summary",children:a.jsxs("div",{className:"summary-card",children:[a.jsx("h3",{children:"Резюме на поръчката"}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Междинен общо:"}),a.jsxs("span",{children:[u().toFixed(2)," лв"]})]}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Доставка:"}),a.jsx("span",{className:"delivery-note",children:"Зависи от адреса"})]}),a.jsx("div",{className:"summary-divider"}),a.jsxs("div",{className:"summary-row total",children:[a.jsx("span",{children:"Общо:"}),a.jsxs("span",{children:[u().toFixed(2)," лв"]})]}),a.jsx("button",{className:"btn btn-primary btn-block",onClick:()=>i("/checkout"),children:"Към плащане"}),a.jsx("button",{className:"btn btn-secondary btn-block",onClick:()=>i("/products"),children:"Продължи с пазаруване"}),a.jsx("div",{className:"secure-badge",children:"🔒 Сигурна поръчка"})]})})]})]}),a.jsx("style",{children:`
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
      `})]})}function hh({onOrderSuccess:i}){const{cart:s,getTotalPrice:u,clearCart:d}=wn(),[f,m]=w.useState(!1),[g,S]=w.useState(""),[y,j]=w.useState(!1),[_,E]=w.useState({customerName:"",phone:"",address:""}),P=B=>{const{name:I,value:z}=B.target;E(D=>({...D,[I]:z}))},A=async B=>{B.preventDefault(),S(""),m(!0);try{const I=await fetch("http://localhost:3001/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerName:_.customerName,phone:_.phone,address:_.address,items:s.map(D=>({productId:D.productId,quantity:D.quantity,price:D.price})),totalPrice:u()})});if(!I.ok){const D=await I.json();throw new Error(D.error||"Failed to create order")}const z=await I.json();j(!0),d(),i&&i(z.order.id),E({customerName:"",phone:"",address:""})}catch(I){S(I instanceof Error?I.message:"An error occurred")}finally{m(!1)}};return y?a.jsxs("div",{className:"checkout-success",children:[a.jsx("div",{className:"success-icon",children:"✓"}),a.jsx("h2",{children:"Поръчката е приета!"}),a.jsx("p",{children:"Благодарим вам за поръчката. Скоро ще се свържем с вас."}),a.jsx("p",{className:"success-note",children:"Проверете вашия имейл за информация за доставка."})]}):a.jsxs("form",{onSubmit:A,className:"checkout-form",children:[a.jsx("h2",{children:"Данни за доставка"}),g&&a.jsx("div",{className:"form-error",children:g}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"customerName",children:"Име и фамилия *"}),a.jsx("input",{type:"text",id:"customerName",name:"customerName",value:_.customerName,onChange:P,required:!0,placeholder:"Иван Петров"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"phone",children:"Телефон *"}),a.jsx("input",{type:"tel",id:"phone",name:"phone",value:_.phone,onChange:P,required:!0,placeholder:"+359 87 123 4567"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"address",children:"Адрес за доставка *"}),a.jsx("textarea",{id:"address",name:"address",value:_.address,onChange:P,required:!0,placeholder:"ул. Пример 123, град Дупница",rows:3})]}),a.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:f||s.length===0,children:f?"Обработка...":"Поръчай сега"}),a.jsx("style",{children:`
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
      `})]})}function gh(){const i=xn(),{cart:s,getTotalPrice:u}=wn();return s.length===0?a.jsx("div",{className:"checkout-page",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"empty-state",children:[a.jsx("p",{children:"Няма продукти в количката"}),a.jsx("button",{className:"btn btn-primary",onClick:()=>i("/products"),children:"Назад към продукти"})]})})}):a.jsxs("div",{className:"checkout-page",children:[a.jsxs("div",{className:"container",children:[a.jsx("h1",{children:"Завършване на поръчката"}),a.jsxs("div",{className:"checkout-layout",children:[a.jsx("div",{className:"checkout-form-section",children:a.jsx(hh,{onOrderSuccess:()=>setTimeout(()=>i("/"),3e3)})}),a.jsx("div",{className:"checkout-summary",children:a.jsxs("div",{className:"summary-card",children:[a.jsx("h3",{children:"Вашата поръчка"}),a.jsx("div",{className:"order-items",children:s.map(d=>a.jsxs("div",{className:"order-item",children:[a.jsx("span",{className:"item-name",children:d.name}),a.jsxs("span",{className:"item-qty",children:["x",d.quantity]}),a.jsxs("span",{className:"item-price",children:[(d.price*d.quantity).toFixed(2)," лв"]})]},d.productId))}),a.jsx("div",{className:"summary-divider"}),a.jsxs("div",{className:"total-row",children:[a.jsx("span",{children:"Общо"}),a.jsxs("span",{className:"total-price",children:[u().toFixed(2)," лв"]})]}),a.jsxs("div",{className:"info-box",children:[a.jsx("p",{children:"Кратки бележки:"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Проверете внимателно адреса"}),a.jsx("li",{children:"Ще се свържем за потвърждение"}),a.jsx("li",{children:"Доставка в рамките на 2-3 работни дни"})]})]})]})})]})]}),a.jsx("style",{children:`
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
      `})]})}function vh(){const[i,s]=w.useState(!1),[u,d]=w.useState(""),[f,m]=w.useState(""),[g,S]=w.useState({name:"",category:"honey",price:"",image:"",description:"",stock:""}),[y,j]=w.useState([]),[_,E]=w.useState(!1),[P,A]=w.useState(null),[B,I]=w.useState(null),[z,D]=w.useState(null),[q,X]=w.useState({type:"",text:""}),re=Q=>{Q.preventDefault(),u==="saki2024"?(s(!0),oe()):m("Грешна парола!")},oe=async()=>{try{const Q=await fetch(`${xt}/api/products`);if(Q.ok){const te=await Q.json();j(te.map(Ce=>({...Ce,image:wa(Ce.image)})))}Te()}catch(Q){console.error("Fetch error:",Q)}},le=Q=>{const{name:te,value:Ce}=Q.target;S(Ee=>({...Ee,[te]:Ce}))},me=Q=>{if(Q.target.files&&Q.target.files[0]){const te=Q.target.files[0];A(te),I(URL.createObjectURL(te))}else A(null),I(null)},_e=Q=>{D(Q.id);const te=ch(Q.image);S({name:Q.name,category:Q.category,price:Q.price.toString(),image:te,description:Q.description,stock:Q.stock.toString()}),window.scrollTo({top:0,behavior:"smooth"})},Ue=async Q=>{if(window.confirm("Сигурни ли сте, че искате да изтриете този продукт?"))try{(await fetch(`${xt}/api/products/${Q}`,{method:"DELETE"})).ok&&(oe(),z===Q&&Te())}catch(te){console.error("Delete error:",te)}},Te=()=>{S({name:"",category:"honey",price:"",image:"",description:"",stock:""}),D(null),X({type:"",text:""}),A(null),I(null)},dt=async Q=>{Q.preventDefault(),E(!0),X({type:"",text:""});const te=new FormData;te.append("name",g.name),te.append("category",g.category),te.append("price",g.price),te.append("description",g.description),te.append("stock",g.stock),P?te.append("imageFile",P):g.image&&te.append("image",g.image);try{const Ce=z?`${xt}/api/products/${z}`:`${xt}/api/products`,Oe=await fetch(Ce,{method:z?"PUT":"POST",body:te});if(Oe.ok)X({type:"success",text:z?"Продуктът е обновен!":"Продуктът е добавен успешно!"}),Te(),oe();else{const ve=await Oe.json();throw new Error(ve.message||"Error")}}catch{X({type:"error",text:"Грешка при комуникация със сървъра."})}finally{E(!1)}};return i?a.jsxs("div",{className:"admin-container",children:[a.jsxs("div",{className:"container",children:[a.jsxs("header",{className:"admin-header",children:[a.jsx("h1",{children:"Управление на продукти"}),a.jsxs("div",{className:"header-actions",children:[a.jsx("button",{onClick:Te,className:"btn btn-secondary",children:"Нов продукт"}),a.jsx("button",{onClick:()=>s(!1),className:"btn btn-link",children:"Изход"})]})]}),a.jsxs("div",{className:"admin-grid",children:[a.jsxs("section",{className:"admin-form-card",children:[a.jsx("h3",{children:z?"Редактиране на продукт":"Добави Нов Продукт"}),a.jsxs("form",{onSubmit:dt,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Наименование"}),a.jsx("input",{name:"name",value:g.name,onChange:le,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Категория"}),a.jsxs("select",{name:"category",value:g.category,onChange:le,children:[a.jsx("option",{value:"honey",children:"🍯 Мед"}),a.jsx("option",{value:"equipment",children:"🔧 Оборудване"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Цена (лв)"}),a.jsx("input",{type:"number",step:"0.01",name:"price",value:g.price,onChange:le,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Изображение (URL)"}),a.jsx("input",{type:"file",name:"imageFile",onChange:me,accept:"image/*"}),B&&a.jsxs("div",{className:"image-preview-container",children:[a.jsx("img",{src:B,alt:"Image Preview",className:"image-preview"}),a.jsx("button",{type:"button",className:"remove-image-btn",onClick:()=>{A(null),I(null),S(Q=>({...Q,image:""}))},children:"X"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Наличност"}),a.jsx("input",{type:"number",name:"stock",value:g.stock,onChange:le,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Описание"}),a.jsx("textarea",{name:"description",value:g.description,onChange:le,rows:4,required:!0})]}),a.jsxs("div",{className:"form-actions",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",disabled:_,children:_?"Зареждане...":z?"Запази промените":"Добави продукт"}),z&&a.jsx("button",{type:"button",onClick:Te,className:"btn btn-secondary",children:"Отказ"})]}),q.text&&a.jsx("div",{className:`status-msg ${q.type}`,children:q.text})]})]}),a.jsxs("section",{className:"admin-list",children:[a.jsx("h3",{children:"Списък продукти"}),a.jsx("div",{className:"products-table",children:y.map(Q=>a.jsxs("div",{className:"p-row",children:[a.jsx("img",{src:Q.image,alt:Q.name}),a.jsxs("div",{className:"p-info",children:[a.jsx("h4",{children:Q.name}),a.jsxs("p",{className:"p-meta",children:[a.jsx("span",{className:"badge",children:Q.category==="honey"?"🍯 Мед":"🔧 Оборудване"}),a.jsxs("span",{children:[Q.price," лв"]}),a.jsxs("span",{children:["Склад: ",Q.stock]})]})]}),a.jsxs("div",{className:"p-actions",children:[a.jsx("button",{onClick:()=>_e(Q),className:"btn-icon",title:"Редактирай",children:"✏️"}),a.jsx("button",{onClick:()=>Ue(Q.id),className:"btn-icon delete",title:"Изтрий",children:"🗑️"})]})]},Q.id))})]})]})]}),a.jsx("style",{children:`
        .admin-container { padding: 3rem 0; background: #f8f9fa; min-height: 100vh; }
        .admin-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
        .header-actions { display: flex; gap: 1rem; align-items: center; }
        .admin-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; }
        .admin-form-card { background: white; padding: 2rem; border-radius: 0.75rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .form-actions { display: flex; gap: 1rem; margin-top: 1rem; }
        .products-table { display: flex; flex-direction: column; gap: 1rem; }
        .p-row { display: flex; align-items: center; gap: 1rem; background: white; padding: 1rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .p-row img { width: 60px; height: 60px; object-fit: cover; border-radius: 0.25rem; }
        .p-info { flex: 1; }
        .p-info h4 { margin: 0 0 0.25rem 0; font-size: 1rem; }
        .p-meta { margin: 0; display: flex; gap: 1rem; font-size: 0.85rem; color: #666; align-items: center; }
        .badge { background: #eee; padding: 0.1rem 0.5rem; border-radius: 1rem; font-size: 0.75rem; }
        .p-actions { display: flex; gap: 0.5rem; }
        .btn-icon { background: none; border: none; cursor: pointer; font-size: 1.2rem; padding: 0.4rem; border-radius: 0.25rem; transition: background 0.2s; }
        .btn-icon:hover { background: #f0f0f0; }
        .btn-icon.delete:hover { background: #fee2e2; }
        .status-msg { margin-top: 1rem; padding: 0.75rem; border-radius: 0.25rem; }
        .status-msg.success { background: #d1fae5; color: #065f46; }
        .status-msg.error { background: #fee2e2; color: #991b1b; }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 0.375rem; font-size: 1rem;
        }
        .form-group label { display: block; margin-bottom: 0.4rem; font-weight: 500; font-size: 0.9rem; }
        .image-preview-container {
          margin-top: 1rem;
          position: relative;
          width: 100px;
          height: 100px;
          border: 1px solid #eee;
          border-radius: 0.25rem;
          overflow: hidden;
        }
        .image-preview { width: 100%; height: 100%; object-fit: cover; }
        .remove-image-btn { position: absolute; top: 5px; right: 5px; background: rgba(255,255,255,0.8); border: none; border-radius: 50%; width: 24px; height: 24px; font-size: 0.8rem; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        @media (max-width: 900px) { .admin-grid { grid-template-columns: 1fr; } }
      `})]}):a.jsxs("div",{className:"admin-login-wrapper",children:[a.jsxs("div",{className:"login-box",children:[a.jsx("h2",{children:"Вход за администратори"}),a.jsxs("form",{onSubmit:re,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Парола"}),a.jsx("input",{type:"password",value:u,onChange:Q=>d(Q.target.value),autoFocus:!0})]}),f&&a.jsx("div",{className:"error-msg",children:f}),a.jsx("button",{type:"submit",className:"btn btn-primary btn-block",children:"Влез"})]})]}),a.jsx("style",{children:`
          .admin-login-wrapper { display: flex; height: 80vh; align-items: center; justify-content: center; background: #f4f4f4; }
          .login-box { background: white; padding: 2.5rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 100%; max-width: 400px; }
          .error-msg { color: #dc3545; margin-bottom: 1rem; font-size: 0.9rem; }
          .btn-block { width: 100%; padding: 0.8rem; }
        `})]})}function yh(){return a.jsx(Hm,{children:a.jsx($m,{children:a.jsxs(bm,{children:[a.jsx(qm,{}),a.jsx("main",{children:a.jsxs(im,{children:[a.jsx(yn,{path:"/",element:a.jsx(ah,{})}),a.jsx(yn,{path:"/products",element:a.jsx(dh,{})}),a.jsx(yn,{path:"/products/:id",element:a.jsx(fh,{})}),a.jsx(yn,{path:"/cart",element:a.jsx(mh,{})}),a.jsx(yn,{path:"/checkout",element:a.jsx(gh,{})}),a.jsx(yn,{path:"/admin",element:a.jsx(vh,{})})]})}),a.jsx(Qm,{})]})})})}Zc.initialize("G-D9FP0ZFK1S");ap.createRoot(document.getElementById("root")).render(a.jsx(w.StrictMode,{children:a.jsx(yh,{})}));

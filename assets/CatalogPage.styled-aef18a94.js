import{h as W,i as ot,k as it,s as g,e as w,l as at,o as ct,P as x,j as p,p as lt,q as ut,g as dt,t as Fe,v as ft,r as pt,w as F}from"./index-8ac5d1c4.js";function $e(e=W){const t=e===W?ot:it(e);return function(){const{store:r}=t();return r}}const ht=$e();function mt(e=W){const t=e===W?ht:$e(e);return function(){return t().dispatch}}const xt=mt();function De(e,t){return function(){return e.apply(t,arguments)}}const{toString:yt}=Object.prototype,{getPrototypeOf:pe}=Object,X=(e=>t=>{const n=yt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>X(t)===e),Q=e=>t=>typeof t===e,{isArray:U}=Array,q=Q("undefined");function gt(e){return e!==null&&!q(e)&&e.constructor!==null&&!q(e.constructor)&&k(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _e=N("ArrayBuffer");function bt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_e(e.buffer),t}const wt=Q("string"),k=Q("function"),Ue=Q("number"),Y=e=>e!==null&&typeof e=="object",Et=e=>e===!0||e===!1,M=e=>{if(X(e)!=="object")return!1;const t=pe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},St=N("Date"),Rt=N("File"),Ot=N("Blob"),At=N("FileList"),Tt=e=>Y(e)&&k(e.pipe),Ct=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||k(e.append)&&((t=X(e))==="formdata"||t==="object"&&k(e.toString)&&e.toString()==="[object FormData]"))},kt=N("URLSearchParams"),jt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function ve(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ze=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),qe=e=>!q(e)&&e!==ze;function ce(){const{caseless:e}=qe(this)&&this||{},t={},n=(r,s)=>{const o=e&&ve(t,s)||s;M(t[o])&&M(r)?t[o]=ce(t[o],r):M(r)?t[o]=ce({},r):U(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&H(arguments[r],n);return t}const Pt=(e,t,n,{allOwnKeys:r}={})=>(H(t,(s,o)=>{n&&k(s)?e[o]=De(s,n):e[o]=s},{allOwnKeys:r}),e),Nt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Lt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Bt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&pe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ft=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},$t=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Ue(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Dt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&pe(Uint8Array)),_t=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ut=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},vt=N("HTMLFormElement"),zt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),we=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),qt=N("RegExp"),He=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};H(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Ht=e=>{He(e,(t,n)=>{if(k(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(k(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},It=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return U(e)?r(e):r(String(e).split(t)),n},Mt=()=>{},Jt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),te="abcdefghijklmnopqrstuvwxyz",Ee="0123456789",Ie={DIGIT:Ee,ALPHA:te,ALPHA_DIGIT:te+te.toUpperCase()+Ee},Vt=(e=16,t=Ie.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Wt(e){return!!(e&&k(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Kt=e=>{const t=new Array(10),n=(r,s)=>{if(Y(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=U(r)?[]:{};return H(r,(i,l)=>{const f=n(i,s+1);!q(f)&&(o[l]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Gt=N("AsyncFunction"),Xt=e=>e&&(Y(e)||k(e))&&k(e.then)&&k(e.catch),a={isArray:U,isArrayBuffer:_e,isBuffer:gt,isFormData:Ct,isArrayBufferView:bt,isString:wt,isNumber:Ue,isBoolean:Et,isObject:Y,isPlainObject:M,isUndefined:q,isDate:St,isFile:Rt,isBlob:Ot,isRegExp:qt,isFunction:k,isStream:Tt,isURLSearchParams:kt,isTypedArray:Dt,isFileList:At,forEach:H,merge:ce,extend:Pt,trim:jt,stripBOM:Nt,inherits:Lt,toFlatObject:Bt,kindOf:X,kindOfTest:N,endsWith:Ft,toArray:$t,forEachEntry:_t,matchAll:Ut,isHTMLForm:vt,hasOwnProperty:we,hasOwnProp:we,reduceDescriptors:He,freezeMethods:Ht,toObjectSet:It,toCamelCase:zt,noop:Mt,toFiniteNumber:Jt,findKey:ve,global:ze,isContextDefined:qe,ALPHABET:Ie,generateString:Vt,isSpecCompliantForm:Wt,toJSONObject:Kt,isAsyncFn:Gt,isThenable:Xt};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Me=y.prototype,Je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Je[e]={value:e}});Object.defineProperties(y,Je);Object.defineProperty(Me,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(Me);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},l=>l!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Qt=null;function le(e){return a.isPlainObject(e)||a.isArray(e)}function Ve(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Se(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ve(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Yt(e){return a.isArray(e)&&!e.some(le)}const Zt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,S){return!a.isUndefined(S[m])});const r=n.metaTokens,s=n.visitor||c,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function d(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!f&&a.isBlob(u))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?f&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function c(u,m,S){let O=u;if(u&&!S&&typeof u=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&Yt(u)||(a.isFileList(u)||a.endsWith(m,"[]"))&&(O=a.toArray(u)))return m=Ve(m),O.forEach(function(T,C){!(a.isUndefined(T)||T===null)&&t.append(i===!0?Se([m],C,o):i===null?m:m+"[]",d(T))}),!1}return le(u)?!0:(t.append(Se(S,m,o),d(u)),!1)}const h=[],b=Object.assign(Zt,{defaultVisitor:c,convertValue:d,isVisitable:le});function E(u,m){if(!a.isUndefined(u)){if(h.indexOf(u)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(u),a.forEach(u,function(O,A){(!(a.isUndefined(O)||O===null)&&s.call(t,O,a.isString(A)?A.trim():A,m,b))===!0&&E(O,m?m.concat(A):[A])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function Re(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function he(e,t){this._pairs=[],e&&Z(e,this,t)}const We=he.prototype;We.append=function(t,n){this._pairs.push([t,n])};We.toString=function(t){const n=t?function(r){return t.call(this,r,Re)}:Re;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function en(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ke(e,t,n){if(!t)return e;const r=n&&n.encode||en,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new he(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class tn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Oe=tn,Ge={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nn=typeof URLSearchParams<"u"?URLSearchParams:he,rn=typeof FormData<"u"?FormData:null,sn=typeof Blob<"u"?Blob:null,on=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),an=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),P={isBrowser:!0,classes:{URLSearchParams:nn,FormData:rn,Blob:sn},isStandardBrowserEnv:on,isStandardBrowserWebWorkerEnv:an,protocols:["http","https","file","blob","url","data"]};function cn(e,t){return Z(e,new P.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return P.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function ln(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function un(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Xe(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=un(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(ln(r),s,n,0)}),n}return null}function dn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const me={transitional:Ge,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Xe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return cn(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Z(l?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),dn(t)):t}],transformResponse:[function(t){const n=this.transitional||me.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?y.from(l,y.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:P.classes.FormData,Blob:P.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{me.headers[e]={}});const xe=me,fn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&fn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ae=Symbol("internals");function z(e){return e&&String(e).trim().toLowerCase()}function J(e){return e===!1||e==null?e:a.isArray(e)?e.map(J):String(e)}function hn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const mn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ne(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function xn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function yn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class ee{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,f,d){const c=z(f);if(!c)throw new Error("header name must be a non-empty string");const h=a.findKey(s,c);(!h||s[h]===void 0||d===!0||d===void 0&&s[h]!==!1)&&(s[h||f]=J(l))}const i=(l,f)=>a.forEach(l,(d,c)=>o(d,c,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!mn(t)?i(pn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=z(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return hn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=z(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ne(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=z(i),i){const l=a.findKey(r,i);l&&(!n||ne(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ne(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=J(s),delete n[o];return}const l=t?xn(o):String(o).trim();l!==o&&delete n[o],n[l]=J(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ae]=this[Ae]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=z(i);r[l]||(yn(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(ee.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(ee);const L=ee;function re(e,t){const n=this||xe,r=t||n,s=L.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Qe(e){return!!(e&&e.__CANCEL__)}function I(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(I,y,{__CANCEL__:!0});function gn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const bn=P.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(o)&&f.push("path="+o),a.isString(i)&&f.push("domain="+i),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function wn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function En(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ye(e,t){return e&&!wn(t)?En(e,t):t}const Sn=P.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Rn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function On(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const d=Date.now(),c=r[o];i||(i=d),n[s]=f,r[s]=d;let h=o,b=0;for(;h!==s;)b+=n[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),d-i<t)return;const E=c&&d-c;return E?Math.round(b*1e3/E):void 0}}function Te(e,t){let n=0;const r=On(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,f=r(l),d=o<=i;n=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:f||void 0,estimated:f&&i&&d?(i-o)/f:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const An=typeof XMLHttpRequest<"u",Tn=An&&function(e){return new Promise(function(n,r){let s=e.data;const o=L.from(e.headers).normalize(),i=e.responseType;let l;function f(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let d;a.isFormData(s)&&(P.isStandardBrowserEnv||P.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?a.isString(d=o.getContentType())&&o.setContentType(d.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(u+":"+m))}const h=Ye(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ke(h,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function b(){if(!c)return;const u=L.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),S={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:u,config:e,request:c};gn(function(A){n(A),f()},function(A){r(A),f()},S),c=null}if("onloadend"in c?c.onloadend=b:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(b)},c.onabort=function(){c&&(r(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const S=e.transitional||Ge;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),r(new y(m,S.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},P.isStandardBrowserEnv){const u=(e.withCredentials||Sn(h))&&e.xsrfCookieName&&bn.read(e.xsrfCookieName);u&&o.set(e.xsrfHeaderName,u)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(m,S){c.setRequestHeader(S,m)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Te(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Te(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=u=>{c&&(r(!u||u.type?new I(null,e,c):u),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const E=Rn(h);if(E&&P.protocols.indexOf(E)===-1){r(new y("Unsupported protocol "+E+":",y.ERR_BAD_REQUEST,e));return}c.send(s||null)})},ue={http:Qt,xhr:Tn};a.forEach(ue,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ce=e=>`- ${e}`,Cn=e=>a.isFunction(e)||e===null||e===!1,Ze={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Cn(n)&&(r=ue[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,f])=>`adapter ${l} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ce).join(`
`):" "+Ce(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ue};function se(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new I(null,e)}function ke(e){return se(e),e.headers=L.from(e.headers),e.data=re.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ze.getAdapter(e.adapter||xe.adapter)(e).then(function(r){return se(e),r.data=re.call(e,e.transformResponse,r),r.headers=L.from(r.headers),r},function(r){return Qe(r)||(se(e),r&&r.response&&(r.response.data=re.call(e,e.transformResponse,r.response),r.response.headers=L.from(r.response.headers))),Promise.reject(r)})}const je=e=>e instanceof L?e.toJSON():e;function _(e,t){t=t||{};const n={};function r(d,c,h){return a.isPlainObject(d)&&a.isPlainObject(c)?a.merge.call({caseless:h},d,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(d,c,h){if(a.isUndefined(c)){if(!a.isUndefined(d))return r(void 0,d,h)}else return r(d,c,h)}function o(d,c){if(!a.isUndefined(c))return r(void 0,c)}function i(d,c){if(a.isUndefined(c)){if(!a.isUndefined(d))return r(void 0,d)}else return r(void 0,c)}function l(d,c,h){if(h in t)return r(d,c);if(h in e)return r(void 0,d)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(d,c)=>s(je(d),je(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const h=f[c]||s,b=h(e[c],t[c],c);a.isUndefined(b)&&h!==l||(n[c]=b)}),n}const et="1.5.1",ye={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ye[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Pe={};ye.transitional=function(t,n,r){function s(o,i){return"[Axios v"+et+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Pe[i]&&(Pe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function kn(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],f=l===void 0||i(l,o,e);if(f!==!0)throw new y("option "+o+" must be "+f,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const de={assertOptions:kn,validators:ye},B=de.validators;class K{constructor(t){this.defaults=t,this.interceptors={request:new Oe,response:new Oe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=_(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&de.assertOptions(r,{silentJSONParsing:B.transitional(B.boolean),forcedJSONParsing:B.transitional(B.boolean),clarifyTimeoutError:B.transitional(B.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:de.assertOptions(s,{encode:B.function,serialize:B.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),n.headers=L.concat(i,o);const l=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(f=f&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const d=[];this.interceptors.response.forEach(function(m){d.push(m.fulfilled,m.rejected)});let c,h=0,b;if(!f){const u=[ke.bind(this),void 0];for(u.unshift.apply(u,l),u.push.apply(u,d),b=u.length,c=Promise.resolve(n);h<b;)c=c.then(u[h++],u[h++]);return c}b=l.length;let E=n;for(h=0;h<b;){const u=l[h++],m=l[h++];try{E=u(E)}catch(S){m.call(this,S);break}}try{c=ke.call(this,E)}catch(u){return Promise.reject(u)}for(h=0,b=d.length;h<b;)c=c.then(d[h++],d[h++]);return c}getUri(t){t=_(this.defaults,t);const n=Ye(t.baseURL,t.url);return Ke(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){K.prototype[t]=function(n,r){return this.request(_(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(_(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}K.prototype[t]=n(),K.prototype[t+"Form"]=n(!0)});const V=K;class ge{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new I(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ge(function(s){t=s}),cancel:t}}}const jn=ge;function Pn(e){return function(n){return e.apply(null,n)}}function Nn(e){return a.isObject(e)&&e.isAxiosError===!0}const fe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fe).forEach(([e,t])=>{fe[t]=e});const Ln=fe;function tt(e){const t=new V(e),n=De(V.prototype.request,t);return a.extend(n,V.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return tt(_(e,s))},n}const R=tt(xe);R.Axios=V;R.CanceledError=I;R.CancelToken=jn;R.isCancel=Qe;R.VERSION=et;R.toFormData=Z;R.AxiosError=y;R.Cancel=R.CanceledError;R.all=function(t){return Promise.all(t)};R.spread=Pn;R.isAxiosError=Nn;R.mergeConfig=_;R.AxiosHeaders=L;R.formToJSON=e=>Xe(a.isHTMLForm(e)?new FormData(e):e);R.getAdapter=Ze.getAdapter;R.HttpStatusCode=Ln;R.default=R;const Bn=R,Fn=Bn.create({baseURL:"https://65316c0d4d4c2e3f333cfa6a.mockapi.io/"}),xr=async()=>{const{data:e}=await Fn.get("/cars");return e},$n=g.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc((100% - 15px) / 2);
    height: 240px;
    @media screen and (${w.tablet}) {
        width: calc((100% - 2 * 15px) / 3);
        height: 350px;
    }
    @media screen and (${w.desktop}) {
        width: calc((100% - 3 * 30px) / 4);
        height: 430px;
    }
`,Dn=g.div`
position: relative;
width: 100%;
height: 120px;
overflow: hidden;
border-radius: 14px;
@media screen and (${w.tablet}) {
    height: 200px;
}
@media screen and (${w.desktop}) {
    height: 266px;
}
`,_n=g.img`
display: block;
width: 100%;
height: 100%;
object-fit: cover;
`,Ne=g.button`
    position: absolute;
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    top: 14px;
    right: 14px;
`,Un=g(at)`
fill: ${e=>e.theme.decorativeWhite};
width: 18px;
height: 18px;
transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover, &:focus {
fill: ${e=>e.theme.decorativePurple};
}
`,vn=g(ct)`
fill: ${e=>e.theme.decorativePurple};
width: 18px;
height: 18px;
transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`,zn=g.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
`,qn=g.div`
    margin-top: 7px;
    @media screen and (${w.desktop}) {
        margin-top: 14px;
    }
`,Le=g.p`
    font-size: 10px;
    font-weight: 500;
    line-height: 1.5;
    @media screen and (${w.tablet}){
        font-size: 14px;
    }
    @media screen and (${w.desktop}) {
        font-size: 16px;
    }
`,Hn=g.span`
    color: ${e=>e.theme.decorativePurple};
`,In=g.button`
    background-color: ${e=>e.theme.decorativePurple};
    border-radius: 12px;
    border: none;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    color: ${e=>e.theme.mainBcg};
    font-size: 12px;
    font-weight: 600;
    line-height: 1.42;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (${w.desktop}){
        font-size: 14px;
    }
    &:hover, &:focus {
        background-color: ${e=>e.theme.decorativePurpleHover};
    }
`,G="/rental-test/assets/car-sample-64ec59fe.jpg";let $=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");const Mn=g.ul`
    display: flex;
    width: 100%;
    column-gap: 6px;
    margin-bottom: 4px;
    overflow: hidden;
    white-space: nowrap;
    @media screen and (${w.desktop}){
        column-gap: 12px;
    }
`,Jn=g.li`
    color: ${e=>e.theme.greyText};
    font-size: 10px;
    font-weight: 400;
    line-height: 1.5;
    position: relative;
    &:last-child {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    @media screen and (${w.desktop}){
        font-size: 12px;
    }
    &:not(:last-child) {
        &::after {
            position: absolute;
            content: "";
            height: 100%;
            width: 0.1px;
            right: -3px;
            top: 0;
            background-color: rgba(18, 20, 23, 0.10);;
            display: block;
            @media screen and (${w.desktop}) {
                right: -6px;
            }
        }
    }
`,D=({items:e})=>p.jsx(Mn,{children:e.map(t=>p.jsx(Jn,{children:t},$()))});D.propTypes={items:x.arrayOf(x.any)};const nt=({isLiked:e,id:t,year:n,make:r,model:s,type:o,img:i,functionalities:l,rentalPrice:f,rentalCompany:d,address:c})=>{const h=c.split(", "),b=xt(),E=()=>{b(lt(t))},u=()=>{b(ut(t))},m=({currentTarget:S})=>{S.src=G};return p.jsxs($n,{id:t,children:[p.jsxs("div",{children:[p.jsxs(Dn,{children:[p.jsx(_n,{src:i||G,onError:m}),e?p.jsx(Ne,{onClick:u,children:p.jsx(vn,{})}):p.jsx(Ne,{onClick:E,children:p.jsx(Un,{})})]}),p.jsxs(qn,{children:[p.jsxs(zn,{children:[p.jsxs(Le,{children:[r," ",p.jsx(Hn,{children:s}),", ",n]}),p.jsx(Le,{children:f})]}),p.jsx(D,{items:[h[1],h[2],d]}),p.jsx(D,{items:[o,s,t,l]})]})]}),p.jsx(In,{children:"Learn more"})]})};nt.propTypes={id:x.number.isRequired,year:x.number.isRequired,make:x.string.isRequired,model:x.string.isRequired,type:x.string.isRequired,img:x.string.isRequired,functionalities:x.arrayOf(x.string).isRequired,rentalPrice:x.string.isRequired,rentalCompany:x.string.isRequired,address:x.string.isRequired,isLiked:x.bool};const Vn=g.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap:15px;
    @media screen and (${w.desktop}) {
        gap: 30px;
    }
`,Wn=e=>e.favourites.likes,Kn=({cars:e,onClick:t})=>{const n=dt(Wn);return p.jsx(Vn,{onClick:t,children:e.map(({id:r,year:s,make:o,model:i,type:l,img:f,functionalities:d,rentalPrice:c,rentalCompany:h,address:b})=>p.jsx(nt,{id:r,address:b,year:s,make:o,model:i,type:l,img:f,rentalPrice:c,rentalCompany:h,functionalities:d,isLiked:n.includes(r)},$()))})};Kn.propTypes={cars:x.array,onClick:x.func};const Gn=g(Fe.div)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: ${e=>e.theme.greyText};
`,Xn=g(Fe.div)`
    background-color: ${e=>e.theme.mainBcg};
    border-radius: 24px;
    padding: 14px;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    @media screen and (${w.maxTablet}){
        margin-top: 20px;
    }
    @media screen and (${w.tablet}){
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        max-width: 400px;
    }
    @media screen and (${w.desktop}){
        padding: 40px;
        max-width: 540px;
    }
`,Qn=g.button`
    background-color: transparent;
    border: none;
    padding: 0;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    &:hover, &:focus > svg {
        fill: ${e=>e.theme.decorativePurple};
    }
    @media screen and (${w.desktop}) {
        top: 16px;
        right: 16px;
    }
`,Yn=g(ft)`
    fill: ${e=>e.theme.mainText};
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 20px;
    height: 20px;
    @media screen and (${w.desktop}){
        width: 24px;
        height: 24px;
    }
`,oe=g.div`
    margin-bottom: 24px;
`,Zn=g.div`
    border-radius: 14px;
    width: 100%;
    height: 180px;
    overflow: hidden;
    margin-bottom: 8px;
    @media screen and (${w.desktop}){
        height: 248px;
        margin-bottom: 14px;
    }
`,er=g.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,tr=g.p`
    line-height: 1.42;
    font-size: 12px;
    @media screen and (${w.tablet}){
        font-size: 14px;
    }
`,Be=g.p`
    line-height: 1.42;
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 12px;
    @media screen and (${w.tablet}){
        font-size: 14px;
    }
`,nr=g.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    margin-bottom: 8px;
    & > span {
        color: ${e=>e.theme.decorativePurple};
    }
`,rr=g.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
`,ie=g.li`
    background-color: ${e=>e.theme.oddBcg};
    border-radius: 35px;
    padding: 7px 14px;
`,ae=g.p`
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.24px;
    color: ${e=>e.theme.lightGrey};
    & > span {
        font-weight: 600;
        color: ${e=>e.theme.decorativePurple};
    }
`,sr=g.a`
    border-radius: 12px;
    background-color: ${e=>e.theme.decorativePurple};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    padding: 12px 50px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.42;
    color: ${e=>e.theme.mainBcg};
    display: block;
    cursor: pointer;
    width: max-content;
    &:hover, &:focus {
        background-color: ${e=>e.theme.decorativePurpleHover};
    }
`,or={initial:{opacity:0},isOn:{opacity:1,transition:{type:"spring",stiffness:100,damping:18}},exit:{opacity:0,transition:{type:"spring",stiffness:100,damping:18}}},ir=({car:e,closeMethod:t})=>{const{id:n,year:r,make:s,model:o,type:i,img:l,description:f,fuelConsumption:d,engineSize:c,accessories:h,functionalities:b,rentalPrice:E,address:u,rentalConditions:m,mileage:S}=e,O=u.split(", "),A=m.split(`
`),T=j=>{j.target===j.currentTarget&&t()};pt.useEffect(()=>{document.body.classList.add("close");const j=v=>{v.code==="Escape"&&t()};return window.addEventListener("keydown",j),()=>{document.body.classList.remove("close")}},[t]);const C=({currentTarget:j})=>{j.src=G};return p.jsx(Gn,{onClick:T,initial:"initial",animate:"isOn",exit:"exit",variants:or,children:p.jsxs(Xn,{children:[p.jsx(Qn,{onClick:t,children:p.jsx(Yn,{})}),p.jsx(Zn,{children:p.jsx(er,{src:l||G,onError:C})}),p.jsxs(nr,{children:[s," ",p.jsx("span",{children:o}),", ",r]}),p.jsx(D,{items:[O[1],O[2],`Id: ${n}`,`Year: ${r}`,`Type: ${i}`]},$()),p.jsx(D,{items:[`Fuel Consumption: ${d}`,`Engine Size: ${c}`]},$()),f&&p.jsx(oe,{children:p.jsx(tr,{children:f})}),(h||b)&&p.jsxs(oe,{children:[p.jsx(Be,{children:"Accessories and functionalities:"}),b&&p.jsx(D,{items:b},$()),h&&p.jsx(D,{items:h},$())]}),p.jsx(Be,{children:"Rental Conditions:"}),(A.length>0||S||E)&&p.jsx(oe,{children:p.jsxs(rr,{children:[A.map(j=>p.jsx(ie,{children:p.jsx(ae,{children:j})},$())),S&&p.jsx(ie,{children:p.jsxs(ae,{children:["Mileage: ",p.jsx("span",{children:S.toLocaleString("en-US")})]})}),E&&p.jsx(ie,{children:p.jsxs(ae,{children:["Price: ",p.jsx("span",{children:E})]})})]})}),p.jsx(sr,{href:"tel:+380730000000",children:"Rental car"})]})})};ir.propTypes={car:x.shape({id:x.number,year:x.number.isRequired,make:x.string.isRequired,model:x.string.isRequired,type:x.string,img:x.string,description:x.string,fuelConsumption:x.string,engineSize:x.string,accessories:x.arrayOf(x.string),functionalities:x.arrayOf(x.string),rentalPrice:x.string,address:x.string,rentalConditions:x.string,mileage:x.number}),closeMethod:x.func.isRequired};const ar=F.createContext({}),rt=!0;function cr({baseColor:e,highlightColor:t,width:n,height:r,borderRadius:s,circle:o,direction:i,duration:l,enableAnimation:f=rt}){const d={};return i==="rtl"&&(d["--animation-direction"]="reverse"),typeof l=="number"&&(d["--animation-duration"]=`${l}s`),f||(d["--pseudo-element-display"]="none"),(typeof n=="string"||typeof n=="number")&&(d.width=n),(typeof r=="string"||typeof r=="number")&&(d.height=r),(typeof s=="string"||typeof s=="number")&&(d.borderRadius=s),o&&(d.borderRadius="50%"),typeof e<"u"&&(d["--base-color"]=e),typeof t<"u"&&(d["--highlight-color"]=t),d}function lr({count:e=1,wrapper:t,className:n,containerClassName:r,containerTestId:s,circle:o=!1,style:i,...l}){var f,d,c;const h=F.useContext(ar),b={...l};for(const[T,C]of Object.entries(l))typeof C>"u"&&delete b[T];const E={...h,...b,circle:o},u={...i,...cr(E)};let m="react-loading-skeleton";n&&(m+=` ${n}`);const S=(f=E.inline)!==null&&f!==void 0?f:!1,O=[],A=Math.ceil(e);for(let T=0;T<A;T++){let C=u;if(A>e&&T===A-1){const v=(d=C.width)!==null&&d!==void 0?d:"100%",be=e%1,st=typeof v=="number"?v*be:`calc(${v} * ${be})`;C={...C,width:st}}const j=F.createElement("span",{className:m,style:C,key:T},"‌");S?O.push(j):O.push(F.createElement(F.Fragment,{key:T},j,F.createElement("br",null)))}return F.createElement("span",{className:r,"data-testid":s,"aria-live":"polite","aria-busy":(c=E.enableAnimation)!==null&&c!==void 0?c:rt},t?O.map((T,C)=>F.createElement(t,{key:C},T)):O)}const ur=g.div`
    & > span {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap:15px;
    @media screen and (${w.desktop}) {
        gap: 30px;
    }
    }
`,dr=g(lr)`
    width: calc((100% - 15px) / 2);
    height: 240px;
    @media screen and (${w.tablet}) {
        width: calc((100% - 2 * 15px) / 3);
        height: 350px;
    }
    @media screen and (${w.desktop}) {
        width: calc((100% - 3 * 30px) / 4);
        height: 430px;
    }
`,fr=({count:e})=>p.jsx(ur,{children:p.jsx(dr,{count:e,inline:!0})});fr.propTypes={count:x.number.isRequired};const pr=g.button`
    background-color: transparent;
    border: none;
    padding: 0;
    color: ${e=>e.theme.decorativePurple};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    text-decoration-line: underline;
    align-self: center;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus {
        color: ${e=>e.theme.decorativePurpleHover};
    }
`,hr=({onClick:e,children:t})=>p.jsx(p.Fragment,{children:p.jsx(pr,{onClick:e,children:t})});hr.propTypes={onClick:x.func.isRequired,children:x.any};const yr=g.section`
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    @media screen and (${w.desktop}){
        row-gap: 100px;   
    }   
    
`;export{Kn as C,yr as L,ir as M,fr as S,hr as a,xr as g,$ as n,Wn as s};

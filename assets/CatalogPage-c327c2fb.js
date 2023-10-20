import{R as J,u as rt,c as st,s as y,d as w,A as ot,a as it,P as x,j as p,b as at,r as ct,e as lt,m as ke,f as ut,g as _,h as dt}from"./index-6807e1f3.js";function Ne(e=J){const t=e===J?rt:st(e);return function(){const{store:r}=t();return r}}const ft=Ne();function pt(e=J){const t=e===J?ft:Ne(e);return function(){return t().dispatch}}const ht=pt();function Be(e,t){return function(){return e.apply(t,arguments)}}const{toString:mt}=Object.prototype,{getPrototypeOf:ue}=Object,W=(e=>t=>{const n=mt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),j=e=>(e=e.toLowerCase(),t=>W(t)===e),K=e=>t=>typeof t===e,{isArray:U}=Array,z=K("undefined");function xt(e){return e!==null&&!z(e)&&e.constructor!==null&&!z(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Le=j("ArrayBuffer");function gt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Le(e.buffer),t}const yt=K("string"),T=K("function"),Fe=K("number"),G=e=>e!==null&&typeof e=="object",bt=e=>e===!0||e===!1,H=e=>{if(W(e)!=="object")return!1;const t=ue(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},wt=j("Date"),Et=j("File"),Rt=j("Blob"),St=j("FileList"),Ot=e=>G(e)&&T(e.pipe),At=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||T(e.append)&&((t=W(e))==="formdata"||t==="object"&&T(e.toString)&&e.toString()==="[object FormData]"))},Tt=j("URLSearchParams"),Ct=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function De(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ue=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),$e=e=>!z(e)&&e!==Ue;function oe(){const{caseless:e}=$e(this)&&this||{},t={},n=(r,s)=>{const o=e&&De(t,s)||s;H(t[o])&&H(r)?t[o]=oe(t[o],r):H(r)?t[o]=oe({},r):U(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const jt=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,o)=>{n&&T(s)?e[o]=Be(s,n):e[o]=s},{allOwnKeys:r}),e),Pt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),kt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Nt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ue(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Bt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Lt=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Fe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ft=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ue(Uint8Array)),Dt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ut=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},$t=j("HTMLFormElement"),_t=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),xe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),zt=j("RegExp"),_e=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},It=e=>{_e(e,(t,n)=>{if(T(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(T(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},qt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return U(e)?r(e):r(String(e).split(t)),n},Ht=()=>{},vt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Y="abcdefghijklmnopqrstuvwxyz",ge="0123456789",ze={DIGIT:ge,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+ge},Mt=(e=16,t=ze.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Jt(e){return!!(e&&T(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Vt=e=>{const t=new Array(10),n=(r,s)=>{if(G(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=U(r)?[]:{};return I(r,(i,l)=>{const d=n(i,s+1);!z(d)&&(o[l]=d)}),t[s]=void 0,o}}return r};return n(e,0)},Wt=j("AsyncFunction"),Kt=e=>e&&(G(e)||T(e))&&T(e.then)&&T(e.catch),a={isArray:U,isArrayBuffer:Le,isBuffer:xt,isFormData:At,isArrayBufferView:gt,isString:yt,isNumber:Fe,isBoolean:bt,isObject:G,isPlainObject:H,isUndefined:z,isDate:wt,isFile:Et,isBlob:Rt,isRegExp:zt,isFunction:T,isStream:Ot,isURLSearchParams:Tt,isTypedArray:Ft,isFileList:St,forEach:I,merge:oe,extend:jt,trim:Ct,stripBOM:Pt,inherits:kt,toFlatObject:Nt,kindOf:W,kindOfTest:j,endsWith:Bt,toArray:Lt,forEachEntry:Dt,matchAll:Ut,isHTMLForm:$t,hasOwnProperty:xe,hasOwnProp:xe,reduceDescriptors:_e,freezeMethods:It,toObjectSet:qt,toCamelCase:_t,noop:Ht,toFiniteNumber:vt,findKey:De,global:Ue,isContextDefined:$e,ALPHABET:ze,generateString:Mt,isSpecCompliantForm:Jt,toJSONObject:Vt,isAsyncFn:Wt,isThenable:Kt};function g(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(g,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ie=g.prototype,qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qe[e]={value:e}});Object.defineProperties(g,qe);Object.defineProperty(Ie,"isAxiosError",{value:!0});g.from=(e,t,n,r,s,o)=>{const i=Object.create(Ie);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),g.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Gt=null;function ie(e){return a.isPlainObject(e)||a.isArray(e)}function He(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ye(e,t,n){return e?e.concat(t).map(function(s,o){return s=He(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Xt(e){return a.isArray(e)&&!e.some(ie)}const Qt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function X(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,S){return!a.isUndefined(S[m])});const r=n.metaTokens,s=n.visitor||c,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function f(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!d&&a.isBlob(u))throw new g("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?d&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function c(u,m,S){let A=u;if(u&&!S&&typeof u=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&Xt(u)||(a.isFileList(u)||a.endsWith(m,"[]"))&&(A=a.toArray(u)))return m=He(m),A.forEach(function(F,k){!(a.isUndefined(F)||F===null)&&t.append(i===!0?ye([m],k,o):i===null?m:m+"[]",f(F))}),!1}return ie(u)?!0:(t.append(ye(S,m,o),f(u)),!1)}const h=[],b=Object.assign(Qt,{defaultVisitor:c,convertValue:f,isVisitable:ie});function R(u,m){if(!a.isUndefined(u)){if(h.indexOf(u)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(u),a.forEach(u,function(A,O){(!(a.isUndefined(A)||A===null)&&s.call(t,A,a.isString(O)?O.trim():O,m,b))===!0&&R(A,m?m.concat(O):[O])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return R(e),t}function be(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function de(e,t){this._pairs=[],e&&X(e,this,t)}const ve=de.prototype;ve.append=function(t,n){this._pairs.push([t,n])};ve.toString=function(t){const n=t?function(r){return t.call(this,r,be)}:be;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Yt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Me(e,t,n){if(!t)return e;const r=n&&n.encode||Yt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new de(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Zt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const we=Zt,Je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},en=typeof URLSearchParams<"u"?URLSearchParams:de,tn=typeof FormData<"u"?FormData:null,nn=typeof Blob<"u"?Blob:null,rn=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),sn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),C={isBrowser:!0,classes:{URLSearchParams:en,FormData:tn,Blob:nn},isStandardBrowserEnv:rn,isStandardBrowserWebWorkerEnv:sn,protocols:["http","https","file","blob","url","data"]};function on(e,t){return X(e,new C.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return C.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function an(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function cn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ve(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=cn(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(an(r),s,n,0)}),n}return null}function ln(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const fe={transitional:Je,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ve(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return on(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return X(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),ln(t)):t}],transformResponse:[function(t){const n=this.transitional||fe.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?g.from(l,g.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:C.classes.FormData,Blob:C.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{fe.headers[e]={}});const pe=fe,un=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),dn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&un[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ee=Symbol("internals");function $(e){return e&&String(e).trim().toLowerCase()}function v(e){return e===!1||e==null?e:a.isArray(e)?e.map(v):String(e)}function fn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const pn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Z(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function hn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function mn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Q{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,d,f){const c=$(d);if(!c)throw new Error("header name must be a non-empty string");const h=a.findKey(s,c);(!h||s[h]===void 0||f===!0||f===void 0&&s[h]!==!1)&&(s[h||d]=v(l))}const i=(l,d)=>a.forEach(l,(f,c)=>o(f,c,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!pn(t)?i(dn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=$(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return fn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=$(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Z(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=$(i),i){const l=a.findKey(r,i);l&&(!n||Z(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Z(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=v(s),delete n[o];return}const l=t?hn(o):String(o).trim();l!==o&&delete n[o],n[l]=v(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ee]=this[Ee]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=$(i);r[l]||(mn(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(Q.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(Q);const P=Q;function ee(e,t){const n=this||pe,r=t||n,s=P.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function We(e){return!!(e&&e.__CANCEL__)}function q(e,t,n){g.call(this,e??"canceled",g.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,g,{__CANCEL__:!0});function xn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new g("Request failed with status code "+n.status,[g.ERR_BAD_REQUEST,g.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const gn=C.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function yn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function bn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ke(e,t){return e&&!yn(t)?bn(e,t):t}const wn=C.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function En(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Rn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),c=r[o];i||(i=f),n[s]=d,r[s]=f;let h=o,b=0;for(;h!==s;)b+=n[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),f-i<t)return;const R=c&&f-c;return R?Math.round(b*1e3/R):void 0}}function Re(e,t){let n=0;const r=Rn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,d=r(l),f=o<=i;n=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&f?(i-o)/d:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const Sn=typeof XMLHttpRequest<"u",On=Sn&&function(e){return new Promise(function(n,r){let s=e.data;const o=P.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let f;a.isFormData(s)&&(C.isStandardBrowserEnv||C.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?a.isString(f=o.getContentType())&&o.setContentType(f.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(u+":"+m))}const h=Ke(e.baseURL,e.url);c.open(e.method.toUpperCase(),Me(h,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function b(){if(!c)return;const u=P.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),S={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:u,config:e,request:c};xn(function(O){n(O),d()},function(O){r(O),d()},S),c=null}if("onloadend"in c?c.onloadend=b:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(b)},c.onabort=function(){c&&(r(new g("Request aborted",g.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new g("Network Error",g.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const S=e.transitional||Je;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),r(new g(m,S.clarifyTimeoutError?g.ETIMEDOUT:g.ECONNABORTED,e,c)),c=null},C.isStandardBrowserEnv){const u=(e.withCredentials||wn(h))&&e.xsrfCookieName&&gn.read(e.xsrfCookieName);u&&o.set(e.xsrfHeaderName,u)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(m,S){c.setRequestHeader(S,m)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Re(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Re(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=u=>{c&&(r(!u||u.type?new q(null,e,c):u),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const R=En(h);if(R&&C.protocols.indexOf(R)===-1){r(new g("Unsupported protocol "+R+":",g.ERR_BAD_REQUEST,e));return}c.send(s||null)})},ae={http:Gt,xhr:On};a.forEach(ae,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Se=e=>`- ${e}`,An=e=>a.isFunction(e)||e===null||e===!1,Ge={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!An(n)&&(r=ae[(i=String(n)).toLowerCase()],r===void 0))throw new g(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Se).join(`
`):" "+Se(o[0]):"as no adapter specified";throw new g("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ae};function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q(null,e)}function Oe(e){return te(e),e.headers=P.from(e.headers),e.data=ee.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ge.getAdapter(e.adapter||pe.adapter)(e).then(function(r){return te(e),r.data=ee.call(e,e.transformResponse,r),r.headers=P.from(r.headers),r},function(r){return We(r)||(te(e),r&&r.response&&(r.response.data=ee.call(e,e.transformResponse,r.response),r.response.headers=P.from(r.response.headers))),Promise.reject(r)})}const Ae=e=>e instanceof P?e.toJSON():e;function D(e,t){t=t||{};const n={};function r(f,c,h){return a.isPlainObject(f)&&a.isPlainObject(c)?a.merge.call({caseless:h},f,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(f,c,h){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f,h)}else return r(f,c,h)}function o(f,c){if(!a.isUndefined(c))return r(void 0,c)}function i(f,c){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,c)}function l(f,c,h){if(h in t)return r(f,c);if(h in e)return r(void 0,f)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(f,c)=>s(Ae(f),Ae(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const h=d[c]||s,b=h(e[c],t[c],c);a.isUndefined(b)&&h!==l||(n[c]=b)}),n}const Xe="1.5.1",he={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{he[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Te={};he.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Xe+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new g(s(i," has been removed"+(n?" in "+n:"")),g.ERR_DEPRECATED);return n&&!Te[i]&&(Te[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function Tn(e,t,n){if(typeof e!="object")throw new g("options must be an object",g.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],d=l===void 0||i(l,o,e);if(d!==!0)throw new g("option "+o+" must be "+d,g.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new g("Unknown option "+o,g.ERR_BAD_OPTION)}}const ce={assertOptions:Tn,validators:he},N=ce.validators;class V{constructor(t){this.defaults=t,this.interceptors={request:new we,response:new we}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=D(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ce.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ce.assertOptions(s,{encode:N.function,serialize:N.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),n.headers=P.concat(i,o);const l=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const f=[];this.interceptors.response.forEach(function(m){f.push(m.fulfilled,m.rejected)});let c,h=0,b;if(!d){const u=[Oe.bind(this),void 0];for(u.unshift.apply(u,l),u.push.apply(u,f),b=u.length,c=Promise.resolve(n);h<b;)c=c.then(u[h++],u[h++]);return c}b=l.length;let R=n;for(h=0;h<b;){const u=l[h++],m=l[h++];try{R=u(R)}catch(S){m.call(this,S);break}}try{c=Oe.call(this,R)}catch(u){return Promise.reject(u)}for(h=0,b=f.length;h<b;)c=c.then(f[h++],f[h++]);return c}getUri(t){t=D(this.defaults,t);const n=Ke(t.baseURL,t.url);return Me(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){V.prototype[t]=function(n,r){return this.request(D(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(D(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}V.prototype[t]=n(),V.prototype[t+"Form"]=n(!0)});const M=V;class me{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new q(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new me(function(s){t=s}),cancel:t}}}const Cn=me;function jn(e){return function(n){return e.apply(null,n)}}function Pn(e){return a.isObject(e)&&e.isAxiosError===!0}const le={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(le).forEach(([e,t])=>{le[t]=e});const kn=le;function Qe(e){const t=new M(e),n=Be(M.prototype.request,t);return a.extend(n,M.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Qe(D(e,s))},n}const E=Qe(pe);E.Axios=M;E.CanceledError=q;E.CancelToken=Cn;E.isCancel=We;E.VERSION=Xe;E.toFormData=X;E.AxiosError=g;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=jn;E.isAxiosError=Pn;E.mergeConfig=D;E.AxiosHeaders=P;E.formToJSON=e=>Ve(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=Ge.getAdapter;E.HttpStatusCode=kn;E.default=E;const Nn=E,Bn=Nn.create({baseURL:"https://65316c0d4d4c2e3f333cfa6a.mockapi.io/"}),Ln=async()=>{const{data:e}=await Bn.get("/cars");return e},Fn=y.li`
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
`,Dn=y.div`
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
`,Un=y.img`
display: block;
width: 100%;
height: 100%;
object-fit: cover;
`,Ce=y.button`
    position: absolute;
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    top: 14px;
    right: 14px;
`,$n=y(ot)`
fill: ${e=>e.theme.decorativeWhite};
width: 18px;
height: 18px;
transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover, &:focus {
fill: ${e=>e.theme.decorativePurple};
}
`,_n=y(it)`
fill: ${e=>e.theme.decorativePurple};
width: 18px;
height: 18px;
transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`,zn=y.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
`,In=y.div`
    margin-top: 7px;
    @media screen and (${w.desktop}) {
        margin-top: 14px;
    }
`,je=y.p`
    font-size: 10px;
    font-weight: 500;
    line-height: 1.5;
    @media screen and (${w.tablet}){
        font-size: 14px;
    }
    @media screen and (${w.desktop}) {
        font-size: 16px;
    }
`,qn=y.span`
    color: ${e=>e.theme.decorativePurple};
`,Hn=y.button`
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
`,Ye="/rental-test/assets/car-sample-64ec59fe.jpg";let B=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");const vn=y.ul`
    display: flex;
    width: 100%;
    column-gap: 6px;
    margin-bottom: 4px;
    overflow: hidden;
    white-space: nowrap;
    @media screen and (${w.desktop}){
        column-gap: 12px;
    }
`,Mn=y.li`
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
`,L=({items:e})=>p.jsx(vn,{children:e.map(t=>p.jsx(Mn,{children:t},B()))});L.propTypes={items:x.arrayOf(x.any)};const Ze=({isLiked:e,id:t,year:n,make:r,model:s,type:o,img:i,functionalities:l,rentalPrice:d,rentalCompany:f,address:c})=>{const h=c.split(", "),b=ht(),R=()=>{b(at(t))},u=()=>{b(ct(t))};return p.jsxs(Fn,{id:t,children:[p.jsxs("div",{children:[p.jsxs(Dn,{children:[p.jsx(Un,{src:i||Ye}),e?p.jsx(Ce,{onClick:u,children:p.jsx(_n,{})}):p.jsx(Ce,{onClick:R,children:p.jsx($n,{})})]}),p.jsxs(In,{children:[p.jsxs(zn,{children:[p.jsxs(je,{children:[r," ",p.jsx(qn,{children:s}),", ",n]}),p.jsx(je,{children:d})]}),p.jsx(L,{items:[h[1],h[2],f]}),p.jsx(L,{items:[o,s,t,l]})]})]}),p.jsx(Hn,{children:"Learn more"})]})};Ze.propTypes={id:x.number.isRequired,year:x.number.isRequired,make:x.string.isRequired,model:x.string.isRequired,type:x.string.isRequired,img:x.string.isRequired,functionalities:x.arrayOf(x.string).isRequired,rentalPrice:x.string.isRequired,rentalCompany:x.string.isRequired,address:x.string.isRequired,isLiked:x.bool};const Jn=y.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap:15px;
    @media screen and (${w.desktop}) {
        gap: 30px;
    }
`,Vn=e=>e.favourites.likes,et=({cars:e,onClick:t})=>{const n=lt(Vn);return p.jsx(Jn,{onClick:t,children:e.map(({id:r,year:s,make:o,model:i,type:l,img:d,functionalities:f,rentalPrice:c,rentalCompany:h,address:b})=>p.jsx(Ze,{id:r,address:b,year:s,make:o,model:i,type:l,img:d,rentalPrice:c,rentalCompany:h,functionalities:f,isLiked:n.includes(r)},B()))})};et.propTypes={cars:x.array,onClick:x.func};const Wn=y(ke.div)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: ${e=>e.theme.greyText};
`,Kn=y(ke.div)`
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
`,Gn=y.button`
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
`,Xn=y(ut)`
    fill: ${e=>e.theme.mainText};
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 20px;
    height: 20px;
    @media screen and (${w.desktop}){
        width: 24px;
        height: 24px;
    }
`,ne=y.div`
    margin-bottom: 24px;
`,Qn=y.div`
    border-radius: 14px;
    width: 100%;
    height: 180px;
    overflow: hidden;
    margin-bottom: 8px;
    @media screen and (${w.desktop}){
        height: 248px;
        margin-bottom: 14px;
    }
`,Yn=y.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,Zn=y.p`
    line-height: 1.42;
    font-size: 12px;
    @media screen and (${w.tablet}){
        font-size: 14px;
    }
`,Pe=y.p`
    line-height: 1.42;
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 12px;
    @media screen and (${w.tablet}){
        font-size: 14px;
    }
`,er=y.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    margin-bottom: 8px;
    & > span {
        color: ${e=>e.theme.decorativePurple};
    }
`,tr=y.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
`,re=y.li`
    background-color: ${e=>e.theme.oddBcg};
    border-radius: 35px;
    padding: 7px 14px;
`,se=y.p`
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.24px;
    color: ${e=>e.theme.lightGrey};
    & > span {
        font-weight: 600;
        color: ${e=>e.theme.decorativePurple};
    }
`,nr=y.a`
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
`,rr={initial:{opacity:0},isOn:{opacity:1,transition:{type:"spring",stiffness:100,damping:18}},exit:{opacity:0,transition:{type:"spring",stiffness:100,damping:18}}},tt=({car:e,closeMethod:t})=>{const{id:n,year:r,make:s,model:o,type:i,img:l,description:d,fuelConsumption:f,engineSize:c,accessories:h,functionalities:b,rentalPrice:R,address:u,rentalConditions:m,mileage:S}=e,A=u.split(", "),O=m.split(`
`),F=k=>{k.target===k.currentTarget&&t()};return _.useEffect(()=>{document.body.classList.add("close");const k=nt=>{nt.code==="Escape"&&t()};return window.addEventListener("keydown",k),()=>{document.body.classList.remove("close")}},[t]),p.jsx(Wn,{onClick:F,initial:"initial",animate:"isOn",exit:"exit",variants:rr,children:p.jsxs(Kn,{children:[p.jsx(Gn,{onClick:t,children:p.jsx(Xn,{})}),p.jsx(Qn,{children:p.jsx(Yn,{src:l||Ye})}),p.jsxs(er,{children:[s," ",p.jsx("span",{children:o}),", ",r]}),p.jsx(L,{items:[A[1],A[2],`Id: ${n}`,`Year: ${r}`,`Type: ${i}`]},B()),p.jsx(L,{items:[`Fuel Consumption: ${f}`,`Engine Size: ${c}`]},B()),d&&p.jsx(ne,{children:p.jsx(Zn,{children:d})}),(h||b)&&p.jsxs(ne,{children:[p.jsx(Pe,{children:"Accessories and functionalities:"}),b&&p.jsx(L,{items:b},B()),h&&p.jsx(L,{items:h},B())]}),p.jsx(Pe,{children:"Rental Conditions:"}),(O.length>0||S||R)&&p.jsx(ne,{children:p.jsxs(tr,{children:[O.map(k=>p.jsx(re,{children:p.jsx(se,{children:k})},B())),S&&p.jsx(re,{children:p.jsxs(se,{children:["Mileage: ",p.jsx("span",{children:S.toLocaleString("en-US")})]})}),R&&p.jsx(re,{children:p.jsxs(se,{children:["Price: ",p.jsx("span",{children:R})]})})]})}),p.jsx(nr,{href:"tel:+380730000000",children:"Rental car"})]})})};tt.propTypes={car:x.shape({id:x.number,year:x.number.isRequired,make:x.string.isRequired,model:x.string.isRequired,type:x.string,img:x.string,description:x.string,fuelConsumption:x.string,engineSize:x.string,accessories:x.arrayOf(x.string),functionalities:x.arrayOf(x.string),rentalPrice:x.string,address:x.string,rentalConditions:x.string,mileage:x.number}),closeMethod:x.func.isRequired};const or=()=>{const[e,t]=_.useState(!1),[n,r]=_.useState([]),[s,o]=_.useState(null);_.useEffect(()=>{async function d(){try{const f=await Ln();r(f)}catch{return}}d()},[]);const i=d=>{if(d.target.nodeName!=="BUTTON")return;const f=d.target.closest("li").id;try{const c=n.find(h=>Number(h.id)===Number(f));o(c),t(!0)}catch(c){console.log(c)}},l=()=>{t(!1),o(null)};return p.jsxs(p.Fragment,{children:[n&&p.jsx(et,{cars:n,onClick:i}),p.jsx(dt,{children:e&&p.jsx(tt,{closeMethod:l,car:s})})]})};export{or as default};

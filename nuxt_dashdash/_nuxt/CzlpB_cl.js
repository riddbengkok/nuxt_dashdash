var sr=Object.defineProperty;var _e=t=>{throw TypeError(t)};var or=(t,e,n)=>e in t?sr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var P=(t,e,n)=>or(t,typeof e!="symbol"?e+"":e,n),ar=(t,e,n)=>e.has(t)||_e("Cannot "+n);var K=(t,e,n)=>(ar(t,e,"read from private field"),n?n.call(t):e.get(t)),ke=(t,e,n)=>e.has(t)?_e("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);const ir=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,cr=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,fr=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function lr(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){ur(t);return}return e}function ur(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function dr(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!fr.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(ir.test(t)||cr.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,lr)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const pr=/#/g,hr=/&/g,mr=/\//g,gr=/=/g,ce=/\+/g,yr=/%5e/gi,br=/%60/gi,wr=/%7c/gi,vr=/%20/gi;function Ar(t){return encodeURI(""+t).replace(wr,"|")}function Nt(t){return Ar(typeof t=="string"?t:JSON.stringify(t)).replace(ce,"%2B").replace(vr,"+").replace(pr,"%23").replace(hr,"%26").replace(br,"`").replace(yr,"^").replace(mr,"%2F")}function _t(t){return Nt(t).replace(gr,"%3D")}function lt(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function _r(t){return lt(t.replace(ce," "))}function kr(t){return lt(t.replace(ce," "))}function Sr(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=_r(r[1]);if(s==="__proto__"||s==="constructor")continue;const o=kr(r[2]||"");e[s]===void 0?e[s]=o:Array.isArray(e[s])?e[s].push(o):e[s]=[e[s],o]}return e}function Er(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${_t(t)}=${Nt(n)}`).join("&"):`${_t(t)}=${Nt(e)}`:_t(t)}function Pr(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>Er(e,t[e])).filter(Boolean).join("&")}const Tr=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,xr=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,Cr=/^([/\\]\s*){2,}[^/\\]/,Or=/^[\s\0]*(blob|data|javascript|vbscript):$/i,Ir=/\/$|\/\?|\/#/,Mr=/^\.?\//;function fe(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?Tr.test(t):xr.test(t)||(e.acceptRelative?Cr.test(t):!1)}function di(t){return!!t&&Or.test(t)}function Lt(t="",e){return e?Ir.test(t):t.endsWith("/")}function ut(t="",e){if(!e)return(Lt(t)?t.slice(0,-1):t)||"/";if(!Lt(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),r=t.slice(s));const[o,...a]=n.split("?");return((o.endsWith("/")?o.slice(0,-1):o)||"/")+(a.length>0?`?${a.join("?")}`:"")+r}function Nr(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Lt(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[o,...a]=n.split("?");return o+"/"+(a.length>0?`?${a.join("?")}`:"")+r}function Lr(t,e){if(pn(e)||fe(t))return t;const n=ut(e);return t.startsWith(n)?t:Fr(n,t)}function pi(t,e){if(pn(e))return t;const n=ut(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function jr(t,e){const n=Dr(t),r={...Sr(n.search),...e};return n.search=Pr(r),zr(n)}function pn(t){return!t||t==="/"}function Rr(t){return t&&t!=="/"}function Fr(t,...e){let n=t||"";for(const r of e.filter(s=>Rr(s)))if(n){const s=r.replace(Mr,"");n=Nr(n)+s}else n=r;return n}function hi(...t){var a,i,f,l;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const c of n)if(!(!c||c==="/")){for(const[h,m]of c.split(e).entries())if(!(!m||m===".")){if(m===".."){if(r.length===1&&fe(r[0]))continue;r.pop(),s--;continue}if(h===1&&((a=r[r.length-1])!=null&&a.endsWith(":/"))){r[r.length-1]+="/"+m;continue}r.push(m),s++}}let o=r.join("/");return s>=0?(i=n[0])!=null&&i.startsWith("/")&&!o.startsWith("/")?o="/"+o:(f=n[0])!=null&&f.startsWith("./")&&!o.startsWith("./")&&(o="./"+o):o="../".repeat(-1*s)+o,(l=n[n.length-1])!=null&&l.endsWith("/")&&!o.endsWith("/")&&(o+="/"),o}function mi(t,e){return lt(ut(t))===lt(ut(e))}const hn=Symbol.for("ufo:protocolRelative");function Dr(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,h,m=""]=n;return{protocol:h.toLowerCase(),pathname:m,href:h+m,auth:"",host:"",search:"",hash:""}}if(!fe(t,{acceptRelative:!0}))return Se(t);const[,r="",s,o=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,a="",i=""]=o.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(i=i.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:f,search:l,hash:c}=Se(i);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:a,pathname:f,search:l,hash:c,[hn]:!r}}function Se(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function zr(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",o=t.host||"";return(t.protocol||t[hn]?(t.protocol||"")+"//":"")+s+o+e+n+r}class Hr extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function $r(t){var f,l,c,h,m;const e=((f=t.error)==null?void 0:f.message)||((l=t.error)==null?void 0:l.toString())||"",n=((c=t.request)==null?void 0:c.method)||((h=t.options)==null?void 0:h.method)||"GET",r=((m=t.request)==null?void 0:m.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,o=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",a=`${s}: ${o}${e?` ${e}`:""}`,i=new Hr(a,t.error?{cause:t.error}:void 0);for(const y of["request","options","response"])Object.defineProperty(i,y,{get(){return t[y]}});for(const[y,p]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(i,y,{get(){return t.response&&t.response[p]}});return i}const Br=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Ee(t="GET"){return Br.has(t.toUpperCase())}function Ur(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const Wr=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Yr=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Gr(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return Yr.test(e)?"json":Wr.has(e)||e.startsWith("text/")?"text":"blob"}function Vr(t,e,n,r){const s=qr((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let o;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(o={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:o,params:o,headers:s}}function qr(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,o]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,o);return r}async function st(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const Kr=new Set([408,409,425,429,500,502,503,504]),Xr=new Set([101,204,205,304]);function mn(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(i){const f=i.error&&i.error.name==="AbortError"&&!i.options.timeout||!1;if(i.options.retry!==!1&&!f){let c;typeof i.options.retry=="number"?c=i.options.retry:c=Ee(i.options.method)?0:1;const h=i.response&&i.response.status||500;if(c>0&&(Array.isArray(i.options.retryStatusCodes)?i.options.retryStatusCodes.includes(h):Kr.has(h))){const m=typeof i.options.retryDelay=="function"?i.options.retryDelay(i):i.options.retryDelay||0;return m>0&&await new Promise(y=>setTimeout(y,m)),o(i.request,{...i.options,retry:c-1})}}const l=$r(i);throw Error.captureStackTrace&&Error.captureStackTrace(l,o),l}const o=async function(f,l={}){const c={request:f,options:Vr(f,l,t.defaults,n),response:void 0,error:void 0};c.options.method&&(c.options.method=c.options.method.toUpperCase()),c.options.onRequest&&await st(c,c.options.onRequest),typeof c.request=="string"&&(c.options.baseURL&&(c.request=Lr(c.request,c.options.baseURL)),c.options.query&&(c.request=jr(c.request,c.options.query),delete c.options.query),"query"in c.options&&delete c.options.query,"params"in c.options&&delete c.options.params),c.options.body&&Ee(c.options.method)&&(Ur(c.options.body)?(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers||{}),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")):("pipeTo"in c.options.body&&typeof c.options.body.pipeTo=="function"||typeof c.options.body.pipe=="function")&&("duplex"in c.options||(c.options.duplex="half")));let h;if(!c.options.signal&&c.options.timeout){const y=new r;h=setTimeout(()=>{const p=new Error("[TimeoutError]: The operation was aborted due to timeout");p.name="TimeoutError",p.code=23,y.abort(p)},c.options.timeout),c.options.signal=y.signal}try{c.response=await e(c.request,c.options)}catch(y){return c.error=y,c.options.onRequestError&&await st(c,c.options.onRequestError),await s(c)}finally{h&&clearTimeout(h)}if((c.response.body||c.response._bodyInit)&&!Xr.has(c.response.status)&&c.options.method!=="HEAD"){const y=(c.options.parseResponse?"json":c.options.responseType)||Gr(c.response.headers.get("content-type")||"");switch(y){case"json":{const p=await c.response.text(),u=c.options.parseResponse||dr;c.response._data=u(p);break}case"stream":{c.response._data=c.response.body||c.response._bodyInit;break}default:c.response._data=await c.response[y]()}}return c.options.onResponse&&await st(c,c.options.onResponse),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await st(c,c.options.onResponseError),await s(c)):c.response},a=async function(f,l){return(await o(f,l))._data};return a.raw=o,a.native=(...i)=>e(...i),a.create=(i={},f={})=>mn({...t,...f,defaults:{...t.defaults,...f.defaults,...i}}),a}const dt=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Jr=dt.fetch?(...t)=>dt.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),Qr=dt.Headers,Zr=dt.AbortController,ts=mn({fetch:Jr,Headers:Qr,AbortController:Zr}),gi=ts;function jt(t,e={},n){for(const r in t){const s=t[r],o=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?jt(s,e,o):typeof s=="function"&&(e[o]=s)}return e}const es={run:t=>t()},ns=()=>es,gn=typeof console.createTask<"u"?console.createTask:ns;function rs(t,e){const n=e.shift(),r=gn(n);return t.reduce((s,o)=>s.then(()=>r.run(()=>o(...e))),Promise.resolve())}function ss(t,e){const n=e.shift(),r=gn(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function kt(t,e){for(const n of[...t])n(e)}class os{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let o;for(;this._deprecatedHooks[e];)o=this._deprecatedHooks[e],e=o.to;if(o&&!r.allowDeprecated){let a=o.message;a||(a=`${s} hook has been deprecated`+(o.to?`, please use ${o.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...o)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...o));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=jt(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=jt(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(rs,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(ss,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&kt(this._before,s);const o=e(n in this._hooks?[...this._hooks[n]]:[],r);return o instanceof Promise?o.finally(()=>{this._after&&s&&kt(this._after,s)}):(this._after&&s&&kt(this._after,s),o)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function as(){return new os}function is(t={}){let e,n=!1;const r=a=>{if(e&&e!==a)throw new Error("Context conflict")};let s;if(t.asyncContext){const a=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;a?s=new a:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const o=()=>{if(s){const a=s.getStore();if(a!==void 0)return a}return e};return{use:()=>{const a=o();if(a===void 0)throw new Error("Context is not available");return a},tryUse:()=>o(),set:(a,i)=>{i||r(a),e=a,n=!0},unset:()=>{e=void 0,n=!1},call:(a,i)=>{r(a),e=a;try{return s?s.run(a,i):i()}finally{n||(e=void 0)}},async callAsync(a,i){e=a;const f=()=>{e=a},l=()=>e===a?f:void 0;Rt.add(l);try{const c=s?s.run(a,i):i();return n||(e=void 0),await c}finally{Rt.delete(l)}}}}function cs(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=is({...t,...r})),e[n]}}}const pt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Pe="__unctx__",fs=pt[Pe]||(pt[Pe]=cs()),yi=(t,e={})=>fs.get(t,e),Te="__unctx_async_handlers__",Rt=pt[Te]||(pt[Te]=new Set);function bi(t){const e=[];for(const s of Rt){const o=s();o&&e.push(o)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}function ls(t,e){return{ctx:{table:t},matchAll:n=>bn(n,t)}}function yn(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,yn(s)])):new Map(Object.entries(t[n]));return e}function wi(t){return ls(yn(t))}function bn(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[o,a]of xe(e.wildcard))(t===o||t.startsWith(o+"/"))&&r.push(a);for(const[o,a]of xe(e.dynamic))if(t.startsWith(o+"/")){const i="/"+t.slice(o.length).split("/").splice(2).join("/");r.push(...bn(i,a))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function xe(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function St(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Ft(t,e,n=".",r){if(!St(e))return Ft(t,{},n,r);const s=Object.assign({},e);for(const o in t){if(o==="__proto__"||o==="constructor")continue;const a=t[o];a!=null&&(r&&r(s,o,a,n)||(Array.isArray(a)&&Array.isArray(s[o])?s[o]=[...a,...s[o]]:St(a)&&St(s[o])?s[o]=Ft(a,s[o],(n?`${n}.`:"")+o.toString(),r):s[o]=a))}return s}function us(t){return(...e)=>e.reduce((n,r)=>Ft(n,r,"",t),{})}const vi=us();function ds(t,e){try{return e in t}catch{return!1}}class Dt extends Error{constructor(n,r={}){super(n,r);P(this,"statusCode",500);P(this,"fatal",!1);P(this,"unhandled",!1);P(this,"statusMessage");P(this,"data");P(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:zt(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=wn(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}P(Dt,"__h3_error__",!0);function Ai(t){if(typeof t=="string")return new Dt(t);if(ps(t))return t;const e=new Dt(t.message??t.statusMessage??"",{cause:t.cause||t});if(ds(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=zt(t.statusCode,e.statusCode):t.status&&(e.statusCode=zt(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;wn(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function ps(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const hs=/[^\u0009\u0020-\u007E]/g;function wn(t=""){return t.replace(hs,"")}function zt(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}function Ce(t){const e=gs(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const ms="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function gs(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=ms.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const ys=-1,bs=-2,ws=-3,vs=-4,As=-5,_s=-6;function _i(t,e){return ks(JSON.parse(t),e)}function ks(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(o,a=!1){if(o===ys)return;if(o===ws)return NaN;if(o===vs)return 1/0;if(o===As)return-1/0;if(o===_s)return-0;if(a)throw new Error("Invalid input");if(o in r)return r[o];const i=n[o];if(!i||typeof i!="object")r[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const f=i[0],l=e==null?void 0:e[f];if(l)return r[o]=l(s(i[1]));switch(f){case"Date":r[o]=new Date(i[1]);break;case"Set":const c=new Set;r[o]=c;for(let y=1;y<i.length;y+=1)c.add(s(i[y]));break;case"Map":const h=new Map;r[o]=h;for(let y=1;y<i.length;y+=2)h.set(s(i[y]),s(i[y+1]));break;case"RegExp":r[o]=new RegExp(i[1],i[2]);break;case"Object":r[o]=Object(i[1]);break;case"BigInt":r[o]=BigInt(i[1]);break;case"null":const m=Object.create(null);r[o]=m;for(let y=1;y<i.length;y+=2)m[i[y]]=s(i[y+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const y=globalThis[f],p=i[1],u=Ce(p),g=new y(u);r[o]=g;break}case"ArrayBuffer":{const y=i[1],p=Ce(y);r[o]=p;break}default:throw new Error(`Unknown type ${f}`)}}else{const f=new Array(i.length);r[o]=f;for(let l=0;l<i.length;l+=1){const c=i[l];c!==bs&&(f[l]=s(c))}}else{const f={};r[o]=f;for(const l in i){const c=i[l];f[l]=s(c)}}return r[o]}return s(0)}const Ss=new Set(["link","style","script","noscript"]),Es=new Set(["title","titleTemplate","script","style","noscript"]),Oe=new Set(["base","meta","link","style","script","noscript"]),Ps=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Ts=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),xs=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),Cs=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Os=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const Is=["name","property","http-equiv"],Ms=new Set(["viewport","description","keywords","robots"]);function vn(t){const e=t.split(":");return e.length?Os.has(e[1]):!1}function Ht(t){const{props:e,tag:n}=t;if(Ts.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of Is)if(e[r]!==void 0){const s=e[r],o=s.includes(":"),a=Ms.has(s),f=!(o||a)&&t.key?`:key:${t.key}`:"";return`${n}:${s}${f}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(Es.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function Ie(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function $t(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let s;if(e&&(s=e(n,t)),Array.isArray(s))return s.map(o=>$t(o,e));if((s==null?void 0:s.constructor)===Object){const o={};for(const a of Object.keys(s))o[a]=$t(s[a],e,a);return o}return s}function Ns(t,e){const n=t==="style"?new Map:new Set;function r(s){const o=s.trim();if(o)if(t==="style"){const[a,...i]=o.split(":").map(f=>f.trim());a&&i.length&&n.set(a,i.join(":"))}else o.split(" ").filter(Boolean).forEach(a=>n.add(a))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(s=>r(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,o])=>{o&&o!=="false"&&(t==="style"?n.set(s.trim(),o):r(s))}),n}function An(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=Ns(n,r);return}if(xs.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let a=e.type;if(e.type||(a="application/json"),!(a!=null&&a.endsWith("json"))&&a!=="speculationrules")return;e.type=a,t.props.type=a,t[n]=JSON.stringify(r)}else t[n]=r;return}const s=String(r),o=n.startsWith("data-");s==="true"||s===""?t.props[n]=o?s:!0:!r&&o&&s==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t}function Ls(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=An({tag:t,props:{}},n);return r.key&&Ss.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function js(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,o)=>{for(let a=0;a<e.length;a++)o=e[a](s,o);return o};t=n(void 0,t);const r=[];return t=$t(t,n),Object.entries(t||{}).forEach(([s,o])=>{if(o!==void 0)for(const a of Array.isArray(o)?o:[o])r.push(Ls(s,a))}),r.flat()}const Bt=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Me={base:-10,title:10},Rs={critical:-8,high:-1,low:2},Ne={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},Fs=/@import/,X=t=>t===""||t===!0;function Ds(t,e){var o;if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=Rs[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Ne;if(e.tag in Me)n=Me[e.tag];else if(e.tag==="meta"){const a=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;a&&(n=Ne.meta[a])}else e.tag==="link"&&e.props.rel?n=s.link[e.props.rel]:e.tag==="script"?X(e.props.async)?n=s.script.async:e.props.src&&!X(e.props.defer)&&!X(e.props.async)&&e.props.type!=="module"&&!((o=e.props.type)!=null&&o.endsWith("json"))?n=s.script.sync:X(e.props.defer)&&e.props.src&&!X(e.props.async)&&(n=s.script.defer):e.tag==="style"&&(n=e.innerHTML&&Fs.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function Le(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function zs(t={}){var i;const e=as();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,s=new Map,o=new Set,a={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:f=>Le(a,f),push(f,l){const c={...l||{}};delete c.head;const h=c._index??a._entryCount++,m={_i:h,input:f,options:c},y={_poll(p=!1){a.dirty=!0,!p&&o.add(h),e.callHook("entries:updated",a)},dispose(){r.delete(h)&&a.invalidate()},patch(p){(!c.mode||c.mode==="server"&&n||c.mode==="client"&&!n)&&(m.input=p,r.set(h,m),y._poll())}};return y.patch(f),y},async resolveTags(){var y;const f={tagMap:new Map,tags:[],entries:[...a.entries.values()]};for(await e.callHook("entries:resolve",f);o.size;){const p=o.values().next().value;o.delete(p);const u=r.get(p);if(u){const g={tags:js(u.input,t.propResolvers||[]).map(w=>Object.assign(w,u.options)),entry:u};await e.callHook("entries:normalize",g),u._tags=g.tags.map((w,v)=>(w._w=Ds(a,w),w._p=(u._i<<10)+v,w._d=Ht(w),w))}}let l=!1;f.entries.flatMap(p=>(p._tags||[]).map(u=>({...u,props:{...u.props}}))).sort(Bt).reduce((p,u)=>{const g=String(u._d||u._p);if(!p.has(g))return p.set(g,u);const w=p.get(g);if(((u==null?void 0:u.tagDuplicateStrategy)||(Cs.has(u.tag)?"merge":null)||(u.key&&u.key===w.key?"merge":null))==="merge"){const A={...w.props};Object.entries(u.props).forEach(([S,_])=>A[S]=S==="style"?new Map([...w.props.style||new Map,..._]):S==="class"?new Set([...w.props.class||new Set,..._]):_),p.set(g,{...u,props:A})}else u._p>>10===w._p>>10&&u.tag==="meta"&&vn(g)?(p.set(g,Object.assign([...Array.isArray(w)?w:[w],u],u)),l=!0):(u._w===w._w?u._p>w._p:(u==null?void 0:u._w)<(w==null?void 0:w._w))&&p.set(g,u);return p},f.tagMap);const c=f.tagMap.get("title"),h=f.tagMap.get("titleTemplate");if(a._title=c==null?void 0:c.textContent,h){const p=h==null?void 0:h.textContent;if(a._titleTemplate=p,p){let u=typeof p=="function"?p(c==null?void 0:c.textContent):p;typeof u=="string"&&!a.plugins.has("template-params")&&(u=u.replace("%s",(c==null?void 0:c.textContent)||"")),c?u===null?f.tagMap.delete("title"):f.tagMap.set("title",{...c,textContent:u}):(h.tag="title",h.textContent=u)}}f.tags=Array.from(f.tagMap.values()),l&&(f.tags=f.tags.flat().sort(Bt)),await e.callHook("tags:beforeResolve",f),await e.callHook("tags:resolve",f),await e.callHook("tags:afterResolve",f);const m=[];for(const p of f.tags){const{innerHTML:u,tag:g,props:w}=p;if(Ps.has(g)&&!(Object.keys(w).length===0&&!p.innerHTML&&!p.textContent)&&!(g==="meta"&&!w.content&&!w["http-equiv"]&&!w.charset)){if(g==="script"&&u){if((y=w.type)!=null&&y.endsWith("json")){const v=typeof u=="string"?u:JSON.stringify(u);p.innerHTML=v.replace(/</g,"\\u003C")}else typeof u=="string"&&(p.innerHTML=u.replace(new RegExp(`</${g}`,"g"),`<\\/${g}`));p._d=Ht(p)}m.push(p)}}return m},invalidate(){for(const f of r.values())o.add(f._i);a.dirty=!0,e.callHook("entries:updated",a)}};return((t==null?void 0:t.plugins)||[]).forEach(f=>Le(a,f)),a.hooks.callHook("init",a),(i=t.init)==null||i.forEach(f=>f&&a.push(f)),a}const L="%separator",Hs=new RegExp(`${L}(?:\\s*${L})*`,"g");function $s(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const o=e.indexOf(".");r=(s=t[e.substring(0,o)])==null?void 0:s[e.substring(o+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function ot(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const o=s.match(/%\w+(?:\.\w+)?/g);if(!o)return t;const a=t.includes(L);return t=t.replace(/%\w+(?:\.\w+)?/g,i=>{if(i===L||!o.includes(i))return i;const f=$s(e,i.slice(1),r);return f!==void 0?f:i}).trim(),a&&(t.endsWith(L)&&(t=t.slice(0,-L.length)),t.startsWith(L)&&(t=t.slice(L.length)),t=t.replace(Hs,n||"").trim()),t}const je=t=>t.includes(":key")?t:t.split(":").join(":key:"),ki={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const r=n.tagPriority;if(!r)continue;const s=String(r);if(s.startsWith("before:")){const o=je(s.slice(7)),a=t.tagMap.get(o);a&&(typeof a.tagPriority=="number"&&(n.tagPriority=a.tagPriority),n._p=a._p-1,e=!0)}else if(s.startsWith("after:")){const o=je(s.slice(6)),a=t.tagMap.get(o);a&&(typeof a.tagPriority=="number"&&(n.tagPriority=a.tagPriority),n._p=a._p+1,e=!0)}}e&&(t.tags=t.tags.sort(Bt))}}},Si={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function Ut(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>Ut(n)));if((t==null?void 0:t.constructor)===Object){const n={};for(const r of Object.keys(t))n[r]=await Ut(t[r]);return n}return t}const Ei={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(Ut(t.entries[n].input).then(r=>{t.entries[n].input=r,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},Bs={meta:"content",link:"href",htmlAttrs:"lang"},Us=["innerHTML","textContent"],Pi=t=>({key:"template-params",hooks:{"entries:normalize":e=>{var r,s,o;const n=((s=(r=e.tags.filter(a=>a.tag==="templateParams"&&a.mode==="server"))==null?void 0:r[0])==null?void 0:s.props)||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...((o=t._ssrPayload)==null?void 0:o.templateParams)||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{var o;const r=((o=e.get("templateParams"))==null?void 0:o.props)||{},s=r.separator||"|";delete r.separator,r.pageTitle=ot(r.pageTitle||t._title||"",r,s);for(const a of n){if(a.processTemplateParams===!1)continue;const i=Bs[a.tag];if(i&&typeof a.props[i]=="string")a.props[i]=ot(a.props[i],r,s);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const f of Us)typeof a[f]=="string"&&(a[f]=ot(a[f],r,s,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=r,t._separator=s},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n!=null&&n.textContent&&n.processTemplateParams!==!1&&(n.textContent=ot(n.textContent,t._templateParams,t._separator))}}});async function Ws(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var y;const o=new Map,a=new Promise(p=>{t.resolveTags().then(u=>{p(u.map(g=>{const w=o.get(g._d)||0,v={tag:g,id:(w?`${g._d}:${w}`:g._d)||Ie(g),shouldRender:!0};return g._d&&vn(g._d)&&o.set(g._d,w+1),v}))})});let i=t._dom;if(!i){i={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const p of["body","head"]){const u=(y=n[p])==null?void 0:y.children;for(const g of u){const w=g.tagName.toLowerCase();if(!Oe.has(w))continue;const v=An({tag:w,props:{}},{innerHTML:g.innerHTML,...g.getAttributeNames().reduce((A,S)=>(A[S]=g.getAttribute(S),A),{})||{}});if(v.key=g.getAttribute("data-hid")||void 0,v._d=Ht(v)||Ie(v),i.elMap.has(v._d)){let A=1,S=v._d;for(;i.elMap.has(S);)S=`${v._d}:${A++}`;i.elMap.set(S,g)}else i.elMap.set(v._d,g)}}}i.pendingSideEffects={...i.sideEffects},i.sideEffects={};function f(p,u,g){const w=`${p}:${u}`;i.sideEffects[w]=g,delete i.pendingSideEffects[w]}function l({id:p,$el:u,tag:g}){const w=g.tag.endsWith("Attrs");i.elMap.set(p,u),w||(g.textContent&&g.textContent!==u.textContent&&(u.textContent=g.textContent),g.innerHTML&&g.innerHTML!==u.innerHTML&&(u.innerHTML=g.innerHTML),f(p,"el",()=>{u==null||u.remove(),i.elMap.delete(p)}));for(const v in g.props){if(!Object.prototype.hasOwnProperty.call(g.props,v))continue;const A=g.props[v];if(v.startsWith("on")&&typeof A=="function"){const _=u==null?void 0:u.dataset;if(_&&_[`${v}fired`]){const z=v.slice(0,-5);A.call(u,new Event(z.substring(2)))}u.getAttribute(`data-${v}`)!==""&&((g.tag==="bodyAttrs"?n.defaultView:u).addEventListener(v.substring(2),A.bind(u)),u.setAttribute(`data-${v}`,""));continue}const S=`attr:${v}`;if(v==="class"){if(!A)continue;for(const _ of A)w&&f(p,`${S}:${_}`,()=>u.classList.remove(_)),!u.classList.contains(_)&&u.classList.add(_)}else if(v==="style"){if(!A)continue;for(const[_,z]of A)f(p,`${S}:${_}`,()=>{u.style.removeProperty(_)}),u.style.setProperty(_,z)}else A!==!1&&A!==null&&(u.getAttribute(v)!==A&&u.setAttribute(v,A===!0?"":String(A)),w&&f(p,S,()=>u.removeAttribute(v)))}}const c=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0},m=await a;for(const p of m){const{tag:u,shouldRender:g,id:w}=p;if(g){if(u.tag==="title"){n.title=u.textContent,f("title","",()=>n.title=i.title);continue}p.$el=p.$el||i.elMap.get(w),p.$el?l(p):Oe.has(u.tag)&&c.push(p)}}for(const p of c){const u=p.tag.tagPosition||"head";p.$el=n.createElement(p.tag.tag),l(p),h[u]=h[u]||n.createDocumentFragment(),h[u].appendChild(p.$el)}for(const p of m)await t.hooks.callHook("dom:renderTag",p,n,f);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const p in i.pendingSideEffects)i.pendingSideEffects[p]();t._dom=i,await t.hooks.callHook("dom:rendered",{renders:m}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function Ti(t={}){var r,s,o;const e=((r=t.domOptions)==null?void 0:r.render)||Ws;t.document=t.document||(typeof window<"u"?document:void 0);const n=((o=(s=t.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:o.innerHTML)||!1;return zs({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function xi(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}const Ys=(t,e)=>e.some(n=>t instanceof n);let Re,Fe;function Gs(){return Re||(Re=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vs(){return Fe||(Fe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _n=new WeakMap,Wt=new WeakMap,kn=new WeakMap,Et=new WeakMap,le=new WeakMap;function qs(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(j(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&_n.set(n,t)}).catch(()=>{}),le.set(e,t),e}function Ks(t){if(Wt.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});Wt.set(t,e)}let Yt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return j(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xs(t){Yt=t(Yt)}function Js(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pt(this),e,...n);return kn.set(r,e.sort?e.sort():[e]),j(r)}:Vs().includes(t)?function(...e){return t.apply(Pt(this),e),j(_n.get(this))}:function(...e){return j(t.apply(Pt(this),e))}}function Qs(t){return typeof t=="function"?Js(t):(t instanceof IDBTransaction&&Ks(t),Ys(t,Gs())?new Proxy(t,Yt):t)}function j(t){if(t instanceof IDBRequest)return qs(t);if(Et.has(t))return Et.get(t);const e=Qs(t);return e!==t&&(Et.set(t,e),le.set(e,t)),e}const Pt=t=>le.get(t);function Ci(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),i=j(a);return r&&a.addEventListener("upgradeneeded",f=>{r(j(a.result),f.oldVersion,f.newVersion,j(a.transaction),f)}),n&&a.addEventListener("blocked",f=>n(f.oldVersion,f.newVersion,f)),i.then(f=>{o&&f.addEventListener("close",()=>o()),s&&f.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),i}const Zs=["get","getKey","getAll","getAllKeys","count"],to=["put","add","delete","clear"],Tt=new Map;function De(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tt.get(e))return Tt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=to.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zs.includes(n)))return;const o=async function(a,...i){const f=this.transaction(a,s?"readwrite":"readonly");let l=f.store;return r&&(l=l.index(i.shift())),(await Promise.all([l[n](...i),s&&f.done]))[0]};return Tt.set(e,o),o}Xs(t=>({...t,get:(e,n,r)=>De(e,n)||t.get(e,n,r),has:(e,n)=>!!De(e,n)||t.has(e,n)}));function Oi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function eo(t,e,n){return(e=ro(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ze(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ze(Object(n),!0).forEach(function(r){eo(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ze(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function no(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ro(t){var e=no(t,"string");return typeof e=="symbol"?e:e+""}const He=()=>{};let ue={},Sn={},En=null,Pn={mark:He,measure:He};try{typeof window<"u"&&(ue=window),typeof document<"u"&&(Sn=document),typeof MutationObserver<"u"&&(En=MutationObserver),typeof performance<"u"&&(Pn=performance)}catch{}const{userAgent:$e=""}=ue.navigator||{},R=ue,k=Sn,Be=En,at=Pn;R.document;const M=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",Tn=~$e.indexOf("MSIE")||~$e.indexOf("Trident/");var so=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,oo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,xn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ao={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Cn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],E="classic",gt="duotone",io="sharp",co="sharp-duotone",On=[E,gt,io,co],fo={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},lo={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},uo=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),po={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ho=["fak","fa-kit","fakd","fa-kit-duotone"],Ue={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},mo=["kit"],go={kit:{"fa-kit":"fak"}},yo=["fak","fakd"],bo={kit:{fak:"fa-kit"}},We={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},it={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wo=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],vo=["fak","fa-kit","fakd","fa-kit-duotone"],Ao={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_o={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},ko={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Gt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},So=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Vt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...wo,...So],Eo=["solid","regular","light","thin","duotone","brands"],In=[1,2,3,4,5,6,7,8,9,10],Po=In.concat([11,12,13,14,15,16,17,18,19,20]),To=[...Object.keys(ko),...Eo,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",it.GROUP,it.SWAP_OPACITY,it.PRIMARY,it.SECONDARY].concat(In.map(t=>"".concat(t,"x"))).concat(Po.map(t=>"w-".concat(t))),xo={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const O="___FONT_AWESOME___",qt=16,Mn="fa",Nn="svg-inline--fa",B="data-fa-i2svg",Kt="data-fa-pseudo-element",Co="data-fa-pseudo-element-pending",de="data-prefix",pe="data-icon",Ye="fontawesome-i2svg",Oo="async",Io=["HTML","HEAD","STYLE","SCRIPT"],Ln=(()=>{try{return!0}catch{return!1}})();function nt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[E]}})}const jn=d({},xn);jn[E]=d(d(d(d({},{"fa-duotone":"duotone"}),xn[E]),Ue.kit),Ue["kit-duotone"]);const Mo=nt(jn),Xt=d({},po);Xt[E]=d(d(d(d({},{duotone:"fad"}),Xt[E]),We.kit),We["kit-duotone"]);const Ge=nt(Xt),Jt=d({},Gt);Jt[E]=d(d({},Jt[E]),bo.kit);const he=nt(Jt),Qt=d({},_o);Qt[E]=d(d({},Qt[E]),go.kit);nt(Qt);const No=so,Rn="fa-layers-text",Lo=oo,jo=d({},fo);nt(jo);const Ro=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xt=ao,Fo=[...mo,...To],Q=R.FontAwesomeConfig||{};function Do(t){var e=k.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function zo(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}k&&typeof k.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=zo(Do(n));s!=null&&(Q[r]=s)});const Fn={styleDefault:"solid",familyDefault:E,cssPrefix:Mn,replacementClass:Nn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q.familyPrefix&&(Q.cssPrefix=Q.familyPrefix);const V=d(d({},Fn),Q);V.autoReplaceSvg||(V.observeMutations=!1);const b={};Object.keys(Fn).forEach(t=>{Object.defineProperty(b,t,{enumerable:!0,set:function(e){V[t]=e,Z.forEach(n=>n(b))},get:function(){return V[t]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){V.cssPrefix=t,Z.forEach(e=>e(b))},get:function(){return V.cssPrefix}});R.FontAwesomeConfig=b;const Z=[];function Ho(t){return Z.push(t),()=>{Z.splice(Z.indexOf(t),1)}}const N=qt,x={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $o(t){if(!t||!M)return;const e=k.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=k.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const o=n[s],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return k.head.insertBefore(e,r),t}const Bo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tt(){let t=12,e="";for(;t-- >0;)e+=Bo[Math.random()*62|0];return e}function q(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function me(t){return t.classList?q(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Dn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Uo(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Dn(t[n]),'" '),"").trim()}function yt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ge(t){return t.size!==x.size||t.x!==x.x||t.y!==x.y||t.rotate!==x.rotate||t.flipX||t.flipY}function Wo(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(a," ").concat(i)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:f,path:l}}function Yo(t){let{transform:e,width:n=qt,height:r=qt,startCentered:s=!1}=t,o="";return s&&Tn?o+="translate(".concat(e.x/N-n/2,"em, ").concat(e.y/N-r/2,"em) "):s?o+="translate(calc(-50% + ".concat(e.x/N,"em), calc(-50% + ").concat(e.y/N,"em)) "):o+="translate(".concat(e.x/N,"em, ").concat(e.y/N,"em) "),o+="scale(".concat(e.size/N*(e.flipX?-1:1),", ").concat(e.size/N*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Go=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function zn(){const t=Mn,e=Nn,n=b.cssPrefix,r=b.replacementClass;let s=Go;if(n!==t||r!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");s=s.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(i,".".concat(r))}return s}let Ve=!1;function Ct(){b.autoAddCss&&!Ve&&($o(zn()),Ve=!0)}var Vo={mixout(){return{dom:{css:zn,insertCss:Ct}}},hooks(){return{beforeDOMElementCreation(){Ct()},beforeI2svg(){Ct()}}}};const I=R||{};I[O]||(I[O]={});I[O].styles||(I[O].styles={});I[O].hooks||(I[O].hooks={});I[O].shims||(I[O].shims=[]);var C=I[O];const Hn=[],$n=function(){k.removeEventListener("DOMContentLoaded",$n),ht=1,Hn.map(t=>t())};let ht=!1;M&&(ht=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),ht||k.addEventListener("DOMContentLoaded",$n));function qo(t){M&&(ht?setTimeout(t,0):Hn.push(t))}function rt(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Dn(t):"<".concat(e," ").concat(Uo(n),">").concat(r.map(rt).join(""),"</").concat(e,">")}function qe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ot=function(e,n,r,s){var o=Object.keys(e),a=o.length,i=n,f,l,c;for(r===void 0?(f=1,c=e[o[0]]):(f=0,c=r);f<a;f++)l=o[f],c=i(c,e[l],l,e);return c};function Ko(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((s&1023)<<10)+(o&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Zt(t){const e=Ko(t);return e.length===1?e[0].toString(16):null}function Xo(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Ke(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function te(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Ke(e);typeof C.hooks.addPack=="function"&&!r?C.hooks.addPack(t,Ke(e)):C.styles[t]=d(d({},C.styles[t]||{}),s),t==="fas"&&te("fa",e)}const{styles:et,shims:Jo}=C,Bn=Object.keys(he),Qo=Bn.reduce((t,e)=>(t[e]=Object.keys(he[e]),t),{});let ye=null,Un={},Wn={},Yn={},Gn={},Vn={};function Zo(t){return~Fo.indexOf(t)}function ta(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!Zo(s)?s:null}const qn=()=>{const t=r=>Ot(et,(s,o,a)=>(s[a]=Ot(o,r,{}),s),{});Un=t((r,s,o)=>(s[3]&&(r[s[3]]=o),s[2]&&s[2].filter(i=>typeof i=="number").forEach(i=>{r[i.toString(16)]=o}),r)),Wn=t((r,s,o)=>(r[o]=o,s[2]&&s[2].filter(i=>typeof i=="string").forEach(i=>{r[i]=o}),r)),Vn=t((r,s,o)=>{const a=s[2];return r[o]=o,a.forEach(i=>{r[i]=o}),r});const e="far"in et||b.autoFetchSvg,n=Ot(Jo,(r,s)=>{const o=s[0];let a=s[1];const i=s[2];return a==="far"&&!e&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:i}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:i}),r},{names:{},unicodes:{}});Yn=n.names,Gn=n.unicodes,ye=bt(b.styleDefault,{family:b.familyDefault})};Ho(t=>{ye=bt(t.styleDefault,{family:b.familyDefault})});qn();function be(t,e){return(Un[t]||{})[e]}function ea(t,e){return(Wn[t]||{})[e]}function $(t,e){return(Vn[t]||{})[e]}function Kn(t){return Yn[t]||{prefix:null,iconName:null}}function na(t){const e=Gn[t],n=be("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function F(){return ye}const Xn=()=>({prefix:null,iconName:null,rest:[]});function ra(t){let e=E;const n=Bn.reduce((r,s)=>(r[s]="".concat(b.cssPrefix,"-").concat(s),r),{});return On.forEach(r=>{(t.includes(n[r])||t.some(s=>Qo[r].includes(s)))&&(e=r)}),e}function bt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=E}=e,r=Mo[n][t];if(n===gt&&!t)return"fad";const s=Ge[n][t]||Ge[n][r],o=t in C.styles?t:null;return s||o||null}function sa(t){let e=[],n=null;return t.forEach(r=>{const s=ta(b.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Xe(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function wt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=Vt.concat(vo),o=Xe(t.filter(h=>s.includes(h))),a=Xe(t.filter(h=>!Vt.includes(h))),i=o.filter(h=>(r=h,!Cn.includes(h))),[f=null]=i,l=ra(o),c=d(d({},sa(a)),{},{prefix:bt(f,{family:l})});return d(d(d({},c),ca({values:t,family:l,styles:et,config:b,canonical:c,givenPrefix:r})),oa(n,r,c))}function oa(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const o=e==="fa"?Kn(s):{},a=$(r,s);return s=o.iconName||a||s,r=o.prefix||r,r==="far"&&!et.far&&et.fas&&!b.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const aa=On.filter(t=>t!==E||t!==gt),ia=Object.keys(Gt).filter(t=>t!==E).map(t=>Object.keys(Gt[t])).flat();function ca(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:o={},config:a={}}=t,i=n===gt,f=e.includes("fa-duotone")||e.includes("fad"),l=a.familyDefault==="duotone",c=r.prefix==="fad"||r.prefix==="fa-duotone";if(!i&&(f||l||c)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&aa.includes(n)&&(Object.keys(o).find(m=>ia.includes(m))||a.autoFetchSvg)){const m=uo.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=$(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=F()||"fas"),r}class fa{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(o=>{this.definitions[o]=d(d({},this.definitions[o]||{}),s[o]),te(o,s[o]);const a=he[E][o];a&&te(a,s[o]),qn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:o,iconName:a,icon:i}=r[s],f=i[2];e[o]||(e[o]={}),f.length>0&&f.forEach(l=>{typeof l=="string"&&(e[o][l]=i)}),e[o][a]=i}),e}}let Je=[],W={};const G={},la=Object.keys(G);function ua(t,e){let{mixoutsTo:n}=e;return Je=t,W={},Object.keys(G).forEach(r=>{la.indexOf(r)===-1&&delete G[r]}),Je.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(o=>{typeof s[o]=="function"&&(n[o]=s[o]),typeof s[o]=="object"&&Object.keys(s[o]).forEach(a=>{n[o]||(n[o]={}),n[o][a]=s[o][a]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(a=>{W[a]||(W[a]=[]),W[a].push(o[a])})}r.provides&&r.provides(G)}),n}function ee(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(W[t]||[]).forEach(a=>{e=a.apply(null,[e,...r])}),e}function U(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(W[t]||[]).forEach(o=>{o.apply(null,n)})}function D(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return G[t]?G[t].apply(null,e):void 0}function ne(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||F();if(e)return e=$(n,e)||e,qe(Jn.definitions,n,e)||qe(C.styles,n,e)}const Jn=new fa,da=()=>{b.autoReplaceSvg=!1,b.observeMutations=!1,U("noAuto")},pa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(U("beforeI2svg",t),D("pseudoElements2svg",t),D("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,qo(()=>{ma({autoReplaceSvgRoot:e}),U("watch",t)})}},ha={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:$(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=bt(t[0]);return{prefix:n,iconName:$(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(No))){const e=wt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||F(),iconName:$(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=F();return{prefix:e,iconName:$(e,t)||t}}}},T={noAuto:da,config:b,dom:pa,parse:ha,library:Jn,findIconDefinition:ne,toHtml:rt},ma=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=k}=t;(Object.keys(C.styles).length>0||b.autoFetchSvg)&&M&&b.autoReplaceSvg&&T.dom.i2svg({node:e})};function vt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>rt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!M)return;const n=k.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ga(t){let{children:e,main:n,mask:r,attributes:s,styles:o,transform:a}=t;if(ge(a)&&n.found&&!r.found){const{width:i,height:f}=n,l={x:i/f/2,y:.5};s.style=yt(d(d({},o),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function ya(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:o}=t;const a=o===!0?"".concat(e,"-").concat(b.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},s),{},{id:a}),children:r}]}]}function we(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:o,symbol:a,title:i,maskId:f,titleId:l,extra:c,watchable:h=!1}=t,{width:m,height:y}=n.found?n:e,p=yo.includes(r),u=[b.replacementClass,s?"".concat(b.cssPrefix,"-").concat(s):""].filter(_=>c.classes.indexOf(_)===-1).filter(_=>_!==""||!!_).concat(c.classes).join(" ");let g={children:[],attributes:d(d({},c.attributes),{},{"data-prefix":r,"data-icon":s,class:u,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(y)})};const w=p&&!~c.classes.indexOf("fa-fw")?{width:"".concat(m/y*16*.0625,"em")}:{};h&&(g.attributes[B]=""),i&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(l||tt())},children:[i]}),delete g.attributes.title);const v=d(d({},g),{},{prefix:r,iconName:s,main:e,mask:n,maskId:f,transform:o,symbol:a,styles:d(d({},w),c.styles)}),{children:A,attributes:S}=n.found&&e.found?D("generateAbstractMask",v)||{children:[],attributes:{}}:D("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=A,v.attributes=S,a?ya(v):ga(v)}function Qe(t){const{content:e,width:n,height:r,transform:s,title:o,extra:a,watchable:i=!1}=t,f=d(d(d({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});i&&(f[B]="");const l=d({},a.styles);ge(s)&&(l.transform=Yo({transform:s,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const c=yt(l);c.length>0&&(f.style=c);const h=[];return h.push({tag:"span",attributes:f,children:[e]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function ba(t){const{content:e,title:n,extra:r}=t,s=d(d(d({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=yt(r.styles);o.length>0&&(s.style=o);const a=[];return a.push({tag:"span",attributes:s,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}const{styles:It}=C;function re(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(xt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(xt.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const wa={found:!1,width:512,height:512};function va(t,e){!Ln&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function se(t,e){let n=e;return e==="fa"&&b.styleDefault!==null&&(e=F()),new Promise((r,s)=>{if(n==="fa"){const o=Kn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&It[e]&&It[e][t]){const o=It[e][t];return r(re(o))}va(t,e),r(d(d({},wa),{},{icon:b.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}const Ze=()=>{},oe=b.measurePerformance&&at&&at.mark&&at.measure?at:{mark:Ze,measure:Ze},J='FA "6.7.2"',Aa=t=>(oe.mark("".concat(J," ").concat(t," begins")),()=>Qn(t)),Qn=t=>{oe.mark("".concat(J," ").concat(t," ends")),oe.measure("".concat(J," ").concat(t),"".concat(J," ").concat(t," begins"),"".concat(J," ").concat(t," ends"))};var ve={begin:Aa,end:Qn};const ct=()=>{};function tn(t){return typeof(t.getAttribute?t.getAttribute(B):null)=="string"}function _a(t){const e=t.getAttribute?t.getAttribute(de):null,n=t.getAttribute?t.getAttribute(pe):null;return e&&n}function ka(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function Sa(){return b.autoReplaceSvg===!0?ft.replace:ft[b.autoReplaceSvg]||ft.replace}function Ea(t){return k.createElementNS("http://www.w3.org/2000/svg",t)}function Pa(t){return k.createElement(t)}function Zn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ea:Pa}=e;if(typeof t=="string")return k.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){r.appendChild(Zn(o,{ceFn:n}))}),r}function Ta(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ft={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Zn(n),e)}),e.getAttribute(B)===null&&b.keepOriginalSource){let n=k.createComment(Ta(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~me(e).indexOf(b.replacementClass))return ft.replace(t);const r=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((a,i)=>(i===b.replacementClass||i.match(r)?a.toSvg.push(i):a.toNode.push(i),a),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const s=n.map(o=>rt(o)).join(`
`);e.setAttribute(B,""),e.innerHTML=s}};function en(t){t()}function tr(t,e){const n=typeof e=="function"?e:ct;if(t.length===0)n();else{let r=en;b.mutateApproach===Oo&&(r=R.requestAnimationFrame||en),r(()=>{const s=Sa(),o=ve.begin("mutate");t.map(s),o(),n()})}}let Ae=!1;function er(){Ae=!0}function ae(){Ae=!1}let mt=null;function nn(t){if(!Be||!b.observeMutations)return;const{treeCallback:e=ct,nodeCallback:n=ct,pseudoElementsCallback:r=ct,observeMutationsRoot:s=k}=t;mt=new Be(o=>{if(Ae)return;const a=F();q(o).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!tn(i.addedNodes[0])&&(b.searchPseudoElements&&r(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&b.searchPseudoElements&&r(i.target.parentNode),i.type==="attributes"&&tn(i.target)&&~Ro.indexOf(i.attributeName))if(i.attributeName==="class"&&_a(i.target)){const{prefix:f,iconName:l}=wt(me(i.target));i.target.setAttribute(de,f||a),l&&i.target.setAttribute(pe,l)}else ka(i.target)&&n(i.target)})}),M&&mt.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function xa(){mt&&mt.disconnect()}function Ca(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const o=s.split(":"),a=o[0],i=o.slice(1);return a&&i.length>0&&(r[a]=i.join(":").trim()),r},{})),n}function Oa(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=wt(me(t));return s.prefix||(s.prefix=F()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=ea(s.prefix,t.innerText)||be(s.prefix,Zt(t.innerText))),!s.iconName&&b.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function Ia(t){const e=q(t.attributes).reduce((s,o)=>(s.name!=="class"&&s.name!=="style"&&(s[o.name]=o.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return b.autoA11y&&(n?e["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(r||tt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ma(){return{iconName:null,title:null,titleId:null,prefix:null,transform:x,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function rn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=Oa(t),o=Ia(t),a=ee("parseNodeAttributes",{},t);let i=e.styleParser?Ca(t):[];return d({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:x,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:i,attributes:o}},a)}const{styles:Na}=C;function nr(t){const e=b.autoReplaceSvg==="nest"?rn(t,{styleParser:!1}):rn(t);return~e.extra.classes.indexOf(Rn)?D("generateLayersText",t,e):D("generateSvgReplacementMutation",t,e)}function La(){return[...ho,...Vt]}function sn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();const n=k.documentElement.classList,r=c=>n.add("".concat(Ye,"-").concat(c)),s=c=>n.remove("".concat(Ye,"-").concat(c)),o=b.autoFetchSvg?La():Cn.concat(Object.keys(Na));o.includes("fa")||o.push("fa");const a=[".".concat(Rn,":not([").concat(B,"])")].concat(o.map(c=>".".concat(c,":not([").concat(B,"])"))).join(", ");if(a.length===0)return Promise.resolve();let i=[];try{i=q(t.querySelectorAll(a))}catch{}if(i.length>0)r("pending"),s("complete");else return Promise.resolve();const f=ve.begin("onTree"),l=i.reduce((c,h)=>{try{const m=nr(h);m&&c.push(m)}catch(m){Ln||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise((c,h)=>{Promise.all(l).then(m=>{tr(m,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),f(),c()})}).catch(m=>{f(),h(m)})})}function ja(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nr(t).then(n=>{n&&tr([n],e)})}function Ra(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:ne(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:ne(s||{})),t(r,d(d({},n),{},{mask:s}))}}const Fa=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=x,symbol:r=!1,mask:s=null,maskId:o=null,title:a=null,titleId:i=null,classes:f=[],attributes:l={},styles:c={}}=e;if(!t)return;const{prefix:h,iconName:m,icon:y}=t;return vt(d({type:"icon"},t),()=>(U("beforeDOMElementCreation",{iconDefinition:t,params:e}),b.autoA11y&&(a?l["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(i||tt()):(l["aria-hidden"]="true",l.focusable="false")),we({icons:{main:re(y),mask:s?re(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:m,transform:d(d({},x),n),symbol:r,title:a,maskId:o,titleId:i,extra:{attributes:l,styles:c,classes:f}})))};var Da={mixout(){return{icon:Ra(Fa)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=sn,t.nodeCallback=ja,t}}},provides(t){t.i2svg=function(e){const{node:n=k,callback:r=()=>{}}=e;return sn(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:o,prefix:a,transform:i,symbol:f,mask:l,maskId:c,extra:h}=n;return new Promise((m,y)=>{Promise.all([se(r,a),l.iconName?se(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(p=>{let[u,g]=p;m([e,we({icons:{main:u,mask:g},prefix:a,iconName:r,transform:i,symbol:f,maskId:c,title:s,titleId:o,extra:h,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:o,styles:a}=e;const i=yt(a);i.length>0&&(r.style=i);let f;return ge(o)&&(f=D("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),n.push(f||s.icon),{children:n,attributes:r}}}},za={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return vt({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(o=>{r=r.concat(o.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Ha={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:o={}}=e;return vt({type:"counter",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),ba({content:t.toString(),title:n,extra:{attributes:s,styles:o,classes:["".concat(b.cssPrefix,"-layers-counter"),...r]}})))}}}},$a={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=x,title:r=null,classes:s=[],attributes:o={},styles:a={}}=e;return vt({type:"text",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),Qe({content:t,transform:d(d({},x),n),title:r,extra:{attributes:o,styles:a,classes:["".concat(b.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:o}=n;let a=null,i=null;if(Tn){const f=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();a=l.width/f,i=l.height/f}return b.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Qe({content:e.innerHTML,width:a,height:i,transform:s,title:r,extra:o,watchable:!0})])}}};const Ba=new RegExp('"',"ug"),on=[1105920,1112319],an=d(d(d(d({},{FontAwesome:{normal:"fas",400:"fas"}}),lo),xo),Ao),ie=Object.keys(an).reduce((t,e)=>(t[e.toLowerCase()]=an[e],t),{}),Ua=Object.keys(ie).reduce((t,e)=>{const n=ie[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Wa(t){const e=t.replace(Ba,""),n=Xo(e,0),r=n>=on[0]&&n<=on[1],s=e.length===2?e[0]===e[1]:!1;return{value:Zt(s?e[0]:e),isSecondary:r||s}}function Ya(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(ie[n]||{})[s]||Ua[n]}function cn(t,e){const n="".concat(Co).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const a=q(t.children).filter(m=>m.getAttribute(Kt)===e)[0],i=R.getComputedStyle(t,e),f=i.getPropertyValue("font-family"),l=f.match(Lo),c=i.getPropertyValue("font-weight"),h=i.getPropertyValue("content");if(a&&!l)return t.removeChild(a),r();if(l&&h!=="none"&&h!==""){const m=i.getPropertyValue("content");let y=Ya(f,c);const{value:p,isSecondary:u}=Wa(m),g=l[0].startsWith("FontAwesome");let w=be(y,p),v=w;if(g){const A=na(p);A.iconName&&A.prefix&&(w=A.iconName,y=A.prefix)}if(w&&!u&&(!a||a.getAttribute(de)!==y||a.getAttribute(pe)!==v)){t.setAttribute(n,v),a&&t.removeChild(a);const A=Ma(),{extra:S}=A;S.attributes[Kt]=e,se(w,y).then(_=>{const z=we(d(d({},A),{},{icons:{main:_,mask:Xn()},prefix:y,iconName:v,extra:S,watchable:!0})),At=k.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(At,t.firstChild):t.appendChild(At),At.outerHTML=z.map(rr=>rt(rr)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function Ga(t){return Promise.all([cn(t,"::before"),cn(t,"::after")])}function Va(t){return t.parentNode!==document.head&&!~Io.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Kt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function fn(t){if(M)return new Promise((e,n)=>{const r=q(t.querySelectorAll("*")).filter(Va).map(Ga),s=ve.begin("searchPseudoElements");er(),Promise.all(r).then(()=>{s(),ae(),e()}).catch(()=>{s(),ae(),n()})})}var qa={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=fn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=k}=e;b.searchPseudoElements&&fn(n)}}};let ln=!1;var Ka={mixout(){return{dom:{unwatch(){er(),ln=!0}}}},hooks(){return{bootstrap(){nn(ee("mutationObserverCallbacks",{}))},noAuto(){xa()},watch(t){const{observeMutationsRoot:e}=t;ln?ae():nn(ee("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const un=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),o=s[0];let a=s.slice(1).join("-");if(o&&a==="h")return n.flipX=!0,n;if(o&&a==="v")return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(o){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a;break}return n},e)};var Xa={mixout(){return{parse:{transform:t=>un(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=un(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:o}=e;const a={transform:"translate(".concat(s/2," 256)")},i="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(i," ").concat(f," ").concat(l)},h={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:c,path:h};return{tag:"g",attributes:d({},m.outer),children:[{tag:"g",attributes:d({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d(d({},n.icon.attributes),m.path)}]}]}}}};const Mt={x:0,y:0,width:"100%",height:"100%"};function dn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ja(t){return t.tag==="g"?t.children:[t]}var Qa={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?wt(n.split(" ").map(s=>s.trim())):Xn();return r.prefix||(r.prefix=F()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:o,maskId:a,transform:i}=e;const{width:f,icon:l}=s,{width:c,icon:h}=o,m=Wo({transform:i,containerWidth:c,iconWidth:f}),y={tag:"rect",attributes:d(d({},Mt),{},{fill:"white"})},p=l.children?{children:l.children.map(dn)}:{},u={tag:"g",attributes:d({},m.inner),children:[dn(d({tag:l.tag,attributes:d(d({},l.attributes),m.path)},p))]},g={tag:"g",attributes:d({},m.outer),children:[u]},w="mask-".concat(a||tt()),v="clip-".concat(a||tt()),A={tag:"mask",attributes:d(d({},Mt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,g]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:Ja(h)},A]};return n.push(S,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(w,")")},Mt)}),{children:n,attributes:r}}}},Za={provides(t){let e=!1;R.matchMedia&&(e=R.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=d(d({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||a.children.push({tag:"animate",attributes:d(d({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(a),n.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ti={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},ei=[Vo,Da,za,Ha,$a,qa,Ka,Xa,Qa,Za,ti];ua(ei,{mixoutsTo:T});T.noAuto;T.config;const Ii=T.library;T.dom;const Mi=T.parse;T.findIconDefinition;T.toHtml;const Ni=T.icon;T.layer;T.text;T.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Li={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};function ni(t){return typeof t=="string"?`'${t}'`:new ri().serialize(t)}const ri=function(){var e;class t{constructor(){ke(this,e,new Map)}compare(r,s){const o=typeof r,a=typeof s;return o==="string"&&a==="string"?r.localeCompare(s):o==="number"&&a==="number"?r-s:String.prototype.localeCompare.call(this.serialize(r,!0),this.serialize(s,!0))}serialize(r,s){if(r===null)return"null";switch(typeof r){case"string":return s?r:`'${r}'`;case"bigint":return`${r}n`;case"object":return this.$object(r);case"function":return this.$function(r)}return String(r)}serializeObject(r){const s=Object.prototype.toString.call(r);if(s!=="[object Object]")return this.serializeBuiltInType(s.length<10?`unknown:${s}`:s.slice(8,-1),r);const o=r.constructor,a=o===Object||o===void 0?"":o.name;if(a!==""&&globalThis[a]===o)return this.serializeBuiltInType(a,r);if(typeof r.toJSON=="function"){const i=r.toJSON();return a+(i!==null&&typeof i=="object"?this.$object(i):`(${this.serialize(i)})`)}return this.serializeObjectEntries(a,Object.entries(r))}serializeBuiltInType(r,s){const o=this["$"+r];if(o)return o.call(this,s);if(typeof(s==null?void 0:s.entries)=="function")return this.serializeObjectEntries(r,s.entries());throw new Error(`Cannot serialize ${r}`)}serializeObjectEntries(r,s){const o=Array.from(s).sort((i,f)=>this.compare(i[0],f[0]));let a=`${r}{`;for(let i=0;i<o.length;i++){const[f,l]=o[i];a+=`${this.serialize(f,!0)}:${this.serialize(l)}`,i<o.length-1&&(a+=",")}return a+"}"}$object(r){let s=K(this,e).get(r);return s===void 0&&(K(this,e).set(r,`#${K(this,e).size}`),s=this.serializeObject(r),K(this,e).set(r,s)),s}$function(r){const s=Function.prototype.toString.call(r);return s.slice(-15)==="[native code] }"?`${r.name||""}()[native]`:`${r.name}(${r.length})${s.replace(/\s*\n\s*/g,"")}`}$Array(r){let s="[";for(let o=0;o<r.length;o++)s+=this.serialize(r[o]),o<r.length-1&&(s+=",");return s+"]"}$Date(r){try{return`Date(${r.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(r){return`ArrayBuffer[${new Uint8Array(r).join(",")}]`}$Set(r){return`Set${this.$Array(Array.from(r).sort((s,o)=>this.compare(s,o)))}`}$Map(r){return this.serializeObjectEntries("Map",r.entries())}}e=new WeakMap;for(const n of["Error","RegExp","URL"])t.prototype["$"+n]=function(r){return`${n}(${r})`};for(const n of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])t.prototype["$"+n]=function(r){return`${n}[${r.join(",")}]`};for(const n of["BigInt64Array","BigUint64Array"])t.prototype["$"+n]=function(r){return`${n}[${r.join("n,")}${r.length>0?"n":""}]`};return t}(),si=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],oi=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],ai="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",H=[];class ii{constructor(){P(this,"_data",new Y);P(this,"_hash",new Y([...si]));P(this,"_nDataBytes",0);P(this,"_minBufferSize",0)}finalize(e){e&&this._append(e);const n=this._nDataBytes*8,r=this._data.sigBytes*8;return this._data.words[r>>>5]|=128<<24-r%32,this._data.words[(r+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(r+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}_doProcessBlock(e,n){const r=this._hash.words;let s=r[0],o=r[1],a=r[2],i=r[3],f=r[4],l=r[5],c=r[6],h=r[7];for(let m=0;m<64;m++){if(m<16)H[m]=e[n+m]|0;else{const A=H[m-15],S=(A<<25|A>>>7)^(A<<14|A>>>18)^A>>>3,_=H[m-2],z=(_<<15|_>>>17)^(_<<13|_>>>19)^_>>>10;H[m]=S+H[m-7]+z+H[m-16]}const y=f&l^~f&c,p=s&o^s&a^o&a,u=(s<<30|s>>>2)^(s<<19|s>>>13)^(s<<10|s>>>22),g=(f<<26|f>>>6)^(f<<21|f>>>11)^(f<<7|f>>>25),w=h+g+y+oi[m]+H[m],v=u+p;h=c,c=l,l=f,f=i+w|0,i=a,a=o,o=s,s=w+v|0}r[0]=r[0]+s|0,r[1]=r[1]+o|0,r[2]=r[2]+a|0,r[3]=r[3]+i|0,r[4]=r[4]+f|0,r[5]=r[5]+l|0,r[6]=r[6]+c|0,r[7]=r[7]+h|0}_append(e){typeof e=="string"&&(e=Y.fromUtf8(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes}_process(e){let n,r=this._data.sigBytes/64;e?r=Math.ceil(r):r=Math.max((r|0)-this._minBufferSize,0);const s=r*16,o=Math.min(s*4,this._data.sigBytes);if(s){for(let a=0;a<s;a+=16)this._doProcessBlock(this._data.words,a);n=this._data.words.splice(0,s),this._data.sigBytes-=o}return new Y(n,o)}}class Y{constructor(e,n){P(this,"words");P(this,"sigBytes");e=this.words=e||[],this.sigBytes=n===void 0?e.length*4:n}static fromUtf8(e){const n=unescape(encodeURIComponent(e)),r=n.length,s=[];for(let o=0;o<r;o++)s[o>>>2]|=(n.charCodeAt(o)&255)<<24-o%4*8;return new Y(s,r)}toBase64(){const e=[];for(let n=0;n<this.sigBytes;n+=3){const r=this.words[n>>>2]>>>24-n%4*8&255,s=this.words[n+1>>>2]>>>24-(n+1)%4*8&255,o=this.words[n+2>>>2]>>>24-(n+2)%4*8&255,a=r<<16|s<<8|o;for(let i=0;i<4&&n*8+i*6<this.sigBytes*8;i++)e.push(ai.charAt(a>>>6*(3-i)&63))}return e.join("")}concat(e){if(this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4),this.sigBytes%4)for(let n=0;n<e.sigBytes;n++){const r=e.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=r<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<e.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=e.words[n>>>2];this.sigBytes+=e.sigBytes}}function ci(t){return new ii().finalize(t).toBase64()}function ji(t){return ci(ni(t))}const fi={trailing:!0};function Ri(t,e=25,n={}){if(n={...fi,...n},!Number.isFinite(e))throw new TypeError("Expected `wait` to be a finite number");let r,s,o=[],a,i;const f=(l,c)=>(a=li(t,l,c),a.finally(()=>{if(a=null,n.trailing&&i&&!s){const h=f(l,i);return i=null,h}}),a);return function(...l){return a?(n.trailing&&(i=l),a):new Promise(c=>{const h=!s&&n.leading;clearTimeout(s),s=setTimeout(()=>{s=null;const m=n.leading?r:f(this,l);for(const y of o)y(m);o=[]},e),h?(r=f(this,l),c(r)):o.push(c)})}}async function li(t,e,n){return await t.apply(e,n)}export{gi as $,ki as A,Li as B,Ri as C,Si as D,ji as E,Nr as F,Ei as P,Pi as T,Oi as _,Sr as a,Ai as b,as as c,$t as d,wi as e,vi as f,yi as g,fe as h,di as i,hi as j,ut as k,Fr as l,_i as m,bi as n,Ci as o,Dr as p,dr as q,Ti as r,xi as s,Ws as t,pi as u,mi as v,jr as w,Mi as x,Ni as y,Ii as z};

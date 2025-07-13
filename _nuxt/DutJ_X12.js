var or=Object.defineProperty;var sr=(t,e,n)=>e in t?or(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var M=(t,e,n)=>sr(t,typeof e!="symbol"?e+"":e,n);const ar=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,ir=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,cr=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function fr(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){lr(t);return}return e}function lr(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function ur(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!cr.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(ar.test(t)||ir.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,fr)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const dr=/#/g,pr=/&/g,mr=/\//g,hr=/=/g,ae=/\+/g,gr=/%5e/gi,yr=/%60/gi,br=/%7c/gi,wr=/%20/gi;function vr(t){return encodeURI(""+t).replace(br,"|")}function Ot(t){return vr(typeof t=="string"?t:JSON.stringify(t)).replace(ae,"%2B").replace(wr,"+").replace(dr,"%23").replace(pr,"%26").replace(yr,"`").replace(gr,"^").replace(mr,"%2F")}function bt(t){return Ot(t).replace(hr,"%3D")}function dn(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function Ar(t){return dn(t.replace(ae," "))}function _r(t){return dn(t.replace(ae," "))}function Er(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const o=Ar(r[1]);if(o==="__proto__"||o==="constructor")continue;const s=_r(r[2]||"");e[o]===void 0?e[o]=s:Array.isArray(e[o])?e[o].push(s):e[o]=[e[o],s]}return e}function Sr(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${bt(t)}=${Ot(n)}`).join("&"):`${bt(t)}=${Ot(e)}`:bt(t)}function kr(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>Sr(e,t[e])).filter(Boolean).join("&")}const Pr=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,Tr=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,Cr=/^([/\\]\s*){2,}[^/\\]/,xr=/^\.?\//;function ie(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?Pr.test(t):Tr.test(t)||(e.acceptRelative?Cr.test(t):!1)}function Or(t="",e){return t.endsWith("/")}function Ir(t="",e){return(Or(t)?t.slice(0,-1):t)||"/"}function Mr(t="",e){return t.endsWith("/")?t:t+"/"}function Nr(t,e){if(Lr(e)||ie(t))return t;const n=Ir(e);return t.startsWith(n)?t:jr(n,t)}function Rr(t,e){const n=Dr(t),r={...Er(n.search),...e};return n.search=kr(r),Hr(n)}function Lr(t){return!t||t==="/"}function Fr(t){return t&&t!=="/"}function jr(t,...e){let n=t||"";for(const r of e.filter(o=>Fr(o)))if(n){const o=r.replace(xr,"");n=Mr(n)+o}else n=r;return n}function Li(...t){var a,i,f,l;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let o=0;for(const c of n)if(!(!c||c==="/")){for(const[m,h]of c.split(e).entries())if(!(!h||h===".")){if(h===".."){if(r.length===1&&ie(r[0]))continue;r.pop(),o--;continue}if(m===1&&((a=r[r.length-1])!=null&&a.endsWith(":/"))){r[r.length-1]+="/"+h;continue}r.push(h),o++}}let s=r.join("/");return o>=0?(i=n[0])!=null&&i.startsWith("/")&&!s.startsWith("/")?s="/"+s:(f=n[0])!=null&&f.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*o)+s,(l=n[n.length-1])!=null&&l.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}const pn=Symbol.for("ufo:protocolRelative");function Dr(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,m,h=""]=n;return{protocol:m.toLowerCase(),pathname:h,href:m+h,auth:"",host:"",search:"",hash:""}}if(!ie(t,{acceptRelative:!0}))return Ae(t);const[,r="",o,s=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,a="",i=""]=s.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(i=i.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:f,search:l,hash:c}=Ae(i);return{protocol:r.toLowerCase(),auth:o?o.slice(0,Math.max(0,o.length-1)):"",host:a,pathname:f,search:l,hash:c,[pn]:!r}}function Ae(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function Hr(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",o=t.auth?t.auth+"@":"",s=t.host||"";return(t.protocol||t[pn]?(t.protocol||"")+"//":"")+o+s+e+n+r}class $r extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function zr(t){var f,l,c,m,h;const e=((f=t.error)==null?void 0:f.message)||((l=t.error)==null?void 0:l.toString())||"",n=((c=t.request)==null?void 0:c.method)||((m=t.options)==null?void 0:m.method)||"GET",r=((h=t.request)==null?void 0:h.url)||String(t.request)||"/",o=`[${n}] ${JSON.stringify(r)}`,s=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",a=`${o}: ${s}${e?` ${e}`:""}`,i=new $r(a,t.error?{cause:t.error}:void 0);for(const b of["request","options","response"])Object.defineProperty(i,b,{get(){return t[b]}});for(const[b,p]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(i,b,{get(){return t.response&&t.response[p]}});return i}const Wr=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function _e(t="GET"){return Wr.has(t.toUpperCase())}function Ur(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const Br=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Yr=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Gr(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return Yr.test(e)?"json":Br.has(e)||e.startsWith("text/")?"text":"blob"}function Vr(t,e,n,r){const o=Kr((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let s;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(s={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:s,params:s,headers:o}}function Kr(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[o,s]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(o,s);return r}async function et(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const qr=new Set([408,409,425,429,500,502,503,504]),Xr=new Set([101,204,205,304]);function mn(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function o(i){const f=i.error&&i.error.name==="AbortError"&&!i.options.timeout||!1;if(i.options.retry!==!1&&!f){let c;typeof i.options.retry=="number"?c=i.options.retry:c=_e(i.options.method)?0:1;const m=i.response&&i.response.status||500;if(c>0&&(Array.isArray(i.options.retryStatusCodes)?i.options.retryStatusCodes.includes(m):qr.has(m))){const h=typeof i.options.retryDelay=="function"?i.options.retryDelay(i):i.options.retryDelay||0;return h>0&&await new Promise(b=>setTimeout(b,h)),s(i.request,{...i.options,retry:c-1})}}const l=zr(i);throw Error.captureStackTrace&&Error.captureStackTrace(l,s),l}const s=async function(f,l={}){const c={request:f,options:Vr(f,l,t.defaults,n),response:void 0,error:void 0};c.options.method&&(c.options.method=c.options.method.toUpperCase()),c.options.onRequest&&await et(c,c.options.onRequest),typeof c.request=="string"&&(c.options.baseURL&&(c.request=Nr(c.request,c.options.baseURL)),c.options.query&&(c.request=Rr(c.request,c.options.query),delete c.options.query),"query"in c.options&&delete c.options.query,"params"in c.options&&delete c.options.params),c.options.body&&_e(c.options.method)&&(Ur(c.options.body)?(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers||{}),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")):("pipeTo"in c.options.body&&typeof c.options.body.pipeTo=="function"||typeof c.options.body.pipe=="function")&&("duplex"in c.options||(c.options.duplex="half")));let m;if(!c.options.signal&&c.options.timeout){const b=new r;m=setTimeout(()=>{const p=new Error("[TimeoutError]: The operation was aborted due to timeout");p.name="TimeoutError",p.code=23,b.abort(p)},c.options.timeout),c.options.signal=b.signal}try{c.response=await e(c.request,c.options)}catch(b){return c.error=b,c.options.onRequestError&&await et(c,c.options.onRequestError),await o(c)}finally{m&&clearTimeout(m)}if((c.response.body||c.response._bodyInit)&&!Xr.has(c.response.status)&&c.options.method!=="HEAD"){const b=(c.options.parseResponse?"json":c.options.responseType)||Gr(c.response.headers.get("content-type")||"");switch(b){case"json":{const p=await c.response.text(),u=c.options.parseResponse||ur;c.response._data=u(p);break}case"stream":{c.response._data=c.response.body||c.response._bodyInit;break}default:c.response._data=await c.response[b]()}}return c.options.onResponse&&await et(c,c.options.onResponse),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await et(c,c.options.onResponseError),await o(c)):c.response},a=async function(f,l){return(await s(f,l))._data};return a.raw=s,a.native=(...i)=>e(...i),a.create=(i={},f={})=>mn({...t,...f,defaults:{...t.defaults,...f.defaults,...i}}),a}const it=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Qr=it.fetch?(...t)=>it.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),Jr=it.Headers,Zr=it.AbortController,to=mn({fetch:Qr,Headers:Jr,AbortController:Zr}),Fi=to;function It(t,e={},n){for(const r in t){const o=t[r],s=n?`${n}:${r}`:r;typeof o=="object"&&o!==null?It(o,e,s):typeof o=="function"&&(e[s]=o)}return e}const eo={run:t=>t()},no=()=>eo,hn=typeof console.createTask<"u"?console.createTask:no;function ro(t,e){const n=e.shift(),r=hn(n);return t.reduce((o,s)=>o.then(()=>r.run(()=>s(...e))),Promise.resolve())}function oo(t,e){const n=e.shift(),r=hn(n);return Promise.all(t.map(o=>r.run(()=>o(...e))))}function wt(t,e){for(const n of[...t])n(e)}class so{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const o=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!r.allowDeprecated){let a=s.message;a||(a=`${o} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,o=(...s)=>(typeof r=="function"&&r(),r=void 0,o=void 0,n(...s));return r=this.hook(e,o),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const o of r)this.hook(e,o)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=It(e),r=Object.keys(n).map(o=>this.hook(o,n[o]));return()=>{for(const o of r.splice(0,r.length))o()}}removeHooks(e){const n=It(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(ro,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(oo,e,...n)}callHookWith(e,n,...r){const o=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&wt(this._before,o);const s=e(n in this._hooks?[...this._hooks[n]]:[],r);return s instanceof Promise?s.finally(()=>{this._after&&o&&wt(this._after,o)}):(this._after&&o&&wt(this._after,o),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function ao(){return new so}function io(t={}){let e,n=!1;const r=a=>{if(e&&e!==a)throw new Error("Context conflict")};let o;if(t.asyncContext){const a=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;a?o=new a:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(o){const a=o.getStore();if(a!==void 0)return a}return e};return{use:()=>{const a=s();if(a===void 0)throw new Error("Context is not available");return a},tryUse:()=>s(),set:(a,i)=>{i||r(a),e=a,n=!0},unset:()=>{e=void 0,n=!1},call:(a,i)=>{r(a),e=a;try{return o?o.run(a,i):i()}finally{n||(e=void 0)}},async callAsync(a,i){e=a;const f=()=>{e=a},l=()=>e===a?f:void 0;Mt.add(l);try{const c=o?o.run(a,i):i();return n||(e=void 0),await c}finally{Mt.delete(l)}}}}function co(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=io({...t,...r})),e[n]}}}const ct=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Ee="__unctx__",fo=ct[Ee]||(ct[Ee]=co()),ji=(t,e={})=>fo.get(t,e),Se="__unctx_async_handlers__",Mt=ct[Se]||(ct[Se]=new Set);function Di(t){const e=[];for(const o of Mt){const s=o();s&&e.push(s)}const n=()=>{for(const o of e)o()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(o=>{throw n(),o})),[r,n]}const lo=/#/g,uo=/&/g,po=/\//g,mo=/=/g,ce=/\+/g,ho=/%5e/gi,go=/%60/gi,yo=/%7c/gi,bo=/%20/gi;function wo(t){return encodeURI(""+t).replace(yo,"|")}function Nt(t){return wo(typeof t=="string"?t:JSON.stringify(t)).replace(ce,"%2B").replace(bo,"+").replace(lo,"%23").replace(uo,"%26").replace(go,"`").replace(ho,"^").replace(po,"%2F")}function vt(t){return Nt(t).replace(mo,"%3D")}function ft(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function vo(t){return ft(t.replace(ce," "))}function Ao(t){return ft(t.replace(ce," "))}function _o(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const o=vo(r[1]);if(o==="__proto__"||o==="constructor")continue;const s=Ao(r[2]||"");e[o]===void 0?e[o]=s:Array.isArray(e[o])?e[o].push(s):e[o]=[e[o],s]}return e}function Eo(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${vt(t)}=${Nt(n)}`).join("&"):`${vt(t)}=${Nt(e)}`:vt(t)}function So(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>Eo(e,t[e])).filter(Boolean).join("&")}const ko=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,Po=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,To=/^([/\\]\s*){2,}[^/\\]/,Co=/^[\s\0]*(blob|data|javascript|vbscript):$/i,xo=/\/$|\/\?|\/#/,Oo=/^\.?\//;function Io(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?ko.test(t):Po.test(t)||(e.acceptRelative?To.test(t):!1)}function Hi(t){return!!t&&Co.test(t)}function Rt(t="",e){return e?xo.test(t):t.endsWith("/")}function Lt(t="",e){if(!e)return(Rt(t)?t.slice(0,-1):t)||"/";if(!Rt(t,!0))return t||"/";let n=t,r="";const o=t.indexOf("#");o!==-1&&(n=t.slice(0,o),r=t.slice(o));const[s,...a]=n.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(a.length>0?`?${a.join("?")}`:"")+r}function Mo(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Rt(t,!0))return t||"/";let n=t,r="";const o=t.indexOf("#");if(o!==-1&&(n=t.slice(0,o),r=t.slice(o),!n))return r;const[s,...a]=n.split("?");return s+"/"+(a.length>0?`?${a.join("?")}`:"")+r}function $i(t,e){if(No(e))return t;const n=Lt(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function zi(t,e){const n=Lo(t),r={..._o(n.search),...e};return n.search=So(r),Fo(n)}function No(t){return!t||t==="/"}function Ro(t){return t&&t!=="/"}function Wi(t,...e){let n=t||"";for(const r of e.filter(o=>Ro(o)))if(n){const o=r.replace(Oo,"");n=Mo(n)+o}else n=r;return n}function Ui(t,e){return ft(Lt(t))===ft(Lt(e))}const gn=Symbol.for("ufo:protocolRelative");function Lo(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,m,h=""]=n;return{protocol:m.toLowerCase(),pathname:h,href:m+h,auth:"",host:"",search:"",hash:""}}if(!Io(t,{acceptRelative:!0}))return ke(t);const[,r="",o,s=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,a="",i=""]=s.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(i=i.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:f,search:l,hash:c}=ke(i);return{protocol:r.toLowerCase(),auth:o?o.slice(0,Math.max(0,o.length-1)):"",host:a,pathname:f,search:l,hash:c,[gn]:!r}}function ke(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function Fo(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",o=t.auth?t.auth+"@":"",s=t.host||"";return(t.protocol||t[gn]?(t.protocol||"")+"//":"")+o+s+e+n+r}function jo(t,e){return{ctx:{table:t},matchAll:n=>bn(n,t)}}function yn(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,o])=>[r,yn(o)])):new Map(Object.entries(t[n]));return e}function Bi(t){return jo(yn(t))}function bn(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[s,a]of Pe(e.wildcard))(t===s||t.startsWith(s+"/"))&&r.push(a);for(const[s,a]of Pe(e.dynamic))if(t.startsWith(s+"/")){const i="/"+t.slice(s.length).split("/").splice(2).join("/");r.push(...bn(i,a))}const o=e.static.get(t);return o&&r.push(o),r.filter(Boolean)}function Pe(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}const Do=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Ho=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,$o=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function zo(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){Wo(t);return}return e}function Wo(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Yi(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!$o.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(Do.test(t)||Ho.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,zo)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}function At(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Ft(t,e,n=".",r){if(!At(e))return Ft(t,{},n,r);const o=Object.assign({},e);for(const s in t){if(s==="__proto__"||s==="constructor")continue;const a=t[s];a!=null&&(r&&r(o,s,a,n)||(Array.isArray(a)&&Array.isArray(o[s])?o[s]=[...a,...o[s]]:At(a)&&At(o[s])?o[s]=Ft(a,o[s],(n?`${n}.`:"")+s.toString(),r):o[s]=a))}return o}function Uo(t){return(...e)=>e.reduce((n,r)=>Ft(n,r,"",t),{})}const Gi=Uo();function Bo(t,e){try{return e in t}catch{return!1}}class jt extends Error{constructor(n,r={}){super(n,r);M(this,"statusCode",500);M(this,"fatal",!1);M(this,"unhandled",!1);M(this,"statusMessage");M(this,"data");M(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:Dt(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=wn(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}M(jt,"__h3_error__",!0);function Vi(t){if(typeof t=="string")return new jt(t);if(Yo(t))return t;const e=new jt(t.message??t.statusMessage??"",{cause:t.cause||t});if(Bo(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Dt(t.statusCode,e.statusCode):t.status&&(e.statusCode=Dt(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;wn(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function Yo(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const Go=/[^\u0009\u0020-\u007E]/g;function wn(t=""){return t.replace(Go,"")}function Dt(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}function Te(t){const e=Ko(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let o=0;o<n.byteLength;o++)r.setUint8(o,e.charCodeAt(o));return n}const Vo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ko(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let o=0;o<t.length;o++)n<<=6,n|=Vo.indexOf(t[o]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const qo=-1,Xo=-2,Qo=-3,Jo=-4,Zo=-5,ts=-6;function Ki(t,e){return es(JSON.parse(t),e)}function es(t,e){if(typeof t=="number")return o(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function o(s,a=!1){if(s===qo)return;if(s===Qo)return NaN;if(s===Jo)return 1/0;if(s===Zo)return-1/0;if(s===ts)return-0;if(a)throw new Error("Invalid input");if(s in r)return r[s];const i=n[s];if(!i||typeof i!="object")r[s]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const f=i[0],l=e==null?void 0:e[f];if(l)return r[s]=l(o(i[1]));switch(f){case"Date":r[s]=new Date(i[1]);break;case"Set":const c=new Set;r[s]=c;for(let b=1;b<i.length;b+=1)c.add(o(i[b]));break;case"Map":const m=new Map;r[s]=m;for(let b=1;b<i.length;b+=2)m.set(o(i[b]),o(i[b+1]));break;case"RegExp":r[s]=new RegExp(i[1],i[2]);break;case"Object":r[s]=Object(i[1]);break;case"BigInt":r[s]=BigInt(i[1]);break;case"null":const h=Object.create(null);r[s]=h;for(let b=1;b<i.length;b+=2)h[i[b]]=o(i[b+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const b=globalThis[f],p=i[1],u=Te(p),g=new b(u);r[s]=g;break}case"ArrayBuffer":{const b=i[1],p=Te(b);r[s]=p;break}default:throw new Error(`Unknown type ${f}`)}}else{const f=new Array(i.length);r[s]=f;for(let l=0;l<i.length;l+=1){const c=i[l];c!==Xo&&(f[l]=o(c))}}else{const f={};r[s]=f;for(const l in i){const c=i[l];f[l]=o(c)}}return r[s]}return o(0)}const ns=new Set(["link","style","script","noscript"]),rs=new Set(["title","titleTemplate","script","style","noscript"]),Ce=new Set(["base","meta","link","style","script","noscript"]),os=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),ss=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),as=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),is=new Set(["templateParams","htmlAttrs","bodyAttrs"]),cs=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),fs=["name","property","http-equiv"],ls=new Set(["viewport","description","keywords","robots"]);function vn(t){const e=t.split(":");return e.length?cs.has(e[1]):!1}function Ht(t){const{props:e,tag:n}=t;if(ss.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of fs)if(e[r]!==void 0){const o=e[r],s=o.includes(":"),a=ls.has(o),f=!(s||a)&&t.key?`:key:${t.key}`:"";return`${n}:${o}${f}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(rs.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function xe(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,o])=>`${r}:${String(o)}`).join(",")}`}function $t(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let o;if(e&&(o=e(n,t)),Array.isArray(o))return o.map(s=>$t(s,e));if((o==null?void 0:o.constructor)===Object){const s={};for(const a of Object.keys(o))s[a]=$t(o[a],e,a);return s}return o}function us(t,e){const n=t==="style"?new Map:new Set;function r(o){const s=o.trim();if(s)if(t==="style"){const[a,...i]=s.split(":").map(f=>f.trim());a&&i.length&&n.set(a,i.join(":"))}else s.split(" ").filter(Boolean).forEach(a=>n.add(a))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(o=>r(o)):e&&typeof e=="object"&&Object.entries(e).forEach(([o,s])=>{s&&s!=="false"&&(t==="style"?n.set(o.trim(),s):r(o))}),n}function An(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=us(n,r);return}if(as.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let a=e.type;if(e.type||(a="application/json"),!(a!=null&&a.endsWith("json"))&&a!=="speculationrules")return;e.type=a,t.props.type=a,t[n]=JSON.stringify(r)}else t[n]=r;return}const o=String(r),s=n.startsWith("data-");o==="true"||o===""?t.props[n]=s?o:!0:!r&&s&&o==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t}function ds(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=An({tag:t,props:{}},n);return r.key&&ns.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(o=>({...r,props:{...r.props,content:o}})):r}function ps(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(o,s)=>{for(let a=0;a<e.length;a++)s=e[a](o,s);return s};t=n(void 0,t);const r=[];return t=$t(t,n),Object.entries(t||{}).forEach(([o,s])=>{if(s!==void 0)for(const a of Array.isArray(s)?s:[s])r.push(ds(o,a))}),r.flat()}const Oe=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Ie={base:-10,title:10},ms={critical:-8,high:-1,low:2},Me={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},hs=/@import/,V=t=>t===""||t===!0;function gs(t,e){var s;if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=ms[e.tagPriority]||0,o=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Me;if(e.tag in Ie)n=Ie[e.tag];else if(e.tag==="meta"){const a=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;a&&(n=Me.meta[a])}else e.tag==="link"&&e.props.rel?n=o.link[e.props.rel]:e.tag==="script"?V(e.props.async)?n=o.script.async:e.props.src&&!V(e.props.defer)&&!V(e.props.async)&&e.props.type!=="module"&&!((s=e.props.type)!=null&&s.endsWith("json"))?n=o.script.sync:V(e.props.defer)&&e.props.src&&!V(e.props.async)&&(n=o.script.defer):e.tag==="style"&&(n=e.innerHTML&&hs.test(e.innerHTML)?o.style.imported:o.style.sync);return(n||100)+r}function Ne(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function ys(t={}){var i;const e=ao();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,o=new Map,s=new Set,a={_entryCount:1,plugins:o,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:f=>Ne(a,f),push(f,l){const c={...l||{}};delete c.head;const m=c._index??a._entryCount++,h={_i:m,input:f,options:c},b={_poll(p=!1){a.dirty=!0,!p&&s.add(m),e.callHook("entries:updated",a)},dispose(){r.delete(m)&&a.invalidate()},patch(p){(!c.mode||c.mode==="server"&&n||c.mode==="client"&&!n)&&(h.input=p,r.set(m,h),b._poll())}};return b.patch(f),b},async resolveTags(){var b;const f={tagMap:new Map,tags:[],entries:[...a.entries.values()]};for(await e.callHook("entries:resolve",f);s.size;){const p=s.values().next().value;s.delete(p);const u=r.get(p);if(u){const g={tags:ps(u.input,t.propResolvers||[]).map(w=>Object.assign(w,u.options)),entry:u};await e.callHook("entries:normalize",g),u._tags=g.tags.map((w,v)=>(w._w=gs(a,w),w._p=(u._i<<10)+v,w._d=Ht(w),w))}}let l=!1;f.entries.flatMap(p=>(p._tags||[]).map(u=>({...u,props:{...u.props}}))).sort(Oe).reduce((p,u)=>{const g=String(u._d||u._p);if(!p.has(g))return p.set(g,u);const w=p.get(g);if(((u==null?void 0:u.tagDuplicateStrategy)||(is.has(u.tag)?"merge":null)||(u.key&&u.key===w.key?"merge":null))==="merge"){const A={...w.props};Object.entries(u.props).forEach(([S,E])=>A[S]=S==="style"?new Map([...w.props.style||new Map,...E]):S==="class"?new Set([...w.props.class||new Set,...E]):E),p.set(g,{...u,props:A})}else u._p>>10===w._p>>10&&u.tag==="meta"&&vn(g)?(p.set(g,Object.assign([...Array.isArray(w)?w:[w],u],u)),l=!0):(u._w===w._w?u._p>w._p:(u==null?void 0:u._w)<(w==null?void 0:w._w))&&p.set(g,u);return p},f.tagMap);const c=f.tagMap.get("title"),m=f.tagMap.get("titleTemplate");if(a._title=c==null?void 0:c.textContent,m){const p=m==null?void 0:m.textContent;if(a._titleTemplate=p,p){let u=typeof p=="function"?p(c==null?void 0:c.textContent):p;typeof u=="string"&&!a.plugins.has("template-params")&&(u=u.replace("%s",(c==null?void 0:c.textContent)||"")),c?u===null?f.tagMap.delete("title"):f.tagMap.set("title",{...c,textContent:u}):(m.tag="title",m.textContent=u)}}f.tags=Array.from(f.tagMap.values()),l&&(f.tags=f.tags.flat().sort(Oe)),await e.callHook("tags:beforeResolve",f),await e.callHook("tags:resolve",f),await e.callHook("tags:afterResolve",f);const h=[];for(const p of f.tags){const{innerHTML:u,tag:g,props:w}=p;if(os.has(g)&&!(Object.keys(w).length===0&&!p.innerHTML&&!p.textContent)&&!(g==="meta"&&!w.content&&!w["http-equiv"]&&!w.charset)){if(g==="script"&&u){if((b=w.type)!=null&&b.endsWith("json")){const v=typeof u=="string"?u:JSON.stringify(u);p.innerHTML=v.replace(/</g,"\\u003C")}else typeof u=="string"&&(p.innerHTML=u.replace(new RegExp(`</${g}`,"g"),`<\\/${g}`));p._d=Ht(p)}h.push(p)}}return h},invalidate(){for(const f of r.values())s.add(f._i);a.dirty=!0,e.callHook("entries:updated",a)}};return((t==null?void 0:t.plugins)||[]).forEach(f=>Ne(a,f)),a.hooks.callHook("init",a),(i=t.init)==null||i.forEach(f=>f&&a.push(f)),a}async function bs(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async o=>{var b;const s=new Map,a=new Promise(p=>{t.resolveTags().then(u=>{p(u.map(g=>{const w=s.get(g._d)||0,v={tag:g,id:(w?`${g._d}:${w}`:g._d)||xe(g),shouldRender:!0};return g._d&&vn(g._d)&&s.set(g._d,w+1),v}))})});let i=t._dom;if(!i){i={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const p of["body","head"]){const u=(b=n[p])==null?void 0:b.children;for(const g of u){const w=g.tagName.toLowerCase();if(!Ce.has(w))continue;const v=An({tag:w,props:{}},{innerHTML:g.innerHTML,...g.getAttributeNames().reduce((A,S)=>(A[S]=g.getAttribute(S),A),{})||{}});if(v.key=g.getAttribute("data-hid")||void 0,v._d=Ht(v)||xe(v),i.elMap.has(v._d)){let A=1,S=v._d;for(;i.elMap.has(S);)S=`${v._d}:${A++}`;i.elMap.set(S,g)}else i.elMap.set(v._d,g)}}}i.pendingSideEffects={...i.sideEffects},i.sideEffects={};function f(p,u,g){const w=`${p}:${u}`;i.sideEffects[w]=g,delete i.pendingSideEffects[w]}function l({id:p,$el:u,tag:g}){const w=g.tag.endsWith("Attrs");i.elMap.set(p,u),w||(g.textContent&&g.textContent!==u.textContent&&(u.textContent=g.textContent),g.innerHTML&&g.innerHTML!==u.innerHTML&&(u.innerHTML=g.innerHTML),f(p,"el",()=>{u==null||u.remove(),i.elMap.delete(p)}));for(const v in g.props){if(!Object.prototype.hasOwnProperty.call(g.props,v))continue;const A=g.props[v];if(v.startsWith("on")&&typeof A=="function"){const E=u==null?void 0:u.dataset;if(E&&E[`${v}fired`]){const G=v.slice(0,-5);A.call(u,new Event(G.substring(2)))}u.getAttribute(`data-${v}`)!==""&&((g.tag==="bodyAttrs"?n.defaultView:u).addEventListener(v.substring(2),A.bind(u)),u.setAttribute(`data-${v}`,""));continue}const S=`attr:${v}`;if(v==="class"){if(!A)continue;for(const E of A)w&&f(p,`${S}:${E}`,()=>u.classList.remove(E)),!u.classList.contains(E)&&u.classList.add(E)}else if(v==="style"){if(!A)continue;for(const[E,G]of A)f(p,`${S}:${E}`,()=>{u.style.removeProperty(E)}),u.style.setProperty(E,G)}else A!==!1&&A!==null&&(u.getAttribute(v)!==A&&u.setAttribute(v,A===!0?"":String(A)),w&&f(p,S,()=>u.removeAttribute(v)))}}const c=[],m={bodyClose:void 0,bodyOpen:void 0,head:void 0},h=await a;for(const p of h){const{tag:u,shouldRender:g,id:w}=p;if(g){if(u.tag==="title"){n.title=u.textContent,f("title","",()=>n.title=i.title);continue}p.$el=p.$el||i.elMap.get(w),p.$el?l(p):Ce.has(u.tag)&&c.push(p)}}for(const p of c){const u=p.tag.tagPosition||"head";p.$el=n.createElement(p.tag.tag),l(p),m[u]=m[u]||n.createDocumentFragment(),m[u].appendChild(p.$el)}for(const p of h)await t.hooks.callHook("dom:renderTag",p,n,f);m.head&&n.head.appendChild(m.head),m.bodyOpen&&n.body.insertBefore(m.bodyOpen,n.body.firstChild),m.bodyClose&&n.body.appendChild(m.bodyClose);for(const p in i.pendingSideEffects)i.pendingSideEffects[p]();t._dom=i,await t.hooks.callHook("dom:rendered",{renders:h}),o()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function qi(t={}){var r,o,s;const e=((r=t.domOptions)==null?void 0:r.render)||bs;t.document=t.document||(typeof window<"u"?document:void 0);const n=((s=(o=t.document)==null?void 0:o.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return ys({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function Xi(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}const ws=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,R="%separator",vs=new RegExp(`${R}(?:\\s*${R})*`,"g");function As(t,e,n=!1){var o;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const s=e.indexOf(".");r=(o=t[e.substring(0,s)])==null?void 0:o[e.substring(s+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function nt(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let o=t;try{o=decodeURI(t)}catch{}const s=o.match(/%\w+(?:\.\w+)?/g);if(!s)return t;const a=t.includes(R);return t=t.replace(/%\w+(?:\.\w+)?/g,i=>{if(i===R||!s.includes(i))return i;const f=As(e,i.slice(1),r);return f!==void 0?f:i}).trim(),a&&(t.endsWith(R)&&(t=t.slice(0,-R.length)),t.startsWith(R)&&(t=t.slice(R.length)),t=t.replace(vs,n||"").trim()),t}const Re=t=>t.includes(":key")?t:t.split(":").join(":key:"),Qi={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const r=n.tagPriority;if(!r)continue;const o=String(r);if(o.startsWith("before:")){const s=Re(o.slice(7)),a=t.tagMap.get(s);a&&(typeof a.tagPriority=="number"&&(n.tagPriority=a.tagPriority),n._p=a._p-1,e=!0)}else if(o.startsWith("after:")){const s=Re(o.slice(6)),a=t.tagMap.get(s);a&&(typeof a.tagPriority=="number"&&(n.tagPriority=a.tagPriority),n._p=a._p+1,e=!0)}}e&&(t.tags=t.tags.sort(ws))}}},Ji={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function zt(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>zt(n)));if((t==null?void 0:t.constructor)===Object){const n={};for(const r of Object.keys(t))n[r]=await zt(t[r]);return n}return t}const Zi={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(zt(t.entries[n].input).then(r=>{t.entries[n].input=r,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},_s={meta:"content",link:"href",htmlAttrs:"lang"},Es=["innerHTML","textContent"],tc=t=>({key:"template-params",hooks:{"entries:normalize":e=>{var r,o,s;const n=((o=(r=e.tags.filter(a=>a.tag==="templateParams"&&a.mode==="server"))==null?void 0:r[0])==null?void 0:o.props)||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...((s=t._ssrPayload)==null?void 0:s.templateParams)||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{var s;const r=((s=e.get("templateParams"))==null?void 0:s.props)||{},o=r.separator||"|";delete r.separator,r.pageTitle=nt(r.pageTitle||t._title||"",r,o);for(const a of n){if(a.processTemplateParams===!1)continue;const i=_s[a.tag];if(i&&typeof a.props[i]=="string")a.props[i]=nt(a.props[i],r,o);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const f of Es)typeof a[f]=="string"&&(a[f]=nt(a[f],r,o,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=r,t._separator=o},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n!=null&&n.textContent&&n.processTemplateParams!==!1&&(n.textContent=nt(n.textContent,t._templateParams,t._separator))}}}),Ss=(t,e)=>e.some(n=>t instanceof n);let Le,Fe;function ks(){return Le||(Le=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ps(){return Fe||(Fe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _n=new WeakMap,Wt=new WeakMap,En=new WeakMap,_t=new WeakMap,fe=new WeakMap;function Ts(t){const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(L(t.result)),o()},a=()=>{r(t.error),o()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&_n.set(n,t)}).catch(()=>{}),fe.set(e,t),e}function Cs(t){if(Wt.has(t))return;const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),o()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Wt.set(t,e)}let Ut={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||En.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return L(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xs(t){Ut=t(Ut)}function Os(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Et(this),e,...n);return En.set(r,e.sort?e.sort():[e]),L(r)}:Ps().includes(t)?function(...e){return t.apply(Et(this),e),L(_n.get(this))}:function(...e){return L(t.apply(Et(this),e))}}function Is(t){return typeof t=="function"?Os(t):(t instanceof IDBTransaction&&Cs(t),Ss(t,ks())?new Proxy(t,Ut):t)}function L(t){if(t instanceof IDBRequest)return Ts(t);if(_t.has(t))return _t.get(t);const e=Is(t);return e!==t&&(_t.set(t,e),fe.set(e,t)),e}const Et=t=>fe.get(t);function ec(t,e,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const a=indexedDB.open(t,e),i=L(a);return r&&a.addEventListener("upgradeneeded",f=>{r(L(a.result),f.oldVersion,f.newVersion,L(a.transaction),f)}),n&&a.addEventListener("blocked",f=>n(f.oldVersion,f.newVersion,f)),i.then(f=>{s&&f.addEventListener("close",()=>s()),o&&f.addEventListener("versionchange",l=>o(l.oldVersion,l.newVersion,l))}).catch(()=>{}),i}const Ms=["get","getKey","getAll","getAllKeys","count"],Ns=["put","add","delete","clear"],St=new Map;function je(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(St.get(e))return St.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=Ns.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Ms.includes(n)))return;const s=async function(a,...i){const f=this.transaction(a,o?"readwrite":"readonly");let l=f.store;return r&&(l=l.index(i.shift())),(await Promise.all([l[n](...i),o&&f.done]))[0]};return St.set(e,s),s}xs(t=>({...t,get:(e,n,r)=>je(e,n)||t.get(e,n,r),has:(e,n)=>!!je(e,n)||t.has(e,n)}));function nc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Rs(t,e,n){return(e=Fs(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function De(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?De(Object(n),!0).forEach(function(r){Rs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):De(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ls(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Fs(t){var e=Ls(t,"string");return typeof e=="symbol"?e:e+""}const He=()=>{};let le={},Sn={},kn=null,Pn={mark:He,measure:He};try{typeof window<"u"&&(le=window),typeof document<"u"&&(Sn=document),typeof MutationObserver<"u"&&(kn=MutationObserver),typeof performance<"u"&&(Pn=performance)}catch{}const{userAgent:$e=""}=le.navigator||{},F=le,_=Sn,ze=kn,rt=Pn;F.document;const I=!!_.documentElement&&!!_.head&&typeof _.addEventListener=="function"&&typeof _.createElement=="function",Tn=~$e.indexOf("MSIE")||~$e.indexOf("Trident/");var js=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ds=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Cn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Hs={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},xn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],k="classic",dt="duotone",$s="sharp",zs="sharp-duotone",On=[k,dt,$s,zs],Ws={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Us={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Bs=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Ys={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Gs=["fak","fa-kit","fakd","fa-kit-duotone"],We={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Vs=["kit"],Ks={kit:{"fa-kit":"fak"}},qs=["fak","fakd"],Xs={kit:{fak:"fa-kit"}},Ue={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qs=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Js=["fak","fa-kit","fakd","fa-kit-duotone"],Zs={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ta={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},ea={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Bt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},na=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Yt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Qs,...na],ra=["solid","regular","light","thin","duotone","brands"],In=[1,2,3,4,5,6,7,8,9,10],oa=In.concat([11,12,13,14,15,16,17,18,19,20]),sa=[...Object.keys(ea),...ra,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY].concat(In.map(t=>"".concat(t,"x"))).concat(oa.map(t=>"w-".concat(t))),aa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const x="___FONT_AWESOME___",Gt=16,Mn="fa",Nn="svg-inline--fa",$="data-fa-i2svg",Vt="data-fa-pseudo-element",ia="data-fa-pseudo-element-pending",ue="data-prefix",de="data-icon",Be="fontawesome-i2svg",ca="async",fa=["HTML","HEAD","STYLE","SCRIPT"],Rn=(()=>{try{return!0}catch{return!1}})();function Z(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[k]}})}const Ln=d({},Cn);Ln[k]=d(d(d(d({},{"fa-duotone":"duotone"}),Cn[k]),We.kit),We["kit-duotone"]);const la=Z(Ln),Kt=d({},Ys);Kt[k]=d(d(d(d({},{duotone:"fad"}),Kt[k]),Ue.kit),Ue["kit-duotone"]);const Ye=Z(Kt),qt=d({},Bt);qt[k]=d(d({},qt[k]),Xs.kit);const pe=Z(qt),Xt=d({},ta);Xt[k]=d(d({},Xt[k]),Ks.kit);Z(Xt);const ua=js,Fn="fa-layers-text",da=Ds,pa=d({},Ws);Z(pa);const ma=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],kt=Hs,ha=[...Vs,...sa],q=F.FontAwesomeConfig||{};function ga(t){var e=_.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ya(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}_&&typeof _.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const o=ya(ga(n));o!=null&&(q[r]=o)});const jn={styleDefault:"solid",familyDefault:k,cssPrefix:Mn,replacementClass:Nn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};q.familyPrefix&&(q.cssPrefix=q.familyPrefix);const B=d(d({},jn),q);B.autoReplaceSvg||(B.observeMutations=!1);const y={};Object.keys(jn).forEach(t=>{Object.defineProperty(y,t,{enumerable:!0,set:function(e){B[t]=e,X.forEach(n=>n(y))},get:function(){return B[t]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(t){B.cssPrefix=t,X.forEach(e=>e(y))},get:function(){return B.cssPrefix}});F.FontAwesomeConfig=y;const X=[];function ba(t){return X.push(t),()=>{X.splice(X.indexOf(t),1)}}const N=Gt,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wa(t){if(!t||!I)return;const e=_.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=_.head.childNodes;let r=null;for(let o=n.length-1;o>-1;o--){const s=n[o],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return _.head.insertBefore(e,r),t}const va="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Q(){let t=12,e="";for(;t-- >0;)e+=va[Math.random()*62|0];return e}function Y(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function me(t){return t.classList?Y(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Dn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Aa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Dn(t[n]),'" '),"").trim()}function pt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function he(t){return t.size!==T.size||t.x!==T.x||t.y!==T.y||t.rotate!==T.rotate||t.flipX||t.flipY}function _a(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const o={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(s," ").concat(a," ").concat(i)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:f,path:l}}function Ea(t){let{transform:e,width:n=Gt,height:r=Gt,startCentered:o=!1}=t,s="";return o&&Tn?s+="translate(".concat(e.x/N-n/2,"em, ").concat(e.y/N-r/2,"em) "):o?s+="translate(calc(-50% + ".concat(e.x/N,"em), calc(-50% + ").concat(e.y/N,"em)) "):s+="translate(".concat(e.x/N,"em, ").concat(e.y/N,"em) "),s+="scale(".concat(e.size/N*(e.flipX?-1:1),", ").concat(e.size/N*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var Sa=`:root, :host {
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
}`;function Hn(){const t=Mn,e=Nn,n=y.cssPrefix,r=y.replacementClass;let o=Sa;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");o=o.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(i,".".concat(r))}return o}let Ge=!1;function Pt(){y.autoAddCss&&!Ge&&(wa(Hn()),Ge=!0)}var ka={mixout(){return{dom:{css:Hn,insertCss:Pt}}},hooks(){return{beforeDOMElementCreation(){Pt()},beforeI2svg(){Pt()}}}};const O=F||{};O[x]||(O[x]={});O[x].styles||(O[x].styles={});O[x].hooks||(O[x].hooks={});O[x].shims||(O[x].shims=[]);var C=O[x];const $n=[],zn=function(){_.removeEventListener("DOMContentLoaded",zn),lt=1,$n.map(t=>t())};let lt=!1;I&&(lt=(_.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_.readyState),lt||_.addEventListener("DOMContentLoaded",zn));function Pa(t){I&&(lt?setTimeout(t,0):$n.push(t))}function tt(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Dn(t):"<".concat(e," ").concat(Aa(n),">").concat(r.map(tt).join(""),"</").concat(e,">")}function Ve(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Tt=function(e,n,r,o){var s=Object.keys(e),a=s.length,i=n,f,l,c;for(r===void 0?(f=1,c=e[s[0]]):(f=0,c=r);f<a;f++)l=s[f],c=i(c,e[l],l,e);return c};function Ta(t){const e=[];let n=0;const r=t.length;for(;n<r;){const o=t.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((o&1023)<<10)+(s&1023)+65536):(e.push(o),n--)}else e.push(o)}return e}function Qt(t){const e=Ta(t);return e.length===1?e[0].toString(16):null}function Ca(t,e){const n=t.length;let r=t.charCodeAt(e),o;return r>=55296&&r<=56319&&n>e+1&&(o=t.charCodeAt(e+1),o>=56320&&o<=57343)?(r-55296)*1024+o-56320+65536:r}function Ke(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Jt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,o=Ke(e);typeof C.hooks.addPack=="function"&&!r?C.hooks.addPack(t,Ke(e)):C.styles[t]=d(d({},C.styles[t]||{}),o),t==="fas"&&Jt("fa",e)}const{styles:J,shims:xa}=C,Wn=Object.keys(pe),Oa=Wn.reduce((t,e)=>(t[e]=Object.keys(pe[e]),t),{});let ge=null,Un={},Bn={},Yn={},Gn={},Vn={};function Ia(t){return~ha.indexOf(t)}function Ma(t,e){const n=e.split("-"),r=n[0],o=n.slice(1).join("-");return r===t&&o!==""&&!Ia(o)?o:null}const Kn=()=>{const t=r=>Tt(J,(o,s,a)=>(o[a]=Tt(s,r,{}),o),{});Un=t((r,o,s)=>(o[3]&&(r[o[3]]=s),o[2]&&o[2].filter(i=>typeof i=="number").forEach(i=>{r[i.toString(16)]=s}),r)),Bn=t((r,o,s)=>(r[s]=s,o[2]&&o[2].filter(i=>typeof i=="string").forEach(i=>{r[i]=s}),r)),Vn=t((r,o,s)=>{const a=o[2];return r[s]=s,a.forEach(i=>{r[i]=s}),r});const e="far"in J||y.autoFetchSvg,n=Tt(xa,(r,o)=>{const s=o[0];let a=o[1];const i=o[2];return a==="far"&&!e&&(a="fas"),typeof s=="string"&&(r.names[s]={prefix:a,iconName:i}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:a,iconName:i}),r},{names:{},unicodes:{}});Yn=n.names,Gn=n.unicodes,ge=mt(y.styleDefault,{family:y.familyDefault})};ba(t=>{ge=mt(t.styleDefault,{family:y.familyDefault})});Kn();function ye(t,e){return(Un[t]||{})[e]}function Na(t,e){return(Bn[t]||{})[e]}function H(t,e){return(Vn[t]||{})[e]}function qn(t){return Yn[t]||{prefix:null,iconName:null}}function Ra(t){const e=Gn[t],n=ye("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function j(){return ge}const Xn=()=>({prefix:null,iconName:null,rest:[]});function La(t){let e=k;const n=Wn.reduce((r,o)=>(r[o]="".concat(y.cssPrefix,"-").concat(o),r),{});return On.forEach(r=>{(t.includes(n[r])||t.some(o=>Oa[r].includes(o)))&&(e=r)}),e}function mt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=k}=e,r=la[n][t];if(n===dt&&!t)return"fad";const o=Ye[n][t]||Ye[n][r],s=t in C.styles?t:null;return o||s||null}function Fa(t){let e=[],n=null;return t.forEach(r=>{const o=Ma(y.cssPrefix,r);o?n=o:r&&e.push(r)}),{iconName:n,rest:e}}function qe(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const o=Yt.concat(Js),s=qe(t.filter(m=>o.includes(m))),a=qe(t.filter(m=>!Yt.includes(m))),i=s.filter(m=>(r=m,!xn.includes(m))),[f=null]=i,l=La(s),c=d(d({},Fa(a)),{},{prefix:mt(f,{family:l})});return d(d(d({},c),$a({values:t,family:l,styles:J,config:y,canonical:c,givenPrefix:r})),ja(n,r,c))}function ja(t,e,n){let{prefix:r,iconName:o}=n;if(t||!r||!o)return{prefix:r,iconName:o};const s=e==="fa"?qn(o):{},a=H(r,o);return o=s.iconName||a||o,r=s.prefix||r,r==="far"&&!J.far&&J.fas&&!y.autoFetchSvg&&(r="fas"),{prefix:r,iconName:o}}const Da=On.filter(t=>t!==k||t!==dt),Ha=Object.keys(Bt).filter(t=>t!==k).map(t=>Object.keys(Bt[t])).flat();function $a(t){const{values:e,family:n,canonical:r,givenPrefix:o="",styles:s={},config:a={}}=t,i=n===dt,f=e.includes("fa-duotone")||e.includes("fad"),l=a.familyDefault==="duotone",c=r.prefix==="fad"||r.prefix==="fa-duotone";if(!i&&(f||l||c)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Da.includes(n)&&(Object.keys(s).find(h=>Ha.includes(h))||a.autoFetchSvg)){const h=Bs.get(n).defaultShortPrefixId;r.prefix=h,r.iconName=H(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||o==="fa")&&(r.prefix=j()||"fas"),r}class za{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(s=>{this.definitions[s]=d(d({},this.definitions[s]||{}),o[s]),Jt(s,o[s]);const a=pe[k][s];a&&Jt(a,o[s]),Kn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(o=>{const{prefix:s,iconName:a,icon:i}=r[o],f=i[2];e[s]||(e[s]={}),f.length>0&&f.forEach(l=>{typeof l=="string"&&(e[s][l]=i)}),e[s][a]=i}),e}}let Xe=[],W={};const U={},Wa=Object.keys(U);function Ua(t,e){let{mixoutsTo:n}=e;return Xe=t,W={},Object.keys(U).forEach(r=>{Wa.indexOf(r)===-1&&delete U[r]}),Xe.forEach(r=>{const o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(s=>{typeof o[s]=="function"&&(n[s]=o[s]),typeof o[s]=="object"&&Object.keys(o[s]).forEach(a=>{n[s]||(n[s]={}),n[s][a]=o[s][a]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(a=>{W[a]||(W[a]=[]),W[a].push(s[a])})}r.provides&&r.provides(U)}),n}function Zt(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return(W[t]||[]).forEach(a=>{e=a.apply(null,[e,...r])}),e}function z(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(W[t]||[]).forEach(s=>{s.apply(null,n)})}function D(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return U[t]?U[t].apply(null,e):void 0}function te(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||j();if(e)return e=H(n,e)||e,Ve(Qn.definitions,n,e)||Ve(C.styles,n,e)}const Qn=new za,Ba=()=>{y.autoReplaceSvg=!1,y.observeMutations=!1,z("noAuto")},Ya={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?(z("beforeI2svg",t),D("pseudoElements2svg",t),D("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,Pa(()=>{Va({autoReplaceSvgRoot:e}),z("watch",t)})}},Ga={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:H(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=mt(t[0]);return{prefix:n,iconName:H(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(y.cssPrefix,"-"))>-1||t.match(ua))){const e=ht(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||j(),iconName:H(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=j();return{prefix:e,iconName:H(e,t)||t}}}},P={noAuto:Ba,config:y,dom:Ya,parse:Ga,library:Qn,findIconDefinition:te,toHtml:tt},Va=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=_}=t;(Object.keys(C.styles).length>0||y.autoFetchSvg)&&I&&y.autoReplaceSvg&&P.dom.i2svg({node:e})};function gt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>tt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!I)return;const n=_.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ka(t){let{children:e,main:n,mask:r,attributes:o,styles:s,transform:a}=t;if(he(a)&&n.found&&!r.found){const{width:i,height:f}=n,l={x:i/f/2,y:.5};o.style=pt(d(d({},s),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function qa(t){let{prefix:e,iconName:n,children:r,attributes:o,symbol:s}=t;const a=s===!0?"".concat(e,"-").concat(y.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},o),{},{id:a}),children:r}]}]}function be(t){const{icons:{main:e,mask:n},prefix:r,iconName:o,transform:s,symbol:a,title:i,maskId:f,titleId:l,extra:c,watchable:m=!1}=t,{width:h,height:b}=n.found?n:e,p=qs.includes(r),u=[y.replacementClass,o?"".concat(y.cssPrefix,"-").concat(o):""].filter(E=>c.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(c.classes).join(" ");let g={children:[],attributes:d(d({},c.attributes),{},{"data-prefix":r,"data-icon":o,class:u,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(b)})};const w=p&&!~c.classes.indexOf("fa-fw")?{width:"".concat(h/b*16*.0625,"em")}:{};m&&(g.attributes[$]=""),i&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(l||Q())},children:[i]}),delete g.attributes.title);const v=d(d({},g),{},{prefix:r,iconName:o,main:e,mask:n,maskId:f,transform:s,symbol:a,styles:d(d({},w),c.styles)}),{children:A,attributes:S}=n.found&&e.found?D("generateAbstractMask",v)||{children:[],attributes:{}}:D("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=A,v.attributes=S,a?qa(v):Ka(v)}function Qe(t){const{content:e,width:n,height:r,transform:o,title:s,extra:a,watchable:i=!1}=t,f=d(d(d({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});i&&(f[$]="");const l=d({},a.styles);he(o)&&(l.transform=Ea({transform:o,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const c=pt(l);c.length>0&&(f.style=c);const m=[];return m.push({tag:"span",attributes:f,children:[e]}),s&&m.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),m}function Xa(t){const{content:e,title:n,extra:r}=t,o=d(d(d({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=pt(r.styles);s.length>0&&(o.style=s);const a=[];return a.push({tag:"span",attributes:o,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}const{styles:Ct}=C;function ee(t){const e=t[0],n=t[1],[r]=t.slice(4);let o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(kt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(kt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(kt.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:o}}const Qa={found:!1,width:512,height:512};function Ja(t,e){!Rn&&!y.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ne(t,e){let n=e;return e==="fa"&&y.styleDefault!==null&&(e=j()),new Promise((r,o)=>{if(n==="fa"){const s=qn(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Ct[e]&&Ct[e][t]){const s=Ct[e][t];return r(ee(s))}Ja(t,e),r(d(d({},Qa),{},{icon:y.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}const Je=()=>{},re=y.measurePerformance&&rt&&rt.mark&&rt.measure?rt:{mark:Je,measure:Je},K='FA "6.7.2"',Za=t=>(re.mark("".concat(K," ").concat(t," begins")),()=>Jn(t)),Jn=t=>{re.mark("".concat(K," ").concat(t," ends")),re.measure("".concat(K," ").concat(t),"".concat(K," ").concat(t," begins"),"".concat(K," ").concat(t," ends"))};var we={begin:Za,end:Jn};const st=()=>{};function Ze(t){return typeof(t.getAttribute?t.getAttribute($):null)=="string"}function ti(t){const e=t.getAttribute?t.getAttribute(ue):null,n=t.getAttribute?t.getAttribute(de):null;return e&&n}function ei(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(y.replacementClass)}function ni(){return y.autoReplaceSvg===!0?at.replace:at[y.autoReplaceSvg]||at.replace}function ri(t){return _.createElementNS("http://www.w3.org/2000/svg",t)}function oi(t){return _.createElement(t)}function Zn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?ri:oi}=e;if(typeof t=="string")return _.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(Zn(s,{ceFn:n}))}),r}function si(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const at={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Zn(n),e)}),e.getAttribute($)===null&&y.keepOriginalSource){let n=_.createComment(si(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~me(e).indexOf(y.replacementClass))return at.replace(t);const r=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((a,i)=>(i===y.replacementClass||i.match(r)?a.toSvg.push(i):a.toNode.push(i),a),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const o=n.map(s=>tt(s)).join(`
`);e.setAttribute($,""),e.innerHTML=o}};function tn(t){t()}function tr(t,e){const n=typeof e=="function"?e:st;if(t.length===0)n();else{let r=tn;y.mutateApproach===ca&&(r=F.requestAnimationFrame||tn),r(()=>{const o=ni(),s=we.begin("mutate");t.map(o),s(),n()})}}let ve=!1;function er(){ve=!0}function oe(){ve=!1}let ut=null;function en(t){if(!ze||!y.observeMutations)return;const{treeCallback:e=st,nodeCallback:n=st,pseudoElementsCallback:r=st,observeMutationsRoot:o=_}=t;ut=new ze(s=>{if(ve)return;const a=j();Y(s).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!Ze(i.addedNodes[0])&&(y.searchPseudoElements&&r(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&y.searchPseudoElements&&r(i.target.parentNode),i.type==="attributes"&&Ze(i.target)&&~ma.indexOf(i.attributeName))if(i.attributeName==="class"&&ti(i.target)){const{prefix:f,iconName:l}=ht(me(i.target));i.target.setAttribute(ue,f||a),l&&i.target.setAttribute(de,l)}else ei(i.target)&&n(i.target)})}),I&&ut.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ai(){ut&&ut.disconnect()}function ii(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,o)=>{const s=o.split(":"),a=s[0],i=s.slice(1);return a&&i.length>0&&(r[a]=i.join(":").trim()),r},{})),n}function ci(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let o=ht(me(t));return o.prefix||(o.prefix=j()),e&&n&&(o.prefix=e,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=Na(o.prefix,t.innerText)||ye(o.prefix,Qt(t.innerText))),!o.iconName&&y.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=t.firstChild.data)),o}function fi(t){const e=Y(t.attributes).reduce((o,s)=>(o.name!=="class"&&o.name!=="style"&&(o[s.name]=s.value),o),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return y.autoA11y&&(n?e["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(r||Q()):(e["aria-hidden"]="true",e.focusable="false")),e}function li(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function nn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:o}=ci(t),s=fi(t),a=Zt("parseNodeAttributes",{},t);let i=e.styleParser?ii(t):[];return d({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:i,attributes:s}},a)}const{styles:ui}=C;function nr(t){const e=y.autoReplaceSvg==="nest"?nn(t,{styleParser:!1}):nn(t);return~e.extra.classes.indexOf(Fn)?D("generateLayersText",t,e):D("generateSvgReplacementMutation",t,e)}function di(){return[...Gs,...Yt]}function rn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();const n=_.documentElement.classList,r=c=>n.add("".concat(Be,"-").concat(c)),o=c=>n.remove("".concat(Be,"-").concat(c)),s=y.autoFetchSvg?di():xn.concat(Object.keys(ui));s.includes("fa")||s.push("fa");const a=[".".concat(Fn,":not([").concat($,"])")].concat(s.map(c=>".".concat(c,":not([").concat($,"])"))).join(", ");if(a.length===0)return Promise.resolve();let i=[];try{i=Y(t.querySelectorAll(a))}catch{}if(i.length>0)r("pending"),o("complete");else return Promise.resolve();const f=we.begin("onTree"),l=i.reduce((c,m)=>{try{const h=nr(m);h&&c.push(h)}catch(h){Rn||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise((c,m)=>{Promise.all(l).then(h=>{tr(h,()=>{r("active"),r("complete"),o("pending"),typeof e=="function"&&e(),f(),c()})}).catch(h=>{f(),m(h)})})}function pi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nr(t).then(n=>{n&&tr([n],e)})}function mi(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:te(e||{});let{mask:o}=n;return o&&(o=(o||{}).icon?o:te(o||{})),t(r,d(d({},n),{},{mask:o}))}}const hi=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=T,symbol:r=!1,mask:o=null,maskId:s=null,title:a=null,titleId:i=null,classes:f=[],attributes:l={},styles:c={}}=e;if(!t)return;const{prefix:m,iconName:h,icon:b}=t;return gt(d({type:"icon"},t),()=>(z("beforeDOMElementCreation",{iconDefinition:t,params:e}),y.autoA11y&&(a?l["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(i||Q()):(l["aria-hidden"]="true",l.focusable="false")),be({icons:{main:ee(b),mask:o?ee(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:h,transform:d(d({},T),n),symbol:r,title:a,maskId:s,titleId:i,extra:{attributes:l,styles:c,classes:f}})))};var gi={mixout(){return{icon:mi(hi)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=rn,t.nodeCallback=pi,t}}},provides(t){t.i2svg=function(e){const{node:n=_,callback:r=()=>{}}=e;return rn(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:o,titleId:s,prefix:a,transform:i,symbol:f,mask:l,maskId:c,extra:m}=n;return new Promise((h,b)=>{Promise.all([ne(r,a),l.iconName?ne(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(p=>{let[u,g]=p;h([e,be({icons:{main:u,mask:g},prefix:a,iconName:r,transform:i,symbol:f,maskId:c,title:o,titleId:s,extra:m,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:o,transform:s,styles:a}=e;const i=pt(a);i.length>0&&(r.style=i);let f;return he(s)&&(f=D("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),n.push(f||o.icon),{children:n,attributes:r}}}},yi={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return gt({type:"layer"},()=>{z("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(o=>{Array.isArray(o)?o.map(s=>{r=r.concat(s.abstract)}):r=r.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},bi={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:o={},styles:s={}}=e;return gt({type:"counter",content:t},()=>(z("beforeDOMElementCreation",{content:t,params:e}),Xa({content:t.toString(),title:n,extra:{attributes:o,styles:s,classes:["".concat(y.cssPrefix,"-layers-counter"),...r]}})))}}}},wi={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=T,title:r=null,classes:o=[],attributes:s={},styles:a={}}=e;return gt({type:"text",content:t},()=>(z("beforeDOMElementCreation",{content:t,params:e}),Qe({content:t,transform:d(d({},T),n),title:r,extra:{attributes:s,styles:a,classes:["".concat(y.cssPrefix,"-layers-text"),...o]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:o,extra:s}=n;let a=null,i=null;if(Tn){const f=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();a=l.width/f,i=l.height/f}return y.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Qe({content:e.innerHTML,width:a,height:i,transform:o,title:r,extra:s,watchable:!0})])}}};const vi=new RegExp('"',"ug"),on=[1105920,1112319],sn=d(d(d(d({},{FontAwesome:{normal:"fas",400:"fas"}}),Us),aa),Zs),se=Object.keys(sn).reduce((t,e)=>(t[e.toLowerCase()]=sn[e],t),{}),Ai=Object.keys(se).reduce((t,e)=>{const n=se[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function _i(t){const e=t.replace(vi,""),n=Ca(e,0),r=n>=on[0]&&n<=on[1],o=e.length===2?e[0]===e[1]:!1;return{value:Qt(o?e[0]:e),isSecondary:r||o}}function Ei(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),o=isNaN(r)?"normal":r;return(se[n]||{})[o]||Ai[n]}function an(t,e){const n="".concat(ia).concat(e.replace(":","-"));return new Promise((r,o)=>{if(t.getAttribute(n)!==null)return r();const a=Y(t.children).filter(h=>h.getAttribute(Vt)===e)[0],i=F.getComputedStyle(t,e),f=i.getPropertyValue("font-family"),l=f.match(da),c=i.getPropertyValue("font-weight"),m=i.getPropertyValue("content");if(a&&!l)return t.removeChild(a),r();if(l&&m!=="none"&&m!==""){const h=i.getPropertyValue("content");let b=Ei(f,c);const{value:p,isSecondary:u}=_i(h),g=l[0].startsWith("FontAwesome");let w=ye(b,p),v=w;if(g){const A=Ra(p);A.iconName&&A.prefix&&(w=A.iconName,b=A.prefix)}if(w&&!u&&(!a||a.getAttribute(ue)!==b||a.getAttribute(de)!==v)){t.setAttribute(n,v),a&&t.removeChild(a);const A=li(),{extra:S}=A;S.attributes[Vt]=e,ne(w,b).then(E=>{const G=be(d(d({},A),{},{icons:{main:E,mask:Xn()},prefix:b,iconName:v,extra:S,watchable:!0})),yt=_.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(yt,t.firstChild):t.appendChild(yt),yt.outerHTML=G.map(rr=>tt(rr)).join(`
`),t.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function Si(t){return Promise.all([an(t,"::before"),an(t,"::after")])}function ki(t){return t.parentNode!==document.head&&!~fa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Vt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function cn(t){if(I)return new Promise((e,n)=>{const r=Y(t.querySelectorAll("*")).filter(ki).map(Si),o=we.begin("searchPseudoElements");er(),Promise.all(r).then(()=>{o(),oe(),e()}).catch(()=>{o(),oe(),n()})})}var Pi={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=cn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=_}=e;y.searchPseudoElements&&cn(n)}}};let fn=!1;var Ti={mixout(){return{dom:{unwatch(){er(),fn=!0}}}},hooks(){return{bootstrap(){en(Zt("mutationObserverCallbacks",{}))},noAuto(){ai()},watch(t){const{observeMutationsRoot:e}=t;fn?oe():en(Zt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const ln=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const o=r.toLowerCase().split("-"),s=o[0];let a=o.slice(1).join("-");if(s&&a==="h")return n.flipX=!0,n;if(s&&a==="v")return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(s){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a;break}return n},e)};var Ci={mixout(){return{parse:{transform:t=>ln(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=ln(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:o,iconWidth:s}=e;const a={transform:"translate(".concat(o/2," 256)")},i="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(i," ").concat(f," ").concat(l)},m={transform:"translate(".concat(s/2*-1," -256)")},h={outer:a,inner:c,path:m};return{tag:"g",attributes:d({},h.outer),children:[{tag:"g",attributes:d({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d(d({},n.icon.attributes),h.path)}]}]}}}};const xt={x:0,y:0,width:"100%",height:"100%"};function un(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function xi(t){return t.tag==="g"?t.children:[t]}var Oi={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?ht(n.split(" ").map(o=>o.trim())):Xn();return r.prefix||(r.prefix=j()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:o,mask:s,maskId:a,transform:i}=e;const{width:f,icon:l}=o,{width:c,icon:m}=s,h=_a({transform:i,containerWidth:c,iconWidth:f}),b={tag:"rect",attributes:d(d({},xt),{},{fill:"white"})},p=l.children?{children:l.children.map(un)}:{},u={tag:"g",attributes:d({},h.inner),children:[un(d({tag:l.tag,attributes:d(d({},l.attributes),h.path)},p))]},g={tag:"g",attributes:d({},h.outer),children:[u]},w="mask-".concat(a||Q()),v="clip-".concat(a||Q()),A={tag:"mask",attributes:d(d({},xt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,g]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:xi(m)},A]};return n.push(S,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(w,")")},xt)}),{children:n,attributes:r}}}},Ii={provides(t){let e=!1;F.matchMedia&&(e=F.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=d(d({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||a.children.push({tag:"animate",attributes:d(d({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(a),n.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:d(d({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Mi={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Ni=[ka,gi,yi,bi,wi,Pi,Ti,Ci,Oi,Ii,Mi];Ua(Ni,{mixoutsTo:P});P.noAuto;P.config;const rc=P.library;P.dom;const oc=P.parse;P.findIconDefinition;P.toHtml;const sc=P.icon;P.layer;P.text;P.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ac={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};export{Fi as $,Qi as A,ac as B,Mo as C,Ji as D,Zi as P,tc as T,nc as _,_o as a,Vi as b,ao as c,$t as d,Bi as e,Gi as f,ji as g,Io as h,Hi as i,Li as j,Lt as k,Wi as l,Ki as m,Di as n,ec as o,Lo as p,Yi as q,qi as r,Xi as s,bs as t,$i as u,Ui as v,zi as w,oc as x,sc as y,rc as z};

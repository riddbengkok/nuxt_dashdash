const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CM3INss3.js","./CbRn58ud.js","./index.Bg1KwI4Z.css","./ydd8zzSK.js","./Biws_ZL-.js","./login.Ba-TFbaN.css","./Chp6Y_14.js","./CzhSaTRZ.js","./CPUPFeT-.js","./D9cGv_Y6.js","./DF7PArDz.js","./BsgRZW7Q.js","./error-404.4oxyXxx0.css","./BnlbYWKn.js","./error-500.CZqNkBuR.css"])))=>i.map(i=>d[i]);
var Rp=Object.defineProperty;var Op=(e,t,n)=>t in e?Rp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Vt=(e,t,n)=>Op(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ma(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const he={},zn=[],vt=()=>{},xp=()=>!1,es=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ya=e=>e.startsWith("onUpdate:"),Ie=Object.assign,_a=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Np=Object.prototype.hasOwnProperty,ce=(e,t)=>Np.call(e,t),X=Array.isArray,Kn=e=>ts(e)==="[object Map]",Vu=e=>ts(e)==="[object Set]",Mp=e=>ts(e)==="[object RegExp]",Q=e=>typeof e=="function",_e=e=>typeof e=="string",jt=e=>typeof e=="symbol",ge=e=>e!==null&&typeof e=="object",zu=e=>(ge(e)||Q(e))&&Q(e.then)&&Q(e.catch),Ku=Object.prototype.toString,ts=e=>Ku.call(e),Lp=e=>ts(e).slice(8,-1),Gu=e=>ts(e)==="[object Object]",va=e=>_e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gn=ma(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),di=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Dp=/-(\w)/g,Ze=di(e=>e.replace(Dp,(t,n)=>n?n.toUpperCase():"")),Fp=/\B([A-Z])/g,Ln=di(e=>e.replace(Fp,"-$1").toLowerCase()),hi=di(e=>e.charAt(0).toUpperCase()+e.slice(1)),Mi=di(e=>e?`on${hi(e)}`:""),sn=(e,t)=>!Object.is(e,t),Cr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},go=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Up=e=>{const t=parseFloat(e);return isNaN(t)?e:t},qu=e=>{const t=_e(e)?Number(e):NaN;return isNaN(t)?e:t};let vc;const pi=()=>vc||(vc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gi(e){if(X(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=_e(r)?Bp(r):gi(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(_e(e)||ge(e))return e}const Hp=/;(?![^(]*\))/g,jp=/:([^]+)/,$p=/\/\*[^]*?\*\//g;function Bp(e){const t={};return e.replace($p,"").split(Hp).forEach(n=>{if(n){const r=n.split(jp);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function mi(e){let t="";if(_e(e))t=e;else if(X(e))for(let n=0;n<e.length;n++){const r=mi(e[n]);r&&(t+=r+" ")}else if(ge(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Wp(e){if(!e)return null;let{class:t,style:n}=e;return t&&!_e(t)&&(e.class=mi(t)),n&&(e.style=gi(n)),e}const Vp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zp=ma(Vp);function Yu(e){return!!e||e===""}const Ju=e=>!!(e&&e.__v_isRef===!0),Kp=e=>_e(e)?e:e==null?"":X(e)||ge(e)&&(e.toString===Ku||!Q(e.toString))?Ju(e)?Kp(e.value):JSON.stringify(e,Xu,2):String(e),Xu=(e,t)=>Ju(t)?Xu(e,t.value):Kn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Li(r,i)+" =>"]=s,n),{})}:Vu(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Li(n))}:jt(t)?Li(t):ge(t)&&!X(t)&&!Gu(t)?String(t):t,Li=(e,t="")=>{var n;return jt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class Qu{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=je;try{return je=this,t()}finally{je=n}}}on(){++this._on===1&&(this.prevScope=je,je=this)}off(){this._on>0&&--this._on===0&&(je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Gp(e){return new Qu(e)}function Zu(){return je}let de;const Di=new WeakSet;class ef{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Di.has(this)&&(Di.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bc(this),rf(this);const t=de,n=st;de=this,st=!0;try{return this.fn()}finally{sf(this),de=t,st=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ea(t);this.deps=this.depsTail=void 0,bc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Di.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){mo(this)&&this.run()}get dirty(){return mo(this)}}let tf=0,Ar,kr;function nf(e,t=!1){if(e.flags|=8,t){e.next=kr,kr=e;return}e.next=Ar,Ar=e}function ba(){tf++}function wa(){if(--tf>0)return;if(kr){let t=kr;for(kr=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Ar;){let t=Ar;for(Ar=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function rf(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function sf(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ea(r),qp(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function mo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(of(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function of(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Hr)||(e.globalVersion=Hr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!mo(e))))return;e.flags|=2;const t=e.dep,n=de,r=st;de=e,st=!0;try{rf(e);const s=e.fn(e._value);(t.version===0||sn(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{de=n,st=r,sf(e),e.flags&=-3}}function Ea(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ea(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function qp(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let st=!0;const af=[];function Nt(){af.push(st),st=!1}function Mt(){const e=af.pop();st=e===void 0?!0:e}function bc(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=de;de=void 0;try{t()}finally{de=n}}}let Hr=0;class Yp{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Sa{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!de||!st||de===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==de)n=this.activeLink=new Yp(de,this),de.deps?(n.prevDep=de.depsTail,de.depsTail.nextDep=n,de.depsTail=n):de.deps=de.depsTail=n,cf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=de.depsTail,n.nextDep=void 0,de.depsTail.nextDep=n,de.depsTail=n,de.deps===n&&(de.deps=r)}return n}trigger(t){this.version++,Hr++,this.notify(t)}notify(t){ba();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{wa()}}}function cf(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)cf(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const $s=new WeakMap,Tn=Symbol(""),yo=Symbol(""),jr=Symbol("");function Re(e,t,n){if(st&&de){let r=$s.get(e);r||$s.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Sa),s.map=r,s.key=n),s.track()}}function Ct(e,t,n,r,s,i){const o=$s.get(e);if(!o){Hr++;return}const a=c=>{c&&c.trigger()};if(ba(),t==="clear")o.forEach(a);else{const c=X(e),u=c&&va(n);if(c&&n==="length"){const l=Number(r);o.forEach((f,d)=>{(d==="length"||d===jr||!jt(d)&&d>=l)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(jr)),t){case"add":c?u&&a(o.get("length")):(a(o.get(Tn)),Kn(e)&&a(o.get(yo)));break;case"delete":c||(a(o.get(Tn)),Kn(e)&&a(o.get(yo)));break;case"set":Kn(e)&&a(o.get(Tn));break}}wa()}function Jp(e,t){const n=$s.get(e);return n&&n.get(t)}function Hn(e){const t=se(e);return t===e?t:(Re(t,"iterate",jr),it(e)?t:t.map(Me))}function Ia(e){return Re(e=se(e),"iterate",jr),e}const Xp={__proto__:null,[Symbol.iterator](){return Fi(this,Symbol.iterator,Me)},concat(...e){return Hn(this).concat(...e.map(t=>X(t)?Hn(t):t))},entries(){return Fi(this,"entries",e=>(e[1]=Me(e[1]),e))},every(e,t){return Et(this,"every",e,t,void 0,arguments)},filter(e,t){return Et(this,"filter",e,t,n=>n.map(Me),arguments)},find(e,t){return Et(this,"find",e,t,Me,arguments)},findIndex(e,t){return Et(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Et(this,"findLast",e,t,Me,arguments)},findLastIndex(e,t){return Et(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Et(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ui(this,"includes",e)},indexOf(...e){return Ui(this,"indexOf",e)},join(e){return Hn(this).join(e)},lastIndexOf(...e){return Ui(this,"lastIndexOf",e)},map(e,t){return Et(this,"map",e,t,void 0,arguments)},pop(){return vr(this,"pop")},push(...e){return vr(this,"push",e)},reduce(e,...t){return wc(this,"reduce",e,t)},reduceRight(e,...t){return wc(this,"reduceRight",e,t)},shift(){return vr(this,"shift")},some(e,t){return Et(this,"some",e,t,void 0,arguments)},splice(...e){return vr(this,"splice",e)},toReversed(){return Hn(this).toReversed()},toSorted(e){return Hn(this).toSorted(e)},toSpliced(...e){return Hn(this).toSpliced(...e)},unshift(...e){return vr(this,"unshift",e)},values(){return Fi(this,"values",Me)}};function Fi(e,t,n){const r=Ia(e),s=r[t]();return r!==e&&!it(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Qp=Array.prototype;function Et(e,t,n,r,s,i){const o=Ia(e),a=o!==e&&!it(e),c=o[t];if(c!==Qp[t]){const f=c.apply(e,i);return a?Me(f):f}let u=n;o!==e&&(a?u=function(f,d){return n.call(this,Me(f),d,e)}:n.length>2&&(u=function(f,d){return n.call(this,f,d,e)}));const l=c.call(o,u,r);return a&&s?s(l):l}function wc(e,t,n,r){const s=Ia(e);let i=n;return s!==e&&(it(e)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,e)}):i=function(o,a,c){return n.call(this,o,Me(a),c,e)}),s[t](i,...r)}function Ui(e,t,n){const r=se(e);Re(r,"iterate",jr);const s=r[t](...n);return(s===-1||s===!1)&&Aa(n[0])?(n[0]=se(n[0]),r[t](...n)):s}function vr(e,t,n=[]){Nt(),ba();const r=se(e)[t].apply(e,n);return wa(),Mt(),r}const Zp=ma("__proto__,__v_isRef,__isVue"),lf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(jt));function eg(e){jt(e)||(e=String(e));const t=se(this);return Re(t,"has",e),t.hasOwnProperty(e)}class uf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ug:pf:i?hf:df).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=X(t);if(!s){let c;if(o&&(c=Xp[n]))return c;if(n==="hasOwnProperty")return eg}const a=Reflect.get(t,n,Se(t)?t:r);return(jt(n)?lf.has(n):Zp(n))||(s||Re(t,"get",n),i)?a:Se(a)?o&&va(n)?a:a.value:ge(a)?s?gf(a):hn(a):a}}class ff extends uf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=ln(i);if(!it(r)&&!ln(r)&&(i=se(i),r=se(r)),!X(t)&&Se(i)&&!Se(r))return c?!1:(i.value=r,!0)}const o=X(t)&&va(n)?Number(n)<t.length:ce(t,n),a=Reflect.set(t,n,r,Se(t)?t:s);return t===se(s)&&(o?sn(r,i)&&Ct(t,"set",n,r):Ct(t,"add",n,r)),a}deleteProperty(t,n){const r=ce(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Ct(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!jt(n)||!lf.has(n))&&Re(t,"has",n),r}ownKeys(t){return Re(t,"iterate",X(t)?"length":Tn),Reflect.ownKeys(t)}}class tg extends uf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ng=new ff,rg=new tg,sg=new ff(!0);const _o=e=>e,ms=e=>Reflect.getPrototypeOf(e);function ig(e,t,n){return function(...r){const s=this.__v_raw,i=se(s),o=Kn(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,u=s[e](...r),l=n?_o:t?vo:Me;return!t&&Re(i,"iterate",c?yo:Tn),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[l(f[0]),l(f[1])]:l(f),done:d}},[Symbol.iterator](){return this}}}}function ys(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function og(e,t){const n={get(s){const i=this.__v_raw,o=se(i),a=se(s);e||(sn(s,a)&&Re(o,"get",s),Re(o,"get",a));const{has:c}=ms(o),u=t?_o:e?vo:Me;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&Re(se(s),"iterate",Tn),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=se(i),a=se(s);return e||(sn(s,a)&&Re(o,"has",s),Re(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=se(a),u=t?_o:e?vo:Me;return!e&&Re(c,"iterate",Tn),a.forEach((l,f)=>s.call(i,u(l),u(f),o))}};return Ie(n,e?{add:ys("add"),set:ys("set"),delete:ys("delete"),clear:ys("clear")}:{add(s){!t&&!it(s)&&!ln(s)&&(s=se(s));const i=se(this);return ms(i).has.call(i,s)||(i.add(s),Ct(i,"add",s,s)),this},set(s,i){!t&&!it(i)&&!ln(i)&&(i=se(i));const o=se(this),{has:a,get:c}=ms(o);let u=a.call(o,s);u||(s=se(s),u=a.call(o,s));const l=c.call(o,s);return o.set(s,i),u?sn(i,l)&&Ct(o,"set",s,i):Ct(o,"add",s,i),this},delete(s){const i=se(this),{has:o,get:a}=ms(i);let c=o.call(i,s);c||(s=se(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&Ct(i,"delete",s,void 0),u},clear(){const s=se(this),i=s.size!==0,o=s.clear();return i&&Ct(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ig(s,e,t)}),n}function Ta(e,t){const n=og(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const ag={get:Ta(!1,!1)},cg={get:Ta(!1,!0)},lg={get:Ta(!0,!1)};const df=new WeakMap,hf=new WeakMap,pf=new WeakMap,ug=new WeakMap;function fg(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dg(e){return e.__v_skip||!Object.isExtensible(e)?0:fg(Lp(e))}function hn(e){return ln(e)?e:Ca(e,!1,ng,ag,df)}function Pt(e){return Ca(e,!1,sg,cg,hf)}function gf(e){return Ca(e,!0,rg,lg,pf)}function Ca(e,t,n,r,s){if(!ge(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=dg(e);if(i===0)return e;const o=s.get(e);if(o)return o;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function qn(e){return ln(e)?qn(e.__v_raw):!!(e&&e.__v_isReactive)}function ln(e){return!!(e&&e.__v_isReadonly)}function it(e){return!!(e&&e.__v_isShallow)}function Aa(e){return e?!!e.__v_raw:!1}function se(e){const t=e&&e.__v_raw;return t?se(t):e}function hg(e){return!ce(e,"__v_skip")&&Object.isExtensible(e)&&go(e,"__v_skip",!0),e}const Me=e=>ge(e)?hn(e):e,vo=e=>ge(e)?gf(e):e;function Se(e){return e?e.__v_isRef===!0:!1}function xt(e){return mf(e,!1)}function $r(e){return mf(e,!0)}function mf(e,t){return Se(e)?e:new pg(e,t)}class pg{constructor(t,n){this.dep=new Sa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:se(t),this._value=n?t:Me(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||it(t)||ln(t);t=r?t:se(t),sn(t,n)&&(this._rawValue=t,this._value=r?t:Me(t),this.dep.trigger())}}function ye(e){return Se(e)?e.value:e}function gg(e){return Q(e)?e():ye(e)}const mg={get:(e,t,n)=>t==="__v_raw"?e:ye(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Se(s)&&!Se(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function yf(e){return qn(e)?e:new Proxy(e,mg)}class yg{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Jp(se(this._object),this._key)}}class _g{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function vg(e,t,n){return Se(e)?e:Q(e)?new _g(e):ge(e)&&arguments.length>1?bg(e,t,n):xt(e)}function bg(e,t,n){const r=e[t];return Se(r)?r:new yg(e,t,n)}class wg{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Sa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return nf(this,!0),!0}get value(){const t=this.dep.track();return of(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Eg(e,t,n=!1){let r,s;return Q(e)?r=e:(r=e.get,s=e.set),new wg(r,s,n)}const _s={},Bs=new WeakMap;let bn;function Sg(e,t=!1,n=bn){if(n){let r=Bs.get(n);r||Bs.set(n,r=[]),r.push(e)}}function Ig(e,t,n=he){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=v=>s?v:it(v)||s===!1||s===0?Zt(v,1):Zt(v);let l,f,d,p,_=!1,m=!1;if(Se(e)?(f=()=>e.value,_=it(e)):qn(e)?(f=()=>u(e),_=!0):X(e)?(m=!0,_=e.some(v=>qn(v)||it(v)),f=()=>e.map(v=>{if(Se(v))return v.value;if(qn(v))return u(v);if(Q(v))return c?c(v,2):v()})):Q(e)?t?f=c?()=>c(e,2):e:f=()=>{if(d){Nt();try{d()}finally{Mt()}}const v=bn;bn=l;try{return c?c(e,3,[p]):e(p)}finally{bn=v}}:f=vt,t&&s){const v=f,E=s===!0?1/0:s;f=()=>Zt(v(),E)}const S=Zu(),w=()=>{l.stop(),S&&S.active&&_a(S.effects,l)};if(i&&t){const v=t;t=(...E)=>{v(...E),w()}}let b=m?new Array(e.length).fill(_s):_s;const h=v=>{if(!(!(l.flags&1)||!l.dirty&&!v))if(t){const E=l.run();if(s||_||(m?E.some((T,k)=>sn(T,b[k])):sn(E,b))){d&&d();const T=bn;bn=l;try{const k=[E,b===_s?void 0:m&&b[0]===_s?[]:b,p];b=E,c?c(t,3,k):t(...k)}finally{bn=T}}}else l.run()};return a&&a(h),l=new ef(f),l.scheduler=o?()=>o(h,!1):h,p=v=>Sg(v,!1,l),d=l.onStop=()=>{const v=Bs.get(l);if(v){if(c)c(v,4);else for(const E of v)E();Bs.delete(l)}},t?r?h(!0):b=l.run():o?o(h.bind(null,!0),!0):l.run(),w.pause=l.pause.bind(l),w.resume=l.resume.bind(l),w.stop=w,w}function Zt(e,t=1/0,n){if(t<=0||!ge(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Se(e))Zt(e.value,t,n);else if(X(e))for(let r=0;r<e.length;r++)Zt(e[r],t,n);else if(Vu(e)||Kn(e))e.forEach(r=>{Zt(r,t,n)});else if(Gu(e)){for(const r in e)Zt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Zt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ns(e,t,n,r){try{return r?e(...r):e()}catch(s){pr(s,t,n)}}function at(e,t,n,r){if(Q(e)){const s=ns(e,t,n,r);return s&&zu(s)&&s.catch(i=>{pr(i,t,n)}),s}if(X(e)){const s=[];for(let i=0;i<e.length;i++)s.push(at(e[i],t,n,r));return s}}function pr(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||he;if(t){let a=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const l=a.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](e,c,u)===!1)return}a=a.parent}if(i){Nt(),ns(i,null,10,[e,c,u]),Mt();return}}Tg(e,n,s,r,o)}function Tg(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Le=[];let ht=-1;const Yn=[];let qt=null,$n=0;const _f=Promise.resolve();let Ws=null;function Br(e){const t=Ws||_f;return e?t.then(this?e.bind(this):e):t}function Cg(e){let t=ht+1,n=Le.length;for(;t<n;){const r=t+n>>>1,s=Le[r],i=Wr(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function ka(e){if(!(e.flags&1)){const t=Wr(e),n=Le[Le.length-1];!n||!(e.flags&2)&&t>=Wr(n)?Le.push(e):Le.splice(Cg(t),0,e),e.flags|=1,vf()}}function vf(){Ws||(Ws=_f.then(bf))}function bo(e){X(e)?Yn.push(...e):qt&&e.id===-1?qt.splice($n+1,0,e):e.flags&1||(Yn.push(e),e.flags|=1),vf()}function Ec(e,t,n=ht+1){for(;n<Le.length;n++){const r=Le[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Le.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Vs(e){if(Yn.length){const t=[...new Set(Yn)].sort((n,r)=>Wr(n)-Wr(r));if(Yn.length=0,qt){qt.push(...t);return}for(qt=t,$n=0;$n<qt.length;$n++){const n=qt[$n];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}qt=null,$n=0}}const Wr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function bf(e){try{for(ht=0;ht<Le.length;ht++){const t=Le[ht];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ns(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ht<Le.length;ht++){const t=Le[ht];t&&(t.flags&=-2)}ht=-1,Le.length=0,Vs(),Ws=null,(Le.length||Yn.length)&&bf()}}let ke=null,wf=null;function zs(e){const t=ke;return ke=e,wf=e&&e.type.__scopeId||null,t}function Ef(e,t=ke,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Mc(-1);const i=zs(t);let o;try{o=e(...s)}finally{zs(i),r._d&&Mc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function pt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Nt(),at(c,n,8,[e.el,a,e,t]),Mt())}}const Ag=Symbol("_vte"),Sf=e=>e.__isTeleport,Yt=Symbol("_leaveCb"),vs=Symbol("_enterCb");function kg(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ra(()=>{e.isMounted=!0}),ss(()=>{e.isUnmounting=!0}),e}const Je=[Function,Array],If={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Je,onEnter:Je,onAfterEnter:Je,onEnterCancelled:Je,onBeforeLeave:Je,onLeave:Je,onAfterLeave:Je,onLeaveCancelled:Je,onBeforeAppear:Je,onAppear:Je,onAfterAppear:Je,onAppearCancelled:Je},Tf=e=>{const t=e.subTree;return t.component?Tf(t.component):t},Pg={name:"BaseTransition",props:If,setup(e,{slots:t}){const n=bi(),r=kg();return()=>{const s=t.default&&kf(t.default(),!0);if(!s||!s.length)return;const i=Cf(s),o=se(e),{mode:a}=o;if(r.isLeaving)return Hi(i);const c=Sc(i);if(!c)return Hi(i);let u=wo(c,o,r,n,f=>u=f);c.type!==we&&ir(c,u);let l=n.subTree&&Sc(n.subTree);if(l&&l.type!==we&&!nt(c,l)&&Tf(n).type!==we){let f=wo(l,o,r,n);if(ir(l,f),a==="out-in"&&c.type!==we)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,l=void 0},Hi(i);a==="in-out"&&c.type!==we?f.delayLeave=(d,p,_)=>{const m=Af(r,l);m[String(l.key)]=l,d[Yt]=()=>{p(),d[Yt]=void 0,delete u.delayedLeave,l=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,l=void 0}}:l=void 0}else l&&(l=void 0);return i}}};function Cf(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==we){t=n;break}}return t}const Rg=Pg;function Af(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function wo(e,t,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:S,onAppear:w,onAfterAppear:b,onAppearCancelled:h}=t,v=String(e.key),E=Af(n,e),T=(L,M)=>{L&&at(L,r,9,M)},k=(L,M)=>{const q=M[1];T(L,M),X(L)?L.every(N=>N.length<=1)&&q():L.length<=1&&q()},B={mode:o,persisted:a,beforeEnter(L){let M=c;if(!n.isMounted)if(i)M=S||c;else return;L[Yt]&&L[Yt](!0);const q=E[v];q&&nt(e,q)&&q.el[Yt]&&q.el[Yt](),T(M,[L])},enter(L){let M=u,q=l,N=f;if(!n.isMounted)if(i)M=w||u,q=b||l,N=h||f;else return;let Y=!1;const ne=L[vs]=ie=>{Y||(Y=!0,ie?T(N,[L]):T(q,[L]),B.delayedLeave&&B.delayedLeave(),L[vs]=void 0)};M?k(M,[L,ne]):ne()},leave(L,M){const q=String(e.key);if(L[vs]&&L[vs](!0),n.isUnmounting)return M();T(d,[L]);let N=!1;const Y=L[Yt]=ne=>{N||(N=!0,M(),ne?T(m,[L]):T(_,[L]),L[Yt]=void 0,E[q]===e&&delete E[q])};E[q]=e,p?k(p,[L,Y]):Y()},clone(L){const M=wo(L,t,n,r,s);return s&&s(M),M}};return B}function Hi(e){if(rs(e))return e=Lt(e),e.children=null,e}function Sc(e){if(!rs(e))return Sf(e.type)&&e.children?Cf(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Q(n.default))return n.default()}}function ir(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ir(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function kf(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Oe?(o.patchFlag&128&&s++,r=r.concat(kf(o.children,t,a))):(t||o.type!==we)&&r.push(a!=null?Lt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function gr(e,t){return Q(e)?Ie({name:e.name},t,{setup:e}):e}function Pa(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Jn(e,t,n,r,s=!1){if(X(e)){e.forEach((_,m)=>Jn(_,t&&(X(t)?t[m]:t),n,r,s));return}if(on(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Jn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Da(r.component):r.el,o=s?null:i,{i:a,r:c}=e,u=t&&t.r,l=a.refs===he?a.refs={}:a.refs,f=a.setupState,d=se(f),p=f===he?()=>!1:_=>ce(d,_);if(u!=null&&u!==c&&(_e(u)?(l[u]=null,p(u)&&(f[u]=null)):Se(u)&&(u.value=null)),Q(c))ns(c,a,12,[o,l]);else{const _=_e(c),m=Se(c);if(_||m){const S=()=>{if(e.f){const w=_?p(c)?f[c]:l[c]:c.value;s?X(w)&&_a(w,i):X(w)?w.includes(i)||w.push(i):_?(l[c]=[i],p(c)&&(f[c]=l[c])):(c.value=[i],e.k&&(l[e.k]=c.value))}else _?(l[c]=o,p(c)&&(f[c]=o)):m&&(c.value=o,e.k&&(l[e.k]=o))};o?(S.id=-1,Ce(S,n)):S()}}}let Ic=!1;const jn=()=>{Ic||(console.error("Hydration completed but contains mismatches."),Ic=!0)},Og=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",xg=e=>e.namespaceURI.includes("MathML"),bs=e=>{if(e.nodeType===1){if(Og(e))return"svg";if(xg(e))return"mathml"}},Wn=e=>e.nodeType===8;function Ng(e){const{mt:t,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:u}}=e,l=(h,v)=>{if(!v.hasChildNodes()){n(null,h,v),Vs(),v._vnode=h;return}f(v.firstChild,h,null,null,null),Vs(),v._vnode=h},f=(h,v,E,T,k,B=!1)=>{B=B||!!v.dynamicChildren;const L=Wn(h)&&h.data==="[",M=()=>m(h,v,E,T,k,L),{type:q,ref:N,shapeFlag:Y,patchFlag:ne}=v;let ie=h.nodeType;v.el=h,ne===-2&&(B=!1,v.dynamicChildren=null);let W=null;switch(q){case kn:ie!==3?v.children===""?(c(v.el=s(""),o(h),h),W=h):W=M():(h.data!==v.children&&(jn(),h.data=v.children),W=i(h));break;case we:b(h)?(W=i(h),w(v.el=h.content.firstChild,h,E)):ie!==8||L?W=M():W=i(h);break;case Rs:if(L&&(h=i(h),ie=h.nodeType),ie===1||ie===3){W=h;const te=!v.children.length;for(let V=0;V<v.staticCount;V++)te&&(v.children+=W.nodeType===1?W.outerHTML:W.data),V===v.staticCount-1&&(v.anchor=W),W=i(W);return L?i(W):W}else M();break;case Oe:L?W=_(h,v,E,T,k,B):W=M();break;default:if(Y&1)(ie!==1||v.type.toLowerCase()!==h.tagName.toLowerCase())&&!b(h)?W=M():W=d(h,v,E,T,k,B);else if(Y&6){v.slotScopeIds=k;const te=o(h);if(L?W=S(h):Wn(h)&&h.data==="teleport start"?W=S(h,h.data,"teleport end"):W=i(h),t(v,te,null,E,T,bs(te),B),on(v)&&!v.type.__asyncResolved){let V;L?(V=be(Oe),V.anchor=W?W.previousSibling:te.lastChild):V=h.nodeType===3?ud(""):be("div"),V.el=h,v.component.subTree=V}}else Y&64?ie!==8?W=M():W=v.type.hydrate(h,v,E,T,k,B,e,p):Y&128&&(W=v.type.hydrate(h,v,E,T,bs(o(h)),k,B,e,f))}return N!=null&&Jn(N,null,T,v),W},d=(h,v,E,T,k,B)=>{B=B||!!v.dynamicChildren;const{type:L,props:M,patchFlag:q,shapeFlag:N,dirs:Y,transition:ne}=v,ie=L==="input"||L==="option";if(ie||q!==-1){Y&&pt(v,null,E,"created");let W=!1;if(b(h)){W=Xf(null,ne)&&E&&E.vnode.props&&E.vnode.props.appear;const V=h.content.firstChild;if(W){const ve=V.getAttribute("class");ve&&(V.$cls=ve),ne.beforeEnter(V)}w(V,h,E),v.el=h=V}if(N&16&&!(M&&(M.innerHTML||M.textContent))){let V=p(h.firstChild,v,h,E,T,k,B);for(;V;){ws(h,1)||jn();const ve=V;V=V.nextSibling,a(ve)}}else if(N&8){let V=v.children;V[0]===`
`&&(h.tagName==="PRE"||h.tagName==="TEXTAREA")&&(V=V.slice(1)),h.textContent!==V&&(ws(h,0)||jn(),h.textContent=v.children)}if(M){if(ie||!B||q&48){const V=h.tagName.includes("-");for(const ve in M)(ie&&(ve.endsWith("value")||ve==="indeterminate")||es(ve)&&!Gn(ve)||ve[0]==="."||V)&&r(h,ve,null,M[ve],void 0,E)}else if(M.onClick)r(h,"onClick",null,M.onClick,void 0,E);else if(q&4&&qn(M.style))for(const V in M.style)M.style[V]}let te;(te=M&&M.onVnodeBeforeMount)&&$e(te,E,v),Y&&pt(v,null,E,"beforeMount"),((te=M&&M.onVnodeMounted)||Y||W)&&sd(()=>{te&&$e(te,E,v),W&&ne.enter(h),Y&&pt(v,null,E,"mounted")},T)}return h.nextSibling},p=(h,v,E,T,k,B,L)=>{L=L||!!v.dynamicChildren;const M=v.children,q=M.length;for(let N=0;N<q;N++){const Y=L?M[N]:M[N]=ze(M[N]),ne=Y.type===kn;h?(ne&&!L&&N+1<q&&ze(M[N+1]).type===kn&&(c(s(h.data.slice(Y.children.length)),E,i(h)),h.data=Y.children),h=f(h,Y,T,k,B,L)):ne&&!Y.children?c(Y.el=s(""),E):(ws(E,1)||jn(),n(null,Y,E,null,T,k,bs(E),B))}return h},_=(h,v,E,T,k,B)=>{const{slotScopeIds:L}=v;L&&(k=k?k.concat(L):L);const M=o(h),q=p(i(h),v,M,E,T,k,B);return q&&Wn(q)&&q.data==="]"?i(v.anchor=q):(jn(),c(v.anchor=u("]"),M,q),q)},m=(h,v,E,T,k,B)=>{if(ws(h.parentElement,1)||jn(),v.el=null,B){const q=S(h);for(;;){const N=i(h);if(N&&N!==q)a(N);else break}}const L=i(h),M=o(h);return a(h),n(null,v,M,L,E,T,bs(M),k),E&&(E.vnode.el=v.el,vi(E,v.el)),L},S=(h,v="[",E="]")=>{let T=0;for(;h;)if(h=i(h),h&&Wn(h)&&(h.data===v&&T++,h.data===E)){if(T===0)return i(h);T--}return h},w=(h,v,E)=>{const T=v.parentNode;T&&T.replaceChild(h,v);let k=E;for(;k;)k.vnode.el===v&&(k.vnode.el=k.subTree.el=h),k=k.parent},b=h=>h.nodeType===1&&h.tagName==="TEMPLATE";return[l,f]}const Tc="data-allow-mismatch",Mg={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function ws(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(Tc);)e=e.parentElement;const n=e&&e.getAttribute(Tc);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return t===0&&r.includes("children")?!0:r.includes(Mg[t])}}pi().requestIdleCallback;pi().cancelIdleCallback;function Lg(e,t){if(Wn(e)&&e.data==="["){let n=1,r=e.nextSibling;for(;r;){if(r.nodeType===1){if(t(r)===!1)break}else if(Wn(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else t(e)}const on=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Ks(e){Q(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=e;let u=null,l,f=0;const d=()=>(f++,u=null,p()),p=()=>{let _;return u||(_=u=t().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),c)return new Promise((S,w)=>{c(m,()=>S(d()),()=>w(m),f+1)});throw m}).then(m=>_!==u&&u?u:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),l=m,m)))};return gr({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(_,m,S){const w=i?()=>{const h=i(()=>{S()},v=>Lg(_,v));h&&(m.bum||(m.bum=[])).push(h),(m.u||(m.u=[])).push(()=>!0)}:S;l?w():p().then(()=>!m.isUnmounted&&w())},get __asyncResolved(){return l},setup(){const _=Ee;if(Pa(_),l)return()=>ji(l,_);const m=h=>{u=null,pr(h,_,13,!r)};if(a&&_.suspense||ar)return p().then(h=>()=>ji(h,_)).catch(h=>(m(h),()=>r?be(r,{error:h}):null));const S=xt(!1),w=xt(),b=xt(!!s);return s&&setTimeout(()=>{b.value=!1},s),o!=null&&setTimeout(()=>{if(!S.value&&!w.value){const h=new Error(`Async component timed out after ${o}ms.`);m(h),w.value=h}},o),p().then(()=>{S.value=!0,_.parent&&rs(_.parent.vnode)&&_.parent.update()}).catch(h=>{m(h),w.value=h}),()=>{if(S.value&&l)return ji(l,_);if(w.value&&r)return be(r,{error:w.value});if(n&&!b.value)return be(n)}}})}function ji(e,t){const{ref:n,props:r,children:s,ce:i}=t.vnode,o=be(e,r,s);return o.ref=n,o.ce=i,delete t.vnode.ce,o}const rs=e=>e.type.__isKeepAlive,Dg={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=bi(),r=n.ctx;if(!r.renderer)return()=>{const b=t.default&&t.default();return b&&b.length===1?b[0]:b};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:u,um:l,o:{createElement:f}}}=r,d=f("div");r.activate=(b,h,v,E,T)=>{const k=b.component;u(b,h,v,0,a),c(k.vnode,b,h,v,k,a,E,b.slotScopeIds,T),Ce(()=>{k.isDeactivated=!1,k.a&&Cr(k.a);const B=b.props&&b.props.onVnodeMounted;B&&$e(B,k.parent,b)},a)},r.deactivate=b=>{const h=b.component;qs(h.m),qs(h.a),u(b,d,null,1,a),Ce(()=>{h.da&&Cr(h.da);const v=b.props&&b.props.onVnodeUnmounted;v&&$e(v,h.parent,b),h.isDeactivated=!0},a)};function p(b){$i(b),l(b,n,a,!0)}function _(b){s.forEach((h,v)=>{const E=Po(h.type);E&&!b(E)&&m(v)})}function m(b){const h=s.get(b);h&&(!o||!nt(h,o))?p(h):o&&$i(o),s.delete(b),i.delete(b)}An(()=>[e.include,e.exclude],([b,h])=>{b&&_(v=>Sr(b,v)),h&&_(v=>!Sr(h,v))},{flush:"post",deep:!0});let S=null;const w=()=>{S!=null&&(Ys(n.subTree.type)?Ce(()=>{s.set(S,Es(n.subTree))},n.subTree.suspense):s.set(S,Es(n.subTree)))};return Ra(w),xf(w),ss(()=>{s.forEach(b=>{const{subTree:h,suspense:v}=n,E=Es(h);if(b.type===E.type&&b.key===E.key){$i(E);const T=E.component.da;T&&Ce(T,v);return}p(b)})}),()=>{if(S=null,!t.default)return o=null;const b=t.default(),h=b[0];if(b.length>1)return o=null,b;if(!On(h)||!(h.shapeFlag&4)&&!(h.shapeFlag&128))return o=null,h;let v=Es(h);if(v.type===we)return o=null,v;const E=v.type,T=Po(on(v)?v.type.__asyncResolved||{}:E),{include:k,exclude:B,max:L}=e;if(k&&(!T||!Sr(k,T))||B&&T&&Sr(B,T))return v.shapeFlag&=-257,o=v,h;const M=v.key==null?E:v.key,q=s.get(M);return v.el&&(v=Lt(v),h.shapeFlag&128&&(h.ssContent=v)),S=M,q?(v.el=q.el,v.component=q.component,v.transition&&ir(v,v.transition),v.shapeFlag|=512,i.delete(M),i.add(M)):(i.add(M),L&&i.size>parseInt(L,10)&&m(i.values().next().value)),v.shapeFlag|=256,o=v,Ys(h.type)?h:v}}},Fg=Dg;function Sr(e,t){return X(e)?e.some(n=>Sr(n,t)):_e(e)?e.split(",").includes(t):Mp(e)?(e.lastIndex=0,e.test(t)):!1}function Pf(e,t){Of(e,"a",t)}function Rf(e,t){Of(e,"da",t)}function Of(e,t,n=Ee){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(yi(t,r,n),n){let s=n.parent;for(;s&&s.parent;)rs(s.parent.vnode)&&Ug(r,t,n,s),s=s.parent}}function Ug(e,t,n,r){const s=yi(t,e,r,!0);Nf(()=>{_a(r[t],s)},n)}function $i(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Es(e){return e.shapeFlag&128?e.ssContent:e}function yi(e,t,n=Ee,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Nt();const a=is(n),c=at(t,n,e,o);return a(),Mt(),c});return r?s.unshift(i):s.push(i),i}}const $t=e=>(t,n=Ee)=>{(!ar||e==="sp")&&yi(e,(...r)=>t(...r),n)},Hg=$t("bm"),Ra=$t("m"),jg=$t("bu"),xf=$t("u"),ss=$t("bum"),Nf=$t("um"),$g=$t("sp"),Bg=$t("rtg"),Wg=$t("rtc");function Mf(e,t=Ee){yi("ec",e,t)}const Lf="components";function kT(e,t){return Ff(Lf,e,!0,t)||e}const Df=Symbol.for("v-ndc");function Vg(e){return _e(e)?Ff(Lf,e,!1)||e:e||Df}function Ff(e,t,n=!0,r=!1){const s=ke||Ee;if(s){const i=s.type;{const a=Po(i,!1);if(a&&(a===t||a===Ze(t)||a===hi(Ze(t))))return i}const o=Cc(s[e]||i[e],t)||Cc(s.appContext[e],t);return!o&&r?i:o}}function Cc(e,t){return e&&(e[t]||e[Ze(t)]||e[hi(Ze(t))])}function PT(e,t,n={},r,s){if(ke.ce||ke.parent&&on(ke.parent)&&ke.parent.ce)return Qe(),gt(Oe,null,[be("slot",n,r)],64);let i=e[t];i&&i._c&&(i._d=!1),Qe();const o=i&&Uf(i(n)),a=n.key||o&&o.key,c=gt(Oe,{key:(a&&!jt(a)?a:`_${t}`)+(!o&&r?"_fb":"")},o||[],o&&e._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Uf(e){return e.some(t=>On(t)?!(t.type===we||t.type===Oe&&!Uf(t.children)):!0)?e:null}const Eo=e=>e?fd(e)?Da(e):Eo(e.parent):null,Pr=Ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Eo(e.parent),$root:e=>Eo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>jf(e),$forceUpdate:e=>e.f||(e.f=()=>{ka(e.update)}),$nextTick:e=>e.n||(e.n=Br.bind(e.proxy)),$watch:e=>fm.bind(e)}),Bi=(e,t)=>e!==he&&!e.__isScriptSetup&&ce(e,t),zg={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let u;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Bi(r,t))return o[t]=1,r[t];if(s!==he&&ce(s,t))return o[t]=2,s[t];if((u=e.propsOptions[0])&&ce(u,t))return o[t]=3,i[t];if(n!==he&&ce(n,t))return o[t]=4,n[t];So&&(o[t]=0)}}const l=Pr[t];let f,d;if(l)return t==="$attrs"&&Re(e.attrs,"get",""),l(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==he&&ce(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,ce(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Bi(s,t)?(s[t]=n,!0):r!==he&&ce(r,t)?(r[t]=n,!0):ce(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==he&&ce(e,o)||Bi(t,o)||(a=i[0])&&ce(a,o)||ce(r,o)||ce(Pr,o)||ce(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ce(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ac(e){return X(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let So=!0;function Kg(e){const t=jf(e),n=e.proxy,r=e.ctx;So=!1,t.beforeCreate&&kc(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:m,deactivated:S,beforeDestroy:w,beforeUnmount:b,destroyed:h,unmounted:v,render:E,renderTracked:T,renderTriggered:k,errorCaptured:B,serverPrefetch:L,expose:M,inheritAttrs:q,components:N,directives:Y,filters:ne}=t;if(u&&Gg(u,r,null),o)for(const te in o){const V=o[te];Q(V)&&(r[te]=V.bind(n))}if(s){const te=s.call(n,n);ge(te)&&(e.data=hn(te))}if(So=!0,i)for(const te in i){const V=i[te],ve=Q(V)?V.bind(n,n):Q(V.get)?V.get.bind(n,n):vt,Wt=!Q(V)&&Q(V.set)?V.set.bind(n):vt,ut=Ae({get:ve,set:Wt});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>ut.value,set:Fe=>ut.value=Fe})}if(a)for(const te in a)Hf(a[te],r,n,te);if(c){const te=Q(c)?c.call(n):c;Reflect.ownKeys(te).forEach(V=>{Xn(V,te[V])})}l&&kc(l,e,"c");function W(te,V){X(V)?V.forEach(ve=>te(ve.bind(n))):V&&te(V.bind(n))}if(W(Hg,f),W(Ra,d),W(jg,p),W(xf,_),W(Pf,m),W(Rf,S),W(Mf,B),W(Wg,T),W(Bg,k),W(ss,b),W(Nf,v),W($g,L),X(M))if(M.length){const te=e.exposed||(e.exposed={});M.forEach(V=>{Object.defineProperty(te,V,{get:()=>n[V],set:ve=>n[V]=ve})})}else e.exposed||(e.exposed={});E&&e.render===vt&&(e.render=E),q!=null&&(e.inheritAttrs=q),N&&(e.components=N),Y&&(e.directives=Y),L&&Pa(e)}function Gg(e,t,n=vt){X(e)&&(e=Io(e));for(const r in e){const s=e[r];let i;ge(s)?"default"in s?i=Ge(s.from||r,s.default,!0):i=Ge(s.from||r):i=Ge(s),Se(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function kc(e,t,n){at(X(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Hf(e,t,n,r){let s=r.includes(".")?ed(n,r):()=>n[r];if(_e(e)){const i=t[e];Q(i)&&An(s,i)}else if(Q(e))An(s,e.bind(n));else if(ge(e))if(X(e))e.forEach(i=>Hf(i,t,n,r));else{const i=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(i)&&An(s,i,e)}}function jf(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(u=>Gs(c,u,o,!0)),Gs(c,t,o)),ge(t)&&i.set(t,c),c}function Gs(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Gs(e,i,n,!0),s&&s.forEach(o=>Gs(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=qg[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const qg={data:Pc,props:Rc,emits:Rc,methods:Ir,computed:Ir,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:Ir,directives:Ir,watch:Jg,provide:Pc,inject:Yg};function Pc(e,t){return t?e?function(){return Ie(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function Yg(e,t){return Ir(Io(e),Io(t))}function Io(e){if(X(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ne(e,t){return e?[...new Set([].concat(e,t))]:t}function Ir(e,t){return e?Ie(Object.create(null),e,t):t}function Rc(e,t){return e?X(e)&&X(t)?[...new Set([...e,...t])]:Ie(Object.create(null),Ac(e),Ac(t??{})):t}function Jg(e,t){if(!e)return t;if(!t)return e;const n=Ie(Object.create(null),e);for(const r in t)n[r]=Ne(e[r],t[r]);return n}function $f(){return{app:null,config:{isNativeTag:xp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xg=0;function Qg(e,t){return function(r,s=null){Q(r)||(r=Ie({},r)),s!=null&&!ge(s)&&(s=null);const i=$f(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:Xg++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Lm,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&Q(l.install)?(o.add(l),l.install(u,...f)):Q(l)&&(o.add(l),l(u,...f))),u},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),u},component(l,f){return f?(i.components[l]=f,u):i.components[l]},directive(l,f){return f?(i.directives[l]=f,u):i.directives[l]},mount(l,f,d){if(!c){const p=u._ceVNode||be(r,s);return p.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),f&&t?t(p,l):e(p,l,d),c=!0,u._container=l,l.__vue_app__=u,Da(p.component)}},onUnmount(l){a.push(l)},unmount(){c&&(at(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(l,f){return i.provides[l]=f,u},runWithContext(l){const f=Cn;Cn=u;try{return l()}finally{Cn=f}}};return u}}let Cn=null;function Xn(e,t){if(Ee){let n=Ee.provides;const r=Ee.parent&&Ee.parent.provides;r===n&&(n=Ee.provides=Object.create(r)),n[e]=t}}function Ge(e,t,n=!1){const r=Ee||ke;if(r||Cn){let s=Cn?Cn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Q(t)?t.call(r&&r.proxy):t}}function Oa(){return!!(Ee||ke||Cn)}const Bf={},Wf=()=>Object.create(Bf),Vf=e=>Object.getPrototypeOf(e)===Bf;function Zg(e,t,n,r=!1){const s={},i=Wf();e.propsDefaults=Object.create(null),zf(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Pt(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function em(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=se(s),[c]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=e.vnode.dynamicProps;for(let f=0;f<l.length;f++){let d=l[f];if(_i(e.emitsOptions,d))continue;const p=t[d];if(c)if(ce(i,d))p!==i[d]&&(i[d]=p,u=!0);else{const _=Ze(d);s[_]=To(c,a,_,p,e,!1)}else p!==i[d]&&(i[d]=p,u=!0)}}}else{zf(e,t,s,i)&&(u=!0);let l;for(const f in a)(!t||!ce(t,f)&&((l=Ln(f))===f||!ce(t,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(s[f]=To(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!ce(t,f))&&(delete i[f],u=!0)}u&&Ct(e.attrs,"set","")}function zf(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Gn(c))continue;const u=t[c];let l;s&&ce(s,l=Ze(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:_i(e.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=se(n),u=a||he;for(let l=0;l<i.length;l++){const f=i[l];n[f]=To(s,c,f,u[f],e,!ce(u,f))}}return o}function To(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=ce(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Q(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const l=is(s);r=u[n]=c.call(null,t),l()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ln(n))&&(r=!0))}return r}const tm=new WeakMap;function Kf(e,t,n=!1){const r=n?tm:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!Q(e)){const l=f=>{c=!0;const[d,p]=Kf(f,t,!0);Ie(o,d),p&&a.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!i&&!c)return ge(e)&&r.set(e,zn),zn;if(X(i))for(let l=0;l<i.length;l++){const f=Ze(i[l]);Oc(f)&&(o[f]=he)}else if(i)for(const l in i){const f=Ze(l);if(Oc(f)){const d=i[l],p=o[f]=X(d)||Q(d)?{type:d}:Ie({},d),_=p.type;let m=!1,S=!0;if(X(_))for(let w=0;w<_.length;++w){const b=_[w],h=Q(b)&&b.name;if(h==="Boolean"){m=!0;break}else h==="String"&&(S=!1)}else m=Q(_)&&_.name==="Boolean";p[0]=m,p[1]=S,(m||ce(p,"default"))&&a.push(f)}}const u=[o,a];return ge(e)&&r.set(e,u),u}function Oc(e){return e[0]!=="$"&&!Gn(e)}const xa=e=>e[0]==="_"||e==="$stable",Na=e=>X(e)?e.map(ze):[ze(e)],nm=(e,t,n)=>{if(t._n)return t;const r=Ef((...s)=>Na(t(...s)),n);return r._c=!1,r},Gf=(e,t,n)=>{const r=e._ctx;for(const s in e){if(xa(s))continue;const i=e[s];if(Q(i))t[s]=nm(s,i,r);else if(i!=null){const o=Na(i);t[s]=()=>o}}},qf=(e,t)=>{const n=Na(t);e.slots.default=()=>n},Yf=(e,t,n)=>{for(const r in t)(n||!xa(r))&&(e[r]=t[r])},rm=(e,t,n)=>{const r=e.slots=Wf();if(e.vnode.shapeFlag&32){const s=t.__;s&&go(r,"__",s,!0);const i=t._;i?(Yf(r,t,n),n&&go(r,"_",i,!0)):Gf(t,r)}else t&&qf(e,t)},sm=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=he;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:Yf(s,t,n):(i=!t.$stable,Gf(t,s)),o=t}else t&&(qf(e,t),o={default:1});if(i)for(const a in s)!xa(a)&&o[a]==null&&delete s[a]},Ce=sd;function im(e){return Jf(e)}function om(e){return Jf(e,Ng)}function Jf(e,t){const n=pi();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:d,setScopeId:p=vt,insertStaticContent:_}=e,m=(g,y,I,P=null,C=null,R=null,U=void 0,F=null,D=!!y.dynamicChildren)=>{if(g===y)return;g&&!nt(g,y)&&(P=A(g),Fe(g,C,R,!0),g=null),y.patchFlag===-2&&(D=!1,y.dynamicChildren=null);const{type:x,ref:J,shapeFlag:j}=y;switch(x){case kn:S(g,y,I,P);break;case we:w(g,y,I,P);break;case Rs:g==null&&b(y,I,P,U);break;case Oe:N(g,y,I,P,C,R,U,F,D);break;default:j&1?E(g,y,I,P,C,R,U,F,D):j&6?Y(g,y,I,P,C,R,U,F,D):(j&64||j&128)&&x.process(g,y,I,P,C,R,U,F,D,z)}J!=null&&C?Jn(J,g&&g.ref,R,y||g,!y):J==null&&g&&g.ref!=null&&Jn(g.ref,null,R,g,!0)},S=(g,y,I,P)=>{if(g==null)r(y.el=a(y.children),I,P);else{const C=y.el=g.el;y.children!==g.children&&u(C,y.children)}},w=(g,y,I,P)=>{g==null?r(y.el=c(y.children||""),I,P):y.el=g.el},b=(g,y,I,P)=>{[g.el,g.anchor]=_(g.children,y,I,P,g.el,g.anchor)},h=({el:g,anchor:y},I,P)=>{let C;for(;g&&g!==y;)C=d(g),r(g,I,P),g=C;r(y,I,P)},v=({el:g,anchor:y})=>{let I;for(;g&&g!==y;)I=d(g),s(g),g=I;s(y)},E=(g,y,I,P,C,R,U,F,D)=>{y.type==="svg"?U="svg":y.type==="math"&&(U="mathml"),g==null?T(y,I,P,C,R,U,F,D):L(g,y,C,R,U,F,D)},T=(g,y,I,P,C,R,U,F)=>{let D,x;const{props:J,shapeFlag:j,transition:G,dirs:ee}=g;if(D=g.el=o(g.type,R,J&&J.is,J),j&8?l(D,g.children):j&16&&B(g.children,D,null,P,C,Wi(g,R),U,F),ee&&pt(g,null,P,"created"),k(D,g,g.scopeId,U,P),J){for(const fe in J)fe!=="value"&&!Gn(fe)&&i(D,fe,null,J[fe],R,P);"value"in J&&i(D,"value",null,J.value,R),(x=J.onVnodeBeforeMount)&&$e(x,P,g)}ee&&pt(g,null,P,"beforeMount");const re=Xf(C,G);re&&G.beforeEnter(D),r(D,y,I),((x=J&&J.onVnodeMounted)||re||ee)&&Ce(()=>{x&&$e(x,P,g),re&&G.enter(D),ee&&pt(g,null,P,"mounted")},C)},k=(g,y,I,P,C)=>{if(I&&p(g,I),P)for(let R=0;R<P.length;R++)p(g,P[R]);if(C){let R=C.subTree;if(y===R||Ys(R.type)&&(R.ssContent===y||R.ssFallback===y)){const U=C.vnode;k(g,U,U.scopeId,U.slotScopeIds,C.parent)}}},B=(g,y,I,P,C,R,U,F,D=0)=>{for(let x=D;x<g.length;x++){const J=g[x]=F?Jt(g[x]):ze(g[x]);m(null,J,y,I,P,C,R,U,F)}},L=(g,y,I,P,C,R,U)=>{const F=y.el=g.el;let{patchFlag:D,dynamicChildren:x,dirs:J}=y;D|=g.patchFlag&16;const j=g.props||he,G=y.props||he;let ee;if(I&&mn(I,!1),(ee=G.onVnodeBeforeUpdate)&&$e(ee,I,y,g),J&&pt(y,g,I,"beforeUpdate"),I&&mn(I,!0),(j.innerHTML&&G.innerHTML==null||j.textContent&&G.textContent==null)&&l(F,""),x?M(g.dynamicChildren,x,F,I,P,Wi(y,C),R):U||V(g,y,F,null,I,P,Wi(y,C),R,!1),D>0){if(D&16)q(F,j,G,I,C);else if(D&2&&j.class!==G.class&&i(F,"class",null,G.class,C),D&4&&i(F,"style",j.style,G.style,C),D&8){const re=y.dynamicProps;for(let fe=0;fe<re.length;fe++){const le=re[fe],Ue=j[le],Pe=G[le];(Pe!==Ue||le==="value")&&i(F,le,Ue,Pe,C,I)}}D&1&&g.children!==y.children&&l(F,y.children)}else!U&&x==null&&q(F,j,G,I,C);((ee=G.onVnodeUpdated)||J)&&Ce(()=>{ee&&$e(ee,I,y,g),J&&pt(y,g,I,"updated")},P)},M=(g,y,I,P,C,R,U)=>{for(let F=0;F<y.length;F++){const D=g[F],x=y[F],J=D.el&&(D.type===Oe||!nt(D,x)||D.shapeFlag&198)?f(D.el):I;m(D,x,J,null,P,C,R,U,!0)}},q=(g,y,I,P,C)=>{if(y!==I){if(y!==he)for(const R in y)!Gn(R)&&!(R in I)&&i(g,R,y[R],null,C,P);for(const R in I){if(Gn(R))continue;const U=I[R],F=y[R];U!==F&&R!=="value"&&i(g,R,F,U,C,P)}"value"in I&&i(g,"value",y.value,I.value,C)}},N=(g,y,I,P,C,R,U,F,D)=>{const x=y.el=g?g.el:a(""),J=y.anchor=g?g.anchor:a("");let{patchFlag:j,dynamicChildren:G,slotScopeIds:ee}=y;ee&&(F=F?F.concat(ee):ee),g==null?(r(x,I,P),r(J,I,P),B(y.children||[],I,J,C,R,U,F,D)):j>0&&j&64&&G&&g.dynamicChildren?(M(g.dynamicChildren,G,I,C,R,U,F),(y.key!=null||C&&y===C.subTree)&&Qf(g,y,!0)):V(g,y,I,J,C,R,U,F,D)},Y=(g,y,I,P,C,R,U,F,D)=>{y.slotScopeIds=F,g==null?y.shapeFlag&512?C.ctx.activate(y,I,P,U,D):ne(y,I,P,C,R,U,D):ie(g,y,D)},ne=(g,y,I,P,C,R,U)=>{const F=g.component=Pm(g,P,C);if(rs(g)&&(F.ctx.renderer=z),Rm(F,!1,U),F.asyncDep){if(C&&C.registerDep(F,W,U),!g.el){const D=F.subTree=be(we);w(null,D,y,I)}}else W(F,g,y,I,C,R,U)},ie=(g,y,I)=>{const P=y.component=g.component;if(ym(g,y,I))if(P.asyncDep&&!P.asyncResolved){te(P,y,I);return}else P.next=y,P.update();else y.el=g.el,P.vnode=y},W=(g,y,I,P,C,R,U)=>{const F=()=>{if(g.isMounted){let{next:j,bu:G,u:ee,parent:re,vnode:fe}=g;{const We=Zf(g);if(We){j&&(j.el=fe.el,te(g,j,U)),We.asyncDep.then(()=>{g.isUnmounted||F()});return}}let le=j,Ue;mn(g,!1),j?(j.el=fe.el,te(g,j,U)):j=fe,G&&Cr(G),(Ue=j.props&&j.props.onVnodeBeforeUpdate)&&$e(Ue,re,j,fe),mn(g,!0);const Pe=Vi(g),tt=g.subTree;g.subTree=Pe,m(tt,Pe,f(tt.el),A(tt),g,C,R),j.el=Pe.el,le===null&&vi(g,Pe.el),ee&&Ce(ee,C),(Ue=j.props&&j.props.onVnodeUpdated)&&Ce(()=>$e(Ue,re,j,fe),C)}else{let j;const{el:G,props:ee}=y,{bm:re,m:fe,parent:le,root:Ue,type:Pe}=g,tt=on(y);if(mn(g,!1),re&&Cr(re),!tt&&(j=ee&&ee.onVnodeBeforeMount)&&$e(j,le,y),mn(g,!0),G&&me){const We=()=>{g.subTree=Vi(g),me(G,g.subTree,g,C,null)};tt&&Pe.__asyncHydrate?Pe.__asyncHydrate(G,g,We):We()}else{Ue.ce&&Ue.ce._def.shadowRoot!==!1&&Ue.ce._injectChildStyle(Pe);const We=g.subTree=Vi(g);m(null,We,I,P,g,C,R),y.el=We.el}if(fe&&Ce(fe,C),!tt&&(j=ee&&ee.onVnodeMounted)){const We=y;Ce(()=>$e(j,le,We),C)}(y.shapeFlag&256||le&&on(le.vnode)&&le.vnode.shapeFlag&256)&&g.a&&Ce(g.a,C),g.isMounted=!0,y=I=P=null}};g.scope.on();const D=g.effect=new ef(F);g.scope.off();const x=g.update=D.run.bind(D),J=g.job=D.runIfDirty.bind(D);J.i=g,J.id=g.uid,D.scheduler=()=>ka(J),mn(g,!0),x()},te=(g,y,I)=>{y.component=g;const P=g.vnode.props;g.vnode=y,g.next=null,em(g,y.props,P,I),sm(g,y.children,I),Nt(),Ec(g),Mt()},V=(g,y,I,P,C,R,U,F,D=!1)=>{const x=g&&g.children,J=g?g.shapeFlag:0,j=y.children,{patchFlag:G,shapeFlag:ee}=y;if(G>0){if(G&128){Wt(x,j,I,P,C,R,U,F,D);return}else if(G&256){ve(x,j,I,P,C,R,U,F,D);return}}ee&8?(J&16&&Ye(x,C,R),j!==x&&l(I,j)):J&16?ee&16?Wt(x,j,I,P,C,R,U,F,D):Ye(x,C,R,!0):(J&8&&l(I,""),ee&16&&B(j,I,P,C,R,U,F,D))},ve=(g,y,I,P,C,R,U,F,D)=>{g=g||zn,y=y||zn;const x=g.length,J=y.length,j=Math.min(x,J);let G;for(G=0;G<j;G++){const ee=y[G]=D?Jt(y[G]):ze(y[G]);m(g[G],ee,I,null,C,R,U,F,D)}x>J?Ye(g,C,R,!0,!1,j):B(y,I,P,C,R,U,F,D,j)},Wt=(g,y,I,P,C,R,U,F,D)=>{let x=0;const J=y.length;let j=g.length-1,G=J-1;for(;x<=j&&x<=G;){const ee=g[x],re=y[x]=D?Jt(y[x]):ze(y[x]);if(nt(ee,re))m(ee,re,I,null,C,R,U,F,D);else break;x++}for(;x<=j&&x<=G;){const ee=g[j],re=y[G]=D?Jt(y[G]):ze(y[G]);if(nt(ee,re))m(ee,re,I,null,C,R,U,F,D);else break;j--,G--}if(x>j){if(x<=G){const ee=G+1,re=ee<J?y[ee].el:P;for(;x<=G;)m(null,y[x]=D?Jt(y[x]):ze(y[x]),I,re,C,R,U,F,D),x++}}else if(x>G)for(;x<=j;)Fe(g[x],C,R,!0),x++;else{const ee=x,re=x,fe=new Map;for(x=re;x<=G;x++){const Ve=y[x]=D?Jt(y[x]):ze(y[x]);Ve.key!=null&&fe.set(Ve.key,x)}let le,Ue=0;const Pe=G-re+1;let tt=!1,We=0;const _r=new Array(Pe);for(x=0;x<Pe;x++)_r[x]=0;for(x=ee;x<=j;x++){const Ve=g[x];if(Ue>=Pe){Fe(Ve,C,R,!0);continue}let ft;if(Ve.key!=null)ft=fe.get(Ve.key);else for(le=re;le<=G;le++)if(_r[le-re]===0&&nt(Ve,y[le])){ft=le;break}ft===void 0?Fe(Ve,C,R,!0):(_r[ft-re]=x+1,ft>=We?We=ft:tt=!0,m(Ve,y[ft],I,null,C,R,U,F,D),Ue++)}const yc=tt?am(_r):zn;for(le=yc.length-1,x=Pe-1;x>=0;x--){const Ve=re+x,ft=y[Ve],_c=Ve+1<J?y[Ve+1].el:P;_r[x]===0?m(null,ft,I,_c,C,R,U,F,D):tt&&(le<0||x!==yc[le]?ut(ft,I,_c,2):le--)}}},ut=(g,y,I,P,C=null)=>{const{el:R,type:U,transition:F,children:D,shapeFlag:x}=g;if(x&6){ut(g.component.subTree,y,I,P);return}if(x&128){g.suspense.move(y,I,P);return}if(x&64){U.move(g,y,I,z);return}if(U===Oe){r(R,y,I);for(let j=0;j<D.length;j++)ut(D[j],y,I,P);r(g.anchor,y,I);return}if(U===Rs){h(g,y,I);return}if(P!==2&&x&1&&F)if(P===0)F.beforeEnter(R),r(R,y,I),Ce(()=>F.enter(R),C);else{const{leave:j,delayLeave:G,afterLeave:ee}=F,re=()=>{g.ctx.isUnmounted?s(R):r(R,y,I)},fe=()=>{j(R,()=>{re(),ee&&ee()})};G?G(R,re,fe):fe()}else r(R,y,I)},Fe=(g,y,I,P=!1,C=!1)=>{const{type:R,props:U,ref:F,children:D,dynamicChildren:x,shapeFlag:J,patchFlag:j,dirs:G,cacheIndex:ee}=g;if(j===-2&&(C=!1),F!=null&&(Nt(),Jn(F,null,I,g,!0),Mt()),ee!=null&&(y.renderCache[ee]=void 0),J&256){y.ctx.deactivate(g);return}const re=J&1&&G,fe=!on(g);let le;if(fe&&(le=U&&U.onVnodeBeforeUnmount)&&$e(le,y,g),J&6)gs(g.component,I,P);else{if(J&128){g.suspense.unmount(I,P);return}re&&pt(g,null,y,"beforeUnmount"),J&64?g.type.remove(g,y,I,z,P):x&&!x.hasOnce&&(R!==Oe||j>0&&j&64)?Ye(x,y,I,!1,!0):(R===Oe&&j&384||!C&&J&16)&&Ye(D,y,I),P&&Fn(g)}(fe&&(le=U&&U.onVnodeUnmounted)||re)&&Ce(()=>{le&&$e(le,y,g),re&&pt(g,null,y,"unmounted")},I)},Fn=g=>{const{type:y,el:I,anchor:P,transition:C}=g;if(y===Oe){Un(I,P);return}if(y===Rs){v(g);return}const R=()=>{s(I),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(g.shapeFlag&1&&C&&!C.persisted){const{leave:U,delayLeave:F}=C,D=()=>U(I,R);F?F(g.el,R,D):D()}else R()},Un=(g,y)=>{let I;for(;g!==y;)I=d(g),s(g),g=I;s(y)},gs=(g,y,I)=>{const{bum:P,scope:C,job:R,subTree:U,um:F,m:D,a:x,parent:J,slots:{__:j}}=g;qs(D),qs(x),P&&Cr(P),J&&X(j)&&j.forEach(G=>{J.renderCache[G]=void 0}),C.stop(),R&&(R.flags|=8,Fe(U,g,y,I)),F&&Ce(F,y),Ce(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Ye=(g,y,I,P=!1,C=!1,R=0)=>{for(let U=R;U<g.length;U++)Fe(g[U],y,I,P,C)},A=g=>{if(g.shapeFlag&6)return A(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const y=d(g.anchor||g.el),I=y&&y[Ag];return I?d(I):y};let $=!1;const H=(g,y,I)=>{g==null?y._vnode&&Fe(y._vnode,null,null,!0):m(y._vnode||null,g,y,null,null,null,I),y._vnode=g,$||($=!0,Ec(),Vs(),$=!1)},z={p:m,um:Fe,m:ut,r:Fn,mt:ne,mc:B,pc:V,pbc:M,n:A,o:e};let oe,me;return t&&([oe,me]=t(z)),{render:H,hydrate:oe,createApp:Qg(H,oe)}}function Wi({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function mn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Xf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Qf(e,t,n=!1){const r=e.children,s=t.children;if(X(r)&&X(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Jt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Qf(o,a)),a.type===kn&&(a.el=o.el),a.type===we&&!a.el&&(a.el=o.el)}}function am(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<u?i=a+1:o=a;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Zf(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Zf(t)}function qs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const cm=Symbol.for("v-scx"),lm=()=>Ge(cm);function um(e,t){return Ma(e,null,t)}function An(e,t,n){return Ma(e,t,n)}function Ma(e,t,n=he){const{immediate:r,deep:s,flush:i,once:o}=n,a=Ie({},n),c=t&&r||!t&&i!=="post";let u;if(ar){if(i==="sync"){const p=lm();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!c){const p=()=>{};return p.stop=vt,p.resume=vt,p.pause=vt,p}}const l=Ee;a.call=(p,_,m)=>at(p,l,_,m);let f=!1;i==="post"?a.scheduler=p=>{Ce(p,l&&l.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():ka(p)}),a.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,l&&(p.id=l.uid,p.i=l))};const d=Ig(e,t,a);return ar&&(u?u.push(d):c&&d()),d}function fm(e,t,n){const r=this.proxy,s=_e(e)?e.includes(".")?ed(r,e):()=>r[e]:e.bind(r,r);let i;Q(t)?i=t:(i=t.handler,n=t);const o=is(this),a=Ma(s,i.bind(r),n);return o(),a}function ed(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const dm=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ze(t)}Modifiers`]||e[`${Ln(t)}Modifiers`];function hm(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||he;let s=n;const i=t.startsWith("update:"),o=i&&dm(r,t.slice(7));o&&(o.trim&&(s=n.map(l=>_e(l)?l.trim():l)),o.number&&(s=n.map(Up)));let a,c=r[a=Mi(t)]||r[a=Mi(Ze(t))];!c&&i&&(c=r[a=Mi(Ln(t))]),c&&at(c,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,at(u,e,6,s)}}function td(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!Q(e)){const c=u=>{const l=td(u,t,!0);l&&(a=!0,Ie(o,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(ge(e)&&r.set(e,null),null):(X(i)?i.forEach(c=>o[c]=null):Ie(o,i),ge(e)&&r.set(e,o),o)}function _i(e,t){return!e||!es(t)?!1:(t=t.slice(2).replace(/Once$/,""),ce(e,t[0].toLowerCase()+t.slice(1))||ce(e,Ln(t))||ce(e,t))}function Vi(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:l,props:f,data:d,setupState:p,ctx:_,inheritAttrs:m}=e,S=zs(e);let w,b;try{if(n.shapeFlag&4){const v=s||r,E=v;w=ze(u.call(E,v,l,f,p,d,_)),b=a}else{const v=t;w=ze(v.length>1?v(f,{attrs:a,slots:o,emit:c}):v(f,null)),b=t.props?a:gm(a)}}catch(v){Rr.length=0,pr(v,e,1),w=be(we)}let h=w;if(b&&m!==!1){const v=Object.keys(b),{shapeFlag:E}=h;v.length&&E&7&&(i&&v.some(ya)&&(b=mm(b,i)),h=Lt(h,b,!1,!0))}return n.dirs&&(h=Lt(h,null,!1,!0),h.dirs=h.dirs?h.dirs.concat(n.dirs):n.dirs),n.transition&&ir(h,n.transition),w=h,zs(S),w}function pm(e,t=!0){let n;for(let r=0;r<e.length;r++){const s=e[r];if(On(s)){if(s.type!==we||s.children==="v-if"){if(n)return;n=s}}else return}return n}const gm=e=>{let t;for(const n in e)(n==="class"||n==="style"||es(n))&&((t||(t={}))[n]=e[n]);return t},mm=(e,t)=>{const n={};for(const r in e)(!ya(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ym(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?xc(r,o,u):!!o;if(c&8){const l=t.dynamicProps;for(let f=0;f<l.length;f++){const d=l[f];if(o[d]!==r[d]&&!_i(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?xc(r,o,u):!0:!!o;return!1}function xc(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!_i(n,i))return!0}return!1}function vi({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ys=e=>e.__isSuspense;let Co=0;const _m={name:"Suspense",__isSuspense:!0,process(e,t,n,r,s,i,o,a,c,u){if(e==null)vm(t,n,r,s,i,o,a,c,u);else{if(i&&i.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}bm(e,t,n,r,s,o,a,c,u)}},hydrate:wm,normalize:Em},nd=_m;function Vr(e,t){const n=e.props&&e.props[t];Q(n)&&n()}function vm(e,t,n,r,s,i,o,a,c){const{p:u,o:{createElement:l}}=c,f=l("div"),d=e.suspense=rd(e,s,r,t,f,n,i,o,a,c);u(null,d.pendingBranch=e.ssContent,f,null,r,d,i,o),d.deps>0?(Vr(e,"onPending"),Vr(e,"onFallback"),u(null,e.ssFallback,t,n,r,null,i,o),Qn(d,e.ssFallback)):d.resolve(!1,!0)}function bm(e,t,n,r,s,i,o,a,{p:c,um:u,o:{createElement:l}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const d=t.ssContent,p=t.ssFallback,{activeBranch:_,pendingBranch:m,isInFallback:S,isHydrating:w}=f;if(m)f.pendingBranch=d,nt(d,m)?(c(m,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():S&&(w||(c(_,p,n,r,s,null,i,o,a),Qn(f,p)))):(f.pendingId=Co++,w?(f.isHydrating=!1,f.activeBranch=m):u(m,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=l("div"),S?(c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(c(_,p,n,r,s,null,i,o,a),Qn(f,p))):_&&nt(d,_)?(c(_,d,n,r,s,f,i,o,a),f.resolve(!0)):(c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(_&&nt(d,_))c(_,d,n,r,s,f,i,o,a),Qn(f,d);else if(Vr(t,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=Co++,c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:b,pendingId:h}=f;b>0?setTimeout(()=>{f.pendingId===h&&f.fallback(p)},b):b===0&&f.fallback(p)}}function rd(e,t,n,r,s,i,o,a,c,u,l=!1){const{p:f,m:d,um:p,n:_,o:{parentNode:m,remove:S}}=u;let w;const b=Sm(e);b&&t&&t.pendingBranch&&(w=t.pendingId,t.deps++);const h=e.props?qu(e.props.timeout):void 0,v=i,E={vnode:e,parent:t,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Co++,timeout:typeof h=="number"?h:-1,activeBranch:null,pendingBranch:null,isInFallback:!l,isHydrating:l,isUnmounted:!1,effects:[],resolve(T=!1,k=!1){const{vnode:B,activeBranch:L,pendingBranch:M,pendingId:q,effects:N,parentComponent:Y,container:ne}=E;let ie=!1;E.isHydrating?E.isHydrating=!1:T||(ie=L&&M.transition&&M.transition.mode==="out-in",ie&&(L.transition.afterLeave=()=>{q===E.pendingId&&(d(M,ne,i===v?_(L):i,0),bo(N))}),L&&(m(L.el)===ne&&(i=_(L)),p(L,Y,E,!0)),ie||d(M,ne,i,0)),Qn(E,M),E.pendingBranch=null,E.isInFallback=!1;let W=E.parent,te=!1;for(;W;){if(W.pendingBranch){W.effects.push(...N),te=!0;break}W=W.parent}!te&&!ie&&bo(N),E.effects=[],b&&t&&t.pendingBranch&&w===t.pendingId&&(t.deps--,t.deps===0&&!k&&t.resolve()),Vr(B,"onResolve")},fallback(T){if(!E.pendingBranch)return;const{vnode:k,activeBranch:B,parentComponent:L,container:M,namespace:q}=E;Vr(k,"onFallback");const N=_(B),Y=()=>{E.isInFallback&&(f(null,T,M,N,L,null,q,a,c),Qn(E,T))},ne=T.transition&&T.transition.mode==="out-in";ne&&(B.transition.afterLeave=Y),E.isInFallback=!0,p(B,L,null,!0),ne||Y()},move(T,k,B){E.activeBranch&&d(E.activeBranch,T,k,B),E.container=T},next(){return E.activeBranch&&_(E.activeBranch)},registerDep(T,k,B){const L=!!E.pendingBranch;L&&E.deps++;const M=T.vnode.el;T.asyncDep.catch(q=>{pr(q,T,0)}).then(q=>{if(T.isUnmounted||E.isUnmounted||E.pendingId!==T.suspenseId)return;T.asyncResolved=!0;const{vnode:N}=T;ko(T,q),M&&(N.el=M);const Y=!M&&T.subTree.el;k(T,N,m(M||T.subTree.el),M?null:_(T.subTree),E,o,B),Y&&S(Y),vi(T,N.el),L&&--E.deps===0&&E.resolve()})},unmount(T,k){E.isUnmounted=!0,E.activeBranch&&p(E.activeBranch,n,T,k),E.pendingBranch&&p(E.pendingBranch,n,T,k)}};return E}function wm(e,t,n,r,s,i,o,a,c){const u=t.suspense=rd(t,r,n,e.parentNode,document.createElement("div"),null,s,i,o,a,!0),l=c(e,u.pendingBranch=t.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),l}function Em(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=Nc(r?n.default:n),e.ssFallback=r?Nc(n.fallback):be(we)}function Nc(e){let t;if(Q(e)){const n=or&&e._c;n&&(e._d=!1,Qe()),e=e(),n&&(e._d=!0,t=Be,id())}return X(e)&&(e=pm(e)),e=ze(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function sd(e,t){t&&t.pendingBranch?X(e)?t.effects.push(...e):t.effects.push(e):bo(e)}function Qn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let s=t.el;for(;!s&&t.component;)t=t.component.subTree,s=t.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,vi(r,s))}function Sm(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const Oe=Symbol.for("v-fgt"),kn=Symbol.for("v-txt"),we=Symbol.for("v-cmt"),Rs=Symbol.for("v-stc"),Rr=[];let Be=null;function Qe(e=!1){Rr.push(Be=e?null:[])}function id(){Rr.pop(),Be=Rr[Rr.length-1]||null}let or=1;function Mc(e,t=!1){or+=e,e<0&&Be&&t&&(Be.hasOnce=!0)}function od(e){return e.dynamicChildren=or>0?Be||zn:null,id(),or>0&&Be&&Be.push(e),e}function Im(e,t,n,r,s,i){return od(cd(e,t,n,r,s,i,!0))}function gt(e,t,n,r,s){return od(be(e,t,n,r,s,!0))}function On(e){return e?e.__v_isVNode===!0:!1}function nt(e,t){return e.type===t.type&&e.key===t.key}const ad=({key:e})=>e??null,Os=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?_e(e)||Se(e)||Q(e)?{i:ke,r:e,k:t,f:!!n}:e:null);function cd(e,t=null,n=null,r=0,s=null,i=e===Oe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ad(t),ref:t&&Os(t),scopeId:wf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ke};return a?(La(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=_e(n)?8:16),or>0&&!o&&Be&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Be.push(c),c}const be=Tm;function Tm(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Df)&&(e=we),On(e)){const a=Lt(e,t,!0);return n&&La(a,n),or>0&&!i&&Be&&(a.shapeFlag&6?Be[Be.indexOf(e)]=a:Be.push(a)),a.patchFlag=-2,a}if(Mm(e)&&(e=e.__vccOpts),t){t=ld(t);let{class:a,style:c}=t;a&&!_e(a)&&(t.class=mi(a)),ge(c)&&(Aa(c)&&!X(c)&&(c=Ie({},c)),t.style=gi(c))}const o=_e(e)?1:Ys(e)?128:Sf(e)?64:ge(e)?4:Q(e)?2:0;return cd(e,t,n,r,s,o,i,!0)}function ld(e){return e?Aa(e)||Vf(e)?Ie({},e):e:null}function Lt(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,u=t?Cm(s||{},t):s,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&ad(u),ref:t&&t.ref?n&&i?X(i)?i.concat(Os(t)):[i,Os(t)]:Os(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Oe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Lt(e.ssContent),ssFallback:e.ssFallback&&Lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&ir(l,c.clone(l)),l}function ud(e=" ",t=0){return be(kn,null,e,t)}function RT(e="",t=!1){return t?(Qe(),gt(we,null,e)):be(we,null,e)}function ze(e){return e==null||typeof e=="boolean"?be(we):X(e)?be(Oe,null,e.slice()):On(e)?Jt(e):be(kn,null,String(e))}function Jt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Lt(e)}function La(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(X(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),La(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Vf(t)?t._ctx=ke:s===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),r&64?(n=16,t=[ud(t)]):n=8);e.children=t,e.shapeFlag|=n}function Cm(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=mi([t.class,r.class]));else if(s==="style")t.style=gi([t.style,r.style]);else if(es(s)){const i=t[s],o=r[s];o&&i!==o&&!(X(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function $e(e,t,n,r=null){at(e,t,7,[n,r])}const Am=$f();let km=0;function Pm(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Am,i={uid:km++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kf(r,s),emitsOptions:td(r,s),emit:null,emitted:null,propsDefaults:he,inheritAttrs:r.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=hm.bind(null,i),e.ce&&e.ce(i),i}let Ee=null;const bi=()=>Ee||ke;let Js,Ao;{const e=pi(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Js=t("__VUE_INSTANCE_SETTERS__",n=>Ee=n),Ao=t("__VUE_SSR_SETTERS__",n=>ar=n)}const is=e=>{const t=Ee;return Js(e),e.scope.on(),()=>{e.scope.off(),Js(t)}},Lc=()=>{Ee&&Ee.scope.off(),Js(null)};function fd(e){return e.vnode.shapeFlag&4}let ar=!1;function Rm(e,t=!1,n=!1){t&&Ao(t);const{props:r,children:s}=e.vnode,i=fd(e);Zg(e,r,i,t),rm(e,s,n||t);const o=i?Om(e,t):void 0;return t&&Ao(!1),o}function Om(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,zg);const{setup:r}=n;if(r){Nt();const s=e.setupContext=r.length>1?Nm(e):null,i=is(e),o=ns(r,e,0,[e.props,s]),a=zu(o);if(Mt(),i(),(a||e.sp)&&!on(e)&&Pa(e),a){if(o.then(Lc,Lc),t)return o.then(c=>{ko(e,c)}).catch(c=>{pr(c,e,0)});e.asyncDep=o}else ko(e,o)}else dd(e)}function ko(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ge(t)&&(e.setupState=yf(t)),dd(e)}function dd(e,t,n){const r=e.type;e.render||(e.render=r.render||vt);{const s=is(e);Nt();try{Kg(e)}finally{Mt(),s()}}}const xm={get(e,t){return Re(e,"get",""),e[t]}};function Nm(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,xm),slots:e.slots,emit:e.emit,expose:t}}function Da(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(yf(hg(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Pr)return Pr[n](e)},has(t,n){return n in t||n in Pr}})):e.proxy}function Po(e,t=!0){return Q(e)?e.displayName||e.name:e.name||t&&e.__name}function Mm(e){return Q(e)&&"__vccOpts"in e}const Ae=(e,t)=>Eg(e,t,ar);function Ke(e,t,n){const r=arguments.length;return r===2?ge(t)&&!X(t)?On(t)?be(e,null,[t]):be(e,t):be(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&On(n)&&(n=[n]),be(e,t,n))}const Lm="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ro;const Dc=typeof window<"u"&&window.trustedTypes;if(Dc)try{Ro=Dc.createPolicy("vue",{createHTML:e=>e})}catch{}const hd=Ro?e=>Ro.createHTML(e):e=>e,Dm="http://www.w3.org/2000/svg",Fm="http://www.w3.org/1998/Math/MathML",Tt=typeof document<"u"?document:null,Fc=Tt&&Tt.createElement("template"),Um={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Tt.createElementNS(Dm,e):t==="mathml"?Tt.createElementNS(Fm,e):n?Tt.createElement(e,{is:n}):Tt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Tt.createTextNode(e),createComment:e=>Tt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Tt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Fc.innerHTML=hd(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Fc.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},zt="transition",br="animation",zr=Symbol("_vtc"),pd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Hm=Ie({},If,pd),jm=e=>(e.displayName="Transition",e.props=Hm,e),$m=jm((e,{slots:t})=>Ke(Rg,Bm(e),t)),yn=(e,t=[])=>{X(e)?e.forEach(n=>n(...t)):e&&e(...t)},Uc=e=>e?X(e)?e.some(t=>t.length>1):e.length>1:!1;function Bm(e){const t={};for(const N in e)N in pd||(t[N]=e[N]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,_=Wm(s),m=_&&_[0],S=_&&_[1],{onBeforeEnter:w,onEnter:b,onEnterCancelled:h,onLeave:v,onLeaveCancelled:E,onBeforeAppear:T=w,onAppear:k=b,onAppearCancelled:B=h}=t,L=(N,Y,ne,ie)=>{N._enterCancelled=ie,_n(N,Y?l:a),_n(N,Y?u:o),ne&&ne()},M=(N,Y)=>{N._isLeaving=!1,_n(N,f),_n(N,p),_n(N,d),Y&&Y()},q=N=>(Y,ne)=>{const ie=N?k:b,W=()=>L(Y,N,ne);yn(ie,[Y,W]),Hc(()=>{_n(Y,N?c:i),St(Y,N?l:a),Uc(ie)||jc(Y,r,m,W)})};return Ie(t,{onBeforeEnter(N){yn(w,[N]),St(N,i),St(N,o)},onBeforeAppear(N){yn(T,[N]),St(N,c),St(N,u)},onEnter:q(!1),onAppear:q(!0),onLeave(N,Y){N._isLeaving=!0;const ne=()=>M(N,Y);St(N,f),N._enterCancelled?(St(N,d),Wc()):(Wc(),St(N,d)),Hc(()=>{N._isLeaving&&(_n(N,f),St(N,p),Uc(v)||jc(N,r,S,ne))}),yn(v,[N,ne])},onEnterCancelled(N){L(N,!1,void 0,!0),yn(h,[N])},onAppearCancelled(N){L(N,!0,void 0,!0),yn(B,[N])},onLeaveCancelled(N){M(N),yn(E,[N])}})}function Wm(e){if(e==null)return null;if(ge(e))return[zi(e.enter),zi(e.leave)];{const t=zi(e);return[t,t]}}function zi(e){return qu(e)}function St(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[zr]||(e[zr]=new Set)).add(t)}function _n(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[zr];n&&(n.delete(t),n.size||(e[zr]=void 0))}function Hc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Vm=0;function jc(e,t,n,r){const s=e._endId=++Vm,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=zm(e,t);if(!o)return r();const u=o+"end";let l=0;const f=()=>{e.removeEventListener(u,d),i()},d=p=>{p.target===e&&++l>=c&&f()};setTimeout(()=>{l<c&&f()},a+1),e.addEventListener(u,d)}function zm(e,t){const n=window.getComputedStyle(e),r=_=>(n[_]||"").split(", "),s=r(`${zt}Delay`),i=r(`${zt}Duration`),o=$c(s,i),a=r(`${br}Delay`),c=r(`${br}Duration`),u=$c(a,c);let l=null,f=0,d=0;t===zt?o>0&&(l=zt,f=o,d=i.length):t===br?u>0&&(l=br,f=u,d=c.length):(f=Math.max(o,u),l=f>0?o>u?zt:br:null,d=l?l===zt?i.length:c.length:0);const p=l===zt&&/\b(transform|all)(,|$)/.test(r(`${zt}Property`).toString());return{type:l,timeout:f,propCount:d,hasTransform:p}}function $c(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Bc(n)+Bc(e[r])))}function Bc(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Wc(){return document.body.offsetHeight}function Km(e,t,n){const r=e[zr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Vc=Symbol("_vod"),Gm=Symbol("_vsh"),qm=Symbol(""),Ym=/(^|;)\s*display\s*:/;function Jm(e,t,n){const r=e.style,s=_e(n);let i=!1;if(n&&!s){if(t)if(_e(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&xs(r,a,"")}else for(const o in t)n[o]==null&&xs(r,o,"");for(const o in n)o==="display"&&(i=!0),xs(r,o,n[o])}else if(s){if(t!==n){const o=r[qm];o&&(n+=";"+o),r.cssText=n,i=Ym.test(n)}}else t&&e.removeAttribute("style");Vc in e&&(e[Vc]=i?r.display:"",e[Gm]&&(r.display="none"))}const zc=/\s*!important$/;function xs(e,t,n){if(X(n))n.forEach(r=>xs(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Xm(e,t);zc.test(n)?e.setProperty(Ln(r),n.replace(zc,""),"important"):e[r]=n}}const Kc=["Webkit","Moz","ms"],Ki={};function Xm(e,t){const n=Ki[t];if(n)return n;let r=Ze(t);if(r!=="filter"&&r in e)return Ki[t]=r;r=hi(r);for(let s=0;s<Kc.length;s++){const i=Kc[s]+r;if(i in e)return Ki[t]=i}return t}const Gc="http://www.w3.org/1999/xlink";function qc(e,t,n,r,s,i=zp(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Gc,t.slice(6,t.length)):e.setAttributeNS(Gc,t,n):n==null||i&&!Yu(n)?e.removeAttribute(t):e.setAttribute(t,i?"":jt(n)?String(n):n)}function Yc(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?hd(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Yu(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Qm(e,t,n,r){e.addEventListener(t,n,r)}function Zm(e,t,n,r){e.removeEventListener(t,n,r)}const Jc=Symbol("_vei");function ey(e,t,n,r,s=null){const i=e[Jc]||(e[Jc]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=ty(t);if(r){const u=i[t]=sy(r,s);Qm(e,a,u,c)}else o&&(Zm(e,a,o,c),i[t]=void 0)}}const Xc=/(?:Once|Passive|Capture)$/;function ty(e){let t;if(Xc.test(e)){t={};let r;for(;r=e.match(Xc);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ln(e.slice(2)),t]}let Gi=0;const ny=Promise.resolve(),ry=()=>Gi||(ny.then(()=>Gi=0),Gi=Date.now());function sy(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;at(iy(r,n.value),t,5,[r])};return n.value=e,n.attached=ry(),n}function iy(e,t){if(X(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Qc=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,oy=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?Km(e,r,o):t==="style"?Jm(e,n,r):es(t)?ya(t)||ey(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ay(e,t,r,o))?(Yc(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&qc(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!_e(r))?Yc(e,Ze(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),qc(e,t,r,o))};function ay(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Qc(t)&&Q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qc(t)&&_e(n)?!1:t in e}const gd=Ie({patchProp:oy},Um);let Or,Zc=!1;function cy(){return Or||(Or=im(gd))}function ly(){return Or=Zc?Or:om(gd),Zc=!0,Or}const uy=(...e)=>{const t=cy().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=yd(r);if(!s)return;const i=t._component;!Q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,md(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t},fy=(...e)=>{const t=ly().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=yd(r);if(s)return n(s,!0,md(s))},t};function md(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function yd(e){return _e(e)?document.querySelector(e):e}const dy=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,hy=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,py=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function gy(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){my(e);return}return t}function my(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function Xs(e,t={}){if(typeof e!="string")return e;if(e[0]==='"'&&e[e.length-1]==='"'&&e.indexOf("\\")===-1)return e.slice(1,-1);const n=e.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!py.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(dy.test(e)||hy.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,gy)}return JSON.parse(e)}catch(r){if(t.strict)throw r;return e}}const yy=/#/g,_y=/&/g,vy=/\//g,by=/=/g,Fa=/\+/g,wy=/%5e/gi,Ey=/%60/gi,Sy=/%7c/gi,Iy=/%20/gi;function Ty(e){return encodeURI(""+e).replace(Sy,"|")}function Oo(e){return Ty(typeof e=="string"?e:JSON.stringify(e)).replace(Fa,"%2B").replace(Iy,"+").replace(yy,"%23").replace(_y,"%26").replace(Ey,"`").replace(wy,"^").replace(vy,"%2F")}function qi(e){return Oo(e).replace(by,"%3D")}function Qs(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function Cy(e){return Qs(e.replace(Fa," "))}function Ay(e){return Qs(e.replace(Fa," "))}function _d(e=""){const t=Object.create(null);e[0]==="?"&&(e=e.slice(1));for(const n of e.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=Cy(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=Ay(r[2]||"");t[s]===void 0?t[s]=i:Array.isArray(t[s])?t[s].push(i):t[s]=[t[s],i]}return t}function ky(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(n=>`${qi(e)}=${Oo(n)}`).join("&"):`${qi(e)}=${Oo(t)}`:qi(e)}function Py(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>ky(t,e[t])).filter(Boolean).join("&")}const Ry=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,Oy=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,xy=/^([/\\]\s*){2,}[^/\\]/,Ny=/^[\s\0]*(blob|data|javascript|vbscript):$/i,My=/\/$|\/\?|\/#/,Ly=/^\.?\//;function Dn(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?Ry.test(e):Oy.test(e)||(t.acceptRelative?xy.test(e):!1)}function Dy(e){return!!e&&Ny.test(e)}function xo(e="",t){return t?My.test(e):e.endsWith("/")}function Kr(e="",t){if(!t)return(xo(e)?e.slice(0,-1):e)||"/";if(!xo(e,!0))return e||"/";let n=e,r="";const s=e.indexOf("#");s!==-1&&(n=e.slice(0,s),r=e.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Fy(e="",t){if(!t)return e.endsWith("/")?e:e+"/";if(xo(e,!0))return e||"/";let n=e,r="";const s=e.indexOf("#");if(s!==-1&&(n=e.slice(0,s),r=e.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function Uy(e,t){if(bd(t)||Dn(e))return e;const n=Kr(t);return e.startsWith(n)?e:Ua(n,e)}function el(e,t){if(bd(t))return e;const n=Kr(t);if(!e.startsWith(n))return e;const r=e.slice(n.length);return r[0]==="/"?r:"/"+r}function vd(e,t){const n=Sd(e),r={..._d(n.search),...t};return n.search=Py(r),$y(n)}function bd(e){return!e||e==="/"}function Hy(e){return e&&e!=="/"}function Ua(e,...t){let n=e||"";for(const r of t.filter(s=>Hy(s)))if(n){const s=r.replace(Ly,"");n=Fy(n)+s}else n=r;return n}function wd(...e){var o,a,c,u;const t=/\/(?!\/)/,n=e.filter(Boolean),r=[];let s=0;for(const l of n)if(!(!l||l==="/")){for(const[f,d]of l.split(t).entries())if(!(!d||d===".")){if(d===".."){if(r.length===1&&Dn(r[0]))continue;r.pop(),s--;continue}if(f===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+d;continue}r.push(d),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(c=n[0])!=null&&c.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function jy(e,t){return Qs(Kr(e))===Qs(Kr(t))}const Ed=Symbol.for("ufo:protocolRelative");function Sd(e="",t){const n=e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,d=""]=n;return{protocol:f.toLowerCase(),pathname:d,href:f+d,auth:"",host:"",search:"",hash:""}}if(!Dn(e,{acceptRelative:!0}))return tl(e);const[,r="",s,i=""]=e.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:u,hash:l}=tl(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:u,hash:l,[Ed]:!r}}function tl(e=""){const[t="",n="",r=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:n,hash:r}}function $y(e){const t=e.pathname||"",n=e.search?(e.search.startsWith("?")?"":"?")+e.search:"",r=e.hash||"",s=e.auth?e.auth+"@":"",i=e.host||"";return(e.protocol||e[Ed]?(e.protocol||"")+"//":"")+s+i+t+n+r}class By extends Error{constructor(t,n){super(t,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function Wy(e){var c,u,l,f,d;const t=((c=e.error)==null?void 0:c.message)||((u=e.error)==null?void 0:u.toString())||"",n=((l=e.request)==null?void 0:l.method)||((f=e.options)==null?void 0:f.method)||"GET",r=((d=e.request)==null?void 0:d.url)||String(e.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=e.response?`${e.response.status} ${e.response.statusText}`:"<no response>",o=`${s}: ${i}${t?` ${t}`:""}`,a=new By(o,e.error?{cause:e.error}:void 0);for(const p of["request","options","response"])Object.defineProperty(a,p,{get(){return e[p]}});for(const[p,_]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,p,{get(){return e.response&&e.response[_]}});return a}const Vy=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function nl(e="GET"){return Vy.has(e.toUpperCase())}function zy(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const Ky=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Gy=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function qy(e=""){if(!e)return"json";const t=e.split(";").shift()||"";return Gy.test(t)?"json":Ky.has(t)||t.startsWith("text/")?"text":"blob"}function Yy(e,t,n,r){const s=Jy((t==null?void 0:t.headers)??(e==null?void 0:e.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||t!=null&&t.params||t!=null&&t.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...t==null?void 0:t.params,...t==null?void 0:t.query}),{...n,...t,query:i,params:i,headers:s}}function Jy(e,t,n){if(!t)return new n(e);const r=new n(t);if(e)for(const[s,i]of Symbol.iterator in e||Array.isArray(e)?e:new n(e))r.set(s,i);return r}async function Ss(e,t){if(t)if(Array.isArray(t))for(const n of t)await n(e);else await t(e)}const Xy=new Set([408,409,425,429,500,502,503,504]),Qy=new Set([101,204,205,304]);function Id(e={}){const{fetch:t=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=e;async function s(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let l;typeof a.options.retry=="number"?l=a.options.retry:l=nl(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(l>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):Xy.has(f))){const d=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return d>0&&await new Promise(p=>setTimeout(p,d)),i(a.request,{...a.options,retry:l-1})}}const u=Wy(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(c,u={}){const l={request:c,options:Yy(c,u,e.defaults,n),response:void 0,error:void 0};l.options.method&&(l.options.method=l.options.method.toUpperCase()),l.options.onRequest&&await Ss(l,l.options.onRequest),typeof l.request=="string"&&(l.options.baseURL&&(l.request=Uy(l.request,l.options.baseURL)),l.options.query&&(l.request=vd(l.request,l.options.query),delete l.options.query),"query"in l.options&&delete l.options.query,"params"in l.options&&delete l.options.params),l.options.body&&nl(l.options.method)&&(zy(l.options.body)?(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers||{}),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json")):("pipeTo"in l.options.body&&typeof l.options.body.pipeTo=="function"||typeof l.options.body.pipe=="function")&&("duplex"in l.options||(l.options.duplex="half")));let f;if(!l.options.signal&&l.options.timeout){const p=new r;f=setTimeout(()=>{const _=new Error("[TimeoutError]: The operation was aborted due to timeout");_.name="TimeoutError",_.code=23,p.abort(_)},l.options.timeout),l.options.signal=p.signal}try{l.response=await t(l.request,l.options)}catch(p){return l.error=p,l.options.onRequestError&&await Ss(l,l.options.onRequestError),await s(l)}finally{f&&clearTimeout(f)}if((l.response.body||l.response._bodyInit)&&!Qy.has(l.response.status)&&l.options.method!=="HEAD"){const p=(l.options.parseResponse?"json":l.options.responseType)||qy(l.response.headers.get("content-type")||"");switch(p){case"json":{const _=await l.response.text(),m=l.options.parseResponse||Xs;l.response._data=m(_);break}case"stream":{l.response._data=l.response.body||l.response._bodyInit;break}default:l.response._data=await l.response[p]()}}return l.options.onResponse&&await Ss(l,l.options.onResponse),!l.options.ignoreResponseError&&l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await Ss(l,l.options.onResponseError),await s(l)):l.response},o=async function(c,u){return(await i(c,u))._data};return o.raw=i,o.native=(...a)=>t(...a),o.create=(a={},c={})=>Id({...e,...c,defaults:{...e.defaults,...c.defaults,...a}}),o}const Zs=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Zy=Zs.fetch?(...e)=>Zs.fetch(...e):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),e_=Zs.Headers,t_=Zs.AbortController,n_=Id({fetch:Zy,Headers:e_,AbortController:t_}),r_=n_,s_=()=>{var e;return((e=window==null?void 0:window.__NUXT__)==null?void 0:e.config)||{}},Ha=()=>s_().app,i_=()=>Ha().baseURL,o_=()=>Ha().buildAssetsDir,ja=(...e)=>wd(Td(),o_(),...e),Td=(...e)=>{const t=Ha(),n=t.cdnURL||t.baseURL;return e.length?wd(n,...e):n};globalThis.__buildAssetsURL=ja,globalThis.__publicAssetsURL=Td;globalThis.$fetch||(globalThis.$fetch=r_.create({baseURL:i_()}));"global"in globalThis||(globalThis.global=globalThis);function No(e,t={},n){for(const r in e){const s=e[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?No(s,t,i):typeof s=="function"&&(t[i]=s)}return t}const a_={run:e=>e()},c_=()=>a_,Cd=typeof console.createTask<"u"?console.createTask:c_;function l_(e,t){const n=t.shift(),r=Cd(n);return e.reduce((s,i)=>s.then(()=>r.run(()=>i(...t))),Promise.resolve())}function u_(e,t){const n=t.shift(),r=Cd(n);return Promise.all(e.map(s=>r.run(()=>s(...t))))}function Yi(e,t){for(const n of[...e])n(t)}class f_{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,r={}){if(!t||typeof n!="function")return()=>{};const s=t;let i;for(;this._deprecatedHooks[t];)i=this._deprecatedHooks[t],t=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(t,s),r}removeHook(t,n){if(this._hooks[t]){const r=this._hooks[t].indexOf(n);r!==-1&&this._hooks[t].splice(r,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const r=this._hooks[t]||[];delete this._hooks[t];for(const s of r)this.hook(t,s)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=No(t),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(t){const n=No(t);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(l_,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(u_,t,...n)}callHookWith(t,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Yi(this._before,s);const i=t(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Yi(this._after,s)}):(this._after&&s&&Yi(this._after,s),i)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Ad(){return new f_}function d_(e={}){let t,n=!1;const r=o=>{if(t&&t!==o)throw new Error("Context conflict")};let s;if(e.asyncContext){const o=e.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return t};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),t=o,n=!0},unset:()=>{t=void 0,n=!1},call:(o,a)=>{r(o),t=o;try{return s?s.run(o,a):a()}finally{n||(t=void 0)}},async callAsync(o,a){t=o;const c=()=>{t=o},u=()=>t===o?c:void 0;Mo.add(u);try{const l=s?s.run(o,a):a();return n||(t=void 0),await l}finally{Mo.delete(u)}}}}function h_(e={}){const t={};return{get(n,r={}){return t[n]||(t[n]=d_({...e,...r})),t[n]}}}const ei=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},rl="__unctx__",p_=ei[rl]||(ei[rl]=h_()),g_=(e,t={})=>p_.get(e,t),sl="__unctx_async_handlers__",Mo=ei[sl]||(ei[sl]=new Set);function Zn(e){const t=[];for(const s of Mo){const i=s();i&&t.push(i)}const n=()=>{for(const s of t)s()};let r=e();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const il=!1,m_=!1,OT={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},y_=null,__="#__nuxt",kd="nuxt-app",ol=36e5,v_="vite:preloadError";function Pd(e=kd){return g_(e,{asyncContext:!1})}const b_="__nuxt_plugin";function w_(e){var s;let t=0;const n={_id:e.id||kd||"nuxt-app",_scope:Gp(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.17.6"},get vue(){return n.vueApp.version}},payload:Pt({...((s=e.ssrContext)==null?void 0:s.payload)||{},data:Pt({}),state:hn({}),once:new Set,_errors:Pt({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!Zu()?n._scope.run(()=>al(n,i)):al(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};t++;let i=!1;return()=>{if(!i&&(i=!0,t--,t===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Pt({}),_payloadRevivers:{},...e};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=Ad(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;Is(n,a,o),Is(n.vueApp.config.globalProperties,a,o)},Is(n.vueApp,"$nuxt",n),Is(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(v_,o=>{n.callHook("app:chunkError",{error:o.payload}),o.payload.message.includes("Unable to preload CSS")&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=Te);const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function E_(e,t){t.hooks&&e.hooks.addHooks(t.hooks)}async function S_(e,t){if(typeof t=="function"){const{provide:n}=await e.runWithContext(()=>t(e))||{};if(n&&typeof n=="object")for(const r in n)e.provide(r,n[r])}}async function I_(e,t){const n=new Set,r=[],s=[],i=[];let o=0;async function a(c){var l;const u=((l=c.dependsOn)==null?void 0:l.filter(f=>t.some(d=>d._name===f)&&!n.has(f)))??[];if(u.length>0)r.push([new Set(u),c]);else{const f=S_(e,c).then(async()=>{c._name&&(n.add(c._name),await Promise.all(r.map(async([d,p])=>{d.has(c._name)&&(d.delete(c._name),d.size===0&&(o++,await a(p)))})))});c.parallel?s.push(f.catch(d=>i.push(d))):await f}}for(const c of t)E_(e,c);for(const c of t)await a(c);if(await Promise.all(s),o)for(let c=0;c<o;c++)await Promise.all(s);if(i.length)throw i[0]}function lt(e){if(typeof e=="function")return e;const t=e._name||e.name;return delete e.name,Object.assign(e.setup||(()=>{}),e,{[b_]:!0,_name:t})}function al(e,t,n){const r=()=>t();return Pd(e._id).set(e),e.vueApp.runWithContext(r)}function T_(e){var n;let t;return Oa()&&(t=(n=bi())==null?void 0:n.appContext.app.$nuxt),t||(t=Pd(e).tryUse()),t||null}function Te(e){const t=T_(e);if(!t)throw new Error("[nuxt] instance unavailable");return t}function os(e){return Te().$config}function Is(e,t,n){Object.defineProperty(e,t,{get:()=>n})}function C_(e,t){return{ctx:{table:e},matchAll:n=>Od(n,e)}}function Rd(e){const t={};for(const n in e)t[n]=n==="dynamic"?new Map(Object.entries(e[n]).map(([r,s])=>[r,Rd(s)])):new Map(Object.entries(e[n]));return t}function A_(e){return C_(Rd(e))}function Od(e,t,n){e.endsWith("/")&&(e=e.slice(0,-1)||"/");const r=[];for(const[i,o]of cl(t.wildcard))(e===i||e.startsWith(i+"/"))&&r.push(o);for(const[i,o]of cl(t.dynamic))if(e.startsWith(i+"/")){const a="/"+e.slice(i.length).split("/").splice(2).join("/");r.push(...Od(a,o))}const s=t.static.get(e);return s&&r.push(s),r.filter(Boolean)}function cl(e){return[...e.entries()].sort((t,n)=>t[0].length-n[0].length)}function Ji(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function Lo(e,t,n=".",r){if(!Ji(t))return Lo(e,{},n,r);const s=Object.assign({},t);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const o=e[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Ji(o)&&Ji(s[i])?s[i]=Lo(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function k_(e){return(...t)=>t.reduce((n,r)=>Lo(n,r,"",e),{})}const xd=k_();function P_(e,t){try{return t in e}catch{return!1}}class Do extends Error{constructor(n,r={}){super(n,r);Vt(this,"statusCode",500);Vt(this,"fatal",!1);Vt(this,"unhandled",!1);Vt(this,"statusMessage");Vt(this,"data");Vt(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:Fo(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=Nd(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}Vt(Do,"__h3_error__",!0);function R_(e){if(typeof e=="string")return new Do(e);if(O_(e))return e;const t=new Do(e.message??e.statusMessage??"",{cause:e.cause||e});if(P_(e,"stack"))try{Object.defineProperty(t,"stack",{get(){return e.stack}})}catch{try{t.stack=e.stack}catch{}}if(e.data&&(t.data=e.data),e.statusCode?t.statusCode=Fo(e.statusCode,t.statusCode):e.status&&(t.statusCode=Fo(e.status,t.statusCode)),e.statusMessage?t.statusMessage=e.statusMessage:e.statusText&&(t.statusMessage=e.statusText),t.statusMessage){const n=t.statusMessage;Nd(t.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return e.fatal!==void 0&&(t.fatal=e.fatal),e.unhandled!==void 0&&(t.unhandled=e.unhandled),t}function O_(e){var t;return((t=e==null?void 0:e.constructor)==null?void 0:t.__h3_error__)===!0}const x_=/[^\u0009\u0020-\u007E]/g;function Nd(e=""){return e.replace(x_,"")}function Fo(e,t=200){return!e||(typeof e=="string"&&(e=Number.parseInt(e,10)),e<100||e>999)?t:e}const N_=Symbol("layout-meta"),wi=Symbol("route"),et=()=>{var e;return(e=Te())==null?void 0:e.$router},Md=()=>Oa()?Ge(wi,Te()._route):Te()._route;const M_=()=>{try{if(Te()._processingMiddleware)return!0}catch{return!1}return!1},xT=(e,t)=>{e||(e="/");const n=typeof e=="string"?e:"path"in e?L_(e):et().resolve(e).href;if(t!=null&&t.open){const{target:c="_blank",windowFeatures:u={}}=t.open,l=Object.entries(u).filter(([f,d])=>d!==void 0).map(([f,d])=>`${f.toLowerCase()}=${d}`).join(", ");return open(n,c,l),Promise.resolve()}const r=Dn(n,{acceptRelative:!0}),s=(t==null?void 0:t.external)||r;if(s){if(!(t!=null&&t.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&Dy(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=M_();if(!s&&i){if(t!=null&&t.replace){if(typeof e=="string"){const{pathname:c,search:u,hash:l}=Sd(e);return{path:c,...u&&{query:_d(u)},...l&&{hash:l},replace:!0}}return{...e,replace:!0}}return e}const o=et(),a=Te();return s?(a._scope.stop(),t!=null&&t.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):t!=null&&t.replace?o.replace(e):o.push(e)};function L_(e){return vd(e.path||"",e.query||{})+(e.hash||"")}const Ld="__nuxt_error",Ei=()=>vg(Te().payload,"error"),wn=e=>{const t=Pn(e);try{const n=Te(),r=Ei();n.hooks.callHook("app:error",t),r.value||(r.value=t)}catch{throw t}return t},D_=async(e={})=>{const t=Te(),n=Ei();t.callHook("app:error:cleared",e),e.redirect&&await et().replace(e.redirect),n.value=y_},Dd=e=>!!e&&typeof e=="object"&&Ld in e,Pn=e=>{const t=R_(e);return Object.defineProperty(t,Ld,{value:!0,configurable:!1,writable:!1}),t};function ll(e){const t=U_(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,t.charCodeAt(s));return n}const F_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function U_(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let s=0;s<e.length;s++)n<<=6,n|=F_.indexOf(e[s]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const H_=-1,j_=-2,$_=-3,B_=-4,W_=-5,V_=-6;function z_(e,t){return K_(JSON.parse(e),t)}function K_(e,t){if(typeof e=="number")return s(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function s(i,o=!1){if(i===H_)return;if(i===$_)return NaN;if(i===B_)return 1/0;if(i===W_)return-1/0;if(i===V_)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],u=t==null?void 0:t[c];if(u)return r[i]=u(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const l=new Set;r[i]=l;for(let p=1;p<a.length;p+=1)l.add(s(a[p]));break;case"Map":const f=new Map;r[i]=f;for(let p=1;p<a.length;p+=2)f.set(s(a[p]),s(a[p+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const d=Object.create(null);r[i]=d;for(let p=1;p<a.length;p+=2)d[a[p]]=s(a[p+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const p=globalThis[c],_=a[1],m=ll(_),S=new p(m);r[i]=S;break}case"ArrayBuffer":{const p=a[1],_=ll(p);r[i]=_;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let u=0;u<a.length;u+=1){const l=a[u];l!==j_&&(c[u]=s(l))}}else{const c={};r[i]=c;for(const u in a){const l=a[u];c[u]=s(l)}}return r[i]}return s(0)}const G_=new Set(["link","style","script","noscript"]),q_=new Set(["title","titleTemplate","script","style","noscript"]),ul=new Set(["base","meta","link","style","script","noscript"]),Y_=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),J_=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),X_=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),Q_=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Z_=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const ev=["name","property","http-equiv"],tv=new Set(["viewport","description","keywords","robots"]);function Fd(e){const t=e.split(":");return t.length?Z_.has(t[1]):!1}function Uo(e){const{props:t,tag:n}=e;if(J_.has(n))return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";if(e.tag==="meta"){for(const r of ev)if(t[r]!==void 0){const s=t[r],i=s.includes(":"),o=tv.has(s),c=!(i||o)&&e.key?`:key:${e.key}`:"";return`${n}:${s}${c}`}}if(e.key)return`${n}:key:${e.key}`;if(t.id)return`${n}:id:${t.id}`;if(q_.has(n)){const r=e.textContent||e.innerHTML;if(r)return`${n}:content:${r}`}}function fl(e){const t=e._h||e._d;if(t)return t;const n=e.textContent||e.innerHTML;return n||`${e.tag}:${Object.entries(e.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function ti(e,t,n){typeof e==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(e=e());let s;if(t&&(s=t(n,e)),Array.isArray(s))return s.map(i=>ti(i,t));if((s==null?void 0:s.constructor)===Object){const i={};for(const o of Object.keys(s))i[o]=ti(s[o],t,o);return i}return s}function nv(e,t){const n=e==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(e==="style"){const[o,...a]=i.split(":").map(c=>c.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof t=="string"?e==="style"?t.split(";").forEach(r):r(t):Array.isArray(t)?t.forEach(s=>r(s)):t&&typeof t=="object"&&Object.entries(t).forEach(([s,i])=>{i&&i!=="false"&&(e==="style"?n.set(s.trim(),i):r(s))}),n}function Ud(e,t){return e.props=e.props||{},t&&Object.entries(t).forEach(([n,r])=>{if(r===null){e.props[n]=null;return}if(n==="class"||n==="style"){e.props[n]=nv(n,r);return}if(X_.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=t.type;if(t.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;t.type=o,e.props.type=o,e[n]=JSON.stringify(r)}else e[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?e.props[n]=i?s:!0:!r&&i&&s==="false"?e.props[n]="false":r!==void 0&&(e.props[n]=r)}),e}function rv(e,t){const n=typeof t=="object"&&typeof t!="function"?t:{[e==="script"||e==="noscript"||e==="style"?"innerHTML":"textContent"]:t},r=Ud({tag:e,props:{}},n);return r.key&&G_.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function sv(e,t){if(!e)return[];typeof e=="function"&&(e=e());const n=(s,i)=>{for(let o=0;o<t.length;o++)i=t[o](s,i);return i};e=n(void 0,e);const r=[];return e=ti(e,n),Object.entries(e||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push(rv(s,o))}),r.flat()}const Ho=(e,t)=>e._w===t._w?e._p-t._p:e._w-t._w,dl={base:-10,title:10},iv={critical:-8,high:-1,low:2},hl={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},ov=/@import/,wr=e=>e===""||e===!0;function av(e,t){var i;if(typeof t.tagPriority=="number")return t.tagPriority;let n=100;const r=iv[t.tagPriority]||0,s=e.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:hl;if(t.tag in dl)n=dl[t.tag];else if(t.tag==="meta"){const o=t.props["http-equiv"]==="content-security-policy"?"content-security-policy":t.props.charset?"charset":t.props.name==="viewport"?"viewport":null;o&&(n=hl.meta[o])}else t.tag==="link"&&t.props.rel?n=s.link[t.props.rel]:t.tag==="script"?wr(t.props.async)?n=s.script.async:t.props.src&&!wr(t.props.defer)&&!wr(t.props.async)&&t.props.type!=="module"&&!((i=t.props.type)!=null&&i.endsWith("json"))?n=s.script.sync:wr(t.props.defer)&&t.props.src&&!wr(t.props.async)&&(n=s.script.defer):t.tag==="style"&&(n=t.innerHTML&&ov.test(t.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function pl(e,t){const n=typeof t=="function"?t(e):t,r=n.key||String(e.plugins.size+1);e.plugins.get(r)||(e.plugins.set(r,n),e.hooks.addHooks(n.hooks||{}))}function cv(e={}){var a;const t=Ad();t.addHooks(e.hooks||{});const n=!e.document,r=new Map,s=new Map,i=new Set,o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:e,hooks:t,ssr:n,entries:r,headEntries(){return[...r.values()]},use:c=>pl(o,c),push(c,u){const l={...u||{}};delete l.head;const f=l._index??o._entryCount++,d={_i:f,input:c,options:l},p={_poll(_=!1){o.dirty=!0,!_&&i.add(f),t.callHook("entries:updated",o)},dispose(){r.delete(f)&&o.invalidate()},patch(_){(!l.mode||l.mode==="server"&&n||l.mode==="client"&&!n)&&(d.input=_,r.set(f,d),p._poll())}};return p.patch(c),p},async resolveTags(){var p;const c={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await t.callHook("entries:resolve",c);i.size;){const _=i.values().next().value;i.delete(_);const m=r.get(_);if(m){const S={tags:sv(m.input,e.propResolvers||[]).map(w=>Object.assign(w,m.options)),entry:m};await t.callHook("entries:normalize",S),m._tags=S.tags.map((w,b)=>(w._w=av(o,w),w._p=(m._i<<10)+b,w._d=Uo(w),w))}}let u=!1;c.entries.flatMap(_=>(_._tags||[]).map(m=>({...m,props:{...m.props}}))).sort(Ho).reduce((_,m)=>{const S=String(m._d||m._p);if(!_.has(S))return _.set(S,m);const w=_.get(S);if(((m==null?void 0:m.tagDuplicateStrategy)||(Q_.has(m.tag)?"merge":null)||(m.key&&m.key===w.key?"merge":null))==="merge"){const h={...w.props};Object.entries(m.props).forEach(([v,E])=>h[v]=v==="style"?new Map([...w.props.style||new Map,...E]):v==="class"?new Set([...w.props.class||new Set,...E]):E),_.set(S,{...m,props:h})}else m._p>>10===w._p>>10&&m.tag==="meta"&&Fd(S)?(_.set(S,Object.assign([...Array.isArray(w)?w:[w],m],m)),u=!0):(m._w===w._w?m._p>w._p:(m==null?void 0:m._w)<(w==null?void 0:w._w))&&_.set(S,m);return _},c.tagMap);const l=c.tagMap.get("title"),f=c.tagMap.get("titleTemplate");if(o._title=l==null?void 0:l.textContent,f){const _=f==null?void 0:f.textContent;if(o._titleTemplate=_,_){let m=typeof _=="function"?_(l==null?void 0:l.textContent):_;typeof m=="string"&&!o.plugins.has("template-params")&&(m=m.replace("%s",(l==null?void 0:l.textContent)||"")),l?m===null?c.tagMap.delete("title"):c.tagMap.set("title",{...l,textContent:m}):(f.tag="title",f.textContent=m)}}c.tags=Array.from(c.tagMap.values()),u&&(c.tags=c.tags.flat().sort(Ho)),await t.callHook("tags:beforeResolve",c),await t.callHook("tags:resolve",c),await t.callHook("tags:afterResolve",c);const d=[];for(const _ of c.tags){const{innerHTML:m,tag:S,props:w}=_;if(Y_.has(S)&&!(Object.keys(w).length===0&&!_.innerHTML&&!_.textContent)&&!(S==="meta"&&!w.content&&!w["http-equiv"]&&!w.charset)){if(S==="script"&&m){if((p=w.type)!=null&&p.endsWith("json")){const b=typeof m=="string"?m:JSON.stringify(m);_.innerHTML=b.replace(/</g,"\\u003C")}else typeof m=="string"&&(_.innerHTML=m.replace(new RegExp(`</${S}`,"g"),`<\\/${S}`));_._d=Uo(_)}d.push(_)}}return d},invalidate(){for(const c of r.values())i.add(c._i);o.dirty=!0,t.callHook("entries:updated",o)}};return((e==null?void 0:e.plugins)||[]).forEach(c=>pl(o,c)),o.hooks.callHook("init",o),(a=e.init)==null||a.forEach(c=>c&&o.push(c)),o}const Xt="%separator",lv=new RegExp(`${Xt}(?:\\s*${Xt})*`,"g");function uv(e,t,n=!1){var s;let r;if(t==="s"||t==="pageTitle")r=e.pageTitle;else if(t.includes(".")){const i=t.indexOf(".");r=(s=e[t.substring(0,i)])==null?void 0:s[t.substring(i+1)]}else r=e[t];if(r!==void 0)return n?(r||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function Ts(e,t,n,r=!1){if(typeof e!="string"||!e.includes("%"))return e;let s=e;try{s=decodeURI(e)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return e;const o=e.includes(Xt);return e=e.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Xt||!i.includes(a))return a;const c=uv(t,a.slice(1),r);return c!==void 0?c:a}).trim(),o&&(e.endsWith(Xt)&&(e=e.slice(0,-Xt.length)),e.startsWith(Xt)&&(e=e.slice(Xt.length)),e=e.replace(lv,n||"").trim()),e}const gl=e=>e.includes(":key")?e:e.split(":").join(":key:"),fv={key:"aliasSorting",hooks:{"tags:resolve":e=>{let t=!1;for(const n of e.tags){const r=n.tagPriority;if(!r)continue;const s=String(r);if(s.startsWith("before:")){const i=gl(s.slice(7)),o=e.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,t=!0)}else if(s.startsWith("after:")){const i=gl(s.slice(6)),o=e.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,t=!0)}}t&&(e.tags=e.tags.sort(Ho))}}},dv={key:"deprecations",hooks:{"entries:normalize":({tags:e})=>{for(const t of e)t.props.children&&(t.innerHTML=t.props.children,delete t.props.children),t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.body&&(t.tagPosition="bodyClose",delete t.props.body)}}};async function jo(e){if(typeof e==="function")return e;if(e instanceof Promise)return await e;if(Array.isArray(e))return await Promise.all(e.map(n=>jo(n)));if((e==null?void 0:e.constructor)===Object){const n={};for(const r of Object.keys(e))n[r]=await jo(e[r]);return n}return e}const hv={key:"promises",hooks:{"entries:resolve":async e=>{const t=[];for(const n in e.entries)e.entries[n]._promisesProcessed||t.push(jo(e.entries[n].input).then(r=>{e.entries[n].input=r,e.entries[n]._promisesProcessed=!0}));await Promise.all(t)}}},pv={meta:"content",link:"href",htmlAttrs:"lang"},gv=["innerHTML","textContent"],mv=e=>({key:"template-params",hooks:{"entries:normalize":t=>{var r,s,i;const n=((s=(r=t.tags.filter(o=>o.tag==="templateParams"&&o.mode==="server"))==null?void 0:r[0])==null?void 0:s.props)||{};Object.keys(n).length&&(e._ssrPayload={templateParams:{...((i=e._ssrPayload)==null?void 0:i.templateParams)||{},...n}})},"tags:resolve":({tagMap:t,tags:n})=>{var i;const r=((i=t.get("templateParams"))==null?void 0:i.props)||{},s=r.separator||"|";delete r.separator,r.pageTitle=Ts(r.pageTitle||e._title||"",r,s);for(const o of n){if(o.processTemplateParams===!1)continue;const a=pv[o.tag];if(a&&typeof o.props[a]=="string")o.props[a]=Ts(o.props[a],r,s);else if(o.processTemplateParams||o.tag==="titleTemplate"||o.tag==="title")for(const c of gv)typeof o[c]=="string"&&(o[c]=Ts(o[c],r,s,o.tag==="script"&&o.props.type.endsWith("json")))}e._templateParams=r,e._separator=s},"tags:afterResolve":({tagMap:t})=>{const n=t.get("title");n!=null&&n.textContent&&n.processTemplateParams!==!1&&(n.textContent=Ts(n.textContent,e._templateParams,e._separator))}}}),yv=(e,t)=>Se(t)?gg(t):t,Hd="usehead";function _v(e){return{install(n){n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Hd,e)}}.install}function vv(){if(Oa()){const e=Ge(Hd);if(!e)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return e}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function NT(e,t={}){const n=t.head||vv();return n.ssr?n.push(e||{},t):bv(n,e,t)}function bv(e,t,n={}){const r=xt(!1);let s;return um(()=>{const o=r.value?{}:ti(t,yv);s?s.patch(o):s=e.push(o,n)}),bi()&&(ss(()=>{s.dispose()}),Rf(()=>{r.value=!0}),Pf(()=>{r.value=!1})),s}const wv="modulepreload",Ev=function(e,t){return new URL(e,t).href},ml={},rn=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(l){return Promise.all(l.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(l=>{if(l=Ev(l,r),l in ml)return;ml[l]=!0;const f=l.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(!!r)for(let m=a.length-1;m>=0;m--){const S=a[m];if(S.href===l&&(!f||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":wv,f||(_.as="script"),_.crossOrigin="",_.href=l,u&&_.setAttribute("nonce",u),document.head.appendChild(_),f)return new Promise((m,S)=>{_.addEventListener("load",m),_.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};let Ns,Ms;function Sv(){return Ns=$fetch(ja(`builds/meta/${os().app.buildId}.json`),{responseType:"json"}),Ns.then(e=>{Ms=A_(e.matcher)}).catch(e=>{console.error("[nuxt] Error fetching app manifest.",e)}),Ns}function Si(){return Ns||Sv()}async function $a(e){const t=typeof e=="string"?e:e.path;if(await Si(),!Ms)return console.error("[nuxt] Error creating app manifest matcher.",Ms),{};try{return xd({},...Ms.matchAll(t).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function yl(e,t={}){if(!await $d(e))return null;const r=await Tv(e,t);return await jd(r)||null}const Iv="_payload.json";async function Tv(e,t={}){const n=new URL(e,"http://localhost");if(n.host!=="localhost"||Dn(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+e);const r=os(),s=t.hash||(t.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await $d(e)?i:r.app.baseURL;return Ua(o,n.pathname,Iv+(s?`?${s}`:""))}async function jd(e){const t=fetch(e,{cache:"force-cache"}).then(n=>n.text().then(Bd));try{return await t}catch(n){console.warn("[nuxt] Cannot load payload ",e,n)}return null}async function $d(e=Md().path){const t=Te();return e=Kr(e),(await Si()).prerendered.includes(e)?!0:t.runWithContext(async()=>{const r=await $a({path:e});return!!r.prerender&&!r.redirect})}let vn=null;async function Cv(){var r;if(vn)return vn;const e=document.getElementById("__NUXT_DATA__");if(!e)return{};const t=await Bd(e.textContent||""),n=e.dataset.src?await jd(e.dataset.src):void 0;return vn={...t,...n,...window.__NUXT__},(r=vn.config)!=null&&r.public&&(vn.config.public=hn(vn.config.public)),vn}async function Bd(e){return await z_(e,Te()._payloadRevivers)}function Av(e,t){Te()._payloadRevivers[e]=t}const kv=[["NuxtError",e=>Pn(e)],["EmptyShallowRef",e=>$r(e==="_"?void 0:e==="0n"?BigInt(0):Xs(e))],["EmptyRef",e=>xt(e==="_"?void 0:e==="0n"?BigInt(0):Xs(e))],["ShallowRef",e=>$r(e)],["ShallowReactive",e=>Pt(e)],["Ref",e=>xt(e)],["Reactive",e=>hn(e)]],Pv=lt({name:"nuxt:revive-payload:client",order:-30,async setup(e){let t,n;for(const[r,s]of kv)Av(r,s);Object.assign(e.payload,([t,n]=Zn(()=>e.runWithContext(Cv)),t=await t,n(),t)),window.__NUXT__=e.payload}});async function Ba(e,t={}){const n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;const r={shouldRender:!0,tags:[]};if(await e.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return e._domUpdatePromise||(e._domUpdatePromise=new Promise(async s=>{var p;const i=new Map,o=new Promise(_=>{e.resolveTags().then(m=>{_(m.map(S=>{const w=i.get(S._d)||0,b={tag:S,id:(w?`${S._d}:${w}`:S._d)||fl(S),shouldRender:!0};return S._d&&Fd(S._d)&&i.set(S._d,w+1),b}))})});let a=e._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const _ of["body","head"]){const m=(p=n[_])==null?void 0:p.children;for(const S of m){const w=S.tagName.toLowerCase();if(!ul.has(w))continue;const b=Ud({tag:w,props:{}},{innerHTML:S.innerHTML,...S.getAttributeNames().reduce((h,v)=>(h[v]=S.getAttribute(v),h),{})||{}});if(b.key=S.getAttribute("data-hid")||void 0,b._d=Uo(b)||fl(b),a.elMap.has(b._d)){let h=1,v=b._d;for(;a.elMap.has(v);)v=`${b._d}:${h++}`;a.elMap.set(v,S)}else a.elMap.set(b._d,S)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function c(_,m,S){const w=`${_}:${m}`;a.sideEffects[w]=S,delete a.pendingSideEffects[w]}function u({id:_,$el:m,tag:S}){const w=S.tag.endsWith("Attrs");a.elMap.set(_,m),w||(S.textContent&&S.textContent!==m.textContent&&(m.textContent=S.textContent),S.innerHTML&&S.innerHTML!==m.innerHTML&&(m.innerHTML=S.innerHTML),c(_,"el",()=>{m==null||m.remove(),a.elMap.delete(_)}));for(const b in S.props){if(!Object.prototype.hasOwnProperty.call(S.props,b))continue;const h=S.props[b];if(b.startsWith("on")&&typeof h=="function"){const E=m==null?void 0:m.dataset;if(E&&E[`${b}fired`]){const T=b.slice(0,-5);h.call(m,new Event(T.substring(2)))}m.getAttribute(`data-${b}`)!==""&&((S.tag==="bodyAttrs"?n.defaultView:m).addEventListener(b.substring(2),h.bind(m)),m.setAttribute(`data-${b}`,""));continue}const v=`attr:${b}`;if(b==="class"){if(!h)continue;for(const E of h)w&&c(_,`${v}:${E}`,()=>m.classList.remove(E)),!m.classList.contains(E)&&m.classList.add(E)}else if(b==="style"){if(!h)continue;for(const[E,T]of h)c(_,`${v}:${E}`,()=>{m.style.removeProperty(E)}),m.style.setProperty(E,T)}else h!==!1&&h!==null&&(m.getAttribute(b)!==h&&m.setAttribute(b,h===!0?"":String(h)),w&&c(_,v,()=>m.removeAttribute(b)))}}const l=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},d=await o;for(const _ of d){const{tag:m,shouldRender:S,id:w}=_;if(S){if(m.tag==="title"){n.title=m.textContent,c("title","",()=>n.title=a.title);continue}_.$el=_.$el||a.elMap.get(w),_.$el?u(_):ul.has(m.tag)&&l.push(_)}}for(const _ of l){const m=_.tag.tagPosition||"head";_.$el=n.createElement(_.tag.tag),u(_),f[m]=f[m]||n.createDocumentFragment(),f[m].appendChild(_.$el)}for(const _ of d)await e.hooks.callHook("dom:renderTag",_,n,c);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose);for(const _ in a.pendingSideEffects)a.pendingSideEffects[_]();e._dom=a,await e.hooks.callHook("dom:rendered",{renders:d}),s()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1})),e._domUpdatePromise}function Rv(e={}){var r,s,i;const t=((r=e.domOptions)==null?void 0:r.render)||Ba;e.document=e.document||(typeof window<"u"?document:void 0);const n=((i=(s=e.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return cv({...e,plugins:[...e.plugins||[],{key:"client",hooks:{"entries:updated":t}}],init:[n?JSON.parse(n):!1,...e.init||[]]})}function Ov(e,t){let n=0;return()=>{const r=++n;t(()=>{n===r&&e()})}}function xv(e={}){const t=Rv({domOptions:{render:Ov(()=>Ba(t),n=>setTimeout(n,0))},...e});return t.install=_v(t),t}const Nv={disableDefaults:!0,disableCapoSorting:!1,plugins:[dv,hv,mv,fv]},Mv=lt({name:"nuxt:head",enforce:"pre",setup(e){const t=xv(Nv);e.vueApp.use(t);{let n=!0;const r=async()=>{n=!1,await Ba(t)};t.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),e.hooks.hook("page:start",()=>{n=!0}),e.hooks.hook("page:finish",()=>{e.isHydrating||r()}),e.hooks.hook("app:error",r),e.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Bn=typeof document<"u";function Wd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Lv(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Wd(e.default)}const ae=Object.assign;function Xi(e,t){const n={};for(const r in t){const s=t[r];n[r]=ct(s)?s.map(e):e(s)}return n}const xr=()=>{},ct=Array.isArray,Vd=/#/g,Dv=/&/g,Fv=/\//g,Uv=/=/g,Hv=/\?/g,zd=/\+/g,jv=/%5B/g,$v=/%5D/g,Kd=/%5E/g,Bv=/%60/g,Gd=/%7B/g,Wv=/%7C/g,qd=/%7D/g,Vv=/%20/g;function Wa(e){return encodeURI(""+e).replace(Wv,"|").replace(jv,"[").replace($v,"]")}function zv(e){return Wa(e).replace(Gd,"{").replace(qd,"}").replace(Kd,"^")}function $o(e){return Wa(e).replace(zd,"%2B").replace(Vv,"+").replace(Vd,"%23").replace(Dv,"%26").replace(Bv,"`").replace(Gd,"{").replace(qd,"}").replace(Kd,"^")}function Kv(e){return $o(e).replace(Uv,"%3D")}function Gv(e){return Wa(e).replace(Vd,"%23").replace(Hv,"%3F")}function qv(e){return e==null?"":Gv(e).replace(Fv,"%2F")}function Gr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Yv=/\/$/,Jv=e=>e.replace(Yv,"");function Qi(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=eb(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Gr(o)}}function Xv(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _l(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Qv(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&cr(t.matched[r],n.matched[s])&&Yd(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function cr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Yd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Zv(e[n],t[n]))return!1;return!0}function Zv(e,t){return ct(e)?vl(e,t):ct(t)?vl(t,e):e===t}function vl(e,t){return ct(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function eb(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Xe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var qr;(function(e){e.pop="pop",e.push="push"})(qr||(qr={}));var Nr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Nr||(Nr={}));function tb(e){if(!e)if(Bn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Jv(e)}const nb=/^[^#]+#/;function rb(e,t){return e.replace(nb,"#")+t}function sb(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ii=()=>({left:window.scrollX,top:window.scrollY});function ib(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=sb(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function bl(e,t){return(history.state?history.state.position-t:-1)+e}const Bo=new Map;function ob(e,t){Bo.set(e,t)}function ab(e){const t=Bo.get(e);return Bo.delete(e),t}let cb=()=>location.protocol+"//"+location.host;function Jd(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),_l(c,"")}return _l(n,e)+r+s}function lb(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=Jd(e,location),_=n.value,m=t.value;let S=0;if(d){if(n.value=p,t.value=d,o&&o===_){o=null;return}S=m?d.position-m.position:0}else r(p);s.forEach(w=>{w(n.value,_,{delta:S,type:qr.pop,direction:S?S>0?Nr.forward:Nr.back:Nr.unknown})})};function c(){o=n.value}function u(d){s.push(d);const p=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return i.push(p),p}function l(){const{history:d}=window;d.state&&d.replaceState(ae({},d.state,{scroll:Ii()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function wl(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Ii():null}}function ub(e){const{history:t,location:n}=window,r={value:Jd(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:cb()+e+c;try{t[l?"replaceState":"pushState"](u,"",d),s.value=u}catch(p){console.error(p),n[l?"replace":"assign"](d)}}function o(c,u){const l=ae({},t.state,wl(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=ae({},s.value,t.state,{forward:c,scroll:Ii()});i(l.current,l,!0);const f=ae({},wl(r.value,c,null),{position:l.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function fb(e){e=tb(e);const t=ub(e),n=lb(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ae({location:"",base:e,go:r,createHref:rb.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function db(e){return typeof e=="string"||e&&typeof e=="object"}function Xd(e){return typeof e=="string"||typeof e=="symbol"}const Qd=Symbol("");var El;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(El||(El={}));function lr(e,t){return ae(new Error,{type:e,[Qd]:!0},t)}function It(e,t){return e instanceof Error&&Qd in e&&(t==null||!!(e.type&t))}const Sl="[^/]+?",hb={sensitive:!1,strict:!1,start:!0,end:!0},pb=/[.+*?^${}()[\]/\\]/g;function gb(e,t){const n=ae({},hb,t),r=[];let s=n.start?"^":"";const i=[];for(const u of e){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const d=u[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(pb,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:m,optional:S,regexp:w}=d;i.push({name:_,repeatable:m,optional:S});const b=w||Sl;if(b!==Sl){p+=10;try{new RegExp(`(${b})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+v.message)}}let h=m?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(h=S&&u.length<2?`(?:/${h})`:"/"+h),S&&(h+="?"),s+=h,p+=20,S&&(p+=-8),m&&(p+=-20),b===".*"&&(p+=-50)}l.push(p)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),f={};if(!l)return null;for(let d=1;d<l.length;d++){const p=l[d]||"",_=i[d-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function c(u){let l="",f=!1;for(const d of e){(!f||!l.endsWith("/"))&&(l+="/"),f=!1;for(const p of d)if(p.type===0)l+=p.value;else if(p.type===1){const{value:_,repeatable:m,optional:S}=p,w=_ in u?u[_]:"";if(ct(w)&&!m)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=ct(w)?w.join("/"):w;if(!b)if(S)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);l+=b}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function mb(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Zd(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=mb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Il(r))return 1;if(Il(s))return-1}return s.length-r.length}function Il(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const yb={type:0,value:""},_b=/[a-zA-Z0-9_]/;function vb(e){if(!e)return[[]];if(e==="/")return[[yb]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:_b.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function bb(e,t,n){const r=gb(vb(e.path),n),s=ae(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function wb(e,t){const n=[],r=new Map;t=kl({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function i(f,d,p){const _=!p,m=Cl(f);m.aliasOf=p&&p.record;const S=kl(t,f),w=[m];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const E of v)w.push(Cl(ae({},m,{components:p?p.record.components:m.components,path:E,aliasOf:p?p.record:m})))}let b,h;for(const v of w){const{path:E}=v;if(d&&E[0]!=="/"){const T=d.record.path,k=T[T.length-1]==="/"?"":"/";v.path=d.record.path+(E&&k+E)}if(b=bb(v,d,S),p?p.alias.push(b):(h=h||b,h!==b&&h.alias.push(b),_&&f.name&&!Al(b)&&o(f.name)),eh(b)&&c(b),m.children){const T=m.children;for(let k=0;k<T.length;k++)i(T[k],b,p&&p.children[k])}p=p||b}return h?()=>{o(h)}:xr}function o(f){if(Xd(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const d=Ib(f,n);n.splice(d,0,f),f.record.name&&!Al(f)&&r.set(f.record.name,f)}function u(f,d){let p,_={},m,S;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw lr(1,{location:f});S=p.record.name,_=ae(Tl(d.params,p.keys.filter(h=>!h.optional).concat(p.parent?p.parent.keys.filter(h=>h.optional):[]).map(h=>h.name)),f.params&&Tl(f.params,p.keys.map(h=>h.name))),m=p.stringify(_)}else if(f.path!=null)m=f.path,p=n.find(h=>h.re.test(m)),p&&(_=p.parse(m),S=p.record.name);else{if(p=d.name?r.get(d.name):n.find(h=>h.re.test(d.path)),!p)throw lr(1,{location:f,currentLocation:d});S=p.record.name,_=ae({},d.params,f.params),m=p.stringify(_)}const w=[];let b=p;for(;b;)w.unshift(b.record),b=b.parent;return{name:S,path:m,params:_,matched:w,meta:Sb(w)}}e.forEach(f=>i(f));function l(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:l,getRoutes:a,getRecordMatcher:s}}function Tl(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Cl(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Eb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Eb(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Al(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Sb(e){return e.reduce((t,n)=>ae(t,n.meta),{})}function kl(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ib(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Zd(e,t[i])<0?r=i:n=i+1}const s=Tb(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Tb(e){let t=e;for(;t=t.parent;)if(eh(t)&&Zd(e,t)===0)return t}function eh({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Cb(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(zd," "),o=i.indexOf("="),a=Gr(o<0?i:i.slice(0,o)),c=o<0?null:Gr(i.slice(o+1));if(a in t){let u=t[a];ct(u)||(u=t[a]=[u]),u.push(c)}else t[a]=c}return t}function Pl(e){let t="";for(let n in e){const r=e[n];if(n=Kv(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ct(r)?r.map(i=>i&&$o(i)):[r&&$o(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Ab(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ct(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const kb=Symbol(""),Rl=Symbol(""),Va=Symbol(""),th=Symbol(""),Wo=Symbol("");function Er(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Qt(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=d=>{d===!1?c(lr(4,{from:n,to:t})):d instanceof Error?c(d):db(d)?c(lr(2,{from:t,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},l=i(()=>e.call(r&&r.instances[s],t,n,u));let f=Promise.resolve(l);e.length<3&&(f=f.then(u)),f.catch(d=>c(d))})}function Zi(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Wd(c)){const l=(c.__vccOpts||c)[t];l&&i.push(Qt(l,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Lv(l)?l.default:l;o.mods[a]=l,o.components[a]=f;const p=(f.__vccOpts||f)[t];return p&&Qt(p,n,r,o,a,s)()}))}}return i}function Ol(e){const t=Ge(Va),n=Ge(th),r=Ae(()=>{const c=ye(e.to);return t.resolve(c)}),s=Ae(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],f=n.matched;if(!l||!f.length)return-1;const d=f.findIndex(cr.bind(null,l));if(d>-1)return d;const p=xl(c[u-2]);return u>1&&xl(l)===p&&f[f.length-1].path!==p?f.findIndex(cr.bind(null,c[u-2])):d}),i=Ae(()=>s.value>-1&&Nb(n.params,r.value.params)),o=Ae(()=>s.value>-1&&s.value===n.matched.length-1&&Yd(n.params,r.value.params));function a(c={}){if(xb(c)){const u=t[ye(e.replace)?"replace":"push"](ye(e.to)).catch(xr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ae(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Pb(e){return e.length===1?e[0]:e}const Rb=gr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ol,setup(e,{slots:t}){const n=hn(Ol(e)),{options:r}=Ge(Va),s=Ae(()=>({[Nl(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Nl(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Pb(t.default(n));return e.custom?i:Ke("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ob=Rb;function xb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Nb(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ct(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function xl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Nl=(e,t,n)=>e??t??n,Mb=gr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ge(Wo),s=Ae(()=>e.route||r.value),i=Ge(Rl,0),o=Ae(()=>{let u=ye(i);const{matched:l}=s.value;let f;for(;(f=l[u])&&!f.components;)u++;return u}),a=Ae(()=>s.value.matched[o.value]);Xn(Rl,Ae(()=>o.value+1)),Xn(kb,a),Xn(Wo,s);const c=xt();return An(()=>[c.value,a.value,e.name],([u,l,f],[d,p,_])=>{l&&(l.instances[f]=u,p&&p!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),u&&l&&(!p||!cr(l,p)||!d)&&(l.enterCallbacks[f]||[]).forEach(m=>m(u))},{flush:"post"}),()=>{const u=s.value,l=e.name,f=a.value,d=f&&f.components[l];if(!d)return Ml(n.default,{Component:d,route:u});const p=f.props[l],_=p?p===!0?u.params:typeof p=="function"?p(u):p:null,S=Ke(d,ae({},_,t,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(f.instances[l]=null)},ref:c}));return Ml(n.default,{Component:S,route:u})||S}}});function Ml(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const nh=Mb;function Lb(e){const t=wb(e.routes,e),n=e.parseQuery||Cb,r=e.stringifyQuery||Pl,s=e.history,i=Er(),o=Er(),a=Er(),c=$r(Xe);let u=Xe;Bn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Xi.bind(null,A=>""+A),f=Xi.bind(null,qv),d=Xi.bind(null,Gr);function p(A,$){let H,z;return Xd(A)?(H=t.getRecordMatcher(A),z=$):z=A,t.addRoute(z,H)}function _(A){const $=t.getRecordMatcher(A);$&&t.removeRoute($)}function m(){return t.getRoutes().map(A=>A.record)}function S(A){return!!t.getRecordMatcher(A)}function w(A,$){if($=ae({},$||c.value),typeof A=="string"){const y=Qi(n,A,$.path),I=t.resolve({path:y.path},$),P=s.createHref(y.fullPath);return ae(y,I,{params:d(I.params),hash:Gr(y.hash),redirectedFrom:void 0,href:P})}let H;if(A.path!=null)H=ae({},A,{path:Qi(n,A.path,$.path).path});else{const y=ae({},A.params);for(const I in y)y[I]==null&&delete y[I];H=ae({},A,{params:f(y)}),$.params=f($.params)}const z=t.resolve(H,$),oe=A.hash||"";z.params=l(d(z.params));const me=Xv(r,ae({},A,{hash:zv(oe),path:z.path})),g=s.createHref(me);return ae({fullPath:me,hash:oe,query:r===Pl?Ab(A.query):A.query||{}},z,{redirectedFrom:void 0,href:g})}function b(A){return typeof A=="string"?Qi(n,A,c.value.path):ae({},A)}function h(A,$){if(u!==A)return lr(8,{from:$,to:A})}function v(A){return k(A)}function E(A){return v(ae(b(A),{replace:!0}))}function T(A){const $=A.matched[A.matched.length-1];if($&&$.redirect){const{redirect:H}=$;let z=typeof H=="function"?H(A):H;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=b(z):{path:z},z.params={}),ae({query:A.query,hash:A.hash,params:z.path!=null?{}:A.params},z)}}function k(A,$){const H=u=w(A),z=c.value,oe=A.state,me=A.force,g=A.replace===!0,y=T(H);if(y)return k(ae(b(y),{state:typeof y=="object"?ae({},oe,y.state):oe,force:me,replace:g}),$||H);const I=H;I.redirectedFrom=$;let P;return!me&&Qv(r,z,H)&&(P=lr(16,{to:I,from:z}),ut(z,z,!0,!1)),(P?Promise.resolve(P):M(I,z)).catch(C=>It(C)?It(C,2)?C:Wt(C):V(C,I,z)).then(C=>{if(C){if(It(C,2))return k(ae({replace:g},b(C.to),{state:typeof C.to=="object"?ae({},oe,C.to.state):oe,force:me}),$||I)}else C=N(I,z,!0,g,oe);return q(I,z,C),C})}function B(A,$){const H=h(A,$);return H?Promise.reject(H):Promise.resolve()}function L(A){const $=Un.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(A):A()}function M(A,$){let H;const[z,oe,me]=Db(A,$);H=Zi(z.reverse(),"beforeRouteLeave",A,$);for(const y of z)y.leaveGuards.forEach(I=>{H.push(Qt(I,A,$))});const g=B.bind(null,A,$);return H.push(g),Ye(H).then(()=>{H=[];for(const y of i.list())H.push(Qt(y,A,$));return H.push(g),Ye(H)}).then(()=>{H=Zi(oe,"beforeRouteUpdate",A,$);for(const y of oe)y.updateGuards.forEach(I=>{H.push(Qt(I,A,$))});return H.push(g),Ye(H)}).then(()=>{H=[];for(const y of me)if(y.beforeEnter)if(ct(y.beforeEnter))for(const I of y.beforeEnter)H.push(Qt(I,A,$));else H.push(Qt(y.beforeEnter,A,$));return H.push(g),Ye(H)}).then(()=>(A.matched.forEach(y=>y.enterCallbacks={}),H=Zi(me,"beforeRouteEnter",A,$,L),H.push(g),Ye(H))).then(()=>{H=[];for(const y of o.list())H.push(Qt(y,A,$));return H.push(g),Ye(H)}).catch(y=>It(y,8)?y:Promise.reject(y))}function q(A,$,H){a.list().forEach(z=>L(()=>z(A,$,H)))}function N(A,$,H,z,oe){const me=h(A,$);if(me)return me;const g=$===Xe,y=Bn?history.state:{};H&&(z||g?s.replace(A.fullPath,ae({scroll:g&&y&&y.scroll},oe)):s.push(A.fullPath,oe)),c.value=A,ut(A,$,H,g),Wt()}let Y;function ne(){Y||(Y=s.listen((A,$,H)=>{if(!gs.listening)return;const z=w(A),oe=T(z);if(oe){k(ae(oe,{replace:!0,force:!0}),z).catch(xr);return}u=z;const me=c.value;Bn&&ob(bl(me.fullPath,H.delta),Ii()),M(z,me).catch(g=>It(g,12)?g:It(g,2)?(k(ae(b(g.to),{force:!0}),z).then(y=>{It(y,20)&&!H.delta&&H.type===qr.pop&&s.go(-1,!1)}).catch(xr),Promise.reject()):(H.delta&&s.go(-H.delta,!1),V(g,z,me))).then(g=>{g=g||N(z,me,!1),g&&(H.delta&&!It(g,8)?s.go(-H.delta,!1):H.type===qr.pop&&It(g,20)&&s.go(-1,!1)),q(z,me,g)}).catch(xr)}))}let ie=Er(),W=Er(),te;function V(A,$,H){Wt(A);const z=W.list();return z.length?z.forEach(oe=>oe(A,$,H)):console.error(A),Promise.reject(A)}function ve(){return te&&c.value!==Xe?Promise.resolve():new Promise((A,$)=>{ie.add([A,$])})}function Wt(A){return te||(te=!A,ne(),ie.list().forEach(([$,H])=>A?H(A):$()),ie.reset()),A}function ut(A,$,H,z){const{scrollBehavior:oe}=e;if(!Bn||!oe)return Promise.resolve();const me=!H&&ab(bl(A.fullPath,0))||(z||!H)&&history.state&&history.state.scroll||null;return Br().then(()=>oe(A,$,me)).then(g=>g&&ib(g)).catch(g=>V(g,A,$))}const Fe=A=>s.go(A);let Fn;const Un=new Set,gs={currentRoute:c,listening:!0,addRoute:p,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:m,resolve:w,options:e,push:v,replace:E,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:ve,install(A){const $=this;A.component("RouterLink",Ob),A.component("RouterView",nh),A.config.globalProperties.$router=$,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(c)}),Bn&&!Fn&&c.value===Xe&&(Fn=!0,v(s.location).catch(oe=>{}));const H={};for(const oe in Xe)Object.defineProperty(H,oe,{get:()=>c.value[oe],enumerable:!0});A.provide(Va,$),A.provide(th,Pt(H)),A.provide(Wo,c);const z=A.unmount;Un.add(A),A.unmount=function(){Un.delete(A),Un.size<1&&(u=Xe,Y&&Y(),Y=null,c.value=Xe,Fn=!1,te=!1),z()}}};function Ye(A){return A.reduce(($,H)=>$.then(()=>L(H)),Promise.resolve())}return gs}function Db(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(u=>cr(u,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(u=>cr(u,c))||s.push(c))}return[n,r,s]}const Fb=/(:\w+)\([^)]+\)/g,Ub=/(:\w+)[?+*]/g,Hb=/:\w+/g,jb=(e,t)=>t.path.replace(Fb,"$1").replace(Ub,"$1").replace(Hb,n=>{var r;return((r=e.params[n.slice(1)])==null?void 0:r.toString())||""}),Vo=(e,t)=>{const n=e.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===e.Component.type}),r=t??(n==null?void 0:n.meta.key)??(n&&jb(e.route,n));return typeof r=="function"?r(e.route):r},$b=(e,t)=>({default:()=>e?Ke(Fg,e===!0?{}:e,t):t});function za(e){return Array.isArray(e)?e:[e]}const Bb={layout:"auth"},Wb={layout:"auth"},eo=[{name:"index",path:"/",meta:Bb||{},component:()=>rn(()=>import("./CM3INss3.js"),__vite__mapDeps([0,1,2]),import.meta.url)},{name:"login",path:"/login",meta:Wb||{},component:()=>rn(()=>import("./ydd8zzSK.js"),__vite__mapDeps([3,1,4,5]),import.meta.url)},{name:"dashboard",path:"/dashboard",component:()=>rn(()=>import("./Chp6Y_14.js"),__vite__mapDeps([6,7,8,1,4]),import.meta.url)},{name:"test-firebase",path:"/test-firebase",component:()=>rn(()=>import("./DLpKP5_R.js"),[],import.meta.url)}],Vb=(e,t)=>({default:()=>{var n;return e?Ke($m,e===!0?{}:e,t):(n=t.default)==null?void 0:n.call(t)}}),zb=/(:\w+)\([^)]+\)/g,Kb=/(:\w+)[?+*]/g,Gb=/:\w+/g;function Ll(e){const t=(e==null?void 0:e.meta.key)??e.path.replace(zb,"$1").replace(Kb,"$1").replace(Gb,n=>{var r;return((r=e.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof t=="function"?t(e):t}function qb(e,t){return e===t||t===Xe?!1:Ll(e)!==Ll(t)?!0:!e.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=t.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const Yb={scrollBehavior(e,t,n){var c;const r=Te(),s=((c=et().options)==null?void 0:c.scrollBehaviorType)??"auto";if(e.path===t.path)return t.hash&&!e.hash?{left:0,top:0}:e.hash?{el:e.hash,top:rh(e.hash),behavior:s}:!1;if((typeof e.meta.scrollToTop=="function"?e.meta.scrollToTop(e,t):e.meta.scrollToTop)===!1)return!1;let o=n||void 0;!o&&qb(e,t)&&(o={left:0,top:0});const a=r._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(u=>{if(t===Xe){u(Dl(e,"instant",o));return}r.hooks.hookOnce(a,()=>{requestAnimationFrame(()=>u(Dl(e,"instant",o)))})})}};function rh(e){try{const t=document.querySelector(e);if(t)return(Number.parseFloat(getComputedStyle(t).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function Dl(e,t,n){return n||(e.hash?{el:e.hash,top:rh(e.hash),behavior:t}:{left:0,top:0,behavior:t})}const Jb={hashMode:!1,scrollBehaviorType:"auto"},dt={...Jb,...Yb},Xb=async(e,t)=>{var o;let n,r;if(!((o=e.meta)!=null&&o.validate))return;const s=([n,r]=Zn(()=>Promise.resolve(e.meta.validate(e))),n=await n,r(),n);if(s===!0)return;const i=Pn({fatal:!0,statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${e.fullPath}`,data:{path:e.fullPath}});return typeof window<"u"&&window.history.pushState({},"",t.fullPath),i},Qb=async e=>{let t,n;const r=([t,n]=Zn(()=>$a({path:e.path})),t=await t,n(),t);if(r.redirect)return Dn(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},Zb=[Xb,Qb],Mr={};function e0(e,t,n){const{pathname:r,search:s,hash:i}=t,o=e.indexOf("#");if(o>-1){const u=i.includes(e.slice(o))?e.slice(o).length:1;let l=i.slice(u);return l[0]!=="/"&&(l="/"+l),el(l,"")}const a=el(r,e),c=!n||jy(a,n)?a:n;return c+(c.includes("?")?"":s)+i}const t0=lt({name:"nuxt:router",enforce:"pre",async setup(e){var S;let t,n,r=os().app.baseURL;const s=((S=dt.history)==null?void 0:S.call(dt,r))??fb(r),i=dt.routes?([t,n]=Zn(()=>dt.routes(eo)),t=await t,n(),t??eo):eo;let o;const a=Lb({...dt,scrollBehavior:(w,b,h)=>{if(b===Xe){o=h;return}if(dt.scrollBehavior){if(a.options.scrollBehavior=dt.scrollBehavior,"scrollRestoration"in window.history){const v=a.beforeEach(()=>{v(),window.history.scrollRestoration="manual"})}return dt.scrollBehavior(w,Xe,o||h)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),e.vueApp.use(a);const c=$r(a.currentRoute.value);a.afterEach((w,b)=>{c.value=b}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=e0(r,window.location,e.payload.path),l=$r(a.currentRoute.value),f=()=>{l.value=a.currentRoute.value};e.hook("page:finish",f),a.afterEach((w,b)=>{var h,v,E,T;((v=(h=w.matched[0])==null?void 0:h.components)==null?void 0:v.default)===((T=(E=b.matched[0])==null?void 0:E.components)==null?void 0:T.default)&&f()});const d={};for(const w in l.value)Object.defineProperty(d,w,{get:()=>l.value[w],enumerable:!0});e._route=Pt(d),e._middleware||(e._middleware={global:[],named:{}});const p=Ei();a.afterEach(async(w,b,h)=>{delete e._processingMiddleware,!e.isHydrating&&p.value&&await e.runWithContext(D_),h&&await e.callHook("page:loading:end")});try{[t,n]=Zn(()=>a.isReady()),await t,n()}catch(w){[t,n]=Zn(()=>e.runWithContext(()=>wn(w))),await t,n()}const _=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;f();const m=e.payload.state._layout;return a.beforeEach(async(w,b)=>{var h;await e.callHook("page:loading:start"),w.meta=hn(w.meta),e.isHydrating&&m&&!ln(w.meta.layout)&&(w.meta.layout=m),e._processingMiddleware=!0;{const v=new Set([...Zb,...e._middleware.global]);for(const E of w.matched){const T=E.meta.middleware;if(T)for(const k of za(T))v.add(k)}{const E=await e.runWithContext(()=>$a({path:w.path}));if(E.appMiddleware)for(const T in E.appMiddleware)E.appMiddleware[T]?v.add(T):v.delete(T)}for(const E of v){const T=typeof E=="string"?e._middleware.named[E]||await((h=Mr[E])==null?void 0:h.call(Mr).then(k=>k.default||k)):E;if(!T)throw new Error(`Unknown route middleware: '${E}'.`);try{const k=await e.runWithContext(()=>T(w,b));if(!e.payload.serverRendered&&e.isHydrating&&(k===!1||k instanceof Error)){const B=k||Pn({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await e.runWithContext(()=>wn(B)),!1}if(k===!0)continue;if(k===!1)return k;if(k)return Dd(k)&&k.fatal&&await e.runWithContext(()=>wn(k)),k}catch(k){const B=Pn(k);return B.fatal&&await e.runWithContext(()=>wn(B)),B}}}}),a.onError(async()=>{delete e._processingMiddleware,await e.callHook("page:loading:end")}),a.afterEach(async(w,b)=>{w.matched.length===0&&await e.runWithContext(()=>wn(Pn({statusCode:404,fatal:!1,statusMessage:`Page not found: ${w.fullPath}`,data:{path:w.fullPath}})))}),e.hooks.hookOnce("app:created",async()=>{try{"name"in _&&(_.name=void 0),await a.replace({..._,force:!0}),a.options.scrollBehavior=dt.scrollBehavior}catch(w){await e.runWithContext(()=>wn(w))}}),{provide:{router:a}}}}),Fl=globalThis.requestIdleCallback||(e=>{const t=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))};return setTimeout(()=>{e(n)},1)}),MT=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),Ka=e=>{const t=Te();t.isHydrating?t.hooks.hookOnce("app:suspense:resolve",()=>{Fl(()=>e())}):Fl(()=>e())},n0=lt({name:"nuxt:payload",setup(e){const t=new Set;et().beforeResolve(async(n,r)=>{if(n.path===r.path)return;const s=await yl(n.path);if(s){for(const i of t)delete e.static.data[i];for(const i in s.data)i in e.static.data||t.add(i),e.static.data[i]=s.data[i]}}),Ka(()=>{var n;e.hooks.hook("link:prefetch",async r=>{const{hostname:s}=new URL(r,window.location.href);s===window.location.hostname&&await yl(r).catch(()=>{console.warn("[nuxt] Error preloading payload for",r)})}),((n=navigator.connection)==null?void 0:n.effectiveType)!=="slow-2g"&&setTimeout(Si,1e3)})}}),r0=lt(()=>{const e=et();Ka(()=>{e.beforeResolve(async()=>{await new Promise(t=>{setTimeout(t,100),requestAnimationFrame(()=>{setTimeout(t,0)})})})})}),s0=lt(e=>{let t;async function n(){const r=await Si();t&&clearTimeout(t),t=setTimeout(n,ol);try{const s=await $fetch(ja("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&e.hooks.callHook("app:manifest:update",s)}catch{}}Ka(()=>{t=setTimeout(n,ol)})});function i0(e={}){const t=e.path||window.location.pathname;let n={};try{n=Xs(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(e.force||(n==null?void 0:n.path)!==t||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:t,expires:Date.now()+(e.ttl??1e4)}))}catch{}if(e.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Te().payload.state}))}catch{}window.location.pathname!==t?window.location.href=t:window.location.reload()}}const o0=lt({name:"nuxt:chunk-reload",setup(e){const t=et(),n=os(),r=new Set;t.beforeEach(()=>{r.clear()}),e.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const o=Ua(n.app.baseURL,i.fullPath);i0({path:o,persistState:!0})}e.hook("app:manifest:update",()=>{t.beforeResolve(s)}),t.onError((i,o)=>{r.has(i)&&s(o)})}}),a0=lt({name:"nuxt:global-components"}),Cs={auth:Ks(()=>rn(()=>import("./Coz5cYZ7.js"),[],import.meta.url).then(e=>e.default||e)),default:Ks(()=>rn(()=>import("./D9cGv_Y6.js"),__vite__mapDeps([9,7,8,1,4]),import.meta.url).then(e=>e.default||e))};function c0(e){if(e!=null&&e.__asyncLoader&&!e.__asyncResolved)return e.__asyncLoader()}async function l0(e,t=et()){const{path:n,matched:r}=t.resolve(e);if(!r.length||(t._routePreloaded||(t._routePreloaded=new Set),t._routePreloaded.has(n)))return;const s=t._preloadPromises||(t._preloadPromises=[]);if(s.length>4)return Promise.all(s).then(()=>l0(e,t));t._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const u0=lt({name:"nuxt:prefetch",setup(e){const t=et();e.hooks.hook("app:mounted",()=>{t.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Cs[r]=="function"&&await Cs[r]()})}),e.hooks.hook("link:prefetch",n=>{if(Dn(n))return;const r=t.resolve(n);if(!r)return;const s=r.meta.layout;let i=za(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Mr[o]=="function"&&Mr[o]();typeof s=="string"&&s in Cs&&c0(Cs[s])})}}),f0=()=>{};var Ul={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},d0=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,u=c?e[s+2]:0,l=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(n[l],n[f],n[d],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(sh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):d0(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new h0;const d=i<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class h0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const p0=function(e){const t=sh(e);return ih.encodeByteArray(t,!0)},oh=function(e){return p0(e).replace(/\./g,"")},ah=function(e){try{return ih.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=()=>g0().__FIREBASE_DEFAULTS__,y0=()=>{if(typeof process>"u"||typeof Ul>"u")return;const e=Ul.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},_0=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ah(e[1]);return t&&JSON.parse(t)},Ga=()=>{try{return f0()||m0()||y0()||_0()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},v0=e=>{var t,n;return(n=(t=Ga())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ch=()=>{var e;return(e=Ga())===null||e===void 0?void 0:e.config},lh=e=>{var t;return(t=Ga())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function w0(e){return(await fetch(e,{credentials:"include"})).ok}const Lr={};function E0(){const e={prod:[],emulator:[]};for(const t of Object.keys(Lr))Lr[t]?e.emulator.push(t):e.prod.push(t);return e}function S0(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let Hl=!1;function I0(e,t){if(typeof window>"u"||typeof document>"u"||!Ti(window.location.host)||Lr[e]===t||Lr[e]||Hl)return;Lr[e]=t;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",i=E0().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,p){d.setAttribute("width","24"),d.setAttribute("id",p),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function u(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Hl=!0,o()},d}function l(d,p){d.setAttribute("id",p),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=S0(r),p=n("text"),_=document.getElementById(p)||document.createElement("span"),m=n("learnmore"),S=document.getElementById(m)||document.createElement("a"),w=n("preprendIcon"),b=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const h=d.element;a(h),l(S,m);const v=u();c(b,w),h.append(b,_,S,v),document.body.appendChild(h)}i?(_.innerText="Preview backend disconnected.",b.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(b.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function T0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function C0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function A0(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function k0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function P0(){const e=De();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function R0(){try{return typeof indexedDB=="object"}catch{return!1}}function O0(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="FirebaseError";class pn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=x0,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?N0(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new pn(s,a,r)}}function N0(e,t){return e.replace(M0,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const M0=/\{\$([^}]+)}/g;function L0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ur(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(jl(i)&&jl(o)){if(!ur(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function jl(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function D0(e,t){const n=new F0(e,t);return n.subscribe.bind(n)}class F0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");U0(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=to),s.error===void 0&&(s.error=to),s.complete===void 0&&(s.complete=to);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function to(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(e){return e&&e._delegate?e._delegate:e}class fr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new b0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($0(t))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=En){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=En){return this.instances.has(t)}getOptions(t=En){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:j0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=En){return this.component?this.component.multipleInstances?t:En:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function j0(e){return e===En?void 0:e}function $0(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new H0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ue||(ue={}));const W0={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},V0=ue.INFO,z0={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},K0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=z0[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class uh{constructor(t){this.name=t,this._logLevel=V0,this._logHandler=K0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ue))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?W0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...t),this._logHandler(this,ue.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...t),this._logHandler(this,ue.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...t),this._logHandler(this,ue.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...t),this._logHandler(this,ue.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...t),this._logHandler(this,ue.ERROR,...t)}}const G0=(e,t)=>t.some(n=>e instanceof n);let $l,Bl;function q0(){return $l||($l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Y0(){return Bl||(Bl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fh=new WeakMap,zo=new WeakMap,dh=new WeakMap,no=new WeakMap,qa=new WeakMap;function J0(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(an(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&fh.set(n,e)}).catch(()=>{}),qa.set(t,e),t}function X0(e){if(zo.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});zo.set(e,t)}let Ko={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return zo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||dh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Q0(e){Ko=e(Ko)}function Z0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ro(this),t,...n);return dh.set(r,t.sort?t.sort():[t]),an(r)}:Y0().includes(e)?function(...t){return e.apply(ro(this),t),an(fh.get(this))}:function(...t){return an(e.apply(ro(this),t))}}function ew(e){return typeof e=="function"?Z0(e):(e instanceof IDBTransaction&&X0(e),G0(e,q0())?new Proxy(e,Ko):e)}function an(e){if(e instanceof IDBRequest)return J0(e);if(no.has(e))return no.get(e);const t=ew(e);return t!==e&&(no.set(e,t),qa.set(t,e)),t}const ro=e=>qa.get(e);function tw(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=an(o);return r&&o.addEventListener("upgradeneeded",c=>{r(an(o.result),c.oldVersion,c.newVersion,an(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const nw=["get","getKey","getAll","getAllKeys","count"],rw=["put","add","delete","clear"],so=new Map;function Wl(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(so.get(t))return so.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=rw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return so.set(t,i),i}Q0(e=>({...e,get:(t,n,r)=>Wl(t,n)||e.get(t,n,r),has:(t,n)=>!!Wl(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iw(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Go="@firebase/app",Vl="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new uh("@firebase/app"),ow="@firebase/app-compat",aw="@firebase/analytics-compat",cw="@firebase/analytics",lw="@firebase/app-check-compat",uw="@firebase/app-check",fw="@firebase/auth",dw="@firebase/auth-compat",hw="@firebase/database",pw="@firebase/data-connect",gw="@firebase/database-compat",mw="@firebase/functions",yw="@firebase/functions-compat",_w="@firebase/installations",vw="@firebase/installations-compat",bw="@firebase/messaging",ww="@firebase/messaging-compat",Ew="@firebase/performance",Sw="@firebase/performance-compat",Iw="@firebase/remote-config",Tw="@firebase/remote-config-compat",Cw="@firebase/storage",Aw="@firebase/storage-compat",kw="@firebase/firestore",Pw="@firebase/ai",Rw="@firebase/firestore-compat",Ow="firebase",xw="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="[DEFAULT]",Nw={[Go]:"fire-core",[ow]:"fire-core-compat",[cw]:"fire-analytics",[aw]:"fire-analytics-compat",[uw]:"fire-app-check",[lw]:"fire-app-check-compat",[fw]:"fire-auth",[dw]:"fire-auth-compat",[hw]:"fire-rtdb",[pw]:"fire-data-connect",[gw]:"fire-rtdb-compat",[mw]:"fire-fn",[yw]:"fire-fn-compat",[_w]:"fire-iid",[vw]:"fire-iid-compat",[bw]:"fire-fcm",[ww]:"fire-fcm-compat",[Ew]:"fire-perf",[Sw]:"fire-perf-compat",[Iw]:"fire-rc",[Tw]:"fire-rc-compat",[Cw]:"fire-gcs",[Aw]:"fire-gcs-compat",[kw]:"fire-fst",[Rw]:"fire-fst-compat",[Pw]:"fire-vertex","fire-js":"fire-js",[Ow]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Map,Mw=new Map,Yo=new Map;function zl(e,t){try{e.container.addComponent(t)}catch(n){Dt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Yr(e){const t=e.name;if(Yo.has(t))return Dt.debug(`There were multiple attempts to register component ${t}.`),!1;Yo.set(t,e);for(const n of ni.values())zl(n,e);for(const n of Mw.values())zl(n,e);return!0}function hh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function mt(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cn=new as("app","Firebase",Lw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=xw;function ph(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:qo,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw cn.create("bad-app-name",{appName:String(s)});if(n||(n=ch()),!n)throw cn.create("no-options");const i=ni.get(s);if(i){if(ur(n,i.options)&&ur(r,i.config))return i;throw cn.create("duplicate-app",{appName:s})}const o=new B0(s);for(const c of Yo.values())o.addComponent(c);const a=new Dw(n,r,o);return ni.set(s,a),a}function Fw(e=qo){const t=ni.get(e);if(!t&&e===qo&&ch())return ph();if(!t)throw cn.create("no-app",{appName:e});return t}function er(e,t,n){var r;let s=(r=Nw[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Dt.warn(a.join(" "));return}Yr(new fr(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="firebase-heartbeat-database",Hw=1,Jr="firebase-heartbeat-store";let io=null;function gh(){return io||(io=tw(Uw,Hw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Jr)}catch(n){console.warn(n)}}}}).catch(e=>{throw cn.create("idb-open",{originalErrorMessage:e.message})})),io}async function jw(e){try{const n=(await gh()).transaction(Jr),r=await n.objectStore(Jr).get(mh(e));return await n.done,r}catch(t){if(t instanceof pn)Dt.warn(t.message);else{const n=cn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Dt.warn(n.message)}}}async function Kl(e,t){try{const r=(await gh()).transaction(Jr,"readwrite");await r.objectStore(Jr).put(t,mh(e)),await r.done}catch(n){if(n instanceof pn)Dt.warn(n.message);else{const r=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dt.warn(r.message)}}}function mh(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=1024,Bw=30;class Ww{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gl();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Bw){const o=Kw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Dt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gl(),{heartbeatsToSend:r,unsentEntries:s}=Vw(this._heartbeatsCache.heartbeats),i=oh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Dt.warn(n),""}}}function Gl(){return new Date().toISOString().substring(0,10)}function Vw(e,t=$w){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ql(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ql(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return R0()?O0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kl(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kl(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ql(e){return oh(JSON.stringify({version:2,heartbeats:e})).length}function Kw(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(e){Yr(new fr("platform-logger",t=>new sw(t),"PRIVATE")),Yr(new fr("heartbeat",t=>new Ww(t),"PRIVATE")),er(Go,Vl,e),er(Go,Vl,"esm2017"),er("fire-js","")}Gw("");var qw="firebase",Yw="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er(qw,Yw,"app");function Ya(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function yh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jw=yh,_h=new as("auth","Firebase",yh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new uh("@firebase/auth");function Xw(e,...t){ri.logLevel<=ue.WARN&&ri.warn(`Auth (${ls}): ${e}`,...t)}function Ls(e,...t){ri.logLevel<=ue.ERROR&&ri.error(`Auth (${ls}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e,...t){throw Xa(e,...t)}function ot(e,...t){return Xa(e,...t)}function Ja(e,t,n){const r=Object.assign(Object.assign({},Jw()),{[t]:n});return new as("auth","Firebase",r).create(t,{appName:e.name})}function Rn(e){return Ja(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qw(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&wt(e,"argument-error"),Ja(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xa(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return _h.create(e,...t)}function Z(e,t,...n){if(!e)throw Xa(t,...n)}function Rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ls(t),new Error(t)}function Ft(e,t){e||Rt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Zw(){return Yl()==="http:"||Yl()==="https:"}function Yl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zw()||A0()||"connection"in navigator)?navigator.onLine:!0}function t1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ft(n>t,"Short delay should be less than long delay!"),this.isMobile=T0()||k0()}get(){return e1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(e,t){Ft(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],s1=new us(3e4,6e4);function Za(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function mr(e,t,n,r,s={}){return bh(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=cs(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:c},i);return C0()||(u.referrerPolicy="no-referrer"),e.emulatorConfig&&Ti(e.emulatorConfig.host)&&(u.credentials="include"),vh.fetch()(await wh(e,e.config.apiHost,n,a),u)})}async function bh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},n1),t);try{const s=new o1(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw As(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw As(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw As(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw As(e,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ja(e,l,u);wt(e,l)}}catch(s){if(s instanceof pn)throw s;wt(e,"network-request-failed",{message:String(s)})}}async function i1(e,t,n,r,s={}){const i=await mr(e,t,n,r,s);return"mfaPendingCredential"in i&&wt(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function wh(e,t,n,r){const s=`${t}${n}?${r}`,i=e,o=i.config.emulator?Qa(e.config,s):`${e.config.apiScheme}://${s}`;return r1.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class o1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"network-request-failed")),s1.get())})}}function As(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ot(e,t,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(e,t){return mr(e,"POST","/v1/accounts:delete",t)}async function si(e,t){return mr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function c1(e,t=!1){const n=gn(e),r=await n.getIdToken(t),s=ec(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Dr(oo(s.auth_time)),issuedAtTime:Dr(oo(s.iat)),expirationTime:Dr(oo(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function oo(e){return Number(e)*1e3}function ec(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ls("JWT malformed, contained fewer than 3 sections"),null;try{const s=ah(n);return s?JSON.parse(s):(Ls("Failed to decode base64 JWT payload"),null)}catch(s){return Ls("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jl(e){const t=ec(e);return Z(t,"internal-error"),Z(typeof t.exp<"u","internal-error"),Z(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof pn&&l1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function l1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dr(this.lastLoginAt),this.creationTime=Dr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Xr(e,si(n,{idToken:r}));Z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Eh(i.providerUserInfo):[],a=d1(e.providerData,o),c=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Xo(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,f)}async function f1(e){const t=gn(e);await ii(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function d1(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Eh(e){return e.map(t=>{var{providerId:n}=t,r=Ya(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(e,t){const n=await bh(e,{},async()=>{const r=cs({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=await wh(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return e.emulatorConfig&&Ti(e.emulatorConfig.host)&&(c.credentials="include"),vh.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function p1(e,t){return mr(e,"POST","/v2/accounts:revokeToken",Za(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Z(t.idToken,"internal-error"),Z(typeof t.idToken<"u","internal-error"),Z(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Jl(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Z(t.length!==0,"internal-error");const n=Jl(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await h1(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new tr;return r&&(Z(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new tr,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t){Z(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class rt{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Ya(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new u1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Xr(this,this.stsTokenManager.getToken(this.auth,t));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return c1(this,t)}reload(){return f1(this)}_assign(t){this!==t&&(Z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new rt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ii(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(Rn(this.auth));const t=await this.getIdToken();return await Xr(this,a1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,u,l;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(u=n.createdAt)!==null&&u!==void 0?u:void 0,b=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:h,emailVerified:v,isAnonymous:E,providerData:T,stsTokenManager:k}=n;Z(h&&k,t,"internal-error");const B=tr.fromJSON(this.name,k);Z(typeof h=="string",t,"internal-error"),Kt(f,t.name),Kt(d,t.name),Z(typeof v=="boolean",t,"internal-error"),Z(typeof E=="boolean",t,"internal-error"),Kt(p,t.name),Kt(_,t.name),Kt(m,t.name),Kt(S,t.name),Kt(w,t.name),Kt(b,t.name);const L=new rt({uid:h,auth:t,email:d,emailVerified:v,displayName:f,isAnonymous:E,photoURL:_,phoneNumber:p,tenantId:m,stsTokenManager:B,createdAt:w,lastLoginAt:b});return T&&Array.isArray(T)&&(L.providerData=T.map(M=>Object.assign({},M))),S&&(L._redirectEventId=S),L}static async _fromIdTokenResponse(t,n,r=!1){const s=new tr;s.updateFromServerResponse(n);const i=new rt({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await ii(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Eh(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new tr;a.updateFromIdToken(r);const c=new rt({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new Map;function Ot(e){Ft(e instanceof Function,"Expected a class definition");let t=Xl.get(e);return t?(Ft(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Xl.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Sh.type="NONE";const Ql=Sh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(e,t,n){return`firebase:${e}:${t}:${n}`}class nr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ds(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ds("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await si(this.auth,{idToken:t}).catch(()=>{});return n?rt._fromGetAccountInfoResponse(this.auth,n,t):null}return rt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new nr(Ot(Ql),t,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ot(Ql);const o=Ds(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){let f;if(typeof l=="string"){const d=await si(t,{idToken:l}).catch(()=>{});if(!d)break;f=await rt._fromGetAccountInfoResponse(t,d,l)}else f=rt._fromJSON(t,l);u!==i&&(a=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new nr(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new nr(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ah(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ih(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ph(t))return"Blackberry";if(Rh(t))return"Webos";if(Th(t))return"Safari";if((t.includes("chrome/")||Ch(t))&&!t.includes("edge/"))return"Chrome";if(kh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ih(e=De()){return/firefox\//i.test(e)}function Th(e=De()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ch(e=De()){return/crios\//i.test(e)}function Ah(e=De()){return/iemobile/i.test(e)}function kh(e=De()){return/android/i.test(e)}function Ph(e=De()){return/blackberry/i.test(e)}function Rh(e=De()){return/webos/i.test(e)}function tc(e=De()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function g1(e=De()){var t;return tc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function m1(){return P0()&&document.documentMode===10}function Oh(e=De()){return tc(e)||kh(e)||Rh(e)||Ph(e)||/windows phone/i.test(e)||Ah(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(e,t=[]){let n;switch(e){case"Browser":n=Zl(De());break;case"Worker":n=`${Zl(De())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1(e,t={}){return mr(e,"GET","/v2/passwordPolicy",Za(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=6;class b1{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:v1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eu(this),this.idTokenSubscription=new eu(this),this.beforeStateQueue=new y1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ot(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await nr.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await si(this,{idToken:t}),r=await rt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ii(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=t1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(mt(this.app))return Promise.reject(Rn(this));const n=t?gn(t):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return mt(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await _1(this),n=new b1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new as("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await p1(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ot(t)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[Ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=xh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Xw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ci(e){return gn(e)}class eu{constructor(t){this.auth=t,this.observer=null,this.addObserver=D0(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function E1(e){nc=e}function S1(e){return nc.loadJS(e)}function I1(){return nc.gapiScript}function T1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(e,t){const n=hh(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ur(i,t??{}))return s;wt(s,"already-initialized")}return n.initialize({options:t})}function A1(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ot);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function k1(e,t,n){const r=Ci(e);Z(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=Nh(t),{host:o,port:a}=P1(t),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},l=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(ur(u,r.config.emulator)&&ur(l,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=l,r.settings.appVerificationDisabledForTesting=!0,Ti(o)?(w0(`${i}//${o}${c}`),I0("Auth",!0)):R1()}function Nh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function P1(e){const t=Nh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:tu(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:tu(o)}}}function tu(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function R1(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(t){return Rt("not implemented")}_linkToIdToken(t,n){return Rt("not implemented")}_getReauthenticationResolver(t){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(e,t){return i1(e,"POST","/v1/accounts:signInWithIdp",Za(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="http://localhost";class xn extends Mh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new xn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Ya(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new xn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return rr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,rr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,rr(t,n)}buildRequest(){const t={requestUri:O1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=cs(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends rc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends fs{constructor(){super("facebook.com")}static credential(t){return xn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return en.credential(t.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends fs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return xn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return At.credential(n,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends fs{constructor(){super("github.com")}static credential(t){return xn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return tn.credential(t.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends fs{constructor(){super("twitter.com")}static credential(t,n){return xn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await rt._fromIdTokenResponse(t,r,s),o=nu(r);return new dr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=nu(r);return new dr({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function nu(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends pn{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,oi.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new oi(t,n,r,s)}}function Lh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oi._fromErrorAndOperation(e,i,t,r):i})}async function x1(e,t,n=!1){const r=await Xr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return dr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(e,t,n=!1){const{auth:r}=e;if(mt(r.app))return Promise.reject(Rn(r));const s="reauthenticate";try{const i=await Xr(e,Lh(r,s,t,e),n);Z(i.idToken,r,"internal-error");const o=ec(i.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(e.uid===a,r,"user-mismatch"),dr._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(e,t,n=!1){if(mt(e.app))return Promise.reject(Rn(e));const r="signIn",s=await Lh(e,r,t),i=await dr._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}function L1(e,t,n,r){return gn(e).onIdTokenChanged(t,n,r)}function D1(e,t,n){return gn(e).beforeAuthStateChanged(t,n)}function F1(e,t,n,r){return gn(e).onAuthStateChanged(t,n,r)}function U1(e){return gn(e).signOut()}const ai="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ai,"1"),this.storage.removeItem(ai),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=1e3,j1=10;class Fh extends Dh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Oh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);m1()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,j1):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},H1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Fh.type="LOCAL";const $1=Fh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh extends Dh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Uh.type="SESSION";const Hh=Uh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new Ai(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await B1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ai.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=sc("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return window}function V1(e){bt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function z1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function K1(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function G1(){return jh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="firebaseLocalStorageDb",q1=1,ci="firebaseLocalStorage",Bh="fbase_key";class ds{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ki(e,t){return e.transaction([ci],t?"readwrite":"readonly").objectStore(ci)}function Y1(){const e=indexedDB.deleteDatabase($h);return new ds(e).toPromise()}function Qo(){const e=indexedDB.open($h,q1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ci,{keyPath:Bh})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ci)?t(r):(r.close(),await Y1(),t(await Qo()))})})}async function ru(e,t,n){const r=ki(e,!0).put({[Bh]:t,value:n});return new ds(r).toPromise()}async function J1(e,t){const n=ki(e,!1).get(t),r=await new ds(n).toPromise();return r===void 0?null:r.value}function su(e,t){const n=ki(e,!0).delete(t);return new ds(n).toPromise()}const X1=800,Q1=3;class Wh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qo(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Q1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ai._getInstance(G1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await z1(),!this.activeServiceWorker)return;this.sender=new W1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||K1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Qo();return await ru(t,ai,"1"),await su(t,ai),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ru(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>J1(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>su(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=ki(s,!1).getAll();return new ds(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),X1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wh.type="LOCAL";const Z1=Wh;new us(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(e,t){return t?Ot(t):(Z(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends Mh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return rr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return rr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return rr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function eE(e){return M1(e.auth,new ic(e),e.bypassAuthState)}function tE(e){const{auth:t,user:n}=e;return Z(n,t,"internal-error"),N1(n,new ic(e),e.bypassAuthState)}async function nE(e){const{auth:t,user:n}=e;return Z(n,t,"internal-error"),x1(n,new ic(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return eE;case"linkViaPopup":case"linkViaRedirect":return nE;case"reauthViaPopup":case"reauthViaRedirect":return tE;default:wt(this.auth,"internal-error")}}resolve(t){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=new us(2e3,1e4);async function sE(e,t,n){if(mt(e.app))return Promise.reject(ot(e,"operation-not-supported-in-this-environment"));const r=Ci(e);Qw(e,t,rc);const s=Vh(r,n);return new Sn(r,"signInViaPopup",t,s).executeNotNull()}class Sn extends zh{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Z(t,this.auth,"internal-error"),t}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const t=sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,rE.get())};t()}}Sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="pendingRedirect",Fs=new Map;class oE extends zh{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Fs.get(this.auth._key());if(!t){try{const r=await aE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Fs.set(this.auth._key(),t)}return this.bypassAuthState||Fs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aE(e,t){const n=uE(t),r=lE(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function cE(e,t){Fs.set(e._key(),t)}function lE(e){return Ot(e._redirectPersistence)}function uE(e){return Ds(iE,e.config.apiKey,e.name)}async function fE(e,t,n=!1){if(mt(e.app))return Promise.reject(Rn(e));const r=Ci(e),s=Vh(r,t),o=await new oE(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=10*60*1e3;class hE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!pE(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Kh(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ot(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=dE&&this.cachedEventUids.clear(),this.cachedEventUids.has(iu(t))}saveEventToCache(t){this.cachedEventUids.add(iu(t)),this.lastProcessedEventTime=Date.now()}}function iu(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Kh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function pE(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kh(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(e,t={}){return mr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yE=/^https?/;async function _E(e){if(e.config.emulator)return;const{authorizedDomains:t}=await gE(e);for(const n of t)try{if(vE(n))return}catch{}wt(e,"unauthorized-domain")}function vE(e){const t=Jo(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yE.test(n))return!1;if(mE.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=new us(3e4,6e4);function ou(){const e=bt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function wE(e){return new Promise((t,n)=>{var r,s,i;function o(){ou(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ou(),n(ot(e,"network-request-failed"))},timeout:bE.get()})}if(!((s=(r=bt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=bt().gapi)===null||i===void 0)&&i.load)o();else{const a=T1("iframefcb");return bt()[a]=()=>{gapi.load?o():n(ot(e,"network-request-failed"))},S1(`${I1()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Us=null,t})}let Us=null;function EE(e){return Us=Us||wE(e),Us}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=new us(5e3,15e3),IE="__/auth/iframe",TE="emulator/auth/iframe",CE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kE(e){const t=e.config;Z(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Qa(t,TE):`https://${e.config.authDomain}/${IE}`,r={apiKey:t.apiKey,appName:e.name,v:ls},s=AE.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${cs(r).slice(1)}`}async function PE(e){const t=await EE(e),n=bt().gapi;return Z(n,e,"internal-error"),t.open({where:document.body,url:kE(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ot(e,"network-request-failed"),a=bt().setTimeout(()=>{i(o)},SE.get());function c(){bt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OE=500,xE=600,NE="_blank",ME="http://localhost";class au{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LE(e,t,n,r=OE,s=xE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},RE),{width:r.toString(),height:s.toString(),top:i,left:o}),u=De().toLowerCase();n&&(a=Ch(u)?NE:n),Ih(u)&&(t=t||ME,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(g1(u)&&a!=="_self")return DE(t||"",a),new au(null);const f=window.open(t||"",a,l);Z(f,e,"popup-blocked");try{f.focus()}catch{}return new au(f)}function DE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="__/auth/handler",UE="emulator/auth/handler",HE=encodeURIComponent("fac");async function cu(e,t,n,r,s,i){Z(e.config.authDomain,e,"auth-domain-config-required"),Z(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ls,eventId:s};if(t instanceof rc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",L0(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,f]of Object.entries({}))o[l]=f}if(t instanceof fs){const l=t.getScopes().filter(f=>f!=="");l.length>0&&(o.scopes=l.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await e._getAppCheckToken(),u=c?`#${HE}=${encodeURIComponent(c)}`:"";return`${jE(e)}?${cs(a).slice(1)}${u}`}function jE({config:e}){return e.emulator?Qa(e,UE):`https://${e.authDomain}/${FE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="webStorageSupport";class $E{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hh,this._completeRedirectFn=fE,this._overrideRedirectResult=cE}async _openPopup(t,n,r,s){var i;Ft((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await cu(t,n,r,Jo(),s);return LE(t,o,sc())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await cu(t,n,r,Jo(),s);return V1(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ft(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await PE(t),r=new hE(t);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ao,{type:ao},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ao];o!==void 0&&n(!!o),wt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_E(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Oh()||Th()||tc()}}const BE=$E;var lu="@firebase/auth",uu="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zE(e){Yr(new fr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xh(e)},u=new w1(r,s,i,c);return A1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Yr(new fr("auth-internal",t=>{const n=Ci(t.getProvider("auth").getImmediate());return(r=>new WE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(lu,uu,VE(e)),er(lu,uu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=5*60,GE=lh("authIdTokenMaxAge")||KE;let fu=null;const qE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GE)return;const s=n==null?void 0:n.token;fu!==s&&(fu=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function YE(e=Fw()){const t=hh(e,"auth");if(t.isInitialized())return t.getImmediate();const n=C1(e,{popupRedirectResolver:BE,persistence:[Z1,$1,Hh]}),r=lh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=qE(i.toString());D1(n,o,()=>o(n.currentUser)),L1(n,a=>o(a))}}const s=v0("auth");return s&&k1(n,`http://${s}`),n}function JE(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}E1({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=ot("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",JE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zE("Browser");const XE=lt(()=>{const e=os();console.log("Firebase Config Debug:",{apiKey:e.public.firebaseApiKey,authDomain:e.public.firebaseAuthDomain,projectId:e.public.firebaseProjectId,storageBucket:e.public.firebaseStorageBucket,messagingSenderId:e.public.firebaseMessagingSenderId,appId:e.public.firebaseAppId,measurementId:e.public.firebaseMeasurementId});const t=e.public.firebaseApiKey&&e.public.firebaseAuthDomain;console.log("Environment variables loaded:",t);const n={apiKey:e.public.firebaseApiKey||"AIzaSyAsZny07ZSziKUbauE8z4kSjBuNPZIqLKc",authDomain:e.public.firebaseAuthDomain||"nuxt-dashdash.firebaseapp.com",projectId:e.public.firebaseProjectId||"nuxt-dashdash",storageBucket:e.public.firebaseStorageBucket||"nuxt-dashdash.firebasestorage.app",messagingSenderId:e.public.firebaseMessagingSenderId||"285552934341",appId:e.public.firebaseAppId||"1:285552934341:web:19ee5473fe483602929fac",measurementId:e.public.firebaseMeasurementId||"G-8V4CC0302V"};console.log("Final Firebase Config:",n);const r=ph(n),s=YE(r),i=new At;i.setCustomParameters({prompt:"select_account",access_type:"offline",include_granted_scopes:"true"});const o=async()=>{try{console.log("Starting Google sign-in...");const a=await sE(s,i);return console.log("Sign-in successful:",a),a}catch(a){throw console.error("Sign-in error:",a),a.code==="auth/popup-closed-by-user"?new Error("Sign-in was cancelled by user"):a.code==="auth/popup-blocked"?new Error("Popup was blocked. Please allow popups for this site."):a.code==="auth/unauthorized-domain"?new Error("This domain is not authorized. Please check Firebase console settings."):a}};return console.log("Firebase plugin initialized successfully"),{provide:{firebase:{auth:s,googleProvider:i,signInWithGoogle:o,signOut:()=>U1(s),onAuthStateChanged:a=>F1(s,a)}}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function QE(e,t,n){return(t=eS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function du(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?du(Object(n),!0).forEach(function(r){QE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):du(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ZE(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function eS(e){var t=ZE(e,"string");return typeof t=="symbol"?t:t+""}const hu=()=>{};let oc={},Gh={},qh=null,Yh={mark:hu,measure:hu};try{typeof window<"u"&&(oc=window),typeof document<"u"&&(Gh=document),typeof MutationObserver<"u"&&(qh=MutationObserver),typeof performance<"u"&&(Yh=performance)}catch{}const{userAgent:pu=""}=oc.navigator||{},un=oc,pe=Gh,gu=qh,ks=Yh;un.document;const Bt=!!pe.documentElement&&!!pe.head&&typeof pe.addEventListener=="function"&&typeof pe.createElement=="function",Jh=~pu.indexOf("MSIE")||~pu.indexOf("Trident/");var tS=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,nS=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Xh={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},rS={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Qh=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],xe="classic",Pi="duotone",sS="sharp",iS="sharp-duotone",Zh=[xe,Pi,sS,iS],oS={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},aS={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},cS=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),lS={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},uS=["fak","fa-kit","fakd","fa-kit-duotone"],mu={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},fS=["kit"],dS={kit:{"fa-kit":"fak"}},hS=["fak","fakd"],pS={kit:{fak:"fa-kit"}},yu={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ps={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gS=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],mS=["fak","fa-kit","fakd","fa-kit-duotone"],yS={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_S={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},vS={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Zo={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},bS=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ea=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...gS,...bS],wS=["solid","regular","light","thin","duotone","brands"],ep=[1,2,3,4,5,6,7,8,9,10],ES=ep.concat([11,12,13,14,15,16,17,18,19,20]),SS=[...Object.keys(vS),...wS,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ps.GROUP,Ps.SWAP_OPACITY,Ps.PRIMARY,Ps.SECONDARY].concat(ep.map(e=>"".concat(e,"x"))).concat(ES.map(e=>"w-".concat(e))),IS={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Ut="___FONT_AWESOME___",ta=16,tp="fa",np="svg-inline--fa",Nn="data-fa-i2svg",na="data-fa-pseudo-element",TS="data-fa-pseudo-element-pending",ac="data-prefix",cc="data-icon",_u="fontawesome-i2svg",CS="async",AS=["HTML","HEAD","STYLE","SCRIPT"],rp=(()=>{try{return!0}catch{return!1}})();function hs(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[xe]}})}const sp=O({},Xh);sp[xe]=O(O(O(O({},{"fa-duotone":"duotone"}),Xh[xe]),mu.kit),mu["kit-duotone"]);const kS=hs(sp),ra=O({},lS);ra[xe]=O(O(O(O({},{duotone:"fad"}),ra[xe]),yu.kit),yu["kit-duotone"]);const vu=hs(ra),sa=O({},Zo);sa[xe]=O(O({},sa[xe]),pS.kit);const lc=hs(sa),ia=O({},_S);ia[xe]=O(O({},ia[xe]),dS.kit);hs(ia);const PS=tS,ip="fa-layers-text",RS=nS,OS=O({},oS);hs(OS);const xS=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],co=rS,NS=[...fS,...SS],Fr=un.FontAwesomeConfig||{};function MS(e){var t=pe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function LS(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}pe&&typeof pe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const s=LS(MS(n));s!=null&&(Fr[r]=s)});const op={styleDefault:"solid",familyDefault:xe,cssPrefix:tp,replacementClass:np,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Fr.familyPrefix&&(Fr.cssPrefix=Fr.familyPrefix);const hr=O(O({},op),Fr);hr.autoReplaceSvg||(hr.observeMutations=!1);const K={};Object.keys(op).forEach(e=>{Object.defineProperty(K,e,{enumerable:!0,set:function(t){hr[e]=t,Ur.forEach(n=>n(K))},get:function(){return hr[e]}})});Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(e){hr.cssPrefix=e,Ur.forEach(t=>t(K))},get:function(){return hr.cssPrefix}});un.FontAwesomeConfig=K;const Ur=[];function DS(e){return Ur.push(e),()=>{Ur.splice(Ur.indexOf(e),1)}}const Gt=ta,yt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function FS(e){if(!e||!Bt)return;const t=pe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=pe.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return pe.head.insertBefore(t,r),e}const US="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qr(){let e=12,t="";for(;e-- >0;)t+=US[Math.random()*62|0];return t}function yr(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function uc(e){return e.classList?yr(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function ap(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function HS(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(ap(e[n]),'" '),"").trim()}function Ri(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function fc(e){return e.size!==yt.size||e.x!==yt.x||e.y!==yt.y||e.rotate!==yt.rotate||e.flipX||e.flipY}function jS(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function $S(e){let{transform:t,width:n=ta,height:r=ta,startCentered:s=!1}=e,i="";return s&&Jh?i+="translate(".concat(t.x/Gt-n/2,"em, ").concat(t.y/Gt-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(t.x/Gt,"em), calc(-50% + ").concat(t.y/Gt,"em)) "):i+="translate(".concat(t.x/Gt,"em, ").concat(t.y/Gt,"em) "),i+="scale(".concat(t.size/Gt*(t.flipX?-1:1),", ").concat(t.size/Gt*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var BS=`:root, :host {
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
}`;function cp(){const e=tp,t=np,n=K.cssPrefix,r=K.replacementClass;let s=BS;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let bu=!1;function lo(){K.autoAddCss&&!bu&&(FS(cp()),bu=!0)}var WS={mixout(){return{dom:{css:cp,insertCss:lo}}},hooks(){return{beforeDOMElementCreation(){lo()},beforeI2svg(){lo()}}}};const Ht=un||{};Ht[Ut]||(Ht[Ut]={});Ht[Ut].styles||(Ht[Ut].styles={});Ht[Ut].hooks||(Ht[Ut].hooks={});Ht[Ut].shims||(Ht[Ut].shims=[]);var _t=Ht[Ut];const lp=[],up=function(){pe.removeEventListener("DOMContentLoaded",up),li=1,lp.map(e=>e())};let li=!1;Bt&&(li=(pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(pe.readyState),li||pe.addEventListener("DOMContentLoaded",up));function VS(e){Bt&&(li?setTimeout(e,0):lp.push(e))}function ps(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?ap(e):"<".concat(t," ").concat(HS(n),">").concat(r.map(ps).join(""),"</").concat(t,">")}function wu(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var uo=function(t,n,r,s){var i=Object.keys(t),o=i.length,a=n,c,u,l;for(r===void 0?(c=1,l=t[i[0]]):(c=0,l=r);c<o;c++)u=i[c],l=a(l,t[u],u,t);return l};function zS(e){const t=[];let n=0;const r=e.length;for(;n<r;){const s=e.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((s&1023)<<10)+(i&1023)+65536):(t.push(s),n--)}else t.push(s)}return t}function oa(e){const t=zS(e);return t.length===1?t[0].toString(16):null}function KS(e,t){const n=e.length;let r=e.charCodeAt(t),s;return r>=55296&&r<=56319&&n>t+1&&(s=e.charCodeAt(t+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Eu(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function aa(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Eu(t);typeof _t.hooks.addPack=="function"&&!r?_t.hooks.addPack(e,Eu(t)):_t.styles[e]=O(O({},_t.styles[e]||{}),s),e==="fas"&&aa("fa",t)}const{styles:Zr,shims:GS}=_t,fp=Object.keys(lc),qS=fp.reduce((e,t)=>(e[t]=Object.keys(lc[t]),e),{});let dc=null,dp={},hp={},pp={},gp={},mp={};function YS(e){return~NS.indexOf(e)}function JS(e,t){const n=t.split("-"),r=n[0],s=n.slice(1).join("-");return r===e&&s!==""&&!YS(s)?s:null}const yp=()=>{const e=r=>uo(Zr,(s,i,o)=>(s[o]=uo(i,r,{}),s),{});dp=e((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),hp=e((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),mp=e((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const t="far"in Zr||K.autoFetchSvg,n=uo(GS,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});pp=n.names,gp=n.unicodes,dc=Oi(K.styleDefault,{family:K.familyDefault})};DS(e=>{dc=Oi(e.styleDefault,{family:K.familyDefault})});yp();function hc(e,t){return(dp[e]||{})[t]}function XS(e,t){return(hp[e]||{})[t]}function In(e,t){return(mp[e]||{})[t]}function _p(e){return pp[e]||{prefix:null,iconName:null}}function QS(e){const t=gp[e],n=hc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function fn(){return dc}const vp=()=>({prefix:null,iconName:null,rest:[]});function ZS(e){let t=xe;const n=fp.reduce((r,s)=>(r[s]="".concat(K.cssPrefix,"-").concat(s),r),{});return Zh.forEach(r=>{(e.includes(n[r])||e.some(s=>qS[r].includes(s)))&&(t=r)}),t}function Oi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=xe}=t,r=kS[n][e];if(n===Pi&&!e)return"fad";const s=vu[n][e]||vu[n][r],i=e in _t.styles?e:null;return s||i||null}function eI(e){let t=[],n=null;return e.forEach(r=>{const s=JS(K.cssPrefix,r);s?n=s:r&&t.push(r)}),{iconName:n,rest:t}}function Su(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function xi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const s=ea.concat(mS),i=Su(e.filter(f=>s.includes(f))),o=Su(e.filter(f=>!ea.includes(f))),a=i.filter(f=>(r=f,!Qh.includes(f))),[c=null]=a,u=ZS(i),l=O(O({},eI(o)),{},{prefix:Oi(c,{family:u})});return O(O(O({},l),sI({values:e,family:u,styles:Zr,config:K,canonical:l,givenPrefix:r})),tI(n,r,l))}function tI(e,t,n){let{prefix:r,iconName:s}=n;if(e||!r||!s)return{prefix:r,iconName:s};const i=t==="fa"?_p(s):{},o=In(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!Zr.far&&Zr.fas&&!K.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const nI=Zh.filter(e=>e!==xe||e!==Pi),rI=Object.keys(Zo).filter(e=>e!==xe).map(e=>Object.keys(Zo[e])).flat();function sI(e){const{values:t,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=e,a=n===Pi,c=t.includes("fa-duotone")||t.includes("fad"),u=o.familyDefault==="duotone",l=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(c||u||l)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&nI.includes(n)&&(Object.keys(i).find(d=>rI.includes(d))||o.autoFetchSvg)){const d=cS.get(n).defaultShortPrefixId;r.prefix=d,r.iconName=In(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=fn()||"fas"),r}class iI{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=O(O({},this.definitions[i]||{}),s[i]),aa(i,s[i]);const o=lc[xe][i];o&&aa(o,s[i]),yp()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],c=a[2];t[i]||(t[i]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(t[i][u]=a)}),t[i][o]=a}),t}}let Iu=[],Vn={};const sr={},oI=Object.keys(sr);function aI(e,t){let{mixoutsTo:n}=t;return Iu=e,Vn={},Object.keys(sr).forEach(r=>{oI.indexOf(r)===-1&&delete sr[r]}),Iu.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Vn[o]||(Vn[o]=[]),Vn[o].push(i[o])})}r.provides&&r.provides(sr)}),n}function ca(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Vn[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function Mn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(Vn[e]||[]).forEach(i=>{i.apply(null,n)})}function dn(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return sr[e]?sr[e].apply(null,t):void 0}function la(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||fn();if(t)return t=In(n,t)||t,wu(bp.definitions,n,t)||wu(_t.styles,n,t)}const bp=new iI,cI=()=>{K.autoReplaceSvg=!1,K.observeMutations=!1,Mn("noAuto")},lI={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Bt?(Mn("beforeI2svg",e),dn("pseudoElements2svg",e),dn("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,VS(()=>{fI({autoReplaceSvgRoot:t}),Mn("watch",e)})}},uI={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:In(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Oi(e[0]);return{prefix:n,iconName:In(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(K.cssPrefix,"-"))>-1||e.match(PS))){const t=xi(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||fn(),iconName:In(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=fn();return{prefix:t,iconName:In(t,e)||e}}}},qe={noAuto:cI,config:K,dom:lI,parse:uI,library:bp,findIconDefinition:la,toHtml:ps},fI=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=pe}=e;(Object.keys(_t.styles).length>0||K.autoFetchSvg)&&Bt&&K.autoReplaceSvg&&qe.dom.i2svg({node:t})};function Ni(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>ps(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Bt)return;const n=pe.createElement("div");return n.innerHTML=e.html,n.children}}),e}function dI(e){let{children:t,main:n,mask:r,attributes:s,styles:i,transform:o}=e;if(fc(o)&&n.found&&!r.found){const{width:a,height:c}=n,u={x:a/c/2,y:.5};s.style=Ri(O(O({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:t}]}function hI(e){let{prefix:t,iconName:n,children:r,attributes:s,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(K.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},s),{},{id:o}),children:r}]}]}function pc(e){const{icons:{main:t,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:c,titleId:u,extra:l,watchable:f=!1}=e,{width:d,height:p}=n.found?n:t,_=hS.includes(r),m=[K.replacementClass,s?"".concat(K.cssPrefix,"-").concat(s):""].filter(E=>l.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(l.classes).join(" ");let S={children:[],attributes:O(O({},l.attributes),{},{"data-prefix":r,"data-icon":s,class:m,role:l.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(p)})};const w=_&&!~l.classes.indexOf("fa-fw")?{width:"".concat(d/p*16*.0625,"em")}:{};f&&(S.attributes[Nn]=""),a&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(u||Qr())},children:[a]}),delete S.attributes.title);const b=O(O({},S),{},{prefix:r,iconName:s,main:t,mask:n,maskId:c,transform:i,symbol:o,styles:O(O({},w),l.styles)}),{children:h,attributes:v}=n.found&&t.found?dn("generateAbstractMask",b)||{children:[],attributes:{}}:dn("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=h,b.attributes=v,o?hI(b):dI(b)}function Tu(e){const{content:t,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=e,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(c[Nn]="");const u=O({},o.styles);fc(s)&&(u.transform=$S({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const l=Ri(u);l.length>0&&(c.style=l);const f=[];return f.push({tag:"span",attributes:c,children:[t]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function pI(e){const{content:t,title:n,extra:r}=e,s=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ri(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:fo}=_t;function ua(e){const t=e[0],n=e[1],[r]=e.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(K.cssPrefix,"-").concat(co.GROUP)},children:[{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(co.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(co.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:s}}const gI={found:!1,width:512,height:512};function mI(e,t){!rp&&!K.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function fa(e,t){let n=t;return t==="fa"&&K.styleDefault!==null&&(t=fn()),new Promise((r,s)=>{if(n==="fa"){const i=_p(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&fo[t]&&fo[t][e]){const i=fo[t][e];return r(ua(i))}mI(e,t),r(O(O({},gI),{},{icon:K.showMissingIcons&&e?dn("missingIconAbstract")||{}:{}}))})}const Cu=()=>{},da=K.measurePerformance&&ks&&ks.mark&&ks.measure?ks:{mark:Cu,measure:Cu},Tr='FA "6.7.2"',yI=e=>(da.mark("".concat(Tr," ").concat(e," begins")),()=>wp(e)),wp=e=>{da.mark("".concat(Tr," ").concat(e," ends")),da.measure("".concat(Tr," ").concat(e),"".concat(Tr," ").concat(e," begins"),"".concat(Tr," ").concat(e," ends"))};var gc={begin:yI,end:wp};const Hs=()=>{};function Au(e){return typeof(e.getAttribute?e.getAttribute(Nn):null)=="string"}function _I(e){const t=e.getAttribute?e.getAttribute(ac):null,n=e.getAttribute?e.getAttribute(cc):null;return t&&n}function vI(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(K.replacementClass)}function bI(){return K.autoReplaceSvg===!0?js.replace:js[K.autoReplaceSvg]||js.replace}function wI(e){return pe.createElementNS("http://www.w3.org/2000/svg",e)}function EI(e){return pe.createElement(e)}function Ep(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?wI:EI}=t;if(typeof e=="string")return pe.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(Ep(i,{ceFn:n}))}),r}function SI(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const js={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Ep(n),t)}),t.getAttribute(Nn)===null&&K.keepOriginalSource){let n=pe.createComment(SI(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~uc(t).indexOf(K.replacementClass))return js.replace(e);const r=new RegExp("".concat(K.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===K.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>ps(i)).join(`
`);t.setAttribute(Nn,""),t.innerHTML=s}};function ku(e){e()}function Sp(e,t){const n=typeof t=="function"?t:Hs;if(e.length===0)n();else{let r=ku;K.mutateApproach===CS&&(r=un.requestAnimationFrame||ku),r(()=>{const s=bI(),i=gc.begin("mutate");e.map(s),i(),n()})}}let mc=!1;function Ip(){mc=!0}function ha(){mc=!1}let ui=null;function Pu(e){if(!gu||!K.observeMutations)return;const{treeCallback:t=Hs,nodeCallback:n=Hs,pseudoElementsCallback:r=Hs,observeMutationsRoot:s=pe}=e;ui=new gu(i=>{if(mc)return;const o=fn();yr(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Au(a.addedNodes[0])&&(K.searchPseudoElements&&r(a.target),t(a.target)),a.type==="attributes"&&a.target.parentNode&&K.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Au(a.target)&&~xS.indexOf(a.attributeName))if(a.attributeName==="class"&&_I(a.target)){const{prefix:c,iconName:u}=xi(uc(a.target));a.target.setAttribute(ac,c||o),u&&a.target.setAttribute(cc,u)}else vI(a.target)&&n(a.target)})}),Bt&&ui.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function II(){ui&&ui.disconnect()}function TI(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function CI(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let s=xi(uc(e));return s.prefix||(s.prefix=fn()),t&&n&&(s.prefix=t,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=XS(s.prefix,e.innerText)||hc(s.prefix,oa(e.innerText))),!s.iconName&&K.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=e.firstChild.data)),s}function AI(e){const t=yr(e.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return K.autoA11y&&(n?t["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(r||Qr()):(t["aria-hidden"]="true",t.focusable="false")),t}function kI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:yt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ru(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=CI(e),i=AI(e),o=ca("parseNodeAttributes",{},e);let a=t.styleParser?TI(e):[];return O({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:yt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}const{styles:PI}=_t;function Tp(e){const t=K.autoReplaceSvg==="nest"?Ru(e,{styleParser:!1}):Ru(e);return~t.extra.classes.indexOf(ip)?dn("generateLayersText",e,t):dn("generateSvgReplacementMutation",e,t)}function RI(){return[...uS,...ea]}function Ou(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Bt)return Promise.resolve();const n=pe.documentElement.classList,r=l=>n.add("".concat(_u,"-").concat(l)),s=l=>n.remove("".concat(_u,"-").concat(l)),i=K.autoFetchSvg?RI():Qh.concat(Object.keys(PI));i.includes("fa")||i.push("fa");const o=[".".concat(ip,":not([").concat(Nn,"])")].concat(i.map(l=>".".concat(l,":not([").concat(Nn,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=yr(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const c=gc.begin("onTree"),u=a.reduce((l,f)=>{try{const d=Tp(f);d&&l.push(d)}catch(d){rp||d.name==="MissingIcon"&&console.error(d)}return l},[]);return new Promise((l,f)=>{Promise.all(u).then(d=>{Sp(d,()=>{r("active"),r("complete"),s("pending"),typeof t=="function"&&t(),c(),l()})}).catch(d=>{c(),f(d)})})}function OI(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Tp(e).then(n=>{n&&Sp([n],t)})}function xI(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:la(t||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:la(s||{})),e(r,O(O({},n),{},{mask:s}))}}const NI=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=yt,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:c=[],attributes:u={},styles:l={}}=t;if(!e)return;const{prefix:f,iconName:d,icon:p}=e;return Ni(O({type:"icon"},e),()=>(Mn("beforeDOMElementCreation",{iconDefinition:e,params:t}),K.autoA11y&&(o?u["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(a||Qr()):(u["aria-hidden"]="true",u.focusable="false")),pc({icons:{main:ua(p),mask:s?ua(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:O(O({},yt),n),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:l,classes:c}})))};var MI={mixout(){return{icon:xI(NI)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Ou,e.nodeCallback=OI,e}}},provides(e){e.i2svg=function(t){const{node:n=pe,callback:r=()=>{}}=t;return Ou(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:c,mask:u,maskId:l,extra:f}=n;return new Promise((d,p)=>{Promise.all([fa(r,o),u.iconName?fa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[m,S]=_;d([t,pc({icons:{main:m,mask:S},prefix:o,iconName:r,transform:a,symbol:c,maskId:l,title:s,titleId:i,extra:f,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:s,transform:i,styles:o}=t;const a=Ri(o);a.length>0&&(r.style=a);let c;return fc(i)&&(c=dn("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:r}}}},LI={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Ni({type:"layer"},()=>{Mn("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(K.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},DI={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=t;return Ni({type:"counter",content:e},()=>(Mn("beforeDOMElementCreation",{content:e,params:t}),pI({content:e.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(K.cssPrefix,"-layers-counter"),...r]}})))}}}},FI={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=yt,title:r=null,classes:s=[],attributes:i={},styles:o={}}=t;return Ni({type:"text",content:e},()=>(Mn("beforeDOMElementCreation",{content:e,params:t}),Tu({content:e,transform:O(O({},yt),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(K.cssPrefix,"-layers-text"),...s]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(Jh){const c=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();o=u.width/c,a=u.height/c}return K.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,Tu({content:t.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const UI=new RegExp('"',"ug"),xu=[1105920,1112319],Nu=O(O(O(O({},{FontAwesome:{normal:"fas",400:"fas"}}),aS),IS),yS),pa=Object.keys(Nu).reduce((e,t)=>(e[t.toLowerCase()]=Nu[t],e),{}),HI=Object.keys(pa).reduce((e,t)=>{const n=pa[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function jI(e){const t=e.replace(UI,""),n=KS(t,0),r=n>=xu[0]&&n<=xu[1],s=t.length===2?t[0]===t[1]:!1;return{value:oa(s?t[0]:t),isSecondary:r||s}}function $I(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),s=isNaN(r)?"normal":r;return(pa[n]||{})[s]||HI[n]}function Mu(e,t){const n="".concat(TS).concat(t.replace(":","-"));return new Promise((r,s)=>{if(e.getAttribute(n)!==null)return r();const o=yr(e.children).filter(d=>d.getAttribute(na)===t)[0],a=un.getComputedStyle(e,t),c=a.getPropertyValue("font-family"),u=c.match(RS),l=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&f!=="none"&&f!==""){const d=a.getPropertyValue("content");let p=$I(c,l);const{value:_,isSecondary:m}=jI(d),S=u[0].startsWith("FontAwesome");let w=hc(p,_),b=w;if(S){const h=QS(_);h.iconName&&h.prefix&&(w=h.iconName,p=h.prefix)}if(w&&!m&&(!o||o.getAttribute(ac)!==p||o.getAttribute(cc)!==b)){e.setAttribute(n,b),o&&e.removeChild(o);const h=kI(),{extra:v}=h;v.attributes[na]=t,fa(w,p).then(E=>{const T=pc(O(O({},h),{},{icons:{main:E,mask:vp()},prefix:p,iconName:b,extra:v,watchable:!0})),k=pe.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(k,e.firstChild):e.appendChild(k),k.outerHTML=T.map(B=>ps(B)).join(`
`),e.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function BI(e){return Promise.all([Mu(e,"::before"),Mu(e,"::after")])}function WI(e){return e.parentNode!==document.head&&!~AS.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(na)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Lu(e){if(Bt)return new Promise((t,n)=>{const r=yr(e.querySelectorAll("*")).filter(WI).map(BI),s=gc.begin("searchPseudoElements");Ip(),Promise.all(r).then(()=>{s(),ha(),t()}).catch(()=>{s(),ha(),n()})})}var VI={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Lu,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=pe}=t;K.searchPseudoElements&&Lu(n)}}};let Du=!1;var zI={mixout(){return{dom:{unwatch(){Ip(),Du=!0}}}},hooks(){return{bootstrap(){Pu(ca("mutationObserverCallbacks",{}))},noAuto(){II()},watch(e){const{observeMutationsRoot:t}=e;Du?ha():Pu(ca("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Fu=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var KI={mixout(){return{parse:{transform:e=>Fu(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Fu(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:s,iconWidth:i}=t;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),l={transform:"".concat(a," ").concat(c," ").concat(u)},f={transform:"translate(".concat(i/2*-1," -256)")},d={outer:o,inner:l,path:f};return{tag:"g",attributes:O({},d.outer),children:[{tag:"g",attributes:O({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:O(O({},n.icon.attributes),d.path)}]}]}}}};const ho={x:0,y:0,width:"100%",height:"100%"};function Uu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function GI(e){return e.tag==="g"?e.children:[e]}var qI={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?xi(n.split(" ").map(s=>s.trim())):vp();return r.prefix||(r.prefix=fn()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=t;const{width:c,icon:u}=s,{width:l,icon:f}=i,d=jS({transform:a,containerWidth:l,iconWidth:c}),p={tag:"rect",attributes:O(O({},ho),{},{fill:"white"})},_=u.children?{children:u.children.map(Uu)}:{},m={tag:"g",attributes:O({},d.inner),children:[Uu(O({tag:u.tag,attributes:O(O({},u.attributes),d.path)},_))]},S={tag:"g",attributes:O({},d.outer),children:[m]},w="mask-".concat(o||Qr()),b="clip-".concat(o||Qr()),h={tag:"mask",attributes:O(O({},ho),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,S]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:GI(f)},h]};return n.push(v,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(w,")")},ho)}),{children:n,attributes:r}}}},YI={provides(e){let t=!1;un.matchMedia&&(t=un.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:O(O({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=O(O({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:O(O({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:O(O({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:O(O({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:O(O({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:O(O({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},JI={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},XI=[WS,MI,LI,DI,FI,VI,zI,KI,qI,YI,JI];aI(XI,{mixoutsTo:qe});qe.noAuto;qe.config;const QI=qe.library;qe.dom;const ga=qe.parse;qe.findIconDefinition;qe.toHtml;const ZI=qe.icon;qe.layer;qe.text;qe.counter;function Hu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function kt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hu(Object(n),!0).forEach(function(r){He(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function eT(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function tT(e){var t=eT(e,"string");return typeof t=="symbol"?t:t+""}function fi(e){"@babel/helpers - typeof";return fi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fi(e)}function He(e,t,n){return t=tT(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nT(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function rT(e,t){if(e==null)return{};var n=nT(e,t),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var sT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Cp={exports:{}};(function(e){(function(t){var n=function(w,b,h){if(!u(b)||f(b)||d(b)||p(b)||c(b))return b;var v,E=0,T=0;if(l(b))for(v=[],T=b.length;E<T;E++)v.push(n(w,b[E],h));else{v={};for(var k in b)Object.prototype.hasOwnProperty.call(b,k)&&(v[w(k,h)]=n(w,b[k],h))}return v},r=function(w,b){b=b||{};var h=b.separator||"_",v=b.split||/(?=[A-Z])/;return w.split(v).join(h)},s=function(w){return _(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(b,h){return h?h.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var b=s(w);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(w,b){return r(w,b).toLowerCase()},a=Object.prototype.toString,c=function(w){return typeof w=="function"},u=function(w){return w===Object(w)},l=function(w){return a.call(w)=="[object Array]"},f=function(w){return a.call(w)=="[object Date]"},d=function(w){return a.call(w)=="[object RegExp]"},p=function(w){return a.call(w)=="[object Boolean]"},_=function(w){return w=w-0,w===w},m=function(w,b){var h=b&&"process"in b?b.process:b;return typeof h!="function"?w:function(v,E){return h(v,w,E)}},S={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,b){return n(m(s,b),w)},decamelizeKeys:function(w,b){return n(m(o,b),w,b)},pascalizeKeys:function(w,b){return n(m(i,b),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(sT)})(Cp);var iT=Cp.exports,oT=["class","style"];function aT(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),s=iT.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[s]=i,t},{})}function cT(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ap(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return Ap(c)}),s=Object.keys(e.attributes||{}).reduce(function(c,u){var l=e.attributes[u];switch(u){case"class":c.class=cT(l);break;case"style":c.style=aT(l);break;default:c.attrs[u]=l}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=rT(n,oT);return Ke(e.tag,kt(kt(kt({},t),{},{class:s.class,style:kt(kt({},s.style),o)},s.attrs),a),r)}var kp=!1;try{kp=!0}catch{}function lT(){if(!kp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function po(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?He({},e,t):{}}function uT(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},He(He(He(He(He(He(He(He(He(He(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),He(He(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ju(e){if(e&&fi(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ga.icon)return ga.icon(e);if(e===null)return null;if(fi(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var fT=gr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,s=Ae(function(){return ju(t.icon)}),i=Ae(function(){return po("classes",uT(t))}),o=Ae(function(){return po("transform",typeof t.transform=="string"?ga.transform(t.transform):t.transform)}),a=Ae(function(){return po("mask",ju(t.mask))}),c=Ae(function(){return ZI(s.value,kt(kt(kt(kt({},i.value),o.value),a.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});An(c,function(l){if(!l)return lT("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Ae(function(){return c.value?Ap(c.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const dT={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};QI.add(dT);const hT=lt(e=>{e.vueApp.component("font-awesome-icon",fT)}),pT=[Pv,Mv,t0,n0,r0,s0,o0,a0,u0,XE,hT],Pp=(e="RouteProvider")=>gr({name:e,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const n=t.renderKey,r=t.route,s={};for(const i in t.route)Object.defineProperty(s,i,{get:()=>n===t.renderKey?t.route[i]:r[i],enumerable:!0});return Xn(wi,Pt(s)),()=>t.vnode?Ke(t.vnode,{ref:t.vnodeRef}):t.vnode}}),gT=Pp(),$u=new WeakMap,mT=gr({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:t,slots:n,expose:r}){const s=Te(),i=xt(),o=Ge(wi,null);let a;r({pageRef:i});const c=Ge(N_,null);let u;const l=s.deferHydration();if(s.isHydrating){const d=s.hooks.hookOnce("app:error",l);et().beforeEach(d)}e.pageKey&&An(()=>e.pageKey,(d,p)=>{d!==p&&s.callHook("page:loading:start")});let f=!1;{const d=et().beforeResolve(()=>{f=!1});ss(()=>{d()})}return()=>Ke(nh,{name:e.name,route:e.route,...t},{default:d=>{const p=_T(o,d.route,d.Component),_=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!_)return u;l();return}if(u&&c&&!c.isCurrent(d.route))return u;if(p&&o&&(!c||c!=null&&c.isCurrent(o)))return _?u:null;const m=Vo(d,e.pageKey),S=vT(o,d.route,d.Component);!s.isHydrating&&a===m&&!S&&Br(()=>{f=!0,s.callHook("page:loading:end")}),a=m;const w=!!(e.transition??d.route.meta.pageTransition??il),b=w&&yT([e.transition,d.route.meta.pageTransition,il,{onAfterLeave(){delete s._runningTransition,s.callHook("page:transition:finish",d.Component)}}]),h=e.keepalive??d.route.meta.keepalive??m_;return u=Vb(w&&b,$b(h,Ke(nd,{suspensible:!0,onPending:()=>{w&&(s._runningTransition=!0),s.callHook("page:start",d.Component)},onResolve:()=>{Br(()=>s.callHook("page:finish",d.Component).then(()=>{if(!f&&!S)return f=!0,s.callHook("page:loading:end")}).finally(l))}},{default:()=>{const v={key:m||void 0,vnode:n.default?bT(n.default,d):d.Component,route:d.route,renderKey:m||void 0,trackRootNodes:w,vnodeRef:i};if(!h)return Ke(gT,v);const E=d.Component.type,T=E;let k=$u.get(T);return k||(k=Pp(E.name||E.__name),$u.set(T,k)),Ke(k,v)}}))).default(),u}})}});function yT(e){const t=e.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?za(n.onAfterLeave):void 0}));return xd(...t)}function _T(e,t,n){if(!e)return!1;const r=t.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:t.matched.slice(0,r).some((s,i)=>{var o,a,c;return((o=s.components)==null?void 0:o.default)!==((c=(a=e.matched[i])==null?void 0:a.components)==null?void 0:c.default)})||n&&Vo({route:t,Component:n})!==Vo({route:e,Component:n})}function vT(e,t,n){return e?t.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<t.matched.length-1:!1}function bT(e,t){const n=e(t);return n.length===1?Ke(n[0]):Ke(Oe,void 0,n)}const wT=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},ET={};function ST(e,t){const n=mT;return Qe(),gt(n)}const IT=wT(ET,[["render",ST]]),TT={__name:"nuxt-error-page",props:{error:Object},setup(e){const n=e.error;n.stack&&n.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,l=s?Ks(()=>rn(()=>import("./DF7PArDz.js"),__vite__mapDeps([10,8,11,12]),import.meta.url)):Ks(()=>rn(()=>import("./BnlbYWKn.js"),__vite__mapDeps([13,11,14]),import.meta.url));return(f,d)=>(Qe(),gt(ye(l),Wp(ld({statusCode:ye(r),statusMessage:ye(i),description:ye(o),stack:ye(a)})),null,16))}},CT={key:0},Bu={__name:"nuxt-root",setup(e){const t=()=>null,n=Te(),r=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",r);et().beforeEach(u)}const s=!1;Xn(wi,Md()),n.hooks.callHookWith(u=>u.map(l=>l()),"vue:setup");const i=Ei(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;Mf((u,l,f)=>{if(n.hooks.callHook("vue:error",u,l,f).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(Dd(u)&&(u.fatal||u.unhandled))return n.runWithContext(()=>wn(u)),!1});const c=!1;return(u,l)=>(Qe(),gt(nd,{onResolve:ye(r)},{default:Ef(()=>[ye(o)?(Qe(),Im("div",CT)):ye(i)?(Qe(),gt(ye(TT),{key:1,error:ye(i)},null,8,["error"])):ye(c)?(Qe(),gt(ye(t),{key:2,context:ye(c)},null,8,["context"])):ye(s)?(Qe(),gt(Vg(ye(s)),{key:3})):(Qe(),gt(ye(IT),{key:4}))]),_:1},8,["onResolve"]))}};let Wu;{let e;Wu=async function(){var o,a;if(e)return e;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?fy(Bu):uy(Bu),s=w_({vueApp:r});async function i(c){var u;await s.callHook("app:error",c),(u=s.payload).error||(u.error=Pn(c))}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await I_(s,pT)}catch(c){i(c)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(__),await s.hooks.callHook("app:mounted",r),await Br()}catch(c){i(c)}return r},e=Wu().catch(t=>{throw console.error("Error while mounting app:",t),t})}export{Ka as A,Fl as B,ss as C,MT as D,Ke as E,_d as F,L_ as G,l0 as H,Dn as I,Ua as J,os as K,Fy as L,Kr as M,OT as N,Nf as O,gf as P,wT as _,cd as a,be as b,Im as c,ud as d,T_ as e,Hd as f,An as g,Oa as h,Ge as i,Ra as j,ye as k,RT as l,kT as m,xT as n,Qe as o,mi as p,Te as q,xt as r,Ae as s,Kp as t,NT as u,PT as v,Ef as w,gr as x,et as y,$r as z};

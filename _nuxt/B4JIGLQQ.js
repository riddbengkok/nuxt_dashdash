const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BumnBjzp.js","./BIOjjMEG.js","./index.Bg1KwI4Z.css","./Chd59VL5.js","./B-W1TiBx.js","./login.Ba-TFbaN.css","./l4Tk8_GR.js","./DauerN8X.js","./Va_888p5.js","./BSvP_JgX.js","./CdNr1rAb.js","./BgsRRPMD.js","./error-404.2qf2XEnh.css","./Kt3mXQ-y.js","./error-500.DJkuMdtw.css"])))=>i.map(i=>d[i]);
var Lp=Object.defineProperty;var Dp=(e,t,n)=>t in e?Lp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Vt=(e,t,n)=>Dp(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ya(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const he={},Vn=[],bt=()=>{},Fp=()=>!1,Qr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),_a=e=>e.startsWith("onUpdate:"),Ie=Object.assign,ba=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Up=Object.prototype.hasOwnProperty,ce=(e,t)=>Up.call(e,t),X=Array.isArray,zn=e=>Zr(e)==="[object Map]",qu=e=>Zr(e)==="[object Set]",Hp=e=>Zr(e)==="[object RegExp]",Q=e=>typeof e=="function",_e=e=>typeof e=="string",$t=e=>typeof e=="symbol",ge=e=>e!==null&&typeof e=="object",Yu=e=>(ge(e)||Q(e))&&Q(e.then)&&Q(e.catch),Ju=Object.prototype.toString,Zr=e=>Ju.call(e),$p=e=>Zr(e).slice(8,-1),Xu=e=>Zr(e)==="[object Object]",va=e=>_e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kn=ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},jp=/-(\w)/g,Ze=fi(e=>e.replace(jp,(t,n)=>n?n.toUpperCase():"")),Bp=/\B([A-Z])/g,Ln=fi(e=>e.replace(Bp,"-$1").toLowerCase()),di=fi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ni=fi(e=>e?`on${di(e)}`:""),sn=(e,t)=>!Object.is(e,t),Tr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},go=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Wp=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Qu=e=>{const t=_e(e)?Number(e):NaN;return isNaN(t)?e:t};let wc;const hi=()=>wc||(wc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pi(e){if(X(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=_e(r)?Gp(r):pi(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(_e(e)||ge(e))return e}const Vp=/;(?![^(]*\))/g,zp=/:([^]+)/,Kp=/\/\*[^]*?\*\//g;function Gp(e){const t={};return e.replace(Kp,"").split(Vp).forEach(n=>{if(n){const r=n.split(zp);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function gi(e){let t="";if(_e(e))t=e;else if(X(e))for(let n=0;n<e.length;n++){const r=gi(e[n]);r&&(t+=r+" ")}else if(ge(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function qp(e){if(!e)return null;let{class:t,style:n}=e;return t&&!_e(t)&&(e.class=gi(t)),n&&(e.style=pi(n)),e}const Yp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jp=ya(Yp);function Zu(e){return!!e||e===""}const ef=e=>!!(e&&e.__v_isRef===!0),Xp=e=>_e(e)?e:e==null?"":X(e)||ge(e)&&(e.toString===Ju||!Q(e.toString))?ef(e)?Xp(e.value):JSON.stringify(e,tf,2):String(e),tf=(e,t)=>ef(t)?tf(e,t.value):zn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Mi(r,i)+" =>"]=s,n),{})}:qu(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Mi(n))}:$t(t)?Mi(t):ge(t)&&!X(t)&&!Xu(t)?String(t):t,Mi=(e,t="")=>{var n;return $t(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $e;class nf{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=$e;try{return $e=this,t()}finally{$e=n}}}on(){++this._on===1&&(this.prevScope=$e,$e=this)}off(){this._on>0&&--this._on===0&&($e=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qp(e){return new nf(e)}function rf(){return $e}let de;const Li=new WeakSet;class sf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$e&&$e.active&&$e.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Li.has(this)&&(Li.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||af(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ec(this),cf(this);const t=de,n=st;de=this,st=!0;try{return this.fn()}finally{lf(this),de=t,st=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Sa(t);this.deps=this.depsTail=void 0,Ec(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Li.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){mo(this)&&this.run()}get dirty(){return mo(this)}}let of=0,Cr,Ar;function af(e,t=!1){if(e.flags|=8,t){e.next=Ar,Ar=e;return}e.next=Cr,Cr=e}function wa(){of++}function Ea(){if(--of>0)return;if(Ar){let t=Ar;for(Ar=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Cr;){let t=Cr;for(Cr=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function cf(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function lf(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Sa(r),Zp(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function mo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(uf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function uf(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ur)||(e.globalVersion=Ur,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!mo(e))))return;e.flags|=2;const t=e.dep,n=de,r=st;de=e,st=!0;try{cf(e);const s=e.fn(e._value);(t.version===0||sn(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{de=n,st=r,lf(e),e.flags&=-3}}function Sa(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Sa(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Zp(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let st=!0;const ff=[];function Nt(){ff.push(st),st=!1}function Mt(){const e=ff.pop();st=e===void 0?!0:e}function Ec(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=de;de=void 0;try{t()}finally{de=n}}}let Ur=0;class eg{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ia{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!de||!st||de===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==de)n=this.activeLink=new eg(de,this),de.deps?(n.prevDep=de.depsTail,de.depsTail.nextDep=n,de.depsTail=n):de.deps=de.depsTail=n,df(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=de.depsTail,n.nextDep=void 0,de.depsTail.nextDep=n,de.depsTail=n,de.deps===n&&(de.deps=r)}return n}trigger(t){this.version++,Ur++,this.notify(t)}notify(t){wa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ea()}}}function df(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)df(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const $s=new WeakMap,Tn=Symbol(""),yo=Symbol(""),Hr=Symbol("");function Re(e,t,n){if(st&&de){let r=$s.get(e);r||$s.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ia),s.map=r,s.key=n),s.track()}}function Ct(e,t,n,r,s,i){const o=$s.get(e);if(!o){Ur++;return}const a=c=>{c&&c.trigger()};if(wa(),t==="clear")o.forEach(a);else{const c=X(e),u=c&&va(n);if(c&&n==="length"){const l=Number(r);o.forEach((f,d)=>{(d==="length"||d===Hr||!$t(d)&&d>=l)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Hr)),t){case"add":c?u&&a(o.get("length")):(a(o.get(Tn)),zn(e)&&a(o.get(yo)));break;case"delete":c||(a(o.get(Tn)),zn(e)&&a(o.get(yo)));break;case"set":zn(e)&&a(o.get(Tn));break}}Ea()}function tg(e,t){const n=$s.get(e);return n&&n.get(t)}function Un(e){const t=se(e);return t===e?t:(Re(t,"iterate",Hr),it(e)?t:t.map(Me))}function Ta(e){return Re(e=se(e),"iterate",Hr),e}const ng={__proto__:null,[Symbol.iterator](){return Di(this,Symbol.iterator,Me)},concat(...e){return Un(this).concat(...e.map(t=>X(t)?Un(t):t))},entries(){return Di(this,"entries",e=>(e[1]=Me(e[1]),e))},every(e,t){return Et(this,"every",e,t,void 0,arguments)},filter(e,t){return Et(this,"filter",e,t,n=>n.map(Me),arguments)},find(e,t){return Et(this,"find",e,t,Me,arguments)},findIndex(e,t){return Et(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Et(this,"findLast",e,t,Me,arguments)},findLastIndex(e,t){return Et(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Et(this,"forEach",e,t,void 0,arguments)},includes(...e){return Fi(this,"includes",e)},indexOf(...e){return Fi(this,"indexOf",e)},join(e){return Un(this).join(e)},lastIndexOf(...e){return Fi(this,"lastIndexOf",e)},map(e,t){return Et(this,"map",e,t,void 0,arguments)},pop(){return _r(this,"pop")},push(...e){return _r(this,"push",e)},reduce(e,...t){return Sc(this,"reduce",e,t)},reduceRight(e,...t){return Sc(this,"reduceRight",e,t)},shift(){return _r(this,"shift")},some(e,t){return Et(this,"some",e,t,void 0,arguments)},splice(...e){return _r(this,"splice",e)},toReversed(){return Un(this).toReversed()},toSorted(e){return Un(this).toSorted(e)},toSpliced(...e){return Un(this).toSpliced(...e)},unshift(...e){return _r(this,"unshift",e)},values(){return Di(this,"values",Me)}};function Di(e,t,n){const r=Ta(e),s=r[t]();return r!==e&&!it(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const rg=Array.prototype;function Et(e,t,n,r,s,i){const o=Ta(e),a=o!==e&&!it(e),c=o[t];if(c!==rg[t]){const f=c.apply(e,i);return a?Me(f):f}let u=n;o!==e&&(a?u=function(f,d){return n.call(this,Me(f),d,e)}:n.length>2&&(u=function(f,d){return n.call(this,f,d,e)}));const l=c.call(o,u,r);return a&&s?s(l):l}function Sc(e,t,n,r){const s=Ta(e);let i=n;return s!==e&&(it(e)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,e)}):i=function(o,a,c){return n.call(this,o,Me(a),c,e)}),s[t](i,...r)}function Fi(e,t,n){const r=se(e);Re(r,"iterate",Hr);const s=r[t](...n);return(s===-1||s===!1)&&Pa(n[0])?(n[0]=se(n[0]),r[t](...n)):s}function _r(e,t,n=[]){Nt(),wa();const r=se(e)[t].apply(e,n);return Ea(),Mt(),r}const sg=ya("__proto__,__v_isRef,__isVue"),hf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($t));function ig(e){$t(e)||(e=String(e));const t=se(this);return Re(t,"has",e),t.hasOwnProperty(e)}class pf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?gg:_f:i?yf:mf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=X(t);if(!s){let c;if(o&&(c=ng[n]))return c;if(n==="hasOwnProperty")return ig}const a=Reflect.get(t,n,Se(t)?t:r);return($t(n)?hf.has(n):sg(n))||(s||Re(t,"get",n),i)?a:Se(a)?o&&va(n)?a:a.value:ge(a)?s?bf(a):hn(a):a}}class gf extends pf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=ln(i);if(!it(r)&&!ln(r)&&(i=se(i),r=se(r)),!X(t)&&Se(i)&&!Se(r))return c?!1:(i.value=r,!0)}const o=X(t)&&va(n)?Number(n)<t.length:ce(t,n),a=Reflect.set(t,n,r,Se(t)?t:s);return t===se(s)&&(o?sn(r,i)&&Ct(t,"set",n,r):Ct(t,"add",n,r)),a}deleteProperty(t,n){const r=ce(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Ct(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!$t(n)||!hf.has(n))&&Re(t,"has",n),r}ownKeys(t){return Re(t,"iterate",X(t)?"length":Tn),Reflect.ownKeys(t)}}class og extends pf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ag=new gf,cg=new og,lg=new gf(!0);const _o=e=>e,gs=e=>Reflect.getPrototypeOf(e);function ug(e,t,n){return function(...r){const s=this.__v_raw,i=se(s),o=zn(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,u=s[e](...r),l=n?_o:t?bo:Me;return!t&&Re(i,"iterate",c?yo:Tn),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[l(f[0]),l(f[1])]:l(f),done:d}},[Symbol.iterator](){return this}}}}function ms(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function fg(e,t){const n={get(s){const i=this.__v_raw,o=se(i),a=se(s);e||(sn(s,a)&&Re(o,"get",s),Re(o,"get",a));const{has:c}=gs(o),u=t?_o:e?bo:Me;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&Re(se(s),"iterate",Tn),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=se(i),a=se(s);return e||(sn(s,a)&&Re(o,"has",s),Re(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=se(a),u=t?_o:e?bo:Me;return!e&&Re(c,"iterate",Tn),a.forEach((l,f)=>s.call(i,u(l),u(f),o))}};return Ie(n,e?{add:ms("add"),set:ms("set"),delete:ms("delete"),clear:ms("clear")}:{add(s){!t&&!it(s)&&!ln(s)&&(s=se(s));const i=se(this);return gs(i).has.call(i,s)||(i.add(s),Ct(i,"add",s,s)),this},set(s,i){!t&&!it(i)&&!ln(i)&&(i=se(i));const o=se(this),{has:a,get:c}=gs(o);let u=a.call(o,s);u||(s=se(s),u=a.call(o,s));const l=c.call(o,s);return o.set(s,i),u?sn(i,l)&&Ct(o,"set",s,i):Ct(o,"add",s,i),this},delete(s){const i=se(this),{has:o,get:a}=gs(i);let c=o.call(i,s);c||(s=se(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&Ct(i,"delete",s,void 0),u},clear(){const s=se(this),i=s.size!==0,o=s.clear();return i&&Ct(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ug(s,e,t)}),n}function Ca(e,t){const n=fg(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const dg={get:Ca(!1,!1)},hg={get:Ca(!1,!0)},pg={get:Ca(!0,!1)};const mf=new WeakMap,yf=new WeakMap,_f=new WeakMap,gg=new WeakMap;function mg(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yg(e){return e.__v_skip||!Object.isExtensible(e)?0:mg($p(e))}function hn(e){return ln(e)?e:Aa(e,!1,ag,dg,mf)}function kt(e){return Aa(e,!1,lg,hg,yf)}function bf(e){return Aa(e,!0,cg,pg,_f)}function Aa(e,t,n,r,s){if(!ge(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=yg(e);if(i===0)return e;const o=s.get(e);if(o)return o;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function Gn(e){return ln(e)?Gn(e.__v_raw):!!(e&&e.__v_isReactive)}function ln(e){return!!(e&&e.__v_isReadonly)}function it(e){return!!(e&&e.__v_isShallow)}function Pa(e){return e?!!e.__v_raw:!1}function se(e){const t=e&&e.__v_raw;return t?se(t):e}function _g(e){return!ce(e,"__v_skip")&&Object.isExtensible(e)&&go(e,"__v_skip",!0),e}const Me=e=>ge(e)?hn(e):e,bo=e=>ge(e)?bf(e):e;function Se(e){return e?e.__v_isRef===!0:!1}function xt(e){return vf(e,!1)}function $r(e){return vf(e,!0)}function vf(e,t){return Se(e)?e:new bg(e,t)}class bg{constructor(t,n){this.dep=new Ia,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:se(t),this._value=n?t:Me(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||it(t)||ln(t);t=r?t:se(t),sn(t,n)&&(this._rawValue=t,this._value=r?t:Me(t),this.dep.trigger())}}function ye(e){return Se(e)?e.value:e}function vg(e){return Q(e)?e():ye(e)}const wg={get:(e,t,n)=>t==="__v_raw"?e:ye(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Se(s)&&!Se(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function wf(e){return Gn(e)?e:new Proxy(e,wg)}class Eg{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return tg(se(this._object),this._key)}}class Sg{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ig(e,t,n){return Se(e)?e:Q(e)?new Sg(e):ge(e)&&arguments.length>1?Tg(e,t,n):xt(e)}function Tg(e,t,n){const r=e[t];return Se(r)?r:new Eg(e,t,n)}class Cg{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ia(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ur-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return af(this,!0),!0}get value(){const t=this.dep.track();return uf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ag(e,t,n=!1){let r,s;return Q(e)?r=e:(r=e.get,s=e.set),new Cg(r,s,n)}const ys={},js=new WeakMap;let vn;function Pg(e,t=!1,n=vn){if(n){let r=js.get(n);r||js.set(n,r=[]),r.push(e)}}function kg(e,t,n=he){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=b=>s?b:it(b)||s===!1||s===0?Zt(b,1):Zt(b);let l,f,d,p,_=!1,m=!1;if(Se(e)?(f=()=>e.value,_=it(e)):Gn(e)?(f=()=>u(e),_=!0):X(e)?(m=!0,_=e.some(b=>Gn(b)||it(b)),f=()=>e.map(b=>{if(Se(b))return b.value;if(Gn(b))return u(b);if(Q(b))return c?c(b,2):b()})):Q(e)?t?f=c?()=>c(e,2):e:f=()=>{if(d){Nt();try{d()}finally{Mt()}}const b=vn;vn=l;try{return c?c(e,3,[p]):e(p)}finally{vn=b}}:f=bt,t&&s){const b=f,E=s===!0?1/0:s;f=()=>Zt(b(),E)}const S=rf(),w=()=>{l.stop(),S&&S.active&&ba(S.effects,l)};if(i&&t){const b=t;t=(...E)=>{b(...E),w()}}let v=m?new Array(e.length).fill(ys):ys;const h=b=>{if(!(!(l.flags&1)||!l.dirty&&!b))if(t){const E=l.run();if(s||_||(m?E.some((T,P)=>sn(T,v[P])):sn(E,v))){d&&d();const T=vn;vn=l;try{const P=[E,v===ys?void 0:m&&v[0]===ys?[]:v,p];v=E,c?c(t,3,P):t(...P)}finally{vn=T}}}else l.run()};return a&&a(h),l=new sf(f),l.scheduler=o?()=>o(h,!1):h,p=b=>Pg(b,!1,l),d=l.onStop=()=>{const b=js.get(l);if(b){if(c)c(b,4);else for(const E of b)E();js.delete(l)}},t?r?h(!0):v=l.run():o?o(h.bind(null,!0),!0):l.run(),w.pause=l.pause.bind(l),w.resume=l.resume.bind(l),w.stop=w,w}function Zt(e,t=1/0,n){if(t<=0||!ge(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Se(e))Zt(e.value,t,n);else if(X(e))for(let r=0;r<e.length;r++)Zt(e[r],t,n);else if(qu(e)||zn(e))e.forEach(r=>{Zt(r,t,n)});else if(Xu(e)){for(const r in e)Zt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Zt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function es(e,t,n,r){try{return r?e(...r):e()}catch(s){hr(s,t,n)}}function at(e,t,n,r){if(Q(e)){const s=es(e,t,n,r);return s&&Yu(s)&&s.catch(i=>{hr(i,t,n)}),s}if(X(e)){const s=[];for(let i=0;i<e.length;i++)s.push(at(e[i],t,n,r));return s}}function hr(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||he;if(t){let a=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const l=a.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](e,c,u)===!1)return}a=a.parent}if(i){Nt(),es(i,null,10,[e,c,u]),Mt();return}}Rg(e,n,s,r,o)}function Rg(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Le=[];let ht=-1;const qn=[];let qt=null,$n=0;const Ef=Promise.resolve();let Bs=null;function jr(e){const t=Bs||Ef;return e?t.then(this?e.bind(this):e):t}function Og(e){let t=ht+1,n=Le.length;for(;t<n;){const r=t+n>>>1,s=Le[r],i=Br(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function ka(e){if(!(e.flags&1)){const t=Br(e),n=Le[Le.length-1];!n||!(e.flags&2)&&t>=Br(n)?Le.push(e):Le.splice(Og(t),0,e),e.flags|=1,Sf()}}function Sf(){Bs||(Bs=Ef.then(If))}function vo(e){X(e)?qn.push(...e):qt&&e.id===-1?qt.splice($n+1,0,e):e.flags&1||(qn.push(e),e.flags|=1),Sf()}function Ic(e,t,n=ht+1){for(;n<Le.length;n++){const r=Le[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Le.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ws(e){if(qn.length){const t=[...new Set(qn)].sort((n,r)=>Br(n)-Br(r));if(qn.length=0,qt){qt.push(...t);return}for(qt=t,$n=0;$n<qt.length;$n++){const n=qt[$n];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}qt=null,$n=0}}const Br=e=>e.id==null?e.flags&2?-1:1/0:e.id;function If(e){try{for(ht=0;ht<Le.length;ht++){const t=Le[ht];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),es(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ht<Le.length;ht++){const t=Le[ht];t&&(t.flags&=-2)}ht=-1,Le.length=0,Ws(),Bs=null,(Le.length||qn.length)&&If()}}let Pe=null,Tf=null;function Vs(e){const t=Pe;return Pe=e,Tf=e&&e.type.__scopeId||null,t}function Cf(e,t=Pe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Dc(-1);const i=Vs(t);let o;try{o=e(...s)}finally{Vs(i),r._d&&Dc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function pt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Nt(),at(c,n,8,[e.el,a,e,t]),Mt())}}const xg=Symbol("_vte"),Af=e=>e.__isTeleport,Yt=Symbol("_leaveCb"),_s=Symbol("_enterCb");function Ng(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Oa(()=>{e.isMounted=!0}),ns(()=>{e.isUnmounting=!0}),e}const Je=[Function,Array],Pf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Je,onEnter:Je,onAfterEnter:Je,onEnterCancelled:Je,onBeforeLeave:Je,onLeave:Je,onAfterLeave:Je,onLeaveCancelled:Je,onBeforeAppear:Je,onAppear:Je,onAfterAppear:Je,onAppearCancelled:Je},kf=e=>{const t=e.subTree;return t.component?kf(t.component):t},Mg={name:"BaseTransition",props:Pf,setup(e,{slots:t}){const n=bi(),r=Ng();return()=>{const s=t.default&&xf(t.default(),!0);if(!s||!s.length)return;const i=Rf(s),o=se(e),{mode:a}=o;if(r.isLeaving)return Ui(i);const c=Tc(i);if(!c)return Ui(i);let u=wo(c,o,r,n,f=>u=f);c.type!==we&&sr(c,u);let l=n.subTree&&Tc(n.subTree);if(l&&l.type!==we&&!nt(c,l)&&kf(n).type!==we){let f=wo(l,o,r,n);if(sr(l,f),a==="out-in"&&c.type!==we)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,l=void 0},Ui(i);a==="in-out"&&c.type!==we?f.delayLeave=(d,p,_)=>{const m=Of(r,l);m[String(l.key)]=l,d[Yt]=()=>{p(),d[Yt]=void 0,delete u.delayedLeave,l=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,l=void 0}}:l=void 0}else l&&(l=void 0);return i}}};function Rf(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==we){t=n;break}}return t}const Lg=Mg;function Of(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function wo(e,t,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:S,onAppear:w,onAfterAppear:v,onAppearCancelled:h}=t,b=String(e.key),E=Of(n,e),T=(L,M)=>{L&&at(L,r,9,M)},P=(L,M)=>{const q=M[1];T(L,M),X(L)?L.every(N=>N.length<=1)&&q():L.length<=1&&q()},B={mode:o,persisted:a,beforeEnter(L){let M=c;if(!n.isMounted)if(i)M=S||c;else return;L[Yt]&&L[Yt](!0);const q=E[b];q&&nt(e,q)&&q.el[Yt]&&q.el[Yt](),T(M,[L])},enter(L){let M=u,q=l,N=f;if(!n.isMounted)if(i)M=w||u,q=v||l,N=h||f;else return;let Y=!1;const ne=L[_s]=ie=>{Y||(Y=!0,ie?T(N,[L]):T(q,[L]),B.delayedLeave&&B.delayedLeave(),L[_s]=void 0)};M?P(M,[L,ne]):ne()},leave(L,M){const q=String(e.key);if(L[_s]&&L[_s](!0),n.isUnmounting)return M();T(d,[L]);let N=!1;const Y=L[Yt]=ne=>{N||(N=!0,M(),ne?T(m,[L]):T(_,[L]),L[Yt]=void 0,E[q]===e&&delete E[q])};E[q]=e,p?P(p,[L,Y]):Y()},clone(L){const M=wo(L,t,n,r,s);return s&&s(M),M}};return B}function Ui(e){if(ts(e))return e=Lt(e),e.children=null,e}function Tc(e){if(!ts(e))return Af(e.type)&&e.children?Rf(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Q(n.default))return n.default()}}function sr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,sr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function xf(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Oe?(o.patchFlag&128&&s++,r=r.concat(xf(o.children,t,a))):(t||o.type!==we)&&r.push(a!=null?Lt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function pr(e,t){return Q(e)?Ie({name:e.name},t,{setup:e}):e}function Ra(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Yn(e,t,n,r,s=!1){if(X(e)){e.forEach((_,m)=>Yn(_,t&&(X(t)?t[m]:t),n,r,s));return}if(on(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Yn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Fa(r.component):r.el,o=s?null:i,{i:a,r:c}=e,u=t&&t.r,l=a.refs===he?a.refs={}:a.refs,f=a.setupState,d=se(f),p=f===he?()=>!1:_=>ce(d,_);if(u!=null&&u!==c&&(_e(u)?(l[u]=null,p(u)&&(f[u]=null)):Se(u)&&(u.value=null)),Q(c))es(c,a,12,[o,l]);else{const _=_e(c),m=Se(c);if(_||m){const S=()=>{if(e.f){const w=_?p(c)?f[c]:l[c]:c.value;s?X(w)&&ba(w,i):X(w)?w.includes(i)||w.push(i):_?(l[c]=[i],p(c)&&(f[c]=l[c])):(c.value=[i],e.k&&(l[e.k]=c.value))}else _?(l[c]=o,p(c)&&(f[c]=o)):m&&(c.value=o,e.k&&(l[e.k]=o))};o?(S.id=-1,Ce(S,n)):S()}}}let Cc=!1;const Hn=()=>{Cc||(console.error("Hydration completed but contains mismatches."),Cc=!0)},Dg=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",Fg=e=>e.namespaceURI.includes("MathML"),bs=e=>{if(e.nodeType===1){if(Dg(e))return"svg";if(Fg(e))return"mathml"}},Bn=e=>e.nodeType===8;function Ug(e){const{mt:t,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:u}}=e,l=(h,b)=>{if(!b.hasChildNodes()){n(null,h,b),Ws(),b._vnode=h;return}f(b.firstChild,h,null,null,null),Ws(),b._vnode=h},f=(h,b,E,T,P,B=!1)=>{B=B||!!b.dynamicChildren;const L=Bn(h)&&h.data==="[",M=()=>m(h,b,E,T,P,L),{type:q,ref:N,shapeFlag:Y,patchFlag:ne}=b;let ie=h.nodeType;b.el=h,ne===-2&&(B=!1,b.dynamicChildren=null);let W=null;switch(q){case Pn:ie!==3?b.children===""?(c(b.el=s(""),o(h),h),W=h):W=M():(h.data!==b.children&&(Hn(),h.data=b.children),W=i(h));break;case we:v(h)?(W=i(h),w(b.el=h.content.firstChild,h,E)):ie!==8||L?W=M():W=i(h);break;case ks:if(L&&(h=i(h),ie=h.nodeType),ie===1||ie===3){W=h;const te=!b.children.length;for(let V=0;V<b.staticCount;V++)te&&(b.children+=W.nodeType===1?W.outerHTML:W.data),V===b.staticCount-1&&(b.anchor=W),W=i(W);return L?i(W):W}else M();break;case Oe:L?W=_(h,b,E,T,P,B):W=M();break;default:if(Y&1)(ie!==1||b.type.toLowerCase()!==h.tagName.toLowerCase())&&!v(h)?W=M():W=d(h,b,E,T,P,B);else if(Y&6){b.slotScopeIds=P;const te=o(h);if(L?W=S(h):Bn(h)&&h.data==="teleport start"?W=S(h,h.data,"teleport end"):W=i(h),t(b,te,null,E,T,bs(te),B),on(b)&&!b.type.__asyncResolved){let V;L?(V=ve(Oe),V.anchor=W?W.previousSibling:te.lastChild):V=h.nodeType===3?pd(""):ve("div"),V.el=h,b.component.subTree=V}}else Y&64?ie!==8?W=M():W=b.type.hydrate(h,b,E,T,P,B,e,p):Y&128&&(W=b.type.hydrate(h,b,E,T,bs(o(h)),P,B,e,f))}return N!=null&&Yn(N,null,T,b),W},d=(h,b,E,T,P,B)=>{B=B||!!b.dynamicChildren;const{type:L,props:M,patchFlag:q,shapeFlag:N,dirs:Y,transition:ne}=b,ie=L==="input"||L==="option";if(ie||q!==-1){Y&&pt(b,null,E,"created");let W=!1;if(v(h)){W=td(null,ne)&&E&&E.vnode.props&&E.vnode.props.appear;const V=h.content.firstChild;if(W){const be=V.getAttribute("class");be&&(V.$cls=be),ne.beforeEnter(V)}w(V,h,E),b.el=h=V}if(N&16&&!(M&&(M.innerHTML||M.textContent))){let V=p(h.firstChild,b,h,E,T,P,B);for(;V;){vs(h,1)||Hn();const be=V;V=V.nextSibling,a(be)}}else if(N&8){let V=b.children;V[0]===`
`&&(h.tagName==="PRE"||h.tagName==="TEXTAREA")&&(V=V.slice(1)),h.textContent!==V&&(vs(h,0)||Hn(),h.textContent=b.children)}if(M){if(ie||!B||q&48){const V=h.tagName.includes("-");for(const be in M)(ie&&(be.endsWith("value")||be==="indeterminate")||Qr(be)&&!Kn(be)||be[0]==="."||V)&&r(h,be,null,M[be],void 0,E)}else if(M.onClick)r(h,"onClick",null,M.onClick,void 0,E);else if(q&4&&Gn(M.style))for(const V in M.style)M.style[V]}let te;(te=M&&M.onVnodeBeforeMount)&&je(te,E,b),Y&&pt(b,null,E,"beforeMount"),((te=M&&M.onVnodeMounted)||Y||W)&&cd(()=>{te&&je(te,E,b),W&&ne.enter(h),Y&&pt(b,null,E,"mounted")},T)}return h.nextSibling},p=(h,b,E,T,P,B,L)=>{L=L||!!b.dynamicChildren;const M=b.children,q=M.length;for(let N=0;N<q;N++){const Y=L?M[N]:M[N]=ze(M[N]),ne=Y.type===Pn;h?(ne&&!L&&N+1<q&&ze(M[N+1]).type===Pn&&(c(s(h.data.slice(Y.children.length)),E,i(h)),h.data=Y.children),h=f(h,Y,T,P,B,L)):ne&&!Y.children?c(Y.el=s(""),E):(vs(E,1)||Hn(),n(null,Y,E,null,T,P,bs(E),B))}return h},_=(h,b,E,T,P,B)=>{const{slotScopeIds:L}=b;L&&(P=P?P.concat(L):L);const M=o(h),q=p(i(h),b,M,E,T,P,B);return q&&Bn(q)&&q.data==="]"?i(b.anchor=q):(Hn(),c(b.anchor=u("]"),M,q),q)},m=(h,b,E,T,P,B)=>{if(vs(h.parentElement,1)||Hn(),b.el=null,B){const q=S(h);for(;;){const N=i(h);if(N&&N!==q)a(N);else break}}const L=i(h),M=o(h);return a(h),n(null,b,M,L,E,T,bs(M),P),E&&(E.vnode.el=b.el,_i(E,b.el)),L},S=(h,b="[",E="]")=>{let T=0;for(;h;)if(h=i(h),h&&Bn(h)&&(h.data===b&&T++,h.data===E)){if(T===0)return i(h);T--}return h},w=(h,b,E)=>{const T=b.parentNode;T&&T.replaceChild(h,b);let P=E;for(;P;)P.vnode.el===b&&(P.vnode.el=P.subTree.el=h),P=P.parent},v=h=>h.nodeType===1&&h.tagName==="TEMPLATE";return[l,f]}const Ac="data-allow-mismatch",Hg={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function vs(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(Ac);)e=e.parentElement;const n=e&&e.getAttribute(Ac);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return t===0&&r.includes("children")?!0:r.includes(Hg[t])}}hi().requestIdleCallback;hi().cancelIdleCallback;function $g(e,t){if(Bn(e)&&e.data==="["){let n=1,r=e.nextSibling;for(;r;){if(r.nodeType===1){if(t(r)===!1)break}else if(Bn(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else t(e)}const on=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function zs(e){Q(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=e;let u=null,l,f=0;const d=()=>(f++,u=null,p()),p=()=>{let _;return u||(_=u=t().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),c)return new Promise((S,w)=>{c(m,()=>S(d()),()=>w(m),f+1)});throw m}).then(m=>_!==u&&u?u:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),l=m,m)))};return pr({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(_,m,S){const w=i?()=>{const h=i(()=>{S()},b=>$g(_,b));h&&(m.bum||(m.bum=[])).push(h),(m.u||(m.u=[])).push(()=>!0)}:S;l?w():p().then(()=>!m.isUnmounted&&w())},get __asyncResolved(){return l},setup(){const _=Ee;if(Ra(_),l)return()=>Hi(l,_);const m=h=>{u=null,hr(h,_,13,!r)};if(a&&_.suspense||or)return p().then(h=>()=>Hi(h,_)).catch(h=>(m(h),()=>r?ve(r,{error:h}):null));const S=xt(!1),w=xt(),v=xt(!!s);return s&&setTimeout(()=>{v.value=!1},s),o!=null&&setTimeout(()=>{if(!S.value&&!w.value){const h=new Error(`Async component timed out after ${o}ms.`);m(h),w.value=h}},o),p().then(()=>{S.value=!0,_.parent&&ts(_.parent.vnode)&&_.parent.update()}).catch(h=>{m(h),w.value=h}),()=>{if(S.value&&l)return Hi(l,_);if(w.value&&r)return ve(r,{error:w.value});if(n&&!v.value)return ve(n)}}})}function Hi(e,t){const{ref:n,props:r,children:s,ce:i}=t.vnode,o=ve(e,r,s);return o.ref=n,o.ce=i,delete t.vnode.ce,o}const ts=e=>e.type.__isKeepAlive,jg={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=bi(),r=n.ctx;if(!r.renderer)return()=>{const v=t.default&&t.default();return v&&v.length===1?v[0]:v};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:u,um:l,o:{createElement:f}}}=r,d=f("div");r.activate=(v,h,b,E,T)=>{const P=v.component;u(v,h,b,0,a),c(P.vnode,v,h,b,P,a,E,v.slotScopeIds,T),Ce(()=>{P.isDeactivated=!1,P.a&&Tr(P.a);const B=v.props&&v.props.onVnodeMounted;B&&je(B,P.parent,v)},a)},r.deactivate=v=>{const h=v.component;Gs(h.m),Gs(h.a),u(v,d,null,1,a),Ce(()=>{h.da&&Tr(h.da);const b=v.props&&v.props.onVnodeUnmounted;b&&je(b,h.parent,v),h.isDeactivated=!0},a)};function p(v){$i(v),l(v,n,a,!0)}function _(v){s.forEach((h,b)=>{const E=ko(h.type);E&&!v(E)&&m(b)})}function m(v){const h=s.get(v);h&&(!o||!nt(h,o))?p(h):o&&$i(o),s.delete(v),i.delete(v)}An(()=>[e.include,e.exclude],([v,h])=>{v&&_(b=>Er(v,b)),h&&_(b=>!Er(h,b))},{flush:"post",deep:!0});let S=null;const w=()=>{S!=null&&(qs(n.subTree.type)?Ce(()=>{s.set(S,ws(n.subTree))},n.subTree.suspense):s.set(S,ws(n.subTree)))};return Oa(w),Df(w),ns(()=>{s.forEach(v=>{const{subTree:h,suspense:b}=n,E=ws(h);if(v.type===E.type&&v.key===E.key){$i(E);const T=E.component.da;T&&Ce(T,b);return}p(v)})}),()=>{if(S=null,!t.default)return o=null;const v=t.default(),h=v[0];if(v.length>1)return o=null,v;if(!On(h)||!(h.shapeFlag&4)&&!(h.shapeFlag&128))return o=null,h;let b=ws(h);if(b.type===we)return o=null,b;const E=b.type,T=ko(on(b)?b.type.__asyncResolved||{}:E),{include:P,exclude:B,max:L}=e;if(P&&(!T||!Er(P,T))||B&&T&&Er(B,T))return b.shapeFlag&=-257,o=b,h;const M=b.key==null?E:b.key,q=s.get(M);return b.el&&(b=Lt(b),h.shapeFlag&128&&(h.ssContent=b)),S=M,q?(b.el=q.el,b.component=q.component,b.transition&&sr(b,b.transition),b.shapeFlag|=512,i.delete(M),i.add(M)):(i.add(M),L&&i.size>parseInt(L,10)&&m(i.values().next().value)),b.shapeFlag|=256,o=b,qs(h.type)?h:b}}},Bg=jg;function Er(e,t){return X(e)?e.some(n=>Er(n,t)):_e(e)?e.split(",").includes(t):Hp(e)?(e.lastIndex=0,e.test(t)):!1}function Nf(e,t){Lf(e,"a",t)}function Mf(e,t){Lf(e,"da",t)}function Lf(e,t,n=Ee){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(mi(t,r,n),n){let s=n.parent;for(;s&&s.parent;)ts(s.parent.vnode)&&Wg(r,t,n,s),s=s.parent}}function Wg(e,t,n,r){const s=mi(t,e,r,!0);Ff(()=>{ba(r[t],s)},n)}function $i(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ws(e){return e.shapeFlag&128?e.ssContent:e}function mi(e,t,n=Ee,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Nt();const a=rs(n),c=at(t,n,e,o);return a(),Mt(),c});return r?s.unshift(i):s.push(i),i}}const jt=e=>(t,n=Ee)=>{(!or||e==="sp")&&mi(e,(...r)=>t(...r),n)},Vg=jt("bm"),Oa=jt("m"),zg=jt("bu"),Df=jt("u"),ns=jt("bum"),Ff=jt("um"),Kg=jt("sp"),Gg=jt("rtg"),qg=jt("rtc");function Uf(e,t=Ee){mi("ec",e,t)}const Hf="components";function gC(e,t){return jf(Hf,e,!0,t)||e}const $f=Symbol.for("v-ndc");function Yg(e){return _e(e)?jf(Hf,e,!1)||e:e||$f}function jf(e,t,n=!0,r=!1){const s=Pe||Ee;if(s){const i=s.type;{const a=ko(i,!1);if(a&&(a===t||a===Ze(t)||a===di(Ze(t))))return i}const o=Pc(s[e]||i[e],t)||Pc(s.appContext[e],t);return!o&&r?i:o}}function Pc(e,t){return e&&(e[t]||e[Ze(t)]||e[di(Ze(t))])}function mC(e,t,n={},r,s){if(Pe.ce||Pe.parent&&on(Pe.parent)&&Pe.parent.ce)return Qe(),gt(Oe,null,[ve("slot",n,r)],64);let i=e[t];i&&i._c&&(i._d=!1),Qe();const o=i&&Bf(i(n)),a=n.key||o&&o.key,c=gt(Oe,{key:(a&&!$t(a)?a:`_${t}`)+(!o&&r?"_fb":"")},o||[],o&&e._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Bf(e){return e.some(t=>On(t)?!(t.type===we||t.type===Oe&&!Bf(t.children)):!0)?e:null}const Eo=e=>e?gd(e)?Fa(e):Eo(e.parent):null,Pr=Ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Eo(e.parent),$root:e=>Eo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Vf(e),$forceUpdate:e=>e.f||(e.f=()=>{ka(e.update)}),$nextTick:e=>e.n||(e.n=jr.bind(e.proxy)),$watch:e=>mm.bind(e)}),ji=(e,t)=>e!==he&&!e.__isScriptSetup&&ce(e,t),Jg={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let u;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(ji(r,t))return o[t]=1,r[t];if(s!==he&&ce(s,t))return o[t]=2,s[t];if((u=e.propsOptions[0])&&ce(u,t))return o[t]=3,i[t];if(n!==he&&ce(n,t))return o[t]=4,n[t];So&&(o[t]=0)}}const l=Pr[t];let f,d;if(l)return t==="$attrs"&&Re(e.attrs,"get",""),l(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==he&&ce(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,ce(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return ji(s,t)?(s[t]=n,!0):r!==he&&ce(r,t)?(r[t]=n,!0):ce(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==he&&ce(e,o)||ji(t,o)||(a=i[0])&&ce(a,o)||ce(r,o)||ce(Pr,o)||ce(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ce(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function kc(e){return X(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let So=!0;function Xg(e){const t=Vf(e),n=e.proxy,r=e.ctx;So=!1,t.beforeCreate&&Rc(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:m,deactivated:S,beforeDestroy:w,beforeUnmount:v,destroyed:h,unmounted:b,render:E,renderTracked:T,renderTriggered:P,errorCaptured:B,serverPrefetch:L,expose:M,inheritAttrs:q,components:N,directives:Y,filters:ne}=t;if(u&&Qg(u,r,null),o)for(const te in o){const V=o[te];Q(V)&&(r[te]=V.bind(n))}if(s){const te=s.call(n,n);ge(te)&&(e.data=hn(te))}if(So=!0,i)for(const te in i){const V=i[te],be=Q(V)?V.bind(n,n):Q(V.get)?V.get.bind(n,n):bt,Wt=!Q(V)&&Q(V.set)?V.set.bind(n):bt,ut=Ae({get:be,set:Wt});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>ut.value,set:Fe=>ut.value=Fe})}if(a)for(const te in a)Wf(a[te],r,n,te);if(c){const te=Q(c)?c.call(n):c;Reflect.ownKeys(te).forEach(V=>{Jn(V,te[V])})}l&&Rc(l,e,"c");function W(te,V){X(V)?V.forEach(be=>te(be.bind(n))):V&&te(V.bind(n))}if(W(Vg,f),W(Oa,d),W(zg,p),W(Df,_),W(Nf,m),W(Mf,S),W(Uf,B),W(qg,T),W(Gg,P),W(ns,v),W(Ff,b),W(Kg,L),X(M))if(M.length){const te=e.exposed||(e.exposed={});M.forEach(V=>{Object.defineProperty(te,V,{get:()=>n[V],set:be=>n[V]=be})})}else e.exposed||(e.exposed={});E&&e.render===bt&&(e.render=E),q!=null&&(e.inheritAttrs=q),N&&(e.components=N),Y&&(e.directives=Y),L&&Ra(e)}function Qg(e,t,n=bt){X(e)&&(e=Io(e));for(const r in e){const s=e[r];let i;ge(s)?"default"in s?i=Ge(s.from||r,s.default,!0):i=Ge(s.from||r):i=Ge(s),Se(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Rc(e,t,n){at(X(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Wf(e,t,n,r){let s=r.includes(".")?sd(n,r):()=>n[r];if(_e(e)){const i=t[e];Q(i)&&An(s,i)}else if(Q(e))An(s,e.bind(n));else if(ge(e))if(X(e))e.forEach(i=>Wf(i,t,n,r));else{const i=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(i)&&An(s,i,e)}}function Vf(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(u=>Ks(c,u,o,!0)),Ks(c,t,o)),ge(t)&&i.set(t,c),c}function Ks(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Ks(e,i,n,!0),s&&s.forEach(o=>Ks(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Zg[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Zg={data:Oc,props:xc,emits:xc,methods:Sr,computed:Sr,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:Sr,directives:Sr,watch:tm,provide:Oc,inject:em};function Oc(e,t){return t?e?function(){return Ie(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function em(e,t){return Sr(Io(e),Io(t))}function Io(e){if(X(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ne(e,t){return e?[...new Set([].concat(e,t))]:t}function Sr(e,t){return e?Ie(Object.create(null),e,t):t}function xc(e,t){return e?X(e)&&X(t)?[...new Set([...e,...t])]:Ie(Object.create(null),kc(e),kc(t??{})):t}function tm(e,t){if(!e)return t;if(!t)return e;const n=Ie(Object.create(null),e);for(const r in t)n[r]=Ne(e[r],t[r]);return n}function zf(){return{app:null,config:{isNativeTag:Fp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nm=0;function rm(e,t){return function(r,s=null){Q(r)||(r=Ie({},r)),s!=null&&!ge(s)&&(s=null);const i=zf(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:nm++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:$m,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&Q(l.install)?(o.add(l),l.install(u,...f)):Q(l)&&(o.add(l),l(u,...f))),u},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),u},component(l,f){return f?(i.components[l]=f,u):i.components[l]},directive(l,f){return f?(i.directives[l]=f,u):i.directives[l]},mount(l,f,d){if(!c){const p=u._ceVNode||ve(r,s);return p.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),f&&t?t(p,l):e(p,l,d),c=!0,u._container=l,l.__vue_app__=u,Fa(p.component)}},onUnmount(l){a.push(l)},unmount(){c&&(at(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(l,f){return i.provides[l]=f,u},runWithContext(l){const f=Cn;Cn=u;try{return l()}finally{Cn=f}}};return u}}let Cn=null;function Jn(e,t){if(Ee){let n=Ee.provides;const r=Ee.parent&&Ee.parent.provides;r===n&&(n=Ee.provides=Object.create(r)),n[e]=t}}function Ge(e,t,n=!1){const r=Ee||Pe;if(r||Cn){let s=Cn?Cn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Q(t)?t.call(r&&r.proxy):t}}function xa(){return!!(Ee||Pe||Cn)}const Kf={},Gf=()=>Object.create(Kf),qf=e=>Object.getPrototypeOf(e)===Kf;function sm(e,t,n,r=!1){const s={},i=Gf();e.propsDefaults=Object.create(null),Yf(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:kt(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function im(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=se(s),[c]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=e.vnode.dynamicProps;for(let f=0;f<l.length;f++){let d=l[f];if(yi(e.emitsOptions,d))continue;const p=t[d];if(c)if(ce(i,d))p!==i[d]&&(i[d]=p,u=!0);else{const _=Ze(d);s[_]=To(c,a,_,p,e,!1)}else p!==i[d]&&(i[d]=p,u=!0)}}}else{Yf(e,t,s,i)&&(u=!0);let l;for(const f in a)(!t||!ce(t,f)&&((l=Ln(f))===f||!ce(t,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(s[f]=To(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!ce(t,f))&&(delete i[f],u=!0)}u&&Ct(e.attrs,"set","")}function Yf(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Kn(c))continue;const u=t[c];let l;s&&ce(s,l=Ze(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:yi(e.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=se(n),u=a||he;for(let l=0;l<i.length;l++){const f=i[l];n[f]=To(s,c,f,u[f],e,!ce(u,f))}}return o}function To(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=ce(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Q(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const l=rs(s);r=u[n]=c.call(null,t),l()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ln(n))&&(r=!0))}return r}const om=new WeakMap;function Jf(e,t,n=!1){const r=n?om:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!Q(e)){const l=f=>{c=!0;const[d,p]=Jf(f,t,!0);Ie(o,d),p&&a.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!i&&!c)return ge(e)&&r.set(e,Vn),Vn;if(X(i))for(let l=0;l<i.length;l++){const f=Ze(i[l]);Nc(f)&&(o[f]=he)}else if(i)for(const l in i){const f=Ze(l);if(Nc(f)){const d=i[l],p=o[f]=X(d)||Q(d)?{type:d}:Ie({},d),_=p.type;let m=!1,S=!0;if(X(_))for(let w=0;w<_.length;++w){const v=_[w],h=Q(v)&&v.name;if(h==="Boolean"){m=!0;break}else h==="String"&&(S=!1)}else m=Q(_)&&_.name==="Boolean";p[0]=m,p[1]=S,(m||ce(p,"default"))&&a.push(f)}}const u=[o,a];return ge(e)&&r.set(e,u),u}function Nc(e){return e[0]!=="$"&&!Kn(e)}const Na=e=>e[0]==="_"||e==="$stable",Ma=e=>X(e)?e.map(ze):[ze(e)],am=(e,t,n)=>{if(t._n)return t;const r=Cf((...s)=>Ma(t(...s)),n);return r._c=!1,r},Xf=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Na(s))continue;const i=e[s];if(Q(i))t[s]=am(s,i,r);else if(i!=null){const o=Ma(i);t[s]=()=>o}}},Qf=(e,t)=>{const n=Ma(t);e.slots.default=()=>n},Zf=(e,t,n)=>{for(const r in t)(n||!Na(r))&&(e[r]=t[r])},cm=(e,t,n)=>{const r=e.slots=Gf();if(e.vnode.shapeFlag&32){const s=t.__;s&&go(r,"__",s,!0);const i=t._;i?(Zf(r,t,n),n&&go(r,"_",i,!0)):Xf(t,r)}else t&&Qf(e,t)},lm=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=he;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:Zf(s,t,n):(i=!t.$stable,Xf(t,s)),o=t}else t&&(Qf(e,t),o={default:1});if(i)for(const a in s)!Na(a)&&o[a]==null&&delete s[a]},Ce=cd;function um(e){return ed(e)}function fm(e){return ed(e,Ug)}function ed(e,t){const n=hi();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:d,setScopeId:p=bt,insertStaticContent:_}=e,m=(g,y,I,k=null,C=null,R=null,U=void 0,F=null,D=!!y.dynamicChildren)=>{if(g===y)return;g&&!nt(g,y)&&(k=A(g),Fe(g,C,R,!0),g=null),y.patchFlag===-2&&(D=!1,y.dynamicChildren=null);const{type:x,ref:J,shapeFlag:$}=y;switch(x){case Pn:S(g,y,I,k);break;case we:w(g,y,I,k);break;case ks:g==null&&v(y,I,k,U);break;case Oe:N(g,y,I,k,C,R,U,F,D);break;default:$&1?E(g,y,I,k,C,R,U,F,D):$&6?Y(g,y,I,k,C,R,U,F,D):($&64||$&128)&&x.process(g,y,I,k,C,R,U,F,D,z)}J!=null&&C?Yn(J,g&&g.ref,R,y||g,!y):J==null&&g&&g.ref!=null&&Yn(g.ref,null,R,g,!0)},S=(g,y,I,k)=>{if(g==null)r(y.el=a(y.children),I,k);else{const C=y.el=g.el;y.children!==g.children&&u(C,y.children)}},w=(g,y,I,k)=>{g==null?r(y.el=c(y.children||""),I,k):y.el=g.el},v=(g,y,I,k)=>{[g.el,g.anchor]=_(g.children,y,I,k,g.el,g.anchor)},h=({el:g,anchor:y},I,k)=>{let C;for(;g&&g!==y;)C=d(g),r(g,I,k),g=C;r(y,I,k)},b=({el:g,anchor:y})=>{let I;for(;g&&g!==y;)I=d(g),s(g),g=I;s(y)},E=(g,y,I,k,C,R,U,F,D)=>{y.type==="svg"?U="svg":y.type==="math"&&(U="mathml"),g==null?T(y,I,k,C,R,U,F,D):L(g,y,C,R,U,F,D)},T=(g,y,I,k,C,R,U,F)=>{let D,x;const{props:J,shapeFlag:$,transition:G,dirs:ee}=g;if(D=g.el=o(g.type,R,J&&J.is,J),$&8?l(D,g.children):$&16&&B(g.children,D,null,k,C,Bi(g,R),U,F),ee&&pt(g,null,k,"created"),P(D,g,g.scopeId,U,k),J){for(const fe in J)fe!=="value"&&!Kn(fe)&&i(D,fe,null,J[fe],R,k);"value"in J&&i(D,"value",null,J.value,R),(x=J.onVnodeBeforeMount)&&je(x,k,g)}ee&&pt(g,null,k,"beforeMount");const re=td(C,G);re&&G.beforeEnter(D),r(D,y,I),((x=J&&J.onVnodeMounted)||re||ee)&&Ce(()=>{x&&je(x,k,g),re&&G.enter(D),ee&&pt(g,null,k,"mounted")},C)},P=(g,y,I,k,C)=>{if(I&&p(g,I),k)for(let R=0;R<k.length;R++)p(g,k[R]);if(C){let R=C.subTree;if(y===R||qs(R.type)&&(R.ssContent===y||R.ssFallback===y)){const U=C.vnode;P(g,U,U.scopeId,U.slotScopeIds,C.parent)}}},B=(g,y,I,k,C,R,U,F,D=0)=>{for(let x=D;x<g.length;x++){const J=g[x]=F?Jt(g[x]):ze(g[x]);m(null,J,y,I,k,C,R,U,F)}},L=(g,y,I,k,C,R,U)=>{const F=y.el=g.el;let{patchFlag:D,dynamicChildren:x,dirs:J}=y;D|=g.patchFlag&16;const $=g.props||he,G=y.props||he;let ee;if(I&&mn(I,!1),(ee=G.onVnodeBeforeUpdate)&&je(ee,I,y,g),J&&pt(y,g,I,"beforeUpdate"),I&&mn(I,!0),($.innerHTML&&G.innerHTML==null||$.textContent&&G.textContent==null)&&l(F,""),x?M(g.dynamicChildren,x,F,I,k,Bi(y,C),R):U||V(g,y,F,null,I,k,Bi(y,C),R,!1),D>0){if(D&16)q(F,$,G,I,C);else if(D&2&&$.class!==G.class&&i(F,"class",null,G.class,C),D&4&&i(F,"style",$.style,G.style,C),D&8){const re=y.dynamicProps;for(let fe=0;fe<re.length;fe++){const le=re[fe],Ue=$[le],ke=G[le];(ke!==Ue||le==="value")&&i(F,le,Ue,ke,C,I)}}D&1&&g.children!==y.children&&l(F,y.children)}else!U&&x==null&&q(F,$,G,I,C);((ee=G.onVnodeUpdated)||J)&&Ce(()=>{ee&&je(ee,I,y,g),J&&pt(y,g,I,"updated")},k)},M=(g,y,I,k,C,R,U)=>{for(let F=0;F<y.length;F++){const D=g[F],x=y[F],J=D.el&&(D.type===Oe||!nt(D,x)||D.shapeFlag&198)?f(D.el):I;m(D,x,J,null,k,C,R,U,!0)}},q=(g,y,I,k,C)=>{if(y!==I){if(y!==he)for(const R in y)!Kn(R)&&!(R in I)&&i(g,R,y[R],null,C,k);for(const R in I){if(Kn(R))continue;const U=I[R],F=y[R];U!==F&&R!=="value"&&i(g,R,F,U,C,k)}"value"in I&&i(g,"value",y.value,I.value,C)}},N=(g,y,I,k,C,R,U,F,D)=>{const x=y.el=g?g.el:a(""),J=y.anchor=g?g.anchor:a("");let{patchFlag:$,dynamicChildren:G,slotScopeIds:ee}=y;ee&&(F=F?F.concat(ee):ee),g==null?(r(x,I,k),r(J,I,k),B(y.children||[],I,J,C,R,U,F,D)):$>0&&$&64&&G&&g.dynamicChildren?(M(g.dynamicChildren,G,I,C,R,U,F),(y.key!=null||C&&y===C.subTree)&&nd(g,y,!0)):V(g,y,I,J,C,R,U,F,D)},Y=(g,y,I,k,C,R,U,F,D)=>{y.slotScopeIds=F,g==null?y.shapeFlag&512?C.ctx.activate(y,I,k,U,D):ne(y,I,k,C,R,U,D):ie(g,y,D)},ne=(g,y,I,k,C,R,U)=>{const F=g.component=Mm(g,k,C);if(ts(g)&&(F.ctx.renderer=z),Lm(F,!1,U),F.asyncDep){if(C&&C.registerDep(F,W,U),!g.el){const D=F.subTree=ve(we);w(null,D,y,I)}}else W(F,g,y,I,C,R,U)},ie=(g,y,I)=>{const k=y.component=g.component;if(Em(g,y,I))if(k.asyncDep&&!k.asyncResolved){te(k,y,I);return}else k.next=y,k.update();else y.el=g.el,k.vnode=y},W=(g,y,I,k,C,R,U)=>{const F=()=>{if(g.isMounted){let{next:$,bu:G,u:ee,parent:re,vnode:fe}=g;{const We=rd(g);if(We){$&&($.el=fe.el,te(g,$,U)),We.asyncDep.then(()=>{g.isUnmounted||F()});return}}let le=$,Ue;mn(g,!1),$?($.el=fe.el,te(g,$,U)):$=fe,G&&Tr(G),(Ue=$.props&&$.props.onVnodeBeforeUpdate)&&je(Ue,re,$,fe),mn(g,!0);const ke=Wi(g),tt=g.subTree;g.subTree=ke,m(tt,ke,f(tt.el),A(tt),g,C,R),$.el=ke.el,le===null&&_i(g,ke.el),ee&&Ce(ee,C),(Ue=$.props&&$.props.onVnodeUpdated)&&Ce(()=>je(Ue,re,$,fe),C)}else{let $;const{el:G,props:ee}=y,{bm:re,m:fe,parent:le,root:Ue,type:ke}=g,tt=on(y);if(mn(g,!1),re&&Tr(re),!tt&&($=ee&&ee.onVnodeBeforeMount)&&je($,le,y),mn(g,!0),G&&me){const We=()=>{g.subTree=Wi(g),me(G,g.subTree,g,C,null)};tt&&ke.__asyncHydrate?ke.__asyncHydrate(G,g,We):We()}else{Ue.ce&&Ue.ce._def.shadowRoot!==!1&&Ue.ce._injectChildStyle(ke);const We=g.subTree=Wi(g);m(null,We,I,k,g,C,R),y.el=We.el}if(fe&&Ce(fe,C),!tt&&($=ee&&ee.onVnodeMounted)){const We=y;Ce(()=>je($,le,We),C)}(y.shapeFlag&256||le&&on(le.vnode)&&le.vnode.shapeFlag&256)&&g.a&&Ce(g.a,C),g.isMounted=!0,y=I=k=null}};g.scope.on();const D=g.effect=new sf(F);g.scope.off();const x=g.update=D.run.bind(D),J=g.job=D.runIfDirty.bind(D);J.i=g,J.id=g.uid,D.scheduler=()=>ka(J),mn(g,!0),x()},te=(g,y,I)=>{y.component=g;const k=g.vnode.props;g.vnode=y,g.next=null,im(g,y.props,k,I),lm(g,y.children,I),Nt(),Ic(g),Mt()},V=(g,y,I,k,C,R,U,F,D=!1)=>{const x=g&&g.children,J=g?g.shapeFlag:0,$=y.children,{patchFlag:G,shapeFlag:ee}=y;if(G>0){if(G&128){Wt(x,$,I,k,C,R,U,F,D);return}else if(G&256){be(x,$,I,k,C,R,U,F,D);return}}ee&8?(J&16&&Ye(x,C,R),$!==x&&l(I,$)):J&16?ee&16?Wt(x,$,I,k,C,R,U,F,D):Ye(x,C,R,!0):(J&8&&l(I,""),ee&16&&B($,I,k,C,R,U,F,D))},be=(g,y,I,k,C,R,U,F,D)=>{g=g||Vn,y=y||Vn;const x=g.length,J=y.length,$=Math.min(x,J);let G;for(G=0;G<$;G++){const ee=y[G]=D?Jt(y[G]):ze(y[G]);m(g[G],ee,I,null,C,R,U,F,D)}x>J?Ye(g,C,R,!0,!1,$):B(y,I,k,C,R,U,F,D,$)},Wt=(g,y,I,k,C,R,U,F,D)=>{let x=0;const J=y.length;let $=g.length-1,G=J-1;for(;x<=$&&x<=G;){const ee=g[x],re=y[x]=D?Jt(y[x]):ze(y[x]);if(nt(ee,re))m(ee,re,I,null,C,R,U,F,D);else break;x++}for(;x<=$&&x<=G;){const ee=g[$],re=y[G]=D?Jt(y[G]):ze(y[G]);if(nt(ee,re))m(ee,re,I,null,C,R,U,F,D);else break;$--,G--}if(x>$){if(x<=G){const ee=G+1,re=ee<J?y[ee].el:k;for(;x<=G;)m(null,y[x]=D?Jt(y[x]):ze(y[x]),I,re,C,R,U,F,D),x++}}else if(x>G)for(;x<=$;)Fe(g[x],C,R,!0),x++;else{const ee=x,re=x,fe=new Map;for(x=re;x<=G;x++){const Ve=y[x]=D?Jt(y[x]):ze(y[x]);Ve.key!=null&&fe.set(Ve.key,x)}let le,Ue=0;const ke=G-re+1;let tt=!1,We=0;const yr=new Array(ke);for(x=0;x<ke;x++)yr[x]=0;for(x=ee;x<=$;x++){const Ve=g[x];if(Ue>=ke){Fe(Ve,C,R,!0);continue}let ft;if(Ve.key!=null)ft=fe.get(Ve.key);else for(le=re;le<=G;le++)if(yr[le-re]===0&&nt(Ve,y[le])){ft=le;break}ft===void 0?Fe(Ve,C,R,!0):(yr[ft-re]=x+1,ft>=We?We=ft:tt=!0,m(Ve,y[ft],I,null,C,R,U,F,D),Ue++)}const bc=tt?dm(yr):Vn;for(le=bc.length-1,x=ke-1;x>=0;x--){const Ve=re+x,ft=y[Ve],vc=Ve+1<J?y[Ve+1].el:k;yr[x]===0?m(null,ft,I,vc,C,R,U,F,D):tt&&(le<0||x!==bc[le]?ut(ft,I,vc,2):le--)}}},ut=(g,y,I,k,C=null)=>{const{el:R,type:U,transition:F,children:D,shapeFlag:x}=g;if(x&6){ut(g.component.subTree,y,I,k);return}if(x&128){g.suspense.move(y,I,k);return}if(x&64){U.move(g,y,I,z);return}if(U===Oe){r(R,y,I);for(let $=0;$<D.length;$++)ut(D[$],y,I,k);r(g.anchor,y,I);return}if(U===ks){h(g,y,I);return}if(k!==2&&x&1&&F)if(k===0)F.beforeEnter(R),r(R,y,I),Ce(()=>F.enter(R),C);else{const{leave:$,delayLeave:G,afterLeave:ee}=F,re=()=>{g.ctx.isUnmounted?s(R):r(R,y,I)},fe=()=>{$(R,()=>{re(),ee&&ee()})};G?G(R,re,fe):fe()}else r(R,y,I)},Fe=(g,y,I,k=!1,C=!1)=>{const{type:R,props:U,ref:F,children:D,dynamicChildren:x,shapeFlag:J,patchFlag:$,dirs:G,cacheIndex:ee}=g;if($===-2&&(C=!1),F!=null&&(Nt(),Yn(F,null,I,g,!0),Mt()),ee!=null&&(y.renderCache[ee]=void 0),J&256){y.ctx.deactivate(g);return}const re=J&1&&G,fe=!on(g);let le;if(fe&&(le=U&&U.onVnodeBeforeUnmount)&&je(le,y,g),J&6)ps(g.component,I,k);else{if(J&128){g.suspense.unmount(I,k);return}re&&pt(g,null,y,"beforeUnmount"),J&64?g.type.remove(g,y,I,z,k):x&&!x.hasOnce&&(R!==Oe||$>0&&$&64)?Ye(x,y,I,!1,!0):(R===Oe&&$&384||!C&&J&16)&&Ye(D,y,I),k&&Dn(g)}(fe&&(le=U&&U.onVnodeUnmounted)||re)&&Ce(()=>{le&&je(le,y,g),re&&pt(g,null,y,"unmounted")},I)},Dn=g=>{const{type:y,el:I,anchor:k,transition:C}=g;if(y===Oe){Fn(I,k);return}if(y===ks){b(g);return}const R=()=>{s(I),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(g.shapeFlag&1&&C&&!C.persisted){const{leave:U,delayLeave:F}=C,D=()=>U(I,R);F?F(g.el,R,D):D()}else R()},Fn=(g,y)=>{let I;for(;g!==y;)I=d(g),s(g),g=I;s(y)},ps=(g,y,I)=>{const{bum:k,scope:C,job:R,subTree:U,um:F,m:D,a:x,parent:J,slots:{__:$}}=g;Gs(D),Gs(x),k&&Tr(k),J&&X($)&&$.forEach(G=>{J.renderCache[G]=void 0}),C.stop(),R&&(R.flags|=8,Fe(U,g,y,I)),F&&Ce(F,y),Ce(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Ye=(g,y,I,k=!1,C=!1,R=0)=>{for(let U=R;U<g.length;U++)Fe(g[U],y,I,k,C)},A=g=>{if(g.shapeFlag&6)return A(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const y=d(g.anchor||g.el),I=y&&y[xg];return I?d(I):y};let j=!1;const H=(g,y,I)=>{g==null?y._vnode&&Fe(y._vnode,null,null,!0):m(y._vnode||null,g,y,null,null,null,I),y._vnode=g,j||(j=!0,Ic(),Ws(),j=!1)},z={p:m,um:Fe,m:ut,r:Dn,mt:ne,mc:B,pc:V,pbc:M,n:A,o:e};let oe,me;return t&&([oe,me]=t(z)),{render:H,hydrate:oe,createApp:rm(H,oe)}}function Bi({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function mn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function td(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function nd(e,t,n=!1){const r=e.children,s=t.children;if(X(r)&&X(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Jt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&nd(o,a)),a.type===Pn&&(a.el=o.el),a.type===we&&!a.el&&(a.el=o.el)}}function dm(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<u?i=a+1:o=a;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function rd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:rd(t)}function Gs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const hm=Symbol.for("v-scx"),pm=()=>Ge(hm);function gm(e,t){return La(e,null,t)}function An(e,t,n){return La(e,t,n)}function La(e,t,n=he){const{immediate:r,deep:s,flush:i,once:o}=n,a=Ie({},n),c=t&&r||!t&&i!=="post";let u;if(or){if(i==="sync"){const p=pm();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!c){const p=()=>{};return p.stop=bt,p.resume=bt,p.pause=bt,p}}const l=Ee;a.call=(p,_,m)=>at(p,l,_,m);let f=!1;i==="post"?a.scheduler=p=>{Ce(p,l&&l.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():ka(p)}),a.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,l&&(p.id=l.uid,p.i=l))};const d=kg(e,t,a);return or&&(u?u.push(d):c&&d()),d}function mm(e,t,n){const r=this.proxy,s=_e(e)?e.includes(".")?sd(r,e):()=>r[e]:e.bind(r,r);let i;Q(t)?i=t:(i=t.handler,n=t);const o=rs(this),a=La(s,i.bind(r),n);return o(),a}function sd(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ym=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ze(t)}Modifiers`]||e[`${Ln(t)}Modifiers`];function _m(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||he;let s=n;const i=t.startsWith("update:"),o=i&&ym(r,t.slice(7));o&&(o.trim&&(s=n.map(l=>_e(l)?l.trim():l)),o.number&&(s=n.map(Wp)));let a,c=r[a=Ni(t)]||r[a=Ni(Ze(t))];!c&&i&&(c=r[a=Ni(Ln(t))]),c&&at(c,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,at(u,e,6,s)}}function id(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!Q(e)){const c=u=>{const l=id(u,t,!0);l&&(a=!0,Ie(o,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(ge(e)&&r.set(e,null),null):(X(i)?i.forEach(c=>o[c]=null):Ie(o,i),ge(e)&&r.set(e,o),o)}function yi(e,t){return!e||!Qr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ce(e,t[0].toLowerCase()+t.slice(1))||ce(e,Ln(t))||ce(e,t))}function Wi(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:l,props:f,data:d,setupState:p,ctx:_,inheritAttrs:m}=e,S=Vs(e);let w,v;try{if(n.shapeFlag&4){const b=s||r,E=b;w=ze(u.call(E,b,l,f,p,d,_)),v=a}else{const b=t;w=ze(b.length>1?b(f,{attrs:a,slots:o,emit:c}):b(f,null)),v=t.props?a:vm(a)}}catch(b){kr.length=0,hr(b,e,1),w=ve(we)}let h=w;if(v&&m!==!1){const b=Object.keys(v),{shapeFlag:E}=h;b.length&&E&7&&(i&&b.some(_a)&&(v=wm(v,i)),h=Lt(h,v,!1,!0))}return n.dirs&&(h=Lt(h,null,!1,!0),h.dirs=h.dirs?h.dirs.concat(n.dirs):n.dirs),n.transition&&sr(h,n.transition),w=h,Vs(S),w}function bm(e,t=!0){let n;for(let r=0;r<e.length;r++){const s=e[r];if(On(s)){if(s.type!==we||s.children==="v-if"){if(n)return;n=s}}else return}return n}const vm=e=>{let t;for(const n in e)(n==="class"||n==="style"||Qr(n))&&((t||(t={}))[n]=e[n]);return t},wm=(e,t)=>{const n={};for(const r in e)(!_a(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Em(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Mc(r,o,u):!!o;if(c&8){const l=t.dynamicProps;for(let f=0;f<l.length;f++){const d=l[f];if(o[d]!==r[d]&&!yi(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Mc(r,o,u):!0:!!o;return!1}function Mc(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!yi(n,i))return!0}return!1}function _i({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const qs=e=>e.__isSuspense;let Co=0;const Sm={name:"Suspense",__isSuspense:!0,process(e,t,n,r,s,i,o,a,c,u){if(e==null)Im(t,n,r,s,i,o,a,c,u);else{if(i&&i.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}Tm(e,t,n,r,s,o,a,c,u)}},hydrate:Cm,normalize:Am},od=Sm;function Wr(e,t){const n=e.props&&e.props[t];Q(n)&&n()}function Im(e,t,n,r,s,i,o,a,c){const{p:u,o:{createElement:l}}=c,f=l("div"),d=e.suspense=ad(e,s,r,t,f,n,i,o,a,c);u(null,d.pendingBranch=e.ssContent,f,null,r,d,i,o),d.deps>0?(Wr(e,"onPending"),Wr(e,"onFallback"),u(null,e.ssFallback,t,n,r,null,i,o),Xn(d,e.ssFallback)):d.resolve(!1,!0)}function Tm(e,t,n,r,s,i,o,a,{p:c,um:u,o:{createElement:l}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const d=t.ssContent,p=t.ssFallback,{activeBranch:_,pendingBranch:m,isInFallback:S,isHydrating:w}=f;if(m)f.pendingBranch=d,nt(d,m)?(c(m,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():S&&(w||(c(_,p,n,r,s,null,i,o,a),Xn(f,p)))):(f.pendingId=Co++,w?(f.isHydrating=!1,f.activeBranch=m):u(m,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=l("div"),S?(c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(c(_,p,n,r,s,null,i,o,a),Xn(f,p))):_&&nt(d,_)?(c(_,d,n,r,s,f,i,o,a),f.resolve(!0)):(c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(_&&nt(d,_))c(_,d,n,r,s,f,i,o,a),Xn(f,d);else if(Wr(t,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=Co++,c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:v,pendingId:h}=f;v>0?setTimeout(()=>{f.pendingId===h&&f.fallback(p)},v):v===0&&f.fallback(p)}}function ad(e,t,n,r,s,i,o,a,c,u,l=!1){const{p:f,m:d,um:p,n:_,o:{parentNode:m,remove:S}}=u;let w;const v=Pm(e);v&&t&&t.pendingBranch&&(w=t.pendingId,t.deps++);const h=e.props?Qu(e.props.timeout):void 0,b=i,E={vnode:e,parent:t,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Co++,timeout:typeof h=="number"?h:-1,activeBranch:null,pendingBranch:null,isInFallback:!l,isHydrating:l,isUnmounted:!1,effects:[],resolve(T=!1,P=!1){const{vnode:B,activeBranch:L,pendingBranch:M,pendingId:q,effects:N,parentComponent:Y,container:ne}=E;let ie=!1;E.isHydrating?E.isHydrating=!1:T||(ie=L&&M.transition&&M.transition.mode==="out-in",ie&&(L.transition.afterLeave=()=>{q===E.pendingId&&(d(M,ne,i===b?_(L):i,0),vo(N))}),L&&(m(L.el)===ne&&(i=_(L)),p(L,Y,E,!0)),ie||d(M,ne,i,0)),Xn(E,M),E.pendingBranch=null,E.isInFallback=!1;let W=E.parent,te=!1;for(;W;){if(W.pendingBranch){W.effects.push(...N),te=!0;break}W=W.parent}!te&&!ie&&vo(N),E.effects=[],v&&t&&t.pendingBranch&&w===t.pendingId&&(t.deps--,t.deps===0&&!P&&t.resolve()),Wr(B,"onResolve")},fallback(T){if(!E.pendingBranch)return;const{vnode:P,activeBranch:B,parentComponent:L,container:M,namespace:q}=E;Wr(P,"onFallback");const N=_(B),Y=()=>{E.isInFallback&&(f(null,T,M,N,L,null,q,a,c),Xn(E,T))},ne=T.transition&&T.transition.mode==="out-in";ne&&(B.transition.afterLeave=Y),E.isInFallback=!0,p(B,L,null,!0),ne||Y()},move(T,P,B){E.activeBranch&&d(E.activeBranch,T,P,B),E.container=T},next(){return E.activeBranch&&_(E.activeBranch)},registerDep(T,P,B){const L=!!E.pendingBranch;L&&E.deps++;const M=T.vnode.el;T.asyncDep.catch(q=>{hr(q,T,0)}).then(q=>{if(T.isUnmounted||E.isUnmounted||E.pendingId!==T.suspenseId)return;T.asyncResolved=!0;const{vnode:N}=T;Po(T,q),M&&(N.el=M);const Y=!M&&T.subTree.el;P(T,N,m(M||T.subTree.el),M?null:_(T.subTree),E,o,B),Y&&S(Y),_i(T,N.el),L&&--E.deps===0&&E.resolve()})},unmount(T,P){E.isUnmounted=!0,E.activeBranch&&p(E.activeBranch,n,T,P),E.pendingBranch&&p(E.pendingBranch,n,T,P)}};return E}function Cm(e,t,n,r,s,i,o,a,c){const u=t.suspense=ad(t,r,n,e.parentNode,document.createElement("div"),null,s,i,o,a,!0),l=c(e,u.pendingBranch=t.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),l}function Am(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=Lc(r?n.default:n),e.ssFallback=r?Lc(n.fallback):ve(we)}function Lc(e){let t;if(Q(e)){const n=ir&&e._c;n&&(e._d=!1,Qe()),e=e(),n&&(e._d=!0,t=Be,ld())}return X(e)&&(e=bm(e)),e=ze(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function cd(e,t){t&&t.pendingBranch?X(e)?t.effects.push(...e):t.effects.push(e):vo(e)}function Xn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let s=t.el;for(;!s&&t.component;)t=t.component.subTree,s=t.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,_i(r,s))}function Pm(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const Oe=Symbol.for("v-fgt"),Pn=Symbol.for("v-txt"),we=Symbol.for("v-cmt"),ks=Symbol.for("v-stc"),kr=[];let Be=null;function Qe(e=!1){kr.push(Be=e?null:[])}function ld(){kr.pop(),Be=kr[kr.length-1]||null}let ir=1;function Dc(e,t=!1){ir+=e,e<0&&Be&&t&&(Be.hasOnce=!0)}function ud(e){return e.dynamicChildren=ir>0?Be||Vn:null,ld(),ir>0&&Be&&Be.push(e),e}function km(e,t,n,r,s,i){return ud(dd(e,t,n,r,s,i,!0))}function gt(e,t,n,r,s){return ud(ve(e,t,n,r,s,!0))}function On(e){return e?e.__v_isVNode===!0:!1}function nt(e,t){return e.type===t.type&&e.key===t.key}const fd=({key:e})=>e??null,Rs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?_e(e)||Se(e)||Q(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function dd(e,t=null,n=null,r=0,s=null,i=e===Oe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&fd(t),ref:t&&Rs(t),scopeId:Tf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pe};return a?(Da(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=_e(n)?8:16),ir>0&&!o&&Be&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Be.push(c),c}const ve=Rm;function Rm(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===$f)&&(e=we),On(e)){const a=Lt(e,t,!0);return n&&Da(a,n),ir>0&&!i&&Be&&(a.shapeFlag&6?Be[Be.indexOf(e)]=a:Be.push(a)),a.patchFlag=-2,a}if(Hm(e)&&(e=e.__vccOpts),t){t=hd(t);let{class:a,style:c}=t;a&&!_e(a)&&(t.class=gi(a)),ge(c)&&(Pa(c)&&!X(c)&&(c=Ie({},c)),t.style=pi(c))}const o=_e(e)?1:qs(e)?128:Af(e)?64:ge(e)?4:Q(e)?2:0;return dd(e,t,n,r,s,o,i,!0)}function hd(e){return e?Pa(e)||qf(e)?Ie({},e):e:null}function Lt(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,u=t?Om(s||{},t):s,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&fd(u),ref:t&&t.ref?n&&i?X(i)?i.concat(Rs(t)):[i,Rs(t)]:Rs(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Oe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Lt(e.ssContent),ssFallback:e.ssFallback&&Lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&sr(l,c.clone(l)),l}function pd(e=" ",t=0){return ve(Pn,null,e,t)}function yC(e="",t=!1){return t?(Qe(),gt(we,null,e)):ve(we,null,e)}function ze(e){return e==null||typeof e=="boolean"?ve(we):X(e)?ve(Oe,null,e.slice()):On(e)?Jt(e):ve(Pn,null,String(e))}function Jt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Lt(e)}function Da(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(X(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Da(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!qf(t)?t._ctx=Pe:s===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[pd(t)]):n=8);e.children=t,e.shapeFlag|=n}function Om(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=gi([t.class,r.class]));else if(s==="style")t.style=pi([t.style,r.style]);else if(Qr(s)){const i=t[s],o=r[s];o&&i!==o&&!(X(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function je(e,t,n,r=null){at(e,t,7,[n,r])}const xm=zf();let Nm=0;function Mm(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||xm,i={uid:Nm++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jf(r,s),emitsOptions:id(r,s),emit:null,emitted:null,propsDefaults:he,inheritAttrs:r.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=_m.bind(null,i),e.ce&&e.ce(i),i}let Ee=null;const bi=()=>Ee||Pe;let Ys,Ao;{const e=hi(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ys=t("__VUE_INSTANCE_SETTERS__",n=>Ee=n),Ao=t("__VUE_SSR_SETTERS__",n=>or=n)}const rs=e=>{const t=Ee;return Ys(e),e.scope.on(),()=>{e.scope.off(),Ys(t)}},Fc=()=>{Ee&&Ee.scope.off(),Ys(null)};function gd(e){return e.vnode.shapeFlag&4}let or=!1;function Lm(e,t=!1,n=!1){t&&Ao(t);const{props:r,children:s}=e.vnode,i=gd(e);sm(e,r,i,t),cm(e,s,n||t);const o=i?Dm(e,t):void 0;return t&&Ao(!1),o}function Dm(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Jg);const{setup:r}=n;if(r){Nt();const s=e.setupContext=r.length>1?Um(e):null,i=rs(e),o=es(r,e,0,[e.props,s]),a=Yu(o);if(Mt(),i(),(a||e.sp)&&!on(e)&&Ra(e),a){if(o.then(Fc,Fc),t)return o.then(c=>{Po(e,c)}).catch(c=>{hr(c,e,0)});e.asyncDep=o}else Po(e,o)}else md(e)}function Po(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ge(t)&&(e.setupState=wf(t)),md(e)}function md(e,t,n){const r=e.type;e.render||(e.render=r.render||bt);{const s=rs(e);Nt();try{Xg(e)}finally{Mt(),s()}}}const Fm={get(e,t){return Re(e,"get",""),e[t]}};function Um(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Fm),slots:e.slots,emit:e.emit,expose:t}}function Fa(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(wf(_g(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Pr)return Pr[n](e)},has(t,n){return n in t||n in Pr}})):e.proxy}function ko(e,t=!0){return Q(e)?e.displayName||e.name:e.name||t&&e.__name}function Hm(e){return Q(e)&&"__vccOpts"in e}const Ae=(e,t)=>Ag(e,t,or);function Ke(e,t,n){const r=arguments.length;return r===2?ge(t)&&!X(t)?On(t)?ve(e,null,[t]):ve(e,t):ve(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&On(n)&&(n=[n]),ve(e,t,n))}const $m="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ro;const Uc=typeof window<"u"&&window.trustedTypes;if(Uc)try{Ro=Uc.createPolicy("vue",{createHTML:e=>e})}catch{}const yd=Ro?e=>Ro.createHTML(e):e=>e,jm="http://www.w3.org/2000/svg",Bm="http://www.w3.org/1998/Math/MathML",Tt=typeof document<"u"?document:null,Hc=Tt&&Tt.createElement("template"),Wm={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Tt.createElementNS(jm,e):t==="mathml"?Tt.createElementNS(Bm,e):n?Tt.createElement(e,{is:n}):Tt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Tt.createTextNode(e),createComment:e=>Tt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Tt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hc.innerHTML=yd(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Hc.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},zt="transition",br="animation",Vr=Symbol("_vtc"),_d={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vm=Ie({},Pf,_d),zm=e=>(e.displayName="Transition",e.props=Vm,e),Km=zm((e,{slots:t})=>Ke(Lg,Gm(e),t)),yn=(e,t=[])=>{X(e)?e.forEach(n=>n(...t)):e&&e(...t)},$c=e=>e?X(e)?e.some(t=>t.length>1):e.length>1:!1;function Gm(e){const t={};for(const N in e)N in _d||(t[N]=e[N]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,_=qm(s),m=_&&_[0],S=_&&_[1],{onBeforeEnter:w,onEnter:v,onEnterCancelled:h,onLeave:b,onLeaveCancelled:E,onBeforeAppear:T=w,onAppear:P=v,onAppearCancelled:B=h}=t,L=(N,Y,ne,ie)=>{N._enterCancelled=ie,_n(N,Y?l:a),_n(N,Y?u:o),ne&&ne()},M=(N,Y)=>{N._isLeaving=!1,_n(N,f),_n(N,p),_n(N,d),Y&&Y()},q=N=>(Y,ne)=>{const ie=N?P:v,W=()=>L(Y,N,ne);yn(ie,[Y,W]),jc(()=>{_n(Y,N?c:i),St(Y,N?l:a),$c(ie)||Bc(Y,r,m,W)})};return Ie(t,{onBeforeEnter(N){yn(w,[N]),St(N,i),St(N,o)},onBeforeAppear(N){yn(T,[N]),St(N,c),St(N,u)},onEnter:q(!1),onAppear:q(!0),onLeave(N,Y){N._isLeaving=!0;const ne=()=>M(N,Y);St(N,f),N._enterCancelled?(St(N,d),zc()):(zc(),St(N,d)),jc(()=>{N._isLeaving&&(_n(N,f),St(N,p),$c(b)||Bc(N,r,S,ne))}),yn(b,[N,ne])},onEnterCancelled(N){L(N,!1,void 0,!0),yn(h,[N])},onAppearCancelled(N){L(N,!0,void 0,!0),yn(B,[N])},onLeaveCancelled(N){M(N),yn(E,[N])}})}function qm(e){if(e==null)return null;if(ge(e))return[Vi(e.enter),Vi(e.leave)];{const t=Vi(e);return[t,t]}}function Vi(e){return Qu(e)}function St(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Vr]||(e[Vr]=new Set)).add(t)}function _n(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Vr];n&&(n.delete(t),n.size||(e[Vr]=void 0))}function jc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ym=0;function Bc(e,t,n,r){const s=e._endId=++Ym,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Jm(e,t);if(!o)return r();const u=o+"end";let l=0;const f=()=>{e.removeEventListener(u,d),i()},d=p=>{p.target===e&&++l>=c&&f()};setTimeout(()=>{l<c&&f()},a+1),e.addEventListener(u,d)}function Jm(e,t){const n=window.getComputedStyle(e),r=_=>(n[_]||"").split(", "),s=r(`${zt}Delay`),i=r(`${zt}Duration`),o=Wc(s,i),a=r(`${br}Delay`),c=r(`${br}Duration`),u=Wc(a,c);let l=null,f=0,d=0;t===zt?o>0&&(l=zt,f=o,d=i.length):t===br?u>0&&(l=br,f=u,d=c.length):(f=Math.max(o,u),l=f>0?o>u?zt:br:null,d=l?l===zt?i.length:c.length:0);const p=l===zt&&/\b(transform|all)(,|$)/.test(r(`${zt}Property`).toString());return{type:l,timeout:f,propCount:d,hasTransform:p}}function Wc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Vc(n)+Vc(e[r])))}function Vc(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function zc(){return document.body.offsetHeight}function Xm(e,t,n){const r=e[Vr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Kc=Symbol("_vod"),Qm=Symbol("_vsh"),Zm=Symbol(""),ey=/(^|;)\s*display\s*:/;function ty(e,t,n){const r=e.style,s=_e(n);let i=!1;if(n&&!s){if(t)if(_e(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Os(r,a,"")}else for(const o in t)n[o]==null&&Os(r,o,"");for(const o in n)o==="display"&&(i=!0),Os(r,o,n[o])}else if(s){if(t!==n){const o=r[Zm];o&&(n+=";"+o),r.cssText=n,i=ey.test(n)}}else t&&e.removeAttribute("style");Kc in e&&(e[Kc]=i?r.display:"",e[Qm]&&(r.display="none"))}const Gc=/\s*!important$/;function Os(e,t,n){if(X(n))n.forEach(r=>Os(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ny(e,t);Gc.test(n)?e.setProperty(Ln(r),n.replace(Gc,""),"important"):e[r]=n}}const qc=["Webkit","Moz","ms"],zi={};function ny(e,t){const n=zi[t];if(n)return n;let r=Ze(t);if(r!=="filter"&&r in e)return zi[t]=r;r=di(r);for(let s=0;s<qc.length;s++){const i=qc[s]+r;if(i in e)return zi[t]=i}return t}const Yc="http://www.w3.org/1999/xlink";function Jc(e,t,n,r,s,i=Jp(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Yc,t.slice(6,t.length)):e.setAttributeNS(Yc,t,n):n==null||i&&!Zu(n)?e.removeAttribute(t):e.setAttribute(t,i?"":$t(n)?String(n):n)}function Xc(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?yd(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Zu(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function ry(e,t,n,r){e.addEventListener(t,n,r)}function sy(e,t,n,r){e.removeEventListener(t,n,r)}const Qc=Symbol("_vei");function iy(e,t,n,r,s=null){const i=e[Qc]||(e[Qc]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=oy(t);if(r){const u=i[t]=ly(r,s);ry(e,a,u,c)}else o&&(sy(e,a,o,c),i[t]=void 0)}}const Zc=/(?:Once|Passive|Capture)$/;function oy(e){let t;if(Zc.test(e)){t={};let r;for(;r=e.match(Zc);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ln(e.slice(2)),t]}let Ki=0;const ay=Promise.resolve(),cy=()=>Ki||(ay.then(()=>Ki=0),Ki=Date.now());function ly(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;at(uy(r,n.value),t,5,[r])};return n.value=e,n.attached=cy(),n}function uy(e,t){if(X(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const el=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,fy=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?Xm(e,r,o):t==="style"?ty(e,n,r):Qr(t)?_a(t)||iy(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):dy(e,t,r,o))?(Xc(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Jc(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!_e(r))?Xc(e,Ze(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Jc(e,t,r,o))};function dy(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&el(t)&&Q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return el(t)&&_e(n)?!1:t in e}const bd=Ie({patchProp:fy},Wm);let Rr,tl=!1;function hy(){return Rr||(Rr=um(bd))}function py(){return Rr=tl?Rr:fm(bd),tl=!0,Rr}const gy=(...e)=>{const t=hy().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=wd(r);if(!s)return;const i=t._component;!Q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,vd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t},my=(...e)=>{const t=py().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=wd(r);if(s)return n(s,!0,vd(s))},t};function vd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function wd(e){return _e(e)?document.querySelector(e):e}const yy=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,_y=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,by=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function vy(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){wy(e);return}return t}function wy(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function Ey(e,t={}){if(typeof e!="string")return e;if(e[0]==='"'&&e[e.length-1]==='"'&&e.indexOf("\\")===-1)return e.slice(1,-1);const n=e.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!by.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(yy.test(e)||_y.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,vy)}return JSON.parse(e)}catch(r){if(t.strict)throw r;return e}}const Sy=/#/g,Iy=/&/g,Ty=/\//g,Cy=/=/g,Ua=/\+/g,Ay=/%5e/gi,Py=/%60/gi,ky=/%7c/gi,Ry=/%20/gi;function Oy(e){return encodeURI(""+e).replace(ky,"|")}function Oo(e){return Oy(typeof e=="string"?e:JSON.stringify(e)).replace(Ua,"%2B").replace(Ry,"+").replace(Sy,"%23").replace(Iy,"%26").replace(Py,"`").replace(Ay,"^").replace(Ty,"%2F")}function Gi(e){return Oo(e).replace(Cy,"%3D")}function Ed(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function xy(e){return Ed(e.replace(Ua," "))}function Ny(e){return Ed(e.replace(Ua," "))}function My(e=""){const t=Object.create(null);e[0]==="?"&&(e=e.slice(1));for(const n of e.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=xy(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=Ny(r[2]||"");t[s]===void 0?t[s]=i:Array.isArray(t[s])?t[s].push(i):t[s]=[t[s],i]}return t}function Ly(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(n=>`${Gi(e)}=${Oo(n)}`).join("&"):`${Gi(e)}=${Oo(t)}`:Gi(e)}function Dy(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>Ly(t,e[t])).filter(Boolean).join("&")}const Fy=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,Uy=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,Hy=/^([/\\]\s*){2,}[^/\\]/,$y=/^\.?\//;function Ha(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?Fy.test(e):Uy.test(e)||(t.acceptRelative?Hy.test(e):!1)}function jy(e="",t){return e.endsWith("/")}function By(e="",t){return(jy(e)?e.slice(0,-1):e)||"/"}function Wy(e="",t){return e.endsWith("/")?e:e+"/"}function Vy(e,t){if(Ky(t)||Ha(e))return e;const n=By(t);return e.startsWith(n)?e:qy(n,e)}function zy(e,t){const n=Yy(e),r={...My(n.search),...t};return n.search=Dy(r),Jy(n)}function Ky(e){return!e||e==="/"}function Gy(e){return e&&e!=="/"}function qy(e,...t){let n=e||"";for(const r of t.filter(s=>Gy(s)))if(n){const s=r.replace($y,"");n=Wy(n)+s}else n=r;return n}function Sd(...e){var o,a,c,u;const t=/\/(?!\/)/,n=e.filter(Boolean),r=[];let s=0;for(const l of n)if(!(!l||l==="/")){for(const[f,d]of l.split(t).entries())if(!(!d||d===".")){if(d===".."){if(r.length===1&&Ha(r[0]))continue;r.pop(),s--;continue}if(f===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+d;continue}r.push(d),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(c=n[0])!=null&&c.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}const Id=Symbol.for("ufo:protocolRelative");function Yy(e="",t){const n=e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,d=""]=n;return{protocol:f.toLowerCase(),pathname:d,href:f+d,auth:"",host:"",search:"",hash:""}}if(!Ha(e,{acceptRelative:!0}))return nl(e);const[,r="",s,i=""]=e.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:u,hash:l}=nl(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:u,hash:l,[Id]:!r}}function nl(e=""){const[t="",n="",r=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:n,hash:r}}function Jy(e){const t=e.pathname||"",n=e.search?(e.search.startsWith("?")?"":"?")+e.search:"",r=e.hash||"",s=e.auth?e.auth+"@":"",i=e.host||"";return(e.protocol||e[Id]?(e.protocol||"")+"//":"")+s+i+t+n+r}class Xy extends Error{constructor(t,n){super(t,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function Qy(e){var c,u,l,f,d;const t=((c=e.error)==null?void 0:c.message)||((u=e.error)==null?void 0:u.toString())||"",n=((l=e.request)==null?void 0:l.method)||((f=e.options)==null?void 0:f.method)||"GET",r=((d=e.request)==null?void 0:d.url)||String(e.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=e.response?`${e.response.status} ${e.response.statusText}`:"<no response>",o=`${s}: ${i}${t?` ${t}`:""}`,a=new Xy(o,e.error?{cause:e.error}:void 0);for(const p of["request","options","response"])Object.defineProperty(a,p,{get(){return e[p]}});for(const[p,_]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,p,{get(){return e.response&&e.response[_]}});return a}const Zy=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function rl(e="GET"){return Zy.has(e.toUpperCase())}function e_(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const t_=new Set(["image/svg","application/xml","application/xhtml","application/html"]),n_=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function r_(e=""){if(!e)return"json";const t=e.split(";").shift()||"";return n_.test(t)?"json":t_.has(t)||t.startsWith("text/")?"text":"blob"}function s_(e,t,n,r){const s=i_((t==null?void 0:t.headers)??(e==null?void 0:e.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||t!=null&&t.params||t!=null&&t.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...t==null?void 0:t.params,...t==null?void 0:t.query}),{...n,...t,query:i,params:i,headers:s}}function i_(e,t,n){if(!t)return new n(e);const r=new n(t);if(e)for(const[s,i]of Symbol.iterator in e||Array.isArray(e)?e:new n(e))r.set(s,i);return r}async function Es(e,t){if(t)if(Array.isArray(t))for(const n of t)await n(e);else await t(e)}const o_=new Set([408,409,425,429,500,502,503,504]),a_=new Set([101,204,205,304]);function Td(e={}){const{fetch:t=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=e;async function s(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let l;typeof a.options.retry=="number"?l=a.options.retry:l=rl(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(l>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):o_.has(f))){const d=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return d>0&&await new Promise(p=>setTimeout(p,d)),i(a.request,{...a.options,retry:l-1})}}const u=Qy(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(c,u={}){const l={request:c,options:s_(c,u,e.defaults,n),response:void 0,error:void 0};l.options.method&&(l.options.method=l.options.method.toUpperCase()),l.options.onRequest&&await Es(l,l.options.onRequest),typeof l.request=="string"&&(l.options.baseURL&&(l.request=Vy(l.request,l.options.baseURL)),l.options.query&&(l.request=zy(l.request,l.options.query),delete l.options.query),"query"in l.options&&delete l.options.query,"params"in l.options&&delete l.options.params),l.options.body&&rl(l.options.method)&&(e_(l.options.body)?(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers||{}),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json")):("pipeTo"in l.options.body&&typeof l.options.body.pipeTo=="function"||typeof l.options.body.pipe=="function")&&("duplex"in l.options||(l.options.duplex="half")));let f;if(!l.options.signal&&l.options.timeout){const p=new r;f=setTimeout(()=>{const _=new Error("[TimeoutError]: The operation was aborted due to timeout");_.name="TimeoutError",_.code=23,p.abort(_)},l.options.timeout),l.options.signal=p.signal}try{l.response=await t(l.request,l.options)}catch(p){return l.error=p,l.options.onRequestError&&await Es(l,l.options.onRequestError),await s(l)}finally{f&&clearTimeout(f)}if((l.response.body||l.response._bodyInit)&&!a_.has(l.response.status)&&l.options.method!=="HEAD"){const p=(l.options.parseResponse?"json":l.options.responseType)||r_(l.response.headers.get("content-type")||"");switch(p){case"json":{const _=await l.response.text(),m=l.options.parseResponse||Ey;l.response._data=m(_);break}case"stream":{l.response._data=l.response.body||l.response._bodyInit;break}default:l.response._data=await l.response[p]()}}return l.options.onResponse&&await Es(l,l.options.onResponse),!l.options.ignoreResponseError&&l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await Es(l,l.options.onResponseError),await s(l)):l.response},o=async function(c,u){return(await i(c,u))._data};return o.raw=i,o.native=(...a)=>t(...a),o.create=(a={},c={})=>Td({...e,...c,defaults:{...e.defaults,...c.defaults,...a}}),o}const Js=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),c_=Js.fetch?(...e)=>Js.fetch(...e):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),l_=Js.Headers,u_=Js.AbortController,f_=Td({fetch:c_,Headers:l_,AbortController:u_}),d_=f_,h_=()=>{var e;return((e=window==null?void 0:window.__NUXT__)==null?void 0:e.config)||{}},$a=()=>h_().app,p_=()=>$a().baseURL,g_=()=>$a().buildAssetsDir,ja=(...e)=>Sd(Cd(),g_(),...e),Cd=(...e)=>{const t=$a(),n=t.cdnURL||t.baseURL;return e.length?Sd(n,...e):n};globalThis.__buildAssetsURL=ja,globalThis.__publicAssetsURL=Cd;globalThis.$fetch||(globalThis.$fetch=d_.create({baseURL:p_()}));"global"in globalThis||(globalThis.global=globalThis);function xo(e,t={},n){for(const r in e){const s=e[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?xo(s,t,i):typeof s=="function"&&(t[i]=s)}return t}const m_={run:e=>e()},y_=()=>m_,Ad=typeof console.createTask<"u"?console.createTask:y_;function __(e,t){const n=t.shift(),r=Ad(n);return e.reduce((s,i)=>s.then(()=>r.run(()=>i(...t))),Promise.resolve())}function b_(e,t){const n=t.shift(),r=Ad(n);return Promise.all(e.map(s=>r.run(()=>s(...t))))}function qi(e,t){for(const n of[...e])n(t)}class v_{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,r={}){if(!t||typeof n!="function")return()=>{};const s=t;let i;for(;this._deprecatedHooks[t];)i=this._deprecatedHooks[t],t=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(t,s),r}removeHook(t,n){if(this._hooks[t]){const r=this._hooks[t].indexOf(n);r!==-1&&this._hooks[t].splice(r,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const r=this._hooks[t]||[];delete this._hooks[t];for(const s of r)this.hook(t,s)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=xo(t),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(t){const n=xo(t);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(__,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(b_,t,...n)}callHookWith(t,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&qi(this._before,s);const i=t(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&qi(this._after,s)}):(this._after&&s&&qi(this._after,s),i)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Pd(){return new v_}function w_(e={}){let t,n=!1;const r=o=>{if(t&&t!==o)throw new Error("Context conflict")};let s;if(e.asyncContext){const o=e.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return t};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),t=o,n=!0},unset:()=>{t=void 0,n=!1},call:(o,a)=>{r(o),t=o;try{return s?s.run(o,a):a()}finally{n||(t=void 0)}},async callAsync(o,a){t=o;const c=()=>{t=o},u=()=>t===o?c:void 0;No.add(u);try{const l=s?s.run(o,a):a();return n||(t=void 0),await l}finally{No.delete(u)}}}}function E_(e={}){const t={};return{get(n,r={}){return t[n]||(t[n]=w_({...e,...r})),t[n]}}}const Xs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},sl="__unctx__",S_=Xs[sl]||(Xs[sl]=E_()),I_=(e,t={})=>S_.get(e,t),il="__unctx_async_handlers__",No=Xs[il]||(Xs[il]=new Set);function Qn(e){const t=[];for(const s of No){const i=s();i&&t.push(i)}const n=()=>{for(const s of t)s()};let r=e();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const ol=!1,T_=!1,_C={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},C_=null,A_="#__nuxt",kd="nuxt-app",al=36e5,P_="vite:preloadError";function Rd(e=kd){return I_(e,{asyncContext:!1})}const k_="__nuxt_plugin";function R_(e){var s;let t=0;const n={_id:e.id||kd||"nuxt-app",_scope:Qp(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.17.6"},get vue(){return n.vueApp.version}},payload:kt({...((s=e.ssrContext)==null?void 0:s.payload)||{},data:kt({}),state:hn({}),once:new Set,_errors:kt({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!rf()?n._scope.run(()=>cl(n,i)):cl(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};t++;let i=!1;return()=>{if(!i&&(i=!0,t--,t===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:kt({}),_payloadRevivers:{},...e};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=Pd(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;Ss(n,a,o),Ss(n.vueApp.config.globalProperties,a,o)},Ss(n.vueApp,"$nuxt",n),Ss(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(P_,o=>{n.callHook("app:chunkError",{error:o.payload}),o.payload.message.includes("Unable to preload CSS")&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=Te);const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function O_(e,t){t.hooks&&e.hooks.addHooks(t.hooks)}async function x_(e,t){if(typeof t=="function"){const{provide:n}=await e.runWithContext(()=>t(e))||{};if(n&&typeof n=="object")for(const r in n)e.provide(r,n[r])}}async function N_(e,t){const n=new Set,r=[],s=[],i=[];let o=0;async function a(c){var l;const u=((l=c.dependsOn)==null?void 0:l.filter(f=>t.some(d=>d._name===f)&&!n.has(f)))??[];if(u.length>0)r.push([new Set(u),c]);else{const f=x_(e,c).then(async()=>{c._name&&(n.add(c._name),await Promise.all(r.map(async([d,p])=>{d.has(c._name)&&(d.delete(c._name),d.size===0&&(o++,await a(p)))})))});c.parallel?s.push(f.catch(d=>i.push(d))):await f}}for(const c of t)O_(e,c);for(const c of t)await a(c);if(await Promise.all(s),o)for(let c=0;c<o;c++)await Promise.all(s);if(i.length)throw i[0]}function lt(e){if(typeof e=="function")return e;const t=e._name||e.name;return delete e.name,Object.assign(e.setup||(()=>{}),e,{[k_]:!0,_name:t})}function cl(e,t,n){const r=()=>t();return Rd(e._id).set(e),e.vueApp.runWithContext(r)}function M_(e){var n;let t;return xa()&&(t=(n=bi())==null?void 0:n.appContext.app.$nuxt),t||(t=Rd(e).tryUse()),t||null}function Te(e){const t=M_(e);if(!t)throw new Error("[nuxt] instance unavailable");return t}function ss(e){return Te().$config}function Ss(e,t,n){Object.defineProperty(e,t,{get:()=>n})}const L_=/#/g,D_=/&/g,F_=/\//g,U_=/=/g,Ba=/\+/g,H_=/%5e/gi,$_=/%60/gi,j_=/%7c/gi,B_=/%20/gi;function W_(e){return encodeURI(""+e).replace(j_,"|")}function Mo(e){return W_(typeof e=="string"?e:JSON.stringify(e)).replace(Ba,"%2B").replace(B_,"+").replace(L_,"%23").replace(D_,"%26").replace($_,"`").replace(H_,"^").replace(F_,"%2F")}function Yi(e){return Mo(e).replace(U_,"%3D")}function Qs(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function V_(e){return Qs(e.replace(Ba," "))}function z_(e){return Qs(e.replace(Ba," "))}function Od(e=""){const t=Object.create(null);e[0]==="?"&&(e=e.slice(1));for(const n of e.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=V_(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=z_(r[2]||"");t[s]===void 0?t[s]=i:Array.isArray(t[s])?t[s].push(i):t[s]=[t[s],i]}return t}function K_(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(n=>`${Yi(e)}=${Mo(n)}`).join("&"):`${Yi(e)}=${Mo(t)}`:Yi(e)}function G_(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>K_(t,e[t])).filter(Boolean).join("&")}const q_=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,Y_=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,J_=/^([/\\]\s*){2,}[^/\\]/,X_=/^[\s\0]*(blob|data|javascript|vbscript):$/i,Q_=/\/$|\/\?|\/#/,Z_=/^\.?\//;function is(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?q_.test(e):Y_.test(e)||(t.acceptRelative?J_.test(e):!1)}function eb(e){return!!e&&X_.test(e)}function Lo(e="",t){return t?Q_.test(e):e.endsWith("/")}function Zs(e="",t){if(!t)return(Lo(e)?e.slice(0,-1):e)||"/";if(!Lo(e,!0))return e||"/";let n=e,r="";const s=e.indexOf("#");s!==-1&&(n=e.slice(0,s),r=e.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function tb(e="",t){if(!t)return e.endsWith("/")?e:e+"/";if(Lo(e,!0))return e||"/";let n=e,r="";const s=e.indexOf("#");if(s!==-1&&(n=e.slice(0,s),r=e.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function ll(e,t){if(rb(t))return e;const n=Zs(t);if(!e.startsWith(n))return e;const r=e.slice(n.length);return r[0]==="/"?r:"/"+r}function nb(e,t){const n=Md(e),r={...Od(n.search),...t};return n.search=G_(r),ob(n)}function rb(e){return!e||e==="/"}function sb(e){return e&&e!=="/"}function xd(e,...t){let n=e||"";for(const r of t.filter(s=>sb(s)))if(n){const s=r.replace(Z_,"");n=tb(n)+s}else n=r;return n}function ib(e,t){return Qs(Zs(e))===Qs(Zs(t))}const Nd=Symbol.for("ufo:protocolRelative");function Md(e="",t){const n=e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,d=""]=n;return{protocol:f.toLowerCase(),pathname:d,href:f+d,auth:"",host:"",search:"",hash:""}}if(!is(e,{acceptRelative:!0}))return ul(e);const[,r="",s,i=""]=e.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:u,hash:l}=ul(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:u,hash:l,[Nd]:!r}}function ul(e=""){const[t="",n="",r=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:n,hash:r}}function ob(e){const t=e.pathname||"",n=e.search?(e.search.startsWith("?")?"":"?")+e.search:"",r=e.hash||"",s=e.auth?e.auth+"@":"",i=e.host||"";return(e.protocol||e[Nd]?(e.protocol||"")+"//":"")+s+i+t+n+r}function ab(e,t){return{ctx:{table:e},matchAll:n=>Dd(n,e)}}function Ld(e){const t={};for(const n in e)t[n]=n==="dynamic"?new Map(Object.entries(e[n]).map(([r,s])=>[r,Ld(s)])):new Map(Object.entries(e[n]));return t}function cb(e){return ab(Ld(e))}function Dd(e,t,n){e.endsWith("/")&&(e=e.slice(0,-1)||"/");const r=[];for(const[i,o]of fl(t.wildcard))(e===i||e.startsWith(i+"/"))&&r.push(o);for(const[i,o]of fl(t.dynamic))if(e.startsWith(i+"/")){const a="/"+e.slice(i.length).split("/").splice(2).join("/");r.push(...Dd(a,o))}const s=t.static.get(e);return s&&r.push(s),r.filter(Boolean)}function fl(e){return[...e.entries()].sort((t,n)=>t[0].length-n[0].length)}const lb=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,ub=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,fb=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function db(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){hb(e);return}return t}function hb(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function Do(e,t={}){if(typeof e!="string")return e;if(e[0]==='"'&&e[e.length-1]==='"'&&e.indexOf("\\")===-1)return e.slice(1,-1);const n=e.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!fb.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(lb.test(e)||ub.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,db)}return JSON.parse(e)}catch(r){if(t.strict)throw r;return e}}function Ji(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function Fo(e,t,n=".",r){if(!Ji(t))return Fo(e,{},n,r);const s=Object.assign({},t);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const o=e[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Ji(o)&&Ji(s[i])?s[i]=Fo(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function pb(e){return(...t)=>t.reduce((n,r)=>Fo(n,r,"",e),{})}const Fd=pb();function gb(e,t){try{return t in e}catch{return!1}}class Uo extends Error{constructor(n,r={}){super(n,r);Vt(this,"statusCode",500);Vt(this,"fatal",!1);Vt(this,"unhandled",!1);Vt(this,"statusMessage");Vt(this,"data");Vt(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:Ho(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=Ud(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}Vt(Uo,"__h3_error__",!0);function mb(e){if(typeof e=="string")return new Uo(e);if(yb(e))return e;const t=new Uo(e.message??e.statusMessage??"",{cause:e.cause||e});if(gb(e,"stack"))try{Object.defineProperty(t,"stack",{get(){return e.stack}})}catch{try{t.stack=e.stack}catch{}}if(e.data&&(t.data=e.data),e.statusCode?t.statusCode=Ho(e.statusCode,t.statusCode):e.status&&(t.statusCode=Ho(e.status,t.statusCode)),e.statusMessage?t.statusMessage=e.statusMessage:e.statusText&&(t.statusMessage=e.statusText),t.statusMessage){const n=t.statusMessage;Ud(t.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return e.fatal!==void 0&&(t.fatal=e.fatal),e.unhandled!==void 0&&(t.unhandled=e.unhandled),t}function yb(e){var t;return((t=e==null?void 0:e.constructor)==null?void 0:t.__h3_error__)===!0}const _b=/[^\u0009\u0020-\u007E]/g;function Ud(e=""){return e.replace(_b,"")}function Ho(e,t=200){return!e||(typeof e=="string"&&(e=Number.parseInt(e,10)),e<100||e>999)?t:e}const bb=Symbol("layout-meta"),vi=Symbol("route"),et=()=>{var e;return(e=Te())==null?void 0:e.$router},Hd=()=>xa()?Ge(vi,Te()._route):Te()._route;const vb=()=>{try{if(Te()._processingMiddleware)return!0}catch{return!1}return!1},bC=(e,t)=>{e||(e="/");const n=typeof e=="string"?e:"path"in e?wb(e):et().resolve(e).href;if(t!=null&&t.open){const{target:c="_blank",windowFeatures:u={}}=t.open,l=Object.entries(u).filter(([f,d])=>d!==void 0).map(([f,d])=>`${f.toLowerCase()}=${d}`).join(", ");return open(n,c,l),Promise.resolve()}const r=is(n,{acceptRelative:!0}),s=(t==null?void 0:t.external)||r;if(s){if(!(t!=null&&t.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&eb(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=vb();if(!s&&i){if(t!=null&&t.replace){if(typeof e=="string"){const{pathname:c,search:u,hash:l}=Md(e);return{path:c,...u&&{query:Od(u)},...l&&{hash:l},replace:!0}}return{...e,replace:!0}}return e}const o=et(),a=Te();return s?(a._scope.stop(),t!=null&&t.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):t!=null&&t.replace?o.replace(e):o.push(e)};function wb(e){return nb(e.path||"",e.query||{})+(e.hash||"")}const $d="__nuxt_error",wi=()=>Ig(Te().payload,"error"),wn=e=>{const t=kn(e);try{const n=Te(),r=wi();n.hooks.callHook("app:error",t),r.value||(r.value=t)}catch{throw t}return t},Eb=async(e={})=>{const t=Te(),n=wi();t.callHook("app:error:cleared",e),e.redirect&&await et().replace(e.redirect),n.value=C_},jd=e=>!!e&&typeof e=="object"&&$d in e,kn=e=>{const t=mb(e);return Object.defineProperty(t,$d,{value:!0,configurable:!1,writable:!1}),t};function dl(e){const t=Ib(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,t.charCodeAt(s));return n}const Sb="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ib(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let s=0;s<e.length;s++)n<<=6,n|=Sb.indexOf(e[s]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const Tb=-1,Cb=-2,Ab=-3,Pb=-4,kb=-5,Rb=-6;function Ob(e,t){return xb(JSON.parse(e),t)}function xb(e,t){if(typeof e=="number")return s(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function s(i,o=!1){if(i===Tb)return;if(i===Ab)return NaN;if(i===Pb)return 1/0;if(i===kb)return-1/0;if(i===Rb)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],u=t==null?void 0:t[c];if(u)return r[i]=u(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const l=new Set;r[i]=l;for(let p=1;p<a.length;p+=1)l.add(s(a[p]));break;case"Map":const f=new Map;r[i]=f;for(let p=1;p<a.length;p+=2)f.set(s(a[p]),s(a[p+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const d=Object.create(null);r[i]=d;for(let p=1;p<a.length;p+=2)d[a[p]]=s(a[p+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const p=globalThis[c],_=a[1],m=dl(_),S=new p(m);r[i]=S;break}case"ArrayBuffer":{const p=a[1],_=dl(p);r[i]=_;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let u=0;u<a.length;u+=1){const l=a[u];l!==Cb&&(c[u]=s(l))}}else{const c={};r[i]=c;for(const u in a){const l=a[u];c[u]=s(l)}}return r[i]}return s(0)}const Nb=new Set(["link","style","script","noscript"]),Mb=new Set(["title","titleTemplate","script","style","noscript"]),hl=new Set(["base","meta","link","style","script","noscript"]),Lb=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Db=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Fb=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),Ub=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Hb=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),$b=["name","property","http-equiv"],jb=new Set(["viewport","description","keywords","robots"]);function Bd(e){const t=e.split(":");return t.length?Hb.has(t[1]):!1}function $o(e){const{props:t,tag:n}=e;if(Db.has(n))return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";if(e.tag==="meta"){for(const r of $b)if(t[r]!==void 0){const s=t[r],i=s.includes(":"),o=jb.has(s),c=!(i||o)&&e.key?`:key:${e.key}`:"";return`${n}:${s}${c}`}}if(e.key)return`${n}:key:${e.key}`;if(t.id)return`${n}:id:${t.id}`;if(Mb.has(n)){const r=e.textContent||e.innerHTML;if(r)return`${n}:content:${r}`}}function pl(e){const t=e._h||e._d;if(t)return t;const n=e.textContent||e.innerHTML;return n||`${e.tag}:${Object.entries(e.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function ei(e,t,n){typeof e==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(e=e());let s;if(t&&(s=t(n,e)),Array.isArray(s))return s.map(i=>ei(i,t));if((s==null?void 0:s.constructor)===Object){const i={};for(const o of Object.keys(s))i[o]=ei(s[o],t,o);return i}return s}function Bb(e,t){const n=e==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(e==="style"){const[o,...a]=i.split(":").map(c=>c.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof t=="string"?e==="style"?t.split(";").forEach(r):r(t):Array.isArray(t)?t.forEach(s=>r(s)):t&&typeof t=="object"&&Object.entries(t).forEach(([s,i])=>{i&&i!=="false"&&(e==="style"?n.set(s.trim(),i):r(s))}),n}function Wd(e,t){return e.props=e.props||{},t&&Object.entries(t).forEach(([n,r])=>{if(r===null){e.props[n]=null;return}if(n==="class"||n==="style"){e.props[n]=Bb(n,r);return}if(Fb.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=t.type;if(t.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;t.type=o,e.props.type=o,e[n]=JSON.stringify(r)}else e[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?e.props[n]=i?s:!0:!r&&i&&s==="false"?e.props[n]="false":r!==void 0&&(e.props[n]=r)}),e}function Wb(e,t){const n=typeof t=="object"&&typeof t!="function"?t:{[e==="script"||e==="noscript"||e==="style"?"innerHTML":"textContent"]:t},r=Wd({tag:e,props:{}},n);return r.key&&Nb.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function Vb(e,t){if(!e)return[];typeof e=="function"&&(e=e());const n=(s,i)=>{for(let o=0;o<t.length;o++)i=t[o](s,i);return i};e=n(void 0,e);const r=[];return e=ei(e,n),Object.entries(e||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push(Wb(s,o))}),r.flat()}const gl=(e,t)=>e._w===t._w?e._p-t._p:e._w-t._w,ml={base:-10,title:10},zb={critical:-8,high:-1,low:2},yl={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},Kb=/@import/,vr=e=>e===""||e===!0;function Gb(e,t){var i;if(typeof t.tagPriority=="number")return t.tagPriority;let n=100;const r=zb[t.tagPriority]||0,s=e.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:yl;if(t.tag in ml)n=ml[t.tag];else if(t.tag==="meta"){const o=t.props["http-equiv"]==="content-security-policy"?"content-security-policy":t.props.charset?"charset":t.props.name==="viewport"?"viewport":null;o&&(n=yl.meta[o])}else t.tag==="link"&&t.props.rel?n=s.link[t.props.rel]:t.tag==="script"?vr(t.props.async)?n=s.script.async:t.props.src&&!vr(t.props.defer)&&!vr(t.props.async)&&t.props.type!=="module"&&!((i=t.props.type)!=null&&i.endsWith("json"))?n=s.script.sync:vr(t.props.defer)&&t.props.src&&!vr(t.props.async)&&(n=s.script.defer):t.tag==="style"&&(n=t.innerHTML&&Kb.test(t.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function _l(e,t){const n=typeof t=="function"?t(e):t,r=n.key||String(e.plugins.size+1);e.plugins.get(r)||(e.plugins.set(r,n),e.hooks.addHooks(n.hooks||{}))}function qb(e={}){var a;const t=Pd();t.addHooks(e.hooks||{});const n=!e.document,r=new Map,s=new Map,i=new Set,o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:e,hooks:t,ssr:n,entries:r,headEntries(){return[...r.values()]},use:c=>_l(o,c),push(c,u){const l={...u||{}};delete l.head;const f=l._index??o._entryCount++,d={_i:f,input:c,options:l},p={_poll(_=!1){o.dirty=!0,!_&&i.add(f),t.callHook("entries:updated",o)},dispose(){r.delete(f)&&o.invalidate()},patch(_){(!l.mode||l.mode==="server"&&n||l.mode==="client"&&!n)&&(d.input=_,r.set(f,d),p._poll())}};return p.patch(c),p},async resolveTags(){var p;const c={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await t.callHook("entries:resolve",c);i.size;){const _=i.values().next().value;i.delete(_);const m=r.get(_);if(m){const S={tags:Vb(m.input,e.propResolvers||[]).map(w=>Object.assign(w,m.options)),entry:m};await t.callHook("entries:normalize",S),m._tags=S.tags.map((w,v)=>(w._w=Gb(o,w),w._p=(m._i<<10)+v,w._d=$o(w),w))}}let u=!1;c.entries.flatMap(_=>(_._tags||[]).map(m=>({...m,props:{...m.props}}))).sort(gl).reduce((_,m)=>{const S=String(m._d||m._p);if(!_.has(S))return _.set(S,m);const w=_.get(S);if(((m==null?void 0:m.tagDuplicateStrategy)||(Ub.has(m.tag)?"merge":null)||(m.key&&m.key===w.key?"merge":null))==="merge"){const h={...w.props};Object.entries(m.props).forEach(([b,E])=>h[b]=b==="style"?new Map([...w.props.style||new Map,...E]):b==="class"?new Set([...w.props.class||new Set,...E]):E),_.set(S,{...m,props:h})}else m._p>>10===w._p>>10&&m.tag==="meta"&&Bd(S)?(_.set(S,Object.assign([...Array.isArray(w)?w:[w],m],m)),u=!0):(m._w===w._w?m._p>w._p:(m==null?void 0:m._w)<(w==null?void 0:w._w))&&_.set(S,m);return _},c.tagMap);const l=c.tagMap.get("title"),f=c.tagMap.get("titleTemplate");if(o._title=l==null?void 0:l.textContent,f){const _=f==null?void 0:f.textContent;if(o._titleTemplate=_,_){let m=typeof _=="function"?_(l==null?void 0:l.textContent):_;typeof m=="string"&&!o.plugins.has("template-params")&&(m=m.replace("%s",(l==null?void 0:l.textContent)||"")),l?m===null?c.tagMap.delete("title"):c.tagMap.set("title",{...l,textContent:m}):(f.tag="title",f.textContent=m)}}c.tags=Array.from(c.tagMap.values()),u&&(c.tags=c.tags.flat().sort(gl)),await t.callHook("tags:beforeResolve",c),await t.callHook("tags:resolve",c),await t.callHook("tags:afterResolve",c);const d=[];for(const _ of c.tags){const{innerHTML:m,tag:S,props:w}=_;if(Lb.has(S)&&!(Object.keys(w).length===0&&!_.innerHTML&&!_.textContent)&&!(S==="meta"&&!w.content&&!w["http-equiv"]&&!w.charset)){if(S==="script"&&m){if((p=w.type)!=null&&p.endsWith("json")){const v=typeof m=="string"?m:JSON.stringify(m);_.innerHTML=v.replace(/</g,"\\u003C")}else typeof m=="string"&&(_.innerHTML=m.replace(new RegExp(`</${S}`,"g"),`<\\/${S}`));_._d=$o(_)}d.push(_)}}return d},invalidate(){for(const c of r.values())i.add(c._i);o.dirty=!0,t.callHook("entries:updated",o)}};return((e==null?void 0:e.plugins)||[]).forEach(c=>_l(o,c)),o.hooks.callHook("init",o),(a=e.init)==null||a.forEach(c=>c&&o.push(c)),o}const Yb=(e,t)=>Se(t)?vg(t):t,Vd="usehead";function Jb(e){return{install(n){n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Vd,e)}}.install}function Xb(){if(xa()){const e=Ge(Vd);if(!e)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return e}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function vC(e,t={}){const n=t.head||Xb();return n.ssr?n.push(e||{},t):Qb(n,e,t)}function Qb(e,t,n={}){const r=xt(!1);let s;return gm(()=>{const o=r.value?{}:ei(t,Yb);s?s.patch(o):s=e.push(o,n)}),bi()&&(ns(()=>{s.dispose()}),Mf(()=>{r.value=!0}),Nf(()=>{r.value=!1})),s}const Zb="modulepreload",ev=function(e,t){return new URL(e,t).href},bl={},rn=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(l){return Promise.all(l.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(l=>{if(l=ev(l,r),l in bl)return;bl[l]=!0;const f=l.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(!!r)for(let m=a.length-1;m>=0;m--){const S=a[m];if(S.href===l&&(!f||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":Zb,f||(_.as="script"),_.crossOrigin="",_.href=l,u&&_.setAttribute("nonce",u),document.head.appendChild(_),f)return new Promise((m,S)=>{_.addEventListener("load",m),_.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};let xs,Ns;function tv(){return xs=$fetch(ja(`builds/meta/${ss().app.buildId}.json`),{responseType:"json"}),xs.then(e=>{Ns=cb(e.matcher)}).catch(e=>{console.error("[nuxt] Error fetching app manifest.",e)}),xs}function Ei(){return xs||tv()}async function Wa(e){const t=typeof e=="string"?e:e.path;if(await Ei(),!Ns)return console.error("[nuxt] Error creating app manifest matcher.",Ns),{};try{return Fd({},...Ns.matchAll(t).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function vl(e,t={}){if(!await Kd(e))return null;const r=await rv(e,t);return await zd(r)||null}const nv="_payload.json";async function rv(e,t={}){const n=new URL(e,"http://localhost");if(n.host!=="localhost"||is(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+e);const r=ss(),s=t.hash||(t.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await Kd(e)?i:r.app.baseURL;return xd(o,n.pathname,nv+(s?`?${s}`:""))}async function zd(e){const t=fetch(e,{cache:"force-cache"}).then(n=>n.text().then(Gd));try{return await t}catch(n){console.warn("[nuxt] Cannot load payload ",e,n)}return null}async function Kd(e=Hd().path){const t=Te();return e=Zs(e),(await Ei()).prerendered.includes(e)?!0:t.runWithContext(async()=>{const r=await Wa({path:e});return!!r.prerender&&!r.redirect})}let bn=null;async function sv(){var r;if(bn)return bn;const e=document.getElementById("__NUXT_DATA__");if(!e)return{};const t=await Gd(e.textContent||""),n=e.dataset.src?await zd(e.dataset.src):void 0;return bn={...t,...n,...window.__NUXT__},(r=bn.config)!=null&&r.public&&(bn.config.public=hn(bn.config.public)),bn}async function Gd(e){return await Ob(e,Te()._payloadRevivers)}function iv(e,t){Te()._payloadRevivers[e]=t}const ov=[["NuxtError",e=>kn(e)],["EmptyShallowRef",e=>$r(e==="_"?void 0:e==="0n"?BigInt(0):Do(e))],["EmptyRef",e=>xt(e==="_"?void 0:e==="0n"?BigInt(0):Do(e))],["ShallowRef",e=>$r(e)],["ShallowReactive",e=>kt(e)],["Ref",e=>xt(e)],["Reactive",e=>hn(e)]],av=lt({name:"nuxt:revive-payload:client",order:-30,async setup(e){let t,n;for(const[r,s]of ov)iv(r,s);Object.assign(e.payload,([t,n]=Qn(()=>e.runWithContext(sv)),t=await t,n(),t)),window.__NUXT__=e.payload}});async function Va(e,t={}){const n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;const r={shouldRender:!0,tags:[]};if(await e.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return e._domUpdatePromise||(e._domUpdatePromise=new Promise(async s=>{var p;const i=new Map,o=new Promise(_=>{e.resolveTags().then(m=>{_(m.map(S=>{const w=i.get(S._d)||0,v={tag:S,id:(w?`${S._d}:${w}`:S._d)||pl(S),shouldRender:!0};return S._d&&Bd(S._d)&&i.set(S._d,w+1),v}))})});let a=e._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const _ of["body","head"]){const m=(p=n[_])==null?void 0:p.children;for(const S of m){const w=S.tagName.toLowerCase();if(!hl.has(w))continue;const v=Wd({tag:w,props:{}},{innerHTML:S.innerHTML,...S.getAttributeNames().reduce((h,b)=>(h[b]=S.getAttribute(b),h),{})||{}});if(v.key=S.getAttribute("data-hid")||void 0,v._d=$o(v)||pl(v),a.elMap.has(v._d)){let h=1,b=v._d;for(;a.elMap.has(b);)b=`${v._d}:${h++}`;a.elMap.set(b,S)}else a.elMap.set(v._d,S)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function c(_,m,S){const w=`${_}:${m}`;a.sideEffects[w]=S,delete a.pendingSideEffects[w]}function u({id:_,$el:m,tag:S}){const w=S.tag.endsWith("Attrs");a.elMap.set(_,m),w||(S.textContent&&S.textContent!==m.textContent&&(m.textContent=S.textContent),S.innerHTML&&S.innerHTML!==m.innerHTML&&(m.innerHTML=S.innerHTML),c(_,"el",()=>{m==null||m.remove(),a.elMap.delete(_)}));for(const v in S.props){if(!Object.prototype.hasOwnProperty.call(S.props,v))continue;const h=S.props[v];if(v.startsWith("on")&&typeof h=="function"){const E=m==null?void 0:m.dataset;if(E&&E[`${v}fired`]){const T=v.slice(0,-5);h.call(m,new Event(T.substring(2)))}m.getAttribute(`data-${v}`)!==""&&((S.tag==="bodyAttrs"?n.defaultView:m).addEventListener(v.substring(2),h.bind(m)),m.setAttribute(`data-${v}`,""));continue}const b=`attr:${v}`;if(v==="class"){if(!h)continue;for(const E of h)w&&c(_,`${b}:${E}`,()=>m.classList.remove(E)),!m.classList.contains(E)&&m.classList.add(E)}else if(v==="style"){if(!h)continue;for(const[E,T]of h)c(_,`${b}:${E}`,()=>{m.style.removeProperty(E)}),m.style.setProperty(E,T)}else h!==!1&&h!==null&&(m.getAttribute(v)!==h&&m.setAttribute(v,h===!0?"":String(h)),w&&c(_,b,()=>m.removeAttribute(v)))}}const l=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},d=await o;for(const _ of d){const{tag:m,shouldRender:S,id:w}=_;if(S){if(m.tag==="title"){n.title=m.textContent,c("title","",()=>n.title=a.title);continue}_.$el=_.$el||a.elMap.get(w),_.$el?u(_):hl.has(m.tag)&&l.push(_)}}for(const _ of l){const m=_.tag.tagPosition||"head";_.$el=n.createElement(_.tag.tag),u(_),f[m]=f[m]||n.createDocumentFragment(),f[m].appendChild(_.$el)}for(const _ of d)await e.hooks.callHook("dom:renderTag",_,n,c);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose);for(const _ in a.pendingSideEffects)a.pendingSideEffects[_]();e._dom=a,await e.hooks.callHook("dom:rendered",{renders:d}),s()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1})),e._domUpdatePromise}function cv(e={}){var r,s,i;const t=((r=e.domOptions)==null?void 0:r.render)||Va;e.document=e.document||(typeof window<"u"?document:void 0);const n=((i=(s=e.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return qb({...e,plugins:[...e.plugins||[],{key:"client",hooks:{"entries:updated":t}}],init:[n?JSON.parse(n):!1,...e.init||[]]})}function lv(e,t){let n=0;return()=>{const r=++n;t(()=>{n===r&&e()})}}function uv(e={}){const t=cv({domOptions:{render:lv(()=>Va(t),n=>setTimeout(n,0))},...e});return t.install=Jb(t),t}const fv=(e,t)=>e._w===t._w?e._p-t._p:e._w-t._w,Xt="%separator",dv=new RegExp(`${Xt}(?:\\s*${Xt})*`,"g");function hv(e,t,n=!1){var s;let r;if(t==="s"||t==="pageTitle")r=e.pageTitle;else if(t.includes(".")){const i=t.indexOf(".");r=(s=e[t.substring(0,i)])==null?void 0:s[t.substring(i+1)]}else r=e[t];if(r!==void 0)return n?(r||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function Is(e,t,n,r=!1){if(typeof e!="string"||!e.includes("%"))return e;let s=e;try{s=decodeURI(e)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return e;const o=e.includes(Xt);return e=e.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Xt||!i.includes(a))return a;const c=hv(t,a.slice(1),r);return c!==void 0?c:a}).trim(),o&&(e.endsWith(Xt)&&(e=e.slice(0,-Xt.length)),e.startsWith(Xt)&&(e=e.slice(Xt.length)),e=e.replace(dv,n||"").trim()),e}const wl=e=>e.includes(":key")?e:e.split(":").join(":key:"),pv={key:"aliasSorting",hooks:{"tags:resolve":e=>{let t=!1;for(const n of e.tags){const r=n.tagPriority;if(!r)continue;const s=String(r);if(s.startsWith("before:")){const i=wl(s.slice(7)),o=e.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,t=!0)}else if(s.startsWith("after:")){const i=wl(s.slice(6)),o=e.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,t=!0)}}t&&(e.tags=e.tags.sort(fv))}}},gv={key:"deprecations",hooks:{"entries:normalize":({tags:e})=>{for(const t of e)t.props.children&&(t.innerHTML=t.props.children,delete t.props.children),t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.body&&(t.tagPosition="bodyClose",delete t.props.body)}}};async function jo(e){if(typeof e==="function")return e;if(e instanceof Promise)return await e;if(Array.isArray(e))return await Promise.all(e.map(n=>jo(n)));if((e==null?void 0:e.constructor)===Object){const n={};for(const r of Object.keys(e))n[r]=await jo(e[r]);return n}return e}const mv={key:"promises",hooks:{"entries:resolve":async e=>{const t=[];for(const n in e.entries)e.entries[n]._promisesProcessed||t.push(jo(e.entries[n].input).then(r=>{e.entries[n].input=r,e.entries[n]._promisesProcessed=!0}));await Promise.all(t)}}},yv={meta:"content",link:"href",htmlAttrs:"lang"},_v=["innerHTML","textContent"],bv=e=>({key:"template-params",hooks:{"entries:normalize":t=>{var r,s,i;const n=((s=(r=t.tags.filter(o=>o.tag==="templateParams"&&o.mode==="server"))==null?void 0:r[0])==null?void 0:s.props)||{};Object.keys(n).length&&(e._ssrPayload={templateParams:{...((i=e._ssrPayload)==null?void 0:i.templateParams)||{},...n}})},"tags:resolve":({tagMap:t,tags:n})=>{var i;const r=((i=t.get("templateParams"))==null?void 0:i.props)||{},s=r.separator||"|";delete r.separator,r.pageTitle=Is(r.pageTitle||e._title||"",r,s);for(const o of n){if(o.processTemplateParams===!1)continue;const a=yv[o.tag];if(a&&typeof o.props[a]=="string")o.props[a]=Is(o.props[a],r,s);else if(o.processTemplateParams||o.tag==="titleTemplate"||o.tag==="title")for(const c of _v)typeof o[c]=="string"&&(o[c]=Is(o[c],r,s,o.tag==="script"&&o.props.type.endsWith("json")))}e._templateParams=r,e._separator=s},"tags:afterResolve":({tagMap:t})=>{const n=t.get("title");n!=null&&n.textContent&&n.processTemplateParams!==!1&&(n.textContent=Is(n.textContent,e._templateParams,e._separator))}}}),vv={disableDefaults:!0,disableCapoSorting:!1,plugins:[gv,mv,bv,pv]},wv=lt({name:"nuxt:head",enforce:"pre",setup(e){const t=uv(vv);e.vueApp.use(t);{let n=!0;const r=async()=>{n=!1,await Va(t)};t.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),e.hooks.hook("page:start",()=>{n=!0}),e.hooks.hook("page:finish",()=>{e.isHydrating||r()}),e.hooks.hook("app:error",r),e.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const jn=typeof document<"u";function qd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ev(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&qd(e.default)}const ae=Object.assign;function Xi(e,t){const n={};for(const r in t){const s=t[r];n[r]=ct(s)?s.map(e):e(s)}return n}const Or=()=>{},ct=Array.isArray,Yd=/#/g,Sv=/&/g,Iv=/\//g,Tv=/=/g,Cv=/\?/g,Jd=/\+/g,Av=/%5B/g,Pv=/%5D/g,Xd=/%5E/g,kv=/%60/g,Qd=/%7B/g,Rv=/%7C/g,Zd=/%7D/g,Ov=/%20/g;function za(e){return encodeURI(""+e).replace(Rv,"|").replace(Av,"[").replace(Pv,"]")}function xv(e){return za(e).replace(Qd,"{").replace(Zd,"}").replace(Xd,"^")}function Bo(e){return za(e).replace(Jd,"%2B").replace(Ov,"+").replace(Yd,"%23").replace(Sv,"%26").replace(kv,"`").replace(Qd,"{").replace(Zd,"}").replace(Xd,"^")}function Nv(e){return Bo(e).replace(Tv,"%3D")}function Mv(e){return za(e).replace(Yd,"%23").replace(Cv,"%3F")}function Lv(e){return e==null?"":Mv(e).replace(Iv,"%2F")}function zr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Dv=/\/$/,Fv=e=>e.replace(Dv,"");function Qi(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=jv(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:zr(o)}}function Uv(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function El(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Hv(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ar(t.matched[r],n.matched[s])&&eh(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ar(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function eh(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!$v(e[n],t[n]))return!1;return!0}function $v(e,t){return ct(e)?Sl(e,t):ct(t)?Sl(t,e):e===t}function Sl(e,t){return ct(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function jv(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Xe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Kr;(function(e){e.pop="pop",e.push="push"})(Kr||(Kr={}));var xr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(xr||(xr={}));function Bv(e){if(!e)if(jn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Fv(e)}const Wv=/^[^#]+#/;function Vv(e,t){return e.replace(Wv,"#")+t}function zv(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Si=()=>({left:window.scrollX,top:window.scrollY});function Kv(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=zv(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Il(e,t){return(history.state?history.state.position-t:-1)+e}const Wo=new Map;function Gv(e,t){Wo.set(e,t)}function qv(e){const t=Wo.get(e);return Wo.delete(e),t}let Yv=()=>location.protocol+"//"+location.host;function th(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),El(c,"")}return El(n,e)+r+s}function Jv(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=th(e,location),_=n.value,m=t.value;let S=0;if(d){if(n.value=p,t.value=d,o&&o===_){o=null;return}S=m?d.position-m.position:0}else r(p);s.forEach(w=>{w(n.value,_,{delta:S,type:Kr.pop,direction:S?S>0?xr.forward:xr.back:xr.unknown})})};function c(){o=n.value}function u(d){s.push(d);const p=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return i.push(p),p}function l(){const{history:d}=window;d.state&&d.replaceState(ae({},d.state,{scroll:Si()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function Tl(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Si():null}}function Xv(e){const{history:t,location:n}=window,r={value:th(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Yv()+e+c;try{t[l?"replaceState":"pushState"](u,"",d),s.value=u}catch(p){console.error(p),n[l?"replace":"assign"](d)}}function o(c,u){const l=ae({},t.state,Tl(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=ae({},s.value,t.state,{forward:c,scroll:Si()});i(l.current,l,!0);const f=ae({},Tl(r.value,c,null),{position:l.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Qv(e){e=Bv(e);const t=Xv(e),n=Jv(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ae({location:"",base:e,go:r,createHref:Vv.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Zv(e){return typeof e=="string"||e&&typeof e=="object"}function nh(e){return typeof e=="string"||typeof e=="symbol"}const rh=Symbol("");var Cl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Cl||(Cl={}));function cr(e,t){return ae(new Error,{type:e,[rh]:!0},t)}function It(e,t){return e instanceof Error&&rh in e&&(t==null||!!(e.type&t))}const Al="[^/]+?",e0={sensitive:!1,strict:!1,start:!0,end:!0},t0=/[.+*?^${}()[\]/\\]/g;function n0(e,t){const n=ae({},e0,t),r=[];let s=n.start?"^":"";const i=[];for(const u of e){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const d=u[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(t0,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:m,optional:S,regexp:w}=d;i.push({name:_,repeatable:m,optional:S});const v=w||Al;if(v!==Al){p+=10;try{new RegExp(`(${v})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${_}" (${v}): `+b.message)}}let h=m?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;f||(h=S&&u.length<2?`(?:/${h})`:"/"+h),S&&(h+="?"),s+=h,p+=20,S&&(p+=-8),m&&(p+=-20),v===".*"&&(p+=-50)}l.push(p)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),f={};if(!l)return null;for(let d=1;d<l.length;d++){const p=l[d]||"",_=i[d-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function c(u){let l="",f=!1;for(const d of e){(!f||!l.endsWith("/"))&&(l+="/"),f=!1;for(const p of d)if(p.type===0)l+=p.value;else if(p.type===1){const{value:_,repeatable:m,optional:S}=p,w=_ in u?u[_]:"";if(ct(w)&&!m)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const v=ct(w)?w.join("/"):w;if(!v)if(S)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);l+=v}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function r0(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function sh(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=r0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Pl(r))return 1;if(Pl(s))return-1}return s.length-r.length}function Pl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const s0={type:0,value:""},i0=/[a-zA-Z0-9_]/;function o0(e){if(!e)return[[]];if(e==="/")return[[s0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:i0.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function a0(e,t,n){const r=n0(o0(e.path),n),s=ae(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function c0(e,t){const n=[],r=new Map;t=xl({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function i(f,d,p){const _=!p,m=Rl(f);m.aliasOf=p&&p.record;const S=xl(t,f),w=[m];if("alias"in f){const b=typeof f.alias=="string"?[f.alias]:f.alias;for(const E of b)w.push(Rl(ae({},m,{components:p?p.record.components:m.components,path:E,aliasOf:p?p.record:m})))}let v,h;for(const b of w){const{path:E}=b;if(d&&E[0]!=="/"){const T=d.record.path,P=T[T.length-1]==="/"?"":"/";b.path=d.record.path+(E&&P+E)}if(v=a0(b,d,S),p?p.alias.push(v):(h=h||v,h!==v&&h.alias.push(v),_&&f.name&&!Ol(v)&&o(f.name)),ih(v)&&c(v),m.children){const T=m.children;for(let P=0;P<T.length;P++)i(T[P],v,p&&p.children[P])}p=p||v}return h?()=>{o(h)}:Or}function o(f){if(nh(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const d=f0(f,n);n.splice(d,0,f),f.record.name&&!Ol(f)&&r.set(f.record.name,f)}function u(f,d){let p,_={},m,S;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw cr(1,{location:f});S=p.record.name,_=ae(kl(d.params,p.keys.filter(h=>!h.optional).concat(p.parent?p.parent.keys.filter(h=>h.optional):[]).map(h=>h.name)),f.params&&kl(f.params,p.keys.map(h=>h.name))),m=p.stringify(_)}else if(f.path!=null)m=f.path,p=n.find(h=>h.re.test(m)),p&&(_=p.parse(m),S=p.record.name);else{if(p=d.name?r.get(d.name):n.find(h=>h.re.test(d.path)),!p)throw cr(1,{location:f,currentLocation:d});S=p.record.name,_=ae({},d.params,f.params),m=p.stringify(_)}const w=[];let v=p;for(;v;)w.unshift(v.record),v=v.parent;return{name:S,path:m,params:_,matched:w,meta:u0(w)}}e.forEach(f=>i(f));function l(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:l,getRoutes:a,getRecordMatcher:s}}function kl(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Rl(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:l0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function l0(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ol(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function u0(e){return e.reduce((t,n)=>ae(t,n.meta),{})}function xl(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function f0(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;sh(e,t[i])<0?r=i:n=i+1}const s=d0(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function d0(e){let t=e;for(;t=t.parent;)if(ih(t)&&sh(e,t)===0)return t}function ih({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function h0(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Jd," "),o=i.indexOf("="),a=zr(o<0?i:i.slice(0,o)),c=o<0?null:zr(i.slice(o+1));if(a in t){let u=t[a];ct(u)||(u=t[a]=[u]),u.push(c)}else t[a]=c}return t}function Nl(e){let t="";for(let n in e){const r=e[n];if(n=Nv(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ct(r)?r.map(i=>i&&Bo(i)):[r&&Bo(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function p0(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ct(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const g0=Symbol(""),Ml=Symbol(""),Ka=Symbol(""),oh=Symbol(""),Vo=Symbol("");function wr(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Qt(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=d=>{d===!1?c(cr(4,{from:n,to:t})):d instanceof Error?c(d):Zv(d)?c(cr(2,{from:t,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},l=i(()=>e.call(r&&r.instances[s],t,n,u));let f=Promise.resolve(l);e.length<3&&(f=f.then(u)),f.catch(d=>c(d))})}function Zi(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(qd(c)){const l=(c.__vccOpts||c)[t];l&&i.push(Qt(l,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Ev(l)?l.default:l;o.mods[a]=l,o.components[a]=f;const p=(f.__vccOpts||f)[t];return p&&Qt(p,n,r,o,a,s)()}))}}return i}function Ll(e){const t=Ge(Ka),n=Ge(oh),r=Ae(()=>{const c=ye(e.to);return t.resolve(c)}),s=Ae(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],f=n.matched;if(!l||!f.length)return-1;const d=f.findIndex(ar.bind(null,l));if(d>-1)return d;const p=Dl(c[u-2]);return u>1&&Dl(l)===p&&f[f.length-1].path!==p?f.findIndex(ar.bind(null,c[u-2])):d}),i=Ae(()=>s.value>-1&&v0(n.params,r.value.params)),o=Ae(()=>s.value>-1&&s.value===n.matched.length-1&&eh(n.params,r.value.params));function a(c={}){if(b0(c)){const u=t[ye(e.replace)?"replace":"push"](ye(e.to)).catch(Or);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ae(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function m0(e){return e.length===1?e[0]:e}const y0=pr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ll,setup(e,{slots:t}){const n=hn(Ll(e)),{options:r}=Ge(Ka),s=Ae(()=>({[Fl(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Fl(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&m0(t.default(n));return e.custom?i:Ke("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),_0=y0;function b0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function v0(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ct(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Dl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Fl=(e,t,n)=>e??t??n,w0=pr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ge(Vo),s=Ae(()=>e.route||r.value),i=Ge(Ml,0),o=Ae(()=>{let u=ye(i);const{matched:l}=s.value;let f;for(;(f=l[u])&&!f.components;)u++;return u}),a=Ae(()=>s.value.matched[o.value]);Jn(Ml,Ae(()=>o.value+1)),Jn(g0,a),Jn(Vo,s);const c=xt();return An(()=>[c.value,a.value,e.name],([u,l,f],[d,p,_])=>{l&&(l.instances[f]=u,p&&p!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),u&&l&&(!p||!ar(l,p)||!d)&&(l.enterCallbacks[f]||[]).forEach(m=>m(u))},{flush:"post"}),()=>{const u=s.value,l=e.name,f=a.value,d=f&&f.components[l];if(!d)return Ul(n.default,{Component:d,route:u});const p=f.props[l],_=p?p===!0?u.params:typeof p=="function"?p(u):p:null,S=Ke(d,ae({},_,t,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(f.instances[l]=null)},ref:c}));return Ul(n.default,{Component:S,route:u})||S}}});function Ul(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ah=w0;function E0(e){const t=c0(e.routes,e),n=e.parseQuery||h0,r=e.stringifyQuery||Nl,s=e.history,i=wr(),o=wr(),a=wr(),c=$r(Xe);let u=Xe;jn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Xi.bind(null,A=>""+A),f=Xi.bind(null,Lv),d=Xi.bind(null,zr);function p(A,j){let H,z;return nh(A)?(H=t.getRecordMatcher(A),z=j):z=A,t.addRoute(z,H)}function _(A){const j=t.getRecordMatcher(A);j&&t.removeRoute(j)}function m(){return t.getRoutes().map(A=>A.record)}function S(A){return!!t.getRecordMatcher(A)}function w(A,j){if(j=ae({},j||c.value),typeof A=="string"){const y=Qi(n,A,j.path),I=t.resolve({path:y.path},j),k=s.createHref(y.fullPath);return ae(y,I,{params:d(I.params),hash:zr(y.hash),redirectedFrom:void 0,href:k})}let H;if(A.path!=null)H=ae({},A,{path:Qi(n,A.path,j.path).path});else{const y=ae({},A.params);for(const I in y)y[I]==null&&delete y[I];H=ae({},A,{params:f(y)}),j.params=f(j.params)}const z=t.resolve(H,j),oe=A.hash||"";z.params=l(d(z.params));const me=Uv(r,ae({},A,{hash:xv(oe),path:z.path})),g=s.createHref(me);return ae({fullPath:me,hash:oe,query:r===Nl?p0(A.query):A.query||{}},z,{redirectedFrom:void 0,href:g})}function v(A){return typeof A=="string"?Qi(n,A,c.value.path):ae({},A)}function h(A,j){if(u!==A)return cr(8,{from:j,to:A})}function b(A){return P(A)}function E(A){return b(ae(v(A),{replace:!0}))}function T(A){const j=A.matched[A.matched.length-1];if(j&&j.redirect){const{redirect:H}=j;let z=typeof H=="function"?H(A):H;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=v(z):{path:z},z.params={}),ae({query:A.query,hash:A.hash,params:z.path!=null?{}:A.params},z)}}function P(A,j){const H=u=w(A),z=c.value,oe=A.state,me=A.force,g=A.replace===!0,y=T(H);if(y)return P(ae(v(y),{state:typeof y=="object"?ae({},oe,y.state):oe,force:me,replace:g}),j||H);const I=H;I.redirectedFrom=j;let k;return!me&&Hv(r,z,H)&&(k=cr(16,{to:I,from:z}),ut(z,z,!0,!1)),(k?Promise.resolve(k):M(I,z)).catch(C=>It(C)?It(C,2)?C:Wt(C):V(C,I,z)).then(C=>{if(C){if(It(C,2))return P(ae({replace:g},v(C.to),{state:typeof C.to=="object"?ae({},oe,C.to.state):oe,force:me}),j||I)}else C=N(I,z,!0,g,oe);return q(I,z,C),C})}function B(A,j){const H=h(A,j);return H?Promise.reject(H):Promise.resolve()}function L(A){const j=Fn.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(A):A()}function M(A,j){let H;const[z,oe,me]=S0(A,j);H=Zi(z.reverse(),"beforeRouteLeave",A,j);for(const y of z)y.leaveGuards.forEach(I=>{H.push(Qt(I,A,j))});const g=B.bind(null,A,j);return H.push(g),Ye(H).then(()=>{H=[];for(const y of i.list())H.push(Qt(y,A,j));return H.push(g),Ye(H)}).then(()=>{H=Zi(oe,"beforeRouteUpdate",A,j);for(const y of oe)y.updateGuards.forEach(I=>{H.push(Qt(I,A,j))});return H.push(g),Ye(H)}).then(()=>{H=[];for(const y of me)if(y.beforeEnter)if(ct(y.beforeEnter))for(const I of y.beforeEnter)H.push(Qt(I,A,j));else H.push(Qt(y.beforeEnter,A,j));return H.push(g),Ye(H)}).then(()=>(A.matched.forEach(y=>y.enterCallbacks={}),H=Zi(me,"beforeRouteEnter",A,j,L),H.push(g),Ye(H))).then(()=>{H=[];for(const y of o.list())H.push(Qt(y,A,j));return H.push(g),Ye(H)}).catch(y=>It(y,8)?y:Promise.reject(y))}function q(A,j,H){a.list().forEach(z=>L(()=>z(A,j,H)))}function N(A,j,H,z,oe){const me=h(A,j);if(me)return me;const g=j===Xe,y=jn?history.state:{};H&&(z||g?s.replace(A.fullPath,ae({scroll:g&&y&&y.scroll},oe)):s.push(A.fullPath,oe)),c.value=A,ut(A,j,H,g),Wt()}let Y;function ne(){Y||(Y=s.listen((A,j,H)=>{if(!ps.listening)return;const z=w(A),oe=T(z);if(oe){P(ae(oe,{replace:!0,force:!0}),z).catch(Or);return}u=z;const me=c.value;jn&&Gv(Il(me.fullPath,H.delta),Si()),M(z,me).catch(g=>It(g,12)?g:It(g,2)?(P(ae(v(g.to),{force:!0}),z).then(y=>{It(y,20)&&!H.delta&&H.type===Kr.pop&&s.go(-1,!1)}).catch(Or),Promise.reject()):(H.delta&&s.go(-H.delta,!1),V(g,z,me))).then(g=>{g=g||N(z,me,!1),g&&(H.delta&&!It(g,8)?s.go(-H.delta,!1):H.type===Kr.pop&&It(g,20)&&s.go(-1,!1)),q(z,me,g)}).catch(Or)}))}let ie=wr(),W=wr(),te;function V(A,j,H){Wt(A);const z=W.list();return z.length?z.forEach(oe=>oe(A,j,H)):console.error(A),Promise.reject(A)}function be(){return te&&c.value!==Xe?Promise.resolve():new Promise((A,j)=>{ie.add([A,j])})}function Wt(A){return te||(te=!A,ne(),ie.list().forEach(([j,H])=>A?H(A):j()),ie.reset()),A}function ut(A,j,H,z){const{scrollBehavior:oe}=e;if(!jn||!oe)return Promise.resolve();const me=!H&&qv(Il(A.fullPath,0))||(z||!H)&&history.state&&history.state.scroll||null;return jr().then(()=>oe(A,j,me)).then(g=>g&&Kv(g)).catch(g=>V(g,A,j))}const Fe=A=>s.go(A);let Dn;const Fn=new Set,ps={currentRoute:c,listening:!0,addRoute:p,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:m,resolve:w,options:e,push:b,replace:E,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:be,install(A){const j=this;A.component("RouterLink",_0),A.component("RouterView",ah),A.config.globalProperties.$router=j,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(c)}),jn&&!Dn&&c.value===Xe&&(Dn=!0,b(s.location).catch(oe=>{}));const H={};for(const oe in Xe)Object.defineProperty(H,oe,{get:()=>c.value[oe],enumerable:!0});A.provide(Ka,j),A.provide(oh,kt(H)),A.provide(Vo,c);const z=A.unmount;Fn.add(A),A.unmount=function(){Fn.delete(A),Fn.size<1&&(u=Xe,Y&&Y(),Y=null,c.value=Xe,Dn=!1,te=!1),z()}}};function Ye(A){return A.reduce((j,H)=>j.then(()=>L(H)),Promise.resolve())}return ps}function S0(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(u=>ar(u,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(u=>ar(u,c))||s.push(c))}return[n,r,s]}const I0=/(:\w+)\([^)]+\)/g,T0=/(:\w+)[?+*]/g,C0=/:\w+/g,A0=(e,t)=>t.path.replace(I0,"$1").replace(T0,"$1").replace(C0,n=>{var r;return((r=e.params[n.slice(1)])==null?void 0:r.toString())||""}),zo=(e,t)=>{const n=e.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===e.Component.type}),r=t??(n==null?void 0:n.meta.key)??(n&&A0(e.route,n));return typeof r=="function"?r(e.route):r},P0=(e,t)=>({default:()=>e?Ke(Bg,e===!0?{}:e,t):t});function Ga(e){return Array.isArray(e)?e:[e]}const k0={layout:"auth"},R0={layout:"auth"},eo=[{name:"index",path:"/",meta:k0||{},component:()=>rn(()=>import("./BumnBjzp.js"),__vite__mapDeps([0,1,2]),import.meta.url)},{name:"login",path:"/login",meta:R0||{},component:()=>rn(()=>import("./Chd59VL5.js"),__vite__mapDeps([3,1,4,5]),import.meta.url)},{name:"dashboard",path:"/dashboard",component:()=>rn(()=>import("./l4Tk8_GR.js"),__vite__mapDeps([6,7,8,1,4]),import.meta.url)},{name:"test-firebase",path:"/test-firebase",component:()=>rn(()=>import("./fKe8F5ve.js"),[],import.meta.url)}],O0=(e,t)=>({default:()=>{var n;return e?Ke(Km,e===!0?{}:e,t):(n=t.default)==null?void 0:n.call(t)}}),x0=/(:\w+)\([^)]+\)/g,N0=/(:\w+)[?+*]/g,M0=/:\w+/g;function Hl(e){const t=(e==null?void 0:e.meta.key)??e.path.replace(x0,"$1").replace(N0,"$1").replace(M0,n=>{var r;return((r=e.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof t=="function"?t(e):t}function L0(e,t){return e===t||t===Xe?!1:Hl(e)!==Hl(t)?!0:!e.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=t.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const D0={scrollBehavior(e,t,n){var c;const r=Te(),s=((c=et().options)==null?void 0:c.scrollBehaviorType)??"auto";if(e.path===t.path)return t.hash&&!e.hash?{left:0,top:0}:e.hash?{el:e.hash,top:ch(e.hash),behavior:s}:!1;if((typeof e.meta.scrollToTop=="function"?e.meta.scrollToTop(e,t):e.meta.scrollToTop)===!1)return!1;let o=n||void 0;!o&&L0(e,t)&&(o={left:0,top:0});const a=r._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(u=>{if(t===Xe){u($l(e,"instant",o));return}r.hooks.hookOnce(a,()=>{requestAnimationFrame(()=>u($l(e,"instant",o)))})})}};function ch(e){try{const t=document.querySelector(e);if(t)return(Number.parseFloat(getComputedStyle(t).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function $l(e,t,n){return n||(e.hash?{el:e.hash,top:ch(e.hash),behavior:t}:{left:0,top:0,behavior:t})}const F0={hashMode:!1,scrollBehaviorType:"auto"},dt={...F0,...D0},U0=async(e,t)=>{var o;let n,r;if(!((o=e.meta)!=null&&o.validate))return;const s=([n,r]=Qn(()=>Promise.resolve(e.meta.validate(e))),n=await n,r(),n);if(s===!0)return;const i=kn({fatal:!0,statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${e.fullPath}`,data:{path:e.fullPath}});return typeof window<"u"&&window.history.pushState({},"",t.fullPath),i},H0=async e=>{let t,n;const r=([t,n]=Qn(()=>Wa({path:e.path})),t=await t,n(),t);if(r.redirect)return is(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},$0=[U0,H0],Nr={};function j0(e,t,n){const{pathname:r,search:s,hash:i}=t,o=e.indexOf("#");if(o>-1){const u=i.includes(e.slice(o))?e.slice(o).length:1;let l=i.slice(u);return l[0]!=="/"&&(l="/"+l),ll(l,"")}const a=ll(r,e),c=!n||ib(a,n)?a:n;return c+(c.includes("?")?"":s)+i}const B0=lt({name:"nuxt:router",enforce:"pre",async setup(e){var S;let t,n,r=ss().app.baseURL;const s=((S=dt.history)==null?void 0:S.call(dt,r))??Qv(r),i=dt.routes?([t,n]=Qn(()=>dt.routes(eo)),t=await t,n(),t??eo):eo;let o;const a=E0({...dt,scrollBehavior:(w,v,h)=>{if(v===Xe){o=h;return}if(dt.scrollBehavior){if(a.options.scrollBehavior=dt.scrollBehavior,"scrollRestoration"in window.history){const b=a.beforeEach(()=>{b(),window.history.scrollRestoration="manual"})}return dt.scrollBehavior(w,Xe,o||h)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),e.vueApp.use(a);const c=$r(a.currentRoute.value);a.afterEach((w,v)=>{c.value=v}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=j0(r,window.location,e.payload.path),l=$r(a.currentRoute.value),f=()=>{l.value=a.currentRoute.value};e.hook("page:finish",f),a.afterEach((w,v)=>{var h,b,E,T;((b=(h=w.matched[0])==null?void 0:h.components)==null?void 0:b.default)===((T=(E=v.matched[0])==null?void 0:E.components)==null?void 0:T.default)&&f()});const d={};for(const w in l.value)Object.defineProperty(d,w,{get:()=>l.value[w],enumerable:!0});e._route=kt(d),e._middleware||(e._middleware={global:[],named:{}});const p=wi();a.afterEach(async(w,v,h)=>{delete e._processingMiddleware,!e.isHydrating&&p.value&&await e.runWithContext(Eb),h&&await e.callHook("page:loading:end")});try{[t,n]=Qn(()=>a.isReady()),await t,n()}catch(w){[t,n]=Qn(()=>e.runWithContext(()=>wn(w))),await t,n()}const _=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;f();const m=e.payload.state._layout;return a.beforeEach(async(w,v)=>{var h;await e.callHook("page:loading:start"),w.meta=hn(w.meta),e.isHydrating&&m&&!ln(w.meta.layout)&&(w.meta.layout=m),e._processingMiddleware=!0;{const b=new Set([...$0,...e._middleware.global]);for(const E of w.matched){const T=E.meta.middleware;if(T)for(const P of Ga(T))b.add(P)}{const E=await e.runWithContext(()=>Wa({path:w.path}));if(E.appMiddleware)for(const T in E.appMiddleware)E.appMiddleware[T]?b.add(T):b.delete(T)}for(const E of b){const T=typeof E=="string"?e._middleware.named[E]||await((h=Nr[E])==null?void 0:h.call(Nr).then(P=>P.default||P)):E;if(!T)throw new Error(`Unknown route middleware: '${E}'.`);try{const P=await e.runWithContext(()=>T(w,v));if(!e.payload.serverRendered&&e.isHydrating&&(P===!1||P instanceof Error)){const B=P||kn({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await e.runWithContext(()=>wn(B)),!1}if(P===!0)continue;if(P===!1)return P;if(P)return jd(P)&&P.fatal&&await e.runWithContext(()=>wn(P)),P}catch(P){const B=kn(P);return B.fatal&&await e.runWithContext(()=>wn(B)),B}}}}),a.onError(async()=>{delete e._processingMiddleware,await e.callHook("page:loading:end")}),a.afterEach(async(w,v)=>{w.matched.length===0&&await e.runWithContext(()=>wn(kn({statusCode:404,fatal:!1,statusMessage:`Page not found: ${w.fullPath}`,data:{path:w.fullPath}})))}),e.hooks.hookOnce("app:created",async()=>{try{"name"in _&&(_.name=void 0),await a.replace({..._,force:!0}),a.options.scrollBehavior=dt.scrollBehavior}catch(w){await e.runWithContext(()=>wn(w))}}),{provide:{router:a}}}}),jl=globalThis.requestIdleCallback||(e=>{const t=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))};return setTimeout(()=>{e(n)},1)}),wC=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),qa=e=>{const t=Te();t.isHydrating?t.hooks.hookOnce("app:suspense:resolve",()=>{jl(()=>e())}):jl(()=>e())},W0=lt({name:"nuxt:payload",setup(e){const t=new Set;et().beforeResolve(async(n,r)=>{if(n.path===r.path)return;const s=await vl(n.path);if(s){for(const i of t)delete e.static.data[i];for(const i in s.data)i in e.static.data||t.add(i),e.static.data[i]=s.data[i]}}),qa(()=>{var n;e.hooks.hook("link:prefetch",async r=>{const{hostname:s}=new URL(r,window.location.href);s===window.location.hostname&&await vl(r).catch(()=>{console.warn("[nuxt] Error preloading payload for",r)})}),((n=navigator.connection)==null?void 0:n.effectiveType)!=="slow-2g"&&setTimeout(Ei,1e3)})}}),V0=lt(()=>{const e=et();qa(()=>{e.beforeResolve(async()=>{await new Promise(t=>{setTimeout(t,100),requestAnimationFrame(()=>{setTimeout(t,0)})})})})}),z0=lt(e=>{let t;async function n(){const r=await Ei();t&&clearTimeout(t),t=setTimeout(n,al);try{const s=await $fetch(ja("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&e.hooks.callHook("app:manifest:update",s)}catch{}}qa(()=>{t=setTimeout(n,al)})});function K0(e={}){const t=e.path||window.location.pathname;let n={};try{n=Do(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(e.force||(n==null?void 0:n.path)!==t||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:t,expires:Date.now()+(e.ttl??1e4)}))}catch{}if(e.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Te().payload.state}))}catch{}window.location.pathname!==t?window.location.href=t:window.location.reload()}}const G0=lt({name:"nuxt:chunk-reload",setup(e){const t=et(),n=ss(),r=new Set;t.beforeEach(()=>{r.clear()}),e.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const o=xd(n.app.baseURL,i.fullPath);K0({path:o,persistState:!0})}e.hook("app:manifest:update",()=>{t.beforeResolve(s)}),t.onError((i,o)=>{r.has(i)&&s(o)})}}),q0=lt({name:"nuxt:global-components"}),Ts={auth:zs(()=>rn(()=>import("./DjLjpNe8.js"),[],import.meta.url).then(e=>e.default||e)),default:zs(()=>rn(()=>import("./BSvP_JgX.js"),__vite__mapDeps([9,7,8,1,4]),import.meta.url).then(e=>e.default||e))};function Y0(e){if(e!=null&&e.__asyncLoader&&!e.__asyncResolved)return e.__asyncLoader()}async function J0(e,t=et()){const{path:n,matched:r}=t.resolve(e);if(!r.length||(t._routePreloaded||(t._routePreloaded=new Set),t._routePreloaded.has(n)))return;const s=t._preloadPromises||(t._preloadPromises=[]);if(s.length>4)return Promise.all(s).then(()=>J0(e,t));t._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const X0=lt({name:"nuxt:prefetch",setup(e){const t=et();e.hooks.hook("app:mounted",()=>{t.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Ts[r]=="function"&&await Ts[r]()})}),e.hooks.hook("link:prefetch",n=>{if(is(n))return;const r=t.resolve(n);if(!r)return;const s=r.meta.layout;let i=Ga(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Nr[o]=="function"&&Nr[o]();typeof s=="string"&&s in Ts&&Y0(Ts[s])})}});/**
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
 */const Q0=()=>{};var Bl={};/**
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
 */const lh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Z0=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},uh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,u=c?e[s+2]:0,l=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(n[l],n[f],n[d],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(lh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Z0(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new ew;const d=i<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ew extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tw=function(e){const t=lh(e);return uh.encodeByteArray(t,!0)},fh=function(e){return tw(e).replace(/\./g,"")},dh=function(e){try{return uh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function nw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rw=()=>nw().__FIREBASE_DEFAULTS__,sw=()=>{if(typeof process>"u"||typeof Bl>"u")return;const e=Bl.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},iw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&dh(e[1]);return t&&JSON.parse(t)},Ya=()=>{try{return Q0()||rw()||sw()||iw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ow=e=>{var t,n;return(n=(t=Ya())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},hh=()=>{var e;return(e=Ya())===null||e===void 0?void 0:e.config},ph=e=>{var t;return(t=Ya())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class aw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Ii(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cw(e){return(await fetch(e,{credentials:"include"})).ok}const Mr={};function lw(){const e={prod:[],emulator:[]};for(const t of Object.keys(Mr))Mr[t]?e.emulator.push(t):e.prod.push(t);return e}function uw(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let Wl=!1;function fw(e,t){if(typeof window>"u"||typeof document>"u"||!Ii(window.location.host)||Mr[e]===t||Mr[e]||Wl)return;Mr[e]=t;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",i=lw().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,p){d.setAttribute("width","24"),d.setAttribute("id",p),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function u(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Wl=!0,o()},d}function l(d,p){d.setAttribute("id",p),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=uw(r),p=n("text"),_=document.getElementById(p)||document.createElement("span"),m=n("learnmore"),S=document.getElementById(m)||document.createElement("a"),w=n("preprendIcon"),v=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const h=d.element;a(h),l(S,m);const b=u();c(v,w),h.append(v,_,S,b),document.body.appendChild(h)}i?(_.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function hw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function gw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mw(){const e=De();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function yw(){try{return typeof indexedDB=="object"}catch{return!1}}function _w(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const bw="FirebaseError";class pn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=bw,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,os.prototype.create)}}class os{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?vw(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new pn(s,a,r)}}function vw(e,t){return e.replace(ww,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const ww=/\{\$([^}]+)}/g;function Ew(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function lr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Vl(i)&&Vl(o)){if(!lr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Vl(e){return e!==null&&typeof e=="object"}/**
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
 */function as(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Sw(e,t){const n=new Iw(e,t);return n.subscribe.bind(n)}class Iw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Tw(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=to),s.error===void 0&&(s.error=to),s.complete===void 0&&(s.complete=to);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tw(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function to(){}/**
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
 */function gn(e){return e&&e._delegate?e._delegate:e}class ur{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Cw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new aw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Pw(t))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=En){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=En){return this.instances.has(t)}getOptions(t=En){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Aw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=En){return this.component?this.component.multipleInstances?t:En:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Aw(e){return e===En?void 0:e}function Pw(e){return e.instantiationMode==="EAGER"}/**
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
 */class kw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Cw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ue||(ue={}));const Rw={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Ow=ue.INFO,xw={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Nw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=xw[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class gh{constructor(t){this.name=t,this._logLevel=Ow,this._logHandler=Nw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ue))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Rw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...t),this._logHandler(this,ue.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...t),this._logHandler(this,ue.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...t),this._logHandler(this,ue.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...t),this._logHandler(this,ue.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...t),this._logHandler(this,ue.ERROR,...t)}}const Mw=(e,t)=>t.some(n=>e instanceof n);let zl,Kl;function Lw(){return zl||(zl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dw(){return Kl||(Kl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mh=new WeakMap,Ko=new WeakMap,yh=new WeakMap,no=new WeakMap,Ja=new WeakMap;function Fw(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(an(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&mh.set(n,e)}).catch(()=>{}),Ja.set(t,e),t}function Uw(e){if(Ko.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ko.set(e,t)}let Go={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ko.get(e);if(t==="objectStoreNames")return e.objectStoreNames||yh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Hw(e){Go=e(Go)}function $w(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ro(this),t,...n);return yh.set(r,t.sort?t.sort():[t]),an(r)}:Dw().includes(e)?function(...t){return e.apply(ro(this),t),an(mh.get(this))}:function(...t){return an(e.apply(ro(this),t))}}function jw(e){return typeof e=="function"?$w(e):(e instanceof IDBTransaction&&Uw(e),Mw(e,Lw())?new Proxy(e,Go):e)}function an(e){if(e instanceof IDBRequest)return Fw(e);if(no.has(e))return no.get(e);const t=jw(e);return t!==e&&(no.set(e,t),Ja.set(t,e)),t}const ro=e=>Ja.get(e);function Bw(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=an(o);return r&&o.addEventListener("upgradeneeded",c=>{r(an(o.result),c.oldVersion,c.newVersion,an(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Ww=["get","getKey","getAll","getAllKeys","count"],Vw=["put","add","delete","clear"],so=new Map;function Gl(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(so.get(t))return so.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Vw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ww.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return so.set(t,i),i}Hw(e=>({...e,get:(t,n,r)=>Gl(t,n)||e.get(t,n,r),has:(t,n)=>!!Gl(t,n)||e.has(t,n)}));/**
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
 */class zw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kw(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qo="@firebase/app",ql="0.13.2";/**
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
 */const Dt=new gh("@firebase/app"),Gw="@firebase/app-compat",qw="@firebase/analytics-compat",Yw="@firebase/analytics",Jw="@firebase/app-check-compat",Xw="@firebase/app-check",Qw="@firebase/auth",Zw="@firebase/auth-compat",e1="@firebase/database",t1="@firebase/data-connect",n1="@firebase/database-compat",r1="@firebase/functions",s1="@firebase/functions-compat",i1="@firebase/installations",o1="@firebase/installations-compat",a1="@firebase/messaging",c1="@firebase/messaging-compat",l1="@firebase/performance",u1="@firebase/performance-compat",f1="@firebase/remote-config",d1="@firebase/remote-config-compat",h1="@firebase/storage",p1="@firebase/storage-compat",g1="@firebase/firestore",m1="@firebase/ai",y1="@firebase/firestore-compat",_1="firebase",b1="11.10.0";/**
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
 */const Yo="[DEFAULT]",v1={[qo]:"fire-core",[Gw]:"fire-core-compat",[Yw]:"fire-analytics",[qw]:"fire-analytics-compat",[Xw]:"fire-app-check",[Jw]:"fire-app-check-compat",[Qw]:"fire-auth",[Zw]:"fire-auth-compat",[e1]:"fire-rtdb",[t1]:"fire-data-connect",[n1]:"fire-rtdb-compat",[r1]:"fire-fn",[s1]:"fire-fn-compat",[i1]:"fire-iid",[o1]:"fire-iid-compat",[a1]:"fire-fcm",[c1]:"fire-fcm-compat",[l1]:"fire-perf",[u1]:"fire-perf-compat",[f1]:"fire-rc",[d1]:"fire-rc-compat",[h1]:"fire-gcs",[p1]:"fire-gcs-compat",[g1]:"fire-fst",[y1]:"fire-fst-compat",[m1]:"fire-vertex","fire-js":"fire-js",[_1]:"fire-js-all"};/**
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
 */const ti=new Map,w1=new Map,Jo=new Map;function Yl(e,t){try{e.container.addComponent(t)}catch(n){Dt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Gr(e){const t=e.name;if(Jo.has(t))return Dt.debug(`There were multiple attempts to register component ${t}.`),!1;Jo.set(t,e);for(const n of ti.values())Yl(n,e);for(const n of w1.values())Yl(n,e);return!0}function _h(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function mt(e){return e==null?!1:e.settings!==void 0}/**
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
 */const E1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cn=new os("app","Firebase",E1);/**
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
 */class S1{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
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
 */const cs=b1;function bh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Yo,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw cn.create("bad-app-name",{appName:String(s)});if(n||(n=hh()),!n)throw cn.create("no-options");const i=ti.get(s);if(i){if(lr(n,i.options)&&lr(r,i.config))return i;throw cn.create("duplicate-app",{appName:s})}const o=new kw(s);for(const c of Jo.values())o.addComponent(c);const a=new S1(n,r,o);return ti.set(s,a),a}function I1(e=Yo){const t=ti.get(e);if(!t&&e===Yo&&hh())return bh();if(!t)throw cn.create("no-app",{appName:e});return t}function Zn(e,t,n){var r;let s=(r=v1[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Dt.warn(a.join(" "));return}Gr(new ur(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const T1="firebase-heartbeat-database",C1=1,qr="firebase-heartbeat-store";let io=null;function vh(){return io||(io=Bw(T1,C1,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(qr)}catch(n){console.warn(n)}}}}).catch(e=>{throw cn.create("idb-open",{originalErrorMessage:e.message})})),io}async function A1(e){try{const n=(await vh()).transaction(qr),r=await n.objectStore(qr).get(wh(e));return await n.done,r}catch(t){if(t instanceof pn)Dt.warn(t.message);else{const n=cn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Dt.warn(n.message)}}}async function Jl(e,t){try{const r=(await vh()).transaction(qr,"readwrite");await r.objectStore(qr).put(t,wh(e)),await r.done}catch(n){if(n instanceof pn)Dt.warn(n.message);else{const r=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dt.warn(r.message)}}}function wh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const P1=1024,k1=30;class R1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new x1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xl();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>k1){const o=N1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Dt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xl(),{heartbeatsToSend:r,unsentEntries:s}=O1(this._heartbeatsCache.heartbeats),i=fh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Dt.warn(n),""}}}function Xl(){return new Date().toISOString().substring(0,10)}function O1(e,t=P1){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ql(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ql(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class x1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yw()?_w().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await A1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jl(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jl(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ql(e){return fh(JSON.stringify({version:2,heartbeats:e})).length}function N1(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function M1(e){Gr(new ur("platform-logger",t=>new zw(t),"PRIVATE")),Gr(new ur("heartbeat",t=>new R1(t),"PRIVATE")),Zn(qo,ql,e),Zn(qo,ql,"esm2017"),Zn("fire-js","")}M1("");var L1="firebase",D1="11.10.0";/**
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
 */Zn(L1,D1,"app");function Xa(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Eh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const F1=Eh,Sh=new os("auth","Firebase",Eh());/**
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
 */const ni=new gh("@firebase/auth");function U1(e,...t){ni.logLevel<=ue.WARN&&ni.warn(`Auth (${cs}): ${e}`,...t)}function Ms(e,...t){ni.logLevel<=ue.ERROR&&ni.error(`Auth (${cs}): ${e}`,...t)}/**
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
 */function wt(e,...t){throw Za(e,...t)}function ot(e,...t){return Za(e,...t)}function Qa(e,t,n){const r=Object.assign(Object.assign({},F1()),{[t]:n});return new os("auth","Firebase",r).create(t,{appName:e.name})}function Rn(e){return Qa(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function H1(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&wt(e,"argument-error"),Qa(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Za(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Sh.create(e,...t)}function Z(e,t,...n){if(!e)throw Za(t,...n)}function Rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ms(t),new Error(t)}function Ft(e,t){e||Rt(t)}/**
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
 */function Xo(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function $1(){return Zl()==="http:"||Zl()==="https:"}function Zl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function j1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($1()||pw()||"connection"in navigator)?navigator.onLine:!0}function B1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class ls{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ft(n>t,"Short delay should be less than long delay!"),this.isMobile=dw()||gw()}get(){return j1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ec(e,t){Ft(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Ih{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const W1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const V1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],z1=new ls(3e4,6e4);function tc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function gr(e,t,n,r,s={}){return Th(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=as(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:c},i);return hw()||(u.referrerPolicy="no-referrer"),e.emulatorConfig&&Ii(e.emulatorConfig.host)&&(u.credentials="include"),Ih.fetch()(await Ch(e,e.config.apiHost,n,a),u)})}async function Th(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},W1),t);try{const s=new G1(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Cs(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cs(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Cs(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Cs(e,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qa(e,l,u);wt(e,l)}}catch(s){if(s instanceof pn)throw s;wt(e,"network-request-failed",{message:String(s)})}}async function K1(e,t,n,r,s={}){const i=await gr(e,t,n,r,s);return"mfaPendingCredential"in i&&wt(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ch(e,t,n,r){const s=`${t}${n}?${r}`,i=e,o=i.config.emulator?ec(e.config,s):`${e.config.apiScheme}://${s}`;return V1.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class G1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"network-request-failed")),z1.get())})}}function Cs(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ot(e,t,r);return s.customData._tokenResponse=n,s}/**
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
 */async function q1(e,t){return gr(e,"POST","/v1/accounts:delete",t)}async function ri(e,t){return gr(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Lr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Y1(e,t=!1){const n=gn(e),r=await n.getIdToken(t),s=nc(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Lr(oo(s.auth_time)),issuedAtTime:Lr(oo(s.iat)),expirationTime:Lr(oo(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function oo(e){return Number(e)*1e3}function nc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ms("JWT malformed, contained fewer than 3 sections"),null;try{const s=dh(n);return s?JSON.parse(s):(Ms("Failed to decode base64 JWT payload"),null)}catch(s){return Ms("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function eu(e){const t=nc(e);return Z(t,"internal-error"),Z(typeof t.exp<"u","internal-error"),Z(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Yr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof pn&&J1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function J1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class X1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qo{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lr(this.lastLoginAt),this.creationTime=Lr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function si(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Yr(e,ri(n,{idToken:r}));Z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Ah(i.providerUserInfo):[],a=Z1(e.providerData,o),c=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Qo(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,f)}async function Q1(e){const t=gn(e);await si(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Z1(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Ah(e){return e.map(t=>{var{providerId:n}=t,r=Xa(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function eE(e,t){const n=await Th(e,{},async()=>{const r=as({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=await Ch(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return e.emulatorConfig&&Ii(e.emulatorConfig.host)&&(c.credentials="include"),Ih.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tE(e,t){return gr(e,"POST","/v2/accounts:revokeToken",tc(e,t))}/**
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
 */class er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Z(t.idToken,"internal-error"),Z(typeof t.idToken<"u","internal-error"),Z(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):eu(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Z(t.length!==0,"internal-error");const n=eu(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await eE(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new er;return r&&(Z(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new er,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function Kt(e,t){Z(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class rt{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Xa(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Qo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Yr(this,this.stsTokenManager.getToken(this.auth,t));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Y1(this,t)}reload(){return Q1(this)}_assign(t){this!==t&&(Z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new rt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await si(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(Rn(this.auth));const t=await this.getIdToken();return await Yr(this,q1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,u,l;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(u=n.createdAt)!==null&&u!==void 0?u:void 0,v=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:h,emailVerified:b,isAnonymous:E,providerData:T,stsTokenManager:P}=n;Z(h&&P,t,"internal-error");const B=er.fromJSON(this.name,P);Z(typeof h=="string",t,"internal-error"),Kt(f,t.name),Kt(d,t.name),Z(typeof b=="boolean",t,"internal-error"),Z(typeof E=="boolean",t,"internal-error"),Kt(p,t.name),Kt(_,t.name),Kt(m,t.name),Kt(S,t.name),Kt(w,t.name),Kt(v,t.name);const L=new rt({uid:h,auth:t,email:d,emailVerified:b,displayName:f,isAnonymous:E,photoURL:_,phoneNumber:p,tenantId:m,stsTokenManager:B,createdAt:w,lastLoginAt:v});return T&&Array.isArray(T)&&(L.providerData=T.map(M=>Object.assign({},M))),S&&(L._redirectEventId=S),L}static async _fromIdTokenResponse(t,n,r=!1){const s=new er;s.updateFromServerResponse(n);const i=new rt({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await si(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ah(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new er;a.updateFromIdToken(r);const c=new rt({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Qo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const tu=new Map;function Ot(e){Ft(e instanceof Function,"Expected a class definition");let t=tu.get(e);return t?(Ft(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,tu.set(e,t),t)}/**
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
 */class Ph{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Ph.type="NONE";const nu=Ph;/**
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
 */function Ls(e,t,n){return`firebase:${e}:${t}:${n}`}class tr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ls(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ls("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await ri(this.auth,{idToken:t}).catch(()=>{});return n?rt._fromGetAccountInfoResponse(this.auth,n,t):null}return rt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new tr(Ot(nu),t,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ot(nu);const o=Ls(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){let f;if(typeof l=="string"){const d=await ri(t,{idToken:l}).catch(()=>{});if(!d)break;f=await rt._fromGetAccountInfoResponse(t,d,l)}else f=rt._fromJSON(t,l);u!==i&&(a=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new tr(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new tr(i,t,r))}}/**
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
 */function ru(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(xh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(kh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Mh(t))return"Blackberry";if(Lh(t))return"Webos";if(Rh(t))return"Safari";if((t.includes("chrome/")||Oh(t))&&!t.includes("edge/"))return"Chrome";if(Nh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kh(e=De()){return/firefox\//i.test(e)}function Rh(e=De()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Oh(e=De()){return/crios\//i.test(e)}function xh(e=De()){return/iemobile/i.test(e)}function Nh(e=De()){return/android/i.test(e)}function Mh(e=De()){return/blackberry/i.test(e)}function Lh(e=De()){return/webos/i.test(e)}function rc(e=De()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function nE(e=De()){var t;return rc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function rE(){return mw()&&document.documentMode===10}function Dh(e=De()){return rc(e)||Nh(e)||Lh(e)||Mh(e)||/windows phone/i.test(e)||xh(e)}/**
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
 */function Fh(e,t=[]){let n;switch(e){case"Browser":n=ru(De());break;case"Worker":n=`${ru(De())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${cs}/${r}`}/**
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
 */class sE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function iE(e,t={}){return gr(e,"GET","/v2/passwordPolicy",tc(e,t))}/**
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
 */const oE=6;class aE{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:oE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class cE{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new su(this),this.idTokenSubscription=new su(this),this.beforeStateQueue=new sE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ot(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await tr.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await ri(this,{idToken:t}),r=await rt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await si(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=B1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(mt(this.app))return Promise.reject(Rn(this));const n=t?gn(t):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return mt(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await iE(this),n=new aE(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new os("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tE(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ot(t)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await tr.create(this,[Ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Fh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&U1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ti(e){return gn(e)}class su{constructor(t){this.auth=t,this.observer=null,this.addObserver=Sw(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lE(e){sc=e}function uE(e){return sc.loadJS(e)}function fE(){return sc.gapiScript}function dE(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function hE(e,t){const n=_h(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(lr(i,t??{}))return s;wt(s,"already-initialized")}return n.initialize({options:t})}function pE(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ot);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function gE(e,t,n){const r=Ti(e);Z(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=Uh(t),{host:o,port:a}=mE(t),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},l=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(lr(u,r.config.emulator)&&lr(l,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=l,r.settings.appVerificationDisabledForTesting=!0,Ii(o)?(cw(`${i}//${o}${c}`),fw("Auth",!0)):yE()}function Uh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function mE(e){const t=Uh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:iu(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:iu(o)}}}function iu(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function yE(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Hh{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(t){return Rt("not implemented")}_linkToIdToken(t,n){return Rt("not implemented")}_getReauthenticationResolver(t){return Rt("not implemented")}}/**
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
 */async function nr(e,t){return K1(e,"POST","/v1/accounts:signInWithIdp",tc(e,t))}/**
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
 */const _E="http://localhost";class xn extends Hh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new xn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Xa(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new xn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return nr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,nr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,nr(t,n)}buildRequest(){const t={requestUri:_E,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=as(n)}return t}}/**
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
 */class ic{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class us extends ic{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class en extends us{constructor(){super("facebook.com")}static credential(t){return xn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return en.credential(t.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
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
 */class At extends us{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return xn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return At.credential(n,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
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
 */class tn extends us{constructor(){super("github.com")}static credential(t){return xn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return tn.credential(t.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */class nn extends us{constructor(){super("twitter.com")}static credential(t,n){return xn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
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
 */class fr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await rt._fromIdTokenResponse(t,r,s),o=ou(r);return new fr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=ou(r);return new fr({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function ou(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ii extends pn{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ii.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new ii(t,n,r,s)}}function $h(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ii._fromErrorAndOperation(e,i,t,r):i})}async function bE(e,t,n=!1){const r=await Yr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return fr._forOperation(e,"link",r)}/**
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
 */async function vE(e,t,n=!1){const{auth:r}=e;if(mt(r.app))return Promise.reject(Rn(r));const s="reauthenticate";try{const i=await Yr(e,$h(r,s,t,e),n);Z(i.idToken,r,"internal-error");const o=nc(i.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(e.uid===a,r,"user-mismatch"),fr._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wt(r,"user-mismatch"),i}}/**
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
 */async function wE(e,t,n=!1){if(mt(e.app))return Promise.reject(Rn(e));const r="signIn",s=await $h(e,r,t),i=await fr._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}function EE(e,t,n,r){return gn(e).onIdTokenChanged(t,n,r)}function SE(e,t,n){return gn(e).beforeAuthStateChanged(t,n)}function IE(e,t,n,r){return gn(e).onAuthStateChanged(t,n,r)}function TE(e){return gn(e).signOut()}const oi="__sak";/**
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
 */class jh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oi,"1"),this.storage.removeItem(oi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const CE=1e3,AE=10;class Bh extends jh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);rE()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,AE):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},CE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Bh.type="LOCAL";const PE=Bh;/**
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
 */class Wh extends jh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Wh.type="SESSION";const Vh=Wh;/**
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
 */function kE(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ci{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new Ci(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await kE(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ci.receivers=[];/**
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
 */function oc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class RE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=oc("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function vt(){return window}function OE(e){vt().location.href=e}/**
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
 */function zh(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function xE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NE(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function ME(){return zh()?self:null}/**
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
 */const Kh="firebaseLocalStorageDb",LE=1,ai="firebaseLocalStorage",Gh="fbase_key";class fs{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ai(e,t){return e.transaction([ai],t?"readwrite":"readonly").objectStore(ai)}function DE(){const e=indexedDB.deleteDatabase(Kh);return new fs(e).toPromise()}function Zo(){const e=indexedDB.open(Kh,LE);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ai,{keyPath:Gh})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ai)?t(r):(r.close(),await DE(),t(await Zo()))})})}async function au(e,t,n){const r=Ai(e,!0).put({[Gh]:t,value:n});return new fs(r).toPromise()}async function FE(e,t){const n=Ai(e,!1).get(t),r=await new fs(n).toPromise();return r===void 0?null:r.value}function cu(e,t){const n=Ai(e,!0).delete(t);return new fs(n).toPromise()}const UE=800,HE=3;class qh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zo(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>HE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ci._getInstance(ME()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await xE(),!this.activeServiceWorker)return;this.sender=new RE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||NE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Zo();return await au(t,oi,"1"),await cu(t,oi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>au(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>FE(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>cu(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Ai(s,!1).getAll();return new fs(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qh.type="LOCAL";const $E=qh;new ls(3e4,6e4);/**
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
 */function Yh(e,t){return t?Ot(t):(Z(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ac extends Hh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return nr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return nr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return nr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function jE(e){return wE(e.auth,new ac(e),e.bypassAuthState)}function BE(e){const{auth:t,user:n}=e;return Z(n,t,"internal-error"),vE(n,new ac(e),e.bypassAuthState)}async function WE(e){const{auth:t,user:n}=e;return Z(n,t,"internal-error"),bE(n,new ac(e),e.bypassAuthState)}/**
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
 */class Jh{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return jE;case"linkViaPopup":case"linkViaRedirect":return WE;case"reauthViaPopup":case"reauthViaRedirect":return BE;default:wt(this.auth,"internal-error")}}resolve(t){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const VE=new ls(2e3,1e4);async function zE(e,t,n){if(mt(e.app))return Promise.reject(ot(e,"operation-not-supported-in-this-environment"));const r=Ti(e);H1(e,t,ic);const s=Yh(r,n);return new Sn(r,"signInViaPopup",t,s).executeNotNull()}class Sn extends Jh{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Z(t,this.auth,"internal-error"),t}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const t=oc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,VE.get())};t()}}Sn.currentPopupAction=null;/**
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
 */const KE="pendingRedirect",Ds=new Map;class GE extends Jh{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ds.get(this.auth._key());if(!t){try{const r=await qE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ds.set(this.auth._key(),t)}return this.bypassAuthState||Ds.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qE(e,t){const n=XE(t),r=JE(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function YE(e,t){Ds.set(e._key(),t)}function JE(e){return Ot(e._redirectPersistence)}function XE(e){return Ls(KE,e.config.apiKey,e.name)}async function QE(e,t,n=!1){if(mt(e.app))return Promise.reject(Rn(e));const r=Ti(e),s=Yh(r,t),o=await new GE(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const ZE=10*60*1e3;class eS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!tS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Xh(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ot(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ZE&&this.cachedEventUids.clear(),this.cachedEventUids.has(lu(t))}saveEventToCache(t){this.cachedEventUids.add(lu(t)),this.lastProcessedEventTime=Date.now()}}function lu(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Xh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function tS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xh(e);default:return!1}}/**
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
 */async function nS(e,t={}){return gr(e,"GET","/v1/projects",t)}/**
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
 */const rS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sS=/^https?/;async function iS(e){if(e.config.emulator)return;const{authorizedDomains:t}=await nS(e);for(const n of t)try{if(oS(n))return}catch{}wt(e,"unauthorized-domain")}function oS(e){const t=Xo(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sS.test(n))return!1;if(rS.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const aS=new ls(3e4,6e4);function uu(){const e=vt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function cS(e){return new Promise((t,n)=>{var r,s,i;function o(){uu(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{uu(),n(ot(e,"network-request-failed"))},timeout:aS.get()})}if(!((s=(r=vt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=vt().gapi)===null||i===void 0)&&i.load)o();else{const a=dE("iframefcb");return vt()[a]=()=>{gapi.load?o():n(ot(e,"network-request-failed"))},uE(`${fE()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Fs=null,t})}let Fs=null;function lS(e){return Fs=Fs||cS(e),Fs}/**
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
 */const uS=new ls(5e3,15e3),fS="__/auth/iframe",dS="emulator/auth/iframe",hS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gS(e){const t=e.config;Z(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ec(t,dS):`https://${e.config.authDomain}/${fS}`,r={apiKey:t.apiKey,appName:e.name,v:cs},s=pS.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${as(r).slice(1)}`}async function mS(e){const t=await lS(e),n=vt().gapi;return Z(n,e,"internal-error"),t.open({where:document.body,url:gS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ot(e,"network-request-failed"),a=vt().setTimeout(()=>{i(o)},uS.get());function c(){vt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const yS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_S=500,bS=600,vS="_blank",wS="http://localhost";class fu{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ES(e,t,n,r=_S,s=bS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},yS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=De().toLowerCase();n&&(a=Oh(u)?vS:n),kh(u)&&(t=t||wS,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(nE(u)&&a!=="_self")return SS(t||"",a),new fu(null);const f=window.open(t||"",a,l);Z(f,e,"popup-blocked");try{f.focus()}catch{}return new fu(f)}function SS(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const IS="__/auth/handler",TS="emulator/auth/handler",CS=encodeURIComponent("fac");async function du(e,t,n,r,s,i){Z(e.config.authDomain,e,"auth-domain-config-required"),Z(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:cs,eventId:s};if(t instanceof ic){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ew(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,f]of Object.entries({}))o[l]=f}if(t instanceof us){const l=t.getScopes().filter(f=>f!=="");l.length>0&&(o.scopes=l.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await e._getAppCheckToken(),u=c?`#${CS}=${encodeURIComponent(c)}`:"";return`${AS(e)}?${as(a).slice(1)}${u}`}function AS({config:e}){return e.emulator?ec(e,TS):`https://${e.authDomain}/${IS}`}/**
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
 */const ao="webStorageSupport";class PS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vh,this._completeRedirectFn=QE,this._overrideRedirectResult=YE}async _openPopup(t,n,r,s){var i;Ft((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await du(t,n,r,Xo(),s);return ES(t,o,oc())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await du(t,n,r,Xo(),s);return OE(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ft(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await mS(t),r=new eS(t);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ao,{type:ao},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ao];o!==void 0&&n(!!o),wt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iS(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dh()||Rh()||rc()}}const kS=PS;var hu="@firebase/auth",pu="1.10.8";/**
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
 */class RS{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function OS(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xS(e){Gr(new ur("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fh(e)},u=new cE(r,s,i,c);return pE(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Gr(new ur("auth-internal",t=>{const n=Ti(t.getProvider("auth").getImmediate());return(r=>new RS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(hu,pu,OS(e)),Zn(hu,pu,"esm2017")}/**
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
 */const NS=5*60,MS=ph("authIdTokenMaxAge")||NS;let gu=null;const LS=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MS)return;const s=n==null?void 0:n.token;gu!==s&&(gu=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function DS(e=I1()){const t=_h(e,"auth");if(t.isInitialized())return t.getImmediate();const n=hE(e,{popupRedirectResolver:kS,persistence:[$E,PE,Vh]}),r=ph("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=LS(i.toString());SE(n,o,()=>o(n.currentUser)),EE(n,a=>o(a))}}const s=ow("auth");return s&&gE(n,`http://${s}`),n}function FS(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}lE({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=ot("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",FS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xS("Browser");const US=lt(()=>{const e=ss();console.log("Firebase Config Debug:",{apiKey:e.public.firebaseApiKey,authDomain:e.public.firebaseAuthDomain,projectId:e.public.firebaseProjectId,storageBucket:e.public.firebaseStorageBucket,messagingSenderId:e.public.firebaseMessagingSenderId,appId:e.public.firebaseAppId,measurementId:e.public.firebaseMeasurementId});const t=e.public.firebaseApiKey&&e.public.firebaseAuthDomain;console.log("Environment variables loaded:",t);const n={apiKey:e.public.firebaseApiKey||"AIzaSyAsZny07ZSziKUbauE8z4kSjBuNPZIqLKc",authDomain:e.public.firebaseAuthDomain||"nuxt-dashdash.firebaseapp.com",projectId:e.public.firebaseProjectId||"nuxt-dashdash",storageBucket:e.public.firebaseStorageBucket||"nuxt-dashdash.firebasestorage.app",messagingSenderId:e.public.firebaseMessagingSenderId||"285552934341",appId:e.public.firebaseAppId||"1:285552934341:web:19ee5473fe483602929fac",measurementId:e.public.firebaseMeasurementId||"G-8V4CC0302V"};console.log("Final Firebase Config:",n);const r=bh(n),s=DS(r),i=new At;i.setCustomParameters({prompt:"select_account",access_type:"offline",include_granted_scopes:"true"});const o=async()=>{try{console.log("Starting Google sign-in...");const a=await zE(s,i);return console.log("Sign-in successful:",a),a}catch(a){throw console.error("Sign-in error:",a),a.code==="auth/popup-closed-by-user"?new Error("Sign-in was cancelled by user"):a.code==="auth/popup-blocked"?new Error("Popup was blocked. Please allow popups for this site."):a.code==="auth/unauthorized-domain"?new Error("This domain is not authorized. Please check Firebase console settings."):a}};return console.log("Firebase plugin initialized successfully"),{provide:{firebase:{auth:s,googleProvider:i,signInWithGoogle:o,signOut:()=>TE(s),onAuthStateChanged:a=>IE(s,a)}}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function HS(e,t,n){return(t=jS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mu(Object(n),!0).forEach(function(r){HS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $S(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function jS(e){var t=$S(e,"string");return typeof t=="symbol"?t:t+""}const yu=()=>{};let cc={},Qh={},Zh=null,ep={mark:yu,measure:yu};try{typeof window<"u"&&(cc=window),typeof document<"u"&&(Qh=document),typeof MutationObserver<"u"&&(Zh=MutationObserver),typeof performance<"u"&&(ep=performance)}catch{}const{userAgent:_u=""}=cc.navigator||{},un=cc,pe=Qh,bu=Zh,As=ep;un.document;const Bt=!!pe.documentElement&&!!pe.head&&typeof pe.addEventListener=="function"&&typeof pe.createElement=="function",tp=~_u.indexOf("MSIE")||~_u.indexOf("Trident/");var BS=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,WS=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,np={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},VS={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},rp=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],xe="classic",Pi="duotone",zS="sharp",KS="sharp-duotone",sp=[xe,Pi,zS,KS],GS={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},qS={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},YS=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),JS={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},XS=["fak","fa-kit","fakd","fa-kit-duotone"],vu={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},QS=["kit"],ZS={kit:{"fa-kit":"fak"}},eI=["fak","fakd"],tI={kit:{fak:"fa-kit"}},wu={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ps={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},nI=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],rI=["fak","fa-kit","fakd","fa-kit-duotone"],sI={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},iI={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},oI={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ea={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},aI=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ta=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...nI,...aI],cI=["solid","regular","light","thin","duotone","brands"],ip=[1,2,3,4,5,6,7,8,9,10],lI=ip.concat([11,12,13,14,15,16,17,18,19,20]),uI=[...Object.keys(oI),...cI,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ps.GROUP,Ps.SWAP_OPACITY,Ps.PRIMARY,Ps.SECONDARY].concat(ip.map(e=>"".concat(e,"x"))).concat(lI.map(e=>"w-".concat(e))),fI={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Ut="___FONT_AWESOME___",na=16,op="fa",ap="svg-inline--fa",Nn="data-fa-i2svg",ra="data-fa-pseudo-element",dI="data-fa-pseudo-element-pending",lc="data-prefix",uc="data-icon",Eu="fontawesome-i2svg",hI="async",pI=["HTML","HEAD","STYLE","SCRIPT"],cp=(()=>{try{return!0}catch{return!1}})();function ds(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[xe]}})}const lp=O({},np);lp[xe]=O(O(O(O({},{"fa-duotone":"duotone"}),np[xe]),vu.kit),vu["kit-duotone"]);const gI=ds(lp),sa=O({},JS);sa[xe]=O(O(O(O({},{duotone:"fad"}),sa[xe]),wu.kit),wu["kit-duotone"]);const Su=ds(sa),ia=O({},ea);ia[xe]=O(O({},ia[xe]),tI.kit);const fc=ds(ia),oa=O({},iI);oa[xe]=O(O({},oa[xe]),ZS.kit);ds(oa);const mI=BS,up="fa-layers-text",yI=WS,_I=O({},GS);ds(_I);const bI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],co=VS,vI=[...QS,...uI],Dr=un.FontAwesomeConfig||{};function wI(e){var t=pe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function EI(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}pe&&typeof pe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const s=EI(wI(n));s!=null&&(Dr[r]=s)});const fp={styleDefault:"solid",familyDefault:xe,cssPrefix:op,replacementClass:ap,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Dr.familyPrefix&&(Dr.cssPrefix=Dr.familyPrefix);const dr=O(O({},fp),Dr);dr.autoReplaceSvg||(dr.observeMutations=!1);const K={};Object.keys(fp).forEach(e=>{Object.defineProperty(K,e,{enumerable:!0,set:function(t){dr[e]=t,Fr.forEach(n=>n(K))},get:function(){return dr[e]}})});Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(e){dr.cssPrefix=e,Fr.forEach(t=>t(K))},get:function(){return dr.cssPrefix}});un.FontAwesomeConfig=K;const Fr=[];function SI(e){return Fr.push(e),()=>{Fr.splice(Fr.indexOf(e),1)}}const Gt=na,yt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function II(e){if(!e||!Bt)return;const t=pe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=pe.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return pe.head.insertBefore(t,r),e}const TI="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Jr(){let e=12,t="";for(;e-- >0;)t+=TI[Math.random()*62|0];return t}function mr(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function dc(e){return e.classList?mr(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function dp(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function CI(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(dp(e[n]),'" '),"").trim()}function ki(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function hc(e){return e.size!==yt.size||e.x!==yt.x||e.y!==yt.y||e.rotate!==yt.rotate||e.flipX||e.flipY}function AI(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function PI(e){let{transform:t,width:n=na,height:r=na,startCentered:s=!1}=e,i="";return s&&tp?i+="translate(".concat(t.x/Gt-n/2,"em, ").concat(t.y/Gt-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(t.x/Gt,"em), calc(-50% + ").concat(t.y/Gt,"em)) "):i+="translate(".concat(t.x/Gt,"em, ").concat(t.y/Gt,"em) "),i+="scale(".concat(t.size/Gt*(t.flipX?-1:1),", ").concat(t.size/Gt*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var kI=`:root, :host {
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
}`;function hp(){const e=op,t=ap,n=K.cssPrefix,r=K.replacementClass;let s=kI;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let Iu=!1;function lo(){K.autoAddCss&&!Iu&&(II(hp()),Iu=!0)}var RI={mixout(){return{dom:{css:hp,insertCss:lo}}},hooks(){return{beforeDOMElementCreation(){lo()},beforeI2svg(){lo()}}}};const Ht=un||{};Ht[Ut]||(Ht[Ut]={});Ht[Ut].styles||(Ht[Ut].styles={});Ht[Ut].hooks||(Ht[Ut].hooks={});Ht[Ut].shims||(Ht[Ut].shims=[]);var _t=Ht[Ut];const pp=[],gp=function(){pe.removeEventListener("DOMContentLoaded",gp),ci=1,pp.map(e=>e())};let ci=!1;Bt&&(ci=(pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(pe.readyState),ci||pe.addEventListener("DOMContentLoaded",gp));function OI(e){Bt&&(ci?setTimeout(e,0):pp.push(e))}function hs(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?dp(e):"<".concat(t," ").concat(CI(n),">").concat(r.map(hs).join(""),"</").concat(t,">")}function Tu(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var uo=function(t,n,r,s){var i=Object.keys(t),o=i.length,a=n,c,u,l;for(r===void 0?(c=1,l=t[i[0]]):(c=0,l=r);c<o;c++)u=i[c],l=a(l,t[u],u,t);return l};function xI(e){const t=[];let n=0;const r=e.length;for(;n<r;){const s=e.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((s&1023)<<10)+(i&1023)+65536):(t.push(s),n--)}else t.push(s)}return t}function aa(e){const t=xI(e);return t.length===1?t[0].toString(16):null}function NI(e,t){const n=e.length;let r=e.charCodeAt(t),s;return r>=55296&&r<=56319&&n>t+1&&(s=e.charCodeAt(t+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Cu(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function ca(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Cu(t);typeof _t.hooks.addPack=="function"&&!r?_t.hooks.addPack(e,Cu(t)):_t.styles[e]=O(O({},_t.styles[e]||{}),s),e==="fas"&&ca("fa",t)}const{styles:Xr,shims:MI}=_t,mp=Object.keys(fc),LI=mp.reduce((e,t)=>(e[t]=Object.keys(fc[t]),e),{});let pc=null,yp={},_p={},bp={},vp={},wp={};function DI(e){return~vI.indexOf(e)}function FI(e,t){const n=t.split("-"),r=n[0],s=n.slice(1).join("-");return r===e&&s!==""&&!DI(s)?s:null}const Ep=()=>{const e=r=>uo(Xr,(s,i,o)=>(s[o]=uo(i,r,{}),s),{});yp=e((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),_p=e((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),wp=e((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const t="far"in Xr||K.autoFetchSvg,n=uo(MI,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});bp=n.names,vp=n.unicodes,pc=Ri(K.styleDefault,{family:K.familyDefault})};SI(e=>{pc=Ri(e.styleDefault,{family:K.familyDefault})});Ep();function gc(e,t){return(yp[e]||{})[t]}function UI(e,t){return(_p[e]||{})[t]}function In(e,t){return(wp[e]||{})[t]}function Sp(e){return bp[e]||{prefix:null,iconName:null}}function HI(e){const t=vp[e],n=gc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function fn(){return pc}const Ip=()=>({prefix:null,iconName:null,rest:[]});function $I(e){let t=xe;const n=mp.reduce((r,s)=>(r[s]="".concat(K.cssPrefix,"-").concat(s),r),{});return sp.forEach(r=>{(e.includes(n[r])||e.some(s=>LI[r].includes(s)))&&(t=r)}),t}function Ri(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=xe}=t,r=gI[n][e];if(n===Pi&&!e)return"fad";const s=Su[n][e]||Su[n][r],i=e in _t.styles?e:null;return s||i||null}function jI(e){let t=[],n=null;return e.forEach(r=>{const s=FI(K.cssPrefix,r);s?n=s:r&&t.push(r)}),{iconName:n,rest:t}}function Au(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function Oi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const s=ta.concat(rI),i=Au(e.filter(f=>s.includes(f))),o=Au(e.filter(f=>!ta.includes(f))),a=i.filter(f=>(r=f,!rp.includes(f))),[c=null]=a,u=$I(i),l=O(O({},jI(o)),{},{prefix:Ri(c,{family:u})});return O(O(O({},l),zI({values:e,family:u,styles:Xr,config:K,canonical:l,givenPrefix:r})),BI(n,r,l))}function BI(e,t,n){let{prefix:r,iconName:s}=n;if(e||!r||!s)return{prefix:r,iconName:s};const i=t==="fa"?Sp(s):{},o=In(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!Xr.far&&Xr.fas&&!K.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const WI=sp.filter(e=>e!==xe||e!==Pi),VI=Object.keys(ea).filter(e=>e!==xe).map(e=>Object.keys(ea[e])).flat();function zI(e){const{values:t,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=e,a=n===Pi,c=t.includes("fa-duotone")||t.includes("fad"),u=o.familyDefault==="duotone",l=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(c||u||l)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&WI.includes(n)&&(Object.keys(i).find(d=>VI.includes(d))||o.autoFetchSvg)){const d=YS.get(n).defaultShortPrefixId;r.prefix=d,r.iconName=In(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=fn()||"fas"),r}class KI{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=O(O({},this.definitions[i]||{}),s[i]),ca(i,s[i]);const o=fc[xe][i];o&&ca(o,s[i]),Ep()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],c=a[2];t[i]||(t[i]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(t[i][u]=a)}),t[i][o]=a}),t}}let Pu=[],Wn={};const rr={},GI=Object.keys(rr);function qI(e,t){let{mixoutsTo:n}=t;return Pu=e,Wn={},Object.keys(rr).forEach(r=>{GI.indexOf(r)===-1&&delete rr[r]}),Pu.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Wn[o]||(Wn[o]=[]),Wn[o].push(i[o])})}r.provides&&r.provides(rr)}),n}function la(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Wn[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function Mn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(Wn[e]||[]).forEach(i=>{i.apply(null,n)})}function dn(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return rr[e]?rr[e].apply(null,t):void 0}function ua(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||fn();if(t)return t=In(n,t)||t,Tu(Tp.definitions,n,t)||Tu(_t.styles,n,t)}const Tp=new KI,YI=()=>{K.autoReplaceSvg=!1,K.observeMutations=!1,Mn("noAuto")},JI={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Bt?(Mn("beforeI2svg",e),dn("pseudoElements2svg",e),dn("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,OI(()=>{QI({autoReplaceSvgRoot:t}),Mn("watch",e)})}},XI={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:In(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Ri(e[0]);return{prefix:n,iconName:In(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(K.cssPrefix,"-"))>-1||e.match(mI))){const t=Oi(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||fn(),iconName:In(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=fn();return{prefix:t,iconName:In(t,e)||e}}}},qe={noAuto:YI,config:K,dom:JI,parse:XI,library:Tp,findIconDefinition:ua,toHtml:hs},QI=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=pe}=e;(Object.keys(_t.styles).length>0||K.autoFetchSvg)&&Bt&&K.autoReplaceSvg&&qe.dom.i2svg({node:t})};function xi(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>hs(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Bt)return;const n=pe.createElement("div");return n.innerHTML=e.html,n.children}}),e}function ZI(e){let{children:t,main:n,mask:r,attributes:s,styles:i,transform:o}=e;if(hc(o)&&n.found&&!r.found){const{width:a,height:c}=n,u={x:a/c/2,y:.5};s.style=ki(O(O({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:t}]}function eT(e){let{prefix:t,iconName:n,children:r,attributes:s,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(K.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},s),{},{id:o}),children:r}]}]}function mc(e){const{icons:{main:t,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:c,titleId:u,extra:l,watchable:f=!1}=e,{width:d,height:p}=n.found?n:t,_=eI.includes(r),m=[K.replacementClass,s?"".concat(K.cssPrefix,"-").concat(s):""].filter(E=>l.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(l.classes).join(" ");let S={children:[],attributes:O(O({},l.attributes),{},{"data-prefix":r,"data-icon":s,class:m,role:l.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(p)})};const w=_&&!~l.classes.indexOf("fa-fw")?{width:"".concat(d/p*16*.0625,"em")}:{};f&&(S.attributes[Nn]=""),a&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(u||Jr())},children:[a]}),delete S.attributes.title);const v=O(O({},S),{},{prefix:r,iconName:s,main:t,mask:n,maskId:c,transform:i,symbol:o,styles:O(O({},w),l.styles)}),{children:h,attributes:b}=n.found&&t.found?dn("generateAbstractMask",v)||{children:[],attributes:{}}:dn("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=h,v.attributes=b,o?eT(v):ZI(v)}function ku(e){const{content:t,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=e,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(c[Nn]="");const u=O({},o.styles);hc(s)&&(u.transform=PI({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const l=ki(u);l.length>0&&(c.style=l);const f=[];return f.push({tag:"span",attributes:c,children:[t]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function tT(e){const{content:t,title:n,extra:r}=e,s=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ki(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:fo}=_t;function fa(e){const t=e[0],n=e[1],[r]=e.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(K.cssPrefix,"-").concat(co.GROUP)},children:[{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(co.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(co.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:s}}const nT={found:!1,width:512,height:512};function rT(e,t){!cp&&!K.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function da(e,t){let n=t;return t==="fa"&&K.styleDefault!==null&&(t=fn()),new Promise((r,s)=>{if(n==="fa"){const i=Sp(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&fo[t]&&fo[t][e]){const i=fo[t][e];return r(fa(i))}rT(e,t),r(O(O({},nT),{},{icon:K.showMissingIcons&&e?dn("missingIconAbstract")||{}:{}}))})}const Ru=()=>{},ha=K.measurePerformance&&As&&As.mark&&As.measure?As:{mark:Ru,measure:Ru},Ir='FA "6.7.2"',sT=e=>(ha.mark("".concat(Ir," ").concat(e," begins")),()=>Cp(e)),Cp=e=>{ha.mark("".concat(Ir," ").concat(e," ends")),ha.measure("".concat(Ir," ").concat(e),"".concat(Ir," ").concat(e," begins"),"".concat(Ir," ").concat(e," ends"))};var yc={begin:sT,end:Cp};const Us=()=>{};function Ou(e){return typeof(e.getAttribute?e.getAttribute(Nn):null)=="string"}function iT(e){const t=e.getAttribute?e.getAttribute(lc):null,n=e.getAttribute?e.getAttribute(uc):null;return t&&n}function oT(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(K.replacementClass)}function aT(){return K.autoReplaceSvg===!0?Hs.replace:Hs[K.autoReplaceSvg]||Hs.replace}function cT(e){return pe.createElementNS("http://www.w3.org/2000/svg",e)}function lT(e){return pe.createElement(e)}function Ap(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?cT:lT}=t;if(typeof e=="string")return pe.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(Ap(i,{ceFn:n}))}),r}function uT(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Hs={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Ap(n),t)}),t.getAttribute(Nn)===null&&K.keepOriginalSource){let n=pe.createComment(uT(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~dc(t).indexOf(K.replacementClass))return Hs.replace(e);const r=new RegExp("".concat(K.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===K.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>hs(i)).join(`
`);t.setAttribute(Nn,""),t.innerHTML=s}};function xu(e){e()}function Pp(e,t){const n=typeof t=="function"?t:Us;if(e.length===0)n();else{let r=xu;K.mutateApproach===hI&&(r=un.requestAnimationFrame||xu),r(()=>{const s=aT(),i=yc.begin("mutate");e.map(s),i(),n()})}}let _c=!1;function kp(){_c=!0}function pa(){_c=!1}let li=null;function Nu(e){if(!bu||!K.observeMutations)return;const{treeCallback:t=Us,nodeCallback:n=Us,pseudoElementsCallback:r=Us,observeMutationsRoot:s=pe}=e;li=new bu(i=>{if(_c)return;const o=fn();mr(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Ou(a.addedNodes[0])&&(K.searchPseudoElements&&r(a.target),t(a.target)),a.type==="attributes"&&a.target.parentNode&&K.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Ou(a.target)&&~bI.indexOf(a.attributeName))if(a.attributeName==="class"&&iT(a.target)){const{prefix:c,iconName:u}=Oi(dc(a.target));a.target.setAttribute(lc,c||o),u&&a.target.setAttribute(uc,u)}else oT(a.target)&&n(a.target)})}),Bt&&li.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function fT(){li&&li.disconnect()}function dT(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function hT(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let s=Oi(dc(e));return s.prefix||(s.prefix=fn()),t&&n&&(s.prefix=t,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=UI(s.prefix,e.innerText)||gc(s.prefix,aa(e.innerText))),!s.iconName&&K.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=e.firstChild.data)),s}function pT(e){const t=mr(e.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return K.autoA11y&&(n?t["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(r||Jr()):(t["aria-hidden"]="true",t.focusable="false")),t}function gT(){return{iconName:null,title:null,titleId:null,prefix:null,transform:yt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=hT(e),i=pT(e),o=la("parseNodeAttributes",{},e);let a=t.styleParser?dT(e):[];return O({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:yt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}const{styles:mT}=_t;function Rp(e){const t=K.autoReplaceSvg==="nest"?Mu(e,{styleParser:!1}):Mu(e);return~t.extra.classes.indexOf(up)?dn("generateLayersText",e,t):dn("generateSvgReplacementMutation",e,t)}function yT(){return[...XS,...ta]}function Lu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Bt)return Promise.resolve();const n=pe.documentElement.classList,r=l=>n.add("".concat(Eu,"-").concat(l)),s=l=>n.remove("".concat(Eu,"-").concat(l)),i=K.autoFetchSvg?yT():rp.concat(Object.keys(mT));i.includes("fa")||i.push("fa");const o=[".".concat(up,":not([").concat(Nn,"])")].concat(i.map(l=>".".concat(l,":not([").concat(Nn,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=mr(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const c=yc.begin("onTree"),u=a.reduce((l,f)=>{try{const d=Rp(f);d&&l.push(d)}catch(d){cp||d.name==="MissingIcon"&&console.error(d)}return l},[]);return new Promise((l,f)=>{Promise.all(u).then(d=>{Pp(d,()=>{r("active"),r("complete"),s("pending"),typeof t=="function"&&t(),c(),l()})}).catch(d=>{c(),f(d)})})}function _T(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Rp(e).then(n=>{n&&Pp([n],t)})}function bT(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:ua(t||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:ua(s||{})),e(r,O(O({},n),{},{mask:s}))}}const vT=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=yt,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:c=[],attributes:u={},styles:l={}}=t;if(!e)return;const{prefix:f,iconName:d,icon:p}=e;return xi(O({type:"icon"},e),()=>(Mn("beforeDOMElementCreation",{iconDefinition:e,params:t}),K.autoA11y&&(o?u["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(a||Jr()):(u["aria-hidden"]="true",u.focusable="false")),mc({icons:{main:fa(p),mask:s?fa(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:O(O({},yt),n),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:l,classes:c}})))};var wT={mixout(){return{icon:bT(vT)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Lu,e.nodeCallback=_T,e}}},provides(e){e.i2svg=function(t){const{node:n=pe,callback:r=()=>{}}=t;return Lu(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:c,mask:u,maskId:l,extra:f}=n;return new Promise((d,p)=>{Promise.all([da(r,o),u.iconName?da(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[m,S]=_;d([t,mc({icons:{main:m,mask:S},prefix:o,iconName:r,transform:a,symbol:c,maskId:l,title:s,titleId:i,extra:f,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:s,transform:i,styles:o}=t;const a=ki(o);a.length>0&&(r.style=a);let c;return hc(i)&&(c=dn("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:r}}}},ET={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return xi({type:"layer"},()=>{Mn("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(K.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},ST={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=t;return xi({type:"counter",content:e},()=>(Mn("beforeDOMElementCreation",{content:e,params:t}),tT({content:e.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(K.cssPrefix,"-layers-counter"),...r]}})))}}}},IT={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=yt,title:r=null,classes:s=[],attributes:i={},styles:o={}}=t;return xi({type:"text",content:e},()=>(Mn("beforeDOMElementCreation",{content:e,params:t}),ku({content:e,transform:O(O({},yt),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(K.cssPrefix,"-layers-text"),...s]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(tp){const c=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();o=u.width/c,a=u.height/c}return K.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,ku({content:t.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const TT=new RegExp('"',"ug"),Du=[1105920,1112319],Fu=O(O(O(O({},{FontAwesome:{normal:"fas",400:"fas"}}),qS),fI),sI),ga=Object.keys(Fu).reduce((e,t)=>(e[t.toLowerCase()]=Fu[t],e),{}),CT=Object.keys(ga).reduce((e,t)=>{const n=ga[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function AT(e){const t=e.replace(TT,""),n=NI(t,0),r=n>=Du[0]&&n<=Du[1],s=t.length===2?t[0]===t[1]:!1;return{value:aa(s?t[0]:t),isSecondary:r||s}}function PT(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),s=isNaN(r)?"normal":r;return(ga[n]||{})[s]||CT[n]}function Uu(e,t){const n="".concat(dI).concat(t.replace(":","-"));return new Promise((r,s)=>{if(e.getAttribute(n)!==null)return r();const o=mr(e.children).filter(d=>d.getAttribute(ra)===t)[0],a=un.getComputedStyle(e,t),c=a.getPropertyValue("font-family"),u=c.match(yI),l=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&f!=="none"&&f!==""){const d=a.getPropertyValue("content");let p=PT(c,l);const{value:_,isSecondary:m}=AT(d),S=u[0].startsWith("FontAwesome");let w=gc(p,_),v=w;if(S){const h=HI(_);h.iconName&&h.prefix&&(w=h.iconName,p=h.prefix)}if(w&&!m&&(!o||o.getAttribute(lc)!==p||o.getAttribute(uc)!==v)){e.setAttribute(n,v),o&&e.removeChild(o);const h=gT(),{extra:b}=h;b.attributes[ra]=t,da(w,p).then(E=>{const T=mc(O(O({},h),{},{icons:{main:E,mask:Ip()},prefix:p,iconName:v,extra:b,watchable:!0})),P=pe.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(P,e.firstChild):e.appendChild(P),P.outerHTML=T.map(B=>hs(B)).join(`
`),e.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function kT(e){return Promise.all([Uu(e,"::before"),Uu(e,"::after")])}function RT(e){return e.parentNode!==document.head&&!~pI.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ra)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Hu(e){if(Bt)return new Promise((t,n)=>{const r=mr(e.querySelectorAll("*")).filter(RT).map(kT),s=yc.begin("searchPseudoElements");kp(),Promise.all(r).then(()=>{s(),pa(),t()}).catch(()=>{s(),pa(),n()})})}var OT={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Hu,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=pe}=t;K.searchPseudoElements&&Hu(n)}}};let $u=!1;var xT={mixout(){return{dom:{unwatch(){kp(),$u=!0}}}},hooks(){return{bootstrap(){Nu(la("mutationObserverCallbacks",{}))},noAuto(){fT()},watch(e){const{observeMutationsRoot:t}=e;$u?pa():Nu(la("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const ju=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var NT={mixout(){return{parse:{transform:e=>ju(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=ju(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:s,iconWidth:i}=t;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),l={transform:"".concat(a," ").concat(c," ").concat(u)},f={transform:"translate(".concat(i/2*-1," -256)")},d={outer:o,inner:l,path:f};return{tag:"g",attributes:O({},d.outer),children:[{tag:"g",attributes:O({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:O(O({},n.icon.attributes),d.path)}]}]}}}};const ho={x:0,y:0,width:"100%",height:"100%"};function Bu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function MT(e){return e.tag==="g"?e.children:[e]}var LT={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Oi(n.split(" ").map(s=>s.trim())):Ip();return r.prefix||(r.prefix=fn()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=t;const{width:c,icon:u}=s,{width:l,icon:f}=i,d=AI({transform:a,containerWidth:l,iconWidth:c}),p={tag:"rect",attributes:O(O({},ho),{},{fill:"white"})},_=u.children?{children:u.children.map(Bu)}:{},m={tag:"g",attributes:O({},d.inner),children:[Bu(O({tag:u.tag,attributes:O(O({},u.attributes),d.path)},_))]},S={tag:"g",attributes:O({},d.outer),children:[m]},w="mask-".concat(o||Jr()),v="clip-".concat(o||Jr()),h={tag:"mask",attributes:O(O({},ho),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,S]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:MT(f)},h]};return n.push(b,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(w,")")},ho)}),{children:n,attributes:r}}}},DT={provides(e){let t=!1;un.matchMedia&&(t=un.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:O(O({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=O(O({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:O(O({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:O(O({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:O(O({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:O(O({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:O(O({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},FT={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},UT=[RI,wT,ET,ST,IT,OT,xT,NT,LT,DT,FT];qI(UT,{mixoutsTo:qe});qe.noAuto;qe.config;const HT=qe.library;qe.dom;const ma=qe.parse;qe.findIconDefinition;qe.toHtml;const $T=qe.icon;qe.layer;qe.text;qe.counter;function Wu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Pt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wu(Object(n),!0).forEach(function(r){He(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jT(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function BT(e){var t=jT(e,"string");return typeof t=="symbol"?t:t+""}function ui(e){"@babel/helpers - typeof";return ui=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ui(e)}function He(e,t,n){return t=BT(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function WT(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function VT(e,t){if(e==null)return{};var n=WT(e,t),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var zT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Op={exports:{}};(function(e){(function(t){var n=function(w,v,h){if(!u(v)||f(v)||d(v)||p(v)||c(v))return v;var b,E=0,T=0;if(l(v))for(b=[],T=v.length;E<T;E++)b.push(n(w,v[E],h));else{b={};for(var P in v)Object.prototype.hasOwnProperty.call(v,P)&&(b[w(P,h)]=n(w,v[P],h))}return b},r=function(w,v){v=v||{};var h=v.separator||"_",b=v.split||/(?=[A-Z])/;return w.split(b).join(h)},s=function(w){return _(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(v,h){return h?h.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var v=s(w);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(w,v){return r(w,v).toLowerCase()},a=Object.prototype.toString,c=function(w){return typeof w=="function"},u=function(w){return w===Object(w)},l=function(w){return a.call(w)=="[object Array]"},f=function(w){return a.call(w)=="[object Date]"},d=function(w){return a.call(w)=="[object RegExp]"},p=function(w){return a.call(w)=="[object Boolean]"},_=function(w){return w=w-0,w===w},m=function(w,v){var h=v&&"process"in v?v.process:v;return typeof h!="function"?w:function(b,E){return h(b,w,E)}},S={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,v){return n(m(s,v),w)},decamelizeKeys:function(w,v){return n(m(o,v),w,v)},pascalizeKeys:function(w,v){return n(m(i,v),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(zT)})(Op);var KT=Op.exports,GT=["class","style"];function qT(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),s=KT.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[s]=i,t},{})}function YT(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function xp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return xp(c)}),s=Object.keys(e.attributes||{}).reduce(function(c,u){var l=e.attributes[u];switch(u){case"class":c.class=YT(l);break;case"style":c.style=qT(l);break;default:c.attrs[u]=l}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=VT(n,GT);return Ke(e.tag,Pt(Pt(Pt({},t),{},{class:s.class,style:Pt(Pt({},s.style),o)},s.attrs),a),r)}var Np=!1;try{Np=!0}catch{}function JT(){if(!Np&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function po(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?He({},e,t):{}}function XT(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},He(He(He(He(He(He(He(He(He(He(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),He(He(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Vu(e){if(e&&ui(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ma.icon)return ma.icon(e);if(e===null)return null;if(ui(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var QT=pr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,s=Ae(function(){return Vu(t.icon)}),i=Ae(function(){return po("classes",XT(t))}),o=Ae(function(){return po("transform",typeof t.transform=="string"?ma.transform(t.transform):t.transform)}),a=Ae(function(){return po("mask",Vu(t.mask))}),c=Ae(function(){return $T(s.value,Pt(Pt(Pt(Pt({},i.value),o.value),a.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});An(c,function(l){if(!l)return JT("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Ae(function(){return c.value?xp(c.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ZT={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};HT.add(ZT);const eC=lt(e=>{e.vueApp.component("font-awesome-icon",QT)}),tC=[av,wv,B0,W0,V0,z0,G0,q0,X0,US,eC],Mp=(e="RouteProvider")=>pr({name:e,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const n=t.renderKey,r=t.route,s={};for(const i in t.route)Object.defineProperty(s,i,{get:()=>n===t.renderKey?t.route[i]:r[i],enumerable:!0});return Jn(vi,kt(s)),()=>t.vnode?Ke(t.vnode,{ref:t.vnodeRef}):t.vnode}}),nC=Mp(),zu=new WeakMap,rC=pr({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:t,slots:n,expose:r}){const s=Te(),i=xt(),o=Ge(vi,null);let a;r({pageRef:i});const c=Ge(bb,null);let u;const l=s.deferHydration();if(s.isHydrating){const d=s.hooks.hookOnce("app:error",l);et().beforeEach(d)}e.pageKey&&An(()=>e.pageKey,(d,p)=>{d!==p&&s.callHook("page:loading:start")});let f=!1;{const d=et().beforeResolve(()=>{f=!1});ns(()=>{d()})}return()=>Ke(ah,{name:e.name,route:e.route,...t},{default:d=>{const p=iC(o,d.route,d.Component),_=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!_)return u;l();return}if(u&&c&&!c.isCurrent(d.route))return u;if(p&&o&&(!c||c!=null&&c.isCurrent(o)))return _?u:null;const m=zo(d,e.pageKey),S=oC(o,d.route,d.Component);!s.isHydrating&&a===m&&!S&&jr(()=>{f=!0,s.callHook("page:loading:end")}),a=m;const w=!!(e.transition??d.route.meta.pageTransition??ol),v=w&&sC([e.transition,d.route.meta.pageTransition,ol,{onAfterLeave(){delete s._runningTransition,s.callHook("page:transition:finish",d.Component)}}]),h=e.keepalive??d.route.meta.keepalive??T_;return u=O0(w&&v,P0(h,Ke(od,{suspensible:!0,onPending:()=>{w&&(s._runningTransition=!0),s.callHook("page:start",d.Component)},onResolve:()=>{jr(()=>s.callHook("page:finish",d.Component).then(()=>{if(!f&&!S)return f=!0,s.callHook("page:loading:end")}).finally(l))}},{default:()=>{const b={key:m||void 0,vnode:n.default?aC(n.default,d):d.Component,route:d.route,renderKey:m||void 0,trackRootNodes:w,vnodeRef:i};if(!h)return Ke(nC,b);const E=d.Component.type,T=E;let P=zu.get(T);return P||(P=Mp(E.name||E.__name),zu.set(T,P)),Ke(P,b)}}))).default(),u}})}});function sC(e){const t=e.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?Ga(n.onAfterLeave):void 0}));return Fd(...t)}function iC(e,t,n){if(!e)return!1;const r=t.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:t.matched.slice(0,r).some((s,i)=>{var o,a,c;return((o=s.components)==null?void 0:o.default)!==((c=(a=e.matched[i])==null?void 0:a.components)==null?void 0:c.default)})||n&&zo({route:t,Component:n})!==zo({route:e,Component:n})}function oC(e,t,n){return e?t.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<t.matched.length-1:!1}function aC(e,t){const n=e(t);return n.length===1?Ke(n[0]):Ke(Oe,void 0,n)}const cC=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},lC={};function uC(e,t){const n=rC;return Qe(),gt(n)}const fC=cC(lC,[["render",uC]]),dC={__name:"nuxt-error-page",props:{error:Object},setup(e){const n=e.error;n.stack&&n.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,l=s?zs(()=>rn(()=>import("./CdNr1rAb.js"),__vite__mapDeps([10,8,11,12]),import.meta.url)):zs(()=>rn(()=>import("./Kt3mXQ-y.js"),__vite__mapDeps([13,11,14]),import.meta.url));return(f,d)=>(Qe(),gt(ye(l),qp(hd({statusCode:ye(r),statusMessage:ye(i),description:ye(o),stack:ye(a)})),null,16))}},hC={key:0},Ku={__name:"nuxt-root",setup(e){const t=()=>null,n=Te(),r=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",r);et().beforeEach(u)}const s=!1;Jn(vi,Hd()),n.hooks.callHookWith(u=>u.map(l=>l()),"vue:setup");const i=wi(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;Uf((u,l,f)=>{if(n.hooks.callHook("vue:error",u,l,f).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(jd(u)&&(u.fatal||u.unhandled))return n.runWithContext(()=>wn(u)),!1});const c=!1;return(u,l)=>(Qe(),gt(od,{onResolve:ye(r)},{default:Cf(()=>[ye(o)?(Qe(),km("div",hC)):ye(i)?(Qe(),gt(ye(dC),{key:1,error:ye(i)},null,8,["error"])):ye(c)?(Qe(),gt(ye(t),{key:2,context:ye(c)},null,8,["context"])):ye(s)?(Qe(),gt(Yg(ye(s)),{key:3})):(Qe(),gt(ye(fC),{key:4}))]),_:1},8,["onResolve"]))}};let Gu;{let e;Gu=async function(){var o,a;if(e)return e;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?my(Ku):gy(Ku),s=R_({vueApp:r});async function i(c){var u;await s.callHook("app:error",c),(u=s.payload).error||(u.error=kn(c))}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await N_(s,tC)}catch(c){i(c)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(A_),await s.hooks.callHook("app:mounted",r),await jr()}catch(c){i(c)}return r},e=Gu().catch(t=>{throw console.error("Error while mounting app:",t),t})}export{qa as A,jl as B,ns as C,wC as D,Ke as E,Od as F,wb as G,J0 as H,is as I,xd as J,ss as K,tb as L,Zs as M,_C as N,Ff as O,bf as P,cC as _,dd as a,ve as b,km as c,pd as d,M_ as e,Vd as f,An as g,xa as h,Ge as i,Oa as j,ye as k,yC as l,gC as m,bC as n,Qe as o,gi as p,Te as q,xt as r,Ae as s,Xp as t,vC as u,mC as v,Cf as w,pr as x,et as y,$r as z};

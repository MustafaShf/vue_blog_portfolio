(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function nc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},Qr=[],rn=()=>{},D_=()=>!1,ta=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),rc=t=>t.startsWith("onUpdate:"),Je=Object.assign,sc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},V_=Object.prototype.hasOwnProperty,Re=(t,e)=>V_.call(t,e),oe=Array.isArray,Yr=t=>Ri(t)==="[object Map]",vs=t=>Ri(t)==="[object Set]",rh=t=>Ri(t)==="[object Date]",he=t=>typeof t=="function",je=t=>typeof t=="string",Gt=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",yf=t=>(Oe(t)||he(t))&&he(t.then)&&he(t.catch),vf=Object.prototype.toString,Ri=t=>vf.call(t),O_=t=>Ri(t).slice(8,-1),Ef=t=>Ri(t)==="[object Object]",ic=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ys=nc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},N_=/-(\w)/g,Ut=na(t=>t.replace(N_,(e,n)=>n?n.toUpperCase():"")),M_=/\B([A-Z])/g,Sr=na(t=>t.replace(M_,"-$1").toLowerCase()),ra=na(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qa=na(t=>t?`on${ra(t)}`:""),Qn=(t,e)=>!Object.is(t,e),fo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Tf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Co=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let sh;const sa=()=>sh||(sh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Si(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=je(r)?B_(r):Si(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(je(t)||Oe(t))return t}const L_=/;(?![^(]*\))/g,F_=/:([^]+)/,U_=/\/\*[^]*?\*\//g;function B_(t){const e={};return t.replace(U_,"").split(L_).forEach(n=>{if(n){const r=n.split(F_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Pi(t){let e="";if(je(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=Pi(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",j_=nc($_);function wf(t){return!!t||t===""}function q_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=wr(t[r],e[r]);return n}function wr(t,e){if(t===e)return!0;let n=rh(t),r=rh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Gt(t),r=Gt(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?q_(t,e):!1;if(n=Oe(t),r=Oe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!wr(t[o],e[o]))return!1}}return String(t)===String(e)}function oc(t,e){return t.findIndex(n=>wr(n,e))}const If=t=>!!(t&&t.__v_isRef===!0),zt=t=>je(t)?t:t==null?"":oe(t)||Oe(t)&&(t.toString===vf||!he(t.toString))?If(t)?zt(t.value):JSON.stringify(t,bf,2):String(t),bf=(t,e)=>If(e)?bf(t,e.value):Yr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ya(r,i)+" =>"]=s,n),{})}:vs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ya(n))}:Gt(e)?Ya(e):Oe(e)&&!oe(e)&&!Ef(e)?String(e):e,Ya=(t,e="")=>{var n;return Gt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class H_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function z_(){return xt}let Ve;const Xa=new WeakSet;class Af{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xt&&xt.active&&xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xa.has(this)&&(Xa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ih(this),Pf(this);const e=Ve,n=Wt;Ve=this,Wt=!0;try{return this.fn()}finally{Cf(this),Ve=e,Wt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cc(e);this.deps=this.depsTail=void 0,ih(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){El(this)&&this.run()}get dirty(){return El(this)}}let Rf=0,Xs,Js;function Sf(t,e=!1){if(t.flags|=8,e){t.next=Js,Js=t;return}t.next=Xs,Xs=t}function ac(){Rf++}function lc(){if(--Rf>0)return;if(Js){let e=Js;for(Js=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Xs;){let e=Xs;for(Xs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Pf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cf(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),cc(r),W_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function El(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(xf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function xf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ci))return;t.globalVersion=ci;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!El(t)){t.flags&=-3;return}const n=Ve,r=Wt;Ve=t,Wt=!0;try{Pf(t);const s=t.fn(t._value);(e.version===0||Qn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,Wt=r,Cf(t),t.flags&=-3}}function cc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)cc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function W_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Wt=!0;const kf=[];function lr(){kf.push(Wt),Wt=!1}function cr(){const t=kf.pop();Wt=t===void 0?!0:t}function ih(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let ci=0;class K_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class uc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ve||!Wt||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new K_(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,Df(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,ci++,this.notify(e)}notify(e){ac();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{lc()}}}function Df(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Df(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Tl=new WeakMap,Er=Symbol(""),wl=Symbol(""),ui=Symbol("");function dt(t,e,n){if(Wt&&Ve){let r=Tl.get(t);r||Tl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new uc),s.map=r,s.key=n),s.track()}}function yn(t,e,n,r,s,i){const o=Tl.get(t);if(!o){ci++;return}const l=c=>{c&&c.trigger()};if(ac(),e==="clear")o.forEach(l);else{const c=oe(t),h=c&&ic(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===ui||!Gt(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(ui)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Er)),Yr(t)&&l(o.get(wl)));break;case"delete":c||(l(o.get(Er)),Yr(t)&&l(o.get(wl)));break;case"set":Yr(t)&&l(o.get(Er));break}}lc()}function Ur(t){const e=Ae(t);return e===t?e:(dt(e,"iterate",ui),Mt(t)?e:e.map(ft))}function ia(t){return dt(t=Ae(t),"iterate",ui),t}const G_={__proto__:null,[Symbol.iterator](){return Ja(this,Symbol.iterator,ft)},concat(...t){return Ur(this).concat(...t.map(e=>oe(e)?Ur(e):e))},entries(){return Ja(this,"entries",t=>(t[1]=ft(t[1]),t))},every(t,e){return gn(this,"every",t,e,void 0,arguments)},filter(t,e){return gn(this,"filter",t,e,n=>n.map(ft),arguments)},find(t,e){return gn(this,"find",t,e,ft,arguments)},findIndex(t,e){return gn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return gn(this,"findLast",t,e,ft,arguments)},findLastIndex(t,e){return gn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return gn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Za(this,"includes",t)},indexOf(...t){return Za(this,"indexOf",t)},join(t){return Ur(this).join(t)},lastIndexOf(...t){return Za(this,"lastIndexOf",t)},map(t,e){return gn(this,"map",t,e,void 0,arguments)},pop(){return Bs(this,"pop")},push(...t){return Bs(this,"push",t)},reduce(t,...e){return oh(this,"reduce",t,e)},reduceRight(t,...e){return oh(this,"reduceRight",t,e)},shift(){return Bs(this,"shift")},some(t,e){return gn(this,"some",t,e,void 0,arguments)},splice(...t){return Bs(this,"splice",t)},toReversed(){return Ur(this).toReversed()},toSorted(t){return Ur(this).toSorted(t)},toSpliced(...t){return Ur(this).toSpliced(...t)},unshift(...t){return Bs(this,"unshift",t)},values(){return Ja(this,"values",ft)}};function Ja(t,e,n){const r=ia(t),s=r[e]();return r!==t&&!Mt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Q_=Array.prototype;function gn(t,e,n,r,s,i){const o=ia(t),l=o!==t&&!Mt(t),c=o[e];if(c!==Q_[e]){const p=c.apply(t,i);return l?ft(p):p}let h=n;o!==t&&(l?h=function(p,m){return n.call(this,ft(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function oh(t,e,n,r){const s=ia(t);let i=n;return s!==t&&(Mt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,ft(l),c,t)}),s[e](i,...r)}function Za(t,e,n){const r=Ae(t);dt(r,"iterate",ui);const s=r[e](...n);return(s===-1||s===!1)&&fc(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Bs(t,e,n=[]){lr(),ac();const r=Ae(t)[e].apply(t,n);return lc(),cr(),r}const Y_=nc("__proto__,__v_isRef,__isVue"),Vf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gt));function X_(t){Gt(t)||(t=String(t));const e=Ae(this);return dt(e,"has",t),e.hasOwnProperty(t)}class Of{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ay:Ff:i?Lf:Mf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){let c;if(o&&(c=G_[n]))return c;if(n==="hasOwnProperty")return X_}const l=Reflect.get(e,n,mt(e)?e:r);return(Gt(n)?Vf.has(n):Y_(n))||(s||dt(e,"get",n),i)?l:mt(l)?o&&ic(n)?l:l.value:Oe(l)?s?Bf(l):oa(l):l}}class Nf extends Of{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Ir(i);if(!Mt(r)&&!Ir(r)&&(i=Ae(i),r=Ae(r)),!oe(e)&&mt(i)&&!mt(r))return c?!1:(i.value=r,!0)}const o=oe(e)&&ic(n)?Number(n)<e.length:Re(e,n),l=Reflect.set(e,n,r,mt(e)?e:s);return e===Ae(s)&&(o?Qn(r,i)&&yn(e,"set",n,r):yn(e,"add",n,r)),l}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Gt(n)||!Vf.has(n))&&dt(e,"has",n),r}ownKeys(e){return dt(e,"iterate",oe(e)?"length":Er),Reflect.ownKeys(e)}}class J_ extends Of{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Z_=new Nf,ey=new J_,ty=new Nf(!0);const Il=t=>t,no=t=>Reflect.getPrototypeOf(t);function ny(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=Yr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?Il:e?bl:ft;return!e&&dt(i,"iterate",c?wl:Er),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function ro(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ry(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);t||(Qn(s,l)&&dt(o,"get",s),dt(o,"get",l));const{has:c}=no(o),h=e?Il:t?bl:ft;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&dt(Ae(s),"iterate",Er),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);return t||(Qn(s,l)&&dt(o,"has",s),dt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ae(l),h=e?Il:t?bl:ft;return!t&&dt(c,"iterate",Er),l.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return Je(n,t?{add:ro("add"),set:ro("set"),delete:ro("delete"),clear:ro("clear")}:{add(s){!e&&!Mt(s)&&!Ir(s)&&(s=Ae(s));const i=Ae(this);return no(i).has.call(i,s)||(i.add(s),yn(i,"add",s,s)),this},set(s,i){!e&&!Mt(i)&&!Ir(i)&&(i=Ae(i));const o=Ae(this),{has:l,get:c}=no(o);let h=l.call(o,s);h||(s=Ae(s),h=l.call(o,s));const d=c.call(o,s);return o.set(s,i),h?Qn(i,d)&&yn(o,"set",s,i):yn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:l}=no(i);let c=o.call(i,s);c||(s=Ae(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&yn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&yn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ny(s,t,e)}),n}function hc(t,e){const n=ry(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const sy={get:hc(!1,!1)},iy={get:hc(!1,!0)},oy={get:hc(!0,!1)};const Mf=new WeakMap,Lf=new WeakMap,Ff=new WeakMap,ay=new WeakMap;function ly(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cy(t){return t.__v_skip||!Object.isExtensible(t)?0:ly(O_(t))}function oa(t){return Ir(t)?t:dc(t,!1,Z_,sy,Mf)}function Uf(t){return dc(t,!1,ty,iy,Lf)}function Bf(t){return dc(t,!0,ey,oy,Ff)}function dc(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=cy(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Xr(t){return Ir(t)?Xr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ir(t){return!!(t&&t.__v_isReadonly)}function Mt(t){return!!(t&&t.__v_isShallow)}function fc(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function uy(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Tf(t,"__v_skip",!0),t}const ft=t=>Oe(t)?oa(t):t,bl=t=>Oe(t)?Bf(t):t;function mt(t){return t?t.__v_isRef===!0:!1}function An(t){return $f(t,!1)}function hy(t){return $f(t,!0)}function $f(t,e){return mt(t)?t:new dy(t,e)}class dy{constructor(e,n){this.dep=new uc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:ft(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Mt(e)||Ir(e);e=r?e:Ae(e),Qn(e,n)&&(this._rawValue=e,this._value=r?e:ft(e),this.dep.trigger())}}function Rt(t){return mt(t)?t.value:t}const fy={get:(t,e,n)=>e==="__v_raw"?t:Rt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return mt(s)&&!mt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function jf(t){return Xr(t)?t:new Proxy(t,fy)}class py{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new uc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ci-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Sf(this,!0),!0}get value(){const e=this.dep.track();return xf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gy(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new py(r,s,n)}const so={},xo=new WeakMap;let _r;function my(t,e=!1,n=_r){if(n){let r=xo.get(n);r||xo.set(n,r=[]),r.push(t)}}function _y(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=W=>s?W:Mt(W)||s===!1||s===0?vn(W,1):vn(W);let d,p,m,v,x=!1,k=!1;if(mt(t)?(p=()=>t.value,x=Mt(t)):Xr(t)?(p=()=>h(t),x=!0):oe(t)?(k=!0,x=t.some(W=>Xr(W)||Mt(W)),p=()=>t.map(W=>{if(mt(W))return W.value;if(Xr(W))return h(W);if(he(W))return c?c(W,2):W()})):he(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){lr();try{m()}finally{cr()}}const W=_r;_r=d;try{return c?c(t,3,[v]):t(v)}finally{_r=W}}:p=rn,e&&s){const W=p,fe=s===!0?1/0:s;p=()=>vn(W(),fe)}const O=z_(),j=()=>{d.stop(),O&&O.active&&sc(O.effects,d)};if(i&&e){const W=e;e=(...fe)=>{W(...fe),j()}}let B=k?new Array(t.length).fill(so):so;const q=W=>{if(!(!(d.flags&1)||!d.dirty&&!W))if(e){const fe=d.run();if(s||x||(k?fe.some((pe,I)=>Qn(pe,B[I])):Qn(fe,B))){m&&m();const pe=_r;_r=d;try{const I=[fe,B===so?void 0:k&&B[0]===so?[]:B,v];c?c(e,3,I):e(...I),B=fe}finally{_r=pe}}}else d.run()};return l&&l(q),d=new Af(p),d.scheduler=o?()=>o(q,!1):q,v=W=>my(W,!1,d),m=d.onStop=()=>{const W=xo.get(d);if(W){if(c)c(W,4);else for(const fe of W)fe();xo.delete(d)}},e?r?q(!0):B=d.run():o?o(q.bind(null,!0),!0):d.run(),j.pause=d.pause.bind(d),j.resume=d.resume.bind(d),j.stop=j,j}function vn(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,mt(t))vn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)vn(t[r],e,n);else if(vs(t)||Yr(t))t.forEach(r=>{vn(r,e,n)});else if(Ef(t)){for(const r in t)vn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&vn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ci(t,e,n,r){try{return r?t(...r):t()}catch(s){aa(s,e,n)}}function un(t,e,n,r){if(he(t)){const s=Ci(t,e,n,r);return s&&yf(s)&&s.catch(i=>{aa(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(un(t[i],e,n,r));return s}}function aa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||De;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){lr(),Ci(i,null,10,[t,c,h]),cr();return}}yy(t,n,s,r,o)}function yy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const wt=[];let tn=-1;const Jr=[];let $n=null,$r=0;const qf=Promise.resolve();let ko=null;function pc(t){const e=ko||qf;return t?e.then(this?t.bind(this):t):e}function vy(t){let e=tn+1,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=hi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function gc(t){if(!(t.flags&1)){const e=hi(t),n=wt[wt.length-1];!n||!(t.flags&2)&&e>=hi(n)?wt.push(t):wt.splice(vy(e),0,t),t.flags|=1,Hf()}}function Hf(){ko||(ko=qf.then(Wf))}function Ey(t){oe(t)?Jr.push(...t):$n&&t.id===-1?$n.splice($r+1,0,t):t.flags&1||(Jr.push(t),t.flags|=1),Hf()}function ah(t,e,n=tn+1){for(;n<wt.length;n++){const r=wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function zf(t){if(Jr.length){const e=[...new Set(Jr)].sort((n,r)=>hi(n)-hi(r));if(Jr.length=0,$n){$n.push(...e);return}for($n=e,$r=0;$r<$n.length;$r++){const n=$n[$r];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}$n=null,$r=0}}const hi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wf(t){try{for(tn=0;tn<wt.length;tn++){const e=wt[tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ci(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;tn<wt.length;tn++){const e=wt[tn];e&&(e.flags&=-2)}tn=-1,wt.length=0,zf(),ko=null,(wt.length||Jr.length)&&Wf()}}let st=null,Kf=null;function Do(t){const e=st;return st=t,Kf=t&&t.type.__scopeId||null,e}function ze(t,e=st,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&mh(-1);const i=Do(e);let o;try{o=t(...s)}finally{Do(i),r._d&&mh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function po(t,e){if(st===null)return t;const n=da(st),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=De]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&vn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function gr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(lr(),un(c,n,8,[t.el,l,t,e]),cr())}}const Ty=Symbol("_vte"),wy=t=>t.__isTeleport;function mc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,mc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function _c(t,e){return he(t)?Je({name:t.name},e,{setup:t}):t}function Gf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Vo(t,e,n,r,s=!1){if(oe(t)){t.forEach((x,k)=>Vo(x,e&&(oe(e)?e[k]:e),n,r,s));return}if(Zr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Vo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?da(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===De?l.refs={}:l.refs,p=l.setupState,m=Ae(p),v=p===De?()=>!1:x=>Re(m,x);if(h!=null&&h!==c&&(je(h)?(d[h]=null,v(h)&&(p[h]=null)):mt(h)&&(h.value=null)),he(c))Ci(c,l,12,[o,d]);else{const x=je(c),k=mt(c);if(x||k){const O=()=>{if(t.f){const j=x?v(c)?p[c]:d[c]:c.value;s?oe(j)&&sc(j,i):oe(j)?j.includes(i)||j.push(i):x?(d[c]=[i],v(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else x?(d[c]=o,v(c)&&(p[c]=o)):k&&(c.value=o,t.k&&(d[t.k]=o))};o?(O.id=-1,Ct(O,n)):O()}}}sa().requestIdleCallback;sa().cancelIdleCallback;const Zr=t=>!!t.type.__asyncLoader,Qf=t=>t.type.__isKeepAlive;function Iy(t,e){Yf(t,"a",e)}function by(t,e){Yf(t,"da",e)}function Yf(t,e,n=gt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(la(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Qf(s.parent.vnode)&&Ay(r,e,n,s),s=s.parent}}function Ay(t,e,n,r){const s=la(e,t,r,!0);Xf(()=>{sc(r[e],s)},n)}function la(t,e,n=gt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{lr();const l=ki(n),c=un(e,n,t,o);return l(),cr(),c});return r?s.unshift(i):s.push(i),i}}const Dn=t=>(e,n=gt)=>{(!pi||t==="sp")&&la(t,(...r)=>e(...r),n)},Ry=Dn("bm"),yc=Dn("m"),Sy=Dn("bu"),Py=Dn("u"),Cy=Dn("bum"),Xf=Dn("um"),xy=Dn("sp"),ky=Dn("rtg"),Dy=Dn("rtc");function Vy(t,e=gt){la("ec",t,e)}const Jf="components";function sn(t,e){return ep(Jf,t,!0,e)||t}const Zf=Symbol.for("v-ndc");function xi(t){return je(t)?ep(Jf,t,!1)||t:t||Zf}function ep(t,e,n=!0,r=!1){const s=st||gt;if(s){const i=s.type;{const l=Ev(i,!1);if(l&&(l===e||l===Ut(e)||l===ra(Ut(e))))return i}const o=lh(s[t]||i[t],e)||lh(s.appContext[t],e);return!o&&r?i:o}}function lh(t,e){return t&&(t[e]||t[Ut(e)]||t[ra(Ut(e))])}function Oy(t,e,n,r){let s;const i=n,o=oe(t);if(o||je(t)){const l=o&&Xr(t);let c=!1;l&&(c=!Mt(t),t=ia(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?ft(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function ca(t,e,n={},r,s){if(st.ce||st.parent&&Zr(st.parent)&&st.parent.ce)return Ce(),Qt(It,null,[de("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Ce();const o=i&&tp(i(n)),l=n.key||o&&o.key,c=Qt(It,{key:(l&&!Gt(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function tp(t){return t.some(e=>fi(e)?!(e.type===tr||e.type===It&&!tp(e.children)):!0)?t:null}const Al=t=>t?wp(t)?da(t):Al(t.parent):null,Zs=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Al(t.parent),$root:t=>Al(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>vc(t),$forceUpdate:t=>t.f||(t.f=()=>{gc(t.update)}),$nextTick:t=>t.n||(t.n=pc.bind(t.proxy)),$watch:t=>tv.bind(t)}),el=(t,e)=>t!==De&&!t.__isScriptSetup&&Re(t,e),Ny={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(el(r,e))return o[e]=1,r[e];if(s!==De&&Re(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Re(h,e))return o[e]=3,i[e];if(n!==De&&Re(n,e))return o[e]=4,n[e];Rl&&(o[e]=0)}}const d=Zs[e];let p,m;if(d)return e==="$attrs"&&dt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==De&&Re(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Re(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return el(s,e)?(s[e]=n,!0):r!==De&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==De&&Re(t,o)||el(e,o)||(l=i[0])&&Re(l,o)||Re(r,o)||Re(Zs,o)||Re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ch(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rl=!0;function My(t){const e=vc(t),n=t.proxy,r=t.ctx;Rl=!1,e.beforeCreate&&uh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:v,updated:x,activated:k,deactivated:O,beforeDestroy:j,beforeUnmount:B,destroyed:q,unmounted:W,render:fe,renderTracked:pe,renderTriggered:I,errorCaptured:y,serverPrefetch:w,expose:b,inheritAttrs:A,components:R,directives:T,filters:yt}=e;if(h&&Ly(h,r,null),o)for(const ve in o){const ge=o[ve];he(ge)&&(r[ve]=ge.bind(n))}if(s){const ve=s.call(n,n);Oe(ve)&&(t.data=oa(ve))}if(Rl=!0,i)for(const ve in i){const ge=i[ve],St=he(ge)?ge.bind(n,n):he(ge.get)?ge.get.bind(n,n):rn,$t=!he(ge)&&he(ge.set)?ge.set.bind(n):rn,Vt=qt({get:St,set:$t});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:Le=>Vt.value=Le})}if(l)for(const ve in l)np(l[ve],r,n,ve);if(c){const ve=he(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(ge=>{go(ge,ve[ge])})}d&&uh(d,t,"c");function qe(ve,ge){oe(ge)?ge.forEach(St=>ve(St.bind(n))):ge&&ve(ge.bind(n))}if(qe(Ry,p),qe(yc,m),qe(Sy,v),qe(Py,x),qe(Iy,k),qe(by,O),qe(Vy,y),qe(Dy,pe),qe(ky,I),qe(Cy,B),qe(Xf,W),qe(xy,w),oe(b))if(b.length){const ve=t.exposed||(t.exposed={});b.forEach(ge=>{Object.defineProperty(ve,ge,{get:()=>n[ge],set:St=>n[ge]=St})})}else t.exposed||(t.exposed={});fe&&t.render===rn&&(t.render=fe),A!=null&&(t.inheritAttrs=A),R&&(t.components=R),T&&(t.directives=T),w&&Gf(t)}function Ly(t,e,n=rn){oe(t)&&(t=Sl(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=Kt(s.from||r,s.default,!0):i=Kt(s.from||r):i=Kt(s),mt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function uh(t,e,n){un(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function np(t,e,n,r){let s=r.includes(".")?mp(n,r):()=>n[r];if(je(t)){const i=e[t];he(i)&&mo(s,i)}else if(he(t))mo(s,t.bind(n));else if(Oe(t))if(oe(t))t.forEach(i=>np(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&mo(s,i,t)}}function vc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Oo(c,h,o,!0)),Oo(c,e,o)),Oe(e)&&i.set(e,c),c}function Oo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Oo(t,i,n,!0),s&&s.forEach(o=>Oo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Fy[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Fy={data:hh,props:dh,emits:dh,methods:qs,computed:qs,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:qs,directives:qs,watch:By,provide:hh,inject:Uy};function hh(t,e){return e?t?function(){return Je(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function Uy(t,e){return qs(Sl(t),Sl(e))}function Sl(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function qs(t,e){return t?Je(Object.create(null),t,e):e}function dh(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:Je(Object.create(null),ch(t),ch(e??{})):e}function By(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function rp(){return{app:null,config:{isNativeTag:D_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $y=0;function jy(t,e){return function(r,s=null){he(r)||(r=Je({},r)),s!=null&&!Oe(s)&&(s=null);const i=rp(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:$y++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:wv,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&he(d.install)?(o.add(d),d.install(h,...p)):he(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const v=h._ceVNode||de(r,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(v,d):t(v,d,m),c=!0,h._container=d,d.__vue_app__=h,da(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(un(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=es;es=h;try{return d()}finally{es=p}}};return h}}let es=null;function go(t,e){if(gt){let n=gt.provides;const r=gt.parent&&gt.parent.provides;r===n&&(n=gt.provides=Object.create(r)),n[t]=e}}function Kt(t,e,n=!1){const r=gt||st;if(r||es){const s=es?es._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}const sp={},ip=()=>Object.create(sp),op=t=>Object.getPrototypeOf(t)===sp;function qy(t,e,n,r=!1){const s={},i=ip();t.propsDefaults=Object.create(null),ap(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Uf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Hy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ae(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(ua(t.emitsOptions,m))continue;const v=e[m];if(c)if(Re(i,m))v!==i[m]&&(i[m]=v,h=!0);else{const x=Ut(m);s[x]=Pl(c,l,x,v,t,!1)}else v!==i[m]&&(i[m]=v,h=!0)}}}else{ap(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Re(e,p)&&((d=Sr(p))===p||!Re(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Pl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&yn(t.attrs,"set","")}function ap(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ys(c))continue;const h=e[c];let d;s&&Re(s,d=Ut(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:ua(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Ae(n),h=l||De;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Pl(s,c,p,h[p],t,!Re(h,p))}}return o}function Pl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Re(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&he(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=ki(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Sr(n))&&(r=!0))}return r}const zy=new WeakMap;function lp(t,e,n=!1){const r=n?zy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!he(t)){const d=p=>{c=!0;const[m,v]=lp(p,e,!0);Je(o,m),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Oe(t)&&r.set(t,Qr),Qr;if(oe(i))for(let d=0;d<i.length;d++){const p=Ut(i[d]);fh(p)&&(o[p]=De)}else if(i)for(const d in i){const p=Ut(d);if(fh(p)){const m=i[d],v=o[p]=oe(m)||he(m)?{type:m}:Je({},m),x=v.type;let k=!1,O=!0;if(oe(x))for(let j=0;j<x.length;++j){const B=x[j],q=he(B)&&B.name;if(q==="Boolean"){k=!0;break}else q==="String"&&(O=!1)}else k=he(x)&&x.name==="Boolean";v[0]=k,v[1]=O,(k||Re(v,"default"))&&l.push(p)}}const h=[o,l];return Oe(t)&&r.set(t,h),h}function fh(t){return t[0]!=="$"&&!Ys(t)}const cp=t=>t[0]==="_"||t==="$stable",Ec=t=>oe(t)?t.map(nn):[nn(t)],Wy=(t,e,n)=>{if(e._n)return e;const r=ze((...s)=>Ec(e(...s)),n);return r._c=!1,r},up=(t,e,n)=>{const r=t._ctx;for(const s in t){if(cp(s))continue;const i=t[s];if(he(i))e[s]=Wy(s,i,r);else if(i!=null){const o=Ec(i);e[s]=()=>o}}},hp=(t,e)=>{const n=Ec(e);t.slots.default=()=>n},dp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Ky=(t,e,n)=>{const r=t.slots=ip();if(t.vnode.shapeFlag&32){const s=e._;s?(dp(r,e,n),n&&Tf(r,"_",s,!0)):up(e,r)}else e&&hp(t,e)},Gy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=De;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:dp(s,e,n):(i=!e.$stable,up(e,s)),o=e}else e&&(hp(t,e),o={default:1});if(i)for(const l in s)!cp(l)&&o[l]==null&&delete s[l]},Ct=lv;function Qy(t){return Yy(t)}function Yy(t,e){const n=sa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:v=rn,insertStaticContent:x}=t,k=(_,E,P,M=null,D=null,F=null,K=void 0,H=null,$=!!E.dynamicChildren)=>{if(_===E)return;_&&!$s(_,E)&&(M=V(_),Le(_,D,F,!0),_=null),E.patchFlag===-2&&($=!1,E.dynamicChildren=null);const{type:U,ref:re,shapeFlag:Q}=E;switch(U){case ha:O(_,E,P,M);break;case tr:j(_,E,P,M);break;case rl:_==null&&B(E,P,M,K);break;case It:R(_,E,P,M,D,F,K,H,$);break;default:Q&1?fe(_,E,P,M,D,F,K,H,$):Q&6?T(_,E,P,M,D,F,K,H,$):(Q&64||Q&128)&&U.process(_,E,P,M,D,F,K,H,$,Z)}re!=null&&D&&Vo(re,_&&_.ref,F,E||_,!E)},O=(_,E,P,M)=>{if(_==null)r(E.el=l(E.children),P,M);else{const D=E.el=_.el;E.children!==_.children&&h(D,E.children)}},j=(_,E,P,M)=>{_==null?r(E.el=c(E.children||""),P,M):E.el=_.el},B=(_,E,P,M)=>{[_.el,_.anchor]=x(_.children,E,P,M,_.el,_.anchor)},q=({el:_,anchor:E},P,M)=>{let D;for(;_&&_!==E;)D=m(_),r(_,P,M),_=D;r(E,P,M)},W=({el:_,anchor:E})=>{let P;for(;_&&_!==E;)P=m(_),s(_),_=P;s(E)},fe=(_,E,P,M,D,F,K,H,$)=>{E.type==="svg"?K="svg":E.type==="math"&&(K="mathml"),_==null?pe(E,P,M,D,F,K,H,$):w(_,E,D,F,K,H,$)},pe=(_,E,P,M,D,F,K,H)=>{let $,U;const{props:re,shapeFlag:Q,transition:te,dirs:ee}=_;if($=_.el=o(_.type,F,re&&re.is,re),Q&8?d($,_.children):Q&16&&y(_.children,$,null,M,D,tl(_,F),K,H),ee&&gr(_,null,M,"created"),I($,_,_.scopeId,K,M),re){for(const be in re)be!=="value"&&!Ys(be)&&i($,be,null,re[be],F,M);"value"in re&&i($,"value",null,re.value,F),(U=re.onVnodeBeforeMount)&&en(U,M,_)}ee&&gr(_,null,M,"beforeMount");const ie=Xy(D,te);ie&&te.beforeEnter($),r($,E,P),((U=re&&re.onVnodeMounted)||ie||ee)&&Ct(()=>{U&&en(U,M,_),ie&&te.enter($),ee&&gr(_,null,M,"mounted")},D)},I=(_,E,P,M,D)=>{if(P&&v(_,P),M)for(let F=0;F<M.length;F++)v(_,M[F]);if(D){let F=D.subTree;if(E===F||yp(F.type)&&(F.ssContent===E||F.ssFallback===E)){const K=D.vnode;I(_,K,K.scopeId,K.slotScopeIds,D.parent)}}},y=(_,E,P,M,D,F,K,H,$=0)=>{for(let U=$;U<_.length;U++){const re=_[U]=H?jn(_[U]):nn(_[U]);k(null,re,E,P,M,D,F,K,H)}},w=(_,E,P,M,D,F,K)=>{const H=E.el=_.el;let{patchFlag:$,dynamicChildren:U,dirs:re}=E;$|=_.patchFlag&16;const Q=_.props||De,te=E.props||De;let ee;if(P&&mr(P,!1),(ee=te.onVnodeBeforeUpdate)&&en(ee,P,E,_),re&&gr(E,_,P,"beforeUpdate"),P&&mr(P,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&d(H,""),U?b(_.dynamicChildren,U,H,P,M,tl(E,D),F):K||ge(_,E,H,null,P,M,tl(E,D),F,!1),$>0){if($&16)A(H,Q,te,P,D);else if($&2&&Q.class!==te.class&&i(H,"class",null,te.class,D),$&4&&i(H,"style",Q.style,te.style,D),$&8){const ie=E.dynamicProps;for(let be=0;be<ie.length;be++){const we=ie[be],ot=Q[we],Qe=te[we];(Qe!==ot||we==="value")&&i(H,we,ot,Qe,D,P)}}$&1&&_.children!==E.children&&d(H,E.children)}else!K&&U==null&&A(H,Q,te,P,D);((ee=te.onVnodeUpdated)||re)&&Ct(()=>{ee&&en(ee,P,E,_),re&&gr(E,_,P,"updated")},M)},b=(_,E,P,M,D,F,K)=>{for(let H=0;H<E.length;H++){const $=_[H],U=E[H],re=$.el&&($.type===It||!$s($,U)||$.shapeFlag&70)?p($.el):P;k($,U,re,null,M,D,F,K,!0)}},A=(_,E,P,M,D)=>{if(E!==P){if(E!==De)for(const F in E)!Ys(F)&&!(F in P)&&i(_,F,E[F],null,D,M);for(const F in P){if(Ys(F))continue;const K=P[F],H=E[F];K!==H&&F!=="value"&&i(_,F,H,K,D,M)}"value"in P&&i(_,"value",E.value,P.value,D)}},R=(_,E,P,M,D,F,K,H,$)=>{const U=E.el=_?_.el:l(""),re=E.anchor=_?_.anchor:l("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:ee}=E;ee&&(H=H?H.concat(ee):ee),_==null?(r(U,P,M),r(re,P,M),y(E.children||[],P,re,D,F,K,H,$)):Q>0&&Q&64&&te&&_.dynamicChildren?(b(_.dynamicChildren,te,P,D,F,K,H),(E.key!=null||D&&E===D.subTree)&&fp(_,E,!0)):ge(_,E,P,re,D,F,K,H,$)},T=(_,E,P,M,D,F,K,H,$)=>{E.slotScopeIds=H,_==null?E.shapeFlag&512?D.ctx.activate(E,P,M,K,$):yt(E,P,M,D,F,K,$):Dt(_,E,$)},yt=(_,E,P,M,D,F,K)=>{const H=_.component=gv(_,M,D);if(Qf(_)&&(H.ctx.renderer=Z),mv(H,!1,K),H.asyncDep){if(D&&D.registerDep(H,qe,K),!_.el){const $=H.subTree=de(tr);j(null,$,E,P)}}else qe(H,_,E,P,D,F,K)},Dt=(_,E,P)=>{const M=E.component=_.component;if(ov(_,E,P))if(M.asyncDep&&!M.asyncResolved){ve(M,E,P);return}else M.next=E,M.update();else E.el=_.el,M.vnode=E},qe=(_,E,P,M,D,F,K)=>{const H=()=>{if(_.isMounted){let{next:Q,bu:te,u:ee,parent:ie,vnode:be}=_;{const at=pp(_);if(at){Q&&(Q.el=be.el,ve(_,Q,K)),at.asyncDep.then(()=>{_.isUnmounted||H()});return}}let we=Q,ot;mr(_,!1),Q?(Q.el=be.el,ve(_,Q,K)):Q=be,te&&fo(te),(ot=Q.props&&Q.props.onVnodeBeforeUpdate)&&en(ot,ie,Q,be),mr(_,!0);const Qe=nl(_),Ze=_.subTree;_.subTree=Qe,k(Ze,Qe,p(Ze.el),V(Ze),_,D,F),Q.el=Qe.el,we===null&&av(_,Qe.el),ee&&Ct(ee,D),(ot=Q.props&&Q.props.onVnodeUpdated)&&Ct(()=>en(ot,ie,Q,be),D)}else{let Q;const{el:te,props:ee}=E,{bm:ie,m:be,parent:we,root:ot,type:Qe}=_,Ze=Zr(E);if(mr(_,!1),ie&&fo(ie),!Ze&&(Q=ee&&ee.onVnodeBeforeMount)&&en(Q,we,E),mr(_,!0),te&&xe){const at=()=>{_.subTree=nl(_),xe(te,_.subTree,_,D,null)};Ze&&Qe.__asyncHydrate?Qe.__asyncHydrate(te,_,at):at()}else{ot.ce&&ot.ce._injectChildStyle(Qe);const at=_.subTree=nl(_);k(null,at,P,M,_,D,F),E.el=at.el}if(be&&Ct(be,D),!Ze&&(Q=ee&&ee.onVnodeMounted)){const at=E;Ct(()=>en(Q,we,at),D)}(E.shapeFlag&256||we&&Zr(we.vnode)&&we.vnode.shapeFlag&256)&&_.a&&Ct(_.a,D),_.isMounted=!0,E=P=M=null}};_.scope.on();const $=_.effect=new Af(H);_.scope.off();const U=_.update=$.run.bind($),re=_.job=$.runIfDirty.bind($);re.i=_,re.id=_.uid,$.scheduler=()=>gc(re),mr(_,!0),U()},ve=(_,E,P)=>{E.component=_;const M=_.vnode.props;_.vnode=E,_.next=null,Hy(_,E.props,M,P),Gy(_,E.children,P),lr(),ah(_),cr()},ge=(_,E,P,M,D,F,K,H,$=!1)=>{const U=_&&_.children,re=_?_.shapeFlag:0,Q=E.children,{patchFlag:te,shapeFlag:ee}=E;if(te>0){if(te&128){$t(U,Q,P,M,D,F,K,H,$);return}else if(te&256){St(U,Q,P,M,D,F,K,H,$);return}}ee&8?(re&16&&bt(U,D,F),Q!==U&&d(P,Q)):re&16?ee&16?$t(U,Q,P,M,D,F,K,H,$):bt(U,D,F,!0):(re&8&&d(P,""),ee&16&&y(Q,P,M,D,F,K,H,$))},St=(_,E,P,M,D,F,K,H,$)=>{_=_||Qr,E=E||Qr;const U=_.length,re=E.length,Q=Math.min(U,re);let te;for(te=0;te<Q;te++){const ee=E[te]=$?jn(E[te]):nn(E[te]);k(_[te],ee,P,null,D,F,K,H,$)}U>re?bt(_,D,F,!0,!1,Q):y(E,P,M,D,F,K,H,$,Q)},$t=(_,E,P,M,D,F,K,H,$)=>{let U=0;const re=E.length;let Q=_.length-1,te=re-1;for(;U<=Q&&U<=te;){const ee=_[U],ie=E[U]=$?jn(E[U]):nn(E[U]);if($s(ee,ie))k(ee,ie,P,null,D,F,K,H,$);else break;U++}for(;U<=Q&&U<=te;){const ee=_[Q],ie=E[te]=$?jn(E[te]):nn(E[te]);if($s(ee,ie))k(ee,ie,P,null,D,F,K,H,$);else break;Q--,te--}if(U>Q){if(U<=te){const ee=te+1,ie=ee<re?E[ee].el:M;for(;U<=te;)k(null,E[U]=$?jn(E[U]):nn(E[U]),P,ie,D,F,K,H,$),U++}}else if(U>te)for(;U<=Q;)Le(_[U],D,F,!0),U++;else{const ee=U,ie=U,be=new Map;for(U=ie;U<=te;U++){const vt=E[U]=$?jn(E[U]):nn(E[U]);vt.key!=null&&be.set(vt.key,U)}let we,ot=0;const Qe=te-ie+1;let Ze=!1,at=0;const Nn=new Array(Qe);for(U=0;U<Qe;U++)Nn[U]=0;for(U=ee;U<=Q;U++){const vt=_[U];if(ot>=Qe){Le(vt,D,F,!0);continue}let Ot;if(vt.key!=null)Ot=be.get(vt.key);else for(we=ie;we<=te;we++)if(Nn[we-ie]===0&&$s(vt,E[we])){Ot=we;break}Ot===void 0?Le(vt,D,F,!0):(Nn[Ot-ie]=U+1,Ot>=at?at=Ot:Ze=!0,k(vt,E[Ot],P,null,D,F,K,H,$),ot++)}const Vr=Ze?Jy(Nn):Qr;for(we=Vr.length-1,U=Qe-1;U>=0;U--){const vt=ie+U,Ot=E[vt],Or=vt+1<re?E[vt+1].el:M;Nn[U]===0?k(null,Ot,P,Or,D,F,K,H,$):Ze&&(we<0||U!==Vr[we]?Vt(Ot,P,Or,2):we--)}}},Vt=(_,E,P,M,D=null)=>{const{el:F,type:K,transition:H,children:$,shapeFlag:U}=_;if(U&6){Vt(_.component.subTree,E,P,M);return}if(U&128){_.suspense.move(E,P,M);return}if(U&64){K.move(_,E,P,Z);return}if(K===It){r(F,E,P);for(let Q=0;Q<$.length;Q++)Vt($[Q],E,P,M);r(_.anchor,E,P);return}if(K===rl){q(_,E,P);return}if(M!==2&&U&1&&H)if(M===0)H.beforeEnter(F),r(F,E,P),Ct(()=>H.enter(F),D);else{const{leave:Q,delayLeave:te,afterLeave:ee}=H,ie=()=>r(F,E,P),be=()=>{Q(F,()=>{ie(),ee&&ee()})};te?te(F,ie,be):be()}else r(F,E,P)},Le=(_,E,P,M=!1,D=!1)=>{const{type:F,props:K,ref:H,children:$,dynamicChildren:U,shapeFlag:re,patchFlag:Q,dirs:te,cacheIndex:ee}=_;if(Q===-2&&(D=!1),H!=null&&Vo(H,null,P,_,!0),ee!=null&&(E.renderCache[ee]=void 0),re&256){E.ctx.deactivate(_);return}const ie=re&1&&te,be=!Zr(_);let we;if(be&&(we=K&&K.onVnodeBeforeUnmount)&&en(we,E,_),re&6)Zt(_.component,P,M);else{if(re&128){_.suspense.unmount(P,M);return}ie&&gr(_,null,E,"beforeUnmount"),re&64?_.type.remove(_,E,P,Z,M):U&&!U.hasOnce&&(F!==It||Q>0&&Q&64)?bt(U,E,P,!1,!0):(F===It&&Q&384||!D&&re&16)&&bt($,E,P),M&&Fe(_)}(be&&(we=K&&K.onVnodeUnmounted)||ie)&&Ct(()=>{we&&en(we,E,_),ie&&gr(_,null,E,"unmounted")},P)},Fe=_=>{const{type:E,el:P,anchor:M,transition:D}=_;if(E===It){On(P,M);return}if(E===rl){W(_);return}const F=()=>{s(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(_.shapeFlag&1&&D&&!D.persisted){const{leave:K,delayLeave:H}=D,$=()=>K(P,F);H?H(_.el,F,$):$()}else F()},On=(_,E)=>{let P;for(;_!==E;)P=m(_),s(_),_=P;s(E)},Zt=(_,E,P)=>{const{bum:M,scope:D,job:F,subTree:K,um:H,m:$,a:U}=_;ph($),ph(U),M&&fo(M),D.stop(),F&&(F.flags|=8,Le(K,_,E,P)),H&&Ct(H,E),Ct(()=>{_.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},bt=(_,E,P,M=!1,D=!1,F=0)=>{for(let K=F;K<_.length;K++)Le(_[K],E,P,M,D)},V=_=>{if(_.shapeFlag&6)return V(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const E=m(_.anchor||_.el),P=E&&E[Ty];return P?m(P):E};let Y=!1;const G=(_,E,P)=>{_==null?E._vnode&&Le(E._vnode,null,null,!0):k(E._vnode||null,_,E,null,null,null,P),E._vnode=_,Y||(Y=!0,ah(),zf(),Y=!1)},Z={p:k,um:Le,m:Vt,r:Fe,mt:yt,mc:y,pc:ge,pbc:b,n:V,o:t};let Ee,xe;return{render:G,hydrate:Ee,createApp:jy(G,Ee)}}function tl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function mr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Xy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fp(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=jn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&fp(o,l)),l.type===ha&&(l.el=o.el)}}function Jy(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function pp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pp(e)}function ph(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Zy=Symbol.for("v-scx"),ev=()=>Kt(Zy);function mo(t,e,n){return gp(t,e,n)}function gp(t,e,n=De){const{immediate:r,deep:s,flush:i,once:o}=n,l=Je({},n),c=e&&r||!e&&i!=="post";let h;if(pi){if(i==="sync"){const v=ev();h=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=rn,v.resume=rn,v.pause=rn,v}}const d=gt;l.call=(v,x,k)=>un(v,d,x,k);let p=!1;i==="post"?l.scheduler=v=>{Ct(v,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,x)=>{x?v():gc(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const m=_y(t,e,l);return pi&&(h?h.push(m):c&&m()),m}function tv(t,e,n){const r=this.proxy,s=je(t)?t.includes(".")?mp(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=ki(this),l=gp(s,i.bind(r),n);return o(),l}function mp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const nv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ut(e)}Modifiers`]||t[`${Sr(e)}Modifiers`];function rv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),o=i&&nv(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>je(d)?d.trim():d)),o.number&&(s=n.map(Co)));let l,c=r[l=Qa(e)]||r[l=Qa(Ut(e))];!c&&i&&(c=r[l=Qa(Sr(e))]),c&&un(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,un(h,t,6,s)}}function _p(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!he(t)){const c=h=>{const d=_p(h,e,!0);d&&(l=!0,Je(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Oe(t)&&r.set(t,null),null):(oe(i)?i.forEach(c=>o[c]=null):Je(o,i),Oe(t)&&r.set(t,o),o)}function ua(t,e){return!t||!ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Sr(e))||Re(t,e))}function nl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:v,ctx:x,inheritAttrs:k}=t,O=Do(t);let j,B;try{if(n.shapeFlag&4){const W=s||r,fe=W;j=nn(h.call(fe,W,d,p,v,m,x)),B=l}else{const W=e;j=nn(W.length>1?W(p,{attrs:l,slots:o,emit:c}):W(p,null)),B=e.props?l:sv(l)}}catch(W){ei.length=0,aa(W,t,1),j=de(tr)}let q=j;if(B&&k!==!1){const W=Object.keys(B),{shapeFlag:fe}=q;W.length&&fe&7&&(i&&W.some(rc)&&(B=iv(B,i)),q=is(q,B,!1,!0))}return n.dirs&&(q=is(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&mc(q,n.transition),j=q,Do(O),j}const sv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ta(n))&&((e||(e={}))[n]=t[n]);return e},iv=(t,e)=>{const n={};for(const r in t)(!rc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ov(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?gh(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!ua(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?gh(r,o,h):!0:!!o;return!1}function gh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ua(n,i))return!0}return!1}function av({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const yp=t=>t.__isSuspense;function lv(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Ey(t)}const It=Symbol.for("v-fgt"),ha=Symbol.for("v-txt"),tr=Symbol.for("v-cmt"),rl=Symbol.for("v-stc"),ei=[];let kt=null;function Ce(t=!1){ei.push(kt=t?null:[])}function cv(){ei.pop(),kt=ei[ei.length-1]||null}let di=1;function mh(t,e=!1){di+=t,t<0&&kt&&e&&(kt.hasOnce=!0)}function vp(t){return t.dynamicChildren=di>0?kt||Qr:null,cv(),di>0&&kt&&kt.push(t),t}function Xe(t,e,n,r,s,i){return vp(J(t,e,n,r,s,i,!0))}function Qt(t,e,n,r,s){return vp(de(t,e,n,r,s,!0))}function fi(t){return t?t.__v_isVNode===!0:!1}function $s(t,e){return t.type===e.type&&t.key===e.key}const Ep=({key:t})=>t??null,_o=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||mt(t)||he(t)?{i:st,r:t,k:e,f:!!n}:t:null);function J(t,e=null,n=null,r=0,s=null,i=t===It?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ep(e),ref:e&&_o(e),scopeId:Kf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:st};return l?(Tc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=je(n)?8:16),di>0&&!o&&kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&kt.push(c),c}const de=uv;function uv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Zf)&&(t=tr),fi(t)){const l=is(t,e,!0);return n&&Tc(l,n),di>0&&!i&&kt&&(l.shapeFlag&6?kt[kt.indexOf(t)]=l:kt.push(l)),l.patchFlag=-2,l}if(Tv(t)&&(t=t.__vccOpts),e){e=hv(e);let{class:l,style:c}=e;l&&!je(l)&&(e.class=Pi(l)),Oe(c)&&(fc(c)&&!oe(c)&&(c=Je({},c)),e.style=Si(c))}const o=je(t)?1:yp(t)?128:wy(t)?64:Oe(t)?4:he(t)?2:0;return J(t,e,n,r,s,o,i,!0)}function hv(t){return t?fc(t)||op(t)?Je({},t):t:null}function is(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?dv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Ep(h),ref:e&&e.ref?n&&i?oe(i)?i.concat(_o(e)):[i,_o(e)]:_o(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&is(t.ssContent),ssFallback:t.ssFallback&&is(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&mc(d,c.clone(d)),d}function nt(t=" ",e=0){return de(ha,null,t,e)}function Tp(t="",e=!1){return e?(Ce(),Qt(tr,null,t)):de(tr,null,t)}function nn(t){return t==null||typeof t=="boolean"?de(tr):oe(t)?de(It,null,t.slice()):fi(t)?jn(t):de(ha,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:is(t)}function Tc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Tc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!op(e)?e._ctx=st:s===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:st},n=32):(e=String(e),r&64?(n=16,e=[nt(e)]):n=8);t.children=e,t.shapeFlag|=n}function dv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Pi([e.class,r.class]));else if(s==="style")e.style=Si([e.style,r.style]);else if(ta(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function en(t,e,n,r=null){un(t,e,7,[n,r])}const fv=rp();let pv=0;function gv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||fv,i={uid:pv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new H_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lp(r,s),emitsOptions:_p(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=rv.bind(null,i),t.ce&&t.ce(i),i}let gt=null,No,Cl;{const t=sa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};No=e("__VUE_INSTANCE_SETTERS__",n=>gt=n),Cl=e("__VUE_SSR_SETTERS__",n=>pi=n)}const ki=t=>{const e=gt;return No(t),t.scope.on(),()=>{t.scope.off(),No(e)}},_h=()=>{gt&&gt.scope.off(),No(null)};function wp(t){return t.vnode.shapeFlag&4}let pi=!1;function mv(t,e=!1,n=!1){e&&Cl(e);const{props:r,children:s}=t.vnode,i=wp(t);qy(t,r,i,e),Ky(t,s,n);const o=i?_v(t,e):void 0;return e&&Cl(!1),o}function _v(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ny);const{setup:r}=n;if(r){lr();const s=t.setupContext=r.length>1?vv(t):null,i=ki(t),o=Ci(r,t,0,[t.props,s]),l=yf(o);if(cr(),i(),(l||t.sp)&&!Zr(t)&&Gf(t),l){if(o.then(_h,_h),e)return o.then(c=>{yh(t,c,e)}).catch(c=>{aa(c,t,0)});t.asyncDep=o}else yh(t,o,e)}else Ip(t,e)}function yh(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=jf(e)),Ip(t,n)}let vh;function Ip(t,e,n){const r=t.type;if(!t.render){if(!e&&vh&&!r.render){const s=r.template||vc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,h=Je(Je({isCustomElement:i,delimiters:l},o),c);r.render=vh(s,h)}}t.render=r.render||rn}{const s=ki(t);lr();try{My(t)}finally{cr(),s()}}}const yv={get(t,e){return dt(t,"get",""),t[e]}};function vv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,yv),slots:t.slots,emit:t.emit,expose:e}}function da(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(jf(uy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zs)return Zs[n](t)},has(e,n){return n in e||n in Zs}})):t.proxy}function Ev(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function Tv(t){return he(t)&&"__vccOpts"in t}const qt=(t,e)=>gy(t,e,pi);function bp(t,e,n){const r=arguments.length;return r===2?Oe(e)&&!oe(e)?fi(e)?de(t,null,[e]):de(t,e):de(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fi(n)&&(n=[n]),de(t,e,n))}const wv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xl;const Eh=typeof window<"u"&&window.trustedTypes;if(Eh)try{xl=Eh.createPolicy("vue",{createHTML:t=>t})}catch{}const Ap=xl?t=>xl.createHTML(t):t=>t,Iv="http://www.w3.org/2000/svg",bv="http://www.w3.org/1998/Math/MathML",_n=typeof document<"u"?document:null,Th=_n&&_n.createElement("template"),Av={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?_n.createElementNS(Iv,t):e==="mathml"?_n.createElementNS(bv,t):n?_n.createElement(t,{is:n}):_n.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>_n.createTextNode(t),createComment:t=>_n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Th.innerHTML=Ap(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Th.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Rv=Symbol("_vtc");function Sv(t,e,n){const r=t[Rv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wh=Symbol("_vod"),Pv=Symbol("_vsh"),Cv=Symbol(""),xv=/(^|;)\s*display\s*:/;function kv(t,e,n){const r=t.style,s=je(n);let i=!1;if(n&&!s){if(e)if(je(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&yo(r,l,"")}else for(const o in e)n[o]==null&&yo(r,o,"");for(const o in n)o==="display"&&(i=!0),yo(r,o,n[o])}else if(s){if(e!==n){const o=r[Cv];o&&(n+=";"+o),r.cssText=n,i=xv.test(n)}}else e&&t.removeAttribute("style");wh in t&&(t[wh]=i?r.display:"",t[Pv]&&(r.display="none"))}const Ih=/\s*!important$/;function yo(t,e,n){if(oe(n))n.forEach(r=>yo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Dv(t,e);Ih.test(n)?t.setProperty(Sr(r),n.replace(Ih,""),"important"):t[r]=n}}const bh=["Webkit","Moz","ms"],sl={};function Dv(t,e){const n=sl[e];if(n)return n;let r=Ut(e);if(r!=="filter"&&r in t)return sl[e]=r;r=ra(r);for(let s=0;s<bh.length;s++){const i=bh[s]+r;if(i in t)return sl[e]=i}return e}const Ah="http://www.w3.org/1999/xlink";function Rh(t,e,n,r,s,i=j_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ah,e.slice(6,e.length)):t.setAttributeNS(Ah,e,n):n==null||i&&!wf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Gt(n)?String(n):n)}function Sh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ap(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=wf(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function En(t,e,n,r){t.addEventListener(e,n,r)}function Vv(t,e,n,r){t.removeEventListener(e,n,r)}const Ph=Symbol("_vei");function Ov(t,e,n,r,s=null){const i=t[Ph]||(t[Ph]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=Nv(e);if(r){const h=i[e]=Fv(r,s);En(t,l,h,c)}else o&&(Vv(t,l,o,c),i[e]=void 0)}}const Ch=/(?:Once|Passive|Capture)$/;function Nv(t){let e;if(Ch.test(t)){e={};let r;for(;r=t.match(Ch);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Sr(t.slice(2)),e]}let il=0;const Mv=Promise.resolve(),Lv=()=>il||(Mv.then(()=>il=0),il=Date.now());function Fv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;un(Uv(r,n.value),e,5,[r])};return n.value=t,n.attached=Lv(),n}function Uv(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Bv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Sv(t,r,o):e==="style"?kv(t,n,r):ta(e)?rc(e)||Ov(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$v(t,e,r,o))?(Sh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!je(r))?Sh(t,Ut(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Rh(t,e,r,o))};function $v(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&xh(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xh(e)&&je(n)?!1:e in t}const nr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>fo(e,n):e};function jv(t){t.target.composing=!0}function kh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Lt=Symbol("_assign"),ti={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Lt]=nr(s);const i=r||s.props&&s.props.type==="number";En(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Co(l)),t[Lt](l)}),n&&En(t,"change",()=>{t.value=t.value.trim()}),e||(En(t,"compositionstart",jv),En(t,"compositionend",kh),En(t,"change",kh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Lt]=nr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Co(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},qv={deep:!0,created(t,e,n){t[Lt]=nr(n),En(t,"change",()=>{const r=t._modelValue,s=os(t),i=t.checked,o=t[Lt];if(oe(r)){const l=oc(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const h=[...r];h.splice(l,1),o(h)}}else if(vs(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Rp(t,i))})},mounted:Dh,beforeUpdate(t,e,n){t[Lt]=nr(n),Dh(t,e,n)}};function Dh(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(oe(e))s=oc(e,r.props.value)>-1;else if(vs(e))s=e.has(r.props.value);else{if(e===n)return;s=wr(e,Rp(t,!0))}t.checked!==s&&(t.checked=s)}const Hv={created(t,{value:e},n){t.checked=wr(e,n.props.value),t[Lt]=nr(n),En(t,"change",()=>{t[Lt](os(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Lt]=nr(r),e!==n&&(t.checked=wr(e,r.props.value))}},zv={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=vs(e);En(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Co(os(o)):os(o));t[Lt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,pc(()=>{t._assigning=!1})}),t[Lt]=nr(r)},mounted(t,{value:e}){Vh(t,e)},beforeUpdate(t,e,n){t[Lt]=nr(n)},updated(t,{value:e}){t._assigning||Vh(t,e)}};function Vh(t,e){const n=t.multiple,r=oe(e);if(!(n&&!r&&!vs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=os(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=oc(e,l)>-1}else o.selected=e.has(l);else if(wr(os(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function os(t){return"_value"in t?t._value:t.value}function Rp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Wv={created(t,e,n){io(t,e,n,null,"created")},mounted(t,e,n){io(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){io(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){io(t,e,n,r,"updated")}};function Kv(t,e){switch(t){case"SELECT":return zv;case"TEXTAREA":return ti;default:switch(e){case"checkbox":return qv;case"radio":return Hv;default:return ti}}}function io(t,e,n,r,s){const o=Kv(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const Gv=["ctrl","shift","alt","meta"],Qv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Gv.some(n=>t[`${n}Key`]&&!e.includes(n))},Sp=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=Qv[e[o]];if(l&&l(s,e))return}return t(s,...i)})},Yv=Je({patchProp:Bv},Av);let Oh;function Xv(){return Oh||(Oh=Qy(Yv))}const Jv=(...t)=>{const e=Xv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=eE(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Zv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Zv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function eE(t){return je(t)?document.querySelector(t):t}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const jr=typeof document<"u";function Pp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Pp(t.default)}const Pe=Object.assign;function ol(t,e){const n={};for(const r in e){const s=e[r];n[r]=Yt(s)?s.map(t):t(s)}return n}const ni=()=>{},Yt=Array.isArray,Cp=/#/g,nE=/&/g,rE=/\//g,sE=/=/g,iE=/\?/g,xp=/\+/g,oE=/%5B/g,aE=/%5D/g,kp=/%5E/g,lE=/%60/g,Dp=/%7B/g,cE=/%7C/g,Vp=/%7D/g,uE=/%20/g;function wc(t){return encodeURI(""+t).replace(cE,"|").replace(oE,"[").replace(aE,"]")}function hE(t){return wc(t).replace(Dp,"{").replace(Vp,"}").replace(kp,"^")}function kl(t){return wc(t).replace(xp,"%2B").replace(uE,"+").replace(Cp,"%23").replace(nE,"%26").replace(lE,"`").replace(Dp,"{").replace(Vp,"}").replace(kp,"^")}function dE(t){return kl(t).replace(sE,"%3D")}function fE(t){return wc(t).replace(Cp,"%23").replace(iE,"%3F")}function pE(t){return t==null?"":fE(t).replace(rE,"%2F")}function gi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const gE=/\/$/,mE=t=>t.replace(gE,"");function al(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=EE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:gi(o)}}function _E(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Nh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function yE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&as(e.matched[r],n.matched[s])&&Op(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function as(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Op(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vE(t[n],e[n]))return!1;return!0}function vE(t,e){return Yt(t)?Mh(t,e):Yt(e)?Mh(e,t):t===e}function Mh(t,e){return Yt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function EE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var mi;(function(t){t.pop="pop",t.push="push"})(mi||(mi={}));var ri;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ri||(ri={}));function TE(t){if(!t)if(jr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mE(t)}const wE=/^[^#]+#/;function IE(t,e){return t.replace(wE,"#")+e}function bE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const fa=()=>({left:window.scrollX,top:window.scrollY});function AE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=bE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Lh(t,e){return(history.state?history.state.position-e:-1)+t}const Dl=new Map;function RE(t,e){Dl.set(t,e)}function SE(t){const e=Dl.get(t);return Dl.delete(t),e}let PE=()=>location.protocol+"//"+location.host;function Np(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Nh(c,"")}return Nh(n,t)+r+s}function CE(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const v=Np(t,location),x=n.value,k=e.value;let O=0;if(m){if(n.value=v,e.value=m,o&&o===x){o=null;return}O=k?m.position-k.position:0}else r(v);s.forEach(j=>{j(n.value,x,{delta:O,type:mi.pop,direction:O?O>0?ri.forward:ri.back:ri.unknown})})};function c(){o=n.value}function h(m){s.push(m);const v=()=>{const x=s.indexOf(m);x>-1&&s.splice(x,1)};return i.push(v),v}function d(){const{history:m}=window;m.state&&m.replaceState(Pe({},m.state,{scroll:fa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function Fh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?fa():null}}function xE(t){const{history:e,location:n}=window,r={value:Np(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:PE()+t+c;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(v){console.error(v),n[d?"replace":"assign"](m)}}function o(c,h){const d=Pe({},e.state,Fh(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=Pe({},s.value,e.state,{forward:c,scroll:fa()});i(d.current,d,!0);const p=Pe({},Fh(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function kE(t){t=TE(t);const e=xE(t),n=CE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:IE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function DE(t){return typeof t=="string"||t&&typeof t=="object"}function Mp(t){return typeof t=="string"||typeof t=="symbol"}const Lp=Symbol("");var Uh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Uh||(Uh={}));function ls(t,e){return Pe(new Error,{type:t,[Lp]:!0},e)}function mn(t,e){return t instanceof Error&&Lp in t&&(e==null||!!(t.type&e))}const Bh="[^/]+?",VE={sensitive:!1,strict:!1,start:!0,end:!0},OE=/[.+*?^${}()[\]/\\]/g;function NE(t,e){const n=Pe({},VE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let v=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(OE,"\\$&"),v+=40;else if(m.type===1){const{value:x,repeatable:k,optional:O,regexp:j}=m;i.push({name:x,repeatable:k,optional:O});const B=j||Bh;if(B!==Bh){v+=10;try{new RegExp(`(${B})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${x}" (${B}): `+W.message)}}let q=k?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(q=O&&h.length<2?`(?:/${q})`:"/"+q),O&&(q+="?"),s+=q,v+=20,O&&(v+=-8),k&&(v+=-20),B===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const v=d[m]||"",x=i[m-1];p[x.name]=v&&x.repeatable?v.split("/"):v}return p}function c(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of m)if(v.type===0)d+=v.value;else if(v.type===1){const{value:x,repeatable:k,optional:O}=v,j=x in h?h[x]:"";if(Yt(j)&&!k)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const B=Yt(j)?j.join("/"):j;if(!B)if(O)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${x}"`);d+=B}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function ME(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Fp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ME(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if($h(r))return 1;if($h(s))return-1}return s.length-r.length}function $h(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const LE={type:0,value:""},FE=/[a-zA-Z0-9_]/;function UE(t){if(!t)return[[]];if(t==="/")return[[LE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:FE.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function BE(t,e,n){const r=NE(UE(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function $E(t,e){const n=[],r=new Map;e=zh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,v){const x=!v,k=qh(p);k.aliasOf=v&&v.record;const O=zh(e,p),j=[k];if("alias"in p){const W=typeof p.alias=="string"?[p.alias]:p.alias;for(const fe of W)j.push(qh(Pe({},k,{components:v?v.record.components:k.components,path:fe,aliasOf:v?v.record:k})))}let B,q;for(const W of j){const{path:fe}=W;if(m&&fe[0]!=="/"){const pe=m.record.path,I=pe[pe.length-1]==="/"?"":"/";W.path=m.record.path+(fe&&I+fe)}if(B=BE(W,m,O),v?v.alias.push(B):(q=q||B,q!==B&&q.alias.push(B),x&&p.name&&!Hh(B)&&o(p.name)),Up(B)&&c(B),k.children){const pe=k.children;for(let I=0;I<pe.length;I++)i(pe[I],B,v&&v.children[I])}v=v||B}return q?()=>{o(q)}:ni}function o(p){if(Mp(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=HE(p,n);n.splice(m,0,p),p.record.name&&!Hh(p)&&r.set(p.record.name,p)}function h(p,m){let v,x={},k,O;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw ls(1,{location:p});O=v.record.name,x=Pe(jh(m.params,v.keys.filter(q=>!q.optional).concat(v.parent?v.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&jh(p.params,v.keys.map(q=>q.name))),k=v.stringify(x)}else if(p.path!=null)k=p.path,v=n.find(q=>q.re.test(k)),v&&(x=v.parse(k),O=v.record.name);else{if(v=m.name?r.get(m.name):n.find(q=>q.re.test(m.path)),!v)throw ls(1,{location:p,currentLocation:m});O=v.record.name,x=Pe({},m.params,p.params),k=v.stringify(x)}const j=[];let B=v;for(;B;)j.unshift(B.record),B=B.parent;return{name:O,path:k,params:x,matched:j,meta:qE(j)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function jh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function qh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:jE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function jE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Hh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qE(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function zh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function HE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Fp(t,e[i])<0?r=i:n=i+1}const s=zE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function zE(t){let e=t;for(;e=e.parent;)if(Up(e)&&Fp(t,e)===0)return e}function Up({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function WE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(xp," "),o=i.indexOf("="),l=gi(o<0?i:i.slice(0,o)),c=o<0?null:gi(i.slice(o+1));if(l in e){let h=e[l];Yt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Wh(t){let e="";for(let n in t){const r=t[n];if(n=dE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Yt(r)?r.map(i=>i&&kl(i)):[r&&kl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function KE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Yt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const GE=Symbol(""),Kh=Symbol(""),pa=Symbol(""),Ic=Symbol(""),Vl=Symbol("");function js(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(ls(4,{from:n,to:e})):m instanceof Error?c(m):DE(m)?c(ls(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function ll(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Pp(c)){const d=(c.__vccOpts||c)[e];d&&i.push(qn(d,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=tE(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const v=(p.__vccOpts||p)[e];return v&&qn(v,n,r,o,l,s)()}))}}return i}function Gh(t){const e=Kt(pa),n=Kt(Ic),r=qt(()=>{const c=Rt(t.to);return e.resolve(c)}),s=qt(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(as.bind(null,d));if(m>-1)return m;const v=Qh(c[h-2]);return h>1&&Qh(d)===v&&p[p.length-1].path!==v?p.findIndex(as.bind(null,c[h-2])):m}),i=qt(()=>s.value>-1&&JE(n.params,r.value.params)),o=qt(()=>s.value>-1&&s.value===n.matched.length-1&&Op(n.params,r.value.params));function l(c={}){return XE(c)?e[Rt(t.replace)?"replace":"push"](Rt(t.to)).catch(ni):Promise.resolve()}return{route:r,href:qt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const QE=_c({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gh,setup(t,{slots:e}){const n=oa(Gh(t)),{options:r}=Kt(pa),s=qt(()=>({[Yh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Yh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:bp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),YE=QE;function XE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function JE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Yt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Qh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yh=(t,e,n)=>t??e??n,ZE=_c({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Kt(Vl),s=qt(()=>t.route||r.value),i=Kt(Kh,0),o=qt(()=>{let h=Rt(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=qt(()=>s.value.matched[o.value]);go(Kh,qt(()=>o.value+1)),go(GE,l),go(Vl,s);const c=An();return mo(()=>[c.value,l.value,t.name],([h,d,p],[m,v,x])=>{d&&(d.instances[p]=h,v&&v!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),h&&d&&(!v||!as(d,v)||!m)&&(d.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Xh(n.default,{Component:m,route:h});const v=p.props[d],x=v?v===!0?h.params:typeof v=="function"?v(h):v:null,O=bp(m,Pe({},x,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Xh(n.default,{Component:O,route:h})||O}}});function Xh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Bp=ZE;function eT(t){const e=$E(t.routes,t),n=t.parseQuery||WE,r=t.stringifyQuery||Wh,s=t.history,i=js(),o=js(),l=js(),c=hy(Un);let h=Un;jr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ol.bind(null,V=>""+V),p=ol.bind(null,pE),m=ol.bind(null,gi);function v(V,Y){let G,Z;return Mp(V)?(G=e.getRecordMatcher(V),Z=Y):Z=V,e.addRoute(Z,G)}function x(V){const Y=e.getRecordMatcher(V);Y&&e.removeRoute(Y)}function k(){return e.getRoutes().map(V=>V.record)}function O(V){return!!e.getRecordMatcher(V)}function j(V,Y){if(Y=Pe({},Y||c.value),typeof V=="string"){const E=al(n,V,Y.path),P=e.resolve({path:E.path},Y),M=s.createHref(E.fullPath);return Pe(E,P,{params:m(P.params),hash:gi(E.hash),redirectedFrom:void 0,href:M})}let G;if(V.path!=null)G=Pe({},V,{path:al(n,V.path,Y.path).path});else{const E=Pe({},V.params);for(const P in E)E[P]==null&&delete E[P];G=Pe({},V,{params:p(E)}),Y.params=p(Y.params)}const Z=e.resolve(G,Y),Ee=V.hash||"";Z.params=d(m(Z.params));const xe=_E(r,Pe({},V,{hash:hE(Ee),path:Z.path})),_=s.createHref(xe);return Pe({fullPath:xe,hash:Ee,query:r===Wh?KE(V.query):V.query||{}},Z,{redirectedFrom:void 0,href:_})}function B(V){return typeof V=="string"?al(n,V,c.value.path):Pe({},V)}function q(V,Y){if(h!==V)return ls(8,{from:Y,to:V})}function W(V){return I(V)}function fe(V){return W(Pe(B(V),{replace:!0}))}function pe(V){const Y=V.matched[V.matched.length-1];if(Y&&Y.redirect){const{redirect:G}=Y;let Z=typeof G=="function"?G(V):G;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=B(Z):{path:Z},Z.params={}),Pe({query:V.query,hash:V.hash,params:Z.path!=null?{}:V.params},Z)}}function I(V,Y){const G=h=j(V),Z=c.value,Ee=V.state,xe=V.force,_=V.replace===!0,E=pe(G);if(E)return I(Pe(B(E),{state:typeof E=="object"?Pe({},Ee,E.state):Ee,force:xe,replace:_}),Y||G);const P=G;P.redirectedFrom=Y;let M;return!xe&&yE(r,Z,G)&&(M=ls(16,{to:P,from:Z}),Vt(Z,Z,!0,!1)),(M?Promise.resolve(M):b(P,Z)).catch(D=>mn(D)?mn(D,2)?D:$t(D):ge(D,P,Z)).then(D=>{if(D){if(mn(D,2))return I(Pe({replace:_},B(D.to),{state:typeof D.to=="object"?Pe({},Ee,D.to.state):Ee,force:xe}),Y||P)}else D=R(P,Z,!0,_,Ee);return A(P,Z,D),D})}function y(V,Y){const G=q(V,Y);return G?Promise.reject(G):Promise.resolve()}function w(V){const Y=On.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(V):V()}function b(V,Y){let G;const[Z,Ee,xe]=tT(V,Y);G=ll(Z.reverse(),"beforeRouteLeave",V,Y);for(const E of Z)E.leaveGuards.forEach(P=>{G.push(qn(P,V,Y))});const _=y.bind(null,V,Y);return G.push(_),bt(G).then(()=>{G=[];for(const E of i.list())G.push(qn(E,V,Y));return G.push(_),bt(G)}).then(()=>{G=ll(Ee,"beforeRouteUpdate",V,Y);for(const E of Ee)E.updateGuards.forEach(P=>{G.push(qn(P,V,Y))});return G.push(_),bt(G)}).then(()=>{G=[];for(const E of xe)if(E.beforeEnter)if(Yt(E.beforeEnter))for(const P of E.beforeEnter)G.push(qn(P,V,Y));else G.push(qn(E.beforeEnter,V,Y));return G.push(_),bt(G)}).then(()=>(V.matched.forEach(E=>E.enterCallbacks={}),G=ll(xe,"beforeRouteEnter",V,Y,w),G.push(_),bt(G))).then(()=>{G=[];for(const E of o.list())G.push(qn(E,V,Y));return G.push(_),bt(G)}).catch(E=>mn(E,8)?E:Promise.reject(E))}function A(V,Y,G){l.list().forEach(Z=>w(()=>Z(V,Y,G)))}function R(V,Y,G,Z,Ee){const xe=q(V,Y);if(xe)return xe;const _=Y===Un,E=jr?history.state:{};G&&(Z||_?s.replace(V.fullPath,Pe({scroll:_&&E&&E.scroll},Ee)):s.push(V.fullPath,Ee)),c.value=V,Vt(V,Y,G,_),$t()}let T;function yt(){T||(T=s.listen((V,Y,G)=>{if(!Zt.listening)return;const Z=j(V),Ee=pe(Z);if(Ee){I(Pe(Ee,{replace:!0}),Z).catch(ni);return}h=Z;const xe=c.value;jr&&RE(Lh(xe.fullPath,G.delta),fa()),b(Z,xe).catch(_=>mn(_,12)?_:mn(_,2)?(I(_.to,Z).then(E=>{mn(E,20)&&!G.delta&&G.type===mi.pop&&s.go(-1,!1)}).catch(ni),Promise.reject()):(G.delta&&s.go(-G.delta,!1),ge(_,Z,xe))).then(_=>{_=_||R(Z,xe,!1),_&&(G.delta&&!mn(_,8)?s.go(-G.delta,!1):G.type===mi.pop&&mn(_,20)&&s.go(-1,!1)),A(Z,xe,_)}).catch(ni)}))}let Dt=js(),qe=js(),ve;function ge(V,Y,G){$t(V);const Z=qe.list();return Z.length?Z.forEach(Ee=>Ee(V,Y,G)):console.error(V),Promise.reject(V)}function St(){return ve&&c.value!==Un?Promise.resolve():new Promise((V,Y)=>{Dt.add([V,Y])})}function $t(V){return ve||(ve=!V,yt(),Dt.list().forEach(([Y,G])=>V?G(V):Y()),Dt.reset()),V}function Vt(V,Y,G,Z){const{scrollBehavior:Ee}=t;if(!jr||!Ee)return Promise.resolve();const xe=!G&&SE(Lh(V.fullPath,0))||(Z||!G)&&history.state&&history.state.scroll||null;return pc().then(()=>Ee(V,Y,xe)).then(_=>_&&AE(_)).catch(_=>ge(_,V,Y))}const Le=V=>s.go(V);let Fe;const On=new Set,Zt={currentRoute:c,listening:!0,addRoute:v,removeRoute:x,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:k,resolve:j,options:t,push:W,replace:fe,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:qe.add,isReady:St,install(V){const Y=this;V.component("RouterLink",YE),V.component("RouterView",Bp),V.config.globalProperties.$router=Y,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Rt(c)}),jr&&!Fe&&c.value===Un&&(Fe=!0,W(s.location).catch(Ee=>{}));const G={};for(const Ee in Un)Object.defineProperty(G,Ee,{get:()=>c.value[Ee],enumerable:!0});V.provide(pa,Y),V.provide(Ic,Uf(G)),V.provide(Vl,c);const Z=V.unmount;On.add(V),V.unmount=function(){On.delete(V),On.size<1&&(h=Un,T&&T(),T=null,c.value=Un,Fe=!1,ve=!1),Z()}}};function bt(V){return V.reduce((Y,G)=>Y.then(()=>w(G)),Promise.resolve())}return Zt}function tT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>as(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>as(h,c))||s.push(c))}return[n,r,s]}function $p(){return Kt(pa)}function nT(t){return Kt(Ic)}const Jt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},rT={name:"BtnComponent",props:{label:{type:String}}},sT={class:"bg-navText text-insideBtnText font-extrabold px-6 py-2 rounded-2xl text-center inline-block hover:bg-blue-200"};function iT(t,e,n,r,s,i){return Ce(),Xe("button",sT,zt(n.label),1)}const bc=Jt(rT,[["render",iT]]),oT={name:"FooterComponent",components:{Btn:bc},setup(){const t=$p();return{goToReadBlog:()=>{t.push({name:"blog"})}}}},aT={class:"bg-black mx-auto w-10/12 sm:w-8/12 h-60 flex items-center justify-center flex-col"};function lT(t,e,n,r,s,i){const o=sn("Btn");return Ce(),Xe("div",aT,[e[0]||(e[0]=J("h1",{class:"text-text p-4 font-general"},"Wanna see something creative...",-1)),J("div",null,[de(o,{label:"Go to Blogs",onClick:r.goToReadBlog},null,8,["onClick"])])])}const cT=Jt(oT,[["render",lT]]),uT={name:"NavBar",data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},closeMenu(){this.isMenuOpen=!1}}},hT={class:"mx-auto w-10/12 sm:w-8/12 border-b border-gray-600 py-2"},dT={class:"bg-black text-navText flex items-center justify-between"},fT={class:"hidden md:flex space-x-4 text-navText"};function pT(t,e,n,r,s,i){const o=sn("router-link");return Ce(),Xe("div",hT,[J("nav",dT,[e[8]||(e[8]=J("h1",{class:"text-white text-3xl font-extrabold font-general tracking-tighter"},"MustafaBlog's",-1)),J("div",fT,[de(o,{to:"/",class:"hover:text-gray-400"},{default:ze(()=>e[1]||(e[1]=[nt("Home")])),_:1}),de(o,{to:"/blog",class:"hover:text-gray-400"},{default:ze(()=>e[2]||(e[2]=[nt("Blog")])),_:1}),de(o,{to:"/login",class:"hover:text-gray-400"},{default:ze(()=>e[3]||(e[3]=[nt("Login")])),_:1})]),J("button",{onClick:e[0]||(e[0]=(...l)=>i.toggleMenu&&i.toggleMenu(...l)),class:"text-white md:hidden focus:outline-none"},e[4]||(e[4]=[J("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",class:"w-8 h-8"},[J("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"})],-1)])),J("div",{class:Pi([{block:s.isMenuOpen,hidden:!s.isMenuOpen},"absolute top-14 left-1/2 transform -translate-x-1/2 w-10/12 sm:w-8/12 text-navText bg-black md:hidden rounded-lg shadow-lg z-10"])},[de(o,{to:"/",class:"block py-2 px-4 hover:text-gray-400 border-b border-gray-600",onClick:i.closeMenu},{default:ze(()=>e[5]||(e[5]=[nt(" Home ")])),_:1},8,["onClick"]),de(o,{to:"/blog",class:"block py-2 px-4 hover:text-gray-400 border-b border-gray-600",onClick:i.closeMenu},{default:ze(()=>e[6]||(e[6]=[nt(" Blog ")])),_:1},8,["onClick"]),de(o,{to:"/login",class:"block py-2 px-4 hover:text-gray-400",onClick:i.closeMenu},{default:ze(()=>e[7]||(e[7]=[nt(" Login ")])),_:1},8,["onClick"])],2)])])}const gT=Jt(uT,[["render",pT],["__scopeId","data-v-6bb5dd82"]]),mT={__name:"App",setup(t){return(e,n)=>(Ce(),Xe(It,null,[de(gT),de(Rt(Bp)),de(cT)],64))}},_T=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};async function Br(t){return new Promise(e=>setTimeout(e,t))}const yT=_c({name:"AutoTyperVue",emits:["finished"],props:{componentTag:{type:String,default:"span",validator(t){return/^(span)|(h\d)|(p)|(a)$/.test(t)}},beginningWord:{type:String,default:""},writtenBeginningWord:{type:String,default:""},text:{type:[String,Array],required:!0,validator(t){return typeof t=="string"?t.length>0:t.every(e=>typeof e=="string"&&e.length>0)}},startDelay:{type:Number,default:500,validator(t){return t>=0}},betweenWordDelay:{type:Number,default:500,validator(t){return t>=0}},typingDelay:{type:Number,default:150,validator(t){return t>=0}},deletingDelay:{type:Number,default:100,validator(t){return t>=0}},waitBeforeDeleteDelay:{type:Number,default:500,validator(t){return t>=0}},startByDefault:{type:Boolean,default:!0},repeat:{type:Boolean,default:!0},removeAfterRepeat:{type:Boolean,default:!1}},data(){return{currentText:"",typedBeginningWord:"",textFeed:[]}},mounted(){this.startByDefault&&this.begin()},methods:{async begin(){typeof this.text=="string"?this.textFeed=[this.text]:this.textFeed=[...this.text],await Br(this.startDelay),await this.writeBeginningWord(),this.autoType()},async writeBeginningWord(){if(this.writtenBeginningWord.length)for(let t of[...this.writtenBeginningWord])this.typedBeginningWord+=t,await Br(this.typingDelay)},async autoType(){for(let t of this.textFeed){if(await this.writeWord(t),await Br(this.waitBeforeDeleteDelay),!this.repeat&&!this.removeAfterRepeat&&this.textFeed.indexOf(t)===this.textFeed.length-1)break;await this.removeWord(t),await Br(this.betweenWordDelay)}this.repeat?this.autoType():this.$emit("finished")},async writeWord(t){for(let e of[...t])this.currentText+=e,await Br(this.typingDelay)},async removeWord(t){for(let e=0;e<t.length;e++)this.currentText=this.currentText.slice(0,-1),await Br(this.deletingDelay)}}});function vT(t,e,n,r,s,i){return Ce(),Qt(xi(t.componentTag),{class:"auto-typer-vue blink"},{default:ze(()=>[nt(zt(t.beginningWord)+zt(t.typedBeginningWord)+zt(t.currentText),1)]),_:1})}const ET=_T(yT,[["render",vT]]),TT={class:"bg-black mx-auto w-10/12 sm:w-8/12 flex justify-center items-center font-general",style:{height:"calc(100vh - 8rem)"}},wT={class:"flex flex-col justify-center items-center"},IT={__name:"MainSection",setup(t){const e=["Mustafa's Blog","place to dump thoughts...","maybe?","scroll down already...","..."];return(n,r)=>(Ce(),Xe("div",TT,[J("div",wT,[de(Rt(ET),{componentTag:"h1",text:e,class:"text-white text-2xl sm:text-4xl font-extrabold font-general"}),r[0]||(r[0]=J("div",{class:"text-gray-600 tracking-tighter text-sm sm:text-base"},"a blog site made for me by me",-1))])]))}},bT="/vue_blog_portfolio/assets/sad-DZct63Xf.gif";var AT={props:{type:{type:String,default:"translate"},transformOrigin:{type:String,default:"center"},originX:{type:Number,default:50},originY:{type:Number,default:50},strength:{type:Number,default:10},audioIndex:{type:Number,default:50},axis:{type:String,default:null},maxX:{type:Number,default:null},maxY:{type:Number,default:null},minX:{type:Number,default:null},minY:{type:Number,default:null},cycle:{type:Number,default:0}},methods:{strengthManager(){return this.type==="depth"||this.type==="depth_inv"?Math.abs(this.strength):this.strength}}};function RT(t){return t.bottom>=0&&t.right>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)&&t.left<=(window.innerWidth||document.documentElement.clientWidth)}function ST(t,e,n){let r,s;return function(){const i=this;let o;n==="scroll"?o=e:o=i.duration>1e3?e:i.duration/10;const l=+new Date,c=arguments;r&&l<r+o?(clearTimeout(s),s=setTimeout(()=>{requestAnimationFrame(()=>{r=l,t.apply(i,c)})},o)):requestAnimationFrame(()=>{r=l,t.apply(i,c)})}}var PT={props:{active:{type:Boolean,default:!0},duration:{type:Number,default:1e3},easing:{type:String,default:"cubic-bezier(0.23, 1, 0.32, 1)"},tag:{type:String,default:"div"}}},CT={props:{perspective:{type:Number,default:1e3}},computed:{style(){return{perspective:`${this.perspective}px`}}}},xT={props:{audio:{type:String,required:!1},playAudio:{type:Boolean,default:!1}},data(){return{analyser:null,audioArray:null,audioData:null,audioRef:null,wasPlayed:!1,isPlaying:!1}},watch:{audio(){this.wasPlayed=!1,this.isPlaying=!1},playAudio(t){t?this.play():this.stop()}},methods:{play(){this.active&&(this.wasPlayed||(this.handleAudio(),this.wasPlayed=!0),this.isPlaying=!0,this.audioRef.play(),this.getSongData())},stop(){this.isPlaying=!1,this.audioRef.pause()},handleAudio(){const{audio:t}=this.$refs;this.audioRef=t;const e=new AudioContext,n=e.createMediaElementSource(t),r=e.createAnalyser();n.connect(r),r.connect(e.destination),r.fftSize=256;const s=r.frequencyBinCount,i=new Uint8Array(s);this.audioArray=i,this.analyser=r},getSongData(){this.isPlaying&&(this.analyser.getByteFrequencyData(this.audioArray),this.audioData=new Array(this.audioArray),requestAnimationFrame(this.getSongData))}}};function Mo(){try{return/Mobi|Android/i.test(navigator.userAgent)}catch{return!0}}var kT={props:{event:{type:String,default:"move"}},data(){return{eventMap:{orientation:"deviceorientation",scroll:"scroll",move:Mo()?"deviceorientation":null}}},methods:{addEvents(){this.eventMap[this.event]&&window.addEventListener(this.eventMap[this.event],this.handleMovement,!0)},removeEvents(){this.eventMap[this.event]&&window.removeEventListener(this.eventMap[this.event],this.handleMovement,!0)}},watch:{event(t,e){this.eventMap[t]&&window.addEventListener(this.eventMap[t],this.handleMovement,!0),this.eventMap[e]&&window.addEventListener(this.eventMap[e],this.handleMovement,!0)}}};function Es(t,e){return{x:t,y:e}}function DT(t){return Es(t?t.width/2:0,t?t.height/2:0)}function VT(t){const{target:e,event:n}=t,r=n.clientX,s=n.clientY,i=r-e.left,o=s-e.top,l=DT(e),c=i/l.x,h=o/l.y;return{...Es(c,h),target:e}}function OT(t){const{event:e,target:n}=t,r=e.gamma/45,s=e.beta/90;return{...Es(r,s),target:n}}function NT(t){const e=(t.left-window.innerWidth)/(t.width+window.innerWidth),n=(t.top-window.innerHeight)/(t.height+window.innerHeight);return{...Es(e,n),target:t}}var jp={name:"KinesisContainer",mixins:[PT,CT,xT,kT],provide(){const t={};return["audioData","duration","easing","event","eventData","isMoving","movement","shape"].forEach(n=>Object.defineProperty(t,n,{enumerable:!0,get:()=>this[n]})),{context:t}},data(){return{movement:{x:0,y:0},isMoving:!1,shape:null,leftOnce:!1,eventData:{x:0,y:0}}},mounted(){this.addEvents()},beforeUnmount(){this.removeEvents()},methods:{handleMovement:ST(function(t){if(!this.active)return;!this.isMoving&&!this.leftOnce&&(this.isMoving=!0),this.shape=this.$el.getBoundingClientRect();const e=RT(this.shape);this.event==="move"&&this.isMoving&&!Mo()?(this.movement=VT({target:this.shape,event:t}),this.eventData=Es(t.clientX,t.clientY)):(this.event==="orientation"||this.event==="move"&&Mo())&&e?this.movement=OT({target:this.shape,event:t}):this.event==="scroll"&&e&&this.shape.height&&(this.movement=NT(this.shape))},100),handleMovementStart(){this.active&&(this.isMoving=!0)},handleMovementStop(){this.active&&(this.leftOnce=!0,this.isMoving=!1)}}};function MT(t,e,n,r,s,i){return Ce(),Qt(xi(t.tag),{onMousemove:i.handleMovement,onMouseenter:i.handleMovementStart,onMouseleave:i.handleMovementStop,style:t.style},{default:ze(()=>[ca(t.$slots,"default"),t.audio?(Ce(),Qt("audio",{key:0,type:"audio/mpeg",onEnded:e[1]||(e[1]=(...o)=>t.stop&&t.stop(...o)),ref:"audio"},[de("source",{src:t.audio},null,8,["src"])],544)):Tp("",!0)]),_:3},8,["onMousemove","onMouseenter","onMouseleave","style"])}jp.render=MT;var LT={methods:{transformSwitch(t,e,n,r){let s;switch(t){case"translate":s=this.translateMovement(e,n);break;case"rotate":s=this.rotateMovement(e,n);break;case"depth":s=this.depthMovement(e,n,r);break;case"depth_inv":s=this.depthMovement(-e,-n,r);break;case"scale":s=this.scaleMovement(e,n);break}return s},translateMovement(t,e){return`translate3d(${-t}px, ${-e}px, 0)`},rotateMovement(t,e){let n;return this.axis?this.axis==="x"?n=2*t:this.axis==="y"&&(n=2*e):n=t+e,`rotate3d(0,0,1,${n}deg)`},depthMovement(t,e,n){return`rotateX(${-e}deg) rotateY(${t}deg) translate3d(0,0,${n*2}px)`},scaleMovement(t,e){const{type:n}=this,r=Math.sign(this.strength)*(Math.abs(t)+Math.abs(e))/10+1;return`scale3d(${n==="scaleX"||n==="scale"?r:1},
            ${n==="scaleY"||n==="scale"?r:1},
            1)`}}};function Jh(t){const{y:e,x:n,target:r,originX:s=50,strength:i=10,event:o=null}=t;let{originY:l=50}=t;o==="scroll"&&(l=-l/2);const c=(n-s/50)*i,h=(e-l/50)*i;return{...Es(c,h),target:r}}function Zh(t,e,n){return n&&t>n?n:e&&t<e?e:t}function ed(t){const{referencePosition:e,elementPosition:n,spanningRange:r,cycles:s}=t,i=(e-n)*(Math.PI*2)/r;return r*Math.sin(i*s)/(r/2)}var qr={name:"KinesisElement",mixins:[AT,LT],inject:["context"],props:{tag:{type:String,default:"div"}},computed:{transform(){return this.transformMovement()},getContext(){return this.context},transformParameters(){return{transitionProperty:"transform",transitionDuration:this.transitionDuration,transformOrigin:this.transformOrigin,transitionTimingFunction:this.transitionTimingFunction}},transitionDuration(){const{duration:t}=this.context;return`${t}ms`},transitionTimingFunction(){return this.context.easing},isTouch(){return Mo()}},methods:{transformMovement(){const{context:t}=this;if(!t.isMoving&&t.event==="move")return{};let e,n;const r=t.event,s=this.strengthManager();if(this.cycle<=0){const{x:l,y:c}=Jh({...t.movement,originX:this.originX,originY:this.originY,strength:s}),h=r==="scroll";if(h||(e=this.axis==="y"?0:Zh(l,this.minX,this.maxX),n=this.axis==="x"?0:Zh(c,this.minY,this.maxY)),h){const d=Jh({x:t.movement.x,y:t.movement.y,originX:this.originX,originY:this.originY,strength:s,event:t.event}).y;e=this.axis==="x"?d:0,n=this.axis==="y"||!this.axis?d:0}}else if(this.cycle>0){const{shape:l,eventData:c}=t;if(l){const h=this.axis==="x"?ed({referencePosition:r==="scroll"?0:c.x,elementPosition:l.left,spanningRange:r==="scroll"?window.innerWidth:l.width,cycles:this.cycle}):0,d=this.axis==="y"||!this.axis?ed({referencePosition:r==="scroll"?0:c.y,elementPosition:l.top,spanningRange:r==="scroll"?window.innerHeight:l.height,cycles:this.cycle}):0;e=h*s,n=d*s}}let i=this.type;return i=i==="scaleX"||i==="scaleY"?"scale":i,{transform:this.transformSwitch(i,e,n,this.strength)}}}};function FT(t,e,n,r,s,i){return Ce(),Qt(xi(n.tag),{style:{...i.transform,...i.transformParameters}},{default:ze(()=>[ca(t.$slots,"default")]),_:3},8,["style"])}qr.render=FT;const UT={class:"bg-black mx-auto w-10/12 sm:w-8/12 h-screen tracking-tighter"},BT={__name:"FunSection",setup(t){return(e,n)=>(Ce(),Xe("div",UT,[de(Rt(jp),{class:"flex flex-col justify-center items-center gap-4 h-full"},{default:ze(()=>[de(Rt(qr),{strength:10,axis:"both",class:"text-white text-xl sm:text-3xl font-general"},{default:ze(()=>n[0]||(n[0]=[nt(" Not great at everything... ")])),_:1}),de(Rt(qr),{strength:10,axis:"both",class:"text-white text-xl sm:text-3xl font-general"},{default:ze(()=>n[1]||(n[1]=[nt(" but yeah i can "),J("span",{class:"font-extrabold"},"Google",-1)])),_:1}),de(Rt(qr),{strength:10,axis:"both",class:"text-gray-600 font-general"},{default:ze(()=>n[2]||(n[2]=[nt(" Well I code. In JavaScript. ")])),_:1}),de(Rt(qr),{strength:10,axis:"both",class:"text-gray-600 font-general"},{default:ze(()=>n[3]||(n[3]=[nt(" But not good at CSS. ")])),_:1}),de(Rt(qr),{strength:10,axis:"both",class:"text-gray-600 font-general"},{default:ze(()=>n[4]||(n[4]=[J("img",{src:bT,alt:"",class:"w-28 h-auto"},null,-1)])),_:1})]),_:1})]))}};function $T(t,e){let n,r;return function(){const s=this,i=this.animationDuration>1e3?e:this.animationDuration/10,o=+new Date,l=arguments;n&&o<n+i?(clearTimeout(r),r=setTimeout(()=>{n=o,t.apply(s,l)},i)):(n=o,t.apply(s,l))}}const jT={name:"ParallaxContainer",provide(){const t={};return Object.defineProperty(t,"mousePosition",{enumerable:!0,get:()=>this.mousePosition}),Object.defineProperty(t,"isHovering",{enumerable:!0,get:()=>this.isHovering}),Object.defineProperty(t,"isHoverable",{enumerable:!0,get:()=>this.isHoverable}),Object.defineProperty(t,"didEnter",{enumerable:!0,get:()=>this.didEnter}),Object.defineProperty(t,"animationDuration",{enumerable:!0,get:()=>this.animationDuration}),Object.defineProperty(t,"easing",{enumerable:!0,get:()=>this.easing}),Object.defineProperty(t,"shape",{enumerable:!0,get:()=>this.shape}),{context:t}},data(){return{mousePosition:{x:0,y:0},isHovering:!1,isHoverable:!1,attemptedHover:!1,didEnter:!1,shape:null}},props:{animationDuration:{type:Number,default:1e3},easing:{type:String,default:"cubic-bezier(0.23, 1, 0.32, 1)"},tag:{type:String,default:"div"},perspective:{type:Number,default:1e3}},mounted(){this.shape=this.$el.getBoundingClientRect(),setTimeout(()=>{this.isHoverable=!0,this.attemptedHover&&this.parallaxStart()},100)},methods:{getRelativePosition(){const t=this.$el.getBoundingClientRect();return{top:t.top,left:t.left}},getMousePosition:$T(function(t){this.shape=this.$el.getBoundingClientRect(),this.mousePosition.x=t.clientX,this.mousePosition.y=t.clientY},100),parallaxStart(){this.attemptedHover=!0,this.isHoverable&&(this.isHovering=!0,this.didEnter=!1,setTimeout(()=>{this.didEnter=!0},1e3))},parallaxStop(){this.isHovering=!1,this.didEnter=!1,this.attemptedHover=!1}}};function qT(t,e,n,r,s,i){return Ce(),Qt(xi(n.tag),{onMousemove:i.getMousePosition,onMouseleave:i.parallaxStop,onMouseenter:i.parallaxStart,style:Si({perspective:`${n.perspective}px`})},{default:ze(()=>[ca(t.$slots,"default")]),_:3},40,["onMousemove","onMouseleave","onMouseenter","style"])}const HT=Jt(jT,[["render",qT]]),zT={name:"ParallaxElement",props:{parallaxStrength:{type:Number,default:10},type:{type:String,default:"translation"},tag:{type:String,default:"div"},limitX:{type:Boolean,default:!1},limitY:{type:Boolean,default:!1}},inject:["context"],computed:{transform(){const{isHovering:t,mousePosition:e,shape:n}=this.context;if(!t)return;const r=this.type==="depth"?Math.abs(this.parallaxStrength):this.parallaxStrength,s=e.x-n.left,i=e.y-n.top,o=(s-n.width/2)/(n.width/2)*r,l=(i-n.height/2)/(n.height/2)*r;let c;if(this.type==="translation")c=`translate3d(${this.limitY?0:-o}px, ${this.limitX?0:-l}px, 0)`;else if(this.type==="rotation"){let h;this.limitX?h=o*2:this.limitY?h=l*2:h=o+l,c=`rotate3d(0,0,1,${h}deg)`}else this.type==="depth"&&(c=`rotateX(${this.limitX?0:-l}deg) rotateY(${this.limitY?0:o}deg) translate3d(0,0,${this.parallaxStrength*2}px)`);return{transform:c}},transformParameters(){return{transitionProperty:"transform",transitionDuration:this.transitionDuration,transformOrigin:"center",transitionTimingFunction:this.transitionTimingFunction}},transitionDuration(){const{animationDuration:t,didEnter:e}=this.context,n=t>400?t:400;return`${e?t:n}ms`},transitionTimingFunction(){return this.context.easing}}};function WT(t,e,n,r,s,i){return Ce(),Qt(xi(n.tag),{style:Si({...i.transform,...i.transformParameters})},{default:ze(()=>[ca(t.$slots,"default")]),_:3},8,["style"])}const KT=Jt(zT,[["render",WT]]),GT={name:"TechSection",components:{ParallaxContainer:HT,ParallaxElement:KT}};function QT(t,e,n,r,s,i){const o=sn("parallax-element"),l=sn("parallax-container");return Ce(),Qt(l,null,{default:ze(()=>[de(o,{parallaxStrength:4,type:"depth",tag:"div"},{default:ze(()=>e[0]||(e[0]=[J("div",{id:"tech-Box",class:"bg-black mx-auto w-full lg:w-8/12 h-screen flex justify-center items-center px-4"},[J("div",{class:"bg-box text-white rounded-xl border border-gray-600 w-full lg:w-4/6 flex flex-col justify-center p-6"},[J("h1",{class:"font-extrabold text-2xl lg:text-3xl font-general tracking-tighter"},"Technologies"),J("p",{class:"text-gray-600 text-sm lg:text-base mt-2"}," These are the technologies that I use sometimes "),J("div",{class:"mt-5 border p-3 rounded border-gray-600 bg-black"},[J("ul",{class:"text-lg text-text"},[J("li",{class:"flex items-center"},[J("svg",{viewBox:"0 0 512 512",fill:"white",height:"1em",width:"1em",class:"mr-2"},[J("path",{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.8 10.7 5.4 21.8 11.3 33.1 17.3 14.4 7.2 26.5 16.3 38.4 25.6z"})]),nt(" React Js ")]),J("li",{class:"flex items-center"},[J("svg",{class:"mr-2",viewBox:"2 0 24 24",fill:"currentColor",height:"20",width:"20"},[J("path",{d:"M22.934 3.256a.499.499 0 00-.434-.251l-4.99-.003L17.503 3l-4-.026H13.5a.498.498 0 00-.43.245l-1.072 1.805-1.07-1.78A.498.498 0 0010.505 3l-4-.027H6.5A.48.48 0 006.399 3H1.5a.5.5 0 00-.432.752l10.5 18a.5.5 0 00.864 0l10.5-17.995a.5.5 0 00.002-.501zm-12.718.742l1.355 2.259A.5.5 0 0012 6.5h.001a.5.5 0 00.429-.245l1.353-2.28 2.83.02-3.006 4.917L12 11.54 7.394 3.979l2.822.019zM12 20.508L2.37 4h3.85l5.353 8.76a.493.493 0 00.147.142c.014.01.021.026.035.034a.5.5 0 00.672-.175l5.353-8.759 3.85.002L12 20.508z"})]),nt(" Vue Js ")]),J("li",{class:"flex items-center"},[J("svg",{class:"mr-1",fill:"none",viewBox:"0 0 15 15",height:"22",width:"22"},[J("path",{fill:"currentColor",d:"M7.5 2.5c-1.026 0-1.908.277-2.6.87-.688.59-1.137 1.447-1.387 2.516a.5.5 0 00.897.4c.316-.452.632-.723.936-.863.294-.135.611-.162.975-.065.366.098.65.386 1.095.87l.015.016c.336.365.745.81 1.305 1.156.582.359 1.305.6 2.264.6 1.026 0 1.908-.277 2.6-.87.688-.59 1.138-1.447 1.387-2.516a.5.5 0 00-.897-.4c-.316.452-.632.723-.936.863-.294.135-.611.162-.975.065-.366-.098-.65-.386-1.095-.87l-.015-.016c-.336-.365-.745-.81-1.305-1.156-.582-.359-1.305-.6-2.264-.6zM4 7c-1.026 0-1.908.277-2.6.87C.712 8.46.263 9.317.013 10.386a.5.5 0 00.897.4c.316-.452.632-.723.936-.863.294-.135.611-.162.975-.065.366.098.65.386 1.095.87l.015.016c.336.365.745.81 1.305 1.156.582.359 1.305.6 2.264.6 1.026 0 1.908-.277 2.6-.87.688-.59 1.138-1.447 1.387-2.516a.5.5 0 00-.897-.4c-.316.452-.632.723-.936.863-.294.135-.611.162-.975.065-.366-.098-.65-.386-1.095-.87l-.015-.016c-.335-.365-.745-.81-1.305-1.156C5.682 7.24 4.959 7 4 7z"})]),nt(" Tailwind ")]),J("li",{class:"flex items-center"},[J("svg",{class:"mr-1",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",height:"22",width:"22"},[J("path",{d:"M21 5 A9 3 0 0 1 12 8 A9 3 0 0 1 3 5 A9 3 0 0 1 21 5 z"}),J("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),J("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]),nt(" Node Js ")])])])])],-1)])),_:1})]),_:1})}const YT=Jt(GT,[["render",QT],["__scopeId","data-v-7f3fef81"]]),XT={name:"HomeView",components:{MainSection:IT,FunSection:BT,TechSection:YT}};function JT(t,e,n,r,s,i){const o=sn("MainSection"),l=sn("FunSection"),c=sn("TechSection");return Ce(),Xe(It,null,[de(o),de(l),de(c)],64)}const ZT=Jt(XT,[["render",JT]]);var td={};/**
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
 */const qp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},e0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,v=h&63;c||(v=64,o||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):e0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new t0;const m=i<<2|l>>4;if(r.push(m),h!==64){const v=l<<4&240|h>>2;if(r.push(v),p!==64){const x=h<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class t0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const n0=function(t){const e=qp(t);return Hp.encodeByteArray(e,!0)},Lo=function(t){return n0(t).replace(/\./g,"")},zp=function(t){try{return Hp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function r0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const s0=()=>r0().__FIREBASE_DEFAULTS__,i0=()=>{if(typeof process>"u"||typeof td>"u")return;const t=td.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},o0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zp(t[1]);return e&&JSON.parse(e)},ga=()=>{try{return s0()||i0()||o0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wp=t=>{var e,n;return(n=(e=ga())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},a0=t=>{const e=Wp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kp=()=>{var t;return(t=ga())===null||t===void 0?void 0:t.config},Gp=t=>{var e;return(e=ga())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class l0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function c0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Lo(JSON.stringify(n)),Lo(JSON.stringify(o)),""].join(".")}/**
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
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function u0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function h0(){var t;const e=(t=ga())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function d0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function f0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function p0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function g0(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function m0(){return!h0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _0(){try{return typeof indexedDB=="object"}catch{return!1}}function y0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const v0="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=v0,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?E0(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Vn(s,l,r)}}function E0(t,e){return t.replace(T0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const T0=/\{\$([^}]+)}/g;function w0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(nd(i)&&nd(o)){if(!Fo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function nd(t){return t!==null&&typeof t=="object"}/**
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
 */function Vi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function I0(t,e){const n=new b0(t,e);return n.subscribe.bind(n)}class b0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");A0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=cl),s.error===void 0&&(s.error=cl),s.complete===void 0&&(s.complete=cl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function A0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cl(){}/**
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
 */function Bt(t){return t&&t._delegate?t._delegate:t}class br{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yr="[DEFAULT]";/**
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
 */class R0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new l0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(P0(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:S0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function S0(t){return t===yr?void 0:t}function P0(t){return t.instantiationMode==="EAGER"}/**
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
 */class C0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new R0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const x0={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},k0=me.INFO,D0={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},V0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=D0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ac{constructor(e){this.name=e,this._logLevel=k0,this._logHandler=V0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?x0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const O0=(t,e)=>e.some(n=>t instanceof n);let rd,sd;function N0(){return rd||(rd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M0(){return sd||(sd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qp=new WeakMap,Ol=new WeakMap,Yp=new WeakMap,ul=new WeakMap,Rc=new WeakMap;function L0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Yn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qp.set(n,t)}).catch(()=>{}),Rc.set(e,t),e}function F0(t){if(Ol.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ol.set(t,e)}let Nl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ol.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function U0(t){Nl=t(Nl)}function B0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hl(this),e,...n);return Yp.set(r,e.sort?e.sort():[e]),Yn(r)}:M0().includes(t)?function(...e){return t.apply(hl(this),e),Yn(Qp.get(this))}:function(...e){return Yn(t.apply(hl(this),e))}}function $0(t){return typeof t=="function"?B0(t):(t instanceof IDBTransaction&&F0(t),O0(t,N0())?new Proxy(t,Nl):t)}function Yn(t){if(t instanceof IDBRequest)return L0(t);if(ul.has(t))return ul.get(t);const e=$0(t);return e!==t&&(ul.set(t,e),Rc.set(e,t)),e}const hl=t=>Rc.get(t);function j0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Yn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Yn(o.result),c.oldVersion,c.newVersion,Yn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const q0=["get","getKey","getAll","getAllKeys","count"],H0=["put","add","delete","clear"],dl=new Map;function id(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dl.get(e))return dl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=H0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||q0.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return dl.set(e,i),i}U0(t=>({...t,get:(e,n,r)=>id(e,n)||t.get(e,n,r),has:(e,n)=>!!id(e,n)||t.has(e,n)}));/**
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
 */class z0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(W0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function W0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ml="@firebase/app",od="0.10.16";/**
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
 */const Pn=new Ac("@firebase/app"),K0="@firebase/app-compat",G0="@firebase/analytics-compat",Q0="@firebase/analytics",Y0="@firebase/app-check-compat",X0="@firebase/app-check",J0="@firebase/auth",Z0="@firebase/auth-compat",ew="@firebase/database",tw="@firebase/data-connect",nw="@firebase/database-compat",rw="@firebase/functions",sw="@firebase/functions-compat",iw="@firebase/installations",ow="@firebase/installations-compat",aw="@firebase/messaging",lw="@firebase/messaging-compat",cw="@firebase/performance",uw="@firebase/performance-compat",hw="@firebase/remote-config",dw="@firebase/remote-config-compat",fw="@firebase/storage",pw="@firebase/storage-compat",gw="@firebase/firestore",mw="@firebase/vertexai",_w="@firebase/firestore-compat",yw="firebase",vw="11.0.2";/**
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
 */const Ll="[DEFAULT]",Ew={[Ml]:"fire-core",[K0]:"fire-core-compat",[Q0]:"fire-analytics",[G0]:"fire-analytics-compat",[X0]:"fire-app-check",[Y0]:"fire-app-check-compat",[J0]:"fire-auth",[Z0]:"fire-auth-compat",[ew]:"fire-rtdb",[tw]:"fire-data-connect",[nw]:"fire-rtdb-compat",[rw]:"fire-fn",[sw]:"fire-fn-compat",[iw]:"fire-iid",[ow]:"fire-iid-compat",[aw]:"fire-fcm",[lw]:"fire-fcm-compat",[cw]:"fire-perf",[uw]:"fire-perf-compat",[hw]:"fire-rc",[dw]:"fire-rc-compat",[fw]:"fire-gcs",[pw]:"fire-gcs-compat",[gw]:"fire-fst",[_w]:"fire-fst-compat",[mw]:"fire-vertex","fire-js":"fire-js",[yw]:"fire-js-all"};/**
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
 */const Uo=new Map,Tw=new Map,Fl=new Map;function ad(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cs(t){const e=t.name;if(Fl.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;Fl.set(e,t);for(const n of Uo.values())ad(n,t);for(const n of Tw.values())ad(n,t);return!0}function Sc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tn(t){return t.settings!==void 0}/**
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
 */const ww={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new Di("app","Firebase",ww);/**
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
 */class Iw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ts=vw;function Xp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ll,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Xn.create("bad-app-name",{appName:String(s)});if(n||(n=Kp()),!n)throw Xn.create("no-options");const i=Uo.get(s);if(i){if(Fo(n,i.options)&&Fo(r,i.config))return i;throw Xn.create("duplicate-app",{appName:s})}const o=new C0(s);for(const c of Fl.values())o.addComponent(c);const l=new Iw(n,r,o);return Uo.set(s,l),l}function Jp(t=Ll){const e=Uo.get(t);if(!e&&t===Ll&&Kp())return Xp();if(!e)throw Xn.create("no-app",{appName:t});return e}function Jn(t,e,n){var r;let s=(r=Ew[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(l.join(" "));return}cs(new br(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const bw="firebase-heartbeat-database",Aw=1,_i="firebase-heartbeat-store";let fl=null;function Zp(){return fl||(fl=j0(bw,Aw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_i)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xn.create("idb-open",{originalErrorMessage:t.message})})),fl}async function Rw(t){try{const n=(await Zp()).transaction(_i),r=await n.objectStore(_i).get(eg(t));return await n.done,r}catch(e){if(e instanceof Vn)Pn.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(n.message)}}}async function ld(t,e){try{const r=(await Zp()).transaction(_i,"readwrite");await r.objectStore(_i).put(e,eg(t)),await r.done}catch(n){if(n instanceof Vn)Pn.warn(n.message);else{const r=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function eg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sw=1024,Pw=30*24*60*60*1e3;class Cw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Pw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cd(),{heartbeatsToSend:r,unsentEntries:s}=xw(this._heartbeatsCache.heartbeats),i=Lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Pn.warn(n),""}}}function cd(){return new Date().toISOString().substring(0,10)}function xw(t,e=Sw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ud(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ud(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _0()?y0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ld(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ld(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ud(t){return Lo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Dw(t){cs(new br("platform-logger",e=>new z0(e),"PRIVATE")),cs(new br("heartbeat",e=>new Cw(e),"PRIVATE")),Jn(Ml,od,t),Jn(Ml,od,"esm2017"),Jn("fire-js","")}Dw("");function Pc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function tg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vw=tg,ng=new Di("auth","Firebase",tg());/**
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
 */const Bo=new Ac("@firebase/auth");function Ow(t,...e){Bo.logLevel<=me.WARN&&Bo.warn(`Auth (${Ts}): ${t}`,...e)}function vo(t,...e){Bo.logLevel<=me.ERROR&&Bo.error(`Auth (${Ts}): ${t}`,...e)}/**
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
 */function Xt(t,...e){throw Cc(t,...e)}function on(t,...e){return Cc(t,...e)}function rg(t,e,n){const r=Object.assign(Object.assign({},Vw()),{[e]:n});return new Di("auth","Firebase",r).create(e,{appName:t.name})}function Zn(t){return rg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ng.create(t,...e)}function ae(t,e,...n){if(!t)throw Cc(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vo(e),new Error(e)}function Cn(t,e){t||wn(e)}/**
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
 */function Ul(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Nw(){return hd()==="http:"||hd()==="https:"}function hd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Mw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nw()||f0()||"connection"in navigator)?navigator.onLine:!0}function Lw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Oi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=u0()||p0()}get(){return Mw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xc(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Fw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Uw=new Oi(3e4,6e4);function Pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ur(t,e,n,r,s={}){return ig(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Vi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return d0()||(h.referrerPolicy="no-referrer"),sg.fetch()(og(t,t.config.apiHost,n,l),h)})}async function ig(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Fw),e);try{const s=new $w(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw oo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw oo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw oo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw rg(t,d,h);Xt(t,d)}}catch(s){if(s instanceof Vn)throw s;Xt(t,"network-request-failed",{message:String(s)})}}async function ma(t,e,n,r,s={}){const i=await ur(t,e,n,r,s);return"mfaPendingCredential"in i&&Xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function og(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?xc(t.config,s):`${t.config.apiScheme}://${s}`}function Bw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $w{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),Uw.get())})}}function oo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}function dd(t){return t!==void 0&&t.enterprise!==void 0}class jw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Bw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qw(t,e){return ur(t,"GET","/v2/recaptchaConfig",Pr(t,e))}/**
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
 */async function Hw(t,e){return ur(t,"POST","/v1/accounts:delete",e)}async function ag(t,e){return ur(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zw(t,e=!1){const n=Bt(t),r=await n.getIdToken(e),s=kc(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:si(pl(s.auth_time)),issuedAtTime:si(pl(s.iat)),expirationTime:si(pl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pl(t){return Number(t)*1e3}function kc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=zp(n);return s?JSON.parse(s):(vo("Failed to decode base64 JWT payload"),null)}catch(s){return vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fd(t){const e=kc(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&Ww(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ww({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Kw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $o(t){var e;const n=t.auth,r=await t.getIdToken(),s=await yi(t,ag(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lg(i.providerUserInfo):[],l=Qw(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Bl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Gw(t){const e=Bt(t);await $o(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lg(t){return t.map(e=>{var{providerId:n}=e,r=Pc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Yw(t,e){const n=await ig(t,{},async()=>{const r=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=og(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",sg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Xw(t,e){return ur(t,"POST","/v2/accounts:revokeToken",Pr(t,e))}/**
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
 */class ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=fd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Yw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ts;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ts,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function Bn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Pc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Bl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await yi(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zw(this,e)}reload(){return Gw(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $o(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await yi(this,Hw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,j=(h=n.createdAt)!==null&&h!==void 0?h:void 0,B=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:q,emailVerified:W,isAnonymous:fe,providerData:pe,stsTokenManager:I}=n;ae(q&&I,e,"internal-error");const y=ts.fromJSON(this.name,I);ae(typeof q=="string",e,"internal-error"),Bn(p,e.name),Bn(m,e.name),ae(typeof W=="boolean",e,"internal-error"),ae(typeof fe=="boolean",e,"internal-error"),Bn(v,e.name),Bn(x,e.name),Bn(k,e.name),Bn(O,e.name),Bn(j,e.name),Bn(B,e.name);const w=new In({uid:q,auth:e,email:m,emailVerified:W,displayName:p,isAnonymous:fe,photoURL:x,phoneNumber:v,tenantId:k,stsTokenManager:y,createdAt:j,lastLoginAt:B});return pe&&Array.isArray(pe)&&(w.providerData=pe.map(b=>Object.assign({},b))),O&&(w._redirectEventId=O),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new ts;s.updateFromServerResponse(n);const i=new In({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $o(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?lg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ts;l.updateFromIdToken(r);const c=new In({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Bl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const pd=new Map;function bn(t){Cn(t instanceof Function,"Expected a class definition");let e=pd.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pd.set(t,e),e)}/**
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
 */class cg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cg.type="NONE";const gd=cg;/**
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
 */function Eo(t,e,n){return`firebase:${t}:${e}:${n}`}class ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ns(bn(gd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||bn(gd);const o=Eo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=In._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ns(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ns(i,e,r))}}/**
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
 */function md(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ug(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gg(e))return"Blackberry";if(mg(e))return"Webos";if(hg(e))return"Safari";if((e.includes("chrome/")||dg(e))&&!e.includes("edge/"))return"Chrome";if(pg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ug(t=_t()){return/firefox\//i.test(t)}function hg(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dg(t=_t()){return/crios\//i.test(t)}function fg(t=_t()){return/iemobile/i.test(t)}function pg(t=_t()){return/android/i.test(t)}function gg(t=_t()){return/blackberry/i.test(t)}function mg(t=_t()){return/webos/i.test(t)}function Dc(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Jw(t=_t()){var e;return Dc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zw(){return g0()&&document.documentMode===10}function _g(t=_t()){return Dc(t)||pg(t)||mg(t)||gg(t)||/windows phone/i.test(t)||fg(t)}/**
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
 */function yg(t,e=[]){let n;switch(t){case"Browser":n=md(_t());break;case"Worker":n=`${md(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${r}`}/**
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
 */class eI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function tI(t,e={}){return ur(t,"GET","/v2/passwordPolicy",Pr(t,e))}/**
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
 */const nI=6;class rI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class sI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _d(this),this.idTokenSubscription=new _d(this),this.beforeStateQueue=new eI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ng,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ns.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ag(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $o(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(Zn(this));const n=e?Bt(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tI(this),n=new rI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Di("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Xw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await ns.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ow(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ws(t){return Bt(t)}class _d{constructor(e){this.auth=e,this.observer=null,this.addObserver=I0(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _a={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iI(t){_a=t}function vg(t){return _a.loadJS(t)}function oI(){return _a.recaptchaEnterpriseScript}function aI(){return _a.gapiScript}function lI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class cI{constructor(){this.enterprise=new uI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class uI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const hI="recaptcha-enterprise",Eg="NO_RECAPTCHA";class dI{constructor(e){this.type=hI,this.auth=ws(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{qw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new jw(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;dd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Eg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new cI().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&dd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=oI();c.length!==0&&(c+=l),vg(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function yd(t,e,n,r=!1,s=!1){const i=new dI(t);let o;if(s)o=Eg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function vd(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await yd(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await yd(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function fI(t,e){const n=Sc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fo(i,e??{}))return s;Xt(s,"already-initialized")}return n.initialize({options:e})}function pI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gI(t,e,n){const r=ws(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Tg(e),{host:o,port:l}=mI(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),_I()}function Tg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mI(t){const e=Tg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ed(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ed(o)}}}function Ed(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _I(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}async function yI(t,e){return ur(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function vI(t,e){return ma(t,"POST","/v1/accounts:signInWithPassword",Pr(t,e))}/**
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
 */async function EI(t,e){return ma(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}async function TI(t,e){return ma(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}/**
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
 */class vi extends Vc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new vi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new vi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vd(e,n,"signInWithPassword",vI);case"emailLink":return EI(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vd(e,r,"signUpPassword",yI);case"emailLink":return TI(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function rs(t,e){return ma(t,"POST","/v1/accounts:signInWithIdp",Pr(t,e))}/**
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
 */const wI="http://localhost";class Ar extends Vc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Pc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ar(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rs(e,n)}buildRequest(){const e={requestUri:wI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vi(n)}return e}}/**
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
 */function II(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bI(t){const e=Hs(zs(t)).link,n=e?Hs(zs(e)).deep_link_id:null,r=Hs(zs(t)).deep_link_id;return(r?Hs(zs(r)).link:null)||r||n||e||t}class Oc{constructor(e){var n,r,s,i,o,l;const c=Hs(zs(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=II((s=c.mode)!==null&&s!==void 0?s:null);ae(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=bI(e);try{return new Oc(n)}catch{return null}}}/**
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
 */class Is{constructor(){this.providerId=Is.PROVIDER_ID}static credential(e,n){return vi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Oc.parseLink(n);return ae(r,"argument-error"),vi._fromEmailAndCode(e,r.code,r.tenantId)}}Is.PROVIDER_ID="password";Is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ni extends wg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Hn extends Ni{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
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
 */class zn extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
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
 */class Wn extends Ni{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
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
 */class Kn extends Ni{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
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
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await In._fromIdTokenResponse(e,r,s),o=Td(r);return new us({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Td(r);return new us({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Td(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class jo extends Vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,jo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new jo(e,n,r,s)}}function Ig(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?jo._fromErrorAndOperation(t,i,e,r):i})}async function AI(t,e,n=!1){const r=await yi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",r)}/**
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
 */async function RI(t,e,n=!1){const{auth:r}=t;if(Tn(r.app))return Promise.reject(Zn(r));const s="reauthenticate";try{const i=await yi(t,Ig(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=kc(i.idToken);ae(o,r,"internal-error");const{sub:l}=o;return ae(t.uid===l,r,"user-mismatch"),us._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
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
 */async function bg(t,e,n=!1){if(Tn(t.app))return Promise.reject(Zn(t));const r="signIn",s=await Ig(t,r,e),i=await us._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function SI(t,e){return bg(ws(t),e)}/**
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
 */async function PI(t){const e=ws(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function CI(t,e,n){return Tn(t.app)?Promise.reject(Zn(t)):SI(Bt(t),Is.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&PI(t),r})}function xI(t,e,n,r){return Bt(t).onIdTokenChanged(e,n,r)}function kI(t,e,n){return Bt(t).beforeAuthStateChanged(e,n)}const qo="__sak";/**
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
 */class Ag{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qo,"1"),this.storage.removeItem(qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const DI=1e3,VI=10;class Rg extends Ag{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_g(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Zw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,VI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rg.type="LOCAL";const OI=Rg;/**
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
 */class Sg extends Ag{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sg.type="SESSION";const Pg=Sg;/**
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
 */function NI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ya(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await NI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ya.receivers=[];/**
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
 */function Nc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class MI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Nc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function an(){return window}function LI(t){an().location.href=t}/**
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
 */function Cg(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function FI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BI(){return Cg()?self:null}/**
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
 */const xg="firebaseLocalStorageDb",$I=1,Ho="firebaseLocalStorage",kg="fbase_key";class Mi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function va(t,e){return t.transaction([Ho],e?"readwrite":"readonly").objectStore(Ho)}function jI(){const t=indexedDB.deleteDatabase(xg);return new Mi(t).toPromise()}function $l(){const t=indexedDB.open(xg,$I);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ho,{keyPath:kg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ho)?e(r):(r.close(),await jI(),e(await $l()))})})}async function wd(t,e,n){const r=va(t,!0).put({[kg]:e,value:n});return new Mi(r).toPromise()}async function qI(t,e){const n=va(t,!1).get(e),r=await new Mi(n).toPromise();return r===void 0?null:r.value}function Id(t,e){const n=va(t,!0).delete(e);return new Mi(n).toPromise()}const HI=800,zI=3;class Dg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $l(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ya._getInstance(BI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FI(),!this.activeServiceWorker)return;this.sender=new MI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $l();return await wd(e,qo,"1"),await Id(e,qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Id(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=va(s,!1).getAll();return new Mi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dg.type="LOCAL";const WI=Dg;new Oi(3e4,6e4);/**
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
 */function KI(t,e){return e?bn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mc extends Vc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GI(t){return bg(t.auth,new Mc(t),t.bypassAuthState)}function QI(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),RI(n,new Mc(t),t.bypassAuthState)}async function YI(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),AI(n,new Mc(t),t.bypassAuthState)}/**
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
 */class Vg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GI;case"linkViaPopup":case"linkViaRedirect":return YI;case"reauthViaPopup":case"reauthViaRedirect":return QI;default:Xt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const XI=new Oi(2e3,1e4);class Gr extends Vg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Nc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XI.get())};e()}}Gr.currentPopupAction=null;/**
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
 */const JI="pendingRedirect",To=new Map;class ZI extends Vg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const r=await eb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eb(t,e){const n=rb(e),r=nb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function tb(t,e){To.set(t._key(),e)}function nb(t){return bn(t._redirectPersistence)}function rb(t){return Eo(JI,t.config.apiKey,t.name)}async function sb(t,e,n=!1){if(Tn(t.app))return Promise.reject(Zn(t));const r=ws(t),s=KI(r,e),o=await new ZI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ib=10*60*1e3;class ob{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ab(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Og(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ib&&this.cachedEventUids.clear(),this.cachedEventUids.has(bd(e))}saveEventToCache(e){this.cachedEventUids.add(bd(e)),this.lastProcessedEventTime=Date.now()}}function bd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Og({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ab(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Og(t);default:return!1}}/**
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
 */async function lb(t,e={}){return ur(t,"GET","/v1/projects",e)}/**
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
 */const cb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ub=/^https?/;async function hb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lb(t);for(const n of e)try{if(db(n))return}catch{}Xt(t,"unauthorized-domain")}function db(t){const e=Ul(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ub.test(n))return!1;if(cb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const fb=new Oi(3e4,6e4);function Ad(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pb(t){return new Promise((e,n)=>{var r,s,i;function o(){Ad(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ad(),n(on(t,"network-request-failed"))},timeout:fb.get()})}if(!((s=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=an().gapi)===null||i===void 0)&&i.load)o();else{const l=lI("iframefcb");return an()[l]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},vg(`${aI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw wo=null,e})}let wo=null;function gb(t){return wo=wo||pb(t),wo}/**
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
 */const mb=new Oi(5e3,15e3),_b="__/auth/iframe",yb="emulator/auth/iframe",vb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Eb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tb(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xc(e,yb):`https://${t.config.authDomain}/${_b}`,r={apiKey:e.apiKey,appName:t.name,v:Ts},s=Eb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vi(r).slice(1)}`}async function wb(t){const e=await gb(t),n=an().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:Tb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=an().setTimeout(()=>{i(o)},mb.get());function c(){an().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Ib={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bb=500,Ab=600,Rb="_blank",Sb="http://localhost";class Rd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pb(t,e,n,r=bb,s=Ab){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Ib),{width:r.toString(),height:s.toString(),top:i,left:o}),h=_t().toLowerCase();n&&(l=dg(h)?Rb:n),ug(h)&&(e=e||Sb,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[v,x])=>`${m}${v}=${x},`,"");if(Jw(h)&&l!=="_self")return Cb(e||"",l),new Rd(null);const p=window.open(e||"",l,d);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Rd(p)}function Cb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xb="__/auth/handler",kb="emulator/auth/handler",Db=encodeURIComponent("fac");async function Sd(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ts,eventId:s};if(e instanceof wg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",w0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ni){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${Db}=${encodeURIComponent(c)}`:"";return`${Vb(t)}?${Vi(l).slice(1)}${h}`}function Vb({config:t}){return t.emulator?xc(t,kb):`https://${t.authDomain}/${xb}`}/**
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
 */const gl="webStorageSupport";class Ob{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pg,this._completeRedirectFn=sb,this._overrideRedirectResult=tb}async _openPopup(e,n,r,s){var i;Cn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Sd(e,n,r,Ul(),s);return Pb(e,o,Nc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Sd(e,n,r,Ul(),s);return LI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wb(e),r=new ob(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gl,{type:gl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[gl];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _g()||hg()||Dc()}}const Nb=Ob;var Pd="@firebase/auth",Cd="1.8.1";/**
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
 */class Mb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Lb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fb(t){cs(new br("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yg(t)},h=new sI(r,s,i,c);return pI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cs(new br("auth-internal",e=>{const n=ws(e.getProvider("auth").getImmediate());return(r=>new Mb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(Pd,Cd,Lb(t)),Jn(Pd,Cd,"esm2017")}/**
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
 */const Ub=5*60,Bb=Gp("authIdTokenMaxAge")||Ub;let xd=null;const $b=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bb)return;const s=n==null?void 0:n.token;xd!==s&&(xd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ng(t=Jp()){const e=Sc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fI(t,{popupRedirectResolver:Nb,persistence:[WI,OI,Pg]}),r=Gp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=$b(i.toString());kI(n,o,()=>o(n.currentUser)),xI(n,l=>o(l))}}const s=Wp("auth");return s&&gI(n,`http://${s}`),n}function jb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}iI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",jb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fb("Browser");const qb={props:{modelValue:{type:String,default:""},type:{type:String,default:"text"},placeholder:{type:String,default:""},inputClass:{type:String,default:"border bg-box text-white border-gray-300 p-3  focus:ring-2 focus:ring-blue-400 outline-none"}},data(){return{localValue:this.modelValue}},watch:{modelValue(t){this.localValue=t}},methods:{updateValue(){this.$emit("update:modelValue",this.localValue)}}},Hb=["type","placeholder"];function zb(t,e,n,r,s,i){return Ce(),Xe("div",null,[po(J("input",{type:n.type,placeholder:n.placeholder,class:Pi(n.inputClass),"onUpdate:modelValue":e[0]||(e[0]=o=>s.localValue=o),onInput:e[1]||(e[1]=(...o)=>i.updateValue&&i.updateValue(...o))},null,42,Hb),[[Wv,s.localValue]])])}const kd=Jt(qb,[["render",zb],["__scopeId","data-v-84b34ff9"]]),Wb={class:"bg-black mx-auto w-10/12 sm:w-8/12 font-general flex items-center justify-center",style:{height:"calc(100vh - 9rem)"}},Kb={class:"bg-black shadow-md p-8 rounded-lg w-full max-w-md"},Gb={class:"flex flex-col justify-center items-center"},Qb={key:0,class:"text-white"},Yb={class:"flex justify-center"},Xb={__name:"LoginSection",setup(t){const e=An(""),n=An(""),r=An(""),s=()=>{CI(Ng(),e.value,n.value).then(i=>{console.log("Successfully Signin",i),uu.push("/admin")}).catch(i=>{switch(console.log(i.code),i.code){case"auth/invalid-email":r.value="Invalid Email";break;case"auth/user-not-found":r.value="No account found";break;default:r.value="Emial or password was Incorrect";break}alert(i.message)})};return(i,o)=>(Ce(),Xe("div",Wb,[J("div",Kb,[o[2]||(o[2]=J("h1",{class:"text-xl sm:text-2xl font-extrabold text-center text-white mb-6"}," Login to GMBlog's ",-1)),J("form",{class:"flex flex-col space-y-4",onSubmit:Sp(s,["prevent"])},[J("div",Gb,[de(kd,{type:"email",placeholder:"Email",modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l)},null,8,["modelValue"]),de(kd,{type:"password",placeholder:"Password",modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=l=>n.value=l)},null,8,["modelValue"])]),r.value?(Ce(),Xe("p",Qb,zt(r.value),1)):Tp("",!0),J("div",Yb,[de(bc,{label:"Login"})])],32)])]))}},Jb={name:"LoginView",components:{LoginSection:Xb}};function Zb(t,e,n,r,s,i){const o=sn("LoginSection");return Ce(),Qt(o)}const eA=Jt(Jb,[["render",Zb]]);var Dd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tr,Mg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function w(){}w.prototype=y.prototype,I.D=y.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(b,A,R){for(var T=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)T[yt-2]=arguments[yt];return y.prototype[A].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,w){w||(w=0);var b=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)b[A]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(A=0;16>A;++A)b[A]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=I.g[0],w=I.g[1],A=I.g[2];var R=I.g[3],T=y+(R^w&(A^R))+b[0]+3614090360&4294967295;y=w+(T<<7&4294967295|T>>>25),T=R+(A^y&(w^A))+b[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(w^R&(y^w))+b[2]+606105819&4294967295,A=R+(T<<17&4294967295|T>>>15),T=w+(y^A&(R^y))+b[3]+3250441966&4294967295,w=A+(T<<22&4294967295|T>>>10),T=y+(R^w&(A^R))+b[4]+4118548399&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(A^y&(w^A))+b[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(w^R&(y^w))+b[6]+2821735955&4294967295,A=R+(T<<17&4294967295|T>>>15),T=w+(y^A&(R^y))+b[7]+4249261313&4294967295,w=A+(T<<22&4294967295|T>>>10),T=y+(R^w&(A^R))+b[8]+1770035416&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(A^y&(w^A))+b[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(w^R&(y^w))+b[10]+4294925233&4294967295,A=R+(T<<17&4294967295|T>>>15),T=w+(y^A&(R^y))+b[11]+2304563134&4294967295,w=A+(T<<22&4294967295|T>>>10),T=y+(R^w&(A^R))+b[12]+1804603682&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(A^y&(w^A))+b[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(w^R&(y^w))+b[14]+2792965006&4294967295,A=R+(T<<17&4294967295|T>>>15),T=w+(y^A&(R^y))+b[15]+1236535329&4294967295,w=A+(T<<22&4294967295|T>>>10),T=y+(A^R&(w^A))+b[1]+4129170786&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^A&(y^w))+b[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^w&(R^y))+b[11]+643717713&4294967295,A=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(A^R))+b[0]+3921069994&4294967295,w=A+(T<<20&4294967295|T>>>12),T=y+(A^R&(w^A))+b[5]+3593408605&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^A&(y^w))+b[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^w&(R^y))+b[15]+3634488961&4294967295,A=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(A^R))+b[4]+3889429448&4294967295,w=A+(T<<20&4294967295|T>>>12),T=y+(A^R&(w^A))+b[9]+568446438&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^A&(y^w))+b[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^w&(R^y))+b[3]+4107603335&4294967295,A=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(A^R))+b[8]+1163531501&4294967295,w=A+(T<<20&4294967295|T>>>12),T=y+(A^R&(w^A))+b[13]+2850285829&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^A&(y^w))+b[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^w&(R^y))+b[7]+1735328473&4294967295,A=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(A^R))+b[12]+2368359562&4294967295,w=A+(T<<20&4294967295|T>>>12),T=y+(w^A^R)+b[5]+4294588738&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^A)+b[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^w)+b[11]+1839030562&4294967295,A=R+(T<<16&4294967295|T>>>16),T=w+(A^R^y)+b[14]+4259657740&4294967295,w=A+(T<<23&4294967295|T>>>9),T=y+(w^A^R)+b[1]+2763975236&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^A)+b[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^w)+b[7]+4139469664&4294967295,A=R+(T<<16&4294967295|T>>>16),T=w+(A^R^y)+b[10]+3200236656&4294967295,w=A+(T<<23&4294967295|T>>>9),T=y+(w^A^R)+b[13]+681279174&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^A)+b[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^w)+b[3]+3572445317&4294967295,A=R+(T<<16&4294967295|T>>>16),T=w+(A^R^y)+b[6]+76029189&4294967295,w=A+(T<<23&4294967295|T>>>9),T=y+(w^A^R)+b[9]+3654602809&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^A)+b[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^w)+b[15]+530742520&4294967295,A=R+(T<<16&4294967295|T>>>16),T=w+(A^R^y)+b[2]+3299628645&4294967295,w=A+(T<<23&4294967295|T>>>9),T=y+(A^(w|~R))+b[0]+4096336452&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~A))+b[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~w))+b[14]+2878612391&4294967295,A=R+(T<<15&4294967295|T>>>17),T=w+(R^(A|~y))+b[5]+4237533241&4294967295,w=A+(T<<21&4294967295|T>>>11),T=y+(A^(w|~R))+b[12]+1700485571&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~A))+b[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~w))+b[10]+4293915773&4294967295,A=R+(T<<15&4294967295|T>>>17),T=w+(R^(A|~y))+b[1]+2240044497&4294967295,w=A+(T<<21&4294967295|T>>>11),T=y+(A^(w|~R))+b[8]+1873313359&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~A))+b[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~w))+b[6]+2734768916&4294967295,A=R+(T<<15&4294967295|T>>>17),T=w+(R^(A|~y))+b[13]+1309151649&4294967295,w=A+(T<<21&4294967295|T>>>11),T=y+(A^(w|~R))+b[4]+4149444226&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~A))+b[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~w))+b[2]+718787259&4294967295,A=R+(T<<15&4294967295|T>>>17),T=w+(R^(A|~y))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var w=y-this.blockSize,b=this.B,A=this.h,R=0;R<y;){if(A==0)for(;R<=w;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<y;)if(b[A++]=I.charCodeAt(R++),A==this.blockSize){s(this,b),A=0;break}}else for(;R<y;)if(b[A++]=I[R++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var w=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=w&255,w/=256;for(this.u(I),I=Array(16),y=w=0;4>y;++y)for(var b=0;32>b;b+=8)I[w++]=this.g[y]>>>b&255;return I};function i(I,y){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=y(I)}function o(I,y){this.h=y;for(var w=[],b=!0,A=I.length-1;0<=A;A--){var R=I[A]|0;b&&R==y||(w[A]=R,b=!1)}this.g=w}var l={};function c(I){return-128<=I&&128>I?i(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return O(h(-I));for(var y=[],w=1,b=0;I>=w;b++)y[b]=I/w|0,w*=4294967296;return new o(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return O(d(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(y,8)),b=p,A=0;A<I.length;A+=8){var R=Math.min(8,I.length-A),T=parseInt(I.substring(A,A+R),y);8>R?(R=h(Math.pow(y,R)),b=b.j(R).add(h(T))):(b=b.j(w),b=b.add(h(T)))}return b}var p=c(0),m=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-O(this).m();for(var I=0,y=1,w=0;w<this.g.length;w++){var b=this.i(w);I+=(0<=b?b:4294967296+b)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(k(this))return"-"+O(this).toString(I);for(var y=h(Math.pow(I,6)),w=this,b="";;){var A=W(w,y).g;w=j(w,A.j(y));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=A,x(w))return R+b;for(;6>R.length;)R="0"+R;b=R+b}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=j(this,I),k(I)?-1:x(I)?0:1};function O(I){for(var y=I.g.length,w=[],b=0;b<y;b++)w[b]=~I.g[b];return new o(w,~I.h).add(m)}t.abs=function(){return k(this)?O(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],b=0,A=0;A<=y;A++){var R=b+(this.i(A)&65535)+(I.i(A)&65535),T=(R>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);b=T>>>16,R&=65535,T&=65535,w[A]=T<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function j(I,y){return I.add(O(y))}t.j=function(I){if(x(this)||x(I))return p;if(k(this))return k(I)?O(this).j(O(I)):O(O(this).j(I));if(k(I))return O(this.j(O(I)));if(0>this.l(v)&&0>I.l(v))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,w=[],b=0;b<2*y;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(var A=0;A<I.g.length;A++){var R=this.i(b)>>>16,T=this.i(b)&65535,yt=I.i(A)>>>16,Dt=I.i(A)&65535;w[2*b+2*A]+=T*Dt,B(w,2*b+2*A),w[2*b+2*A+1]+=R*Dt,B(w,2*b+2*A+1),w[2*b+2*A+1]+=T*yt,B(w,2*b+2*A+1),w[2*b+2*A+2]+=R*yt,B(w,2*b+2*A+2)}for(b=0;b<y;b++)w[b]=w[2*b+1]<<16|w[2*b];for(b=y;b<2*y;b++)w[b]=0;return new o(w,0)};function B(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function q(I,y){this.g=I,this.h=y}function W(I,y){if(x(y))throw Error("division by zero");if(x(I))return new q(p,p);if(k(I))return y=W(O(I),y),new q(O(y.g),O(y.h));if(k(y))return y=W(I,O(y)),new q(O(y.g),y.h);if(30<I.g.length){if(k(I)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,b=y;0>=b.l(I);)w=fe(w),b=fe(b);var A=pe(w,1),R=pe(b,1);for(b=pe(b,2),w=pe(w,2);!x(b);){var T=R.add(b);0>=T.l(I)&&(A=A.add(w),R=T),b=pe(b,1),w=pe(w,1)}return y=j(I,A.j(y)),new q(A,y)}for(A=p;0<=I.l(y);){for(w=Math.max(1,Math.floor(I.m()/y.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),R=h(w),T=R.j(y);k(T)||0<T.l(I);)w-=b,R=h(w),T=R.j(y);x(R)&&(R=m),A=A.add(R),I=j(I,T)}return new q(A,I)}t.A=function(I){return W(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],b=0;b<y;b++)w[b]=this.i(b)&I.i(b);return new o(w,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],b=0;b<y;b++)w[b]=this.i(b)|I.i(b);return new o(w,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],b=0;b<y;b++)w[b]=this.i(b)^I.i(b);return new o(w,this.h^I.h)};function fe(I){for(var y=I.g.length+1,w=[],b=0;b<y;b++)w[b]=I.i(b)<<1|I.i(b-1)>>>31;return new o(w,I.h)}function pe(I,y){var w=y>>5;y%=32;for(var b=I.g.length-w,A=[],R=0;R<b;R++)A[R]=0<y?I.i(R+w)>>>y|I.i(R+w+1)<<32-y:I.i(R+w);return new o(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Mg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Tr=o}).apply(typeof Dd<"u"?Dd:typeof self<"u"?self:typeof window<"u"?window:{});var ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lg,Ws,Fg,Io,jl,Ug,Bg,$g;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ao=="object"&&ao];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in f))break e;f=f[S]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,S={next:function(){if(!g&&f<a.length){var C=f++;return{value:u(C,a[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function m(a,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function v(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function x(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,S,C){for(var z=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)z[ke-2]=arguments[ke];return u.prototype[S].apply(g,z)}}function k(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function O(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const S=a.length||0,C=g.length||0;a.length=S+C;for(let z=0;z<C;z++)a[S+z]=g[z]}else a.push(g)}}class j{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var fe=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function pe(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function I(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function y(a){const u={};for(const f in a)u[f]=a[f];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,u){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)a[f]=g[f];for(let C=0;C<w.length;C++)f=w[C],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function R(a){l.setTimeout(()=>{throw a},0)}function T(){var a=St;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class yt{constructor(){this.h=this.g=null}add(u,f){const g=Dt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Dt=new j(()=>new qe,a=>a.reset());class qe{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,ge=!1,St=new yt,$t=()=>{const a=l.Promise.resolve(void 0);ve=()=>{a.then(Vt)}};var Vt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){R(f)}var u=Dt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ge=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var On=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function Zt(a,u){if(Fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(fe){e:{try{W(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:bt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Zt.aa.h.call(this)}}x(Zt,Fe);var bt={2:"touch",3:"pen",4:"mouse"};Zt.prototype.h=function(){Zt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),Y=0;function G(a,u,f,g,S){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=S,this.key=++Y,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ee(a){this.src=a,this.g={},this.h=0}Ee.prototype.add=function(a,u,f,g,S){var C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);var z=_(a,u,g,S);return-1<z?(u=a[z],f||(u.fa=!1)):(u=new G(u,this.src,C,!!g,S),u.fa=f,a.push(u)),u};function xe(a,u){var f=u.type;if(f in a.g){var g=a.g[f],S=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=S)&&Array.prototype.splice.call(g,S,1),C&&(Z(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function _(a,u,f,g){for(var S=0;S<a.length;++S){var C=a[S];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return S}return-1}var E="closure_lm_"+(1e6*Math.random()|0),P={};function M(a,u,f,g,S){if(Array.isArray(u)){for(var C=0;C<u.length;C++)M(a,u[C],f,g,S);return null}return f=te(f),a&&a[V]?a.K(u,f,h(g)?!!g.capture:!!g,S):D(a,u,f,!1,g,S)}function D(a,u,f,g,S,C){if(!u)throw Error("Invalid event type");var z=h(S)?!!S.capture:!!S,ke=re(a);if(ke||(a[E]=ke=new Ee(a)),f=ke.add(u,f,g,z,C),f.proxy)return f;if(g=F(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)On||(S=z),S===void 0&&(S=!1),a.addEventListener(u.toString(),g,S);else if(a.attachEvent)a.attachEvent($(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function F(){function a(f){return u.call(a.src,a.listener,f)}const u=U;return a}function K(a,u,f,g,S){if(Array.isArray(u))for(var C=0;C<u.length;C++)K(a,u[C],f,g,S);else g=h(g)?!!g.capture:!!g,f=te(f),a&&a[V]?(a=a.i,u=String(u).toString(),u in a.g&&(C=a.g[u],f=_(C,f,g,S),-1<f&&(Z(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete a.g[u],a.h--)))):a&&(a=re(a))&&(u=a.g[u.toString()],a=-1,u&&(a=_(u,f,g,S)),(f=-1<a?u[a]:null)&&H(f))}function H(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[V])xe(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent($(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=re(u))?(xe(f,a),f.h==0&&(f.src=null,u[E]=null)):Z(a)}}}function $(a){return a in P?P[a]:P[a]="on"+a}function U(a,u){if(a.da)a=!0;else{u=new Zt(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&H(a),a=f.call(g,u)}return a}function re(a){return a=a[E],a instanceof Ee?a:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(a){return typeof a=="function"?a:(a[Q]||(a[Q]=function(u){return a.handleEvent(u)}),a[Q])}function ee(){Le.call(this),this.i=new Ee(this),this.M=this,this.F=null}x(ee,Le),ee.prototype[V]=!0,ee.prototype.removeEventListener=function(a,u,f,g){K(this,a,u,f,g)};function ie(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new Fe(u,a);else if(u instanceof Fe)u.target=u.target||a;else{var S=u;u=new Fe(g,a),b(u,S)}if(S=!0,f)for(var C=f.length-1;0<=C;C--){var z=u.g=f[C];S=be(z,g,!0,u)&&S}if(z=u.g=a,S=be(z,g,!0,u)&&S,S=be(z,g,!1,u)&&S,f)for(C=0;C<f.length;C++)z=u.g=f[C],S=be(z,g,!1,u)&&S}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)Z(f[g]);delete a.g[u],a.h--}}this.F=null},ee.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},ee.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function be(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,C=0;C<u.length;++C){var z=u[C];if(z&&!z.da&&z.capture==f){var ke=z.listener,et=z.ha||z.src;z.fa&&xe(a.i,z),S=ke.call(et,g)!==!1&&S}}return S&&!g.defaultPrevented}function we(a,u,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function ot(a){a.g=we(()=>{a.g=null,a.i&&(a.i=!1,ot(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Qe extends Le{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ot(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ze(a){Le.call(this),this.h=a,this.g={}}x(Ze,Le);var at=[];function Nn(a){pe(a.g,function(u,f){this.g.hasOwnProperty(f)&&H(u)},a),a.g={}}Ze.prototype.N=function(){Ze.aa.N.call(this),Nn(this)},Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=l.JSON.stringify,vt=l.JSON.parse,Ot=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Or(){}Or.prototype.h=null;function du(a){return a.h||(a.h=a.i())}function fu(){}var Ps={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Na(){Fe.call(this,"d")}x(Na,Fe);function Ma(){Fe.call(this,"c")}x(Ma,Fe);var hr={},pu=null;function $i(){return pu=pu||new ee}hr.La="serverreachability";function gu(a){Fe.call(this,hr.La,a)}x(gu,Fe);function Cs(a){const u=$i();ie(u,new gu(u))}hr.STAT_EVENT="statevent";function mu(a,u){Fe.call(this,hr.STAT_EVENT,a),this.stat=u}x(mu,Fe);function Et(a){const u=$i();ie(u,new mu(u,a))}hr.Ma="timingevent";function _u(a,u){Fe.call(this,hr.Ma,a),this.size=u}x(_u,Fe);function xs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function ks(){this.g=!0}ks.prototype.xa=function(){this.g=!1};function c_(a,u,f,g,S,C){a.info(function(){if(a.g)if(C)for(var z="",ke=C.split("&"),et=0;et<ke.length;et++){var Ie=ke[et].split("=");if(1<Ie.length){var lt=Ie[0];Ie=Ie[1];var ct=lt.split("_");z=2<=ct.length&&ct[1]=="type"?z+(lt+"="+Ie+"&"):z+(lt+"=redacted&")}}else z=null;else z=C;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+f+`
`+z})}function u_(a,u,f,g,S,C,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+f+`
`+C+" "+z})}function Nr(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+d_(a,f)+(g?" "+g:"")})}function h_(a,u){a.info(function(){return"TIMEOUT: "+u})}ks.prototype.info=function(){};function d_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var z=1;z<S.length;z++)S[z]=""}}}}return Vr(f)}catch{return u}}var ji={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},La;function qi(){}x(qi,Or),qi.prototype.g=function(){return new XMLHttpRequest},qi.prototype.i=function(){return{}},La=new qi;function Mn(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new Ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vu}function vu(){this.i=null,this.g="",this.h=!1}var Eu={},Fa={};function Ua(a,u,f){a.L=1,a.v=Ki(fn(u)),a.m=f,a.P=!0,Tu(a,null)}function Tu(a,u){a.F=Date.now(),Hi(a),a.A=fn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Nu(f.i,"t",g),a.C=0,f=a.j.J,a.h=new vu,a.g=Zu(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Qe(m(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(at[0]=S.toString()),S=at);for(var C=0;C<S.length;C++){var z=M(f,S[C],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Cs(),c_(a.i,a.u,a.A,a.l,a.R,a.m)}Mn.prototype.ca=function(a){a=a.target;const u=this.M;u&&pn(a)==3?u.j():this.Y(a)},Mn.prototype.Y=function(a){try{if(a==this.g)e:{const ct=pn(this.g);var u=this.g.Ba();const Fr=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||ju(this.g)))){this.J||ct!=4||u==7||(u==8||0>=Fr?Cs(3):Cs(2)),Ba(this);var f=this.g.Z();this.X=f;t:if(wu(this)){var g=ju(this.g);a="";var S=g.length,C=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dr(this),Ds(this);var z="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(C&&u==S-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,u_(this.i,this.u,this.A,this.l,this.R,ct,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,et=this.g;if((ke=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(ke)){var Ie=ke;break t}}Ie=null}if(f=Ie)Nr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$a(this,f);else{this.o=!1,this.s=3,Et(12),dr(this),Ds(this);break e}}if(this.P){f=!0;let jt;for(;!this.J&&this.C<z.length;)if(jt=f_(this,z),jt==Fa){ct==4&&(this.s=4,Et(14),f=!1),Nr(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==Eu){this.s=4,Et(15),Nr(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Nr(this.i,this.l,jt,null),$a(this,jt);if(wu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||z.length!=0||this.h.h||(this.s=1,Et(16),f=!1),this.o=this.o&&f,!f)Nr(this.i,this.l,z,"[Invalid Chunked Response]"),dr(this),Ds(this);else if(0<z.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Ka(lt),lt.M=!0,Et(11))}}else Nr(this.i,this.l,z,null),$a(this,z);ct==4&&dr(this),this.o&&!this.J&&(ct==4?Qu(this.j,this):(this.o=!1,Hi(this)))}else x_(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),dr(this),Ds(this)}}}catch{}finally{}};function wu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function f_(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?Fa:(f=Number(u.substring(f,g)),isNaN(f)?Eu:(g+=1,g+f>u.length?Fa:(u=u.slice(g,g+f),a.C=g+f,u)))}Mn.prototype.cancel=function(){this.J=!0,dr(this)};function Hi(a){a.S=Date.now()+a.I,Iu(a,a.I)}function Iu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=xs(m(a.ba,a),u)}function Ba(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Mn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(h_(this.i,this.A),this.L!=2&&(Cs(),Et(17)),dr(this),this.s=2,Ds(this)):Iu(this,this.S-a)};function Ds(a){a.j.G==0||a.J||Qu(a.j,a)}function dr(a){Ba(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Nn(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function $a(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||ja(f.h,a))){if(!a.K&&ja(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Zi(f),Xi(f);else break e;Wa(f),Et(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=xs(m(f.Za,f),6e3));if(1>=Ru(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else pr(f,11)}else if((a.K||f.g==a)&&Zi(f),!B(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let Ie=S[u];if(f.T=Ie[0],Ie=Ie[1],f.G==2)if(Ie[0]=="c"){f.K=Ie[1],f.ia=Ie[2];const lt=Ie[3];lt!=null&&(f.la=lt,f.j.info("VER="+f.la));const ct=Ie[4];ct!=null&&(f.Aa=ct,f.j.info("SVER="+f.Aa));const Fr=Ie[5];Fr!=null&&typeof Fr=="number"&&0<Fr&&(g=1.5*Fr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const jt=a.g;if(jt){const to=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(to){var C=g.h;C.g||to.indexOf("spdy")==-1&&to.indexOf("quic")==-1&&to.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(qa(C,C.h),C.h=null))}if(g.D){const Ga=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ga&&(g.ya=Ga,Ne(g.I,g.D,Ga))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=a;if(g.qa=Ju(g,g.J?g.ia:null,g.W),z.K){Su(g.h,z);var ke=z,et=g.L;et&&(ke.I=et),ke.B&&(Ba(ke),Hi(ke)),g.g=z}else Ku(g);0<f.i.length&&Ji(f)}else Ie[0]!="stop"&&Ie[0]!="close"||pr(f,7);else f.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?pr(f,7):za(f):Ie[0]!="noop"&&f.l&&f.l.ta(Ie),f.v=0)}}Cs(4)}catch{}}var p_=class{constructor(a,u){this.g=a,this.map=u}};function bu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Au(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ru(a){return a.h?1:a.g?a.g.size:0}function ja(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function qa(a,u){a.g?a.g.add(u):a.h=u}function Su(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}bu.prototype.cancel=function(){if(this.i=Pu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Pu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return k(a.i)}function g_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function m_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function Cu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=m_(a),g=g_(a),S=g.length,C=0;C<S;C++)u.call(void 0,g[C],f&&f[C],a)}var xu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function __(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),S=null;if(0<=g){var C=a[f].substring(0,g);S=a[f].substring(g+1)}else C=a[f];u(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function fr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof fr){this.h=a.h,zi(this,a.j),this.o=a.o,this.g=a.g,Wi(this,a.s),this.l=a.l;var u=a.i,f=new Ns;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),ku(this,f),this.m=a.m}else a&&(u=String(a).match(xu))?(this.h=!1,zi(this,u[1]||"",!0),this.o=Vs(u[2]||""),this.g=Vs(u[3]||"",!0),Wi(this,u[4]),this.l=Vs(u[5]||"",!0),ku(this,u[6]||"",!0),this.m=Vs(u[7]||"")):(this.h=!1,this.i=new Ns(null,this.h))}fr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Os(u,Du,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Os(u,Du,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Os(f,f.charAt(0)=="/"?E_:v_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Os(f,w_)),a.join("")};function fn(a){return new fr(a)}function zi(a,u,f){a.j=f?Vs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Wi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function ku(a,u,f){u instanceof Ns?(a.i=u,I_(a.i,a.h)):(f||(u=Os(u,T_)),a.i=new Ns(u,a.h))}function Ne(a,u,f){a.i.set(u,f)}function Ki(a){return Ne(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Vs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Os(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,y_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function y_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Du=/[#\/\?@]/g,v_=/[#\?:]/g,E_=/[#\?]/g,T_=/[#\?@]/g,w_=/#/g;function Ns(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Ln(a){a.g||(a.g=new Map,a.h=0,a.i&&__(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ns.prototype,t.add=function(a,u){Ln(this),this.i=null,a=Mr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Vu(a,u){Ln(a),u=Mr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Ou(a,u){return Ln(a),u=Mr(a,u),a.g.has(u)}t.forEach=function(a,u){Ln(this),this.g.forEach(function(f,g){f.forEach(function(S){a.call(u,S,g,this)},this)},this)},t.na=function(){Ln(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const S=a[g];for(let C=0;C<S.length;C++)f.push(u[g])}return f},t.V=function(a){Ln(this);let u=[];if(typeof a=="string")Ou(this,a)&&(u=u.concat(this.g.get(Mr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Ln(this),this.i=null,a=Mr(this,a),Ou(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Nu(a,u,f){Vu(a,u),0<f.length&&(a.i=null,a.g.set(Mr(a,u),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const C=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var S=C;z[g]!==""&&(S+="="+encodeURIComponent(String(z[g]))),a.push(S)}}return this.i=a.join("&")};function Mr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function I_(a,u){u&&!a.j&&(Ln(a),a.i=null,a.g.forEach(function(f,g){var S=g.toLowerCase();g!=S&&(Vu(this,g),Nu(this,S,f))},a)),a.j=u}function b_(a,u){const f=new ks;if(l.Image){const g=new Image;g.onload=v(Fn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=v(Fn,f,"TestLoadImage: error",!1,u,g),g.onabort=v(Fn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=v(Fn,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function A_(a,u){const f=new ks,g=new AbortController,S=setTimeout(()=>{g.abort(),Fn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(C=>{clearTimeout(S),C.ok?Fn(f,"TestPingServer: ok",!0,u):Fn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Fn(f,"TestPingServer: error",!1,u)})}function Fn(a,u,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function R_(){this.g=new Ot}function S_(a,u,f){const g=f||"";try{Cu(a,function(S,C){let z=S;h(S)&&(z=Vr(S)),u.push(g+C+"="+encodeURIComponent(z))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function Gi(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Gi,Or),Gi.prototype.g=function(){return new Qi(this.l,this.j)},Gi.prototype.i=function(a){return function(){return a}}({});function Qi(a,u){ee.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Qi,ee),t=Qi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ls(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ms(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ms(this):Ls(this),this.readyState==3&&Mu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ms(this))},t.Qa=function(a){this.g&&(this.response=a,Ms(this))},t.ga=function(){this.g&&Ms(this)};function Ms(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ls(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Lu(a){let u="";return pe(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ha(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Lu(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ne(a,u,f))}function Be(a){ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Be,ee);var P_=/^https?$/i,C_=["POST","PUT"];t=Be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():La.g(),this.v=this.o?du(this.o):du(La),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){Fu(this,C);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),S=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(C_,u,void 0))||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,z]of f)this.g.setRequestHeader(C,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$u(this),this.u=!0,this.g.send(a),this.u=!1}catch(C){Fu(this,C)}};function Fu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Uu(a),Yi(a)}function Uu(a){a.A||(a.A=!0,ie(a,"complete"),ie(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ie(this,"complete"),ie(this,"abort"),Yi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yi(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Bu(this):this.bb())},t.bb=function(){Bu(this)};function Bu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||pn(a)!=4||a.Z()!=2)){if(a.u&&pn(a)==4)we(a.Ea,0,a);else if(ie(a,"readystatechange"),pn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=z===0){var S=String(a.D).match(xu)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),g=!P_.test(S?S.toLowerCase():"")}f=g}if(f)ie(a,"complete"),ie(a,"success");else{a.m=6;try{var C=2<pn(a)?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.Z()+"]",Uu(a)}}finally{Yi(a)}}}}function Yi(a,u){if(a.g){$u(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ie(a,"ready");try{f.onreadystatechange=g}catch{}}}function $u(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),vt(u)}};function ju(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function x_(a){const u={};a=(a.g&&2<=pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(B(a[g]))continue;var f=A(a[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[S]||[];u[S]=C,C.push(f)}I(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fs(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function qu(a){this.Aa=0,this.i=[],this.j=new ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fs("baseRetryDelayMs",5e3,a),this.cb=Fs("retryDelaySeedMs",1e4,a),this.Wa=Fs("forwardChannelMaxRetries",2,a),this.wa=Fs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new bu(a&&a.concurrentRequestLimit),this.Da=new R_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=qu.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){Et(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Ju(this,null,this.W),Ji(this)};function za(a){if(Hu(a),a.G==3){var u=a.U++,f=fn(a.I);if(Ne(f,"SID",a.K),Ne(f,"RID",u),Ne(f,"TYPE","terminate"),Us(a,f),u=new Mn(a,a.j,u),u.L=2,u.v=Ki(fn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Zu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Hi(u)}Xu(a)}function Xi(a){a.g&&(Ka(a),a.g.cancel(),a.g=null)}function Hu(a){Xi(a),a.u&&(l.clearTimeout(a.u),a.u=null),Zi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ji(a){if(!Au(a.h)&&!a.s){a.s=!0;var u=a.Ga;ve||$t(),ge||(ve(),ge=!0),St.add(u,a),a.B=0}}function k_(a,u){return Ru(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=xs(m(a.Ga,a,u),Yu(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new Mn(this,this.j,a);let C=this.o;if(this.S&&(C?(C=y(C),b(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Wu(this,S,u),f=fn(this.I),Ne(f,"RID",a),Ne(f,"CVER",22),this.D&&Ne(f,"X-HTTP-Session-Id",this.D),Us(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(Lu(C)))+"&"+u:this.m&&Ha(f,this.m,C)),qa(this.h,S),this.Ua&&Ne(f,"TYPE","init"),this.P?(Ne(f,"$req",u),Ne(f,"SID","null"),S.T=!0,Ua(S,f,null)):Ua(S,f,u),this.G=2}}else this.G==3&&(a?zu(this,a):this.i.length==0||Au(this.h)||zu(this))};function zu(a,u){var f;u?f=u.l:f=a.U++;const g=fn(a.I);Ne(g,"SID",a.K),Ne(g,"RID",f),Ne(g,"AID",a.T),Us(a,g),a.m&&a.o&&Ha(g,a.m,a.o),f=new Mn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Wu(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),qa(a.h,f),Ua(f,g,u)}function Us(a,u){a.H&&pe(a.H,function(f,g){Ne(u,g,f)}),a.l&&Cu({},function(f,g){Ne(u,g,f)})}function Wu(a,u,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var S=a.i;let C=-1;for(;;){const z=["count="+f];C==-1?0<f?(C=S[0].g,z.push("ofs="+C)):C=0:z.push("ofs="+C);let ke=!0;for(let et=0;et<f;et++){let Ie=S[et].g;const lt=S[et].map;if(Ie-=C,0>Ie)C=Math.max(0,S[et].g-100),ke=!1;else try{S_(lt,z,"req"+Ie+"_")}catch{g&&g(lt)}}if(ke){g=z.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function Ku(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ve||$t(),ge||(ve(),ge=!0),St.add(u,a),a.v=0}}function Wa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=xs(m(a.Fa,a),Yu(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Gu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=xs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Xi(this),Gu(this))};function Ka(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Gu(a){a.g=new Mn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=fn(a.qa);Ne(u,"RID","rpc"),Ne(u,"SID",a.K),Ne(u,"AID",a.T),Ne(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ne(u,"TO",a.ja),Ne(u,"TYPE","xmlhttp"),Us(a,u),a.m&&a.o&&Ha(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ki(fn(u)),f.m=null,f.P=!0,Tu(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Xi(this),Wa(this),Et(19))};function Zi(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Qu(a,u){var f=null;if(a.g==u){Zi(a),Ka(a),a.g=null;var g=2}else if(ja(a.h,u))f=u.D,Su(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;g=$i(),ie(g,new _u(g,f)),Ji(a)}else Ku(a);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&k_(a,u)||g==2&&Wa(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),S){case 1:pr(a,5);break;case 4:pr(a,10);break;case 3:pr(a,6);break;default:pr(a,2)}}}function Yu(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function pr(a,u){if(a.j.info("Error code "+u),u==2){var f=m(a.fb,a),g=a.Xa;const S=!g;g=new fr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||zi(g,"https"),Ki(g),S?b_(g.toString(),f):A_(g.toString(),f)}else Et(2);a.G=0,a.l&&a.l.sa(u),Xu(a),Hu(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Xu(a){if(a.G=0,a.ka=[],a.l){const u=Pu(a.h);(u.length!=0||a.i.length!=0)&&(O(a.ka,u),O(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Ju(a,u,f){var g=f instanceof fr?fn(f):new fr(f);if(g.g!="")u&&(g.g=u+"."+g.g),Wi(g,g.s);else{var S=l.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var C=new fr(null);g&&zi(C,g),u&&(C.g=u),S&&Wi(C,S),f&&(C.l=f),g=C}return f=a.D,u=a.ya,f&&u&&Ne(g,f,u),Ne(g,"VER",a.la),Us(a,g),g}function Zu(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Be(new Gi({eb:f})):new Be(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function eh(){}t=eh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function eo(){}eo.prototype.g=function(a,u){return new Pt(a,u)};function Pt(a,u){ee.call(this),this.g=new qu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Lr(this)}x(Pt,ee),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){za(this.g)},Pt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Vr(a),a=f);u.i.push(new p_(u.Ya++,a)),u.G==3&&Ji(u)},Pt.prototype.N=function(){this.g.l=null,delete this.j,za(this.g),delete this.g,Pt.aa.N.call(this)};function th(a){Na.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}x(th,Na);function nh(){Ma.call(this),this.status=1}x(nh,Ma);function Lr(a){this.g=a}x(Lr,eh),Lr.prototype.ua=function(){ie(this.g,"a")},Lr.prototype.ta=function(a){ie(this.g,new th(a))},Lr.prototype.sa=function(a){ie(this.g,new nh)},Lr.prototype.ra=function(){ie(this.g,"b")},eo.prototype.createWebChannel=eo.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,$g=function(){return new eo},Bg=function(){return $i()},Ug=hr,jl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ji.NO_ERROR=0,ji.TIMEOUT=8,ji.HTTP_ERROR=6,Io=ji,yu.COMPLETE="complete",Fg=yu,fu.EventType=Ps,Ps.OPEN="a",Ps.CLOSE="b",Ps.ERROR="c",Ps.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Ws=fu,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,Lg=Be}).apply(typeof ao<"u"?ao:typeof self<"u"?self:typeof window<"u"?window:{});const Vd="@firebase/firestore";/**
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
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
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
 */let bs="11.0.2";/**
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
 */const Rr=new Ac("@firebase/firestore");function Hr(){return Rr.logLevel}function X(t,...e){if(Rr.logLevel<=me.DEBUG){const n=e.map(Lc);Rr.debug(`Firestore (${bs}): ${t}`,...n)}}function xn(t,...e){if(Rr.logLevel<=me.ERROR){const n=e.map(Lc);Rr.error(`Firestore (${bs}): ${t}`,...n)}}function hs(t,...e){if(Rr.logLevel<=me.WARN){const n=e.map(Lc);Rr.warn(`Firestore (${bs}): ${t}`,...n)}}function Lc(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function le(t="Unexpected state"){const e=`FIRESTORE (${bs}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function Se(t,e){t||le()}function ue(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class jg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class nA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rA{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new jg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new ht(e)}}class sA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class iA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new sA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Se(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new oA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function lA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class qg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=lA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function ds(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new Ke(0,0))}static max(){return new ce(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ei{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ei.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ei?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Me extends Ei{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const cA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Ei{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return cA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ne(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Me.fromString(e))}static fromName(e){return new se(Me.fromString(e).popFirst(5))}static empty(){return new se(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Me(e.slice()))}}function uA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new rr(s,se.empty(),e)}function hA(t){return new rr(t.readTime,t.key,-1)}class rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rr(ce.min(),se.empty(),-1)}static max(){return new rr(ce.max(),se.empty(),-1)}}function dA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const fA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function As(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==fA)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(s=>s?N.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new N((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new N((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function gA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Rs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ea{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ea.oe=-1;function Ta(t){return t==null}function zo(t){return t===0&&1/t==-1/0}function mA(t){return typeof t=="number"&&Number.isInteger(t)&&!zo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function _A(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Od(e)),e=yA(t.get(n),e);return Od(e)}function yA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Od(t){return t+""}/**
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
 */function Nd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Hg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lo(this.root,e,this.comparator,!0)}}class lo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tt.RED,this.left=s??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,s,i){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ge{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Md(this.data.getIterator())}getIteratorFrom(e){return new Md(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class Md{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new Ge(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class zg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zg("Invalid base64 string: "+i):i}}(e);return new it(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const vA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(t){if(Se(!!t),typeof t=="string"){let e=0;const n=vA.exec(t);if(Se(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ir(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
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
 */function Fc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wa(t){const e=t.mapValue.fields.__previous_value__;return Fc(e)?wa(e):e}function Ti(t){const e=sr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class EA{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class wi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const co={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fc(t)?4:wA(t)?9007199254740991:TA(t)?10:11:le()}function hn(t,e){if(t===e)return!0;const n=or(t);if(n!==or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ti(t).isEqual(Ti(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=sr(s.timestampValue),l=sr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ir(s.bytesValue).isEqual(ir(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return $e(s.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(s.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return $e(s.integerValue)===$e(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=$e(s.doubleValue),l=$e(i.doubleValue);return o===l?zo(o)===zo(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ds(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Nd(o)!==Nd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!hn(o[c],l[c])))return!1;return!0}(t,e);default:return le()}}function Ii(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function fs(t,e){if(t===e)return 0;const n=or(t),r=or(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=$e(i.integerValue||i.doubleValue),c=$e(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Ld(t.timestampValue,e.timestampValue);case 4:return Ld(Ti(t),Ti(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,o){const l=ir(i),c=ir(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ye(l[h],c[h]);if(d!==0)return d}return ye(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ye($e(i.latitude),$e(o.latitude));return l!==0?l:ye($e(i.longitude),$e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Fd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},m=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,x=(c=m.value)===null||c===void 0?void 0:c.arrayValue,k=ye(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((d=x==null?void 0:x.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Fd(v,x)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===co.mapValue&&o===co.mapValue)return 0;if(i===co.mapValue)return 1;if(o===co.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=ye(c[p],d[p]);if(m!==0)return m;const v=fs(l[c[p]],h[d[p]]);if(v!==0)return v}return ye(c.length,d.length)}(t.mapValue,e.mapValue);default:throw le()}}function Ld(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=sr(t),r=sr(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function Fd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=fs(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function ps(t){return ql(t)}function ql(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ql(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ql(n.fields[o])}`;return s+"}"}(t.mapValue):le()}function bo(t){switch(or(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=wa(t);return e?16+bo(e):16;case 5:return 2*t.stringValue.length;case 6:return ir(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+bo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Cr(r.fields,(i,o)=>{s+=i.length+bo(o)}),s}(t.mapValue);default:throw le()}}function Hl(t){return!!t&&"integerValue"in t}function Uc(t){return!!t&&"arrayValue"in t}function Ud(t){return!!t&&"nullValue"in t}function Bd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ao(t){return!!t&&"mapValue"in t}function TA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ii(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ii(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ii(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ii(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ii(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ao(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Cr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Nt(ii(this.value))}}function Wg(t){const e=[];return Cr(t.fields,(n,r)=>{const s=new rt([n]);if(Ao(r)){const i=Wg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ht(e)}/**
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
 */class pt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,ce.min(),ce.min(),ce.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,s){return new pt(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new pt(e,2,n,ce.min(),ce.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,ce.min(),ce.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wo{constructor(e,n){this.position=e,this.inclusive=n}}function $d(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=fs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function jd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ko{constructor(e,n="asc"){this.field=e,this.dir=n}}function IA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Kg{}class We extends Kg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new AA(e,n,r):n==="array-contains"?new PA(e,r):n==="in"?new CA(e,r):n==="not-in"?new xA(e,r):n==="array-contains-any"?new kA(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RA(e,r):new SA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fs(n,this.value)):n!==null&&or(this.value)===or(n)&&this.matchesComparison(fs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends Kg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new dn(e,n)}matches(e){return Gg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Gg(t){return t.op==="and"}function Qg(t){return bA(t)&&Gg(t)}function bA(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function zl(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+ps(t.value);if(Qg(t))return t.filters.map(e=>zl(e)).join(",");{const e=t.filters.map(n=>zl(n)).join(",");return`${t.op}(${e})`}}function Yg(t,e){return t instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&hn(r.value,s.value)}(t,e):t instanceof dn?function(r,s){return s instanceof dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Yg(o,s.filters[l]),!0):!1}(t,e):void le()}function Xg(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${ps(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(Xg).join(" ,")+"}"}(t):"Filter"}class AA extends We{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class RA extends We{constructor(e,n){super(e,"in",n),this.keys=Jg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class SA extends We{constructor(e,n){super(e,"not-in",n),this.keys=Jg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Jg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class PA extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uc(n)&&Ii(n.arrayValue,this.value)}}class CA extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ii(this.value.arrayValue,n)}}class xA extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ii(this.value.arrayValue,n)}}class kA extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ii(this.value.arrayValue,r))}}/**
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
 */class DA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function qd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new DA(t,e,n,r,s,i,o)}function Bc(t){const e=ue(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ta(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),e.ue=n}return e.ue}function $c(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Yg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!jd(t.startAt,e.startAt)&&jd(t.endAt,e.endAt)}function Wl(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ia{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function VA(t,e,n,r,s,i,o,l){return new Ia(t,e,n,r,s,i,o,l)}function jc(t){return new Ia(t)}function Hd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function OA(t){return t.collectionGroup!==null}function oi(t){const e=ue(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ge(rt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ko(i,r))}),n.has(rt.keyField().canonicalString())||e.ce.push(new Ko(rt.keyField(),r))}return e.ce}function ln(t){const e=ue(t);return e.le||(e.le=NA(e,oi(t))),e.le}function NA(t,e){if(t.limitType==="F")return qd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ko(s.field,i)});const n=t.endAt?new Wo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wo(t.startAt.position,t.startAt.inclusive):null;return qd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Kl(t,e,n){return new Ia(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ba(t,e){return $c(ln(t),ln(e))&&t.limitType===e.limitType}function Zg(t){return`${Bc(ln(t))}|lt:${t.limitType}`}function zr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Xg(s)).join(", ")}]`),Ta(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ps(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ps(s)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function Aa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of oi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=$d(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,oi(r),s)||r.endAt&&!function(o,l,c){const h=$d(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,oi(r),s))}(t,e)}function MA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function em(t){return(e,n)=>{let r=!1;for(const s of oi(t)){const i=LA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function LA(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?fs(c,h):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
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
 */class xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Hg(this.inner)}size(){return this.innerSize}}/**
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
 */const FA=new Ue(se.comparator);function kn(){return FA}const tm=new Ue(se.comparator);function Ks(...t){let e=tm;for(const n of t)e=e.insert(n.key,n);return e}function nm(t){let e=tm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vr(){return ai()}function rm(){return ai()}function ai(){return new xr(t=>t.toString(),(t,e)=>t.isEqual(e))}const UA=new Ue(se.comparator),BA=new Ge(se.comparator);function _e(...t){let e=BA;for(const n of t)e=e.add(n);return e}const $A=new Ge(ye);function jA(){return $A}/**
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
 */function qc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zo(e)?"-0":e}}function sm(t){return{integerValue:""+t}}function qA(t,e){return mA(e)?sm(e):qc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ra{constructor(){this._=void 0}}function HA(t,e,n){return t instanceof Go?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fc(i)&&(i=wa(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof bi?om(t,e):t instanceof Ai?am(t,e):function(s,i){const o=im(s,i),l=zd(o)+zd(s.Pe);return Hl(o)&&Hl(s.Pe)?sm(l):qc(s.serializer,l)}(t,e)}function zA(t,e,n){return t instanceof bi?om(t,e):t instanceof Ai?am(t,e):n}function im(t,e){return t instanceof Qo?function(r){return Hl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Go extends Ra{}class bi extends Ra{constructor(e){super(),this.elements=e}}function om(t,e){const n=lm(e);for(const r of t.elements)n.some(s=>hn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ai extends Ra{constructor(e){super(),this.elements=e}}function am(t,e){let n=lm(e);for(const r of t.elements)n=n.filter(s=>!hn(s,r));return{arrayValue:{values:n}}}class Qo extends Ra{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function zd(t){return $e(t.integerValue||t.doubleValue)}function lm(t){return Uc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function WA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof bi&&s instanceof bi||r instanceof Ai&&s instanceof Ai?ds(r.elements,s.elements,hn):r instanceof Qo&&s instanceof Qo?hn(r.Pe,s.Pe):r instanceof Go&&s instanceof Go}(t.transform,e.transform)}class KA{constructor(e,n){this.version=e,this.transformResults=n}}class Sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Sn}static exists(e){return new Sn(void 0,e)}static updateTime(e){return new Sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ro(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sa{}function cm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hm(t.key,Sn.none()):new Li(t.key,t.data,Sn.none());{const n=t.data,r=Nt.empty();let s=new Ge(rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new kr(t.key,r,new Ht(s.toArray()),Sn.none())}}function GA(t,e,n){t instanceof Li?function(s,i,o){const l=s.value.clone(),c=Kd(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof kr?function(s,i,o){if(!Ro(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Kd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(um(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function li(t,e,n,r){return t instanceof Li?function(i,o,l,c){if(!Ro(i.precondition,o))return l;const h=i.value.clone(),d=Gd(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof kr?function(i,o,l,c){if(!Ro(i.precondition,o))return l;const h=Gd(i.fieldTransforms,c,o),d=o.data;return d.setAll(um(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Ro(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function QA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=im(r.transform,s||null);i!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,i))}return n||null}function Wd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ds(r,s,(i,o)=>WA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Li extends Sa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kr extends Sa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function um(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Kd(t,e,n){const r=new Map;Se(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,zA(o,l,n[s]))}return r}function Gd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,HA(i,o,e))}return r}class hm extends Sa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YA extends Sa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class XA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&GA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=li(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=li(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=rm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=cm(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(n,r)=>Wd(n,r))&&ds(this.baseMutations,e.baseMutations,(n,r)=>Wd(n,r))}}class Hc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length);let s=function(){return UA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hc(e,n,r,s)}}/**
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
 */class JA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class ZA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,Te;function eR(t){switch(t){default:return le();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function dm(t){if(t===void 0)return xn("GRPC error has no .code"),L.UNKNOWN;switch(t){case He.OK:return L.OK;case He.CANCELLED:return L.CANCELLED;case He.UNKNOWN:return L.UNKNOWN;case He.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case He.INTERNAL:return L.INTERNAL;case He.UNAVAILABLE:return L.UNAVAILABLE;case He.UNAUTHENTICATED:return L.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case He.NOT_FOUND:return L.NOT_FOUND;case He.ALREADY_EXISTS:return L.ALREADY_EXISTS;case He.PERMISSION_DENIED:return L.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case He.ABORTED:return L.ABORTED;case He.OUT_OF_RANGE:return L.OUT_OF_RANGE;case He.UNIMPLEMENTED:return L.UNIMPLEMENTED;case He.DATA_LOSS:return L.DATA_LOSS;default:return le()}}(Te=He||(He={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function tR(){return new TextEncoder}/**
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
 */const nR=new Tr([4294967295,4294967295],0);function Qd(t){const e=tR().encode(t),n=new Mg;return n.update(e),new Uint8Array(n.digest())}function Yd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Tr([n,r],0),new Tr([s,i],0)]}class zc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Gs(`Invalid padding: ${n}`);if(r<0)throw new Gs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Gs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Tr.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(Tr.fromNumber(r)));return s.compare(nR)===1&&(s=new Tr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Qd(e),[r,s]=Yd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new zc(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=Qd(e),[r,s]=Yd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Gs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Fi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pa(ce.min(),s,new Ue(ye),kn(),_e())}}class Fi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fi(r,n,_e(),_e(),_e())}}/**
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
 */class So{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class fm{constructor(e,n){this.targetId=e,this.me=n}}class pm{constructor(e,n,r=it.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Xd{constructor(){this.fe=0,this.ge=Jd(),this.pe=it.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),n=_e(),r=_e();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le()}}),new Fi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Jd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rR{constructor(e){this.Le=e,this.Be=new Map,this.ke=kn(),this.qe=uo(),this.Qe=uo(),this.Ke=new Ue(ye)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(Wl(i))if(r===0){const o=new se(i.path);this.We(n,o,pt.newNoDocument(o,ce.min()))}else Se(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=ir(r).toUint8Array()}catch(c){if(c instanceof zg)return hs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new zc(o,s,i)}catch(c){return hs(c instanceof Gs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&Wl(l.target)){const c=new se(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,pt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=_e();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Ye(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Pa(e,n,this.Ke,this.ke,r);return this.ke=kn(),this.qe=uo(),this.Qe=uo(),this.Ke=new Ue(ye),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Xd,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new Ge(ye),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ge(ye),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Xd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function uo(){return new Ue(se.comparator)}function Jd(){return new Ue(se.comparator)}const sR={asc:"ASCENDING",desc:"DESCENDING"},iR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oR={and:"AND",or:"OR"};class aR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gl(t,e){return t.useProto3Json||Ta(e)?e:{value:e}}function Yo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lR(t,e){return Yo(t,e.toTimestamp())}function cn(t){return Se(!!t),ce.fromTimestamp(function(n){const r=sr(n);return new Ke(r.seconds,r.nanos)}(t))}function Wc(t,e){return Ql(t,e).canonicalString()}function Ql(t,e){const n=function(s){return new Me(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function mm(t){const e=Me.fromString(t);return Se(Tm(e)),e}function Yl(t,e){return Wc(t.databaseId,e.path)}function ml(t,e){const n=mm(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(ym(n))}function _m(t,e){return Wc(t.databaseId,e)}function cR(t){const e=mm(t);return e.length===4?Me.emptyPath():ym(e)}function Xl(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ym(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zd(t,e,n){return{name:Yl(t,e),fields:n.value.mapValue.fields}}function uR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Se(d===void 0||typeof d=="string"),it.fromBase64String(d||"")):(Se(d===void 0||d instanceof Buffer||d instanceof Uint8Array),it.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?L.UNKNOWN:dm(h.code);return new ne(d,h.message||"")}(o);n=new pm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ml(t,r.document.name),i=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):ce.min(),l=new Nt({mapValue:{fields:r.document.fields}}),c=pt.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new So(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ml(t,r.document),i=r.readTime?cn(r.readTime):ce.min(),o=pt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new So([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ml(t,r.document),i=r.removedTargetIds||[];n=new So([],i,s,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ZA(s,i),l=r.targetId;n=new fm(l,o)}}return n}function hR(t,e){let n;if(e instanceof Li)n={update:Zd(t,e.key,e.value)};else if(e instanceof hm)n={delete:Yl(t,e.key)};else if(e instanceof kr)n={update:Zd(t,e.key,e.data),updateMask:ER(e.fieldMask)};else{if(!(e instanceof YA))return le();n={verify:Yl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Go)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof bi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ai)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Qo)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:lR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(t,e.precondition)),n}function dR(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?cn(s.updateTime):cn(i);return o.isEqual(ce.min())&&(o=cn(i)),new KA(o,s.transformResults||[])}(n,e))):[]}function fR(t,e){return{documents:[_m(t,e.path)]}}function pR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=_m(t,s);const i=function(h){if(h.length!==0)return Em(dn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Wr(m.field),direction:_R(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Gl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ct:n,parent:s}}function gR(t){let e=cR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=vm(p);return m instanceof dn&&Qg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(x){return new Ko(Kr(x.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Ta(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,v=p.values||[];return new Wo(v,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,v=p.values||[];return new Wo(v,m)}(n.endAt)),VA(e,s,o,i,l,"F",c,h)}function mR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Kr(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Kr(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Kr(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Kr(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return We.create(Kr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>vm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function _R(t){return sR[t]}function yR(t){return iR[t]}function vR(t){return oR[t]}function Wr(t){return{fieldPath:t.canonicalString()}}function Kr(t){return rt.fromServerFormat(t.fieldPath)}function Em(t){return t instanceof We?function(n){if(n.op==="=="){if(Bd(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NAN"}};if(Ud(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bd(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NAN"}};if(Ud(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wr(n.field),op:yR(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(s=>Em(s));return r.length===1?r[0]:{compositeFilter:{op:vR(n.op),filters:r}}}(t):le()}function ER(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Tm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Gn{constructor(e,n,r,s,i=ce.min(),o=ce.min(),l=it.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class TR{constructor(e){this.ht=e}}function wR(t){const e=gR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kl(e,e.limit,"L"):e}/**
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
 */class IR{constructor(){this.ln=new bR}addToCollectionParentIndex(e,n){return this.ln.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(rr.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class bR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ge(Me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ge(Me.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const ef={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(41943040,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
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
 */class gs{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new gs(0)}static Qn(){return new gs(-1)}}/**
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
 */function tf([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class AR{constructor(e){this.Gn=e,this.buffer=new Ge(tf),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();tf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class RR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){X("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Rs(n)?X("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await As(n)}await this.Yn(3e5)})}}class SR{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return N.resolve(Ea.oe);const r=new AR(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(ef)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ef):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Hr()<=me.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function PR(t,e){return new SR(t,e)}/**
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
 */class CR{constructor(){this.changes=new xr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class xR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class kR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&li(r.mutation,s,Ht.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=vr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ks();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=kn();const o=ai(),l=function(){return ai()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof kr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),li(d.mutation,h,d.mutation.getFieldMask(),Ke.now())):o.set(h.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new xR(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ai();let s=new Ue((o,l)=>o-l),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Ht.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||_e()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=rm();d.forEach(m=>{if(!i.has(m)){const v=cm(n.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):OA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):N.resolve(vr());let l=-1,c=i;return o.next(h=>N.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?N.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,_e())).next(d=>({batchId:l,changes:nm(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Ks();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ks();return this.indexManager.getCollectionParents(e,i).next(l=>N.forEach(l,c=>{const h=function(p,m){return new Ia(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,pt.newInvalidDocument(d)))});let l=Ks();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&li(d.mutation,h,Ht.empty(),Ke.now()),Aa(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class DR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return N.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:cn(s.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:wR(s.bundledQuery),readTime:cn(s.readTime)}}(n)),N.resolve()}}/**
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
 */class VR{constructor(){this.overlays=new Ue(se.comparator),this.Er=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vr();return N.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const s=vr(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ue((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=vr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=vr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return N.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JA(n,r));let i=this.Er.get(n);i===void 0&&(i=_e(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class OR{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,N.resolve()}}/**
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
 */class Kc{constructor(){this.dr=new Ge(Ye.Ar),this.Rr=new Ge(Ye.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Ye(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new se(new Me([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new se(new Me([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=_e();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return se.comparator(e.key,n.key)||ye(e.br,n.br)}static Vr(e,n){return ye(e.br,n.br)||se.comparator(e.key,n.key)}}/**
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
 */class NR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Ge(Ye.Ar)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new Ye(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const l=this.Cr(o.br);i.push(l)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(ye);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{r=r.add(l.br)})}),N.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new se(i),0);let l=new Ge(ye);return this.vr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.br)),!0)},o),N.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return N.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Ye(n,0),s=this.vr.firstAfterOrEqual(r);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class MR{constructor(e){this.Nr=e,this.docs=function(){return new Ue(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():pt.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=kn();const o=n.path,l=new se(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||dA(hA(d),r)<=0||(s.has(d.key)||Aa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le()}Lr(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new LR(this)}getSize(e){return N.resolve(this.size)}}class LR extends CR{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class FR{constructor(e){this.persistence=e,this.Br=new xr(n=>Bc(n),$c),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.kr=0,this.qr=new Kc,this.targetCount=0,this.Qr=gs.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),N.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new gs(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Un(n),N.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.qr.containsKey(n))}}/**
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
 */class wm{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Ea(0),this.Ur=!1,this.Ur=!0,this.Wr=new OR,this.referenceDelegate=e(this),this.Gr=new FR(this),this.indexManager=new IR,this.remoteDocumentCache=function(s){return new MR(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new TR(n),this.jr=new DR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new VR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new NR(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new UR(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return N.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class UR extends pA{constructor(e){super(),this.currentSequenceNumber=e}}class Gc{constructor(e){this.persistence=e,this.Zr=new Kc,this.Xr=null}static ei(e){return new Gc(e)}get ti(){if(this.Xr)return this.Xr;throw le()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),N.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.ti,r=>{const s=se.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return N.or([()=>N.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Xo{constructor(e,n){this.persistence=e,this.ri=new xr(r=>_A(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=PR(this,n)}static ei(e,n){return new Xo(e,n)}Hr(){}Jr(e){return N.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return N.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?N.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ce.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),N.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),N.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=bo(e.data.value)),n}ir(e,n,r){return N.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Qc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Qc(e,n.fromCache,r,s)}}/**
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
 */class BR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $R{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return m0()?8:gA(_t())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new BR;return this.ts(e,n,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(Hr()<=me.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",zr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),N.resolve()):(Hr()<=me.DEBUG&&X("QueryEngine","Query:",zr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Hr()<=me.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",zr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):N.resolve())}Xi(e,n){if(Hd(n))return N.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Kl(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.rs(n,l);return this.ss(n,h,o,c.readTime)?this.Xi(e,Kl(n,null,"F")):this.os(e,h,n,c)}))})))}es(e,n,r,s){return Hd(n)||s.isEqual(ce.min())?N.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?N.resolve(null):(Hr()<=me.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),zr(n)),this.os(e,o,n,uA(s,-1)).next(l=>l))})}rs(e,n){let r=new Ge(em(e));return n.forEach((s,i)=>{Aa(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return Hr()<=me.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",zr(n)),this.Zi.getDocumentsMatchingQuery(e,n,rr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class jR{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ue(ye),this.cs=new xr(i=>Bc(i),$c),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kR(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function qR(t,e,n,r){return new jR(t,e,n,r)}async function Im(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=_e();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Ts:h,removedBatchIds:o,addedBatchIds:l}))})})}function HR(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,m=p.keys();let v=N.resolve();return m.forEach(x=>{v=v.next(()=>d.getEntry(c,x)).next(k=>{const O=h.docVersions.get(x);Se(O!==null),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),d.addEntry(k)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=_e();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function bm(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function zR(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(it.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(p,v),function(k,O,j){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(m,v,d)&&l.push(n.Gr.updateTargetData(i,v))});let c=kn(),h=_e();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(WR(i,o,e.documentUpdates).next(d=>{c=d.Is,h=d.Es})),!r.isEqual(ce.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return N.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.us=s,i))}function WR(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=kn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ce.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Is:o,Es:s}})}function KR(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GR(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new Gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function Jl(t,e,n){const r=ue(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Rs(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function nf(t,e,n){const r=ue(t);let s=ce.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=ue(c),m=p.cs.get(d);return m!==void 0?N.resolve(p.us.get(m)):p.Gr.getTargetData(h,d)}(r,o,ln(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:_e())).next(l=>(QR(r,MA(e),l),{documents:l,ds:i})))}function QR(t,e,n){let r=t.ls.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class rf{constructor(){this.activeTargetIds=jA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YR{constructor(){this._o=new rf,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new rf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XR{uo(e){}shutdown(){}}/**
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
 */class sf{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ho=null;function _l(){return ho===null?ho=function(){return 268435456+Math.round(2147483648*Math.random())}():ho++,"0x"+ho.toString(16)}/**
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
 */const JR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ZR{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const ut="WebChannelConnection";class eS extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const l=_l(),c=this.No(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,i,o),this.Bo(n,c,h,s).then(d=>(X("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw hs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,o,l){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=JR[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=_l();return new Promise((o,l)=>{const c=new Lg;c.setWithCredentials(!0),c.listenOnce(Fg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Io.NO_ERROR:const d=c.getResponseJson();X(ut,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Io.TIMEOUT:X(ut,`RPC '${e}' ${i} timed out`),l(new ne(L.DEADLINE_EXCEEDED,"Request time out"));break;case Io.HTTP_ERROR:const p=c.getStatus();if(X(ut,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const x=function(O){const j=O.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(j)>=0?j:L.UNKNOWN}(v.status);l(new ne(x,v.message))}else l(new ne(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ne(L.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{X(ut,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(ut,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}qo(e,n,r){const s=_l(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$g(),l=Bg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");X(ut,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,v=!1;const x=new ZR({Eo:O=>{v?X(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(X(ut,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(ut,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Ao:()=>p.close()}),k=(O,j,B)=>{O.listen(j,q=>{try{B(q)}catch(W){setTimeout(()=>{throw W},0)}})};return k(p,Ws.EventType.OPEN,()=>{v||(X(ut,`RPC '${e}' stream ${s} transport opened.`),x.So())}),k(p,Ws.EventType.CLOSE,()=>{v||(v=!0,X(ut,`RPC '${e}' stream ${s} transport closed`),x.Do())}),k(p,Ws.EventType.ERROR,O=>{v||(v=!0,hs(ut,`RPC '${e}' stream ${s} transport errored:`,O),x.Do(new ne(L.UNAVAILABLE,"The operation could not be completed")))}),k(p,Ws.EventType.MESSAGE,O=>{var j;if(!v){const B=O.data[0];Se(!!B);const q=B,W=(q==null?void 0:q.error)||((j=q[0])===null||j===void 0?void 0:j.error);if(W){X(ut,`RPC '${e}' stream ${s} received error:`,W);const fe=W.status;let pe=function(w){const b=He[w];if(b!==void 0)return dm(b)}(fe),I=W.message;pe===void 0&&(pe=L.INTERNAL,I="Unknown error status: "+fe+" with message "+W.message),v=!0,x.Do(new ne(pe,I)),p.close()}else X(ut,`RPC '${e}' stream ${s} received:`,B),x.vo(B)}}),k(l,Ug.STAT_EVENT,O=>{O.stat===jl.PROXY?X(ut,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===jl.NOPROXY&&X(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.bo()},0),x}}function yl(){return typeof document<"u"?document:null}/**
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
 */function Ca(t){return new aR(t,!0)}/**
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
 */class Am{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class Rm{constructor(e,n,r,s,i,o,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Am(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new ne(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tS extends Rm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=uR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?cn(o.readTime):ce.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Xl(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Wl(c)?{documents:fR(i,c)}:{query:pR(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=gm(i,o.resumeToken);const h=Gl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ce.min())>0){l.readTime=Yo(i,o.snapshotVersion.toTimestamp());const h=Gl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=mR(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Xl(this.serializer),n.removeTarget=e,this.c_(n)}}class nS extends Rm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=dR(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Xl(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>hR(this.serializer,r))};this.c_(n)}}/**
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
 */class rS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ne(L.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Ql(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(L.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,Ql(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(L.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class sS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(xn(n),this.C_=!1):X("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class iS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Dr(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=ue(c);h.k_.add(4),await Ui(h),h.K_.set("Unknown"),h.k_.delete(4),await xa(h)}(this))})}),this.K_=new sS(r,s)}}async function xa(t){if(Dr(t))for(const e of t.q_)await e(!0)}async function Ui(t){for(const e of t.q_)await e(!1)}function Sm(t,e){const n=ue(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Zc(n)?Jc(n):Ss(n).s_()&&Xc(n,e))}function Yc(t,e){const n=ue(t),r=Ss(n);n.B_.delete(e),r.s_()&&Pm(n,e),n.B_.size===0&&(r.s_()?r.a_():Dr(n)&&n.K_.set("Unknown"))}function Xc(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ss(t).V_(e)}function Pm(t,e){t.U_.xe(e),Ss(t).m_(e)}function Jc(t){t.U_=new rR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ss(t).start(),t.K_.F_()}function Zc(t){return Dr(t)&&!Ss(t).i_()&&t.B_.size>0}function Dr(t){return ue(t).k_.size===0}function Cm(t){t.U_=void 0}async function oS(t){t.K_.set("Online")}async function aS(t){t.B_.forEach((e,n)=>{Xc(t,e)})}async function lS(t,e){Cm(t),Zc(t)?(t.K_.O_(e),Jc(t)):t.K_.set("Unknown")}async function cS(t,e,n){if(t.K_.set("Online"),e instanceof pm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.B_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jo(t,r)}else if(e instanceof So?t.U_.$e(e):e instanceof fm?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(ce.min()))try{const r=await bm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(h);d&&i.B_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(it.EMPTY_BYTE_STRING,d.snapshotVersion)),Pm(i,c);const p=new Gn(d.target,c,h,d.sequenceNumber);Xc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Jo(t,r)}}async function Jo(t,e,n){if(!Rs(e))throw e;t.k_.add(1),await Ui(t),t.K_.set("Offline"),n||(n=()=>bm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await xa(t)})}function xm(t,e){return e().catch(n=>Jo(t,n,e))}async function ka(t){const e=ue(t),n=ar(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;uS(e);)try{const s=await KR(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,hS(e,s)}catch(s){await Jo(e,s)}km(e)&&Dm(e)}function uS(t){return Dr(t)&&t.L_.length<10}function hS(t,e){t.L_.push(e);const n=ar(t);n.s_()&&n.f_&&n.g_(e.mutations)}function km(t){return Dr(t)&&!ar(t).i_()&&t.L_.length>0}function Dm(t){ar(t).start()}async function dS(t){ar(t).w_()}async function fS(t){const e=ar(t);for(const n of t.L_)e.g_(n.mutations)}async function pS(t,e,n){const r=t.L_.shift(),s=Hc.from(r,e,n);await xm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ka(t)}async function gS(t,e){e&&ar(t).f_&&await async function(r,s){if(function(o){return eR(o)&&o!==L.ABORTED}(s.code)){const i=r.L_.shift();ar(r).__(),await xm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ka(r)}}(t,e),km(t)&&Dm(t)}async function of(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Dr(n);n.k_.add(3),await Ui(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await xa(n)}async function mS(t,e){const n=ue(t);e?(n.k_.delete(2),await xa(n)):e||(n.k_.add(2),await Ui(n),n.K_.set("Unknown"))}function Ss(t){return t.W_||(t.W_=function(n,r,s){const i=ue(n);return i.b_(),new tS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:oS.bind(null,t),mo:aS.bind(null,t),po:lS.bind(null,t),R_:cS.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Zc(t)?Jc(t):t.K_.set("Unknown")):(await t.W_.stop(),Cm(t))})),t.W_}function ar(t){return t.G_||(t.G_=function(n,r,s){const i=ue(n);return i.b_(),new nS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:dS.bind(null,t),po:gS.bind(null,t),p_:fS.bind(null,t),y_:pS.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await ka(t)):(await t.G_.stop(),t.L_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
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
 */class eu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new eu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tu(t,e){if(xn("AsyncQueue",`${e}: ${t}`),Rs(t))return new ne(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ss{static emptySet(e){return new ss(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Ks(),this.sortedSet=new Ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class af{constructor(){this.z_=new Ue(se.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):le():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ms{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ms(e,n,ss.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ba(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class _S{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class yS{constructor(){this.queries=lf(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ue(n),i=s.queries;s.queries=lf(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(r)})})(this,new ne(L.ABORTED,"Firestore shutting down"))}}function lf(){return new xr(t=>Zg(t),ba)}async function Vm(t,e){const n=ue(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new _S,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=tu(o,`Initialization of query '${zr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&nu(n)}async function Om(t,e){const n=ue(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function vS(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.J_)l.ta(s)&&(r=!0);o.H_=s}}r&&nu(n)}function ES(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function nu(t){t.X_.forEach(e=>{e.next()})}var Zl,cf;(cf=Zl||(Zl={})).na="default",cf.Cache="cache";class Nm{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Zl.Cache}}/**
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
 */class Mm{constructor(e){this.key=e}}class Lm{constructor(e){this.key=e}}class TS{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=_e(),this.mutatedKeys=_e(),this.Va=em(e),this.ma=new ss(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new af,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),v=Aa(this.query,p)?p:null,x=!!m&&this.mutatedKeys.has(m.key),k=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let O=!1;m&&v?m.data.isEqual(v.data)?x!==k&&(r.track({type:3,doc:v}),O=!0):this.ya(m,v)||(r.track({type:2,doc:v}),O=!0,(c&&this.Va(v,c)>0||h&&this.Va(v,h)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),O=!0):m&&!v&&(r.track({type:1,doc:m}),O=!0,(c||h)&&(l=!0)),O&&(v?(o=o.add(v),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(v,x){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return k(v)-k(x)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,h=c!==this.Aa;return this.Aa=c,o.length!==0||h?{snapshot:new ms(this.query,e.ma,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new af,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=_e(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new Lm(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new Mm(r))}),n}va(e){this.da=e.ds,this.Ra=_e();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return ms.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class wS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class IS{constructor(e){this.key=e,this.Fa=!1}}class bS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new xr(l=>Zg(l),ba),this.Oa=new Map,this.Na=new Set,this.La=new Ue(se.comparator),this.Ba=new Map,this.ka=new Kc,this.qa={},this.Qa=new Map,this.Ka=gs.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function AS(t,e,n=!0){const r=qm(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await Fm(r,e,n,!0),s}async function RS(t,e){const n=qm(t);await Fm(n,e,!0,!1)}async function Fm(t,e,n,r){const s=await GR(t.localStore,ln(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await SS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Sm(t.remoteStore,s),l}async function SS(t,e,n,r,s){t.Ua=(p,m,v)=>async function(k,O,j,B){let q=O.view.ga(j);q.ss&&(q=await nf(k.localStore,O.query,!1).then(({documents:I})=>O.view.ga(I,q)));const W=B&&B.targetChanges.get(O.targetId),fe=B&&B.targetMismatches.get(O.targetId)!=null,pe=O.view.applyChanges(q,k.isPrimaryClient,W,fe);return hf(k,O.targetId,pe.ba),pe.snapshot}(t,p,m,v);const i=await nf(t.localStore,e,!0),o=new TS(e,i.ds),l=o.ga(i.documents),c=Fi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);hf(t,n,h.ba);const d=new wS(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),h.snapshot}async function PS(t,e,n){const r=ue(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!ba(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Jl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Yc(r.remoteStore,s.targetId),ec(r,s.targetId)}).catch(As)):(ec(r,s.targetId),await Jl(r.localStore,s.targetId,!0))}async function CS(t,e){const n=ue(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Yc(n.remoteStore,r.targetId))}async function xS(t,e,n){const r=LS(t);try{const s=await function(o,l){const c=ue(o),h=Ke.now(),d=l.reduce((v,x)=>v.add(x.key),_e());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let x=kn(),k=_e();return c.hs.getEntries(v,d).next(O=>{x=O,x.forEach((j,B)=>{B.isValidDocument()||(k=k.add(j))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,x)).next(O=>{p=O;const j=[];for(const B of l){const q=QA(B,p.get(B.key).overlayedDocument);q!=null&&j.push(new kr(B.key,q,Wg(q.value.mapValue),Sn.exists(!0)))}return c.mutationQueue.addMutationBatch(v,h,j,l)}).next(O=>{m=O;const j=O.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(v,O.batchId,j)})}).then(()=>({batchId:m.batchId,changes:nm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.qa[o.currentUser.toKey()];h||(h=new Ue(ye)),h=h.insert(l,c),o.qa[o.currentUser.toKey()]=h}(r,s.batchId,n),await Bi(r,s.changes),await ka(r.remoteStore)}catch(s){const i=tu(s,"Failed to persist write");n.reject(i)}}async function Um(t,e){const n=ue(t);try{const r=await zR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Se(o.Fa):s.removedDocuments.size>0&&(Se(o.Fa),o.Fa=!1))}),await Bi(n,r,e)}catch(r){await As(r)}}function uf(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ue(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(l)&&(h=!0)}),h&&nu(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kS(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ue(se.comparator);o=o.insert(i,pt.newNoDocument(i,ce.min()));const l=_e().add(i),c=new Pa(ce.min(),new Map,new Ue(ye),o,l);await Um(r,c),r.La=r.La.remove(i),r.Ba.delete(e),ru(r)}else await Jl(r.localStore,e,!1).then(()=>ec(r,e,n)).catch(As)}async function DS(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await HR(n.localStore,e);$m(n,r,null),Bm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Bi(n,s)}catch(s){await As(s)}}async function VS(t,e,n){const r=ue(t);try{const s=await function(o,l){const c=ue(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Se(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);$m(r,e,n),Bm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Bi(r,s)}catch(s){await As(s)}}function Bm(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function $m(t,e,n){const r=ue(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function ec(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||jm(t,r)})}function jm(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Yc(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),ru(t))}function hf(t,e,n){for(const r of n)r instanceof Mm?(t.ka.addReference(r.key,e),OS(t,r)):r instanceof Lm?(X("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||jm(t,r.key)):le()}function OS(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(X("SyncEngine","New document in limbo: "+n),t.Na.add(r),ru(t))}function ru(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new se(Me.fromString(e)),r=t.Ka.next();t.Ba.set(r,new IS(n)),t.La=t.La.insert(n,r),Sm(t.remoteStore,new Gn(ln(jc(n.path)),r,"TargetPurposeLimboResolution",Ea.oe))}}async function Bi(t,e,n){const r=ue(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{o.push(r.Ua(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Qc.zi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,h){const d=ue(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>N.forEach(h,m=>N.forEach(m.Wi,v=>d.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>N.forEach(m.Gi,v=>d.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!Rs(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const v=d.us.get(m),x=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(x);d.us=d.us.insert(m,k)}}}(r.localStore,i))}async function NS(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await Im(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new ne(L.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Bi(n,r.Ts)}}function MS(t,e){const n=ue(t),r=n.Ba.get(e);if(r&&r.Fa)return _e().add(r.key);{let s=_e();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const l=n.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function qm(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Um.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kS.bind(null,e),e.Ma.R_=vS.bind(null,e.eventManager),e.Ma.Wa=ES.bind(null,e.eventManager),e}function LS(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VS.bind(null,e),e}class Zo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ca(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return qR(this.persistence,new $R,e.initialUser,this.serializer)}ja(e){return new wm(Gc.ei,this.serializer)}za(e){return new YR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zo.provider={build:()=>new Zo};class FS extends Zo{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Se(this.persistence.referenceDelegate instanceof Xo);const r=this.persistence.referenceDelegate.garbageCollector;return new RR(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new wm(r=>Xo.ei(r,n),this.serializer)}}class tc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=NS.bind(null,this.syncEngine),await mS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yS}()}createDatastore(e){const n=Ca(e.databaseInfo.databaseId),r=function(i){return new eS(i)}(e.databaseInfo);return function(i,o,l,c){return new rS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new iS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>uf(this.syncEngine,n,0),function(){return sf.p()?new sf:new XR}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new bS(s,i,o,l,c,h);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ue(s);X("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Ui(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}tc.provider={build:()=>new tc};/**
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
 *//**
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
 */class Hm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class US{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=qg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=tu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vl(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Im(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function df(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BS(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>of(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>of(e.remoteStore,s)),t._onlineComponents=e}async function BS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await vl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;hs("Error using user provided cache. Falling back to memory cache: "+n),await vl(t,new Zo)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await vl(t,new FS(void 0));return t._offlineComponents}async function zm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await df(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await df(t,new tc))),t._onlineComponents}function $S(t){return zm(t).then(e=>e.syncEngine)}async function Wm(t){const e=await zm(t),n=e.eventManager;return n.onListen=AS.bind(null,e.syncEngine),n.onUnlisten=PS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=RS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=CS.bind(null,e.syncEngine),n}function jS(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new Hm({next:m=>{d.eu(),o.enqueueAndForget(()=>Om(i,p));const v=m.docs.has(l);!v&&m.fromCache?h.reject(new ne(L.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&c&&c.source==="server"?h.reject(new ne(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Nm(jc(l.path),d,{includeMetadataChanges:!0,ua:!0});return Vm(i,p)}(await Wm(t),t.asyncQueue,e,n,r)),r.promise}function qS(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new Hm({next:m=>{d.eu(),o.enqueueAndForget(()=>Om(i,p)),m.fromCache&&c.source==="server"?h.reject(new ne(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Nm(l,d,{includeMetadataChanges:!0,ua:!0});return Vm(i,p)}(await Wm(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Km(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ff=new Map;/**
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
 */function Gm(t,e,n){if(!n)throw new ne(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function HS(t,e,n,r){if(e===!0&&r===!0)throw new ne(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pf(t){if(!se.isDocumentKey(t))throw new ne(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gf(t){if(se.isDocumentKey(t))throw new ne(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function su(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function _s(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=su(t);throw new ne(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class mf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Km((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Da{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tA;switch(r.type){case"firstParty":return new iA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ff.get(n);r&&(X("ComponentProvider","Removing Datastore"),ff.delete(n),r.terminate())}(this),Promise.resolve()}}function zS(t,e,n,r={}){var s;const i=(t=_s(t,Da))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&hs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ht.MOCK_USER;else{l=c0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new ne(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ht(h)}t._authCredentials=new nA(new jg(l,c))}}/**
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
 */class Va{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Va(this.firestore,e,this._query)}}class Ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ft(this.firestore,e,this._key)}}class er extends Va{constructor(e,n,r){super(e,n,jc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ft(this.firestore,null,new se(e))}withConverter(e){return new er(this.firestore,e,this._path)}}function Qm(t,e,...n){if(t=Bt(t),Gm("collection","path",e),t instanceof Da){const r=Me.fromString(e,...n);return gf(r),new er(t,null,r)}{if(!(t instanceof Ft||t instanceof er))throw new ne(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return gf(r),new er(t.firestore,null,r)}}function Ym(t,e,...n){if(t=Bt(t),arguments.length===1&&(e=qg.newId()),Gm("doc","path",e),t instanceof Da){const r=Me.fromString(e,...n);return pf(r),new Ft(t,null,new se(r))}{if(!(t instanceof Ft||t instanceof er))throw new ne(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return pf(r),new Ft(t.firestore,t instanceof er?t.converter:null,new se(r))}}/**
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
 */class _f{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Am(this,"async_queue_retry"),this.fu=()=>{const r=yl();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=yl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=yl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Rn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Rs(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw xn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=eu.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&le()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Oa extends Da{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new _f,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _f(e),this._firestoreClient=void 0,await e}}}function WS(t,e){const n=typeof t=="object"?t:Jp(),r=typeof t=="string"?t:"(default)",s=Sc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=a0("firestore");i&&zS(s,...i)}return s}function iu(t){if(t._terminated)throw new ne(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||KS(t),t._firestoreClient}function KS(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new EA(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Km(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new US(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class ys{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ys(it.fromBase64String(e))}catch(n){throw new ne(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ys(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ou{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xm{constructor(e){this._methodName=e}}/**
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
 */class au{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class lu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const GS=/^__.*__$/;class QS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Li(e,this.data,n,this.fieldTransforms)}}function Jm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class cu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new cu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ea(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Jm(this.Mu)&&GS.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class YS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ca(e)}$u(e,n,r,s=!1){return new cu({Mu:e,methodName:n,Ku:r,path:rt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function XS(t){const e=t._freezeSettings(),n=Ca(t._databaseId);return new YS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function JS(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);n_("Data must be an object, but it was:",o,r);const l=e_(r,o);let c,h;if(i.merge)c=new Ht(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=ZS(e,p,n);if(!o.contains(m))throw new ne(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);t1(d,m)||d.push(m)}c=new Ht(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new QS(new Nt(l),c,h)}function Zm(t,e){if(t_(t=Bt(t)))return n_("Unsupported field value:",e,t),e_(t,e);if(t instanceof Xm)return function(r,s){if(!Jm(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Zm(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:Yo(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yo(s.serializer,i)}}if(r instanceof au)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ys)return{bytesValue:gm(s.serializer,r._byteString)};if(r instanceof Ft){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof lu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return qc(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${su(r)}`)}(t,e)}function e_(t,e){const n={};return Hg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(t,(r,s)=>{const i=Zm(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function t_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof au||t instanceof ys||t instanceof Ft||t instanceof Xm||t instanceof lu)}function n_(t,e,n){if(!t_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=su(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function ZS(t,e,n){if((e=Bt(e))instanceof ou)return e._internalPath;if(typeof e=="string")return r_(t,e);throw ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const e1=new RegExp("[~\\*/\\[\\]]");function r_(t,e,n){if(e.search(e1)>=0)throw ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ou(...e.split("."))._internalPath}catch{throw ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ea(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ne(L.INVALID_ARGUMENT,l+t+c)}function t1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class s_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new n1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(i_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class n1 extends s_{data(){return super.data()}}function i_(t,e){return typeof e=="string"?r_(t,e):e instanceof ou?e._internalPath:e._delegate._internalPath}/**
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
 */function r1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class s1{convertValue(e,n="none"){switch(or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>$e(o.doubleValue));return new lu(i)}convertGeoPoint(e){return new au($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=wa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ti(e));default:return null}}convertTimestamp(e){const n=sr(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);Se(Tm(r));const s=new wi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||xn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function i1(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class o_ extends s_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(i_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Po extends o_{data(e={}){return super.data(e)}}class o1{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Qs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Po(this._firestore,this._userDataWriter,r.key,r,new Qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Po(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Po(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:a1(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function a1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
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
 */function l1(t){t=_s(t,Ft);const e=_s(t.firestore,Oa);return jS(iu(e),t._key).then(n=>d1(e,t,n))}class a_ extends s1{constructor(e){super(),this.firestore=e}convertBytes(e){return new ys(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ft(this.firestore,null,n)}}function c1(t){t=_s(t,Va);const e=_s(t.firestore,Oa),n=iu(e),r=new a_(e);return r1(t._query),qS(n,t._query).then(s=>new o1(e,r,t,s))}function u1(t,e){const n=_s(t.firestore,Oa),r=Ym(t),s=i1(t.converter,e);return h1(n,[JS(XS(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Sn.exists(!1))]).then(()=>r)}function h1(t,e){return function(r,s){const i=new Rn;return r.asyncQueue.enqueueAndForget(async()=>xS(await $S(r),s,i)),i.promise}(iu(t),e)}function d1(t,e,n){const r=n.docs.get(e._key),s=new a_(t);return new o_(t,s,e._key,r,new Qs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){bs=s})(Ts),cs(new br("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Oa(new rA(r.getProvider("auth-internal")),new aA(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ne(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wi(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Jn(Vd,"4.7.5",e),Jn(Vd,"4.7.5","esm2017")})();const f1={class:"bg-black text-white font-general min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},p1={class:"w-full max-w-2xl bg-box border-2 border-gray-600 rounded-lg p-8 shadow-lg"},g1={class:"mb-6"},m1={class:"mb-6"},_1={class:"mb-6"},y1={class:"flex justify-center"},v1={__name:"CreateBlog",setup(t){const e=An(""),n=An(""),r=An(""),s=async()=>{try{const i=Qm(hu,"blogs");await u1(i,{heading:e.value,category:n.value,content:r.value,createdAt:new Date}),e.value="",n.value="",r.value="",console.log("Blog submitted successfully!")}catch(i){console.error("Error adding document: ",i)}};return(i,o)=>(Ce(),Xe("div",f1,[J("div",p1,[o[6]||(o[6]=J("h1",{class:"text-3xl font-bold text-center mb-8"},"Write Your Blog",-1)),J("form",{onSubmit:Sp(s,["prevent"])},[J("div",g1,[o[3]||(o[3]=J("label",{for:"heading",class:"block text-lg font-medium text-white mb-2"},"Blog Heading",-1)),po(J("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),type:"text",id:"heading",class:"w-full p-3 bg-black border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400",placeholder:"Enter blog heading",required:""},null,512),[[ti,e.value]])]),J("div",m1,[o[4]||(o[4]=J("label",{for:"category",class:"block text-lg font-medium text-white mb-2"},"Category",-1)),po(J("input",{"onUpdate:modelValue":o[1]||(o[1]=l=>n.value=l),type:"text",id:"category",class:"w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400",placeholder:"Enter category",required:""},null,512),[[ti,n.value]])]),J("div",_1,[o[5]||(o[5]=J("label",{for:"content",class:"block text-lg font-medium text-white mb-2"},"Blog Content",-1)),po(J("textarea",{"onUpdate:modelValue":o[2]||(o[2]=l=>r.value=l),id:"content",rows:"6",class:"w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400",placeholder:"Write your blog content here",required:""},null,512),[[ti,r.value]])]),J("div",y1,[de(bc,{label:"Submit"})])],32)])]))}},E1={name:"AdminView",components:{CreateBlog:v1}};function T1(t,e,n,r,s,i){const o=sn("CreateBlog");return Ce(),Xe("div",null,[de(o)])}const w1=Jt(E1,[["render",T1]]),I1={class:"mx-auto font-general text-white max-w-4xl px-4"},b1={class:"text-white font-bold text-lg px-2 py-1 sm:py-2 border-gray-500 inline-block border-b"},A1={class:"absolute bottom-3 sm:bottom-7 sm:left-6 left-4 text-sm border px-3 rounded-2xl text-text border-gray-500 bg-black"},R1={class:"text-text px-2 py-2 sm:py-4 leading-relaxed"},S1={class:"text-right"},P1=["onClick"],C1={__name:"BlogList",setup(t){const e=$p(),n=l=>{console.log(l),e.push({name:"BlogDetailPage",params:{id:l}})},r=An([]),s=(l,c)=>{const h=l.split(" ");return h.slice(0,c).join(" ")+(h.length>c?"...":"")},i=Qm(hu,"blogs"),o=async()=>{try{const c=(await c1(i)).docs.map(d=>({...d.data(),id:d.id}));console.log(c);const h=c.reduce((d,p)=>{const m=d.find(v=>v.id===p.id);return m?Object.assign(m,p):d.push(p),d},[]);r.value=h,console.log(r.value)}catch(l){console.log(l)}};return yc(()=>{o()}),(l,c)=>(Ce(),Xe("div",I1,[c[0]||(c[0]=J("h1",{class:"text-xl sm:text-3xl text-center my-6"},[nt("Welcome to "),J("span",{class:"font-bold"}," GM Blog's")],-1)),(Ce(!0),Xe(It,null,Oy(r.value,h=>(Ce(),Xe("div",{key:h.id,class:"bg-box my-4 py-2 sm:py-6 rounded-xl border border-gray-600 px-6 shadow-lg hover:shadow-xl transition-all relative"},[J("h2",b1,zt(h.heading),1),J("div",A1,zt(h.category),1),J("p",R1,zt(s(h.content,4)),1),J("div",S1,[J("button",{onClick:d=>n(h.id),class:"bg-navText text-insideBtnText font-semibold text-sm px-4 py-2 rounded-full hover:bg-blue-400 transition-all"}," Read me ",8,P1)])]))),128))]))}},x1={name:"BlogView",components:{BlogList:C1}},k1={class:"mx-auto w-10/12 sm:w-8/12 bg-black-400"};function D1(t,e,n,r,s,i){const o=sn("BlogList");return Ce(),Xe("div",k1,[de(o)])}const V1=Jt(x1,[["render",D1]]),O1={class:"mt-4 mx-auto w-10/12 sm:w-8/12"},N1={class:"text-white text-xl font-semibold sm:text-3xl border-b border-gray-600 py-2 inline-block"},M1={class:"text-white text-justify leading-relaxed sm:leading-loose tracking-tight mt-4"},L1={__name:"ReadBlog",setup(t){const e=An({}),r=nT().params.id,s=async()=>{try{const i=Ym(hu,"blogs",r),o=await l1(i);o.exists()?e.value=o.data():console.log("No such blog!")}catch(i){console.error("Error fetching blog:",i)}};return yc(()=>{s()}),(i,o)=>(Ce(),Xe("div",O1,[J("h1",N1,zt(e.value.heading),1),J("p",M1,zt(e.value.content),1)]))}},F1={__name:"BlogDetailPage",setup(t){return(e,n)=>(Ce(),Xe("div",null,[de(L1)]))}},uu=eT({history:kE("/vue_blog_portfolio/"),routes:[{path:"/",name:"home",component:ZT},{path:"/blog/:id",name:"BlogDetailPage",component:F1,props:!0},{path:"/login",name:"login",component:eA},{path:"/blog",name:"blog",component:V1},{path:"/admin",name:"admin",component:w1,meta:{requireAuth:!0}}]});uu.beforeEach((t,e,n)=>{t.matched.some(r=>r.meta.requireAuth)?Ng().currentUser?n():(alert("You need to log in to access this page"),n("/login")):n()});var U1="firebase",B1="11.0.2";/**
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
 */Jn(U1,B1,"app");const $1={apiKey:"AIzaSyC23pS5qMboM8Ao0a6cHgcF9RIfeY8j_sc",authDomain:"vue-portfolio-f266b.firebaseapp.com",projectId:"vue-portfolio-f266b",storageBucket:"vue-portfolio-f266b.firebasestorage.app",messagingSenderId:"65146074835",appId:"1:65146074835:web:7d219b62140a53b976c626"},j1=Xp($1),hu=WS(j1),l_=Jv(mT);l_.use(uu);l_.mount("#app");

import{aD as ai}from"./index.e711043e.js";import{t as qc}from"./tslib.a55e5242.js";/**
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
 */const Xd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},vw=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Yd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(t[l],t[h],t[d],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vw(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Iw;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Iw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _w=function(n){const e=Xd(n);return Yd.encodeByteArray(e,!0)},Bs=function(n){return _w(n).replace(/\./g,"")},Jd=function(n){try{return Yd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function $s(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!bw(t)||(n[t]=$s(n[t],e[t]));return n}function bw(n){return n!=="__proto__"}/**
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
 */function Tw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof globalThis<"u")return globalThis;throw new Error("Unable to locate globalThis object.")}/**
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
 */const Ew=()=>Tw().__FIREBASE_DEFAULTS__,Sw=()=>{if(typeof ai>"u"||typeof ai.env>"u")return;const n=ai.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Jd(n[1]);return e&&JSON.parse(e)},go=()=>{try{return Ew()||Sw()||kw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Aw=n=>{var e,t;return(t=(e=go())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Cw=n=>{const e=Aw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Nw=()=>{var n;return(n=go())===null||n===void 0?void 0:n.config},Rw=n=>{var e;return(e=go())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Dw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Zd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Bs(JSON.stringify(t)),Bs(JSON.stringify(o)),a].join(".")}/**
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
 */function X(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function yo(){var n;const e=(n=go())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function Ow(){return typeof self=="object"&&self.self===self}function ef(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tf(){const n=X();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Pw(){return!yo()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hr(){try{return typeof indexedDB=="object"}catch{return!1}}function nf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function Lw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Mw="FirebaseError";class be extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Mw,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,At.prototype.create)}}class At{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Fw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new be(i,a,r)}}function Fw(n,e){return n.replace(Uw,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Uw=/\{\$([^}]+)}/g;/**
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
 */function jl(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Vw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xa(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Kl(s)&&Kl(o)){if(!Xa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Kl(n){return n!==null&&typeof n=="object"}/**
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
 */function Cr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ir(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ti(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function rf(n,e){const t=new Bw(n,e);return t.subscribe.bind(t)}class Bw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");$w(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=va),i.error===void 0&&(i.error=va),i.complete===void 0&&(i.complete=va);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $w(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function va(){}/**
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
 */function A(n){return n&&n._delegate?n._delegate:n}class Ue{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const un="[DEFAULT]";/**
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
 */class qw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Dw;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kw(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jw(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jw(n){return n===un?void 0:n}function Kw(n){return n.instantiationMode==="EAGER"}/**
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
 */class Gw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Kc=[];var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const sf={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Ww=U.INFO,zw={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Hw=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=zw[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wo{constructor(e){this.name=e,this._logLevel=Ww,this._logHandler=Hw,this._userLogHandler=null,Kc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}function Qw(n){Kc.forEach(e=>{e.setLogLevel(n)})}function Xw(n,e){for(const t of Kc){let r=null;e&&e.level&&(r=sf[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&n({level:U[s].toLowerCase(),message:a,args:o,type:i.name})}}}const Yw=(n,e)=>e.some(t=>n instanceof t);let Gl,Wl;function Jw(){return Gl||(Gl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zw(){return Wl||(Wl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const of=new WeakMap,Ya=new WeakMap,af=new WeakMap,Ia=new WeakMap,Gc=new WeakMap;function ev(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(_t(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&of.set(t,n)}).catch(()=>{}),Gc.set(e,n),e}function tv(n){if(Ya.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ya.set(n,e)}let Ja={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ya.get(n);if(e==="objectStoreNames")return n.objectStoreNames||af.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nv(n){Ja=n(Ja)}function rv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(_a(this),e,...t);return af.set(r,e.sort?e.sort():[e]),_t(r)}:Zw().includes(n)?function(...e){return n.apply(_a(this),e),_t(of.get(this))}:function(...e){return _t(n.apply(_a(this),e))}}function iv(n){return typeof n=="function"?rv(n):(n instanceof IDBTransaction&&tv(n),Yw(n,Jw())?new Proxy(n,Ja):n)}function _t(n){if(n instanceof IDBRequest)return ev(n);if(Ia.has(n))return Ia.get(n);const e=iv(n);return e!==n&&(Ia.set(n,e),Gc.set(e,n)),e}const _a=n=>Gc.get(n);function vo(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=_t(o);return r&&o.addEventListener("upgradeneeded",c=>{r(_t(o.result),c.oldVersion,c.newVersion,_t(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}function ba(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",()=>e()),_t(t).then(()=>{})}const sv=["get","getKey","getAll","getAllKeys","count"],ov=["put","add","delete","clear"],Ta=new Map;function zl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ta.get(e))return Ta.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=ov.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sv.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Ta.set(e,s),s}nv(n=>({...n,get:(e,t,r)=>zl(e,t)||n.get(e,t,r),has:(e,t)=>!!zl(e,t)||n.has(e,t)}));/**
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
 */class av{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function cv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Za="@firebase/app",Hl="0.9.5";/**
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
 */const Cn=new wo("@firebase/app"),uv="@firebase/app-compat",lv="@firebase/analytics-compat",hv="@firebase/analytics",dv="@firebase/app-check-compat",fv="@firebase/app-check",pv="@firebase/auth",mv="@firebase/auth-compat",gv="@firebase/database",yv="@firebase/database-compat",wv="@firebase/functions",vv="@firebase/functions-compat",Iv="@firebase/installations",_v="@firebase/installations-compat",bv="@firebase/messaging",Tv="@firebase/messaging-compat",Ev="@firebase/performance",Sv="@firebase/performance-compat",kv="@firebase/remote-config",Av="@firebase/remote-config-compat",Cv="@firebase/storage",Nv="@firebase/storage-compat",Rv="@firebase/firestore",Dv="@firebase/firestore-compat",xv="firebase",Ov="9.18.0";/**
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
 */const jt="[DEFAULT]",Pv={[Za]:"fire-core",[uv]:"fire-core-compat",[hv]:"fire-analytics",[lv]:"fire-analytics-compat",[fv]:"fire-app-check",[dv]:"fire-app-check-compat",[pv]:"fire-auth",[mv]:"fire-auth-compat",[gv]:"fire-rtdb",[yv]:"fire-rtdb-compat",[wv]:"fire-fn",[vv]:"fire-fn-compat",[Iv]:"fire-iid",[_v]:"fire-iid-compat",[bv]:"fire-fcm",[Tv]:"fire-fcm-compat",[Ev]:"fire-perf",[Sv]:"fire-perf-compat",[kv]:"fire-rc",[Av]:"fire-rc-compat",[Cv]:"fire-gcs",[Nv]:"fire-gcs-compat",[Rv]:"fire-fst",[Dv]:"fire-fst-compat","fire-js":"fire-js",[xv]:"fire-js-all"};/**
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
 */const Kt=new Map,vi=new Map;function qs(n,e){try{n.container.addComponent(e)}catch(t){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function cf(n,e){n.container.addOrOverwriteComponent(e)}function Qe(n){const e=n.name;if(vi.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;vi.set(e,n);for(const t of Kt.values())qs(t,n);return!0}function Nr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Lv(n,e,t=jt){Nr(n,e).clearInstance(t)}function Mv(){vi.clear()}/**
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
 */const Fv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bt=new At("app","Firebase",Fv);/**
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
 */class Uv{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
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
 */const Zt=Ov;function Io(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw bt.create("bad-app-name",{appName:String(i)});if(t||(t=Nw()),!t)throw bt.create("no-options");const s=Kt.get(i);if(s){if(Xa(t,s.options)&&Xa(r,s.config))return s;throw bt.create("duplicate-app",{appName:i})}const o=new Gw(i);for(const c of vi.values())o.addComponent(c);const a=new Uv(t,r,o);return Kt.set(i,a),a}function Wc(n=jt){const e=Kt.get(n);if(!e&&n===jt)return Io();if(!e)throw bt.create("no-app",{appName:n});return e}function Vv(){return Array.from(Kt.values())}async function uf(n){const e=n.name;Kt.has(e)&&(Kt.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Te(n,e,t){var r;let i=(r=Pv[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(a.join(" "));return}Qe(new Ue(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function lf(n,e){if(n!==null&&typeof n!="function")throw bt.create("invalid-log-argument");Xw(n,e)}function hf(n){Qw(n)}/**
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
 */const Bv="firebase-heartbeat-database",$v=1,Ii="firebase-heartbeat-store";let Ea=null;function df(){return Ea||(Ea=vo(Bv,$v,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ii)}}}).catch(n=>{throw bt.create("idb-open",{originalErrorMessage:n.message})})),Ea}async function qv(n){try{return(await df()).transaction(Ii).objectStore(Ii).get(ff(n))}catch(e){if(e instanceof be)Cn.warn(e.message);else{const t=bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(t.message)}}}async function Ql(n,e){try{const r=(await df()).transaction(Ii,"readwrite");return await r.objectStore(Ii).put(e,ff(n)),r.done}catch(t){if(t instanceof be)Cn.warn(t.message);else{const r=bt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Cn.warn(r.message)}}}function ff(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jv=1024,Kv=30*24*60*60*1e3;class Gv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zv(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Kv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xl(),{heartbeatsToSend:t,unsentEntries:r}=Wv(this._heartbeatsCache.heartbeats),i=Bs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xl(){return new Date().toISOString().substring(0,10)}function Wv(n,e=jv){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Yl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Yl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class zv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hr()?nf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ql(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ql(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yl(n){return Bs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Hv(n){Qe(new Ue("platform-logger",e=>new av(e),"PRIVATE")),Qe(new Ue("heartbeat",e=>new Gv(e),"PRIVATE")),Te(Za,Hl,n),Te(Za,Hl,"esm2017"),Te("fire-js","")}Hv("");const Qv=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Zt,_DEFAULT_ENTRY_NAME:jt,_addComponent:qs,_addOrOverwriteComponent:cf,_apps:Kt,_clearComponents:Mv,_components:vi,_getProvider:Nr,_registerComponent:Qe,_removeServiceInstance:Lv,deleteApp:uf,getApp:Wc,getApps:Vv,initializeApp:Io,onLog:lf,registerVersion:Te,setLogLevel:hf,FirebaseError:be},Symbol.toStringTag,{value:"Module"}));/**
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
 */const pf="firebasestorage.googleapis.com",mf="storageBucket",Xv=2*60*1e3,Yv=10*60*1e3;/**
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
 */class ne extends be{constructor(e,t,r=0){super(Sa(e),`Firebase Storage: ${t} (${Sa(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Sa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var J;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(J||(J={}));function Sa(n){return"storage/"+n}function zc(){const n="An unknown error occurred, please check the error payload for server response.";return new ne(J.UNKNOWN,n)}function Jv(n){return new ne(J.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Zv(n){return new ne(J.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function eI(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ne(J.UNAUTHENTICATED,n)}function tI(){return new ne(J.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nI(n){return new ne(J.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function rI(){return new ne(J.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iI(){return new ne(J.CANCELED,"User canceled the upload/download.")}function sI(n){return new ne(J.INVALID_URL,"Invalid URL '"+n+"'.")}function oI(n){return new ne(J.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function aI(){return new ne(J.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+mf+"' property when initializing the app?")}function cI(){return new ne(J.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function uI(){return new ne(J.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function lI(n){return new ne(J.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ec(n){return new ne(J.INVALID_ARGUMENT,n)}function gf(){return new ne(J.APP_DELETED,"The Firebase app was deleted.")}function hI(n){return new ne(J.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ci(n,e){return new ne(J.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Kr(n){throw new ne(J.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class ze{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=ze.makeFromUrl(e,t)}catch{return new ze(e,"")}if(r.path==="")return r;throw oI(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(F){F.path_=decodeURIComponent(F.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),w={bucket:1,path:3},I=t===pf?"(?:storage.googleapis.com|storage.cloud.google.com)":t,E="([^?#]*)",P=new RegExp(`^https?://${I}/${i}/${E}`,"i"),R=[{regex:a,indices:c,postModify:s},{regex:p,indices:w,postModify:u},{regex:P,indices:{bucket:1,path:2},postModify:u}];for(let F=0;F<R.length;F++){const j=R[F],B=j.regex.exec(e);if(B){const le=B[j.indices.bucket];let Ve=B[j.indices.path];Ve||(Ve=""),r=new ze(le,Ve),j.postModify(r);break}}if(r==null)throw sI(e);return r}}class dI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function fI(n,e,t){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,n(p,c())},E)}function d(){s&&clearTimeout(s)}function p(E,...P){if(u){d();return}if(E){d(),l.call(null,E,...P);return}if(c()||o){d(),l.call(null,E,...P);return}r<64&&(r*=2);let R;a===1?(a=2,R=0):R=(r+Math.random())*1e3,h(R)}let w=!1;function I(E){w||(w=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,I(!0)},t),I}function pI(n){n(!1)}/**
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
 */function mI(n){return n!==void 0}function gI(n){return typeof n=="object"&&!Array.isArray(n)}function Hc(n){return typeof n=="string"||n instanceof String}function Jl(n){return Qc()&&n instanceof Blob}function Qc(){return typeof Blob<"u"&&!yo()}function Zl(n,e,t,r){if(r<e)throw ec(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw ec(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Xc(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function yf(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
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
 */var bn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(bn||(bn={}));/**
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
 */function yI(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
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
 */class wI{constructor(e,t,r,i,s,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,w)=>{this.resolve_=p,this.reject_=w,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ys(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===bn.NO_ERROR,c=s.getStatus();if(!a||yI(c,this.additionalRetryCodes_)&&this.retry){const l=s.getErrorCode()===bn.ABORT;r(!1,new ys(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new ys(u,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());mI(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=zc();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?gf():iI();o(c)}else{const c=rI();o(c)}};this.canceled_?t(!1,new ys(!1,null,!0)):this.backoffId_=fI(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ys{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function vI(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function II(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function _I(n,e){e&&(n["X-Firebase-GMPID"]=e)}function bI(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function TI(n,e,t,r,i,s,o=!0){const a=yf(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return _I(u,e),vI(u,t),II(u,s),bI(u,r),new wI(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
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
 */function EI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function SI(...n){const e=EI();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Qc())return new Blob(n);throw new ne(J.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function kI(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function AI(n){if(typeof atob>"u")throw lI("base-64");return atob(n)}/**
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
 */const ct={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ka{constructor(e,t){this.data=e,this.contentType=t||null}}function CI(n,e){switch(n){case ct.RAW:return new ka(wf(e));case ct.BASE64:case ct.BASE64URL:return new ka(vf(n,e));case ct.DATA_URL:return new ka(RI(e),DI(e))}throw zc()}function wf(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function NI(n){let e;try{e=decodeURIComponent(n)}catch{throw ci(ct.DATA_URL,"Malformed data URL.")}return wf(e)}function vf(n,e){switch(n){case ct.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ci(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ct.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ci(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=AI(e)}catch(i){throw i.message.includes("polyfill")?i:ci(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class If{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ci(ct.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=xI(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function RI(n){const e=new If(n);return e.base64?vf(ct.BASE64,e.rest):NI(e.rest)}function DI(n){return new If(n).contentType}function xI(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Ft{constructor(e,t){let r=0,i="";Jl(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Jl(this.data_)){const r=this.data_,i=kI(r,e,t);return i===null?null:new Ft(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Ft(r,!0)}}static getBlob(...e){if(Qc()){const t=e.map(r=>r instanceof Ft?r.data_:r);return new Ft(SI.apply(null,t))}else{const t=e.map(o=>Hc(o)?CI(ct.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ft(i,!0)}}uploadData(){return this.data_}}/**
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
 */function _f(n){let e;try{e=JSON.parse(n)}catch{return null}return gI(e)?e:null}/**
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
 */function OI(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function PI(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function bf(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function LI(n,e){return e}class xe{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||LI}}let ws=null;function MI(n){return!Hc(n)||n.length<2?n:bf(n)}function Tf(){if(ws)return ws;const n=[];n.push(new xe("bucket")),n.push(new xe("generation")),n.push(new xe("metageneration")),n.push(new xe("name","fullPath",!0));function e(s,o){return MI(o)}const t=new xe("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new xe("size");return i.xform=r,n.push(i),n.push(new xe("timeCreated")),n.push(new xe("updated")),n.push(new xe("md5Hash",null,!0)),n.push(new xe("cacheControl",null,!0)),n.push(new xe("contentDisposition",null,!0)),n.push(new xe("contentEncoding",null,!0)),n.push(new xe("contentLanguage",null,!0)),n.push(new xe("contentType",null,!0)),n.push(new xe("metadata","customMetadata",!0)),ws=n,ws}function FI(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new ze(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function UI(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return FI(r,n),r}function Ef(n,e,t){const r=_f(e);return r===null?null:UI(n,r,t)}function VI(n,e,t,r){const i=_f(e);if(i===null||!Hc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const l=n.bucket,h=n.fullPath,d="/b/"+o(l)+"/o/"+o(h),p=Xc(d,t,r),w=yf({alt:"media",token:u});return p+w})[0]}function BI(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class Sf{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function kf(n){if(!n)throw zc()}function $I(n,e){function t(r,i){const s=Ef(n,i,e);return kf(s!==null),s}return t}function qI(n,e){function t(r,i){const s=Ef(n,i,e);return kf(s!==null),VI(s,i,n.host,n._protocol)}return t}function Af(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=tI():i=eI():t.getStatus()===402?i=Zv(n.bucket):t.getStatus()===403?i=nI(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function jI(n){const e=Af(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Jv(n.path)),s.serverResponse=i.serverResponse,s}return t}function KI(n,e,t){const r=e.fullServerUrl(),i=Xc(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new Sf(i,s,qI(n,t),o);return a.errorHandler=jI(e),a}function GI(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function WI(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=GI(null,e)),r}function zI(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let R="";for(let F=0;F<2;F++)R=R+Math.random().toString().slice(2);return R}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=WI(e,r,i),l=BI(u,t),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=Ft.getBlob(h,r,d);if(p===null)throw cI();const w={name:u.fullPath},I=Xc(s,n.host,n._protocol),E="POST",P=n.maxUploadRetryTime,$=new Sf(I,E,$I(n,t),P);return $.urlParams=w,$.headers=o,$.body=p.uploadData(),$.errorHandler=Af(e),$}class HI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=bn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=bn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=bn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw Kr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Kr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Kr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Kr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Kr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class QI extends HI{initXhr(){this.xhr_.responseType="text"}}function Cf(){return new QI}/**
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
 */class Nn{constructor(e,t){this._service=e,t instanceof ze?this._location=t:this._location=ze.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Nn(e,t)}get root(){const e=new ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bf(this._location.path)}get storage(){return this._service}get parent(){const e=OI(this._location.path);if(e===null)return null;const t=new ze(this._location.bucket,e);return new Nn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw hI(e)}}function XI(n,e,t){n._throwIfRoot("uploadBytes");const r=zI(n.storage,n._location,Tf(),new Ft(e,!0),t);return n.storage.makeRequestWithTokens(r,Cf).then(i=>({metadata:i,ref:n}))}function YI(n){n._throwIfRoot("getDownloadURL");const e=KI(n.storage,n._location,Tf());return n.storage.makeRequestWithTokens(e,Cf).then(t=>{if(t===null)throw uI();return t})}function JI(n,e){const t=PI(n._location.path,e),r=new ze(n._location.bucket,t);return new Nn(n.storage,r)}/**
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
 */function ZI(n){return/^[A-Za-z]+:\/\//.test(n)}function e_(n,e){return new Nn(n,e)}function Nf(n,e){if(n instanceof Yc){const t=n;if(t._bucket==null)throw aI();const r=new Nn(t,t._bucket);return e!=null?Nf(r,e):r}else return e!==void 0?JI(n,e):n}function t_(n,e){if(e&&ZI(e)){if(n instanceof Yc)return e_(n,e);throw ec("To use ref(service, url), the first argument must be a Storage instance.")}else return Nf(n,e)}function eh(n,e){const t=e==null?void 0:e[mf];return t==null?null:ze.makeFromBucketSpec(t,n)}function n_(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Zd(i,n.app.options.projectId))}class Yc{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=pf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Xv,this._maxUploadRetryTime=Yv,this._requests=new Set,i!=null?this._bucket=ze.makeFromBucketSpec(i,this._host):this._bucket=eh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ze.makeFromBucketSpec(this._url,e):this._bucket=eh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nn(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new dI(gf());{const o=TI(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const th="@firebase/storage",nh="0.11.2";/**
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
 */const Rf="storage";function QR(n,e,t){return n=A(n),XI(n,e,t)}function XR(n){return n=A(n),YI(n)}function YR(n,e){return n=A(n),t_(n,e)}function r_(n=Wc(),e){n=A(n);const r=Nr(n,Rf).getImmediate({identifier:e}),i=Cw("storage");return i&&i_(r,...i),r}function i_(n,e,t,r={}){n_(n,e,t,r)}function s_(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Yc(t,r,i,e,Zt)}function o_(){Qe(new Ue(Rf,s_,"PUBLIC").setMultipleInstances(!0)),Te(th,nh,""),Te(th,nh,"esm2017")}o_();let vs;const a_=new Uint8Array(16);function c_(){if(!vs&&(vs=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!vs))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return vs(a_)}const ve=[];for(let n=0;n<256;++n)ve.push((n+256).toString(16).slice(1));function u_(n,e=0){return(ve[n[e+0]]+ve[n[e+1]]+ve[n[e+2]]+ve[n[e+3]]+"-"+ve[n[e+4]]+ve[n[e+5]]+"-"+ve[n[e+6]]+ve[n[e+7]]+"-"+ve[n[e+8]]+ve[n[e+9]]+"-"+ve[n[e+10]]+ve[n[e+11]]+ve[n[e+12]]+ve[n[e+13]]+ve[n[e+14]]+ve[n[e+15]]).toLowerCase()}const l_=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),rh={randomUUID:l_};function JR(n,e,t){if(rh.randomUUID&&!e&&!n)return rh.randomUUID();n=n||{};const r=n.random||(n.rng||c_)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){t=t||0;for(let i=0;i<16;++i)e[t+i]=r[i];return e}return u_(r)}var h_="firebase",d_="9.18.0";/**
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
 */Te(h_,d_,"app");const Df="@firebase/installations",Jc="0.6.4";/**
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
 */const xf=1e4,Of=`w:${Jc}`,Pf="FIS_v2",f_="https://firebaseinstallations.googleapis.com/v1",p_=60*60*1e3,m_="installations",g_="Installations";/**
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
 */const y_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Rn=new At(m_,g_,y_);function Lf(n){return n instanceof be&&n.code.includes("request-failed")}/**
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
 */function Mf({projectId:n}){return`${f_}/projects/${n}/installations`}function Ff(n){return{token:n.token,requestStatus:2,expiresIn:v_(n.expiresIn),creationTime:Date.now()}}async function Uf(n,e){const r=(await e.json()).error;return Rn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Vf({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function w_(n,{refreshToken:e}){const t=Vf(n);return t.append("Authorization",I_(e)),t}async function Bf(n){const e=await n();return e.status>=500&&e.status<600?n():e}function v_(n){return Number(n.replace("s","000"))}function I_(n){return`${Pf} ${n}`}/**
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
 */async function __({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Mf(n),i=Vf(n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:t,authVersion:Pf,appId:n.appId,sdkVersion:Of},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Bf(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:Ff(u.authToken)}}else throw await Uf("Create Installation",c)}/**
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
 */function $f(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function b_(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const T_=/^[cdef][\w-]{21}$/,tc="";function E_(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=S_(n);return T_.test(t)?t:tc}catch{return tc}}function S_(n){return b_(n).substr(0,22)}/**
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
 */function _o(n){return`${n.appName}!${n.appId}`}/**
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
 */const qf=new Map;function jf(n,e){const t=_o(n);Kf(t,e),k_(t,e)}function Kf(n,e){const t=qf.get(n);if(!!t)for(const r of t)r(e)}function k_(n,e){const t=A_();t&&t.postMessage({key:n,fid:e}),C_()}let gn=null;function A_(){return!gn&&"BroadcastChannel"in self&&(gn=new BroadcastChannel("[Firebase] FID Change"),gn.onmessage=n=>{Kf(n.data.key,n.data.fid)}),gn}function C_(){qf.size===0&&gn&&(gn.close(),gn=null)}/**
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
 */const N_="firebase-installations-database",R_=1,Dn="firebase-installations-store";let Aa=null;function Zc(){return Aa||(Aa=vo(N_,R_,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Dn)}}})),Aa}async function js(n,e){const t=_o(n),i=(await Zc()).transaction(Dn,"readwrite"),s=i.objectStore(Dn),o=await s.get(t);return await s.put(e,t),await i.done,(!o||o.fid!==e.fid)&&jf(n,e.fid),e}async function Gf(n){const e=_o(n),r=(await Zc()).transaction(Dn,"readwrite");await r.objectStore(Dn).delete(e),await r.done}async function bo(n,e){const t=_o(n),i=(await Zc()).transaction(Dn,"readwrite"),s=i.objectStore(Dn),o=await s.get(t),a=e(o);return a===void 0?await s.delete(t):await s.put(a,t),await i.done,a&&(!o||o.fid!==a.fid)&&jf(n,a.fid),a}/**
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
 */async function eu(n){let e;const t=await bo(n.appConfig,r=>{const i=D_(r),s=x_(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===tc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function D_(n){const e=n||{fid:E_(),registrationStatus:0};return Wf(e)}function x_(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Rn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=O_(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:P_(n)}:{installationEntry:e}}async function O_(n,e){try{const t=await __(n,e);return js(n.appConfig,t)}catch(t){throw Lf(t)&&t.customData.serverCode===409?await Gf(n.appConfig):await js(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function P_(n){let e=await ih(n.appConfig);for(;e.registrationStatus===1;)await $f(100),e=await ih(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await eu(n);return r||t}return e}function ih(n){return bo(n,e=>{if(!e)throw Rn.create("installation-not-found");return Wf(e)})}function Wf(n){return L_(n)?{fid:n.fid,registrationStatus:0}:n}function L_(n){return n.registrationStatus===1&&n.registrationTime+xf<Date.now()}/**
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
 */async function M_({appConfig:n,heartbeatServiceProvider:e},t){const r=F_(n,t),i=w_(n,t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Of,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Bf(()=>fetch(r,a));if(c.ok){const u=await c.json();return Ff(u)}else throw await Uf("Generate Auth Token",c)}function F_(n,{fid:e}){return`${Mf(n)}/${e}/authTokens:generate`}/**
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
 */async function tu(n,e=!1){let t;const r=await bo(n.appConfig,s=>{if(!zf(s))throw Rn.create("not-registered");const o=s.authToken;if(!e&&B_(o))return s;if(o.requestStatus===1)return t=U_(n,e),s;{if(!navigator.onLine)throw Rn.create("app-offline");const a=q_(s);return t=V_(n,a),a}});return t?await t:r.authToken}async function U_(n,e){let t=await sh(n.appConfig);for(;t.authToken.requestStatus===1;)await $f(100),t=await sh(n.appConfig);const r=t.authToken;return r.requestStatus===0?tu(n,e):r}function sh(n){return bo(n,e=>{if(!zf(e))throw Rn.create("not-registered");const t=e.authToken;return j_(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function V_(n,e){try{const t=await M_(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await js(n.appConfig,r),t}catch(t){if(Lf(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Gf(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await js(n.appConfig,r)}throw t}}function zf(n){return n!==void 0&&n.registrationStatus===2}function B_(n){return n.requestStatus===2&&!$_(n)}function $_(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+p_}function q_(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function j_(n){return n.requestStatus===1&&n.requestTime+xf<Date.now()}/**
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
 */async function K_(n){const e=n,{installationEntry:t,registrationPromise:r}=await eu(e);return r?r.catch(console.error):tu(e).catch(console.error),t.fid}/**
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
 */async function G_(n,e=!1){const t=n;return await W_(t),(await tu(t,e)).token}async function W_(n){const{registrationPromise:e}=await eu(n);e&&await e}/**
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
 */function z_(n){if(!n||!n.options)throw Ca("App Configuration");if(!n.name)throw Ca("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ca(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ca(n){return Rn.create("missing-app-config-values",{valueName:n})}/**
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
 */const Hf="installations",H_="installations-internal",Q_=n=>{const e=n.getProvider("app").getImmediate(),t=z_(e),r=Nr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},X_=n=>{const e=n.getProvider("app").getImmediate(),t=Nr(e,Hf).getImmediate();return{getId:()=>K_(t),getToken:i=>G_(t,i)}};function Y_(){Qe(new Ue(Hf,Q_,"PUBLIC")),Qe(new Ue(H_,X_,"PRIVATE"))}Y_();Te(Df,Jc);Te(Df,Jc,"esm2017");/**
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
 */const J_="/firebase-messaging-sw.js",Z_="/firebase-cloud-messaging-push-scope",Qf="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",eb="https://fcmregistrations.googleapis.com/v1",Xf="google.c.a.c_id",tb="google.c.a.c_l",nb="google.c.a.ts",rb="google.c.a.e";var oh;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(oh||(oh={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var _i;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(_i||(_i={}));/**
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
 */function yt(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ib(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Na="fcm_token_details_db",sb=5,ah="fcm_token_object_Store";async function ob(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Na))return null;let e=null;return(await vo(Na,sb,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(ah))return;const c=o.objectStore(ah),u=await c.index("fcmSenderId").get(n);if(await c.clear(),!!u){if(i===2){const l=u;if(!l.auth||!l.p256dh||!l.endpoint)return;e={token:l.fcmToken,createTime:(a=l.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:yt(l.vapidKey)}}}else if(i===3){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:yt(l.auth),p256dh:yt(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:yt(l.vapidKey)}}}else if(i===4){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:yt(l.auth),p256dh:yt(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:yt(l.vapidKey)}}}}}})).close(),await ba(Na),await ba("fcm_vapid_details_db"),await ba("undefined"),ab(e)?e:null}function ab(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const cb="firebase-messaging-database",ub=1,xn="firebase-messaging-store";let Ra=null;function nu(){return Ra||(Ra=vo(cb,ub,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(xn)}}})),Ra}async function Yf(n){const e=iu(n),r=await(await nu()).transaction(xn).objectStore(xn).get(e);if(r)return r;{const i=await ob(n.appConfig.senderId);if(i)return await ru(n,i),i}}async function ru(n,e){const t=iu(n),i=(await nu()).transaction(xn,"readwrite");return await i.objectStore(xn).put(e,t),await i.done,e}async function lb(n){const e=iu(n),r=(await nu()).transaction(xn,"readwrite");await r.objectStore(xn).delete(e),await r.done}function iu({appConfig:n}){return n.appId}/**
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
 */const hb={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Me=new At("messaging","Messaging",hb);/**
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
 */async function db(n,e){const t=await ou(n),r=Zf(e),i={method:"POST",headers:t,body:JSON.stringify(r)};let s;try{s=await(await fetch(su(n.appConfig),i)).json()}catch(o){throw Me.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Me.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Me.create("token-subscribe-no-token");return s.token}async function fb(n,e){const t=await ou(n),r=Zf(e.subscriptionOptions),i={method:"PATCH",headers:t,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${su(n.appConfig)}/${e.token}`,i)).json()}catch(o){throw Me.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Me.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Me.create("token-update-no-token");return s.token}async function Jf(n,e){const r={method:"DELETE",headers:await ou(n)};try{const s=await(await fetch(`${su(n.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Me.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Me.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function su({projectId:n}){return`${eb}/projects/${n}/registrations`}async function ou({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function Zf({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const i={web:{endpoint:t,auth:e,p256dh:n}};return r!==Qf&&(i.web.applicationPubKey=r),i}/**
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
 */const pb=7*24*60*60*1e3;async function mb(n){const e=await wb(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:yt(e.getKey("auth")),p256dh:yt(e.getKey("p256dh"))},r=await Yf(n.firebaseDependencies);if(r){if(vb(r.subscriptionOptions,t))return Date.now()>=r.createTime+pb?yb(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await Jf(n.firebaseDependencies,r.token)}catch(i){console.warn(i)}return ch(n.firebaseDependencies,t)}else return ch(n.firebaseDependencies,t)}async function gb(n){const e=await Yf(n.firebaseDependencies);e&&(await Jf(n.firebaseDependencies,e.token),await lb(n.firebaseDependencies));const t=await n.swRegistration.pushManager.getSubscription();return t?t.unsubscribe():!0}async function yb(n,e){try{const t=await fb(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await ru(n.firebaseDependencies,r),t}catch(t){throw await gb(n),t}}async function ch(n,e){const r={token:await db(n,e),createTime:Date.now(),subscriptionOptions:e};return await ru(n,r),r.token}async function wb(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ib(e)})}function vb(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,i=e.auth===n.auth,s=e.p256dh===n.p256dh;return t&&r&&i&&s}/**
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
 */function uh(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return Ib(e,n),_b(e,n),bb(e,n),e}function Ib(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const i=e.notification.image;i&&(n.notification.image=i);const s=e.notification.icon;s&&(n.notification.icon=s)}function _b(n,e){!e.data||(n.data=e.data)}function bb(n,e){var t,r,i,s,o;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(n.fcmOptions.link=a);const c=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(n.fcmOptions.analyticsLabel=c)}/**
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
 */function Tb(n){return typeof n=="object"&&!!n&&Xf in n}/**
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
 */ep("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");ep("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function ep(n,e){const t=[];for(let r=0;r<n.length;r++)t.push(n.charAt(r)),r<e.length&&t.push(e.charAt(r));return t.join("")}/**
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
 */function Eb(n){if(!n||!n.options)throw Da("App Configuration Object");if(!n.name)throw Da("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw Da(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Da(n){return Me.create("missing-app-config-values",{valueName:n})}/**
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
 */class Sb{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Eb(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function kb(n){try{n.swRegistration=await navigator.serviceWorker.register(J_,{scope:Z_}),n.swRegistration.update().catch(()=>{})}catch(e){throw Me.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function Ab(n,e){if(!e&&!n.swRegistration&&await kb(n),!(!e&&!!n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Me.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function Cb(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Qf)}/**
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
 */async function Nb(n,e){if(!navigator)throw Me.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Me.create("permission-blocked");return await Cb(n,e==null?void 0:e.vapidKey),await Ab(n,e==null?void 0:e.serviceWorkerRegistration),mb(n)}/**
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
 */async function Rb(n,e,t){const r=Db(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[Xf],message_name:t[tb],message_time:t[nb],message_device_time:Math.floor(Date.now()/1e3)})}function Db(n){switch(n){case _i.NOTIFICATION_CLICKED:return"notification_open";case _i.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function xb(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===_i.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(uh(t)):n.onMessageHandler.next(uh(t)));const r=t.data;Tb(r)&&r[rb]==="1"&&await Rb(n,t.messageType,r)}const lh="@firebase/messaging",hh="0.12.4";/**
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
 */const Ob=n=>{const e=new Sb(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>xb(e,t)),e},Pb=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>Nb(e,r)}};function Lb(){Qe(new Ue("messaging",Ob,"PUBLIC")),Qe(new Ue("messaging-internal",Pb,"PRIVATE")),Te(lh,hh),Te(lh,hh,"esm2017")}/**
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
 */async function Mb(){try{await nf()}catch{return!1}return typeof window<"u"&&hr()&&Lw()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Fb(n=Wc()){return Mb().then(e=>{if(!e)throw Me.create("unsupported-browser")},e=>{throw Me.create("indexed-db-unsupported")}),Nr(A(n),"messaging").getImmediate()}Lb();/**
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
 */class Ub{constructor(e,t){this._delegate=e,this.firebase=t,qs(e,new Ue("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),uf(this._delegate)))}_getService(e,t=jt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=jt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){qs(this._delegate,e)}_addOrOverwriteComponent(e){cf(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Vb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},dh=new At("app-compat","Firebase",Vb);/**
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
 */function Bb(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Te,setLogLevel:hf,onLog:lf,apps:null,SDK_VERSION:Zt,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:Qv}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||jt,!jl(e,u))throw dh.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=Io(u,l);if(jl(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Qe(u)&&u.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw dh.create("invalid-app-argument",{appName:l});return p[h]()};u.serviceProps!==void 0&&$s(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...p){return this._getService.bind(this,l).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
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
 */function tp(){const n=Bb(Ub);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:tp,extendNamespace:e,createSubscribe:rf,ErrorFactory:At,deepExtend:$s});function e(t){$s(n,t)}return n}const $b=tp();/**
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
 */const fh=new wo("@firebase/app-compat"),qb="@firebase/app-compat",jb="0.2.5";/**
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
 */function Kb(n){Te(qb,jb,n)}/**
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
 */if(Ow()&&self.firebase!==void 0){fh.warn(`
    Warning: Firebase is already defined in the globalThis scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&fh.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const To=$b;Kb();var Gb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},S,au=au||{},N=Gb||self;function Ks(){}function Eo(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Gi(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Wb(n){return Object.prototype.hasOwnProperty.call(n,xa)&&n[xa]||(n[xa]=++zb)}var xa="closure_uid_"+(1e9*Math.random()>>>0),zb=0;function Hb(n,e,t){return n.call.apply(n.bind,arguments)}function Qb(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Re(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Re=Hb:Re=Qb,Re.apply(null,arguments)}function Is(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Ce(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function en(){this.s=this.s,this.o=this.o}var Xb=0;en.prototype.s=!1;en.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Xb!=0)&&Wb(this)};en.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const np=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function cu(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function ph(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(Eo(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function De(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var Yb=function(){if(!N.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{N.addEventListener("test",Ks,e),N.removeEventListener("test",Ks,e)}catch{}return n}();function Gs(n){return/^[\s\xa0]*$/.test(n)}var mh=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Oa(n,e){return n<e?-1:n>e?1:0}function So(){var n=N.navigator;return n&&(n=n.userAgent)?n:""}function rt(n){return So().indexOf(n)!=-1}function uu(n){return uu[" "](n),n}uu[" "]=Ks;function Jb(n){var e=tT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var Zb=rt("Opera"),dr=rt("Trident")||rt("MSIE"),rp=rt("Edge"),nc=rp||dr,ip=rt("Gecko")&&!(So().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge"))&&!(rt("Trident")||rt("MSIE"))&&!rt("Edge"),eT=So().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge");function sp(){var n=N.document;return n?n.documentMode:void 0}var Ws;e:{var Pa="",La=function(){var n=So();if(ip)return/rv:([^\);]+)(\)|;)/.exec(n);if(rp)return/Edge\/([\d\.]+)/.exec(n);if(dr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(eT)return/WebKit\/(\S+)/.exec(n);if(Zb)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(La&&(Pa=La?La[1]:""),dr){var Ma=sp();if(Ma!=null&&Ma>parseFloat(Pa)){Ws=String(Ma);break e}}Ws=Pa}var tT={};function nT(){return Jb(function(){let n=0;const e=mh(String(Ws)).split("."),t=mh("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var i=e[o]||"",s=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;n=Oa(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Oa(i[2].length==0,s[2].length==0)||Oa(i[2],s[2]),i=i[3],s=s[3]}while(n==0)}return 0<=n})}var rc;if(N.document&&dr){var gh=sp();rc=gh||parseInt(Ws,10)||void 0}else rc=void 0;var rT=rc;function bi(n,e){if(De.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(ip){e:{try{uu(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:iT[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&bi.X.h.call(this)}}Ce(bi,De);var iT={2:"touch",3:"pen",4:"mouse"};bi.prototype.h=function(){bi.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Wi="closure_listenable_"+(1e6*Math.random()|0),sT=0;function oT(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ha=i,this.key=++sT,this.ba=this.ea=!1}function ko(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function lu(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function op(n){const e={};for(const t in n)e[t]=n[t];return e}const yh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ap(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<yh.length;s++)t=yh[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Ao(n){this.src=n,this.g={},this.h=0}Ao.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=sc(n,e,r,i);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new oT(e,this.src,s,!!r,i),e.ea=t,n.push(e)),e};function ic(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=np(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ko(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function sc(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.ba&&s.listener==e&&s.capture==!!t&&s.ha==r)return i}return-1}var hu="closure_lm_"+(1e6*Math.random()|0),Fa={};function cp(n,e,t,r,i){if(r&&r.once)return lp(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)cp(n,e[s],t,r,i);return null}return t=pu(t),n&&n[Wi]?n.N(e,t,Gi(r)?!!r.capture:!!r,i):up(n,e,t,!1,r,i)}function up(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Gi(i)?!!i.capture:!!i,a=fu(n);if(a||(n[hu]=a=new Ao(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=aT(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)Yb||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(dp(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function aT(){function n(t){return e.call(n.src,n.listener,t)}const e=cT;return n}function lp(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)lp(n,e[s],t,r,i);return null}return t=pu(t),n&&n[Wi]?n.O(e,t,Gi(r)?!!r.capture:!!r,i):up(n,e,t,!0,r,i)}function hp(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)hp(n,e[s],t,r,i);else r=Gi(r)?!!r.capture:!!r,t=pu(t),n&&n[Wi]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=sc(s,t,r,i),-1<t&&(ko(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=fu(n))&&(e=n.g[e.toString()],n=-1,e&&(n=sc(e,t,r,i)),(t=-1<n?e[n]:null)&&du(t))}function du(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[Wi])ic(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(dp(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=fu(e))?(ic(t,n),t.h==0&&(t.src=null,e[hu]=null)):ko(n)}}}function dp(n){return n in Fa?Fa[n]:Fa[n]="on"+n}function cT(n,e){if(n.ba)n=!0;else{e=new bi(e,this);var t=n.listener,r=n.ha||n.src;n.ea&&du(n),n=t.call(r,e)}return n}function fu(n){return n=n[hu],n instanceof Ao?n:null}var Ua="__closure_events_fn_"+(1e9*Math.random()>>>0);function pu(n){return typeof n=="function"?n:(n[Ua]||(n[Ua]=function(e){return n.handleEvent(e)}),n[Ua])}function pe(){en.call(this),this.i=new Ao(this),this.P=this,this.I=null}Ce(pe,en);pe.prototype[Wi]=!0;pe.prototype.removeEventListener=function(n,e,t,r){hp(this,n,e,t,r)};function Ee(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new De(e,n);else if(e instanceof De)e.target=e.target||n;else{var i=e;e=new De(r,n),ap(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=_s(o,r,!0,e)&&i}if(o=e.g=n,i=_s(o,r,!0,e)&&i,i=_s(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=_s(o,r,!1,e)&&i}pe.prototype.M=function(){if(pe.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)ko(t[r]);delete n.g[e],n.h--}}this.I=null};pe.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};pe.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function _s(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&ic(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var mu=N.JSON.stringify;function uT(){var n=mp;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class lT{constructor(){this.h=this.g=null}add(e,t){const r=fp.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var fp=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new hT,n=>n.reset());class hT{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function dT(n){N.setTimeout(()=>{throw n},0)}function pp(n,e){oc||fT(),ac||(oc(),ac=!0),mp.add(n,e)}var oc;function fT(){var n=N.Promise.resolve(void 0);oc=function(){n.then(pT)}}var ac=!1,mp=new lT;function pT(){for(var n;n=uT();){try{n.h.call(n.g)}catch(t){dT(t)}var e=fp;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}ac=!1}function Co(n,e){pe.call(this),this.h=n||1,this.g=e||N,this.j=Re(this.lb,this),this.l=Date.now()}Ce(Co,pe);S=Co.prototype;S.ca=!1;S.R=null;S.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ee(this,"tick"),this.ca&&(gu(this),this.start()))}};S.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function gu(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}S.M=function(){Co.X.M.call(this),gu(this),delete this.g};function yu(n,e,t){if(typeof n=="function")t&&(n=Re(n,t));else if(n&&typeof n.handleEvent=="function")n=Re(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:N.setTimeout(n,e||0)}function gp(n){n.g=yu(()=>{n.g=null,n.i&&(n.i=!1,gp(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class mT extends en{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gp(this)}M(){super.M(),this.g&&(N.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ti(n){en.call(this),this.h=n,this.g={}}Ce(Ti,en);var wh=[];function yp(n,e,t,r){Array.isArray(t)||(t&&(wh[0]=t.toString()),t=wh);for(var i=0;i<t.length;i++){var s=cp(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function wp(n){lu(n.g,function(e,t){this.g.hasOwnProperty(t)&&du(e)},n),n.g={}}Ti.prototype.M=function(){Ti.X.M.call(this),wp(this)};Ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function No(){this.g=!0}No.prototype.Aa=function(){this.g=!1};function gT(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function yT(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function sr(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+vT(n,t)+(r?" "+r:"")})}function wT(n,e){n.info(function(){return"TIMEOUT: "+e})}No.prototype.info=function(){};function vT(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return mu(t)}catch{return e}}var Gn={},vh=null;function Ro(){return vh=vh||new pe}Gn.Pa="serverreachability";function vp(n){De.call(this,Gn.Pa,n)}Ce(vp,De);function Ei(n){const e=Ro();Ee(e,new vp(e))}Gn.STAT_EVENT="statevent";function Ip(n,e){De.call(this,Gn.STAT_EVENT,n),this.stat=e}Ce(Ip,De);function Le(n){const e=Ro();Ee(e,new Ip(e,n))}Gn.Qa="timingevent";function _p(n,e){De.call(this,Gn.Qa,n),this.size=e}Ce(_p,De);function zi(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return N.setTimeout(function(){n()},e)}var Do={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},bp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function wu(){}wu.prototype.h=null;function Ih(n){return n.h||(n.h=n.i())}function Tp(){}var Hi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vu(){De.call(this,"d")}Ce(vu,De);function Iu(){De.call(this,"c")}Ce(Iu,De);var cc;function xo(){}Ce(xo,wu);xo.prototype.g=function(){return new XMLHttpRequest};xo.prototype.i=function(){return{}};cc=new xo;function Qi(n,e,t,r){this.l=n,this.j=e,this.m=t,this.U=r||1,this.S=new Ti(this),this.O=IT,n=nc?125:void 0,this.T=new Co(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ep}function Ep(){this.i=null,this.g="",this.h=!1}var IT=45e3,uc={},zs={};S=Qi.prototype;S.setTimeout=function(n){this.O=n};function lc(n,e,t){n.K=1,n.v=Po(Et(e)),n.s=t,n.P=!0,Sp(n,null)}function Sp(n,e){n.F=Date.now(),Xi(n),n.A=Et(n.v);var t=n.A,r=n.U;Array.isArray(r)||(r=[String(r)]),Op(t.i,"t",r),n.C=0,t=n.l.H,n.h=new Ep,n.g=em(n.l,t?e:null,!n.s),0<n.N&&(n.L=new mT(Re(n.La,n,n.g),n.N)),yp(n.S,n.g,"readystatechange",n.ib),e=n.H?op(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),Ei(),gT(n.j,n.u,n.A,n.m,n.U,n.s)}S.ib=function(n){n=n.target;const e=this.L;e&&wt(n)==3?e.l():this.La(n)};S.La=function(n){try{if(n==this.g)e:{const l=wt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||nc||this.g&&(this.h.h||this.g.fa()||Eh(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Ei(3):Ei(2)),Oo(this);var t=this.g.aa();this.Y=t;t:if(kp(this)){var r=Eh(this.g);n="";var i=r.length,s=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),ui(this);var o="";break t}this.h.i=new N.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,yT(this.j,this.u,this.A,this.m,this.U,l,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gs(a)){var u=a;break t}}u=null}if(t=u)sr(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,hc(this,t);else{this.i=!1,this.o=3,Le(12),yn(this),ui(this);break e}}this.P?(Ap(this,l,o),nc&&this.i&&l==3&&(yp(this.S,this.T,"tick",this.hb),this.T.start())):(sr(this.j,this.m,o,null),hc(this,o)),l==4&&yn(this),this.i&&!this.I&&(l==4?Xp(this.l,this):(this.i=!1,Xi(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Le(12)):(this.o=0,Le(13)),yn(this),ui(this)}}}catch{}finally{}};function kp(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function Ap(n,e,t){let r=!0,i;for(;!n.I&&n.C<t.length;)if(i=_T(n,t),i==zs){e==4&&(n.o=4,Le(14),r=!1),sr(n.j,n.m,null,"[Incomplete Response]");break}else if(i==uc){n.o=4,Le(15),sr(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else sr(n.j,n.m,i,null),hc(n,i);kp(n)&&i!=zs&&i!=uc&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Le(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Au(e),e.K=!0,Le(11))):(sr(n.j,n.m,t,"[Invalid Chunked Response]"),yn(n),ui(n))}S.hb=function(){if(this.g){var n=wt(this.g),e=this.g.fa();this.C<e.length&&(Oo(this),Ap(this,n,e),this.i&&n!=4&&Xi(this))}};function _T(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?zs:(t=Number(e.substring(t,r)),isNaN(t)?uc:(r+=1,r+t>e.length?zs:(e=e.substr(r,t),n.C=r+t,e)))}S.cancel=function(){this.I=!0,yn(this)};function Xi(n){n.V=Date.now()+n.O,Cp(n,n.O)}function Cp(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=zi(Re(n.gb,n),e)}function Oo(n){n.B&&(N.clearTimeout(n.B),n.B=null)}S.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(wT(this.j,this.A),this.K!=2&&(Ei(),Le(17)),yn(this),this.o=2,ui(this)):Cp(this,this.V-n)};function ui(n){n.l.G==0||n.I||Xp(n.l,n)}function yn(n){Oo(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,gu(n.T),wp(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function hc(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||dc(t.h,n))){if(!n.J&&dc(t.h,n)&&t.G==3){try{var r=t.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Xs(t),Fo(t);else break e;ku(t),Le(18)}}else t.Ba=i[1],0<t.Ba-t.T&&37500>i[2]&&t.L&&t.A==0&&!t.v&&(t.v=zi(Re(t.cb,t),6e3));if(1>=Mp(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else wn(t,11)}else if((n.J||t.g==n)&&Xs(t),!Gs(e))for(i=t.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.T=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.I=u[1],t.ka=u[2];const l=u[3];l!=null&&(t.ma=l,t.j.info("VER="+t.ma));const h=u[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.J=r,t.j.info("backChannelRequestTimeoutMs_="+r)),r=t;const p=n.g;if(p){const w=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.h;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(_u(s,s.h),s.h=null))}if(r.D){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.za=I,z(r.F,r.D,I))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),r=t;var o=n;if(r.sa=Zp(r,r.H?r.ka:null,r.V),o.J){Fp(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Oo(a),Xi(a)),r.g=o}else Hp(r);0<t.i.length&&Uo(t)}else u[0]!="stop"&&u[0]!="close"||wn(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?wn(t,7):Su(t):u[0]!="noop"&&t.l&&t.l.wa(u),t.A=0)}}Ei(4)}catch{}}function bT(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Eo(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function TT(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Eo(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Np(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Eo(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=TT(n),r=bT(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var Rp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ET(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Tn(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Tn){this.h=e!==void 0?e:n.h,Hs(this,n.j),this.s=n.s,this.g=n.g,Qs(this,n.m),this.l=n.l,e=n.i;var t=new Si;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),_h(this,t),this.o=n.o}else n&&(t=String(n).match(Rp))?(this.h=!!e,Hs(this,t[1]||"",!0),this.s=ni(t[2]||""),this.g=ni(t[3]||"",!0),Qs(this,t[4]),this.l=ni(t[5]||"",!0),_h(this,t[6]||"",!0),this.o=ni(t[7]||"")):(this.h=!!e,this.i=new Si(null,this.h))}Tn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ri(e,bh,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ri(e,bh,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(ri(t,t.charAt(0)=="/"?AT:kT,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ri(t,NT)),n.join("")};function Et(n){return new Tn(n)}function Hs(n,e,t){n.j=t?ni(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Qs(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function _h(n,e,t){e instanceof Si?(n.i=e,RT(n.i,n.h)):(t||(e=ri(e,CT)),n.i=new Si(e,n.h))}function z(n,e,t){n.i.set(e,t)}function Po(n){return z(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ni(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ri(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,ST),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function ST(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var bh=/[#\/\?@]/g,kT=/[#\?:]/g,AT=/[#\?]/g,CT=/[#\?@]/g,NT=/#/g;function Si(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function tn(n){n.g||(n.g=new Map,n.h=0,n.i&&ET(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}S=Si.prototype;S.add=function(n,e){tn(this),this.i=null,n=Rr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Dp(n,e){tn(n),e=Rr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function xp(n,e){return tn(n),e=Rr(n,e),n.g.has(e)}S.forEach=function(n,e){tn(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};S.oa=function(){tn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};S.W=function(n){tn(this);let e=[];if(typeof n=="string")xp(this,n)&&(e=e.concat(this.g.get(Rr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};S.set=function(n,e){return tn(this),this.i=null,n=Rr(this,n),xp(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};S.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function Op(n,e,t){Dp(n,e),0<t.length&&(n.i=null,n.g.set(Rr(n,e),cu(t)),n.h+=t.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Rr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function RT(n,e){e&&!n.j&&(tn(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(Dp(this,r),Op(this,i,t))},n)),n.j=e}var DT=class{constructor(n,e){this.h=n,this.g=e}};function Pp(n){this.l=n||xT,N.PerformanceNavigationTiming?(n=N.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(N.g&&N.g.Ga&&N.g.Ga()&&N.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xT=10;function Lp(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Mp(n){return n.h?1:n.g?n.g.size:0}function dc(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function _u(n,e){n.g?n.g.add(e):n.h=e}function Fp(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Pp.prototype.cancel=function(){if(this.i=Up(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Up(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return cu(n.i)}function bu(){}bu.prototype.stringify=function(n){return N.JSON.stringify(n,void 0)};bu.prototype.parse=function(n){return N.JSON.parse(n,void 0)};function OT(){this.g=new bu}function PT(n,e,t){const r=t||"";try{Np(n,function(i,s){let o=i;Gi(i)&&(o=mu(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function LT(n,e){const t=new No;if(N.Image){const r=new Image;r.onload=Is(bs,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Is(bs,t,r,"TestLoadImage: error",!1,e),r.onabort=Is(bs,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Is(bs,t,r,"TestLoadImage: timeout",!1,e),N.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function bs(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Yi(n){this.l=n.ac||null,this.j=n.jb||!1}Ce(Yi,wu);Yi.prototype.g=function(){return new Lo(this.l,this.j)};Yi.prototype.i=function(n){return function(){return n}}({});function Lo(n,e){pe.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Tu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ce(Lo,pe);var Tu=0;S=Lo.prototype;S.open=function(n,e){if(this.readyState!=Tu)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,ki(this)};S.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||N).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ji(this)),this.readyState=Tu};S.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ki(this)),this.g&&(this.readyState=3,ki(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof N.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vp(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function Vp(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}S.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Ji(this):ki(this),this.readyState==3&&Vp(this)}};S.Va=function(n){this.g&&(this.response=this.responseText=n,Ji(this))};S.Ua=function(n){this.g&&(this.response=n,Ji(this))};S.ga=function(){this.g&&Ji(this)};function Ji(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ki(n)}S.setRequestHeader=function(n,e){this.v.append(n,e)};S.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function ki(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Lo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var MT=N.JSON.parse;function Z(n){pe.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bp,this.K=this.L=!1}Ce(Z,pe);var Bp="",FT=/^https?$/i,UT=["POST","PUT"];S=Z.prototype;S.Ka=function(n){this.L=n};S.da=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():cc.g(),this.C=this.u?Ih(this.u):Ih(cc),this.g.onreadystatechange=Re(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(s){Th(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=N.FormData&&n instanceof N.FormData,!(0<=np(UT,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{jp(this),0<this.B&&((this.K=VT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Re(this.qa,this)):this.A=yu(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Th(this,s)}};function VT(n){return dr&&nT()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}S.qa=function(){typeof au<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ee(this,"timeout"),this.abort(8))};function Th(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,$p(n),Mo(n)}function $p(n){n.D||(n.D=!0,Ee(n,"complete"),Ee(n,"error"))}S.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Ee(this,"complete"),Ee(this,"abort"),Mo(this))};S.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mo(this,!0)),Z.X.M.call(this)};S.Ha=function(){this.s||(this.F||this.v||this.l?qp(this):this.fb())};S.fb=function(){qp(this)};function qp(n){if(n.h&&typeof au<"u"&&(!n.C[1]||wt(n)!=4||n.aa()!=2)){if(n.v&&wt(n)==4)yu(n.Ha,0,n);else if(Ee(n,"readystatechange"),wt(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var i=String(n.H).match(Rp)[1]||null;if(!i&&N.self&&N.self.location){var s=N.self.location.protocol;i=s.substr(0,s.length-1)}r=!FT.test(i?i.toLowerCase():"")}t=r}if(t)Ee(n,"complete"),Ee(n,"success");else{n.m=6;try{var o=2<wt(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",$p(n)}}finally{Mo(n)}}}}function Mo(n,e){if(n.g){jp(n);const t=n.g,r=n.C[0]?Ks:null;n.g=null,n.C=null,e||Ee(n,"ready");try{t.onreadystatechange=r}catch{}}}function jp(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(N.clearTimeout(n.A),n.A=null)}function wt(n){return n.g?n.g.readyState:0}S.aa=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}};S.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),MT(e)}};function Eh(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case Bp:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}S.Ea=function(){return this.m};S.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Kp(n){let e="";return lu(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Eu(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Kp(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):z(n,e,t))}function Gr(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Gp(n){this.Ca=0,this.i=[],this.j=new No,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gr("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gr("baseRetryDelayMs",5e3,n),this.bb=Gr("retryDelaySeedMs",1e4,n),this.$a=Gr("forwardChannelMaxRetries",2,n),this.ta=Gr("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Pp(n&&n.concurrentRequestLimit),this.Fa=new OT,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}S=Gp.prototype;S.ma=8;S.G=1;function Su(n){if(Wp(n),n.G==3){var e=n.U++,t=Et(n.F);z(t,"SID",n.I),z(t,"RID",e),z(t,"TYPE","terminate"),Zi(n,t),e=new Qi(n,n.j,e,void 0),e.K=2,e.v=Po(Et(t)),t=!1,N.navigator&&N.navigator.sendBeacon&&(t=N.navigator.sendBeacon(e.v.toString(),"")),!t&&N.Image&&(new Image().src=e.v,t=!0),t||(e.g=em(e.l,null),e.g.da(e.v)),e.F=Date.now(),Xi(e)}Jp(n)}function Fo(n){n.g&&(Au(n),n.g.cancel(),n.g=null)}function Wp(n){Fo(n),n.u&&(N.clearTimeout(n.u),n.u=null),Xs(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&N.clearTimeout(n.m),n.m=null)}function Uo(n){Lp(n.h)||n.m||(n.m=!0,pp(n.Ja,n),n.C=0)}function BT(n,e){return Mp(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=zi(Re(n.Ja,n,e),Yp(n,n.C)),n.C++,!0)}S.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const i=new Qi(this,this.j,n,void 0);let s=this.s;if(this.S&&(s?(s=op(s),ap(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var r=this.i[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=zp(this,i,e),t=Et(this.F),z(t,"RID",n),z(t,"CVER",22),this.D&&z(t,"X-HTTP-Session-Id",this.D),Zi(this,t),s&&(this.N?e="headers="+encodeURIComponent(String(Kp(s)))+"&"+e:this.o&&Eu(t,this.o,s)),_u(this.h,i),this.Ya&&z(t,"TYPE","init"),this.O?(z(t,"$req",e),z(t,"SID","null"),i.Z=!0,lc(i,t,null)):lc(i,t,e),this.G=2}}else this.G==3&&(n?Sh(this,n):this.i.length==0||Lp(this.h)||Sh(this))};function Sh(n,e){var t;e?t=e.m:t=n.U++;const r=Et(n.F);z(r,"SID",n.I),z(r,"RID",t),z(r,"AID",n.T),Zi(n,r),n.o&&n.s&&Eu(r,n.o,n.s),t=new Qi(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=zp(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),_u(n.h,t),lc(t,r,e)}function Zi(n,e){n.ia&&lu(n.ia,function(t,r){z(e,r,t)}),n.l&&Np({},function(t,r){z(e,r,t)})}function zp(n,e,t){t=Math.min(n.i.length,t);var r=n.l?Re(n.l.Ra,n.l,n):null;e:{var i=n.i;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{PT(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,r}function Hp(n){n.g||n.u||(n.Z=1,pp(n.Ia,n),n.A=0)}function ku(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=zi(Re(n.Ia,n),Yp(n,n.A)),n.A++,!0)}S.Ia=function(){if(this.u=null,Qp(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=zi(Re(this.eb,this),n)}};S.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Le(10),Fo(this),Qp(this))};function Au(n){n.B!=null&&(N.clearTimeout(n.B),n.B=null)}function Qp(n){n.g=new Qi(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Et(n.sa);z(e,"RID","rpc"),z(e,"SID",n.I),z(e,"CI",n.L?"0":"1"),z(e,"AID",n.T),z(e,"TYPE","xmlhttp"),Zi(n,e),n.o&&n.s&&Eu(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Po(Et(e)),t.s=null,t.P=!0,Sp(t,n)}S.cb=function(){this.v!=null&&(this.v=null,Fo(this),ku(this),Le(19))};function Xs(n){n.v!=null&&(N.clearTimeout(n.v),n.v=null)}function Xp(n,e){var t=null;if(n.g==e){Xs(n),Au(n),n.g=null;var r=2}else if(dc(n.h,e))t=e.D,Fp(n.h,e),r=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;r=Ro(),Ee(r,new _p(r,t)),Uo(n)}else Hp(n);else if(i=e.o,i==3||i==0&&0<n.pa||!(r==1&&BT(n,e)||r==2&&ku(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:wn(n,5);break;case 4:wn(n,10);break;case 3:wn(n,6);break;default:wn(n,2)}}}function Yp(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function wn(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var r=Re(n.kb,n);t||(t=new Tn("//www.google.com/images/cleardot.gif"),N.location&&N.location.protocol=="http"||Hs(t,"https"),Po(t)),LT(t.toString(),r)}else Le(2);n.G=0,n.l&&n.l.va(e),Jp(n),Wp(n)}S.kb=function(n){n?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function Jp(n){if(n.G=0,n.la=[],n.l){const e=Up(n.h);(e.length!=0||n.i.length!=0)&&(ph(n.la,e),ph(n.la,n.i),n.h.i.length=0,cu(n.i),n.i.length=0),n.l.ua()}}function Zp(n,e,t){var r=t instanceof Tn?Et(t):new Tn(t,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Qs(r,r.m);else{var i=N.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Tn(null,void 0);r&&Hs(s,r),e&&(s.g=e),i&&Qs(s,i),t&&(s.l=t),r=s}return t=n.D,e=n.za,t&&e&&z(r,t,e),z(r,"VER",n.ma),Zi(n,r),r}function em(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new Z(new Yi({jb:!0})):new Z(n.ra),e.Ka(n.H),e}function tm(){}S=tm.prototype;S.xa=function(){};S.wa=function(){};S.va=function(){};S.ua=function(){};S.Ra=function(){};function Ys(){if(dr&&!(10<=Number(rT)))throw Error("Environmental error: no available transport.")}Ys.prototype.g=function(n,e){return new Xe(n,e)};function Xe(n,e){pe.call(this),this.g=new Gp(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!Gs(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gs(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Dr(this)}Ce(Xe,pe);Xe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;Le(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=Zp(n,null,n.V),Uo(n)};Xe.prototype.close=function(){Su(this.g)};Xe.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=mu(n),n=t);e.i.push(new DT(e.ab++,n)),e.G==3&&Uo(e)};Xe.prototype.M=function(){this.g.l=null,delete this.j,Su(this.g),delete this.g,Xe.X.M.call(this)};function nm(n){vu.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Ce(nm,vu);function rm(){Iu.call(this),this.status=1}Ce(rm,Iu);function Dr(n){this.g=n}Ce(Dr,tm);Dr.prototype.xa=function(){Ee(this.g,"a")};Dr.prototype.wa=function(n){Ee(this.g,new nm(n))};Dr.prototype.va=function(n){Ee(this.g,new rm)};Dr.prototype.ua=function(){Ee(this.g,"b")};Ys.prototype.createWebChannel=Ys.prototype.g;Xe.prototype.send=Xe.prototype.u;Xe.prototype.open=Xe.prototype.m;Xe.prototype.close=Xe.prototype.close;Do.NO_ERROR=0;Do.TIMEOUT=8;Do.HTTP_ERROR=6;bp.COMPLETE="complete";Tp.EventType=Hi;Hi.OPEN="a";Hi.CLOSE="b";Hi.ERROR="c";Hi.MESSAGE="d";pe.prototype.listen=pe.prototype.N;Z.prototype.listenOnce=Z.prototype.O;Z.prototype.getLastError=Z.prototype.Oa;Z.prototype.getLastErrorCode=Z.prototype.Ea;Z.prototype.getStatus=Z.prototype.aa;Z.prototype.getResponseJson=Z.prototype.Sa;Z.prototype.getResponseText=Z.prototype.fa;Z.prototype.send=Z.prototype.da;Z.prototype.setWithCredentials=Z.prototype.Ka;var $T=function(){return new Ys},qT=function(){return Ro()},Va=Do,jT=bp,KT=Gn,kh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},GT=Yi,Ts=Tp,WT=Z;const Ah="@firebase/firestore";/**
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
 */class de{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}de.UNAUTHENTICATED=new de(null),de.GOOGLE_CREDENTIALS=new de("google-credentials-uid"),de.FIRST_PARTY=new de("first-party-uid"),de.MOCK_USER=new de("mock-user");/**
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
 */let xr="9.18.0";/**
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
 */const Gt=new wo("@firebase/firestore");function fc(){return Gt.logLevel}function zT(n){Gt.setLogLevel(n)}function y(n,...e){if(Gt.logLevel<=U.DEBUG){const t=e.map(Cu);Gt.debug(`Firestore (${xr}): ${n}`,...t)}}function re(n,...e){if(Gt.logLevel<=U.ERROR){const t=e.map(Cu);Gt.error(`Firestore (${xr}): ${n}`,...t)}}function fr(n,...e){if(Gt.logLevel<=U.WARN){const t=e.map(Cu);Gt.warn(`Firestore (${xr}): ${n}`,...t)}}function Cu(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
*/var e}/**
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
 */function T(n="Unexpected state"){const e=`FIRESTORE (${xr}) INTERNAL ASSERTION FAILED: `+n;throw re(e),new Error(e)}function k(n,e){n||T()}function HT(n,e){n||T()}function b(n,e){return n}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends be{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class im{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(de.UNAUTHENTICATED))}shutdown(){}}class XT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class YT{constructor(e){this.t=e,this.currentUser=de.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new fe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(k(typeof r.accessToken=="string"),new im(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return k(e===null||typeof e=="string"),new de(e)}}class JT{constructor(e,t,r,i){this.h=e,this.l=t,this.m=r,this.g=i,this.type="FirstParty",this.user=de.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(k(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ZT{constructor(e,t,r,i){this.h=e,this.l=t,this.m=r,this.g=i}getToken(){return Promise.resolve(new JT(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(de.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tE{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const r=s=>{s.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(k(typeof t.token=="string"),this.A=t.token,new eE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function nE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class sm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=nE(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function D(n,e){return n<e?-1:n>e?1:0}function pr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function om(n){return n+"\0"}/**
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
 */class Q{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new g(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new g(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new g(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new g(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Q.fromMillis(Date.now())}static fromDate(e){return Q.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Q(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class C{constructor(e){this.timestamp=e}static fromTimestamp(e){return new C(e)}static min(){return new C(new Q(0,0))}static max(){return new C(new Q(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ai{constructor(e,t,r){t===void 0?t=0:t>e.length&&T(),r===void 0?r=e.length-t:r>e.length-t&&T(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ai.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ai?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class M extends Ai{construct(e,t,r){return new M(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new g(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new M(t)}static emptyPath(){return new M([])}}const rE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ie extends Ai{construct(e,t,r){return new ie(e,t,r)}static isValidIdentifier(e){return rE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ie(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new g(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new g(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new g(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new g(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ie(t)}static emptyPath(){return new ie([])}}/**
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
 */class _{constructor(e){this.path=e}static fromPath(e){return new _(M.fromString(e))}static fromName(e){return new _(M.fromString(e).popFirst(5))}static empty(){return new _(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&M.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return M.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _(new M(e.slice()))}}/**
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
 */class am{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function pc(n){return n.fields.find(e=>e.kind===2)}function ln(n){return n.fields.filter(e=>e.kind!==2)}am.UNKNOWN_ID=-1;class iE{constructor(e,t){this.fieldPath=e,this.kind=t}}class Js{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Js(0,Ye.min())}}function cm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=C.fromTimestamp(r===1e9?new Q(t+1,0):new Q(t,r));return new Ye(i,_.empty(),e)}function um(n){return new Ye(n.readTime,n.key,-1)}class Ye{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ye(C.min(),_.empty(),-1)}static max(){return new Ye(C.max(),_.empty(),-1)}}function Nu(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_.comparator(n.documentKey,e.documentKey),t!==0?t:D(n.largestBatchId,e.largestBatchId))}/**
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
 */const lm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function nn(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==lm)throw n;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):f.reject(t)}static resolve(e){return new f((t,r)=>{t(e)})}static reject(e){return new f((t,r)=>{r(e)})}static waitFor(e){return new f((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=f.resolve(!1);for(const r of e)t=t.next(i=>i?f.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new f((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new f((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class Vo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new fe,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new li(e,t.error)):this.P.resolve()},this.transaction.onerror=r=>{const i=Ru(r.target.error);this.P.reject(new li(e,i))}}static open(e,t,r,i){try{return new Vo(t,e.transaction(i,r))}catch(s){throw new li(t,s)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(y("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new oE(t)}}class et{constructor(e,t,r){this.name=e,this.version=t,this.S=r,et.D(X())===12.2&&re("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return y("SimpleDb","Removing database:",e),hn(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!hr())return!1;if(et.N())return!0;const e=X(),t=et.D(e),r=0<t&&t<10,i=et.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static N(){var e;return typeof ai<"u"&&((e=ai.env)===null||e===void 0?void 0:e.$)==="YES"}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(y("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new li(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new g(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new g(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new li(e,o))},i.onupgradeneeded=s=>{y("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.F(o,i.transaction,s.oldVersion,this.version).next(()=>{y("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Vo.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.V(),u)).catch(u=>(a.abort(u),f.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(y("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class sE{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return hn(this.q.delete())}}class li extends g{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function rn(n){return n.name==="IndexedDbTransactionError"}class oE{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(y("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(y("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),hn(r)}add(e){return y("SimpleDb","ADD",this.store.name,e,e),hn(this.store.add(e))}get(e){return hn(this.store.get(e)).next(t=>(t===void 0&&(t=null),y("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return y("SimpleDb","DELETE",this.store.name,e),hn(this.store.delete(e))}count(){return y("SimpleDb","COUNT",this.store.name),hn(this.store.count())}W(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.H(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new f((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}J(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new f((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,t){y("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Z=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}X(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.H(i,t)}tt(e){const t=this.cursor({});return new f((r,i)=>{t.onerror=s=>{const o=Ru(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,t){const r=[];return new f((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new sE(a),u=t(a.primaryKey,a.value,c);if(u instanceof f){const l=u.catch(h=>(c.done(),f.reject(h)));r.push(l)}c.isDone?i():c.G===null?a.continue():a.continue(c.G)}}).next(()=>f.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Z?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function hn(n){return new f((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Ru(r.target.error);t(i)}})}let Ch=!1;function Ru(n){const e=et.D(X());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new g("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ch||(Ch=!0,setTimeout(()=>{throw r},0)),r}}return n}class aE{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){y("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{y("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(t){rn(t)?y("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await nn(t)}await this.nt(6e4)})}}class cE{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){const r=new Set;let i=t,s=!0;return f.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return y("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}rt(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,s)).next(a=>(y("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ot(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=um(s);Nu(o,r)>0&&(r=o)}),new Ye(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class qe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>t.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}qe.at=-1;/**
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
 */class uE{constructor(e,t,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Wt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Wt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wt&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Nh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Wn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */function es(n){return n==null}function Ci(n){return n===0&&1/n==-1/0}function fm(n){return typeof n=="number"&&Number.isInteger(n)&&!Ci(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */class lE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function hE(){return typeof atob<"u"}/**
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
 */class ce{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw i instanceof DOMException?new lE("Invalid base64 string: "+i):i}}(e);return new ce(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ce(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ce.EMPTY_BYTE_STRING=new ce("");const dE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(n){if(k(!!n),typeof n=="string"){let e=0;const t=dE.exec(n);if(k(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Y(n.seconds),nanos:Y(n.nanos)}}function Y(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function On(n){return typeof n=="string"?ce.fromBase64String(n):ce.fromUint8Array(n)}/**
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
 */function Du(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function pm(n){const e=n.mapValue.fields.__previous_value__;return Du(e)?pm(e):e}function Ni(n){const e=zt(n.mapValue.fields.__local_write_time__.timestampValue);return new Q(e.seconds,e.nanos)}/**
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
 */const Bt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ds={nullValue:"NULL_VALUE"};function Pn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Du(n)?4:mm(n)?9007199254740991:10:T()}function pt(n,e){if(n===e)return!0;const t=Pn(n);if(t!==Pn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ni(n).isEqual(Ni(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=zt(r.timestampValue),o=zt(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return On(r.bytesValue).isEqual(On(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return Y(r.geoPointValue.latitude)===Y(i.geoPointValue.latitude)&&Y(r.geoPointValue.longitude)===Y(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Y(r.integerValue)===Y(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Y(r.doubleValue),o=Y(i.doubleValue);return s===o?Ci(s)===Ci(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return pr(n.arrayValue.values||[],e.arrayValue.values||[],pt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Nh(s)!==Nh(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!pt(s[a],o[a])))return!1;return!0}(n,e);default:return T()}}function Ri(n,e){return(n.values||[]).find(t=>pt(t,e))!==void 0}function Ht(n,e){if(n===e)return 0;const t=Pn(n),r=Pn(e);if(t!==r)return D(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Y(i.integerValue||i.doubleValue),a=Y(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Rh(n.timestampValue,e.timestampValue);case 4:return Rh(Ni(n),Ni(e));case 5:return D(n.stringValue,e.stringValue);case 6:return function(i,s){const o=On(i),a=On(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=D(o[c],a[c]);if(u!==0)return u}return D(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=D(Y(i.latitude),Y(s.latitude));return o!==0?o:D(Y(i.longitude),Y(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ht(o[c],a[c]);if(u)return u}return D(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Bt.mapValue&&s===Bt.mapValue)return 0;if(i===Bt.mapValue)return 1;if(s===Bt.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=D(a[l],u[l]);if(h!==0)return h;const d=Ht(o[a[l]],c[u[l]]);if(d!==0)return d}return D(a.length,u.length)}(n.mapValue,e.mapValue);default:throw T()}}function Rh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return D(n,e);const t=zt(n),r=zt(e),i=D(t.seconds,r.seconds);return i!==0?i:D(t.nanos,r.nanos)}function mr(n){return mc(n)}function mc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=zt(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?On(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,_.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=mc(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${mc(r.fields[a])}`;return s+"}"}(n.mapValue):T();var e,t}function Ln(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function gc(n){return!!n&&"integerValue"in n}function Di(n){return!!n&&"arrayValue"in n}function Dh(n){return!!n&&"nullValue"in n}function xh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xs(n){return!!n&&"mapValue"in n}function hi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Wn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=hi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=hi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function mm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function fE(n){return"nullValue"in n?Ds:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ln(Wt.empty(),_.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:T()}function pE(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ln(Wt.empty(),_.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Bt:T()}function Oh(n,e){const t=Ht(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Ph(n,e){const t=Ht(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class Qt{constructor(e,t){this.position=e,this.inclusive=t}}function Lh(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=_.comparator(_.fromName(o.referenceValue),t.key):r=Ht(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class gm{}class O extends gm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new mE(e,t,r):t==="array-contains"?new wE(e,r):t==="in"?new bm(e,r):t==="not-in"?new vE(e,r):t==="array-contains-any"?new IE(e,r):new O(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new gE(e,r):new yE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ht(t,this.value)):t!==null&&Pn(this.value)===Pn(t)&&this.matchesComparison(Ht(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class q extends gm{constructor(e,t){super(),this.filters=e,this.op=t,this.ft=null}static create(e,t){return new q(e,t)}matches(e){return gr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(t=>t.isInequality());return e!==null?e.field:null}dt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function gr(n){return n.op==="and"}function yc(n){return n.op==="or"}function xu(n){return ym(n)&&gr(n)}function ym(n){for(const e of n.filters)if(e instanceof q)return!1;return!0}function wc(n){if(n instanceof O)return n.field.canonicalString()+n.op.toString()+mr(n.value);if(xu(n))return n.filters.map(e=>wc(e)).join(",");{const e=n.filters.map(t=>wc(t)).join(",");return`${n.op}(${e})`}}function wm(n,e){return n instanceof O?function(t,r){return r instanceof O&&t.op===r.op&&t.field.isEqual(r.field)&&pt(t.value,r.value)}(n,e):n instanceof q?function(t,r){return r instanceof q&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&wm(s,r.filters[o]),!0):!1}(n,e):void T()}function vm(n,e){const t=n.filters.concat(e);return q.create(t,n.op)}function Im(n){return n instanceof O?function(e){return`${e.field.canonicalString()} ${e.op} ${mr(e.value)}`}(n):n instanceof q?function(e){return e.op.toString()+" {"+e.getFilters().map(Im).join(" ,")+"}"}(n):"Filter"}class mE extends O{constructor(e,t,r){super(e,t,r),this.key=_.fromName(r.referenceValue)}matches(e){const t=_.comparator(e.key,this.key);return this.matchesComparison(t)}}class gE extends O{constructor(e,t){super(e,"in",t),this.keys=_m("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class yE extends O{constructor(e,t){super(e,"not-in",t),this.keys=_m("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function _m(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>_.fromName(r.referenceValue))}class wE extends O{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Di(t)&&Ri(t.arrayValue,this.value)}}class bm extends O{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ri(this.value.arrayValue,t)}}class vE extends O{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ri(this.value.arrayValue,t)}}class IE extends O{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Di(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ri(this.value.arrayValue,r))}}/**
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
 */class or{constructor(e,t="asc"){this.field=e,this.dir=t}}function _E(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class ee{constructor(e,t){this.comparator=e,this.root=t||Ie.EMPTY}insert(e,t){return new ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Es(this.root,e,this.comparator,!1)}getReverseIterator(){return new Es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Es(this.root,e,this.comparator,!0)}}class Es{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:Ie.RED,this.left=i!=null?i:Ie.EMPTY,this.right=s!=null?s:Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ie(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ie.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(n,e,t,r,i){return this}insert(n,e,t){return new Ie(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class K{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Fh(this.data.getIterator())}getIteratorFrom(e){return new Fh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof K)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new K(this.comparator);return t.data=e,t}}class Fh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Jn(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class je{constructor(e){this.fields=e,e.sort(ie.comparator)}static empty(){return new je([])}unionWith(e){let t=new K(ie.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class _e{constructor(e){this.value=e}static empty(){return new _e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!xs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hi(t)}setAll(e){let t=ie.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=hi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());xs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];xs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Wn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _e(hi(this.value))}}function Tm(n){const e=[];return Wn(n.fields,(t,r)=>{const i=new ie([t]);if(xs(r)){const s=Tm(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new je(e)}/**
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
 */class G{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new G(e,0,C.min(),C.min(),C.min(),_e.empty(),0)}static newFoundDocument(e,t,r,i){return new G(e,1,t,C.min(),r,i,0)}static newNoDocument(e,t){return new G(e,2,t,C.min(),C.min(),_e.empty(),0)}static newUnknownDocument(e,t){return new G(e,3,t,C.min(),C.min(),_e.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(C.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof G&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new G(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bE{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this._t=null}}function vc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new bE(n,e,t,r,i,s,o)}function Mn(n){const e=b(n);if(e._t===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>wc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),es(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>mr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>mr(r)).join(",")),e._t=t}return e._t}function ts(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!_E(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!wm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Mh(n.startAt,e.startAt)&&Mh(n.endAt,e.endAt)}function Zs(n){return _.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function eo(n,e){return n.filters.filter(t=>t instanceof O&&t.field.isEqual(e))}function Uh(n,e,t){let r=Ds,i=!0;for(const s of eo(n,e)){let o=Ds,a=!0;switch(s.op){case"<":case"<=":o=fE(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Ds}Oh({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Oh({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Vh(n,e,t){let r=Bt,i=!0;for(const s of eo(n,e)){let o=Bt,a=!0;switch(s.op){case">=":case">":o=pE(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Bt}Ph({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Ph({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Ct{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Em(n,e,t,r,i,s,o,a){return new Ct(n,e,t,r,i,s,o,a)}function Or(n){return new Ct(n)}function Bh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ou(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Bo(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Pu(n){return n.collectionGroup!==null}function En(n){const e=b(n);if(e.wt===null){e.wt=[];const t=Bo(e),r=Ou(e);if(t!==null&&r===null)t.isKeyField()||e.wt.push(new or(t)),e.wt.push(new or(ie.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new or(ie.keyField(),s))}}}return e.wt}function Ge(n){const e=b(n);if(!e.gt)if(e.limitType==="F")e.gt=vc(e.path,e.collectionGroup,En(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of En(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new or(s.field,o))}const r=e.endAt?new Qt(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Qt(e.startAt.position,e.startAt.inclusive):null;e.gt=vc(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e.gt}function Ic(n,e){e.getFirstInequalityField(),Bo(n);const t=n.filters.concat([e]);return new Ct(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function to(n,e,t){return new Ct(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ns(n,e){return ts(Ge(n),Ge(e))&&n.limitType===e.limitType}function Sm(n){return`${Mn(Ge(n))}|lt:${n.limitType}`}function _c(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>Im(r)).join(", ")}]`),es(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>mr(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>mr(r)).join(",")),`Target(${t})`}(Ge(n))}; limitType=${n.limitType})`}function rs(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):_.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of En(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=Lh(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,En(t),r)||t.endAt&&!function(i,s,o){const a=Lh(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,En(t),r))}(n,e)}function km(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Am(n){return(e,t)=>{let r=!1;for(const i of En(n)){const s=TE(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function TE(n,e,t){const r=n.field.isKeyField()?_.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Ht(a,c):T()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
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
 */function Cm(n,e){if(n.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ci(e)?"-0":e}}function Nm(n){return{integerValue:""+n}}function Rm(n,e){return fm(e)?Nm(e):Cm(n,e)}/**
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
 */class $o{constructor(){this._=void 0}}function EE(n,e,t){return n instanceof yr?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof Fn?xm(n,e):n instanceof Un?Om(n,e):function(r,i){const s=Dm(r,i),o=$h(s)+$h(r.It);return gc(s)&&gc(r.It)?Nm(o):Cm(r.Tt,o)}(n,e)}function SE(n,e,t){return n instanceof Fn?xm(n,e):n instanceof Un?Om(n,e):t}function Dm(n,e){return n instanceof wr?gc(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class yr extends $o{}class Fn extends $o{constructor(e){super(),this.elements=e}}function xm(n,e){const t=Pm(e);for(const r of n.elements)t.some(i=>pt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Un extends $o{constructor(e){super(),this.elements=e}}function Om(n,e){let t=Pm(e);for(const r of n.elements)t=t.filter(i=>!pt(i,r));return{arrayValue:{values:t}}}class wr extends $o{constructor(e,t){super(),this.Tt=e,this.It=t}}function $h(n){return Y(n.integerValue||n.doubleValue)}function Pm(n){return Di(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class is{constructor(e,t){this.field=e,this.transform=t}}function kE(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof Fn&&r instanceof Fn||t instanceof Un&&r instanceof Un?pr(t.elements,r.elements,pt):t instanceof wr&&r instanceof wr?pt(t.It,r.It):t instanceof yr&&r instanceof yr}(n.transform,e.transform)}class AE{constructor(e,t){this.version=e,this.transformResults=t}}class H{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new H}static exists(e){return new H(void 0,e)}static updateTime(e){return new H(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Os(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qo{}function Lm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Lr(n.key,H.none()):new Pr(n.key,n.data,H.none());{const t=n.data,r=_e.empty();let i=new K(ie.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Nt(n.key,r,new je(i.toArray()),H.none())}}function CE(n,e,t){n instanceof Pr?function(r,i,s){const o=r.value.clone(),a=jh(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Nt?function(r,i,s){if(!Os(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=jh(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Mm(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function di(n,e,t,r){return n instanceof Pr?function(i,s,o,a){if(!Os(i.precondition,s))return o;const c=i.value.clone(),u=Kh(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Nt?function(i,s,o,a){if(!Os(i.precondition,s))return o;const c=Kh(i.fieldTransforms,a,s),u=s.data;return u.setAll(Mm(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(i,s,o){return Os(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function NE(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Dm(r.transform,i||null);s!=null&&(t===null&&(t=_e.empty()),t.set(r.field,s))}return t||null}function qh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&pr(t,r,(i,s)=>kE(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Pr extends qo{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nt extends qo{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Mm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function jh(n,e,t){const r=new Map;k(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,SE(o,a,t[i]))}return r}function Kh(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,EE(s,o,e))}return r}class Lr extends qo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lu extends qo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class RE{constructor(e){this.count=e}}/**
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
 */var oe,L;function Fm(n){switch(n){default:return T();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Um(n){if(n===void 0)return re("GRPC error has no .code"),m.UNKNOWN;switch(n){case oe.OK:return m.OK;case oe.CANCELLED:return m.CANCELLED;case oe.UNKNOWN:return m.UNKNOWN;case oe.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case oe.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case oe.INTERNAL:return m.INTERNAL;case oe.UNAVAILABLE:return m.UNAVAILABLE;case oe.UNAUTHENTICATED:return m.UNAUTHENTICATED;case oe.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case oe.NOT_FOUND:return m.NOT_FOUND;case oe.ALREADY_EXISTS:return m.ALREADY_EXISTS;case oe.PERMISSION_DENIED:return m.PERMISSION_DENIED;case oe.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case oe.ABORTED:return m.ABORTED;case oe.OUT_OF_RANGE:return m.OUT_OF_RANGE;case oe.UNIMPLEMENTED:return m.UNIMPLEMENTED;case oe.DATA_LOSS:return m.DATA_LOSS;default:return T()}}(L=oe||(oe={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class sn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return dm(this.inner)}size(){return this.innerSize}}/**
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
 */const DE=new ee(_.comparator);function Ke(){return DE}const Vm=new ee(_.comparator);function ii(...n){let e=Vm;for(const t of n)e=e.insert(t.key,t);return e}function Bm(n){let e=Vm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ut(){return fi()}function $m(){return fi()}function fi(){return new sn(n=>n.toString(),(n,e)=>n.isEqual(e))}const xE=new ee(_.comparator),OE=new K(_.comparator);function x(...n){let e=OE;for(const t of n)e=e.add(t);return e}const PE=new K(D);function jo(){return PE}/**
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
 */class ss{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,os.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ss(C.min(),i,jo(),Ke(),x())}}class os{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new os(r,t,x(),x(),x())}}/**
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
 */class Ps{constructor(e,t,r,i){this.Et=e,this.removedTargetIds=t,this.key=r,this.At=i}}class qm{constructor(e,t){this.targetId=e,this.Rt=t}}class jm{constructor(e,t,r=ce.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Gh{constructor(){this.Pt=0,this.vt=zh(),this.bt=ce.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=x(),t=x(),r=x();return this.vt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:T()}}),new os(this.bt,this.Vt,e,t,r)}kt(){this.St=!1,this.vt=zh()}$t(e,t){this.St=!0,this.vt=this.vt.insert(e,t)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class LE{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Ke(),this.Kt=Wh(),this.Gt=new K(D)}Qt(e){for(const t of e.Et)e.At&&e.At.isFoundDocument()?this.jt(t,e.At):this.zt(t,e.key,e.At);for(const t of e.removedTargetIds)this.zt(t,e.key,e.At)}Wt(e){this.forEachTarget(e,t=>{const r=this.Ht(t);switch(e.state){case 0:this.Jt(t)&&r.xt(e.resumeToken);break;case 1:r.Ft(),r.Dt||r.kt(),r.xt(e.resumeToken);break;case 2:r.Ft(),r.Dt||this.removeTarget(t);break;case 3:this.Jt(t)&&(r.Bt(),r.xt(e.resumeToken));break;case 4:this.Jt(t)&&(this.Yt(t),r.xt(e.resumeToken));break;default:T()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qt.forEach((r,i)=>{this.Jt(i)&&t(i)})}Zt(e){const t=e.targetId,r=e.Rt.count,i=this.Xt(t);if(i){const s=i.target;if(Zs(s))if(r===0){const o=new _(s.path);this.zt(t,o,G.newNoDocument(o,C.min()))}else k(r===1);else this.te(t)!==r&&(this.Yt(t),this.Gt=this.Gt.add(t))}}ee(e){const t=new Map;this.qt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Zs(a.target)){const c=new _(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,G.newNoDocument(c,e))}s.Ct&&(t.set(o,s.Nt()),s.kt())}});let r=x();this.Kt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new ss(e,t,this.Gt,this.Ut,r);return this.Ut=Ke(),this.Kt=Wh(),this.Gt=new K(D),i}jt(e,t){if(!this.Jt(e))return;const r=this.ne(e,t.key)?2:0;this.Ht(e).$t(t.key,r),this.Ut=this.Ut.insert(t.key,t),this.Kt=this.Kt.insert(t.key,this.se(t.key).add(e))}zt(e,t,r){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,t)?i.$t(t,1):i.Mt(t),this.Kt=this.Kt.insert(t,this.se(t).delete(e)),r&&(this.Ut=this.Ut.insert(t,r))}removeTarget(e){this.qt.delete(e)}te(e){const t=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let t=this.qt.get(e);return t||(t=new Gh,this.qt.set(e,t)),t}se(e){let t=this.Kt.get(e);return t||(t=new K(D),this.Kt=this.Kt.insert(e,t)),t}Jt(e){const t=this.Xt(e)!==null;return t||y("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.qt.get(e);return t&&t.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Gh),this.Lt.getRemoteKeysForTarget(e).forEach(t=>{this.zt(e,t,null)})}ne(e,t){return this.Lt.getRemoteKeysForTarget(e).has(t)}}function Wh(){return new ee(_.comparator)}function zh(){return new ee(_.comparator)}/**
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
 */const ME=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),FE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),UE=(()=>({and:"AND",or:"OR"}))();class VE{constructor(e,t){this.databaseId=e,this.yt=t}}function vr(n,e){return n.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Km(n,e){return n.yt?e.toBase64():e.toUint8Array()}function BE(n,e){return vr(n,e.toTimestamp())}function se(n){return k(!!n),C.fromTimestamp(function(e){const t=zt(e);return new Q(t.seconds,t.nanos)}(n))}function Mu(n,e){return function(t){return new M(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Gm(n){const e=M.fromString(n);return k(eg(e)),e}function xi(n,e){return Mu(n.databaseId,e.path)}function dt(n,e){const t=Gm(e);if(t.get(1)!==n.databaseId.projectId)throw new g(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new g(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _(zm(t))}function bc(n,e){return Mu(n.databaseId,e)}function Wm(n){const e=Gm(n);return e.length===4?M.emptyPath():zm(e)}function Oi(n){return new M(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zm(n){return k(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Hh(n,e,t){return{name:xi(n,e),fields:t.value.mapValue.fields}}function Hm(n,e,t){const r=dt(n,e.name),i=se(e.updateTime),s=e.createTime?se(e.createTime):C.min(),o=new _e({mapValue:{fields:e.fields}}),a=G.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function $E(n,e){return"found"in e?function(t,r){k(!!r.found),r.found.name,r.found.updateTime;const i=dt(t,r.found.name),s=se(r.found.updateTime),o=r.found.createTime?se(r.found.createTime):C.min(),a=new _e({mapValue:{fields:r.found.fields}});return G.newFoundDocument(i,s,o,a)}(n,e):"missing"in e?function(t,r){k(!!r.missing),k(!!r.readTime);const i=dt(t,r.missing),s=se(r.readTime);return G.newNoDocument(i,s)}(n,e):T()}function qE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.yt?(k(u===void 0||typeof u=="string"),ce.fromBase64String(u||"")):(k(u===void 0||u instanceof Uint8Array),ce.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:Um(c.code);return new g(u,c.message||"")}(o);t=new jm(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=dt(n,r.document.name),s=se(r.document.updateTime),o=r.document.createTime?se(r.document.createTime):C.min(),a=new _e({mapValue:{fields:r.document.fields}}),c=G.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new Ps(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=dt(n,r.document),s=r.readTime?se(r.readTime):C.min(),o=G.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Ps([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=dt(n,r.document),s=r.removedTargetIds||[];t=new Ps([],s,i,null)}else{if(!("filter"in e))return T();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new RE(i),o=r.targetId;t=new qm(o,s)}}return t}function Pi(n,e){let t;if(e instanceof Pr)t={update:Hh(n,e.key,e.value)};else if(e instanceof Lr)t={delete:xi(n,e.key)};else if(e instanceof Nt)t={update:Hh(n,e.key,e.data),updateMask:HE(e.fieldMask)};else{if(!(e instanceof Lu))return T();t={verify:xi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof yr)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Fn)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Un)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof wr)return{fieldPath:s.field.canonicalString(),increment:o.It};throw T()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:BE(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T()}(n,e.precondition)),t}function Tc(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?H.updateTime(se(i.updateTime)):i.exists!==void 0?H.exists(i.exists):H.none()}(e.currentDocument):H.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)k(o.setToServerValue==="REQUEST_TIME"),a=new yr;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Fn(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Un(u)}else"increment"in o?a=new wr(s,o.increment):T();const c=ie.fromServerFormat(o.fieldPath);return new is(c,a)}(n,i)):[];if(e.update){e.update.name;const i=dt(n,e.update.name),s=new _e({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new je(c.map(u=>ie.fromServerFormat(u)))}(e.updateMask);return new Nt(i,s,o,t,r)}return new Pr(i,s,t,r)}if(e.delete){const i=dt(n,e.delete);return new Lr(i,t)}if(e.verify){const i=dt(n,e.verify);return new Lu(i,t)}return T()}function jE(n,e){return n&&n.length>0?(k(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?se(r.updateTime):se(i);return s.isEqual(C.min())&&(s=se(i)),new AE(s,r.transformResults||[])}(t,e))):[]}function Qm(n,e){return{documents:[bc(n,e.path)]}}function Xm(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=bc(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=bc(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Zm(q.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:tr(l.field),direction:GE(l.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=function(c,u){return c.yt||es(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Ym(n){let e=Wm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){k(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(l){const h=Jm(l);return h instanceof q&&xu(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new or(nr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,es(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Qt(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Qt(d,h)}(t.endAt)),Em(e,i,o,s,a,"F",c,u)}function KE(n,e){const t=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Jm(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=nr(e.unaryFilter.field);return O.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=nr(e.unaryFilter.field);return O.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=nr(e.unaryFilter.field);return O.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=nr(e.unaryFilter.field);return O.create(s,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(n):n.fieldFilter!==void 0?function(e){return O.create(nr(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return q.create(e.compositeFilter.filters.map(t=>Jm(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return T()}}(e.compositeFilter.op))}(n):T()}function GE(n){return ME[n]}function WE(n){return FE[n]}function zE(n){return UE[n]}function tr(n){return{fieldPath:n.canonicalString()}}function nr(n){return ie.fromServerFormat(n.fieldPath)}function Zm(n){return n instanceof O?function(e){if(e.op==="=="){if(xh(e.value))return{unaryFilter:{field:tr(e.field),op:"IS_NAN"}};if(Dh(e.value))return{unaryFilter:{field:tr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xh(e.value))return{unaryFilter:{field:tr(e.field),op:"IS_NOT_NAN"}};if(Dh(e.value))return{unaryFilter:{field:tr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tr(e.field),op:WE(e.op),value:e.value}}}(n):n instanceof q?function(e){const t=e.getFilters().map(r=>Zm(r));return t.length===1?t[0]:{compositeFilter:{op:zE(e.op),filters:t}}}(n):T()}function HE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function eg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function Fe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Qh(e)),e=QE(n.get(t),e);return Qh(e)}function QE(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Qh(n){return n+""}function lt(n){const e=n.length;if(k(e>=2),e===2)return k(n.charAt(0)===""&&n.charAt(1)===""),M.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&T(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:T()}s=o+2}return new M(r)}/**
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
 */const Xh=["userId","batchId"];/**
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
 */function Ls(n,e){return[n,Fe(e)]}function tg(n,e,t){return[n,Fe(e),t]}const XE={},YE=["prefixPath","collectionGroup","readTime","documentId"],JE=["prefixPath","collectionGroup","documentId"],ZE=["collectionGroup","readTime","prefixPath","documentId"],e0=["canonicalId","targetId"],t0=["targetId","path"],n0=["path","targetId"],r0=["collectionId","parent"],i0=["indexId","uid"],s0=["uid","sequenceNumber"],o0=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],a0=["indexId","uid","orderedDocumentKey"],c0=["userId","collectionPath","documentId"],u0=["userId","collectionPath","largestBatchId"],l0=["userId","collectionGroup","largestBatchId"],ng=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],h0=[...ng,"documentOverlays"],rg=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ig=rg,d0=[...ig,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Ec extends hm{constructor(e,t){super(),this.re=e,this.currentSequenceNumber=t}}function ge(n,e){const t=b(n);return et.M(t.re,e)}/**
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
 */class Fu{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&CE(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=di(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=di(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=$m();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=Lm(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(C.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),x())}isEqual(e){return this.batchId===e.batchId&&pr(this.mutations,e.mutations,(t,r)=>qh(t,r))&&pr(this.baseMutations,e.baseMutations,(t,r)=>qh(t,r))}}class Uu{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){k(e.mutations.length===r.length);let i=xE;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Uu(e,t,r,i)}}/**
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
 */class Vu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class qt{constructor(e,t,r,i,s=C.min(),o=C.min(),a=ce.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class sg{constructor(e){this.oe=e}}function f0(n,e){let t;if(e.document)t=Hm(n.oe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=_.fromSegments(e.noDocument.path),i=Bn(e.noDocument.readTime);t=G.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return T();{const r=_.fromSegments(e.unknownDocument.path),i=Bn(e.unknownDocument.version);t=G.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new Q(r[0],r[1]);return C.fromTimestamp(i)}(e.readTime)),t}function Yh(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:no(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:xi(i,s.key),fields:s.data.value.mapValue.fields,updateTime:vr(i,s.version.toTimestamp()),createTime:vr(i,s.createTime.toTimestamp())}}(n.oe,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Vn(e.version)};else{if(!e.isUnknownDocument())return T();r.unknownDocument={path:t.path.toArray(),version:Vn(e.version)}}return r}function no(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Vn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Bn(n){const e=new Q(n.seconds,n.nanoseconds);return C.fromTimestamp(e)}function dn(n,e){const t=(e.baseMutations||[]).map(s=>Tc(n.oe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Tc(n.oe,s)),i=Q.fromMillis(e.localWriteTimeMs);return new Fu(e.batchId,i,t,r)}function si(n){const e=Bn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Bn(n.lastLimboFreeSnapshotVersion):C.min();let r;var i;return n.query.documents!==void 0?(k((i=n.query).documents.length===1),r=Ge(Or(Wm(i.documents[0])))):r=function(s){return Ge(Ym(s))}(n.query),new qt(r,n.targetId,0,n.lastListenSequenceNumber,e,t,ce.fromBase64String(n.resumeToken))}function og(n,e){const t=Vn(e.snapshotVersion),r=Vn(e.lastLimboFreeSnapshotVersion);let i;i=Zs(e.target)?Qm(n.oe,e.target):Xm(n.oe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Mn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Bu(n){const e=Ym({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?to(e,e.limit,"L"):e}function Ba(n,e){return new Vu(e.largestBatchId,Tc(n.oe,e.overlayMutation))}function Jh(n,e){const t=e.path.lastSegment();return[n,Fe(e.path.popLast()),t]}function Zh(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Vn(r.readTime),documentKey:Fe(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class p0{getBundleMetadata(e,t){return ed(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Bn(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return ed(e).put({bundleId:(r=t).id,createTime:Vn(se(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return td(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:Bu(i.bundledQuery),readTime:Bn(i.readTime)};var i})}saveNamedQuery(e,t){return td(e).put(function(r){return{name:r.name,readTime:Vn(se(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function ed(n){return ge(n,"bundles")}function td(n){return ge(n,"namedQueries")}/**
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
 */class Ko{constructor(e,t){this.Tt=e,this.userId=t}static ue(e,t){const r=t.uid||"";return new Ko(e,r)}getOverlay(e,t){return Wr(e).get(Jh(this.userId,t)).next(r=>r?Ba(this.Tt,r):null)}getOverlays(e,t){const r=ut();return f.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Vu(t,o);i.push(this.ce(e,a))}),f.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Fe(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Wr(e).Y("collectionPathOverlayIndex",a))}),f.waitFor(s)}getOverlaysForCollection(e,t,r){const i=ut(),s=Fe(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Wr(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Ba(this.Tt,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=ut();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Wr(e).X({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Ba(this.Tt,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}ce(e,t){return Wr(e).put(function(r,i,s){const[o,a,c]=Jh(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Pi(r.oe,s.mutation)}}(this.Tt,this.userId,t))}}function Wr(n){return ge(n,"documentOverlays")}/**
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
 */class fn{constructor(){}ae(e,t){this.he(e,t),t.le()}he(e,t){if("nullValue"in e)this.fe(t,5);else if("booleanValue"in e)this.fe(t,10),t.de(e.booleanValue?1:0);else if("integerValue"in e)this.fe(t,15),t.de(Y(e.integerValue));else if("doubleValue"in e){const r=Y(e.doubleValue);isNaN(r)?this.fe(t,13):(this.fe(t,15),Ci(r)?t.de(0):t.de(r))}else if("timestampValue"in e){const r=e.timestampValue;this.fe(t,20),typeof r=="string"?t._e(r):(t._e(`${r.seconds||""}`),t.de(r.nanos||0))}else if("stringValue"in e)this.we(e.stringValue,t),this.me(t);else if("bytesValue"in e)this.fe(t,30),t.ge(On(e.bytesValue)),this.me(t);else if("referenceValue"in e)this.ye(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.fe(t,45),t.de(r.latitude||0),t.de(r.longitude||0)}else"mapValue"in e?mm(e)?this.fe(t,Number.MAX_SAFE_INTEGER):(this.pe(e.mapValue,t),this.me(t)):"arrayValue"in e?(this.Ie(e.arrayValue,t),this.me(t)):T()}we(e,t){this.fe(t,25),this.Te(e,t)}Te(e,t){t._e(e)}pe(e,t){const r=e.fields||{};this.fe(t,55);for(const i of Object.keys(r))this.we(i,t),this.he(r[i],t)}Ie(e,t){const r=e.values||[];this.fe(t,50);for(const i of r)this.he(i,t)}ye(e,t){this.fe(t,37),_.fromName(e).path.forEach(r=>{this.fe(t,60),this.Te(r,t)})}fe(e,t){e.de(t)}me(e){e.de(2)}}fn.Ee=new fn;function m0(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function nd(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=m0(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class g0{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ae(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Re(r.value),r=t.next();this.Pe()}ve(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.be(r.value),r=t.next();this.Ve()}Se(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Re(r);else if(r<2048)this.Re(960|r>>>6),this.Re(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Re(480|r>>>12),this.Re(128|63&r>>>6),this.Re(128|63&r);else{const i=t.codePointAt(0);this.Re(240|i>>>18),this.Re(128|63&i>>>12),this.Re(128|63&i>>>6),this.Re(128|63&i)}}this.Pe()}De(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.be(r);else if(r<2048)this.be(960|r>>>6),this.be(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.be(480|r>>>12),this.be(128|63&r>>>6),this.be(128|63&r);else{const i=t.codePointAt(0);this.be(240|i>>>18),this.be(128|63&i>>>12),this.be(128|63&i>>>6),this.be(128|63&i)}}this.Ve()}Ce(e){const t=this.xe(e),r=nd(t);this.Ne(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}ke(e){const t=this.xe(e),r=nd(t);this.Ne(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$e(){this.Me(255),this.Me(255)}Oe(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.Ne(e.length),this.buffer.set(e,this.position),this.position+=e.length}Be(){return this.buffer.slice(0,this.position)}xe(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Re(e){const t=255&e;t===0?(this.Me(0),this.Me(255)):t===255?(this.Me(255),this.Me(0)):this.Me(t)}be(e){const t=255&e;t===0?(this.Fe(0),this.Fe(255)):t===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Pe(){this.Me(0),this.Me(1)}Ve(){this.Fe(0),this.Fe(1)}Me(e){this.Ne(1),this.buffer[this.position++]=e}Fe(e){this.Ne(1),this.buffer[this.position++]=~e}Ne(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class y0{constructor(e){this.Le=e}ge(e){this.Le.Ae(e)}_e(e){this.Le.Se(e)}de(e){this.Le.Ce(e)}le(){this.Le.$e()}}class w0{constructor(e){this.Le=e}ge(e){this.Le.ve(e)}_e(e){this.Le.De(e)}de(e){this.Le.ke(e)}le(){this.Le.Oe()}}class zr{constructor(){this.Le=new g0,this.qe=new y0(this.Le),this.Ue=new w0(this.Le)}seed(e){this.Le.seed(e)}Ke(e){return e===0?this.qe:this.Ue}Be(){return this.Le.Be()}reset(){this.Le.reset()}}/**
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
 */class pn{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Ge(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new pn(this.indexId,this.documentKey,this.arrayValue,r)}}function Ot(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=rd(n.arrayValue,e.arrayValue),t!==0?t:(t=rd(n.directionalValue,e.directionalValue),t!==0?t:_.comparator(n.documentKey,e.documentKey)))}function rd(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class v0{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Qe=e.orderBy,this.je=[];for(const t of e.filters){const r=t;r.isInequality()?this.ze=r:this.je.push(r)}}We(e){k(e.collectionGroup===this.collectionId);const t=pc(e);if(t!==void 0&&!this.He(t))return!1;const r=ln(e);let i=0,s=0;for(;i<r.length&&this.He(r[i]);++i);if(i===r.length)return!0;if(this.ze!==void 0){const o=r[i];if(!this.Je(this.ze,o)||!this.Ye(this.Qe[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Qe.length||!this.Ye(this.Qe[s++],o))return!1}return!0}He(e){for(const t of this.je)if(this.Je(t,e))return!0;return!1}Je(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Ye(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function ag(n){var e,t;if(k(n instanceof O||n instanceof q),n instanceof O){if(n instanceof bm){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>O.create(n.field,"==",s)))||[];return q.create(i,"or")}return n}const r=n.filters.map(i=>ag(i));return q.create(r,n.op)}function I0(n){if(n.getFilters().length===0)return[];const e=Ac(ag(n));return k(cg(e)),Sc(e)||kc(e)?[e]:e.getFilters()}function Sc(n){return n instanceof O}function kc(n){return n instanceof q&&xu(n)}function cg(n){return Sc(n)||kc(n)||function(e){if(e instanceof q&&yc(e)){for(const t of e.getFilters())if(!Sc(t)&&!kc(t))return!1;return!0}return!1}(n)}function Ac(n){if(k(n instanceof O||n instanceof q),n instanceof O)return n;if(n.filters.length===1)return Ac(n.filters[0]);const e=n.filters.map(r=>Ac(r));let t=q.create(e,n.op);return t=ro(t),cg(t)?t:(k(t instanceof q),k(gr(t)),k(t.filters.length>1),t.filters.reduce((r,i)=>$u(r,i)))}function $u(n,e){let t;return k(n instanceof O||n instanceof q),k(e instanceof O||e instanceof q),t=n instanceof O?e instanceof O?function(r,i){return q.create([r,i],"and")}(n,e):id(n,e):e instanceof O?id(e,n):function(r,i){if(k(r.filters.length>0&&i.filters.length>0),gr(r)&&gr(i))return vm(r,i.getFilters());const s=yc(r)?r:i,o=yc(r)?i:r,a=s.filters.map(c=>$u(c,o));return q.create(a,"or")}(n,e),ro(t)}function id(n,e){if(gr(e))return vm(e,n.getFilters());{const t=e.filters.map(r=>$u(n,r));return q.create(t,"or")}}function ro(n){if(k(n instanceof O||n instanceof q),n instanceof O)return n;const e=n.getFilters();if(e.length===1)return ro(e[0]);if(ym(n))return n;const t=e.map(i=>ro(i)),r=[];return t.forEach(i=>{i instanceof O?r.push(i):i instanceof q&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:q.create(r,n.op)}/**
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
 */class _0{constructor(){this.Ze=new qu}addToCollectionParentIndex(e,t){return this.Ze.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this.Ze.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve(Ye.min())}getMinOffsetFromCollectionGroup(e,t){return f.resolve(Ye.min())}updateCollectionGroup(e,t,r){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class qu{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new K(M.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new K(M.comparator)).toArray()}}/**
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
 */const Ss=new Uint8Array(0);class b0{constructor(e,t){this.user=e,this.databaseId=t,this.Xe=new qu,this.tn=new sn(r=>Mn(r),(r,i)=>ts(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Xe.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Xe.add(t)});const s={collectionId:r,parent:Fe(i)};return sd(e).put(s)}return f.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[om(t),""],!1,!0);return sd(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(lt(o.parent))}return r})}addFieldIndex(e,t){const r=ks(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Qr(e);return s.next(a=>{o.put(Zh(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=ks(e),i=Qr(e),s=Hr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Hr(e);let i=!0;const s=new Map;return f.forEach(this.en(t),o=>this.nn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=x();const a=[];return f.forEach(s,(c,u)=>{var l;y("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(R=>`${R.fieldPath}:${R.kind}`).join(",")}`} to execute ${Mn(t)}`);const h=function(R,F){const j=pc(F);if(j===void 0)return null;for(const B of eo(R,j.fieldPath))switch(B.op){case"array-contains-any":return B.value.arrayValue.values||[];case"array-contains":return[B.value]}return null}(u,c),d=function(R,F){const j=new Map;for(const B of ln(F))for(const le of eo(R,B.fieldPath))switch(le.op){case"==":case"in":j.set(B.fieldPath.canonicalString(),le.value);break;case"not-in":case"!=":return j.set(B.fieldPath.canonicalString(),le.value),Array.from(j.values())}return null}(u,c),p=function(R,F){const j=[];let B=!0;for(const le of ln(F)){const Ve=le.kind===0?Uh(R,le.fieldPath,R.startAt):Vh(R,le.fieldPath,R.startAt);j.push(Ve.value),B&&(B=Ve.inclusive)}return new Qt(j,B)}(u,c),w=function(R,F){const j=[];let B=!0;for(const le of ln(F)){const Ve=le.kind===0?Vh(R,le.fieldPath,R.endAt):Uh(R,le.fieldPath,R.endAt);j.push(Ve.value),B&&(B=Ve.inclusive)}return new Qt(j,B)}(u,c),I=this.sn(c,u,p),E=this.sn(c,u,w),P=this.rn(c,u,d),$=this.on(c.indexId,h,I,p.inclusive,E,w.inclusive,P);return f.forEach($,R=>r.J(R,t.limit).next(F=>{F.forEach(j=>{const B=_.fromSegments(j.documentKey);o.has(B)||(o=o.add(B),a.push(B))})}))}).next(()=>a)}return f.resolve(null)})}en(e){let t=this.tn.get(e);return t||(e.filters.length===0?t=[e]:t=I0(q.create(e.filters,"and")).map(r=>vc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.tn.set(e,t),t)}on(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.un(t[h/u]):Ss,p=this.cn(e,d,r[h%u],i),w=this.an(e,d,s[h%u],o),I=a.map(E=>this.cn(e,d,E,!0));l.push(...this.createRange(p,w,I))}return l}cn(e,t,r,i){const s=new pn(e,_.empty(),t,r);return i?s:s.Ge()}an(e,t,r,i){const s=new pn(e,_.empty(),t,r);return i?s.Ge():s}nn(e,t){const r=new v0(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.en(t);return f.forEach(i,s=>this.nn(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new K(ie.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(t)&&i.length>1&&r===2?1:r)}hn(e,t){const r=new zr;for(const i of ln(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Ke(i.kind);fn.Ee.ae(s,o)}return r.Be()}un(e){const t=new zr;return fn.Ee.ae(e,t.Ke(0)),t.Be()}ln(e,t){const r=new zr;return fn.Ee.ae(Ln(this.databaseId,t),r.Ke(function(i){const s=ln(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Be()}rn(e,t,r){if(r===null)return[];let i=[];i.push(new zr);let s=0;for(const o of ln(e)){const a=r[s++];for(const c of i)if(this.fn(t,o.fieldPath)&&Di(a))i=this.dn(i,o,a);else{const u=c.Ke(o.kind);fn.Ee.ae(a,u)}}return this._n(i)}sn(e,t,r){return this.rn(e,t,r.position)}_n(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Be();return t}dn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new zr;c.seed(a.Be()),fn.Ee.ae(o,c.Ke(t.kind)),s.push(c)}return s}fn(e,t){return!!e.filters.find(r=>r instanceof O&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=ks(e),i=Qr(e);return(t?r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.W()).next(s=>{const o=[];return f.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Js(l.sequenceNumber,new Ye(Bn(l.readTime),new _(lt(l.documentKey)),l.largestBatchId)):Js.empty(),d=u.fields.map(([p,w])=>new iE(ie.fromServerFormat(p),w));return new am(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:D(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=ks(e),s=Qr(e);return this.wn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>f.forEach(a,c=>s.put(Zh(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return f.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),f.forEach(a,c=>this.mn(e,i,c).next(u=>{const l=this.gn(s,c);return u.isEqual(l)?f.resolve():this.yn(e,s,c,u,l)}))))})}pn(e,t,r,i){return Hr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.ln(r,t.key),documentKey:t.key.path.toArray()})}In(e,t,r,i){return Hr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.ln(r,t.key),t.key.path.toArray()])}mn(e,t,r){const i=Hr(e);let s=new K(Ot);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.ln(r,t)])},(o,a)=>{s=s.add(new pn(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}gn(e,t){let r=new K(Ot);const i=this.hn(t,e);if(i==null)return r;const s=pc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Di(o))for(const a of o.arrayValue.values||[])r=r.add(new pn(t.indexId,e.key,this.un(a),i))}else r=r.add(new pn(t.indexId,e.key,Ss,i));return r}yn(e,t,r,i,s){y("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),p=c.getIterator();let w=Jn(d),I=Jn(p);for(;w||I;){let E=!1,P=!1;if(w&&I){const $=u(w,I);$<0?P=!0:$>0&&(E=!0)}else w!=null?P=!0:E=!0;E?(l(I),I=Jn(p)):P?(h(w),w=Jn(d)):(w=Jn(d),I=Jn(p))}}(i,s,Ot,a=>{o.push(this.pn(e,t,r,a))},a=>{o.push(this.In(e,t,r,a))}),f.waitFor(o)}wn(e){let t=1;return Qr(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Ot(o,a)).filter((o,a,c)=>!a||Ot(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Ot(o,e),c=Ot(o,t);if(a===0)i[0]=e.Ge();else if(a>0&&c<0)i.push(o),i.push(o.Ge());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Tn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ss,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ss,[]];s.push(IDBKeyRange.bound(a,c))}return s}Tn(e,t){return Ot(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(od)}getMinOffset(e,t){return f.mapArray(this.en(t),r=>this.nn(e,r).next(i=>i||T())).next(od)}}function sd(n){return ge(n,"collectionParents")}function Hr(n){return ge(n,"indexEntries")}function ks(n){return ge(n,"indexConfiguration")}function Qr(n){return ge(n,"indexState")}function od(n){k(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Nu(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Ye(e.readTime,e.documentKey,t)}/**
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
 */const ad={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Be{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Be(e,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function ug(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.X({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{k(a===1)}));const u=[];for(const l of t.mutations){const h=tg(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return f.waitFor(s).next(()=>u)}function io(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw T();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Be.DEFAULT_COLLECTION_PERCENTILE=10,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Be.DEFAULT=new Be(41943040,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Be.DISABLED=new Be(-1,0,0);class Go{constructor(e,t,r,i){this.userId=e,this.Tt=t,this.indexManager=r,this.referenceDelegate=i,this.En={}}static ue(e,t,r,i){k(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Go(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Pt(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=rr(e),o=Pt(e);return o.add({}).next(a=>{k(typeof a=="number");const c=new Fu(a,t,r,i),u=function(d,p,w){const I=w.baseMutations.map(P=>Pi(d.oe,P)),E=w.mutations.map(P=>Pi(d.oe,P));return{userId:p,batchId:w.batchId,localWriteTimeMs:w.localWriteTime.toMillis(),baseMutations:I,mutations:E}}(this.Tt,this.userId,c),l=[];let h=new K((d,p)=>D(d.canonicalString(),p.canonicalString()));for(const d of i){const p=tg(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(p,XE))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.En[a]=c.keys()}),f.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return Pt(e).get(t).next(r=>r?(k(r.userId===this.userId),dn(this.Tt,r)):null)}An(e,t){return this.En[t]?f.resolve(this.En[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.En[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Pt(e).X({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(k(a.batchId>=r),s=dn(this.Tt,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Pt(e).X({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Pt(e).W("userMutationsIndex",t).next(r=>r.map(i=>dn(this.Tt,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ls(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return rr(e).X({range:i},(o,a,c)=>{const[u,l,h]=o,d=lt(l);if(u===this.userId&&t.path.isEqual(d))return Pt(e).get(h).next(p=>{if(!p)throw T();k(p.userId===this.userId),s.push(dn(this.Tt,p))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new K(D);const i=[];return t.forEach(s=>{const o=Ls(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=rr(e).X({range:a},(u,l,h)=>{const[d,p,w]=u,I=lt(p);d===this.userId&&s.path.isEqual(I)?r=r.add(w):h.done()});i.push(c)}),f.waitFor(i).next(()=>this.Rn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Ls(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new K(D);return rr(e).X({range:o},(c,u,l)=>{const[h,d,p]=c,w=lt(d);h===this.userId&&r.isPrefixOf(w)?w.length===i&&(a=a.add(p)):l.done()}).next(()=>this.Rn(e,a))}Rn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Pt(e).get(s).next(o=>{if(o===null)throw T();k(o.userId===this.userId),r.push(dn(this.Tt,o))}))}),f.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return ug(e.re,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Pn(t.batchId)}),f.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Pn(e){delete this.En[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return f.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return rr(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=lt(s[1]);i.push(c)}else a.done()}).next(()=>{k(i.length===0)})})}containsKey(e,t){return lg(e,this.userId,t)}vn(e){return hg(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function lg(n,e,t){const r=Ls(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return rr(n).X({range:s,Z:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Pt(n){return ge(n,"mutations")}function rr(n){return ge(n,"documentMutations")}function hg(n){return ge(n,"mutationQueues")}/**
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
 */class $n{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new $n(0)}static Sn(){return new $n(-1)}}/**
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
 */class T0{constructor(e,t){this.referenceDelegate=e,this.Tt=t}allocateTargetId(e){return this.Dn(e).next(t=>{const r=new $n(t.highestTargetId);return t.highestTargetId=r.next(),this.Cn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Dn(e).next(t=>C.fromTimestamp(new Q(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Dn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Dn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Cn(e,i)))}addTargetData(e,t){return this.xn(e,t).next(()=>this.Dn(e).next(r=>(r.targetCount+=1,this.Nn(t,r),this.Cn(e,r))))}updateTargetData(e,t){return this.xn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Zn(e).delete(t.targetId)).next(()=>this.Dn(e)).next(r=>(k(r.targetCount>0),r.targetCount-=1,this.Cn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Zn(e).X((o,a)=>{const c=si(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>f.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Zn(e).X((r,i)=>{const s=si(i);t(s)})}Dn(e){return cd(e).get("targetGlobalKey").next(t=>(k(t!==null),t))}Cn(e,t){return cd(e).put("targetGlobalKey",t)}xn(e,t){return Zn(e).put(og(this.Tt,t))}Nn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Dn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Mn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Zn(e).X({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=si(a);ts(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Ut(e);return t.forEach(o=>{const a=Fe(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),f.waitFor(i)}removeMatchingKeys(e,t,r){const i=Ut(e);return f.forEach(t,s=>{const o=Fe(s.path);return f.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Ut(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Ut(e);let s=x();return i.X({range:r,Z:!0},(o,a,c)=>{const u=lt(o[1]),l=new _(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Fe(t.path),i=IDBKeyRange.bound([r],[om(r)],!1,!0);let s=0;return Ut(e).X({index:"documentTargetsIndex",Z:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ie(e,t){return Zn(e).get(t).next(r=>r?si(r):null)}}function Zn(n){return ge(n,"targets")}function cd(n){return ge(n,"targetGlobal")}function Ut(n){return ge(n,"targetDocuments")}/**
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
 */function ud([n,e],[t,r]){const i=D(n,t);return i===0?D(e,r):i}class E0{constructor(e){this.kn=e,this.buffer=new K(ud),this.$n=0}Mn(){return++this.$n}On(e){const t=[e,this.Mn()];if(this.buffer.size<this.kn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ud(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class S0{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Fn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Bn(6e4)}stop(){this.Fn&&(this.Fn.cancel(),this.Fn=null)}get started(){return this.Fn!==null}Bn(e){y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Fn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Fn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rn(t)?y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await nn(t)}await this.Bn(3e5)})}}class k0{constructor(e,t){this.Ln=e,this.params=t}calculateTargetCount(e,t){return this.Ln.qn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return f.resolve(qe.at);const r=new E0(t);return this.Ln.forEachTarget(e,i=>r.On(i.sequenceNumber)).next(()=>this.Ln.Un(e,i=>r.On(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Ln.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Ln.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(y("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(ad)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ad):this.Kn(e,t))}getCacheSize(e){return this.Ln.getCacheSize(e)}Kn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),fc()<=U.DEBUG&&y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
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
 */class A0{constructor(e,t){this.db=e,this.garbageCollector=function(r,i){return new k0(r,i)}(this,t)}qn(e){const t=this.Gn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Gn(e){let t=0;return this.Un(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Un(e,t){return this.Qn(e,(r,i)=>t(i))}addReference(e,t,r){return As(e,r)}removeReference(e,t,r){return As(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return As(e,t)}jn(e,t){return function(r,i){let s=!1;return hg(r).tt(o=>lg(r,o,i).next(a=>(a&&(s=!0),f.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Qn(e,(o,a)=>{if(a<=t){const c=this.jn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,C.min()),Ut(e).delete([0,Fe(o.path)])))});i.push(c)}}).next(()=>f.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return As(e,t)}Qn(e,t){const r=Ut(e);let i,s=qe.at;return r.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==qe.at&&t(new _(lt(i)),s),s=u,i=c):s=qe.at}).next(()=>{s!==qe.at&&t(new _(lt(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function As(n,e){return Ut(n).put(function(t,r){return{targetId:0,path:Fe(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
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
 */class dg{constructor(){this.changes=new sn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,G.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?f.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class C0{constructor(e){this.Tt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return cn(e).put(r)}removeEntry(e,t,r){return cn(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],no(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.zn(e,r)))}getEntry(e,t){let r=G.newInvalidDocument(t);return cn(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Xr(t))},(i,s)=>{r=this.Wn(t,s)}).next(()=>r)}Hn(e,t){let r={size:0,document:G.newInvalidDocument(t)};return cn(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Xr(t))},(i,s)=>{r={document:this.Wn(t,s),size:io(s)}}).next(()=>r)}getEntries(e,t){let r=Ke();return this.Jn(e,t,(i,s)=>{const o=this.Wn(i,s);r=r.insert(i,o)}).next(()=>r)}Yn(e,t){let r=Ke(),i=new ee(_.comparator);return this.Jn(e,t,(s,o)=>{const a=this.Wn(s,o);r=r.insert(s,a),i=i.insert(s,io(o))}).next(()=>({documents:r,Zn:i}))}Jn(e,t,r){if(t.isEmpty())return f.resolve();let i=new K(dd);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Xr(i.first()),Xr(i.last())),o=i.getIterator();let a=o.getNext();return cn(e).X({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=_.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&dd(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.j(Xr(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),no(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return cn(e).W(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Ke();for(const l of c){const h=this.Wn(_.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(rs(t,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,i){let s=Ke();const o=hd(t,r),a=hd(t,Ye.max());return cn(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.Wn(_.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new N0(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return ld(e).get("remoteDocumentGlobalKey").next(t=>(k(!!t),t))}zn(e,t){return ld(e).put("remoteDocumentGlobalKey",t)}Wn(e,t){if(t){const r=f0(this.Tt,t);if(!(r.isNoDocument()&&r.version.isEqual(C.min())))return r}return G.newInvalidDocument(e)}}function fg(n){return new C0(n)}class N0 extends dg{constructor(e,t){super(),this.Xn=e,this.trackRemovals=t,this.ts=new sn(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new K((s,o)=>D(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ts.get(s);if(t.push(this.Xn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Yh(this.Xn.Tt,o);i=i.add(s.path.popLast());const u=io(c);r+=u-a.size,t.push(this.Xn.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Yh(this.Xn.Tt,o.convertToNoDocument(C.min()));t.push(this.Xn.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.Xn.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Xn.updateMetadata(e,r)),f.waitFor(t)}getFromCache(e,t){return this.Xn.Hn(e,t).next(r=>(this.ts.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Xn.Yn(e,t).next(({documents:r,Zn:i})=>(i.forEach((s,o)=>{this.ts.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function ld(n){return ge(n,"remoteDocumentGlobal")}function cn(n){return ge(n,"remoteDocumentsV14")}function Xr(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function hd(n,e){const t=e.documentKey.path.toArray();return[n,no(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function dd(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=D(t[s],r[s]),i)return i;return i=D(t.length,r.length),i||(i=D(t[t.length-2],r[r.length-2]),i||D(t[t.length-1],r[r.length-1]))}/**
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
 */class R0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class pg{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&di(r.mutation,i,je.empty(),Q.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,x()).next(()=>r))}getLocalViewOfDocuments(e,t,r=x()){const i=ut();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ii();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=ut();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,x()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Ke();const o=fi(),a=fi();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Nt)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),di(l.mutation,u,l.mutation.getFieldMask(),Q.now())):o.set(u.key,je.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new R0(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=fi();let i=new ee((o,a)=>o-a),s=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||je.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||x()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=$m();l.forEach(d=>{if(!s.has(d)){const p=Lm(t.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return _.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):f.resolve(ut());let a=-1,c=s;return o.next(u=>f.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?f.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,x())).next(l=>({batchId:a,changes:Bm(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _(t)).next(r=>{let i=ii();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=ii();return this.indexManager.getCollectionParents(e,i).next(o=>f.forEach(o,a=>{const c=function(u,l){return new Ct(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,G.newInvalidDocument(u)))});let o=ii();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&di(u.mutation,c,je.empty(),Q.now()),rs(t,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class D0{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,t){return f.resolve(this.es.get(t))}saveBundleMetadata(e,t){var r;return this.es.set(t.id,{id:(r=t).id,version:r.version,createTime:se(r.createTime)}),f.resolve()}getNamedQuery(e,t){return f.resolve(this.ns.get(t))}saveNamedQuery(e,t){return this.ns.set(t.name,function(r){return{name:r.name,query:Bu(r.bundledQuery),readTime:se(r.readTime)}}(t)),f.resolve()}}/**
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
 */class x0{constructor(){this.overlays=new ee(_.comparator),this.ss=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ut();return f.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ce(e,t,s)}),f.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.ss.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ss.delete(r)),f.resolve()}getOverlaysForCollection(e,t,r){const i=ut(),s=t.length+1,o=new _(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return f.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ee((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=ut(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ut(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return f.resolve(a)}ce(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(r.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Vu(t,r));let s=this.ss.get(t);s===void 0&&(s=x(),this.ss.set(t,s)),this.ss.set(t,s.add(r.key))}}/**
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
 */class ju{constructor(){this.rs=new K(he.os),this.us=new K(he.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,t){const r=new he(e,t);this.rs=this.rs.add(r),this.us=this.us.add(r)}hs(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.ls(new he(e,t))}fs(e,t){e.forEach(r=>this.removeReference(r,t))}ds(e){const t=new _(new M([])),r=new he(t,e),i=new he(t,e+1),s=[];return this.us.forEachInRange([r,i],o=>{this.ls(o),s.push(o.key)}),s}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const t=new _(new M([])),r=new he(t,e),i=new he(t,e+1);let s=x();return this.us.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new he(e,0),r=this.rs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class he{constructor(e,t){this.key=e,this.gs=t}static os(e,t){return _.comparator(e.key,t.key)||D(e.gs,t.gs)}static cs(e,t){return D(e.gs,t.gs)||_.comparator(e.key,t.key)}}/**
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
 */class O0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ys=1,this.ps=new K(he.os)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Fu(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new he(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this.Is(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Ts(r),s=i<0?0:i;return f.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new he(t,0),i=new he(t,Number.POSITIVE_INFINITY),s=[];return this.ps.forEachInRange([r,i],o=>{const a=this.Is(o.gs);s.push(a)}),f.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new K(D);return t.forEach(i=>{const s=new he(i,0),o=new he(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([s,o],a=>{r=r.add(a.gs)})}),f.resolve(this.Es(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;_.isDocumentKey(s)||(s=s.child(""));const o=new he(new _(s),0);let a=new K(D);return this.ps.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.gs)),!0)},o),f.resolve(this.Es(a))}Es(e){const t=[];return e.forEach(r=>{const i=this.Is(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){k(this.As(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ps;return f.forEach(t.mutations,i=>{const s=new he(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=r})}Pn(e){}containsKey(e,t){const r=new he(t,0),i=this.ps.firstAfterOrEqual(r);return f.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}As(e,t){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const t=this.Ts(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class P0{constructor(e){this.Rs=e,this.docs=new ee(_.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Rs(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return f.resolve(r?r.document.mutableCopy():G.newInvalidDocument(t))}getEntries(e,t){let r=Ke();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():G.newInvalidDocument(i))}),f.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ke();const o=t.path,a=new _(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Nu(um(l),r)<=0||(i.has(l.key)||rs(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return f.resolve(s)}getAllFromCollectionGroup(e,t,r,i){T()}Ps(e,t){return f.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new L0(this)}getSize(e){return f.resolve(this.size)}}class L0 extends dg{constructor(e){super(),this.Xn=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(r)}),f.waitFor(t)}getFromCache(e,t){return this.Xn.getEntry(e,t)}getAllFromCache(e,t){return this.Xn.getEntries(e,t)}}/**
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
 */class M0{constructor(e){this.persistence=e,this.vs=new sn(t=>Mn(t),ts),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.bs=0,this.Vs=new ju,this.targetCount=0,this.Ss=$n.Vn()}forEachTarget(e,t){return this.vs.forEach((r,i)=>t(i)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.bs&&(this.bs=t),f.resolve()}xn(e){this.vs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ss=new $n(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.xn(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.xn(t),f.resolve()}removeTargetData(e,t){return this.vs.delete(t.target),this.Vs.ds(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.vs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),f.waitFor(s).next(()=>i)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const r=this.vs.get(t)||null;return f.resolve(r)}addMatchingKeys(e,t,r){return this.Vs.hs(t,r),f.resolve()}removeMatchingKeys(e,t,r){this.Vs.fs(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),f.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Vs.ds(t),f.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Vs.ws(t);return f.resolve(r)}containsKey(e,t){return f.resolve(this.Vs.containsKey(t))}}/**
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
 */class mg{constructor(e,t){this.Ds={},this.overlays={},this.Cs=new qe(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new M0(this),this.indexManager=new _0,this.remoteDocumentCache=function(r){return new P0(r)}(r=>this.referenceDelegate.ks(r)),this.Tt=new sg(t),this.$s=new D0(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new x0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Ds[e.toKey()];return r||(r=new O0(t,this.referenceDelegate),this.Ds[e.toKey()]=r),r}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,t,r){y("MemoryPersistence","Starting transaction:",e);const i=new F0(this.Cs.next());return this.referenceDelegate.Ms(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Fs(e,t){return f.or(Object.values(this.Ds).map(r=>()=>r.containsKey(e,t)))}}class F0 extends hm{constructor(e){super(),this.currentSequenceNumber=e}}class Wo{constructor(e){this.persistence=e,this.Bs=new ju,this.Ls=null}static qs(e){return new Wo(e)}get Us(){if(this.Ls)return this.Ls;throw T()}addReference(e,t,r){return this.Bs.addReference(r,t),this.Us.delete(r.toString()),f.resolve()}removeReference(e,t,r){return this.Bs.removeReference(r,t),this.Us.add(r.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.Us.add(t.toString()),f.resolve()}removeTarget(e,t){this.Bs.ds(t.targetId).forEach(i=>this.Us.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Us.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ms(){this.Ls=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Us,r=>{const i=_.fromPath(r);return this.Ks(e,i).next(s=>{s||t.removeEntry(i,C.min())})}).next(()=>(this.Ls=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ks(e,t).next(r=>{r?this.Us.delete(t.toString()):this.Us.add(t.toString())})}ks(e){return 0}Ks(e,t){return f.or([()=>f.resolve(this.Bs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Fs(e,t)])}}/**
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
 */class U0{constructor(e){this.Tt=e}F(e,t,r,i){const s=new Vo("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Xh,{unique:!0}),a.createObjectStore("documentMutations")}(e),fd(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=f.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),fd(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:C.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Xh,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return f.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Gs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Qs(s)))),r<7&&i>=7&&(o=o.next(()=>this.js(s))),r<8&&i>=8&&(o=o.next(()=>this.zs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Ws(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:c0});c.createIndex("collectionPathOverlayIndex",u0,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",l0,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:YE});c.createIndex("documentKeyIndex",JE),c.createIndex("collectionGroupIndex",ZE)}(e)).next(()=>this.Hs(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.Js(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:i0}).createIndex("sequenceNumberIndex",s0,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:o0}).createIndex("documentKeyIndex",a0,{unique:!1})}(e))),o}Qs(e){let t=0;return e.store("remoteDocuments").X((r,i)=>{t+=io(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Gs(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.W().next(i=>f.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>f.forEach(a,c=>{k(c.userId===s.userId);const u=dn(this.Tt,c);return ug(e,s.userId,u).next(()=>{})}))}))}js(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const c=new M(o),u=function(l){return[0,Fe(l)]}(c);s.push(t.get(u).next(l=>l?f.resolve():(h=>t.put({targetId:0,path:Fe(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>f.waitFor(s))})}zs(e,t){e.createObjectStore("collectionParents",{keyPath:r0});const r=t.store("collectionParents"),i=new qu,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Fe(c)})}};return t.store("remoteDocuments").X({Z:!0},(o,a)=>{const c=new M(o);return s(c.popLast())}).next(()=>t.store("documentMutations").X({Z:!0},([o,a,c],u)=>{const l=lt(a);return s(l.popLast())}))}Ws(e){const t=e.store("targets");return t.X((r,i)=>{const s=si(i),o=og(this.Tt,s);return t.put(o)})}Hs(e,t){const r=t.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new _(M.fromString(u.document.name).popFirst(5)):u.noDocument?_.fromSegments(u.noDocument.path):u.unknownDocument?_.fromSegments(u.unknownDocument.path):T()).path.toArray();var u;/**
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
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>f.waitFor(i))}Js(e,t){const r=t.store("mutations"),i=fg(this.Tt),s=new mg(Wo.qs,this.Tt.oe);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:x();dn(this.Tt,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),f.forEach(a,(c,u)=>{const l=new de(u),h=Ko.ue(this.Tt,l),d=s.getIndexManager(l),p=Go.ue(l,this.Tt,d,s.referenceDelegate);return new pg(i,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Ec(t,qe.at),c).next()})})}}function fd(n){n.createObjectStore("targetDocuments",{keyPath:t0}).createIndex("documentTargetsIndex",n0,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",e0,{unique:!0}),n.createObjectStore("targetGlobal")}const $a="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ku{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ys=s,this.window=o,this.document=a,this.Zs=u,this.Xs=l,this.ti=h,this.Cs=null,this.xs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ei=null,this.inForeground=!1,this.ni=null,this.si=null,this.ii=Number.NEGATIVE_INFINITY,this.ri=d=>Promise.resolve(),!Ku.C())throw new g(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new A0(this,i),this.oi=t+"main",this.Tt=new sg(c),this.ui=new et(this.oi,this.ti,new U0(this.Tt)),this.Ns=new T0(this.referenceDelegate,this.Tt),this.remoteDocumentCache=fg(this.Tt),this.$s=new p0,this.window&&this.window.localStorage?this.ci=this.window.localStorage:(this.ci=null,l===!1&&re("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new g(m.FAILED_PRECONDITION,$a);return this.hi(),this.li(),this.fi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ns.getHighestSequenceNumber(e))}).then(e=>{this.Cs=new qe(e,this.Zs)}).then(()=>{this.xs=!0}).catch(e=>(this.ui&&this.ui.close(),Promise.reject(e)))}di(e){return this.ri=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ui.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ys.enqueueAndForget(async()=>{this.started&&await this.ai()}))}ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Cs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this._i(e).next(t=>{t||(this.isPrimary=!1,this.Ys.enqueueRetryable(()=>this.ri(!1)))})}).next(()=>this.wi(e)).next(t=>this.isPrimary&&!t?this.mi(e).next(()=>!1):!!t&&this.gi(e).next(()=>!0))).catch(e=>{if(rn(e))return y("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return y("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ys.enqueueRetryable(()=>this.ri(e)),this.isPrimary=e})}_i(e){return Yr(e).get("owner").next(t=>f.resolve(this.yi(t)))}pi(e){return Cs(e).delete(this.clientId)}async Ii(){if(this.isPrimary&&!this.Ti(this.ii,18e5)){this.ii=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ge(t,"clientMetadata");return r.W().next(i=>{const s=this.Ei(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return f.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ci)for(const t of e)this.ci.removeItem(this.Ai(t.clientId))}}fi(){this.si=this.Ys.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ai().then(()=>this.Ii()).then(()=>this.fi()))}yi(e){return!!e&&e.ownerId===this.clientId}wi(e){return this.Xs?f.resolve(!0):Yr(e).get("owner").next(t=>{if(t!==null&&this.Ti(t.leaseTimestampMs,5e3)&&!this.Ri(t.ownerId)){if(this.yi(t)&&this.networkEnabled)return!0;if(!this.yi(t)){if(!t.allowTabSynchronization)throw new g(m.FAILED_PRECONDITION,$a);return!1}}return!(!this.networkEnabled||!this.inForeground)||Cs(e).W().next(r=>this.Ei(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&y("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.xs=!1,this.Pi(),this.si&&(this.si.cancel(),this.si=null),this.vi(),this.bi(),await this.ui.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Ec(e,qe.at);return this.mi(t).next(()=>this.pi(t))}),this.ui.close(),this.Vi()}Ei(e,t){return e.filter(r=>this.Ti(r.updateTimeMs,t)&&!this.Ri(r.clientId))}Si(){return this.runTransaction("getActiveClients","readonly",e=>Cs(e).W().next(t=>this.Ei(t,18e5).map(r=>r.clientId)))}get started(){return this.xs}getMutationQueue(e,t){return Go.ue(e,this.Tt,t,this.referenceDelegate)}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new b0(e,this.Tt.oe.databaseId)}getDocumentOverlayCache(e){return Ko.ue(this.Tt,e)}getBundleCache(){return this.$s}runTransaction(e,t,r){y("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.ti)===15?d0:o===14?ig:o===13?rg:o===12?h0:o===11?ng:void T();var o;let a;return this.ui.runTransaction(e,i,s,c=>(a=new Ec(c,this.Cs?this.Cs.next():qe.at),t==="readwrite-primary"?this._i(a).next(u=>!!u||this.wi(a)).next(u=>{if(!u)throw re(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ys.enqueueRetryable(()=>this.ri(!1)),new g(m.FAILED_PRECONDITION,lm);return r(a)}).next(u=>this.gi(a).next(()=>u)):this.Di(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Di(e){return Yr(e).get("owner").next(t=>{if(t!==null&&this.Ti(t.leaseTimestampMs,5e3)&&!this.Ri(t.ownerId)&&!this.yi(t)&&!(this.Xs||this.allowTabSynchronization&&t.allowTabSynchronization))throw new g(m.FAILED_PRECONDITION,$a)})}gi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Yr(e).put("owner",t)}static C(){return et.C()}mi(e){const t=Yr(e);return t.get("owner").next(r=>this.yi(r)?(y("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):f.resolve())}Ti(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(re(`Detected an update time that is in the future: ${e} > ${r}`),!1))}hi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ni=()=>{this.Ys.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ai()))},this.document.addEventListener("visibilitychange",this.ni),this.inForeground=this.document.visibilityState==="visible")}vi(){this.ni&&(this.document.removeEventListener("visibilitychange",this.ni),this.ni=null)}li(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ei=()=>{this.Pi();const t=/(?:Version|Mobile)\/1[456]/;Pw()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ys.enterRestrictedMode(!0),this.Ys.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ei))}bi(){this.ei&&(this.window.removeEventListener("pagehide",this.ei),this.ei=null)}Ri(e){var t;try{const r=((t=this.ci)===null||t===void 0?void 0:t.getItem(this.Ai(e)))!==null;return y("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return re("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Pi(){if(this.ci)try{this.ci.setItem(this.Ai(this.clientId),String(Date.now()))}catch(e){re("Failed to set zombie client id.",e)}}Vi(){if(this.ci)try{this.ci.removeItem(this.Ai(this.clientId))}catch{}}Ai(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Yr(n){return ge(n,"owner")}function Cs(n){return ge(n,"clientMetadata")}function Gu(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Wu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ci=r,this.xi=i}static Ni(e,t){let r=x(),i=x();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wu(e,t.fromCache,r,i)}}/**
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
 */class gg{constructor(){this.ki=!1}initialize(e,t){this.$i=e,this.indexManager=t,this.ki=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Mi(e,t).next(s=>s||this.Oi(e,t,i,r)).next(s=>s||this.Fi(e,t))}Mi(e,t){if(Bh(t))return f.resolve(null);let r=Ge(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=to(t,null,"F"),r=Ge(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=x(...s);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Bi(t,a);return this.Li(t,u,o,c.readTime)?this.Mi(e,to(t,null,"F")):this.qi(e,u,t,c)}))})))}Oi(e,t,r,i){return Bh(t)||i.isEqual(C.min())?this.Fi(e,t):this.$i.getDocuments(e,r).next(s=>{const o=this.Bi(t,s);return this.Li(t,o,r,i)?this.Fi(e,t):(fc()<=U.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_c(t)),this.qi(e,o,t,cm(i,-1)))})}Bi(e,t){let r=new K(Am(e));return t.forEach((i,s)=>{rs(e,s)&&(r=r.add(s))}),r}Li(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fi(e,t){return fc()<=U.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",_c(t)),this.$i.getDocumentsMatchingQuery(e,t,Ye.min())}qi(e,t,r,i){return this.$i.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class V0{constructor(e,t,r,i){this.persistence=e,this.Ui=t,this.Tt=i,this.Ki=new ee(D),this.Gi=new sn(s=>Mn(s),ts),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(r)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pg(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ki))}}function yg(n,e,t,r){return new V0(n,e,t,r)}async function wg(n,e){const t=b(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.zi(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=x();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function B0(n,e){const t=b(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=f.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(w=>{const I=c.docVersions.get(p);k(I!==null),w.version.compareTo(I)<0&&(l.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),u.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=x();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function vg(n){const e=b(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ns.getLastRemoteSnapshotVersion(t))}function $0(n,e){const t=b(n),r=e.snapshotVersion;let i=t.Ki;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.ji.newChangeBuffer({trackRemovals:!0});i=t.Ki;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Ns.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.Ns.addMatchingKeys(s,l.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(ce.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),i=i.insert(h,p),function(w,I,E){return w.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,p,l)&&a.push(t.Ns.updateTargetData(s,p))});let c=Ke(),u=x();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Ig(s,o,e.documentUpdates).next(l=>{c=l.Hi,u=l.Ji})),!r.isEqual(C.min())){const l=t.Ns.getLastRemoteSnapshotVersion(s).next(h=>t.Ns.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return f.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Ki=i,s))}function Ig(n,e,t){let r=x(),i=x();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Ke();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(C.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Hi:o,Ji:i}})}function q0(n,e){const t=b(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ir(n,e){const t=b(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ns.getTargetData(r,e).next(s=>s?(i=s,f.resolve(i)):t.Ns.allocateTargetId(r).next(o=>(i=new qt(e,o,0,r.currentSequenceNumber),t.Ns.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ki.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ki=t.Ki.insert(r.targetId,r),t.Gi.set(e,r.targetId)),r})}async function _r(n,e,t){const r=b(n),i=r.Ki.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!rn(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ki=r.Ki.remove(e),r.Gi.delete(i.target)}function so(n,e,t){const r=b(n);let i=C.min(),s=x();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=b(a),h=l.Gi.get(u);return h!==void 0?f.resolve(l.Ki.get(h)):l.Ns.getTargetData(c,u)}(r,o,Ge(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Ui.getDocumentsMatchingQuery(o,e,t?i:C.min(),t?s:x())).next(a=>(Tg(r,km(e),a),{documents:a,Yi:s})))}function _g(n,e){const t=b(n),r=b(t.Ns),i=t.Ki.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ie(s,e).next(o=>o?o.target:null))}function bg(n,e){const t=b(n),r=t.Qi.get(e)||C.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.ji.getAllFromCollectionGroup(i,e,cm(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Tg(t,e,i),i))}function Tg(n,e,t){let r=n.Qi.get(e)||C.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Qi.set(e,r)}async function j0(n,e,t,r){const i=b(n);let s=x(),o=Ke();for(const u of t){const l=e.Zi(u.metadata.name);u.document&&(s=s.add(l));const h=e.Xi(u);h.setReadTime(e.tr(u.metadata.readTime)),o=o.insert(l,h)}const a=i.ji.newChangeBuffer({trackRemovals:!0}),c=await Ir(i,function(u){return Ge(Or(M.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>Ig(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Ns.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Ns.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.Hi,l.Ji)).next(()=>l.Hi)))}async function K0(n,e,t=x()){const r=await Ir(n,Ge(Bu(e.bundledQuery))),i=b(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=se(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$s.saveNamedQuery(s,e);const a=r.withResumeToken(ce.EMPTY_BYTE_STRING,o);return i.Ki=i.Ki.insert(a.targetId,a),i.Ns.updateTargetData(s,a).next(()=>i.Ns.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ns.addMatchingKeys(s,t,r.targetId)).next(()=>i.$s.saveNamedQuery(s,e))})}function pd(n,e){return`firestore_clients_${n}_${e}`}function md(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function qa(n,e){return`firestore_targets_${n}_${e}`}class oo{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static er(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new g(i.error.code,i.error.message))),o?new oo(e,t,i.state,s):(re("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}nr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class pi{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static er(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new g(r.error.code,r.error.message))),s?new pi(e,r.state,i):(re("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}nr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ao{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static er(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=jo();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=fm(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new ao(e,s):(re("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class zu{constructor(e,t){this.clientId=e,this.onlineState=t}static er(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new zu(t.clientId,t.onlineState):(re("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Cc{constructor(){this.activeTargetIds=jo()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ja{constructor(e,t,r,i,s){this.window=e,this.Ys=t,this.persistenceKey=r,this.rr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ur=this.cr.bind(this),this.ar=new ee(D),this.started=!1,this.hr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.lr=pd(this.persistenceKey,this.rr),this.dr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ar=this.ar.insert(this.rr,new Cc),this._r=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.wr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.mr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.gr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.yr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ur)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Si();for(const r of e){if(r===this.rr)continue;const i=this.getItem(pd(this.persistenceKey,r));if(i){const s=ao.er(r,i);s&&(this.ar=this.ar.insert(s.clientId,s))}}this.pr();const t=this.storage.getItem(this.gr);if(t){const r=this.Ir(t);r&&this.Tr(r)}for(const r of this.hr)this.cr(r);this.hr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.dr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Er(this.ar)}isActiveQueryTarget(e){let t=!1;return this.ar.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ar(e,"pending")}updateMutationState(e,t,r){this.Ar(e,t,r),this.Rr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(qa(this.persistenceKey,e));if(r){const i=pi.er(e,r);i&&(t=i.state)}}return this.Pr.sr(e),this.pr(),t}removeLocalQueryTarget(e){this.Pr.ir(e),this.pr()}isLocalQueryTarget(e){return this.Pr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(qa(this.persistenceKey,e))}updateQueryState(e,t,r){this.vr(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Rr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ur),this.removeItem(this.lr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return y("SharedClientState","READ",e,t),t}setItem(e,t){y("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){y("SharedClientState","REMOVE",e),this.storage.removeItem(e)}cr(e){const t=e;if(t.storageArea===this.storage){if(y("SharedClientState","EVENT",t.key,t.newValue),t.key===this.lr)return void re("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ys.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this._r.test(t.key)){if(t.newValue==null){const r=this.Sr(t.key);return this.Dr(r,null)}{const r=this.Cr(t.key,t.newValue);if(r)return this.Dr(r.clientId,r)}}else if(this.wr.test(t.key)){if(t.newValue!==null){const r=this.Nr(t.key,t.newValue);if(r)return this.kr(r)}}else if(this.mr.test(t.key)){if(t.newValue!==null){const r=this.$r(t.key,t.newValue);if(r)return this.Mr(r)}}else if(t.key===this.gr){if(t.newValue!==null){const r=this.Ir(t.newValue);if(r)return this.Tr(r)}}else if(t.key===this.dr){const r=function(i){let s=qe.at;if(i!=null)try{const o=JSON.parse(i);k(typeof o=="number"),s=o}catch(o){re("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==qe.at&&this.sequenceNumberHandler(r)}else if(t.key===this.yr){const r=this.Or(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Fr(i)))}}}else this.hr.push(t)})}}get Pr(){return this.ar.get(this.rr)}pr(){this.setItem(this.lr,this.Pr.nr())}Ar(e,t,r){const i=new oo(this.currentUser,e,t,r),s=md(this.persistenceKey,this.currentUser,e);this.setItem(s,i.nr())}Rr(e){const t=md(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.rr,onlineState:e};this.storage.setItem(this.gr,JSON.stringify(t))}vr(e,t,r){const i=qa(this.persistenceKey,e),s=new pi(e,t,r);this.setItem(i,s.nr())}Vr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.yr,t)}Sr(e){const t=this._r.exec(e);return t?t[1]:null}Cr(e,t){const r=this.Sr(e);return ao.er(r,t)}Nr(e,t){const r=this.wr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return oo.er(new de(s),i,t)}$r(e,t){const r=this.mr.exec(e),i=Number(r[1]);return pi.er(i,t)}Ir(e){return zu.er(e)}Or(e){return JSON.parse(e)}async kr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Br(e.batchId,e.state,e.error);y("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Mr(e){return this.syncEngine.Lr(e.targetId,e.state,e.error)}Dr(e,t){const r=t?this.ar.insert(e,t):this.ar.remove(e),i=this.Er(this.ar),s=this.Er(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.qr(o,a).then(()=>{this.ar=r})}Tr(e){this.ar.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Er(e){let t=jo();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class Eg{constructor(){this.Ur=new Cc,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,t,r){this.Kr[e]=t}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Cc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class G0{Gr(e){}shutdown(){}}/**
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
 */class gd{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ns=null;function Ka(){return Ns===null?Ns=268435456+Math.round(2147483648*Math.random()):Ns++,"0x"+Ns.toString(16)}/**
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
 */const W0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class z0{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
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
 */const Ne="WebChannelConnection";class H0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.co=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,t,r,i,s){const o=Ka(),a=this.fo(e,t);y("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this._o(c,i,s),this.wo(e,a,c,r).then(u=>(y("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw fr("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}mo(e,t,r,i,s,o){return this.lo(e,t,r,i,s)}_o(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+xr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}fo(e,t){const r=W0[e];return`${this.co}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,t,r,i){const s=Ka();return new Promise((o,a)=>{const c=new WT;c.setWithCredentials(!0),c.listenOnce(jT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Va.NO_ERROR:const l=c.getResponseJson();y(Ne,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case Va.TIMEOUT:y(Ne,`RPC '${e}' ${s} timed out`),a(new g(m.DEADLINE_EXCEEDED,"Request time out"));break;case Va.HTTP_ERROR:const h=c.getStatus();if(y(Ne,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const w=function(I){const E=I.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(E)>=0?E:m.UNKNOWN}(p.status);a(new g(w,p.message))}else a(new g(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new g(m.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{y(Ne,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);y(Ne,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}yo(e,t,r){const i=Ka(),s=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$T(),a=qT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new GT({})),this._o(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=s.join("");y(Ne,`Creating RPC '${e}' stream ${i}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const p=new z0({Yr:I=>{d?y(Ne,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(h||(y(Ne,`Opening RPC '${e}' stream ${i} transport.`),l.open(),h=!0),y(Ne,`RPC '${e}' stream ${i} sending:`,I),l.send(I))},Zr:()=>l.close()}),w=(I,E,P)=>{I.listen(E,$=>{try{P($)}catch(R){setTimeout(()=>{throw R},0)}})};return w(l,Ts.EventType.OPEN,()=>{d||y(Ne,`RPC '${e}' stream ${i} transport opened.`)}),w(l,Ts.EventType.CLOSE,()=>{d||(d=!0,y(Ne,`RPC '${e}' stream ${i} transport closed`),p.oo())}),w(l,Ts.EventType.ERROR,I=>{d||(d=!0,fr(Ne,`RPC '${e}' stream ${i} transport errored:`,I),p.oo(new g(m.UNAVAILABLE,"The operation could not be completed")))}),w(l,Ts.EventType.MESSAGE,I=>{var E;if(!d){const P=I.data[0];k(!!P);const $=P,R=$.error||((E=$[0])===null||E===void 0?void 0:E.error);if(R){y(Ne,`RPC '${e}' stream ${i} received error:`,R);const F=R.status;let j=function(le){const Ve=oe[le];if(Ve!==void 0)return Um(Ve)}(F),B=R.message;j===void 0&&(j=m.INTERNAL,B="Unknown error status: "+F+" with message "+R.message),d=!0,p.oo(new g(j,B)),l.close()}else y(Ne,`RPC '${e}' stream ${i} received:`,P),p.uo(P)}}),w(a,KT.STAT_EVENT,I=>{I.stat===kh.PROXY?y(Ne,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===kh.NOPROXY&&y(Ne,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.ro()},0),p}}/**
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
 */function Sg(){return typeof window<"u"?window:null}function Ms(){return typeof document<"u"?document:null}/**
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
 */function as(n){return new VE(n,!0)}/**
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
 */class Hu{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ys=e,this.timerId=t,this.po=r,this.Io=i,this.To=s,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const t=Math.floor(this.Eo+this.bo()),r=Math.max(0,Date.now()-this.Ro),i=Math.max(0,t-r);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
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
 */class kg{constructor(e,t,r,i,s,o,a,c){this.Ys=e,this.So=r,this.Do=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Hu(e,t)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,t){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(re(t.toString()),re("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(t)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),t=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Co===t&&this.jo(r,i)},r=>{e(()=>{const i=new g(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.zo(i)})})}jo(e,t){const r=this.Qo(this.Co);this.stream=this.Wo(e,t),this.stream.Xr(()=>{r(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{r(()=>this.zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return t=>{this.Ys.enqueueAndForget(()=>this.Co===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Q0 extends kg{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.Tt=s}Wo(e,t){return this.connection.yo("Listen",e,t)}onMessage(e){this.ko.reset();const t=qE(this.Tt,e),r=function(i){if(!("targetChange"in i))return C.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?C.min():s.readTime?se(s.readTime):C.min()}(e);return this.listener.Ho(t,r)}Jo(e){const t={};t.database=Oi(this.Tt),t.addTarget=function(i,s){let o;const a=s.target;return o=Zs(a)?{documents:Qm(i,a)}:{query:Xm(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Km(i,s.resumeToken):s.snapshotVersion.compareTo(C.min())>0&&(o.readTime=vr(i,s.snapshotVersion.toTimestamp())),o}(this.Tt,e);const r=KE(this.Tt,e);r&&(t.labels=r),this.qo(t)}Yo(e){const t={};t.database=Oi(this.Tt),t.removeTarget=e,this.qo(t)}}class X0 extends kg{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.Tt=s,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,t){return this.connection.yo("Write",e,t)}onMessage(e){if(k(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const t=jE(e.writeResults,e.commitTime),r=se(e.commitTime);return this.listener.eu(r,t)}return k(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Oi(this.Tt),this.qo(e)}tu(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Pi(this.Tt,r))};this.qo(t)}}/**
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
 */class Y0 extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new g(m.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,t,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.lo(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new g(m.UNKNOWN,i.toString())})}mo(e,t,r,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.mo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new g(m.UNKNOWN,s.toString())})}terminate(){this.iu=!0}}class J0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(re(t),this.cu=!1):y("OnlineStateTracker",t)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
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
 */class Z0{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=s,this.yu.Gr(o=>{r.enqueueAndForget(async()=>{on(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=b(a);c.mu.add(4),await Mr(c),c.pu.set("Unknown"),c.mu.delete(4),await cs(c)}(this))})}),this.pu=new J0(r,i)}}async function cs(n){if(on(n))for(const e of n.gu)await e(!0)}async function Mr(n){for(const e of n.gu)await e(!1)}function zo(n,e){const t=b(n);t.wu.has(e.targetId)||(t.wu.set(e.targetId,e),Yu(t)?Xu(t):Ur(t).Mo()&&Qu(t,e))}function Li(n,e){const t=b(n),r=Ur(t);t.wu.delete(e),r.Mo()&&Ag(t,e),t.wu.size===0&&(r.Mo()?r.Bo():on(t)&&t.pu.set("Unknown"))}function Qu(n,e){n.Iu.Ot(e.targetId),Ur(n).Jo(e)}function Ag(n,e){n.Iu.Ot(e),Ur(n).Yo(e)}function Xu(n){n.Iu=new LE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>n.wu.get(e)||null}),Ur(n).start(),n.pu.au()}function Yu(n){return on(n)&&!Ur(n).$o()&&n.wu.size>0}function on(n){return b(n).mu.size===0}function Cg(n){n.Iu=void 0}async function eS(n){n.wu.forEach((e,t)=>{Qu(n,e)})}async function tS(n,e){Cg(n),Yu(n)?(n.pu.fu(e),Xu(n)):n.pu.set("Unknown")}async function nS(n,e,t){if(n.pu.set("Online"),e instanceof jm&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.wu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.wu.delete(o),r.Iu.removeTarget(o))}(n,e)}catch(r){y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await co(n,r)}else if(e instanceof Ps?n.Iu.Qt(e):e instanceof qm?n.Iu.Zt(e):n.Iu.Wt(e),!t.isEqual(C.min()))try{const r=await vg(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.Iu.ee(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.wu.get(c);u&&i.wu.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.wu.get(a);if(!c)return;i.wu.set(a,c.withResumeToken(ce.EMPTY_BYTE_STRING,c.snapshotVersion)),Ag(i,a);const u=new qt(c.target,a,1,c.sequenceNumber);Qu(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){y("RemoteStore","Failed to raise snapshot:",r),await co(n,r)}}async function co(n,e,t){if(!rn(e))throw e;n.mu.add(1),await Mr(n),n.pu.set("Offline"),t||(t=()=>vg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await t(),n.mu.delete(1),await cs(n)})}function Ng(n,e){return e().catch(t=>co(n,t,e))}async function Fr(n){const e=b(n),t=Xt(e);let r=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;rS(e);)try{const i=await q0(e.localStore,r);if(i===null){e._u.length===0&&t.Bo();break}r=i.batchId,iS(e,i)}catch(i){await co(e,i)}Rg(e)&&Dg(e)}function rS(n){return on(n)&&n._u.length<10}function iS(n,e){n._u.push(e);const t=Xt(n);t.Mo()&&t.Xo&&t.tu(e.mutations)}function Rg(n){return on(n)&&!Xt(n).$o()&&n._u.length>0}function Dg(n){Xt(n).start()}async function sS(n){Xt(n).su()}async function oS(n){const e=Xt(n);for(const t of n._u)e.tu(t.mutations)}async function aS(n,e,t){const r=n._u.shift(),i=Uu.from(r,e,t);await Ng(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Fr(n)}async function cS(n,e){e&&Xt(n).Xo&&await async function(t,r){if(i=r.code,Fm(i)&&i!==m.ABORTED){const s=t._u.shift();Xt(t).Fo(),await Ng(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Fr(t)}var i}(n,e),Rg(n)&&Dg(n)}async function yd(n,e){const t=b(n);t.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const r=on(t);t.mu.add(3),await Mr(t),r&&t.pu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.mu.delete(3),await cs(t)}async function Nc(n,e){const t=b(n);e?(t.mu.delete(2),await cs(t)):e||(t.mu.add(2),await Mr(t),t.pu.set("Unknown"))}function Ur(n){return n.Tu||(n.Tu=function(e,t,r){const i=b(e);return i.ru(),new Q0(t,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(n.datastore,n.asyncQueue,{Xr:eS.bind(null,n),no:tS.bind(null,n),Ho:nS.bind(null,n)}),n.gu.push(async e=>{e?(n.Tu.Fo(),Yu(n)?Xu(n):n.pu.set("Unknown")):(await n.Tu.stop(),Cg(n))})),n.Tu}function Xt(n){return n.Eu||(n.Eu=function(e,t,r){const i=b(e);return i.ru(),new X0(t,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(n.datastore,n.asyncQueue,{Xr:sS.bind(null,n),no:cS.bind(null,n),nu:oS.bind(null,n),eu:aS.bind(null,n)}),n.gu.push(async e=>{e?(n.Eu.Fo(),await Fr(n)):(await n.Eu.stop(),n._u.length>0&&(y("RemoteStore",`Stopping write stream with ${n._u.length} pending writes`),n._u=[]))})),n.Eu}/**
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
 */class Ju{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Ju(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new g(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vr(n,e){if(re("AsyncQueue",`${e}: ${n}`),rn(n))return new g(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class ar{constructor(e){this.comparator=e?(t,r)=>e(t,r)||_.comparator(t.key,r.key):(t,r)=>_.comparator(t.key,r.key),this.keyedMap=ii(),this.sortedSet=new ee(this.comparator)}static emptySet(e){return new ar(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ar)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ar;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class wd{constructor(){this.Au=new ee(_.comparator)}track(e){const t=e.doc.key,r=this.Au.get(t);r?e.type!==0&&r.type===3?this.Au=this.Au.insert(t,e):e.type===3&&r.type!==1?this.Au=this.Au.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Au=this.Au.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Au=this.Au.remove(t):e.type===1&&r.type===2?this.Au=this.Au.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):T():this.Au=this.Au.insert(t,e)}Ru(){const e=[];return this.Au.inorderTraversal((t,r)=>{e.push(r)}),e}}class br{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new br(e,t,ar.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ns(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class uS{constructor(){this.Pu=void 0,this.listeners=[]}}class lS{constructor(){this.queries=new sn(e=>Sm(e),ns),this.onlineState="Unknown",this.vu=new Set}}async function Zu(n,e){const t=b(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new uS),i)try{s.Pu=await t.onListen(r)}catch(o){const a=Vr(o,`Initialization of query '${_c(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.bu(t.onlineState),s.Pu&&e.Vu(s.Pu)&&tl(t)}async function el(n,e){const t=b(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function hS(n,e){const t=b(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.Vu(i)&&(r=!0);o.Pu=i}}r&&tl(t)}function dS(n,e,t){const r=b(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function tl(n){n.vu.forEach(e=>{e.next()})}class nl{constructor(e,t,r){this.query=e,this.Su=t,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new br(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Du?this.xu(e)&&(this.Su.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.ku(e),t=!0),this.Cu=e,t}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),t=!0),t}Nu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.$u||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const t=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ku(e){e=br.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
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
 */class fS{constructor(e,t){this.Mu=e,this.byteLength=t}Ou(){return"metadata"in this.Mu}}/**
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
 */class vd{constructor(e){this.Tt=e}Zi(e){return dt(this.Tt,e)}Xi(e){return e.metadata.exists?Hm(this.Tt,e.document,!1):G.newNoDocument(this.Zi(e.metadata.name),this.tr(e.metadata.readTime))}tr(e){return se(e)}}class pS{constructor(e,t,r){this.Fu=e,this.localStore=t,this.Tt=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=xg(e)}Bu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Mu.namedQuery)this.queries.push(e.Mu.namedQuery);else if(e.Mu.documentMetadata){this.documents.push({metadata:e.Mu.documentMetadata}),e.Mu.documentMetadata.exists||++t;const r=M.fromString(e.Mu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Mu.document&&(this.documents[this.documents.length-1].document=e.Mu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Lu(e){const t=new Map,r=new vd(this.Tt);for(const i of e)if(i.metadata.queries){const s=r.Zi(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||x()).add(s);t.set(o,a)}}return t}async complete(){const e=await j0(this.localStore,new vd(this.Tt),this.documents,this.Fu.id),t=this.Lu(this.documents);for(const r of this.queries)await K0(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,qu:this.collectionGroups,Uu:e}}}function xg(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class Og{constructor(e){this.key=e}}class Pg{constructor(e){this.key=e}}class Lg{constructor(e,t){this.query=e,this.Ku=t,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=x(),this.mutatedKeys=x(),this.ju=Am(e),this.zu=new ar(this.ju)}get Wu(){return this.Ku}Hu(e,t){const r=t?t.Ju:new wd,i=t?t.zu:this.zu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),p=rs(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),I=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?w!==I&&(r.track({type:3,doc:p}),E=!0):this.Yu(d,p)||(r.track({type:2,doc:p}),E=!0,(c&&this.ju(p,c)>0||u&&this.ju(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(c||u)&&(a=!0)),E&&(p?(o=o.add(p),s=I?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{zu:o,Ju:r,Li:a,mutatedKeys:s}}Yu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const s=e.Ju.Ru();s.sort((u,l)=>function(h,d){const p=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return p(h)-p(d)}(u.type,l.type)||this.ju(u.doc,l.doc)),this.Zu(r);const o=t?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,s.length!==0||c?{snapshot:new br(this.query,e.zu,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new wd,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(t=>this.Ku=this.Ku.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ku=this.Ku.delete(t)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=x(),this.zu.forEach(r=>{this.ec(r.key)&&(this.Qu=this.Qu.add(r.key))});const t=[];return e.forEach(r=>{this.Qu.has(r)||t.push(new Pg(r))}),this.Qu.forEach(r=>{e.has(r)||t.push(new Og(r))}),t}nc(e){this.Ku=e.Yi,this.Qu=x();const t=this.Hu(e.documents);return this.applyChanges(t,!0)}sc(){return br.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class mS{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class gS{constructor(e){this.key=e,this.ic=!1}}class yS{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new sn(a=>Sm(a),ns),this.uc=new Map,this.cc=new Set,this.ac=new ee(_.comparator),this.hc=new Map,this.lc=new ju,this.fc={},this.dc=new Map,this._c=$n.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function wS(n,e){const t=al(n);let r,i;const s=t.oc.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.sc();else{const o=await Ir(t.localStore,Ge(e));t.isPrimaryClient&&zo(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await rl(t,e,r,a==="current",o.resumeToken)}return i}async function rl(n,e,t,r,i){n.mc=(h,d,p)=>async function(w,I,E,P){let $=I.view.Hu(E);$.Li&&($=await so(w.localStore,I.query,!1).then(({documents:j})=>I.view.Hu(j,$)));const R=P&&P.targetChanges.get(I.targetId),F=I.view.applyChanges($,w.isPrimaryClient,R);return Rc(w,I.targetId,F.tc),F.snapshot}(n,h,d,p);const s=await so(n.localStore,e,!0),o=new Lg(e,s.Yi),a=o.Hu(s.documents),c=os.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Rc(n,t,u.tc);const l=new mS(e,t,o);return n.oc.set(e,l),n.uc.has(t)?n.uc.get(t).push(e):n.uc.set(t,[e]),u.snapshot}async function vS(n,e){const t=b(n),r=t.oc.get(e),i=t.uc.get(r.targetId);if(i.length>1)return t.uc.set(r.targetId,i.filter(s=>!ns(s,e))),void t.oc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await _r(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Li(t.remoteStore,r.targetId),Tr(t,r.targetId)}).catch(nn)):(Tr(t,r.targetId),await _r(t.localStore,r.targetId,!0))}async function IS(n,e,t){const r=cl(n);try{const i=await function(s,o){const a=b(s),c=Q.now(),u=o.reduce((d,p)=>d.add(p.key),x());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Ke(),w=x();return a.ji.getEntries(d,u).next(I=>{p=I,p.forEach((E,P)=>{P.isValidDocument()||(w=w.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(I=>{l=I;const E=[];for(const P of o){const $=NE(P,l.get(P.key).overlayedDocument);$!=null&&E.push(new Nt(P.key,$,Tm($.value.mapValue),H.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,E,o)}).next(I=>{h=I;const E=I.applyToLocalDocumentSet(l,w);return a.documentOverlayCache.saveOverlays(d,I.batchId,E)})}).then(()=>({batchId:h.batchId,changes:Bm(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.fc[s.currentUser.toKey()];c||(c=new ee(D)),c=c.insert(o,a),s.fc[s.currentUser.toKey()]=c}(r,i.batchId,t),await Rt(r,i.changes),await Fr(r.remoteStore)}catch(i){const s=Vr(i,"Failed to persist write");t.reject(s)}}async function Mg(n,e){const t=b(n);try{const r=await $0(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.hc.get(s);o&&(k(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?k(o.ic):i.removedDocuments.size>0&&(k(o.ic),o.ic=!1))}),await Rt(t,r,e)}catch(r){await nn(r)}}function Id(n,e,t){const r=b(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.oc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=b(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&tl(a)}(r.eventManager,e),i.length&&r.rc.Ho(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _S(n,e,t){const r=b(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.hc.get(e),s=i&&i.key;if(s){let o=new ee(_.comparator);o=o.insert(s,G.newNoDocument(s,C.min()));const a=x().add(s),c=new ss(C.min(),new Map,new K(D),o,a);await Mg(r,c),r.ac=r.ac.remove(s),r.hc.delete(e),ol(r)}else await _r(r.localStore,e,!1).then(()=>Tr(r,e,t)).catch(nn)}async function bS(n,e){const t=b(n),r=e.batch.batchId;try{const i=await B0(t.localStore,e);sl(t,r,null),il(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Rt(t,i)}catch(i){await nn(i)}}async function TS(n,e,t){const r=b(n);try{const i=await function(s,o){const a=b(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(k(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);sl(r,e,t),il(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Rt(r,i)}catch(i){await nn(i)}}async function ES(n,e){const t=b(n);on(t.remoteStore)||y("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=b(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.dc.get(r)||[];i.push(e),t.dc.set(r,i)}catch(r){const i=Vr(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function il(n,e){(n.dc.get(e)||[]).forEach(t=>{t.resolve()}),n.dc.delete(e)}function sl(n,e,t){const r=b(n);let i=r.fc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.fc[r.currentUser.toKey()]=i}}function Tr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.uc.get(e))n.oc.delete(r),t&&n.rc.gc(r,t);n.uc.delete(e),n.isPrimaryClient&&n.lc.ds(e).forEach(r=>{n.lc.containsKey(r)||Fg(n,r)})}function Fg(n,e){n.cc.delete(e.path.canonicalString());const t=n.ac.get(e);t!==null&&(Li(n.remoteStore,t),n.ac=n.ac.remove(e),n.hc.delete(t),ol(n))}function Rc(n,e,t){for(const r of t)r instanceof Og?(n.lc.addReference(r.key,e),SS(n,r)):r instanceof Pg?(y("SyncEngine","Document no longer in limbo: "+r.key),n.lc.removeReference(r.key,e),n.lc.containsKey(r.key)||Fg(n,r.key)):T()}function SS(n,e){const t=e.key,r=t.path.canonicalString();n.ac.get(t)||n.cc.has(r)||(y("SyncEngine","New document in limbo: "+t),n.cc.add(r),ol(n))}function ol(n){for(;n.cc.size>0&&n.ac.size<n.maxConcurrentLimboResolutions;){const e=n.cc.values().next().value;n.cc.delete(e);const t=new _(M.fromString(e)),r=n._c.next();n.hc.set(r,new gS(t)),n.ac=n.ac.insert(t,r),zo(n.remoteStore,new qt(Ge(Or(t.path)),r,2,qe.at))}}async function Rt(n,e,t){const r=b(n),i=[],s=[],o=[];r.oc.isEmpty()||(r.oc.forEach((a,c)=>{o.push(r.mc(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Wu.Ni(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.rc.Ho(i),await async function(a,c){const u=b(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>f.forEach(c,h=>f.forEach(h.Ci,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>f.forEach(h.xi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!rn(l))throw l;y("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ki.get(h),p=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(p);u.Ki=u.Ki.insert(h,w)}}}(r.localStore,s))}async function kS(n,e){const t=b(n);if(!t.currentUser.isEqual(e)){y("SyncEngine","User change. New user:",e.toKey());const r=await wg(t.localStore,e);t.currentUser=e,function(i,s){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new g(m.CANCELLED,s))})}),i.dc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Rt(t,r.Wi)}}function AS(n,e){const t=b(n),r=t.hc.get(e);if(r&&r.ic)return x().add(r.key);{let i=x();const s=t.uc.get(e);if(!s)return i;for(const o of s){const a=t.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}async function CS(n,e){const t=b(n),r=await so(t.localStore,e.query,!0),i=e.view.nc(r);return t.isPrimaryClient&&Rc(t,e.targetId,i.tc),i}async function NS(n,e){const t=b(n);return bg(t.localStore,e).then(r=>Rt(t,r))}async function RS(n,e,t,r){const i=b(n),s=await function(o,a){const c=b(o),u=b(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.An(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):f.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Fr(i.remoteStore):t==="acknowledged"||t==="rejected"?(sl(i,e,r||null),il(i,e),function(o,a){b(b(o).mutationQueue).Pn(a)}(i.localStore,e)):T(),await Rt(i,s)):y("SyncEngine","Cannot apply mutation batch with id: "+e)}async function DS(n,e){const t=b(n);if(al(t),cl(t),e===!0&&t.wc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await _d(t,r.toArray());t.wc=!0,await Nc(t.remoteStore,!0);for(const s of i)zo(t.remoteStore,s)}else if(e===!1&&t.wc!==!1){const r=[];let i=Promise.resolve();t.uc.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Tr(t,o),_r(t.localStore,o,!0))),Li(t.remoteStore,o)}),await i,await _d(t,r),function(s){const o=b(s);o.hc.forEach((a,c)=>{Li(o.remoteStore,c)}),o.lc._s(),o.hc=new Map,o.ac=new ee(_.comparator)}(t),t.wc=!1,await Nc(t.remoteStore,!1)}}async function _d(n,e,t){const r=b(n),i=[],s=[];for(const o of e){let a;const c=r.uc.get(o);if(c&&c.length!==0){a=await Ir(r.localStore,Ge(c[0]));for(const u of c){const l=r.oc.get(u),h=await CS(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await _g(r.localStore,o);a=await Ir(r.localStore,u),await rl(r,Ug(u),o,!1,a.resumeToken)}i.push(a)}return r.rc.Ho(s),i}function Ug(n){return Em(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function xS(n){const e=b(n);return b(b(e.localStore).persistence).Si()}async function OS(n,e,t,r){const i=b(n);if(i.wc)return void y("SyncEngine","Ignoring unexpected query state notification.");const s=i.uc.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await bg(i.localStore,km(s[0])),a=ss.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ce.EMPTY_BYTE_STRING);await Rt(i,o,a);break}case"rejected":await _r(i.localStore,e,!0),Tr(i,e,r);break;default:T()}}async function PS(n,e,t){const r=al(n);if(r.wc){for(const i of e){if(r.uc.has(i)){y("SyncEngine","Adding an already active target "+i);continue}const s=await _g(r.localStore,i),o=await Ir(r.localStore,s);await rl(r,Ug(s),o.targetId,!1,o.resumeToken),zo(r.remoteStore,o)}for(const i of t)r.uc.has(i)&&await _r(r.localStore,i,!1).then(()=>{Li(r.remoteStore,i),Tr(r,i)}).catch(nn)}}function al(n){const e=b(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_S.bind(null,e),e.rc.Ho=hS.bind(null,e.eventManager),e.rc.gc=dS.bind(null,e.eventManager),e}function cl(n){const e=b(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TS.bind(null,e),e}function LS(n,e,t){const r=b(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=b(h),w=se(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",I=>p.$s.getBundleMetadata(I,d.id)).then(I=>!!I&&I.createTime.compareTo(w)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(xg(a));const c=new pS(a,i.localStore,s.Tt);let u=await s.yc();for(;u;){const h=await c.Bu(u);h&&o._updateProgress(h),u=await s.yc()}const l=await c.complete();return await Rt(i,l.Uu,void 0),await function(h,d){const p=b(h);return p.persistence.runTransaction("Save bundle","readwrite",w=>p.$s.saveBundleMetadata(w,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.qu)}catch(a){return fr("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Vg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=as(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,t){return null}Rc(e,t){return null}Ec(e){return yg(this.persistence,new gg,e.initialUser,this.Tt)}Tc(e){return new mg(Wo.qs,this.Tt)}Ic(e){return new Eg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Bg extends Vg{constructor(e,t,r){super(),this.Pc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Pc.initialize(this,e),await cl(this.Pc.syncEngine),await Fr(this.Pc.remoteStore),await this.persistence.di(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ec(e){return yg(this.persistence,new gg,e.initialUser,this.Tt)}Ac(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new S0(r,e.asyncQueue,t)}Rc(e,t){const r=new cE(t,this.persistence);return new aE(e.asyncQueue,r)}Tc(e){const t=Gu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Be.withCacheSize(this.cacheSizeBytes):Be.DEFAULT;return new Ku(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Sg(),Ms(),this.Tt,this.sharedClientState,!!this.forceOwnership)}Ic(e){return new Eg}}class MS extends Bg{constructor(e,t){super(e,t,!1),this.Pc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Pc.syncEngine;this.sharedClientState instanceof ja&&(this.sharedClientState.syncEngine={Br:RS.bind(null,t),Lr:OS.bind(null,t),qr:PS.bind(null,t),Si:xS.bind(null,t),Fr:NS.bind(null,t)},await this.sharedClientState.start()),await this.persistence.di(async r=>{await DS(this.Pc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Ic(e){const t=Sg();if(!ja.C(t))throw new g(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Gu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ja(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class ul{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Id(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kS.bind(null,this.syncEngine),await Nc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lS}createDatastore(e){const t=as(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new H0(i));var i;return function(s,o,a,c){return new Y0(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Id(this.syncEngine,a,0),o=gd.C()?new gd:new G0,new Z0(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,c,u){const l=new yS(r,i,s,o,a,c);return u&&(l.wc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=b(e);y("RemoteStore","RemoteStore shutting down."),t.mu.add(5),await Mr(t),t.yu.shutdown(),t.pu.set("Unknown")}(this.remoteStore)}}/**
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
 */function bd(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Ho{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):re("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class FS{constructor(e,t){this.Vc=e,this.Tt=t,this.metadata=new fe,this.buffer=new Uint8Array,this.Sc=new TextDecoder("utf-8"),this.Dc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.Mu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Mu)}`))},r=>this.metadata.reject(r))}close(){return this.Vc.cancel()}async getMetadata(){return this.metadata.promise}async yc(){return await this.getMetadata(),this.Dc()}async Dc(){const e=await this.Cc();if(e===null)return null;const t=this.Sc.decode(e),r=Number(t);isNaN(r)&&this.xc(`length string (${t}) is not valid number`);const i=await this.Nc(r);return new fS(JSON.parse(i),e.length+r)}kc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Cc(){for(;this.kc()<0&&!await this.$c(););if(this.buffer.length===0)return null;const e=this.kc();e<0&&this.xc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Nc(e){for(;this.buffer.length<e;)await this.$c()&&this.xc("Reached the end of bundle when more is expected.");const t=this.Sc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}xc(e){throw this.Vc.cancel(),new Error(`Invalid bundle format: ${e}`)}async $c(){const e=await this.Vc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class US{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new g(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=b(r),o=Oi(s.Tt)+"/documents",a={documents:i.map(h=>xi(s.Tt,h))},c=await s.mo("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=$E(s.Tt,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());k(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Lr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=_.fromPath(r);this.mutations.push(new Lu(i,this.precondition(i)))}),await async function(t,r){const i=b(t),s=Oi(i.Tt)+"/documents",o={writes:r.map(a=>Pi(i.Tt,a))};await i.lo("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw T();t=C.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new g(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(C.min())?H.exists(!1):H.updateTime(t):H.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(C.min()))throw new g(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return H.updateTime(t)}return H.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class VS{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Mc=r.maxAttempts,this.ko=new Hu(this.asyncQueue,"transaction_retry")}run(){this.Mc-=1,this.Oc()}Oc(){this.ko.vo(async()=>{const e=new US(this.datastore),t=this.Fc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Bc(i)}))}).catch(r=>{this.Bc(r)})})}Fc(e){try{const t=this.updateFunction(e);return!es(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Bc(e){this.Mc>0&&this.Lc(e)?(this.Mc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}Lc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Fm(t)}return!1}}/**
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
 */class BS{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=de.UNAUTHENTICATED,this.clientId=sm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new g(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Vr(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $g(n,e){n.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await wg(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function qg(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ll(n);y("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>yd(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>yd(e.remoteStore,s)),n.onlineComponents=e}async function ll(n){return n.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await $g(n,new Vg)),n.offlineComponents}async function Qo(n){return n.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await qg(n,new ul)),n.onlineComponents}function jg(n){return ll(n).then(e=>e.persistence)}function hl(n){return ll(n).then(e=>e.localStore)}function Kg(n){return Qo(n).then(e=>e.remoteStore)}function dl(n){return Qo(n).then(e=>e.syncEngine)}function $S(n){return Qo(n).then(e=>e.datastore)}async function Er(n){const e=await Qo(n),t=e.eventManager;return t.onListen=wS.bind(null,e.syncEngine),t.onUnlisten=vS.bind(null,e.syncEngine),t}function qS(n){return n.asyncQueue.enqueue(async()=>{const e=await jg(n),t=await Kg(n);return e.setNetworkEnabled(!0),function(r){const i=b(r);return i.mu.delete(0),cs(i)}(t)})}function jS(n){return n.asyncQueue.enqueue(async()=>{const e=await jg(n),t=await Kg(n);return e.setNetworkEnabled(!1),async function(r){const i=b(r);i.mu.add(0),await Mr(i),i.pu.set("Offline")}(t)})}function KS(n,e){const t=new fe;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=b(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new g(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Vr(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await hl(n),e,t)),t.promise}function Gg(n,e,t={}){const r=new fe;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Ho({next:h=>{s.enqueueAndForget(()=>el(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new g(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new g(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new nl(Or(o.path),u,{includeMetadataChanges:!0,$u:!0});return Zu(i,l)}(await Er(n),n.asyncQueue,e,t,r)),r.promise}function GS(n,e){const t=new fe;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await so(r,i,!0),a=new Lg(i,o.Yi),c=a.Hu(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=Vr(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await hl(n),e,t)),t.promise}function Wg(n,e,t={}){const r=new fe;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Ho({next:h=>{s.enqueueAndForget(()=>el(i,l)),h.fromCache&&a.source==="server"?c.reject(new g(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new nl(o,u,{includeMetadataChanges:!0,$u:!0});return Zu(i,l)}(await Er(n),n.asyncQueue,e,t,r)),r.promise}function WS(n,e){const t=new Ho(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){b(r).vu.add(i),i.next()}(await Er(n),t)),()=>{t.bc(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){b(r).vu.delete(i)}(await Er(n),t))}}function zS(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(c,u){return new FS(c,u)}(function(c,u){if(c instanceof Uint8Array)return bd(c,u);if(c instanceof ArrayBuffer)return bd(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,as(e));n.asyncQueue.enqueueAndForget(async()=>{LS(await dl(n),i,r)})}function HS(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=b(t);return i.persistence.runTransaction("Get named query","readonly",s=>i.$s.getNamedQuery(s,r))}(await hl(n),e))}const Td=new Map;/**
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
 */function fl(n,e,t){if(!t)throw new g(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function zg(n,e,t,r){if(e===!0&&r===!0)throw new g(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ed(n){if(!_.isDocumentKey(n))throw new g(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sd(n){if(_.isDocumentKey(n))throw new g(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":T()}function V(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new g(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xo(n);throw new g(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Hg(n,e){if(e<=0)throw new g(m.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class kd{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new g(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new g(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,zg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class us{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new g(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new g(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kd(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new QT;switch(t.type){case"gapi":const r=t.client;return new ZT(r,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new g(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Td.get(e);t&&(y("ComponentProvider","Removing Datastore"),Td.delete(e),t.terminate())}(this),Promise.resolve()}}function QS(n,e,t,r={}){var i;const s=(n=V(n,us))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&fr("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=de.MOCK_USER;else{o=Zd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new g(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new de(c)}n._authCredentials=new XT(new im(o,a))}}/**
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
 */class W{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new W(this.firestore,e,this._key)}}class ke{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ke(this.firestore,e,this._query)}}class ft extends ke{constructor(e,t,r){super(e,t,Or(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new W(this.firestore,null,new _(e))}withConverter(e){return new ft(this.firestore,e,this._path)}}function Qg(n,e,...t){if(n=A(n),fl("collection","path",e),n instanceof us){const r=M.fromString(e,...t);return Sd(r),new ft(n,null,r)}{if(!(n instanceof W||n instanceof ft))throw new g(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(M.fromString(e,...t));return Sd(r),new ft(n.firestore,null,r)}}function XS(n,e){if(n=V(n,us),fl("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new g(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ke(n,null,function(t){return new Ct(M.emptyPath(),t)}(e))}function uo(n,e,...t){if(n=A(n),arguments.length===1&&(e=sm.R()),fl("doc","path",e),n instanceof us){const r=M.fromString(e,...t);return Ed(r),new W(n,null,new _(r))}{if(!(n instanceof W||n instanceof ft))throw new g(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(M.fromString(e,...t));return Ed(r),new W(n.firestore,n instanceof ft?n.converter:null,new _(r))}}function Xg(n,e){return n=A(n),e=A(e),(n instanceof W||n instanceof ft)&&(e instanceof W||e instanceof ft)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Yg(n,e){return n=A(n),e=A(e),n instanceof ke&&e instanceof ke&&n.firestore===e.firestore&&ns(n._query,e._query)&&n.converter===e.converter}/**
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
 */class YS{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Hu(this,"async_queue_retry"),this.Hc=()=>{const t=Ms();t&&y("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ko.Vo()};const e=Ms();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=Ms();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const t=new fe;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!rn(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const t=this.qc.then(()=>(this.jc=!0,e().catch(r=>{this.Qc=r,this.jc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw re("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.jc=!1,r))));return this.qc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.Wc.indexOf(e)>-1&&(t=0);const i=Ju.createAndSchedule(this,e,t,r,s=>this.Xc(s));return this.Gc.push(i),i}Jc(){this.Qc&&T()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const t of this.Gc)if(t.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Gc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}function Dc(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class JS{constructor(){this._progressObserver={},this._taskCompletionResolver=new fe,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const ZS=-1;class te extends us{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new YS,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Jg(this),this._firestoreClient.terminate()}}function ye(n){return n._firestoreClient||Jg(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Jg(n){var e;const t=n._freezeSettings(),r=function(i,s,o,a){return new uE(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new BS(n._authCredentials,n._appCheckCredentials,n._queue,r)}function ek(n,e){ey(n=V(n,te));const t=ye(n),r=n._freezeSettings(),i=new ul;return Zg(t,i,new Bg(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function tk(n){ey(n=V(n,te));const e=ye(n),t=n._freezeSettings(),r=new ul;return Zg(e,r,new MS(r,t.cacheSizeBytes))}function Zg(n,e,t){const r=new fe;return n.asyncQueue.enqueue(async()=>{try{await $g(n,t),await qg(n,e),r.resolve()}catch(i){const s=i;if(!function(o){return o.name==="FirebaseError"?o.code===m.FAILED_PRECONDITION||o.code===m.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(s))throw s;fr("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function nk(n){if(n._initialized&&!n._terminated)throw new g(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new fe;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!et.C())return Promise.resolve();const r=t+"main";await et.delete(r)}(Gu(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function rk(n){return function(e){const t=new fe;return e.asyncQueue.enqueueAndForget(async()=>ES(await dl(e),t)),t.promise}(ye(n=V(n,te)))}function ik(n){return qS(ye(n=V(n,te)))}function sk(n){return jS(ye(n=V(n,te)))}function ok(n,e){const t=ye(n=V(n,te)),r=new JS;return zS(t,n._databaseId,e,r),r}function ak(n,e){return HS(ye(n=V(n,te)),e).then(t=>t?new ke(n,null,t.query):null)}function ey(n){if(n._initialized||n._terminated)throw new g(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mt(ce.fromBase64String(e))}catch(t){throw new g(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mt(ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Yt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new g(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zn{constructor(e){this._methodName=e}}/**
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
 */class Yo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new g(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new g(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}/**
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
 */const ck=/^__.*__$/;class uk{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Nt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pr(e,this.data,t,this.fieldTransforms)}}class ty{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Nt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ny(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Jo{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.Tt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ia(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Jo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.oa({path:r,ca:!1});return i.aa(e),i}ha(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.oa({path:r,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return lo(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(ny(this.ra)&&ck.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class lk{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.Tt=r||as(e)}wa(e,t,r,i=!1){return new Jo({ra:e,methodName:t,_a:r,path:ie.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Hn(n){const e=n._freezeSettings(),t=as(n._databaseId);return new lk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Zo(n,e,t,r,i,s={}){const o=n.wa(s.merge||s.mergeFields?2:0,e,t,i);yl("Data must be an object, but it was:",o,r);const a=sy(r,o);let c,u;if(s.merge)c=new je(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=xc(e,h,t);if(!o.contains(d))throw new g(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ay(l,d)||l.push(d)}c=new je(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new uk(new _e(a),c,u)}class ls extends zn{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ls}}function ry(n,e,t){return new Jo({ra:3,_a:e.settings._a,methodName:n._methodName,ca:t},e.databaseId,e.Tt,e.ignoreUndefinedProperties)}class pl extends zn{_toFieldTransform(e){return new is(e.path,new yr)}isEqual(e){return e instanceof pl}}class hk extends zn{constructor(e,t){super(e),this.ma=t}_toFieldTransform(e){const t=ry(this,e,!0),r=this.ma.map(s=>Qn(s,t)),i=new Fn(r);return new is(e.path,i)}isEqual(e){return this===e}}class dk extends zn{constructor(e,t){super(e),this.ma=t}_toFieldTransform(e){const t=ry(this,e,!0),r=this.ma.map(s=>Qn(s,t)),i=new Un(r);return new is(e.path,i)}isEqual(e){return this===e}}class fk extends zn{constructor(e,t){super(e),this.ga=t}_toFieldTransform(e){const t=new wr(e.Tt,Rm(e.Tt,this.ga));return new is(e.path,t)}isEqual(e){return this===e}}function ml(n,e,t,r){const i=n.wa(1,e,t);yl("Data must be an object, but it was:",i,r);const s=[],o=_e.empty();Wn(r,(c,u)=>{const l=wl(e,c,t);u=A(u);const h=i.ha(l);if(u instanceof ls)s.push(l);else{const d=Qn(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new je(s);return new ty(o,a,i.fieldTransforms)}function gl(n,e,t,r,i,s){const o=n.wa(1,e,t),a=[xc(e,r,t)],c=[i];if(s.length%2!=0)throw new g(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(xc(e,s[d])),c.push(s[d+1]);const u=[],l=_e.empty();for(let d=a.length-1;d>=0;--d)if(!ay(u,a[d])){const p=a[d];let w=c[d];w=A(w);const I=o.ha(p);if(w instanceof ls)u.push(p);else{const E=Qn(w,I);E!=null&&(u.push(p),l.set(p,E))}}const h=new je(u);return new ty(l,h,o.fieldTransforms)}function iy(n,e,t,r=!1){return Qn(t,n.wa(r?4:3,e))}function Qn(n,e){if(oy(n=A(n)))return yl("Unsupported field value:",e,n),sy(n,e);if(n instanceof zn)return function(t,r){if(!ny(r.ra))throw r.fa(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.fa(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=Qn(o,r.la(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=A(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Rm(r.Tt,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=Q.fromDate(t);return{timestampValue:vr(r.Tt,i)}}if(t instanceof Q){const i=new Q(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:vr(r.Tt,i)}}if(t instanceof Yo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof mt)return{bytesValue:Km(r.Tt,t._byteString)};if(t instanceof W){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mu(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.fa(`Unsupported field value: ${Xo(t)}`)}(n,e)}function sy(n,e){const t={};return dm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wn(n,(r,i)=>{const s=Qn(i,e.ua(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function oy(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Q||n instanceof Yo||n instanceof mt||n instanceof W||n instanceof zn)}function yl(n,e,t){if(!oy(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Xo(t);throw r==="an object"?e.fa(n+" a custom object"):e.fa(n+" "+r)}}function xc(n,e,t){if((e=A(e))instanceof Yt)return e._internalPath;if(typeof e=="string")return wl(n,e);throw lo("Field path arguments must be of type string or ",n,!1,void 0,t)}const pk=new RegExp("[~\\*/\\[\\]]");function wl(n,e,t){if(e.search(pk)>=0)throw lo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Yt(...e.split("."))._internalPath}catch{throw lo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function lo(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new g(m.INVALID_ARGUMENT,a+n+c)}function ay(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Mi{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new W(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ea("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mk extends Mi{data(){return super.data()}}function ea(n,e){return typeof e=="string"?wl(n,e):e instanceof Yt?e._internalPath:e._delegate._internalPath}/**
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
 */function cy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new g(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vl{}class hs extends vl{}function Lt(n,e,...t){let r=[];e instanceof vl&&r.push(e),r=r.concat(t),function(i){const s=i.filter(a=>a instanceof Il).length,o=i.filter(a=>a instanceof ta).length;if(s>1||s>0&&o>0)throw new g(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ta extends hs{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ta(e,t,r)}_apply(e){const t=this._parse(e);return ly(e._query,t),new ke(e.firestore,e.converter,Ic(e._query,t))}_parse(e){const t=Hn(e.firestore);return function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new g(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Cd(l,u);const d=[];for(const p of l)d.push(Ad(a,i,p));h={arrayValue:{values:d}}}else h=Ad(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Cd(l,u),h=iy(o,s,l,u==="in"||u==="not-in");return O.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function gk(n,e,t){const r=e,i=ea("where",n);return ta._create(i,r,t)}class Il extends vl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Il(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:q.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)ly(s,a),s=Ic(s,a)}(e._query,t),new ke(e.firestore,e.converter,Ic(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _l extends hs{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _l(e,t)}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new g(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new g(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new or(i,s);return function(a,c){if(Ou(a)===null){const u=Bo(a);u!==null&&hy(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new ke(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Ct(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function yk(n,e="asc"){const t=e,r=ea("orderBy",n);return _l._create(r,t)}class na extends hs{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new na(e,t,r)}_apply(e){return new ke(e.firestore,e.converter,to(e._query,this._limit,this._limitType))}}function wk(n){return Hg("limit",n),na._create("limit",n,"F")}function vk(n){return Hg("limitToLast",n),na._create("limitToLast",n,"L")}class ra extends hs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ra(e,t,r)}_apply(e){const t=uy(e,this.type,this._docOrFields,this._inclusive);return new ke(e.firestore,e.converter,function(r,i){return new Ct(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function Ik(...n){return ra._create("startAt",n,!0)}function _k(...n){return ra._create("startAfter",n,!1)}class ia extends hs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ia(e,t,r)}_apply(e){const t=uy(e,this.type,this._docOrFields,this._inclusive);return new ke(e.firestore,e.converter,function(r,i){return new Ct(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function bk(...n){return ia._create("endBefore",n,!1)}function Tk(...n){return ia._create("endAt",n,!0)}function uy(n,e,t,r){if(t[0]=A(t[0]),t[0]instanceof Mi)return function(i,s,o,a,c){if(!a)throw new g(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of En(i))if(l.field.isKeyField())u.push(Ln(s,a.key));else{const h=a.data.field(l.field);if(Du(h))throw new g(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new g(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Qt(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Hn(n.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new g(m.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const w=u[p];if(h[p].field.isKeyField()){if(typeof w!="string")throw new g(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof w}`);if(!Pu(s)&&w.indexOf("/")!==-1)throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${w}' contains a slash.`);const I=s.path.child(M.fromString(w));if(!_.isDocumentKey(I))throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${I}' is not because it contains an odd number of segments.`);const E=new _(I);d.push(Ln(o,E))}else{const I=iy(a,c,w);d.push(I)}}return new Qt(d,l)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Ad(n,e,t){if(typeof(t=A(t))=="string"){if(t==="")throw new g(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pu(e)&&t.indexOf("/")!==-1)throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(M.fromString(t));if(!_.isDocumentKey(r))throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ln(n,new _(r))}if(t instanceof W)return Ln(n,t._key);throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xo(t)}.`)}function Cd(n,e){if(!Array.isArray(n)||n.length===0)throw new g(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ly(n,e){if(e.isInequality()){const r=Bo(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new g(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Ou(n);s!==null&&hy(n,i,s)}const t=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new g(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new g(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function hy(n,e,t){if(!t.isEqual(e))throw new g(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class bl{convertValue(e,t="none"){switch(Pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Y(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(On(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw T()}}convertObject(e,t){const r={};return Wn(e.fields,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Yo(Y(e.latitude),Y(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=pm(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ni(e));default:return null}}convertTimestamp(e){const t=zt(e);return new Q(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=M.fromString(e);k(eg(r));const i=new Wt(r.get(1),r.get(3)),s=new _(r.popFirst(5));return i.isEqual(t)||re(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function sa(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Ek extends bl{constructor(e){super(),this.firestore=e}convertBytes(e){return new mt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new W(this.firestore,null,t)}}/**
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
 */class vn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class St extends Mi{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ea("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class mi extends St{data(e={}){return super.data(e)}}class Jt{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new vn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new mi(this._firestore,this._userDataWriter,r.key,r,new vn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new g(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new mi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new vn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new mi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new vn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:Sk(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Sk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}function dy(n,e){return n instanceof St&&e instanceof St?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Jt&&e instanceof Jt&&n._firestore===e._firestore&&Yg(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function kk(n){n=V(n,W);const e=V(n.firestore,te);return Gg(ye(e),n._key).then(t=>Tl(e,n,t))}class Xn extends bl{constructor(e){super(),this.firestore=e}convertBytes(e){return new mt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new W(this.firestore,null,t)}}function Ak(n){n=V(n,W);const e=V(n.firestore,te),t=ye(e),r=new Xn(e);return KS(t,n._key).then(i=>new St(e,r,n._key,i,new vn(i!==null&&i.hasLocalMutations,!0),n.converter))}function Ck(n){n=V(n,W);const e=V(n.firestore,te);return Gg(ye(e),n._key,{source:"server"}).then(t=>Tl(e,n,t))}function Nk(n){n=V(n,ke);const e=V(n.firestore,te),t=ye(e),r=new Xn(e);return cy(n._query),Wg(t,n._query).then(i=>new Jt(e,r,n,i))}function Rk(n){n=V(n,ke);const e=V(n.firestore,te),t=ye(e),r=new Xn(e);return GS(t,n._query).then(i=>new Jt(e,r,n,i))}function Dk(n){n=V(n,ke);const e=V(n.firestore,te),t=ye(e),r=new Xn(e);return Wg(t,n._query,{source:"server"}).then(i=>new Jt(e,r,n,i))}function Nd(n,e,t){n=V(n,W);const r=V(n.firestore,te),i=sa(n.converter,e,t);return ds(r,[Zo(Hn(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,H.none())])}function Rd(n,e,t,...r){n=V(n,W);const i=V(n.firestore,te),s=Hn(i);let o;return o=typeof(e=A(e))=="string"||e instanceof Yt?gl(s,"updateDoc",n._key,e,t,r):ml(s,"updateDoc",n._key,e),ds(i,[o.toMutation(n._key,H.exists(!0))])}function xk(n){return ds(V(n.firestore,te),[new Lr(n._key,H.none())])}function Ok(n,e){const t=V(n.firestore,te),r=uo(n),i=sa(n.converter,e);return ds(t,[Zo(Hn(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,H.exists(!1))]).then(()=>r)}function fy(n,...e){var t,r,i;n=A(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Dc(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Dc(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof W)u=V(n.firestore,te),l=Or(n._key.path),c={next:h=>{e[o]&&e[o](Tl(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=V(n,ke);u=V(h.firestore,te),l=h._query;const d=new Xn(u);c={next:p=>{e[o]&&e[o](new Jt(u,d,h,p))},error:e[o+1],complete:e[o+2]},cy(n._query)}return function(h,d,p,w){const I=new Ho(w),E=new nl(d,I,p);return h.asyncQueue.enqueueAndForget(async()=>Zu(await Er(h),E)),()=>{I.bc(),h.asyncQueue.enqueueAndForget(async()=>el(await Er(h),E))}}(ye(u),l,a,c)}function Pk(n,e){return WS(ye(n=V(n,te)),Dc(e)?e:{next:e})}function ds(n,e){return function(t,r){const i=new fe;return t.asyncQueue.enqueueAndForget(async()=>IS(await dl(t),r,i)),i.promise}(ye(n),e)}function Tl(n,e,t){const r=t.docs.get(e._key),i=new Xn(n);return new St(n,i,e._key,r,new vn(t.hasPendingWrites,t.fromCache),e.converter)}const Lk={maxAttempts:5};/**
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
 */class Mk{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Hn(e)}set(e,t,r){this._verifyNotCommitted();const i=Vt(e,this._firestore),s=sa(i.converter,t,r),o=Zo(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,H.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Vt(e,this._firestore);let o;return o=typeof(t=A(t))=="string"||t instanceof Yt?gl(this._dataReader,"WriteBatch.update",s._key,t,r,i):ml(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,H.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Vt(e,this._firestore);return this._mutations=this._mutations.concat(new Lr(t._key,H.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new g(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Vt(n,e){if((n=A(n)).firestore!==e)throw new g(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class Fk extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Hn(e)}get(e){const t=Vt(e,this._firestore),r=new Ek(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return T();const s=i[0];if(s.isFoundDocument())return new Mi(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new Mi(this._firestore,r,t._key,null,t.converter);throw T()})}set(e,t,r){const i=Vt(e,this._firestore),s=sa(i.converter,t,r),o=Zo(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=Vt(e,this._firestore);let o;return o=typeof(t=A(t))=="string"||t instanceof Yt?gl(this._dataReader,"Transaction.update",s._key,t,r,i):ml(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=Vt(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Vt(e,this._firestore),r=new Xn(this._firestore);return super.get(e).then(i=>new St(this._firestore,r,t._key,i._document,new vn(!1,!1),t.converter))}}function Uk(n,e,t){n=V(n,te);const r=Object.assign(Object.assign({},Lk),t);return function(i){if(i.maxAttempts<1)throw new g(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new fe;return i.asyncQueue.enqueueAndForget(async()=>{const c=await $S(i);new VS(i.asyncQueue,c,o,s,a).run()}),a.promise}(ye(n),i=>e(new Fk(n,i)),r)}/**
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
 */function Vk(){return new ls("deleteField")}function Bk(){return new pl("serverTimestamp")}function $k(...n){return new hk("arrayUnion",n)}function qk(...n){return new dk("arrayRemove",n)}function jk(n){return new fk("increment",n)}(function(n,e=!0){(function(t){xr=t})(Zt),Qe(new Ue("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new te(new YT(t.getProvider("auth-internal")),new tE(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new g(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wt(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Te(Ah,"3.9.0",n),Te(Ah,"3.9.0","esm2017")})();const Kk="@firebase/firestore-compat",Gk="0.3.5";/**
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
 */function El(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new g("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Dd(){if(typeof Uint8Array>"u")throw new g("unimplemented","Uint8Arrays are not available in this environment.")}function xd(){if(!hE())throw new g("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Fi{constructor(e){this._delegate=e}static fromBase64String(e){return xd(),new Fi(mt.fromBase64String(e))}static fromUint8Array(e){return Dd(),new Fi(mt.fromUint8Array(e))}toBase64(){return xd(),this._delegate.toBase64()}toUint8Array(){return Dd(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Oc(n){return Wk(n,["next","error","complete"])}function Wk(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class zk{enableIndexedDbPersistence(e,t){return ek(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return tk(e._delegate)}clearIndexedDbPersistence(e){return nk(e._delegate)}}class py{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Wt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&fr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){QS(this._delegate,e,t,r)}enableNetwork(){return ik(this._delegate)}disableNetwork(){return sk(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,zg("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return rk(this._delegate)}onSnapshotsInSync(e){return Pk(this._delegate,e)}get app(){if(!this._appCompat)throw new g("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Sr(this,Qg(this._delegate,e))}catch(t){throw Pe(t,"collection()","Firestore.collection()")}}doc(e){try{return new Je(this,uo(this._delegate,e))}catch(t){throw Pe(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Oe(this,XS(this._delegate,e))}catch(t){throw Pe(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Uk(this._delegate,t=>e(new my(this,t)))}batch(){return ye(this._delegate),new gy(new Mk(this._delegate,e=>ds(this._delegate,e)))}loadBundle(e){return ok(this._delegate,e)}namedQuery(e){return ak(this._delegate,e).then(t=>t?new Oe(this,t):null)}}class oa extends bl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fi(new mt(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Je.forKey(t,this.firestore,null)}}function Hk(n){zT(n)}class my{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new oa(e)}get(e){const t=In(e);return this._delegate.get(t).then(r=>new Ui(this._firestore,new St(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=In(e);return r?(El("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=In(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=In(e);return this._delegate.delete(t),this}}class gy{constructor(e){this._delegate=e}set(e,t,r){const i=In(e);return r?(El("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=In(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=In(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class qn{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new mi(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Vi(this._firestore,r),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=qn.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new qn(e,new oa(e),t),i.set(t,s)),s}}qn.INSTANCES=new WeakMap;class Je{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new oa(e)}static forPath(e,t,r){if(e.length%2!==0)throw new g("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Je(t,new W(t._delegate,r,new _(e)))}static forKey(e,t,r){return new Je(t,new W(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Sr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Sr(this.firestore,Qg(this._delegate,e))}catch(t){throw Pe(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=A(e),e instanceof W?Xg(this._delegate,e):!1}set(e,t){t=El("DocumentReference.set",t);try{return t?Nd(this._delegate,e,t):Nd(this._delegate,e)}catch(r){throw Pe(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Rd(this._delegate,e):Rd(this._delegate,e,t,...r)}catch(i){throw Pe(i,"updateDoc()","DocumentReference.update()")}}delete(){return xk(this._delegate)}onSnapshot(...e){const t=yy(e),r=wy(e,i=>new Ui(this.firestore,new St(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return fy(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Ak(this._delegate):(e==null?void 0:e.source)==="server"?t=Ck(this._delegate):t=kk(this._delegate),t.then(r=>new Ui(this.firestore,new St(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Je(this.firestore,e?this._delegate.withConverter(qn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Pe(n,e,t){return n.message=n.message.replace(e,t),n}function yy(n){for(const e of n)if(typeof e=="object"&&!Oc(e))return e;return{}}function wy(n,e){var t,r;let i;return Oc(n[0])?i=n[0]:Oc(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Ui{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Je(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return dy(this._delegate,e._delegate)}}class Vi extends Ui{data(e){const t=this._delegate.data(e);return HT(t!==void 0),t}}class Oe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new oa(e)}where(e,t,r){try{return new Oe(this.firestore,Lt(this._delegate,gk(e,t,r)))}catch(i){throw Pe(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Oe(this.firestore,Lt(this._delegate,yk(e,t)))}catch(r){throw Pe(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Oe(this.firestore,Lt(this._delegate,wk(e)))}catch(t){throw Pe(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Oe(this.firestore,Lt(this._delegate,vk(e)))}catch(t){throw Pe(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Oe(this.firestore,Lt(this._delegate,Ik(...e)))}catch(t){throw Pe(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Oe(this.firestore,Lt(this._delegate,_k(...e)))}catch(t){throw Pe(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Oe(this.firestore,Lt(this._delegate,bk(...e)))}catch(t){throw Pe(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Oe(this.firestore,Lt(this._delegate,Tk(...e)))}catch(t){throw Pe(t,"endAt()","Query.endAt()")}}isEqual(e){return Yg(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Rk(this._delegate):(e==null?void 0:e.source)==="server"?t=Dk(this._delegate):t=Nk(this._delegate),t.then(r=>new Pc(this.firestore,new Jt(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=yy(e),r=wy(e,i=>new Pc(this.firestore,new Jt(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return fy(this._delegate,t,r)}withConverter(e){return new Oe(this.firestore,e?this._delegate.withConverter(qn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Qk{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Vi(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Pc{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Oe(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Vi(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new Qk(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Vi(this._firestore,r))})}isEqual(e){return dy(this._delegate,e._delegate)}}class Sr extends Oe{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Je(this.firestore,e):null}doc(e){try{return e===void 0?new Je(this.firestore,uo(this._delegate)):new Je(this.firestore,uo(this._delegate,e))}catch(t){throw Pe(t,"doc()","CollectionReference.doc()")}}add(e){return Ok(this._delegate,e).then(t=>new Je(this.firestore,t))}isEqual(e){return Xg(this._delegate,e._delegate)}withConverter(e){return new Sr(this.firestore,e?this._delegate.withConverter(qn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function In(n){return V(n,W)}/**
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
 */class Sl{constructor(...e){this._delegate=new Yt(...e)}static documentId(){return new Sl(ie.keyField().canonicalString())}isEqual(e){return e=A(e),e instanceof Yt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class mn{constructor(e){this._delegate=e}static serverTimestamp(){const e=Bk();return e._methodName="FieldValue.serverTimestamp",new mn(e)}static delete(){const e=Vk();return e._methodName="FieldValue.delete",new mn(e)}static arrayUnion(...e){const t=$k(...e);return t._methodName="FieldValue.arrayUnion",new mn(t)}static arrayRemove(...e){const t=qk(...e);return t._methodName="FieldValue.arrayRemove",new mn(t)}static increment(e){const t=jk(e);return t._methodName="FieldValue.increment",new mn(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const Xk={Firestore:py,GeoPoint:Yo,Timestamp:Q,Blob:Fi,Transaction:my,WriteBatch:gy,DocumentReference:Je,DocumentSnapshot:Ui,Query:Oe,QueryDocumentSnapshot:Vi,QuerySnapshot:Pc,CollectionReference:Sr,FieldPath:Sl,FieldValue:mn,setLogLevel:Hk,CACHE_SIZE_UNLIMITED:ZS};function Yk(n,e){n.INTERNAL.registerComponent(new Ue("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},Xk)))}/**
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
 */function Jk(n){Yk(n,(e,t)=>new py(e,t,new zk)),n.registerVersion(Kk,Gk)}Jk(To);const Jr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},er={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function Zk(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function vy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eA=Zk,tA=vy,Iy=new At("auth","Firebase",vy());/**
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
 */const Od=new wo("@firebase/auth");function Fs(n,...e){Od.logLevel<=U.ERROR&&Od.error(`Auth (${Zt}): ${n}`,...e)}/**
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
 */function Ae(n,...e){throw kl(n,...e)}function Se(n,...e){return kl(n,...e)}function _y(n,e,t){const r=Object.assign(Object.assign({},tA()),{[e]:t});return new At("auth","Firebase",r).create(e,{appName:n.name})}function Br(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ae(n,"argument-error"),_y(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Iy.create(n,...e)}function v(n,e,...t){if(!n)throw kl(e,...t)}function ht(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fs(e),new Error(e)}function nt(n,e){n||ht(e)}/**
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
 */const Pd=new Map;function He(n){nt(n instanceof Function,"Expected a class definition");let e=Pd.get(n);return e?(nt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Pd.set(n,e),e)}function nA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(He);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Bi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Al(){return Ld()==="http:"||Ld()==="https:"}function Ld(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function rA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Al()||ef()||"connection"in navigator)?navigator.onLine:!0}function iA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class fs{constructor(e,t){this.shortDelay=e,this.longDelay=t,nt(t>e,"Short delay should be less than long delay!"),this.isMobile=xw()||jc()}get(){return rA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cl(n,e){nt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class by{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const oA=new fs(3e4,6e4);function ue(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function we(n,e,t,r,i={}){return Ty(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Cr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),by.fetch()(Ey(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ty(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},sA),e);try{const i=new aA(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw oi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw oi(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw oi(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw oi(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _y(n,l,u);Ae(n,l)}}catch(i){if(i instanceof be)throw i;Ae(n,"internal-error",{message:String(i)})}}async function Dt(n,e,t,r,i={}){const s=await we(n,e,t,r,i);return"mfaPendingCredential"in s&&Ae(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Ey(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Cl(n.config,i):`${n.config.apiScheme}://${i}`}class aA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Se(this.auth,"network-request-failed")),oA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Se(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function cA(n,e){return we(n,"POST","/v1/accounts:delete",e)}async function uA(n,e){return we(n,"POST","/v1/accounts:update",e)}async function lA(n,e){return we(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function gi(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hA(n,e=!1){const t=A(n),r=await t.getIdToken(e),i=aa(r);v(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:gi(Ga(i.auth_time)),issuedAtTime:gi(Ga(i.iat)),expirationTime:gi(Ga(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ga(n){return Number(n)*1e3}function aa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jd(t);return i?JSON.parse(i):(Fs("Failed to decode base64 JWT payload"),null)}catch(i){return Fs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dA(n){const e=aa(n);return v(e,"internal-error"),v(typeof e.exp<"u","internal-error"),v(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function kt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof be&&fA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function fA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class pA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sy{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $i(n){var e;const t=n.auth,r=await n.getIdToken(),i=await kt(n,lA(t,{idToken:r}));v(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?yA(s.providerUserInfo):[],a=gA(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Sy(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function mA(n){const e=A(n);await $i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gA(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function yA(n){return n.map(e=>{var{providerId:t}=e,r=qc.exports.__rest(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function wA(n,e){const t=await Ty(n,{},async()=>{const r=Cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Ey(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",by.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(typeof e.idToken<"u","internal-error"),v(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await wA(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new qi;return r&&(v(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(v(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(v(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qi,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
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
 */function Mt(n,e){v(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Sn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=qc.exports.__rest(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await kt(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return hA(this,e)}reload(){return mA(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await $i(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await kt(this,cA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,p=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,I=(a=t.tenantId)!==null&&a!==void 0?a:void 0,E=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,P=(u=t.createdAt)!==null&&u!==void 0?u:void 0,$=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:R,emailVerified:F,isAnonymous:j,providerData:B,stsTokenManager:le}=t;v(R&&le,e,"internal-error");const Ve=qi.fromJSON(this.name,le);v(typeof R=="string",e,"internal-error"),Mt(h,e.name),Mt(d,e.name),v(typeof F=="boolean",e,"internal-error"),v(typeof j=="boolean",e,"internal-error"),Mt(p,e.name),Mt(w,e.name),Mt(I,e.name),Mt(E,e.name),Mt(P,e.name),Mt($,e.name);const wa=new Sn({uid:R,auth:e,email:d,emailVerified:F,displayName:h,isAnonymous:j,photoURL:w,phoneNumber:p,tenantId:I,stsTokenManager:Ve,createdAt:P,lastLoginAt:$});return B&&Array.isArray(B)&&(wa.providerData=B.map(ww=>Object.assign({},ww))),E&&(wa._redirectEventId=E),wa}static async _fromIdTokenResponse(e,t,r=!1){const i=new qi;i.updateFromServerResponse(t);const s=new Sn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $i(s),s}}/**
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
 */class ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ky.type="NONE";const kr=ky;/**
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
 */function kn(n,e,t){return`firebase:${n}:${e}:${t}`}class cr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=kn(this.userKey,i.apiKey,s),this.fullPersistenceKey=kn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new cr(He(kr),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||He(kr);const o=kn(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=Sn._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new cr(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new cr(s,e,r))}}/**
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
 */function Md(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ny(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ay(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ry(e))return"Blackberry";if(Dy(e))return"Webos";if(Nl(e))return"Safari";if((e.includes("chrome/")||Cy(e))&&!e.includes("edge/"))return"Chrome";if(ps(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ay(n=X()){return/firefox\//i.test(n)}function Nl(n=X()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cy(n=X()){return/crios\//i.test(n)}function Ny(n=X()){return/iemobile/i.test(n)}function ps(n=X()){return/android/i.test(n)}function Ry(n=X()){return/blackberry/i.test(n)}function Dy(n=X()){return/webos/i.test(n)}function $r(n=X()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vA(n=X()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function IA(n=X()){var e;return $r(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _A(){return tf()&&document.documentMode===10}function xy(n=X()){return $r(n)||ps(n)||Dy(n)||Ry(n)||/windows phone/i.test(n)||Ny(n)}function bA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Oy(n,e=[]){let t;switch(n){case"Browser":t=Md(X());break;case"Worker":t=`${Md(X())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zt}/${r}`}/**
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
 */class TA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class EA{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fd(this),this.idTokenSubscription=new Fd(this),this.beforeStateQueue=new TA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Iy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=He(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await cr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $i(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?A(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(He(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new At("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&He(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await cr.create(this,[He(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function me(n){return A(n)}class Fd{constructor(e){this.auth=e,this.observer=null,this.addObserver=rf(t=>this.observer=t)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function SA(n,e,t){const r=me(n);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Py(e),{host:o,port:a}=kA(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||AA()}function Py(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function kA(n){const e=Py(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ud(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ud(o)}}}function Ud(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function AA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class qr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,t){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}/**
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
 */async function Ly(n,e){return we(n,"POST","/v1/accounts:resetPassword",ue(n,e))}async function My(n,e){return we(n,"POST","/v1/accounts:update",e)}async function CA(n,e){return we(n,"POST","/v1/accounts:update",ue(n,e))}/**
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
 */async function NA(n,e){return Dt(n,"POST","/v1/accounts:signInWithPassword",ue(n,e))}async function ca(n,e){return we(n,"POST","/v1/accounts:sendOobCode",ue(n,e))}async function RA(n,e){return ca(n,e)}async function DA(n,e){return ca(n,e)}async function xA(n,e){return ca(n,e)}async function OA(n,e){return ca(n,e)}/**
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
 */async function PA(n,e){return Dt(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}async function LA(n,e){return Dt(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}/**
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
 */class ji extends qr{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ji(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ji(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return NA(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return PA(e,{email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return My(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return LA(e,{idToken:t,email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Tt(n,e){return Dt(n,"POST","/v1/accounts:signInWithIdp",ue(n,e))}/**
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
 */const MA="http://localhost";class gt extends qr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ae("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=qc.exports.__rest(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Tt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Tt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tt(e,t)}buildRequest(){const e={requestUri:MA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Cr(t)}return e}}/**
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
 */async function FA(n,e){return we(n,"POST","/v1/accounts:sendVerificationCode",ue(n,e))}async function UA(n,e){return Dt(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,e))}async function VA(n,e){const t=await Dt(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,e));if(t.temporaryProof)throw oi(n,"account-exists-with-different-credential",t);return t}const BA={USER_NOT_FOUND:"user-not-found"};async function $A(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Dt(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,t),BA)}/**
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
 */class An extends qr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new An({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new An({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return UA(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return VA(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return $A(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new An({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function qA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jA(n){const e=ir(ti(n)).link,t=e?ir(ti(e)).deep_link_id:null,r=ir(ti(n)).deep_link_id;return(r?ir(ti(r)).link:null)||r||t||e||n}class ua{constructor(e){var t,r,i,s,o,a;const c=ir(ti(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=qA((i=c.mode)!==null&&i!==void 0?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=jA(e);try{return new ua(t)}catch{return null}}}/**
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
 */class an{constructor(){this.providerId=an.PROVIDER_ID}static credential(e,t){return ji._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ua.parseLink(t);return v(r,"argument-error"),ji._fromEmailAndCode(e,r.code,r.tenantId)}}an.PROVIDER_ID="password";an.EMAIL_PASSWORD_SIGN_IN_METHOD="password";an.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jr extends xt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ur extends jr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return v("providerId"in t&&"signInMethod"in t,"argument-error"),gt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return v(e.idToken||e.accessToken,"argument-error"),gt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ur.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ur.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new ur(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class it extends jr{constructor(){super("facebook.com")}static credential(e){return gt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.FACEBOOK_SIGN_IN_METHOD="facebook.com";it.PROVIDER_ID="facebook.com";/**
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
 */class st extends jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return st.credential(t,r)}catch{return null}}}st.GOOGLE_SIGN_IN_METHOD="google.com";st.PROVIDER_ID="google.com";/**
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
 */class ot extends jr{constructor(){super("github.com")}static credential(e){return gt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.GITHUB_SIGN_IN_METHOD="github.com";ot.PROVIDER_ID="github.com";/**
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
 */const KA="http://localhost";class Ar extends qr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Tt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Tt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Ar(r,s)}static _create(e,t){return new Ar(e,t)}buildRequest(){return{requestUri:KA,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const GA="saml.";class ho extends xt{constructor(e){v(e.startsWith(GA),"argument-error"),super(e)}static credentialFromResult(e){return ho.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return ho.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ar.fromJSON(e);return v(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Ar._create(r,t)}catch{return null}}}/**
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
 */class at extends jr{constructor(){super("twitter.com")}static credential(e,t){return gt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return at.credential(t,r)}catch{return null}}}at.TWITTER_SIGN_IN_METHOD="twitter.com";at.PROVIDER_ID="twitter.com";/**
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
 */async function Fy(n,e){return Dt(n,"POST","/v1/accounts:signUp",ue(n,e))}/**
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
 */class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Sn._fromIdTokenResponse(e,r,i),o=Vd(r);return new Ze({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Vd(r);return new Ze({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Vd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function WA(n){var e;const t=me(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ze({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await Fy(t,{returnSecureToken:!0}),i=await Ze._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class fo extends be{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new fo(e,t,r,i)}}function Uy(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fo._fromErrorAndOperation(n,s,e,r):s})}/**
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
 */function Vy(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function zA(n,e){const t=A(n);await la(!0,t,e);const{providerUserInfo:r}=await uA(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=Vy(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Rl(n,e,t=!1){const r=await kt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ze._forOperation(n,"link",r)}async function la(n,e,t){await $i(e);const r=Vy(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";v(r.has(t)===n,e.auth,i)}/**
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
 */async function By(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await kt(n,Uy(r,i,e,n),t);v(s.idToken,r,"internal-error");const o=aa(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(n.uid===a,r,"user-mismatch"),Ze._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ae(r,"user-mismatch"),s}}/**
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
 */async function $y(n,e,t=!1){const r="signIn",i=await Uy(n,r,e),s=await Ze._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function ha(n,e){return $y(me(n),e)}async function qy(n,e){const t=A(n);return await la(!1,t,e.providerId),Rl(t,e)}async function jy(n,e){return By(A(n),e)}/**
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
 */async function HA(n,e){return Dt(n,"POST","/v1/accounts:signInWithCustomToken",ue(n,e))}/**
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
 */async function QA(n,e){const t=me(n),r=await HA(t,{token:e,returnSecureToken:!0}),i=await Ze._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
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
 */class da{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Dl._fromServerResponse(e,t):Ae(e,"internal-error")}}class Dl extends da{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Dl(t)}}/**
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
 */function fa(n,e,t){var r;v(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),v(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(v(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(v(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function XA(n,e,t){const r=A(n),i={requestType:"PASSWORD_RESET",email:e};t&&fa(r,i,t),await DA(r,i)}async function YA(n,e,t){await Ly(A(n),{oobCode:e,newPassword:t})}async function JA(n,e){await CA(A(n),{oobCode:e})}async function Ky(n,e){const t=A(n),r=await Ly(t,{oobCode:e}),i=r.requestType;switch(v(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":v(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":v(r.mfaInfo,t,"internal-error");default:v(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=da._fromServerResponse(me(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function ZA(n,e){const{data:t}=await Ky(A(n),e);return t.email}async function eC(n,e,t){const r=me(n),i=await Fy(r,{returnSecureToken:!0,email:e,password:t}),s=await Ze._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function tC(n,e,t){return ha(A(n),an.credential(e,t))}/**
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
 */async function nC(n,e,t){const r=A(n),i={requestType:"EMAIL_SIGNIN",email:e};v(t.handleCodeInApp,r,"argument-error"),t&&fa(r,i,t),await xA(r,i)}function rC(n,e){const t=ua.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function iC(n,e,t){const r=A(n),i=an.credentialWithLink(e,t||Bi());return v(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),ha(r,i)}/**
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
 */async function sC(n,e){return we(n,"POST","/v1/accounts:createAuthUri",ue(n,e))}/**
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
 */async function oC(n,e){const t=Al()?Bi():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await sC(A(n),r);return i||[]}async function aC(n,e){const t=A(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&fa(t.auth,i,e);const{email:s}=await RA(t.auth,i);s!==n.email&&await n.reload()}async function cC(n,e,t){const r=A(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&fa(r.auth,s,t);const{email:o}=await OA(r.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function uC(n,e){return we(n,"POST","/v1/accounts:update",e)}/**
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
 */async function lC(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=A(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await kt(r,uC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function hC(n,e){return Gy(A(n),e,null)}function dC(n,e){return Gy(A(n),null,e)}async function Gy(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await kt(n,My(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function fC(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n==null?void 0:n.idToken)){const o=(t=(e=aa(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new lr(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new pC(s,i);case"github.com":return new mC(s,i);case"google.com":return new gC(s,i);case"twitter.com":return new yC(s,i,n.screenName||null);case"custom":case"anonymous":return new lr(s,null);default:return new lr(s,r,i)}}class lr{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class Wy extends lr{constructor(e,t,r,i){super(e,t,r),this.username=i}}class pC extends lr{constructor(e,t){super(e,"facebook.com",t)}}class mC extends Wy{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class gC extends lr{constructor(e,t){super(e,"google.com",t)}}class yC extends Wy{constructor(e,t,r){super(e,"twitter.com",t,r)}}function wC(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:fC(t)}class _n{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new _n("enroll",e,t)}static _fromMfaPendingCredential(e){return new _n("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return _n._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return _n._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class xl{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=me(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>da._fromServerResponse(r,a));v(i.mfaPendingCredential,r,"internal-error");const o=_n._fromMfaPendingCredential(i.mfaPendingCredential);return new xl(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await Ze._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return v(t.user,r,"internal-error"),Ze._forOperation(t.user,t.operationType,u);default:Ae(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function vC(n,e){var t;const r=A(n),i=e;return v(e.customData.operationType,r,"argument-error"),v((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),xl._fromError(r,i)}/**
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
 */function IC(n,e){return we(n,"POST","/v2/accounts/mfaEnrollment:start",ue(n,e))}function _C(n,e){return we(n,"POST","/v2/accounts/mfaEnrollment:finalize",ue(n,e))}function bC(n,e){return we(n,"POST","/v2/accounts/mfaEnrollment:withdraw",ue(n,e))}class Ol{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>da._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Ol(e)}async getSession(){return _n._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,i=await this.getSession(),s=await kt(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await kt(this.user,bC(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Wa=new WeakMap;function TC(n){const e=A(n);return Wa.has(e)||Wa.set(e,Ol._fromUser(e)),Wa.get(e)}const po="__sak";/**
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
 */class zy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(po,"1"),this.storage.removeItem(po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function EC(){const n=X();return Nl(n)||$r(n)}const SC=1e3,kC=10;class Hy extends zy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=EC()&&bA(),this.fallbackToPolling=xy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_A()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kC):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},SC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hy.type="LOCAL";const Pl=Hy;/**
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
 */class Qy extends zy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qy.type="SESSION";const jn=Qy;/**
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
 */function AC(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await AC(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pa.receivers=[];/**
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
 */function ms(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class CC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=ms("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ae(){return window}function NC(n){ae().location.href=n}/**
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
 */function Ll(){return typeof ae().WorkerGlobalScope<"u"&&typeof ae().importScripts=="function"}async function RC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DC(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function xC(){return Ll()?self:null}/**
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
 */const Xy="firebaseLocalStorageDb",OC=1,mo="firebaseLocalStorage",Yy="fbase_key";class gs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ma(n,e){return n.transaction([mo],e?"readwrite":"readonly").objectStore(mo)}function PC(){const n=indexedDB.deleteDatabase(Xy);return new gs(n).toPromise()}function Lc(){const n=indexedDB.open(Xy,OC);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(mo,{keyPath:Yy})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(mo)?e(r):(r.close(),await PC(),e(await Lc()))})})}async function Bd(n,e,t){const r=ma(n,!0).put({[Yy]:e,value:t});return new gs(r).toPromise()}async function LC(n,e){const t=ma(n,!1).get(e),r=await new gs(t).toPromise();return r===void 0?null:r.value}function $d(n,e){const t=ma(n,!0).delete(e);return new gs(t).toPromise()}const MC=800,FC=3;class Jy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>FC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ll()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pa._getInstance(xC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await RC(),!this.activeServiceWorker)return;this.sender=new CC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lc();return await Bd(e,po,"1"),await $d(e,po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>LC(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$d(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ma(i,!1).getAll();return new gs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jy.type="LOCAL";const Ki=Jy;/**
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
 */function UC(n,e){return we(n,"POST","/v2/accounts/mfaSignIn:start",ue(n,e))}function VC(n,e){return we(n,"POST","/v2/accounts/mfaSignIn:finalize",ue(n,e))}/**
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
 */async function BC(n){return(await we(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function $C(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Zy(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Se("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",$C().appendChild(r)})}function ew(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const qC=500,jC=6e4,Rs=1e12;class KC{constructor(e){this.auth=e,this.counter=Rs,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new GC(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Rs;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Rs;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Rs;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class GC{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;v(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=WC(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},jC)},qC))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function WC(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const za=ew("rcb"),zC=new fs(3e4,6e4),HC="https://www.google.com/recaptcha/api.js?";class QC{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ae().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return v(XC(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(ae().grecaptcha):new Promise((r,i)=>{const s=ae().setTimeout(()=>{i(Se(e,"network-request-failed"))},zC.get());ae()[za]=()=>{ae().clearTimeout(s),delete ae()[za];const a=ae().grecaptcha;if(!a){i(Se(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${HC}?${Cr({onload:za,render:"explicit",hl:t})}`;Zy(o).catch(()=>{clearTimeout(s),i(Se(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=ae().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function XC(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class YC{async load(e){return new KC(e)}clearedOneInstance(){}}/**
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
 */const tw="recaptcha",JC={theme:"light",type:"image"};class ZC{constructor(e,t=Object.assign({},JC),r){this.parameters=t,this.type=tw,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=me(r),this.isInvisible=this.parameters.size==="invisible",v(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;v(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new YC:new QC,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){v(!this.parameters.sitekey,this.auth,"argument-error"),v(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),v(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=ae()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){v(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){v(Al()&&!Ll(),this.auth,"internal-error"),await eN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await BC(this.auth);v(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return v(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function eN(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class Ml{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=An._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function tN(n,e,t){const r=me(n),i=await ga(r,e,A(t));return new Ml(i,s=>ha(r,s))}async function nN(n,e,t){const r=A(n);await la(!1,r,"phone");const i=await ga(r.auth,e,A(t));return new Ml(i,s=>qy(r,s))}async function rN(n,e,t){const r=A(n),i=await ga(r.auth,e,A(t));return new Ml(i,s=>jy(r,s))}async function ga(n,e,t){var r;const i=await t.verify();try{v(typeof i=="string",n,"argument-error"),v(t.type===tw,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return v(o.type==="enroll",n,"internal-error"),(await IC(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{v(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return v(a,n,"missing-multi-factor-info"),(await UC(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await FA(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function iN(n,e){await Rl(A(n),e)}/**
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
 */class tt{constructor(e){this.providerId=tt.PROVIDER_ID,this.auth=me(e)}verifyPhoneNumber(e,t){return ga(this.auth,e,A(t))}static credential(e,t){return An._fromVerification(e,t)}static credentialFromResult(e){const t=e;return tt.credentialFromTaggedObject(t)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?An._fromTokenResponse(t,r):null}}tt.PROVIDER_ID="phone";tt.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Yn(n,e){return e?He(e):(v(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Fl extends qr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function sN(n){return $y(n.auth,new Fl(n),n.bypassAuthState)}function oN(n){const{auth:e,user:t}=n;return v(t,e,"internal-error"),By(t,new Fl(n),n.bypassAuthState)}async function aN(n){const{auth:e,user:t}=n;return v(t,e,"internal-error"),Rl(t,new Fl(n),n.bypassAuthState)}/**
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
 */class nw{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sN;case"linkViaPopup":case"linkViaRedirect":return aN;case"reauthViaPopup":case"reauthViaRedirect":return oN;default:Ae(this.auth,"internal-error")}}resolve(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cN=new fs(2e3,1e4);async function uN(n,e,t){const r=me(n);Br(n,e,xt);const i=Yn(r,t);return new vt(r,"signInViaPopup",e,i).executeNotNull()}async function lN(n,e,t){const r=A(n);Br(r.auth,e,xt);const i=Yn(r.auth,t);return new vt(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function hN(n,e,t){const r=A(n);Br(r.auth,e,xt);const i=Yn(r.auth,t);return new vt(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class vt extends nw{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vt.currentPopupAction&&vt.currentPopupAction.cancel(),vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){nt(this.filter.length===1,"Popup operations only handle one event");const e=ms();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Se(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Se(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Se(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,cN.get())};e()}}vt.currentPopupAction=null;/**
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
 */const dN="pendingRedirect",yi=new Map;class fN extends nw{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=yi.get(this.auth._key());if(!e){try{const r=await pN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}yi.set(this.auth._key(),e)}return this.bypassAuthState||yi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pN(n,e){const t=iw(e),r=rw(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Ul(n,e){return rw(n)._set(iw(e),"true")}function mN(){yi.clear()}function Vl(n,e){yi.set(n._key(),e)}function rw(n){return He(n._redirectPersistence)}function iw(n){return kn(dN,n.config.apiKey,n.name)}/**
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
 */function gN(n,e,t){return yN(n,e,t)}async function yN(n,e,t){const r=me(n);Br(n,e,xt),await r._initializationPromise;const i=Yn(r,t);return await Ul(i,r),i._openRedirect(r,e,"signInViaRedirect")}function wN(n,e,t){return vN(n,e,t)}async function vN(n,e,t){const r=A(n);Br(r.auth,e,xt),await r.auth._initializationPromise;const i=Yn(r.auth,t);await Ul(i,r.auth);const s=await sw(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function IN(n,e,t){return _N(n,e,t)}async function _N(n,e,t){const r=A(n);Br(r.auth,e,xt),await r.auth._initializationPromise;const i=Yn(r.auth,t);await la(!1,r,e.providerId),await Ul(i,r.auth);const s=await sw(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function bN(n,e){return await me(n)._initializationPromise,ya(n,e,!1)}async function ya(n,e,t=!1){const r=me(n),i=Yn(r,e),o=await new fN(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function sw(n){const e=ms(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const TN=10*60*1e3;class ow{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!aw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Se(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TN&&this.cachedEventUids.clear(),this.cachedEventUids.has(qd(e))}saveEventToCache(e){this.cachedEventUids.add(qd(e)),this.lastProcessedEventTime=Date.now()}}function qd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function aw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EN(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aw(n);default:return!1}}/**
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
 */async function cw(n,e={}){return we(n,"GET","/v1/projects",e)}/**
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
 */const SN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kN=/^https?/;async function AN(n){if(n.config.emulator)return;const{authorizedDomains:e}=await cw(n);for(const t of e)try{if(CN(t))return}catch{}Ae(n,"unauthorized-domain")}function CN(n){const e=Bi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!kN.test(t))return!1;if(SN.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const NN=new fs(3e4,6e4);function jd(){const n=ae().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function RN(n){return new Promise((e,t)=>{var r,i,s;function o(){jd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jd(),t(Se(n,"network-request-failed"))},timeout:NN.get()})}if(!((i=(r=ae().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ae().gapi)===null||s===void 0)&&s.load)o();else{const a=ew("iframefcb");return ae()[a]=()=>{gapi.load?o():t(Se(n,"network-request-failed"))},Zy(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Us=null,e})}let Us=null;function DN(n){return Us=Us||RN(n),Us}/**
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
 */const xN=new fs(5e3,15e3),ON="__/auth/iframe",PN="emulator/auth/iframe",LN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FN(n){const e=n.config;v(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Cl(e,PN):`https://${n.config.authDomain}/${ON}`,r={apiKey:e.apiKey,appName:n.name,v:Zt},i=MN.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Cr(r).slice(1)}`}async function UN(n){const e=await DN(n),t=ae().gapi;return v(t,n,"internal-error"),e.open({where:document.body,url:FN(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Se(n,"network-request-failed"),a=ae().setTimeout(()=>{s(o)},xN.get());function c(){ae().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const VN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BN=500,$N=600,qN="_blank",jN="http://localhost";class Kd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KN(n,e,t,r=BN,i=$N){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},VN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=X().toLowerCase();t&&(a=Cy(u)?qN:t),Ay(u)&&(e=e||jN,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,w])=>`${d}${p}=${w},`,"");if(IA(u)&&a!=="_self")return GN(e||"",a),new Kd(null);const h=window.open(e||"",a,l);v(h,n,"popup-blocked");try{h.focus()}catch{}return new Kd(h)}function GN(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const WN="__/auth/handler",zN="emulator/auth/handler";function Mc(n,e,t,r,i,s){v(n.config.authDomain,n,"auth-domain-config-required"),v(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Zt,eventId:i};if(e instanceof xt){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Vw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof jr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${HN(n)}?${Cr(a).slice(1)}`}function HN({config:n}){return n.emulator?Cl(n,zN):`https://${n.authDomain}/${WN}`}/**
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
 */const Ha="webStorageSupport";class QN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jn,this._completeRedirectFn=ya,this._overrideRedirectResult=Vl}async _openPopup(e,t,r,i){var s;nt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Mc(e,t,r,Bi(),i);return KN(e,o,ms())}async _openRedirect(e,t,r,i){return await this._originValidation(e),NC(Mc(e,t,r,Bi(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(nt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await UN(e),r=new ow(e);return t.register("authEvent",i=>(v(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ha,{type:Ha},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ha];o!==void 0&&t(!!o),Ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=AN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xy()||Nl()||$r()}}const XN=QN;class YN{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ht("unexpected MultiFactorSessionType")}}}class Bl extends YN{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Bl(e)}_finalizeEnroll(e,t,r){return _C(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return VC(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class uw{constructor(){}static assertion(e){return Bl._fromCredential(e)}}uw.FACTOR_ID="phone";var Gd="@firebase/auth",Wd="0.21.5";/**
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
 */class JN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ZN(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function eR(n){Qe(new Ue("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),v(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oy(n)},l=new EA(a,c,u);return nA(l,t),l})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Qe(new Ue("auth-internal",e=>{const t=me(e.getProvider("auth").getImmediate());return(r=>new JN(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Te(Gd,Wd,ZN(n)),Te(Gd,Wd,"esm2017")}/**
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
 */const tR=5*60;Rw("authIdTokenMaxAge");eR("Browser");/**
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
 */function Kn(){return window}/**
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
 */const nR=2e3;async function rR(n,e,t){var r;const{BuildInfo:i}=Kn();nt(e.sessionId,"AuthEvent did not contain a session ID");const s=await cR(e.sessionId),o={};return $r()?o.ibi=i.packageName:ps()?o.apn=i.packageName:Ae(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Mc(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function iR(n){const{BuildInfo:e}=Kn(),t={};$r()?t.iosBundleId=e.packageName:ps()?t.androidPackageName=e.packageName:Ae(n,"operation-not-supported-in-this-environment"),await cw(n,t)}function sR(n){const{cordova:e}=Kn();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,vA()?"_blank":"_system","location=yes"),t(i)})})}async function oR(n,e,t){const{cordova:r}=Kn();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(Se(n,"redirect-cancelled-by-user"))},nR))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),ps()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function aR(n){var e,t,r,i,s,o,a,c,u,l;const h=Kn();v(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),v(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),v(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),v(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),v(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function cR(n){const e=uR(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function uR(n){if(nt(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
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
 */const lR=20;class hR extends ow{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function dR(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:mR(),postBody:null,tenantId:n.tenantId,error:Se(n,"no-auth-event")}}function fR(n,e){return Fc()._set(Uc(n),e)}async function zd(n){const e=await Fc()._get(Uc(n));return e&&await Fc()._remove(Uc(n)),e}function pR(n,e){var t,r;const i=yR(e);if(i.includes("/__/auth/callback")){const s=Vs(i),o=s.firebaseError?gR(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?Se(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function mR(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<lR;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Fc(){return He(Pl)}function Uc(n){return kn("authEvent",n.config.apiKey,n.name)}function gR(n){try{return JSON.parse(n)}catch{return null}}function yR(n){const e=Vs(n),t=e.link?decodeURIComponent(e.link):void 0,r=Vs(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Vs(i).link||i||r||t||n}function Vs(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return ir(t.join("?"))}/**
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
 */const wR=500;class vR{constructor(){this._redirectPersistence=jn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ya,this._overrideRedirectResult=Vl}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new hR(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ae(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){aR(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),mN(),await this._originValidation(e);const o=dR(e,r,i);await fR(e,o);const a=await rR(e,o,t),c=await sR(a);return oR(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iR(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Kn(),o=setTimeout(async()=>{await zd(e),t.onEvent(Hd())},wR),a=async l=>{clearTimeout(o);const h=await zd(e);let d=null;h&&(l==null?void 0:l.url)&&(d=pR(h,l.url)),t.onEvent(d||Hd())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Kn().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const IR=vR;function Hd(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Se("no-auth-event")}}/**
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
 */function _R(n,e){me(n)._logFramework(e)}var bR="@firebase/auth-compat",TR="0.3.5";/**
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
 */const ER=1e3;function wi(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function SR(){return wi()==="http:"||wi()==="https:"}function lw(n=X()){return!!((wi()==="file:"||wi()==="ionic:"||wi()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function kR(){return jc()||yo()}function AR(){return tf()&&(document==null?void 0:document.documentMode)===11}function CR(n=X()){return/Edge\/\d+/.test(n)}function NR(n=X()){return AR()||CR(n)}function hw(){try{const n=self.localStorage,e=ms();if(n)return n.setItem(e,"1"),n.removeItem(e),NR()?hr():!0}catch{return $l()&&hr()}return!1}function $l(){return typeof globalThis<"u"&&"WorkerGlobalScope"in globalThis&&"importScripts"in globalThis}function Qa(){return(SR()||ef()||lw())&&!kR()&&hw()&&!$l()}function dw(){return lw()&&typeof document<"u"}async function RR(){return dw()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},ER);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function DR(){return typeof window<"u"?window:null}/**
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
 */const We={LOCAL:"local",NONE:"none",SESSION:"session"},Zr=v,fw="persistence";function xR(n,e){if(Zr(Object.values(We).includes(e),n,"invalid-persistence-type"),jc()){Zr(e!==We.SESSION,n,"unsupported-persistence-type");return}if(yo()){Zr(e===We.NONE,n,"unsupported-persistence-type");return}if($l()){Zr(e===We.NONE||e===We.LOCAL&&hr(),n,"unsupported-persistence-type");return}Zr(e===We.NONE||hw(),n,"unsupported-persistence-type")}async function Vc(n){await n._initializationPromise;const e=pw(),t=kn(fw,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function OR(n,e){const t=pw();if(!t)return[];const r=kn(fw,n,e);switch(t.getItem(r)){case We.NONE:return[kr];case We.LOCAL:return[Ki,jn];case We.SESSION:return[jn];default:return[]}}function pw(){var n;try{return((n=DR())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const PR=v;class $t{constructor(){this.browserResolver=He(XN),this.cordovaResolver=He(IR),this.underlyingResolver=null,this._redirectPersistence=jn,this._completeRedirectFn=ya,this._overrideRedirectResult=Vl}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return dw()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return PR(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await RR();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function mw(n){return n.unwrap()}function LR(n){return n.wrapped()}/**
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
 */function MR(n){return gw(n)}function FR(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new UR(n,vC(n,e))}else if(r){const i=gw(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function gw(n){const{_tokenResponse:e}=n instanceof be?n.customData:n;if(!e)return null;if(!(n instanceof be)&&"temporaryProof"in e&&"phoneNumber"in e)return tt.credentialFromResult(n);const t=e.providerId;if(!t||t===Jr.PASSWORD)return null;let r;switch(t){case Jr.GOOGLE:r=st;break;case Jr.FACEBOOK:r=it;break;case Jr.GITHUB:r=ot;break;case Jr.TWITTER:r=at;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Ar._create(t,a):gt._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new ur(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof be?r.credentialFromError(n):r.credentialFromResult(n)}function $e(n,e){return e.catch(t=>{throw t instanceof be&&FR(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:MR(t),additionalUserInfo:wC(t),user:It.getOrCreate(i)}})}async function Bc(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>$e(n,t.confirm(r))}}class UR{constructor(e,t){this.resolver=t,this.auth=LR(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return $e(mw(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class It{constructor(e){this._delegate=e,this.multiFactor=TC(e)}static getOrCreate(e){return It.USER_MAP.has(e)||It.USER_MAP.set(e,new It(e)),It.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return $e(this.auth,qy(this._delegate,e))}async linkWithPhoneNumber(e,t){return Bc(this.auth,nN(this._delegate,e,t))}async linkWithPopup(e){return $e(this.auth,hN(this._delegate,e,$t))}async linkWithRedirect(e){return await Vc(me(this.auth)),IN(this._delegate,e,$t)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return $e(this.auth,jy(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Bc(this.auth,rN(this._delegate,e,t))}reauthenticateWithPopup(e){return $e(this.auth,lN(this._delegate,e,$t))}async reauthenticateWithRedirect(e){return await Vc(me(this.auth)),wN(this._delegate,e,$t)}sendEmailVerification(e){return aC(this._delegate,e)}async unlink(e){return await zA(this._delegate,e),this}updateEmail(e){return hC(this._delegate,e)}updatePassword(e){return dC(this._delegate,e)}updatePhoneNumber(e){return iN(this._delegate,e)}updateProfile(e){return lC(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return cC(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}It.USER_MAP=new WeakMap;/**
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
 */const ei=v;class $c{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ei(r,"invalid-api-key",{appName:e.name}),ei(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?$t:void 0;this._delegate=t.initialize({options:{persistence:VR(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(eA),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?It.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){SA(this._delegate,e,t)}applyActionCode(e){return JA(this._delegate,e)}checkActionCode(e){return Ky(this._delegate,e)}confirmPasswordReset(e,t){return YA(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return $e(this._delegate,eC(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return oC(this._delegate,e)}isSignInWithEmailLink(e){return rC(this._delegate,e)}async getRedirectResult(){ei(Qa(),this._delegate,"operation-not-supported-in-this-environment");const e=await bN(this._delegate,$t);return e?$e(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){_R(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=Qd(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=Qd(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return nC(this._delegate,e,t)}sendPasswordResetEmail(e,t){return XA(this._delegate,e,t||void 0)}async setPersistence(e){xR(this._delegate,e);let t;switch(e){case We.SESSION:t=jn;break;case We.LOCAL:t=await He(Ki)._isAvailable()?Ki:Pl;break;case We.NONE:t=kr;break;default:return Ae("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return $e(this._delegate,WA(this._delegate))}signInWithCredential(e){return $e(this._delegate,ha(this._delegate,e))}signInWithCustomToken(e){return $e(this._delegate,QA(this._delegate,e))}signInWithEmailAndPassword(e,t){return $e(this._delegate,tC(this._delegate,e,t))}signInWithEmailLink(e,t){return $e(this._delegate,iC(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Bc(this._delegate,tN(this._delegate,e,t))}async signInWithPopup(e){return ei(Qa(),this._delegate,"operation-not-supported-in-this-environment"),$e(this._delegate,uN(this._delegate,e,$t))}async signInWithRedirect(e){return ei(Qa(),this._delegate,"operation-not-supported-in-this-environment"),await Vc(this._delegate),gN(this._delegate,e,$t)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return ZA(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}$c.Persistence=We;function Qd(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&It.getOrCreate(o)),error:e,complete:t}}function VR(n,e){const t=OR(n,e);if(typeof self<"u"&&!t.includes(Ki)&&t.push(Ki),typeof window<"u")for(const r of[Pl,jn])t.includes(r)||t.push(r);return t.includes(kr)||t.push(kr),t}/**
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
 */class ql{constructor(){this.providerId="phone",this._delegate=new tt(mw(To.auth()))}static credential(e,t){return tt.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}ql.PHONE_SIGN_IN_METHOD=tt.PHONE_SIGN_IN_METHOD;ql.PROVIDER_ID=tt.PROVIDER_ID;/**
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
 */const BR=v;class $R{constructor(e,t,r=To.app()){var i;BR((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new ZC(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const qR="auth-compat";function jR(n){n.INTERNAL.registerComponent(new Ue(qR,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new $c(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:er.EMAIL_SIGNIN,PASSWORD_RESET:er.PASSWORD_RESET,RECOVER_EMAIL:er.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:er.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:er.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:er.VERIFY_EMAIL}},EmailAuthProvider:an,FacebookAuthProvider:it,GithubAuthProvider:ot,GoogleAuthProvider:st,OAuthProvider:ur,SAMLAuthProvider:ho,PhoneAuthProvider:ql,PhoneMultiFactorGenerator:uw,RecaptchaVerifier:$R,TwitterAuthProvider:at,Auth:$c,AuthCredential:qr,Error:be}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(bR,TR)}jR(To);const KR="AIzaSyDimSnjk0MlojvT",GR="ZH1H4OhHzPsVSYt32ac",WR={apiKey:`${KR}${GR}`,authDomain:"hiu-interne.firebaseapp.com",projectId:"hiu-interne",storageBucket:"hiu-interne.appspot.com",messagingSenderId:"203815167509",appId:"1:203815167509:web:5b8a7da85ca63c8c74901c",measurementId:"G-QCV1EKZN8V"},yw=Io(WR),ZR=r_(yw);Fb(yw);export{XR as g,YR as r,ZR as s,QR as u,JR as v};

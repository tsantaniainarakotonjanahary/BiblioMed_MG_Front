import{o as a,r as b,j as e,aM as t,aO as i,a6 as n,a4 as d,a5 as s,aN as c,a7 as N,a8 as o,a9 as g,aa as C,K as v,ag as K,U as x,D as A,t as k,v as m,B as w}from"./index.e711043e.js";import{B as P}from"./index.51d05e01.js";import{t as F,f as I,z as S,L as z,a0 as T}from"./App.c3ad3f0b.js";import{S as M}from"./react-select.esm.529fceb3.js";import{u as B,C as D}from"./index.esm.d825ec9d.js";import{i as R}from"./pricing-Illustration.cc247962.js";import"./emotion-memoize.esm.06f0e458.js";const $=[{type:"Full Access",name:"Server Key 1",key:"23eaf7f0-f4f7-495e-8b86-fad3261282ac",date:"Created on 28 Apr 2020, 18:20 GTM+4:10"},{type:"Read Only",name:"Server Key 2",key:"bb98e571-a2e2-4de8-90a9-2e231b5e99",date:"Created on 12 Feb 2020, 10:30 GTM+2:30"},{type:"Full Access",name:"Server Key 3",key:"2e915e59-3105-47f2-8838-6e46bf83b711",date:"Created on 28 Apr 2020, 12:21 GTM+4:10"}],p=[{value:"full-control",label:"Full Control"},{value:"modify",label:"Modify"},{value:"read-execute",label:"Read & Execute"},{value:"list-folder",label:"List Folder Contents"},{value:"read-only",label:"Read Only"},{value:"read-write",label:"Read Write"}],j={apiKeyName:""},H=()=>{const{control:h,setError:y,handleSubmit:u,formState:{errors:l}}=B({defaultValues:j}),f=r=>{if(r.apiKeyName.length)return null;y("apiKeyName",{type:"manual"})};return a(b.exports.Fragment,{children:[e(P,{title:"Create an API Key",data:[{title:"Pages"},{title:"Create an API Key"}]}),a(t,{children:[e(i,{className:"pb-0",children:e(n,{tag:"h4",children:"Create an API Key"})}),a(d,{children:[e(s,{md:{size:5,order:0},xs:{size:12,order:1},children:e(c,{children:a(N,{onSubmit:u(f),children:[a("div",{className:"mb-2",children:[e(o,{className:"form-label",children:"Choose the Api key type you want to create"}),e(M,{isClearable:!1,options:p,className:"react-select",classNamePrefix:"select",theme:F,defaultValue:p[0]})]}),a("div",{className:"mb-2",children:[e(o,{className:"form-label",for:"apiKeyName",children:"Name the API key"}),e(D,{name:"apiKeyName",control:h,render:({field:r})=>e(g,{id:"apiKeyName",placeholder:"Server Key",invalid:l.apiKeyName&&!0,...r})}),l&&l.apiKeyName&&e(C,{children:"Please enter a valid API key name"})]}),e("div",{children:e(v,{block:!0,type:"submit",color:"primary",children:"Create Key"})})]})})}),e(s,{md:{size:7,order:1},xs:{size:12,order:0},children:e("div",{className:"text-center",children:e("img",{className:"img-fluid text-center",src:R,alt:"illustration",width:"310"})})})]})]}),a(t,{children:[e(i,{children:e(n,{tag:"h4",children:"API Key List & Access"})}),a(c,{children:[e(K,{children:"An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing."}),e(d,{className:"gy-2",children:$.map(r=>e(s,{sm:12,children:a("div",{className:"bg-light-secondary position-relative rounded p-2",children:[a(x,{className:"btn-pinned",children:[e(A,{tag:"span",className:"cursor-pointer",children:e(I,{size:18})}),a(k,{children:[a(m,{className:"d-flex align-items-center",children:[e(S,{size:14,className:"me-50"}),e("span",{children:"Edit"})]}),a(m,{className:"d-flex align-items-center",children:[e(z,{size:14,className:"me-50"}),e("span",{children:"Delete"})]})]})]}),a("div",{className:"d-flex align-items-center flex-wrap",children:[e("h4",{className:"mb-1 me-1",children:r.name}),e(w,{className:"mb-1",color:"light-primary",children:r.type})]}),a("h6",{className:"d-flex align-items-center fw-bolder",children:[e("span",{className:"me-50",children:r.key}),e("span",{children:e(T,{size:14})})]}),e("span",{children:r.date})]})},r.key))})]})]})]})};export{H as default};

import{j as e,aM as c,o as s,aN as o,ag as i,a7 as d,ad as m,ae as u,a9 as p}from"./index.e711043e.js";import{S as g}from"./App.c3ad3f0b.js";const N=({searchTerm:n,setSearchTerm:t,handleFilter:r})=>{const l=a=>{r?r(a):t(a.target.value)};return e("div",{id:"knowledge-base-search",children:e(c,{className:"knowledge-base-bg",style:{backgroundImage:"url('@src/assets/images/banner/banner.png')"},children:s(o,{className:"text-center",children:[e("h2",{className:"text-primary",children:"Dedicated Source Used on Website"}),s(i,{className:"mb-2",children:["Popular searches: ",e("span",{className:"fw-bolder",children:"Sales automation, Email marketing"})]}),e(d,{className:"kb-search-input",onSubmit:a=>a.preventDefault(),children:s(m,{className:"input-group-merge",children:[e(u,{children:e(g,{size:14})}),e(p,{value:n,onChange:a=>l(a),placeholder:"Ask a question..."})]})})]})})})};export{N as F};

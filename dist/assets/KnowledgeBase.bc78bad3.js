import{r as s,F as g,o as r,j as t,a4 as u,a5 as m,aM as p,L as C,cj as w,aN as f}from"./index.e711043e.js";import{B as x}from"./index.51d05e01.js";import{F as b}from"./page-knowledge-base.ca9ced25.js";import"./App.c3ad3f0b.js";const N=()=>{const[n,l]=s.exports.useState(null),[a,d]=s.exports.useState("");s.exports.useEffect(()=>{g.get("/faq/data/knowledge_base").then(e=>l(e.data))},[]);const o=({item:e})=>t(m,{className:"kb-search-content",md:"4",sm:"6",children:t(p,{children:r(C,{to:`/pages/knowledge-base/${e.category}`,children:[t(w,{src:e.img,alt:"knowledge-base-image",top:!0}),r(f,{className:"text-center",children:[t("h4",{children:e.title}),t("p",{className:"text-body mt-1 mb-0",children:e.desc})]})]})})},e.id),c=()=>n.map(e=>{const i=e.title.toLowerCase().includes(a.toLowerCase()),h=e.desc.toLowerCase().includes(a.toLowerCase());return a.length<1?t(o,{item:e},e.id):i||h?t(o,{item:e},e.id):null});return r(s.exports.Fragment,{children:[t(x,{title:"Knowledge Base",data:[{title:"Pages"},{title:"Knowledge Base"}]}),t(b,{searchTerm:a,setSearchTerm:d}),n!==null?t("div",{id:"knowledge-base-content",children:t(u,{className:"kb-search-content-info match-height",children:c()})}):null]})};export{N as default};

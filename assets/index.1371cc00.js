import{r as i,F as b,o as l,j as e,a4 as o,a5 as h,bu as v,bv as t,bw as r,aM as N,L as s,cj as C,aN as x,a6 as k,ag as y,B as D,k as B}from"./index.e711043e.js";import{B as w}from"./BlogSidebar.2624efef.js";import{A as L,M as j}from"./App.c3ad3f0b.js";import{B as F}from"./index.51d05e01.js";/* empty css                  */const S=()=>{const[c,m]=i.exports.useState(null);i.exports.useEffect(()=>{b.get("/blog/list/data").then(a=>m(a.data))},[]);const g={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"},u=()=>c.map(a=>{const f=()=>a.tags.map((n,d)=>e("a",{href:"/",onClick:p=>p.preventDefault(),children:e(D,{className:B({"me-50":d!==a.tags.length-1}),color:g[n],pill:!0,children:n})},d));return e(h,{md:"6",children:l(N,{children:[e(s,{to:`/pages/blog/detail/${a.id}`,children:e(C,{className:"img-fluid",src:a.img,alt:a.title,top:!0})}),l(x,{children:[e(k,{tag:"h4",children:e(s,{className:"blog-title-truncate text-body-heading",to:`/pages/blog/detail/${a.id}`,children:a.title})}),l("div",{className:"d-flex",children:[e(L,{className:"me-50",img:a.avatar,imgHeight:"24",imgWidth:"24"}),l("div",{children:[e("small",{className:"text-muted me-25",children:"by"}),e("small",{children:e("a",{className:"text-body",href:"/",onClick:n=>n.preventDefault(),children:a.userFullName})}),e("span",{className:"text-muted ms-50 me-25",children:"|"}),e("small",{className:"text-muted",children:a.blogPosted})]})]}),e("div",{className:"my-1 py-25",children:f()}),e(y,{className:"blog-content-truncate",children:a.excerpt}),e("hr",{}),l("div",{className:"d-flex justify-content-between align-items-center",children:[l(s,{to:`/pages/blog/detail/${a.id}`,children:[e(j,{size:15,className:"text-body me-50"}),l("span",{className:"text-body fw-bold",children:[a.comment," Comments"]})]}),e(s,{className:"fw-bold",to:`/pages/blog/detail/${a.id}`,children:"Read More"})]})]})]})},a.title)});return l(i.exports.Fragment,{children:[e(F,{title:"Blog List",data:[{title:"Pages"},{title:"Blog"},{title:"List"}]}),l("div",{className:"blog-wrapper",children:[e("div",{className:"content-detached content-left",children:e("div",{className:"content-body",children:c!==null?l("div",{className:"blog-list-wrapper",children:[e(o,{children:u()}),e(o,{children:e(h,{sm:"12",children:l(v,{className:"d-flex justify-content-center mt-2",children:[e(t,{className:"prev-item",children:e(r,{href:"#",onClick:a=>a.preventDefault()})}),e(t,{children:e(r,{href:"#",onClick:a=>a.preventDefault(),children:"1"})}),e(t,{children:e(r,{href:"#",onClick:a=>a.preventDefault(),children:"2"})}),e(t,{children:e(r,{href:"#",onClick:a=>a.preventDefault(),children:"3"})}),e(t,{active:!0,children:e(r,{href:"#",onClick:a=>a.preventDefault(),children:"4"})}),e(t,{children:e(r,{href:"#",onClick:a=>a.preventDefault(),children:"5"})}),e(t,{children:e(r,{href:"#",onClick:a=>a.preventDefault(),children:"6"})}),e(t,{children:e(r,{href:"#",onClick:a=>a.preventDefault(),children:"7"})}),e(t,{className:"next-item",children:e(r,{href:"#",onClick:a=>a.preventDefault()})})]})})})]}):null})}),e(w,{})]})]})};export{S as default};

import{r as t,F as v,o as l,j as e,a4 as g,a5 as i,aM as c,cj as x,aN as m,a6 as y,ar as C,ag as o,U as k,D as w,t as D,v as r,a7 as B,a9 as n,a8 as F,K as z,B as T,k as L}from"./index.e711043e.js";import{A as h,M as S,aU as H,aD as I,af as W,aJ as j,aL as M,ag as U,ah as $,aI as A,J as G}from"./App.c3ad3f0b.js";import{B as q}from"./BlogSidebar.2624efef.js";import{B as E}from"./index.51d05e01.js";/* empty css                  */const Q=()=>{const[s,p]=t.exports.useState(null);t.exports.useEffect(()=>{v.get("/blog/list/data/detail").then(a=>p(a.data))},[]);const b={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"},N=()=>s.blog.tags.map((a,d)=>e("a",{href:"/",onClick:f=>f.preventDefault(),children:e(T,{className:L({"me-50":d!==s.blog.tags.length-1}),color:b[a],pill:!0,children:a})},d)),u=()=>s.comments.map(a=>e(c,{className:"mb-3",children:e(m,{children:l("div",{className:"d-flex",children:[e("div",{children:e(h,{className:"me-75",img:a.avatar,imgHeight:"38",imgWidth:"38"})}),l("div",{children:[e("h6",{className:"fw-bolder mb-25",children:a.userFullName}),e(o,{children:a.commentedAt}),e(o,{children:a.commentText}),e("a",{href:"/",onClick:d=>d.preventDefault(),children:l("div",{className:"d-inline-flex align-items-center",children:[e(G,{size:18,className:"me-50"}),e("span",{children:"Reply"})]})})]})]})})},a.userFullName));return l(t.exports.Fragment,{children:[e(E,{title:"Blog Details",data:[{title:"Pages"},{title:"Blog"},{title:"Details"}]}),l("div",{className:"blog-wrapper",children:[e("div",{className:"content-detached content-left",children:e("div",{className:"content-body",children:s!==null?l(g,{children:[e(i,{sm:"12",children:l(c,{className:"mb-3",children:[e(x,{src:s.blog.img,className:"img-fluid",top:!0}),l(m,{children:[e(y,{tag:"h4",children:s.blog.title}),l("div",{className:"d-flex",children:[e(h,{className:"me-50",img:s.blog.avatar,imgHeight:"24",imgWidth:"24"}),l("div",{children:[e("small",{className:"text-muted me-25",children:"by"}),e("small",{children:e("a",{className:"text-body",href:"/",onClick:a=>a.preventDefault(),children:s.blog.userFullName})}),e("span",{className:"text-muted ms-50 me-25",children:"|"}),e("small",{className:"text-muted",children:s.blog.createdTime})]})]}),e("div",{className:"my-1 py-25",children:N()}),e("div",{dangerouslySetInnerHTML:{__html:s.blog.content}}),l("div",{className:"d-flex",children:[e("div",{children:e(h,{img:C,className:"me-2",imgHeight:"60",imgWidth:"60"})}),l("div",{children:[e("h6",{className:"fw-bolder",children:"Willie Clark"}),e(o,{className:"mb-0",children:"Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world."})]})]}),e("hr",{className:"my-2"}),l("div",{className:"d-flex align-items-center justify-content-between",children:[l("div",{className:"d-flex align-items-center",children:[l("div",{className:"d-flex align-items-center me-1",children:[e("a",{className:"me-50",href:"/",onClick:a=>a.preventDefault(),children:e(S,{size:21,className:"text-body align-middle"})}),e("a",{href:"/",onClick:a=>a.preventDefault(),children:e("div",{className:"text-body align-middle",children:H(s.blog.comments)})})]}),l("div",{className:"d-flex align-items-cente",children:[e("a",{className:"me-50",href:"/",onClick:a=>a.preventDefault(),children:e(I,{size:21,className:"text-body align-middle"})}),e("a",{href:"/",onClick:a=>a.preventDefault(),children:e("div",{className:"text-body align-middle",children:s.blog.bookmarked})})]})]}),l(k,{className:"dropdown-icon-wrapper",children:[e(w,{tag:"span",children:e(W,{size:21,className:"text-body cursor-pointer"})}),l(D,{end:!0,children:[e(r,{className:"py-50 px-1",children:e(j,{size:18})}),e(r,{className:"py-50 px-1",children:e(M,{size:18})}),e(r,{className:"py-50 px-1",children:e(U,{size:18})}),e(r,{className:"py-50 px-1",children:e($,{size:18})}),e(r,{className:"py-50 px-1",children:e(A,{size:18})})]})]})]})]})]})}),l(i,{sm:"12",id:"blogComment",children:[e("h6",{className:"section-label",children:"Comment"}),u()]}),l(i,{sm:"12",children:[e("h6",{className:"section-label",children:"Leave a Comment"}),e(c,{children:e(m,{children:e(B,{className:"form",onSubmit:a=>a.preventDefault(),children:l(g,{children:[e(i,{sm:"6",children:e("div",{className:"mb-2",children:e(n,{placeholder:"Name"})})}),e(i,{sm:"6",children:e("div",{className:"mb-2",children:e(n,{type:"email",placeholder:"Email"})})}),e(i,{sm:"6",children:e("div",{className:"mb-2",children:e(n,{type:"url",placeholder:"Website"})})}),e(i,{sm:"12",children:e("div",{className:"mb-2",children:e(n,{className:"mb-2",type:"textarea",rows:"4",placeholder:"Comment"})})}),e(i,{sm:"12",children:l("div",{className:"form-check mb-2",children:[e(n,{type:"checkbox",id:"save-data-checkbox"}),e(F,{className:"form-check-label",for:"save-data-checkbox",children:"Save my name, email, and website in this browser for the next time I comment."})]})}),e(i,{sm:"12",children:e(z,{color:"primary",children:"Post Comment"})})]})})})})]})]}):null})}),e(q,{})]})]})};export{Q as default};
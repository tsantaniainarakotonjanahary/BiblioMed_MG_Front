import{r as o,j as a,o as t,a4 as N,a5 as d,bQ as v,bR as y,G as q,H as x,bS as F,cf as I,cg as T,ch as w,ci as A,aM as p,aN as g,ag as C,a7 as S,ad as k,ae as z,a9 as Q,F as j}from"./index.e711043e.js";import{aQ as b,D as B,S as D,e as P,m as R}from"./App.c3ad3f0b.js";import{i as $}from"./faq-illustrations.b1c6d2b4.js";import{B as G}from"./index.51d05e01.js";const E=({data:c})=>{const r=[],[n,l]=o.exports.useState("Payment"),s=e=>l(e);Object.entries(c).forEach(([e,i])=>{r.push(i)});const h=()=>r.map(e=>{const i=b[e.icon];return a(q,{tag:"li",children:t(x,{active:n===e.title,onClick:()=>s(e.title),children:[a(i,{size:18,className:"me-1"}),a("span",{className:"fw-bold",children:e.title})]})},e.title)}),m=()=>r.map(e=>{const i=b[e.icon];return t(F,{tabId:e.title,children:[t("div",{className:"d-flex align-items-center",children:[a("div",{className:"avatar avatar-tag bg-light-primary me-1",children:a(i,{size:20})}),t("div",{children:[a("h4",{className:"mb-0",children:e.title}),a("span",{children:e.subtitle})]})]}),e.qandA.length?a(I,{className:"accordion-margin mt-2",defaultOpen:"0",children:e.qandA.map((f,u)=>t(T,{children:[a(w,{tag:"h2",targetId:String(u+1),children:f.question}),a(A,{accordionId:String(u+1),children:f.ans})]},u+1))}):a("div",{className:"text-center p-5",children:t("h5",{className:"p-1",children:[a(B,{size:"19",className:"me-25"})," No Results Found"]})})]},e.title)});return a("div",{id:"faq-tabs",children:t(N,{children:[a(d,{lg:"3",md:"4",sm:"12",children:t("div",{className:"faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0",children:[a(v,{tag:"ul",className:"nav-left",pills:!0,vertical:!0,children:h()}),a("img",{alt:"illustration",src:$,style:{transform:"scaleX(1)"},className:"img-fluid d-none d-md-block"})]})}),a(d,{lg:"9",md:"8",sm:"12",children:a(y,{activeTab:n,children:m()})})]})})},H=({searchTerm:c,setSearchTerm:r,getFAQData:n})=>{const l=s=>{r(s.target.value),n(s.target.value)};return a("div",{id:"faq-search-filter",children:a(p,{className:"faq-search",style:{backgroundImage:"url('@src/assets/images/banner/banner.png')"},children:t(g,{className:"text-center",children:[a("h2",{className:"text-primary",children:"Let's answer some questions"}),a(C,{className:"mb-2",children:"or choose a category to quickly find the help you need"}),a(S,{className:"faq-search-input",onSubmit:s=>s.preventDefault(),children:t(k,{className:"input-group-merge",children:[a(z,{children:a(D,{size:14})}),a(Q,{value:c,onChange:s=>l(s),placeholder:"search faq..."})]})})]})})})},L=()=>a("div",{className:"faq-contact",children:t(N,{className:"mt-5 pt-75",children:[t(d,{className:"text-center",sm:"12",children:[a("h2",{children:"You still have a question?"}),a("p",{className:"mb-3",children:"If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!"})]}),a(d,{sm:"6",children:a(p,{className:"text-center faq-contact-card shadow-none py-1",children:t(g,{children:[a("div",{className:"avatar avatar-tag bg-light-primary mb-2 mx-auto",children:a(P,{size:18})}),a("h4",{children:"+ (810) 2548 2568"}),a("span",{className:"text-body",children:"We are always happy to help!"})]})})}),a(d,{sm:"6",children:a(p,{className:"text-center faq-contact-card shadow-none py-1",children:t(g,{children:[a("div",{className:"avatar avatar-tag bg-light-primary mb-2 mx-auto",children:a(R,{size:18})}),a("h4",{children:"hello@help.com"}),a("span",{className:"text-body",children:"Best way to get answer faster!"})]})})})]})});const X=()=>{const[c,r]=o.exports.useState(null),[n,l]=o.exports.useState(""),s=h=>j.get("/faq/data",{params:{q:h}}).then(m=>{r(m.data)});return o.exports.useEffect(()=>{s(n)},[]),t(o.exports.Fragment,{children:[a(G,{title:"FAQ",data:[{title:"Pages"},{title:"FAQ"}]}),a(H,{searchTerm:n,setSearchTerm:l,getFAQData:s}),c!==null?a(E,{data:c,searchTerm:n,setSearchTerm:l}):null,a(L,{})]})};export{X as default};

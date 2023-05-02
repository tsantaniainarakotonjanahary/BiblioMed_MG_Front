import{r as c,o as a,aM as y,j as e,aO as D,a6 as R,an as A,ba as _,ao as H,a8 as C,ad as x,ae as v,a9 as b,K as I,aR as V,D as U,t as G,v as P,a4 as M,a5 as N,aQ as Q,ag as J}from"./index.e711043e.js";import{B as K}from"./index.51d05e01.js";import{d as p,c as E,E as X,b as Z,m as q,r as Y}from"./data.c705c95e.js";import{R as W}from"./react-paginate.c16a72a1.js";import{Q as T}from"./react-dataTable-component.9df9bb3b.js";import{a5 as S,U as ee,aB as ae,m as te,ab as se,ae as ne,X as le,at as re,au as ie,ao as oe,a9 as ce,av as de,a0 as me,s as pe,a$ as ge}from"./App.c3ad3f0b.js";import{F as ue}from"./index.59040061.js";/* empty css                  */import"./emotion-memoize.esm.06f0e458.js";const he=()=>{const[r,i]=c.exports.useState(0),d=o=>{i(o.selected)};return a(y,{children:[e(D,{children:e(R,{tag:"h4",children:"Expandable Row"})}),e("div",{className:"react-dataTable",children:e(T,{noHeader:!0,pagination:!0,data:p,expandableRows:!0,columns:E,expandOnRowClicked:!0,className:"react-dataTable",sortIcon:e(S,{size:10}),paginationComponent:()=>e(W,{previousLabel:"",nextLabel:"",forcePage:r,onPageChange:o=>d(o),pageCount:10,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",nextLinkClassName:"page-link",pageLinkClassName:"page-link",breakLinkClassName:"page-link",previousLinkClassName:"page-link",nextClassName:"page-item next-item",previousClassName:"page-item prev-item",containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1"}),paginationDefaultPage:r+1,expandableRowsComponent:X,paginationRowsPerPageOptions:[10,25,50,100]})})]})},Ce=()=>a(y,{className:"overflow-hidden",children:[e(D,{children:e(R,{tag:"h4",children:"Zero Configuration"})}),e("div",{className:"react-dataTable",children:e(T,{noHeader:!0,pagination:!0,data:p,columns:Z,className:"react-dataTable",sortIcon:e(S,{size:10}),paginationRowsPerPageOptions:[10,25,50,100]})})]}),Ne=({open:r,handleModal:i})=>{const[d,u]=c.exports.useState(new Date);return a(A,{isOpen:r,toggle:i,className:"sidebar-sm",modalClassName:"modal-slide-in",contentClassName:"pt-0",children:[e(_,{className:"mb-1",toggle:i,close:e(le,{className:"cursor-pointer",size:15,onClick:i}),tag:"div",children:e("h5",{className:"modal-title",children:"New Record"})}),a(H,{className:"flex-grow-1",children:[a("div",{className:"mb-1",children:[e(C,{className:"form-label",for:"full-name",children:"Full Name"}),a(x,{children:[e(v,{children:e(ee,{size:15})}),e(b,{id:"full-name",placeholder:"Bruce Wayne"})]})]}),a("div",{className:"mb-1",children:[e(C,{className:"form-label",for:"post",children:"Post"}),a(x,{children:[e(v,{children:e(ae,{size:15})}),e(b,{id:"post",placeholder:"Web Developer"})]})]}),a("div",{className:"mb-1",children:[e(C,{className:"form-label",for:"email",children:"Email"}),a(x,{children:[e(v,{children:e(te,{size:15})}),e(b,{type:"email",id:"email",placeholder:"brucewayne@email.com"})]})]}),a("div",{className:"mb-1",children:[e(C,{className:"form-label",for:"joining-date",children:"Joining Date"}),a(x,{children:[e(v,{children:e(se,{size:15})}),e(ue,{className:"form-control",id:"joining-date",value:d,onChange:w=>u(w)})]})]}),a("div",{className:"mb-1",children:[e(C,{className:"form-label",for:"salary",children:"Salary"}),a(x,{children:[e(v,{children:e(ne,{size:15})}),e(b,{type:"number",id:"salary"})]})]}),e(I,{className:"me-1",color:"primary",onClick:i,children:"Submit"}),e(I,{color:"secondary",onClick:i,outline:!0,children:"Cancel"})]})]})},be=c.exports.forwardRef((r,i)=>e("div",{className:"form-check",children:e(b,{type:"checkbox",ref:i,...r})})),we=()=>{const[r,i]=c.exports.useState(!1),[d,u]=c.exports.useState(0),[o,w]=c.exports.useState(""),[L,j]=c.exports.useState([]),z=()=>i(!r),B=m=>{const t=m.target.value;let s=[];w(t);const g={1:{title:"Current",color:"light-primary"},2:{title:"Professional",color:"light-success"},3:{title:"Rejected",color:"light-danger"},4:{title:"Resigned",color:"light-warning"},5:{title:"Applied",color:"light-info"}};t.length&&(s=p.filter(n=>{const f=n.full_name.toLowerCase().startsWith(t.toLowerCase())||n.post.toLowerCase().startsWith(t.toLowerCase())||n.email.toLowerCase().startsWith(t.toLowerCase())||n.age.toLowerCase().startsWith(t.toLowerCase())||n.salary.toLowerCase().startsWith(t.toLowerCase())||n.start_date.toLowerCase().startsWith(t.toLowerCase())||g[n.status].title.toLowerCase().startsWith(t.toLowerCase()),k=n.full_name.toLowerCase().includes(t.toLowerCase())||n.post.toLowerCase().includes(t.toLowerCase())||n.email.toLowerCase().includes(t.toLowerCase())||n.age.toLowerCase().includes(t.toLowerCase())||n.salary.toLowerCase().includes(t.toLowerCase())||n.start_date.toLowerCase().includes(t.toLowerCase())||g[n.status].title.toLowerCase().includes(t.toLowerCase());return f||(!f&&k?k:null)}),j(s),w(t))},F=m=>{u(m.selected)},O=()=>e(W,{previousLabel:"",nextLabel:"",forcePage:d,onPageChange:m=>F(m),pageCount:o.length?Math.ceil(L.length/7):Math.ceil(p.length/7)||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",nextLinkClassName:"page-link",pageLinkClassName:"page-link",breakLinkClassName:"page-link",previousLinkClassName:"page-link",nextClassName:"page-item next-item",previousClassName:"page-item prev-item",containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"});function h(m){let t;const s=",",g=`
`,n=Object.keys(p[0]);return t="",t+=n.join(s),t+=g,m.forEach(f=>{let k=0;n.forEach($=>{k>0&&(t+=s),t+=f[$],k++}),t+=g}),t}function l(m){const t=document.createElement("a");let s=h(m);if(s===null)return;const g="export.csv";s.match(/^data:text\/csv/i)||(s=`data:text/csv;charset=utf-8,${s}`),t.setAttribute("href",encodeURI(s)),t.setAttribute("download",g),t.click()}return a(c.exports.Fragment,{children:[a(y,{children:[a(D,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:[e(R,{tag:"h4",children:"DataTable with Buttons"}),a("div",{className:"d-flex mt-md-0 mt-1",children:[a(V,{children:[a(U,{color:"secondary",caret:!0,outline:!0,children:[e(re,{size:15}),e("span",{className:"align-middle ms-50",children:"Export"})]}),a(G,{children:[a(P,{className:"w-100",children:[e(ie,{size:15}),e("span",{className:"align-middle ms-50",children:"Print"})]}),a(P,{className:"w-100",onClick:()=>l(p),children:[e(oe,{size:15}),e("span",{className:"align-middle ms-50",children:"CSV"})]}),a(P,{className:"w-100",children:[e(ce,{size:15}),e("span",{className:"align-middle ms-50",children:"Excel"})]}),a(P,{className:"w-100",children:[e(de,{size:15}),e("span",{className:"align-middle ms-50",children:"PDF"})]}),a(P,{className:"w-100",children:[e(me,{size:15}),e("span",{className:"align-middle ms-50",children:"Copy"})]})]})]}),a(I,{className:"ms-2",color:"primary",onClick:z,children:[e(pe,{size:15}),e("span",{className:"align-middle ms-50",children:"Add Record"})]})]})]}),e(M,{className:"justify-content-end mx-0",children:a(N,{className:"d-flex align-items-center justify-content-end mt-1",md:"6",sm:"12",children:[e(C,{className:"me-1",for:"search-input",children:"Search"}),e(b,{className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input",value:o,onChange:B})]})}),e("div",{className:"react-dataTable react-dataTable-selectable-rows",children:e(T,{noHeader:!0,pagination:!0,selectableRows:!0,columns:E,paginationPerPage:7,className:"react-dataTable",sortIcon:e(S,{size:10}),paginationComponent:O,paginationDefaultPage:d+1,selectableRowsComponent:be,data:o.length?L:p})})]}),e(Ne,{open:r,handleModal:z})]})},Le=()=>{const[r,i]=c.exports.useState(0),[d,u]=c.exports.useState(""),[o,w]=c.exports.useState([]),{t:L}=ge(),j=h=>{i(h.selected)},z=h=>{const l=h.target.value;let m=[];u(l);const t={1:{title:"Current",color:"light-primary"},2:{title:"Professional",color:"light-success"},3:{title:"Rejected",color:"light-danger"},4:{title:"Resigned",color:"light-warning"},5:{title:"Applied",color:"light-info"}};l.length&&(m=p.filter(s=>{const g=s.full_name.toLowerCase().startsWith(l.toLowerCase())||s.post.toLowerCase().startsWith(l.toLowerCase())||s.email.toLowerCase().startsWith(l.toLowerCase())||s.age.toLowerCase().startsWith(l.toLowerCase())||s.salary.toLowerCase().startsWith(l.toLowerCase())||s.start_date.toLowerCase().startsWith(l.toLowerCase())||t[s.status].title.toLowerCase().startsWith(l.toLowerCase()),n=s.full_name.toLowerCase().includes(l.toLowerCase())||s.post.toLowerCase().includes(l.toLowerCase())||s.email.toLowerCase().includes(l.toLowerCase())||s.age.toLowerCase().includes(l.toLowerCase())||s.salary.toLowerCase().includes(l.toLowerCase())||s.start_date.toLowerCase().includes(l.toLowerCase())||t[s.status].title.toLowerCase().includes(l.toLowerCase());return g||(!g&&n?n:null)}),w(m),u(l))},B=()=>e(c.exports.Fragment,{children:e("span",{className:"align-middle d-none d-md-inline-block",children:L("Prev")})}),F=()=>e(c.exports.Fragment,{children:e("span",{className:"align-middle d-none d-md-inline-block",children:L("Next")})}),O=()=>e(W,{previousLabel:e(B,{size:15}),nextLabel:e(F,{size:15}),forcePage:r,onPageChange:h=>j(h),pageCount:d.length?Math.ceil(o.length/7):Math.ceil(p.length/7)||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination react-paginate pagination-sm justify-content-end pe-1 mt-1"});return a(y,{children:[e(D,{className:"border-bottom",children:e(R,{tag:"h4",children:"Multilingual"})}),e(M,{className:"justify-content-end mx-0",children:a(N,{className:"d-flex align-items-center justify-content-end mt-1",md:"6",sm:"12",children:[e(C,{className:"me-1",for:"search-input-1",children:L("Search")}),e(b,{className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input-1",value:d,onChange:z})]})}),e("div",{className:"react-dataTable",children:e(T,{noHeader:!0,pagination:!0,selectableRowsNoSelectAll:!0,columns:q,className:"react-dataTable",paginationPerPage:7,sortIcon:e(S,{size:10}),paginationDefaultPage:r+1,paginationComponent:O,data:d.length?o:p})}),e(Q,{children:a(J,{className:"mb-0",children:[e("span",{className:"fw-bold",children:"Note:"})," ",e("span",{children:"Use Intl Dropdown in Navbar to change table language"})]})})]})},fe=()=>{const[r,i]=c.exports.useState(0),d=o=>{i(o.selected)};return a(y,{className:"overflow-hidden",children:[e(D,{children:e(R,{tag:"h4",children:"Column ReOrder"})}),e("div",{className:"react-dataTable",children:e(T,{noHeader:!0,pagination:!0,data:p,columns:Y,className:"react-dataTable",sortIcon:e(S,{size:10}),paginationComponent:()=>e(W,{nextLabel:"",breakLabel:"...",previousLabel:"",pageRangeDisplayed:2,forcePage:r,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",nextLinkClassName:"page-link",pageLinkClassName:"page-link",breakLinkClassName:"page-link",previousLinkClassName:"page-link",nextClassName:"page-item next-item",previousClassName:"page-item prev-item",pageCount:Math.ceil(p.length/7)||1,onPageChange:o=>d(o),containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"}),paginationDefaultPage:r+1,paginationRowsPerPageOptions:[10,25,50,100]})})]})},ze=()=>a(c.exports.Fragment,{children:[e(K,{title:"Datatables Basic",data:[{title:"Datatables"},{title:"Datatables Basic"}]}),a(M,{children:[e(N,{sm:"12",children:e(Ce,{})}),e(N,{sm:"12",children:e(fe,{})}),e(N,{sm:"12",children:e(we,{})}),e(N,{sm:"12",children:e(he,{})}),e(N,{sm:"12",children:e(Le,{})})]})]});export{ze as default};

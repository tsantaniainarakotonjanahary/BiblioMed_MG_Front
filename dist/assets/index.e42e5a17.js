import{r as s,o as n,d6 as h,j as e,a8 as m,a9 as g,K as f,ab as I}from"./index.e711043e.js";import"./index.97dfbaed.js";import"./index.51d05e01.js";import{r as z,v as A,s as F,u as B,g as G}from"./firebase.2b356575.js";import{bH as y,A as O,C as R,X as $}from"./App.c3ad3f0b.js";import"./tslib.a55e5242.js";const q=({t:o,message:i})=>n("div",{className:"d-flex",children:[e("div",{className:"me-1",children:e(O,{size:"sm",color:"success",icon:e(R,{size:12})})}),n("div",{className:"d-flex flex-column",children:[e("div",{className:"d-flex justify-content-between",children:e($,{size:12,className:"cursor-pointer",onClick:()=>I.dismiss(o.id)})}),n("span",{children:[i," "]})]})]}),W=()=>{const[o,i]=s.exports.useState(null),[a,b]=s.exports.useState(""),u=s.exports.useRef(null),[p,d]=s.exports.useState([]),[c,v]=s.exports.useState([]);console.log(c),s.exports.useEffect(()=>{(async()=>{fetch("https://bibliotheque-medical-back.vercel.app/entite",{method:"GET",headers:{"Content-Type":"application/json","x-auth-token":localStorage.getItem("token")}}).then(r=>r.json()).then(r=>{d(r)}).catch(r=>{console.error(r)})})()},[]);const[C,D]=s.exports.useState(!1),[k,j]=s.exports.useState(""),[S,U]=s.exports.useState(""),E=()=>{if(D(!0),o==null)return;const t=z(F,`${a}/${o.name+A()}`);B(t,o).then(r=>{G(r.ref).then(x=>{fetch("https://bibliotheque-medical-back.vercel.app/file",{method:"POST",headers:{"Content-Type":"application/json","x-auth-token":localStorage.getItem("token")},body:JSON.stringify({dossier:a,lien:x,nom:o.name,titre:S,description:k,visibilite:c,user:{nom:localStorage.getItem("userData").nom,prenom:localStorage.getItem("userData").prenom,profil:localStorage.getItem("userData").profil,iduser:localStorage.getItem("userData")._id,role:localStorage.getItem("userData").role,entite:localStorage.getItem("userData").entite,idEntite:localStorage.getItem("userData").idEntite}})}).then(l=>l.json()).then(l=>{console.log(l),I(w=>e(q,{t:w,message:l.message}))}).catch(l=>{console.error(l)})})})},T=t=>{u.current.click()},N=t=>{const r=t.target.files[0];i(r)},L=t=>{const r=t.target.value,x=t.target.checked;v(x?[...c,r]:c.filter(l=>l!==r))};return n("div",{style:{width:"100%"},children:[n(h,{children:[e(m,{children:"Visibilite par entite"}),p.map(({_id:t,nom:r})=>e(h,{check:!0,inline:!0,children:n(m,{check:!0,children:[e(g,{type:"checkbox",id:t,value:t,checked:c.includes(t),onChange:L}),r]})},t))]}),e("div",{children:e(V,{directory:a,setDirectory:b})}),n(h,{children:[e(m,{for:"description",children:"Description"}),e(g,{type:"textarea",name:"description",id:"description",rows:"3",value:k,onChange:t=>j(t.target.value)})]}),n(h,{children:[e(m,{for:"titre",children:"Titre"}),e(g,{type:"textarea",name:"titre",id:"titre",rows:"1",value:S,onChange:t=>U(t.target.value)})]}),e("h3",{children:"Upload"}),n(f,{onClick:T,outline:!0,children:[e(y,{size:16}),e("span",{style:{marginLeft:10},children:o?o==null?void 0:o.name:"Choisissez un fichier \xE0 uploader ..."})]}),e("br",{}),e("br",{}),e("br",{}),e("input",{type:"file",ref:u,style:{display:"none"},onChange:N}),o&&a?n("div",{children:[e(f,{disabled:C,onClick:()=>{E()},children:C?"LOADING":e(y,{})}),e("br",{})," ",e("br",{})]}):e(f,{disabled:!0,style:{backgroundColor:"#d7d7d7",color:"#9d9d9d"},children:e(y,{})})]})},P=({value:o,onChange:i})=>e(g,{type:"text",value:o,onChange:i,style:{marginBottom:"10px"}}),V=({directory:o,setDirectory:i})=>{const a=o.split("/"),b=(p,d)=>{a[p]=d,i(a.join("/"))},u=()=>{i(o+"/")};return n("div",{children:[a.map((p,d)=>e(P,{value:p,onChange:c=>b(d,c.target.value)},d)),e(f,{color:"primary",onClick:u,style:{marginTop:"10px"},children:"Ajouter une categorie our sous categorie pour repertorier les fichier"}),e("br",{})]})};export{W as default};
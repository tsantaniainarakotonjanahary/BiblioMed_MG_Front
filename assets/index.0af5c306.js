import{r as o,j as e,a4 as s,a5 as p,o as r,aP as f,K as c}from"./index.e711043e.js";import{B as u}from"./url.f99a4482.js";import{C as m}from"./index.97dfbaed.js";import"./index.51d05e01.js";import"./App.c3ad3f0b.js";const C=()=>{const[d,h]=o.exports.useState([]),[a,l]=o.exports.useState(!1);return o.exports.useEffect(()=>{(async()=>{fetch("https://bibliotheque-medical-back.vercel.app/file/non-valides",{method:"GET",headers:{"Content-Type":"application/json","x-auth-token":localStorage.getItem("token")}}).then(i=>i.json()).then(i=>{h(i)}).catch(i=>{console.error(i)})})()},[a]),e(s,{children:e(p,{md:"12",sm:"12",children:r(m,{title:"Fichiers a valider",children:[e("h1",{children:" \xE0 valider"}),r(f,{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Repertoire et categorie "}),e("th",{children:"Titre"}),e("th",{children:"Description"}),e("th",{children:"Fichier"}),e("th",{children:"Date d'ajout"}),e("th",{children:"Utilisateur"}),e("th",{}),e("th",{})]})}),e("tbody",{children:d.map((t,i)=>r("tr",{children:[e("td",{children:t.dossier}),e("td",{children:t.fichier.titre}),e("td",{children:t.fichier.description}),e("td",{children:t.fichier.nom}),e("td",{children:t.fichier.date}),e("td",{children:t.fichier.user.nom}),e("td",{children:r("a",{href:t.fichier.lien,download:!0,children:[" ",e(c,{children:"Voir"})," "]})}),e("td",{children:e(c,{onClick:()=>{(async()=>fetch(`${u}/file/${t._id}/${t.fichier._id}`,{method:"PUT",headers:{"Content-Type":"application/json","x-auth-token":localStorage.getItem("token")}}).then(n=>n.json()).then(n=>l(!a)).catch(n=>console.error(n)))()},children:"Valider"})})]},i))})]})]})})})};export{C as default};

import{r as i,o as f,j as o,a8 as g,ad as v,k as b,a9 as F,ae as E,p as e}from"./index.e711043e.js";import{E as T,b as j}from"./App.c3ad3f0b.js";const B=i.exports.forwardRef((s,r)=>{const{label:a,hideIcon:n,showIcon:p,visible:w,className:c,htmlFor:l,placeholder:x,iconSize:d,inputClassName:u,invalid:m,...I}=s,[t,N]=i.exports.useState(w),y=()=>{const h=d||14;return t===!1?n||o(T,{size:h}):p||o(j,{size:h})};return f(i.exports.Fragment,{children:[a?o(g,{className:"form-label",for:l,children:a}):null,f(v,{className:b({[c]:c,"is-invalid":m}),children:[o(F,{ref:r,invalid:m,type:t===!1?"password":"text",placeholder:x||"\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",className:b({[u]:u}),...a&&l?{id:l}:{},...I}),o(E,{className:"cursor-pointer",onClick:()=>N(!t),children:y()})]})]})});B.propTypes={invalid:e.exports.bool,hideIcon:e.exports.node,showIcon:e.exports.node,visible:e.exports.bool,className:e.exports.string,placeholder:e.exports.string,iconSize:e.exports.number,inputClassName:e.exports.string,label(s,r){if(s[r]&&s.htmlFor==="undefined")throw new Error("htmlFor prop is required when label prop is present")},htmlFor(s,r){if(s[r]&&s.label==="undefined")throw new Error("label prop is required when htmlFor prop is present")}};B.defaultProps={visible:!1};export{B as I};

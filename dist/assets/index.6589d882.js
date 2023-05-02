import{o as r,B as a,j as e,r as n,ce as i,a4 as o,a5 as d,ag as s}from"./index.e711043e.js";import{C as c}from"./index.97dfbaed.js";import{B as g}from"./index.51d05e01.js";import{a6 as m,p as l}from"./App.c3ad3f0b.js";const t=()=>r(a,{color:"primary",href:"#",children:[e(m,{size:12,className:"me-25"}),e("span",{className:"align-middle",children:"Link Badge"})]}),h=()=>r("div",{className:"demo-inline-spacing",children:[e(a,{color:"primary",className:"badge-glow",children:"Primary"}),e(a,{color:"secondary",className:"badge-glow",children:"Secondary"}),e(a,{color:"success",className:"badge-glow",children:"Success"}),e(a,{color:"danger",className:"badge-glow",children:"Danger"}),e(a,{color:"warning",className:"badge-glow",children:"Warning"}),e(a,{color:"info",className:"badge-glow",children:"Info"}),e(a,{color:"dark",className:"badge-glow",children:"Dark"})]}),B=()=>e(a,{color:"primary",className:"d-block",children:e("span",{children:"Block Badge"})}),p=()=>r("div",{className:"demo-inline-spacing",children:[r(a,{color:"primary",children:[e(l,{size:12,className:"align-middle me-25"}),e("span",{className:"align-middle ms-25",children:"Primary"})]}),r(a,{color:"secondary",children:[e(l,{size:12,className:"align-middle me-25"}),e("span",{className:"align-middle ms-25",children:"Secondary"})]}),r(a,{color:"success",children:[e(l,{size:12,className:"align-middle me-25"}),e("span",{className:"align-middle ms-25",children:"Success"})]}),r(a,{color:"danger",children:[e(l,{size:12,className:"align-middle me-25"}),e("span",{className:"align-middle ms-25",children:"Danger"})]}),r(a,{color:"warning",children:[e(l,{size:12,className:"align-middle me-25"}),e("span",{className:"align-middle ms-25",children:"Warning"})]}),r(a,{color:"info",children:[e(l,{size:12,className:"align-middle me-25"}),e("span",{className:"align-middle ms-25",children:"Info"})]}),r(a,{color:"dark",children:[e(l,{size:12,className:"align-middle me-25"}),e("span",{className:"align-middle ms-25",children:"Dark"})]})]}),N=()=>r("div",{className:"demo-inline-spacing",children:[e(a,{color:"light-primary",children:"Primary"}),e(a,{color:"light-secondary",children:"Secondary"}),e(a,{color:"light-success",children:"Success"}),e(a,{color:"light-danger",children:"Danger"}),e(a,{color:"light-warning",children:"Warning"}),e(a,{color:"light-info",children:"Info"}),e(a,{color:"light-dark",children:"Dark"})]}),u=()=>r("div",{className:"demo-inline-spacing",children:[e(a,{color:"primary",children:"Primary"}),e(a,{color:"secondary",children:"Secondary"}),e(a,{color:"success",children:"Success"}),e(a,{color:"danger",children:"Danger"}),e(a,{color:"warning",children:"Warning"}),e(a,{color:"info",children:"Info"}),e(a,{color:"dark",children:"Dark"})]}),f=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Badge } from 'reactstrap'

const BadgeContextual = () => {
  return (
    <React.Fragment>
      <Badge color='primary'>
        Primary
      </Badge>
      <Badge color='secondary'>
        Secondary
      </Badge>
      <Badge color='success'>
        Success
      </Badge>
      <Badge color='danger'>
        Danger
      </Badge>
      <Badge color='warning'>
        Warning
      </Badge>
      <Badge color='info'>
        Info
      </Badge>
      <Badge color='dark'>
        Dark
      </Badge>
    </React.Fragment>
  )
}
export default BadgeContextual
`})}),k=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Badge } from 'reactstrap'

const BadgeGlow = () => {
  return (
    <React.Fragment>
      <Badge color='primary' className='badge-glow'>
        Primary
      </Badge>
      <Badge color='secondary' className='badge-glow'>
        Secondary
      </Badge>
      <Badge color='success' className='badge-glow'>
        Success
      </Badge>
      <Badge color='danger' className='badge-glow'>
        Danger
      </Badge>
      <Badge color='warning' className='badge-glow'>
        Warning
      </Badge>
      <Badge color='info' className='badge-glow'>
        Info
      </Badge>
      <Badge color='dark' className='badge-glow'>
        Dark
      </Badge>
    </React.Fragment>
  )
}
export default BadgeGlow
`})}),y=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Badge } from 'reactstrap'

const BadgeLight = () => {
  return (
    <React.Fragment>
      <Badge color='light-primary'>
        Primary
      </Badge>
      <Badge color='light-secondary'>
        Secondary
      </Badge>
      <Badge color='light-success'>
        Success
      </Badge>
      <Badge color='light-danger'>
        Danger
      </Badge>
      <Badge color='light-warning'>
        Warning
      </Badge>
      <Badge color='light-info'>
        Info
      </Badge>
      <Badge color='light-dark'>
        Dark
      </Badge>
    </React.Fragment>
  )
}
export default BadgeLight
`})}),w=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Badge } from 'reactstrap'
import { Star } from 'react-feather'

const BadgeIcons = () => {
  return (
    <React.Fragment>
      <Badge color='primary'>
        <Star size={12} className='align-middle me-25' />
        <span className='align-middle'>Primary</span>
      </Badge>
      <Badge color='secondary'>
        <Star size={12} className='align-middle me-25' />
        <span className='align-middle'>Secondary</span>
      </Badge>
      <Badge color='success'>
        <Star size={12} className='align-middle me-25' />
        <span className='align-middle'>Success</span>
      </Badge>
      <Badge color='danger'>
        <Star size={12} className='align-middle me-25' />
        <span className='align-middle'>Danger</span>
      </Badge>
      <Badge color='warning'>
        <Star size={12} className='align-middle me-25' />
        <span className='align-middle'>Warning</span>
      </Badge>
      <Badge color='info'>
        <Star size={12} className='align-middle me-25' />
        <span className='align-middle'>Info</span>
      </Badge>
      <Badge color='dark'>
        <Star size={12} className='align-middle me-25' />
        <span className='align-middle'>Dark</span>
      </Badge>
    </React.Fragment>
  )
}
export default BadgeIcons
`})}),b=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Badge } from 'reactstrap'
import { Link } from 'react-feather'

const BadgeLink = () => {
  return (
    <Badge color='primary' href='#'>
      <Link size={12} className='me-25' />
      <span>Link Badge</span>
    </Badge>
  )
}
export default BadgeLink
`})}),S=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Badge } from 'reactstrap'

const BadgeBlock = () => {
  return (
    <Badge color='primary' className='d-block'>
      <span>Block Badge</span>
    </Badge>
  )
}
export default BadgeBlock
`})}),I=()=>(n.exports.useEffect(()=>{i.highlightAll()},[]),r(n.exports.Fragment,{children:[e(g,{title:"Badges",data:[{title:"Components"},{title:"Badges"}]}),r(o,{children:[e(d,{sm:"12",children:r(c,{title:"Contextual Badges",code:f,children:[r(s,{className:"mb-0",children:["Use prop ",e("code",{children:"color"})," with ",e("code",{children:"Badge"})," tag to create badge with different colors."]}),e(u,{})]})}),e(d,{sm:"12",children:r(c,{title:"Glow Badges",code:k,children:[r(s,{className:"mb-0",children:["Use class ",e("code",{children:"badge-glow"})," with ",e("code",{children:"Badge"})," tag to add glow effect to your badge"]}),e(h,{})]})}),e(d,{sm:"12",children:r(c,{title:"Light Badges",code:y,children:[r(s,{className:"mb-0",children:["Use prop ",e("code",{children:'color="light-COLOR_NAME"'})," with ",e("code",{children:"Badge"})," tag to create badge with different colors."]}),e(N,{})]})}),e(d,{sm:"12",children:e(c,{title:"Badges With Icons",code:w,children:e(p,{})})})]}),r(o,{children:[e(d,{md:"6",sm:"12",children:r(c,{title:"Link Badge",code:b,children:[r(s,{children:["Use ",e("code",{children:'href="#"'})," prop to use badge as a link."]}),e(t,{})]})}),e(d,{md:"6",sm:"12",children:r(c,{title:"Block Badge",code:S,children:[r(s,{children:["Use ",e("code",{children:".d-block"})," class to make badge display as block."]}),e(B,{})]})})]})]}));export{I as default};

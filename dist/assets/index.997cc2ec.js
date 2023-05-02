import{o as i,bQ as c,j as e,G as a,H as r,r as v,ce as l,a4 as N,a5 as n,ag as t}from"./index.e711043e.js";import{C as d}from"./index.97dfbaed.js";import{B as h}from"./index.51d05e01.js";import"./App.c3ad3f0b.js";const s=()=>i(c,{className:"justify-content-end",children:[e(a,{children:e(r,{href:"#",active:!0,children:"Active"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{disabled:!0,href:"#",children:"Disabled"})})]}),o=()=>i(c,{children:[e(a,{children:e(r,{href:"#",active:!0,children:"Active"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{disabled:!0,href:"#",children:"Disabled"})})]}),m=()=>i(c,{className:"wrap-border",children:[e(a,{children:e(r,{href:"#",active:!0,children:"Active"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{disabled:!0,href:"#",children:"Disabled"})})]}),k=()=>i(c,{className:"justify-content-center",children:[e(a,{children:e(r,{href:"#",active:!0,children:"Active"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{disabled:!0,href:"#",children:"Disabled"})})]}),L=()=>i(c,{vertical:!0,className:"wrap-border square-border",children:[e(a,{children:e(r,{href:"#",active:!0,children:"Active"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e("li",{className:"dropdown-divider",children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{disabled:!0,href:"#",children:"Disabled"})})]}),f=()=>i(c,{vertical:!0,children:[e(a,{children:e(r,{href:"#",active:!0,children:"Active"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{disabled:!0,href:"#",children:"Disabled"})})]}),u=()=>i(c,{vertical:!0,className:"wrap-border square-border",children:[e(a,{children:e(r,{href:"#",active:!0,children:"Active"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{disabled:!0,href:"#",children:"Disabled"})})]}),I=()=>i(c,{vertical:!0,className:"wrap-border",children:[e(a,{children:e(r,{href:"#",active:!0,children:"Active"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{disabled:!0,href:"#",children:"Disabled"})})]}),p=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavBasic = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavBasic
  `})}),b=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavBorder = () => {
  return (
    <Nav className='wrap-border'>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavBorder
  `})}),g=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavCenter = () => {
  return (
    <Nav className='justify-content-center'>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavCenter
  `})}),w=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavEnd = () => {
  return (
    <Nav className='justify-content-end'>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavEnd
  `})}),x=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavVertical = () => {
  return (
    <Nav vertical>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavVertical
  `})}),B=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavVerticalBorder = () => {
  return (
    <Nav vertical className='wrap-border'>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavVerticalBorder
  `})}),D=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavSquareBorder = () => {
  return (
    <Nav vertical className='wrap-border square-border'>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavSquareBorder
  `})}),A=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavDivider = () => {
  return (
    <Nav vertical className='wrap-border square-border'>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem className='dropdown-divider'>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavDivider
  `})}),V=()=>(v.exports.useEffect(()=>{l.highlightAll()},[]),i(v.exports.Fragment,{children:[e(h,{title:"Navs",data:[{title:"Components"},{title:"Navs"}]}),i(N,{className:"match-height",children:[e(n,{md:"6",sm:"12",children:i(d,{title:"Base Nav",code:p,children:[e(t,{children:"The base nav component provides a strong foundation for building all types of navigation components."}),e(o,{})]})}),e(n,{md:"6",sm:"12",children:i(d,{title:"With Border",code:b,children:[i(t,{children:["Use Class ",e("code",{children:".wrap-border"})," with your ",e("code",{children:"nav"})," tag to wrap your nav with a border"]}),e(m,{})]})}),e(n,{md:"6",sm:"12",children:i(d,{title:"Center Alignment",code:g,children:[i(t,{children:["Use Class ",e("code",{children:".justify-content-center"})," with your ",e("code",{children:"nav"})," tag to align your nav to center."]}),e(k,{})]})}),e(n,{md:"6",sm:"12",children:i(d,{title:"End Alignment",code:w,children:[i(t,{children:["Use Class ",e("code",{children:".justify-content-end"})," with your ",e("code",{children:"nav"})," tag to align your nav to End."]}),e(s,{})]})}),e(n,{md:"6",sm:"12",children:i(d,{title:"Vertical Nav",code:x,children:[i(t,{children:["Use prop ",e("code",{children:"vertical"})," with nav tag to make it vertical."]}),e(f,{})]})}),e(n,{md:"6",sm:"12",children:i(d,{title:"Vertical Nav With Border",code:B,children:[i(t,{children:["To wrap with border, use ",e("code",{children:".wrap-border class"}),"."]}),e(I,{})]})}),e(n,{md:"6",sm:"12",children:i(d,{title:"Nav With square Border",code:D,children:[i(t,{children:["To wrap with square border, use ",e("code",{children:".square-border"})," class with ",e("code",{children:".wrap-border"})," class."]}),e(u,{})]})}),e(n,{md:"6",sm:"12",children:i(d,{title:"Nav With Divider",code:A,children:[i(t,{children:["To add divider, use ",e("code",{children:".dropdown-divider"})," class to ",e("code",{children:"NavItem"})]}),e(L,{})]})})]})]}));export{V as default};

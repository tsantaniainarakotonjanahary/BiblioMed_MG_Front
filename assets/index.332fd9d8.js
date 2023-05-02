import{j as i,o as e,r as d,ce as s,a4 as c,a5 as r,ag as t}from"./index.e711043e.js";import{C as a}from"./index.97dfbaed.js";import{B as v}from"./index.51d05e01.js";import{b0 as l,p as n,r as o,bm as m,n as h}from"./App.c3ad3f0b.js";const u=()=>i("div",{className:"divider",children:i("div",{className:"divider-text",children:"My Text"})}),N=()=>e(d.exports.Fragment,{children:[i("div",{className:"divider divider-start",children:i("div",{className:"divider-text",children:i(l,{size:15})})}),i("div",{className:"divider divider-start-center",children:i("div",{className:"divider-text",children:i(n,{size:15})})}),i("div",{className:"divider",children:i("div",{className:"divider-text",children:i(o,{size:15})})}),i("div",{className:"divider divider-end-center",children:i("div",{className:"divider-text",children:i(m,{size:15})})}),i("div",{className:"divider divider-end",children:i("div",{className:"divider-text",children:i(h,{size:15})})})]}),x=()=>e(d.exports.Fragment,{children:[i("div",{className:"divider divider-dotted",children:i("div",{className:"divider-text",children:"Dotted"})}),i("div",{className:"divider divider-dashed",children:i("div",{className:"divider-text",children:"Dashed"})}),i("div",{className:"divider",children:i("div",{className:"divider-text",children:"Solid"})})]}),p=()=>e(d.exports.Fragment,{children:[i("div",{className:"divider",children:i("div",{className:"divider-text",children:"Default"})}),i("div",{className:"divider divider-primary",children:i("div",{className:"divider-text",children:"Primary"})}),i("div",{className:"divider divider-secondary",children:i("div",{className:"divider-text",children:"Secondary"})}),i("div",{className:"divider divider-success",children:i("div",{className:"divider-text",children:"Success"})}),i("div",{className:"divider divider-danger",children:i("div",{className:"divider-text",children:"Danger"})}),i("div",{className:"divider divider-warning",children:i("div",{className:"divider-text",children:"Warning"})}),i("div",{className:"divider divider-info",children:i("div",{className:"divider-text",children:"Info"})}),i("div",{className:"divider divider-dark",children:i("div",{className:"divider-text",children:"Dark"})})]}),g=()=>e(d.exports.Fragment,{children:[i("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),i("hr",{}),i("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),D=()=>e(d.exports.Fragment,{children:[i("div",{className:"divider divider-start",children:i("div",{className:"divider-text",children:"Start"})}),i("div",{className:"divider divider-start-center",children:i("div",{className:"divider-text",children:"Start Center"})}),i("div",{className:"divider",children:i("div",{className:"divider-text",children:"Center(Default)"})}),i("div",{className:"divider divider-end-center",children:i("div",{className:"divider-text",children:"End Center"})}),i("div",{className:"divider divider-end",children:i("div",{className:"divider-text",children:"End"})})]}),f=i("pre",{children:i("code",{className:"language-jsx",children:`


const DividerDefault = () => {
  return (
    <React.Fragment>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </React.Fragment>
  )
}
export default DividerDefault
`})}),C=i("pre",{children:i("code",{className:"language-jsx",children:`


const DividerText = () => {
  return (
    <div className='divider'>
      <div className='divider-text'>My Text</div>
    </div>
  )
}
export default DividerText
`})}),y=i("pre",{children:i("code",{className:"language-jsx",children:`
import { Fragment } from 'react'

const DividerPosition = () => {
  return (
    <Fragment>
      <div className='divider divider-start'>
        <div className='divider-text'>Start</div>
      </div>

      <div className='divider divider-start-center'>
        <div className='divider-text'>Start Center</div>
      </div>

      <div className='divider'>
        <div className='divider-text'>Center(Default)</div>
      </div>

      <div className='divider divider-end-center'>
        <div className='divider-text'>End Center</div>
      </div>

      <div className='divider divider-end'>
        <div className='divider-text'>End</div>
      </div>
    </Fragment>
  )
}
export default DividerPosition

`})}),S=i("pre",{children:i("code",{className:"language-jsx",children:`


const DividerColors = () => {
  return (
    <React.Fragment>
      <div className='divider'>
        <div className='divider-text'>Default</div>
      </div>
      <div className='divider divider-primary'>
        <div className='divider-text'>Primary</div>
      </div>
      <div className='divider divider-secondary'>
        <div className='divider-text'>Secondary</div>
      </div>
      <div className='divider divider-success'>
        <div className='divider-text'>Success</div>
      </div>
      <div className='divider divider-danger'>
        <div className='divider-text'>Danger</div>
      </div>
      <div className='divider divider-warning'>
        <div className='divider-text'>Warning</div>
      </div>
      <div className='divider divider-info'>
        <div className='divider-text'>Info</div>
      </div>
      <div className='divider divider-light'>
        <div className='divider-text'>Light</div>
      </div>
      <div className='divider divider-dark'>
        <div className='divider-text'>Dark</div>
      </div>
    </React.Fragment>
  )
}
export default DividerColors
`})}),F=i("pre",{children:i("code",{className:"language-jsx",children:`

import { Fragment } from 'react'
import { ArrowDown, Star, Check, XCircle, Clock } from 'react-feather'

const DividerIcon = () => {
  return (
    <Fragment>
      <div className='divider divider-start'>
        <div className='divider-text'>
          <ArrowDown size={15} />
        </div>
      </div>

      <div className='divider divider-start-center'>
        <div className='divider-text'>
          <Star size={15} />
        </div>
      </div>

      <div className='divider'>
        <div className='divider-text'>
          <Check size={15} />
        </div>
      </div>

      <div className='divider divider-end-center'>
        <div className='divider-text'>
          <XCircle size={15} />
        </div>
      </div>

      <div className='divider divider-end'>
        <div className='divider-text'>
          <Clock size={15} />
        </div>
      </div>
    </Fragment>
  )
}
export default DividerIcon

`})}),w=i("pre",{children:i("code",{className:"language-jsx",children:`


const DividerStyle = () => {
  return (
    <React.Fragment>
      <div className='divider divider-dotted'>
        <div className='divider-text'>Dotted</div>
      </div>

      <div className='divider divider-dashed'>
        <div className='divider-text'>Dashed</div>
      </div>

      <div className='divider'>
        <div className='divider-text'>Solid</div>
      </div>
    </React.Fragment>
  )
}
export default DividerStyle
`})}),j=()=>(d.exports.useEffect(()=>{s.highlightAll()},[]),e(d.exports.Fragment,{children:[i(v,{title:"Divider",data:[{title:"Components"},{title:"Divider"}]}),e(c,{children:[i(r,{sm:"12",children:e(a,{title:"Default",code:f,children:[e(t,{children:["You can add a line to divide your section using ",i("code",{children:"<hr />"})," tag."]}),i(g,{})]})}),i(r,{sm:"12",children:e(a,{title:"Text",code:C,children:[e(t,{children:["Use class ",i("code",{children:".divider"})," as wrapper for ",i("code",{children:".divider-text"})," to create a divider text"]}),i(u,{})]})}),i(r,{sm:"12",children:e(a,{title:"Position",code:y,children:[e(t,{children:["Use class ",i("code",{children:".divider-[start | start-center | end | end-center]"})," with ",i("code",{children:".divider"})," to set text position."]}),i(D,{})]})}),i(r,{sm:"12",children:e(a,{title:"Colors",code:S,children:[e(t,{children:["Use class ",i("code",{children:".divider-[primary | secondary | success | danger | warnings | info | dark]"})," with"," ",i("code",{children:".divider"})," to set text position."]}),i(p,{})]})}),i(r,{sm:"12",children:i(a,{title:"Icons",code:F,children:i(N,{})})}),i(r,{sm:"12",children:e(a,{title:"Style",code:w,children:[e(t,{children:["use class ",i("code",{children:".divider-[dotted | dashed]"})," to change divider style. solid is default style you don't have to add any class for it."]}),i(x,{})]})})]})]}));export{j as default};

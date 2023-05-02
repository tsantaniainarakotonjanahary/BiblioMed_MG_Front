import{j as e,bs as a,o as l,r as s,a8 as h,a9 as u,cI as g,ce as f,a4 as v,a5 as r,ag as i}from"./index.e711043e.js";import{C as o}from"./index.97dfbaed.js";import{B as b}from"./index.51d05e01.js";import{p as N,bh as A}from"./App.c3ad3f0b.js";const k=()=>e("div",{className:"demo-spacing-0",children:e(a,{color:"primary",children:l("div",{className:"alert-body d-flex align-items-center",children:[e(N,{size:15}),e("span",{className:"ms-50",children:"Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer."})]})})}),y=()=>e("div",{className:"demo-spacing-0",children:l(a,{color:"warning",children:[e("h4",{className:"alert-heading",children:"Lorem ipsum dolor sit amet"}),l("div",{className:"alert-body",children:["Lorem ipsum dolor sit amet"," ",e("a",{className:"alert-link",href:"/",onClick:t=>t.preventDefault(),children:"consectetur"})," ","adipisicing elit. Ducimus, laborum!."]})]})}),I=()=>l("div",{className:"demo-spacing-0",children:[l(a,{color:"primary",children:[e("h4",{className:"alert-heading",children:"Primary"}),e("div",{className:"alert-body",children:"Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."})]}),l(a,{color:"secondary",children:[e("h4",{className:"alert-heading",children:"Secondary"}),e("div",{className:"alert-body",children:"Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."})]}),l(a,{color:"success",children:[e("h4",{className:"alert-heading",children:"Success"}),e("div",{className:"alert-body",children:"Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."})]}),l(a,{color:"danger",children:[e("h4",{className:"alert-heading",children:"Danger"}),e("div",{className:"alert-body",children:"Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."})]}),l(a,{color:"warning",children:[e("h4",{className:"alert-heading",children:"Warning"}),e("div",{className:"alert-body",children:"Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."})]}),l(a,{color:"info",children:[e("h4",{className:"alert-heading",children:"Info"}),e("div",{className:"alert-body",children:"Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."})]}),l(a,{color:"dark",children:[e("h4",{className:"alert-heading",children:"Dark"}),e("div",{className:"alert-body",children:"Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."})]})]}),w=()=>{const[t,n]=s.exports.useState(!0),[d,p]=s.exports.useState(""),m=c=>{p(c.target.value),c.target.value.length>0&&isNaN(c.target.value)?n(!0):n(!1)};return l("div",{className:"demo-spacing-0",children:[l("div",{className:"mb-2",children:[e(h,{className:"form-label",htmlFor:"numbers",children:"Enter numbers only"}),e(u,{className:"w-25 h-25 ps-1",placeholder:"0123456789",value:d,onChange:c=>m(c)})]}),e(a,{color:"danger",isOpen:t,children:l("div",{className:"alert-body",children:[e(A,{size:15})," ",l("span",{className:"ms-1",children:["The value is ",e("strong",{children:"invalid"})," you can only enter numbers"]})]})})]})},x=()=>e("div",{className:"demo-spacing-0",children:e(a,{color:"primary",children:l("div",{className:"alert-body",children:[e("span",{className:"fw-bold",children:"Good Morning!"}),e("span",{children:" Start your day with some alerts."})]})})}),T=()=>{const[t,n]=s.exports.useState(!0);return e("div",{className:"demo-spacing-0",children:e(a,{color:"primary",isOpen:t,toggle:()=>n(!1),children:e("div",{className:"alert-body",children:"Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer."})})})},C=()=>e("div",{className:"demo-spacing-0",children:e(g,{color:"primary",children:e("div",{className:"alert-body",children:"Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer."})})}),S=e("pre",{className:"language-jsx",children:e("code",{className:"language-jsx",children:`

import { Alert } from 'reactstrap'

const DefaultAlert = () => {
  return (
    <React.Fragment>
      <Alert color='primary'>
        <div className='alert-body'>
          <span className='fw-bold'>Good Morning!</span>
          <span> Start your day with some alerts.</span>
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default DefaultAlert
  `})}),L=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Alert } from 'reactstrap'

const AlertTitle = () => {
  return (
      <Alert color='warning'>
        <h4 className='alert-heading'>Lorem ipsum dolor sit amet</h4>
        <div className='alert-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum!.</div>
      </Alert>
  )
}
export default AlertTitle
`})}),D=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Alert } from 'reactstrap'

const AlertColors = () => {
  return (
    <React.Fragment>
      <Alert color='primary'>
        <h4 className='alert-heading'>Primary</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='secondary'>
        <h4 className='alert-heading'>Secondary</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='success'>
        <h4 className='alert-heading'>Success</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='danger'>
        <h4 className='alert-heading'>Danger</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='warning'>
        <h4 className='alert-heading'>Warning</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='info'>
        <h4 className='alert-heading'>Info</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='dark'>
        <h4 className='alert-heading'>Dark</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default AlertColors
`})}),F=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import { Alert } from 'reactstrap'

const AlertDismissable = () => {
  const [visible, setVisible] = useState(true)

  return (
    <React.Fragment>
      <Alert color='info' isOpen={visible} toggle={() => setVisible(false)}>
        <div className='alert-body'>
          Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default AlertDismissable
    `})}),W=e("pre",{children:e("code",{className:"language-jsx",children:`

import { UncontrolledAlert } from 'reactstrap'

const AlertUncontrolled = () => {
  return (
    <React.Fragment>
      <UncontrolledAlert color='danger'>
        <div className='alert-body'>
          Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
        </div>
      </UncontrolledAlert>
    </React.Fragment>
  )
}
export default AlertUncontrolled
      `})}),q=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Alert } from 'reactstrap'
import { Star } from 'react-feather'

const AlertIcon = () => {
  return (
    <React.Fragment>
      <Alert color='primary'>
        <div className='alert-body'>
          <Star size={15} />
          <span className='ms-1'>
            Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
          </span>
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default AlertIcon
        `})}),R=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import { Alert,  Label, Input } from 'reactstrap'
import { AlertCircle } from 'react-feather'

const AlertExample = () => {
  const [inputTerm, setInputTerm] = useState('')
  const [visible, setVisible] = useState('')

  const handleInput = e => {
    setInputTerm(e.target.value)

    if (e.target.value.length > 0 && isNaN(e.target.value)) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  return (
    <React.Fragment>
      <div className='mb-2'>
        <Label className='form-label' htmlFor='numbers'>Enter numbers only</Label>
        <Input
          className='w-25 h-25 ps-1'
          placeholder='0123456789'
          value={inputTerm}
          onChange={e => handleInput(e)}
        />
      </div>
      <Alert color='danger' isOpen={visible}>
        <div className='alert-body'>
          <AlertCircle size={15} />{' '}
          <span className='ms-1'>
            the value is <strong>invalid</strong> you can only enter numbers
          </span>
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default AlertExample
        `})}),J=()=>(s.exports.useEffect(()=>{f.highlightAll()},[]),l(s.exports.Fragment,{children:[e(b,{title:"Alerts",data:[{title:"Components"},{title:"Alerts"}]}),l(v,{children:[e(r,{sm:"12",children:l(o,{title:"Default",code:S,children:[l(i,{children:["Alerts are available for any length of text, as well as an optional dismiss button. Use ",e("code",{children:"Alert"})," ","Component & ",e("code",{children:"color"})," prop for alert with all theme colors."]}),e(x,{})]})}),e(r,{sm:"12",children:l(o,{title:"Title",code:L,children:[l(i,{children:["Add a title to the alert with the ",e("code",{children:".alert-heading"})]}),e(y,{})]})}),e(r,{sm:"12",children:l(o,{title:"Colors",code:D,children:[l(i,{children:["Use ",e("code",{children:"color"})," prop to for alert with all theme colors."]}),e(I,{})]})}),e(r,{sm:"12",children:l(o,{title:"Dismissable Alert",code:F,children:[l(i,{children:["Using ",e("code",{children:"isOpen"})," and ",e("code",{children:"toggle"})," you can create a dismissable alert."]}),e(T,{})]})}),e(r,{sm:"12",children:l(o,{title:"Uncontrolled Alert",code:W,children:[e(i,{children:"For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. UncontrolledAlert does not require isOpen nor toggle props to work."}),e(C,{})]})}),e(r,{sm:"12",children:e(o,{title:"Icon",code:q,children:e(k,{})})}),e(r,{sm:"12",children:l(o,{title:"Example",code:R,children:[e(i,{children:"An example would be to have an input and when a condition is met, show the alert."}),e(w,{})]})})]})]}));export{J as default};

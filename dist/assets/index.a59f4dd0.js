import{o as t,j as o,K as e,b9 as l,r as n,d1 as s,ce as m,a4 as a,a5 as i,ag as r}from"./index.e711043e.js";import{C as p}from"./index.97dfbaed.js";import{B as h}from"./index.51d05e01.js";import"./App.c3ad3f0b.js";const g=()=>t("div",{className:"demo-inline-spacing",children:[o(e,{color:"primary",outline:!0,id:"positionTop",children:"Top"}),o(l,{placement:"top",target:"positionTop",children:"Tooltip on Top"}),o(e,{color:"primary",outline:!0,id:"positionRight",children:"Right"}),o(l,{placement:"right",target:"positionRight",children:"Tooltip on Right"}),o(e,{color:"primary",outline:!0,id:"positionBottom",children:"Bottom"}),o(l,{placement:"bottom",target:"positionBottom",children:"Tooltip on Bottom"}),o(e,{color:"primary",outline:!0,id:"positionLeft",children:"Left"}),o(l,{placement:"left",target:"positionLeft",children:"Tooltip on Left"})]}),T=()=>{const[c,d]=n.exports.useState(!1);return t(n.exports.Fragment,{children:[o(e,{color:"primary",id:"ControlledExample",children:"Controlled"}),o(s,{placement:"top",isOpen:c,target:"ControlledExample",toggle:()=>d(!c),children:"Hello World !"})]})},u=()=>t(n.exports.Fragment,{children:[o(e,{color:"primary",id:"UnControlledExample",children:"Uncontrolled"}),o(l,{placement:"top",target:"UnControlledExample",children:"Hello World !"})]}),f=o("pre",{children:o("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import { Button, Tooltip } from 'reactstrap'

const TooltipControlled = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false)

  return (
    <React.Fragment>
      <Button color='primary' id='ControlledExample'>
        Controlled
      </Button>
      <Tooltip
        placement='top'
        isOpen={tooltipOpen}
        target='ControlledExample'
        toggle={() => setTooltipOpen(!tooltipOpen)}
      >
        Hello World !
      </Tooltip>
    </React.Fragment>
  )
}
export default TooltipControlled
`})}),B=o("pre",{children:o("code",{className:"language-jsx",children:`

import { Button, UncontrolledTooltip } from 'reactstrap'

const TooltipUncontrolled = () => {
  return (
    <React.Fragment>
      <Button color='primary' id='UnControlledExample'>
        Uncontrolled
      </Button>
      <UncontrolledTooltip placement='top' target='UnControlledExample'>
        Hello World !
      </UncontrolledTooltip>
    </React.Fragment>
  )
}
export default TooltipUncontrolled
`})}),U=o("pre",{children:o("code",{className:"language-jsx",children:`

import { Button, UncontrolledTooltip } from 'reactstrap'

const TooltipPosition = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button color='primary' outline id='positionTop'>
        Top
      </Button>
      <UncontrolledTooltip placement='top' target='positionTop'>
        Tooltip on Top
      </UncontrolledTooltip>

      <Button color='primary' outline id='positionRight'>
        Right
      </Button>
      <UncontrolledTooltip placement='right' target='positionRight'>
        Tooltip on Right
      </UncontrolledTooltip>

      <Button color='primary' outline id='positionBottom'>
        Bottom
      </Button>
      <UncontrolledTooltip placement='bottom' target='positionBottom'>
        Tooltip on Bottom
      </UncontrolledTooltip>

      <Button color='primary' outline id='positionLeft'>
        Left
      </Button>
      <UncontrolledTooltip placement='left' target='positionLeft'>
        Tooltip on Left
      </UncontrolledTooltip>
    </div>
  )
}
export default TooltipPosition
`})}),O=()=>(n.exports.useEffect(()=>{m.highlightAll()},[]),t(n.exports.Fragment,{children:[o(h,{title:"Tooltips",data:[{title:"Components"},{title:"Tooltips"}]}),t(a,{children:[o(i,{xl:"6",lg:"12",children:t(p,{title:"Controlled Tooltip",code:f,children:[t(r,{children:["For controlled tooltips you'll have to manage state of component.controlled tooltips require"," ",o("code",{children:"isOpen"})," and ",o("code",{children:"toggle"})," props to work."]}),o(T,{})]})}),o(i,{xl:"6",lg:"12",children:t(p,{title:"Uncontrolled Tooltip",code:B,children:[t(r,{children:["UncontrolledTooltip does not require ",o("code",{children:"isOpen"})," nor ",o("code",{children:"toggle"})," props to work.All you have to do is provide a valid target to tooltip."]}),o(u,{})]})})]}),o(a,{children:o(i,{sm:"12",children:t(p,{title:"Tooltip Positions",code:U,children:[t(r,{className:"mb-0",children:["Use prop ",o("code",{children:"placement"})," to change position of tooltip."]}),o(g,{})]})})})]}));export{O as default};

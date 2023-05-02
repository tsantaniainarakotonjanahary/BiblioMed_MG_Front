import{o,j as e,K as r,cU as n,cV as t,cW as i,r as p,cX as u,ce as m,a4 as s,a5 as l,ag as a}from"./index.e711043e.js";import{C as c}from"./index.97dfbaed.js";import{B as v}from"./index.51d05e01.js";import"./App.c3ad3f0b.js";const h=()=>o("div",{className:"demo-inline-spacing",children:[e(r,{color:"primary",outline:!0,id:"popFocus",children:"Focus"}),o(n,{trigger:"focus",placement:"top",target:"popFocus",children:[e(t,{children:"Focus Trigger"}),e(i,{children:"Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You cannot select this text as the popover will disappear when you try."})]}),e(r,{color:"primary",outline:!0,id:"popClick",children:"Click"}),o(n,{trigger:"click",placement:"top",target:"popClick",children:[e(t,{children:"Click Trigger"}),e(i,{children:"Clicking on the triggering element makes this popover appear. Clicking on it again will make it disappear. You can select this text, but clicking away (somewhere other than the triggering element) will not dismiss this popover."})]}),e(r,{trigger:"legacy",color:"primary",outline:!0,id:"popLegacy",children:"Legacy"}),o(n,{placement:"top",target:"popLegacy",children:[e(t,{children:"Legacy Trigger"}),e(i,{children:`Legacy is a reactstrap special trigger value (outside of bootstrap's spec/standard). Before reactstrap correctly supported click and focus, it had a hybrid which was very useful and has been brought back as trigger="legacy". One advantage of the legacy trigger is that it allows the popover text to be selected while also closing when clicking outside the triggering element and popover itself.`})]})]}),P=()=>o("div",{className:"demo-inline-spacing",children:[e(r,{color:"primary",outline:!0,id:"popTop",children:"Top"}),o(n,{placement:"top",target:"popTop",children:[e(t,{children:"Popover Top"}),e(i,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]}),e(r,{color:"primary",outline:!0,id:"popRight",children:"Right"}),o(n,{placement:"right",target:"popRight",children:[e(t,{children:"Popover Right"}),e(i,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]}),e(r,{color:"primary",outline:!0,id:"popBottom",children:"Bottom"}),o(n,{placement:"bottom",target:"popBottom",children:[e(t,{children:"Popover Bottom"}),e(i,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]}),e(r,{color:"primary",outline:!0,id:"popLeft",children:"Left"}),o(n,{placement:"left",target:"popLeft",children:[e(t,{children:"Popover Left"}),e(i,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]})]}),y=()=>{const[d,g]=p.exports.useState(!1);return o(p.exports.Fragment,{children:[e(r,{color:"primary",outline:!0,id:"controlledPopover",children:"Controlled"}),o(u,{placement:"top",isOpen:d,target:"controlledPopover",toggle:()=>g(!d),children:[e(t,{children:"Controlled Popover"}),e(i,{children:"Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."})]})]})},B=()=>o(p.exports.Fragment,{children:[e(r,{color:"primary",outline:!0,id:"uncontrolledPopover",children:"Uncontrolled"}),o(n,{placement:"top",target:"uncontrolledPopover",children:[e(t,{children:"Uncontrolled Popover"}),e(i,{children:"Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."})]})]}),f=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'

const PopoverControlled = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)

  return (
    <React.Fragment>
      <Button color='primary' outline id='controlledPopover'>
        Controlled
      </Button>
      <Popover
        placement='top'
        target='controlledPopover'
        isOpen={popoverOpen}
        toggle={() => setPopoverOpen(!popoverOpen)}
      >
        <PopoverHeader>Controlled Popover</PopoverHeader>
        <PopoverBody>
          Macaroon chocolate candy. I love carrot cake gingerbread cake lemon
          drops. Muffin sugar plum marzipan pie.
        </PopoverBody>
      </Popover>
    </React.Fragment>
  )
}
export default PopoverControlled
`})}),k=e("pre",{children:e("code",{className:"language-jsx",children:`

import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody
} from 'reactstrap'

const PopoverUncontrolled = () => {
  return (
    <React.Fragment>
      <Button color='primary' outline id='uncontrolledPopover'>
        Uncontrolled
      </Button>
      <UncontrolledPopover placement='top' target='uncontrolledPopover'>
        <PopoverHeader>Uncontrolled Popover</PopoverHeader>
        <PopoverBody>
          Macaroon chocolate candy. I love carrot cake gingerbread cake lemon
          drops. Muffin sugar plum marzipan pie.
        </PopoverBody>
      </UncontrolledPopover>
    </React.Fragment>
  )
}
export default PopoverUncontrolled
`})}),U=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'

const PopoverPositions = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button color='primary' outline id='popTop'>
        Top
      </Button>
      <UncontrolledPopover placement='top' target='popTop'>
        <PopoverHeader>Popover Top</PopoverHeader>
        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>
      </UncontrolledPopover>

      <Button color='primary' outline id='popRight'>
        Right
      </Button>
      <UncontrolledPopover placement='right' target='popRight'>
        <PopoverHeader>Popover Right</PopoverHeader>
        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>
      </UncontrolledPopover>

      <Button color='primary' outline id='popBottom'>
        Bottom
      </Button>
      <UncontrolledPopover placement='bottom' target='popBottom'>
        <PopoverHeader>Popover Bottom</PopoverHeader>
        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>
      </UncontrolledPopover>

      <Button color='primary' outline id='popLeft'>
        Left
      </Button>
      <UncontrolledPopover placement='left' target='popLeft'>
        <PopoverHeader>Popover Left</PopoverHeader>
        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>
      </UncontrolledPopover>
    </div>
  )
}

export default PopoverPositions
`})}),w=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'

const PopoverTriggers = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button color='primary' outline id='popFocus'>
        Focus
      </Button>
      <UncontrolledPopover trigger='focus' placement='top' target='popFocus'>
        <PopoverHeader>Focus Trigger</PopoverHeader>
        <PopoverBody>
          Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You
          cannot select this text as the popover will disappear when you try.
        </PopoverBody>
      </UncontrolledPopover>

      <Button color='primary' outline id='popClick'>
        Click
      </Button>
      <UncontrolledPopover trigger='click' placement='top' target='popClick'>
        <PopoverHeader>Click Trigger</PopoverHeader>
        <PopoverBody>
          Clicking on the triggering element makes this popover appear. Clicking on it again will make it disappear. You
          can select this text, but clicking away (somewhere other than the triggering element) will not dismiss this
          popover.
        </PopoverBody>
      </UncontrolledPopover>

      <Button trigger='legacy' color='primary' outline id='popLegacy'>
        Legacy
      </Button>
      <UncontrolledPopover placement='top' target='popLegacy'>
        <PopoverHeader>Legacy Trigger</PopoverHeader>
        <PopoverBody>
          Legacy is a reactstrap special trigger value (outside of bootstrap's spec/standard). Before reactstrap
          correctly supported click and focus, it had a hybrid which was very useful and has been brought back as
          trigger="legacy". One advantage of the legacy trigger is that it allows the popover text to be selected while
          also closing when clicking outside the triggering element and popover itself.
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  )
}
export default PopoverTriggers
`})}),H=()=>(p.exports.useEffect(()=>{m.highlightAll()},[]),o(p.exports.Fragment,{children:[e(v,{title:"Popovers",data:[{title:"Components"},{title:"Popovers"}]}),o(s,{children:[e(l,{md:"6",sm:"12",children:o(c,{title:"Controlled Popover",code:f,children:[o(a,{children:["For controlled Popover you'll have to manage state of component. Controlled Popover require"," ",e("code",{children:"isOpen"})," and ",e("code",{children:"toggle"})," props to work."]}),e(y,{})]})}),e(l,{md:"6",sm:"12",children:o(c,{title:"Uncontrolled Popover",code:k,children:[e(a,{children:"You can create an uncontrolled popover without having to manage state. All you have to do is wrap your content inside UncontrolledPopover tag."}),e(B,{})]})})]}),o(s,{children:[e(l,{sm:"12",children:o(c,{title:"Popover Positions",code:U,children:[o(a,{className:"mb-0",children:["Use prop ",e("code",{children:"placement"})," to place you popover at desired position."]}),e(P,{})]})}),e(l,{sm:"12",children:o(c,{title:"Popover Triggers",code:w,children:[o(a,{className:"mb-0",children:["Use prop ",e("code",{children:"trigger"})," for various trigger options. Trigger each popover to see information about the trigger."]}),e(h,{})]})})]})]}));export{H as default};

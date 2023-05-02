import{j as e,r as c,o as s,K as t,cR as g,cS as v,cT as h,k as m,ce as C,a4 as y,a5 as u}from"./index.e711043e.js";import{C as d}from"./index.97dfbaed.js";import{B as b}from"./index.51d05e01.js";import"./App.c3ad3f0b.js";const k=e("pre",{children:e("code",{className:"language-jsx",children:`import { useState } from 'react'
import classnames from 'classnames'
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap'

const OffCanvasPlacement = () => {
  const [canvasPlacement, setCanvasPlacement] = useState('start')
  const [canvasOpen, setCanvasOpen] = useState(false)

  const toggleCanvasStart = () => {
    setCanvasPlacement('start')
    setCanvasOpen(!canvasOpen)
  }

  const toggleCanvasEnd = () => {
    setCanvasPlacement('end')
    setCanvasOpen(!canvasOpen)
  }

  const toggleCanvasTop = () => {
    setCanvasPlacement('top')
    setCanvasOpen(!canvasOpen)
  }

  const toggleCanvasBottom = () => {
    setCanvasPlacement('bottom')
    setCanvasOpen(!canvasOpen)
  }

  return (
    <div className='demo-inline-spacing'>
      <Button color='primary' onClick={toggleCanvasStart}>
        Toggle Start
      </Button>
      <Button color='primary' onClick={toggleCanvasEnd}>
        Toggle End
      </Button>
      <Button color='primary' onClick={toggleCanvasTop}>
        Toggle Top
      </Button>
      <Button color='primary' onClick={toggleCanvasBottom}>
        Toggle Bottom
      </Button>
      <Offcanvas direction={canvasPlacement} isOpen={canvasOpen} toggle={toggleCanvasStart}>
        <OffcanvasHeader toggle={toggleCanvasStart}>OffCanvas {canvasPlacement}</OffcanvasHeader>
        <OffcanvasBody
          className={classnames({
            'my-auto mx-0 flex-grow-0': canvasPlacement === 'start' || canvasPlacement === 'end'
          })}
        >
          <p
            className={classnames({
              'text-center': canvasPlacement === 'start' || canvasPlacement === 'end'
            })}
          >
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have
            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </p>
          <Button
            color='primary'
            onClick={toggleCanvasStart}
            className={classnames({
              'mb-1': canvasPlacement === 'start' || canvasPlacement === 'end',
              'me-1': canvasPlacement === 'top' || canvasPlacement === 'bottom'
            })}
            {...(canvasPlacement === 'start' || canvasPlacement === 'end' ? { block: true } : {})}
          >
            Continue
          </Button>
          <Button
            outline
            color='secondary'
            onClick={toggleCanvasStart}
            {...(canvasPlacement === 'start' || canvasPlacement === 'end' ? { block: true } : {})}
          >
            Cancel
          </Button>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export default OffCanvasPlacement
`})}),B=e("pre",{children:e("code",{className:"language-jsx",children:`import { useState } from 'react'
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap'

const OffCanvasPlacement = () => {
  const [canvasOpen, setCanvasOpen] = useState(false)
  const [canvasScroll, setCanvasScroll] = useState(false)
  const [canvasBackdrop, setCanvasBackdrop] = useState(true)

  const toggleCanvasScroll = () => {
    setCanvasScroll(true)
    setCanvasOpen(!canvasOpen)
  }

  const toggleCanvasBackdrop = () => {
    setCanvasBackdrop(false)
    setCanvasOpen(!canvasOpen)
  }

  return (
    <div className='demo-inline-spacing'>
      <Button color='primary' onClick={toggleCanvasScroll}>
        Enable Body Scrolling
      </Button>
      <Button color='primary' onClick={toggleCanvasBackdrop}>
        Disable Backdrop
      </Button>
      <Offcanvas
        scrollable={canvasScroll}
        backdrop={canvasBackdrop}
        direction='end'
        isOpen={canvasOpen}
        toggle={toggleCanvasScroll}
      >
        <OffcanvasHeader toggle={toggleCanvasScroll}>OffCanvas {canvasScroll ? 'Scroll' : 'Backdrop'}</OffcanvasHeader>
        <OffcanvasBody className='my-auto mx-0 flex-grow-0'>
          <p className='text-center'>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have
            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </p>
          <p className='text-center'>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have
            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </p>
          <p className='text-center'>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have
            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </p>
          <p className='text-center'>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have
            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </p>
          <Button block color='primary' onClick={toggleCanvasScroll} className='mb-1'>
            Continue
          </Button>
          <Button block outline color='secondary' onClick={toggleCanvasScroll}>
            Cancel
          </Button>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export default OffCanvasPlacement
`})}),O=()=>{const[a,o]=c.exports.useState(!1),[n,i]=c.exports.useState(!1),[r,p]=c.exports.useState(!0),l=()=>{i(!0),o(!a)};return s("div",{className:"demo-inline-spacing",children:[e(t,{color:"primary",onClick:l,children:"Enable Body Scrolling"}),e(t,{color:"primary",onClick:()=>{p(!1),o(!a)},children:"Disable Backdrop"}),s(g,{scrollable:n,backdrop:r,direction:"end",isOpen:a,toggle:l,children:[s(v,{toggle:l,children:["OffCanvas ",n?"Scroll":"Backdrop"]}),s(h,{className:"my-auto mx-0 flex-grow-0",children:[e("p",{className:"text-center",children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),e("p",{className:"text-center",children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),e("p",{className:"text-center",children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),e("p",{className:"text-center",children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),e(t,{block:!0,color:"primary",onClick:l,className:"mb-1",children:"Continue"}),e(t,{block:!0,outline:!0,color:"secondary",onClick:l,children:"Cancel"})]})]})]})},w=()=>{const[a,o]=c.exports.useState("start"),[n,i]=c.exports.useState(!1),r=()=>{o("start"),i(!n)};return s("div",{className:"demo-inline-spacing",children:[e(t,{color:"primary",onClick:r,children:"Toggle Start"}),e(t,{color:"primary",onClick:()=>{o("end"),i(!n)},children:"Toggle End"}),e(t,{color:"primary",onClick:()=>{o("top"),i(!n)},children:"Toggle Top"}),e(t,{color:"primary",onClick:()=>{o("bottom"),i(!n)},children:"Toggle Bottom"}),s(g,{direction:a,isOpen:n,toggle:r,children:[s(v,{toggle:r,children:["OffCanvas ",a]}),s(h,{className:m({"my-auto mx-0 flex-grow-0":a==="start"||a==="end"}),children:[e("p",{className:m({"text-center":a==="start"||a==="end"}),children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),e(t,{color:"primary",onClick:r,className:m({"mb-1":a==="start"||a==="end","me-1":a==="top"||a==="bottom"}),...a==="start"||a==="end"?{block:!0}:{},children:"Continue"}),e(t,{outline:!0,color:"secondary",onClick:r,...a==="start"||a==="end"?{block:!0}:{},children:"Cancel"})]})]})]})},T=()=>(c.exports.useEffect(()=>{C.highlightAll()},[]),s(c.exports.Fragment,{children:[e(b,{title:"Offcanvas",data:[{title:"Components"},{title:"OffCanvas"}]}),s(y,{className:"match-height",children:[e(u,{sm:"12",children:e(d,{title:"Placement",code:k,children:e(w,{})})}),e(u,{sm:"12",children:e(d,{title:"Options",code:B,children:e(O,{})})})]})]}));export{T as default};

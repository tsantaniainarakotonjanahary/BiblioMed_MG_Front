import{o,r as a,ad as t,j as e,ae as p,a9 as r,a4 as s,a5 as n,K as c,a8 as w,cd as d,D as i,t as m,v as u,ce as T}from"./index.e711043e.js";import{C as l}from"./index.97dfbaed.js";import{B as f}from"./index.51d05e01.js";import{I as x}from"./index.c4f32f95.js";import{S as h,Z as R}from"./App.c3ad3f0b.js";const C=()=>o(a.exports.Fragment,{children:[o(t,{className:"mb-2",children:[e(p,{children:e(h,{size:14})}),e(r,{placeholder:"search..."})]}),e(x,{className:"mb-2",label:"Password",htmlFor:"basic-default-password"}),o(t,{className:"mb-2",children:[e(p,{children:"@"}),e(r,{placeholder:"Username"})]}),o(t,{className:"mb-2",children:[e(r,{placeholder:"Recipient's username"}),e(p,{children:"@example.com"})]}),o(t,{className:"mb-2",children:[e(p,{children:"https://example.com/users/"}),e(r,{})]}),o(t,{className:"mb-2",children:[e(p,{children:"$"}),e(r,{placeholder:"100"})]}),o(t,{children:[e(p,{children:"With textarea"}),e(r,{type:"textarea"})]})]}),y=()=>o(a.exports.Fragment,{children:[o(t,{className:"mb-1",size:"lg",children:[e(p,{children:"@"}),e(r,{placeholder:"username"})]}),o(t,{className:"mb-1",children:[e(p,{children:"@"}),e(r,{placeholder:"username"})]}),o(t,{size:"sm",children:[e(p,{children:"@"}),e(r,{placeholder:"username"})]})]}),A=()=>o(a.exports.Fragment,{children:[o(t,{className:"input-group-merge mb-2",children:[e(p,{children:e(h,{size:14})}),e(r,{placeholder:"search..."})]}),e(x,{className:"input-group-merge mb-2",label:"Password",htmlFor:"merge-password"}),o(t,{className:"input-group-merge mb-2",children:[e(p,{children:"@"}),e(r,{placeholder:"Username"})]}),o(t,{className:"input-group-merge mb-2",children:[e(r,{placeholder:"Recipient's username"}),e(p,{children:"@example.com"})]}),o(t,{className:"input-group-merge mb-2",children:[e(p,{children:"https://example.com/users/"}),e(r,{})]}),o(t,{className:"input-group-merge mb-2",children:[e(p,{children:"$"}),e(r,{placeholder:"100"})]}),o(t,{className:"input-group-merge",children:[e(p,{children:"With textarea"}),e(r,{type:"textarea"})]})]}),B=()=>o(s,{children:[e(n,{className:"mb-1",md:"6",sm:"12",children:o(t,{children:[e(r,{placeholder:"Button on right side"}),e(c,{color:"primary",outline:!0,children:"Go"})]})}),e(n,{className:"mb-1",md:"6",sm:"12",children:o(t,{children:[e(c,{color:"primary",outline:!0,children:e(h,{size:12})}),e(r,{type:"text",placeholder:"Button on both sides"}),e(c,{color:"primary",outline:!0,children:"Search !"})]})})]}),S=()=>o(s,{children:[e(w,{for:"col-cb",children:"Input Group with Checkbox"}),e(n,{className:"mb-1",md:"6",sm:"12",children:o(t,{children:[e(p,{children:e("div",{className:"form-check",children:e(r,{type:"checkbox",id:"exampleCustomCheckbox"})})}),e(r,{type:"text",placeholder:"Message"})]})}),e(n,{className:"mb-1",md:"6",sm:"12",children:o(t,{children:[e(p,{children:e("div",{className:"form-check",children:e(r,{type:"checkbox",id:"exampleCustomCheckbox"})})}),e(r,{type:"text",placeholder:"Message"})]})}),e(w,{for:"col-radio",children:"Input Group with Radio"}),e(n,{className:"mb-md-0 mb-1",md:"6",sm:"12",children:o(t,{children:[e(p,{children:e("div",{className:"form-check",children:e(r,{type:"radio",name:"inputGroupExampleRadio",id:"exampleCustomRadio"})})}),e(r,{type:"text",placeholder:"Message"})]})}),e(n,{md:"6",sm:"12",children:o(t,{children:[e(p,{children:e("div",{className:"form-check",children:e(r,{type:"radio",name:"inputGroupExampleRadio",id:"exampleCustomRadio"})})}),e(r,{type:"text",placeholder:"Message"})]})})]}),M=()=>{const[I,D]=a.exports.useState(!1),[g,b]=a.exports.useState(!1),[G,N]=a.exports.useState(!1);return o(s,{children:[e(n,{md:"6",sm:"12",children:o(t,{children:[o(d,{isOpen:I,toggle:()=>{D(!I)},children:[e(i,{color:"primary",caret:!0,outline:!0,children:"Action"}),o(m,{children:[e(u,{className:"w-100",children:"Action 1"}),e(u,{className:"w-100",disabled:!0,children:"Action"}),e(u,{className:"w-100",divider:!0}),e(u,{className:"w-100",children:"Another Action"})]})]}),e(r,{})]})}),e(n,{md:"6",sm:"12",children:o(t,{children:[o(d,{isOpen:g,toggle:()=>{b(!g)},children:[e(i,{color:"primary",caret:!0,outline:!0,children:e(R,{size:12})}),o(m,{children:[e(u,{className:"w-100",children:"Action 1"}),e(u,{className:"w-100",disabled:!0,children:"Action"}),e(u,{className:"w-100",divider:!0}),e(u,{className:"w-100",children:"Another Action"})]})]}),e(r,{}),o(d,{isOpen:G,toggle:()=>{N(!G)},children:[e(i,{color:"primary",outline:!0,caret:!0,children:"Action"}),o(m,{children:[e(u,{className:"w-100",children:"Action 1"}),e(u,{className:"w-100",disabled:!0,children:"Action"}),e(u,{className:"w-100",divider:!0}),e(u,{className:"w-100",children:"Another Action"})]})]})]})})]})},z=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Search } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { InputGroup, Input, InputGroupText } from 'reactstrap'

const InputGroupBasic = () => {
  return (
    <React.Fragment>
      <InputGroup className='mb-2'>
          <InputGroupText>
            <Search size={14} />
          </InputGroupText>
        <Input placeholder='search...' />
      </InputGroup>
      <InputPasswordToggle className='mb-2' label='Password' htmlFor='basic-default-password' />
      <InputGroup className='mb-2'>
          <InputGroupText>@</InputGroupText>
        <Input placeholder='Username' />
      </InputGroup>
      <InputGroup className='mb-2'>
        <Input placeholder="Recipient's username" />
          <InputGroupText>@example.com</InputGroupText>
      </InputGroup>
      <InputGroup className='mb-2'>
          <InputGroupText>https://example.com/users/</InputGroupText>
        <Input />
      </InputGroup>
      <InputGroup className='mb-2'>
          <InputGroupText>$</InputGroupText>
        <Input placeholder='100' />
      </InputGroup>
      <InputGroup>
          <InputGroupText>With textarea</InputGroupText>
        <Input type='textarea' />
      </InputGroup>
    </React.Fragment>
  )
}

export default InputGroupBasic
  `})}),k=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Search } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { InputGroup, Input, InputGroupText } from 'reactstrap'

const InputGroupMerged = () => {
  return (
    <React.Fragment>
      <InputGroup className='input-group-merge mb-2'>
          <InputGroupText>
            <Search size={14} />
          </InputGroupText>
        <Input placeholder='search...' />
      </InputGroup>
      <InputPasswordToggle className='input-group-merge mb-2' label='Password' htmlFor='basic-default-password' />
      <InputGroup className='input-group-merge mb-2'>
          <InputGroupText>@</InputGroupText>
        <Input placeholder='Username' />
      </InputGroup>
      <InputGroup className='input-group-merge mb-2'>
        <Input placeholder="Recipient's username" />
          <InputGroupText>@example.com</InputGroupText>
      </InputGroup>
      <InputGroup className='input-group-merge mb-2'>
          <InputGroupText>https://example.com/users/</InputGroupText>
        <Input />
      </InputGroup>
      <InputGroup className='input-group-merge mb-2'>
          <InputGroupText>$</InputGroupText>
        <Input placeholder='100' />
      </InputGroup>
      <InputGroup className='input-group-merge'>
          <InputGroupText>With textarea</InputGroupText>
        <Input type='textarea' />
      </InputGroup>
    </React.Fragment>
  )
}

export default InputGroupMerged
  `})}),v=e("pre",{children:e("code",{className:"language-jsx",children:`

import { InputGroup, Input, InputGroupText, Row, Col, Input } from 'reactstrap'

const InputGroupCbAndRadio = () => {
  return (
    <Row>
      <Col md='6' sm='12'>
        <InputGroup>
            <InputGroupText>
              <input type='checkbox' />
            </InputGroupText>
          <Input type='text' placeholder='Message' />
        </InputGroup>
      </Col>
      <Col md='6' sm='12'>
        <InputGroup>
            <InputGroupText>
              <input type='radio' />
            </InputGroupText>
          <Input type='text' placeholder='Message' />
        </InputGroup>
      </Col>
      <small className='fw-semibold w-100 ms-1 my-1'>Custom checkbox and radio</small>
      <Col className='mb-md-0 mb-1' md='6' sm='12'>
        <InputGroup>
          <InputGroupText>
            <div className='form-check'>
              <Input type='checkbox' id='exampleCustomCheckbox' />
            </div>
          </InputGroupText>
          <Input type='text' placeholder='Message' />
        </InputGroup>
      </Col>
      <Col md='6' sm='12'>
        <InputGroup>
          <InputGroupText>
            <div className='form-check'>
              <Input type='radio' id='exampleCustomRadio' />
            </div>
          </InputGroupText>
          <Input type='text' placeholder='Message' />
        </InputGroup>
      </Col>
    </Row>
  )
}

export default InputGroupCbAndRadio
  `})}),F=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Button, InputGroup, Input,  Row, Col } from 'reactstrap'
import { Search } from 'react-feather'

const InputGroupButtons = () => {
  return (
    <Row>
      <Col className='mb-1' lg='6' md='12'>
        <InputGroup>
          <Input />
            <Button color='primary' outline>
              Go
            </Button>
        </InputGroup>
      </Col>
      <Col className='mb-1' lg='6' md='12'>
        <InputGroup>
            <Button color='primary' outline>
              <Search size={12} />
            </Button>
          <Input type='text' />
            <Button color='primary' outline>
              Search !
            </Button>
        </InputGroup>
      </Col>
    </Row>
  )
}

export default InputGroupButtons
  `})}),O=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import {
  Row,
  Col,
  Input,
  Dropdown,

  InputGroup,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'
import { Edit } from 'react-feather'

const InputGroupDropdowns = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dropdownIcon, setDropdownIcon] = useState(false)
  const [dropdownRight, setDropdownRight] = useState(false)

  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen)
  }
  const toggleDropdownIcon = () => {
    setDropdownIcon(!dropdownIcon)
  }
  const toggleDropDownRight = () => {
    setDropdownRight(!dropdownRight)
  }

  return (
    <Row>
      <Col lg='6' md='12'>
        <InputGroup>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
            <DropdownToggle color='primary' caret outline>
              Action
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action 1</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input />
        </InputGroup>
      </Col>
      <Col lg='6' md='12'>
        <InputGroup>
          <Dropdown isOpen={dropdownIcon} toggle={toggleDropdownIcon}>
            <DropdownToggle color='primary' caret outline>
              <Edit size={12} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action 1</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input />
          <Dropdown isOpen={dropdownRight} toggle={toggleDropDownRight}>
            <DropdownToggle color='primary' outline caret>
              Action
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action 1</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </InputGroup>
      </Col>
    </Row>
  )
}

export default InputGroupDropdowns
  `})}),P=e("pre",{children:e("code",{className:"language-jsx",children:`

import { InputGroup, InputGroupText, Input } from 'reactstrap'

const InputGroupSizes = () => {
  return (
    <React.Fragment>
      <InputGroup className='mb-1' size='lg'>
        <InputGroupText>@</InputGroupText>
        <Input placeholder='username' />
      </InputGroup>

      <InputGroup className='mb-1'>
        <InputGroupText>@</InputGroupText>
        <Input placeholder='username' />
      </InputGroup>

      <InputGroup size='sm'>
        <InputGroupText>@</InputGroupText>
        <Input placeholder='username' />
      </InputGroup>
    </React.Fragment>
  )
}

export default InputGroupSizes
  `})}),q=()=>(a.exports.useEffect(()=>{T.highlightAll()}),o(a.exports.Fragment,{children:[e(f,{title:"Input Groups",data:[{title:"Form Elements"},{title:"InputGroups"}]}),o(s,{className:"match-height",children:[e(n,{md:"6",sm:"12",children:e(l,{title:"Basic",code:z,children:e(C,{})})}),e(n,{md:"6",sm:"12",children:e(l,{title:"Merged",code:k,children:e(A,{})})}),e(n,{md:"6",sm:"12",children:e(l,{title:"Sizing",code:P,children:e(y,{})})}),e(n,{md:"6",sm:"12",children:e(l,{title:"Checkbox & Radio",code:v,children:e(S,{})})}),e(n,{sm:"12",children:e(l,{title:"Input Group with Buttons",code:F,children:e(B,{})})}),e(n,{sm:"12",children:e(l,{title:"Input Group Dropdowns",code:O,children:e(M,{})})})]})]}));export{q as default};

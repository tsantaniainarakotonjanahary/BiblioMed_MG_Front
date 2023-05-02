import{r as n,o as t,bQ as d,j as e,G as a,H as c,bR as k,bS as l,cd as x,D,k as j,t as E,v as I,a4 as L,a5 as p,ce as S}from"./index.e711043e.js";import{C as u}from"./index.97dfbaed.js";import{B as A}from"./index.51d05e01.js";import"./App.c3ad3f0b.js";const B=()=>{const[o,r]=n.exports.useState("1"),i=s=>{r(s)};return t(n.exports.Fragment,{children:[t(d,{className:"justify-content-end",pills:!0,children:[e(a,{children:e(c,{active:o==="1",onClick:()=>{i("1")},children:"Home"})}),e(a,{children:e(c,{active:o==="2",onClick:()=>{i("2")},children:"Profile"})}),e(a,{children:e(c,{disabled:!0,children:"Disabled"})}),e(a,{children:e(c,{active:o==="3",onClick:()=>{i("3")},children:"About"})})]}),t(k,{className:"py-50",activeTab:o,children:[e(l,{tabId:"1",children:e("p",{children:"Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie drag\xE9e ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Souffl\xE9 croissant lemon drops tootsie roll toffee tiramisu."})}),e(l,{tabId:"2",children:e("p",{children:"Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops."})}),e(l,{tabId:"3",children:e("p",{children:"Carrot cake drag\xE9e chocolate. Lemon drops ice cream wafer gummies drag\xE9e. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes."})})]})]})},q=()=>{const[o,r]=n.exports.useState("1"),[i,s]=n.exports.useState(!1),b=()=>s(!i),h=v=>{r(v)};return t(n.exports.Fragment,{children:[t(d,{pills:!0,children:[e(a,{children:e(c,{active:o==="1",onClick:()=>{h("1")},children:"Home"})}),e(a,{children:e(c,{active:o==="2",onClick:()=>{h("2")},children:"Profile"})}),t(x,{nav:!0,isOpen:i,toggle:b,children:[e(D,{nav:!0,caret:!0,className:j({active:o==="3"||o==="4"}),children:"Dropdown"}),t(E,{children:[e(I,{className:"w-100",active:o==="3",onClick:()=>{h("3")},children:"@fat"}),e(I,{className:"w-100",active:o==="4",onClick:()=>{h("4")},children:"@mdo"})]})]}),e(a,{children:e(c,{active:o==="5",onClick:()=>{h("5")},children:"About"})})]}),t(k,{className:"py-50",activeTab:o,children:[e(l,{tabId:"1",children:e("p",{children:"Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie drag\xE9e ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Souffl\xE9 croissant lemon drops tootsie roll toffee tiramisu."})}),e(l,{tabId:"2",children:e("p",{children:"Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops."})}),e(l,{tabId:"3",children:e("p",{children:"Cake croissant lemon drops gummi bears carrot cake biscuit cupcake croissant. Macaroon lemon drops muffin jelly sugar plum chocolate cupcake danish icing. Souffl\xE9 tootsie roll lemon drops sweet roll cake icing cookie halvah cupcake.Chupa chups pie jelly pie tootsie roll drag\xE9e cookie caramels sugar plum. Jelly oat cake wafer pie cupcake chupa chups jelly-o gingerbread."})}),e(l,{tabId:"4",children:e("p",{children:"Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar biscuit tart croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie sweet bear claw. Toffee jelly-o pastry cake dessert chocolate bar jelly beans fruitcake. Drag\xE9e sweet fruitcake drag\xE9e biscuit halvah wafer gingerbread dessert. Gummies fruitcake brownie gummies tart pudding."})}),e(l,{tabId:"5",children:e("p",{children:"Carrot cake drag\xE9e chocolate. Lemon drops ice cream wafer gummies drag\xE9e. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes."})})]})]})},F=()=>{const[o,r]=n.exports.useState(1),[i,s]=n.exports.useState(1),[b,h]=n.exports.useState(1),[v,P]=n.exports.useState(1),[g,T]=n.exports.useState(1),f=m=>r(m),N=m=>s(m),y=m=>h(m),w=m=>P(m),C=m=>T(m);return t(n.exports.Fragment,{children:[e("h6",{children:"Secondary"}),t(d,{pills:!0,className:"nav-pill-secondary my-2",children:[e(a,{onClick:()=>C(1),children:e(c,{active:g===1,children:"Active"})}),e(a,{onClick:()=>C(2),children:e(c,{active:g===2,children:"Link"})}),e(a,{children:e(c,{disabled:!0,children:"Disabled"})}),e(a,{onClick:()=>C(4),children:e(c,{active:g===4,children:"Link"})})]}),e("h6",{children:"Success"}),t(d,{pills:!0,className:"nav-pill-success my-2",children:[e(a,{onClick:()=>y(1),children:e(c,{active:b===1,children:"Active"})}),e(a,{onClick:()=>y(2),children:e(c,{active:b===2,children:"Link"})}),e(a,{children:e(c,{disabled:!0,children:"Disabled"})}),e(a,{onClick:()=>y(4),children:e(c,{active:b===4,children:"Link"})})]}),e("h6",{children:"Danger"}),t(d,{pills:!0,className:"nav-pill-danger my-2",children:[e(a,{onClick:()=>N(1),children:e(c,{active:i===1,children:"Active"})}),e(a,{onClick:()=>N(2),children:e(c,{active:i===2,children:"Link"})}),e(a,{children:e(c,{disabled:!0,children:"Disabled"})}),e(a,{onClick:()=>N(4),children:e(c,{active:i===4,children:"Link"})})]}),e("h6",{children:"Warning"}),t(d,{pills:!0,className:"nav-pill-warning my-2",children:[e(a,{onClick:()=>w(1),children:e(c,{active:v===1,children:"Active"})}),e(a,{onClick:()=>w(2),children:e(c,{active:v===2,children:"Link"})}),e(a,{children:e(c,{disabled:!0,children:"Disabled"})}),e(a,{onClick:()=>w(4),children:e(c,{active:v===4,children:"Link"})})]}),e("h6",{children:"Info"}),t(d,{pills:!0,className:"nav-pill-info my-2",children:[e(a,{onClick:()=>f(1),children:e(c,{active:o===1,children:"Active"})}),e(a,{onClick:()=>f(2),children:e(c,{active:o===2,children:"Link"})}),e(a,{children:e(c,{disabled:!0,children:"Disabled"})}),e(a,{onClick:()=>f(4),children:e(c,{active:o===4,children:"Link"})})]})]})},R=()=>{const[o,r]=n.exports.useState("1"),i=s=>{r(s)};return t(n.exports.Fragment,{children:[t(d,{pills:!0,fill:!0,children:[e(a,{children:e(c,{active:o==="1",onClick:()=>{i("1")},children:"Home"})}),e(a,{children:e(c,{active:o==="2",onClick:()=>{i("2")},children:"Profile"})}),e(a,{children:e(c,{disabled:!0,children:"Disabled"})}),e(a,{children:e(c,{active:o==="3",onClick:()=>{i("3")},children:"About"})})]}),t(k,{className:"py-50",activeTab:o,children:[e(l,{tabId:"1",children:e("p",{children:"Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie drag\xE9e ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Souffl\xE9 croissant lemon drops tootsie roll toffee tiramisu."})}),e(l,{tabId:"2",children:e("p",{children:"Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops."})}),e(l,{tabId:"3",children:e("p",{children:"Carrot cake drag\xE9e chocolate. Lemon drops ice cream wafer gummies drag\xE9e. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes."})})]})]})},J=()=>{const[o,r]=n.exports.useState("1"),i=s=>{r(s)};return t(n.exports.Fragment,{children:[t(d,{className:"justify-content-center",pills:!0,children:[e(a,{children:e(c,{active:o==="1",onClick:()=>{i("1")},children:"Home"})}),e(a,{children:e(c,{active:o==="2",onClick:()=>{i("2")},children:"Profile"})}),e(a,{children:e(c,{disabled:!0,children:"Disabled"})}),e(a,{children:e(c,{active:o==="3",onClick:()=>{i("3")},children:"About"})})]}),t(k,{className:"py-50",activeTab:o,children:[e(l,{tabId:"1",children:e("p",{children:"Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie drag\xE9e ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Souffl\xE9 croissant lemon drops tootsie roll toffee tiramisu."})}),e(l,{tabId:"2",children:e("p",{children:"Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops."})}),e(l,{tabId:"3",children:e("p",{children:"Carrot cake drag\xE9e chocolate. Lemon drops ice cream wafer gummies drag\xE9e. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes."})})]})]})},M=()=>{const[o,r]=n.exports.useState("1"),i=s=>{r(s)};return t(L,{children:[e(p,{md:"3",sm:"12",children:t(d,{pills:!0,vertical:!0,children:[e(a,{children:e(c,{active:o==="1",onClick:()=>{i("1")},children:"Pill 1"})}),e(a,{children:e(c,{active:o==="2",onClick:()=>{i("2")},children:"Pill 2"})}),e(a,{children:e(c,{active:o==="3",onClick:()=>{i("3")},children:"Pill 3"})}),e(a,{children:e(c,{disabled:!0,children:"Disabled"})})]})}),e(p,{md:"9",sm:"12",children:t(k,{activeTab:o,children:[e(l,{tabId:"1",children:e("p",{children:"Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Bear claw donut sesame snaps bear claw liquorice jelly-o bear claw carrot cake. Icing croissant bonbon biscuit gummi bears."})}),e(l,{tabId:"2",children:e("p",{children:"Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake. Sesame snaps wafer marshmallow danish drag\xE9e candy muffin jelly beans tootsie roll. Jelly beans oat cake chocolate cake tiramisu sweet."})}),e(l,{tabId:"3",children:e("p",{children:"Carrot cake drag\xE9e chocolate. Lemon drops ice cream wafer gummies drag\xE9e. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake. Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop. Danish fruitcake bonbon bear claw gummi bears apple pie."})})]})})]})},H=()=>{const[o,r]=n.exports.useState("1"),i=s=>{r(s)};return t(n.exports.Fragment,{children:[t(d,{pills:!0,justified:!0,children:[e(a,{children:e(c,{active:o==="1",onClick:()=>{i("1")},children:"Home"})}),e(a,{children:e(c,{active:o==="2",onClick:()=>{i("2")},children:"Profile"})}),e(a,{children:e(c,{disabled:!0,children:"Disabled"})}),e(a,{children:e(c,{active:o==="3",onClick:()=>{i("3")},children:"About"})})]}),t(k,{className:"py-50",activeTab:o,children:[e(l,{tabId:"1",children:e("p",{children:"Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie drag\xE9e ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Souffl\xE9 croissant lemon drops tootsie roll toffee tiramisu."})}),e(l,{tabId:"2",children:e("p",{children:"Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops."})}),e(l,{tabId:"3",children:e("p",{children:"Carrot cake drag\xE9e chocolate. Lemon drops ice cream wafer gummies drag\xE9e. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes."})})]})]})},O=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import classnames from 'classnames'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap'

const PillBasic = () => {
  const [active, setActive] = useState('1')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const toggle = tab => {
    setActive(tab)
  }
  return (
    <React.Fragment>
      <Nav pills>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Profile
          </NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle
            nav
            caret
            className={classnames({
              active: active === '3' || active === '4'
            })}
          >
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              className='w-100'
              active={active === '3'}
              onClick={() => {
                toggle('3')
              }}
            >
              @fat
            </DropdownItem>
            <DropdownItem
              className='w-100'
              active={active === '4'}
              onClick={() => {
                toggle('4')
              }}
            >
              @mdo
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink
            active={active === '5'}
            onClick={() => {
              toggle('5')
            }}
          >
            About
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <p>
            Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake
            pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie drag\xE9e ice
            cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans
            croissant bonbon cookie toffee. Souffl\xE9 croissant lemon drops tootsie roll toffee tiramisu.
          </p>
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy
            cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing
            cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate
            sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Cake croissant lemon drops gummi bears carrot cake biscuit cupcake croissant. Macaroon lemon drops muffin
            jelly sugar plum chocolate cupcake danish icing. Souffl\xE9 tootsie roll lemon drops sweet roll cake icing
            cookie halvah cupcake.Chupa chups pie jelly pie tootsie roll drag\xE9e cookie caramels sugar plum. Jelly oat
            cake wafer pie cupcake chupa chups jelly-o gingerbread.
          </p>
        </TabPane>
        <TabPane tabId='4'>
          <p>
            Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar biscuit tart
            croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie sweet bear claw. Toffee
            jelly-o pastry cake dessert chocolate bar jelly beans fruitcake. Drag\xE9e sweet fruitcake drag\xE9e biscuit
            halvah wafer gingerbread dessert. Gummies fruitcake brownie gummies tart pudding.
          </p>
        </TabPane>
        <TabPane tabId='5'>
          <p>
            Carrot cake drag\xE9e chocolate. Lemon drops ice cream wafer gummies drag\xE9e. Chocolate bar liquorice cheesecake
            cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll
            cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee
            toffee jelly beans bonbon sesame snaps sugar plum candy canes.
          </p>
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default PillBasic
`})}),z=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const PillFilled = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    setActive(tab)
  }
  return (
    <React.Fragment>
      <Nav pills fill>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            About
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <p>
            Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake
            pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie drag\xE9e ice
            cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans
            croissant bonbon cookie toffee. Souffl\xE9 croissant lemon drops tootsie roll toffee tiramisu.
          </p>
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy
            cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing
            cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate
            sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Carrot cake drag\xE9e chocolate. Lemon drops ice cream wafer gummies drag\xE9e. Chocolate bar liquorice cheesecake
            cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll
            cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee
            toffee jelly beans bonbon sesame snaps sugar plum candy canes.
          </p>
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default PillFilled
`})}),$=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const PillsJustified = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    setActive(tab)
  }
  return (
    <React.Fragment>
      <Nav pills justified>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            About
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <p>
            Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake
            pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie drag\xE9e ice
            cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans
            croissant bonbon cookie toffee. Souffl\xE9 croissant lemon drops tootsie roll toffee tiramisu.
          </p>
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy
            cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing
            cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate
            sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Carrot cake drag\xE9e chocolate. Lemon drops ice cream wafer gummies drag\xE9e. Chocolate bar liquorice cheesecake
            cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll
            cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee
            toffee jelly beans bonbon sesame snaps sugar plum candy canes.
          </p>
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default PillsJustified
`})}),V=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const PillCentered = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    setActive(tab)
  }
  return (
    <React.Fragment>
      <Nav className='justify-content-center' pills>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            About
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <p>
            Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake
            pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie drag\xE9e ice
            cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans
            croissant bonbon cookie toffee. Souffl\xE9 croissant lemon drops tootsie roll toffee tiramisu.
          </p>
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy
            cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing
            cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate
            sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Carrot cake drag\xE9e chocolate. Lemon drops ice cream wafer gummies drag\xE9e. Chocolate bar liquorice cheesecake
            cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll
            cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee
            toffee jelly beans bonbon sesame snaps sugar plum candy canes.
          </p>
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default PillCentered
`})}),W=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const PillEnd = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    setActive(tab)
  }
  return (
    <React.Fragment>
      <Nav className='justify-content-end' pills>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            About
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <p>
            Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake
            pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie drag\xE9e ice
            cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans
            croissant bonbon cookie toffee. Souffl\xE9 croissant lemon drops tootsie roll toffee tiramisu.
          </p>
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy
            cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing
            cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate
            sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Carrot cake drag\xE9e chocolate. Lemon drops ice cream wafer gummies drag\xE9e. Chocolate bar liquorice cheesecake
            cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll
            cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee
            toffee jelly beans bonbon sesame snaps sugar plum candy canes.
          </p>
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default PillEnd
`})}),G=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'

const PillsVertical = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    setActive(tab)
  }
  return (
    <Row>
      <Col md='3' sm='12'>
        <Nav pills vertical>
          <NavItem>
            <NavLink
              active={active === '1'}
              onClick={() => {
                toggle('1')
              }}
            >
              Pill 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '2'}
              onClick={() => {
                toggle('2')
              }}
            >
              Pill 2
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '3'}
              onClick={() => {
                toggle('3')
              }}
            >
              Pill 3
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled>Disabled</NavLink>
          </NavItem>
        </Nav>
      </Col>
      <Col md='9' sm='12'>
        <TabContent activeTab={active}>
          <TabPane tabId='1'>
            <p>
              Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan
              carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon
              biscuit gummi bears. Bear claw donut sesame snaps bear claw liquorice jelly-o bear claw carrot cake. Icing
              croissant bonbon biscuit gummi bears.
            </p>
          </TabPane>
          <TabPane tabId='2'>
            <p>
              Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy
              cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice
              icing cupcake. Sesame snaps wafer marshmallow danish drag\xE9e candy muffin jelly beans tootsie roll. Jelly
              beans oat cake chocolate cake tiramisu sweet.
            </p>
          </TabPane>
          <TabPane tabId='3'>
            <p>
              Carrot cake drag\xE9e chocolate. Lemon drops ice cream wafer gummies drag\xE9e. Chocolate bar liquorice
              cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder
              tootsie roll cake. Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop. Danish
              fruitcake bonbon bear claw gummi bears apple pie.
            </p>
          </TabPane>
        </TabContent>
      </Col>
    </Row>
  )
}
export default PillsVertical
`})}),Q=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const PillThemes = () => {
  return (
    <React.Fragment>
      <h6>Secondary</h6>
      <Nav pills className='nav-pill-secondary my-2'>
        <NavItem>
          <NavLink active>Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
      </Nav>

      <h6>Success</h6>
      <Nav pills className='nav-pill-success my-2'>
        <NavItem>
          <NavLink active>Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
      </Nav>

      <h6>Danger</h6>

      <Nav pills className='nav-pill-danger my-2'>
        <NavItem>
          <NavLink active>Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
      </Nav>

      <h6>Warning</h6>

      <Nav pills className='nav-pill-warning my-2'>
        <NavItem>
          <NavLink active>Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
      </Nav>


      <h6>Info</h6>

      <Nav pills className='nav-pill-info my-2'>
        <NavItem>
          <NavLink active>Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
      </Nav>
    </React.Fragment>
  )
}
export default PillThemes
`})}),Z=()=>(n.exports.useEffect(()=>{S.highlightAll()},[]),t(n.exports.Fragment,{children:[e(A,{title:"Pills",data:[{title:"Components"},{title:"Pills"}]}),t(L,{className:"match-height",children:[e(p,{xl:"6",lg:"12",children:e(u,{title:"Basic",code:O,children:e(q,{})})}),e(p,{xl:"6",lg:"12",children:e(u,{title:"Vertical Stacked",code:G,children:e(M,{})})}),e(p,{xl:"6",lg:"12",children:e(u,{title:"Filled",code:z,children:e(R,{})})}),e(p,{xl:"6",lg:"12",children:e(u,{title:"Justified",code:$,children:e(H,{})})}),e(p,{xl:"6",lg:"12",children:e(u,{title:"Centered",code:V,children:e(J,{})})}),e(p,{xl:"6",lg:"12",children:e(u,{title:"End",code:W,children:e(B,{})})}),e(p,{sm:"12",children:e(u,{title:"Themes",code:Q,children:e(F,{})})})]})]}));export{Z as default};

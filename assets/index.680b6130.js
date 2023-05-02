import{j as o,r as s,o as e,cH as u,cg as c,ch as r,ci as a,cf as h,ce as f,a4 as b,a5 as l,ag as p}from"./index.e711043e.js";import{C as m}from"./index.97dfbaed.js";import{B as A}from"./index.51d05e01.js";import"./App.c3ad3f0b.js";const g=o("pre",{children:o("code",{className:"language-jsx",children:`import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const AccordionBasic = () => {
  const [open, setOpen] = useState('1')

  const toggle = id => {
    open === id ? setOpen() : setOpen(id)
  }

  return (
    <Accordion open={open} toggle={toggle}>
      <AccordionItem>
        <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>
        <AccordionBody accordionId='1'>
          <strong>This is the first item's accordion body.</strong> You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
          <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>
        <AccordionBody accordionId='2'>
          <strong>This is the second item's accordion body.</strong> You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
          <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>
        <AccordionBody accordionId='3'>
          <strong>This is the third item's accordion body.</strong> You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
          <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionBasic`})}),y=o("pre",{children:o("code",{className:"language-jsx",children:`import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const AccordionWithoutArrow = () => {
  const [open, setOpen] = useState('1')

  const toggle = id => {
    open === id ? setOpen() : setOpen(id)
  }

  return (
    <Accordion className='accordion-without-arrow' open={open} toggle={toggle}>
      <AccordionItem>
        <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>
        <AccordionBody accordionId='1'>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi
          bears macaroon drag\xE9e danish caramels powder. Bear claw drag\xE9e pastry topping souffl\xE9. Wafer gummi bears
          marshmallow pastry pie.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>
        <AccordionBody accordionId='2'>
          Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw drag\xE9e oat cake drag\xE9e ice cream
          halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies. Jelly beans candy canes carrot
          cake. Fruitcake chocolate chupa chups.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>
        <AccordionBody accordionId='3'>
          Oat cake toffee chocolate bar jujubes. Marshmallow brownie lemon drops cheesecake. Bonbon gingerbread
          marshmallow sweet jelly beans muffin. Sweet roll bear claw candy canes oat cake drag\xE9e caramels. Ice cream
          wafer danish cookie caramels muffin.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='4'>Accordion Item 4</AccordionHeader>
        <AccordionBody accordionId='4'>
          Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon
          muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie claw candy canes muffin cupcake candy
          caramels tiramisu.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionWithoutArrow
`})}),I=o("pre",{children:o("code",{className:"language-jsx",children:`import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const AccordionBorder = () => {
  const [open, setOpen] = useState('')

  const toggle = id => {
    open === id ? setOpen() : setOpen(id)
  }

  return (
    <Accordion className='accordion-border' open={open} toggle={toggle}>
      <AccordionItem>
        <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>
        <AccordionBody accordionId='1'>
          Gummi bears toffee souffl\xE9 jelly carrot cake pudding sweet roll bear claw. Sweet roll gingerbread wafer
          liquorice cake tiramisu. Gummi bears caramels bonbon icing croissant lollipop topping lollipop danish.
          Marzipan tootsie roll bonbon toffee icing lollipop cotton candy pie gummies. Gingerbread bear claw chocolate
          cake bonbon. Liquorice marzipan cotton candy liquorice tootsie roll macaroon marzipan danish.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>
        <AccordionBody accordionId='2'>
          Souffl\xE9 sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer
          cookie. Souffl\xE9 fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping
          toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon souffl\xE9 apple pie cake.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>
        <AccordionBody accordionId='3'>
          <strong>This is the third item's accordion body.</strong> You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
          <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='4'>Accordion Item 4</AccordionHeader>
        <AccordionBody accordionId='4'>
          Marzipan candy apple pie icing. Sweet roll pudding drag\xE9e icing icing cookie pie fruitcake caramels. Bonbon
          candy canes candy canes. Drag\xE9e jelly beans chocolate bar drag\xE9e biscuit fruitcake gingerbread toffee apple
          pie. Gingerbread donut powder ice cream sesame snaps jelly beans oat cake. Candy wafer pudding drag\xE9e gummies.
          Carrot cake macaroon cake sesame snaps caramels.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}
export default AccordionBorder
`})}),w=o("pre",{children:o("code",{className:"language-jsx",children:`import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const AccordionMargin = () => {
  const [open, setOpen] = useState('')

  const toggle = id => {
    open === id ? setOpen() : setOpen(id)
  }

  return (
    <Accordion className='accordion-margin' open={open} toggle={toggle}>
      <AccordionItem>
        <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>
        <AccordionBody accordionId='1'>
          Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon
          muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu.
          Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes
          sugar plum jelly beans tiramisu icing cheesecake.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>
        <AccordionBody accordionId='2'>
          Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice
          biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi
          bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>
        <AccordionBody accordionId='3'>
          Tart gummies drag\xE9e lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans souffl\xE9
          cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate
          candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping toffee dessert
          gummies. Topping apple pie pie croissant cotton candy dessert tiramisu.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='4'>Accordion Item 4</AccordionHeader>
        <AccordionBody accordionId='4'>
          Cheesecake muffin cupcake drag\xE9e lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant.
          Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans
          brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll.
          Tootsie roll sweet cupcake.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}
export default AccordionMargin`})}),k=o("pre",{children:o("code",{className:"language-jsx",children:`import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const AccordionHover = () => {
  const [open, setOpen] = useState('')

  const toggle = id => {
    open === id ? setOpen() : setOpen(id)
  }

  return (
    <Accordion open={open} toggle={toggle}>
      <AccordionItem onMouseEnter={() => toggle('1')} onMouseLeave={() => toggle('1')}>
        <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>
        <AccordionBody accordionId='1'>
          Gummi bears toffee souffl\xE9 jelly carrot cake pudding sweet roll bear claw. Sweet roll gingerbread wafer
          liquorice cake tiramisu. Gummi bears caramels bonbon icing croissant lollipop topping lollipop danish.
          Marzipan tootsie roll bonbon toffee icing lollipop cotton candy pie gummies. Gingerbread bear claw chocolate
          cake bonbon. Liquorice marzipan cotton candy liquorice tootsie roll macaroon marzipan danish.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem onMouseEnter={() => toggle('2')} onMouseLeave={() => toggle('2')}>
        <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>
        <AccordionBody accordionId='2'>
          Souffl\xE9 sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer
          cookie. Souffl\xE9 fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping
          toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon souffl\xE9 apple pie cake.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem onMouseEnter={() => toggle('3')} onMouseLeave={() => toggle('3')}>
        <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>
        <AccordionBody accordionId='3'>
          Souffl\xE9 sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer
          cookie. Souffl\xE9 fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping
          toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon souffl\xE9 apple pie cake.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem onMouseEnter={() => toggle('4')} onMouseLeave={() => toggle('4')}>
        <AccordionHeader targetId='4'>Accordion Item 4</AccordionHeader>
        <AccordionBody accordionId='4'>
          Marzipan candy apple pie icing. Sweet roll pudding drag\xE9e icing icing cookie pie fruitcake caramels. Bonbon
          candy canes candy canes. Drag\xE9e jelly beans chocolate bar drag\xE9e biscuit fruitcake gingerbread toffee apple
          pie. Gingerbread donut powder ice cream sesame snaps jelly beans oat cake. Candy wafer pudding drag\xE9e gummies.
          Carrot cake macaroon cake sesame snaps caramels.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}
export default AccordionHover
`})}),j=()=>{const[i,n]=s.exports.useState("0"),d=t=>{n(i===t?"0":t)};return e(u,{open:i,toggle:d,children:[e(c,{onMouseEnter:()=>d("1"),onMouseLeave:()=>d("1"),children:[o(r,{targetId:"1",children:"Accordion Item 1"}),o(a,{accordionId:"1",children:"Gummi bears toffee souffl\xE9 jelly carrot cake pudding sweet roll bear claw. Sweet roll gingerbread wafer liquorice cake tiramisu. Gummi bears caramels bonbon icing croissant lollipop topping lollipop danish. Marzipan tootsie roll bonbon toffee icing lollipop cotton candy pie gummies. Gingerbread bear claw chocolate cake bonbon. Liquorice marzipan cotton candy liquorice tootsie roll macaroon marzipan danish."})]}),e(c,{onMouseEnter:()=>d("2"),onMouseLeave:()=>d("2"),children:[o(r,{targetId:"2",children:"Accordion Item 2"}),o(a,{accordionId:"2",children:"Souffl\xE9 sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer cookie. Souffl\xE9 fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon souffl\xE9 apple pie cake."})]}),e(c,{onMouseEnter:()=>d("3"),onMouseLeave:()=>d("3"),children:[o(r,{targetId:"3",children:"Accordion Item 3"}),o(a,{accordionId:"3",children:"Souffl\xE9 sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer cookie. Souffl\xE9 fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon souffl\xE9 apple pie cake."})]}),e(c,{onMouseEnter:()=>d("4"),onMouseLeave:()=>d("4"),children:[o(r,{targetId:"4",children:"Accordion Item 4"}),o(a,{accordionId:"4",children:"Marzipan candy apple pie icing. Sweet roll pudding drag\xE9e icing icing cookie pie fruitcake caramels. Bonbon candy canes candy canes. Drag\xE9e jelly beans chocolate bar drag\xE9e biscuit fruitcake gingerbread toffee apple pie. Gingerbread donut powder ice cream sesame snaps jelly beans oat cake. Candy wafer pudding drag\xE9e gummies. Carrot cake macaroon cake sesame snaps caramels."})]})]})},x=()=>{const[i,n]=s.exports.useState("");return e(u,{className:"accordion-border",open:i,toggle:t=>{i===t?n():n(t)},children:[e(c,{children:[o(r,{targetId:"1",children:"Accordion Item 1"}),o(a,{accordionId:"1",children:"Gummi bears toffee souffl\xE9 jelly carrot cake pudding sweet roll bear claw. Sweet roll gingerbread wafer liquorice cake tiramisu. Gummi bears caramels bonbon icing croissant lollipop topping lollipop danish. Marzipan tootsie roll bonbon toffee icing lollipop cotton candy pie gummies. Gingerbread bear claw chocolate cake bonbon. Liquorice marzipan cotton candy liquorice tootsie roll macaroon marzipan danish."})]}),e(c,{children:[o(r,{targetId:"2",children:"Accordion Item 2"}),o(a,{accordionId:"2",children:"Souffl\xE9 sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer cookie. Souffl\xE9 fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon souffl\xE9 apple pie cake."})]}),e(c,{children:[o(r,{targetId:"3",children:"Accordion Item 3"}),o(a,{accordionId:"3",children:"Souffl\xE9 sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer cookie. Souffl\xE9 fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon souffl\xE9 apple pie cake."})]}),e(c,{children:[o(r,{targetId:"4",children:"Accordion Item 4"}),o(a,{accordionId:"4",children:"Marzipan candy apple pie icing. Sweet roll pudding drag\xE9e icing icing cookie pie fruitcake caramels. Bonbon candy canes candy canes. Drag\xE9e jelly beans chocolate bar drag\xE9e biscuit fruitcake gingerbread toffee apple pie. Gingerbread donut powder ice cream sesame snaps jelly beans oat cake. Candy wafer pudding drag\xE9e gummies. Carrot cake macaroon cake sesame snaps caramels."})]})]})},B=()=>{const[i,n]=s.exports.useState("");return e(u,{className:"accordion-margin",open:i,toggle:t=>{i===t?n():n(t)},children:[e(c,{children:[o(r,{targetId:"1",children:"Accordion Item 1"}),o(a,{accordionId:"1",children:"Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake."})]}),e(c,{children:[o(r,{targetId:"2",children:"Accordion Item 2"}),o(a,{accordionId:"2",children:"Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake."})]}),e(c,{children:[o(r,{targetId:"3",children:"Accordion Item 3"}),o(a,{accordionId:"3",children:"Tart gummies drag\xE9e lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans souffl\xE9 cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping toffee dessert gummies. Topping apple pie pie croissant cotton candy dessert tiramisu."})]}),e(c,{children:[o(r,{targetId:"4",children:"Accordion Item 4"}),o(a,{accordionId:"4",children:"Cheesecake muffin cupcake drag\xE9e lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake."})]})]})},E=()=>{const[i,n]=s.exports.useState("1");return e(u,{open:i,toggle:t=>{i===t?n():n(t)},children:[e(c,{children:[o(r,{targetId:"1",children:"Accordion Item 1"}),e(a,{accordionId:"1",children:[o("strong",{children:"This is the first item's accordion body."})," You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",o("code",{children:"<AccordionBody>"}),", though the transition does limit overflow."]})]}),e(c,{children:[o(r,{targetId:"2",children:"Accordion Item 2"}),e(a,{accordionId:"2",children:[o("strong",{children:"This is the second item's accordion body."})," You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",o("code",{children:"<AccordionBody>"}),", though the transition does limit overflow."]})]}),e(c,{children:[o(r,{targetId:"3",children:"Accordion Item 3"}),e(a,{accordionId:"3",children:[o("strong",{children:"This is the third item's accordion body."})," You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",o("code",{children:"<AccordionBody>"}),", though the transition does limit overflow."]})]})]})},S=()=>e(h,{defaultOpen:"1",children:[e(c,{children:[o(r,{targetId:"1",children:"Accordion Item 1"}),e(a,{accordionId:"1",children:[o("strong",{children:"This is the first item's accordion body."})," You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",o("code",{children:"<AccordionBody>"}),", though the transition does limit overflow."]})]}),e(c,{children:[o(r,{targetId:"2",children:"Accordion Item 2"}),e(a,{accordionId:"2",children:[o("strong",{children:"This is the second item's accordion body."})," You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",o("code",{children:"<AccordionBody>"}),", though the transition does limit overflow."]})]}),e(c,{children:[o(r,{targetId:"3",children:"Accordion Item 3"}),e(a,{accordionId:"3",children:[o("strong",{children:"This is the third item's accordion body."})," You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",o("code",{children:"<AccordionBody>"}),", though the transition does limit overflow."]})]})]}),H=()=>{const[i,n]=s.exports.useState("1");return e(u,{className:"accordion-without-arrow",open:i,toggle:t=>{i===t?n():n(t)},children:[e(c,{children:[o(r,{targetId:"1",children:"Accordion Item 1"}),o(a,{accordionId:"1",children:"Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon drag\xE9e danish caramels powder. Bear claw drag\xE9e pastry topping souffl\xE9. Wafer gummi bears marshmallow pastry pie."})]}),e(c,{children:[o(r,{targetId:"2",children:"Accordion Item 2"}),o(a,{accordionId:"2",children:"Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw drag\xE9e oat cake drag\xE9e ice cream halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies. Jelly beans candy canes carrot cake. Fruitcake chocolate chupa chups."})]}),e(c,{children:[o(r,{targetId:"3",children:"Accordion Item 3"}),o(a,{accordionId:"3",children:"Oat cake toffee chocolate bar jujubes. Marshmallow brownie lemon drops cheesecake. Bonbon gingerbread marshmallow sweet jelly beans muffin. Sweet roll bear claw candy canes oat cake drag\xE9e caramels. Ice cream wafer danish cookie caramels muffin."})]}),e(c,{children:[o(r,{targetId:"4",children:"Accordion Item 4"}),o(a,{accordionId:"4",children:"Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie claw candy canes muffin cupcake candy caramels tiramisu."})]})]})},T=()=>(s.exports.useEffect(()=>{f.highlightAll()},[]),e(s.exports.Fragment,{children:[o(A,{title:"Accordions",data:[{title:"Components"},{title:"Accordions"}]}),e(b,{children:[o(l,{sm:"12",children:e(m,{title:"Uncontrolled",code:g,children:[o(p,{children:"You may want to open one item at a time, for that you can use accordion."}),o(S,{})]})}),o(l,{sm:"12",children:e(m,{title:"Controlled",code:g,children:[o(p,{children:"Manage a state to control your collapse component."}),o(E,{})]})}),o(l,{sm:"12",children:e(m,{code:y,title:"Accordion Without Arrow",children:[e(p,{children:["Use class ",o("code",{children:".accordion-without-arrow"})," class with ",o("code",{children:"<Accordion>"})," for accordion without arrow."]}),o(H,{})]})}),o(l,{sm:"12",children:e(m,{title:"Border",code:I,children:[e(p,{children:["Use class ",o("code",{children:".accordion-border"})," class with your accordion to create a bordered accordion."]}),o(x,{})]})}),o(l,{sm:"12",children:e(m,{title:"Margin",code:w,children:[e(p,{children:["Use class ",o("code",{children:".accordion-margin"})," class with your accordion to create a accordion with margin."]}),o(B,{})]})}),o(l,{sm:"12",children:o(m,{title:"Hover",code:k,children:o(j,{})})})]})]}));export{T as default};

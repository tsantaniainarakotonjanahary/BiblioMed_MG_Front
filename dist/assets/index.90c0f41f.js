import{o as s,j as r,bN as e,r as c,ce as i,a4 as t,a5 as a,ag as o}from"./index.e711043e.js";import{C as l}from"./index.97dfbaed.js";import{B as n}from"./index.51d05e01.js";import"./App.c3ad3f0b.js";const g=()=>s("div",{className:"demo-vertical-spacing",children:[s("div",{children:[r("span",{children:"Reticulating splines\u2026 0%"}),r(e,{})]}),s("div",{children:[r("span",{children:"Reticulating splines\u2026 25%"}),r(e,{value:"25"})]}),s("div",{children:[r("span",{children:"Reticulating splines\u2026 50%"}),r(e,{value:50})]}),s("div",{children:[r("span",{children:"Reticulating splines\u2026 75%"}),r(e,{value:75})]}),s("div",{children:[r("span",{children:"Reticulating splines\u2026 100%"}),r(e,{value:"100"})]})]}),d=()=>s("div",{className:"demo-vertical-spacing",children:[r(e,{value:25}),r(e,{className:"progress-bar-secondary",value:35}),r(e,{className:"progress-bar-success",value:45}),r(e,{className:"progress-bar-danger",value:55}),r(e,{className:"progress-bar-warning",value:65}),r(e,{className:"progress-bar-info",value:75}),r(e,{className:"progress-bar-dark",value:85})]}),p=()=>s("div",{className:"demo-vertical-spacing",children:[r(e,{value:"25",children:"25%"}),r(e,{value:"35",className:"progress-bar-secondary",children:"35%"}),r(e,{value:"45",className:"progress-bar-success",children:"45%"}),r(e,{value:"55",className:"progress-bar-danger",children:"55%"}),r(e,{className:"progress-bar-warning",value:"65",children:"65%"}),r(e,{className:"progress-bar-info",value:"75",children:"75%"}),r(e,{className:"progress-bar-dark",value:"85",children:"85%"})]}),u=()=>s("div",{className:"demo-vertical-spacing",children:[r(e,{striped:!0,value:20}),r(e,{striped:!0,className:"progress-bar-success",value:40}),r(e,{striped:!0,className:"progress-bar-danger",value:60}),r(e,{striped:!0,className:"progress-bar-warning",value:80}),r(e,{striped:!0,className:"progress-bar-info",value:100})]}),m=()=>s("div",{className:"demo-vertical-spacing",children:[r(e,{animated:!0,striped:!0,value:20}),r(e,{animated:!0,striped:!0,className:"progress-bar-success",value:40}),r(e,{animated:!0,striped:!0,className:"progress-bar-danger",value:60}),r(e,{animated:!0,striped:!0,className:"progress-bar-warning",value:80}),r(e,{animated:!0,striped:!0,className:"progress-bar-info",value:100})]}),v=()=>s(e,{multi:!0,children:[r(e,{bar:!0,color:"danger",value:"15",children:"15%"}),r(e,{bar:!0,color:"warning",value:"50",children:"50%"}),r(e,{bar:!0,color:"primary",value:"10",children:"10%"})]}),P=r("pre",{children:r("code",{className:"language-jsx",children:`

import { Progress } from 'reactstrap'
const ProgressBasic = () => {
  return (
    <div className='demo-vertical-spacing'>
      <div>
        <span>Reticulating splines\u2026 0%</span>
        <Progress />
      </div>
      <div>
        <span>Reticulating splines\u2026 25%</span>
        <Progress value='25' />
      </div>
      <div>
        <span>Reticulating splines\u2026 50%</span>
        <Progress value={50} />
      </div>
      <div>
        <span>Reticulating splines\u2026 75%</span>
        <Progress value={75} />
      </div>
      <div>
        <span>Reticulating splines\u2026 100%</span>
        <Progress value='100' />
      </div>
    </div>
  )
}
export default ProgressBasic
`})}),h=r("pre",{children:r("code",{className:"language-jsx",children:`

import { Progress } from 'reactstrap'

const ProgressColored = () => {
  return (
    <React.Fragment>
      <Progress value={25} />
      <Progress className='progress-bar-secondary' value={35} />
      <Progress className='progress-bar-success' value={45} />
      <Progress className='progress-bar-danger' value={55} />
      <Progress className='progress-bar-warning' value={65} />
      <Progress className='progress-bar-info' value={75} />
      <Progress className='progress-bar-dark' value={85} />
    </React.Fragment>
  )
}
export default ProgressColored
`})}),b=r("pre",{children:r("code",{className:"language-jsx",children:`

import { Progress } from 'reactstrap'

const ProgressMultipleStacked = () => {
  return (
     <Progress multi>
        <Progress bar color='danger' value='15'>
          15%
        </Progress>
        <Progress bar color='warning' value='50'>
          50%
        </Progress>
        <Progress bar color='primary' value='10'>
          10%
        </Progress>
    </Progress>
  )
}
export default ProgressMultipleStacked
`})}),N=r("pre",{children:r("code",{className:"language-jsx",children:`

import { Progress } from 'reactstrap'

const ProgressLabeled = () => {
  return (
    <div className='demo-vertical-spacing'>
      <Progress value='25'>25%</Progress>
      <Progress value='35' className='progress-bar-secondary'>
        35%
      </Progress>
      <Progress value='45' className='progress-bar-success'>
        45%
      </Progress>
      <Progress value='55' className='progress-bar-danger'>
        55%
      </Progress>
      <Progress className='progress-bar-warning' value='65'>
        65%
      </Progress>
      <Progress className='progress-bar-info' value='75'>
        75%
      </Progress>
      <Progress className='progress-bar-dark' value='85'>
        85%
      </Progress>
    </div>
  )
}
export default ProgressLabeled
`})}),f=r("pre",{children:r("code",{className:"language-jsx",children:`

import { Progress } from 'reactstrap'
const ProgressStriped = () => {
  return (
    <React.Fragment>
      <Progress striped value={20} />
      <Progress striped className='progress-bar-success' value={40} />
      <Progress striped className='progress-bar-danger' value={60} />
      <Progress striped className='progress-bar-warning' value={80} />
      <Progress striped className='progress-bar-info' value={100} />
    </React.Fragment>
  )
}
export default ProgressStriped
`})}),x=r("pre",{children:r("code",{className:"language-jsx",children:`

import { Progress } from 'reactstrap'

const ProgressAnimated = () => {
  return (
    <React.Fragment>
      <Progress striped value={20} />
      <Progress striped className='progress-bar-success' value={40} />
      <Progress striped className='progress-bar-danger' value={60} />
      <Progress striped className='progress-bar-warning' value={80} />
      <Progress striped className='progress-bar-info' value={100} />
    </React.Fragment>
  )
}
export default ProgressAnimated
`})}),j=()=>(c.exports.useEffect(()=>{i.highlightAll()},[]),s(c.exports.Fragment,{children:[r(n,{title:"Progress",data:[{title:"Components"},{title:"Progress"}]}),s(t,{children:[r(a,{lg:"12",children:r(l,{title:"Basic Progress",code:P,children:r(g,{})})}),r(a,{lg:"12",children:s(l,{title:"Colored Progress",code:h,children:[s(o,{children:["Use ",r("code",{children:"progress-bar-[color]"})," class with progress to change progress color."]}),r(d,{})]})}),r(a,{lg:"12",children:s(l,{title:"Labeled Progress",code:N,children:[r(o,{children:"Add text between progress tag to create a labeled progress bar."}),r(p,{})]})}),r(a,{lg:"12",children:s(l,{title:"Multiple Stacked",code:b,children:[s(o,{children:["To create a multi colored progress wrap all of your progresses in with ",r("code",{children:"multi"})," prop."]}),r(v,{})]})}),r(a,{lg:"12",children:s(l,{title:"Striped Progress",code:f,children:[s(o,{children:["Use ",r("code",{children:"striped"})," prop with progress to create a striped progress bar."]}),r(u,{})]})}),r(a,{lg:"12",children:s(l,{title:"Animated Progress",code:x,children:[s(o,{children:["Use ",r("code",{children:"animated"})," prop with progress to animate progress bar."]}),r(m,{})]})})]})]}));export{j as default};

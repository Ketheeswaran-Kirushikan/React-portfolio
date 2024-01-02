import React from 'react'
import{Element} from 'react-scroll'
import ExContainer from './exContent/exContainer'
import "./exContent.css"

const exContent = () => {
  return (
    <Element className='exContent' id='experience'>
        <h1>Experience</h1>
        <div className='boxEx'>
            <ExContainer number="6 Months" title="Banking Staff"></ExContainer>
            <ExContainer number="6 Months" title="Development Officer"></ExContainer>
            <ExContainer number="2 Years" title="Accounting Field" style={{backgroundColor:"#f64c08"}}></ExContainer>
            <ExContainer number="2 years" title="Mechinary Handling"></ExContainer>
        </div>
    </Element>
  )
}

export default exContent
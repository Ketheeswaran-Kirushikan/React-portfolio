import React from 'react'
import { Element } from 'react-scroll'
import { LinearProgress } from '@mui/material'
import "./skillContent.css"

const skillContent = () => {
  return (
   <Element className='skillContainer' id='skills'>
    <div className='skillContainer_text container1'>
      <h2>Primary Skills</h2>
      <div className='skillCon_set'>
        <h5>Python</h5>
        <div className='skillCon_set_slider slider1'>
          <LinearProgress variant='determinate' value={75}></LinearProgress>
        </div>
      </div>
      <div className='skillCon_set'>
        <h5>HTML/CSS</h5>
        <div className='skillCon_set_slider slider2'>
          <LinearProgress variant='determinate' value={90}></LinearProgress>
        </div>
      </div>
      <div className='skillCon_set'>
        <h5>Java Script</h5>
        <div className='skillCon_set_slider slider3'>
          <LinearProgress variant='determinate' value={70}></LinearProgress>
        </div>
      </div>
      <div className='skillCon_set'>
        <h5>PHP</h5>
        <div className='skillCon_set_slider slider4'>
          <LinearProgress variant='determinate' value={65}></LinearProgress>
        </div>
      </div>
      <div className='skillCon_set'>
        <h5>Figma & Adobe XD</h5>
        <div className='skillCon_set_slider slider5'>
          <LinearProgress variant='determinate' value={70}></LinearProgress>
        </div>
      </div>
      <div className='skillCon_set'>
        <h5>SQL</h5>
        <div className='skillCon_set_slider slider6'>
          <LinearProgress variant='determinate' value={70}></LinearProgress>
        </div>
      </div>
      <div className='skillCon_set'>
        <h5>React</h5>
        <div className='skillCon_set_slider slider7'>
          <LinearProgress variant='determinate' value={60}></LinearProgress>
        </div>
      </div>
    </div>
    <div className='skillContainer_text container2'>
      <h2>Secondary Skills</h2>
      <div className='skillCon_set'>
        <h5>Accounting Knowledge</h5>
        <div className='skillCon_set_slider slider1'>
          <LinearProgress variant='determinate' value={90}></LinearProgress>
        </div>
      </div>
      <div className='skillCon_set'>
        <h5>Photoshop Adobe</h5>
        <div className='skillCon_set_slider slider2'>
          <LinearProgress variant='determinate' value={70}></LinearProgress>
        </div>
      </div>
      <div className='skillCon_set'>
        <h5>Machinary Handling</h5>
        <div className='skillCon_set_slider slider3'>
          <LinearProgress variant='determinate' value={80}></LinearProgress>
        </div>
      </div>
      </div>
   </Element>
  )
}

export default skillContent
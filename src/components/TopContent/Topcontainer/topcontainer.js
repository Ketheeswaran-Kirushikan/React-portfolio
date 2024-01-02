import React from 'react'
import {Link} from "react-scroll"
import "./topcontainer.css"
import profileImage from '../../../Assets/2.jpg';

const topcontainer = () => {
  return (
    <div className='topContainer'>
        <div className='profileBox'>
            <img src={profileImage} alt="Profile"/>
      </div>
        <div className='topContent_topContainer'>
            <h1>
                Mr.Ketheeswaran Kirushikan
            </h1>
            <p>A Professional Web Developer and UI UX Designer</p>
            <a href='https://drive.google.com/file/d/1NDppNXj45AEXnZoo-hB-8K_HYeNQDwSG/view?usp=drive_link'><button className='cvButton'>Download CV</button></a>
            <Link to ="projects" smooth={true} duration={500}><button className='workButton'>My Work</button></Link>
        </div>
    </div>
  )
}

export default topcontainer
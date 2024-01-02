import React from 'react'
import "./conBox.css"
import { Element } from 'react-scroll'
import { IconButton } from '@mui/material'
import{Facebook,LinkedIn,Instagram} from "@mui/icons-material"

const conBox = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contactBox'>
            <p>
                Email: <span>KetheesKirushi@gmail.com</span>
            </p>
            <p>
                Github Username: <span>Kirushikan_Ketheeswaran</span>
            </p>
            <p>
                Medium Username: <span> <a href='https://medium.com/@atkirushi'>Kirushikan Ketheeswaran</a></span>
            </p>
            <p>
                Contact Number: <span> <a href='tel:+94762015196'>+94 762015196</a></span>
            </p>
           <div className='contactIcons'>
            <a href='http://linkedin.com/in/kirushikan-ketheeswaran-555358226'>
                <IconButton>
                    <LinkedIn/>
                </IconButton>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100011316999782&mibextid=LQQJ4d'>
                <IconButton>
                    <Facebook/>
                </IconButton>
            </a>
            <a href='https://instagram.com/ketheeswaran_kirushikan?igshid=OGQ5ZDc2ODk2ZA=='>
                <IconButton>
                    <Instagram/>
                </IconButton>
            </a>
            </div>
        </div>
    </Element>
  )
}

export default conBox
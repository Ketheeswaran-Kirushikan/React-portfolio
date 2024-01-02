import React from 'react'
import Projects from './porjects/projects'
import { Element } from 'react-scroll'
import"./workContent.css"
const project =[
    {
        img:"https://cdn.wallpapersafari.com/57/90/BRi1qC.jpg",
        title :"Future Project",
        desc:"information about the nature, purpose, and goals of the project. Please share details such as the industry, target audience, main features, and any specific technologies or platforms involved. ",
        link:"www.google.com"

    },
    {
        img:"https://cdn.wallpapersafari.com/57/90/BRi1qC.jpg",
        title :"Future Project",
        desc:"information about the nature, purpose, and goals of the project. Please share details such as the industry, target audience, main features, and any specific technologies or platforms involved. ",
        link:"www.google.com"

    },
    {
        img:"https://cdn.wallpapersafari.com/57/90/BRi1qC.jpg",
        title :"Future Project",
        desc:"information about the nature, purpose, and goals of the project. Please share details such as the industry, target audience, main features, and any specific technologies or platforms involved. ",
        link:"www.google.com"

    },
    {
        img:"https://cdn.wallpapersafari.com/57/90/BRi1qC.jpg",
        title :"Future Project",
        desc:"information about the nature, purpose, and goals of the project. Please share details such as the industry, target audience, main features, and any specific technologies or platforms involved. ",
        link:"www.google.com"

    },
    {
        img:"https://cdn.wallpapersafari.com/57/90/BRi1qC.jpg",
        title :"Future Project",
        desc:"information about the nature, purpose, and goals of the project. Please share details such as the industry, target audience, main features, and any specific technologies or platforms involved. ",
        link:"www.google.com"

    },
    {
        img:"https://cdn.wallpapersafari.com/57/90/BRi1qC.jpg",
        title :"Future Project",
        desc:"information about the nature, purpose, and goals of the project. Please share details such as the industry, target audience, main features, and any specific technologies or platforms involved. ",
        link:"www.google.com"

    },
]

const workContent = () => {
  return (
    <Element className="projects" id="projects">
        <h1>My Projects</h1>
        <p>Here Some Projects which I done for Making lives of people easy.</p>
        <div className='projectContainer'>
            {
            project.map((project,index)=>{
                return(
                    <Projects 
                    key={index} 
                    img={project.img} 
                    title={project.title}
                    desc={project.desc} 
                    link={project.link}>
                    </Projects>
                )
            })
            }
        </div>
    </Element>
  )
}

export default workContent
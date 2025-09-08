import React from 'react'
import Card from '../Card/Card'
import "./Projects.css"
import va from "../../assets/image.png"
import fw from "../../assets/image1.png"
import tti from "../../assets/image2.png"
import ise from "../../assets/image3.png"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const Projects = () => {
  useGSAP(()=>{
    gsap.from("#para",{
      y: 100,
duration: 1,
opacity: 0,
stagger: 1,
scrollTrigger: {
    trigger: "#para",
    scroll: "body",
    scrub: 2,
  
}
    })
     gsap.from(".slider",{
      y: 100,
duration: 1,
opacity: 0,
stagger: 1,
scrollTrigger: {
    trigger: ".slider",
    scroll: "body",
    scrub: 2,
    
}
    })
  })
  return (
    <div>
        <div id="projects">
            <h1 id='para'>
               MY PROJECTS
            </h1>
             <div className="slider">
                <Card title={"NUMBER WAR"} image={va} />
                 <Card title={"READERNEST"} image={fw} />
                  <Card title={"JOB-PORTAL"} image={tti} />
                   <Card title={"HMS"} image={ise} />
                
             </div>
        </div>
    </div>
  )
}

export default Projects
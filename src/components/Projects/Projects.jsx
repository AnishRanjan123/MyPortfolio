import React from 'react'
import Card from '../Card/Card'
import "./Projects.css"
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import tti from "../../assets/tti.png"
import ise from "../../assets/ise.png"
import cb from "../../assets/cb.png"
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
                <Card image={va}/>
                 <Card image={fw}/>
                  <Card image={tti}/>
                   <Card image={ise}/>
                    <Card image={cb} />
             </div>
        </div>
    </div>
  )
}

export default Projects
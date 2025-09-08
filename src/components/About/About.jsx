import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import webD from "../../assets/webD.jpeg"
import dsa from "../../assets/dsa.png"
import java from "../../assets/java.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const About = () => {
    useGSAP(()=>{
    gsap.from(".circle", {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger:1,
    scrollTrigger:{
       trigger:".circle",
       scroll:"body",
       scrub:2,
     
    }
    
});
 gsap.from(".line", {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger:1,
    scrollTrigger:{
       trigger:".line",
       scroll:"body",
       scrub:2,
     
    }
    
});
 gsap.from(".aboutdetails h1", {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger:1,
    scrollTrigger:{
       trigger:".aboutdetails h1",
       scroll:"body",
       scrub:2,
     
    }
    
});

 gsap.from(".aboutdetails ul", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger:1,
    scrollTrigger:{
       trigger:".aboutdetails ul",
       scroll:"body",
       scrub:2,
        
    }
    
});
 gsap.from(".rightabout", {
    x: 100,
    duration: 1,
    opacity: 0,
    stagger:1,
    scrollTrigger:{
       trigger:".rightabout",
       scroll:"body",
       scrub:2
    }
    
});
    })
  return (
    <div id="about">
        <div className="leftabout">
            <div className="circle-line">
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                
            </div>
            <div className="aboutdetails">
                <div className="personalinfo">
                    <h1>Personal Info</h1>
                    <ul>
                        <li>
                            <span>Name</span> : Anish Ranjan Sharma
                        </li>
                         <li>
                            <span>Gender</span> : Male
                        </li>
                         <li>
                            <span>Language Known</span> : English/Hindi
                        </li>
                    </ul>
                </div>
                  <div className="education">
                    <h1>Education</h1>
                    <ul>
                        <li>
                            <span>Degree</span> : B.Tech
                        </li>
                         <li>
                            <span>Branch</span> : Computer Science and Engineering
                        </li>
                         <li>
                            <span>CGPA</span> : 8.5
                        </li>
                    </ul>
                </div>
                  <div className="skill">
                    <h1>Skill</h1>
                    <ul>
                        <li>
                            Web/iOS Developer
                        </li>
                         <li>
                           DSA
                        </li>
                         <li>
                           JAVA
                        </li>
                    </ul>
                </div>
            </div>
        </div>
         <div className="rightabout">
        {/* cards */}
            <Card title={"WEB DEVELOPER/iOS DEVELOPER"} image={webD}/>
            <Card title={"DSA"} image={dsa}/>
            <Card title={"JAVA"} image={java}/>
         </div>
    </div>
  )
}

export default About
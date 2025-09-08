import React from 'react'
import "./Contacts.css"
import con from "../../assets/contact.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const Contacts = () => {
    useGSAP(()=>{
         gsap.from(".leftcontact img",{
      x: -100,
duration: 1,
opacity: 0,
stagger: 1,
scrollTrigger: {
    trigger: ".leftcontact img",
    scroll: "body",
    scrub: 2,
    markers:false

}
    })
      gsap.from("form",{
      x: 100,
duration: 1,
opacity: 0,
stagger: 1,
scrollTrigger: {
    trigger: "form",
    scroll: "body",
    scrub: 2,
   
}
    })
    })
  return (
    <div id='contact'>
      <div className="leftcontact">
        <img src={con} alt=''/>
      </div>
      <div className="rightcontact">
        <form action="https://formspree.io/f/xzzayaqe" method='POST'>
            <input name='username' type="text" placeholder='Name' />
            <input name='email' type="email" placeholder='email' />
            <textarea name="message" id="textarea" placeholder='message me'></textarea>
            <input type='submit' id='btn' placeholder='submit'/>
        </form>
      </div>
    </div>
  )
}

export default Contacts
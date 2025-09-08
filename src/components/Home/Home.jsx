import React from 'react'
import "./Home.css"
import man from "../../assets/myImage.png"
import { TypeAnimation } from 'react-type-animation';
import { Button } from 'react-scroll';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
const Home = () => {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
        y: 90,
        duration: 1,
        opacity: 0
    })
     tl1.from(".line2", {
        y: 90,
        duration: 1,
        opacity: 0
    })
     tl1.from(".line3", {
        y: 100,
        duration: 1,
        opacity: 0
    })
    gsap.from(".righthome img", {
    x: 200,
    duration: 1,
    opacity: 0
});
   
})
  return (
   <div id="home">
    <div className="lefthome">
        <div className="homedetails">
            <div className="line1">I'M</div>
            <div className="line2">ANISH RANJAN SHARMA</div>
            <div className="line3">
              <TypeAnimation
                sequence={[
                  "WEB DEVELOPER", 1500,
                  "iOS DEVELOPER", 1500,
                ]}
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </div>
          <Button
  onClick={() =>
    window.open(
      "https://drive.google.com/file/d/1yBkzWZN8kxCoyOH_mUYzt-M2qDoEwKwM/view?usp=share_link",
      "_blank"
    )
  }
>
  HIRE ME
</Button>


        </div>
    </div>
    <div className="righthome">
        <img src={man} alt=''/>
    </div>
   </div>
  )
}

export default Home
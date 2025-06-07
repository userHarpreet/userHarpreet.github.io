import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.jpg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
              A Tech Artisan from Chandigarh(IN) and the founder of mBEDed μSystems, 
              where we brew quirky tech with serious skill. 
              Think of me as a brain surgeon for gadgets — designing custom hardware, programming microcontrollers, 
              and adding a splash of IoT magic to everyday problems. 
              I turn ideas into devices that make people say, “Wait… did that just happen?” 
              Whether it’s a clever hack or a full-blown product, I’m here to make tech feel like wizardry.
            </p>
            <div className="about-action">
              <Button
                link="https://drive.google.com/file/d/1fvaagR0KHZsGZZvZJWqNL4mRsfLm-ThC/view"
                target="_blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }

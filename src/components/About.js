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
              I'm a mad scientist from Chandigarh, India.
              Always up to some high-tech shenanigans.
              Picture me as the puppet master of microcontrollers, or better yet,
              the brain surgeon for gadgets, programming them to jazz up the most mundane tasks with a dash of flair.
              My mission? To craft gadgets so magical they make users exclaim, "Wow, did that just happen?"
              thanks to a sprinkle of IoT wizardry. After testing the waters in the market,
              I took the plunge and started my own venture—mBEDed μSystems. Now,
              I'm living the dream, whipping up quirky tech solutions with my eclectic team,
              keeping the job scene buzzing with excitement.
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

import React from "react"

import { Container, Title, Button } from "./common"

import intro from "../assets/image/intro.jpg"

import "./intro.css"

const Intro = () => {
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
        <div className="intro">
          <div className="intro-text">
            <p>Howdy! I am</p>
            <h1>Harpreet Singh</h1>
            <h3>Founder, mBEDed µSystems</h3>
            <ul>
              <li>Hardware Developer</li>
              <li>Firmware Programmer</li>
              <li>PCB Designer</li>
              <li>IoT Implementer</li>
            </ul>
            <div className="action">
              <Button
                link="https://drive.google.com/file/d/1fvaagR0KHZsGZZvZJWqNL4mRsfLm-ThC/view"
                target="__blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#about" ml="15px" title="About Me" />
            </div>
          </div>
          <div className="intro-image">
            <div className="image">
              <img alt="intro" src={intro} />
            </div>
          </div>
        </div>
        <div class="scrolldown-wrapper">
            <div class="scrolldown">
                <svg height="30" width="10">
                    <circle class="scrolldown-p1" cx="5" cy="15" r="2" />
                    <circle class="scrolldown-p2" cx="5" cy="15" r="2" />
                </svg>
            </div>
        </div>
      </Container>
    </div>
  )
}

export { Intro }

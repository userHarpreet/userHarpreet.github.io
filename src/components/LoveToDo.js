import React from "react"

import { Container, Title } from "./common"

import watchingmovies from "../assets/image/movies.svg"
import writtingblog from "../assets/image/writtingblog.svg"
import travelling from "../assets/image/travelling.svg"
import mountainhiking from "../assets/image/mountainhiking.svg"
import cooking from "../assets/image/cooking.svg"

import "./lovetodo.css"

const LoveToDo = () => {
  return (
    <div className="love-to-do-area">
      <Container>
        <Title side="right" title="Love To Do" />
        <div className="love-to-do">
          <div className="stickpad">
            <img alt="" src={watchingmovies} />
            <h4>Movies</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={travelling} />
            <h4>Travelling</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={mountainhiking} />
            <h4>Mountain Hiking</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={cooking} />
            <h4>Cooking</h4>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { LoveToDo }

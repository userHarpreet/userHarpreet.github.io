import React from "react"

import { Container, Title, Button } from "./common"

import "./contact.css"

const Contact = () => {
  return (
    <div id="contact" className="contact-area">
      <Container>
        <Title side="right" title="Contact" />
        <div className="contact">
          <div className="contact-status">
            <p>
              Let's connect before these AI decide to go solo – reach out and let's spark some laughter together!
            </p>
            <div>
              <Button
                title="Contact Me"
                mt="25px"
                bgColor="#00cf5d"
                color="#fff"
                link="mailto:user.harpreetsingh@outlook.com"
              />
            </div>
          </div>
          <div className="contact-details">
            <ul>
              <li>
                <h5>Email</h5>
                <p>
                  user.harpreetsingh@outlook.com <span>(Recommended)</span>
                </p>
              </li>
              <li>
                <h5>Social</h5>
                <p>
                  Linkedin - @userHarpreet <span>(Slow response)</span>
                </p>
              </li>
              <li>
                <h5>Address</h5>
                <p>Chandigarh, India - 160017</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Contact }

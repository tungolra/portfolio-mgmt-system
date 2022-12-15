import React from "react";
import "./Footer.css";
import linkedInIcon from "../../images/LI-In-Bug.png";
import gitHubIcon from "../../images/github-logo.png";
import {TfiEmail }from "react-icons/tfi"

export default function Footer() {
  return (
    <footer id="footer">
      <div className="contact-details">
        <span>Ralph Tungol</span>
        <span type="email" action="" ><TfiEmail/> rarrtungol@gmail.com</span>
      </div>
      <div className="socials-icons-container">
        <div>
          <a href="https://github.com/tungolra">
            <img className="socials-icons" src={gitHubIcon} alt="github-icon" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ralph-tungol/">
            <img
              className="socials-icons"
              src={linkedInIcon}
              alt="linkedin-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import "./Footer.css";
import linkedInIcon from "../../images/LI-In-Bug.png";
import gitHubIcon from "../../images/github-logo.png";
import { Link } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import { GrDocumentWord, GrDocumentText } from "react-icons/gr";
import { CgFileDocument } from "react-icons/cg";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="contact-details">
        <span>Ralph Tu&#241;gol</span>
        <span type="email" action="">
          <TfiEmail /> rarrtungol@gmail.com
        </span>
      </div>
      <div className="socials-icons-container">
        <div>
          <Link to="/cv">
            <CgFileDocument title="Ralph Tungol Resume 2022" className="socials-icons resume" />
          </Link>
        </div>
        <div>
          <a href="https://github.com/tungolra">
            <img
              className="socials-icons"
              src={gitHubIcon}
              alt="github-icon"
              title="GitHub Repo"
            />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ralph-tungol/">
            <img
              className="socials-icons"
              src={linkedInIcon}
              alt="linkedin-icon"
              title="LinkedIn"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

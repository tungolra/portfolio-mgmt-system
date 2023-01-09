import React from "react";

import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import linkedInIcon from "../../images/LI-In-Bug.png";
import gitHubIcon from "../../images/github-logo.png";
import { Link } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import { CiMail } from "react-icons/ci"
import { CgFileDocument } from "react-icons/cg";
import AboutBlurbI from "./AboutBlurbI";
import AboutBlurbII from "./AboutBlurbII";
import * as seed from "../../seed.js";
import MatrixBackground from "../../components/MatrixBackground/MatrixBackground";

import "./Home.css";
import Me from "./Me";

function Header() {
  return (
    <div className="header-container">
      <MatrixBackground />
      <div className="row title">
        <h3>Ralph Tu&#241;gol</h3>
        <h4>Full-Stack Software Developer</h4>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about-container">
      <section className="about">
        <h3 className="about-title">Welcome.</h3>
        <Me />
      </section>
    </div>
  );
}

function Footer() {
  return (
    <footer id="footer">
      <div className="contact-details">
        <span >Ralph Tu&#241;gol</span>
        <a className="mailto" href="mailto:rarttungol@gmail.com">
          <TfiEmail /> rarrtungol@gmail.com
        </a>
      </div>
      <div className="socials-icons-container">
        <div >
          <a className="mailto" href="mailto:rarttungol@gmail.com">
            <CiMail className="socials-icons" size="45px"/>
          </a>
        </div>
        <div>
          <Link to="/cv" target="_blank">
            <CgFileDocument
              title="Ralph Tungol Resume 2022"
              className="socials-icons resume"
            />
          </Link>
        </div>
        <div>
          <a href="https://github.com/tungolra" target="_blank">
            <img
              className="socials-icons"
              src={gitHubIcon}
              alt="github-icon"
              title="GitHub Repo"
            />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ralph-tungol/" target="_blank">
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

export default function Home({ user }) {
  return (
    <>
      <div className="bg-image">
        <div className="home-container">
          <Header />
          <About />
          <Projects seed={seed} />
          <Skills user={user} seed={seed} />
        </div>
      </div>
      <Footer />
    </>
  );
}

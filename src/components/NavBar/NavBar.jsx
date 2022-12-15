import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import SlideInNav from "../SlideInNav/SlideInNav";
import ReactCSSTransitionGroup from "react-transition-group";

export default function NavBar() {
  const [modalOpened, setModalOpened] = useState(false);

  function handleClick() {
    setModalOpened((prev) => !prev);
  }
  return (
    <nav>
      {/* <div className="container nav-container"> */}
      <div
        className={modalOpened ? "change" : "hamburger-menu"}
        onClick={handleClick}
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <SlideInNav modalOpened={modalOpened} handleClick={handleClick} />
      <Link className="home-nav" to="/">
        [Home]
      </Link>
      <a className="projects-nav" href="#projects">
        <div>[Projects]</div>
      </a>
      <a className="skills-nav" href="#skills">
        <div>[Skills]</div>
      </a>
    </nav>
  );
}

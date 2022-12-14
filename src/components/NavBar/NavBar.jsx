import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  const [modalOpened, setModalOpened] = useState(false);
  console.log(modalOpened);

  return (
    <nav>
      {/* <div className="container nav-container"> */}
      <div className="hamburger-menu" onClick={() => setModalOpened(true)}>
        <RxHamburgerMenu />
      </div>
      {modalOpened ? (
        <div className="overlay">
          <div className="exit-modal" onClick={() => setModalOpened(false)}>
            x
          </div>
          <div class="overlay-content">
            <a href="/" onClick={() => setModalOpened(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setModalOpened(false)}>
              About
            </a>
            <a href="#projects" onClick={() => setModalOpened(false)}>
              Projects
            </a>
            <a href="#skills" onClick={() => setModalOpened(false)}>
              Skills
            </a>
            {/* <a href="#">Blog</a> */}
            <a href="#">Contact</a>
          </div>
        </div>
      ) : (
        ""
      )}
      <Link className="home" to="/">
        Home
      </Link>
      <a className="projects" href="#projects">
        <div>Projects</div>
      </a>
      <a className="skills" href="#skills">
        <div>Skills</div>
      </a>
    </nav>
  );
}

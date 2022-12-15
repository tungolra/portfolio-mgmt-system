import React from "react";
import "./SlideInNav.css";

export default function SlideInNav({
  modalOpened,
  handleClick,
}) {
  return (
    <>
      {modalOpened ? (
        <div className="overlay">
          <div class="overlay-content">
            <a href="/" onClick={handleClick}>
              Home
            </a>
            <a href="#about" onClick={handleClick}>
              About
            </a>
            <a href="#projects" onClick={handleClick}>
              Projects
            </a>
            <a href="#skills" onClick={handleClick}>
              Skills
            </a>
            {/* <a href="#">Blog</a> */}
            <a href="#footer" onClick={handleClick}>
              Contact
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

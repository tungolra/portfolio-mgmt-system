import React from "react";
import "./SlideInNav.css";
import { Link } from "react-router-dom";
import NewEntry from "../../pages/NewEntry/NewEntry";

export default function SlideInNav({ modalOpened, handleClick, user }) {
  return (
    <>
      {modalOpened ? (
        <div className="overlay">
          <div class="overlay-content">
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
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
            {user ? <Link to="/entry" onClick={handleClick} >New Entry</Link> : ""}
            {user ? <Link to="/new-project" onClick={handleClick} >Add Project</Link> : ""}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

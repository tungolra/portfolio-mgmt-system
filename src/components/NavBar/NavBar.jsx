import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineAppstore, AiOutlineHome } from "react-icons/ai";
import { BsLightning } from "react-icons/bs";

import NewEntry from "../../pages/NewEntry/NewEntry";

function SlideInNav({ modalOpened, handleClick, user }) {
  return (
    <>
      {modalOpened ? (
        <div className="overlay">
          <div className="overlay-content">
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


export default function NavBar({ setUser, user }) {
  const [modalOpened, setModalOpened] = useState(false);

  function handleClick() {
    setModalOpened((prev) => !prev);
  }
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <div
        className={modalOpened ? "change" : "hamburger-menu"}
        onClick={handleClick}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <SlideInNav
        modalOpened={modalOpened}
        handleClick={handleClick}
        user={user}
      />
      <Link to="/" className="home-nav" title="Home">
        <AiOutlineHome />
      </Link>
      <a className="projects-nav" title="Projects" href="#projects">
        <AiOutlineAppstore />
      </a>
      <a className="skills-nav" title="Skills" href="#skills">
        <BsLightning />
      </a>
      <a className="contact-nav" title="Contact" href="#footer">
        <BiMessageDetail />
      </a>
      <Link className="logout" onClick={handleLogOut}>
        {user ? <RiLogoutBoxRLine /> : ""}
      </Link>
    </nav>
  );
}

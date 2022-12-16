import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import SlideInNav from "../SlideInNav/SlideInNav";
import * as userService from "../../utilities/users-service";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineAppstore, AiOutlineHome } from "react-icons/ai";
import { BsLightning } from "react-icons/bs";

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
      <a className="home-nav" title="Home" href="/">
        <AiOutlineHome />
      </a>
      <a className="projects-nav" title="Projects" href="#projects">
        <AiOutlineAppstore />
      </a>
      <a className="skills-nav" title="Skills" href="#Skills">
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

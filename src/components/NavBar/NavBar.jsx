import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <a href="#projects">
        <div className="projects">Projects</div>
      </a>
      <a href="#skills">
        <div className="skills">Skills</div>
      </a>
    </nav>
  );
}

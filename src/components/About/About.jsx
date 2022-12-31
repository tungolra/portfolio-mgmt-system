import React from "react";
import "./About.css";
import AboutBlurbI from "./AboutBlurbI";
import AboutBlurbII from "./AboutBlurbII";

export default function About() {
  return (
    <div className="about-container">
      <section className="about">
        <h3 className="about-title">Building this portfolio</h3>
        <AboutBlurbII />
      </section>
    </div>
  );
}

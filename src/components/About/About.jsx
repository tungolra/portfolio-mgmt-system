import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <section>
        <h3 id="about" className="about-title">
          About
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit itaque
          totam in similique ab illo? Et velit harum doloremque sequi
          repellendus voluptatum, commodi maxime praesentium quo, autem, veniam
          nulla excepturi.
        </p>
      </section>
      <section>
        <h3 className="about-title">Building this portfolio</h3>
        <p>
          - mobile first... - pure css - implementing hooks - adding email form
          - theme: use of vs code and CLI font
        </p>
      </section>
    </div>
  );
}

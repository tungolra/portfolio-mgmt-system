import React from "react";
import "./Skills.css";
import * as seeds from "../../seed.js";

export default function Skills() {
  return (
    <div className="skills-container">
    
      <h3 id="skills"> Skills </h3>
      <section className="skills">
        {seeds.skills.map((skill, idx) => (
          <div key={idx} className="skill-item">
            <div>{skill.skill}</div>
            <img className="tech-icons" src={skill.img} alt={skill.skill} />
          </div>
        ))}
      </section>
    </div>
  );
}

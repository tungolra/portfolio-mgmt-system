import React from "react";
import "./Skills.css";
import * as seeds from "../../seed.js";

export default function Skills() {
  return (
    <section className="skills-container">
      {seeds.skills.map((skill) => (
        <div className="skill-item">
          <div>{skill.skill}</div>
          <img src={skill.img} alt={skill.name} />
        </div>
      ))}
    </section>
  );
}

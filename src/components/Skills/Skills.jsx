import React from "react";
import { Link } from "react-router-dom";
import "./Skills.css";
import * as seeds from "../../seed.js";

export default function Skills() {
  return (
    <div className="skills-container">
      <h3 id="skills"> Project Applications </h3>
      <section className="skills">
        <h4>Languages</h4>
        <div className="skills-wrapper">

        {seeds.languages.map((skill, idx) => (
          <div key={idx} className="skill-item-container">
            <div  className="skill-item">
              <img className="tech-icons" src={skill?.img} alt={skill.skill} />
            </div>
            <div className="skill-item-details">
              <div><strong>{skill?.skill}</strong></div>
              <div className="skill-subtype">#{skill?.subtype}</div>
              {/* <div className="skill-count-container">
                <label>Times Used</label>
                <div className="skill-count">x</div>
              </div> */}
            </div>
          </div>
        ))}
        </div>
      </section>
      <section className="skills">
        <h4>Technologies</h4>
        <div className="skills-wrapper">

        {seeds.technologies.map((skill, idx) => (
          <div key={idx} className="skill-item-container">
            <div className="skill-item">
              <img className="tech-icons" src={skill?.img} alt={skill.skill} />
            </div>
            <div className="skill-item-details">
              <div><strong>{skill?.skill}</strong></div>
              <div className="skill-subtype">#{skill?.subtype}</div>
              {/* <div className="skill-count-container">
                <div className="skill-count">Times Used: x</div>
              </div>
                <Link className="link-to-all-work" to="/all-work">
                  See Projects/Labs
                </Link> */}
            </div>
          </div>
        ))}
        </div>
      </section>
    </div>
  );
}

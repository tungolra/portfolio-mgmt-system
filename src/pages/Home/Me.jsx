import React, { useState } from "react";
import "./Home.css";
import * as seed from "../../seed.js";

export default function Me() {
  const [containerDisplay, setContainerDisplay] = useState(aboutMe());
  const sections = ["About Me", "My Tech Stack", "My Education"];
  function aboutMe() {
    return (
      <div className="about-me">
        <p>
          I'm a junior full stack web developer whose looking for mentorship in
          his next role. I have a strong background using the latest tech
          stacks, specializing in MongoDB, ExpressJS, NodeJS, and ReactJS (MERN)
          as my preferred tech stack.
        </p>
        <p>
          I continue to develop my own projects to learn more technologies and
          understand their applications for various business solutions.
        </p>
      </div>
    );
  }
  function mySkills() {
    return (
      <div className="my-skills">
        <div className="skill-type">
          <h4>Languages</h4>
          {seed.languages.map((s) => (
            <div className="skill-details">
              <img src={s.img} alt="X" />
              <p>{s.skill}</p>
            </div>
          ))}
        </div>
        <div className="skill-type">
          <h4>Technologies</h4>
          {seed.technologies.map((s) => (
            <div className="skill-details">
              <img src={s.img} alt="X" />
              <p>{s.skill}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  function myEducation() {
    return (
      <div className="my-education">
        {seed.education.map((e) => (
          <div className="edu-details">
            <div>
              <img className="edu-img" src={e.img} alt="X" />
            </div>
            <div>
              <h4>{e.school}</h4>
              <p>
                {e.subj} | {e.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  function chooseDisplay(str) {
    if (str === sections[0]) return aboutMe;
    if (str === sections[1]) return mySkills;
    if (str === sections[2]) return myEducation;
  }
  const section = () => {
    return (
      <>
        {sections.map((s) => (
          <button
            className="filter-button section-select"
            onClick={() => setContainerDisplay(chooseDisplay(s))}
          >
            {s}
          </button>
        ))}
      </>
    );
  };
  return (
    <div className="me-container">
      <div className="section-container">{section()}</div>
      <div className="container-display">{containerDisplay}</div>
    </div>
  );
}

import React, { useState } from "react";
import "./Home.css";
import * as seed from "../../seed.js";

export default function Me() {
  const [containerDisplay, setContainerDisplay] = useState(aboutMe());

  const sections = ["About Me", "About This Portfolio", "My Education"];

  function chooseDisplay(str) {
    if (str === sections[0]) return aboutMe;
    if (str === sections[1]) return aboutThisPortfolio;
    if (str === sections[2]) return myEducation;
  }

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

  function aboutThisPortfolio() {
    return (
      <div className="about-me">
        <p>
          This is a React app that demonstrates the use of custom components,
          React hooks, and Redux. Rather than using native components or styling
          frameworks, I've made it a point to use pure CSS, vanilla JS, and HTML
          to showcase foundational skills.
        </p>
        <p>
          This application is under development to add the following features:
          <ul>
            <li>
              CRUD functions to add new Projects and Skills as I continue
              learning new languages and technologies.
            </li>
            <li>Blog Page to document my learning process.</li>
          </ul>
        </p>
      </div>
    );
  }
  // function mySkills() {
  //   return (
  //     <div className="my-skills">
  //       <div className="skill-type">
  //         <h4>Languages</h4>
  //         {seed.languages.map((s) => (
  //           <div className="skill-details">
  //             <img src={s.img} alt="X" />
  //             <p>{s.skill}</p>
  //           </div>
  //         ))}
  //       </div>
  //       <div className="skill-type">
  //         <h4>Technologies</h4>
  //         {seed.technologies.map((s) => (
  //           <div className="skill-details">
  //             <img src={s.img} alt="X" />
  //             <p>{s.skill}</p>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
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

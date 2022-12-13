import React from "react";
import "./Projects.css";
import * as seed from "../../seed.js";

export default function Projects() {
  return (
    // credits and thanks to Christian Schaefer
    <>
      <div id="projects" className="projects-container">
      <label className="projects-title">Projects</label>
        <section className="carousel" aria-label="Gallery">
          <ol className="carousel__viewport">
            {seed.projects.map((project, idx) => (
              <li
                key={idx}
                id={`carousel__slide${idx + 1}`}
                tabindex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <div>{project.name}</div>
                  <img
                    className="img"
                    src="../../images/logo192.png"
                    alt="gif here"
                  />
                  {/* <a href={`#carousel__slide${idx}`} className="carousel__prev">
                    Go to last slide
                  </a>
                  <a
                    href={`#carousel__slide${idx + 2}`}
                    className="carousel__next"
                  >
                    Go to next slide
                  </a> */}
                  <a href={project.site == "" ? "#" : project.site}>
                    <div className="carousel__link">View Live</div>
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}

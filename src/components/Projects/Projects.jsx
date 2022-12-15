import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export default function Projects({ seed }) {
  return (
    // credits and thanks to Christian Schaefer
    <>
      <div id="projects" className="projects-container">
        <h3>Projects</h3>
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
                  <div className="projects-title">{project.name}</div>
                  <Link to={`/projects/${project.name}`}>
                    <div className="carousel__link">Details</div>
                  </Link>
                  <img
                    className="img"
                    src="../../images/logo192.png"
                    alt="gif here"
                  />
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}

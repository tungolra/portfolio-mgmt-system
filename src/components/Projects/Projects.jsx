import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export default function Projects({ seed }) {
  return (
    <>
      <div id="projects" className="projects-container">
        <h3>Projects</h3>
        <section className="carousel" aria-label="Gallery">
          <div className="carousel__viewport">
            {seed.projects.map((project, idx) => (
              <div
                key={idx}
                id={`carousel__slide${idx + 1}`}
                tabindex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <img className="img" src={project?.img} alt="project" />
                  <div className="carousel__btns">
                    <a
                      className="prev"
                      href={`#carousel__slide${
                        idx < 1 ? seed.projects?.length : idx
                      }`}
                    >
                      <BsArrowLeftCircle />
                    </a>
                    <a
                      href={`#carousel__slide${
                        idx + 2 > seed.projects?.length ? 1 : idx + 2
                      }`}
                    >
                      <BsArrowRightCircle />
                    </a>
                  </div>
                  <div className="projects-title">{project?.name}</div>
                  <Link to={`/projects/${project?.name}`}>
                    <div className="carousel__link">Details</div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

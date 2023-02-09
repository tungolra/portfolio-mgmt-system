import React from "react";
import "./ProjectDetailPage.css";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";
import { featured } from "../../seed";
import { techUsed } from "../../utilities/helpers";

export default function ProjectDetailPage({ seed }) {
  let { project } = useParams();

  const selectedProject = featured.find((p) => p?.name === project);
  const navProject = featured.findIndex((p) => p?.name === project);
  const nextProject = featured[navProject + 1]?.name;
  const prevProject = featured[navProject - 1]?.name;

  function carousel(obj) {
    return (
      <div className="carousel__viewport">
        {obj.pages?.map((page, idx) => (
          <>
            <div
              key={idx}
              id={`carousel__slide${idx + 1}`}
              tabindex="0"
              className="carousel__slide"
            >
              <div className="carousel__btns">
                <a
                  className="prev"
                  href={`#carousel__slide${idx < 1 ? obj.pages.length : idx}`}
                >
                  <BsArrowLeftCircle />
                </a>
                <h3>{project}</h3>
                <a
                  href={`#carousel__slide${
                    idx + 2 > obj.pages.length ? 1 : idx + 2
                  }`}
                >
                  <BsArrowRightCircle />
                </a>
              </div>
              <div className="carousel__snapper">
                <img
                  className="img"
                  src={!page ? "https://i.imgur.com/I9A7c4b.png" : page}
                  alt="project"
                />
              </div>
            </div>
          </>
        ))}
      </div>
    );
  }

  function projectDetails(obj) {
    return (
      <div className="project-details">
        <h4> Summary</h4>
        <div className="project-summary">{obj.summary}</div>
        {techUsed(obj)}
        <h4> Responsibilities</h4>
        {obj.responsibilities.map((r, idx) => (
          <div key={idx} className="project-responsibilities">
            <div>- {r}</div>
          </div>
        ))}
        <a className="project-links" target="_blank" href={obj.repo}>
          Repo
          <RxExternalLink />
        </a>
        {obj.site === "[offline]" ? (
          <span className="project-links"> Site: &lt;Offline&gt;</span>
        ) : (
          <a className="project-links" target="_blank" href={obj.site}>
            Site
            <RxExternalLink />
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="bg-image">
      <div className="page-container">
        <div className="project-nav">
          {navProject === 0 ? (
            ""
          ) : (
            <Link to={`/projects/${prevProject}`}>
              <span>&lt; Prev Project</span>
            </Link>
          )}

          {navProject === featured.length - 1 ? (
            ""
          ) : (
            <Link to={`/projects/${nextProject}`}>
              <span>Next Project &gt;</span>
            </Link>
          )}
        </div>
        <section className="carousel" aria-label="Gallery">
          {carousel(selectedProject)}
        </section>
        <div className="project-detail-container">
          {projectDetails(selectedProject)}
        </div>
      </div>
    </div>
  );
}

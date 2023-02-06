import React from "react";
import "./ProjectDetailPage.css";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";
import { skillCards } from "../../library/skillCard";
import { featured } from "../../seed";


export default function ProjectDetailPage({ seed }) {
  let { project } = useParams();

  const selectedProject = featured.find((p) => p?.name === project);
  const navProject = featured.findIndex((p) => p?.name === project);
  const nextProject = featured[navProject + 1]?.name;
  const prevProject = featured[navProject - 1]?.name;

  function techUsed(obj) {
    let skills = [];
    obj.skills.map((s) => {
      seed.skills.map((skill) => {
        if (s === skill.skill) {
          skills.push(skill);
        }
      });
    });
    return <>{skillCards("Technologies Used", skills)}</>;
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
          <div className="carousel__viewport">
            {selectedProject?.pages?.map((page, idx) => (
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
                      href={`#carousel__slide${
                        idx < 1 ? selectedProject?.pages.length : idx
                      }`}
                    >
                      <BsArrowLeftCircle />
                    </a>
                    <h3>{project}</h3>
                    <a
                      href={`#carousel__slide${
                        idx + 2 > selectedProject?.pages.length ? 1 : idx + 2
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
                    <div className="projects-title">{project?.name}</div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
        <div className="project-detail-container">
          {/* <h3 className="project-name">{selectedProject?.name}</h3> */}
          <div className="project-details">
            <h4> Summary</h4>
            <div className="project-summary">{selectedProject?.summary}</div>
            {techUsed(selectedProject)}
            <h4> Responsibilities</h4>
            {selectedProject?.responsibilities.map((r, idx) => (
              <div key={idx} className="project-responsibilities">
                <div>- {r}</div>
              </div>
            ))}
            <a
              className="project-links"
              target="_blank"
              href={selectedProject?.repo}
            >
              Repo
              <RxExternalLink />
            </a>
            {selectedProject?.site === "[offline]" ? (
              <span className="project-links"> Site: &lt;Offline&gt;</span>
            ) : (
              <a
                className="project-links"
                target="_blank"
                href={selectedProject?.site}
              >
                Site
                <RxExternalLink />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

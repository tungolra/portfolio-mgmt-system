import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxExternalLink } from "react-icons/rx";
import * as seed from "../../seed";
import "./ProjectsCollage.css";

export default function ProjectsCollage() {
  const [projectFilter, setProjectFilter] = useState(allProjects());
  
  function allProjects() {
    return seed.projects.map((p) =>
      card(p.name, p.img, p.repo, p.site, p.summary)
    );
  }

  function filterProjects(str) {
    const filterResults = [];

    seed.projects.forEach((project) => {
      project.skills.find((p) => {
        if (p === str) filterResults.push(project);
      });
    });

    return filterResults.map((p) =>
      card(p.name, p.img, p.repo, p.site, p.summary)
    );
  }

  function card(name, img, repo, site, summary) {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="card-front">
            <img src={img} alt="project-image" />
          </div>
          <div className="card-back">
            <h4>{name}</h4>
            <p>{summary}</p>
            <div className="card-links">
              <a className="project-links" target="_blank" href={repo}>
                Repo
                <RxExternalLink />
              </a>
              {site === "[offline]" ? (
                <span className="project-links"> Site: &lt;Offline&gt;</span>
              ) : (
                <a className="project-links" target="_blank" href={site}>
                  Site
                  <RxExternalLink />
                </a>
              )}
              <Link className="carousel__link" to={`/projects/${name}`}>
                <div className="carousel__link">Details</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const categoryContainer = (h4, arr) => {
    return (
      <div className="category-container">
        <h4>{h4}</h4>
        <div className="options-container">
          {arr.map((s) => (
            <button
              className="filter-button"
              onClick={() => setProjectFilter(filterProjects(s.skill))}
            >
              {s.skill}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div id="projects" className="projects-container">
      <h4>Projects</h4>
      <div className="collage-container">
        <div className="filter-container">
          <h4>Filter By:</h4>
          <div className="category-container">
            <button
              className="filter-button"
              onClick={() => setProjectFilter(allProjects)}
            >
              All
            </button>
          </div>
          {categoryContainer("By Language", seed.programmingLanguages)}
          {categoryContainer("By Framework", seed.frameworks)}
        </div>
        <div className="card-container">{projectFilter}</div>
      </div>
    </div>
  );
}

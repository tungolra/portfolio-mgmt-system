import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxExternalLink } from "react-icons/rx";
import * as seed from "../../seed";
import "./ProjectsCollage.css";
import { projectCard } from "../../library/projectCard";

export default function ProjectsCollage() {
  const [projectFilter, setProjectFilter] = useState(featuredProjects());

  function allProjects() {
    return seed.projects.map((p) =>
      projectCard(p.name, p.img, p.repo, p.site, p.summary, p.pages)
    )
  }
  function featuredProjects() {
    return seed.featured.map((p) =>
      projectCard(p.name, p.img, p.repo, p.site, p.summary, p.pages)
    )
  }

  function filterProjectsByType (str, obj) { 
    const filterResults = []
    obj.forEach(p => { 
      if (p.type === str) { 
        filterResults.push(p)
      }
    })
    return filterResults.map((p) =>
    projectCard(p.name, p.img, p.repo, p.site, p.summary, p.pages)
  );
  }

  function filterProjectsBySkill(str) {
    const filterResults = [];

    seed.projects.forEach((project) => {
      project.skills.find((p) => {
        if (p === str) filterResults.push(project);
      });
    });

    return filterResults.map((p) =>
      projectCard(p.name, p.img, p.repo, p.site, p.summary, p.pages)
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
              onClick={() => setProjectFilter(filterProjectsBySkill(s.skill))}
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
              onClick={() => setProjectFilter(featuredProjects)}
            >
              Featured
            </button>
            <button
              className="filter-button"
              onClick={() => setProjectFilter(allProjects)}
            >
              All
            </button>
            <button
              className="filter-button"
              onClick={() => setProjectFilter(filterProjectsByType("tooling", seed.projects))}
            >
              Tooling
            </button>
            <button
              className="filter-button"
              onClick={() => setProjectFilter(filterProjectsByType("lab", seed.projects))}
            >
              Lab Work
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

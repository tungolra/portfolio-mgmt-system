import React, { useState } from "react";
import * as seed from "../../seed";
import { projects } from "../../seed";
import { programmingLanguages, frameworks } from "../../utilities/helpers";
import "./ProjectsCollage.css";
import {
  allProjects,
  featuredProjects,
  filterProjectsByType,
  filterProjectsBySkill,
} from "../../utilities/helpers";


export default function ProjectsCollage() {
  const [projectFilter, setProjectFilter] = useState({
    filter: featuredProjects(),
    header: "Featured",
  });

  const categoryButtonsByType = () => {
    const categories = [
      { category: "Featured", filter: featuredProjects() },
      { category: "All", filter: allProjects() },
      {
        category: "Tooling",
        filter: filterProjectsByType("tooling", projects),
      },
      {
        category: "Lab Work",
        filter: filterProjectsByType("lab", projects),
      },
    ];

    return (
      <div className="category-container">
        <h4>By Category</h4>
          <div className="options-container">
        {categories.map((c) => (
            <button
              className="filter-button"
              onClick={() =>
                setProjectFilter({ filter: c.filter, header: c.category })
              }
            >
              {c.category}
            </button>
        ))}
          </div>
      </div>
    );
  };
  const categoryButtonsBySkill = () => {
    const categories = [
      { category: "By Language", data: programmingLanguages },
      { category: "By Framework", data: frameworks },
    ];

    return (
      <>
        {categories.map((c) => (
          <div className="category-container">
            <h4>{c.category}</h4>
              <div className="options-container">
            {c.data.map((s) => (
                <button
                  className="filter-button"
                  onClick={() =>
                    setProjectFilter({
                      filter: filterProjectsBySkill(s.skill, c.category),
                      header: s.skill,
                    })
                  }
                >
                  {s.skill}
                </button>
            ))}
              </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div id="projects" className="projects-page">
      <h4>What I've Worked On</h4>
      {/* <h5>Filter By:</h5> */}
      <div className="filter-container">
        {categoryButtonsByType()}
        {categoryButtonsBySkill()}
      </div>
      <div className="projects-container">
        <div className="collage-container">
          <h5>Viewing: {projectFilter.header}</h5>
          <div className="card-container">{projectFilter.filter}</div>
        </div>
      </div>
    </div>
  );
}

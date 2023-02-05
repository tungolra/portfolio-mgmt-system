import React, { useState } from "react";
import * as seed from "../../seed";
import "./ProjectsCollage.css";
import {
  allProjects,
  featuredProjects,
  filterProjectsByType,
  filterProjectsBySkill,
} from "../../utilities/helpers";

export default function ProjectsCollage() {
  const [projectFilter, setProjectFilter] = useState(featuredProjects());

  const categoryButtonsByType = () => {
    const categories = [
      { category: "Featured", filter: featuredProjects },
      { category: "All", filter: allProjects },
      {
        category: "Tooling",
        filter: filterProjectsByType("tooling", seed.projects),
      },
      {
        category: "Lab Work",
        filter: filterProjectsByType("lab", seed.projects),
      },
    ];

    return (
      <div className="category-container">
        {categories.map((c) => (
          <button
            className="filter-button"
            onClick={() => setProjectFilter(c.filter)}
          >
            {c.category}
          </button>
        ))}
      </div>
    );
  };
  const categoryButtonsBySkill = () => {
    const categories = [
      { category: "By Language", data: seed.programmingLanguages },
      { category: "By Framework", data: seed.frameworks },
    ];

    return (
      <div className="category-container">
        {categories.map((c) => (
          <>
            <h4>{c.category}</h4>
            <div className="options-container">
              {c.data.map((s) => (
                <button
                  className="filter-button"
                  onClick={() =>
                    setProjectFilter(filterProjectsBySkill(s.skill))
                  }
                >
                  {s.skill}
                </button>
              ))}
            </div>
          </>
        ))}
      </div>
    );
  };

  return (
    <div id="projects" className="projects-container">
      <h4>What I've Worked On</h4>
      <div className="collage-container">
        <div className="filter-container">
          <h4>Filter By:</h4>
          {categoryButtonsByType()}
          {categoryButtonsBySkill()}
          <div className="card-container">{projectFilter}</div>
        </div>
      </div>
    </div>
  );
}

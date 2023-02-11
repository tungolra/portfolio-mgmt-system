import React, { useState, useEffect } from "react";
import * as seed from "../../seed";
// import { projects } from "../../seed";
import { programmingLanguages, frameworks } from "../../utilities/helpers";
import "./ProjectsCollage.css";
import {
  allProjects,
  featuredProjects,
  filterProjectsByType,
  filterProjectsBySkill,
} from "../../utilities/helpers";
import axios from "axios";
export let skills;
export let projects;

export default function ProjectsCollage({ user }) {
  const [projectFilter, setProjectFilter] = useState({
    filter: featuredProjects(),
    header: "Featured",
  });

  const fetchProjectData = async () => {
    try {
      const response = await axios.get(`/api/projects`);
      projects = response.data;
    } catch (error) {
      console.error(error);
    }
  };
  fetchProjectData();

  const fetchSkillData = async () => {
    try {
      const response = await axios.get(`/api/skills`);
      skills = response.data;
    } catch (error) {
      console.error(error);
    }
  };
  fetchSkillData();

  const categoryButtonsByType = () => {
    const categories = [
      { category: "Featured", filter: featuredProjects() },
      { category: "All", filter: allProjects() },
      {
        category: "Tooling",
        filter: filterProjectsByType("tooling"),
      },
      {
        category: "Lab Work",
        filter: filterProjectsByType("lab"),
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
      { category: "By Language", data: programmingLanguages(skills) },
      { category: "By Framework", data: frameworks(skills) },
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
                      filter: filterProjectsBySkill(s.skill),
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

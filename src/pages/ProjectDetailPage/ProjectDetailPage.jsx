import React from "react";
import "./ProjectDetailPage.css";
import { Link, useParams } from "react-router-dom";

export default function ProjectDetailPage({ seed }) {
  let { project } = useParams();

  const selectedProject = seed.projects.find((p) => p.name == project);

  return (
    <div className="page-container">
      <div className="project-detail-container">
        <div className="project-name">{selectedProject?.name}</div>
        <div className="project-img">
          <img
            src={
              selectedProject?.img === ""
                ? "../../images/logo192.png"
                : selectedProject.img
            }
            alt=""
          />
        </div>
        <div className="project-summary">{selectedProject?.summary}</div>
        {selectedProject?.responsibilities.map((r) => (
          <div className="project-responsibilities">
            <div>{r.client_side}</div>
            <div>{r.server_side}</div>
          </div>
        ))}
        <Link to={selectedProject.site}>Github</Link>
      </div>
    </div>
  );
}

import React from "react";

import { Link, useParams } from "react-router-dom";

export default function Update({ seed }) {
  let { project } = useParams();
//   const selectedProject = seed.projects.find((p) => p.name == project);

  return (
    <div className="page-container">
    Update Page
{/*       
      <div className="project-detail-container">
        <h3 className="project-name">{selectedProject?.name}</h3>
        <h4> Summary</h4>
        <div className="project-summary">{selectedProject?.summary}</div>
        <h4> Responsibilities</h4>
        {selectedProject?.responsibilities.map((r) => (
          <div className="project-responsibilities">
            <div>{r.client_side}</div>
            <div>{r.server_side}</div>
          </div>
        ))}
        <Link to={selectedProject.site}>Github</Link>
      </div> */}
    </div>
  );
}

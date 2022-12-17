import "./ProjectsList.css";
import { Link } from "react-router-dom";

import React from "react";

export default function ProjectsList({ seed, user }) {
  return (
    <div className="list-container">
      <h2>Projects List</h2>
      <table>
        <thead>
          <th>Project Name</th>
          <th>Repo</th>
          <th>Site</th>
          <th>Status</th>
          {user ? <th>Update</th> : ""}
        </thead>
        <tbody>
          {seed.projects?.map((project) => (
            <>
              <tr>
                <td>{project?.name}</td>
                <td>
                  <a href={project?.repo}>Repo</a>
                </td>
                <td>
                  <a href={project?.site}>Site</a>
                </td>
                <td>Offline</td>
                {/* link to update page */}
                {user ? <td><Link to={`update/${project.name}`}> Update</Link></td> : ""}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

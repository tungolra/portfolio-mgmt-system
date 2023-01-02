import React from "react";
import "./AllWorkPage.css";
import { Link } from "react-router-dom";

function ProjectsList({ seed, user }) {
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
                {user ? <td><Link to={`update/${project?.name}`}> Update</Link></td> : ""}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LabsList({seed, user}) {
  return (
    <div className="list-container">
      <h2>Labs List</h2>
      <table>
        <thead>
          <th>Lab Name</th>
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
                {/* {user ? <td>Update</td> : ""} */}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default function AllWorkPage({ seed, user }) {
  return (
    <div className="all-work-container">
      <ProjectsList seed={seed} user={user} />
      {/* <LabsList seed={seed} user={user}/> */}
    </div>
  );
}

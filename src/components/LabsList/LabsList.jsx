import "./LabsList.css"
import React from 'react'

export default function LabsList({seed, user}) {
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
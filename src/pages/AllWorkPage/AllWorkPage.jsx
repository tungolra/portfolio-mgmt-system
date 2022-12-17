import React from "react";
import LabsList from "../../components/LabsList/LabsList";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import "./AllWorkPage.css";

export default function AllWorkPage({ seed, user }) {
  return (
    <div className="all-work-container">
      <ProjectsList seed={seed} user={user} />
      <LabsList seed={seed} user={user}/>
    </div>
  );
}

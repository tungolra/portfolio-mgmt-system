import React, { useState, useEffect } from "react";
import "./Skills.css";
import { getSkillByLanguage, getSkillByTechnology } from "../../utilities/helpers";
import { Modal, useMantineTheme } from "@mantine/core";
import { skillCards } from "../../library/skillCard";
import {
  mapChildValues,
  mapChildKeys,
  generateColors,
  countBySubtype
} from "../../utilities/helpers";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import axios from "axios";

function PolarAreaChart(...objects) {
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

  const data = {
    labels: mapChildKeys(...objects),
    datasets: [
      {
        label: "# of Times Used",
        data: mapChildValues(...objects),
        backgroundColor: generateColors(mapChildKeys(...objects)),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <PolarArea data={data} />
    </div>
  );
}

export default function Skills({ user }) {
  // const [modalOpened, setModalOpened] = useState(false);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/skills/${user._id}`);
        setSkills(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="skills-container">
      <h3 id="skills">My Tech Stack</h3>
      {!user ? null : <button> + Add Skill </button>}
      <div className="skill-sections">
        {skillCards("Languages", getSkillByLanguage(skills))}
        {skillCards("Technologies", getSkillByTechnology(skills))}
        <div className="chart-container">
          <div className="polar-area-chart">
            <h3>Programming Languages & Libraries </h3>
            {PolarAreaChart(
              countBySubtype.ProgrammingLanguage,
              countBySubtype.MarkupLanguage,
              countBySubtype.StylingFramework,
              countBySubtype.StylingLanguage
            )}
          </div>
          <div className="polar-area-chart">
            <h3>Frameworks and Databases </h3>
            {PolarAreaChart(
              countBySubtype.Framework,
              countBySubtype.Library,
              countBySubtype.Database
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

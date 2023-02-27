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
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";

function HorizontalBarChart(...objects) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

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

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default function Skills({ user }) {
  // const [modalOpened, setModalOpened] = useState(false);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/skills`);
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
            {HorizontalBarChart(
              seed.countBySubtype.ProgrammingLanguage,
              seed.countBySubtype.MarkupLanguage,
              seed.countBySubtype.StylingFramework,
              seed.countBySubtype.StylingLanguage
            )}
          </div>
          <div className="polar-area-chart">
            <h3>Frameworks and Databases </h3>
            {HorizontalBarChart(
              seed.countBySubtype.Framework,
              seed.countBySubtype.Library,
              seed.countBySubtype.Database
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

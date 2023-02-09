import * as seed from "../seed";
import { projects, skills } from "../seed";
import { projectCard } from "../library/projectCard";
import { skillCards } from "../library/skillCard";
import axios from 'axios';

// GET PROJECTS AND SKILLS..? 

// const getSkills = async (userId) => {
//   try {
//     const response = await axios.get(`/api/skills/${userId}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const skills = getSkills(id)

// const getProjects = async (userId) => {

//   try {
//     const response = await axios.get(`/api/projects/${userId}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const projects = getProjects()


// FILTER PROJECTS 

export const featured = [];
projects.map((project) => {
  if (project.type === "project") {
    featured.push(project);
  }
  return featured;
});

export const tooling = [];
projects.map((project) => {
  if (project.type === "tooling") {
    tooling.push(project);
  }
  return tooling;
});

export const labs = [];
projects.map((project) => {
  if (project.type === "lab") {
    labs.push(project);
  }
  return labs;
});

export function filterProjects(obj, type, skill) {
  const filteredProjects = [];

  obj.forEach((project) => {
    if (
      (!type || project.type === type) &&
      (!skill || project.skills.find((p) => p === skill))
    ) {
      filteredProjects.push(project);
    }
  });

  return filteredProjects.map((p) =>
    projectCard(p.name, p.img, p.repo, p.site, p.summary, p.pages)
  );
}

export const allProjects = () => filterProjects(seed.projects);
export const featuredProjects = () => filterProjects(featured);
export const filterProjectsByType = (str) => filterProjects(seed.projects, str);
export const filterProjectsBySkill = (str) => filterProjects(seed.projects, undefined, str);

// FILTER SKILLS
export const filterSkills = (skills, type, subtype) => {
  const filteredSkills = [];
  skills.map((skill) => {
    if (skill.type === type && (!subtype || skill.subtype === subtype)) {
      filteredSkills.push(skill);
    }
  });
  return filteredSkills;
};

export const languages = filterSkills(skills, "Languages");
export const technologies = filterSkills(skills, "Technologies");
export const frameworks = filterSkills(skills, "Technologies", "Framework");
export const programmingLanguages = filterSkills(skills, "Languages", "Programming Language");



// Chart.js start

export function mapChildKeys(...objects) {
  let childKeys = [];
  for (let key in objects) {
    if (objects.hasOwnProperty(key)) {
      childKeys = childKeys.concat(Object.keys(objects[key]));
    }
  }
  return childKeys;
}
export function mapChildValues(...objects) {
  let values = [];
  objects.forEach((obj) => {
    for (let key in obj) {
      values.push(obj[key]);
    }
  });
  return values;
}

export function generateColors(arr) {
  const colors = [];
  for (let i = 0; i < arr.length; i++) {
    const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, 0.5)`;
    colors.push(color);
  }
  return colors;
}

export const countBySubtype = {};
projects.forEach((project) => {
  project.skills.forEach((skill) => {
    let subtype;

    for (let i = 0; i < skills.length; i++) {
      if (skills[i].skill === skill) {
        subtype = skills[i].subtype.replace(/\s+/g, "");
        break;
      }
    }

    if (!countBySubtype[subtype]) {
      countBySubtype[subtype] = {};
    }

    if (!countBySubtype[subtype][skill]) {
      countBySubtype[subtype][skill] = 1;
    } else {
      countBySubtype[subtype][skill]++;
    }
  });
});
// Chart.js end

// Project Detail Page


export function techUsed(obj) {
  let skills = [];
  obj.skills.map((s) => {
    seed.skills.map((skill) => {
      if (s === skill.skill) {
        skills.push(skill);
      }
    });
  });
  return <>{skillCards("Technologies Used", skills)}</>;
}
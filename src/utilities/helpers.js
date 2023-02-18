import * as seed from "../seed";
import { projectCard } from "../library/projectCard";
import { skillCards } from "../library/skillCard";
import { skillIcons } from "../library/skillIcons";

export function allProjects() {
  return seed.projects.map((p) =>
    projectCard(p.name, p.img, p.repo, p.site, p.summary, p.pages, p)
  );
}
export function featuredProjects() {
  return seed.featured.map((p) =>
    projectCard(p.name, p.img, p.repo, p.site, p.summary, p.pages, p)
  );
}

export function filterProjectsByType(str, obj) {
  const filterResults = [];
  obj.forEach((p) => {
    if (p.type === str) {
      filterResults.push(p);
    }
  });
  return filterResults.map((p) =>
    projectCard(p.name, p.img, p.repo, p.site, p.summary, p.pages, p)
  );
}

export function filterProjectsBySkill(str) {
  const filterResults = [];

  seed.projects.forEach((project) => {
    project.skills.find((p) => {
      if (p === str) filterResults.push(project);
    });
  });

  return filterResults.map((p) =>
    projectCard(p.name, p.img, p.repo, p.site, p.summary, p.pages, p)
  );
}

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
export function techIcons(obj) {
  let skills = [];
  obj.skills.map((s) => {
    seed.skills.map((skill) => {
      if (s === skill.skill) {
        skills.push(skill);
      }
    });
  });
  return <>{skillIcons(skills)}</>;
}
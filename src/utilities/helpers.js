import * as seed from "../seed";
import { projectCard } from "../library/projectCard";

export function allProjects() {
  return seed.projects.map((p) =>
    projectCard(p.name, p.img, p.repo, p.site, p.summary, p.pages)
  );
}
export function featuredProjects() {
  return seed.featured.map((p) =>
    projectCard(p.name, p.img, p.repo, p.site, p.summary, p.pages)
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
    projectCard(p.name, p.img, p.repo, p.site, p.summary, p.pages)
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
      projectCard(p.name, p.img, p.repo, p.site, p.summary, p.pages)
    );
  }

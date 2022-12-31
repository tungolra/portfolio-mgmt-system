const { find } = require("../../models/project");
const Project = require("../../models/project");

// create new project
async function createProject(req, res) {
  try {
    const skill = await Skill.create(req.body);
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json(error);
  }
}

// get one project
async function getOneProject(req, res) {
  const { id } = req.params;
  try {
    const project = await Project.findOne({ _id: id });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
}

// get all projects
async function getProjects(req, res) {
  try {
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
}

//get skills in projects // why no work?
async function getProjectSkills(req, res) {
  const { projectId } = req.params;
  try {
    const project = await findById(projectId);
    const skills = project.skillIds;
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json(error);
  }
}

// update project
async function updateProject(req, res) {}

// delete project
async function deleteProject(req, res) {}

module.exports = {
  create: createProject,
  show: getOneProject,
  index: getProjects,
  all: getProjectSkills,
  update: updateProject,
  delete: deleteProject,
};

const Project = require("../../models/project");
const { update } = require("./skills");

// create new project
async function createProject(req, res) {
  try {
    const project = await Project.create(req.body);
    res.status(200).json(project);
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

//get skills in projects
async function getProjectSkills(req, res) {
  const { projectId } = req.params;
  try {
    const project = await Project.findOne({ _id: projectId });
    const skills = project.skillIds;
    if (skills.length === 0) console.log("No associated skills");
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

// update project
async function updateProject(req, res) {
  const { id } = req.params;
  try {
    const project = Project.findOne({ _id: id });
    await project.updateOne({ $set: req.body });
    res.status(200).json("project updated");
  } catch (error) {
    res.status(500).json(error.message);
  }
}

// delete project
async function deleteProject(req, res) {
  const { id } = req.params;
  try {
    await Project.findOneAndDelete({ _id: id });
    res.status(200).json("project deleted");
  } catch (error) {
    res.status(500).json(error.message);
  }
}

module.exports = {
  create: createProject,
  show: getOneProject,
  index: getProjects,
  all: getProjectSkills,
  update: updateProject,
  delete: deleteProject,
};

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
async function getOneProject(req, res) {}

// get all projects
async function getProjects(req, res) {}

//get skills in projects // why no work?
async function getProjectSkills(req, res) {
  const { projectId } = req.params;
  try {
    const project = await findOne({ _id: projectId }).exec();
    const skills = await project.skillIds;
    if (skills.length === 0) {
      res.status(200).json("no associated skills");
    }
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

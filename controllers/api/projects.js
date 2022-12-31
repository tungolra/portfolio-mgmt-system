const Project = require("../../models/project")

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
  
  // update project
  async function updateProject(req, res) {}
  
  // delete project
  async function deleteProject(req, res) {}
  

module.exports = {
    create: createProject,
    update: updateProject,
    delete: deleteProject,
    show: getOneProject,
    index: getProjects,

  };
  
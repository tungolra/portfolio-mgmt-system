const Skill = require("../../models/skill");

// create new skill
async function createSkill(req, res) {
  try {
    const skill = await Skill.create(req.body);
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json(error);
  }
}

// get one skill
async function getOneSkill(req, res) {}

// get all skills
async function getSkills(req, res) {}

// update skill
async function updateSkill(req, res) {}

// delete skill
async function deleteSkill(req, res) {}

module.exports = {
  create: createSkill,
  update: updateSkill,
  delete: deleteSkill,
  show: getOneSkill,
  index: getSkills,
};

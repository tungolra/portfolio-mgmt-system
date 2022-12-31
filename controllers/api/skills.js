const { findOne } = require("../../models/skill");
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

// get one skill // why no work?
async function getOneSkill(req, res) {
  const skillId  = req.params.id;
  try {
    const skill = await Skill.findOne({_id: skillId});
    res.status(200).json(skill)
  } catch (error) {
    res.status(500).json(error)
  }
}

// get all skills
async function getSkills(req, res) {
  try {
    const skills = await Skill.find({})
    res.status(200).json(skills)
  } catch (error) {
    res.status(500).json(error)
  }
}



// update skill
async function updateSkill(req, res) {}

// delete skill
async function deleteSkill(req, res) {}

//add skill to project
async function addSkill(req, res) {}

//remove skill to project
async function removeSkill(req, res) {}

module.exports = {
  create: createSkill,
  show: getOneSkill,
  index: getSkills,
 
  update: updateSkill,
  delete: deleteSkill,
  new: addSkill,
  remove: removeSkill,
};

const Skill = require("../../models/skill");
const Project = require("../../models/project");

// create new skill
async function createSkill(req, res) {
  try {
    const newSkill = new Skill({
      type: req.body.type,
      subtype: req.body.subtype,
      skill: req.body.skill,
      img: req.body.img,
      user: req.params.id,
    });
    const savedSkill = await newSkill.save();
    res.status(201).json(savedSkill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// get one skill
// async function getOneSkill(req, res) {
//   const { id } = req.params;
//   try {
//     const skill = await Skill.findOne({ _id: id });
//     res.status(200).json(skill);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// }

// get all skills
async function getSkills(req, res) {
  try {
    const skills = await Skill.find({});
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update skill
async function updateSkill(req, res) {
  const { id } = req.params;
  try {
    const skill = Skill.findOne({ _id: id });
    await skill.updateOne({ $set: req.body });
    res.status(200).json("skill updated");
  } catch (error) {
    res.status(500).json(error.message);
  }
}

// delete skill
async function deleteSkill(req, res) {
  const { id } = req.params;
  try {
    await Skill.findOneAndDelete({ _id: id });
    res.status(200).json("skill deleted");
  } catch (error) {
    res.status(500).json(error.message);
  }
}

//add skill to project // not working
async function addSkill(req, res) {
  const { skillId, projectId } = req.params;
  try {
    const findSkill = await Skill.findOne({ _id: skillId });
    const { _id, type, subtype, skill, img } = findSkill;
    const skillData = { _id, type, subtype, skill, img };
    const project = await Project.findOne({ _id: projectId });
    project.skillIds.push(skillData);
    findSkill.projectIds.push(projectId);
    res.status(200).json(project.skillIds);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

//remove skill to project
async function removeSkill(req, res) {}

module.exports = {
  create: createSkill,
  // show: getOneSkill,
  index: getSkills,
  update: updateSkill,
  delete: deleteSkill,
  new: addSkill,
  remove: removeSkill,
};

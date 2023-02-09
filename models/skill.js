const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  subtype: {
    type: String,
    required: true,
  },
  skill: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Skill = mongoose.model("Skill", SkillSchema);

module.exports = Skill;

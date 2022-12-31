const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillSchema = new Schema(
  {
    type: { type: String, required: true },
    subtype: { type: String, required: true },
    skill: { type: String, required: true },
    img: String,
    projectIds: [Schema.Types.ObjectId],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Skill", skillSchema);

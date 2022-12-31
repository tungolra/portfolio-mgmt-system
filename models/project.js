const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    img: String,
    pages: Array,
    summary: String,
    responsibilities: Array,
    repo: String,
    site: String,
    skillIds: [Schema.Types.ObjectId],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Project", projectSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export const projectSchema = new Schema(
    {
      name: { type: String, required: true },
      img: String, 
      pages: Array, 
      skills: Array, 
      summary: String,
      responsibilities: Array, // client-side, server-side, other
      repo: String, 
      site: String,
    },
    {
      timestamps: true,
    }
  );
  module.exports = mongoose.model("Project", projectSchema);
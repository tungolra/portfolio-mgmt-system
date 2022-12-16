const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export const projectSchema = new Schema(
    {
      title: { type: String, required: true },
      entry: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  module.exports = mongoose.model("Project", projectSchema);
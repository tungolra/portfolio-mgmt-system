const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillSchema = new Schema(
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
module.exports = mongoose.model("Skill", skillSchema);
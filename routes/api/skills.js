const express = require("express");
const router = express.Router();
const skillCtrl = require("../../controllers/api/skills");

router.post("/", skillCtrl.createSkill);

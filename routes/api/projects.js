const express = require("express");
const router = express.Router();
const projectCtrl = require("../../controllers/api/projects");

router.post("/:id", projectCtrl.create);
router.get("/", projectCtrl.show);
router.get("/", projectCtrl.index);
router.get("/:projectId/skills", projectCtrl.all);
router.put("/:id", projectCtrl.update);
router.delete("/:id", projectCtrl.delete);

module.exports = router;

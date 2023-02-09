const express = require("express");
const router = express.Router();
const skillCtrl = require("../../controllers/api/skills");

router.post("/:id", skillCtrl.create);
router.get("/:id", skillCtrl.show);
router.get("/", skillCtrl.index);
router.put("/:id", skillCtrl.update);
router.delete("/:id", skillCtrl.delete);
router.post("/:skillId/projects/:projectId", skillCtrl.new);
router.delete("/:skillId/projects/:projectId", skillCtrl.remove);

module.exports = router;

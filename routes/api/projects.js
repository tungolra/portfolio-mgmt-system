const express = require("express");
const router = express.Router();
const projectCtrl = require("../../controllers/api/projects");

router.post("/", projectCtrl.create);
router.get("/:id", projectCtrl.show);
router.get("/", projectCtrl.index);
router.put("/:id", projectCtrl.update);
router.delete("/:id", projectCtrl.delete);

module.exports = router;

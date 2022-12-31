const express = require("express");
const router = express.Router();
const skillCtrl = require("../../controllers/api/skills");

router.post("/", skillCtrl.create);
router.get("/:id", skillCtrl.show);
router.get("/", skillCtrl.index);
router.put("/:id", skillCtrl.update);
router.delete("/:id", skillCtrl.delete);

module.exports = router;

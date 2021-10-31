const express = require("express");
const router = express.Router();

const profile_controller = require("../controllers/profileController");

// link to controller
router.get("/:code", profile_controller.profile);

module.exports = router;

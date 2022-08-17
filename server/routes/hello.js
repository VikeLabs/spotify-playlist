// EXAMPLE OF CONTROLLER
const express = require("express");
const router = express.Router();

const hello = require("../controllers/hello");

// link to controller
router.get("/", hello.greeting);

module.exports = router;

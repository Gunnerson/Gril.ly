const express = require("express");
const router = express.Router();

// Provides a list of all of the grills
const grills = require("./grills")
router.get("/", grills);

const test = require("./test")
router.get("/test", test)

router.get("/:date", grills)

module.exports = router;
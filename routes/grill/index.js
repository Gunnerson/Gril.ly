const express = require("express");
const router = express.Router();

// Provides a list of all of the grills. Or you can specify by the date to get the amount of grills remaining for a specific day.
const grills = require("./grills")
router.get("/", grills);
router.get("/:date", grills)

const test = require("./test")
router.get("/test", test)


module.exports = router;
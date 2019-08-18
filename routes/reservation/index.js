// To use this, there needs to be userId and grillType;

const express = require("express");
const router = express.Router();
const models = require("../../models")

// Insert an object via req into makeReservation and it will create a reservation and link it to both a date and users.
const makeReservation = require("./makeReservation")
router.get("/", makeReservation)

// Insert an object or a user into user and it will find all reservations for this user.
const user = require("./user")
router.get("/user", user)

module.exports = router;
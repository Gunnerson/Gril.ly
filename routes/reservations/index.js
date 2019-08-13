const express = require("express");
const router = express.Router();

const Reservation = require("../../models/Reservation");

router.post("/", (req, res) => {
console.log(req.body)


})
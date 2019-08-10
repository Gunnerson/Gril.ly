const router = require('express').Router();
const users = require('./api/users.js');
const reservations = require("./reservations")


router.use('/api', users);
router.use("/reservations", reservations)

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
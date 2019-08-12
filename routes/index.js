const router = require('express').Router();
const users = require('./api/users.js');
const grill = require("./grill")


router.use('/api', users);
router.use("/grill", grill)

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = router;
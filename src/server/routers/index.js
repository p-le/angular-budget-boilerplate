const express = require('express');
const passport = require('../libs/passport');
const router = express.Router();

router.get('/', passport.authenticate('digest'), (req, res) => {
  res.redirect('/google');
});

module.exports = router;
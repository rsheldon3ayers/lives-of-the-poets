'use strict';
const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const Milton = require('../models/milton');

router.get('/milton', (req, res) => {
  Milton.findOne().exec((err, bio) => {
    if (err) throw err;
  res.render('bio', {bio: bio.life,
                    lastName: 'Milton' });
  });
});

module.exports = router;

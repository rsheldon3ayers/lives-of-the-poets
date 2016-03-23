'use strict';
const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const Addison = require('../models/addison');

router.get('/addison', (req, res) => {
  Addison.findOne().exec((err, bio) => {
    if (err) throw err;
  res.render('bio', {bio: bio.life });
  });
});

module.exports = router;

'use strict';
const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const Addison = require('../models/addison');

router.get('/joseph-addison', (req, res) => {
  Addison.findOne().exec((err, bio) => {
    if (err) throw err;
  res.render('bio', {bio: bio.life,
                     searchName: 'joseph-addison',
                     lastName: 'Addison' });
  });
});

module.exports = router;

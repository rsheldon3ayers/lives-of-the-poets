'use strict';
const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const Dryden = require('../models/dryden');

router.get('/john-dryden', (req, res) => {
    Dryden.findOne().exec((err, bio) => {
        if (err) throw err;
        res.render('bio', {
            bio: bio.life,
            searchName: 'john-dryden',
            lastName: 'Dryden'
        });
    });
});

module.exports = router;

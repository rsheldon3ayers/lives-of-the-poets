'use strict';
const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const Swift = require('../models/swift');

router.get('/jonathan-swift', (req, res) => {
    Swift.findOne().exec((err, bio) => {
        if (err) throw err;
        res.render('bio', {
            bio: bio.life,
            searchName: 'jonathan-swift',
            lastName: 'Swift'
        });
    });
});

module.exports = router;

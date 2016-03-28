'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');

module.exports = mongoose.model('dryden',
    mongoose.Schema({
        life: [
            String
        ]
    })
);

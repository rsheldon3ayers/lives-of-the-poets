'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');

module.exports = mongoose.model('swift',
    mongoose.Schema({
        life: [
            String
        ]
    })
);

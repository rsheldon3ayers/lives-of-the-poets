'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');

module.exports = mongoose.model('milton',
  mongoose.Schema({
    life: [
      String
    ]
  })
);


'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');

module.exports = mongoose.model('addison',
  mongoose.Schema({
    life: [
      String
    ]
  })
);

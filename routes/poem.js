'use strict'
const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const router     = express.Router();
const findPoem = require('../controllers/poem');

router.get('/findPoems/:lastName/:searchName', findPoem.get)

module.exports = router;


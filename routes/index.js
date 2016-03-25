'use strict';

const express = require('express');
const router = express.Router();
const app = express();

const milton = require('./milton');
const addison = require('./addison');
const findPoems = require('./poem');

router.use(milton);
router.use(addison);
router.use(findPoems);

module.exports = router;

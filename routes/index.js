'use strict';

const express = require('express');
const router = express.Router();
const app = express();

const milton = require('./milton');
const addison = require('./addison');

router.use(milton);
router.use(addison);

module.exports = router;

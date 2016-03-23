'use strict';

const express = require('express');
const app = express();


app.get('/milton', (req, res) => {

  res.render('milton')

})


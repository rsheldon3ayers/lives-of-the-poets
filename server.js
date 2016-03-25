'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/');
const PORT = process.env.PORT || 3000;
const request = require('request');
const fs = require('fs');
const Addison = require('./models/addison')


const MONGODB_USER = process.env.MONGODB_USER || 'DrJohnson';
const MONGODB_PASS = process.env.MONGODB_PASS || 'vanity';
const MONGODB_NAME = process.env.MONGODB_NAME || 'lives-of-poets';

const MONGODB_URL = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@ds011379.mlab.com:11379/lives-of-poets`;
mongoose.connect(MONGODB_URL);
mongoose.connection.on('open', () => {
  console.log('connection');
})
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(routes);
app.get('/', (req, res) => {
  res.render('home');
});

// fs.readFile('./public/poetLives/milton.txt', 'utf8', (err, life) => {
//   if (err) throw err;

//   let newAddison = life.split('\n\n');
//   let newLife = new Addison({life: newAddison })
//   newLife.save((err) => {
//     if (err) throw err;
//     console.log('saved!');
//   })
//   // console.log(milton);
// });

app.listen(PORT, () => {
      console.log(`Express server listening on port: ${PORT}`);
    });

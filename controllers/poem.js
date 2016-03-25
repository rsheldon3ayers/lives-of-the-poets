'use strict'
const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const _ = require('lodash');
const bodyParser = require('body-parser');
const router     = express.Router();



module.exports.get = (req, res) => {

  const poetrydb = 'http://poetrydb.org/author/'
  const author = req.params.lastName
  const url = poetrydb + author;

  request(url, (err, response, poems) => {
      if (err) throw err;

      let poemArray = [];

      const parseBody = JSON.parse(response.body);

      if(parseBody.status != '404'){

      const parsePoems = JSON.parse(poems);

      for (let i = 0; i < parsePoems.length; i++) {

        if (parsePoems[i].linecount <= 100){

          poemArray.push(parsePoems[i]);

            }
         }
      let randPoem = poemArray[Math.floor(Math.random() * poemArray.length)];
      console.log("random Poem", randPoem);

      res.render('readPoem', {

        title: randPoem.title,
        author: randPoem.author,
        lines: randPoem.lines

      })

    } else {
        console.log('Poem not found in poetrydb')
        const url = 'http://www.poemhunter.com/joseph-addison/poems/'
        request.get(url, (err, response, body) => {
          if (err) throw err
            const paramArray = []
            const $ = cheerio.load(body)
            const $tableTitle = $('.title')

            _.range(1, 10).forEach(i => {
            const $paramParent = $tableTitle.eq(i);
            paramArray.push($paramParent.find('a').attr('href'))


        })

      }).on('end', ()=> {
        request('http://www.poemhunter.com/poem/an-account-of-the-greatest-english-poets/', (err, response, body) => {
            if (err) throw err
            const WTF = []
            const $ = cheerio.load(body, {
                                          normalizeWhitespace: true

                                      })

            const $KonaBody = $('br')

            _.range(0, $KonaBody.length).forEach(i =>  {
              WTF.push($KonaBody[i].prev.data);
            })


            res.render('readPoem', {title: "Blah", author: "Addison", lines: WTF})


            console.log("should be a poem", WTF)

        })
      })
    }
  })

}

const express = require('express');
const mongoose = require('mongoose');
const Book = require('../Models/Book');

const router = express.Router();

router.post('/', (req, res) => {
  // console.log(req.body);
  Book.create(req.body)
    .then(result => {
      // result.title = req.body.volumeInfo.title;
      console.log(req.body.volumeInfo.title);
      res.json({ title: req.body.volumeInfo.title });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;

const express = require('express');
const router = new express.Router();
var Girl = require ("../models/girl.js");
var Cookie = require ("../models/cookie.js");

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

router.get('/information', (req, res) => {
  Girl.find({})
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.status(200).json({
          girls: doc
        });
      }
    });
});

router.get('/cookieInventory', (req, res) => {
  Cookie.find({})
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.status(200).json({
          cookies: doc
        });
      }
    });
});


module.exports = router;

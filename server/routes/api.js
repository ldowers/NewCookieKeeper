const express = require('express');
const router = new express.Router();
var Girl = require ("../models/girl.js");
var Cookie = require ("../models/cookie.js");
var Booth = require ("../models/booth.js");
var TroopCookie = require("../models/troopCookie.js");
var GirlCookie = require("../models/girlCookie.js");
var BoothCookie = require("../models/boothCookie.js");

// Dashboard routes
router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

// Girl information routes
router.get('/girl', (req, res) => {
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

router.post('/girl', (req, res) => {
  var newGirl = new Girl(req.body);

  newGirl.save(function(err) {
    if (err) {
      console.log(err);
      res.status(400).json({
        success: false
      });
    }
    else {
      res.status(200).json({
        success: true
      });
    }
  });
});

router.delete('/girl', (req, res) => {
  var nameArray = req.query.nameArray;

    Girl.find({ name: {$in: nameArray} }).remove().exec(function(err) {
      if (err) {
        console.log(err);
        res.status(400).json({
          success: false
        });
      }
      else {
        res.status(200).json({
          success: true
        });
      }
    });
});

// Cookie information routes
router.get('/cookie', (req, res) => {
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

// Booth information routes
router.get('/booth', (req, res) => {
  Booth.find({})
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.status(200).json({
          booths: doc
        });
      }
    });
});

// Troop Cookie Inventory routes
router.get('/troopCookie', (req, res) => {
  TroopCookie.find({})
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.status(200).json({
          troopCookies: doc
        });
      }
    });
});

router.post('/troopCookie', (req, res) => {
  var newTroopCookie = new TroopCookie(req.body);

  newTroopCookie.save(function(err, doc) {
    if (err) {
      console.log(err);
      res.status(400).json({
        success: false
      });
    }
    else {
      res.status(200).json({
        success: true,
        _id: doc._id
      });
    }
  });
});

router.delete('/troopCookie', (req, res) => {
  var idArray = req.query.idArray;

    TroopCookie.find({ _id: {$in: idArray} }).remove().exec(function(err) {
      if (err) {
        console.log(err);
        res.status(400).json({
          success: false
        });
      }
      else {
        res.status(200).json({
          success: true
        });
      }
    });
});

// Girl Cookie Inventory routes
router.get('/girlCookie', (req, res) => {
  GirlCookie.find({})
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.status(200).json({
          girlCookies: doc
        });
      }
    });
});

// Booth Cookie Inventory routes
router.get('/boothCookie', (req, res) => {
  BoothCookie.find({})
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.status(200).json({
          boothCookies: doc
        });
      }
    });
});

module.exports = router;

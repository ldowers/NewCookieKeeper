const express = require('express');
const router = new express.Router();
var Girl = require ("../models/girl.js");
var Cookie = require ("../models/cookie.js");
var Booth = require ("../models/booth.js");
var TroopCookie = require("../models/troopCookie.js");
var GirlCookie = require("../models/girlCookie.js");
var BoothCookie = require("../models/boothCookie.js");

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

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

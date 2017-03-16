var mongoose = require("mongoose");

mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;

var GirlCookieSchema = new Schema({
  name: {
    type: String
  },
  date: {
    type: Date
  },
  TAL: {
    type: Number
  },
  SMR: {
    type: Number
  },
  LEM: {
    type: Number
  },
  SB: {
    type: Number
  },
  TM: {
    type: Number
  },
  PBP: {
    type: Number
  },
  CD: {
    type: Number
  },
  PBS: {
    type: Number
  },
  GFT: {
    type: Number
  },
  MCS: {
    type: Number
  }
});

var GirlCookie = mongoose.model("GirlCookie", GirlCookieSchema);
module.exports = GirlCookie;
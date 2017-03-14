var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BoothCookieSchema = new Schema({
  location: {
    type: String
  },
  start: {
    type: Date
  },
  end: {
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

var BoothCookie = mongoose.model("BoothCookie", BoothCookieSchema);
module.exports = BoothCookie;
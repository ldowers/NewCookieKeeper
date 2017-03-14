var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TroopCookieSchema = new Schema({
  type: {
    type: String
  },
  to: {
    type: String
  },
  from: {
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

var TroopCookie = mongoose.model("TroopCookie", TroopCookieSchema);
module.exports = TroopCookie;
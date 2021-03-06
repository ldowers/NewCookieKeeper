var mongoose = require("mongoose");

mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;

var CookieSchema = new Schema({
  name: {
    type: String
  },
  label: {
    type: String
  },
  cost: {
    type: Number
  },
  virtual: {
    type: Boolean
  }
});

var Cookie = mongoose.model("Cookie", CookieSchema);
module.exports = Cookie;
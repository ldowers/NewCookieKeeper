var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BoothSchema = new Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  date: {
    type: String
  },
  start: {
    type: String
  },
  end: {
    type: String
  }
});

var Booth = mongoose.model("Booth", BoothSchema);
module.exports = Booth;
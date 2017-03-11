var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GirlSchema = new Schema({
  name: {
    type: String
  }
});

var Girl = mongoose.model("Girl", GirlSchema);
module.exports = Girl;
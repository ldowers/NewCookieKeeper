import mongoose from "mongoose";

module.exports.connect = (uri) => {
  // plug in the promise library:
  mongoose.Promise = require('bluebird');
  
  mongoose.connect(uri);


  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  // load models
  require('./user');
  require('./girl');
  require('./booth');
  require('./cookie');
  require('./troopCookie');
  require('./girlCookie');
  require('./boothCookie');
};

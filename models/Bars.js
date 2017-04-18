var mongoose = require('mongoose');


const barSchema = new mongoose.Schema({
    "name": String,
    "isGoing": [
      {
        "user": String,
        "isGoing": Boolean
      }
    ]
  });


module.exports =  mongoose.model('Bar', barSchema );

var mongoose = require('mongoose');


const barSchema = new mongoose.Schema({
    "name": String,
    "isGoing": [
      String
    ]
  });


module.exports =  mongoose.model('Bar', barSchema );

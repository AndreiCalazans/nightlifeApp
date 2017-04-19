var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser= require('body-parser');
var app = express();  
var jwt = require('express-jwt');
var cors = require('cors');
const yelp = require('yelp-fusion');
var PORT = process.env.PORT || 3000;
var mongoose = require('mongoose');
require('dotenv').config();

var Bar = require('./models/Bars');
// mongoose.connect('mongodb://'+process.env.DB_NAME+':'+process.env.DB_PASS+'@ds163020.mlab.com:63020/nightlife');


// app.use(favicon(path.join(__dirname, 'dist/img', 'favicon.ico')));


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// this is make sure user is logged in.
var authCheck = jwt({
  secret: process.env.AUTH_CLIENT_SECRET,
  audience: process.env.AUTH_CLIENT_ID
})

app.use(express.static('dist'));


app.post('/isGoing', function(req, res) {
  // send name of the bar and user Id.
  // userId and barName
  let user = req.body.userId;
  let barName = req.body.barName;
  let isGoingUser = {[user]: true}
    // Bar.findOneAndUpdate({name: barName }, {$set:{ [user]: true} }, {upsert: true}, function(err, doc) {
    //   if (err) throw err;
    //   res.send('ok updated');
    // })

  Bar.findOne({name: barName}, function(err, bar) {
    if(bar == undefined) {
      //create new info
      Bar({name: barName, isGoing: [{"user": [user], "isGoing": true}] }).save(function(err) {
        if(err) throw err;
        res.send(bar);
      });
    } else {
      let noUser = true;
      bar.isGoing.forEach(function(each) {
        if(each.user === user) {
          each.isGoing = !each.isGoing;
          noUser = false;
        }
      })
      if(noUser) {
        bar.isGoing.push(
          {
            "user": user,
            "isGoing": true
          }
        )
      }
      console.log(bar);
      bar.save(function(err , bar) {
        if (err) throw err;
        res.send(bar);
      })

    }
  })
})



const clientId = process.env.YELP_CLIENT_ID;
const clientSecret = process.env.YELP_CLIENT_SECRET;

app.post('/:searchCity', function(req, res) {

  const searchRequest = {
    term: 'bars',
    location: req.params.searchCity
  };
  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search(searchRequest).then(response => {
      const results = response.jsonBody.businesses;

      Bar.find({}, function(err , bars) {
        const resultsFiltered = filterResult(results , bars);
        res.json(resultsFiltered);
      });


    });
  }).catch(e => {
    console.log(e);
  });
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});


app.listen(PORT, function(){
  console.log('server is up on port ' + PORT);
});



// function to search in database to see if there is already
//registered info on the Place

function search(wordToSearch , objectToSearch) {
  let result = null;
  for(var i = 0 ; i < objectToSearch.length ; i++) {
    for(var unit in objectToSearch[i]) {
       if(objectToSearch[i][unit] == wordToSearch) {
         result = objectToSearch[i].isGoing;
       }
    }
  }
  return result;
}

// check database here

function filterResult(result , registeredPlaces) {

  return result.map(function(e) {
    let isGoing = search(e.name, registeredPlaces);
    return {
      name: e.name  ,
      'image-url': e.image_url  ,
      rating: e.rating ,
      address: e.location.display_address ,
      phone: e.phone ,
      isGoing: isGoing
    }
  })
}

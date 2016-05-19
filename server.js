var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var config = require("./config.json");
var watson = require('watson-developer-cloud');
var alchemy_language = watson.alchemy_language({
  api_key: config.apiKey
});
app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.json());




app.post('/analyzeEP', function(req, res, next) {
    alchemy_language.sentiment(req.body, function (err, response) {
  if (err) {
      res.send(err);
    console.log('error:', err);
  }else{
      res.json(response);
    console.log(JSON.stringify(response, null, 2));
  }
});

})



var port = 5000;
app.listen(port, function() {
    console.log('Listening on port 5000');
})




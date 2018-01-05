var express = require('express')
var db = require('../db/index.js')
var app = express()

// respond with "hello world" when a GET request is made to the homepage

var sandwiches = [
  {id: 1, name: 'a carrot'},
  {id: 2, name: 'a hot dog'},
  {id: 3, name: 'a lobster roll on a hot dog bun'},
  {id: 4, name: 'lasagna'},
  {id: 5, name: 'a sausage patty between two waffles'}
]

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function (req, res) {
  db.getASandwich( (err,x) => {
    res.send(JSON.stringify(x[0]));
  });
})

app.post('/data/:sandoId-:bool', function (req, res) {
  console.log(req.params);
  res.send(req.params)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

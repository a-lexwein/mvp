var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage

var sandwiches = ['a carrot','An oreo', 'a hot dog', 'a lobster roll on a hot dog bun', 'lasagna']

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function (req, res) {
  var sandwich = sandwiches[Math.floor(Math.random() * sandwiches.length)]
  res.send(JSON.stringify(sandwich))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

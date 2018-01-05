var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/issandwich');


var sandwichSchema = new Schema({
  id: Number,
  name: String,
  voteY: Number,
  voteN: Number
})

var Sandwich = mongoose.model('Sandwich', sandwichSchema);

var sandwiches = [
  {id: 1, name: 'a carrot'},
  {id: 2, name: 'a hot dog'},
  {id: 3, name: 'a lobster roll on a hot dog bun'},
  {id: 4, name: 'lasagna'},
  {id: 6, name: 'a sausage patty between two waffles'},
  {id: 7, name: 'a waffle between two sausage patties'},
  {id: 8, name: 'clam chowder in a bread bowl'},
  {id: 9, name: 'a Philly cheesesteak'}
]

var saveSandwich = function(sando) {
  sando.voteY = 0;
  sando.voteN = 0;
  var sando = new Sandwich(sando);
  sando.save()
}

Sandwich.remove({});

sandwiches.map(saveSandwich)

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

var getASandwich = function(callback) {
  Sandwich.aggregate({}).sample(1).exec(callback)
};

module.exports.getASandwich = getASandwich

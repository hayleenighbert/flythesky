var mongoose = require('mongoose');

var AirplaneSchema = new mongoose.Schema({
  name: String,
  model: String,
  engine: Number,
  picture: String,
  airline: String,
  seats: Number
});

module.exports = mongoose.model('Airplane', AirplaneSchema);
var mongoose = require('mongoose');

var AirplaneSchema = mongoose.Schema({
  name: String,
  model: String,
  engine: String,
  picture: String,
  airline: String,
  seats: Number
});

AirplaneSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    var returnJson = {
      id: ret._id,
      name: ret.name,
      model: ret.model,
      engine: ret.engine,
      picture: ret.picture,
      airline: ret.airline,
      seats: ret.seats
    }
    return returnJson;
  }
});

module.exports = mongoose.model('Airplane', AirplaneSchema);
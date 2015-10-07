'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CitySchema = new Schema({
	_id: Number,
  name: String,
  country: String,
  coord: {
  	lon: Number,
  	lat: Number
  }
});

module.exports = mongoose.model('City', CitySchema);
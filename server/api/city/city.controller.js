"use strict";

var City = require("./city.model");

var NOT_FOUND= 404,
	OK = 200;

module.exports.search = function (req, res) {
	var searchPhrase = new RegExp("^("+ req.params.phrase +")" ,"i");
	City.find({"name" : searchPhrase}, function (err, result) {
		if (err) {
			res.status(NOT_FOUND).json(err);
		}
		
		res.status(OK).json({
			cnt: result.length,
			list: result
		});
	});
}
"use strict";

var express = require("express"),
	controller = require("./city.controller"),
	router = express.Router();

router.get('/search/:phrase', controller.search);

module.exports = router;
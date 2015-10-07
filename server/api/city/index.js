"use strict";

var express = require("express"),
	controller = require("./city.controller"),
	router = express.Router();

router.get('/:phrase', controller.show);

module.exports = router;
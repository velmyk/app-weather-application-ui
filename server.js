'use strict';

var express = require('express'),
				app = express(),
			 port = process.env.PORT || 5000;


app.use(express.static(__dirname + '/build'));

app.get('*', function(req, res) {
	res.sendFile('./index.html'); 
});

app.listen(port);

console.log("Server listening on port " + port);


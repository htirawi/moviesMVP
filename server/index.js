var express = require('express');
var bodyParser = require('body-parser');

var items = require('../database-mongo');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/items', function(req,res){	
	console.log(req.body)
});



app.get('/items', function (req, res) {
	items.selectAll(function(err, data) {
		if(err) {
			res.sendStatus(500);
		} else {
			res.json(data);
		}
	});
});

app.listen(3000, function() {
	console.log('listening on port 3000!');
});


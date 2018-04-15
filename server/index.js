var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var db = require('../database-mongo');
var omdb =require('../helpers/omdb.js')


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/items', function(req,res){
	console.log("khalid" , req.body)
	omdb.getMoviesByTitle(req.body.movieName);
	
	db.save(req.body,function(err,data){
		if(err){
			console.log(err)
		}
		else{
			res.send(data)
		}
	})
});

app.get('/items', function (req, res) {

	db.Item.find(function(err,data){
		if(err){
			console.log(err)
		}
		else{
			var arr = [];
			console.log(data.length)
			for(var i = data.length-5; i< data.length; i++){
				arr.push(data[i]);
			}
			res.send(arr);
		}
	})
	// items.selectAll(function(err, data) {
	// 	if(err) {
	// 		res.sendStatus(500);
	// 	} else {
	// 		res.json(data);
	// 	}
	// });
});

app.listen(3000, function() {
	console.log('listening on port 3000!');
});


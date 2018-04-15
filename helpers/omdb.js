var request = require('request');
var express = require('express');
var parser = require('body-parser');
var save = require('../database-mongo/index.js')

let getMoviesByTitle = (title) =>{
	console.log('getmovies',title)
	let options = {
		url: 'http://www.omdbapi.com/?s='+title+'&apikey=thewdb',
		headers :{
			'user-agent': 'hussein'
		}
	}
};


function getMovies(err,res,body){
	if(!error && response.statusCode === 200){
		var mov = JSON.parse(body);
		console.log(mov.length);
		for(var i = 0 ; i < mov.length;i++){
			save.save({
				title : mov[i].name,
				year : mov[i].year,
				type : mov[i].type
			}, function(err,data){
				if(err){
					console.log(err);
				}
				else{
					console.log(data)
				}
			})
		}
	}

}
request(options,callback)
}
module.exports.getMoviesByTitle = getMoviesByTitle;

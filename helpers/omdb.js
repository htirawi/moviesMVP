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
	};
	function getMovies(err,res,body){
		if(!err && res.statusCode === 200){
			var mov = JSON.parse(body);
			// console.log("HHH",mov['Search'].length);
			for(var i = 0 ; i < mov['Search'].length;i++){
				 console.log(mov['Search'][0].Title)
				save.save({
					title : mov['Search'][i].Title,
					year : mov['Search'][i].Year,
					type : mov['Search'][i].Type
				}, function(err,data){
					if(err){
						console.log(err);
					}
					else{
						console.log("raed",data)
					}
				})
			}
		}

	}
	request(options,getMovies);
}
module.exports.getMoviesByTitle = getMoviesByTitle;
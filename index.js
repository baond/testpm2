var express = require("express");
var app =  express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./view");
app.listen(3000);
const numCPUs = require('os').cpus().length;
//console.log(numCPUs);

var request = require("request");
var cheerio =require("cheerio");

app.get("/", function(req, res){

	request("https://vnexpress.net/", function(error, response, body){
		if(error){
			console.log(error);
		} else{
			$ = cheerio.load(body);
			var ds = $(body).find("li");
			ds.each(function(i, e){
				console.log($(this).find("a").text());
			});
			res.render("home", {html:body});
		}
	});	
});
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var http = require("http");
var fs = require("fs");


// Sets up the Express App
// =============================================================
var app = express();

var PORT = process.env.PORT || 3000;

var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
  var path = req.url;

  // When we visit different urls, read and respond with different files
  switch (path) {

  case "/app/public/home.html":
    return fs.readFile(__dirname + "/app/public/home.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  case "/app/public/survey.html":
    return fs.readFile(__dirname + "/app/public/survey.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  default:
    return fs.readFile(__dirname + "/app/public/home.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
}

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


server.listen(PORT, function(){
    console.log("app is listening on " + PORT);
})
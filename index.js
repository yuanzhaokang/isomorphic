var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');

// var hello = require('./server/req/hello');

var server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(cookieParser());

// server.use(express.static(path.join(__dirname, './dist/')));
// server.use(express.static(path.join(__dirname, '/data/')));

// server.use('/', hello);

server.listen(3000, function () {
   console.log("start server 3000 !!!");
});
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var isomorphic = require('./server/isomorphic');

var server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(cookieParser());

server.use(express.static(path.join(__dirname, './dist/')));
server.use(express.static(path.join(__dirname, './static/')));

server.use('/', isomorphic);

server.listen(3000, function () {
   console.log("start server 3000 !!!");
});
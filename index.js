var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var isomorphic = require('./server/isomorphic');
import getHome from './server/req/getHome';

var server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(cookieParser());

server.use(express.static(path.resolve('./dist')));
server.use(express.static(path.resolve('./static')));

server.use('/', isomorphic);
server.use('/req/getHome', getHome);

server.listen(3000, function () {
   console.log("start server 3000 !!!");
});
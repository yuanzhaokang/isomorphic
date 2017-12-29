import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import {ServerRenderingRouter} from 'server/router';

var server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(cookieParser());

server.use(express.static(path.resolve('./dist')));
server.use(express.static(path.resolve('./static')));

server.use('/', ServerRenderingRouter);

server.listen(3000, function () {
   console.log("start server 3000 !!!");
});
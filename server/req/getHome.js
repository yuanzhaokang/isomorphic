import express from 'express';

let route = express.Router();

route.all('/', function (req, res) {
   res.end(JSON.stringify({home: 'get home req ...'}));
});

module.exports = route;
// import commander from 'commander';
var commander = require('commander');
var child_process = require('child_process');

var start = function (val) {
   console.log(val);
}

var port = function (val) {
   child_process.exec(`node '../dist/server.js ${val}`);
}

commander
   .version('0.1.0')
   .option('-p, --port <n>', 'Server port', port)
   .parse(process.argv);

console.log('Hello, React isomorphic !');
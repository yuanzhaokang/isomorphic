// 2016年7月29日 - 大家知道,将ES6代码编译为ES5时,我们常用到Babel这个编译工具。大家参考一些网上...再来说transform-object-rest-spread, 其实它是对 ES6中解构赋值的...
import express from 'express';

let route = express.Router();

route.post('/getHome', function (req, res) {
   console.log("get home...");
   res.end('2016年7月29日 - 大家知道,将ES6代码编译为ES5时,我们常用到Babel这个编译工具。大家参考一些网上...再来说transform-object-rest-spread, 其实它是对 ES6中解构赋值的...');
});

export default route;
import routers from '../router/router';
import AppContainer from '../client/AppContainer';
import store from '../common/getStore';
var router = require('express').Router();
import {renderRoutes, matchRoutes} from 'react-router-config';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import React from 'react';

let context = {};

router.all('*', (req, res, next) => {
   const branch = matchRoutes(routers, req.url);

   const promises = branch.map((route) => {
      return route.route.component.fetchData(store);
   });

   if(promises.length > 0) {
      Promise.all(promises).then(() => {
         let content = renderToString(
            <StaticRouter location={req.url} context={context}>
               <Provider store={store}>
                  {renderRoutes(routers)}
               </Provider>
            </StaticRouter >
         );

         // let html = `
         //      <body>
         //      <script>window.serverState=${JSON.stringify(store.getState())}</script>
         //          <div id="app">${content}</div>
         //          <script src="bundle.js"></script>
         //      </body>
         //  `;

         let html = `
         <!DOCTYPE html>
         <html lang="en">
         <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="style.scss">
            <title>isomorphic</title>
         </head>
         <body>
            <script>window.serverState=${JSON.stringify(store.getState())}</script>
            <div id="app">${content}</div>
            <script src="bundle.js"></script>
         </body>
         </html>
         `;

         res.end(html);
      })
         .catch((err) => {
            console.error(err);
         });
   }
   else {
      next();
   }
});

module.exports = router;
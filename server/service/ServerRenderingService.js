import routers from 'router/router';
import AppContainer from 'client/AppContainer';
import store from 'common/getStore';
import {renderRoutes, matchRoutes} from 'react-router-config';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import React from 'react';

let context = {};

class ServerRenderingService {
   constructor(matchUrl) {
      this.matchUrl = matchUrl;
   }

   render() {
      const branch = matchRoutes(routers, this.matchUrl);

      const promises = branch.map((route) => {
         return route.route.component.fetchData(store);
      });

      if(promises.length > 0) {
         return Promise.all(promises)
            .then(() => {
               return new Promise((res, rej) => {
                  let content = renderToString(
                     <StaticRouter location={this.matchUrl} context={context}>
                        <Provider store={store}>
                           {renderRoutes(routers)}
                        </Provider>
                     </StaticRouter >
                  );

                  let html = `
                     <!DOCTYPE html>
                     <html lang="en">
                     <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <link rel="stylesheet" href="style.css">
                        <title>isomorphic</title>
                     </head>
                     <body>
                        <script>window.serverState=${JSON.stringify(store.getState())}</script>
                        <div id="app">${content}</div>
                        <script src="bundle.js"></script>
                     </body>
                     </html>
                     `;

                  res(html);
               });
            });
      }
      else {
         return null;
      }
   }
}

export default ServerRenderingService;
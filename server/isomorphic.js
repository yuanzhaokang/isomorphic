import routers from '../router/router';
import AppContainer from '../client/AppContainer';
var router = require('express').Router();
import { matchRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import React from 'react';

let context = {};

router.all('*', (req, res) => {
    // let branch = matchRoutes(routers);
    // branch.map((route)=>{
    //     return
    // })
    let content = renderToString(
        <StaticRouter context={context}>
            <AppContainer />
        </StaticRouter >
    );

    console.log(content);

    let html = `
        <body>
            <div id="app">${content}</div>
            <script src="bundle.js"></script>
        </body>
    `;

    res.end(html);
});

module.exports = router;
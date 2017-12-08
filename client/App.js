import router from '../router/router';
import {render} from 'react-dom';
import {renderRoutes} from 'react-router-config';
import React, {PureComponent} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends PureComponent {
   render() {
      return (
         <Router>
            {renderRoutes(router)}
         </Router>
      );
   }
}

export default App;
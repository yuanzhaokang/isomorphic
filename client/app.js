import router from '../router/router';
import {render} from 'react-dom';
import {renderRoutes} from 'react-router-config';
import React, {PureComponent} from 'react';

class App extends PureComponent {
   render() {
      return (
         renderRoutes(router)
      );
   }
}

export default App;
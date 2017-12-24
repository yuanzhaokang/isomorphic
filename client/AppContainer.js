import App from 'client/App';
import store from 'common/getStore';
import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';

class AppContainer extends PureComponent {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <Provider store={store}>
            <App />
         </Provider>
      )
   }
}

export default AppContainer;
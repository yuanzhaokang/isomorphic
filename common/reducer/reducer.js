import {HOME, ABOUT} from '../action/action';

let state = {
   home: 'home init',
   about: 'about init'
};

try {
   if(__isServer) {
      state = Object.assign({}, window.serverState);
   }
} catch(error) {

}

function reducer(initState = state, action) {
   switch(action.type) {
      case HOME:
         return {home: action.home};
      case ABOUT: {
         return {about: action.about};
      }
      default:
         return initState;
   }
}

export default reducer;
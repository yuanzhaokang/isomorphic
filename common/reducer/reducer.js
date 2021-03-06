import {HOME, ABOUT} from 'common/action/action';

let state = {
   home: 'home init',
   about: 'about init'
};

if(__isClient) {
   state = Object.assign({}, window.serverState);
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
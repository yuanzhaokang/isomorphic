import reducer from './reducer/reducer';
import {createStore} from 'redux';

let store = createStore(reducer);

export default store;
import { START } from '../action/action';

let state = {
    world: ''
};

function reducer(initState = state, action) {
    switch (action.type) {
        case START:
            return { world: 'hello' };
        default:
            return initState;
    }
}

export default reducer;
import * as Types from '../../contants/index';

const initialstate = []

const reducers = (state = initialstate, action) => {
    switch (action.type) {
        case Types.USER_LOGIN:
            state = action.payload
            return state;
        default:
            return state
    }
}

export default reducers;
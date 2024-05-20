import * as Types from '../../contants/index';

const initialstate = ""

const reducers = (state = initialstate, action) => {
    switch (action.type) {
        case Types.USER_FAIL:
            return Types.USER_FAIL;

        case Types.USER_INOT_DEFAULT:
            return Types.USER_INOT_DEFAULT;
            
        default:
            return state
    }
}

export default reducers;
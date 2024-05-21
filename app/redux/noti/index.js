import * as Types from '../../contants/index';

const initialstate = ""

const reducers = (state = initialstate, action) => {
    switch (action.type) {
        case Types.USER_FAIL:
            return Types.USER_FAIL;

        case Types.USER_INOT_DEFAULT:
            return Types.USER_INOT_DEFAULT;

        case Types.USER_LOGGED:
            return Types.USER_LOGGED;

        case Types.USER_LOGGOUT:
            return Types.USER_LOGGOUT;
            
        default:
            return state
    }
}

export default reducers;
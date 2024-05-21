import * as Types from '../contants/index';
import callApi from '../utlis/apiCaller';

// alert noti
const Noti = (type) => {
    return {
        type
    }
}

// login user
const userLoginStore = (user) => {
    return {
        type: Types.USER_LOGIN,
        payload: user
    }
}

export const userLoggout = () => {
    return {
        type: Types.USER_LOGGOUT
    }
}

export const userLoginRequest = (user) => {
    return dispatch => {
        return callApi('user', 'GET', null).then(async res => {
            if(res[0]){
                if(res[0].userName === user.userName.toLowerCase() && res[0].passWord === user.passWord.toLowerCase()){
                    await dispatch(userLoginStore(res[0]))
                    await dispatch(Noti(Types.USER_LOGGED))
                }else{
                    dispatch(Noti(Types.USER_FAIL))
                    dispatch(userLoggout())
                }
            }else{
                dispatch(Noti(Types.USER_INOT_DEFAULT))
            }
        })
    }
}
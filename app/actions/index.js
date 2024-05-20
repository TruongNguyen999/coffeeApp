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

export const userLoginRequest = (user) => {
    return dispatch => {
        return callApi('user', 'GET', null).then(res => {
            if(res){
                if(res.userName === user.userName && res.passWord === user.passWord){
                    dispatch(userLoginStore(res))
                }else{
                    dispatch(Noti(Types.USER_FAIL))
                }
            }else{
                dispatch(Noti(Types.USER_INOT_DEFAULT))
            }
        })
    }
}
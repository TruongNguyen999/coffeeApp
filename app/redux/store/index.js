import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from '../user/index';
import noti from '../noti/index';

const rootReducer = combineReducers({
    user,
    noti,
})

const store = configureStore({reducer: rootReducer});

export default store;
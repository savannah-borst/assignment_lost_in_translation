import { userReducer } from './userReducer';
import { combineReducers } from 'redux';

const appReducer = combineReducers(
    {user: userReducer}
);

export default appReducer;
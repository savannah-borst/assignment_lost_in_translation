import { userReducer } from './userReducer';
import { combineReducers } from 'redux';
import { sessionReducer } from './sessionReducer';

const appReducer = combineReducers(
    {user: userReducer, session: sessionReducer}
);

export default appReducer;
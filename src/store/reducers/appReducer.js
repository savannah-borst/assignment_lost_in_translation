import { userReducer } from './userReducer';
import { translationReducer } from './translationReducer';
import { combineReducers } from 'redux';
import { sessionReducer } from './sessionReducer';

const appReducer = combineReducers(
    {user: userReducer, session: sessionReducer}
);

export default appReducer;
import { userReducer } from './userReducer';
import { sessionReducer } from './sessionReducer';
import { translationReducer } from './translationReducer';
import { combineReducers } from 'redux';

const appReducer = combineReducers(
    {user: userReducer},
    {translation: translationReducer},
    {session: sessionReducer}
);

export default appReducer;
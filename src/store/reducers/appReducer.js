import { userReducer } from './userReducer';
import { translationReducer } from './translationReducer';
import { combineReducers } from 'redux';

const appReducer = combineReducers(
    {user: userReducer},
    {translation: translationReducer}
);

export default appReducer;
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import appReducer from './reducers/appReducer';

export default createStore(
    appReducer,
    composeWithDevTools()
)

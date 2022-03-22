import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import appReducer from './reducers';
import middleware from './middleware';


export default createStore(
    appReducer,
    composeWithDevTools(middleware)

)

import { loginReducer } from './loginReducer'
import { combineReducers } from 'redux'

const appReducer = combineReducers({
    loginReducer
})

export default appReducer
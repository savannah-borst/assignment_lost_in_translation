import { loginMiddleware } from "./loginMiddleware";
import { applyMiddleware } from 'redux'

export default applyMiddleware(loginMiddleware)
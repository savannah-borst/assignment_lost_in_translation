import { userMiddleware } from "./userMiddleware";
import { applyMiddleware } from 'redux'

export default applyMiddleware(userMiddleware)
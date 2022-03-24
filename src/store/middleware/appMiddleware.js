import { userMiddleware } from "./userMiddleware";
import { translationMiddleware } from "./translationMiddleware";
import { applyMiddleware } from 'redux'

export default applyMiddleware(userMiddleware, translationMiddleware)
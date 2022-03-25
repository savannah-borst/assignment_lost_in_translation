import { userMiddleware } from "./userMiddleware";
import { sessionMiddleware } from "./sessionMiddleware";
import { translationMiddleware } from "./translationMiddleware";
import { applyMiddleware } from 'redux'

export default applyMiddleware(userMiddleware, sessionMiddleware, translationMiddleware)
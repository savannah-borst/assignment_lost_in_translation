import { userMiddleware } from "./userMiddleware";
import { translationMiddleware } from "./translationMiddleware";
import { applyMiddleware } from 'redux'
import { sessionMiddleware } from "./sessionMiddleware";

export default applyMiddleware(
    userMiddleware, 
    sessionMiddleware,
    translationMiddleware)
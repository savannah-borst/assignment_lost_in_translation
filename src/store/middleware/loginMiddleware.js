import { ACTION_LOGIN_ATTEMPT, ACTION_LOGIN_FAILED, ACTION_LOGIN_SUCCES } from "../actions/loginActions";

export const loginMiddleware = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === ACTION_LOGIN_ATTEMPT) {
        //MAKE HTTP REQUEST
    }

    if (action.type === ACTION_LOGIN_SUCCES) {

    }

    if (action.type === ACTION_LOGIN_FAILED) {
        
    }
}
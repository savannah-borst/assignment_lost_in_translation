import { LoginAPI } from "../../components/Start/LoginAPI";
import { ACTION_LOGIN_ATTEMPT, ACTION_LOGIN_FAILED, ACTION_LOGIN_SUCCES, loginFailedAction, loginSuccesAction } from "../actions/loginActions";

export const loginMiddleware = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === ACTION_LOGIN_ATTEMPT) {
        //MAKE HTTP REQUEST
        LoginAPI.login(action.payload)
        .then(profile => {
            //LOGIN SUCCES
            dispatch(loginSuccesAction(profile))
        })
        .catch(error => {
            dispatch(loginFailedAction(error))
        })

    }

    if (action.type === ACTION_LOGIN_SUCCES) {

    }
}
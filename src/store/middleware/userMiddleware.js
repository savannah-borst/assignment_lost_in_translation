import { LoginAPI } from "../../components/Start/LoginAPI";
import { ACTION_GET_USER, getUserAction } from "../actions/userActions";

export const loginMiddleware = ({ dispatch }) => next => action => {
    next(action)

    if (action.type === ACTION_GET_USER) {
        //MAKE HTTP REQUEST
        LoginAPI.login(action.payload)
        .then(user => {
            //LOGIN SUCCES
            dispatch(getUserAction(user))
        })
        .catch(error => {
            //dispatch(loginFailedAction(error))
        })

    }
}
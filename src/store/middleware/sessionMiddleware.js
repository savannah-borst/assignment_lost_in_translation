import {ACTION_INIT_SESSION, ACTION_SET_SESSION, setSessionAction, ACTION_CLEAR_SESSION} from '../actions/sessionActions'
import { setUserAction } from '../actions/userActions';


export const sessionMiddleware = ({ dispatch }) => next => action => {
    next(action)

    if (action.type === ACTION_INIT_SESSION) {
        const storedSession = localStorage.getItem("session");

        if (!storedSession) {
            return;
        }

        const session = JSON.parse(storedSession);

        dispatch(setSessionAction(session));
    }

    if (action.type === ACTION_SET_SESSION)  {
        dispatch(setUserAction(action.payload))
        localStorage.setItem("session", JSON.stringify(action.payload));
    }

    if (action.type === ACTION_CLEAR_SESSION) {
        localStorage.removeItem("session");
    }

}
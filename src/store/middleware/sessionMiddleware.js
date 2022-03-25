import { ACTION_SESSION_INIT, ACTION_SESSION_SET, ACTION_SESSION_CLEAR,  sessionSetAction } from "../actions/sessionActions";

export const sessionMiddleware = ({dispatch}) => next => action => {
    next(action);

    if (action.type === ACTION_SESSION_INIT) {
        const storedSession = localStorage.getItem("start-session");

        if (!storedSession) {
            return;
        }

        const session = JSON.parse(storedSession);

        dispatch(sessionSetAction(session));
    }



    if(action.type === ACTION_SESSION_SET) {
        localStorage.setItem("start-session", JSON.stringify(action.payload))
    }

    if (action.type === ACTION_SESSION_CLEAR) {
        localStorage.removeItem("start-session");
    }
}
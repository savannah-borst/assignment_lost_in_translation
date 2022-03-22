import { ACTION_LOGIN_ATTEMPT, ACTION_LOGIN_FAILED, ACTION_LOGIN_SUCCES } from "../actions/loginActions";

const initialState = {
    loginAttempt: false,
    loginFailed: ''
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_LOGIN_ATTEMPT:
            return {
                ...state,
                loginAttempt: true,
                loginFailed: ''
            }
        case ACTION_LOGIN_SUCCES:
            return {
                ...initialState
            }
        case ACTION_LOGIN_FAILED:
            return {
                ...state,
                loginAttempt: false,
                loginFailed: action.payload
            }
        default: 
            return state
    }
}
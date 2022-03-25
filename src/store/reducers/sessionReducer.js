import {ACTION_SET_SESSION, ACTION_CLEAR_SESSION} from '../actions/sessionActions'

const initialState = {
    id: "",
    username: "",
    translations: [],
    loggedIn: false
};

export const sessionReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case ACTION_SET_SESSION:
            return {
                ...action.payload,
                loggedIn: true
            };
        case ACTION_CLEAR_SESSION:
            return {
                ...initialState
                };
        default: 
            return state
    }
}
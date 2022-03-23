import { ACTION_GET_USER } from "../actions/userActions";

//const initialState = { };

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_GET_USER:
            return {
                ...state,
                userName: "" //needs to come from middleware?
            }
        default: 
            return state
    }
}
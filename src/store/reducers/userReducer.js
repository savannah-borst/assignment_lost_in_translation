import { ACTION_SET_USER } from "../actions/userActions";

//const initialState = { };

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_SET_USER:
            return {
                ...action.payload
            };
        default: 
            return state
    }
}
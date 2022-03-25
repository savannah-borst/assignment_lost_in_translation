import { ACTION_SET_USER } from "../actions/userActions";

const initialState = { 
  id: "",
  username: "",
  translations: [],
};

export const userReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case ACTION_SET_USER:
            return {
                ...action.payload
            };
        default: 
            return state
    }
}
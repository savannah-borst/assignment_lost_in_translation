import { ACTION_SET_TRANSLATION } from "../actions/translationActions";

//const initialState = { };

export const translationReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_SET_TRANSLATION:
            return {
                ...action.payload
            };
        default: 
            return state
    }
}
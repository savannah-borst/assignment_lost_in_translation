import { ACTION_LOAD_TRANSLATION } from "../actions/translationActions";

//const initialState = { };

export const translationReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_LOAD_TRANSLATION:
            return {
                ...action.payload
            };
        default: 
            return state
    }
}
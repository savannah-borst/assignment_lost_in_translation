import { ACTION_LOAD_TRANSLATION, ACTION_SET_TRANSLATION } from "../actions/translationActions";

const initialState = {
    translation: []
 };

export const translationReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case ACTION_LOAD_TRANSLATION:
            return {
                ...action.payload
            };
        default: 
            return state
    }
}
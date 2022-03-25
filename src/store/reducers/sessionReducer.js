import { ACTION_SESSION_SET } from "../actions/sessionActions";
import { ACTION_SESSION_CLEAR } from "../actions/sessionActions";

const initialState = {
  id: "",
  username: "",
  translations: [],
  loggedIn: false,
};

export const sessionReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ACTION_SESSION_SET:
      return {
        ...action.payload,
        loggedIn: true,
      };

    case ACTION_SESSION_CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

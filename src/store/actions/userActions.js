//shows up in redux dev tools need clear labels
export const ACTION_GET_USER = '[user] GET';


export const getUserAction = user => ({
    type: ACTION_GET_USER,
    payload: user
});
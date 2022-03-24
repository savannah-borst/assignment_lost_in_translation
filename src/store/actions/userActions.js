//shows up in redux dev tools need clear labels
export const ACTION_SET_USER = '[user] SET';
export const ACTION_LOAD_USER = '[user] LOAD';

export const setUserAction = username => ({
    type: ACTION_SET_USER,
    payload: username
});

export const loadUserAction = username => ({
    type: ACTION_LOAD_USER,
    payload: username
});
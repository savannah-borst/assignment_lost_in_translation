export const ACTION_SET_SESSION = '[session] SET';
export const ACTION_INIT_SESSION = '[session] INIT';
export const ACTION_CLEAR_SESSION = '[session] INIT';

export const setSessionAction = session => ({
    type: ACTION_SET_SESSION,
    payload: session
});

export const initSessionAction = session => ({
    type: ACTION_INIT_SESSION,
});

export const clearSessionAction = () => ({
    type: ACTION_CLEAR_SESSION
});
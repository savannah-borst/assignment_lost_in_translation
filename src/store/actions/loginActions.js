//shows up in redux dev tools need clear labels
export const ACTION_LOGIN_ATTEMPT = '[login] ATTEMPT';
export const ACTION_LOGIN_SUCCES = '[login] SUCCES';
export const ACTION_LOGIN_FAILED = '[login] FAILED';

export const loginAttemptAction = user => ({
    type: ACTION_LOGIN_ATTEMPT,
    payload: user
});

export const loginSuccesAction = profile => ({
    type: ACTION_LOGIN_SUCCES,
    payload: profile
});

export const loginFailedAction = error => ({
    type: ACTION_LOGIN_FAILED,
    payload: error
});
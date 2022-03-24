//shows up in redux dev tools need clear labels
export const ACTION_SET_TRANSLATION = '[translation] SET';
export const ACTION_LOAD_TRANSLATION = '[translation] LOAD';

export const setTranslationAction = translation => ({
    type: ACTION_SET_TRANSLATION,
    payload: translation
});

export const loadTranslationAction = translation => ({
    type: ACTION_LOAD_TRANSLATION,
    payload: translation
})
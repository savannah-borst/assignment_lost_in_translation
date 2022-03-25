//shows up in redux dev tools need clear labels
export const ACTION_LOAD_TRANSLATION = '[translation] LOAD';

export const loadTranslationAction = translation => ({
    type: ACTION_LOAD_TRANSLATION,
    payload: translation
})



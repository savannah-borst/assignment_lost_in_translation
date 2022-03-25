//shows up in redux dev tools need clear labels
export const ACTION_LOAD_TRANSLATION = '[translation] LOAD';
export const ACTION_TRANSLATE_CLEAR = '[translation] CLEAR';

export const loadTranslationAction = translation => ({
    type: ACTION_LOAD_TRANSLATION,
    payload: translation
})

export const clearTranslation = () => ({
    type: ACTION_TRANSLATE_CLEAR,
})



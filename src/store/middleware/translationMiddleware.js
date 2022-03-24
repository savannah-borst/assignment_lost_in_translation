import { ACTION_LOAD_TRANSLATION, setTranslationAction } from "../actions/translationActions";

export const translationMiddleware = ({ dispatch }) => next => action => {
    next(action)

    const apiURL = 'https://seb-noroff-api.herokuapp.com';
    const apiKey = '3ltMwJl2TUqcqMV1pLMF0g==';
    let userTranslations = [];

    fetch(`${apiURL}/translations/${action.payload}`)
    .then(response => response.json())
    .then(result => userTranslations = result.translations)

    userTranslations.push(action.payload)

    if (action.type === ACTION_LOAD_TRANSLATION) { 
        fetch(`${apiURL}/translations/${action.payload}`, {
            method: 'PATCH', // NB: Set method to PATCH
            headers: {
                'X-API-Key': apiKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // Provide new translations to add to user with id 1
                translations: userTranslations
            })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Could not update translations history')
          }
          return response.json()
        })
        .then(updatedUser => {
          // updatedUser is the user with the Patched data
          return dispatch(setTranslationAction(updatedUser));
        })
        .catch(error => {
        })
    }
}
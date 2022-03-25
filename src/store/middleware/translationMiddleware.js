import { ACTION_LOAD_TRANSLATION, ACTION_TRANSLATE_CLEAR } from "../actions/translationActions";
import { setUserAction } from "../actions/userActions";
import store from '../store'

export const translationMiddleware = ({ dispatch }) => next => action => {
    next(action)

    const apiURL = 'https://seb-noroff-api.herokuapp.com';
    const apiKey = '3ltMwJl2TUqcqMV1pLMF0g==';
    let userTranslations = [];
    const user = store.getState();


    if (action.type === ACTION_LOAD_TRANSLATION) { 
      
    fetch(`${apiURL}/translations/${user.user.id}`)
    .then(response => response.json())
    .then(result => {
      userTranslations = result.translations
      setTranslation(action.payload)
    })
    }

    //set translation in API
    function setTranslation() {

      //add to beginning of array.
      userTranslations.unshift(action.payload)

      fetch(`${apiURL}/translations/${user.user.id}`, {
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
      dispatch(setUserAction(updatedUser));
    })
    .catch(error => {
    })
    }


  if (action.type === ACTION_TRANSLATE_CLEAR){
      fetch(`${apiURL}/translations/${user.user.id}`, {
        method: 'PATCH', // NB: Set method to PATCH
        headers: {
            'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Provide new translations to add to user with id 1
            translations: []
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
      dispatch(setUserAction(updatedUser));
    })
    .catch(error => {
    })
  }
    
}
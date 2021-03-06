import { setSessionAction } from "../actions/sessionActions";
import { ACTION_LOAD_USER } from "../actions/userActions";

export const userMiddleware = ({ dispatch }) => next => action => {
    next(action)

    const apiURL = 'https://seb-noroff-api.herokuapp.com';
    const apiKey = '3ltMwJl2TUqcqMV1pLMF0g==';

    if (action.type === ACTION_LOAD_USER) {
        //check is user exists. if not go to create user
        fetch(`${apiURL}/translations?username=${action.payload}`)
        .then(response => response.json())
        .then(results => {
            // results will be an array of users that match the username of victor.
            if (results.length === 0) {
              return createUser(action.payload);
            } else {
              return dispatch(setSessionAction(results[0]));
            }
        })
        .catch(error => {
        })
    }

    //create user if user does not exist
    function createUser(username) {
        fetch(`${apiURL}/translations`, {
            method: 'POST',
            headers: {
              'X-API-Key': apiKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username, 
                translations: [] 
            })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Could not create new user')
          }
          return response.json()
        })
        .then(newUser => {
          // newUser is the new user with an id
          return dispatch(setSessionAction(newUser[0]));
        })
        .catch(error => {
        })
    }
}

import { useSelector } from "react-redux";

const apiURL = 'https://seb-noroff-api.herokuapp.com/';
const apiKey = '3ltMwJl2TUqcqMV1pLMF0g==';


export const LoginAPI = {

  login(username) {
    return fetch(`${apiURL}/translations?username=${username}`)
        .then(response => response.json())
        .then(results => {
            // results will be an array of users that match the username of victor.
            if (results.length === 0) {
              return createUser(username);
            } else {
              return results;
            }
        })
        .catch(error => {
        })
    }
}

export const createUser = {
  createUser(newUser) {
    return fetch(`${apiURL}/translations`, {
              method: 'POST',
              headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ 
                  username: 'mega-mind', 
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
            return newUser;
          })
          .catch(error => {
          })
  }
}
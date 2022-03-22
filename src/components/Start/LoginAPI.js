const apiURL = 'https://seb-noroff-api.herokuapp.com/'
const apiKey = 'your-public-api-key-goes-here'


export const LoginAPI = {
    login(username) {
        return fetch(`${apiURL}/translations?username=${username}`)
        .then(response => response.json())
        .then(results => {
            // results will be an array of users that match the username of victor.
        })
        .catch(error => {
        })
    },

    InsertUsername(username) {        
        fetch(`${apiURL}/translations`, {
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
            })
            .catch(error => {
            })
    }
}
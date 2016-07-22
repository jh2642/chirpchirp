// API Host
//var api = 'http://.herokuapp.com'
var api = 'https://923ad329.ngrok.io'
var token = sessionStorage.getItem('token')
​
// Utilities
// endpoint ... /users
// formFields ... {name: 'Joe'}
function fetchApi(endpoint, formFields, callback) {
  if (formFields === undefined || formFields === null || formFields === '') {
    formFields = {}
  }
​
  formFields.token = token
​
  fetch(api + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formFields)
  })
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      callback(data)
    })
}
​
function saveToken(token) {
  sessionStorage.setItem('token', token)
}
​
function destroyToken() {
  sessionStorage.removeItem('token')
}
​
function redirect(url) {
  window.location.href = url
}

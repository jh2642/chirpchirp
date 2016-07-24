import React from 'react'
import ReactDOM from 'react-dom'
import Follow from './components/Follow'

fetchApi('GET', '/users', {}, function(response) {
    console.log(response)
    ReactDOM.render(<Follow users={response}/>, document.getElementById('follow-me'))
})

// this was a test to get the users info but it comes back as an object
//   // url (required), options (optional)
// fetch('https://923ad329.ngrok.io/users', {
// 	method: 'GET'
// })
// .then(function(response) {
// 	// Convert to JSON
// 	return response.json();
// })
// .then(function(j) {
// 	// Yay, `j` is a JavaScript object
// 	console.log(j);
// });

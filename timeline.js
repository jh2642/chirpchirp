import React from 'react'
import ReactDOM from 'react-dom'
import Timeline from './components/Timeline'

fetchApi('GET', '/timeline', {}, function(response) {

    ReactDOM.render(<Timeline chirps={response}/>, document.getElementById('timeline'))
})

document.getElementById('btnSignup').addEventListener('click', function() {
    var formFields = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        userpic: document.getElementById('userpic').value
    }

    fetchApi('POST', '/users', formFields, function(response) {
        // console.log(response)
//something like response.user.token, it might not be exactly that
        saveToken(response.api_token)
        redirect('/timeline.html')
    })
})

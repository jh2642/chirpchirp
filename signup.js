document.getElementById('btnSignup').addEventListener('click', function() {
    var formFields = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        userpic: document.getElementById('userpic').value
    }

    fetchApi('/users', formFields, function(response) {
//something like response.user.token, it might not be exactly that
        saveToken(response.user.token)
        redirect('/timeline.html')
    })
})

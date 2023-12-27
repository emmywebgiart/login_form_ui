let buttonPassword = document.getElementById('button_password')
let userPassword = document.getElementById('user_password')
let iconButtonPassword =document.querySelector('#button_password i')
let loginForm = document.getElementById('login_form')
let username = document.getElementById('username')
let password = document.getElementById('user_password')

buttonPassword.onclick = () => {
    if(iconButtonPassword.classList.contains('fa-eye')) {
        iconButtonPassword.classList.remove('fa-eye')
        iconButtonPassword.classList.add('fa-eye-slash')
        userPassword.setAttribute('type', 'text')
    } else {
        iconButtonPassword.classList.remove('fa-eye-slash')
        iconButtonPassword.classList.add('fa-eye')
        userPassword.setAttribute('type', 'password')
    }
}

const cleanForm = () => {
    username.value = ''
    password.value = ''
}

const login = async () => {
    try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username.value, // kminchelle
                password: password.value, // 0lelplR
            })
        })
        const data = await response.json()
    
        if(data.message === 'Invalid credentials') {
            alert('No se ha encontrado el usuario')
            cleanForm()
        } else {
            alert(`Sesión iniciada correctamente ${data.firstName} ${data.lastName}`)
            cleanForm()
        }
    } catch (error) {
        console.log(error)
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if(username.value.trim() === '' || password.value.trim() === '') {
        alert('No has ingresado los datos solicitados')
        cleanForm()
    } else {
        login()
    }
})

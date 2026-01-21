const button = document.querySelector('button')
const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const input = document.querySelector('input')
const form = document.querySelector('form')
const h3 = document.querySelector('h3')
const div = document.querySelector('div')

button.addEventListener('click', (e) => {
    e.preventDefault()
    validation()
})

function validation () {
    if (name.value.trim() === ""){
        name.placeholder= 'Please enter you name'
}
else if (!email.value.includes('@gmail.com') || email.value === '')
    {email.value = ''
        email.placeholder= 'please anter a valid email'}
else if (password.value.length < 8 || password.value === '') {
    password.value = ''
    password.placeholder= 'Your password must be at least 8 characters long'
}
else {
    h3.remove()
    form.remove()

    const h2 =document.createElement('h2')
   
     h2.innerText =   'Your details have successfully been recorded'
    div.append(h2)
}

}
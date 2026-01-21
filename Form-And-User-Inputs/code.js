const button = document.querySelector('button')
const email = document.getElementById('email')

const form = document.querySelector('form')
const h3 = document.querySelector('h3')
const div = document.querySelector('div')

form.addEventListener('submit', ()=>{
    if (email.value === '') {
        email.placeholder= 'Email cannot be empty'
    
        email.style.borderColor = 'red'}
})

button.addEventListener('click', (e) => {
    e.preventDefault()
    validation()
})

function validation () {
    
if (!email.value.includes('@gmail.com') )
    {
        email.placeholder= 'please enter a valid email'
        email.style.borderColor = 'red'
    }

else {
    h3.remove()
    form.remove()

    const h2 =document.createElement('h2')
   
     h2.innerText =   'Thank you for subscribing with ' + email.value+ 'check your inbox for a confirmation email.'
    div.append(h2)
}

}
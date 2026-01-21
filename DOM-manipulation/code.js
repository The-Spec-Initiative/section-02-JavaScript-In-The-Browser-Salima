const button = document.querySelector('button')
const paragraph = document.querySelector('p')

button.addEventListener('click', prizeMessage)
function prizeMessage() {
    paragraph.innerText = 'You have won free access to the courses on coursera!!'
     
    button.remove()

}
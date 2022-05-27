const button = document.getElementById('submit')
const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    console.log('submitted')
    event.preventDefault()
})
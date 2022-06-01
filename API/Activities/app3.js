const button = document.getElementById('button')
const display = document.getElementById('display')

// let request = new XMLHttpRequest()
// request.open('get', 'https://dog.ceo/api/breeds/image/random')
// request.send()

button.addEventListener('click', function(){
    let request = new XMLHttpRequest()
    request.open('get', 'https://dog.ceo/api/breeds/image/random')
    request.send()
    request.addEventListener('load', function(){

        let dog = JSON.parse(this.responseText)
        let photo = dog.message
        display.innerHTML = `<img src = "${photo}">`
    })
})
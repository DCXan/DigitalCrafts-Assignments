const display = document.getElementById('display')

let request = new XMLHttpRequest()
request.open('get', 'http://api.icndb.com/jokes/random')
request.send()

request.addEventListener('load', function(){
    let object = JSON.parse(this.responseText)
    let joke = object.value.joke
    display.innerHTML = `<p>${joke}</p>`
})



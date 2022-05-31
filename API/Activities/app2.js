const factList = document.getElementById('factList')

let request = new XMLHttpRequest()
request.open('get', 'http://api.icndb.com/jokes/randomLinks')
request.send()

request.addEventListener('load', function(){
    let joke = request.value.joke
    factList.innerHTML = `<li>${joke}</li>`
})



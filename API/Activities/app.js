const factList = document.getElementById('factList')

let request = new XMLHttpRequest()

request.open('get', 'https://island-bramble.glitch.me/dog-facts')
request.send()

request.addEventListener('load', function(){
    let facts = JSON.parse(this.responseText)

    let factItems = facts.map(function(fact){
        return `<li>${fact.fact}</li>`
    })

    factList.innerHTML = factItems.join('')
})


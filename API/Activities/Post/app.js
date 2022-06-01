const display = document.getElementById('display')

let request = new XMLHttpRequest()
request.open('get', 'https://endurable-bead-polo.glitch.me/stocks')
request.send()

request.addEventListener('load', function(){
    let stocks = JSON.parse(this.responseText)
    let stockItems = stocks.map(function(stock){
        return `<div>
        <h2>${stock.title} - ${stock.symbol}</h2>
        <p>Price: $${stock.price}</p>
        <p>Quantity: ${stock.quantity}</p>
        </div>
        `
    })
    display.innerHTML = stockItems.join('')
})
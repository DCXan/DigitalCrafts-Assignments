// In order to get the quotes you can call the getStockQuote function as shown below:

// getStockQuote(pass in the symbol of the stock)

// available symbols are below:
// APLE
// AMAZ
// ALBAB
// GOOG
// FB


let textbox = document.getElementById("textbox")
let button = document.getElementById("submitBtn")
let stockName = document.getElementById("stockName")
let stockPrice = document.getElementById("stockPrice")
let symbol = textbox.value.toUpperCase()

button.addEventListener('click', function(symbol){
  let stock = getStockQuote(symbol)
  stockName.innerHTML = stock.name
  stockPrice.innerHTML = stock.price
  })

window.setInterval(function(symbol){
  let stock = getStockQuote(symbol)
  stockName.innerHTML = stock.name
  stockPrice.innerHTML = stock.price
  }, 2000)

let quotes = {
  "APLE":{name : "Apple", price : 0},
  "AMAZ":{name : "Amazon", price :0},
  "ALBAB":{name : "Ali Baba", price :0},
  "GOOG":{name : "Google", price :0},
  "FB":{name : "Facebook", price :0}
}

function getStockQuote(symbol) {

  let stock = quotes[symbol]
  stock.price = getRandomInt(100,500)
  return quotes[symbol]
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
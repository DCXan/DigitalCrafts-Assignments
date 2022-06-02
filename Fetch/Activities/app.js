const display = document.getElementById('display')
const emailInput = document.getElementById('emailInput')
const drinkType = document.getElementById('drinkType')
const submitButton = document.getElementById('submitButton')

let url = 'https://troubled-peaceful-hell.glitch.me/orders'

fetch(url)
    .then(function(response){
        return response.json()
    }).then(function(result){
        console.log(result)
        return result
    }).then(function(result){
        displayOrders(result)
    })

function displayOrders(result){
    let orders = result.map(function(order){

        return `<ul>
        <li>${order.email}
        <div>${order.type}</dive>
        <div>${order.size}</dive>
        <div>${order.price}</dive>
        </li>
        
        
        </ul>`
    })
    display.innerHTML = orders.join('')
}

submitButton.addEventListener('click', function(){
    placeOrder()
    fetch(url)
    .then(function(response){
        return response.json()
    }).then(function(result){
        console.log(result)
        return result
    }).then(function(result){
        displayOrders(result)
    })
})

function placeOrder (){
    const order = {
        email: emailInput.value, 
        type: drinkType.value, 
        size: 'Small', 
        price: 3.50
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    }).then(function(response){
        return response.json()
    }).then(function(result){
        displayOrders(result)
    })
}
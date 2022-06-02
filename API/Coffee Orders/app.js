const display = document.getElementById("ordersDisplay");
const searchResult = document.getElementById("searchResult");
let textbox = document.getElementById("emailTextbox");
const deleteButton = document.getElementById("deleteButton");
const findButton = document.getElementById("findButton");
const submitButton = document.getElementById("submitOrderButton");
let emailInput = document.getElementById("emailInput");
let drinkInput = document.getElementById("drinkInput");
let sizeInput = document.getElementById("sizeInput");
let priceInput = document.getElementById("priceInput");
const form = document.getElementById("form");

function getOrders(ordersFetched) {
  let request = new XMLHttpRequest();
  request.open("get", "https://troubled-peaceful-hell.glitch.me/orders");
  request.addEventListener("load", function () {
    let orders = JSON.parse(this.responseText);
    ordersFetched(orders);
  });
  request.send();
}

function displayOrders(orders) {
  let listOfOrders = orders.map(function (order) {
    return `
        <div class = "order">
                <ul>
                    <li>Email: ${order.email}</li>
                    <li>Drink: ${order.type}</li>
                    <li>Size: ${order.size}</li>
                    <li>Price: $${order.price.toFixed(2)}</li>
                </ul>
            </div>
        `;
  });
  display.innerHTML = listOfOrders.join("");
}

getOrders(function (orders) {
  displayOrders(orders);
});

deleteButton.addEventListener("click", function () {
  let email = textbox.value;
  let request = new XMLHttpRequest();
  request.open(
    "DELETE",
    `https://troubled-peaceful-hell.glitch.me/orders/${email}`
  );
  request.send();

  request.addEventListener("load", function () {
    getOrders(function (orders) {
      displayOrders(orders);
    });
  });
});

findButton.addEventListener("click", function () {
  let email = textbox.value;

  let request = new XMLHttpRequest();

  request.open(
    "get",
    `https://troubled-peaceful-hell.glitch.me/orders/${email}`
  );

  request.send();

  request.addEventListener("load", function () {
    let order = JSON.parse(this.responseText);
    searchResult.innerHTML = `
        <div class = "order">
                <ul>
                    <li>Email: ${order.email}</li>
                    <li>Drink: ${order.type}</li>
                    <li>Size: ${order.size}</li>
                    <li>Price: $${order.price.toFixed(2)}</li>
                </ul>
            </div>
        `;
  });
});

submitButton.addEventListener("click", function () {
  let email = emailInput.value;
  let drink = drinkInput.value;
  let size = sizeInput.value;
  let price = priceInput.value;

  let request = new XMLHttpRequest();
  request.open("POST", "https://troubled-peaceful-hell.glitch.me/orders");
  request.setRequestHeader("Content-Type", "application/json");

  const order = {
    email: `${email}`,
    type: `${drink}`,
    size: `${size}`,
    price: price,
  };
  request.send(JSON.stringify(order));
  request.addEventListener("load", function () {
    getOrders(function (orders) {
      displayOrders(orders);
    });
    emailInput.value = '';
    drinkInput.value = '';
    sizeInput.value = '';
    priceInput.value = '';
  });
});

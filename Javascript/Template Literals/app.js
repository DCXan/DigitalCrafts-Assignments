let menu = document.getElementById("menu");
let display = document.getElementById("displayMsg");

function getDishes(course) {
  if (course == "All") {
    return dishes;
  } else if (course == "Starters") {
    return dishes.filter(function (dish) {
      return dish.course == course;
    });
  } else if (course == "Entrees") {
    return dishes.filter(function (dish) {
      return dish.course == course;
    });
  } else if (course == "Desserts") {
    return dishes.filter(function (dish) {
      return dish.course == course;
    });
  }
}

function displayDishes(dishesToDisplay) {
  let menuItems = dishesToDisplay.map(function (dish) {
    let menuItem = `<div class = "item">
              <h3>${dish.title} | $${dish.price}</h3>
              <i>${dish.description}</i>
              <p><img src = "${dish.imageURL}"></p>
              </div>`;
    return menuItem;
  });

  menu.innerHTML = menuItems.join("");
}

// Button to display all items

let allBtn = document.getElementById("allBtn");

allBtn.addEventListener("click", function () {
  const dishes = getDishes("All");
  displayDishes(dishes);
  display.innerHTML = "Displaying all menu items";
});

// Button to display starter items

let startersBtn = document.getElementById("startersBtn");

startersBtn.addEventListener("click", function () {
  const dishes = getDishes("Starters");
  displayDishes(dishes);
  display.innerHTML = "Displaying starters";
});

// Button to display entree items

let entreesBtn = document.getElementById("entreesBtn");

entreesBtn.addEventListener("click", function () {
  const dishes = getDishes("Entrees");
  displayDishes(dishes);
  display.innerHTML = "Displaying entrees";
});

// Button to display dessert items

let dessertsBtn = document.getElementById("dessertsBtn");

dessertsBtn.addEventListener("click", function () {
  const dishes = getDishes("Desserts");
  displayDishes(dishes);
  display.innerHTML = "Displaying desserts";
});

displayDishes(dishes);

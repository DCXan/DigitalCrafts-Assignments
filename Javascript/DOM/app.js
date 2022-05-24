let firstName = document.getElementById("firstNameTextbox")
let lastName = document.getElementById("lastNameTextbox")
let submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click", function() {
    console.log(firstName.value + ' ' + lastName.value)
})
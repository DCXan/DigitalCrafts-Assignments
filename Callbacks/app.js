let textbox = document.getElementById("startTime")
let button = document.getElementById("button")
let display = document.getElementById("display")

button.addEventListener('click', function(){

    let count = parseInt(textbox.value)

    let intID = window.setInterval(function(){
        
        // if (count >= 0){
        //     display.innerHTML = count
        //     count--
        // } else {
        //     clearInterval(intID)
        // }

        while (count >= 0){
            display.innerHTML = count
            count--
        }
        clearInterval(intID)

    }, 1000)
})

let textbox = document.getElementById("startTime")
let button = document.getElementById("button")
let display = document.getElementById("display")


button.addEventListener("click", function(){
    
    let timerValue = parseInt(textbox.value)

    
    display.innerHTML = timerValue
    timerValue--
    }
}, 1000))

display.innerHTML = textbox.value

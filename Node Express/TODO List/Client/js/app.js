let taskTextBox = document.getElementById('taskInput')
let taskAddButton = document.getElementById("submitButton")
let prioritySelection = document.getElementById('prioritySelection')
let taskUL = document.getElementById('taskList')

taskAddButton.addEventListener('click', function() {
    const userInput = taskTextBox.value
    const priority = prioritySelection.value
    const date = new Date().toUTCString()

    fetch('http://localhost:3000/todos', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                title: userInput,
                priority: priority,
                dateCreated: date
            }
        )
    })
        .then (response => response.json())
        .then (result => {
            console.log(result)
            getTasks((tasks) => {
                displayTasks(tasks)
            })
        })  
    taskTextBox.value = ""
})

function getTasks(displayTasksCB) {
    fetch('http://localhost:3000/todos')
    .then(response => response.json())
    .then(tasks => {
        displayTasksCB(tasks)
    })
}

function displayTasks(tasks) {
    
    const taskItems = tasks.map(task => {
        return `
        <li id = "liTask"><div>Task: ${task.title}</div>
        <div>Priority: ${task.priority}</div>
        <div>Date Created: ${task.dateCreated}</div>
        <div><button id="removeButton">Delete Task</button></div>
        `
    })

    taskUL.innerHTML = taskItems.join('')
}

let removeButton = document.getElementById("removeButton")
removeButton.addEventListener("click", function () {
    // liTask.parentNode.removeChild(liTask);
    console.log(this)
  })

getTasks((tasks) => {
    displayTasks(tasks)
})

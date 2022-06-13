const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

// Create server
app.listen(3000, () => {
    console.log('Server is running on PORT 3000')
})

// Create empty array to store to-do items
let todos = []

app.get('/todos', (req, res) => {
    res.json(todos)
})

app.post('/todos', (req, res) => {
    const title = req.body.title
    const priority = req.body.priority
    const dateCreated = req.body.dateCreated
    const todoItem = {
        title: title,
        priority: priority,
        dateCreated: dateCreated
    }
    todos.push(todoItem)
    res.json({message: "Task has been added!"})
})
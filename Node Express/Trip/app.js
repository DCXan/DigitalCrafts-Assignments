const express = require('express')
const app = express()
app.use(express.json())
// app.use(cors())

// Create server

app.listen(8000, () => {
    console.log('Server is running on PORT 8000')
})
require('./db/connect') //import mongoose 
const express = require('express')
const app = express()
const taskRoutes = require('./routers/tasks')

//middleware to get out json
app.use(express.json())

app.get('/hello',(req,res)=>{
    res.send('Task Manager')
})

//middleware for task route
app.use('/api/v1/tasks', taskRoutes)





const port = 3000
app.listen(port, console.log(`server is running on port ${port}`))



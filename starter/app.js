
const express = require('express')
const app = express()
const taskRoutes = require('./routers/tasks')
const connectDB = require('./db/connect') //import mongoose 
require('dotenv').config() //in-built for env variable
const notFound = require('./middleware/not_found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware for out static folder
app.use(express.static('./public'))

//middleware to get out json
app.use(express.json())

//middleware for task route
app.use('/api/v1/tasks', taskRoutes)

//middleware for not found page
app.use(notFound)
app.use(errorHandlerMiddleware)

// app.get('/hello',(req,res)=>{
//     res.send('Task Manager')
// })

//port variable in case of prod environment
const port = process.env.PORT || 3000
//const port = 3000
//Async await for Db to spin the server
const start = async () => {
    //use the try catch block for async await
    try{
       await connectDB(process.env.MONGO_URI) //if successful, then the next line
       app.listen(port, console.log(`server is running on port ${port}`))
    }catch(error){
        console.log(error)
    }
}

start()



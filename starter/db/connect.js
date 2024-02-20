const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://benjy:1993@nodeexpressprojects.7yzqwfq.mongodb.net/TASK_MANAGER?retryWrites=true&w=majority'

//refactoring db connection before runniong the server
const connectDB =(url)=>{
    return mongoose
    .connect(connectionString, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology:true})
}// retrun a promise

module.exports = connectDB
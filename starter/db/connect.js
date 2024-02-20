const mongoose = require('mongoose')

//const connectionString = ''

//refactoring db connection before runniong the server
const connectDB =(url)=>{
    return mongoose
    .connect(url, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology:true})
}// retrun a promise

module.exports = connectDB
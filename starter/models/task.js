const mongoose = require('mongoose')

//using mongoose - passing an object key/pair 
const TaskSchema = new mongoose.Schema({
    name:String, completed: Boolean,
})
//setting up model to be used in the controller
module.exports = mongoose.model('Task', TaskSchema)
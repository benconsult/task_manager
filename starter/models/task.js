const mongoose = require('mongoose')

//using mongoose - passing an object key/pair 
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'must provide a name'],
        trim:true,
        maxlength: [10, 'name cannot be more than 10 characters ']
    }, 
    completed: {
        type: Boolean,
        default: false,
    },
})
//setting up model to be used in the controller
module.exports = mongoose.model('Task', TaskSchema)
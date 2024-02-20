const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://benjy:1993@nodeexpressprojects.7yzqwfq.mongodb.net/TASK_MANAGER?retryWrites=true&w=majority'


mongoose
.connect(connectionString, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true})
.then(()=>console.log('CONNECTED TO THE DB'))
.catch((err)=>console.log(err))
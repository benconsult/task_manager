const Task = require('../models/task')

const getAllTasks = (req,res)=>{
        res.send('All Items from the file')
}
//using Async await for creating a task
const createTask = async (req,res) =>{
    try{
         const task = await Task.create(req.body)
         res.status(201).json({task})
}catch(error){
     res.status(500).json({msg:error})
}
}
const getTask = (req,res) =>{
    res.json({id:req.params.id})
}
const updateTask = (req,res) =>{
    res.send('update a tsk')
}
const deleteTask = (req,res) =>{
    res.send('delete a task')
}
module.exports = {getAllTasks,createTask, getTask,updateTask,deleteTask}
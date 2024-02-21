const Task = require('../models/task')

//Async await
const getAllTasks = async (req,res)=>{
    try{
        const tasks =  await Task.find({})
        res.status(200).json({tasks})
        //alternatively res.status(200).json({tasks:tasks})
    }catch(error){
        res.status(500).json(error)
    }
       
}
//using Async await for creating a task. Document/Table is Task
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
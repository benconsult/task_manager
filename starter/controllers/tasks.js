const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')

//Async await
const getAllTasks = asyncWrapper(async (req,res)=>{
    
        const tasks =  await Task.find({})
       res.status(200).json({tasks})    
       
})//ends asyncWrapper

//using Async await for creating a task. Document/Table is Task
const createTask = asyncWrapper(async (req,res) =>{
    
         const task = await Task.create(req.body)
         res.status(201).json({task})
})

//async await
const getTask = asyncWrapper(async (req,res) =>{
    
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id ${taskID}`})
        }
        res.json({ task })
    
})
//update with id and request body
const updateTask = asyncWrapper(async (req,res) =>{
    
        const {id: taskID} = req.params

        const task = await Task.findByIdAndUpdate({_id:taskID}, req.body, {
            new:true, runValidators:true
        })
        if(!task){
            return res.status(404).json({msg:`No task with id ${taskID}`})
        }
        res.status(200).json({id:taskID, data:req.body})
    
})
//Testing put vs patch with a new method for put request
const editTask = asyncWrapper(async (req,res) =>{
    
        const {id: taskID} = req.params

        const task = await Task.findByIdAndUpdate({_id:taskID}, req.body, {
            new:true, runValidators:true, overwrite:true
        })
        if(!task){
            return res.status(404).json({msg:`No task with id ${taskID}`})
        }
        res.status(200).json({id:taskID, data:req.body})
})

//Async await
const deleteTask = asyncWrapper(async (req,res) =>{
   
        const {id:taskID} = req.params
        const task = await Task.findByIdAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id ${taskID}`})
        }
        //alternative, for the sake of postman
        //res.status(200).json({ task:null, status: 'success'})
        //res.status(200).send()
        res.status(200).json({ task })
    
  
})
module.exports = {getAllTasks,createTask, getTask,updateTask,deleteTask, editTask}
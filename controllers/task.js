const Task=require("../model/task");
const asyncWrapper=require("../middleware/asyncWrapper");

const getAllTask=asyncWrapper( async(req,res)=>{
        const allTask=await Task.find({});
        res.json(allTask);
});

const addTask=asyncWrapper(async(req,res)=>{
        const task=await Task.create({
            name:req.body.task,
            completed:req.body.completed
        });
        res.json({task});
});
const getTask=asyncWrapper(async(req,res)=>{
        const getTask=await Task.findById(req.params.id);
        if(!getTask) return res.status(404).json({"msg":"obj not found"});
        res.json(getTask);
});
const updateTask=asyncWrapper( async(req,res)=>{
        const task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        if(!task) return res.status(404).json({"msg":"obj not found"});
        res.json(task);
});

const deleteTask=asyncWrapper( async(req,res)=>{
        const task=await Task.findByIdAndDelete(req.params.id);
        if(!task) return res.status(404).json({"msg":"obj not found"});
        res.json({msg:"Deleted",task});
});


module.exports={
    getAllTask,
    addTask,
    getTask,
    updateTask,
    deleteTask
}
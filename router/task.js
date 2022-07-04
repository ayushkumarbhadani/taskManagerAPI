const express=require("express");
const router=express.Router();
const {getAllTask,addTask,getTask,updateTask,deleteTask}=require("../controllers/task");
router.route("/").get(getAllTask).post(addTask)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports={router};
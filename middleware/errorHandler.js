const errorHandlerMiddleware=(err,req,res,next)=>{
    return res.status(500).json({status:"error!!!!!",msg:err});
}
module.exports=errorHandlerMiddleware;
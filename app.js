const express=require("express");
const app=express();
const {router}=require("./router/task");
const {connectDB}=require("./db/connectDB");
const { connect } = require("http2");
require('dotenv').config();
const notFound=require("./middleware/notFound");
const errorHandlerMiddleware=require("./middleware/errorHandler");


app.use(express.json());
app.use("/api/v1",router);
app.use(notFound);
app.use(errorHandlerMiddleware);

/*
    GET:   get all task:        /api/v1/
    POST:  post a task:         /api/v1/
    GET:   get single task:     /api/v1/:id
    PATCH: edit single task:    /api/v1/:id
    DELETE:delete single task:  /api/v1/:id
*/

const port=process.env.PORT || 8000;
connectDB(process.env.MONGO_URI).then(()=>{
    app.listen(port,console.log(`App is listning on port ${port}..`));
}).catch(err=>{
    console.log(err);
})
const express=require('express')
const cors=require('cors')
const connectDB=require("./util/database")
const studentrouter=require('./routes/student-routes')
const bookrouter=require('./routes/book-routes')
const userrouter=require('./routes/userroutes')
const blogrouter=require('./routes/blog-routes')
const app=express()
app.use(express.json())
app.use(cors())
app.use('/task',studentrouter)
app.use('/tasks',bookrouter)
app.use('user',userrouter)
app.use('/blog',blogrouter)
const start=async()=>{
    try{
        const connect=await connectDB()
        console.log(connect)
        app.listen(8070,()=>{console.log('server is listening at port number 8070')
})
    }catch(err){
        console.log(err)
    }
}
start()





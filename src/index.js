const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
})



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, ()=>{
    console.log('Server on port: '+ port)
})

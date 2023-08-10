const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
})



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



module.exports = app
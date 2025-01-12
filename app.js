const express = require('express')

const userRoute = require('./routes/user-route')
const UserLogger = require('./middlewares/logger')

const app = express()

app.use('/api/student',userRoute)

const port = 5000

app.listen(port,()=>{
    console.log(`Server run at http://localhost:${port}/api/student`);
    
})
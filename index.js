const express = require('express')
const { userRoute } = require('./Routes/UserRoutes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",userRoute)

app.listen(2709,()=>{
    console.log("Server start...")
})
const {Router} = require('express')
const { GetData, Register, Login } = require('../Controller/UserController')
const userRoute = Router()

userRoute.get("/getdata",GetData)
userRoute.post("/signup",Register)
userRoute.post("/login",Login)

module.exports = {userRoute}
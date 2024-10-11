const {Router} = require('express')
const { GetData, Register } = require('../Controller/UserController')
const userRoute = Router()

userRoute.get("/getdata",GetData)
userRoute.post("/signup",Register)

module.exports = {userRoute}
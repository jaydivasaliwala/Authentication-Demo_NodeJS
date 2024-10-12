const {Router} = require('express')
const { GetData, Register, Login } = require('../Controller/UserController')
const { Auth } = require('../Middleware/Auth')
const userRoute = Router()

userRoute.get("/getdata/:id",Auth,GetData)
userRoute.post("/signup",Register)
userRoute.post("/login",Login)

module.exports = {userRoute}
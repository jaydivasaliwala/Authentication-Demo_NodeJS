const {Router} = require('express')
const { GetData } = require('../Controller/UserController')
const userRoute = Router()

userRoute.get("/getdata",GetData)

module.exports = {userRoute}
const { DataGet, UserReg, UserLogin } = require("../Business/UserBusiness")
const { responseModel } = require("../Model/Response")

const GetData = (req,res) => {
    const result = DataGet()
    responseModel(res, 200, "List data",false,result)
}

const Register = (req,res) => {
    const result = UserReg(req.body)
    responseModel(res, 200, "User Added",false,result)
}

const Login = (req,res) => {
    const result = UserLogin(req.body)
    responseModel(res,200,"Verified",false,result)
}

module.exports = {GetData, Register, Login}
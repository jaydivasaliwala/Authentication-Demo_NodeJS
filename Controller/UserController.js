const { DataGet, UserReg } = require("../Business/UserBusiness")
const { responseModel } = require("../Model/Response")

const GetData = (req,res) => {
    const result = DataGet()
    responseModel(res, 200, "List data",false,result)
}

const Register = (req,res) => {
    const result = UserReg(req.body)
    responseModel(res, 200, "User Added",false,result)
}

module.exports = {GetData, Register}
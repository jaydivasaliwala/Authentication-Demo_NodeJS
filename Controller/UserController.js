const { DataGet } = require("../Business/UserBusiness")
const { responseModel } = require("../Model/Response")

const GetData = (req,res) => {
    const result = DataGet()
    responseModel(res, 200, "List data",false,result)
}

module.exports = {GetData}
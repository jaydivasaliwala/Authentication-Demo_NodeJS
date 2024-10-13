const jsonwebtoken = require("jsonwebtoken");
const { responseModel } = require("../Model/Response");
const dotenv = require('dotenv').config()

const Auth = (req,res,next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.replace("Bearer ", "");
        try
        {
            const _id = jsonwebtoken.verify(token,dotenv.parsed.KEY).id
            
            if(req.params.id == _id)
            {
                next();
            }
            else
            {
                responseModel(res,401,"Invalid token",true,"Invalid token")
            }
        }
        catch(err)
        {
            responseModel(res,401,"Invalid token",true,"Invalid token")
        }
    }
    else
    {
        responseModel(res,401,"Invalid token",true,"Invalid token")
    }
}

module.exports = {Auth}
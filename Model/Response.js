const responseModel = (res,status_code, message, error_status, data) => {
    if(error_status === true && status_code === 401)
    {
        res.status(401).json({
            status_code:401,
            data:data,
            message:message,
            error_status:error_status
        })
    }
    else if (
        data === null ||  // Check if null
        (Array.isArray(data) && data.length === 0) ||  // Check if blank array
        (typeof data === 'object' && data !== null && Object.keys(data).length === 0 && data.constructor === Object)  // Check if blank object
    )
    {
        res.status(200).json({
            status_code:204,
            data:data,
            message:"No data found",
            error_status:error_status
        })
    }
    else if(error_status === true || data === false)
    {
        res.status(500).json({
            status_code:500,
            data:null,
            message:"Server Error",
            error_status:error_status
        })
    }
    else
    {
        const result = {
            status_code:status_code,
            data:data,
            message:message,
            error_status:error_status
        }
        res.status(status_code).json(result)
    }
}

module.exports = {responseModel}
const {CustomAPIError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err,req,res,next) =>{
    //using the custom api error class
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({ msg: err.message })
    }
    //else if it is any other error response aside from the default
    return res.status(500).json({msg:`something went wrong, try again later`})
    //json({msg:err}) -- default error ahndler message
}

module.exports = errorHandlerMiddleware
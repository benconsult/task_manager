const errorHandlerMiddleware = (err,req,res,next) =>{
    return res.status(500).json({msg:`something went wrong, try again later`})
    //json({msg:err}) -- default error ahndler message
}

module.exports = errorHandlerMiddleware
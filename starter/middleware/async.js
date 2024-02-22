//to be used inside the controller class
//takes in controller as a parameter
const asyncWrapper = (fn) => {

    return async(req,res,next) =>{
        //decide what to do with parameter - async wrapper
        try {
            await fn(req,res,next)
        } catch (error) {
            next(error)//next middleware
        }
    }
}

module.exports =asyncWrapper
const Errorhandler = require("../utils/ErrorHandler");

module.exports = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal server error"

    // mongodb id wrong
    if(err.name === "CastError"){
        const message = `Resources not found with this id .. invalid ${err.path}`;
        err = new Errorhandler(message,400);
    }

    // duplicate key error
    if(err.code === 11000){
        const message =  `Duplicate key ${Object.keys(err.keyValue)} Entered`;\
        err = new Errorhandler(message,400);
    }
    
}
   
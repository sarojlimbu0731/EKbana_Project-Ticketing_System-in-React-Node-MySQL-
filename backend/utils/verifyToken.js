const jwt=  require("jsonwebtoken")

const createError =require("./error.js")

const verifyToken= (req,res,next)=>{
    const token=req.cookies.access_token
    if(token){
        return next(createError(401,"You are not authenticated!"))
    }
    
}

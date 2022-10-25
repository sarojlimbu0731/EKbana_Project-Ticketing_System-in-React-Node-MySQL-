const db= require("../models")

//create main model 
const Users=db.users


// -----------update user details-----------
const updateUser= async (req,res,next)=>{
    let id=req.params.userId
    try {     
        await Users.update(req.body,{
            where:{
                userId:id
            },      
        })
      
        let user=await Users.findOne({where:{userId:id}})
        res.send(user)
        
    } catch (err) {
        next(err)
    }
}

// -------delete user(by admin)---------
const deleteUser= async(req, res,next)=>{
   
    try {
       let id=req.params.userId
        await Users.destroy({where:{userId:id}})
        res.send("user record is deleted successfully")
    } catch (err) {
        next(err)
    }
}

// --------get all users---------
const getAllUsers=async(req,res,next)=>{
    try {
        let user= await Users.findAll({})
        res.send(user)
    } catch (err) {
        next(err)
    }
}

// --------get oneUser---------
const getOneUser=async(req,res,next)=>{
    
    try {
        let id=req.params.userId
        let user= await Users.findOne({where:{userId:id}})
        res.send(user)
    } catch (err) {
        next(err)
    }
}


module.exports ={updateUser, deleteUser, getAllUsers, getOneUser}
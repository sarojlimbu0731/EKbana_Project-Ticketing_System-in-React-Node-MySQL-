const db= require("../models")
const jwt=require("jsonwebtoken")
var bcrypt = require('bcryptjs');
const createError= require('../utils/error.js')



//create main model 
const Users=db.users
const BookTickets=db.bookTickets


// -----------update user details-----------
const updateUser= async (req,res,next)=>{
    const id=req.params.userId
    const data=req.body
    // console.log(data)

    try {     
        // await Users.update(req.body,{
        //     where:{
        //         userId:id
        //     },      
        // })
      
        // let user=await Users.findOne({where:{userId:id}})
        const user= await Users.findOne({where:{userId:id}})
        const isPasswordCorrect = await bcrypt.compare(data.password, user.password) 
        if(isPasswordCorrect && data.newpassword=='' ){
                    data.password=user.password
                 const {newpassword,...othervalue}=data
           
                 user.update(othervalue)
                 res.send(user)
        }
        else if(isPasswordCorrect && data.newpassword!=='')
        {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.newpassword, salt);
                data.password=hash
             const {newpassword,...othervalue}=data
       
             user.update(othervalue)
             res.send(user)
    
        }
        else {
            return next(createError(403,"Incorrect Credentials"))
        }

        
    } catch (err) {
       return next(err)
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

const getSearchUser=async(req,res,next)=>{
    
    try {
        let id=req.params.userId
        let data= await Users.findAll({where:{userId:id},
            include:{
                model:BookTickets,
                as:"bookTickets"
            }
        })

        res.send(data)
    } catch (err) {
        next(err)
    }
}

const allUserDetails= async(req,res,next)=>{
    try {
        const data= await Users.findAll({
            where:{
                isAdmin:false
            },
            include:{
                model:BookTickets,
                as:"bookTickets"
            }
        })
        res.send(data)
    } catch (error) {
        return next(createError(401,"no user found"))
    }

}




module.exports ={updateUser, deleteUser, getAllUsers, getOneUser,getSearchUser,allUserDetails}
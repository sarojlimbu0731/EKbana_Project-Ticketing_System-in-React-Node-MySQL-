const db=require("../models")
const createError= require('../utils/error.js')

const jwt=require("jsonwebtoken")
var bcrypt = require('bcryptjs');

// ------create main User model------
const Users=db.users

const registerUser= async(req, res, next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        let newUser={
            name:req.body.name,
            email:req.body.email,
            password:hash
        }

        let data= await Users.create(newUser)
        res.send(data)
    } catch (err) {
        next(err)
    }
}

const loginUser= async(req, res, next)=>{
    try {
        
        const user= await Users.findOne({where:{email:req.body.email}})
        if(!user) return next(createError(404,"User not found!"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password) 
        if(!isPasswordCorrect) return next(createError(400,"Wrong Password!"))
        
        const token=jwt.sign({email: user.email, isAdmin: user.isAdmin},"secret")
        
        const {password, ...otherDetails}=user.dataValues
        res.cookie("access_token",token,{
            httpOnly:true
        }).send(otherDetails)
    } catch (err) {
        next(err)
    }
}

module.exports={registerUser,loginUser}
const userController= require("../controllers/userController.js")

const Token= require('../utils/verifyToken.js')
const router=require('express').Router()

// //authenticate
// router.get('/checkauthentication', verifyToken.verifyToken, (req,res,next)=>{
//     res.send("hello user you are logged in")
// })

// // check user
// router.get('/checkuser/:userId', verifyToken.verifyUser, (req,res,next)=>{
//     res.send("hello user you are logged in and can delete your account")
// })

// //check admin
// router.get('/checkadmin/:userId', verifyToken.verifyAdmin, (req,res,next)=>{
//     res.send("hello admin you are logged in and can delete all account")
// })

//update
router.patch('/updateuser/:userId',Token.verifyUser, userController.updateUser)

//delete
router.delete('/deleteuser/:userId',Token.verifyUser, userController.deleteUser)

//get 
router.get('/getoneuser/:userId',Token.verifyUser, userController.getOneUser)

//get search user
router.get('/getsearchuser/:userId', userController.getSearchUser)

//get all
router.get('/getalluser',Token.verifyAdmin, userController.getAllUsers)



module.exports= router


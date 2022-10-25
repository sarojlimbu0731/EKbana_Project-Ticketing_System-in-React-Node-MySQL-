const userController= require("../controllers/userController.js")

const router=require('express').Router()


//update
router.patch('/updateuser/:userId',userController.updateUser)

//delete
router.delete('/deleteuser/:userId',userController.deleteUser)

//get all
router.get('/getalluser',userController.getAllUsers)

//get 
router.get('/getoneuser/:userId',userController.getOneUser)

module.exports= router


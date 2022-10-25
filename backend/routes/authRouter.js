const authController= require("../controllers/authController.js")

const router=require('express').Router()

//-----register-user(create)------- (by user)
router.post('/registeruser',authController.registerUser)

router.post('/loginuser',authController.loginUser)

module.exports=router


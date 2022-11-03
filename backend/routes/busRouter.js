const busController= require("../controllers/busController.js")

const Token=require("../utils/verifyToken.js")
const router=require('express').Router()

//-----create------- (by admin)
router.post('/addbus',Token.verifyAdmin, busController.addBus)

//update
router.patch('/updatebus/:busId',Token.verifyAdmin, busController.updateBus)

//delete
router.delete('/deletebus/:busId',Token.verifyAdmin, busController.deleteBus)

//get all
router.get('/getallbuses',busController.getAllBuses)

//get 
router.get('/getonebus/:busId',busController.getOneBus)

//get search buses from to,from amd date query
router.get('/searchbus',busController.getSearchBus)

module.exports= router
 

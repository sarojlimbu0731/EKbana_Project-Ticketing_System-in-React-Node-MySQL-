const busController= require("../controllers/busController.js")

const router=require('express').Router()

//-----create------- (by admin)
router.post('/addbus',busController.addBus)

//update
router.patch('/updatebus/:busId',busController.updateBus)

//delete
router.delete('/deletebus/:busId',busController.deleteBus)

//get all
router.get('/getallbuses',busController.getAllBuses)

//get 

router.get('/getonebus/:busId',busController.getOneBus)

module.exports= router


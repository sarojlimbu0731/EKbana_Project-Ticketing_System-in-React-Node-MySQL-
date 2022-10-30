const seatController= require("../controllers/seatController.js")

const Token=require("../utils/verifyToken.js")
const router=require('express').Router()

//-----create------- (by admin)
router.post('/addseat/:hotelId',Token.verifyAdmin, seatController.addSeat)

// //update
// router.patch('/updatebus/:busId',Token.verifyAdmin, busController.updateBus)

// //delete
// router.delete('/deletebus/:busId',Token.verifyAdmin, busController.deleteBus)

// //get all
// router.get('/getallbuses',busController.getAllBuses)

// //get 
// router.get('/getonebus/:busId',busController.getOneBus)

module.exports= router
 
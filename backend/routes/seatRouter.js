const seatController= require("../controllers/seatController.js")

const Token=require("../utils/verifyToken.js")
const router=require('express').Router()

//-----create------- (by admin)
router.post('/addseat',Token.verifyAdmin, seatController.addSeat)

// //update booked ticket
 router.patch('/updateticket/:seatId', seatController.updateBookedSeat)

// //delete
// router.delete('/deletebus/:busId',Token.verifyAdmin, busController.deleteBus)

// //get all
router.get('/getallseats/:busId',seatController.getAllSeats)

// //get 
// router.get('/getonebus/:busId',busController.getOneBus)

module.exports= router
 
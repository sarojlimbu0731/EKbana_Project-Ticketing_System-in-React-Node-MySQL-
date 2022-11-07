const seatController= require("../controllers/seatController.js")

const Token=require("../utils/verifyToken.js")
const router=require('express').Router()

//-----create------- (by admin)
router.post('/addseat',Token.verifyAdmin, seatController.addSeat)

// //update booked ticket by passenger
 router.patch('/updateticket/:seatId',Token.verifyUser, seatController.updateBookedSeat)

// //update seat status by admin
router.patch('/updateseat/:seatId', seatController.updateSeat)

// //delete by seat Id by admin
router.delete('/deleteseat/:seatId',Token.verifyAdmin, seatController.deleteSeat)

// //get all
router.get('/getallseats/:busId', seatController.getAllSeats)

// //get  by busId
router.get('/getseats/:busId',seatController.getBusSeat)

module.exports= router
 
const bookedTicketController= require('../controllers/bookTicketController.js')
const Token=require("../utils/verifyToken.js")

const router=require('express').Router()

//update ticket status by admin
router.patch('/updateticket/:bookId',Token.verifyAdmin,bookedTicketController.updateBookTicket)

//get bookticket success
router.get('/ticketsuccess', bookedTicketController.getAllTicketSuccess)

//get 
router.get('/ticketpend', bookedTicketController.getAllTicketPending)

//delete all with ticket status success 
router.delete('/ticketdelete',Token.verifyAdmin, bookedTicketController.deleteTicketSuccess)

module.exports= router
 
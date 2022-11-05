const bookedTicketController= require('../controllers/bookTicketController.js')

const router=require('express').Router()

//update
router.patch('/updateticket/:bookId',bookedTicketController.updateBookTicket)

//get bookticket success
router.get('/ticketsuccess', bookedTicketController.getAllTicketSuccess)

//get 
router.get('/ticketpend', bookedTicketController.getAllTicketPending)

module.exports= router
 
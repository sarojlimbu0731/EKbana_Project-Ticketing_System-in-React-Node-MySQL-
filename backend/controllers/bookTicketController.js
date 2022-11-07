const db= require("../models")
const { SendMailer } = require("../utils/SendMailer");
const createError =require('../utils/error.js')

//create main model 
const BookTickets= db.bookTickets



// --------update seat status by admin--------
const updateBookTicket=async(req,res,next)=>{
    const id=req.params.bookId
    const value= req.body.bookStatus
    const mailer=req.body
    SendMailer(mailer)
  try {
    await BookTickets.update({bookStatus:value},{where:{
        bookId:id
    }})
    // const data= await Seats.findAll({where:{busId:busId}})
    res.send("updated success")
    
  } catch (err) {
    next(err)
  }
}



// --------get all bookedTicket success---------
const getAllTicketSuccess=async(req,res,next)=>{ 
  try {
    const data= await BookTickets.findAll({where:{bookStatus:true}})
    await data.map(ticket=>{
       ticket.seatName= ticket.seatName.split(',')
    })
  res.send(data)

} catch (err) {
    next(err)
}
}

// --------get all bookedTicket pending---------
const getAllTicketPending=async(req,res,next)=>{
    try {
        const data= await BookTickets.findAll({where:{bookStatus:false}})
        await data.map(ticket=>{
           ticket.seatName= ticket.seatName.split(',')
        })
      res.send(data)

    } catch (err) {
        next(err)
    }
}

const deleteTicketSuccess=async(req,res,next)=>{
  try {
    await BookTickets.destroy({
      where:{bookStatus:true}
    })
    
  } catch (error) {
    return next(createError(403,"No record found"))
  }
}


module.exports ={ updateBookTicket,getAllTicketSuccess,getAllTicketPending,deleteTicketSuccess}
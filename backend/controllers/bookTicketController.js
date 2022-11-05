const db= require("../models")

//create main model 
const BookTickets= db.bookTickets



// --------update seat status by admin--------
const updateBookTicket=async(req,res,next)=>{
    const id=req.params.seatId
    const busId=req.query.busId

  try {
    await Seats.update(req.body,{where:{
        seatId:id
    }})
    const data= await Seats.findAll({where:{busId:busId}})
    res.send(data)
    
  } catch (err) {
    next(err)
  }
}



// --------get all bookedTicket success---------
const getAllTicketSuccess=async(req,res,next)=>{ 
    try {
        let data= await BookTickets.findAll({bookStatus:true})
        res.send(data)
    } catch (err) {
        next(err)
    }
}

// --------get all bookedTicket pending---------
const getAllTicketPending=async(req,res,next)=>{
    try {
        let data= await BookTickets.findAll({where:{bookStatus:false}})
        res.send(data)
    } catch (err) {
        next(err)
    }
}


module.exports ={ updateBookTicket,getAllTicketSuccess,getAllTicketPending}
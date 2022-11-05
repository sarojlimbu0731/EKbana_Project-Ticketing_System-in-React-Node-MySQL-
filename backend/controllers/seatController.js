const db= require("../models")

//create main model 
const Seats=db.seats;
// const Users=db.users
const Buses=db.buses
const BookTickets=db.bookTickets


//--------create seat--------
const addSeat= async (req,res,next)=>{

    try {
        const seat= await Seats.create(req.body)
        const busId=seat.busId
        const data=await Seats.findAll({where:{busId:busId}})
        res.send(data)        
    } catch (err) {
        next(err)
    }    
}

// --------update seat status by admin--------
const updateSeat=async(req,res,next)=>{
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

// -----------update booked seat to when passsenger reserve  -----------
const updateBookedSeat= async (req,res,next)=>{
    let id=req.params.seatId
    let {selectedTicket,isAval,...otherDetails}=req.body
    let seat=JSON.stringify(selectedTicket)

 
    try {  
        
       await Promise.all(selectedTicket.map((seatId)=>(
            Seats.update({isAval:isAval},
                {
                where:{seatId:seatId}}
            )
         
        )))
        // await Users.update({seat:seat},{where:{userId:userId}})
    //    ----creating the book_ticket----
             await  BookTickets.create(otherDetails)      
   
        res.send("update successful")
        
    } catch (err) {
        next(err)
    }
}

// -------delete seat---------
const deleteSeat= async(req, res,next)=>{
   
    try {
       const id=req.params.seatId;
       console.log(id)
       const busId=req.query.busId
        await Seats.destroy({where:{seatId:id}})
        
            const data=await Seats.findAll({where:{busId:busId}})
            res.send(data)
        
    } catch (err) {
        next(err)
    }
}

// --------get all seats---------
const getAllSeats=async(req,res,next)=>{ 
    let id =req.params.busId
    try {
        // let data= await Seats.findAll({where:{busId:id}})
        let data= await Buses.findOne({
            include:{
                model:Seats,
                as:'seatDetails',
            },
            where:{busId:id}})
        res.send(data)
    } catch (err) {
        next(err)
    }
}

// --------get seat by busId---------
const getBusSeat=async(req,res,next)=>{
    
    try {
        let id=req.params.busId
        let data= await Seats.findAll({where:{busId:id}})
        res.send(data)
    } catch (err) {
        next(err)
    }
}


module.exports ={addSeat, updateBookedSeat, deleteSeat, getAllSeats, getBusSeat, updateSeat}
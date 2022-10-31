const db= require("../models")

//create main model 
const Seats=db.seats


//--------create seat--------
const addSeat= async (req,res,next)=>{
    
    try {

        // let busData={
        //     name:req.body.name,
        //     rate:req.body.rate,
        //     to:req.body.to,
        //     from:req.body.from,
        //     date:req.body.date,
        // }
        const seat= await Seats.create(req.body)
      
        res.send(seat)        
    } catch (err) {
        next(err)
    }    
}

// -----------update booked seat to unavailable-----------
const updateBookedSeat= async (req,res,next)=>{
    let id=req.params.seatId
    let {selectedTicket,isAval}=req.body

 
    try {  
        
       await Promise.all(selectedTicket.map((seatId)=>(
            Seats.update({isAval:isAval},
                {
                where:{seatId:seatId}}
            )
         
        )))
   
        res.send("update successful")
        
    } catch (err) {
        next(err)
    }
}

// -------delete seat---------
const deleteSeat= async(req, res,next)=>{
   
    try {
       let id=req.params.seatId
        await Seats.destroy({where:{seatId:id}})
        res.send("seat record is deleted successfully")
    } catch (err) {
        next(err)
    }
}

// --------get all seats---------
const getAllSeats=async(req,res,next)=>{ 
    let id =req.params.busId
    try {
        let data= await Seats.findAll({where:{busId:id}})
        res.send(data)
    } catch (err) {
        next(err)
    }
}

// --------get oneseat---------
const getOneSeat=async(req,res,next)=>{
    
    try {
        let id=req.params.seatId
        let data= await Seats.findOne({where:{seatId:id}})
        res.send(data)
    } catch (err) {
        next(err)
    }
}


module.exports ={addSeat, updateBookedSeat, deleteSeat, getAllSeats, getOneSeat}
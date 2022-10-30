const db= require("../models")

//create main model 
const Seats=db.seats


//--------create seat--------
const addSeat= async (req,res,next)=>{
    let id=req.params.hotelId
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

// -----------update seat details-----------
const updateSeat= async (req,res,next)=>{
    let id=req.params.seatId
    try {     
        await Seats.update(req.body,{ 
            where:{
                seatId:id
            },
      
        })
      
        let result=await Seat.findOne({where:{seatId:id}})

        res.send(result)
        
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
    try {
        let data= await Seats.findAll({})
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


module.exports ={addSeat, updateSeat, deleteSeat, getAllSeats, getOneSeat}
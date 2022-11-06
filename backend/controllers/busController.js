const db= require("../models")
const { Op } = require("sequelize");

//create main model 
const Buses=db.buses
const Seats=db.seats


//--------create bus--------
const addBus= async (req,res,next)=>{

    try {
 
         await Buses.create(req.body)
        const data= await Buses.findAll({})
        // console.log(bus)
        res.send(data)        
    } catch (err) {
        next(err)
    }    
}

// -----------update bus details by admin-----------
const updateBus= async (req,res,next)=>{
    let id=req.params.busId
    try {     
        await Buses.update(req.body,{
            where:{
                busId:id
            },
      
        })
        const data=await Buses.findAll({})
        res.send(data)
  
        
    } catch (err) {
        next(err)
    }
}

// -------delete bus by admin along with bus seats---------
const deleteBus= async(req, res,next)=>{
   
    try {
       let id=req.params.busId
        await Buses.destroy({where:{busId:id}})
        await Seats.destroy({where:{busId:id}})
        const data= await Buses.findAll({})
        res.send(data)
    } catch (err) {
        next(err)
    }
}

// --------get allbuses---------
const getAllBuses=async(req,res,next)=>{
    try {
        let data= await Buses.findAll({
            include:{
                model:Seats,
                as:'seatDetails'
            }
        })
        
        res.send(data)
    } catch (err) {
        next(err)
    }
}

// --------get onebus---------
const getOneBus=async(req,res,next)=>{
    try {
        let id=req.params.busId
        let data= await Buses.findOne({
            include:{
                model:Seats,
                as:'seatDetails'
            },
            where:{busId:id}})
            
        res.send(data)
    } catch (err) {
        next(err)
    }
}


// --------get searched buses---------
const getSearchBus=async(req,res,next)=>{
    
    try {
        let {to,from,date}=req.query
   
        let data= await Buses.findAll({where:{
            [Op.and]:[
                {to:to},
                {from:from},
                {date:date}
            ]
        }})
        res.send(data)
    } catch (err) {
        next(err)
    }
}


module.exports ={addBus, updateBus, deleteBus, getAllBuses, getOneBus, getSearchBus}
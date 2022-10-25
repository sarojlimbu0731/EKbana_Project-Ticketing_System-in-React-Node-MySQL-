const db= require("../models")

//create main model 
const Buses=db.buses


//--------create bus--------
const addBus= async (req,res,next)=>{

    try {

        // let busData={
        //     name:req.body.name,
        //     rate:req.body.rate,
        //     to:req.body.to,
        //     from:req.body.from,
        //     date:req.body.date,
        // }
        const bus= await Buses.create(req.body)
        console.log(bus)
        res.send(bus)        
    } catch (err) {
        next(err)
    }    
}

// -----------update bus details-----------
const updateBus= async (req,res,next)=>{
    let id=req.params.busId
    try {     
        await Buses.update(req.body,{
            where:{
                busId:id
            },
      
        })
      
        let result=await Buses.findOne({where:{busId:id}})

        res.send(result)
        
    } catch (err) {
        next(err)
    }
}

// -------delete bus---------
const deleteBus= async(req, res,next)=>{
   
    try {
       let id=req.params.busId
        await Buses.destroy({where:{busID:id}})
        res.send("bus record is deleted successfully")
    } catch (err) {
        next(err)
    }
}

// --------get allbuses---------
const getAllBuses=async(req,res,next)=>{
    try {
        let data= await Buses.findAll({})
        res.send(data)
    } catch (err) {
        next(err)
    }
}

// --------get onebus---------
const getOneBus=async(req,res,next)=>{
    
    try {
        let id=req.params.busId
        let data= await Buses.findOne({where:{busId:id}})
        res.send(data)
    } catch (err) {
        next(err)
    }
}


module.exports ={addBus, updateBus, deleteBus, getAllBuses, getOneBus}
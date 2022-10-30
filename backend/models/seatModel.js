module.exports=(sequelize,DataTypes)=>{
    const Seat= sequelize.define("seats",{
        seatId:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        seatName:{
            type:DataTypes.STRING,
            
        },
        date:{
            type:DataTypes.STRING  
        },
        isAval:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        },
        busId:{
            type:DataTypes.INTEGER
        }
    })
     return Seat
}
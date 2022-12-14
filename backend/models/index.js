const dbConfig= require("../config/dbConfig.js")

const {Sequelize, DataTypes}=  require("sequelize")

const sequelize=new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        logging:false,
        dialect:dbConfig.dialect,
        // operatorsAliases :false,

        
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
    }

)

sequelize.authenticate()
.then(()=>{
    console.log("Database connected successfully...")
})
.catch((err)=>{
    console.log("error: "+ err)
})

const db={}

db.Sequelize= Sequelize
db.sequelize= sequelize


// import busmodel
 db.buses= require('./busModel.js')(sequelize, DataTypes)

// //import userModel
 db.users=require('./userModel.js')(sequelize,DataTypes)

//import seatModel
db.seats=require('./seatModel.js')(sequelize,DataTypes)

//import seatModel
db.bookTickets=require('./bookModal.js')(sequelize,DataTypes)


// -----one-to-many ralation-------
db.users.hasMany(db.bookTickets,{foreignKey:'userId', as:"bookTickets"})


// -----one-to-many relation-----
db.buses.hasMany(db.seats, {foreignKey:'busId', as:"seatDetails"})

db.sequelize.sync({force:false})
.then(()=>{
    console.log("Re-syncronize is done ...")
})


module.exports =db





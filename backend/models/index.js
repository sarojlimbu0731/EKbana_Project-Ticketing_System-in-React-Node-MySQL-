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


// importing the busmodel
db.buses= require('./busModel.js')(sequelize, DataTypes)


db.sequelize.sync({force:false})
.then(()=>{
    console.log("Re-syncronize is done ...")
})





module.exports =db





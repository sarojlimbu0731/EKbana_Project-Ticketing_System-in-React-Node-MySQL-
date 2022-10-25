module.exports = (sequelize, DataTypes) => {
  const Bus = sequelize.define("buses", {
    busId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name: {
      type: DataTypes.STRING,
    },
    rate: {
      type: DataTypes.INTEGER,
    }, 
    to: {
      type: DataTypes.STRING,
    },
    from: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    },
    book_Seat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    aval_Seat: {
      type: DataTypes.STRING,
    },
  },{
    timestamps:false
  })

  return Bus
};

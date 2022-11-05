module.exports = (sequelize, DataTypes) => {
    const BookTicket = sequelize.define("book_tickets", {
      bookId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      userId: {
        type: DataTypes.INTEGER,
      }, 
      busName: {
        type: DataTypes.STRING,
      },
      seatName: {
        type: DataTypes.STRING,
      }, 
      totalPrice:{
        type:DataTypes.INTEGER
      },
      date: {
        type: DataTypes.STRING,
      },
      bookStatus:{
        type:DataTypes.BOOLEAN,
        defaultValue: false,
      }
    },{
      timestamps:false
    })
  
    return BookTicket 
  };
  
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    token: {
      type: DataTypes.STRING,
    },
    seat: {
      type: DataTypes.STRING,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return User
};

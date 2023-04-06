
const { DataTypes } = require('sequelize')
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    iid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    id: {
      type: DataTypes.INTEGER,
    },
  });
  return User;
};
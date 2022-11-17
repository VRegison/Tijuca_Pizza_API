const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/configDataBase");

const User = sequelize.define(
  "user",
  {
    idUser: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    nomeUser: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    senha: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamp: true }
);

module.exports = User
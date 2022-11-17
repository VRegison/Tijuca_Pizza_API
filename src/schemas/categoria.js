const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/configDataBase");

const categoria = sequelize.define(
  "categoria",
  {
    idCategoria: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    nomeCategoria: {
      type: DataTypes.STRING,
    },
  },
  { timestamp: true }
);

module.exports = categoria;

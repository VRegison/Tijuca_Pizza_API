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
  { timestamps: true }
);

module.exports = categoria;

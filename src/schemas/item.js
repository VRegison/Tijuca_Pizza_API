const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/configDataBase");

const item = sequelize.define(
  "item",
  {
    idItem: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    idPedido: {
      type: DataTypes.INTEGER,
    },
    idProduto: {
      type: DataTypes.STRING,
    },
    quantidade: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: true }
);

module.exports = item;

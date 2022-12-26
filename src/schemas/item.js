const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/configDataBase");

const items = sequelize.define(
  "items",
  {
    idItem: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    idPedido: {
      foreignKey: true, 
      type: DataTypes.INTEGER,
    },
    idProduto: {
      foreignKey: true,
      type: DataTypes.STRING,
    },
    quantidade: {
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.FLOAT,
    }
  },
  { timestamps: false }
);

module.exports = items;

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/configDataBase");

const pedidos = sequelize.define(
  "pedidos",
  {
    idPedido: {
      primaryKey: true,
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    idUser: {
      type: DataTypes.INTEGER,
    },
    mesa: {
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.FLOAT,
    },
    statusPedidos: {
      type: DataTypes.INTEGER,
    },
    data: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    observacao: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);  

module.exports = pedidos;

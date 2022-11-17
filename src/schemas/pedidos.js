const { Sequelize, Datatypes } = require("sequelize");
const sequelize = require("../config/configDataBase");

const pedidos = sequelize.define(
  "pedidos",
  {
    idPedido: {
      primaryKey: true,
      allowNull: false,
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
      type: DataTypes.DATE,
    },
    observacao: {
      type: DataTypes.TEXT,
    },
  },
  { timestamp: true }
);

module.exports = pedidos;

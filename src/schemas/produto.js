const {Sequelize, DataTypes} = require ("sequelize")
const sequelize = require("../config/configDataBase")

const produto = sequelize.define(
    "produto",
  {
    idProduto: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    idCategoria: {
      type: DataTypes.INTEGER,
    },
    nomeProduto: {
      type: DataTypes.STRING,
    },
    valor: {
      type: DataTypes.FLOAT,
    },
    descricao: {
    type: DataTypes.STRING,
    },
    statusProduto: {
        type: DataTypes.INTEGER,
        },
  },
  { timestamp: true }
);

module.exports = produto

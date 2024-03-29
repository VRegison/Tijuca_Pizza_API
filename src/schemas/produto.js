const {Sequelize, DataTypes} = require ("sequelize")
const sequelize = require("../config/configDataBase")

const produto = sequelize.define(
    "produto",
  {
    idProduto: {
      primaryKey: true,
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    idCategoria: {
      allowNull: true,
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
  { timestamps: false }
);

module.exports = produto

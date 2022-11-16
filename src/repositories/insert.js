const { QueryTypes } = require("sequelize");
const users = await sequelize.query(
  `INSERT INTO user(nomeUser, email, senha, status) VALUES("Raimunda", "raimunda08@gmail.com", "raimunda123", 1);`,
  { type: QueryTypes.INSERT }
);

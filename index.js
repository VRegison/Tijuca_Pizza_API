const {QueryTypes} = require('sequelize')
const sequelize = require("./src/config/configDataBase")


async function findByJoin () {
  try {
      const users = await sequelize.query("SELECT * FROM `items`", { type: QueryTypes.SELECT });
    return users;
    console.log("PASSSOUOUOUOUOUOU")
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }  
}



 module.exports = findByJoin
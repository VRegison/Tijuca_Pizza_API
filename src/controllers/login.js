//const User = require("../schemas/user");
const jwt = require("jsonwebtoken");
const {FindUser} = require("../services/user.service");
require("dotenv").config()

async function login(req, res, next){
  try {
    const response = await FindUser(req.body);
    console.log(response);
    if (response == null) {
      return res.status(401).send({ message: "Não encontrado" });
    } else {
      return res.status(200).send({
        message: "user encontrado",
        user: response.idUser,
        token: jwt.sign({ idUser: response.idUser }, process.env.SECRET, { expiresIn: 300 }),
      });
    }
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
    console.log("deu errado");
  }
}

module.exports = login

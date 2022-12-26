//const User = require("../schemas/user");
const jwt = require("jsonwebtoken");
const { FindUser } = require("../services/user.service");
require("dotenv").config();

async function login(req, res, next) {
  try {
    const response = await FindUser(req.body);
    console.log(response);
    if (response == null) {
      return res.status(401).send({ message: "user não encontrado" });
    } else {
      return res.status(200).send(response);
    }
  } catch (error) {
<<<<<<< HEAD
    res.status(error.status  || 500).send({ message: error.message });
    console.log("deu errado");
=======
    res.status(error.status || 500).send({ message: error.message });
>>>>>>> c84a7006434e604e045329e2375ba00eb071db79
  }
}

module.exports = login;

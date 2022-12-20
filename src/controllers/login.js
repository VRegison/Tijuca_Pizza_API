//const User = require("../schemas/user");
const jwt = require("jsonwebtoken");
const {FindUser} = require("../services/user.service");
require("dotenv").config()

async function login(req, res, next){
  try {
    const response = await FindUser(req.body);
    console.log(response);
    res.status(201).send({message: "logado"});
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
    console.log("deu errado");
  }
}

module.exports = login

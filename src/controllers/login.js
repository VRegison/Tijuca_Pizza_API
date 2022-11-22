//const User = require("../schemas/user");
const FindUser = require("../services/user.service");

async function login(req, res, next) {
  try {
    const response = await FindUser(req.body);
    console.log(response)
     if(response == null){
      res.status(401).send({ message: "não encontrado" });
     }else{
      res.status(200).send({ message: "user encontrado" });
     }
    
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
    console.log("deu errado");
  }
}

module.exports = login;

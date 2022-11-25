const CreateUser = require("../services/cad.service");
const {FindEmail, FindUser} = require("../services/user.service")
async function Create(req, res, next) {
  try {
    const create = await CreateUser(req.body);
    const user = await FindEmail(req.body.email)
    console.log(req.body.email, "email")
    console.log(user.toJSON(), "TEst")
    
    if (user) {
      res.status(400).send({ message: "e-mail já cadastrado" })
      console.log("caiu no if")
      next;
    } else {
      res.status(201).send({ message: "Usuário criado com sucesso" });
      console.log("caiu no else")
    }

  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
}

module.exports = Create;

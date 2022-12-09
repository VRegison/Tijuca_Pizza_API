const CreateUser = require("../services/cad.service");
const {FindEmail, FindUser} = require("../services/user.service")
const cadValidation = require("../../validations/cad")

async function Create(req, res, next) {
  try {
    const forms = await cadValidation()
    const user = await FindEmail(req.body.email)
    console.log(req.body.email, "email")
    
    if (user) {
      res.status(400).send({ message: "e-mail já cadastrado" })
      console.log("caiu no if")
      next;
    } else if(forms) {

      const create = await CreateUser(req.body);
      res.status(201).send({ message: "Usuário criado com sucesso" });
      console.log("caiu no else")
    }
    
    // console.log(user)

  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
}

module.exports = Create;

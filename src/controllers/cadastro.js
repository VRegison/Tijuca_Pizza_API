const CreateUser = require("../services/cad.service");

async function Create(req, res, next) {
  try {
    const create = await CreateUser(req.body);

    res.status(201).send({ message: "Usuário criado com sucesso" });
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
}

module.exports = Create;

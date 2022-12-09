const CreateMesa = require("../services/mesa.service");

//função de criar mesa

async function criarMesa (req, res, next) {
  try {
   
      const create = await CreateMesa(req.body);
      res.status(201).send({ message: "mesa aberta com sucesso" });
      console.log(create)

    } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
}

module.exports = criarMesa;
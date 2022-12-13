const jwt = require("jsonwebtoken");
const {
  createProd,
  updateProd,
  listProd,
  listOneProd,
} = require("../services/prod.service");

//produtos

exports.createProduto = async (req, res, next) => {
  try {
    const createProduto = await createProd(req.body);
    res.status(201).send(createProd);
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
  next()
};

exports.listarProduto = async (req, res, next) => {
  try {
    const response = await listProd();

    res.status(200).send({ produtos : response });
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};

exports.updateProduto = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await updateProd(id, req.body);
    res.status(200).send({message: "Produto editado com sucesso"});
    console.log(response)
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
  
};

exports.listOneProd   = async  (req, res, next) => {
  try {
    const {idProduto} = req.params;
    const response = await listOneProd(idProduto);
    res.status(200).send({ produto: response })
    console.log(response)
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};


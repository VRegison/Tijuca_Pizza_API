const jwt = require("jsonwebtoken");
const {
  createProd,
  updateProd,
  listProd,
} = require("../services/prod.service");

exports.createProduto = async (req, res, next) => {
  try {
    const createProduto = await createProd(req.body);
    res.status(201).send({ message: "Produto criado com sucesso" });
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
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
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};

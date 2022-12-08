const jwt = require("jsonwebtoken");
const { createPed, listPed, updatePed } = require("../services/ped.service");

exports.createPedido = async (req, res, next) => {
  try {
    const createPedido = await createPed(req.body);
    res.status(201).send({ message: "Pedido criado com sucesso" });
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};

exports.listarPedido = async (req, res, next) => {
  try {
    const response = await listPed();

    res.status(200).send({ pedidos : response });
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};

exports.updatePed = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await updatePed(id, req.body);
    res.status(200).send({message: "Pedido editado com sucesso"});
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};
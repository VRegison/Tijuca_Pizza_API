const mesas = require("../schemas/mesas");
const {createMesa, updateM, listMesa} = require("../services/mesa.service");

//função de criar mesa

exports.createMesa = async ( req, res, next ) => {
  try {
    const response = await createMesa(req.body);
    res.status(201).send({ message: "Mesa criada com sucesso" });
    console.log(response)
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};

//função de editar mesa

exports.updateMesa = async (req, res, next) => 
{
  try {
    const { id } = req.params;
    const response = await updateM(id, req.body);
    res.status(200).send({message: "status da mesa mudado com sucesso"});
    console.log(response)
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
  
};

//listar por status

exports.listMesa = async (req, res, next) => {

  try {
    const response = await listMesa();
    res.status(200).send({ mesas: response })
    console.log(response)
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
}

const {
  createProd,
  updateProd,
  listProd,
  listOneProd,
  findNome
} = require("../services/prod.service");
const User = require("../schemas/user")
//produtos

exports.createProduto = async (req, res, next) => {
  try {
    var verify = await new User(req.headers.status)
    if(verify == 1){
      const product = await findNome(req.body.nomeProduto)
      console.log(req.body.nomeProduto, "nomeProduto")

      if (product) {
      res.status(400).send({ message: "produto já cadastrado" })
      } else {
      
      const createProduto = await createProd(req.body);
      res.status(201).send({message: "produto cadastrado com sucesso"});
      }
    }else{
      res.status(400).send({ message: "seu usuário não tem permissão para cadastrar produtos" })
    }
    
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
  next();
};

exports.listarProduto = async (req, res, next) => {
  try {
    const response = await listProd();

    res.status(200).send({ produtos: response });
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};

exports.updateProduto = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await updateProd(id, req.body);
    res.status(200).send({ message: "Produto editado com sucesso" });
    console.log(response);
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};

exports.listOneProd = async (req, res, next) => {
  try {
    const { idProduto } = req.params;
    const response = await listOneProd(idProduto);
    res.status(200).send({ produto: response });
    console.log(response);
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};

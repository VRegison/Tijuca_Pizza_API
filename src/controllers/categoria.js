const categoria = require("../schemas/categoria");
const { createCat } = require("../services/cat.service");
const { listCat } = require("../services/cat.service");
const { deleteCat } = require("../services/cat.service")

//categoria

exports.createCategory = async (req, res, next) => {
  try {
    console.log("categoria criado");
    const createCategory = await createCat(req.body);
    res.status(201).send({ message: "Categoria criada com sucesso" });
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
}

//listar categorias  
exports.listCategory = async (req, res, next) => {
  try {
    const response = await listCat();

    res.status(200).send({ categorias: response });
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};

//deletar categoria

exports.deleteCategory = async (req, res, next) => {
  try {
    const { idCategoria } = req.params;
    const response = await deleteCat(idCategoria);
    if (response == 0) {
      res.status(404).send({ message: "Categoria não encontrada" })
    } else {
      res.status(200).send({ message: "Categoria excluida com sucesso" })
    }
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};
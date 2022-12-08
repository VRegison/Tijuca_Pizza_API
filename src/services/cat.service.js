const categoria = require("../schemas/categoria");

//criar categorias

exports.createCat = async ({
  nomeCategoria,

}) => {
  const createCat = await categoria.create({
    nomeCategoria: nomeCategoria,

  });
  return createCat;
};

//listar categorias

exports.listCat = async () => {
  const listCat = await categoria.findAll();
  return listCat;
};

//deletar categoria

exports.deleteCat = async (idCategoria) => {
  var id =  categoria.destroy({ where: { idCategoria:idCategoria } });
  return id
};

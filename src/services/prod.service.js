const produto = require("../schemas/produto");

//criar produto
exports.createProd = async ({
  idCategoria,
  nomeProduto,
  valor,
  descricao,
  statusProduto,
}) => {
  const createProd = await produto.create({
    idCategoria: idCategoria,
    nomeProduto: nomeProduto,
    valor: valor,
    descricao: descricao,
    statusProduto: statusProduto,
  });
  return createProd;
};

//editar por parâmetro
exports.updateProd = async (
  id,{ idCategoria, nomeProduto, valor, descricao, statusProduto }
) => {
  const updateProd = produto.update(
    {
      idCategoria: idCategoria,
      nomeProduto: nomeProduto,
      valor: valor,
      descricao: descricao,
      statusProduto: statusProduto,
    },
    { where: { idProduto: id } }
  );

  return updateProd;
};

//listar produtos
exports.listProd = async () => {
  const listProd = await produto.findAll();
  return listProd;
};

// listar por parametro
exports.listOneProd = async (idProduto) => {
  return produto.findByPk(idProduto);
   
};




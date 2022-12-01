const produto = require("../schemas/produto");


//criar produto
exports.createProd = async({idCategoria, nomeProduto, valor, descricao, statusProduto})=> { 
  const createProd = await produto.create({
    idCategoria: idCategoria,
    nomeProduto: nomeProduto,
    valor: valor,
    descricao: descricao,
    statusProduto: statusProduto,
  });
  return createProd;
};

//excluir produto
exports.deleteProd = async({idCategoria,
  nomeProduto,
  valor,
  descricao,
  statusProduto})=> {
    const deleteProd = await produto.destroy({ 
    idCategoria: idCategoria,
    nomeProduto: nomeProduto,
    valor: valor,
    descricao: descricao,
    statusProduto: statusProduto,
  });
  return deleteProd;
  };

//listar produtos
exports.listProd = async({idCategoria,
  nomeProduto,
  valor,
  descricao,
  statusProduto})=> {
    const listProd = await produto.findAll({ 
    idCategoria: idCategoria,
    nomeProduto: nomeProduto,
    valor: valor,
    descricao: descricao,
    statusProduto: statusProduto,
  });
  return listProd;
  }


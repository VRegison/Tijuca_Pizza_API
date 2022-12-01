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

//editar por parâmetro
exports.updateProd = async({idProduto},{idCategoria, nomeProduto, valor, descricao, statusProduto,})=> {
    const findProd = await produto.findOne(id)
    console.log(findProd)
    const updateProd = await findProd.update({ 
    idCategoria: idCategoria,
    nomeProduto: nomeProduto,
    valor: valor,
    descricao: descricao,
    statusProduto: statusProduto,
  });
  return updateProd;
  };

//listar produtos
exports.listProd = async() =>{
    const listProd = await produto.findAll();
    return listProd;
  }


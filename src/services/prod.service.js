const produto = require("../schemas/produto");

async function createProd(
  idCategoria,
  nomeProduto,
  valor,
  descricao,
  statusProduto
) {
  const createProd = await produto.create({
    idcategoria: idCategoria,
    nomeProduto: nomeProduto,
    valor: valor,
    descricao: descricao,
    statusProduto: statusProduto,
  });
  return createProd;
}

module.exports = createProd;

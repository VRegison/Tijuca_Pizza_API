const pedidos = require("../schemas/pedidos");
const item =  require ("../schemas/item")
const sequelize = require("../config/configDataBase")
const {QueryTypes} = require('sequelize')

//Formatação de data
function newDate() {
  var date = new Date();
  var day = String(date.getDate()).padStart(2, "0");
  var month = String(date.getMonth() + 1).padStart(2, "0");
  var year = String(date.getFullYear());
  var dateFormat = `${year}-${month}-${day}`;
  return dateFormat;
}

//criar pedido
exports.createPed = async ({
  idUser,
  mesa,
  statusPedidos,
  observacao,
}) => {
  const createPed = await pedidos.create({
    idUser: idUser,
    idMesa: mesa,
    statusPedidos: statusPedidos,
    data: newDate(),
    observacao: observacao,
  });

  const createItem = await item.create({
    quantidade
  });

  console.log(createPed)
  return createPed;
};

//listar pedidos
exports.listPedido = async () => {
  const listPed = await sequelize.query("SELECT p.idPedido, idUser, idMesa, total, statusPedidos, data, observacao, s.nomeProduto, i.quantidade FROM `pedidos` as p JOIN `items` as i on p.idPedido = i.idPedido JOIN `produtos` as s on i.idProduto = s.idProduto", { type: QueryTypes.SELECT });
  return listPed;
};

//editar pedidos
exports.updatePed = async (
  id,
  { idUser, mesa, total, statusPedidos, observacao }
) => {
  const updatePed = pedidos.update(
    {
      idUser: idUser,
      mesa: mesa,
      total: total,
      statusPedidos: statusPedidos,
      observacao: observacao,
    },
    { where: { idPedido: id } }
  );
  return updatePed;
};

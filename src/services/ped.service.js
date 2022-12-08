const pedidos = require("../schemas/pedidos");

//Formatação de data
function newDate(data) {
  var date = new Date();
  var day = String(date.getDate()).padStart(2, "0");
  var month = String(date.getMonth() + 1).padStart(2, "0");
  var year = String(date.getFullYear());
  var dateFormat = `${day}-${month}-${year}`;
  return dateFormat;
}

//criar pedido
exports.createPed = async ({
  idUser,
  mesa,
  total,
  statusPedidos,
  data,
  observacao,
}) => {
  const createPed = await pedidos.create({
    idUser: idUser,
    mesa: mesa,
    total: total,
    statusPedidos: statusPedidos,
    data: newDate(data),
    observacao: observacao,
  });
  return createPed;
};

//listar pedidos
exports.listPed = async () => {
  const listPed = await pedidos.findAll();
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

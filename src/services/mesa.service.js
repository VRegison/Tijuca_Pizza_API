const mesa = require("../schemas/mesas");

//Criar mesa

async function CreateMesa({ status }) {

    const create = await mesa.create({

      status: status,

    });
    return create;
  }
  
  module.exports = CreateMesa
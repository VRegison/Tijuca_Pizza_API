const user = require("../schemas/user");

//Cria usuário
async function CreateUser({ nomeUser, email, senha, status }) {
  const create = await user.create({
    nomeUser: nomeUser,
    email: email,
    senha: senha,
    status: status,
  });
  return create;
}

module.exports = CreateUser
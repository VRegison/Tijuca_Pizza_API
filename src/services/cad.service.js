const user = require("../schemas/user");

//Cria usuário

exports.CreateUser = async ({ nomeUser, email, senha, status }) => {

  const create = await user.create({
    nomeUser: nomeUser,
    email: email,
    senha: senha,
    status: status,
  });
  return create;
};

//validação do status


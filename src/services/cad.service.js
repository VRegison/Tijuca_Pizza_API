const User = require("../schemas/user");

//Cria usuário

exports.createUser = async ({ nomeUser, email, senha, status }) => {

  const create = await User.create({
    nomeUser: nomeUser,
    email: email,
    senha: senha,
    status: status,
  });
  return create;
};




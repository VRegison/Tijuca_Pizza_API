const User = require("../schemas/user");
const TokenServices = require("./token/token");

//valida login do usuário

exports.FindUser = async ({ email, senha }) => {
  const findUser = await User.findOne({
    where: { email: email, senha: senha },
  });
  const token = await TokenServices.gerarToken({ findUser });

  return { user:{ email: findUser.email, id: findUser.idUser}, token };
};

exports.FindEmail = async (email) => {
  console.log(email, "email");
  const findUser = await User.findOne({
    where: { email: email },
  });
  console.log(findUser, "findUser");
  return findUser;
};

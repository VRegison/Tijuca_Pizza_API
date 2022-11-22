const User = require("../schemas/user");

//valida login do usuário
async function FindUser({ email, senha }) {
  const findUser = await User.findOne({
    where: { email: email, senha: senha },
  });
  return findUser;
}

module.exports = FindUser;

const User = require("../schemas/user");

//valida login do usuário
exports.FindUser = async ({ email, senha }) => {
  const findUser = await User.findOne({
    where: { email: email, senha: senha },
  });
  return findUser;
}

exports.FindEmail = async ( email ) =>  {
  console.log(email, "email")
  const findUser = await User.findOne({
    where: {email: email},
  });
  console.log(findUser, "findUser")
  return findUser;
}



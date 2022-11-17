const Insert = require("../repositories/insert");

async function InsertUser({nomeUser, email, senha, status}){
    console.log(nomeUser)
    const user = await Insert(nomeUser, email, senha, status);
    return user;
}

module.exports = InsertUser
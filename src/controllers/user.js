const InsertUser = require("../services/insert.service");

async function User(req, res, next){
    try {
        const teste = await InsertUser(req.body);
        if(req.body.nomeUser  == ""){
           throw Error("Por favor preencher todos os campos ")
        } else{
            console.log("caiu no else")
        }
        res.status(201).send({message: "Usuario cadastrado com sucesso"})
    } catch (error) {
        console.log(error)
        res.status(error.status || 500).send({message: error.message})
    }
}

module.exports = User
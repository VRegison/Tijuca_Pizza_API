const jwt = require("jsonwebtoken")
const {createProd, deleteProd, listProd} = require("../services/prod.service")


exports.createProduto = async(req, res, next)=> {
    try {
        const createProduto = await createProd(req.body);
        res.status(201).send({ message: "Produto criado com sucesso" });
    } catch (error) {
        res.status(error.status || 500).send({ message: error.message });
    }
    
} 

exports.listarProduto = async(req, res, next)=> {
    try {
        const listarProduto = await listProd(req.body);
        res.status(200).send({ message: "Produtos listados" });
    } catch (error) {
        res.status(error.status || 500).send({ message: error.message });
    }
    
}


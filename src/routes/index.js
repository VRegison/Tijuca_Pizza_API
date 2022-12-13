const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const User = require("../config/configDataBase");
function verifyJWT(req, res, next){
    const token = req.headers['x-access-token']
    jwt.verify(token, process.env.SECRET, (err, decoded)=>{
        if(err){
            console.log("caiu aqui")            
            return res.status(401).end()
        } 
        req.IdUser = decoded.IdUser
        next()
    })
}

//user rotas
const loginValidation = require("../../validations/login");
const Login = require("../controllers/login");
const cadValidation = require("../../validations/cad");
const Create = require("../controllers/cadastro");

//produto rotas
const {createProduto} = require("../controllers/produtos");
const {listarProduto} = require("../controllers/produtos");
const {updateProduto} = require("../controllers/produtos");

//User
router.post("/login", loginValidation, Login);
router.post("/create", cadValidation, Create);

//Produtos
router.post("/createProdutos",verifyJWT, createProduto);
router.get("/listarProdutos", listarProduto);
router.patch("/updateProdutos/:id",verifyJWT, updateProduto);

module.exports = router;

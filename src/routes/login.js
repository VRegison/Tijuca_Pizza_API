const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const User = require("../config/configDataBase");

//user rotas
const loginValidation = require("../../validations/login");
const Login = require("../controllers/login");
const cadValidation = require("../../validations/cad");
const Create = require("../controllers/cadastro");

//produto rotas
const { createProd, listProd } = require("../controllers/produtos");

//User
router.post("/login", loginValidation, Login);
router.post("/create", cadValidation, Create);

//Produtos
router.post("/produtos", (req, res)=>{
    createProd});
router.get("/produtos", (req, res)=>{listProd})
;
module.exports = router;

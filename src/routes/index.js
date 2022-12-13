const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const User = require("../config/configDataBase");
const SECRET = require("dotenv").config();

//cadastro e login rotas
const loginValidation = require("../../validations/login");
const Login = require("../controllers/login");
const cadValidation = require("../../validations/cad");
const Create = require("../controllers/cadastro");

router.post("/login", loginValidation, Login);
router.post("/create", cadValidation, Create);

//Rotas produtos
const { createProduto, listarProduto, updateProduto } = require("../controllers/produtos");
const verifyToken = require("../../validations/token.validation");

router.post("/createProdutos", verifyToken, createProduto);
router.get("/listarProdutos", verifyToken, listarProduto);
router.patch("/updateProdutos/:id", verifyToken, updateProduto);


//Rotas pedidos
const { createPedido, listarPedido, updatePed } = require("../controllers/pedidos");

router.post("/createPedidos", createPedido);
router.get("/listarPedidos", listarPedido);
router.patch("/updatePedidos/:id", updatePed);

module.exports = router;

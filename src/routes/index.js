const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const User = require("../config/configDataBase");
const SECRET = require("dotenv").config();

//user rotas
const loginValidation = require("../../validations/login");
const Login = require("../controllers/login");
const cadValidation = require("../../validations/cad");
const Create = require("../controllers/cadastro");

//pedidos rotas
const {
  createPedido,
  listarPedido,
  updatePed,
} = require("../controllers/pedidos");

//produto
const { createProduto } = require("../controllers/produtos");
const { listarProduto } = require("../controllers/produtos");
const { updateProduto } = require("../controllers/produtos");
const verifyToken = require("../../validations/token.validation");

//User
router.post("/login", loginValidation, Login);
router.post("/create", cadValidation, Create);

//Produtos
router.post("/createProdutos", verifyToken, createProduto);
router.get("/listarProdutos", verifyToken, listarProduto);
router.patch("/updateProdutos/:id", verifyToken, updateProduto);

//Pedidos rotas
router.post("/createPedidos", createPedido);
router.get("/listarPedidos", listarPedido);
router.patch("/updatePedidos/:id", updatePed);

module.exports = router;

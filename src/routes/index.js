const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const User = require("../config/configDataBase");
const SECRET = require('dotenv').config()

//token

function verifyJWT(req, res, next) {
  const token = req.headers["x-acess-token"];
  jwt.verify(token, SECRET, (error, decoded) => {
    if (error) return res.status(401).end();

    req.idUser = decoded.idUser;
    next();
  });
}

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

//User
router.post("/login", loginValidation, Login);
router.post("/create", cadValidation, Create);

//Produtos
router.post("/createProdutos", createProduto);
router.get("/listarProdutos", verifyJWT, listarProduto);
router.patch("/updateProdutos/:id", updateProduto);

//Pedidos rotas
router.post("/createPedidos", createPedido);
router.get("/listarPedidos", listarPedido);
router.patch("/updatePedidos/:id", updatePed);

module.exports = router;

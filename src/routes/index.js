const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const User = require("../config/configDataBase");
const SECRET = require("dotenv").config();

//cadastro e login rotas
const loginValidation = require("../../validations/login");
const Login = require("../controllers/login");
const Create = require("../controllers/cadastro");

router.post("/login", loginValidation, Login);
router.post("/create", cadValidation, Create);

//Rotas produtos
const {
  createProduto,
  listarProduto,
  updateProduto,
} = require("../controllers/produtos");
const verifyToken = require("../../validations/token.validation");

router.post("/createProdutos", verifyToken, createProduto);
router.get("/listarProdutos", verifyToken, listarProduto);
router.patch("/updateProdutos/:id", verifyToken, updateProduto);
router.get("/listarProduto/:idProduto", listOneProd);

//Rotas pedidos
const {
  createPedido,
  listarPedido,
  updatePed,
  listOneProd,
} = require("../controllers/pedidos");

router.post("/createPedidos", createPedido);
router.get("/listarPedidos", listarPedido);
router.patch("/updatePedidos/:id", updatePed);

//Rotas Categoria
const {
  createCategory,
  deleteCategory,
  listCategory,
} = require("../controllers/categoria");

router.post("/cadastrarCategoria", createCategory);
router.get("/listarCategorias", listCategory);
router.delete("/deletarCategoria/:idCategoria", deleteCategory);

//Rotas Mesas
const { createMesa, updateMesa, listMesa } = require("../controllers/mesa");
const mesaValidation = require("../../validations/mesa");

router.post("/createMesa", mesaValidation, createMesa);
router.patch("/updateMesa/:id", mesaValidation, updateMesa);
router.get("/listarMesas", listMesa);

//Pedidos rotas
// router.post("/createPedidos", createPedido);
// router.get("/listarPedidos", listarPedido);
// router.patch("/updatePedidos/:id", updatePed);

module.exports = router;

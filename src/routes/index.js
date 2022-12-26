const { Router } = require("express");
const router = Router();
const User = require("../config/configDataBase");
const SECRET = require("dotenv").config();
const verifyToken = require("../../validations/token.validation");

//cadastro e login rotas
const loginValidation = require("../../validations/login");
const cadValidation = require("../../validations/cad")
const { Create, Login } = require("../controllers/users")

router.post("/login", loginValidation, Login);
router.post("/create", cadValidation, Create);

//Rotas produtos
const {
  createProduto,
  listarProduto,
  updateProduto,
  listOneProd,
} = require("../controllers/produtos");

router.post("/createProdutos", verifyToken, createProduto);
router.get("/listarProdutos", listarProduto);
router.patch("/updateProdutos/:id", verifyToken, updateProduto);
router.get("/listarProduto/:idProduto", listOneProd);

//Rotas pedidos
const {
  createPedido,
  listarPedido,
  updatePed,
} = require("../controllers/pedidos");

router.post("/createPedidos", createPedido);
router.get("/listarPedidos", listarPedido);
router.patch("/updatePedidos/:id", updatePed);

//Rotas Categoria
const {createCategory, deleteCategory, listCategory} = require("../controllers/categoria");

router.post("/cadastrarCategoria", verifyToken, createCategory);
router.get("/listarCategorias", verifyToken, listCategory);
router.delete("/deletarCategoria/:idCategoria", verifyToken, deleteCategory);

//Rotas Mesas
const { createMesa, updateMesa, listMesa } = require("../controllers/mesa");
const mesaValidation = require("../../validations/mesa");

router.post("/createMesa", verifyToken, mesaValidation, createMesa);
router.patch("/updateMesa/:id", verifyToken, mesaValidation, updateMesa);
router.get("/listarMesas", verifyToken, listMesa);

module.exports = router;

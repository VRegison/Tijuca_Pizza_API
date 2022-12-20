const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const User = require("../config/configDataBase");
const SECRET = require("dotenv").config();

//VAR user rotas
const cadValidation = require("../../validations/cad");
const loginValidation = require("../../validations/login");
const Login = require("../controllers/login");
const {CreateUser} = require("../controllers/cadastro");

//VAR produto rotas
const { createProduto, listOneProd, updateProduto, listarProduto } = require("../controllers/produtos");
const prodValidation = require ("../../validations/prod")

//VAR categoria rotas
const { createCategory, deleteCategory, listCategory } = require("../controllers/categoria")

//produto
const { createProduto } = require("../controllers/produtos");
const { listarProduto } = require("../controllers/produtos");
const { updateProduto } = require("../controllers/produtos");
const verifyToken = require("../../validations/token.validation");

//User
router.post("/login", loginValidation, Login);
router.post("/create", cadValidation, CreateUser);

//Produtos
router.post("/createProdutos", createProduto);
router.get("/listarProdutos", verifyToken, listarProduto);
router.patch("/updateProdutos/:id", updateProduto);

//Categoria
router.post("/cadastrarCategoria", createCategory)
router.get("/listarCategorias", listCategory)
router.delete("/deletarCategoria/:idCategoria", deleteCategory)

//Mesas
router.post("/createMesa", mesaValidation, createMesa)
router.patch("/updateMesa/:id",mesaValidation, updateMesa)
router.get ("/listarMesas", listMesa)

//pedidos
router.get("/listPedido", listarPedido)
router.post("/createPedido", createPedido)


module.exports = router;

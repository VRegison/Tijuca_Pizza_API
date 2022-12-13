const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const User = require("../config/configDataBase");
const SECRET = require('dotenv').config()


//VAR user rotas
const cadValidation = require("../../validations/cad");
const loginValidation = require("../../validations/login");
const Login = require("../controllers/login");
const Create = require("../controllers/cadastro");

//VAR produto rotas
const { createProduto, listOneProd, updateProduto, listarProduto } = require("../controllers/produtos");

//VAR categoria rotas
const { createCategory, deleteCategory, listCategory } = require("../controllers/categoria")

//VAR mesa rotas
const {createMesa, updateMesa, listMesa} = require ("../controllers/mesa")
const mesaValidation = require("../../validations/mesa");

//User
router.post("/login", loginValidation, Login);
router.post("/create", cadValidation, Create);

//Produtos
router.get("/listarProduto/:idProduto", listOneProd)
router.get("/listarProdutos", listarProduto);
router.post("/createProdutos", createProduto);
router.patch("/updateProdutos/:id", updateProduto);

//Categoria
router.post("/cadastrarCategoria", createCategory)
router.get("/listarCategorias", listCategory)
router.delete("/deletarCategoria/:idCategoria", deleteCategory)

//Mesas
router.post("/createMesa", mesaValidation, createMesa)
router.patch("/updateMesa/:id",mesaValidation, updateMesa)
router.get ("/listarMesas", listMesa)


//Pedidos rotas
// router.post("/createPedidos", createPedido);
// router.get("/listarPedidos", listarPedido);
// router.patch("/updatePedidos/:id", updatePed);

module.exports = router;

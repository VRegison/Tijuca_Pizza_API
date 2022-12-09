const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const User = require("../config/configDataBase");

//user rotas
const loginValidation = require("../../validations/login");
const Login = require("../controllers/login");
const cadValidation = require("../../validations/cad");
const Create = require("../controllers/cadastro");

//VAR produto rotas
const { createProduto, listOneProd, updateProduto, listarProduto } = require("../controllers/produtos");

//VAR categoria rotas
const { createCategory, deleteCategory, listCategory } = require("../controllers/categoria")

//VAR mesa rotas
const createMesa = require ("../controllers/mesa")

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
router.post("/createMesa", createMesa)

module.exports = router;

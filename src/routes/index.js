const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const VerifyJWT = require("../../validations/token/tokenValidation")

//user rotas
const loginValidation = require("../../validations/login");
const Login = require("../controllers/login");
const cadValidation = require("../../validations/cad");
const Create = require("../controllers/cadastro");

//produto rotas
const {createProduto} = require("../controllers/produtos");
const {listarProduto} = require("../controllers/produtos");
const {updateProduto} = require("../controllers/produtos");
const {listOneProd} = require("../controllers/produtos");

//categoria rotas
const {createCategory, deleteCategory, listCategory} = require("../controllers/categoria")

//User
router.post("/login", loginValidation, Login);
router.post("/create", cadValidation, Create);

//Produtos
router.post("/createProdutos",VerifyJWT, createProduto);
router.get("/listarProdutos", VerifyJWT, listarProduto);
router.patch("/updateProdutos/:id",VerifyJWT, updateProduto);
router.get("/listarProduto/:idProduto", VerifyJWT, listOneProd)
router.get("/listarProdutos", VerifyJWT, listarProduto);
router.post("/createProdutos",VerifyJWT, createProduto);
router.patch("/updateProdutos/:id", VerifyJWT, updateProduto);

//Categoria
router.post("/cadastrarCategoria", VerifyJWT, createCategory)
router.get("/listarCategorias", VerifyJWT, listCategory)
router.delete("/deletarCategoria/:idCategoria",VerifyJWT, deleteCategory)

module.exports = router;

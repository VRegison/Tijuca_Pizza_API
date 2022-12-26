const { Router } = require("express");
const router = Router();
const verifyToken = require("../../validations/token.validation");

//cadastro e login rotas
const loginValidation = require("../../validations/login");
const cadValidation = require("../../validations/cad");
const { Create, Login } = require("../controllers/users");

router.post("/login", loginValidation, Login);
router.post("/create", cadValidation, Create);

//Rotas produtos
const {
  createProduto,
  listarProduto,
  updateProduto,
  listOneProd,
} = require("../controllers/produtos");
const prodValidation = require("../../validations/prod")

router.post("/createProdutos", verifyToken, prodValidation, createProduto);
router.get("/listarProdutos", listarProduto);
router.patch("/updateProdutos/:id", verifyToken, updateProduto);
router.get("/listarProduto/:idProduto", listOneProd);

//Rotas pedidos
const {
  createPedido,
  listarPedido,
  updatePed,
} = require("../controllers/pedidos");
const pedValidation = require("../../validations/ped")

router.post("/createPedidos", pedValidation, createPedido);
router.get("/listarPedidos", listarPedido);
router.patch("/updatePedidos/:id", updatePed);

//items
const { criacaoItem, edicaoItem } = require("../controllers/item");
const itemValidation = require("../../validations/item");

router.post("/createItem", itemValidation, criacaoItem);
router.patch("/updateItem/:id", edicaoItem);

//Rotas Categoria
const {
  createCategory,
  deleteCategory,
  listCategory,
} = require("../controllers/categoria");
const catValidation = require("../../validations/cat")

router.post("/cadastrarCategoria", verifyToken, catValidation, createCategory);
router.get("/listarCategorias", verifyToken, listCategory);
router.delete("/deletarCategoria/:idCategoria", verifyToken, deleteCategory);

//Rotas Mesas
const { createMesa, updateMesa, listMesa } = require("../controllers/mesa");
const mesaValidation = require("../../validations/mesa");

router.post("/createMesa", verifyToken, mesaValidation, createMesa); //desktop
router.patch("/updateMesa/:id", verifyToken, mesaValidation, updateMesa); // desktop
router.get("/listarMesas", verifyToken, listMesa);

module.exports = router;

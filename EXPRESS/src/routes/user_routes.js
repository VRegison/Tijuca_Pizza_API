const router = require("express").Router()
const controller = require("../controllers/user_Controler")

router.post("/cadastroUsuario",controller.cadastrar)

module.exports = router
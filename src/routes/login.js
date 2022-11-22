const { Router } = require("express");
const mysql = require("mysql");
const User = require("../config/configDataBase");
const md5 = require("md5");
const loginValidation = require("../../validations/login");
const Login = require("../controllers/login");
const cadValidation = require("../../validations/cad");
const Create = require("../controllers/cadastro");
const router = Router();

router.post("/login", loginValidation, Login)
router.post("/create", cadValidation, Create)

module.exports = router;

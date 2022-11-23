const { Router } = require("express");
const User = require("../config/configDataBase");
const loginValidation = require("../../validations/login");
const Login = require("../controllers/login");
const cadValidation = require("../../validations/cad");
const Create = require("../controllers/cadastro");
const jwt = require("jsonwebtoken");
const router = Router();
   
router.post("/login", loginValidation, Login);  
router.post("/create", cadValidation, Create);

module.exports = router;

const express = require('express');
const { Router } = require("express");
const User = require('./src/controllers/user');
const router = Router();
const app = express()
const port = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.post("/cadastrar", User)
app.use(router)

app.listen(port,()=>{
    console.log('Servidor rodando !!!!')
})
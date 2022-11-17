const express = require('express');
const { Router } = require("express");
const User = require('./src/controllers/user');
const router = Router();
const app = express()
const port = 8080

//PEGAR TODOS OS REGISTROS
app.get("/", (req, res) => {
    res.json({ mensagem: 'pegar todos os registros!!' })
})
//PEGAR SOMENTE O REGISTRO PELO ID
app.get("/:id", (req, res) => {
    const id = req.params.id
    res.json({ mensagem: `pegar somente o registro com id: ${id}` })
})
//CRIAR UM REGISTRO
app.post("/", (req, res) => {
    const body = req.body
    res.send(body)
})
//ATUALIZAR SOMENTE O REGISTRO PELO ID
app.put("/:id", (req, res) => {
    const id = req.params.id
    res.json({ mensagem: `atualizar somente o registro com id: ${id}` })
})
//DELETAR SOMENTE O REGISTRO PELO ID
app.delete("/:id", (req, res) => {
    const id = req.params.id
    res.json({ mensagem: `deletar somente o registro com id: ${id}` })
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.post("/cadastrar", User)
app.use(router)

app.listen(port, () => {
    console.log('Servidor rodando !!!!')
})
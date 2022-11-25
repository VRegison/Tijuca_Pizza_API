const express = require('express');
const router = require("./src/routes/login")
const sequelize = require("./src/config/configDataBase");
const login = require("./src/controllers/login")
const Create = require("./src/controllers/cadastro")
const app = express()
const jwt = require("jsonwebtoken")

const port = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router)



app.listen(
  port,
  console.table({
    ports: port,
    DB: sequelize.config.host,
  })
);


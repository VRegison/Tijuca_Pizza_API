const express = require('express');
const router = require("./src/routes/login")
const sequelize = require("./src/config/configDataBase");
const login = require("./src/controllers/login")
const Create = require("./src/controllers/cadastro")
const app = express()
const port = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.post("/login", login)
router.post("/create", Create)
app.use(router)



app.listen(
  port,
  console.table({
    ports: port,
    DB: sequelize.config.host,
  })
);


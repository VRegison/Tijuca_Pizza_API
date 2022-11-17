const express = require("express");
const sequelize = require("./src/config/configDataBase");
const app = express();

const port = 3000

app.get("/", function(req, res){
    res.send("tarara")
})

app.listen(
  port,
  console.table({
    ports: port,
    DB: sequelize.config.host,
  })
);

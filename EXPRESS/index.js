const express = require("express")
const app = express()
const sequelize = require("./db")

const userRoutes = require("./src/routes/user_routes")

const User = require('./src/schemas/user')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRoutes)

async function Conection() {
    try {
        await sequelize.authenticate();
        console.log("Banco conectado");
    } catch (error) {
        console.log(error.message);
    }
}

Conection()

app.listen(
    5000,
    () => {
        console.log('inicio')
    }
);
const express = require("express");

const { dbConnection } = require("./config/config");
const app = express()
require("dotenv").config()

const PORT = process.env.PORT || 3000;


app.use(express.json())
dbConnection()


app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`))
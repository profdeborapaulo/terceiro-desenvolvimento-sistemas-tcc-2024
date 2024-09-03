const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const router = ("express-router")
const db = require("../src/config/dbConfig");
const cors = require("cors");
const routes = require("./routers/routes");
require('dotenv').config();

app.use(cors());
//Leitura de JSON pelo express
app.use(express.json());
app.use(routes);


app.listen(8081, () => {
    console.log("Console rodando! na porta 8081")

})
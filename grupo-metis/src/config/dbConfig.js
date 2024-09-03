require("dotenv").config();
const mongoose = require("mongoose");
const URL = "mongodb+srv://mongodb:Ft6uAlM3Jsl1vPg7@tcc.4rz9d.mongodb.net/?retryWrites=true&w=majority&appName=tcc"

const connection = mongoose.connect(URL, { useNewUrlParser : true, useUnifiedTopology : true});

if(connection){

    console.log("Conectado ao banco com sucesso");
} else {
    console.log("Problema ao conectar com o banco");
}

module.exports = connection;
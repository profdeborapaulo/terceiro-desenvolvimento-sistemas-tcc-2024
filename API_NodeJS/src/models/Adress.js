const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tb_adress = new Schema({
    type: {
        type: String        
    },
    street: {
        type: String
    },
    number: {
        type: Number
    },
    complement: {
        type: String
    },
    city: {
        type: String
    },
    uf: {
        type: String
    },
    cep: {
        type: String
    },
    neighborhood: {
        type: String
    },

}, {collection: 'tb_adress'});

module.exports = mongoose.model("tb_adress", tb_adress);
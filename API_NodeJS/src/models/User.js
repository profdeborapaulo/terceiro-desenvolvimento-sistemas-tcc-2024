const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tb_user = new Schema({
    NAME: {
        type: String        
    },
    BDATE: {
        type: String
    },
    PHONE: {
        type: String
    },
    EMAIL: {
        type: String
    },
    CPF: {
        type: String
    }, 
    RG: {
        type: String
    },
    PASSWORD: {
        type: String
    }
}, {collection: 'tb_user'});

module.exports = mongoose.model("tb_user", tb_user);
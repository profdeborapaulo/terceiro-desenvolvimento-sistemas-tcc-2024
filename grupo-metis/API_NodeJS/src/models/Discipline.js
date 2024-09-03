const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tb_discipline = new Schema({
    name: {
        type: String,        
        unique: true
    }
    
}, {collection: 'tb_discipline'});

module.exports = mongoose.model("tb_discipline", tb_discipline);
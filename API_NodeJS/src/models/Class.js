const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tb_class = new Schema({
    name: {
        type: String        
    },
    grade: {
        type: String
    },
    period: {
        type: String
    },
    
}, {collection: 'tb_class'});

module.exports = mongoose.model("tb_class", tb_class);
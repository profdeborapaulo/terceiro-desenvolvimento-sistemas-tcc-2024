const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tb_discipline_class = new Schema({
    movie_discipline_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_discipline"
    },
    movie_class_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_class"
    },
    
}, {collection: 'tb_discipline_class'});

module.exports = mongoose.model("tb_discipline_class", tb_discipline_class);
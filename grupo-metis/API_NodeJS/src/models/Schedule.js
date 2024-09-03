const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tb_schedule = new Schema({
    weekday:{
        type: String
    },
    time:{
        type: String
    },
    movie_class_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_class"
    },
    movie_discipline_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_discipline"
    },
}, {collection: 'tb_schedule'});

module.exports = mongoose.model("tb_schedule", tb_schedule);
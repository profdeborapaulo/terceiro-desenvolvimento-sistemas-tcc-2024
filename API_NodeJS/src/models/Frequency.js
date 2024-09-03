const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tb_frequency = new Schema({
    Entry:{
        type: String,
        require: true
    },
    Date:{
        type: String
    },
    Exit:{
        type: String
    },
    Stay: {
        type: String,        
    },
    movie_student_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_student"
    },
    movie_user_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_user"
    },
}, {collection: 'tb_frequency'});

module.exports = mongoose.model("tb_frequency", tb_frequency);
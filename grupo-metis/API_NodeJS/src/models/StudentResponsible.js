const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tb_student_responsible = new Schema({
    relationship:{
        type: String
    },
    movie_user_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_user"
    },
    movie_student_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_student"
    },
    movie_responsible_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_responsible"
    },
    movie_adress_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_adress"
    },
}, {collection: 'tb_student_responsible'});

module.exports = mongoose.model("tb_student_responsible", tb_student_responsible);
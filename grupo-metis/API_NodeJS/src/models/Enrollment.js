const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tb_enrollment = new Schema({
    record:{
        type: Number
    },
    createDat:{
        type: String
    },
    status:{
        type: String
    },
    movie_class_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_class"
    },
    movie_student_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_student"
    },
    movie_user_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_user"
    },
}, {collection: 'tb_enrollment'});

module.exports = mongoose.model("tb_enrollment", tb_enrollment);
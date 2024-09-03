const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tb_attendance = new Schema({
    Status: {
        type: Boolean        
    },
    Date: {
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
    movie_class_id: {
        type: Schema.Types.ObjectId,
        ref: "tb_class"
    },
    movie_discipline_id: {
        type: Schema.Types.ObjectId,
        ref: "tb_discipline"
    },
}, {collection: 'tb_attendance'});

module.exports = mongoose.model("tb_attendance", tb_attendance);
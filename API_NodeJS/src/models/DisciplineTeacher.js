const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tb_discipline_teacher = new Schema({
    movie_user_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_user"
    },
    movie_teacher_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_teacher"
    },
    movie_discipline_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_discipline"
    },
}, {collection: 'tb_discipline_teacher'});

module.exports = mongoose.model("tb_discipline_teacher", tb_discipline_teacher);
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tb_studentCard = new Schema({
    
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
    movie_enrollment_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_enrollment"
    },
}, {collection: 'tb_studentCard'});

module.exports = mongoose.model("tb_studentCard", tb_studentCard);
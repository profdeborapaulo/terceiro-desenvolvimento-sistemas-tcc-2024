const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tb_student = new Schema({
    dposition:{
        type: Number
    },
    movie_user_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_user"
    },
}, {collection: 'tb_student'});

module.exports = mongoose.model("tb_student", tb_student);


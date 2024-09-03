const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tb_teacher = new Schema({
    movie_user_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_user"
    }
}, {collection: 'tb_teacher'});

module.exports = mongoose.model("tb_teacher", tb_teacher);
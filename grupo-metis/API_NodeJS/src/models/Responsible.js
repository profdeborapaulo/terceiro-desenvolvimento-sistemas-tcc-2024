const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tb_responsible = new Schema({
    movie_user_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_user"
    },
    
}, {collection: 'tb_responsible'});

module.exports = mongoose.model("tb_responsible", tb_responsible);
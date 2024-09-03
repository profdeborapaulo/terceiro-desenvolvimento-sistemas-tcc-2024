const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tb_manager = new Schema({
    movie_user_id: {
        type: Schema.Types.ObjectId,        
        ref: "tb_user"
    },
}, {collection: 'tb_manager'});

module.exports = mongoose.model("tb_manager", tb_manager);
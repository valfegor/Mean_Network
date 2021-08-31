const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    author:String,
    text:String,
    estade:String,
    user_id:{ type: mongoose.Schema.ObjectId, ref: "user" },
    date: { type: Date, default: Date.now },
    Status: Boolean,

});


const post = mongoose.model('post',postSchema);

module.exports = post;
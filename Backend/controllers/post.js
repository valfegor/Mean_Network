const Post = require('../models/post');
const user = require('../models/user');
const mongoose = require('mongoose');

const registerPost = async (req, res) => {
    if(!req.body.text || !req.body.title) res.status(400).send('Sorry check all the camps please');

    const post = new Post({
        title: req.body.title,
        author:req.user.name,
        text: req.body.text,
        estade:"happy",
        user_id:req.user._id,
        status: true
    });

    let result = await post.save();

    if(!result) return res.status(400).send("Sorry Cant save the post");

    return res.status(200).send({post});

}

const listPost=async (req, res) => {
    
    const post = await Post.find({user:req.user._id})

    if(!post) return res.status(400).send("Sorry no post");

    return res.status(200).send({post});
}

const updatePost = async (req, res)=> {
    let validId = mongoose.Types.ObjectId.isValid(req.body._id);
    if (!validId) return res.status(400).send("Invalid id");

    if(!req.body._id || !req.body.estade) return res.status(400).send("Sorry Please check all the camps please");

    let post = await Post.findByIdAndUpdate(req.body._id,{
        user_id:req.user._id,
        estade: req.body.estade,
    })
    
    if(!post) return res.status(400).send("Sorry no post");

    return res.status(200).send({post});
}

const deletePost = async (req, res)=> {
    console.log(req.body._id)
    let validId = mongoose.Types.ObjectId.isValid(req.user._id);
   
    if (!validId) return res.status(400).send("Invalid id");

    const post = await Post.findByIdAndDelete(req.params._id);

    if(!post) return res.status(400).send('Sorry no post');

    return res.status(200).send({message: 'Post deleted'});

}
module.exports = {registerPost,listPost,updatePost,deletePost};
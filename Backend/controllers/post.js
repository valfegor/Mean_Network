const Post = require('../models/post');

const registerPost = async (req, res) => {
    if(!req.body.text || !req.body.estade) res.status(400).send('Sorry check all the camps please');

    const post = new Post({
        author:req.user.name,
        text: req.body.text,
        estade: req.body.estade,
        user_id:req.user._id,
        status: true
    });

    let result = await post.save();

    if(!result) return res.status(400).send("Sorry Cant save the post");

    return res.status(200).send({post});

}


module.exports = {registerPost}
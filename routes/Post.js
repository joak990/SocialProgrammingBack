const express = require('express');
const PostRouter = express.Router();
const createpost = require("../controllers/createpost");
const getAllPosts = require('../controllers/getallpost');
const likePost = require('../controllers/likepost');

PostRouter.post("/post", async (req,res) => {
    try {
        const { author, content } = req.body;
       const newpost = await createpost(author,content)
    
    res.status(200).json(newpost)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

PostRouter.get("/getpost", async (req,res) => {
    try {
       
       const getallposts = await getAllPosts()
    
    res.status(200).json(getallposts)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


PostRouter.post("/like", async (req,res) => {
    try {
       const {postId, userId}= req.body
       const postlike = await likePost(postId, userId)
    
    res.status(200).json(postlike)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports =  PostRouter;
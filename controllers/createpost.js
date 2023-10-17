
const Post = require("../models/post");

const createpost = async (author,content) => {
    try {
        const newPost = new Post({ author, content });
const savedpost = await newPost.save()
return savedpost
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
}


module.exports=createpost
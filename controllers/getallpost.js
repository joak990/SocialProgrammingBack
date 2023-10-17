const Post = require("../models/post");

const getAllPosts = async () => {
    try {
        const posts = await Post.find().populate({
            path: 'author',
            select: 'name', // Obtén solo el nombre del autor de la publicación
        }).populate({
            path: 'likes',
            select: 'name', // Obtén solo el nombre de los usuarios que dieron "like"
        });
           if(!posts){
return false
           }
return posts
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
}


module.exports=getAllPosts
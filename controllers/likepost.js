const Post = require("../models/post");

const likePost = async (postId, userId) => {
    try {
        const post = await Post.findById(postId);
        if (!post) {
            throw new Error('Publicación no encontrada');
        }

        if (post.likes.includes(userId)) {
           
            return post;
        }

        post.likes.push(userId);
        const updatedPost = await post.save();
        return updatedPost;
    } catch (error) {
        console.error('Error al dar "like" a la publicación:', error);
        throw error;
    }
}

module.exports = likePost;

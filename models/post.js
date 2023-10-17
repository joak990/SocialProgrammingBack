const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Referencia al usuario
    content: String,
    date: { type: Date, default: Date.now },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Referencia a los usuarios que dieron "me gusta"
    comments: [
      {
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Referencia al usuario que comentó
        content: String,
        date: { type: Date, default: Date.now },
      },
    ],
  });

  module.exports = mongoose.model("Post", postSchema);

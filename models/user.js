const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true
    },
    uid:{
        type:String,
        required:false
    },
    otp:{
        type:Number,
        required:false
    },
    root:{
        type:String,
        required:true
    }
})
  module.exports= mongoose.model("User",userSchema)
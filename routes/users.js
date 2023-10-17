const express = require('express');
const UsersRouter = express.Router();
const User = require("../models/user");
const createuser = require('../controllers/users');

UsersRouter.post("/users", async (req,res) => {
    try {
       const {name,password,age,email,uid}  = req.body
       
       const data= "data"
  
       const newuser = await createuser(name,password,email,age,uid)
    res.status(200).json(newuser)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

UsersRouter.get("/userss", async (req,res) => {
    try {
      
    res.status(200).json("holaaaa")
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports =  UsersRouter;
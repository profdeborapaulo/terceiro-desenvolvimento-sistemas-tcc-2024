const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const tb_administrator = require ("../models/Administrator");
const tb_user = require("../models/User")
module.exports = {
    async readAll(req, res) {
        const findResult = await tb_administrator.find();
   
        return res.json(findResult);     
    }, 
    async readOne(req, res){
        const id  = req.params.id;
        
        const Result = await tb_administrator.findById(id);
        const UserResult = await tb_user.findById(Result.movie_user_id);
        console.log(Result);
        return res.json(UserResult);
    },
    async create(req, res){
        const movie_user_id = req.body;
        try {
            await tb_administrator.create(movie_user_id);
            console.log("Administrador criado com sucesso");
            res.status(201).json(Administrator);
        }
        catch (error){
            res.status(500).json({error: error});
        }
    },
    async delete(req, res){
        const id  = req.params.delete;
        const Administrator = await tb_administrator.findById(id);
        if(id){
            try{
                const User = await tb_user.findByIdAndDelete(Administrator.movie_user_id);
            const Result =    await tb_administrator.deleteOne({_id: id});
            console.log("Administrador deletado!" + Result);
            return res.json(User);
            } catch (error) {
                return res.status(400).json({msg: "Você deve passar um id válido"});
                
            }
        } else {
            return res.status(400).json({msg: "Você deve passar um id"});
        }
    }
};

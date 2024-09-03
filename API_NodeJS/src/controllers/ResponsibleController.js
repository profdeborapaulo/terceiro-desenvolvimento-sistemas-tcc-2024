const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const tb_responsible = require ("../models/Responsible");
const tb_user = require ("../models/User")
module.exports = {
    async readAll(req, res) {
        const findResult = await tb_responsible.find();
   
        return res.json(findResult);     
    }, 
    async readOne(req, res){
        const id  = req.params.id;
        
        const Result = await tb_responsible.findById(id);
        const id_User = Result.movie_user_id
        const ResponsibleUser = await tb_user.findById(id_User);
        console.log(Result);
        return res.json(ResponsibleUser);
    },
    async create(req, res){
        const movie_user_id = req.body;
        try {
            await tb_responsible.create(movie_user_id);
            console.log("Professor criado com sucesso");
            res.status(201).json(Responsible);
        }
        catch (error){
            res.status(500).json({error: error});
        }
    },
    async delete(req, res){
        const id  = req.params.delete;
        const Responsible = await tb_student.findById(id);

        if(id){
            try{
                const User = await tb_user.findByIdAndDelete(Responsible.movie_user_id);
            const Result =    await tb_responsible.deleteOne({_id: id});
            console.log("Professor deletado!" + Result);
            
            return res.json(User);
            } catch (error) {
                return res.status(400).json({msg: "Você deve passar um id válido"});
                
            }
        } else {
            return res.status(400).json({msg: "Você deve passar um id"});
        }
    }
};

const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const tb_user = require ("../models/User");

module.exports = {
    async readAll(req, res) {
        const findResult = await tb_user.find();
   
        return res.json(findResult);     
    }, 
    async readOne(req, res){
        const id  = req.params.id;
        
        const Result = await tb_user.findById(id);

        return res.json(Result);
    },
    async create(req, res){
        const {NAME,BDATE, PHONE, EMAIL, CPF, RG, PASSWORD} = req.body;
        
        const User = {
            NAME, 
            BDATE, 
            PHONE, 
            EMAIL, 
            CPF, 
            RG, 
            PASSWORD
        };

        try {
            await tb_user.create(User);
            console.log("Usuário criado com sucesso");
            res.status(201).json(User);
        }
        catch (error){
            res.status(500).json({error: error});
        }
    },
    async delete(req, res){
        const id  = req.params.delete;
        if(id){
            try{
             
            const Result =    await tb_user.deleteOne({_id: id});
            console.log("Usuário deletado!");
            return res.json(Result);
            } catch (error) {
                return res.status(400).json({msg: "Você deve passar um id válido"});
                
            }
        } else {
            return res.status(400).json({msg: "Você deve passar um id"});
        }
    }
};
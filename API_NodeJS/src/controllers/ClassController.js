const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const tb_class = require ("../models/Class");

module.exports = {
    async readAll(req, res) {
        const findResult = await tb_class.find();
   
        return res.json(findResult);     
    }, 
    async readOne(req, res){
        const id  = req.params.id;
        console.log(id);
        const Result = await tb_class.findOne({_id: id});

        return res.json(Result);
    },
    async create(req, res){
        const {name, grade, period} = req.body;
        
        const NewClass = {
            name, 
            grade,
            period
                };

        try {
            await tb_class.create(NewClass);
            console.log("Nova classe adicionada com sucesso");
            res.status(201).json(NewClass);
        }
        catch (error){
            res.status(500).json({error: error});
        }
    },
    async delete(req, res){
        const id  = req.params.delete;
        
        if(id){
            try{
            const Result =    await tb_class.deleteOne({_id: id});
            console.log("Endereço deletado!");
            return res.json(Result);
            } catch (error) {
                return res.status(400).json({msg: "Você deve passar um id válido"});
                
            }
        } else {
            return res.status(400).json({msg: "Você deve passar um id"});
        }
    }
};
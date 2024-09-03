const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const tb_discipline = require ("../models/Discipline");

module.exports = {
    async readAll(req, res) {
        const findResult = await tb_discipline.find();
   
        return res.json(findResult);     
    }, 
    async readOne(req, res){
        const id  = req.params.id;
        
        const Result = await tb_discipline.findById(id);

        return res.json(Result);
    },
    async create(req, res){
        const name = req.body;
        
        try {
            const DisciplineCreated = await tb_discipline.create(name);
            console.log("Disciplina criada com sucesso");
            res.status(201).json(DisciplineCreated);
        }
        catch (error){
            res.status(500).json({error: error});
        }
    },
    async delete(req, res){
        const id  = req.params.delete;
        if(id){
            try{
            const Result =    await tb_discipline.deleteOne({_id: id});
            console.log("Disciplina deletada!");
            return res.json(Result);
            } catch (error) {
                return res.status(400).json({msg: "Você deve passar um id válido"});
                
            }
        } else {
            return res.status(400).json({msg: "Você deve passar um id"});
        }
    }
};
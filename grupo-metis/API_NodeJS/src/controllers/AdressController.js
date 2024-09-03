const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const tb_adress = require ("../models/Adress");

module.exports = {
    async readAll(req, res) {
        const findResult = await tb_adress.find();
   
        return res.json(findResult);     
    }, 
    async readOne(req, res){
        const id  = req.params.id;
        console.log(id);
        const Result = await tb_adress.findOne({_id: id});

        return res.json(Result);
    },
    async create(req, res){
        const {type, street, number, complement, city, uf, cep, neighborhood} = req.body;
        
        const Adress = {
            type, 
            street,
            number,
            complement,
            city,
            uf,
            cep,
            neighborhood
        };

        try {
            await tb_adress.create(Adress);
            console.log("Novo endereço adicionado com sucesso");
            res.status(201).json(Adress);
        }
        catch (error){
            res.status(500).json({error: error});
        }
    },
    async delete(req, res){
        const id  = req.params.delete;
        
        if(id){
            try{
            const Result =    await tb_adress.deleteOne({_id: id});
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
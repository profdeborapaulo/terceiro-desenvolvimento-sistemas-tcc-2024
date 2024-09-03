const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const tb_disciplineClass = require("../models/DisciplineClass")
const tb_class = require ("../models/Class")
const tb_discipline = require ("../models/Discipline")
module.exports = {
    async readAll(req, res) {
        const findResult = await tb_disciplineClass.find();
   
        return res.json(findResult);     
    }, 
    async readOne(req, res){
        const id  = req.params.id;
        
        const Result = await tb_disciplineClass.findById(id);
        const id_Class = Result.movie_class_id;
        const id_Discipline = Result.movie_discipline_id;

        const Class = await tb_class.findById(id_Class);
        const Discipline = await tb_discipline.findById(id_Discipline);
        
        console.log(Class);
        console.log(Discipline);
        return res.json(Result);
    },
    async create(req, res){
        const {movie_discipline_id, movie_class_id} = req.body;
        const NewDisciplineClass = {
            movie_discipline_id, 
            movie_class_id
        }
        try {
            await tb_disciplineClass.create(NewDisciplineClass);
            console.log("Classe na disciplina criada com sucesso");
            res.status(201).json(NewDisciplineClass);
        }
        catch (error){
            res.status(500).json({error: error});
        }
    },
    async delete(req, res){
        const id  = req.params.delete;
        const DisciplineClass = await tb_disciplineClass.findById(id);

        if(id){
            try{
            const Result = await tb_disciplineClass.deleteOne({_id: id});
            console.log("Classe na disciplina deletada!" + Result);
            
            return res.json(DisciplineClass);
            } catch (error) {
                return res.status(400).json({msg: "Você deve passar um id válido"});
                
            }
        } else {
            return res.status(400).json({msg: "Você deve passar um id"});
        }
    }
};

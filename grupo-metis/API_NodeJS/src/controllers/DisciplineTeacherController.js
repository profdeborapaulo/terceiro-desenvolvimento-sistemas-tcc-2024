const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const tb_disciplineTeacher = require("../models/DisciplineTeacher")
const tb_teacher = require ("../models/Teacher")
const tb_discipline = require ("../models/Discipline")
const tb_user = require ("../models/User")
module.exports = {
    async readAll(req, res) {
        const findResult = await tb_disciplineTeacher.find();
   
        return res.json(findResult);     
    }, 
    async readOne(req, res){
        const id  = req.params.id;
        
        const Result = await tb_disciplineTeacher.findById(id);
        const id_Class = Result.movie_class_id;
        const id_Discipline = Result.movie_discipline_id;
        const id_User = Result.movie_user_id;

        const Class = await tb_teacher.findById(id_Class);
        const Discipline = await tb_discipline.findById(id_Discipline);
        const User = await tb_user.findById(id_User);
        
        console.log(Class);
        console.log(Discipline);
        console.log(User);
        return res.json(Result);
    },
    async create(req, res){
        const {movie_user_id, movie_teacher_id, movie_discipline_id } = req.body;
        const NewDisciplineTeacher = {
            movie_user_id,
            movie_teacher_id,
            movie_discipline_id 
        }
        try {
            await tb_disciplineTeacher.create(NewDisciplineClass);
            console.log("Professor adicionado na disciplina com sucesso");
            res.status(201).json(NewDisciplineClass);
        }
        catch (error){
            res.status(500).json({error: error});
        }
    },
    async delete(req, res){
        const id  = req.params.delete;
        const DisciplineTeacher = await tb_disciplineTeacher.findById(id);

        if(id){
            try{
            const Result = await tb_disciplineTeacher.deleteOne({_id: id});
            console.log("Professor deletado da disciplina!" + Result);
            
            return res.json(DisciplineTeacher);
            } catch (error) {
                return res.status(400).json({msg: "Você deve passar um id válido"});
                
            }
        } else {
            return res.status(400).json({msg: "Você deve passar um id"});
        }
    }
};

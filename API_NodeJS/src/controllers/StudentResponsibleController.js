const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const tb_student_responsible = require("../models/StudentResponsible");
const tb_user = require ("../models/User")
const tb_student = require ("../models/Student")
const tb_responsible = require ("../models/Responsible")
const tb_adress = require ("../models/Adress")
module.exports = {
    async readAll(req, res) {
        const findResult = await tb_student_responsible.find();
   
        return res.json(findResult);     
    }, 
    async readOne(req, res){
        const id  = req.params.id;
        
        const Result = await tb_student_responsible.findById(id);
        const id_User = Result.movie_user_id;
        const id_Student = Result.movie_student_id;
        const id_Responsible = Result.movie_responsible_id;
        const id_Adress = Result.movie_adress_id;

        const User = await tb_user.findById(id_User);
        const Student = await tb_student.findById(id_Student);
        const Responsible = await tb_responsible.findById(id_Responsible);
        const Adress = await tb_adress.findById(id_Adress);
        
        console.log(User);
        console.log(Student);
        console.log(Responsible);
        console.log(Adress);
        return res.json(Result);
    },
    async create(req, res){
        const {
            relationship, 
            movie_user_id,
            movie_student_id, 
            movie_responsible_id, 
            movie_adress_id} = req.body;

        const NewStudentResponsible = {
            relationship, 
            movie_user_id,
            movie_student_id, 
            movie_responsible_id, 
            movie_adress_id
        }
        try {
            await tb_student_responsible.create(NewStudentResponsible);
            console.log("Novo Responsável pelo aluno criado com sucesso");
            res.status(201).json(NewStudentResponsible);
        }
        catch (error){
            res.status(500).json({error: error});
        }
    },
    async delete(req, res){
        const id  = req.params.delete;
        const StudentResponsible = await tb_student_responsible.findById(id);

        if(id){
            try{
            const Result = await tb_student_responsible.deleteOne({_id: id});
            console.log("Responsável pelo estudante deletado!" + Result);
            
            return res.json(StudentResponsible);
            } catch (error) {
                return res.status(400).json({msg: "Você deve passar um id válido"});
                
            }
        } else {
            return res.status(400).json({msg: "Você deve passar um id"});
        }
    }
};

const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const tb_student_card = require("../models/StudentCard");
const tb_user = require ("../models/User")
const tb_student = require ("../models/Student")
const tb_class = require ("../models/Class")
const tb_enrollment = require ("../models/Enrollment")
module.exports = {
    async readAll(req, res) {
        const findResult = await tb_student_card.find();
   
        return res.json(findResult);     
    }, 
    async readOne(req, res){
        const id  = req.params.id;
        
        const Result = await tb_student_card.findById(id);
        const id_User = Result.movie_user_id;
        const id_Student = Result.movie_student_id;
        const id_Class = Result.movie_class_id;
        const id_Enrollment = Result.movie_enrollment_id;

        const User = await tb_user.findById(id_User);
        const Student = await tb_student.findById(id_Student);
        const Class = await tb_class.findById(id_Class);
        const Enrollment = await tb_enrollment.findById(id_Enrollment);
        console.log(User);
        console.log(Student);
        console.log(Class);
        console.log(Enrollment);
        return res.json(Result);
    },
    async create(req, res){
        const { 
            movie_user_id,
            movie_student_id, 
            movie_class_id, 
            movie_enrollment_id} = req.body;

        const NewStudentCard = {
            movie_user_id,
            movie_student_id, 
            movie_class_id, 
            movie_enrollment_id
        }
        try {
            await tb_student_card.create(NewStudentCard);
            console.log("Novo Cartão de estudante criado com sucesso");
            res.status(201).json(NewStudentCard);
        }
        catch (error){
            res.status(500).json({error: error});
        }
    },
    async delete(req, res){
        const id  = req.params.delete;
        const StudentCard = await tb_student_card.findById(id);

        if(id){
            try{
            const Result = await tb_student_card.deleteOne({_id: id});
            console.log("Cartão do estudante deletado!" + Result);
            
            return res.json(StudentCard);
            } catch (error) {
                return res.status(400).json({msg: "Você deve passar um id válido"});
                
            }
        } else {
            return res.status(400).json({msg: "Você deve passar um id"});
        }
    }
};

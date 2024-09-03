const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const tb_enrollment = require("../models/frequency")
const tb_user = require ("../models/User")
const tb_student = require ("../models/Student")
const tb_class = require ("../models/Class")
module.exports = {
    async readAll(req, res) {
        const findResult = await tb_enrollment.find();
   
        return res.json(findResult);     
    }, 
    async readOne(req, res){
        const id  = req.params.id;
        
        const Result = await tb_enrollment.findById(id);
        const id_User = Result.movie_user_id;
        const id_Student = Result.movie_student_id;
        const id_Class = Result.movie_class_id;

        const EnrollmentUser = await tb_user.findById(id_User);
        const EnrollmentStudent = await tb_student.findById(id_Student);
        const EnrollmentClass = await tb_class.findById(id_Class);
        
        console.log(EnrollmentUser);
        console.log(EnrollmentStudent);
        console.log(EnrollmentClass);
        return res.json(Result);
    },
    async create(req, res){
        const {record, 
            createDat, 
            status,
            movie_class_id, 
            movie_student_id, 
            movie_user_id} = req.body;

        const NewEnrollment = {
            record,
            createDat,
            status,
            movie_class_id,
            movie_student_id,
            movie_user_id
        }
        try {
            await tb_enrollment.create(NewEnrollment);
            console.log("Nova matrícula criada com sucesso");
            res.status(201).json(NewEnrollment);
        }
        catch (error){
            res.status(500).json({error: error});
        }
    },
    async delete(req, res){
        const id  = req.params.delete;
        const Enrollment = await tb_enrollment.findById(id);

        if(id){
            try{
            const Result = await tb_enrollment.deleteOne({_id: id});
            console.log("Matrícula deletado!" + Result);
            
            return res.json(Enrollment);
            } catch (error) {
                return res.status(400).json({msg: "Você deve passar um id válido"});
                
            }
        } else {
            return res.status(400).json({msg: "Você deve passar um id"});
        }
    }
};

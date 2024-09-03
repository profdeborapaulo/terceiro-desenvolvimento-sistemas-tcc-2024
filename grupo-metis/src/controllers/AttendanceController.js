const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const tb_user = require ("../models/User")
const tb_student = require ("../models/Student")
const tb_class = require("../models/Class");
const tb_discipline = require("../models/Discipline");
const tb_attendance = require("../models/Attendance");

module.exports = {
    async readAll(req, res) {
        const findResult = await tb_attendance.find();
   
        return res.json(findResult);     
    }, 
    async readOne(req, res){
        const id  = req.params.id;
        
        const Result = await tb_attendance.findById(id);
        const id_User = Result.movie_user_id;
        const id_Student = Result.movie_student_id;
        const id_class = Result.movie_class_id;
        const id_discipline = Result.movie_discipline_id;


        const AttendanceUser = await tb_user.findById(id_User);
        const AttendanceStudent = await tb_student.findById(id_Student);
        const AttendanceClass = await tb_class.findById(id_class);
        const AttendanceDiscipline = await tb_discipline.findById(id_discipline);
        
        console.log(AttendanceUser);
        console.log(AttendanceStudent);
        console.log(AttendanceClass);
        console.log(AttendanceDiscipline);
        return res.json(Result);
    },
    async create(req, res){
        const {Status, Date, movie_user_id, movie_student_id, movie_class_id, movie_discipline_id} = req.body;
        const NewAttendance = {
            Status,
            Date,
            movie_user_id,
            movie_student_id,
            movie_class_id, 
            movie_discipline_id
        }
        try {
            await tb_attendance.create(NewAttendance);
            console.log("Presença adicionada com sucesso");
            res.status(201).json(NewAttendance);
        }
        catch (error){
            res.status(500).json({error: error});
        }
    },
    async delete(req, res){
        const id  = req.params.delete;
        const Attendance = await tb_attendance.findById(id);

        if(id){
            try{
            const Result = await tb_attendance.deleteOne({_id: id});
            console.log("Presença deletada!" + Result);
            
            return res.json(Attendance);
            } catch (error) {
                return res.status(400).json({msg: "Você deve passar um id válido"});
                
            }
        } else {
            return res.status(400).json({msg: "Você deve passar um id"});
        }
    }
};

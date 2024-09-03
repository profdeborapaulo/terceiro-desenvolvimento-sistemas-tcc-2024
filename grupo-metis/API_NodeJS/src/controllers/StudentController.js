
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const tb_student = require ("../models/Student");
const tb_user = require("../models/User");
module.exports = {
    async readAll(req, res) {
        const findResult = await tb_student.find();
   
        return res.json(findResult);     
    }, 
    async readOne(req, res){
        const id  = req.params.id;
        
        const Result = await tb_student.findById(id);
        const id_User = Result.movie_user_id
        const studentUser = await tb_user.findById(id_User);
        console.log(Result);
        return res.json(studentUser);
    },
    async create(req, res){
        const {dposition, movie_user_id} = req.body;
        
        const Student = {
            dposition,
            movie_user_id
        };

        try {
            await tb_student.create(Student);
            console.log("Estudante criado com sucesso");
            res.status(201).json(Student);
        }
        catch (error){
            res.status(500).json({error: error});
        }
    },
    async delete(req, res){
        const id  = req.params.delete;
        const Student = await tb_student.findById(id);

        if(id){
            try{
            const User = await tb_user.findByIdAndDelete(Student.movie_user_id);
            const Result = await tb_student.deleteOne({_id: id});
            console.log("Estudante deletado!" + Result);
            return res.json(User);
            } catch (error) {
                return res.status(400).json({msg: "Você deve passar um id válido"});
                
            }
        } else {
            return res.status(400).json({msg: "Você deve passar um id"});
        }
    }
};
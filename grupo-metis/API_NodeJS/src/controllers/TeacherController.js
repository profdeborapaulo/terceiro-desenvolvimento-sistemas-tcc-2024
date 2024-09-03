const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const tb_teacher = require ("../models/Teacher");
const tb_user = require ("../models/User")
module.exports = {
    async readAll(req, res) {
        const findResult = await tb_teacher.find();
   
        return res.json(findResult);     
    }, 
    async readOne(req, res){
        const id  = req.params.id;
        
        const Result = await tb_teacher.findById(id);
        const id_User = Result.movie_user_id
        const TeacherUser = await tb_user.findById(id_User);
        console.log(Result);
        return res.json(TeacherUser);
    },
    async create(req, res){
        const movie_user_id = req.body;
        try {
            await tb_teacher.create(movie_user_id);
            console.log("Professor criado com sucesso");
            res.status(201).json(Teacher);
        }
        catch (error){
            res.status(500).json({error: error});
        }
    },
    async delete(req, res){
        const id  = req.params.delete;
        const Teacher = await tb_student.findById(id);

        if(id){
            try{
                const User = await tb_user.findByIdAndDelete(Teacher.movie_user_id);
            const Result =    await tb_teacher.deleteOne({_id: id});
            console.log("Professor deletado!" + Result);
            
            return res.json(User);
            } catch (error) {
                return res.status(400).json({msg: "Você deve passar um id válido"});
                
            }
        } else {
            return res.status(400).json({msg: "Você deve passar um id"});
        }
    }
};

const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const tb_frequency = require("../models/frequency")
const tb_user = require ("../models/User")
const tb_student = require ("../models/Student")
module.exports = {
    async readAll(req, res) {
        const findResult = await tb_frequency.find();
   
        return res.json(findResult);     
    }, 
    async readOne(req, res){
        const id  = req.params.id;
        
        const Result = await tb_frequency.findById(id);
        const id_User = Result.movie_user_id;
        const id_Student = Result.movie_student_id;

        const FrequencyUser = await tb_user.findById(id_User);
        const FrequencyStudent = await tb_student.findById(id_Student);
        
        console.log(FrequencyUser);
        console.log(FrequencyStudent);
        return res.json(Result);
    },
    async create(req, res){
        const {Entry, Date, Exit, Stay, movie_student_id, movie_user_id} = req.body;
        const NewFrequency = {
            Entry,
            Date,
            Exit,
            Stay,
            movie_student_id,
            movie_user_id
        }
        try {
            await tb_frequency.create(NewFrequency);
            console.log("Frequência criado com sucesso");
            res.status(201).json(NewFrequency);
        }
        catch (error){
            res.status(500).json({error: error});
        }
    },
    async delete(req, res){
        const id  = req.params.delete;
        const Frequency = await tb_frequency.findById(id);

        if(id){
            try{
            const Result = await tb_frequency.deleteOne({_id: id});
            console.log("Frequência deletada!" + Result);
            
            return res.json(User);
            } catch (error) {
                return res.status(400).json({msg: "Você deve passar um id válido"});
                
            }
        } else {
            return res.status(400).json({msg: "Você deve passar um id"});
        }
    }
};

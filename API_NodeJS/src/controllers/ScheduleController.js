const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const tb_schedule = require("../models/Schedule")
const tb_class = require ("../models/Class")
const tb_discipline = require ("../models/Discipline")
module.exports = {
    async readAll(req, res) {
        const findResult = await tb_schedule.find();
   
        return res.json(findResult);     
    }, 
    async readOne(req, res){
        const id  = req.params.id;
        
        const Result = await tb_schedule.findById(id);
        const id_Class = Result.movie_class_id;
        const id_Discipline = Result.movie_discipline_id;

        const ScheduleClass = await tb_class.findById(id_Class);
        const ScheduleDiscipline = await tb_discipline.findById(id_Discipline);
        
        console.log(ScheduleUser);
        console.log(ScheduleDiscipline);
        return res.json(Result);
    },
    async create(req, res){
        const {weekday, time, movie_class_id, movie_discipline_id} = req.body;
        const NewSchedule = {
            weekday,
             time, 
             movie_class_id,
             movie_discipline_id,
        }
        try {
            await tb_schedule.create(NewSchedule);
            console.log("Grade de horário criada com sucesso");
            res.status(201).json(NewSchedule);
        }
        catch (error){
            res.status(500).json({error: error});
        }
    },
    async delete(req, res){
        const id  = req.params.delete;
        const Schedule = await tb_schedule.findById(id);

        if(id){
            try{
            const Result = await tb_schedule.deleteOne({_id: id});
            console.log("Grade de horário deletada!" + Result);
            
            return res.json(Schedule);
            } catch (error) {
                return res.status(400).json({msg: "Você deve passar um id válido"});
                
            }
        } else {
            return res.status(400).json({msg: "Você deve passar um id"});
        }
    }
};

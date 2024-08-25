// const express = require('express')
import express from 'express'
// const mongoose = require('mongoose')
import mongoose from 'mongoose'
// const bodyParser = require('body-parser')
import bodyParser from 'body-parser'
const app = express();
// const EmployeeModel = require('./employee')
import EmployeeModel from './employee.js'
// const cors = require('cors');
import cors from 'cors'
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/API")

app.get('/', (req, res)=>{
    res.send('hello from server');
})
//data send from client to server
app.post('/create', async(req, res)=>{
    try {
        const data = new EmployeeModel(req.body);
        await data.save();
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        
    }
})

app.get('/list', async(req, res)=>{
    const data = await EmployeeModel.find();
    res.send(data);
})

app.get('/list/:id', async(req, res)=>{
    try {
        const data = await EmployeeModel.findById(req.params.id);
        res.send(data)
    } catch (error) {
        console.log(error);
        
    }
    
})

app.delete('/delete/:id', async(req, res)=>{
    try {
        const del = await EmployeeModel.findByIdAndDelete(req.params.id);
        res.send("data is deleted");
    } catch (error) {
        console.log(error);
        
    }
})

app.put('/list/:id', async(req, res)=>{
    try {
        const upd = await EmployeeModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.send(upd);
    } catch (error) {
        console.log(error);
        
    }
})

app.listen(3000, ()=>{
    console.log('server is listening...');
    
})
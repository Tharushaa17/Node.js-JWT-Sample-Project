import express from 'express';
import mongoose from 'mongoose';
const url = 'mongodb://TestParkingdb'
// import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();

// const mongoose = require('mongoose')
const PORT = 5000;

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () =>{
    console.log('conneted');
})

// app.use(bodyParser.json());

app.use('/users', usersRoutes);
 

app.listen(9000, () =>{
    console.log('server started');
})
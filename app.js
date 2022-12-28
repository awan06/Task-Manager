// console.log('Task Manager App')
// require('dotenv').config();

const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

const path = require('path');
require('dotenv').config({
    path: path.resolve('config.env'),
});


// const Task = require('./models/tasks');


// Middleware
app.use(express.static('./public'));
app.use(express.json());

// Routing 
app.use('/api/v1/tasks', tasks);

// Server 

port = 5000;
const start = async () => {
    try {
        await connectDB(process.env.DATABASE);
        app.listen(port, () => {
            console.log('Listening on port ' + port);
        });
    } catch (err) {
        console.log(err);
    }
}

start();

// console.log(process.env.DATABASE);


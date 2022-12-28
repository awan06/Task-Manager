const express = require('express');
const tasks = express.Router();

const { getAllTasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/taskController')

tasks.route('/')
    .get(getAllTasks)
    .post(createTask);

tasks.route('/:id')
    .get(getTask)
    .delete(deleteTask)
    .patch(updateTask);

module.exports = tasks;    
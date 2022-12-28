const Task = require('../models/tasks');




const getAllTasks = async (req, res) => {
    // res.send(" get all items done");

    // const Tasks = await Task.find();
    // res.status(200).json(Tasks);

    try {
        const tasks = await Task.find();
        // res.status(200).json({
        //     status: "success",
        //     data: {
        //         size: tasks.length,
        //         tasks
        //     }
        // });
        res.status(200).json({ tasks });
    } catch (err) {
        res.status(404).json({
            status: "error",
            message: err.message
        });
    }
};

const createTask = async (req, res) => {
    // res.send(" create all items done");
    console.log(req.body);
    try {
        const Tasks = await Task.create(req.body);
        res.status(201).json({
            status: 'success',
            data: Tasks,
        });
        // res.status(201).json({ Tasks });
    } catch (err) {
        res.status(404).json({
            status: 'error',
            message: "Couldn't create task"
        });
    }

};

const getTask = async (req, res) => {
    // res.send(" get all items done");
    // console.log(req.params);
    try {
        const task = await Task.findById({ _id: req.params.id });
        if (!task) {
            return res.status(404).json({ message: "Task not found with the id " + req.params.id });
        }
        // res.status(200).json({
        //     status: 'success',
        //     data: task,
        // });
        res.status(200).json({ task })
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message
        });
    }
};

const updateTask = async (req, res) => {
    // res.send("update all items done");
    // console.log(req.params);

    try {
        const task = await Task.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true
        });
        if (!task) {
            return res.status(404).json({ message: "Task not found with the id " + req.params.id });
        }
        // res.status(200).json({
        //     status: 'success',
        //     data: task,
        // });
        res.status(200).json({ task });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message
        });
    };
}
const deleteTask = async (req, res) => {
    // res.send("all items done");
    // console.log(req.params);

    try {
        const task = await Task.findByIdAndDelete({ _id: req.params.id });
        if (!task) {
            return res.status(404).json({
                message: "Task not found with the id " + req.params.id
            });
        };
        res.status(200).json({
            status: 'success'
        });
    } catch (err) {
        res.status(404).json({
            status: 'error',
            message: "Couldn't delete task"
        });
    }
};


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask,
};
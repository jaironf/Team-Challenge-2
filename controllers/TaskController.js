const Task = require('../models/Task');
require('dotenv').config();
const {JWT_SECRET} = process.env;


const TaskController = {
    async create(req, res) {
        try {
          const task = await Task.create(req.body);
          res.status(201).send({ message: "Tarea creada con exito", task });
        } catch (error) {
          console.error(error);
        }
      },
      async getAll(req, res) {
        try {
          const { page = 1, limit = 10 } = req.query;
          const task = await Task.find()
            .limit(limit)
            .skip((page - 1) * limit);
          res.send(task);
        } catch (error) {
          console.error(error);
        }
      },
      async getById(req, res) {
        try {
            const task = await Task.findById(req.params._id)
            res.send(task)
        } catch (error) {
            console.error(error);
        }
    },
}


module.exports = TaskController
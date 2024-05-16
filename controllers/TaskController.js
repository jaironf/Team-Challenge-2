const Task = require('../models/Task');
require('dotenv').config();
const {JWT_SECRET} = process.env;


const TaskController = {
    async create(req, res) {
        try {
          const task = await Task.create(req.body.title);
          res.status(201).send({ message: "Tarea creada con exito", task });
        } catch (error) {
          console.error(error);
        }
      },
}


module.exports = TaskController
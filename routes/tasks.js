const express = require('express');
const TaskController = require('../Controllers/TaskController');
const router = express.Router();

router.post('/', TaskController.create);
router.get('/', TaskController.getAll);
router.get('/id/:_id', TaskController.getById);
router.get('/title/:title', TaskController.getTaskByTitle);
router.put('/id/:_id', TaskController.update);
router.delete('/id/:_id', TaskController.delete);

module.exports = router
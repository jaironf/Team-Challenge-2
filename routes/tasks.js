const express = require('express');
const TaskController = require('../Controllers/TaskController');
const router = express.Router();

router.post('/', TaskController.create);
router.get('/', TaskController.getAll);


module.exports = router
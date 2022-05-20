const express = require('express');
const { addTask } = require('../controllers/task.controller');
const { getAllTasks } = require('../controllers/task.controller');
const { getById } = require('../controllers/task.controller');
const { editTask } = require('../controllers/task.controller');
const { deleteTask } = require('../controllers/task.controller');
const middlewares = require('../middlewares/index');

const router = express.Router();

const validateTask = [
    middlewares.nameValidation,
    middlewares.descValidation,
  ];

router.get('/', getAllTasks);
router.get('/:id', getById);
router.post('/', validateTask, addTask);
router.put('/:id', editTask);
router.delete('/:id', deleteTask);


module.exports = router;
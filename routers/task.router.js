const express = require('express');
const { addTask } = require('../controllers/task.controller');
const { getAllTasks } = require('../controllers/task.controller');
const middlewares = require('../middlewares/index');

const router = express.Router();

const validateTask = [
    middlewares.nameValidation,
    middlewares.descValidation,
  ];

router.get('/', getAllTasks);
router.post('/', validateTask, addTask);

module.exports = router;
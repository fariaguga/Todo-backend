const express = require('express');
const { addTask } = require('../controllers/task.controller');
const middlewares = require('../middlewares/index');

const router = express.Router();

const validateLogin = [
    middlewares.nameValidation,
    middlewares.descValidation,
  ];

router.post('/', validateLogin, addTask);

module.exports = router;
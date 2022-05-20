const { Task } = require('../models/');


const addTask = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newTask = await Task.create({ name, description });

    return res.status(201).json(newTask);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  addTask,
}; 
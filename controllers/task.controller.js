const { Task } = require('../models/');


const getAllTasks = async (_req, res) => {
  try {

    const tasks = await Task.findAll();

    if(tasks.length === 0) {
      res.status(400).json({ message: 'Banco de dados vazio' });
    }

    return res.status(201).json(tasks);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params

    const task = await Task.findByPk( id );

    if(!task) {
      res.status(400).json({ message: 'Tarefa não encontrada' });
    }

    return res.status(201).json(task);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

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

const editTask = async (req, res) => {
  try {
    const { name, description } = req.body;
    const { id } = req.params;


    const [updateTask] = await Task.update(
      { name, description },
      { where: { id } },
    );

    if(!updateTask) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(201).json({ message: `Tarefa ${ id } atualizada com suesso` });

  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.destroy({ where: { id } });
    console.log(deletedTask);

    return res.status(201).json({ message: `Tarefa ${ id } deletada com suesso` });

  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAllTasks,
  getById,
  addTask,
  editTask,
  deleteTask,
}; 
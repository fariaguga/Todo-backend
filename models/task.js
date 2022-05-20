const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
};

module.exports = (sequelize) => {
  const Task = sequelize.define(
    'Task',
    Attributes,
    {
      underscore: true,
      timestamps: false,
      tableName: 'Tasks',
    },
  );
  
  return Task;
};
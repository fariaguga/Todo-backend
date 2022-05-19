module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Tasks',
      [{
        id: 1,
        name: 'Estudar',
        description: 'Lembrar de estudar e comer batata',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
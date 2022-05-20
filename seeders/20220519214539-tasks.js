module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Tasks',
      [{
        id: 1,
        name: 'Estudar',
        description: 'Lembrar de estudar e comer batata',
      },
      {
        id: 2,
        name: 'Tocar',
        description: 'Tirar 3 musicas para o repertorio',
      },
      {
        id: 3,
        name: 'Médico',
        description: 'Endocrino as 3 PM',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
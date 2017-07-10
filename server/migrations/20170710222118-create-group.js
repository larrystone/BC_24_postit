module.exports = {
  up: (queryInterface, Sequelize) => {
    const query = queryInterface.createTable('group', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userid: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    return query;
  },
  down: (queryInterface, Sequelize) => {
    const query = queryInterface.dropTable('groups');
    return query;
  }
};

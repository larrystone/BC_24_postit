'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    var group = queryInterface.createTable('group_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
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

    return group;
  },
  down: function down(queryInterface /* , Sequelize */) {
    var query = queryInterface.dropTable('group_users');
    return query;
  }
};
//# sourceMappingURL=20170711143617-create-group-users.js.map
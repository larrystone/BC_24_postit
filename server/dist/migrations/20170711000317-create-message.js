'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    var query = queryInterface.createTable('messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      priority: {
        type: Sequelize.ENUM,
        values: ['Normal', 'Urgent', 'Critical']
      },
      userid: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
          as: 'userId'
        }
      },
      groupid: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'groups',
          key: 'id',
          as: 'groupId'
        }
      },
      read: {
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
  down: function down(queryInterface /* , Sequelize */) {
    var query = queryInterface.dropTable('messages');

    return query;
  }
};
//# sourceMappingURL=20170711000317-create-message.js.map
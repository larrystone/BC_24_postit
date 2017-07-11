'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    var query = queryInterface.createTable('group_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      groupid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'groups',
          key: 'id'
        }
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
  down: function down(queryInterface /* , Sequelize*/) {
    var query = queryInterface.dropTable('group_users');

    return query;
  }
};
//# sourceMappingURL=20170711170538-create-group-user.js.map
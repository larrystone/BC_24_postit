'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    var query = queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // userid: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'users',
      //     key: 'id',
      //     as: 'userId',
      //   },
      // },
      // admin: {
      //   type: Sequelize.BOOLEAN,
      //   defaultValue: false
      // },
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
    var query = queryInterface.dropTable('groups');
    return query;
  }
};
//# sourceMappingURL=20170710222118-create-group.js.map
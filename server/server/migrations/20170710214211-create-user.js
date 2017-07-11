module.exports = {
  up: (queryInterface, Sequelize) => {
    const query = queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      // password_hasher: {
      //   type: Sequelize.VIRTUAL,
      //   set: (val) => {
      //     this.setDataValue('password_hasher', val);
      //     this.setDataValue('password', this.salt + val);
      //   },
      //   validate: {
      //     isLongEnough: (val) => {
      //       if (val.length < 7) {
      //         throw new Error('Please choose a longer password');
      //       }
      //     }
      //   }
      // },
      phone: {
        type: Sequelize.INTEGER
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
  down: (queryInterface /* , Sequelize */) => {
    const query = queryInterface.dropTable('users');
    return query;
  }
};

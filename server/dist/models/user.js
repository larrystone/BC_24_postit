'use strict';

module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define('user', {
    username: { type: DataTypes.STRING,
      allowNull: false,
      unique: true },
    email: { type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: { type: DataTypes.STRING,
      allowNull: false
    },
    phone: DataTypes.INTEGER,
    last_login: DataTypes.DATE
  }, {
    classMethods: {
      associate: function associate(models) {
        user.hasMany(models.message, {
          foreignKey: 'userId',
          as: 'messages'
        });
        user.hasMany(models.group_user, {
          foreignKey: 'userId' });
      }
    }
  });

  return user;
};
//# sourceMappingURL=user.js.map
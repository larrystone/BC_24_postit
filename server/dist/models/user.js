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
    password_hasher: {
      type: DataTypes.VIRTUAL,
      set: function set(val) {
        undefined.setDataValue('password_hasher', val);
        undefined.setDataValue('password', undefined.salt + val);
      },
      validate: {
        isLongEnough: function isLongEnough(val) {
          if (val.length < 7) {
            throw new Error('Please choose a longer password');
          }
        }
      }
    },
    phone: DataTypes.INTEGER
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
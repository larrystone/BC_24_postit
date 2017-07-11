'use strict';

module.exports = function (sequelize, DataTypes) {
  var group = sequelize.define('group', {
    name: { type: DataTypes.STRING,
      allowNull: false }
  }, {
    classMethods: {
      associate: function associate(models) {
        group.hasMany(models.message, {
          foreignKey: 'groupId',
          as: 'messages'
        });
      }
    }
  });

  return group;
};
//# sourceMappingURL=group.js.map
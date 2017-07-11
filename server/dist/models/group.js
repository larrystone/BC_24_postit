'use strict';

module.exports = function (sequelize, DataTypes) {
  var group = sequelize.define('group', {
    name: { type: DataTypes.STRING,
      allowNull: false },
    userid: { type: DataTypes.INTEGER,
      allowNull: false },
    admin: { type: DataTypes.BOOLEAN,
      defaultValue: false }
  }, {
    classMethods: {
      associate: function associate(models) {
        group.belongsTo(models.user, {
          foreignKey: 'userId',
          onDelete: 'CASCADE'
        });
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
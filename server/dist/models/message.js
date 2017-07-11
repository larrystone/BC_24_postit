'use strict';

module.exports = function (sequelize, DataTypes) {
  var message = sequelize.define('message', {
    content: { type: DataTypes.STRING,
      allowNull: false },
    read: { type: DataTypes.BOOLEAN,
      defaultValue: false },
    priority: {
      type: DataTypes.ENUM,
      values: ['Normal', 'Urgent', 'Critical']
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        message.belongsTo(models.user, {
          foreignKey: 'userId',
          onDelete: 'CASCADE'
        });
        message.belongsTo(models.group, {
          foreignKey: 'groupId',
          onDelete: 'CASCADE'
        });
      }
    }
  });

  return message;
};
//# sourceMappingURL=message.js.map
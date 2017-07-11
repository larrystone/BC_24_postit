'use strict';

module.exports = function (sequelize, DataTypes) {
  var groupUsers = sequelize.define('group_user', {
    userid: DataTypes.INTEGER,
    groupid: DataTypes.INTEGER,
    admin: { type: DataTypes.BOOLEAN,
      defaultValue: false }
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations
        groupUsers.belongsTo(models.user, {
          foreignKey: 'userId' });
        groupUsers.belongsTo(models.group, {
          foreignKey: 'groupId' });
      }
    }
  });
  return groupUsers;
};
//# sourceMappingURL=group_user.js.map
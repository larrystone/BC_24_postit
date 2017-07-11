'use strict';

module.exports = function (sequelize, DataTypes) {
  var groupUsers = sequelize.define('group_users', {
    name: { type: DataTypes.STRING,
      allowNull: false },
    userid: { type: DataTypes.INTEGER,
      references: 'user',
      referencesKey: 'id',
      allowNull: false },
    groupid: { type: DataTypes.INTEGER,
      references: 'group',
      referencesKey: 'id',
      allowNull: false }
  }, {
    classMethods: {
      // associate: (models) => {
      //   // associations can be defined here
      // }
    }
  });

  return groupUsers;
};
//# sourceMappingURL=group_userssdsd.js.map
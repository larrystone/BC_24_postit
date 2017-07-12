module.exports = (sequelize, DataTypes) => {
  const groupUsers = sequelize.define('group_user', {
    userid: DataTypes.INTEGER,
    groupid: DataTypes.INTEGER,
    admin: { type: DataTypes.BOOLEAN,
      defaultValue: false }
  }, {
    classMethods: {
      associate: (models) => {
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

/**
 * @fileOverview Define group_user database model and associations
 * 
 * @exports group_user default
 * @param  {obj} sequelize sequelize object
 * @param  {obj} DataTypes DataTypes object
 * @return {obj}  groupUsers object
 */
export default (sequelize, DataTypes) => {
  const groupUsers = sequelize.define('group_user', {
    userid: DataTypes.INTEGER,
    groupid: DataTypes.INTEGER,
    admin: { type: DataTypes.BOOLEAN,
      defaultValue: false }
  }, {
    classMethods: {
      associate: (models) => {
        // group associations
        groupUsers.belongsTo(models.user, {
          foreignKey: 'userId' });
        groupUsers.belongsTo(models.group, {
          foreignKey: 'groupId' });
      }
    }
  });
  return groupUsers;
};

/**
 * @fileOverview Define group database model and associations
 * 
 * @exports group default
 * @param  {obj} sequelize sequelize object
 * @param  {obj} DataTypes DataTypes object
 * @return {obj}  group object
 */
export default (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    name: { type: DataTypes.STRING,
      allowNull: false,
      unique: true },
  }, {
    classMethods: {
      // associations
      associate: (models) => {
        group.hasMany(models.message, {
          foreignKey: 'groupId',
          as: 'messages',
        });
      }
    }
  });

  return group;
};

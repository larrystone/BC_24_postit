module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    name: { type: DataTypes.STRING,
      allowNull: false,
      unique: true },
  }, {
    classMethods: {
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

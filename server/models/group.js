module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    name: { type: DataTypes.STRING,
      allowNull: false },
    userid: { type: DataTypes.INTEGER,
      allowNull: false },
    admin: { type: DataTypes.BOOLEAN,
      defaultValue: false }
  }, {
    classMethods: {
      associate: (models) => {
        group.belongsTo(models.Todo, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        });
      }
    }
  });

  return group;
};

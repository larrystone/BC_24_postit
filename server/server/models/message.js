module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    content: { type: DataTypes.STRING,
      allowNull: false },
    read: { type: DataTypes.BOOLEAN,
      defaultValue: false },
    priority: {
      type: DataTypes.ENUM,
      values: ['Normal', 'Urgent', 'Critical']
    }
  },
  {
    classMethods: {
      associate: (models) => {
        message.belongsTo(models.user, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        });
        message.belongsTo(models.group, {
          foreignKey: 'groupId',
          onDelete: 'CASCADE',
        });
      }
    }
  });

  return message;
};
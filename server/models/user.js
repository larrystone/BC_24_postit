module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: { type: DataTypes.STRING,
      allowNull: false },
    email: { type: DataTypes.STRING,
      allowNull: false },
    password: { type: DataTypes.STRING,
      allowNull: false },
    phone: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models) => {
        user.hasMany(models.group, {
          foreignKey: 'userId',
          as: 'groups',
        });
        user.hasMany(models.message, {
          foreignKey: 'userId',
          as: 'messages',
        });
      },
    }
  });

  return user;
};

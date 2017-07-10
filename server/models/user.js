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
        models.hasMany(models.Groups, {
          foreignKey: 'userId',
          as: 'groups',
        });
      },
    }
  });

  return user;
};

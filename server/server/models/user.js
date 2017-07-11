module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: { type: DataTypes.STRING,
      allowNull: false,
      unique: true },
    email: { type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: { type: DataTypes.STRING,
      allowNull: false,
    },
    password_hasher: {
      type: DataTypes.VIRTUAL,
      set: (val) => {
        this.setDataValue('password_hasher', val);
        this.setDataValue('password', this.salt + val);
      },
      validate: {
        isLongEnough: (val) => {
          if (val.length < 7) {
            throw new Error('Please choose a longer password');
          }
        }
      }
    },
    phone: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models) => {
        user.hasMany(models.message, {
          foreignKey: 'userId',
          as: 'messages',
        });
        user.hasMany(models.group_user, {
          foreignKey: 'userId' });
      },
    }
  });

  return user;
};

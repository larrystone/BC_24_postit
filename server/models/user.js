/**
 * @fileOverview Define user database model and associations
 * 
 * @exports user default
 * @param  {obj} sequelize sequelize object
 * @param  {obj} DataTypes DataTypes object
 * @return {obj}  user object
 */
export default (sequelize, DataTypes) => {
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
    phone: DataTypes.INTEGER,
    last_login: DataTypes.DATE
  }, {
    classMethods: {
      // associations
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

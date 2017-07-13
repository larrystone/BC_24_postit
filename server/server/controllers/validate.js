import models from '../models';

const groupser = models.group_user;

module.exports.userType = (groupUser, userId, groupId) => {
  const vv = groupser
    .findAll({
      attributes: ['admin'],
      where: {
        $and: [
          { userid: userId },
          { groupid: groupId }
        ]
      }
    }).then((value) => {
      console.log(value.get());
      return JSON.stringify(value);
    }).catch( (error) => {
      return {
      message: 'Error Creating user. See log below for more info', 
      log: error }});
};

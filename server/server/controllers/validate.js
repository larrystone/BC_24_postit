import models from '../models';

const groupUser = models.group_user;

module.exports.isAdmin = (/* groupUser, */ userId, groupId) => {
  let admin;
  groupUser
    .findOne({
      attributes: ['admin'],
      where: {
        $and: [
          { userid: userId },
          { groupid: groupId }
        ]
      }
    })
    .then((result) => {
      admin = result;
    })
    .catch((/* error */) => {
      const result = false;
      admin = result;
    });

  return admin;
};

module.exports.isMember = (userId, groupId) => {
  let member;
  groupUser
    .findOne({
      attributes: ['admin'],
      where: {
        $and: [
          { userid: userId },
          { groupid: groupId }
        ]
      }
    })
    .then((result) => {
      if (result) {
        member = true;
      }
    })
    .catch((/* error */) => {
      member = false;
    });

  return member;
};

import models from '../models';
import validate from './validate';

const group = models.group;
const groupUser = models.group_user;

module.exports.createGroup = (req, res) => {
  const newGroup = group
    .create({
      name: req.body.name.toUpperCase()
    })
    .then((result) => {
      groupUser.create({
        groupid: result.id,
        userid: req.session.user.id,
        admin: true
      });
      res.status(201).send(result);
    })
    .catch(error => res.status(400).send({ title: 'Oops...',
      message: `Error Creating group, 
might be the group already exists. See log below for more info`,
      log: error }));

  return newGroup;
};

module.exports.addGroupUser = (req, res) => {
  const groupId = req.params.groupId;
  const userId = req.body.userid;

  if (validate.isAdmin(groupUser, userId, groupId)) {
    const newGroupUser = groupUser
      .create({
        groupid: groupId,
        userid: userId,
      })
      .then(result => res.status(201).send(result))
      .catch((error) => {
        res.status(400).send({ title: 'Oops...',
          message: `Error adding User to group,
might be the user/group does not exist!. See log below for more info`,
          log: error });
      });

    return newGroupUser;
  }

  res.status(201).send({ title: 'Oops...',
    message: `You do not seem to have 
      the neccesary permission to add users to this group` });
};

import models from '../models';

const group = models.group;
const groupUser = models.group_user;

module.exports.createGroup = (req, res) => {
  const newGroup = group
    .create({
      name: req.body.name
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
  const newGroupUser = groupUser
    .create({
      groupid: req.params.groupId,
      userid: req.body.userid,
    })
    .then(result => res.status(201).send(result))
    .catch((error) => {
      res.status(400).send({ title: 'Oops...',
        message: `Error adding User to group, 
might be the user/group does not exist!. See log below for more info`,
        log: error });
    });

  return newGroupUser;
};

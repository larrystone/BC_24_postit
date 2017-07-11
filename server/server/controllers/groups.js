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
    .catch(error => res.status(400).send(error));

  return newGroup;
};

module.exports.addGroupUser = (req, res) => {
  const newGroupUser = groupUser
    .create({
      groupid: req.params.groupId,
      userid: req.body.userid,
    })
    .then(result => res.status(201).send(result))
    .catch(error => res.status(400).send(error));

  return newGroupUser;
};

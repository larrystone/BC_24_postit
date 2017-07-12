import models from '../models';

const message = models.message;

module.exports.createMessage = (req, res) => {
  const newMessage = message
    .create({
      content: req.body.content,
      userid: req.session.user.id,
      groupid: req.params.groupId,
      priority: req.body.priority,
    })
    .then(result => res.status(201).send(result))
    .catch(error => res.status(400).send({ title: 'Oops...',
      message: 'Error Creating post. See log below for more info',
      log: error }));

  return newMessage;
};


// get all users on the users table
module.exports.getGroupMessages = (req, res) => {
  const groupMessages = message
    .findAll({
      attributes: ['id', 'userid', 'content', 'createdAt'],
      where: { groupid: req.params.groupId }
    })
    .then((result) => {
      if (!result) {
        return res.status(404).send({ title: 'Sorry...',
          message: 'No Messages was found',
        });
      }

      return res.status(200).send(result);
    })
    .catch(error => res.status(400).send({ title: 'Oops...',
      message: 'Error fetching posts. See log below for more info',
      log: error }));

  return groupMessages;
};

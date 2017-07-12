import models from '../models';
import validate from './validate';

const message = models.message;

/**
 * This ting foes thins
 * @param {*} req
 * @param {*} res
 * @returns {*} newMessage
 */
module.exports.createMessage = (req, res) => {
  const groupId = req.params.groupId;
  const userId = req.session.user.id;

  if (validate.isMember(userId, groupId) === true || validate.isMember(userId, groupId) === false) {
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
  }
  res.status(201).send({ title: 'Oops...',
    message: `You do not seem to have 
      the neccesary permission to post messages to this group` });
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

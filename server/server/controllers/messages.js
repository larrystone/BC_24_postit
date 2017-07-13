import models from '../models';
import validate from './validate';

const message = models.message;

/**
 * @exports createMessage
 * @param  {obj} req request object
 * @param  {obj} res result object
 * @return {funct}  newMessage function
 */
module.exports.createMessage = (req, res) => {
  const groupId = req.params.groupId;
  const userId = req.session.user.id;

  if (validate.userType(userId, groupId) !== 'null') {
    /**
     * Creation of Message by user that belongs to group
     *
     * @param  {string} name username string
     * @return {funct}   newGroup function
     * @public
     */
    const newMessage = message
      .create({
        content: req.body.content.trim(),
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


/**
 * @exports getGroupMessages
 * @param  {obj} req request object
 * @param  {obj} res result object
 * @return {obj}  groupMessages object
 */
module.exports.getGroupMessages = (req, res) => {
  // get all messages on group
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

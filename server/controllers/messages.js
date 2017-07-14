import models from '../models';

const message = models.message;
const groupUser = models.group_user;
/**
 * @exports createMessage
 * @param  {obj} req request object
 * @param  {obj} res result object
 * @return {funct}  newMessage function
 */
module.exports.createMessage = (req, res) => {
  const groupId = req.params.groupId;
  const userId = req.session.user.id;

  // check if the guy trying to post is a member
  groupUser
    .findOne({
      where: {
        $and: [
          { userid: userId },
          { groupid: groupId }
        ]
      }
    }).then((value) => {
      if (value) {
        if (!req.body.content) {
          throw new Error();
        }
        // create message on the group then
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

      res.status(401).send({ title: 'Oops...',
        message: `You do not seem to have 
      the neccesary permission to post messages to this group` });
    });
};


/**
 * @exports getGroupMessages
 * @param  {obj} req request object
 * @param  {obj} res result object
 * @return {obj}  groupMessages object
 */
module.exports.getGroupMessages = (req, res) => {
  const groupId = req.params.groupId;
  const userId = req.session.user.id;

  // check if the guy trying to read posts is a member
  groupUser
    .findOne({
      where: {
        $and: [
          { userid: userId },
          { groupid: groupId }
        ]
      }
    }).then((value) => {
      if (value) {
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
      }
      res.status(401).send({ title: 'Oops...',
        message: `You do not seem to have 
      the neccesary permission to post messages to this group` });
    });
};

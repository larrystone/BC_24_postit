
import models from '../models';
import validate from './validate';

const group = models.group;
const groupUser = models.group_user;

/**
 * @exports createGroup
 * @param  {obj} req request object
 * @param  {obj} res result object
 * @return {funct}  newGroup function
 */
module.exports.createGroup = (req, res) => {
/**
 * Creation of Group by user
 *
 * @param  {string} name username string
 * @return {funct}   newGroup function
 * @public
 */
  const newGroup = group
    .create({
      name: req.body.name.toUpperCase().trim()
    })
    .then((result) => {
      /**
       * Creation of Group by user
       *
       * @param  {int} groupid groupId int
       * @param  {int} userid userId int
       * @param  {boolean} admin isAdmin boolean
       * @protected
       */
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

/**
 * @exports addGroupUser
 * @param  {obj} req request object
 * @param  {obj} res result object
 * @return {funct}  newGroup function
 */
module.exports.addGroupUser = (req, res) => {
  const groupId = req.params.groupId;
  const userId = req.body.userid;
  const st = validate.userType(groupUser, userId, groupId);

  // validates user as group admin before allowing addition of users
  if (validate.userType(groupUser, userId, groupId) === 'admin') {
    /**
     * Creation of Group by user
     *
     * @param  {int} groupid groupId int
     * @param  {int} userid userId int
     * @param  {boolean} admin isAdmin boolean
     * @return {obj}  newUser newUser object
     * @public
     */
    const newGroupUser = groupUser
      .create({
        groupid: groupId,
        userid: userId,
      })
      .then(result => res.status(201).send(result))
      .catch((error) => {
        // handle error adding user to group
        res.status(400).send({ title: 'Oops...',
          message: `Error adding User to group,
might be the user/group does not exist!. See log below for more info`,
          log: error });
      });

    return newGroupUser;
  } else {
    res.status(201).send({ title: 'Oops...',
      message: `${st} You do not seem to have 
      the neccesary permission to add users to this group` });
  }
  // user is not group admin
};

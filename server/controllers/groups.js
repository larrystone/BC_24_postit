
import { group, groupUser } from '../models';

/**
 * @exports createGroup
 * @param  {obj} req request object
 * @param  {obj} res result object
 * @return {funct}  newGroup function
 */
export default {
  createGroup: (req, res) => {
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
  },

  /**
 * @exports addGroupUser
 * @param  {obj} req request object
 * @param  {obj} res result object
 * @return {funct}  newGroup function
 */
  addGroupUser: (req, res) => {
    const groupId = req.params.groupId;
    const adminId = req.session.user.id;
    const userId = req.body.userid;

    // check if the guy tryin to add user is admin
    groupUser
      .findOne({
        attributes: ['admin'],
        where: {
          $and: [
            { userid: adminId },
            { groupid: groupId }
          ]
        }
      }).then((value) => {
        if (value.admin === true) {
        // check if the guy being added is not already in the group
          groupUser
            .findOne({
              attributes: ['admin'],
              where: {
                $and: [
                  { userid: userId },
                  { groupid: groupId }
                ]
              }
            }).then((result) => {
              if (!result) {
              // add guy to group
                const newGroupUser = groupUser
                  .create({
                    groupid: groupId,
                    userid: userId,
                  })
                  .then(data => res.status(201).send(data))
                  .catch((error) => {
                  // handle error adding user to group
                    res.status(400).send({ title: 'Oops...',
                      message: `Error adding User to group,
might be the user/group does not exist!. See log below for more info`,
                      log: error });
                  });

                return newGroupUser;
              }
              res.status(200).send({ title: 'No Need...',
                message: 'This user is already a member of this group' });
            });
        } else {
          res.status(401).send({ title: 'Oops...',
            message: `You do not seem to have 
      the neccesary permission to add users to this group` });
        }
      });
  }
};

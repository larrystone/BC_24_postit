import models from '../models';

const user = models.user;

module.exports.createUser = (req, res) => {
  const newUser = user
    .create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone
    })
    .then(result => res.status(201).send(result))
    .catch(error => res.status(400).send(error));

  return newUser;
};


module.exports.getUser = (req, res) => {
  const newUser = user
    .findOne({
      where: {
        $or: [
          { username: req.body.username },
          { email: req.body.email }
        ],
        password: req.body.password
      }
    })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      }

      return res.status(200).send(result);
    })
    .catch(error => res.status(400).send(error));

  return newUser;
};
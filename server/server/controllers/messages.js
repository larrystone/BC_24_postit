import models from '../models';

const message = models.message;

module.exports.createmessage = (req, res) => {
  const newmessage = message
    .create({
      name: req.body.name,
    })
    .then(result => res.status(201).send(result))
    .catch(error => res.status(400).send(error));

  return newmessage;
};

module.exports.addmessageUser = (req, res) => {
  const newmessage = message
    .create({
      userid: req.body.uid,
      name: req.body.name,
    })
    .then(result => res.status(201).send(result))
    .catch(error => res.status(400).send(error));

  return newmessage;
};

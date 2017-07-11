import models from '../models';

const group = models.group;

module.exports.createGroup = (req, res) => {
  const newGroup = group
    .create({
      name: req.body.name,
    })
    .then(result => res.status(201).send(result))
    .catch(error => res.status(400).send(error));

  return newGroup;
};

module.exports.addGroupUser = (req, res) => {
  const newGroup = group
    .create({
      userid: req.body.uid,
      name: req.body.name,
    })
    .then(result => res.status(201).send(result))
    .catch(error => res.status(400).send(error));

  return newGroup;
};

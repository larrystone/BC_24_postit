module.exports = (req, res) => {
  // fetch the group id
  const groupId = req.params.groupId * 1;

  // TODO use usrname to fecth userId, then use it to update database
  const userId = req.body.userId;

  res.status(200).json(
    { message: `Adding user with id: ${userId} to Groups with id: ${groupId}` });
};

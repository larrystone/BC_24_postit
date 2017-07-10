module.exports = (req, res) => {
  // fetch the group id
  const groupId = req.params.groupId * 1;

  // fetch the user id
  const post = req.body.message;

  res.status(200).json(
    { message: `Posting message ${post} to Group with id: ${groupId}` });
};

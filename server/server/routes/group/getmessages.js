module.exports = (req, res) => {
  // fetch the groupId from req
  const groupId = req.params.groupId * 1;

  res.status(200).json(
    { message: `fetching all messages from Group with id: ${groupId}` });
};

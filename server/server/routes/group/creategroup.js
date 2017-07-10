module.exports = (req, res) => {
  // fetch the user id
  const groupName = req.body.groupname;

  res.status(200).json(
    { message: `Creating group ${groupName}` });
};

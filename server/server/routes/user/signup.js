module.exports = (req, res) => {
  // fetch out the username email address and password, verify user

  res.status(200).json(
    { username: req.body.username, email: req.body.email, password: req.body.password });
};

"use strict";

module.exports = function (req, res) {
  // fetch out the username and password and verify user
  res.status(200).json({ username: req.body.username, password: req.body.password });
};
//# sourceMappingURL=signin.js.map
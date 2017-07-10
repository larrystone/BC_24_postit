"use strict";

module.exports = function (req, res) {
  // fetch the group id
  var groupId = req.params.groupId * 1;

  // fetch the user id
  var post = req.body.message;

  res.status(200).json({ message: "Posting message " + post + " to Group with id: " + groupId });
};
//# sourceMappingURL=postmessage.js.map